import {
  MANAGED_LOBBY_FILES,
  ManagedLobbyProtocolError,
  ManagedLobbyUnavailableError,
  paperManagedLobby,
  type ManagedLobbyExecuteAction,
  type ManagedLobbyFile,
  type ManagedLobbyRequest,
} from '@shamoo/paper';
import { afterEach, describe, expect, it, vi } from 'vitest';

const originalHost = Object.getOwnPropertyDescriptor(globalThis, 'host');
const PLAYER = '123e4567-e89b-12d3-a456-426614174000';

afterEach(() => {
  Reflect.deleteProperty(globalThis, 'host');
  if (originalHost !== undefined) Object.defineProperty(globalThis, 'host', originalHost);
});

function installHost(operation: (...values: readonly unknown[]) => unknown): object {
  const host = { paperManagedLobby: operation };
  Reflect.set(globalThis, 'host', host);
  return host;
}

describe('Paper managed lobby', () => {
  it('calls the owner-scoped host with exactly one copied and frozen request', async () => {
    const request: ManagedLobbyRequest = {
      operation: 'execute',
      action: 'portal-create',
      player: PLAYER,
      id: 'main',
      destination: 'spawn',
      permission: 'shalobby.portal.create',
      priority: 10,
      'cooldown-ms': 1_000,
      enabled: true,
      visualize: true,
    };
    const calls: { readonly thisValue: unknown; readonly values: readonly unknown[] }[] = [];
    const host = installHost(function (this: unknown, ...values: readonly unknown[]) {
      calls.push({ thisValue: this, values });
      const received = values[0] as typeof request;
      expect(received).not.toBe(request);
      expect(Object.isFrozen(received)).toBe(true);
      return Promise.resolve({ ok: true, state: 'portal-created', id: 'main' });
    });

    await expect(paperManagedLobby(request)).resolves.toEqual({
      ok: true,
      state: 'portal-created',
      id: 'main',
    });
    expect(calls).toHaveLength(1);
    expect(calls[0]?.thisValue).toBe(host);
    expect(calls[0]?.values).toHaveLength(1);
    expect(calls[0]?.values[0]).toEqual(request);
    expect(calls[0]?.values[0]).not.toHaveProperty('owner');
    expect(calls[0]?.values[0]).not.toHaveProperty('metadata');
  });

  it('supports ensure, all and single-file reads, writes, reload, and status', async () => {
    const calls: ManagedLobbyRequest[] = [];
    installHost((request: unknown) => {
      calls.push(request as ManagedLobbyRequest);
      return Promise.resolve({ ok: true, state: 'accepted' });
    });

    await paperManagedLobby({ operation: 'ensure' });
    await paperManagedLobby({ operation: 'read' });
    for (const file of MANAGED_LOBBY_FILES) await paperManagedLobby({ operation: 'read', file });
    await paperManagedLobby({
      operation: 'write',
      file: 'items.yml',
      content: 'items: []\n',
    });
    await paperManagedLobby({
      operation: 'write',
      file: 'menus.yml',
      content: 'menus: []\n',
      reload: false,
    });
    await paperManagedLobby({
      operation: 'write',
      file: 'messages.yml',
      content: 'messages: {}\n',
      reload: true,
    });
    await paperManagedLobby({ operation: 'reload' });
    await paperManagedLobby({ operation: 'status' });

    expect(calls).toHaveLength(15);
    expect(calls.slice(2, 10).map((request) => (request as { file: string }).file)).toEqual(
      MANAGED_LOBBY_FILES,
    );
    expect(calls.at(-2)).toEqual({ operation: 'reload' });
    expect(calls.at(-1)).toEqual({ operation: 'status' });
  });

  it('accepts self-contained ShaLobby execute request fixtures with exact Runtime keys', async () => {
    const shaLobbyActions: readonly ManagedLobbyExecuteAction[] = [
      { action: 'setspawn', player: PLAYER },
      { action: 'spawn', player: PLAYER },
      { action: 'items', player: PLAYER },
      { action: 'menu', player: PLAYER, id: 'servers' },
      { action: 'visibility', player: PLAYER, mode: 'all' },
      { action: 'visibility', player: PLAYER, mode: 'none' },
      { action: 'visibility', player: PLAYER, mode: 'staff' },
      { action: 'visibility', player: PLAYER, mode: 'cycle' },
      { action: 'portal-wand', player: PLAYER },
      { action: 'portal-pos1', player: PLAYER },
      { action: 'portal-pos2', player: PLAYER },
      {
        action: 'portal-create',
        player: PLAYER,
        id: 'main',
        destination: 'spawn',
        permission: 'shalobby.portal.create',
        priority: 10,
        'cooldown-ms': 1_000,
        enabled: true,
        visualize: true,
      },
      { action: 'portal-remove', player: PLAYER, id: 'main' },
      { action: 'portal-list' },
      { action: 'portal-info', id: 'main' },
      { action: 'portal-enable', player: PLAYER, id: 'main' },
      { action: 'portal-disable', player: PLAYER, id: 'main' },
      {
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'server',
        target: 'survival',
      },
      {
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'menu',
        target: 'game-selector',
      },
      {
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'spawn',
      },
      { action: 'portal-visualize', player: PLAYER, enabled: true },
    ];
    const received: unknown[] = [];
    installHost((request: unknown) => {
      received.push(request);
      return Promise.resolve({ ok: true, state: 'executed' });
    });

    for (const action of shaLobbyActions)
      await expect(paperManagedLobby({ operation: 'execute', ...action })).resolves.toMatchObject({
        ok: true,
        state: 'executed',
      });

    expect(received).toEqual(
      shaLobbyActions.map((action) => ({ operation: 'execute', ...action })),
    );
  });

  it('accepts omitted and populated optional portal-create fields', async () => {
    const actions: readonly ManagedLobbyExecuteAction[] = [
      { action: 'portal-create', player: PLAYER, id: 'minimal' },
      {
        action: 'portal-create',
        player: PLAYER,
        id: 'complete',
        destination: 'spawn',
        permission: 'shalobby.portal',
        priority: -10_000,
        'cooldown-ms': 600_000,
        enabled: false,
        visualize: true,
      },
    ];
    installHost(() => Promise.resolve({ ok: true, state: 'portal-created' }));

    for (const action of actions) {
      await expect(paperManagedLobby({ operation: 'execute', ...action })).resolves.toMatchObject({
        ok: true,
      });
    }
  });

  it('strictly rejects malformed operation requests before host effects', () => {
    const operation = vi.fn(() => Promise.resolve({ ok: true, state: 'unexpected' }));
    installHost(operation);
    const invalidFiles = ['server.yml', '../config.yml', 'CONFIG.YML'];

    expect(() => paperManagedLobby({ operation: 'ensure', extra: true } as never)).toThrow(
      'unknown key',
    );
    expect(() => paperManagedLobby({ operation: 'install' } as never)).toThrow(
      'operation is unknown',
    );
    for (const invalid of invalidFiles)
      expect(() =>
        paperManagedLobby({ operation: 'read', file: invalid as ManagedLobbyFile }),
      ).toThrow('eight managed lobby files');
    expect(() => paperManagedLobby({ operation: 'write', file: 'items.yml' } as never)).toThrow(
      'content must be bounded nonblank text',
    );
    expect(() =>
      paperManagedLobby({ operation: 'write', file: 'items.yml', content: '   ' }),
    ).toThrow('content must be bounded nonblank text');
    expect(() =>
      paperManagedLobby({
        operation: 'write',
        file: 'items.yml',
        content: '€'.repeat(349_526),
      }),
    ).toThrow('exceeds 1 MiB as UTF-8');
    expect(() =>
      paperManagedLobby({
        operation: 'write',
        file: 'items.yml',
        content: 'items: []',
        reload: 'yes',
      } as never),
    ).toThrow('reload must be a boolean');
    expect(() => paperManagedLobby({ operation: 'read', file: null } as never)).toThrow(
      'eight managed lobby files',
    );
    expect(() =>
      paperManagedLobby({
        operation: 'write',
        file: 'items.yml',
        content: 'items: []',
        reload: null,
      } as never),
    ).toThrow('reload must be a boolean');
    expect(operation).not.toHaveBeenCalled();
  });

  it('strictly rejects malformed execute and portal administration requests', () => {
    const operation = vi.fn(() => Promise.resolve({ ok: true, state: 'unexpected' }));
    installHost(operation);

    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'spawn',
        player: PLAYER.toUpperCase(),
      }),
    ).toThrow('canonical UUID');
    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'visibility',
        player: PLAYER,
        mode: 'hidden',
      } as never),
    ).toThrow('all, none, staff, or cycle');
    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'menu',
        player: PLAYER,
        id: 'Not Canonical',
      }),
    ).toThrow('lowercase identifier');
    expect(() =>
      paperManagedLobby({ operation: 'execute', action: 'reset-items', player: PLAYER } as never),
    ).toThrow('action is unknown');
    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'portal-create',
        player: PLAYER,
        id: 'main',
        permission: 'invalid permission',
      }),
    ).toThrow('permission node');
    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'portal-create',
        player: PLAYER,
        id: 'main',
        priority: 10_001,
      }),
    ).toThrow('finite number from -10000 through 10000');
    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'portal-create',
        player: PLAYER,
        id: 'main',
        'cooldown-ms': 1.5,
      }),
    ).toThrow('must be an integer');
    for (const key of [
      'destination',
      'permission',
      'priority',
      'cooldown-ms',
      'enabled',
      'visualize',
    ]) {
      expect(() =>
        paperManagedLobby({
          operation: 'execute',
          action: 'portal-create',
          player: PLAYER,
          id: 'main',
          [key]: null,
        } as never),
      ).toThrow(ManagedLobbyProtocolError);
    }
    expect(() =>
      paperManagedLobby({
        operation: 'execute',
        action: 'portal-remove',
        id: 'main',
      } as never),
    ).toThrow('canonical UUID');
    expect(() =>
      paperManagedLobby({ operation: 'execute', action: 'portal-enable', id: 'main' } as never),
    ).toThrow('canonical UUID');
    expect(() =>
      paperManagedLobby({ operation: 'execute', action: 'portal-disable', id: 'main' } as never),
    ).toThrow('canonical UUID');

    const invalidDestinations: readonly unknown[] = [
      {
        operation: 'execute',
        action: 'portal-destination',
        id: 'main',
        type: 'server',
        target: 'survival',
      },
      {
        operation: 'execute',
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        destination: 'survival',
      },
      {
        operation: 'execute',
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'server',
        target: null,
      },
      {
        operation: 'execute',
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'menu',
        target: 'Not Canonical',
      },
      {
        operation: 'execute',
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'spawn',
        target: 'survival',
      },
      {
        operation: 'execute',
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'spawn',
        target: null,
      },
      {
        operation: 'execute',
        action: 'portal-destination',
        player: PLAYER,
        id: 'main',
        type: 'command',
        target: 'survival',
      },
    ];
    for (const request of invalidDestinations)
      expect(() => paperManagedLobby(request as never)).toThrow(ManagedLobbyProtocolError);
    expect(operation).not.toHaveBeenCalled();
  });

  it('copies, broadly validates, and recursively freezes success and failure maps', async () => {
    const hostResult = {
      ok: true,
      state: 'read',
      files: Object.fromEntries(MANAGED_LOBBY_FILES.map((file) => [file, `${file}: content\n`])),
      future: { nested: [null, true, 1, 'value'] },
    };
    installHost(() => Promise.resolve(hostResult));

    const result = await paperManagedLobby({ operation: 'read' });
    expect(result).toEqual(hostResult);
    expect(result).not.toBe(hostResult);
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.files)).toBe(true);
    const future = result.future as { readonly nested: readonly unknown[] };
    expect(Object.isFrozen(future)).toBe(true);
    expect(Object.isFrozen(future.nested)).toBe(true);

    installHost(() =>
      Promise.resolve({ ok: false, state: 'invalid', error: 'invalid managed lobby request' }),
    );
    await expect(paperManagedLobby({ operation: 'status' })).resolves.toEqual({
      ok: false,
      state: 'invalid',
      error: 'invalid managed lobby request',
    });
  });

  it('preserves the coordinated reload messages content exactly', async () => {
    const messagesContent = "messages:\n  prefix: '<gold>Lobby</gold>'\n";
    installHost((request: unknown) => {
      expect(request).toEqual({ operation: 'reload' });
      return Promise.resolve({
        ok: true,
        state: 'reloaded',
        messagesContent,
        files: MANAGED_LOBBY_FILES,
      });
    });

    const result = await paperManagedLobby({ operation: 'reload' });
    expect(result).toMatchObject({ ok: true, state: 'reloaded', messagesContent });
    expect(result.messagesContent).toBe(messagesContent);
    expect(Object.isFrozen(result)).toBe(true);
  });

  it('rejects hostile request and response graphs without invoking accessors', async () => {
    const operation = vi.fn(() => Promise.resolve({ ok: true, state: 'unexpected' }));
    installHost(operation);
    const cyclic: { operation: string; self?: unknown } = { operation: 'status' };
    cyclic.self = cyclic;
    const accessor = Object.create(null) as Record<string, unknown>;
    const getter = vi.fn(() => 'status');
    Object.defineProperty(accessor, 'operation', { enumerable: true, get: getter });

    expect(() => paperManagedLobby(cyclic as never)).toThrow('cycles');
    expect(() => paperManagedLobby(accessor as never)).toThrow('accessors');
    expect(getter).not.toHaveBeenCalled();
    expect(() => paperManagedLobby({ operation: 'status', value: undefined } as never)).toThrow(
      'undefined',
    );
    expect(() => paperManagedLobby({ operation: 'status', value: Number.NaN } as never)).toThrow(
      'finite',
    );
    expect(operation).not.toHaveBeenCalled();

    const responseAccessor = { ok: true, state: 'ready' } as Record<string, unknown>;
    Object.defineProperty(responseAccessor, 'details', {
      enumerable: true,
      get() {
        throw new Error('must not run');
      },
    });
    installHost(() => Promise.resolve(responseAccessor));
    await expect(paperManagedLobby({ operation: 'status' })).rejects.toThrow('accessors');
  });

  it('reports unavailable hosts and requires a Promise even for status results', async () => {
    expect(() => paperManagedLobby({ operation: 'status' })).toThrow(ManagedLobbyUnavailableError);
    Reflect.set(globalThis, 'host', {});
    expect(() => paperManagedLobby({ operation: 'status' })).toThrow('operation is unavailable');

    installHost(() => ({ ok: true, state: 'ready' }));
    expect(() => paperManagedLobby({ operation: 'status' })).toThrow(
      'host operation must return a Promise',
    );
    installHost(() => ({ then: () => undefined }));
    expect(() => paperManagedLobby({ operation: 'status' })).toThrow(ManagedLobbyProtocolError);

    for (const invalid of [
      null,
      { state: 'ready' },
      { ok: 'yes', state: 'ready' },
      { ok: true, state: '' },
      { ok: false, state: 'invalid' },
      { ok: true, state: 'ready', error: 'not allowed' },
      { ok: true, state: 'reloaded', messagesContent: 'x'.repeat(1_048_577) },
    ]) {
      installHost(() => Promise.resolve(invalid));
      await expect(paperManagedLobby({ operation: 'status' })).rejects.toBeInstanceOf(
        ManagedLobbyProtocolError,
      );
    }

    const failure = new Error('host failed');
    installHost(() => Promise.reject(failure));
    await expect(paperManagedLobby({ operation: 'status' })).rejects.toBe(failure);
  });
});
