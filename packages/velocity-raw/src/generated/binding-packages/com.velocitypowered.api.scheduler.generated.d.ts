// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface com.velocitypowered.api.scheduler.ScheduledTask. */
export interface ScheduledTaskMembers {
  cancel(): void;
  plugin(): object;
  status(): TaskStatus;
}
export type ScheduledTask = ScheduledTaskMembers;
export interface ScheduledTaskStatics {
}

/** JVM interface com.velocitypowered.api.scheduler.Scheduler. */
export interface SchedulerMembers {
  buildTask(arg0: object, arg1: JavaRunnable): Scheduler_TaskBuilder;
  buildTask(arg0: object, arg1: JavaConsumer<ScheduledTask>): Scheduler_TaskBuilder;
  tasksByPlugin(arg0: object): JavaCollection<ScheduledTask>;
}
export type Scheduler = SchedulerMembers;
export interface SchedulerStatics {
}

/** JVM interface com.velocitypowered.api.scheduler.Scheduler$TaskBuilder. */
export interface Scheduler_TaskBuilderMembers {
  clearDelay(): Scheduler_TaskBuilder;
  clearRepeat(): Scheduler_TaskBuilder;
  delay(arg0: bigint, arg1: JavaOpaque<"java.util.concurrent.TimeUnit">): Scheduler_TaskBuilder;
  delay(arg0: JavaOpaque<"java.time.Duration">): Scheduler_TaskBuilder;
  repeat(arg0: bigint, arg1: JavaOpaque<"java.util.concurrent.TimeUnit">): Scheduler_TaskBuilder;
  repeat(arg0: JavaOpaque<"java.time.Duration">): Scheduler_TaskBuilder;
  schedule(): ScheduledTask;
}
export type Scheduler_TaskBuilder = Scheduler_TaskBuilderMembers;
export interface Scheduler_TaskBuilderStatics {
}

/** Live JVM enum com.velocitypowered.api.scheduler.TaskStatus; constants are host handles, not strings. */
export type TaskStatus = JavaEnum<"com.velocitypowered.api.scheduler.TaskStatus", "CANCELLED" | "FINISHED" | "SCHEDULED"> & TaskStatusMembers;
export interface TaskStatusMembers {
}
export interface TaskStatusStatics {
  readonly CANCELLED: TaskStatus;
  readonly FINISHED: TaskStatus;
  readonly SCHEDULED: TaskStatus;
  valueOf(arg0: string): TaskStatus;
  values(): Array<TaskStatus>;
}
