// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';

/** JVM interface net.minecraft.world.level.levelgen.structure.pieces.PieceGenerator. */
export interface PieceGeneratorMembers<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> {
  generatePieces(arg0: StructurePiecesBuilder, arg1: PieceGenerator_Context<C>): void;
}
export type PieceGenerator<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> = PieceGeneratorMembers<C>;
export interface PieceGeneratorStatics {
}

/** JVM record net.minecraft.world.level.levelgen.structure.pieces.PieceGenerator$Context. */
export interface PieceGenerator_ContextMembers<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  chunkGenerator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  chunkPos(): j_net_minecraft_world_level.ChunkPos;
  config(): C;
  equals(arg0: object): boolean;
  hashCode(): number;
  heightAccessor(): j_net_minecraft_world_level.LevelHeightAccessor;
  random(): j_net_minecraft_world_level_levelgen.WorldgenRandom;
  seed(): bigint;
  structureTemplateManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  toString(): string;
}
export type PieceGenerator_Context<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> = PieceGenerator_ContextMembers<C> & JavaOpaque<"java.lang.Record">;
export interface PieceGenerator_ContextStatics {
  new<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */>(arg0: C, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg3: j_net_minecraft_world_level.ChunkPos, arg4: j_net_minecraft_world_level.LevelHeightAccessor, arg5: j_net_minecraft_world_level_levelgen.WorldgenRandom, arg6: bigint): PieceGenerator_Context<C>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pieces.PieceGeneratorSupplier. */
export interface PieceGeneratorSupplierMembers<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> {
  createGenerator(arg0: PieceGeneratorSupplier_Context<C>): JavaOptional<PieceGenerator<C>>;
}
export type PieceGeneratorSupplier<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> = PieceGeneratorSupplierMembers<C>;
export interface PieceGeneratorSupplierStatics {
  checkForBiomeOnTop<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */>(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): JavaPredicate<PieceGeneratorSupplier_Context<C>>;
  simple<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */>(arg0: JavaPredicate<PieceGeneratorSupplier_Context<C>>, arg1: PieceGenerator<C>): PieceGeneratorSupplier<C>;
}

/** JVM record net.minecraft.world.level.levelgen.structure.pieces.PieceGeneratorSupplier$Context. */
export interface PieceGeneratorSupplier_ContextMembers<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  biomeSource(): j_net_minecraft_world_level_biome.BiomeSource;
  chunkGenerator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  chunkPos(): j_net_minecraft_world_level.ChunkPos;
  config(): C;
  equals(arg0: object): boolean;
  hashCode(): number;
  heightAccessor(): j_net_minecraft_world_level.LevelHeightAccessor;
  randomState(): j_net_minecraft_world_level_levelgen.RandomState;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  seed(): bigint;
  structureTemplateManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  toString(): string;
  validBiome(): JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>;
  validBiomeOnTop(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): boolean;
}
export type PieceGeneratorSupplier_Context<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */ = unknown> = PieceGeneratorSupplier_ContextMembers<C> & JavaOpaque<"java.lang.Record">;
export interface PieceGeneratorSupplier_ContextStatics {
  new<C /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */>(arg0: j_net_minecraft_world_level_chunk.ChunkGenerator, arg1: j_net_minecraft_world_level_biome.BiomeSource, arg2: j_net_minecraft_world_level_levelgen.RandomState, arg3: bigint, arg4: j_net_minecraft_world_level.ChunkPos, arg5: C, arg6: j_net_minecraft_world_level.LevelHeightAccessor, arg7: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg8: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg9: j_net_minecraft_core.RegistryAccess): PieceGeneratorSupplier_Context<C>;
}

/** JVM record net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer. */
export interface PiecesContainerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  calculateBoundingBox(): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  isInsidePiece(arg0: j_net_minecraft_core.BlockPos): boolean;
  pieces(): JavaList<j_net_minecraft_world_level_levelgen_structure.StructurePiece>;
  save(arg0: StructurePieceSerializationContext): j_net_minecraft_nbt.Tag;
  toString(): string;
}
export type PiecesContainer = PiecesContainerMembers & JavaOpaque<"java.lang.Record">;
export interface PiecesContainerStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_levelgen_structure.StructurePiece>): PiecesContainer;
  load(arg0: j_net_minecraft_nbt.ListTag, arg1: StructurePieceSerializationContext): PiecesContainer;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pieces.StructurePiecesBuilder. */
export interface StructurePiecesBuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor];
  addPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece): void;
  build(): PiecesContainer;
  clear(): void;
  findCollisionPiece(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox): j_net_minecraft_world_level_levelgen_structure.StructurePiece | null;
  getBoundingBox(): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  isEmpty(): boolean;
  moveBelowSeaLevel(arg0: number, arg1: number, arg2: j_net_minecraft_util.RandomSource, arg3: number): number;
  moveInsideHeights(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): void;
  offsetPiecesVertically(arg0: number): void;
}
export type StructurePiecesBuilder = StructurePiecesBuilderMembers & j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor;
export interface StructurePiecesBuilderStatics {
  new(): StructurePiecesBuilder;
}

/** JVM record net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext. */
export interface StructurePieceSerializationContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  resourceManager(): j_net_minecraft_server_packs_resources.ResourceManager;
  structureTemplateManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  toString(): string;
}
export type StructurePieceSerializationContext = StructurePieceSerializationContextMembers & JavaOpaque<"java.lang.Record">;
export interface StructurePieceSerializationContextStatics {
  new(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_core.RegistryAccess, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager): StructurePieceSerializationContext;
  fromLevel(arg0: j_net_minecraft_server_level.ServerLevel): StructurePieceSerializationContext;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType. */
export interface StructurePieceTypeMembers {
  load(arg0: StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_world_level_levelgen_structure.StructurePiece;
}
export type StructurePieceType = StructurePieceTypeMembers;
export interface StructurePieceTypeStatics {
  readonly BURIED_TREASURE_PIECE: StructurePieceType;
  readonly DESERT_PYRAMID_PIECE: StructurePieceType;
  readonly END_CITY_PIECE: StructurePieceType;
  readonly IGLOO: StructurePieceType;
  readonly JIGSAW: StructurePieceType;
  readonly JUNGLE_PYRAMID_PIECE: StructurePieceType;
  readonly MINE_SHAFT_CORRIDOR: StructurePieceType;
  readonly MINE_SHAFT_CROSSING: StructurePieceType;
  readonly MINE_SHAFT_ROOM: StructurePieceType;
  readonly MINE_SHAFT_STAIRS: StructurePieceType;
  readonly NETHER_FORTRESS_BRIDGE_CROSSING: StructurePieceType;
  readonly NETHER_FORTRESS_BRIDGE_END_FILLER: StructurePieceType;
  readonly NETHER_FORTRESS_BRIDGE_STRAIGHT: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_ENTRANCE: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN: StructurePieceType;
  readonly NETHER_FORTRESS_CASTLE_STALK_ROOM: StructurePieceType;
  readonly NETHER_FORTRESS_MONSTER_THRONE: StructurePieceType;
  readonly NETHER_FORTRESS_ROOM_CROSSING: StructurePieceType;
  readonly NETHER_FORTRESS_STAIRS_ROOM: StructurePieceType;
  readonly NETHER_FORTRESS_START: StructurePieceType;
  readonly NETHER_FOSSIL: StructurePieceType;
  readonly OCEAN_MONUMENT_BUILDING: StructurePieceType;
  readonly OCEAN_MONUMENT_CORE_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_DOUBLE_XY_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_DOUBLE_X_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_DOUBLE_YZ_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_DOUBLE_Y_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_DOUBLE_Z_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_ENTRY_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_PENTHOUSE: StructurePieceType;
  readonly OCEAN_MONUMENT_SIMPLE_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_SIMPLE_TOP_ROOM: StructurePieceType;
  readonly OCEAN_MONUMENT_WING_ROOM: StructurePieceType;
  readonly OCEAN_RUIN: StructurePieceType;
  readonly RUINED_PORTAL: StructurePieceType;
  readonly SHIPWRECK_PIECE: StructurePieceType;
  readonly STRONGHOLD_CHEST_CORRIDOR: StructurePieceType;
  readonly STRONGHOLD_FILLER_CORRIDOR: StructurePieceType;
  readonly STRONGHOLD_FIVE_CROSSING: StructurePieceType;
  readonly STRONGHOLD_LEFT_TURN: StructurePieceType;
  readonly STRONGHOLD_LIBRARY: StructurePieceType;
  readonly STRONGHOLD_PORTAL_ROOM: StructurePieceType;
  readonly STRONGHOLD_PRISON_HALL: StructurePieceType;
  readonly STRONGHOLD_RIGHT_TURN: StructurePieceType;
  readonly STRONGHOLD_ROOM_CROSSING: StructurePieceType;
  readonly STRONGHOLD_STAIRS_DOWN: StructurePieceType;
  readonly STRONGHOLD_START: StructurePieceType;
  readonly STRONGHOLD_STRAIGHT: StructurePieceType;
  readonly STRONGHOLD_STRAIGHT_STAIRS_DOWN: StructurePieceType;
  readonly SWAMPLAND_HUT: StructurePieceType;
  readonly WOODLAND_MANSION_PIECE: StructurePieceType;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType$ContextlessType. */
export interface StructurePieceType_ContextlessTypeMembers {
  readonly __javaSupertypes?: readonly [StructurePieceType];
  load(arg0: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_world_level_levelgen_structure.StructurePiece;
  load(arg0: StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_world_level_levelgen_structure.StructurePiece;
}
export type StructurePieceType_ContextlessType = StructurePieceType_ContextlessTypeMembers & StructurePieceType;
export interface StructurePieceType_ContextlessTypeStatics {
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType$StructureTemplateType. */
export interface StructurePieceType_StructureTemplateTypeMembers {
  readonly __javaSupertypes?: readonly [StructurePieceType];
  load(arg0: StructurePieceSerializationContext, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_world_level_levelgen_structure.StructurePiece;
  load(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_world_level_levelgen_structure.StructurePiece;
}
export type StructurePieceType_StructureTemplateType = StructurePieceType_StructureTemplateTypeMembers & StructurePieceType;
export interface StructurePieceType_StructureTemplateTypeStatics {
}
