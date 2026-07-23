// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_inventory from './org.bukkit.event.inventory.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_view from './org.bukkit.inventory.view.generated.js';

/** JVM class org.bukkit.event.enchantment.EnchantItemEvent. */
export interface EnchantItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_inventory.InventoryEvent, j_org_bukkit_event.Cancellable];
  getEnchantBlock(): j_org_bukkit_block.Block;
  getEnchanter(): j_org_bukkit_entity.Player;
  getEnchantmentHint(): j_org_bukkit_enchantments.Enchantment;
  getEnchantsToAdd(): JavaMap<j_org_bukkit_enchantments.Enchantment, number>;
  getExpLevelCost(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getLevelHint(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setExpLevelCost(arg0: number): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  whichButton(): number;
}
export type EnchantItemEvent = EnchantItemEventMembers & j_org_bukkit_event_inventory.InventoryEvent & j_org_bukkit_event.Cancellable;
export interface EnchantItemEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.InventoryView, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_inventory.ItemStack, arg4: number, arg5: JavaMap<j_org_bukkit_enchantments.Enchantment, number>, arg6: j_org_bukkit_enchantments.Enchantment, arg7: number, arg8: number): EnchantItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.enchantment.PrepareItemEnchantEvent. */
export interface PrepareItemEnchantEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_inventory.InventoryEvent, j_org_bukkit_event.Cancellable];
  getEnchantBlock(): j_org_bukkit_block.Block;
  getEnchanter(): j_org_bukkit_entity.Player;
  getEnchantmentBonus(): number;
  getExpLevelCostsOffered(): Array<number>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getOffers(): Array<j_org_bukkit_enchantments.EnchantmentOffer> | null;
  getView(): j_org_bukkit_inventory.InventoryView;
  getView(): j_org_bukkit_inventory_view.EnchantmentView;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PrepareItemEnchantEvent = PrepareItemEnchantEventMembers & j_org_bukkit_event_inventory.InventoryEvent & j_org_bukkit_event.Cancellable;
export interface PrepareItemEnchantEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory_view.EnchantmentView, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_inventory.ItemStack, arg4: Array<j_org_bukkit_enchantments.EnchantmentOffer> | null, arg5: number): PrepareItemEnchantEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
