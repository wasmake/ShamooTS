// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_ai_control from './net.minecraft.world.entity.ai.control.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.camel.Camel. */
export interface CamelMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal_horse.AbstractHorse];
  actuallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): boolean;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Camel>;
  canAddPassenger(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canCamelChangePose(): boolean;
  canJump(): boolean;
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  canPerformRearing(): boolean;
  canSprint(): boolean;
  createBodyControl(): j_net_minecraft_world_entity_ai_control.BodyRotationControl;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  readonly dashAnimationState: j_net_minecraft_world_entity.AnimationState;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  executeRidersJump(arg0: number, arg1: j_net_minecraft_world_phys.Vec3): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAgeScale(): number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Camel | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getEatingSound(): j_net_minecraft_sounds.SoundEvent | null;
  getEquipSound(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item_equipment.Equippable): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getJumpCooldown(): number;
  getLeashOffset(arg0: number): j_net_minecraft_world_phys.Vec3;
  getMaxHeadYRot(): number;
  getPassengerAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.EntityDimensions, arg2: number): j_net_minecraft_world_phys.Vec3;
  getPoseTime(): bigint;
  getQuadLeashOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getRiddenInput(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  getRiddenRotation(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec2;
  getRiddenSpeed(arg0: j_net_minecraft_world_entity_player.Player): number;
  handleEating(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  handleStartJump(arg0: number): void;
  handleStopJump(): void;
  readonly idleAnimationState: j_net_minecraft_world_entity.AnimationState;
  isCamelSitting(): boolean;
  isCamelVisuallySitting(): boolean;
  isDashing(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isInPoseTransition(): boolean;
  isTamed(): boolean;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onElasticLeashPull(): void;
  onPlayerJump(arg0: number): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  openCustomInventoryScreen(arg0: j_net_minecraft_world_entity_player.Player): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  refuseToMove(): boolean;
  registerGoals(): void;
  resetLastPoseChangeTick(arg0: bigint): void;
  sendDebugPackets(): void;
  setDashing(arg0: boolean): void;
  readonly sitAnimationState: j_net_minecraft_world_entity.AnimationState;
  sitDown(): void;
  readonly sitPoseAnimationState: j_net_minecraft_world_entity.AnimationState;
  readonly sitUpAnimationState: j_net_minecraft_world_entity.AnimationState;
  standUp(): void;
  standUpInstantly(): void;
  tick(): void;
  tickRidden(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  updateWalkAnimation(arg0: number): void;
}
export type Camel = CamelMembers & j_net_minecraft_world_entity_animal_horse.AbstractHorse;
export interface CamelStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Camel>, arg1: j_net_minecraft_world_level.Level): Camel;
  readonly BABY_SCALE: 0.45;
  readonly DASH: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
  readonly DASH_COOLDOWN_TICKS: 55;
  readonly LAST_POSE_CHANGE_TICK: j_net_minecraft_network_syncher.EntityDataAccessor<bigint>;
  readonly MAX_HEAD_Y_ROT: 30;
  checkCamelSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Camel>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.camel.CamelAi. */
export interface CamelAiMembers {
}
export type CamelAi = CamelAiMembers;
export interface CamelAiStatics {
  new(): CamelAi;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Camel>;
  getTemptations(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  initMemories(arg0: Camel, arg1: j_net_minecraft_util.RandomSource): void;
  makeBrain(arg0: j_net_minecraft_world_entity_ai.Brain<Camel>): j_net_minecraft_world_entity_ai.Brain<object>;
  updateActivity(arg0: Camel): void;
}

/** JVM class net.minecraft.world.entity.animal.camel.CamelAi$CamelPanic. */
export interface CamelAi_CamelPanicMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.AnimalPanic<Camel>];
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.PathfinderMob, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Camel, arg2: bigint): void;
}
export type CamelAi_CamelPanic = CamelAi_CamelPanicMembers & j_net_minecraft_world_entity_ai_behavior.AnimalPanic<Camel>;
export interface CamelAi_CamelPanicStatics {
  new(arg0: number): CamelAi_CamelPanic;
}

/** JVM class net.minecraft.world.entity.animal.camel.CamelAi$RandomSitting. */
export interface CamelAi_RandomSittingMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Camel>];
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Camel): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Camel, arg2: bigint): void;
}
export type CamelAi_RandomSitting = CamelAi_RandomSittingMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Camel>;
export interface CamelAi_RandomSittingStatics {
  new(arg0: number): CamelAi_RandomSitting;
}
