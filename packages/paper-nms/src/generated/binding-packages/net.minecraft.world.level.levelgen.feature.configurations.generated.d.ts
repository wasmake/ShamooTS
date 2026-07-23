// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blockpredicates from './net.minecraft.world.level.levelgen.blockpredicates.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_featuresize from './net.minecraft.world.level.levelgen.feature.featuresize.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_foliageplacers from './net.minecraft.world.level.levelgen.feature.foliageplacers.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_rootplacers from './net.minecraft.world.level.levelgen.feature.rootplacers.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_stateproviders from './net.minecraft.world.level.levelgen.feature.stateproviders.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_treedecorators from './net.minecraft.world.level.levelgen.feature.treedecorators.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_trunkplacers from './net.minecraft.world.level.levelgen.feature.trunkplacers.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration. */
export interface BlockColumnConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, FeatureConfiguration];
  allowedPlacement(): j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3;
  direction(): j_net_minecraft_core.Direction;
  equals(arg0: object): boolean;
  hashCode(): number;
  layers(): JavaList<BlockColumnConfiguration_Layer>;
  prioritizeTip(): boolean;
  toString(): string;
}
export type BlockColumnConfiguration = BlockColumnConfigurationMembers & JavaOpaque<"java.lang.Record"> & FeatureConfiguration;
export interface BlockColumnConfigurationStatics {
  new(arg0: JavaList<BlockColumnConfiguration_Layer>, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg3: boolean): BlockColumnConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockColumnConfiguration]>;
  layer(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): BlockColumnConfiguration_Layer;
  simple(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): BlockColumnConfiguration;
}

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration$Layer. */
export interface BlockColumnConfiguration_LayerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): j_net_minecraft_util_valueproviders.IntProvider;
  state(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  toString(): string;
}
export type BlockColumnConfiguration_Layer = BlockColumnConfiguration_LayerMembers & JavaOpaque<"java.lang.Record">;
export interface BlockColumnConfiguration_LayerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): BlockColumnConfiguration_Layer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockColumnConfiguration_Layer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration. */
export interface BlockPileConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly stateProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
}
export type BlockPileConfiguration = BlockPileConfigurationMembers & FeatureConfiguration;
export interface BlockPileConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): BlockPileConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockPileConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration. */
export interface BlockStateConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly state: j_net_minecraft_world_level_block_state.BlockState;
}
export type BlockStateConfiguration = BlockStateConfigurationMembers & FeatureConfiguration;
export interface BlockStateConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): BlockStateConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockStateConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration. */
export interface ColumnFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  height(): j_net_minecraft_util_valueproviders.IntProvider;
  reach(): j_net_minecraft_util_valueproviders.IntProvider;
}
export type ColumnFeatureConfiguration = ColumnFeatureConfigurationMembers & FeatureConfiguration;
export interface ColumnFeatureConfigurationStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider): ColumnFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ColumnFeatureConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration. */
export interface CountConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  count(): j_net_minecraft_util_valueproviders.IntProvider;
}
export type CountConfiguration = CountConfigurationMembers & FeatureConfiguration;
export interface CountConfigurationStatics {
  new(arg0: number): CountConfiguration;
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider): CountConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CountConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration. */
export interface DeltaFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  contents(): j_net_minecraft_world_level_block_state.BlockState;
  rim(): j_net_minecraft_world_level_block_state.BlockState;
  rimSize(): j_net_minecraft_util_valueproviders.IntProvider;
  size(): j_net_minecraft_util_valueproviders.IntProvider;
}
export type DeltaFeatureConfiguration = DeltaFeatureConfigurationMembers & FeatureConfiguration;
export interface DeltaFeatureConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_util_valueproviders.IntProvider, arg3: j_net_minecraft_util_valueproviders.IntProvider): DeltaFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DeltaFeatureConfiguration]>;
}

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration. */
export interface DiskConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, FeatureConfiguration];
  equals(arg0: object): boolean;
  halfHeight(): number;
  hashCode(): number;
  radius(): j_net_minecraft_util_valueproviders.IntProvider;
  stateProvider(): j_net_minecraft_world_level_levelgen_feature_stateproviders.RuleBasedBlockStateProvider;
  target(): j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3;
  toString(): string;
}
export type DiskConfiguration = DiskConfigurationMembers & JavaOpaque<"java.lang.Record"> & FeatureConfiguration;
export interface DiskConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.RuleBasedBlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg2: j_net_minecraft_util_valueproviders.IntProvider, arg3: number): DiskConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DiskConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration. */
export interface DripstoneClusterConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly chanceOfDripstoneColumnAtMaxDistanceFromCenter: number;
  readonly density: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly dripstoneBlockLayerThickness: j_net_minecraft_util_valueproviders.IntProvider;
  readonly floorToCeilingSearchRange: number;
  readonly height: j_net_minecraft_util_valueproviders.IntProvider;
  readonly heightDeviation: number;
  readonly maxDistanceFromCenterAffectingHeightBias: number;
  readonly maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number;
  readonly maxStalagmiteStalactiteHeightDiff: number;
  readonly radius: j_net_minecraft_util_valueproviders.IntProvider;
  readonly wetness: j_net_minecraft_util_valueproviders.FloatProvider;
}
export type DripstoneClusterConfiguration = DripstoneClusterConfigurationMembers & FeatureConfiguration;
export interface DripstoneClusterConfigurationStatics {
  new(arg0: number, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.IntProvider, arg3: number, arg4: number, arg5: j_net_minecraft_util_valueproviders.IntProvider, arg6: j_net_minecraft_util_valueproviders.FloatProvider, arg7: j_net_minecraft_util_valueproviders.FloatProvider, arg8: number, arg9: number, arg10: number): DripstoneClusterConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DripstoneClusterConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration. */
export interface EndGatewayConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  getExit(): JavaOptional<j_net_minecraft_core.BlockPos>;
  isExitExact(): boolean;
}
export type EndGatewayConfiguration = EndGatewayConfigurationMembers & FeatureConfiguration;
export interface EndGatewayConfigurationStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EndGatewayConfiguration]>;
  delayedExitSearch(): EndGatewayConfiguration;
  knownExit(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): EndGatewayConfiguration;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.FallenTreeConfiguration. */
export interface FallenTreeConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly logDecorators: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>;
  readonly logLength: j_net_minecraft_util_valueproviders.IntProvider;
  readonly stumpDecorators: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>;
  readonly trunkProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
}
export type FallenTreeConfiguration = FallenTreeConfigurationMembers & FeatureConfiguration;
export interface FallenTreeConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>, arg3: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>): FallenTreeConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FallenTreeConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.FallenTreeConfiguration$FallenTreeConfigurationBuilder. */
export interface FallenTreeConfiguration_FallenTreeConfigurationBuilderMembers {
  build(): FallenTreeConfiguration;
  logDecorators(arg0: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>): FallenTreeConfiguration_FallenTreeConfigurationBuilder;
  stumpDecorators(arg0: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>): FallenTreeConfiguration_FallenTreeConfigurationBuilder;
}
export type FallenTreeConfiguration_FallenTreeConfigurationBuilder = FallenTreeConfiguration_FallenTreeConfigurationBuilderMembers;
export interface FallenTreeConfiguration_FallenTreeConfigurationBuilderStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider): FallenTreeConfiguration_FallenTreeConfigurationBuilder;
}

/** JVM interface net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration. */
export interface FeatureConfigurationMembers {
  getFeatures(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>]>;
}
export type FeatureConfiguration = FeatureConfigurationMembers;
export interface FeatureConfigurationStatics {
  readonly NONE: NoneFeatureConfiguration;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration. */
export interface GeodeConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly distributionPoints: j_net_minecraft_util_valueproviders.IntProvider;
  readonly geodeBlockSettings: j_net_minecraft_world_level_levelgen.GeodeBlockSettings;
  readonly geodeCrackSettings: j_net_minecraft_world_level_levelgen.GeodeCrackSettings;
  readonly geodeLayerSettings: j_net_minecraft_world_level_levelgen.GeodeLayerSettings;
  readonly invalidBlocksThreshold: number;
  readonly maxGenOffset: number;
  readonly minGenOffset: number;
  readonly noiseMultiplier: number;
  readonly outerWallDistance: j_net_minecraft_util_valueproviders.IntProvider;
  readonly placementsRequireLayer0Alternate: boolean;
  readonly pointOffset: j_net_minecraft_util_valueproviders.IntProvider;
  readonly useAlternateLayer0Chance: number;
  readonly usePotentialPlacementsChance: number;
}
export type GeodeConfiguration = GeodeConfigurationMembers & FeatureConfiguration;
export interface GeodeConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen.GeodeBlockSettings, arg1: j_net_minecraft_world_level_levelgen.GeodeLayerSettings, arg2: j_net_minecraft_world_level_levelgen.GeodeCrackSettings, arg3: number, arg4: number, arg5: boolean, arg6: j_net_minecraft_util_valueproviders.IntProvider, arg7: j_net_minecraft_util_valueproviders.IntProvider, arg8: j_net_minecraft_util_valueproviders.IntProvider, arg9: number, arg10: number, arg11: number, arg12: number): GeodeConfiguration;
  readonly CHANCE_RANGE: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GeodeConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration. */
export interface HugeMushroomFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly capProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly foliageRadius: number;
  readonly stemProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
}
export type HugeMushroomFeatureConfiguration = HugeMushroomFeatureConfigurationMembers & FeatureConfiguration;
export interface HugeMushroomFeatureConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg2: number): HugeMushroomFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HugeMushroomFeatureConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration. */
export interface LargeDripstoneConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly columnRadius: j_net_minecraft_util_valueproviders.IntProvider;
  readonly floorToCeilingSearchRange: number;
  readonly heightScale: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly maxColumnRadiusToCaveHeightRatio: number;
  readonly minBluntnessForWind: number;
  readonly minRadiusForWind: number;
  readonly stalactiteBluntness: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly stalagmiteBluntness: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly windSpeed: j_net_minecraft_util_valueproviders.FloatProvider;
}
export type LargeDripstoneConfiguration = LargeDripstoneConfigurationMembers & FeatureConfiguration;
export interface LargeDripstoneConfigurationStatics {
  new(arg0: number, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider, arg3: number, arg4: j_net_minecraft_util_valueproviders.FloatProvider, arg5: j_net_minecraft_util_valueproviders.FloatProvider, arg6: j_net_minecraft_util_valueproviders.FloatProvider, arg7: number, arg8: number): LargeDripstoneConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LargeDripstoneConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration. */
export interface LayerConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly height: number;
  readonly state: j_net_minecraft_world_level_block_state.BlockState;
}
export type LayerConfiguration = LayerConfigurationMembers & FeatureConfiguration;
export interface LayerConfigurationStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_block_state.BlockState): LayerConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LayerConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration. */
export interface MultifaceGrowthConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly canBePlacedOn: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
  readonly canPlaceOnCeiling: boolean;
  readonly canPlaceOnFloor: boolean;
  readonly canPlaceOnWall: boolean;
  readonly chanceOfSpreading: number;
  getShuffledDirections(arg0: j_net_minecraft_util.RandomSource): JavaList<j_net_minecraft_core.Direction>;
  getShuffledDirectionsExcept(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.Direction): JavaList<j_net_minecraft_core.Direction>;
  readonly placeBlock: j_net_minecraft_world_level_block.MultifaceSpreadeableBlock;
  readonly searchRange: number;
}
export type MultifaceGrowthConfiguration = MultifaceGrowthConfigurationMembers & FeatureConfiguration;
export interface MultifaceGrowthConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_block.MultifaceSpreadeableBlock, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): MultifaceGrowthConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MultifaceGrowthConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig. */
export interface NetherForestVegetationConfigMembers {
  readonly __javaSupertypes?: readonly [BlockPileConfiguration];
  readonly spreadHeight: number;
  readonly spreadWidth: number;
}
export type NetherForestVegetationConfig = NetherForestVegetationConfigMembers & BlockPileConfiguration;
export interface NetherForestVegetationConfigStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: number, arg2: number): NetherForestVegetationConfig;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NetherForestVegetationConfig]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration. */
export interface NoneFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
}
export type NoneFeatureConfiguration = NoneFeatureConfigurationMembers & FeatureConfiguration;
export interface NoneFeatureConfigurationStatics {
  new(): NoneFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NoneFeatureConfiguration]>;
  readonly INSTANCE: NoneFeatureConfiguration;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration. */
export interface OreConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly discardChanceOnAirExposure: number;
  readonly size: number;
  readonly targetStates: JavaList<OreConfiguration_TargetBlockState>;
}
export type OreConfiguration = OreConfigurationMembers & FeatureConfiguration;
export interface OreConfigurationStatics {
  new(arg0: JavaList<OreConfiguration_TargetBlockState>, arg1: number): OreConfiguration;
  new(arg0: JavaList<OreConfiguration_TargetBlockState>, arg1: number, arg2: number): OreConfiguration;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.RuleTest, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): OreConfiguration;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.RuleTest, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): OreConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [OreConfiguration]>;
  target(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.RuleTest, arg1: j_net_minecraft_world_level_block_state.BlockState): OreConfiguration_TargetBlockState;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState. */
export interface OreConfiguration_TargetBlockStateMembers {
  readonly state: j_net_minecraft_world_level_block_state.BlockState;
  readonly target: j_net_minecraft_world_level_levelgen_structure_templatesystem.RuleTest;
}
export type OreConfiguration_TargetBlockState = OreConfiguration_TargetBlockStateMembers;
export interface OreConfiguration_TargetBlockStateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [OreConfiguration_TargetBlockState]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration. */
export interface PointedDripstoneConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly chanceOfDirectionalSpread: number;
  readonly chanceOfSpreadRadius2: number;
  readonly chanceOfSpreadRadius3: number;
  readonly chanceOfTallerDripstone: number;
}
export type PointedDripstoneConfiguration = PointedDripstoneConfigurationMembers & FeatureConfiguration;
export interface PointedDripstoneConfigurationStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number): PointedDripstoneConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PointedDripstoneConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration. */
export interface ProbabilityFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly probability: number;
}
export type ProbabilityFeatureConfiguration = ProbabilityFeatureConfigurationMembers & FeatureConfiguration;
export interface ProbabilityFeatureConfigurationStatics {
  new(arg0: number): ProbabilityFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ProbabilityFeatureConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration. */
export interface RandomBooleanFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly featureFalse: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  readonly featureTrue: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  getFeatures(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>]>;
}
export type RandomBooleanFeatureConfiguration = RandomBooleanFeatureConfigurationMembers & FeatureConfiguration;
export interface RandomBooleanFeatureConfigurationStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): RandomBooleanFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RandomBooleanFeatureConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration. */
export interface RandomFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly defaultFeature: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  readonly features: JavaList<j_net_minecraft_world_level_levelgen_feature.WeightedPlacedFeature>;
  getFeatures(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>]>;
}
export type RandomFeatureConfiguration = RandomFeatureConfigurationMembers & FeatureConfiguration;
export interface RandomFeatureConfigurationStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_levelgen_feature.WeightedPlacedFeature>, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): RandomFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RandomFeatureConfiguration]>;
}

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration. */
export interface RandomPatchConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, FeatureConfiguration];
  equals(arg0: object): boolean;
  feature(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  hashCode(): number;
  toString(): string;
  tries(): number;
  xzSpread(): number;
  ySpread(): number;
}
export type RandomPatchConfiguration = RandomPatchConfigurationMembers & JavaOpaque<"java.lang.Record"> & FeatureConfiguration;
export interface RandomPatchConfigurationStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): RandomPatchConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RandomPatchConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration. */
export interface ReplaceBlockConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly targetStates: JavaList<OreConfiguration_TargetBlockState>;
}
export type ReplaceBlockConfiguration = ReplaceBlockConfigurationMembers & FeatureConfiguration;
export interface ReplaceBlockConfigurationStatics {
  new(arg0: JavaList<OreConfiguration_TargetBlockState>): ReplaceBlockConfiguration;
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState): ReplaceBlockConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ReplaceBlockConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration. */
export interface ReplaceSphereConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  radius(): j_net_minecraft_util_valueproviders.IntProvider;
  readonly replaceState: j_net_minecraft_world_level_block_state.BlockState;
  readonly targetState: j_net_minecraft_world_level_block_state.BlockState;
}
export type ReplaceSphereConfiguration = ReplaceSphereConfigurationMembers & FeatureConfiguration;
export interface ReplaceSphereConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_util_valueproviders.IntProvider): ReplaceSphereConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ReplaceSphereConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration. */
export interface RootSystemConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly allowedTreePosition: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3;
  readonly allowedVerticalWaterForTree: number;
  readonly hangingRootPlacementAttempts: number;
  readonly hangingRootRadius: number;
  readonly hangingRootStateProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly hangingRootsVerticalSpan: number;
  readonly requiredVerticalSpaceForTree: number;
  readonly rootColumnMaxHeight: number;
  readonly rootPlacementAttempts: number;
  readonly rootRadius: number;
  readonly rootReplaceable: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  readonly rootStateProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly treeFeature: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
}
export type RootSystemConfiguration = RootSystemConfigurationMembers & FeatureConfiguration;
export interface RootSystemConfigurationStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: number, arg2: number, arg3: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg4: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg5: number, arg6: number, arg7: number, arg8: number, arg9: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg10: number, arg11: number, arg12: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3): RootSystemConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RootSystemConfiguration]>;
}

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration. */
export interface SculkPatchConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, FeatureConfiguration];
  amountPerCharge(): number;
  catalystChance(): number;
  chargeCount(): number;
  equals(arg0: object): boolean;
  extraRareGrowths(): j_net_minecraft_util_valueproviders.IntProvider;
  growthRounds(): number;
  hashCode(): number;
  spreadAttempts(): number;
  spreadRounds(): number;
  toString(): string;
}
export type SculkPatchConfiguration = SculkPatchConfigurationMembers & JavaOpaque<"java.lang.Record"> & FeatureConfiguration;
export interface SculkPatchConfigurationStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_util_valueproviders.IntProvider, arg6: number): SculkPatchConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SculkPatchConfiguration]>;
}

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration. */
export interface SimpleBlockConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, FeatureConfiguration];
  equals(arg0: object): boolean;
  hashCode(): number;
  scheduleTick(): boolean;
  toPlace(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  toString(): string;
}
export type SimpleBlockConfiguration = SimpleBlockConfigurationMembers & JavaOpaque<"java.lang.Record"> & FeatureConfiguration;
export interface SimpleBlockConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): SimpleBlockConfiguration;
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: boolean): SimpleBlockConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SimpleBlockConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration. */
export interface SimpleRandomFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly features: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  getFeatures(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>]>;
}
export type SimpleRandomFeatureConfiguration = SimpleRandomFeatureConfigurationMembers & FeatureConfiguration;
export interface SimpleRandomFeatureConfigurationStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): SimpleRandomFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SimpleRandomFeatureConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration. */
export interface SpikeConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  getCrystalBeamTarget(): j_net_minecraft_core.BlockPos | null;
  getSpikes(): JavaList<j_net_minecraft_world_level_levelgen_feature.SpikeFeature_EndSpike>;
  isCrystalInvulnerable(): boolean;
}
export type SpikeConfiguration = SpikeConfigurationMembers & FeatureConfiguration;
export interface SpikeConfigurationStatics {
  new(arg0: boolean, arg1: JavaList<j_net_minecraft_world_level_levelgen_feature.SpikeFeature_EndSpike>, arg2: j_net_minecraft_core.BlockPos | null): SpikeConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpikeConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration. */
export interface SpringConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly holeCount: number;
  readonly requiresBlockBelow: boolean;
  readonly rockCount: number;
  readonly state: j_net_minecraft_world_level_material.FluidState;
  readonly validBlocks: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
}
export type SpringConfiguration = SpringConfigurationMembers & FeatureConfiguration;
export interface SpringConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_material.FluidState, arg1: boolean, arg2: number, arg3: number, arg4: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): SpringConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpringConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration. */
export interface TreeConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly decorators: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>;
  readonly dirtProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly foliagePlacer: j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer;
  readonly foliageProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly forceDirt: boolean;
  readonly ignoreVines: boolean;
  readonly minimumSize: j_net_minecraft_world_level_levelgen_feature_featuresize.FeatureSize;
  readonly rootPlacer: JavaOptional<j_net_minecraft_world_level_levelgen_feature_rootplacers.RootPlacer>;
  readonly trunkPlacer: j_net_minecraft_world_level_levelgen_feature_trunkplacers.TrunkPlacer;
  readonly trunkProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
}
export type TreeConfiguration = TreeConfigurationMembers & FeatureConfiguration;
export interface TreeConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_feature_trunkplacers.TrunkPlacer, arg2: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg3: j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer, arg4: JavaOptional<j_net_minecraft_world_level_levelgen_feature_rootplacers.RootPlacer>, arg5: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg6: j_net_minecraft_world_level_levelgen_feature_featuresize.FeatureSize, arg7: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>, arg8: boolean, arg9: boolean): TreeConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TreeConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration$TreeConfigurationBuilder. */
export interface TreeConfiguration_TreeConfigurationBuilderMembers {
  build(): TreeConfiguration;
  decorators(arg0: JavaList<j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator>): TreeConfiguration_TreeConfigurationBuilder;
  dirt(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): TreeConfiguration_TreeConfigurationBuilder;
  readonly foliageProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  forceDirt(): TreeConfiguration_TreeConfigurationBuilder;
  ignoreVines(): TreeConfiguration_TreeConfigurationBuilder;
  readonly trunkProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
}
export type TreeConfiguration_TreeConfigurationBuilder = TreeConfiguration_TreeConfigurationBuilderMembers;
export interface TreeConfiguration_TreeConfigurationBuilderStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_feature_trunkplacers.TrunkPlacer, arg2: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg3: j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer, arg4: JavaOptional<j_net_minecraft_world_level_levelgen_feature_rootplacers.RootPlacer>, arg5: j_net_minecraft_world_level_levelgen_feature_featuresize.FeatureSize): TreeConfiguration_TreeConfigurationBuilder;
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_feature_trunkplacers.TrunkPlacer, arg2: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg3: j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer, arg4: j_net_minecraft_world_level_levelgen_feature_featuresize.FeatureSize): TreeConfiguration_TreeConfigurationBuilder;
}

/** JVM record net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig. */
export interface TwistingVinesConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, FeatureConfiguration];
  equals(arg0: object): boolean;
  hashCode(): number;
  maxHeight(): number;
  spreadHeight(): number;
  spreadWidth(): number;
  toString(): string;
}
export type TwistingVinesConfig = TwistingVinesConfigMembers & JavaOpaque<"java.lang.Record"> & FeatureConfiguration;
export interface TwistingVinesConfigStatics {
  new(arg0: number, arg1: number, arg2: number): TwistingVinesConfig;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TwistingVinesConfig]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration. */
export interface UnderwaterMagmaConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly floorSearchRange: number;
  readonly placementProbabilityPerValidPosition: number;
  readonly placementRadiusAroundFloor: number;
}
export type UnderwaterMagmaConfiguration = UnderwaterMagmaConfigurationMembers & FeatureConfiguration;
export interface UnderwaterMagmaConfigurationStatics {
  new(arg0: number, arg1: number, arg2: number): UnderwaterMagmaConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [UnderwaterMagmaConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration. */
export interface VegetationPatchConfigurationMembers {
  readonly __javaSupertypes?: readonly [FeatureConfiguration];
  readonly depth: j_net_minecraft_util_valueproviders.IntProvider;
  readonly extraBottomBlockChance: number;
  readonly extraEdgeColumnChance: number;
  readonly groundState: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly replaceable: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  readonly surface: j_net_minecraft_world_level_levelgen_placement.CaveSurface;
  readonly vegetationChance: number;
  readonly vegetationFeature: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  readonly verticalRange: number;
  readonly xzRadius: j_net_minecraft_util_valueproviders.IntProvider;
}
export type VegetationPatchConfiguration = VegetationPatchConfigurationMembers & FeatureConfiguration;
export interface VegetationPatchConfigurationStatics {
  new(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg3: j_net_minecraft_world_level_levelgen_placement.CaveSurface, arg4: j_net_minecraft_util_valueproviders.IntProvider, arg5: number, arg6: number, arg7: number, arg8: j_net_minecraft_util_valueproviders.IntProvider, arg9: number): VegetationPatchConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VegetationPatchConfiguration]>;
}
