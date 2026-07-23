// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_sensing from './net.minecraft.world.entity.ai.sensing.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM abstract net.minecraft.world.entity.monster.piglin.AbstractPiglin. */
export interface AbstractPiglinMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.Monster];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  canHunt(): boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  finishConversion(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getArmPose(): PiglinArmPose;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  isAdult(): boolean;
  isConverting(): boolean;
  isHoldingMeleeWeapon(): boolean;
  isImmuneToZombification(): boolean;
  playAmbientSound(): void;
  playConvertedSound(): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  sendDebugPackets(): void;
  setImmuneToZombification(arg0: boolean): void;
  setTimeInOverworld(arg0: number): void;
  timeInOverworld: number;
}
export type AbstractPiglin = AbstractPiglinMembers & j_net_minecraft_world_entity_monster.Monster;
export interface AbstractPiglinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractPiglin>, arg1: j_net_minecraft_world_level.Level): AbstractPiglin;
  readonly CONVERSION_TIME: 300;
  readonly DATA_IMMUNE_TO_ZOMBIFICATION: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
}

/** JVM class net.minecraft.world.entity.monster.piglin.Piglin. */
export interface PiglinMembers {
  readonly __javaSupertypes?: readonly [AbstractPiglin, j_net_minecraft_world_entity_monster.CrossbowAttackMob, j_net_minecraft_world_entity_npc.InventoryCarrier];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addToInventory(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  allowedBarterItems: JavaSet<j_net_minecraft_world_item.Item>;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Piglin>;
  canAddToInventory(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  canFireProjectileWeapon(arg0: j_net_minecraft_world_item.ProjectileWeaponItem): boolean;
  canHunt(): boolean;
  canReplaceCurrentItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  canReplaceCurrentItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  cannotHunt: boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  dropCustomDeathLoot(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: boolean): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  finishConversion(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getArmPose(): PiglinArmPose;
  getBaseExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Piglin>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInventory(): j_net_minecraft_world.SimpleContainer;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item> | null;
  holdInMainHand(arg0: j_net_minecraft_world_item.ItemStack): void;
  holdInOffHand(arg0: j_net_minecraft_world_item.ItemStack): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  interestItems: JavaSet<j_net_minecraft_world_item.Item>;
  readonly inventory: j_net_minecraft_world.SimpleContainer;
  isBaby(): boolean;
  isChargingCrossbow(): boolean;
  isDancing(): boolean;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onCrossbowAttackPerformed(): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  pickUpItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_item.ItemEntity): void;
  playConvertedSound(): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  populateDefaultEquipmentSlots(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world.DifficultyInstance): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  removeWhenFarAway(arg0: number): boolean;
  setBaby(arg0: boolean): void;
  setChargingCrossbow(arg0: boolean): void;
  setDancing(arg0: boolean): void;
  shouldDespawnInPeaceful(): boolean;
  startRiding(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): boolean;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type Piglin = PiglinMembers & AbstractPiglin & j_net_minecraft_world_entity_monster.CrossbowAttackMob & j_net_minecraft_world_entity_npc.InventoryCarrier;
export interface PiglinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractPiglin>, arg1: j_net_minecraft_world_level.Level): Piglin;
  readonly MEMORY_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>]>;
  readonly SENSOR_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<Piglin>>]>;
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
  readonly TIME_BETWEEN_HUNTS: j_net_minecraft_util_valueproviders.UniformInt;
  angerNearbyPiglins(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_player.Player, arg2: boolean): void;
  broadcastAngerTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: AbstractPiglin, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  broadcastUniversalAnger(arg0: j_net_minecraft_server_level.ServerLevel, arg1: AbstractPiglin): void;
  canAdmire(arg0: Piglin, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  cancelAdmiring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Piglin): void;
  dontKillAnyMoreHoglinsForAWhile(arg0: AbstractPiglin): void;
  getAvoidTarget(arg0: Piglin): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
  getNearestVisibleTargetablePlayer(arg0: AbstractPiglin): JavaOptional<j_net_minecraft_world_entity_player.Player>;
  getSoundForCurrentActivity(arg0: Piglin): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  getVisibleAdultPiglins(arg0: Piglin): JavaList<AbstractPiglin>;
  initMemories(arg0: Piglin, arg1: j_net_minecraft_util.RandomSource): void;
  isIdle(arg0: AbstractPiglin): boolean;
  isLovedItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isLovedItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: Piglin): boolean;
  isPlayerHoldingLovedItem(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  isWearingSafeArmor(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  isZombified(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  makeBrain(arg0: Piglin, arg1: j_net_minecraft_world_entity_ai.Brain<Piglin>): j_net_minecraft_world_entity_ai.Brain<object>;
  maybeRetaliate(arg0: j_net_minecraft_server_level.ServerLevel, arg1: AbstractPiglin, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  mobInteract(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Piglin, arg2: j_net_minecraft_world_entity_player.Player, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  pickUpItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Piglin, arg2: j_net_minecraft_world_entity_item.ItemEntity): void;
  setAngerTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: AbstractPiglin, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  stopHoldingOffHandItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Piglin, arg2: boolean): void;
  updateActivity(arg0: Piglin): void;
  wantsToPickup(arg0: Piglin, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  wasHurtBy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Piglin, arg2: j_net_minecraft_world_entity.LivingEntity): void;
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
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<PiglinBrute>;
  canHunt(): boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getArmPose(): PiglinArmPose;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<PiglinBrute>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  playAngrySound(): void;
  playConvertedSound(): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  populateDefaultEquipmentSlots(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world.DifficultyInstance): void;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type PiglinBrute = PiglinBruteMembers & AbstractPiglin;
export interface PiglinBruteStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<PiglinBrute>, arg1: j_net_minecraft_world_level.Level): PiglinBrute;
  readonly MEMORY_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>]>;
  readonly SENSOR_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<PiglinBrute>>]>;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.piglin.PiglinBruteAi. */
export interface PiglinBruteAiMembers {
}
export type PiglinBruteAi = PiglinBruteAiMembers;
export interface PiglinBruteAiStatics {
  new(): PiglinBruteAi;
  initMemories(arg0: PiglinBrute): void;
  makeBrain(arg0: PiglinBrute, arg1: j_net_minecraft_world_entity_ai.Brain<PiglinBrute>): j_net_minecraft_world_entity_ai.Brain<object>;
  maybePlayActivitySound(arg0: PiglinBrute): void;
  setAngerTarget(arg0: PiglinBrute, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  updateActivity(arg0: PiglinBrute): void;
  wasHurtBy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: PiglinBrute, arg2: j_net_minecraft_world_entity.LivingEntity): void;
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
