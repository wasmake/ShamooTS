// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_providers_number from './net.minecraft.world.level.storage.loot.providers.number.generated.js';

/** JVM class net.minecraft.world.level.storage.loot.predicates.AllOfCondition. */
export interface AllOfConditionMembers {
  readonly __javaSupertypes?: readonly [CompositeLootItemCondition];
  getType(): LootItemConditionType;
}
export type AllOfCondition = AllOfConditionMembers & CompositeLootItemCondition;
export interface AllOfConditionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AllOfCondition]>;
  readonly INLINE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AllOfCondition]>;
  allOf(arg0: JavaList<LootItemCondition>): AllOfCondition;
  allOf(...arg0: Array<LootItemCondition_Builder>): AllOfCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.AllOfCondition$Builder. */
export interface AllOfCondition_BuilderMembers {
  readonly __javaSupertypes?: readonly [CompositeLootItemCondition_Builder];
  and(arg0: LootItemCondition_Builder): AllOfCondition_Builder;
}
export type AllOfCondition_Builder = AllOfCondition_BuilderMembers & CompositeLootItemCondition_Builder;
export interface AllOfCondition_BuilderStatics {
  new(...arg0: Array<LootItemCondition_Builder>): AllOfCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.AnyOfCondition. */
export interface AnyOfConditionMembers {
  readonly __javaSupertypes?: readonly [CompositeLootItemCondition];
  getType(): LootItemConditionType;
}
export type AnyOfCondition = AnyOfConditionMembers & CompositeLootItemCondition;
export interface AnyOfConditionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AnyOfCondition]>;
  anyOf(...arg0: Array<LootItemCondition_Builder>): AnyOfCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.AnyOfCondition$Builder. */
export interface AnyOfCondition_BuilderMembers {
  readonly __javaSupertypes?: readonly [CompositeLootItemCondition_Builder];
  or(arg0: LootItemCondition_Builder): AnyOfCondition_Builder;
}
export type AnyOfCondition_Builder = AnyOfCondition_BuilderMembers & CompositeLootItemCondition_Builder;
export interface AnyOfCondition_BuilderStatics {
  new(...arg0: Array<LootItemCondition_Builder>): AnyOfCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.BonusLevelTableCondition. */
export interface BonusLevelTableConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  enchantment(): j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>;
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
  values(): JavaList<number>;
}
export type BonusLevelTableCondition = BonusLevelTableConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface BonusLevelTableConditionStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: JavaList<number>): BonusLevelTableCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BonusLevelTableCondition]>;
  bonusLevelFlatChance(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, ...arg1: Array<number>): LootItemCondition_Builder;
}

/** JVM abstract net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition. */
export interface CompositeLootItemConditionMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition];
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type CompositeLootItemCondition = CompositeLootItemConditionMembers & LootItemCondition;
export interface CompositeLootItemConditionStatics {
}

/** JVM abstract net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition$Builder. */
export interface CompositeLootItemCondition_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition_Builder];
  addTerm(arg0: LootItemCondition_Builder): void;
  build(): LootItemCondition;
}
export type CompositeLootItemCondition_Builder = CompositeLootItemCondition_BuilderMembers & LootItemCondition_Builder;
export interface CompositeLootItemCondition_BuilderStatics {
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.ConditionReference. */
export interface ConditionReferenceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getType(): LootItemConditionType;
  hashCode(): number;
  name(): j_net_minecraft_resources.ResourceKey<LootItemCondition>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type ConditionReference = ConditionReferenceMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface ConditionReferenceStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<LootItemCondition>): ConditionReference;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConditionReference]>;
  conditionReference(arg0: j_net_minecraft_resources.ResourceKey<LootItemCondition>): LootItemCondition_Builder;
}

/** JVM interface net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder. */
export interface ConditionUserBuilderMembers<T /* extends ConditionUserBuilder<T> */ = unknown> {
  unwrap(): T;
  when<E>(arg0: Iterable<E>, arg1: JavaFunction<E, LootItemCondition_Builder>): T;
  when(arg0: LootItemCondition_Builder): T;
}
export type ConditionUserBuilder<T /* extends ConditionUserBuilder<T> */ = unknown> = ConditionUserBuilderMembers<T>;
export interface ConditionUserBuilderStatics {
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.DamageSourceCondition. */
export interface DamageSourceConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  predicate(): JavaOptional<j_net_minecraft_advancements_critereon.DamageSourcePredicate>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type DamageSourceCondition = DamageSourceConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface DamageSourceConditionStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.DamageSourcePredicate>): DamageSourceCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DamageSourceCondition]>;
  hasDamageSource(arg0: j_net_minecraft_advancements_critereon.DamageSourcePredicate_Builder): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.EnchantmentActiveCheck. */
export interface EnchantmentActiveCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  active(): boolean;
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type EnchantmentActiveCheck = EnchantmentActiveCheckMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface EnchantmentActiveCheckStatics {
  new(arg0: boolean): EnchantmentActiveCheck;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantmentActiveCheck]>;
  enchantmentActiveCheck(): LootItemCondition_Builder;
  enchantmentInactiveCheck(): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.EntityHasScoreCondition. */
export interface EntityHasScoreConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  entityTarget(): j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget;
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  scores(): JavaMap<string, j_net_minecraft_world_level_storage_loot.IntRange>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type EntityHasScoreCondition = EntityHasScoreConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface EntityHasScoreConditionStatics {
  new(arg0: JavaMap<string, j_net_minecraft_world_level_storage_loot.IntRange>, arg1: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): EntityHasScoreCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EntityHasScoreCondition]>;
  hasScores(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): EntityHasScoreCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.EntityHasScoreCondition$Builder. */
export interface EntityHasScoreCondition_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition_Builder];
  build(): LootItemCondition;
  withScore(arg0: string, arg1: j_net_minecraft_world_level_storage_loot.IntRange): EntityHasScoreCondition_Builder;
}
export type EntityHasScoreCondition_Builder = EntityHasScoreCondition_BuilderMembers & LootItemCondition_Builder;
export interface EntityHasScoreCondition_BuilderStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): EntityHasScoreCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.ExplosionCondition. */
export interface ExplosionConditionMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
}
export type ExplosionCondition = ExplosionConditionMembers & LootItemCondition;
export interface ExplosionConditionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ExplosionCondition]>;
  survivesExplosion(): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.InvertedLootItemCondition. */
export interface InvertedLootItemConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  term(): LootItemCondition;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type InvertedLootItemCondition = InvertedLootItemConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface InvertedLootItemConditionStatics {
  new(arg0: LootItemCondition): InvertedLootItemCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [InvertedLootItemCondition]>;
  invert(arg0: LootItemCondition_Builder): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.LocationCheck. */
export interface LocationCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  offset(): j_net_minecraft_core.BlockPos;
  predicate(): JavaOptional<j_net_minecraft_advancements_critereon.LocationPredicate>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type LocationCheck = LocationCheckMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface LocationCheckStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.LocationPredicate>, arg1: j_net_minecraft_core.BlockPos): LocationCheck;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LocationCheck]>;
  checkLocation(arg0: j_net_minecraft_advancements_critereon.LocationPredicate_Builder): LootItemCondition_Builder;
  checkLocation(arg0: j_net_minecraft_advancements_critereon.LocationPredicate_Builder, arg1: j_net_minecraft_core.BlockPos): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.LootItemBlockStatePropertyCondition. */
export interface LootItemBlockStatePropertyConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  block(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>;
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  properties(): JavaOptional<j_net_minecraft_advancements_critereon.StatePropertiesPredicate>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type LootItemBlockStatePropertyCondition = LootItemBlockStatePropertyConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface LootItemBlockStatePropertyConditionStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>, arg1: JavaOptional<j_net_minecraft_advancements_critereon.StatePropertiesPredicate>): LootItemBlockStatePropertyCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemBlockStatePropertyCondition]>;
  hasBlockStateProperties(arg0: j_net_minecraft_world_level_block.Block): LootItemBlockStatePropertyCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.LootItemBlockStatePropertyCondition$Builder. */
export interface LootItemBlockStatePropertyCondition_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition_Builder];
  build(): LootItemCondition;
  setProperties(arg0: j_net_minecraft_advancements_critereon.StatePropertiesPredicate_Builder): LootItemBlockStatePropertyCondition_Builder;
}
export type LootItemBlockStatePropertyCondition_Builder = LootItemBlockStatePropertyCondition_BuilderMembers & LootItemCondition_Builder;
export interface LootItemBlockStatePropertyCondition_BuilderStatics {
  new(arg0: j_net_minecraft_world_level_block.Block): LootItemBlockStatePropertyCondition_Builder;
}

/** JVM interface net.minecraft.world.level.storage.loot.predicates.LootItemCondition. */
export interface LootItemConditionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_storage_loot.LootContextUser, JavaPredicate<j_net_minecraft_world_level_storage_loot.LootContext>];
  getType(): LootItemConditionType;
}
export type LootItemCondition = LootItemConditionMembers & j_net_minecraft_world_level_storage_loot.LootContextUser & JavaPredicate<j_net_minecraft_world_level_storage_loot.LootContext>;
export interface LootItemConditionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<LootItemCondition>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootItemCondition]>;
  readonly TYPED_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootItemCondition]>;
}

/** JVM interface net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder. */
export interface LootItemCondition_BuilderMembers {
  and(arg0: LootItemCondition_Builder): AllOfCondition_Builder;
  build(): LootItemCondition;
  invert(): LootItemCondition_Builder;
  or(arg0: LootItemCondition_Builder): AnyOfCondition_Builder;
}
export type LootItemCondition_Builder = LootItemCondition_BuilderMembers;
export interface LootItemCondition_BuilderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.LootItemConditions. */
export interface LootItemConditionsMembers {
}
export type LootItemConditions = LootItemConditionsMembers;
export interface LootItemConditionsStatics {
  new(): LootItemConditions;
  readonly ALL_OF: LootItemConditionType;
  readonly ANY_OF: LootItemConditionType;
  readonly BLOCK_STATE_PROPERTY: LootItemConditionType;
  readonly DAMAGE_SOURCE_PROPERTIES: LootItemConditionType;
  readonly ENCHANTMENT_ACTIVE_CHECK: LootItemConditionType;
  readonly ENTITY_PROPERTIES: LootItemConditionType;
  readonly ENTITY_SCORES: LootItemConditionType;
  readonly INVERTED: LootItemConditionType;
  readonly KILLED_BY_PLAYER: LootItemConditionType;
  readonly LOCATION_CHECK: LootItemConditionType;
  readonly MATCH_TOOL: LootItemConditionType;
  readonly RANDOM_CHANCE: LootItemConditionType;
  readonly RANDOM_CHANCE_WITH_ENCHANTED_BONUS: LootItemConditionType;
  readonly REFERENCE: LootItemConditionType;
  readonly SURVIVES_EXPLOSION: LootItemConditionType;
  readonly TABLE_BONUS: LootItemConditionType;
  readonly TIME_CHECK: LootItemConditionType;
  readonly VALUE_CHECK: LootItemConditionType;
  readonly WEATHER_CHECK: LootItemConditionType;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.LootItemConditionType. */
export interface LootItemConditionTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemCondition]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LootItemConditionType = LootItemConditionTypeMembers & JavaOpaque<"java.lang.Record">;
export interface LootItemConditionTypeStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemCondition]>): LootItemConditionType;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.LootItemEntityPropertyCondition. */
export interface LootItemEntityPropertyConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  entityTarget(): j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget;
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  predicate(): JavaOptional<j_net_minecraft_advancements_critereon.EntityPredicate>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type LootItemEntityPropertyCondition = LootItemEntityPropertyConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface LootItemEntityPropertyConditionStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.EntityPredicate>, arg1: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): LootItemEntityPropertyCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemEntityPropertyCondition]>;
  entityPresent(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): LootItemCondition_Builder;
  hasProperties(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget, arg1: j_net_minecraft_advancements_critereon.EntityPredicate_Builder): LootItemCondition_Builder;
  hasProperties(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget, arg1: j_net_minecraft_advancements_critereon.EntityPredicate): LootItemCondition_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.LootItemKilledByPlayerCondition. */
export interface LootItemKilledByPlayerConditionMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition];
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
}
export type LootItemKilledByPlayerCondition = LootItemKilledByPlayerConditionMembers & LootItemCondition;
export interface LootItemKilledByPlayerConditionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemKilledByPlayerCondition]>;
  killedByPlayer(): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.LootItemRandomChanceCondition. */
export interface LootItemRandomChanceConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  chance(): j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider;
  equals(arg0: object): boolean;
  getType(): LootItemConditionType;
  hashCode(): number;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type LootItemRandomChanceCondition = LootItemRandomChanceConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface LootItemRandomChanceConditionStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootItemRandomChanceCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemRandomChanceCondition]>;
  randomChance(arg0: number): LootItemCondition_Builder;
  randomChance(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.LootItemRandomChanceWithEnchantedBonusCondition. */
export interface LootItemRandomChanceWithEnchantedBonusConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  enchantedChance(): j_net_minecraft_world_item_enchantment.LevelBasedValue;
  enchantment(): j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>;
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
  unenchantedChance(): number;
}
export type LootItemRandomChanceWithEnchantedBonusCondition = LootItemRandomChanceWithEnchantedBonusConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface LootItemRandomChanceWithEnchantedBonusConditionStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item_enchantment.LevelBasedValue, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>): LootItemRandomChanceWithEnchantedBonusCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LootItemRandomChanceWithEnchantedBonusCondition]>;
  randomChanceAndLootingBoost(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: number, arg2: number): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.MatchTool. */
export interface MatchToolMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  predicate(): JavaOptional<j_net_minecraft_advancements_critereon.ItemPredicate>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type MatchTool = MatchToolMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface MatchToolStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.ItemPredicate>): MatchTool;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MatchTool]>;
  toolMatches(arg0: j_net_minecraft_advancements_critereon.ItemPredicate_Builder): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.TimeCheck. */
export interface TimeCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  period(): JavaOptional<bigint>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
  value(): j_net_minecraft_world_level_storage_loot.IntRange;
}
export type TimeCheck = TimeCheckMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface TimeCheckStatics {
  new(arg0: JavaOptional<bigint>, arg1: j_net_minecraft_world_level_storage_loot.IntRange): TimeCheck;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TimeCheck]>;
  time(arg0: j_net_minecraft_world_level_storage_loot.IntRange): TimeCheck_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.TimeCheck$Builder. */
export interface TimeCheck_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition_Builder];
  build(): TimeCheck;
  setPeriod(arg0: bigint): TimeCheck_Builder;
}
export type TimeCheck_Builder = TimeCheck_BuilderMembers & LootItemCondition_Builder;
export interface TimeCheck_BuilderStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot.IntRange): TimeCheck_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.ValueCheckCondition. */
export interface ValueCheckConditionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootItemConditionType;
  hashCode(): number;
  provider(): j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider;
  range(): j_net_minecraft_world_level_storage_loot.IntRange;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type ValueCheckCondition = ValueCheckConditionMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface ValueCheckConditionStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider, arg1: j_net_minecraft_world_level_storage_loot.IntRange): ValueCheckCondition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ValueCheckCondition]>;
  hasValue(arg0: j_net_minecraft_world_level_storage_loot_providers_number.NumberProvider, arg1: j_net_minecraft_world_level_storage_loot.IntRange): LootItemCondition_Builder;
}

/** JVM record net.minecraft.world.level.storage.loot.predicates.WeatherCheck. */
export interface WeatherCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LootItemCondition];
  equals(arg0: object): boolean;
  getType(): LootItemConditionType;
  hashCode(): number;
  isRaining(): JavaOptional<boolean>;
  isThundering(): JavaOptional<boolean>;
  test(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  toString(): string;
}
export type WeatherCheck = WeatherCheckMembers & JavaOpaque<"java.lang.Record"> & LootItemCondition;
export interface WeatherCheckStatics {
  new(arg0: JavaOptional<boolean>, arg1: JavaOptional<boolean>): WeatherCheck;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatherCheck]>;
  weather(): WeatherCheck_Builder;
}

/** JVM class net.minecraft.world.level.storage.loot.predicates.WeatherCheck$Builder. */
export interface WeatherCheck_BuilderMembers {
  readonly __javaSupertypes?: readonly [LootItemCondition_Builder];
  build(): WeatherCheck;
  setRaining(arg0: boolean): WeatherCheck_Builder;
  setThundering(arg0: boolean): WeatherCheck_Builder;
}
export type WeatherCheck_Builder = WeatherCheck_BuilderMembers & LootItemCondition_Builder;
export interface WeatherCheck_BuilderStatics {
  new(): WeatherCheck_Builder;
}
