// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';

/** JVM class net.minecraft.world.entity.ai.targeting.TargetingConditions. */
export interface TargetingConditionsMembers {
  copy(): TargetingConditions;
  ignoreInvisibilityTesting(): TargetingConditions;
  ignoreLineOfSight(): TargetingConditions;
  range(arg0: number): TargetingConditions;
  selector(arg0: TargetingConditions_Selector | null): TargetingConditions | null;
  test(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity | null, arg2: j_net_minecraft_world_entity.LivingEntity): boolean | null;
}
export type TargetingConditions = TargetingConditionsMembers;
export interface TargetingConditionsStatics {
  readonly DEFAULT: TargetingConditions;
  forCombat(): TargetingConditions;
  forNonCombat(): TargetingConditions;
}

/** JVM interface net.minecraft.world.entity.ai.targeting.TargetingConditions$Selector. */
export interface TargetingConditions_SelectorMembers {
  test(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_server_level.ServerLevel): boolean;
}
export type TargetingConditions_Selector = TargetingConditions_SelectorMembers;
export interface TargetingConditions_SelectorStatics {
}
