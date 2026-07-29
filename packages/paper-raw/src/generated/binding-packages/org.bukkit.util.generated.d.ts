// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_generator from './org.bukkit.generator.generated.js';
import type * as j_org_bukkit_generator_structure from './org.bukkit.generator.structure.generated.js';

/** JVM interface org.bukkit.util.BiomeSearchResult. */
export interface BiomeSearchResultMembers {
  getBiome(): j_org_bukkit_block.Biome;
  getLocation(): j_org_bukkit.Location;
}
export type BiomeSearchResult = BiomeSearchResultMembers;
export interface BiomeSearchResultStatics {
}

/** JVM class org.bukkit.util.BlockIterator. */
export interface BlockIteratorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Iterator", [j_org_bukkit_block.Block]>];
  hasNext(): boolean;
  /** @throws java.util.NoSuchElementException */
  next(): j_org_bukkit_block.Block;
  remove(): void;
}
export type BlockIterator = BlockIteratorMembers & JavaOpaque<"java.util.Iterator", [j_org_bukkit_block.Block]>;
export interface BlockIteratorStatics {
  new(arg0: j_org_bukkit.Location): BlockIterator;
  new(arg0: j_org_bukkit.Location, arg1: number): BlockIterator;
  new(arg0: j_org_bukkit.Location, arg1: number, arg2: number): BlockIterator;
  new(arg0: j_org_bukkit.World, arg1: Vector, arg2: Vector, arg3: number, arg4: number): BlockIterator;
  new(arg0: j_org_bukkit_entity.LivingEntity): BlockIterator;
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: number): BlockIterator;
}

/** JVM interface org.bukkit.util.BlockTransformer. */
export interface BlockTransformerMembers {
  transform(arg0: j_org_bukkit_generator.LimitedRegion, arg1: number, arg2: number, arg3: number, arg4: j_org_bukkit_block.BlockState, arg5: BlockTransformer_TransformationState): j_org_bukkit_block.BlockState;
}
export type BlockTransformer = BlockTransformerMembers;
export interface BlockTransformerStatics {
}

/** JVM interface org.bukkit.util.BlockTransformer$TransformationState. */
export interface BlockTransformer_TransformationStateMembers {
  getOriginal(): j_org_bukkit_block.BlockState;
  getWorld(): j_org_bukkit_block.BlockState;
}
export type BlockTransformer_TransformationState = BlockTransformer_TransformationStateMembers;
export interface BlockTransformer_TransformationStateStatics {
}

/** JVM class org.bukkit.util.BlockVector. */
export interface BlockVectorMembers {
  readonly __javaSupertypes?: readonly [Vector];
  clone(): BlockVector;
  equals(arg0: object): boolean;
  hashCode(): number;
}
export type BlockVector = BlockVectorMembers & Vector;
export interface BlockVectorStatics {
  new(): BlockVector;
  new(arg0: number, arg1: number, arg2: number): BlockVector;
  new(arg0: number, arg1: number, arg2: number): BlockVector;
  new(arg0: number, arg1: number, arg2: number): BlockVector;
  new(arg0: Vector): BlockVector;
  deserialize(arg0: JavaMap<string, object>): BlockVector;
}

/** JVM class org.bukkit.util.BoundingBox. */
export interface BoundingBoxMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">, j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  clone(): BoundingBox;
  contains(arg0: number, arg1: number, arg2: number): boolean;
  contains(arg0: BoundingBox): boolean;
  contains(arg0: Vector): boolean;
  contains(arg0: Vector, arg1: Vector): boolean;
  copy(arg0: BoundingBox): BoundingBox;
  equals(arg0: object): boolean;
  expand(arg0: number): BoundingBox;
  expand(arg0: number, arg1: number, arg2: number): BoundingBox;
  expand(arg0: number, arg1: number, arg2: number, arg3: number): BoundingBox;
  expand(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox;
  expand(arg0: j_org_bukkit_block.BlockFace, arg1: number): BoundingBox;
  expand(arg0: Vector): BoundingBox;
  expand(arg0: Vector, arg1: number): BoundingBox;
  expandDirectional(arg0: number, arg1: number, arg2: number): BoundingBox;
  expandDirectional(arg0: Vector): BoundingBox;
  getCenter(): Vector;
  getCenterX(): number;
  getCenterY(): number;
  getCenterZ(): number;
  getHeight(): number;
  getMax(): Vector;
  getMaxX(): number;
  getMaxY(): number;
  getMaxZ(): number;
  getMin(): Vector;
  getMinX(): number;
  getMinY(): number;
  getMinZ(): number;
  getVolume(): number;
  getWidthX(): number;
  getWidthZ(): number;
  hashCode(): number;
  intersection(arg0: BoundingBox): BoundingBox;
  overlaps(arg0: BoundingBox): boolean;
  overlaps(arg0: Vector, arg1: Vector): boolean;
  rayTrace(arg0: Vector, arg1: Vector, arg2: number): RayTraceResult | null;
  resize(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox;
  serialize(): JavaMap<string, object>;
  shift(arg0: number, arg1: number, arg2: number): BoundingBox;
  shift(arg0: j_org_bukkit.Location): BoundingBox;
  shift(arg0: Vector): BoundingBox;
  toString(): string;
  union(arg0: number, arg1: number, arg2: number): BoundingBox;
  union(arg0: j_org_bukkit.Location): BoundingBox;
  union(arg0: BoundingBox): BoundingBox;
  union(arg0: Vector): BoundingBox;
}
export type BoundingBox = BoundingBoxMembers & JavaOpaque<"java.lang.Cloneable"> & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface BoundingBoxStatics {
  new(): BoundingBox;
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox;
  deserialize(arg0: JavaMap<string, object>): BoundingBox;
  of(arg0: j_org_bukkit.Location, arg1: number, arg2: number, arg3: number): BoundingBox;
  of(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Location): BoundingBox;
  of(arg0: j_org_bukkit_block.Block): BoundingBox;
  of(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.Block): BoundingBox;
  of(arg0: Vector, arg1: number, arg2: number, arg3: number): BoundingBox;
  of(arg0: Vector, arg1: Vector): BoundingBox;
}

/** JVM interface org.bukkit.util.CachedServerIcon. */
export interface CachedServerIconMembers {
  getData(): string | null;
  isEmpty(): boolean;
}
export type CachedServerIcon = CachedServerIconMembers;
export interface CachedServerIconStatics {
}

/** JVM class org.bukkit.util.ChatPaginator. */
export interface ChatPaginatorMembers {
}
export type ChatPaginator = ChatPaginatorMembers;
export interface ChatPaginatorStatics {
  new(): ChatPaginator;
  readonly AVERAGE_CHAT_PAGE_WIDTH: 65;
  readonly CLOSED_CHAT_PAGE_HEIGHT: 10;
  readonly GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: 55;
  readonly OPEN_CHAT_PAGE_HEIGHT: 20;
  readonly UNBOUNDED_PAGE_HEIGHT: 2147483647;
  readonly UNBOUNDED_PAGE_WIDTH: 2147483647;
  paginate(arg0: string | null, arg1: number): ChatPaginator_ChatPage;
  paginate(arg0: string | null, arg1: number, arg2: number, arg3: number): ChatPaginator_ChatPage;
  wordWrap(arg0: string | null, arg1: number): Array<string>;
}

/** JVM class org.bukkit.util.ChatPaginator$ChatPage. */
export interface ChatPaginator_ChatPageMembers {
  getLines(): Array<string>;
  getPageNumber(): number;
  getTotalPages(): number;
}
export type ChatPaginator_ChatPage = ChatPaginator_ChatPageMembers;
export interface ChatPaginator_ChatPageStatics {
  new(arg0: Array<string>, arg1: number, arg2: number): ChatPaginator_ChatPage;
}

/** JVM interface org.bukkit.util.Consumer. */
export interface ConsumerMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaConsumer<T>];
  accept(arg0: T): void;
}
export type Consumer<T = unknown> = ConsumerMembers<T> & JavaConsumer<T>;
export interface ConsumerStatics {
}

/** JVM interface org.bukkit.util.EntityTransformer. */
export interface EntityTransformerMembers {
  transform(arg0: j_org_bukkit_generator.LimitedRegion, arg1: number, arg2: number, arg3: number, arg4: j_org_bukkit_entity.Entity, arg5: boolean): boolean;
}
export type EntityTransformer = EntityTransformerMembers;
export interface EntityTransformerStatics {
}

/** JVM class org.bukkit.util.EulerAngle. */
export interface EulerAngleMembers {
  add(arg0: number, arg1: number, arg2: number): EulerAngle;
  equals(arg0: object): boolean;
  getX(): number;
  getY(): number;
  getZ(): number;
  hashCode(): number;
  setX(arg0: number): EulerAngle;
  setY(arg0: number): EulerAngle;
  setZ(arg0: number): EulerAngle;
  subtract(arg0: number, arg1: number, arg2: number): EulerAngle;
}
export type EulerAngle = EulerAngleMembers;
export interface EulerAngleStatics {
  new(arg0: number, arg1: number, arg2: number): EulerAngle;
  readonly ZERO: EulerAngle;
}

/** JVM class org.bukkit.util.FileUtil. */
export interface FileUtilMembers {
}
export type FileUtil = FileUtilMembers;
export interface FileUtilStatics {
  new(): FileUtil;
  copy(arg0: JavaOpaque<"java.io.File">, arg1: JavaOpaque<"java.io.File">): boolean;
}

/** JVM class org.bukkit.util.NumberConversions. */
export interface NumberConversionsMembers {
}
export type NumberConversions = NumberConversionsMembers;
export interface NumberConversionsStatics {
  ceil(arg0: number): number;
  checkFinite(arg0: number, arg1: string): void;
  checkFinite(arg0: number, arg1: string): void;
  floor(arg0: number): number;
  isFinite(arg0: number): boolean;
  isFinite(arg0: number): boolean;
  round(arg0: number): number;
  square(arg0: number): number;
  toByte(arg0: object | null): number;
  toDouble(arg0: object | null): number;
  toFloat(arg0: object | null): number;
  toInt(arg0: object | null): number;
  toLong(arg0: object | null): bigint;
  toShort(arg0: object | null): number;
}

/** JVM interface org.bukkit.util.OldEnum. */
export interface OldEnumMembers<T /* extends OldEnum<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [T]>];
  compareTo(arg0: T): number;
  name(): string;
  ordinal(): number;
}
export type OldEnum<T /* extends OldEnum<T> */ = unknown> = OldEnumMembers<T> & JavaOpaque<"java.lang.Comparable", [T]>;
export interface OldEnumStatics {
}

/** JVM class org.bukkit.util.RayTraceResult. */
export interface RayTraceResultMembers {
  equals(arg0: object): boolean;
  getHitBlock(): j_org_bukkit_block.Block | null;
  getHitBlockFace(): j_org_bukkit_block.BlockFace | null;
  getHitEntity(): j_org_bukkit_entity.Entity | null;
  getHitPosition(): Vector;
  hashCode(): number;
  toString(): string;
}
export type RayTraceResult = RayTraceResultMembers;
export interface RayTraceResultStatics {
  new(arg0: Vector): RayTraceResult;
  new(arg0: Vector, arg1: j_org_bukkit_block.Block | null, arg2: j_org_bukkit_block.BlockFace | null): RayTraceResult;
  new(arg0: Vector, arg1: j_org_bukkit_block.BlockFace | null): RayTraceResult;
  new(arg0: Vector, arg1: j_org_bukkit_entity.Entity | null): RayTraceResult;
  new(arg0: Vector, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_block.BlockFace | null): RayTraceResult;
}

/** JVM class org.bukkit.util.StringUtil. */
export interface StringUtilMembers {
}
export type StringUtil = StringUtilMembers;
export interface StringUtilStatics {
  new(): StringUtil;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.UnsupportedOperationException */
  copyPartialMatches<T /* extends JavaCollection<string> */>(arg0: string, arg1: Iterable<string>, arg2: T): T;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.NullPointerException */
  startsWithIgnoreCase(arg0: string, arg1: string): boolean;
}

/** JVM interface org.bukkit.util.StructureSearchResult. */
export interface StructureSearchResultMembers {
  getLocation(): j_org_bukkit.Location;
  getStructure(): j_org_bukkit_generator_structure.Structure_2;
}
export type StructureSearchResult = StructureSearchResultMembers;
export interface StructureSearchResultStatics {
}

/** JVM class org.bukkit.util.Transformation. */
export interface TransformationMembers {
  equals(arg0: object): boolean;
  getLeftRotation(): JavaOpaque<"org.joml.Quaternionf">;
  getRightRotation(): JavaOpaque<"org.joml.Quaternionf">;
  getScale(): JavaOpaque<"org.joml.Vector3f">;
  getTranslation(): JavaOpaque<"org.joml.Vector3f">;
  hashCode(): number;
  toString(): string;
}
export type Transformation = TransformationMembers;
export interface TransformationStatics {
  new(arg0: JavaOpaque<"org.joml.Vector3f">, arg1: JavaOpaque<"org.joml.AxisAngle4f">, arg2: JavaOpaque<"org.joml.Vector3f">, arg3: JavaOpaque<"org.joml.AxisAngle4f">): Transformation;
  new(arg0: JavaOpaque<"org.joml.Vector3f">, arg1: JavaOpaque<"org.joml.Quaternionf">, arg2: JavaOpaque<"org.joml.Vector3f">, arg3: JavaOpaque<"org.joml.Quaternionf">): Transformation;
}

/** JVM class org.bukkit.util.Vector. */
export interface VectorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">, j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  add(arg0: Vector): Vector;
  angle(arg0: Vector): number;
  /** @throws java.lang.IllegalArgumentException */
  checkFinite(): void;
  clone(): Vector;
  copy(arg0: Vector): Vector;
  crossProduct(arg0: Vector): Vector;
  distance(arg0: Vector): number;
  distanceSquared(arg0: Vector): number;
  divide(arg0: Vector): Vector;
  dot(arg0: Vector): number;
  equals(arg0: object): boolean;
  getBlockX(): number;
  getBlockY(): number;
  getBlockZ(): number;
  getCrossProduct(arg0: Vector): Vector;
  getMidpoint(arg0: Vector): Vector;
  getX(): number;
  getY(): number;
  getZ(): number;
  hashCode(): number;
  isInAABB(arg0: Vector, arg1: Vector): boolean;
  isInSphere(arg0: Vector, arg1: number): boolean;
  isNormalized(): boolean;
  isZero(): boolean;
  length(): number;
  lengthSquared(): number;
  midpoint(arg0: Vector): Vector;
  multiply(arg0: number): Vector;
  multiply(arg0: number): Vector;
  multiply(arg0: number): Vector;
  multiply(arg0: Vector): Vector;
  normalize(): Vector;
  /** @throws java.lang.IllegalArgumentException */
  rotateAroundAxis(arg0: Vector, arg1: number): Vector;
  /** @throws java.lang.IllegalArgumentException */
  rotateAroundNonUnitAxis(arg0: Vector, arg1: number): Vector;
  rotateAroundX(arg0: number): Vector;
  rotateAroundY(arg0: number): Vector;
  rotateAroundZ(arg0: number): Vector;
  serialize(): JavaMap<string, object>;
  setX(arg0: number): Vector;
  setX(arg0: number): Vector;
  setX(arg0: number): Vector;
  setY(arg0: number): Vector;
  setY(arg0: number): Vector;
  setY(arg0: number): Vector;
  setZ(arg0: number): Vector;
  setZ(arg0: number): Vector;
  setZ(arg0: number): Vector;
  subtract(arg0: Vector): Vector;
  toBlockVector(): BlockVector;
  toLocation(arg0: j_org_bukkit.World): j_org_bukkit.Location;
  toLocation(arg0: j_org_bukkit.World, arg1: number, arg2: number): j_org_bukkit.Location;
  toString(): string;
  toVector3d(): JavaOpaque<"org.joml.Vector3d">;
  toVector3f(): JavaOpaque<"org.joml.Vector3f">;
  toVector3i(): JavaOpaque<"org.joml.Vector3i">;
  toVector3i(arg0: number): JavaOpaque<"org.joml.Vector3i">;
  zero(): Vector;
}
export type Vector = VectorMembers & JavaOpaque<"java.lang.Cloneable"> & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface VectorStatics {
  new(): Vector;
  new(arg0: number, arg1: number, arg2: number): Vector;
  new(arg0: number, arg1: number, arg2: number): Vector;
  new(arg0: number, arg1: number, arg2: number): Vector;
  deserialize(arg0: JavaMap<string, object>): Vector;
  fromJOML(arg0: JavaOpaque<"org.joml.Vector3d">): Vector;
  fromJOML(arg0: JavaOpaque<"org.joml.Vector3dc">): Vector;
  fromJOML(arg0: JavaOpaque<"org.joml.Vector3f">): Vector;
  fromJOML(arg0: JavaOpaque<"org.joml.Vector3fc">): Vector;
  fromJOML(arg0: JavaOpaque<"org.joml.Vector3i">): Vector;
  fromJOML(arg0: JavaOpaque<"org.joml.Vector3ic">): Vector;
  getEpsilon(): number;
  getMaximum(arg0: Vector, arg1: Vector): Vector;
  getMinimum(arg0: Vector, arg1: Vector): Vector;
  getRandom(): Vector;
}

/** JVM interface org.bukkit.util.VoxelShape. */
export interface VoxelShapeMembers {
  getBoundingBoxes(): JavaCollection<BoundingBox>;
  overlaps(arg0: BoundingBox): boolean;
}
export type VoxelShape = VoxelShapeMembers;
export interface VoxelShapeStatics {
}
