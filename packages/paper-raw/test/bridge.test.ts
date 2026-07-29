import {
  JAVA_TYPES,
  hydratePaperValue,
  paperJava,
  type PaperHandle,
  type Player,
  type PlayerJoinEvent,
} from '@shamoo/paper-raw';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const originalHost = Object.getOwnPropertyDescriptor(globalThis, 'host');
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
});
