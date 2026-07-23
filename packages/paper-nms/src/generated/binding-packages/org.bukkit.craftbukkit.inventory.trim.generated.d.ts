// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';

/** JVM class org.bukkit.craftbukkit.inventory.trim.CraftTrimMaterial. */
export interface CraftTrimMaterialMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item_equipment_trim.TrimMaterial]>, JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">];
  description(): JavaOpaque<"net.kyori.adventure.text.Component">;
  getTranslationKey(): string;
}
export type CraftTrimMaterial = CraftTrimMaterialMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item_equipment_trim.TrimMaterial]> & JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">;
export interface CraftTrimMaterialStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>): CraftTrimMaterial;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">): j_net_minecraft_world_item_equipment_trim.TrimMaterial;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">): j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>;
  bukkitToObject(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">): object;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>): JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">;
  minecraftToBukkit(arg0: j_net_minecraft_world_item_equipment_trim.TrimMaterial): JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">;
  objectToBukkit(arg0: object): JavaOpaque<"org.bukkit.inventory.meta.trim.TrimMaterial">;
}

/** JVM class org.bukkit.craftbukkit.inventory.trim.CraftTrimPattern. */
export interface CraftTrimPatternMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item_equipment_trim.TrimPattern]>, JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">];
  description(): JavaOpaque<"net.kyori.adventure.text.Component">;
  getTranslationKey(): string;
}
export type CraftTrimPattern = CraftTrimPatternMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item_equipment_trim.TrimPattern]> & JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">;
export interface CraftTrimPatternStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>): CraftTrimPattern;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">): j_net_minecraft_world_item_equipment_trim.TrimPattern;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">): j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>;
  bukkitToObject(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">): object;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>): JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">;
  minecraftToBukkit(arg0: j_net_minecraft_world_item_equipment_trim.TrimPattern): JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">;
  objectToBukkit(arg0: object): JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">;
}
