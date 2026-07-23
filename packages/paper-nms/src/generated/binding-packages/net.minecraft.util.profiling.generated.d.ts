// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling_metrics from './net.minecraft.util.profiling.metrics.generated.js';

/** JVM class net.minecraft.util.profiling.ActiveProfiler. */
export interface ActiveProfilerMembers {
  readonly __javaSupertypes?: readonly [ProfileCollector];
  endTick(): void;
  getChartedPaths(): JavaSet<JavaOpaque<"org.apache.commons.lang3.tuple.Pair", [string, j_net_minecraft_util_profiling_metrics.MetricCategory]>>;
  getEntry(arg0: string): ActiveProfiler_PathEntry | null;
  getResults(): ProfileResults;
  incrementCounter(arg0: string, arg1: number): void;
  incrementCounter(arg0: JavaSupplier<string>, arg1: number): void;
  markForCharting(arg0: j_net_minecraft_util_profiling_metrics.MetricCategory): void;
  pop(): void;
  popPush(arg0: string): void;
  popPush(arg0: JavaSupplier<string>): void;
  push(arg0: string): void;
  push(arg0: JavaSupplier<string>): void;
  startTick(): void;
}
export type ActiveProfiler = ActiveProfilerMembers & ProfileCollector;
export interface ActiveProfilerStatics {
  new(arg0: JavaOpaque<"java.util.function.LongSupplier">, arg1: JavaOpaque<"java.util.function.IntSupplier">, arg2: JavaOpaque<"java.util.function.BooleanSupplier">): ActiveProfiler;
}

/** JVM class net.minecraft.util.profiling.ActiveProfiler$PathEntry. */
export interface ActiveProfiler_PathEntryMembers {
  readonly __javaSupertypes?: readonly [ProfilerPathEntry];
  getCount(): bigint;
  getCounters(): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2LongMap", [string]>;
  getDuration(): bigint;
  getMaxDuration(): bigint;
}
export type ActiveProfiler_PathEntry = ActiveProfiler_PathEntryMembers & ProfilerPathEntry;
export interface ActiveProfiler_PathEntryStatics {
  new(): ActiveProfiler_PathEntry;
}

/** JVM class net.minecraft.util.profiling.ContinuousProfiler. */
export interface ContinuousProfilerMembers {
  disable(): void;
  enable(): void;
  getFiller(): ProfilerFiller;
  getResults(): ProfileResults;
  isEnabled(): boolean;
}
export type ContinuousProfiler = ContinuousProfilerMembers;
export interface ContinuousProfilerStatics {
  new(arg0: JavaOpaque<"java.util.function.LongSupplier">, arg1: JavaOpaque<"java.util.function.IntSupplier">, arg2: JavaOpaque<"java.util.function.BooleanSupplier">): ContinuousProfiler;
}

/** JVM class net.minecraft.util.profiling.EmptyProfileResults. */
export interface EmptyProfileResultsMembers {
  readonly __javaSupertypes?: readonly [ProfileResults];
  getEndTimeNano(): bigint;
  getEndTimeTicks(): number;
  getProfilerResults(): string;
  getStartTimeNano(): bigint;
  getStartTimeTicks(): number;
  getTimes(arg0: string): JavaList<ResultField>;
  saveResults(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}
export type EmptyProfileResults = EmptyProfileResultsMembers & ProfileResults;
export interface EmptyProfileResultsStatics {
  readonly EMPTY: EmptyProfileResults;
}

/** JVM class net.minecraft.util.profiling.FilledProfileResults. */
export interface FilledProfileResultsMembers {
  readonly __javaSupertypes?: readonly [ProfileResults];
  getEndTimeNano(): bigint;
  getEndTimeTicks(): number;
  getProfilerResults(): string;
  getProfilerResults(arg0: bigint, arg1: number): string;
  getStartTimeNano(): bigint;
  getStartTimeTicks(): number;
  getTickDuration(): number;
  getTimes(arg0: string): JavaList<ResultField>;
  saveResults(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}
export type FilledProfileResults = FilledProfileResultsMembers & ProfileResults;
export interface FilledProfileResultsStatics {
  new(arg0: JavaMap<string, ProfilerPathEntry>, arg1: bigint, arg2: number, arg3: bigint, arg4: number): FilledProfileResults;
}

/** JVM class net.minecraft.util.profiling.InactiveProfiler. */
export interface InactiveProfilerMembers {
  readonly __javaSupertypes?: readonly [ProfileCollector];
  endTick(): void;
  getChartedPaths(): JavaSet<JavaOpaque<"org.apache.commons.lang3.tuple.Pair", [string, j_net_minecraft_util_profiling_metrics.MetricCategory]>>;
  getEntry(arg0: string): ActiveProfiler_PathEntry | null;
  getResults(): ProfileResults;
  incrementCounter(arg0: string, arg1: number): void;
  incrementCounter(arg0: JavaSupplier<string>, arg1: number): void;
  markForCharting(arg0: j_net_minecraft_util_profiling_metrics.MetricCategory): void;
  pop(): void;
  popPush(arg0: string): void;
  popPush(arg0: JavaSupplier<string>): void;
  push(arg0: string): void;
  push(arg0: JavaSupplier<string>): void;
  startTick(): void;
  zone(arg0: string): Zone;
  zone(arg0: JavaSupplier<string>): Zone;
}
export type InactiveProfiler = InactiveProfilerMembers & ProfileCollector;
export interface InactiveProfilerStatics {
  readonly INSTANCE: InactiveProfiler;
}

/** JVM interface net.minecraft.util.profiling.ProfileCollector. */
export interface ProfileCollectorMembers {
  readonly __javaSupertypes?: readonly [ProfilerFiller];
  getChartedPaths(): JavaSet<JavaOpaque<"org.apache.commons.lang3.tuple.Pair", [string, j_net_minecraft_util_profiling_metrics.MetricCategory]>>;
  getEntry(arg0: string): ActiveProfiler_PathEntry | null;
  getResults(): ProfileResults;
}
export type ProfileCollector = ProfileCollectorMembers & ProfilerFiller;
export interface ProfileCollectorStatics {
}

/** JVM class net.minecraft.util.profiling.Profiler. */
export interface ProfilerMembers {
}
export type Profiler = ProfilerMembers;
export interface ProfilerStatics {
  get(): ProfilerFiller;
  use(arg0: ProfilerFiller): Profiler_Scope;
}

/** JVM interface net.minecraft.util.profiling.Profiler$Scope. */
export interface Profiler_ScopeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
}
export type Profiler_Scope = Profiler_ScopeMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface Profiler_ScopeStatics {
}

/** JVM interface net.minecraft.util.profiling.ProfileResults. */
export interface ProfileResultsMembers {
  getEndTimeNano(): bigint;
  getEndTimeTicks(): number;
  getNanoDuration(): bigint;
  getProfilerResults(): string;
  getStartTimeNano(): bigint;
  getStartTimeTicks(): number;
  getTickDuration(): number;
  getTimes(arg0: string): JavaList<ResultField>;
  saveResults(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}
export type ProfileResults = ProfileResultsMembers;
export interface ProfileResultsStatics {
  readonly PATH_SEPARATOR: 30;
  demanglePath(arg0: string): string;
}

/** JVM interface net.minecraft.util.profiling.ProfilerFiller. */
export interface ProfilerFillerMembers {
  addZoneText(arg0: string): void;
  addZoneValue(arg0: bigint): void;
  endTick(): void;
  incrementCounter(arg0: string): void;
  incrementCounter(arg0: string, arg1: number): void;
  incrementCounter(arg0: JavaSupplier<string>): void;
  incrementCounter(arg0: JavaSupplier<string>, arg1: number): void;
  markForCharting(arg0: j_net_minecraft_util_profiling_metrics.MetricCategory): void;
  pop(): void;
  popPush(arg0: string): void;
  popPush(arg0: JavaSupplier<string>): void;
  push(arg0: string): void;
  push(arg0: JavaSupplier<string>): void;
  setZoneColor(arg0: number): void;
  startTick(): void;
  zone(arg0: string): Zone;
  zone(arg0: JavaSupplier<string>): Zone;
}
export type ProfilerFiller = ProfilerFillerMembers;
export interface ProfilerFillerStatics {
  readonly ROOT: "root";
  combine(arg0: ProfilerFiller, arg1: ProfilerFiller): ProfilerFiller;
}

/** JVM class net.minecraft.util.profiling.ProfilerFiller$CombinedProfileFiller. */
export interface ProfilerFiller_CombinedProfileFillerMembers {
  readonly __javaSupertypes?: readonly [ProfilerFiller];
  addZoneText(arg0: string): void;
  addZoneValue(arg0: bigint): void;
  endTick(): void;
  incrementCounter(arg0: string, arg1: number): void;
  incrementCounter(arg0: JavaSupplier<string>, arg1: number): void;
  markForCharting(arg0: j_net_minecraft_util_profiling_metrics.MetricCategory): void;
  pop(): void;
  popPush(arg0: string): void;
  popPush(arg0: JavaSupplier<string>): void;
  push(arg0: string): void;
  push(arg0: JavaSupplier<string>): void;
  setZoneColor(arg0: number): void;
  startTick(): void;
}
export type ProfilerFiller_CombinedProfileFiller = ProfilerFiller_CombinedProfileFillerMembers & ProfilerFiller;
export interface ProfilerFiller_CombinedProfileFillerStatics {
  new(arg0: ProfilerFiller, arg1: ProfilerFiller): ProfilerFiller_CombinedProfileFiller;
}

/** JVM interface net.minecraft.util.profiling.ProfilerPathEntry. */
export interface ProfilerPathEntryMembers {
  getCount(): bigint;
  getCounters(): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2LongMap", [string]>;
  getDuration(): bigint;
  getMaxDuration(): bigint;
}
export type ProfilerPathEntry = ProfilerPathEntryMembers;
export interface ProfilerPathEntryStatics {
}

/** JVM class net.minecraft.util.profiling.ResultField. */
export interface ResultFieldMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [ResultField]>];
  compareTo(arg0: object): number;
  compareTo(arg0: ResultField): number;
  readonly count: bigint;
  getColor(): number;
  readonly globalPercentage: number;
  readonly name: string;
  readonly percentage: number;
}
export type ResultField = ResultFieldMembers;
export interface ResultFieldStatics {
  new(arg0: string, arg1: number, arg2: number, arg3: bigint): ResultField;
}

/** JVM class net.minecraft.util.profiling.SingleTickProfiler. */
export interface SingleTickProfilerMembers {
  endTick(): void;
  startTick(): ProfilerFiller;
}
export type SingleTickProfiler = SingleTickProfilerMembers;
export interface SingleTickProfilerStatics {
  new(arg0: JavaOpaque<"java.util.function.LongSupplier">, arg1: string, arg2: bigint): SingleTickProfiler;
  createTickProfiler(arg0: string): SingleTickProfiler | null;
  decorateFiller(arg0: ProfilerFiller, arg1: SingleTickProfiler | null): ProfilerFiller | null;
}

/** JVM class net.minecraft.util.profiling.TracyZoneFiller. */
export interface TracyZoneFillerMembers {
  readonly __javaSupertypes?: readonly [ProfilerFiller];
  addZoneText(arg0: string): void;
  addZoneValue(arg0: bigint): void;
  endTick(): void;
  incrementCounter(arg0: string, arg1: number): void;
  incrementCounter(arg0: JavaSupplier<string>, arg1: number): void;
  markForCharting(arg0: j_net_minecraft_util_profiling_metrics.MetricCategory): void;
  pop(): void;
  popPush(arg0: string): void;
  popPush(arg0: JavaSupplier<string>): void;
  push(arg0: string): void;
  push(arg0: JavaSupplier<string>): void;
  setZoneColor(arg0: number): void;
  startTick(): void;
}
export type TracyZoneFiller = TracyZoneFillerMembers & ProfilerFiller;
export interface TracyZoneFillerStatics {
  new(): TracyZoneFiller;
}

/** JVM class net.minecraft.util.profiling.Zone. */
export interface ZoneMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  addText(arg0: string): Zone;
  addText(arg0: JavaSupplier<string>): Zone;
  addValue(arg0: bigint): Zone;
  close(): void;
  setColor(arg0: number): Zone;
}
export type Zone = ZoneMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface ZoneStatics {
  readonly INACTIVE: Zone;
}
