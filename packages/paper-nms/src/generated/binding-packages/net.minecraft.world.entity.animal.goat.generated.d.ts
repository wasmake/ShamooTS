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
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM class net.minecraft.world.entity.animal.goat.Goat. */
export interface GoatMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal];
  addHorns(): void;
  aiStep(): void;
  createHorn(): j_net_minecraft_world_item.ItemStack;
  dropHorn(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Goat>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Goat | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadYRot(): number;
  getRammingXHeadRot(): number;
  handleEntityEvent(arg0: number): void;
  hasLeftHorn(): boolean;
  hasRightHorn(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isScreamingGoat(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  ram(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  removeHorns(): void;
  setScreamingGoat(arg0: boolean): void;
  setYHeadRot(arg0: number): void;
}
export type Goat = GoatMembers & j_net_minecraft_world_entity_animal.Animal;
export interface GoatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Goat>, arg1: j_net_minecraft_world_level.Level): Goat;
  readonly DATA_HAS_LEFT_HORN: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
  readonly DATA_HAS_RIGHT_HORN: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
  readonly GOAT_FALL_DAMAGE_REDUCTION: 10;
  readonly GOAT_SCREAMING_CHANCE: 0.02;
  readonly LONG_JUMPING_DIMENSIONS: j_net_minecraft_world_entity.EntityDimensions;
  readonly UNIHORN_CHANCE: 0.10000000149011612;
  checkGoatSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.goat.GoatAi. */
export interface GoatAiMembers {
}
export type GoatAi = GoatAiMembers;
export interface GoatAiStatics {
  new(): GoatAi;
  readonly ADULT_RAM_KNOCKBACK_FORCE: 2.5;
  readonly BABY_RAM_KNOCKBACK_FORCE: 1;
  readonly MAX_JUMP_VELOCITY_MULTIPLIER: 3.5714288;
  readonly MAX_LONG_JUMP_HEIGHT: 5;
  readonly MAX_LONG_JUMP_WIDTH: 5;
  readonly RAM_MAX_DISTANCE: 7;
  readonly RAM_MIN_DISTANCE: 4;
  readonly RAM_PREPARE_TIME: 20;
  getTemptations(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  updateActivity(arg0: Goat): void;
}
