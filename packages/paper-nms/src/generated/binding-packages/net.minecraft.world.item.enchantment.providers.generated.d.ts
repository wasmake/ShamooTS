// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';

/** JVM interface net.minecraft.world.item.enchantment.providers.EnchantmentProvider. */
export interface EnchantmentProviderMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentProvider]>;
  enchant(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item_enchantment.ItemEnchantments_Mutable, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world.DifficultyInstance): void;
}
export type EnchantmentProvider = EnchantmentProviderMembers;
export interface EnchantmentProviderStatics {
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentProvider]>;
}

/** JVM interface net.minecraft.world.item.enchantment.providers.EnchantmentProviderTypes. */
export interface EnchantmentProviderTypesMembers {
}
export type EnchantmentProviderTypes = EnchantmentProviderTypesMembers;
export interface EnchantmentProviderTypesStatics {
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentProvider]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentProvider]>;
}

/** JVM record net.minecraft.world.item.enchantment.providers.EnchantmentsByCost. */
export interface EnchantmentsByCostMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentProvider];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentsByCost]>;
  cost(): j_net_minecraft_util_valueproviders.IntProvider;
  enchant(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item_enchantment.ItemEnchantments_Mutable, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world.DifficultyInstance): void;
  enchantments(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type EnchantmentsByCost = EnchantmentsByCostMembers & JavaOpaque<"java.lang.Record"> & EnchantmentProvider;
export interface EnchantmentsByCostStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: j_net_minecraft_util_valueproviders.IntProvider): EnchantmentsByCost;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentsByCost]>;
}

/** JVM record net.minecraft.world.item.enchantment.providers.EnchantmentsByCostWithDifficulty. */
export interface EnchantmentsByCostWithDifficultyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentProvider];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentsByCostWithDifficulty]>;
  enchant(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item_enchantment.ItemEnchantments_Mutable, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world.DifficultyInstance): void;
  enchantments(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>;
  equals(arg0: object): boolean;
  hashCode(): number;
  maxCostSpan(): number;
  minCost(): number;
  toString(): string;
}
export type EnchantmentsByCostWithDifficulty = EnchantmentsByCostWithDifficultyMembers & JavaOpaque<"java.lang.Record"> & EnchantmentProvider;
export interface EnchantmentsByCostWithDifficultyStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: number, arg2: number): EnchantmentsByCostWithDifficulty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentsByCostWithDifficulty]>;
  readonly MAX_ALLOWED_VALUE_PART: 10000;
}

/** JVM record net.minecraft.world.item.enchantment.providers.SingleEnchantment. */
export interface SingleEnchantmentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EnchantmentProvider];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SingleEnchantment]>;
  enchant(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item_enchantment.ItemEnchantments_Mutable, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world.DifficultyInstance): void;
  enchantment(): j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): j_net_minecraft_util_valueproviders.IntProvider;
  toString(): string;
}
export type SingleEnchantment = SingleEnchantmentMembers & JavaOpaque<"java.lang.Record"> & EnchantmentProvider;
export interface SingleEnchantmentStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: j_net_minecraft_util_valueproviders.IntProvider): SingleEnchantment;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SingleEnchantment]>;
}

/** JVM interface net.minecraft.world.item.enchantment.providers.TradeRebalanceEnchantmentProviders. */
export interface TradeRebalanceEnchantmentProvidersMembers {
}
export type TradeRebalanceEnchantmentProviders = TradeRebalanceEnchantmentProvidersMembers;
export interface TradeRebalanceEnchantmentProvidersStatics {
  readonly TRADES_DESERT_ARMORER_BOOTS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_DESERT_ARMORER_CHESTPLATE_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_DESERT_ARMORER_CHESTPLATE_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_DESERT_ARMORER_HELMET_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_DESERT_ARMORER_LEGGINGS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_DESERT_ARMORER_LEGGINGS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_JUNGLE_ARMORER_BOOTS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_JUNGLE_ARMORER_BOOTS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_JUNGLE_ARMORER_CHESTPLATE_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_JUNGLE_ARMORER_HELMET_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_JUNGLE_ARMORER_HELMET_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_JUNGLE_ARMORER_LEGGINGS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_PLAINS_ARMORER_BOOTS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_PLAINS_ARMORER_BOOTS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_PLAINS_ARMORER_CHESTPLATE_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_PLAINS_ARMORER_HELMET_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_PLAINS_ARMORER_LEGGINGS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_PLAINS_ARMORER_LEGGINGS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SAVANNA_ARMORER_BOOTS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SAVANNA_ARMORER_CHESTPLATE_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SAVANNA_ARMORER_CHESTPLATE_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SAVANNA_ARMORER_HELMET_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SAVANNA_ARMORER_HELMET_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SAVANNA_ARMORER_LEGGINGS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SNOW_ARMORER_BOOTS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SNOW_ARMORER_BOOTS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SNOW_ARMORER_HELMET_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SNOW_ARMORER_HELMET_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SWAMP_ARMORER_BOOTS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SWAMP_ARMORER_BOOTS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SWAMP_ARMORER_CHESTPLATE_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SWAMP_ARMORER_HELMET_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SWAMP_ARMORER_HELMET_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_SWAMP_ARMORER_LEGGINGS_4: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_TAIGA_ARMORER_CHESTPLATE_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly TRADES_TAIGA_ARMORER_LEGGINGS_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<EnchantmentProvider>): void;
}

/** JVM interface net.minecraft.world.item.enchantment.providers.VanillaEnchantmentProviders. */
export interface VanillaEnchantmentProvidersMembers {
}
export type VanillaEnchantmentProviders = VanillaEnchantmentProvidersMembers;
export interface VanillaEnchantmentProvidersStatics {
  readonly ENDERMAN_LOOT_DROP: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly MOB_SPAWN_EQUIPMENT: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly PILLAGER_SPAWN_CROSSBOW: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly RAID_PILLAGER_POST_WAVE_3: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly RAID_PILLAGER_POST_WAVE_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly RAID_VINDICATOR: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  readonly RAID_VINDICATOR_POST_WAVE_5: j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<EnchantmentProvider>): void;
  create(arg0: string): j_net_minecraft_resources.ResourceKey<EnchantmentProvider>;
}
