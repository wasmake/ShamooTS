// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_core_component_predicates from './net.minecraft.core.component.predicates.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_pattern from './net.minecraft.world.level.block.state.pattern.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.advancements.critereon.AnyBlockInteractionTrigger. */
export interface AnyBlockInteractionTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<AnyBlockInteractionTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [AnyBlockInteractionTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack): void;
}
export type AnyBlockInteractionTrigger = AnyBlockInteractionTriggerMembers & SimpleCriterionTrigger<AnyBlockInteractionTrigger_TriggerInstance>;
export interface AnyBlockInteractionTriggerStatics {
  new(): AnyBlockInteractionTrigger;
}

/** JVM record net.minecraft.advancements.critereon.AnyBlockInteractionTrigger$TriggerInstance. */
export interface AnyBlockInteractionTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  location(): JavaOptional<ContextAwarePredicate>;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type AnyBlockInteractionTrigger_TriggerInstance = AnyBlockInteractionTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface AnyBlockInteractionTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>): AnyBlockInteractionTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AnyBlockInteractionTrigger_TriggerInstance]>;
}

/** JVM class net.minecraft.advancements.critereon.BeeNestDestroyedTrigger. */
export interface BeeNestDestroyedTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<BeeNestDestroyedTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [BeeNestDestroyedTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_item.ItemStack, arg3: number): void;
}
export type BeeNestDestroyedTrigger = BeeNestDestroyedTriggerMembers & SimpleCriterionTrigger<BeeNestDestroyedTrigger_TriggerInstance>;
export interface BeeNestDestroyedTriggerStatics {
  new(): BeeNestDestroyedTrigger;
}

/** JVM record net.minecraft.advancements.critereon.BeeNestDestroyedTrigger$TriggerInstance. */
export interface BeeNestDestroyedTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  beesInside(): MinMaxBounds_Ints;
  block(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type BeeNestDestroyedTrigger_TriggerInstance = BeeNestDestroyedTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface BeeNestDestroyedTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>>, arg2: JavaOptional<ItemPredicate>, arg3: MinMaxBounds_Ints): BeeNestDestroyedTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BeeNestDestroyedTrigger_TriggerInstance]>;
  destroyedBeeNest(arg0: j_net_minecraft_world_level_block.Block, arg1: ItemPredicate_Builder, arg2: MinMaxBounds_Ints): j_net_minecraft_advancements.Criterion<BeeNestDestroyedTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.BlockPredicate. */
export interface BlockPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blocks(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>>;
  components(): DataComponentMatchers;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  matches(arg0: j_net_minecraft_world_level_block_state_pattern.BlockInWorld): boolean;
  nbt(): JavaOptional<NbtPredicate>;
  properties(): JavaOptional<StatePropertiesPredicate>;
  requiresNbt(): boolean;
  toString(): string;
}
export type BlockPredicate = BlockPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface BlockPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>>, arg1: JavaOptional<StatePropertiesPredicate>, arg2: JavaOptional<NbtPredicate>, arg3: DataComponentMatchers): BlockPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockPredicate]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BlockPredicate>;
}

/** JVM class net.minecraft.advancements.critereon.BlockPredicate$Builder. */
export interface BlockPredicate_BuilderMembers {
  build(): BlockPredicate;
  components(arg0: DataComponentMatchers): BlockPredicate_Builder;
  hasNbt(arg0: j_net_minecraft_nbt.CompoundTag): BlockPredicate_Builder;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>, arg1: JavaCollection<j_net_minecraft_world_level_block.Block>): BlockPredicate_Builder;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): BlockPredicate_Builder;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>, ...arg1: Array<j_net_minecraft_world_level_block.Block>): BlockPredicate_Builder;
  setProperties(arg0: StatePropertiesPredicate_Builder): BlockPredicate_Builder;
}
export type BlockPredicate_Builder = BlockPredicate_BuilderMembers;
export interface BlockPredicate_BuilderStatics {
  block(): BlockPredicate_Builder;
}

/** JVM class net.minecraft.advancements.critereon.BredAnimalsTrigger. */
export interface BredAnimalsTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<BredAnimalsTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [BredAnimalsTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity_animal.Animal, arg2: j_net_minecraft_world_entity_animal.Animal, arg3: j_net_minecraft_world_entity.AgeableMob | null): void;
}
export type BredAnimalsTrigger = BredAnimalsTriggerMembers & SimpleCriterionTrigger<BredAnimalsTrigger_TriggerInstance>;
export interface BredAnimalsTriggerStatics {
  new(): BredAnimalsTrigger;
}

/** JVM record net.minecraft.advancements.critereon.BredAnimalsTrigger$TriggerInstance. */
export interface BredAnimalsTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  child(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: j_net_minecraft_world_level_storage_loot.LootContext, arg2: j_net_minecraft_world_level_storage_loot.LootContext | null): boolean;
  parent(): JavaOptional<ContextAwarePredicate>;
  partner(): JavaOptional<ContextAwarePredicate>;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type BredAnimalsTrigger_TriggerInstance = BredAnimalsTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface BredAnimalsTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>, arg2: JavaOptional<ContextAwarePredicate>, arg3: JavaOptional<ContextAwarePredicate>): BredAnimalsTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BredAnimalsTrigger_TriggerInstance]>;
  bredAnimals(): j_net_minecraft_advancements.Criterion<BredAnimalsTrigger_TriggerInstance>;
  bredAnimals(arg0: JavaOptional<EntityPredicate>, arg1: JavaOptional<EntityPredicate>, arg2: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<BredAnimalsTrigger_TriggerInstance>;
  bredAnimals(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<BredAnimalsTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.BrewedPotionTrigger. */
export interface BrewedPotionTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<BrewedPotionTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [BrewedPotionTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>): void;
}
export type BrewedPotionTrigger = BrewedPotionTriggerMembers & SimpleCriterionTrigger<BrewedPotionTrigger_TriggerInstance>;
export interface BrewedPotionTriggerStatics {
  new(): BrewedPotionTrigger;
}

/** JVM record net.minecraft.advancements.critereon.BrewedPotionTrigger$TriggerInstance. */
export interface BrewedPotionTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  potion(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>>;
  toString(): string;
}
export type BrewedPotionTrigger_TriggerInstance = BrewedPotionTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface BrewedPotionTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>>): BrewedPotionTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BrewedPotionTrigger_TriggerInstance]>;
  brewedPotion(): j_net_minecraft_advancements.Criterion<BrewedPotionTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.ChangeDimensionTrigger. */
export interface ChangeDimensionTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ChangeDimensionTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ChangeDimensionTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): void;
}
export type ChangeDimensionTrigger = ChangeDimensionTriggerMembers & SimpleCriterionTrigger<ChangeDimensionTrigger_TriggerInstance>;
export interface ChangeDimensionTriggerStatics {
  new(): ChangeDimensionTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ChangeDimensionTrigger$TriggerInstance. */
export interface ChangeDimensionTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  from(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  hashCode(): number;
  matches(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  to(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  toString(): string;
}
export type ChangeDimensionTrigger_TriggerInstance = ChangeDimensionTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ChangeDimensionTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>, arg2: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>): ChangeDimensionTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChangeDimensionTrigger_TriggerInstance]>;
  changedDimension(): j_net_minecraft_advancements.Criterion<ChangeDimensionTrigger_TriggerInstance>;
  changedDimension(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): j_net_minecraft_advancements.Criterion<ChangeDimensionTrigger_TriggerInstance>;
  changedDimensionFrom(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): j_net_minecraft_advancements.Criterion<ChangeDimensionTrigger_TriggerInstance>;
  changedDimensionTo(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): j_net_minecraft_advancements.Criterion<ChangeDimensionTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.ChanneledLightningTrigger. */
export interface ChanneledLightningTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ChanneledLightningTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ChanneledLightningTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: JavaCollection<j_net_minecraft_world_entity.Entity>): void;
}
export type ChanneledLightningTrigger = ChanneledLightningTriggerMembers & SimpleCriterionTrigger<ChanneledLightningTrigger_TriggerInstance>;
export interface ChanneledLightningTriggerStatics {
  new(): ChanneledLightningTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ChanneledLightningTrigger$TriggerInstance. */
export interface ChanneledLightningTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: JavaCollection<j_net_minecraft_world_level_storage_loot.LootContext>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
  victims(): JavaList<ContextAwarePredicate>;
}
export type ChanneledLightningTrigger_TriggerInstance = ChanneledLightningTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ChanneledLightningTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaList<ContextAwarePredicate>): ChanneledLightningTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChanneledLightningTrigger_TriggerInstance]>;
  channeledLightning(...arg0: Array<EntityPredicate_Builder>): j_net_minecraft_advancements.Criterion<ChanneledLightningTrigger_TriggerInstance>;
}

/** JVM interface net.minecraft.advancements.critereon.CollectionContentsPredicate. */
export interface CollectionContentsPredicateMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaPredicate<Iterable<T>>];
  unpack(): JavaList<P>;
}
export type CollectionContentsPredicate<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionContentsPredicateMembers<T, P> & JavaPredicate<Iterable<T>>;
export interface CollectionContentsPredicateStatics {
  codec<T, P /* extends JavaPredicate<T> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [P]>): JavaOpaque<"com.mojang.serialization.Codec", [CollectionContentsPredicate<T, P>]>;
  of<T, P /* extends JavaPredicate<T> */>(arg0: JavaList<P>): CollectionContentsPredicate<T, P>;
  of<T, P /* extends JavaPredicate<T> */>(...arg0: Array<P>): CollectionContentsPredicate<T, P>;
}

/** JVM record net.minecraft.advancements.critereon.CollectionContentsPredicate$Multiple. */
export interface CollectionContentsPredicate_MultipleMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CollectionContentsPredicate<T, P>];
  equals(arg0: object): boolean;
  hashCode(): number;
  test(arg0: Iterable<T>): boolean;
  tests(): JavaList<P>;
  toString(): string;
  unpack(): JavaList<P>;
}
export type CollectionContentsPredicate_Multiple<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionContentsPredicate_MultipleMembers<T, P> & JavaOpaque<"java.lang.Record"> & CollectionContentsPredicate<T, P>;
export interface CollectionContentsPredicate_MultipleStatics {
  new<T, P /* extends JavaPredicate<T> */>(arg0: JavaList<P>): CollectionContentsPredicate_Multiple<T, P>;
}

/** JVM record net.minecraft.advancements.critereon.CollectionContentsPredicate$Single. */
export interface CollectionContentsPredicate_SingleMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CollectionContentsPredicate<T, P>];
  equals(arg0: object): boolean;
  hashCode(): number;
  test(): P;
  test(arg0: Iterable<T>): boolean;
  toString(): string;
  unpack(): JavaList<P>;
}
export type CollectionContentsPredicate_Single<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionContentsPredicate_SingleMembers<T, P> & JavaOpaque<"java.lang.Record"> & CollectionContentsPredicate<T, P>;
export interface CollectionContentsPredicate_SingleStatics {
  new<T, P /* extends JavaPredicate<T> */>(arg0: P): CollectionContentsPredicate_Single<T, P>;
}

/** JVM class net.minecraft.advancements.critereon.CollectionContentsPredicate$Zero. */
export interface CollectionContentsPredicate_ZeroMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [CollectionContentsPredicate<T, P>];
  test(arg0: Iterable<T>): boolean;
  unpack(): JavaList<P>;
}
export type CollectionContentsPredicate_Zero<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionContentsPredicate_ZeroMembers<T, P> & CollectionContentsPredicate<T, P>;
export interface CollectionContentsPredicate_ZeroStatics {
  new<T, P /* extends JavaPredicate<T> */>(): CollectionContentsPredicate_Zero<T, P>;
}

/** JVM interface net.minecraft.advancements.critereon.CollectionCountsPredicate. */
export interface CollectionCountsPredicateMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaPredicate<Iterable<T>>];
  unpack(): JavaList<CollectionCountsPredicate_Entry<T, P>>;
}
export type CollectionCountsPredicate<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionCountsPredicateMembers<T, P> & JavaPredicate<Iterable<T>>;
export interface CollectionCountsPredicateStatics {
  codec<T, P /* extends JavaPredicate<T> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [P]>): JavaOpaque<"com.mojang.serialization.Codec", [CollectionCountsPredicate<T, P>]>;
  of<T, P /* extends JavaPredicate<T> */>(arg0: JavaList<CollectionCountsPredicate_Entry<T, P>>): CollectionCountsPredicate<T, P>;
  of<T, P /* extends JavaPredicate<T> */>(...arg0: Array<CollectionCountsPredicate_Entry<T, P>>): CollectionCountsPredicate<T, P>;
}

/** JVM record net.minecraft.advancements.critereon.CollectionCountsPredicate$Entry. */
export interface CollectionCountsPredicate_EntryMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  count(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  test(): P;
  test(arg0: Iterable<T>): boolean;
  toString(): string;
}
export type CollectionCountsPredicate_Entry<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionCountsPredicate_EntryMembers<T, P> & JavaOpaque<"java.lang.Record">;
export interface CollectionCountsPredicate_EntryStatics {
  new<T, P /* extends JavaPredicate<T> */>(arg0: P, arg1: MinMaxBounds_Ints): CollectionCountsPredicate_Entry<T, P>;
  codec<T, P /* extends JavaPredicate<T> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [P]>): JavaOpaque<"com.mojang.serialization.Codec", [CollectionCountsPredicate_Entry<T, P>]>;
}

/** JVM record net.minecraft.advancements.critereon.CollectionCountsPredicate$Multiple. */
export interface CollectionCountsPredicate_MultipleMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CollectionCountsPredicate<T, P>];
  entries(): JavaList<CollectionCountsPredicate_Entry<T, P>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  test(arg0: Iterable<T>): boolean;
  toString(): string;
  unpack(): JavaList<CollectionCountsPredicate_Entry<T, P>>;
}
export type CollectionCountsPredicate_Multiple<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionCountsPredicate_MultipleMembers<T, P> & JavaOpaque<"java.lang.Record"> & CollectionCountsPredicate<T, P>;
export interface CollectionCountsPredicate_MultipleStatics {
  new<T, P /* extends JavaPredicate<T> */>(arg0: JavaList<CollectionCountsPredicate_Entry<T, P>>): CollectionCountsPredicate_Multiple<T, P>;
}

/** JVM record net.minecraft.advancements.critereon.CollectionCountsPredicate$Single. */
export interface CollectionCountsPredicate_SingleMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CollectionCountsPredicate<T, P>];
  entry(): CollectionCountsPredicate_Entry<T, P>;
  equals(arg0: object): boolean;
  hashCode(): number;
  test(arg0: Iterable<T>): boolean;
  toString(): string;
  unpack(): JavaList<CollectionCountsPredicate_Entry<T, P>>;
}
export type CollectionCountsPredicate_Single<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionCountsPredicate_SingleMembers<T, P> & JavaOpaque<"java.lang.Record"> & CollectionCountsPredicate<T, P>;
export interface CollectionCountsPredicate_SingleStatics {
  new<T, P /* extends JavaPredicate<T> */>(arg0: CollectionCountsPredicate_Entry<T, P>): CollectionCountsPredicate_Single<T, P>;
}

/** JVM class net.minecraft.advancements.critereon.CollectionCountsPredicate$Zero. */
export interface CollectionCountsPredicate_ZeroMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [CollectionCountsPredicate<T, P>];
  test(arg0: Iterable<T>): boolean;
  unpack(): JavaList<CollectionCountsPredicate_Entry<T, P>>;
}
export type CollectionCountsPredicate_Zero<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionCountsPredicate_ZeroMembers<T, P> & CollectionCountsPredicate<T, P>;
export interface CollectionCountsPredicate_ZeroStatics {
  new<T, P /* extends JavaPredicate<T> */>(): CollectionCountsPredicate_Zero<T, P>;
}

/** JVM record net.minecraft.advancements.critereon.CollectionPredicate. */
export interface CollectionPredicateMembers<T = unknown, P /* extends JavaPredicate<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<Iterable<T>>];
  contains(): JavaOptional<CollectionContentsPredicate<T, P>>;
  counts(): JavaOptional<CollectionCountsPredicate<T, P>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  size(): JavaOptional<MinMaxBounds_Ints>;
  test(arg0: Iterable<T>): boolean;
  toString(): string;
}
export type CollectionPredicate<T = unknown, P /* extends JavaPredicate<T> */ = unknown> = CollectionPredicateMembers<T, P> & JavaOpaque<"java.lang.Record"> & JavaPredicate<Iterable<T>>;
export interface CollectionPredicateStatics {
  new<T, P /* extends JavaPredicate<T> */>(arg0: JavaOptional<CollectionContentsPredicate<T, P>>, arg1: JavaOptional<CollectionCountsPredicate<T, P>>, arg2: JavaOptional<MinMaxBounds_Ints>): CollectionPredicate<T, P>;
  codec<T, P /* extends JavaPredicate<T> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [P]>): JavaOpaque<"com.mojang.serialization.Codec", [CollectionPredicate<T, P>]>;
}

/** JVM class net.minecraft.advancements.critereon.ConstructBeaconTrigger. */
export interface ConstructBeaconTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ConstructBeaconTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ConstructBeaconTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: number): void;
}
export type ConstructBeaconTrigger = ConstructBeaconTriggerMembers & SimpleCriterionTrigger<ConstructBeaconTrigger_TriggerInstance>;
export interface ConstructBeaconTriggerStatics {
  new(): ConstructBeaconTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ConstructBeaconTrigger$TriggerInstance. */
export interface ConstructBeaconTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): MinMaxBounds_Ints;
  matches(arg0: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type ConstructBeaconTrigger_TriggerInstance = ConstructBeaconTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ConstructBeaconTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: MinMaxBounds_Ints): ConstructBeaconTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ConstructBeaconTrigger_TriggerInstance]>;
  constructedBeacon(): j_net_minecraft_advancements.Criterion<ConstructBeaconTrigger_TriggerInstance>;
  constructedBeacon(arg0: MinMaxBounds_Ints): j_net_minecraft_advancements.Criterion<ConstructBeaconTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.ConsumeItemTrigger. */
export interface ConsumeItemTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ConsumeItemTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ConsumeItemTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack): void;
}
export type ConsumeItemTrigger = ConsumeItemTriggerMembers & SimpleCriterionTrigger<ConsumeItemTrigger_TriggerInstance>;
export interface ConsumeItemTriggerStatics {
  new(): ConsumeItemTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ConsumeItemTrigger$TriggerInstance. */
export interface ConsumeItemTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type ConsumeItemTrigger_TriggerInstance = ConsumeItemTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ConsumeItemTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>): ConsumeItemTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ConsumeItemTrigger_TriggerInstance]>;
  usedItem(): j_net_minecraft_advancements.Criterion<ConsumeItemTrigger_TriggerInstance>;
  usedItem(arg0: ItemPredicate_Builder): j_net_minecraft_advancements.Criterion<ConsumeItemTrigger_TriggerInstance>;
  usedItem(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_world_level.ItemLike): j_net_minecraft_advancements.Criterion<ConsumeItemTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.ContextAwarePredicate. */
export interface ContextAwarePredicateMembers {
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  validate(arg0: j_net_minecraft_world_level_storage_loot.ValidationContext): void;
}
export type ContextAwarePredicate = ContextAwarePredicateMembers;
export interface ContextAwarePredicateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ContextAwarePredicate]>;
  create(...arg0: Array<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>): ContextAwarePredicate;
}

/** JVM class net.minecraft.advancements.critereon.CriterionValidator. */
export interface CriterionValidatorMembers {
  validate(arg0: JavaList<ContextAwarePredicate>, arg1: j_net_minecraft_util_context.ContextKeySet, arg2: string): void;
  validate(arg0: ContextAwarePredicate, arg1: j_net_minecraft_util_context.ContextKeySet, arg2: string): void;
  validateEntities(arg0: JavaList<ContextAwarePredicate>, arg1: string): void;
  validateEntity(arg0: JavaOptional<ContextAwarePredicate>, arg1: string): void;
  validateEntity(arg0: ContextAwarePredicate, arg1: string): void;
}
export type CriterionValidator = CriterionValidatorMembers;
export interface CriterionValidatorStatics {
  new(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_core.HolderGetter_Provider): CriterionValidator;
}

/** JVM class net.minecraft.advancements.critereon.CuredZombieVillagerTrigger. */
export interface CuredZombieVillagerTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<CuredZombieVillagerTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [CuredZombieVillagerTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity_monster.Zombie, arg2: j_net_minecraft_world_entity_npc.Villager): void;
}
export type CuredZombieVillagerTrigger = CuredZombieVillagerTriggerMembers & SimpleCriterionTrigger<CuredZombieVillagerTrigger_TriggerInstance>;
export interface CuredZombieVillagerTriggerStatics {
  new(): CuredZombieVillagerTrigger;
}

/** JVM record net.minecraft.advancements.critereon.CuredZombieVillagerTrigger$TriggerInstance. */
export interface CuredZombieVillagerTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
  villager(): JavaOptional<ContextAwarePredicate>;
  zombie(): JavaOptional<ContextAwarePredicate>;
}
export type CuredZombieVillagerTrigger_TriggerInstance = CuredZombieVillagerTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface CuredZombieVillagerTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>, arg2: JavaOptional<ContextAwarePredicate>): CuredZombieVillagerTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CuredZombieVillagerTrigger_TriggerInstance]>;
  curedZombieVillager(): j_net_minecraft_advancements.Criterion<CuredZombieVillagerTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.DamagePredicate. */
export interface DamagePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blocked(): JavaOptional<boolean>;
  dealtDamage(): MinMaxBounds_Doubles;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: number, arg4: boolean): boolean;
  sourceEntity(): JavaOptional<EntityPredicate>;
  takenDamage(): MinMaxBounds_Doubles;
  toString(): string;
  type(): JavaOptional<DamageSourcePredicate>;
}
export type DamagePredicate = DamagePredicateMembers & JavaOpaque<"java.lang.Record">;
export interface DamagePredicateStatics {
  new(arg0: MinMaxBounds_Doubles, arg1: MinMaxBounds_Doubles, arg2: JavaOptional<EntityPredicate>, arg3: JavaOptional<boolean>, arg4: JavaOptional<DamageSourcePredicate>): DamagePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamagePredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.DamagePredicate$Builder. */
export interface DamagePredicate_BuilderMembers {
  blocked(arg0: boolean): DamagePredicate_Builder;
  build(): DamagePredicate;
  dealtDamage(arg0: MinMaxBounds_Doubles): DamagePredicate_Builder;
  sourceEntity(arg0: EntityPredicate): DamagePredicate_Builder;
  takenDamage(arg0: MinMaxBounds_Doubles): DamagePredicate_Builder;
  type(arg0: DamageSourcePredicate_Builder): DamagePredicate_Builder;
  type(arg0: DamageSourcePredicate): DamagePredicate_Builder;
}
export type DamagePredicate_Builder = DamagePredicate_BuilderMembers;
export interface DamagePredicate_BuilderStatics {
  new(): DamagePredicate_Builder;
  damageInstance(): DamagePredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.DamageSourcePredicate. */
export interface DamageSourcePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  directEntity(): JavaOptional<EntityPredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isDirect(): JavaOptional<boolean>;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  sourceEntity(): JavaOptional<EntityPredicate>;
  tags(): JavaList<TagPredicate<j_net_minecraft_world_damagesource.DamageType>>;
  toString(): string;
}
export type DamageSourcePredicate = DamageSourcePredicateMembers & JavaOpaque<"java.lang.Record">;
export interface DamageSourcePredicateStatics {
  new(arg0: JavaList<TagPredicate<j_net_minecraft_world_damagesource.DamageType>>, arg1: JavaOptional<EntityPredicate>, arg2: JavaOptional<EntityPredicate>, arg3: JavaOptional<boolean>): DamageSourcePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamageSourcePredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.DamageSourcePredicate$Builder. */
export interface DamageSourcePredicate_BuilderMembers {
  build(): DamageSourcePredicate;
  direct(arg0: EntityPredicate_Builder): DamageSourcePredicate_Builder;
  isDirect(arg0: boolean): DamageSourcePredicate_Builder;
  source(arg0: EntityPredicate_Builder): DamageSourcePredicate_Builder;
  tag(arg0: TagPredicate<j_net_minecraft_world_damagesource.DamageType>): DamageSourcePredicate_Builder;
}
export type DamageSourcePredicate_Builder = DamageSourcePredicate_BuilderMembers;
export interface DamageSourcePredicate_BuilderStatics {
  new(): DamageSourcePredicate_Builder;
  damageType(): DamageSourcePredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.DataComponentMatchers. */
export interface DataComponentMatchersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<j_net_minecraft_core_component.DataComponentGetter>];
  equals(arg0: object): boolean;
  exact(): j_net_minecraft_core_component.DataComponentExactPredicate;
  hashCode(): number;
  isEmpty(): boolean;
  partial(): JavaMap<j_net_minecraft_core_component_predicates.DataComponentPredicate_Type<object>, j_net_minecraft_core_component_predicates.DataComponentPredicate>;
  test(arg0: j_net_minecraft_core_component.DataComponentGetter): boolean;
  toString(): string;
}
export type DataComponentMatchers = DataComponentMatchersMembers & JavaOpaque<"java.lang.Record"> & JavaPredicate<j_net_minecraft_core_component.DataComponentGetter>;
export interface DataComponentMatchersStatics {
  new(arg0: j_net_minecraft_core_component.DataComponentExactPredicate, arg1: JavaMap<j_net_minecraft_core_component_predicates.DataComponentPredicate_Type<object>, j_net_minecraft_core_component_predicates.DataComponentPredicate>): DataComponentMatchers;
  readonly ANY: DataComponentMatchers;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DataComponentMatchers]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentMatchers>;
}

/** JVM class net.minecraft.advancements.critereon.DataComponentMatchers$Builder. */
export interface DataComponentMatchers_BuilderMembers {
  build(): DataComponentMatchers;
  exact(arg0: j_net_minecraft_core_component.DataComponentExactPredicate): DataComponentMatchers_Builder;
  partial<T /* extends j_net_minecraft_core_component_predicates.DataComponentPredicate */>(arg0: j_net_minecraft_core_component_predicates.DataComponentPredicate_Type<T>, arg1: T): DataComponentMatchers_Builder;
}
export type DataComponentMatchers_Builder = DataComponentMatchers_BuilderMembers;
export interface DataComponentMatchers_BuilderStatics {
  components(): DataComponentMatchers_Builder;
}

/** JVM class net.minecraft.advancements.critereon.DefaultBlockInteractionTrigger. */
export interface DefaultBlockInteractionTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<DefaultBlockInteractionTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [DefaultBlockInteractionTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_core.BlockPos): void;
}
export type DefaultBlockInteractionTrigger = DefaultBlockInteractionTriggerMembers & SimpleCriterionTrigger<DefaultBlockInteractionTrigger_TriggerInstance>;
export interface DefaultBlockInteractionTriggerStatics {
  new(): DefaultBlockInteractionTrigger;
}

/** JVM record net.minecraft.advancements.critereon.DefaultBlockInteractionTrigger$TriggerInstance. */
export interface DefaultBlockInteractionTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  location(): JavaOptional<ContextAwarePredicate>;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type DefaultBlockInteractionTrigger_TriggerInstance = DefaultBlockInteractionTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface DefaultBlockInteractionTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>): DefaultBlockInteractionTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DefaultBlockInteractionTrigger_TriggerInstance]>;
}

/** JVM record net.minecraft.advancements.critereon.DistancePredicate. */
export interface DistancePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  absolute(): MinMaxBounds_Doubles;
  equals(arg0: object): boolean;
  hashCode(): number;
  horizontal(): MinMaxBounds_Doubles;
  matches(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
  toString(): string;
  x(): MinMaxBounds_Doubles;
  y(): MinMaxBounds_Doubles;
  z(): MinMaxBounds_Doubles;
}
export type DistancePredicate = DistancePredicateMembers & JavaOpaque<"java.lang.Record">;
export interface DistancePredicateStatics {
  new(arg0: MinMaxBounds_Doubles, arg1: MinMaxBounds_Doubles, arg2: MinMaxBounds_Doubles, arg3: MinMaxBounds_Doubles, arg4: MinMaxBounds_Doubles): DistancePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DistancePredicate]>;
  absolute(arg0: MinMaxBounds_Doubles): DistancePredicate;
  horizontal(arg0: MinMaxBounds_Doubles): DistancePredicate;
  vertical(arg0: MinMaxBounds_Doubles): DistancePredicate;
}

/** JVM class net.minecraft.advancements.critereon.DistanceTrigger. */
export interface DistanceTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<DistanceTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [DistanceTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_phys.Vec3): void;
}
export type DistanceTrigger = DistanceTriggerMembers & SimpleCriterionTrigger<DistanceTrigger_TriggerInstance>;
export interface DistanceTriggerStatics {
  new(): DistanceTrigger;
}

/** JVM record net.minecraft.advancements.critereon.DistanceTrigger$TriggerInstance. */
export interface DistanceTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  distance(): JavaOptional<DistancePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  startPosition(): JavaOptional<LocationPredicate>;
  toString(): string;
}
export type DistanceTrigger_TriggerInstance = DistanceTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface DistanceTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<LocationPredicate>, arg2: JavaOptional<DistancePredicate>): DistanceTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DistanceTrigger_TriggerInstance]>;
  fallFromHeight(arg0: EntityPredicate_Builder, arg1: DistancePredicate, arg2: LocationPredicate_Builder): j_net_minecraft_advancements.Criterion<DistanceTrigger_TriggerInstance>;
  rideEntityInLava(arg0: EntityPredicate_Builder, arg1: DistancePredicate): j_net_minecraft_advancements.Criterion<DistanceTrigger_TriggerInstance>;
  travelledThroughNether(arg0: DistancePredicate): j_net_minecraft_advancements.Criterion<DistanceTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.EffectsChangedTrigger. */
export interface EffectsChangedTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<EffectsChangedTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [EffectsChangedTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity | null): void;
}
export type EffectsChangedTrigger = EffectsChangedTriggerMembers & SimpleCriterionTrigger<EffectsChangedTrigger_TriggerInstance>;
export interface EffectsChangedTriggerStatics {
  new(): EffectsChangedTrigger;
}

/** JVM record net.minecraft.advancements.critereon.EffectsChangedTrigger$TriggerInstance. */
export interface EffectsChangedTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  effects(): JavaOptional<MobEffectsPredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level_storage_loot.LootContext | null): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  source(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type EffectsChangedTrigger_TriggerInstance = EffectsChangedTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface EffectsChangedTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<MobEffectsPredicate>, arg2: JavaOptional<ContextAwarePredicate>): EffectsChangedTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EffectsChangedTrigger_TriggerInstance]>;
  gotEffectsFrom(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<EffectsChangedTrigger_TriggerInstance>;
  hasEffects(arg0: MobEffectsPredicate_Builder): j_net_minecraft_advancements.Criterion<EffectsChangedTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.EnchantedItemTrigger. */
export interface EnchantedItemTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<EnchantedItemTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [EnchantedItemTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): void;
}
export type EnchantedItemTrigger = EnchantedItemTriggerMembers & SimpleCriterionTrigger<EnchantedItemTrigger_TriggerInstance>;
export interface EnchantedItemTriggerStatics {
  new(): EnchantedItemTrigger;
}

/** JVM record net.minecraft.advancements.critereon.EnchantedItemTrigger$TriggerInstance. */
export interface EnchantedItemTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  levels(): MinMaxBounds_Ints;
  matches(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type EnchantedItemTrigger_TriggerInstance = EnchantedItemTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface EnchantedItemTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: MinMaxBounds_Ints): EnchantedItemTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantedItemTrigger_TriggerInstance]>;
  enchantedItem(): j_net_minecraft_advancements.Criterion<EnchantedItemTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.EnchantmentPredicate. */
export interface EnchantmentPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  containedIn(arg0: j_net_minecraft_world_item_enchantment.ItemEnchantments): boolean;
  enchantments(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): MinMaxBounds_Ints;
  toString(): string;
}
export type EnchantmentPredicate = EnchantmentPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface EnchantmentPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>>, arg1: MinMaxBounds_Ints): EnchantmentPredicate;
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: MinMaxBounds_Ints): EnchantmentPredicate;
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: MinMaxBounds_Ints): EnchantmentPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.EnterBlockTrigger. */
export interface EnterBlockTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<EnterBlockTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [EnterBlockTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type EnterBlockTrigger = EnterBlockTriggerMembers & SimpleCriterionTrigger<EnterBlockTrigger_TriggerInstance>;
export interface EnterBlockTriggerStatics {
  new(): EnterBlockTrigger;
}

/** JVM record net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance. */
export interface EnterBlockTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  block(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  state(): JavaOptional<StatePropertiesPredicate>;
  toString(): string;
}
export type EnterBlockTrigger_TriggerInstance = EnterBlockTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface EnterBlockTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>>, arg2: JavaOptional<StatePropertiesPredicate>): EnterBlockTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnterBlockTrigger_TriggerInstance]>;
  entersBlock(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_advancements.Criterion<EnterBlockTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.EntityEquipmentPredicate. */
export interface EntityEquipmentPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  body(): JavaOptional<ItemPredicate>;
  chest(): JavaOptional<ItemPredicate>;
  equals(arg0: object): boolean;
  feet(): JavaOptional<ItemPredicate>;
  hashCode(): number;
  head(): JavaOptional<ItemPredicate>;
  legs(): JavaOptional<ItemPredicate>;
  mainhand(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_entity.Entity | null): boolean;
  offhand(): JavaOptional<ItemPredicate>;
  toString(): string;
}
export type EntityEquipmentPredicate = EntityEquipmentPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface EntityEquipmentPredicateStatics {
  new(arg0: JavaOptional<ItemPredicate>, arg1: JavaOptional<ItemPredicate>, arg2: JavaOptional<ItemPredicate>, arg3: JavaOptional<ItemPredicate>, arg4: JavaOptional<ItemPredicate>, arg5: JavaOptional<ItemPredicate>, arg6: JavaOptional<ItemPredicate>): EntityEquipmentPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityEquipmentPredicate]>;
  captainPredicate(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block_entity.BannerPattern>): EntityEquipmentPredicate;
}

/** JVM class net.minecraft.advancements.critereon.EntityEquipmentPredicate$Builder. */
export interface EntityEquipmentPredicate_BuilderMembers {
  body(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
  build(): EntityEquipmentPredicate;
  chest(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
  feet(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
  head(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
  legs(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
  mainhand(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
  offhand(arg0: ItemPredicate_Builder): EntityEquipmentPredicate_Builder;
}
export type EntityEquipmentPredicate_Builder = EntityEquipmentPredicate_BuilderMembers;
export interface EntityEquipmentPredicate_BuilderStatics {
  new(): EntityEquipmentPredicate_Builder;
  equipment(): EntityEquipmentPredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.EntityFlagsPredicate. */
export interface EntityFlagsPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isBaby(): JavaOptional<boolean>;
  isCrouching(): JavaOptional<boolean>;
  isFlying(): JavaOptional<boolean>;
  isOnFire(): JavaOptional<boolean>;
  isOnGround(): JavaOptional<boolean>;
  isSprinting(): JavaOptional<boolean>;
  isSwimming(): JavaOptional<boolean>;
  matches(arg0: j_net_minecraft_world_entity.Entity): boolean;
  toString(): string;
}
export type EntityFlagsPredicate = EntityFlagsPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface EntityFlagsPredicateStatics {
  new(arg0: JavaOptional<boolean>, arg1: JavaOptional<boolean>, arg2: JavaOptional<boolean>, arg3: JavaOptional<boolean>, arg4: JavaOptional<boolean>, arg5: JavaOptional<boolean>, arg6: JavaOptional<boolean>): EntityFlagsPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityFlagsPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.EntityFlagsPredicate$Builder. */
export interface EntityFlagsPredicate_BuilderMembers {
  build(): EntityFlagsPredicate;
  setCrouching(arg0: boolean): EntityFlagsPredicate_Builder;
  setIsBaby(arg0: boolean): EntityFlagsPredicate_Builder;
  setIsFlying(arg0: boolean): EntityFlagsPredicate_Builder;
  setOnFire(arg0: boolean): EntityFlagsPredicate_Builder;
  setOnGround(arg0: boolean): EntityFlagsPredicate_Builder;
  setSprinting(arg0: boolean): EntityFlagsPredicate_Builder;
  setSwimming(arg0: boolean): EntityFlagsPredicate_Builder;
}
export type EntityFlagsPredicate_Builder = EntityFlagsPredicate_BuilderMembers;
export interface EntityFlagsPredicate_BuilderStatics {
  new(): EntityFlagsPredicate_Builder;
  flags(): EntityFlagsPredicate_Builder;
}

/** JVM class net.minecraft.advancements.critereon.EntityHurtPlayerTrigger. */
export interface EntityHurtPlayerTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<EntityHurtPlayerTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [EntityHurtPlayerTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: number, arg4: boolean): void;
}
export type EntityHurtPlayerTrigger = EntityHurtPlayerTriggerMembers & SimpleCriterionTrigger<EntityHurtPlayerTrigger_TriggerInstance>;
export interface EntityHurtPlayerTriggerStatics {
  new(): EntityHurtPlayerTrigger;
}

/** JVM record net.minecraft.advancements.critereon.EntityHurtPlayerTrigger$TriggerInstance. */
export interface EntityHurtPlayerTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  damage(): JavaOptional<DamagePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: number, arg4: boolean): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type EntityHurtPlayerTrigger_TriggerInstance = EntityHurtPlayerTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface EntityHurtPlayerTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<DamagePredicate>): EntityHurtPlayerTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityHurtPlayerTrigger_TriggerInstance]>;
  entityHurtPlayer(): j_net_minecraft_advancements.Criterion<EntityHurtPlayerTrigger_TriggerInstance>;
  entityHurtPlayer(arg0: DamagePredicate_Builder): j_net_minecraft_advancements.Criterion<EntityHurtPlayerTrigger_TriggerInstance>;
  entityHurtPlayer(arg0: DamagePredicate): j_net_minecraft_advancements.Criterion<EntityHurtPlayerTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.EntityPredicate. */
export interface EntityPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  components(): DataComponentMatchers;
  distanceToPlayer(): JavaOptional<DistancePredicate>;
  effects(): JavaOptional<MobEffectsPredicate>;
  entityType(): JavaOptional<EntityTypePredicate>;
  equals(arg0: object): boolean;
  equipment(): JavaOptional<EntityEquipmentPredicate>;
  flags(): JavaOptional<EntityFlagsPredicate>;
  hashCode(): number;
  location(): EntityPredicate_LocationWrapper;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3 | null, arg2: j_net_minecraft_world_entity.Entity | null): boolean;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity | null): boolean;
  movement(): JavaOptional<MovementPredicate>;
  nbt(): JavaOptional<NbtPredicate>;
  passenger(): JavaOptional<EntityPredicate>;
  periodicTick(): JavaOptional<number>;
  slots(): JavaOptional<SlotsPredicate>;
  subPredicate(): JavaOptional<EntitySubPredicate>;
  targetedEntity(): JavaOptional<EntityPredicate>;
  team(): JavaOptional<string>;
  toString(): string;
  vehicle(): JavaOptional<EntityPredicate>;
}
export type EntityPredicate = EntityPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface EntityPredicateStatics {
  new(arg0: JavaOptional<EntityTypePredicate>, arg1: JavaOptional<DistancePredicate>, arg2: JavaOptional<MovementPredicate>, arg3: EntityPredicate_LocationWrapper, arg4: JavaOptional<MobEffectsPredicate>, arg5: JavaOptional<NbtPredicate>, arg6: JavaOptional<EntityFlagsPredicate>, arg7: JavaOptional<EntityEquipmentPredicate>, arg8: JavaOptional<EntitySubPredicate>, arg9: JavaOptional<number>, arg10: JavaOptional<EntityPredicate>, arg11: JavaOptional<EntityPredicate>, arg12: JavaOptional<EntityPredicate>, arg13: JavaOptional<string>, arg14: JavaOptional<SlotsPredicate>, arg15: DataComponentMatchers): EntityPredicate;
  readonly ADVANCEMENT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ContextAwarePredicate]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityPredicate]>;
  createContext(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_level_storage_loot.LootContext;
  wrap(arg0: JavaOptional<EntityPredicate>): JavaOptional<ContextAwarePredicate>;
  wrap(arg0: EntityPredicate_Builder): ContextAwarePredicate;
  wrap(arg0: EntityPredicate): ContextAwarePredicate;
  wrap(...arg0: Array<EntityPredicate_Builder>): JavaList<ContextAwarePredicate>;
}

/** JVM class net.minecraft.advancements.critereon.EntityPredicate$Builder. */
export interface EntityPredicate_BuilderMembers {
  build(): EntityPredicate;
  components(arg0: DataComponentMatchers): EntityPredicate_Builder;
  distance(arg0: DistancePredicate): EntityPredicate_Builder;
  effects(arg0: MobEffectsPredicate_Builder): EntityPredicate_Builder;
  entityType(arg0: EntityTypePredicate): EntityPredicate_Builder;
  equipment(arg0: EntityEquipmentPredicate_Builder): EntityPredicate_Builder;
  equipment(arg0: EntityEquipmentPredicate): EntityPredicate_Builder;
  flags(arg0: EntityFlagsPredicate_Builder): EntityPredicate_Builder;
  located(arg0: LocationPredicate_Builder): EntityPredicate_Builder;
  movementAffectedBy(arg0: LocationPredicate_Builder): EntityPredicate_Builder;
  moving(arg0: MovementPredicate): EntityPredicate_Builder;
  nbt(arg0: NbtPredicate): EntityPredicate_Builder;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_entity.EntityType<object>>): EntityPredicate_Builder;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg1: j_net_minecraft_world_entity.EntityType<object>): EntityPredicate_Builder;
  passenger(arg0: EntityPredicate_Builder): EntityPredicate_Builder;
  periodicTick(arg0: number): EntityPredicate_Builder;
  slots(arg0: SlotsPredicate): EntityPredicate_Builder;
  steppingOn(arg0: LocationPredicate_Builder): EntityPredicate_Builder;
  subPredicate(arg0: EntitySubPredicate): EntityPredicate_Builder;
  targetedEntity(arg0: EntityPredicate_Builder): EntityPredicate_Builder;
  team(arg0: string): EntityPredicate_Builder;
  vehicle(arg0: EntityPredicate_Builder): EntityPredicate_Builder;
}
export type EntityPredicate_Builder = EntityPredicate_BuilderMembers;
export interface EntityPredicate_BuilderStatics {
  new(): EntityPredicate_Builder;
  entity(): EntityPredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.EntityPredicate$LocationWrapper. */
export interface EntityPredicate_LocationWrapperMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  affectsMovement(): JavaOptional<LocationPredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  located(): JavaOptional<LocationPredicate>;
  steppingOn(): JavaOptional<LocationPredicate>;
  toString(): string;
}
export type EntityPredicate_LocationWrapper = EntityPredicate_LocationWrapperMembers & JavaOpaque<"java.lang.Record">;
export interface EntityPredicate_LocationWrapperStatics {
  new(arg0: JavaOptional<LocationPredicate>, arg1: JavaOptional<LocationPredicate>, arg2: JavaOptional<LocationPredicate>): EntityPredicate_LocationWrapper;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EntityPredicate_LocationWrapper]>;
}

/** JVM interface net.minecraft.advancements.critereon.EntitySubPredicate. */
export interface EntitySubPredicateMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EntitySubPredicate]>;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
}
export type EntitySubPredicate = EntitySubPredicateMembers;
export interface EntitySubPredicateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntitySubPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.EntitySubPredicates. */
export interface EntitySubPredicatesMembers {
}
export type EntitySubPredicates = EntitySubPredicatesMembers;
export interface EntitySubPredicatesStatics {
  new(): EntitySubPredicates;
  readonly FISHING_HOOK: JavaOpaque<"com.mojang.serialization.MapCodec", [FishingHookPredicate]>;
  readonly LIGHTNING: JavaOpaque<"com.mojang.serialization.MapCodec", [LightningBoltPredicate]>;
  readonly PLAYER: JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerPredicate]>;
  readonly RAIDER: JavaOpaque<"com.mojang.serialization.MapCodec", [RaiderPredicate]>;
  readonly SHEEP: JavaOpaque<"com.mojang.serialization.MapCodec", [SheepPredicate]>;
  readonly SLIME: JavaOpaque<"com.mojang.serialization.MapCodec", [SlimePredicate]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [EntitySubPredicate]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [EntitySubPredicate]>;
}

/** JVM record net.minecraft.advancements.critereon.EntityTypePredicate. */
export interface EntityTypePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  toString(): string;
  types(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>;
}
export type EntityTypePredicate = EntityTypePredicateMembers & JavaOpaque<"java.lang.Record">;
export interface EntityTypePredicateStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>): EntityTypePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityTypePredicate]>;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_entity.EntityType<object>>): EntityTypePredicate;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg1: j_net_minecraft_world_entity.EntityType<object>): EntityTypePredicate;
}

/** JVM class net.minecraft.advancements.critereon.FallAfterExplosionTrigger. */
export interface FallAfterExplosionTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<FallAfterExplosionTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [FallAfterExplosionTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_entity.Entity | null): void;
}
export type FallAfterExplosionTrigger = FallAfterExplosionTriggerMembers & SimpleCriterionTrigger<FallAfterExplosionTrigger_TriggerInstance>;
export interface FallAfterExplosionTriggerStatics {
  new(): FallAfterExplosionTrigger;
}

/** JVM record net.minecraft.advancements.critereon.FallAfterExplosionTrigger$TriggerInstance. */
export interface FallAfterExplosionTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  cause(): JavaOptional<ContextAwarePredicate>;
  distance(): JavaOptional<DistancePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_level_storage_loot.LootContext | null): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  startPosition(): JavaOptional<LocationPredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type FallAfterExplosionTrigger_TriggerInstance = FallAfterExplosionTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface FallAfterExplosionTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<LocationPredicate>, arg2: JavaOptional<DistancePredicate>, arg3: JavaOptional<ContextAwarePredicate>): FallAfterExplosionTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FallAfterExplosionTrigger_TriggerInstance]>;
  fallAfterExplosion(arg0: DistancePredicate, arg1: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<FallAfterExplosionTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.FilledBucketTrigger. */
export interface FilledBucketTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<FilledBucketTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [FilledBucketTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack): void;
}
export type FilledBucketTrigger = FilledBucketTriggerMembers & SimpleCriterionTrigger<FilledBucketTrigger_TriggerInstance>;
export interface FilledBucketTriggerStatics {
  new(): FilledBucketTrigger;
}

/** JVM record net.minecraft.advancements.critereon.FilledBucketTrigger$TriggerInstance. */
export interface FilledBucketTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type FilledBucketTrigger_TriggerInstance = FilledBucketTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface FilledBucketTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>): FilledBucketTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FilledBucketTrigger_TriggerInstance]>;
  filledBucket(arg0: ItemPredicate_Builder): j_net_minecraft_advancements.Criterion<FilledBucketTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.FishingHookPredicate. */
export interface FishingHookPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EntitySubPredicate];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FishingHookPredicate]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  inOpenWater(): JavaOptional<boolean>;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
  toString(): string;
}
export type FishingHookPredicate = FishingHookPredicateMembers & JavaOpaque<"java.lang.Record"> & EntitySubPredicate;
export interface FishingHookPredicateStatics {
  new(arg0: JavaOptional<boolean>): FishingHookPredicate;
  readonly ANY: FishingHookPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FishingHookPredicate]>;
  inOpenWater(arg0: boolean): FishingHookPredicate;
}

/** JVM class net.minecraft.advancements.critereon.FishingRodHookedTrigger. */
export interface FishingRodHookedTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<FishingRodHookedTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [FishingRodHookedTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity_projectile.FishingHook, arg3: JavaCollection<j_net_minecraft_world_item.ItemStack>): void;
}
export type FishingRodHookedTrigger = FishingRodHookedTriggerMembers & SimpleCriterionTrigger<FishingRodHookedTrigger_TriggerInstance>;
export interface FishingRodHookedTriggerStatics {
  new(): FishingRodHookedTrigger;
}

/** JVM record net.minecraft.advancements.critereon.FishingRodHookedTrigger$TriggerInstance. */
export interface FishingRodHookedTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  entity(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext, arg2: JavaCollection<j_net_minecraft_world_item.ItemStack>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  rod(): JavaOptional<ItemPredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type FishingRodHookedTrigger_TriggerInstance = FishingRodHookedTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface FishingRodHookedTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: JavaOptional<ContextAwarePredicate>, arg3: JavaOptional<ItemPredicate>): FishingRodHookedTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FishingRodHookedTrigger_TriggerInstance]>;
  fishedItem(arg0: JavaOptional<ItemPredicate>, arg1: JavaOptional<EntityPredicate>, arg2: JavaOptional<ItemPredicate>): j_net_minecraft_advancements.Criterion<FishingRodHookedTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.FluidPredicate. */
export interface FluidPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  fluids(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_material.Fluid>>;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  properties(): JavaOptional<StatePropertiesPredicate>;
  toString(): string;
}
export type FluidPredicate = FluidPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface FluidPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_material.Fluid>>, arg1: JavaOptional<StatePropertiesPredicate>): FluidPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FluidPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.FluidPredicate$Builder. */
export interface FluidPredicate_BuilderMembers {
  build(): FluidPredicate;
  of(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_material.Fluid>): FluidPredicate_Builder;
  of(arg0: j_net_minecraft_world_level_material.Fluid): FluidPredicate_Builder;
  setProperties(arg0: StatePropertiesPredicate): FluidPredicate_Builder;
}
export type FluidPredicate_Builder = FluidPredicate_BuilderMembers;
export interface FluidPredicate_BuilderStatics {
  fluid(): FluidPredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.GameTypePredicate. */
export interface GameTypePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level.GameType): boolean;
  toString(): string;
  types(): JavaList<j_net_minecraft_world_level.GameType>;
}
export type GameTypePredicate = GameTypePredicateMembers & JavaOpaque<"java.lang.Record">;
export interface GameTypePredicateStatics {
  new(arg0: JavaList<j_net_minecraft_world_level.GameType>): GameTypePredicate;
  readonly ANY: GameTypePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GameTypePredicate]>;
  readonly SURVIVAL_LIKE: GameTypePredicate;
  of(...arg0: Array<j_net_minecraft_world_level.GameType>): GameTypePredicate;
}

/** JVM class net.minecraft.advancements.critereon.ImpossibleTrigger. */
export interface ImpossibleTriggerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_advancements.CriterionTrigger<ImpossibleTrigger_TriggerInstance>];
  addPlayerListener(arg0: j_net_minecraft_server.PlayerAdvancements, arg1: j_net_minecraft_advancements.CriterionTrigger_Listener<ImpossibleTrigger_TriggerInstance>): void;
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ImpossibleTrigger_TriggerInstance]>;
  removePlayerListener(arg0: j_net_minecraft_server.PlayerAdvancements, arg1: j_net_minecraft_advancements.CriterionTrigger_Listener<ImpossibleTrigger_TriggerInstance>): void;
  removePlayerListeners(arg0: j_net_minecraft_server.PlayerAdvancements): void;
}
export type ImpossibleTrigger = ImpossibleTriggerMembers & j_net_minecraft_advancements.CriterionTrigger<ImpossibleTrigger_TriggerInstance>;
export interface ImpossibleTriggerStatics {
  new(): ImpossibleTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ImpossibleTrigger$TriggerInstance. */
export interface ImpossibleTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements.CriterionTriggerInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type ImpossibleTrigger_TriggerInstance = ImpossibleTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements.CriterionTriggerInstance;
export interface ImpossibleTrigger_TriggerInstanceStatics {
  new(): ImpossibleTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ImpossibleTrigger_TriggerInstance]>;
}

/** JVM record net.minecraft.advancements.critereon.InputPredicate. */
export interface InputPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  backward(): JavaOptional<boolean>;
  equals(arg0: object): boolean;
  forward(): JavaOptional<boolean>;
  hashCode(): number;
  jump(): JavaOptional<boolean>;
  left(): JavaOptional<boolean>;
  matches(arg0: j_net_minecraft_world_entity_player.Input_2): boolean;
  right(): JavaOptional<boolean>;
  sneak(): JavaOptional<boolean>;
  sprint(): JavaOptional<boolean>;
  toString(): string;
}
export type InputPredicate = InputPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface InputPredicateStatics {
  new(arg0: JavaOptional<boolean>, arg1: JavaOptional<boolean>, arg2: JavaOptional<boolean>, arg3: JavaOptional<boolean>, arg4: JavaOptional<boolean>, arg5: JavaOptional<boolean>, arg6: JavaOptional<boolean>): InputPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [InputPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.InventoryChangeTrigger. */
export interface InventoryChangeTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<InventoryChangeTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [InventoryChangeTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_item.ItemStack): void;
}
export type InventoryChangeTrigger = InventoryChangeTriggerMembers & SimpleCriterionTrigger<InventoryChangeTrigger_TriggerInstance>;
export interface InventoryChangeTriggerStatics {
  new(): InventoryChangeTrigger;
}

/** JVM record net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance. */
export interface InventoryChangeTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  items(): JavaList<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_entity_player.Inventory, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: number, arg4: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  slots(): InventoryChangeTrigger_TriggerInstance_Slots;
  toString(): string;
}
export type InventoryChangeTrigger_TriggerInstance = InventoryChangeTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface InventoryChangeTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: InventoryChangeTrigger_TriggerInstance_Slots, arg2: JavaList<ItemPredicate>): InventoryChangeTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [InventoryChangeTrigger_TriggerInstance]>;
  hasItems(...arg0: Array<ItemPredicate_Builder>): j_net_minecraft_advancements.Criterion<InventoryChangeTrigger_TriggerInstance>;
  hasItems(...arg0: Array<ItemPredicate>): j_net_minecraft_advancements.Criterion<InventoryChangeTrigger_TriggerInstance>;
  hasItems(...arg0: Array<j_net_minecraft_world_level.ItemLike>): j_net_minecraft_advancements.Criterion<InventoryChangeTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance$Slots. */
export interface InventoryChangeTrigger_TriggerInstance_SlotsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  empty(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  full(): MinMaxBounds_Ints;
  hashCode(): number;
  matches(arg0: number, arg1: number, arg2: number): boolean;
  occupied(): MinMaxBounds_Ints;
  toString(): string;
}
export type InventoryChangeTrigger_TriggerInstance_Slots = InventoryChangeTrigger_TriggerInstance_SlotsMembers & JavaOpaque<"java.lang.Record">;
export interface InventoryChangeTrigger_TriggerInstance_SlotsStatics {
  new(arg0: MinMaxBounds_Ints, arg1: MinMaxBounds_Ints, arg2: MinMaxBounds_Ints): InventoryChangeTrigger_TriggerInstance_Slots;
  readonly ANY: InventoryChangeTrigger_TriggerInstance_Slots;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [InventoryChangeTrigger_TriggerInstance_Slots]>;
}

/** JVM class net.minecraft.advancements.critereon.ItemDurabilityTrigger. */
export interface ItemDurabilityTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ItemDurabilityTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ItemDurabilityTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): void;
}
export type ItemDurabilityTrigger = ItemDurabilityTriggerMembers & SimpleCriterionTrigger<ItemDurabilityTrigger_TriggerInstance>;
export interface ItemDurabilityTriggerStatics {
  new(): ItemDurabilityTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ItemDurabilityTrigger$TriggerInstance. */
export interface ItemDurabilityTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  delta(): MinMaxBounds_Ints;
  durability(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type ItemDurabilityTrigger_TriggerInstance = ItemDurabilityTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ItemDurabilityTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: MinMaxBounds_Ints, arg3: MinMaxBounds_Ints): ItemDurabilityTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemDurabilityTrigger_TriggerInstance]>;
  changedDurability(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: MinMaxBounds_Ints): j_net_minecraft_advancements.Criterion<ItemDurabilityTrigger_TriggerInstance>;
  changedDurability(arg0: JavaOptional<ItemPredicate>, arg1: MinMaxBounds_Ints): j_net_minecraft_advancements.Criterion<ItemDurabilityTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.ItemPredicate. */
export interface ItemPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<j_net_minecraft_world_item.ItemStack>];
  components(): DataComponentMatchers;
  count(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  items(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>>;
  test(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  toString(): string;
}
export type ItemPredicate = ItemPredicateMembers & JavaOpaque<"java.lang.Record"> & JavaPredicate<j_net_minecraft_world_item.ItemStack>;
export interface ItemPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>>, arg1: MinMaxBounds_Ints, arg2: DataComponentMatchers): ItemPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.ItemPredicate$Builder. */
export interface ItemPredicate_BuilderMembers {
  build(): ItemPredicate;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): ItemPredicate_Builder;
  of(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, ...arg1: Array<j_net_minecraft_world_level.ItemLike>): ItemPredicate_Builder;
  withComponents(arg0: DataComponentMatchers): ItemPredicate_Builder;
  withCount(arg0: MinMaxBounds_Ints): ItemPredicate_Builder;
}
export type ItemPredicate_Builder = ItemPredicate_BuilderMembers;
export interface ItemPredicate_BuilderStatics {
  new(): ItemPredicate_Builder;
  item(): ItemPredicate_Builder;
}

/** JVM class net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger. */
export interface ItemUsedOnLocationTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ItemUsedOnLocationTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ItemUsedOnLocationTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack): void;
}
export type ItemUsedOnLocationTrigger = ItemUsedOnLocationTriggerMembers & SimpleCriterionTrigger<ItemUsedOnLocationTrigger_TriggerInstance>;
export interface ItemUsedOnLocationTriggerStatics {
  new(): ItemUsedOnLocationTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger$TriggerInstance. */
export interface ItemUsedOnLocationTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  location(): JavaOptional<ContextAwarePredicate>;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type ItemUsedOnLocationTrigger_TriggerInstance = ItemUsedOnLocationTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ItemUsedOnLocationTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>): ItemUsedOnLocationTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemUsedOnLocationTrigger_TriggerInstance]>;
  allayDropItemOnBlock(arg0: LocationPredicate_Builder, arg1: ItemPredicate_Builder): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  itemUsedOnBlock(arg0: LocationPredicate_Builder, arg1: ItemPredicate_Builder): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  placedBlock(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  placedBlock(...arg0: Array<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder>): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  placedBlockWithProperties(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block_state_properties.Property<number>, arg2: number): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  placedBlockWithProperties<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block_state_properties.Property<T>, arg2: T): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  placedBlockWithProperties<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block_state_properties.Property<T>, arg2: string): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
  placedBlockWithProperties(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block_state_properties.Property<boolean>, arg2: boolean): j_net_minecraft_advancements.Criterion<ItemUsedOnLocationTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.KilledByArrowTrigger. */
export interface KilledByArrowTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<KilledByArrowTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [KilledByArrowTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: JavaCollection<j_net_minecraft_world_entity.Entity>, arg2: j_net_minecraft_world_item.ItemStack | null): void;
}
export type KilledByArrowTrigger = KilledByArrowTriggerMembers & SimpleCriterionTrigger<KilledByArrowTrigger_TriggerInstance>;
export interface KilledByArrowTriggerStatics {
  new(): KilledByArrowTrigger;
}

/** JVM record net.minecraft.advancements.critereon.KilledByArrowTrigger$TriggerInstance. */
export interface KilledByArrowTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  firedFromWeapon(): JavaOptional<ItemPredicate>;
  hashCode(): number;
  matches(arg0: JavaCollection<j_net_minecraft_world_level_storage_loot.LootContext>, arg1: number, arg2: j_net_minecraft_world_item.ItemStack | null): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  uniqueEntityTypes(): MinMaxBounds_Ints;
  validate(arg0: CriterionValidator): void;
  victims(): JavaList<ContextAwarePredicate>;
}
export type KilledByArrowTrigger_TriggerInstance = KilledByArrowTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface KilledByArrowTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaList<ContextAwarePredicate>, arg2: MinMaxBounds_Ints, arg3: JavaOptional<ItemPredicate>): KilledByArrowTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [KilledByArrowTrigger_TriggerInstance]>;
  crossbowKilled(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: MinMaxBounds_Ints): j_net_minecraft_advancements.Criterion<KilledByArrowTrigger_TriggerInstance>;
  crossbowKilled(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, ...arg1: Array<EntityPredicate_Builder>): j_net_minecraft_advancements.Criterion<KilledByArrowTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.KilledTrigger. */
export interface KilledTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<KilledTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [KilledTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_damagesource.DamageSource): void;
}
export type KilledTrigger = KilledTriggerMembers & SimpleCriterionTrigger<KilledTrigger_TriggerInstance>;
export interface KilledTriggerStatics {
  new(): KilledTrigger;
}

/** JVM record net.minecraft.advancements.critereon.KilledTrigger$TriggerInstance. */
export interface KilledTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  entityPredicate(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  killingBlow(): JavaOptional<DamageSourcePredicate>;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level_storage_loot.LootContext, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type KilledTrigger_TriggerInstance = KilledTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface KilledTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>, arg2: JavaOptional<DamageSourcePredicate>): KilledTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [KilledTrigger_TriggerInstance]>;
  entityKilledPlayer(): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  entityKilledPlayer(arg0: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  entityKilledPlayer(arg0: JavaOptional<EntityPredicate>, arg1: JavaOptional<DamageSourcePredicate>): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  entityKilledPlayer(arg0: JavaOptional<EntityPredicate>, arg1: DamageSourcePredicate_Builder): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  entityKilledPlayer(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  entityKilledPlayer(arg0: EntityPredicate_Builder, arg1: JavaOptional<DamageSourcePredicate>): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  entityKilledPlayer(arg0: EntityPredicate_Builder, arg1: DamageSourcePredicate_Builder): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(arg0: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(arg0: JavaOptional<EntityPredicate>, arg1: JavaOptional<DamageSourcePredicate>): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(arg0: JavaOptional<EntityPredicate>, arg1: DamageSourcePredicate_Builder): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(arg0: EntityPredicate_Builder, arg1: JavaOptional<DamageSourcePredicate>): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntity(arg0: EntityPredicate_Builder, arg1: DamageSourcePredicate_Builder): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
  playerKilledEntityNearSculkCatalyst(): j_net_minecraft_advancements.Criterion<KilledTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.LevitationTrigger. */
export interface LevitationTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<LevitationTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [LevitationTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_phys.Vec3, arg2: number): void;
}
export type LevitationTrigger = LevitationTriggerMembers & SimpleCriterionTrigger<LevitationTrigger_TriggerInstance>;
export interface LevitationTriggerStatics {
  new(): LevitationTrigger;
}

/** JVM record net.minecraft.advancements.critereon.LevitationTrigger$TriggerInstance. */
export interface LevitationTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  distance(): JavaOptional<DistancePredicate>;
  duration(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_phys.Vec3, arg2: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type LevitationTrigger_TriggerInstance = LevitationTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface LevitationTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<DistancePredicate>, arg2: MinMaxBounds_Ints): LevitationTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LevitationTrigger_TriggerInstance]>;
  levitated(arg0: DistancePredicate): j_net_minecraft_advancements.Criterion<LevitationTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.LightningBoltPredicate. */
export interface LightningBoltPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EntitySubPredicate];
  blocksSetOnFire(): MinMaxBounds_Ints;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LightningBoltPredicate]>;
  entityStruck(): JavaOptional<EntityPredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
  toString(): string;
}
export type LightningBoltPredicate = LightningBoltPredicateMembers & JavaOpaque<"java.lang.Record"> & EntitySubPredicate;
export interface LightningBoltPredicateStatics {
  new(arg0: MinMaxBounds_Ints, arg1: JavaOptional<EntityPredicate>): LightningBoltPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LightningBoltPredicate]>;
  blockSetOnFire(arg0: MinMaxBounds_Ints): LightningBoltPredicate;
}

/** JVM class net.minecraft.advancements.critereon.LightningStrikeTrigger. */
export interface LightningStrikeTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<LightningStrikeTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [LightningStrikeTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.LightningBolt, arg2: JavaList<j_net_minecraft_world_entity.Entity>): void;
}
export type LightningStrikeTrigger = LightningStrikeTriggerMembers & SimpleCriterionTrigger<LightningStrikeTrigger_TriggerInstance>;
export interface LightningStrikeTriggerStatics {
  new(): LightningStrikeTrigger;
}

/** JVM record net.minecraft.advancements.critereon.LightningStrikeTrigger$TriggerInstance. */
export interface LightningStrikeTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  bystander(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  lightning(): JavaOptional<ContextAwarePredicate>;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: JavaList<j_net_minecraft_world_level_storage_loot.LootContext>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type LightningStrikeTrigger_TriggerInstance = LightningStrikeTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface LightningStrikeTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>, arg2: JavaOptional<ContextAwarePredicate>): LightningStrikeTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LightningStrikeTrigger_TriggerInstance]>;
  lightningStrike(arg0: JavaOptional<EntityPredicate>, arg1: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<LightningStrikeTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.LightPredicate. */
export interface LightPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  composite(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  toString(): string;
}
export type LightPredicate = LightPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface LightPredicateStatics {
  new(arg0: MinMaxBounds_Ints): LightPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LightPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.LightPredicate$Builder. */
export interface LightPredicate_BuilderMembers {
  build(): LightPredicate;
  setComposite(arg0: MinMaxBounds_Ints): LightPredicate_Builder;
}
export type LightPredicate_Builder = LightPredicate_BuilderMembers;
export interface LightPredicate_BuilderStatics {
  new(): LightPredicate_Builder;
  light(): LightPredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.LocationPredicate. */
export interface LocationPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  biomes(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>>;
  block(): JavaOptional<BlockPredicate>;
  canSeeSky(): JavaOptional<boolean>;
  dimension(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  equals(arg0: object): boolean;
  fluid(): JavaOptional<FluidPredicate>;
  hashCode(): number;
  light(): JavaOptional<LightPredicate>;
  matches(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number, arg3: number): boolean;
  position(): JavaOptional<JavaOpaque<"net.minecraft.advancements.critereon.LocationPredicate$PositionPredicate">>;
  smokey(): JavaOptional<boolean>;
  structures(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>>;
  toString(): string;
}
export type LocationPredicate = LocationPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface LocationPredicateStatics {
  new(arg0: JavaOptional<JavaOpaque<"net.minecraft.advancements.critereon.LocationPredicate$PositionPredicate">>, arg1: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>>, arg2: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>>, arg3: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>, arg4: JavaOptional<boolean>, arg5: JavaOptional<LightPredicate>, arg6: JavaOptional<BlockPredicate>, arg7: JavaOptional<FluidPredicate>, arg8: JavaOptional<boolean>): LocationPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LocationPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.LocationPredicate$Builder. */
export interface LocationPredicate_BuilderMembers {
  build(): LocationPredicate;
  setBiomes(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>): LocationPredicate_Builder;
  setBlock(arg0: BlockPredicate_Builder): LocationPredicate_Builder;
  setCanSeeSky(arg0: boolean): LocationPredicate_Builder;
  setDimension(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): LocationPredicate_Builder;
  setFluid(arg0: FluidPredicate_Builder): LocationPredicate_Builder;
  setLight(arg0: LightPredicate_Builder): LocationPredicate_Builder;
  setSmokey(arg0: boolean): LocationPredicate_Builder;
  setStructures(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>): LocationPredicate_Builder;
  setX(arg0: MinMaxBounds_Doubles): LocationPredicate_Builder;
  setY(arg0: MinMaxBounds_Doubles): LocationPredicate_Builder;
  setZ(arg0: MinMaxBounds_Doubles): LocationPredicate_Builder;
}
export type LocationPredicate_Builder = LocationPredicate_BuilderMembers;
export interface LocationPredicate_BuilderStatics {
  new(): LocationPredicate_Builder;
  atYLocation(arg0: MinMaxBounds_Doubles): LocationPredicate_Builder;
  inBiome(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): LocationPredicate_Builder;
  inDimension(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): LocationPredicate_Builder;
  inStructure(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>): LocationPredicate_Builder;
  location(): LocationPredicate_Builder;
}

/** JVM class net.minecraft.advancements.critereon.LootTableTrigger. */
export interface LootTableTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<LootTableTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [LootTableTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): void;
}
export type LootTableTrigger = LootTableTriggerMembers & SimpleCriterionTrigger<LootTableTrigger_TriggerInstance>;
export interface LootTableTriggerStatics {
  new(): LootTableTrigger;
}

/** JVM record net.minecraft.advancements.critereon.LootTableTrigger$TriggerInstance. */
export interface LootTableTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  lootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  matches(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type LootTableTrigger_TriggerInstance = LootTableTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface LootTableTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): LootTableTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LootTableTrigger_TriggerInstance]>;
  lootTableUsed(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): j_net_minecraft_advancements.Criterion<LootTableTrigger_TriggerInstance>;
}

/** JVM interface net.minecraft.advancements.critereon.MinMaxBounds. */
export interface MinMaxBoundsMembers<T /* extends number */ = unknown> {
  isAny(): boolean;
  max(): JavaOptional<T>;
  min(): JavaOptional<T>;
  unwrapPoint(): JavaOptional<T>;
}
export type MinMaxBounds<T /* extends number */ = unknown> = MinMaxBoundsMembers<T>;
export interface MinMaxBoundsStatics {
  readonly ERROR_EMPTY: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_SWAPPED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  createCodec<T /* extends number */, R /* extends MinMaxBounds<T> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: MinMaxBounds_BoundsFactory<T, R>): JavaOpaque<"com.mojang.serialization.Codec", [R]>;
  createStreamCodec<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, T /* extends number */, R /* extends MinMaxBounds<T> */>(arg0: j_net_minecraft_network_codec.StreamCodec<B, T>, arg1: MinMaxBounds_BoundsFactory<T, R>): j_net_minecraft_network_codec.StreamCodec<B, R>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader<T /* extends number */, R /* extends MinMaxBounds<T> */>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: MinMaxBounds_BoundsFromReaderFactory<T, R>, arg2: JavaFunction<string, T>, arg3: JavaSupplier<JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">>, arg4: JavaFunction<T, T>): R;
}

/** JVM interface net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory. */
export interface MinMaxBounds_BoundsFactoryMembers<T /* extends number */ = unknown, R /* extends MinMaxBounds<T> */ = unknown> {
  create(arg0: JavaOptional<T>, arg1: JavaOptional<T>): R;
}
export type MinMaxBounds_BoundsFactory<T /* extends number */ = unknown, R /* extends MinMaxBounds<T> */ = unknown> = MinMaxBounds_BoundsFactoryMembers<T, R>;
export interface MinMaxBounds_BoundsFactoryStatics {
}

/** JVM interface net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory. */
export interface MinMaxBounds_BoundsFromReaderFactoryMembers<T /* extends number */ = unknown, R /* extends MinMaxBounds<T> */ = unknown> {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  create(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: JavaOptional<T>, arg2: JavaOptional<T>): R;
}
export type MinMaxBounds_BoundsFromReaderFactory<T /* extends number */ = unknown, R /* extends MinMaxBounds<T> */ = unknown> = MinMaxBounds_BoundsFromReaderFactoryMembers<T, R>;
export interface MinMaxBounds_BoundsFromReaderFactoryStatics {
}

/** JVM record net.minecraft.advancements.critereon.MinMaxBounds$Doubles. */
export interface MinMaxBounds_DoublesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, MinMaxBounds<number>];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: number): boolean;
  matchesSqr(arg0: number): boolean;
  max(): JavaOptional<number>;
  maxSq(): JavaOptional<number>;
  min(): JavaOptional<number>;
  minSq(): JavaOptional<number>;
  toString(): string;
}
export type MinMaxBounds_Doubles = MinMaxBounds_DoublesMembers & JavaOpaque<"java.lang.Record"> & MinMaxBounds<number>;
export interface MinMaxBounds_DoublesStatics {
  new(arg0: JavaOptional<number>, arg1: JavaOptional<number>, arg2: JavaOptional<number>, arg3: JavaOptional<number>): MinMaxBounds_Doubles;
  readonly ANY: MinMaxBounds_Doubles;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MinMaxBounds_Doubles]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MinMaxBounds_Doubles>;
  atLeast(arg0: number): MinMaxBounds_Doubles;
  atMost(arg0: number): MinMaxBounds_Doubles;
  between(arg0: number, arg1: number): MinMaxBounds_Doubles;
  exactly(arg0: number): MinMaxBounds_Doubles;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): MinMaxBounds_Doubles;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: JavaFunction<number, number>): MinMaxBounds_Doubles;
}

/** JVM record net.minecraft.advancements.critereon.MinMaxBounds$Ints. */
export interface MinMaxBounds_IntsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, MinMaxBounds<number>];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: number): boolean;
  matchesSqr(arg0: bigint): boolean;
  max(): JavaOptional<number>;
  maxSq(): JavaOptional<bigint>;
  min(): JavaOptional<number>;
  minSq(): JavaOptional<bigint>;
  toString(): string;
}
export type MinMaxBounds_Ints = MinMaxBounds_IntsMembers & JavaOpaque<"java.lang.Record"> & MinMaxBounds<number>;
export interface MinMaxBounds_IntsStatics {
  new(arg0: JavaOptional<number>, arg1: JavaOptional<number>, arg2: JavaOptional<bigint>, arg3: JavaOptional<bigint>): MinMaxBounds_Ints;
  readonly ANY: MinMaxBounds_Ints;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MinMaxBounds_Ints]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MinMaxBounds_Ints>;
  atLeast(arg0: number): MinMaxBounds_Ints;
  atMost(arg0: number): MinMaxBounds_Ints;
  between(arg0: number, arg1: number): MinMaxBounds_Ints;
  exactly(arg0: number): MinMaxBounds_Ints;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): MinMaxBounds_Ints;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: JavaFunction<number, number>): MinMaxBounds_Ints;
}

/** JVM record net.minecraft.advancements.critereon.MobEffectsPredicate. */
export interface MobEffectsPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  effectMap(): JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, MobEffectsPredicate_MobEffectInstancePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, j_net_minecraft_world_effect.MobEffectInstance>): boolean;
  matches(arg0: j_net_minecraft_world_entity.Entity): boolean;
  matches(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  toString(): string;
}
export type MobEffectsPredicate = MobEffectsPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface MobEffectsPredicateStatics {
  new(arg0: JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, MobEffectsPredicate_MobEffectInstancePredicate>): MobEffectsPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MobEffectsPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.MobEffectsPredicate$Builder. */
export interface MobEffectsPredicate_BuilderMembers {
  and(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): MobEffectsPredicate_Builder;
  and(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: MobEffectsPredicate_MobEffectInstancePredicate): MobEffectsPredicate_Builder;
  build(): JavaOptional<MobEffectsPredicate>;
}
export type MobEffectsPredicate_Builder = MobEffectsPredicate_BuilderMembers;
export interface MobEffectsPredicate_BuilderStatics {
  new(): MobEffectsPredicate_Builder;
  effects(): MobEffectsPredicate_Builder;
}

/** JVM record net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate. */
export interface MobEffectsPredicate_MobEffectInstancePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  ambient(): JavaOptional<boolean>;
  amplifier(): MinMaxBounds_Ints;
  duration(): MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_effect.MobEffectInstance | null): boolean;
  toString(): string;
  visible(): JavaOptional<boolean>;
}
export type MobEffectsPredicate_MobEffectInstancePredicate = MobEffectsPredicate_MobEffectInstancePredicateMembers & JavaOpaque<"java.lang.Record">;
export interface MobEffectsPredicate_MobEffectInstancePredicateStatics {
  new(): MobEffectsPredicate_MobEffectInstancePredicate;
  new(arg0: MinMaxBounds_Ints, arg1: MinMaxBounds_Ints, arg2: JavaOptional<boolean>, arg3: JavaOptional<boolean>): MobEffectsPredicate_MobEffectInstancePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MobEffectsPredicate_MobEffectInstancePredicate]>;
}

/** JVM record net.minecraft.advancements.critereon.MovementPredicate. */
export interface MovementPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  fallDistance(): MinMaxBounds_Doubles;
  hashCode(): number;
  horizontalSpeed(): MinMaxBounds_Doubles;
  matches(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  speed(): MinMaxBounds_Doubles;
  toString(): string;
  verticalSpeed(): MinMaxBounds_Doubles;
  x(): MinMaxBounds_Doubles;
  y(): MinMaxBounds_Doubles;
  z(): MinMaxBounds_Doubles;
}
export type MovementPredicate = MovementPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface MovementPredicateStatics {
  new(arg0: MinMaxBounds_Doubles, arg1: MinMaxBounds_Doubles, arg2: MinMaxBounds_Doubles, arg3: MinMaxBounds_Doubles, arg4: MinMaxBounds_Doubles, arg5: MinMaxBounds_Doubles, arg6: MinMaxBounds_Doubles): MovementPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MovementPredicate]>;
  fallDistance(arg0: MinMaxBounds_Doubles): MovementPredicate;
  horizontalSpeed(arg0: MinMaxBounds_Doubles): MovementPredicate;
  speed(arg0: MinMaxBounds_Doubles): MovementPredicate;
  verticalSpeed(arg0: MinMaxBounds_Doubles): MovementPredicate;
}

/** JVM record net.minecraft.advancements.critereon.NbtPredicate. */
export interface NbtPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core_component.DataComponentGetter): boolean;
  matches(arg0: j_net_minecraft_nbt.Tag | null): boolean;
  matches(arg0: j_net_minecraft_world_entity.Entity): boolean;
  tag(): j_net_minecraft_nbt.CompoundTag;
  toString(): string;
}
export type NbtPredicate = NbtPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface NbtPredicateStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): NbtPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NbtPredicate]>;
  readonly SELECTED_ITEM_TAG: "SelectedItem";
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, NbtPredicate>;
  getEntityTagToCompare(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_nbt.CompoundTag;
}

/** JVM class net.minecraft.advancements.critereon.PickedUpItemTrigger. */
export interface PickedUpItemTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<PickedUpItemTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [PickedUpItemTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity | null): void;
}
export type PickedUpItemTrigger = PickedUpItemTriggerMembers & SimpleCriterionTrigger<PickedUpItemTrigger_TriggerInstance>;
export interface PickedUpItemTriggerStatics {
  new(): PickedUpItemTrigger;
}

/** JVM record net.minecraft.advancements.critereon.PickedUpItemTrigger$TriggerInstance. */
export interface PickedUpItemTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  entity(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type PickedUpItemTrigger_TriggerInstance = PickedUpItemTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface PickedUpItemTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: JavaOptional<ContextAwarePredicate>): PickedUpItemTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PickedUpItemTrigger_TriggerInstance]>;
  thrownItemPickedUpByEntity(arg0: ContextAwarePredicate, arg1: JavaOptional<ItemPredicate>, arg2: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<PickedUpItemTrigger_TriggerInstance>;
  thrownItemPickedUpByPlayer(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<PickedUpItemTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.PlayerHurtEntityTrigger. */
export interface PlayerHurtEntityTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<PlayerHurtEntityTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [PlayerHurtEntityTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: number, arg4: number, arg5: boolean): void;
}
export type PlayerHurtEntityTrigger = PlayerHurtEntityTriggerMembers & SimpleCriterionTrigger<PlayerHurtEntityTrigger_TriggerInstance>;
export interface PlayerHurtEntityTriggerStatics {
  new(): PlayerHurtEntityTrigger;
}

/** JVM record net.minecraft.advancements.critereon.PlayerHurtEntityTrigger$TriggerInstance. */
export interface PlayerHurtEntityTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  damage(): JavaOptional<DamagePredicate>;
  entity(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level_storage_loot.LootContext, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: number, arg4: number, arg5: boolean): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type PlayerHurtEntityTrigger_TriggerInstance = PlayerHurtEntityTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface PlayerHurtEntityTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<DamagePredicate>, arg2: JavaOptional<ContextAwarePredicate>): PlayerHurtEntityTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlayerHurtEntityTrigger_TriggerInstance]>;
  playerHurtEntity(): j_net_minecraft_advancements.Criterion<PlayerHurtEntityTrigger_TriggerInstance>;
  playerHurtEntity(arg0: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<PlayerHurtEntityTrigger_TriggerInstance>;
  playerHurtEntity(arg0: JavaOptional<DamagePredicate>, arg1: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<PlayerHurtEntityTrigger_TriggerInstance>;
  playerHurtEntity(arg0: DamagePredicate_Builder, arg1: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<PlayerHurtEntityTrigger_TriggerInstance>;
  playerHurtEntityWithDamage(arg0: JavaOptional<DamagePredicate>): j_net_minecraft_advancements.Criterion<PlayerHurtEntityTrigger_TriggerInstance>;
  playerHurtEntityWithDamage(arg0: DamagePredicate_Builder): j_net_minecraft_advancements.Criterion<PlayerHurtEntityTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.PlayerInteractTrigger. */
export interface PlayerInteractTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<PlayerInteractTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [PlayerInteractTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity): void;
}
export type PlayerInteractTrigger = PlayerInteractTriggerMembers & SimpleCriterionTrigger<PlayerInteractTrigger_TriggerInstance>;
export interface PlayerInteractTriggerStatics {
  new(): PlayerInteractTrigger;
}

/** JVM record net.minecraft.advancements.critereon.PlayerInteractTrigger$TriggerInstance. */
export interface PlayerInteractTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  entity(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type PlayerInteractTrigger_TriggerInstance = PlayerInteractTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface PlayerInteractTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>, arg2: JavaOptional<ContextAwarePredicate>): PlayerInteractTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlayerInteractTrigger_TriggerInstance]>;
  equipmentSheared(arg0: JavaOptional<ContextAwarePredicate>, arg1: ItemPredicate_Builder, arg2: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<PlayerInteractTrigger_TriggerInstance>;
  equipmentSheared(arg0: ItemPredicate_Builder, arg1: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<PlayerInteractTrigger_TriggerInstance>;
  itemUsedOnEntity(arg0: JavaOptional<ContextAwarePredicate>, arg1: ItemPredicate_Builder, arg2: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<PlayerInteractTrigger_TriggerInstance>;
  itemUsedOnEntity(arg0: ItemPredicate_Builder, arg1: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<PlayerInteractTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.PlayerPredicate. */
export interface PlayerPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EntitySubPredicate];
  advancements(): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaOpaque<"net.minecraft.advancements.critereon.PlayerPredicate$AdvancementPredicate">>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerPredicate]>;
  equals(arg0: object): boolean;
  gameType(): GameTypePredicate;
  hashCode(): number;
  input(): JavaOptional<InputPredicate>;
  level(): MinMaxBounds_Ints;
  lookingAt(): JavaOptional<EntityPredicate>;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
  recipes(): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2BooleanMap", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>]>;
  stats(): JavaList<JavaOpaque<"net.minecraft.advancements.critereon.PlayerPredicate$StatMatcher", [object]>>;
  toString(): string;
}
export type PlayerPredicate = PlayerPredicateMembers & JavaOpaque<"java.lang.Record"> & EntitySubPredicate;
export interface PlayerPredicateStatics {
  new(arg0: MinMaxBounds_Ints, arg1: GameTypePredicate, arg2: JavaList<JavaOpaque<"net.minecraft.advancements.critereon.PlayerPredicate$StatMatcher", [object]>>, arg3: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2BooleanMap", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>]>, arg4: JavaMap<j_net_minecraft_resources.ResourceLocation, JavaOpaque<"net.minecraft.advancements.critereon.PlayerPredicate$AdvancementPredicate">>, arg5: JavaOptional<EntityPredicate>, arg6: JavaOptional<InputPredicate>): PlayerPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerPredicate]>;
  readonly LOOKING_AT_RANGE: 100;
}

/** JVM class net.minecraft.advancements.critereon.PlayerPredicate$Builder. */
export interface PlayerPredicate_BuilderMembers {
  addRecipe(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>, arg1: boolean): PlayerPredicate_Builder;
  addStat<T>(arg0: j_net_minecraft_stats.StatType<T>, arg1: j_net_minecraft_core.Holder_Reference<T>, arg2: MinMaxBounds_Ints): PlayerPredicate_Builder;
  build(): PlayerPredicate;
  checkAdvancementCriterions(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaMap<string, boolean>): PlayerPredicate_Builder;
  checkAdvancementDone(arg0: j_net_minecraft_resources.ResourceLocation, arg1: boolean): PlayerPredicate_Builder;
  hasInput(arg0: InputPredicate): PlayerPredicate_Builder;
  setGameType(arg0: GameTypePredicate): PlayerPredicate_Builder;
  setLevel(arg0: MinMaxBounds_Ints): PlayerPredicate_Builder;
  setLookingAt(arg0: EntityPredicate_Builder): PlayerPredicate_Builder;
}
export type PlayerPredicate_Builder = PlayerPredicate_BuilderMembers;
export interface PlayerPredicate_BuilderStatics {
  new(): PlayerPredicate_Builder;
  player(): PlayerPredicate_Builder;
}

/** JVM class net.minecraft.advancements.critereon.PlayerTrigger. */
export interface PlayerTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<PlayerTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [PlayerTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type PlayerTrigger = PlayerTriggerMembers & SimpleCriterionTrigger<PlayerTrigger_TriggerInstance>;
export interface PlayerTriggerStatics {
  new(): PlayerTrigger;
}

/** JVM record net.minecraft.advancements.critereon.PlayerTrigger$TriggerInstance. */
export interface PlayerTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type PlayerTrigger_TriggerInstance = PlayerTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface PlayerTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>): PlayerTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlayerTrigger_TriggerInstance]>;
  avoidVibration(): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  located(arg0: JavaOptional<EntityPredicate>): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  located(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  located(arg0: LocationPredicate_Builder): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  raidWon(): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  sleptInBed(): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  tick(): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
  walkOnBlockWithEquipment(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_world_item.Item): j_net_minecraft_advancements.Criterion<PlayerTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.RaiderPredicate. */
export interface RaiderPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EntitySubPredicate];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RaiderPredicate]>;
  equals(arg0: object): boolean;
  hasRaid(): boolean;
  hashCode(): number;
  isCaptain(): boolean;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
  toString(): string;
}
export type RaiderPredicate = RaiderPredicateMembers & JavaOpaque<"java.lang.Record"> & EntitySubPredicate;
export interface RaiderPredicateStatics {
  new(arg0: boolean, arg1: boolean): RaiderPredicate;
  readonly CAPTAIN_WITHOUT_RAID: RaiderPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RaiderPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.RecipeCraftedTrigger. */
export interface RecipeCraftedTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<RecipeCraftedTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [RecipeCraftedTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>, arg2: JavaList<j_net_minecraft_world_item.ItemStack>): void;
}
export type RecipeCraftedTrigger = RecipeCraftedTriggerMembers & SimpleCriterionTrigger<RecipeCraftedTrigger_TriggerInstance>;
export interface RecipeCraftedTriggerStatics {
  new(): RecipeCraftedTrigger;
}

/** JVM record net.minecraft.advancements.critereon.RecipeCraftedTrigger$TriggerInstance. */
export interface RecipeCraftedTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  ingredients(): JavaList<ItemPredicate>;
  player(): JavaOptional<ContextAwarePredicate>;
  recipeId(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>;
  toString(): string;
}
export type RecipeCraftedTrigger_TriggerInstance = RecipeCraftedTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface RecipeCraftedTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>, arg2: JavaList<ItemPredicate>): RecipeCraftedTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RecipeCraftedTrigger_TriggerInstance]>;
  craftedItem(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): j_net_minecraft_advancements.Criterion<RecipeCraftedTrigger_TriggerInstance>;
  craftedItem(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>, arg1: JavaList<ItemPredicate_Builder>): j_net_minecraft_advancements.Criterion<RecipeCraftedTrigger_TriggerInstance>;
  crafterCraftedItem(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): j_net_minecraft_advancements.Criterion<RecipeCraftedTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.RecipeUnlockedTrigger. */
export interface RecipeUnlockedTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<RecipeUnlockedTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [RecipeUnlockedTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item_crafting.RecipeHolder<object>): void;
}
export type RecipeUnlockedTrigger = RecipeUnlockedTriggerMembers & SimpleCriterionTrigger<RecipeUnlockedTrigger_TriggerInstance>;
export interface RecipeUnlockedTriggerStatics {
  new(): RecipeUnlockedTrigger;
  unlocked(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): j_net_minecraft_advancements.Criterion<RecipeUnlockedTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.RecipeUnlockedTrigger$TriggerInstance. */
export interface RecipeUnlockedTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<object>): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  recipe(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>;
  toString(): string;
}
export type RecipeUnlockedTrigger_TriggerInstance = RecipeUnlockedTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface RecipeUnlockedTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): RecipeUnlockedTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RecipeUnlockedTrigger_TriggerInstance]>;
}

/** JVM record net.minecraft.advancements.critereon.SheepPredicate. */
export interface SheepPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EntitySubPredicate];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SheepPredicate]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
  sheared(): JavaOptional<boolean>;
  toString(): string;
}
export type SheepPredicate = SheepPredicateMembers & JavaOpaque<"java.lang.Record"> & EntitySubPredicate;
export interface SheepPredicateStatics {
  new(arg0: JavaOptional<boolean>): SheepPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SheepPredicate]>;
  hasWool(): SheepPredicate;
}

/** JVM class net.minecraft.advancements.critereon.ShotCrossbowTrigger. */
export interface ShotCrossbowTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<ShotCrossbowTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [ShotCrossbowTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack): void;
}
export type ShotCrossbowTrigger = ShotCrossbowTriggerMembers & SimpleCriterionTrigger<ShotCrossbowTrigger_TriggerInstance>;
export interface ShotCrossbowTriggerStatics {
  new(): ShotCrossbowTrigger;
}

/** JVM record net.minecraft.advancements.critereon.ShotCrossbowTrigger$TriggerInstance. */
export interface ShotCrossbowTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type ShotCrossbowTrigger_TriggerInstance = ShotCrossbowTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface ShotCrossbowTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>): ShotCrossbowTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ShotCrossbowTrigger_TriggerInstance]>;
  shotCrossbow(arg0: JavaOptional<ItemPredicate>): j_net_minecraft_advancements.Criterion<ShotCrossbowTrigger_TriggerInstance>;
  shotCrossbow(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_world_level.ItemLike): j_net_minecraft_advancements.Criterion<ShotCrossbowTrigger_TriggerInstance>;
}

/** JVM abstract net.minecraft.advancements.critereon.SimpleCriterionTrigger. */
export interface SimpleCriterionTriggerMembers<T /* extends SimpleCriterionTrigger_SimpleInstance */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_advancements.CriterionTrigger<T>];
  addPlayerListener(arg0: j_net_minecraft_server.PlayerAdvancements, arg1: j_net_minecraft_advancements.CriterionTrigger_Listener<T>): void;
  removePlayerListener(arg0: j_net_minecraft_server.PlayerAdvancements, arg1: j_net_minecraft_advancements.CriterionTrigger_Listener<T>): void;
  removePlayerListeners(arg0: j_net_minecraft_server.PlayerAdvancements): void;
}
export type SimpleCriterionTrigger<T /* extends SimpleCriterionTrigger_SimpleInstance */ = unknown> = SimpleCriterionTriggerMembers<T> & j_net_minecraft_advancements.CriterionTrigger<T>;
export interface SimpleCriterionTriggerStatics {
}

/** JVM interface net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance. */
export interface SimpleCriterionTrigger_SimpleInstanceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_advancements.CriterionTriggerInstance];
  player(): JavaOptional<ContextAwarePredicate>;
  validate(arg0: CriterionValidator): void;
}
export type SimpleCriterionTrigger_SimpleInstance = SimpleCriterionTrigger_SimpleInstanceMembers & j_net_minecraft_advancements.CriterionTriggerInstance;
export interface SimpleCriterionTrigger_SimpleInstanceStatics {
}

/** JVM interface net.minecraft.advancements.critereon.SingleComponentItemPredicate. */
export interface SingleComponentItemPredicateMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_core_component_predicates.DataComponentPredicate];
  componentType(): j_net_minecraft_core_component.DataComponentType<T>;
  matches(arg0: T): boolean;
  matches(arg0: j_net_minecraft_core_component.DataComponentGetter): boolean;
}
export type SingleComponentItemPredicate<T = unknown> = SingleComponentItemPredicateMembers<T> & j_net_minecraft_core_component_predicates.DataComponentPredicate;
export interface SingleComponentItemPredicateStatics {
}

/** JVM class net.minecraft.advancements.critereon.SlideDownBlockTrigger. */
export interface SlideDownBlockTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<SlideDownBlockTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [SlideDownBlockTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type SlideDownBlockTrigger = SlideDownBlockTriggerMembers & SimpleCriterionTrigger<SlideDownBlockTrigger_TriggerInstance>;
export interface SlideDownBlockTriggerStatics {
  new(): SlideDownBlockTrigger;
}

/** JVM record net.minecraft.advancements.critereon.SlideDownBlockTrigger$TriggerInstance. */
export interface SlideDownBlockTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  block(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  state(): JavaOptional<StatePropertiesPredicate>;
  toString(): string;
}
export type SlideDownBlockTrigger_TriggerInstance = SlideDownBlockTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface SlideDownBlockTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>>, arg2: JavaOptional<StatePropertiesPredicate>): SlideDownBlockTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SlideDownBlockTrigger_TriggerInstance]>;
  slidesDownBlock(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_advancements.Criterion<SlideDownBlockTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.SlimePredicate. */
export interface SlimePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EntitySubPredicate];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SlimePredicate]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_phys.Vec3 | null): boolean;
  size(): MinMaxBounds_Ints;
  toString(): string;
}
export type SlimePredicate = SlimePredicateMembers & JavaOpaque<"java.lang.Record"> & EntitySubPredicate;
export interface SlimePredicateStatics {
  new(arg0: MinMaxBounds_Ints): SlimePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlimePredicate]>;
  sized(arg0: MinMaxBounds_Ints): SlimePredicate;
}

/** JVM record net.minecraft.advancements.critereon.SlotsPredicate. */
export interface SlotsPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_entity.Entity): boolean;
  slots(): JavaMap<j_net_minecraft_world_inventory.SlotRange, ItemPredicate>;
  toString(): string;
}
export type SlotsPredicate = SlotsPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface SlotsPredicateStatics {
  new(arg0: JavaMap<j_net_minecraft_world_inventory.SlotRange, ItemPredicate>): SlotsPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SlotsPredicate]>;
}

/** JVM class net.minecraft.advancements.critereon.StartRidingTrigger. */
export interface StartRidingTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<StartRidingTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [StartRidingTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type StartRidingTrigger = StartRidingTriggerMembers & SimpleCriterionTrigger<StartRidingTrigger_TriggerInstance>;
export interface StartRidingTriggerStatics {
  new(): StartRidingTrigger;
}

/** JVM record net.minecraft.advancements.critereon.StartRidingTrigger$TriggerInstance. */
export interface StartRidingTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type StartRidingTrigger_TriggerInstance = StartRidingTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface StartRidingTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>): StartRidingTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StartRidingTrigger_TriggerInstance]>;
  playerStartsRiding(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<StartRidingTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.StatePropertiesPredicate. */
export interface StatePropertiesPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  checkState(arg0: j_net_minecraft_world_level_block_state.StateDefinition<object, object>): JavaOptional<string>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  matches<S /* extends j_net_minecraft_world_level_block_state.StateHolder<object, S> */>(arg0: j_net_minecraft_world_level_block_state.StateDefinition<object, S>, arg1: S): boolean;
  matches(arg0: j_net_minecraft_world_level_material.FluidState): boolean;
  properties(): JavaList<JavaOpaque<"net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher">>;
  toString(): string;
}
export type StatePropertiesPredicate = StatePropertiesPredicateMembers & JavaOpaque<"java.lang.Record">;
export interface StatePropertiesPredicateStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher">>): StatePropertiesPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StatePropertiesPredicate]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, StatePropertiesPredicate>;
}

/** JVM class net.minecraft.advancements.critereon.StatePropertiesPredicate$Builder. */
export interface StatePropertiesPredicate_BuilderMembers {
  build(): JavaOptional<StatePropertiesPredicate>;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<number>, arg1: number): StatePropertiesPredicate_Builder;
  hasProperty<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: T): StatePropertiesPredicate_Builder;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<object>, arg1: string): StatePropertiesPredicate_Builder;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<boolean>, arg1: boolean): StatePropertiesPredicate_Builder;
}
export type StatePropertiesPredicate_Builder = StatePropertiesPredicate_BuilderMembers;
export interface StatePropertiesPredicate_BuilderStatics {
  properties(): StatePropertiesPredicate_Builder;
}

/** JVM class net.minecraft.advancements.critereon.SummonedEntityTrigger. */
export interface SummonedEntityTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<SummonedEntityTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [SummonedEntityTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity): void;
}
export type SummonedEntityTrigger = SummonedEntityTriggerMembers & SimpleCriterionTrigger<SummonedEntityTrigger_TriggerInstance>;
export interface SummonedEntityTriggerStatics {
  new(): SummonedEntityTrigger;
}

/** JVM record net.minecraft.advancements.critereon.SummonedEntityTrigger$TriggerInstance. */
export interface SummonedEntityTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  entity(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type SummonedEntityTrigger_TriggerInstance = SummonedEntityTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface SummonedEntityTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>): SummonedEntityTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SummonedEntityTrigger_TriggerInstance]>;
  summonedEntity(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<SummonedEntityTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.TagPredicate. */
export interface TagPredicateMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  expected(): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core.Holder<T>): boolean;
  tag(): j_net_minecraft_tags.TagKey<T>;
  toString(): string;
}
export type TagPredicate<T = unknown> = TagPredicateMembers<T> & JavaOpaque<"java.lang.Record">;
export interface TagPredicateStatics {
  new<T>(arg0: j_net_minecraft_tags.TagKey<T>, arg1: boolean): TagPredicate<T>;
  codec<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOpaque<"com.mojang.serialization.Codec", [TagPredicate<T>]>;
  is<T>(arg0: j_net_minecraft_tags.TagKey<T>): TagPredicate<T>;
  isNot<T>(arg0: j_net_minecraft_tags.TagKey<T>): TagPredicate<T>;
}

/** JVM class net.minecraft.advancements.critereon.TameAnimalTrigger. */
export interface TameAnimalTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<TameAnimalTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [TameAnimalTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity_animal.Animal): void;
}
export type TameAnimalTrigger = TameAnimalTriggerMembers & SimpleCriterionTrigger<TameAnimalTrigger_TriggerInstance>;
export interface TameAnimalTriggerStatics {
  new(): TameAnimalTrigger;
}

/** JVM record net.minecraft.advancements.critereon.TameAnimalTrigger$TriggerInstance. */
export interface TameAnimalTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  entity(): JavaOptional<ContextAwarePredicate>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type TameAnimalTrigger_TriggerInstance = TameAnimalTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface TameAnimalTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>): TameAnimalTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TameAnimalTrigger_TriggerInstance]>;
  tamedAnimal(): j_net_minecraft_advancements.Criterion<TameAnimalTrigger_TriggerInstance>;
  tamedAnimal(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<TameAnimalTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.TargetBlockTrigger. */
export interface TargetBlockTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<TargetBlockTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [TargetBlockTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): void;
}
export type TargetBlockTrigger = TargetBlockTriggerMembers & SimpleCriterionTrigger<TargetBlockTrigger_TriggerInstance>;
export interface TargetBlockTriggerStatics {
  new(): TargetBlockTrigger;
}

/** JVM record net.minecraft.advancements.critereon.TargetBlockTrigger$TriggerInstance. */
export interface TargetBlockTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: j_net_minecraft_world_phys.Vec3, arg2: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  projectile(): JavaOptional<ContextAwarePredicate>;
  signalStrength(): MinMaxBounds_Ints;
  toString(): string;
  validate(arg0: CriterionValidator): void;
}
export type TargetBlockTrigger_TriggerInstance = TargetBlockTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface TargetBlockTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: MinMaxBounds_Ints, arg2: JavaOptional<ContextAwarePredicate>): TargetBlockTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TargetBlockTrigger_TriggerInstance]>;
  targetHit(arg0: MinMaxBounds_Ints, arg1: JavaOptional<ContextAwarePredicate>): j_net_minecraft_advancements.Criterion<TargetBlockTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.TradeTrigger. */
export interface TradeTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<TradeTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [TradeTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_entity_npc.AbstractVillager, arg2: j_net_minecraft_world_item.ItemStack): void;
}
export type TradeTrigger = TradeTriggerMembers & SimpleCriterionTrigger<TradeTrigger_TriggerInstance>;
export interface TradeTriggerStatics {
  new(): TradeTrigger;
}

/** JVM record net.minecraft.advancements.critereon.TradeTrigger$TriggerInstance. */
export interface TradeTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
  validate(arg0: CriterionValidator): void;
  villager(): JavaOptional<ContextAwarePredicate>;
}
export type TradeTrigger_TriggerInstance = TradeTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface TradeTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ContextAwarePredicate>, arg2: JavaOptional<ItemPredicate>): TradeTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TradeTrigger_TriggerInstance]>;
  tradedWithVillager(): j_net_minecraft_advancements.Criterion<TradeTrigger_TriggerInstance>;
  tradedWithVillager(arg0: EntityPredicate_Builder): j_net_minecraft_advancements.Criterion<TradeTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.UsedEnderEyeTrigger. */
export interface UsedEnderEyeTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<UsedEnderEyeTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [UsedEnderEyeTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_core.BlockPos): void;
}
export type UsedEnderEyeTrigger = UsedEnderEyeTriggerMembers & SimpleCriterionTrigger<UsedEnderEyeTrigger_TriggerInstance>;
export interface UsedEnderEyeTriggerStatics {
  new(): UsedEnderEyeTrigger;
}

/** JVM record net.minecraft.advancements.critereon.UsedEnderEyeTrigger$TriggerInstance. */
export interface UsedEnderEyeTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  distance(): MinMaxBounds_Doubles;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: number): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type UsedEnderEyeTrigger_TriggerInstance = UsedEnderEyeTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface UsedEnderEyeTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: MinMaxBounds_Doubles): UsedEnderEyeTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [UsedEnderEyeTrigger_TriggerInstance]>;
}

/** JVM class net.minecraft.advancements.critereon.UsedTotemTrigger. */
export interface UsedTotemTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<UsedTotemTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [UsedTotemTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack): void;
}
export type UsedTotemTrigger = UsedTotemTriggerMembers & SimpleCriterionTrigger<UsedTotemTrigger_TriggerInstance>;
export interface UsedTotemTriggerStatics {
  new(): UsedTotemTrigger;
}

/** JVM record net.minecraft.advancements.critereon.UsedTotemTrigger$TriggerInstance. */
export interface UsedTotemTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type UsedTotemTrigger_TriggerInstance = UsedTotemTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface UsedTotemTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>): UsedTotemTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [UsedTotemTrigger_TriggerInstance]>;
  usedTotem(arg0: ItemPredicate): j_net_minecraft_advancements.Criterion<UsedTotemTrigger_TriggerInstance>;
  usedTotem(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_world_level.ItemLike): j_net_minecraft_advancements.Criterion<UsedTotemTrigger_TriggerInstance>;
}

/** JVM class net.minecraft.advancements.critereon.UsingItemTrigger. */
export interface UsingItemTriggerMembers {
  readonly __javaSupertypes?: readonly [SimpleCriterionTrigger<UsingItemTrigger_TriggerInstance>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [UsingItemTrigger_TriggerInstance]>;
  trigger(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack): void;
}
export type UsingItemTrigger = UsingItemTriggerMembers & SimpleCriterionTrigger<UsingItemTrigger_TriggerInstance>;
export interface UsingItemTriggerStatics {
  new(): UsingItemTrigger;
}

/** JVM record net.minecraft.advancements.critereon.UsingItemTrigger$TriggerInstance. */
export interface UsingItemTrigger_TriggerInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleCriterionTrigger_SimpleInstance];
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): JavaOptional<ItemPredicate>;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  player(): JavaOptional<ContextAwarePredicate>;
  toString(): string;
}
export type UsingItemTrigger_TriggerInstance = UsingItemTrigger_TriggerInstanceMembers & JavaOpaque<"java.lang.Record"> & SimpleCriterionTrigger_SimpleInstance;
export interface UsingItemTrigger_TriggerInstanceStatics {
  new(arg0: JavaOptional<ContextAwarePredicate>, arg1: JavaOptional<ItemPredicate>): UsingItemTrigger_TriggerInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [UsingItemTrigger_TriggerInstance]>;
  lookingAt(arg0: EntityPredicate_Builder, arg1: ItemPredicate_Builder): j_net_minecraft_advancements.Criterion<UsingItemTrigger_TriggerInstance>;
}

/** JVM record net.minecraft.advancements.critereon.WrappedMinMaxBounds. */
export interface WrappedMinMaxBoundsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: number): boolean;
  matchesSqr(arg0: number): boolean;
  max(): number | null;
  min(): number | null;
  serializeToJson(): JavaOpaque<"com.google.gson.JsonElement">;
  toString(): string;
}
export type WrappedMinMaxBounds = WrappedMinMaxBoundsMembers & JavaOpaque<"java.lang.Record">;
export interface WrappedMinMaxBoundsStatics {
  new(arg0: number | null, arg1: number | null): WrappedMinMaxBounds;
  readonly ANY: WrappedMinMaxBounds;
  readonly ERROR_INTS_ONLY: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  atLeast(arg0: number): WrappedMinMaxBounds;
  atMost(arg0: number): WrappedMinMaxBounds;
  between(arg0: number, arg1: number): WrappedMinMaxBounds;
  exactly(arg0: number): WrappedMinMaxBounds;
  fromJson(arg0: JavaOpaque<"com.google.gson.JsonElement"> | null): WrappedMinMaxBounds;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean): WrappedMinMaxBounds;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  fromReader(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean, arg2: JavaFunction<number, number>): WrappedMinMaxBounds;
}
