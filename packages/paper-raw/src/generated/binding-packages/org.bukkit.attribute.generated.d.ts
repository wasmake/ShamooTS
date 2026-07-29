// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.attribute.Attributable. */
export interface AttributableMembers {
  getAttribute(arg0: Attribute): AttributeInstance | null;
  registerAttribute(arg0: Attribute): void;
}
export type Attributable = AttributableMembers;
export interface AttributableStatics {
}

/** JVM interface org.bukkit.attribute.Attribute. */
export interface AttributeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<Attribute>, j_org_bukkit.Keyed, j_org_bukkit.Translatable_2, j_net_kyori_adventure_translation.Translatable];
  compareTo(arg0: Attribute): number;
  getKey(): j_org_bukkit.NamespacedKey;
  getSentiment(): Attribute_Sentiment;
  getTranslationKey(): string;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
  translationKey(): string;
}
export type Attribute = AttributeMembers & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2 & j_net_kyori_adventure_translation.Translatable;
export interface AttributeStatics {
  readonly ARMOR: Attribute;
  readonly ARMOR_TOUGHNESS: Attribute;
  readonly ATTACK_DAMAGE: Attribute;
  readonly ATTACK_KNOCKBACK: Attribute;
  readonly ATTACK_SPEED: Attribute;
  readonly BLOCK_BREAK_SPEED: Attribute;
  readonly BLOCK_INTERACTION_RANGE: Attribute;
  readonly BURNING_TIME: Attribute;
  readonly CAMERA_DISTANCE: Attribute;
  readonly ENTITY_INTERACTION_RANGE: Attribute;
  readonly EXPLOSION_KNOCKBACK_RESISTANCE: Attribute;
  readonly FALL_DAMAGE_MULTIPLIER: Attribute;
  readonly FLYING_SPEED: Attribute;
  readonly FOLLOW_RANGE: Attribute;
  readonly GRAVITY: Attribute;
  readonly JUMP_STRENGTH: Attribute;
  readonly KNOCKBACK_RESISTANCE: Attribute;
  readonly LUCK: Attribute;
  readonly MAX_ABSORPTION: Attribute;
  readonly MAX_HEALTH: Attribute;
  readonly MINING_EFFICIENCY: Attribute;
  readonly MOVEMENT_EFFICIENCY: Attribute;
  readonly MOVEMENT_SPEED: Attribute;
  readonly OXYGEN_BONUS: Attribute;
  readonly SAFE_FALL_DISTANCE: Attribute;
  readonly SCALE: Attribute;
  readonly SNEAKING_SPEED: Attribute;
  readonly SPAWN_REINFORCEMENTS: Attribute;
  readonly STEP_HEIGHT: Attribute;
  readonly SUBMERGED_MINING_SPEED: Attribute;
  readonly SWEEPING_DAMAGE_RATIO: Attribute;
  readonly TEMPT_RANGE: Attribute;
  readonly WATER_MOVEMENT_EFFICIENCY: Attribute;
  readonly WAYPOINT_RECEIVE_RANGE: Attribute;
  readonly WAYPOINT_TRANSMIT_RANGE: Attribute;
  valueOf(arg0: string): Attribute;
  values(): Array<Attribute>;
}

/** Live JVM enum org.bukkit.attribute.Attribute$Sentiment; constants are host handles, not strings. */
export type Attribute_Sentiment = JavaEnum<"org.bukkit.attribute.Attribute$Sentiment", "NEGATIVE" | "NEUTRAL" | "POSITIVE"> & Attribute_SentimentMembers;
export interface Attribute_SentimentMembers {
}
export interface Attribute_SentimentStatics {
  readonly NEGATIVE: Attribute_Sentiment;
  readonly NEUTRAL: Attribute_Sentiment;
  readonly POSITIVE: Attribute_Sentiment;
  valueOf(arg0: string): Attribute_Sentiment;
  values(): Array<Attribute_Sentiment>;
}

/** JVM interface org.bukkit.attribute.AttributeInstance. */
export interface AttributeInstanceMembers {
  addModifier(arg0: AttributeModifier): void;
  addTransientModifier(arg0: AttributeModifier): void;
  getAttribute(): Attribute;
  getBaseValue(): number;
  getDefaultValue(): number;
  getModifier(arg0: JavaOpaque<"java.util.UUID">): AttributeModifier | null;
  getModifier(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): AttributeModifier | null;
  getModifiers(): JavaCollection<AttributeModifier>;
  getValue(): number;
  removeModifier(arg0: JavaOpaque<"java.util.UUID">): void;
  removeModifier(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): void;
  removeModifier(arg0: AttributeModifier): void;
  setBaseValue(arg0: number): void;
}
export type AttributeInstance = AttributeInstanceMembers;
export interface AttributeInstanceStatics {
}

/** JVM class org.bukkit.attribute.AttributeModifier. */
export interface AttributeModifierMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  equals(arg0: object): boolean;
  getAmount(): number;
  getKey(): j_org_bukkit.NamespacedKey;
  getName(): string;
  getOperation(): AttributeModifier_Operation;
  getSlot(): j_org_bukkit_inventory.EquipmentSlot | null;
  getSlotGroup(): j_org_bukkit_inventory.EquipmentSlotGroup;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
  toString(): string;
}
export type AttributeModifier = AttributeModifierMembers & j_org_bukkit.Keyed & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface AttributeModifierStatics {
  new(arg0: string, arg1: number, arg2: AttributeModifier_Operation): AttributeModifier;
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: number, arg3: AttributeModifier_Operation): AttributeModifier;
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: number, arg3: AttributeModifier_Operation, arg4: j_org_bukkit_inventory.EquipmentSlot | null): AttributeModifier;
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: number, arg3: AttributeModifier_Operation, arg4: j_org_bukkit_inventory.EquipmentSlotGroup): AttributeModifier;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: number, arg2: AttributeModifier_Operation): AttributeModifier;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: number, arg2: AttributeModifier_Operation, arg3: j_org_bukkit_inventory.EquipmentSlotGroup): AttributeModifier;
  deserialize(arg0: JavaMap<string, object>): AttributeModifier;
}

/** Live JVM enum org.bukkit.attribute.AttributeModifier$Operation; constants are host handles, not strings. */
export type AttributeModifier_Operation = JavaEnum<"org.bukkit.attribute.AttributeModifier$Operation", "ADD_NUMBER" | "ADD_SCALAR" | "MULTIPLY_SCALAR_1"> & AttributeModifier_OperationMembers;
export interface AttributeModifier_OperationMembers {
}
export interface AttributeModifier_OperationStatics {
  readonly ADD_NUMBER: AttributeModifier_Operation;
  readonly ADD_SCALAR: AttributeModifier_Operation;
  readonly MULTIPLY_SCALAR_1: AttributeModifier_Operation;
  valueOf(arg0: string): AttributeModifier_Operation;
  values(): Array<AttributeModifier_Operation>;
}
