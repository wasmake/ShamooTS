// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
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
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_variant from './net.minecraft.world.entity.variant.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.wolf.Wolf. */
export interface WolfMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.TamableAnimal, j_net_minecraft_world_entity.NeutralMob];
  actuallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): boolean;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  applyTamingSideEffects(): void;
  canBeLeashed(): boolean;
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  canShearEquipment(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Wolf | null;
  getCollarColor(): j_net_minecraft_world_item.DyeColor;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHeadRollAngle(arg0: number): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getMaxHeadXRot(): number;
  getMaxSpawnClusterSize(): number;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  getShakeAnim(arg0: number): number;
  getSoundVariant(): j_net_minecraft_core.Holder<WolfSoundVariant>;
  getSoundVolume(): number;
  getTailAngle(): number;
  getTexture(): j_net_minecraft_resources.ResourceLocation;
  getVariant(): j_net_minecraft_core.Holder<WolfVariant>;
  getWetShade(arg0: number): number;
  handleEntityEvent(arg0: number): void;
  hurtArmor(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isInterested(): boolean;
  isWet: boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerGoals(): void;
  setCollarColor(arg0: j_net_minecraft_world_item.DyeColor): void;
  setIsInterested(arg0: boolean): void;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setRemainingPersistentAngerTime(arg0: number): void;
  setSoundVariant(arg0: j_net_minecraft_core.Holder<WolfSoundVariant>): void;
  setVariant(arg0: j_net_minecraft_core.Holder<WolfVariant>): void;
  startPersistentAngerTimer(): void;
  tick(): void;
  wantsToAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
}
export type Wolf = WolfMembers & j_net_minecraft_world_entity.TamableAnimal & j_net_minecraft_world_entity.NeutralMob;
export interface WolfStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Wolf>, arg1: j_net_minecraft_world_level.Level): Wolf;
  readonly DEFAULT_TAIL_ANGLE: 0.62831855;
  readonly PREY_SELECTOR: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector;
  checkWolfSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Wolf>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.wolf.Wolf$WolfPackData. */
export interface Wolf_WolfPackDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData];
  readonly type: j_net_minecraft_core.Holder<WolfVariant>;
}
export type Wolf_WolfPackData = Wolf_WolfPackDataMembers & j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData;
export interface Wolf_WolfPackDataStatics {
  new(arg0: j_net_minecraft_core.Holder<WolfVariant>): Wolf_WolfPackData;
}

/** JVM record net.minecraft.world.entity.animal.wolf.WolfSoundVariant. */
export interface WolfSoundVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  ambientSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  deathSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  equals(arg0: object): boolean;
  growlSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  hashCode(): number;
  hurtSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  pantSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  toString(): string;
  whineSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
}
export type WolfSoundVariant = WolfSoundVariantMembers & JavaOpaque<"java.lang.Record">;
export interface WolfSoundVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg3: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg4: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg5: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): WolfSoundVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<WolfSoundVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WolfSoundVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WolfSoundVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<WolfSoundVariant>>;
}

/** JVM class net.minecraft.world.entity.animal.wolf.WolfSoundVariants. */
export interface WolfSoundVariantsMembers {
}
export type WolfSoundVariants = WolfSoundVariantsMembers;
export interface WolfSoundVariantsStatics {
  new(): WolfSoundVariants;
  readonly ANGRY: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  readonly BIG: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  readonly CLASSIC: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  readonly CUTE: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  readonly GRUMPY: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  readonly PUGLIN: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  readonly SAD: j_net_minecraft_resources.ResourceKey<WolfSoundVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<WolfSoundVariant>): void;
  pickRandomSoundVariant(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_core.Holder<WolfSoundVariant>;
}

/** Live JVM enum net.minecraft.world.entity.animal.wolf.WolfSoundVariants$SoundSet; constants are host handles, not strings. */
export type WolfSoundVariants_SoundSet = JavaEnum<"net.minecraft.world.entity.animal.wolf.WolfSoundVariants$SoundSet", "ANGRY" | "BIG" | "CLASSIC" | "CUTE" | "GRUMPY" | "PUGLIN" | "SAD"> & WolfSoundVariants_SoundSetMembers;
export interface WolfSoundVariants_SoundSetMembers {
  getIdentifier(): string;
  getSoundEventSuffix(): string;
}
export interface WolfSoundVariants_SoundSetStatics {
  readonly ANGRY: WolfSoundVariants_SoundSet;
  readonly BIG: WolfSoundVariants_SoundSet;
  readonly CLASSIC: WolfSoundVariants_SoundSet;
  readonly CUTE: WolfSoundVariants_SoundSet;
  readonly GRUMPY: WolfSoundVariants_SoundSet;
  readonly PUGLIN: WolfSoundVariants_SoundSet;
  readonly SAD: WolfSoundVariants_SoundSet;
  valueOf(arg0: string): WolfSoundVariants_SoundSet;
  values(): Array<WolfSoundVariants_SoundSet>;
}

/** JVM record net.minecraft.world.entity.animal.wolf.WolfVariant. */
export interface WolfVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>];
  assetInfo(): WolfVariant_AssetInfo;
  equals(arg0: object): boolean;
  hashCode(): number;
  selectors(): JavaList<j_net_minecraft_world_entity_variant.PriorityProvider_Selector<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>>;
  spawnConditions(): j_net_minecraft_world_entity_variant.SpawnPrioritySelectors;
  toString(): string;
}
export type WolfVariant = WolfVariantMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>;
export interface WolfVariantStatics {
  new(arg0: WolfVariant_AssetInfo, arg1: j_net_minecraft_world_entity_variant.SpawnPrioritySelectors): WolfVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<WolfVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WolfVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WolfVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<WolfVariant>>;
}

/** JVM record net.minecraft.world.entity.animal.wolf.WolfVariant$AssetInfo. */
export interface WolfVariant_AssetInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  angry(): j_net_minecraft_core.ClientAsset;
  equals(arg0: object): boolean;
  hashCode(): number;
  tame(): j_net_minecraft_core.ClientAsset;
  toString(): string;
  wild(): j_net_minecraft_core.ClientAsset;
}
export type WolfVariant_AssetInfo = WolfVariant_AssetInfoMembers & JavaOpaque<"java.lang.Record">;
export interface WolfVariant_AssetInfoStatics {
  new(arg0: j_net_minecraft_core.ClientAsset, arg1: j_net_minecraft_core.ClientAsset, arg2: j_net_minecraft_core.ClientAsset): WolfVariant_AssetInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WolfVariant_AssetInfo]>;
}

/** JVM class net.minecraft.world.entity.animal.wolf.WolfVariants. */
export interface WolfVariantsMembers {
}
export type WolfVariants = WolfVariantsMembers;
export interface WolfVariantsStatics {
  new(): WolfVariants;
  readonly ASHEN: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly BLACK: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly CHESTNUT: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly DEFAULT: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly PALE: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly RUSTY: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly SNOWY: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly SPOTTED: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly STRIPED: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  readonly WOODS: j_net_minecraft_resources.ResourceKey<WolfVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<WolfVariant>): void;
}
