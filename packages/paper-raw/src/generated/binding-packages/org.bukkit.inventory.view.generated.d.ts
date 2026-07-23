// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM interface org.bukkit.inventory.view.AnvilView. */
export interface AnvilViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  bypassEnchantmentLevelRestriction(arg0: boolean): void;
  bypassesEnchantmentLevelRestriction(): boolean;
  getMaximumRepairCost(): number;
  getRenameText(): string | null;
  getRepairCost(): number;
  getRepairItemCountCost(): number;
  getTopInventory(): j_org_bukkit_inventory.AnvilInventory;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  setMaximumRepairCost(arg0: number): void;
  setRepairCost(arg0: number): void;
  setRepairItemCountCost(arg0: number): void;
}
export type AnvilView = AnvilViewMembers & j_org_bukkit_inventory.InventoryView;
export interface AnvilViewStatics {
}

/** JVM interface org.bukkit.inventory.view.BeaconView. */
export interface BeaconViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getPrimaryEffect(): j_org_bukkit_potion.PotionEffectType | null;
  getSecondaryEffect(): j_org_bukkit_potion.PotionEffectType | null;
  getTier(): number;
  getTopInventory(): j_org_bukkit_inventory.BeaconInventory;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  setPrimaryEffect(arg0: j_org_bukkit_potion.PotionEffectType | null): void | null;
  setSecondaryEffect(arg0: j_org_bukkit_potion.PotionEffectType | null): void | null;
}
export type BeaconView = BeaconViewMembers & j_org_bukkit_inventory.InventoryView;
export interface BeaconViewStatics {
}

/** JVM interface org.bukkit.inventory.view.BrewingStandView. */
export interface BrewingStandViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getBrewingTicks(): number;
  getFuelLevel(): number;
  getRecipeBrewTime(): number;
  getTopInventory(): j_org_bukkit_inventory.BrewerInventory;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  /** @throws java.lang.IllegalArgumentException */
  setBrewingTicks(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setFuelLevel(arg0: number): void;
  setRecipeBrewTime(arg0: number): void;
}
export type BrewingStandView = BrewingStandViewMembers & j_org_bukkit_inventory.InventoryView;
export interface BrewingStandViewStatics {
}

/** JVM interface org.bukkit.inventory.view.CrafterView. */
export interface CrafterViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getTopInventory(): j_org_bukkit_inventory.CrafterInventory;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  isPowered(): boolean;
  isSlotDisabled(arg0: number): boolean;
  setSlotDisabled(arg0: number, arg1: boolean): void;
}
export type CrafterView = CrafterViewMembers & j_org_bukkit_inventory.InventoryView;
export interface CrafterViewStatics {
}

/** JVM interface org.bukkit.inventory.view.EnchantmentView. */
export interface EnchantmentViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getEnchantmentSeed(): number;
  getOffers(): Array<j_org_bukkit_enchantments.EnchantmentOffer> | null;
  getTopInventory(): j_org_bukkit_inventory.EnchantingInventory;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  setEnchantmentSeed(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setOffers(arg0: Array<j_org_bukkit_enchantments.EnchantmentOffer>): void | null;
}
export type EnchantmentView = EnchantmentViewMembers & j_org_bukkit_inventory.InventoryView;
export interface EnchantmentViewStatics {
}

/** JVM interface org.bukkit.inventory.view.FurnaceView. */
export interface FurnaceViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getBurnTime(): number;
  getCookTime(): number;
  getTopInventory(): j_org_bukkit_inventory.FurnaceInventory;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  isBurning(): boolean;
  setBurnTime(arg0: number, arg1: number): void;
  setCookTime(arg0: number, arg1: number): void;
}
export type FurnaceView = FurnaceViewMembers & j_org_bukkit_inventory.InventoryView;
export interface FurnaceViewStatics {
}

/** JVM interface org.bukkit.inventory.view.LecternView. */
export interface LecternViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getPage(): number;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  getTopInventory(): j_org_bukkit_inventory.LecternInventory;
  setPage(arg0: number): void;
}
export type LecternView = LecternViewMembers & j_org_bukkit_inventory.InventoryView;
export interface LecternViewStatics {
}

/** JVM interface org.bukkit.inventory.view.LoomView. */
export interface LoomViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getSelectablePatterns(): JavaList<j_org_bukkit_block_banner.PatternType>;
  getSelectedPatternIndex(): number;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  getTopInventory(): j_org_bukkit_inventory.LoomInventory;
}
export type LoomView = LoomViewMembers & j_org_bukkit_inventory.InventoryView;
export interface LoomViewStatics {
}

/** JVM interface org.bukkit.inventory.view.MerchantView. */
export interface MerchantViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getMerchant(): j_org_bukkit_inventory.Merchant;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  getTopInventory(): j_org_bukkit_inventory.MerchantInventory;
}
export type MerchantView = MerchantViewMembers & j_org_bukkit_inventory.InventoryView;
export interface MerchantViewStatics {
}

/** JVM interface org.bukkit.inventory.view.StonecutterView. */
export interface StonecutterViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryView];
  getRecipeAmount(): number;
  getRecipes(): JavaList<j_org_bukkit_inventory.StonecuttingRecipe>;
  getSelectedRecipeIndex(): number;
  getTopInventory(): j_org_bukkit_inventory.Inventory;
  getTopInventory(): j_org_bukkit_inventory.StonecutterInventory;
}
export type StonecutterView = StonecutterViewMembers & j_org_bukkit_inventory.InventoryView;
export interface StonecutterViewStatics {
}
