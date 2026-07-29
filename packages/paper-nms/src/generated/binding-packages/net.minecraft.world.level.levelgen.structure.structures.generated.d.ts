// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_heightproviders from './net.minecraft.world.level.levelgen.heightproviders.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pieces from './net.minecraft.world.level.levelgen.structure.pieces.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools_alias from './net.minecraft.world.level.levelgen.structure.pools.alias.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';

/** JVM class net.minecraft.world.level.levelgen.structure.structures.BuriedTreasurePieces. */
export interface BuriedTreasurePiecesMembers {
}
export type BuriedTreasurePieces = BuriedTreasurePiecesMembers;
export interface BuriedTreasurePiecesStatics {
  new(): BuriedTreasurePieces;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.BuriedTreasurePieces$BuriedTreasurePiece. */
export interface BuriedTreasurePieces_BuriedTreasurePieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.StructurePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type BuriedTreasurePieces_BuriedTreasurePiece = BuriedTreasurePieces_BuriedTreasurePieceMembers & j_net_minecraft_world_level_levelgen_structure.StructurePiece;
export interface BuriedTreasurePieces_BuriedTreasurePieceStatics {
  new(arg0: j_net_minecraft_core.BlockPos): BuriedTreasurePieces_BuriedTreasurePiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): BuriedTreasurePieces_BuriedTreasurePiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.BuriedTreasureStructure. */
export interface BuriedTreasureStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type BuriedTreasureStructure = BuriedTreasureStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface BuriedTreasureStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): BuriedTreasureStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BuriedTreasureStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.DesertPyramidPiece. */
export interface DesertPyramidPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.ScatteredFeaturePiece];
  getPotentialSuspiciousSandWorldPositions(): JavaList<j_net_minecraft_core.BlockPos>;
  getRandomCollapsedRoofPos(): j_net_minecraft_core.BlockPos;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type DesertPyramidPiece = DesertPyramidPieceMembers & j_net_minecraft_world_level_levelgen_structure.ScatteredFeaturePiece;
export interface DesertPyramidPieceStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): DesertPyramidPiece;
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): DesertPyramidPiece;
  readonly DEPTH: 21;
  readonly WIDTH: 21;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.DesertPyramidStructure. */
export interface DesertPyramidStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.SinglePieceStructure];
  afterPlace(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer): void;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type DesertPyramidStructure = DesertPyramidStructureMembers & j_net_minecraft_world_level_levelgen_structure.SinglePieceStructure;
export interface DesertPyramidStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): DesertPyramidStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DesertPyramidStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.EndCityPieces. */
export interface EndCityPiecesMembers {
}
export type EndCityPieces = EndCityPiecesMembers;
export interface EndCityPiecesStatics {
  new(): EndCityPieces;
  startHouseTower(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: JavaList<j_net_minecraft_world_level_levelgen_structure.StructurePiece>, arg4: j_net_minecraft_util.RandomSource): void;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.EndCityPieces$EndCityPiece. */
export interface EndCityPieces_EndCityPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
}
export type EndCityPieces_EndCityPiece = EndCityPieces_EndCityPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface EndCityPieces_EndCityPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: string, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: boolean): EndCityPieces_EndCityPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): EndCityPieces_EndCityPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.EndCityStructure. */
export interface EndCityStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type EndCityStructure = EndCityStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface EndCityStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): EndCityStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EndCityStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.IglooPieces. */
export interface IglooPiecesMembers {
}
export type IglooPieces = IglooPiecesMembers;
export interface IglooPiecesStatics {
  new(): IglooPieces;
  readonly GENERATION_HEIGHT: 90;
  addPieces(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg4: j_net_minecraft_util.RandomSource): void;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.IglooPieces$IglooPiece. */
export interface IglooPieces_IglooPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type IglooPieces_IglooPiece = IglooPieces_IglooPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface IglooPieces_IglooPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): IglooPieces_IglooPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: number): IglooPieces_IglooPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.IglooStructure. */
export interface IglooStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type IglooStructure = IglooStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface IglooStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): IglooStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [IglooStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.JigsawStructure. */
export interface JigsawStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  getPoolAliases(): JavaList<j_net_minecraft_world_level_levelgen_structure_pools_alias.PoolAliasBinding>;
  getStartPool(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type JigsawStructure = JigsawStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface JigsawStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg2: number, arg3: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg4: boolean): JigsawStructure;
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg2: number, arg3: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg4: boolean, arg5: j_net_minecraft_world_level_levelgen.Heightmap_Types): JigsawStructure;
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg2: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg3: number, arg4: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider, arg5: boolean, arg6: JavaOptional<j_net_minecraft_world_level_levelgen.Heightmap_Types>, arg7: number, arg8: JavaList<j_net_minecraft_world_level_levelgen_structure_pools_alias.PoolAliasBinding>, arg9: j_net_minecraft_world_level_levelgen_structure_pools.DimensionPadding, arg10: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings): JigsawStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [JigsawStructure]>;
  readonly DEFAULT_DIMENSION_PADDING: j_net_minecraft_world_level_levelgen_structure_pools.DimensionPadding;
  readonly DEFAULT_LIQUID_SETTINGS: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings;
  readonly MAX_DEPTH: 20;
  readonly MAX_TOTAL_STRUCTURE_RANGE: 128;
  readonly MIN_DEPTH: 0;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.JungleTemplePiece. */
export interface JungleTemplePieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.ScatteredFeaturePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type JungleTemplePiece = JungleTemplePieceMembers & j_net_minecraft_world_level_levelgen_structure.ScatteredFeaturePiece;
export interface JungleTemplePieceStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): JungleTemplePiece;
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): JungleTemplePiece;
  readonly DEPTH: 15;
  readonly WIDTH: 12;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.JungleTempleStructure. */
export interface JungleTempleStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.SinglePieceStructure];
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type JungleTempleStructure = JungleTempleStructureMembers & j_net_minecraft_world_level_levelgen_structure.SinglePieceStructure;
export interface JungleTempleStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): JungleTempleStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [JungleTempleStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces. */
export interface MineshaftPiecesMembers {
}
export type MineshaftPieces = MineshaftPiecesMembers;
export interface MineshaftPiecesStatics {
  new(): MineshaftPieces;
  readonly MAGIC_START_Y: 50;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftCorridor. */
export interface MineshaftPieces_MineShaftCorridorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type MineshaftPieces_MineShaftCorridor = MineshaftPieces_MineShaftCorridorMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">;
export interface MineshaftPieces_MineShaftCorridorStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction, arg4: MineshaftStructure_Type): MineshaftPieces_MineShaftCorridor;
  new(arg0: j_net_minecraft_nbt.CompoundTag): MineshaftPieces_MineShaftCorridor;
  findCorridorSize(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction): j_net_minecraft_world_level_levelgen_structure.BoundingBox | null;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftCrossing. */
export interface MineshaftPieces_MineShaftCrossingMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type MineshaftPieces_MineShaftCrossing = MineshaftPieces_MineShaftCrossingMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">;
export interface MineshaftPieces_MineShaftCrossingStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction | null, arg3: MineshaftStructure_Type): MineshaftPieces_MineShaftCrossing;
  new(arg0: j_net_minecraft_nbt.CompoundTag): MineshaftPieces_MineShaftCrossing;
  findCrossing(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction): j_net_minecraft_world_level_levelgen_structure.BoundingBox | null;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftRoom. */
export interface MineshaftPieces_MineShaftRoomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  move(arg0: number, arg1: number, arg2: number): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type MineshaftPieces_MineShaftRoom = MineshaftPieces_MineShaftRoomMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">;
export interface MineshaftPieces_MineShaftRoomStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: MineshaftStructure_Type): MineshaftPieces_MineShaftRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): MineshaftPieces_MineShaftRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftStairs. */
export interface MineshaftPieces_MineShaftStairsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type MineshaftPieces_MineShaftStairs = MineshaftPieces_MineShaftStairsMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces$MineShaftPiece">;
export interface MineshaftPieces_MineShaftStairsStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction, arg3: MineshaftStructure_Type): MineshaftPieces_MineShaftStairs;
  new(arg0: j_net_minecraft_nbt.CompoundTag): MineshaftPieces_MineShaftStairs;
  findStairs(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction): j_net_minecraft_world_level_levelgen_structure.BoundingBox | null;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure. */
export interface MineshaftStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type MineshaftStructure = MineshaftStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface MineshaftStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: MineshaftStructure_Type): MineshaftStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MineshaftStructure]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure$Type; constants are host handles, not strings. */
export type MineshaftStructure_Type = JavaEnum<"net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure$Type", "MESA" | "NORMAL"> & MineshaftStructure_TypeMembers;
export interface MineshaftStructure_TypeMembers {
  getFenceState(): j_net_minecraft_world_level_block_state.BlockState;
  getName(): string;
  getPlanksState(): j_net_minecraft_world_level_block_state.BlockState;
  getSerializedName(): string;
  getWoodState(): j_net_minecraft_world_level_block_state.BlockState;
}
export interface MineshaftStructure_TypeStatics {
  readonly MESA: MineshaftStructure_Type;
  readonly NORMAL: MineshaftStructure_Type;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MineshaftStructure_Type]>;
  byId(arg0: number): MineshaftStructure_Type;
  valueOf(arg0: string): MineshaftStructure_Type;
  values(): Array<MineshaftStructure_Type>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces. */
export interface NetherFortressPiecesMembers {
}
export type NetherFortressPieces = NetherFortressPiecesMembers;
export interface NetherFortressPiecesStatics {
  new(): NetherFortressPieces;
  readonly MAGIC_START_Y: 64;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$BridgeCrossing. */
export interface NetherFortressPieces_BridgeCrossingMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_BridgeCrossing = NetherFortressPieces_BridgeCrossingMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_BridgeCrossingStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_BridgeCrossing;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_BridgeCrossing;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_BridgeCrossing;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$BridgeEndFiller. */
export interface NetherFortressPieces_BridgeEndFillerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_BridgeEndFiller = NetherFortressPieces_BridgeEndFillerMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_BridgeEndFillerStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): NetherFortressPieces_BridgeEndFiller;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_BridgeEndFiller;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): NetherFortressPieces_BridgeEndFiller;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$BridgeStraight. */
export interface NetherFortressPieces_BridgeStraightMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_BridgeStraight = NetherFortressPieces_BridgeStraightMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_BridgeStraightStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): NetherFortressPieces_BridgeStraight;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_BridgeStraight;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): NetherFortressPieces_BridgeStraight;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleCorridorStairsPiece. */
export interface NetherFortressPieces_CastleCorridorStairsPieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleCorridorStairsPiece = NetherFortressPieces_CastleCorridorStairsPieceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleCorridorStairsPieceStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_CastleCorridorStairsPiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleCorridorStairsPiece;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_CastleCorridorStairsPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleCorridorTBalconyPiece. */
export interface NetherFortressPieces_CastleCorridorTBalconyPieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleCorridorTBalconyPiece = NetherFortressPieces_CastleCorridorTBalconyPieceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleCorridorTBalconyPieceStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_CastleCorridorTBalconyPiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleCorridorTBalconyPiece;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_CastleCorridorTBalconyPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleEntrance. */
export interface NetherFortressPieces_CastleEntranceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleEntrance = NetherFortressPieces_CastleEntranceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleEntranceStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): NetherFortressPieces_CastleEntrance;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleEntrance;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): NetherFortressPieces_CastleEntrance;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleSmallCorridorCrossingPiece. */
export interface NetherFortressPieces_CastleSmallCorridorCrossingPieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleSmallCorridorCrossingPiece = NetherFortressPieces_CastleSmallCorridorCrossingPieceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleSmallCorridorCrossingPieceStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_CastleSmallCorridorCrossingPiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleSmallCorridorCrossingPiece;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_CastleSmallCorridorCrossingPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleSmallCorridorLeftTurnPiece. */
export interface NetherFortressPieces_CastleSmallCorridorLeftTurnPieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleSmallCorridorLeftTurnPiece = NetherFortressPieces_CastleSmallCorridorLeftTurnPieceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleSmallCorridorLeftTurnPieceStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): NetherFortressPieces_CastleSmallCorridorLeftTurnPiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleSmallCorridorLeftTurnPiece;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): NetherFortressPieces_CastleSmallCorridorLeftTurnPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleSmallCorridorPiece. */
export interface NetherFortressPieces_CastleSmallCorridorPieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleSmallCorridorPiece = NetherFortressPieces_CastleSmallCorridorPieceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleSmallCorridorPieceStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_CastleSmallCorridorPiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleSmallCorridorPiece;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_CastleSmallCorridorPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleSmallCorridorRightTurnPiece. */
export interface NetherFortressPieces_CastleSmallCorridorRightTurnPieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleSmallCorridorRightTurnPiece = NetherFortressPieces_CastleSmallCorridorRightTurnPieceMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleSmallCorridorRightTurnPieceStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): NetherFortressPieces_CastleSmallCorridorRightTurnPiece;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleSmallCorridorRightTurnPiece;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): NetherFortressPieces_CastleSmallCorridorRightTurnPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$CastleStalkRoom. */
export interface NetherFortressPieces_CastleStalkRoomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_CastleStalkRoom = NetherFortressPieces_CastleStalkRoomMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_CastleStalkRoomStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_CastleStalkRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_CastleStalkRoom;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_CastleStalkRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$MonsterThrone. */
export interface NetherFortressPieces_MonsterThroneMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_MonsterThrone = NetherFortressPieces_MonsterThroneMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_MonsterThroneStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_MonsterThrone;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_MonsterThrone;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction): NetherFortressPieces_MonsterThrone;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$RoomCrossing. */
export interface NetherFortressPieces_RoomCrossingMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_RoomCrossing = NetherFortressPieces_RoomCrossingMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_RoomCrossingStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_RoomCrossing;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_RoomCrossing;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): NetherFortressPieces_RoomCrossing;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$StairsRoom. */
export interface NetherFortressPieces_StairsRoomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFortressPieces_StairsRoom = NetherFortressPieces_StairsRoomMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$NetherBridgePiece">;
export interface NetherFortressPieces_StairsRoomStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): NetherFortressPieces_StairsRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_StairsRoom;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction): NetherFortressPieces_StairsRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$StartPiece. */
export interface NetherFortressPieces_StartPieceMembers {
  readonly __javaSupertypes?: readonly [NetherFortressPieces_BridgeCrossing];
  availableBridgePieces: JavaList<JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$PieceWeight">>;
  availableCastlePieces: JavaList<JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$PieceWeight">>;
  readonly pendingChildren: JavaList<j_net_minecraft_world_level_levelgen_structure.StructurePiece>;
  previousPiece: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces$PieceWeight">;
}
export type NetherFortressPieces_StartPiece = NetherFortressPieces_StartPieceMembers & NetherFortressPieces_BridgeCrossing;
export interface NetherFortressPieces_StartPieceStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): NetherFortressPieces_StartPiece;
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): NetherFortressPieces_StartPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFortressStructure. */
export interface NetherFortressStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type NetherFortressStructure = NetherFortressStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface NetherFortressStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): NetherFortressStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NetherFortressStructure]>;
  readonly FORTRESS_ENEMIES: j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level_biome.MobSpawnSettings_SpawnerData>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFossilPieces. */
export interface NetherFossilPiecesMembers {
}
export type NetherFossilPieces = NetherFossilPiecesMembers;
export interface NetherFossilPiecesStatics {
  new(): NetherFossilPieces;
  addPieces(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): void;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFossilPieces$NetherFossilPiece. */
export interface NetherFossilPieces_NetherFossilPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type NetherFossilPieces_NetherFossilPiece = NetherFossilPieces_NetherFossilPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface NetherFossilPieces_NetherFossilPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): NetherFossilPieces_NetherFossilPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation): NetherFossilPieces_NetherFossilPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.NetherFossilStructure. */
export interface NetherFossilStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  readonly height: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type NetherFossilStructure = NetherFossilStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface NetherFossilStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: j_net_minecraft_world_level_levelgen_heightproviders.HeightProvider): NetherFossilStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NetherFossilStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces. */
export interface OceanMonumentPiecesMembers {
}
export type OceanMonumentPieces = OceanMonumentPiecesMembers;
export interface OceanMonumentPiecesStatics {
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$MonumentBuilding. */
export interface OceanMonumentPieces_MonumentBuildingMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_MonumentBuilding = OceanMonumentPieces_MonumentBuildingMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_MonumentBuildingStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_MonumentBuilding;
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: j_net_minecraft_core.Direction): OceanMonumentPieces_MonumentBuilding;
  readonly BIOME_RANGE_CHECK: 29;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentCoreRoom. */
export interface OceanMonumentPieces_OceanMonumentCoreRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentCoreRoom = OceanMonumentPieces_OceanMonumentCoreRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentCoreRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentCoreRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentCoreRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentDoubleXRoom. */
export interface OceanMonumentPieces_OceanMonumentDoubleXRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentDoubleXRoom = OceanMonumentPieces_OceanMonumentDoubleXRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentDoubleXRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentDoubleXRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentDoubleXRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentDoubleXYRoom. */
export interface OceanMonumentPieces_OceanMonumentDoubleXYRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentDoubleXYRoom = OceanMonumentPieces_OceanMonumentDoubleXYRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentDoubleXYRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentDoubleXYRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentDoubleXYRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentDoubleYRoom. */
export interface OceanMonumentPieces_OceanMonumentDoubleYRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentDoubleYRoom = OceanMonumentPieces_OceanMonumentDoubleYRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentDoubleYRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentDoubleYRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentDoubleYRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentDoubleYZRoom. */
export interface OceanMonumentPieces_OceanMonumentDoubleYZRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentDoubleYZRoom = OceanMonumentPieces_OceanMonumentDoubleYZRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentDoubleYZRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentDoubleYZRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentDoubleYZRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentDoubleZRoom. */
export interface OceanMonumentPieces_OceanMonumentDoubleZRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentDoubleZRoom = OceanMonumentPieces_OceanMonumentDoubleZRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentDoubleZRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentDoubleZRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentDoubleZRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentEntryRoom. */
export interface OceanMonumentPieces_OceanMonumentEntryRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentEntryRoom = OceanMonumentPieces_OceanMonumentEntryRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentEntryRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentEntryRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentEntryRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentPenthouse. */
export interface OceanMonumentPieces_OceanMonumentPenthouseMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentPenthouse = OceanMonumentPieces_OceanMonumentPenthouseMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentPenthouseStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox): OceanMonumentPieces_OceanMonumentPenthouse;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentPenthouse;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentPiece. */
export interface OceanMonumentPieces_OceanMonumentPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.StructurePiece];
}
export type OceanMonumentPieces_OceanMonumentPiece = OceanMonumentPieces_OceanMonumentPieceMembers & j_net_minecraft_world_level_levelgen_structure.StructurePiece;
export interface OceanMonumentPieces_OceanMonumentPieceStatics {
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentSimpleRoom. */
export interface OceanMonumentPieces_OceanMonumentSimpleRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentSimpleRoom = OceanMonumentPieces_OceanMonumentSimpleRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentSimpleRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">, arg2: j_net_minecraft_util.RandomSource): OceanMonumentPieces_OceanMonumentSimpleRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentSimpleRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentSimpleTopRoom. */
export interface OceanMonumentPieces_OceanMonumentSimpleTopRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentSimpleTopRoom = OceanMonumentPieces_OceanMonumentSimpleTopRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentSimpleTopRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$RoomDefinition">): OceanMonumentPieces_OceanMonumentSimpleTopRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentSimpleTopRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces$OceanMonumentWingRoom. */
export interface OceanMonumentPieces_OceanMonumentWingRoomMembers {
  readonly __javaSupertypes?: readonly [OceanMonumentPieces_OceanMonumentPiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanMonumentPieces_OceanMonumentWingRoom = OceanMonumentPieces_OceanMonumentWingRoomMembers & OceanMonumentPieces_OceanMonumentPiece;
export interface OceanMonumentPieces_OceanMonumentWingRoomStatics {
  new(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: number): OceanMonumentPieces_OceanMonumentWingRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): OceanMonumentPieces_OceanMonumentWingRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanMonumentStructure. */
export interface OceanMonumentStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type OceanMonumentStructure = OceanMonumentStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface OceanMonumentStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): OceanMonumentStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [OceanMonumentStructure]>;
  regeneratePiecesAfterLoad(arg0: j_net_minecraft_world_level.ChunkPos, arg1: bigint, arg2: j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer): j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanRuinPieces. */
export interface OceanRuinPiecesMembers {
}
export type OceanRuinPieces = OceanRuinPiecesMembers;
export interface OceanRuinPiecesStatics {
  new(): OceanRuinPieces;
  addPieces(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg4: j_net_minecraft_util.RandomSource, arg5: OceanRuinStructure): void;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanRuinPieces$OceanRuinPiece. */
export interface OceanRuinPieces_OceanRuinPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type OceanRuinPieces_OceanRuinPiece = OceanRuinPieces_OceanRuinPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface OceanRuinPieces_OceanRuinPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: number, arg5: OceanRuinStructure_Type, arg6: boolean): OceanRuinPieces_OceanRuinPiece;
  create(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): OceanRuinPieces_OceanRuinPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure. */
export interface OceanRuinStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  readonly biomeTemp: OceanRuinStructure_Type;
  readonly clusterProbability: number;
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  readonly largeProbability: number;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type OceanRuinStructure = OceanRuinStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface OceanRuinStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: OceanRuinStructure_Type, arg2: number, arg3: number): OceanRuinStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [OceanRuinStructure]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure$Type; constants are host handles, not strings. */
export type OceanRuinStructure_Type = JavaEnum<"net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure$Type", "COLD" | "WARM"> & OceanRuinStructure_TypeMembers;
export interface OceanRuinStructure_TypeMembers {
  getName(): string;
  getSerializedName(): string;
}
export interface OceanRuinStructure_TypeStatics {
  readonly COLD: OceanRuinStructure_Type;
  readonly WARM: OceanRuinStructure_Type;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [OceanRuinStructure_Type]>;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [OceanRuinStructure_Type]>;
  valueOf(arg0: string): OceanRuinStructure_Type;
  values(): Array<OceanRuinStructure_Type>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece. */
export interface RuinedPortalPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type RuinedPortalPiece = RuinedPortalPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface RuinedPortalPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: RuinedPortalPiece_VerticalPlacement, arg3: RuinedPortalPiece_Properties, arg4: j_net_minecraft_resources.ResourceLocation, arg5: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate, arg6: j_net_minecraft_world_level_block.Rotation, arg7: j_net_minecraft_world_level_block.Mirror, arg8: j_net_minecraft_core.BlockPos): RuinedPortalPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): RuinedPortalPiece;
  getHeightMapType(arg0: RuinedPortalPiece_VerticalPlacement): j_net_minecraft_world_level_levelgen.Heightmap_Types;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece$Properties. */
export interface RuinedPortalPiece_PropertiesMembers {
  airPocket: boolean;
  cold: boolean;
  mossiness: number;
  overgrown: boolean;
  replaceWithBlackstone: boolean;
  vines: boolean;
}
export type RuinedPortalPiece_Properties = RuinedPortalPiece_PropertiesMembers;
export interface RuinedPortalPiece_PropertiesStatics {
  new(): RuinedPortalPiece_Properties;
  new(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): RuinedPortalPiece_Properties;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuinedPortalPiece_Properties]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece$VerticalPlacement; constants are host handles, not strings. */
export type RuinedPortalPiece_VerticalPlacement = JavaEnum<"net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece$VerticalPlacement", "IN_MOUNTAIN" | "IN_NETHER" | "ON_LAND_SURFACE" | "ON_OCEAN_FLOOR" | "PARTLY_BURIED" | "UNDERGROUND"> & RuinedPortalPiece_VerticalPlacementMembers;
export interface RuinedPortalPiece_VerticalPlacementMembers {
  getName(): string;
  getSerializedName(): string;
}
export interface RuinedPortalPiece_VerticalPlacementStatics {
  readonly IN_MOUNTAIN: RuinedPortalPiece_VerticalPlacement;
  readonly IN_NETHER: RuinedPortalPiece_VerticalPlacement;
  readonly ON_LAND_SURFACE: RuinedPortalPiece_VerticalPlacement;
  readonly ON_OCEAN_FLOOR: RuinedPortalPiece_VerticalPlacement;
  readonly PARTLY_BURIED: RuinedPortalPiece_VerticalPlacement;
  readonly UNDERGROUND: RuinedPortalPiece_VerticalPlacement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuinedPortalPiece_VerticalPlacement]>;
  valueOf(arg0: string): RuinedPortalPiece_VerticalPlacement;
  values(): Array<RuinedPortalPiece_VerticalPlacement>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure. */
export interface RuinedPortalStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type RuinedPortalStructure = RuinedPortalStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface RuinedPortalStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: JavaList<RuinedPortalStructure_Setup>): RuinedPortalStructure;
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: RuinedPortalStructure_Setup): RuinedPortalStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RuinedPortalStructure]>;
}

/** JVM record net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure$Setup. */
export interface RuinedPortalStructure_SetupMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  airPocketProbability(): number;
  canBeCold(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  mossiness(): number;
  overgrown(): boolean;
  placement(): RuinedPortalPiece_VerticalPlacement;
  replaceWithBlackstone(): boolean;
  toString(): string;
  vines(): boolean;
  weight(): number;
}
export type RuinedPortalStructure_Setup = RuinedPortalStructure_SetupMembers & JavaOpaque<"java.lang.Record">;
export interface RuinedPortalStructure_SetupStatics {
  new(arg0: RuinedPortalPiece_VerticalPlacement, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number): RuinedPortalStructure_Setup;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuinedPortalStructure_Setup]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.ShipwreckPieces. */
export interface ShipwreckPiecesMembers {
}
export type ShipwreckPieces = ShipwreckPiecesMembers;
export interface ShipwreckPiecesStatics {
  new(): ShipwreckPieces;
  addRandomPiece(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg4: j_net_minecraft_util.RandomSource, arg5: boolean): ShipwreckPieces_ShipwreckPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.ShipwreckPieces$ShipwreckPiece. */
export interface ShipwreckPieces_ShipwreckPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
  adjustPositionHeight(arg0: number): void;
  calculateBeachedPosition(arg0: number, arg1: j_net_minecraft_util.RandomSource): number;
  isTooBigToFitInWorldGenRegion(): boolean;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type ShipwreckPieces_ShipwreckPiece = ShipwreckPieces_ShipwreckPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface ShipwreckPieces_ShipwreckPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): ShipwreckPieces_ShipwreckPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: boolean): ShipwreckPieces_ShipwreckPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.ShipwreckStructure. */
export interface ShipwreckStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  readonly isBeached: boolean;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type ShipwreckStructure = ShipwreckStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface ShipwreckStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings, arg1: boolean): ShipwreckStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShipwreckStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces. */
export interface StrongholdPiecesMembers {
}
export type StrongholdPieces = StrongholdPiecesMembers;
export interface StrongholdPiecesStatics {
  new(): StrongholdPieces;
  readonly MAGIC_START_Y: 64;
  resetPieces(): void;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$ChestCorridor. */
export interface StrongholdPieces_ChestCorridorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_ChestCorridor = StrongholdPieces_ChestCorridorMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_ChestCorridorStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_ChestCorridor;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_ChestCorridor;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_ChestCorridor;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$FillerCorridor. */
export interface StrongholdPieces_FillerCorridorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_FillerCorridor = StrongholdPieces_FillerCorridorMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_FillerCorridorStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): StrongholdPieces_FillerCorridor;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_FillerCorridor;
  findPieceBox(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$FiveCrossing. */
export interface StrongholdPieces_FiveCrossingMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_FiveCrossing = StrongholdPieces_FiveCrossingMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_FiveCrossingStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_FiveCrossing;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_FiveCrossing;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_FiveCrossing;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$LeftTurn. */
export interface StrongholdPieces_LeftTurnMembers {
  readonly __javaSupertypes?: readonly [StrongholdPieces_Turn];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_LeftTurn = StrongholdPieces_LeftTurnMembers & StrongholdPieces_Turn;
export interface StrongholdPieces_LeftTurnStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_LeftTurn;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_LeftTurn;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_LeftTurn;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$Library. */
export interface StrongholdPieces_LibraryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_Library = StrongholdPieces_LibraryMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_LibraryStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_Library;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_Library;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_Library;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$PortalRoom. */
export interface StrongholdPieces_PortalRoomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_PortalRoom = StrongholdPieces_PortalRoomMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_PortalRoomStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Direction): StrongholdPieces_PortalRoom;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_PortalRoom;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction, arg5: number): StrongholdPieces_PortalRoom;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$PrisonHall. */
export interface StrongholdPieces_PrisonHallMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_PrisonHall = StrongholdPieces_PrisonHallMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_PrisonHallStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_PrisonHall;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_PrisonHall;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_PrisonHall;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$RightTurn. */
export interface StrongholdPieces_RightTurnMembers {
  readonly __javaSupertypes?: readonly [StrongholdPieces_Turn];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_RightTurn = StrongholdPieces_RightTurnMembers & StrongholdPieces_Turn;
export interface StrongholdPieces_RightTurnStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_RightTurn;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_RightTurn;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_RightTurn;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$RoomCrossing. */
export interface StrongholdPieces_RoomCrossingMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_RoomCrossing = StrongholdPieces_RoomCrossingMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_RoomCrossingStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_RoomCrossing;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_RoomCrossing;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_RoomCrossing;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StairsDown. */
export interface StrongholdPieces_StairsDownMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_StairsDown = StrongholdPieces_StairsDownMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_StairsDownStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_StairsDown;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_StairsDown;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction): StrongholdPieces_StairsDown;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_pieces.StructurePieceType, arg1: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_StairsDown;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_StairsDown;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StartPiece. */
export interface StrongholdPieces_StartPieceMembers {
  readonly __javaSupertypes?: readonly [StrongholdPieces_StairsDown];
  getLocatorPosition(): j_net_minecraft_core.BlockPos;
  readonly pendingChildren: JavaList<j_net_minecraft_world_level_levelgen_structure.StructurePiece>;
  portalRoomPiece: StrongholdPieces_PortalRoom | null;
  previousPiece: JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$PieceWeight">;
}
export type StrongholdPieces_StartPiece = StrongholdPieces_StartPieceMembers & StrongholdPieces_StairsDown;
export interface StrongholdPieces_StartPieceStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_StartPiece;
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): StrongholdPieces_StartPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$Straight. */
export interface StrongholdPieces_StraightMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_Straight = StrongholdPieces_StraightMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_StraightStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_Straight;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_Straight;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_Straight;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StraightStairsDown. */
export interface StrongholdPieces_StraightStairsDownMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
  addChildren(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece, arg1: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg2: j_net_minecraft_util.RandomSource): void;
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type StrongholdPieces_StraightStairsDown = StrongholdPieces_StraightStairsDownMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_StraightStairsDownStatics {
  new(arg0: number, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg3: j_net_minecraft_core.Direction): StrongholdPieces_StraightStairsDown;
  new(arg0: j_net_minecraft_nbt.CompoundTag): StrongholdPieces_StraightStairsDown;
  createPiece(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePieceAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_core.Direction, arg6: number): StrongholdPieces_StraightStairsDown;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece$SmallDoorType; constants are host handles, not strings. */
export type StrongholdPieces_StrongholdPiece_SmallDoorType = JavaEnum<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece$SmallDoorType", "GRATES" | "IRON_DOOR" | "OPENING" | "WOOD_DOOR"> & StrongholdPieces_StrongholdPiece_SmallDoorTypeMembers;
export interface StrongholdPieces_StrongholdPiece_SmallDoorTypeMembers {
}
export interface StrongholdPieces_StrongholdPiece_SmallDoorTypeStatics {
  readonly GRATES: StrongholdPieces_StrongholdPiece_SmallDoorType;
  readonly IRON_DOOR: StrongholdPieces_StrongholdPiece_SmallDoorType;
  readonly OPENING: StrongholdPieces_StrongholdPiece_SmallDoorType;
  readonly WOOD_DOOR: StrongholdPieces_StrongholdPiece_SmallDoorType;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StrongholdPieces_StrongholdPiece_SmallDoorType]>;
  valueOf(arg0: string): StrongholdPieces_StrongholdPiece_SmallDoorType;
  values(): Array<StrongholdPieces_StrongholdPiece_SmallDoorType>;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$Turn. */
export interface StrongholdPieces_TurnMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">];
}
export type StrongholdPieces_Turn = StrongholdPieces_TurnMembers & JavaOpaque<"net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces$StrongholdPiece">;
export interface StrongholdPieces_TurnStatics {
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.StrongholdStructure. */
export interface StrongholdStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type StrongholdStructure = StrongholdStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface StrongholdStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): StrongholdStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StrongholdStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.SwampHutPiece. */
export interface SwampHutPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.ScatteredFeaturePiece];
  postProcess(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_core.BlockPos): void;
}
export type SwampHutPiece = SwampHutPieceMembers & j_net_minecraft_world_level_levelgen_structure.ScatteredFeaturePiece;
export interface SwampHutPieceStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): SwampHutPiece;
  new(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): SwampHutPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.SwampHutStructure. */
export interface SwampHutStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type SwampHutStructure = SwampHutStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface SwampHutStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): SwampHutStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SwampHutStructure]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces. */
export interface WoodlandMansionPiecesMembers {
}
export type WoodlandMansionPieces = WoodlandMansionPiecesMembers;
export interface WoodlandMansionPiecesStatics {
  new(): WoodlandMansionPieces;
  generateMansion(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: JavaList<WoodlandMansionPieces_WoodlandMansionPiece>, arg4: j_net_minecraft_util.RandomSource): void;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces$WoodlandMansionPiece. */
export interface WoodlandMansionPieces_WoodlandMansionPieceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece];
}
export type WoodlandMansionPieces_WoodlandMansionPiece = WoodlandMansionPieces_WoodlandMansionPieceMembers & j_net_minecraft_world_level_levelgen_structure.TemplateStructurePiece;
export interface WoodlandMansionPieces_WoodlandMansionPieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: string, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation): WoodlandMansionPieces_WoodlandMansionPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: string, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: j_net_minecraft_world_level_block.Mirror): WoodlandMansionPieces_WoodlandMansionPiece;
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_nbt.CompoundTag): WoodlandMansionPieces_WoodlandMansionPiece;
}

/** JVM class net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionStructure. */
export interface WoodlandMansionStructureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_levelgen_structure.Structure];
  afterPlace(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.StructureManager, arg2: j_net_minecraft_world_level_chunk.ChunkGenerator, arg3: j_net_minecraft_util.RandomSource, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos, arg6: j_net_minecraft_world_level_levelgen_structure_pieces.PiecesContainer): void;
  findGenerationPoint(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  type(): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
}
export type WoodlandMansionStructure = WoodlandMansionStructureMembers & j_net_minecraft_world_level_levelgen_structure.Structure;
export interface WoodlandMansionStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_StructureSettings): WoodlandMansionStructure;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WoodlandMansionStructure]>;
}
