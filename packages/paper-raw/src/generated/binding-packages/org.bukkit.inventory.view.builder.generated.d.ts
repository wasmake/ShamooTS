// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface org.bukkit.inventory.view.builder.InventoryViewBuilder. */
export interface InventoryViewBuilderMembers<V /* extends j_org_bukkit_inventory.InventoryView */ = unknown> {
  build(arg0: j_org_bukkit_entity.HumanEntity): V;
  copy(): InventoryViewBuilder<V>;
  title(arg0: j_net_kyori_adventure_text.Component | null): InventoryViewBuilder<V>;
}
export type InventoryViewBuilder<V /* extends j_org_bukkit_inventory.InventoryView */ = unknown> = InventoryViewBuilderMembers<V>;
export interface InventoryViewBuilderStatics {
}

/** JVM interface org.bukkit.inventory.view.builder.LocationInventoryViewBuilder. */
export interface LocationInventoryViewBuilderMembers<V /* extends j_org_bukkit_inventory.InventoryView */ = unknown> {
  readonly __javaSupertypes?: readonly [InventoryViewBuilder<V>];
  checkReachable(arg0: boolean): LocationInventoryViewBuilder<V>;
  copy(): LocationInventoryViewBuilder<V>;
  location(arg0: j_org_bukkit.Location): LocationInventoryViewBuilder<V>;
  title(arg0: j_net_kyori_adventure_text.Component | null): LocationInventoryViewBuilder<V>;
}
export type LocationInventoryViewBuilder<V /* extends j_org_bukkit_inventory.InventoryView */ = unknown> = LocationInventoryViewBuilderMembers<V> & InventoryViewBuilder<V>;
export interface LocationInventoryViewBuilderStatics {
}

/** JVM interface org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder. */
export interface MerchantInventoryViewBuilderMembers<V /* extends j_org_bukkit_inventory.InventoryView */ = unknown> {
  readonly __javaSupertypes?: readonly [InventoryViewBuilder<V>];
  checkReachable(arg0: boolean): MerchantInventoryViewBuilder<V>;
  copy(): MerchantInventoryViewBuilder<V>;
  merchant(arg0: j_org_bukkit_inventory.Merchant): MerchantInventoryViewBuilder<V>;
  title(arg0: j_net_kyori_adventure_text.Component | null): MerchantInventoryViewBuilder<V>;
}
export type MerchantInventoryViewBuilder<V /* extends j_org_bukkit_inventory.InventoryView */ = unknown> = MerchantInventoryViewBuilderMembers<V> & InventoryViewBuilder<V>;
export interface MerchantInventoryViewBuilderStatics {
}
