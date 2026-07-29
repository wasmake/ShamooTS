// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_event_inventory from './org.bukkit.event.inventory.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM class com.destroystokyo.paper.event.inventory.PrepareGrindstoneEvent. */
export interface PrepareGrindstoneEventMembers {
  readonly __javaSupertypes?: readonly [PrepareResultEvent];
  getInventory(): j_org_bukkit_inventory.GrindstoneInventory;
}
export type PrepareGrindstoneEvent = PrepareGrindstoneEventMembers & PrepareResultEvent;
export interface PrepareGrindstoneEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_inventory.ItemStack | null): PrepareGrindstoneEvent;
}

/** JVM class com.destroystokyo.paper.event.inventory.PrepareResultEvent. */
export interface PrepareResultEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_inventory.PrepareInventoryResultEvent];
  getResult(): j_org_bukkit_inventory.ItemStack | null;
  setResult(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type PrepareResultEvent = PrepareResultEventMembers & j_org_bukkit_event_inventory.PrepareInventoryResultEvent;
export interface PrepareResultEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_inventory.ItemStack | null): PrepareResultEvent;
}
