// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';

/** JVM interface net.minecraft.world.item.equipment.AllowedEntitiesProvider. */
export interface AllowedEntitiesProviderMembers {
  get(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>): j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>;
}
export type AllowedEntitiesProvider = AllowedEntitiesProviderMembers;
export interface AllowedEntitiesProviderStatics {
}

/** JVM record net.minecraft.world.item.equipment.ArmorMaterial. */
export interface ArmorMaterialMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assetId(): j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  createAttributes(arg0: ArmorType): j_net_minecraft_world_item_component.ItemAttributeModifiers;
  defense(): JavaMap<ArmorType, number>;
  durability(): number;
  enchantmentValue(): number;
  equals(arg0: object): boolean;
  equipSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  hashCode(): number;
  knockbackResistance(): number;
  repairIngredient(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>;
  toString(): string;
  toughness(): number;
}
export type ArmorMaterial = ArmorMaterialMembers & JavaOpaque<"java.lang.Record">;
export interface ArmorMaterialStatics {
  new(arg0: number, arg1: JavaMap<ArmorType, number>, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg4: number, arg5: number, arg6: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>, arg7: j_net_minecraft_resources.ResourceKey<EquipmentAsset>): ArmorMaterial;
}

/** JVM interface net.minecraft.world.item.equipment.ArmorMaterials. */
export interface ArmorMaterialsMembers {
}
export type ArmorMaterials = ArmorMaterialsMembers;
export interface ArmorMaterialsStatics {
  readonly ARMADILLO_SCUTE: ArmorMaterial;
  readonly CHAINMAIL: ArmorMaterial;
  readonly DIAMOND: ArmorMaterial;
  readonly GOLD: ArmorMaterial;
  readonly IRON: ArmorMaterial;
  readonly LEATHER: ArmorMaterial;
  readonly NETHERITE: ArmorMaterial;
  readonly TURTLE_SCUTE: ArmorMaterial;
}

/** Live JVM enum net.minecraft.world.item.equipment.ArmorType; constants are host handles, not strings. */
export type ArmorType = JavaEnum<"net.minecraft.world.item.equipment.ArmorType", "BODY" | "BOOTS" | "CHESTPLATE" | "HELMET" | "LEGGINGS"> & ArmorTypeMembers;
export interface ArmorTypeMembers {
  getDurability(arg0: number): number;
  getName(): string;
  getSerializedName(): string;
  getSlot(): j_net_minecraft_world_entity.EquipmentSlot;
}
export interface ArmorTypeStatics {
  readonly BODY: ArmorType;
  readonly BOOTS: ArmorType;
  readonly CHESTPLATE: ArmorType;
  readonly HELMET: ArmorType;
  readonly LEGGINGS: ArmorType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ArmorType]>;
  valueOf(arg0: string): ArmorType;
  values(): Array<ArmorType>;
}

/** JVM class net.minecraft.world.item.equipment.EquipmentAsset. */
export interface EquipmentAssetMembers {
}
export type EquipmentAsset = EquipmentAssetMembers;
export interface EquipmentAssetStatics {
  new(): EquipmentAsset;
}

/** JVM interface net.minecraft.world.item.equipment.EquipmentAssets. */
export interface EquipmentAssetsMembers {
}
export type EquipmentAssets = EquipmentAssetsMembers;
export interface EquipmentAssetsStatics {
  readonly ARMADILLO_SCUTE: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly CARPETS: JavaMap<j_net_minecraft_world_item.DyeColor, j_net_minecraft_resources.ResourceKey<EquipmentAsset>>;
  readonly CHAINMAIL: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly DIAMOND: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly ELYTRA: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly GOLD: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly HARNESSES: JavaMap<j_net_minecraft_world_item.DyeColor, j_net_minecraft_resources.ResourceKey<EquipmentAsset>>;
  readonly IRON: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly LEATHER: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly NETHERITE: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly ROOT_ID: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<EquipmentAsset>>;
  readonly SADDLE: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly TRADER_LLAMA: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  readonly TURTLE_SCUTE: j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
  createId(arg0: string): j_net_minecraft_resources.ResourceKey<EquipmentAsset>;
}

/** JVM record net.minecraft.world.item.equipment.Equippable. */
export interface EquippableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  allowedEntities(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>>;
  assetId(): JavaOptional<j_net_minecraft_resources.ResourceKey<EquipmentAsset>>;
  cameraOverlay(): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  canBeEquippedBy(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  canBeSheared(): boolean;
  damageOnHurt(): boolean;
  dispensable(): boolean;
  equals(arg0: object): boolean;
  equipOnInteract(): boolean;
  equipOnTarget(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world.InteractionResult;
  equipSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  hashCode(): number;
  shearingSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  slot(): j_net_minecraft_world_entity.EquipmentSlot;
  swapWithEquipmentSlot(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world.InteractionResult;
  swappable(): boolean;
  toString(): string;
}
export type Equippable = EquippableMembers & JavaOpaque<"java.lang.Record">;
export interface EquippableStatics {
  new(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg2: JavaOptional<j_net_minecraft_resources.ResourceKey<EquipmentAsset>>, arg3: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg4: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>>, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): Equippable;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Equippable]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Equippable>;
  builder(arg0: j_net_minecraft_world_entity.EquipmentSlot): Equippable_Builder;
  harness(arg0: j_net_minecraft_world_item.DyeColor): Equippable;
  llamaSwag(arg0: j_net_minecraft_world_item.DyeColor): Equippable;
  saddle(): Equippable;
}

/** JVM class net.minecraft.world.item.equipment.Equippable$Builder. */
export interface Equippable_BuilderMembers {
  build(): Equippable;
  setAllowedEntities(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_entity.EntityType<object>>): Equippable_Builder;
  setAllowedEntities(...arg0: Array<j_net_minecraft_world_entity.EntityType<object>>): Equippable_Builder;
  setAsset(arg0: j_net_minecraft_resources.ResourceKey<EquipmentAsset>): Equippable_Builder;
  setCameraOverlay(arg0: j_net_minecraft_resources.ResourceLocation): Equippable_Builder;
  setCanBeSheared(arg0: boolean): Equippable_Builder;
  setDamageOnHurt(arg0: boolean): Equippable_Builder;
  setDispensable(arg0: boolean): Equippable_Builder;
  setEquipOnInteract(arg0: boolean): Equippable_Builder;
  setEquipSound(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): Equippable_Builder;
  setShearingSound(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): Equippable_Builder;
  setSwappable(arg0: boolean): Equippable_Builder;
}
export type Equippable_Builder = Equippable_BuilderMembers;
export interface Equippable_BuilderStatics {
}
