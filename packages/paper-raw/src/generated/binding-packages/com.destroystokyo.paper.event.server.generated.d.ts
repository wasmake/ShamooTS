// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_exception from './com.destroystokyo.paper.exception.generated.js';
import type * as j_com_destroystokyo_paper_network from './com.destroystokyo.paper.network.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_server from './org.bukkit.event.server.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class com.destroystokyo.paper.event.server.AsyncTabCompleteEvent. */
export interface AsyncTabCompleteEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  completions(): JavaList<AsyncTabCompleteEvent_Completion>;
  completions(arg0: JavaList<AsyncTabCompleteEvent_Completion>): void;
  getBuffer(): string;
  getCompletions(): JavaList<string>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location | null;
  getSender(): j_org_bukkit_command.CommandSender;
  isCancelled(): boolean;
  isCommand(): boolean;
  isHandled(): boolean;
  setCancelled(arg0: boolean): void;
  setCompletions(arg0: JavaList<string>): void;
  setHandled(arg0: boolean): void;
}
export type AsyncTabCompleteEvent = AsyncTabCompleteEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface AsyncTabCompleteEventStatics {
  new(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: boolean, arg3: j_org_bukkit.Location | null): AsyncTabCompleteEvent;
  new(arg0: j_org_bukkit_command.CommandSender, arg1: JavaList<string>, arg2: string, arg3: boolean, arg4: j_org_bukkit.Location | null): AsyncTabCompleteEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM interface com.destroystokyo.paper.event.server.AsyncTabCompleteEvent$Completion. */
export interface AsyncTabCompleteEvent_CompletionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  suggestion(): string;
  tooltip(): j_net_kyori_adventure_text.Component | null;
}
export type AsyncTabCompleteEvent_Completion = AsyncTabCompleteEvent_CompletionMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface AsyncTabCompleteEvent_CompletionStatics {
  completion(arg0: string): AsyncTabCompleteEvent_Completion;
  completion(arg0: string, arg1: j_net_kyori_adventure_text.Component | null): AsyncTabCompleteEvent_Completion;
}

/** JVM class com.destroystokyo.paper.event.server.GS4QueryEvent. */
export interface GS4QueryEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getQuerierAddress(): JavaOpaque<"java.net.InetAddress">;
  getQueryType(): GS4QueryEvent_QueryType;
  getResponse(): GS4QueryEvent_QueryResponse;
  setResponse(arg0: GS4QueryEvent_QueryResponse): void;
}
export type GS4QueryEvent = GS4QueryEventMembers & j_org_bukkit_event.Event;
export interface GS4QueryEventStatics {
  new(arg0: GS4QueryEvent_QueryType, arg1: JavaOpaque<"java.net.InetAddress">, arg2: GS4QueryEvent_QueryResponse): GS4QueryEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.server.GS4QueryEvent$QueryResponse. */
export interface GS4QueryEvent_QueryResponseMembers {
  getCurrentPlayers(): number;
  getGameVersion(): string;
  getHostname(): string;
  getMap(): string;
  getMaxPlayers(): number;
  getMotd(): string;
  getPlayers(): JavaCollection<string>;
  getPlugins(): JavaCollection<GS4QueryEvent_QueryResponse_PluginInformation>;
  getPort(): number;
  getServerVersion(): string;
  toBuilder(): GS4QueryEvent_QueryResponse_Builder;
}
export type GS4QueryEvent_QueryResponse = GS4QueryEvent_QueryResponseMembers;
export interface GS4QueryEvent_QueryResponseStatics {
  builder(): GS4QueryEvent_QueryResponse_Builder;
}

/** JVM class com.destroystokyo.paper.event.server.GS4QueryEvent$QueryResponse$Builder. */
export interface GS4QueryEvent_QueryResponse_BuilderMembers {
  build(): GS4QueryEvent_QueryResponse;
  clearPlayers(): GS4QueryEvent_QueryResponse_Builder;
  clearPlugins(): GS4QueryEvent_QueryResponse_Builder;
  currentPlayers(arg0: number): GS4QueryEvent_QueryResponse_Builder;
  gameVersion(arg0: string): GS4QueryEvent_QueryResponse_Builder;
  hostname(arg0: string): GS4QueryEvent_QueryResponse_Builder;
  map(arg0: string): GS4QueryEvent_QueryResponse_Builder;
  maxPlayers(arg0: number): GS4QueryEvent_QueryResponse_Builder;
  motd(arg0: string): GS4QueryEvent_QueryResponse_Builder;
  players(arg0: JavaCollection<string>): GS4QueryEvent_QueryResponse_Builder;
  players(...arg0: Array<string>): GS4QueryEvent_QueryResponse_Builder;
  plugins(arg0: JavaCollection<GS4QueryEvent_QueryResponse_PluginInformation>): GS4QueryEvent_QueryResponse_Builder;
  plugins(...arg0: Array<GS4QueryEvent_QueryResponse_PluginInformation>): GS4QueryEvent_QueryResponse_Builder;
  port(arg0: number): GS4QueryEvent_QueryResponse_Builder;
  serverVersion(arg0: string): GS4QueryEvent_QueryResponse_Builder;
}
export type GS4QueryEvent_QueryResponse_Builder = GS4QueryEvent_QueryResponse_BuilderMembers;
export interface GS4QueryEvent_QueryResponse_BuilderStatics {
}

/** JVM class com.destroystokyo.paper.event.server.GS4QueryEvent$QueryResponse$PluginInformation. */
export interface GS4QueryEvent_QueryResponse_PluginInformationMembers {
  getName(): string;
  getVersion(): string;
  setName(arg0: string): void;
  setVersion(arg0: string): void;
}
export type GS4QueryEvent_QueryResponse_PluginInformation = GS4QueryEvent_QueryResponse_PluginInformationMembers;
export interface GS4QueryEvent_QueryResponse_PluginInformationStatics {
  new(arg0: string, arg1: string): GS4QueryEvent_QueryResponse_PluginInformation;
  of(arg0: string, arg1: string): GS4QueryEvent_QueryResponse_PluginInformation;
}

/** Live JVM enum com.destroystokyo.paper.event.server.GS4QueryEvent$QueryType; constants are host handles, not strings. */
export type GS4QueryEvent_QueryType = JavaEnum<"com.destroystokyo.paper.event.server.GS4QueryEvent$QueryType", "BASIC" | "FULL"> & GS4QueryEvent_QueryTypeMembers;
export interface GS4QueryEvent_QueryTypeMembers {
}
export interface GS4QueryEvent_QueryTypeStatics {
  readonly BASIC: GS4QueryEvent_QueryType;
  readonly FULL: GS4QueryEvent_QueryType;
  valueOf(arg0: string): GS4QueryEvent_QueryType;
  values(): Array<GS4QueryEvent_QueryType>;
}

/** JVM class com.destroystokyo.paper.event.server.PaperServerListPingEvent. */
export interface PaperServerListPingEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_server.ServerListPingEvent, j_org_bukkit_event.Cancellable];
  getClient(): j_com_destroystokyo_paper_network.StatusClient;
  getListedPlayers(): JavaList<PaperServerListPingEvent_ListedPlayerInfo>;
  getMaxPlayers(): number;
  getNumPlayers(): number;
  getPlayerSample(): JavaList<j_com_destroystokyo_paper_profile.PlayerProfile>;
  getProtocolVersion(): number;
  getServerIcon(): j_org_bukkit_util.CachedServerIcon | null;
  getVersion(): string;
  isCancelled(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [j_org_bukkit_entity.Player]>;
  setCancelled(arg0: boolean): void;
  setHidePlayers(arg0: boolean): void;
  setNumPlayers(arg0: number): void;
  setProtocolVersion(arg0: number): void;
  setServerIcon(arg0: j_org_bukkit_util.CachedServerIcon | null): void;
  setVersion(arg0: string): void;
  shouldHidePlayers(): boolean;
}
export type PaperServerListPingEvent = PaperServerListPingEventMembers & j_org_bukkit_event_server.ServerListPingEvent & j_org_bukkit_event.Cancellable;
export interface PaperServerListPingEventStatics {
  new(arg0: j_com_destroystokyo_paper_network.StatusClient, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: string, arg5: number, arg6: j_org_bukkit_util.CachedServerIcon | null): PaperServerListPingEvent;
}

/** JVM record com.destroystokyo.paper.event.server.PaperServerListPingEvent$ListedPlayerInfo. */
export interface PaperServerListPingEvent_ListedPlayerInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  name(): string;
  toString(): string;
}
export type PaperServerListPingEvent_ListedPlayerInfo = PaperServerListPingEvent_ListedPlayerInfoMembers & JavaOpaque<"java.lang.Record">;
export interface PaperServerListPingEvent_ListedPlayerInfoStatics {
  new(arg0: string, arg1: JavaOpaque<"java.util.UUID">): PaperServerListPingEvent_ListedPlayerInfo;
}

/** JVM class com.destroystokyo.paper.event.server.ServerExceptionEvent. */
export interface ServerExceptionEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getException(): j_com_destroystokyo_paper_exception.ServerException;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ServerExceptionEvent = ServerExceptionEventMembers & j_org_bukkit_event.Event;
export interface ServerExceptionEventStatics {
  new(arg0: j_com_destroystokyo_paper_exception.ServerException): ServerExceptionEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.server.ServerTickEndEvent. */
export interface ServerTickEndEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTickDuration(): number;
  getTickNumber(): number;
  getTimeRemaining(): bigint;
}
export type ServerTickEndEvent = ServerTickEndEventMembers & j_org_bukkit_event.Event;
export interface ServerTickEndEventStatics {
  new(arg0: number, arg1: number, arg2: bigint): ServerTickEndEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.server.ServerTickStartEvent. */
export interface ServerTickStartEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTickNumber(): number;
}
export type ServerTickStartEvent = ServerTickStartEventMembers & j_org_bukkit_event.Event;
export interface ServerTickStartEventStatics {
  new(arg0: number): ServerTickStartEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.server.WhitelistToggleEvent. */
export interface WhitelistToggleEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isEnabled(): boolean;
}
export type WhitelistToggleEvent = WhitelistToggleEventMembers & j_org_bukkit_event.Event;
export interface WhitelistToggleEventStatics {
  new(arg0: boolean): WhitelistToggleEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
