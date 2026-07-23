// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling from './net.minecraft.util.profiling.generated.js';

/** Live JVM enum net.minecraft.util.profiling.metrics.MetricCategory; constants are host handles, not strings. */
export type MetricCategory = JavaEnum<"net.minecraft.util.profiling.metrics.MetricCategory", "CHUNK_RENDERING" | "CHUNK_RENDERING_DISPATCHING" | "CONSECUTIVE_EXECUTORS" | "CPU" | "EVENT_LOOPS" | "GPU" | "JVM" | "PATH_FINDING" | "TICK_LOOP"> & MetricCategoryMembers;
export interface MetricCategoryMembers {
  getDescription(): string;
}
export interface MetricCategoryStatics {
  readonly CHUNK_RENDERING: MetricCategory;
  readonly CHUNK_RENDERING_DISPATCHING: MetricCategory;
  readonly CONSECUTIVE_EXECUTORS: MetricCategory;
  readonly CPU: MetricCategory;
  readonly EVENT_LOOPS: MetricCategory;
  readonly GPU: MetricCategory;
  readonly JVM: MetricCategory;
  readonly PATH_FINDING: MetricCategory;
  readonly TICK_LOOP: MetricCategory;
  valueOf(arg0: string): MetricCategory;
  values(): Array<MetricCategory>;
}

/** JVM class net.minecraft.util.profiling.metrics.MetricSampler. */
export interface MetricSamplerMembers {
  equals(arg0: object): boolean;
  getCategory(): MetricCategory;
  getName(): string;
  hashCode(): number;
  onEndTick(arg0: number): void;
  onFinished(): void;
  onStartTick(): void;
  result(): MetricSampler_SamplerResult;
  triggersThreshold(): boolean;
}
export type MetricSampler = MetricSamplerMembers;
export interface MetricSamplerStatics {
  new(arg0: string, arg1: MetricCategory, arg2: JavaOpaque<"java.util.function.DoubleSupplier">, arg3: JavaRunnable | null, arg4: MetricSampler_ThresholdTest | null): MetricSampler;
  builder<T>(arg0: string, arg1: MetricCategory, arg2: JavaOpaque<"java.util.function.ToDoubleFunction", [T]>, arg3: T): MetricSampler_MetricSamplerBuilder<T>;
  create<T>(arg0: string, arg1: MetricCategory, arg2: T, arg3: JavaOpaque<"java.util.function.ToDoubleFunction", [T]>): MetricSampler;
  create(arg0: string, arg1: MetricCategory, arg2: JavaOpaque<"java.util.function.DoubleSupplier">): MetricSampler;
}

/** JVM class net.minecraft.util.profiling.metrics.MetricSampler$MetricSamplerBuilder. */
export interface MetricSampler_MetricSamplerBuilderMembers<T = unknown> {
  build(): MetricSampler;
  withBeforeTick(arg0: JavaConsumer<T>): MetricSampler_MetricSamplerBuilder<T>;
  withThresholdAlert(arg0: MetricSampler_ThresholdTest): MetricSampler_MetricSamplerBuilder<T>;
}
export type MetricSampler_MetricSamplerBuilder<T = unknown> = MetricSampler_MetricSamplerBuilderMembers<T>;
export interface MetricSampler_MetricSamplerBuilderStatics {
  new<T>(arg0: string, arg1: MetricCategory, arg2: JavaOpaque<"java.util.function.ToDoubleFunction", [T]>, arg3: T): MetricSampler_MetricSamplerBuilder<T>;
}

/** JVM class net.minecraft.util.profiling.metrics.MetricSampler$SamplerResult. */
export interface MetricSampler_SamplerResultMembers {
  getFirstTick(): number;
  getLastTick(): number;
  valueAtTick(arg0: number): number;
}
export type MetricSampler_SamplerResult = MetricSampler_SamplerResultMembers;
export interface MetricSampler_SamplerResultStatics {
  new(arg0: number, arg1: number, arg2: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2DoubleMap">): MetricSampler_SamplerResult;
}

/** JVM interface net.minecraft.util.profiling.metrics.MetricSampler$ThresholdTest. */
export interface MetricSampler_ThresholdTestMembers {
  test(arg0: number): boolean;
}
export type MetricSampler_ThresholdTest = MetricSampler_ThresholdTestMembers;
export interface MetricSampler_ThresholdTestStatics {
}

/** JVM class net.minecraft.util.profiling.metrics.MetricSampler$ValueIncreasedByPercentage. */
export interface MetricSampler_ValueIncreasedByPercentageMembers {
  readonly __javaSupertypes?: readonly [MetricSampler_ThresholdTest];
  test(arg0: number): boolean;
}
export type MetricSampler_ValueIncreasedByPercentage = MetricSampler_ValueIncreasedByPercentageMembers & MetricSampler_ThresholdTest;
export interface MetricSampler_ValueIncreasedByPercentageStatics {
  new(arg0: number): MetricSampler_ValueIncreasedByPercentage;
}

/** JVM class net.minecraft.util.profiling.metrics.MetricsRegistry. */
export interface MetricsRegistryMembers {
  add(arg0: ProfilerMeasured): void;
  getRegisteredSamplers(): JavaList<MetricSampler>;
}
export type MetricsRegistry = MetricsRegistryMembers;
export interface MetricsRegistryStatics {
  readonly INSTANCE: MetricsRegistry;
}

/** JVM interface net.minecraft.util.profiling.metrics.MetricsSamplerProvider. */
export interface MetricsSamplerProviderMembers {
  samplers(arg0: JavaSupplier<j_net_minecraft_util_profiling.ProfileCollector>): JavaSet<MetricSampler>;
}
export type MetricsSamplerProvider = MetricsSamplerProviderMembers;
export interface MetricsSamplerProviderStatics {
}

/** JVM interface net.minecraft.util.profiling.metrics.ProfilerMeasured. */
export interface ProfilerMeasuredMembers {
  profiledMetrics(): JavaList<MetricSampler>;
}
export type ProfilerMeasured = ProfilerMeasuredMembers;
export interface ProfilerMeasuredStatics {
}
