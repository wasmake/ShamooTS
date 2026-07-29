// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';

/** JVM interface net.minecraft.world.level.border.BorderChangeListener. */
export interface BorderChangeListenerMembers {
  onBorderCenterSet(arg0: WorldBorder, arg1: number, arg2: number): void;
  onBorderSetDamagePerBlock(arg0: WorldBorder, arg1: number): void;
  onBorderSetDamageSafeZOne(arg0: WorldBorder, arg1: number): void;
  onBorderSetWarningBlocks(arg0: WorldBorder, arg1: number): void;
  onBorderSetWarningTime(arg0: WorldBorder, arg1: number): void;
  onBorderSizeLerping(arg0: WorldBorder, arg1: number, arg2: number, arg3: bigint): void;
  onBorderSizeSet(arg0: WorldBorder, arg1: number): void;
}
export type BorderChangeListener = BorderChangeListenerMembers;
export interface BorderChangeListenerStatics {
}

/** JVM class net.minecraft.world.level.border.BorderChangeListener$DelegateBorderChangeListener. */
export interface BorderChangeListener_DelegateBorderChangeListenerMembers {
  readonly __javaSupertypes?: readonly [BorderChangeListener];
  onBorderCenterSet(arg0: WorldBorder, arg1: number, arg2: number): void;
  onBorderSetDamagePerBlock(arg0: WorldBorder, arg1: number): void;
  onBorderSetDamageSafeZOne(arg0: WorldBorder, arg1: number): void;
  onBorderSetWarningBlocks(arg0: WorldBorder, arg1: number): void;
  onBorderSetWarningTime(arg0: WorldBorder, arg1: number): void;
  onBorderSizeLerping(arg0: WorldBorder, arg1: number, arg2: number, arg3: bigint): void;
  onBorderSizeSet(arg0: WorldBorder, arg1: number): void;
}
export type BorderChangeListener_DelegateBorderChangeListener = BorderChangeListener_DelegateBorderChangeListenerMembers & BorderChangeListener;
export interface BorderChangeListener_DelegateBorderChangeListenerStatics {
  new(arg0: WorldBorder): BorderChangeListener_DelegateBorderChangeListener;
}

/** Live JVM enum net.minecraft.world.level.border.BorderStatus; constants are host handles, not strings. */
export type BorderStatus = JavaEnum<"net.minecraft.world.level.border.BorderStatus", "GROWING" | "SHRINKING" | "STATIONARY"> & BorderStatusMembers;
export interface BorderStatusMembers {
  getColor(): number;
}
export interface BorderStatusStatics {
  readonly GROWING: BorderStatus;
  readonly SHRINKING: BorderStatus;
  readonly STATIONARY: BorderStatus;
  valueOf(arg0: string): BorderStatus;
  values(): Array<BorderStatus>;
}

/** JVM class net.minecraft.world.level.border.WorldBorder. */
export interface WorldBorderMembers {
  addListener(arg0: BorderChangeListener): void;
  applySettings(arg0: WorldBorder_Settings): void;
  clampToBounds(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.BlockPos;
  clampToBounds(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  clampToBounds(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_core.BlockPos;
  clampVec3ToBound(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3;
  clampVec3ToBound(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  closestBorder(arg0: number, arg1: number): JavaList<WorldBorder_DistancePerDirection>;
  createSettings(): WorldBorder_Settings;
  getAbsoluteMaxSize(): number;
  getCenterX(): number;
  getCenterZ(): number;
  getCollisionShape(): j_net_minecraft_world_phys_shapes.VoxelShape;
  getDamagePerBlock(): number;
  getDamageSafeZone(): number;
  getDistanceToBorder(arg0: number, arg1: number): number;
  getDistanceToBorder(arg0: j_net_minecraft_world_entity.Entity): number;
  getLerpRemainingTime(): bigint;
  getLerpSpeed(): number;
  getLerpTarget(): number;
  getMaxX(): number;
  getMaxZ(): number;
  getMinX(): number;
  getMinZ(): number;
  getSize(): number;
  getStatus(): BorderStatus;
  getWarningBlocks(): number;
  getWarningTime(): number;
  isBlockInBounds(arg0: number, arg1: number): boolean;
  isChunkInBounds(arg0: number, arg1: number): boolean;
  isInsideCloseToBorder(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): boolean;
  isWithinBounds(arg0: number, arg1: number): boolean;
  isWithinBounds(arg0: number, arg1: number, arg2: number): boolean;
  isWithinBounds(arg0: j_net_minecraft_core.BlockPos): boolean;
  isWithinBounds(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  isWithinBounds(arg0: j_net_minecraft_world_phys.AABB): boolean;
  isWithinBounds(arg0: j_net_minecraft_world_phys.Vec3): boolean;
  lerpSizeBetween(arg0: number, arg1: number, arg2: bigint): void;
  removeListener(arg0: BorderChangeListener): void;
  setAbsoluteMaxSize(arg0: number): void;
  setCenter(arg0: number, arg1: number): void;
  setDamagePerBlock(arg0: number): void;
  setDamageSafeZone(arg0: number): void;
  setSize(arg0: number): void;
  setWarningBlocks(arg0: number): void;
  setWarningTime(arg0: number): void;
  tick(): void;
  world: j_net_minecraft_server_level.ServerLevel;
}
export type WorldBorder = WorldBorderMembers;
export interface WorldBorderStatics {
  new(): WorldBorder;
  readonly DEFAULT_SETTINGS: WorldBorder_Settings;
  readonly MAX_CENTER_COORDINATE: 29999984;
  readonly MAX_SIZE: 59999968;
}

/** JVM record net.minecraft.world.level.border.WorldBorder$DistancePerDirection. */
export interface WorldBorder_DistancePerDirectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  direction(): j_net_minecraft_core.Direction;
  distance(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type WorldBorder_DistancePerDirection = WorldBorder_DistancePerDirectionMembers & JavaOpaque<"java.lang.Record">;
export interface WorldBorder_DistancePerDirectionStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: number): WorldBorder_DistancePerDirection;
}

/** JVM class net.minecraft.world.level.border.WorldBorder$Settings. */
export interface WorldBorder_SettingsMembers {
  getCenterX(): number;
  getCenterZ(): number;
  getDamagePerBlock(): number;
  getSafeZone(): number;
  getSize(): number;
  getSizeLerpTarget(): number;
  getSizeLerpTime(): bigint;
  getWarningBlocks(): number;
  getWarningTime(): number;
  write(arg0: j_net_minecraft_nbt.CompoundTag): void;
}
export type WorldBorder_Settings = WorldBorder_SettingsMembers;
export interface WorldBorder_SettingsStatics {
  read(arg0: JavaOpaque<"com.mojang.serialization.DynamicLike", [object]>, arg1: WorldBorder_Settings): WorldBorder_Settings;
}
