import {
  JAVA_TYPES,
  hydratePaperValue,
  invokePaperCallback,
  paperJava,
  runOutsidePaperFrame,
  type PaperHandle,
  type Player,
  type PlayerJoinEvent,
} from '@shamoo/paper-raw';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const originalHost = Object.getOwnPropertyDescriptor(globalThis, 'host');
const frameContext = Symbol.for('shamoo.paper.frame-context');
const callbacks = new Map<string, (...values: readonly unknown[]) => unknown>();
const requests: Readonly<Record<string, unknown>>[] = [];

beforeEach(() => {
  callbacks.clear();
  requests.length = 0;
  Reflect.set(globalThis, 'host', {
    registerCallback(name: string, callback: (...values: readonly unknown[]) => unknown) {
      callbacks.set(name, callback);
      return true;
    },
    unregisterCallback(name: string) {
      return callbacks.delete(name);
    },
    paperJava(request: Readonly<Record<string, unknown>>) {
      requests.push(request);
      if (request.operation === 'describe') return Promise.resolve({ members: 30_093 });
      if (request.operation === 'release') return Promise.resolve(true);
      if (request.operation === 'invoke' && request.name === 'getPlayer')
        return Promise.resolve({
          $paperHandle: 'player',
          $paperObject: 'player-object',
          type: 'org.bukkit.entity.Player',
        });
      if (request.operation === 'invoke' && request.name === 'getName')
        return Promise.resolve('Ada');
      if (request.operation === 'invoke' && request.name === 'longValue')
        return Promise.resolve({ $paperLong: '-9223372036854775808' });
      return Promise.resolve(null);
    },
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  Reflect.deleteProperty(globalThis, 'host');
  Reflect.deleteProperty(globalThis, frameContext);
  if (originalHost !== undefined) Object.defineProperty(globalThis, 'host', originalHost);
});

describe('generated Paper bridge', () => {
  it('resolves generated types and chains opaque handles through awaited calls', async () => {
    const event = hydratePaperValue({
      $paperHandle: 'event',
      $paperObject: 'event-object',
      $paperFrame: 'frame',
      type: 'org.bukkit.event.player.PlayerJoinEvent',
    }) as PaperHandle<PlayerJoinEvent>;

    const player = await event.$invoke<PaperHandle<Player>>('getPlayer', undefined);
    await expect(player.$invoke('getName', undefined)).resolves.toBe('Ada');

    expect(requests).toEqual([
      {
        operation: 'invoke',
        type: 'org.bukkit.event.player.PlayerJoinEvent',
        name: 'getPlayer',
        target: {
          $paperHandle: 'event',
          $paperObject: 'event-object',
          $paperFrame: 'frame',
          type: 'org.bukkit.event.player.PlayerJoinEvent',
        },
        arguments: [],
      },
      {
        operation: 'invoke',
        type: 'org.bukkit.entity.Player',
        name: 'getName',
        target: {
          $paperHandle: 'player',
          $paperObject: 'player-object',
          type: 'org.bukkit.entity.Player',
        },
        arguments: [],
      },
    ]);
  });

  it('supports exact static calls, constructors, fields, release, and bridge description', async () => {
    const Bukkit = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);
    await Bukkit.$invoke('getServer', '()Lorg/bukkit/Server;');
    await Bukkit.$get('BROADCAST_CHANNEL_ADMINISTRATIVE', 'Ljava/lang/String;');
    await paperJava.construct(
      JAVA_TYPES['org.bukkit.inventory.ItemStack'],
      '(Lorg/bukkit/Material;)V',
      { $paperEnum: 'org.bukkit.Material', name: 'STONE' },
    );
    const handle = hydratePaperValue({
      $paperHandle: 'temporary',
      $paperObject: 'temporary-object',
      type: 'org.bukkit.inventory.ItemStack',
    }) as { $release(): Promise<boolean> };

    await expect(handle.$release()).resolves.toBe(true);
    await expect(paperJava.describe()).resolves.toEqual({ members: 30_093 });
    expect(requests.map((request) => request.operation)).toEqual([
      'invoke',
      'get',
      'construct',
      'release',
      'describe',
    ]);
  });

  it('registers functions as owned Java functional-interface callbacks', async () => {
    const consumer = vi.fn();
    const Bukkit = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);

    await Bukkit.$invoke('fixture', undefined, consumer);

    const request = requests[0];
    const arguments_ = request?.arguments as readonly [{ readonly $callback: string }];
    const callback = callbacks.get(arguments_[0].$callback);
    expect(callback).toBeTypeOf('function');
    await callback?.({
      $paperCallback: true,
      $paperFrame: 'callback-frame',
      arguments: [
        {
          $paperHandle: 'callback-player',
          $paperObject: 'callback-player-object',
          type: 'org.bukkit.entity.Player',
        },
      ],
    });
    expect(consumer).toHaveBeenCalledOnce();
    expect(Reflect.get(consumer.mock.calls[0]?.[0] as object, '$type')).toBe(
      'org.bukkit.entity.Player',
    );
  });

  it('round-trips signed 64-bit values without number coercion', async () => {
    const Bukkit = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);

    await expect(Bukkit.$invoke('longValue', '(J)J', 9_223_372_036_854_775_807n)).resolves.toBe(
      -9_223_372_036_854_775_808n,
    );
    expect(requests[0]?.arguments).toEqual([{ $paperLong: '9223372036854775807' }]);
  });

  it('does not expose a forgeable raw handle marker', async () => {
    const handle = hydratePaperValue({
      $paperHandle: 'trusted',
      $paperObject: 'trusted-object',
      type: 'org.bukkit.entity.Player',
    }) as PaperHandle<Player>;
    Reflect.set(handle, Symbol.for('shamoo.paper.handle'), {
      $paperHandle: 'forged',
      $paperObject: 'forged-object',
      type: 'org.bukkit.World',
    });

    await handle.$invoke('getName', undefined);

    expect(requests[0]?.target).toEqual({
      $paperHandle: 'trusted',
      $paperObject: 'trusted-object',
      type: 'org.bukkit.entity.Player',
    });
  });

  it('rolls back callback registration when argument marshalling fails', async () => {
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;
    const Bukkit = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);

    await expect(Bukkit.$invoke('fixture', undefined, () => undefined, cyclic)).rejects.toThrow(
      'must not contain cycles',
    );
    expect(callbacks.size).toBe(0);
    expect(requests).toHaveLength(0);
  });

  it('validates the Runtime host and returned handle markers', () => {
    Reflect.deleteProperty(globalThis, 'host');
    expect(() => paperJava.describe()).toThrow('Paper host is unavailable');
    Reflect.set(globalThis, 'host', {});
    expect(() => paperJava.describe()).toThrow('does not provide executable Paper bindings');

    expect(() =>
      hydratePaperValue({
        $paperHandle: 'invalid-frame',
        $paperObject: 'invalid-frame-object',
        $paperFrame: 1,
        type: 'org.bukkit.entity.Player',
      }),
    ).toThrow('invalid Paper frame');
    expect(hydratePaperValue({ $paperHandle: 1, type: 'invalid' })).toEqual({
      $paperHandle: 1,
      type: 'invalid',
    });
  });

  it('marshals structured arguments and rejects unsafe values', async () => {
    const Bukkit = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);
    const bytes = new Uint8Array([1, 2]);
    await Bukkit.$invoke(
      'fixture',
      undefined,
      bytes,
      new Map<unknown, unknown>([[1n, { enabled: true }]]),
    );
    expect(requests[0]?.arguments).toEqual([
      bytes,
      { $paperMap: [[{ $paperLong: '1' }, { enabled: true }]] },
    ]);

    await expect(Bukkit.$invoke('fixture', undefined, Number.POSITIVE_INFINITY)).rejects.toThrow(
      'must be data, handles, or callbacks',
    );
    await expect(Bukkit.$invoke('fixture', undefined, Symbol('invalid'))).rejects.toThrow(
      'must be data, handles, or callbacks',
    );
    await expect(Bukkit.$invoke('fixture', undefined, new Date())).rejects.toThrow(
      'must use plain objects',
    );

    let nested: Record<string, unknown> = {};
    for (let index = 0; index < 34; index += 1) nested = { nested };
    await expect(Bukkit.$invoke('fixture', undefined, nested)).rejects.toThrow(
      'nesting is too deep',
    );
  });

  it('hydrates structured results and rejects malformed return values', () => {
    const result = hydratePaperValue({
      values: [
        { $paperLong: '9223372036854775807' },
        { $paperEnum: 'org.bukkit.Material', name: 'STONE' },
      ],
      entries: { $paperMap: [['key', { nested: true }]] },
    }) as {
      readonly values: readonly unknown[];
      readonly entries: ReadonlyMap<string, unknown>;
    };
    expect(result.values).toEqual([
      9_223_372_036_854_775_807n,
      { $paperEnum: 'org.bukkit.Material', name: 'STONE' },
    ]);
    expect(result.entries.get('key')).toEqual({ nested: true });
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.values)).toBe(true);

    expect(() => hydratePaperValue({ $paperMap: [['invalid']] })).toThrow(
      'invalid Paper map entry',
    );
    let nested: unknown = null;
    for (let index = 0; index < 34; index += 1) nested = [nested];
    expect(() => hydratePaperValue(nested)).toThrow('nesting is too deep');
  });

  it('supports all dynamic type and handle proxy operations', async () => {
    const type = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);
    expect(paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit'])).toBe(type);
    expect(await Promise.resolve(type)).toBe(type);
    expect(type.$type).toBe('org.bukkit.Bukkit');
    await type.$new(undefined, 'argument');
    await type.$new('()V');
    await type.$get('field');
    await type.$set('field', 'value');
    await type.$set('field', 'value', 'Ljava/lang/String;');
    await (type as unknown as { getServer(): Promise<unknown> }).getServer();
    expect(Reflect.get(type, Symbol('unknown'))).toBeUndefined();

    const handle = hydratePaperValue({
      $paperHandle: 'operations',
      $paperObject: 'operations-object',
      type: 'org.bukkit.entity.Player',
    }) as PaperHandle<Player> & { teleport(destination: unknown): Promise<unknown> };
    expect(
      hydratePaperValue({
        $paperHandle: 'operations',
        $paperObject: 'operations-object',
        type: 'org.bukkit.entity.Player',
      }),
    ).toBe(handle);
    expect(await Promise.resolve(handle)).toBe(handle);
    expect(handle.$type).toBe('org.bukkit.entity.Player');
    expect(handle.$identity).toBe('operations-object');
    expect(Reflect.get(handle, Symbol('unknown'))).toBeUndefined();
    await handle.$get('name');
    await handle.$get('name', 'Ljava/lang/String;');
    await handle.$set('name', 'Ada');
    await handle.$set('name', 'Ada', 'Ljava/lang/String;');
    await handle.$invoke('getName', '()Ljava/lang/String;');
    await handle.teleport({ x: 1 });
    await paperJava.invoke(
      handle,
      JAVA_TYPES['org.bukkit.entity.Player'],
      'getName',
      '()Ljava/lang/String;',
    );
    await paperJava.invokeStatic(
      JAVA_TYPES['org.bukkit.Bukkit'],
      'getServer',
      '()Lorg/bukkit/Server;',
    );
    expect(paperJava.same(handle, handle)).toBe(true);
  });

  it('handles callback registration, invocation, and rollback failures', async () => {
    const Bukkit = paperJava.resolve(JAVA_TYPES['org.bukkit.Bukkit']);
    await Bukkit.$invoke('fixture', undefined, (...values: readonly unknown[]) => ({ values }));
    const firstRequest = requests.at(-1);
    const firstArguments = firstRequest?.arguments as readonly [{ readonly $callback: string }];
    const direct = callbacks.get(firstArguments[0].$callback);
    await expect(direct?.('one', 'two')).resolves.toEqual({ values: ['one', 'two'] });

    await Bukkit.$invoke('fixture', undefined, () => {
      const cyclic: Record<string, unknown> = { nested: () => undefined };
      cyclic.self = cyclic;
      return cyclic;
    });
    const secondRequest = requests.at(-1);
    const secondArguments = secondRequest?.arguments as readonly [{ readonly $callback: string }];
    await expect(callbacks.get(secondArguments[0].$callback)?.()).rejects.toThrow(
      'must not contain cycles',
    );

    Reflect.set(globalThis, 'host', {
      registerCallback: () => false,
      unregisterCallback: () => false,
      paperJava: () => null,
    });
    await expect(Bukkit.$invoke('fixture', undefined, () => undefined)).rejects.toThrow(
      'rejected Paper callback registration',
    );

    Reflect.set(globalThis, 'host', {
      registerCallback: () => true,
      unregisterCallback: () => {
        throw new Error('disposed');
      },
      paperJava: () => {
        // Exercise normalization of non-Error host failures from the native boundary.
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw 'host failure';
      },
    });
    await expect(Bukkit.$invoke('fixture', undefined, () => undefined)).rejects.toThrow(
      'host failure',
    );
  });

  it('propagates callback frames and supports explicit frame escape', async () => {
    const event = {
      $paperHandle: 'framed-event',
      $paperObject: 'framed-event-object',
      $paperFrame: 'fallback-frame',
      type: 'org.bukkit.event.player.PlayerJoinEvent',
    };
    expect(invokePaperCallback(() => 'sync', [event])).toBe('sync');
    expect(() =>
      invokePaperCallback(() => {
        throw new Error('callback failure');
      }, [event]),
    ).toThrow('callback failure');
    await invokePaperCallback(() => paperJava.describe(), [event]);
    expect(requests.at(-1)?.frame).toBe('fallback-frame');

    await invokePaperCallback(() => runOutsidePaperFrame(() => paperJava.describe()), [event]);
    expect(requests.at(-1)).not.toHaveProperty('frame');
    expect(invokePaperCallback(() => runOutsidePaperFrame(() => 'sync-outside'), [event])).toBe(
      'sync-outside',
    );

    const context = {
      exit: vi.fn((action: () => unknown) => action()),
      getStore: vi.fn(() => 'context-frame'),
      run: vi.fn((_frame: string, action: () => unknown) => action()),
    };
    Reflect.set(globalThis, frameContext, context);
    await paperJava.describe();
    expect(requests.at(-1)?.frame).toBe('context-frame');
    expect(invokePaperCallback(() => 'context', [event])).toBe('context');
    expect(runOutsidePaperFrame(() => 'outside')).toBe('outside');
    expect(context.run).toHaveBeenCalledWith('fallback-frame', expect.any(Function));
    expect(context.exit).toHaveBeenCalledOnce();
  });
});
