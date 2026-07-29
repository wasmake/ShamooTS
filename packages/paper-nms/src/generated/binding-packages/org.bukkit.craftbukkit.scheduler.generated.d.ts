// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.bukkit.craftbukkit.scheduler.CraftAsyncScheduler. */
export interface CraftAsyncSchedulerMembers {
  readonly __javaSupertypes?: readonly [CraftScheduler];
  cancelTask(arg0: number): void;
  cancelTasks(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  mainThreadHeartbeat(): void;
}
export type CraftAsyncScheduler = CraftAsyncSchedulerMembers & CraftScheduler;
export interface CraftAsyncSchedulerStatics {
}

/** JVM class org.bukkit.craftbukkit.scheduler.CraftScheduler. */
export interface CraftSchedulerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.scheduler.BukkitScheduler">];
  callSyncMethod<T>(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"java.util.concurrent.Callable", [T]>): PromiseLike<T>;
  cancelTask(arg0: number): void;
  cancelTasks(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  getActiveWorkers(): JavaList<JavaOpaque<"org.bukkit.scheduler.BukkitWorker">>;
  getMainThreadExecutor(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): JavaOpaque<"java.util.concurrent.Executor">;
  getPendingTasks(): JavaList<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>;
  isCurrentlyRunning(arg0: number): boolean;
  isQueued(arg0: number): boolean;
  mainThreadHeartbeat(): void;
  runTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  /** @throws java.lang.IllegalArgumentException */
  runTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>): void;
  /** @throws java.lang.IllegalArgumentException */
  runTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  /** @throws java.lang.IllegalArgumentException */
  runTaskAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskLater(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLater(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>, arg2: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLater(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">, arg2: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskLaterAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLaterAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>, arg2: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskLaterAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">, arg2: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskTimer(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: object, arg2: bigint, arg3: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskTimer(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint, arg3: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimer(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>, arg2: bigint, arg3: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimer(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">, arg2: bigint, arg3: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskTimerAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: object, arg2: bigint, arg3: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  runTaskTimerAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint, arg3: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimerAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>, arg2: bigint, arg3: bigint): void;
  /** @throws java.lang.IllegalArgumentException */
  runTaskTimerAsynchronously(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">, arg2: bigint, arg3: bigint): JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
  scheduleAsyncDelayedTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable): number;
  scheduleAsyncDelayedTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint): number;
  scheduleAsyncRepeatingTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint, arg3: bigint): number;
  scheduleSyncDelayedTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable): number;
  scheduleSyncDelayedTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint): number;
  scheduleSyncDelayedTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">): number;
  scheduleSyncDelayedTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">, arg2: bigint): number;
  scheduleSyncRepeatingTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaRunnable, arg2: bigint, arg3: bigint): number;
  scheduleSyncRepeatingTask(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.scheduler.BukkitRunnable">, arg2: bigint, arg3: bigint): number;
  toString(): string;
}
export type CraftScheduler = CraftSchedulerMembers & JavaOpaque<"org.bukkit.scheduler.BukkitScheduler">;
export interface CraftSchedulerStatics {
  new(): CraftScheduler;
  new(arg0: boolean): CraftScheduler;
}

/** JVM class org.bukkit.craftbukkit.scheduler.CraftTask. */
export interface CraftTaskMembers {
  readonly __javaSupertypes?: readonly [JavaRunnable, JavaOpaque<"org.bukkit.scheduler.BukkitTask">];
  readonly cTask: JavaConsumer<JavaOpaque<"org.bukkit.scheduler.BukkitTask">>;
  cancel(): void;
  getOwner(): JavaOpaque<"org.bukkit.plugin.Plugin">;
  getTaskId(): number;
  isCancelled(): boolean;
  isSync(): boolean;
  readonly rTask: JavaRunnable;
  run(): void;
}
export type CraftTask = CraftTaskMembers & JavaRunnable & JavaOpaque<"org.bukkit.scheduler.BukkitTask">;
export interface CraftTaskStatics {
  readonly CANCEL: -2;
  readonly DONE_FOR_FUTURE: -4;
  readonly ERROR: 0;
  readonly NO_REPEATING: -1;
  readonly PROCESS_FOR_FUTURE: -3;
}
