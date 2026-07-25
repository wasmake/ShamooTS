import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { PlatformKind } from '@shamoo/core';
import { describe, expect, it } from 'vitest';

import {
  CompilationError,
  compilePlugin,
  compilePluginOrThrow,
  validateCompilationRequest,
} from '../src/index.js';

const fixtures = fileURLToPath(new URL('./fixtures/', import.meta.url));
const request = (fixture: string) => ({
  tsconfig: `${fixtures}${fixture}/tsconfig.json`,
  entrypoint: 'src/plugin.ts',
  platforms: [PlatformKind.PAPER],
});

describe('shamooc metadata compiler', () => {
  it('discovers dependencies and declarations deterministically', async () => {
    const first = await compilePlugin(request('valid'));
    const second = await compilePlugin(request('valid'));
    expect(first.diagnostics).toEqual([]);
    expect(first.metadata).toEqual(second.metadata);
    await expect(
      readFile(`${fixtures}valid/expected.golden.json`, 'utf8').then(
        (value): unknown => JSON.parse(value) as unknown,
      ),
    ).resolves.toEqual(first.metadata);
    expect(first.metadata?.components.map((item) => item.name)).toEqual([
      'FixtureModule',
      'FixturePlugin',
      'Logger',
    ]);
    const plugin = first.metadata?.components.find((item) => item.name === 'FixturePlugin');
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

  it('retains every command parameter decorator argument without DI diagnostics', async () => {
    const result = await compilePlugin(request('commands'));
    expect(result.diagnostics).toEqual([]);
    const method = result.metadata?.components[0]?.methods[0];
    expect(method?.decorators[0]).toMatchObject({
      name: 'Command',
      arguments: [
        'sample give <target>',
        {
          aliases: ['example'],
          description: 'Give an item',
          permission: 'sample.give',
          sender: 'player',
        },
      ],
    });
    expect(method?.parameters.map((parameter) => parameter.token)).toEqual([
      {
        kind: 'token',
        value: {
          binding: 'Argument',
          arguments: ['target', { parser: 'player', suggestions: ['Alex', 'Steve'] }],
        },
      },
      {
        kind: 'token',
        value: {
          binding: 'Option',
          arguments: [
            'amount',
            {
              aliases: ['a'],
              parser: 'integer',
              required: true,
              suggestions: ['1', '64'],
            },
          ],
        },
      },
      { kind: 'token', value: { binding: 'Sender', arguments: [] } },
      { kind: 'token', value: { binding: 'Context', arguments: [] } },
    ]);
  });

  it('serializes literal tokens and resolves local/imported token declarations by symbol', async () => {
    const result = await compilePlugin(request('tokens'));
    expect(result.diagnostics).toEqual([]);
    expect(result.metadata?.components.map((item) => item.name)).toEqual(['TokenPlugin']);
    const dependencies = result.metadata?.components[0]?.constructor.map((item) => item.token);
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
    const first = cycle.metadata?.modules.find((item) => item.name === 'FirstModule');
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

  it('rejects non-exported, nested, default-only, and conflicting executable declarations', async () => {
    const classes = await compilePlugin(request('invalid-class-export'));
    expect(
      classes.diagnostics.filter((item) => item.code === 'EXECUTABLE_CLASS_EXPORT'),
    ).toHaveLength(3);
    expect(classes.metadata).toBeUndefined();

    const methods = await compilePlugin(request('invalid-executables'));
    expect(methods.diagnostics.filter((item) => item.code === 'DECORATOR_CONFLICT')).toHaveLength(
      3,
    );
    expect(methods.diagnostics.map((item) => item.message).join('\n')).toContain(
      '@Scheduled may only be declared once',
    );
    expect(
      methods.diagnostics.filter(
        (item) => item.code === 'DECORATOR_USAGE' && item.message.includes('normal identifier'),
      ),
    ).toHaveLength(4);
  });

  it('preserves forward module edges while excluding them from cycle detection', async () => {
    const result = await compilePlugin(request('forward-cycle'));
    expect(result.diagnostics).toEqual([]);
    expect(result.metadata?.modules.find((item) => item.name === 'FirstModule')?.imports).toEqual([
      { id: 'src/plugin.ts#SecondModule', forwardRef: true },
    ]);
    expect(result.metadata?.modules.find((item) => item.name === 'SecondModule')?.imports).toEqual([
      { id: 'src/plugin.ts#FirstModule', forwardRef: false },
    ]);
  });

  it('omits unrelated decorators from component and method metadata', async () => {
    const result = await compilePlugin(request('unrelated-decorator'));
    expect(result.diagnostics).toEqual([]);
    expect(result.metadata?.components[0]?.decorators.map((item) => item.name)).toEqual(['Plugin']);
    expect(result.metadata?.components[0]?.methods).toEqual([
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

  it('requires explicit Paper internal permissions without emitting them as compiler metadata', async () => {
    const denied = await compilePlugin(request('paper-internals'));
    expect(denied.diagnostics.filter((item) => item.code === 'PERMISSION_REQUIRED')).toHaveLength(
      2,
    );
    const permitted = await compilePlugin({
      ...request('paper-internals'),
      permissions: { nms: true, packets: true },
    });
    expect(permitted.diagnostics).toEqual([]);
    expect(permitted.metadata).not.toHaveProperty('permissions');
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
    expect(result.metadata?.components[0]?.methods).toEqual([
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
    expect(permitted.metadata).not.toHaveProperty('permissions');
  });

  it('uses Paper, Velocity, and dual entrypoints only as compilation inputs', async () => {
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
    expect(dual.metadata).not.toHaveProperty('entrypoints');
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
      Object.fromEntries(dual.metadata?.components.map((item) => [item.name, item.platform]) ?? []),
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

  it('validates communication providers without inventing service method metadata', async () => {
    const base = request('platform-reach');
    const compileCommunication = (componentId: string) =>
      compilePlugin({
        ...base,
        paperEntrypoint: 'src/paper.ts',
        velocityEntrypoint: 'src/velocity.ts',
        platforms: [PlatformKind.PAPER, PlatformKind.VELOCITY],
        communication: {
          services: [
            {
              id: 'example.greeting',
              version: '1.0.0',
              componentId,
              methods: ['methodNotDuplicatedInCompilerMetadata'],
            },
          ],
          events: [],
          consumers: [],
        },
      });

    const valid = await compileCommunication('src/common.ts#CommonComponent');
    expect(valid.diagnostics).toEqual([]);
    expect(valid.metadata?.communication.services[0]?.methods).toEqual([
      'methodNotDuplicatedInCompilerMetadata',
    ]);

    const missing = await compileCommunication('src/missing.ts#Missing');
    expect(missing.diagnostics).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'COMMUNICATION_CONTRACT' })]),
    );

    const platformSpecific = await compileCommunication('src/paper-only.ts#PaperComponent');
    expect(platformSpecific.diagnostics.map((item) => item.message).join('\n')).toContain(
      'must use a common provider',
    );
  });

  it('handles namespace decorators, expression metadata, token fallbacks, and malformed module options', async () => {
    const result = await compilePlugin({
      ...request('edge-branches'),
      platforms: [PlatformKind.VELOCITY],
    });
    expect(result.diagnostics).toEqual([]);
    expect(result.metadata).not.toHaveProperty('entrypoints');
    const plugin = result.metadata?.components.find((item) => item.name === 'EdgePlugin');
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
    expect(result.metadata?.modules).toEqual(
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
      version: '0.1.0-rc.1',
      communication: { services: [], events: [], consumers: [] },
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
    expect(missingEntrypoint.metadata).toBeUndefined();
    const entrypointDiagnostic = missingEntrypoint.diagnostics.find((item) =>
      item.message.includes("entrypoint 'src/misspelled.ts'"),
    );
    expect(entrypointDiagnostic?.code).toBe('TYPESCRIPT');
    expect(entrypointDiagnostic?.suggestion).toContain('tsconfig');
    const configError = await compilePlugin(request('config-error'));
    expect(configError.metadata).toBeUndefined();
    const parseDiagnostic = configError.diagnostics.find((item) => item.message.includes('files'));
    expect(parseDiagnostic?.code).toBe('TYPESCRIPT');
  }, 60_000);
});
