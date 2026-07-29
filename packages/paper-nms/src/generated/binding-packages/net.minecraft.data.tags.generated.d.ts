// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_village_poi from './net.minecraft.world.entity.ai.village.poi.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen_flat from './net.minecraft.world.level.levelgen.flat.generated.js';
import type * as j_net_minecraft_world_level_levelgen_presets from './net.minecraft.world.level.levelgen.presets.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';

/** JVM class net.minecraft.data.tags.BannerPatternTagsProvider. */
export interface BannerPatternTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_level_block_entity.BannerPattern>];
}
export type BannerPatternTagsProvider = BannerPatternTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_level_block_entity.BannerPattern>;
export interface BannerPatternTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): BannerPatternTagsProvider;
}

/** JVM class net.minecraft.data.tags.BiomeTagsProvider. */
export interface BiomeTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_level_biome.Biome>];
}
export type BiomeTagsProvider = BiomeTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_level_biome.Biome>;
export interface BiomeTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): BiomeTagsProvider;
}

/** JVM abstract net.minecraft.data.tags.BlockItemTagsProvider. */
export interface BlockItemTagsProviderMembers {
}
export type BlockItemTagsProvider = BlockItemTagsProviderMembers;
export interface BlockItemTagsProviderStatics {
}

/** JVM class net.minecraft.data.tags.DamageTypeTagsProvider. */
export interface DamageTypeTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_damagesource.DamageType>];
}
export type DamageTypeTagsProvider = DamageTypeTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_damagesource.DamageType>;
export interface DamageTypeTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): DamageTypeTagsProvider;
}

/** JVM class net.minecraft.data.tags.DialogTagsProvider. */
export interface DialogTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_server_dialog.Dialog>];
}
export type DialogTagsProvider = DialogTagsProviderMembers & KeyTagProvider<j_net_minecraft_server_dialog.Dialog>;
export interface DialogTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): DialogTagsProvider;
}

/** JVM abstract net.minecraft.data.tags.EnchantmentTagsProvider. */
export interface EnchantmentTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_item_enchantment.Enchantment>];
}
export type EnchantmentTagsProvider = EnchantmentTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_item_enchantment.Enchantment>;
export interface EnchantmentTagsProviderStatics {
}

/** JVM class net.minecraft.data.tags.EntityTypeTagsProvider. */
export interface EntityTypeTagsProviderMembers {
  readonly __javaSupertypes?: readonly [IntrinsicHolderTagsProvider<j_net_minecraft_world_entity.EntityType<object>>];
}
export type EntityTypeTagsProvider = EntityTypeTagsProviderMembers & IntrinsicHolderTagsProvider<j_net_minecraft_world_entity.EntityType<object>>;
export interface EntityTypeTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): EntityTypeTagsProvider;
}

/** JVM class net.minecraft.data.tags.FlatLevelGeneratorPresetTagsProvider. */
export interface FlatLevelGeneratorPresetTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_level_levelgen_flat.FlatLevelGeneratorPreset>];
}
export type FlatLevelGeneratorPresetTagsProvider = FlatLevelGeneratorPresetTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_level_levelgen_flat.FlatLevelGeneratorPreset>;
export interface FlatLevelGeneratorPresetTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): FlatLevelGeneratorPresetTagsProvider;
}

/** JVM class net.minecraft.data.tags.FluidTagsProvider. */
export interface FluidTagsProviderMembers {
  readonly __javaSupertypes?: readonly [IntrinsicHolderTagsProvider<j_net_minecraft_world_level_material.Fluid>];
}
export type FluidTagsProvider = FluidTagsProviderMembers & IntrinsicHolderTagsProvider<j_net_minecraft_world_level_material.Fluid>;
export interface FluidTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): FluidTagsProvider;
}

/** JVM class net.minecraft.data.tags.GameEventTagsProvider. */
export interface GameEventTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_level_gameevent.GameEvent>];
}
export type GameEventTagsProvider = GameEventTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_level_gameevent.GameEvent>;
export interface GameEventTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): GameEventTagsProvider;
}

/** JVM class net.minecraft.data.tags.InstrumentTagsProvider. */
export interface InstrumentTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_item.Instrument>];
}
export type InstrumentTagsProvider = InstrumentTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_item.Instrument>;
export interface InstrumentTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): InstrumentTagsProvider;
}

/** JVM abstract net.minecraft.data.tags.IntrinsicHolderTagsProvider. */
export interface IntrinsicHolderTagsProviderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [TagsProvider<T>];
}
export type IntrinsicHolderTagsProvider<T = unknown> = IntrinsicHolderTagsProviderMembers<T> & TagsProvider<T>;
export interface IntrinsicHolderTagsProviderStatics {
}

/** JVM abstract net.minecraft.data.tags.KeyTagProvider. */
export interface KeyTagProviderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [TagsProvider<T>];
}
export type KeyTagProvider<T = unknown> = KeyTagProviderMembers<T> & TagsProvider<T>;
export interface KeyTagProviderStatics {
}

/** JVM class net.minecraft.data.tags.PaintingVariantTagsProvider. */
export interface PaintingVariantTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_entity_decoration.PaintingVariant>];
}
export type PaintingVariantTagsProvider = PaintingVariantTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_entity_decoration.PaintingVariant>;
export interface PaintingVariantTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): PaintingVariantTagsProvider;
}

/** JVM class net.minecraft.data.tags.PoiTypeTagsProvider. */
export interface PoiTypeTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_entity_ai_village_poi.PoiType>];
}
export type PoiTypeTagsProvider = PoiTypeTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_entity_ai_village_poi.PoiType>;
export interface PoiTypeTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): PoiTypeTagsProvider;
}

/** JVM class net.minecraft.data.tags.StructureTagsProvider. */
export interface StructureTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_level_levelgen_structure.Structure>];
}
export type StructureTagsProvider = StructureTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_level_levelgen_structure.Structure>;
export interface StructureTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): StructureTagsProvider;
}

/** JVM interface net.minecraft.data.tags.TagAppender. */
export interface TagAppenderMembers<E = unknown, T = unknown> {
  add(arg0: E): TagAppender<E, T>;
  add(...arg0: Array<E>): TagAppender<E, T>;
  addAll(arg0: JavaCollection<E>): TagAppender<E, T>;
  addAll(arg0: JavaOpaque<"java.util.stream.Stream", [E]>): TagAppender<E, T>;
  addOptional(arg0: E): TagAppender<E, T>;
  addOptionalTag(arg0: j_net_minecraft_tags.TagKey<T>): TagAppender<E, T>;
  addTag(arg0: j_net_minecraft_tags.TagKey<T>): TagAppender<E, T>;
  map<U>(arg0: JavaFunction<U, E>): TagAppender<U, T>;
}
export type TagAppender<E = unknown, T = unknown> = TagAppenderMembers<E, T>;
export interface TagAppenderStatics {
  forBuilder<T>(arg0: j_net_minecraft_tags.TagBuilder): TagAppender<j_net_minecraft_resources.ResourceKey<T>, T>;
}

/** JVM abstract net.minecraft.data.tags.TagsProvider. */
export interface TagsProviderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  contentsGetter(): PromiseLike<TagsProvider_TagLookup<T>>;
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type TagsProvider<T = unknown> = TagsProviderMembers<T> & j_net_minecraft_data.DataProvider;
export interface TagsProviderStatics {
}

/** JVM interface net.minecraft.data.tags.TagsProvider$TagLookup. */
export interface TagsProvider_TagLookupMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaFunction<j_net_minecraft_tags.TagKey<T>, JavaOptional<j_net_minecraft_tags.TagBuilder>>];
  contains(arg0: j_net_minecraft_tags.TagKey<T>): boolean;
}
export type TagsProvider_TagLookup<T = unknown> = TagsProvider_TagLookupMembers<T> & JavaFunction<j_net_minecraft_tags.TagKey<T>, JavaOptional<j_net_minecraft_tags.TagBuilder>>;
export interface TagsProvider_TagLookupStatics {
  empty<T>(): TagsProvider_TagLookup<T>;
}

/** JVM class net.minecraft.data.tags.TradeRebalanceEnchantmentTagsProvider. */
export interface TradeRebalanceEnchantmentTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_item_enchantment.Enchantment>];
}
export type TradeRebalanceEnchantmentTagsProvider = TradeRebalanceEnchantmentTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_item_enchantment.Enchantment>;
export interface TradeRebalanceEnchantmentTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): TradeRebalanceEnchantmentTagsProvider;
}

/** JVM class net.minecraft.data.tags.VanillaBlockTagsProvider. */
export interface VanillaBlockTagsProviderMembers {
  readonly __javaSupertypes?: readonly [IntrinsicHolderTagsProvider<j_net_minecraft_world_level_block.Block>];
}
export type VanillaBlockTagsProvider = VanillaBlockTagsProviderMembers & IntrinsicHolderTagsProvider<j_net_minecraft_world_level_block.Block>;
export interface VanillaBlockTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): VanillaBlockTagsProvider;
}

/** JVM class net.minecraft.data.tags.VanillaEnchantmentTagsProvider. */
export interface VanillaEnchantmentTagsProviderMembers {
  readonly __javaSupertypes?: readonly [EnchantmentTagsProvider];
}
export type VanillaEnchantmentTagsProvider = VanillaEnchantmentTagsProviderMembers & EnchantmentTagsProvider;
export interface VanillaEnchantmentTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): VanillaEnchantmentTagsProvider;
}

/** JVM class net.minecraft.data.tags.VanillaItemTagsProvider. */
export interface VanillaItemTagsProviderMembers {
  readonly __javaSupertypes?: readonly [IntrinsicHolderTagsProvider<j_net_minecraft_world_item.Item>];
}
export type VanillaItemTagsProvider = VanillaItemTagsProviderMembers & IntrinsicHolderTagsProvider<j_net_minecraft_world_item.Item>;
export interface VanillaItemTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): VanillaItemTagsProvider;
}

/** JVM class net.minecraft.data.tags.WorldPresetTagsProvider. */
export interface WorldPresetTagsProviderMembers {
  readonly __javaSupertypes?: readonly [KeyTagProvider<j_net_minecraft_world_level_levelgen_presets.WorldPreset>];
}
export type WorldPresetTagsProvider = WorldPresetTagsProviderMembers & KeyTagProvider<j_net_minecraft_world_level_levelgen_presets.WorldPreset>;
export interface WorldPresetTagsProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): WorldPresetTagsProvider;
}
