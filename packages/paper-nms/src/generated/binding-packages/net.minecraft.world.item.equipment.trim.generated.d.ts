// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';

/** JVM record net.minecraft.world.item.equipment.trim.ArmorTrim. */
export interface ArmorTrimMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  layerAssetId(arg0: string, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment.EquipmentAsset>): j_net_minecraft_resources.ResourceLocation;
  material(): j_net_minecraft_core.Holder<TrimMaterial>;
  pattern(): j_net_minecraft_core.Holder<TrimPattern>;
  toString(): string;
}
export type ArmorTrim = ArmorTrimMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.TooltipProvider;
export interface ArmorTrimStatics {
  new(arg0: j_net_minecraft_core.Holder<TrimMaterial>, arg1: j_net_minecraft_core.Holder<TrimPattern>): ArmorTrim;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ArmorTrim]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ArmorTrim>;
}

/** JVM record net.minecraft.world.item.equipment.trim.MaterialAssetGroup. */
export interface MaterialAssetGroupMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assetId(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment.EquipmentAsset>): MaterialAssetGroup_AssetInfo;
  base(): MaterialAssetGroup_AssetInfo;
  equals(arg0: object): boolean;
  hashCode(): number;
  overrides(): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment.EquipmentAsset>, MaterialAssetGroup_AssetInfo>;
  toString(): string;
}
export type MaterialAssetGroup = MaterialAssetGroupMembers & JavaOpaque<"java.lang.Record">;
export interface MaterialAssetGroupStatics {
  new(arg0: MaterialAssetGroup_AssetInfo, arg1: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment.EquipmentAsset>, MaterialAssetGroup_AssetInfo>): MaterialAssetGroup;
  readonly AMETHYST: MaterialAssetGroup;
  readonly COPPER: MaterialAssetGroup;
  readonly DIAMOND: MaterialAssetGroup;
  readonly EMERALD: MaterialAssetGroup;
  readonly GOLD: MaterialAssetGroup;
  readonly IRON: MaterialAssetGroup;
  readonly LAPIS: MaterialAssetGroup;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MaterialAssetGroup]>;
  readonly NETHERITE: MaterialAssetGroup;
  readonly QUARTZ: MaterialAssetGroup;
  readonly REDSTONE: MaterialAssetGroup;
  readonly RESIN: MaterialAssetGroup;
  readonly SEPARATOR: "_";
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MaterialAssetGroup>;
  create(arg0: string): MaterialAssetGroup;
  create(arg0: string, arg1: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment.EquipmentAsset>, string>): MaterialAssetGroup;
}

/** JVM record net.minecraft.world.item.equipment.trim.MaterialAssetGroup$AssetInfo. */
export interface MaterialAssetGroup_AssetInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  suffix(): string;
  toString(): string;
}
export type MaterialAssetGroup_AssetInfo = MaterialAssetGroup_AssetInfoMembers & JavaOpaque<"java.lang.Record">;
export interface MaterialAssetGroup_AssetInfoStatics {
  new(arg0: string): MaterialAssetGroup_AssetInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MaterialAssetGroup_AssetInfo]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MaterialAssetGroup_AssetInfo>;
}

/** JVM record net.minecraft.world.item.equipment.trim.TrimMaterial. */
export interface TrimMaterialMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assets(): MaterialAssetGroup;
  description(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type TrimMaterial = TrimMaterialMembers & JavaOpaque<"java.lang.Record">;
export interface TrimMaterialStatics {
  new(arg0: MaterialAssetGroup, arg1: j_net_minecraft_network_chat.Component): TrimMaterial;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<TrimMaterial>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TrimMaterial]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TrimMaterial>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<TrimMaterial>>;
}

/** JVM class net.minecraft.world.item.equipment.trim.TrimMaterials. */
export interface TrimMaterialsMembers {
}
export type TrimMaterials = TrimMaterialsMembers;
export interface TrimMaterialsStatics {
  new(): TrimMaterials;
  readonly AMETHYST: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly COPPER: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly DIAMOND: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly EMERALD: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly GOLD: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly IRON: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly LAPIS: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly NETHERITE: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly QUARTZ: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly REDSTONE: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  readonly RESIN: j_net_minecraft_resources.ResourceKey<TrimMaterial>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<TrimMaterial>): void;
  getFromIngredient(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_item.ItemStack): JavaOptional<j_net_minecraft_core.Holder<TrimMaterial>>;
}

/** JVM record net.minecraft.world.item.equipment.trim.TrimPattern. */
export interface TrimPatternMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assetId(): j_net_minecraft_resources.ResourceLocation;
  copyWithStyle(arg0: j_net_minecraft_core.Holder<TrimMaterial>): j_net_minecraft_network_chat.Component;
  decal(): boolean;
  description(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type TrimPattern = TrimPatternMembers & JavaOpaque<"java.lang.Record">;
export interface TrimPatternStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_network_chat.Component, arg2: boolean): TrimPattern;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<TrimPattern>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TrimPattern]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TrimPattern>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<TrimPattern>>;
}

/** JVM class net.minecraft.world.item.equipment.trim.TrimPatterns. */
export interface TrimPatternsMembers {
}
export type TrimPatterns = TrimPatternsMembers;
export interface TrimPatternsStatics {
  new(): TrimPatterns;
  readonly BOLT: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly COAST: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly DUNE: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly EYE: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly FLOW: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly HOST: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly RAISER: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly RIB: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly SENTRY: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly SHAPER: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly SILENCE: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly SNOUT: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly SPIRE: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly TIDE: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly VEX: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly WARD: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly WAYFINDER: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  readonly WILD: j_net_minecraft_resources.ResourceKey<TrimPattern>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<TrimPattern>): void;
  defaultAssetId(arg0: j_net_minecraft_resources.ResourceKey<TrimPattern>): j_net_minecraft_resources.ResourceLocation;
  register(arg0: j_net_minecraft_data_worldgen.BootstrapContext<TrimPattern>, arg1: j_net_minecraft_resources.ResourceKey<TrimPattern>): void;
}
