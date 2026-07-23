// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM abstract net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize. */
export interface FeatureSizeMembers {
  getSizeAtHeight(arg0: number, arg1: number): number;
  readonly minClippedHeight: (JavaOptionalNumber) & { (): JavaOptionalNumber };
  type(): FeatureSizeType<object>;
}
export type FeatureSize = FeatureSizeMembers;
export interface FeatureSizeStatics {
  new(arg0: JavaOptionalNumber): FeatureSize;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FeatureSize]>;
  readonly MAX_WIDTH: 16;
  minClippedHeightCodec<S /* extends FeatureSize */>(): JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder", [S, JavaOptionalNumber]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.featuresize.FeatureSizeType. */
export interface FeatureSizeTypeMembers<P /* extends FeatureSize */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type FeatureSizeType<P /* extends FeatureSize */ = unknown> = FeatureSizeTypeMembers<P>;
export interface FeatureSizeTypeStatics {
  readonly THREE_LAYERS_FEATURE_SIZE: FeatureSizeType<ThreeLayersFeatureSize>;
  readonly TWO_LAYERS_FEATURE_SIZE: FeatureSizeType<TwoLayersFeatureSize>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.featuresize.ThreeLayersFeatureSize. */
export interface ThreeLayersFeatureSizeMembers {
  readonly __javaSupertypes?: readonly [FeatureSize];
  getSizeAtHeight(arg0: number, arg1: number): number;
  type(): FeatureSizeType<object>;
}
export type ThreeLayersFeatureSize = ThreeLayersFeatureSizeMembers & FeatureSize;
export interface ThreeLayersFeatureSizeStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: JavaOptionalNumber): ThreeLayersFeatureSize;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ThreeLayersFeatureSize]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.featuresize.TwoLayersFeatureSize. */
export interface TwoLayersFeatureSizeMembers {
  readonly __javaSupertypes?: readonly [FeatureSize];
  getSizeAtHeight(arg0: number, arg1: number): number;
  type(): FeatureSizeType<object>;
}
export type TwoLayersFeatureSize = TwoLayersFeatureSizeMembers & FeatureSize;
export interface TwoLayersFeatureSizeStatics {
  new(arg0: number, arg1: number, arg2: number): TwoLayersFeatureSize;
  new(arg0: number, arg1: number, arg2: number, arg3: JavaOptionalNumber): TwoLayersFeatureSize;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TwoLayersFeatureSize]>;
}
