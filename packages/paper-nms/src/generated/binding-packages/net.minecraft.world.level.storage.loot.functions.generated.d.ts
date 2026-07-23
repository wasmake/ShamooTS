// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_entries from './net.minecraft.world.level.storage.loot.entries.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_providers_nbt from './net.minecraft.world.level.storage.loot.providers.nbt.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_providers_number from './net.minecraft.world.level.storage.loot.providers.number.generated.js';

/** JVM class net.minecraft.world.level.storage.loot.functions.ApplyBonusCount. */
export interface ApplyBonusCountMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<ApplyBonusCount>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type ApplyBonusCount = ApplyBonusCountMembers & LootItemConditionalFunction;
export interface ApplyBonusCountStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ApplyBonusCount]>;
  addBonusBinomialDistributionCount(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: number, arg2: number): LootItemConditionalFunction_Builder<object>;
  addOreBonusCount(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>): LootItemConditionalFunction_Builder<object>;
  addUniformBonusCount(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>): LootItemConditionalFunction_Builder<object>;
  addUniformBonusCount(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: number): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ApplyExplosionDecay. */
export interface ApplyExplosionDecayMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<ApplyExplosionDecay>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type ApplyExplosionDecay = ApplyExplosionDecayMembers & LootItemConditionalFunction;
export interface ApplyExplosionDecayStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ApplyExplosionDecay]>;
  explosionDecay(): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyBlockState. */
export interface CopyBlockStateMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<CopyBlockState>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type CopyBlockState = CopyBlockStateMembers & LootItemConditionalFunction;
export interface CopyBlockStateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CopyBlockState]>;
  copyState(arg0: j_net_minecraft_world_level_block.Block): CopyBlockState_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyBlockState$Builder. */
export interface CopyBlockState_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<CopyBlockState_Builder>];
  build(): LootItemFunction;
  copy(arg0: j_net_minecraft_world_level_block_state_properties.Property<object>): CopyBlockState_Builder;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): CopyBlockState_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): CopyBlockState_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): CopyBlockState_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): CopyBlockState_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type CopyBlockState_Builder = CopyBlockState_BuilderMembers;
export interface CopyBlockState_BuilderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyComponentsFunction. */
export interface CopyComponentsFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<CopyComponentsFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type CopyComponentsFunction = CopyComponentsFunctionMembers & LootItemConditionalFunction;
export interface CopyComponentsFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CopyComponentsFunction]>;
  copyComponents(arg0: CopyComponentsFunction_Source): CopyComponentsFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyComponentsFunction$Builder. */
export interface CopyComponentsFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<CopyComponentsFunction_Builder>];
  build(): LootItemFunction;
  exclude(arg0: j_net_minecraft_core_component.DataComponentType<object>): CopyComponentsFunction_Builder;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): CopyComponentsFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  include(arg0: j_net_minecraft_core_component.DataComponentType<object>): CopyComponentsFunction_Builder;
  unwrap(): CopyComponentsFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): CopyComponentsFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): CopyComponentsFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type CopyComponentsFunction_Builder = CopyComponentsFunction_BuilderMembers;
export interface CopyComponentsFunction_BuilderStatics {
}

/** Live JVM enum net.minecraft.world.level.storage.loot.functions.CopyComponentsFunction$Source; constants are host handles, not strings. */
export type CopyComponentsFunction_Source = JavaEnum<"net.minecraft.world.level.storage.loot.functions.CopyComponentsFunction$Source", "BLOCK_ENTITY"> & CopyComponentsFunction_SourceMembers;
export interface CopyComponentsFunction_SourceMembers {
  get(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_core_component.DataComponentMap;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getSerializedName(): string;
}
export interface CopyComponentsFunction_SourceStatics {
  readonly BLOCK_ENTITY: CopyComponentsFunction_Source;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CopyComponentsFunction_Source]>;
  valueOf(arg0: string): CopyComponentsFunction_Source;
  values(): Array<CopyComponentsFunction_Source>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyCustomDataFunction. */
export interface CopyCustomDataFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<CopyCustomDataFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type CopyCustomDataFunction = CopyCustomDataFunctionMembers & LootItemConditionalFunction;
export interface CopyCustomDataFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CopyCustomDataFunction]>;
  copyData(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): CopyCustomDataFunction_Builder;
  copyData(arg0: j_net_minecraft_world_level_storage_loot_providers_nbt.NbtProvider): CopyCustomDataFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyCustomDataFunction$Builder. */
export interface CopyCustomDataFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<CopyCustomDataFunction_Builder>];
  build(): LootItemFunction;
  copy(arg0: string, arg1: string): CopyCustomDataFunction_Builder;
  copy(arg0: string, arg1: string, arg2: CopyCustomDataFunction_MergeStrategy): CopyCustomDataFunction_Builder;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): CopyCustomDataFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): CopyCustomDataFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): CopyCustomDataFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): CopyCustomDataFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type CopyCustomDataFunction_Builder = CopyCustomDataFunction_BuilderMembers;
export interface CopyCustomDataFunction_BuilderStatics {
}

/** Live JVM enum net.minecraft.world.level.storage.loot.functions.CopyCustomDataFunction$MergeStrategy; constants are host handles, not strings. */
export type CopyCustomDataFunction_MergeStrategy = JavaEnum<"net.minecraft.world.level.storage.loot.functions.CopyCustomDataFunction$MergeStrategy", "APPEND" | "MERGE" | "REPLACE"> & CopyCustomDataFunction_MergeStrategyMembers;
export interface CopyCustomDataFunction_MergeStrategyMembers {
  getSerializedName(): string;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  merge(arg0: j_net_minecraft_nbt.Tag, arg1: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath, arg2: JavaList<j_net_minecraft_nbt.Tag>): void;
}
export interface CopyCustomDataFunction_MergeStrategyStatics {
  readonly APPEND: CopyCustomDataFunction_MergeStrategy;
  readonly MERGE: CopyCustomDataFunction_MergeStrategy;
  readonly REPLACE: CopyCustomDataFunction_MergeStrategy;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CopyCustomDataFunction_MergeStrategy]>;
  valueOf(arg0: string): CopyCustomDataFunction_MergeStrategy;
  values(): Array<CopyCustomDataFunction_MergeStrategy>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.CopyNameFunction. */
export interface CopyNameFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<CopyNameFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type CopyNameFunction = CopyNameFunctionMembers & LootItemConditionalFunction;
export interface CopyNameFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CopyNameFunction]>;
  copyName(arg0: CopyNameFunction_NameSource): LootItemConditionalFunction_Builder<object>;
}

/** Live JVM enum net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource; constants are host handles, not strings. */
export type CopyNameFunction_NameSource = JavaEnum<"net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource", "ATTACKING_ENTITY" | "BLOCK_ENTITY" | "LAST_DAMAGE_PLAYER" | "THIS"> & CopyNameFunction_NameSourceMembers;
export interface CopyNameFunction_NameSourceMembers {
  getSerializedName(): string;
}
export interface CopyNameFunction_NameSourceStatics {
  readonly ATTACKING_ENTITY: CopyNameFunction_NameSource;
  readonly BLOCK_ENTITY: CopyNameFunction_NameSource;
  readonly LAST_DAMAGE_PLAYER: CopyNameFunction_NameSource;
  readonly THIS: CopyNameFunction_NameSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CopyNameFunction_NameSource]>;
  valueOf(arg0: string): CopyNameFunction_NameSource;
  values(): Array<CopyNameFunction_NameSource>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.EnchantedCountIncreaseFunction. */
export interface EnchantedCountIncreaseFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<EnchantedCountIncreaseFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type EnchantedCountIncreaseFunction = EnchantedCountIncreaseFunctionMembers & LootItemConditionalFunction;
export interface EnchantedCountIncreaseFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantedCountIncreaseFunction]>;
  readonly NO_LIMIT: 0;
  lootingMultiplier(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): EnchantedCountIncreaseFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.EnchantedCountIncreaseFunction$Builder. */
export interface EnchantedCountIncreaseFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<EnchantedCountIncreaseFunction_Builder>];
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): EnchantedCountIncreaseFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  setLimit(arg0: number): EnchantedCountIncreaseFunction_Builder;
  unwrap(): EnchantedCountIncreaseFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): EnchantedCountIncreaseFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): EnchantedCountIncreaseFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type EnchantedCountIncreaseFunction_Builder = EnchantedCountIncreaseFunction_BuilderMembers;
export interface EnchantedCountIncreaseFunction_BuilderStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): EnchantedCountIncreaseFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.EnchantRandomlyFunction. */
export interface EnchantRandomlyFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<EnchantRandomlyFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type EnchantRandomlyFunction = EnchantRandomlyFunctionMembers & LootItemConditionalFunction;
export interface EnchantRandomlyFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantRandomlyFunction]>;
  randomApplicableEnchantment(arg0: j_net_minecraft_core.HolderLookup_Provider): EnchantRandomlyFunction_Builder;
  randomEnchantment(): EnchantRandomlyFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.EnchantRandomlyFunction$Builder. */
export interface EnchantRandomlyFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<EnchantRandomlyFunction_Builder>];
  allowingIncompatibleEnchantments(): EnchantRandomlyFunction_Builder;
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): EnchantRandomlyFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): EnchantRandomlyFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): EnchantRandomlyFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): EnchantRandomlyFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  withEnchantment(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>): EnchantRandomlyFunction_Builder;
  withOneOf(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>): EnchantRandomlyFunction_Builder;
}
export type EnchantRandomlyFunction_Builder = EnchantRandomlyFunction_BuilderMembers;
export interface EnchantRandomlyFunction_BuilderStatics {
  new(): EnchantRandomlyFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.EnchantWithLevelsFunction. */
export interface EnchantWithLevelsFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<EnchantWithLevelsFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type EnchantWithLevelsFunction = EnchantWithLevelsFunctionMembers & LootItemConditionalFunction;
export interface EnchantWithLevelsFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantWithLevelsFunction]>;
  enchantWithLevels(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): EnchantWithLevelsFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.EnchantWithLevelsFunction$Builder. */
export interface EnchantWithLevelsFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<EnchantWithLevelsFunction_Builder>];
  build(): LootItemFunction;
  fromOptions(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>): EnchantWithLevelsFunction_Builder;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): EnchantWithLevelsFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): EnchantWithLevelsFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): EnchantWithLevelsFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): EnchantWithLevelsFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type EnchantWithLevelsFunction_Builder = EnchantWithLevelsFunction_BuilderMembers;
export interface EnchantWithLevelsFunction_BuilderStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): EnchantWithLevelsFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ExplorationMapFunction. */
export interface ExplorationMapFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<ExplorationMapFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type ExplorationMapFunction = ExplorationMapFunctionMembers & LootItemConditionalFunction;
export interface ExplorationMapFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ExplorationMapFunction]>;
  readonly DEFAULT_DECORATION: j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>;
  readonly DEFAULT_DESTINATION: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly DEFAULT_SEARCH_RADIUS: 50;
  readonly DEFAULT_SKIP_EXISTING: 1;
  readonly DEFAULT_ZOOM: 2;
  makeExplorationMap(): ExplorationMapFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ExplorationMapFunction$Builder. */
export interface ExplorationMapFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<ExplorationMapFunction_Builder>];
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): ExplorationMapFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  setDestination(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>): ExplorationMapFunction_Builder;
  setMapDecoration(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>): ExplorationMapFunction_Builder;
  setSearchRadius(arg0: number): ExplorationMapFunction_Builder;
  setSkipKnownStructures(arg0: boolean): ExplorationMapFunction_Builder;
  setZoom(arg0: number): ExplorationMapFunction_Builder;
  unwrap(): ExplorationMapFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): ExplorationMapFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): ExplorationMapFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type ExplorationMapFunction_Builder = ExplorationMapFunction_BuilderMembers;
export interface ExplorationMapFunction_BuilderStatics {
  new(): ExplorationMapFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.FillPlayerHead. */
export interface FillPlayerHeadMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<FillPlayerHead>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type FillPlayerHead = FillPlayerHeadMembers & LootItemConditionalFunction;
export interface FillPlayerHeadStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): FillPlayerHead;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FillPlayerHead]>;
  fillPlayerHead(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.FilteredFunction. */
export interface FilteredFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<FilteredFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type FilteredFunction = FilteredFunctionMembers & LootItemConditionalFunction;
export interface FilteredFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FilteredFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.FunctionReference. */
export interface FunctionReferenceMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<FunctionReference>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type FunctionReference = FunctionReferenceMembers & LootItemConditionalFunction;
export interface FunctionReferenceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionReference]>;
  functionReference(arg0: j_net_minecraft_resources.ResourceKey<LootItemFunction>): LootItemConditionalFunction_Builder<object>;
}

/** JVM interface net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder. */
export interface FunctionUserBuilderMembers<T /* extends FunctionUserBuilder<T> */ = unknown> {
  apply<E>(arg0: Iterable<E>, arg1: JavaFunction<E, LootItemFunction_Builder>): T;
  apply(arg0: LootItemFunction_Builder): T;
  apply<E>(arg0: Array<E>, arg1: JavaFunction<E, LootItemFunction_Builder>): T;
  unwrap(): T;
}
export type FunctionUserBuilder<T /* extends FunctionUserBuilder<T> */ = unknown> = FunctionUserBuilderMembers<T>;
export interface FunctionUserBuilderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.functions.LimitCount. */
export interface LimitCountMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<LimitCount>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type LimitCount = LimitCountMembers & LootItemConditionalFunction;
export interface LimitCountStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LimitCount]>;
  limitCount(arg0: j_net_minecraft_world_level_storage_loot.IntRange): LootItemConditionalFunction_Builder<object>;
}

/** JVM interface net.minecraft.world.level.storage.loot.functions.ListOperation. */
export interface ListOperationMembers {
  apply<T>(arg0: JavaList<T>, arg1: JavaList<T>): JavaList<T>;
  apply<T>(arg0: JavaList<T>, arg1: JavaList<T>, arg2: number): JavaList<T>;
  mode(): ListOperation_Type;
}
export type ListOperation = ListOperationMembers;
export interface ListOperationStatics {
  readonly UNLIMITED_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation]>;
  codec(arg0: number): JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ListOperation$Append. */
export interface ListOperation_AppendMembers {
  readonly __javaSupertypes?: readonly [ListOperation];
  apply<T>(arg0: JavaList<T>, arg1: JavaList<T>, arg2: number): JavaList<T>;
  mode(): ListOperation_Type;
}
export type ListOperation_Append = ListOperation_AppendMembers & ListOperation;
export interface ListOperation_AppendStatics {
  readonly INSTANCE: ListOperation_Append;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation_Append]>;
}

/** JVM record net.minecraft.world.level.storage.loot.functions.ListOperation$Insert. */
export interface ListOperation_InsertMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ListOperation];
  apply<T>(arg0: JavaList<T>, arg1: JavaList<T>, arg2: number): JavaList<T>;
  equals(arg0: object): boolean;
  hashCode(): number;
  mode(): ListOperation_Type;
  offset(): number;
  toString(): string;
}
export type ListOperation_Insert = ListOperation_InsertMembers & JavaOpaque<"java.lang.Record"> & ListOperation;
export interface ListOperation_InsertStatics {
  new(arg0: number): ListOperation_Insert;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation_Insert]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ListOperation$ReplaceAll. */
export interface ListOperation_ReplaceAllMembers {
  readonly __javaSupertypes?: readonly [ListOperation];
  apply<T>(arg0: JavaList<T>, arg1: JavaList<T>, arg2: number): JavaList<T>;
  mode(): ListOperation_Type;
}
export type ListOperation_ReplaceAll = ListOperation_ReplaceAllMembers & ListOperation;
export interface ListOperation_ReplaceAllStatics {
  readonly INSTANCE: ListOperation_ReplaceAll;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation_ReplaceAll]>;
}

/** JVM record net.minecraft.world.level.storage.loot.functions.ListOperation$ReplaceSection. */
export interface ListOperation_ReplaceSectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ListOperation];
  apply<T>(arg0: JavaList<T>, arg1: JavaList<T>, arg2: number): JavaList<T>;
  equals(arg0: object): boolean;
  hashCode(): number;
  mode(): ListOperation_Type;
  offset(): number;
  size(): JavaOptional<number>;
  toString(): string;
}
export type ListOperation_ReplaceSection = ListOperation_ReplaceSectionMembers & JavaOpaque<"java.lang.Record"> & ListOperation;
export interface ListOperation_ReplaceSectionStatics {
  new(arg0: number): ListOperation_ReplaceSection;
  new(arg0: number, arg1: JavaOptional<number>): ListOperation_ReplaceSection;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation_ReplaceSection]>;
}

/** JVM record net.minecraft.world.level.storage.loot.functions.ListOperation$StandAlone. */
export interface ListOperation_StandAloneMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  apply(arg0: JavaList<T>): JavaList<T>;
  equals(arg0: object): boolean;
  hashCode(): number;
  operation(): ListOperation;
  toString(): string;
  value(): JavaList<T>;
}
export type ListOperation_StandAlone<T = unknown> = ListOperation_StandAloneMembers<T> & JavaOpaque<"java.lang.Record">;
export interface ListOperation_StandAloneStatics {
  new<T>(arg0: JavaList<T>, arg1: ListOperation): ListOperation_StandAlone<T>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: number): JavaOpaque<"com.mojang.serialization.Codec", [ListOperation_StandAlone<T>]>;
}

/** Live JVM enum net.minecraft.world.level.storage.loot.functions.ListOperation$Type; constants are host handles, not strings. */
export type ListOperation_Type = JavaEnum<"net.minecraft.world.level.storage.loot.functions.ListOperation$Type", "APPEND" | "INSERT" | "REPLACE_ALL" | "REPLACE_SECTION"> & ListOperation_TypeMembers;
export interface ListOperation_TypeMembers {
  getSerializedName(): string;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ListOperation]>;
}
export interface ListOperation_TypeStatics {
  readonly APPEND: ListOperation_Type;
  readonly INSERT: ListOperation_Type;
  readonly REPLACE_ALL: ListOperation_Type;
  readonly REPLACE_SECTION: ListOperation_Type;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ListOperation_Type]>;
  valueOf(arg0: string): ListOperation_Type;
  values(): Array<ListOperation_Type>;
}

/** JVM abstract net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction. */
export interface LootItemConditionalFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemFunction];
  apply(arg0: object, arg1: object): object;
  apply(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  getType(): LootItemFunctionType<LootItemConditionalFunction>;
  readonly predicates: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type LootItemConditionalFunction = LootItemConditionalFunctionMembers & LootItemFunction;
export interface LootItemConditionalFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>): LootItemConditionalFunction;
  commonFields<T /* extends LootItemConditionalFunction */>(arg0: JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Instance", [T]>): JavaOpaque<"com.mojang.datafixers.Products$P1", [JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Mu", [T]>, JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>]>;
  simpleBuilder(arg0: JavaFunction<JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, LootItemFunction>): LootItemConditionalFunction_Builder<object>;
}

/** JVM abstract net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction$Builder. */
export interface LootItemConditionalFunction_BuilderMembers<T /* extends LootItemConditionalFunction_Builder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [LootItemFunction_Builder, j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<T>];
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): T;
  unwrap(): T;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): T;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type LootItemConditionalFunction_Builder<T /* extends LootItemConditionalFunction_Builder<T> */ = unknown> = LootItemConditionalFunction_BuilderMembers<T> & LootItemFunction_Builder & j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<T>;
export interface LootItemConditionalFunction_BuilderStatics {
  new<T /* extends LootItemConditionalFunction_Builder<T> */>(): LootItemConditionalFunction_Builder<T>;
}

/** JVM interface net.minecraft.world.level.storage.loot.functions.LootItemFunction. */
export interface LootItemFunctionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_storage_loot.LootContextUser, JavaBiFunction<j_net_minecraft_world_item.ItemStack, j_net_minecraft_world_level_storage_loot.LootContext, j_net_minecraft_world_item.ItemStack>];
  getType(): LootItemFunctionType<LootItemFunction>;
}
export type LootItemFunction = LootItemFunctionMembers & j_net_minecraft_world_level_storage_loot.LootContextUser & JavaBiFunction<j_net_minecraft_world_item.ItemStack, j_net_minecraft_world_level_storage_loot.LootContext, j_net_minecraft_world_item.ItemStack>;
export interface LootItemFunctionStatics {
  decorate(arg0: JavaBiFunction<j_net_minecraft_world_item.ItemStack, j_net_minecraft_world_level_storage_loot.LootContext, j_net_minecraft_world_item.ItemStack>, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg2: j_net_minecraft_world_level_storage_loot.LootContext): JavaConsumer<j_net_minecraft_world_item.ItemStack>;
}

/** JVM interface net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder. */
export interface LootItemFunction_BuilderMembers {
  build(): LootItemFunction;
}
export type LootItemFunction_Builder = LootItemFunction_BuilderMembers;
export interface LootItemFunction_BuilderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.functions.LootItemFunctions. */
export interface LootItemFunctionsMembers {
}
export type LootItemFunctions = LootItemFunctionsMembers;
export interface LootItemFunctionsStatics {
  new(): LootItemFunctions;
  readonly APPLY_BONUS: LootItemFunctionType<ApplyBonusCount>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<LootItemFunction>]>;
  readonly COPY_COMPONENTS: LootItemFunctionType<CopyComponentsFunction>;
  readonly COPY_CUSTOM_DATA: LootItemFunctionType<CopyCustomDataFunction>;
  readonly COPY_NAME: LootItemFunctionType<CopyNameFunction>;
  readonly COPY_STATE: LootItemFunctionType<CopyBlockState>;
  readonly ENCHANTED_COUNT_INCREASE: LootItemFunctionType<EnchantedCountIncreaseFunction>;
  readonly ENCHANT_RANDOMLY: LootItemFunctionType<EnchantRandomlyFunction>;
  readonly ENCHANT_WITH_LEVELS: LootItemFunctionType<EnchantWithLevelsFunction>;
  readonly EXPLORATION_MAP: LootItemFunctionType<ExplorationMapFunction>;
  readonly EXPLOSION_DECAY: LootItemFunctionType<ApplyExplosionDecay>;
  readonly FILL_PLAYER_HEAD: LootItemFunctionType<FillPlayerHead>;
  readonly FILTERED: LootItemFunctionType<FilteredFunction>;
  readonly FURNACE_SMELT: LootItemFunctionType<SmeltItemFunction>;
  readonly IDENTITY: JavaBiFunction<j_net_minecraft_world_item.ItemStack, j_net_minecraft_world_level_storage_loot.LootContext, j_net_minecraft_world_item.ItemStack>;
  readonly LIMIT_COUNT: LootItemFunctionType<LimitCount>;
  readonly MODIFY_CONTENTS: LootItemFunctionType<ModifyContainerContents>;
  readonly REFERENCE: LootItemFunctionType<FunctionReference>;
  readonly ROOT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootItemFunction]>;
  readonly SEQUENCE: LootItemFunctionType<SequenceFunction>;
  readonly SET_ATTRIBUTES: LootItemFunctionType<SetAttributesFunction>;
  readonly SET_BANNER_PATTERN: LootItemFunctionType<SetBannerPatternFunction>;
  readonly SET_BOOK_COVER: LootItemFunctionType<SetBookCoverFunction>;
  readonly SET_COMPONENTS: LootItemFunctionType<SetComponentsFunction>;
  readonly SET_CONTENTS: LootItemFunctionType<SetContainerContents>;
  readonly SET_COUNT: LootItemFunctionType<SetItemCountFunction>;
  readonly SET_CUSTOM_DATA: LootItemFunctionType<SetCustomDataFunction>;
  readonly SET_CUSTOM_MODEL_DATA: LootItemFunctionType<SetCustomModelDataFunction>;
  readonly SET_DAMAGE: LootItemFunctionType<SetItemDamageFunction>;
  readonly SET_ENCHANTMENTS: LootItemFunctionType<SetEnchantmentsFunction>;
  readonly SET_FIREWORKS: LootItemFunctionType<SetFireworksFunction>;
  readonly SET_FIREWORK_EXPLOSION: LootItemFunctionType<SetFireworkExplosionFunction>;
  readonly SET_INSTRUMENT: LootItemFunctionType<SetInstrumentFunction>;
  readonly SET_ITEM: LootItemFunctionType<SetItemFunction>;
  readonly SET_LOOT_TABLE: LootItemFunctionType<SetContainerLootTable>;
  readonly SET_LORE: LootItemFunctionType<SetLoreFunction>;
  readonly SET_NAME: LootItemFunctionType<SetNameFunction>;
  readonly SET_OMINOUS_BOTTLE_AMPLIFIER: LootItemFunctionType<SetOminousBottleAmplifierFunction>;
  readonly SET_POTION: LootItemFunctionType<SetPotionFunction>;
  readonly SET_STEW_EFFECT: LootItemFunctionType<SetStewEffectFunction>;
  readonly SET_WRITABLE_BOOK_PAGES: LootItemFunctionType<SetWritableBookPagesFunction>;
  readonly SET_WRITTEN_BOOK_PAGES: LootItemFunctionType<SetWrittenBookPagesFunction>;
  readonly TOGGLE_TOOLTIPS: LootItemFunctionType<ToggleTooltips>;
  readonly TYPED_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootItemFunction]>;
  compose(arg0: JavaList<JavaBiFunction<j_net_minecraft_world_item.ItemStack, j_net_minecraft_world_level_storage_loot.LootContext, j_net_minecraft_world_item.ItemStack>>): JavaBiFunction<j_net_minecraft_world_item.ItemStack, j_net_minecraft_world_level_storage_loot.LootContext, j_net_minecraft_world_item.ItemStack>;
}

/** JVM record net.minecraft.world.level.storage.loot.functions.LootItemFunctionType. */
export interface LootItemFunctionTypeMembers<T /* extends LootItemFunction */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LootItemFunctionType<T /* extends LootItemFunction */ = unknown> = LootItemFunctionTypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface LootItemFunctionTypeStatics {
  new<T /* extends LootItemFunction */>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>): LootItemFunctionType<T>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ModifyContainerContents. */
export interface ModifyContainerContentsMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<ModifyContainerContents>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type ModifyContainerContents = ModifyContainerContentsMembers & LootItemConditionalFunction;
export interface ModifyContainerContentsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ModifyContainerContents]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SequenceFunction. */
export interface SequenceFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemFunction];
  apply(arg0: object, arg1: object): object;
  apply(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  getType(): LootItemFunctionType<SequenceFunction>;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type SequenceFunction = SequenceFunctionMembers & LootItemFunction;
export interface SequenceFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SequenceFunction]>;
  readonly INLINE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SequenceFunction]>;
  of(arg0: JavaList<LootItemFunction>): SequenceFunction;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetAttributesFunction. */
export interface SetAttributesFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetAttributesFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetAttributesFunction = SetAttributesFunctionMembers & LootItemConditionalFunction;
export interface SetAttributesFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetAttributesFunction]>;
  modifier(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg2: j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation, arg3: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): SetAttributesFunction_ModifierBuilder;
  setAttributes(): SetAttributesFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetAttributesFunction$Builder. */
export interface SetAttributesFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<SetAttributesFunction_Builder>];
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): SetAttributesFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): SetAttributesFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SetAttributesFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SetAttributesFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  withModifier(arg0: SetAttributesFunction_ModifierBuilder): SetAttributesFunction_Builder;
}
export type SetAttributesFunction_Builder = SetAttributesFunction_BuilderMembers;
export interface SetAttributesFunction_BuilderStatics {
  new(): SetAttributesFunction_Builder;
  new(arg0: boolean): SetAttributesFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetAttributesFunction$ModifierBuilder. */
export interface SetAttributesFunction_ModifierBuilderMembers {
  build(): JavaOpaque<"net.minecraft.world.level.storage.loot.functions.SetAttributesFunction$Modifier">;
  forSlot(arg0: j_net_minecraft_world_entity.EquipmentSlotGroup): SetAttributesFunction_ModifierBuilder;
}
export type SetAttributesFunction_ModifierBuilder = SetAttributesFunction_ModifierBuilderMembers;
export interface SetAttributesFunction_ModifierBuilderStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg2: j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation, arg3: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): SetAttributesFunction_ModifierBuilder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetBannerPatternFunction. */
export interface SetBannerPatternFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetBannerPatternFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetBannerPatternFunction = SetBannerPatternFunctionMembers & LootItemConditionalFunction;
export interface SetBannerPatternFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetBannerPatternFunction]>;
  setBannerPattern(arg0: boolean): SetBannerPatternFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetBannerPatternFunction$Builder. */
export interface SetBannerPatternFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<SetBannerPatternFunction_Builder>];
  addPattern(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block_entity.BannerPattern>, arg1: j_net_minecraft_world_item.DyeColor): SetBannerPatternFunction_Builder;
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): SetBannerPatternFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): SetBannerPatternFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SetBannerPatternFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SetBannerPatternFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type SetBannerPatternFunction_Builder = SetBannerPatternFunction_BuilderMembers;
export interface SetBannerPatternFunction_BuilderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetBookCoverFunction. */
export interface SetBookCoverFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetBookCoverFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetBookCoverFunction = SetBookCoverFunctionMembers & LootItemConditionalFunction;
export interface SetBookCoverFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaOptional<j_net_minecraft_server_network.Filterable<string>>, arg2: JavaOptional<string>, arg3: JavaOptional<number>): SetBookCoverFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetBookCoverFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetComponentsFunction. */
export interface SetComponentsFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetComponentsFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetComponentsFunction = SetComponentsFunctionMembers & LootItemConditionalFunction;
export interface SetComponentsFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetComponentsFunction]>;
  setComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetContainerContents. */
export interface SetContainerContentsMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetContainerContents>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type SetContainerContents = SetContainerContentsMembers & LootItemConditionalFunction;
export interface SetContainerContentsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetContainerContents]>;
  setContents(arg0: j_net_minecraft_world_level_storage_loot.ContainerComponentManipulator<object>): SetContainerContents_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetContainerContents$Builder. */
export interface SetContainerContents_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<SetContainerContents_Builder>];
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): SetContainerContents_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): SetContainerContents_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SetContainerContents_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SetContainerContents_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  withEntry(arg0: j_net_minecraft_world_level_storage_loot_entries.LootPoolEntryContainer_Builder<object>): SetContainerContents_Builder;
}
export type SetContainerContents_Builder = SetContainerContents_BuilderMembers;
export interface SetContainerContents_BuilderStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot.ContainerComponentManipulator<object>): SetContainerContents_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetContainerLootTable. */
export interface SetContainerLootTableMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetContainerLootTable>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type SetContainerLootTable = SetContainerLootTableMembers & LootItemConditionalFunction;
export interface SetContainerLootTableStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetContainerLootTable]>;
  withLootTable(arg0: j_net_minecraft_world_level_block_entity.BlockEntityType<object>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): LootItemConditionalFunction_Builder<object>;
  withLootTable(arg0: j_net_minecraft_world_level_block_entity.BlockEntityType<object>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg2: bigint): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetCustomDataFunction. */
export interface SetCustomDataFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetCustomDataFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetCustomDataFunction = SetCustomDataFunctionMembers & LootItemConditionalFunction;
export interface SetCustomDataFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetCustomDataFunction]>;
  setCustomData(arg0: j_net_minecraft_nbt.CompoundTag): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetCustomModelDataFunction. */
export interface SetCustomModelDataFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetCustomModelDataFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetCustomModelDataFunction = SetCustomModelDataFunctionMembers & LootItemConditionalFunction;
export interface SetCustomModelDataFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaOptional<ListOperation_StandAlone<j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider>>, arg2: JavaOptional<ListOperation_StandAlone<boolean>>, arg3: JavaOptional<ListOperation_StandAlone<string>>, arg4: JavaOptional<ListOperation_StandAlone<j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider>>): SetCustomModelDataFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetCustomModelDataFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction. */
export interface SetEnchantmentsFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetEnchantmentsFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetEnchantmentsFunction = SetEnchantmentsFunctionMembers & LootItemConditionalFunction;
export interface SetEnchantmentsFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetEnchantmentsFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder. */
export interface SetEnchantmentsFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<SetEnchantmentsFunction_Builder>];
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): SetEnchantmentsFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): SetEnchantmentsFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SetEnchantmentsFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SetEnchantmentsFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  withEnchantment(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): SetEnchantmentsFunction_Builder;
}
export type SetEnchantmentsFunction_Builder = SetEnchantmentsFunction_BuilderMembers;
export interface SetEnchantmentsFunction_BuilderStatics {
  new(): SetEnchantmentsFunction_Builder;
  new(arg0: boolean): SetEnchantmentsFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetFireworkExplosionFunction. */
export interface SetFireworkExplosionFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetFireworkExplosionFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetFireworkExplosionFunction = SetFireworkExplosionFunctionMembers & LootItemConditionalFunction;
export interface SetFireworkExplosionFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaOptional<j_net_minecraft_world_item_component.FireworkExplosion_Shape>, arg2: JavaOptional<JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">>, arg3: JavaOptional<JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">>, arg4: JavaOptional<boolean>, arg5: JavaOptional<boolean>): SetFireworkExplosionFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetFireworkExplosionFunction]>;
  readonly DEFAULT_VALUE: j_net_minecraft_world_item_component.FireworkExplosion;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetFireworksFunction. */
export interface SetFireworksFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetFireworksFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetFireworksFunction = SetFireworksFunctionMembers & LootItemConditionalFunction;
export interface SetFireworksFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaOptional<ListOperation_StandAlone<j_net_minecraft_world_item_component.FireworkExplosion>>, arg2: JavaOptional<number>): SetFireworksFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetFireworksFunction]>;
  readonly DEFAULT_VALUE: j_net_minecraft_world_item_component.Fireworks;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetInstrumentFunction. */
export interface SetInstrumentFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetInstrumentFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetInstrumentFunction = SetInstrumentFunctionMembers & LootItemConditionalFunction;
export interface SetInstrumentFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetInstrumentFunction]>;
  setInstrumentOptions(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Instrument>): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetItemCountFunction. */
export interface SetItemCountFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetItemCountFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetItemCountFunction = SetItemCountFunctionMembers & LootItemConditionalFunction;
export interface SetItemCountFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetItemCountFunction]>;
  setCount(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootItemConditionalFunction_Builder<object>;
  setCount(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider, arg1: boolean): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetItemDamageFunction. */
export interface SetItemDamageFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetItemDamageFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetItemDamageFunction = SetItemDamageFunctionMembers & LootItemConditionalFunction;
export interface SetItemDamageFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetItemDamageFunction]>;
  setDamage(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootItemConditionalFunction_Builder<object>;
  setDamage(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider, arg1: boolean): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetItemFunction. */
export interface SetItemFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetItemFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetItemFunction = SetItemFunctionMembers & LootItemConditionalFunction;
export interface SetItemFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetItemFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetLoreFunction. */
export interface SetLoreFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetLoreFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetLoreFunction = SetLoreFunctionMembers & LootItemConditionalFunction;
export interface SetLoreFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaList<j_net_minecraft_network_chat.Component>, arg2: ListOperation, arg3: JavaOptional<j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget>): SetLoreFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetLoreFunction]>;
  setLore(): SetLoreFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetLoreFunction$Builder. */
export interface SetLoreFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<SetLoreFunction_Builder>];
  addLine(arg0: j_net_minecraft_network_chat.Component): SetLoreFunction_Builder;
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): SetLoreFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  setMode(arg0: ListOperation): SetLoreFunction_Builder;
  setResolutionContext(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): SetLoreFunction_Builder;
  unwrap(): SetLoreFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SetLoreFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SetLoreFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
}
export type SetLoreFunction_Builder = SetLoreFunction_BuilderMembers;
export interface SetLoreFunction_BuilderStatics {
  new(): SetLoreFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetNameFunction. */
export interface SetNameFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetNameFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetNameFunction = SetNameFunctionMembers & LootItemConditionalFunction;
export interface SetNameFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetNameFunction]>;
  createResolver(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget | null): JavaOpaque<"java.util.function.UnaryOperator", [j_net_minecraft_network_chat.Component]> | null;
  setName(arg0: j_net_minecraft_network_chat.Component, arg1: SetNameFunction_Target): LootItemConditionalFunction_Builder<object>;
  setName(arg0: j_net_minecraft_network_chat.Component, arg1: SetNameFunction_Target, arg2: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): LootItemConditionalFunction_Builder<object>;
}

/** Live JVM enum net.minecraft.world.level.storage.loot.functions.SetNameFunction$Target; constants are host handles, not strings. */
export type SetNameFunction_Target = JavaEnum<"net.minecraft.world.level.storage.loot.functions.SetNameFunction$Target", "CUSTOM_NAME" | "ITEM_NAME"> & SetNameFunction_TargetMembers;
export interface SetNameFunction_TargetMembers {
  component(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_network_chat.Component>;
  getSerializedName(): string;
}
export interface SetNameFunction_TargetStatics {
  readonly CUSTOM_NAME: SetNameFunction_Target;
  readonly ITEM_NAME: SetNameFunction_Target;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SetNameFunction_Target]>;
  valueOf(arg0: string): SetNameFunction_Target;
  values(): Array<SetNameFunction_Target>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetOminousBottleAmplifierFunction. */
export interface SetOminousBottleAmplifierFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  amplifier(): j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetOminousBottleAmplifierFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetOminousBottleAmplifierFunction = SetOminousBottleAmplifierFunctionMembers & LootItemConditionalFunction;
export interface SetOminousBottleAmplifierFunctionStatics {
  setAmplifier(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetPotionFunction. */
export interface SetPotionFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SetPotionFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetPotionFunction = SetPotionFunctionMembers & LootItemConditionalFunction;
export interface SetPotionFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetPotionFunction]>;
  setPotion(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetStewEffectFunction. */
export interface SetStewEffectFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemFunctionType<SetStewEffectFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetStewEffectFunction = SetStewEffectFunctionMembers & LootItemConditionalFunction;
export interface SetStewEffectFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetStewEffectFunction]>;
  stewEffect(): SetStewEffectFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetStewEffectFunction$Builder. */
export interface SetStewEffectFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction_Builder<SetStewEffectFunction_Builder>];
  build(): LootItemFunction;
  getConditions(): JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  getThis(): SetStewEffectFunction_Builder;
  getThis(): LootItemConditionalFunction_Builder;
  unwrap(): SetStewEffectFunction_Builder;
  unwrap(): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SetStewEffectFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SetStewEffectFunction_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder;
  withEffect(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): SetStewEffectFunction_Builder;
}
export type SetStewEffectFunction_Builder = SetStewEffectFunction_BuilderMembers;
export interface SetStewEffectFunction_BuilderStatics {
  new(): SetStewEffectFunction_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetWritableBookPagesFunction. */
export interface SetWritableBookPagesFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  apply(arg0: j_net_minecraft_world_item_component.WritableBookContent): j_net_minecraft_world_item_component.WritableBookContent;
  getType(): LootItemFunctionType<SetWritableBookPagesFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetWritableBookPagesFunction = SetWritableBookPagesFunctionMembers & LootItemConditionalFunction;
export interface SetWritableBookPagesFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaList<j_net_minecraft_server_network.Filterable<string>>, arg2: ListOperation): SetWritableBookPagesFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetWritableBookPagesFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SetWrittenBookPagesFunction. */
export interface SetWrittenBookPagesFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  apply(arg0: j_net_minecraft_world_item_component.WrittenBookContent): j_net_minecraft_world_item_component.WrittenBookContent;
  getType(): LootItemFunctionType<SetWrittenBookPagesFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SetWrittenBookPagesFunction = SetWrittenBookPagesFunctionMembers & LootItemConditionalFunction;
export interface SetWrittenBookPagesFunctionStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg1: JavaList<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>, arg2: ListOperation): SetWrittenBookPagesFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SetWrittenBookPagesFunction]>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.SmeltItemFunction. */
export interface SmeltItemFunctionMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<SmeltItemFunction>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type SmeltItemFunction = SmeltItemFunctionMembers & LootItemConditionalFunction;
export interface SmeltItemFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SmeltItemFunction]>;
  smelted(): LootItemConditionalFunction_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.functions.ToggleTooltips. */
export interface ToggleTooltipsMembers {
  readonly __javaSupertypes?: readonly [LootItemConditionalFunction];
  getType(): LootItemFunctionType<ToggleTooltips>;
  run(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_item.ItemStack;
}
export type ToggleTooltips = ToggleTooltipsMembers & LootItemConditionalFunction;
export interface ToggleTooltipsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ToggleTooltips]>;
}
