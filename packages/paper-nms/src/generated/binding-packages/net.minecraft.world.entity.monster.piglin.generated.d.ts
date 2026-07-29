// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM abstract net.minecraft.world.entity.monster.piglin.AbstractPiglin. */
export interface AbstractPiglinMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.Monster];
  getArmPose(): PiglinArmPose;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  isAdult(): boolean;
  isConverting(): boolean;
  isImmuneToZombification(): boolean;
  playAmbientSound(): void;
  setImmuneToZombification(arg0: boolean): void;
  setTimeInOverworld(arg0: number): void;
  timeInOverworld: number;
}
export type AbstractPiglin = AbstractPiglinMembers & j_net_minecraft_world_entity_monster.Monster;
export interface AbstractPiglinStatics {
  readonly CONVERSION_TIME: 300;
}

/** JVM class net.minecraft.world.entity.monster.piglin.Piglin. */
export interface PiglinMembers {
  readonly __javaSupertypes?: readonly [AbstractPiglin, j_net_minecraft_world_entity_monster.CrossbowAttackMob, j_net_minecraft_world_entity_npc.InventoryCarrier];
  allowedBarterItems: JavaSet<j_net_minecraft_world_item.Item>;
  canFireProjectileWeapon(arg0: j_net_minecraft_world_item.ProjectileWeaponItem): boolean;
  cannotHunt: boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getArmPose(): PiglinArmPose;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Piglin>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInventory(): j_net_minecraft_world.SimpleContainer;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item> | null;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  interestItems: JavaSet<j_net_minecraft_world_item.Item>;
  readonly inventory: j_net_minecraft_world.SimpleContainer;
  isBaby(): boolean;
  isChargingCrossbow(): boolean;
  isDancing(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onCrossbowAttackPerformed(): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  removeWhenFarAway(arg0: number): boolean;
  setBaby(arg0: boolean): void;
  setChargingCrossbow(arg0: boolean): void;
  setDancing(arg0: boolean): void;
  startRiding(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): boolean;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type Piglin = PiglinMembers & AbstractPiglin & j_net_minecraft_world_entity_monster.CrossbowAttackMob & j_net_minecraft_world_entity_npc.InventoryCarrier;
export interface PiglinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractPiglin>, arg1: j_net_minecraft_world_level.Level): Piglin;
  checkPiglinSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Piglin>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.piglin.PiglinAi. */
export interface PiglinAiMembers {
}
export type PiglinAi = PiglinAiMembers;
export interface PiglinAiStatics {
  new(): PiglinAi;
  readonly BARTERING_ITEM: j_net_minecraft_world_item.Item;
  readonly REPELLENT_DETECTION_RANGE_HORIZONTAL: 8;
  readonly REPELLENT_DETECTION_RANGE_VERTICAL: 4;
  angerNearbyPiglins(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_player.Player, arg2: boolean): void;
  getAvoidTarget(arg0: Piglin): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
  getNearestVisibleTargetablePlayer(arg0: AbstractPiglin): JavaOptional<j_net_minecraft_world_entity_player.Player>;
  getSoundForCurrentActivity(arg0: Piglin): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  isPlayerHoldingLovedItem(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  isWearingSafeArmor(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  isZombified(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  mobInteract(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Piglin, arg2: j_net_minecraft_world_entity_player.Player, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}

/** Live JVM enum net.minecraft.world.entity.monster.piglin.PiglinArmPose; constants are host handles, not strings. */
export type PiglinArmPose = JavaEnum<"net.minecraft.world.entity.monster.piglin.PiglinArmPose", "ADMIRING_ITEM" | "ATTACKING_WITH_MELEE_WEAPON" | "CROSSBOW_CHARGE" | "CROSSBOW_HOLD" | "DANCING" | "DEFAULT"> & PiglinArmPoseMembers;
export interface PiglinArmPoseMembers {
}
export interface PiglinArmPoseStatics {
  readonly ADMIRING_ITEM: PiglinArmPose;
  readonly ATTACKING_WITH_MELEE_WEAPON: PiglinArmPose;
  readonly CROSSBOW_CHARGE: PiglinArmPose;
  readonly CROSSBOW_HOLD: PiglinArmPose;
  readonly DANCING: PiglinArmPose;
  readonly DEFAULT: PiglinArmPose;
  valueOf(arg0: string): PiglinArmPose;
  values(): Array<PiglinArmPose>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.PiglinBrute. */
export interface PiglinBruteMembers {
  readonly __javaSupertypes?: readonly [AbstractPiglin];
  canHunt(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getArmPose(): PiglinArmPose;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<PiglinBrute>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type PiglinBrute = PiglinBruteMembers & AbstractPiglin;
export interface PiglinBruteStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<PiglinBrute>, arg1: j_net_minecraft_world_level.Level): PiglinBrute;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.piglin.PiglinBruteAi. */
export interface PiglinBruteAiMembers {
}
export type PiglinBruteAi = PiglinBruteAiMembers;
export interface PiglinBruteAiStatics {
  new(): PiglinBruteAi;
}

/** JVM class net.minecraft.world.entity.monster.piglin.RememberIfHoglinWasKilled. */
export interface RememberIfHoglinWasKilledMembers {
}
export type RememberIfHoglinWasKilled = RememberIfHoglinWasKilledMembers;
export interface RememberIfHoglinWasKilledStatics {
  new(): RememberIfHoglinWasKilled;
  create(): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.StartAdmiringItemIfSeen. */
export interface StartAdmiringItemIfSeenMembers {
}
export type StartAdmiringItemIfSeen = StartAdmiringItemIfSeenMembers;
export interface StartAdmiringItemIfSeenStatics {
  new(): StartAdmiringItemIfSeen;
  create(arg0: number): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.StartHuntingHoglin. */
export interface StartHuntingHoglinMembers {
}
export type StartHuntingHoglin = StartHuntingHoglinMembers;
export interface StartHuntingHoglinStatics {
  new(): StartHuntingHoglin;
  create(): j_net_minecraft_world_entity_ai_behavior.OneShot<Piglin>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.StopAdmiringIfItemTooFarAway. */
export interface StopAdmiringIfItemTooFarAwayMembers<E /* extends Piglin */ = unknown> {
}
export type StopAdmiringIfItemTooFarAway<E /* extends Piglin */ = unknown> = StopAdmiringIfItemTooFarAwayMembers<E>;
export interface StopAdmiringIfItemTooFarAwayStatics {
  new<E /* extends Piglin */>(): StopAdmiringIfItemTooFarAway<E>;
  create(arg0: number): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.StopAdmiringIfTiredOfTryingToReachItem. */
export interface StopAdmiringIfTiredOfTryingToReachItemMembers {
}
export type StopAdmiringIfTiredOfTryingToReachItem = StopAdmiringIfTiredOfTryingToReachItemMembers;
export interface StopAdmiringIfTiredOfTryingToReachItemStatics {
  new(): StopAdmiringIfTiredOfTryingToReachItem;
  create(arg0: number, arg1: number): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.StopHoldingItemIfNoLongerAdmiring. */
export interface StopHoldingItemIfNoLongerAdmiringMembers {
}
export type StopHoldingItemIfNoLongerAdmiring = StopHoldingItemIfNoLongerAdmiringMembers;
export interface StopHoldingItemIfNoLongerAdmiringStatics {
  new(): StopHoldingItemIfNoLongerAdmiring;
  create(): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<Piglin>;
}
