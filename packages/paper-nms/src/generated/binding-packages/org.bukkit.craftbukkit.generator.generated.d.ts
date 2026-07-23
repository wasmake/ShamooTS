// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blending from './net.minecraft.world.level.levelgen.blending.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';

/** JVM class org.bukkit.craftbukkit.generator.CraftBiomeParameterPoint. */
export interface CraftBiomeParameterPointMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.BiomeParameterPoint">];
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
export type CraftBiomeParameterPoint = CraftBiomeParameterPointMembers & JavaOpaque<"org.bukkit.generator.BiomeParameterPoint">;
export interface CraftBiomeParameterPointStatics {
  createBiomeParameterPoint(arg0: j_net_minecraft_world_level_biome.Climate_Sampler, arg1: j_net_minecraft_world_level_biome.Climate_TargetPoint): JavaOpaque<"org.bukkit.generator.BiomeParameterPoint">;
}

/** JVM class org.bukkit.craftbukkit.generator.CraftChunkData. */
export interface CraftChunkDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">];
  breakLink(): void;
  getBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBlockData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getData(arg0: number, arg1: number, arg2: number): number;
  getHandle(): j_net_minecraft_world_level_chunk.ChunkAccess;
  getHeight(arg0: JavaOpaque<"org.bukkit.HeightMap">, arg1: number, arg2: number): number;
  getMaxHeight(): number;
  getMinHeight(): number;
  getType(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.Material">;
  getTypeAndData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.material.MaterialData">;
  getTypeId(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.Material">): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.material.MaterialData">): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_world_level_block_state.BlockState): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"org.bukkit.Material">): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"org.bukkit.material.MaterialData">): void;
}
export type CraftChunkData = CraftChunkDataMembers & JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">;
export interface CraftChunkDataStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_chunk.ChunkAccess): CraftChunkData;
}

/** JVM class org.bukkit.craftbukkit.generator.CraftLimitedRegion. */
export interface CraftLimitedRegionMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit.CraftRegionAccessor, JavaOpaque<"org.bukkit.generator.LimitedRegion">];
  addEntityToWorld(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  addEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  breakLink(): void;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"java.util.Random">, arg2: JavaOpaque<"org.bukkit.TreeType">): boolean;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"java.util.Random">, arg2: JavaOpaque<"org.bukkit.TreeType">, arg3: JavaConsumer<JavaOpaque<"org.bukkit.block.BlockState">>): boolean;
  getBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBlockData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockState(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.BlockState">;
  getBuffer(): number;
  getCenterChunkX(): number;
  getCenterChunkZ(): number;
  getComputedBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getFluidData(arg0: number, arg1: number, arg2: number): JavaOpaque<"io.papermc.paper.block.fluid.FluidData">;
  getHandle(): j_net_minecraft_world_level.WorldGenLevel;
  getHighestBlockYAt(arg0: number, arg1: number): number;
  getHighestBlockYAt(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.HeightMap">): number;
  getHighestBlockYAt(arg0: JavaOpaque<"org.bukkit.Location">): number;
  getHighestBlockYAt(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.HeightMap">): number;
  getNMSEntities(): Iterable<object>;
  getNMSEntities(): JavaCollection<j_net_minecraft_world_entity.Entity>;
  getTileEntities(): JavaList<JavaOpaque<"org.bukkit.block.BlockState">>;
  getType(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.Material">;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  isInRegion(arg0: number, arg1: number, arg2: number): boolean;
  isInRegion(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  loadEntities(): void;
  saveEntities(): void;
  scheduleBlockUpdate(arg0: number, arg1: number, arg2: number): void;
  scheduleFluidUpdate(arg0: number, arg1: number, arg2: number): void;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): void;
  setBlockData(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlockState(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.block.BlockState">): void;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>, arg2: JavaConsumer<T>, arg3: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T;
}
export type CraftLimitedRegion = CraftLimitedRegionMembers & j_org_bukkit_craftbukkit.CraftRegionAccessor & JavaOpaque<"org.bukkit.generator.LimitedRegion">;
export interface CraftLimitedRegionStatics {
  new(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.ChunkPos): CraftLimitedRegion;
}

/** JVM class org.bukkit.craftbukkit.generator.CraftWorldInfo. */
export interface CraftWorldInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.WorldInfo">];
  getEnvironment(): JavaOpaque<"org.bukkit.World$Environment">;
  getFeatureFlags(): JavaSet<JavaOpaque<"org.bukkit.FeatureFlag">>;
  getMaxHeight(): number;
  getMinHeight(): number;
  getName(): string;
  getSeed(): bigint;
  getUID(): JavaOpaque<"java.util.UUID">;
  vanillaBiomeProvider(): JavaOpaque<"org.bukkit.generator.BiomeProvider">;
}
export type CraftWorldInfo = CraftWorldInfoMembers & JavaOpaque<"org.bukkit.generator.WorldInfo">;
export interface CraftWorldInfoStatics {
  new(arg0: j_net_minecraft_world_level_storage.PrimaryLevelData, arg1: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg2: JavaOpaque<"org.bukkit.World$Environment">, arg3: j_net_minecraft_world_level_dimension.DimensionType, arg4: j_net_minecraft_world_level_chunk.ChunkGenerator, arg5: j_net_minecraft_core.RegistryAccess_Frozen): CraftWorldInfo;
}

/** JVM class org.bukkit.craftbukkit.generator.CustomChunkGenerator. */
export interface CustomChunkGeneratorMembers {
  readonly __javaSupertypes?: readonly [InternalChunkGenerator];
  addDebugScreenInfo(arg0: JavaList<string>, arg1: j_net_minecraft_world_level_levelgen.RandomState, arg2: j_net_minecraft_core.BlockPos): void;
  applyBiomeDecoration(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkAccess, arg2: j_net_minecraft_world_level.StructureManager): void;
  applyCarvers(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: bigint, arg2: j_net_minecraft_world_level_levelgen.RandomState, arg3: j_net_minecraft_world_level_biome.BiomeManager, arg4: j_net_minecraft_world_level.StructureManager, arg5: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  buildSurface(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_levelgen.RandomState, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [j_net_minecraft_world_level_chunk.ChunkGenerator]>;
  createStructures(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkAccess, arg4: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg5: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): void;
  fillFromNoise(arg0: j_net_minecraft_world_level_levelgen_blending.Blender, arg1: j_net_minecraft_world_level_levelgen.RandomState, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  getBaseColumn(arg0: number, arg1: number, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: j_net_minecraft_world_level_levelgen.RandomState): j_net_minecraft_world_level.NoiseColumn;
  getBaseHeight(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: j_net_minecraft_world_level_levelgen.RandomState): number;
  getBiomeSource(): j_net_minecraft_world_level_biome.BiomeSource;
  getDelegate(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  getGenDepth(): number;
  getMinY(): number;
  getMobsAt(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_entity.MobCategory, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level_biome.MobSpawnSettings_SpawnerData>;
  getSeaLevel(): number;
  getSpawnHeight(arg0: j_net_minecraft_world_level.LevelHeightAccessor): number;
  spawnOriginalMobs(arg0: j_net_minecraft_server_level.WorldGenRegion): void;
}
export type CustomChunkGenerator = CustomChunkGeneratorMembers & InternalChunkGenerator;
export interface CustomChunkGeneratorStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: JavaOpaque<"org.bukkit.generator.ChunkGenerator">): CustomChunkGenerator;
}

/** JVM class org.bukkit.craftbukkit.generator.CustomWorldChunkManager. */
export interface CustomWorldChunkManagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_biome.BiomeSource];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [j_net_minecraft_world_level_biome.BiomeSource]>;
  collectPossibleBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>]>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_biome.Climate_Sampler): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  readonly vanillaBiomeSource: j_net_minecraft_world_level_biome.BiomeSource;
}
export type CustomWorldChunkManager = CustomWorldChunkManagerMembers & j_net_minecraft_world_level_biome.BiomeSource;
export interface CustomWorldChunkManagerStatics {
  new(arg0: JavaOpaque<"org.bukkit.generator.WorldInfo">, arg1: JavaOpaque<"org.bukkit.generator.BiomeProvider">, arg2: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg3: j_net_minecraft_world_level_biome.BiomeSource): CustomWorldChunkManager;
}

/** JVM abstract org.bukkit.craftbukkit.generator.InternalChunkGenerator. */
export interface InternalChunkGeneratorMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk.ChunkGenerator];
}
export type InternalChunkGenerator = InternalChunkGeneratorMembers & j_net_minecraft_world_level_chunk.ChunkGenerator;
export interface InternalChunkGeneratorStatics {
  new(arg0: j_net_minecraft_world_level_biome.BiomeSource, arg1: JavaFunction<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, j_net_minecraft_world_level_biome.BiomeGenerationSettings>): InternalChunkGenerator;
}

/** JVM class org.bukkit.craftbukkit.generator.OldCraftChunkData. */
export interface OldCraftChunkDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">];
  getBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBlockData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getData(arg0: number, arg1: number, arg2: number): number;
  getHeight(arg0: JavaOpaque<"org.bukkit.HeightMap">, arg1: number, arg2: number): number;
  getMaxHeight(): number;
  getMinHeight(): number;
  getType(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.Material">;
  getTypeAndData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.material.MaterialData">;
  getTypeId(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.Material">): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.material.MaterialData">): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_world_level_block_state.BlockState): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"org.bukkit.Material">): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"org.bukkit.material.MaterialData">): void;
}
export type OldCraftChunkData = OldCraftChunkDataMembers & JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">;
export interface OldCraftChunkDataStatics {
  new(arg0: number, arg1: number, arg2: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>): OldCraftChunkData;
  new(arg0: number, arg1: number, arg2: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg3: JavaOpaque<"org.bukkit.World">): OldCraftChunkData;
}
