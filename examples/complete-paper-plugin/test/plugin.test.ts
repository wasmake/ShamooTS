import { describe, expect, it } from 'vitest';

import type { PaperCommandContext } from '@shamoo/paper';
import type { PaperHandle, PlayerJoinEvent } from '@shamoo/paper-raw';

import { CompletePaperPlugin } from '../src/plugin.js';

describe('complete Paper plugin', () => {
  it('consumes a generated event handle and runs the immediate scheduled callback', async () => {
    const plugin = new CompletePaperPlugin();
    plugin.loaded();
    plugin.enabled();
    plugin.becameReady();
    plugin.playerJoined({
      $type: 'org.bukkit.event.player.PlayerJoinEvent',
    } as PaperHandle<PlayerJoinEvent>);
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
