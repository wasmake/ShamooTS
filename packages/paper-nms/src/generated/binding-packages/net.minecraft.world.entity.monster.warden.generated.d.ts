// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_navigation from './net.minecraft.world.entity.ai.navigation.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_gameevent_vibrations from './net.minecraft.world.level.gameevent.vibrations.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** Live JVM enum net.minecraft.world.entity.monster.warden.AngerLevel; constants are host handles, not strings. */
export type AngerLevel = JavaEnum<"net.minecraft.world.entity.monster.warden.AngerLevel", "AGITATED" | "ANGRY" | "CALM"> & AngerLevelMembers;
export interface AngerLevelMembers {
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getListeningSound(): j_net_minecraft_sounds.SoundEvent;
  getMinimumAnger(): number;
  isAngry(): boolean;
}
export interface AngerLevelStatics {
  readonly AGITATED: AngerLevel;
  readonly ANGRY: AngerLevel;
  readonly CALM: AngerLevel;
  byAnger(arg0: number): AngerLevel;
  valueOf(arg0: string): AngerLevel;
  values(): Array<AngerLevel>;
}

/** JVM class net.minecraft.world.entity.monster.warden.AngerManagement. */
export interface AngerManagementMembers {
  readonly angerBySuspect: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [j_net_minecraft_world_entity.Entity]>;
  readonly angerByUuid: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [JavaOpaque<"java.util.UUID">]>;
  clearAnger(arg0: j_net_minecraft_world_entity.Entity): void;
  getActiveAnger(arg0: j_net_minecraft_world_entity.Entity | null): number | null;
  getActiveEntity(): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
  increaseAnger(arg0: j_net_minecraft_world_entity.Entity, arg1: number): number;
  readonly suspects: JavaOpaque<"java.util.ArrayList", [j_net_minecraft_world_entity.Entity]>;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaPredicate<j_net_minecraft_world_entity.Entity>): void;
}
export type AngerManagement = AngerManagementMembers;
export interface AngerManagementStatics {
  new(arg0: JavaPredicate<j_net_minecraft_world_entity.Entity>, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaOpaque<"java.util.UUID">, number]>>): AngerManagement;
  readonly CONVERSION_DELAY: 2;
  readonly MAX_ANGER: 150;
  codec(arg0: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaOpaque<"com.mojang.serialization.Codec", [AngerManagement]>;
}

/** JVM record net.minecraft.world.entity.monster.warden.AngerManagement$Sorter. */
export interface AngerManagement_SorterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"java.util.Comparator", [j_net_minecraft_world_entity.Entity]>];
  angerManagement(): AngerManagement;
  compare(arg0: object, arg1: object): number;
  compare(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type AngerManagement_Sorter = AngerManagement_SorterMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"java.util.Comparator", [j_net_minecraft_world_entity.Entity]>;
export interface AngerManagement_SorterStatics {
  new(arg0: AngerManagement): AngerManagement_Sorter;
}

/** JVM class net.minecraft.world.entity.monster.warden.Warden. */
export interface WardenMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.Monster, j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  attackAnimationState: j_net_minecraft_world_entity.AnimationState;
  canRide(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canTargetEntity(arg0: j_net_minecraft_world_entity.Entity | null): boolean | null;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  clearAnger(arg0: j_net_minecraft_world_entity.Entity): void;
  createNavigation(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  dampensVibrations(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  diggingAnimationState: j_net_minecraft_world_entity.AnimationState;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  doPush(arg0: j_net_minecraft_world_entity.Entity): void;
  emergeAnimationState: j_net_minecraft_world_entity.AnimationState;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAngerLevel(): AngerLevel;
  getAngerManagement(): AngerManagement;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Warden>;
  getClientAngerLevel(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getEntityAngryAt(): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
  getHeartAnimation(arg0: number): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getSecondsToDisableBlocking(): number;
  getSoundVolume(): number;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  getTendrilAnimation(arg0: number): number;
  getVibrationData(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Data;
  getVibrationUser(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  ignoreExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  increaseAngerAt(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  increaseAngerAt(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: boolean): void | null;
  isInvulnerableTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  isPushable(): boolean;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  nextStep(): number;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  removeWhenFarAway(arg0: number): boolean;
  roarAnimationState: j_net_minecraft_world_entity.AnimationState;
  sendDebugPackets(): void;
  setAttackTarget(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  sniffAnimationState: j_net_minecraft_world_entity.AnimationState;
  sonicBoomAnimationState: j_net_minecraft_world_entity.AnimationState;
  tick(): void;
  updateDynamicGameEventListener(arg0: JavaBiConsumer<j_net_minecraft_world_level_gameevent.DynamicGameEventListener<object>, j_net_minecraft_server_level.ServerLevel>): void;
}
export type Warden = WardenMembers & j_net_minecraft_world_entity_monster.Monster & j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem;
export interface WardenStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_monster.Monster>, arg1: j_net_minecraft_world_level.Level): Warden;
  applyDarknessAround(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): void | null;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.warden.WardenAi. */
export interface WardenAiMembers {
}
export type WardenAi = WardenAiMembers;
export interface WardenAiStatics {
  new(): WardenAi;
  readonly DIGGING_COOLDOWN: 1200;
  readonly EMERGE_DURATION: number;
  readonly ROAR_DURATION: number;
  makeBrain(arg0: Warden, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  setDigCooldown(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  setDisturbanceLocation(arg0: Warden, arg1: j_net_minecraft_core.BlockPos): void;
  updateActivity(arg0: Warden): void;
}

/** JVM class net.minecraft.world.entity.monster.warden.WardenSpawnTracker. */
export interface WardenSpawnTrackerMembers {
  cooldownTicks: number;
  getWarningLevel(): number;
  increaseWarningLevel(): void;
  reset(): void;
  setWarningLevel(arg0: number): void;
  tick(): void;
  ticksSinceLastWarning: number;
}
export type WardenSpawnTracker = WardenSpawnTrackerMembers;
export interface WardenSpawnTrackerStatics {
  new(): WardenSpawnTracker;
  new(arg0: number, arg1: number, arg2: number): WardenSpawnTracker;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WardenSpawnTracker]>;
  readonly MAX_WARNING_LEVEL: 4;
  tryWarn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_server_level.ServerPlayer): JavaOptionalNumber;
}
