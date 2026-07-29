// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blockpredicates from './net.minecraft.world.level.levelgen.blockpredicates.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_stateproviders from './net.minecraft.world.level.levelgen.feature.stateproviders.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_treedecorators from './net.minecraft.world.level.levelgen.feature.treedecorators.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature. */
export interface AbstractHugeMushroomFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration>): boolean;
}
export type AbstractHugeMushroomFeature = AbstractHugeMushroomFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration>;
export interface AbstractHugeMushroomFeatureStatics {
}

/** JVM class net.minecraft.world.level.levelgen.feature.BambooFeature. */
export interface BambooFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>): boolean;
}
export type BambooFeature = BambooFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>;
export interface BambooFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration]>): BambooFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BasaltColumnsFeature. */
export interface BasaltColumnsFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ColumnFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.ColumnFeatureConfiguration>): boolean;
}
export type BasaltColumnsFeature = BasaltColumnsFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ColumnFeatureConfiguration>;
export interface BasaltColumnsFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.ColumnFeatureConfiguration]>): BasaltColumnsFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BasaltPillarFeature. */
export interface BasaltPillarFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type BasaltPillarFeature = BasaltPillarFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface BasaltPillarFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): BasaltPillarFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BlockBlobFeature. */
export interface BlockBlobFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>): boolean;
}
export type BlockBlobFeature = BlockBlobFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>;
export interface BlockBlobFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration]>): BlockBlobFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BlockColumnFeature. */
export interface BlockColumnFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockColumnConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.BlockColumnConfiguration>): boolean;
}
export type BlockColumnFeature = BlockColumnFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockColumnConfiguration>;
export interface BlockColumnFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.BlockColumnConfiguration]>): BlockColumnFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BlockPileFeature. */
export interface BlockPileFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockPileConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.BlockPileConfiguration>): boolean;
}
export type BlockPileFeature = BlockPileFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockPileConfiguration>;
export interface BlockPileFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.BlockPileConfiguration]>): BlockPileFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BlueIceFeature. */
export interface BlueIceFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type BlueIceFeature = BlueIceFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface BlueIceFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): BlueIceFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.BonusChestFeature. */
export interface BonusChestFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type BonusChestFeature = BonusChestFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface BonusChestFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): BonusChestFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.ChorusPlantFeature. */
export interface ChorusPlantFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type ChorusPlantFeature = ChorusPlantFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface ChorusPlantFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): ChorusPlantFeature;
}

/** JVM record net.minecraft.world.level.levelgen.feature.ConfiguredFeature. */
export interface ConfiguredFeatureMembers<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown, F /* extends Feature<FC> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  config(): FC;
  equals(arg0: object): boolean;
  feature(): F;
  getFeatures(): JavaOpaque<"java.util.stream.Stream", [ConfiguredFeature<object, object>]>;
  hashCode(): number;
  place(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): boolean;
  toString(): string;
}
export type ConfiguredFeature<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown, F /* extends Feature<FC> */ = unknown> = ConfiguredFeatureMembers<FC, F> & JavaOpaque<"java.lang.Record">;
export interface ConfiguredFeatureStatics {
  new<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */, F /* extends Feature<FC> */>(arg0: F, arg1: FC): ConfiguredFeature<FC, F>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<ConfiguredFeature<object, object>>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ConfiguredFeature<object, object>]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<ConfiguredFeature<object, object>>]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.CoralClawFeature. */
export interface CoralClawFeatureMembers {
  readonly __javaSupertypes?: readonly [CoralFeature];
}
export type CoralClawFeature = CoralClawFeatureMembers & CoralFeature;
export interface CoralClawFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): CoralClawFeature;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.CoralFeature. */
export interface CoralFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type CoralFeature = CoralFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface CoralFeatureStatics {
}

/** JVM class net.minecraft.world.level.levelgen.feature.CoralMushroomFeature. */
export interface CoralMushroomFeatureMembers {
  readonly __javaSupertypes?: readonly [CoralFeature];
}
export type CoralMushroomFeature = CoralMushroomFeatureMembers & CoralFeature;
export interface CoralMushroomFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): CoralMushroomFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.CoralTreeFeature. */
export interface CoralTreeFeatureMembers {
  readonly __javaSupertypes?: readonly [CoralFeature];
}
export type CoralTreeFeature = CoralTreeFeatureMembers & CoralFeature;
export interface CoralTreeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): CoralTreeFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.DeltaFeature. */
export interface DeltaFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DeltaFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.DeltaFeatureConfiguration>): boolean;
}
export type DeltaFeature = DeltaFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DeltaFeatureConfiguration>;
export interface DeltaFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.DeltaFeatureConfiguration]>): DeltaFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.DesertWellFeature. */
export interface DesertWellFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type DesertWellFeature = DesertWellFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface DesertWellFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): DesertWellFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.DiskFeature. */
export interface DiskFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DiskConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.DiskConfiguration>): boolean;
}
export type DiskFeature = DiskFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DiskConfiguration>;
export interface DiskFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.DiskConfiguration]>): DiskFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.DripstoneClusterFeature. */
export interface DripstoneClusterFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DripstoneClusterConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.DripstoneClusterConfiguration>): boolean;
}
export type DripstoneClusterFeature = DripstoneClusterFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DripstoneClusterConfiguration>;
export interface DripstoneClusterFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.DripstoneClusterConfiguration]>): DripstoneClusterFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.DripstoneUtils. */
export interface DripstoneUtilsMembers {
}
export type DripstoneUtils = DripstoneUtilsMembers;
export interface DripstoneUtilsStatics {
  new(): DripstoneUtils;
  isDripstoneBase(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isDripstoneBaseOrLava(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isEmptyOrWater(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isEmptyOrWaterOrLava(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isNeitherEmptyNorWater(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.levelgen.feature.EndGatewayFeature. */
export interface EndGatewayFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.EndGatewayConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.EndGatewayConfiguration>): boolean;
}
export type EndGatewayFeature = EndGatewayFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.EndGatewayConfiguration>;
export interface EndGatewayFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.EndGatewayConfiguration]>): EndGatewayFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.EndIslandFeature. */
export interface EndIslandFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type EndIslandFeature = EndIslandFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface EndIslandFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): EndIslandFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.EndPlatformFeature. */
export interface EndPlatformFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type EndPlatformFeature = EndPlatformFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface EndPlatformFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): EndPlatformFeature;
  createEndPlatform(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
  createEndPlatform(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: boolean, arg3: j_net_minecraft_world_entity.Entity | null): void;
}

/** JVM class net.minecraft.world.level.levelgen.feature.EndPodiumFeature. */
export interface EndPodiumFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type EndPodiumFeature = EndPodiumFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface EndPodiumFeatureStatics {
  new(arg0: boolean): EndPodiumFeature;
  readonly CORNER_ROUNDING: 0.5;
  readonly PODIUM_PILLAR_HEIGHT: 4;
  readonly PODIUM_RADIUS: 4;
  readonly RIM_RADIUS: 1;
  getLocation(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
}

/** JVM class net.minecraft.world.level.levelgen.feature.FallenTreeFeature. */
export interface FallenTreeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.FallenTreeConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.FallenTreeConfiguration>): boolean;
}
export type FallenTreeFeature = FallenTreeFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.FallenTreeConfiguration>;
export interface FallenTreeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.FallenTreeConfiguration]>): FallenTreeFeature;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.Feature. */
export interface FeatureMembers<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> {
  configuredCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ConfiguredFeature<FC, Feature<FC>>]>;
  place(arg0: FeaturePlaceContext<FC>): boolean;
  place(arg0: FC, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_core.BlockPos): boolean;
}
export type Feature<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> = FeatureMembers<FC>;
export interface FeatureStatics {
  readonly BAMBOO: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>;
  readonly BASALT_COLUMNS: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ColumnFeatureConfiguration>;
  readonly BASALT_PILLAR: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly BLOCK_COLUMN: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockColumnConfiguration>;
  readonly BLOCK_PILE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockPileConfiguration>;
  readonly BLUE_ICE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly BONUS_CHEST: BonusChestFeature;
  readonly CHORUS_PLANT: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly CORAL_CLAW: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly CORAL_MUSHROOM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly CORAL_TREE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly DELTA_FEATURE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DeltaFeatureConfiguration>;
  readonly DESERT_WELL: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly DISK: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DiskConfiguration>;
  readonly DRIPSTONE_CLUSTER: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.DripstoneClusterConfiguration>;
  readonly END_GATEWAY: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.EndGatewayConfiguration>;
  readonly END_ISLAND: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly END_PLATFORM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly END_SPIKE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SpikeConfiguration>;
  readonly FALLEN_TREE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.FallenTreeConfiguration>;
  readonly FILL_LAYER: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.LayerConfiguration>;
  readonly FLOWER: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration>;
  readonly FOREST_ROCK: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>;
  readonly FOSSIL: Feature<FossilFeatureConfiguration>;
  readonly FREEZE_TOP_LAYER: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly GEODE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.GeodeConfiguration>;
  readonly GLOWSTONE_BLOB: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly HUGE_BROWN_MUSHROOM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration>;
  readonly HUGE_FUNGUS: Feature<HugeFungusConfiguration>;
  readonly HUGE_RED_MUSHROOM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration>;
  readonly ICEBERG: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>;
  readonly ICE_SPIKE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly KELP: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly LAKE: Feature<LakeFeature_Configuration>;
  readonly LARGE_DRIPSTONE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.LargeDripstoneConfiguration>;
  readonly MONSTER_ROOM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly MULTIFACE_GROWTH: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.MultifaceGrowthConfiguration>;
  readonly NETHER_FOREST_VEGETATION: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NetherForestVegetationConfig>;
  readonly NO_BONEMEAL_FLOWER: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration>;
  readonly NO_OP: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly ORE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>;
  readonly POINTED_DRIPSTONE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.PointedDripstoneConfiguration>;
  readonly RANDOM_BOOLEAN_SELECTOR: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomBooleanFeatureConfiguration>;
  readonly RANDOM_PATCH: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration>;
  readonly RANDOM_SELECTOR: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomFeatureConfiguration>;
  readonly REPLACE_BLOBS: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceSphereConfiguration>;
  readonly REPLACE_SINGLE_BLOCK: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceBlockConfiguration>;
  readonly ROOT_SYSTEM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RootSystemConfiguration>;
  readonly SCATTERED_ORE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>;
  readonly SCULK_PATCH: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SculkPatchConfiguration>;
  readonly SEAGRASS: SeagrassFeature;
  readonly SEA_PICKLE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.CountConfiguration>;
  readonly SIMPLE_BLOCK: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleBlockConfiguration>;
  readonly SIMPLE_RANDOM_SELECTOR: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleRandomFeatureConfiguration>;
  readonly SPRING: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SpringConfiguration>;
  readonly TREE: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration>;
  readonly TWISTING_VINES: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.TwistingVinesConfig>;
  readonly UNDERWATER_MAGMA: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.UnderwaterMagmaConfiguration>;
  readonly VEGETATION_PATCH: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration>;
  readonly VINES: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly VOID_START_PLATFORM: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  readonly WATERLOGGED_VEGETATION_PATCH: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration>;
  readonly WEEPING_VINES: Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
  checkNeighbors(arg0: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg1: j_net_minecraft_core.BlockPos, arg2: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  isAdjacentToAir(arg0: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg1: j_net_minecraft_core.BlockPos): boolean;
  isDirt(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isGrassOrDirt(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  isReplaceable(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.FeatureCountTracker. */
export interface FeatureCountTrackerMembers {
}
export type FeatureCountTracker = FeatureCountTrackerMembers;
export interface FeatureCountTrackerStatics {
  new(): FeatureCountTracker;
  chunkDecorated(arg0: j_net_minecraft_server_level.ServerLevel): void;
  clearCounts(): void;
  featurePlaced(arg0: j_net_minecraft_server_level.ServerLevel, arg1: ConfiguredFeature<object, object>, arg2: JavaOptional<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): void;
  logCounts(): void;
}

/** JVM class net.minecraft.world.level.levelgen.feature.FeaturePlaceContext. */
export interface FeaturePlaceContextMembers<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> {
  chunkGenerator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  config(): FC;
  level(): j_net_minecraft_world_level.WorldGenLevel;
  origin(): j_net_minecraft_core.BlockPos;
  random(): j_net_minecraft_util.RandomSource;
  topFeature(): JavaOptional<ConfiguredFeature<object, object>>;
}
export type FeaturePlaceContext<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> = FeaturePlaceContextMembers<FC>;
export interface FeaturePlaceContextStatics {
  new<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */>(arg0: JavaOptional<ConfiguredFeature<object, object>>, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_core.BlockPos, arg5: FC): FeaturePlaceContext<FC>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.FillLayerFeature. */
export interface FillLayerFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.LayerConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.LayerConfiguration>): boolean;
}
export type FillLayerFeature = FillLayerFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.LayerConfiguration>;
export interface FillLayerFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.LayerConfiguration]>): FillLayerFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.FossilFeature. */
export interface FossilFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<FossilFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<FossilFeatureConfiguration>): boolean;
}
export type FossilFeature = FossilFeatureMembers & Feature<FossilFeatureConfiguration>;
export interface FossilFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [FossilFeatureConfiguration]>): FossilFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration. */
export interface FossilFeatureConfigurationMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration];
  readonly fossilProcessors: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly fossilStructures: JavaList<j_net_minecraft_resources.ResourceLocation>;
  readonly maxEmptyCornersAllowed: number;
  readonly overlayProcessors: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly overlayStructures: JavaList<j_net_minecraft_resources.ResourceLocation>;
}
export type FossilFeatureConfiguration = FossilFeatureConfigurationMembers & j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration;
export interface FossilFeatureConfigurationStatics {
  new(arg0: JavaList<j_net_minecraft_resources.ResourceLocation>, arg1: JavaList<j_net_minecraft_resources.ResourceLocation>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>, arg4: number): FossilFeatureConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FossilFeatureConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.GeodeFeature. */
export interface GeodeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.GeodeConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.GeodeConfiguration>): boolean;
}
export type GeodeFeature = GeodeFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.GeodeConfiguration>;
export interface GeodeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.GeodeConfiguration]>): GeodeFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.GlowstoneFeature. */
export interface GlowstoneFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type GlowstoneFeature = GlowstoneFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface GlowstoneFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): GlowstoneFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.HugeBrownMushroomFeature. */
export interface HugeBrownMushroomFeatureMembers {
  readonly __javaSupertypes?: readonly [AbstractHugeMushroomFeature];
}
export type HugeBrownMushroomFeature = HugeBrownMushroomFeatureMembers & AbstractHugeMushroomFeature;
export interface HugeBrownMushroomFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration]>): HugeBrownMushroomFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration. */
export interface HugeFungusConfigurationMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration];
  readonly decorState: j_net_minecraft_world_level_block_state.BlockState;
  readonly hatState: j_net_minecraft_world_level_block_state.BlockState;
  readonly planted: boolean;
  readonly replaceableBlocks: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3;
  readonly stemState: j_net_minecraft_world_level_block_state.BlockState;
  readonly validBaseState: j_net_minecraft_world_level_block_state.BlockState;
}
export type HugeFungusConfiguration = HugeFungusConfigurationMembers & j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration;
export interface HugeFungusConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg5: boolean): HugeFungusConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HugeFungusConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.HugeFungusFeature. */
export interface HugeFungusFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<HugeFungusConfiguration>];
  place(arg0: FeaturePlaceContext<HugeFungusConfiguration>): boolean;
}
export type HugeFungusFeature = HugeFungusFeatureMembers & Feature<HugeFungusConfiguration>;
export interface HugeFungusFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [HugeFungusConfiguration]>): HugeFungusFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.HugeRedMushroomFeature. */
export interface HugeRedMushroomFeatureMembers {
  readonly __javaSupertypes?: readonly [AbstractHugeMushroomFeature];
}
export type HugeRedMushroomFeature = HugeRedMushroomFeatureMembers & AbstractHugeMushroomFeature;
export interface HugeRedMushroomFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.HugeMushroomFeatureConfiguration]>): HugeRedMushroomFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.IcebergFeature. */
export interface IcebergFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>): boolean;
}
export type IcebergFeature = IcebergFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration>;
export interface IcebergFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.BlockStateConfiguration]>): IcebergFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.IceSpikeFeature. */
export interface IceSpikeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type IceSpikeFeature = IceSpikeFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface IceSpikeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): IceSpikeFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.KelpFeature. */
export interface KelpFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type KelpFeature = KelpFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface KelpFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): KelpFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.LakeFeature. */
export interface LakeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<LakeFeature_Configuration>];
  place(arg0: FeaturePlaceContext<LakeFeature_Configuration>): boolean;
}
export type LakeFeature = LakeFeatureMembers & Feature<LakeFeature_Configuration>;
export interface LakeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [LakeFeature_Configuration]>): LakeFeature;
}

/** JVM record net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration. */
export interface LakeFeature_ConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration];
  barrier(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  equals(arg0: object): boolean;
  fluid(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  hashCode(): number;
  toString(): string;
}
export type LakeFeature_Configuration = LakeFeature_ConfigurationMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration;
export interface LakeFeature_ConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): LakeFeature_Configuration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LakeFeature_Configuration]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.LargeDripstoneFeature. */
export interface LargeDripstoneFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.LargeDripstoneConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.LargeDripstoneConfiguration>): boolean;
}
export type LargeDripstoneFeature = LargeDripstoneFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.LargeDripstoneConfiguration>;
export interface LargeDripstoneFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.LargeDripstoneConfiguration]>): LargeDripstoneFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.MonsterRoomFeature. */
export interface MonsterRoomFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type MonsterRoomFeature = MonsterRoomFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface MonsterRoomFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): MonsterRoomFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.MultifaceGrowthFeature. */
export interface MultifaceGrowthFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.MultifaceGrowthConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.MultifaceGrowthConfiguration>): boolean;
}
export type MultifaceGrowthFeature = MultifaceGrowthFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.MultifaceGrowthConfiguration>;
export interface MultifaceGrowthFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.MultifaceGrowthConfiguration]>): MultifaceGrowthFeature;
  placeGrowthIfPossible(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.MultifaceGrowthConfiguration, arg4: j_net_minecraft_util.RandomSource, arg5: JavaList<j_net_minecraft_core.Direction>): boolean;
}

/** JVM class net.minecraft.world.level.levelgen.feature.NetherForestVegetationFeature. */
export interface NetherForestVegetationFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NetherForestVegetationConfig>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NetherForestVegetationConfig>): boolean;
}
export type NetherForestVegetationFeature = NetherForestVegetationFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NetherForestVegetationConfig>;
export interface NetherForestVegetationFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NetherForestVegetationConfig]>): NetherForestVegetationFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.NoOpFeature. */
export interface NoOpFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type NoOpFeature = NoOpFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface NoOpFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): NoOpFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.OreFeature. */
export interface OreFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>): boolean;
}
export type OreFeature = OreFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>;
export interface OreFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration]>): OreFeature;
  canPlaceOre(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration, arg4: j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration_TargetBlockState, arg5: j_net_minecraft_core.BlockPos_MutableBlockPos): boolean;
}

/** JVM class net.minecraft.world.level.levelgen.feature.PointedDripstoneFeature. */
export interface PointedDripstoneFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.PointedDripstoneConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.PointedDripstoneConfiguration>): boolean;
}
export type PointedDripstoneFeature = PointedDripstoneFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.PointedDripstoneConfiguration>;
export interface PointedDripstoneFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.PointedDripstoneConfiguration]>): PointedDripstoneFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.RandomBooleanSelectorFeature. */
export interface RandomBooleanSelectorFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomBooleanFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.RandomBooleanFeatureConfiguration>): boolean;
}
export type RandomBooleanSelectorFeature = RandomBooleanSelectorFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomBooleanFeatureConfiguration>;
export interface RandomBooleanSelectorFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.RandomBooleanFeatureConfiguration]>): RandomBooleanSelectorFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.RandomPatchFeature. */
export interface RandomPatchFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration>): boolean;
}
export type RandomPatchFeature = RandomPatchFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration>;
export interface RandomPatchFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration]>): RandomPatchFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.RandomSelectorFeature. */
export interface RandomSelectorFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.RandomFeatureConfiguration>): boolean;
}
export type RandomSelectorFeature = RandomSelectorFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RandomFeatureConfiguration>;
export interface RandomSelectorFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.RandomFeatureConfiguration]>): RandomSelectorFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.ReplaceBlobsFeature. */
export interface ReplaceBlobsFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceSphereConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceSphereConfiguration>): boolean;
}
export type ReplaceBlobsFeature = ReplaceBlobsFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceSphereConfiguration>;
export interface ReplaceBlobsFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceSphereConfiguration]>): ReplaceBlobsFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.ReplaceBlockFeature. */
export interface ReplaceBlockFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceBlockConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceBlockConfiguration>): boolean;
}
export type ReplaceBlockFeature = ReplaceBlockFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceBlockConfiguration>;
export interface ReplaceBlockFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.ReplaceBlockConfiguration]>): ReplaceBlockFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.RootSystemFeature. */
export interface RootSystemFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RootSystemConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.RootSystemConfiguration>): boolean;
}
export type RootSystemFeature = RootSystemFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.RootSystemConfiguration>;
export interface RootSystemFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.RootSystemConfiguration]>): RootSystemFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.ScatteredOreFeature. */
export interface ScatteredOreFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>): boolean;
}
export type ScatteredOreFeature = ScatteredOreFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.OreConfiguration>;
export interface ScatteredOreFeatureStatics {
}

/** JVM class net.minecraft.world.level.levelgen.feature.SculkPatchFeature. */
export interface SculkPatchFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SculkPatchConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.SculkPatchConfiguration>): boolean;
}
export type SculkPatchFeature = SculkPatchFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SculkPatchConfiguration>;
export interface SculkPatchFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.SculkPatchConfiguration]>): SculkPatchFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SeagrassFeature. */
export interface SeagrassFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>): boolean;
}
export type SeagrassFeature = SeagrassFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration>;
export interface SeagrassFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration]>): SeagrassFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SeaPickleFeature. */
export interface SeaPickleFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.CountConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.CountConfiguration>): boolean;
}
export type SeaPickleFeature = SeaPickleFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.CountConfiguration>;
export interface SeaPickleFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.CountConfiguration]>): SeaPickleFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SimpleBlockFeature. */
export interface SimpleBlockFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleBlockConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleBlockConfiguration>): boolean;
}
export type SimpleBlockFeature = SimpleBlockFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleBlockConfiguration>;
export interface SimpleBlockFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.SimpleBlockConfiguration]>): SimpleBlockFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SimpleRandomSelectorFeature. */
export interface SimpleRandomSelectorFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleRandomFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleRandomFeatureConfiguration>): boolean;
}
export type SimpleRandomSelectorFeature = SimpleRandomSelectorFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SimpleRandomFeatureConfiguration>;
export interface SimpleRandomSelectorFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.SimpleRandomFeatureConfiguration]>): SimpleRandomSelectorFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SnowAndFreezeFeature. */
export interface SnowAndFreezeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type SnowAndFreezeFeature = SnowAndFreezeFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface SnowAndFreezeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): SnowAndFreezeFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SpikeFeature. */
export interface SpikeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SpikeConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.SpikeConfiguration>): boolean;
}
export type SpikeFeature = SpikeFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SpikeConfiguration>;
export interface SpikeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.SpikeConfiguration]>): SpikeFeature;
  readonly NUMBER_OF_SPIKES: 10;
  getSpikesForLevel(arg0: j_net_minecraft_world_level.WorldGenLevel): JavaList<SpikeFeature_EndSpike>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SpikeFeature$EndSpike. */
export interface SpikeFeature_EndSpikeMembers {
  getCenterX(): number;
  getCenterZ(): number;
  getHeight(): number;
  getRadius(): number;
  getTopBoundingBox(): j_net_minecraft_world_phys.AABB;
  isCenterWithinChunk(arg0: j_net_minecraft_core.BlockPos): boolean;
  isGuarded(): boolean;
}
export type SpikeFeature_EndSpike = SpikeFeature_EndSpikeMembers;
export interface SpikeFeature_EndSpikeStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): SpikeFeature_EndSpike;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpikeFeature_EndSpike]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.SpringFeature. */
export interface SpringFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SpringConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.SpringConfiguration>): boolean;
}
export type SpringFeature = SpringFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.SpringConfiguration>;
export interface SpringFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.SpringConfiguration]>): SpringFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.TreeFeature. */
export interface TreeFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration>): boolean;
}
export type TreeFeature = TreeFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration>;
export interface TreeFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration]>): TreeFeature;
  getLowestTrunkOrRootOfTree(arg0: j_net_minecraft_world_level_levelgen_feature_treedecorators.TreeDecorator_Context): JavaList<j_net_minecraft_core.BlockPos>;
  isAirOrLeaves(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  isVine(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  validTreePos(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM class net.minecraft.world.level.levelgen.feature.TwistingVinesFeature. */
export interface TwistingVinesFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.TwistingVinesConfig>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.TwistingVinesConfig>): boolean;
}
export type TwistingVinesFeature = TwistingVinesFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.TwistingVinesConfig>;
export interface TwistingVinesFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.TwistingVinesConfig]>): TwistingVinesFeature;
  placeWeepingVinesColumn(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos_MutableBlockPos, arg3: number, arg4: number, arg5: number): void;
}

/** JVM class net.minecraft.world.level.levelgen.feature.UnderwaterMagmaFeature. */
export interface UnderwaterMagmaFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.UnderwaterMagmaConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.UnderwaterMagmaConfiguration>): boolean;
}
export type UnderwaterMagmaFeature = UnderwaterMagmaFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.UnderwaterMagmaConfiguration>;
export interface UnderwaterMagmaFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.UnderwaterMagmaConfiguration]>): UnderwaterMagmaFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.VegetationPatchFeature. */
export interface VegetationPatchFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration>): boolean;
}
export type VegetationPatchFeature = VegetationPatchFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration>;
export interface VegetationPatchFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration]>): VegetationPatchFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.VinesFeature. */
export interface VinesFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type VinesFeature = VinesFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface VinesFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): VinesFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.VoidStartPlatformFeature. */
export interface VoidStartPlatformFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type VoidStartPlatformFeature = VoidStartPlatformFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface VoidStartPlatformFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): VoidStartPlatformFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.WaterloggedVegetationPatchFeature. */
export interface WaterloggedVegetationPatchFeatureMembers {
  readonly __javaSupertypes?: readonly [VegetationPatchFeature];
}
export type WaterloggedVegetationPatchFeature = WaterloggedVegetationPatchFeatureMembers & VegetationPatchFeature;
export interface WaterloggedVegetationPatchFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.VegetationPatchConfiguration]>): WaterloggedVegetationPatchFeature;
}

/** JVM class net.minecraft.world.level.levelgen.feature.WeepingVinesFeature. */
export interface WeepingVinesFeatureMembers {
  readonly __javaSupertypes?: readonly [Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>];
  place(arg0: FeaturePlaceContext<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): boolean;
}
export type WeepingVinesFeature = WeepingVinesFeatureMembers & Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>;
export interface WeepingVinesFeatureStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration]>): WeepingVinesFeature;
  placeWeepingVinesColumn(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos_MutableBlockPos, arg3: number, arg4: number, arg5: number): void;
}

/** JVM class net.minecraft.world.level.levelgen.feature.WeightedPlacedFeature. */
export interface WeightedPlacedFeatureMembers {
  readonly chance: number;
  readonly feature: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  place(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): boolean;
}
export type WeightedPlacedFeature = WeightedPlacedFeatureMembers;
export interface WeightedPlacedFeatureStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: number): WeightedPlacedFeature;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WeightedPlacedFeature]>;
}
