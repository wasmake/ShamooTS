import { CodecError, VersionedEventBus } from '@shamoo/communication';
import { describe, expect, it } from 'vitest';

import { PLAYER_LEVELED_EVENT, runCustomEventDemo } from '../src/index.js';

describe('custom events', () => {
  it('awaits compatible handlers and closes subscriptions', async () => {
    await expect(runCustomEventDemo()).resolves.toEqual({
      deliveredBeforeClose: 1,
      deliveredAfterClose: 0,
      received: ['alex:7'],
    });
  });

  it('does not deliver to an incompatible version range', async () => {
    const bus = new VersionedEventBus();
    const received: number[] = [];
    bus.subscribe(
      PLAYER_LEVELED_EVENT,
      (event) => {
        received.push(event.level);
      },
      '^2.0.0',
    );

    await expect(bus.publish(PLAYER_LEVELED_EVENT, { playerId: 'alex', level: 2 })).resolves.toBe(
      0,
    );
    expect(received).toEqual([]);
  });

  it('rejects payloads that fail runtime codec validation', () => {
    const invalid = PLAYER_LEVELED_EVENT.codec.encode({ playerId: '', level: 0 });
    expect(() => PLAYER_LEVELED_EVENT.codec.decode(invalid)).toThrow(CodecError);
  });
});
