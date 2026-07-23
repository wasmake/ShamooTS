// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling from './net.minecraft.util.profiling.generated.js';
import type * as j_net_minecraft_util_profiling_metrics from './net.minecraft.util.profiling.metrics.generated.js';

/** JVM class net.minecraft.util.profiling.metrics.storage.MetricsPersister. */
export interface MetricsPersisterMembers {
  saveReports(arg0: JavaSet<j_net_minecraft_util_profiling_metrics.MetricSampler>, arg1: JavaMap<j_net_minecraft_util_profiling_metrics.MetricSampler, JavaList<RecordedDeviation>>, arg2: j_net_minecraft_util_profiling.ProfileResults): JavaOpaque<"java.nio.file.Path">;
}
export type MetricsPersister = MetricsPersisterMembers;
export interface MetricsPersisterStatics {
  new(arg0: string): MetricsPersister;
  readonly DEVIATIONS_DIR_NAME: "deviations";
  readonly METRICS_DIR_NAME: "metrics";
  readonly PROFILING_RESULTS_DIR: JavaOpaque<"java.nio.file.Path">;
  readonly PROFILING_RESULT_FILENAME: "profiling.txt";
}

/** JVM class net.minecraft.util.profiling.metrics.storage.RecordedDeviation. */
export interface RecordedDeviationMembers {
  readonly profilerResultAtTick: j_net_minecraft_util_profiling.ProfileResults;
  readonly tick: number;
  readonly timestamp: JavaOpaque<"java.time.Instant">;
}
export type RecordedDeviation = RecordedDeviationMembers;
export interface RecordedDeviationStatics {
  new(arg0: JavaOpaque<"java.time.Instant">, arg1: number, arg2: j_net_minecraft_util_profiling.ProfileResults): RecordedDeviation;
}
