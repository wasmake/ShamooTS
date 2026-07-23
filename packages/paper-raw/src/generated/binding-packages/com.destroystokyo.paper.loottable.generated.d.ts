// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';

/** JVM interface com.destroystokyo.paper.loottable.LootableBlockInventory. */
export interface LootableBlockInventoryMembers {
  readonly __javaSupertypes?: readonly [LootableInventory];
  getBlock(): j_org_bukkit_block.Block;
}
export type LootableBlockInventory = LootableBlockInventoryMembers & LootableInventory;
export interface LootableBlockInventoryStatics {
}

/** JVM interface com.destroystokyo.paper.loottable.LootableEntityInventory. */
export interface LootableEntityInventoryMembers {
  readonly __javaSupertypes?: readonly [LootableInventory];
  getEntity(): j_org_bukkit_entity.Entity;
}
export type LootableEntityInventory = LootableEntityInventoryMembers & LootableInventory;
export interface LootableEntityInventoryStatics {
}

/** JVM interface com.destroystokyo.paper.loottable.LootableInventory. */
export interface LootableInventoryMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_loot.Lootable];
  canPlayerLoot(arg0: JavaOpaque<"java.util.UUID">): boolean;
  getLastFilled(): bigint;
  getLastLooted(arg0: JavaOpaque<"java.util.UUID">): bigint | null;
  getLastLooted(arg0: j_org_bukkit_entity.Player): bigint | null;
  getNextRefill(): bigint;
  hasBeenFilled(): boolean;
  hasPendingRefill(): boolean;
  hasPlayerLooted(arg0: JavaOpaque<"java.util.UUID">): boolean;
  hasPlayerLooted(arg0: j_org_bukkit_entity.Player): boolean;
  isRefillEnabled(): boolean;
  setHasPlayerLooted(arg0: JavaOpaque<"java.util.UUID">, arg1: boolean): boolean;
  setHasPlayerLooted(arg0: j_org_bukkit_entity.Player, arg1: boolean): boolean;
  setNextRefill(arg0: bigint): bigint;
}
export type LootableInventory = LootableInventoryMembers & j_org_bukkit_loot.Lootable;
export interface LootableInventoryStatics {
}

/** JVM class com.destroystokyo.paper.loottable.LootableInventoryReplenishEvent. */
export interface LootableInventoryReplenishEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventory(): LootableInventory;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type LootableInventoryReplenishEvent = LootableInventoryReplenishEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface LootableInventoryReplenishEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: LootableInventory): LootableInventoryReplenishEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
