// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';

/** JVM abstract org.bukkit.craftbukkit.inventory.view.builder.CraftAbstractInventoryViewBuilder. */
export interface CraftAbstractInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]>];
  build(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">): V;
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
  checkReachable: boolean;
  defaultTitle: j_net_minecraft_network_chat.Component;
  readonly handle: j_net_minecraft_world_inventory.MenuType<object>;
  title: (JavaOpaque<"net.kyori.adventure.text.Component"> | null) & { (arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> | null };
}
export type CraftAbstractInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftAbstractInventoryViewBuilderMembers<V> & JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]>;
export interface CraftAbstractInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>): CraftAbstractInventoryViewBuilder<V>;
}

/** JVM abstract org.bukkit.craftbukkit.inventory.view.builder.CraftAbstractLocationInventoryViewBuilder. */
export interface CraftAbstractLocationInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractInventoryViewBuilder<V>, JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>];
  checkReachable(arg0: boolean): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder">;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
  location(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
  position: j_net_minecraft_core.BlockPos | null;
  title(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder"> | null;
  title(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]> | null;
  world: j_net_minecraft_world_level.Level | null;
}
export type CraftAbstractLocationInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftAbstractLocationInventoryViewBuilderMembers<V> & CraftAbstractInventoryViewBuilder<V> & JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
export interface CraftAbstractLocationInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>): CraftAbstractLocationInventoryViewBuilder<V>;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.builder.CraftAccessLocationInventoryViewBuilder. */
export interface CraftAccessLocationInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractLocationInventoryViewBuilder<V>];
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder">;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
}
export type CraftAccessLocationInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftAccessLocationInventoryViewBuilderMembers<V> & CraftAbstractLocationInventoryViewBuilder<V>;
export interface CraftAccessLocationInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>, arg1: j_net_minecraft_world_level_block.Block): CraftAccessLocationInventoryViewBuilder<V>;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.builder.CraftBlockEntityInventoryViewBuilder. */
export interface CraftBlockEntityInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractLocationInventoryViewBuilder<V>];
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder">;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
}
export type CraftBlockEntityInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftBlockEntityInventoryViewBuilderMembers<V> & CraftAbstractLocationInventoryViewBuilder<V>;
export interface CraftBlockEntityInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>, arg1: j_net_minecraft_world_level_block.Block, arg2: CraftBlockEntityInventoryViewBuilder_CraftBlockInventoryBuilder): CraftBlockEntityInventoryViewBuilder<V>;
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>, arg1: j_net_minecraft_world_level_block.Block, arg2: CraftBlockEntityInventoryViewBuilder_CraftBlockInventoryBuilder, arg3: boolean): CraftBlockEntityInventoryViewBuilder<V>;
}

/** JVM interface org.bukkit.craftbukkit.inventory.view.builder.CraftBlockEntityInventoryViewBuilder$CraftBlockInventoryBuilder. */
export interface CraftBlockEntityInventoryViewBuilder_CraftBlockInventoryBuilderMembers {
  build(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world.MenuProvider;
}
export type CraftBlockEntityInventoryViewBuilder_CraftBlockInventoryBuilder = CraftBlockEntityInventoryViewBuilder_CraftBlockInventoryBuilderMembers;
export interface CraftBlockEntityInventoryViewBuilder_CraftBlockInventoryBuilderStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.view.builder.CraftDoubleChestInventoryViewBuilder. */
export interface CraftDoubleChestInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractLocationInventoryViewBuilder<V>];
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder">;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.LocationInventoryViewBuilder", [V]>;
}
export type CraftDoubleChestInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftDoubleChestInventoryViewBuilderMembers<V> & CraftAbstractLocationInventoryViewBuilder<V>;
export interface CraftDoubleChestInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>): CraftDoubleChestInventoryViewBuilder<V>;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.builder.CraftEnchantmentInventoryViewBuilder. */
export interface CraftEnchantmentInventoryViewBuilderMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractLocationInventoryViewBuilder<JavaOpaque<"org.bukkit.inventory.view.EnchantmentView">>];
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
}
export type CraftEnchantmentInventoryViewBuilder = CraftEnchantmentInventoryViewBuilderMembers & CraftAbstractLocationInventoryViewBuilder<JavaOpaque<"org.bukkit.inventory.view.EnchantmentView">>;
export interface CraftEnchantmentInventoryViewBuilderStatics {
  new(arg0: j_net_minecraft_world_inventory.MenuType<object>): CraftEnchantmentInventoryViewBuilder;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.builder.CraftMerchantInventoryViewBuilder. */
export interface CraftMerchantInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractInventoryViewBuilder<V>, JavaOpaque<"org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder", [V]>];
  build(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">): V;
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
  checkReachable(arg0: boolean): JavaOpaque<"org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder", [V]>;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder">;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder", [V]>;
  merchant(arg0: JavaOpaque<"org.bukkit.inventory.Merchant">): JavaOpaque<"org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder", [V]>;
  title(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder"> | null;
  title(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder", [V]> | null;
}
export type CraftMerchantInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftMerchantInventoryViewBuilderMembers<V> & CraftAbstractInventoryViewBuilder<V> & JavaOpaque<"org.bukkit.inventory.view.builder.MerchantInventoryViewBuilder", [V]>;
export interface CraftMerchantInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>): CraftMerchantInventoryViewBuilder<V>;
}

/** JVM class org.bukkit.craftbukkit.inventory.view.builder.CraftStandardInventoryViewBuilder. */
export interface CraftStandardInventoryViewBuilderMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractInventoryViewBuilder<V>];
  buildContainer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_world_inventory.AbstractContainerMenu;
  copy(): JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]>;
}
export type CraftStandardInventoryViewBuilder<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown> = CraftStandardInventoryViewBuilderMembers<V> & CraftAbstractInventoryViewBuilder<V>;
export interface CraftStandardInventoryViewBuilderStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */>(arg0: j_net_minecraft_world_inventory.MenuType<object>): CraftStandardInventoryViewBuilder<V>;
}
