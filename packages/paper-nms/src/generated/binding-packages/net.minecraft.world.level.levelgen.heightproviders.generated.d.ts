// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';

/** JVM class net.minecraft.world.level.levelgen.heightproviders.BiasedToBottomHeight. */
export interface BiasedToBottomHeightMembers {
  readonly __javaSupertypes?: readonly [HeightProvider];
  getType(): HeightProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
  toString(): string;
}
export type BiasedToBottomHeight = BiasedToBottomHeightMembers & HeightProvider;
export interface BiasedToBottomHeightStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BiasedToBottomHeight]>;
  of(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg2: number): BiasedToBottomHeight;
}

/** JVM class net.minecraft.world.level.levelgen.heightproviders.ConstantHeight. */
export interface ConstantHeightMembers {
  readonly __javaSupertypes?: readonly [HeightProvider];
  getType(): HeightProviderType<object>;
  getValue(): j_net_minecraft_world_level_levelgen.VerticalAnchor;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
  toString(): string;
}
export type ConstantHeight = ConstantHeightMembers & HeightProvider;
export interface ConstantHeightStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConstantHeight]>;
  readonly ZERO: ConstantHeight;
  of(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor): ConstantHeight;
}

/** JVM abstract net.minecraft.world.level.levelgen.heightproviders.HeightProvider. */
export interface HeightProviderMembers {
  getType(): HeightProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
}
export type HeightProvider = HeightProviderMembers;
export interface HeightProviderStatics {
  new(): HeightProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HeightProvider]>;
}

/** JVM interface net.minecraft.world.level.levelgen.heightproviders.HeightProviderType. */
export interface HeightProviderTypeMembers<P /* extends HeightProvider */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type HeightProviderType<P /* extends HeightProvider */ = unknown> = HeightProviderTypeMembers<P>;
export interface HeightProviderTypeStatics {
  readonly BIASED_TO_BOTTOM: HeightProviderType<BiasedToBottomHeight>;
  readonly CONSTANT: HeightProviderType<ConstantHeight>;
  readonly TRAPEZOID: HeightProviderType<TrapezoidHeight>;
  readonly UNIFORM: HeightProviderType<UniformHeight>;
  readonly VERY_BIASED_TO_BOTTOM: HeightProviderType<VeryBiasedToBottomHeight>;
  readonly WEIGHTED_LIST: HeightProviderType<WeightedListHeight>;
}

/** JVM class net.minecraft.world.level.levelgen.heightproviders.TrapezoidHeight. */
export interface TrapezoidHeightMembers {
  readonly __javaSupertypes?: readonly [HeightProvider];
  getType(): HeightProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
  toString(): string;
}
export type TrapezoidHeight = TrapezoidHeightMembers & HeightProvider;
export interface TrapezoidHeightStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrapezoidHeight]>;
  of(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor): TrapezoidHeight;
  of(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg2: number): TrapezoidHeight;
}

/** JVM class net.minecraft.world.level.levelgen.heightproviders.UniformHeight. */
export interface UniformHeightMembers {
  readonly __javaSupertypes?: readonly [HeightProvider];
  getType(): HeightProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
  toString(): string;
}
export type UniformHeight = UniformHeightMembers & HeightProvider;
export interface UniformHeightStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [UniformHeight]>;
  of(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor): UniformHeight;
}

/** JVM class net.minecraft.world.level.levelgen.heightproviders.VeryBiasedToBottomHeight. */
export interface VeryBiasedToBottomHeightMembers {
  readonly __javaSupertypes?: readonly [HeightProvider];
  getType(): HeightProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
  toString(): string;
}
export type VeryBiasedToBottomHeight = VeryBiasedToBottomHeightMembers & HeightProvider;
export interface VeryBiasedToBottomHeightStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [VeryBiasedToBottomHeight]>;
  of(arg0: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg1: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg2: number): VeryBiasedToBottomHeight;
}

/** JVM class net.minecraft.world.level.levelgen.heightproviders.WeightedListHeight. */
export interface WeightedListHeightMembers {
  readonly __javaSupertypes?: readonly [HeightProvider];
  getType(): HeightProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_level_levelgen.WorldGenerationContext): number;
}
export type WeightedListHeight = WeightedListHeightMembers & HeightProvider;
export interface WeightedListHeightStatics {
  new(arg0: j_net_minecraft_util_random.WeightedList<HeightProvider>): WeightedListHeight;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeightedListHeight]>;
}
