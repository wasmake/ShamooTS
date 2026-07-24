import type { DisconnectEvent, PostLoginEvent } from '@shamoo/velocity-raw';
import { describe, expect, it } from 'vitest';

import { CompleteVelocityPlugin } from '../src/plugin.js';

function playerEvent(username: string): PostLoginEvent {
  return {
    getPlayer: () => ({ getUsername: () => username }),
    toString: () => `PostLoginEvent(${username})`,
  } as unknown as PostLoginEvent;
}

function disconnectEvent(username: string): DisconnectEvent {
  return {
    getPlayer: () => ({ getUsername: () => username }),
    toString: () => `DisconnectEvent(${username})`,
  } as unknown as DisconnectEvent;
}

describe('complete Velocity plugin', () => {
  it('tracks lifecycle stages in runtime order', () => {
    const plugin = new CompleteVelocityPlugin();
    expect(plugin.phase).toBe('created');
    plugin.load();
    plugin.enable();
    plugin.ready();
    expect(plugin.phase).toBe('ready');
    plugin.drain();
    plugin.disable();
    plugin.unload();
    expect(plugin.phase).toBe('unloaded');
  });

  it('tracks typed login events and reports the command status', () => {
    const plugin = new CompleteVelocityPlugin();
    plugin.playerJoined(playerEvent('Zoe'));
    plugin.playerJoined(playerEvent('Alex'));
    expect(plugin.onlinePlayers).toEqual(['Alex', 'Zoe']);
    expect(plugin.status()).toBe(2);

    plugin.playerDisconnected(disconnectEvent('Alex'));
    expect(plugin.onlinePlayers).toEqual(['Zoe']);
    expect(plugin.status()).toBe(1);

    plugin.disable();
    expect(plugin.status()).toBe(0);
  });
});
