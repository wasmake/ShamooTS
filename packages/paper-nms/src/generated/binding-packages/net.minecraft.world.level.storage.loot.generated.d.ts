// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_entries from './net.minecraft.world.level.storage.loot.entries.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_functions from './net.minecraft.world.level.storage.loot.functions.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_providers_number from './net.minecraft.world.level.storage.loot.providers.number.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';

/** JVM class net.minecraft.world.level.storage.loot.BuiltInLootTables. */
export interface BuiltInLootTablesMembers {
}
export type BuiltInLootTables = BuiltInLootTablesMembers;
export interface BuiltInLootTablesStatics {
  new(): BuiltInLootTables;
  readonly ABANDONED_MINESHAFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly ANCIENT_CITY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly ANCIENT_CITY_ICE_BOX: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly ARMADILLO_SHED: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly ARMORER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BABY_VILLAGER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BASTION_BRIDGE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BASTION_HOGLIN_STABLE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BASTION_OTHER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BASTION_TREASURE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BOGGED_SHEAR: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BURIED_TREASURE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly BUTCHER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly CARTOGRAPHER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly CAT_MORNING_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly CHICKEN_LAY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly CLERIC_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly DESERT_PYRAMID: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly DESERT_PYRAMID_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly DESERT_WELL_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly END_CITY_TREASURE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly EQUIPMENT_TRIAL_CHAMBER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly EQUIPMENT_TRIAL_CHAMBER_MELEE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly EQUIPMENT_TRIAL_CHAMBER_RANGED: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FARMER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FISHERMAN_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FISHING: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FISHING_FISH: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FISHING_JUNK: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FISHING_TREASURE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly FLETCHER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly IGLOO_CHEST: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly JUNGLE_TEMPLE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly JUNGLE_TEMPLE_DISPENSER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly LEATHERWORKER_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly LIBRARIAN_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly MASON_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly NETHER_BRIDGE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly OCEAN_RUIN_COLD_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly OCEAN_RUIN_WARM_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly PANDA_SNEEZE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly PIGLIN_BARTERING: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly PILLAGER_OUTPOST: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly RUINED_PORTAL: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHEAR_BROWN_MOOSHROOM: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHEAR_MOOSHROOM: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHEAR_RED_MOOSHROOM: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHEAR_SHEEP: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHEAR_SHEEP_BY_DYE: JavaMap<j_net_minecraft_world_item.DyeColor, j_net_minecraft_resources.ResourceKey<LootTable>>;
  readonly SHEAR_SNOW_GOLEM: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHEEP_BY_DYE: JavaMap<j_net_minecraft_world_item.DyeColor, j_net_minecraft_resources.ResourceKey<LootTable>>;
  readonly SHEPHERD_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHIPWRECK_MAP: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHIPWRECK_SUPPLY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SHIPWRECK_TREASURE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SIMPLE_DUNGEON: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SNIFFER_DIGGING: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SPAWNER_OMINOUS_TRIAL_CHAMBER_CONSUMABLES: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SPAWNER_OMINOUS_TRIAL_CHAMBER_KEY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SPAWNER_TRIAL_CHAMBER_CONSUMABLES: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SPAWNER_TRIAL_CHAMBER_KEY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SPAWNER_TRIAL_ITEMS_TO_DROP_WHEN_OMINOUS: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly SPAWN_BONUS_CHEST: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly STRONGHOLD_CORRIDOR: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly STRONGHOLD_CROSSING: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly STRONGHOLD_LIBRARY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TOOLSMITH_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRAIL_RUINS_ARCHAEOLOGY_COMMON: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRAIL_RUINS_ARCHAEOLOGY_RARE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_CHAMBER_DISPENSER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_CORRIDOR: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_CORRIDOR_DISPENSER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_CORRIDOR_POT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_ENTRANCE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_INTERSECTION: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_INTERSECTION_BARREL: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_COMMON: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS_RARE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_RARE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_REWARD_UNIQUE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_SUPPLY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly TRIAL_CHAMBERS_WATER_DISPENSER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly UNDERWATER_RUIN_BIG: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly UNDERWATER_RUIN_SMALL: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly UNEMPLOYED_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_ARMORER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_BUTCHER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_CARTOGRAPHER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_DESERT_HOUSE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_FISHER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_FLETCHER: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_MASON: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_PLAINS_HOUSE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_SAVANNA_HOUSE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_SHEPHERD: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_SNOWY_HOUSE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_TAIGA_HOUSE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_TANNERY: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_TEMPLE: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_TOOLSMITH: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly VILLAGE_WEAPONSMITH: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly WEAPONSMITH_GIFT: j_net_minecraft_resources.ResourceKey<LootTable>;
  readonly WOODLAND_MANSION: j_net_minecraft_resources.ResourceKey<LootTable>;
  all(): JavaSet<j_net_minecraft_resources.ResourceKey<LootTable>>;
}

/** JVM interface net.minecraft.world.level.storage.loot.ContainerComponentManipulator. */
export interface ContainerComponentManipulatorMembers<T = unknown> {
  empty(): T;
  getContents(arg0: T): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>;
  modifyItems(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOpaque<"java.util.function.UnaryOperator", [j_net_minecraft_world_item.ItemStack]>): void;
  setContents(arg0: T, arg1: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>): T;
  setContents(arg0: j_net_minecraft_world_item.ItemStack, arg1: T, arg2: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>): void;
  setContents(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>): void;
  type(): j_net_minecraft_core_component.DataComponentType<T>;
}
export type ContainerComponentManipulator<T = unknown> = ContainerComponentManipulatorMembers<T>;
export interface ContainerComponentManipulatorStatics {
}

/** JVM interface net.minecraft.world.level.storage.loot.ContainerComponentManipulators. */
export interface ContainerComponentManipulatorsMembers {
}
export type ContainerComponentManipulators = ContainerComponentManipulatorsMembers;
export interface ContainerComponentManipulatorsStatics {
  readonly ALL_MANIPULATORS: JavaMap<j_net_minecraft_core_component.DataComponentType<object>, ContainerComponentManipulator<object>>;
  readonly BUNDLE_CONTENTS: ContainerComponentManipulator<j_net_minecraft_world_item_component.BundleContents>;
  readonly CHARGED_PROJECTILES: ContainerComponentManipulator<j_net_minecraft_world_item_component.ChargedProjectiles>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ContainerComponentManipulator<object>]>;
  readonly CONTAINER: ContainerComponentManipulator<j_net_minecraft_world_item_component.ItemContainerContents>;
}

/** JVM class net.minecraft.world.level.storage.loot.IntRange. */
export interface IntRangeMembers {
  clamp(arg0: LootContext, arg1: number): number;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  test(arg0: LootContext, arg1: number): boolean;
}
export type IntRange = IntRangeMembers;
export interface IntRangeStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [IntRange]>;
  exact(arg0: number): IntRange;
  lowerBound(arg0: number): IntRange;
  range(arg0: number, arg1: number): IntRange;
  upperBound(arg0: number): IntRange;
}

/** JVM class net.minecraft.world.level.storage.loot.LootContext. */
export interface LootContextMembers {
  addDynamicDrops(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getLuck(): number;
  getOptionalParameter<T>(arg0: j_net_minecraft_util_context.ContextKey<T>): T | null;
  getParameter<T>(arg0: j_net_minecraft_util_context.ContextKey<T>): T;
  getRandom(): j_net_minecraft_util.RandomSource;
  getResolver(): j_net_minecraft_core.HolderGetter_Provider;
  hasParameter(arg0: j_net_minecraft_util_context.ContextKey<object>): boolean;
  hasVisitedElement(arg0: LootContext_VisitedEntry<object>): boolean;
  popVisitedElement(arg0: LootContext_VisitedEntry<object>): void;
  pushVisitedElement(arg0: LootContext_VisitedEntry<object>): boolean;
}
export type LootContext = LootContextMembers;
export interface LootContextStatics {
  createVisitedEntry(arg0: LootTable): LootContext_VisitedEntry<LootTable>;
  createVisitedEntry(arg0: j_net_minecraft_world_level_storage_loot_functions.LootItemFunction): LootContext_VisitedEntry<j_net_minecraft_world_level_storage_loot_functions.LootItemFunction>;
  createVisitedEntry(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition): LootContext_VisitedEntry<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
}

/** JVM class net.minecraft.world.level.storage.loot.LootContext$Builder. */
export interface LootContext_BuilderMembers {
  create(arg0: JavaOptional<j_net_minecraft_resources.ResourceLocation>): LootContext;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  withOptionalRandomSeed(arg0: bigint): LootContext_Builder;
  withOptionalRandomSource(arg0: j_net_minecraft_util.RandomSource): LootContext_Builder;
}
export type LootContext_Builder = LootContext_BuilderMembers;
export interface LootContext_BuilderStatics {
  new(arg0: LootParams): LootContext_Builder;
}

/** Live JVM enum net.minecraft.world.level.storage.loot.LootContext$EntityTarget; constants are host handles, not strings. */
export type LootContext_EntityTarget = JavaEnum<"net.minecraft.world.level.storage.loot.LootContext$EntityTarget", "ATTACKER" | "ATTACKING_PLAYER" | "DIRECT_ATTACKER" | "THIS"> & LootContext_EntityTargetMembers;
export interface LootContext_EntityTargetMembers {
  getParam(): j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_entity.Entity>;
  getSerializedName(): string;
}
export interface LootContext_EntityTargetStatics {
  readonly ATTACKER: LootContext_EntityTarget;
  readonly ATTACKING_PLAYER: LootContext_EntityTarget;
  readonly DIRECT_ATTACKER: LootContext_EntityTarget;
  readonly THIS: LootContext_EntityTarget;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<LootContext_EntityTarget>;
  getByName(arg0: string): LootContext_EntityTarget;
  valueOf(arg0: string): LootContext_EntityTarget;
  values(): Array<LootContext_EntityTarget>;
}

/** JVM record net.minecraft.world.level.storage.loot.LootContext$VisitedEntry. */
export interface LootContext_VisitedEntryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): LootDataType<T>;
  value(): T;
}
export type LootContext_VisitedEntry<T = unknown> = LootContext_VisitedEntryMembers<T> & JavaOpaque<"java.lang.Record">;
export interface LootContext_VisitedEntryStatics {
  new<T>(arg0: LootDataType<T>, arg1: T): LootContext_VisitedEntry<T>;
}

/** JVM interface net.minecraft.world.level.storage.loot.LootContextUser. */
export interface LootContextUserMembers {
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  validate(arg0: ValidationContext): void;
}
export type LootContextUser = LootContextUserMembers;
export interface LootContextUserStatics {
}

/** JVM record net.minecraft.world.level.storage.loot.LootDataType. */
export interface LootDataTypeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  registryKey(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>;
  runValidation(arg0: ValidationContext, arg1: j_net_minecraft_resources.ResourceKey<T>, arg2: T): void;
  toString(): string;
  validator(): LootDataType_Validator<T>;
}
export type LootDataType<T = unknown> = LootDataTypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface LootDataTypeStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: LootDataType_Validator<T>): LootDataType<T>;
  readonly MODIFIER: LootDataType<j_net_minecraft_world_level_storage_loot_functions.LootItemFunction>;
  readonly PREDICATE: LootDataType<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  readonly TABLE: LootDataType<LootTable>;
  values(): JavaOpaque<"java.util.stream.Stream", [LootDataType<object>]>;
}

/** JVM interface net.minecraft.world.level.storage.loot.LootDataType$Validator. */
export interface LootDataType_ValidatorMembers<T = unknown> {
  run(arg0: ValidationContext, arg1: j_net_minecraft_resources.ResourceKey<T>, arg2: T): void;
}
export type LootDataType_Validator<T = unknown> = LootDataType_ValidatorMembers<T>;
export interface LootDataType_ValidatorStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.LootParams. */
export interface LootParamsMembers {
  addDynamicDrops(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  contextMap(): j_net_minecraft_util_context.ContextMap;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getLuck(): number;
}
export type LootParams = LootParamsMembers;
export interface LootParamsStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util_context.ContextMap, arg2: JavaMap<j_net_minecraft_resources.ResourceLocation, LootParams_DynamicDrop>, arg3: number): LootParams;
}

/** JVM class net.minecraft.world.level.storage.loot.LootParams$Builder. */
export interface LootParams_BuilderMembers {
  create(arg0: j_net_minecraft_util_context.ContextKeySet): LootParams;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getOptionalParameter<T>(arg0: j_net_minecraft_util_context.ContextKey<T>): T | null;
  getParameter<T>(arg0: j_net_minecraft_util_context.ContextKey<T>): T;
  withDynamicDrop(arg0: j_net_minecraft_resources.ResourceLocation, arg1: LootParams_DynamicDrop): LootParams_Builder;
  withLuck(arg0: number): LootParams_Builder;
  withOptionalParameter<T>(arg0: j_net_minecraft_util_context.ContextKey<T>, arg1: T | null): LootParams_Builder;
  withParameter<T>(arg0: j_net_minecraft_util_context.ContextKey<T>, arg1: T): LootParams_Builder;
}
export type LootParams_Builder = LootParams_BuilderMembers;
export interface LootParams_BuilderStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel): LootParams_Builder;
}

/** JVM interface net.minecraft.world.level.storage.loot.LootParams$DynamicDrop. */
export interface LootParams_DynamicDropMembers {
  add(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
}
export type LootParams_DynamicDrop = LootParams_DynamicDropMembers;
export interface LootParams_DynamicDropStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.LootPool. */
export interface LootPoolMembers {
  addRandomItems(arg0: JavaConsumer<j_net_minecraft_world_item.ItemStack>, arg1: LootContext): void;
  validate(arg0: ValidationContext): void;
}
export type LootPool = LootPoolMembers;
export interface LootPoolStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootPool]>;
  lootPool(): LootPool_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.LootPool$Builder. */
export interface LootPool_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_storage_loot_functions.FunctionUserBuilder<LootPool_Builder>, j_net_minecraft_world_level_storage_loot_predicates.ConditionUserBuilder<LootPool_Builder>];
  add(arg0: j_net_minecraft_world_level_storage_loot_entries.LootPoolEntryContainer_Builder<object>): LootPool_Builder;
  apply<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder>): LootPool_Builder;
  apply(arg0: j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder): LootPool_Builder;
  apply<E>(arg0: Array<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder>): LootPool_Builder;
  build(): LootPool;
  setBonusRolls(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootPool_Builder;
  setRolls(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootPool_Builder;
  unwrap(): LootPool_Builder;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): LootPool_Builder;
  when(arg0: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): LootPool_Builder;
}
export type LootPool_Builder = LootPool_BuilderMembers;
export interface LootPool_BuilderStatics {
  new(): LootPool_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.LootTable. */
export interface LootTableMembers {
  craftLootTable: j_org_bukkit_craftbukkit.CraftLootTable;
  fill(arg0: j_net_minecraft_world.Container, arg1: LootParams, arg2: bigint): void;
  fill(arg0: j_net_minecraft_world.Container, arg1: LootParams, arg2: j_net_minecraft_util.RandomSource, arg3: boolean): void;
  getParamSet(): j_net_minecraft_util_context.ContextKeySet;
  getRandomItems(arg0: LootContext, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  getRandomItems(arg0: LootParams): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [j_net_minecraft_world_item.ItemStack]>;
  getRandomItems(arg0: LootParams, arg1: bigint): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [j_net_minecraft_world_item.ItemStack]>;
  getRandomItems(arg0: LootParams, arg1: bigint, arg2: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  getRandomItems(arg0: LootParams, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  getRandomItems(arg0: LootParams, arg1: j_net_minecraft_util.RandomSource): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [j_net_minecraft_world_item.ItemStack]>;
  getRandomItemsRaw(arg0: LootContext, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  getRandomItemsRaw(arg0: LootParams, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): void;
  validate(arg0: ValidationContext): void;
}
export type LootTable = LootTableMembers;
export interface LootTableStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<LootTable>]>;
  readonly DEFAULT_PARAM_SET: j_net_minecraft_util_context.ContextKeySet;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootTable]>;
  readonly EMPTY: LootTable;
  readonly KEY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_resources.ResourceKey<LootTable>]>;
  readonly RANDOMIZE_SEED: 0;
  createStackSplitter(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): JavaConsumer<j_net_minecraft_world_item.ItemStack>;
  lootTable(): LootTable_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.LootTable$Builder. */
export interface LootTable_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_storage_loot_functions.FunctionUserBuilder<LootTable_Builder>];
  apply<E>(arg0: Iterable<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder>): LootTable_Builder;
  apply(arg0: j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder): LootTable_Builder;
  apply<E>(arg0: Array<E>, arg1: JavaFunction<E, j_net_minecraft_world_level_storage_loot_functions.LootItemFunction_Builder>): LootTable_Builder;
  build(): LootTable;
  setParamSet(arg0: j_net_minecraft_util_context.ContextKeySet): LootTable_Builder;
  setRandomSequence(arg0: j_net_minecraft_resources.ResourceLocation): LootTable_Builder;
  unwrap(): LootTable_Builder;
  withPool(arg0: LootPool_Builder): LootTable_Builder;
}
export type LootTable_Builder = LootTable_BuilderMembers;
export interface LootTable_BuilderStatics {
  new(): LootTable_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.ValidationContext. */
export interface ValidationContextMembers {
  allowsReferences(): boolean;
  enterElement(arg0: j_net_minecraft_util.ProblemReporter_PathElement, arg1: j_net_minecraft_resources.ResourceKey<object>): ValidationContext;
  forChild(arg0: j_net_minecraft_util.ProblemReporter_PathElement): ValidationContext;
  hasVisitedElement(arg0: j_net_minecraft_resources.ResourceKey<object>): boolean;
  reportProblem(arg0: j_net_minecraft_util.ProblemReporter_Problem): void;
  reporter(): j_net_minecraft_util.ProblemReporter;
  resolver(): j_net_minecraft_core.HolderGetter_Provider;
  setContextKeySet(arg0: j_net_minecraft_util_context.ContextKeySet): ValidationContext;
  validateContextUsage(arg0: LootContextUser): void;
}
export type ValidationContext = ValidationContextMembers;
export interface ValidationContextStatics {
  new(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_util_context.ContextKeySet): ValidationContext;
  new(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_util_context.ContextKeySet, arg2: j_net_minecraft_core.HolderGetter_Provider): ValidationContext;
}

/** JVM record net.minecraft.world.level.storage.loot.ValidationContext$MissingReferenceProblem. */
export interface ValidationContext_MissingReferenceProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  referenced(): j_net_minecraft_resources.ResourceKey<object>;
  toString(): string;
}
export type ValidationContext_MissingReferenceProblem = ValidationContext_MissingReferenceProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface ValidationContext_MissingReferenceProblemStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<object>): ValidationContext_MissingReferenceProblem;
}

/** JVM record net.minecraft.world.level.storage.loot.ValidationContext$ParametersNotProvidedProblem. */
export interface ValidationContext_ParametersNotProvidedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  notProvided(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  toString(): string;
}
export type ValidationContext_ParametersNotProvidedProblem = ValidationContext_ParametersNotProvidedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface ValidationContext_ParametersNotProvidedProblemStatics {
  new(arg0: JavaSet<j_net_minecraft_util_context.ContextKey<object>>): ValidationContext_ParametersNotProvidedProblem;
}

/** JVM record net.minecraft.world.level.storage.loot.ValidationContext$RecursiveReferenceProblem. */
export interface ValidationContext_RecursiveReferenceProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  referenced(): j_net_minecraft_resources.ResourceKey<object>;
  toString(): string;
}
export type ValidationContext_RecursiveReferenceProblem = ValidationContext_RecursiveReferenceProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface ValidationContext_RecursiveReferenceProblemStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<object>): ValidationContext_RecursiveReferenceProblem;
}

/** JVM record net.minecraft.world.level.storage.loot.ValidationContext$ReferenceNotAllowedProblem. */
export interface ValidationContext_ReferenceNotAllowedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  referenced(): j_net_minecraft_resources.ResourceKey<object>;
  toString(): string;
}
export type ValidationContext_ReferenceNotAllowedProblem = ValidationContext_ReferenceNotAllowedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface ValidationContext_ReferenceNotAllowedProblemStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<object>): ValidationContext_ReferenceNotAllowedProblem;
}
