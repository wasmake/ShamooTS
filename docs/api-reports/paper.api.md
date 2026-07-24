## API Report File for "@shamoo/paper"

> Generated from the rolled-up public declaration because API Extractor cannot follow a keyword-named member in the generated JVM graph.

```ts
import * as _shamoo_di from '@shamoo/di';
import { Provider } from '@shamoo/di';
import { PlatformCapability, Platform } from '@shamoo/core';
import { BinaryRequestTransport, TransportAvailability, BinaryRequestOptions } from '@shamoo/communication';
import { Component, PaperEntrypointContext, GeneratedEventMap, GeneratedEventCancellabilityMap, Player, ScheduledTask, GlobalRegionScheduler, Entity } from '@shamoo/paper-raw';

interface PaperEntrypoint {
    enable(context: PaperEntrypointContext): void | Promise<void>;
    disable?(context: PaperEntrypointContext): void | Promise<void>;
}
declare function definePaperEntrypoint(entrypoint: PaperEntrypoint): PaperEntrypoint;
declare function createPaperPlatform(capabilities?: Iterable<PlatformCapability>, name?: string): Platform;
interface MutablePaperEvent<T> {
    readonly event: T;
    readonly cancelled: boolean;
    setCancelled(cancelled: boolean): void;
}
interface PaperEventContext<T> {
    readonly event: T;
}
type PaperEventType = keyof GeneratedEventMap;
type RegisteredPaperEvent<Name extends PaperEventType> = GeneratedEventCancellabilityMap[Name] extends true ? MutablePaperEvent<GeneratedEventMap[Name]> : PaperEventContext<GeneratedEventMap[Name]>;
type PaperEventHandler<Name extends PaperEventType> = (context: RegisteredPaperEvent<Name>) => void | Promise<void>;
interface PaperEventRegistry {
    on<Name extends PaperEventType>(type: Name, handler: PaperEventHandler<Name>): () => void;
}
type PaperCommandResult = number | boolean | Component | Promise<number | boolean | Component>;
interface PaperCommandSender {
    readonly name: string;
    readonly kind: 'player' | 'other';
    readonly id?: string;
}
interface PaperCommandPlayer {
    readonly id: string;
    readonly name: string;
    readonly online: boolean;
}
interface PaperCommandItem {
    readonly material: string;
    readonly amount: number;
}
interface PaperCommandContext {
    readonly sender: PaperCommandSender;
    readonly alias: string;
    readonly arguments: readonly string[];
    reply(message: string): boolean;
    findPlayer(name: string): PaperCommandPlayer | null;
    mainHand(): PaperCommandItem | null;
    takeMainHand(material: string, amount: number): boolean;
}
interface PaperCommandRegistry {
    register(name: string, execute: (context: PaperCommandContext) => PaperCommandResult): () => void;
}
interface ScheduledHandle {
    readonly native: ScheduledTask;
    cancel(): ReturnType<ScheduledTask['cancel']>;
}
interface PaperScheduler {
    server(task: () => void, delayTicks?: number): ScheduledHandle;
    global(scheduler: GlobalRegionScheduler, task: () => void, delayTicks?: number): ScheduledHandle;
    region(world: string, chunkX: number, chunkZ: number, task: () => void, delayTicks?: number): ScheduledHandle;
    entity(entity: Entity, task: () => void, delayTicks?: number): ScheduledHandle;
}
interface PaperMessagingChannel<T> {
    readonly key: string;
    encode(value: T): Uint8Array;
    decode(payload: Uint8Array): T;
}
interface PaperMessenger {
    send<T>(player: Player, channel: PaperMessagingChannel<T>, value: T): void;
}
interface PaperRuntimeHost {
    registerCallback(name: string, callback: (...values: readonly never[]) => unknown): boolean;
    paperSubscribeEvent(metadata: object, type: string, priority: string, ignoreCancelled: boolean, callback: {
        readonly $callback: string;
    }): unknown;
    paperRegisterCommand(metadata: object, name: string, aliases: readonly string[], callback: {
        readonly $callback: string;
    }): unknown;
    paperCommandReply(metadata: object, token: string, message: string): unknown;
    paperCommandFindPlayer(metadata: object, token: string, name: string): unknown;
    paperCommandMainHand(metadata: object, token: string): unknown;
    paperCommandTakeMainHand(metadata: object, token: string, material: string, amount: number): unknown;
    paperScheduleGlobal(metadata: object, callback: {
        readonly $callback: string;
    }): unknown;
    paperSubscribePacket(metadata: object, callback: {
        readonly $callback: string;
    }): unknown;
    paperProxyRequest(metadata: object, payload: Uint8Array): Promise<PaperProxyResponse>;
    shamooProvideService(id: string, version: string, callback: string): unknown;
    shamooSubscribeEvent(id: string, versionRange: string, callback: string): unknown;
    shamooPublishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}
interface PaperHostApi {
    on(type: string, handler: (event: unknown) => unknown, priority?: string): void;
    command(name: string, handler: (context: PaperCommandContext) => unknown, aliases?: readonly string[]): void;
    schedule(handler: () => unknown): void;
    packet(handler: (packet: unknown) => unknown): void;
    provideService(id: string, version: string, handler: (operation: string, values: readonly unknown[]) => unknown): void;
    subscribeEvent(id: string, versionRange: string, handler: (payload: unknown) => unknown): void;
    publishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}
/** Publishable facade over ShamooRuntime's explicit data-only Paper host operations. */
declare function createPaperHostApi(host: PaperRuntimeHost, namespace?: string): PaperHostApi;
declare function paperHostCommunicationProviders(host: PaperRuntimeHost): readonly Provider[];
/** Result returned by ShamooRuntime's Java OptionalProxyTransport.Response record. */
interface PaperProxyResponse {
    readonly available: boolean;
    readonly payload: Uint8Array;
    readonly error?: string | null;
}
/** Host-owned binding matching OptionalProxyTransport.request(byte[]). */
interface PaperVelocityMessageBridge {
    request(payload: Uint8Array): Promise<PaperProxyResponse>;
}
declare const PAPER_VELOCITY_MESSAGE_BRIDGE: _shamoo_di.InjectionToken<PaperVelocityMessageBridge>;
declare const PAPER_VELOCITY_TRANSPORT: _shamoo_di.InjectionToken<BinaryRequestTransport>;
/** DI providers consume the host bridge when ShamooRuntime supplies it and remain optional otherwise. */
declare function paperCommunicationProviders(): readonly Provider[];
/** Paper-side adapter for optional request/response communication with Shamoo Velocity. */
declare class PaperVelocityTransport implements BinaryRequestTransport {
    private readonly bridge?;
    constructor(bridge?: PaperVelocityMessageBridge | undefined);
    availability(): TransportAvailability;
    request(payload: Uint8Array, options: BinaryRequestOptions): Promise<Uint8Array>;
}
declare class VelocityTransportUnavailableError extends Error {
    readonly code = "VELOCITY_TRANSPORT_UNAVAILABLE";
    constructor(message: string);
}

export { type MutablePaperEvent, PAPER_VELOCITY_MESSAGE_BRIDGE, PAPER_VELOCITY_TRANSPORT, type PaperCommandContext, type PaperCommandItem, type PaperCommandPlayer, type PaperCommandRegistry, type PaperCommandResult, type PaperCommandSender, type PaperEntrypoint, type PaperEventContext, type PaperEventHandler, type PaperEventRegistry, type PaperEventType, type PaperHostApi, type PaperMessagingChannel, type PaperMessenger, type PaperProxyResponse, type PaperRuntimeHost, type PaperScheduler, type PaperVelocityMessageBridge, PaperVelocityTransport, type RegisteredPaperEvent, type ScheduledHandle, VelocityTransportUnavailableError, createPaperHostApi, createPaperPlatform, definePaperEntrypoint, paperCommunicationProviders, paperHostCommunicationProviders };
```
