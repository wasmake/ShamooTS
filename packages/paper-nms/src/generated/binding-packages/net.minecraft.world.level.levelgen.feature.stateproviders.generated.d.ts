// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blockpredicates from './net.minecraft.world.level.levelgen.blockpredicates.generated.js';
import type * as j_net_minecraft_world_level_levelgen_synth from './net.minecraft.world.level.levelgen.synth.generated.js';

/** JVM abstract net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider. */
export interface BlockStateProviderMembers {
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type BlockStateProvider = BlockStateProviderMembers;
export interface BlockStateProviderStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockStateProvider]>;
  simple(arg0: j_net_minecraft_world_level_block.Block): SimpleStateProvider;
  simple(arg0: j_net_minecraft_world_level_block_state.BlockState): SimpleStateProvider;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProviderType. */
export interface BlockStateProviderTypeMembers<P /* extends BlockStateProvider */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type BlockStateProviderType<P /* extends BlockStateProvider */ = unknown> = BlockStateProviderTypeMembers<P>;
export interface BlockStateProviderTypeStatics {
  readonly DUAL_NOISE_PROVIDER: BlockStateProviderType<DualNoiseProvider>;
  readonly NOISE_PROVIDER: BlockStateProviderType<NoiseProvider>;
  readonly NOISE_THRESHOLD_PROVIDER: BlockStateProviderType<NoiseThresholdProvider>;
  readonly RANDOMIZED_INT_STATE_PROVIDER: BlockStateProviderType<RandomizedIntStateProvider>;
  readonly ROTATED_BLOCK_PROVIDER: BlockStateProviderType<RotatedBlockProvider>;
  readonly SIMPLE_STATE_PROVIDER: BlockStateProviderType<SimpleStateProvider>;
  readonly WEIGHTED_STATE_PROVIDER: BlockStateProviderType<WeightedStateProvider>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.DualNoiseProvider. */
export interface DualNoiseProviderMembers {
  readonly __javaSupertypes?: readonly [NoiseProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type DualNoiseProvider = DualNoiseProviderMembers & NoiseProvider;
export interface DualNoiseProviderStatics {
  new(arg0: j_net_minecraft_util.InclusiveRange<number>, arg1: j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters, arg2: number, arg3: bigint, arg4: j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters, arg5: number, arg6: JavaList<j_net_minecraft_world_level_block_state.BlockState>): DualNoiseProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DualNoiseProvider]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider. */
export interface NoiseBasedStateProviderMembers {
  readonly __javaSupertypes?: readonly [BlockStateProvider];
}
export type NoiseBasedStateProvider = NoiseBasedStateProviderMembers & BlockStateProvider;
export interface NoiseBasedStateProviderStatics {
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.NoiseProvider. */
export interface NoiseProviderMembers {
  readonly __javaSupertypes?: readonly [NoiseBasedStateProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type NoiseProvider = NoiseProviderMembers & NoiseBasedStateProvider;
export interface NoiseProviderStatics {
  new(arg0: bigint, arg1: j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters, arg2: number, arg3: JavaList<j_net_minecraft_world_level_block_state.BlockState>): NoiseProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoiseProvider]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.NoiseThresholdProvider. */
export interface NoiseThresholdProviderMembers {
  readonly __javaSupertypes?: readonly [NoiseBasedStateProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type NoiseThresholdProvider = NoiseThresholdProviderMembers & NoiseBasedStateProvider;
export interface NoiseThresholdProviderStatics {
  new(arg0: bigint, arg1: j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_world_level_block_state.BlockState, arg6: JavaList<j_net_minecraft_world_level_block_state.BlockState>, arg7: JavaList<j_net_minecraft_world_level_block_state.BlockState>): NoiseThresholdProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoiseThresholdProvider]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.RandomizedIntStateProvider. */
export interface RandomizedIntStateProviderMembers {
  readonly __javaSupertypes?: readonly [BlockStateProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type RandomizedIntStateProvider = RandomizedIntStateProviderMembers & BlockStateProvider;
export interface RandomizedIntStateProviderStatics {
  new(arg0: BlockStateProvider, arg1: string, arg2: j_net_minecraft_util_valueproviders.IntProvider): RandomizedIntStateProvider;
  new(arg0: BlockStateProvider, arg1: j_net_minecraft_world_level_block_state_properties.IntegerProperty, arg2: j_net_minecraft_util_valueproviders.IntProvider): RandomizedIntStateProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RandomizedIntStateProvider]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.RotatedBlockProvider. */
export interface RotatedBlockProviderMembers {
  readonly __javaSupertypes?: readonly [BlockStateProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type RotatedBlockProvider = RotatedBlockProviderMembers & BlockStateProvider;
export interface RotatedBlockProviderStatics {
  new(arg0: j_net_minecraft_world_level_block.Block): RotatedBlockProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RotatedBlockProvider]>;
}

/** JVM record net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider. */
export interface RuleBasedBlockStateProviderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  fallback(): BlockStateProvider;
  getState(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  hashCode(): number;
  rules(): JavaList<RuleBasedBlockStateProvider_Rule>;
  toString(): string;
}
export type RuleBasedBlockStateProvider = RuleBasedBlockStateProviderMembers & JavaOpaque<"java.lang.Record">;
export interface RuleBasedBlockStateProviderStatics {
  new(arg0: BlockStateProvider, arg1: JavaList<RuleBasedBlockStateProvider_Rule>): RuleBasedBlockStateProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuleBasedBlockStateProvider]>;
  simple(arg0: j_net_minecraft_world_level_block.Block): RuleBasedBlockStateProvider;
  simple(arg0: BlockStateProvider): RuleBasedBlockStateProvider;
}

/** JVM record net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider$Rule. */
export interface RuleBasedBlockStateProvider_RuleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  ifTrue(): j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3;
  then(): BlockStateProvider;
  toString(): string;
}
export type RuleBasedBlockStateProvider_Rule = RuleBasedBlockStateProvider_RuleMembers & JavaOpaque<"java.lang.Record">;
export interface RuleBasedBlockStateProvider_RuleStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_blockpredicates.BlockPredicate_3, arg1: BlockStateProvider): RuleBasedBlockStateProvider_Rule;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuleBasedBlockStateProvider_Rule]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.SimpleStateProvider. */
export interface SimpleStateProviderMembers {
  readonly __javaSupertypes?: readonly [BlockStateProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type SimpleStateProvider = SimpleStateProviderMembers & BlockStateProvider;
export interface SimpleStateProviderStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SimpleStateProvider]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.stateproviders.WeightedStateProvider. */
export interface WeightedStateProviderMembers {
  readonly __javaSupertypes?: readonly [BlockStateProvider];
  getState(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type WeightedStateProvider = WeightedStateProviderMembers & BlockStateProvider;
export interface WeightedStateProviderStatics {
  new(arg0: j_net_minecraft_util_random.WeightedList_Builder<j_net_minecraft_world_level_block_state.BlockState>): WeightedStateProvider;
  new(arg0: j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level_block_state.BlockState>): WeightedStateProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeightedStateProvider]>;
}
