// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.world.entity.animal.sheep.Sheep. */
export interface SheepMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal, j_net_minecraft_world_entity.Shearable];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  ate(): void;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  generateDefaultDrops(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): JavaList<j_net_minecraft_world_item.ItemStack>;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Sheep | null;
  getColor(): j_net_minecraft_world_item.DyeColor;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHeadEatAngleScale(arg0: number): number;
  getHeadEatPositionScale(arg0: number): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  handleEntityEvent(arg0: number): void;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isSheared(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  readyForShearing(): boolean;
  registerGoals(): void;
  setColor(arg0: j_net_minecraft_world_item.DyeColor): void;
  setSheared(arg0: boolean): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaList<j_net_minecraft_world_item.ItemStack>): void;
}
export type Sheep = SheepMembers & j_net_minecraft_world_entity_animal.Animal & j_net_minecraft_world_entity.Shearable;
export interface SheepStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Sheep>, arg1: j_net_minecraft_world_level.Level): Sheep;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  getRandomSheepColor(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_item.DyeColor;
}

/** JVM class net.minecraft.world.entity.animal.sheep.SheepColorSpawnRules. */
export interface SheepColorSpawnRulesMembers {
}
export type SheepColorSpawnRules = SheepColorSpawnRulesMembers;
export interface SheepColorSpawnRulesStatics {
  new(): SheepColorSpawnRules;
  getSheepColor(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_world_item.DyeColor;
}
