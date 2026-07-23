// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM abstract org.bukkit.scheduler.BukkitRunnable. */
export interface BukkitRunnableMembers {
  readonly __javaSupertypes?: readonly [JavaRunnable];
  /** @throws java.lang.IllegalStateException */
  cancel(): void;
  /** @throws java.lang.IllegalStateException */
  getTaskId(): number;
  /** @throws java.lang.IllegalStateException */
  isCancelled(): boolean;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  runTask(arg0: j_org_bukkit_plugin.Plugin): BukkitTask;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  runTaskAsynchronously(arg0: j_org_bukkit_plugin.Plugin): BukkitTask;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  runTaskLater(arg0: j_org_bukkit_plugin.Plugin, arg1: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  runTaskLaterAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  runTaskTimer(arg0: j_org_bukkit_plugin.Plugin, arg1: bigint, arg2: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  runTaskTimerAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: bigint, arg2: bigint): BukkitTask;
}
export type BukkitRunnable = BukkitRunnableMembers & JavaRunnable;
export interface BukkitRunnableStatics {
  new(): BukkitRunnable;
}

/** JVM interface org.bukkit.scheduler.BukkitScheduler. */
export interface BukkitSchedulerMembers {
  callSyncMethod<T>(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaOpaque<"java.util.concurrent.Callable", [T]>): PromiseLike<T>;
  cancelTask(arg0: number): void;
  cancelTasks(arg0: j_org_bukkit_plugin.Plugin): void;
  getActiveWorkers(): JavaList<BukkitWorker>;
  getMainThreadExecutor(arg0: j_org_bukkit_plugin.Plugin): JavaOpaque<"java.util.concurrent.Executor">;
  getPendingTasks(): JavaList<BukkitTask>;
  isCurrentlyRunning(arg0: number): boolean;
  isQueued(arg0: number): boolean;
  /** @throws java.lang.IllegalArgumentException */
  runTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<BukkitTask>): void;
  /** @throws java.lang.IllegalArgumentException */
  runTask(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<BukkitTask>): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLater(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLater(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<BukkitTask>, arg2: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLater(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable, arg2: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLaterAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLaterAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<BukkitTask>, arg2: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLaterAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable, arg2: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimer(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint, arg3: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimer(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<BukkitTask>, arg2: bigint, arg3: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimer(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable, arg2: bigint, arg3: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimerAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint, arg3: bigint): BukkitTask;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimerAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<BukkitTask>, arg2: bigint, arg3: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimerAsynchronously(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable, arg2: bigint, arg3: bigint): BukkitTask;
  scheduleAsyncDelayedTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable): number;
  scheduleAsyncDelayedTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint): number;
  scheduleAsyncRepeatingTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint, arg3: bigint): number;
  scheduleSyncDelayedTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable): number;
  scheduleSyncDelayedTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint): number;
  scheduleSyncDelayedTask(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable): number;
  scheduleSyncDelayedTask(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable, arg2: bigint): number;
  scheduleSyncRepeatingTask(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: bigint, arg3: bigint): number;
  scheduleSyncRepeatingTask(arg0: j_org_bukkit_plugin.Plugin, arg1: BukkitRunnable, arg2: bigint, arg3: bigint): number;
}
export type BukkitScheduler = BukkitSchedulerMembers;
export interface BukkitSchedulerStatics {
}

/** JVM interface org.bukkit.scheduler.BukkitTask. */
export interface BukkitTaskMembers {
  cancel(): void;
  getOwner(): j_org_bukkit_plugin.Plugin;
  getTaskId(): number;
  isCancelled(): boolean;
  isSync(): boolean;
}
export type BukkitTask = BukkitTaskMembers;
export interface BukkitTaskStatics {
}

/** JVM interface org.bukkit.scheduler.BukkitWorker. */
export interface BukkitWorkerMembers {
  getOwner(): j_org_bukkit_plugin.Plugin;
  getTaskId(): number;
  getThread(): JavaOpaque<"java.lang.Thread">;
}
export type BukkitWorker = BukkitWorkerMembers;
export interface BukkitWorkerStatics {
}
