import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import type {
  BinaryRequestOptions,
  BinaryRequestTransport,
  TransportAvailability,
} from '@shamoo/communication';
import { definePlatform } from '@shamoo/platform';
import { createToken, type Provider } from '@shamoo/di';
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

export interface PaperRuntimeHost {
  registerCallback(name: string, callback: (...values: readonly never[]) => unknown): boolean;
  paperSubscribeEvent(
    metadata: object,
    type: string,
    priority: string,
    ignoreCancelled: boolean,
    callback: { readonly $callback: string },
  ): unknown;
  paperRegisterCommand(
    metadata: object,
    name: string,
    aliases: readonly string[],
    callback: { readonly $callback: string },
  ): unknown;
  paperScheduleGlobal(metadata: object, callback: { readonly $callback: string }): unknown;
  paperSubscribePacket(metadata: object, callback: { readonly $callback: string }): unknown;
  paperProxyRequest(metadata: object, payload: Uint8Array): Promise<PaperProxyResponse>;
  shamooProvideService(id: string, version: string, callback: string): unknown;
  shamooSubscribeEvent(id: string, versionRange: string, callback: string): unknown;
  shamooPublishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}

export interface PaperHostApi {
  on(type: string, handler: (event: unknown) => unknown, priority?: string): void;
  command(
    name: string,
    handler: (...values: readonly unknown[]) => unknown,
    aliases?: readonly string[],
  ): void;
  schedule(handler: () => unknown): void;
  packet(handler: (packet: unknown) => unknown): void;
  provideService(
    id: string,
    version: string,
    handler: (operation: string, values: readonly unknown[]) => unknown,
  ): void;
  subscribeEvent(id: string, versionRange: string, handler: (payload: unknown) => unknown): void;
  publishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}

/** Publishable facade over ShamooRuntime's explicit data-only Paper host operations. */
export function createPaperHostApi(host: PaperRuntimeHost, namespace = 'paper.api'): PaperHostApi {
  let sequence = 0;
  const callback = (kind: string, handler: (...values: readonly never[]) => unknown): string => {
    const name = `${namespace}.${kind}.${String(sequence++)}`;
    host.registerCallback(name, handler);
    return name;
  };
  const marker = (name: string): { readonly $callback: string } => ({ $callback: name });
  const api: PaperHostApi = {
    on(type, handler, priority = 'NORMAL') {
      host.paperSubscribeEvent(
        { source: 'api' },
        type,
        priority,
        false,
        marker(callback('event', handler)),
      );
    },
    command(name, handler, aliases = []) {
      host.paperRegisterCommand(
        { source: 'api' },
        name,
        aliases,
        marker(callback('command', handler)),
      );
    },
    schedule(handler) {
      host.paperScheduleGlobal({ source: 'api' }, marker(callback('task', handler)));
    },
    packet(handler) {
      host.paperSubscribePacket({ source: 'api' }, marker(callback('packet', handler)));
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

export function paperHostCommunicationProviders(host: PaperRuntimeHost): readonly Provider[] {
  return Object.freeze([
    {
      provide: PAPER_VELOCITY_MESSAGE_BRIDGE,
      useValue: {
        request: (payload: Uint8Array) => host.paperProxyRequest({ source: 'api' }, payload),
      },
    },
    ...paperCommunicationProviders(),
  ]);
}

/** Result returned by ShamooRuntime's Java OptionalProxyTransport.Response record. */
export interface PaperProxyResponse {
  readonly available: boolean;
  readonly payload: Uint8Array;
  readonly error?: string | null;
}

/** Host-owned binding matching OptionalProxyTransport.request(byte[]). */
export interface PaperVelocityMessageBridge {
  request(payload: Uint8Array): Promise<PaperProxyResponse>;
}

export const PAPER_VELOCITY_MESSAGE_BRIDGE = createToken<PaperVelocityMessageBridge>(
  'ShamooRuntime Paper Velocity message bridge',
);
export const PAPER_VELOCITY_TRANSPORT = createToken<BinaryRequestTransport>(
  'Paper Velocity request transport',
);

/** DI providers consume the host bridge when ShamooRuntime supplies it and remain optional otherwise. */
export function paperCommunicationProviders(): readonly Provider[] {
  return Object.freeze([
    {
      provide: PAPER_VELOCITY_TRANSPORT,
      useFactory: (...dependencies: readonly unknown[]) =>
        new PaperVelocityTransport(dependencies[0] as PaperVelocityMessageBridge | undefined),
      inject: [{ token: PAPER_VELOCITY_MESSAGE_BRIDGE, optional: true }],
    },
  ]);
}

/** Paper-side adapter for optional request/response communication with Shamoo Velocity. */
export class PaperVelocityTransport implements BinaryRequestTransport {
  public constructor(private readonly bridge?: PaperVelocityMessageBridge) {}

  public availability(): TransportAvailability {
    return this.bridge === undefined
      ? {
          available: false,
          reason: 'Shamoo Velocity transport is not installed; Paper is running standalone.',
        }
      : { available: true };
  }

  public async request(payload: Uint8Array, options: BinaryRequestOptions): Promise<Uint8Array> {
    const availability = this.availability();
    if (!availability.available) throw new VelocityTransportUnavailableError(availability.reason);
    if (options.signal.aborted) throw options.signal.reason;
    const response = await this.bridge?.request(payload.slice());
    if (!response?.available)
      throw new VelocityTransportUnavailableError('Shamoo Velocity transport is unavailable.');
    if (response.error !== undefined && response.error !== null)
      throw new VelocityTransportUnavailableError(response.error);
    return response.payload.slice();
  }
}

export class VelocityTransportUnavailableError extends Error {
  public readonly code = 'VELOCITY_TRANSPORT_UNAVAILABLE';
  public constructor(message: string) {
    super(message);
    this.name = 'VelocityTransportUnavailableError';
  }
}
