// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.world.level.chunk.status.ChunkDependencies. */
export interface ChunkDependenciesMembers {
  asList(): JavaOpaque<"com.google.common.collect.ImmutableList", [ChunkStatus]>;
  get(arg0: number): ChunkStatus;
  getRadius(): number;
  getRadiusOf(arg0: ChunkStatus): number;
  size(): number;
  toString(): string;
}
export type ChunkDependencies = ChunkDependenciesMembers;
export interface ChunkDependenciesStatics {
  new(arg0: JavaOpaque<"com.google.common.collect.ImmutableList", [ChunkStatus]>): ChunkDependencies;
}

/** JVM record net.minecraft.world.level.chunk.status.ChunkPyramid. */
export interface ChunkPyramidMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  getStepTo(arg0: ChunkStatus): ChunkStep;
  hashCode(): number;
  steps(): JavaOpaque<"com.google.common.collect.ImmutableList", [ChunkStep]>;
  toString(): string;
}
export type ChunkPyramid = ChunkPyramidMembers & JavaOpaque<"java.lang.Record">;
export interface ChunkPyramidStatics {
  new(arg0: JavaOpaque<"com.google.common.collect.ImmutableList", [ChunkStep]>): ChunkPyramid;
  readonly GENERATION_PYRAMID: ChunkPyramid;
  readonly LOADING_PYRAMID: ChunkPyramid;
}

/** JVM class net.minecraft.world.level.chunk.status.ChunkPyramid$Builder. */
export interface ChunkPyramid_BuilderMembers {
  build(): ChunkPyramid;
  step(arg0: ChunkStatus, arg1: JavaOpaque<"java.util.function.UnaryOperator", [ChunkStep_Builder]>): ChunkPyramid_Builder;
}
export type ChunkPyramid_Builder = ChunkPyramid_BuilderMembers;
export interface ChunkPyramid_BuilderStatics {
  new(): ChunkPyramid_Builder;
}

/** JVM class net.minecraft.world.level.chunk.status.ChunkStatus. */
export interface ChunkStatusMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemChunkStatus">];
  getChunkType(): ChunkType;
  getIndex(): number;
  getName(): string;
  getParent(): ChunkStatus;
  heightmapsAfter(): JavaOpaque<"java.util.EnumSet", [j_net_minecraft_world_level_levelgen.Heightmap_Types]>;
  isAfter(arg0: ChunkStatus): boolean;
  isBefore(arg0: ChunkStatus): boolean;
  isOrAfter(arg0: ChunkStatus): boolean;
  isOrBefore(arg0: ChunkStatus): boolean;
  moonrise$getNextStatus(): ChunkStatus;
  moonrise$getWarnedAboutNoImmediateComplete(): JavaOpaque<"java.util.concurrent.atomic.AtomicBoolean">;
  moonrise$getWriteRadius(): number;
  moonrise$isEmptyGenStatus(): boolean;
  moonrise$isEmptyLoadStatus(): boolean;
  moonrise$isParallelCapable(): boolean;
  moonrise$setEmptyLoadStatus(arg0: boolean): void;
  moonrise$setParallelCapable(arg0: boolean): void;
  moonrise$setWriteRadius(arg0: number): void;
  toString(): string;
}
export type ChunkStatus = ChunkStatusMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemChunkStatus">;
export interface ChunkStatusStatics {
  new(arg0: ChunkStatus | null, arg1: JavaOpaque<"java.util.EnumSet", [j_net_minecraft_world_level_levelgen.Heightmap_Types]>, arg2: ChunkType): ChunkStatus;
  readonly BIOMES: ChunkStatus;
  readonly CARVERS: ChunkStatus;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChunkStatus]>;
  readonly EMPTY: ChunkStatus;
  readonly FEATURES: ChunkStatus;
  readonly FINAL_HEIGHTMAPS: JavaOpaque<"java.util.EnumSet", [j_net_minecraft_world_level_levelgen.Heightmap_Types]>;
  readonly FULL: ChunkStatus;
  readonly INITIALIZE_LIGHT: ChunkStatus;
  readonly LIGHT: ChunkStatus;
  readonly MAX_STRUCTURE_DISTANCE: 8;
  readonly NOISE: ChunkStatus;
  readonly SPAWN: ChunkStatus;
  readonly STRUCTURE_REFERENCES: ChunkStatus;
  readonly STRUCTURE_STARTS: ChunkStatus;
  readonly SURFACE: ChunkStatus;
  byName(arg0: string): ChunkStatus;
  getStatusList(): JavaList<ChunkStatus>;
  max(arg0: ChunkStatus, arg1: ChunkStatus): ChunkStatus;
}

/** JVM interface net.minecraft.world.level.chunk.status.ChunkStatusTask. */
export interface ChunkStatusTaskMembers {
  doWork(arg0: WorldGenContext, arg1: ChunkStep, arg2: j_net_minecraft_util.StaticCache2D<j_net_minecraft_server_level.GenerationChunkHolder>, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
}
export type ChunkStatusTask = ChunkStatusTaskMembers;
export interface ChunkStatusTaskStatics {
}

/** JVM class net.minecraft.world.level.chunk.status.ChunkStatusTasks. */
export interface ChunkStatusTasksMembers {
}
export type ChunkStatusTasks = ChunkStatusTasksMembers;
export interface ChunkStatusTasksStatics {
  new(): ChunkStatusTasks;
  checkDupeUUID(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  postLoadProtoChunk(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_storage.ValueInput_ValueInputList, arg2: j_net_minecraft_world_level.ChunkPos): void;
}

/** JVM class net.minecraft.world.level.chunk.status.ChunkStep. */
export interface ChunkStepMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.status.ChunkSystemChunkStep">];
  accumulatedDependencies(): ChunkDependencies;
  apply(arg0: WorldGenContext, arg1: j_net_minecraft_util.StaticCache2D<j_net_minecraft_server_level.GenerationChunkHolder>, arg2: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  blockStateWriteRadius(): number;
  directDependencies(): ChunkDependencies;
  equals(arg0: object): boolean;
  getAccumulatedRadiusOf(arg0: ChunkStatus): number;
  hashCode(): number;
  moonrise$getRequiredStatusAtRadius(arg0: number): ChunkStatus;
  targetStatus(): ChunkStatus;
  task(): ChunkStatusTask;
  toString(): string;
}
export type ChunkStep = ChunkStepMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.status.ChunkSystemChunkStep">;
export interface ChunkStepStatics {
  new(arg0: ChunkStatus, arg1: ChunkDependencies, arg2: ChunkDependencies, arg3: number, arg4: ChunkStatusTask): ChunkStep;
}

/** JVM class net.minecraft.world.level.chunk.status.ChunkStep$Builder. */
export interface ChunkStep_BuilderMembers {
  addRequirement(arg0: ChunkStatus, arg1: number): ChunkStep_Builder;
  blockStateWriteRadius(arg0: number): ChunkStep_Builder;
  build(): ChunkStep;
  setTask(arg0: ChunkStatusTask): ChunkStep_Builder;
}
export type ChunkStep_Builder = ChunkStep_BuilderMembers;
export interface ChunkStep_BuilderStatics {
  new(arg0: ChunkStatus): ChunkStep_Builder;
  new(arg0: ChunkStatus, arg1: ChunkStep): ChunkStep_Builder;
}

/** Live JVM enum net.minecraft.world.level.chunk.status.ChunkType; constants are host handles, not strings. */
export type ChunkType = JavaEnum<"net.minecraft.world.level.chunk.status.ChunkType", "LEVELCHUNK" | "PROTOCHUNK"> & ChunkTypeMembers;
export interface ChunkTypeMembers {
}
export interface ChunkTypeStatics {
  readonly LEVELCHUNK: ChunkType;
  readonly PROTOCHUNK: ChunkType;
  valueOf(arg0: string): ChunkType;
  values(): Array<ChunkType>;
}

/** JVM record net.minecraft.world.level.chunk.status.WorldGenContext. */
export interface WorldGenContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  generator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  hashCode(): number;
  level(): j_net_minecraft_server_level.ServerLevel;
  lightEngine(): j_net_minecraft_server_level.ThreadedLevelLightEngine;
  mainThreadExecutor(): JavaOpaque<"java.util.concurrent.Executor">;
  structureManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  toString(): string;
  unsavedListener(): j_net_minecraft_world_level_chunk.LevelChunk_UnsavedListener;
}
export type WorldGenContext = WorldGenContextMembers & JavaOpaque<"java.lang.Record">;
export interface WorldGenContextStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg3: j_net_minecraft_server_level.ThreadedLevelLightEngine, arg4: JavaOpaque<"java.util.concurrent.Executor">, arg5: j_net_minecraft_world_level_chunk.LevelChunk_UnsavedListener): WorldGenContext;
}
