// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';

/** JVM class net.minecraft.world.level.lighting.BlockLightEngine. */
export interface BlockLightEngineMembers {
  readonly __javaSupertypes?: readonly [LightEngine<BlockLightSectionStorage_BlockDataLayerStorageMap, BlockLightSectionStorage>];
  checkNode(arg0: bigint): void;
  propagateDecrease(arg0: bigint, arg1: bigint): void;
  propagateIncrease(arg0: bigint, arg1: bigint, arg2: number): void;
  propagateLightSources(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type BlockLightEngine = BlockLightEngineMembers & LightEngine<BlockLightSectionStorage_BlockDataLayerStorageMap, BlockLightSectionStorage>;
export interface BlockLightEngineStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter): BlockLightEngine;
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter, arg1: BlockLightSectionStorage): BlockLightEngine;
}

/** JVM class net.minecraft.world.level.lighting.BlockLightSectionStorage. */
export interface BlockLightSectionStorageMembers {
  readonly __javaSupertypes?: readonly [LayerLightSectionStorage<BlockLightSectionStorage_BlockDataLayerStorageMap>];
  getLightValue(arg0: bigint): number;
}
export type BlockLightSectionStorage = BlockLightSectionStorageMembers & LayerLightSectionStorage<BlockLightSectionStorage_BlockDataLayerStorageMap>;
export interface BlockLightSectionStorageStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter): BlockLightSectionStorage;
}

/** JVM class net.minecraft.world.level.lighting.BlockLightSectionStorage$BlockDataLayerStorageMap. */
export interface BlockLightSectionStorage_BlockDataLayerStorageMapMembers {
  readonly __javaSupertypes?: readonly [DataLayerStorageMap<BlockLightSectionStorage_BlockDataLayerStorageMap>];
  clearCache(): void;
  copy(): BlockLightSectionStorage_BlockDataLayerStorageMap;
  copy(): DataLayerStorageMap;
  copyDataLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer;
  disableCache(): void;
  getLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  hasLayer(arg0: bigint): boolean;
  readonly map: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [j_net_minecraft_world_level_chunk.DataLayer]>;
  removeLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  setLayer(arg0: bigint, arg1: j_net_minecraft_world_level_chunk.DataLayer): void;
}
export type BlockLightSectionStorage_BlockDataLayerStorageMap = BlockLightSectionStorage_BlockDataLayerStorageMapMembers;
export interface BlockLightSectionStorage_BlockDataLayerStorageMapStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [j_net_minecraft_world_level_chunk.DataLayer]>): BlockLightSectionStorage_BlockDataLayerStorageMap;
}

/** JVM class net.minecraft.world.level.lighting.ChunkSkyLightSources. */
export interface ChunkSkyLightSourcesMembers {
  fillFrom(arg0: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  getHighestLowestSourceY(): number;
  getLowestSourceY(arg0: number, arg1: number): number;
  update(arg0: j_net_minecraft_world_level.BlockGetter, arg1: number, arg2: number, arg3: number): boolean;
}
export type ChunkSkyLightSources = ChunkSkyLightSourcesMembers;
export interface ChunkSkyLightSourcesStatics {
  new(arg0: j_net_minecraft_world_level.LevelHeightAccessor): ChunkSkyLightSources;
  readonly NEGATIVE_INFINITY: -2147483648;
}

/** JVM abstract net.minecraft.world.level.lighting.DataLayerStorageMap. */
export interface DataLayerStorageMapMembers<M /* extends DataLayerStorageMap<M> */ = unknown> {
  clearCache(): void;
  copy(): M;
  copyDataLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer;
  disableCache(): void;
  getLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  hasLayer(arg0: bigint): boolean;
  readonly map: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [j_net_minecraft_world_level_chunk.DataLayer]>;
  removeLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  setLayer(arg0: bigint, arg1: j_net_minecraft_world_level_chunk.DataLayer): void;
}
export type DataLayerStorageMap<M /* extends DataLayerStorageMap<M> */ = unknown> = DataLayerStorageMapMembers<M>;
export interface DataLayerStorageMapStatics {
  new<M /* extends DataLayerStorageMap<M> */>(arg0: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [j_net_minecraft_world_level_chunk.DataLayer]>): DataLayerStorageMap<M>;
}

/** JVM abstract net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint. */
export interface DynamicGraphMinFixedPointMembers {
  checkEdge(arg0: bigint, arg1: bigint, arg2: number, arg3: boolean): void;
  checkNeighbor(arg0: bigint, arg1: bigint, arg2: number, arg3: boolean): void;
  checkNeighborsAfterUpdate(arg0: bigint, arg1: number, arg2: boolean): void;
  checkNode(arg0: bigint): void;
  computeLevelFromNeighbor(arg0: bigint, arg1: bigint, arg2: number): number;
  getComputedLevel(arg0: bigint, arg1: bigint, arg2: number): number;
  getLevel(arg0: bigint): number;
  getQueueSize(): number;
  hasWork(): boolean;
  isSource(arg0: bigint): boolean;
  readonly levelCount: number;
  removeFromQueue(arg0: bigint): void;
  removeIf(arg0: JavaOpaque<"java.util.function.LongPredicate">): void;
  runUpdates(arg0: number): number;
  setLevel(arg0: bigint, arg1: number): void;
}
export type DynamicGraphMinFixedPoint = DynamicGraphMinFixedPointMembers;
export interface DynamicGraphMinFixedPointStatics {
  new(arg0: number, arg1: number, arg2: number): DynamicGraphMinFixedPoint;
  readonly SOURCE: 9223372036854776000;
}

/** JVM interface net.minecraft.world.level.lighting.LayerLightEventListener. */
export interface LayerLightEventListenerMembers {
  readonly __javaSupertypes?: readonly [LightEventListener];
  getDataLayerData(arg0: j_net_minecraft_core.SectionPos): j_net_minecraft_world_level_chunk.DataLayer | null;
  getLightValue(arg0: j_net_minecraft_core.BlockPos): number;
}
export type LayerLightEventListener = LayerLightEventListenerMembers & LightEventListener;
export interface LayerLightEventListenerStatics {
}

/** Live JVM enum net.minecraft.world.level.lighting.LayerLightEventListener$DummyLightLayerEventListener; constants are host handles, not strings. */
export type LayerLightEventListener_DummyLightLayerEventListener = JavaEnum<"net.minecraft.world.level.lighting.LayerLightEventListener$DummyLightLayerEventListener", "INSTANCE"> & LayerLightEventListener_DummyLightLayerEventListenerMembers;
export interface LayerLightEventListener_DummyLightLayerEventListenerMembers {
  checkBlock(arg0: j_net_minecraft_core.BlockPos): void;
  getDataLayerData(arg0: j_net_minecraft_core.SectionPos): j_net_minecraft_world_level_chunk.DataLayer | null;
  getLightValue(arg0: j_net_minecraft_core.BlockPos): number;
  hasLightWork(): boolean;
  propagateLightSources(arg0: j_net_minecraft_world_level.ChunkPos): void;
  runLightUpdates(): number;
  setLightEnabled(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  updateSectionStatus(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  updateSectionStatus(arg0: j_net_minecraft_core.SectionPos, arg1: boolean): void;
}
export interface LayerLightEventListener_DummyLightLayerEventListenerStatics {
  readonly INSTANCE: LayerLightEventListener_DummyLightLayerEventListener;
  valueOf(arg0: string): LayerLightEventListener_DummyLightLayerEventListener;
  values(): Array<LayerLightEventListener_DummyLightLayerEventListener>;
}

/** JVM abstract net.minecraft.world.level.lighting.LayerLightSectionStorage. */
export interface LayerLightSectionStorageMembers<M /* extends DataLayerStorageMap<M> */ = unknown> {
  readonly changedSections: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  readonly chunkSource: j_net_minecraft_world_level_chunk.LightChunkGetter;
  createDataLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer;
  getDataLayer(arg0: bigint, arg1: boolean): j_net_minecraft_world_level_chunk.DataLayer | null;
  getDataLayer(arg0: M, arg1: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  getDataLayerData(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  getDataLayerToWrite(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  getDebugSectionType(arg0: bigint): LayerLightSectionStorage_SectionType;
  getLightValue(arg0: bigint): number;
  getStoredLevel(arg0: bigint): number;
  hasInconsistencies: (boolean) & { (): boolean };
  lightOnInColumn(arg0: bigint): boolean;
  lightOnInSection(arg0: bigint): boolean;
  markNewInconsistencies(arg0: LightEngine<M, object>): void;
  markSectionAndNeighborsAsAffected(arg0: bigint): void;
  onNodeAdded(arg0: bigint): void;
  onNodeRemoved(arg0: bigint): void;
  putSectionState(arg0: bigint, arg1: number): void;
  queueSectionData(arg0: bigint, arg1: j_net_minecraft_world_level_chunk.DataLayer | null): void | null;
  readonly queuedSections: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectMap", [j_net_minecraft_world_level_chunk.DataLayer]>;
  retainData(arg0: bigint, arg1: boolean): void;
  readonly sectionStates: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ByteMap">;
  readonly sectionsAffectedByLightUpdates: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  setLightEnabled(arg0: bigint, arg1: boolean): void;
  setStoredLevel(arg0: bigint, arg1: number): void;
  storingLightForSection(arg0: bigint): boolean;
  swapSectionMap(): void;
  updateSectionStatus(arg0: bigint, arg1: boolean): void;
  readonly updatingSectionData: M;
  visibleSectionData: M;
}
export type LayerLightSectionStorage<M /* extends DataLayerStorageMap<M> */ = unknown> = LayerLightSectionStorageMembers<M>;
export interface LayerLightSectionStorageStatics {
  new<M /* extends DataLayerStorageMap<M> */>(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_world_level_chunk.LightChunkGetter, arg2: M): LayerLightSectionStorage<M>;
}

/** JVM class net.minecraft.world.level.lighting.LayerLightSectionStorage$SectionState. */
export interface LayerLightSectionStorage_SectionStateMembers {
}
export type LayerLightSectionStorage_SectionState = LayerLightSectionStorage_SectionStateMembers;
export interface LayerLightSectionStorage_SectionStateStatics {
  new(): LayerLightSectionStorage_SectionState;
  readonly EMPTY: 0;
  hasData(arg0: number): boolean;
  hasData(arg0: number, arg1: boolean): number;
  neighborCount(arg0: number): number;
  neighborCount(arg0: number, arg1: number): number;
  type(arg0: number): LayerLightSectionStorage_SectionType;
}

/** Live JVM enum net.minecraft.world.level.lighting.LayerLightSectionStorage$SectionType; constants are host handles, not strings. */
export type LayerLightSectionStorage_SectionType = JavaEnum<"net.minecraft.world.level.lighting.LayerLightSectionStorage$SectionType", "EMPTY" | "LIGHT_AND_DATA" | "LIGHT_ONLY"> & LayerLightSectionStorage_SectionTypeMembers;
export interface LayerLightSectionStorage_SectionTypeMembers {
  display(): string;
}
export interface LayerLightSectionStorage_SectionTypeStatics {
  readonly EMPTY: LayerLightSectionStorage_SectionType;
  readonly LIGHT_AND_DATA: LayerLightSectionStorage_SectionType;
  readonly LIGHT_ONLY: LayerLightSectionStorage_SectionType;
  valueOf(arg0: string): LayerLightSectionStorage_SectionType;
  values(): Array<LayerLightSectionStorage_SectionType>;
}

/** JVM class net.minecraft.world.level.lighting.LeveledPriorityQueue. */
export interface LeveledPriorityQueueMembers {
  dequeue(arg0: bigint, arg1: number, arg2: number): void;
  enqueue(arg0: bigint, arg1: number): void;
  isEmpty(): boolean;
  removeFirstLong(): bigint;
}
export type LeveledPriorityQueue = LeveledPriorityQueueMembers;
export interface LeveledPriorityQueueStatics {
  new(arg0: number, arg1: number): LeveledPriorityQueue;
}

/** JVM class net.minecraft.world.level.lighting.LevelLightEngine. */
export interface LevelLightEngineMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.StarLightLightingProvider">, LightEventListener];
  checkBlock(arg0: j_net_minecraft_core.BlockPos): void;
  getDebugData(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos): string;
  getDebugSectionType(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos): LayerLightSectionStorage_SectionType;
  getLayerListener(arg0: j_net_minecraft_world_level.LightLayer): LayerLightEventListener;
  getLightSectionCount(): number;
  getMaxLightSection(): number;
  getMinLightSection(): number;
  getRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  hasLightWork(): boolean;
  readonly levelHeightAccessor: j_net_minecraft_world_level.LevelHeightAccessor;
  readonly lightEngine: JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.StarLightInterface">;
  lightOnInColumn(arg0: bigint): boolean;
  propagateLightSources(arg0: j_net_minecraft_world_level.ChunkPos): void;
  queueSectionData(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos, arg2: j_net_minecraft_world_level_chunk.DataLayer | null): void | null;
  retainData(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  runLightUpdates(): number;
  setLightEnabled(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  starlight$clientChunkLoad(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_chunk.LevelChunk): void;
  starlight$clientRemoveLightData(arg0: j_net_minecraft_world_level.ChunkPos): void;
  starlight$clientUpdateLight(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos, arg2: j_net_minecraft_world_level_chunk.DataLayer, arg3: boolean): void;
  starlight$getLightEngine(): JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.StarLightInterface">;
  updateSectionStatus(arg0: j_net_minecraft_core.SectionPos, arg1: boolean): void;
}
export type LevelLightEngine = LevelLightEngineMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.StarLightLightingProvider"> & LightEventListener;
export interface LevelLightEngineStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter, arg1: boolean, arg2: boolean): LevelLightEngine;
  readonly EMPTY: LevelLightEngine;
  readonly LIGHT_SECTION_PADDING: 1;
}

/** JVM abstract net.minecraft.world.level.lighting.LightEngine. */
export interface LightEngineMembers<M /* extends DataLayerStorageMap<M> */ = unknown, S /* extends LayerLightSectionStorage<M> */ = unknown> {
  readonly __javaSupertypes?: readonly [LayerLightEventListener];
  checkBlock(arg0: j_net_minecraft_core.BlockPos): void;
  checkNode(arg0: bigint): void;
  readonly chunkSource: j_net_minecraft_world_level_chunk.LightChunkGetter;
  enqueueDecrease(arg0: bigint, arg1: bigint): void;
  enqueueIncrease(arg0: bigint, arg1: bigint): void;
  getChunk(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LightChunk | null;
  getDataLayerData(arg0: j_net_minecraft_core.SectionPos): j_net_minecraft_world_level_chunk.DataLayer | null;
  getDebugData(arg0: bigint): string;
  getDebugSectionType(arg0: bigint): LayerLightSectionStorage_SectionType;
  getLightValue(arg0: j_net_minecraft_core.BlockPos): number;
  getOpacity(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  getState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  hasLightWork(): boolean;
  propagateDecrease(arg0: bigint, arg1: bigint): void;
  propagateIncrease(arg0: bigint, arg1: bigint, arg2: number): void;
  queueSectionData(arg0: bigint, arg1: j_net_minecraft_world_level_chunk.DataLayer | null): void | null;
  retainData(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  runLightUpdates(): number;
  setLightEnabled(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  shapeOccludes(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.Direction): boolean;
  readonly storage: S;
  updateSectionStatus(arg0: j_net_minecraft_core.SectionPos, arg1: boolean): void;
}
export type LightEngine<M /* extends DataLayerStorageMap<M> */ = unknown, S /* extends LayerLightSectionStorage<M> */ = unknown> = LightEngineMembers<M, S> & LayerLightEventListener;
export interface LightEngineStatics {
  new<M /* extends DataLayerStorageMap<M> */, S /* extends LayerLightSectionStorage<M> */>(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter, arg1: S): LightEngine<M, S>;
  readonly MAX_LEVEL: 15;
  readonly MIN_OPACITY: 1;
  readonly PROPAGATION_DIRECTIONS: Array<j_net_minecraft_core.Direction>;
  readonly PULL_LIGHT_IN_ENTRY: bigint;
  getLightBlockInto(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.Direction, arg3: number): number;
  getOcclusionShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction): j_net_minecraft_world_phys_shapes.VoxelShape;
  hasDifferentLightProperties(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isEmptyShape(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.lighting.LightEngine$QueueEntry. */
export interface LightEngine_QueueEntryMembers {
}
export type LightEngine_QueueEntry = LightEngine_QueueEntryMembers;
export interface LightEngine_QueueEntryStatics {
  new(): LightEngine_QueueEntry;
  decreaseAllDirections(arg0: number): bigint;
  decreaseSkipOneDirection(arg0: number, arg1: j_net_minecraft_core.Direction): bigint;
  getFromLevel(arg0: bigint): number;
  increaseLightFromEmission(arg0: number, arg1: boolean): bigint;
  increaseOnlyOneDirection(arg0: number, arg1: boolean, arg2: j_net_minecraft_core.Direction): bigint;
  increaseSkipOneDirection(arg0: number, arg1: boolean, arg2: j_net_minecraft_core.Direction): bigint;
  increaseSkySourceInDirections(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): bigint;
  isFromEmptyShape(arg0: bigint): boolean;
  isIncreaseFromEmission(arg0: bigint): boolean;
  shouldPropagateInDirection(arg0: bigint, arg1: j_net_minecraft_core.Direction): boolean;
}

/** JVM interface net.minecraft.world.level.lighting.LightEventListener. */
export interface LightEventListenerMembers {
  checkBlock(arg0: j_net_minecraft_core.BlockPos): void;
  hasLightWork(): boolean;
  propagateLightSources(arg0: j_net_minecraft_world_level.ChunkPos): void;
  runLightUpdates(): number;
  setLightEnabled(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  updateSectionStatus(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  updateSectionStatus(arg0: j_net_minecraft_core.SectionPos, arg1: boolean): void;
}
export type LightEventListener = LightEventListenerMembers;
export interface LightEventListenerStatics {
}

/** JVM class net.minecraft.world.level.lighting.SkyLightEngine. */
export interface SkyLightEngineMembers {
  readonly __javaSupertypes?: readonly [LightEngine<SkyLightSectionStorage_SkyDataLayerStorageMap, SkyLightSectionStorage>];
  checkNode(arg0: bigint): void;
  propagateDecrease(arg0: bigint, arg1: bigint): void;
  propagateIncrease(arg0: bigint, arg1: bigint, arg2: number): void;
  propagateLightSources(arg0: j_net_minecraft_world_level.ChunkPos): void;
  setLightEnabled(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
}
export type SkyLightEngine = SkyLightEngineMembers & LightEngine<SkyLightSectionStorage_SkyDataLayerStorageMap, SkyLightSectionStorage>;
export interface SkyLightEngineStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter): SkyLightEngine;
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter, arg1: SkyLightSectionStorage): SkyLightEngine;
}

/** JVM class net.minecraft.world.level.lighting.SkyLightSectionStorage. */
export interface SkyLightSectionStorageMembers {
  readonly __javaSupertypes?: readonly [LayerLightSectionStorage<SkyLightSectionStorage_SkyDataLayerStorageMap>];
  createDataLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer;
  getBottomSectionY(): number;
  getLightValue(arg0: bigint): number;
  getLightValue(arg0: bigint, arg1: boolean): number;
  getTopSectionY(arg0: bigint): number;
  hasLightDataAtOrBelow(arg0: number): boolean;
  isAboveData(arg0: bigint): boolean;
  onNodeAdded(arg0: bigint): void;
  onNodeRemoved(arg0: bigint): void;
}
export type SkyLightSectionStorage = SkyLightSectionStorageMembers & LayerLightSectionStorage<SkyLightSectionStorage_SkyDataLayerStorageMap>;
export interface SkyLightSectionStorageStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter): SkyLightSectionStorage;
}

/** JVM class net.minecraft.world.level.lighting.SkyLightSectionStorage$SkyDataLayerStorageMap. */
export interface SkyLightSectionStorage_SkyDataLayerStorageMapMembers {
  readonly __javaSupertypes?: readonly [DataLayerStorageMap<SkyLightSectionStorage_SkyDataLayerStorageMap>];
  clearCache(): void;
  copy(): SkyLightSectionStorage_SkyDataLayerStorageMap;
  copy(): DataLayerStorageMap;
  copyDataLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer;
  disableCache(): void;
  getLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  hasLayer(arg0: bigint): boolean;
  readonly map: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [j_net_minecraft_world_level_chunk.DataLayer]>;
  removeLayer(arg0: bigint): j_net_minecraft_world_level_chunk.DataLayer | null;
  setLayer(arg0: bigint, arg1: j_net_minecraft_world_level_chunk.DataLayer): void;
}
export type SkyLightSectionStorage_SkyDataLayerStorageMap = SkyLightSectionStorage_SkyDataLayerStorageMapMembers;
export interface SkyLightSectionStorage_SkyDataLayerStorageMapStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [j_net_minecraft_world_level_chunk.DataLayer]>, arg1: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2IntOpenHashMap">, arg2: number): SkyLightSectionStorage_SkyDataLayerStorageMap;
}

/** JVM class net.minecraft.world.level.lighting.SpatialLongSet. */
export interface SpatialLongSetMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"it.unimi.dsi.fastutil.longs.LongLinkedOpenHashSet">];
  add(arg0: bigint): boolean;
  isEmpty(): boolean;
  rem(arg0: bigint): boolean;
  removeFirstLong(): bigint;
  size(): number;
}
export type SpatialLongSet = SpatialLongSetMembers & JavaOpaque<"it.unimi.dsi.fastutil.longs.LongLinkedOpenHashSet">;
export interface SpatialLongSetStatics {
  new(arg0: number, arg1: number): SpatialLongSet;
}

/** JVM class net.minecraft.world.level.lighting.SpatialLongSet$InternalMap. */
export interface SpatialLongSet_InternalMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2LongLinkedOpenHashMap">];
  addBit(arg0: bigint): boolean;
  rehash(arg0: number): void;
  removeBit(arg0: bigint): boolean;
  removeFirstBit(): bigint;
}
export type SpatialLongSet_InternalMap = SpatialLongSet_InternalMapMembers & JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2LongLinkedOpenHashMap">;
export interface SpatialLongSet_InternalMapStatics {
  new(arg0: number, arg1: number): SpatialLongSet_InternalMap;
}
