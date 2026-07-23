// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_world_flag from './io.papermc.paper.world.flag.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_material from './org.bukkit.material.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.generator.BiomeParameterPoint. */
export interface BiomeParameterPointMembers {
  getContinentalness(): number;
  getDepth(): number;
  getErosion(): number;
  getHumidity(): number;
  getMaxContinentalness(): number;
  getMaxDepth(): number;
  getMaxErosion(): number;
  getMaxHumidity(): number;
  getMaxTemperature(): number;
  getMaxWeirdness(): number;
  getMinContinentalness(): number;
  getMinDepth(): number;
  getMinErosion(): number;
  getMinHumidity(): number;
  getMinTemperature(): number;
  getMinWeirdness(): number;
  getTemperature(): number;
  getWeirdness(): number;
}
export type BiomeParameterPoint = BiomeParameterPointMembers;
export interface BiomeParameterPointStatics {
}

/** JVM abstract org.bukkit.generator.BiomeProvider. */
export interface BiomeProviderMembers {
  getBiome(arg0: WorldInfo, arg1: number, arg2: number, arg3: number): j_org_bukkit_block.Biome;
  getBiome(arg0: WorldInfo, arg1: number, arg2: number, arg3: number, arg4: BiomeParameterPoint): j_org_bukkit_block.Biome;
  getBiomes(arg0: WorldInfo): JavaList<j_org_bukkit_block.Biome>;
}
export type BiomeProvider = BiomeProviderMembers;
export interface BiomeProviderStatics {
  new(): BiomeProvider;
}

/** JVM abstract org.bukkit.generator.BlockPopulator. */
export interface BlockPopulatorMembers {
  populate(arg0: j_org_bukkit.World, arg1: JavaOpaque<"java.util.Random">, arg2: j_org_bukkit.Chunk): void;
  populate(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: LimitedRegion): void;
}
export type BlockPopulator = BlockPopulatorMembers;
export interface BlockPopulatorStatics {
  new(): BlockPopulator;
}

/** JVM abstract org.bukkit.generator.ChunkGenerator. */
export interface ChunkGeneratorMembers {
  canSpawn(arg0: j_org_bukkit.World, arg1: number, arg2: number): boolean;
  createChunkData(arg0: j_org_bukkit.World): ChunkGenerator_ChunkData;
  generateBedrock(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: ChunkGenerator_ChunkData): void;
  generateCaves(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: ChunkGenerator_ChunkData): void;
  generateChunkData(arg0: j_org_bukkit.World, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: ChunkGenerator_BiomeGrid): ChunkGenerator_ChunkData;
  generateNoise(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: ChunkGenerator_ChunkData): void;
  generateSurface(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: ChunkGenerator_ChunkData): void;
  getBaseHeight(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number, arg4: j_org_bukkit.HeightMap): number;
  getDefaultBiomeProvider(arg0: WorldInfo): BiomeProvider | null;
  getDefaultPopulators(arg0: j_org_bukkit.World): JavaList<BlockPopulator>;
  getFixedSpawnLocation(arg0: j_org_bukkit.World, arg1: JavaOpaque<"java.util.Random">): j_org_bukkit.Location | null;
  isParallelCapable(): boolean;
  shouldGenerateBedrock(): boolean;
  shouldGenerateCaves(): boolean;
  shouldGenerateCaves(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number): boolean;
  shouldGenerateDecorations(): boolean;
  shouldGenerateDecorations(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number): boolean;
  shouldGenerateMobs(): boolean;
  shouldGenerateMobs(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number): boolean;
  shouldGenerateNoise(): boolean;
  shouldGenerateNoise(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number): boolean;
  shouldGenerateStructures(): boolean;
  shouldGenerateStructures(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number): boolean;
  shouldGenerateSurface(): boolean;
  shouldGenerateSurface(arg0: WorldInfo, arg1: JavaOpaque<"java.util.Random">, arg2: number, arg3: number): boolean;
}
export type ChunkGenerator = ChunkGeneratorMembers;
export interface ChunkGeneratorStatics {
  new(): ChunkGenerator;
}

/** JVM interface org.bukkit.generator.ChunkGenerator$BiomeGrid. */
export interface ChunkGenerator_BiomeGridMembers {
  getBiome(arg0: number, arg1: number): j_org_bukkit_block.Biome;
  getBiome(arg0: number, arg1: number, arg2: number): j_org_bukkit_block.Biome;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: j_org_bukkit_block.Biome): void;
  setBiome(arg0: number, arg1: number, arg2: j_org_bukkit_block.Biome): void;
}
export type ChunkGenerator_BiomeGrid = ChunkGenerator_BiomeGridMembers;
export interface ChunkGenerator_BiomeGridStatics {
}

/** JVM interface org.bukkit.generator.ChunkGenerator$ChunkData. */
export interface ChunkGenerator_ChunkDataMembers {
  getBiome(arg0: number, arg1: number, arg2: number): j_org_bukkit_block.Biome;
  getBlockData(arg0: number, arg1: number, arg2: number): j_org_bukkit_block_data.BlockData;
  getData(arg0: number, arg1: number, arg2: number): number;
  getHeight(arg0: j_org_bukkit.HeightMap, arg1: number, arg2: number): number;
  getMaxHeight(): number;
  getMinHeight(): number;
  getType(arg0: number, arg1: number, arg2: number): j_org_bukkit.Material;
  getTypeAndData(arg0: number, arg1: number, arg2: number): j_org_bukkit_material.MaterialData;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: j_org_bukkit.Material): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: j_org_bukkit_block_data.BlockData): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: j_org_bukkit_material.MaterialData): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_org_bukkit.Material): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_org_bukkit_block_data.BlockData): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_org_bukkit_material.MaterialData): void;
}
export type ChunkGenerator_ChunkData = ChunkGenerator_ChunkDataMembers;
export interface ChunkGenerator_ChunkDataStatics {
}

/** JVM interface org.bukkit.generator.LimitedRegion. */
export interface LimitedRegionMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.RegionAccessor];
  getBlockData(arg0: j_org_bukkit_util.Vector): j_org_bukkit_block_data.BlockData;
  getBlockState(arg0: j_org_bukkit_util.Vector): j_org_bukkit_block.BlockState;
  getBuffer(): number;
  getCenterBlockX(): number;
  getCenterBlockZ(): number;
  getCenterChunkX(): number;
  getCenterChunkZ(): number;
  getTileEntities(): JavaList<j_org_bukkit_block.BlockState>;
  getWorld(): j_org_bukkit.World;
  isInRegion(arg0: number, arg1: number, arg2: number): boolean;
  isInRegion(arg0: j_org_bukkit.Location): boolean;
  scheduleBlockUpdate(arg0: number, arg1: number, arg2: number): void;
  scheduleBlockUpdate(arg0: j_org_bukkit_util.Vector): void;
  scheduleFluidUpdate(arg0: number, arg1: number, arg2: number): void;
  scheduleFluidUpdate(arg0: j_org_bukkit_util.Vector): void;
  setBlockData(arg0: j_org_bukkit_util.Vector, arg1: j_org_bukkit_block_data.BlockData): void;
  setBlockState(arg0: number, arg1: number, arg2: number, arg3: j_org_bukkit_block.BlockState): void;
  setBlockState(arg0: j_org_bukkit_util.Vector, arg1: j_org_bukkit_block.BlockState): void;
}
export type LimitedRegion = LimitedRegionMembers & j_org_bukkit.RegionAccessor;
export interface LimitedRegionStatics {
}

/** JVM interface org.bukkit.generator.WorldInfo. */
export interface WorldInfoMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_world_flag.FeatureFlagSetHolder];
  getEnvironment(): j_org_bukkit.World_Environment;
  getMaxHeight(): number;
  getMinHeight(): number;
  getName(): string;
  getSeed(): bigint;
  getUID(): JavaOpaque<"java.util.UUID">;
  vanillaBiomeProvider(): BiomeProvider;
}
export type WorldInfo = WorldInfoMembers & j_io_papermc_paper_world_flag.FeatureFlagSetHolder;
export interface WorldInfoStatics {
}
