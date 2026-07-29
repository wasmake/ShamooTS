// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_datacomponent_item from './io.papermc.paper.datacomponent.item.generated.js';
import type * as j_io_papermc_paper_item from './io.papermc.paper.item.generated.js';
import type * as j_io_papermc_paper_registry_tag from './io.papermc.paper.registry.tag.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta_trim from './org.bukkit.inventory.meta.trim.generated.js';

/** JVM interface io.papermc.paper.datacomponent.BuildableDataComponent. */
export interface BuildableDataComponentMembers<C /* extends BuildableDataComponent<C, B> */ = unknown, B /* extends DataComponentBuilder<C> */ = unknown> {
  toBuilder(): B;
}
export type BuildableDataComponent<C /* extends BuildableDataComponent<C, B> */ = unknown, B /* extends DataComponentBuilder<C> */ = unknown> = BuildableDataComponentMembers<C, B>;
export interface BuildableDataComponentStatics {
}

/** JVM interface io.papermc.paper.datacomponent.DataComponentBuilder. */
export interface DataComponentBuilderMembers<C = unknown> {
  build(): C;
}
export type DataComponentBuilder<C = unknown> = DataComponentBuilderMembers<C>;
export interface DataComponentBuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.DataComponentHolder. */
export interface DataComponentHolderMembers {
  readonly __javaSupertypes?: readonly [DataComponentView];
  setData(arg0: DataComponentType_NonValued): void;
  setData<T>(arg0: DataComponentType_Valued<T>, arg1: DataComponentBuilder<T>): void;
  setData<T>(arg0: DataComponentType_Valued<T>, arg1: T): void;
}
export type DataComponentHolder = DataComponentHolderMembers & DataComponentView;
export interface DataComponentHolderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.DataComponentType. */
export interface DataComponentTypeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  isPersistent(): boolean;
}
export type DataComponentType = DataComponentTypeMembers & j_org_bukkit.Keyed;
export interface DataComponentTypeStatics {
}

/** JVM interface io.papermc.paper.datacomponent.DataComponentType$NonValued. */
export interface DataComponentType_NonValuedMembers {
  readonly __javaSupertypes?: readonly [DataComponentType];
}
export type DataComponentType_NonValued = DataComponentType_NonValuedMembers & DataComponentType;
export interface DataComponentType_NonValuedStatics {
}

/** JVM interface io.papermc.paper.datacomponent.DataComponentType$Valued. */
export interface DataComponentType_ValuedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [DataComponentType];
}
export type DataComponentType_Valued<T = unknown> = DataComponentType_ValuedMembers<T> & DataComponentType;
export interface DataComponentType_ValuedStatics {
}

/** JVM class io.papermc.paper.datacomponent.DataComponentTypes. */
export interface DataComponentTypesMembers {
}
export type DataComponentTypes = DataComponentTypesMembers;
export interface DataComponentTypesStatics {
  readonly ATTRIBUTE_MODIFIERS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemAttributeModifiers>;
  readonly AXOLOTL_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Axolotl_Variant>;
  readonly BANNER_PATTERNS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.BannerPatternLayers>;
  readonly BASE_COLOR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly BLOCKS_ATTACKS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.BlocksAttacks>;
  readonly BLOCK_DATA: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.BlockItemDataProperties>;
  readonly BREAK_SOUND: DataComponentType_Valued<JavaOpaque<"net.kyori.adventure.key.Key">>;
  readonly BUNDLE_CONTENTS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.BundleContents>;
  readonly CAN_BREAK: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemAdventurePredicate>;
  readonly CAN_PLACE_ON: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemAdventurePredicate>;
  readonly CAT_COLLAR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly CAT_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Cat_Type>;
  readonly CHARGED_PROJECTILES: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ChargedProjectiles>;
  readonly CHICKEN_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Chicken_Variant>;
  readonly CONSUMABLE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Consumable>;
  readonly CONTAINER: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemContainerContents>;
  readonly CONTAINER_LOOT: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.SeededContainerLoot>;
  readonly COW_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Cow_Variant>;
  readonly CUSTOM_MODEL_DATA: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.CustomModelData>;
  readonly CUSTOM_NAME: DataComponentType_Valued<j_net_kyori_adventure_text.Component>;
  readonly DAMAGE: DataComponentType_Valued<number>;
  readonly DAMAGE_RESISTANT: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.DamageResistant>;
  readonly DEATH_PROTECTION: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.DeathProtection>;
  readonly DYED_COLOR: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.DyedItemColor>;
  readonly ENCHANTABLE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Enchantable>;
  readonly ENCHANTMENTS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemEnchantments>;
  readonly ENCHANTMENT_GLINT_OVERRIDE: DataComponentType_Valued<boolean>;
  readonly EQUIPPABLE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Equippable>;
  readonly FIREWORKS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Fireworks>;
  readonly FIREWORK_EXPLOSION: DataComponentType_Valued<j_org_bukkit.FireworkEffect>;
  readonly FOOD: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.FoodProperties>;
  readonly FOX_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Fox_Type>;
  readonly FROG_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Frog_Variant>;
  readonly GLIDER: DataComponentType_NonValued;
  readonly HORSE_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Horse_Color>;
  readonly INSTRUMENT: DataComponentType_Valued<j_org_bukkit.MusicInstrument>;
  readonly INTANGIBLE_PROJECTILE: DataComponentType_NonValued;
  readonly ITEM_MODEL: DataComponentType_Valued<JavaOpaque<"net.kyori.adventure.key.Key">>;
  readonly ITEM_NAME: DataComponentType_Valued<j_net_kyori_adventure_text.Component>;
  readonly JUKEBOX_PLAYABLE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.JukeboxPlayable>;
  readonly LLAMA_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Llama_Color>;
  readonly LODESTONE_TRACKER: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.LodestoneTracker>;
  readonly LORE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemLore>;
  readonly MAP_COLOR: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.MapItemColor>;
  readonly MAP_DECORATIONS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.MapDecorations>;
  readonly MAP_ID: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.MapId>;
  readonly MAP_POST_PROCESSING: DataComponentType_Valued<j_io_papermc_paper_item.MapPostProcessing>;
  readonly MAX_DAMAGE: DataComponentType_Valued<number>;
  readonly MAX_STACK_SIZE: DataComponentType_Valued<number>;
  readonly MOOSHROOM_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.MushroomCow_Variant>;
  readonly NOTE_BLOCK_SOUND: DataComponentType_Valued<JavaOpaque<"net.kyori.adventure.key.Key">>;
  readonly OMINOUS_BOTTLE_AMPLIFIER: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.OminousBottleAmplifier>;
  readonly PAINTING_VARIANT: DataComponentType_Valued<j_org_bukkit.Art>;
  readonly PARROT_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Parrot_Variant>;
  readonly PIG_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Pig_Variant>;
  readonly POTION_CONTENTS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.PotionContents>;
  readonly POTION_DURATION_SCALE: DataComponentType_Valued<number>;
  readonly POT_DECORATIONS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.PotDecorations>;
  readonly PROFILE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ResolvableProfile>;
  readonly PROVIDES_BANNER_PATTERNS: DataComponentType_Valued<j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>>;
  readonly PROVIDES_TRIM_MATERIAL: DataComponentType_Valued<j_org_bukkit_inventory_meta_trim.TrimMaterial>;
  readonly RABBIT_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Rabbit_Type>;
  readonly RARITY: DataComponentType_Valued<j_org_bukkit_inventory.ItemRarity_2>;
  readonly RECIPES: DataComponentType_Valued<JavaList<JavaOpaque<"net.kyori.adventure.key.Key">>>;
  readonly REPAIRABLE: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Repairable>;
  readonly REPAIR_COST: DataComponentType_Valued<number>;
  readonly SALMON_SIZE: DataComponentType_Valued<j_org_bukkit_entity.Salmon_Variant>;
  readonly SHEEP_COLOR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly SHULKER_COLOR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly STORED_ENCHANTMENTS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemEnchantments>;
  readonly SUSPICIOUS_STEW_EFFECTS: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.SuspiciousStewEffects>;
  readonly TOOL: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Tool>;
  readonly TOOLTIP_DISPLAY: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.TooltipDisplay>;
  readonly TOOLTIP_STYLE: DataComponentType_Valued<JavaOpaque<"net.kyori.adventure.key.Key">>;
  readonly TRIM: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.ItemArmorTrim>;
  readonly TROPICAL_FISH_BASE_COLOR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly TROPICAL_FISH_PATTERN: DataComponentType_Valued<j_org_bukkit_entity.TropicalFish_Pattern>;
  readonly TROPICAL_FISH_PATTERN_COLOR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly UNBREAKABLE: DataComponentType_NonValued;
  readonly USE_COOLDOWN: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.UseCooldown>;
  readonly USE_REMAINDER: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.UseRemainder>;
  readonly VILLAGER_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Villager_Type>;
  readonly WEAPON: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.Weapon>;
  readonly WOLF_COLLAR: DataComponentType_Valued<j_org_bukkit.DyeColor>;
  readonly WOLF_SOUND_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Wolf_SoundVariant>;
  readonly WOLF_VARIANT: DataComponentType_Valued<j_org_bukkit_entity.Wolf_Variant>;
  readonly WRITABLE_BOOK_CONTENT: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.WritableBookContent>;
  readonly WRITTEN_BOOK_CONTENT: DataComponentType_Valued<j_io_papermc_paper_datacomponent_item.WrittenBookContent>;
}

/** JVM interface io.papermc.paper.datacomponent.DataComponentView. */
export interface DataComponentViewMembers {
  getData<T>(arg0: DataComponentType_Valued<T>): T | null;
  getDataOrDefault<T>(arg0: DataComponentType_Valued<T>, arg1: T | null): T | null;
  hasData(arg0: DataComponentType): boolean;
}
export type DataComponentView = DataComponentViewMembers;
export interface DataComponentViewStatics {
}
