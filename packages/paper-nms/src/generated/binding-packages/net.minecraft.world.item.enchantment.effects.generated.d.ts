// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blockpredicates from './net.minecraft.world.level.levelgen.blockpredicates.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_stateproviders from './net.minecraft.world.level.levelgen.feature.stateproviders.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM record net.minecraft.world.item.enchantment.effects.AddValue. */
export interface AddValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentValueEffect];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AddValue]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  process(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number): number;
  toString(): string;
  value(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
}
export type AddValue = AddValueMembers & JavaOpaque<"java.lang.Record"> & EnchantmentValueEffect;
export interface AddValueStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): AddValue;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AddValue]>;
}

/** JVM interface net.minecraft.world.item.enchantment.effects.AllOf. */
export interface AllOfMembers {
}
export type AllOf = AllOfMembers;
export interface AllOfStatics {
  codec<T, A /* extends T */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: JavaFunction<JavaList<T>, A>, arg2: JavaFunction<A, JavaList<T>>): JavaOpaque<"com.mojang.serialization.MapCodec", [A]>;
  entityEffects(...arg0: Array<EnchantmentEntityEffect>): AllOf_EntityEffects;
  locationBasedEffects(...arg0: Array<EnchantmentLocationBasedEffect>): AllOf_LocationBasedEffects;
  valueEffects(...arg0: Array<EnchantmentValueEffect>): AllOf_ValueEffects;
}

/** JVM record net.minecraft.world.item.enchantment.effects.AllOf$EntityEffects. */
export interface AllOf_EntityEffectsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AllOf_EntityEffects]>;
  effects(): JavaList<EnchantmentEntityEffect>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type AllOf_EntityEffects = AllOf_EntityEffectsMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface AllOf_EntityEffectsStatics {
  new(arg0: JavaList<EnchantmentEntityEffect>): AllOf_EntityEffects;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AllOf_EntityEffects]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.AllOf$LocationBasedEffects. */
export interface AllOf_LocationBasedEffectsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentLocationBasedEffect];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AllOf_LocationBasedEffects]>;
  effects(): JavaList<EnchantmentLocationBasedEffect>;
  equals(arg0: object): boolean;
  hashCode(): number;
  onChangedBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3, arg5: boolean): void;
  onDeactivated(arg0: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): void;
  toString(): string;
}
export type AllOf_LocationBasedEffects = AllOf_LocationBasedEffectsMembers & JavaOpaque<"java.lang.Record"> & EnchantmentLocationBasedEffect;
export interface AllOf_LocationBasedEffectsStatics {
  new(arg0: JavaList<EnchantmentLocationBasedEffect>): AllOf_LocationBasedEffects;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AllOf_LocationBasedEffects]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.AllOf$ValueEffects. */
export interface AllOf_ValueEffectsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentValueEffect];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AllOf_ValueEffects]>;
  effects(): JavaList<EnchantmentValueEffect>;
  equals(arg0: object): boolean;
  hashCode(): number;
  process(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number): number;
  toString(): string;
}
export type AllOf_ValueEffects = AllOf_ValueEffectsMembers & JavaOpaque<"java.lang.Record"> & EnchantmentValueEffect;
export interface AllOf_ValueEffectsStatics {
  new(arg0: JavaList<EnchantmentValueEffect>): AllOf_ValueEffects;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AllOf_ValueEffects]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.ApplyMobEffect. */
export interface ApplyMobEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ApplyMobEffect]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  maxAmplifier(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  maxDuration(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  minAmplifier(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  minDuration(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  toApply(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_effect.MobEffect>;
  toString(): string;
}
export type ApplyMobEffect = ApplyMobEffectMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface ApplyMobEffectStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_effect.MobEffect>, arg1: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg2: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg3: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg4: j_net_minecraft_world_item_enchantment.LevelBasedValue): ApplyMobEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ApplyMobEffect]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.ChangeItemDamage. */
export interface ChangeItemDamageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  amount(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChangeItemDamage]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ChangeItemDamage = ChangeItemDamageMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface ChangeItemDamageStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): ChangeItemDamage;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ChangeItemDamage]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.DamageEntity. */
export interface DamageEntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DamageEntity]>;
  damageType(): j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>;
  equals(arg0: object): boolean;
  hashCode(): number;
  maxDamage(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  minDamage(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  toString(): string;
}
export type DamageEntity = DamageEntityMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface DamageEntityStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg1: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>): DamageEntity;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DamageEntity]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.DamageImmunity. */
export interface DamageImmunityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type DamageImmunity = DamageImmunityMembers & JavaOpaque<"java.lang.Record">;
export interface DamageImmunityStatics {
  new(): DamageImmunity;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamageImmunity]>;
  readonly INSTANCE: DamageImmunity;
}

/** JVM record net.minecraft.world.item.enchantment.effects.EnchantmentAttributeEffect. */
export interface EnchantmentAttributeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentLocationBasedEffect];
  amount(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  attribute(): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentAttributeEffect]>;
  equals(arg0: object): boolean;
  getModifier(arg0: number, arg1: j_net_minecraft_util.StringRepresentable): j_net_minecraft_world_entity_ai_attributes.AttributeModifier;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  onChangedBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3, arg5: boolean): void;
  onDeactivated(arg0: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): void;
  operation(): j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation;
  toString(): string;
}
export type EnchantmentAttributeEffect = EnchantmentAttributeEffectMembers & JavaOpaque<"java.lang.Record"> & EnchantmentLocationBasedEffect;
export interface EnchantmentAttributeEffectStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg2: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg3: j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation): EnchantmentAttributeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentAttributeEffect]>;
}

/** JVM interface net.minecraft.world.item.enchantment.effects.EnchantmentEntityEffect. */
export interface EnchantmentEntityEffectMembers {
  readonly __javaSupertypes?: readonly [EnchantmentLocationBasedEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentEntityEffect]>;
  onChangedBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3, arg5: boolean): void;
}
export type EnchantmentEntityEffect = EnchantmentEntityEffectMembers & EnchantmentLocationBasedEffect;
export interface EnchantmentEntityEffectStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentEntityEffect]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentEntityEffect]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentEntityEffect]>;
}

/** JVM interface net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect. */
export interface EnchantmentLocationBasedEffectMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentLocationBasedEffect]>;
  onChangedBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3, arg5: boolean): void;
  onDeactivated(arg0: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): void;
}
export type EnchantmentLocationBasedEffect = EnchantmentLocationBasedEffectMembers;
export interface EnchantmentLocationBasedEffectStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentLocationBasedEffect]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentLocationBasedEffect]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentLocationBasedEffect]>;
}

/** JVM interface net.minecraft.world.item.enchantment.effects.EnchantmentValueEffect. */
export interface EnchantmentValueEffectMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentValueEffect]>;
  process(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number): number;
}
export type EnchantmentValueEffect = EnchantmentValueEffectMembers;
export interface EnchantmentValueEffectStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentValueEffect]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentValueEffect]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentValueEffect]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.ExplodeEffect. */
export interface ExplodeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  attributeToUser(): boolean;
  blockInteraction(): j_net_minecraft_world_level.Level_ExplosionInteraction;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ExplodeEffect]>;
  createFire(): boolean;
  damageType(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  immuneBlocks(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>>;
  knockbackMultiplier(): JavaOptional<j_net_minecraft_world_item_enchantment.LevelBasedValue>;
  largeParticle(): j_net_minecraft_core_particles.ParticleOptions;
  offset(): j_net_minecraft_world_phys.Vec3;
  radius(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  smallParticle(): j_net_minecraft_core_particles.ParticleOptions;
  sound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  toString(): string;
}
export type ExplodeEffect = ExplodeEffectMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface ExplodeEffectStatics {
  new(arg0: boolean, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>>, arg2: JavaOptional<j_net_minecraft_world_item_enchantment.LevelBasedValue>, arg3: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>>, arg4: j_net_minecraft_world_phys.Vec3, arg5: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg6: boolean, arg7: j_net_minecraft_world_level.Level_ExplosionInteraction, arg8: j_net_minecraft_core_particles.ParticleOptions, arg9: j_net_minecraft_core_particles.ParticleOptions, arg10: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): ExplodeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ExplodeEffect]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.Ignite. */
export interface IgniteMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [Ignite]>;
  duration(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type Ignite = IgniteMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface IgniteStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): Ignite;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Ignite]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.MultiplyValue. */
export interface MultiplyValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentValueEffect];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MultiplyValue]>;
  equals(arg0: object): boolean;
  factor(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  hashCode(): number;
  process(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number): number;
  toString(): string;
}
export type MultiplyValue = MultiplyValueMembers & JavaOpaque<"java.lang.Record"> & EnchantmentValueEffect;
export interface MultiplyValueStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): MultiplyValue;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MultiplyValue]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.PlaySoundEffect. */
export interface PlaySoundEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PlaySoundEffect]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  pitch(): j_net_minecraft_util_valueproviders.FloatProvider;
  soundEvent(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  toString(): string;
  volume(): j_net_minecraft_util_valueproviders.FloatProvider;
}
export type PlaySoundEffect = PlaySoundEffectMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface PlaySoundEffectStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: j_net_minecraft_util_valueproviders.FloatProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider): PlaySoundEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlaySoundEffect]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.RemoveBinomial. */
export interface RemoveBinomialMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentValueEffect];
  chance(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RemoveBinomial]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  process(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number): number;
  toString(): string;
}
export type RemoveBinomial = RemoveBinomialMembers & JavaOpaque<"java.lang.Record"> & EnchantmentValueEffect;
export interface RemoveBinomialStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): RemoveBinomial;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RemoveBinomial]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.ReplaceBlock. */
export interface ReplaceBlockMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  blockState(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ReplaceBlock]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  offset(): j_net_minecraft_core.Vec3i;
  predicate(): JavaOptional<j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3>;
  toString(): string;
  triggerGameEvent(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>>;
}
export type ReplaceBlock = ReplaceBlockMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface ReplaceBlockStatics {
  new(arg0: j_net_minecraft_core.Vec3i, arg1: JavaOptional<j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3>, arg2: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg3: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>>): ReplaceBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ReplaceBlock]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.ReplaceDisk. */
export interface ReplaceDiskMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  blockState(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ReplaceDisk]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  offset(): j_net_minecraft_core.Vec3i;
  predicate(): JavaOptional<j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3>;
  radius(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  toString(): string;
  triggerGameEvent(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>>;
}
export type ReplaceDisk = ReplaceDiskMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface ReplaceDiskStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg1: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg2: j_net_minecraft_core.Vec3i, arg3: JavaOptional<j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3>, arg4: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg5: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>>): ReplaceDisk;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ReplaceDisk]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.RunFunction. */
export interface RunFunctionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RunFunction]>;
  equals(arg0: object): boolean;
  function(): j_net_minecraft_resources.ResourceLocation;
  hashCode(): number;
  toString(): string;
}
export type RunFunction = RunFunctionMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface RunFunctionStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): RunFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RunFunction]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.SetBlockProperties. */
export interface SetBlockPropertiesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SetBlockProperties]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  offset(): j_net_minecraft_core.Vec3i;
  properties(): j_net_minecraft_world_item_component.BlockItemStateProperties;
  toString(): string;
  triggerGameEvent(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>>;
}
export type SetBlockProperties = SetBlockPropertiesMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface SetBlockPropertiesStatics {
  new(arg0: j_net_minecraft_world_item_component.BlockItemStateProperties): SetBlockProperties;
  new(arg0: j_net_minecraft_world_item_component.BlockItemStateProperties, arg1: j_net_minecraft_core.Vec3i, arg2: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>>): SetBlockProperties;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetBlockProperties]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.SetValue. */
export interface SetValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentValueEffect];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SetValue]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  process(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number): number;
  toString(): string;
  value(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
}
export type SetValue = SetValueMembers & JavaOpaque<"java.lang.Record"> & EnchantmentValueEffect;
export interface SetValueStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): SetValue;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetValue]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.SpawnParticlesEffect. */
export interface SpawnParticlesEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnParticlesEffect]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  horizontalPosition(): SpawnParticlesEffect_PositionSource;
  horizontalVelocity(): SpawnParticlesEffect_VelocitySource;
  particle(): j_net_minecraft_core_particles.ParticleOptions;
  speed(): j_net_minecraft_util_valueproviders.FloatProvider;
  toString(): string;
  verticalPosition(): SpawnParticlesEffect_PositionSource;
  verticalVelocity(): SpawnParticlesEffect_VelocitySource;
}
export type SpawnParticlesEffect = SpawnParticlesEffectMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface SpawnParticlesEffectStatics {
  new(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: SpawnParticlesEffect_PositionSource, arg2: SpawnParticlesEffect_PositionSource, arg3: SpawnParticlesEffect_VelocitySource, arg4: SpawnParticlesEffect_VelocitySource, arg5: j_net_minecraft_util_valueproviders.FloatProvider): SpawnParticlesEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnParticlesEffect]>;
  fixedVelocity(arg0: j_net_minecraft_util_valueproviders.FloatProvider): SpawnParticlesEffect_VelocitySource;
  inBoundingBox(): SpawnParticlesEffect_PositionSource;
  movementScaled(arg0: number): SpawnParticlesEffect_VelocitySource;
  offsetFromEntityPosition(arg0: number): SpawnParticlesEffect_PositionSource;
}

/** JVM record net.minecraft.world.item.enchantment.effects.SpawnParticlesEffect$PositionSource. */
export interface SpawnParticlesEffect_PositionSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  getCoordinate(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_util.RandomSource): number;
  hashCode(): number;
  offset(): number;
  scale(): number;
  toString(): string;
  type(): SpawnParticlesEffect_PositionSourceType;
}
export type SpawnParticlesEffect_PositionSource = SpawnParticlesEffect_PositionSourceMembers & JavaOpaque<"java.lang.Record">;
export interface SpawnParticlesEffect_PositionSourceStatics {
  new(arg0: SpawnParticlesEffect_PositionSourceType, arg1: number, arg2: number): SpawnParticlesEffect_PositionSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnParticlesEffect_PositionSource]>;
}

/** Live JVM enum net.minecraft.world.item.enchantment.effects.SpawnParticlesEffect$PositionSourceType; constants are host handles, not strings. */
export type SpawnParticlesEffect_PositionSourceType = JavaEnum<"net.minecraft.world.item.enchantment.effects.SpawnParticlesEffect$PositionSourceType", "BOUNDING_BOX" | "ENTITY_POSITION"> & SpawnParticlesEffect_PositionSourceTypeMembers;
export interface SpawnParticlesEffect_PositionSourceTypeMembers {
  getCoordinate(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_util.RandomSource): number;
  getSerializedName(): string;
}
export interface SpawnParticlesEffect_PositionSourceTypeStatics {
  readonly BOUNDING_BOX: SpawnParticlesEffect_PositionSourceType;
  readonly ENTITY_POSITION: SpawnParticlesEffect_PositionSourceType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpawnParticlesEffect_PositionSourceType]>;
  valueOf(arg0: string): SpawnParticlesEffect_PositionSourceType;
  values(): Array<SpawnParticlesEffect_PositionSourceType>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.SpawnParticlesEffect$VelocitySource. */
export interface SpawnParticlesEffect_VelocitySourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  base(): j_net_minecraft_util_valueproviders.FloatProvider;
  equals(arg0: object): boolean;
  getVelocity(arg0: number, arg1: j_net_minecraft_util.RandomSource): number;
  hashCode(): number;
  movementScale(): number;
  toString(): string;
}
export type SpawnParticlesEffect_VelocitySource = SpawnParticlesEffect_VelocitySourceMembers & JavaOpaque<"java.lang.Record">;
export interface SpawnParticlesEffect_VelocitySourceStatics {
  new(arg0: number, arg1: j_net_minecraft_util_valueproviders.FloatProvider): SpawnParticlesEffect_VelocitySource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnParticlesEffect_VelocitySource]>;
}

/** JVM record net.minecraft.world.item.enchantment.effects.SummonEntityEffect. */
export interface SummonEntityEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentEntityEffect];
  apply(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item_enchantment.EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SummonEntityEffect]>;
  entityTypes(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  joinTeam(): boolean;
  toString(): string;
}
export type SummonEntityEffect = SummonEntityEffectMembers & JavaOpaque<"java.lang.Record"> & EnchantmentEntityEffect;
export interface SummonEntityEffectStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>, arg1: boolean): SummonEntityEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SummonEntityEffect]>;
}
