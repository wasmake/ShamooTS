// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';

/** JVM record net.minecraft.core.component.predicates.AttributeModifiersPredicate. */
export interface AttributeModifiersPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.ItemAttributeModifiers>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.ItemAttributeModifiers>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.ItemAttributeModifiers): boolean;
  modifiers(): JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item_component.ItemAttributeModifiers_Entry, AttributeModifiersPredicate_EntryPredicate>>;
  toString(): string;
}
export type AttributeModifiersPredicate = AttributeModifiersPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.ItemAttributeModifiers>;
export interface AttributeModifiersPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item_component.ItemAttributeModifiers_Entry, AttributeModifiersPredicate_EntryPredicate>>): AttributeModifiersPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AttributeModifiersPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.AttributeModifiersPredicate$EntryPredicate. */
export interface AttributeModifiersPredicate_EntryPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<j_net_minecraft_world_item_component.ItemAttributeModifiers_Entry>];
  amount(): j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles;
  attribute(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity_ai_attributes.Attribute>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  operation(): JavaOptional<j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation>;
  slot(): JavaOptional<j_net_minecraft_world_entity.EquipmentSlotGroup>;
  test(arg0: object): boolean;
  test(arg0: j_net_minecraft_world_item_component.ItemAttributeModifiers_Entry): boolean;
  toString(): string;
}
export type AttributeModifiersPredicate_EntryPredicate = AttributeModifiersPredicate_EntryPredicateMembers & JavaOpaque<"java.lang.Record"> & JavaPredicate<j_net_minecraft_world_item_component.ItemAttributeModifiers_Entry>;
export interface AttributeModifiersPredicate_EntryPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity_ai_attributes.Attribute>>, arg1: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg2: j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles, arg3: JavaOptional<j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation>, arg4: JavaOptional<j_net_minecraft_world_entity.EquipmentSlotGroup>): AttributeModifiersPredicate_EntryPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AttributeModifiersPredicate_EntryPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.BundlePredicate. */
export interface BundlePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.BundleContents>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.BundleContents>;
  equals(arg0: object): boolean;
  hashCode(): number;
  items(): JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item.ItemStack, j_net_minecraft_advancements_critereon.ItemPredicate>>;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.BundleContents): boolean;
  toString(): string;
}
export type BundlePredicate = BundlePredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.BundleContents>;
export interface BundlePredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item.ItemStack, j_net_minecraft_advancements_critereon.ItemPredicate>>): BundlePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BundlePredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.ContainerPredicate. */
export interface ContainerPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.ItemContainerContents>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.ItemContainerContents>;
  equals(arg0: object): boolean;
  hashCode(): number;
  items(): JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item.ItemStack, j_net_minecraft_advancements_critereon.ItemPredicate>>;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.ItemContainerContents): boolean;
  toString(): string;
}
export type ContainerPredicate = ContainerPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.ItemContainerContents>;
export interface ContainerPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item.ItemStack, j_net_minecraft_advancements_critereon.ItemPredicate>>): ContainerPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ContainerPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.CustomDataPredicate. */
export interface CustomDataPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DataComponentPredicate];
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core_component.DataComponentGetter): boolean;
  toString(): string;
  value(): j_net_minecraft_advancements_critereon.NbtPredicate;
}
export type CustomDataPredicate = CustomDataPredicateMembers & JavaOpaque<"java.lang.Record"> & DataComponentPredicate;
export interface CustomDataPredicateStatics {
  new(arg0: j_net_minecraft_advancements_critereon.NbtPredicate): CustomDataPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CustomDataPredicate]>;
  customData(arg0: j_net_minecraft_advancements_critereon.NbtPredicate): CustomDataPredicate;
}

/** JVM record net.minecraft.core.component.predicates.DamagePredicate. */
export interface DamagePredicate_2Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DataComponentPredicate];
  damage(): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
  durability(): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core_component.DataComponentGetter): boolean;
  toString(): string;
}
export type DamagePredicate_2 = DamagePredicate_2Members & JavaOpaque<"java.lang.Record"> & DataComponentPredicate;
export interface DamagePredicate_2Statics {
  new(arg0: j_net_minecraft_advancements_critereon.MinMaxBounds_Ints, arg1: j_net_minecraft_advancements_critereon.MinMaxBounds_Ints): DamagePredicate_2;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamagePredicate_2]>;
  durability(arg0: j_net_minecraft_advancements_critereon.MinMaxBounds_Ints): DamagePredicate_2;
}

/** JVM interface net.minecraft.core.component.predicates.DataComponentPredicate. */
export interface DataComponentPredicateMembers {
  matches(arg0: j_net_minecraft_core_component.DataComponentGetter): boolean;
}
export type DataComponentPredicate = DataComponentPredicateMembers;
export interface DataComponentPredicateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<DataComponentPredicate_Type<object>, DataComponentPredicate>]>;
  readonly SINGLE_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentPredicate_Single<object>>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaMap<DataComponentPredicate_Type<object>, DataComponentPredicate>>;
  singleCodec(arg0: string): JavaOpaque<"com.mojang.serialization.MapCodec", [DataComponentPredicate_Single<object>]>;
}

/** JVM record net.minecraft.core.component.predicates.DataComponentPredicate$Single. */
export interface DataComponentPredicate_SingleMembers<T /* extends DataComponentPredicate */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  predicate(): T;
  toString(): string;
  type(): DataComponentPredicate_Type<T>;
}
export type DataComponentPredicate_Single<T /* extends DataComponentPredicate */ = unknown> = DataComponentPredicate_SingleMembers<T> & JavaOpaque<"java.lang.Record">;
export interface DataComponentPredicate_SingleStatics {
  new<T /* extends DataComponentPredicate */>(arg0: DataComponentPredicate_Type<T>, arg1: T): DataComponentPredicate_Single<T>;
}

/** JVM class net.minecraft.core.component.predicates.DataComponentPredicate$Type. */
export interface DataComponentPredicate_TypeMembers<T /* extends DataComponentPredicate */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  singleStreamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentPredicate_Single<T>>;
  wrappedCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DataComponentPredicate_Single<T>]>;
}
export type DataComponentPredicate_Type<T /* extends DataComponentPredicate */ = unknown> = DataComponentPredicate_TypeMembers<T>;
export interface DataComponentPredicate_TypeStatics {
  new<T /* extends DataComponentPredicate */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): DataComponentPredicate_Type<T>;
}

/** JVM class net.minecraft.core.component.predicates.DataComponentPredicates. */
export interface DataComponentPredicatesMembers {
}
export type DataComponentPredicates = DataComponentPredicatesMembers;
export interface DataComponentPredicatesStatics {
  new(): DataComponentPredicates;
  readonly ARMOR_TRIM: DataComponentPredicate_Type<TrimPredicate>;
  readonly ATTRIBUTE_MODIFIERS: DataComponentPredicate_Type<AttributeModifiersPredicate>;
  readonly BUNDLE_CONTENTS: DataComponentPredicate_Type<BundlePredicate>;
  readonly CONTAINER: DataComponentPredicate_Type<ContainerPredicate>;
  readonly CUSTOM_DATA: DataComponentPredicate_Type<CustomDataPredicate>;
  readonly DAMAGE: DataComponentPredicate_Type<DamagePredicate_2>;
  readonly ENCHANTMENTS: DataComponentPredicate_Type<EnchantmentsPredicate_Enchantments>;
  readonly FIREWORKS: DataComponentPredicate_Type<FireworksPredicate>;
  readonly FIREWORK_EXPLOSION: DataComponentPredicate_Type<FireworkExplosionPredicate>;
  readonly JUKEBOX_PLAYABLE: DataComponentPredicate_Type<JukeboxPlayablePredicate>;
  readonly POTIONS: DataComponentPredicate_Type<PotionsPredicate>;
  readonly STORED_ENCHANTMENTS: DataComponentPredicate_Type<EnchantmentsPredicate_StoredEnchantments>;
  readonly WRITABLE_BOOK: DataComponentPredicate_Type<WritableBookPredicate>;
  readonly WRITTEN_BOOK: DataComponentPredicate_Type<WrittenBookPredicate>;
  bootstrap(arg0: j_net_minecraft_core.Registry<DataComponentPredicate_Type<object>>): DataComponentPredicate_Type<object>;
}

/** JVM abstract net.minecraft.core.component.predicates.EnchantmentsPredicate. */
export interface EnchantmentsPredicateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_enchantment.ItemEnchantments>];
  enchantments(): JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_enchantment.ItemEnchantments): boolean;
}
export type EnchantmentsPredicate = EnchantmentsPredicateMembers & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_enchantment.ItemEnchantments>;
export interface EnchantmentsPredicateStatics {
  new(arg0: JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>): EnchantmentsPredicate;
  codec<T /* extends EnchantmentsPredicate */>(arg0: JavaFunction<JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>, T>): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  enchantments(arg0: JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>): EnchantmentsPredicate_Enchantments;
  storedEnchantments(arg0: JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>): EnchantmentsPredicate_StoredEnchantments;
}

/** JVM class net.minecraft.core.component.predicates.EnchantmentsPredicate$Enchantments. */
export interface EnchantmentsPredicate_EnchantmentsMembers {
  readonly __javaSupertypes?: readonly [EnchantmentsPredicate];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_enchantment.ItemEnchantments>;
  matches(arg0: object): boolean;
}
export type EnchantmentsPredicate_Enchantments = EnchantmentsPredicate_EnchantmentsMembers & EnchantmentsPredicate;
export interface EnchantmentsPredicate_EnchantmentsStatics {
  new(arg0: JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>): EnchantmentsPredicate_Enchantments;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentsPredicate_Enchantments]>;
}

/** JVM class net.minecraft.core.component.predicates.EnchantmentsPredicate$StoredEnchantments. */
export interface EnchantmentsPredicate_StoredEnchantmentsMembers {
  readonly __javaSupertypes?: readonly [EnchantmentsPredicate];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_enchantment.ItemEnchantments>;
  matches(arg0: object): boolean;
}
export type EnchantmentsPredicate_StoredEnchantments = EnchantmentsPredicate_StoredEnchantmentsMembers & EnchantmentsPredicate;
export interface EnchantmentsPredicate_StoredEnchantmentsStatics {
  new(arg0: JavaList<j_net_minecraft_advancements_critereon.EnchantmentPredicate>): EnchantmentsPredicate_StoredEnchantments;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EnchantmentsPredicate_StoredEnchantments]>;
}

/** JVM record net.minecraft.core.component.predicates.FireworkExplosionPredicate. */
export interface FireworkExplosionPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.FireworkExplosion>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.FireworkExplosion>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.FireworkExplosion): boolean;
  predicate(): FireworkExplosionPredicate_FireworkPredicate;
  toString(): string;
}
export type FireworkExplosionPredicate = FireworkExplosionPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.FireworkExplosion>;
export interface FireworkExplosionPredicateStatics {
  new(arg0: FireworkExplosionPredicate_FireworkPredicate): FireworkExplosionPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FireworkExplosionPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.FireworkExplosionPredicate$FireworkPredicate. */
export interface FireworkExplosionPredicate_FireworkPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<j_net_minecraft_world_item_component.FireworkExplosion>];
  equals(arg0: object): boolean;
  hashCode(): number;
  shape(): JavaOptional<j_net_minecraft_world_item_component.FireworkExplosion_Shape>;
  test(arg0: object): boolean;
  test(arg0: j_net_minecraft_world_item_component.FireworkExplosion): boolean;
  toString(): string;
  trail(): JavaOptional<boolean>;
  twinkle(): JavaOptional<boolean>;
}
export type FireworkExplosionPredicate_FireworkPredicate = FireworkExplosionPredicate_FireworkPredicateMembers & JavaOpaque<"java.lang.Record"> & JavaPredicate<j_net_minecraft_world_item_component.FireworkExplosion>;
export interface FireworkExplosionPredicate_FireworkPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_world_item_component.FireworkExplosion_Shape>, arg1: JavaOptional<boolean>, arg2: JavaOptional<boolean>): FireworkExplosionPredicate_FireworkPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FireworkExplosionPredicate_FireworkPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.FireworksPredicate. */
export interface FireworksPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.Fireworks>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.Fireworks>;
  equals(arg0: object): boolean;
  explosions(): JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item_component.FireworkExplosion, FireworkExplosionPredicate_FireworkPredicate>>;
  flightDuration(): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.Fireworks): boolean;
  toString(): string;
}
export type FireworksPredicate = FireworksPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.Fireworks>;
export interface FireworksPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_world_item_component.FireworkExplosion, FireworkExplosionPredicate_FireworkPredicate>>, arg1: j_net_minecraft_advancements_critereon.MinMaxBounds_Ints): FireworksPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FireworksPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.JukeboxPlayablePredicate. */
export interface JukeboxPlayablePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item.JukeboxPlayable>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item.JukeboxPlayable>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item.JukeboxPlayable): boolean;
  song(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.JukeboxSong>>;
  toString(): string;
}
export type JukeboxPlayablePredicate = JukeboxPlayablePredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item.JukeboxPlayable>;
export interface JukeboxPlayablePredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.JukeboxSong>>): JukeboxPlayablePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JukeboxPlayablePredicate]>;
  any(): JukeboxPlayablePredicate;
}

/** JVM record net.minecraft.core.component.predicates.PotionsPredicate. */
export interface PotionsPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_alchemy.PotionContents>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_alchemy.PotionContents>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_alchemy.PotionContents): boolean;
  potions(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_alchemy.Potion>;
  toString(): string;
}
export type PotionsPredicate = PotionsPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_alchemy.PotionContents>;
export interface PotionsPredicateStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_alchemy.Potion>): PotionsPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PotionsPredicate]>;
  potions(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_alchemy.Potion>): DataComponentPredicate;
}

/** JVM record net.minecraft.core.component.predicates.TrimPredicate. */
export interface TrimPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_equipment_trim.ArmorTrim>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_equipment_trim.ArmorTrim>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_equipment_trim.ArmorTrim): boolean;
  material(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_equipment_trim.TrimMaterial>>;
  pattern(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_equipment_trim.TrimPattern>>;
  toString(): string;
}
export type TrimPredicate = TrimPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_equipment_trim.ArmorTrim>;
export interface TrimPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_equipment_trim.TrimMaterial>>, arg1: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_item_equipment_trim.TrimPattern>>): TrimPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TrimPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.WritableBookPredicate. */
export interface WritableBookPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.WritableBookContent>];
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.WritableBookContent>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.WritableBookContent): boolean;
  pages(): JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_server_network.Filterable<string>, WritableBookPredicate_PagePredicate>>;
  toString(): string;
}
export type WritableBookPredicate = WritableBookPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.WritableBookContent>;
export interface WritableBookPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_server_network.Filterable<string>, WritableBookPredicate_PagePredicate>>): WritableBookPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WritableBookPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.WritableBookPredicate$PagePredicate. */
export interface WritableBookPredicate_PagePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<j_net_minecraft_server_network.Filterable<string>>];
  contents(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  test(arg0: object): boolean;
  test(arg0: j_net_minecraft_server_network.Filterable<string>): boolean;
  toString(): string;
}
export type WritableBookPredicate_PagePredicate = WritableBookPredicate_PagePredicateMembers & JavaOpaque<"java.lang.Record"> & JavaPredicate<j_net_minecraft_server_network.Filterable<string>>;
export interface WritableBookPredicate_PagePredicateStatics {
  new(arg0: string): WritableBookPredicate_PagePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WritableBookPredicate_PagePredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.WrittenBookPredicate. */
export interface WrittenBookPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.WrittenBookContent>];
  author(): JavaOptional<string>;
  componentType(): j_net_minecraft_core_component.DataComponentType<j_net_minecraft_world_item_component.WrittenBookContent>;
  equals(arg0: object): boolean;
  generation(): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
  hashCode(): number;
  matches(arg0: object): boolean;
  matches(arg0: j_net_minecraft_world_item_component.WrittenBookContent): boolean;
  pages(): JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>, WrittenBookPredicate_PagePredicate>>;
  resolved(): JavaOptional<boolean>;
  title(): JavaOptional<string>;
  toString(): string;
}
export type WrittenBookPredicate = WrittenBookPredicateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_advancements_critereon.SingleComponentItemPredicate<j_net_minecraft_world_item_component.WrittenBookContent>;
export interface WrittenBookPredicateStatics {
  new(arg0: JavaOptional<j_net_minecraft_advancements_critereon.CollectionPredicate<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>, WrittenBookPredicate_PagePredicate>>, arg1: JavaOptional<string>, arg2: JavaOptional<string>, arg3: j_net_minecraft_advancements_critereon.MinMaxBounds_Ints, arg4: JavaOptional<boolean>): WrittenBookPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WrittenBookPredicate]>;
}

/** JVM record net.minecraft.core.component.predicates.WrittenBookPredicate$PagePredicate. */
export interface WrittenBookPredicate_PagePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaPredicate<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>];
  contents(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  test(arg0: object): boolean;
  test(arg0: j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>): boolean;
  toString(): string;
}
export type WrittenBookPredicate_PagePredicate = WrittenBookPredicate_PagePredicateMembers & JavaOpaque<"java.lang.Record"> & JavaPredicate<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>;
export interface WrittenBookPredicate_PagePredicateStatics {
  new(arg0: j_net_minecraft_network_chat.Component): WrittenBookPredicate_PagePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WrittenBookPredicate_PagePredicate]>;
}
