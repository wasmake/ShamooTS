// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';

/** JVM class org.bukkit.craftbukkit.attribute.CraftAttribute. */
export interface CraftAttributeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.attribute.Attribute">, j_net_minecraft_world_entity_ai_attributes.Attribute]>, JavaOpaque<"org.bukkit.attribute.Attribute">];
  getSentiment(): JavaOpaque<"org.bukkit.attribute.Attribute$Sentiment">;
  getTranslationKey(): string;
  translationKey(): string;
}
export type CraftAttribute = CraftAttributeMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.attribute.Attribute">, j_net_minecraft_world_entity_ai_attributes.Attribute]> & JavaOpaque<"org.bukkit.attribute.Attribute">;
export interface CraftAttributeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): CraftAttribute;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): j_net_minecraft_world_entity_ai_attributes.Attribute;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>;
  bukkitToString(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): string;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): JavaOpaque<"org.bukkit.attribute.Attribute">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_ai_attributes.Attribute): JavaOpaque<"org.bukkit.attribute.Attribute">;
  stringToBukkit(arg0: string): JavaOpaque<"org.bukkit.attribute.Attribute">;
}

/** JVM class org.bukkit.craftbukkit.attribute.CraftAttributeInstance. */
export interface CraftAttributeInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.attribute.AttributeInstance">];
  addModifier(arg0: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): void;
  addTransientModifier(arg0: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): void;
  getAttribute(): JavaOpaque<"org.bukkit.attribute.Attribute">;
  getBaseValue(): number;
  getDefaultValue(): number;
  getModifier(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.attribute.AttributeModifier">;
  getModifier(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): JavaOpaque<"org.bukkit.attribute.AttributeModifier">;
  getModifiers(): JavaCollection<JavaOpaque<"org.bukkit.attribute.AttributeModifier">>;
  getValue(): number;
  removeModifier(arg0: JavaOpaque<"java.util.UUID">): void;
  removeModifier(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): void;
  removeModifier(arg0: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): void;
  setBaseValue(arg0: number): void;
}
export type CraftAttributeInstance = CraftAttributeInstanceMembers & JavaOpaque<"org.bukkit.attribute.AttributeInstance">;
export interface CraftAttributeInstanceStatics {
  new(arg0: j_net_minecraft_world_entity_ai_attributes.AttributeInstance, arg1: JavaOpaque<"org.bukkit.attribute.Attribute">): CraftAttributeInstance;
  convert(arg0: j_net_minecraft_world_entity_ai_attributes.AttributeModifier): JavaOpaque<"org.bukkit.attribute.AttributeModifier">;
  convert(arg0: j_net_minecraft_world_entity_ai_attributes.AttributeModifier, arg1: j_net_minecraft_world_entity.EquipmentSlotGroup): JavaOpaque<"org.bukkit.attribute.AttributeModifier">;
  convert(arg0: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): j_net_minecraft_world_entity_ai_attributes.AttributeModifier;
}

/** JVM class org.bukkit.craftbukkit.attribute.CraftAttributeMap. */
export interface CraftAttributeMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.attribute.Attributable">];
  getAttribute(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaOpaque<"org.bukkit.attribute.AttributeInstance">;
  registerAttribute(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): void;
}
export type CraftAttributeMap = CraftAttributeMapMembers & JavaOpaque<"org.bukkit.attribute.Attributable">;
export interface CraftAttributeMapStatics {
  new(arg0: j_net_minecraft_world_entity_ai_attributes.AttributeMap): CraftAttributeMap;
  convertIfNeeded(arg0: string): string;
}
