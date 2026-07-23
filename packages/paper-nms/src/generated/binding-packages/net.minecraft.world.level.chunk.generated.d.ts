// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blending from './net.minecraft.world.level.levelgen.blending.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_placement from './net.minecraft.world.level.levelgen.structure.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_lighting from './net.minecraft.world.level.lighting.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_ticks from './net.minecraft.world.ticks.generated.js';
import type * as j_org_bukkit_craftbukkit_persistence from './org.bukkit.craftbukkit.persistence.generated.js';

/** JVM interface net.minecraft.world.level.chunk.BlockColumn. */
export interface BlockColumnMembers {
  getBlock(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
  setBlock(arg0: number, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BlockColumn = BlockColumnMembers;
export interface BlockColumnStatics {
}

/** JVM class net.minecraft.world.level.chunk.BulkSectionAccess. */
export interface BulkSectionAccessMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getSection(arg0: j_net_minecraft_core.BlockPos): LevelChunkSection | null;
}
export type BulkSectionAccess = BulkSectionAccessMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface BulkSectionAccessStatics {
  new(arg0: j_net_minecraft_world_level.LevelAccessor): BulkSectionAccess;
}

/** JVM class net.minecraft.world.level.chunk.CarvingMask. */
export interface CarvingMaskMembers {
  get(arg0: number, arg1: number, arg2: number): boolean;
  set(arg0: number, arg1: number, arg2: number): void;
  setAdditionalMask(arg0: CarvingMask_Mask): void;
  stream(arg0: j_net_minecraft_world_level.ChunkPos): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  toArray(): Array<bigint>;
}
export type CarvingMask = CarvingMaskMembers;
export interface CarvingMaskStatics {
  new(arg0: number, arg1: number): CarvingMask;
  new(arg0: Array<bigint>, arg1: number): CarvingMask;
}

/** JVM interface net.minecraft.world.level.chunk.CarvingMask$Mask. */
export interface CarvingMask_MaskMembers {
  test(arg0: number, arg1: number, arg2: number): boolean;
}
export type CarvingMask_Mask = CarvingMask_MaskMembers;
export interface CarvingMask_MaskStatics {
}

/** JVM abstract net.minecraft.world.level.chunk.ChunkAccess. */
export interface ChunkAccessMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">, j_net_minecraft_world_level_biome.BiomeManager_NoiseBiomeSource, LightChunk, StructureAccess];
  addEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  addPackedPostProcess(arg0: JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">, arg1: number): void;
  addReferenceForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: bigint): void;
  readonly biomeRegistry: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>;
  blendingData: j_net_minecraft_world_level_levelgen_blending.BlendingData | null;
  readonly blockEntities: JavaMap<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_entity.BlockEntity>;
  canBeSerialized(): boolean;
  carverBiome(arg0: JavaSupplier<j_net_minecraft_world_level_biome.BiomeGenerationSettings>): j_net_minecraft_world_level_biome.BiomeGenerationSettings;
  readonly chunkPos: j_net_minecraft_world_level.ChunkPos;
  readonly coordinateKey: bigint;
  fillBiomesFromNoise(arg0: j_net_minecraft_world_level_biome.BiomeResolver, arg1: j_net_minecraft_world_level_biome.Climate_Sampler): void;
  findBlockLightSources(arg0: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>): void;
  findBlocks(arg0: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>): void;
  getAllReferences(): JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>;
  getAllStarts(): JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, j_net_minecraft_world_level_levelgen_structure.StructureStart>;
  getBelowZeroRetrogen(): j_net_minecraft_world_level_levelgen.BelowZeroRetrogen | null;
  getBlendingData(): j_net_minecraft_world_level_levelgen_blending.BlendingData | null;
  getBlockEntitiesPos(): JavaSet<j_net_minecraft_core.BlockPos>;
  getBlockEntityNbt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_nbt.CompoundTag | null;
  getBlockEntityNbtForSaving(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag | null;
  getBlockState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlockTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_block.Block>;
  getFluidTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_material.Fluid>;
  getHeight(): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getHeightAccessorForGeneration(): j_net_minecraft_world_level.LevelHeightAccessor;
  getHeightmaps(): JavaCollection<JavaMapEntry<j_net_minecraft_world_level_levelgen.Heightmap_Types, j_net_minecraft_world_level_levelgen.Heightmap>>;
  getHighestFilledSectionIndex(): number;
  getHighestGeneratedStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getHighestSectionPosition(): number;
  getInhabitedTime(): bigint;
  getListenerRegistry(arg0: number): j_net_minecraft_world_level_gameevent.GameEventListenerRegistry;
  getMinY(): number;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getOrCreateHeightmapUnprimed(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): j_net_minecraft_world_level_levelgen.Heightmap;
  getOrCreateNoiseChunk(arg0: JavaFunction<ChunkAccess, j_net_minecraft_world_level_levelgen.NoiseChunk>): j_net_minecraft_world_level_levelgen.NoiseChunk;
  getPersistedStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getPos(): j_net_minecraft_world_level.ChunkPos;
  getPostProcessing(): Array<JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">>;
  getReferencesForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getSection(arg0: number): LevelChunkSection;
  getSections(): Array<LevelChunkSection>;
  getSkyLightSources(): j_net_minecraft_world_level_lighting.ChunkSkyLightSources;
  getStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  getTicksForSerialization(arg0: bigint): ChunkAccess_PackedTicks;
  getUpgradeData(): UpgradeData;
  hasAnyStructureReferences(): boolean;
  hasPrimedHeightmap(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): boolean;
  readonly heightmaps: JavaMap<j_net_minecraft_world_level_levelgen.Heightmap_Types, j_net_minecraft_world_level_levelgen.Heightmap>;
  incrementInhabitedTime(arg0: bigint): void;
  initializeLightSources(): void;
  isLightCorrect(): boolean;
  isOldNoiseGeneration(): boolean;
  isUnsaved(): boolean;
  isUpgrading(): boolean;
  isYSpaceEmpty(arg0: number, arg1: number): boolean;
  readonly levelHeightAccessor: j_net_minecraft_world_level.LevelHeightAccessor;
  readonly locX: number;
  readonly locZ: number;
  markPosForPostprocessing(arg0: j_net_minecraft_core.BlockPos): void;
  markUnsaved(): void;
  noiseChunk: j_net_minecraft_world_level_levelgen.NoiseChunk | null;
  readonly pendingBlockEntities: JavaMap<j_net_minecraft_core.BlockPos, j_net_minecraft_nbt.CompoundTag>;
  persistentDataContainer: j_org_bukkit_craftbukkit_persistence.DirtyCraftPersistentDataContainer;
  readonly postProcessing: Array<JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">>;
  problemPath(): j_net_minecraft_util.ProblemReporter_PathElement;
  removeBlockEntity(arg0: j_net_minecraft_core.BlockPos): void;
  readonly sections: Array<LevelChunkSection>;
  setAllReferences(arg0: JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>): void;
  setAllStarts(arg0: JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, j_net_minecraft_world_level_levelgen_structure.StructureStart>): void;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): void;
  setBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  setBlockEntityNbt(arg0: j_net_minecraft_nbt.CompoundTag): void;
  setBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState | null;
  setBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): j_net_minecraft_world_level_block_state.BlockState | null;
  setHeightmap(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: Array<bigint>): void;
  setInhabitedTime(arg0: bigint): void;
  setLightCorrect(arg0: boolean): void;
  setStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: j_net_minecraft_world_level_levelgen_structure.StructureStart): void;
  starlight$getBlockEmptinessMap(): Array<boolean>;
  starlight$getBlockNibbles(): Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>;
  starlight$getSkyEmptinessMap(): Array<boolean>;
  starlight$getSkyNibbles(): Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>;
  starlight$setBlockEmptinessMap(arg0: Array<boolean>): void;
  starlight$setBlockNibbles(arg0: Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>): void;
  starlight$setSkyEmptinessMap(arg0: Array<boolean>): void;
  starlight$setSkyNibbles(arg0: Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>): void;
  tryMarkSaved(): boolean;
  readonly upgradeData: UpgradeData;
}
export type ChunkAccess = ChunkAccessMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk"> & j_net_minecraft_world_level_biome.BiomeManager_NoiseBiomeSource & LightChunk & StructureAccess;
export interface ChunkAccessStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: UpgradeData, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg4: bigint, arg5: Array<LevelChunkSection> | null, arg6: j_net_minecraft_world_level_levelgen_blending.BlendingData | null): ChunkAccess;
  readonly NO_FILLED_SECTION: -1;
  getOrCreateOffsetList(arg0: Array<JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">>, arg1: number): JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">;
  problemPath(arg0: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_util.ProblemReporter_PathElement;
}

/** JVM record net.minecraft.world.level.chunk.ChunkAccess$PackedTicks. */
export interface ChunkAccess_PackedTicksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blocks(): JavaList<j_net_minecraft_world_ticks.SavedTick<j_net_minecraft_world_level_block.Block>>;
  equals(arg0: object): boolean;
  fluids(): JavaList<j_net_minecraft_world_ticks.SavedTick<j_net_minecraft_world_level_material.Fluid>>;
  hashCode(): number;
  toString(): string;
}
export type ChunkAccess_PackedTicks = ChunkAccess_PackedTicksMembers & JavaOpaque<"java.lang.Record">;
export interface ChunkAccess_PackedTicksStatics {
  new(arg0: JavaList<j_net_minecraft_world_ticks.SavedTick<j_net_minecraft_world_level_block.Block>>, arg1: JavaList<j_net_minecraft_world_ticks.SavedTick<j_net_minecraft_world_level_material.Fluid>>): ChunkAccess_PackedTicks;
}

/** JVM abstract net.minecraft.world.level.chunk.ChunkGenerator. */
export interface ChunkGeneratorMembers {
  addDebugScreenInfo(arg0: JavaList<string>, arg1: j_net_minecraft_world_level_levelgen.RandomState, arg2: j_net_minecraft_core.BlockPos): void;
  addVanillaDecorations(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: ChunkAccess, arg2: j_net_minecraft_world_level.StructureManager): void;
  applyBiomeDecoration(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: ChunkAccess, arg2: j_net_minecraft_world_level.StructureManager): void;
  applyBiomeDecoration(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: ChunkAccess, arg2: j_net_minecraft_world_level.StructureManager, arg3: boolean): void;
  applyCarvers(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: bigint, arg2: j_net_minecraft_world_level_levelgen.RandomState, arg3: j_net_minecraft_world_level_biome.BiomeManager, arg4: j_net_minecraft_world_level.StructureManager, arg5: ChunkAccess): void;
  readonly biomeSource: j_net_minecraft_world_level_biome.BiomeSource;
  buildSurface(arg0: j_net_minecraft_server_level.WorldGenRegion, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_levelgen.RandomState, arg3: ChunkAccess): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChunkGenerator]>;
  createBiomes(arg0: j_net_minecraft_world_level_levelgen.RandomState, arg1: j_net_minecraft_world_level_levelgen_blending.Blender, arg2: j_net_minecraft_world_level.StructureManager, arg3: ChunkAccess): PromiseLike<ChunkAccess>;
  createReferences(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: ChunkAccess): void;
  createState(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg1: j_net_minecraft_world_level_levelgen.RandomState, arg2: bigint, arg3: JavaOpaque<"org.spigotmc.SpigotWorldConfig">): ChunkGeneratorStructureState;
  createStructures(arg0: j_net_minecraft_core.RegistryAccess, arg1: ChunkGeneratorStructureState, arg2: j_net_minecraft_world_level.StructureManager, arg3: ChunkAccess, arg4: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg5: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): void;
  fillFromNoise(arg0: j_net_minecraft_world_level_levelgen_blending.Blender, arg1: j_net_minecraft_world_level_levelgen.RandomState, arg2: j_net_minecraft_world_level.StructureManager, arg3: ChunkAccess): PromiseLike<ChunkAccess>;
  findNearestMapStructure(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: boolean): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>]> | null;
  readonly generationSettingsGetter: JavaFunction<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, j_net_minecraft_world_level_biome.BiomeGenerationSettings>;
  getBaseColumn(arg0: number, arg1: number, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: j_net_minecraft_world_level_levelgen.RandomState): j_net_minecraft_world_level.NoiseColumn;
  getBaseHeight(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: j_net_minecraft_world_level_levelgen.RandomState): number;
  getBiomeGenerationSettings(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): j_net_minecraft_world_level_biome.BiomeGenerationSettings;
  getBiomeSource(): j_net_minecraft_world_level_biome.BiomeSource;
  getFirstFreeHeight(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: j_net_minecraft_world_level_levelgen.RandomState): number;
  getFirstOccupiedHeight(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg3: j_net_minecraft_world_level.LevelHeightAccessor, arg4: j_net_minecraft_world_level_levelgen.RandomState): number;
  getGenDepth(): number;
  getMinY(): number;
  getMobsAt(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_entity.MobCategory, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level_biome.MobSpawnSettings_SpawnerData>;
  getSeaLevel(): number;
  getSpawnHeight(arg0: j_net_minecraft_world_level.LevelHeightAccessor): number;
  getTypeNameForDataFixer(): JavaOptional<j_net_minecraft_resources.ResourceKey<JavaOpaque<"com.mojang.serialization.MapCodec", [ChunkGenerator]>>>;
  spawnOriginalMobs(arg0: j_net_minecraft_server_level.WorldGenRegion): void;
  validate(): void;
}
export type ChunkGenerator = ChunkGeneratorMembers;
export interface ChunkGeneratorStatics {
  new(arg0: j_net_minecraft_world_level_biome.BiomeSource): ChunkGenerator;
  new(arg0: j_net_minecraft_world_level_biome.BiomeSource, arg1: JavaFunction<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, j_net_minecraft_world_level_biome.BiomeGenerationSettings>): ChunkGenerator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChunkGenerator]>;
}

/** JVM class net.minecraft.world.level.chunk.ChunkGenerators. */
export interface ChunkGeneratorsMembers {
}
export type ChunkGenerators = ChunkGeneratorsMembers;
export interface ChunkGeneratorsStatics {
  new(): ChunkGenerators;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [ChunkGenerator]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [ChunkGenerator]>;
}

/** JVM class net.minecraft.world.level.chunk.ChunkGeneratorStructureState. */
export interface ChunkGeneratorStructureStateMembers {
  readonly conf: JavaOpaque<"org.spigotmc.SpigotWorldConfig">;
  ensureStructuresGenerated(): void;
  getLevelSeed(): bigint;
  getPlacementsForStructure(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>): JavaList<j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement>;
  getRingPositionsFor(arg0: j_net_minecraft_world_level_levelgen_structure_placement.ConcentricRingsStructurePlacement): JavaList<j_net_minecraft_world_level.ChunkPos> | null;
  hasStructureChunkInRange(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg1: number, arg2: number, arg3: number): boolean;
  possibleStructureSets(): JavaList<j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureSet>>;
  randomState(): j_net_minecraft_world_level_levelgen.RandomState;
}
export type ChunkGeneratorStructureState = ChunkGeneratorStructureStateMembers;
export interface ChunkGeneratorStructureStateStatics {
  createForFlat(arg0: j_net_minecraft_world_level_levelgen.RandomState, arg1: bigint, arg2: j_net_minecraft_world_level_biome.BiomeSource, arg3: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureSet>]>, arg4: JavaOpaque<"org.spigotmc.SpigotWorldConfig">): ChunkGeneratorStructureState;
  createForNormal(arg0: j_net_minecraft_world_level_levelgen.RandomState, arg1: bigint, arg2: j_net_minecraft_world_level_biome.BiomeSource, arg3: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg4: JavaOpaque<"org.spigotmc.SpigotWorldConfig">): ChunkGeneratorStructureState;
}

/** JVM class net.minecraft.world.level.chunk.ChunkGeneratorStructureState$KeyedRandomSpreadStructurePlacement. */
export interface ChunkGeneratorStructureState_KeyedRandomSpreadStructurePlacementMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure_placement.RandomSpreadStructurePlacement];
  readonly key: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure.StructureSet>;
}
export type ChunkGeneratorStructureState_KeyedRandomSpreadStructurePlacement = ChunkGeneratorStructureState_KeyedRandomSpreadStructurePlacementMembers & j_net_minecraft_world_level_levelgen_structure_placement.RandomSpreadStructurePlacement;
export interface ChunkGeneratorStructureState_KeyedRandomSpreadStructurePlacementStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg1: j_net_minecraft_core.Vec3i, arg2: j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement_FrequencyReductionMethod, arg3: number, arg4: number, arg5: JavaOptional<j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement_ExclusionZone>, arg6: number, arg7: number, arg8: j_net_minecraft_world_level_levelgen_structure_placement.RandomSpreadType): ChunkGeneratorStructureState_KeyedRandomSpreadStructurePlacement;
}

/** JVM abstract net.minecraft.world.level.chunk.ChunkSource. */
export interface ChunkSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, LightChunkGetter];
  /** @throws java.io.IOException */
  close(): void;
  gatherStats(): string;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): ChunkAccess | null;
  getChunk(arg0: number, arg1: number, arg2: boolean): LevelChunk | null;
  getChunkForLighting(arg0: number, arg1: number): LightChunk | null;
  getChunkNow(arg0: number, arg1: number): LevelChunk | null;
  getForceLoadedChunks(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getLoadedChunksCount(): number;
  hasChunk(arg0: number, arg1: number): boolean;
  onSectionEmptinessChanged(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  setSpawnSettings(arg0: boolean): void;
  tick(arg0: JavaOpaque<"java.util.function.BooleanSupplier">, arg1: boolean): void;
  updateChunkForced(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): boolean;
}
export type ChunkSource = ChunkSourceMembers & JavaOpaque<"java.lang.AutoCloseable"> & LightChunkGetter;
export interface ChunkSourceStatics {
  new(): ChunkSource;
}

/** JVM class net.minecraft.world.level.chunk.DataLayer. */
export interface DataLayerMembers {
  copy(): DataLayer;
  data: Array<number> | null;
  fill(arg0: number): void;
  get(arg0: number, arg1: number, arg2: number): number;
  getData(): Array<number>;
  isDefinitelyFilledWith(arg0: number): boolean;
  isDefinitelyHomogenous(): boolean;
  isEmpty(): boolean;
  layerToString(arg0: number): string;
  set(arg0: number, arg1: number, arg2: number, arg3: number): void;
  toString(): string;
}
export type DataLayer = DataLayerMembers;
export interface DataLayerStatics {
  new(): DataLayer;
  new(arg0: number): DataLayer;
  new(arg0: Array<number>): DataLayer;
  readonly LAYER_COUNT: 16;
  readonly LAYER_SIZE: 128;
  readonly SIZE: 2048;
}

/** JVM class net.minecraft.world.level.chunk.EmptyLevelChunk. */
export interface EmptyLevelChunkMembers {
  readonly __javaSupertypes?: readonly [LevelChunk, JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">];
  addAndRegisterBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: LevelChunk_EntityCreationType): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFullStatus(): j_net_minecraft_server_level.FullChunkStatus;
  getLightEmission(arg0: j_net_minecraft_core.BlockPos): number;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  isEmpty(): boolean;
  isYSpaceEmpty(arg0: number, arg1: number): boolean;
  removeBlockEntity(arg0: j_net_minecraft_core.BlockPos): void;
  setBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  setBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): j_net_minecraft_world_level_block_state.BlockState | null;
  starlight$getBlockEmptinessMap(): Array<boolean>;
  starlight$getBlockNibbles(): Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>;
  starlight$getSkyEmptinessMap(): Array<boolean>;
  starlight$getSkyNibbles(): Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>;
  starlight$setBlockEmptinessMap(arg0: Array<boolean>): void;
  starlight$setBlockNibbles(arg0: Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>): void;
  starlight$setSkyEmptinessMap(arg0: Array<boolean>): void;
  starlight$setSkyNibbles(arg0: Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>): void;
}
export type EmptyLevelChunk = EmptyLevelChunkMembers & LevelChunk & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">;
export interface EmptyLevelChunkStatics {
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): EmptyLevelChunk;
}

/** JVM class net.minecraft.world.level.chunk.GlobalPalette. */
export interface GlobalPaletteMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Palette<T>];
  copy(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): Palette<T>;
  getSerializedSize(): number;
  getSize(): number;
  idFor(arg0: T): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  valueFor(arg0: number): T;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type GlobalPalette<T = unknown> = GlobalPaletteMembers<T> & Palette<T>;
export interface GlobalPaletteStatics {
  new<T>(arg0: j_net_minecraft_core.IdMap<T>): GlobalPalette<T>;
  create<A>(arg0: number, arg1: j_net_minecraft_core.IdMap<A>, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [A]>, arg3: JavaList<A>): Palette<A>;
}

/** JVM class net.minecraft.world.level.chunk.HashMapPalette. */
export interface HashMapPaletteMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Palette<T>, JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>];
  copy(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): Palette<T>;
  getEntries(): JavaList<T>;
  getSerializedSize(): number;
  getSize(): number;
  idFor(arg0: T): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  moonrise$getRawPalette(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPaletteData", [T]>): Array<T>;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  valueFor(arg0: number): T;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type HashMapPalette<T = unknown> = HashMapPaletteMembers<T> & Palette<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>;
export interface HashMapPaletteStatics {
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: number, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): HashMapPalette<T>;
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: number, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>, arg3: JavaList<T>): HashMapPalette<T>;
  create<A>(arg0: number, arg1: j_net_minecraft_core.IdMap<A>, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [A]>, arg3: JavaList<A>): Palette<A>;
}

/** JVM class net.minecraft.world.level.chunk.ImposterProtoChunk. */
export interface ImposterProtoChunkMembers {
  readonly __javaSupertypes?: readonly [ProtoChunk, JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">];
  addEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  addReferenceForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: bigint): void;
  canBeSerialized(): boolean;
  fillBiomesFromNoise(arg0: j_net_minecraft_world_level_biome.BiomeResolver, arg1: j_net_minecraft_world_level_biome.Climate_Sampler): void;
  findBlocks(arg0: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>): void;
  getAllReferences(): JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>;
  getAllStarts(): JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, j_net_minecraft_world_level_levelgen_structure.StructureStart>;
  getBlendingData(): j_net_minecraft_world_level_levelgen_blending.BlendingData | null;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntityNbt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_nbt.CompoundTag | null;
  getBlockEntityNbtForSaving(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag | null;
  getBlockState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_block.Block>;
  getCarvingMask(): CarvingMask;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_material.Fluid>;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getOrCreateCarvingMask(): CarvingMask;
  getOrCreateHeightmapUnprimed(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): j_net_minecraft_world_level_levelgen.Heightmap;
  getPersistedStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getPos(): j_net_minecraft_world_level.ChunkPos;
  getReferencesForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getSection(arg0: number): LevelChunkSection;
  getSections(): Array<LevelChunkSection>;
  getSkyLightSources(): j_net_minecraft_world_level_lighting.ChunkSkyLightSources;
  getStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  getTicksForSerialization(arg0: bigint): ChunkAccess_PackedTicks;
  getWrapped(): LevelChunk;
  initializeLightSources(): void;
  isLightCorrect(): boolean;
  isUnsaved(): boolean;
  markPosForPostprocessing(arg0: j_net_minecraft_core.BlockPos): void;
  markUnsaved(): void;
  removeBlockEntity(arg0: j_net_minecraft_core.BlockPos): void;
  setAllReferences(arg0: JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>): void;
  setAllStarts(arg0: JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, j_net_minecraft_world_level_levelgen_structure.StructureStart>): void;
  setBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  setBlockEntityNbt(arg0: j_net_minecraft_nbt.CompoundTag): void;
  setBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): j_net_minecraft_world_level_block_state.BlockState | null;
  setHeightmap(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: Array<bigint>): void;
  setLightCorrect(arg0: boolean): void;
  setPersistedStatus(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus): void;
  setStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: j_net_minecraft_world_level_levelgen_structure.StructureStart): void;
  starlight$getBlockEmptinessMap(): Array<boolean>;
  starlight$getBlockNibbles(): Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>;
  starlight$getSkyEmptinessMap(): Array<boolean>;
  starlight$getSkyNibbles(): Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>;
  starlight$setBlockEmptinessMap(arg0: Array<boolean>): void;
  starlight$setBlockNibbles(arg0: Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>): void;
  starlight$setSkyEmptinessMap(arg0: Array<boolean>): void;
  starlight$setSkyNibbles(arg0: Array<JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.SWMRNibbleArray">>): void;
  tryMarkSaved(): boolean;
}
export type ImposterProtoChunk = ImposterProtoChunkMembers & ProtoChunk & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">;
export interface ImposterProtoChunkStatics {
  new(arg0: LevelChunk, arg1: boolean): ImposterProtoChunk;
}

/** JVM class net.minecraft.world.level.chunk.LevelChunk. */
export interface LevelChunkMembers {
  readonly __javaSupertypes?: readonly [ChunkAccess, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemLevelChunk">, JavaOpaque<"ca.spottedleaf.moonrise.patches.getblock.GetBlockChunk">, JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">];
  addAndRegisterBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  addEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  clearAllBlockEntities(): void;
  getBlockEntities(): JavaMap<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_entity.BlockEntity>;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: LevelChunk_EntityCreationType): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntityNbtForSaving(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag | null;
  getBlockState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateFinal(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_block.Block>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_material.FluidState;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_material.Fluid>;
  getFullStatus(): j_net_minecraft_server_level.FullChunkStatus;
  getInhabitedTime(): bigint;
  getLevel(): j_net_minecraft_world_level.Level;
  getListenerRegistry(arg0: number): j_net_minecraft_world_level_gameevent.GameEventListenerRegistry;
  getPersistedStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getTicksForSerialization(arg0: bigint): ChunkAccess_PackedTicks;
  isEmpty(): boolean;
  isUnsaved(): boolean;
  readonly level: j_net_minecraft_server_level.ServerLevel;
  loadCallback(): void;
  loaded: boolean;
  markUnsaved(): void;
  moonrise$getBlock(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  moonrise$getChunkHolder(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.scheduling.NewChunkHolder">;
  moonrise$isPostProcessingDone(): boolean;
  moonrise$setChunkHolder(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.scheduling.NewChunkHolder">): void;
  mustNotSave: boolean;
  needsDecoration: boolean;
  postProcessGeneration(arg0: j_net_minecraft_server_level.ServerLevel): void;
  registerAllBlockEntitiesAfterLevelLoad(): void;
  registerTickContainerInLevel(arg0: j_net_minecraft_server_level.ServerLevel): void;
  removeBlockEntity(arg0: j_net_minecraft_core.BlockPos): void;
  replaceBiomes(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  replaceWithPacketData(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: JavaMap<j_net_minecraft_world_level_levelgen.Heightmap_Types, Array<bigint>>, arg2: JavaConsumer<j_net_minecraft_network_protocol_game.ClientboundLevelChunkPacketData_BlockEntityTagOutput>): void;
  runPostLoad(): void;
  setBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  setBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): j_net_minecraft_world_level_block_state.BlockState | null;
  setFullStatus(arg0: JavaSupplier<j_net_minecraft_server_level.FullChunkStatus>): void;
  setLoaded(arg0: boolean): void;
  setUnsavedListener(arg0: LevelChunk_UnsavedListener): void;
  tryMarkSaved(): boolean;
  unloadCallback(): void;
  unpackTicks(arg0: bigint): void;
  unregisterTickContainerFromLevel(arg0: j_net_minecraft_server_level.ServerLevel): void;
}
export type LevelChunk = LevelChunkMembers & ChunkAccess & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemLevelChunk"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.getblock.GetBlockChunk"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.chunk.StarlightChunk">;
export interface LevelChunkStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: ProtoChunk, arg2: LevelChunk_PostLoadProcessor | null): LevelChunk;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level.ChunkPos): LevelChunk;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level.ChunkPos, arg2: UpgradeData, arg3: j_net_minecraft_world_ticks.LevelChunkTicks<j_net_minecraft_world_level_block.Block>, arg4: j_net_minecraft_world_ticks.LevelChunkTicks<j_net_minecraft_world_level_material.Fluid>, arg5: bigint, arg6: Array<LevelChunkSection> | null, arg7: LevelChunk_PostLoadProcessor | null, arg8: j_net_minecraft_world_level_levelgen_blending.BlendingData | null): LevelChunk;
}

/** Live JVM enum net.minecraft.world.level.chunk.LevelChunk$EntityCreationType; constants are host handles, not strings. */
export type LevelChunk_EntityCreationType = JavaEnum<"net.minecraft.world.level.chunk.LevelChunk$EntityCreationType", "CHECK" | "IMMEDIATE" | "QUEUED"> & LevelChunk_EntityCreationTypeMembers;
export interface LevelChunk_EntityCreationTypeMembers {
}
export interface LevelChunk_EntityCreationTypeStatics {
  readonly CHECK: LevelChunk_EntityCreationType;
  readonly IMMEDIATE: LevelChunk_EntityCreationType;
  readonly QUEUED: LevelChunk_EntityCreationType;
  valueOf(arg0: string): LevelChunk_EntityCreationType;
  values(): Array<LevelChunk_EntityCreationType>;
}

/** JVM interface net.minecraft.world.level.chunk.LevelChunk$PostLoadProcessor. */
export interface LevelChunk_PostLoadProcessorMembers {
  run(arg0: LevelChunk): void;
}
export type LevelChunk_PostLoadProcessor = LevelChunk_PostLoadProcessorMembers;
export interface LevelChunk_PostLoadProcessorStatics {
}

/** JVM interface net.minecraft.world.level.chunk.LevelChunk$UnsavedListener. */
export interface LevelChunk_UnsavedListenerMembers {
  setUnsaved(arg0: j_net_minecraft_world_level.ChunkPos): void;
}
export type LevelChunk_UnsavedListener = LevelChunk_UnsavedListenerMembers;
export interface LevelChunk_UnsavedListenerStatics {
}

/** JVM class net.minecraft.world.level.chunk.LevelChunkSection. */
export interface LevelChunkSectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.block_counting.BlockCountingChunkSection">];
  acquire(): void;
  copy(): LevelChunkSection;
  fillBiomesFromNoise(arg0: j_net_minecraft_world_level_biome.BiomeResolver, arg1: j_net_minecraft_world_level_biome.Climate_Sampler, arg2: number, arg3: number, arg4: number): void;
  getBiomes(): PalettedContainerRO<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>;
  getBlockState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getFluidState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_material.FluidState;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getSerializedSize(): number;
  getStates(): PalettedContainer<j_net_minecraft_world_level_block_state.BlockState>;
  hasOnlyAir(): boolean;
  isRandomlyTicking(): boolean;
  isRandomlyTickingBlocks(): boolean;
  isRandomlyTickingFluids(): boolean;
  maybeHas(arg0: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  moonrise$getTickingBlockList(): JavaOpaque<"ca.spottedleaf.moonrise.common.list.ShortList">;
  moonrise$hasSpecialCollidingBlocks(): boolean;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  readBiomes(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  recalcBlockCounts(): void;
  release(): void;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): void;
  setBlockState(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  setBlockState(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: boolean): j_net_minecraft_world_level_block_state.BlockState;
  readonly states: PalettedContainer<j_net_minecraft_world_level_block_state.BlockState>;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketInfo", [j_net_minecraft_world_level_block_state.BlockState]>, arg2: number): void;
}
export type LevelChunkSection = LevelChunkSectionMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.block_counting.BlockCountingChunkSection">;
export interface LevelChunkSectionStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>): LevelChunkSection;
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_level.ChunkPos, arg3: number): LevelChunkSection;
  new(arg0: PalettedContainer<j_net_minecraft_world_level_block_state.BlockState>, arg1: PalettedContainer<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>): LevelChunkSection;
  readonly BIOME_CONTAINER_BITS: 2;
  readonly SECTION_HEIGHT: 16;
  readonly SECTION_SIZE: 4096;
  readonly SECTION_WIDTH: 16;
}

/** JVM interface net.minecraft.world.level.chunk.LightChunk. */
export interface LightChunkMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.BlockGetter];
  findBlockLightSources(arg0: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>): void;
  getSkyLightSources(): j_net_minecraft_world_level_lighting.ChunkSkyLightSources;
}
export type LightChunk = LightChunkMembers & j_net_minecraft_world_level.BlockGetter;
export interface LightChunkStatics {
}

/** JVM interface net.minecraft.world.level.chunk.LightChunkGetter. */
export interface LightChunkGetterMembers {
  getChunkForLighting(arg0: number, arg1: number): LightChunk | null;
  getLevel(): j_net_minecraft_world_level.BlockGetter;
  onLightUpdate(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos): void;
}
export type LightChunkGetter = LightChunkGetterMembers;
export interface LightChunkGetterStatics {
}

/** JVM class net.minecraft.world.level.chunk.LinearPalette. */
export interface LinearPaletteMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Palette<T>, JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>];
  copy(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): Palette<T>;
  getSerializedSize(): number;
  getSize(): number;
  idFor(arg0: T): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  moonrise$getRawPalette(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPaletteData", [T]>): Array<T>;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  valueFor(arg0: number): T;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type LinearPalette<T = unknown> = LinearPaletteMembers<T> & Palette<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>;
export interface LinearPaletteStatics {
  create<A>(arg0: number, arg1: j_net_minecraft_core.IdMap<A>, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [A]>, arg3: JavaList<A>): Palette<A>;
}

/** JVM class net.minecraft.world.level.chunk.MissingPaletteEntryException. */
export interface MissingPaletteEntryExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type MissingPaletteEntryException = MissingPaletteEntryExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface MissingPaletteEntryExceptionStatics {
  new(arg0: number): MissingPaletteEntryException;
}

/** JVM interface net.minecraft.world.level.chunk.Palette. */
export interface PaletteMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>];
  copy(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): Palette<T>;
  getSerializedSize(): number;
  getSize(): number;
  idFor(arg0: T): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  valueFor(arg0: number): T;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type Palette<T = unknown> = PaletteMembers<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>;
export interface PaletteStatics {
}

/** JVM interface net.minecraft.world.level.chunk.Palette$Factory. */
export interface Palette_FactoryMembers {
  create<A>(arg0: number, arg1: j_net_minecraft_core.IdMap<A>, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [A]>, arg3: JavaList<A>): Palette<A>;
}
export type Palette_Factory = Palette_FactoryMembers;
export interface Palette_FactoryStatics {
}

/** JVM class net.minecraft.world.level.chunk.PalettedContainer. */
export interface PalettedContainerMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>, PalettedContainerRO<T>];
  acquire(): void;
  copy(): PalettedContainer<T>;
  count(arg0: PalettedContainer_CountConsumer<T>): void;
  data: PalettedContainer_Data<T>;
  get(arg0: number): T;
  get(arg0: number, arg1: number, arg2: number): T;
  getAll(arg0: JavaConsumer<T>): void;
  getAndSet(arg0: number, arg1: number, arg2: number, arg3: T): T;
  getAndSetUnchecked(arg0: number, arg1: number, arg2: number, arg3: T): T;
  getSerializedSize(): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  onResize(arg0: number, arg1: T): number;
  pack(arg0: j_net_minecraft_core.IdMap<T>, arg1: PalettedContainer_Strategy): PalettedContainerRO_PackedData<T>;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  recreate(): PalettedContainer<T>;
  readonly registry: j_net_minecraft_core.IdMap<T>;
  release(): void;
  set(arg0: number, arg1: number, arg2: number, arg3: T): void;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketInfo", [T]> | null, arg2: number): void | null;
}
export type PalettedContainer<T = unknown> = PalettedContainerMembers<T> & JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]> & PalettedContainerRO<T>;
export interface PalettedContainerStatics {
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: T, arg2: PalettedContainer_Strategy): PalettedContainer<T>;
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: T, arg2: PalettedContainer_Strategy, arg3: Array<T>): PalettedContainer<T>;
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: PalettedContainer_Strategy, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PalettedContainer$Configuration", [T]>, arg3: j_net_minecraft_util.BitStorage, arg4: JavaList<T>): PalettedContainer<T>;
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: PalettedContainer_Strategy, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PalettedContainer$Configuration", [T]>, arg3: j_net_minecraft_util.BitStorage, arg4: JavaList<T>, arg5: T, arg6: Array<T>): PalettedContainer<T>;
  codecRO<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: PalettedContainer_Strategy, arg3: T): JavaOpaque<"com.mojang.serialization.Codec", [PalettedContainerRO<T>]>;
  codecRW<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: PalettedContainer_Strategy, arg3: T): JavaOpaque<"com.mojang.serialization.Codec", [PalettedContainer<T>]>;
  codecRW<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: PalettedContainer_Strategy, arg3: T, arg4: Array<T>): JavaOpaque<"com.mojang.serialization.Codec", [PalettedContainer<T>]> | null;
}

/** JVM interface net.minecraft.world.level.chunk.PalettedContainer$CountConsumer. */
export interface PalettedContainer_CountConsumerMembers<T = unknown> {
  accept(arg0: T, arg1: number): void;
}
export type PalettedContainer_CountConsumer<T = unknown> = PalettedContainer_CountConsumerMembers<T>;
export interface PalettedContainer_CountConsumerStatics {
}

/** JVM class net.minecraft.world.level.chunk.PalettedContainer$Data. */
export interface PalettedContainer_DataMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPaletteData", [T]>];
  configuration(): JavaOpaque<"net.minecraft.world.level.chunk.PalettedContainer$Configuration", [T]>;
  copy(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): PalettedContainer_Data<T>;
  copyFrom(arg0: Palette<T>, arg1: j_net_minecraft_util.BitStorage): void;
  getSerializedSize(): number;
  moonrise$getPalette(): Array<T>;
  moonrise$setPalette(arg0: Array<T>): void;
  palette(): Palette<T>;
  storage(): j_net_minecraft_util.BitStorage;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketInfo", [T]> | null, arg2: number): void | null;
}
export type PalettedContainer_Data<T = unknown> = PalettedContainer_DataMembers<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPaletteData", [T]>;
export interface PalettedContainer_DataStatics {
  new<T>(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PalettedContainer$Configuration", [T]>, arg1: j_net_minecraft_util.BitStorage, arg2: Palette<T>): PalettedContainer_Data<T>;
}

/** JVM abstract net.minecraft.world.level.chunk.PalettedContainer$Strategy. */
export interface PalettedContainer_StrategyMembers {
  getConfiguration<A>(arg0: j_net_minecraft_core.IdMap<A>, arg1: number): JavaOpaque<"net.minecraft.world.level.chunk.PalettedContainer$Configuration", [A]>;
  getIndex(arg0: number, arg1: number, arg2: number): number;
  size(): number;
}
export type PalettedContainer_Strategy = PalettedContainer_StrategyMembers;
export interface PalettedContainer_StrategyStatics {
  readonly HASHMAP_PALETTE_FACTORY: Palette_Factory;
  readonly LINEAR_PALETTE_FACTORY: Palette_Factory;
  readonly SECTION_BIOMES: PalettedContainer_Strategy;
  readonly SECTION_STATES: PalettedContainer_Strategy;
  readonly SINGLE_VALUE_PALETTE_FACTORY: Palette_Factory;
}

/** JVM interface net.minecraft.world.level.chunk.PalettedContainerRO. */
export interface PalettedContainerROMembers<T = unknown> {
  copy(): PalettedContainer<T>;
  count(arg0: PalettedContainer_CountConsumer<T>): void;
  get(arg0: number, arg1: number, arg2: number): T;
  getAll(arg0: JavaConsumer<T>): void;
  getSerializedSize(): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  pack(arg0: j_net_minecraft_core.IdMap<T>, arg1: PalettedContainer_Strategy): PalettedContainerRO_PackedData<T>;
  recreate(): PalettedContainer<T>;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketInfo", [T]> | null, arg2: number): void | null;
}
export type PalettedContainerRO<T = unknown> = PalettedContainerROMembers<T>;
export interface PalettedContainerROStatics {
}

/** JVM record net.minecraft.world.level.chunk.PalettedContainerRO$PackedData. */
export interface PalettedContainerRO_PackedDataMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  paletteEntries(): JavaList<T>;
  storage(): JavaOptional<JavaOpaque<"java.util.stream.LongStream">>;
  toString(): string;
}
export type PalettedContainerRO_PackedData<T = unknown> = PalettedContainerRO_PackedDataMembers<T> & JavaOpaque<"java.lang.Record">;
export interface PalettedContainerRO_PackedDataStatics {
  new<T>(arg0: JavaList<T>, arg1: JavaOptional<JavaOpaque<"java.util.stream.LongStream">>): PalettedContainerRO_PackedData<T>;
}

/** JVM interface net.minecraft.world.level.chunk.PalettedContainerRO$Unpacker. */
export interface PalettedContainerRO_UnpackerMembers<T = unknown, C /* extends PalettedContainerRO<T> */ = unknown> {
  read(arg0: j_net_minecraft_core.IdMap<T>, arg1: PalettedContainer_Strategy, arg2: PalettedContainerRO_PackedData<T>): JavaOpaque<"com.mojang.serialization.DataResult", [C]>;
}
export type PalettedContainerRO_Unpacker<T = unknown, C /* extends PalettedContainerRO<T> */ = unknown> = PalettedContainerRO_UnpackerMembers<T, C>;
export interface PalettedContainerRO_UnpackerStatics {
}

/** JVM class net.minecraft.world.level.chunk.ProtoChunk. */
export interface ProtoChunkMembers {
  readonly __javaSupertypes?: readonly [ChunkAccess];
  addEntity(arg0: j_net_minecraft_nbt.CompoundTag): void;
  addEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  addPackedPostProcess(arg0: JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">, arg1: number): void;
  getBelowZeroRetrogen(): j_net_minecraft_world_level_levelgen.BelowZeroRetrogen | null;
  getBlockEntities(): JavaMap<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_entity.BlockEntity>;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntityNbtForSaving(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag | null;
  getBlockEntityNbts(): JavaMap<j_net_minecraft_core.BlockPos, j_net_minecraft_nbt.CompoundTag>;
  getBlockState(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_block.Block>;
  getCarvingMask(): CarvingMask | null;
  getEntities(): JavaList<j_net_minecraft_nbt.CompoundTag>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidTicks(): j_net_minecraft_world_ticks.TickContainerAccess<j_net_minecraft_world_level_material.Fluid>;
  getHeightAccessorForGeneration(): j_net_minecraft_world_level.LevelHeightAccessor;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getOrCreateCarvingMask(): CarvingMask;
  getPersistedStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getTicksForSerialization(arg0: bigint): ChunkAccess_PackedTicks;
  markPosForPostprocessing(arg0: j_net_minecraft_core.BlockPos): void;
  removeBlockEntity(arg0: j_net_minecraft_core.BlockPos): void;
  setBelowZeroRetrogen(arg0: j_net_minecraft_world_level_levelgen.BelowZeroRetrogen | null): void | null;
  setBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  setBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): j_net_minecraft_world_level_block_state.BlockState | null;
  setCarvingMask(arg0: CarvingMask): void;
  setLightEngine(arg0: j_net_minecraft_world_level_lighting.LevelLightEngine): void;
  setPersistedStatus(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus): void;
  setStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: j_net_minecraft_world_level_levelgen_structure.StructureStart): void;
  unpackBlockTicks(): j_net_minecraft_world_ticks.LevelChunkTicks<j_net_minecraft_world_level_block.Block>;
  unpackFluidTicks(): j_net_minecraft_world_ticks.LevelChunkTicks<j_net_minecraft_world_level_material.Fluid>;
}
export type ProtoChunk = ProtoChunkMembers & ChunkAccess;
export interface ProtoChunkStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: UpgradeData, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg4: j_net_minecraft_world_level_levelgen_blending.BlendingData | null): ProtoChunk;
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: UpgradeData, arg2: Array<LevelChunkSection> | null, arg3: j_net_minecraft_world_ticks.ProtoChunkTicks<j_net_minecraft_world_level_block.Block>, arg4: j_net_minecraft_world_ticks.ProtoChunkTicks<j_net_minecraft_world_level_material.Fluid>, arg5: j_net_minecraft_world_level.LevelHeightAccessor, arg6: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg7: j_net_minecraft_world_level_levelgen_blending.BlendingData | null): ProtoChunk;
  packOffsetCoordinates(arg0: j_net_minecraft_core.BlockPos): number;
  unpackOffsetCoordinates(arg0: number, arg1: number, arg2: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_core.BlockPos;
}

/** JVM class net.minecraft.world.level.chunk.SingleValuePalette. */
export interface SingleValuePaletteMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Palette<T>, JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>];
  copy(arg0: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>): Palette<T>;
  getSerializedSize(): number;
  getSize(): number;
  idFor(arg0: T): number;
  maybeHas(arg0: JavaPredicate<T>): boolean;
  moonrise$getRawPalette(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPaletteData", [T]>): Array<T>;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  valueFor(arg0: number): T;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type SingleValuePalette<T = unknown> = SingleValuePaletteMembers<T> & Palette<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [T]>;
export interface SingleValuePaletteStatics {
  new<T>(arg0: j_net_minecraft_core.IdMap<T>, arg1: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [T]>, arg2: JavaList<T>): SingleValuePalette<T>;
  create<A>(arg0: number, arg1: j_net_minecraft_core.IdMap<A>, arg2: JavaOpaque<"net.minecraft.world.level.chunk.PaletteResize", [A]>, arg3: JavaList<A>): Palette<A>;
}

/** JVM interface net.minecraft.world.level.chunk.StructureAccess. */
export interface StructureAccessMembers {
  addReferenceForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: bigint): void;
  getAllReferences(): JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>;
  getReferencesForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  setAllReferences(arg0: JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>): void;
  setStartForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: j_net_minecraft_world_level_levelgen_structure.StructureStart): void;
}
export type StructureAccess = StructureAccessMembers;
export interface StructureAccessStatics {
}

/** JVM class net.minecraft.world.level.chunk.UpgradeData. */
export interface UpgradeDataMembers {
  copy(): UpgradeData;
  isEmpty(): boolean;
  upgrade(arg0: LevelChunk): void;
  write(): j_net_minecraft_nbt.CompoundTag;
}
export type UpgradeData = UpgradeDataMembers;
export interface UpgradeDataStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_world_level.LevelHeightAccessor): UpgradeData;
  readonly EMPTY: UpgradeData;
}

/** JVM interface net.minecraft.world.level.chunk.UpgradeData$BlockFixer. */
export interface UpgradeData_BlockFixerMembers {
  processChunk(arg0: j_net_minecraft_world_level.LevelAccessor): void;
  updateShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level.LevelAccessor, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}
export type UpgradeData_BlockFixer = UpgradeData_BlockFixerMembers;
export interface UpgradeData_BlockFixerStatics {
}
