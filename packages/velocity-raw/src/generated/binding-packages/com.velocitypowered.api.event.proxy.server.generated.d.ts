// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_proxy_server from './com.velocitypowered.api.proxy.server.generated.js';

/** JVM record com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent. */
export interface ServerRegisteredEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  registeredServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  toString(): string;
}
export type ServerRegisteredEvent = ServerRegisteredEventMembers & JavaOpaque<"java.lang.Record">;
export interface ServerRegisteredEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerRegisteredEvent;
}

/** JVM record com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent. */
export interface ServerUnregisteredEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  unregisteredServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
}
export type ServerUnregisteredEvent = ServerUnregisteredEventMembers & JavaOpaque<"java.lang.Record">;
export interface ServerUnregisteredEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerUnregisteredEvent;
}
