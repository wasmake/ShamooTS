// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM interface io.papermc.paper.threadedregions.scheduler.AsyncScheduler. */
export interface AsyncSchedulerMembers {
  cancelTasks(arg0: j_org_bukkit_plugin.Plugin): void;
  runAtFixedRate(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: bigint, arg3: bigint, arg4: JavaOpaque<"java.util.concurrent.TimeUnit">): ScheduledTask;
  runDelayed(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: bigint, arg3: JavaOpaque<"java.util.concurrent.TimeUnit">): ScheduledTask;
  runNow(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>): ScheduledTask;
}
export type AsyncScheduler = AsyncSchedulerMembers;
export interface AsyncSchedulerStatics {
}

/** JVM interface io.papermc.paper.threadedregions.scheduler.EntityScheduler. */
export interface EntitySchedulerMembers {
  execute(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable, arg2: JavaRunnable | null, arg3: bigint): boolean | null;
  run(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: JavaRunnable | null): ScheduledTask | null;
  runAtFixedRate(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: JavaRunnable | null, arg3: bigint, arg4: bigint): ScheduledTask | null;
  runDelayed(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: JavaRunnable | null, arg3: bigint): ScheduledTask | null;
}
export type EntityScheduler = EntitySchedulerMembers;
export interface EntitySchedulerStatics {
}

/** JVM interface io.papermc.paper.threadedregions.scheduler.GlobalRegionScheduler. */
export interface GlobalRegionSchedulerMembers {
  cancelTasks(arg0: j_org_bukkit_plugin.Plugin): void;
  execute(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaRunnable): void;
  run(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>): ScheduledTask;
  runAtFixedRate(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: bigint, arg3: bigint): ScheduledTask;
  runDelayed(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaConsumer<ScheduledTask>, arg2: bigint): ScheduledTask;
}
export type GlobalRegionScheduler = GlobalRegionSchedulerMembers;
export interface GlobalRegionSchedulerStatics {
}

/** JVM interface io.papermc.paper.threadedregions.scheduler.RegionScheduler. */
export interface RegionSchedulerMembers {
  execute(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.Location, arg2: JavaRunnable): void;
  execute(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.World, arg2: number, arg3: number, arg4: JavaRunnable): void;
  run(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.Location, arg2: JavaConsumer<ScheduledTask>): ScheduledTask;
  run(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.World, arg2: number, arg3: number, arg4: JavaConsumer<ScheduledTask>): ScheduledTask;
  runAtFixedRate(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.Location, arg2: JavaConsumer<ScheduledTask>, arg3: bigint, arg4: bigint): ScheduledTask;
  runAtFixedRate(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.World, arg2: number, arg3: number, arg4: JavaConsumer<ScheduledTask>, arg5: bigint, arg6: bigint): ScheduledTask;
  runDelayed(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.Location, arg2: JavaConsumer<ScheduledTask>, arg3: bigint): ScheduledTask;
  runDelayed(arg0: j_org_bukkit_plugin.Plugin, arg1: j_org_bukkit.World, arg2: number, arg3: number, arg4: JavaConsumer<ScheduledTask>, arg5: bigint): ScheduledTask;
}
export type RegionScheduler = RegionSchedulerMembers;
export interface RegionSchedulerStatics {
}

/** JVM interface io.papermc.paper.threadedregions.scheduler.ScheduledTask. */
export interface ScheduledTaskMembers {
  cancel(): ScheduledTask_CancelledState;
  getExecutionState(): ScheduledTask_ExecutionState;
  getOwningPlugin(): j_org_bukkit_plugin.Plugin;
  isCancelled(): boolean;
  isRepeatingTask(): boolean;
}
export type ScheduledTask = ScheduledTaskMembers;
export interface ScheduledTaskStatics {
}

/** Live JVM enum io.papermc.paper.threadedregions.scheduler.ScheduledTask$CancelledState; constants are host handles, not strings. */
export type ScheduledTask_CancelledState = JavaEnum<"io.papermc.paper.threadedregions.scheduler.ScheduledTask$CancelledState", "ALREADY_EXECUTED" | "CANCELLED_ALREADY" | "CANCELLED_BY_CALLER" | "NEXT_RUNS_CANCELLED" | "NEXT_RUNS_CANCELLED_ALREADY" | "RUNNING"> & ScheduledTask_CancelledStateMembers;
export interface ScheduledTask_CancelledStateMembers {
}
export interface ScheduledTask_CancelledStateStatics {
  readonly ALREADY_EXECUTED: ScheduledTask_CancelledState;
  readonly CANCELLED_ALREADY: ScheduledTask_CancelledState;
  readonly CANCELLED_BY_CALLER: ScheduledTask_CancelledState;
  readonly NEXT_RUNS_CANCELLED: ScheduledTask_CancelledState;
  readonly NEXT_RUNS_CANCELLED_ALREADY: ScheduledTask_CancelledState;
  readonly RUNNING: ScheduledTask_CancelledState;
  valueOf(arg0: string): ScheduledTask_CancelledState;
  values(): Array<ScheduledTask_CancelledState>;
}

/** Live JVM enum io.papermc.paper.threadedregions.scheduler.ScheduledTask$ExecutionState; constants are host handles, not strings. */
export type ScheduledTask_ExecutionState = JavaEnum<"io.papermc.paper.threadedregions.scheduler.ScheduledTask$ExecutionState", "CANCELLED" | "CANCELLED_RUNNING" | "FINISHED" | "IDLE" | "RUNNING"> & ScheduledTask_ExecutionStateMembers;
export interface ScheduledTask_ExecutionStateMembers {
}
export interface ScheduledTask_ExecutionStateStatics {
  readonly CANCELLED: ScheduledTask_ExecutionState;
  readonly CANCELLED_RUNNING: ScheduledTask_ExecutionState;
  readonly FINISHED: ScheduledTask_ExecutionState;
  readonly IDLE: ScheduledTask_ExecutionState;
  readonly RUNNING: ScheduledTask_ExecutionState;
  valueOf(arg0: string): ScheduledTask_ExecutionState;
  values(): Array<ScheduledTask_ExecutionState>;
}
