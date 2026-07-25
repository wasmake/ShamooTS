import { VersionedEventBus, defineEventContract, jsonCodec } from '@shamoo/communication';

export interface PlayerLeveledEvent {
  readonly playerId: string;
  readonly level: number;
}

function isPlayerLeveledEvent(value: unknown): value is PlayerLeveledEvent {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof Reflect.get(value, 'playerId') === 'string' &&
    (Reflect.get(value, 'playerId') as string).trim().length > 0 &&
    Number.isSafeInteger(Reflect.get(value, 'level')) &&
    (Reflect.get(value, 'level') as number) > 0
  );
}

export const PLAYER_LEVELED_EVENT = defineEventContract({
  id: 'example.player-leveled',
  version: '1.0.0',
  codec: jsonCodec<PlayerLeveledEvent>({
    maximumBytes: 1_024,
    validate: isPlayerLeveledEvent,
  }),
});

export interface CustomEventDemoResult {
  readonly deliveredBeforeClose: number;
  readonly deliveredAfterClose: number;
  readonly received: readonly string[];
}

export async function runCustomEventDemo(): Promise<CustomEventDemoResult> {
  const bus = new VersionedEventBus();
  const received: string[] = [];
  const subscription = bus.subscribe(
    PLAYER_LEVELED_EVENT,
    async (event) => {
      await Promise.resolve();
      received.push(`${event.playerId}:${String(event.level)}`);
    },
    '^1.0.0',
  );

  const deliveredBeforeClose = await bus.publish(PLAYER_LEVELED_EVENT, {
    playerId: 'alex',
    level: 7,
  });
  subscription.close();
  const deliveredAfterClose = await bus.publish(PLAYER_LEVELED_EVENT, {
    playerId: 'sam',
    level: 8,
  });

  return { deliveredBeforeClose, deliveredAfterClose, received };
}
