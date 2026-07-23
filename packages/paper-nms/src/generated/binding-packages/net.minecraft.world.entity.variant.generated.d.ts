// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM record net.minecraft.world.entity.variant.BiomeCheck. */
export interface BiomeCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SpawnCondition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeCheck]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  requiredBiomes(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>;
  test(arg0: object): boolean;
  test(arg0: SpawnContext): boolean;
  toString(): string;
}
export type BiomeCheck = BiomeCheckMembers & JavaOpaque<"java.lang.Record"> & SpawnCondition;
export interface BiomeCheckStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>): BiomeCheck;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeCheck]>;
}

/** JVM record net.minecraft.world.entity.variant.ModelAndTexture. */
export interface ModelAndTextureMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  asset(): j_net_minecraft_core.ClientAsset;
  equals(arg0: object): boolean;
  hashCode(): number;
  model(): T;
  toString(): string;
}
export type ModelAndTexture<T = unknown> = ModelAndTextureMembers<T> & JavaOpaque<"java.lang.Record">;
export interface ModelAndTextureStatics {
  new<T>(arg0: T, arg1: j_net_minecraft_core.ClientAsset): ModelAndTexture<T>;
  new<T>(arg0: T, arg1: j_net_minecraft_resources.ResourceLocation): ModelAndTexture<T>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: T): JavaOpaque<"com.mojang.serialization.MapCodec", [ModelAndTexture<T>]>;
  streamCodec<T>(arg0: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ModelAndTexture<T>>;
}

/** JVM record net.minecraft.world.entity.variant.MoonBrightnessCheck. */
export interface MoonBrightnessCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SpawnCondition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MoonBrightnessCheck]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  range(): j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles;
  test(arg0: object): boolean;
  test(arg0: SpawnContext): boolean;
  toString(): string;
}
export type MoonBrightnessCheck = MoonBrightnessCheckMembers & JavaOpaque<"java.lang.Record"> & SpawnCondition;
export interface MoonBrightnessCheckStatics {
  new(arg0: j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles): MoonBrightnessCheck;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MoonBrightnessCheck]>;
}

/** JVM interface net.minecraft.world.entity.variant.PriorityProvider. */
export interface PriorityProviderMembers<Context = unknown, Condition /* extends PriorityProvider_SelectorCondition<Context> */ = unknown> {
  selectors(): JavaList<PriorityProvider_Selector<Context, Condition>>;
}
export type PriorityProvider<Context = unknown, Condition /* extends PriorityProvider_SelectorCondition<Context> */ = unknown> = PriorityProviderMembers<Context, Condition>;
export interface PriorityProviderStatics {
  alwaysTrue<Context, Condition /* extends PriorityProvider_SelectorCondition<Context> */>(arg0: number): JavaList<PriorityProvider_Selector<Context, Condition>>;
  pick<C, T>(arg0: JavaOpaque<"java.util.stream.Stream", [T]>, arg1: JavaFunction<T, PriorityProvider<C, object>>, arg2: j_net_minecraft_util.RandomSource, arg3: C): JavaOptional<T>;
  select<C, T>(arg0: JavaOpaque<"java.util.stream.Stream", [T]>, arg1: JavaFunction<T, PriorityProvider<C, object>>, arg2: C): JavaOpaque<"java.util.stream.Stream", [T]>;
  single<Context, Condition /* extends PriorityProvider_SelectorCondition<Context> */>(arg0: Condition, arg1: number): JavaList<PriorityProvider_Selector<Context, Condition>>;
}

/** JVM record net.minecraft.world.entity.variant.PriorityProvider$Selector. */
export interface PriorityProvider_SelectorMembers<Context = unknown, Condition /* extends PriorityProvider_SelectorCondition<Context> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  condition(): JavaOptional<Condition>;
  equals(arg0: object): boolean;
  hashCode(): number;
  priority(): number;
  toString(): string;
}
export type PriorityProvider_Selector<Context = unknown, Condition /* extends PriorityProvider_SelectorCondition<Context> */ = unknown> = PriorityProvider_SelectorMembers<Context, Condition> & JavaOpaque<"java.lang.Record">;
export interface PriorityProvider_SelectorStatics {
  new<Context, Condition /* extends PriorityProvider_SelectorCondition<Context> */>(arg0: number): PriorityProvider_Selector<Context, Condition>;
  new<Context, Condition /* extends PriorityProvider_SelectorCondition<Context> */>(arg0: JavaOptional<Condition>, arg1: number): PriorityProvider_Selector<Context, Condition>;
  new<Context, Condition /* extends PriorityProvider_SelectorCondition<Context> */>(arg0: Condition, arg1: number): PriorityProvider_Selector<Context, Condition>;
  codec<Context, Condition /* extends PriorityProvider_SelectorCondition<Context> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [Condition]>): JavaOpaque<"com.mojang.serialization.Codec", [PriorityProvider_Selector<Context, Condition>]>;
}

/** JVM interface net.minecraft.world.entity.variant.PriorityProvider$SelectorCondition. */
export interface PriorityProvider_SelectorConditionMembers<C = unknown> {
  readonly __javaSupertypes?: readonly [JavaPredicate<C>];
}
export type PriorityProvider_SelectorCondition<C = unknown> = PriorityProvider_SelectorConditionMembers<C> & JavaPredicate<C>;
export interface PriorityProvider_SelectorConditionStatics {
  alwaysTrue<C>(): PriorityProvider_SelectorCondition<C>;
}

/** JVM record net.minecraft.world.entity.variant.PriorityProvider$UnpackedEntry. */
export interface PriorityProvider_UnpackedEntryMembers<C = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  condition(): PriorityProvider_SelectorCondition<C>;
  entry(): T;
  equals(arg0: object): boolean;
  hashCode(): number;
  priority(): number;
  toString(): string;
}
export type PriorityProvider_UnpackedEntry<C = unknown, T = unknown> = PriorityProvider_UnpackedEntryMembers<C, T> & JavaOpaque<"java.lang.Record">;
export interface PriorityProvider_UnpackedEntryStatics {
  new<C, T>(arg0: T, arg1: number, arg2: PriorityProvider_SelectorCondition<C>): PriorityProvider_UnpackedEntry<C, T>;
  readonly HIGHEST_PRIORITY_FIRST: JavaOpaque<"java.util.Comparator", [PriorityProvider_UnpackedEntry<object, object>]>;
}

/** JVM interface net.minecraft.world.entity.variant.SpawnCondition. */
export interface SpawnConditionMembers {
  readonly __javaSupertypes?: readonly [PriorityProvider_SelectorCondition<SpawnContext>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnCondition]>;
}
export type SpawnCondition = SpawnConditionMembers & PriorityProvider_SelectorCondition<SpawnContext>;
export interface SpawnConditionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpawnCondition]>;
}

/** JVM class net.minecraft.world.entity.variant.SpawnConditions. */
export interface SpawnConditionsMembers {
}
export type SpawnConditions = SpawnConditionsMembers;
export interface SpawnConditionsStatics {
  new(): SpawnConditions;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnCondition]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnCondition]>;
}

/** JVM record net.minecraft.world.entity.variant.SpawnContext. */
export interface SpawnContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  biome(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): j_net_minecraft_world_level.ServerLevelAccessor;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type SpawnContext = SpawnContextMembers & JavaOpaque<"java.lang.Record">;
export interface SpawnContextStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): SpawnContext;
  create(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos): SpawnContext;
}

/** JVM record net.minecraft.world.entity.variant.SpawnPrioritySelectors. */
export interface SpawnPrioritySelectorsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  selectors(): JavaList<PriorityProvider_Selector<SpawnContext, SpawnCondition>>;
  toString(): string;
}
export type SpawnPrioritySelectors = SpawnPrioritySelectorsMembers & JavaOpaque<"java.lang.Record">;
export interface SpawnPrioritySelectorsStatics {
  new(arg0: JavaList<PriorityProvider_Selector<SpawnContext, SpawnCondition>>): SpawnPrioritySelectors;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpawnPrioritySelectors]>;
  readonly EMPTY: SpawnPrioritySelectors;
  fallback(arg0: number): SpawnPrioritySelectors;
  single(arg0: SpawnCondition, arg1: number): SpawnPrioritySelectors;
}

/** JVM record net.minecraft.world.entity.variant.StructureCheck. */
export interface StructureCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SpawnCondition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StructureCheck]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  requiredStructures(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>;
  test(arg0: object): boolean;
  test(arg0: SpawnContext): boolean;
  toString(): string;
}
export type StructureCheck = StructureCheckMembers & JavaOpaque<"java.lang.Record"> & SpawnCondition;
export interface StructureCheckStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>): StructureCheck;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StructureCheck]>;
}

/** JVM class net.minecraft.world.entity.variant.VariantUtils. */
export interface VariantUtilsMembers {
}
export type VariantUtils = VariantUtilsMembers;
export interface VariantUtilsStatics {
  new(): VariantUtils;
  readonly TAG_VARIANT: "variant";
  getAny<T>(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_core.Holder<T>;
  getDefaultOrAny<T>(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_resources.ResourceKey<T>): j_net_minecraft_core.Holder<T>;
  readVariant<T>(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOptional<j_net_minecraft_core.Holder<T>>;
  selectVariantToSpawn<T /* extends PriorityProvider<SpawnContext, object> */>(arg0: SpawnContext, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOptional<j_net_minecraft_core.Holder_Reference<T>>;
  writeVariant<T>(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: j_net_minecraft_core.Holder<T>): void;
}
