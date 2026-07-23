// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';

/** JVM class net.minecraft.world.entity.ai.attributes.Attribute. */
export interface AttributeMembers {
  getDefaultValue(): number;
  getDescriptionId(): string;
  getStyle(arg0: boolean): j_net_minecraft.ChatFormatting;
  isClientSyncable(): boolean;
  sanitizeValue(arg0: number): number;
  sentiment: Attribute_Sentiment;
  setSentiment(arg0: Attribute_Sentiment): Attribute;
  setSyncable(arg0: boolean): Attribute;
}
export type Attribute = AttributeMembers;
export interface AttributeStatics {
  new(arg0: string, arg1: number): Attribute;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Attribute>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<Attribute>>;
}

/** Live JVM enum net.minecraft.world.entity.ai.attributes.Attribute$Sentiment; constants are host handles, not strings. */
export type Attribute_Sentiment = JavaEnum<"net.minecraft.world.entity.ai.attributes.Attribute$Sentiment", "NEGATIVE" | "NEUTRAL" | "POSITIVE"> & Attribute_SentimentMembers;
export interface Attribute_SentimentMembers {
  getStyle(arg0: boolean): j_net_minecraft.ChatFormatting;
}
export interface Attribute_SentimentStatics {
  readonly NEGATIVE: Attribute_Sentiment;
  readonly NEUTRAL: Attribute_Sentiment;
  readonly POSITIVE: Attribute_Sentiment;
  valueOf(arg0: string): Attribute_Sentiment;
  values(): Array<Attribute_Sentiment>;
}

/** JVM class net.minecraft.world.entity.ai.attributes.AttributeInstance. */
export interface AttributeInstanceMembers {
  addOrReplacePermanentModifier(arg0: AttributeModifier): void;
  addOrUpdateTransientModifier(arg0: AttributeModifier): void;
  addPermanentModifier(arg0: AttributeModifier): void;
  addPermanentModifiers(arg0: JavaCollection<AttributeModifier>): void;
  addTransientModifier(arg0: AttributeModifier): void;
  apply(arg0: AttributeInstance_Packed): void;
  getAttribute(): j_net_minecraft_core.Holder<Attribute>;
  getBaseValue(): number;
  getModifier(arg0: j_net_minecraft_resources.ResourceLocation): AttributeModifier | null;
  getModifiers(): JavaSet<AttributeModifier>;
  getPermanentModifiers(): JavaSet<AttributeModifier>;
  getValue(): number;
  hasModifier(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  pack(): AttributeInstance_Packed;
  removeModifier(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  removeModifier(arg0: AttributeModifier): void;
  removeModifiers(): void;
  replaceFrom(arg0: AttributeInstance): void;
  setBaseValue(arg0: number): void;
  setDirty(): void;
}
export type AttributeInstance = AttributeInstanceMembers;
export interface AttributeInstanceStatics {
  new(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: JavaConsumer<AttributeInstance>): AttributeInstance;
}

/** JVM record net.minecraft.world.entity.ai.attributes.AttributeInstance$Packed. */
export interface AttributeInstance_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  attribute(): j_net_minecraft_core.Holder<Attribute>;
  baseValue(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  modifiers(): JavaList<AttributeModifier>;
  toString(): string;
}
export type AttributeInstance_Packed = AttributeInstance_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface AttributeInstance_PackedStatics {
  new(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: number, arg2: JavaList<AttributeModifier>): AttributeInstance_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AttributeInstance_Packed]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<AttributeInstance_Packed>]>;
}

/** JVM class net.minecraft.world.entity.ai.attributes.AttributeMap. */
export interface AttributeMapMembers {
  addTransientAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap", [j_net_minecraft_core.Holder<Attribute>, AttributeModifier]>): void;
  apply(arg0: JavaList<AttributeInstance_Packed>): void;
  assignAllValues(arg0: AttributeMap): void;
  assignBaseValues(arg0: AttributeMap): void;
  assignPermanentModifiers(arg0: AttributeMap): void;
  getAttributesToSync(): JavaSet<AttributeInstance>;
  getAttributesToUpdate(): JavaSet<AttributeInstance>;
  getBaseValue(arg0: j_net_minecraft_core.Holder<Attribute>): number;
  getInstance(arg0: j_net_minecraft_core.Holder<Attribute>): AttributeInstance | null;
  getModifierValue(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: j_net_minecraft_resources.ResourceLocation): number;
  getSyncableAttributes(): JavaCollection<AttributeInstance>;
  getValue(arg0: j_net_minecraft_core.Holder<Attribute>): number;
  hasAttribute(arg0: j_net_minecraft_core.Holder<Attribute>): boolean;
  hasModifier(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: j_net_minecraft_resources.ResourceLocation): boolean;
  pack(): JavaList<AttributeInstance_Packed>;
  registerAttribute(arg0: j_net_minecraft_core.Holder<Attribute>): void;
  removeAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap", [j_net_minecraft_core.Holder<Attribute>, AttributeModifier]>): void;
  resetBaseValue(arg0: j_net_minecraft_core.Holder<Attribute>): boolean;
}
export type AttributeMap = AttributeMapMembers;
export interface AttributeMapStatics {
  new(arg0: AttributeSupplier): AttributeMap;
}

/** JVM record net.minecraft.world.entity.ai.attributes.AttributeModifier. */
export interface AttributeModifierMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  amount(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  is(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  operation(): AttributeModifier_Operation;
  toString(): string;
}
export type AttributeModifier = AttributeModifierMembers & JavaOpaque<"java.lang.Record">;
export interface AttributeModifierStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number, arg2: AttributeModifier_Operation): AttributeModifier;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AttributeModifier]>;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AttributeModifier]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, AttributeModifier>;
}

/** Live JVM enum net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation; constants are host handles, not strings. */
export type AttributeModifier_Operation = JavaEnum<"net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation", "ADD_MULTIPLIED_BASE" | "ADD_MULTIPLIED_TOTAL" | "ADD_VALUE"> & AttributeModifier_OperationMembers;
export interface AttributeModifier_OperationMembers {
  getSerializedName(): string;
  id(): number;
}
export interface AttributeModifier_OperationStatics {
  readonly ADD_MULTIPLIED_BASE: AttributeModifier_Operation;
  readonly ADD_MULTIPLIED_TOTAL: AttributeModifier_Operation;
  readonly ADD_VALUE: AttributeModifier_Operation;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [AttributeModifier_Operation]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AttributeModifier_Operation]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, AttributeModifier_Operation>;
  valueOf(arg0: string): AttributeModifier_Operation;
  values(): Array<AttributeModifier_Operation>;
}

/** JVM class net.minecraft.world.entity.ai.attributes.Attributes. */
export interface AttributesMembers {
}
export type Attributes = AttributesMembers;
export interface AttributesStatics {
  new(): Attributes;
  readonly ARMOR: j_net_minecraft_core.Holder<Attribute>;
  readonly ARMOR_TOUGHNESS: j_net_minecraft_core.Holder<Attribute>;
  readonly ATTACK_DAMAGE: j_net_minecraft_core.Holder<Attribute>;
  readonly ATTACK_KNOCKBACK: j_net_minecraft_core.Holder<Attribute>;
  readonly ATTACK_SPEED: j_net_minecraft_core.Holder<Attribute>;
  readonly BLOCK_BREAK_SPEED: j_net_minecraft_core.Holder<Attribute>;
  readonly BLOCK_INTERACTION_RANGE: j_net_minecraft_core.Holder<Attribute>;
  readonly BURNING_TIME: j_net_minecraft_core.Holder<Attribute>;
  readonly CAMERA_DISTANCE: j_net_minecraft_core.Holder<Attribute>;
  readonly ENTITY_INTERACTION_RANGE: j_net_minecraft_core.Holder<Attribute>;
  readonly EXPLOSION_KNOCKBACK_RESISTANCE: j_net_minecraft_core.Holder<Attribute>;
  readonly FALL_DAMAGE_MULTIPLIER: j_net_minecraft_core.Holder<Attribute>;
  readonly FLYING_SPEED: j_net_minecraft_core.Holder<Attribute>;
  readonly FOLLOW_RANGE: j_net_minecraft_core.Holder<Attribute>;
  readonly GRAVITY: j_net_minecraft_core.Holder<Attribute>;
  readonly JUMP_STRENGTH: j_net_minecraft_core.Holder<Attribute>;
  readonly KNOCKBACK_RESISTANCE: j_net_minecraft_core.Holder<Attribute>;
  readonly LUCK: j_net_minecraft_core.Holder<Attribute>;
  readonly MAX_ABSORPTION: j_net_minecraft_core.Holder<Attribute>;
  readonly MAX_HEALTH: j_net_minecraft_core.Holder<Attribute>;
  readonly MINING_EFFICIENCY: j_net_minecraft_core.Holder<Attribute>;
  readonly MOVEMENT_EFFICIENCY: j_net_minecraft_core.Holder<Attribute>;
  readonly MOVEMENT_SPEED: j_net_minecraft_core.Holder<Attribute>;
  readonly OXYGEN_BONUS: j_net_minecraft_core.Holder<Attribute>;
  readonly SAFE_FALL_DISTANCE: j_net_minecraft_core.Holder<Attribute>;
  readonly SCALE: j_net_minecraft_core.Holder<Attribute>;
  readonly SNEAKING_SPEED: j_net_minecraft_core.Holder<Attribute>;
  readonly SPAWN_REINFORCEMENTS_CHANCE: j_net_minecraft_core.Holder<Attribute>;
  readonly STEP_HEIGHT: j_net_minecraft_core.Holder<Attribute>;
  readonly SUBMERGED_MINING_SPEED: j_net_minecraft_core.Holder<Attribute>;
  readonly SWEEPING_DAMAGE_RATIO: j_net_minecraft_core.Holder<Attribute>;
  readonly TEMPT_RANGE: j_net_minecraft_core.Holder<Attribute>;
  readonly WATER_MOVEMENT_EFFICIENCY: j_net_minecraft_core.Holder<Attribute>;
  readonly WAYPOINT_RECEIVE_RANGE: j_net_minecraft_core.Holder<Attribute>;
  readonly WAYPOINT_TRANSMIT_RANGE: j_net_minecraft_core.Holder<Attribute>;
  bootstrap(arg0: j_net_minecraft_core.Registry<Attribute>): j_net_minecraft_core.Holder<Attribute>;
}

/** JVM class net.minecraft.world.entity.ai.attributes.AttributeSupplier. */
export interface AttributeSupplierMembers {
  createInstance(arg0: JavaConsumer<AttributeInstance>, arg1: j_net_minecraft_core.Holder<Attribute>): AttributeInstance | null;
  getAttributeInstance(arg0: j_net_minecraft_core.Holder<Attribute>): AttributeInstance;
  getBaseValue(arg0: j_net_minecraft_core.Holder<Attribute>): number;
  getModifierValue(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: j_net_minecraft_resources.ResourceLocation): number;
  getValue(arg0: j_net_minecraft_core.Holder<Attribute>): number;
  hasAttribute(arg0: j_net_minecraft_core.Holder<Attribute>): boolean;
  hasModifier(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: j_net_minecraft_resources.ResourceLocation): boolean;
}
export type AttributeSupplier = AttributeSupplierMembers;
export interface AttributeSupplierStatics {
  builder(): AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder. */
export interface AttributeSupplier_BuilderMembers {
  add(arg0: j_net_minecraft_core.Holder<Attribute>): AttributeSupplier_Builder;
  add(arg0: j_net_minecraft_core.Holder<Attribute>, arg1: number): AttributeSupplier_Builder;
  build(): AttributeSupplier;
}
export type AttributeSupplier_Builder = AttributeSupplier_BuilderMembers;
export interface AttributeSupplier_BuilderStatics {
  new(): AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.ai.attributes.DefaultAttributes. */
export interface DefaultAttributesMembers {
}
export type DefaultAttributes = DefaultAttributesMembers;
export interface DefaultAttributesStatics {
  new(): DefaultAttributes;
  getSupplier(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity.LivingEntity>): AttributeSupplier;
  hasSupplier(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  validate(): void;
}

/** JVM class net.minecraft.world.entity.ai.attributes.RangedAttribute. */
export interface RangedAttributeMembers {
  readonly __javaSupertypes?: readonly [Attribute];
  getMaxValue(): number;
  getMinValue(): number;
  maxValue: number;
  sanitizeValue(arg0: number): number;
}
export type RangedAttribute = RangedAttributeMembers & Attribute;
export interface RangedAttributeStatics {
  new(arg0: string, arg1: number, arg2: number, arg3: number): RangedAttribute;
}
