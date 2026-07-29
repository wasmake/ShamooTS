// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_foliageplacers from './net.minecraft.world.level.levelgen.feature.foliageplacers.generated.js';

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.BendingTrunkPlacer. */
export interface BendingTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type BendingTrunkPlacer = BendingTrunkPlacerMembers & TrunkPlacer;
export interface BendingTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_util_valueproviders.IntProvider): BendingTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BendingTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.CherryTrunkPlacer. */
export interface CherryTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type CherryTrunkPlacer = CherryTrunkPlacerMembers & TrunkPlacer;
export interface CherryTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_util_valueproviders.IntProvider, arg4: j_net_minecraft_util_valueproviders.IntProvider, arg5: j_net_minecraft_util_valueproviders.UniformInt, arg6: j_net_minecraft_util_valueproviders.IntProvider): CherryTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CherryTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.DarkOakTrunkPlacer. */
export interface DarkOakTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type DarkOakTrunkPlacer = DarkOakTrunkPlacerMembers & TrunkPlacer;
export interface DarkOakTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number): DarkOakTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DarkOakTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.FancyTrunkPlacer. */
export interface FancyTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type FancyTrunkPlacer = FancyTrunkPlacerMembers & TrunkPlacer;
export interface FancyTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number): FancyTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FancyTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.ForkingTrunkPlacer. */
export interface ForkingTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type ForkingTrunkPlacer = ForkingTrunkPlacerMembers & TrunkPlacer;
export interface ForkingTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number): ForkingTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ForkingTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.GiantTrunkPlacer. */
export interface GiantTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type GiantTrunkPlacer = GiantTrunkPlacerMembers & TrunkPlacer;
export interface GiantTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number): GiantTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GiantTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.MegaJungleTrunkPlacer. */
export interface MegaJungleTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [GiantTrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type MegaJungleTrunkPlacer = MegaJungleTrunkPlacerMembers & GiantTrunkPlacer;
export interface MegaJungleTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number): MegaJungleTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MegaJungleTrunkPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.StraightTrunkPlacer. */
export interface StraightTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type StraightTrunkPlacer = StraightTrunkPlacerMembers & TrunkPlacer;
export interface StraightTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number): StraightTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StraightTrunkPlacer]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer. */
export interface TrunkPlacerMembers {
  getTreeHeight(arg0: j_net_minecraft_util.RandomSource): number;
  isFree(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type TrunkPlacer = TrunkPlacerMembers;
export interface TrunkPlacerStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TrunkPlacer]>;
  readonly MAX_HEIGHT: 80;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacerType. */
export interface TrunkPlacerTypeMembers<P /* extends TrunkPlacer */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type TrunkPlacerType<P /* extends TrunkPlacer */ = unknown> = TrunkPlacerTypeMembers<P>;
export interface TrunkPlacerTypeStatics {
  readonly BENDING_TRUNK_PLACER: TrunkPlacerType<BendingTrunkPlacer>;
  readonly CHERRY_TRUNK_PLACER: TrunkPlacerType<CherryTrunkPlacer>;
  readonly DARK_OAK_TRUNK_PLACER: TrunkPlacerType<DarkOakTrunkPlacer>;
  readonly FANCY_TRUNK_PLACER: TrunkPlacerType<FancyTrunkPlacer>;
  readonly FORKING_TRUNK_PLACER: TrunkPlacerType<ForkingTrunkPlacer>;
  readonly GIANT_TRUNK_PLACER: TrunkPlacerType<GiantTrunkPlacer>;
  readonly MEGA_JUNGLE_TRUNK_PLACER: TrunkPlacerType<MegaJungleTrunkPlacer>;
  readonly STRAIGHT_TRUNK_PLACER: TrunkPlacerType<StraightTrunkPlacer>;
  readonly UPWARDS_BRANCHING_TRUNK_PLACER: TrunkPlacerType<UpwardsBranchingTrunkPlacer>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.trunkplacers.UpwardsBranchingTrunkPlacer. */
export interface UpwardsBranchingTrunkPlacerMembers {
  readonly __javaSupertypes?: readonly [TrunkPlacer];
  placeTrunk(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): JavaList<j_net_minecraft_world_level_levelgen_feature_foliageplacers.FoliagePlacer_FoliageAttachment>;
}
export type UpwardsBranchingTrunkPlacer = UpwardsBranchingTrunkPlacerMembers & TrunkPlacer;
export interface UpwardsBranchingTrunkPlacerStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_util_valueproviders.IntProvider, arg4: number, arg5: j_net_minecraft_util_valueproviders.IntProvider, arg6: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): UpwardsBranchingTrunkPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [UpwardsBranchingTrunkPlacer]>;
}
