// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_vehicle from './net.minecraft.world.entity.vehicle.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.phys.shapes.ArrayVoxelShape. */
export interface ArrayVoxelShapeMembers {
  readonly __javaSupertypes?: readonly [VoxelShape];
  getCoords(arg0: j_net_minecraft_core.Direction_Axis): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
}
export type ArrayVoxelShape = ArrayVoxelShapeMembers & VoxelShape;
export interface ArrayVoxelShapeStatics {
  new(arg0: DiscreteVoxelShape, arg1: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg2: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg3: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">): ArrayVoxelShape;
  new(arg0: DiscreteVoxelShape, arg1: Array<number>, arg2: Array<number>, arg3: Array<number>): ArrayVoxelShape;
}

/** JVM class net.minecraft.world.phys.shapes.BitSetDiscreteVoxelShape. */
export interface BitSetDiscreteVoxelShapeMembers {
  readonly __javaSupertypes?: readonly [DiscreteVoxelShape];
  fill(arg0: number, arg1: number, arg2: number): void;
  firstFull(arg0: j_net_minecraft_core.Direction_Axis): number;
  getIndex(arg0: number, arg1: number, arg2: number): number;
  isEmpty(): boolean;
  isFull(arg0: number, arg1: number, arg2: number): boolean;
  isInterior(arg0: number, arg1: number, arg2: number): boolean;
  lastFull(arg0: j_net_minecraft_core.Direction_Axis): number;
  readonly storage: JavaOpaque<"java.util.BitSet">;
  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;
  zMax: number;
  zMin: number;
}
export type BitSetDiscreteVoxelShape = BitSetDiscreteVoxelShapeMembers & DiscreteVoxelShape;
export interface BitSetDiscreteVoxelShapeStatics {
  new(arg0: number, arg1: number, arg2: number): BitSetDiscreteVoxelShape;
  new(arg0: DiscreteVoxelShape): BitSetDiscreteVoxelShape;
  forAllBoxes(arg0: DiscreteVoxelShape, arg1: DiscreteVoxelShape_IntLineConsumer, arg2: boolean): void;
  withFilledBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): BitSetDiscreteVoxelShape;
}

/** JVM interface net.minecraft.world.phys.shapes.BooleanOp. */
export interface BooleanOpMembers {
  apply(arg0: boolean, arg1: boolean): boolean;
}
export type BooleanOp = BooleanOpMembers;
export interface BooleanOpStatics {
  readonly AND: BooleanOp;
  readonly CAUSED_BY: BooleanOp;
  readonly CAUSES: BooleanOp;
  readonly FALSE: BooleanOp;
  readonly FIRST: BooleanOp;
  readonly NOT_AND: BooleanOp;
  readonly NOT_FIRST: BooleanOp;
  readonly NOT_OR: BooleanOp;
  readonly NOT_SAME: BooleanOp;
  readonly NOT_SECOND: BooleanOp;
  readonly ONLY_FIRST: BooleanOp;
  readonly ONLY_SECOND: BooleanOp;
  readonly OR: BooleanOp;
  readonly SAME: BooleanOp;
  readonly SECOND: BooleanOp;
  readonly TRUE: BooleanOp;
}

/** JVM interface net.minecraft.world.phys.shapes.CollisionContext. */
export interface CollisionContextMembers {
  canStandOnFluid(arg0: j_net_minecraft_world_level_material.FluidState, arg1: j_net_minecraft_world_level_material.FluidState): boolean;
  getCollisionShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.CollisionGetter, arg2: j_net_minecraft_core.BlockPos): VoxelShape;
  isAbove(arg0: VoxelShape, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): boolean;
  isDescending(): boolean;
  isHoldingItem(arg0: j_net_minecraft_world_item.Item): boolean;
  isPlacement(): boolean;
}
export type CollisionContext = CollisionContextMembers;
export interface CollisionContextStatics {
  empty(): CollisionContext;
  of(arg0: j_net_minecraft_world_entity.Entity): CollisionContext;
  of(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): CollisionContext;
  placementContext(arg0: j_net_minecraft_world_entity_player.Player | null): CollisionContext | null;
  withPosition(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number): CollisionContext | null;
}

/** JVM class net.minecraft.world.phys.shapes.CubePointRange. */
export interface CubePointRangeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"it.unimi.dsi.fastutil.doubles.AbstractDoubleList">];
  getDouble(arg0: number): number;
  size(): number;
}
export type CubePointRange = CubePointRangeMembers & JavaOpaque<"it.unimi.dsi.fastutil.doubles.AbstractDoubleList">;
export interface CubePointRangeStatics {
  new(arg0: number): CubePointRange;
}

/** JVM class net.minecraft.world.phys.shapes.CubeVoxelShape. */
export interface CubeVoxelShapeMembers {
  readonly __javaSupertypes?: readonly [VoxelShape];
  findIndex(arg0: j_net_minecraft_core.Direction_Axis, arg1: number): number;
  getCoords(arg0: j_net_minecraft_core.Direction_Axis): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
}
export type CubeVoxelShape = CubeVoxelShapeMembers & VoxelShape;
export interface CubeVoxelShapeStatics {
  new(arg0: DiscreteVoxelShape): CubeVoxelShape;
}

/** JVM class net.minecraft.world.phys.shapes.DiscreteCubeMerger. */
export interface DiscreteCubeMergerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">];
  forMergedIndexes(arg0: IndexMerger_IndexConsumer): boolean;
  getList(): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  size(): number;
}
export type DiscreteCubeMerger = DiscreteCubeMergerMembers & JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">;
export interface DiscreteCubeMergerStatics {
}

/** JVM abstract net.minecraft.world.phys.shapes.DiscreteVoxelShape. */
export interface DiscreteVoxelShapeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.shape.CollisionDiscreteVoxelShape">];
  fill(arg0: number, arg1: number, arg2: number): void;
  firstFull(arg0: j_net_minecraft_core.Direction_Axis): number;
  firstFull(arg0: j_net_minecraft_core.Direction_Axis, arg1: number, arg2: number): number;
  forAllBoxes(arg0: DiscreteVoxelShape_IntLineConsumer, arg1: boolean): void;
  forAllEdges(arg0: DiscreteVoxelShape_IntLineConsumer, arg1: boolean): void;
  forAllFaces(arg0: DiscreteVoxelShape_IntFaceConsumer): void;
  getSize(arg0: j_net_minecraft_core.Direction_Axis): number;
  getXSize(): number;
  getYSize(): number;
  getZSize(): number;
  isEmpty(): boolean;
  isFull(arg0: number, arg1: number, arg2: number): boolean;
  isFull(arg0: j_net_minecraft_core.AxisCycle, arg1: number, arg2: number, arg3: number): boolean;
  isFullWide(arg0: number, arg1: number, arg2: number): boolean;
  isFullWide(arg0: j_net_minecraft_core.AxisCycle, arg1: number, arg2: number, arg3: number): boolean;
  lastFull(arg0: j_net_minecraft_core.Direction_Axis): number;
  lastFull(arg0: j_net_minecraft_core.Direction_Axis, arg1: number, arg2: number): number;
  moonrise$getOrCreateCachedShapeData(): JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.shape.CachedShapeData">;
  rotate(arg0: JavaOpaque<"com.mojang.math.OctahedralGroup">): DiscreteVoxelShape;
  readonly xSize: number;
  readonly ySize: number;
  readonly zSize: number;
}
export type DiscreteVoxelShape = DiscreteVoxelShapeMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.shape.CollisionDiscreteVoxelShape">;
export interface DiscreteVoxelShapeStatics {
  new(arg0: number, arg1: number, arg2: number): DiscreteVoxelShape;
}

/** JVM interface net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntFaceConsumer. */
export interface DiscreteVoxelShape_IntFaceConsumerMembers {
  consume(arg0: j_net_minecraft_core.Direction, arg1: number, arg2: number, arg3: number): void;
}
export type DiscreteVoxelShape_IntFaceConsumer = DiscreteVoxelShape_IntFaceConsumerMembers;
export interface DiscreteVoxelShape_IntFaceConsumerStatics {
}

/** JVM interface net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntLineConsumer. */
export interface DiscreteVoxelShape_IntLineConsumerMembers {
  consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}
export type DiscreteVoxelShape_IntLineConsumer = DiscreteVoxelShape_IntLineConsumerMembers;
export interface DiscreteVoxelShape_IntLineConsumerStatics {
}

/** JVM class net.minecraft.world.phys.shapes.EntityCollisionContext. */
export interface EntityCollisionContextMembers {
  readonly __javaSupertypes?: readonly [CollisionContext];
  canStandOnFluid(arg0: j_net_minecraft_world_level_material.FluidState, arg1: j_net_minecraft_world_level_material.FluidState): boolean;
  getCollisionShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.CollisionGetter, arg2: j_net_minecraft_core.BlockPos): VoxelShape;
  getEntity(): j_net_minecraft_world_entity.Entity | null;
  isAbove(arg0: VoxelShape, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): boolean;
  isDescending(): boolean;
  isHoldingItem(arg0: j_net_minecraft_world_item.Item): boolean;
  isPlacement(): boolean;
}
export type EntityCollisionContext = EntityCollisionContextMembers & CollisionContext;
export interface EntityCollisionContextStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean, arg2: boolean): EntityCollisionContext;
  new(arg0: boolean, arg1: boolean, arg2: number, arg3: j_net_minecraft_world_item.ItemStack, arg4: JavaPredicate<j_net_minecraft_world_level_material.FluidState>, arg5: j_net_minecraft_world_entity.Entity | null): EntityCollisionContext;
  readonly EMPTY: CollisionContext;
}

/** JVM class net.minecraft.world.phys.shapes.IdenticalMerger. */
export interface IdenticalMergerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">];
  forMergedIndexes(arg0: IndexMerger_IndexConsumer): boolean;
  getList(): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  size(): number;
}
export type IdenticalMerger = IdenticalMergerMembers & JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">;
export interface IdenticalMergerStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">): IdenticalMerger;
}

/** JVM interface net.minecraft.world.phys.shapes.IndexMerger$IndexConsumer. */
export interface IndexMerger_IndexConsumerMembers {
  merge(arg0: number, arg1: number, arg2: number): boolean;
}
export type IndexMerger_IndexConsumer = IndexMerger_IndexConsumerMembers;
export interface IndexMerger_IndexConsumerStatics {
}

/** JVM class net.minecraft.world.phys.shapes.IndirectMerger. */
export interface IndirectMergerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">];
  forMergedIndexes(arg0: IndexMerger_IndexConsumer): boolean;
  getList(): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  size(): number;
}
export type IndirectMerger = IndirectMergerMembers & JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">;
export interface IndirectMergerStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg1: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg2: boolean, arg3: boolean): IndirectMerger;
}

/** JVM class net.minecraft.world.phys.shapes.MinecartCollisionContext. */
export interface MinecartCollisionContextMembers {
  readonly __javaSupertypes?: readonly [EntityCollisionContext];
  getCollisionShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.CollisionGetter, arg2: j_net_minecraft_core.BlockPos): VoxelShape;
}
export type MinecartCollisionContext = MinecartCollisionContextMembers & EntityCollisionContext;
export interface MinecartCollisionContextStatics {
  new(arg0: j_net_minecraft_world_entity_vehicle.AbstractMinecart, arg1: boolean): MinecartCollisionContext;
}

/** JVM class net.minecraft.world.phys.shapes.NonOverlappingMerger. */
export interface NonOverlappingMergerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"it.unimi.dsi.fastutil.doubles.AbstractDoubleList">, JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">];
  forMergedIndexes(arg0: IndexMerger_IndexConsumer): boolean;
  getDouble(arg0: number): number;
  getList(): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  size(): number;
}
export type NonOverlappingMerger = NonOverlappingMergerMembers & JavaOpaque<"it.unimi.dsi.fastutil.doubles.AbstractDoubleList"> & JavaOpaque<"net.minecraft.world.phys.shapes.IndexMerger">;
export interface NonOverlappingMergerStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg1: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg2: boolean): NonOverlappingMerger;
}

/** JVM class net.minecraft.world.phys.shapes.OffsetDoubleList. */
export interface OffsetDoubleListMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"it.unimi.dsi.fastutil.doubles.AbstractDoubleList">];
  readonly delegate: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  getDouble(arg0: number): number;
  readonly offset: number;
  size(): number;
}
export type OffsetDoubleList = OffsetDoubleListMembers & JavaOpaque<"it.unimi.dsi.fastutil.doubles.AbstractDoubleList">;
export interface OffsetDoubleListStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">, arg1: number): OffsetDoubleList;
}

/** JVM class net.minecraft.world.phys.shapes.Shapes. */
export interface ShapesMembers {
}
export type Shapes = ShapesMembers;
export interface ShapesStatics {
  new(): Shapes;
  readonly BIG_EPSILON: 0.000001;
  readonly EPSILON: 1e-7;
  readonly INFINITY: VoxelShape;
  block(): VoxelShape;
  blockOccludes(arg0: VoxelShape, arg1: VoxelShape, arg2: j_net_minecraft_core.Direction): boolean;
  box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VoxelShape;
  collide(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft_world_phys.AABB, arg2: Iterable<VoxelShape>, arg3: number): number;
  create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VoxelShape;
  create(arg0: j_net_minecraft_world_phys.AABB): VoxelShape;
  empty(): VoxelShape;
  equal(arg0: VoxelShape, arg1: VoxelShape): boolean;
  faceShapeOccludes(arg0: VoxelShape, arg1: VoxelShape): boolean;
  findBits(arg0: number, arg1: number): number;
  join(arg0: VoxelShape, arg1: VoxelShape, arg2: BooleanOp): VoxelShape;
  joinIsNotEmpty(arg0: VoxelShape, arg1: VoxelShape, arg2: BooleanOp): boolean;
  joinUnoptimized(arg0: VoxelShape, arg1: VoxelShape, arg2: BooleanOp): VoxelShape;
  lcm(arg0: number, arg1: number): bigint;
  mergedFaceOccludes(arg0: VoxelShape, arg1: VoxelShape, arg2: j_net_minecraft_core.Direction): boolean;
  or(arg0: VoxelShape, arg1: VoxelShape): VoxelShape;
  or(arg0: VoxelShape, ...arg1: Array<VoxelShape>): VoxelShape;
  rotate(arg0: VoxelShape, arg1: JavaOpaque<"com.mojang.math.OctahedralGroup">): VoxelShape;
  rotate(arg0: VoxelShape, arg1: JavaOpaque<"com.mojang.math.OctahedralGroup">, arg2: j_net_minecraft_world_phys.Vec3): VoxelShape;
  rotateAll(arg0: VoxelShape): JavaMap<j_net_minecraft_core.Direction, VoxelShape>;
  rotateAll(arg0: VoxelShape, arg1: j_net_minecraft_world_phys.Vec3): JavaMap<j_net_minecraft_core.Direction, VoxelShape>;
  rotateAllAxis(arg0: VoxelShape): JavaMap<j_net_minecraft_core.Direction_Axis, VoxelShape>;
  rotateAllAxis(arg0: VoxelShape, arg1: j_net_minecraft_world_phys.Vec3): JavaMap<j_net_minecraft_core.Direction_Axis, VoxelShape>;
  rotateAttachFace(arg0: VoxelShape): JavaMap<j_net_minecraft_world_level_block_state_properties.AttachFace, JavaMap<j_net_minecraft_core.Direction, VoxelShape>>;
  rotateHorizontal(arg0: VoxelShape): JavaMap<j_net_minecraft_core.Direction, VoxelShape>;
  rotateHorizontal(arg0: VoxelShape, arg1: j_net_minecraft_world_phys.Vec3): JavaMap<j_net_minecraft_core.Direction, VoxelShape>;
  rotateHorizontalAxis(arg0: VoxelShape): JavaMap<j_net_minecraft_core.Direction_Axis, VoxelShape>;
  rotateHorizontalAxis(arg0: VoxelShape, arg1: j_net_minecraft_world_phys.Vec3): JavaMap<j_net_minecraft_core.Direction_Axis, VoxelShape>;
}

/** JVM interface net.minecraft.world.phys.shapes.Shapes$DoubleLineConsumer. */
export interface Shapes_DoubleLineConsumerMembers {
  consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}
export type Shapes_DoubleLineConsumer = Shapes_DoubleLineConsumerMembers;
export interface Shapes_DoubleLineConsumerStatics {
}

/** JVM class net.minecraft.world.phys.shapes.SliceShape. */
export interface SliceShapeMembers {
  readonly __javaSupertypes?: readonly [VoxelShape];
  getCoords(arg0: j_net_minecraft_core.Direction_Axis): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
}
export type SliceShape = SliceShapeMembers & VoxelShape;
export interface SliceShapeStatics {
  new(arg0: VoxelShape, arg1: j_net_minecraft_core.Direction_Axis, arg2: number): SliceShape;
}

/** JVM class net.minecraft.world.phys.shapes.SubShape. */
export interface SubShapeMembers {
  readonly __javaSupertypes?: readonly [DiscreteVoxelShape];
  fill(arg0: number, arg1: number, arg2: number): void;
  firstFull(arg0: j_net_minecraft_core.Direction_Axis): number;
  isFull(arg0: number, arg1: number, arg2: number): boolean;
  lastFull(arg0: j_net_minecraft_core.Direction_Axis): number;
}
export type SubShape = SubShapeMembers & DiscreteVoxelShape;
export interface SubShapeStatics {
  new(arg0: DiscreteVoxelShape, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): SubShape;
}

/** JVM abstract net.minecraft.world.phys.shapes.VoxelShape. */
export interface VoxelShapeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.shape.CollisionVoxelShape">];
  bounds(): j_net_minecraft_world_phys.AABB;
  clip(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.BlockHitResult | null;
  closestPointTo(arg0: j_net_minecraft_world_phys.Vec3): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  collide(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft_world_phys.AABB, arg2: number): number;
  collideX(arg0: j_net_minecraft_core.AxisCycle, arg1: j_net_minecraft_world_phys.AABB, arg2: number): number;
  equals(arg0: object): boolean;
  findIndex(arg0: j_net_minecraft_core.Direction_Axis, arg1: number): number;
  forAllBoxes(arg0: Shapes_DoubleLineConsumer): void;
  forAllEdges(arg0: Shapes_DoubleLineConsumer): void;
  get(arg0: j_net_minecraft_core.Direction_Axis, arg1: number): number;
  getCoords(arg0: j_net_minecraft_core.Direction_Axis): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  getFaceShape(arg0: j_net_minecraft_core.Direction): VoxelShape;
  isCubeLike(): boolean;
  isEmpty(): boolean;
  max(arg0: j_net_minecraft_core.Direction_Axis): number;
  max(arg0: j_net_minecraft_core.Direction_Axis, arg1: number, arg2: number): number;
  min(arg0: j_net_minecraft_core.Direction_Axis): number;
  min(arg0: j_net_minecraft_core.Direction_Axis, arg1: number, arg2: number): number;
  moonrise$getCachedVoxelData(): JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.shape.CachedShapeData">;
  moonrise$getFaceShapeClamped(arg0: j_net_minecraft_core.Direction): VoxelShape;
  moonrise$getSingleAABBRepresentation(): j_net_minecraft_world_phys.AABB;
  moonrise$initCache(): void;
  moonrise$isFullBlock(): boolean;
  moonrise$occludesFullBlock(): boolean;
  moonrise$occludesFullBlockIfCached(): boolean;
  moonrise$offsetX(): number;
  moonrise$offsetY(): number;
  moonrise$offsetZ(): number;
  moonrise$orUnoptimized(arg0: VoxelShape): VoxelShape;
  moonrise$rootCoordinatesX(): Array<number>;
  moonrise$rootCoordinatesY(): Array<number>;
  moonrise$rootCoordinatesZ(): Array<number>;
  move(arg0: number, arg1: number, arg2: number): VoxelShape;
  move(arg0: j_net_minecraft_core.Vec3i): VoxelShape;
  move(arg0: j_net_minecraft_world_phys.Vec3): VoxelShape;
  optimize(): VoxelShape;
  readonly shape: DiscreteVoxelShape;
  singleEncompassing(): VoxelShape;
  toAabbs(): JavaList<j_net_minecraft_world_phys.AABB>;
  toString(): string;
}
export type VoxelShape = VoxelShapeMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.shape.CollisionVoxelShape">;
export interface VoxelShapeStatics {
  new(arg0: DiscreteVoxelShape): VoxelShape;
}
