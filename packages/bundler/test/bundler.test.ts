import { mkdtemp, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { compilePlugin } from '@shamoo/compiler';
import { PlatformKind } from '@shamoo/core';
import type { CanonicalValue, CompilerMetadata, ComponentMetadata } from '@shamoo/metadata';
import { afterEach, describe, expect, it } from 'vitest';

import { bundlePlugin } from '../src/index.js';
import { installRuntimeAdapter } from '../src/runtime-adapter.js';

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
  Reflect.deleteProperty(globalThis, 'shamooCommandInvocations');
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
    const sourceMap = JSON.parse(await readFile(artifact.map, 'utf8')) as {
      readonly sourcesContent?: readonly string[];
    };
    expect(sourceMap.sourcesContent).toBeDefined();
    expect(sourceMap.sourcesContent?.join('\n')).not.toContain(projectRoot);
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

  it('packs compiler-inferred parsers into runtime command descriptors', async () => {
    const fixture = join(projectRoot, '../../compiler/test/fixtures/commands');
    const compilation = await compilePlugin({
      tsconfig: join(fixture, 'tsconfig.json'),
      entrypoint: 'src/plugin.ts',
      platforms: [PlatformKind.PAPER],
    });
    expect(compilation.diagnostics).toEqual([]);
    if (compilation.metadata === undefined) throw new Error('Command fixture compilation failed.');

    const registrations: unknown[][] = [];
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback: () => true,
      paperRegisterCommand(...values: unknown[]) {
        registrations.push(values);
        return Promise.resolve(true);
      },
    });
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-parser-inference-'));
    const artifact = await bundlePlugin({
      metadata: compilation.metadata,
      entrypoints: { paper: 'src/plugin.ts' },
      projectRoot: fixture,
      outputDirectory,
    });
    const module = (await import(`${artifact.path}?parsers=${String(Date.now())}`)) as {
      enable(context: object): Promise<void>;
    };
    await module.enable({
      plugin: 'parser-fixture',
      platform: 'paper',
      metadata: compilation.metadata,
    });

    const routes = new Map(registrations.map((registration) => [registration[1], registration[3]]));
    expect(routes.get('sample')).toMatchObject({
      arguments: [{ name: 'target', parser: 'player' }],
      options: [{ name: 'amount', parser: 'integer' }],
    });
    expect(routes.get('infer')).toMatchObject({
      arguments: [
        { name: 'count', parser: 'number' },
        { name: 'enabled', parser: 'boolean' },
        { name: 'target', parser: 'player' },
        { name: 'mode', parser: 'string' },
        { name: 'level', parser: 'number' },
        { name: 'direction', parser: 'string' },
        { name: 'rank', parser: 'number' },
        { name: 'material', parser: 'material' },
        { name: 'shorthand', parser: 'integer' },
        { name: 'optional', parser: 'number' },
        { name: 'nullableTarget', parser: 'player' },
      ],
      options: [
        { name: 'label', parser: 'string' },
        { name: 'ratio', parser: 'number' },
        { name: 'verbose', parser: 'boolean' },
      ],
    });
  });

  it('registers each compiled callback once with complete operation metadata', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-adapter-'));
    const callbacks = new Map<string, (...values: unknown[]) => unknown>();
    const registrations: unknown[][] = [];
    const commandOperations: { name: string; values: unknown[] }[] = [];
    const services: unknown[][] = [];
    let resolveCommandRegistration: (() => void) | undefined;
    const commandRegistration = new Promise<void>((resolve) => {
      resolveCommandRegistration = resolve;
    });
    let mainHandResult: unknown = { material: 'DIAMOND', amount: 2 };
    let replyResult: unknown = Promise.resolve(true);
    Reflect.set(globalThis, 'host', {
      registerCallback(name: string, callback: (...values: unknown[]) => unknown) {
        if (callbacks.has(name)) return false;
        callbacks.set(name, callback);
        return true;
      },
      unregisterCallback(name: string) {
        return callbacks.delete(name);
      },
      paperSubscribeEvent(...values: unknown[]) {
        registrations.push(values);
        return true;
      },
      paperRegisterCommand(...values: unknown[]) {
        registrations.push(values);
        return commandRegistration;
      },
      paperCommandReply(...values: unknown[]) {
        commandOperations.push({ name: 'reply', values });
        return replyResult;
      },
      paperCommandOpenInventory(...values: unknown[]) {
        commandOperations.push({ name: 'openInventory', values });
        return Promise.resolve(true);
      },
      paperCommandGiveItem(...values: unknown[]) {
        commandOperations.push({ name: 'giveItem', values });
        return Promise.resolve(true);
      },
      paperCommandFindPlayer(...values: unknown[]) {
        commandOperations.push({ name: 'findPlayer', values });
        return Promise.resolve({ id: 'player-id', name: 'Sam', online: false });
      },
      paperCommandMainHand(...values: unknown[]) {
        commandOperations.push({ name: 'mainHand', values });
        return Promise.resolve(mainHandResult);
      },
      paperCommandTakeMainHand(...values: unknown[]) {
        commandOperations.push({ name: 'takeMainHand', values });
        return Promise.resolve(false);
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
    const legacyCommandedCallback = callbackId(id, 'legacyCommanded');
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
                {
                  name: 'OnPlayerRecipeBookClickEvent_2',
                  arguments: ['HIGHEST', true],
                  location: sourceLocation(file),
                },
              ],
              parameters: [],
              location: sourceLocation(file),
            },
            {
              name: 'commanded',
              invocation: 'command',
              decorators: [
                {
                  name: 'Command',
                  arguments: [
                    'Sample give <target>',
                    {
                      aliases: ['S'],
                      description: 'Give a material',
                      permission: 'sample.give',
                      sender: 'player',
                    },
                  ],
                  location: sourceLocation(file),
                },
              ],
              parameters: [
                {
                  index: 0,
                  token: {
                    kind: 'token',
                    value: {
                      binding: 'Argument',
                      arguments: ['target', { parser: 'player', suggestions: ['Alex', 'Steve'] }],
                    },
                  },
                  location: sourceLocation(file),
                },
                {
                  index: 1,
                  token: {
                    kind: 'token',
                    value: {
                      binding: 'Option',
                      arguments: [
                        'amount',
                        {
                          parser: 'integer',
                          aliases: ['-a'],
                          suggestions: ['1', '64'],
                          required: true,
                        },
                      ],
                    },
                  },
                  location: sourceLocation(file),
                },
                {
                  index: 2,
                  token: { kind: 'token', value: { binding: 'Sender', arguments: [] } },
                  location: sourceLocation(file),
                },
                {
                  index: 3,
                  token: { kind: 'token', value: { binding: 'Context', arguments: [] } },
                  location: sourceLocation(file),
                },
              ],
              location: sourceLocation(file),
            },
            {
              name: 'legacyCommanded',
              invocation: 'command',
              decorators: [
                { name: 'Command', arguments: ['Legacy'], location: sourceLocation(file) },
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
    const enabling = module.enable(context);
    await Promise.resolve();
    expect(Reflect.get(globalThis, 'shamooRuntimeCalls')).toEqual([]);
    resolveCommandRegistration?.();
    await enabling;
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
        metadataFor('paperSubscribeEvent', 'joined'),
        'PlayerRecipeBookClickEvent_2',
        'HIGHEST',
        true,
        { $callback: joinedCallback },
      ],
      [
        metadataFor('paperRegisterCommand', 'commanded'),
        'sample',
        ['s'],
        {
          syntax: 'give <target>',
          description: 'Give a material',
          permission: 'sample.give',
          sender: 'player',
          arguments: [{ name: 'target', parser: 'player', suggestions: ['Alex', 'Steve'] }],
          options: [
            {
              name: 'amount',
              parser: 'integer',
              aliases: ['a'],
              suggestions: ['1', '64'],
              required: true,
            },
          ],
        },
        { $callback: commandedCallback },
      ],
      [
        metadataFor('paperRegisterCommand', 'legacyCommanded'),
        'legacy',
        [],
        {
          syntax: '',
          description: '',
          permission: '',
          sender: 'any',
          arguments: [],
          options: [],
        },
        { $callback: legacyCommandedCallback },
      ],
    ]);
    expect([...callbacks.keys()]).toEqual([
      joinedCallback,
      commandedCallback,
      legacyCommandedCallback,
      'service.fixture.service',
    ]);
    expect(services).toEqual([['fixture.service', '1.0.0', 'service.fixture.service']]);
    expect(Reflect.get(globalThis, 'shamooRuntimeCalls')).toEqual([
      'compiled-enable',
      'compiled-enable',
    ]);

    const commandCallback = callbacks.get(commandedCallback);
    expect(commandCallback).toBeDefined();
    if (commandCallback === undefined) throw new Error('Compiled command callback is unavailable.');
    const target = { id: 'target-id', name: 'Alex', online: true };
    await expect(
      commandCallback({
        token: 'command-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        alias: 'sample',
        input: 'give Alex --amount 2',
        arguments: { target },
        options: { amount: 2 },
      }),
    ).resolves.toBeUndefined();
    const commandInvocations = Reflect.get(
      globalThis,
      'shamooCommandInvocations',
    ) as readonly (readonly unknown[])[];
    const invocation = commandInvocations[0] as readonly [
      object,
      number,
      object,
      {
        readonly sender: object;
        readonly input: string;
        readonly arguments: Readonly<Record<string, unknown>>;
        readonly options: Readonly<Record<string, unknown>>;
        reply(message: unknown): Promise<boolean>;
        openInventory(inventory: unknown): Promise<boolean>;
        giveItem(item: unknown): Promise<boolean>;
        findPlayer(name: string): Promise<object | null>;
        mainHand(): Promise<object | null>;
        takeMainHand(material: string, amount: number): Promise<boolean>;
      },
    ];
    const commandContext = invocation[3];
    expect(invocation.slice(0, 3)).toEqual([
      target,
      2,
      { name: 'Alex', kind: 'player', id: 'sender-id' },
    ]);
    expect(commandContext).toMatchObject({
      sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
      alias: 'sample',
      input: 'give Alex --amount 2',
      arguments: { target },
      options: { amount: 2 },
    });
    expect(commandContext).not.toHaveProperty('token');
    expect(Object.isFrozen(commandContext)).toBe(true);
    expect(() => Reflect.apply(commandCallback, undefined, [])).toThrow('callback arguments');
    expect(() => commandCallback(null)).toThrow('Invalid Paper command context');
    expect(() =>
      commandCallback({
        token: 'command-token',
        sender: { name: 1, kind: 'player', id: 'sender-id' },
        alias: 'sample',
        input: '',
        arguments: {},
        options: {},
      }),
    ).toThrow('sender name');
    expect(() =>
      commandCallback({
        token: 'command-token',
        sender: { name: 'Alex', kind: 'invalid' },
        alias: 'sample',
        input: '',
        arguments: {},
        options: {},
      }),
    ).toThrow('sender kind');
    expect(() =>
      commandCallback({
        token: 'command-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        alias: 'sample',
        input: '',
        arguments: { value: { [Symbol('invalid')]: true } },
        options: {},
      }),
    ).toThrow('Invalid Paper command arguments');
    let nestedArguments: Record<string, unknown> = {};
    for (let depth = 0; depth < 34; depth++) nestedArguments = { nested: nestedArguments };
    expect(() =>
      commandCallback({
        token: 'command-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        alias: 'sample',
        input: '',
        arguments: nestedArguments,
        options: {},
      }),
    ).toThrow('Invalid Paper command arguments');
    let actionContext: unknown;
    const action = async (value: unknown): Promise<boolean> => {
      actionContext = value;
      const replied = await (value as { reply(message: string): Promise<boolean> }).reply(
        'clicked',
      );
      return replied;
    };
    await expect(
      commandContext.reply({
        kind: 'text',
        content: 'hello',
        click: { action: 'callback', callback: action, uses: 2, lifetimeSeconds: 30 },
      }),
    ).resolves.toBe(true);
    await expect(
      commandContext.openInventory({
        kind: 'inventory',
        rows: 1,
        title: 'Menu',
        protected: true,
        slots: [
          {
            slot: 0,
            item: {
              kind: 'item',
              material: 'DIAMOND',
              amount: 1,
              lore: [],
              actions: { left: action, right: action, preventDefault: true },
            },
          },
        ],
      }),
    ).resolves.toBe(true);
    await expect(
      commandContext.giveItem({
        kind: 'item',
        material: 'EMERALD',
        amount: 2,
        lore: ['Reward'],
      }),
    ).resolves.toBe(true);
    const cyclicDescriptor: { self?: unknown } = {};
    cyclicDescriptor.self = cyclicDescriptor;
    expect(() => commandContext.reply(cyclicDescriptor)).toThrow(
      'Paper descriptors cannot contain cycles',
    );
    expect(() => commandContext.reply(new Date())).toThrow('Unsupported Paper descriptor object');
    expect(() => commandContext.reply(new Uint8Array())).toThrow('Unsupported Paper descriptor');
    expect(() => commandContext.reply({ [Symbol('invalid')]: true })).toThrow('string keys');
    let nestedDescriptor: Record<string, unknown> = {};
    for (let depth = 0; depth < 34; depth++) nestedDescriptor = { nested: nestedDescriptor };
    expect(() => commandContext.reply(nestedDescriptor)).toThrow('nesting exceeds 32');
    await expect(commandContext.findPlayer('Sam')).resolves.toEqual({
      id: 'player-id',
      name: 'Sam',
      online: false,
    });
    await expect(commandContext.mainHand()).resolves.toEqual({ material: 'DIAMOND', amount: 2 });
    await expect(commandContext.takeMainHand('DIAMOND', 2)).resolves.toBe(false);
    const clickCallback = `${commandedCallback}.0`;
    const leftCallback = `${commandedCallback}.1`;
    const rightCallback = `${commandedCallback}.2`;
    expect([...callbacks.keys()]).toEqual(
      expect.arrayContaining([clickCallback, leftCallback, rightCallback]),
    );
    expect(leftCallback).not.toBe(rightCallback);
    const invokeLeft = callbacks.get(leftCallback);
    if (invokeLeft === undefined) throw new Error('Left action callback is unavailable.');
    expect(() => Reflect.apply(invokeLeft, undefined, [])).toThrow('callback arguments');
    expect(() =>
      invokeLeft({
        token: 'action-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        action: 'invalid',
      }),
    ).toThrow('Invalid Paper command action');
    expect(() =>
      invokeLeft({
        token: 'action-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        action: 'left',
        item: null,
      }),
    ).toThrow('Invalid Paper command action item');
    expect(() =>
      invokeLeft({
        token: 'action-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        action: 'left',
        slot: 1.5,
      }),
    ).toThrow('action slot');
    await expect(
      invokeLeft({
        token: 'action-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        action: 'left',
        slot: 0,
        item: { material: 'DIAMOND', amount: 1 },
      }),
    ).resolves.toBe(true);
    expect(actionContext).toMatchObject({
      sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
      action: 'left',
      slot: 0,
      item: { material: 'DIAMOND', amount: 1 },
    });
    expect(actionContext).not.toHaveProperty('token');

    const legacyCallback = callbacks.get(legacyCommandedCallback);
    expect(legacyCallback).toBeDefined();
    if (legacyCallback === undefined) throw new Error('Legacy command callback is unavailable.');
    await expect(
      legacyCallback({
        token: 'legacy-token',
        sender: { name: 'Console', kind: 'console' },
        alias: 'legacy',
        input: '',
        arguments: {},
        options: {},
      }),
    ).resolves.toBeUndefined();
    const legacyContext = commandInvocations[1]?.[0];
    expect(legacyContext).toMatchObject({
      sender: { name: 'Console', kind: 'console' },
      alias: 'legacy',
      input: '',
      arguments: {},
      options: {},
    });
    expect(commandOperations).toEqual([
      {
        name: 'reply',
        values: [
          metadataFor('paperCommandReply', 'commanded'),
          'command-token',
          {
            kind: 'text',
            content: 'hello',
            click: {
              action: 'callback',
              callback: { $callback: clickCallback },
              uses: 2,
              lifetimeSeconds: 30,
            },
          },
        ],
      },
      {
        name: 'openInventory',
        values: [
          metadataFor('paperCommandOpenInventory', 'commanded'),
          'command-token',
          {
            kind: 'inventory',
            rows: 1,
            title: 'Menu',
            protected: true,
            slots: [
              {
                slot: 0,
                item: {
                  kind: 'item',
                  material: 'DIAMOND',
                  amount: 1,
                  lore: [],
                  actions: {
                    left: { $callback: leftCallback },
                    right: { $callback: rightCallback },
                    preventDefault: true,
                  },
                },
              },
            ],
          },
        ],
      },
      {
        name: 'giveItem',
        values: [
          metadataFor('paperCommandGiveItem', 'commanded'),
          'command-token',
          { kind: 'item', material: 'EMERALD', amount: 2, lore: ['Reward'] },
        ],
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
      {
        name: 'reply',
        values: [metadataFor('paperCommandReply', 'commanded'), 'action-token', 'clicked'],
      },
    ]);
    const mutableHost = Reflect.get(globalThis, 'host') as {
      paperCommandFindPlayer(): Promise<unknown>;
      paperCommandMainHand(): Promise<unknown>;
      paperCommandTakeMainHand(): Promise<unknown>;
    };
    mutableHost.paperCommandFindPlayer = () => Promise.resolve(null);
    await expect(commandContext.findPlayer('Nobody')).resolves.toBeNull();
    mutableHost.paperCommandMainHand = () => Promise.resolve(null);
    await expect(commandContext.mainHand()).resolves.toBeNull();
    mutableHost.paperCommandTakeMainHand = () => Promise.resolve('no');
    await expect(commandContext.takeMainHand('DIAMOND', 1)).rejects.toThrow(
      'take-main-hand result',
    );
    await expect(
      commandContext.reply(Object.assign(Object.create(null), { content: 'plain' })),
    ).resolves.toBe(true);
    mainHandResult = { material: 'DIAMOND', amount: 'two' };
    mutableHost.paperCommandMainHand = () => Promise.resolve(mainHandResult);
    await expect(commandContext.mainHand()).rejects.toThrow('Invalid Paper command item amount');
    replyResult = true;
    expect(() => commandContext.reply('synchronous result')).toThrow('reply result promise');
  });

  it('rolls back generated descriptor callbacks without reusing sequence names', async () => {
    const file = 'transaction-commands.ts';
    const id = `${file}#TransactionCommands`;
    const commandCallback = callbackId(id, 'execute');
    let context:
      | {
          reply(message: unknown): Promise<boolean>;
        }
      | undefined;
    class TransactionCommands {
      public execute(value: unknown): void {
        context = value as { reply(message: unknown): Promise<boolean> };
      }
    }
    const transactionMetadata: CompilerMetadata = {
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'TransactionCommands',
          methods: [
            {
              name: 'execute',
              invocation: 'command',
              decorators: [
                { name: 'Command', arguments: ['transaction'], location: sourceLocation(file) },
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
    const callbacks = new Map<string, (...values: unknown[]) => unknown>();
    const rollbacks: string[] = [];
    let rejected = `${commandCallback}.1`;
    let throwReply = false;
    Reflect.set(globalThis, 'host', {
      registerCallback(name: string, callback: (...values: unknown[]) => unknown) {
        if (name === rejected) return false;
        callbacks.set(name, callback);
        return true;
      },
      unregisterCallback(name: string) {
        rollbacks.push(name);
        return callbacks.delete(name);
      },
      paperRegisterCommand: () => Promise.resolve(true),
      paperCommandReply: () => {
        if (throwReply) throw new Error('synchronous host failure');
        return Promise.resolve(true);
      },
    });
    installRuntimeAdapter(transactionMetadata, 'paper', { [id]: TransactionCommands });
    const invoke = callbacks.get(commandCallback);
    if (invoke === undefined) throw new Error('Compiled command callback is unavailable.');
    invoke({
      token: 'token',
      sender: { name: 'Console', kind: 'console' },
      alias: 'transaction',
      input: '',
      arguments: {},
      options: {},
    });
    const commandContext = context;
    if (commandContext === undefined) throw new Error('Compiled command context was not created.');
    const action = (): void => undefined;
    expect(() => commandContext.reply({ first: action, later: undefined })).toThrow(
      'cannot contain undefined',
    );
    const cyclic: { first: () => void; self?: unknown } = { first: action };
    cyclic.self = cyclic;
    expect(() => commandContext.reply(cyclic)).toThrow('cannot contain cycles');
    expect([...callbacks.keys()]).toEqual([commandCallback]);
    expect(rollbacks).toEqual([]);

    expect(() => commandContext.reply({ first: action, second: action })).toThrow(
      `Runtime rejected callback registration: ${commandCallback}.1`,
    );
    expect(rollbacks).toEqual([`${commandCallback}.0`]);
    expect([...callbacks.keys()]).toEqual([commandCallback]);

    rejected = '';
    throwReply = true;
    expect(() => commandContext.reply({ callback: action })).toThrow('synchronous host failure');
    expect(rollbacks).toEqual([`${commandCallback}.0`, `${commandCallback}.2`]);
    expect([...callbacks.keys()]).toEqual([commandCallback]);

    throwReply = false;
    await expect(commandContext.reply({ callback: action })).resolves.toBe(true);
    expect(callbacks.has(`${commandCallback}.3`)).toBe(true);
    expect(rollbacks).toEqual([`${commandCallback}.0`, `${commandCallback}.2`]);

    const host = Reflect.get(globalThis, 'host') as {
      unregisterCallback(name: string): boolean;
      paperCommandReply(): Promise<boolean>;
    };
    host.unregisterCallback = () => {
      throw new Error('rollback failure');
    };
    host.paperCommandReply = () => {
      throw new Error('operation failure');
    };
    expect(() => commandContext.reply({ callback: action })).toThrow('operation failure');
  });

  it('skips a service provider unavailable on the selected platform', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-platform-service-'));
    const services: unknown[][] = [];
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback: () => true,
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

  it('rejects malformed command metadata before callback or host registration', () => {
    const file = 'commands.ts';
    const id = `${file}#MetadataCommands`;
    class MetadataCommands {
      public execute(): void {
        return;
      }

      public second(): void {
        return;
      }
    }
    const binding = (
      index: number,
      name: 'Argument' | 'Option',
      arguments_: readonly CanonicalValue[],
    ): ComponentMetadata['methods'][number]['parameters'][number] => ({
      index,
      token: { kind: 'token', value: { binding: name, arguments: arguments_ } },
      location: sourceLocation(file),
    });
    const commandMetadata = (
      syntax: string,
      options: CanonicalValue | undefined,
      parameters: ComponentMetadata['methods'][number]['parameters'],
    ): CompilerMetadata => ({
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'MetadataCommands',
          methods: [
            {
              name: 'execute',
              invocation: 'command',
              decorators: [
                {
                  name: 'Command',
                  arguments: options === undefined ? [syntax] : [syntax, options],
                  location: sourceLocation(file),
                },
              ],
              parameters,
              location: sourceLocation(file),
            },
          ],
        },
      ],
      modules: [],
      communication: { services: [], events: [], consumers: [] },
    });
    const cases: readonly {
      readonly name: string;
      readonly syntax: string;
      readonly options?: CanonicalValue;
      readonly parameters?: ComponentMetadata['methods'][number]['parameters'];
    }[] = [
      { name: 'invalid root', syntax: 'bad.root' },
      { name: 'invalid root alias', syntax: 'sample', options: { aliases: ['bad.alias'] } },
      {
        name: 'duplicate normalized root aliases',
        syntax: 'sample',
        options: { aliases: ['Alias', 'alias'] },
      },
      {
        name: 'invalid argument name',
        syntax: 'sample <target>',
        parameters: [binding(0, 'Argument', ['1target'])],
      },
      {
        name: 'duplicate argument name',
        syntax: 'sample <target>',
        parameters: [binding(0, 'Argument', ['target']), binding(1, 'Argument', ['target'])],
      },
      {
        name: 'invalid option name',
        syntax: 'sample',
        parameters: [binding(0, 'Option', ['bad.name'])],
      },
      {
        name: 'duplicate option name',
        syntax: 'sample',
        parameters: [binding(0, 'Option', ['force']), binding(1, 'Option', ['force'])],
      },
      {
        name: 'invalid option alias',
        syntax: 'sample',
        parameters: [binding(0, 'Option', ['force', { aliases: ['ff'] }])],
      },
      {
        name: 'colliding normalized option aliases',
        syntax: 'sample',
        parameters: [
          binding(0, 'Option', ['force', { aliases: ['f'] }]),
          binding(1, 'Option', ['fast', { aliases: ['-f'] }]),
        ],
      },
      {
        name: 'blank static suggestion',
        syntax: 'sample <target>',
        parameters: [binding(0, 'Argument', ['target', { suggestions: [' '] }])],
      },
      {
        name: 'duplicate static suggestion',
        syntax: 'sample <target>',
        parameters: [binding(0, 'Argument', ['target', { suggestions: ['Alex', 'Alex'] }])],
      },
      { name: 'unknown syntax binding', syntax: 'sample <missing>' },
      {
        name: 'binding absent from syntax',
        syntax: 'sample literal',
        parameters: [binding(0, 'Argument', ['target'])],
      },
      {
        name: 'duplicate syntax binding',
        syntax: 'sample <target> <target>',
        parameters: [binding(0, 'Argument', ['target'])],
      },
      {
        name: 'required argument after optional',
        syntax: 'sample [first] <second>',
        parameters: [binding(0, 'Argument', ['first']), binding(1, 'Argument', ['second'])],
      },
      {
        name: 'literal after optional',
        syntax: 'sample [first] literal',
        parameters: [binding(0, 'Argument', ['first'])],
      },
      {
        name: 'greedy argument before final token',
        syntax: 'sample <message...> <target>',
        parameters: [binding(0, 'Argument', ['message']), binding(1, 'Argument', ['target'])],
      },
      {
        name: 'typed greedy argument',
        syntax: 'sample <amount...>',
        parameters: [binding(0, 'Argument', ['amount', { parser: 'integer' }])],
      },
      {
        name: 'malformed bracket token',
        syntax: 'sample [target>',
        parameters: [binding(0, 'Argument', ['target'])],
      },
      { name: 'null command options', syntax: 'sample', options: null },
      { name: 'invalid aliases value', syntax: 'sample', options: { aliases: true } },
      { name: 'invalid description value', syntax: 'sample', options: { description: true } },
      { name: 'invalid sender type', syntax: 'sample', options: { sender: true } },
      { name: 'invalid sender value', syntax: 'sample', options: { sender: 'other' } },
      {
        name: 'invalid parser value',
        syntax: 'sample <target>',
        parameters: [binding(0, 'Argument', ['target', { parser: 'uuid' }])],
      },
      {
        name: 'invalid required value',
        syntax: 'sample',
        parameters: [binding(0, 'Option', ['force', { required: 'yes' }])],
      },
      {
        name: 'missing parameter index',
        syntax: 'sample <target>',
        parameters: [
          {
            token: {
              kind: 'token',
              value: { binding: 'Argument', arguments: ['target'] },
            },
            location: sourceLocation(file),
          },
        ],
      },
      {
        name: 'null parameter binding',
        syntax: 'sample <target>',
        parameters: [
          {
            index: 0,
            token: { kind: 'token', value: null },
            location: sourceLocation(file),
          },
        ],
      },
      {
        name: 'unknown parameter binding',
        syntax: 'sample <target>',
        parameters: [
          {
            index: 0,
            token: {
              kind: 'token',
              value: { binding: 'Unknown', arguments: ['target'] },
            },
            location: sourceLocation(file),
          },
        ],
      },
    ];
    let callbackRegistrations = 0;
    let commandRegistrations = 0;
    Reflect.set(globalThis, 'host', {
      registerCallback() {
        callbackRegistrations++;
        return true;
      },
      unregisterCallback: () => true,
      paperRegisterCommand() {
        commandRegistrations++;
        return Promise.resolve(true);
      },
    });

    for (const fixture of cases) {
      expect(
        () =>
          installRuntimeAdapter(
            commandMetadata(fixture.syntax, fixture.options, fixture.parameters ?? []),
            'paper',
            { [id]: MetadataCommands },
          ),
        fixture.name,
      ).toThrow(TypeError);
    }

    const routeMethod = (
      name: string,
      syntax: string,
      aliases: readonly string[],
    ): ComponentMetadata['methods'][number] => ({
      name,
      invocation: 'command',
      decorators: [
        {
          name: 'Command',
          arguments: [syntax, { aliases }],
          location: sourceLocation(file),
        },
      ],
      parameters: [],
      location: sourceLocation(file),
    });
    const preflightMetadata = (second: ComponentMetadata['methods'][number]): CompilerMetadata => ({
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'MetadataCommands',
          methods: [routeMethod('execute', 'sample first', ['s']), second],
        },
      ],
      modules: [],
      communication: { services: [], events: [], consumers: [] },
    });
    expect(() =>
      installRuntimeAdapter(
        preflightMetadata(routeMethod('second', 'sample <missing>', ['s'])),
        'paper',
        { [id]: MetadataCommands },
      ),
    ).toThrow(TypeError);
    expect(() =>
      installRuntimeAdapter(
        preflightMetadata(routeMethod('second', 'sample second', ['other'])),
        'paper',
        { [id]: MetadataCommands },
      ),
    ).toThrow('aliases must agree');
    expect(callbackRegistrations).toBe(0);
    expect(commandRegistrations).toBe(0);

    expect(() =>
      installRuntimeAdapter(
        {
          ...commandMetadata('sample', undefined, []),
          components: [
            {
              ...component(id, file, 'paper'),
              name: 'MetadataCommands',
              methods: [
                {
                  name: 'execute',
                  invocation: 'command',
                  decorators: [],
                  parameters: [],
                  location: sourceLocation(file),
                },
              ],
            },
          ],
        },
        'paper',
        { [id]: MetadataCommands },
      ),
    ).toThrow('Command declaration is missing');
    expect(() =>
      installRuntimeAdapter(
        {
          ...commandMetadata('sample', undefined, []),
          components: [
            {
              ...component(id, file, 'paper'),
              name: 'MetadataCommands',
              methods: [
                {
                  name: 'execute',
                  invocation: 'command',
                  decorators: [
                    { name: 'Command', arguments: [true], location: sourceLocation(file) },
                  ],
                  parameters: [],
                  location: sourceLocation(file),
                },
              ],
            },
          ],
        },
        'paper',
        { [id]: MetadataCommands },
      ),
    ).toThrow('Command syntax must be a string');
  });

  it('normalizes command labels and preserves singleton magic suggestions', () => {
    const file = 'commands.ts';
    const id = `${file}#MagicCommands`;
    class MagicCommands {
      public execute(): boolean {
        return true;
      }
    }
    const registrations: unknown[][] = [];
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback: () => true,
      paperRegisterCommand(...values: unknown[]) {
        registrations.push(values);
        return Promise.resolve(true);
      },
    });
    const parameters: ComponentMetadata['methods'][number]['parameters'] = [
      {
        index: 0,
        token: {
          kind: 'token',
          value: {
            binding: 'Argument',
            arguments: ['target', { suggestions: ['players'] }],
          },
        },
        location: sourceLocation(file),
      },
      {
        index: 1,
        token: {
          kind: 'token',
          value: {
            binding: 'Option',
            arguments: ['material', { aliases: ['-m'], suggestions: ['materials'] }],
          },
        },
        location: sourceLocation(file),
      },
    ];
    const magicMetadata: CompilerMetadata = {
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'MagicCommands',
          methods: [
            {
              name: 'execute',
              invocation: 'command',
              decorators: [
                {
                  name: 'Command',
                  arguments: ['Sample <target>', { aliases: ['EXAMPLE'] }],
                  location: sourceLocation(file),
                },
              ],
              parameters,
              location: sourceLocation(file),
            },
          ],
        },
      ],
      modules: [],
      communication: { services: [], events: [], consumers: [] },
    };

    installRuntimeAdapter(magicMetadata, 'paper', { [id]: MagicCommands });

    expect(registrations[0]?.slice(1, 4)).toEqual([
      'sample',
      ['example'],
      expect.objectContaining({
        arguments: [expect.objectContaining({ suggestions: ['players'] })],
        options: [expect.objectContaining({ aliases: ['m'], suggestions: ['materials'] })],
      }),
    ]);
  });

  it('rejects malformed Runtime hosts and executable component contracts', () => {
    const empty: CompilerMetadata = {
      version: 'test',
      components: [],
      modules: [],
      communication: { services: [], events: [], consumers: [] },
    };
    Reflect.set(globalThis, 'host', null);
    expect(() => installRuntimeAdapter(empty, 'paper', {})).toThrow('host must be an object');
    Reflect.set(globalThis, 'host', {});
    expect(() => installRuntimeAdapter(empty, 'paper', {})).toThrow('provide registerCallback');
    Reflect.set(globalThis, 'host', { registerCallback: () => true });
    expect(() => installRuntimeAdapter(empty, 'paper', {})).toThrow('provide unregisterCallback');

    const file = 'runtime-contract.ts';
    const id = `${file}#RuntimeContract`;
    const eventMethod: ComponentMetadata['methods'][number] = {
      name: 'joined',
      invocation: 'event',
      decorators: [{ name: 'OnPlayerJoinEvent', arguments: [], location: sourceLocation(file) }],
      parameters: [],
      location: sourceLocation(file),
    };
    const executableComponent = component(id, file, 'paper', [eventMethod]);
    const executableMetadata: CompilerMetadata = {
      version: 'test',
      components: [executableComponent],
      modules: [],
      communication: { services: [], events: [], consumers: [] },
    };
    Reflect.deleteProperty(globalThis, 'host');
    expect(() => installRuntimeAdapter(executableMetadata, 'paper', {})).toThrow(
      'component constructor is unavailable',
    );
    class MissingExecutable {
      public other(): void {
        return;
      }
    }
    expect(() =>
      installRuntimeAdapter(executableMetadata, 'paper', { [id]: MissingExecutable }),
    ).toThrow('Compiler executable is missing');
    const dependencyMetadata: CompilerMetadata = {
      ...executableMetadata,
      components: [
        {
          ...executableComponent,
          constructor: [
            {
              index: 0,
              token: { kind: 'token', value: 'dependency' },
              location: sourceLocation(file),
            },
          ],
        },
      ],
    };
    class RuntimeDependency {
      public joined(): void {
        return;
      }
    }
    expect(() =>
      installRuntimeAdapter(dependencyMetadata, 'paper', { [id]: RuntimeDependency }),
    ).toThrow('without generated providers');

    const rollbacks: string[] = [];
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback(name: string) {
        rollbacks.push(name);
        return true;
      },
    });
    class RuntimeContract {
      public joined(): void {
        return;
      }
    }
    expect(() =>
      installRuntimeAdapter(executableMetadata, 'paper', { [id]: RuntimeContract }),
    ).toThrow('paperSubscribeEvent');
    expect(rollbacks).toEqual([callbackId(id, 'joined')]);
  });

  it('fails initialization when the Runtime rejects a callback registration', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-rejected-callback-'));
    Reflect.set(globalThis, 'host', {
      registerCallback: () => false,
      unregisterCallback: () => true,
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

  it('rolls back a command callback when asynchronous registration fails', async () => {
    const file = 'command-registration-failure.ts';
    const id = `${file}#RegistrationFailure`;
    const callback = callbackId(id, 'execute');
    const rollbacks: string[] = [];
    class RegistrationFailure {
      public execute(): void {
        return;
      }
    }
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback(name: string) {
        rollbacks.push(name);
        return true;
      },
      paperRegisterCommand: () => Promise.reject(new Error('command registration failure')),
    });
    const failed: CompilerMetadata = {
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'RegistrationFailure',
          methods: [
            {
              name: 'execute',
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
      communication: { services: [], events: [], consumers: [] },
    };

    const runtime = installRuntimeAdapter(failed, 'paper', { [id]: RegistrationFailure });
    await expect(
      runtime.enable({ plugin: 'fixture', platform: 'paper', metadata: failed }),
    ).rejects.toThrow('command registration failure');
    expect(rollbacks).toEqual([callback]);
  });

  it('unregisters a generated callback when its host registration throws', () => {
    const file = 'host-failure.ts';
    const id = `${file}#HostFailure`;
    const callback = callbackId(id, 'joined');
    const rollbacks: string[] = [];
    class HostFailure {
      public joined(): void {
        return;
      }
    }
    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback(name: string) {
        rollbacks.push(name);
        return true;
      },
      paperSubscribeEvent: () => {
        throw new Error('event registration failure');
      },
    });
    const failed: CompilerMetadata = {
      version: 'test',
      components: [
        {
          ...component(id, file, 'paper'),
          name: 'HostFailure',
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

    expect(() => installRuntimeAdapter(failed, 'paper', { [id]: HostFailure })).toThrow(
      'event registration failure',
    );
    expect(rollbacks).toEqual([callback]);
  });
});
