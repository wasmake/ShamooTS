import { mkdtemp, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { CompilerMetadata, ComponentMetadata } from '@shamoo/metadata';
import { afterEach, describe, expect, it } from 'vitest';

import { bundlePlugin } from '../src/index.js';

const projectRoot = dirname(fileURLToPath(import.meta.url));
const sourceLocation = (file: string) => ({ file, line: 1, column: 1 });
const callbackId = (componentId: string, method: string): string =>
  `compiled.${[...new TextEncoder().encode(`${componentId}\u0000${method}`)]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')}`;
const component = (
  id: string,
  file: string,
  platform: ComponentMetadata['platform'],
  methods: ComponentMetadata['methods'] = [],
): ComponentMetadata => ({
  id,
  kind: 'plugin',
  name: 'SharedPlugin',
  file,
  platform,
  decorators: [],
  constructor: [],
  properties: [],
  methods,
  location: sourceLocation(file),
});
const lifecycleMethod = (file: string): ComponentMetadata['methods'][number] => ({
  name: 'enable',
  lifecycle: 'enable',
  decorators: [],
  parameters: [],
  location: sourceLocation(file),
});
const metadata: CompilerMetadata = {
  version: 'compiler-secret-version',
  components: [
    component('fixtures/paper-component.ts#SharedPlugin', 'fixtures/paper-component.ts', 'paper', [
      lifecycleMethod('fixtures/paper-component.ts'),
    ]),
    component(
      'fixtures/velocity-component.ts#SharedPlugin',
      'fixtures/velocity-component.ts',
      'velocity',
      [lifecycleMethod('fixtures/velocity-component.ts')],
    ),
  ],
  modules: [],
  communication: { services: [], events: [], consumers: [] },
};

afterEach(() => {
  Reflect.deleteProperty(globalThis, 'host');
  Reflect.deleteProperty(globalThis, 'shamooEvaluations');
  Reflect.deleteProperty(globalThis, 'shamooRuntimeCalls');
});

describe('universal platform bundler', () => {
  it.each([
    ['paper', ['paper-root', 'paper-component', 'paper-enable']],
    ['velocity', ['velocity-root', 'velocity-component', 'velocity-enable']],
  ] as const)('emits exactly one lazy %s-capable bundle', async (platform, expected) => {
    const outputDirectory = await mkdtemp(join(tmpdir(), `shamoo-bundle-${platform}-`));
    const artifact = await bundlePlugin({
      metadata,
      entrypoints: { paper: 'fixtures/paper.ts', velocity: 'fixtures/velocity.ts' },
      projectRoot,
      outputDirectory,
    });
    expect(artifact.path).toBe(join(outputDirectory, 'index.js'));
    expect(await readdir(outputDirectory)).toEqual(['index.js', 'index.js.map']);
    await expect(readFile(artifact.map, 'utf8')).resolves.toContain('sourcesContent');
    const source = await readFile(artifact.path, 'utf8');
    expect(source).not.toContain('compiler-secret-version');

    Reflect.set(globalThis, 'shamooEvaluations', []);
    const module = (await import(
      `${artifact.path}?platform=${platform}-${String(Date.now())}`
    )) as {
      enable(context: object): Promise<void>;
    };
    expect(Reflect.get(globalThis, 'shamooEvaluations')).toEqual([]);
    await module.enable({ plugin: 'fixture', platform, metadata });
    expect(Reflect.get(globalThis, 'shamooEvaluations')).toEqual(expected);
    await expect(
      module.enable({
        plugin: 'fixture',
        platform: platform === 'paper' ? 'velocity' : 'paper',
        metadata,
      }),
    ).rejects.toThrow('changed after adapter initialization');
  });

  it('registers each compiled callback once with complete operation metadata', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-adapter-'));
    const callbacks = new Map<string, (...values: unknown[]) => unknown>();
    const registrations: unknown[][] = [];
    const commandOperations: { name: string; values: unknown[] }[] = [];
    const services: unknown[][] = [];
    let mainHandResult: unknown = { material: 'DIAMOND', amount: 2 };
    Reflect.set(globalThis, 'host', {
      registerCallback(name: string, callback: (...values: unknown[]) => unknown) {
        if (callbacks.has(name)) return false;
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
      shamooProvideService(...values: unknown[]) {
        services.push(values);
        return true;
      },
    });
    const file = 'fixtures/runtime-adapter.ts';
    const id = `@fixture/${file} with space#AdapterPlugin`;
    const joinedCallback = callbackId(id, 'joined');
    const commandedCallback = callbackId(id, 'commanded');
    const adapterMetadata: CompilerMetadata = {
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'AdapterPlugin',
          methods: [
            {
              name: 'enabled',
              lifecycle: 'enable',
              decorators: [],
              parameters: [],
              location: sourceLocation(file),
            },
            {
              name: 'joined',
              invocation: 'event',
              decorators: [
                { name: 'OnPlayerJoinEvent', arguments: [], location: sourceLocation(file) },
              ],
              parameters: [],
              location: sourceLocation(file),
            },
            {
              name: 'commanded',
              invocation: 'command',
              decorators: [
                { name: 'Command', arguments: ['sample'], location: sourceLocation(file) },
              ],
              parameters: [],
              location: sourceLocation(file),
            },
          ],
        },
      ],
      modules: [],
      communication: {
        services: [
          {
            id: 'fixture.service',
            version: '1.0.0',
            componentId: id,
            methods: ['serviceMethod'],
          },
        ],
        events: [],
        consumers: [],
      },
    };
    const artifact = await bundlePlugin({
      metadata: adapterMetadata,
      entrypoints: { paper: file },
      projectRoot,
      outputDirectory,
    });
    const module = (await import(`${artifact.path}?adapter=${String(Date.now())}`)) as {
      enable(context: object): Promise<void>;
    };
    await expect(module.enable({})).rejects.toThrow('context is invalid');
    const context = { plugin: 'adapter', platform: 'paper', metadata: adapterMetadata };
    await module.enable(context);
    await module.enable(context);

    const metadataFor = (typeName: string, method: string): unknown =>
      expect.objectContaining({
        namespace: 'paper',
        typeName,
        protocolMajor: 1,
        protocolMinor: 0,
        componentId: id,
        method,
      });
    expect(registrations).toEqual([
      [
        metadataFor('paperSubscribeEvent', 'joined'),
        'PlayerJoinEvent',
        'NORMAL',
        false,
        { $callback: joinedCallback },
      ],
      [
        metadataFor('paperRegisterCommand', 'commanded'),
        'sample',
        [],
        { $callback: commandedCallback },
      ],
    ]);
    expect([...callbacks.keys()]).toEqual([
      joinedCallback,
      commandedCallback,
      'service.fixture.service',
    ]);
    expect(services).toEqual([['fixture.service', '1.0.0', 'service.fixture.service']]);
    expect(Reflect.get(globalThis, 'shamooRuntimeCalls')).toEqual([
      'compiled-enable',
      'compiled-enable',
    ]);

    const commandCallback = callbacks.get(commandedCallback);
    const commandContext = commandCallback?.({
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
    expect(commandContext).toMatchObject({
      sender: { name: 'Console', kind: 'other' },
      alias: 'sample',
      arguments: ['one'],
    });
    expect(commandContext).not.toHaveProperty('token');
    expect(Object.isFrozen(commandContext)).toBe(true);
    expect(commandContext.reply('hello')).toBe(true);
    expect(commandContext.findPlayer('Sam')).toEqual({
      id: 'player-id',
      name: 'Sam',
      online: false,
    });
    expect(commandContext.mainHand()).toEqual({ material: 'DIAMOND', amount: 2 });
    expect(commandContext.takeMainHand('DIAMOND', 2)).toBe(false);
    expect(commandOperations).toEqual([
      {
        name: 'reply',
        values: [metadataFor('paperCommandReply', 'commanded'), 'command-token', 'hello'],
      },
      {
        name: 'findPlayer',
        values: [metadataFor('paperCommandFindPlayer', 'commanded'), 'command-token', 'Sam'],
      },
      {
        name: 'mainHand',
        values: [metadataFor('paperCommandMainHand', 'commanded'), 'command-token'],
      },
      {
        name: 'takeMainHand',
        values: [
          metadataFor('paperCommandTakeMainHand', 'commanded'),
          'command-token',
          'DIAMOND',
          2,
        ],
      },
    ]);
    mainHandResult = { material: 'DIAMOND', amount: 'two' };
    expect(() => commandContext.mainHand()).toThrow('Invalid Paper command item amount');
  });

  it('skips a service provider unavailable on the selected platform', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-platform-service-'));
    const services: unknown[][] = [];
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      shamooProvideService: (...values: unknown[]) => services.push(values),
    });
    const paperFile = 'fixtures/paper-component.ts';
    const velocityFile = 'fixtures/velocity-component.ts';
    const velocityId = `${velocityFile}#SharedPlugin`;
    const platformMetadata: CompilerMetadata = {
      version: 'test',
      components: [
        component('fixtures/paper-component.ts#SharedPlugin', paperFile, 'paper'),
        component(velocityId, velocityFile, 'velocity'),
      ],
      modules: [],
      communication: {
        services: [
          {
            id: 'fixture.velocity-service',
            version: '1.0.0',
            componentId: velocityId,
            methods: ['serviceMethod'],
          },
        ],
        events: [],
        consumers: [],
      },
    };
    const artifact = await bundlePlugin({
      metadata: platformMetadata,
      entrypoints: { paper: 'fixtures/paper.ts', velocity: 'fixtures/velocity.ts' },
      projectRoot,
      outputDirectory,
    });
    const module = (await import(`${artifact.path}?platform-service=${String(Date.now())}`)) as {
      enable(context: object): Promise<void>;
    };
    await expect(
      module.enable({ plugin: 'fixture', platform: 'paper', metadata: platformMetadata }),
    ).resolves.toBeUndefined();
    expect(services).toEqual([]);
  });

  it('fails initialization when the Runtime rejects a callback registration', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-rejected-callback-'));
    Reflect.set(globalThis, 'host', {
      registerCallback: () => false,
      paperSubscribeEvent: () => true,
    });
    const file = 'fixtures/runtime-adapter.ts';
    const id = `${file}#AdapterPlugin`;
    const rejectedCallback = callbackId(id, 'joined');
    const rejected: CompilerMetadata = {
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'AdapterPlugin',
          methods: [
            {
              name: 'joined',
              invocation: 'event',
              decorators: [
                { name: 'OnPlayerJoinEvent', arguments: [], location: sourceLocation(file) },
              ],
              parameters: [],
              location: sourceLocation(file),
            },
          ],
        },
      ],
      modules: [],
      communication: { services: [], events: [], consumers: [] },
    };
    const artifact = await bundlePlugin({
      metadata: rejected,
      entrypoints: { paper: file },
      projectRoot,
      outputDirectory,
    });
    const module = (await import(`${artifact.path}?rejected=${String(Date.now())}`)) as {
      enable(context: object): Promise<void>;
    };
    await expect(
      module.enable({ plugin: 'adapter', platform: 'paper', metadata: rejected }),
    ).rejects.toThrow(`Runtime rejected callback registration: ${rejectedCallback}`);
  });
});
