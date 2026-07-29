// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';

/** JVM interface net.minecraft.server.level.progress.ChunkProgressListener. */
export interface ChunkProgressListenerMembers {
  onStatusChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_chunk_status.ChunkStatus | null): void;
  start(): void;
  stop(): void;
  updateSpawnPos(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type ChunkProgressListener = ChunkProgressListenerMembers;
export interface ChunkProgressListenerStatics {
  calculateDiameter(arg0: number): number;
}

/** JVM interface net.minecraft.server.level.progress.ChunkProgressListenerFactory. */
export interface ChunkProgressListenerFactoryMembers {
  create(arg0: number): ChunkProgressListener;
}
export type ChunkProgressListenerFactory = ChunkProgressListenerFactoryMembers;
export interface ChunkProgressListenerFactoryStatics {
}

/** JVM class net.minecraft.server.level.progress.LoggerChunkProgressListener. */
export interface LoggerChunkProgressListenerMembers {
  readonly __javaSupertypes?: readonly [ChunkProgressListener];
  getProgress(): number;
  onStatusChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_chunk_status.ChunkStatus | null): void;
  start(): void;
  stop(): void;
  updateSpawnPos(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type LoggerChunkProgressListener = LoggerChunkProgressListenerMembers & ChunkProgressListener;
export interface LoggerChunkProgressListenerStatics {
  create(arg0: number): LoggerChunkProgressListener;
  createCompleted(): LoggerChunkProgressListener;
  createFromGameruleRadius(arg0: number): LoggerChunkProgressListener;
}

/** JVM class net.minecraft.server.level.progress.ProcessorChunkProgressListener. */
export interface ProcessorChunkProgressListenerMembers {
  readonly __javaSupertypes?: readonly [ChunkProgressListener];
  onStatusChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_chunk_status.ChunkStatus | null): void;
  start(): void;
  stop(): void;
  updateSpawnPos(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type ProcessorChunkProgressListener = ProcessorChunkProgressListenerMembers & ChunkProgressListener;
export interface ProcessorChunkProgressListenerStatics {
  createStarted(arg0: ChunkProgressListener, arg1: JavaOpaque<"java.util.concurrent.Executor">): ProcessorChunkProgressListener;
}

/** JVM class net.minecraft.server.level.progress.StoringChunkProgressListener. */
export interface StoringChunkProgressListenerMembers {
  readonly __javaSupertypes?: readonly [ChunkProgressListener];
  getDiameter(): number;
  getFullDiameter(): number;
  getProgress(): number;
  getStatus(arg0: number, arg1: number): j_net_minecraft_world_level_chunk_status.ChunkStatus | null;
  onStatusChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_chunk_status.ChunkStatus | null): void;
  start(): void;
  stop(): void;
  updateSpawnPos(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type StoringChunkProgressListener = StoringChunkProgressListenerMembers & ChunkProgressListener;
export interface StoringChunkProgressListenerStatics {
  create(arg0: number): StoringChunkProgressListener;
  createCompleted(): StoringChunkProgressListener;
  createFromGameruleRadius(arg0: number): StoringChunkProgressListener;
}
