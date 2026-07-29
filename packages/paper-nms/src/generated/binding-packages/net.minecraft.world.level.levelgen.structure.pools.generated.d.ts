// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools_alias from './net.minecraft.world.level.levelgen.structure.pools.alias.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';

/** JVM record net.minecraft.world.level.levelgen.structure.pools.DimensionPadding. */
export interface DimensionPaddingMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  bottom(): number;
  equals(arg0: object): boolean;
  hasEqualTopAndBottom(): boolean;
  hashCode(): number;
  toString(): string;
  top(): number;
}
export type DimensionPadding = DimensionPaddingMembers & JavaOpaque<"java.lang.Record">;
export interface DimensionPaddingStatics {
  new(arg0: number): DimensionPadding;
  new(arg0: number, arg1: number): DimensionPadding;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DimensionPadding]>;
  readonly ZERO: DimensionPadding;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.EmptyPoolElement. */
export interface EmptyPoolElementMembers {
  readonly __javaSupertypes?: readonly [StructurePoolElement];
  getBoundingBox(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getShuffledJigsawBlocks(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_util.RandomSource): JavaList<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo>;
  getSize(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.Vec3i;
  getType(): StructurePoolElementType<object>;
  place(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkGenerator, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block.Rotation, arg7: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg8: j_net_minecraft_util.RandomSource, arg9: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings, arg10: boolean): boolean;
  toString(): string;
}
export type EmptyPoolElement = EmptyPoolElementMembers & StructurePoolElement;
export interface EmptyPoolElementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EmptyPoolElement]>;
  readonly INSTANCE: EmptyPoolElement;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.FeaturePoolElement. */
export interface FeaturePoolElementMembers {
  readonly __javaSupertypes?: readonly [StructurePoolElement];
  getBoundingBox(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getShuffledJigsawBlocks(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_util.RandomSource): JavaList<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo>;
  getSize(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.Vec3i;
  getType(): StructurePoolElementType<object>;
  place(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkGenerator, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block.Rotation, arg7: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg8: j_net_minecraft_util.RandomSource, arg9: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings, arg10: boolean): boolean;
  toString(): string;
}
export type FeaturePoolElement = FeaturePoolElementMembers & StructurePoolElement;
export interface FeaturePoolElementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FeaturePoolElement]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.JigsawJunction. */
export interface JigsawJunctionMembers {
  equals(arg0: object): boolean;
  getDeltaY(): number;
  getDestProjection(): StructureTemplatePool_Projection;
  getSourceGroundY(): number;
  getSourceX(): number;
  getSourceZ(): number;
  hashCode(): number;
  serialize<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  toString(): string;
}
export type JigsawJunction = JigsawJunctionMembers;
export interface JigsawJunctionStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: StructureTemplatePool_Projection): JigsawJunction;
  deserialize<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>): JigsawJunction;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.JigsawPlacement. */
export interface JigsawPlacementMembers {
}
export type JigsawPlacement = JigsawPlacementMembers;
export interface JigsawPlacementStatics {
  new(): JigsawPlacement;
  addPieces(arg0: j_net_minecraft_world_level_levelgen_structure.Structure_GenerationContext, arg1: j_net_minecraft_core.Holder<StructureTemplatePool>, arg2: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: boolean, arg6: JavaOptional<j_net_minecraft_world_level_levelgen.Heightmap_Types>, arg7: number, arg8: j_net_minecraft_world_level_levelgen_structure_pools_alias.PoolAliasLookup, arg9: DimensionPadding, arg10: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings): JavaOptional<j_net_minecraft_world_level_levelgen_structure.Structure_GenerationStub>;
  generateJigsaw(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.Holder<StructureTemplatePool>, arg2: j_net_minecraft_resources.ResourceLocation, arg3: number, arg4: j_net_minecraft_core.BlockPos, arg5: boolean): boolean;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.LegacySinglePoolElement. */
export interface LegacySinglePoolElementMembers {
  readonly __javaSupertypes?: readonly [SinglePoolElement];
  getType(): StructurePoolElementType<object>;
  toString(): string;
}
export type LegacySinglePoolElement = LegacySinglePoolElementMembers & SinglePoolElement;
export interface LegacySinglePoolElementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LegacySinglePoolElement]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.ListPoolElement. */
export interface ListPoolElementMembers {
  readonly __javaSupertypes?: readonly [StructurePoolElement];
  getBoundingBox(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getElements(): JavaList<StructurePoolElement>;
  getShuffledJigsawBlocks(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_util.RandomSource): JavaList<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo>;
  getSize(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.Vec3i;
  getType(): StructurePoolElementType<object>;
  place(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkGenerator, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block.Rotation, arg7: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg8: j_net_minecraft_util.RandomSource, arg9: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings, arg10: boolean): boolean;
  setProjection(arg0: StructureTemplatePool_Projection): StructurePoolElement;
  toString(): string;
}
export type ListPoolElement = ListPoolElementMembers & StructurePoolElement;
export interface ListPoolElementStatics {
  new(arg0: JavaList<StructurePoolElement>, arg1: StructureTemplatePool_Projection): ListPoolElement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ListPoolElement]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement. */
export interface SinglePoolElementMembers {
  readonly __javaSupertypes?: readonly [StructurePoolElement];
  getBoundingBox(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getDataMarkers(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: boolean): JavaList<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_StructureBlockInfo>;
  getShuffledJigsawBlocks(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_util.RandomSource): JavaList<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo>;
  getSize(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.Vec3i;
  getTemplateLocation(): j_net_minecraft_resources.ResourceLocation;
  getType(): StructurePoolElementType<object>;
  place(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkGenerator, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block.Rotation, arg7: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg8: j_net_minecraft_util.RandomSource, arg9: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings, arg10: boolean): boolean;
  toString(): string;
}
export type SinglePoolElement = SinglePoolElementMembers & StructurePoolElement;
export interface SinglePoolElementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SinglePoolElement]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement. */
export interface StructurePoolElementMembers {
  getBoundingBox(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getGroundLevelDelta(): number;
  getProjection(): StructureTemplatePool_Projection;
  getShuffledJigsawBlocks(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_util.RandomSource): JavaList<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo>;
  getSize(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.Vec3i;
  getType(): StructurePoolElementType<object>;
  handleDataMarker(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_StructureBlockInfo, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: j_net_minecraft_util.RandomSource, arg5: j_net_minecraft_world_level_levelgen_structure.BoundingBox): void;
  place(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_chunk.ChunkGenerator, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block.Rotation, arg7: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg8: j_net_minecraft_util.RandomSource, arg9: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings, arg10: boolean): boolean;
  setProjection(arg0: StructureTemplatePool_Projection): StructurePoolElement;
}
export type StructurePoolElement = StructurePoolElementMembers;
export interface StructurePoolElementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructurePoolElement]>;
  empty(): JavaFunction<StructureTemplatePool_Projection, EmptyPoolElement>;
  feature(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): JavaFunction<StructureTemplatePool_Projection, FeaturePoolElement>;
  legacy(arg0: string): JavaFunction<StructureTemplatePool_Projection, LegacySinglePoolElement>;
  legacy(arg0: string, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>): JavaFunction<StructureTemplatePool_Projection, LegacySinglePoolElement>;
  list(arg0: JavaList<JavaFunction<StructureTemplatePool_Projection, StructurePoolElement>>): JavaFunction<StructureTemplatePool_Projection, ListPoolElement>;
  single(arg0: string): JavaFunction<StructureTemplatePool_Projection, SinglePoolElement>;
  single(arg0: string, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>): JavaFunction<StructureTemplatePool_Projection, SinglePoolElement>;
  single(arg0: string, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>, arg2: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings): JavaFunction<StructureTemplatePool_Projection, SinglePoolElement>;
  single(arg0: string, arg1: j_net_minecraft_world_level_levelgen_structure_templatesystem.LiquidSettings): JavaFunction<StructureTemplatePool_Projection, SinglePoolElement>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pools.StructurePoolElementType. */
export interface StructurePoolElementTypeMembers<P /* extends StructurePoolElement */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type StructurePoolElementType<P /* extends StructurePoolElement */ = unknown> = StructurePoolElementTypeMembers<P>;
export interface StructurePoolElementTypeStatics {
  readonly EMPTY: StructurePoolElementType<EmptyPoolElement>;
  readonly FEATURE: StructurePoolElementType<FeaturePoolElement>;
  readonly LEGACY: StructurePoolElementType<LegacySinglePoolElement>;
  readonly LIST: StructurePoolElementType<ListPoolElement>;
  readonly SINGLE: StructurePoolElementType<SinglePoolElement>;
  register<P /* extends StructurePoolElement */>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [P]>): StructurePoolElementType<P>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool. */
export interface StructureTemplatePoolMembers {
  getFallback(): j_net_minecraft_core.Holder<StructureTemplatePool>;
  getMaxSize(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager): number;
  getRandomTemplate(arg0: j_net_minecraft_util.RandomSource): StructurePoolElement;
  getShuffledTemplates(arg0: j_net_minecraft_util.RandomSource): JavaList<StructurePoolElement>;
  getTemplates(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [StructurePoolElement, number]>>;
  size(): number;
}
export type StructureTemplatePool = StructureTemplatePoolMembers;
export interface StructureTemplatePoolStatics {
  new(arg0: j_net_minecraft_core.Holder<StructureTemplatePool>, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [StructurePoolElement, number]>>): StructureTemplatePool;
  new(arg0: j_net_minecraft_core.Holder<StructureTemplatePool>, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaFunction<StructureTemplatePool_Projection, StructurePoolElement>, number]>>, arg2: StructureTemplatePool_Projection): StructureTemplatePool;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<StructureTemplatePool>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureTemplatePool]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection; constants are host handles, not strings. */
export type StructureTemplatePool_Projection = JavaEnum<"net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection", "RIGID" | "TERRAIN_MATCHING"> & StructureTemplatePool_ProjectionMembers;
export interface StructureTemplatePool_ProjectionMembers {
  getName(): string;
  getProcessors(): JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessor]>;
  getSerializedName(): string;
}
export interface StructureTemplatePool_ProjectionStatics {
  readonly RIGID: StructureTemplatePool_Projection;
  readonly TERRAIN_MATCHING: StructureTemplatePool_Projection;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<StructureTemplatePool_Projection>;
  byName(arg0: string): StructureTemplatePool_Projection;
  valueOf(arg0: string): StructureTemplatePool_Projection;
  values(): Array<StructureTemplatePool_Projection>;
}
