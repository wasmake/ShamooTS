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
export interface PaperCommandSender {
  readonly name: string;
  readonly kind: 'player' | 'other';
  readonly id?: string;
}
export interface PaperCommandPlayer {
  readonly id: string;
  readonly name: string;
  readonly online: boolean;
}
export interface PaperCommandItem {
  readonly material: string;
  readonly amount: number;
}
export interface PaperCommandContext {
  readonly sender: PaperCommandSender;
  readonly alias: string;
  readonly arguments: readonly string[];
  reply(message: string): boolean;
  findPlayer(name: string): PaperCommandPlayer | null;
  mainHand(): PaperCommandItem | null;
  takeMainHand(material: string, amount: number): boolean;
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
  paperCommandReply(metadata: object, token: string, message: string): unknown;
  paperCommandFindPlayer(metadata: object, token: string, name: string): unknown;
  paperCommandMainHand(metadata: object, token: string): unknown;
  paperCommandTakeMainHand(
    metadata: object,
    token: string,
    material: string,
    amount: number,
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
    handler: (context: PaperCommandContext) => unknown,
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

function commandRecord(value: unknown, label: string): Readonly<Record<string, unknown>> {
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError(`Invalid Paper command ${label}.`);
  return value as Readonly<Record<string, unknown>>;
}

function commandKeys(
  value: Readonly<Record<string, unknown>>,
  expected: readonly string[],
  label: string,
): void {
  const keys = Reflect.ownKeys(value);
  if (
    keys.length !== expected.length ||
    keys.some((key) => typeof key !== 'string' || !expected.includes(key))
  )
    throw new TypeError(`Invalid Paper command ${label}.`);
}

function commandString(value: unknown, label: string): string {
  if (typeof value !== 'string') throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}

function commandBoolean(value: unknown, label: string): boolean {
  if (typeof value !== 'boolean') throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}

function commandPlayer(value: unknown): PaperCommandPlayer | null {
  if (value === null) return null;
  const player = commandRecord(value, 'player result');
  commandKeys(player, ['id', 'name', 'online'], 'player result');
  return Object.freeze({
    id: commandString(player.id, 'player id'),
    name: commandString(player.name, 'player name'),
    online: commandBoolean(player.online, 'player online state'),
  });
}

function commandItem(value: unknown): PaperCommandItem | null {
  if (value === null) return null;
  const item = commandRecord(value, 'item result');
  commandKeys(item, ['material', 'amount'], 'item result');
  if (typeof item.amount !== 'number' || !Number.isInteger(item.amount))
    throw new TypeError('Invalid Paper command item amount.');
  return Object.freeze({
    material: commandString(item.material, 'item material'),
    amount: item.amount,
  });
}

function paperCommandContext(
  host: PaperRuntimeHost,
  metadata: object,
  value: unknown,
): PaperCommandContext {
  const raw = commandRecord(value, 'context');
  commandKeys(raw, ['token', 'sender', 'alias', 'arguments'], 'context');
  const token = commandString(raw.token, 'token');
  const rawSender = commandRecord(raw.sender, 'sender');
  const senderKeys = Object.hasOwn(rawSender, 'id') ? ['name', 'kind', 'id'] : ['name', 'kind'];
  commandKeys(rawSender, senderKeys, 'sender');
  const kind = rawSender.kind;
  if (kind !== 'player' && kind !== 'other')
    throw new TypeError('Invalid Paper command sender kind.');
  const name = commandString(rawSender.name, 'sender name');
  const sender: PaperCommandSender = Object.hasOwn(rawSender, 'id')
    ? Object.freeze({ name, kind, id: commandString(rawSender.id, 'sender id') })
    : Object.freeze({ name, kind });
  if (
    !Array.isArray(raw.arguments) ||
    !raw.arguments.every((argument) => typeof argument === 'string')
  )
    throw new TypeError('Invalid Paper command arguments.');
  const arguments_ = Object.freeze([...raw.arguments]);
  return Object.freeze({
    sender,
    alias: commandString(raw.alias, 'alias'),
    arguments: arguments_,
    reply: (message: string) =>
      commandBoolean(host.paperCommandReply(metadata, token, message), 'reply result'),
    findPlayer: (playerName: string) =>
      commandPlayer(host.paperCommandFindPlayer(metadata, token, playerName)),
    mainHand: () => commandItem(host.paperCommandMainHand(metadata, token)),
    takeMainHand: (material: string, amount: number) =>
      commandBoolean(
        host.paperCommandTakeMainHand(metadata, token, material, amount),
        'take-main-hand result',
      ),
  });
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
      const metadata = { source: 'api' };
      const commandHandler = (...values: readonly unknown[]): unknown => {
        if (values.length !== 1) throw new TypeError('Invalid Paper command callback arguments.');
        return handler(paperCommandContext(host, metadata, values[0]));
      };
      host.paperRegisterCommand(
        metadata,
        name,
        aliases,
        marker(callback('command', commandHandler)),
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
