import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import {
  binaryCommunicationHandler,
  type CommunicationRequestHandler,
} from '@shamoo/communication';
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

export interface VelocityRuntimeHost {
  registerCallback(name: string, callback: (...values: readonly never[]) => unknown): boolean;
  velocitySubscribeEvent(
    metadata: object,
    type: string,
    order: number,
    callback: { readonly $callback: string },
  ): unknown;
  velocityRegisterCommand(
    metadata: object,
    name: string,
    aliases: readonly string[],
    callback: { readonly $callback: string },
  ): unknown;
  velocitySchedule(
    metadata: object,
    delayMilliseconds: number,
    callback: { readonly $callback: string },
  ): unknown;
  velocityRegisterProxyEndpoint(
    metadata: object,
    callback: { readonly $callback: string },
  ): unknown;
  shamooProvideService(id: string, version: string, callback: string): unknown;
  shamooSubscribeEvent(id: string, versionRange: string, callback: string): unknown;
  shamooPublishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}

export interface VelocityHostApi {
  on(type: string, handler: (event: unknown) => unknown, order?: number): void;
  command(
    name: string,
    handler: (...values: readonly unknown[]) => unknown,
    aliases?: readonly string[],
  ): void;
  schedule(delayMilliseconds: number, handler: () => unknown): void;
  proxyEndpoint(handler: (payload: Uint8Array) => unknown): void;
  provideService(
    id: string,
    version: string,
    handler: (operation: string, values: readonly unknown[]) => unknown,
  ): void;
  subscribeEvent(id: string, versionRange: string, handler: (payload: unknown) => unknown): void;
  publishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}

/** Publishable facade over ShamooRuntime's explicit data-only Velocity host operations. */
export function createVelocityHostApi(
  host: VelocityRuntimeHost,
  namespace = 'velocity.api',
): VelocityHostApi {
  let sequence = 0;
  const callback = (kind: string, handler: (...values: readonly never[]) => unknown): string => {
    const name = `${namespace}.${kind}.${String(sequence++)}`;
    host.registerCallback(name, handler);
    return name;
  };
  const marker = (name: string): { readonly $callback: string } => ({ $callback: name });
  const api: VelocityHostApi = {
    on(type, handler, order = 0) {
      host.velocitySubscribeEvent(
        { source: 'api' },
        type,
        order,
        marker(callback('event', handler)),
      );
    },
    command(name, handler, aliases = []) {
      host.velocityRegisterCommand(
        { source: 'api' },
        name,
        aliases,
        marker(callback('command', handler)),
      );
    },
    schedule(delayMilliseconds, handler) {
      host.velocitySchedule(
        { source: 'api' },
        delayMilliseconds,
        marker(callback('task', handler)),
      );
    },
    proxyEndpoint(handler) {
      host.velocityRegisterProxyEndpoint({ source: 'api' }, marker(callback('proxy', handler)));
    },
    provideService(id, version, handler) {
      host.shamooProvideService(id, version, callback('service', handler));
    },
    subscribeEvent(id, versionRange, handler) {
      host.shamooSubscribeEvent(id, versionRange, callback('contract-event', handler));
    },
    publishEvent: (id, version, payload) => host.shamooPublishEvent(id, version, payload),
  };
  return Object.freeze(api);
}

/** Creates the Velocity-side bounded byte handler used by host plugin-message registration. */
export function createVelocityCommunicationHandler(
  handler: CommunicationRequestHandler,
): (payload: Uint8Array) => Promise<Uint8Array> {
  const binary = binaryCommunicationHandler(handler);
  return (payload) => binary(payload.slice());
}
