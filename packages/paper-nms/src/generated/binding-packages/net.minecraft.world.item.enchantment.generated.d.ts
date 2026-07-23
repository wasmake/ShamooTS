// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_enchantment_effects from './net.minecraft.world.item.enchantment.effects.generated.js';
import type * as j_net_minecraft_world_item_enchantment_providers from './net.minecraft.world.item.enchantment.providers.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM record net.minecraft.world.item.enchantment.ConditionalEffect. */
export interface ConditionalEffectMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  effect(): T;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  requirements(): JavaOptional<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  toString(): string;
}
export type ConditionalEffect<T = unknown> = ConditionalEffectMembers<T> & JavaOpaque<"java.lang.Record">;
export interface ConditionalEffectStatics {
  new<T>(arg0: T, arg1: JavaOptional<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>): ConditionalEffect<T>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: j_net_minecraft_util_context.ContextKeySet): JavaOpaque<"com.mojang.serialization.Codec", [ConditionalEffect<T>]>;
  conditionCodec(arg0: j_net_minecraft_util_context.ContextKeySet): JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition]>;
}

/** JVM record net.minecraft.world.item.enchantment.Enchantable. */
export interface EnchantableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  value(): number;
}
export type Enchantable = EnchantableMembers & JavaOpaque<"java.lang.Record">;
export interface EnchantableStatics {
  new(arg0: number): Enchantable;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Enchantable]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Enchantable>;
}

/** JVM record net.minecraft.world.item.enchantment.EnchantedItemInUse. */
export interface EnchantedItemInUseMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  inSlot(): j_net_minecraft_world_entity.EquipmentSlot | null;
  itemStack(): j_net_minecraft_world_item.ItemStack;
  onBreak(): JavaConsumer<j_net_minecraft_world_item.Item>;
  owner(): j_net_minecraft_world_entity.LivingEntity | null;
  toString(): string;
}
export type EnchantedItemInUse = EnchantedItemInUseMembers & JavaOpaque<"java.lang.Record">;
export interface EnchantedItemInUseStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.EquipmentSlot, arg2: j_net_minecraft_world_entity.LivingEntity): EnchantedItemInUse;
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.EquipmentSlot | null, arg2: j_net_minecraft_world_entity.LivingEntity | null, arg3: JavaConsumer<j_net_minecraft_world_item.Item>): EnchantedItemInUse;
}

/** JVM record net.minecraft.world.item.enchantment.Enchantment. */
export interface EnchantmentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  canEnchant(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  definition(): Enchantment_EnchantmentDefinition;
  description(): j_net_minecraft_network_chat.Component;
  doPostAttack(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: EnchantedItemInUse, arg3: EnchantmentTarget, arg4: j_net_minecraft_world_entity.Entity, arg5: j_net_minecraft_world_damagesource.DamageSource): void;
  effects(): j_net_minecraft_core_component.DataComponentMap;
  equals(arg0: object): boolean;
  exclusiveSet(): j_net_minecraft_core.HolderSet<Enchantment>;
  getAnvilCost(): number;
  getEffects<T>(arg0: j_net_minecraft_core_component.DataComponentType<JavaList<T>>): JavaList<T>;
  getMaxCost(arg0: number): number;
  getMaxLevel(): number;
  getMinCost(arg0: number): number;
  getMinLevel(): number;
  getSlotItems(arg0: j_net_minecraft_world_entity.LivingEntity): JavaMap<j_net_minecraft_world_entity.EquipmentSlot, j_net_minecraft_world_item.ItemStack>;
  getSupportedItems(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>;
  getWeight(): number;
  hashCode(): number;
  isImmuneToDamage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_damagesource.DamageSource): boolean;
  isPrimaryItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isSupportedItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  matchingSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  modifyAmmoCount(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyArmorEffectivness(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_damagesource.DamageSource, arg5: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyBlockExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyCrossbowChargeTime(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyDamage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_damagesource.DamageSource, arg5: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyDamageProtection(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_damagesource.DamageSource, arg5: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyDurabilityChange(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyDurabilityToRepairFromXp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyFallBasedDamage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_damagesource.DamageSource, arg5: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyFishingLuckBonus(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyFishingTimeReduction(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyKnockback(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_damagesource.DamageSource, arg5: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyMobExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyPiercingCount(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyProjectileCount(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyProjectileSpread(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyTridentReturnToOwnerAcceleration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.Entity, arg4: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyTridentSpinAttackStrength(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  modifyUnfilteredValue(arg0: j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: JavaOpaque<"org.apache.commons.lang3.mutable.MutableFloat">): void;
  onHitBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_phys.Vec3, arg5: j_net_minecraft_world_level_block_state.BlockState): void;
  onProjectileSpawned(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity): void;
  runLocationChangedEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: EnchantedItemInUse, arg3: j_net_minecraft_world_entity.LivingEntity): void;
  stopLocationBasedEffects(arg0: number, arg1: EnchantedItemInUse, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: EnchantedItemInUse, arg3: j_net_minecraft_world_entity.Entity): void;
  toString(): string;
}
export type Enchantment = EnchantmentMembers & JavaOpaque<"java.lang.Record">;
export interface EnchantmentStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: Enchantment_EnchantmentDefinition, arg2: j_net_minecraft_core.HolderSet<Enchantment>, arg3: j_net_minecraft_core_component.DataComponentMap): Enchantment;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Enchantment>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Enchantment]>;
  readonly MAX_LEVEL: 255;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<Enchantment>>;
  areCompatible(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: j_net_minecraft_core.Holder<Enchantment>): boolean;
  constantCost(arg0: number): Enchantment_Cost;
  damageContext(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_world_level_storage_loot.LootContext;
  definition(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>, arg1: number, arg2: number, arg3: Enchantment_Cost, arg4: Enchantment_Cost, arg5: number, ...arg6: Array<j_net_minecraft_world_entity.EquipmentSlotGroup>): Enchantment_EnchantmentDefinition;
  definition(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>, arg2: number, arg3: number, arg4: Enchantment_Cost, arg5: Enchantment_Cost, arg6: number, ...arg7: Array<j_net_minecraft_world_entity.EquipmentSlotGroup>): Enchantment_EnchantmentDefinition;
  doPostAttack(arg0: TargetedConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentEntityEffect>, arg1: j_net_minecraft_server_level.ServerLevel, arg2: number, arg3: EnchantedItemInUse, arg4: j_net_minecraft_world_entity.Entity, arg5: j_net_minecraft_world_damagesource.DamageSource): void;
  dynamicCost(arg0: number, arg1: number): Enchantment_Cost;
  enchantment(arg0: Enchantment_EnchantmentDefinition): Enchantment_Builder;
  getFullname(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: number): j_net_minecraft_network_chat.Component;
}

/** JVM class net.minecraft.world.item.enchantment.Enchantment$Builder. */
export interface Enchantment_BuilderMembers {
  build(arg0: j_net_minecraft_resources.ResourceLocation): Enchantment;
  exclusiveWith(arg0: j_net_minecraft_core.HolderSet<Enchantment>): Enchantment_Builder;
  withEffect(arg0: j_net_minecraft_core_component.DataComponentType<j_net_minecraft_util.Unit>): Enchantment_Builder;
  withEffect<E>(arg0: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<E>>>, arg1: E): Enchantment_Builder;
  withEffect<E>(arg0: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<E>>>, arg1: E, arg2: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): Enchantment_Builder;
  withEffect<E>(arg0: j_net_minecraft_core_component.DataComponentType<JavaList<TargetedConditionalEffect<E>>>, arg1: EnchantmentTarget, arg2: EnchantmentTarget, arg3: E): Enchantment_Builder;
  withEffect<E>(arg0: j_net_minecraft_core_component.DataComponentType<JavaList<TargetedConditionalEffect<E>>>, arg1: EnchantmentTarget, arg2: EnchantmentTarget, arg3: E, arg4: j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition_Builder): Enchantment_Builder;
  withEffect(arg0: j_net_minecraft_core_component.DataComponentType<JavaList<j_net_minecraft_world_item_enchantment_effects.EnchantmentAttributeEffect>>, arg1: j_net_minecraft_world_item_enchantment_effects.EnchantmentAttributeEffect): Enchantment_Builder;
  withSpecialEffect<E>(arg0: j_net_minecraft_core_component.DataComponentType<E>, arg1: E): Enchantment_Builder;
}
export type Enchantment_Builder = Enchantment_BuilderMembers;
export interface Enchantment_BuilderStatics {
  new(arg0: Enchantment_EnchantmentDefinition): Enchantment_Builder;
}

/** JVM record net.minecraft.world.item.enchantment.Enchantment$Cost. */
export interface Enchantment_CostMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  base(): number;
  calculate(arg0: number): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  perLevelAboveFirst(): number;
  toString(): string;
}
export type Enchantment_Cost = Enchantment_CostMembers & JavaOpaque<"java.lang.Record">;
export interface Enchantment_CostStatics {
  new(arg0: number, arg1: number): Enchantment_Cost;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Enchantment_Cost]>;
}

/** JVM record net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition. */
export interface Enchantment_EnchantmentDefinitionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  anvilCost(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  maxCost(): Enchantment_Cost;
  maxLevel(): number;
  minCost(): Enchantment_Cost;
  primaryItems(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>>;
  slots(): JavaList<j_net_minecraft_world_entity.EquipmentSlotGroup>;
  supportedItems(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>;
  toString(): string;
  weight(): number;
}
export type Enchantment_EnchantmentDefinition = Enchantment_EnchantmentDefinitionMembers & JavaOpaque<"java.lang.Record">;
export interface Enchantment_EnchantmentDefinitionStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>, arg1: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>>, arg2: number, arg3: number, arg4: Enchantment_Cost, arg5: Enchantment_Cost, arg6: number, arg7: JavaList<j_net_minecraft_world_entity.EquipmentSlotGroup>): Enchantment_EnchantmentDefinition;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Enchantment_EnchantmentDefinition]>;
}

/** JVM interface net.minecraft.world.item.enchantment.EnchantmentEffectComponents. */
export interface EnchantmentEffectComponentsMembers {
}
export type EnchantmentEffectComponents = EnchantmentEffectComponentsMembers;
export interface EnchantmentEffectComponentsStatics {
  readonly AMMO_USE: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly ARMOR_EFFECTIVENESS: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly ATTRIBUTES: j_net_minecraft_core_component.DataComponentType<JavaList<j_net_minecraft_world_item_enchantment_effects.EnchantmentAttributeEffect>>;
  readonly BLOCK_EXPERIENCE: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core_component.DataComponentMap]>;
  readonly COMPONENT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core_component.DataComponentType<object>]>;
  readonly CROSSBOW_CHARGE_TIME: j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>;
  readonly CROSSBOW_CHARGING_SOUNDS: j_net_minecraft_core_component.DataComponentType<JavaList<j_net_minecraft_world_item.CrossbowItem_ChargingSounds>>;
  readonly DAMAGE: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly DAMAGE_IMMUNITY: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.DamageImmunity>>>;
  readonly DAMAGE_PROTECTION: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly EQUIPMENT_DROPS: j_net_minecraft_core_component.DataComponentType<JavaList<TargetedConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly FISHING_LUCK_BONUS: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly FISHING_TIME_REDUCTION: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly HIT_BLOCK: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentEntityEffect>>>;
  readonly ITEM_DAMAGE: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly KNOCKBACK: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly LOCATION_CHANGED: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentLocationBasedEffect>>>;
  readonly MOB_EXPERIENCE: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly POST_ATTACK: j_net_minecraft_core_component.DataComponentType<JavaList<TargetedConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentEntityEffect>>>;
  readonly PREVENT_ARMOR_CHANGE: j_net_minecraft_core_component.DataComponentType<j_net_minecraft_util.Unit>;
  readonly PREVENT_EQUIPMENT_DROP: j_net_minecraft_core_component.DataComponentType<j_net_minecraft_util.Unit>;
  readonly PROJECTILE_COUNT: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly PROJECTILE_PIERCING: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly PROJECTILE_SPAWNED: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentEntityEffect>>>;
  readonly PROJECTILE_SPREAD: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly REPAIR_WITH_XP: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly SMASH_DAMAGE_PER_FALLEN_BLOCK: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly TICK: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentEntityEffect>>>;
  readonly TRIDENT_RETURN_ACCELERATION: j_net_minecraft_core_component.DataComponentType<JavaList<ConditionalEffect<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>>>;
  readonly TRIDENT_SOUND: j_net_minecraft_core_component.DataComponentType<JavaList<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>>;
  readonly TRIDENT_SPIN_ATTACK_STRENGTH: j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_enchantment_effects.EnchantmentValueEffect>;
  bootstrap(arg0: j_net_minecraft_core.Registry<j_net_minecraft_core_component.DataComponentType<object>>): j_net_minecraft_core_component.DataComponentType<object>;
}

/** JVM class net.minecraft.world.item.enchantment.EnchantmentHelper. */
export interface EnchantmentHelperMembers {
}
export type EnchantmentHelper = EnchantmentHelperMembers;
export interface EnchantmentHelperStatics {
  new(): EnchantmentHelper;
  canStoreEnchantments(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  createBook(arg0: EnchantmentInstance): j_net_minecraft_world_item.ItemStack;
  doPostAttackEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_damagesource.DamageSource): void;
  doPostAttackEffectsWithItemSource(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: j_net_minecraft_world_item.ItemStack | null): void | null;
  doPostAttackEffectsWithItemSourceOnBreak(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: j_net_minecraft_world_item.ItemStack | null, arg4: JavaConsumer<j_net_minecraft_world_item.Item> | null): void | null;
  enchantItem(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Enchantment>]>): j_net_minecraft_world_item.ItemStack;
  enchantItem(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: j_net_minecraft_core.RegistryAccess, arg4: JavaOptional<j_net_minecraft_core.HolderSet<Enchantment>>): j_net_minecraft_world_item.ItemStack;
  enchantItemFromProvider(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_core.RegistryAccess, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_enchantment_providers.EnchantmentProvider>, arg3: j_net_minecraft_world.DifficultyInstance, arg4: j_net_minecraft_util.RandomSource): void;
  filterCompatibleEnchantments(arg0: JavaList<EnchantmentInstance>, arg1: EnchantmentInstance): void;
  forEachModifier(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.EquipmentSlot, arg2: JavaBiConsumer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): void;
  forEachModifier(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.EquipmentSlotGroup, arg2: JavaBiConsumer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): void;
  getAvailableEnchantmentResults(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Enchantment>]>): JavaList<EnchantmentInstance>;
  getDamageProtection(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_damagesource.DamageSource): number;
  getEnchantmentCost(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: j_net_minecraft_world_item.ItemStack): number;
  getEnchantmentLevel(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  getEnchantmentsForCrafting(arg0: j_net_minecraft_world_item.ItemStack): ItemEnchantments;
  getFishingLuckBonus(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity): number;
  getFishingTimeReduction(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity): number;
  getHighestLevel<T>(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_core_component.DataComponentType<T>): JavaOpaque<"com.mojang.datafixers.util.Pair", [T, number]> | null;
  getItemEnchantmentLevel(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: j_net_minecraft_world_item.ItemStack): number;
  getPiercingCount(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack): number;
  getRandomItemWith(arg0: j_net_minecraft_core_component.DataComponentType<object>, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: JavaPredicate<j_net_minecraft_world_item.ItemStack>): JavaOptional<EnchantedItemInUse>;
  getTridentReturnToOwnerAcceleration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity): number;
  getTridentSpinAttackStrength(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  has(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_core_component.DataComponentType<object>): boolean;
  hasAnyEnchantments(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  hasTag(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_tags.TagKey<Enchantment>): boolean;
  isEnchantmentCompatible(arg0: JavaCollection<j_net_minecraft_core.Holder<Enchantment>>, arg1: j_net_minecraft_core.Holder<Enchantment>): boolean;
  isImmuneToDamage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  modifyArmorEffectiveness(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_damagesource.DamageSource, arg4: number): number;
  modifyCrossbowChargingTime(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): number;
  modifyDamage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_damagesource.DamageSource, arg4: number): number;
  modifyDurabilityToRepairFromXp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): number;
  modifyFallBasedDamage(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_damagesource.DamageSource, arg4: number): number;
  modifyKnockback(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_damagesource.DamageSource, arg4: number): number;
  onHitBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity | null, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_entity.EquipmentSlot | null, arg5: j_net_minecraft_world_phys.Vec3, arg6: j_net_minecraft_world_level_block_state.BlockState, arg7: JavaConsumer<j_net_minecraft_world_item.Item>): void | null;
  onProjectileSpawned(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity_projectile.Projectile, arg3: JavaConsumer<j_net_minecraft_world_item.Item>): void;
  pickHighestLevel<T>(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_core_component.DataComponentType<JavaList<T>>): JavaOptional<T>;
  processAmmoUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack, arg3: number): number;
  processBlockExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): number;
  processDurabilityChange(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): number;
  processEquipmentDropChance(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: number): number;
  processMobExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_entity.Entity, arg3: number): number | null;
  processProjectileCount(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: number): number;
  processProjectileSpread(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: number): number;
  runLocationChangedEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  runLocationChangedEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world_entity.EquipmentSlot): void;
  selectEnchantment(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Enchantment>]>): JavaList<EnchantmentInstance>;
  setEnchantments(arg0: j_net_minecraft_world_item.ItemStack, arg1: ItemEnchantments): void;
  stopLocationBasedEffects(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  stopLocationBasedEffects(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.EquipmentSlot): void;
  tickEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  updateEnchantments(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaConsumer<ItemEnchantments_Mutable>): ItemEnchantments;
  updateEnchantments(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaConsumer<ItemEnchantments_Mutable>, arg2: boolean): ItemEnchantments;
}

/** JVM record net.minecraft.world.item.enchantment.EnchantmentInstance. */
export interface EnchantmentInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  enchantment(): j_net_minecraft_core.Holder<Enchantment>;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): number;
  toString(): string;
  weight(): number;
}
export type EnchantmentInstance = EnchantmentInstanceMembers & JavaOpaque<"java.lang.Record">;
export interface EnchantmentInstanceStatics {
  new(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: number): EnchantmentInstance;
}

/** JVM class net.minecraft.world.item.enchantment.Enchantments. */
export interface EnchantmentsMembers {
}
export type Enchantments = EnchantmentsMembers;
export interface EnchantmentsStatics {
  new(): Enchantments;
  readonly AQUA_AFFINITY: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly BANE_OF_ARTHROPODS: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly BINDING_CURSE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly BLAST_PROTECTION: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly BREACH: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly CHANNELING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly DENSITY: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly DEPTH_STRIDER: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly EFFICIENCY: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly FEATHER_FALLING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly FIRE_ASPECT: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly FIRE_PROTECTION: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly FLAME: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly FORTUNE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly FROST_WALKER: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly IMPALING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly INFINITY: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly KNOCKBACK: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly LOOTING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly LOYALTY: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly LUCK_OF_THE_SEA: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly LURE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly MENDING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly MULTISHOT: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly PIERCING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly POWER: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly PROJECTILE_PROTECTION: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly PROTECTION: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly PUNCH: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly QUICK_CHARGE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly RESPIRATION: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly RIPTIDE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly SHARPNESS: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly SILK_TOUCH: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly SMITE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly SOUL_SPEED: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly SWEEPING_EDGE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly SWIFT_SNEAK: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly THORNS: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly UNBREAKING: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly VANISHING_CURSE: j_net_minecraft_resources.ResourceKey<Enchantment>;
  readonly WIND_BURST: j_net_minecraft_resources.ResourceKey<Enchantment>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<Enchantment>): void;
}

/** Live JVM enum net.minecraft.world.item.enchantment.EnchantmentTarget; constants are host handles, not strings. */
export type EnchantmentTarget = JavaEnum<"net.minecraft.world.item.enchantment.EnchantmentTarget", "ATTACKER" | "DAMAGING_ENTITY" | "VICTIM"> & EnchantmentTargetMembers;
export interface EnchantmentTargetMembers {
  getSerializedName(): string;
}
export interface EnchantmentTargetStatics {
  readonly ATTACKER: EnchantmentTarget;
  readonly DAMAGING_ENTITY: EnchantmentTarget;
  readonly VICTIM: EnchantmentTarget;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentTarget]>;
  valueOf(arg0: string): EnchantmentTarget;
  values(): Array<EnchantmentTarget>;
}

/** JVM class net.minecraft.world.item.enchantment.ItemEnchantments. */
export interface ItemEnchantmentsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  entrySet(): JavaSet<JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap$Entry", [j_net_minecraft_core.Holder<Enchantment>]>>;
  equals(arg0: object): boolean;
  getLevel(arg0: j_net_minecraft_core.Holder<Enchantment>): number;
  hashCode(): number;
  isEmpty(): boolean;
  keySet(): JavaSet<j_net_minecraft_core.Holder<Enchantment>>;
  size(): number;
  toString(): string;
}
export type ItemEnchantments = ItemEnchantmentsMembers & j_net_minecraft_world_item_component.TooltipProvider;
export interface ItemEnchantmentsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemEnchantments]>;
  readonly EMPTY: ItemEnchantments;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemEnchantments>;
}

/** JVM class net.minecraft.world.item.enchantment.ItemEnchantments$Mutable. */
export interface ItemEnchantments_MutableMembers {
  getLevel(arg0: j_net_minecraft_core.Holder<Enchantment>): number;
  keySet(): JavaSet<j_net_minecraft_core.Holder<Enchantment>>;
  removeIf(arg0: JavaPredicate<j_net_minecraft_core.Holder<Enchantment>>): void;
  set(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: number): void;
  toImmutable(): ItemEnchantments;
  upgrade(arg0: j_net_minecraft_core.Holder<Enchantment>, arg1: number): void;
}
export type ItemEnchantments_Mutable = ItemEnchantments_MutableMembers;
export interface ItemEnchantments_MutableStatics {
  new(arg0: ItemEnchantments): ItemEnchantments_Mutable;
}

/** JVM interface net.minecraft.world.item.enchantment.LevelBasedValue. */
export interface LevelBasedValueMembers {
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue]>;
}
export type LevelBasedValue = LevelBasedValueMembers;
export interface LevelBasedValueStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LevelBasedValue]>;
  readonly DISPATCH_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LevelBasedValue]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue]>;
  constant(arg0: number): LevelBasedValue_Constant;
  lookup(arg0: JavaList<number>, arg1: LevelBasedValue): LevelBasedValue_Lookup;
  perLevel(arg0: number): LevelBasedValue_Linear;
  perLevel(arg0: number, arg1: number): LevelBasedValue_Linear;
}

/** JVM record net.minecraft.world.item.enchantment.LevelBasedValue$Clamped. */
export interface LevelBasedValue_ClampedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LevelBasedValue];
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Clamped]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  max(): number;
  min(): number;
  toString(): string;
  value(): LevelBasedValue;
}
export type LevelBasedValue_Clamped = LevelBasedValue_ClampedMembers & JavaOpaque<"java.lang.Record"> & LevelBasedValue;
export interface LevelBasedValue_ClampedStatics {
  new(arg0: LevelBasedValue, arg1: number, arg2: number): LevelBasedValue_Clamped;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Clamped]>;
}

/** JVM record net.minecraft.world.item.enchantment.LevelBasedValue$Constant. */
export interface LevelBasedValue_ConstantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LevelBasedValue];
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Constant]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  value(): number;
}
export type LevelBasedValue_Constant = LevelBasedValue_ConstantMembers & JavaOpaque<"java.lang.Record"> & LevelBasedValue;
export interface LevelBasedValue_ConstantStatics {
  new(arg0: number): LevelBasedValue_Constant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LevelBasedValue_Constant]>;
  readonly TYPED_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Constant]>;
}

/** JVM record net.minecraft.world.item.enchantment.LevelBasedValue$Fraction. */
export interface LevelBasedValue_FractionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LevelBasedValue];
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Fraction]>;
  denominator(): LevelBasedValue;
  equals(arg0: object): boolean;
  hashCode(): number;
  numerator(): LevelBasedValue;
  toString(): string;
}
export type LevelBasedValue_Fraction = LevelBasedValue_FractionMembers & JavaOpaque<"java.lang.Record"> & LevelBasedValue;
export interface LevelBasedValue_FractionStatics {
  new(arg0: LevelBasedValue, arg1: LevelBasedValue): LevelBasedValue_Fraction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Fraction]>;
}

/** JVM record net.minecraft.world.item.enchantment.LevelBasedValue$LevelsSquared. */
export interface LevelBasedValue_LevelsSquaredMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LevelBasedValue];
  added(): number;
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_LevelsSquared]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LevelBasedValue_LevelsSquared = LevelBasedValue_LevelsSquaredMembers & JavaOpaque<"java.lang.Record"> & LevelBasedValue;
export interface LevelBasedValue_LevelsSquaredStatics {
  new(arg0: number): LevelBasedValue_LevelsSquared;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_LevelsSquared]>;
}

/** JVM record net.minecraft.world.item.enchantment.LevelBasedValue$Linear. */
export interface LevelBasedValue_LinearMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LevelBasedValue];
  base(): number;
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Linear]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  perLevelAboveFirst(): number;
  toString(): string;
}
export type LevelBasedValue_Linear = LevelBasedValue_LinearMembers & JavaOpaque<"java.lang.Record"> & LevelBasedValue;
export interface LevelBasedValue_LinearStatics {
  new(arg0: number, arg1: number): LevelBasedValue_Linear;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Linear]>;
}

/** JVM record net.minecraft.world.item.enchantment.LevelBasedValue$Lookup. */
export interface LevelBasedValue_LookupMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LevelBasedValue];
  calculate(arg0: number): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Lookup]>;
  equals(arg0: object): boolean;
  fallback(): LevelBasedValue;
  hashCode(): number;
  toString(): string;
  values(): JavaList<number>;
}
export type LevelBasedValue_Lookup = LevelBasedValue_LookupMembers & JavaOpaque<"java.lang.Record"> & LevelBasedValue;
export interface LevelBasedValue_LookupStatics {
  new(arg0: JavaList<number>, arg1: LevelBasedValue): LevelBasedValue_Lookup;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LevelBasedValue_Lookup]>;
}

/** JVM record net.minecraft.world.item.enchantment.Repairable. */
export interface RepairableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isValidRepairItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  items(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>;
  toString(): string;
}
export type Repairable = RepairableMembers & JavaOpaque<"java.lang.Record">;
export interface RepairableStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>): Repairable;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Repairable]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Repairable>;
}

/** JVM record net.minecraft.world.item.enchantment.TargetedConditionalEffect. */
export interface TargetedConditionalEffectMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  affected(): EnchantmentTarget;
  effect(): T;
  enchanted(): EnchantmentTarget;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_world_level_storage_loot.LootContext): boolean;
  requirements(): JavaOptional<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  toString(): string;
}
export type TargetedConditionalEffect<T = unknown> = TargetedConditionalEffectMembers<T> & JavaOpaque<"java.lang.Record">;
export interface TargetedConditionalEffectStatics {
  new<T>(arg0: EnchantmentTarget, arg1: EnchantmentTarget, arg2: T, arg3: JavaOptional<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>): TargetedConditionalEffect<T>;
  codec<S>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [S]>, arg1: j_net_minecraft_util_context.ContextKeySet): JavaOpaque<"com.mojang.serialization.Codec", [TargetedConditionalEffect<S>]>;
  equipmentDropsCodec<S>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [S]>, arg1: j_net_minecraft_util_context.ContextKeySet): JavaOpaque<"com.mojang.serialization.Codec", [TargetedConditionalEffect<S>]>;
}
