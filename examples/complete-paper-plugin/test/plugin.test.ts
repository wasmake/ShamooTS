import { describe, expect, it } from 'vitest';

import { CompletePaperPlugin } from '../src/plugin.js';

describe('complete Paper plugin', () => {
  it('consumes Runtime event DTOs and runs the immediate scheduled callback', () => {
    const plugin = new CompletePaperPlugin();
    plugin.loaded();
    plugin.enabled();
    plugin.becameReady();
    plugin.playerJoined({ type: 'PlayerJoinEvent', asynchronous: false });
    plugin.runImmediateTask();

    expect(plugin.state).toEqual({ ready: true, joins: 1, scheduledRuns: 1 });
    expect(plugin.status()).toBe(true);

    plugin.draining();
    plugin.disabled();
    expect(plugin.state.ready).toBe(false);
  });
});
