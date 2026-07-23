// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_server from './org.bukkit.event.server.generated.js';

/** JVM class io.papermc.paper.threadedregions.RegionizedServerInitEvent. */
export interface RegionizedServerInitEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_server.ServerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type RegionizedServerInitEvent = RegionizedServerInitEventMembers & j_org_bukkit_event_server.ServerEvent;
export interface RegionizedServerInitEventStatics {
  new(): RegionizedServerInitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
