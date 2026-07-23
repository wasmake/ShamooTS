// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';

/** JVM record net.minecraft.util.profiling.jfr.stats.ChunkGenStat. */
export interface ChunkGenStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TimedStat];
  chunkPos(): j_net_minecraft_world_level.ChunkPos;
  duration(): JavaOpaque<"java.time.Duration">;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): string;
  status(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  toString(): string;
  worldPos(): j_net_minecraft_server_level.ColumnPos;
}
export type ChunkGenStat = ChunkGenStatMembers & JavaOpaque<"java.lang.Record"> & TimedStat;
export interface ChunkGenStatStatics {
  new(arg0: JavaOpaque<"java.time.Duration">, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_server_level.ColumnPos, arg3: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg4: string): ChunkGenStat;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): ChunkGenStat;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.ChunkIdentification. */
export interface ChunkIdentificationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimension(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): string;
  toString(): string;
  x(): number;
  z(): number;
}
export type ChunkIdentification = ChunkIdentificationMembers & JavaOpaque<"java.lang.Record">;
export interface ChunkIdentificationStatics {
  new(arg0: string, arg1: string, arg2: number, arg3: number): ChunkIdentification;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): ChunkIdentification;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.CpuLoadStat. */
export interface CpuLoadStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  jvm(): number;
  system(): number;
  toString(): string;
  userJvm(): number;
}
export type CpuLoadStat = CpuLoadStatMembers & JavaOpaque<"java.lang.Record">;
export interface CpuLoadStatStatics {
  new(arg0: number, arg1: number, arg2: number): CpuLoadStat;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): CpuLoadStat;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.FileIOStat. */
export interface FileIOStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  bytes(): bigint;
  duration(): JavaOpaque<"java.time.Duration">;
  equals(arg0: object): boolean;
  hashCode(): number;
  path(): string | null;
  toString(): string;
}
export type FileIOStat = FileIOStatMembers & JavaOpaque<"java.lang.Record">;
export interface FileIOStatStatics {
  new(arg0: JavaOpaque<"java.time.Duration">, arg1: string | null, arg2: bigint): FileIOStat;
  summary(arg0: JavaOpaque<"java.time.Duration">, arg1: JavaList<FileIOStat>): FileIOStat_Summary;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.FileIOStat$Summary. */
export interface FileIOStat_SummaryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  bytesPerSecond(): number;
  counts(): bigint;
  countsPerSecond(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  timeSpentInIO(): JavaOpaque<"java.time.Duration">;
  toString(): string;
  topTenContributorsByTotalBytes(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [string, bigint]>>;
  totalBytes(): bigint;
}
export type FileIOStat_Summary = FileIOStat_SummaryMembers & JavaOpaque<"java.lang.Record">;
export interface FileIOStat_SummaryStatics {
  new(arg0: bigint, arg1: number, arg2: bigint, arg3: number, arg4: JavaOpaque<"java.time.Duration">, arg5: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [string, bigint]>>): FileIOStat_Summary;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.GcHeapStat. */
export interface GcHeapStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  heapUsed(): bigint;
  timestamp(): JavaOpaque<"java.time.Instant">;
  timing(): JavaOpaque<"net.minecraft.util.profiling.jfr.stats.GcHeapStat$Timing">;
  toString(): string;
}
export type GcHeapStat = GcHeapStatMembers & JavaOpaque<"java.lang.Record">;
export interface GcHeapStatStatics {
  new(arg0: JavaOpaque<"java.time.Instant">, arg1: bigint, arg2: JavaOpaque<"net.minecraft.util.profiling.jfr.stats.GcHeapStat$Timing">): GcHeapStat;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): GcHeapStat;
  summary(arg0: JavaOpaque<"java.time.Duration">, arg1: JavaList<GcHeapStat>, arg2: JavaOpaque<"java.time.Duration">, arg3: number): GcHeapStat_Summary;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.GcHeapStat$Summary. */
export interface GcHeapStat_SummaryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  allocationRateBytesPerSecond(): number;
  duration(): JavaOpaque<"java.time.Duration">;
  equals(arg0: object): boolean;
  gcOverHead(): number;
  gcTotalDuration(): JavaOpaque<"java.time.Duration">;
  hashCode(): number;
  toString(): string;
  totalGCs(): number;
}
export type GcHeapStat_Summary = GcHeapStat_SummaryMembers & JavaOpaque<"java.lang.Record">;
export interface GcHeapStat_SummaryStatics {
  new(arg0: JavaOpaque<"java.time.Duration">, arg1: JavaOpaque<"java.time.Duration">, arg2: number, arg3: number): GcHeapStat_Summary;
}

/** JVM class net.minecraft.util.profiling.jfr.stats.IoSummary. */
export interface IoSummaryMembers<T = unknown> {
  getCountsPerSecond(): number;
  getSizePerSecond(): number;
  getTotalCount(): bigint;
  getTotalSize(): bigint;
  largestSizeContributors(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [T, IoSummary_CountAndSize]>>;
}
export type IoSummary<T = unknown> = IoSummaryMembers<T>;
export interface IoSummaryStatics {
  new<T>(arg0: JavaOpaque<"java.time.Duration">, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [T, IoSummary_CountAndSize]>>): IoSummary<T>;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.IoSummary$CountAndSize. */
export interface IoSummary_CountAndSizeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  averageSize(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  totalCount(): bigint;
  totalSize(): bigint;
}
export type IoSummary_CountAndSize = IoSummary_CountAndSizeMembers & JavaOpaque<"java.lang.Record">;
export interface IoSummary_CountAndSizeStatics {
  new(arg0: bigint, arg1: bigint): IoSummary_CountAndSize;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.PacketIdentification. */
export interface PacketIdentificationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  direction(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  packetId(): string;
  protocolId(): string;
  toString(): string;
}
export type PacketIdentification = PacketIdentificationMembers & JavaOpaque<"java.lang.Record">;
export interface PacketIdentificationStatics {
  new(arg0: string, arg1: string, arg2: string): PacketIdentification;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): PacketIdentification;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.StructureGenStat. */
export interface StructureGenStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TimedStat];
  chunkPos(): j_net_minecraft_world_level.ChunkPos;
  duration(): JavaOpaque<"java.time.Duration">;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): string;
  structureName(): string;
  success(): boolean;
  toString(): string;
}
export type StructureGenStat = StructureGenStatMembers & JavaOpaque<"java.lang.Record"> & TimedStat;
export interface StructureGenStatStatics {
  new(arg0: JavaOpaque<"java.time.Duration">, arg1: j_net_minecraft_world_level.ChunkPos, arg2: string, arg3: string, arg4: boolean): StructureGenStat;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): StructureGenStat;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.ThreadAllocationStat. */
export interface ThreadAllocationStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  threadName(): string;
  timestamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  totalBytes(): bigint;
}
export type ThreadAllocationStat = ThreadAllocationStatMembers & JavaOpaque<"java.lang.Record">;
export interface ThreadAllocationStatStatics {
  new(arg0: JavaOpaque<"java.time.Instant">, arg1: string, arg2: bigint): ThreadAllocationStat;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): ThreadAllocationStat;
  summary(arg0: JavaList<ThreadAllocationStat>): ThreadAllocationStat_Summary;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.ThreadAllocationStat$Summary. */
export interface ThreadAllocationStat_SummaryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  allocationsPerSecondByThread(): JavaMap<string, number>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ThreadAllocationStat_Summary = ThreadAllocationStat_SummaryMembers & JavaOpaque<"java.lang.Record">;
export interface ThreadAllocationStat_SummaryStatics {
  new(arg0: JavaMap<string, number>): ThreadAllocationStat_Summary;
}

/** JVM record net.minecraft.util.profiling.jfr.stats.TickTimeStat. */
export interface TickTimeStatMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  currentAverage(): JavaOpaque<"java.time.Duration">;
  equals(arg0: object): boolean;
  hashCode(): number;
  timestamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
}
export type TickTimeStat = TickTimeStatMembers & JavaOpaque<"java.lang.Record">;
export interface TickTimeStatStatics {
  new(arg0: JavaOpaque<"java.time.Instant">, arg1: JavaOpaque<"java.time.Duration">): TickTimeStat;
  from(arg0: JavaOpaque<"jdk.jfr.consumer.RecordedEvent">): TickTimeStat;
}

/** JVM interface net.minecraft.util.profiling.jfr.stats.TimedStat. */
export interface TimedStatMembers {
  duration(): JavaOpaque<"java.time.Duration">;
}
export type TimedStat = TimedStatMembers;
export interface TimedStatStatics {
}

/** JVM record net.minecraft.util.profiling.jfr.stats.TimedStatSummary. */
export interface TimedStatSummaryMembers<T /* extends TimedStat */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  count(): number;
  equals(arg0: object): boolean;
  fastest(): T;
  hashCode(): number;
  percentilesNanos(): JavaMap<number, number>;
  secondSlowest(): T | null;
  slowest(): T;
  toString(): string;
  totalDuration(): JavaOpaque<"java.time.Duration">;
}
export type TimedStatSummary<T /* extends TimedStat */ = unknown> = TimedStatSummaryMembers<T> & JavaOpaque<"java.lang.Record">;
export interface TimedStatSummaryStatics {
  new<T /* extends TimedStat */>(arg0: T, arg1: T, arg2: T | null, arg3: number, arg4: JavaMap<number, number>, arg5: JavaOpaque<"java.time.Duration">): TimedStatSummary<T>;
  summary<T /* extends TimedStat */>(arg0: JavaList<T>): TimedStatSummary<T>;
}
