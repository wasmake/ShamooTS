// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';

/** JVM class net.minecraft.world.level.levelgen.blending.Blender. */
export interface BlenderMembers {
  blendDensity(arg0: j_net_minecraft_world_level_levelgen.DensityFunction_FunctionContext, arg1: number): number;
  blendOffsetAndFactor(arg0: number, arg1: number): Blender_BlendingOutput;
  getBiomeResolver(arg0: j_net_minecraft_world_level_biome.BiomeResolver): j_net_minecraft_world_level_biome.BiomeResolver;
}
export type Blender = BlenderMembers;
export interface BlenderStatics {
  addAroundOldChunksCarvingMaskFilter(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ProtoChunk): void;
  empty(): Blender;
  generateBorderTicks(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  makeOldChunkDistanceGetter(arg0: BlendingData | null, arg1: JavaMap<j_net_minecraft_core.Direction8, BlendingData>): Blender_DistanceGetter | null;
  of(arg0: j_net_minecraft_server_level.WorldGenRegion | null): Blender | null;
}

/** JVM record net.minecraft.world.level.levelgen.blending.Blender$BlendingOutput. */
export interface Blender_BlendingOutputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  alpha(): number;
  blendingOffset(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type Blender_BlendingOutput = Blender_BlendingOutputMembers & JavaOpaque<"java.lang.Record">;
export interface Blender_BlendingOutputStatics {
  new(arg0: number, arg1: number): Blender_BlendingOutput;
}

/** JVM interface net.minecraft.world.level.levelgen.blending.Blender$DistanceGetter. */
export interface Blender_DistanceGetterMembers {
  getDistance(arg0: number, arg1: number, arg2: number): number;
}
export type Blender_DistanceGetter = Blender_DistanceGetterMembers;
export interface Blender_DistanceGetterStatics {
}

/** JVM class net.minecraft.world.level.levelgen.blending.BlendingData. */
export interface BlendingDataMembers {
  getAreaWithOldGeneration(): j_net_minecraft_world_level.LevelHeightAccessor;
  getDensity(arg0: number, arg1: number, arg2: number): number;
  getHeight(arg0: number, arg1: number, arg2: number): number;
  iterateBiomes(arg0: number, arg1: number, arg2: number, arg3: BlendingData_BiomeConsumer): void;
  iterateDensities(arg0: number, arg1: number, arg2: number, arg3: number, arg4: BlendingData_DensityConsumer): void;
  iterateHeights(arg0: number, arg1: number, arg2: BlendingData_HeightConsumer): void;
  pack(): BlendingData_Packed;
}
export type BlendingData = BlendingDataMembers;
export interface BlendingDataStatics {
  readonly CELL_HEIGHT: 8;
  readonly CELL_RATIO: 2;
  readonly CELL_WIDTH: 4;
  readonly NO_VALUE: 1.7976931348623157e+308;
  getOrUpdateBlendingData(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: number, arg2: number): BlendingData | null;
  sideByGenerationAge(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: number, arg2: number, arg3: boolean): JavaSet<j_net_minecraft_core.Direction8>;
  unpack(arg0: BlendingData_Packed | null): BlendingData | null;
}

/** JVM interface net.minecraft.world.level.levelgen.blending.BlendingData$BiomeConsumer. */
export interface BlendingData_BiomeConsumerMembers {
  consume(arg0: number, arg1: number, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): void;
}
export type BlendingData_BiomeConsumer = BlendingData_BiomeConsumerMembers;
export interface BlendingData_BiomeConsumerStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.blending.BlendingData$DensityConsumer. */
export interface BlendingData_DensityConsumerMembers {
  consume(arg0: number, arg1: number, arg2: number, arg3: number): void;
}
export type BlendingData_DensityConsumer = BlendingData_DensityConsumerMembers;
export interface BlendingData_DensityConsumerStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.blending.BlendingData$HeightConsumer. */
export interface BlendingData_HeightConsumerMembers {
  consume(arg0: number, arg1: number, arg2: number): void;
}
export type BlendingData_HeightConsumer = BlendingData_HeightConsumerMembers;
export interface BlendingData_HeightConsumerStatics {
}

/** JVM record net.minecraft.world.level.levelgen.blending.BlendingData$Packed. */
export interface BlendingData_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  heights(): JavaOptional<Array<number>>;
  maxSection(): number;
  minSection(): number;
  toString(): string;
}
export type BlendingData_Packed = BlendingData_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface BlendingData_PackedStatics {
  new(arg0: number, arg1: number, arg2: JavaOptional<Array<number>>): BlendingData_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlendingData_Packed]>;
}
