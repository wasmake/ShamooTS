import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import { definePlatform } from '@shamoo/platform';
import type {
  Component,
  Entity,
  GeneratedEventCancellabilityMap,
  GeneratedEventMap,
  GlobalRegionScheduler,
  PaperEntrypointContext,
  Player,
  ScheduledTask,
} from '@shamoo/paper-raw';

export interface PaperEntrypoint {
  enable(context: PaperEntrypointContext): void | Promise<void>;
  disable?(context: PaperEntrypointContext): void | Promise<void>;
}
export function definePaperEntrypoint(entrypoint: PaperEntrypoint): PaperEntrypoint {
  return Object.freeze(entrypoint);
}
export function createPaperPlatform(
  capabilities: Iterable<PlatformCapability> = [],
  name = 'Paper',
): Platform {
  return definePlatform({
    kind: PlatformKind.PAPER,
    name,
    capabilities,
  });
}

export interface MutablePaperEvent<T> {
  readonly event: T;
  readonly cancelled: boolean;
  setCancelled(cancelled: boolean): void;
}
export interface PaperEventContext<T> {
  readonly event: T;
}
export type PaperEventType = keyof GeneratedEventMap;
export type RegisteredPaperEvent<Name extends PaperEventType> =
  GeneratedEventCancellabilityMap[Name] extends true
    ? MutablePaperEvent<GeneratedEventMap[Name]>
    : PaperEventContext<GeneratedEventMap[Name]>;
export type PaperEventHandler<Name extends PaperEventType> = (
  context: RegisteredPaperEvent<Name>,
) => void | Promise<void>;
export interface PaperEventRegistry {
  on<Name extends PaperEventType>(type: Name, handler: PaperEventHandler<Name>): () => void;
}
export type PaperCommandResult =
  number | boolean | Component | Promise<number | boolean | Component>;
export interface PaperCommandContext {
  readonly sender: Player | PaperEntrypointContext['server'];
  readonly input: string;
  readonly arguments: ReadonlyMap<string, string>;
}
export interface PaperCommandRegistry {
  register(name: string, execute: (context: PaperCommandContext) => PaperCommandResult): () => void;
}
export interface ScheduledHandle {
  readonly native: ScheduledTask;
  cancel(): ReturnType<ScheduledTask['cancel']>;
}
export interface PaperScheduler {
  server(task: () => void, delayTicks?: number): ScheduledHandle;
  global(scheduler: GlobalRegionScheduler, task: () => void, delayTicks?: number): ScheduledHandle;
  region(
    world: string,
    chunkX: number,
    chunkZ: number,
    task: () => void,
    delayTicks?: number,
  ): ScheduledHandle;
  entity(entity: Entity, task: () => void, delayTicks?: number): ScheduledHandle;
}
export interface PaperMessagingChannel<T> {
  readonly key: string;
  encode(value: T): Uint8Array;
  decode(payload: Uint8Array): T;
}
export interface PaperMessenger {
  send<T>(player: Player, channel: PaperMessagingChannel<T>, value: T): void;
}
