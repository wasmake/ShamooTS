// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';

/** JVM class net.minecraft.data.BlockFamilies. */
export interface BlockFamiliesMembers {
}
export type BlockFamilies = BlockFamiliesMembers;
export interface BlockFamiliesStatics {
  new(): BlockFamilies;
  readonly ACACIA_PLANKS: BlockFamily;
  readonly ANDESITE: BlockFamily;
  readonly BAMBOO_MOSAIC: BlockFamily;
  readonly BAMBOO_PLANKS: BlockFamily;
  readonly BIRCH_PLANKS: BlockFamily;
  readonly BLACKSTONE: BlockFamily;
  readonly BRICKS: BlockFamily;
  readonly CHERRY_PLANKS: BlockFamily;
  readonly COBBLED_DEEPSLATE: BlockFamily;
  readonly COBBLESTONE: BlockFamily;
  readonly COPPER_BLOCK: BlockFamily;
  readonly CRIMSON_PLANKS: BlockFamily;
  readonly CUT_COPPER: BlockFamily;
  readonly CUT_RED_SANDSTONE: BlockFamily;
  readonly CUT_SANDSTONE: BlockFamily;
  readonly DARK_OAK_PLANKS: BlockFamily;
  readonly DARK_PRISMARINE: BlockFamily;
  readonly DEEPSLATE: BlockFamily;
  readonly DEEPSLATE_BRICKS: BlockFamily;
  readonly DEEPSLATE_TILES: BlockFamily;
  readonly DIORITE: BlockFamily;
  readonly END_STONE_BRICKS: BlockFamily;
  readonly EXPOSED_COPPER: BlockFamily;
  readonly EXPOSED_CUT_COPPER: BlockFamily;
  readonly GRANITE: BlockFamily;
  readonly JUNGLE_PLANKS: BlockFamily;
  readonly MANGROVE_PLANKS: BlockFamily;
  readonly MOSSY_COBBLESTONE: BlockFamily;
  readonly MOSSY_STONE_BRICKS: BlockFamily;
  readonly MUD_BRICKS: BlockFamily;
  readonly NETHER_BRICKS: BlockFamily;
  readonly OAK_PLANKS: BlockFamily;
  readonly OXIDIZED_COPPER: BlockFamily;
  readonly OXIDIZED_CUT_COPPER: BlockFamily;
  readonly PALE_OAK_PLANKS: BlockFamily;
  readonly POLISHED_ANDESITE: BlockFamily;
  readonly POLISHED_BLACKSTONE: BlockFamily;
  readonly POLISHED_BLACKSTONE_BRICKS: BlockFamily;
  readonly POLISHED_DEEPSLATE: BlockFamily;
  readonly POLISHED_DIORITE: BlockFamily;
  readonly POLISHED_GRANITE: BlockFamily;
  readonly POLISHED_TUFF: BlockFamily;
  readonly PRISMARINE: BlockFamily;
  readonly PRISMARINE_BRICKS: BlockFamily;
  readonly PURPUR: BlockFamily;
  readonly QUARTZ: BlockFamily;
  readonly RED_NETHER_BRICKS: BlockFamily;
  readonly RED_SANDSTONE: BlockFamily;
  readonly RESIN_BRICKS: BlockFamily;
  readonly SANDSTONE: BlockFamily;
  readonly SMOOTH_QUARTZ: BlockFamily;
  readonly SMOOTH_RED_SANDSTONE: BlockFamily;
  readonly SMOOTH_SANDSTONE: BlockFamily;
  readonly SPRUCE_PLANKS: BlockFamily;
  readonly STONE: BlockFamily;
  readonly STONE_BRICK: BlockFamily;
  readonly TUFF: BlockFamily;
  readonly TUFF_BRICKS: BlockFamily;
  readonly WARPED_PLANKS: BlockFamily;
  readonly WAXED_COPPER_BLOCK: BlockFamily;
  readonly WAXED_CUT_COPPER: BlockFamily;
  readonly WAXED_EXPOSED_COPPER: BlockFamily;
  readonly WAXED_EXPOSED_CUT_COPPER: BlockFamily;
  readonly WAXED_OXIDIZED_COPPER: BlockFamily;
  readonly WAXED_OXIDIZED_CUT_COPPER: BlockFamily;
  readonly WAXED_WEATHERED_COPPER: BlockFamily;
  readonly WAXED_WEATHERED_CUT_COPPER: BlockFamily;
  readonly WEATHERED_COPPER: BlockFamily;
  readonly WEATHERED_CUT_COPPER: BlockFamily;
  getAllFamilies(): JavaOpaque<"java.util.stream.Stream", [BlockFamily]>;
}

/** JVM class net.minecraft.data.BlockFamily. */
export interface BlockFamilyMembers {
  get(arg0: BlockFamily_Variant): j_net_minecraft_world_level_block.Block;
  getBaseBlock(): j_net_minecraft_world_level_block.Block;
  getRecipeGroupPrefix(): JavaOptional<string>;
  getRecipeUnlockedBy(): JavaOptional<string>;
  getVariants(): JavaMap<BlockFamily_Variant, j_net_minecraft_world_level_block.Block>;
  shouldGenerateModel(): boolean;
  shouldGenerateRecipe(): boolean;
}
export type BlockFamily = BlockFamilyMembers;
export interface BlockFamilyStatics {
}

/** JVM class net.minecraft.data.BlockFamily$Builder. */
export interface BlockFamily_BuilderMembers {
  button(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  chiseled(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  cracked(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  customFence(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  customFenceGate(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  cut(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  dontGenerateModel(): BlockFamily_Builder;
  dontGenerateRecipe(): BlockFamily_Builder;
  door(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  fence(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  fenceGate(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  getFamily(): BlockFamily;
  mosaic(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  polished(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  pressurePlate(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  recipeGroupPrefix(arg0: string): BlockFamily_Builder;
  recipeUnlockedBy(arg0: string): BlockFamily_Builder;
  sign(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  slab(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  stairs(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  trapdoor(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
  wall(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
}
export type BlockFamily_Builder = BlockFamily_BuilderMembers;
export interface BlockFamily_BuilderStatics {
  new(arg0: j_net_minecraft_world_level_block.Block): BlockFamily_Builder;
}

/** Live JVM enum net.minecraft.data.BlockFamily$Variant; constants are host handles, not strings. */
export type BlockFamily_Variant = JavaEnum<"net.minecraft.data.BlockFamily$Variant", "BUTTON" | "CHISELED" | "CRACKED" | "CUSTOM_FENCE" | "CUSTOM_FENCE_GATE" | "CUT" | "DOOR" | "FENCE" | "FENCE_GATE" | "MOSAIC" | "POLISHED" | "PRESSURE_PLATE" | "SIGN" | "SLAB" | "STAIRS" | "TRAPDOOR" | "WALL" | "WALL_SIGN"> & BlockFamily_VariantMembers;
export interface BlockFamily_VariantMembers {
  getRecipeGroup(): string;
}
export interface BlockFamily_VariantStatics {
  readonly BUTTON: BlockFamily_Variant;
  readonly CHISELED: BlockFamily_Variant;
  readonly CRACKED: BlockFamily_Variant;
  readonly CUSTOM_FENCE: BlockFamily_Variant;
  readonly CUSTOM_FENCE_GATE: BlockFamily_Variant;
  readonly CUT: BlockFamily_Variant;
  readonly DOOR: BlockFamily_Variant;
  readonly FENCE: BlockFamily_Variant;
  readonly FENCE_GATE: BlockFamily_Variant;
  readonly MOSAIC: BlockFamily_Variant;
  readonly POLISHED: BlockFamily_Variant;
  readonly PRESSURE_PLATE: BlockFamily_Variant;
  readonly SIGN: BlockFamily_Variant;
  readonly SLAB: BlockFamily_Variant;
  readonly STAIRS: BlockFamily_Variant;
  readonly TRAPDOOR: BlockFamily_Variant;
  readonly WALL: BlockFamily_Variant;
  readonly WALL_SIGN: BlockFamily_Variant;
  valueOf(arg0: string): BlockFamily_Variant;
  values(): Array<BlockFamily_Variant>;
}

/** JVM interface net.minecraft.data.CachedOutput. */
export interface CachedOutputMembers {
  /** @throws java.io.IOException */
  writeIfNeeded(arg0: JavaOpaque<"java.nio.file.Path">, arg1: Array<number>, arg2: JavaOpaque<"com.google.common.hash.HashCode">): void;
}
export type CachedOutput = CachedOutputMembers;
export interface CachedOutputStatics {
  readonly NO_CACHE: CachedOutput;
}

/** JVM class net.minecraft.data.DataGenerator. */
export interface DataGeneratorMembers {
  getBuiltinDatapack(arg0: boolean, arg1: string): DataGenerator_PackGenerator;
  getVanillaPack(arg0: boolean): DataGenerator_PackGenerator;
  /** @throws java.io.IOException */
  run(): void;
}
export type DataGenerator = DataGeneratorMembers;
export interface DataGeneratorStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: j_net_minecraft.WorldVersion, arg2: boolean): DataGenerator;
}

/** JVM class net.minecraft.data.DataGenerator$PackGenerator. */
export interface DataGenerator_PackGeneratorMembers {
  addProvider<T /* extends DataProvider */>(arg0: DataProvider_Factory<T>): T;
}
export type DataGenerator_PackGenerator = DataGenerator_PackGeneratorMembers;
export interface DataGenerator_PackGeneratorStatics {
}

/** JVM interface net.minecraft.data.DataProvider. */
export interface DataProviderMembers {
  getName(): string;
  run(arg0: CachedOutput): PromiseLike<object>;
}
export type DataProvider = DataProviderMembers;
export interface DataProviderStatics {
  readonly FIXED_ORDER_FIELDS: JavaOpaque<"java.util.function.ToIntFunction", [string]>;
  readonly KEY_COMPARATOR: JavaOpaque<"java.util.Comparator", [string]>;
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  saveAll<T, E>(arg0: CachedOutput, arg1: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg2: JavaFunction<T, JavaOpaque<"java.nio.file.Path">>, arg3: JavaMap<T, E>): PromiseLike<object>;
  saveAll<T>(arg0: CachedOutput, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: PackOutput_PathProvider, arg3: JavaMap<j_net_minecraft_resources.ResourceLocation, T>): PromiseLike<object>;
  saveAll<T, E>(arg0: CachedOutput, arg1: JavaFunction<E, JavaOpaque<"com.google.gson.JsonElement">>, arg2: JavaFunction<T, JavaOpaque<"java.nio.file.Path">>, arg3: JavaMap<T, E>): PromiseLike<object>;
  saveStable(arg0: CachedOutput, arg1: JavaOpaque<"com.google.gson.JsonElement">, arg2: JavaOpaque<"java.nio.file.Path">): PromiseLike<object>;
  saveStable<T>(arg0: CachedOutput, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T, arg3: JavaOpaque<"java.nio.file.Path">): PromiseLike<object>;
  saveStable<T>(arg0: CachedOutput, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg3: T, arg4: JavaOpaque<"java.nio.file.Path">): PromiseLike<object>;
}

/** JVM interface net.minecraft.data.DataProvider$Factory. */
export interface DataProvider_FactoryMembers<T /* extends DataProvider */ = unknown> {
  create(arg0: PackOutput): T;
}
export type DataProvider_Factory<T /* extends DataProvider */ = unknown> = DataProvider_FactoryMembers<T>;
export interface DataProvider_FactoryStatics {
}

/** JVM class net.minecraft.data.HashCache. */
export interface HashCacheMembers {
  applyUpdate(arg0: HashCache_UpdateResult): void;
  generateUpdate(arg0: string, arg1: HashCache_UpdateFunction): PromiseLike<HashCache_UpdateResult>;
  /** @throws java.io.IOException */
  purgeStaleAndWrite(): void;
  shouldRunInThisVersion(arg0: string): boolean;
}
export type HashCache = HashCacheMembers;
export interface HashCacheStatics {
  /** @throws java.io.IOException */
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaCollection<string>, arg2: j_net_minecraft.WorldVersion): HashCache;
}

/** JVM interface net.minecraft.data.HashCache$UpdateFunction. */
export interface HashCache_UpdateFunctionMembers {
  update(arg0: CachedOutput): PromiseLike<object>;
}
export type HashCache_UpdateFunction = HashCache_UpdateFunctionMembers;
export interface HashCache_UpdateFunctionStatics {
}

/** JVM record net.minecraft.data.HashCache$UpdateResult. */
export interface HashCache_UpdateResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  cache(): JavaOpaque<"net.minecraft.data.HashCache$ProviderCache">;
  equals(arg0: object): boolean;
  hashCode(): number;
  providerId(): string;
  toString(): string;
  writes(): number;
}
export type HashCache_UpdateResult = HashCache_UpdateResultMembers & JavaOpaque<"java.lang.Record">;
export interface HashCache_UpdateResultStatics {
  new(arg0: string, arg1: JavaOpaque<"net.minecraft.data.HashCache$ProviderCache">, arg2: number): HashCache_UpdateResult;
}

/** JVM class net.minecraft.data.Main. */
export interface MainMembers {
}
export type Main = MainMembers;
export interface MainStatics {
  new(): Main;
  addServerProviders(arg0: DataGenerator, arg1: JavaCollection<JavaOpaque<"java.nio.file.Path">>, arg2: boolean, arg3: boolean, arg4: boolean): void;
  /** @throws java.io.IOException */
  main(arg0: Array<string>): void;
}

/** JVM class net.minecraft.data.PackOutput. */
export interface PackOutputMembers {
  createPathProvider(arg0: PackOutput_Target, arg1: string): PackOutput_PathProvider;
  createRegistryElementsPathProvider(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>): PackOutput_PathProvider;
  createRegistryTagsPathProvider(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>): PackOutput_PathProvider;
  getOutputFolder(): JavaOpaque<"java.nio.file.Path">;
  getOutputFolder(arg0: PackOutput_Target): JavaOpaque<"java.nio.file.Path">;
}
export type PackOutput = PackOutputMembers;
export interface PackOutputStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): PackOutput;
}

/** JVM class net.minecraft.data.PackOutput$PathProvider. */
export interface PackOutput_PathProviderMembers {
  file(arg0: j_net_minecraft_resources.ResourceLocation, arg1: string): JavaOpaque<"java.nio.file.Path">;
  json(arg0: j_net_minecraft_resources.ResourceKey<object>): JavaOpaque<"java.nio.file.Path">;
  json(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"java.nio.file.Path">;
}
export type PackOutput_PathProvider = PackOutput_PathProviderMembers;
export interface PackOutput_PathProviderStatics {
}

/** Live JVM enum net.minecraft.data.PackOutput$Target; constants are host handles, not strings. */
export type PackOutput_Target = JavaEnum<"net.minecraft.data.PackOutput$Target", "DATA_PACK" | "REPORTS" | "RESOURCE_PACK"> & PackOutput_TargetMembers;
export interface PackOutput_TargetMembers {
}
export interface PackOutput_TargetStatics {
  readonly DATA_PACK: PackOutput_Target;
  readonly REPORTS: PackOutput_Target;
  readonly RESOURCE_PACK: PackOutput_Target;
  valueOf(arg0: string): PackOutput_Target;
  values(): Array<PackOutput_Target>;
}
