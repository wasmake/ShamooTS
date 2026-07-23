// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.world.entity.schedule.Activity. */
export interface ActivityMembers {
  equals(arg0: object): boolean;
  getName(): string;
  hashCode(): number;
  toString(): string;
}
export type Activity = ActivityMembers;
export interface ActivityStatics {
  readonly ADMIRE_ITEM: Activity;
  readonly AVOID: Activity;
  readonly CELEBRATE: Activity;
  readonly CORE: Activity;
  readonly DIG: Activity;
  readonly EMERGE: Activity;
  readonly FIGHT: Activity;
  readonly HIDE: Activity;
  readonly IDLE: Activity;
  readonly INVESTIGATE: Activity;
  readonly LAY_SPAWN: Activity;
  readonly LONG_JUMP: Activity;
  readonly MEET: Activity;
  readonly PANIC: Activity;
  readonly PLAY: Activity;
  readonly PLAY_DEAD: Activity;
  readonly PRE_RAID: Activity;
  readonly RAID: Activity;
  readonly RAM: Activity;
  readonly REST: Activity;
  readonly RIDE: Activity;
  readonly ROAR: Activity;
  readonly SNIFF: Activity;
  readonly SWIM: Activity;
  readonly TONGUE: Activity;
  readonly WORK: Activity;
}

/** JVM class net.minecraft.world.entity.schedule.Keyframe. */
export interface KeyframeMembers {
  getTimeStamp(): number;
  getValue(): number;
}
export type Keyframe = KeyframeMembers;
export interface KeyframeStatics {
  new(arg0: number, arg1: number): Keyframe;
}

/** JVM class net.minecraft.world.entity.schedule.Schedule. */
export interface ScheduleMembers {
  ensureTimelineExistsFor(arg0: Activity): void;
  getActivityAt(arg0: number): Activity;
  getAllTimelinesExceptFor(arg0: Activity): JavaList<Timeline>;
  getTimelineFor(arg0: Activity): Timeline;
}
export type Schedule = ScheduleMembers;
export interface ScheduleStatics {
  new(): Schedule;
  readonly EMPTY: Schedule;
  readonly SIMPLE: Schedule;
  readonly TOTAL_WORK_TIME: 7000;
  readonly VILLAGER_BABY: Schedule;
  readonly VILLAGER_DEFAULT: Schedule;
  readonly WORK_START_TIME: 2000;
  register(arg0: string): ScheduleBuilder;
}

/** JVM class net.minecraft.world.entity.schedule.ScheduleBuilder. */
export interface ScheduleBuilderMembers {
  build(): Schedule;
  changeActivityAt(arg0: number, arg1: Activity): ScheduleBuilder;
}
export type ScheduleBuilder = ScheduleBuilderMembers;
export interface ScheduleBuilderStatics {
  new(arg0: Schedule): ScheduleBuilder;
}

/** JVM class net.minecraft.world.entity.schedule.Timeline. */
export interface TimelineMembers {
  addKeyframe(arg0: number, arg1: number): Timeline;
  addKeyframes(arg0: JavaCollection<Keyframe>): Timeline;
  getKeyframes(): JavaOpaque<"com.google.common.collect.ImmutableList", [Keyframe]>;
  getValueAt(arg0: number): number;
}
export type Timeline = TimelineMembers;
export interface TimelineStatics {
  new(): Timeline;
}
