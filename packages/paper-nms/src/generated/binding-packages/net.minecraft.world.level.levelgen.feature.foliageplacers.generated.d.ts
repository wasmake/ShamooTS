// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.AcaciaFoliagePlacer. */
export interface AcaciaFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type AcaciaFoliagePlacer = AcaciaFoliagePlacerMembers & FoliagePlacer;
export interface AcaciaFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider): AcaciaFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AcaciaFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer. */
export interface BlobFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  readonly height: number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type BlobFoliagePlacer = BlobFoliagePlacerMembers & FoliagePlacer;
export interface BlobFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: number): BlobFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlobFoliagePlacer]>;
  blobParts<P /* extends BlobFoliagePlacer */>(arg0: JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Instance", [P]>): JavaOpaque<"com.mojang.datafixers.Products$P3", [JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Mu", [P]>, j_net_minecraft_util_valueproviders.IntProvider, j_net_minecraft_util_valueproviders.IntProvider, number]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.BushFoliagePlacer. */
export interface BushFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [BlobFoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type BushFoliagePlacer = BushFoliagePlacerMembers & BlobFoliagePlacer;
export interface BushFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: number): BushFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BushFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.CherryFoliagePlacer. */
export interface CherryFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type CherryFoliagePlacer = CherryFoliagePlacerMembers & FoliagePlacer;
export interface CherryFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.IntProvider, arg3: number, arg4: number, arg5: number, arg6: number): CherryFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CherryFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.DarkOakFoliagePlacer. */
export interface DarkOakFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  shouldSkipLocationSigned(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type DarkOakFoliagePlacer = DarkOakFoliagePlacerMembers & FoliagePlacer;
export interface DarkOakFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider): DarkOakFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DarkOakFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.FancyFoliagePlacer. */
export interface FancyFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [BlobFoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type FancyFoliagePlacer = FancyFoliagePlacerMembers & BlobFoliagePlacer;
export interface FancyFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: number): FancyFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FancyFoliagePlacer]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer. */
export interface FoliagePlacerMembers {
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number): void;
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  foliageRadius(arg0: j_net_minecraft_util.RandomSource, arg1: number): number;
  readonly offset: j_net_minecraft_util_valueproviders.IntProvider;
  placeLeavesRow(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: j_net_minecraft_core.BlockPos, arg5: number, arg6: number, arg7: boolean): void;
  placeLeavesRowWithHangingLeavesBelow(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: j_net_minecraft_core.BlockPos, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number): void;
  readonly radius: j_net_minecraft_util_valueproviders.IntProvider;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  shouldSkipLocationSigned(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type FoliagePlacer = FoliagePlacerMembers;
export interface FoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider): FoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FoliagePlacer]>;
  foliagePlacerParts<P /* extends FoliagePlacer */>(arg0: JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Instance", [P]>): JavaOpaque<"com.mojang.datafixers.Products$P2", [JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Mu", [P]>, j_net_minecraft_util_valueproviders.IntProvider, j_net_minecraft_util_valueproviders.IntProvider]>;
  tryPlaceLeaf(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageAttachment. */
export interface FoliagePlacer_FoliageAttachmentMembers {
  doubleTrunk(): boolean;
  pos(): j_net_minecraft_core.BlockPos;
  radiusOffset(): number;
}
export type FoliagePlacer_FoliageAttachment = FoliagePlacer_FoliageAttachmentMembers;
export interface FoliagePlacer_FoliageAttachmentStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: boolean): FoliagePlacer_FoliageAttachment;
}

/** JVM interface net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageSetter. */
export interface FoliagePlacer_FoliageSetterMembers {
  isSet(arg0: j_net_minecraft_core.BlockPos): boolean;
  set(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type FoliagePlacer_FoliageSetter = FoliagePlacer_FoliageSetterMembers;
export interface FoliagePlacer_FoliageSetterStatics {
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacerType. */
export interface FoliagePlacerTypeMembers<P /* extends FoliagePlacer */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type FoliagePlacerType<P /* extends FoliagePlacer */ = unknown> = FoliagePlacerTypeMembers<P>;
export interface FoliagePlacerTypeStatics {
  readonly ACACIA_FOLIAGE_PLACER: FoliagePlacerType<AcaciaFoliagePlacer>;
  readonly BLOB_FOLIAGE_PLACER: FoliagePlacerType<BlobFoliagePlacer>;
  readonly BUSH_FOLIAGE_PLACER: FoliagePlacerType<BushFoliagePlacer>;
  readonly CHERRY_FOLIAGE_PLACER: FoliagePlacerType<CherryFoliagePlacer>;
  readonly DARK_OAK_FOLIAGE_PLACER: FoliagePlacerType<DarkOakFoliagePlacer>;
  readonly FANCY_FOLIAGE_PLACER: FoliagePlacerType<FancyFoliagePlacer>;
  readonly MEGA_JUNGLE_FOLIAGE_PLACER: FoliagePlacerType<MegaJungleFoliagePlacer>;
  readonly MEGA_PINE_FOLIAGE_PLACER: FoliagePlacerType<MegaPineFoliagePlacer>;
  readonly PINE_FOLIAGE_PLACER: FoliagePlacerType<PineFoliagePlacer>;
  readonly RANDOM_SPREAD_FOLIAGE_PLACER: FoliagePlacerType<RandomSpreadFoliagePlacer>;
  readonly SPRUCE_FOLIAGE_PLACER: FoliagePlacerType<SpruceFoliagePlacer>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.MegaJungleFoliagePlacer. */
export interface MegaJungleFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  readonly height: number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type MegaJungleFoliagePlacer = MegaJungleFoliagePlacerMembers & FoliagePlacer;
export interface MegaJungleFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: number): MegaJungleFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MegaJungleFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.MegaPineFoliagePlacer. */
export interface MegaPineFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type MegaPineFoliagePlacer = MegaPineFoliagePlacerMembers & FoliagePlacer;
export interface MegaPineFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.IntProvider): MegaPineFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MegaPineFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.PineFoliagePlacer. */
export interface PineFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  foliageRadius(arg0: j_net_minecraft_util.RandomSource, arg1: number): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type PineFoliagePlacer = PineFoliagePlacerMembers & FoliagePlacer;
export interface PineFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.IntProvider): PineFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PineFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.RandomSpreadFoliagePlacer. */
export interface RandomSpreadFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type RandomSpreadFoliagePlacer = RandomSpreadFoliagePlacerMembers & FoliagePlacer;
export interface RandomSpreadFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.IntProvider, arg3: number): RandomSpreadFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RandomSpreadFoliagePlacer]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.foliageplacers.SpruceFoliagePlacer. */
export interface SpruceFoliagePlacerMembers {
  readonly __javaSupertypes?: readonly [FoliagePlacer];
  createFoliage(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: FoliagePlacer_FoliageSetter, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration, arg4: number, arg5: FoliagePlacer_FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
  foliageHeight(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: j_net_minecraft_world_level_levelgen_feature_configurations.TreeConfiguration): number;
  shouldSkipLocation(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  type(): FoliagePlacerType<object>;
}
export type SpruceFoliagePlacer = SpruceFoliagePlacerMembers & FoliagePlacer;
export interface SpruceFoliagePlacerStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_util_valueproviders.IntProvider, arg2: j_net_minecraft_util_valueproviders.IntProvider): SpruceFoliagePlacer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SpruceFoliagePlacer]>;
}
