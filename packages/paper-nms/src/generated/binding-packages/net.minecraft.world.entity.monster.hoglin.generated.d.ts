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
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_sensing from './net.minecraft.world.entity.ai.sensing.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.world.entity.monster.hoglin.Hoglin. */
export interface HoglinMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal, j_net_minecraft_world_entity_monster.Enemy, HoglinBase];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  ageBoundaryReached(): void;
  aiStep(): void;
  blockedByItem(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Hoglin>;
  canBeHunted(): boolean;
  canBeLeashed(): boolean;
  canFallInLove(): boolean;
  cannotBeHunted: boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAttackAnimationRemainingTicks(): number;
  getBaseExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Hoglin>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAdult(): boolean;
  isConverting(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isImmuneToZombification(): boolean;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  removeWhenFarAway(arg0: number): boolean;
  sendDebugPackets(): void;
  setImmuneToZombification(arg0: boolean): void;
  setTimeInOverworld(arg0: number): void;
  shouldDropExperience(): boolean;
  timeInOverworld: number;
}
export type Hoglin = HoglinMembers & j_net_minecraft_world_entity_animal.Animal & j_net_minecraft_world_entity_monster.Enemy & HoglinBase;
export interface HoglinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Hoglin>, arg1: j_net_minecraft_world_level.Level): Hoglin;
  readonly CONVERSION_TIME: 300;
  readonly MEMORY_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>]>;
  readonly SENSOR_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<Hoglin>>]>;
  checkHoglinSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Hoglin>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.hoglin.HoglinAi. */
export interface HoglinAiMembers {
}
export type HoglinAi = HoglinAiMembers;
export interface HoglinAiStatics {
  new(): HoglinAi;
  readonly REPELLENT_DETECTION_RANGE_HORIZONTAL: 8;
  readonly REPELLENT_DETECTION_RANGE_VERTICAL: 4;
  getSoundForCurrentActivity(arg0: Hoglin): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  isPacified(arg0: Hoglin): boolean;
  makeBrain(arg0: j_net_minecraft_world_entity_ai.Brain<Hoglin>): j_net_minecraft_world_entity_ai.Brain<object>;
  onHitTarget(arg0: Hoglin, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  updateActivity(arg0: Hoglin): void;
  wasHurtBy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Hoglin, arg2: j_net_minecraft_world_entity.LivingEntity): void;
}

/** JVM interface net.minecraft.world.entity.monster.hoglin.HoglinBase. */
export interface HoglinBaseMembers {
  getAttackAnimationRemainingTicks(): number;
}
export type HoglinBase = HoglinBaseMembers;
export interface HoglinBaseStatics {
  readonly ATTACK_ANIMATION_DURATION: 10;
  readonly PROBABILITY_OF_SPAWNING_AS_BABY: 0.2;
  hurtAndThrowTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  throwTarget(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity): void;
}
