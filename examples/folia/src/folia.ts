import type { PaperScheduler, ScheduledHandle } from '@shamoo/paper';
import type { Entity } from '@shamoo/paper-raw';

export interface OwnedWorkRequest {
  readonly world: string;
  readonly chunkX: number;
  readonly chunkZ: number;
  readonly entity: Entity;
  readonly delayTicks?: number;
  readonly runInRegion: () => void;
  readonly runForEntity: () => void;
}

export type CancellationState = ReturnType<ScheduledHandle['cancel']>;

export interface OwnedWorkHandles {
  readonly region: ScheduledHandle;
  readonly entity: ScheduledHandle;
  cancelRegion(): CancellationState;
  cancelEntity(): CancellationState;
  cancelAll(): { readonly region: CancellationState; readonly entity: CancellationState };
}

/** Schedules work with explicit Folia ownership and preserves native cancellation states. */
export function scheduleOwnedWork(
  scheduler: PaperScheduler,
  request: OwnedWorkRequest,
): OwnedWorkHandles {
  const region = scheduler.region(
    request.world,
    request.chunkX,
    request.chunkZ,
    request.runInRegion,
    request.delayTicks,
  );
  const entity = scheduler.entity(request.entity, request.runForEntity, request.delayTicks);

  return Object.freeze({
    region,
    entity,
    cancelRegion: () => region.cancel(),
    cancelEntity: () => entity.cancel(),
    cancelAll: () => ({ region: region.cancel(), entity: entity.cancel() }),
  });
}
