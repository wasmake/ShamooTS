// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blockpredicates from './net.minecraft.world.level.levelgen.blockpredicates.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_heightproviders from './net.minecraft.world.level.levelgen.heightproviders.generated.js';

/** JVM class net.minecraft.world.level.levelgen.placement.BiomeFilter. */
export interface BiomeFilterMembers {
  readonly __javaSupertypes?: readonly [PlacementFilter];
  shouldPlace(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): boolean;
  type(): PlacementModifierType<object>;
}
export type BiomeFilter = BiomeFilterMembers & PlacementFilter;
export interface BiomeFilterStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeFilter]>;
  biome(): BiomeFilter;
}

/** JVM class net.minecraft.world.level.levelgen.placement.BlockPredicateFilter. */
export interface BlockPredicateFilterMembers {
  readonly __javaSupertypes?: readonly [PlacementFilter];
  shouldPlace(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): boolean;
  type(): PlacementModifierType<object>;
}
export type BlockPredicateFilter = BlockPredicateFilterMembers & PlacementFilter;
export interface BlockPredicateFilterStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockPredicateFilter]>;
  forPredicate(arg0: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3): BlockPredicateFilter;
}

/** Live JVM enum net.minecraft.world.level.levelgen.placement.CaveSurface; constants are host handles, not strings. */
export type CaveSurface = JavaEnum<"net.minecraft.world.level.levelgen.placement.CaveSurface", "CEILING" | "FLOOR"> & CaveSurfaceMembers;
export interface CaveSurfaceMembers {
  getDirection(): j_net_minecraft_core.Direction;
  getSerializedName(): string;
  getY(): number;
}
export interface CaveSurfaceStatics {
  readonly CEILING: CaveSurface;
  readonly FLOOR: CaveSurface;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CaveSurface]>;
  valueOf(arg0: string): CaveSurface;
  values(): Array<CaveSurface>;
}

/** JVM class net.minecraft.world.level.levelgen.placement.CountOnEveryLayerPlacement. */
export interface CountOnEveryLayerPlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type CountOnEveryLayerPlacement = CountOnEveryLayerPlacementMembers & PlacementModifier;
export interface CountOnEveryLayerPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CountOnEveryLayerPlacement]>;
  of(arg0: number): CountOnEveryLayerPlacement;
  of(arg0: j_net_minecraft_util_valueproviders.IntProvider): CountOnEveryLayerPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.CountPlacement. */
export interface CountPlacementMembers {
  readonly __javaSupertypes?: readonly [RepeatingPlacement];
  count(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): number;
  type(): PlacementModifierType<object>;
}
export type CountPlacement = CountPlacementMembers & RepeatingPlacement;
export interface CountPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CountPlacement]>;
  of(arg0: number): CountPlacement;
  of(arg0: j_net_minecraft_util_valueproviders.IntProvider): CountPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.EnvironmentScanPlacement. */
export interface EnvironmentScanPlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type EnvironmentScanPlacement = EnvironmentScanPlacementMembers & PlacementModifier;
export interface EnvironmentScanPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnvironmentScanPlacement]>;
  scanningFor(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg2: number): EnvironmentScanPlacement;
  scanningFor(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg2: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg3: number): EnvironmentScanPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.FixedPlacement. */
export interface FixedPlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type FixedPlacement = FixedPlacementMembers & PlacementModifier;
export interface FixedPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FixedPlacement]>;
  of(...arg0: Array<j_net_minecraft_core.BlockPos>): FixedPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.HeightmapPlacement. */
export interface HeightmapPlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type HeightmapPlacement = HeightmapPlacementMembers & PlacementModifier;
export interface HeightmapPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HeightmapPlacement]>;
  onHeightmap(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): HeightmapPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.HeightRangePlacement. */
export interface HeightRangePlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type HeightRangePlacement = HeightRangePlacementMembers & PlacementModifier;
export interface HeightRangePlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HeightRangePlacement]>;
  of(arg0: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider): HeightRangePlacement;
  triangle(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor): HeightRangePlacement;
  uniform(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor): HeightRangePlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.InSquarePlacement. */
export interface InSquarePlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type InSquarePlacement = InSquarePlacementMembers & PlacementModifier;
export interface InSquarePlacementStatics {
  new(): InSquarePlacement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [InSquarePlacement]>;
  spread(): InSquarePlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.NoiseBasedCountPlacement. */
export interface NoiseBasedCountPlacementMembers {
  readonly __javaSupertypes?: readonly [RepeatingPlacement];
  count(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): number;
  type(): PlacementModifierType<object>;
}
export type NoiseBasedCountPlacement = NoiseBasedCountPlacementMembers & RepeatingPlacement;
export interface NoiseBasedCountPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoiseBasedCountPlacement]>;
  of(arg0: number, arg1: number, arg2: number): NoiseBasedCountPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.NoiseThresholdCountPlacement. */
export interface NoiseThresholdCountPlacementMembers {
  readonly __javaSupertypes?: readonly [RepeatingPlacement];
  count(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): number;
  type(): PlacementModifierType<object>;
}
export type NoiseThresholdCountPlacement = NoiseThresholdCountPlacementMembers & RepeatingPlacement;
export interface NoiseThresholdCountPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoiseThresholdCountPlacement]>;
  of(arg0: number, arg1: number, arg2: number): NoiseThresholdCountPlacement;
}

/** JVM record net.minecraft.world.level.levelgen.placement.PlacedFeature. */
export interface PlacedFeatureMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  feature(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  getFeatures(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>]>;
  hashCode(): number;
  place(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): boolean;
  placeWithBiomeCheck(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): boolean;
  placement(): JavaList<PlacementModifier>;
  toString(): string;
}
export type PlacedFeature = PlacedFeatureMembers & JavaOpaque<"java.lang.Record">;
export interface PlacedFeatureStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg1: JavaList<PlacementModifier>): PlacedFeature;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<PlacedFeature>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlacedFeature]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<PlacedFeature>]>;
  readonly LIST_OF_LISTS_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<j_net_minecraft_core.HolderSet<PlacedFeature>>]>;
}

/** JVM class net.minecraft.world.level.levelgen.placement.PlacementContext. */
export interface PlacementContextMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen.WorldGenerationContext];
  generator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getCarvingMask(arg0: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_world_level_chunk.CarvingMask;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getLevel(): j_net_minecraft_world_level.WorldGenLevel;
  getMinY(): number;
  topFeature(): JavaOptional<PlacedFeature>;
}
export type PlacementContext = PlacementContextMembers & j_net_minecraft_world_level_levelgen.WorldGenerationContext;
export interface PlacementContextStatics {
  new(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: JavaOptional<PlacedFeature>): PlacementContext;
}

/** JVM abstract net.minecraft.world.level.levelgen.placement.PlacementFilter. */
export interface PlacementFilterMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  shouldPlace(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): boolean;
}
export type PlacementFilter = PlacementFilterMembers & PlacementModifier;
export interface PlacementFilterStatics {
  new(): PlacementFilter;
}

/** JVM abstract net.minecraft.world.level.levelgen.placement.PlacementModifier. */
export interface PlacementModifierMembers {
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type PlacementModifier = PlacementModifierMembers;
export interface PlacementModifierStatics {
  new(): PlacementModifier;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlacementModifier]>;
}

/** JVM interface net.minecraft.world.level.levelgen.placement.PlacementModifierType. */
export interface PlacementModifierTypeMembers<P /* extends PlacementModifier */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type PlacementModifierType<P /* extends PlacementModifier */ = unknown> = PlacementModifierTypeMembers<P>;
export interface PlacementModifierTypeStatics {
  readonly BIOME_FILTER: PlacementModifierType<BiomeFilter>;
  readonly BLOCK_PREDICATE_FILTER: PlacementModifierType<BlockPredicateFilter>;
  readonly COUNT: PlacementModifierType<CountPlacement>;
  readonly COUNT_ON_EVERY_LAYER: PlacementModifierType<CountOnEveryLayerPlacement>;
  readonly ENVIRONMENT_SCAN: PlacementModifierType<EnvironmentScanPlacement>;
  readonly FIXED_PLACEMENT: PlacementModifierType<FixedPlacement>;
  readonly HEIGHTMAP: PlacementModifierType<HeightmapPlacement>;
  readonly HEIGHT_RANGE: PlacementModifierType<HeightRangePlacement>;
  readonly IN_SQUARE: PlacementModifierType<InSquarePlacement>;
  readonly NOISE_BASED_COUNT: PlacementModifierType<NoiseBasedCountPlacement>;
  readonly NOISE_THRESHOLD_COUNT: PlacementModifierType<NoiseThresholdCountPlacement>;
  readonly RANDOM_OFFSET: PlacementModifierType<RandomOffsetPlacement>;
  readonly RARITY_FILTER: PlacementModifierType<RarityFilter>;
  readonly SURFACE_RELATIVE_THRESHOLD_FILTER: PlacementModifierType<SurfaceRelativeThresholdFilter>;
  readonly SURFACE_WATER_DEPTH_FILTER: PlacementModifierType<SurfaceWaterDepthFilter>;
}

/** JVM class net.minecraft.world.level.levelgen.placement.RandomOffsetPlacement. */
export interface RandomOffsetPlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  type(): PlacementModifierType<object>;
}
export type RandomOffsetPlacement = RandomOffsetPlacementMembers & PlacementModifier;
export interface RandomOffsetPlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RandomOffsetPlacement]>;
  horizontal(arg0: j_net_minecraft_util_valueproviders.IntProvider): RandomOffsetPlacement;
  of(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider): RandomOffsetPlacement;
  vertical(arg0: j_net_minecraft_util_valueproviders.IntProvider): RandomOffsetPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.RarityFilter. */
export interface RarityFilterMembers {
  readonly __javaSupertypes?: readonly [PlacementFilter];
  shouldPlace(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): boolean;
  type(): PlacementModifierType<object>;
}
export type RarityFilter = RarityFilterMembers & PlacementFilter;
export interface RarityFilterStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RarityFilter]>;
  onAverageOnceEvery(arg0: number): RarityFilter;
}

/** JVM abstract net.minecraft.world.level.levelgen.placement.RepeatingPlacement. */
export interface RepeatingPlacementMembers {
  readonly __javaSupertypes?: readonly [PlacementModifier];
  count(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): number;
  getPositions(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
}
export type RepeatingPlacement = RepeatingPlacementMembers & PlacementModifier;
export interface RepeatingPlacementStatics {
  new(): RepeatingPlacement;
}

/** JVM class net.minecraft.world.level.levelgen.placement.SurfaceRelativeThresholdFilter. */
export interface SurfaceRelativeThresholdFilterMembers {
  readonly __javaSupertypes?: readonly [PlacementFilter];
  shouldPlace(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): boolean;
  type(): PlacementModifierType<object>;
}
export type SurfaceRelativeThresholdFilter = SurfaceRelativeThresholdFilterMembers & PlacementFilter;
export interface SurfaceRelativeThresholdFilterStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SurfaceRelativeThresholdFilter]>;
  of(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): SurfaceRelativeThresholdFilter;
}

/** JVM class net.minecraft.world.level.levelgen.placement.SurfaceWaterDepthFilter. */
export interface SurfaceWaterDepthFilterMembers {
  readonly __javaSupertypes?: readonly [PlacementFilter];
  shouldPlace(arg0: PlacementContext, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): boolean;
  type(): PlacementModifierType<object>;
}
export type SurfaceWaterDepthFilter = SurfaceWaterDepthFilterMembers & PlacementFilter;
export interface SurfaceWaterDepthFilterStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SurfaceWaterDepthFilter]>;
  forMaxDepth(arg0: number): SurfaceWaterDepthFilter;
}
