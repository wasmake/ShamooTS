import { describe, expect, it } from 'vitest';

import type { PaperCommandContext } from '@shamoo/paper';

import { CompletePaperPlugin } from '../src/plugin.js';

describe('complete Paper plugin', () => {
  it('consumes Runtime event DTOs and runs the immediate scheduled callback', async () => {
    const plugin = new CompletePaperPlugin();
    plugin.loaded();
    plugin.enabled();
    plugin.becameReady();
    plugin.playerJoined({ type: 'PlayerJoinEvent', asynchronous: false });
    plugin.runImmediateTask();

    expect(plugin.state).toEqual({ ready: true, joins: 1, scheduledRuns: 1 });
    const replies: unknown[] = [];
    await expect(
      plugin.status({
        reply: (message: unknown) => {
          replies.push(message);
          return Promise.resolve(true);
        },
      } as unknown as PaperCommandContext),
    ).resolves.toBeUndefined();
    expect(replies).toEqual(['ready=true joins=1 scheduledRuns=1']);

    plugin.draining();
    plugin.disabled();
    expect(plugin.state.ready).toBe(false);
  });
});
