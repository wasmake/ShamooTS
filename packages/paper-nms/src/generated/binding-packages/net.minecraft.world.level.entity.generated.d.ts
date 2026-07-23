// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.level.entity.ChunkEntities. */
export interface ChunkEntitiesMembers<T = unknown> {
  getEntities(): JavaOpaque<"java.util.stream.Stream", [T]>;
  getPos(): j_net_minecraft_world_level.ChunkPos;
  isEmpty(): boolean;
}
export type ChunkEntities<T = unknown> = ChunkEntitiesMembers<T>;
export interface ChunkEntitiesStatics {
  new<T>(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaList<T>): ChunkEntities<T>;
}

/** JVM interface net.minecraft.world.level.entity.ChunkStatusUpdateListener. */
export interface ChunkStatusUpdateListenerMembers {
  onChunkStatusChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_server_level.FullChunkStatus): void;
}
export type ChunkStatusUpdateListener = ChunkStatusUpdateListenerMembers;
export interface ChunkStatusUpdateListenerStatics {
}

/** JVM interface net.minecraft.world.level.entity.EntityAccess. */
export interface EntityAccessMembers {
  readonly __javaSupertypes?: readonly [UniquelyIdentifyable];
  blockPosition(): j_net_minecraft_core.BlockPos;
  getBoundingBox(): j_net_minecraft_world_phys.AABB;
  getId(): number;
  getPassengersAndSelf(): JavaOpaque<"java.util.stream.Stream", [EntityAccess]>;
  getSelfAndPassengers(): JavaOpaque<"java.util.stream.Stream", [EntityAccess]>;
  isAlwaysTicking(): boolean;
  setLevelCallback(arg0: EntityInLevelCallback): void;
  setRemoved(arg0: j_net_minecraft_world_entity.Entity_RemovalReason): void;
  setRemoved(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  shouldBeSaved(): boolean;
}
export type EntityAccess = EntityAccessMembers & UniquelyIdentifyable;
export interface EntityAccessStatics {
}

/** JVM interface net.minecraft.world.level.entity.EntityInLevelCallback. */
export interface EntityInLevelCallbackMembers {
  onMove(): void;
  onRemove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason): void;
}
export type EntityInLevelCallback = EntityInLevelCallbackMembers;
export interface EntityInLevelCallbackStatics {
  readonly NULL: EntityInLevelCallback;
}

/** JVM class net.minecraft.world.level.entity.EntityLookup. */
export interface EntityLookupMembers<T /* extends EntityAccess */ = unknown> {
  add(arg0: T): void;
  count(): number;
  getAllEntities(): Iterable<T>;
  getEntities<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_util.AbortableIterationConsumer<U>): void;
  getEntity(arg0: number): T | null;
  getEntity(arg0: JavaOpaque<"java.util.UUID">): T | null;
  remove(arg0: T): void;
}
export type EntityLookup<T /* extends EntityAccess */ = unknown> = EntityLookupMembers<T>;
export interface EntityLookupStatics {
  new<T /* extends EntityAccess */>(): EntityLookup<T>;
}

/** JVM interface net.minecraft.world.level.entity.EntityPersistentStorage. */
export interface EntityPersistentStorageMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  /** @throws java.io.IOException */
  close(): void;
  flush(arg0: boolean): void;
  loadEntities(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<ChunkEntities<T>>;
  storeEntities(arg0: ChunkEntities<T>): void;
}
export type EntityPersistentStorage<T = unknown> = EntityPersistentStorageMembers<T> & JavaOpaque<"java.lang.AutoCloseable">;
export interface EntityPersistentStorageStatics {
}

/** JVM class net.minecraft.world.level.entity.EntitySection. */
export interface EntitySectionMembers<T /* extends EntityAccess */ = unknown> {
  add(arg0: T): void;
  getEntities(): JavaOpaque<"java.util.stream.Stream", [T]>;
  getEntities(arg0: JavaList<T>): void;
  getEntities<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_world_phys.AABB, arg2: j_net_minecraft_util.AbortableIterationConsumer<U>): j_net_minecraft_util.AbortableIterationConsumer_Continuation;
  getEntities(arg0: j_net_minecraft_world_phys.AABB, arg1: j_net_minecraft_util.AbortableIterationConsumer<T>): j_net_minecraft_util.AbortableIterationConsumer_Continuation;
  getStatus(): Visibility;
  isEmpty(): boolean;
  remove(arg0: T): boolean;
  size(): number;
  updateChunkStatus(arg0: Visibility): Visibility;
}
export type EntitySection<T /* extends EntityAccess */ = unknown> = EntitySectionMembers<T>;
export interface EntitySectionStatics {
  new<T /* extends EntityAccess */>(arg0: JavaClass<T>, arg1: Visibility): EntitySection<T>;
}

/** JVM class net.minecraft.world.level.entity.EntitySectionStorage. */
export interface EntitySectionStorageMembers<T /* extends EntityAccess */ = unknown> {
  count(): number;
  forEachAccessibleNonEmptySection(arg0: j_net_minecraft_world_phys.AABB, arg1: j_net_minecraft_util.AbortableIterationConsumer<EntitySection<T>>): void;
  getAllChunksWithExistingSections(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getAllEntities(): Iterable<T>;
  getEntities<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_world_phys.AABB, arg2: j_net_minecraft_util.AbortableIterationConsumer<U>): void;
  getEntities(arg0: j_net_minecraft_world_phys.AABB, arg1: j_net_minecraft_util.AbortableIterationConsumer<T>): void;
  getExistingSectionPositionsInChunk(arg0: bigint): JavaOpaque<"java.util.stream.LongStream">;
  getExistingSectionsInChunk(arg0: bigint): JavaOpaque<"java.util.stream.Stream", [EntitySection<T>]>;
  getOrCreateSection(arg0: bigint): EntitySection<T>;
  getSection(arg0: bigint): EntitySection<T> | null;
  remove(arg0: bigint): void;
}
export type EntitySectionStorage<T /* extends EntityAccess */ = unknown> = EntitySectionStorageMembers<T>;
export interface EntitySectionStorageStatics {
  new<T /* extends EntityAccess */>(arg0: JavaClass<T>, arg1: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectFunction", [Visibility]>): EntitySectionStorage<T>;
  readonly CHONKY_ENTITY_SEARCH_GRACE: 2;
  readonly MAX_NON_CHONKY_ENTITY_SIZE: 4;
}

/** JVM class net.minecraft.world.level.entity.EntityTickList. */
export interface EntityTickListMembers {
  add(arg0: j_net_minecraft_world_entity.Entity): void;
  contains(arg0: j_net_minecraft_world_entity.Entity): boolean;
  forEach(arg0: JavaConsumer<j_net_minecraft_world_entity.Entity>): void;
  remove(arg0: j_net_minecraft_world_entity.Entity): void;
}
export type EntityTickList = EntityTickListMembers;
export interface EntityTickListStatics {
  new(): EntityTickList;
}

/** JVM interface net.minecraft.world.level.entity.EntityTypeTest. */
export interface EntityTypeTestMembers<B = unknown, T /* extends B */ = unknown> {
  getBaseClass(): JavaClass<B>;
  tryCast(arg0: B): T | null;
}
export type EntityTypeTest<B = unknown, T /* extends B */ = unknown> = EntityTypeTestMembers<B, T>;
export interface EntityTypeTestStatics {
  forClass<B, T /* extends B */>(arg0: JavaClass<T>): EntityTypeTest<B, T>;
  forExactClass<B, T /* extends B */>(arg0: JavaClass<T>): EntityTypeTest<B, T>;
}

/** JVM interface net.minecraft.world.level.entity.LevelCallback. */
export interface LevelCallbackMembers<T = unknown> {
  onCreated(arg0: T): void;
  onDestroyed(arg0: T): void;
  onSectionChange(arg0: T): void;
  onTickingEnd(arg0: T): void;
  onTickingStart(arg0: T): void;
  onTrackingEnd(arg0: T): void;
  onTrackingStart(arg0: T): void;
}
export type LevelCallback<T = unknown> = LevelCallbackMembers<T>;
export interface LevelCallbackStatics {
}

/** JVM interface net.minecraft.world.level.entity.LevelEntityGetter. */
export interface LevelEntityGetterMembers<T /* extends EntityAccess */ = unknown> {
  get(arg0: number): T | null;
  get(arg0: JavaOpaque<"java.util.UUID">): T | null;
  get<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_util.AbortableIterationConsumer<U>): void;
  get<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_world_phys.AABB, arg2: j_net_minecraft_util.AbortableIterationConsumer<U>): void;
  get(arg0: j_net_minecraft_world_phys.AABB, arg1: JavaConsumer<T>): void;
  getAll(): Iterable<T>;
}
export type LevelEntityGetter<T /* extends EntityAccess */ = unknown> = LevelEntityGetterMembers<T>;
export interface LevelEntityGetterStatics {
}

/** JVM class net.minecraft.world.level.entity.LevelEntityGetterAdapter. */
export interface LevelEntityGetterAdapterMembers<T /* extends EntityAccess */ = unknown> {
  readonly __javaSupertypes?: readonly [LevelEntityGetter<T>];
  get(arg0: number): T | null;
  get(arg0: JavaOpaque<"java.util.UUID">): T | null;
  get<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_util.AbortableIterationConsumer<U>): void;
  get<U /* extends T */>(arg0: EntityTypeTest<T, U>, arg1: j_net_minecraft_world_phys.AABB, arg2: j_net_minecraft_util.AbortableIterationConsumer<U>): void;
  get(arg0: j_net_minecraft_world_phys.AABB, arg1: JavaConsumer<T>): void;
  getAll(): Iterable<T>;
  readonly sectionStorage: EntitySectionStorage<T>;
}
export type LevelEntityGetterAdapter<T /* extends EntityAccess */ = unknown> = LevelEntityGetterAdapterMembers<T> & LevelEntityGetter<T>;
export interface LevelEntityGetterAdapterStatics {
  new<T /* extends EntityAccess */>(arg0: EntityLookup<T>, arg1: EntitySectionStorage<T>): LevelEntityGetterAdapter<T>;
}

/** JVM class net.minecraft.world.level.entity.PersistentEntitySectionManager. */
export interface PersistentEntitySectionManagerMembers<T /* extends EntityAccess */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  addLegacyChunkEntities(arg0: JavaOpaque<"java.util.stream.Stream", [T]>): void;
  addNewEntity(arg0: T): boolean;
  addWorldGenChunkEntities(arg0: JavaOpaque<"java.util.stream.Stream", [T]>): void;
  areEntitiesLoaded(arg0: bigint): boolean;
  autoSave(): void;
  canPositionTick(arg0: j_net_minecraft_core.BlockPos): boolean;
  canPositionTick(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  /** @throws java.io.IOException */
  close(): void;
  /** @throws java.io.IOException */
  close(arg0: boolean): void;
  count(): number;
  /** @throws java.io.IOException */
  dumpSections(arg0: JavaOpaque<"java.io.Writer">): void;
  ensureChunkQueuedForLoad(arg0: bigint): void;
  gatherStats(): string;
  getEntities(arg0: j_net_minecraft_world_level.ChunkPos): JavaList<j_net_minecraft_world_entity.Entity>;
  getEntityGetter(): LevelEntityGetter<T>;
  isLoaded(arg0: JavaOpaque<"java.util.UUID">): boolean;
  isPending(arg0: bigint): boolean;
  isTicking(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  readonly permanentStorage: EntityPersistentStorage<T>;
  processPendingLoads(): void;
  saveAll(): void;
  tick(): void;
  updateChunkStatus(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_server_level.FullChunkStatus): void;
  updateChunkStatus(arg0: j_net_minecraft_world_level.ChunkPos, arg1: Visibility): void;
}
export type PersistentEntitySectionManager<T /* extends EntityAccess */ = unknown> = PersistentEntitySectionManagerMembers<T> & JavaOpaque<"java.lang.AutoCloseable">;
export interface PersistentEntitySectionManagerStatics {
  new<T /* extends EntityAccess */>(arg0: JavaClass<T>, arg1: LevelCallback<T>, arg2: EntityPersistentStorage<T>): PersistentEntitySectionManager<T>;
}

/** JVM class net.minecraft.world.level.entity.TransientEntitySectionManager. */
export interface TransientEntitySectionManagerMembers<T /* extends EntityAccess */ = unknown> {
  addEntity(arg0: T): void;
  count(): number;
  gatherStats(): string;
  getEntityGetter(): LevelEntityGetter<T>;
  startTicking(arg0: j_net_minecraft_world_level.ChunkPos): void;
  stopTicking(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type TransientEntitySectionManager<T /* extends EntityAccess */ = unknown> = TransientEntitySectionManagerMembers<T>;
export interface TransientEntitySectionManagerStatics {
  new<T /* extends EntityAccess */>(arg0: JavaClass<T>, arg1: LevelCallback<T>): TransientEntitySectionManager<T>;
}

/** JVM interface net.minecraft.world.level.entity.UniquelyIdentifyable. */
export interface UniquelyIdentifyableMembers {
  getUUID(): JavaOpaque<"java.util.UUID">;
  isRemoved(): boolean;
}
export type UniquelyIdentifyable = UniquelyIdentifyableMembers;
export interface UniquelyIdentifyableStatics {
}

/** JVM interface net.minecraft.world.level.entity.UUIDLookup. */
export interface UUIDLookupMembers<IdentifiedType /* extends UniquelyIdentifyable */ = unknown> {
  getEntity(arg0: JavaOpaque<"java.util.UUID">): IdentifiedType | null;
}
export type UUIDLookup<IdentifiedType /* extends UniquelyIdentifyable */ = unknown> = UUIDLookupMembers<IdentifiedType>;
export interface UUIDLookupStatics {
}

/** Live JVM enum net.minecraft.world.level.entity.Visibility; constants are host handles, not strings. */
export type Visibility = JavaEnum<"net.minecraft.world.level.entity.Visibility", "HIDDEN" | "TICKING" | "TRACKED"> & VisibilityMembers;
export interface VisibilityMembers {
  isAccessible(): boolean;
  isTicking(): boolean;
}
export interface VisibilityStatics {
  readonly HIDDEN: Visibility;
  readonly TICKING: Visibility;
  readonly TRACKED: Visibility;
  fromFullChunkStatus(arg0: j_net_minecraft_server_level.FullChunkStatus): Visibility;
  valueOf(arg0: string): Visibility;
  values(): Array<Visibility>;
}
