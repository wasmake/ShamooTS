// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_navigation from './net.minecraft.world.entity.ai.navigation.generated.js';
import type * as j_net_minecraft_world_entity_ai_sensing from './net.minecraft.world.entity.ai.sensing.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_variant from './net.minecraft.world.entity.variant.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.frog.Frog. */
export interface FrogMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Frog>;
  calculateFallDamage(arg0: number, arg1: number): number;
  createNavigation(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  readonly croakAnimationState: j_net_minecraft_world_entity.AnimationState;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  eraseTongueTarget(): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Frog>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHeadRotSpeed(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getMaxHeadYRot(): number;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  getTongueTarget(): JavaOptional<j_net_minecraft_world_entity.Entity>;
  getVariant(): j_net_minecraft_core.Holder<FrogVariant>;
  isBaby(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isPushedByFluid(): boolean;
  readonly jumpAnimationState: j_net_minecraft_world_entity.AnimationState;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playEatingSound(): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  sendDebugPackets(): void;
  setBaby(arg0: boolean): void;
  setTongueTarget(arg0: j_net_minecraft_world_entity.Entity): void;
  setVariant(arg0: j_net_minecraft_core.Holder<FrogVariant>): void;
  spawnChildFromBreeding(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_animal.Animal): void;
  readonly swimIdleAnimationState: j_net_minecraft_world_entity.AnimationState;
  tick(): void;
  readonly tongueAnimationState: j_net_minecraft_world_entity.AnimationState;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  updateWalkAnimation(arg0: number): void;
}
export type Frog = FrogMembers & j_net_minecraft_world_entity_animal.Animal;
export interface FrogStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.Level): Frog;
  readonly MEMORY_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>]>;
  readonly SENSOR_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<Frog>>]>;
  canEat(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  checkFrogSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.frog.FrogAi. */
export interface FrogAiMembers {
}
export type FrogAi = FrogAiMembers;
export interface FrogAiStatics {
  new(): FrogAi;
  getTemptations(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  initMemories(arg0: Frog, arg1: j_net_minecraft_util.RandomSource): void;
  makeBrain(arg0: j_net_minecraft_world_entity_ai.Brain<Frog>): j_net_minecraft_world_entity_ai.Brain<object>;
  updateActivity(arg0: Frog): void;
}

/** JVM record net.minecraft.world.entity.animal.frog.FrogVariant. */
export interface FrogVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>];
  assetInfo(): j_net_minecraft_core.ClientAsset;
  equals(arg0: object): boolean;
  hashCode(): number;
  selectors(): JavaList<j_net_minecraft_world_entity_variant.PriorityProvider_Selector<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>>;
  spawnConditions(): j_net_minecraft_world_entity_variant.SpawnPrioritySelectors;
  toString(): string;
}
export type FrogVariant = FrogVariantMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>;
export interface FrogVariantStatics {
  new(arg0: j_net_minecraft_core.ClientAsset, arg1: j_net_minecraft_world_entity_variant.SpawnPrioritySelectors): FrogVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<FrogVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FrogVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FrogVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<FrogVariant>>;
}

/** JVM interface net.minecraft.world.entity.animal.frog.FrogVariants. */
export interface FrogVariantsMembers {
}
export type FrogVariants = FrogVariantsMembers;
export interface FrogVariantsStatics {
  readonly COLD: j_net_minecraft_resources.ResourceKey<FrogVariant>;
  readonly TEMPERATE: j_net_minecraft_resources.ResourceKey<FrogVariant>;
  readonly WARM: j_net_minecraft_resources.ResourceKey<FrogVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<FrogVariant>): void;
}

/** JVM class net.minecraft.world.entity.animal.frog.ShootTongue. */
export interface ShootTongueMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Frog>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Frog, arg2: bigint): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Frog): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Frog, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Frog, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Frog, arg2: bigint): void;
}
export type ShootTongue = ShootTongueMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Frog>;
export interface ShootTongueStatics {
  new(arg0: j_net_minecraft_sounds.SoundEvent, arg1: j_net_minecraft_sounds.SoundEvent): ShootTongue;
  readonly CATCH_ANIMATION_DURATION: 6;
  readonly MAX_UNREACHBLE_TONGUE_TARGETS_IN_MEMORY: 5;
  readonly TIME_OUT_DURATION: 100;
  readonly TONGUE_ANIMATION_DURATION: 10;
  readonly UNREACHABLE_TONGUE_TARGETS_COOLDOWN_DURATION: 100;
}

/** JVM class net.minecraft.world.entity.animal.frog.Tadpole. */
export interface TadpoleMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.AbstractFish];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  age: number;
  ageLocked: boolean;
  aiStep(): void;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Tadpole>;
  createNavigation(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  fromBucket(): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Tadpole>;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getFlopSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getPickupSound(): j_net_minecraft_sounds.SoundEvent;
  loadFromBucketTag(arg0: j_net_minecraft_nbt.CompoundTag): void;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  saveToBucketTag(arg0: j_net_minecraft_world_item.ItemStack): void;
  sendDebugPackets(): void;
  setFromBucket(arg0: boolean): void;
  shouldDropExperience(): boolean;
}
export type Tadpole = TadpoleMembers & j_net_minecraft_world_entity_animal.AbstractFish;
export interface TadpoleStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.AbstractFish>, arg1: j_net_minecraft_world_level.Level): Tadpole;
  readonly HITBOX_HEIGHT: 0.3;
  readonly HITBOX_WIDTH: 0.4;
  readonly MEMORY_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>]>;
  readonly SENSOR_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<Tadpole>>]>;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  readonly ticksToBeFrog: number;
}

/** JVM class net.minecraft.world.entity.animal.frog.TadpoleAi. */
export interface TadpoleAiMembers {
}
export type TadpoleAi = TadpoleAiMembers;
export interface TadpoleAiStatics {
  new(): TadpoleAi;
  makeBrain(arg0: j_net_minecraft_world_entity_ai.Brain<Tadpole>): j_net_minecraft_world_entity_ai.Brain<object>;
  updateActivity(arg0: Tadpole): void;
}
