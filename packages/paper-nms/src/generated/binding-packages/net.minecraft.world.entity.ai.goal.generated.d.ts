// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_navigation from './net.minecraft.world.entity.ai.navigation.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_animal_wolf from './net.minecraft.world.entity.animal.wolf.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.goal.AvoidEntityGoal. */
export interface AvoidEntityGoalMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [Goal];
  readonly avoidClass: JavaClass<T>;
  readonly avoidPredicate: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>;
  canContinueToUse(): boolean;
  canUse(): boolean;
  readonly maxDist: number;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  path: j_net_minecraft_world_level_pathfinder.Path | null;
  readonly pathNav: j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  readonly predicateOnAvoidEntity: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>;
  start(): void;
  stop(): void;
  tick(): void;
  toAvoid: T | null;
}
export type AvoidEntityGoal<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = AvoidEntityGoalMembers<T> & Goal;
export interface AvoidEntityGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: JavaClass<T>, arg2: number, arg3: number, arg4: number): AvoidEntityGoal<T>;
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: JavaClass<T>, arg2: number, arg3: number, arg4: number, arg5: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>): AvoidEntityGoal<T>;
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: JavaClass<T>, arg2: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>, arg3: number, arg4: number, arg5: number, arg6: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>): AvoidEntityGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.BegGoal. */
export interface BegGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type BegGoal = BegGoalMembers & Goal;
export interface BegGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal_wolf.Wolf, arg1: number): BegGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.BreakDoorGoal. */
export interface BreakDoorGoalMembers {
  readonly __javaSupertypes?: readonly [DoorInteractGoal];
  breakTime: number;
  canContinueToUse(): boolean;
  canUse(): boolean;
  doorBreakTime: number;
  getDoorBreakTime(): number;
  lastBreakProgress: number;
  start(): void;
  stop(): void;
  tick(): void;
}
export type BreakDoorGoal = BreakDoorGoalMembers & DoorInteractGoal;
export interface BreakDoorGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number, arg2: JavaPredicate<j_net_minecraft_world.Difficulty>): BreakDoorGoal;
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaPredicate<j_net_minecraft_world.Difficulty>): BreakDoorGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.BreathAirGoal. */
export interface BreathAirGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  isInterruptable(): boolean;
  start(): void;
  tick(): void;
}
export type BreathAirGoal = BreathAirGoalMembers & Goal;
export interface BreathAirGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob): BreathAirGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.BreedGoal. */
export interface BreedGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  readonly animal: j_net_minecraft_world_entity_animal.Animal;
  breed(): void;
  canContinueToUse(): boolean;
  canUse(): boolean;
  readonly level: j_net_minecraft_server_level.ServerLevel;
  partner: j_net_minecraft_world_entity_animal.Animal | null;
  stop(): void;
  tick(): void;
}
export type BreedGoal = BreedGoalMembers & Goal;
export interface BreedGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.Animal, arg1: number): BreedGoal;
  new(arg0: j_net_minecraft_world_entity_animal.Animal, arg1: number, arg2: JavaClass<j_net_minecraft_world_entity_animal.Animal>): BreedGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.CatLieOnBedGoal. */
export interface CatLieOnBedGoalMembers {
  readonly __javaSupertypes?: readonly [MoveToBlockGoal];
  canUse(): boolean;
  isValidTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  nextStartTick(arg0: j_net_minecraft_world_entity.PathfinderMob): number;
  start(): void;
  stop(): void;
  tick(): void;
}
export type CatLieOnBedGoal = CatLieOnBedGoalMembers & MoveToBlockGoal;
export interface CatLieOnBedGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.Cat, arg1: number, arg2: number): CatLieOnBedGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.CatSitOnBlockGoal. */
export interface CatSitOnBlockGoalMembers {
  readonly __javaSupertypes?: readonly [MoveToBlockGoal];
  canUse(): boolean;
  isValidTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type CatSitOnBlockGoal = CatSitOnBlockGoalMembers & MoveToBlockGoal;
export interface CatSitOnBlockGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.Cat, arg1: number): CatSitOnBlockGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.ClimbOnTopOfPowderSnowGoal. */
export interface ClimbOnTopOfPowderSnowGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  tick(): void;
}
export type ClimbOnTopOfPowderSnowGoal = ClimbOnTopOfPowderSnowGoalMembers & Goal;
export interface ClimbOnTopOfPowderSnowGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): ClimbOnTopOfPowderSnowGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.DolphinJumpGoal. */
export interface DolphinJumpGoalMembers {
  readonly __javaSupertypes?: readonly [JumpGoal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  isInterruptable(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type DolphinJumpGoal = DolphinJumpGoalMembers & JumpGoal;
export interface DolphinJumpGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.Dolphin, arg1: number): DolphinJumpGoal;
}

/** JVM abstract net.minecraft.world.entity.ai.goal.DoorInteractGoal. */
export interface DoorInteractGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  doorPos: j_net_minecraft_core.BlockPos;
  hasDoor: boolean;
  isOpen(): boolean;
  mob: j_net_minecraft_world_entity.Mob;
  requiresUpdateEveryTick(): boolean;
  setOpen(arg0: boolean): void;
  start(): void;
  tick(): void;
}
export type DoorInteractGoal = DoorInteractGoalMembers & Goal;
export interface DoorInteractGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): DoorInteractGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.EatBlockGoal. */
export interface EatBlockGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  getEatAnimationTick(): number;
  start(): void;
  stop(): void;
  tick(): void;
}
export type EatBlockGoal = EatBlockGoalMembers & Goal;
export interface EatBlockGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): EatBlockGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FleeSunGoal. */
export interface FleeSunGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  getHidePos(): j_net_minecraft_world_phys.Vec3 | null;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  setWantedPos(): boolean;
  start(): void;
}
export type FleeSunGoal = FleeSunGoalMembers & Goal;
export interface FleeSunGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): FleeSunGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FloatGoal. */
export interface FloatGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  tick(): void;
}
export type FloatGoal = FloatGoalMembers & Goal;
export interface FloatGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): FloatGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FollowBoatGoal. */
export interface FollowBoatGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  isInterruptable(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type FollowBoatGoal = FollowBoatGoalMembers & Goal;
export interface FollowBoatGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob): FollowBoatGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FollowFlockLeaderGoal. */
export interface FollowFlockLeaderGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  nextStartTick(arg0: j_net_minecraft_world_entity_animal.AbstractSchoolingFish): number;
  start(): void;
  stop(): void;
  tick(): void;
}
export type FollowFlockLeaderGoal = FollowFlockLeaderGoalMembers & Goal;
export interface FollowFlockLeaderGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.AbstractSchoolingFish): FollowFlockLeaderGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FollowMobGoal. */
export interface FollowMobGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type FollowMobGoal = FollowMobGoalMembers & Goal;
export interface FollowMobGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number, arg2: number, arg3: number): FollowMobGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FollowOwnerGoal. */
export interface FollowOwnerGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type FollowOwnerGoal = FollowOwnerGoalMembers & Goal;
export interface FollowOwnerGoalStatics {
  new(arg0: j_net_minecraft_world_entity.TamableAnimal, arg1: number, arg2: number, arg3: number): FollowOwnerGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.FollowParentGoal. */
export interface FollowParentGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type FollowParentGoal = FollowParentGoalMembers & Goal;
export interface FollowParentGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.Animal, arg1: number): FollowParentGoal;
  readonly DONT_FOLLOW_IF_CLOSER_THAN: 3;
  readonly HORIZONTAL_SCAN_RANGE: 8;
  readonly VERTICAL_SCAN_RANGE: 4;
}

/** JVM abstract net.minecraft.world.entity.ai.goal.Goal. */
export interface GoalMembers {
  addFlag(arg0: Goal_Flag): void;
  adjustedTickDelay(arg0: number): number;
  asPaperGoal<T /* extends JavaOpaque<"org.bukkit.entity.Mob"> */>(): JavaOpaque<"com.destroystokyo.paper.entity.ai.Goal", [T]>;
  canContinueToUse(): boolean;
  canUse(): boolean;
  getFlags(): JavaOpaque<"ca.spottedleaf.moonrise.common.set.OptimizedSmallEnumSet", [Goal_Flag]>;
  hasFlag(arg0: Goal_Flag): boolean;
  isInterruptable(): boolean;
  requiresUpdateEveryTick(): boolean;
  setFlags(arg0: JavaOpaque<"java.util.EnumSet", [Goal_Flag]>): void;
  start(): void;
  stop(): void;
  tick(): void;
  toString(): string;
}
export type Goal = GoalMembers;
export interface GoalStatics {
  new(): Goal;
  getServerLevel(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_server_level.ServerLevel;
  getServerLevel(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_server_level.ServerLevel;
  reducedTickDelay(arg0: number): number;
}

/** Live JVM enum net.minecraft.world.entity.ai.goal.Goal$Flag; constants are host handles, not strings. */
export type Goal_Flag = JavaEnum<"net.minecraft.world.entity.ai.goal.Goal$Flag", "JUMP" | "LOOK" | "MOVE" | "TARGET" | "UNKNOWN_BEHAVIOR"> & Goal_FlagMembers;
export interface Goal_FlagMembers {
}
export interface Goal_FlagStatics {
  readonly JUMP: Goal_Flag;
  readonly LOOK: Goal_Flag;
  readonly MOVE: Goal_Flag;
  readonly TARGET: Goal_Flag;
  readonly UNKNOWN_BEHAVIOR: Goal_Flag;
  valueOf(arg0: string): Goal_Flag;
  values(): Array<Goal_Flag>;
}

/** JVM class net.minecraft.world.entity.ai.goal.GoalSelector. */
export interface GoalSelectorMembers {
  addGoal(arg0: number, arg1: Goal): void;
  disableControlFlag(arg0: Goal_Flag): void;
  enableControlFlag(arg0: Goal_Flag): void;
  getAvailableGoals(): JavaSet<WrappedGoal>;
  hasTasks(): boolean;
  inactiveTick(): boolean;
  removeAllGoals(arg0: JavaPredicate<Goal>): void;
  removeGoal(arg0: Goal): void;
  setControlFlag(arg0: Goal_Flag, arg1: boolean): void;
  tick(): void;
  tickRunningGoals(arg0: boolean): void;
}
export type GoalSelector = GoalSelectorMembers;
export interface GoalSelectorStatics {
  new(): GoalSelector;
}

/** JVM class net.minecraft.world.entity.ai.goal.GolemRandomStrollInVillageGoal. */
export interface GolemRandomStrollInVillageGoalMembers {
  readonly __javaSupertypes?: readonly [RandomStrollGoal];
  getPosition(): j_net_minecraft_world_phys.Vec3 | null;
}
export type GolemRandomStrollInVillageGoal = GolemRandomStrollInVillageGoalMembers & RandomStrollGoal;
export interface GolemRandomStrollInVillageGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): GolemRandomStrollInVillageGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.InteractGoal. */
export interface InteractGoalMembers {
  readonly __javaSupertypes?: readonly [LookAtPlayerGoal];
}
export type InteractGoal = InteractGoalMembers & LookAtPlayerGoal;
export interface InteractGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<j_net_minecraft_world_entity.LivingEntity>, arg2: number): InteractGoal;
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<j_net_minecraft_world_entity.LivingEntity>, arg2: number, arg3: number): InteractGoal;
}

/** JVM abstract net.minecraft.world.entity.ai.goal.JumpGoal. */
export interface JumpGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
}
export type JumpGoal = JumpGoalMembers & Goal;
export interface JumpGoalStatics {
  new(): JumpGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.LandOnOwnersShoulderGoal. */
export interface LandOnOwnersShoulderGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canUse(): boolean;
  isInterruptable(): boolean;
  start(): void;
  tick(): void;
}
export type LandOnOwnersShoulderGoal = LandOnOwnersShoulderGoalMembers & Goal;
export interface LandOnOwnersShoulderGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.ShoulderRidingEntity): LandOnOwnersShoulderGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.LeapAtTargetGoal. */
export interface LeapAtTargetGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
}
export type LeapAtTargetGoal = LeapAtTargetGoalMembers & Goal;
export interface LeapAtTargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number): LeapAtTargetGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.LlamaFollowCaravanGoal. */
export interface LlamaFollowCaravanGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  readonly llama: j_net_minecraft_world_entity_animal_horse.Llama;
  stop(): void;
  tick(): void;
}
export type LlamaFollowCaravanGoal = LlamaFollowCaravanGoalMembers & Goal;
export interface LlamaFollowCaravanGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal_horse.Llama, arg1: number): LlamaFollowCaravanGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.LookAtPlayerGoal. */
export interface LookAtPlayerGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  lookAt: j_net_minecraft_world_entity.Entity | null;
  readonly lookAtContext: j_net_minecraft_world_entity_ai_targeting.TargetingConditions;
  readonly lookAtType: JavaClass<j_net_minecraft_world_entity.LivingEntity>;
  readonly lookDistance: number;
  readonly mob: j_net_minecraft_world_entity.Mob;
  readonly probability: number;
  start(): void;
  stop(): void;
  tick(): void;
}
export type LookAtPlayerGoal = LookAtPlayerGoalMembers & Goal;
export interface LookAtPlayerGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<j_net_minecraft_world_entity.LivingEntity>, arg2: number): LookAtPlayerGoal;
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<j_net_minecraft_world_entity.LivingEntity>, arg2: number, arg3: number): LookAtPlayerGoal;
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaClass<j_net_minecraft_world_entity.LivingEntity>, arg2: number, arg3: number, arg4: boolean): LookAtPlayerGoal;
  readonly DEFAULT_PROBABILITY: 0.02;
}

/** JVM class net.minecraft.world.entity.ai.goal.LookAtTradingPlayerGoal. */
export interface LookAtTradingPlayerGoalMembers {
  readonly __javaSupertypes?: readonly [LookAtPlayerGoal];
  canUse(): boolean;
}
export type LookAtTradingPlayerGoal = LookAtTradingPlayerGoalMembers & LookAtPlayerGoal;
export interface LookAtTradingPlayerGoalStatics {
  new(arg0: j_net_minecraft_world_entity_npc.AbstractVillager): LookAtTradingPlayerGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.MeleeAttackGoal. */
export interface MeleeAttackGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canPerformAttack(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  canUse(): boolean;
  checkAndPerformAttack(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  getAttackInterval(): number;
  getTicksUntilNextAttack(): number;
  isTimeToAttack(): boolean;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  requiresUpdateEveryTick(): boolean;
  resetAttackCooldown(): void;
  start(): void;
  stop(): void;
  tick(): void;
}
export type MeleeAttackGoal = MeleeAttackGoalMembers & Goal;
export interface MeleeAttackGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: boolean): MeleeAttackGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.MoveBackToVillageGoal. */
export interface MoveBackToVillageGoalMembers {
  readonly __javaSupertypes?: readonly [RandomStrollGoal];
  canUse(): boolean;
  getPosition(): j_net_minecraft_world_phys.Vec3 | null;
}
export type MoveBackToVillageGoal = MoveBackToVillageGoalMembers & RandomStrollGoal;
export interface MoveBackToVillageGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: boolean): MoveBackToVillageGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.MoveThroughVillageGoal. */
export interface MoveThroughVillageGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  start(): void;
  stop(): void;
}
export type MoveThroughVillageGoal = MoveThroughVillageGoalMembers & Goal;
export interface MoveThroughVillageGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: boolean, arg3: number, arg4: JavaOpaque<"java.util.function.BooleanSupplier">): MoveThroughVillageGoal;
}

/** JVM abstract net.minecraft.world.entity.ai.goal.MoveToBlockGoal. */
export interface MoveToBlockGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  acceptedDistance(): number;
  blockPos: j_net_minecraft_core.BlockPos;
  canContinueToUse(): boolean;
  canUse(): boolean;
  findNearestBlock(): boolean;
  getMoveToTarget(): j_net_minecraft_core.BlockPos;
  isReachedTarget(): boolean;
  isValidTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  moveMobToBlock(): void;
  nextStartTick: (number) & { (arg0: j_net_minecraft_world_entity.PathfinderMob): number };
  requiresUpdateEveryTick(): boolean;
  shouldRecalculatePath(): boolean;
  readonly speedModifier: number;
  start(): void;
  stop(): void;
  tick(): void;
  tryTicks: number;
  verticalSearchStart: number;
}
export type MoveToBlockGoal = MoveToBlockGoalMembers & Goal;
export interface MoveToBlockGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): MoveToBlockGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: number): MoveToBlockGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.MoveTowardsRestrictionGoal. */
export interface MoveTowardsRestrictionGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
}
export type MoveTowardsRestrictionGoal = MoveTowardsRestrictionGoalMembers & Goal;
export interface MoveTowardsRestrictionGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): MoveTowardsRestrictionGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.MoveTowardsTargetGoal. */
export interface MoveTowardsTargetGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
}
export type MoveTowardsTargetGoal = MoveTowardsTargetGoalMembers & Goal;
export interface MoveTowardsTargetGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): MoveTowardsTargetGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.OcelotAttackGoal. */
export interface OcelotAttackGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  stop(): void;
  tick(): void;
}
export type OcelotAttackGoal = OcelotAttackGoalMembers & Goal;
export interface OcelotAttackGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): OcelotAttackGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.OfferFlowerGoal. */
export interface OfferFlowerGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type OfferFlowerGoal = OfferFlowerGoalMembers & Goal;
export interface OfferFlowerGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal.IronGolem): OfferFlowerGoal;
  readonly OFFER_TICKS: 400;
}

/** JVM class net.minecraft.world.entity.ai.goal.OpenDoorGoal. */
export interface OpenDoorGoalMembers {
  readonly __javaSupertypes?: readonly [DoorInteractGoal];
  canContinueToUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type OpenDoorGoal = OpenDoorGoalMembers & DoorInteractGoal;
export interface OpenDoorGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: boolean): OpenDoorGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.PanicGoal. */
export interface PanicGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  findRandomPosition(): boolean;
  isRunning: (boolean) & { (): boolean };
  lookForWater(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_world_entity.Entity, arg2: number): j_net_minecraft_core.BlockPos | null;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  posX: number;
  posY: number;
  posZ: number;
  shouldPanic(): boolean;
  readonly speedModifier: number;
  start(): void;
  stop(): void;
}
export type PanicGoal = PanicGoalMembers & Goal;
export interface PanicGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): PanicGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: JavaFunction<j_net_minecraft_world_entity.PathfinderMob, j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>>): PanicGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>): PanicGoal;
  readonly WATER_CHECK_DISTANCE_VERTICAL: 1;
}

/** JVM class net.minecraft.world.entity.ai.goal.PathfindToRaidGoal. */
export interface PathfindToRaidGoalMembers<T /* extends j_net_minecraft_world_entity_raid.Raider */ = unknown> {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  tick(): void;
}
export type PathfindToRaidGoal<T /* extends j_net_minecraft_world_entity_raid.Raider */ = unknown> = PathfindToRaidGoalMembers<T> & Goal;
export interface PathfindToRaidGoalStatics {
  new<T /* extends j_net_minecraft_world_entity_raid.Raider */>(arg0: T): PathfindToRaidGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.RandomLookAroundGoal. */
export interface RandomLookAroundGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  start(): void;
  tick(): void;
}
export type RandomLookAroundGoal = RandomLookAroundGoalMembers & Goal;
export interface RandomLookAroundGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): RandomLookAroundGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.RandomStandGoal. */
export interface RandomStandGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  start(): void;
}
export type RandomStandGoal = RandomStandGoalMembers & Goal;
export interface RandomStandGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal_horse.AbstractHorse): RandomStandGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.RandomStrollGoal. */
export interface RandomStrollGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  forceTrigger: boolean;
  getPosition(): j_net_minecraft_world_phys.Vec3 | null;
  interval: number;
  readonly mob: j_net_minecraft_world_entity.PathfinderMob;
  setInterval(arg0: number): void;
  readonly speedModifier: number;
  start(): void;
  stop(): void;
  trigger(): void;
  wantedX: number;
  wantedY: number;
  wantedZ: number;
}
export type RandomStrollGoal = RandomStrollGoalMembers & Goal;
export interface RandomStrollGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): RandomStrollGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): RandomStrollGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: boolean): RandomStrollGoal;
  readonly DEFAULT_INTERVAL: 120;
}

/** JVM class net.minecraft.world.entity.ai.goal.RandomSwimmingGoal. */
export interface RandomSwimmingGoalMembers {
  readonly __javaSupertypes?: readonly [RandomStrollGoal];
  getPosition(): j_net_minecraft_world_phys.Vec3 | null;
}
export type RandomSwimmingGoal = RandomSwimmingGoalMembers & RandomStrollGoal;
export interface RandomSwimmingGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): RandomSwimmingGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.RangedAttackGoal. */
export interface RangedAttackGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  stop(): void;
  tick(): void;
}
export type RangedAttackGoal = RangedAttackGoalMembers & Goal;
export interface RangedAttackGoalStatics {
  new(arg0: j_net_minecraft_world_entity_monster.RangedAttackMob, arg1: number, arg2: number, arg3: number): RangedAttackGoal;
  new(arg0: j_net_minecraft_world_entity_monster.RangedAttackMob, arg1: number, arg2: number, arg3: number, arg4: number): RangedAttackGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.RangedBowAttackGoal. */
export interface RangedBowAttackGoalMembers<T /* extends j_net_minecraft_world_entity_monster.RangedAttackMob */ = unknown> {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  isHoldingBow(): boolean;
  requiresUpdateEveryTick(): boolean;
  setMinAttackInterval(arg0: number): void;
  start(): void;
  stop(): void;
  tick(): void;
}
export type RangedBowAttackGoal<T /* extends j_net_minecraft_world_entity_monster.RangedAttackMob */ = unknown> = RangedBowAttackGoalMembers<T> & Goal;
export interface RangedBowAttackGoalStatics {
  new<T /* extends j_net_minecraft_world_entity_monster.RangedAttackMob */>(arg0: T, arg1: number, arg2: number, arg3: number): RangedBowAttackGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.RangedCrossbowAttackGoal. */
export interface RangedCrossbowAttackGoalMembers<T /* extends j_net_minecraft_world_entity_monster.CrossbowAttackMob */ = unknown> {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  stop(): void;
  tick(): void;
}
export type RangedCrossbowAttackGoal<T /* extends j_net_minecraft_world_entity_monster.CrossbowAttackMob */ = unknown> = RangedCrossbowAttackGoalMembers<T> & Goal;
export interface RangedCrossbowAttackGoalStatics {
  new<T /* extends j_net_minecraft_world_entity_monster.CrossbowAttackMob */>(arg0: T, arg1: number, arg2: number): RangedCrossbowAttackGoal<T>;
  readonly PATHFINDING_DELAY_RANGE: j_net_minecraft_util_valueproviders.UniformInt;
}

/** JVM class net.minecraft.world.entity.ai.goal.RemoveBlockGoal. */
export interface RemoveBlockGoalMembers {
  readonly __javaSupertypes?: readonly [MoveToBlockGoal];
  canUse(): boolean;
  isValidTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  playBreakSound(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): void;
  playDestroyProgressSound(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): void;
  start(): void;
  stop(): void;
  tick(): void;
}
export type RemoveBlockGoal = RemoveBlockGoalMembers & MoveToBlockGoal;
export interface RemoveBlockGoalStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_entity.PathfinderMob, arg2: number, arg3: number): RemoveBlockGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.RestrictSunGoal. */
export interface RestrictSunGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canUse(): boolean;
  start(): void;
  stop(): void;
}
export type RestrictSunGoal = RestrictSunGoalMembers & Goal;
export interface RestrictSunGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob): RestrictSunGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.RunAroundLikeCrazyGoal. */
export interface RunAroundLikeCrazyGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  tick(): void;
}
export type RunAroundLikeCrazyGoal = RunAroundLikeCrazyGoalMembers & Goal;
export interface RunAroundLikeCrazyGoalStatics {
  new(arg0: j_net_minecraft_world_entity_animal_horse.AbstractHorse, arg1: number): RunAroundLikeCrazyGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.SitWhenOrderedToGoal. */
export interface SitWhenOrderedToGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
}
export type SitWhenOrderedToGoal = SitWhenOrderedToGoalMembers & Goal;
export interface SitWhenOrderedToGoalStatics {
  new(arg0: j_net_minecraft_world_entity.TamableAnimal): SitWhenOrderedToGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.StrollThroughVillageGoal. */
export interface StrollThroughVillageGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  tick(): void;
}
export type StrollThroughVillageGoal = StrollThroughVillageGoalMembers & Goal;
export interface StrollThroughVillageGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): StrollThroughVillageGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.SwellGoal. */
export interface SwellGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type SwellGoal = SwellGoalMembers & Goal;
export interface SwellGoalStatics {
  new(arg0: j_net_minecraft_world_entity_monster.Creeper): SwellGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.TemptGoal. */
export interface TemptGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canScare(): boolean;
  canUse(): boolean;
  isRunning(): boolean;
  readonly mob: j_net_minecraft_world_entity.Mob;
  navigateTowards(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  player: j_net_minecraft_world_entity.LivingEntity | null;
  readonly speedModifier: number;
  start(): void;
  stop(): void;
  stopNavigation(): void;
  tick(): void;
}
export type TemptGoal = TemptGoalMembers & Goal;
export interface TemptGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: JavaPredicate<j_net_minecraft_world_item.ItemStack>, arg3: boolean): TemptGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: JavaPredicate<j_net_minecraft_world_item.ItemStack>, arg3: boolean, arg4: number): TemptGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.TemptGoal$ForNonPathfinders. */
export interface TemptGoal_ForNonPathfindersMembers {
  readonly __javaSupertypes?: readonly [TemptGoal];
  navigateTowards(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  stopNavigation(): void;
}
export type TemptGoal_ForNonPathfinders = TemptGoal_ForNonPathfindersMembers & TemptGoal;
export interface TemptGoal_ForNonPathfindersStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number, arg2: JavaPredicate<j_net_minecraft_world_item.ItemStack>, arg3: boolean, arg4: number): TemptGoal_ForNonPathfinders;
}

/** JVM class net.minecraft.world.entity.ai.goal.TradeWithPlayerGoal. */
export interface TradeWithPlayerGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canUse(): boolean;
  start(): void;
  stop(): void;
}
export type TradeWithPlayerGoal = TradeWithPlayerGoalMembers & Goal;
export interface TradeWithPlayerGoalStatics {
  new(arg0: j_net_minecraft_world_entity_npc.AbstractVillager): TradeWithPlayerGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.TryFindWaterGoal. */
export interface TryFindWaterGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  canUse(): boolean;
  start(): void;
}
export type TryFindWaterGoal = TryFindWaterGoalMembers & Goal;
export interface TryFindWaterGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob): TryFindWaterGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.UseItemGoal. */
export interface UseItemGoalMembers<T /* extends j_net_minecraft_world_entity.Mob */ = unknown> {
  readonly __javaSupertypes?: readonly [Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
}
export type UseItemGoal<T /* extends j_net_minecraft_world_entity.Mob */ = unknown> = UseItemGoalMembers<T> & Goal;
export interface UseItemGoalStatics {
  new<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: T, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_sounds.SoundEvent | null, arg3: JavaPredicate<T>): UseItemGoal<T>;
}

/** JVM class net.minecraft.world.entity.ai.goal.WaterAvoidingRandomFlyingGoal. */
export interface WaterAvoidingRandomFlyingGoalMembers {
  readonly __javaSupertypes?: readonly [WaterAvoidingRandomStrollGoal];
  getPosition(): j_net_minecraft_world_phys.Vec3 | null;
}
export type WaterAvoidingRandomFlyingGoal = WaterAvoidingRandomFlyingGoalMembers & WaterAvoidingRandomStrollGoal;
export interface WaterAvoidingRandomFlyingGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): WaterAvoidingRandomFlyingGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.WaterAvoidingRandomStrollGoal. */
export interface WaterAvoidingRandomStrollGoalMembers {
  readonly __javaSupertypes?: readonly [RandomStrollGoal];
  getPosition(): j_net_minecraft_world_phys.Vec3 | null;
  readonly probability: number;
}
export type WaterAvoidingRandomStrollGoal = WaterAvoidingRandomStrollGoalMembers & RandomStrollGoal;
export interface WaterAvoidingRandomStrollGoalStatics {
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): WaterAvoidingRandomStrollGoal;
  new(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): WaterAvoidingRandomStrollGoal;
  readonly PROBABILITY: 0.001;
}

/** JVM class net.minecraft.world.entity.ai.goal.WrappedGoal. */
export interface WrappedGoalMembers {
  readonly __javaSupertypes?: readonly [Goal];
  adjustedTickDelay(arg0: number): number;
  canBeReplacedBy(arg0: WrappedGoal): boolean;
  canContinueToUse(): boolean;
  canUse(): boolean;
  equals(arg0: object | null): boolean | null;
  getFlags(): JavaOpaque<"ca.spottedleaf.moonrise.common.set.OptimizedSmallEnumSet", [Goal_Flag]>;
  getGoal(): Goal;
  getPriority(): number;
  hashCode(): number;
  isInterruptable(): boolean;
  isRunning(): boolean;
  requiresUpdateEveryTick(): boolean;
  setFlags(arg0: JavaOpaque<"java.util.EnumSet", [Goal_Flag]>): void;
  start(): void;
  stop(): void;
  tick(): void;
}
export type WrappedGoal = WrappedGoalMembers & Goal;
export interface WrappedGoalStatics {
  new(arg0: number, arg1: Goal): WrappedGoal;
}

/** JVM class net.minecraft.world.entity.ai.goal.ZombieAttackGoal. */
export interface ZombieAttackGoalMembers {
  readonly __javaSupertypes?: readonly [MeleeAttackGoal];
  start(): void;
  stop(): void;
  tick(): void;
}
export type ZombieAttackGoal = ZombieAttackGoalMembers & MeleeAttackGoal;
export interface ZombieAttackGoalStatics {
  new(arg0: j_net_minecraft_world_entity_monster.Zombie, arg1: number, arg2: boolean): ZombieAttackGoal;
}
