// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_structure from './org.bukkit.block.structure.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.block.data.Ageable. */
export interface AgeableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type Ageable = AgeableMembers & BlockData;
export interface AgeableStatics {
}

/** JVM interface org.bukkit.block.data.AnaloguePowerable. */
export interface AnaloguePowerableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getMaximumPower(): number;
  getPower(): number;
  setPower(arg0: number): void;
}
export type AnaloguePowerable = AnaloguePowerableMembers & BlockData;
export interface AnaloguePowerableStatics {
}

/** JVM interface org.bukkit.block.data.Attachable. */
export interface AttachableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isAttached(): boolean;
  setAttached(arg0: boolean): void;
}
export type Attachable = AttachableMembers & BlockData;
export interface AttachableStatics {
}

/** JVM interface org.bukkit.block.data.Bisected. */
export interface BisectedMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getHalf(): Bisected_Half;
  setHalf(arg0: Bisected_Half): void;
}
export type Bisected = BisectedMembers & BlockData;
export interface BisectedStatics {
}

/** Live JVM enum org.bukkit.block.data.Bisected$Half; constants are host handles, not strings. */
export type Bisected_Half = JavaEnum<"org.bukkit.block.data.Bisected$Half", "BOTTOM" | "TOP"> & Bisected_HalfMembers;
export interface Bisected_HalfMembers {
}
export interface Bisected_HalfStatics {
  readonly BOTTOM: Bisected_Half;
  readonly TOP: Bisected_Half;
  valueOf(arg0: string): Bisected_Half;
  values(): Array<Bisected_Half>;
}

/** JVM interface org.bukkit.block.data.BlockData. */
export interface BlockDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">];
  clone(): BlockData;
  copyTo(arg0: BlockData): void;
  createBlockState(): j_org_bukkit_block.BlockState;
  getAsString(): string;
  getAsString(arg0: boolean): string;
  getCollisionShape(arg0: j_org_bukkit.Location): j_org_bukkit_util.VoxelShape;
  getDestroySpeed(arg0: j_org_bukkit_inventory.ItemStack): number;
  getDestroySpeed(arg0: j_org_bukkit_inventory.ItemStack, arg1: boolean): number;
  getLightEmission(): number;
  getMapColor(): j_org_bukkit.Color;
  getMaterial(): j_org_bukkit.Material;
  getPistonMoveReaction(): j_org_bukkit_block.PistonMoveReaction;
  getPlacementMaterial(): j_org_bukkit.Material;
  getSoundGroup(): j_org_bukkit.SoundGroup;
  isFaceSturdy(arg0: j_org_bukkit_block.BlockFace, arg1: j_org_bukkit_block.BlockSupport): boolean;
  isOccluding(): boolean;
  isPreferredTool(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  isRandomlyTicked(): boolean;
  isSupported(arg0: j_org_bukkit.Location): boolean;
  isSupported(arg0: j_org_bukkit_block.Block): boolean;
  matches(arg0: BlockData | null): boolean;
  merge(arg0: BlockData): BlockData;
  mirror(arg0: j_org_bukkit_block_structure.Mirror): void;
  requiresCorrectToolForDrops(): boolean;
  rotate(arg0: j_org_bukkit_block_structure.StructureRotation): void;
}
export type BlockData = BlockDataMembers & JavaOpaque<"java.lang.Cloneable">;
export interface BlockDataStatics {
}

/** JVM interface org.bukkit.block.data.Brushable. */
export interface BrushableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getDusted(): number;
  getMaximumDusted(): number;
  setDusted(arg0: number): void;
}
export type Brushable = BrushableMembers & BlockData;
export interface BrushableStatics {
}

/** JVM interface org.bukkit.block.data.Directional. */
export interface DirectionalMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getFaces(): JavaSet<j_org_bukkit_block.BlockFace>;
  getFacing(): j_org_bukkit_block.BlockFace;
  setFacing(arg0: j_org_bukkit_block.BlockFace): void;
}
export type Directional = DirectionalMembers & BlockData;
export interface DirectionalStatics {
}

/** JVM interface org.bukkit.block.data.FaceAttachable. */
export interface FaceAttachableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getAttachedFace(): FaceAttachable_AttachedFace;
  setAttachedFace(arg0: FaceAttachable_AttachedFace): void;
}
export type FaceAttachable = FaceAttachableMembers & BlockData;
export interface FaceAttachableStatics {
}

/** Live JVM enum org.bukkit.block.data.FaceAttachable$AttachedFace; constants are host handles, not strings. */
export type FaceAttachable_AttachedFace = JavaEnum<"org.bukkit.block.data.FaceAttachable$AttachedFace", "CEILING" | "FLOOR" | "WALL"> & FaceAttachable_AttachedFaceMembers;
export interface FaceAttachable_AttachedFaceMembers {
}
export interface FaceAttachable_AttachedFaceStatics {
  readonly CEILING: FaceAttachable_AttachedFace;
  readonly FLOOR: FaceAttachable_AttachedFace;
  readonly WALL: FaceAttachable_AttachedFace;
  valueOf(arg0: string): FaceAttachable_AttachedFace;
  values(): Array<FaceAttachable_AttachedFace>;
}

/** JVM interface org.bukkit.block.data.Hangable. */
export interface HangableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isHanging(): boolean;
  setHanging(arg0: boolean): void;
}
export type Hangable = HangableMembers & BlockData;
export interface HangableStatics {
}

/** JVM interface org.bukkit.block.data.Hatchable. */
export interface HatchableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getHatch(): number;
  getMaximumHatch(): number;
  setHatch(arg0: number): void;
}
export type Hatchable = HatchableMembers & BlockData;
export interface HatchableStatics {
}

/** JVM interface org.bukkit.block.data.Levelled. */
export interface LevelledMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getLevel(): number;
  getMaximumLevel(): number;
  getMinimumLevel(): number;
  setLevel(arg0: number): void;
}
export type Levelled = LevelledMembers & BlockData;
export interface LevelledStatics {
}

/** JVM interface org.bukkit.block.data.Lightable. */
export interface LightableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isLit(): boolean;
  setLit(arg0: boolean): void;
}
export type Lightable = LightableMembers & BlockData;
export interface LightableStatics {
}

/** JVM interface org.bukkit.block.data.MultipleFacing. */
export interface MultipleFacingMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getAllowedFaces(): JavaSet<j_org_bukkit_block.BlockFace>;
  getFaces(): JavaSet<j_org_bukkit_block.BlockFace>;
  hasFace(arg0: j_org_bukkit_block.BlockFace): boolean;
  setFace(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): void;
}
export type MultipleFacing = MultipleFacingMembers & BlockData;
export interface MultipleFacingStatics {
}

/** JVM interface org.bukkit.block.data.Openable. */
export interface OpenableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isOpen(): boolean;
  setOpen(arg0: boolean): void;
}
export type Openable = OpenableMembers & BlockData;
export interface OpenableStatics {
}

/** JVM interface org.bukkit.block.data.Orientable. */
export interface OrientableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getAxes(): JavaSet<j_org_bukkit.Axis>;
  getAxis(): j_org_bukkit.Axis;
  setAxis(arg0: j_org_bukkit.Axis): void;
}
export type Orientable = OrientableMembers & BlockData;
export interface OrientableStatics {
}

/** JVM interface org.bukkit.block.data.Powerable. */
export interface PowerableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
}
export type Powerable = PowerableMembers & BlockData;
export interface PowerableStatics {
}

/** JVM interface org.bukkit.block.data.Rail. */
export interface RailMembers {
  readonly __javaSupertypes?: readonly [Waterlogged];
  getShape(): Rail_Shape;
  getShapes(): JavaSet<Rail_Shape>;
  setShape(arg0: Rail_Shape): void;
}
export type Rail = RailMembers & Waterlogged;
export interface RailStatics {
}

/** Live JVM enum org.bukkit.block.data.Rail$Shape; constants are host handles, not strings. */
export type Rail_Shape = JavaEnum<"org.bukkit.block.data.Rail$Shape", "ASCENDING_EAST" | "ASCENDING_NORTH" | "ASCENDING_SOUTH" | "ASCENDING_WEST" | "EAST_WEST" | "NORTH_EAST" | "NORTH_SOUTH" | "NORTH_WEST" | "SOUTH_EAST" | "SOUTH_WEST"> & Rail_ShapeMembers;
export interface Rail_ShapeMembers {
}
export interface Rail_ShapeStatics {
  readonly ASCENDING_EAST: Rail_Shape;
  readonly ASCENDING_NORTH: Rail_Shape;
  readonly ASCENDING_SOUTH: Rail_Shape;
  readonly ASCENDING_WEST: Rail_Shape;
  readonly EAST_WEST: Rail_Shape;
  readonly NORTH_EAST: Rail_Shape;
  readonly NORTH_SOUTH: Rail_Shape;
  readonly NORTH_WEST: Rail_Shape;
  readonly SOUTH_EAST: Rail_Shape;
  readonly SOUTH_WEST: Rail_Shape;
  valueOf(arg0: string): Rail_Shape;
  values(): Array<Rail_Shape>;
}

/** JVM interface org.bukkit.block.data.Rotatable. */
export interface RotatableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getRotation(): j_org_bukkit_block.BlockFace;
  setRotation(arg0: j_org_bukkit_block.BlockFace): void;
}
export type Rotatable = RotatableMembers & BlockData;
export interface RotatableStatics {
}

/** JVM interface org.bukkit.block.data.Segmentable. */
export interface SegmentableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  getMaximumSegmentAmount(): number;
  getMinimumSegmentAmount(): number;
  getSegmentAmount(): number;
  setSegmentAmount(arg0: number): void;
}
export type Segmentable = SegmentableMembers & BlockData;
export interface SegmentableStatics {
}

/** JVM interface org.bukkit.block.data.Snowable. */
export interface SnowableMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isSnowy(): boolean;
  setSnowy(arg0: boolean): void;
}
export type Snowable = SnowableMembers & BlockData;
export interface SnowableStatics {
}

/** JVM interface org.bukkit.block.data.Waterlogged. */
export interface WaterloggedMembers {
  readonly __javaSupertypes?: readonly [BlockData];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type Waterlogged = WaterloggedMembers & BlockData;
export interface WaterloggedStatics {
}
