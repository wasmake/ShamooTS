// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_block from './io.papermc.paper.block.generated.js';
import type * as j_io_papermc_paper_datacomponent from './io.papermc.paper.datacomponent.generated.js';
import type * as j_io_papermc_paper_datacomponent_item_attribute from './io.papermc.paper.datacomponent.item.attribute.generated.js';
import type * as j_io_papermc_paper_datacomponent_item_blocksattacks from './io.papermc.paper.datacomponent.item.blocksattacks.generated.js';
import type * as j_io_papermc_paper_datacomponent_item_consumable from './io.papermc.paper.datacomponent.item.consumable.generated.js';
import type * as j_io_papermc_paper_potion from './io.papermc.paper.potion.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_io_papermc_paper_registry_tag from './io.papermc.paper.registry.tag.generated.js';
import type * as j_io_papermc_paper_text from './io.papermc.paper.text.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_attribute from './org.bukkit.attribute.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta_trim from './org.bukkit.inventory.meta.trim.generated.js';
import type * as j_org_bukkit_map from './org.bukkit.map.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM interface io.papermc.paper.datacomponent.item.BannerPatternLayers. */
export interface BannerPatternLayersMembers {
  patterns(): JavaList<j_org_bukkit_block_banner.Pattern>;
}
export type BannerPatternLayers = BannerPatternLayersMembers;
export interface BannerPatternLayersStatics {
  bannerPatternLayers(): BannerPatternLayers_Builder;
  bannerPatternLayers(arg0: JavaList<j_org_bukkit_block_banner.Pattern>): BannerPatternLayers;
}

/** JVM interface io.papermc.paper.datacomponent.item.BannerPatternLayers$Builder. */
export interface BannerPatternLayers_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<BannerPatternLayers>];
  add(arg0: j_org_bukkit_block_banner.Pattern): BannerPatternLayers_Builder;
  addAll(arg0: JavaList<j_org_bukkit_block_banner.Pattern>): BannerPatternLayers_Builder;
}
export type BannerPatternLayers_Builder = BannerPatternLayers_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<BannerPatternLayers>;
export interface BannerPatternLayers_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.BlockItemDataProperties. */
export interface BlockItemDataPropertiesMembers {
  applyTo(arg0: j_org_bukkit_block_data.BlockData): j_org_bukkit_block_data.BlockData;
  createBlockData(arg0: j_org_bukkit_block.BlockType): j_org_bukkit_block_data.BlockData;
}
export type BlockItemDataProperties = BlockItemDataPropertiesMembers;
export interface BlockItemDataPropertiesStatics {
  blockItemStateProperties(): BlockItemDataProperties_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.BlockItemDataProperties$Builder. */
export interface BlockItemDataProperties_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<BlockItemDataProperties>];
}
export type BlockItemDataProperties_Builder = BlockItemDataProperties_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<BlockItemDataProperties>;
export interface BlockItemDataProperties_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.BlocksAttacks. */
export interface BlocksAttacksMembers {
  blockDelaySeconds(): number;
  blockSound(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  bypassedBy(): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType> | null;
  damageReductions(): JavaList<j_io_papermc_paper_datacomponent_item_blocksattacks.DamageReduction>;
  disableCooldownScale(): number;
  disableSound(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  itemDamage(): j_io_papermc_paper_datacomponent_item_blocksattacks.ItemDamageFunction;
}
export type BlocksAttacks = BlocksAttacksMembers;
export interface BlocksAttacksStatics {
  blocksAttacks(): BlocksAttacks_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.BlocksAttacks$Builder. */
export interface BlocksAttacks_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<BlocksAttacks>];
  addDamageReduction(arg0: j_io_papermc_paper_datacomponent_item_blocksattacks.DamageReduction): BlocksAttacks_Builder;
  blockDelaySeconds(arg0: number): BlocksAttacks_Builder;
  blockSound(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): BlocksAttacks_Builder;
  bypassedBy(arg0: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType> | null): BlocksAttacks_Builder;
  damageReductions(arg0: JavaList<j_io_papermc_paper_datacomponent_item_blocksattacks.DamageReduction>): BlocksAttacks_Builder;
  disableCooldownScale(arg0: number): BlocksAttacks_Builder;
  disableSound(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): BlocksAttacks_Builder;
  itemDamage(arg0: j_io_papermc_paper_datacomponent_item_blocksattacks.ItemDamageFunction): BlocksAttacks_Builder;
}
export type BlocksAttacks_Builder = BlocksAttacks_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<BlocksAttacks>;
export interface BlocksAttacks_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.BundleContents. */
export interface BundleContentsMembers {
  contents(): JavaList<j_org_bukkit_inventory.ItemStack>;
}
export type BundleContents = BundleContentsMembers;
export interface BundleContentsStatics {
  bundleContents(): BundleContents_Builder;
  bundleContents(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): BundleContents;
}

/** JVM interface io.papermc.paper.datacomponent.item.BundleContents$Builder. */
export interface BundleContents_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<BundleContents>];
  add(arg0: j_org_bukkit_inventory.ItemStack): BundleContents_Builder;
  addAll(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): BundleContents_Builder;
}
export type BundleContents_Builder = BundleContents_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<BundleContents>;
export interface BundleContents_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ChargedProjectiles. */
export interface ChargedProjectilesMembers {
  projectiles(): JavaList<j_org_bukkit_inventory.ItemStack>;
}
export type ChargedProjectiles = ChargedProjectilesMembers;
export interface ChargedProjectilesStatics {
  chargedProjectiles(): ChargedProjectiles_Builder;
  chargedProjectiles(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): ChargedProjectiles;
}

/** JVM interface io.papermc.paper.datacomponent.item.ChargedProjectiles$Builder. */
export interface ChargedProjectiles_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ChargedProjectiles>];
  add(arg0: j_org_bukkit_inventory.ItemStack): ChargedProjectiles_Builder;
  addAll(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): ChargedProjectiles_Builder;
}
export type ChargedProjectiles_Builder = ChargedProjectiles_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ChargedProjectiles>;
export interface ChargedProjectiles_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.Consumable. */
export interface ConsumableMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.BuildableDataComponent<Consumable, Consumable_Builder>];
  animation(): j_io_papermc_paper_datacomponent_item_consumable.ItemUseAnimation;
  consumeEffects(): JavaList<j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect>;
  consumeSeconds(): number;
  hasConsumeParticles(): boolean;
  sound(): JavaOpaque<"net.kyori.adventure.key.Key">;
  toBuilder(): Consumable_Builder;
}
export type Consumable = ConsumableMembers;
export interface ConsumableStatics {
  consumable(): Consumable_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.Consumable$Builder. */
export interface Consumable_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<Consumable>];
  addEffect(arg0: j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect): Consumable_Builder;
  addEffects(arg0: JavaList<j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect>): Consumable_Builder;
  animation(arg0: j_io_papermc_paper_datacomponent_item_consumable.ItemUseAnimation): Consumable_Builder;
  build(): Consumable;
  consumeSeconds(arg0: number): Consumable_Builder;
  effects(arg0: JavaList<j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect>): Consumable_Builder;
  hasConsumeParticles(arg0: boolean): Consumable_Builder;
  sound(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): Consumable_Builder;
}
export type Consumable_Builder = Consumable_BuilderMembers;
export interface Consumable_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.CustomModelData. */
export interface CustomModelDataMembers {
  colors(): JavaList<j_org_bukkit.Color>;
  flags(): JavaList<boolean>;
  floats(): JavaList<number>;
  strings(): JavaList<string>;
}
export type CustomModelData = CustomModelDataMembers;
export interface CustomModelDataStatics {
  customModelData(): CustomModelData_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.CustomModelData$Builder. */
export interface CustomModelData_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<CustomModelData>];
  addColor(arg0: j_org_bukkit.Color): CustomModelData_Builder;
  addColors(arg0: JavaList<j_org_bukkit.Color>): CustomModelData_Builder;
  addFlag(arg0: boolean): CustomModelData_Builder;
  addFlags(arg0: JavaList<boolean>): CustomModelData_Builder;
  addFloat(arg0: number): CustomModelData_Builder;
  addFloats(arg0: JavaList<number>): CustomModelData_Builder;
  addString(arg0: string): CustomModelData_Builder;
  addStrings(arg0: JavaList<string>): CustomModelData_Builder;
}
export type CustomModelData_Builder = CustomModelData_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<CustomModelData>;
export interface CustomModelData_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.DamageResistant. */
export interface DamageResistantMembers {
  types(): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
}
export type DamageResistant = DamageResistantMembers;
export interface DamageResistantStatics {
  damageResistant(arg0: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>): DamageResistant;
}

/** JVM interface io.papermc.paper.datacomponent.item.DeathProtection. */
export interface DeathProtectionMembers {
  deathEffects(): JavaList<j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect>;
}
export type DeathProtection = DeathProtectionMembers;
export interface DeathProtectionStatics {
  deathProtection(): DeathProtection_Builder;
  deathProtection(arg0: JavaList<j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect>): DeathProtection;
}

/** JVM interface io.papermc.paper.datacomponent.item.DeathProtection$Builder. */
export interface DeathProtection_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<DeathProtection>];
  addEffect(arg0: j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect): DeathProtection_Builder;
  addEffects(arg0: JavaList<j_io_papermc_paper_datacomponent_item_consumable.ConsumeEffect>): DeathProtection_Builder;
}
export type DeathProtection_Builder = DeathProtection_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<DeathProtection>;
export interface DeathProtection_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.DyedItemColor. */
export interface DyedItemColorMembers {
  color(): j_org_bukkit.Color;
}
export type DyedItemColor = DyedItemColorMembers;
export interface DyedItemColorStatics {
  dyedItemColor(): DyedItemColor_Builder;
  dyedItemColor(arg0: j_org_bukkit.Color): DyedItemColor;
}

/** JVM interface io.papermc.paper.datacomponent.item.DyedItemColor$Builder. */
export interface DyedItemColor_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<DyedItemColor>];
  color(arg0: j_org_bukkit.Color): DyedItemColor_Builder;
}
export type DyedItemColor_Builder = DyedItemColor_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<DyedItemColor>;
export interface DyedItemColor_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.Enchantable. */
export interface EnchantableMembers {
  value(): number;
}
export type Enchantable = EnchantableMembers;
export interface EnchantableStatics {
  enchantable(arg0: number): Enchantable;
}

/** JVM interface io.papermc.paper.datacomponent.item.Equippable. */
export interface EquippableMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.BuildableDataComponent<Equippable, Equippable_Builder>];
  allowedEntities(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_entity.EntityType> | null;
  assetId(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  cameraOverlay(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  canBeSheared(): boolean;
  damageOnHurt(): boolean;
  dispensable(): boolean;
  equipOnInteract(): boolean;
  equipSound(): JavaOpaque<"net.kyori.adventure.key.Key">;
  shearSound(): JavaOpaque<"net.kyori.adventure.key.Key">;
  slot(): j_org_bukkit_inventory.EquipmentSlot;
  swappable(): boolean;
  toBuilder(): Equippable_Builder;
}
export type Equippable = EquippableMembers;
export interface EquippableStatics {
  equippable(arg0: j_org_bukkit_inventory.EquipmentSlot): Equippable_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.Equippable$Builder. */
export interface Equippable_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<Equippable>];
  allowedEntities(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_entity.EntityType> | null): Equippable_Builder;
  assetId(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Equippable_Builder;
  build(): Equippable;
  cameraOverlay(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Equippable_Builder;
  canBeSheared(arg0: boolean): Equippable_Builder;
  damageOnHurt(arg0: boolean): Equippable_Builder;
  dispensable(arg0: boolean): Equippable_Builder;
  equipOnInteract(arg0: boolean): Equippable_Builder;
  equipSound(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): Equippable_Builder;
  shearSound(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): Equippable_Builder;
  swappable(arg0: boolean): Equippable_Builder;
}
export type Equippable_Builder = Equippable_BuilderMembers;
export interface Equippable_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.Fireworks. */
export interface FireworksMembers {
  effects(): JavaList<j_org_bukkit.FireworkEffect>;
  flightDuration(): number;
}
export type Fireworks = FireworksMembers;
export interface FireworksStatics {
  fireworks(): Fireworks_Builder;
  fireworks(arg0: JavaList<j_org_bukkit.FireworkEffect>, arg1: number): Fireworks;
}

/** JVM interface io.papermc.paper.datacomponent.item.Fireworks$Builder. */
export interface Fireworks_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<Fireworks>];
  addEffect(arg0: j_org_bukkit.FireworkEffect): Fireworks_Builder;
  addEffects(arg0: JavaList<j_org_bukkit.FireworkEffect>): Fireworks_Builder;
  flightDuration(arg0: number): Fireworks_Builder;
}
export type Fireworks_Builder = Fireworks_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<Fireworks>;
export interface Fireworks_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.FoodProperties. */
export interface FoodPropertiesMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.BuildableDataComponent<FoodProperties, FoodProperties_Builder>];
  canAlwaysEat(): boolean;
  nutrition(): number;
  saturation(): number;
  toBuilder(): FoodProperties_Builder;
}
export type FoodProperties = FoodPropertiesMembers;
export interface FoodPropertiesStatics {
  food(): FoodProperties_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.FoodProperties$Builder. */
export interface FoodProperties_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<FoodProperties>];
  build(): FoodProperties;
  canAlwaysEat(arg0: boolean): FoodProperties_Builder;
  nutrition(arg0: number): FoodProperties_Builder;
  saturation(arg0: number): FoodProperties_Builder;
}
export type FoodProperties_Builder = FoodProperties_BuilderMembers;
export interface FoodProperties_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemAdventurePredicate. */
export interface ItemAdventurePredicateMembers {
  predicates(): JavaList<j_io_papermc_paper_block.BlockPredicate>;
}
export type ItemAdventurePredicate = ItemAdventurePredicateMembers;
export interface ItemAdventurePredicateStatics {
  itemAdventurePredicate(): ItemAdventurePredicate_Builder;
  itemAdventurePredicate(arg0: JavaList<j_io_papermc_paper_block.BlockPredicate>): ItemAdventurePredicate;
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemAdventurePredicate$Builder. */
export interface ItemAdventurePredicate_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemAdventurePredicate>];
  addPredicate(arg0: j_io_papermc_paper_block.BlockPredicate): ItemAdventurePredicate_Builder;
  addPredicates(arg0: JavaList<j_io_papermc_paper_block.BlockPredicate>): ItemAdventurePredicate_Builder;
}
export type ItemAdventurePredicate_Builder = ItemAdventurePredicate_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemAdventurePredicate>;
export interface ItemAdventurePredicate_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemArmorTrim. */
export interface ItemArmorTrimMembers {
  armorTrim(): j_org_bukkit_inventory_meta_trim.ArmorTrim;
}
export type ItemArmorTrim = ItemArmorTrimMembers;
export interface ItemArmorTrimStatics {
  itemArmorTrim(arg0: j_org_bukkit_inventory_meta_trim.ArmorTrim): ItemArmorTrim_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemArmorTrim$Builder. */
export interface ItemArmorTrim_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemArmorTrim>];
  armorTrim(arg0: j_org_bukkit_inventory_meta_trim.ArmorTrim): ItemArmorTrim_Builder;
}
export type ItemArmorTrim_Builder = ItemArmorTrim_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemArmorTrim>;
export interface ItemArmorTrim_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemAttributeModifiers. */
export interface ItemAttributeModifiersMembers {
  modifiers(): JavaList<ItemAttributeModifiers_Entry>;
}
export type ItemAttributeModifiers = ItemAttributeModifiersMembers;
export interface ItemAttributeModifiersStatics {
  itemAttributes(): ItemAttributeModifiers_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemAttributeModifiers$Builder. */
export interface ItemAttributeModifiers_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemAttributeModifiers>];
  addModifier(arg0: j_org_bukkit_attribute.Attribute, arg1: j_org_bukkit_attribute.AttributeModifier): ItemAttributeModifiers_Builder;
  addModifier(arg0: j_org_bukkit_attribute.Attribute, arg1: j_org_bukkit_attribute.AttributeModifier, arg2: j_io_papermc_paper_datacomponent_item_attribute.AttributeModifierDisplay): ItemAttributeModifiers_Builder;
  addModifier(arg0: j_org_bukkit_attribute.Attribute, arg1: j_org_bukkit_attribute.AttributeModifier, arg2: j_org_bukkit_inventory.EquipmentSlotGroup): ItemAttributeModifiers_Builder;
  addModifier(arg0: j_org_bukkit_attribute.Attribute, arg1: j_org_bukkit_attribute.AttributeModifier, arg2: j_org_bukkit_inventory.EquipmentSlotGroup, arg3: j_io_papermc_paper_datacomponent_item_attribute.AttributeModifierDisplay): ItemAttributeModifiers_Builder;
}
export type ItemAttributeModifiers_Builder = ItemAttributeModifiers_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemAttributeModifiers>;
export interface ItemAttributeModifiers_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemAttributeModifiers$Entry. */
export interface ItemAttributeModifiers_EntryMembers {
  attribute(): j_org_bukkit_attribute.Attribute;
  display(): j_io_papermc_paper_datacomponent_item_attribute.AttributeModifierDisplay;
  getGroup(): j_org_bukkit_inventory.EquipmentSlotGroup;
  modifier(): j_org_bukkit_attribute.AttributeModifier;
}
export type ItemAttributeModifiers_Entry = ItemAttributeModifiers_EntryMembers;
export interface ItemAttributeModifiers_EntryStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemContainerContents. */
export interface ItemContainerContentsMembers {
  contents(): JavaList<j_org_bukkit_inventory.ItemStack>;
}
export type ItemContainerContents = ItemContainerContentsMembers;
export interface ItemContainerContentsStatics {
  containerContents(): ItemContainerContents_Builder;
  containerContents(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): ItemContainerContents;
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemContainerContents$Builder. */
export interface ItemContainerContents_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemContainerContents>];
  add(arg0: j_org_bukkit_inventory.ItemStack): ItemContainerContents_Builder;
  addAll(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): ItemContainerContents_Builder;
}
export type ItemContainerContents_Builder = ItemContainerContents_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemContainerContents>;
export interface ItemContainerContents_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemEnchantments. */
export interface ItemEnchantmentsMembers {
  enchantments(): JavaMap<j_org_bukkit_enchantments.Enchantment, number>;
}
export type ItemEnchantments = ItemEnchantmentsMembers;
export interface ItemEnchantmentsStatics {
  itemEnchantments(): ItemEnchantments_Builder;
  itemEnchantments(arg0: JavaMap<j_org_bukkit_enchantments.Enchantment, number>): ItemEnchantments;
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemEnchantments$Builder. */
export interface ItemEnchantments_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemEnchantments>];
  add(arg0: j_org_bukkit_enchantments.Enchantment, arg1: number): ItemEnchantments_Builder;
  addAll(arg0: JavaMap<j_org_bukkit_enchantments.Enchantment, number>): ItemEnchantments_Builder;
}
export type ItemEnchantments_Builder = ItemEnchantments_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemEnchantments>;
export interface ItemEnchantments_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemLore. */
export interface ItemLoreMembers {
  lines(): JavaList<j_net_kyori_adventure_text.Component>;
  styledLines(): JavaList<j_net_kyori_adventure_text.Component>;
}
export type ItemLore = ItemLoreMembers;
export interface ItemLoreStatics {
  lore(): ItemLore_Builder;
  lore(arg0: JavaList<j_net_kyori_adventure_text.ComponentLike>): ItemLore;
}

/** JVM interface io.papermc.paper.datacomponent.item.ItemLore$Builder. */
export interface ItemLore_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemLore>];
  addLine(arg0: j_net_kyori_adventure_text.ComponentLike): ItemLore_Builder;
  addLines(arg0: JavaList<j_net_kyori_adventure_text.ComponentLike>): ItemLore_Builder;
  lines(arg0: JavaList<j_net_kyori_adventure_text.ComponentLike>): ItemLore_Builder;
}
export type ItemLore_Builder = ItemLore_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemLore>;
export interface ItemLore_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.JukeboxPlayable. */
export interface JukeboxPlayableMembers {
  jukeboxSong(): j_org_bukkit.JukeboxSong;
}
export type JukeboxPlayable = JukeboxPlayableMembers;
export interface JukeboxPlayableStatics {
  jukeboxPlayable(arg0: j_org_bukkit.JukeboxSong): JukeboxPlayable_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.JukeboxPlayable$Builder. */
export interface JukeboxPlayable_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<JukeboxPlayable>];
  jukeboxSong(arg0: j_org_bukkit.JukeboxSong): JukeboxPlayable_Builder;
}
export type JukeboxPlayable_Builder = JukeboxPlayable_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<JukeboxPlayable>;
export interface JukeboxPlayable_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.LodestoneTracker. */
export interface LodestoneTrackerMembers {
  location(): j_org_bukkit.Location | null;
  tracked(): boolean;
}
export type LodestoneTracker = LodestoneTrackerMembers;
export interface LodestoneTrackerStatics {
  lodestoneTracker(): LodestoneTracker_Builder;
  lodestoneTracker(arg0: j_org_bukkit.Location | null, arg1: boolean): LodestoneTracker;
}

/** JVM interface io.papermc.paper.datacomponent.item.LodestoneTracker$Builder. */
export interface LodestoneTracker_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<LodestoneTracker>];
  location(arg0: j_org_bukkit.Location | null): LodestoneTracker_Builder;
  tracked(arg0: boolean): LodestoneTracker_Builder;
}
export type LodestoneTracker_Builder = LodestoneTracker_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<LodestoneTracker>;
export interface LodestoneTracker_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.MapDecorations. */
export interface MapDecorationsMembers {
  decoration(arg0: string): MapDecorations_DecorationEntry | null;
  decorations(): JavaMap<string, MapDecorations_DecorationEntry>;
}
export type MapDecorations = MapDecorationsMembers;
export interface MapDecorationsStatics {
  decorationEntry(arg0: j_org_bukkit_map.MapCursor_Type, arg1: number, arg2: number, arg3: number): MapDecorations_DecorationEntry;
  mapDecorations(): MapDecorations_Builder;
  mapDecorations(arg0: JavaMap<string, MapDecorations_DecorationEntry>): MapDecorations;
}

/** JVM interface io.papermc.paper.datacomponent.item.MapDecorations$Builder. */
export interface MapDecorations_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<MapDecorations>];
  put(arg0: string, arg1: MapDecorations_DecorationEntry): MapDecorations_Builder;
  putAll(arg0: JavaMap<string, MapDecorations_DecorationEntry>): MapDecorations_Builder;
}
export type MapDecorations_Builder = MapDecorations_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<MapDecorations>;
export interface MapDecorations_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.MapDecorations$DecorationEntry. */
export interface MapDecorations_DecorationEntryMembers {
  rotation(): number;
  type(): j_org_bukkit_map.MapCursor_Type;
  x(): number;
  z(): number;
}
export type MapDecorations_DecorationEntry = MapDecorations_DecorationEntryMembers;
export interface MapDecorations_DecorationEntryStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.MapId. */
export interface MapIdMembers {
  id(): number;
}
export type MapId = MapIdMembers;
export interface MapIdStatics {
  mapId(arg0: number): MapId;
}

/** JVM interface io.papermc.paper.datacomponent.item.MapItemColor. */
export interface MapItemColorMembers {
  color(): j_org_bukkit.Color;
}
export type MapItemColor = MapItemColorMembers;
export interface MapItemColorStatics {
  mapItemColor(): MapItemColor_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.MapItemColor$Builder. */
export interface MapItemColor_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<MapItemColor>];
  color(arg0: j_org_bukkit.Color): MapItemColor_Builder;
}
export type MapItemColor_Builder = MapItemColor_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<MapItemColor>;
export interface MapItemColor_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.OminousBottleAmplifier. */
export interface OminousBottleAmplifierMembers {
  amplifier(): number;
}
export type OminousBottleAmplifier = OminousBottleAmplifierMembers;
export interface OminousBottleAmplifierStatics {
  amplifier(arg0: number): OminousBottleAmplifier;
}

/** JVM interface io.papermc.paper.datacomponent.item.PotDecorations. */
export interface PotDecorationsMembers {
  back(): j_org_bukkit_inventory.ItemType | null;
  front(): j_org_bukkit_inventory.ItemType | null;
  left(): j_org_bukkit_inventory.ItemType | null;
  right(): j_org_bukkit_inventory.ItemType | null;
}
export type PotDecorations = PotDecorationsMembers;
export interface PotDecorationsStatics {
  potDecorations(): PotDecorations_Builder;
  potDecorations(arg0: j_org_bukkit_inventory.ItemType | null, arg1: j_org_bukkit_inventory.ItemType | null, arg2: j_org_bukkit_inventory.ItemType | null, arg3: j_org_bukkit_inventory.ItemType | null): PotDecorations;
}

/** JVM interface io.papermc.paper.datacomponent.item.PotDecorations$Builder. */
export interface PotDecorations_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<PotDecorations>];
  back(arg0: j_org_bukkit_inventory.ItemType | null): PotDecorations_Builder;
  front(arg0: j_org_bukkit_inventory.ItemType | null): PotDecorations_Builder;
  left(arg0: j_org_bukkit_inventory.ItemType | null): PotDecorations_Builder;
  right(arg0: j_org_bukkit_inventory.ItemType | null): PotDecorations_Builder;
}
export type PotDecorations_Builder = PotDecorations_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<PotDecorations>;
export interface PotDecorations_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.PotionContents. */
export interface PotionContentsMembers {
  allEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  computeEffectiveColor(): j_org_bukkit.Color;
  customColor(): j_org_bukkit.Color | null;
  customEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  customName(): string | null;
  potion(): j_org_bukkit_potion.PotionType | null;
}
export type PotionContents = PotionContentsMembers;
export interface PotionContentsStatics {
  potionContents(): PotionContents_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.PotionContents$Builder. */
export interface PotionContents_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<PotionContents>];
  addCustomEffect(arg0: j_org_bukkit_potion.PotionEffect): PotionContents_Builder;
  addCustomEffects(arg0: JavaList<j_org_bukkit_potion.PotionEffect>): PotionContents_Builder;
  customColor(arg0: j_org_bukkit.Color | null): PotionContents_Builder;
  customName(arg0: string | null): PotionContents_Builder;
  potion(arg0: j_org_bukkit_potion.PotionType | null): PotionContents_Builder;
}
export type PotionContents_Builder = PotionContents_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<PotionContents>;
export interface PotionContents_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.Repairable. */
export interface RepairableMembers {
  types(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType>;
}
export type Repairable = RepairableMembers;
export interface RepairableStatics {
  repairable(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType>): Repairable;
}

/** JVM interface io.papermc.paper.datacomponent.item.ResolvableProfile. */
export interface ResolvableProfileMembers {
  name(): string | null;
  properties(): JavaCollection<j_com_destroystokyo_paper_profile.ProfileProperty>;
  resolve(): PromiseLike<j_com_destroystokyo_paper_profile.PlayerProfile>;
  uuid(): JavaOpaque<"java.util.UUID"> | null;
}
export type ResolvableProfile = ResolvableProfileMembers;
export interface ResolvableProfileStatics {
  resolvableProfile(): ResolvableProfile_Builder;
  resolvableProfile(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): ResolvableProfile;
}

/** JVM interface io.papermc.paper.datacomponent.item.ResolvableProfile$Builder. */
export interface ResolvableProfile_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ResolvableProfile>];
  addProperties(arg0: JavaCollection<j_com_destroystokyo_paper_profile.ProfileProperty>): ResolvableProfile_Builder;
  addProperty(arg0: j_com_destroystokyo_paper_profile.ProfileProperty): ResolvableProfile_Builder;
  name(arg0: string | null): ResolvableProfile_Builder;
  uuid(arg0: JavaOpaque<"java.util.UUID"> | null): ResolvableProfile_Builder;
}
export type ResolvableProfile_Builder = ResolvableProfile_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ResolvableProfile>;
export interface ResolvableProfile_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.SeededContainerLoot. */
export interface SeededContainerLootMembers {
  lootTable(): JavaOpaque<"net.kyori.adventure.key.Key">;
  seed(): bigint;
}
export type SeededContainerLoot = SeededContainerLootMembers;
export interface SeededContainerLootStatics {
  seededContainerLoot(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): SeededContainerLoot_Builder;
  seededContainerLoot(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: bigint): SeededContainerLoot;
}

/** JVM interface io.papermc.paper.datacomponent.item.SeededContainerLoot$Builder. */
export interface SeededContainerLoot_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<SeededContainerLoot>];
  lootTable(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): SeededContainerLoot_Builder;
  seed(arg0: bigint): SeededContainerLoot_Builder;
}
export type SeededContainerLoot_Builder = SeededContainerLoot_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<SeededContainerLoot>;
export interface SeededContainerLoot_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.SuspiciousStewEffects. */
export interface SuspiciousStewEffectsMembers {
  effects(): JavaList<j_io_papermc_paper_potion.SuspiciousEffectEntry>;
}
export type SuspiciousStewEffects = SuspiciousStewEffectsMembers;
export interface SuspiciousStewEffectsStatics {
  suspiciousStewEffects(): SuspiciousStewEffects_Builder;
  suspiciousStewEffects(arg0: JavaCollection<j_io_papermc_paper_potion.SuspiciousEffectEntry>): SuspiciousStewEffects;
}

/** JVM interface io.papermc.paper.datacomponent.item.SuspiciousStewEffects$Builder. */
export interface SuspiciousStewEffects_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<SuspiciousStewEffects>];
  add(arg0: j_io_papermc_paper_potion.SuspiciousEffectEntry): SuspiciousStewEffects_Builder;
  addAll(arg0: JavaCollection<j_io_papermc_paper_potion.SuspiciousEffectEntry>): SuspiciousStewEffects_Builder;
}
export type SuspiciousStewEffects_Builder = SuspiciousStewEffects_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<SuspiciousStewEffects>;
export interface SuspiciousStewEffects_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.Tool. */
export interface ToolMembers {
  canDestroyBlocksInCreative(): boolean;
  damagePerBlock(): number;
  defaultMiningSpeed(): number;
  rules(): JavaList<Tool_Rule>;
}
export type Tool = ToolMembers;
export interface ToolStatics {
  rule(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_block.BlockType>, arg1: number | null, arg2: j_net_kyori_adventure_util.TriState): Tool_Rule;
  tool(): Tool_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.Tool$Builder. */
export interface Tool_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<Tool>];
  addRule(arg0: Tool_Rule): Tool_Builder;
  addRules(arg0: JavaCollection<Tool_Rule>): Tool_Builder;
  canDestroyBlocksInCreative(arg0: boolean): Tool_Builder;
  damagePerBlock(arg0: number): Tool_Builder;
  defaultMiningSpeed(arg0: number): Tool_Builder;
}
export type Tool_Builder = Tool_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<Tool>;
export interface Tool_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.Tool$Rule. */
export interface Tool_RuleMembers {
  blocks(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_block.BlockType>;
  correctForDrops(): j_net_kyori_adventure_util.TriState;
  speed(): number | null;
}
export type Tool_Rule = Tool_RuleMembers;
export interface Tool_RuleStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.TooltipDisplay. */
export interface TooltipDisplayMembers {
  hiddenComponents(): JavaSet<j_io_papermc_paper_datacomponent.DataComponentType>;
  hideTooltip(): boolean;
}
export type TooltipDisplay = TooltipDisplayMembers;
export interface TooltipDisplayStatics {
  tooltipDisplay(): TooltipDisplay_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.TooltipDisplay$Builder. */
export interface TooltipDisplay_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<TooltipDisplay>];
  addHiddenComponents(...arg0: Array<j_io_papermc_paper_datacomponent.DataComponentType>): TooltipDisplay_Builder;
  hiddenComponents(arg0: JavaSet<j_io_papermc_paper_datacomponent.DataComponentType>): TooltipDisplay_Builder;
  hideTooltip(arg0: boolean): TooltipDisplay_Builder;
}
export type TooltipDisplay_Builder = TooltipDisplay_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<TooltipDisplay>;
export interface TooltipDisplay_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.UseCooldown. */
export interface UseCooldownMembers {
  cooldownGroup(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  seconds(): number;
}
export type UseCooldown = UseCooldownMembers;
export interface UseCooldownStatics {
  useCooldown(arg0: number): UseCooldown_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.UseCooldown$Builder. */
export interface UseCooldown_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<UseCooldown>];
  cooldownGroup(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): UseCooldown_Builder;
}
export type UseCooldown_Builder = UseCooldown_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<UseCooldown>;
export interface UseCooldown_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.UseRemainder. */
export interface UseRemainderMembers {
  transformInto(): j_org_bukkit_inventory.ItemStack;
}
export type UseRemainder = UseRemainderMembers;
export interface UseRemainderStatics {
  useRemainder(arg0: j_org_bukkit_inventory.ItemStack): UseRemainder;
}

/** JVM interface io.papermc.paper.datacomponent.item.Weapon. */
export interface WeaponMembers {
  disableBlockingForSeconds(): number;
  itemDamagePerAttack(): number;
}
export type Weapon = WeaponMembers;
export interface WeaponStatics {
  weapon(): Weapon_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.Weapon$Builder. */
export interface Weapon_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<Weapon>];
  disableBlockingForSeconds(arg0: number): Weapon_Builder;
  itemDamagePerAttack(arg0: number): Weapon_Builder;
}
export type Weapon_Builder = Weapon_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<Weapon>;
export interface Weapon_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.WritableBookContent. */
export interface WritableBookContentMembers {
  pages(): JavaList<j_io_papermc_paper_text.Filtered<string>>;
}
export type WritableBookContent = WritableBookContentMembers;
export interface WritableBookContentStatics {
  writeableBookContent(): WritableBookContent_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.WritableBookContent$Builder. */
export interface WritableBookContent_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<WritableBookContent>];
  addFilteredPage(arg0: j_io_papermc_paper_text.Filtered<string>): WritableBookContent_Builder;
  addFilteredPages(arg0: JavaList<j_io_papermc_paper_text.Filtered<string>>): WritableBookContent_Builder;
  addPage(arg0: string): WritableBookContent_Builder;
  addPages(arg0: JavaList<string>): WritableBookContent_Builder;
}
export type WritableBookContent_Builder = WritableBookContent_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<WritableBookContent>;
export interface WritableBookContent_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.WrittenBookContent. */
export interface WrittenBookContentMembers {
  author(): string;
  generation(): number;
  pages(): JavaList<j_io_papermc_paper_text.Filtered<j_net_kyori_adventure_text.Component>>;
  resolved(): boolean;
  title(): j_io_papermc_paper_text.Filtered<string>;
}
export type WrittenBookContent = WrittenBookContentMembers;
export interface WrittenBookContentStatics {
  writtenBookContent(arg0: j_io_papermc_paper_text.Filtered<string>, arg1: string): WrittenBookContent_Builder;
  writtenBookContent(arg0: string, arg1: string): WrittenBookContent_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.WrittenBookContent$Builder. */
export interface WrittenBookContent_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<WrittenBookContent>];
  addFilteredPage(arg0: j_io_papermc_paper_text.Filtered<j_net_kyori_adventure_text.ComponentLike>): WrittenBookContent_Builder;
  addFilteredPages(arg0: JavaList<j_io_papermc_paper_text.Filtered<j_net_kyori_adventure_text.ComponentLike>>): WrittenBookContent_Builder;
  addPage(arg0: j_net_kyori_adventure_text.ComponentLike): WrittenBookContent_Builder;
  addPages(arg0: JavaList<j_net_kyori_adventure_text.ComponentLike>): WrittenBookContent_Builder;
  author(arg0: string): WrittenBookContent_Builder;
  filteredTitle(arg0: j_io_papermc_paper_text.Filtered<string>): WrittenBookContent_Builder;
  generation(arg0: number): WrittenBookContent_Builder;
  resolved(arg0: boolean): WrittenBookContent_Builder;
  title(arg0: string): WrittenBookContent_Builder;
}
export type WrittenBookContent_Builder = WrittenBookContent_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<WrittenBookContent>;
export interface WrittenBookContent_BuilderStatics {
}
