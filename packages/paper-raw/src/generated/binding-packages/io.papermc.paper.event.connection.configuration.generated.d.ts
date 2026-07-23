// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_connection from './io.papermc.paper.connection.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';

/** JVM class io.papermc.paper.event.connection.configuration.AsyncPlayerConnectionConfigureEvent. */
export interface AsyncPlayerConnectionConfigureEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getConnection(): j_io_papermc_paper_connection.PlayerConfigurationConnection;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type AsyncPlayerConnectionConfigureEvent = AsyncPlayerConnectionConfigureEventMembers & j_org_bukkit_event.Event;
export interface AsyncPlayerConnectionConfigureEventStatics {
  new(arg0: j_io_papermc_paper_connection.PlayerConfigurationConnection): AsyncPlayerConnectionConfigureEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.connection.configuration.PlayerConnectionInitialConfigureEvent. */
export interface PlayerConnectionInitialConfigureEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getConnection(): j_io_papermc_paper_connection.PlayerConfigurationConnection;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerConnectionInitialConfigureEvent = PlayerConnectionInitialConfigureEventMembers & j_org_bukkit_event.Event;
export interface PlayerConnectionInitialConfigureEventStatics {
  new(arg0: j_io_papermc_paper_connection.PlayerConfigurationConnection): PlayerConnectionInitialConfigureEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.connection.configuration.PlayerConnectionReconfigureEvent. */
export interface PlayerConnectionReconfigureEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getConnection(): j_io_papermc_paper_connection.PlayerConfigurationConnection;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerConnectionReconfigureEvent = PlayerConnectionReconfigureEventMembers & j_org_bukkit_event.Event;
export interface PlayerConnectionReconfigureEventStatics {
  new(arg0: j_io_papermc_paper_connection.PlayerConfigurationConnection): PlayerConnectionReconfigureEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
