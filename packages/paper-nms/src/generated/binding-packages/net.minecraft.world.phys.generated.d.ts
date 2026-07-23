// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** JVM class net.minecraft.world.phys.AABB. */
export interface AABBMembers {
  clip(arg0: Vec3, arg1: Vec3): JavaOptional<Vec3>;
  collidedAlongVector(arg0: Vec3, arg1: JavaList<AABB>): boolean;
  contains(arg0: number, arg1: number, arg2: number): boolean;
  contains(arg0: Vec3): boolean;
  contract(arg0: number, arg1: number, arg2: number): AABB;
  deflate(arg0: number): AABB;
  deflate(arg0: number, arg1: number, arg2: number): AABB;
  distanceToSqr(arg0: AABB): number;
  distanceToSqr(arg0: Vec3): number;
  equals(arg0: object): boolean;
  expandTowards(arg0: number, arg1: number, arg2: number): AABB;
  expandTowards(arg0: Vec3): AABB;
  getBottomCenter(): Vec3;
  getCenter(): Vec3;
  getMaxPosition(): Vec3;
  getMinPosition(): Vec3;
  getSize(): number;
  getXsize(): number;
  getYsize(): number;
  getZsize(): number;
  hasNaN(): boolean;
  hashCode(): number;
  inflate(arg0: number): AABB;
  inflate(arg0: number, arg1: number, arg2: number): AABB;
  intersect(arg0: AABB): AABB;
  intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
  intersects(arg0: j_net_minecraft_core.BlockPos): boolean;
  intersects(arg0: AABB): boolean;
  intersects(arg0: Vec3, arg1: Vec3): boolean;
  max(arg0: j_net_minecraft_core.Direction_Axis): number;
  readonly maxX: number;
  readonly maxY: number;
  readonly maxZ: number;
  min(arg0: j_net_minecraft_core.Direction_Axis): number;
  readonly minX: number;
  readonly minY: number;
  readonly minZ: number;
  minmax(arg0: AABB): AABB;
  move(arg0: number, arg1: number, arg2: number): AABB;
  move(arg0: j_net_minecraft_core.BlockPos): AABB;
  move(arg0: Vec3): AABB;
  move(arg0: JavaOpaque<"org.joml.Vector3f">): AABB;
  setMaxX(arg0: number): AABB;
  setMaxY(arg0: number): AABB;
  setMaxZ(arg0: number): AABB;
  setMinX(arg0: number): AABB;
  setMinY(arg0: number): AABB;
  setMinZ(arg0: number): AABB;
  toString(): string;
}
export type AABB = AABBMembers;
export interface AABBStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): AABB;
  new(arg0: j_net_minecraft_core.BlockPos): AABB;
  new(arg0: Vec3, arg1: Vec3): AABB;
  clip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Vec3, arg7: Vec3): JavaOptional<Vec3>;
  clip(arg0: Iterable<AABB>, arg1: Vec3, arg2: Vec3, arg3: j_net_minecraft_core.BlockPos): BlockHitResult | null;
  encapsulatingFullBlocks(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos): AABB;
  getDirection(arg0: AABB, arg1: Vec3, arg2: Array<number>, arg3: j_net_minecraft_core.Direction | null, arg4: number, arg5: number, arg6: number): j_net_minecraft_core.Direction | null;
  of(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox): AABB;
  ofSize(arg0: Vec3, arg1: number, arg2: number, arg3: number): AABB;
  unitCubeFromLowerCorner(arg0: Vec3): AABB;
}

/** JVM class net.minecraft.world.phys.AABB$Builder. */
export interface AABB_BuilderMembers {
  build(): AABB;
  include(arg0: JavaOpaque<"org.joml.Vector3fc">): void;
}
export type AABB_Builder = AABB_BuilderMembers;
export interface AABB_BuilderStatics {
  new(): AABB_Builder;
}

/** JVM class net.minecraft.world.phys.BlockHitResult. */
export interface BlockHitResultMembers {
  readonly __javaSupertypes?: readonly [HitResult];
  getBlockPos(): j_net_minecraft_core.BlockPos;
  getDirection(): j_net_minecraft_core.Direction;
  getType(): HitResult_Type;
  hitBorder(): BlockHitResult;
  isInside(): boolean;
  isWorldBorderHit(): boolean;
  withDirection(arg0: j_net_minecraft_core.Direction): BlockHitResult;
  withPosition(arg0: j_net_minecraft_core.BlockPos): BlockHitResult;
}
export type BlockHitResult = BlockHitResultMembers & HitResult;
export interface BlockHitResultStatics {
  new(arg0: Vec3, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): BlockHitResult;
  new(arg0: Vec3, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.BlockPos, arg3: boolean, arg4: boolean): BlockHitResult;
  miss(arg0: Vec3, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.BlockPos): BlockHitResult;
}

/** JVM class net.minecraft.world.phys.EntityHitResult. */
export interface EntityHitResultMembers {
  readonly __javaSupertypes?: readonly [HitResult];
  getEntity(): j_net_minecraft_world_entity.Entity;
  getType(): HitResult_Type;
}
export type EntityHitResult = EntityHitResultMembers & HitResult;
export interface EntityHitResultStatics {
  new(arg0: j_net_minecraft_world_entity.Entity): EntityHitResult;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: Vec3): EntityHitResult;
}

/** JVM abstract net.minecraft.world.phys.HitResult. */
export interface HitResultMembers {
  distanceTo(arg0: j_net_minecraft_world_entity.Entity): number;
  getLocation(): Vec3;
  getType(): HitResult_Type;
  readonly location: Vec3;
}
export type HitResult = HitResultMembers;
export interface HitResultStatics {
  new(arg0: Vec3): HitResult;
}

/** Live JVM enum net.minecraft.world.phys.HitResult$Type; constants are host handles, not strings. */
export type HitResult_Type = JavaEnum<"net.minecraft.world.phys.HitResult$Type", "BLOCK" | "ENTITY" | "MISS"> & HitResult_TypeMembers;
export interface HitResult_TypeMembers {
}
export interface HitResult_TypeStatics {
  readonly BLOCK: HitResult_Type;
  readonly ENTITY: HitResult_Type;
  readonly MISS: HitResult_Type;
  valueOf(arg0: string): HitResult_Type;
  values(): Array<HitResult_Type>;
}

/** JVM class net.minecraft.world.phys.Vec2. */
export interface Vec2Members {
  add(arg0: number): Vec2;
  add(arg0: Vec2): Vec2;
  distanceToSqr(arg0: Vec2): number;
  dot(arg0: Vec2): number;
  equals(arg0: Vec2): boolean;
  length(): number;
  lengthSquared(): number;
  negated(): Vec2;
  normalized(): Vec2;
  scale(arg0: number): Vec2;
  readonly x: number;
  readonly y: number;
}
export type Vec2 = Vec2Members;
export interface Vec2Statics {
  new(arg0: number, arg1: number): Vec2;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Vec2]>;
  readonly MAX: Vec2;
  readonly MIN: Vec2;
  readonly NEG_UNIT_X: Vec2;
  readonly NEG_UNIT_Y: Vec2;
  readonly ONE: Vec2;
  readonly UNIT_X: Vec2;
  readonly UNIT_Y: Vec2;
  readonly ZERO: Vec2;
}

/** JVM class net.minecraft.world.phys.Vec3. */
export interface Vec3Members {
  readonly __javaSupertypes?: readonly [j_net_minecraft_core.Position];
  add(arg0: number): Vec3;
  add(arg0: number, arg1: number, arg2: number): Vec3;
  add(arg0: Vec3): Vec3;
  align(arg0: JavaOpaque<"java.util.EnumSet", [j_net_minecraft_core.Direction_Axis]>): Vec3;
  closerThan(arg0: j_net_minecraft_core.Position, arg1: number): boolean;
  closerThan(arg0: Vec3, arg1: number, arg2: number): boolean;
  cross(arg0: Vec3): Vec3;
  distanceTo(arg0: Vec3): number;
  distanceToSqr(arg0: number, arg1: number, arg2: number): number;
  distanceToSqr(arg0: Vec3): number;
  dot(arg0: Vec3): number;
  equals(arg0: object): boolean;
  get(arg0: j_net_minecraft_core.Direction_Axis): number;
  hashCode(): number;
  horizontal(): Vec3;
  horizontalDistance(): number;
  horizontalDistanceSqr(): number;
  length(): number;
  lengthSqr(): number;
  lerp(arg0: Vec3, arg1: number): Vec3;
  multiply(arg0: number, arg1: number, arg2: number): Vec3;
  multiply(arg0: Vec3): Vec3;
  normalize(): Vec3;
  offsetRandom(arg0: j_net_minecraft_util.RandomSource, arg1: number): Vec3;
  projectedOn(arg0: Vec3): Vec3;
  relative(arg0: j_net_minecraft_core.Direction, arg1: number): Vec3;
  reverse(): Vec3;
  rotateClockwise90(): Vec3;
  scale(arg0: number): Vec3;
  subtract(arg0: number): Vec3;
  subtract(arg0: number, arg1: number, arg2: number): Vec3;
  subtract(arg0: Vec3): Vec3;
  toString(): string;
  toVector3f(): JavaOpaque<"org.joml.Vector3f">;
  vectorTo(arg0: Vec3): Vec3;
  with(arg0: j_net_minecraft_core.Direction_Axis, arg1: number): Vec3;
  readonly x: (number) & { (): number };
  xRot(arg0: number): Vec3;
  readonly y: (number) & { (): number };
  yRot(arg0: number): Vec3;
  readonly z: (number) & { (): number };
  zRot(arg0: number): Vec3;
}
export type Vec3 = Vec3Members & j_net_minecraft_core.Position;
export interface Vec3Statics {
  new(arg0: number, arg1: number, arg2: number): Vec3;
  new(arg0: j_net_minecraft_core.Vec3i): Vec3;
  new(arg0: JavaOpaque<"org.joml.Vector3f">): Vec3;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Vec3]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Vec3>;
  readonly ZERO: Vec3;
  atBottomCenterOf(arg0: j_net_minecraft_core.Vec3i): Vec3;
  atCenterOf(arg0: j_net_minecraft_core.Vec3i): Vec3;
  atLowerCornerOf(arg0: j_net_minecraft_core.Vec3i): Vec3;
  atLowerCornerWithOffset(arg0: j_net_minecraft_core.Vec3i, arg1: number, arg2: number, arg3: number): Vec3;
  directionFromRotation(arg0: number, arg1: number): Vec3;
  directionFromRotation(arg0: Vec2): Vec3;
  fromRGB24(arg0: number): Vec3;
  upFromBottomCenterOf(arg0: j_net_minecraft_core.Vec3i, arg1: number): Vec3;
}
