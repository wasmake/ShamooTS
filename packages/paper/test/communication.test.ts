import { CommunicationClient, defineRemoteProcedure, jsonCodec } from '@shamoo/communication';
import { Container } from '@shamoo/di';
import {
  PAPER_VELOCITY_MESSAGE_BRIDGE,
  PAPER_VELOCITY_TRANSPORT,
  PaperVelocityTransport,
  VelocityTransportUnavailableError,
  createPaperHostApi,
  inventory,
  item,
  legacyText,
  miniMessage,
  paperCommunicationProviders,
  text,
  type PaperActionContext,
  type PaperCommandContext,
  type PaperRuntimeHost,
} from '@shamoo/paper';
import { describe, expect, it } from 'vitest';

function invokeCallback(
  callback: (...values: readonly unknown[]) => unknown,
  value: unknown,
): unknown {
  const result: unknown = Reflect.apply(callback, undefined, [value]);
  return result;
}

describe('Paper Velocity communication', () => {
  it('builds exact immutable text, item, and inventory descriptors without host effects', () => {
    const clicked = (context: PaperActionContext): Promise<boolean> => {
      void context;
      return Promise.resolve(true);
    };
    const richText = text('Hello', {
      color: '#55ff55',
      bold: true,
      children: [miniMessage('<name>', { placeholders: { name: 'Alex' } })],
      click: { action: 'callback', callback: clicked, uses: 2, lifetimeSeconds: 30 },
    });
    const reward = item('DIAMOND', {
      amount: 2,
      name: richText,
      lore: [legacyText('&aReward')],
      actions: { left: clicked, preventDefault: true },
    });
    const menu = inventory(2, miniMessage('<green>Rewards'), {
      slots: [{ slot: 4, item: reward }],
    });

    expect(richText).toEqual({
      kind: 'text',
      content: 'Hello',
      color: '#55ff55',
      bold: true,
      children: [
        {
          kind: 'mini-message',
          content: '<name>',
          placeholders: { name: 'Alex' },
        },
      ],
      click: { action: 'callback', callback: clicked, uses: 2, lifetimeSeconds: 30 },
    });
    expect(reward).toEqual({
      kind: 'item',
      material: 'DIAMOND',
      amount: 2,
      lore: [{ kind: 'legacy', content: '&aReward', character: '&' }],
      name: richText,
      actions: { left: clicked, preventDefault: true },
    });
    expect(menu).toEqual({
      kind: 'inventory',
      rows: 2,
      title: { kind: 'mini-message', content: '<green>Rewards' },
      protected: true,
      slots: [{ slot: 4, item: reward }],
    });
    expect(Object.isFrozen(menu)).toBe(true);
    expect(miniMessage('<player_name>', { miniPlaceholders: true })).toEqual({
      kind: 'mini-message',
      content: '<player_name>',
      miniPlaceholders: true,
    });
    expect(miniMessage('<player_name>', { miniPlaceholders: false })).toEqual({
      kind: 'mini-message',
      content: '<player_name>',
      miniPlaceholders: false,
    });
    expect(
      text('Explicit style', {
        font: 'minecraft:default',
        bold: false,
        italic: false,
        underlined: false,
        strikethrough: false,
        obfuscated: false,
        insertion: 'inserted',
        children: [],
      }),
    ).toEqual({
      kind: 'text',
      content: 'Explicit style',
      font: 'minecraft:default',
      bold: false,
      italic: false,
      underlined: false,
      strikethrough: false,
      obfuscated: false,
      insertion: 'inserted',
    });
    expect(item('STONE', { actions: { right: clicked } }).actions).toEqual({
      right: clicked,
      preventDefault: true,
    });
    expect(miniMessage('empty', { placeholders: {} })).toEqual({
      kind: 'mini-message',
      content: 'empty',
    });
    expect(inventory(1, 'Empty')).toEqual({
      kind: 'inventory',
      rows: 1,
      title: 'Empty',
      protected: true,
      slots: [],
    });
    expect(inventory(1, 'Writable', { protected: false })).toMatchObject({ protected: false });
    expect(() => legacyText('invalid', '#')).toThrow('section sign');
  });

  it('rejects every bounded public-builder constraint before host effects', () => {
    const callback = (): Promise<boolean> => Promise.resolve(true);
    const stone = item('STONE');

    expect(() => item('')).toThrow('bounded nonblank text');
    expect(() => item(' '.repeat(2))).toThrow('bounded nonblank text');
    expect(() => item('S'.repeat(32_768))).toThrow('bounded nonblank text');
    expect(() => item('STONE', { amount: 0 })).toThrow('1 through 99');
    expect(() => item('STONE', { amount: 100 })).toThrow('1 through 99');
    expect(() => item('STONE', { amount: 1.5 })).toThrow('1 through 99');
    expect(() => item('STONE', { lore: Array.from({ length: 257 }, () => 'line') })).toThrow(
      'at most 256',
    );
    expect(() => inventory(0, 'Menu')).toThrow('1 through 6');
    expect(() => inventory(7, 'Menu')).toThrow('1 through 6');
    expect(() => inventory(1.5, 'Menu')).toThrow('1 through 6');
    expect(() => inventory(1, 'Menu', { slots: [{ slot: -1, item: stone }] })).toThrow('outside');
    expect(() => inventory(1, 'Menu', { slots: [{ slot: 9, item: stone }] })).toThrow('outside');
    expect(() => inventory(1, 'Menu', { slots: [{ slot: 0.5, item: stone }] })).toThrow('outside');
    expect(() =>
      inventory(1, 'Menu', {
        slots: [
          { slot: 0, item: stone },
          { slot: 0, item: stone },
        ],
      }),
    ).toThrow('unique');
    expect(() => miniMessage('<value>', { placeholders: { '': 'value' } })).toThrow('nonblank');
    expect(() => miniMessage('<value>', { placeholders: { '  ': 'value' } })).toThrow('nonblank');
    expect(() => text('callback', { click: { action: 'callback', callback, uses: 0 } })).toThrow(
      '1 through 1000',
    );
    expect(() =>
      text('callback', { click: { action: 'callback', callback, uses: 1_001 } }),
    ).toThrow('1 through 1000');
    expect(() => text('callback', { click: { action: 'callback', callback, uses: 1.5 } })).toThrow(
      '1 through 1000',
    );
    expect(() =>
      text('callback', { click: { action: 'callback', callback, lifetimeSeconds: 0 } }),
    ).toThrow('1 through 3600');
    expect(() =>
      text('callback', { click: { action: 'callback', callback, lifetimeSeconds: 3_601 } }),
    ).toThrow('1 through 3600');
    expect(() =>
      text('callback', { click: { action: 'callback', callback, lifetimeSeconds: 1.5 } }),
    ).toThrow('1 through 3600');
    expect(text('page', { click: { action: 'change-page', value: -2_147_483_648 } }).click).toEqual(
      { action: 'change-page', value: -2_147_483_648 },
    );
    expect(text('page', { click: { action: 'change-page', value: 2_147_483_647 } }).click).toEqual({
      action: 'change-page',
      value: 2_147_483_647,
    });
    expect(() => text('page', { click: { action: 'change-page', value: -2_147_483_649 } })).toThrow(
      '32-bit integer',
    );
    expect(() => text('page', { click: { action: 'change-page', value: 2_147_483_648 } })).toThrow(
      '32-bit integer',
    );
    expect(() => text('page', { click: { action: 'change-page', value: 1.5 } })).toThrow(
      '32-bit integer',
    );
    for (const action of [
      'open-url',
      'run-command',
      'suggest-command',
      'copy-to-clipboard',
    ] as const) {
      expect(() => text('click', { click: { action, value: '  ' } })).toThrow(
        'bounded nonblank text',
      );
      expect(() => text('click', { click: { action, value: 'x'.repeat(32_768) } })).toThrow(
        'bounded nonblank text',
      );
      const maximum = text('click', { click: { action, value: 'x'.repeat(32_767) } }).click;
      expect(maximum).toMatchObject({ action });
      expect((maximum as { readonly value: string }).value).toHaveLength(32_767);
    }
    expect(() => legacyText('invalid', '#')).toThrow('section sign');
  });

  it('uses explicit callback markers for Paper, service, and contract event host APIs', async () => {
    const callbacks = new Map<string, (...values: readonly unknown[]) => unknown>();
    const calls: { name: string; values: readonly unknown[] }[] = [];
    const record =
      (name: string) =>
      (...values: readonly unknown[]) => {
        calls.push({ name, values });
        return true;
      };
    const asyncRecord =
      (name: string) =>
      (...values: readonly unknown[]): Promise<unknown> => {
        calls.push({ name, values });
        return Promise.resolve(true);
      };
    const api = createPaperHostApi({
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      unregisterCallback: (name) => callbacks.delete(name),
      paperSubscribeEvent: record('event'),
      paperRegisterCommand: asyncRecord('command'),
      paperCommandReply: asyncRecord('command-reply'),
      paperCommandOpenInventory: asyncRecord('command-open-inventory'),
      paperCommandGiveItem: asyncRecord('command-give-item'),
      paperCommandFindPlayer: asyncRecord('command-find-player'),
      paperCommandMainHand: asyncRecord('command-main-hand'),
      paperCommandTakeMainHand: asyncRecord('command-take-main-hand'),
      paperScheduleGlobal: record('task'),
      paperSubscribePacket: record('packet'),
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: record('service'),
      shamooSubscribeEvent: record('contract-event'),
      shamooPublishEvent: (...values) => {
        calls.push({ name: 'publish', values });
        return Promise.resolve(true);
      },
    });
    api.on('PlayerJoinEvent', () => undefined);
    api.schedule(() => undefined);
    api.packet(() => undefined);
    api.provideService('example.service', '1.0.0', () => undefined);
    api.subscribeEvent('example.event', '^1.0.0', () => undefined);
    await api.publishEvent('example.event', '1.0.0', { online: true });
    expect(calls.map((item) => item.name)).toEqual([
      'event',
      'task',
      'packet',
      'service',
      'contract-event',
      'publish',
    ]);
    expect(calls[0]?.values.at(-1)).toEqual({ $callback: 'paper.api.event.0' });
    expect(callbacks.size).toBe(5);
  });

  it('registers data-only command contexts and routes asynchronous operations', async () => {
    const callbacks = new Map<string, (...values: readonly unknown[]) => unknown>();
    const registrations: (readonly unknown[])[] = [];
    const operations: { readonly name: string; readonly values: readonly unknown[] }[] = [];
    const operation =
      (name: string, result: unknown) =>
      (...values: readonly unknown[]) => {
        operations.push({ name, values });
        return Promise.resolve(result);
      };
    const host: PaperRuntimeHost = {
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      unregisterCallback: (name) => callbacks.delete(name),
      paperSubscribeEvent: () => true,
      paperRegisterCommand(...values) {
        registrations.push(values);
        return Promise.resolve(true);
      },
      paperCommandReply: operation('reply', true),
      paperCommandOpenInventory: operation('openInventory', true),
      paperCommandGiveItem: operation('giveItem', true),
      paperCommandFindPlayer: operation('findPlayer', {
        id: 'player-id',
        name: 'Sam',
        online: true,
      }),
      paperCommandMainHand: operation('mainHand', { material: 'DIAMOND', amount: 3 }),
      paperCommandTakeMainHand: operation('takeMainHand', false),
      paperScheduleGlobal: () => true,
      paperSubscribePacket: () => true,
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: () => true,
      shamooSubscribeEvent: () => true,
      shamooPublishEvent: () => Promise.resolve(true),
    };
    let context: PaperCommandContext | undefined;
    let actionContext: PaperActionContext | undefined;
    const action = async (value: PaperActionContext): Promise<boolean> => {
      actionContext = value;
      const replied = await value.reply(text('clicked'));
      return replied;
    };
    await createPaperHostApi(host).command(
      'sample',
      async (value) => {
        context = value;
        expect(
          await value.reply(text('hello', { click: { action: 'callback', callback: action } })),
        ).toBe(true);
        expect(
          await value.openInventory(
            inventory(1, 'Menu', {
              slots: [
                {
                  slot: 0,
                  item: item('DIAMOND', {
                    actions: { left: action, right: action, preventDefault: true },
                  }),
                },
              ],
            }),
          ),
        ).toBe(true);
        expect(await value.giveItem(item('EMERALD', { amount: 2 }))).toBe(true);
        expect(await value.findPlayer('Sam')).toEqual({
          id: 'player-id',
          name: 'Sam',
          online: true,
        });
        expect(await value.mainHand()).toEqual({ material: 'DIAMOND', amount: 3 });
        expect(await value.takeMainHand('DIAMOND', 3)).toBe(false);
        return;
      },
      ['example'],
    );
    expect(registrations).toEqual([
      [
        { source: 'api' },
        'sample',
        ['example'],
        {
          syntax: '',
          description: '',
          permission: '',
          sender: 'any',
          arguments: [],
          options: [],
        },
        { $callback: 'paper.api.command.0' },
      ],
    ]);
    const callback = callbacks.get('paper.api.command.0');
    expect(callback).toBeDefined();
    if (callback === undefined) throw new Error('Paper command callback was not registered.');
    const rawArguments = { target: 'Alex' };
    const rawOptions = { amount: 2 };
    await expect(
      invokeCallback(callback, {
        token: 'secret-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        alias: 'sample',
        input: 'Alex --amount 2',
        arguments: rawArguments,
        options: rawOptions,
      }),
    ).resolves.toBeUndefined();
    expect(context).toMatchObject({
      sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
      alias: 'sample',
      input: 'Alex --amount 2',
      arguments: { target: 'Alex' },
      options: { amount: 2 },
    });
    expect(context).not.toHaveProperty('token');
    expect(Object.isFrozen(context)).toBe(true);
    expect(Object.isFrozen(context?.sender)).toBe(true);
    expect(Object.isFrozen(context?.arguments)).toBe(true);
    expect(Object.isFrozen(context?.options)).toBe(true);
    expect(context?.arguments).not.toBe(rawArguments);
    expect(context?.options).not.toBe(rawOptions);
    expect([...callbacks.keys()]).toEqual([
      'paper.api.command.0',
      'paper.api.command.0.0',
      'paper.api.command.0.1',
      'paper.api.command.0.2',
    ]);
    const descriptorCallback = callbacks.get('paper.api.command.0.0');
    expect(descriptorCallback).toBeDefined();
    if (descriptorCallback === undefined)
      throw new Error('Paper descriptor callback was not registered.');
    await expect(
      invokeCallback(descriptorCallback, {
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
    expect(operations).toEqual([
      {
        name: 'reply',
        values: [
          { source: 'api' },
          'secret-token',
          {
            kind: 'text',
            content: 'hello',
            click: { action: 'callback', callback: { $callback: 'paper.api.command.0.0' } },
          },
        ],
      },
      {
        name: 'openInventory',
        values: [
          { source: 'api' },
          'secret-token',
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
                    left: { $callback: 'paper.api.command.0.1' },
                    right: { $callback: 'paper.api.command.0.2' },
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
          { source: 'api' },
          'secret-token',
          { kind: 'item', material: 'EMERALD', amount: 2, lore: [] },
        ],
      },
      { name: 'findPlayer', values: [{ source: 'api' }, 'secret-token', 'Sam'] },
      { name: 'mainHand', values: [{ source: 'api' }, 'secret-token'] },
      {
        name: 'takeMainHand',
        values: [{ source: 'api' }, 'secret-token', 'DIAMOND', 3],
      },
      {
        name: 'reply',
        values: [{ source: 'api' }, 'action-token', { kind: 'text', content: 'clicked' }],
      },
    ]);
  });

  it('validates descriptor transactions and rolls back rejected or failed callback operations', async () => {
    const callbacks = new Map<string, (...values: readonly unknown[]) => unknown>();
    const rollbacks: string[] = [];
    let reject = 'paper.api.command.0.1';
    let throwReply = false;
    const host: PaperRuntimeHost = {
      registerCallback(name, callback) {
        if (name === reject) return false;
        callbacks.set(name, callback);
        return true;
      },
      unregisterCallback(name) {
        rollbacks.push(name);
        return callbacks.delete(name);
      },
      paperSubscribeEvent: () => true,
      paperRegisterCommand: () => Promise.resolve(true),
      paperCommandReply: () => {
        if (throwReply) throw new Error('synchronous host failure');
        return Promise.resolve(true);
      },
      paperCommandOpenInventory: () => Promise.resolve(true),
      paperCommandGiveItem: () => Promise.resolve(true),
      paperCommandFindPlayer: () => Promise.resolve(null),
      paperCommandMainHand: () => Promise.resolve(null),
      paperCommandTakeMainHand: () => Promise.resolve(false),
      paperScheduleGlobal: () => true,
      paperSubscribePacket: () => true,
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: () => true,
      shamooSubscribeEvent: () => true,
      shamooPublishEvent: () => Promise.resolve(undefined),
    };
    let context: PaperCommandContext | undefined;
    const api = createPaperHostApi(host);
    await api.command('transaction', (value) => {
      context = value;
    });
    const command = callbacks.get('paper.api.command.0');
    if (command === undefined) throw new Error('Paper command callback was not registered.');
    expect(() => Reflect.apply(command, undefined, [])).toThrow('callback arguments');
    invokeCallback(command, {
      token: 'token',
      sender: { name: 'Console', kind: 'console' },
      alias: 'transaction',
      input: '',
      arguments: {},
      options: {},
    });
    const commandContext = context;
    if (commandContext === undefined) throw new Error('Paper command context was not created.');
    const action = (): void => undefined;
    const invalid = { first: action, later: undefined };
    expect(() => commandContext.reply(invalid as never)).toThrow('cannot contain undefined');
    const cyclic: { first: () => void; self?: unknown } = { first: action };
    cyclic.self = cyclic;
    expect(() => commandContext.reply(cyclic as never)).toThrow('cannot contain cycles');
    expect(() => commandContext.reply(new Uint8Array() as never)).toThrow(
      'Unsupported Paper descriptor',
    );
    expect(() => commandContext.reply({ [Symbol('invalid')]: true } as never)).toThrow(
      'string keys',
    );
    let nestedDescriptor: Record<string, unknown> = {};
    for (let depth = 0; depth < 34; depth++) nestedDescriptor = { nested: nestedDescriptor };
    expect(() => commandContext.reply(nestedDescriptor as never)).toThrow('nesting exceeds 32');
    const nullPrototype = Object.assign(Object.create(null) as Record<string, unknown>, {
      content: 'plain',
    });
    await expect(commandContext.reply(nullPrototype as never)).resolves.toBe(true);
    expect([...callbacks.keys()]).toEqual(['paper.api.command.0']);
    expect(rollbacks).toEqual([]);

    expect(() => commandContext.reply({ first: action, second: action } as never)).toThrow(
      'Runtime rejected callback registration: paper.api.command.0.1',
    );
    expect(rollbacks).toEqual(['paper.api.command.0.0']);
    expect([...callbacks.keys()]).toEqual(['paper.api.command.0']);

    reject = '';
    throwReply = true;
    expect(() => commandContext.reply({ callback: action } as never)).toThrow(
      'synchronous host failure',
    );
    expect(rollbacks).toEqual(['paper.api.command.0.0', 'paper.api.command.0.2']);
    expect([...callbacks.keys()]).toEqual(['paper.api.command.0']);

    throwReply = false;
    await expect(commandContext.reply({ callback: action } as never)).resolves.toBe(true);
    expect(callbacks.has('paper.api.command.0.3')).toBe(true);
    expect(rollbacks).toEqual(['paper.api.command.0.0', 'paper.api.command.0.2']);

    const descriptorCallback = callbacks.get('paper.api.command.0.3');
    if (descriptorCallback === undefined)
      throw new Error('Paper descriptor callback was not registered.');
    expect(() => Reflect.apply(descriptorCallback, undefined, [])).toThrow('callback arguments');
    expect(() =>
      invokeCallback(descriptorCallback, {
        token: 'token',
        sender: { name: 'Console', kind: 'console' },
        action: 'invalid',
      }),
    ).toThrow('Invalid Paper command action');
    expect(() =>
      invokeCallback(descriptorCallback, {
        token: 'token',
        sender: { name: 'Console', kind: 'console' },
        action: 'click',
        item: null,
      }),
    ).toThrow('Invalid Paper command action item');
    expect(() =>
      invokeCallback(descriptorCallback, {
        token: 'token',
        sender: { name: 'Console', kind: 'console' },
        action: 'left',
        slot: 1.5,
      }),
    ).toThrow('action slot');
    expect(
      invokeCallback(descriptorCallback, {
        token: 'token',
        sender: { name: 'Console', kind: 'console' },
        action: 'click',
      }),
    ).toBeUndefined();

    host.paperRegisterCommand = () => Promise.reject(new Error('command registration failure'));
    await expect(api.command('rejected', () => undefined)).rejects.toThrow(
      'command registration failure',
    );
    expect(callbacks.has('paper.api.command.1')).toBe(false);
    expect(rollbacks).toEqual([
      'paper.api.command.0.0',
      'paper.api.command.0.2',
      'paper.api.command.1',
    ]);

    host.paperSubscribeEvent = () => {
      throw new Error('event registration failure');
    };
    expect(() => {
      api.on('PlayerJoinEvent', () => undefined);
    }).toThrow('event registration failure');
    expect(rollbacks).toEqual([
      'paper.api.command.0.0',
      'paper.api.command.0.2',
      'paper.api.command.1',
      'paper.api.event.2',
    ]);
    expect(callbacks.has('paper.api.event.2')).toBe(false);

    host.unregisterCallback = () => {
      throw new Error('rollback failure');
    };
    host.paperRegisterCommand = (() => true) as never;
    expect(() => api.command('synchronous', () => undefined)).toThrow(
      'registration result promise',
    );
    host.registerCallback = () => false;
    expect(() => {
      api.schedule(() => undefined);
    }).toThrow('Runtime rejected callback registration');
  });

  it('rejects malformed command DTOs, synchronous host results, and promise values', async () => {
    const callbacks = new Map<string, (...values: readonly unknown[]) => unknown>();
    let mainHandResult: unknown = { material: 'DIAMOND', amount: 1.5 };
    let replyResult: unknown = Promise.resolve('yes');
    const host: PaperRuntimeHost = {
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      unregisterCallback: (name) => callbacks.delete(name),
      paperSubscribeEvent: () => true,
      paperRegisterCommand: () => Promise.resolve(true),
      paperCommandReply: (() => replyResult) as PaperRuntimeHost['paperCommandReply'],
      paperCommandOpenInventory: () => Promise.resolve('yes'),
      paperCommandGiveItem: () => Promise.resolve('yes'),
      paperCommandFindPlayer: () => Promise.resolve({ id: 'id', name: 'Sam', online: 'yes' }),
      paperCommandMainHand: () => Promise.resolve(mainHandResult),
      paperCommandTakeMainHand: () => Promise.resolve(1),
      paperScheduleGlobal: () => true,
      paperSubscribePacket: () => true,
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: () => true,
      shamooSubscribeEvent: () => true,
      shamooPublishEvent: () => Promise.resolve(true),
    };
    await createPaperHostApi(host).command('sample', async (context) => {
      switch (context.arguments.case) {
        case 'reply':
          await context.reply('message');
          return;
        case 'find':
          await context.findPlayer('Sam');
          return;
        case 'take':
          await context.takeMainHand('DIAMOND', 1);
          return;
        default:
          await context.mainHand();
          return;
      }
    });
    const callback = callbacks.get('paper.api.command.0');
    expect(callback).toBeDefined();
    if (callback === undefined) throw new Error('Paper command callback was not registered.');
    const invoke = (value: unknown): unknown => invokeCallback(callback, value);
    const raw = (case_?: string) => ({
      token: 'token',
      sender: { name: 'Console', kind: 'console' },
      alias: 'sample',
      input: case_ ?? '',
      arguments: case_ === undefined ? {} : { case: case_ },
      options: {},
    });
    expect(() => invoke(null)).toThrow(TypeError);
    expect(() =>
      invoke({
        ...raw(),
        sender: { name: 'Console', kind: 'invalid' },
      }),
    ).toThrow(TypeError);
    expect(() => invoke({ ...raw(), arguments: ['valid', 1] })).toThrow(TypeError);
    expect(() => invoke({ ...raw(), sender: { name: 1, kind: 'console' } })).toThrow('sender name');
    expect(() => invoke({ ...raw(), arguments: { value: Number.NaN } })).toThrow(TypeError);
    expect(() => invoke({ ...raw(), arguments: { value: { [Symbol('invalid')]: true } } })).toThrow(
      TypeError,
    );
    await expect(
      invoke({ ...raw(), arguments: { values: [null, 'value', true, 1] } }),
    ).rejects.toThrow('Invalid Paper command item amount');
    let nested: Record<string, unknown> = {};
    for (let depth = 0; depth < 34; depth++) nested = { nested };
    expect(() => invoke({ ...raw(), arguments: nested })).toThrow(TypeError);
    await expect(invoke(raw())).rejects.toThrow('Invalid Paper command item amount');
    await expect(invoke(raw('reply'))).rejects.toThrow('Invalid Paper command reply result');
    await expect(invoke(raw('find'))).rejects.toThrow('Invalid Paper command player online state');
    await expect(invoke(raw('take'))).rejects.toThrow(
      'Invalid Paper command take-main-hand result',
    );
    replyResult = true;
    await expect(invoke(raw('reply'))).rejects.toThrow('reply result promise');
    mainHandResult = null;
    await expect(invoke(raw())).resolves.toBeUndefined();
    host.paperCommandFindPlayer = () => Promise.resolve(null);
    await expect(invoke(raw('find'))).resolves.toBeUndefined();
  });

  it('is explicitly unavailable and does not send when Paper runs standalone', async () => {
    const transport = new PaperVelocityTransport();
    expect(transport.availability()).toEqual({
      available: false,
      reason: 'Shamoo Velocity transport is not installed; Paper is running standalone.',
    });
    await expect(
      transport.request(new Uint8Array(), { timeoutMs: 10, signal: new AbortController().signal }),
    ).rejects.toBeInstanceOf(VelocityTransportUnavailableError);

    const procedure = defineRemoteProcedure({
      id: 'example.ping',
      version: '1.0.0',
      operation: 'ping',
      request: jsonCodec<null>(),
      response: jsonCodec<string>(),
    });
    await expect(new CommunicationClient(transport).request(procedure, null)).rejects.toMatchObject(
      {
        code: 'UNAVAILABLE',
      },
    );
  });

  it('copies payloads across an available host bridge', async () => {
    const original = Uint8Array.of(1, 2);
    let received: Uint8Array | undefined;
    const transport = new PaperVelocityTransport({
      request: (payload) => {
        received = payload;
        payload[0] = 9;
        return Promise.resolve({ available: true, payload, error: null });
      },
    });
    expect(transport.availability()).toEqual({ available: true });
    await expect(
      transport.request(original, { timeoutMs: 10, signal: new AbortController().signal }),
    ).resolves.toEqual(Uint8Array.of(9, 2));
    expect(received).not.toBe(original);
    expect(original).toEqual(Uint8Array.of(1, 2));
  });

  it('uses the bridge unavailability reason without sending', async () => {
    const transport = new PaperVelocityTransport({
      request: () =>
        Promise.resolve({
          available: true,
          payload: new Uint8Array(),
          error: 'proxy disconnected',
        }),
    });
    await expect(
      transport.request(new Uint8Array(), {
        timeoutMs: 10,
        signal: new AbortController().signal,
      }),
    ).rejects.toThrow('proxy disconnected');
  });

  it('honors cancellation and host availability responses', async () => {
    const request = new PaperVelocityTransport({
      request: () => Promise.resolve({ available: false, payload: new Uint8Array(), error: null }),
    });
    const abort = new AbortController();
    abort.abort(new Error('cancelled'));
    await expect(
      request.request(new Uint8Array(), { timeoutMs: 10, signal: abort.signal }),
    ).rejects.toThrow('cancelled');
    await expect(
      request.request(new Uint8Array(), {
        timeoutMs: 10,
        signal: new AbortController().signal,
      }),
    ).rejects.toThrow('Shamoo Velocity transport is unavailable');
  });

  it('injects the host capability when present and remains standalone when absent', () => {
    const standalone = new Container({ providers: paperCommunicationProviders() });
    expect(standalone.resolve(PAPER_VELOCITY_TRANSPORT).availability().available).toBe(false);
    const hosted = new Container({
      providers: [
        {
          provide: PAPER_VELOCITY_MESSAGE_BRIDGE,
          useValue: {
            request: (payload: Uint8Array) =>
              Promise.resolve({ available: true, payload, error: null }),
          },
        },
        ...paperCommunicationProviders(),
      ],
    });
    expect(hosted.resolve(PAPER_VELOCITY_TRANSPORT).availability()).toEqual({ available: true });
  });
});
