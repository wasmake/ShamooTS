// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_storage from './net.minecraft.world.level.chunk.storage.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pieces from './net.minecraft.world.level.levelgen.structure.pieces.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_placement from './net.minecraft.world.level.levelgen.structure.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_structures from './net.minecraft.world.level.levelgen.structure.structures.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_org_bukkit_craftbukkit_block from './org.bukkit.craftbukkit.block.generated.js';
import type * as j_org_bukkit_craftbukkit_persistence from './org.bukkit.craftbukkit.persistence.generated.js';

/** JVM class net.minecraft.world.level.levelgen.structure.BoundingBox. */
export interface BoundingBoxMembers {
  encapsulate(arg0: j_net_minecraft_core.BlockPos): BoundingBox;
  encapsulate(arg0: BoundingBox): BoundingBox;
  equals(arg0: object): boolean;
  forAllCorners(arg0: JavaConsumer<j_net_minecraft_core.BlockPos>): void;
  getCenter(): j_net_minecraft_core.BlockPos;
  getLength(): j_net_minecraft_core.Vec3i;
  getXSpan(): number;
  getYSpan(): number;
  getZSpan(): number;
  hashCode(): number;
  inflatedBy(arg0: number): BoundingBox;
  inflatedBy(arg0: number, arg1: number, arg2: number): BoundingBox;
  intersectingChunks(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level.ChunkPos]>;
  intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  intersects(arg0: BoundingBox): boolean;
  isInside(arg0: number, arg1: number, arg2: number): boolean;
  isInside(arg0: j_net_minecraft_core.Vec3i): boolean;
  maxX(): number;
  maxY(): number;
  maxZ(): number;
  minX(): number;
  minY(): number;
  minZ(): number;
  move(arg0: number, arg1: number, arg2: number): BoundingBox;
  move(arg0: j_net_minecraft_core.Vec3i): BoundingBox;
  moved(arg0: number, arg1: number, arg2: number): BoundingBox;
  toString(): string;
}
export type BoundingBox = BoundingBoxMembers;
export interface BoundingBoxStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox;
  new(arg0: j_net_minecraft_core.BlockPos): BoundingBox;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BoundingBox]>;
  encapsulatingBoxes(arg0: Iterable<BoundingBox>): JavaOptional<BoundingBox>;
  encapsulatingPositions(arg0: Iterable<j_net_minecraft_core.BlockPos>): JavaOptional<BoundingBox>;
  fromCorners(arg0: j_net_minecraft_core.Vec3i, arg1: j_net_minecraft_core.Vec3i): BoundingBox;
  infinite(): BoundingBox;
  orientBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: j_net_minecraft_core.Direction): BoundingBox;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.BuiltinStructures. */
export interface BuiltinStructuresMembers {
}
export type BuiltinStructures = BuiltinStructuresMembers;
export interface BuiltinStructuresStatics {
  readonly ANCIENT_CITY: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly BASTION_REMNANT: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly BURIED_TREASURE: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly DESERT_PYRAMID: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly END_CITY: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly FORTRESS: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly IGLOO: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly JUNGLE_TEMPLE: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly MINESHAFT: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly MINESHAFT_MESA: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly NETHER_FOSSIL: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly OCEAN_MONUMENT: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly OCEAN_RUIN_COLD: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly OCEAN_RUIN_WARM: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly PILLAGER_OUTPOST: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_DESERT: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_JUNGLE: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_MOUNTAIN: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_NETHER: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_OCEAN: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_STANDARD: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly RUINED_PORTAL_SWAMP: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly SHIPWRECK: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly SHIPWRECK_BEACHED: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly STRONGHOLD: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly SWAMP_HUT: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly TRAIL_RUINS: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly TRIAL_CHAMBERS: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly VILLAGE_DESERT: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly VILLAGE_PLAINS: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly VILLAGE_SAVANNA: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly VILLAGE_SNOWY: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly VILLAGE_TAIGA: j_net_minecraft_resources.ResourceKey<Structure>;
  readonly WOODLAND_MANSION: j_net_minecraft_resources.ResourceKey<Structure>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.BuiltinStructureSets. */
export interface BuiltinStructureSetsMembers {
}
export type BuiltinStructureSets = BuiltinStructureSetsMembers;
export interface BuiltinStructureSetsStatics {
  readonly ANCIENT_CITIES: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly BURIED_TREASURES: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly DESERT_PYRAMIDS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly END_CITIES: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly IGLOOS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly JUNGLE_TEMPLES: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly MINESHAFTS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly NETHER_COMPLEXES: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly NETHER_FOSSILS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly OCEAN_MONUMENTS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly OCEAN_RUINS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly PILLAGER_OUTPOSTS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly RUINED_PORTALS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly SHIPWRECKS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly STRONGHOLDS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly SWAMP_HUTS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly TRAIL_RUINS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly TRIAL_CHAMBERS: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly VILLAGES: j_net_minecraft_resources.ResourceKey<StructureSet>;
  readonly WOODLAND_MANSIONS: j_net_minecraft_resources.ResourceKey<StructureSet>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.LegacyStructureDataHandler. */
export interface LegacyStructureDataHandlerMembers {
  removeIndex(arg0: bigint): void;
  updateFromLegacy(arg0: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_nbt.CompoundTag;
}
export type LegacyStructureDataHandler = LegacyStructureDataHandlerMembers;
export interface LegacyStructureDataHandlerStatics {
  new(arg0: j_net_minecraft_world_level_storage.DimensionDataStorage | null, arg1: JavaList<string>, arg2: JavaList<string>): LegacyStructureDataHandler;
  getLegacyStructureHandler(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, arg1: j_net_minecraft_world_level_storage.DimensionDataStorage | null): LegacyStructureDataHandler | null;
}

/** JVM class net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece. */
export interface PoolElementStructurePieceMembers {
  readonly __javaSupertypes?: readonly [StructurePiece];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): void;
  addJunction(arg0: j_net_minecraft_world_level_levelgen_structure_pools.JigsawJunction): void;
  readonly element: j_net_minecraft_world_level_levelgen_structure_pools.StructurePoolElement;
  getElement(): j_net_minecraft_world_level_levelgen_structure_pools.StructurePoolElement;
  getGroundLevelDelta(): number;
  getJunctions(): JavaList<j_net_minecraft_world_level_levelgen_structure_pools.JigsawJunction>;
  getPosition(): j_net_minecraft_core.BlockPos;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  move(arg0: number, arg1: number, arg2: number): void;
  place(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_core.BlockPos, arg6: boolean): void;
  position: j_net_minecraft_core.BlockPos;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
  readonly rotation: j_net_minecraft_world_level_block.Rotation;
  toString(): string;
}
export type PoolElementStructurePiece = PoolElementStructurePieceMembers & StructurePiece;
export interface PoolElementStructurePieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): PoolElementStructurePiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_levelgen_structure_pools.StructurePoolElement, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: j_net_minecraft_world_level_block.Rotation, arg5: BoundingBox, arg6: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings): PoolElementStructurePiece;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.PostPlacementProcessor. */
export interface PostPlacementProcessorMembers {
  afterPlace(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer): void;
}
export type PostPlacementProcessor = PostPlacementProcessorMembers;
export interface PostPlacementProcessorStatics {
  readonly NONE: PostPlacementProcessor;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece. */
export interface ScatteredFeaturePieceMembers {
  readonly __javaSupertypes?: readonly [StructurePiece];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): void;
  readonly depth: number;
  readonly height: number;
  heightPosition: number;
  updateAverageGroundHeight(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: BoundingBox, arg2: number): boolean;
  updateHeightPositionToLowestGroundHeight(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: number): boolean;
  readonly width: number;
}
export type ScatteredFeaturePiece = ScatteredFeaturePieceMembers & StructurePiece;
export interface ScatteredFeaturePieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: j_net_minecraft_core.Direction): ScatteredFeaturePiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: j_net_minecraft_nbt.CompoundTag): ScatteredFeaturePiece;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.SinglePieceStructure. */
export interface SinglePieceStructureMembers {
  readonly __javaSupertypes?: readonly [Structure];
  findGenerationPoint(arg0: Structure_GenerationContext): JavaOptional<Structure_GenerationStub>;
}
export type SinglePieceStructure = SinglePieceStructureMembers & Structure;
export interface SinglePieceStructureStatics {
  new(arg0: SinglePieceStructure_PieceConstructor, arg1: number, arg2: number, arg3: Structure_StructureSettings): SinglePieceStructure;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.SinglePieceStructure$PieceConstructor. */
export interface SinglePieceStructure_PieceConstructorMembers {
  construct(arg0: j_net_minecraft_world_level_levelgen.WorldgenRandom, arg1: number, arg2: number): StructurePiece;
}
export type SinglePieceStructure_PieceConstructor = SinglePieceStructure_PieceConstructorMembers;
export interface SinglePieceStructure_PieceConstructorStatics {
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.Structure. */
export interface StructureMembers {
  adjustBoundingBox(arg0: BoundingBox): BoundingBox;
  afterPlace(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer): void;
  biomes(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>;
  findGenerationPoint(arg0: Structure_GenerationContext): JavaOptional<Structure_GenerationStub>;
  findValidGenerationPoint(arg0: Structure_GenerationContext): JavaOptional<Structure_GenerationStub>;
  generate(arg0: j_net_minecraft_core.Holder<Structure>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: j_net_minecraft_core.RegistryAccess, arg3: j_net_minecraft_world_level_chunk.ChunkGenerator, arg4: j_net_minecraft_world_level_biome.BiomeSource, arg5: j_net_minecraft_world_level_levelgen.RandomState, arg6: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg7: bigint, arg8: j_net_minecraft_world_level.ChunkPos, arg9: number, arg10: j_net_minecraft_world_level.LevelHeightAccessor, arg11: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>): StructureStart;
  getLowestYIn5by5BoxOffset7Blocks(arg0: Structure_GenerationContext, arg1: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.BlockPos;
  readonly settings: Structure_StructureSettings;
  spawnOverrides(): JavaMap<j_net_minecraft_world_entity.MobCategory, StructureSpawnOverride>;
  step(): j_net_minecraft_world_level_levelgen.GenerationStep_Decoration;
  terrainAdaptation(): TerrainAdjustment;
  type(): StructureType<object>;
}
export type Structure = StructureMembers;
export interface StructureStatics {
  new(arg0: Structure_StructureSettings): Structure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Structure>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Structure]>;
  getLowestY(arg0: Structure_GenerationContext, arg1: number, arg2: number): number;
  getLowestY(arg0: Structure_GenerationContext, arg1: number, arg2: number, arg3: number, arg4: number): number;
  getMeanFirstOccupiedHeight(arg0: Structure_GenerationContext, arg1: number, arg2: number, arg3: number, arg4: number): number;
  onTopOfChunkCenter(arg0: Structure_GenerationContext, arg1: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg2: JavaConsumer<j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder>): JavaOptional<Structure_GenerationStub>;
  settingsCodec<S /* extends Structure */>(arg0: JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder$Instance", [S]>): JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder", [S, Structure_StructureSettings]>;
  simpleCodec<S /* extends Structure */>(arg0: JavaFunction<Structure_StructureSettings, S>): JavaOpaque<"com.mojang.serialization.MapCodec", [S]>;
}

/** JVM record net.minecraft.world.level.levelgen.structure.Structure$GenerationContext. */
export interface Structure_GenerationContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  biomeSource(): j_net_minecraft_world_level_biome.BiomeSource;
  chunkGenerator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  chunkPos(): j_net_minecraft_world_level.ChunkPos;
  equals(arg0: object): boolean;
  hashCode(): number;
  heightAccessor(): j_net_minecraft_world_level.LevelHeightAccessor;
  random(): j_net_minecraft_world_level_levelgen.WorldgenRandom;
  randomState(): j_net_minecraft_world_level_levelgen.RandomState;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  seed(): bigint;
  structureTemplateManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  toString(): string;
  validBiome(): JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>;
}
export type Structure_GenerationContext = Structure_GenerationContextMembers & JavaOpaque<"java.lang.Record">;
export interface Structure_GenerationContextStatics {
  new(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_world_level_biome.BiomeSource, arg3: j_net_minecraft_world_level_levelgen.RandomState, arg4: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg5: bigint, arg6: j_net_minecraft_world_level.ChunkPos, arg7: j_net_minecraft_world_level.LevelHeightAccessor, arg8: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>): Structure_GenerationContext;
  new(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_world_level_biome.BiomeSource, arg3: j_net_minecraft_world_level_levelgen.RandomState, arg4: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg5: j_net_minecraft_world_level_levelgen.WorldgenRandom, arg6: bigint, arg7: j_net_minecraft_world_level.ChunkPos, arg8: j_net_minecraft_world_level.LevelHeightAccessor, arg9: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>): Structure_GenerationContext;
}

/** JVM record net.minecraft.world.level.levelgen.structure.Structure$GenerationStub. */
export interface Structure_GenerationStubMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  generator(): JavaOpaque<"com.mojang.datafixers.util.Either", [JavaConsumer<j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder>, j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder]>;
  getPiecesBuilder(): j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder;
  hashCode(): number;
  position(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type Structure_GenerationStub = Structure_GenerationStubMembers & JavaOpaque<"java.lang.Record">;
export interface Structure_GenerationStubStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: JavaOpaque<"com.mojang.datafixers.util.Either", [JavaConsumer<j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder>, j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder]>): Structure_GenerationStub;
  new(arg0: j_net_minecraft_core.BlockPos, arg1: JavaConsumer<j_net_minecraft_world_level_levelgen_structure_pieces.StructurePiecesBuilder>): Structure_GenerationStub;
}

/** JVM record net.minecraft.world.level.levelgen.structure.Structure$StructureSettings. */
export interface Structure_StructureSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  biomes(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>;
  equals(arg0: object): boolean;
  hashCode(): number;
  spawnOverrides(): JavaMap<j_net_minecraft_world_entity.MobCategory, StructureSpawnOverride>;
  step(): j_net_minecraft_world_level_levelgen.GenerationStep_Decoration;
  terrainAdaptation(): TerrainAdjustment;
  toString(): string;
}
export type Structure_StructureSettings = Structure_StructureSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface Structure_StructureSettingsStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>): Structure_StructureSettings;
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>, arg1: JavaMap<j_net_minecraft_world_entity.MobCategory, StructureSpawnOverride>, arg2: j_net_minecraft_world_level_levelgen.GenerationStep_Decoration, arg3: TerrainAdjustment): Structure_StructureSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Structure_StructureSettings]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.Structure$StructureSettings$Builder. */
export interface Structure_StructureSettings_BuilderMembers {
  build(): Structure_StructureSettings;
  generationStep(arg0: j_net_minecraft_world_level_levelgen.GenerationStep_Decoration): Structure_StructureSettings_Builder;
  spawnOverrides(arg0: JavaMap<j_net_minecraft_world_entity.MobCategory, StructureSpawnOverride>): Structure_StructureSettings_Builder;
  terrainAdapation(arg0: TerrainAdjustment): Structure_StructureSettings_Builder;
}
export type Structure_StructureSettings_Builder = Structure_StructureSettings_BuilderMembers;
export interface Structure_StructureSettings_BuilderStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>): Structure_StructureSettings_Builder;
}

/** JVM class net.minecraft.world.level.levelgen.structure.StructureCheck. */
export interface StructureCheck_2Members {
  checkStart(arg0: j_net_minecraft_world_level.ChunkPos, arg1: Structure, arg2: j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement, arg3: boolean): StructureCheckResult;
  incrementReference(arg0: j_net_minecraft_world_level.ChunkPos, arg1: Structure): void;
  onStructureLoad(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaMap<Structure, StructureStart>): void;
}
export type StructureCheck_2 = StructureCheck_2Members;
export interface StructureCheck_2Statics {
  new(arg0: j_net_minecraft_world_level_chunk_storage.ChunkScanAccess, arg1: j_net_minecraft_core.RegistryAccess, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg3: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, arg4: j_net_minecraft_world_level_chunk.ChunkGenerator, arg5: j_net_minecraft_world_level_levelgen.RandomState, arg6: j_net_minecraft_world_level.LevelHeightAccessor, arg7: j_net_minecraft_world_level_biome.BiomeSource, arg8: bigint, arg9: JavaOpaque<"com.mojang.datafixers.DataFixer">): StructureCheck_2;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.StructureCheckResult; constants are host handles, not strings. */
export type StructureCheckResult = JavaEnum<"net.minecraft.world.level.levelgen.structure.StructureCheckResult", "CHUNK_LOAD_NEEDED" | "START_NOT_PRESENT" | "START_PRESENT"> & StructureCheckResultMembers;
export interface StructureCheckResultMembers {
}
export interface StructureCheckResultStatics {
  readonly CHUNK_LOAD_NEEDED: StructureCheckResult;
  readonly START_NOT_PRESENT: StructureCheckResult;
  readonly START_PRESENT: StructureCheckResult;
  valueOf(arg0: string): StructureCheckResult;
  values(): Array<StructureCheckResult>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.StructureFeatureIndexSavedData. */
export interface StructureFeatureIndexSavedDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData];
  addIndex(arg0: bigint): void;
  getAll(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  hasStartIndex(arg0: bigint): boolean;
  hasUnhandledIndex(arg0: bigint): boolean;
  removeIndex(arg0: bigint): void;
}
export type StructureFeatureIndexSavedData = StructureFeatureIndexSavedDataMembers & j_net_minecraft_world_level_saveddata.SavedData;
export interface StructureFeatureIndexSavedDataStatics {
  new(): StructureFeatureIndexSavedData;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureFeatureIndexSavedData]>;
  type(arg0: string): j_net_minecraft_world_level_saveddata.SavedDataType<StructureFeatureIndexSavedData>;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.StructurePiece. */
export interface StructurePieceMembers {
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): void;
  addChildren(arg0: StructurePiece, arg1: StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  boundingBox: BoundingBox;
  canBeReplaced(arg0: j_net_minecraft_world_level.LevelReader, arg1: number, arg2: number, arg3: number, arg4: BoundingBox): boolean;
  createChest(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: BoundingBox, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg5: j_net_minecraft_world_level_block_state.BlockState | null): boolean | null;
  createChest(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): boolean;
  createDispenser(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_core.Direction, arg7: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): boolean;
  createTag(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext): j_net_minecraft_nbt.CompoundTag;
  fillColumnDown(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number, arg4: number, arg5: BoundingBox): void;
  genDepth: number;
  generateAirBox(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
  generateBox(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: j_net_minecraft_world_level_block_state.BlockState, arg9: j_net_minecraft_world_level_block_state.BlockState, arg10: boolean): void;
  generateBox(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: j_net_minecraft_util.RandomSource, arg10: StructurePiece_BlockSelector): void;
  generateBox(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: BoundingBox, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_state.BlockState, arg5: boolean): void;
  generateBox(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: BoundingBox, arg3: boolean, arg4: j_net_minecraft_util.RandomSource, arg5: StructurePiece_BlockSelector): void;
  generateMaybeBox(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: j_net_minecraft_world_level_block_state.BlockState, arg11: j_net_minecraft_world_level_block_state.BlockState, arg12: boolean, arg13: boolean): void;
  generateUpperHalfSphere(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: j_net_minecraft_world_level_block_state.BlockState, arg9: boolean): void;
  getBlock(arg0: j_net_minecraft_world_level.BlockGetter, arg1: number, arg2: number, arg3: number, arg4: BoundingBox): j_net_minecraft_world_level_block_state.BlockState;
  getBoundingBox(): BoundingBox;
  getGenDepth(): number;
  getLocatorPosition(): j_net_minecraft_core.BlockPos;
  getMirror(): j_net_minecraft_world_level_block.Mirror;
  getOrientation(): j_net_minecraft_core.Direction | null;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  getType(): j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType;
  getWorldPos(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.BlockPos_MutableBlockPos;
  getWorldX(arg0: number, arg1: number): number;
  getWorldY(arg0: number): number;
  getWorldZ(arg0: number, arg1: number): number;
  isCloseToChunk(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): boolean;
  isInterior(arg0: j_net_minecraft_world_level.LevelReader, arg1: number, arg2: number, arg3: number, arg4: BoundingBox): boolean;
  isReplaceableByStructures(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  maybeGenerateBlock(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: BoundingBox, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: number, arg5: number, arg6: number, arg7: j_net_minecraft_world_level_block_state.BlockState): void;
  move(arg0: number, arg1: number, arg2: number): void;
  placeBlock(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number, arg4: number, arg5: BoundingBox): void;
  placeCraftBlockEntity(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_org_bukkit_craftbukkit_block.CraftBlockEntityState<object>, arg3: number): boolean;
  placeCraftSpawner(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: JavaOpaque<"org.bukkit.entity.EntityType">, arg3: number): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
  setCraftLootTable(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): void;
  setGenDepth(arg0: number): void;
  setOrientation(arg0: j_net_minecraft_core.Direction | null): void | null;
}
export type StructurePiece = StructurePieceMembers;
export interface StructurePieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: number, arg2: BoundingBox): StructurePiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: j_net_minecraft_nbt.CompoundTag): StructurePiece;
  readonly CAVE_AIR: j_net_minecraft_world_level_block_state.BlockState;
  readonly SHAPE_CHECK_BLOCKS: JavaSet<j_net_minecraft_world_level_block.Block>;
  createBoundingBox(arg0: JavaOpaque<"java.util.stream.Stream", [StructurePiece]>): BoundingBox;
  findCollisionPiece(arg0: JavaList<StructurePiece>, arg1: BoundingBox): StructurePiece | null;
  getRandomHorizontalDirection(arg0: j_net_minecraft_util.RandomSource): j_net_minecraft_core.Direction;
  makeBoundingBox(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Direction, arg4: number, arg5: number, arg6: number): BoundingBox;
  reorient(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.StructurePiece$BlockSelector. */
export interface StructurePiece_BlockSelectorMembers {
  getNext(): j_net_minecraft_world_level_block_state.BlockState;
  next: (j_net_minecraft_world_level_block_state.BlockState) & { (arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: boolean): void };
}
export type StructurePiece_BlockSelector = StructurePiece_BlockSelectorMembers;
export interface StructurePiece_BlockSelectorStatics {
  new(): StructurePiece_BlockSelector;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.StructurePieceAccessor. */
export interface StructurePieceAccessorMembers {
  addPiece(arg0: StructurePiece): void;
  findCollisionPiece(arg0: BoundingBox): StructurePiece | null;
}
export type StructurePieceAccessor = StructurePieceAccessorMembers;
export interface StructurePieceAccessorStatics {
}

/** JVM record net.minecraft.world.level.levelgen.structure.StructureSet. */
export interface StructureSetMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  placement(): j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement;
  structures(): JavaList<StructureSet_StructureSelectionEntry>;
  toString(): string;
}
export type StructureSet = StructureSetMembers & JavaOpaque<"java.lang.Record">;
export interface StructureSetStatics {
  new(arg0: JavaList<StructureSet_StructureSelectionEntry>, arg1: j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement): StructureSet;
  new(arg0: j_net_minecraft_core.Holder<Structure>, arg1: j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement): StructureSet;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<StructureSet>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureSet]>;
  entry(arg0: j_net_minecraft_core.Holder<Structure>): StructureSet_StructureSelectionEntry;
  entry(arg0: j_net_minecraft_core.Holder<Structure>, arg1: number): StructureSet_StructureSelectionEntry;
}

/** JVM record net.minecraft.world.level.levelgen.structure.StructureSet$StructureSelectionEntry. */
export interface StructureSet_StructureSelectionEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  structure(): j_net_minecraft_core.Holder<Structure>;
  toString(): string;
  weight(): number;
}
export type StructureSet_StructureSelectionEntry = StructureSet_StructureSelectionEntryMembers & JavaOpaque<"java.lang.Record">;
export interface StructureSet_StructureSelectionEntryStatics {
  new(arg0: j_net_minecraft_core.Holder<Structure>, arg1: number): StructureSet_StructureSelectionEntry;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureSet_StructureSelectionEntry]>;
}

/** JVM record net.minecraft.world.level.levelgen.structure.StructureSpawnOverride. */
export interface StructureSpawnOverrideMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  boundingBox(): StructureSpawnOverride_BoundingBoxType;
  equals(arg0: object): boolean;
  hashCode(): number;
  spawns(): j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level_biome.MobSpawnSettings_SpawnerData>;
  toString(): string;
}
export type StructureSpawnOverride = StructureSpawnOverrideMembers & JavaOpaque<"java.lang.Record">;
export interface StructureSpawnOverrideStatics {
  new(arg0: StructureSpawnOverride_BoundingBoxType, arg1: j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level_biome.MobSpawnSettings_SpawnerData>): StructureSpawnOverride;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureSpawnOverride]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType; constants are host handles, not strings. */
export type StructureSpawnOverride_BoundingBoxType = JavaEnum<"net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType", "PIECE" | "STRUCTURE"> & StructureSpawnOverride_BoundingBoxTypeMembers;
export interface StructureSpawnOverride_BoundingBoxTypeMembers {
  getSerializedName(): string;
}
export interface StructureSpawnOverride_BoundingBoxTypeStatics {
  readonly PIECE: StructureSpawnOverride_BoundingBoxType;
  readonly STRUCTURE: StructureSpawnOverride_BoundingBoxType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureSpawnOverride_BoundingBoxType]>;
  valueOf(arg0: string): StructureSpawnOverride_BoundingBoxType;
  values(): Array<StructureSpawnOverride_BoundingBoxType>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.StructureStart. */
export interface StructureStartMembers {
  addReference(): void;
  canBeReferenced(): boolean;
  createTag(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_nbt.CompoundTag;
  generationEventCause: JavaOpaque<"org.bukkit.event.world.AsyncStructureGenerateEvent$Cause">;
  getBoundingBox(): BoundingBox;
  getChunkPos(): j_net_minecraft_world_level.ChunkPos;
  getMaxReferences(): number;
  getPieces(): JavaList<StructurePiece>;
  getReferences(): number;
  getStructure(): Structure;
  isValid(): boolean;
  persistentDataContainer: j_org_bukkit_craftbukkit_persistence.DirtyCraftPersistentDataContainer;
  placeInChunk(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos): void;
}
export type StructureStart = StructureStartMembers;
export interface StructureStartStatics {
  new(arg0: Structure, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number, arg3: j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer): StructureStart;
  readonly INVALID_START: StructureStart;
  readonly INVALID_START_ID: "INVALID";
  loadStaticStart(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag, arg2: bigint): StructureStart | null;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.StructureType. */
export interface StructureTypeMembers<S /* extends Structure */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [S]>;
}
export type StructureType<S /* extends Structure */ = unknown> = StructureTypeMembers<S>;
export interface StructureTypeStatics {
  readonly BURIED_TREASURE: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.BuriedTreasureStructure>;
  readonly DESERT_PYRAMID: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.DesertPyramidStructure>;
  readonly END_CITY: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.EndCityStructure>;
  readonly FORTRESS: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.NetherFortressStructure>;
  readonly IGLOO: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.IglooStructure>;
  readonly JIGSAW: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.JigsawStructure>;
  readonly JUNGLE_TEMPLE: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.JungleTempleStructure>;
  readonly MINESHAFT: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.MineshaftStructure>;
  readonly NETHER_FOSSIL: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.NetherFossilStructure>;
  readonly OCEAN_MONUMENT: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.OceanMonumentStructure>;
  readonly OCEAN_RUIN: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.OceanRuinStructure>;
  readonly RUINED_PORTAL: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.RuinedPortalStructure>;
  readonly SHIPWRECK: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.ShipwreckStructure>;
  readonly STRONGHOLD: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.StrongholdStructure>;
  readonly SWAMP_HUT: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.SwampHutStructure>;
  readonly WOODLAND_MANSION: StructureType<j_net_minecraft_world_level_levelgen_structure_structures.WoodlandMansionStructure>;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.TemplateStructurePiece. */
export interface TemplateStructurePieceMembers {
  readonly __javaSupertypes?: readonly [StructurePiece];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): void;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  handleDataMarker(arg0: string, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level.ServerLevelAccessor, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox): void;
  makeTemplateLocation(): j_net_minecraft_resources.ResourceLocation;
  move(arg0: number, arg1: number, arg2: number): void;
  placeSettings: (j_net_minecraft_world_level_levelgen_structure_templatesystem.StructurePlaceSettings) & { (): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructurePlaceSettings };
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
  template: (j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate) & { (): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate };
  readonly templateName: string;
  templatePosition: (j_net_minecraft_core.BlockPos) & { (): j_net_minecraft_core.BlockPos };
}
export type TemplateStructurePiece = TemplateStructurePieceMembers & StructurePiece;
export interface TemplateStructurePieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: number, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg3: j_net_minecraft_resources.ResourceLocation, arg4: string, arg5: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructurePlaceSettings, arg6: j_net_minecraft_core.BlockPos): TemplateStructurePiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: j_net_minecraft_nbt.CompoundTag, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg3: JavaFunction<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_world_level_levelgen_structure_templatesystem.StructurePlaceSettings>): TemplateStructurePiece;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.TerrainAdjustment; constants are host handles, not strings. */
export type TerrainAdjustment = JavaEnum<"net.minecraft.world.level.levelgen.structure.TerrainAdjustment", "BEARD_BOX" | "BEARD_THIN" | "BURY" | "ENCAPSULATE" | "NONE"> & TerrainAdjustmentMembers;
export interface TerrainAdjustmentMembers {
  getSerializedName(): string;
}
export interface TerrainAdjustmentStatics {
  readonly BEARD_BOX: TerrainAdjustment;
  readonly BEARD_THIN: TerrainAdjustment;
  readonly BURY: TerrainAdjustment;
  readonly ENCAPSULATE: TerrainAdjustment;
  readonly NONE: TerrainAdjustment;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TerrainAdjustment]>;
  valueOf(arg0: string): TerrainAdjustment;
  values(): Array<TerrainAdjustment>;
}
