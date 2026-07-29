// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_stateproviders from './net.minecraft.world.level.levelgen.feature.stateproviders.generated.js';

/** JVM record net.minecraft.world.level.levelgen.feature.rootplacers.AboveRootPlacement. */
export interface AboveRootPlacementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  aboveRootPlacementChance(): number;
  aboveRootProvider(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type AboveRootPlacement = AboveRootPlacementMembers & JavaOpaque<"java.lang.Record">;
export interface AboveRootPlacementStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: number): AboveRootPlacement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AboveRootPlacement]>;
}

/** JVM record net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacement. */
export interface MangroveRootPlacementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  canGrowThrough(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
  equals(arg0: object): boolean;
  hashCode(): number;
  maxRootLength(): number;
  maxRootWidth(): number;
  muddyRootsIn(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
  muddyRootsProvider(): j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  randomSkewChance(): number;
  toString(): string;
}
export type MangroveRootPlacement = MangroveRootPlacementMembers & JavaOpaque<"java.lang.Record">;
export interface MangroveRootPlacementStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg2: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg3: number, arg4: number, arg5: number): MangroveRootPlacement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MangroveRootPlacement]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacer. */
export interface MangroveRootPlacerMembers {
  readonly __javaSupertypes?: readonly [RootPlacer];
  placeRoots(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): boolean;
}
export type MangroveRootPlacer = MangroveRootPlacerMembers & RootPlacer;
export interface MangroveRootPlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg2: JavaOptional<AboveRootPlacement>, arg3: MangroveRootPlacement): MangroveRootPlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MangroveRootPlacer]>;
  readonly ROOT_LENGTH_LIMIT: 15;
  readonly ROOT_WIDTH_LIMIT: 8;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer. */
export interface RootPlacerMembers {
  getTrunkOrigin(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_core.BlockPos;
  placeRoots(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): boolean;
}
export type RootPlacer = RootPlacerMembers;
export interface RootPlacerStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RootPlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacerType. */
export interface RootPlacerTypeMembers<P /* extends RootPlacer */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type RootPlacerType<P /* extends RootPlacer */ = unknown> = RootPlacerTypeMembers<P>;
export interface RootPlacerTypeStatics {
  readonly MANGROVE_ROOT_PLACER: RootPlacerType<MangroveRootPlacer>;
}
