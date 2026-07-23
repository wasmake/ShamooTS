// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.goal.target.DefendVillageTargetGoal. */
export interface DefendVillageTargetGoalMembers {
  readonly __javaSupertypes?: readonly [TargetGoal];
  canUse(): boolean;
  start(): void;
}
export type DefendVillageTargetGoal = DefendVillageTargetGoalMembers & TargetGoal;
export interface DefendVillageTargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.IronGolem): DefendVillageTargetGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.HurtByTargetGoal. */
export interface HurtByTargetGoalMembers {
  readonly __javaSupertypes?: readonly [TargetGoal];
  alertOther(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  alertOthers(): void;
  canUse(): boolean;
  setAlertOthers(...arg0: Array<JavaClass<object>>): HurtByTargetGoal;
  start(): void;
}
export type HurtByTargetGoal = HurtByTargetGoalMembers & TargetGoal;
export interface HurtByTargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, ...arg1: Array<JavaClass<object>>): HurtByTargetGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal. */
export interface NearestAttackableTargetGoalMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [TargetGoal];
  canUse(): boolean;
  findTarget(): void;
  getTargetSearchArea(arg0: number): j_net_minecraft_world_phys.AABB;
  readonly randomInterval: number;
  setTarget(arg0: j_net_minecraft_world_entity.LivingEntity | null): void | null;
  start(): void;
  target: j_net_minecraft_world_entity.LivingEntity | null;
  targetConditions: j_net_minecraft_world_entity_ai_targeting.TargetingConditions;
  readonly targetType: JavaClass<T>;
}
export type NearestAttackableTargetGoal<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = NearestAttackableTargetGoalMembers<T> & TargetGoal;
export interface NearestAttackableTargetGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector | null): NearestAttackableTargetGoal<T>;
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<T>, arg2: boolean): NearestAttackableTargetGoal<T>;
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<T>, arg2: boolean, arg3: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector): NearestAttackableTargetGoal<T>;
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<T>, arg2: boolean, arg3: boolean): NearestAttackableTargetGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.NearestAttackableWitchTargetGoal. */
export interface NearestAttackableWitchTargetGoalMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [NearestAttackableTargetGoal<T>];
  canUse(): boolean;
  setCanAttack(arg0: boolean): void;
}
export type NearestAttackableWitchTargetGoal<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = NearestAttackableWitchTargetGoalMembers<T> & NearestAttackableTargetGoal<T>;
export interface NearestAttackableWitchTargetGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity_raid.Raider, arg1: JavaClass<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector | null): NearestAttackableWitchTargetGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.NearestHealableRaiderTargetGoal. */
export interface NearestHealableRaiderTargetGoalMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [NearestAttackableTargetGoal<T>];
  canUse(): boolean;
  decrementCooldown(): void;
  getCooldown(): number;
  start(): void;
}
export type NearestHealableRaiderTargetGoal<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = NearestHealableRaiderTargetGoalMembers<T> & NearestAttackableTargetGoal<T>;
export interface NearestHealableRaiderTargetGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity_raid.Raider, arg1: JavaClass<T>, arg2: boolean, arg3: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector | null): NearestHealableRaiderTargetGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.NonTameRandomTargetGoal. */
export interface NonTameRandomTargetGoalMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [NearestAttackableTargetGoal<T>];
  canContinueToUse(): boolean;
  canUse(): boolean;
}
export type NonTameRandomTargetGoal<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = NonTameRandomTargetGoalMembers<T> & NearestAttackableTargetGoal<T>;
export interface NonTameRandomTargetGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.TamableAnimal, arg1: JavaClass<T>, arg2: boolean, arg3: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector | null): NonTameRandomTargetGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.OwnerHurtByTargetGoal. */
export interface OwnerHurtByTargetGoalMembers {
  readonly __javaSupertypes?: readonly [TargetGoal];
  canUse(): boolean;
  start(): void;
}
export type OwnerHurtByTargetGoal = OwnerHurtByTargetGoalMembers & TargetGoal;
export interface OwnerHurtByTargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity.TamableAnimal): OwnerHurtByTargetGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.OwnerHurtTargetGoal. */
export interface OwnerHurtTargetGoalMembers {
  readonly __javaSupertypes?: readonly [TargetGoal];
  canUse(): boolean;
  start(): void;
}
export type OwnerHurtTargetGoal = OwnerHurtTargetGoalMembers & TargetGoal;
export interface OwnerHurtTargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity.TamableAnimal): OwnerHurtTargetGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.target.ResetUniversalAngerTargetGoal. */
export interface ResetUniversalAngerTargetGoalMembers<T /* extends j_net_minecraft_world_entity.NeutralMob */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  start(): void;
}
export type ResetUniversalAngerTargetGoal<T /* extends j_net_minecraft_world_entity.NeutralMob */ = unknown> = ResetUniversalAngerTargetGoalMembers<T> & j_net_minecraft_world_entity_ai_goal.Goal;
export interface ResetUniversalAngerTargetGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.NeutralMob */>(arg0: T, arg1: boolean): ResetUniversalAngerTargetGoal<T>;
}

/** JVM abstract net.minecraft.world.entity.ai.goal.target.TargetGoal. */
export interface TargetGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canAttack(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_entity_ai_targeting.TargetingConditions): boolean | null;
  canContinueToUse(): boolean;
  getFollowDistance(): number;
  readonly mob: j_net_minecraft_world_entity.Mob;
  readonly mustSee: boolean;
  setUnseenMemoryTicks(arg0: number): TargetGoal;
  start(): void;
  stop(): void;
  targetMob: j_net_minecraft_world_entity.LivingEntity | null;
  unseenMemoryTicks: number;
}
export type TargetGoal = TargetGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface TargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: boolean): TargetGoal;
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: boolean, arg2: boolean): TargetGoal;
}
