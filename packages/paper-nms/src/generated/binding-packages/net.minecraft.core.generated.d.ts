// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** Live JVM enum net.minecraft.core.AxisCycle; constants are host handles, not strings. */
export type AxisCycle = JavaEnum<"net.minecraft.core.AxisCycle", "BACKWARD" | "FORWARD" | "NONE"> & AxisCycleMembers;
export interface AxisCycleMembers {
  cycle(arg0: number, arg1: number, arg2: number, arg3: Direction_Axis): number;
  cycle(arg0: number, arg1: number, arg2: number, arg3: Direction_Axis): number;
  cycle(arg0: Direction_Axis): Direction_Axis;
  inverse(): AxisCycle;
}
export interface AxisCycleStatics {
  readonly BACKWARD: AxisCycle;
  readonly FORWARD: AxisCycle;
  readonly NONE: AxisCycle;
  readonly AXIS_VALUES: Array<Direction_Axis>;
  readonly VALUES: Array<AxisCycle>;
  between(arg0: Direction_Axis, arg1: Direction_Axis): AxisCycle;
  valueOf(arg0: string): AxisCycle;
  values(): Array<AxisCycle>;
}

/** JVM record net.minecraft.core.BlockBox. */
export interface BlockBoxMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Iterable<BlockPos>];
  aabb(): j_net_minecraft_world_phys.AABB;
  contains(arg0: BlockPos): boolean;
  equals(arg0: object): boolean;
  extend(arg0: Direction, arg1: number): BlockBox;
  hashCode(): number;
  include(arg0: BlockPos): BlockBox;
  isBlock(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [BlockPos]>;
  max(): BlockPos;
  min(): BlockPos;
  move(arg0: Direction, arg1: number): BlockBox;
  offset(arg0: Vec3i): BlockBox;
  sizeX(): number;
  sizeY(): number;
  sizeZ(): number;
  toString(): string;
}
export type BlockBox = BlockBoxMembers & JavaOpaque<"java.lang.Record"> & Iterable<BlockPos>;
export interface BlockBoxStatics {
  new(arg0: BlockPos, arg1: BlockPos): BlockBox;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BlockBox>;
  of(arg0: BlockPos): BlockBox;
  of(arg0: BlockPos, arg1: BlockPos): BlockBox;
}

/** JVM class net.minecraft.core.BlockMath. */
export interface BlockMathMembers {
}
export type BlockMath = BlockMathMembers;
export interface BlockMathStatics {
  new(): BlockMath;
  blockCenterToCorner(arg0: JavaOpaque<"com.mojang.math.Transformation">): JavaOpaque<"com.mojang.math.Transformation">;
  blockCornerToCenter(arg0: JavaOpaque<"com.mojang.math.Transformation">): JavaOpaque<"com.mojang.math.Transformation">;
  getFaceTransformation(arg0: JavaOpaque<"com.mojang.math.Transformation">, arg1: Direction): JavaOpaque<"com.mojang.math.Transformation">;
}

/** JVM class net.minecraft.core.BlockPos. */
export interface BlockPosMembers {
  readonly __javaSupertypes?: readonly [Vec3i];
  above(): BlockPos;
  above(): Vec3i;
  above(arg0: number): BlockPos;
  above(arg0: number): Vec3i;
  asLong(): bigint;
  atY(arg0: number): BlockPos;
  below(): BlockPos;
  below(): Vec3i;
  below(arg0: number): BlockPos;
  below(arg0: number): Vec3i;
  clampLocationWithin(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  cross(arg0: Vec3i): BlockPos;
  cross(arg0: Vec3i): Vec3i;
  east(): BlockPos;
  east(): Vec3i;
  east(arg0: number): BlockPos;
  east(arg0: number): Vec3i;
  getBottomCenter(): j_net_minecraft_world_phys.Vec3;
  getCenter(): j_net_minecraft_world_phys.Vec3;
  immutable(): BlockPos;
  multiply(arg0: number): BlockPos;
  multiply(arg0: number): Vec3i;
  mutable(): BlockPos_MutableBlockPos;
  north(): BlockPos;
  north(): Vec3i;
  north(arg0: number): BlockPos;
  north(arg0: number): Vec3i;
  offset(arg0: number, arg1: number, arg2: number): BlockPos;
  offset(arg0: number, arg1: number, arg2: number): Vec3i;
  offset(arg0: Vec3i): BlockPos;
  offset(arg0: Vec3i): Vec3i;
  relative(arg0: Direction_Axis, arg1: number): BlockPos;
  relative(arg0: Direction_Axis, arg1: number): Vec3i;
  relative(arg0: Direction): BlockPos;
  relative(arg0: Direction): Vec3i;
  relative(arg0: Direction, arg1: number): BlockPos;
  relative(arg0: Direction, arg1: number): Vec3i;
  rotate(arg0: j_net_minecraft_world_level_block.Rotation): BlockPos;
  south(): BlockPos;
  south(): Vec3i;
  south(arg0: number): BlockPos;
  south(arg0: number): Vec3i;
  subtract(arg0: Vec3i): BlockPos;
  subtract(arg0: Vec3i): Vec3i;
  west(): BlockPos;
  west(): Vec3i;
  west(arg0: number): BlockPos;
  west(arg0: number): Vec3i;
}
export type BlockPos = BlockPosMembers & Vec3i;
export interface BlockPosStatics {
  new(arg0: number, arg1: number, arg2: number): BlockPos;
  new(arg0: Vec3i): BlockPos;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockPos]>;
  readonly MAX_HORIZONTAL_COORDINATE: 33554431;
  readonly PACKED_HORIZONTAL_LENGTH: 26;
  readonly PACKED_Y_LENGTH: 12;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BlockPos>;
  readonly ZERO: BlockPos;
  asLong(arg0: number, arg1: number, arg2: number): bigint;
  betweenClosed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Iterable<BlockPos>;
  betweenClosed(arg0: BlockPos, arg1: BlockPos): Iterable<BlockPos>;
  betweenClosed(arg0: j_net_minecraft_world_phys.AABB): Iterable<BlockPos>;
  betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
  betweenClosedStream(arg0: BlockPos, arg1: BlockPos): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
  betweenClosedStream(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
  betweenClosedStream(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
  breadthFirstTraversal(arg0: BlockPos, arg1: number, arg2: number, arg3: JavaBiConsumer<BlockPos, JavaConsumer<BlockPos>>, arg4: JavaFunction<BlockPos, BlockPos_TraversalNodeStatus>): number;
  containing(arg0: number, arg1: number, arg2: number): BlockPos;
  containing(arg0: Position): BlockPos;
  findClosestMatch(arg0: BlockPos, arg1: number, arg2: number, arg3: JavaPredicate<BlockPos>): JavaOptional<BlockPos>;
  getAdjacent(arg0: number, arg1: number, arg2: number, arg3: Direction): bigint;
  getFlatIndex(arg0: bigint): bigint;
  getX(arg0: bigint): number;
  getY(arg0: bigint): number;
  getZ(arg0: bigint): number;
  max(arg0: BlockPos, arg1: BlockPos): BlockPos;
  min(arg0: BlockPos, arg1: BlockPos): BlockPos;
  of(arg0: bigint): BlockPos;
  offset(arg0: bigint, arg1: number, arg2: number, arg3: number): bigint;
  offset(arg0: bigint, arg1: Direction): bigint;
  randomBetweenClosed(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Iterable<BlockPos>;
  randomInCube(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: BlockPos, arg3: number): Iterable<BlockPos>;
  spiralAround(arg0: BlockPos, arg1: number, arg2: Direction, arg3: Direction): Iterable<BlockPos_MutableBlockPos>;
  squareOutSouthEast(arg0: BlockPos): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
  withinManhattan(arg0: BlockPos, arg1: number, arg2: number, arg3: number): Iterable<BlockPos>;
  withinManhattanStream(arg0: BlockPos, arg1: number, arg2: number, arg3: number): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
}

/** JVM class net.minecraft.core.BlockPos$MutableBlockPos. */
export interface BlockPos_MutableBlockPosMembers {
  readonly __javaSupertypes?: readonly [BlockPos];
  above(): Vec3i;
  above(arg0: number): Vec3i;
  below(): Vec3i;
  below(arg0: number): Vec3i;
  clamp(arg0: Direction_Axis, arg1: number, arg2: number): BlockPos_MutableBlockPos;
  cross(arg0: Vec3i): Vec3i;
  east(): Vec3i;
  east(arg0: number): Vec3i;
  immutable(): BlockPos;
  move(arg0: number, arg1: number, arg2: number): BlockPos_MutableBlockPos;
  move(arg0: Direction): BlockPos_MutableBlockPos;
  move(arg0: Direction, arg1: number): BlockPos_MutableBlockPos;
  move(arg0: Vec3i): BlockPos_MutableBlockPos;
  multiply(arg0: number): BlockPos;
  multiply(arg0: number): Vec3i;
  north(): Vec3i;
  north(arg0: number): Vec3i;
  offset(arg0: number, arg1: number, arg2: number): BlockPos;
  offset(arg0: number, arg1: number, arg2: number): Vec3i;
  offset(arg0: Vec3i): Vec3i;
  relative(arg0: Direction_Axis, arg1: number): BlockPos;
  relative(arg0: Direction_Axis, arg1: number): Vec3i;
  relative(arg0: Direction): Vec3i;
  relative(arg0: Direction, arg1: number): BlockPos;
  relative(arg0: Direction, arg1: number): Vec3i;
  rotate(arg0: j_net_minecraft_world_level_block.Rotation): BlockPos;
  set(arg0: number, arg1: number, arg2: number): BlockPos_MutableBlockPos;
  set(arg0: number, arg1: number, arg2: number): BlockPos_MutableBlockPos;
  set(arg0: bigint): BlockPos_MutableBlockPos;
  set(arg0: AxisCycle, arg1: number, arg2: number, arg3: number): BlockPos_MutableBlockPos;
  set(arg0: Vec3i): BlockPos_MutableBlockPos;
  setWithOffset(arg0: Vec3i, arg1: number, arg2: number, arg3: number): BlockPos_MutableBlockPos;
  setWithOffset(arg0: Vec3i, arg1: Direction): BlockPos_MutableBlockPos;
  setWithOffset(arg0: Vec3i, arg1: Vec3i): BlockPos_MutableBlockPos;
  setX(arg0: number): BlockPos_MutableBlockPos;
  setX(arg0: number): Vec3i;
  setY(arg0: number): BlockPos_MutableBlockPos;
  setY(arg0: number): Vec3i;
  setZ(arg0: number): BlockPos_MutableBlockPos;
  setZ(arg0: number): Vec3i;
  south(): Vec3i;
  south(arg0: number): Vec3i;
  subtract(arg0: Vec3i): Vec3i;
  west(): Vec3i;
  west(arg0: number): Vec3i;
}
export type BlockPos_MutableBlockPos = BlockPos_MutableBlockPosMembers & BlockPos;
export interface BlockPos_MutableBlockPosStatics {
  new(): BlockPos_MutableBlockPos;
  new(arg0: number, arg1: number, arg2: number): BlockPos_MutableBlockPos;
  new(arg0: number, arg1: number, arg2: number): BlockPos_MutableBlockPos;
}

/** Live JVM enum net.minecraft.core.BlockPos$TraversalNodeStatus; constants are host handles, not strings. */
export type BlockPos_TraversalNodeStatus = JavaEnum<"net.minecraft.core.BlockPos$TraversalNodeStatus", "ACCEPT" | "SKIP" | "STOP"> & BlockPos_TraversalNodeStatusMembers;
export interface BlockPos_TraversalNodeStatusMembers {
}
export interface BlockPos_TraversalNodeStatusStatics {
  readonly ACCEPT: BlockPos_TraversalNodeStatus;
  readonly SKIP: BlockPos_TraversalNodeStatus;
  readonly STOP: BlockPos_TraversalNodeStatus;
  valueOf(arg0: string): BlockPos_TraversalNodeStatus;
  values(): Array<BlockPos_TraversalNodeStatus>;
}

/** JVM record net.minecraft.core.ClientAsset. */
export interface ClientAssetMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  texturePath(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type ClientAsset = ClientAssetMembers & JavaOpaque<"java.lang.Record">;
export interface ClientAssetStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): ClientAsset;
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_resources.ResourceLocation): ClientAsset;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ClientAsset]>;
  readonly DEFAULT_FIELD_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClientAsset]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientAsset>;
}

/** JVM class net.minecraft.core.Cloner. */
export interface ClonerMembers<T = unknown> {
  clone(arg0: T, arg1: HolderLookup_Provider, arg2: HolderLookup_Provider): T;
}
export type Cloner<T = unknown> = ClonerMembers<T>;
export interface ClonerStatics {
}

/** JVM class net.minecraft.core.Cloner$Factory. */
export interface Cloner_FactoryMembers {
  addCodec<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): Cloner_Factory;
  cloner<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>): Cloner<T> | null;
}
export type Cloner_Factory = Cloner_FactoryMembers;
export interface Cloner_FactoryStatics {
  new(): Cloner_Factory;
}

/** JVM class net.minecraft.core.Cursor3D. */
export interface Cursor3DMembers {
  advance(): boolean;
  getNextType(): number;
  nextX(): number;
  nextY(): number;
  nextZ(): number;
}
export type Cursor3D = Cursor3DMembers;
export interface Cursor3DStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Cursor3D;
  readonly TYPE_CORNER: 3;
  readonly TYPE_EDGE: 2;
  readonly TYPE_FACE: 1;
  readonly TYPE_INSIDE: 0;
}

/** JVM class net.minecraft.core.DefaultedMappedRegistry. */
export interface DefaultedMappedRegistryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [MappedRegistry<T>, DefaultedRegistry<T>];
  byId(arg0: number): T;
  getAny(): JavaOptional<Holder_Reference<T>>;
  getDefaultKey(): j_net_minecraft_resources.ResourceLocation;
  getId(arg0: T | null): number | null;
  getKey(arg0: T): j_net_minecraft_resources.ResourceLocation;
  getOptional(arg0: j_net_minecraft_resources.ResourceLocation | null): JavaOptional<T> | null;
  getRandom(arg0: j_net_minecraft_util.RandomSource): JavaOptional<Holder_Reference<T>>;
  getValue(arg0: j_net_minecraft_resources.ResourceLocation | null): T | null;
  register(arg0: j_net_minecraft_resources.ResourceKey<T>, arg1: T, arg2: RegistrationInfo): Holder_Reference<T>;
}
export type DefaultedMappedRegistry<T = unknown> = DefaultedMappedRegistryMembers<T> & MappedRegistry<T> & DefaultedRegistry<T>;
export interface DefaultedMappedRegistryStatics {
  new<T>(arg0: string, arg1: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg2: JavaOpaque<"com.mojang.serialization.Lifecycle">, arg3: boolean): DefaultedMappedRegistry<T>;
}

/** JVM interface net.minecraft.core.DefaultedRegistry. */
export interface DefaultedRegistryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Registry<T>];
  byId(arg0: number): T;
  getDefaultKey(): j_net_minecraft_resources.ResourceLocation;
  getKey(arg0: T): j_net_minecraft_resources.ResourceLocation;
  getValue(arg0: j_net_minecraft_resources.ResourceLocation | null): T | null;
}
export type DefaultedRegistry<T = unknown> = DefaultedRegistryMembers<T> & Registry<T>;
export interface DefaultedRegistryStatics {
}

/** Live JVM enum net.minecraft.core.Direction; constants are host handles, not strings. */
export type Direction = JavaEnum<"net.minecraft.core.Direction", "DOWN" | "EAST" | "NORTH" | "SOUTH" | "UP" | "WEST"> & DirectionMembers;
export interface DirectionMembers {
  get2DDataValue(): number;
  get3DDataValue(): number;
  getAxis(): Direction_Axis;
  getAxisDirection(): Direction_AxisDirection;
  getClockWise(): Direction;
  getClockWise(arg0: Direction_Axis): Direction;
  getCounterClockWise(): Direction;
  getCounterClockWise(arg0: Direction_Axis): Direction;
  getName(): string;
  getOpposite(): Direction;
  getRotation(): JavaOpaque<"org.joml.Quaternionf">;
  getSerializedName(): string;
  getStepX(): number;
  getStepY(): number;
  getStepZ(): number;
  getUnitVec3(): j_net_minecraft_world_phys.Vec3;
  getUnitVec3f(): JavaOpaque<"org.joml.Vector3fc">;
  getUnitVec3i(): Vec3i;
  isFacingAngle(arg0: number): boolean;
  moonrise$uniqueId(): number;
  step(): JavaOpaque<"org.joml.Vector3f">;
  toString(): string;
  toYRot(): number;
}
export interface DirectionStatics {
  readonly DOWN: Direction;
  readonly EAST: Direction;
  readonly NORTH: Direction;
  readonly SOUTH: Direction;
  readonly UP: Direction;
  readonly WEST: Direction;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [Direction]>;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<Direction>;
  readonly LEGACY_ID_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Direction]>;
  readonly LEGACY_ID_CODEC_2D: JavaOpaque<"com.mojang.serialization.Codec", [Direction]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Direction>;
  readonly VERTICAL_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Direction]>;
  allShuffled(arg0: j_net_minecraft_util.RandomSource): JavaCollection<Direction>;
  byName(arg0: string | null): Direction | null;
  from2DDataValue(arg0: number): Direction;
  from3DDataValue(arg0: number): Direction;
  fromAxisAndDirection(arg0: Direction_Axis, arg1: Direction_AxisDirection): Direction;
  fromYRot(arg0: number): Direction;
  get(arg0: Direction_AxisDirection, arg1: Direction_Axis): Direction;
  getApproximateNearest(arg0: number, arg1: number, arg2: number): Direction;
  getApproximateNearest(arg0: number, arg1: number, arg2: number): Direction;
  getApproximateNearest(arg0: j_net_minecraft_world_phys.Vec3): Direction;
  getFacingAxis(arg0: j_net_minecraft_world_entity.Entity, arg1: Direction_Axis): Direction;
  getNearest(arg0: number, arg1: number, arg2: number, arg3: Direction | null): Direction | null;
  getNearest(arg0: Vec3i, arg1: Direction | null): Direction | null;
  getRandom(arg0: j_net_minecraft_util.RandomSource): Direction;
  getYRot(arg0: Direction): number;
  orderedByNearest(arg0: j_net_minecraft_world_entity.Entity): Array<Direction>;
  rotate(arg0: JavaOpaque<"org.joml.Matrix4fc">, arg1: Direction): Direction;
  stream(): JavaOpaque<"java.util.stream.Stream", [Direction]>;
  valueOf(arg0: string): Direction;
  values(): Array<Direction>;
}

/** Live JVM enum net.minecraft.core.Direction$Axis; constants are host handles, not strings. */
export type Direction_Axis = JavaEnum<"net.minecraft.core.Direction$Axis", "X" | "Y" | "Z"> & Direction_AxisMembers;
export interface Direction_AxisMembers {
  choose(arg0: number, arg1: number, arg2: number): number;
  choose(arg0: number, arg1: number, arg2: number): number;
  choose(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
  getDirections(): Array<Direction>;
  getName(): string;
  getNegative(): Direction;
  getPlane(): Direction_Plane;
  getPositive(): Direction;
  getSerializedName(): string;
  isHorizontal(): boolean;
  isVertical(): boolean;
  test(arg0: object | null): boolean | null;
  test(arg0: Direction | null): boolean | null;
  toString(): string;
}
export interface Direction_AxisStatics {
  readonly X: Direction_Axis;
  readonly Y: Direction_Axis;
  readonly Z: Direction_Axis;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<Direction_Axis>;
  readonly VALUES: Array<Direction_Axis>;
  byName(arg0: string): Direction_Axis | null;
  getRandom(arg0: j_net_minecraft_util.RandomSource): Direction_Axis;
  valueOf(arg0: string): Direction_Axis;
  values(): Array<Direction_Axis>;
}

/** Live JVM enum net.minecraft.core.Direction$AxisDirection; constants are host handles, not strings. */
export type Direction_AxisDirection = JavaEnum<"net.minecraft.core.Direction$AxisDirection", "NEGATIVE" | "POSITIVE"> & Direction_AxisDirectionMembers;
export interface Direction_AxisDirectionMembers {
  getName(): string;
  getStep(): number;
  opposite(): Direction_AxisDirection;
  toString(): string;
}
export interface Direction_AxisDirectionStatics {
  readonly NEGATIVE: Direction_AxisDirection;
  readonly POSITIVE: Direction_AxisDirection;
  valueOf(arg0: string): Direction_AxisDirection;
  values(): Array<Direction_AxisDirection>;
}

/** Live JVM enum net.minecraft.core.Direction$Plane; constants are host handles, not strings. */
export type Direction_Plane = JavaEnum<"net.minecraft.core.Direction$Plane", "HORIZONTAL" | "VERTICAL"> & Direction_PlaneMembers;
export interface Direction_PlaneMembers {
  getRandomAxis(arg0: j_net_minecraft_util.RandomSource): Direction_Axis;
  getRandomDirection(arg0: j_net_minecraft_util.RandomSource): Direction;
  iterator(): JavaOpaque<"java.util.Iterator", [Direction]>;
  length(): number;
  shuffledCopy(arg0: j_net_minecraft_util.RandomSource): JavaList<Direction>;
  stream(): JavaOpaque<"java.util.stream.Stream", [Direction]>;
  test(arg0: object | null): boolean | null;
  test(arg0: Direction | null): boolean | null;
}
export interface Direction_PlaneStatics {
  readonly HORIZONTAL: Direction_Plane;
  readonly VERTICAL: Direction_Plane;
  valueOf(arg0: string): Direction_Plane;
  values(): Array<Direction_Plane>;
}

/** Live JVM enum net.minecraft.core.Direction8; constants are host handles, not strings. */
export type Direction8 = JavaEnum<"net.minecraft.core.Direction8", "EAST" | "NORTH" | "NORTH_EAST" | "NORTH_WEST" | "SOUTH" | "SOUTH_EAST" | "SOUTH_WEST" | "WEST"> & Direction8Members;
export interface Direction8Members {
  getDirections(): JavaSet<Direction>;
  getStepX(): number;
  getStepZ(): number;
}
export interface Direction8Statics {
  readonly EAST: Direction8;
  readonly NORTH: Direction8;
  readonly NORTH_EAST: Direction8;
  readonly NORTH_WEST: Direction8;
  readonly SOUTH: Direction8;
  readonly SOUTH_EAST: Direction8;
  readonly SOUTH_WEST: Direction8;
  readonly WEST: Direction8;
  valueOf(arg0: string): Direction8;
  values(): Array<Direction8>;
}

/** Live JVM enum net.minecraft.core.FrontAndTop; constants are host handles, not strings. */
export type FrontAndTop = JavaEnum<"net.minecraft.core.FrontAndTop", "DOWN_EAST" | "DOWN_NORTH" | "DOWN_SOUTH" | "DOWN_WEST" | "EAST_UP" | "NORTH_UP" | "SOUTH_UP" | "UP_EAST" | "UP_NORTH" | "UP_SOUTH" | "UP_WEST" | "WEST_UP"> & FrontAndTopMembers;
export interface FrontAndTopMembers {
  front(): Direction;
  getSerializedName(): string;
  top(): Direction;
}
export interface FrontAndTopStatics {
  readonly DOWN_EAST: FrontAndTop;
  readonly DOWN_NORTH: FrontAndTop;
  readonly DOWN_SOUTH: FrontAndTop;
  readonly DOWN_WEST: FrontAndTop;
  readonly EAST_UP: FrontAndTop;
  readonly NORTH_UP: FrontAndTop;
  readonly SOUTH_UP: FrontAndTop;
  readonly UP_EAST: FrontAndTop;
  readonly UP_NORTH: FrontAndTop;
  readonly UP_SOUTH: FrontAndTop;
  readonly UP_WEST: FrontAndTop;
  readonly WEST_UP: FrontAndTop;
  fromFrontAndTop(arg0: Direction, arg1: Direction): FrontAndTop;
  valueOf(arg0: string): FrontAndTop;
  values(): Array<FrontAndTop>;
}

/** JVM record net.minecraft.core.GlobalPos. */
export interface GlobalPosMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimension(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isCloseEnough(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: BlockPos, arg2: number): boolean;
  pos(): BlockPos;
  toString(): string;
}
export type GlobalPos = GlobalPosMembers & JavaOpaque<"java.lang.Record">;
export interface GlobalPosStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: BlockPos): GlobalPos;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GlobalPos]>;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GlobalPos]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, GlobalPos>;
  of(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: BlockPos): GlobalPos;
}

/** JVM interface net.minecraft.core.Holder. */
export interface HolderMembers<T = unknown> {
  canSerializeIn(arg0: HolderOwner<T>): boolean;
  getRegisteredName(): string;
  is(arg0: JavaPredicate<j_net_minecraft_resources.ResourceKey<T>>): boolean;
  is(arg0: Holder<T>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceKey<T>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<T>): boolean;
  isBound(): boolean;
  kind(): Holder_Kind;
  tags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<T>]>;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_resources.ResourceKey<T>, T]>;
  unwrapKey(): JavaOptional<j_net_minecraft_resources.ResourceKey<T>>;
  value(): T;
}
export type Holder<T = unknown> = HolderMembers<T>;
export interface HolderStatics {
  direct<T>(arg0: T): Holder<T>;
}

/** JVM record net.minecraft.core.Holder$Direct. */
export interface Holder_DirectMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Holder<T>];
  canSerializeIn(arg0: HolderOwner<T>): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  is(arg0: JavaPredicate<j_net_minecraft_resources.ResourceKey<T>>): boolean;
  is(arg0: Holder<T>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceKey<T>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<T>): boolean;
  isBound(): boolean;
  kind(): Holder_Kind;
  tags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<T>]>;
  toString(): string;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_resources.ResourceKey<T>, T]>;
  unwrapKey(): JavaOptional<j_net_minecraft_resources.ResourceKey<T>>;
  value(): T;
}
export type Holder_Direct<T = unknown> = Holder_DirectMembers<T> & JavaOpaque<"java.lang.Record"> & Holder<T>;
export interface Holder_DirectStatics {
  new<T>(arg0: T): Holder_Direct<T>;
}

/** Live JVM enum net.minecraft.core.Holder$Kind; constants are host handles, not strings. */
export type Holder_Kind = JavaEnum<"net.minecraft.core.Holder$Kind", "DIRECT" | "REFERENCE"> & Holder_KindMembers;
export interface Holder_KindMembers {
}
export interface Holder_KindStatics {
  readonly DIRECT: Holder_Kind;
  readonly REFERENCE: Holder_Kind;
  valueOf(arg0: string): Holder_Kind;
  values(): Array<Holder_Kind>;
}

/** JVM class net.minecraft.core.Holder$Reference. */
export interface Holder_ReferenceMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Holder<T>];
  bindValue(arg0: T): void;
  canSerializeIn(arg0: HolderOwner<T>): boolean;
  is(arg0: JavaPredicate<j_net_minecraft_resources.ResourceKey<T>>): boolean;
  is(arg0: Holder<T>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceKey<T>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<T>): boolean;
  isBound(): boolean;
  key(): j_net_minecraft_resources.ResourceKey<T>;
  kind(): Holder_Kind;
  tags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<T>]>;
  toString(): string;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_resources.ResourceKey<T>, T]>;
  unwrapKey(): JavaOptional<j_net_minecraft_resources.ResourceKey<T>>;
  value(): T;
}
export type Holder_Reference<T = unknown> = Holder_ReferenceMembers<T> & Holder<T>;
export interface Holder_ReferenceStatics {
  new<T>(arg0: Holder_Reference_Type, arg1: HolderOwner<T>, arg2: j_net_minecraft_resources.ResourceKey<T> | null, arg3: T | null): Holder_Reference<T>;
  createIntrusive<T>(arg0: HolderOwner<T>, arg1: T | null): Holder_Reference<T> | null;
  createStandAlone<T>(arg0: HolderOwner<T>, arg1: j_net_minecraft_resources.ResourceKey<T>): Holder_Reference<T>;
}

/** Live JVM enum net.minecraft.core.Holder$Reference$Type; constants are host handles, not strings. */
export type Holder_Reference_Type = JavaEnum<"net.minecraft.core.Holder$Reference$Type", "INTRUSIVE" | "STAND_ALONE"> & Holder_Reference_TypeMembers;
export interface Holder_Reference_TypeMembers {
}
export interface Holder_Reference_TypeStatics {
  readonly INTRUSIVE: Holder_Reference_Type;
  readonly STAND_ALONE: Holder_Reference_Type;
  valueOf(arg0: string): Holder_Reference_Type;
  values(): Array<Holder_Reference_Type>;
}

/** JVM interface net.minecraft.core.HolderGetter. */
export interface HolderGetterMembers<T = unknown> {
  get(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<Holder_Reference<T>>;
  get(arg0: j_net_minecraft_tags.TagKey<T>): JavaOptional<HolderSet_Named<T>>;
  getOrThrow(arg0: j_net_minecraft_resources.ResourceKey<T>): Holder_Reference<T>;
  getOrThrow(arg0: j_net_minecraft_tags.TagKey<T>): HolderSet_Named<T>;
}
export type HolderGetter<T = unknown> = HolderGetterMembers<T>;
export interface HolderGetterStatics {
}

/** JVM interface net.minecraft.core.HolderGetter$Provider. */
export interface HolderGetter_ProviderMembers {
  get<T>(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<Holder_Reference<T>>;
  getOrThrow<T>(arg0: j_net_minecraft_resources.ResourceKey<T>): Holder_Reference<T>;
  lookup<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>): JavaOptional<HolderGetter<T>>;
  lookupOrThrow<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>): HolderGetter<T>;
}
export type HolderGetter_Provider = HolderGetter_ProviderMembers;
export interface HolderGetter_ProviderStatics {
}

/** JVM interface net.minecraft.core.HolderLookup. */
export interface HolderLookupMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [HolderGetter<T>];
  listElementIds(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<T>]>;
  listElements(): JavaOpaque<"java.util.stream.Stream", [Holder_Reference<T>]>;
  listTagIds(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<T>]>;
  listTags(): JavaOpaque<"java.util.stream.Stream", [HolderSet_Named<T>]>;
}
export type HolderLookup<T = unknown> = HolderLookupMembers<T> & HolderGetter<T>;
export interface HolderLookupStatics {
}

/** JVM interface net.minecraft.core.HolderLookup$Provider. */
export interface HolderLookup_ProviderMembers {
  readonly __javaSupertypes?: readonly [HolderGetter_Provider];
  allRegistriesLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
  createSerializationContext<V>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [V]>): j_net_minecraft_resources.RegistryOps<V>;
  listRegistries(): JavaOpaque<"java.util.stream.Stream", [HolderLookup_RegistryLookup<object>]>;
  listRegistryKeys(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<Registry<object>>]>;
  lookup<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>): JavaOptional<HolderLookup_RegistryLookup<T>>;
  lookupOrThrow(arg0: j_net_minecraft_resources.ResourceKey): HolderGetter;
  lookupOrThrow<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>): HolderLookup_RegistryLookup<T>;
}
export type HolderLookup_Provider = HolderLookup_ProviderMembers & HolderGetter_Provider;
export interface HolderLookup_ProviderStatics {
  create(arg0: JavaOpaque<"java.util.stream.Stream", [HolderLookup_RegistryLookup<object>]>): HolderLookup_Provider;
}

/** JVM interface net.minecraft.core.HolderLookup$RegistryLookup. */
export interface HolderLookup_RegistryLookupMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [HolderLookup<T>, HolderOwner<T>];
  filterElements(arg0: JavaPredicate<T>): HolderLookup_RegistryLookup<T>;
  filterFeatures(arg0: j_net_minecraft_world_flag.FeatureFlagSet): HolderLookup_RegistryLookup<T>;
  getValueForCopying(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<T>;
  key(): j_net_minecraft_resources.ResourceKey<Registry<T>>;
  registryLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
}
export type HolderLookup_RegistryLookup<T = unknown> = HolderLookup_RegistryLookupMembers<T> & HolderLookup<T> & HolderOwner<T>;
export interface HolderLookup_RegistryLookupStatics {
}

/** JVM interface net.minecraft.core.HolderLookup$RegistryLookup$Delegate. */
export interface HolderLookup_RegistryLookup_DelegateMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [HolderLookup_RegistryLookup<T>];
  get(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<Holder_Reference<T>>;
  get(arg0: j_net_minecraft_tags.TagKey<T>): JavaOptional<HolderSet_Named<T>>;
  getValueForCopying(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<T>;
  key(): j_net_minecraft_resources.ResourceKey<Registry<T>>;
  listElements(): JavaOpaque<"java.util.stream.Stream", [Holder_Reference<T>]>;
  listTags(): JavaOpaque<"java.util.stream.Stream", [HolderSet_Named<T>]>;
  parent(): HolderLookup_RegistryLookup<T>;
  registryLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
}
export type HolderLookup_RegistryLookup_Delegate<T = unknown> = HolderLookup_RegistryLookup_DelegateMembers<T> & HolderLookup_RegistryLookup<T>;
export interface HolderLookup_RegistryLookup_DelegateStatics {
}

/** JVM interface net.minecraft.core.HolderOwner. */
export interface HolderOwnerMembers<T = unknown> {
  canSerializeIn(arg0: HolderOwner<T>): boolean;
}
export type HolderOwner<T = unknown> = HolderOwnerMembers<T>;
export interface HolderOwnerStatics {
}

/** JVM interface net.minecraft.core.HolderSet. */
export interface HolderSetMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<Holder<T>>];
  canSerializeIn(arg0: HolderOwner<T>): boolean;
  contains(arg0: Holder<T>): boolean;
  get(arg0: number): Holder<T>;
  getRandomElement(arg0: j_net_minecraft_util.RandomSource): JavaOptional<Holder<T>>;
  isBound(): boolean;
  size(): number;
  stream(): JavaOpaque<"java.util.stream.Stream", [Holder<T>]>;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_tags.TagKey<T>, JavaList<Holder<T>>]>;
  unwrapKey(): JavaOptional<j_net_minecraft_tags.TagKey<T>>;
}
export type HolderSet<T = unknown> = HolderSetMembers<T> & Iterable<Holder<T>>;
export interface HolderSetStatics {
  direct<T>(arg0: JavaList<Holder<T>>): HolderSet_Direct<T>;
  direct<E, T>(arg0: JavaFunction<E, Holder<T>>, arg1: JavaCollection<E>): HolderSet_Direct<T>;
  direct<E, T>(arg0: JavaFunction<E, Holder<T>>, ...arg1: Array<E>): HolderSet_Direct<T>;
  direct<T>(...arg0: Array<Holder<T>>): HolderSet_Direct<T>;
  empty<T>(): HolderSet<T>;
  emptyNamed<T>(arg0: HolderOwner<T>, arg1: j_net_minecraft_tags.TagKey<T>): HolderSet_Named<T>;
}

/** JVM class net.minecraft.core.HolderSet$Direct. */
export interface HolderSet_DirectMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [HolderSet_ListBacked<T>];
  contains(arg0: Holder<T>): boolean;
  contents(): JavaList<Holder<T>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isBound(): boolean;
  toString(): string;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_tags.TagKey<T>, JavaList<Holder<T>>]>;
  unwrapKey(): JavaOptional<j_net_minecraft_tags.TagKey<T>>;
}
export type HolderSet_Direct<T = unknown> = HolderSet_DirectMembers<T> & HolderSet_ListBacked<T>;
export interface HolderSet_DirectStatics {
}

/** JVM abstract net.minecraft.core.HolderSet$ListBacked. */
export interface HolderSet_ListBackedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [HolderSet<T>];
  canSerializeIn(arg0: HolderOwner<T>): boolean;
  contents(): JavaList<Holder<T>>;
  get(arg0: number): Holder<T>;
  getRandomElement(arg0: j_net_minecraft_util.RandomSource): JavaOptional<Holder<T>>;
  iterator(): JavaOpaque<"java.util.Iterator", [Holder<T>]>;
  size(): number;
  spliterator(): JavaOpaque<"java.util.Spliterator", [Holder<T>]>;
  stream(): JavaOpaque<"java.util.stream.Stream", [Holder<T>]>;
}
export type HolderSet_ListBacked<T = unknown> = HolderSet_ListBackedMembers<T> & HolderSet<T>;
export interface HolderSet_ListBackedStatics {
  new<T>(): HolderSet_ListBacked<T>;
}

/** JVM class net.minecraft.core.HolderSet$Named. */
export interface HolderSet_NamedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [HolderSet_ListBacked<T>];
  canSerializeIn(arg0: HolderOwner<T>): boolean;
  contains(arg0: Holder<T>): boolean;
  contents(): JavaList<Holder<T>>;
  isBound(): boolean;
  key(): j_net_minecraft_tags.TagKey<T>;
  toString(): string;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_tags.TagKey<T>, JavaList<Holder<T>>]>;
  unwrapKey(): JavaOptional<j_net_minecraft_tags.TagKey<T>>;
}
export type HolderSet_Named<T = unknown> = HolderSet_NamedMembers<T> & HolderSet_ListBacked<T>;
export interface HolderSet_NamedStatics {
}

/** JVM interface net.minecraft.core.IdMap. */
export interface IdMapMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<T>];
  byId(arg0: number): T | null;
  byIdOrThrow(arg0: number): T;
  getId(arg0: T): number;
  getIdOrThrow(arg0: T): number;
  size(): number;
}
export type IdMap<T = unknown> = IdMapMembers<T> & Iterable<T>;
export interface IdMapStatics {
  readonly DEFAULT: -1;
}

/** JVM class net.minecraft.core.IdMapper. */
export interface IdMapperMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [IdMap<T>];
  add(arg0: T): void;
  addMapping(arg0: T, arg1: number): void;
  byId(arg0: number): T | null;
  contains(arg0: number): boolean;
  getId(arg0: T): number;
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  size(): number;
}
export type IdMapper<T = unknown> = IdMapperMembers<T> & IdMap<T>;
export interface IdMapperStatics {
  new<T>(): IdMapper<T>;
  new<T>(arg0: number): IdMapper<T>;
}

/** JVM class net.minecraft.core.LayeredRegistryAccess. */
export interface LayeredRegistryAccessMembers<T = unknown> {
  compositeAccess(): RegistryAccess_Frozen;
  getAccessForLoading(arg0: T): RegistryAccess_Frozen;
  getAccessFrom(arg0: T): RegistryAccess_Frozen;
  getLayer(arg0: T): RegistryAccess_Frozen;
  replaceFrom(arg0: T, arg1: JavaList<RegistryAccess_Frozen>): LayeredRegistryAccess<T>;
  replaceFrom(arg0: T, ...arg1: Array<RegistryAccess_Frozen>): LayeredRegistryAccess<T>;
}
export type LayeredRegistryAccess<T = unknown> = LayeredRegistryAccessMembers<T>;
export interface LayeredRegistryAccessStatics {
  new<T>(arg0: JavaList<T>): LayeredRegistryAccess<T>;
}

/** JVM class net.minecraft.core.MappedRegistry. */
export interface MappedRegistryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [WritableRegistry<T>];
  bindAllTagsToEmpty(): void;
  bindTag(arg0: j_net_minecraft_tags.TagKey<T>, arg1: JavaList<Holder<T>>): void;
  byId(arg0: number): T | null;
  clearIntrusiveHolder(arg0: T): void;
  containsKey(arg0: j_net_minecraft_resources.ResourceKey<T>): boolean;
  containsKey(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  createIntrusiveHolder(arg0: T): Holder_Reference<T>;
  createRegistrationLookup(): HolderGetter<T>;
  entrySet(): JavaSet<JavaMapEntry<j_net_minecraft_resources.ResourceKey<T>, T>>;
  freeze(): Registry<T>;
  get(arg0: number): JavaOptional<Holder_Reference<T>>;
  get(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<Holder_Reference<T>>;
  get(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Holder_Reference<T>>;
  get(arg0: j_net_minecraft_tags.TagKey<T>): JavaOptional<HolderSet_Named<T>>;
  getAny(): JavaOptional<Holder_Reference<T>>;
  getId(arg0: T | null): number | null;
  getKey(arg0: T): j_net_minecraft_resources.ResourceLocation | null;
  getRandom(arg0: j_net_minecraft_util.RandomSource): JavaOptional<Holder_Reference<T>>;
  getResourceKey(arg0: T): JavaOptional<j_net_minecraft_resources.ResourceKey<T>>;
  getTags(): JavaOpaque<"java.util.stream.Stream", [HolderSet_Named<T>]>;
  getValue(arg0: j_net_minecraft_resources.ResourceKey<T> | null): T | null;
  getValue(arg0: j_net_minecraft_resources.ResourceLocation | null): T | null;
  getValueForCopying(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<T>;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  key(): j_net_minecraft_resources.ResourceKey<Registry<T>>;
  keySet(): JavaSet<j_net_minecraft_resources.ResourceLocation>;
  listElements(): JavaOpaque<"java.util.stream.Stream", [Holder_Reference<T>]>;
  listTags(): JavaOpaque<"java.util.stream.Stream", [HolderSet_Named<T>]>;
  prepareTagReload(arg0: j_net_minecraft_tags.TagLoader_LoadResult<T>): Registry_PendingTags<T>;
  register(arg0: j_net_minecraft_resources.ResourceKey<T>, arg1: T, arg2: RegistrationInfo): Holder_Reference<T>;
  registrationInfo(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<RegistrationInfo>;
  registryKeySet(): JavaSet<j_net_minecraft_resources.ResourceKey<T>>;
  registryLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
  size(): number;
  toString(): string;
  validateWrite(arg0: j_net_minecraft_resources.ResourceKey<T>): void;
  wrapAsHolder(arg0: T): Holder<T>;
}
export type MappedRegistry<T = unknown> = MappedRegistryMembers<T> & WritableRegistry<T>;
export interface MappedRegistryStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Lifecycle">): MappedRegistry<T>;
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Lifecycle">, arg2: boolean): MappedRegistry<T>;
}

/** JVM class net.minecraft.core.NonNullList. */
export interface NonNullListMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractList", [E]>];
  add(arg0: number, arg1: E): void;
  clear(): void;
  get(arg0: number): E;
  remove(arg0: number): E;
  set(arg0: number, arg1: E): E;
  size(): number;
}
export type NonNullList<E = unknown> = NonNullListMembers<E> & JavaOpaque<"java.util.AbstractList", [E]>;
export interface NonNullListStatics {
  new<E>(arg0: JavaList<E>, arg1: E | null): NonNullList<E>;
  create<E>(): NonNullList<E>;
  createWithCapacity<E>(arg0: number): NonNullList<E>;
  of<E>(arg0: E, ...arg1: Array<E>): NonNullList<E>;
  withSize<E>(arg0: number, arg1: E): NonNullList<E>;
}

/** JVM interface net.minecraft.core.Position. */
export interface PositionMembers {
  x(): number;
  y(): number;
  z(): number;
}
export type Position = PositionMembers;
export interface PositionStatics {
}

/** JVM class net.minecraft.core.QuartPos. */
export interface QuartPosMembers {
}
export type QuartPos = QuartPosMembers;
export interface QuartPosStatics {
  readonly BITS: 2;
  readonly MASK: 3;
  readonly SIZE: 4;
  fromBlock(arg0: number): number;
  fromSection(arg0: number): number;
  quartLocal(arg0: number): number;
  toBlock(arg0: number): number;
  toSection(arg0: number): number;
}

/** JVM record net.minecraft.core.RegistrationInfo. */
export interface RegistrationInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  knownPackInfo(): JavaOptional<j_net_minecraft_server_packs_repository.KnownPack>;
  lifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
  toString(): string;
}
export type RegistrationInfo = RegistrationInfoMembers & JavaOpaque<"java.lang.Record">;
export interface RegistrationInfoStatics {
  new(arg0: JavaOptional<j_net_minecraft_server_packs_repository.KnownPack>, arg1: JavaOpaque<"com.mojang.serialization.Lifecycle">): RegistrationInfo;
  readonly BUILT_IN: RegistrationInfo;
}

/** JVM interface net.minecraft.core.Registry. */
export interface RegistryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.Keyable">, HolderLookup_RegistryLookup<T>, IdMap<T>];
  asHolderIdMap(): IdMap<Holder<T>>;
  byNameCodec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  containsKey(arg0: j_net_minecraft_resources.ResourceKey<T>): boolean;
  containsKey(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  createIntrusiveHolder(arg0: T): Holder_Reference<T>;
  entrySet(): JavaSet<JavaMapEntry<j_net_minecraft_resources.ResourceKey<T>, T>>;
  freeze(): Registry<T>;
  get(arg0: number): JavaOptional<Holder_Reference<T>>;
  get(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Holder_Reference<T>>;
  getAny(): JavaOptional<Holder_Reference<T>>;
  getId(arg0: T | null): number | null;
  getKey(arg0: T): j_net_minecraft_resources.ResourceLocation | null;
  getOptional(arg0: j_net_minecraft_resources.ResourceKey<T> | null): JavaOptional<T> | null;
  getOptional(arg0: j_net_minecraft_resources.ResourceLocation | null): JavaOptional<T> | null;
  getRandom(arg0: j_net_minecraft_util.RandomSource): JavaOptional<Holder_Reference<T>>;
  getRandomElementOf(arg0: j_net_minecraft_tags.TagKey<T>, arg1: j_net_minecraft_util.RandomSource): JavaOptional<Holder<T>>;
  getResourceKey(arg0: T): JavaOptional<j_net_minecraft_resources.ResourceKey<T>>;
  getTagOrEmpty(arg0: j_net_minecraft_tags.TagKey<T>): Iterable<Holder<T>>;
  getTags(): JavaOpaque<"java.util.stream.Stream", [HolderSet_Named<T>]>;
  getValue(arg0: j_net_minecraft_resources.ResourceKey<T> | null): T | null;
  getValue(arg0: j_net_minecraft_resources.ResourceLocation | null): T | null;
  getValueOrThrow(arg0: j_net_minecraft_resources.ResourceKey<T>): T;
  holderByNameCodec(): JavaOpaque<"com.mojang.serialization.Codec", [Holder<T>]>;
  key(): j_net_minecraft_resources.ResourceKey<Registry<T>>;
  keySet(): JavaSet<j_net_minecraft_resources.ResourceLocation>;
  keys<U>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>): JavaOpaque<"java.util.stream.Stream", [U]>;
  prepareTagReload(arg0: j_net_minecraft_tags.TagLoader_LoadResult<T>): Registry_PendingTags<T>;
  registrationInfo(arg0: j_net_minecraft_resources.ResourceKey<T>): JavaOptional<RegistrationInfo>;
  registryKeySet(): JavaSet<j_net_minecraft_resources.ResourceKey<T>>;
  stream(): JavaOpaque<"java.util.stream.Stream", [T]>;
  wrapAsHolder(arg0: T): Holder<T>;
}
export type Registry<T = unknown> = RegistryMembers<T> & JavaOpaque<"com.mojang.serialization.Keyable"> & HolderLookup_RegistryLookup<T> & IdMap<T>;
export interface RegistryStatics {
  register<T>(arg0: Registry<T>, arg1: string, arg2: T): T;
  register<V, T /* extends V */>(arg0: Registry<V>, arg1: j_net_minecraft_resources.ResourceKey<V>, arg2: T): T;
  register<V, T /* extends V */>(arg0: Registry<V>, arg1: j_net_minecraft_resources.ResourceLocation, arg2: T): T;
  registerForHolder<T>(arg0: Registry<T>, arg1: j_net_minecraft_resources.ResourceKey<T>, arg2: T): Holder_Reference<T>;
  registerForHolder<T>(arg0: Registry<T>, arg1: j_net_minecraft_resources.ResourceLocation, arg2: T): Holder_Reference<T>;
}

/** JVM interface net.minecraft.core.Registry$PendingTags. */
export interface Registry_PendingTagsMembers<T = unknown> {
  apply(): void;
  key(): j_net_minecraft_resources.ResourceKey<Registry<T>>;
  lookup(): HolderLookup_RegistryLookup<T>;
  size(): number;
}
export type Registry_PendingTags<T = unknown> = Registry_PendingTagsMembers<T>;
export interface Registry_PendingTagsStatics {
}

/** JVM interface net.minecraft.core.RegistryAccess. */
export interface RegistryAccessMembers {
  readonly __javaSupertypes?: readonly [HolderLookup_Provider];
  freeze(): RegistryAccess_Frozen;
  listRegistryKeys(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<Registry<object>>]>;
  lookup<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>): JavaOptional<Registry<E>>;
  lookupOrThrow(arg0: j_net_minecraft_resources.ResourceKey): HolderGetter;
  lookupOrThrow(arg0: j_net_minecraft_resources.ResourceKey): HolderLookup_RegistryLookup;
  lookupOrThrow<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>): Registry<E>;
  registries(): JavaOpaque<"java.util.stream.Stream", [RegistryAccess_RegistryEntry<object>]>;
}
export type RegistryAccess = RegistryAccessMembers & HolderLookup_Provider;
export interface RegistryAccessStatics {
  readonly EMPTY: RegistryAccess_Frozen;
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  fromRegistryOfRegistries(arg0: Registry<Registry<object>>): RegistryAccess_Frozen;
}

/** JVM interface net.minecraft.core.RegistryAccess$Frozen. */
export interface RegistryAccess_FrozenMembers {
  readonly __javaSupertypes?: readonly [RegistryAccess];
}
export type RegistryAccess_Frozen = RegistryAccess_FrozenMembers & RegistryAccess;
export interface RegistryAccess_FrozenStatics {
}

/** JVM class net.minecraft.core.RegistryAccess$ImmutableRegistryAccess. */
export interface RegistryAccess_ImmutableRegistryAccessMembers {
  readonly __javaSupertypes?: readonly [RegistryAccess];
  lookup<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>): JavaOptional<Registry<E>>;
  registries(): JavaOpaque<"java.util.stream.Stream", [RegistryAccess_RegistryEntry<object>]>;
}
export type RegistryAccess_ImmutableRegistryAccess = RegistryAccess_ImmutableRegistryAccessMembers & RegistryAccess;
export interface RegistryAccess_ImmutableRegistryAccessStatics {
  new(arg0: JavaList<Registry<object>>): RegistryAccess_ImmutableRegistryAccess;
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceKey<Registry<object>>, Registry<object>>): RegistryAccess_ImmutableRegistryAccess;
  new(arg0: JavaOpaque<"java.util.stream.Stream", [RegistryAccess_RegistryEntry<object>]>): RegistryAccess_ImmutableRegistryAccess;
}

/** JVM record net.minecraft.core.RegistryAccess$RegistryEntry. */
export interface RegistryAccess_RegistryEntryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): j_net_minecraft_resources.ResourceKey<Registry<T>>;
  toString(): string;
  value(): Registry<T>;
}
export type RegistryAccess_RegistryEntry<T = unknown> = RegistryAccess_RegistryEntryMembers<T> & JavaOpaque<"java.lang.Record">;
export interface RegistryAccess_RegistryEntryStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg1: Registry<T>): RegistryAccess_RegistryEntry<T>;
}

/** JVM class net.minecraft.core.RegistryCodecs. */
export interface RegistryCodecsMembers {
}
export type RegistryCodecs = RegistryCodecsMembers;
export interface RegistryCodecsStatics {
  new(): RegistryCodecs;
  homogeneousList<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>): JavaOpaque<"com.mojang.serialization.Codec", [HolderSet<E>]>;
  homogeneousList<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [HolderSet<E>]>;
  homogeneousList<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg2: boolean): JavaOpaque<"com.mojang.serialization.Codec", [HolderSet<E>]>;
  homogeneousList<E>(arg0: j_net_minecraft_resources.ResourceKey<Registry<E>>, arg1: boolean): JavaOpaque<"com.mojang.serialization.Codec", [HolderSet<E>]>;
}

/** JVM class net.minecraft.core.RegistrySetBuilder. */
export interface RegistrySetBuilderMembers {
  add<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Lifecycle">, arg2: RegistrySetBuilder_RegistryBootstrap<T>): RegistrySetBuilder;
  add<T>(arg0: j_net_minecraft_resources.ResourceKey<Registry<T>>, arg1: RegistrySetBuilder_RegistryBootstrap<T>): RegistrySetBuilder;
  build(arg0: RegistryAccess): HolderLookup_Provider;
  buildPatch(arg0: RegistryAccess, arg1: HolderLookup_Provider, arg2: Cloner_Factory): RegistrySetBuilder_PatchedRegistries;
}
export type RegistrySetBuilder = RegistrySetBuilderMembers;
export interface RegistrySetBuilderStatics {
  new(): RegistrySetBuilder;
}

/** JVM record net.minecraft.core.RegistrySetBuilder$PatchedRegistries. */
export interface RegistrySetBuilder_PatchedRegistriesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  full(): HolderLookup_Provider;
  hashCode(): number;
  patches(): HolderLookup_Provider;
  toString(): string;
}
export type RegistrySetBuilder_PatchedRegistries = RegistrySetBuilder_PatchedRegistriesMembers & JavaOpaque<"java.lang.Record">;
export interface RegistrySetBuilder_PatchedRegistriesStatics {
  new(arg0: HolderLookup_Provider, arg1: HolderLookup_Provider): RegistrySetBuilder_PatchedRegistries;
}

/** JVM interface net.minecraft.core.RegistrySetBuilder$RegistryBootstrap. */
export interface RegistrySetBuilder_RegistryBootstrapMembers<T = unknown> {
  run(arg0: j_net_minecraft_data_worldgen.BootstrapContext<T>): void;
}
export type RegistrySetBuilder_RegistryBootstrap<T = unknown> = RegistrySetBuilder_RegistryBootstrapMembers<T>;
export interface RegistrySetBuilder_RegistryBootstrapStatics {
}

/** JVM class net.minecraft.core.RegistrySynchronization. */
export interface RegistrySynchronizationMembers {
}
export type RegistrySynchronization = RegistrySynchronizationMembers;
export interface RegistrySynchronizationStatics {
  new(): RegistrySynchronization;
  isNetworkable(arg0: j_net_minecraft_resources.ResourceKey<Registry<object>>): boolean;
  networkSafeRegistries(arg0: LayeredRegistryAccess<j_net_minecraft_server.RegistryLayer>): JavaOpaque<"java.util.stream.Stream", [RegistryAccess_RegistryEntry<object>]>;
  networkedRegistries(arg0: LayeredRegistryAccess<j_net_minecraft_server.RegistryLayer>): JavaOpaque<"java.util.stream.Stream", [RegistryAccess_RegistryEntry<object>]>;
  packRegistries(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>, arg1: RegistryAccess, arg2: JavaSet<j_net_minecraft_server_packs_repository.KnownPack>, arg3: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<Registry<object>>, JavaList<RegistrySynchronization_PackedRegistryEntry>>): void;
}

/** JVM record net.minecraft.core.RegistrySynchronization$PackedRegistryEntry. */
export interface RegistrySynchronization_PackedRegistryEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  data(): JavaOptional<j_net_minecraft_nbt.Tag>;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type RegistrySynchronization_PackedRegistryEntry = RegistrySynchronization_PackedRegistryEntryMembers & JavaOpaque<"java.lang.Record">;
export interface RegistrySynchronization_PackedRegistryEntryStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOptional<j_net_minecraft_nbt.Tag>): RegistrySynchronization_PackedRegistryEntry;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, RegistrySynchronization_PackedRegistryEntry>;
}

/** JVM record net.minecraft.core.Rotations. */
export interface RotationsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  x(): number;
  y(): number;
  z(): number;
}
export type Rotations = RotationsMembers & JavaOpaque<"java.lang.Record">;
export interface RotationsStatics {
  new(arg0: number, arg1: number, arg2: number): Rotations;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Rotations]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Rotations>;
  createWithoutValidityChecks(arg0: number, arg1: number, arg2: number): Rotations;
}

/** JVM class net.minecraft.core.SectionPos. */
export interface SectionPosMembers {
  readonly __javaSupertypes?: readonly [Vec3i];
  asLong(): bigint;
  blocksInside(): JavaOpaque<"java.util.stream.Stream", [BlockPos]>;
  center(): BlockPos;
  chunk(): j_net_minecraft_world_level.ChunkPos;
  maxBlockX(): number;
  maxBlockY(): number;
  maxBlockZ(): number;
  minBlockX(): number;
  minBlockY(): number;
  minBlockZ(): number;
  offset(arg0: number, arg1: number, arg2: number): SectionPos;
  offset(arg0: number, arg1: number, arg2: number): Vec3i;
  origin(): BlockPos;
  relativeToBlockPos(arg0: number): BlockPos;
  relativeToBlockX(arg0: number): number;
  relativeToBlockY(arg0: number): number;
  relativeToBlockZ(arg0: number): number;
  x(): number;
  y(): number;
  z(): number;
}
export type SectionPos = SectionPosMembers & Vec3i;
export interface SectionPosStatics {
  readonly SECTION_BITS: 4;
  readonly SECTION_HALF_SIZE: 8;
  readonly SECTION_MASK: 15;
  readonly SECTION_MAX_INDEX: 15;
  readonly SECTION_SIZE: 16;
  aroundAndAtBlockPos(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongConsumer">): void;
  aroundAndAtBlockPos(arg0: bigint, arg1: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongConsumer">): void;
  aroundAndAtBlockPos(arg0: BlockPos, arg1: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongConsumer">): void;
  aroundChunk(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number, arg2: number, arg3: number): JavaOpaque<"java.util.stream.Stream", [SectionPos]>;
  asLong(arg0: number, arg1: number, arg2: number): bigint;
  asLong(arg0: BlockPos): bigint;
  betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): JavaOpaque<"java.util.stream.Stream", [SectionPos]>;
  blockPosAsSectionLong(arg0: number, arg1: number, arg2: number): bigint;
  blockToSection(arg0: bigint): bigint;
  blockToSectionCoord(arg0: number): number;
  blockToSectionCoord(arg0: number): number;
  bottomOf(arg0: j_net_minecraft_world_level_chunk.ChunkAccess): SectionPos;
  cube(arg0: SectionPos, arg1: number): JavaOpaque<"java.util.stream.Stream", [SectionPos]>;
  getAdjacentFromBlockPos(arg0: number, arg1: number, arg2: number, arg3: Direction): bigint;
  getAdjacentFromSectionPos(arg0: number, arg1: number, arg2: number, arg3: Direction): bigint;
  getZeroNode(arg0: number, arg1: number): bigint;
  getZeroNode(arg0: bigint): bigint;
  of(arg0: number, arg1: number, arg2: number): SectionPos;
  of(arg0: bigint): SectionPos;
  of(arg0: BlockPos): SectionPos;
  of(arg0: Position): SectionPos;
  of(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): SectionPos;
  of(arg0: j_net_minecraft_world_level_entity.EntityAccess): SectionPos;
  offset(arg0: bigint, arg1: number, arg2: number, arg3: number): bigint;
  offset(arg0: bigint, arg1: Direction): bigint;
  posToSectionCoord(arg0: number): number;
  sectionRelative(arg0: number): number;
  sectionRelativePos(arg0: BlockPos): number;
  sectionRelativeX(arg0: number): number;
  sectionRelativeY(arg0: number): number;
  sectionRelativeZ(arg0: number): number;
  sectionToBlockCoord(arg0: number): number;
  sectionToBlockCoord(arg0: number, arg1: number): number;
  sectionToChunk(arg0: bigint): bigint;
  x(arg0: bigint): number;
  y(arg0: bigint): number;
  z(arg0: bigint): number;
}

/** JVM class net.minecraft.core.UUIDUtil. */
export interface UUIDUtilMembers {
}
export type UUIDUtil = UUIDUtilMembers;
export interface UUIDUtilStatics {
  readonly AUTHLIB_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.util.UUID">]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.util.UUID">]>;
  readonly CODEC_LINKED_SET: JavaOpaque<"com.mojang.serialization.Codec", [JavaSet<JavaOpaque<"java.util.UUID">>]>;
  readonly CODEC_SET: JavaOpaque<"com.mojang.serialization.Codec", [JavaSet<JavaOpaque<"java.util.UUID">>]>;
  readonly LENIENT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.util.UUID">]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"java.util.UUID">>;
  readonly STRING_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.util.UUID">]>;
  readonly UUID_BYTES: 16;
  createOfflinePlayerUUID(arg0: string): JavaOpaque<"java.util.UUID">;
  createOfflineProfile(arg0: string): JavaOpaque<"com.mojang.authlib.GameProfile">;
  readUUID(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"java.util.UUID">;
  uuidFromIntArray(arg0: Array<number>): JavaOpaque<"java.util.UUID">;
  uuidToByteArray(arg0: JavaOpaque<"java.util.UUID">): Array<number>;
  uuidToIntArray(arg0: JavaOpaque<"java.util.UUID">): Array<number>;
}

/** JVM class net.minecraft.core.Vec3i. */
export interface Vec3iMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [Vec3i]>];
  above(): Vec3i;
  above(arg0: number): Vec3i;
  below(): Vec3i;
  below(arg0: number): Vec3i;
  closerThan(arg0: Vec3i, arg1: number): boolean;
  closerToCenterThan(arg0: Position, arg1: number): boolean;
  compareTo(arg0: object): number;
  compareTo(arg0: Vec3i): number;
  cross(arg0: Vec3i): Vec3i;
  distChessboard(arg0: Vec3i): number;
  distManhattan(arg0: Vec3i): number;
  distSqr(arg0: Vec3i): number;
  distToCenterSqr(arg0: number, arg1: number, arg2: number): number;
  distToCenterSqr(arg0: Position): number;
  distToLowCornerSqr(arg0: number, arg1: number, arg2: number): number;
  east(): Vec3i;
  east(arg0: number): Vec3i;
  equals(arg0: object): boolean;
  get(arg0: Direction_Axis): number;
  getX(): number;
  getY(): number;
  getZ(): number;
  hashCode(): number;
  isInsideBuildHeightAndWorldBoundsHorizontal(arg0: j_net_minecraft_world_level.LevelHeightAccessor): boolean;
  multiply(arg0: number): Vec3i;
  north(): Vec3i;
  north(arg0: number): Vec3i;
  offset(arg0: number, arg1: number, arg2: number): Vec3i;
  offset(arg0: Vec3i): Vec3i;
  relative(arg0: Direction_Axis, arg1: number): Vec3i;
  relative(arg0: Direction): Vec3i;
  relative(arg0: Direction, arg1: number): Vec3i;
  setX(arg0: number): Vec3i;
  setY(arg0: number): Vec3i;
  setZ(arg0: number): Vec3i;
  south(): Vec3i;
  south(arg0: number): Vec3i;
  subtract(arg0: Vec3i): Vec3i;
  toShortString(): string;
  toString(): string;
  west(): Vec3i;
  west(arg0: number): Vec3i;
  x: number;
  y: number;
  z: number;
}
export type Vec3i = Vec3iMembers;
export interface Vec3iStatics {
  new(arg0: number, arg1: number, arg2: number): Vec3i;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Vec3i]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Vec3i>;
  readonly ZERO: Vec3i;
  offsetCodec(arg0: number): JavaOpaque<"com.mojang.serialization.Codec", [Vec3i]>;
}

/** JVM interface net.minecraft.core.WritableRegistry. */
export interface WritableRegistryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Registry<T>];
  bindTag(arg0: j_net_minecraft_tags.TagKey<T>, arg1: JavaList<Holder<T>>): void;
  createRegistrationLookup(): HolderGetter<T>;
  isEmpty(): boolean;
  register(arg0: j_net_minecraft_resources.ResourceKey<T>, arg1: T, arg2: RegistrationInfo): Holder_Reference<T>;
}
export type WritableRegistry<T = unknown> = WritableRegistryMembers<T> & Registry<T>;
export interface WritableRegistryStatics {
}
