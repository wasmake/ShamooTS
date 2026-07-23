// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';

/** JVM class org.bukkit.craftbukkit.enchantments.CraftEnchantment. */
export interface CraftEnchantmentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.enchantments.Enchantment">, JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_item_enchantment.Enchantment]>];
  canEnchantItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  conflictsWith(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  description(): JavaOpaque<"net.kyori.adventure.text.Component">;
  displayName(arg0: number): JavaOpaque<"net.kyori.adventure.text.Component">;
  equals(arg0: object): boolean;
  getActiveSlotGroups(): JavaSet<JavaOpaque<"org.bukkit.inventory.EquipmentSlotGroup">>;
  getAnvilCost(): number;
  getDamageIncrease(arg0: number, arg1: JavaOpaque<"org.bukkit.entity.EntityCategory">): number;
  getDamageIncrease(arg0: number, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): number;
  getExclusiveWith(): JavaOpaque<"io.papermc.paper.registry.set.RegistryKeySet", [JavaOpaque<"org.bukkit.enchantments.Enchantment">]>;
  getHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>;
  getItemTarget(): JavaOpaque<"org.bukkit.enchantments.EnchantmentTarget">;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getMaxLevel(): number;
  getMaxModifiedCost(arg0: number): number;
  getMinModifiedCost(arg0: number): number;
  getName(): string;
  getPrimaryItems(): JavaOpaque<"io.papermc.paper.registry.set.RegistryKeySet", [JavaOpaque<"org.bukkit.inventory.ItemType">]>;
  getRarity(): JavaOpaque<"io.papermc.paper.enchantments.EnchantmentRarity">;
  getStartLevel(): number;
  getSupportedItems(): JavaOpaque<"io.papermc.paper.registry.set.RegistryKeySet", [JavaOpaque<"org.bukkit.inventory.ItemType">]>;
  getTranslationKey(): string;
  getWeight(): number;
  hashCode(): number;
  isCursed(): boolean;
  isDiscoverable(): boolean;
  isTradeable(): boolean;
  isTreasure(): boolean;
  toString(): string;
  translationKey(): string;
}
export type CraftEnchantment = CraftEnchantmentMembers & JavaOpaque<"org.bukkit.enchantments.Enchantment"> & JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_item_enchantment.Enchantment]>;
export interface CraftEnchantmentStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>): CraftEnchantment;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): j_net_minecraft_world_item_enchantment.Enchantment;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>;
  bukkitToString(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): string;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>): JavaOpaque<"org.bukkit.enchantments.Enchantment">;
  minecraftToBukkit(arg0: j_net_minecraft_world_item_enchantment.Enchantment): JavaOpaque<"org.bukkit.enchantments.Enchantment">;
  stringToBukkit(arg0: string): JavaOpaque<"org.bukkit.enchantments.Enchantment">;
}
