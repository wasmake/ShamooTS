// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_heightproviders from './net.minecraft.world.level.levelgen.heightproviders.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';

/** JVM class net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration. */
export interface CanyonCarverConfigurationMembers {
  readonly __javaSupertypes?: readonly [CarverConfiguration];
  readonly shape: CanyonCarverConfiguration_CanyonShapeConfiguration;
  readonly verticalRotation: j_net_minecraft_util_valueproviders.FloatProvider;
}
export type CanyonCarverConfiguration = CanyonCarverConfigurationMembers & CarverConfiguration;
export interface CanyonCarverConfigurationStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider, arg3: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg4: CarverDebugSettings, arg5: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg6: j_net_minecraft_util_valueproviders.FloatProvider, arg7: CanyonCarverConfiguration_CanyonShapeConfiguration): CanyonCarverConfiguration;
  new(arg0: CarverConfiguration, arg1: j_net_minecraft_util_valueproviders.FloatProvider, arg2: CanyonCarverConfiguration_CanyonShapeConfiguration): CanyonCarverConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CanyonCarverConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration$CanyonShapeConfiguration. */
export interface CanyonCarverConfiguration_CanyonShapeConfigurationMembers {
  readonly distanceFactor: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly horizontalRadiusFactor: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly thickness: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly verticalRadiusCenterFactor: number;
  readonly verticalRadiusDefaultFactor: number;
  readonly widthSmoothness: number;
}
export type CanyonCarverConfiguration_CanyonShapeConfiguration = CanyonCarverConfiguration_CanyonShapeConfigurationMembers;
export interface CanyonCarverConfiguration_CanyonShapeConfigurationStatics {
  new(arg0: j_net_minecraft_util_valueproviders.FloatProvider, arg1: j_net_minecraft_util_valueproviders.FloatProvider, arg2: number, arg3: j_net_minecraft_util_valueproviders.FloatProvider, arg4: number, arg5: number): CanyonCarverConfiguration_CanyonShapeConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CanyonCarverConfiguration_CanyonShapeConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CanyonWorldCarver. */
export interface CanyonWorldCarverMembers {
  readonly __javaSupertypes?: readonly [WorldCarver<CanyonCarverConfiguration>];
  carve(arg0: CarvingContext, arg1: CanyonCarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_util.RandomSource, arg5: j_net_minecraft_world_level_levelgen.Aquifer, arg6: j_net_minecraft_world_level.ChunkPos, arg7: j_net_minecraft_world_level_chunk.CarvingMask): boolean;
  carve(arg0: CarvingContext, arg1: CarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<object, object>, arg4: j_net_minecraft_util.RandomSource, arg5: j_net_minecraft_world_level_levelgen.Aquifer, arg6: j_net_minecraft_world_level.ChunkPos, arg7: j_net_minecraft_world_level_chunk.CarvingMask): boolean;
  isStartChunk(arg0: CanyonCarverConfiguration, arg1: j_net_minecraft_util.RandomSource): boolean;
  isStartChunk(arg0: CarverConfiguration, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type CanyonWorldCarver = CanyonWorldCarverMembers & WorldCarver<CanyonCarverConfiguration>;
export interface CanyonWorldCarverStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [CanyonCarverConfiguration]>): CanyonWorldCarver;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CarverConfiguration. */
export interface CarverConfigurationMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration];
  readonly debugSettings: CarverDebugSettings;
  readonly lavaLevel: j_net_minecraft_world_level_levelgen.VerticalAnchor;
  readonly replaceable: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
  readonly y: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider;
  readonly yScale: j_net_minecraft_util_valueproviders.FloatProvider;
}
export type CarverConfiguration = CarverConfigurationMembers & j_net_minecraft_world_level_levelgen_feature_configurations.ProbabilityFeatureConfiguration;
export interface CarverConfigurationStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider, arg3: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg4: CarverDebugSettings, arg5: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): CarverConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CarverConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CarverDebugSettings. */
export interface CarverDebugSettingsMembers {
  getAirState(): j_net_minecraft_world_level_block_state.BlockState;
  getBarrierState(): j_net_minecraft_world_level_block_state.BlockState;
  getLavaState(): j_net_minecraft_world_level_block_state.BlockState;
  getWaterState(): j_net_minecraft_world_level_block_state.BlockState;
  isDebugMode(): boolean;
}
export type CarverDebugSettings = CarverDebugSettingsMembers;
export interface CarverDebugSettingsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CarverDebugSettings]>;
  readonly DEFAULT: CarverDebugSettings;
  of(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState): CarverDebugSettings;
  of(arg0: boolean, arg1: j_net_minecraft_world_level_block_state.BlockState): CarverDebugSettings;
  of(arg0: boolean, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_state.BlockState): CarverDebugSettings;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CarvingContext. */
export interface CarvingContextMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen.WorldGenerationContext];
  randomState(): j_net_minecraft_world_level_levelgen.RandomState;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  topMaterial(arg0: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg1: j_net_minecraft_world_level_chunk.ChunkAccess, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
}
export type CarvingContext = CarvingContextMembers & j_net_minecraft_world_level_levelgen.WorldGenerationContext;
export interface CarvingContextStatics {
  new(arg0: j_net_minecraft_world_level_levelgen.NoiseBasedChunkGenerator, arg1: j_net_minecraft_core.RegistryAccess, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: j_net_minecraft_world_level_levelgen.NoiseChunk, arg4: j_net_minecraft_world_level_levelgen.RandomState, arg5: j_net_minecraft_world_level_levelgen.SurfaceRules_RuleSource, arg6: j_net_minecraft_world_level.Level | null): CarvingContext;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CaveCarverConfiguration. */
export interface CaveCarverConfigurationMembers {
  readonly __javaSupertypes?: readonly [CarverConfiguration];
  readonly horizontalRadiusMultiplier: j_net_minecraft_util_valueproviders.FloatProvider;
  readonly verticalRadiusMultiplier: j_net_minecraft_util_valueproviders.FloatProvider;
}
export type CaveCarverConfiguration = CaveCarverConfigurationMembers & CarverConfiguration;
export interface CaveCarverConfigurationStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider, arg3: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg4: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg5: j_net_minecraft_util_valueproviders.FloatProvider, arg6: j_net_minecraft_util_valueproviders.FloatProvider, arg7: j_net_minecraft_util_valueproviders.FloatProvider): CaveCarverConfiguration;
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider, arg3: j_net_minecraft_world_level_levelgen.VerticalAnchor, arg4: CarverDebugSettings, arg5: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg6: j_net_minecraft_util_valueproviders.FloatProvider, arg7: j_net_minecraft_util_valueproviders.FloatProvider, arg8: j_net_minecraft_util_valueproviders.FloatProvider): CaveCarverConfiguration;
  new(arg0: CarverConfiguration, arg1: j_net_minecraft_util_valueproviders.FloatProvider, arg2: j_net_minecraft_util_valueproviders.FloatProvider, arg3: j_net_minecraft_util_valueproviders.FloatProvider): CaveCarverConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CaveCarverConfiguration]>;
}

/** JVM class net.minecraft.world.level.levelgen.carver.CaveWorldCarver. */
export interface CaveWorldCarverMembers {
  readonly __javaSupertypes?: readonly [WorldCarver<CaveCarverConfiguration>];
  carve(arg0: CarvingContext, arg1: CarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<object, object>, arg4: j_net_minecraft_util.RandomSource, arg5: j_net_minecraft_world_level_levelgen.Aquifer, arg6: j_net_minecraft_world_level.ChunkPos, arg7: j_net_minecraft_world_level_chunk.CarvingMask): boolean;
  carve(arg0: CarvingContext, arg1: CaveCarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_util.RandomSource, arg5: j_net_minecraft_world_level_levelgen.Aquifer, arg6: j_net_minecraft_world_level.ChunkPos, arg7: j_net_minecraft_world_level_chunk.CarvingMask): boolean;
  createRoom(arg0: CarvingContext, arg1: CaveCarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_world_level_levelgen.Aquifer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: j_net_minecraft_world_level_chunk.CarvingMask, arg11: WorldCarver_CarveSkipChecker): void;
  createTunnel(arg0: CarvingContext, arg1: CaveCarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: bigint, arg5: j_net_minecraft_world_level_levelgen.Aquifer, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: j_net_minecraft_world_level_chunk.CarvingMask, arg18: WorldCarver_CarveSkipChecker): void;
  getCaveBound(): number;
  getThickness(arg0: j_net_minecraft_util.RandomSource): number;
  getYScale(): number;
  isStartChunk(arg0: CarverConfiguration, arg1: j_net_minecraft_util.RandomSource): boolean;
  isStartChunk(arg0: CaveCarverConfiguration, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type CaveWorldCarver = CaveWorldCarverMembers & WorldCarver<CaveCarverConfiguration>;
export interface CaveWorldCarverStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [CaveCarverConfiguration]>): CaveWorldCarver;
}

/** JVM record net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver. */
export interface ConfiguredWorldCarverMembers<WC /* extends CarverConfiguration */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  carve(arg0: CarvingContext, arg1: j_net_minecraft_world_level_chunk.ChunkAccess, arg2: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen.Aquifer, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_world_level_chunk.CarvingMask): boolean;
  config(): WC;
  equals(arg0: object): boolean;
  hashCode(): number;
  isStartChunk(arg0: j_net_minecraft_util.RandomSource): boolean;
  toString(): string;
  worldCarver(): WorldCarver<WC>;
}
export type ConfiguredWorldCarver<WC /* extends CarverConfiguration */ = unknown> = ConfiguredWorldCarverMembers<WC> & JavaOpaque<"java.lang.Record">;
export interface ConfiguredWorldCarverStatics {
  new<WC /* extends CarverConfiguration */>(arg0: WorldCarver<WC>, arg1: WC): ConfiguredWorldCarver<WC>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<ConfiguredWorldCarver<object>>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ConfiguredWorldCarver<object>]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<ConfiguredWorldCarver<object>>]>;
}

/** JVM class net.minecraft.world.level.levelgen.carver.NetherWorldCarver. */
export interface NetherWorldCarverMembers {
  readonly __javaSupertypes?: readonly [CaveWorldCarver];
  carveBlock(arg0: CarvingContext, arg1: CarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<object, object>, arg4: j_net_minecraft_world_level_chunk.CarvingMask, arg5: j_net_minecraft_core.BlockPos_MutableBlockPos, arg6: j_net_minecraft_core.BlockPos_MutableBlockPos, arg7: j_net_minecraft_world_level_levelgen.Aquifer, arg8: JavaOpaque<"org.apache.commons.lang3.mutable.MutableBoolean">): boolean;
  carveBlock(arg0: CarvingContext, arg1: CaveCarverConfiguration, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_world_level_chunk.CarvingMask, arg5: j_net_minecraft_core.BlockPos_MutableBlockPos, arg6: j_net_minecraft_core.BlockPos_MutableBlockPos, arg7: j_net_minecraft_world_level_levelgen.Aquifer, arg8: JavaOpaque<"org.apache.commons.lang3.mutable.MutableBoolean">): boolean;
  getCaveBound(): number;
  getThickness(arg0: j_net_minecraft_util.RandomSource): number;
  getYScale(): number;
}
export type NetherWorldCarver = NetherWorldCarverMembers & CaveWorldCarver;
export interface NetherWorldCarverStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.Codec", [CaveCarverConfiguration]>): NetherWorldCarver;
}

/** JVM abstract net.minecraft.world.level.levelgen.carver.WorldCarver. */
export interface WorldCarverMembers<C /* extends CarverConfiguration */ = unknown> {
  canReplaceBlock(arg0: C, arg1: j_net_minecraft_world_level_block_state.BlockState): boolean;
  carve(arg0: CarvingContext, arg1: C, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_util.RandomSource, arg5: j_net_minecraft_world_level_levelgen.Aquifer, arg6: j_net_minecraft_world_level.ChunkPos, arg7: j_net_minecraft_world_level_chunk.CarvingMask): boolean;
  carveBlock(arg0: CarvingContext, arg1: C, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_world_level_chunk.CarvingMask, arg5: j_net_minecraft_core.BlockPos_MutableBlockPos, arg6: j_net_minecraft_core.BlockPos_MutableBlockPos, arg7: j_net_minecraft_world_level_levelgen.Aquifer, arg8: JavaOpaque<"org.apache.commons.lang3.mutable.MutableBoolean">): boolean;
  carveEllipsoid(arg0: CarvingContext, arg1: C, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg4: j_net_minecraft_world_level_levelgen.Aquifer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: j_net_minecraft_world_level_chunk.CarvingMask, arg11: WorldCarver_CarveSkipChecker): boolean;
  configured(arg0: C): ConfiguredWorldCarver<C>;
  configuredCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ConfiguredWorldCarver<C>]>;
  getRange(): number;
  isStartChunk(arg0: C, arg1: j_net_minecraft_util.RandomSource): boolean;
  liquids: JavaSet<j_net_minecraft_world_level_material.Fluid>;
}
export type WorldCarver<C /* extends CarverConfiguration */ = unknown> = WorldCarverMembers<C>;
export interface WorldCarverStatics {
  new<C /* extends CarverConfiguration */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [C]>): WorldCarver<C>;
  readonly AIR: j_net_minecraft_world_level_block_state.BlockState;
  readonly CANYON: WorldCarver<CanyonCarverConfiguration>;
  readonly CAVE: WorldCarver<CaveCarverConfiguration>;
  readonly CAVE_AIR: j_net_minecraft_world_level_block_state.BlockState;
  readonly LAVA: j_net_minecraft_world_level_material.FluidState;
  readonly NETHER_CAVE: WorldCarver<CaveCarverConfiguration>;
  readonly WATER: j_net_minecraft_world_level_material.FluidState;
  canReach(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
}

/** JVM interface net.minecraft.world.level.levelgen.carver.WorldCarver$CarveSkipChecker. */
export interface WorldCarver_CarveSkipCheckerMembers {
  shouldSkip(arg0: CarvingContext, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
}
export type WorldCarver_CarveSkipChecker = WorldCarver_CarveSkipCheckerMembers;
export interface WorldCarver_CarveSkipCheckerStatics {
}
