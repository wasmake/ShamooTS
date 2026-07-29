// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';

/** JVM class org.spigotmc.event.player.PlayerSpawnLocationEvent. */
export interface PlayerSpawnLocationEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSpawnLocation(): j_org_bukkit.Location;
  setSpawnLocation(arg0: j_org_bukkit.Location): void;
}
export type PlayerSpawnLocationEvent = PlayerSpawnLocationEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerSpawnLocationEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location): PlayerSpawnLocationEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
