import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import { definePlatform } from '@shamoo/platform';
import type {
  Component,
  GeneratedEventMap,
  Player,
  RegisteredServer,
  ScheduledTask,
  VelocityEntrypointContext,
} from '@shamoo/velocity-raw';

export interface VelocityEntrypoint {
  start(context: VelocityEntrypointContext): void | Promise<void>;
  stop?(context: VelocityEntrypointContext): void | Promise<void>;
}
export function defineVelocityEntrypoint(entrypoint: VelocityEntrypoint): VelocityEntrypoint {
  return Object.freeze(entrypoint);
}
export function createVelocityPlatform(
  capabilities: Iterable<PlatformCapability> = [],
  name = 'Velocity',
): Platform {
  return definePlatform({
    kind: PlatformKind.VELOCITY,
    name,
    capabilities,
  });
}

export type VelocityEventType = keyof GeneratedEventMap;
export type VelocityEventHandler<Name extends VelocityEventType> = (
  event: GeneratedEventMap[Name],
) => void | Promise<void>;
export interface VelocityEventRegistry {
  on<Name extends VelocityEventType>(type: Name, handler: VelocityEventHandler<Name>): () => void;
}
export interface VelocityCommandContext {
  readonly source: Player | 'console';
  readonly input: string;
  readonly arguments: ReadonlyMap<string, string>;
}
export type VelocityCommandResult =
  number | boolean | Component | Promise<number | boolean | Component>;
export interface VelocityCommandRegistry {
  register(
    name: string,
    execute: (context: VelocityCommandContext) => VelocityCommandResult,
  ): () => void;
}
export interface VelocityScheduler {
  async(task: () => void | Promise<void>, delayMilliseconds?: number): ScheduledTask;
}
export interface VelocityConnectionRequest {
  readonly player: Player;
  readonly server: RegisteredServer;
  connect(): Promise<boolean>;
}
export interface VelocityMessagingChannel<T> {
  readonly id: string;
  encode(value: T): Uint8Array;
  decode(payload: Uint8Array): T;
}
export interface VelocityMessenger {
  send<T>(server: RegisteredServer, channel: VelocityMessagingChannel<T>, value: T): boolean;
}
