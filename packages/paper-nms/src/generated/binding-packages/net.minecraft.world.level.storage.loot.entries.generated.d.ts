// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_functions from './net.minecraft.world.level.storage.loot.functions.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';

/** JVM class net.minecraft.world.level.storage.loot.entries.AlternativesEntry. */
export interface AlternativesEntryMembers {
  readonly __javaSupertypes?: readonly [CompositeEntryBase];
  getType(): LootPoolEntryType;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type AlternativesEntry = AlternativesEntryMembers & CompositeEntryBase;
export interface AlternativesEntryStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AlternativesEntry]>;
  readonly UNREACHABLE_PROBLEM: j_net_minecraft_util.ProblemReporter_Problem;
  alternatives<E>(arg0: JavaCollection<E>, arg1: JavaFunction<E, LootPoolEntryContainer_Builder<object>>): AlternativesEntry_Builder;
  alternatives(...arg0: Array<LootPoolEntryContainer_Builder<object>>): AlternativesEntry_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.AlternativesEntry$Builder. */
export interface AlternativesEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootPoolEntryContainer_Builder<AlternativesEntry_Builder>];
  append(arg0: LootPoolEntryContainer_Builder<object>): EntryGroup_Builder;
  build(): LootPoolEntryContainer;
  otherwise(arg0: LootPoolEntryContainer_Builder<object>): AlternativesEntry_Builder;
  then(arg0: LootPoolEntryContainer_Builder<object>): SequentialEntry_Builder;
  unwrap(): AlternativesEntry_Builder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): AlternativesEntry_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): AlternativesEntry_Builder;
}
export type AlternativesEntry_Builder = AlternativesEntry_BuilderMembers;
export interface AlternativesEntry_BuilderStatics {
  new(...arg0: Array<LootPoolEntryContainer_Builder<object>>): AlternativesEntry_Builder;
}

/** JVM abstract net.minecraft.world.level.storage.loot.entries.CompositeEntryBase. */
export interface CompositeEntryBaseMembers {
  readonly __javaSupertypes?: readonly [LootPoolEntryContainer];
  expand(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: JavaConsumer<LootPoolEntry>): boolean;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type CompositeEntryBase = CompositeEntryBaseMembers & LootPoolEntryContainer;
export interface CompositeEntryBaseStatics {
  readonly NO_CHILDREN_PROBLEM: j_net_minecraft_util.ProblemReporter_Problem;
  createCodec<T /* extends CompositeEntryBase */>(arg0: CompositeEntryBase_CompositeEntryConstructor<T>): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
}

/** JVM interface net.minecraft.world.level.storage.loot.entries.CompositeEntryBase$CompositeEntryConstructor. */
export interface CompositeEntryBase_CompositeEntryConstructorMembers<T /* extends CompositeEntryBase */ = unknown> {
  create(arg0: JavaList<LootPoolEntryContainer>, arg1: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>): T;
}
export type CompositeEntryBase_CompositeEntryConstructor<T /* extends CompositeEntryBase */ = unknown> = CompositeEntryBase_CompositeEntryConstructorMembers<T>;
export interface CompositeEntryBase_CompositeEntryConstructorStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.entries.DynamicLoot. */
export interface DynamicLootMembers {
  readonly __javaSupertypes?: readonly [LootPoolSingletonContainer];
  createItemStack(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: j_net_minecraft_world_level_storage_loot.LootContext): void;
  getType(): LootPoolEntryType;
}
export type DynamicLoot = DynamicLootMembers & LootPoolSingletonContainer;
export interface DynamicLootStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DynamicLoot]>;
  dynamicEntry(arg0: j_net_minecraft_resources.ResourceLocation): LootPoolSingletonContainer_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.EmptyLootItem. */
export interface EmptyLootItemMembers {
  readonly __javaSupertypes?: readonly [LootPoolSingletonContainer];
  createItemStack(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: j_net_minecraft_world_level_storage_loot.LootContext): void;
  getType(): LootPoolEntryType;
}
export type EmptyLootItem = EmptyLootItemMembers & LootPoolSingletonContainer;
export interface EmptyLootItemStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EmptyLootItem]>;
  emptyItem(): LootPoolSingletonContainer_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.EntryGroup. */
export interface EntryGroupMembers {
  readonly __javaSupertypes?: readonly [CompositeEntryBase];
  getType(): LootPoolEntryType;
}
export type EntryGroup = EntryGroupMembers & CompositeEntryBase;
export interface EntryGroupStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EntryGroup]>;
  list(...arg0: Array<LootPoolEntryContainer_Builder<object>>): EntryGroup_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.EntryGroup$Builder. */
export interface EntryGroup_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootPoolEntryContainer_Builder<EntryGroup_Builder>];
  append(arg0: LootPoolEntryContainer_Builder<object>): EntryGroup_Builder;
  build(): LootPoolEntryContainer;
  otherwise(arg0: LootPoolEntryContainer_Builder<object>): AlternativesEntry_Builder;
  then(arg0: LootPoolEntryContainer_Builder<object>): SequentialEntry_Builder;
  unwrap(): EntryGroup_Builder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): EntryGroup_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): EntryGroup_Builder;
}
export type EntryGroup_Builder = EntryGroup_BuilderMembers;
export interface EntryGroup_BuilderStatics {
  new(...arg0: Array<LootPoolEntryContainer_Builder<object>>): EntryGroup_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.LootItem. */
export interface LootItemMembers {
  readonly __javaSupertypes?: readonly [LootPoolSingletonContainer];
  createItemStack(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: j_net_minecraft_world_level_storage_loot.LootContext): void;
  getType(): LootPoolEntryType;
}
export type LootItem = LootItemMembers & LootPoolSingletonContainer;
export interface LootItemStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItem]>;
  lootTableItem(arg0: j_net_minecraft_world_level.ItemLike): LootPoolSingletonContainer_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.LootPoolEntries. */
export interface LootPoolEntriesMembers {
}
export type LootPoolEntries = LootPoolEntriesMembers;
export interface LootPoolEntriesStatics {
  new(): LootPoolEntries;
  readonly ALTERNATIVES: LootPoolEntryType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootPoolEntryContainer]>;
  readonly DYNAMIC: LootPoolEntryType;
  readonly EMPTY: LootPoolEntryType;
  readonly GROUP: LootPoolEntryType;
  readonly ITEM: LootPoolEntryType;
  readonly LOOT_TABLE: LootPoolEntryType;
  readonly SEQUENCE: LootPoolEntryType;
  readonly TAG: LootPoolEntryType;
}

/** JVM interface net.minecraft.world.level.storage.loot.entries.LootPoolEntry. */
export interface LootPoolEntryMembers {
  createItemStack(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: j_net_minecraft_world_level_storage_loot.LootContext): void;
  getWeight(arg0: number): number;
}
export type LootPoolEntry = LootPoolEntryMembers;
export interface LootPoolEntryStatics {
}

/** JVM abstract net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer. */
export interface LootPoolEntryContainerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer">];
  getType(): LootPoolEntryType;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type LootPoolEntryContainer = LootPoolEntryContainerMembers & JavaOpaque<"net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer">;
export interface LootPoolEntryContainerStatics {
}

/** JVM abstract net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder. */
export interface LootPoolEntryContainer_BuilderMembers<T /* extends LootPoolEntryContainer_Builder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<T>];
  append(arg0: LootPoolEntryContainer_Builder<object>): EntryGroup_Builder;
  build(): LootPoolEntryContainer;
  otherwise(arg0: LootPoolEntryContainer_Builder<object>): AlternativesEntry_Builder;
  then(arg0: LootPoolEntryContainer_Builder<object>): SequentialEntry_Builder;
  unwrap(): T;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): T;
}
export type LootPoolEntryContainer_Builder<T /* extends LootPoolEntryContainer_Builder<T> */ = unknown> = LootPoolEntryContainer_BuilderMembers<T> & j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<T>;
export interface LootPoolEntryContainer_BuilderStatics {
}

/** JVM record net.minecraft.world.level.storage.loot.entries.LootPoolEntryType. */
export interface LootPoolEntryTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LootPoolEntryContainer]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LootPoolEntryType = LootPoolEntryTypeMembers & JavaOpaque<"java.lang.Record">;
export interface LootPoolEntryTypeStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [LootPoolEntryContainer]>): LootPoolEntryType;
}

/** JVM abstract net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer. */
export interface LootPoolSingletonContainerMembers {
  readonly __javaSupertypes?: readonly [LootPoolEntryContainer];
  expand(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: JavaConsumer<LootPoolEntry>): boolean;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type LootPoolSingletonContainer = LootPoolSingletonContainerMembers & LootPoolEntryContainer;
export interface LootPoolSingletonContainerStatics {
  readonly DEFAULT_QUALITY: 0;
  readonly DEFAULT_WEIGHT: 1;
  simpleBuilder(arg0: LootPoolSingletonContainer_EntryConstructor): LootPoolSingletonContainer_Builder<object>;
}

/** JVM abstract net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer$Builder. */
export interface LootPoolSingletonContainer_BuilderMembers<T /* extends LootPoolSingletonContainer_Builder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [LootPoolEntryContainer_Builder<T>, j_net_minecraft_world_level_storage_loot_functions.FunctionUserBuilder<T>];
  apply(arg0: j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder): T;
  setQuality(arg0: number): T;
  setWeight(arg0: number): T;
}
export type LootPoolSingletonContainer_Builder<T /* extends LootPoolSingletonContainer_Builder<T> */ = unknown> = LootPoolSingletonContainer_BuilderMembers<T> & LootPoolEntryContainer_Builder<T> & j_net_minecraft_world_level_storage_loot_functions.FunctionUserBuilder<T>;
export interface LootPoolSingletonContainer_BuilderStatics {
}

/** JVM abstract net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer$EntryBase. */
export interface LootPoolSingletonContainer_EntryBaseMembers {
  readonly __javaSupertypes?: readonly [LootPoolEntry];
  getWeight(arg0: number): number;
}
export type LootPoolSingletonContainer_EntryBase = LootPoolSingletonContainer_EntryBaseMembers & LootPoolEntry;
export interface LootPoolSingletonContainer_EntryBaseStatics {
}

/** JVM interface net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer$EntryConstructor. */
export interface LootPoolSingletonContainer_EntryConstructorMembers {
  build(arg0: number, arg1: number, arg2: JavaList<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>, arg3: JavaList<j_net_minecraft_world_level_storage_loot_functions.LootItemFunction>): LootPoolSingletonContainer;
}
export type LootPoolSingletonContainer_EntryConstructor = LootPoolSingletonContainer_EntryConstructorMembers;
export interface LootPoolSingletonContainer_EntryConstructorStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.entries.NestedLootTable. */
export interface NestedLootTableMembers {
  readonly __javaSupertypes?: readonly [LootPoolSingletonContainer];
  createItemStack(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: j_net_minecraft_world_level_storage_loot.LootContext): void;
  getType(): LootPoolEntryType;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type NestedLootTable = NestedLootTableMembers & LootPoolSingletonContainer;
export interface NestedLootTableStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NestedLootTable]>;
  readonly INLINE_LOOT_TABLE_PATH_ELEMENT: j_net_minecraft_util.ProblemReporter_PathElement;
  inlineLootTable(arg0: j_net_minecraft_world_level_storage_loot.LootTable): LootPoolSingletonContainer_Builder<object>;
  lootTableReference(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): LootPoolSingletonContainer_Builder<object>;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.SequentialEntry. */
export interface SequentialEntryMembers {
  readonly __javaSupertypes?: readonly [CompositeEntryBase];
  getType(): LootPoolEntryType;
}
export type SequentialEntry = SequentialEntryMembers & CompositeEntryBase;
export interface SequentialEntryStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SequentialEntry]>;
  sequential(...arg0: Array<LootPoolEntryContainer_Builder<object>>): SequentialEntry_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.SequentialEntry$Builder. */
export interface SequentialEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootPoolEntryContainer_Builder<SequentialEntry_Builder>];
  append(arg0: LootPoolEntryContainer_Builder<object>): EntryGroup_Builder;
  build(): LootPoolEntryContainer;
  otherwise(arg0: LootPoolEntryContainer_Builder<object>): AlternativesEntry_Builder;
  then(arg0: LootPoolEntryContainer_Builder<object>): SequentialEntry_Builder;
  unwrap(): SequentialEntry_Builder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): SequentialEntry_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): SequentialEntry_Builder;
}
export type SequentialEntry_Builder = SequentialEntry_BuilderMembers;
export interface SequentialEntry_BuilderStatics {
  new(...arg0: Array<LootPoolEntryContainer_Builder<object>>): SequentialEntry_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.entries.TagEntry. */
export interface TagEntry_2Members {
  readonly __javaSupertypes?: readonly [LootPoolSingletonContainer];
  createItemStack(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: j_net_minecraft_world_level_storage_loot.LootContext): void;
  expand(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: JavaConsumer<LootPoolEntry>): boolean;
  getType(): LootPoolEntryType;
}
export type TagEntry_2 = TagEntry_2Members & LootPoolSingletonContainer;
export interface TagEntry_2Statics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TagEntry_2]>;
  expandTag(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): LootPoolSingletonContainer_Builder<object>;
  tagContents(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): LootPoolSingletonContainer_Builder<object>;
}
