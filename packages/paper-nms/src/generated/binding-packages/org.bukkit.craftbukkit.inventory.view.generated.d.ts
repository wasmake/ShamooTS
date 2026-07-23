// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftAnvilView. */
export interface CraftAnvilViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.AnvilMenu, JavaOpaque<"org.bukkit.inventory.AnvilInventory">>, JavaOpaque<"org.bukkit.inventory.view.AnvilView">];
  bypassEnchantmentLevelRestriction(arg0: boolean): void;
  bypassesEnchantmentLevelRestriction(): boolean;
  getMaximumRepairCost(): number;
  getRenameText(): string | null;
  getRepairCost(): number;
  getRepairItemCountCost(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.AnvilInventory">;
  setMaximumRepairCost(arg0: number): void;
  setRepairCost(arg0: number): void;
  setRepairItemCountCost(arg0: number): void;
  updateFromLegacy(arg0: j_org_bukkit_craftbukkit_inventory.CraftInventoryAnvil): void;
}
export type CraftAnvilView = CraftAnvilViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.AnvilMenu, JavaOpaque<"org.bukkit.inventory.AnvilInventory">> & JavaOpaque<"org.bukkit.inventory.view.AnvilView">;
export interface CraftAnvilViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.AnvilInventory">, arg2: j_net_minecraft_world_inventory.AnvilMenu): CraftAnvilView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftBeaconView. */
export interface CraftBeaconViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.BeaconMenu, JavaOpaque<"org.bukkit.inventory.BeaconInventory">>, JavaOpaque<"org.bukkit.inventory.view.BeaconView">];
  getPrimaryEffect(): JavaOpaque<"org.bukkit.potion.PotionEffectType"> | null;
  getSecondaryEffect(): JavaOpaque<"org.bukkit.potion.PotionEffectType"> | null;
  getTier(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.BeaconInventory">;
  setPrimaryEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType"> | null): void | null;
  setSecondaryEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType"> | null): void | null;
}
export type CraftBeaconView = CraftBeaconViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.BeaconMenu, JavaOpaque<"org.bukkit.inventory.BeaconInventory">> & JavaOpaque<"org.bukkit.inventory.view.BeaconView">;
export interface CraftBeaconViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.BeaconInventory">, arg2: j_net_minecraft_world_inventory.BeaconMenu): CraftBeaconView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftBrewingStandView. */
export interface CraftBrewingStandViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.BrewingStandMenu, JavaOpaque<"org.bukkit.inventory.BrewerInventory">>, JavaOpaque<"org.bukkit.inventory.view.BrewingStandView">];
  getBrewingTicks(): number;
  getFuelLevel(): number;
  getRecipeBrewTime(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.BrewerInventory">;
  setBrewingTicks(arg0: number): void;
  setFuelLevel(arg0: number): void;
  setRecipeBrewTime(arg0: number): void;
}
export type CraftBrewingStandView = CraftBrewingStandViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.BrewingStandMenu, JavaOpaque<"org.bukkit.inventory.BrewerInventory">> & JavaOpaque<"org.bukkit.inventory.view.BrewingStandView">;
export interface CraftBrewingStandViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.BrewerInventory">, arg2: j_net_minecraft_world_inventory.BrewingStandMenu): CraftBrewingStandView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftCrafterView. */
export interface CraftCrafterViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.CrafterMenu, JavaOpaque<"org.bukkit.inventory.CrafterInventory">>, JavaOpaque<"org.bukkit.inventory.view.CrafterView">];
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.CrafterInventory">;
  isPowered(): boolean;
  isSlotDisabled(arg0: number): boolean;
  setSlotDisabled(arg0: number, arg1: boolean): void;
}
export type CraftCrafterView = CraftCrafterViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.CrafterMenu, JavaOpaque<"org.bukkit.inventory.CrafterInventory">> & JavaOpaque<"org.bukkit.inventory.view.CrafterView">;
export interface CraftCrafterViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.CrafterInventory">, arg2: j_net_minecraft_world_inventory.CrafterMenu): CraftCrafterView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftEnchantmentView. */
export interface CraftEnchantmentViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.EnchantmentMenu, JavaOpaque<"org.bukkit.inventory.EnchantingInventory">>, JavaOpaque<"org.bukkit.inventory.view.EnchantmentView">];
  getEnchantmentSeed(): number;
  getOffers(): Array<JavaOpaque<"org.bukkit.enchantments.EnchantmentOffer">>;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.EnchantingInventory">;
  setEnchantmentSeed(arg0: number): void;
  setOffers(arg0: Array<JavaOpaque<"org.bukkit.enchantments.EnchantmentOffer">>): void;
}
export type CraftEnchantmentView = CraftEnchantmentViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.EnchantmentMenu, JavaOpaque<"org.bukkit.inventory.EnchantingInventory">> & JavaOpaque<"org.bukkit.inventory.view.EnchantmentView">;
export interface CraftEnchantmentViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.EnchantingInventory">, arg2: j_net_minecraft_world_inventory.EnchantmentMenu): CraftEnchantmentView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftFurnaceView. */
export interface CraftFurnaceViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.AbstractFurnaceMenu, JavaOpaque<"org.bukkit.inventory.FurnaceInventory">>, JavaOpaque<"org.bukkit.inventory.view.FurnaceView">];
  getBurnTime(): number;
  getCookTime(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.FurnaceInventory">;
  isBurning(): boolean;
  setBurnTime(arg0: number, arg1: number): void;
  setCookTime(arg0: number, arg1: number): void;
}
export type CraftFurnaceView = CraftFurnaceViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.AbstractFurnaceMenu, JavaOpaque<"org.bukkit.inventory.FurnaceInventory">> & JavaOpaque<"org.bukkit.inventory.view.FurnaceView">;
export interface CraftFurnaceViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.FurnaceInventory">, arg2: j_net_minecraft_world_inventory.AbstractFurnaceMenu): CraftFurnaceView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftLecternView. */
export interface CraftLecternViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.LecternMenu, JavaOpaque<"org.bukkit.inventory.LecternInventory">>, JavaOpaque<"org.bukkit.inventory.view.LecternView">];
  getPage(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.LecternInventory">;
  setPage(arg0: number): void;
}
export type CraftLecternView = CraftLecternViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.LecternMenu, JavaOpaque<"org.bukkit.inventory.LecternInventory">> & JavaOpaque<"org.bukkit.inventory.view.LecternView">;
export interface CraftLecternViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.LecternInventory">, arg2: j_net_minecraft_world_inventory.LecternMenu): CraftLecternView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftLoomView. */
export interface CraftLoomViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.LoomMenu, JavaOpaque<"org.bukkit.inventory.LoomInventory">>, JavaOpaque<"org.bukkit.inventory.view.LoomView">];
  getSelectablePatterns(): JavaList<JavaOpaque<"org.bukkit.block.banner.PatternType">>;
  getSelectedPatternIndex(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.LoomInventory">;
}
export type CraftLoomView = CraftLoomViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.LoomMenu, JavaOpaque<"org.bukkit.inventory.LoomInventory">> & JavaOpaque<"org.bukkit.inventory.view.LoomView">;
export interface CraftLoomViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.LoomInventory">, arg2: j_net_minecraft_world_inventory.LoomMenu): CraftLoomView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftMerchantView. */
export interface CraftMerchantViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.MerchantMenu, JavaOpaque<"org.bukkit.inventory.MerchantInventory">>, JavaOpaque<"org.bukkit.inventory.view.MerchantView">];
  getMerchant(): JavaOpaque<"org.bukkit.inventory.Merchant">;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.MerchantInventory">;
}
export type CraftMerchantView = CraftMerchantViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.MerchantMenu, JavaOpaque<"org.bukkit.inventory.MerchantInventory">> & JavaOpaque<"org.bukkit.inventory.view.MerchantView">;
export interface CraftMerchantViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.MerchantInventory">, arg2: j_net_minecraft_world_inventory.MerchantMenu, arg3: j_net_minecraft_world_item_trading.Merchant): CraftMerchantView;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.CraftStonecutterView. */
export interface CraftStonecutterViewMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.StonecutterMenu, JavaOpaque<"org.bukkit.inventory.StonecutterInventory">>, JavaOpaque<"org.bukkit.inventory.view.StonecutterView">];
  getRecipeAmount(): number;
  getRecipes(): JavaList<JavaOpaque<"org.bukkit.inventory.StonecuttingRecipe">>;
  getSelectedRecipeIndex(): number;
  getTopInventory(): JavaOpaque<"org.bukkit.inventory.StonecutterInventory">;
}
export type CraftStonecutterView = CraftStonecutterViewMembers & j_org_bukkit_craftbukkit_inventory.CraftInventoryView<j_net_minecraft_world_inventory.StonecutterMenu, JavaOpaque<"org.bukkit.inventory.StonecutterInventory">> & JavaOpaque<"org.bukkit.inventory.view.StonecutterView">;
export interface CraftStonecutterViewStatics {
  new(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.inventory.StonecutterInventory">, arg2: j_net_minecraft_world_inventory.StonecutterMenu): CraftStonecutterView;
}
