// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM abstract net.minecraft.world.entity.ambient.AmbientCreature. */
export interface AmbientCreatureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Mob];
  canBeLeashed(): boolean;
}
export type AmbientCreature = AmbientCreatureMembers & j_net_minecraft_world_entity.Mob;
export interface AmbientCreatureStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AmbientCreature>, arg1: j_net_minecraft_world_level.Level): AmbientCreature;
}

/** JVM class net.minecraft.world.entity.ambient.Bat. */
export interface BatMembers {
  readonly __javaSupertypes?: readonly [AmbientCreature];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  checkFallDamage(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos): void;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  doPush(arg0: j_net_minecraft_world_entity.Entity): void;
  readonly flyAnimationState: j_net_minecraft_world_entity.AnimationState;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getSoundVolume(): number;
  getVoicePitch(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isCollidable(arg0: boolean): boolean;
  isFlapping(): boolean;
  isIgnoringBlockTriggers(): boolean;
  isResting(): boolean;
  pushEntities(): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  readonly restAnimationState: j_net_minecraft_world_entity.AnimationState;
  setResting(arg0: boolean): void;
  targetPosition: j_net_minecraft_core.BlockPos | null;
  tick(): void;
}
export type Bat = BatMembers & AmbientCreature;
export interface BatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Bat>, arg1: j_net_minecraft_world_level.Level): Bat;
  readonly FLAP_LENGTH_SECONDS: 0.5;
  readonly TICKS_PER_FLAP: 10;
  checkBatSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Bat>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}
