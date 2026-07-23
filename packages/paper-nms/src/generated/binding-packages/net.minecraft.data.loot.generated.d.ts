// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_animal_frog from './net.minecraft.world.entity.animal.frog.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_entries from './net.minecraft.world.level.storage.loot.entries.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_functions from './net.minecraft.world.level.storage.loot.functions.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_providers_number from './net.minecraft.world.level.storage.loot.providers.number.generated.js';

/** JVM abstract net.minecraft.data.loot.BlockLootSubProvider. */
export interface BlockLootSubProviderMembers {
  readonly __javaSupertypes?: readonly [LootTableSubProvider];
  add(arg0: j_net_minecraft_world_level_block.Block, arg1: JavaFunction<j_net_minecraft_world_level_block.Block, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  add(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_storage_loot.LootTable_Builder): void;
  addNetherVinesDropTable(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block): void;
  applyExplosionCondition<T /* extends j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<T> */>(arg0: j_net_minecraft_world_level.ItemLike, arg1: j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<T>): T;
  applyExplosionDecay<T /* extends j_net_minecraft_world_level_storage_loot_functions.FunctionUserBuilder<T> */>(arg0: j_net_minecraft_world_level.ItemLike, arg1: j_net_minecraft_world_level_storage_loot_functions.FunctionUserBuilder<T>): T;
  createAttachedStemDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_item.Item): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createBannerDrop(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createBeeHiveDrop(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createBeeNestDrop(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createCandleDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createCaveVinesDrop(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createCopperOreDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createCropDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_item.Item, arg2: j_net_minecraft_world_item.Item, arg3: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createDoorTable(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createDoublePlantShearsDrop(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createDoublePlantWithSeedDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createGrassDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createLapisOreDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createLeavesDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, ...arg2: Array<number>): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createMangroveLeavesDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createMossyCarpetBlockDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createMultifaceBlockDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createMultifaceBlockDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createMushroomBlockDrop(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createNameableBlockEntityTable(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createOakLeavesDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, ...arg2: Array<number>): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createOreDrop(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_item.Item): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createRedstoneOreDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSegmentedBlockDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createShearsDispatchTable(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_storage_loot_entries.LootPoolEntryContainer_Builder<object>): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createShearsOnlyDrop(arg0: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createShearsOrSilkTouchOnlyDrop(arg0: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createShulkerBoxDrop(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSilkTouchDispatchTable(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_storage_loot_entries.LootPoolEntryContainer_Builder<object>): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSilkTouchOrShearsDispatchTable(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_storage_loot_entries.LootPoolEntryContainer_Builder<object>): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSingleItemTable(arg0: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSingleItemTable(arg0: j_net_minecraft_world_level.ItemLike, arg1: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSingleItemTableWithSilkTouch(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSingleItemTableWithSilkTouch(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level.ItemLike, arg2: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSinglePropConditionTable<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block_state_properties.Property<T>, arg2: T): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createSlabItemTable(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  createStemDrops(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_item.Item): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  doesNotHaveSilkTouch(): j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder;
  dropOther(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level.ItemLike): void;
  dropPottedContents(arg0: j_net_minecraft_world_level_block.Block): void;
  dropSelf(arg0: j_net_minecraft_world_level_block.Block): void;
  dropWhenSilkTouch(arg0: j_net_minecraft_world_level_block.Block): void;
  readonly enabledFeatures: j_net_minecraft_world_flag.FeatureFlagSet;
  readonly explosionResistant: JavaSet<j_net_minecraft_world_item.Item>;
  generate(): void;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  hasShears(): j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder;
  hasSilkTouch(): j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder;
  readonly map: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>;
  otherWhenSilkTouch(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block): void;
  readonly registries: j_net_minecraft_core.HolderLookup_Provider;
}
export type BlockLootSubProvider = BlockLootSubProviderMembers & LootTableSubProvider;
export interface BlockLootSubProviderStatics {
  new(arg0: JavaSet<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_world_flag.FeatureFlagSet, arg2: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>, arg3: j_net_minecraft_core.HolderLookup_Provider): BlockLootSubProvider;
  new(arg0: JavaSet<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_world_flag.FeatureFlagSet, arg2: j_net_minecraft_core.HolderLookup_Provider): BlockLootSubProvider;
  readonly NORMAL_LEAVES_SAPLING_CHANCES: Array<number>;
  createCandleCakeDrops(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
  noDrop(): j_net_minecraft_world_level_storage_loot.LootTable_Builder;
}

/** JVM abstract net.minecraft.data.loot.EntityLootSubProvider. */
export interface EntityLootSubProviderMembers {
  readonly __javaSupertypes?: readonly [LootTableSubProvider];
  add(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg2: j_net_minecraft_world_level_storage_loot.LootTable_Builder): void;
  add(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level_storage_loot.LootTable_Builder): void;
  generate(): void;
  generate(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, j_net_minecraft_world_level_storage_loot.LootTable_Builder>): void;
  killedByFrog(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>): j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder;
  killedByFrogVariant(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity_animal_frog.FrogVariant>, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_entity_animal_frog.FrogVariant>): j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder;
  readonly registries: j_net_minecraft_core.HolderLookup_Provider;
  shouldSmeltLoot(): j_net_minecraft_world_level_storage_loot_predicates.AnyOfCondition_Builder;
}
export type EntityLootSubProvider = EntityLootSubProviderMembers & LootTableSubProvider;
export interface EntityLootSubProviderStatics {
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet, arg1: j_net_minecraft_core.HolderLookup_Provider): EntityLootSubProvider;
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet, arg1: j_net_minecraft_world_flag.FeatureFlagSet, arg2: j_net_minecraft_core.HolderLookup_Provider): EntityLootSubProvider;
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
