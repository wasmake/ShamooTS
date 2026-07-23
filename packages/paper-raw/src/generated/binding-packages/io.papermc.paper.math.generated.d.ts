// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface io.papermc.paper.math.BlockPosition. */
export interface BlockPositionMembers {
  readonly __javaSupertypes?: readonly [Position];
  isBlock(): boolean;
  isFine(): boolean;
  offset(arg0: number, arg1: number, arg2: number): FinePosition;
  offset(arg0: number, arg1: number, arg2: number): BlockPosition;
  offset(arg0: number, arg1: number, arg2: number): Position;
  offset(arg0: j_org_bukkit.Axis, arg1: number): BlockPosition;
  offset(arg0: j_org_bukkit_block.BlockFace): BlockPosition;
  offset(arg0: j_org_bukkit_block.BlockFace, arg1: number): BlockPosition;
  toBlock(): BlockPosition;
  x(): number;
  y(): number;
  z(): number;
}
export type BlockPosition = BlockPositionMembers & Position;
export interface BlockPositionStatics {
}

/** JVM interface io.papermc.paper.math.FinePosition. */
export interface FinePositionMembers {
  readonly __javaSupertypes?: readonly [Position];
  blockX(): number;
  blockY(): number;
  blockZ(): number;
  isBlock(): boolean;
  isFine(): boolean;
  offset(arg0: number, arg1: number, arg2: number): FinePosition;
  offset(arg0: number, arg1: number, arg2: number): FinePosition;
  offset(arg0: number, arg1: number, arg2: number): Position;
  toBlock(): BlockPosition;
}
export type FinePosition = FinePositionMembers & Position;
export interface FinePositionStatics {
}

/** JVM interface io.papermc.paper.math.Position. */
export interface PositionMembers {
  blockX(): number;
  blockY(): number;
  blockZ(): number;
  isBlock(): boolean;
  isFine(): boolean;
  isFinite(): boolean;
  offset(arg0: number, arg1: number, arg2: number): FinePosition;
  offset(arg0: number, arg1: number, arg2: number): Position;
  toBlock(): BlockPosition;
  toCenter(): FinePosition;
  toLocation(arg0: j_org_bukkit.World): j_org_bukkit.Location;
  toVector(): j_org_bukkit_util.Vector;
  x(): number;
  y(): number;
  z(): number;
}
export type Position = PositionMembers;
export interface PositionStatics {
  readonly BLOCK_ZERO: BlockPosition;
  readonly FINE_ZERO: FinePosition;
  block(arg0: number, arg1: number, arg2: number): BlockPosition;
  block(arg0: j_org_bukkit.Location): BlockPosition;
  fine(arg0: number, arg1: number, arg2: number): FinePosition;
  fine(arg0: j_org_bukkit.Location): FinePosition;
}

/** JVM interface io.papermc.paper.math.Rotation. */
export interface RotationMembers {
  pitch(): number;
  yaw(): number;
}
export type Rotation = RotationMembers;
export interface RotationStatics {
  rotation(arg0: number, arg1: number): Rotation;
}

/** JVM interface io.papermc.paper.math.Rotations. */
export interface RotationsMembers {
  add(arg0: number, arg1: number, arg2: number): Rotations;
  subtract(arg0: number, arg1: number, arg2: number): Rotations;
  withX(arg0: number): Rotations;
  withY(arg0: number): Rotations;
  withZ(arg0: number): Rotations;
  x(): number;
  y(): number;
  z(): number;
}
export type Rotations = RotationsMembers;
export interface RotationsStatics {
  readonly ZERO: Rotations;
  ofDegrees(arg0: number, arg1: number, arg2: number): Rotations;
}
