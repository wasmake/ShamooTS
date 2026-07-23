// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_server from './org.bukkit.event.server.generated.js';

/** JVM class io.papermc.paper.event.server.ServerResourcesReloadedEvent. */
export interface ServerResourcesReloadedEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_server.ServerEvent];
  getCause(): ServerResourcesReloadedEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ServerResourcesReloadedEvent = ServerResourcesReloadedEventMembers & j_org_bukkit_event_server.ServerEvent;
export interface ServerResourcesReloadedEventStatics {
  new(arg0: ServerResourcesReloadedEvent_Cause): ServerResourcesReloadedEvent;
  readonly HANDLER_LIST: j_org_bukkit_event.HandlerList;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.server.ServerResourcesReloadedEvent$Cause; constants are host handles, not strings. */
export type ServerResourcesReloadedEvent_Cause = JavaEnum<"io.papermc.paper.event.server.ServerResourcesReloadedEvent$Cause", "COMMAND" | "PLUGIN"> & ServerResourcesReloadedEvent_CauseMembers;
export interface ServerResourcesReloadedEvent_CauseMembers {
}
export interface ServerResourcesReloadedEvent_CauseStatics {
  readonly COMMAND: ServerResourcesReloadedEvent_Cause;
  readonly PLUGIN: ServerResourcesReloadedEvent_Cause;
  valueOf(arg0: string): ServerResourcesReloadedEvent_Cause;
  values(): Array<ServerResourcesReloadedEvent_Cause>;
}

/** JVM class io.papermc.paper.event.server.WhitelistStateUpdateEvent. */
export interface WhitelistStateUpdateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit.OfflinePlayer;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  getStatus(): WhitelistStateUpdateEvent_WhitelistStatus;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type WhitelistStateUpdateEvent = WhitelistStateUpdateEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface WhitelistStateUpdateEventStatics {
  new(arg0: j_com_destroystokyo_paper_profile.PlayerProfile, arg1: WhitelistStateUpdateEvent_WhitelistStatus): WhitelistStateUpdateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.server.WhitelistStateUpdateEvent$WhitelistStatus; constants are host handles, not strings. */
export type WhitelistStateUpdateEvent_WhitelistStatus = JavaEnum<"io.papermc.paper.event.server.WhitelistStateUpdateEvent$WhitelistStatus", "ADDED" | "REMOVED"> & WhitelistStateUpdateEvent_WhitelistStatusMembers;
export interface WhitelistStateUpdateEvent_WhitelistStatusMembers {
}
export interface WhitelistStateUpdateEvent_WhitelistStatusStatics {
  readonly ADDED: WhitelistStateUpdateEvent_WhitelistStatus;
  readonly REMOVED: WhitelistStateUpdateEvent_WhitelistStatus;
  valueOf(arg0: string): WhitelistStateUpdateEvent_WhitelistStatus;
  values(): Array<WhitelistStateUpdateEvent_WhitelistStatus>;
}
