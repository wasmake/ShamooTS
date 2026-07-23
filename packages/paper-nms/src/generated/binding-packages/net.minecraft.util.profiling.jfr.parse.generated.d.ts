// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling_jfr_stats from './net.minecraft.util.profiling.jfr.stats.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';

/** JVM class net.minecraft.util.profiling.jfr.parse.JfrStatsParser. */
export interface JfrStatsParserMembers {
}
export type JfrStatsParser = JfrStatsParserMembers;
export interface JfrStatsParserStatics {
  parse(arg0: JavaOpaque<"java.nio.file.Path">): JfrStatsResult;
}

/** JVM class net.minecraft.util.profiling.jfr.parse.JfrStatsParser$MutableCountAndSize. */
export interface JfrStatsParser_MutableCountAndSizeMembers {
  increment(arg0: number): void;
  toCountAndSize(): j_net_minecraft_util_profiling_jfr_stats.IoSummary_CountAndSize;
}
export type JfrStatsParser_MutableCountAndSize = JfrStatsParser_MutableCountAndSizeMembers;
export interface JfrStatsParser_MutableCountAndSizeStatics {
  new(): JfrStatsParser_MutableCountAndSize;
}

/** JVM record net.minecraft.util.profiling.jfr.parse.JfrStatsResult. */
export interface JfrStatsResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  asJson(): string;
  chunkGenStats(): JavaList<j_net_minecraft_util_profiling_jfr_stats.ChunkGenStat>;
  chunkGenSummary(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_level_chunk_status.ChunkStatus, j_net_minecraft_util_profiling_jfr_stats.TimedStatSummary<j_net_minecraft_util_profiling_jfr_stats.ChunkGenStat>]>>;
  cpuLoadStats(): JavaList<j_net_minecraft_util_profiling_jfr_stats.CpuLoadStat>;
  equals(arg0: object): boolean;
  fileReads(): j_net_minecraft_util_profiling_jfr_stats.FileIOStat_Summary;
  fileWrites(): j_net_minecraft_util_profiling_jfr_stats.FileIOStat_Summary;
  hashCode(): number;
  heapSummary(): j_net_minecraft_util_profiling_jfr_stats.GcHeapStat_Summary;
  readChunks(): j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.ChunkIdentification>;
  receivedPacketsSummary(): j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.PacketIdentification>;
  recordingDuration(): JavaOpaque<"java.time.Duration">;
  recordingEnded(): JavaOpaque<"java.time.Instant">;
  recordingStarted(): JavaOpaque<"java.time.Instant">;
  sentPacketsSummary(): j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.PacketIdentification>;
  structureGenStats(): JavaList<j_net_minecraft_util_profiling_jfr_stats.StructureGenStat>;
  threadAllocationSummary(): j_net_minecraft_util_profiling_jfr_stats.ThreadAllocationStat_Summary;
  tickTimes(): JavaList<j_net_minecraft_util_profiling_jfr_stats.TickTimeStat>;
  toString(): string;
  worldCreationDuration(): JavaOpaque<"java.time.Duration"> | null;
  writtenChunks(): j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.ChunkIdentification>;
}
export type JfrStatsResult = JfrStatsResultMembers & JavaOpaque<"java.lang.Record">;
export interface JfrStatsResultStatics {
  new(arg0: JavaOpaque<"java.time.Instant">, arg1: JavaOpaque<"java.time.Instant">, arg2: JavaOpaque<"java.time.Duration">, arg3: JavaOpaque<"java.time.Duration"> | null, arg4: JavaList<j_net_minecraft_util_profiling_jfr_stats.TickTimeStat>, arg5: JavaList<j_net_minecraft_util_profiling_jfr_stats.CpuLoadStat>, arg6: j_net_minecraft_util_profiling_jfr_stats.GcHeapStat_Summary, arg7: j_net_minecraft_util_profiling_jfr_stats.ThreadAllocationStat_Summary, arg8: j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.PacketIdentification>, arg9: j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.PacketIdentification>, arg10: j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.ChunkIdentification>, arg11: j_net_minecraft_util_profiling_jfr_stats.IoSummary<j_net_minecraft_util_profiling_jfr_stats.ChunkIdentification>, arg12: j_net_minecraft_util_profiling_jfr_stats.FileIOStat_Summary, arg13: j_net_minecraft_util_profiling_jfr_stats.FileIOStat_Summary, arg14: JavaList<j_net_minecraft_util_profiling_jfr_stats.ChunkGenStat>, arg15: JavaList<j_net_minecraft_util_profiling_jfr_stats.StructureGenStat>): JfrStatsResult;
}
