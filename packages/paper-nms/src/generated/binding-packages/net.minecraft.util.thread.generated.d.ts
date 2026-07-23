// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling_metrics from './net.minecraft.util.profiling.metrics.generated.js';

/** JVM abstract net.minecraft.util.thread.AbstractConsecutiveExecutor. */
export interface AbstractConsecutiveExecutorMembers<T /* extends JavaRunnable */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_profiling_metrics.ProfilerMeasured, TaskScheduler<T>, JavaRunnable];
  close(): void;
  hasWork(): boolean;
  name(): string;
  profiledMetrics(): JavaList<j_net_minecraft_util_profiling_metrics.MetricSampler>;
  run(): void;
  runAll(): void;
  schedule(arg0: T): void;
  size(): number;
  toString(): string;
}
export type AbstractConsecutiveExecutor<T /* extends JavaRunnable */ = unknown> = AbstractConsecutiveExecutorMembers<T> & j_net_minecraft_util_profiling_metrics.ProfilerMeasured & TaskScheduler<T> & JavaRunnable;
export interface AbstractConsecutiveExecutorStatics {
  new<T /* extends JavaRunnable */>(arg0: StrictQueue<T>, arg1: JavaOpaque<"java.util.concurrent.Executor">, arg2: string): AbstractConsecutiveExecutor<T>;
}

/** JVM abstract net.minecraft.util.thread.BlockableEventLoop. */
export interface BlockableEventLoopMembers<R /* extends JavaRunnable */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_profiling_metrics.ProfilerMeasured, TaskScheduler<R>, JavaOpaque<"java.util.concurrent.Executor">];
  doRunTask(arg0: R): void;
  dropAllTasks(): void;
  execute(arg0: JavaRunnable): void;
  executeBlocking(arg0: JavaRunnable): void;
  executeIfPossible(arg0: JavaRunnable): void;
  getPendingTasksCount(): number;
  getRunningThread(): JavaOpaque<"java.lang.Thread">;
  isSameThread(): boolean;
  managedBlock(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  name(): string;
  pollTask(): boolean;
  profiledMetrics(): JavaList<j_net_minecraft_util_profiling_metrics.MetricSampler>;
  runAllTasks(): void;
  schedule(arg0: R): void;
  scheduleExecutables(): boolean;
  scheduleOnMain(arg0: JavaRunnable): void;
  shouldRun(arg0: R): boolean;
  submit(arg0: JavaRunnable): PromiseLike<void>;
  submit<V>(arg0: JavaSupplier<V>): PromiseLike<V>;
  waitForTasks(): void;
}
export type BlockableEventLoop<R /* extends JavaRunnable */ = unknown> = BlockableEventLoopMembers<R> & j_net_minecraft_util_profiling_metrics.ProfilerMeasured & TaskScheduler<R> & JavaOpaque<"java.util.concurrent.Executor">;
export interface BlockableEventLoopStatics {
  new<R /* extends JavaRunnable */>(arg0: string): BlockableEventLoop<R>;
  readonly BLOCK_TIME_NANOS: 100000;
  isNonRecoverable(arg0: JavaOpaque<"java.lang.Throwable">): boolean;
}

/** JVM class net.minecraft.util.thread.ConsecutiveExecutor. */
export interface ConsecutiveExecutorMembers {
  readonly __javaSupertypes?: readonly [AbstractConsecutiveExecutor<JavaRunnable>];
  wrapRunnable(arg0: JavaRunnable): JavaRunnable;
}
export type ConsecutiveExecutor = ConsecutiveExecutorMembers & AbstractConsecutiveExecutor<JavaRunnable>;
export interface ConsecutiveExecutorStatics {
  new(arg0: JavaOpaque<"java.util.concurrent.Executor">, arg1: string): ConsecutiveExecutor;
}

/** JVM class net.minecraft.util.thread.NamedThreadFactory. */
export interface NamedThreadFactoryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.concurrent.ThreadFactory">];
  newThread(arg0: JavaRunnable): JavaOpaque<"java.lang.Thread">;
}
export type NamedThreadFactory = NamedThreadFactoryMembers & JavaOpaque<"java.util.concurrent.ThreadFactory">;
export interface NamedThreadFactoryStatics {
  new(arg0: string): NamedThreadFactory;
}

/** JVM class net.minecraft.util.thread.ParallelMapTransform. */
export interface ParallelMapTransformMembers {
}
export type ParallelMapTransform = ParallelMapTransformMembers;
export interface ParallelMapTransformStatics {
  new(): ParallelMapTransform;
  schedule<K, U, V>(arg0: JavaMap<K, U>, arg1: JavaBiFunction<K, U, V>, arg2: number, arg3: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<JavaMap<K, V>>;
  schedule<K, U, V>(arg0: JavaMap<K, U>, arg1: JavaBiFunction<K, U, V>, arg2: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<JavaMap<K, V>>;
}

/** JVM class net.minecraft.util.thread.PriorityConsecutiveExecutor. */
export interface PriorityConsecutiveExecutorMembers {
  readonly __javaSupertypes?: readonly [AbstractConsecutiveExecutor<StrictQueue_RunnableWithPriority>];
  scheduleWithResult<Source>(arg0: number, arg1: JavaConsumer<PromiseLike<Source>>): PromiseLike<Source>;
  wrapRunnable(arg0: JavaRunnable): JavaRunnable;
  wrapRunnable(arg0: JavaRunnable): StrictQueue_RunnableWithPriority;
}
export type PriorityConsecutiveExecutor = PriorityConsecutiveExecutorMembers & AbstractConsecutiveExecutor<StrictQueue_RunnableWithPriority>;
export interface PriorityConsecutiveExecutorStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.concurrent.Executor">, arg2: string): PriorityConsecutiveExecutor;
}

/** JVM abstract net.minecraft.util.thread.ReentrantBlockableEventLoop. */
export interface ReentrantBlockableEventLoopMembers<R /* extends JavaRunnable */ = unknown> {
  readonly __javaSupertypes?: readonly [BlockableEventLoop<R>];
  doRunTask(arg0: R): void;
  runningTask(): boolean;
  scheduleExecutables(): boolean;
}
export type ReentrantBlockableEventLoop<R /* extends JavaRunnable */ = unknown> = ReentrantBlockableEventLoopMembers<R> & BlockableEventLoop<R>;
export interface ReentrantBlockableEventLoopStatics {
  new<R /* extends JavaRunnable */>(arg0: string): ReentrantBlockableEventLoop<R>;
}

/** JVM interface net.minecraft.util.thread.StrictQueue. */
export interface StrictQueueMembers<T /* extends JavaRunnable */ = unknown> {
  isEmpty(): boolean;
  pop(): JavaRunnable | null;
  push(arg0: T): boolean;
  size(): number;
}
export type StrictQueue<T /* extends JavaRunnable */ = unknown> = StrictQueueMembers<T>;
export interface StrictQueueStatics {
}

/** JVM class net.minecraft.util.thread.StrictQueue$FixedPriorityQueue. */
export interface StrictQueue_FixedPriorityQueueMembers {
  readonly __javaSupertypes?: readonly [StrictQueue<StrictQueue_RunnableWithPriority>];
  isEmpty(): boolean;
  pop(): JavaRunnable | null;
  push(arg0: JavaRunnable): boolean;
  push(arg0: StrictQueue_RunnableWithPriority): boolean;
  size(): number;
}
export type StrictQueue_FixedPriorityQueue = StrictQueue_FixedPriorityQueueMembers & StrictQueue<StrictQueue_RunnableWithPriority>;
export interface StrictQueue_FixedPriorityQueueStatics {
  new(arg0: number): StrictQueue_FixedPriorityQueue;
}

/** JVM class net.minecraft.util.thread.StrictQueue$QueueStrictQueue. */
export interface StrictQueue_QueueStrictQueueMembers {
  readonly __javaSupertypes?: readonly [StrictQueue<JavaRunnable>];
  isEmpty(): boolean;
  pop(): JavaRunnable | null;
  push(arg0: JavaRunnable): boolean;
  size(): number;
}
export type StrictQueue_QueueStrictQueue = StrictQueue_QueueStrictQueueMembers & StrictQueue<JavaRunnable>;
export interface StrictQueue_QueueStrictQueueStatics {
  new(arg0: JavaOpaque<"java.util.Queue", [JavaRunnable]>): StrictQueue_QueueStrictQueue;
}

/** JVM record net.minecraft.util.thread.StrictQueue$RunnableWithPriority. */
export interface StrictQueue_RunnableWithPriorityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaRunnable];
  equals(arg0: object): boolean;
  hashCode(): number;
  priority(): number;
  run(): void;
  task(): JavaRunnable;
  toString(): string;
}
export type StrictQueue_RunnableWithPriority = StrictQueue_RunnableWithPriorityMembers & JavaOpaque<"java.lang.Record"> & JavaRunnable;
export interface StrictQueue_RunnableWithPriorityStatics {
  new(arg0: number, arg1: JavaRunnable): StrictQueue_RunnableWithPriority;
}

/** JVM interface net.minecraft.util.thread.TaskScheduler. */
export interface TaskSchedulerMembers<R /* extends JavaRunnable */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  name(): string;
  schedule(arg0: R): void;
  scheduleWithResult<Source>(arg0: JavaConsumer<PromiseLike<Source>>): PromiseLike<Source>;
  wrapRunnable(arg0: JavaRunnable): R;
}
export type TaskScheduler<R /* extends JavaRunnable */ = unknown> = TaskSchedulerMembers<R> & JavaOpaque<"java.lang.AutoCloseable">;
export interface TaskSchedulerStatics {
  wrapExecutor(arg0: string, arg1: JavaOpaque<"java.util.concurrent.Executor">): TaskScheduler<JavaRunnable>;
}
