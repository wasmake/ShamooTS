// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blending from './net.minecraft.world.level.levelgen.blending.generated.js';
import type * as j_net_minecraft_world_level_levelgen_carver from './net.minecraft.world.level.levelgen.carver.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_stateproviders from './net.minecraft.world.level.levelgen.feature.stateproviders.generated.js';
import type * as j_net_minecraft_world_level_levelgen_flat from './net.minecraft.world.level.levelgen.flat.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_levelgen_synth from './net.minecraft.world.level.levelgen.synth.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM interface net.minecraft.world.level.levelgen.Aquifer. */
export interface AquiferMembers {
  computeSubstance(arg0: DensityFunction_FunctionContext, arg1: number): j_net_minecraft_world_level_block_state.BlockState | null;
  shouldScheduleFluidUpdate(): boolean;
}
export type Aquifer = AquiferMembers;
export interface AquiferStatics {
  create(arg0: NoiseChunk, arg1: j_net_minecraft_world_level.ChunkPos, arg2: NoiseRouter, arg3: PositionalRandomFactory, arg4: number, arg5: number, arg6: Aquifer_FluidPicker): Aquifer;
  createDisabled(arg0: Aquifer_FluidPicker): Aquifer;
}

/** JVM interface net.minecraft.world.level.levelgen.Aquifer$FluidPicker. */
export interface Aquifer_FluidPickerMembers {
  computeFluid(arg0: number, arg1: number, arg2: number): Aquifer_FluidStatus;
}
export type Aquifer_FluidPicker = Aquifer_FluidPickerMembers;
export interface Aquifer_FluidPickerStatics {
}

/** JVM record net.minecraft.world.level.levelgen.Aquifer$FluidStatus. */
export interface Aquifer_FluidStatusMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  at(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
  equals(arg0: object): boolean;
  fluidLevel(): number;
  fluidType(): j_net_minecraft_world_level_block_state.BlockState;
  hashCode(): number;
  toString(): string;
}
export type Aquifer_FluidStatus = Aquifer_FluidStatusMembers & JavaOpaque<"java.lang.Record">;
export interface Aquifer_FluidStatusStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_block_state.BlockState): Aquifer_FluidStatus;
}

/** JVM class net.minecraft.world.level.levelgen.Aquifer$NoiseBasedAquifer. */
export interface Aquifer_NoiseBasedAquiferMembers {
  readonly __javaSupertypes?: readonly [Aquifer];
  computeSubstance(arg0: DensityFunction_FunctionContext, arg1: number): j_net_minecraft_world_level_block_state.BlockState | null;
  shouldScheduleFluidUpdate(): boolean;
}
export type Aquifer_NoiseBasedAquifer = Aquifer_NoiseBasedAquiferMembers & Aquifer;
export interface Aquifer_NoiseBasedAquiferStatics {
}

/** JVM class net.minecraft.world.level.levelgen.Beardifier. */
export interface BeardifierMembers {
  readonly __javaSupertypes?: readonly [DensityFunctions_BeardifierOrMarker];
  compute(arg0: DensityFunction_FunctionContext): number;
  maxValue(): number;
  minValue(): number;
}
export type Beardifier = BeardifierMembers & DensityFunctions_BeardifierOrMarker;
export interface BeardifierStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectListIterator", [Beardifier_Rigid]>, arg1: JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectListIterator", [j_net_minecraft_world_level_levelgen_structure_pools.JigsawJunction]>): Beardifier;
  readonly BEARD_KERNEL_RADIUS: 12;
  forStructuresInChunk(arg0: j_net_minecraft_world_level.StructureManager, arg1: j_net_minecraft_world_level.ChunkPos): Beardifier;
}

/** JVM record net.minecraft.world.level.levelgen.Beardifier$Rigid. */
export interface Beardifier_RigidMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  box(): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  equals(arg0: object): boolean;
  groundLevelDelta(): number;
  hashCode(): number;
  terrainAdjustment(): j_net_minecraft_world_level_levelgen_structure.TerrainAdjustment;
  toString(): string;
}
export type Beardifier_Rigid = Beardifier_RigidMembers & JavaOpaque<"java.lang.Record">;
export interface Beardifier_RigidStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg1: j_net_minecraft_world_level_levelgen_structure.TerrainAdjustment, arg2: number): Beardifier_Rigid;
}

/** JVM class net.minecraft.world.level.levelgen.BelowZeroRetrogen. */
export interface BelowZeroRetrogenMembers {
  applyBedrockMask(arg0: j_net_minecraft_world_level_chunk.ProtoChunk): void;
  hasBedrockHole(arg0: number, arg1: number): boolean;
  hasBedrockHoles(): boolean;
  targetStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
}
export type BelowZeroRetrogen = BelowZeroRetrogenMembers;
export interface BelowZeroRetrogenStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BelowZeroRetrogen]>;
  readonly UPGRADE_HEIGHT_ACCESSOR: j_net_minecraft_world_level.LevelHeightAccessor;
  getBiomeResolver(arg0: j_net_minecraft_world_level_biome.BiomeResolver, arg1: j_net_minecraft_world_level_chunk.ChunkAccess): j_net_minecraft_world_level_biome.BiomeResolver;
  replaceOldBedrock(arg0: j_net_minecraft_world_level_chunk.ProtoChunk): void;
}

/** JVM interface net.minecraft.world.level.levelgen.BitRandomSource. */
export interface BitRandomSourceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util.RandomSource];
  next(arg0: number): number;
  nextBoolean(): boolean;
  nextDouble(): number;
  nextFloat(): number;
  nextInt(): number;
  nextInt(arg0: number): number;
  nextLong(): bigint;
}
export type BitRandomSource = BitRandomSourceMembers & j_net_minecraft_util.RandomSource;
export interface BitRandomSourceStatics {
  readonly DOUBLE_MULTIPLIER: 1.1102230246251565e-16;
  readonly FLOAT_MULTIPLIER: 5.9604645e-8;
}

/** JVM abstract net.minecraft.world.level.levelgen.Column. */
export interface ColumnMembers {
  getCeiling(): JavaOptionalNumber;
  getFloor(): JavaOptionalNumber;
  getHeight(): JavaOptionalNumber;
  withCeiling(arg0: JavaOptionalNumber): Column;
  withFloor(arg0: JavaOptionalNumber): Column;
}
export type Column = ColumnMembers;
export interface ColumnStatics {
  above(arg0: number): Column;
  around(arg0: number, arg1: number): Column_Range;
  below(arg0: number): Column;
  create(arg0: JavaOptionalNumber, arg1: JavaOptionalNumber): Column;
  fromHighest(arg0: number): Column;
  fromLowest(arg0: number): Column;
  inside(arg0: number, arg1: number): Column_Range;
  line(): Column;
  scan(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>, arg4: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): JavaOptional<Column>;
}

/** JVM class net.minecraft.world.level.levelgen.Column$Line. */
export interface Column_LineMembers {
  readonly __javaSupertypes?: readonly [Column];
  getCeiling(): JavaOptionalNumber;
  getFloor(): JavaOptionalNumber;
  getHeight(): JavaOptionalNumber;
  toString(): string;
}
export type Column_Line = Column_LineMembers & Column;
export interface Column_LineStatics {
}

/** JVM class net.minecraft.world.level.levelgen.Column$Range. */
export interface Column_RangeMembers {
  readonly __javaSupertypes?: readonly [Column];
  ceiling(): number;
  floor(): number;
  getCeiling(): JavaOptionalNumber;
  getFloor(): JavaOptionalNumber;
  getHeight(): JavaOptionalNumber;
  height(): number;
  toString(): string;
}
export type Column_Range = Column_RangeMembers & Column;
export interface Column_RangeStatics {
}

/** JVM class net.minecraft.world.level.levelgen.Column$Ray. */
export interface Column_RayMembers {
  readonly __javaSupertypes?: readonly [Column];
  getCeiling(): JavaOptionalNumber;
  getFloor(): JavaOptionalNumber;
  getHeight(): JavaOptionalNumber;
  toString(): string;
}
export type Column_Ray = Column_RayMembers & Column;
export interface Column_RayStatics {
  new(arg0: number, arg1: boolean): Column_Ray;
}

/** JVM class net.minecraft.world.level.levelgen.DebugLevelSource. */
export interface DebugLevelSourceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk.ChunkGenerator];
  addDebugScreenInfo(arg0: JavaList<string>, arg1: RandomState, arg2: j_net_minecraft_core.BlockPos): void;
  applyBiomeDecoration(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkAccess, arg2: j_net_minecraft_world_level.StructureManager): void;
  applyCarvers(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: bigint, arg2: RandomState, arg3: j_net_minecraft_world_level_biome.BiomeManager, arg4: j_net_minecraft_world_level.StructureManager, arg5: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  buildSurface(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: j_net_minecraft_world_level.StructureManager, arg2: RandomState, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  fillFromNoise(arg0: j_net_minecraft_world_level_levelgen_blending.Blender, arg1: RandomState, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  getBaseColumn(arg0: number, arg1: number, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: RandomState): j_net_minecraft_world_level.NoiseColumn;
  getBaseHeight(arg0: number, arg1: number, arg2: Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: RandomState): number;
  getGenDepth(): number;
  getMinY(): number;
  getSeaLevel(): number;
  spawnOriginalMobs(arg0: j_net_minecraft_server_level.WorldGenRegion): void;
}
export type DebugLevelSource = DebugLevelSourceMembers & j_net_minecraft_world_level_chunk.ChunkGenerator;
export interface DebugLevelSourceStatics {
  new(arg0: j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_biome.Biome>): DebugLevelSource;
  readonly BARRIER_HEIGHT: 60;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DebugLevelSource]>;
  readonly HEIGHT: 70;
  getBlockStateFor(arg0: number, arg1: number): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM class net.minecraft.world.level.levelgen.Density. */
export interface DensityMembers {
}
export type Density = DensityMembers;
export interface DensityStatics {
  new(): Density;
  readonly SURFACE: 0;
  readonly UNRECOVERABLY_DENSE: 64;
  readonly UNRECOVERABLY_THIN: -64;
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunction. */
export interface DensityFunctionMembers {
  abs(): DensityFunction;
  clamp(arg0: number, arg1: number): DensityFunction;
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  cube(): DensityFunction;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  halfNegative(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  quarterNegative(): DensityFunction;
  square(): DensityFunction;
  squeeze(): DensityFunction;
}
export type DensityFunction = DensityFunctionMembers;
export interface DensityFunctionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<DensityFunction>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DensityFunction]>;
  readonly HOLDER_HELPER_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DensityFunction]>;
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunction$ContextProvider. */
export interface DensityFunction_ContextProviderMembers {
  fillAllDirectly(arg0: Array<number>, arg1: DensityFunction): void;
  forIndex(arg0: number): DensityFunction_FunctionContext;
}
export type DensityFunction_ContextProvider = DensityFunction_ContextProviderMembers;
export interface DensityFunction_ContextProviderStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunction$FunctionContext. */
export interface DensityFunction_FunctionContextMembers {
  blockX(): number;
  blockY(): number;
  blockZ(): number;
  getBlender(): j_net_minecraft_world_level_levelgen_blending.Blender;
}
export type DensityFunction_FunctionContext = DensityFunction_FunctionContextMembers;
export interface DensityFunction_FunctionContextStatics {
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunction$NoiseHolder. */
export interface DensityFunction_NoiseHolderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  getValue(arg0: number, arg1: number, arg2: number): number;
  hashCode(): number;
  maxValue(): number;
  noise(): j_net_minecraft_world_level_levelgen_synth.NormalNoise | null;
  noiseData(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  toString(): string;
}
export type DensityFunction_NoiseHolder = DensityFunction_NoiseHolderMembers & JavaOpaque<"java.lang.Record">;
export interface DensityFunction_NoiseHolderStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): DensityFunction_NoiseHolder;
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: j_net_minecraft_world_level_levelgen_synth.NormalNoise | null): DensityFunction_NoiseHolder;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DensityFunction_NoiseHolder]>;
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction. */
export interface DensityFunction_SimpleFunctionMembers {
  readonly __javaSupertypes?: readonly [DensityFunction];
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
}
export type DensityFunction_SimpleFunction = DensityFunction_SimpleFunctionMembers & DensityFunction;
export interface DensityFunction_SimpleFunctionStatics {
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunction$SinglePointContext. */
export interface DensityFunction_SinglePointContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DensityFunction_FunctionContext];
  blockX(): number;
  blockY(): number;
  blockZ(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type DensityFunction_SinglePointContext = DensityFunction_SinglePointContextMembers & JavaOpaque<"java.lang.Record"> & DensityFunction_FunctionContext;
export interface DensityFunction_SinglePointContextStatics {
  new(arg0: number, arg1: number, arg2: number): DensityFunction_SinglePointContext;
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunction$Visitor. */
export interface DensityFunction_VisitorMembers {
  apply(arg0: DensityFunction): DensityFunction;
  visitNoise(arg0: DensityFunction_NoiseHolder): DensityFunction_NoiseHolder;
}
export type DensityFunction_Visitor = DensityFunction_VisitorMembers;
export interface DensityFunction_VisitorStatics {
}

/** JVM class net.minecraft.world.level.levelgen.DensityFunctions. */
export interface DensityFunctionsMembers {
}
export type DensityFunctions = DensityFunctionsMembers;
export interface DensityFunctionsStatics {
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DensityFunction]>;
  add(arg0: DensityFunction, arg1: DensityFunction): DensityFunction;
  blendAlpha(): DensityFunction;
  blendDensity(arg0: DensityFunction): DensityFunction;
  blendOffset(): DensityFunction;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [DensityFunction]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [DensityFunction]>;
  cache2d(arg0: DensityFunction): DensityFunction;
  cacheAllInCell(arg0: DensityFunction): DensityFunction;
  cacheOnce(arg0: DensityFunction): DensityFunction;
  constant(arg0: number): DensityFunction;
  endIslands(arg0: bigint): DensityFunction;
  flatCache(arg0: DensityFunction): DensityFunction;
  interpolated(arg0: DensityFunction): DensityFunction;
  lerp(arg0: DensityFunction, arg1: number, arg2: DensityFunction): DensityFunction;
  lerp(arg0: DensityFunction, arg1: DensityFunction, arg2: DensityFunction): DensityFunction;
  map(arg0: DensityFunction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$Mapped$Type">): DensityFunction;
  mappedNoise(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number, arg2: number): DensityFunction;
  mappedNoise(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number, arg2: number, arg3: number): DensityFunction;
  mappedNoise(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number, arg2: number, arg3: number, arg4: number): DensityFunction;
  max(arg0: DensityFunction, arg1: DensityFunction): DensityFunction;
  min(arg0: DensityFunction, arg1: DensityFunction): DensityFunction;
  mul(arg0: DensityFunction, arg1: DensityFunction): DensityFunction;
  noise(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): DensityFunction;
  noise(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number): DensityFunction;
  noise(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number, arg2: number): DensityFunction;
  rangeChoice(arg0: DensityFunction, arg1: number, arg2: number, arg3: DensityFunction, arg4: DensityFunction): DensityFunction;
  shift(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): DensityFunction;
  shiftA(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): DensityFunction;
  shiftB(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): DensityFunction;
  shiftedNoise2d(arg0: DensityFunction, arg1: DensityFunction, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): DensityFunction;
  spline(arg0: j_net_minecraft_util.CubicSpline<DensityFunctions_Spline_Point, DensityFunctions_Spline_Coordinate>): DensityFunction;
  weirdScaledSampler(arg0: DensityFunction, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg2: DensityFunctions_WeirdScaledSampler_RarityValueMapper): DensityFunction;
  yClampedGradient(arg0: number, arg1: number, arg2: number, arg3: number): DensityFunction;
  zero(): DensityFunction;
}

/** Live JVM enum net.minecraft.world.level.levelgen.DensityFunctions$BeardifierMarker; constants are host handles, not strings. */
export type DensityFunctions_BeardifierMarker = JavaEnum<"net.minecraft.world.level.levelgen.DensityFunctions$BeardifierMarker", "INSTANCE"> & DensityFunctions_BeardifierMarkerMembers;
export interface DensityFunctions_BeardifierMarkerMembers {
  abs(): DensityFunction;
  clamp(arg0: number, arg1: number): DensityFunction;
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  cube(): DensityFunction;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  halfNegative(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  quarterNegative(): DensityFunction;
  square(): DensityFunction;
  squeeze(): DensityFunction;
}
export interface DensityFunctions_BeardifierMarkerStatics {
  readonly INSTANCE: DensityFunctions_BeardifierMarker;
  valueOf(arg0: string): DensityFunctions_BeardifierMarker;
  values(): Array<DensityFunctions_BeardifierMarker>;
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunctions$BeardifierOrMarker. */
export interface DensityFunctions_BeardifierOrMarkerMembers {
  readonly __javaSupertypes?: readonly [DensityFunction_SimpleFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
}
export type DensityFunctions_BeardifierOrMarker = DensityFunctions_BeardifierOrMarkerMembers & DensityFunction_SimpleFunction;
export interface DensityFunctions_BeardifierOrMarkerStatics {
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.DensityFunctions$BlendAlpha; constants are host handles, not strings. */
export type DensityFunctions_BlendAlpha = JavaEnum<"net.minecraft.world.level.levelgen.DensityFunctions$BlendAlpha", "INSTANCE"> & DensityFunctions_BlendAlphaMembers;
export interface DensityFunctions_BlendAlphaMembers {
  abs(): DensityFunction;
  clamp(arg0: number, arg1: number): DensityFunction;
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  cube(): DensityFunction;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  halfNegative(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  quarterNegative(): DensityFunction;
  square(): DensityFunction;
  squeeze(): DensityFunction;
}
export interface DensityFunctions_BlendAlphaStatics {
  readonly INSTANCE: DensityFunctions_BlendAlpha;
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  valueOf(arg0: string): DensityFunctions_BlendAlpha;
  values(): Array<DensityFunctions_BlendAlpha>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.DensityFunctions$BlendOffset; constants are host handles, not strings. */
export type DensityFunctions_BlendOffset = JavaEnum<"net.minecraft.world.level.levelgen.DensityFunctions$BlendOffset", "INSTANCE"> & DensityFunctions_BlendOffsetMembers;
export interface DensityFunctions_BlendOffsetMembers {
  abs(): DensityFunction;
  clamp(arg0: number, arg1: number): DensityFunction;
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  cube(): DensityFunction;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  halfNegative(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  quarterNegative(): DensityFunction;
  square(): DensityFunction;
  squeeze(): DensityFunction;
}
export interface DensityFunctions_BlendOffsetStatics {
  readonly INSTANCE: DensityFunctions_BlendOffset;
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  valueOf(arg0: string): DensityFunctions_BlendOffset;
  values(): Array<DensityFunctions_BlendOffset>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Clamp. */
export interface DensityFunctions_ClampMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$PureTransformer">];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  toString(): string;
  transform(arg0: number): number;
}
export type DensityFunctions_Clamp = DensityFunctions_ClampMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$PureTransformer">;
export interface DensityFunctions_ClampStatics {
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunctions_Clamp>;
}

/** JVM class net.minecraft.world.level.levelgen.DensityFunctions$EndIslandDensityFunction. */
export interface DensityFunctions_EndIslandDensityFunctionMembers {
  readonly __javaSupertypes?: readonly [DensityFunction_SimpleFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  maxValue(): number;
  minValue(): number;
}
export type DensityFunctions_EndIslandDensityFunction = DensityFunctions_EndIslandDensityFunctionMembers & DensityFunction_SimpleFunction;
export interface DensityFunctions_EndIslandDensityFunctionStatics {
  new(arg0: bigint): DensityFunctions_EndIslandDensityFunction;
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunctions_EndIslandDensityFunction>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$HolderHolder. */
export interface DensityFunctions_HolderHolderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DensityFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  function(): j_net_minecraft_core.Holder<DensityFunction>;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  toString(): string;
}
export type DensityFunctions_HolderHolder = DensityFunctions_HolderHolderMembers & JavaOpaque<"java.lang.Record"> & DensityFunction;
export interface DensityFunctions_HolderHolderStatics {
  new(arg0: j_net_minecraft_core.Holder<DensityFunction>): DensityFunctions_HolderHolder;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Mapped. */
export interface DensityFunctions_MappedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$PureTransformer">];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunctions_Mapped;
  maxValue(): number;
  minValue(): number;
  toString(): string;
  transform(arg0: number): number;
  type(): JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$Mapped$Type">;
}
export type DensityFunctions_Mapped = DensityFunctions_MappedMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$PureTransformer">;
export interface DensityFunctions_MappedStatics {
  create(arg0: JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$Mapped$Type">, arg1: DensityFunction): DensityFunctions_Mapped;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Marker. */
export interface DensityFunctions_MarkerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DensityFunctions_MarkerOrMarked];
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  hashCode(): number;
  maxValue(): number;
  minValue(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$Marker$Type">;
  wrapped(): DensityFunction;
}
export type DensityFunctions_Marker = DensityFunctions_MarkerMembers & JavaOpaque<"java.lang.Record"> & DensityFunctions_MarkerOrMarked;
export interface DensityFunctions_MarkerStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.DensityFunctions$MarkerOrMarked. */
export interface DensityFunctions_MarkerOrMarkedMembers {
  readonly __javaSupertypes?: readonly [DensityFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  type(): JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$Marker$Type">;
  wrapped(): DensityFunction;
}
export type DensityFunctions_MarkerOrMarked = DensityFunctions_MarkerOrMarkedMembers & DensityFunction;
export interface DensityFunctions_MarkerOrMarkedStatics {
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Noise. */
export interface DensityFunctions_NoiseMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DensityFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  noise(): DensityFunction_NoiseHolder;
  toString(): string;
  xzScale(): number;
  yScale(): number;
}
export type DensityFunctions_Noise = DensityFunctions_NoiseMembers & JavaOpaque<"java.lang.Record"> & DensityFunction;
export interface DensityFunctions_NoiseStatics {
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunctions_Noise>;
  readonly DATA_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DensityFunctions_Noise]>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Shift. */
export interface DensityFunctions_ShiftMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$ShiftNoise">];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  offsetNoise(): DensityFunction_NoiseHolder;
  toString(): string;
}
export type DensityFunctions_Shift = DensityFunctions_ShiftMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$ShiftNoise">;
export interface DensityFunctions_ShiftStatics {
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$ShiftA. */
export interface DensityFunctions_ShiftAMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$ShiftNoise">];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  offsetNoise(): DensityFunction_NoiseHolder;
  toString(): string;
}
export type DensityFunctions_ShiftA = DensityFunctions_ShiftAMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$ShiftNoise">;
export interface DensityFunctions_ShiftAStatics {
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$ShiftB. */
export interface DensityFunctions_ShiftBMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$ShiftNoise">];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  offsetNoise(): DensityFunction_NoiseHolder;
  toString(): string;
}
export type DensityFunctions_ShiftB = DensityFunctions_ShiftBMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$ShiftNoise">;
export interface DensityFunctions_ShiftBStatics {
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$ShiftedNoise. */
export interface DensityFunctions_ShiftedNoiseMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DensityFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  noise(): DensityFunction_NoiseHolder;
  shiftX(): DensityFunction;
  shiftY(): DensityFunction;
  shiftZ(): DensityFunction;
  toString(): string;
  xzScale(): number;
  yScale(): number;
}
export type DensityFunctions_ShiftedNoise = DensityFunctions_ShiftedNoiseMembers & JavaOpaque<"java.lang.Record"> & DensityFunction;
export interface DensityFunctions_ShiftedNoiseStatics {
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunctions_ShiftedNoise>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Spline. */
export interface DensityFunctions_SplineMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DensityFunction];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  compute(arg0: DensityFunction_FunctionContext): number;
  equals(arg0: object): boolean;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  spline(): j_net_minecraft_util.CubicSpline<DensityFunctions_Spline_Point, DensityFunctions_Spline_Coordinate>;
  toString(): string;
}
export type DensityFunctions_Spline = DensityFunctions_SplineMembers & JavaOpaque<"java.lang.Record"> & DensityFunction;
export interface DensityFunctions_SplineStatics {
  new(arg0: j_net_minecraft_util.CubicSpline<DensityFunctions_Spline_Point, DensityFunctions_Spline_Coordinate>): DensityFunctions_Spline;
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunctions_Spline>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Spline$Coordinate. */
export interface DensityFunctions_Spline_CoordinateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ToFloatFunction<DensityFunctions_Spline_Point>];
  apply(arg0: DensityFunctions_Spline_Point): number;
  equals(arg0: object): boolean;
  function(): j_net_minecraft_core.Holder<DensityFunction>;
  hashCode(): number;
  mapAll(arg0: DensityFunction_Visitor): DensityFunctions_Spline_Coordinate;
  maxValue(): number;
  minValue(): number;
  toString(): string;
}
export type DensityFunctions_Spline_Coordinate = DensityFunctions_Spline_CoordinateMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ToFloatFunction<DensityFunctions_Spline_Point>;
export interface DensityFunctions_Spline_CoordinateStatics {
  new(arg0: j_net_minecraft_core.Holder<DensityFunction>): DensityFunctions_Spline_Coordinate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DensityFunctions_Spline_Coordinate]>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$Spline$Point. */
export interface DensityFunctions_Spline_PointMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  context(): DensityFunction_FunctionContext;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type DensityFunctions_Spline_Point = DensityFunctions_Spline_PointMembers & JavaOpaque<"java.lang.Record">;
export interface DensityFunctions_Spline_PointStatics {
  new(arg0: DensityFunction_FunctionContext): DensityFunctions_Spline_Point;
}

/** Live JVM enum net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction$Type; constants are host handles, not strings. */
export type DensityFunctions_TwoArgumentSimpleFunction_Type = JavaEnum<"net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction$Type", "ADD" | "MAX" | "MIN" | "MUL"> & DensityFunctions_TwoArgumentSimpleFunction_TypeMembers;
export interface DensityFunctions_TwoArgumentSimpleFunction_TypeMembers {
  getSerializedName(): string;
}
export interface DensityFunctions_TwoArgumentSimpleFunction_TypeStatics {
  readonly ADD: DensityFunctions_TwoArgumentSimpleFunction_Type;
  readonly MAX: DensityFunctions_TwoArgumentSimpleFunction_Type;
  readonly MIN: DensityFunctions_TwoArgumentSimpleFunction_Type;
  readonly MUL: DensityFunctions_TwoArgumentSimpleFunction_Type;
  valueOf(arg0: string): DensityFunctions_TwoArgumentSimpleFunction_Type;
  values(): Array<DensityFunctions_TwoArgumentSimpleFunction_Type>;
}

/** JVM record net.minecraft.world.level.levelgen.DensityFunctions$WeirdScaledSampler. */
export interface DensityFunctions_WeirdScaledSamplerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$TransformerWithContext">];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<DensityFunction>;
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): DensityFunction;
  maxValue(): number;
  minValue(): number;
  noise(): DensityFunction_NoiseHolder;
  rarityValueMapper(): DensityFunctions_WeirdScaledSampler_RarityValueMapper;
  toString(): string;
  transform(arg0: DensityFunction_FunctionContext, arg1: number): number;
}
export type DensityFunctions_WeirdScaledSampler = DensityFunctions_WeirdScaledSamplerMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$TransformerWithContext">;
export interface DensityFunctions_WeirdScaledSamplerStatics {
  readonly CODEC: j_net_minecraft_util.KeyDispatchDataCodec<DensityFunctions_WeirdScaledSampler>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.DensityFunctions$WeirdScaledSampler$RarityValueMapper; constants are host handles, not strings. */
export type DensityFunctions_WeirdScaledSampler_RarityValueMapper = JavaEnum<"net.minecraft.world.level.levelgen.DensityFunctions$WeirdScaledSampler$RarityValueMapper", "TYPE1" | "TYPE2"> & DensityFunctions_WeirdScaledSampler_RarityValueMapperMembers;
export interface DensityFunctions_WeirdScaledSampler_RarityValueMapperMembers {
  getSerializedName(): string;
}
export interface DensityFunctions_WeirdScaledSampler_RarityValueMapperStatics {
  readonly TYPE1: DensityFunctions_WeirdScaledSampler_RarityValueMapper;
  readonly TYPE2: DensityFunctions_WeirdScaledSampler_RarityValueMapper;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DensityFunctions_WeirdScaledSampler_RarityValueMapper]>;
  valueOf(arg0: string): DensityFunctions_WeirdScaledSampler_RarityValueMapper;
  values(): Array<DensityFunctions_WeirdScaledSampler_RarityValueMapper>;
}

/** JVM class net.minecraft.world.level.levelgen.FlatLevelSource. */
export interface FlatLevelSourceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk.ChunkGenerator];
  addDebugScreenInfo(arg0: JavaList<string>, arg1: RandomState, arg2: j_net_minecraft_core.BlockPos): void;
  applyCarvers(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: bigint, arg2: RandomState, arg3: j_net_minecraft_world_level_biome.BiomeManager, arg4: j_net_minecraft_world_level.StructureManager, arg5: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  buildSurface(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: j_net_minecraft_world_level.StructureManager, arg2: RandomState, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  createState(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg1: RandomState, arg2: bigint, arg3: JavaOpaque<"org.spigotmc.SpigotWorldConfig">): j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState;
  fillFromNoise(arg0: j_net_minecraft_world_level_levelgen_blending.Blender, arg1: RandomState, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  getBaseColumn(arg0: number, arg1: number, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: RandomState): j_net_minecraft_world_level.NoiseColumn;
  getBaseHeight(arg0: number, arg1: number, arg2: Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: RandomState): number;
  getGenDepth(): number;
  getMinY(): number;
  getSeaLevel(): number;
  getSpawnHeight(arg0: j_net_minecraft_world_level.LevelHeightAccessor): number;
  settings(): j_net_minecraft_world_level_levelgen_flat.FlatLevelGeneratorSettings;
  spawnOriginalMobs(arg0: j_net_minecraft_server_level.WorldGenRegion): void;
}
export type FlatLevelSource = FlatLevelSourceMembers & j_net_minecraft_world_level_chunk.ChunkGenerator;
export interface FlatLevelSourceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_flat.FlatLevelGeneratorSettings): FlatLevelSource;
  new(arg0: j_net_minecraft_world_level_levelgen_flat.FlatLevelGeneratorSettings, arg1: j_net_minecraft_world_level_biome.BiomeSource): FlatLevelSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FlatLevelSource]>;
}

/** JVM class net.minecraft.world.level.levelgen.GenerationStep. */
export interface GenerationStepMembers {
}
export type GenerationStep = GenerationStepMembers;
export interface GenerationStepStatics {
  new(): GenerationStep;
}

/** Live JVM enum net.minecraft.world.level.levelgen.GenerationStep$Decoration; constants are host handles, not strings. */
export type GenerationStep_Decoration = JavaEnum<"net.minecraft.world.level.levelgen.GenerationStep$Decoration", "FLUID_SPRINGS" | "LAKES" | "LOCAL_MODIFICATIONS" | "RAW_GENERATION" | "STRONGHOLDS" | "SURFACE_STRUCTURES" | "TOP_LAYER_MODIFICATION" | "UNDERGROUND_DECORATION" | "UNDERGROUND_ORES" | "UNDERGROUND_STRUCTURES" | "VEGETAL_DECORATION"> & GenerationStep_DecorationMembers;
export interface GenerationStep_DecorationMembers {
  getName(): string;
  getSerializedName(): string;
}
export interface GenerationStep_DecorationStatics {
  readonly FLUID_SPRINGS: GenerationStep_Decoration;
  readonly LAKES: GenerationStep_Decoration;
  readonly LOCAL_MODIFICATIONS: GenerationStep_Decoration;
  readonly RAW_GENERATION: GenerationStep_Decoration;
  readonly STRONGHOLDS: GenerationStep_Decoration;
  readonly SURFACE_STRUCTURES: GenerationStep_Decoration;
  readonly TOP_LAYER_MODIFICATION: GenerationStep_Decoration;
  readonly UNDERGROUND_DECORATION: GenerationStep_Decoration;
  readonly UNDERGROUND_ORES: GenerationStep_Decoration;
  readonly UNDERGROUND_STRUCTURES: GenerationStep_Decoration;
  readonly VEGETAL_DECORATION: GenerationStep_Decoration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GenerationStep_Decoration]>;
  valueOf(arg0: string): GenerationStep_Decoration;
  values(): Array<GenerationStep_Decoration>;
}

/** JVM class net.minecraft.world.level.levelgen.GeodeBlockSettings. */
export interface GeodeBlockSettingsMembers {
  readonly alternateInnerLayerProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly cannotReplace: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  readonly fillingProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly innerLayerProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly innerPlacements: JavaList<j_net_minecraft_world_level_block_state.BlockState>;
  readonly invalidBlocks: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  readonly middleLayerProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
  readonly outerLayerProvider: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider;
}
export type GeodeBlockSettings = GeodeBlockSettingsMembers;
export interface GeodeBlockSettingsStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg2: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg3: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg4: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg5: JavaList<j_net_minecraft_world_level_block_state.BlockState>, arg6: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg7: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): GeodeBlockSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GeodeBlockSettings]>;
}

/** JVM class net.minecraft.world.level.levelgen.GeodeCrackSettings. */
export interface GeodeCrackSettingsMembers {
  readonly baseCrackSize: number;
  readonly crackPointOffset: number;
  readonly generateCrackChance: number;
}
export type GeodeCrackSettings = GeodeCrackSettingsMembers;
export interface GeodeCrackSettingsStatics {
  new(arg0: number, arg1: number, arg2: number): GeodeCrackSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GeodeCrackSettings]>;
}

/** JVM class net.minecraft.world.level.levelgen.GeodeLayerSettings. */
export interface GeodeLayerSettingsMembers {
  readonly filling: number;
  readonly innerLayer: number;
  readonly middleLayer: number;
  readonly outerLayer: number;
}
export type GeodeLayerSettings = GeodeLayerSettingsMembers;
export interface GeodeLayerSettingsStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number): GeodeLayerSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GeodeLayerSettings]>;
}

/** JVM class net.minecraft.world.level.levelgen.Heightmap. */
export interface HeightmapMembers {
  getFirstAvailable(arg0: number, arg1: number): number;
  getHighestTaken(arg0: number, arg1: number): number;
  getRawData(): Array<bigint>;
  setRawData(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: Heightmap_Types, arg2: Array<bigint>): void;
  update(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type Heightmap = HeightmapMembers;
export interface HeightmapStatics {
  new(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: Heightmap_Types): Heightmap;
  primeHeightmaps(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: JavaSet<Heightmap_Types>): void;
}

/** Live JVM enum net.minecraft.world.level.levelgen.Heightmap$Types; constants are host handles, not strings. */
export type Heightmap_Types = JavaEnum<"net.minecraft.world.level.levelgen.Heightmap$Types", "MOTION_BLOCKING" | "MOTION_BLOCKING_NO_LEAVES" | "OCEAN_FLOOR" | "OCEAN_FLOOR_WG" | "WORLD_SURFACE" | "WORLD_SURFACE_WG"> & Heightmap_TypesMembers;
export interface Heightmap_TypesMembers {
  getSerializationKey(): string;
  getSerializedName(): string;
  isOpaque(): JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>;
  keepAfterWorldgen(): boolean;
  sendToClient(): boolean;
}
export interface Heightmap_TypesStatics {
  readonly MOTION_BLOCKING: Heightmap_Types;
  readonly MOTION_BLOCKING_NO_LEAVES: Heightmap_Types;
  readonly OCEAN_FLOOR: Heightmap_Types;
  readonly OCEAN_FLOOR_WG: Heightmap_Types;
  readonly WORLD_SURFACE: Heightmap_Types;
  readonly WORLD_SURFACE_WG: Heightmap_Types;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Heightmap_Types]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Heightmap_Types>;
  valueOf(arg0: string): Heightmap_Types;
  values(): Array<Heightmap_Types>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.Heightmap$Usage; constants are host handles, not strings. */
export type Heightmap_Usage = JavaEnum<"net.minecraft.world.level.levelgen.Heightmap$Usage", "CLIENT" | "LIVE_WORLD" | "WORLDGEN"> & Heightmap_UsageMembers;
export interface Heightmap_UsageMembers {
}
export interface Heightmap_UsageStatics {
  readonly CLIENT: Heightmap_Usage;
  readonly LIVE_WORLD: Heightmap_Usage;
  readonly WORLDGEN: Heightmap_Usage;
  valueOf(arg0: string): Heightmap_Usage;
  values(): Array<Heightmap_Usage>;
}

/** JVM class net.minecraft.world.level.levelgen.LegacyRandomSource. */
export interface LegacyRandomSourceMembers {
  readonly __javaSupertypes?: readonly [BitRandomSource];
  fork(): j_net_minecraft_util.RandomSource;
  forkPositional(): PositionalRandomFactory;
  next(arg0: number): number;
  nextGaussian(): number;
  setSeed(arg0: bigint): void;
}
export type LegacyRandomSource = LegacyRandomSourceMembers & BitRandomSource;
export interface LegacyRandomSourceStatics {
  new(arg0: bigint): LegacyRandomSource;
}

/** JVM class net.minecraft.world.level.levelgen.LegacyRandomSource$LegacyPositionalRandomFactory. */
export interface LegacyRandomSource_LegacyPositionalRandomFactoryMembers {
  readonly __javaSupertypes?: readonly [PositionalRandomFactory];
  at(arg0: number, arg1: number, arg2: number): j_net_minecraft_util.RandomSource;
  fromHashOf(arg0: string): j_net_minecraft_util.RandomSource;
  fromSeed(arg0: bigint): j_net_minecraft_util.RandomSource;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
}
export type LegacyRandomSource_LegacyPositionalRandomFactory = LegacyRandomSource_LegacyPositionalRandomFactoryMembers & PositionalRandomFactory;
export interface LegacyRandomSource_LegacyPositionalRandomFactoryStatics {
  new(arg0: bigint): LegacyRandomSource_LegacyPositionalRandomFactory;
}

/** JVM class net.minecraft.world.level.levelgen.MarsagliaPolarGaussian. */
export interface MarsagliaPolarGaussianMembers {
  nextGaussian(): number;
  readonly randomSource: j_net_minecraft_util.RandomSource;
  reset(): void;
}
export type MarsagliaPolarGaussian = MarsagliaPolarGaussianMembers;
export interface MarsagliaPolarGaussianStatics {
  new(arg0: j_net_minecraft_util.RandomSource): MarsagliaPolarGaussian;
}

/** JVM class net.minecraft.world.level.levelgen.NoiseBasedChunkGenerator. */
export interface NoiseBasedChunkGeneratorMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk.ChunkGenerator];
  addDebugScreenInfo(arg0: JavaList<string>, arg1: RandomState, arg2: j_net_minecraft_core.BlockPos): void;
  applyCarvers(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: bigint, arg2: RandomState, arg3: j_net_minecraft_world_level_biome.BiomeManager, arg4: j_net_minecraft_world_level.StructureManager, arg5: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  buildSurface(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: j_net_minecraft_world_level.StructureManager, arg2: RandomState, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  buildSurface(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: WorldGenerationContext, arg2: RandomState, arg3: j_net_minecraft_world_level.StructureManager, arg4: j_net_minecraft_world_level_biome.BiomeManager, arg5: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg6: j_net_minecraft_world_level_levelgen_blending.Blender): void;
  createBiomes(arg0: RandomState, arg1: j_net_minecraft_world_level_levelgen_blending.Blender, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  fillFromNoise(arg0: j_net_minecraft_world_level_levelgen_blending.Blender, arg1: RandomState, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  generatorSettings(): j_net_minecraft_core.Holder<NoiseGeneratorSettings>;
  getBaseColumn(arg0: number, arg1: number, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: RandomState): j_net_minecraft_world_level.NoiseColumn;
  getBaseHeight(arg0: number, arg1: number, arg2: Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: RandomState): number;
  getGenDepth(): number;
  getMinY(): number;
  getSeaLevel(): number;
  readonly settings: j_net_minecraft_core.Holder<NoiseGeneratorSettings>;
  spawnOriginalMobs(arg0: j_net_minecraft_server_level.WorldGenRegion): void;
  stable(arg0: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>): boolean;
}
export type NoiseBasedChunkGenerator = NoiseBasedChunkGeneratorMembers & j_net_minecraft_world_level_chunk.ChunkGenerator;
export interface NoiseBasedChunkGeneratorStatics {
  new(arg0: j_net_minecraft_world_level_biome.BiomeSource, arg1: j_net_minecraft_core.Holder<NoiseGeneratorSettings>): NoiseBasedChunkGenerator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoiseBasedChunkGenerator]>;
}

/** JVM class net.minecraft.world.level.levelgen.NoiseChunk. */
export interface NoiseChunkMembers {
  readonly __javaSupertypes?: readonly [DensityFunction_ContextProvider, DensityFunction_FunctionContext];
  advanceCellX(arg0: number): void;
  aquifer(): Aquifer;
  blockX(): number;
  blockY(): number;
  blockZ(): number;
  fillAllDirectly(arg0: Array<number>, arg1: DensityFunction): void;
  forIndex(arg0: number): NoiseChunk;
  getBlender(): j_net_minecraft_world_level_levelgen_blending.Blender;
  initializeForFirstCellX(): void;
  preliminarySurfaceLevel(arg0: number, arg1: number): number;
  selectCellYZ(arg0: number, arg1: number): void;
  stopInterpolation(): void;
  swapSlices(): void;
  updateForX(arg0: number, arg1: number): void;
  updateForY(arg0: number, arg1: number): void;
  updateForZ(arg0: number, arg1: number): void;
}
export type NoiseChunk = NoiseChunkMembers & DensityFunction_ContextProvider & DensityFunction_FunctionContext;
export interface NoiseChunkStatics {
  new(arg0: number, arg1: RandomState, arg2: number, arg3: number, arg4: NoiseSettings, arg5: DensityFunctions_BeardifierOrMarker, arg6: NoiseGeneratorSettings, arg7: Aquifer_FluidPicker, arg8: j_net_minecraft_world_level_levelgen_blending.Blender): NoiseChunk;
  forChunk(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: RandomState, arg2: DensityFunctions_BeardifierOrMarker, arg3: NoiseGeneratorSettings, arg4: Aquifer_FluidPicker, arg5: j_net_minecraft_world_level_levelgen_blending.Blender): NoiseChunk;
}

/** JVM interface net.minecraft.world.level.levelgen.NoiseChunk$BlockStateFiller. */
export interface NoiseChunk_BlockStateFillerMembers {
  calculate(arg0: DensityFunction_FunctionContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type NoiseChunk_BlockStateFiller = NoiseChunk_BlockStateFillerMembers;
export interface NoiseChunk_BlockStateFillerStatics {
}

/** JVM class net.minecraft.world.level.levelgen.NoiseChunk$NoiseInterpolator. */
export interface NoiseChunk_NoiseInterpolatorMembers {
  readonly __javaSupertypes?: readonly [DensityFunctions_MarkerOrMarked, JavaOpaque<"net.minecraft.world.level.levelgen.NoiseChunk$NoiseChunkDensityFunction">];
  compute(arg0: DensityFunction_FunctionContext): number;
  fillArray(arg0: Array<number>, arg1: DensityFunction_ContextProvider): void;
  type(): JavaOpaque<"net.minecraft.world.level.levelgen.DensityFunctions$Marker$Type">;
  wrapped(): DensityFunction;
}
export type NoiseChunk_NoiseInterpolator = NoiseChunk_NoiseInterpolatorMembers & DensityFunctions_MarkerOrMarked & JavaOpaque<"net.minecraft.world.level.levelgen.NoiseChunk$NoiseChunkDensityFunction">;
export interface NoiseChunk_NoiseInterpolatorStatics {
}

/** JVM record net.minecraft.world.level.levelgen.NoiseGeneratorSettings. */
export interface NoiseGeneratorSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  aquifersEnabled(): boolean;
  defaultBlock(): j_net_minecraft_world_level_block_state.BlockState;
  defaultFluid(): j_net_minecraft_world_level_block_state.BlockState;
  disableMobGeneration(): boolean;
  equals(arg0: object): boolean;
  getRandomSource(): WorldgenRandom_Algorithm;
  hashCode(): number;
  isAquifersEnabled(): boolean;
  noiseRouter(): NoiseRouter;
  noiseSettings(): NoiseSettings;
  oreVeinsEnabled(): boolean;
  seaLevel(): number;
  spawnTarget(): JavaList<j_net_minecraft_world_level_biome.Climate_ParameterPoint>;
  surfaceRule(): SurfaceRules_RuleSource;
  toString(): string;
  useLegacyRandomSource(): boolean;
}
export type NoiseGeneratorSettings = NoiseGeneratorSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface NoiseGeneratorSettingsStatics {
  new(arg0: NoiseSettings, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: NoiseRouter, arg4: SurfaceRules_RuleSource, arg5: JavaList<j_net_minecraft_world_level_biome.Climate_ParameterPoint>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): NoiseGeneratorSettings;
  readonly AMPLIFIED: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  readonly CAVES: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<NoiseGeneratorSettings>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NoiseGeneratorSettings]>;
  readonly END: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  readonly FLOATING_ISLANDS: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  readonly LARGE_BIOMES: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  readonly NETHER: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  readonly OVERWORLD: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<NoiseGeneratorSettings>): void;
  dummy(): NoiseGeneratorSettings;
}

/** JVM record net.minecraft.world.level.levelgen.NoiseRouter. */
export interface NoiseRouterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  barrierNoise(): DensityFunction;
  continents(): DensityFunction;
  depth(): DensityFunction;
  equals(arg0: object): boolean;
  erosion(): DensityFunction;
  finalDensity(): DensityFunction;
  fluidLevelFloodednessNoise(): DensityFunction;
  fluidLevelSpreadNoise(): DensityFunction;
  hashCode(): number;
  initialDensityWithoutJaggedness(): DensityFunction;
  lavaNoise(): DensityFunction;
  mapAll(arg0: DensityFunction_Visitor): NoiseRouter;
  ridges(): DensityFunction;
  temperature(): DensityFunction;
  toString(): string;
  vegetation(): DensityFunction;
  veinGap(): DensityFunction;
  veinRidged(): DensityFunction;
  veinToggle(): DensityFunction;
}
export type NoiseRouter = NoiseRouterMembers & JavaOpaque<"java.lang.Record">;
export interface NoiseRouterStatics {
  new(arg0: DensityFunction, arg1: DensityFunction, arg2: DensityFunction, arg3: DensityFunction, arg4: DensityFunction, arg5: DensityFunction, arg6: DensityFunction, arg7: DensityFunction, arg8: DensityFunction, arg9: DensityFunction, arg10: DensityFunction, arg11: DensityFunction, arg12: DensityFunction, arg13: DensityFunction, arg14: DensityFunction): NoiseRouter;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NoiseRouter]>;
}

/** JVM class net.minecraft.world.level.levelgen.NoiseRouterData. */
export interface NoiseRouterDataMembers {
}
export type NoiseRouterData = NoiseRouterDataMembers;
export interface NoiseRouterDataStatics {
  new(): NoiseRouterData;
  readonly CONTINENTS: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly CONTINENTS_LARGE: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly DEPTH: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly EROSION: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly EROSION_LARGE: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly FACTOR: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly GLOBAL_OFFSET: -0.50375;
  readonly ISLAND_CHUNK_DISTANCE: 64;
  readonly ISLAND_CHUNK_DISTANCE_SQR: 4096;
  readonly JAGGEDNESS: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly OFFSET: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly RIDGES: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  readonly RIDGES_FOLDED: j_net_minecraft_resources.ResourceKey<DensityFunction>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<DensityFunction>): j_net_minecraft_core.Holder<DensityFunction>;
  peaksAndValleys(arg0: number): number;
}

/** JVM class net.minecraft.world.level.levelgen.NoiseRouterData$QuantizedSpaghettiRarity. */
export interface NoiseRouterData_QuantizedSpaghettiRarityMembers {
}
export type NoiseRouterData_QuantizedSpaghettiRarity = NoiseRouterData_QuantizedSpaghettiRarityMembers;
export interface NoiseRouterData_QuantizedSpaghettiRarityStatics {
}

/** JVM class net.minecraft.world.level.levelgen.Noises. */
export interface NoisesMembers {
}
export type Noises = NoisesMembers;
export interface NoisesStatics {
  new(): Noises;
  readonly AQUIFER_BARRIER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly AQUIFER_FLUID_LEVEL_FLOODEDNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly AQUIFER_FLUID_LEVEL_SPREAD: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly AQUIFER_LAVA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly BADLANDS_PILLAR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly BADLANDS_PILLAR_ROOF: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly BADLANDS_SURFACE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CALCITE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CAVE_CHEESE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CAVE_ENTRANCE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CAVE_LAYER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CLAY_BANDS_OFFSET: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CONTINENTALNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly CONTINENTALNESS_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly EROSION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly EROSION_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly GRAVEL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly GRAVEL_LAYER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ICE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ICEBERG_PILLAR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ICEBERG_PILLAR_ROOF: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ICEBERG_SURFACE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly JAGGED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NETHERRACK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NETHER_STATE_SELECTOR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NETHER_WART: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NOODLE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NOODLE_RIDGE_A: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NOODLE_RIDGE_B: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly NOODLE_THICKNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ORE_GAP: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ORE_VEININESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ORE_VEIN_A: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly ORE_VEIN_B: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly PACKED_ICE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly PATCH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly PILLAR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly PILLAR_RARENESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly PILLAR_THICKNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly POWDER_SNOW: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly RIDGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SHIFT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SOUL_SAND_LAYER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_2D: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_2D_ELEVATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_2D_MODULATOR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_2D_THICKNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_3D_1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_3D_2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_3D_RARITY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_3D_THICKNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_ROUGHNESS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SPAGHETTI_ROUGHNESS_MODULATOR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SURFACE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SURFACE_SECONDARY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly SWAMP: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly TEMPERATURE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly TEMPERATURE_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  readonly VEGETATION_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>;
  instantiate(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: PositionalRandomFactory, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): j_net_minecraft_world_level_levelgen_synth.NormalNoise;
}

/** JVM record net.minecraft.world.level.levelgen.NoiseSettings. */
export interface NoiseSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  clampToHeightAccessor(arg0: j_net_minecraft_world_level.LevelHeightAccessor): NoiseSettings;
  equals(arg0: object): boolean;
  getCellHeight(): number;
  getCellWidth(): number;
  hashCode(): number;
  height(): number;
  minY(): number;
  noiseSizeHorizontal(): number;
  noiseSizeVertical(): number;
  toString(): string;
}
export type NoiseSettings = NoiseSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface NoiseSettingsStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number): NoiseSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NoiseSettings]>;
  create(arg0: number, arg1: number, arg2: number, arg3: number): NoiseSettings;
}

/** JVM class net.minecraft.world.level.levelgen.OreVeinifier. */
export interface OreVeinifierMembers {
}
export type OreVeinifier = OreVeinifierMembers;
export interface OreVeinifierStatics {
}

/** Live JVM enum net.minecraft.world.level.levelgen.OreVeinifier$VeinType; constants are host handles, not strings. */
export type OreVeinifier_VeinType = JavaEnum<"net.minecraft.world.level.levelgen.OreVeinifier$VeinType", "COPPER" | "IRON"> & OreVeinifier_VeinTypeMembers;
export interface OreVeinifier_VeinTypeMembers {
}
export interface OreVeinifier_VeinTypeStatics {
  readonly COPPER: OreVeinifier_VeinType;
  readonly IRON: OreVeinifier_VeinType;
  valueOf(arg0: string): OreVeinifier_VeinType;
  values(): Array<OreVeinifier_VeinType>;
}

/** JVM class net.minecraft.world.level.levelgen.PatrolSpawner. */
export interface PatrolSpawnerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.CustomSpawner];
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean, arg2: boolean): void;
}
export type PatrolSpawner = PatrolSpawnerMembers & j_net_minecraft_world_level.CustomSpawner;
export interface PatrolSpawnerStatics {
  new(): PatrolSpawner;
}

/** JVM class net.minecraft.world.level.levelgen.PhantomSpawner. */
export interface PhantomSpawnerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.CustomSpawner];
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean, arg2: boolean): void;
}
export type PhantomSpawner = PhantomSpawnerMembers & j_net_minecraft_world_level.CustomSpawner;
export interface PhantomSpawnerStatics {
  new(): PhantomSpawner;
}

/** JVM interface net.minecraft.world.level.levelgen.PositionalRandomFactory. */
export interface PositionalRandomFactoryMembers {
  at(arg0: number, arg1: number, arg2: number): j_net_minecraft_util.RandomSource;
  at(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_util.RandomSource;
  fromHashOf(arg0: string): j_net_minecraft_util.RandomSource;
  fromHashOf(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_util.RandomSource;
  fromSeed(arg0: bigint): j_net_minecraft_util.RandomSource;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
}
export type PositionalRandomFactory = PositionalRandomFactoryMembers;
export interface PositionalRandomFactoryStatics {
}

/** JVM class net.minecraft.world.level.levelgen.RandomState. */
export interface RandomStateMembers {
  aquiferRandom(): PositionalRandomFactory;
  getOrCreateNoise(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): j_net_minecraft_world_level_levelgen_synth.NormalNoise;
  getOrCreateRandomFactory(arg0: j_net_minecraft_resources.ResourceLocation): PositionalRandomFactory;
  oreRandom(): PositionalRandomFactory;
  router(): NoiseRouter;
  sampler(): j_net_minecraft_world_level_biome.Climate_Sampler;
  surfaceSystem(): SurfaceSystem;
}
export type RandomState = RandomStateMembers;
export interface RandomStateStatics {
  create(arg0: j_net_minecraft_core.HolderGetter_Provider, arg1: j_net_minecraft_resources.ResourceKey<NoiseGeneratorSettings>, arg2: bigint): RandomState;
  create(arg0: NoiseGeneratorSettings, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg2: bigint): RandomState;
}

/** JVM class net.minecraft.world.level.levelgen.RandomSupport. */
export interface RandomSupportMembers {
}
export type RandomSupport = RandomSupportMembers;
export interface RandomSupportStatics {
  new(): RandomSupport;
  readonly GOLDEN_RATIO_64: -7046029254386353000;
  readonly SILVER_RATIO_64: 7640891576956013000;
  generateUniqueSeed(): bigint;
  mixStafford13(arg0: bigint): bigint;
  seedFromHashOf(arg0: string): RandomSupport_Seed128bit;
  upgradeSeedTo128bit(arg0: bigint): RandomSupport_Seed128bit;
  upgradeSeedTo128bitUnmixed(arg0: bigint): RandomSupport_Seed128bit;
}

/** JVM record net.minecraft.world.level.levelgen.RandomSupport$Seed128bit. */
export interface RandomSupport_Seed128bitMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  mixed(): RandomSupport_Seed128bit;
  seedHi(): bigint;
  seedLo(): bigint;
  toString(): string;
  xor(arg0: bigint, arg1: bigint): RandomSupport_Seed128bit;
  xor(arg0: RandomSupport_Seed128bit): RandomSupport_Seed128bit;
}
export type RandomSupport_Seed128bit = RandomSupport_Seed128bitMembers & JavaOpaque<"java.lang.Record">;
export interface RandomSupport_Seed128bitStatics {
  new(arg0: bigint, arg1: bigint): RandomSupport_Seed128bit;
}

/** JVM class net.minecraft.world.level.levelgen.SingleThreadedRandomSource. */
export interface SingleThreadedRandomSourceMembers {
  readonly __javaSupertypes?: readonly [BitRandomSource];
  fork(): j_net_minecraft_util.RandomSource;
  forkPositional(): PositionalRandomFactory;
  next(arg0: number): number;
  nextGaussian(): number;
  setSeed(arg0: bigint): void;
}
export type SingleThreadedRandomSource = SingleThreadedRandomSourceMembers & BitRandomSource;
export interface SingleThreadedRandomSourceStatics {
  new(arg0: bigint): SingleThreadedRandomSource;
}

/** JVM class net.minecraft.world.level.levelgen.SurfaceRules. */
export interface SurfaceRulesMembers {
}
export type SurfaceRules = SurfaceRulesMembers;
export interface SurfaceRulesStatics {
  new(): SurfaceRules;
  readonly DEEP_UNDER_FLOOR: SurfaceRules_ConditionSource;
  readonly ON_CEILING: SurfaceRules_ConditionSource;
  readonly ON_FLOOR: SurfaceRules_ConditionSource;
  readonly UNDER_CEILING: SurfaceRules_ConditionSource;
  readonly UNDER_FLOOR: SurfaceRules_ConditionSource;
  readonly VERY_DEEP_UNDER_FLOOR: SurfaceRules_ConditionSource;
  abovePreliminarySurface(): SurfaceRules_ConditionSource;
  bandlands(): SurfaceRules_RuleSource;
  hole(): SurfaceRules_ConditionSource;
  ifTrue(arg0: SurfaceRules_ConditionSource, arg1: SurfaceRules_RuleSource): SurfaceRules_RuleSource;
  isBiome(...arg0: Array<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_biome.Biome>>): SurfaceRules_ConditionSource;
  noiseCondition(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number): SurfaceRules_ConditionSource;
  noiseCondition(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>, arg1: number, arg2: number): SurfaceRules_ConditionSource;
  not(arg0: SurfaceRules_ConditionSource): SurfaceRules_ConditionSource;
  sequence(...arg0: Array<SurfaceRules_RuleSource>): SurfaceRules_RuleSource;
  state(arg0: j_net_minecraft_world_level_block_state.BlockState): SurfaceRules_RuleSource;
  steep(): SurfaceRules_ConditionSource;
  stoneDepthCheck(arg0: number, arg1: boolean, arg2: number, arg3: j_net_minecraft_world_level_levelgen_placement.CaveSurface): SurfaceRules_ConditionSource;
  stoneDepthCheck(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_levelgen_placement.CaveSurface): SurfaceRules_ConditionSource;
  temperature(): SurfaceRules_ConditionSource;
  verticalGradient(arg0: string, arg1: VerticalAnchor, arg2: VerticalAnchor): SurfaceRules_ConditionSource;
  waterBlockCheck(arg0: number, arg1: number): SurfaceRules_ConditionSource;
  waterStartCheck(arg0: number, arg1: number): SurfaceRules_ConditionSource;
  yBlockCheck(arg0: VerticalAnchor, arg1: number): SurfaceRules_ConditionSource;
  yStartCheck(arg0: VerticalAnchor, arg1: number): SurfaceRules_ConditionSource;
}

/** JVM interface net.minecraft.world.level.levelgen.SurfaceRules$Condition. */
export interface SurfaceRules_ConditionMembers {
  test(): boolean;
}
export type SurfaceRules_Condition = SurfaceRules_ConditionMembers;
export interface SurfaceRules_ConditionStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.SurfaceRules$ConditionSource. */
export interface SurfaceRules_ConditionSourceMembers {
  readonly __javaSupertypes?: readonly [JavaFunction<SurfaceRules_Context, SurfaceRules_Condition>];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<SurfaceRules_ConditionSource>;
}
export type SurfaceRules_ConditionSource = SurfaceRules_ConditionSourceMembers & JavaFunction<SurfaceRules_Context, SurfaceRules_Condition>;
export interface SurfaceRules_ConditionSourceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SurfaceRules_ConditionSource]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [SurfaceRules_ConditionSource]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [SurfaceRules_ConditionSource]>;
}

/** JVM class net.minecraft.world.level.levelgen.SurfaceRules$Context. */
export interface SurfaceRules_ContextMembers {
  blockX: number;
  blockY: number;
  blockZ: number;
  readonly context: WorldGenerationContext;
  getSeaLevel(): number;
  readonly randomState: RandomState;
}
export type SurfaceRules_Context = SurfaceRules_ContextMembers;
export interface SurfaceRules_ContextStatics {
}

/** JVM abstract net.minecraft.world.level.levelgen.SurfaceRules$LazyCondition. */
export interface SurfaceRules_LazyConditionMembers {
  readonly __javaSupertypes?: readonly [SurfaceRules_Condition];
  test(): boolean;
}
export type SurfaceRules_LazyCondition = SurfaceRules_LazyConditionMembers & SurfaceRules_Condition;
export interface SurfaceRules_LazyConditionStatics {
}

/** JVM abstract net.minecraft.world.level.levelgen.SurfaceRules$LazyYCondition. */
export interface SurfaceRules_LazyYConditionMembers {
  readonly __javaSupertypes?: readonly [SurfaceRules_LazyCondition];
}
export type SurfaceRules_LazyYCondition = SurfaceRules_LazyYConditionMembers & SurfaceRules_LazyCondition;
export interface SurfaceRules_LazyYConditionStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.SurfaceRules$RuleSource. */
export interface SurfaceRules_RuleSourceMembers {
  readonly __javaSupertypes?: readonly [JavaFunction<SurfaceRules_Context, SurfaceRules_SurfaceRule>];
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<SurfaceRules_RuleSource>;
}
export type SurfaceRules_RuleSource = SurfaceRules_RuleSourceMembers & JavaFunction<SurfaceRules_Context, SurfaceRules_SurfaceRule>;
export interface SurfaceRules_RuleSourceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SurfaceRules_RuleSource]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [SurfaceRules_RuleSource]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [SurfaceRules_RuleSource]>;
}

/** JVM interface net.minecraft.world.level.levelgen.SurfaceRules$SurfaceRule. */
export interface SurfaceRules_SurfaceRuleMembers {
  tryApply(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type SurfaceRules_SurfaceRule = SurfaceRules_SurfaceRuleMembers;
export interface SurfaceRules_SurfaceRuleStatics {
}

/** JVM record net.minecraft.world.level.levelgen.SurfaceRules$VerticalGradientConditionSource. */
export interface SurfaceRules_VerticalGradientConditionSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SurfaceRules_ConditionSource];
  apply(arg0: SurfaceRules_Context): SurfaceRules_Condition;
  codec(): j_net_minecraft_util.KeyDispatchDataCodec<SurfaceRules_ConditionSource>;
  equals(arg0: object): boolean;
  falseAtAndAbove(): VerticalAnchor;
  hashCode(): number;
  randomName(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  trueAtAndBelow(): VerticalAnchor;
}
export type SurfaceRules_VerticalGradientConditionSource = SurfaceRules_VerticalGradientConditionSourceMembers & JavaOpaque<"java.lang.Record"> & SurfaceRules_ConditionSource;
export interface SurfaceRules_VerticalGradientConditionSourceStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: VerticalAnchor, arg2: VerticalAnchor): SurfaceRules_VerticalGradientConditionSource;
}

/** JVM class net.minecraft.world.level.levelgen.SurfaceSystem. */
export interface SurfaceSystemMembers {
  buildSurface(arg0: RandomState, arg1: j_net_minecraft_world_level_biome.BiomeManager, arg2: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg3: boolean, arg4: WorldGenerationContext, arg5: j_net_minecraft_world_level_chunk.ChunkAccess, arg6: NoiseChunk, arg7: SurfaceRules_RuleSource): void;
  getSeaLevel(): number;
  topMaterial(arg0: SurfaceRules_RuleSource, arg1: j_net_minecraft_world_level_levelgen_carver.CarvingContext, arg2: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg3: j_net_minecraft_world_level_chunk.ChunkAccess, arg4: NoiseChunk, arg5: j_net_minecraft_core.BlockPos, arg6: boolean): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
}
export type SurfaceSystem = SurfaceSystemMembers;
export interface SurfaceSystemStatics {
  new(arg0: RandomState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: PositionalRandomFactory): SurfaceSystem;
}

/** JVM class net.minecraft.world.level.levelgen.ThreadSafeLegacyRandomSource. */
export interface ThreadSafeLegacyRandomSourceMembers {
  readonly __javaSupertypes?: readonly [BitRandomSource];
  fork(): j_net_minecraft_util.RandomSource;
  forkPositional(): PositionalRandomFactory;
  next(arg0: number): number;
  nextGaussian(): number;
  setSeed(arg0: bigint): void;
}
export type ThreadSafeLegacyRandomSource = ThreadSafeLegacyRandomSourceMembers & BitRandomSource;
export interface ThreadSafeLegacyRandomSourceStatics {
  new(arg0: bigint): ThreadSafeLegacyRandomSource;
}

/** JVM interface net.minecraft.world.level.levelgen.VerticalAnchor. */
export interface VerticalAnchorMembers {
  resolveY(arg0: WorldGenerationContext): number;
}
export type VerticalAnchor = VerticalAnchorMembers;
export interface VerticalAnchorStatics {
  readonly BOTTOM: VerticalAnchor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VerticalAnchor]>;
  readonly TOP: VerticalAnchor;
  aboveBottom(arg0: number): VerticalAnchor;
  absolute(arg0: number): VerticalAnchor;
  belowTop(arg0: number): VerticalAnchor;
  bottom(): VerticalAnchor;
  top(): VerticalAnchor;
}

/** JVM record net.minecraft.world.level.levelgen.VerticalAnchor$AboveBottom. */
export interface VerticalAnchor_AboveBottomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, VerticalAnchor];
  equals(arg0: object): boolean;
  hashCode(): number;
  offset(): number;
  resolveY(arg0: WorldGenerationContext): number;
  toString(): string;
}
export type VerticalAnchor_AboveBottom = VerticalAnchor_AboveBottomMembers & JavaOpaque<"java.lang.Record"> & VerticalAnchor;
export interface VerticalAnchor_AboveBottomStatics {
  new(arg0: number): VerticalAnchor_AboveBottom;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VerticalAnchor_AboveBottom]>;
}

/** JVM record net.minecraft.world.level.levelgen.VerticalAnchor$Absolute. */
export interface VerticalAnchor_AbsoluteMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, VerticalAnchor];
  equals(arg0: object): boolean;
  hashCode(): number;
  resolveY(arg0: WorldGenerationContext): number;
  toString(): string;
  y(): number;
}
export type VerticalAnchor_Absolute = VerticalAnchor_AbsoluteMembers & JavaOpaque<"java.lang.Record"> & VerticalAnchor;
export interface VerticalAnchor_AbsoluteStatics {
  new(arg0: number): VerticalAnchor_Absolute;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VerticalAnchor_Absolute]>;
}

/** JVM record net.minecraft.world.level.levelgen.VerticalAnchor$BelowTop. */
export interface VerticalAnchor_BelowTopMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, VerticalAnchor];
  equals(arg0: object): boolean;
  hashCode(): number;
  offset(): number;
  resolveY(arg0: WorldGenerationContext): number;
  toString(): string;
}
export type VerticalAnchor_BelowTop = VerticalAnchor_BelowTopMembers & JavaOpaque<"java.lang.Record"> & VerticalAnchor;
export interface VerticalAnchor_BelowTopStatics {
  new(arg0: number): VerticalAnchor_BelowTop;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VerticalAnchor_BelowTop]>;
}

/** JVM record net.minecraft.world.level.levelgen.WorldDimensions. */
export interface WorldDimensionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  bake(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_dimension.LevelStem>): WorldDimensions_Complete;
  dimensions(): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>;
  equals(arg0: object): boolean;
  get(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>): JavaOptional<j_net_minecraft_world_level_dimension.LevelStem>;
  hashCode(): number;
  isDebug(): boolean;
  levels(): JavaOpaque<"com.google.common.collect.ImmutableSet", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>]>;
  overworld(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  replaceOverworldGenerator(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator): WorldDimensions;
  toString(): string;
}
export type WorldDimensions = WorldDimensionsMembers & JavaOpaque<"java.lang.Record">;
export interface WorldDimensionsStatics {
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>): WorldDimensions;
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_dimension.LevelStem>): WorldDimensions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WorldDimensions]>;
  keysInOrder(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>]>): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>]>;
  withOverworld(arg0: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_dimension.DimensionType>, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>;
  withOverworld(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_dimension.DimensionType>, arg1: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>;
}

/** JVM record net.minecraft.world.level.levelgen.WorldDimensions$Complete. */
export interface WorldDimensions_CompleteMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimensions(): j_net_minecraft_core.Registry<j_net_minecraft_world_level_dimension.LevelStem>;
  dimensionsRegistryAccess(): j_net_minecraft_core.RegistryAccess_Frozen;
  equals(arg0: object): boolean;
  hashCode(): number;
  lifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
  specialWorldProperty(): j_net_minecraft_world_level_storage.PrimaryLevelData_SpecialWorldProperty;
  toString(): string;
}
export type WorldDimensions_Complete = WorldDimensions_CompleteMembers & JavaOpaque<"java.lang.Record">;
export interface WorldDimensions_CompleteStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_dimension.LevelStem>, arg1: j_net_minecraft_world_level_storage.PrimaryLevelData_SpecialWorldProperty): WorldDimensions_Complete;
}

/** JVM class net.minecraft.world.level.levelgen.WorldGenerationContext. */
export interface WorldGenerationContextMembers {
  getGenDepth(): number;
  getMinGenY(): number;
  level(): j_net_minecraft_world_level.Level;
}
export type WorldGenerationContext = WorldGenerationContextMembers;
export interface WorldGenerationContextStatics {
  new(arg0: j_net_minecraft_world_level_chunk.ChunkGenerator, arg1: j_net_minecraft_world_level.LevelHeightAccessor): WorldGenerationContext;
  new(arg0: j_net_minecraft_world_level_chunk.ChunkGenerator, arg1: j_net_minecraft_world_level.LevelHeightAccessor, arg2: j_net_minecraft_world_level.Level | null): WorldGenerationContext;
}

/** JVM class net.minecraft.world.level.levelgen.WorldgenRandom. */
export interface WorldgenRandomMembers {
  readonly __javaSupertypes?: readonly [LegacyRandomSource];
  fork(): j_net_minecraft_util.RandomSource;
  forkPositional(): PositionalRandomFactory;
  getCount(): number;
  next(arg0: number): number;
  setDecorationSeed(arg0: bigint, arg1: number, arg2: number): bigint;
  setFeatureSeed(arg0: bigint, arg1: number, arg2: number): void;
  setLargeFeatureSeed(arg0: bigint, arg1: number, arg2: number): void;
  setLargeFeatureWithSalt(arg0: bigint, arg1: number, arg2: number, arg3: number): void;
  setSeed(arg0: bigint): void;
}
export type WorldgenRandom = WorldgenRandomMembers & LegacyRandomSource;
export interface WorldgenRandomStatics {
  new(arg0: j_net_minecraft_util.RandomSource): WorldgenRandom;
  seedSlimeChunk(arg0: number, arg1: number, arg2: bigint, arg3: bigint): j_net_minecraft_util.RandomSource;
}

/** Live JVM enum net.minecraft.world.level.levelgen.WorldgenRandom$Algorithm; constants are host handles, not strings. */
export type WorldgenRandom_Algorithm = JavaEnum<"net.minecraft.world.level.levelgen.WorldgenRandom$Algorithm", "LEGACY" | "XOROSHIRO"> & WorldgenRandom_AlgorithmMembers;
export interface WorldgenRandom_AlgorithmMembers {
  newInstance(arg0: bigint): j_net_minecraft_util.RandomSource;
}
export interface WorldgenRandom_AlgorithmStatics {
  readonly LEGACY: WorldgenRandom_Algorithm;
  readonly XOROSHIRO: WorldgenRandom_Algorithm;
  valueOf(arg0: string): WorldgenRandom_Algorithm;
  values(): Array<WorldgenRandom_Algorithm>;
}

/** JVM record net.minecraft.world.level.levelgen.WorldGenSettings. */
export interface WorldGenSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimensions(): WorldDimensions;
  equals(arg0: object): boolean;
  hashCode(): number;
  options(): WorldOptions;
  toString(): string;
}
export type WorldGenSettings = WorldGenSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface WorldGenSettingsStatics {
  new(arg0: WorldOptions, arg1: WorldDimensions): WorldGenSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WorldGenSettings]>;
  encode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: WorldOptions, arg2: j_net_minecraft_core.RegistryAccess): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  encode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: WorldOptions, arg2: WorldDimensions): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
}

/** JVM class net.minecraft.world.level.levelgen.WorldOptions. */
export interface WorldOptionsMembers {
  generateBonusChest(): boolean;
  generateStructures(): boolean;
  isOldCustomizedWorld(): boolean;
  seed(): bigint;
  withBonusChest(arg0: boolean): WorldOptions;
  withSeed(arg0: JavaOptionalBigInt): WorldOptions;
  withStructures(arg0: boolean): WorldOptions;
}
export type WorldOptions = WorldOptionsMembers;
export interface WorldOptionsStatics {
  new(arg0: bigint, arg1: boolean, arg2: boolean): WorldOptions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WorldOptions]>;
  readonly DEMO_OPTIONS: WorldOptions;
  defaultWithRandomSeed(): WorldOptions;
  parseSeed(arg0: string): JavaOptionalBigInt;
  randomSeed(): bigint;
  testWorldWithRandomSeed(): WorldOptions;
}

/** JVM class net.minecraft.world.level.levelgen.Xoroshiro128PlusPlus. */
export interface Xoroshiro128PlusPlusMembers {
  nextLong(): bigint;
}
export type Xoroshiro128PlusPlus = Xoroshiro128PlusPlusMembers;
export interface Xoroshiro128PlusPlusStatics {
  new(arg0: bigint, arg1: bigint): Xoroshiro128PlusPlus;
  new(arg0: RandomSupport_Seed128bit): Xoroshiro128PlusPlus;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Xoroshiro128PlusPlus]>;
}

/** JVM class net.minecraft.world.level.levelgen.XoroshiroRandomSource. */
export interface XoroshiroRandomSourceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util.RandomSource];
  consumeCount(arg0: number): void;
  fork(): j_net_minecraft_util.RandomSource;
  forkPositional(): PositionalRandomFactory;
  nextBoolean(): boolean;
  nextDouble(): number;
  nextFloat(): number;
  nextGaussian(): number;
  nextInt(): number;
  nextInt(arg0: number): number;
  nextLong(): bigint;
  setSeed(arg0: bigint): void;
}
export type XoroshiroRandomSource = XoroshiroRandomSourceMembers & j_net_minecraft_util.RandomSource;
export interface XoroshiroRandomSourceStatics {
  new(arg0: bigint): XoroshiroRandomSource;
  new(arg0: bigint, arg1: bigint): XoroshiroRandomSource;
  new(arg0: RandomSupport_Seed128bit): XoroshiroRandomSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [XoroshiroRandomSource]>;
}

/** JVM class net.minecraft.world.level.levelgen.XoroshiroRandomSource$XoroshiroPositionalRandomFactory. */
export interface XoroshiroRandomSource_XoroshiroPositionalRandomFactoryMembers {
  readonly __javaSupertypes?: readonly [PositionalRandomFactory];
  at(arg0: number, arg1: number, arg2: number): j_net_minecraft_util.RandomSource;
  fromHashOf(arg0: string): j_net_minecraft_util.RandomSource;
  fromSeed(arg0: bigint): j_net_minecraft_util.RandomSource;
  parityConfigString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
}
export type XoroshiroRandomSource_XoroshiroPositionalRandomFactory = XoroshiroRandomSource_XoroshiroPositionalRandomFactoryMembers & PositionalRandomFactory;
export interface XoroshiroRandomSource_XoroshiroPositionalRandomFactoryStatics {
  new(arg0: bigint, arg1: bigint): XoroshiroRandomSource_XoroshiroPositionalRandomFactory;
}
