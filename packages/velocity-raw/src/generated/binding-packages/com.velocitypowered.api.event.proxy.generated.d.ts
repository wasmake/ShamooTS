// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_event from './com.velocitypowered.api.event.generated.js';
import type * as j_com_velocitypowered_api_network from './com.velocitypowered.api.network.generated.js';
import type * as j_com_velocitypowered_api_proxy from './com.velocitypowered.api.proxy.generated.js';
import type * as j_com_velocitypowered_api_proxy_server from './com.velocitypowered.api.proxy.server.generated.js';

/** JVM class com.velocitypowered.api.event.proxy.ListenerBoundEvent. */
export interface ListenerBoundEventMembers {
  getAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getListenerType(): j_com_velocitypowered_api_network.ListenerType;
  toString(): string;
}
export type ListenerBoundEvent = ListenerBoundEventMembers;
export interface ListenerBoundEventStatics {
  new(arg0: JavaOpaque<"java.net.InetSocketAddress">, arg1: j_com_velocitypowered_api_network.ListenerType): ListenerBoundEvent;
}

/** JVM class com.velocitypowered.api.event.proxy.ListenerCloseEvent. */
export interface ListenerCloseEventMembers {
  getAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getListenerType(): j_com_velocitypowered_api_network.ListenerType;
  toString(): string;
}
export type ListenerCloseEvent = ListenerCloseEventMembers;
export interface ListenerCloseEventStatics {
  new(arg0: JavaOpaque<"java.net.InetSocketAddress">, arg1: j_com_velocitypowered_api_network.ListenerType): ListenerCloseEvent;
}

/** JVM class com.velocitypowered.api.event.proxy.ProxyInitializeEvent. */
export interface ProxyInitializeEventMembers {
  toString(): string;
}
export type ProxyInitializeEvent = ProxyInitializeEventMembers;
export interface ProxyInitializeEventStatics {
  new(): ProxyInitializeEvent;
}

/** JVM class com.velocitypowered.api.event.proxy.ProxyPingEvent. */
export interface ProxyPingEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_GenericResult>];
  getConnection(): j_com_velocitypowered_api_proxy.InboundConnection;
  getPing(): j_com_velocitypowered_api_proxy_server.ServerPing;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_GenericResult;
  setPing(arg0: j_com_velocitypowered_api_proxy_server.ServerPing): void;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_GenericResult): void;
  toString(): string;
}
export type ProxyPingEvent = ProxyPingEventMembers & j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_GenericResult>;
export interface ProxyPingEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.InboundConnection, arg1: j_com_velocitypowered_api_proxy_server.ServerPing): ProxyPingEvent;
}

/** JVM class com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent. */
export interface ProxyPreShutdownEventMembers {
  toString(): string;
}
export type ProxyPreShutdownEvent = ProxyPreShutdownEventMembers;
export interface ProxyPreShutdownEventStatics {
  new(): ProxyPreShutdownEvent;
}

/** JVM class com.velocitypowered.api.event.proxy.ProxyReloadEvent. */
export interface ProxyReloadEventMembers {
  toString(): string;
}
export type ProxyReloadEvent = ProxyReloadEventMembers;
export interface ProxyReloadEventStatics {
  new(): ProxyReloadEvent;
}

/** JVM class com.velocitypowered.api.event.proxy.ProxyShutdownEvent. */
export interface ProxyShutdownEventMembers {
  toString(): string;
}
export type ProxyShutdownEvent = ProxyShutdownEventMembers;
export interface ProxyShutdownEventStatics {
  new(): ProxyShutdownEvent;
}
