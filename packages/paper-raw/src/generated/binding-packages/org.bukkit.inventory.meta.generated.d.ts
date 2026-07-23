// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper from './com.destroystokyo.paper.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_potion from './io.papermc.paper.potion.generated.js';
import type * as j_net_kyori_adventure_inventory from './net.kyori.adventure.inventory.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_attribute from './org.bukkit.attribute.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta_components from './org.bukkit.inventory.meta.components.generated.js';
import type * as j_org_bukkit_inventory_meta_tags from './org.bukkit.inventory.meta.tags.generated.js';
import type * as j_org_bukkit_inventory_meta_trim from './org.bukkit.inventory.meta.trim.generated.js';
import type * as j_org_bukkit_map from './org.bukkit.map.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';
import type * as j_org_bukkit_profile from './org.bukkit.profile.generated.js';

/** JVM interface org.bukkit.inventory.meta.ArmorMeta. */
export interface ArmorMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ArmorMeta;
  clone(): ItemMeta;
  getTrim(): j_org_bukkit_inventory_meta_trim.ArmorTrim | null;
  hasTrim(): boolean;
  setTrim(arg0: j_org_bukkit_inventory_meta_trim.ArmorTrim | null): void | null;
}
export type ArmorMeta = ArmorMetaMembers & ItemMeta;
export interface ArmorMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.AxolotlBucketMeta. */
export interface AxolotlBucketMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): AxolotlBucketMeta;
  clone(): ItemMeta;
  getVariant(): j_org_bukkit_entity.Axolotl_Variant;
  hasVariant(): boolean;
  setVariant(arg0: j_org_bukkit_entity.Axolotl_Variant): void;
}
export type AxolotlBucketMeta = AxolotlBucketMetaMembers & ItemMeta;
export interface AxolotlBucketMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.BannerMeta. */
export interface BannerMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addPattern(arg0: j_org_bukkit_block_banner.Pattern): void;
  getPattern(arg0: number): j_org_bukkit_block_banner.Pattern;
  getPatterns(): JavaList<j_org_bukkit_block_banner.Pattern>;
  numberOfPatterns(): number;
  removePattern(arg0: number): j_org_bukkit_block_banner.Pattern;
  setPattern(arg0: number, arg1: j_org_bukkit_block_banner.Pattern): void;
  setPatterns(arg0: JavaList<j_org_bukkit_block_banner.Pattern>): void;
}
export type BannerMeta = BannerMetaMembers & ItemMeta;
export interface BannerMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.BlockDataMeta. */
export interface BlockDataMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  getBlockData(arg0: j_org_bukkit.Material): j_org_bukkit_block_data.BlockData;
  hasBlockData(): boolean;
  setBlockData(arg0: j_org_bukkit_block_data.BlockData): void;
}
export type BlockDataMeta = BlockDataMetaMembers & ItemMeta;
export interface BlockDataMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.BlockStateMeta. */
export interface BlockStateMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clearBlockState(): void;
  getBlockState(): j_org_bukkit_block.BlockState;
  hasBlockState(): boolean;
  setBlockState(arg0: j_org_bukkit_block.BlockState): void;
}
export type BlockStateMeta = BlockStateMetaMembers & ItemMeta;
export interface BlockStateMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.BookMeta. */
export interface BookMetaMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_inventory.Book, WritableBookMeta];
  addPage(...arg0: Array<string>): void;
  addPages(...arg0: Array<j_net_kyori_adventure_text.Component>): void;
  author(): j_net_kyori_adventure_text.Component | null;
  author(arg0: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_inventory.Book | null;
  author(arg0: j_net_kyori_adventure_text.Component): BookMeta | null;
  clone(): BookMeta;
  clone(): ItemMeta;
  clone(): WritableBookMeta;
  getAuthor(): string | null;
  getGeneration(): BookMeta_Generation | null;
  getPage(arg0: number): string;
  getPages(): JavaList<string>;
  getTitle(): string | null;
  hasAuthor(): boolean;
  hasGeneration(): boolean;
  hasTitle(): boolean;
  page(arg0: number): j_net_kyori_adventure_text.Component;
  page(arg0: number, arg1: j_net_kyori_adventure_text.Component): void;
  setAuthor(arg0: string | null): void | null;
  setGeneration(arg0: BookMeta_Generation | null): void | null;
  setPage(arg0: number, arg1: string): void;
  setPages(arg0: JavaList<string>): void;
  setPages(...arg0: Array<string>): void;
  setTitle(arg0: string | null): boolean | null;
  spigot(): BookMeta_Spigot;
  title(): j_net_kyori_adventure_text.Component | null;
  title(arg0: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_inventory.Book | null;
  title(arg0: j_net_kyori_adventure_text.Component): BookMeta | null;
  toBuilder(): j_net_kyori_adventure_inventory.Book_Builder;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
  toBuilder(): BookMeta_BookMetaBuilder;
}
export type BookMeta = BookMetaMembers & j_net_kyori_adventure_inventory.Book & WritableBookMeta;
export interface BookMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.BookMeta$BookMetaBuilder. */
export interface BookMeta_BookMetaBuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_inventory.Book_Builder];
  addPage(arg0: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_inventory.Book_Builder;
  addPage(arg0: j_net_kyori_adventure_text.Component): BookMeta_BookMetaBuilder;
  author(arg0: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_inventory.Book_Builder | null;
  author(arg0: j_net_kyori_adventure_text.Component): BookMeta_BookMetaBuilder | null;
  build(): object;
  build(): j_net_kyori_adventure_inventory.Book;
  build(): BookMeta;
  pages(arg0: JavaCollection<object>): j_net_kyori_adventure_inventory.Book_Builder;
  pages(arg0: JavaCollection<j_net_kyori_adventure_text.Component>): BookMeta_BookMetaBuilder;
  pages(arg0: Array<j_net_kyori_adventure_text.Component>): j_net_kyori_adventure_inventory.Book_Builder;
  pages(...arg0: Array<j_net_kyori_adventure_text.Component>): BookMeta_BookMetaBuilder;
  title(arg0: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_inventory.Book_Builder | null;
  title(arg0: j_net_kyori_adventure_text.Component): BookMeta_BookMetaBuilder | null;
}
export type BookMeta_BookMetaBuilder = BookMeta_BookMetaBuilderMembers & j_net_kyori_adventure_inventory.Book_Builder;
export interface BookMeta_BookMetaBuilderStatics {
}

/** Live JVM enum org.bukkit.inventory.meta.BookMeta$Generation; constants are host handles, not strings. */
export type BookMeta_Generation = JavaEnum<"org.bukkit.inventory.meta.BookMeta$Generation", "COPY_OF_COPY" | "COPY_OF_ORIGINAL" | "ORIGINAL" | "TATTERED"> & BookMeta_GenerationMembers;
export interface BookMeta_GenerationMembers {
}
export interface BookMeta_GenerationStatics {
  readonly COPY_OF_COPY: BookMeta_Generation;
  readonly COPY_OF_ORIGINAL: BookMeta_Generation;
  readonly ORIGINAL: BookMeta_Generation;
  readonly TATTERED: BookMeta_Generation;
  valueOf(arg0: string): BookMeta_Generation;
  values(): Array<BookMeta_Generation>;
}

/** JVM class org.bukkit.inventory.meta.BookMeta$Spigot. */
export interface BookMeta_SpigotMembers {
  addPage(...arg0: Array<Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>>): void;
  getPage(arg0: number): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getPages(): JavaList<Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>>;
  setPage(arg0: number, ...arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent"> | null>): void | null;
  setPages(arg0: JavaList<Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>>): void;
  setPages(...arg0: Array<Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>>): void;
}
export type BookMeta_Spigot = BookMeta_SpigotMembers;
export interface BookMeta_SpigotStatics {
  new(): BookMeta_Spigot;
}

/** JVM interface org.bukkit.inventory.meta.BundleMeta. */
export interface BundleMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  getItems(): JavaList<j_org_bukkit_inventory.ItemStack>;
  hasItems(): boolean;
  setItems(arg0: JavaList<j_org_bukkit_inventory.ItemStack> | null): void | null;
}
export type BundleMeta = BundleMetaMembers & ItemMeta;
export interface BundleMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.ColorableArmorMeta. */
export interface ColorableArmorMetaMembers {
  readonly __javaSupertypes?: readonly [ArmorMeta, LeatherArmorMeta];
  clone(): ArmorMeta;
  clone(): ColorableArmorMeta;
  clone(): ItemMeta;
  clone(): LeatherArmorMeta;
}
export type ColorableArmorMeta = ColorableArmorMetaMembers & ArmorMeta & LeatherArmorMeta;
export interface ColorableArmorMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.CompassMeta. */
export interface CompassMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clearLodestone(): void;
  clone(): CompassMeta;
  clone(): ItemMeta;
  getLodestone(): j_org_bukkit.Location | null;
  hasLodestone(): boolean;
  isLodestoneCompass(): boolean;
  isLodestoneTracked(): boolean;
  setLodestone(arg0: j_org_bukkit.Location | null): void | null;
  setLodestoneTracked(arg0: boolean): void;
}
export type CompassMeta = CompassMetaMembers & ItemMeta;
export interface CompassMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.CrossbowMeta. */
export interface CrossbowMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addChargedProjectile(arg0: j_org_bukkit_inventory.ItemStack): void;
  getChargedProjectiles(): JavaList<j_org_bukkit_inventory.ItemStack>;
  hasChargedProjectiles(): boolean;
  setChargedProjectiles(arg0: JavaList<j_org_bukkit_inventory.ItemStack> | null): void | null;
}
export type CrossbowMeta = CrossbowMetaMembers & ItemMeta;
export interface CrossbowMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.Damageable. */
export interface Damageable_2Members {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): Damageable_2;
  clone(): ItemMeta;
  getDamage(): number;
  getMaxDamage(): number;
  hasDamage(): boolean;
  hasDamageValue(): boolean;
  hasMaxDamage(): boolean;
  resetDamage(): void;
  setDamage(arg0: number): void;
  setMaxDamage(arg0: number | null): void | null;
}
export type Damageable_2 = Damageable_2Members & ItemMeta;
export interface Damageable_2Statics {
}

/** JVM interface org.bukkit.inventory.meta.EnchantmentStorageMeta. */
export interface EnchantmentStorageMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addStoredEnchant(arg0: j_org_bukkit_enchantments.Enchantment, arg1: number, arg2: boolean): boolean;
  clone(): EnchantmentStorageMeta;
  clone(): ItemMeta;
  getStoredEnchantLevel(arg0: j_org_bukkit_enchantments.Enchantment): number;
  getStoredEnchants(): JavaMap<j_org_bukkit_enchantments.Enchantment, number>;
  hasConflictingStoredEnchant(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
  hasStoredEnchant(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
  hasStoredEnchants(): boolean;
  /** @throws java.lang.IllegalArgumentException */
  removeStoredEnchant(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
}
export type EnchantmentStorageMeta = EnchantmentStorageMetaMembers & ItemMeta;
export interface EnchantmentStorageMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.FireworkEffectMeta. */
export interface FireworkEffectMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): FireworkEffectMeta;
  clone(): ItemMeta;
  getEffect(): j_org_bukkit.FireworkEffect | null;
  hasEffect(): boolean;
  setEffect(arg0: j_org_bukkit.FireworkEffect | null): void | null;
}
export type FireworkEffectMeta = FireworkEffectMetaMembers & ItemMeta;
export interface FireworkEffectMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.FireworkMeta. */
export interface FireworkMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  /** @throws java.lang.IllegalArgumentException */
  addEffect(arg0: j_org_bukkit.FireworkEffect): void;
  /** @throws java.lang.IllegalArgumentException */
  addEffects(arg0: Iterable<j_org_bukkit.FireworkEffect>): void;
  /** @throws java.lang.IllegalArgumentException */
  addEffects(...arg0: Array<j_org_bukkit.FireworkEffect>): void;
  clearEffects(): void;
  clone(): FireworkMeta;
  clone(): ItemMeta;
  getEffects(): JavaList<j_org_bukkit.FireworkEffect>;
  getEffectsSize(): number;
  getPower(): number;
  hasEffects(): boolean;
  hasPower(): boolean;
  /** @throws java.lang.IndexOutOfBoundsException */
  removeEffect(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setPower(arg0: number): void;
}
export type FireworkMeta = FireworkMetaMembers & ItemMeta;
export interface FireworkMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.ItemMeta. */
export interface ItemMetaMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">, j_org_bukkit_configuration_serialization.ConfigurationSerializable, j_org_bukkit_persistence.PersistentDataHolder];
  addAttributeModifier(arg0: j_org_bukkit_attribute.Attribute, arg1: j_org_bukkit_attribute.AttributeModifier): boolean;
  addEnchant(arg0: j_org_bukkit_enchantments.Enchantment, arg1: number, arg2: boolean): boolean;
  addItemFlags(...arg0: Array<j_org_bukkit_inventory.ItemFlag>): void;
  clone(): ItemMeta;
  customName(): j_net_kyori_adventure_text.Component | null;
  customName(arg0: j_net_kyori_adventure_text.Component): void | null;
  displayName(): j_net_kyori_adventure_text.Component | null;
  displayName(arg0: j_net_kyori_adventure_text.Component): void | null;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap", [j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier]> | null;
  getAttributeModifiers(arg0: j_org_bukkit_attribute.Attribute): JavaCollection<j_org_bukkit_attribute.AttributeModifier> | null;
  getAttributeModifiers(arg0: j_org_bukkit_inventory.EquipmentSlot): JavaOpaque<"com.google.common.collect.Multimap", [j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier]>;
  getCanDestroy(): JavaSet<j_org_bukkit.Material>;
  getCanPlaceOn(): JavaSet<j_org_bukkit.Material>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): j_org_bukkit_inventory_meta_components.CustomModelDataComponent;
  getCustomTagContainer(): j_org_bukkit_inventory_meta_tags.CustomItemTagContainer;
  getDamageResistant(): j_org_bukkit.Tag_2<j_org_bukkit_damage.DamageType> | null;
  getDestroyableKeys(): JavaSet<j_com_destroystokyo_paper.Namespaced>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: j_org_bukkit_enchantments.Enchantment): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<j_org_bukkit_enchantments.Enchantment, number>;
  getEquippable(): j_org_bukkit_inventory_meta_components.EquippableComponent;
  getFood(): j_org_bukkit_inventory_meta_components.FoodComponent;
  getItemFlags(): JavaSet<j_org_bukkit_inventory.ItemFlag>;
  getItemModel(): j_org_bukkit.NamespacedKey | null;
  getItemName(): string;
  getJukeboxPlayable(): j_org_bukkit_inventory_meta_components.JukeboxPlayableComponent;
  getLocalizedName(): string;
  getLore(): JavaList<string> | null;
  getLoreComponents(): JavaList<Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>> | null;
  getMaxStackSize(): number;
  getPlaceableKeys(): JavaSet<j_com_destroystokyo_paper.Namespaced>;
  getRarity(): j_org_bukkit_inventory.ItemRarity_2;
  getTool(): j_org_bukkit_inventory_meta_components.ToolComponent;
  getTooltipStyle(): j_org_bukkit.NamespacedKey | null;
  getUseCooldown(): j_org_bukkit_inventory_meta_components.UseCooldownComponent;
  getUseRemainder(): j_org_bukkit_inventory.ItemStack | null;
  hasAttributeModifiers(): boolean;
  hasConflictingEnchant(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamageResistant(): boolean;
  hasDestroyableKeys(): boolean;
  hasDisplayName(): boolean;
  hasEnchant(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: j_org_bukkit_inventory.ItemFlag): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): j_net_kyori_adventure_text.Component;
  itemName(arg0: j_net_kyori_adventure_text.Component | null): void | null;
  lore(): JavaList<j_net_kyori_adventure_text.Component> | null;
  lore(arg0: JavaList<j_net_kyori_adventure_text.Component> | null): void | null;
  removeAttributeModifier(arg0: j_org_bukkit_attribute.Attribute): boolean;
  removeAttributeModifier(arg0: j_org_bukkit_attribute.Attribute, arg1: j_org_bukkit_attribute.AttributeModifier): boolean;
  removeAttributeModifier(arg0: j_org_bukkit_inventory.EquipmentSlot): boolean;
  removeEnchant(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
  removeEnchantments(): void;
  removeItemFlags(...arg0: Array<j_org_bukkit_inventory.ItemFlag>): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap", [j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier]> | null): void | null;
  setCanDestroy(arg0: JavaSet<j_org_bukkit.Material>): void;
  setCanPlaceOn(arg0: JavaSet<j_org_bukkit.Material>): void;
  setCustomModelData(arg0: number | null): void | null;
  setCustomModelDataComponent(arg0: j_org_bukkit_inventory_meta_components.CustomModelDataComponent | null): void | null;
  setDamageResistant(arg0: j_org_bukkit.Tag_2<j_org_bukkit_damage.DamageType> | null): void | null;
  setDestroyableKeys(arg0: JavaCollection<j_com_destroystokyo_paper.Namespaced>): void;
  setDisplayName(arg0: string | null): void | null;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">> | null): void | null;
  setEnchantable(arg0: number | null): void | null;
  setEnchantmentGlintOverride(arg0: boolean | null): void | null;
  setEquippable(arg0: j_org_bukkit_inventory_meta_components.EquippableComponent | null): void | null;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: j_org_bukkit_inventory_meta_components.FoodComponent | null): void | null;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: j_org_bukkit.NamespacedKey | null): void | null;
  setItemName(arg0: string | null): void | null;
  setJukeboxPlayable(arg0: j_org_bukkit_inventory_meta_components.JukeboxPlayableComponent | null): void | null;
  setLocalizedName(arg0: string | null): void | null;
  setLore(arg0: JavaList<string> | null): void | null;
  setLoreComponents(arg0: JavaList<Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>> | null): void | null;
  setMaxStackSize(arg0: number | null): void | null;
  setPlaceableKeys(arg0: JavaCollection<j_com_destroystokyo_paper.Namespaced>): void;
  setRarity(arg0: j_org_bukkit_inventory.ItemRarity_2 | null): void | null;
  setTool(arg0: j_org_bukkit_inventory_meta_components.ToolComponent | null): void | null;
  setTooltipStyle(arg0: j_org_bukkit.NamespacedKey | null): void | null;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: j_org_bukkit_inventory_meta_components.UseCooldownComponent | null): void | null;
  setUseRemainder(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setVersion(arg0: number): void;
}
export type ItemMeta = ItemMetaMembers & JavaOpaque<"java.lang.Cloneable"> & j_org_bukkit_configuration_serialization.ConfigurationSerializable & j_org_bukkit_persistence.PersistentDataHolder;
export interface ItemMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.KnowledgeBookMeta. */
export interface KnowledgeBookMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addRecipe(...arg0: Array<j_org_bukkit.NamespacedKey>): void;
  clone(): ItemMeta;
  clone(): KnowledgeBookMeta;
  getRecipes(): JavaList<j_org_bukkit.NamespacedKey>;
  hasRecipes(): boolean;
  setRecipes(arg0: JavaList<j_org_bukkit.NamespacedKey>): void;
}
export type KnowledgeBookMeta = KnowledgeBookMetaMembers & ItemMeta;
export interface KnowledgeBookMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.LeatherArmorMeta. */
export interface LeatherArmorMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): LeatherArmorMeta;
  getColor(): j_org_bukkit.Color;
  isDyed(): boolean;
  setColor(arg0: j_org_bukkit.Color | null): void | null;
}
export type LeatherArmorMeta = LeatherArmorMetaMembers & ItemMeta;
export interface LeatherArmorMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.MapMeta. */
export interface MapMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): MapMeta;
  getColor(): j_org_bukkit.Color | null;
  getLocationName(): string | null;
  getMapId(): number;
  getMapView(): j_org_bukkit_map.MapView | null;
  hasColor(): boolean;
  hasLocationName(): boolean;
  hasMapId(): boolean;
  hasMapView(): boolean;
  isScaling(): boolean;
  setColor(arg0: j_org_bukkit.Color | null): void | null;
  setLocationName(arg0: string | null): void | null;
  setMapId(arg0: number): void;
  setMapView(arg0: j_org_bukkit_map.MapView): void;
  setScaling(arg0: boolean): void;
}
export type MapMeta = MapMetaMembers & ItemMeta;
export interface MapMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.MusicInstrumentMeta. */
export interface MusicInstrumentMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): MusicInstrumentMeta;
  getInstrument(): j_org_bukkit.MusicInstrument | null;
  setInstrument(arg0: j_org_bukkit.MusicInstrument | null): void | null;
}
export type MusicInstrumentMeta = MusicInstrumentMetaMembers & ItemMeta;
export interface MusicInstrumentMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.OminousBottleMeta. */
export interface OminousBottleMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): OminousBottleMeta;
  getAmplifier(): number;
  hasAmplifier(): boolean;
  setAmplifier(arg0: number): void;
}
export type OminousBottleMeta = OminousBottleMetaMembers & ItemMeta;
export interface OminousBottleMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.PotionMeta. */
export interface PotionMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addCustomEffect(arg0: j_org_bukkit_potion.PotionEffect, arg1: boolean): boolean;
  clearCustomEffects(): boolean;
  clone(): ItemMeta;
  clone(): PotionMeta;
  computeEffectiveColor(): j_org_bukkit.Color;
  getAllEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  getBasePotionData(): j_org_bukkit_potion.PotionData | null;
  getBasePotionType(): j_org_bukkit_potion.PotionType | null;
  getColor(): j_org_bukkit.Color | null;
  getCustomEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  getCustomName(): string | null;
  getCustomPotionName(): string | null;
  hasBasePotionType(): boolean;
  hasColor(): boolean;
  hasCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  hasCustomEffects(): boolean;
  hasCustomName(): boolean;
  hasCustomPotionName(): boolean;
  removeCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  setBasePotionData(arg0: j_org_bukkit_potion.PotionData | null): void | null;
  setBasePotionType(arg0: j_org_bukkit_potion.PotionType | null): void | null;
  setColor(arg0: j_org_bukkit.Color | null): void | null;
  setCustomName(arg0: string | null): void | null;
  setCustomPotionName(arg0: string | null): void | null;
  setMainEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
}
export type PotionMeta = PotionMetaMembers & ItemMeta;
export interface PotionMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.Repairable. */
export interface Repairable_2Members {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): Repairable_2;
  getRepairCost(): number;
  hasRepairCost(): boolean;
  setRepairCost(arg0: number): void;
}
export type Repairable_2 = Repairable_2Members & ItemMeta;
export interface Repairable_2Statics {
}

/** JVM interface org.bukkit.inventory.meta.ShieldMeta. */
export interface ShieldMetaMembers {
  readonly __javaSupertypes?: readonly [BannerMeta];
  getBaseColor(): j_org_bukkit.DyeColor | null;
  setBaseColor(arg0: j_org_bukkit.DyeColor | null): void | null;
}
export type ShieldMeta = ShieldMetaMembers & BannerMeta;
export interface ShieldMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.SkullMeta. */
export interface SkullMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): SkullMeta;
  getNoteBlockSound(): j_org_bukkit.NamespacedKey | null;
  getOwner(): string | null;
  getOwnerProfile(): j_org_bukkit_profile.PlayerProfile_2 | null;
  getOwningPlayer(): j_org_bukkit.OfflinePlayer | null;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile | null;
  hasOwner(): boolean;
  setNoteBlockSound(arg0: j_org_bukkit.NamespacedKey | null): void | null;
  setOwner(arg0: string | null): boolean | null;
  setOwnerProfile(arg0: j_org_bukkit_profile.PlayerProfile_2 | null): void | null;
  setOwningPlayer(arg0: j_org_bukkit.OfflinePlayer | null): boolean | null;
  setPlayerProfile(arg0: j_com_destroystokyo_paper_profile.PlayerProfile | null): void | null;
}
export type SkullMeta = SkullMetaMembers & ItemMeta;
export interface SkullMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.SpawnEggMeta. */
export interface SpawnEggMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): SpawnEggMeta;
  getCustomSpawnedType(): j_org_bukkit_entity.EntityType | null;
  getSpawnedEntity(): j_org_bukkit_entity.EntitySnapshot | null;
  getSpawnedType(): j_org_bukkit_entity.EntityType;
  setCustomSpawnedType(arg0: j_org_bukkit_entity.EntityType | null): void | null;
  setSpawnedEntity(arg0: j_org_bukkit_entity.EntitySnapshot): void;
  setSpawnedType(arg0: j_org_bukkit_entity.EntityType): void;
}
export type SpawnEggMeta = SpawnEggMetaMembers & ItemMeta;
export interface SpawnEggMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.SuspiciousStewMeta. */
export interface SuspiciousStewMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addCustomEffect(arg0: j_io_papermc_paper_potion.SuspiciousEffectEntry, arg1: boolean): boolean;
  addCustomEffect(arg0: j_org_bukkit_potion.PotionEffect, arg1: boolean): boolean;
  clearCustomEffects(): boolean;
  clone(): ItemMeta;
  clone(): SuspiciousStewMeta;
  getCustomEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  hasCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  hasCustomEffects(): boolean;
  removeCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
}
export type SuspiciousStewMeta = SuspiciousStewMetaMembers & ItemMeta;
export interface SuspiciousStewMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.TropicalFishBucketMeta. */
export interface TropicalFishBucketMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  clone(): ItemMeta;
  clone(): TropicalFishBucketMeta;
  getBodyColor(): j_org_bukkit.DyeColor;
  getPattern(): j_org_bukkit_entity.TropicalFish_Pattern;
  getPatternColor(): j_org_bukkit.DyeColor;
  hasVariant(): boolean;
  setBodyColor(arg0: j_org_bukkit.DyeColor): void;
  setPattern(arg0: j_org_bukkit_entity.TropicalFish_Pattern): void;
  setPatternColor(arg0: j_org_bukkit.DyeColor): void;
}
export type TropicalFishBucketMeta = TropicalFishBucketMetaMembers & ItemMeta;
export interface TropicalFishBucketMetaStatics {
}

/** JVM interface org.bukkit.inventory.meta.WritableBookMeta. */
export interface WritableBookMetaMembers {
  readonly __javaSupertypes?: readonly [ItemMeta];
  addPage(...arg0: Array<string>): void;
  clone(): ItemMeta;
  clone(): WritableBookMeta;
  getPage(arg0: number): string;
  getPageCount(): number;
  getPages(): JavaList<string>;
  hasPages(): boolean;
  setPage(arg0: number, arg1: string): void;
  setPages(arg0: JavaList<string>): void;
  setPages(...arg0: Array<string>): void;
}
export type WritableBookMeta = WritableBookMetaMembers & ItemMeta;
export interface WritableBookMetaStatics {
}
