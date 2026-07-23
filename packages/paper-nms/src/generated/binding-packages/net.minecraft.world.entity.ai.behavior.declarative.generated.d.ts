// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';

/** JVM class net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder. */
export interface BehaviorBuilderMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown, M = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, M]>];
}
export type BehaviorBuilder<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown, M = unknown> = BehaviorBuilderMembers<E, M> & JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, M]>;
export interface BehaviorBuilderStatics {
  create<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaFunction<BehaviorBuilder_Instance<E>, JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, Trigger<E>]>>): j_net_minecraft_world_entity_ai_behavior.OneShot<E>;
  instance<E /* extends j_net_minecraft_world_entity.LivingEntity */>(): BehaviorBuilder_Instance<E>;
  sequence<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: Trigger<E>, arg1: Trigger<E>): j_net_minecraft_world_entity_ai_behavior.OneShot<E>;
  triggerIf<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_server_level.ServerLevel, E]>): j_net_minecraft_world_entity_ai_behavior.OneShot<E>;
  triggerIf<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaPredicate<E>): j_net_minecraft_world_entity_ai_behavior.OneShot<E>;
  triggerIf<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaPredicate<E>, arg1: j_net_minecraft_world_entity_ai_behavior.OneShot<E>): j_net_minecraft_world_entity_ai_behavior.OneShot<E>;
  unbox<E /* extends j_net_minecraft_world_entity.LivingEntity */, M>(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, M]>): BehaviorBuilder<E, M>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder$Instance. */
export interface BehaviorBuilder_InstanceMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.kinds.Applicative", [BehaviorBuilder_Mu<E>, JavaOpaque<"net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder$Instance$Mu", [E]>]>];
  absent<Value>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>): BehaviorBuilder<E, MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.Const$Mu", [JavaOpaque<"com.mojang.datafixers.util.Unit">]>, Value>>;
  ap2(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App">): JavaOpaque<"com.mojang.datafixers.kinds.App">;
  ap2<A, B, R>(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, JavaBiFunction<A, B, R>]>, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, A]>, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, B]>): BehaviorBuilder<E, R>;
  ap3(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg3: JavaOpaque<"com.mojang.datafixers.kinds.App">): JavaOpaque<"com.mojang.datafixers.kinds.App">;
  ap3<T1, T2, T3, R>(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, JavaOpaque<"com.mojang.datafixers.util.Function3", [T1, T2, T3, R]>]>, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T1]>, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T2]>, arg3: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T3]>): BehaviorBuilder<E, R>;
  ap4(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg3: JavaOpaque<"com.mojang.datafixers.kinds.App">, arg4: JavaOpaque<"com.mojang.datafixers.kinds.App">): JavaOpaque<"com.mojang.datafixers.kinds.App">;
  ap4<T1, T2, T3, T4, R>(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, JavaOpaque<"com.mojang.datafixers.util.Function4", [T1, T2, T3, T4, R]>]>, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T1]>, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T2]>, arg3: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T3]>, arg4: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T4]>): BehaviorBuilder<E, R>;
  get<Value>(arg0: MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.IdF$Mu">, Value>): Value;
  ifTriggered(arg0: Trigger<E>): BehaviorBuilder<E, JavaOpaque<"com.mojang.datafixers.util.Unit">>;
  lift1<A, R>(arg0: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, JavaFunction<A, R>]>): JavaFunction<JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, A]>, JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, R]>>;
  map(arg0: JavaFunction<object, object>, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App">): JavaOpaque<"com.mojang.datafixers.kinds.App">;
  map<T, R>(arg0: JavaFunction<T, R>, arg1: JavaOpaque<"com.mojang.datafixers.kinds.App", [BehaviorBuilder_Mu<E>, T]>): BehaviorBuilder<E, R>;
  point(arg0: object): JavaOpaque<"com.mojang.datafixers.kinds.App">;
  point<A>(arg0: A): BehaviorBuilder<E, A>;
  point<A>(arg0: JavaSupplier<string>, arg1: A): BehaviorBuilder<E, A>;
  present<Value>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>): BehaviorBuilder<E, MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.IdF$Mu">, Value>>;
  registered<Value>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>): BehaviorBuilder<E, MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.OptionalBox$Mu">, Value>>;
  tryGet<Value>(arg0: MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.OptionalBox$Mu">, Value>): JavaOptional<Value>;
}
export type BehaviorBuilder_Instance<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = BehaviorBuilder_InstanceMembers<E> & JavaOpaque<"com.mojang.datafixers.kinds.Applicative", [BehaviorBuilder_Mu<E>, JavaOpaque<"net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder$Instance$Mu", [E]>]>;
export interface BehaviorBuilder_InstanceStatics {
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(): BehaviorBuilder_Instance<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder$Mu. */
export interface BehaviorBuilder_MuMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.kinds.K1">];
}
export type BehaviorBuilder_Mu<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = BehaviorBuilder_MuMembers<E> & JavaOpaque<"com.mojang.datafixers.kinds.K1">;
export interface BehaviorBuilder_MuStatics {
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(): BehaviorBuilder_Mu<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.declarative.MemoryAccessor. */
export interface MemoryAccessorMembers<F /* extends JavaOpaque<"com.mojang.datafixers.kinds.K1"> */ = unknown, Value = unknown> {
  erase(): void;
  set(arg0: Value): void;
  setOrErase(arg0: JavaOptional<Value>): void;
  setWithExpiry(arg0: Value, arg1: bigint): void;
  value(): JavaOpaque<"com.mojang.datafixers.kinds.App", [F, Value]>;
}
export type MemoryAccessor<F /* extends JavaOpaque<"com.mojang.datafixers.kinds.K1"> */ = unknown, Value = unknown> = MemoryAccessorMembers<F, Value>;
export interface MemoryAccessorStatics {
  new<F /* extends JavaOpaque<"com.mojang.datafixers.kinds.K1"> */, Value>(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>, arg2: JavaOpaque<"com.mojang.datafixers.kinds.App", [F, Value]>): MemoryAccessor<F, Value>;
}

/** JVM interface net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition. */
export interface MemoryConditionMembers<F /* extends JavaOpaque<"com.mojang.datafixers.kinds.K1"> */ = unknown, Value = unknown> {
  condition(): j_net_minecraft_world_entity_ai_memory.MemoryStatus;
  createAccessor(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: JavaOptional<Value>): MemoryAccessor<F, Value> | null;
  memory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>;
}
export type MemoryCondition<F /* extends JavaOpaque<"com.mojang.datafixers.kinds.K1"> */ = unknown, Value = unknown> = MemoryConditionMembers<F, Value>;
export interface MemoryConditionStatics {
}

/** JVM record net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition$Absent. */
export interface MemoryCondition_AbsentMembers<Value = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, MemoryCondition<JavaOpaque<"com.mojang.datafixers.kinds.Const$Mu", [JavaOpaque<"com.mojang.datafixers.util.Unit">]>, Value>];
  condition(): j_net_minecraft_world_entity_ai_memory.MemoryStatus;
  createAccessor(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: JavaOptional<Value>): MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.Const$Mu", [JavaOpaque<"com.mojang.datafixers.util.Unit">]>, Value>;
  equals(arg0: object): boolean;
  hashCode(): number;
  memory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>;
  toString(): string;
}
export type MemoryCondition_Absent<Value = unknown> = MemoryCondition_AbsentMembers<Value> & JavaOpaque<"java.lang.Record"> & MemoryCondition<JavaOpaque<"com.mojang.datafixers.kinds.Const$Mu", [JavaOpaque<"com.mojang.datafixers.util.Unit">]>, Value>;
export interface MemoryCondition_AbsentStatics {
  new<Value>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>): MemoryCondition_Absent<Value>;
}

/** JVM record net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition$Present. */
export interface MemoryCondition_PresentMembers<Value = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, MemoryCondition<JavaOpaque<"com.mojang.datafixers.kinds.IdF$Mu">, Value>];
  condition(): j_net_minecraft_world_entity_ai_memory.MemoryStatus;
  createAccessor(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: JavaOptional<Value>): MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.IdF$Mu">, Value>;
  equals(arg0: object): boolean;
  hashCode(): number;
  memory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>;
  toString(): string;
}
export type MemoryCondition_Present<Value = unknown> = MemoryCondition_PresentMembers<Value> & JavaOpaque<"java.lang.Record"> & MemoryCondition<JavaOpaque<"com.mojang.datafixers.kinds.IdF$Mu">, Value>;
export interface MemoryCondition_PresentStatics {
  new<Value>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>): MemoryCondition_Present<Value>;
}

/** JVM record net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition$Registered. */
export interface MemoryCondition_RegisteredMembers<Value = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, MemoryCondition<JavaOpaque<"com.mojang.datafixers.kinds.OptionalBox$Mu">, Value>];
  condition(): j_net_minecraft_world_entity_ai_memory.MemoryStatus;
  createAccessor(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: JavaOptional<Value>): MemoryAccessor<JavaOpaque<"com.mojang.datafixers.kinds.OptionalBox$Mu">, Value>;
  equals(arg0: object): boolean;
  hashCode(): number;
  memory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>;
  toString(): string;
}
export type MemoryCondition_Registered<Value = unknown> = MemoryCondition_RegisteredMembers<Value> & JavaOpaque<"java.lang.Record"> & MemoryCondition<JavaOpaque<"com.mojang.datafixers.kinds.OptionalBox$Mu">, Value>;
export interface MemoryCondition_RegisteredStatics {
  new<Value>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<Value>): MemoryCondition_Registered<Value>;
}

/** JVM interface net.minecraft.world.entity.ai.behavior.declarative.Trigger. */
export interface TriggerMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  trigger(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
}
export type Trigger<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = TriggerMembers<E>;
export interface TriggerStatics {
}
