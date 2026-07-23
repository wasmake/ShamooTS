// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';

/** JVM abstract org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter. */
export interface CraftBlockInventoryConverterMembers {
  readonly __javaSupertypes?: readonly [CraftInventoryCreator_InventoryConverter];
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getBlockEntity(): j_net_minecraft_world.Container;
  getInventory(arg0: j_net_minecraft_world.Container): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: j_net_minecraft_world.Container): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftBlockInventoryConverter = CraftBlockInventoryConverterMembers & CraftInventoryCreator_InventoryConverter;
export interface CraftBlockInventoryConverterStatics {
  new(): CraftBlockInventoryConverter;
}

/** JVM abstract org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$AbstractFurnaceInventoryConverter. */
export interface CraftBlockInventoryConverter_AbstractFurnaceInventoryConverterMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(arg0: j_net_minecraft_world.Container): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: j_net_minecraft_world.Container): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter = CraftBlockInventoryConverter_AbstractFurnaceInventoryConverterMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_AbstractFurnaceInventoryConverterStatics {
  new(): CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$BlastFurnace. */
export interface CraftBlockInventoryConverter_BlastFurnaceMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_BlastFurnace = CraftBlockInventoryConverter_BlastFurnaceMembers & CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter;
export interface CraftBlockInventoryConverter_BlastFurnaceStatics {
  new(): CraftBlockInventoryConverter_BlastFurnace;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$BrewingStand. */
export interface CraftBlockInventoryConverter_BrewingStandMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getBlockEntity(): j_net_minecraft_world.Container;
  getInventory(arg0: j_net_minecraft_world.Container): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: j_net_minecraft_world.Container): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftBlockInventoryConverter_BrewingStand = CraftBlockInventoryConverter_BrewingStandMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_BrewingStandStatics {
  new(): CraftBlockInventoryConverter_BrewingStand;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Crafter. */
export interface CraftBlockInventoryConverter_CrafterMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Crafter = CraftBlockInventoryConverter_CrafterMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_CrafterStatics {
  new(): CraftBlockInventoryConverter_Crafter;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Dispenser. */
export interface CraftBlockInventoryConverter_DispenserMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Dispenser = CraftBlockInventoryConverter_DispenserMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_DispenserStatics {
  new(): CraftBlockInventoryConverter_Dispenser;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Dropper. */
export interface CraftBlockInventoryConverter_DropperMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Dropper = CraftBlockInventoryConverter_DropperMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_DropperStatics {
  new(): CraftBlockInventoryConverter_Dropper;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Furnace. */
export interface CraftBlockInventoryConverter_FurnaceMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Furnace = CraftBlockInventoryConverter_FurnaceMembers & CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter;
export interface CraftBlockInventoryConverter_FurnaceStatics {
  new(): CraftBlockInventoryConverter_Furnace;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Hopper. */
export interface CraftBlockInventoryConverter_HopperMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Hopper = CraftBlockInventoryConverter_HopperMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_HopperStatics {
  new(): CraftBlockInventoryConverter_Hopper;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Lectern. */
export interface CraftBlockInventoryConverter_LecternMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Lectern = CraftBlockInventoryConverter_LecternMembers & CraftBlockInventoryConverter;
export interface CraftBlockInventoryConverter_LecternStatics {
  new(): CraftBlockInventoryConverter_Lectern;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftBlockInventoryConverter$Smoker. */
export interface CraftBlockInventoryConverter_SmokerMembers {
  readonly __javaSupertypes?: readonly [CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter];
  getBlockEntity(): j_net_minecraft_world.Container;
}
export type CraftBlockInventoryConverter_Smoker = CraftBlockInventoryConverter_SmokerMembers & CraftBlockInventoryConverter_AbstractFurnaceInventoryConverter;
export interface CraftBlockInventoryConverter_SmokerStatics {
  new(): CraftBlockInventoryConverter_Smoker;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftCustomInventoryConverter. */
export interface CraftCustomInventoryConverterMembers {
  readonly __javaSupertypes?: readonly [CraftInventoryCreator_InventoryConverter];
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftCustomInventoryConverter = CraftCustomInventoryConverterMembers & CraftInventoryCreator_InventoryConverter;
export interface CraftCustomInventoryConverterStatics {
  new(): CraftCustomInventoryConverter;
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftInventoryCreator. */
export interface CraftInventoryCreatorMembers {
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftInventoryCreator = CraftInventoryCreatorMembers;
export interface CraftInventoryCreatorStatics {
  readonly INSTANCE: CraftInventoryCreator;
}

/** JVM interface org.bukkit.craftbukkit.inventory.util.CraftInventoryCreator$InventoryConverter. */
export interface CraftInventoryCreator_InventoryConverterMembers {
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftInventoryCreator_InventoryConverter = CraftInventoryCreator_InventoryConverterMembers;
export interface CraftInventoryCreator_InventoryConverterStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.util.CraftMenus. */
export interface CraftMenusMembers {
}
export type CraftMenus = CraftMenusMembers;
export interface CraftMenusStatics {
  new(): CraftMenus;
  getMenuTypeData<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */>(arg0: j_org_bukkit_craftbukkit_inventory.CraftMenuType<object, object>): CraftMenus_MenuTypeData<V, B>;
  openMerchantMenu(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_inventory.MerchantMenu): void;
}

/** JVM record org.bukkit.craftbukkit.inventory.util.CraftMenus$MenuTypeData. */
export interface CraftMenus_MenuTypeDataMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  viewBuilder(): JavaSupplier<B>;
  viewClass(): JavaClass<V>;
}
export type CraftMenus_MenuTypeData<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */ = unknown> = CraftMenus_MenuTypeDataMembers<V, B> & JavaOpaque<"java.lang.Record">;
export interface CraftMenus_MenuTypeDataStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */>(arg0: JavaClass<V>, arg1: JavaSupplier<B>): CraftMenus_MenuTypeData<V, B>;
}
