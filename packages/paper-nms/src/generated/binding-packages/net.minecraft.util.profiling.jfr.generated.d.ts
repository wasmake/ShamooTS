// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_util_profiling_jfr_callback from './net.minecraft.util.profiling.jfr.callback.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_chunk_storage from './net.minecraft.world.level.chunk.storage.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** Live JVM enum net.minecraft.util.profiling.jfr.Environment; constants are host handles, not strings. */
export type Environment = JavaEnum<"net.minecraft.util.profiling.jfr.Environment", "CLIENT" | "SERVER"> & EnvironmentMembers;
export interface EnvironmentMembers {
  getDescription(): string;
}
export interface EnvironmentStatics {
  readonly CLIENT: Environment;
  readonly SERVER: Environment;
  from(arg0: j_net_minecraft_server.MinecraftServer): Environment;
  valueOf(arg0: string): Environment;
  values(): Array<Environment>;
}

/** JVM class net.minecraft.util.profiling.jfr.JfrProfiler. */
export interface JfrProfilerMembers {
  readonly __javaSupertypes?: readonly [JvmProfiler];
  isAvailable(): boolean;
  isRunning(): boolean;
  onChunkGenerate(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: string): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  onPacketReceived(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: j_net_minecraft_network_protocol.PacketType<object>, arg2: JavaOpaque<"java.net.SocketAddress">, arg3: number): void;
  onPacketSent(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: j_net_minecraft_network_protocol.PacketType<object>, arg2: JavaOpaque<"java.net.SocketAddress">, arg3: number): void;
  onRegionFileRead(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): void;
  onRegionFileWrite(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): void;
  onServerTick(arg0: number): void;
  onStructureGenerate(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  onWorldLoadedStarted(): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  start(arg0: Environment): boolean;
  stop(): JavaOpaque<"java.nio.file.Path">;
}
export type JfrProfiler = JfrProfilerMembers & JvmProfiler;
export interface JfrProfilerStatics {
  readonly NETWORK_CATEGORY: "Network";
  readonly ROOT_CATEGORY: "Minecraft";
  readonly STORAGE_CATEGORY: "Storage";
  readonly TICK_CATEGORY: "Ticking";
  readonly WORLD_GEN_CATEGORY: "World Generation";
  getInstance(): JfrProfiler;
}

/** JVM interface net.minecraft.util.profiling.jfr.JvmProfiler. */
export interface JvmProfilerMembers {
  isAvailable(): boolean;
  isRunning(): boolean;
  onChunkGenerate(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: string): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  onPacketReceived(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: j_net_minecraft_network_protocol.PacketType<object>, arg2: JavaOpaque<"java.net.SocketAddress">, arg3: number): void;
  onPacketSent(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: j_net_minecraft_network_protocol.PacketType<object>, arg2: JavaOpaque<"java.net.SocketAddress">, arg3: number): void;
  onRegionFileRead(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): void;
  onRegionFileWrite(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): void;
  onServerTick(arg0: number): void;
  onStructureGenerate(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  onWorldLoadedStarted(): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  start(arg0: Environment): boolean;
  stop(): JavaOpaque<"java.nio.file.Path">;
}
export type JvmProfiler = JvmProfilerMembers;
export interface JvmProfilerStatics {
  readonly INSTANCE: JvmProfiler;
}

/** JVM class net.minecraft.util.profiling.jfr.JvmProfiler$NoOpProfiler. */
export interface JvmProfiler_NoOpProfilerMembers {
  readonly __javaSupertypes?: readonly [JvmProfiler];
  isAvailable(): boolean;
  isRunning(): boolean;
  onChunkGenerate(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: string): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration | null;
  onPacketReceived(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: j_net_minecraft_network_protocol.PacketType<object>, arg2: JavaOpaque<"java.net.SocketAddress">, arg3: number): void;
  onPacketSent(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: j_net_minecraft_network_protocol.PacketType<object>, arg2: JavaOpaque<"java.net.SocketAddress">, arg3: number): void;
  onRegionFileRead(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): void;
  onRegionFileWrite(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): void;
  onServerTick(arg0: number): void;
  onStructureGenerate(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration;
  onWorldLoadedStarted(): j_net_minecraft_util_profiling_jfr_callback.ProfiledDuration;
  start(arg0: Environment): boolean;
  stop(): JavaOpaque<"java.nio.file.Path">;
}
export type JvmProfiler_NoOpProfiler = JvmProfiler_NoOpProfilerMembers & JvmProfiler;
export interface JvmProfiler_NoOpProfilerStatics {
  new(): JvmProfiler_NoOpProfiler;
}

/** JVM class net.minecraft.util.profiling.jfr.Percentiles. */
export interface PercentilesMembers {
}
export type Percentiles = PercentilesMembers;
export interface PercentilesStatics {
  readonly DEFAULT_INDEXES: JavaOpaque<"com.google.common.math.Quantiles$ScaleAndIndexes">;
  evaluate(arg0: Array<number>): JavaMap<number, number>;
  evaluate(arg0: Array<bigint>): JavaMap<number, number>;
}

/** JVM class net.minecraft.util.profiling.jfr.SummaryReporter. */
export interface SummaryReporterMembers {
  recordingStopped(arg0: JavaOpaque<"java.nio.file.Path"> | null): void | null;
}
export type SummaryReporter = SummaryReporterMembers;
export interface SummaryReporterStatics {
  new(arg0: JavaRunnable): SummaryReporter;
}
