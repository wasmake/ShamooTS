// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM abstract net.minecraft.data.loot.BlockLootSubProvider. */
export interface BlockLootSubProviderMembers {
  readonly __javaSupertypes?: readonly [LootTableSubProvider];
  createAttachedStemDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_item.Item): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSegmentedBlockDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSingleItemTable(arg0: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createStemDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_item.Item): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
}
export type BlockLootSubProvider = BlockLootSubProviderMembers & LootTableSubProvider;
export interface BlockLootSubProviderStatics {
  noDrop(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
}

/** JVM abstract net.minecraft.data.loot.EntityLootSubProvider. */
export interface EntityLootSubProviderMembers {
  readonly __javaSupertypes?: readonly [LootTableSubProvider];
  generate(): void;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
}
export type EntityLootSubProvider = EntityLootSubProviderMembers & LootTableSubProvider;
export interface EntityLootSubProviderStatics {
  createSheepDispatchPool(arg0: JavaMap<j_net_minecraft_world_item.DyeColor, j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>): j_net_minecraft_world_level_storage_loot.LootPool_Builder;
}

/** JVM class net.minecraft.data.loot.LootTableProvider. */
export interface LootTableProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type LootTableProvider = LootTableProviderMembers & j_net_minecraft_data.DataProvider;
export interface LootTableProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>, arg2: JavaList<LootTableProvider_SubProviderEntry>, arg3: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): LootTableProvider;
}

/** JVM record net.minecraft.data.loot.LootTableProvider$MissingTableProblem. */
export interface LootTableProvider_MissingTableProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  toString(): string;
}
export type LootTableProvider_MissingTableProblem = LootTableProvider_MissingTableProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface LootTableProvider_MissingTableProblemStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): LootTableProvider_MissingTableProblem;
}

/** JVM record net.minecraft.data.loot.LootTableProvider$SubProviderEntry. */
export interface LootTableProvider_SubProviderEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  paramSet(): j_net_minecraft_util_context.ContextKeySet;
  provider(): JavaFunction<j_net_minecraft_core.HolderLookup_Provider, LootTableSubProvider>;
  toString(): string;
}
export type LootTableProvider_SubProviderEntry = LootTableProvider_SubProviderEntryMembers & JavaOpaque<"java.lang.Record">;
export interface LootTableProvider_SubProviderEntryStatics {
  new(arg0: JavaFunction<j_net_minecraft_core.HolderLookup_Provider, LootTableSubProvider>, arg1: j_net_minecraft_util_context.ContextKeySet): LootTableProvider_SubProviderEntry;
}

/** JVM interface net.minecraft.data.loot.LootTableSubProvider. */
export interface LootTableSubProviderMembers {
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
}
export type LootTableSubProvider = LootTableSubProviderMembers;
export interface LootTableSubProviderStatics {
}
