// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling from './net.minecraft.util.profiling.generated.js';
import type * as j_net_minecraft_util_profiling_metrics from './net.minecraft.util.profiling.metrics.generated.js';
import type * as j_net_minecraft_util_profiling_metrics_storage from './net.minecraft.util.profiling.metrics.storage.generated.js';

/** JVM class net.minecraft.util.profiling.metrics.profiling.ActiveMetricsRecorder. */
export interface ActiveMetricsRecorderMembers {
  readonly __javaSupertypes?: readonly [MetricsRecorder];
  cancel(): void;
  end(): void;
  endTick(): void;
  getProfiler(): j_net_minecraft_util_profiling.ProfilerFiller;
  isRecording(): boolean;
  startTick(): void;
}
export type ActiveMetricsRecorder = ActiveMetricsRecorderMembers & MetricsRecorder;
export interface ActiveMetricsRecorderStatics {
  readonly PROFILING_MAX_DURATION_SECONDS: 10;
  createStarted(arg0: j_net_minecraft_util_profiling_metrics.MetricsSamplerProvider, arg1: JavaOpaque<"java.util.function.LongSupplier">, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: j_net_minecraft_util_profiling_metrics_storage.MetricsPersister, arg4: JavaConsumer<j_net_minecraft_util_profiling.ProfileResults>, arg5: JavaConsumer<JavaOpaque<"java.nio.file.Path">>): ActiveMetricsRecorder;
  registerGlobalCompletionCallback(arg0: JavaConsumer<JavaOpaque<"java.nio.file.Path">>): void;
}

/** JVM class net.minecraft.util.profiling.metrics.profiling.InactiveMetricsRecorder. */
export interface InactiveMetricsRecorderMembers {
  readonly __javaSupertypes?: readonly [MetricsRecorder];
  cancel(): void;
  end(): void;
  endTick(): void;
  getProfiler(): j_net_minecraft_util_profiling.ProfilerFiller;
  isRecording(): boolean;
  startTick(): void;
}
export type InactiveMetricsRecorder = InactiveMetricsRecorderMembers & MetricsRecorder;
export interface InactiveMetricsRecorderStatics {
  new(): InactiveMetricsRecorder;
  readonly INSTANCE: MetricsRecorder;
}

/** JVM interface net.minecraft.util.profiling.metrics.profiling.MetricsRecorder. */
export interface MetricsRecorderMembers {
  cancel(): void;
  end(): void;
  endTick(): void;
  getProfiler(): j_net_minecraft_util_profiling.ProfilerFiller;
  isRecording(): boolean;
  startTick(): void;
}
export type MetricsRecorder = MetricsRecorderMembers;
export interface MetricsRecorderStatics {
}

/** JVM class net.minecraft.util.profiling.metrics.profiling.ProfilerSamplerAdapter. */
export interface ProfilerSamplerAdapterMembers {
  newSamplersFoundInProfiler(arg0: JavaSupplier<j_net_minecraft_util_profiling.ProfileCollector>): JavaSet<j_net_minecraft_util_profiling_metrics.MetricSampler>;
}
export type ProfilerSamplerAdapter = ProfilerSamplerAdapterMembers;
export interface ProfilerSamplerAdapterStatics {
  new(): ProfilerSamplerAdapter;
}

/** JVM class net.minecraft.util.profiling.metrics.profiling.ServerMetricsSamplersProvider. */
export interface ServerMetricsSamplersProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_profiling_metrics.MetricsSamplerProvider];
  samplers(arg0: JavaSupplier<j_net_minecraft_util_profiling.ProfileCollector>): JavaSet<j_net_minecraft_util_profiling_metrics.MetricSampler>;
}
export type ServerMetricsSamplersProvider = ServerMetricsSamplersProviderMembers & j_net_minecraft_util_profiling_metrics.MetricsSamplerProvider;
export interface ServerMetricsSamplersProviderStatics {
  new(arg0: JavaOpaque<"java.util.function.LongSupplier">, arg1: boolean): ServerMetricsSamplersProvider;
  runtimeIndependentSamplers(): JavaSet<j_net_minecraft_util_profiling_metrics.MetricSampler>;
  tickTimeSampler(arg0: JavaOpaque<"java.util.function.LongSupplier">): j_net_minecraft_util_profiling_metrics.MetricSampler;
}
