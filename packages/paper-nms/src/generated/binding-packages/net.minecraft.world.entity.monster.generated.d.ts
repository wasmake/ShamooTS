// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_control from './net.minecraft.world.entity.ai.control.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_ai_gossip from './net.minecraft.world.entity.ai.gossip.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_sheep from './net.minecraft.world.entity.animal.sheep.generated.js';
import type * as j_net_minecraft_world_entity_monster_hoglin from './net.minecraft.world.entity.monster.hoglin.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.entity.monster.AbstractIllager. */
export interface AbstractIllagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_raid.Raider];
  canAttack(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  getArmPose(): AbstractIllager_IllagerArmPose;
}
export type AbstractIllager = AbstractIllagerMembers & j_net_minecraft_world_entity_raid.Raider;
export interface AbstractIllagerStatics {
}

/** Live JVM enum net.minecraft.world.entity.monster.AbstractIllager$IllagerArmPose; constants are host handles, not strings. */
export type AbstractIllager_IllagerArmPose = JavaEnum<"net.minecraft.world.entity.monster.AbstractIllager$IllagerArmPose", "ATTACKING" | "BOW_AND_ARROW" | "CELEBRATING" | "CROSSBOW_CHARGE" | "CROSSBOW_HOLD" | "CROSSED" | "NEUTRAL" | "SPELLCASTING"> & AbstractIllager_IllagerArmPoseMembers;
export interface AbstractIllager_IllagerArmPoseMembers {
}
export interface AbstractIllager_IllagerArmPoseStatics {
  readonly ATTACKING: AbstractIllager_IllagerArmPose;
  readonly BOW_AND_ARROW: AbstractIllager_IllagerArmPose;
  readonly CELEBRATING: AbstractIllager_IllagerArmPose;
  readonly CROSSBOW_CHARGE: AbstractIllager_IllagerArmPose;
  readonly CROSSBOW_HOLD: AbstractIllager_IllagerArmPose;
  readonly CROSSED: AbstractIllager_IllagerArmPose;
  readonly NEUTRAL: AbstractIllager_IllagerArmPose;
  readonly SPELLCASTING: AbstractIllager_IllagerArmPose;
  valueOf(arg0: string): AbstractIllager_IllagerArmPose;
  values(): Array<AbstractIllager_IllagerArmPose>;
}

/** JVM class net.minecraft.world.entity.monster.AbstractIllager$RaiderOpenDoorGoal. */
export interface AbstractIllager_RaiderOpenDoorGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.OpenDoorGoal];
  canUse(): boolean;
}
export type AbstractIllager_RaiderOpenDoorGoal = AbstractIllager_RaiderOpenDoorGoalMembers & j_net_minecraft_world_entity_ai_goal.OpenDoorGoal;
export interface AbstractIllager_RaiderOpenDoorGoalStatics {
  new(arg0: AbstractIllager, arg1: j_net_minecraft_world_entity_raid.Raider): AbstractIllager_RaiderOpenDoorGoal;
}

/** JVM abstract net.minecraft.world.entity.monster.AbstractSkeleton. */
export interface AbstractSkeletonMembers {
  readonly __javaSupertypes?: readonly [Monster, RangedAttackMob];
  aiStep(): void;
  canFireProjectileWeapon(arg0: j_net_minecraft_world_item.ProjectileWeaponItem): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>;
  isShaking(): boolean;
  onEquipItem(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack, arg3: boolean): void;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  reassessWeaponGoal(): void;
  rideTick(): void;
  setShouldBurnInDay(arg0: boolean): void;
  shouldBurnInDay(): boolean;
}
export type AbstractSkeleton = AbstractSkeletonMembers & Monster & RangedAttackMob;
export interface AbstractSkeletonStatics {
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Blaze. */
export interface BlazeMembers {
  readonly __javaSupertypes?: readonly [Monster];
  aiStep(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLightLevelDependentMagicValue(): number;
  isOnFire(): boolean;
  isSensitiveToWater(): boolean;
}
export type Blaze = BlazeMembers & Monster;
export interface BlazeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Blaze>, arg1: j_net_minecraft_world_level.Level): Blaze;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Bogged. */
export interface BoggedMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton, j_net_minecraft_world_entity.Shearable];
  generateDefaultDrops(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): JavaList<j_net_minecraft_world_item.ItemStack>;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  isSheared(): boolean;
  readyForShearing(): boolean;
  setSheared(arg0: boolean): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaList<j_net_minecraft_world_item.ItemStack>): void;
}
export type Bogged = BoggedMembers & AbstractSkeleton & j_net_minecraft_world_entity.Shearable;
export interface BoggedStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Bogged>, arg1: j_net_minecraft_world_level.Level): Bogged;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.CaveSpider. */
export interface CaveSpiderMembers {
  readonly __javaSupertypes?: readonly [Spider];
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getVehicleAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_phys.Vec3;
}
export type CaveSpider = CaveSpiderMembers & Spider;
export interface CaveSpiderStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<CaveSpider>, arg1: j_net_minecraft_world_level.Level): CaveSpider;
  createCaveSpider(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Creeper. */
export interface CreeperMembers {
  readonly __javaSupertypes?: readonly [Monster];
  canDropMobsSkull(): boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  entityIgniter: j_net_minecraft_world_entity.Entity | null;
  explodeCreeper(): void;
  explosionRadius: number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxFallDistance(): number;
  getSwellDir(): number;
  getSwelling(arg0: number): number;
  ignite(): void;
  increaseDroppedSkulls(): void;
  isIgnited(): boolean;
  isPowered(): boolean;
  maxSwell: number;
  setIgnited(arg0: boolean): void;
  setPowered(arg0: boolean): void;
  setSwellDir(arg0: number): void;
  setTarget(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: JavaOpaque<"org.bukkit.event.entity.EntityTargetEvent$TargetReason"> | null): boolean;
  swell: number;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
  tick(): void;
}
export type Creeper = CreeperMembers & Monster;
export interface CreeperStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Creeper>, arg1: j_net_minecraft_world_level.Level): Creeper;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM interface net.minecraft.world.entity.monster.CrossbowAttackMob. */
export interface CrossbowAttackMobMembers {
  readonly __javaSupertypes?: readonly [RangedAttackMob];
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  onCrossbowAttackPerformed(): void;
  performCrossbowAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  setChargingCrossbow(arg0: boolean): void;
}
export type CrossbowAttackMob = CrossbowAttackMobMembers & RangedAttackMob;
export interface CrossbowAttackMobStatics {
}

/** JVM class net.minecraft.world.entity.monster.Drowned. */
export interface DrownedMembers {
  readonly __javaSupertypes?: readonly [Zombie, RangedAttackMob];
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  isPushedByFluid(): boolean;
  isVisuallySwimming(): boolean;
  okTarget(arg0: j_net_minecraft_world_entity.LivingEntity | null): boolean;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  setSearchingForLand(arg0: boolean): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  updateSwimming(): void;
}
export type Drowned = DrownedMembers & Zombie & RangedAttackMob;
export interface DrownedStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Drowned>, arg1: j_net_minecraft_world_level.Level): Drowned;
  readonly NAUTILUS_SHELL_CHANCE: 0.03;
  checkDrownedSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Drowned>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.ElderGuardian. */
export interface ElderGuardianMembers {
  readonly __javaSupertypes?: readonly [Guardian];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAttackDuration(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
}
export type ElderGuardian = ElderGuardianMembers & Guardian;
export interface ElderGuardianStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ElderGuardian>, arg1: j_net_minecraft_world_level.Level): ElderGuardian;
  readonly ELDER_SIZE_SCALE: number;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.EnderMan. */
export interface EnderManMembers {
  readonly __javaSupertypes?: readonly [Monster, j_net_minecraft_world_entity.NeutralMob];
  aiStep(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getCarriedBlock(): j_net_minecraft_world_level_block_state.BlockState | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  hasBeenStaredAt(): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isCreepy(): boolean;
  isSensitiveToWater(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playStareSound(): void;
  requiresCustomPersistence(): boolean;
  setBeingStaredAt(): void;
  setCarriedBlock(arg0: j_net_minecraft_world_level_block_state.BlockState | null): void;
  setCreepy(arg0: boolean): void;
  setHasBeenStaredAt(arg0: boolean): void;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void;
  setRemainingPersistentAngerTime(arg0: number): void;
  setTarget(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: JavaOpaque<"org.bukkit.event.entity.EntityTargetEvent$TargetReason"> | null): boolean;
  startPersistentAngerTimer(): void;
  teleport(): boolean;
  teleportTowards(arg0: j_net_minecraft_world_entity.Entity): boolean;
}
export type EnderMan = EnderManMembers & Monster & j_net_minecraft_world_entity.NeutralMob;
export interface EnderManStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<EnderMan>, arg1: j_net_minecraft_world_level.Level): EnderMan;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Endermite. */
export interface EndermiteMembers {
  readonly __javaSupertypes?: readonly [Monster];
  aiStep(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  life: number;
  setYBodyRot(arg0: number): void;
  tick(): void;
}
export type Endermite = EndermiteMembers & Monster;
export interface EndermiteStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Endermite>, arg1: j_net_minecraft_world_level.Level): Endermite;
  checkEndermiteSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Endermite>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM interface net.minecraft.world.entity.monster.Enemy. */
export interface EnemyMembers {
}
export type Enemy = EnemyMembers;
export interface EnemyStatics {
  readonly XP_REWARD_BOSS: 50;
  readonly XP_REWARD_HUGE: 20;
  readonly XP_REWARD_LARGE: 10;
  readonly XP_REWARD_MEDIUM: 5;
  readonly XP_REWARD_NONE: 0;
  readonly XP_REWARD_SMALL: 3;
}

/** JVM class net.minecraft.world.entity.monster.Evoker. */
export interface EvokerMembers {
  readonly __javaSupertypes?: readonly [SpellcasterIllager];
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getWololoTarget(): j_net_minecraft_world_entity_animal_sheep.Sheep | null;
  setWololoTarget(arg0: j_net_minecraft_world_entity_animal_sheep.Sheep | null): void;
}
export type Evoker = EvokerMembers & SpellcasterIllager;
export interface EvokerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Evoker>, arg1: j_net_minecraft_world_level.Level): Evoker;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Evoker$EvokerWololoSpellGoal. */
export interface Evoker_EvokerWololoSpellGoalMembers {
  readonly __javaSupertypes?: readonly [SpellcasterIllager_SpellcasterUseSpellGoal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  stop(): void;
}
export type Evoker_EvokerWololoSpellGoal = Evoker_EvokerWololoSpellGoalMembers & SpellcasterIllager_SpellcasterUseSpellGoal;
export interface Evoker_EvokerWololoSpellGoalStatics {
  new(arg0: Evoker): Evoker_EvokerWololoSpellGoal;
}

/** JVM class net.minecraft.world.entity.monster.Ghast. */
export interface GhastMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Mob, Enemy];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getExplosionPower(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxSpawnClusterSize(): number;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSoundVolume(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isCharging(): boolean;
  isInvulnerableTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  leashElasticDistance(): number;
  leashSnapDistance(): number;
  onClimbable(): boolean;
  setCharging(arg0: boolean): void;
  setExplosionPower(arg0: number): void;
  supportQuadLeashAsHolder(): boolean;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type Ghast = GhastMembers & j_net_minecraft_world_entity.Mob & Enemy;
export interface GhastStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Ghast>, arg1: j_net_minecraft_world_level.Level): Ghast;
  checkGhastSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Ghast>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  faceMovementDirection(arg0: j_net_minecraft_world_entity.Mob): void;
}

/** JVM class net.minecraft.world.entity.monster.Ghast$GhastLookGoal. */
export interface Ghast_GhastLookGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  tick(): void;
}
export type Ghast_GhastLookGoal = Ghast_GhastLookGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface Ghast_GhastLookGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): Ghast_GhastLookGoal;
}

/** JVM class net.minecraft.world.entity.monster.Ghast$GhastMoveControl. */
export interface Ghast_GhastMoveControlMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_control.MoveControl];
  tick(): void;
}
export type Ghast_GhastMoveControl = Ghast_GhastMoveControlMembers & j_net_minecraft_world_entity_ai_control.MoveControl;
export interface Ghast_GhastMoveControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: boolean, arg2: JavaOpaque<"java.util.function.BooleanSupplier">): Ghast_GhastMoveControl;
}

/** JVM class net.minecraft.world.entity.monster.Ghast$RandomFloatAroundGoal. */
export interface Ghast_RandomFloatAroundGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
}
export type Ghast_RandomFloatAroundGoal = Ghast_RandomFloatAroundGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface Ghast_RandomFloatAroundGoalStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): Ghast_RandomFloatAroundGoal;
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number): Ghast_RandomFloatAroundGoal;
  getSuitableFlyToPosition(arg0: j_net_minecraft_world_entity.Mob, arg1: number): j_net_minecraft_world_phys.Vec3;
}

/** JVM class net.minecraft.world.entity.monster.Giant. */
export interface GiantMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
}
export type Giant = GiantMembers & Monster;
export interface GiantStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Giant>, arg1: j_net_minecraft_world_level.Level): Giant;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Guardian. */
export interface GuardianMembers {
  readonly __javaSupertypes?: readonly [Monster];
  aiStep(): void;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  getActiveAttackTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAmbientSoundInterval(): number;
  getAttackAnimationScale(arg0: number): number;
  getAttackDuration(): number;
  getClientSideAttackTime(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadXRot(): number;
  getSpikesAnimation(arg0: number): number;
  getTailAnimation(arg0: number): number;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  guardianAttackGoal: Guardian_GuardianAttackGoal;
  hasActiveAttackTarget(): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isMoving(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  randomStrollGoal: j_net_minecraft_world_entity_ai_goal.RandomStrollGoal | null;
  setActiveAttackTarget(arg0: number): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type Guardian = GuardianMembers & Monster;
export interface GuardianStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Guardian>, arg1: j_net_minecraft_world_level.Level): Guardian;
  checkGuardianSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Guardian>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Guardian$GuardianAttackGoal. */
export interface Guardian_GuardianAttackGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  attackTime: number;
  canContinueToUse(): boolean;
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Guardian_GuardianAttackGoal = Guardian_GuardianAttackGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface Guardian_GuardianAttackGoalStatics {
  new(arg0: Guardian): Guardian_GuardianAttackGoal;
}

/** JVM class net.minecraft.world.entity.monster.Husk. */
export interface HuskMembers {
  readonly __javaSupertypes?: readonly [Zombie];
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  isSunSensitive(): boolean;
}
export type Husk = HuskMembers & Zombie;
export interface HuskStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Husk>, arg1: j_net_minecraft_world_level.Level): Husk;
  checkHuskSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Husk>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM class net.minecraft.world.entity.monster.Illusioner. */
export interface IllusionerMembers {
  readonly __javaSupertypes?: readonly [SpellcasterIllager, RangedAttackMob];
  aiStep(): void;
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getArmPose(): AbstractIllager_IllagerArmPose;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getIllusionOffsets(arg0: number): Array<j_net_minecraft_world_phys.Vec3>;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
}
export type Illusioner = IllusionerMembers & SpellcasterIllager & RangedAttackMob;
export interface IllusionerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Illusioner>, arg1: j_net_minecraft_world_level.Level): Illusioner;
  readonly ILLUSION_SPREAD: 3;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.MagmaCube. */
export interface MagmaCubeMembers {
  readonly __javaSupertypes?: readonly [Slime];
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLightLevelDependentMagicValue(): number;
  isOnFire(): boolean;
  jumpFromGround(): void;
  setSize(arg0: number, arg1: boolean): void;
}
export type MagmaCube = MagmaCubeMembers & Slime;
export interface MagmaCubeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MagmaCube>, arg1: j_net_minecraft_world_level.Level): MagmaCube;
  checkMagmaCubeSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<MagmaCube>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM abstract net.minecraft.world.entity.monster.Monster. */
export interface MonsterMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.PathfinderMob, Enemy];
  aiStep(): void;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getFallSounds(): j_net_minecraft_world_entity.LivingEntity_Fallsounds;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getProjectile(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  isPreventingPlayerRest(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_player.Player): boolean;
  shouldDropExperience(): boolean;
}
export type Monster = MonsterMembers & j_net_minecraft_world_entity.PathfinderMob & Enemy;
export interface MonsterStatics {
  checkAnyLightMonsterSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Monster>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  checkMonsterSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Monster>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createMonsterAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  isDarkEnoughToSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM abstract net.minecraft.world.entity.monster.PatrollingMonster. */
export interface PatrollingMonsterMembers {
  readonly __javaSupertypes?: readonly [Monster];
  canBeLeader(): boolean;
  canJoinPatrol(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  findPatrolTarget(): void;
  getPatrolTarget(): j_net_minecraft_core.BlockPos;
  hasPatrolTarget(): boolean;
  isPatrolLeader(): boolean;
  removeWhenFarAway(arg0: number): boolean;
  setPatrolLeader(arg0: boolean): void;
  setPatrolTarget(arg0: j_net_minecraft_core.BlockPos): void;
}
export type PatrollingMonster = PatrollingMonsterMembers & Monster;
export interface PatrollingMonsterStatics {
  checkPatrollingMonsterSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<PatrollingMonster>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM class net.minecraft.world.entity.monster.PatrollingMonster$LongDistancePatrolGoal. */
export interface PatrollingMonster_LongDistancePatrolGoalMembers<T /* extends PatrollingMonster */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type PatrollingMonster_LongDistancePatrolGoal<T /* extends PatrollingMonster */ = unknown> = PatrollingMonster_LongDistancePatrolGoalMembers<T> & j_net_minecraft_world_entity_ai_goal.Goal;
export interface PatrollingMonster_LongDistancePatrolGoalStatics {
  new<T /* extends PatrollingMonster */>(arg0: T, arg1: number, arg2: number): PatrollingMonster_LongDistancePatrolGoal<T>;
}

/** JVM class net.minecraft.world.entity.monster.Phantom. */
export interface PhantomMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Mob, Enemy];
  aiStep(): void;
  anchorPoint: j_net_minecraft_core.BlockPos | null;
  canAttackType(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPhantomSize(): number;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSoundVolume(): number;
  getUniqueFlapTickOffset(): number;
  isFlapping(): boolean;
  onClimbable(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  setPhantomSize(arg0: number): void;
  shouldBurnInDay: boolean;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  spawningEntity: JavaOpaque<"java.util.UUID"> | null;
  tick(): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type Phantom = PhantomMembers & j_net_minecraft_world_entity.Mob & Enemy;
export interface PhantomStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Phantom>, arg1: j_net_minecraft_world_level.Level): Phantom;
  readonly FLAP_DEGREES_PER_TICK: 7.448451;
  readonly TICKS_PER_FLAP: number;
}

/** JVM class net.minecraft.world.entity.monster.Pillager. */
export interface PillagerMembers {
  readonly __javaSupertypes?: readonly [AbstractIllager, CrossbowAttackMob, j_net_minecraft_world_entity_npc.InventoryCarrier];
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  canFireProjectileWeapon(arg0: j_net_minecraft_world_item.ProjectileWeaponItem): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getArmPose(): AbstractIllager_IllagerArmPose;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInventory(): j_net_minecraft_world.SimpleContainer;
  getMaxSpawnClusterSize(): number;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  readonly inventory: j_net_minecraft_world.SimpleContainer;
  isChargingCrossbow(): boolean;
  onCrossbowAttackPerformed(): void;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  setChargingCrossbow(arg0: boolean): void;
}
export type Pillager = PillagerMembers & AbstractIllager & CrossbowAttackMob & j_net_minecraft_world_entity_npc.InventoryCarrier;
export interface PillagerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Pillager>, arg1: j_net_minecraft_world_level.Level): Pillager;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM interface net.minecraft.world.entity.monster.RangedAttackMob. */
export interface RangedAttackMobMembers {
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
}
export type RangedAttackMob = RangedAttackMobMembers;
export interface RangedAttackMobStatics {
}

/** JVM class net.minecraft.world.entity.monster.Ravager. */
export interface RavagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_raid.Raider];
  aiStep(): void;
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  attackTick: number;
  canBeLeader(): boolean;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAttackTick(): number;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadYRot(): number;
  getRoarTick(): number;
  getStunnedTick(): number;
  handleEntityEvent(arg0: number): void;
  hasLineOfSight(arg0: j_net_minecraft_world_entity.Entity): boolean;
  roarTick: number;
  stunnedTick: number;
}
export type Ravager = RavagerMembers & j_net_minecraft_world_entity_raid.Raider;
export interface RavagerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Ravager>, arg1: j_net_minecraft_world_level.Level): Ravager;
  readonly ATTACK_DURATION: 10;
  readonly STUN_DURATION: 40;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Shulker. */
export interface ShulkerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.AbstractGolem, Enemy];
  canBeCollidedWith(arg0: j_net_minecraft_world_entity.Entity | null): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAttachFace(): j_net_minecraft_core.Direction;
  getClientPeekAmount(arg0: number): number;
  getColor(): j_net_minecraft_world_item.DyeColor | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDeltaMovement(): j_net_minecraft_world_phys.Vec3;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInterpolation(): j_net_minecraft_world_entity.InterpolationHandler;
  getMaxHeadXRot(): number;
  getMaxHeadYRot(): number;
  getRawPeekAmount(): number;
  getRenderPosition(arg0: number): j_net_minecraft_world_phys.Vec3 | null;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getVariant(): JavaOptional<j_net_minecraft_world_item.DyeColor>;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  move(arg0: j_net_minecraft_world_entity.MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playAmbientSound(): void;
  push(arg0: j_net_minecraft_world_entity.Entity): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  setAttachFace(arg0: j_net_minecraft_core.Direction): void;
  setDeltaMovement(arg0: j_net_minecraft_world_phys.Vec3): void;
  setPos(arg0: number, arg1: number, arg2: number): void;
  setRawPeekAmount(arg0: number): void;
  startRiding(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): boolean;
  stopRiding(): void;
  stopRiding(arg0: boolean): void;
  tick(): void;
}
export type Shulker = ShulkerMembers & j_net_minecraft_world_entity_animal.AbstractGolem & Enemy;
export interface ShulkerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Shulker>, arg1: j_net_minecraft_world_level.Level): Shulker;
  readonly DATA_COLOR_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  getProgressAabb(arg0: number, arg1: j_net_minecraft_core.Direction, arg2: number, arg3: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.AABB;
  getProgressDeltaAabb(arg0: number, arg1: j_net_minecraft_core.Direction, arg2: number, arg3: number, arg4: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.AABB;
}

/** JVM class net.minecraft.world.entity.monster.Silverfish. */
export interface SilverfishMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  setYBodyRot(arg0: number): void;
  tick(): void;
}
export type Silverfish = SilverfishMembers & Monster;
export interface SilverfishStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Silverfish>, arg1: j_net_minecraft_world_level.Level): Silverfish;
  checkSilverfishSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Silverfish>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Skeleton. */
export interface SkeletonMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton];
  canFreeze(): boolean;
  conversionTime: number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  inPowderSnowTime: number;
  isFreezeConverting(): boolean;
  isShaking(): boolean;
  setFreezeConverting(arg0: boolean): void;
  startFreezeConversion(arg0: number): void;
  tick(): void;
}
export type Skeleton = SkeletonMembers & AbstractSkeleton;
export interface SkeletonStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Skeleton>, arg1: j_net_minecraft_world_level.Level): Skeleton;
  readonly CONVERSION_TAG: "StrayConversionTime";
  readonly DATA_STRAY_CONVERSION_ID: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
}

/** JVM class net.minecraft.world.entity.monster.Slime. */
export interface SlimeMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Mob, Enemy];
  canWander(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadXRot(): number;
  getSize(): number;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSoundVolume(): number;
  getType(): j_net_minecraft_world_entity.EntityType<Slime>;
  isTiny(): boolean;
  jumpFromGround(): void;
  oSquish: number;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  push(arg0: j_net_minecraft_world_entity.Entity): void;
  refreshDimensions(): void;
  remove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void;
  setSize(arg0: number, arg1: boolean): void;
  setWander(arg0: boolean): void;
  squish: number;
  targetSquish: number;
  tick(): void;
}
export type Slime = SlimeMembers & j_net_minecraft_world_entity.Mob & Enemy;
export interface SlimeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Slime>, arg1: j_net_minecraft_world_level.Level): Slime;
  readonly MAX_NATURAL_SIZE: 4;
  readonly MAX_SIZE: 127;
  readonly MIN_SIZE: 1;
  checkSlimeSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Slime>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM abstract net.minecraft.world.entity.monster.SpellcasterIllager. */
export interface SpellcasterIllagerMembers {
  readonly __javaSupertypes?: readonly [AbstractIllager];
  getArmPose(): AbstractIllager_IllagerArmPose;
  getCurrentSpell(): SpellcasterIllager_IllagerSpell;
  isCastingSpell(): boolean;
  setIsCastingSpell(arg0: SpellcasterIllager_IllagerSpell): void;
  tick(): void;
}
export type SpellcasterIllager = SpellcasterIllagerMembers & AbstractIllager;
export interface SpellcasterIllagerStatics {
}

/** Live JVM enum net.minecraft.world.entity.monster.SpellcasterIllager$IllagerSpell; constants are host handles, not strings. */
export type SpellcasterIllager_IllagerSpell = JavaEnum<"net.minecraft.world.entity.monster.SpellcasterIllager$IllagerSpell", "BLINDNESS" | "DISAPPEAR" | "FANGS" | "NONE" | "SUMMON_VEX" | "WOLOLO"> & SpellcasterIllager_IllagerSpellMembers;
export interface SpellcasterIllager_IllagerSpellMembers {
}
export interface SpellcasterIllager_IllagerSpellStatics {
  readonly BLINDNESS: SpellcasterIllager_IllagerSpell;
  readonly DISAPPEAR: SpellcasterIllager_IllagerSpell;
  readonly FANGS: SpellcasterIllager_IllagerSpell;
  readonly NONE: SpellcasterIllager_IllagerSpell;
  readonly SUMMON_VEX: SpellcasterIllager_IllagerSpell;
  readonly WOLOLO: SpellcasterIllager_IllagerSpell;
  byId(arg0: number): SpellcasterIllager_IllagerSpell;
  valueOf(arg0: string): SpellcasterIllager_IllagerSpell;
  values(): Array<SpellcasterIllager_IllagerSpell>;
}

/** JVM class net.minecraft.world.entity.monster.SpellcasterIllager$SpellcasterCastingSpellGoal. */
export interface SpellcasterIllager_SpellcasterCastingSpellGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type SpellcasterIllager_SpellcasterCastingSpellGoal = SpellcasterIllager_SpellcasterCastingSpellGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface SpellcasterIllager_SpellcasterCastingSpellGoalStatics {
  new(arg0: SpellcasterIllager): SpellcasterIllager_SpellcasterCastingSpellGoal;
}

/** JVM abstract net.minecraft.world.entity.monster.SpellcasterIllager$SpellcasterUseSpellGoal. */
export interface SpellcasterIllager_SpellcasterUseSpellGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  tick(): void;
}
export type SpellcasterIllager_SpellcasterUseSpellGoal = SpellcasterIllager_SpellcasterUseSpellGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface SpellcasterIllager_SpellcasterUseSpellGoalStatics {
}

/** JVM class net.minecraft.world.entity.monster.Spider. */
export interface SpiderMembers {
  readonly __javaSupertypes?: readonly [Monster];
  canBeAffected(arg0: j_net_minecraft_world_effect.MobEffectInstance): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getVehicleAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_phys.Vec3;
  isClimbing(): boolean;
  makeStuckInBlock(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_phys.Vec3): void;
  onClimbable(): boolean;
  setClimbing(arg0: boolean): void;
  tick(): void;
}
export type Spider = SpiderMembers & Monster;
export interface SpiderStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Spider>, arg1: j_net_minecraft_world_level.Level): Spider;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Spider$SpiderEffectsGroupData. */
export interface Spider_SpiderEffectsGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.SpawnGroupData];
  effect: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null;
  setRandomEffect(arg0: j_net_minecraft_util.RandomSource): void;
}
export type Spider_SpiderEffectsGroupData = Spider_SpiderEffectsGroupDataMembers & j_net_minecraft_world_entity.SpawnGroupData;
export interface Spider_SpiderEffectsGroupDataStatics {
  new(): Spider_SpiderEffectsGroupData;
}

/** JVM class net.minecraft.world.entity.monster.Stray. */
export interface StrayMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
}
export type Stray = StrayMembers & AbstractSkeleton;
export interface StrayStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Stray>, arg1: j_net_minecraft_world_level.Level): Stray;
  checkStraySpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Stray>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM class net.minecraft.world.entity.monster.Strider. */
export interface StriderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal, j_net_minecraft_world_entity.ItemSteerable];
  boost(): boolean;
  canStandOnFluid(arg0: j_net_minecraft_world_level_material.FluidState): boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Strider | null;
  getControllingPassenger(): j_net_minecraft_world_entity.LivingEntity | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDismountLocationForPassenger(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec3;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isOnFire(): boolean;
  isSensitiveToWater(): boolean;
  isSuffocating(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  setSuffocating(arg0: boolean): void;
  readonly steering: j_net_minecraft_world_entity.ItemBasedSteering;
  tick(): void;
}
export type Strider = StriderMembers & j_net_minecraft_world_entity_animal.Animal & j_net_minecraft_world_entity.ItemSteerable;
export interface StriderStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Strider>, arg1: j_net_minecraft_world_level.Level): Strider;
  checkStriderSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Strider>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Vex. */
export interface VexMembers {
  readonly __javaSupertypes?: readonly [Monster, j_net_minecraft_world_entity.TraceableEntity];
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBoundOrigin(): j_net_minecraft_core.BlockPos | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLightLevelDependentMagicValue(): number;
  getOwner(): j_net_minecraft_world_entity.Mob | null;
  hasLimitedLife: boolean;
  isAffectedByBlocks(): boolean;
  isCharging(): boolean;
  isFlapping(): boolean;
  limitedLifeTicks: number;
  owner: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.Mob> | null;
  restoreFrom(arg0: j_net_minecraft_world_entity.Entity): void;
  setBoundOrigin(arg0: j_net_minecraft_core.BlockPos | null): void;
  setIsCharging(arg0: boolean): void;
  setLimitedLife(arg0: number): void;
  setOwner(arg0: j_net_minecraft_world_entity.Mob): void;
  tick(): void;
}
export type Vex = VexMembers & Monster & j_net_minecraft_world_entity.TraceableEntity;
export interface VexStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Vex>, arg1: j_net_minecraft_world_level.Level): Vex;
  readonly FLAP_DEGREES_PER_TICK: 45.836624;
  readonly TICKS_PER_FLAP: number;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Vindicator. */
export interface VindicatorMembers {
  readonly __javaSupertypes?: readonly [AbstractIllager];
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getArmPose(): AbstractIllager_IllagerArmPose;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  isJohnny: boolean;
  setCustomName(arg0: j_net_minecraft_network_chat.Component | null): void;
}
export type Vindicator = VindicatorMembers & AbstractIllager;
export interface VindicatorStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Vindicator>, arg1: j_net_minecraft_world_level.Level): Vindicator;
  readonly DOOR_BREAKING_PREDICATE: JavaPredicate<j_net_minecraft_world.Difficulty>;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Witch. */
export interface WitchMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_raid.Raider, RangedAttackMob];
  aiStep(): void;
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  canBeLeader(): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  handleEntityEvent(arg0: number): void;
  isDrinkingPotion(): boolean;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  setDrinkingPotion(arg0: j_net_minecraft_world_item.ItemStack): void;
  setUsingItem(arg0: boolean): void;
  usingTime: number;
}
export type Witch = WitchMembers & j_net_minecraft_world_entity_raid.Raider & RangedAttackMob;
export interface WitchStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Witch>, arg1: j_net_minecraft_world_level.Level): Witch;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.WitherSkeleton. */
export interface WitherSkeletonMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton];
  canBeAffected(arg0: j_net_minecraft_world_effect.MobEffectInstance): boolean;
  canHoldItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>;
}
export type WitherSkeleton = WitherSkeletonMembers & AbstractSkeleton;
export interface WitherSkeletonStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<WitherSkeleton>, arg1: j_net_minecraft_world_level.Level): WitherSkeleton;
}

/** JVM class net.minecraft.world.entity.monster.Zoglin. */
export interface ZoglinMembers {
  readonly __javaSupertypes?: readonly [Monster, j_net_minecraft_world_entity_monster_hoglin.HoglinBase];
  aiStep(): void;
  canBeLeashed(): boolean;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAttackAnimationRemainingTicks(): number;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Zoglin>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAdult(): boolean;
  isBaby(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  setBaby(arg0: boolean): void;
}
export type Zoglin = ZoglinMembers & Monster & j_net_minecraft_world_entity_monster_hoglin.HoglinBase;
export interface ZoglinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Zoglin>, arg1: j_net_minecraft_world_level.Level): Zoglin;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.Zombie. */
export interface ZombieMembers {
  readonly __javaSupertypes?: readonly [Monster];
  aiStep(): void;
  canBreakDoors(): boolean;
  canHoldItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  conversionTime: number;
  convertVillagerToZombieVillager(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager): boolean;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getType(): j_net_minecraft_world_entity.EntityType<Zombie>;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isBaby(): boolean;
  isSunSensitive(): boolean;
  isUnderWaterConverting(): boolean;
  killedEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  setBaby(arg0: boolean): void;
  setCanBreakDoors(arg0: boolean): void;
  setConversionTime(arg0: number): void;
  setInWaterTime(arg0: number): void;
  setShouldBurnInDay(arg0: boolean): void;
  startUnderWaterConversion(arg0: number): void;
  stopDrowning(): void;
  tick(): void;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type Zombie = ZombieMembers & Monster;
export interface ZombieStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Zombie>, arg1: j_net_minecraft_world_level.Level): Zombie;
  new(arg0: j_net_minecraft_world_level.Level): Zombie;
  readonly DATA_DROWNED_CONVERSION_ID: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
  readonly DOOR_BREAKING_PREDICATE: JavaPredicate<j_net_minecraft_world.Difficulty>;
  readonly REINFORCEMENT_ATTEMPTS: 50;
  readonly REINFORCEMENT_RANGE_MAX: 40;
  readonly REINFORCEMENT_RANGE_MIN: 7;
  readonly ZOMBIE_LEADER_CHANCE: 0.05;
  convertVillagerToZombieVillager(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager, arg2: j_net_minecraft_core.BlockPos, arg3: boolean, arg4: JavaOpaque<"org.bukkit.event.entity.EntityTransformEvent$TransformReason">, arg5: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): ZombieVillager | null;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  getSpawnAsBabyOdds(arg0: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM class net.minecraft.world.entity.monster.Zombie$ZombieGroupData. */
export interface Zombie_ZombieGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.SpawnGroupData];
  readonly canSpawnJockey: boolean;
  readonly isBaby: boolean;
}
export type Zombie_ZombieGroupData = Zombie_ZombieGroupDataMembers & j_net_minecraft_world_entity.SpawnGroupData;
export interface Zombie_ZombieGroupDataStatics {
  new(arg0: boolean, arg1: boolean): Zombie_ZombieGroupData;
}

/** JVM class net.minecraft.world.entity.monster.ZombieVillager. */
export interface ZombieVillagerMembers {
  readonly __javaSupertypes?: readonly [Zombie, j_net_minecraft_world_entity_npc.VillagerDataHolder];
  conversionStarter: JavaOpaque<"java.util.UUID"> | null;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getStepSound(): j_net_minecraft_sounds.SoundEvent;
  getVillagerData(): j_net_minecraft_world_entity_npc.VillagerData;
  getVillagerXp(): number;
  getVoicePitch(): number;
  handleEntityEvent(arg0: number): void;
  isConverting(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  removeWhenFarAway(arg0: number): boolean;
  setGossips(arg0: j_net_minecraft_world_entity_ai_gossip.GossipContainer): void;
  setTradeOffers(arg0: j_net_minecraft_world_item_trading.MerchantOffers): void;
  setVillagerConversionTime(arg0: number): void;
  setVillagerData(arg0: j_net_minecraft_world_entity_npc.VillagerData): void;
  setVillagerXp(arg0: number): void;
  startConverting(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: number): void;
  startConverting(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: number, arg2: boolean): void;
  tick(): void;
  villagerConversionTime: number;
}
export type ZombieVillager = ZombieVillagerMembers & Zombie & j_net_minecraft_world_entity_npc.VillagerDataHolder;
export interface ZombieVillagerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ZombieVillager>, arg1: j_net_minecraft_world_level.Level): ZombieVillager;
  readonly DATA_CONVERTING_ID: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
}

/** JVM class net.minecraft.world.entity.monster.ZombifiedPiglin. */
export interface ZombifiedPiglinMembers {
  readonly __javaSupertypes?: readonly [Zombie, j_net_minecraft_world_entity.NeutralMob];
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  isPreventingPlayerRest(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_player.Player): boolean;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void;
  setRemainingPersistentAngerTime(arg0: number): void;
  setTarget(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: JavaOpaque<"org.bukkit.event.entity.EntityTargetEvent$TargetReason"> | null): boolean;
  startPersistentAngerTimer(): void;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type ZombifiedPiglin = ZombifiedPiglinMembers & Zombie & j_net_minecraft_world_entity.NeutralMob;
export interface ZombifiedPiglinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ZombifiedPiglin>, arg1: j_net_minecraft_world_level.Level): ZombifiedPiglin;
  checkZombifiedPiglinSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<ZombifiedPiglin>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}
