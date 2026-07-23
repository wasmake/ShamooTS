// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';

/** JVM class org.bukkit.craftbukkit.potion.CraftPotionEffectType. */
export interface CraftPotionEffectTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.potion.PotionEffectType">, JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_effect.MobEffect]>, JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_effect.MobEffect]>];
  createEffect(arg0: number, arg1: number): JavaOpaque<"org.bukkit.potion.PotionEffect">;
  equals(arg0: object): boolean;
  getAttributeModifierAmount(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: number): number;
  getCategory(): JavaOpaque<"org.bukkit.potion.PotionEffectTypeCategory">;
  getColor(): JavaOpaque<"org.bukkit.Color">;
  getDurationModifier(): number;
  getEffectAttributes(): JavaMap<JavaOpaque<"org.bukkit.attribute.Attribute">, JavaOpaque<"org.bukkit.attribute.AttributeModifier">>;
  getEffectCategory(): JavaOpaque<"org.bukkit.potion.PotionEffectType$Category">;
  getHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>;
  getId(): number;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getName(): string;
  getTranslationKey(): string;
  hashCode(): number;
  isInstant(): boolean;
  toString(): string;
  translationKey(): string;
}
export type CraftPotionEffectType = CraftPotionEffectTypeMembers & JavaOpaque<"org.bukkit.potion.PotionEffectType"> & JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_effect.MobEffect]> & JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_effect.MobEffect]>;
export interface CraftPotionEffectTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): CraftPotionEffectType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): j_net_minecraft_world_effect.MobEffect;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>;
  fromNMS(arg0: j_net_minecraft_world_effect.MobEffectCategory): JavaOpaque<"org.bukkit.potion.PotionEffectType$Category">;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): JavaOpaque<"org.bukkit.potion.PotionEffectType">;
  minecraftToBukkit(arg0: j_net_minecraft_world_effect.MobEffect): JavaOpaque<"org.bukkit.potion.PotionEffectType">;
}

/** JVM class org.bukkit.craftbukkit.potion.CraftPotionEffectTypeCategory. */
export interface CraftPotionEffectTypeCategoryMembers {
}
export type CraftPotionEffectTypeCategory = CraftPotionEffectTypeCategoryMembers;
export interface CraftPotionEffectTypeCategoryStatics {
  new(): CraftPotionEffectTypeCategory;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectTypeCategory">): j_net_minecraft_world_effect.MobEffectCategory;
  minecraftToBukkit(arg0: j_net_minecraft_world_effect.MobEffectCategory): JavaOpaque<"org.bukkit.potion.PotionEffectTypeCategory">;
}

/** JVM class org.bukkit.craftbukkit.potion.CraftPotionType. */
export interface CraftPotionTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.potion.PotionType$InternalPotionData">];
  getEffectType(): JavaOpaque<"org.bukkit.potion.PotionEffectType">;
  getMaxLevel(): number;
  getPotionEffects(): JavaList<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  isExtendable(): boolean;
  isInstant(): boolean;
  isUpgradeable(): boolean;
}
export type CraftPotionType = CraftPotionTypeMembers & JavaOpaque<"org.bukkit.potion.PotionType$InternalPotionData">;
export interface CraftPotionTypeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: j_net_minecraft_world_item_alchemy.Potion): CraftPotionType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.potion.PotionType">): j_net_minecraft_world_item_alchemy.Potion;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.potion.PotionType">): j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>;
  bukkitToString(arg0: JavaOpaque<"org.bukkit.potion.PotionType">): string;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_alchemy.Potion>): JavaOpaque<"org.bukkit.potion.PotionType">;
  minecraftToBukkit(arg0: j_net_minecraft_world_item_alchemy.Potion): JavaOpaque<"org.bukkit.potion.PotionType">;
  stringToBukkit(arg0: string): JavaOpaque<"org.bukkit.potion.PotionType">;
}

/** JVM class org.bukkit.craftbukkit.potion.CraftPotionUtil. */
export interface CraftPotionUtilMembers {
}
export type CraftPotionUtil = CraftPotionUtilMembers;
export interface CraftPotionUtilStatics {
  new(): CraftPotionUtil;
  equals(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  fromBukkit(arg0: JavaOpaque<"org.bukkit.potion.PotionData">): JavaOpaque<"org.bukkit.potion.PotionType">;
  fromBukkit(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">): j_net_minecraft_world_effect.MobEffectInstance;
  toBukkit(arg0: j_net_minecraft_world_effect.MobEffectInstance): JavaOpaque<"org.bukkit.potion.PotionEffect">;
  toBukkit(arg0: JavaOpaque<"org.bukkit.potion.PotionType">): JavaOpaque<"org.bukkit.potion.PotionData">;
}
