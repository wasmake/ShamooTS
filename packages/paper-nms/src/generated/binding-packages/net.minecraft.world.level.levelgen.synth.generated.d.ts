// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';

/** JVM class net.minecraft.world.level.levelgen.synth.BlendedNoise. */
export interface BlendedNoiseMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen.DensityFunction_SimpleFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<j_net_minecraft_world_level_levelgen.DensityFunction>;
  compute(arg0: j_net_minecraft_world_level_levelgen.DensityFunction_FunctionContext): number;
  maxValue(): number;
  minValue(): number;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
  withNewRandom(arg0: j_net_minecraft_util.RandomSource): BlendedNoise;
}
export type BlendedNoise = BlendedNoiseMembers & j_net_minecraft_world_level_levelgen.DensityFunction_SimpleFunction;
export interface BlendedNoiseStatics {
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BlendedNoise;
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<BlendedNoise>;
  createUnseeded(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): BlendedNoise;
}

/** JVM class net.minecraft.world.level.levelgen.synth.ImprovedNoise. */
export interface ImprovedNoiseMembers {
  noise(arg0: number, arg1: number, arg2: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  noiseWithDerivative(arg0: number, arg1: number, arg2: number, arg3: Array<number>): number;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
  readonly xo: number;
  readonly yo: number;
  readonly zo: number;
}
export type ImprovedNoise = ImprovedNoiseMembers;
export interface ImprovedNoiseStatics {
  new(arg0: j_net_minecraft_util.RandomSource): ImprovedNoise;
}

/** JVM class net.minecraft.world.level.levelgen.synth.NoiseUtils. */
export interface NoiseUtilsMembers {
}
export type NoiseUtils = NoiseUtilsMembers;
export interface NoiseUtilsStatics {
  new(): NoiseUtils;
  biasTowardsExtreme(arg0: number, arg1: number): number;
  parityNoiseOctaveConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: number, arg2: number, arg3: number, arg4: Array<number>): void;
  parityNoiseOctaveConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: number, arg2: number, arg3: number, arg4: Array<number>): void;
}

/** JVM class net.minecraft.world.level.levelgen.synth.NormalNoise. */
export interface NormalNoiseMembers {
  getValue(arg0: number, arg1: number, arg2: number): number;
  maxValue(): number;
  parameters(): NormalNoise_NoiseParameters;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
}
export type NormalNoise = NormalNoiseMembers;
export interface NormalNoiseStatics {
  create(arg0: j_net_minecraft_util.RandomSource, arg1: number, ...arg2: Array<number>): NormalNoise;
  create(arg0: j_net_minecraft_util.RandomSource, arg1: NormalNoise_NoiseParameters): NormalNoise;
  createLegacyNetherBiome(arg0: j_net_minecraft_util.RandomSource, arg1: NormalNoise_NoiseParameters): NormalNoise;
}

/** JVM record net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters. */
export interface NormalNoise_NoiseParametersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  amplitudes(): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">;
  equals(arg0: object): boolean;
  firstOctave(): number;
  hashCode(): number;
  toString(): string;
}
export type NormalNoise_NoiseParameters = NormalNoise_NoiseParametersMembers & JavaOpaque<"java.lang.Record">;
export interface NormalNoise_NoiseParametersStatics {
  new(arg0: number, arg1: number, ...arg2: Array<number>): NormalNoise_NoiseParameters;
  new(arg0: number, arg1: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">): NormalNoise_NoiseParameters;
  new(arg0: number, arg1: JavaList<number>): NormalNoise_NoiseParameters;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<NormalNoise_NoiseParameters>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NormalNoise_NoiseParameters]>;
}

/** JVM class net.minecraft.world.level.levelgen.synth.PerlinNoise. */
export interface PerlinNoiseMembers {
  getOctaveNoise(arg0: number): ImprovedNoise | null;
  getValue(arg0: number, arg1: number, arg2: number): number;
  getValue(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
  maxBrokenValue(arg0: number): number;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
}
export type PerlinNoise = PerlinNoiseMembers;
export interface PerlinNoiseStatics {
  create(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, ...arg3: Array<number>): PerlinNoise;
  create(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">): PerlinNoise;
  create(arg0: j_net_minecraft_util.RandomSource, arg1: JavaList<number>): PerlinNoise;
  create(arg0: j_net_minecraft_util.RandomSource, arg1: JavaOpaque<"java.util.stream.IntStream">): PerlinNoise;
  createLegacyForBlendedNoise(arg0: j_net_minecraft_util.RandomSource, arg1: JavaOpaque<"java.util.stream.IntStream">): PerlinNoise;
  createLegacyForLegacyNetherBiome(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleList">): PerlinNoise;
  wrap(arg0: number): number;
}

/** JVM class net.minecraft.world.level.levelgen.synth.PerlinSimplexNoise. */
export interface PerlinSimplexNoiseMembers {
  getValue(arg0: number, arg1: number, arg2: boolean): number;
}
export type PerlinSimplexNoise = PerlinSimplexNoiseMembers;
export interface PerlinSimplexNoiseStatics {
  new(arg0: j_net_minecraft_util.RandomSource, arg1: JavaList<number>): PerlinSimplexNoise;
}

/** JVM class net.minecraft.world.level.levelgen.synth.SimplexNoise. */
export interface SimplexNoiseMembers {
  getValue(arg0: number, arg1: number): number;
  getValue(arg0: number, arg1: number, arg2: number): number;
  readonly xo: number;
  readonly yo: number;
  readonly zo: number;
}
export type SimplexNoise = SimplexNoiseMembers;
export interface SimplexNoiseStatics {
  new(arg0: j_net_minecraft_util.RandomSource): SimplexNoise;
}
