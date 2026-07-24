import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { COMPILER_METADATA_VERSION, type CompilerManifest } from '@shamoo/metadata';
import { describe, expect, it } from 'vitest';

import { bundlePlugin } from '../src/index.js';

const projectRoot = dirname(fileURLToPath(import.meta.url));
const manifest: CompilerManifest = {
  formatVersion: COMPILER_METADATA_VERSION,
  compilerVersion: 'test',
  packageName: '@fixture/bundle',
  components: [],
  modules: [],
  entrypoints: {
    paper: { source: 'fixtures/paper.ts', output: 'paper/index.js' },
    velocity: { source: 'fixtures/velocity.ts', output: 'velocity/index.js' },
  },
};

describe('platform bundler', () => {
  it('emits separate real ESM bundles and source maps', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-'));
    const artifacts = await bundlePlugin({ manifest, projectRoot, outputDirectory });
    expect(artifacts.map((item) => item.platform)).toEqual(['paper', 'velocity']);
    const paper = await readFile(join(outputDirectory, 'paper/index.js'), 'utf8');
    const velocity = await readFile(join(outputDirectory, 'velocity/index.js'), 'utf8');
    expect(paper).toContain('paper-only');
    expect(paper).not.toContain('velocity-only');
    expect(velocity).toContain('velocity-only');
    await expect(readFile(join(outputDirectory, 'paper/index.js.map'), 'utf8')).resolves.toContain(
      'sourcesContent',
    );
  });

  it('executes the Runtime lifecycle adapter and registers generated bindings from metadata', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-adapter-'));
    const callbacks = new Map<string, (...values: unknown[]) => unknown>();
    const registrations: unknown[][] = [];
    const commandOperations: { name: string; values: unknown[] }[] = [];
    let mainHandResult: unknown = { material: 'DIAMOND', amount: 2 };
    Reflect.set(globalThis, 'host', {
      registerCallback(name: string, callback: (...values: unknown[]) => unknown) {
        callbacks.set(name, callback);
        return true;
      },
      paperSubscribeEvent(...values: unknown[]) {
        registrations.push(values);
        return true;
      },
      paperRegisterCommand(...values: unknown[]) {
        registrations.push(values);
        return true;
      },
      paperCommandReply(...values: unknown[]) {
        commandOperations.push({ name: 'reply', values });
        return true;
      },
      paperCommandFindPlayer(...values: unknown[]) {
        commandOperations.push({ name: 'findPlayer', values });
        return { id: 'player-id', name: 'Sam', online: false };
      },
      paperCommandMainHand(...values: unknown[]) {
        commandOperations.push({ name: 'mainHand', values });
        return mainHandResult;
      },
      paperCommandTakeMainHand(...values: unknown[]) {
        commandOperations.push({ name: 'takeMainHand', values });
        return false;
      },
    });
    try {
      const adapterManifest: CompilerManifest = {
        ...manifest,
        components: [
          {
            id: 'fixtures/runtime-adapter.ts#AdapterPlugin',
            kind: 'plugin',
            name: 'AdapterPlugin',
            file: 'fixtures/runtime-adapter.ts',
            platform: 'paper',
            decorators: [],
            constructor: [],
            properties: [],
            methods: [
              {
                name: 'enabled',
                lifecycle: 'enable',
                decorators: [],
                parameters: [],
                location: { file: 'fixtures/runtime-adapter.ts', line: 4, column: 3 },
              },
              {
                name: 'joined',
                invocation: 'event',
                decorators: [
                  {
                    name: 'OnPlayerJoinEvent',
                    arguments: [],
                    location: { file: 'fixtures/runtime-adapter.ts', line: 8, column: 3 },
                  },
                ],
                parameters: [],
                location: { file: 'fixtures/runtime-adapter.ts', line: 8, column: 3 },
              },
              {
                name: 'commanded',
                invocation: 'command',
                decorators: [
                  {
                    name: 'Command',
                    arguments: ['sample'],
                    location: { file: 'fixtures/runtime-adapter.ts', line: 13, column: 3 },
                  },
                ],
                parameters: [],
                location: { file: 'fixtures/runtime-adapter.ts', line: 13, column: 3 },
              },
            ],
            location: { file: 'fixtures/runtime-adapter.ts', line: 3, column: 1 },
          },
        ],
        entrypoints: {
          paper: { source: 'fixtures/runtime-adapter.ts', output: 'paper/index.js' },
        },
      };
      await bundlePlugin({ manifest: adapterManifest, projectRoot, outputDirectory });
      const module = (await import(
        `${join(outputDirectory, 'paper/index.js')}?fixture=${String(Date.now())}`
      )) as {
        enable(): Promise<void>;
      };
      await module.enable();
      expect(registrations).toEqual([
        [
          expect.objectContaining({
            componentId: 'fixtures/runtime-adapter.ts#AdapterPlugin',
            method: 'joined',
            namespace: 'paper',
            typeName: 'paperSubscribeEvent',
            protocolMajor: 1,
            protocolMinor: 0,
          }),
          'PlayerJoinEvent',
          'NORMAL',
          false,
          { $callback: 'compiled.fixtures/runtime-adapter.ts#AdapterPlugin.joined' },
        ],
        [
          expect.objectContaining({
            componentId: 'fixtures/runtime-adapter.ts#AdapterPlugin',
            method: 'commanded',
            namespace: 'paper',
            typeName: 'paperRegisterCommand',
            protocolMajor: 1,
            protocolMinor: 0,
          }),
          'sample',
          [],
          { $callback: 'compiled.fixtures/runtime-adapter.ts#AdapterPlugin.commanded' },
        ],
      ]);
      expect(callbacks.has('compiled.fixtures/runtime-adapter.ts#AdapterPlugin.joined')).toBe(true);
      const commandCallback = callbacks.get(
        'compiled.fixtures/runtime-adapter.ts#AdapterPlugin.commanded',
      );
      expect(commandCallback).toBeDefined();
      const context = commandCallback?.({
        token: 'command-token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: ['one'],
      }) as {
        readonly sender: object;
        readonly arguments: readonly string[];
        reply(message: string): boolean;
        findPlayer(name: string): object | null;
        mainHand(): object | null;
        takeMainHand(material: string, amount: number): boolean;
      };
      expect(context).toMatchObject({
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: ['one'],
      });
      expect(context).not.toHaveProperty('token');
      expect(Object.isFrozen(context)).toBe(true);
      expect(Object.isFrozen(context.sender)).toBe(true);
      expect(Object.isFrozen(context.arguments)).toBe(true);
      expect(context.reply('hello')).toBe(true);
      const player = context.findPlayer('Sam');
      expect(player).toEqual({ id: 'player-id', name: 'Sam', online: false });
      expect(Object.isFrozen(player)).toBe(true);
      const item = context.mainHand();
      expect(item).toEqual({ material: 'DIAMOND', amount: 2 });
      expect(Object.isFrozen(item)).toBe(true);
      expect(context.takeMainHand('DIAMOND', 2)).toBe(false);
      const operationMetadata: unknown = expect.objectContaining({
        componentId: 'fixtures/runtime-adapter.ts#AdapterPlugin',
        method: 'commanded',
      });
      expect(commandOperations).toEqual([
        { name: 'reply', values: [operationMetadata, 'command-token', 'hello'] },
        { name: 'findPlayer', values: [operationMetadata, 'command-token', 'Sam'] },
        { name: 'mainHand', values: [operationMetadata, 'command-token'] },
        {
          name: 'takeMainHand',
          values: [operationMetadata, 'command-token', 'DIAMOND', 2],
        },
      ]);
      expect(() => commandCallback?.({ token: 'missing fields' })).toThrow(TypeError);
      mainHandResult = { material: 'DIAMOND', amount: 'two' };
      expect(() => context.mainHand()).toThrow('Invalid Paper command item amount');
      expect(await readFile(join(outputDirectory, 'paper/index.js'), 'utf8')).toContain(
        'entry-enable',
      );
    } finally {
      Reflect.deleteProperty(globalThis, 'host');
    }
  });

  it('rejects opposite-platform imports and accepts an empty platform selection', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-leak-'));
    await expect(
      bundlePlugin({
        manifest: {
          ...manifest,
          entrypoints: { paper: { source: 'fixtures/leak.ts', output: 'paper/index.js' } },
        },
        projectRoot,
        outputDirectory,
      }),
    ).rejects.toThrow('paper bundle cannot import');
    await expect(
      bundlePlugin({
        manifest: { ...manifest, entrypoints: {} },
        projectRoot,
        outputDirectory,
      }),
    ).resolves.toEqual([]);
  });

  it.each(['fixtures/leak-export.ts', 'fixtures/leak-dynamic.ts'])(
    'rejects opposite-platform graph edges from %s',
    async (source) => {
      const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-edge-'));
      await expect(
        bundlePlugin({
          manifest: {
            ...manifest,
            entrypoints: { paper: { source, output: 'paper/index.js' } },
          },
          projectRoot,
          outputDirectory,
        }),
      ).rejects.toThrow('paper bundle cannot import');
    },
  );

  it('enforces manifest permissions on transitive restricted imports', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-permission-'));
    const restricted = {
      ...manifest,
      entrypoints: {
        paper: { source: 'fixtures/restricted-transitive.ts', output: 'paper/index.js' },
      },
    };
    await expect(
      bundlePlugin({
        manifest: restricted,
        projectRoot,
        outputDirectory,
        external: ['@shamoo/paper-nms'],
      }),
    ).rejects.toThrow("manifest capability 'nms'");
    await expect(
      bundlePlugin({
        manifest: { ...restricted, permissions: { nms: true } },
        projectRoot,
        outputDirectory,
        external: ['@shamoo/paper-nms'],
      }),
    ).resolves.toHaveLength(1);
  });

  it('enforces builtin, host, and native capabilities from supplied metadata', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-capability-'));
    const restricted = {
      ...manifest,
      entrypoints: {
        paper: { source: 'fixtures/capabilities.ts', output: 'paper/index.js' },
      },
    };
    await expect(
      bundlePlugin({ manifest: restricted, projectRoot, outputDirectory, external: ['*.node'] }),
    ).rejects.toThrow('manifest capability');
    await expect(
      bundlePlugin({
        manifest: {
          ...restricted,
          permissions: {
            builtins: ['node:child_process', 'node:fs', 'node:https', 'node:worker_threads'],
            filesystem: { read: ['./'], write: ['./data'] },
            network: true,
            workers: true,
            childProcess: true,
            nativeAddons: true,
          },
        },
        projectRoot,
        outputDirectory,
        external: ['*.node'],
      }),
    ).resolves.toHaveLength(1);
  });

  it('rejects nonliteral dynamic import paths before bundling', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-dynamic-'));
    await expect(
      bundlePlugin({
        manifest: {
          ...manifest,
          entrypoints: {
            paper: { source: 'fixtures/dynamic-escape.ts', output: 'paper/index.js' },
          },
        },
        projectRoot,
        outputDirectory,
      }),
    ).rejects.toThrow('staticImportPath');
  });
});
