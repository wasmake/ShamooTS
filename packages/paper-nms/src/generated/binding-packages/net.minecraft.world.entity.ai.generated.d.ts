// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_sensing from './net.minecraft.world.entity.ai.sensing.generated.js';
import type * as j_net_minecraft_world_entity_schedule from './net.minecraft.world.entity.schedule.generated.js';

/** JVM class net.minecraft.world.entity.ai.Brain. */
export interface BrainMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  addActivity(arg0: j_net_minecraft_world_entity_schedule.Activity, arg1: number, arg2: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>]>): void;
  addActivity(arg0: j_net_minecraft_world_entity_schedule.Activity, arg1: JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>]>]>): void;
  addActivityAndRemoveMemoriesWhenStopped(arg0: j_net_minecraft_world_entity_schedule.Activity, arg1: JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>]>]>, arg2: JavaSet<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, j_net_minecraft_world_entity_ai_memory.MemoryStatus]>>, arg3: JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>): void;
  addActivityAndRemoveMemoryWhenStopped(arg0: j_net_minecraft_world_entity_schedule.Activity, arg1: number, arg2: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>]>, arg3: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>): void;
  addActivityWithConditions(arg0: j_net_minecraft_world_entity_schedule.Activity, arg1: number, arg2: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>]>, arg3: JavaSet<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, j_net_minecraft_world_entity_ai_memory.MemoryStatus]>>): void;
  addActivityWithConditions(arg0: j_net_minecraft_world_entity_schedule.Activity, arg1: JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>]>]>, arg2: JavaSet<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, j_net_minecraft_world_entity_ai_memory.MemoryStatus]>>): void;
  checkMemory(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryStatus): boolean;
  clearMemories(): void;
  copyWithoutBehaviors(): Brain<E>;
  eraseMemory<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>): void;
  getActiveActivities(): JavaSet<j_net_minecraft_world_entity_schedule.Activity>;
  getActiveNonCoreActivity(): JavaOptional<j_net_minecraft_world_entity_schedule.Activity>;
  getMemories(): JavaMap<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, JavaOptional<j_net_minecraft_world_entity_ai_memory.ExpirableValue<object>>>;
  getMemory<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>): JavaOptional<U>;
  getMemoryInternal<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>): JavaOptional<U> | null;
  getRunningBehaviors(): JavaList<j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>>;
  getSchedule(): j_net_minecraft_world_entity_schedule.Schedule;
  getTimeUntilExpiry<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>): bigint;
  hasMemoryValue(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>): boolean;
  isActive(arg0: j_net_minecraft_world_entity_schedule.Activity): boolean;
  isMemoryValue<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>, arg1: U): boolean;
  removeAllBehaviors(): void;
  serializeStart<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  setActiveActivityIfPossible(arg0: j_net_minecraft_world_entity_schedule.Activity): void;
  setActiveActivityToFirstValid(arg0: JavaList<j_net_minecraft_world_entity_schedule.Activity>): void;
  setCoreActivities(arg0: JavaSet<j_net_minecraft_world_entity_schedule.Activity>): void;
  setDefaultActivity(arg0: j_net_minecraft_world_entity_schedule.Activity): void;
  setMemory<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>, arg1: U | null): void;
  setMemory<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>, arg1: JavaOptional<U>): void;
  setMemoryWithExpiry<U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>, arg1: U, arg2: bigint): void;
  setSchedule(arg0: j_net_minecraft_world_entity_schedule.Schedule): void;
  stopAll(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): void;
  updateActivityFromSchedule(arg0: bigint, arg1: bigint): void;
  useDefaultActivity(): void;
}
export type Brain<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = BrainMembers<E>;
export interface BrainStatics {
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaCollection<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>, arg1: JavaCollection<j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<E>>>, arg2: JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"net.minecraft.world.entity.ai.Brain$MemoryValue", [object]>]>, arg3: JavaSupplier<JavaOpaque<"com.mojang.serialization.Codec", [Brain<E>]>>): Brain<E>;
  codec<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaCollection<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>, arg1: JavaCollection<j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<E>>>): JavaOpaque<"com.mojang.serialization.Codec", [Brain<E>]>;
  provider<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaCollection<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>, arg1: JavaCollection<j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<E>>>): Brain_Provider<E>;
}

/** JVM class net.minecraft.world.entity.ai.Brain$Provider. */
export interface Brain_ProviderMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): Brain<E>;
}
export type Brain_Provider<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = Brain_ProviderMembers<E>;
export interface Brain_ProviderStatics {
}
