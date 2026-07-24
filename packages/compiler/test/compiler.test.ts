import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { packageName, PlatformKind } from '@shamoo/core';
import { describe, expect, it } from 'vitest';

import {
  CompilationError,
  compilePlugin,
  compilePluginOrThrow,
  readCompilerManifest,
  validateCompilationRequest,
} from '../src/index.js';

const fixtures = fileURLToPath(new URL('./fixtures/', import.meta.url));
const request = (fixture: string) => ({
  tsconfig: `${fixtures}${fixture}/tsconfig.json`,
  entrypoint: 'src/plugin.ts',
  packageName: packageName('@fixture/plugin'),
  platforms: [PlatformKind.PAPER],
});

describe('shamooc metadata compiler', () => {
  it('discovers dependencies and declarations deterministically', async () => {
    const first = await compilePlugin(request('valid'));
    const second = await compilePlugin(request('valid'));
    expect(first.diagnostics).toEqual([]);
    expect(first.metadata).toBe(second.metadata);
    await expect(readFile(`${fixtures}valid/expected.golden.json`, 'utf8')).resolves.toBe(
      first.metadata,
    );
    expect(first.manifest?.components.map((item) => item.name)).toEqual([
      'FixtureModule',
      'FixturePlugin',
      'Logger',
    ]);
    const plugin = first.manifest?.components.find((item) => item.name === 'FixturePlugin');
    expect(plugin?.constructor[0]?.token).toMatchObject({ kind: 'class', name: 'Logger' });
    expect(plugin?.constructor[0]).toMatchObject({
      optional: true,
      all: true,
      lazy: true,
      name: 'logger',
      qualifier: 'Logger.name',
    });
    expect(plugin?.properties[0]?.token).toMatchObject({ kind: 'token', name: 'AUDIT' });
    expect(plugin?.methods.map((item) => item.name)).toEqual(['enable', 'event', 'command']);
  });

  it('requires explicit tokens for interfaces', async () => {
    const result = await compilePlugin(request('interface-token'));
    expect(
      result.diagnostics.filter((item) => item.code === 'INJECTION_TOKEN_REQUIRED'),
    ).toHaveLength(5);
    expect(result.diagnostics.map((item) => item.message).join('\n')).toContain(
      "method dependency 'typeOnly'",
    );
  });

  it('serializes literal tokens and resolves local/imported token declarations by symbol', async () => {
    const result = await compilePlugin(request('tokens'));
    expect(result.diagnostics).toEqual([]);
    expect(result.manifest?.components.map((item) => item.name)).toEqual(['TokenPlugin']);
    const dependencies = result.manifest?.components[0]?.constructor.map((item) => item.token);
    expect(dependencies).toEqual([
      { kind: 'token', value: 'literal' },
      { kind: 'token', name: 'IMPORTED_TOKEN', module: 'src/tokens.ts' },
      { kind: 'token', name: 'LOCAL_TOKEN', module: 'src/plugin.ts' },
    ]);
  });

  it('reports module cycles and invalid decorator targets/conflicts', async () => {
    const cycle = await compilePlugin(request('cycle'));
    expect(cycle.diagnostics).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'MODULE_CYCLE' })]),
    );
    const first = cycle.manifest?.modules.find((item) => item.name === 'FirstModule');
    expect(first).toBeUndefined();
    expect(cycle.diagnostics.find((item) => item.code === 'MODULE_CYCLE')?.dependencyPath).toEqual([
      'src/plugin.ts#ThirdModule',
      'src/plugin.ts#FourthModule',
      'src/plugin.ts#ThirdModule',
    ]);
    const bad = await compilePlugin(request('bad-decorator'));
    expect(bad.diagnostics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'DECORATOR_CONFLICT' }),
        expect.objectContaining({ code: 'DECORATOR_USAGE' }),
      ]),
    );
    expect(bad.diagnostics.filter((item) => item.code === 'DECORATOR_CONFLICT')).toHaveLength(4);
    expect(
      bad.diagnostics.find(
        (item) =>
          item.code === 'INJECTION_TOKEN_REQUIRED' &&
          item.message.includes("Property 'missingToken'"),
      ),
    ).toBeDefined();

    const identity = await compilePlugin(request('module-identity'));
    const moduleCycle = identity.diagnostics.find((item) => item.code === 'MODULE_CYCLE');
    expect(moduleCycle?.dependencyPath).toEqual([
      'src/left.ts#Shared',
      'src/right.ts#Shared',
      'src/left.ts#Shared',
    ]);
  });

  it('preserves forward module edges while excluding them from cycle detection', async () => {
    const result = await compilePlugin(request('forward-cycle'));
    expect(result.diagnostics).toEqual([]);
    expect(result.manifest?.modules.find((item) => item.name === 'FirstModule')?.imports).toEqual([
      { id: 'src/plugin.ts#SecondModule', forwardRef: true },
    ]);
    expect(result.manifest?.modules.find((item) => item.name === 'SecondModule')?.imports).toEqual([
      { id: 'src/plugin.ts#FirstModule', forwardRef: false },
    ]);
  });

  it('omits unrelated decorators from component and method metadata', async () => {
    const result = await compilePlugin(request('unrelated-decorator'));
    expect(result.diagnostics).toEqual([]);
    expect(result.manifest?.components[0]?.decorators.map((item) => item.name)).toEqual(['Plugin']);
    expect(result.manifest?.components[0]?.methods).toEqual([
      expect.objectContaining({
        name: 'enabled',
        decorators: [expect.objectContaining({ name: 'OnEnable' })],
      }),
    ]);
  });

  it('rejects native addons', async () => {
    const result = await compilePlugin(request('native'));
    expect(result.diagnostics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'UNSUPPORTED_IMPORT' }),
        expect.objectContaining({ code: 'PERMISSION_REQUIRED' }),
      ]),
    );
    const permitted = await compilePlugin({
      ...request('native'),
      permissions: {
        builtins: ['node:fs'],
        filesystem: { read: ['./'], write: [] },
        nativeAddons: true,
      },
    });
    expect(permitted.diagnostics.filter((item) => item.code === 'PERMISSION_REQUIRED')).toEqual([]);
  });

  it('requires explicit Paper internal permissions and records them in the manifest', async () => {
    const denied = await compilePlugin(request('paper-internals'));
    expect(denied.diagnostics.filter((item) => item.code === 'PERMISSION_REQUIRED')).toHaveLength(
      2,
    );
    const permitted = await compilePlugin({
      ...request('paper-internals'),
      permissions: { nms: true, packets: true },
    });
    expect(permitted.diagnostics).toEqual([]);
    expect(permitted.manifest?.permissions).toEqual({ nms: true, packets: true });
    const velocity = await compilePlugin({
      ...request('paper-internals'),
      platforms: [PlatformKind.VELOCITY],
      permissions: { nms: true, packets: true },
    });
    expect(velocity.diagnostics).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'PLATFORM_LEAK' })]),
    );
  }, 120_000);

  it('follows reachable external dependency declarations for restricted imports', async () => {
    const denied = await compilePlugin(request('external-restricted'));
    expect(
      denied.diagnostics.some(
        (item) => item.code === 'PERMISSION_REQUIRED' && item.message.includes('@shamoo/paper-nms'),
      ),
    ).toBe(true);
    const permitted = await compilePlugin({
      ...request('external-restricted'),
      permissions: { nms: true },
    });
    expect(permitted.diagnostics).toEqual([]);
  }, 120_000);

  it('extracts generated event convenience decorator metadata', async () => {
    const result = await compilePlugin(request('generated-event'));
    expect(result.diagnostics).toEqual([]);
    expect(result.manifest?.components[0]?.methods).toEqual([
      expect.objectContaining({
        name: 'joined',
        invocation: 'event',
        decorators: [expect.objectContaining({ name: 'OnPlayerJoinEvent', arguments: [] })],
      }),
    ]);
  });

  it('checks every static import form, nonliteral dynamic paths, and bare builtins', async () => {
    const result = await compilePlugin(request('import-forms'));
    expect(result.diagnostics.some((item) => item.code === 'PLATFORM_LEAK')).toBe(true);
    expect(result.diagnostics.some((item) => item.message.includes('node:fs'))).toBe(true);
    expect(result.diagnostics.some((item) => item.message.includes('node:path'))).toBe(true);
    expect(result.diagnostics.some((item) => item.message.includes('node:vm'))).toBe(true);
    expect(
      result.diagnostics.some(
        (item) =>
          item.message.includes('not statically resolvable') &&
          item.suggestion?.includes('string literal') === true,
      ),
    ).toBe(true);
    const permitted = await compilePlugin({
      ...request('import-forms'),
      permissions: {
        builtins: ['node:fs', 'path'],
        filesystem: { read: ['./'], write: [] },
      },
    });
    expect(permitted.diagnostics.filter((item) => item.code === 'PERMISSION_REQUIRED')).toEqual([]);
  });

  it('rejects capability escapes through aliases, re-exports, and dynamic imports', async () => {
    const denied = await compilePlugin({
      ...request('permission-escapes'),
      permissions: {
        builtins: ['node:fs', 'node:https', 'node:worker_threads', 'node:child_process'],
      },
    });
    const messages = denied.diagnostics.map((item) => item.message).join('\n');
    for (const capability of ['filesystem', 'network', 'workers', 'childProcess', 'Native addon'])
      expect(messages).toContain(capability);

    const permitted = await compilePlugin({
      ...request('permission-escapes'),
      permissions: {
        builtins: ['node:fs', 'node:https', 'node:worker_threads', 'node:child_process'],
        filesystem: { read: ['./'], write: ['./data'] },
        network: true,
        workers: true,
        childProcess: true,
        nativeAddons: true,
      },
    });
    expect(permitted.diagnostics).toEqual([]);
    expect(permitted.manifest?.permissions).toEqual({
      builtins: ['node:child_process', 'node:fs', 'node:https', 'node:worker_threads'],
      filesystem: { read: ['./'], write: ['./data'] },
      network: true,
      workers: true,
      childProcess: true,
      nativeAddons: true,
    });
  });

  it('selects Paper, Velocity, and dual entrypoints without claiming generated APIs', async () => {
    const base = request('platforms');
    const paper = await compilePlugin({ ...base, entrypoint: 'src/paper.ts' });
    expect(paper.diagnostics).toEqual([]);
    const leak = await compilePlugin({ ...base, entrypoint: 'src/velocity.ts' });
    expect(leak.diagnostics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'PLATFORM_LEAK',
          dependencyPath: ['src/velocity.ts', '@shamoo/velocity'],
        }),
      ]),
    );
    const dual = await compilePlugin({
      ...base,
      entrypoint: 'src/paper.ts',
      paperEntrypoint: 'src/paper.ts',
      velocityEntrypoint: 'src/velocity.ts',
      platforms: [PlatformKind.PAPER, PlatformKind.VELOCITY],
    });
    expect(dual.diagnostics).toEqual([]);
    expect(dual.manifest?.entrypoints).toEqual({
      paper: { source: 'src/paper.ts', output: 'paper/index.js' },
      velocity: { source: 'src/velocity.ts', output: 'velocity/index.js' },
    });
  }, 60_000);

  it('assigns metadata ownership from separate transitive platform reachability', async () => {
    const base = request('platform-reach');
    const dual = await compilePlugin({
      ...base,
      paperEntrypoint: 'src/paper.ts',
      velocityEntrypoint: 'src/velocity.ts',
      platforms: [PlatformKind.PAPER, PlatformKind.VELOCITY],
    });
    expect(dual.diagnostics).toEqual([]);
    expect(
      Object.fromEntries(dual.manifest?.components.map((item) => [item.name, item.platform]) ?? []),
    ).toEqual({
      CommonComponent: 'common',
      PaperComponent: 'paper',
      VelocityComponent: 'velocity',
    });

    const leak = await compilePlugin({
      ...base,
      entrypoint: 'src/leak.ts',
      platforms: [PlatformKind.PAPER],
    });
    expect(leak.diagnostics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'PLATFORM_LEAK',
          dependencyPath: ['src/leak.ts', 'src/velocity-only.ts', '@shamoo/velocity'],
        }),
      ]),
    );
  });

  it('handles namespace decorators, expression metadata, token fallbacks, and malformed module options', async () => {
    const result = await compilePlugin({
      ...request('edge-branches'),
      platforms: [PlatformKind.VELOCITY],
    });
    expect(result.diagnostics).toEqual([]);
    expect(result.manifest?.entrypoints).toEqual({
      velocity: { source: 'src/plugin.ts', output: 'velocity/index.js' },
    });
    const plugin = result.manifest?.components.find((item) => item.name === 'EdgePlugin');
    expect(plugin?.platform).toBe('common');
    expect(plugin?.decorators[0]?.arguments).toEqual([
      {
        '[computed]': 'undefined',
        expression: '1 + 2',
        nested: { a: 2, z: 1 },
      },
    ]);
    expect(plugin?.properties.map((item) => item.token)).toEqual([
      { kind: 'token', value: { binding: 'ConfigValue', value: 'value' } },
      { kind: 'token', value: '(1 + 2) as unknown as string' },
      { kind: 'class', name: 'Dependency', module: 'src/dependency.ts' },
      { kind: 'class', name: 'Dependency', module: 'src/dependency.ts' },
    ]);
    expect(plugin?.methods[0]?.parameters[0]?.token).toEqual({
      kind: 'class',
      name: 'Dependency',
      module: 'src/dependency.ts',
    });
    expect(result.manifest?.modules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'EdgeModule', declarations: [], exports: [] }),
        expect.objectContaining({ name: 'EmptyModule', declarations: [], exports: [] }),
      ]),
    );
  });

  it('validates requests and exposes throwing compilation', async () => {
    expect(() => {
      validateCompilationRequest({ ...request('valid'), entrypoint: '' });
    }).toThrow('must not be empty');
    expect(() => {
      validateCompilationRequest({ ...request('valid'), entrypoint: '   ' });
    }).toThrow('must not be empty');
    expect(() => {
      validateCompilationRequest({ ...request('valid'), platforms: [] });
    }).toThrow('At least one');
    expect(() => {
      validateCompilationRequest({
        ...request('valid'),
        platforms: [PlatformKind.PAPER, PlatformKind.PAPER],
      });
    }).toThrow('unique');
    await expect(compilePluginOrThrow(request('valid'))).resolves.toMatchObject({
      packageName: '@fixture/plugin',
    });
    await expect(compilePluginOrThrow(request('interface-token'))).rejects.toBeInstanceOf(
      CompilationError,
    );
    const missing = await compilePlugin({
      ...request('valid'),
      tsconfig: `${fixtures}missing.json`,
    });
    expect(missing.diagnostics[0]?.code).toBe('TYPESCRIPT');
    const missingEntrypoint = await compilePlugin({
      ...request('valid'),
      entrypoint: 'src/misspelled.ts',
    });
    expect(missingEntrypoint.manifest).toBeUndefined();
    const entrypointDiagnostic = missingEntrypoint.diagnostics.find((item) =>
      item.message.includes("entrypoint 'src/misspelled.ts'"),
    );
    expect(entrypointDiagnostic?.code).toBe('TYPESCRIPT');
    expect(entrypointDiagnostic?.suggestion).toContain('tsconfig');
    const configError = await compilePlugin(request('config-error'));
    expect(configError.manifest).toBeUndefined();
    const parseDiagnostic = configError.diagnostics.find((item) => item.message.includes('files'));
    expect(parseDiagnostic?.code).toBe('TYPESCRIPT');
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-metadata-'));
    const output = join(outputDirectory, 'manifest.json');
    await expect(compilePlugin({ ...request('valid'), output })).resolves.toMatchObject({
      diagnostics: [],
    });
    await expect(readCompilerManifest(output)).resolves.toMatchObject({
      packageName: '@fixture/plugin',
    });
    await writeFile(output, JSON.stringify({ formatVersion: 2, packageName: '@fixture/plugin' }));
    await expect(readCompilerManifest(output)).rejects.toThrow();
    await writeFile(
      output,
      JSON.stringify({ ...(await compilePluginOrThrow(request('valid'))), unexpected: true }),
    );
    await expect(readCompilerManifest(output)).rejects.toThrow();
  }, 60_000);
});
