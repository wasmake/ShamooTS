// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';

/** JVM class net.minecraft.util.valueproviders.BiasedToBottomInt. */
export interface BiasedToBottomIntMembers {
  readonly __javaSupertypes?: readonly [IntProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type BiasedToBottomInt = BiasedToBottomIntMembers & IntProvider;
export interface BiasedToBottomIntStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BiasedToBottomInt]>;
  of(arg0: number, arg1: number): BiasedToBottomInt;
}

/** JVM class net.minecraft.util.valueproviders.ClampedInt. */
export interface ClampedIntMembers {
  readonly __javaSupertypes?: readonly [IntProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
}
export type ClampedInt = ClampedIntMembers & IntProvider;
export interface ClampedIntStatics {
  new(arg0: IntProvider, arg1: number, arg2: number): ClampedInt;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClampedInt]>;
  of(arg0: IntProvider, arg1: number, arg2: number): ClampedInt;
}

/** JVM class net.minecraft.util.valueproviders.ClampedNormalFloat. */
export interface ClampedNormalFloatMembers {
  readonly __javaSupertypes?: readonly [FloatProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): FloatProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type ClampedNormalFloat = ClampedNormalFloatMembers & FloatProvider;
export interface ClampedNormalFloatStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClampedNormalFloat]>;
  of(arg0: number, arg1: number, arg2: number, arg3: number): ClampedNormalFloat;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number): number;
}

/** JVM class net.minecraft.util.valueproviders.ClampedNormalInt. */
export interface ClampedNormalIntMembers {
  readonly __javaSupertypes?: readonly [IntProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type ClampedNormalInt = ClampedNormalIntMembers & IntProvider;
export interface ClampedNormalIntStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClampedNormalInt]>;
  of(arg0: number, arg1: number, arg2: number, arg3: number): ClampedNormalInt;
  sample(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number): number;
}

/** JVM class net.minecraft.util.valueproviders.ConstantFloat. */
export interface ConstantFloatMembers {
  readonly __javaSupertypes?: readonly [FloatProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): FloatProviderType<object>;
  getValue(): number;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type ConstantFloat = ConstantFloatMembers & FloatProvider;
export interface ConstantFloatStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConstantFloat]>;
  readonly ZERO: ConstantFloat;
  of(arg0: number): ConstantFloat;
}

/** JVM class net.minecraft.util.valueproviders.ConstantInt. */
export interface ConstantIntMembers {
  readonly __javaSupertypes?: readonly [IntProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  getValue(): number;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type ConstantInt = ConstantIntMembers & IntProvider;
export interface ConstantIntStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConstantInt]>;
  readonly ZERO: ConstantInt;
  of(arg0: number): ConstantInt;
}

/** JVM abstract net.minecraft.util.valueproviders.FloatProvider. */
export interface FloatProviderMembers {
  readonly __javaSupertypes?: readonly [SampledFloat];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): FloatProviderType<object>;
}
export type FloatProvider = FloatProviderMembers & SampledFloat;
export interface FloatProviderStatics {
  new(): FloatProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FloatProvider]>;
  codec(arg0: number, arg1: number): JavaOpaque<"com.mojang.serialization.Codec", [FloatProvider]>;
}

/** JVM interface net.minecraft.util.valueproviders.FloatProviderType. */
export interface FloatProviderTypeMembers<P /* extends FloatProvider */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type FloatProviderType<P /* extends FloatProvider */ = unknown> = FloatProviderTypeMembers<P>;
export interface FloatProviderTypeStatics {
  readonly CLAMPED_NORMAL: FloatProviderType<ClampedNormalFloat>;
  readonly CONSTANT: FloatProviderType<ConstantFloat>;
  readonly TRAPEZOID: FloatProviderType<TrapezoidFloat>;
  readonly UNIFORM: FloatProviderType<UniformFloat>;
  register<P /* extends FloatProvider */>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [P]>): FloatProviderType<P>;
}

/** JVM abstract net.minecraft.util.valueproviders.IntProvider. */
export interface IntProviderMembers {
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
}
export type IntProvider = IntProviderMembers;
export interface IntProviderStatics {
  new(): IntProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [IntProvider]>;
  readonly NON_NEGATIVE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [IntProvider]>;
  readonly POSITIVE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [IntProvider]>;
  codec(arg0: number, arg1: number): JavaOpaque<"com.mojang.serialization.Codec", [IntProvider]>;
  validateCodec<T /* extends IntProvider */>(arg0: number, arg1: number, arg2: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
}

/** JVM interface net.minecraft.util.valueproviders.IntProviderType. */
export interface IntProviderTypeMembers<P /* extends IntProvider */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type IntProviderType<P /* extends IntProvider */ = unknown> = IntProviderTypeMembers<P>;
export interface IntProviderTypeStatics {
  readonly BIASED_TO_BOTTOM: IntProviderType<BiasedToBottomInt>;
  readonly CLAMPED: IntProviderType<ClampedInt>;
  readonly CLAMPED_NORMAL: IntProviderType<ClampedNormalInt>;
  readonly CONSTANT: IntProviderType<ConstantInt>;
  readonly UNIFORM: IntProviderType<UniformInt>;
  readonly WEIGHTED_LIST: IntProviderType<WeightedListInt>;
  register<P /* extends IntProvider */>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [P]>): IntProviderType<P>;
}

/** JVM class net.minecraft.util.valueproviders.MultipliedFloats. */
export interface MultipliedFloatsMembers {
  readonly __javaSupertypes?: readonly [SampledFloat];
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type MultipliedFloats = MultipliedFloatsMembers & SampledFloat;
export interface MultipliedFloatsStatics {
  new(...arg0: Array<SampledFloat>): MultipliedFloats;
}

/** JVM interface net.minecraft.util.valueproviders.SampledFloat. */
export interface SampledFloatMembers {
  sample(arg0: j_net_minecraft_util.RandomSource): number;
}
export type SampledFloat = SampledFloatMembers;
export interface SampledFloatStatics {
}

/** JVM class net.minecraft.util.valueproviders.TrapezoidFloat. */
export interface TrapezoidFloatMembers {
  readonly __javaSupertypes?: readonly [FloatProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): FloatProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type TrapezoidFloat = TrapezoidFloatMembers & FloatProvider;
export interface TrapezoidFloatStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrapezoidFloat]>;
  of(arg0: number, arg1: number, arg2: number): TrapezoidFloat;
}

/** JVM class net.minecraft.util.valueproviders.UniformFloat. */
export interface UniformFloatMembers {
  readonly __javaSupertypes?: readonly [FloatProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): FloatProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type UniformFloat = UniformFloatMembers & FloatProvider;
export interface UniformFloatStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [UniformFloat]>;
  of(arg0: number, arg1: number): UniformFloat;
}

/** JVM class net.minecraft.util.valueproviders.UniformInt. */
export interface UniformIntMembers {
  readonly __javaSupertypes?: readonly [IntProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
  toString(): string;
}
export type UniformInt = UniformIntMembers & IntProvider;
export interface UniformIntStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [UniformInt]>;
  of(arg0: number, arg1: number): UniformInt;
}

/** JVM class net.minecraft.util.valueproviders.WeightedListInt. */
export interface WeightedListIntMembers {
  readonly __javaSupertypes?: readonly [IntProvider];
  getMaxValue(): number;
  getMinValue(): number;
  getType(): IntProviderType<object>;
  sample(arg0: j_net_minecraft_util.RandomSource): number;
}
export type WeightedListInt = WeightedListIntMembers & IntProvider;
export interface WeightedListIntStatics {
  new(arg0: j_net_minecraft_util_random.WeightedList<IntProvider>): WeightedListInt;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeightedListInt]>;
}
