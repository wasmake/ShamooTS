// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_enchantments from './io.papermc.paper.enchantments.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM abstract org.bukkit.enchantments.Enchantment. */
export interface EnchantmentMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_translation.Translatable, j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  canEnchantItem(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  conflictsWith(arg0: Enchantment): boolean;
  description(): j_net_kyori_adventure_text.Component;
  displayName(arg0: number): j_net_kyori_adventure_text.Component;
  getActiveSlotGroups(): JavaSet<j_org_bukkit_inventory.EquipmentSlotGroup>;
  getActiveSlots(): JavaSet<j_org_bukkit_inventory.EquipmentSlot>;
  getAnvilCost(): number;
  getDamageIncrease(arg0: number, arg1: j_org_bukkit_entity.EntityCategory): number;
  getDamageIncrease(arg0: number, arg1: j_org_bukkit_entity.EntityType): number;
  getExclusiveWith(): j_io_papermc_paper_registry_set.RegistryKeySet<Enchantment>;
  getItemTarget(): EnchantmentTarget;
  getMaxLevel(): number;
  getMaxModifiedCost(arg0: number): number;
  getMinModifiedCost(arg0: number): number;
  getName(): string;
  getPrimaryItems(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType> | null;
  getRarity(): j_io_papermc_paper_enchantments.EnchantmentRarity;
  getStartLevel(): number;
  getSupportedItems(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType>;
  getWeight(): number;
  isCursed(): boolean;
  isDiscoverable(): boolean;
  isTradeable(): boolean;
  isTreasure(): boolean;
  translationKey(): string;
}
export type Enchantment = EnchantmentMembers & j_net_kyori_adventure_translation.Translatable & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface EnchantmentStatics {
  readonly AQUA_AFFINITY: Enchantment;
  readonly BANE_OF_ARTHROPODS: Enchantment;
  readonly BINDING_CURSE: Enchantment;
  readonly BLAST_PROTECTION: Enchantment;
  readonly BREACH: Enchantment;
  readonly CHANNELING: Enchantment;
  readonly DENSITY: Enchantment;
  readonly DEPTH_STRIDER: Enchantment;
  readonly EFFICIENCY: Enchantment;
  readonly FEATHER_FALLING: Enchantment;
  readonly FIRE_ASPECT: Enchantment;
  readonly FIRE_PROTECTION: Enchantment;
  readonly FLAME: Enchantment;
  readonly FORTUNE: Enchantment;
  readonly FROST_WALKER: Enchantment;
  readonly IMPALING: Enchantment;
  readonly INFINITY: Enchantment;
  readonly KNOCKBACK: Enchantment;
  readonly LOOTING: Enchantment;
  readonly LOYALTY: Enchantment;
  readonly LUCK_OF_THE_SEA: Enchantment;
  readonly LURE: Enchantment;
  readonly MENDING: Enchantment;
  readonly MULTISHOT: Enchantment;
  readonly PIERCING: Enchantment;
  readonly POWER: Enchantment;
  readonly PROJECTILE_PROTECTION: Enchantment;
  readonly PROTECTION: Enchantment;
  readonly PUNCH: Enchantment;
  readonly QUICK_CHARGE: Enchantment;
  readonly RESPIRATION: Enchantment;
  readonly RIPTIDE: Enchantment;
  readonly SHARPNESS: Enchantment;
  readonly SILK_TOUCH: Enchantment;
  readonly SMITE: Enchantment;
  readonly SOUL_SPEED: Enchantment;
  readonly SWEEPING_EDGE: Enchantment;
  readonly SWIFT_SNEAK: Enchantment;
  readonly THORNS: Enchantment;
  readonly UNBREAKING: Enchantment;
  readonly VANISHING_CURSE: Enchantment;
  readonly WIND_BURST: Enchantment;
  getByKey(arg0: j_org_bukkit.NamespacedKey | null): Enchantment | null;
  getByName(arg0: string | null): Enchantment | null;
  values(): Array<Enchantment>;
}

/** JVM class org.bukkit.enchantments.EnchantmentOffer. */
export interface EnchantmentOfferMembers {
  getCost(): number;
  getEnchantment(): Enchantment;
  getEnchantmentLevel(): number;
  setCost(arg0: number): void;
  setEnchantment(arg0: Enchantment): void;
  setEnchantmentLevel(arg0: number): void;
}
export type EnchantmentOffer = EnchantmentOfferMembers;
export interface EnchantmentOfferStatics {
  new(arg0: Enchantment, arg1: number, arg2: number): EnchantmentOffer;
}

/** Live JVM enum org.bukkit.enchantments.EnchantmentTarget; constants are host handles, not strings. */
export type EnchantmentTarget = JavaEnum<"org.bukkit.enchantments.EnchantmentTarget", "ALL" | "ARMOR" | "ARMOR_FEET" | "ARMOR_HEAD" | "ARMOR_LEGS" | "ARMOR_TORSO" | "BOW" | "BREAKABLE" | "CROSSBOW" | "FISHING_ROD" | "TOOL" | "TRIDENT" | "VANISHABLE" | "WEAPON" | "WEARABLE"> & EnchantmentTargetMembers;
export interface EnchantmentTargetMembers {
  includes(arg0: j_org_bukkit.Material): boolean;
  includes(arg0: j_org_bukkit_inventory.ItemStack): boolean;
}
export interface EnchantmentTargetStatics {
  readonly ALL: EnchantmentTarget;
  readonly ARMOR: EnchantmentTarget;
  readonly ARMOR_FEET: EnchantmentTarget;
  readonly ARMOR_HEAD: EnchantmentTarget;
  readonly ARMOR_LEGS: EnchantmentTarget;
  readonly ARMOR_TORSO: EnchantmentTarget;
  readonly BOW: EnchantmentTarget;
  readonly BREAKABLE: EnchantmentTarget;
  readonly CROSSBOW: EnchantmentTarget;
  readonly FISHING_ROD: EnchantmentTarget;
  readonly TOOL: EnchantmentTarget;
  readonly TRIDENT: EnchantmentTarget;
  readonly VANISHABLE: EnchantmentTarget;
  readonly WEAPON: EnchantmentTarget;
  readonly WEARABLE: EnchantmentTarget;
  valueOf(arg0: string): EnchantmentTarget;
  values(): Array<EnchantmentTarget>;
}

/** JVM abstract org.bukkit.enchantments.EnchantmentWrapper. */
export interface EnchantmentWrapperMembers {
  readonly __javaSupertypes?: readonly [Enchantment];
  displayName(arg0: number): j_net_kyori_adventure_text.Component;
  getActiveSlots(): JavaSet<j_org_bukkit_inventory.EquipmentSlot>;
  getDamageIncrease(arg0: number, arg1: j_org_bukkit_entity.EntityCategory): number;
  getEnchantment(): Enchantment;
  getMaxModifiedCost(arg0: number): number;
  getMinModifiedCost(arg0: number): number;
  getRarity(): j_io_papermc_paper_enchantments.EnchantmentRarity;
  isDiscoverable(): boolean;
  isTradeable(): boolean;
  translationKey(): string;
}
export type EnchantmentWrapper = EnchantmentWrapperMembers & Enchantment;
export interface EnchantmentWrapperStatics {
}
