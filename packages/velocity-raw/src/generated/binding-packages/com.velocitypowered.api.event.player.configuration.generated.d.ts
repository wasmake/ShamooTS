// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_proxy from './com.velocitypowered.api.proxy.generated.js';

/** JVM record com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent. */
export interface PlayerConfigurationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): j_com_velocitypowered_api_proxy.Player;
  server(): j_com_velocitypowered_api_proxy.ServerConnection;
  toString(): string;
}
export type PlayerConfigurationEvent = PlayerConfigurationEventMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerConfigurationEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy.ServerConnection): PlayerConfigurationEvent;
}

/** JVM record com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent. */
export interface PlayerEnterConfigurationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): j_com_velocitypowered_api_proxy.Player;
  server(): j_com_velocitypowered_api_proxy.ServerConnection;
  toString(): string;
}
export type PlayerEnterConfigurationEvent = PlayerEnterConfigurationEventMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerEnterConfigurationEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy.ServerConnection): PlayerEnterConfigurationEvent;
}

/** JVM record com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent. */
export interface PlayerEnteredConfigurationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): j_com_velocitypowered_api_proxy.Player;
  server(): j_com_velocitypowered_api_proxy.ServerConnection;
  toString(): string;
}
export type PlayerEnteredConfigurationEvent = PlayerEnteredConfigurationEventMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerEnteredConfigurationEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy.ServerConnection): PlayerEnteredConfigurationEvent;
}

/** JVM record com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent. */
export interface PlayerFinishConfigurationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): j_com_velocitypowered_api_proxy.Player;
  server(): j_com_velocitypowered_api_proxy.ServerConnection;
  toString(): string;
}
export type PlayerFinishConfigurationEvent = PlayerFinishConfigurationEventMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerFinishConfigurationEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy.ServerConnection): PlayerFinishConfigurationEvent;
}

/** JVM record com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent. */
export interface PlayerFinishedConfigurationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): j_com_velocitypowered_api_proxy.Player;
  server(): j_com_velocitypowered_api_proxy.ServerConnection;
  toString(): string;
}
export type PlayerFinishedConfigurationEvent = PlayerFinishedConfigurationEventMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerFinishedConfigurationEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy.ServerConnection): PlayerFinishedConfigurationEvent;
}
