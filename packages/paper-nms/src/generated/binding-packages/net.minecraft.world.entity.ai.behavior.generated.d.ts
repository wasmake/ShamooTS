// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior_declarative from './net.minecraft.world.entity.ai.behavior.declarative.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_ai_village_poi from './net.minecraft.world.entity.ai.village.poi.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_frog from './net.minecraft.world.entity.animal.frog.generated.js';
import type * as j_net_minecraft_world_entity_animal_goat from './net.minecraft.world.entity.animal.goat.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.behavior.AcquirePoi. */
export interface AcquirePoiMembers {
}
export type AcquirePoi = AcquirePoiMembers;
export interface AcquirePoiStatics {
  new(): AcquirePoi;
  readonly SCAN_RANGE: 48;
  create(arg0: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg2: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg3: boolean, arg4: JavaOptional<number>, arg5: JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_server_level.ServerLevel, j_net_minecraft_core.BlockPos]>): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
  create(arg0: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg2: boolean, arg3: JavaOptional<number>): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
  create(arg0: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg2: boolean, arg3: JavaOptional<number>, arg4: JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_server_level.ServerLevel, j_net_minecraft_core.BlockPos]>): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
  findPathToPois(arg0: j_net_minecraft_world_entity.Mob, arg1: JavaSet<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>, j_net_minecraft_core.BlockPos]>>): j_net_minecraft_world_level_pathfinder.Path | null;
}

/** JVM class net.minecraft.world.entity.ai.behavior.AnimalMakeLove. */
export interface AnimalMakeLoveMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_animal.Animal>];
}
export type AnimalMakeLove = AnimalMakeLoveMembers & Behavior<j_net_minecraft_world_entity_animal.Animal>;
export interface AnimalMakeLoveStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>): AnimalMakeLove;
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: number, arg2: number): AnimalMakeLove;
}

/** JVM class net.minecraft.world.entity.ai.behavior.AnimalPanic. */
export interface AnimalPanicMembers<E /* extends j_net_minecraft_world_entity.PathfinderMob */ = unknown> {
  readonly __javaSupertypes?: readonly [Behavior<E>];
}
export type AnimalPanic<E /* extends j_net_minecraft_world_entity.PathfinderMob */ = unknown> = AnimalPanicMembers<E> & Behavior<E>;
export interface AnimalPanicStatics {
  new<E /* extends j_net_minecraft_world_entity.PathfinderMob */>(arg0: number): AnimalPanic<E>;
  new<E /* extends j_net_minecraft_world_entity.PathfinderMob */>(arg0: number, arg1: number): AnimalPanic<E>;
  new<E /* extends j_net_minecraft_world_entity.PathfinderMob */>(arg0: number, arg1: JavaFunction<j_net_minecraft_world_entity.PathfinderMob, j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>>): AnimalPanic<E>;
  new<E /* extends j_net_minecraft_world_entity.PathfinderMob */>(arg0: number, arg1: JavaFunction<j_net_minecraft_world_entity.PathfinderMob, j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>>, arg2: JavaFunction<E, j_net_minecraft_world_phys.Vec3>): AnimalPanic<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.AssignProfessionFromJobSite. */
export interface AssignProfessionFromJobSiteMembers {
}
export type AssignProfessionFromJobSite = AssignProfessionFromJobSiteMembers;
export interface AssignProfessionFromJobSiteStatics {
  new(): AssignProfessionFromJobSite;
  create(): BehaviorControl<j_net_minecraft_world_entity_npc.Villager>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.BabyFollowAdult. */
export interface BabyFollowAdultMembers {
}
export type BabyFollowAdult = BabyFollowAdultMembers;
export interface BabyFollowAdultStatics {
  new(): BabyFollowAdult;
  create(arg0: j_net_minecraft_util_valueproviders.UniformInt, arg1: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
  create(arg0: j_net_minecraft_util_valueproviders.UniformInt, arg1: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>, arg2: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>, arg3: boolean): OneShot<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.BackUpIfTooClose. */
export interface BackUpIfTooCloseMembers {
}
export type BackUpIfTooClose = BackUpIfTooCloseMembers;
export interface BackUpIfTooCloseStatics {
  new(): BackUpIfTooClose;
  create(arg0: number, arg1: number): OneShot<j_net_minecraft_world_entity.Mob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.BecomePassiveIfMemoryPresent. */
export interface BecomePassiveIfMemoryPresentMembers {
}
export type BecomePassiveIfMemoryPresent = BecomePassiveIfMemoryPresentMembers;
export interface BecomePassiveIfMemoryPresentStatics {
  new(): BecomePassiveIfMemoryPresent;
  create(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, arg1: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM abstract net.minecraft.world.entity.ai.behavior.Behavior. */
export interface BehaviorMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [BehaviorControl<E>];
  debugString(): string;
  doStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  getStatus(): Behavior_Status;
  tickOrStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  tryStart(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
}
export type Behavior<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = BehaviorMembers<E> & BehaviorControl<E>;
export interface BehaviorStatics {
  readonly DEFAULT_DURATION: 60;
}

/** Live JVM enum net.minecraft.world.entity.ai.behavior.Behavior$Status; constants are host handles, not strings. */
export type Behavior_Status = JavaEnum<"net.minecraft.world.entity.ai.behavior.Behavior$Status", "RUNNING" | "STOPPED"> & Behavior_StatusMembers;
export interface Behavior_StatusMembers {
}
export interface Behavior_StatusStatics {
  readonly RUNNING: Behavior_Status;
  readonly STOPPED: Behavior_Status;
  valueOf(arg0: string): Behavior_Status;
  values(): Array<Behavior_Status>;
}

/** JVM interface net.minecraft.world.entity.ai.behavior.BehaviorControl. */
export interface BehaviorControlMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  debugString(): string;
  doStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  getStatus(): Behavior_Status;
  tickOrStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  tryStart(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
}
export type BehaviorControl<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = BehaviorControlMembers<E>;
export interface BehaviorControlStatics {
}

/** JVM class net.minecraft.world.entity.ai.behavior.BehaviorUtils. */
export interface BehaviorUtilsMembers {
}
export type BehaviorUtils = BehaviorUtilsMembers;
export interface BehaviorUtilsStatics {
  canSee(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  entityIsVisible(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  findSectionClosestToVillage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.SectionPos, arg2: number): j_net_minecraft_core.SectionPos;
  getLivingEntityFromUUIDMemory(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<JavaOpaque<"java.util.UUID">>): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
  getNearestTarget(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: JavaOptional<j_net_minecraft_world_entity.LivingEntity>, arg2: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_entity.LivingEntity;
  getRandomSwimmablePos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3 | null;
  getTargetNearestMe(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_entity.LivingEntity;
  isBreeding(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  isOtherTargetMuchFurtherAwayThanCurrentAttackTarget(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): boolean;
  isWithinAttackRange(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): boolean;
  lockGazeAndWalkToEachOther(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number, arg3: number): void;
  lookAtEntity(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  setWalkAndLookTargetMemories(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  setWalkAndLookTargetMemories(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.Entity, arg2: number, arg3: number): void;
  setWalkAndLookTargetMemories(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: PositionTracker, arg2: number, arg3: number): void;
  targetIsValid(arg0: j_net_minecraft_world_entity_ai.Brain<object>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>, arg2: j_net_minecraft_world_entity.EntityType<object>): boolean;
  throwItem(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.Vec3): void;
  throwItem(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_phys.Vec3, arg4: number): void;
}

/** JVM class net.minecraft.world.entity.ai.behavior.BlockPosTracker. */
export interface BlockPosTrackerMembers {
  readonly __javaSupertypes?: readonly [PositionTracker];
  currentBlockPosition(): j_net_minecraft_core.BlockPos;
  currentPosition(): j_net_minecraft_world_phys.Vec3;
  isVisibleBy(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  toString(): string;
}
export type BlockPosTracker = BlockPosTrackerMembers & PositionTracker;
export interface BlockPosTrackerStatics {
  new(arg0: j_net_minecraft_core.BlockPos): BlockPosTracker;
  new(arg0: j_net_minecraft_world_phys.Vec3): BlockPosTracker;
}

/** JVM class net.minecraft.world.entity.ai.behavior.CelebrateVillagersSurvivedRaid. */
export interface CelebrateVillagersSurvivedRaidMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type CelebrateVillagersSurvivedRaid = CelebrateVillagersSurvivedRaidMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface CelebrateVillagersSurvivedRaidStatics {
  new(arg0: number, arg1: number): CelebrateVillagersSurvivedRaid;
}

/** JVM class net.minecraft.world.entity.ai.behavior.CopyMemoryWithExpiry. */
export interface CopyMemoryWithExpiryMembers {
}
export type CopyMemoryWithExpiry = CopyMemoryWithExpiryMembers;
export interface CopyMemoryWithExpiryStatics {
  new(): CopyMemoryWithExpiry;
  create<E /* extends j_net_minecraft_world_entity.LivingEntity */, T>(arg0: JavaPredicate<E>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<T>, arg2: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<T>, arg3: j_net_minecraft_util_valueproviders.UniformInt): BehaviorControl<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.CountDownCooldownTicks. */
export interface CountDownCooldownTicksMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.LivingEntity>];
}
export type CountDownCooldownTicks = CountDownCooldownTicksMembers & Behavior<j_net_minecraft_world_entity.LivingEntity>;
export interface CountDownCooldownTicksStatics {
  new(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<number>): CountDownCooldownTicks;
}

/** JVM class net.minecraft.world.entity.ai.behavior.Croak. */
export interface CroakMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_animal_frog.Frog>];
}
export type Croak = CroakMembers & Behavior<j_net_minecraft_world_entity_animal_frog.Frog>;
export interface CroakStatics {
  new(): Croak;
}

/** JVM class net.minecraft.world.entity.ai.behavior.CrossbowAttack. */
export interface CrossbowAttackMembers<E /* extends j_net_minecraft_world_entity_monster.CrossbowAttackMob */ = unknown, T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [Behavior<E>];
}
export type CrossbowAttack<E /* extends j_net_minecraft_world_entity_monster.CrossbowAttackMob */ = unknown, T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = CrossbowAttackMembers<E, T> & Behavior<E>;
export interface CrossbowAttackStatics {
  new<E /* extends j_net_minecraft_world_entity_monster.CrossbowAttackMob */, T /* extends j_net_minecraft_world_entity.LivingEntity */>(): CrossbowAttack<E, T>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.DismountOrSkipMounting. */
export interface DismountOrSkipMountingMembers {
}
export type DismountOrSkipMounting = DismountOrSkipMountingMembers;
export interface DismountOrSkipMountingStatics {
  new(): DismountOrSkipMounting;
  create<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: number, arg1: JavaOpaque<"java.util.function.BiPredicate", [E, j_net_minecraft_world_entity.Entity]>): BehaviorControl<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.DoNothing. */
export interface DoNothingMembers {
  readonly __javaSupertypes?: readonly [BehaviorControl<j_net_minecraft_world_entity.LivingEntity>];
  debugString(): string;
  doStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  getStatus(): Behavior_Status;
  tickOrStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  tryStart(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
}
export type DoNothing = DoNothingMembers & BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
export interface DoNothingStatics {
  new(arg0: number, arg1: number): DoNothing;
}

/** JVM class net.minecraft.world.entity.ai.behavior.EntityTracker. */
export interface EntityTrackerMembers {
  readonly __javaSupertypes?: readonly [PositionTracker];
  currentBlockPosition(): j_net_minecraft_core.BlockPos;
  currentPosition(): j_net_minecraft_world_phys.Vec3;
  getEntity(): j_net_minecraft_world_entity.Entity;
  isVisibleBy(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  toString(): string;
}
export type EntityTracker = EntityTrackerMembers & PositionTracker;
export interface EntityTrackerStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): EntityTracker;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean, arg2: boolean): EntityTracker;
}

/** JVM class net.minecraft.world.entity.ai.behavior.EraseMemoryIf. */
export interface EraseMemoryIfMembers {
}
export type EraseMemoryIf = EraseMemoryIfMembers;
export interface EraseMemoryIfStatics {
  new(): EraseMemoryIf;
  create<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaPredicate<E>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>): BehaviorControl<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.FollowTemptation. */
export interface FollowTemptationMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.PathfinderMob>];
}
export type FollowTemptation = FollowTemptationMembers & Behavior<j_net_minecraft_world_entity.PathfinderMob>;
export interface FollowTemptationStatics {
  new(arg0: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>): FollowTemptation;
  new(arg0: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>, arg1: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>): FollowTemptation;
  new(arg0: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>, arg1: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>, arg2: boolean): FollowTemptation;
  readonly BACKED_UP_CLOSE_ENOUGH_DIST: 3.5;
  readonly DEFAULT_CLOSE_ENOUGH_DIST: 2.5;
  readonly TEMPTATION_COOLDOWN: 100;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GateBehavior. */
export interface GateBehaviorMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [BehaviorControl<E>];
  debugString(): string;
  doStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  getStatus(): Behavior_Status;
  tickOrStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  toString(): string;
  tryStart(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
}
export type GateBehavior<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = GateBehaviorMembers<E> & BehaviorControl<E>;
export interface GateBehaviorStatics {
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaMap<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, j_net_minecraft_world_entity_ai_memory.MemoryStatus>, arg1: JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>, arg2: GateBehavior_OrderPolicy, arg3: GateBehavior_RunningPolicy, arg4: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [BehaviorControl<E>, number]>>): GateBehavior<E>;
}

/** Live JVM enum net.minecraft.world.entity.ai.behavior.GateBehavior$OrderPolicy; constants are host handles, not strings. */
export type GateBehavior_OrderPolicy = JavaEnum<"net.minecraft.world.entity.ai.behavior.GateBehavior$OrderPolicy", "ORDERED" | "SHUFFLED"> & GateBehavior_OrderPolicyMembers;
export interface GateBehavior_OrderPolicyMembers {
  apply(arg0: ShufflingList<object>): void;
}
export interface GateBehavior_OrderPolicyStatics {
  readonly ORDERED: GateBehavior_OrderPolicy;
  readonly SHUFFLED: GateBehavior_OrderPolicy;
  valueOf(arg0: string): GateBehavior_OrderPolicy;
  values(): Array<GateBehavior_OrderPolicy>;
}

/** Live JVM enum net.minecraft.world.entity.ai.behavior.GateBehavior$RunningPolicy; constants are host handles, not strings. */
export type GateBehavior_RunningPolicy = JavaEnum<"net.minecraft.world.entity.ai.behavior.GateBehavior$RunningPolicy", "RUN_ONE" | "TRY_ALL"> & GateBehavior_RunningPolicyMembers;
export interface GateBehavior_RunningPolicyMembers {
  apply<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: ShufflingList<BehaviorControl<E>>, arg1: j_net_minecraft_server_level.ServerLevel, arg2: E, arg3: bigint): void;
}
export interface GateBehavior_RunningPolicyStatics {
  readonly RUN_ONE: GateBehavior_RunningPolicy;
  readonly TRY_ALL: GateBehavior_RunningPolicy;
  valueOf(arg0: string): GateBehavior_RunningPolicy;
  values(): Array<GateBehavior_RunningPolicy>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GiveGiftToHero. */
export interface GiveGiftToHeroMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type GiveGiftToHero = GiveGiftToHeroMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface GiveGiftToHeroStatics {
  new(arg0: number): GiveGiftToHero;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GoAndGiveItemsToTarget. */
export interface GoAndGiveItemsToTargetMembers<E /* extends j_net_minecraft_world_entity_npc.InventoryCarrier */ = unknown> {
  readonly __javaSupertypes?: readonly [Behavior<E>];
}
export type GoAndGiveItemsToTarget<E /* extends j_net_minecraft_world_entity_npc.InventoryCarrier */ = unknown> = GoAndGiveItemsToTargetMembers<E> & Behavior<E>;
export interface GoAndGiveItemsToTargetStatics {
  new<E /* extends j_net_minecraft_world_entity_npc.InventoryCarrier */>(arg0: JavaFunction<j_net_minecraft_world_entity.LivingEntity, JavaOptional<PositionTracker>>, arg1: number, arg2: number): GoAndGiveItemsToTarget<E>;
  throwItem(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.Vec3): void;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GoToClosestVillage. */
export interface GoToClosestVillageMembers {
}
export type GoToClosestVillage = GoToClosestVillageMembers;
export interface GoToClosestVillageStatics {
  new(): GoToClosestVillage;
  create(arg0: number, arg1: number): BehaviorControl<j_net_minecraft_world_entity_npc.Villager>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GoToPotentialJobSite. */
export interface GoToPotentialJobSiteMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type GoToPotentialJobSite = GoToPotentialJobSiteMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface GoToPotentialJobSiteStatics {
  new(arg0: number): GoToPotentialJobSite;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GoToTargetLocation. */
export interface GoToTargetLocationMembers {
}
export type GoToTargetLocation = GoToTargetLocationMembers;
export interface GoToTargetLocationStatics {
  new(): GoToTargetLocation;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.BlockPos>, arg1: number, arg2: number): OneShot<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.GoToWantedItem. */
export interface GoToWantedItemMembers {
}
export type GoToWantedItem = GoToWantedItemMembers;
export interface GoToWantedItemStatics {
  new(): GoToWantedItem;
  create(arg0: number, arg1: boolean, arg2: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
  create<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaPredicate<E>, arg1: number, arg2: boolean, arg3: number): BehaviorControl<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.HarvestFarmland. */
export interface HarvestFarmlandMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type HarvestFarmland = HarvestFarmlandMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface HarvestFarmlandStatics {
  new(): HarvestFarmland;
  readonly SPEED_MODIFIER: 0.5;
}

/** JVM class net.minecraft.world.entity.ai.behavior.InsideBrownianWalk. */
export interface InsideBrownianWalkMembers {
}
export type InsideBrownianWalk = InsideBrownianWalkMembers;
export interface InsideBrownianWalkStatics {
  new(): InsideBrownianWalk;
  create(arg0: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.InteractWith. */
export interface InteractWithMembers {
}
export type InteractWith = InteractWithMembers;
export interface InteractWithStatics {
  new(): InteractWith;
  of<E /* extends j_net_minecraft_world_entity.LivingEntity */, T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.EntityType<T>, arg1: number, arg2: JavaPredicate<E>, arg3: JavaPredicate<T>, arg4: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<T>, arg5: number, arg6: number): BehaviorControl<E>;
  of<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_world_entity.EntityType<T>, arg1: number, arg2: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<T>, arg3: number, arg4: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.InteractWithDoor. */
export interface InteractWithDoorMembers {
}
export type InteractWithDoor = InteractWithDoorMembers;
export interface InteractWithDoorStatics {
  new(): InteractWithDoor;
  closeDoorsThatIHaveOpenedOrPassedThrough(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_level_pathfinder.Node | null, arg3: j_net_minecraft_world_level_pathfinder.Node | null, arg4: JavaSet<j_net_minecraft_core.GlobalPos>, arg5: JavaOptional<JavaList<j_net_minecraft_world_entity.LivingEntity>>): void;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.JumpOnBed. */
export interface JumpOnBedMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.Mob>];
}
export type JumpOnBed = JumpOnBedMembers & Behavior<j_net_minecraft_world_entity.Mob>;
export interface JumpOnBedStatics {
  new(arg0: number): JumpOnBed;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LocateHidingPlace. */
export interface LocateHidingPlaceMembers {
}
export type LocateHidingPlace = LocateHidingPlaceMembers;
export interface LocateHidingPlaceStatics {
  new(): LocateHidingPlace;
  create(arg0: number, arg1: number, arg2: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LongJumpMidJump. */
export interface LongJumpMidJumpMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.Mob>];
}
export type LongJumpMidJump = LongJumpMidJumpMembers & Behavior<j_net_minecraft_world_entity.Mob>;
export interface LongJumpMidJumpStatics {
  new(arg0: j_net_minecraft_util_valueproviders.UniformInt, arg1: j_net_minecraft_sounds.SoundEvent): LongJumpMidJump;
  readonly TIME_OUT_DURATION: 100;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LongJumpToPreferredBlock. */
export interface LongJumpToPreferredBlockMembers<E /* extends j_net_minecraft_world_entity.Mob */ = unknown> {
  readonly __javaSupertypes?: readonly [LongJumpToRandomPos<E>];
}
export type LongJumpToPreferredBlock<E /* extends j_net_minecraft_world_entity.Mob */ = unknown> = LongJumpToPreferredBlockMembers<E> & LongJumpToRandomPos<E>;
export interface LongJumpToPreferredBlockStatics {
  new<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_util_valueproviders.UniformInt, arg1: number, arg2: number, arg3: number, arg4: JavaFunction<E, j_net_minecraft_sounds.SoundEvent>, arg5: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg6: number, arg7: JavaOpaque<"java.util.function.BiPredicate", [E, j_net_minecraft_core.BlockPos]>): LongJumpToPreferredBlock<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos. */
export interface LongJumpToRandomPosMembers<E /* extends j_net_minecraft_world_entity.Mob */ = unknown> {
  readonly __javaSupertypes?: readonly [Behavior<E>];
}
export type LongJumpToRandomPos<E /* extends j_net_minecraft_world_entity.Mob */ = unknown> = LongJumpToRandomPosMembers<E> & Behavior<E>;
export interface LongJumpToRandomPosStatics {
  new<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_util_valueproviders.UniformInt, arg1: number, arg2: number, arg3: number, arg4: JavaFunction<E, j_net_minecraft_sounds.SoundEvent>): LongJumpToRandomPos<E>;
  new<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_util_valueproviders.UniformInt, arg1: number, arg2: number, arg3: number, arg4: JavaFunction<E, j_net_minecraft_sounds.SoundEvent>, arg5: JavaOpaque<"java.util.function.BiPredicate", [E, j_net_minecraft_core.BlockPos]>): LongJumpToRandomPos<E>;
  defaultAcceptableLandingSpot<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: E, arg1: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM record net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos$PossibleJump. */
export interface LongJumpToRandomPos_PossibleJumpMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  targetPos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  weight(): number;
}
export type LongJumpToRandomPos_PossibleJump = LongJumpToRandomPos_PossibleJumpMembers & JavaOpaque<"java.lang.Record">;
export interface LongJumpToRandomPos_PossibleJumpStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number): LongJumpToRandomPos_PossibleJump;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LongJumpUtil. */
export interface LongJumpUtilMembers {
}
export type LongJumpUtil = LongJumpUtilMembers;
export interface LongJumpUtilStatics {
  new(): LongJumpUtil;
  calculateJumpVectorForAngle(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_phys.Vec3, arg2: number, arg3: number, arg4: boolean): JavaOptional<j_net_minecraft_world_phys.Vec3>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LookAndFollowTradingPlayerSink. */
export interface LookAndFollowTradingPlayerSinkMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type LookAndFollowTradingPlayerSink = LookAndFollowTradingPlayerSinkMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface LookAndFollowTradingPlayerSinkStatics {
  new(arg0: number): LookAndFollowTradingPlayerSink;
}

/** JVM class net.minecraft.world.entity.ai.behavior.LookAtTargetSink. */
export interface LookAtTargetSinkMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.Mob>];
}
export type LookAtTargetSink = LookAtTargetSinkMembers & Behavior<j_net_minecraft_world_entity.Mob>;
export interface LookAtTargetSinkStatics {
  new(arg0: number, arg1: number): LookAtTargetSink;
}

/** JVM class net.minecraft.world.entity.ai.behavior.MeleeAttack. */
export interface MeleeAttackMembers {
}
export type MeleeAttack = MeleeAttackMembers;
export interface MeleeAttackStatics {
  new(): MeleeAttack;
  create<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: number): OneShot<T>;
  create<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: JavaPredicate<T>, arg1: number): OneShot<T>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.Mount. */
export interface MountMembers {
}
export type Mount = MountMembers;
export interface MountStatics {
  new(): Mount;
  create(arg0: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.MoveToSkySeeingSpot. */
export interface MoveToSkySeeingSpotMembers {
}
export type MoveToSkySeeingSpot = MoveToSkySeeingSpotMembers;
export interface MoveToSkySeeingSpotStatics {
  new(): MoveToSkySeeingSpot;
  create(arg0: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
  hasNoBlocksAbove(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM class net.minecraft.world.entity.ai.behavior.MoveToTargetSink. */
export interface MoveToTargetSinkMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.Mob>];
}
export type MoveToTargetSink = MoveToTargetSinkMembers & Behavior<j_net_minecraft_world_entity.Mob>;
export interface MoveToTargetSinkStatics {
  new(): MoveToTargetSink;
  new(arg0: number, arg1: number): MoveToTargetSink;
}

/** JVM abstract net.minecraft.world.entity.ai.behavior.OneShot. */
export interface OneShotMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [BehaviorControl<E>, j_net_minecraft_world_entity_ai_behavior_declarative.Trigger<E>];
  debugString(): string;
  doStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  getStatus(): Behavior_Status;
  tickOrStop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  tryStart(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
}
export type OneShot<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = OneShotMembers<E> & BehaviorControl<E> & j_net_minecraft_world_entity_ai_behavior_declarative.Trigger<E>;
export interface OneShotStatics {
}

/** JVM class net.minecraft.world.entity.ai.behavior.PlayTagWithOtherKids. */
export interface PlayTagWithOtherKidsMembers {
}
export type PlayTagWithOtherKids = PlayTagWithOtherKidsMembers;
export interface PlayTagWithOtherKidsStatics {
  new(): PlayTagWithOtherKids;
  create(): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.PoiCompetitorScan. */
export interface PoiCompetitorScanMembers {
}
export type PoiCompetitorScan = PoiCompetitorScanMembers;
export interface PoiCompetitorScanStatics {
  new(): PoiCompetitorScan;
  create(): BehaviorControl<j_net_minecraft_world_entity_npc.Villager>;
}

/** JVM interface net.minecraft.world.entity.ai.behavior.PositionTracker. */
export interface PositionTrackerMembers {
  currentBlockPosition(): j_net_minecraft_core.BlockPos;
  currentPosition(): j_net_minecraft_world_phys.Vec3;
  isVisibleBy(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
}
export type PositionTracker = PositionTrackerMembers;
export interface PositionTrackerStatics {
}

/** JVM class net.minecraft.world.entity.ai.behavior.PrepareRamNearestTarget. */
export interface PrepareRamNearestTargetMembers<E /* extends j_net_minecraft_world_entity.PathfinderMob */ = unknown> {
  readonly __javaSupertypes?: readonly [Behavior<E>];
}
export type PrepareRamNearestTarget<E /* extends j_net_minecraft_world_entity.PathfinderMob */ = unknown> = PrepareRamNearestTargetMembers<E> & Behavior<E>;
export interface PrepareRamNearestTargetStatics {
  new<E /* extends j_net_minecraft_world_entity.PathfinderMob */>(arg0: JavaOpaque<"java.util.function.ToIntFunction", [E]>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg5: number, arg6: JavaFunction<E, j_net_minecraft_sounds.SoundEvent>): PrepareRamNearestTarget<E>;
  readonly TIME_OUT_DURATION: 160;
}

/** JVM class net.minecraft.world.entity.ai.behavior.PrepareRamNearestTarget$RamCandidate. */
export interface PrepareRamNearestTarget_RamCandidateMembers {
  getStartPosition(): j_net_minecraft_core.BlockPos;
  getTarget(): j_net_minecraft_world_entity.LivingEntity;
  getTargetPosition(): j_net_minecraft_core.BlockPos;
}
export type PrepareRamNearestTarget_RamCandidate = PrepareRamNearestTarget_RamCandidateMembers;
export interface PrepareRamNearestTarget_RamCandidateStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.LivingEntity): PrepareRamNearestTarget_RamCandidate;
}

/** JVM class net.minecraft.world.entity.ai.behavior.RamTarget. */
export interface RamTargetMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_animal_goat.Goat>];
}
export type RamTarget = RamTargetMembers & Behavior<j_net_minecraft_world_entity_animal_goat.Goat>;
export interface RamTargetStatics {
  new(arg0: JavaFunction<j_net_minecraft_world_entity_animal_goat.Goat, j_net_minecraft_util_valueproviders.UniformInt>, arg1: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg2: number, arg3: JavaOpaque<"java.util.function.ToDoubleFunction", [j_net_minecraft_world_entity_animal_goat.Goat]>, arg4: JavaFunction<j_net_minecraft_world_entity_animal_goat.Goat, j_net_minecraft_sounds.SoundEvent>, arg5: JavaFunction<j_net_minecraft_world_entity_animal_goat.Goat, j_net_minecraft_sounds.SoundEvent>): RamTarget;
  readonly RAM_SPEED_FORCE_FACTOR: 1.65;
  readonly TIME_OUT_DURATION: 200;
}

/** JVM class net.minecraft.world.entity.ai.behavior.RandomLookAround. */
export interface RandomLookAroundMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.Mob>];
}
export type RandomLookAround = RandomLookAroundMembers & Behavior<j_net_minecraft_world_entity.Mob>;
export interface RandomLookAroundStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: number, arg2: number, arg3: number): RandomLookAround;
}

/** JVM class net.minecraft.world.entity.ai.behavior.RandomStroll. */
export interface RandomStrollMembers {
}
export type RandomStroll = RandomStrollMembers;
export interface RandomStrollStatics {
  new(): RandomStroll;
  fly(arg0: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
  stroll(arg0: number): OneShot<j_net_minecraft_world_entity.PathfinderMob>;
  stroll(arg0: number, arg1: number, arg2: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
  stroll(arg0: number, arg1: boolean): OneShot<j_net_minecraft_world_entity.PathfinderMob>;
  swim(arg0: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ReactToBell. */
export interface ReactToBellMembers {
}
export type ReactToBell = ReactToBellMembers;
export interface ReactToBellStatics {
  new(): ReactToBell;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ResetProfession. */
export interface ResetProfessionMembers {
}
export type ResetProfession = ResetProfessionMembers;
export interface ResetProfessionStatics {
  new(): ResetProfession;
  create(): BehaviorControl<j_net_minecraft_world_entity_npc.Villager>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ResetRaidStatus. */
export interface ResetRaidStatusMembers {
}
export type ResetRaidStatus = ResetRaidStatusMembers;
export interface ResetRaidStatusStatics {
  new(): ResetRaidStatus;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.RingBell. */
export interface RingBellMembers {
}
export type RingBell = RingBellMembers;
export interface RingBellStatics {
  new(): RingBell;
  readonly RING_BELL_FROM_DISTANCE: 3;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.RunOne. */
export interface RunOneMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [GateBehavior<E>];
}
export type RunOne<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = RunOneMembers<E> & GateBehavior<E>;
export interface RunOneStatics {
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [BehaviorControl<E>, number]>>): RunOne<E>;
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaMap<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>, j_net_minecraft_world_entity_ai_memory.MemoryStatus>, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [BehaviorControl<E>, number]>>): RunOne<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetClosestHomeAsWalkTarget. */
export interface SetClosestHomeAsWalkTargetMembers {
}
export type SetClosestHomeAsWalkTarget = SetClosestHomeAsWalkTargetMembers;
export interface SetClosestHomeAsWalkTargetStatics {
  new(): SetClosestHomeAsWalkTarget;
  create(arg0: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetEntityLookTarget. */
export interface SetEntityLookTargetMembers {
}
export type SetEntityLookTarget = SetEntityLookTargetMembers;
export interface SetEntityLookTargetStatics {
  new(): SetEntityLookTarget;
  create(arg0: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
  create(arg0: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>, arg1: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
  create(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
  create(arg0: j_net_minecraft_world_entity.MobCategory, arg1: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetEntityLookTargetSometimes. */
export interface SetEntityLookTargetSometimesMembers {
}
export type SetEntityLookTargetSometimes = SetEntityLookTargetSometimesMembers;
export interface SetEntityLookTargetSometimesStatics {
  new(): SetEntityLookTargetSometimes;
  create(arg0: number, arg1: j_net_minecraft_util_valueproviders.UniformInt): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
  create(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: j_net_minecraft_util_valueproviders.UniformInt): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetEntityLookTargetSometimes$Ticker. */
export interface SetEntityLookTargetSometimes_TickerMembers {
  tickDownAndCheck(arg0: j_net_minecraft_util.RandomSource): boolean;
}
export type SetEntityLookTargetSometimes_Ticker = SetEntityLookTargetSometimes_TickerMembers;
export interface SetEntityLookTargetSometimes_TickerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.UniformInt): SetEntityLookTargetSometimes_Ticker;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetHiddenState. */
export interface SetHiddenStateMembers {
}
export type SetHiddenState = SetHiddenStateMembers;
export interface SetHiddenStateStatics {
  new(): SetHiddenState;
  create(arg0: number, arg1: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetLookAndInteract. */
export interface SetLookAndInteractMembers {
}
export type SetLookAndInteract = SetLookAndInteractMembers;
export interface SetLookAndInteractStatics {
  new(): SetLookAndInteract;
  create(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetRaidStatus. */
export interface SetRaidStatusMembers {
}
export type SetRaidStatus = SetRaidStatusMembers;
export interface SetRaidStatusStatics {
  new(): SetRaidStatus;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetWalkTargetAwayFrom. */
export interface SetWalkTargetAwayFromMembers {
}
export type SetWalkTargetAwayFrom = SetWalkTargetAwayFromMembers;
export interface SetWalkTargetAwayFromStatics {
  new(): SetWalkTargetAwayFrom;
  entity(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.Entity>, arg1: number, arg2: number, arg3: boolean): OneShot<j_net_minecraft_world_entity.PathfinderMob>;
  pos(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.BlockPos>, arg1: number, arg2: number, arg3: boolean): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetWalkTargetFromAttackTargetIfTargetOutOfReach. */
export interface SetWalkTargetFromAttackTargetIfTargetOutOfReachMembers {
}
export type SetWalkTargetFromAttackTargetIfTargetOutOfReach = SetWalkTargetFromAttackTargetIfTargetOutOfReachMembers;
export interface SetWalkTargetFromAttackTargetIfTargetOutOfReachStatics {
  new(): SetWalkTargetFromAttackTargetIfTargetOutOfReach;
  create(arg0: number): BehaviorControl<j_net_minecraft_world_entity.Mob>;
  create(arg0: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>): BehaviorControl<j_net_minecraft_world_entity.Mob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetWalkTargetFromBlockMemory. */
export interface SetWalkTargetFromBlockMemoryMembers {
}
export type SetWalkTargetFromBlockMemory = SetWalkTargetFromBlockMemoryMembers;
export interface SetWalkTargetFromBlockMemoryStatics {
  new(): SetWalkTargetFromBlockMemory;
  create(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg1: number, arg2: number, arg3: number, arg4: number): OneShot<j_net_minecraft_world_entity_npc.Villager>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SetWalkTargetFromLookTarget. */
export interface SetWalkTargetFromLookTargetMembers {
}
export type SetWalkTargetFromLookTarget = SetWalkTargetFromLookTargetMembers;
export interface SetWalkTargetFromLookTargetStatics {
  new(): SetWalkTargetFromLookTarget;
  create(arg0: number, arg1: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
  create(arg0: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>, arg1: JavaFunction<j_net_minecraft_world_entity.LivingEntity, number>, arg2: number): OneShot<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ShowTradesToPlayer. */
export interface ShowTradesToPlayerMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager, arg2: bigint): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager, arg2: bigint): void;
}
export type ShowTradesToPlayer = ShowTradesToPlayerMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface ShowTradesToPlayerStatics {
  new(arg0: number, arg1: number): ShowTradesToPlayer;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ShufflingList. */
export interface ShufflingListMembers<U = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<U>];
  add(arg0: U, arg1: number): ShufflingList<U>;
  iterator(): JavaOpaque<"java.util.Iterator", [U]>;
  shuffle(): ShufflingList<U>;
  stream(): JavaOpaque<"java.util.stream.Stream", [U]>;
  toString(): string;
}
export type ShufflingList<U = unknown> = ShufflingListMembers<U> & Iterable<U>;
export interface ShufflingListStatics {
  new<U>(): ShufflingList<U>;
  new<U>(arg0: boolean): ShufflingList<U>;
  codec<U>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [U]>): JavaOpaque<"com.mojang.serialization.Codec", [ShufflingList<U>]>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ShufflingList$WeightedEntry. */
export interface ShufflingList_WeightedEntryMembers<T = unknown> {
  getData(): T;
  getWeight(): number;
  toString(): string;
}
export type ShufflingList_WeightedEntry<T = unknown> = ShufflingList_WeightedEntryMembers<T>;
export interface ShufflingList_WeightedEntryStatics {
  codec<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [ShufflingList_WeightedEntry<E>]>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SleepInBed. */
export interface SleepInBedMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity.LivingEntity>];
}
export type SleepInBed = SleepInBedMembers & Behavior<j_net_minecraft_world_entity.LivingEntity>;
export interface SleepInBedStatics {
  new(): SleepInBed;
  readonly COOLDOWN_AFTER_BEING_WOKEN: 100;
}

/** JVM class net.minecraft.world.entity.ai.behavior.SocializeAtBell. */
export interface SocializeAtBellMembers {
}
export type SocializeAtBell = SocializeAtBellMembers;
export interface SocializeAtBellStatics {
  new(): SocializeAtBell;
  create(): OneShot<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.StartAttacking. */
export interface StartAttackingMembers {
}
export type StartAttacking = StartAttackingMembers;
export interface StartAttackingStatics {
  new(): StartAttacking;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: StartAttacking_StartAttackingCondition<E>, arg1: StartAttacking_TargetFinder<E>): BehaviorControl<E>;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: StartAttacking_TargetFinder<E>): BehaviorControl<E>;
}

/** JVM interface net.minecraft.world.entity.ai.behavior.StartAttacking$StartAttackingCondition. */
export interface StartAttacking_StartAttackingConditionMembers<E = unknown> {
  test(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): boolean;
}
export type StartAttacking_StartAttackingCondition<E = unknown> = StartAttacking_StartAttackingConditionMembers<E>;
export interface StartAttacking_StartAttackingConditionStatics {
}

/** JVM interface net.minecraft.world.entity.ai.behavior.StartAttacking$TargetFinder. */
export interface StartAttacking_TargetFinderMembers<E = unknown> {
  get(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
}
export type StartAttacking_TargetFinder<E = unknown> = StartAttacking_TargetFinderMembers<E>;
export interface StartAttacking_TargetFinderStatics {
}

/** JVM class net.minecraft.world.entity.ai.behavior.StartCelebratingIfTargetDead. */
export interface StartCelebratingIfTargetDeadMembers {
}
export type StartCelebratingIfTargetDead = StartCelebratingIfTargetDeadMembers;
export interface StartCelebratingIfTargetDeadStatics {
  new(): StartCelebratingIfTargetDead;
  create(arg0: number, arg1: JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_world_entity.LivingEntity, j_net_minecraft_world_entity.LivingEntity]>): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.StayCloseToTarget. */
export interface StayCloseToTargetMembers {
}
export type StayCloseToTarget = StayCloseToTargetMembers;
export interface StayCloseToTargetStatics {
  new(): StayCloseToTarget;
  create(arg0: JavaFunction<j_net_minecraft_world_entity.LivingEntity, JavaOptional<PositionTracker>>, arg1: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>, arg2: number, arg3: number, arg4: number): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.StopAttackingIfTargetInvalid. */
export interface StopAttackingIfTargetInvalidMembers {
}
export type StopAttackingIfTargetInvalid = StopAttackingIfTargetInvalidMembers;
export interface StopAttackingIfTargetInvalidStatics {
  new(): StopAttackingIfTargetInvalid;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(): BehaviorControl<E>;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: StopAttackingIfTargetInvalid_StopAttackCondition): BehaviorControl<E>;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: StopAttackingIfTargetInvalid_StopAttackCondition, arg1: StopAttackingIfTargetInvalid_TargetErasedCallback<E>, arg2: boolean): BehaviorControl<E>;
  create<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: StopAttackingIfTargetInvalid_TargetErasedCallback<E>): BehaviorControl<E>;
}

/** JVM interface net.minecraft.world.entity.ai.behavior.StopAttackingIfTargetInvalid$StopAttackCondition. */
export interface StopAttackingIfTargetInvalid_StopAttackConditionMembers {
  test(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
}
export type StopAttackingIfTargetInvalid_StopAttackCondition = StopAttackingIfTargetInvalid_StopAttackConditionMembers;
export interface StopAttackingIfTargetInvalid_StopAttackConditionStatics {
}

/** JVM interface net.minecraft.world.entity.ai.behavior.StopAttackingIfTargetInvalid$TargetErasedCallback. */
export interface StopAttackingIfTargetInvalid_TargetErasedCallbackMembers<E = unknown> {
  accept(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: j_net_minecraft_world_entity.LivingEntity): void;
}
export type StopAttackingIfTargetInvalid_TargetErasedCallback<E = unknown> = StopAttackingIfTargetInvalid_TargetErasedCallbackMembers<E>;
export interface StopAttackingIfTargetInvalid_TargetErasedCallbackStatics {
}

/** JVM class net.minecraft.world.entity.ai.behavior.StopBeingAngryIfTargetDead. */
export interface StopBeingAngryIfTargetDeadMembers {
}
export type StopBeingAngryIfTargetDead = StopBeingAngryIfTargetDeadMembers;
export interface StopBeingAngryIfTargetDeadStatics {
  new(): StopBeingAngryIfTargetDead;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.StrollAroundPoi. */
export interface StrollAroundPoiMembers {
}
export type StrollAroundPoi = StrollAroundPoiMembers;
export interface StrollAroundPoiStatics {
  new(): StrollAroundPoi;
  create(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg1: number, arg2: number): OneShot<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.StrollToPoi. */
export interface StrollToPoiMembers {
}
export type StrollToPoi = StrollToPoiMembers;
export interface StrollToPoiStatics {
  new(): StrollToPoi;
  create(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, arg1: number, arg2: number, arg3: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.StrollToPoiList. */
export interface StrollToPoiListMembers {
}
export type StrollToPoiList = StrollToPoiListMembers;
export interface StrollToPoiListStatics {
  new(): StrollToPoiList;
  create(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<JavaList<j_net_minecraft_core.GlobalPos>>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>): BehaviorControl<j_net_minecraft_world_entity_npc.Villager>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.Swim. */
export interface SwimMembers<T /* extends j_net_minecraft_world_entity.Mob */ = unknown> {
  readonly __javaSupertypes?: readonly [Behavior<T>];
}
export type Swim<T /* extends j_net_minecraft_world_entity.Mob */ = unknown> = SwimMembers<T> & Behavior<T>;
export interface SwimStatics {
  new<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: number): Swim<T>;
  shouldSwim<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: T): boolean;
}

/** JVM class net.minecraft.world.entity.ai.behavior.TradeWithVillager. */
export interface TradeWithVillagerMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type TradeWithVillager = TradeWithVillagerMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface TradeWithVillagerStatics {
  new(): TradeWithVillager;
}

/** JVM class net.minecraft.world.entity.ai.behavior.TriggerGate. */
export interface TriggerGateMembers {
}
export type TriggerGate = TriggerGateMembers;
export interface TriggerGateStatics {
  new(): TriggerGate;
  triggerGate<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity_ai_behavior_declarative.Trigger<E>, number]>>, arg1: GateBehavior_OrderPolicy, arg2: GateBehavior_RunningPolicy): OneShot<E>;
  triggerOneShuffled<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity_ai_behavior_declarative.Trigger<E>, number]>>): OneShot<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.TryFindLand. */
export interface TryFindLandMembers {
}
export type TryFindLand = TryFindLandMembers;
export interface TryFindLandStatics {
  new(): TryFindLand;
  create(arg0: number, arg1: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.TryFindLandNearWater. */
export interface TryFindLandNearWaterMembers {
}
export type TryFindLandNearWater = TryFindLandNearWaterMembers;
export interface TryFindLandNearWaterStatics {
  new(): TryFindLandNearWater;
  create(arg0: number, arg1: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.TryFindWater. */
export interface TryFindWaterMembers {
}
export type TryFindWater = TryFindWaterMembers;
export interface TryFindWaterStatics {
  new(): TryFindWater;
  create(arg0: number, arg1: number): BehaviorControl<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.TryLaySpawnOnWaterNearLand. */
export interface TryLaySpawnOnWaterNearLandMembers {
}
export type TryLaySpawnOnWaterNearLand = TryLaySpawnOnWaterNearLandMembers;
export interface TryLaySpawnOnWaterNearLandStatics {
  new(): TryLaySpawnOnWaterNearLand;
  create(arg0: j_net_minecraft_world_level_block.Block): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.UpdateActivityFromSchedule. */
export interface UpdateActivityFromScheduleMembers {
}
export type UpdateActivityFromSchedule = UpdateActivityFromScheduleMembers;
export interface UpdateActivityFromScheduleStatics {
  new(): UpdateActivityFromSchedule;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.UseBonemeal. */
export interface UseBonemealMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type UseBonemeal = UseBonemealMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface UseBonemealStatics {
  new(): UseBonemeal;
}

/** JVM class net.minecraft.world.entity.ai.behavior.ValidateNearbyPoi. */
export interface ValidateNearbyPoiMembers {
}
export type ValidateNearbyPoi = ValidateNearbyPoiMembers;
export interface ValidateNearbyPoiStatics {
  new(): ValidateNearbyPoi;
  create(arg0: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>, arg1: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.VillageBoundRandomStroll. */
export interface VillageBoundRandomStrollMembers {
}
export type VillageBoundRandomStroll = VillageBoundRandomStrollMembers;
export interface VillageBoundRandomStrollStatics {
  new(): VillageBoundRandomStroll;
  create(arg0: number): OneShot<j_net_minecraft_world_entity.PathfinderMob>;
  create(arg0: number, arg1: number, arg2: number): OneShot<j_net_minecraft_world_entity.PathfinderMob>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.VillagerCalmDown. */
export interface VillagerCalmDownMembers {
}
export type VillagerCalmDown = VillagerCalmDownMembers;
export interface VillagerCalmDownStatics {
  new(): VillagerCalmDown;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.VillagerGoalPackages. */
export interface VillagerGoalPackagesMembers {
}
export type VillagerGoalPackages = VillagerGoalPackagesMembers;
export interface VillagerGoalPackagesStatics {
  new(): VillagerGoalPackages;
  readonly INTERACT_DIST_SQR: 5;
  readonly INTERACT_SPEED_MODIFIER: 0.5;
  readonly INTERACT_WALKUP_DIST: 2;
  getCorePackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getHidePackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getIdlePackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getMeetPackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getPanicPackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getPlayPackage(arg0: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getPreRaidPackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getRaidPackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getRestPackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
  getWorkPackage(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>, arg1: number): JavaOpaque<"com.google.common.collect.ImmutableList", [JavaOpaque<"com.mojang.datafixers.util.Pair", [number, BehaviorControl<j_net_minecraft_world_entity_npc.Villager>]>]>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.VillagerMakeLove. */
export interface VillagerMakeLoveMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type VillagerMakeLove = VillagerMakeLoveMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface VillagerMakeLoveStatics {
  new(): VillagerMakeLove;
}

/** JVM class net.minecraft.world.entity.ai.behavior.VillagerPanicTrigger. */
export interface VillagerPanicTriggerMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type VillagerPanicTrigger = VillagerPanicTriggerMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface VillagerPanicTriggerStatics {
  new(): VillagerPanicTrigger;
  hasHostile(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  isHurt(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
}

/** JVM class net.minecraft.world.entity.ai.behavior.WakeUp. */
export interface WakeUpMembers {
}
export type WakeUp = WakeUpMembers;
export interface WakeUpStatics {
  new(): WakeUp;
  create(): BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.WorkAtComposter. */
export interface WorkAtComposterMembers {
  readonly __javaSupertypes?: readonly [WorkAtPoi];
}
export type WorkAtComposter = WorkAtComposterMembers & WorkAtPoi;
export interface WorkAtComposterStatics {
  new(): WorkAtComposter;
}

/** JVM class net.minecraft.world.entity.ai.behavior.WorkAtPoi. */
export interface WorkAtPoiMembers {
  readonly __javaSupertypes?: readonly [Behavior<j_net_minecraft_world_entity_npc.Villager>];
}
export type WorkAtPoi = WorkAtPoiMembers & Behavior<j_net_minecraft_world_entity_npc.Villager>;
export interface WorkAtPoiStatics {
  new(): WorkAtPoi;
}

/** JVM class net.minecraft.world.entity.ai.behavior.YieldJobSite. */
export interface YieldJobSiteMembers {
}
export type YieldJobSite = YieldJobSiteMembers;
export interface YieldJobSiteStatics {
  new(): YieldJobSite;
  create(arg0: number): BehaviorControl<j_net_minecraft_world_entity_npc.Villager>;
}
