// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_providers_score from './net.minecraft.world.level.storage.loot.providers.score.generated.js';

/** JVM record net.minecraft.world.level.storage.loot.providers.number.BinomialDistributionGenerator. */
export interface BinomialDistributionGeneratorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumberProvider];
  equals(arg0: object): boolean;
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getInt(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootNumberProviderType;
  hashCode(): number;
  n(): NumberProvider;
  p(): NumberProvider;
  toString(): string;
}
export type BinomialDistributionGenerator = BinomialDistributionGeneratorMembers & JavaOpaque<"java.lang.Record"> & NumberProvider;
export interface BinomialDistributionGeneratorStatics {
  new(arg0: NumberProvider, arg1: NumberProvider): BinomialDistributionGenerator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BinomialDistributionGenerator]>;
  binomial(arg0: number, arg1: number): BinomialDistributionGenerator;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.number.ConstantValue. */
export interface ConstantValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumberProvider];
  equals(arg0: object): boolean;
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getType(): LootNumberProviderType;
  hashCode(): number;
  toString(): string;
  value(): number;
}
export type ConstantValue = ConstantValueMembers & JavaOpaque<"java.lang.Record"> & NumberProvider;
export interface ConstantValueStatics {
  new(arg0: number): ConstantValue;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConstantValue]>;
  readonly INLINE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ConstantValue]>;
  exactly(arg0: number): ConstantValue;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.number.EnchantmentLevelProvider. */
export interface EnchantmentLevelProviderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumberProvider];
  amount(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  equals(arg0: object): boolean;
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getType(): LootNumberProviderType;
  hashCode(): number;
  toString(): string;
}
export type EnchantmentLevelProvider = EnchantmentLevelProviderMembers & JavaOpaque<"java.lang.Record"> & NumberProvider;
export interface EnchantmentLevelProviderStatics {
  new(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): EnchantmentLevelProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentLevelProvider]>;
  forEnchantmentLevel(arg0: j_net_minecraft_world_item_enchantment.LevelBasedValue): EnchantmentLevelProvider;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.number.LootNumberProviderType. */
export interface LootNumberProviderTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NumberProvider]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LootNumberProviderType = LootNumberProviderTypeMembers & JavaOpaque<"java.lang.Record">;
export interface LootNumberProviderTypeStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [NumberProvider]>): LootNumberProviderType;
}

/** JVM interface net.minecraft.world.level.storage.loot.providers.number.NumberProvider. */
export interface NumberProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_storage_loot.LootContextUser];
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getInt(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getType(): LootNumberProviderType;
}
export type NumberProvider = NumberProviderMembers & j_net_minecraft_world_level_storage_loot.LootContextUser;
export interface NumberProviderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.providers.number.NumberProviders. */
export interface NumberProvidersMembers {
}
export type NumberProviders = NumberProvidersMembers;
export interface NumberProvidersStatics {
  new(): NumberProviders;
  readonly BINOMIAL: LootNumberProviderType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NumberProvider]>;
  readonly CONSTANT: LootNumberProviderType;
  readonly ENCHANTMENT_LEVEL: LootNumberProviderType;
  readonly SCORE: LootNumberProviderType;
  readonly STORAGE: LootNumberProviderType;
  readonly UNIFORM: LootNumberProviderType;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.number.ScoreboardValue. */
export interface ScoreboardValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumberProvider];
  equals(arg0: object): boolean;
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootNumberProviderType;
  hashCode(): number;
  scale(): number;
  score(): string;
  target(): j_net_minecraft_world_level_storage_loot_providers_score.ScoreboardNameProvider;
  toString(): string;
}
export type ScoreboardValue = ScoreboardValueMembers & JavaOpaque<"java.lang.Record"> & NumberProvider;
export interface ScoreboardValueStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot_providers_score.ScoreboardNameProvider, arg1: string, arg2: number): ScoreboardValue;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ScoreboardValue]>;
  fromScoreboard(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget, arg1: string): ScoreboardValue;
  fromScoreboard(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget, arg1: string, arg2: number): ScoreboardValue;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.number.StorageValue. */
export interface StorageValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumberProvider];
  equals(arg0: object): boolean;
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getInt(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getType(): LootNumberProviderType;
  hashCode(): number;
  path(): j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath;
  storage(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type StorageValue = StorageValueMembers & JavaOpaque<"java.lang.Record"> & NumberProvider;
export interface StorageValueStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath): StorageValue;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StorageValue]>;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.number.UniformGenerator. */
export interface UniformGeneratorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumberProvider];
  equals(arg0: object): boolean;
  getFloat(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getInt(arg0: j_net_minecraft_world_level_storage_loot.LootContext): number;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootNumberProviderType;
  hashCode(): number;
  max(): NumberProvider;
  min(): NumberProvider;
  toString(): string;
}
export type UniformGenerator = UniformGeneratorMembers & JavaOpaque<"java.lang.Record"> & NumberProvider;
export interface UniformGeneratorStatics {
  new(arg0: NumberProvider, arg1: NumberProvider): UniformGenerator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [UniformGenerator]>;
  between(arg0: number, arg1: number): UniformGenerator;
}
