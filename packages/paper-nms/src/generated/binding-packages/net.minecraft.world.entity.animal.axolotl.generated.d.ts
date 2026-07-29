// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.axolotl.Axolotl. */
export interface AxolotlMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal, j_net_minecraft_world_entity_animal.Bucketable];
  applySupportingEffects(arg0: j_net_minecraft_world_entity_player.Player): void;
  baseTick(): void;
  canBeLeashed(): boolean;
  canBeSeenAsEnemy(): boolean;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  fromBucket(): boolean;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Axolotl>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultMaxAirSupply(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxAirSupply(): number;
  getMaxHeadXRot(): number;
  getMaxHeadYRot(): number;
  getPickupSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  getVariant(): Axolotl_Variant;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  readonly inWaterAnimator: j_net_minecraft_util.BinaryAnimator;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isPlayingDead(): boolean;
  isPushedByFluid(): boolean;
  loadFromBucketTag(arg0: j_net_minecraft_nbt.CompoundTag): void;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  readonly movingAnimator: j_net_minecraft_util.BinaryAnimator;
  readonly onGroundAnimator: j_net_minecraft_util.BinaryAnimator;
  playAmbientSound(): void;
  playAttackSound(): void;
  readonly playingDeadAnimator: j_net_minecraft_util.BinaryAnimator;
  rehydrate(): void;
  removeWhenFarAway(arg0: number): boolean;
  requiresCustomPersistence(): boolean;
  saveToBucketTag(arg0: j_net_minecraft_world_item.ItemStack): void;
  setFromBucket(arg0: boolean): void;
  setPlayingDead(arg0: boolean): void;
  setVariant(arg0: Axolotl_Variant): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type Axolotl = AxolotlMembers & j_net_minecraft_world_entity_animal.Animal & j_net_minecraft_world_entity_animal.Bucketable;
export interface AxolotlStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Axolotl>, arg1: j_net_minecraft_world_level.Level): Axolotl;
  readonly PLAYER_REGEN_DETECTION_RANGE: 20;
  readonly RARE_VARIANT_CHANCE: 1200;
  readonly TOTAL_PLAYDEAD_TIME: 200;
  readonly VARIANT_TAG: "Variant";
  checkAxolotlSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity.LivingEntity>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  onStopAttacking(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Axolotl, arg2: j_net_minecraft_world_entity.LivingEntity): void;
}

/** Live JVM enum net.minecraft.world.entity.animal.axolotl.Axolotl$AnimationState; constants are host handles, not strings. */
export type Axolotl_AnimationState = JavaEnum<"net.minecraft.world.entity.animal.axolotl.Axolotl$AnimationState", "IN_AIR" | "IN_WATER" | "ON_GROUND" | "PLAYING_DEAD"> & Axolotl_AnimationStateMembers;
export interface Axolotl_AnimationStateMembers {
}
export interface Axolotl_AnimationStateStatics {
  readonly IN_AIR: Axolotl_AnimationState;
  readonly IN_WATER: Axolotl_AnimationState;
  readonly ON_GROUND: Axolotl_AnimationState;
  readonly PLAYING_DEAD: Axolotl_AnimationState;
  valueOf(arg0: string): Axolotl_AnimationState;
  values(): Array<Axolotl_AnimationState>;
}

/** JVM class net.minecraft.world.entity.animal.axolotl.Axolotl$AxolotlGroupData. */
export interface Axolotl_AxolotlGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData];
  getVariant(arg0: j_net_minecraft_util.RandomSource): Axolotl_Variant;
  readonly types: Array<Axolotl_Variant>;
}
export type Axolotl_AxolotlGroupData = Axolotl_AxolotlGroupDataMembers & j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData;
export interface Axolotl_AxolotlGroupDataStatics {
  new(...arg0: Array<Axolotl_Variant>): Axolotl_AxolotlGroupData;
}

/** Live JVM enum net.minecraft.world.entity.animal.axolotl.Axolotl$Variant; constants are host handles, not strings. */
export type Axolotl_Variant = JavaEnum<"net.minecraft.world.entity.animal.axolotl.Axolotl$Variant", "BLUE" | "CYAN" | "GOLD" | "LUCY" | "WILD"> & Axolotl_VariantMembers;
export interface Axolotl_VariantMembers {
  getId(): number;
  getName(): string;
  getSerializedName(): string;
}
export interface Axolotl_VariantStatics {
  readonly BLUE: Axolotl_Variant;
  readonly CYAN: Axolotl_Variant;
  readonly GOLD: Axolotl_Variant;
  readonly LUCY: Axolotl_Variant;
  readonly WILD: Axolotl_Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Axolotl_Variant]>;
  readonly DEFAULT: Axolotl_Variant;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Axolotl_Variant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Axolotl_Variant>;
  byId(arg0: number): Axolotl_Variant;
  getCommonSpawnVariant(arg0: j_net_minecraft_util.RandomSource): Axolotl_Variant;
  getRareSpawnVariant(arg0: j_net_minecraft_util.RandomSource): Axolotl_Variant;
  valueOf(arg0: string): Axolotl_Variant;
  values(): Array<Axolotl_Variant>;
}

/** JVM class net.minecraft.world.entity.animal.axolotl.AxolotlAi. */
export interface AxolotlAiMembers {
}
export type AxolotlAi = AxolotlAiMembers;
export interface AxolotlAiStatics {
  new(): AxolotlAi;
  getTemptations(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  updateActivity(arg0: Axolotl): void;
}

/** JVM class net.minecraft.world.entity.animal.axolotl.PlayDead. */
export interface PlayDeadMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Axolotl>];
}
export type PlayDead = PlayDeadMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Axolotl>;
export interface PlayDeadStatics {
  new(): PlayDead;
}

/** JVM class net.minecraft.world.entity.animal.axolotl.ValidatePlayDead. */
export interface ValidatePlayDeadMembers {
}
export type ValidatePlayDead = ValidatePlayDeadMembers;
export interface ValidatePlayDeadStatics {
  new(): ValidatePlayDead;
  create(): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}
