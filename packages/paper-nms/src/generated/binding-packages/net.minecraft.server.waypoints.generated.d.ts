// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_waypoints from './net.minecraft.world.waypoints.generated.js';

/** JVM class net.minecraft.server.waypoints.ServerWaypointManager. */
export interface ServerWaypointManagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_waypoints.WaypointManager<j_net_minecraft_world_waypoints.WaypointTransmitter>];
  addPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  breakAllConnections(): void;
  remakeConnections(arg0: j_net_minecraft_world_waypoints.WaypointTransmitter): void;
  removePlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  trackWaypoint(arg0: j_net_minecraft_world_waypoints.WaypointTransmitter): void;
  transmitters(): JavaSet<j_net_minecraft_world_waypoints.WaypointTransmitter>;
  untrackWaypoint(arg0: j_net_minecraft_world_waypoints.WaypointTransmitter): void;
  updatePlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  updateWaypoint(arg0: j_net_minecraft_world_waypoints.WaypointTransmitter): void;
}
export type ServerWaypointManager = ServerWaypointManagerMembers & j_net_minecraft_world_waypoints.WaypointManager<j_net_minecraft_world_waypoints.WaypointTransmitter>;
export interface ServerWaypointManagerStatics {
  new(): ServerWaypointManager;
}
