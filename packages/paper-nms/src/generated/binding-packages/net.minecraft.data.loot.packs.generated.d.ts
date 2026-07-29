// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_data_loot from './net.minecraft.data.loot.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM interface net.minecraft.data.loot.packs.LootData. */
export interface LootDataMembers {
}
export type LootData = LootDataMembers;
export interface LootDataStatics {
  readonly WOOL_ITEM_BY_DYE: JavaMap<j_net_minecraft_world_item.DyeColor, j_net_minecraft_world_level.ItemLike>;
}

/** JVM record net.minecraft.data.loot.packs.TradeRebalanceChestLoot. */
export interface TradeRebalanceChestLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  ancientCityLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  desertPyramidLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  jungleTempleLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  pillagerOutpostLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type TradeRebalanceChestLoot = TradeRebalanceChestLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface TradeRebalanceChestLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): TradeRebalanceChestLoot;
}

/** JVM class net.minecraft.data.loot.packs.TradeRebalanceLootTableProvider. */
export interface TradeRebalanceLootTableProviderMembers {
}
export type TradeRebalanceLootTableProvider = TradeRebalanceLootTableProviderMembers;
export interface TradeRebalanceLootTableProviderStatics {
  new(): TradeRebalanceLootTableProvider;
  create(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): j_net_minecraft_data_loot.LootTableProvider;
}

/** JVM record net.minecraft.data.loot.packs.VanillaArchaeologyLoot. */
export interface VanillaArchaeologyLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type VanillaArchaeologyLoot = VanillaArchaeologyLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaArchaeologyLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaArchaeologyLoot;
}

/** JVM class net.minecraft.data.loot.packs.VanillaBlockLoot. */
export interface VanillaBlockLootMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_loot.BlockLootSubProvider];
}
export type VanillaBlockLoot = VanillaBlockLootMembers & j_net_minecraft_data_loot.BlockLootSubProvider;
export interface VanillaBlockLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaBlockLoot;
}

/** JVM record net.minecraft.data.loot.packs.VanillaChestLoot. */
export interface VanillaChestLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  ancientCityLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  bastionBridgeLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  bastionHoglinStableLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  bastionOtherLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  bastionTreasureLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  desertPyramidLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  endCityTreasureLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  jungleTempleLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  netherBridgeLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  pillagerOutpostLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  shipwreckMapLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  shipwreckSupplyLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  shipwreckTreasureLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  spawnerLootTables(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  strongholdCorridorLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  strongholdLibraryLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  toString(): string;
  woodlandMansionLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
}
export type VanillaChestLoot = VanillaChestLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaChestLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaChestLoot;
}

/** JVM class net.minecraft.data.loot.packs.VanillaEntityLoot. */
export interface VanillaEntityLootMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_loot.EntityLootSubProvider];
  elderGuardianLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  generate(): void;
}
export type VanillaEntityLoot = VanillaEntityLootMembers & j_net_minecraft_data_loot.EntityLootSubProvider;
export interface VanillaEntityLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaEntityLoot;
}

/** JVM record net.minecraft.data.loot.packs.VanillaEquipmentLoot. */
export interface VanillaEquipmentLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type VanillaEquipmentLoot = VanillaEquipmentLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaEquipmentLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaEquipmentLoot;
  trialChamberEquipment(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_world_item.Item, arg2: j_net_minecraft_world_item_equipment_trim.ArmorTrim, arg3: j_net_minecraft_core.HolderLookup_RegistryLookup<j_net_minecraft_world_item_enchantment.Enchantment>): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
}

/** JVM record net.minecraft.data.loot.packs.VanillaFishingLoot. */
export interface VanillaFishingLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type VanillaFishingLoot = VanillaFishingLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaFishingLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaFishingLoot;
  fishingFishLootTable(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
}

/** JVM record net.minecraft.data.loot.packs.VanillaGiftLoot. */
export interface VanillaGiftLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type VanillaGiftLoot = VanillaGiftLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaGiftLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaGiftLoot;
}

/** JVM class net.minecraft.data.loot.packs.VanillaLootTableProvider. */
export interface VanillaLootTableProviderMembers {
}
export type VanillaLootTableProvider = VanillaLootTableProviderMembers;
export interface VanillaLootTableProviderStatics {
  new(): VanillaLootTableProvider;
  create(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): j_net_minecraft_data_loot.LootTableProvider;
}

/** JVM record net.minecraft.data.loot.packs.VanillaPiglinBarterLoot. */
export interface VanillaPiglinBarterLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type VanillaPiglinBarterLoot = VanillaPiglinBarterLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaPiglinBarterLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaPiglinBarterLoot;
}

/** JVM record net.minecraft.data.loot.packs.VanillaShearingLoot. */
export interface VanillaShearingLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_data_loot.LootTableSubProvider];
  equals(arg0: object): boolean;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hashCode(): number;
  registries(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type VanillaShearingLoot = VanillaShearingLootMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_data_loot.LootTableSubProvider;
export interface VanillaShearingLootStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): VanillaShearingLoot;
}
