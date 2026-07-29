## API Report File for "@shamoo/paper"

> Generated from the rolled-up public declaration because API Extractor cannot follow a keyword-named member in the generated JVM graph.

```ts
import * as _shamoo_di from '@shamoo/di';
import { Provider } from '@shamoo/di';
import { PlatformCapability, Platform } from '@shamoo/core';
import { CommandSender, Item, CommandParser, Context, Player } from '@shamoo/commands';
import { BinaryRequestTransport, TransportAvailability, BinaryRequestOptions } from '@shamoo/communication';
import { PaperEntrypointContext, GeneratedEventMap, GeneratedEventCancellabilityMap, Player as Player$1, ScheduledTask, GlobalRegionScheduler, Entity } from '@shamoo/paper-raw';

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
type PaperCommandSender = CommandSender;
type PaperCommandPlayer = Player;
type PaperCommandItem = Item;
type PaperAction = 'click' | 'left' | 'right';
type PaperActionCallback = (context: PaperActionContext) => unknown;
interface PaperActionContext {
    readonly sender: PaperCommandSender;
    readonly action: PaperAction;
    readonly slot?: number;
    readonly item?: PaperCommandItem;
    reply(message: TextLike): Promise<boolean>;
}
type ClickActionDescriptor = {
    readonly action: 'open-url' | 'run-command' | 'suggest-command' | 'copy-to-clipboard';
    readonly value: string;
} | {
    readonly action: 'change-page';
    readonly value: number;
} | {
    readonly action: 'callback';
    readonly callback: PaperActionCallback;
    readonly uses?: number;
    readonly lifetimeSeconds?: number;
};
interface TextStyle {
    readonly color?: string;
    readonly font?: string;
    readonly bold?: boolean;
    readonly italic?: boolean;
    readonly underlined?: boolean;
    readonly strikethrough?: boolean;
    readonly obfuscated?: boolean;
    readonly insertion?: string;
}
interface TextOptions extends TextStyle {
    readonly children?: readonly TextLike[];
    readonly click?: ClickActionDescriptor;
}
interface TextDescriptor extends TextStyle {
    readonly kind: 'text';
    readonly content: string;
    readonly children?: readonly TextLike[];
    readonly click?: ClickActionDescriptor;
}
interface MiniMessageDescriptor {
    readonly kind: 'mini-message';
    readonly content: string;
    readonly placeholders?: Readonly<Record<string, TextLike>>;
    readonly miniPlaceholders?: boolean;
}
interface MiniMessageOptions {
    readonly placeholders?: Readonly<Record<string, TextLike>>;
    /** Resolve audience and global tags from MiniPlaceholders when that plugin is installed. */
    readonly miniPlaceholders?: boolean;
}
interface LegacyTextDescriptor {
    readonly kind: 'legacy';
    readonly content: string;
    readonly character: string;
}
type TextLike = string | TextDescriptor | MiniMessageDescriptor | LegacyTextDescriptor;
declare function text(content: string, options?: TextOptions): TextDescriptor;
declare function miniMessage(content: string, options?: MiniMessageOptions): MiniMessageDescriptor;
declare function legacyText(content: string, character?: string): LegacyTextDescriptor;
interface ItemActionDescriptor {
    readonly left?: PaperActionCallback;
    readonly right?: PaperActionCallback;
    readonly preventDefault?: boolean;
}
type ActionDescriptor = ItemActionDescriptor;
interface ItemDescriptor {
    readonly kind: 'item';
    readonly material: string;
    readonly amount: number;
    readonly lore: readonly TextLike[];
    readonly name?: TextLike;
    readonly actions?: ItemActionDescriptor;
}
interface ItemOptions {
    readonly amount?: number;
    readonly lore?: readonly TextLike[];
    readonly name?: TextLike;
    readonly actions?: ItemActionDescriptor;
}
declare function item(material: string, options?: ItemOptions): ItemDescriptor;
interface InventorySlotDescriptor {
    readonly slot: number;
    readonly item: ItemDescriptor;
}
interface InventoryDescriptor {
    readonly kind: 'inventory';
    readonly rows: number;
    readonly title: TextLike;
    readonly protected: boolean;
    readonly slots: readonly InventorySlotDescriptor[];
}
interface InventoryOptions {
    readonly protected?: boolean;
    readonly slots?: readonly InventorySlotDescriptor[];
}
declare function inventory(rows: number, title: TextLike, options?: InventoryOptions): InventoryDescriptor;
type PaperCommandResult = void | Promise<void>;
interface PaperCommandContext extends Context {
    reply(message: TextLike): Promise<boolean>;
    openInventory(inventory: InventoryDescriptor): Promise<boolean>;
    giveItem(item: ItemDescriptor): Promise<boolean>;
    findPlayer(name: string): Promise<PaperCommandPlayer | null>;
    mainHand(): Promise<PaperCommandItem | null>;
    takeMainHand(material: string, amount: number): Promise<boolean>;
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
    send<T>(player: Player$1, channel: PaperMessagingChannel<T>, value: T): void;
}
interface PaperCommandArgumentDescriptor {
    readonly name: string;
    readonly parser: CommandParser;
    readonly suggestions: readonly string[];
}
interface PaperCommandOptionDescriptor extends PaperCommandArgumentDescriptor {
    readonly aliases: readonly string[];
    readonly required: boolean;
}
interface PaperCommandRouteDescriptor {
    readonly syntax: string;
    readonly description: string;
    readonly permission: string;
    readonly sender: 'any' | 'player' | 'console';
    readonly arguments: readonly PaperCommandArgumentDescriptor[];
    readonly options: readonly PaperCommandOptionDescriptor[];
}
interface PaperRuntimeHost {
    registerCallback(name: string, callback: (...values: readonly unknown[]) => unknown): boolean;
    unregisterCallback(name: string): boolean;
    paperSubscribeEvent(metadata: object, type: string, priority: string, ignoreCancelled: boolean, callback: {
        readonly $callback: string;
    }): unknown;
    paperRegisterCommand(metadata: object, root: string, aliases: readonly string[], route: PaperCommandRouteDescriptor, callback: {
        readonly $callback: string;
    }): Promise<unknown>;
    paperCommandReply(metadata: object, token: string, message: unknown): Promise<unknown>;
    paperCommandOpenInventory(metadata: object, token: string, inventory: unknown): Promise<unknown>;
    paperCommandGiveItem(metadata: object, token: string, item: unknown): Promise<unknown>;
    paperCommandFindPlayer(metadata: object, token: string, name: string): Promise<unknown>;
    paperCommandMainHand(metadata: object, token: string): Promise<unknown>;
    paperCommandTakeMainHand(metadata: object, token: string, material: string, amount: number): Promise<unknown>;
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
    command(name: string, handler: (context: PaperCommandContext) => PaperCommandResult, aliases?: readonly string[]): Promise<void>;
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

export { type ActionDescriptor, type ClickActionDescriptor, type InventoryDescriptor, type InventoryOptions, type InventorySlotDescriptor, type ItemActionDescriptor, type ItemDescriptor, type ItemOptions, type LegacyTextDescriptor, type MiniMessageDescriptor, type MiniMessageOptions, type MutablePaperEvent, PAPER_VELOCITY_MESSAGE_BRIDGE, PAPER_VELOCITY_TRANSPORT, type PaperAction, type PaperActionCallback, type PaperActionContext, type PaperCommandArgumentDescriptor, type PaperCommandContext, type PaperCommandItem, type PaperCommandOptionDescriptor, type PaperCommandPlayer, type PaperCommandRegistry, type PaperCommandResult, type PaperCommandRouteDescriptor, type PaperCommandSender, type PaperEntrypoint, type PaperEventContext, type PaperEventHandler, type PaperEventRegistry, type PaperEventType, type PaperHostApi, type PaperMessagingChannel, type PaperMessenger, type PaperProxyResponse, type PaperRuntimeHost, type PaperScheduler, type PaperVelocityMessageBridge, PaperVelocityTransport, type RegisteredPaperEvent, type ScheduledHandle, type TextDescriptor, type TextLike, type TextOptions, type TextStyle, VelocityTransportUnavailableError, createPaperHostApi, createPaperPlatform, definePaperEntrypoint, inventory, item, legacyText, miniMessage, paperCommunicationProviders, paperHostCommunicationProviders, text };
```
