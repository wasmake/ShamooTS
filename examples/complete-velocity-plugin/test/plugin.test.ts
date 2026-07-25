import { describe, expect, it } from 'vitest';

import { CompleteVelocityPlugin } from '../src/plugin.js';

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

  it('tracks data-only Runtime event callbacks and reports the command status', () => {
    const plugin = new CompleteVelocityPlugin();
    plugin.playerJoined({ type: 'com.velocitypowered.api.event.connection.PostLoginEvent' });
    plugin.playerJoined({ type: 'com.velocitypowered.api.event.connection.PostLoginEvent' });
    expect(plugin.eventState).toEqual({
      observedPlayers: 2,
      loginEvents: 2,
      disconnectEvents: 0,
    });
    expect(plugin.status()).toBe(2);

    plugin.playerDisconnected({
      type: 'com.velocitypowered.api.event.connection.DisconnectEvent',
    });
    expect(plugin.eventState).toEqual({
      observedPlayers: 1,
      loginEvents: 2,
      disconnectEvents: 1,
    });
    expect(plugin.status()).toBe(1);

    plugin.disable();
    expect(plugin.status()).toBe(0);
  });
});
