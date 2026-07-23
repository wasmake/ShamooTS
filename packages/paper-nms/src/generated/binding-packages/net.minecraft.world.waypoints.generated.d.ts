// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.waypoints.TrackedWaypoint. */
export interface TrackedWaypointMembers {
  readonly __javaSupertypes?: readonly [Waypoint];
  distanceSquared(arg0: j_net_minecraft_world_entity.Entity): number;
  icon(): Waypoint_Icon;
  id(): JavaOpaque<"com.mojang.datafixers.util.Either", [JavaOpaque<"java.util.UUID">, string]>;
  readonly identifier: JavaOpaque<"com.mojang.datafixers.util.Either", [JavaOpaque<"java.util.UUID">, string]>;
  pitchDirectionToCamera(arg0: j_net_minecraft_world_level.Level, arg1: TrackedWaypoint_Projector): TrackedWaypoint_PitchDirection;
  update(arg0: TrackedWaypoint): void;
  write(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
  writeContents(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
  yawAngleToCamera(arg0: j_net_minecraft_world_level.Level, arg1: TrackedWaypoint_Camera): number;
}
export type TrackedWaypoint = TrackedWaypointMembers & Waypoint;
export interface TrackedWaypointStatics {
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, TrackedWaypoint>;
  empty(arg0: JavaOpaque<"java.util.UUID">): TrackedWaypoint;
  setAzimuth(arg0: JavaOpaque<"java.util.UUID">, arg1: Waypoint_Icon, arg2: number): TrackedWaypoint;
  setChunk(arg0: JavaOpaque<"java.util.UUID">, arg1: Waypoint_Icon, arg2: j_net_minecraft_world_level.ChunkPos): TrackedWaypoint;
  setPosition(arg0: JavaOpaque<"java.util.UUID">, arg1: Waypoint_Icon, arg2: j_net_minecraft_core.Vec3i): TrackedWaypoint;
}

/** JVM interface net.minecraft.world.waypoints.TrackedWaypoint$Camera. */
export interface TrackedWaypoint_CameraMembers {
  position(): j_net_minecraft_world_phys.Vec3;
  yaw(): number;
}
export type TrackedWaypoint_Camera = TrackedWaypoint_CameraMembers;
export interface TrackedWaypoint_CameraStatics {
}

/** Live JVM enum net.minecraft.world.waypoints.TrackedWaypoint$PitchDirection; constants are host handles, not strings. */
export type TrackedWaypoint_PitchDirection = JavaEnum<"net.minecraft.world.waypoints.TrackedWaypoint$PitchDirection", "DOWN" | "NONE" | "UP"> & TrackedWaypoint_PitchDirectionMembers;
export interface TrackedWaypoint_PitchDirectionMembers {
}
export interface TrackedWaypoint_PitchDirectionStatics {
  readonly DOWN: TrackedWaypoint_PitchDirection;
  readonly NONE: TrackedWaypoint_PitchDirection;
  readonly UP: TrackedWaypoint_PitchDirection;
  valueOf(arg0: string): TrackedWaypoint_PitchDirection;
  values(): Array<TrackedWaypoint_PitchDirection>;
}

/** JVM interface net.minecraft.world.waypoints.TrackedWaypoint$Projector. */
export interface TrackedWaypoint_ProjectorMembers {
  projectHorizonToScreen(): number;
  projectPointToScreen(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
}
export type TrackedWaypoint_Projector = TrackedWaypoint_ProjectorMembers;
export interface TrackedWaypoint_ProjectorStatics {
}

/** JVM interface net.minecraft.world.waypoints.TrackedWaypointManager. */
export interface TrackedWaypointManagerMembers {
  readonly __javaSupertypes?: readonly [WaypointManager<TrackedWaypoint>];
}
export type TrackedWaypointManager = TrackedWaypointManagerMembers & WaypointManager<TrackedWaypoint>;
export interface TrackedWaypointManagerStatics {
}

/** JVM interface net.minecraft.world.waypoints.Waypoint. */
export interface WaypointMembers {
}
export type Waypoint = WaypointMembers;
export interface WaypointStatics {
  readonly MAX_RANGE: 60000000;
  readonly WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: j_net_minecraft_world_entity_ai_attributes.AttributeModifier;
  addHideAttribute(arg0: j_net_minecraft_world_item.Item_Properties): j_net_minecraft_world_item.Item_Properties;
}

/** JVM class net.minecraft.world.waypoints.Waypoint$Icon. */
export interface Waypoint_IconMembers {
  cloneAndAssignStyle(arg0: j_net_minecraft_world_entity.LivingEntity): Waypoint_Icon;
  color: JavaOptional<number>;
  hasData(): boolean;
  style: j_net_minecraft_resources.ResourceKey<WaypointStyleAsset>;
}
export type Waypoint_Icon = Waypoint_IconMembers;
export interface Waypoint_IconStatics {
  new(): Waypoint_Icon;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Waypoint_Icon]>;
  readonly NULL: Waypoint_Icon;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Waypoint_Icon>;
}

/** JVM interface net.minecraft.world.waypoints.WaypointManager. */
export interface WaypointManagerMembers<T /* extends Waypoint */ = unknown> {
  trackWaypoint(arg0: T): void;
  untrackWaypoint(arg0: T): void;
  updateWaypoint(arg0: T): void;
}
export type WaypointManager<T /* extends Waypoint */ = unknown> = WaypointManagerMembers<T>;
export interface WaypointManagerStatics {
}

/** JVM class net.minecraft.world.waypoints.WaypointStyleAsset. */
export interface WaypointStyleAssetMembers {
}
export type WaypointStyleAsset = WaypointStyleAssetMembers;
export interface WaypointStyleAssetStatics {
  new(): WaypointStyleAsset;
}

/** JVM interface net.minecraft.world.waypoints.WaypointStyleAssets. */
export interface WaypointStyleAssetsMembers {
}
export type WaypointStyleAssets = WaypointStyleAssetsMembers;
export interface WaypointStyleAssetsStatics {
  readonly BOWTIE: j_net_minecraft_resources.ResourceKey<WaypointStyleAsset>;
  readonly DEFAULT: j_net_minecraft_resources.ResourceKey<WaypointStyleAsset>;
  readonly ROOT_ID: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<WaypointStyleAsset>>;
  createId(arg0: string): j_net_minecraft_resources.ResourceKey<WaypointStyleAsset>;
}

/** JVM interface net.minecraft.world.waypoints.WaypointTransmitter. */
export interface WaypointTransmitterMembers {
  readonly __javaSupertypes?: readonly [Waypoint];
  isTransmittingWaypoint(): boolean;
  makeWaypointConnectionWith(arg0: j_net_minecraft_server_level.ServerPlayer): JavaOptional<WaypointTransmitter_Connection>;
  waypointIcon(): Waypoint_Icon;
}
export type WaypointTransmitter = WaypointTransmitterMembers & Waypoint;
export interface WaypointTransmitterStatics {
  readonly REALLY_FAR_DISTANCE: 332;
  doesSourceIgnoreReceiver(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_server_level.ServerPlayer): boolean;
  isChunkVisible(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_server_level.ServerPlayer): boolean;
  isReallyFar(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_server_level.ServerPlayer): boolean;
}

/** JVM interface net.minecraft.world.waypoints.WaypointTransmitter$BlockConnection. */
export interface WaypointTransmitter_BlockConnectionMembers {
  readonly __javaSupertypes?: readonly [WaypointTransmitter_Connection];
  distanceManhattan(): number;
  isBroken(): boolean;
}
export type WaypointTransmitter_BlockConnection = WaypointTransmitter_BlockConnectionMembers & WaypointTransmitter_Connection;
export interface WaypointTransmitter_BlockConnectionStatics {
}

/** JVM interface net.minecraft.world.waypoints.WaypointTransmitter$ChunkConnection. */
export interface WaypointTransmitter_ChunkConnectionMembers {
  readonly __javaSupertypes?: readonly [WaypointTransmitter_Connection];
  distanceChessboard(): number;
  isBroken(): boolean;
}
export type WaypointTransmitter_ChunkConnection = WaypointTransmitter_ChunkConnectionMembers & WaypointTransmitter_Connection;
export interface WaypointTransmitter_ChunkConnectionStatics {
}

/** JVM interface net.minecraft.world.waypoints.WaypointTransmitter$Connection. */
export interface WaypointTransmitter_ConnectionMembers {
  connect(): void;
  disconnect(): void;
  isBroken(): boolean;
  update(): void;
}
export type WaypointTransmitter_Connection = WaypointTransmitter_ConnectionMembers;
export interface WaypointTransmitter_ConnectionStatics {
}

/** JVM class net.minecraft.world.waypoints.WaypointTransmitter$EntityAzimuthConnection. */
export interface WaypointTransmitter_EntityAzimuthConnectionMembers {
  readonly __javaSupertypes?: readonly [WaypointTransmitter_Connection];
  connect(): void;
  disconnect(): void;
  isBroken(): boolean;
  update(): void;
}
export type WaypointTransmitter_EntityAzimuthConnection = WaypointTransmitter_EntityAzimuthConnectionMembers & WaypointTransmitter_Connection;
export interface WaypointTransmitter_EntityAzimuthConnectionStatics {
  new(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: Waypoint_Icon, arg2: j_net_minecraft_server_level.ServerPlayer): WaypointTransmitter_EntityAzimuthConnection;
}

/** JVM class net.minecraft.world.waypoints.WaypointTransmitter$EntityBlockConnection. */
export interface WaypointTransmitter_EntityBlockConnectionMembers {
  readonly __javaSupertypes?: readonly [WaypointTransmitter_BlockConnection];
  connect(): void;
  disconnect(): void;
  distanceManhattan(): number;
  isBroken(): boolean;
  update(): void;
}
export type WaypointTransmitter_EntityBlockConnection = WaypointTransmitter_EntityBlockConnectionMembers & WaypointTransmitter_BlockConnection;
export interface WaypointTransmitter_EntityBlockConnectionStatics {
  new(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: Waypoint_Icon, arg2: j_net_minecraft_server_level.ServerPlayer): WaypointTransmitter_EntityBlockConnection;
}

/** JVM class net.minecraft.world.waypoints.WaypointTransmitter$EntityChunkConnection. */
export interface WaypointTransmitter_EntityChunkConnectionMembers {
  readonly __javaSupertypes?: readonly [WaypointTransmitter_ChunkConnection];
  connect(): void;
  disconnect(): void;
  distanceChessboard(): number;
  isBroken(): boolean;
  update(): void;
}
export type WaypointTransmitter_EntityChunkConnection = WaypointTransmitter_EntityChunkConnectionMembers & WaypointTransmitter_ChunkConnection;
export interface WaypointTransmitter_EntityChunkConnectionStatics {
  new(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: Waypoint_Icon, arg2: j_net_minecraft_server_level.ServerPlayer): WaypointTransmitter_EntityChunkConnection;
}
