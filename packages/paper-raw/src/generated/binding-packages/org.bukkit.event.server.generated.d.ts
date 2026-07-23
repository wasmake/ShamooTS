// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_map from './org.bukkit.map.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class org.bukkit.event.server.BroadcastMessageEvent. */
export interface BroadcastMessageEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMessage(): string;
  getRecipients(): JavaSet<j_org_bukkit_command.CommandSender>;
  isCancelled(): boolean;
  message(): j_net_kyori_adventure_text.Component;
  message(arg0: j_net_kyori_adventure_text.Component): void;
  setCancelled(arg0: boolean): void;
  setMessage(arg0: string): void;
}
export type BroadcastMessageEvent = BroadcastMessageEventMembers & ServerEvent & j_org_bukkit_event.Cancellable;
export interface BroadcastMessageEventStatics {
  new(arg0: string, arg1: JavaSet<j_org_bukkit_command.CommandSender>): BroadcastMessageEvent;
  new(arg0: j_net_kyori_adventure_text.Component, arg1: JavaSet<j_org_bukkit_command.CommandSender>): BroadcastMessageEvent;
  new(arg0: boolean, arg1: string, arg2: JavaSet<j_org_bukkit_command.CommandSender>): BroadcastMessageEvent;
  new(arg0: boolean, arg1: j_net_kyori_adventure_text.Component, arg2: JavaSet<j_org_bukkit_command.CommandSender>): BroadcastMessageEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.MapInitializeEvent. */
export interface MapInitializeEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMap(): j_org_bukkit_map.MapView;
}
export type MapInitializeEvent = MapInitializeEventMembers & ServerEvent;
export interface MapInitializeEventStatics {
  new(arg0: j_org_bukkit_map.MapView): MapInitializeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.PluginDisableEvent. */
export interface PluginDisableEventMembers {
  readonly __javaSupertypes?: readonly [PluginEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PluginDisableEvent = PluginDisableEventMembers & PluginEvent;
export interface PluginDisableEventStatics {
  new(arg0: j_org_bukkit_plugin.Plugin): PluginDisableEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.PluginEnableEvent. */
export interface PluginEnableEventMembers {
  readonly __javaSupertypes?: readonly [PluginEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PluginEnableEvent = PluginEnableEventMembers & PluginEvent;
export interface PluginEnableEventStatics {
  new(arg0: j_org_bukkit_plugin.Plugin): PluginEnableEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.server.PluginEvent. */
export interface PluginEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent];
  getPlugin(): j_org_bukkit_plugin.Plugin;
}
export type PluginEvent = PluginEventMembers & ServerEvent;
export interface PluginEventStatics {
  new(arg0: j_org_bukkit_plugin.Plugin): PluginEvent;
}

/** JVM class org.bukkit.event.server.RemoteServerCommandEvent. */
export interface RemoteServerCommandEventMembers {
  readonly __javaSupertypes?: readonly [ServerCommandEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type RemoteServerCommandEvent = RemoteServerCommandEventMembers & ServerCommandEvent;
export interface RemoteServerCommandEventStatics {
  new(arg0: j_org_bukkit_command.CommandSender, arg1: string): RemoteServerCommandEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.ServerCommandEvent. */
export interface ServerCommandEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent, j_org_bukkit_event.Cancellable];
  getCommand(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSender(): j_org_bukkit_command.CommandSender;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setCommand(arg0: string): void;
}
export type ServerCommandEvent = ServerCommandEventMembers & ServerEvent & j_org_bukkit_event.Cancellable;
export interface ServerCommandEventStatics {
  new(arg0: j_org_bukkit_command.CommandSender, arg1: string): ServerCommandEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.server.ServerEvent. */
export interface ServerEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
}
export type ServerEvent = ServerEventMembers & j_org_bukkit_event.Event;
export interface ServerEventStatics {
  new(): ServerEvent;
  new(arg0: boolean): ServerEvent;
}

/** JVM class org.bukkit.event.server.ServerListPingEvent. */
export interface ServerListPingEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent, Iterable<j_org_bukkit_entity.Player>];
  getAddress(): JavaOpaque<"java.net.InetAddress">;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHostname(): string;
  getMaxPlayers(): number;
  getMotd(): string;
  getNumPlayers(): number;
  /** @throws java.lang.UnsupportedOperationException */
  iterator(): JavaOpaque<"java.util.Iterator", [j_org_bukkit_entity.Player]>;
  motd(): j_net_kyori_adventure_text.Component;
  motd(arg0: j_net_kyori_adventure_text.Component): void;
  setMaxPlayers(arg0: number): void;
  setMotd(arg0: string): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.UnsupportedOperationException */
  setServerIcon(arg0: j_org_bukkit_util.CachedServerIcon): void;
  shouldSendChatPreviews(): boolean;
}
export type ServerListPingEvent = ServerListPingEventMembers & ServerEvent & Iterable<j_org_bukkit_entity.Player>;
export interface ServerListPingEventStatics {
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: string, arg3: number): ServerListPingEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: string, arg3: number, arg4: number): ServerListPingEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: j_net_kyori_adventure_text.Component, arg3: number): ServerListPingEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: j_net_kyori_adventure_text.Component, arg3: number, arg4: number): ServerListPingEvent;
  new(arg0: JavaOpaque<"java.net.InetAddress">, arg1: j_net_kyori_adventure_text.Component, arg2: number): ServerListPingEvent;
  new(arg0: JavaOpaque<"java.net.InetAddress">, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number): ServerListPingEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.ServerLoadEvent. */
export interface ServerLoadEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getType(): ServerLoadEvent_LoadType;
}
export type ServerLoadEvent = ServerLoadEventMembers & ServerEvent;
export interface ServerLoadEventStatics {
  new(arg0: ServerLoadEvent_LoadType): ServerLoadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.server.ServerLoadEvent$LoadType; constants are host handles, not strings. */
export type ServerLoadEvent_LoadType = JavaEnum<"org.bukkit.event.server.ServerLoadEvent$LoadType", "RELOAD" | "STARTUP"> & ServerLoadEvent_LoadTypeMembers;
export interface ServerLoadEvent_LoadTypeMembers {
}
export interface ServerLoadEvent_LoadTypeStatics {
  readonly RELOAD: ServerLoadEvent_LoadType;
  readonly STARTUP: ServerLoadEvent_LoadType;
  valueOf(arg0: string): ServerLoadEvent_LoadType;
  values(): Array<ServerLoadEvent_LoadType>;
}

/** JVM abstract org.bukkit.event.server.ServiceEvent. */
export interface ServiceEventMembers {
  readonly __javaSupertypes?: readonly [ServerEvent];
  getProvider(): j_org_bukkit_plugin.RegisteredServiceProvider<object>;
}
export type ServiceEvent = ServiceEventMembers & ServerEvent;
export interface ServiceEventStatics {
  new(arg0: j_org_bukkit_plugin.RegisteredServiceProvider<object>): ServiceEvent;
}

/** JVM class org.bukkit.event.server.ServiceRegisterEvent. */
export interface ServiceRegisterEventMembers {
  readonly __javaSupertypes?: readonly [ServiceEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ServiceRegisterEvent = ServiceRegisterEventMembers & ServiceEvent;
export interface ServiceRegisterEventStatics {
  new(arg0: j_org_bukkit_plugin.RegisteredServiceProvider<object>): ServiceRegisterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.ServiceUnregisterEvent. */
export interface ServiceUnregisterEventMembers {
  readonly __javaSupertypes?: readonly [ServiceEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ServiceUnregisterEvent = ServiceUnregisterEventMembers & ServiceEvent;
export interface ServiceUnregisterEventStatics {
  new(arg0: j_org_bukkit_plugin.RegisteredServiceProvider<object>): ServiceUnregisterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.server.TabCompleteEvent. */
export interface TabCompleteEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  getBuffer(): string;
  getCompletions(): JavaList<string>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location | null;
  getSender(): j_org_bukkit_command.CommandSender;
  isCancelled(): boolean;
  isCommand(): boolean;
  setCancelled(arg0: boolean): void;
  setCompletions(arg0: JavaList<string>): void;
}
export type TabCompleteEvent = TabCompleteEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface TabCompleteEventStatics {
  new(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: JavaList<string>): TabCompleteEvent;
  new(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: JavaList<string>, arg3: boolean, arg4: j_org_bukkit.Location | null): TabCompleteEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
