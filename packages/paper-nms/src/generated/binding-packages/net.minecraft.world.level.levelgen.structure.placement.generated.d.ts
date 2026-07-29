// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** JVM class net.minecraft.world.level.levelgen.structure.placement.ConcentricRingsStructurePlacement. */
export interface ConcentricRingsStructurePlacementMembers {
  readonly __javaSupertypes?: readonly [StructurePlacement];
  count(): number;
  distance(): number;
  preferredBiomes(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>;
  spread(): number;
  type(): StructurePlacementType<object>;
}
export type ConcentricRingsStructurePlacement = ConcentricRingsStructurePlacementMembers & StructurePlacement;
export interface ConcentricRingsStructurePlacementStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>): ConcentricRingsStructurePlacement;
  new(arg0: j_net_minecraft_core.Vec3i, arg1: StructurePlacement_FrequencyReductionMethod, arg2: number, arg3: number, arg4: JavaOptional<StructurePlacement_ExclusionZone>, arg5: number, arg6: number, arg7: number, arg8: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_biome.Biome>): ConcentricRingsStructurePlacement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConcentricRingsStructurePlacement]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.placement.RandomSpreadStructurePlacement. */
export interface RandomSpreadStructurePlacementMembers {
  readonly __javaSupertypes?: readonly [StructurePlacement];
  getPotentialStructureChunk(arg0: bigint, arg1: number, arg2: number): j_net_minecraft_world_level.ChunkPos;
  separation(): number;
  spacing(): number;
  spreadType(): RandomSpreadType;
  type(): StructurePlacementType<object>;
}
export type RandomSpreadStructurePlacement = RandomSpreadStructurePlacementMembers & StructurePlacement;
export interface RandomSpreadStructurePlacementStatics {
  new(arg0: number, arg1: number, arg2: RandomSpreadType, arg3: number): RandomSpreadStructurePlacement;
  new(arg0: j_net_minecraft_core.Vec3i, arg1: StructurePlacement_FrequencyReductionMethod, arg2: number, arg3: number, arg4: JavaOptional<StructurePlacement_ExclusionZone>, arg5: number, arg6: number, arg7: RandomSpreadType): RandomSpreadStructurePlacement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RandomSpreadStructurePlacement]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.placement.RandomSpreadType; constants are host handles, not strings. */
export type RandomSpreadType = JavaEnum<"net.minecraft.world.level.levelgen.structure.placement.RandomSpreadType", "LINEAR" | "TRIANGULAR"> & RandomSpreadTypeMembers;
export interface RandomSpreadTypeMembers {
  evaluate(arg0: j_net_minecraft_util.RandomSource, arg1: number): number;
  getSerializedName(): string;
}
export interface RandomSpreadTypeStatics {
  readonly LINEAR: RandomSpreadType;
  readonly TRIANGULAR: RandomSpreadType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RandomSpreadType]>;
  valueOf(arg0: string): RandomSpreadType;
  values(): Array<RandomSpreadType>;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.placement.StructurePlacement. */
export interface StructurePlacementMembers {
  applyAdditionalChunkRestrictions(arg0: number, arg1: number, arg2: bigint, arg3: number | null): boolean;
  applyInteractionsWithOtherStructures(arg0: j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState, arg1: number, arg2: number): boolean;
  readonly exclusionZone: JavaOptional<StructurePlacement_ExclusionZone>;
  readonly frequency: number;
  readonly frequencyReductionMethod: StructurePlacement_FrequencyReductionMethod;
  getLocatePos(arg0: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_core.BlockPos;
  isStructureChunk(arg0: j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState, arg1: number, arg2: number): boolean;
  isStructureChunk(arg0: j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState, arg1: number, arg2: number, arg3: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure.StructureSet> | null): boolean;
  readonly locateOffset: j_net_minecraft_core.Vec3i;
  readonly salt: number;
  type(): StructurePlacementType<object>;
}
export type StructurePlacement = StructurePlacementMembers;
export interface StructurePlacementStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructurePlacement]>;
}

/** JVM record net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$ExclusionZone. */
export interface StructurePlacement_ExclusionZoneMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  chunkCount(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  otherSet(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureSet>;
  toString(): string;
}
export type StructurePlacement_ExclusionZone = StructurePlacement_ExclusionZoneMembers & JavaOpaque<"java.lang.Record">;
export interface StructurePlacement_ExclusionZoneStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg1: number): StructurePlacement_ExclusionZone;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructurePlacement_ExclusionZone]>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReducer. */
export interface StructurePlacement_FrequencyReducerMembers {
  shouldGenerate(arg0: bigint, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number | null): boolean;
}
export type StructurePlacement_FrequencyReducer = StructurePlacement_FrequencyReducerMembers;
export interface StructurePlacement_FrequencyReducerStatics {
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod; constants are host handles, not strings. */
export type StructurePlacement_FrequencyReductionMethod = JavaEnum<"net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod", "DEFAULT" | "LEGACY_TYPE_1" | "LEGACY_TYPE_2" | "LEGACY_TYPE_3"> & StructurePlacement_FrequencyReductionMethodMembers;
export interface StructurePlacement_FrequencyReductionMethodMembers {
  getSerializedName(): string;
  shouldGenerate(arg0: bigint, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number | null): boolean;
}
export interface StructurePlacement_FrequencyReductionMethodStatics {
  readonly DEFAULT: StructurePlacement_FrequencyReductionMethod;
  readonly LEGACY_TYPE_1: StructurePlacement_FrequencyReductionMethod;
  readonly LEGACY_TYPE_2: StructurePlacement_FrequencyReductionMethod;
  readonly LEGACY_TYPE_3: StructurePlacement_FrequencyReductionMethod;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructurePlacement_FrequencyReductionMethod]>;
  valueOf(arg0: string): StructurePlacement_FrequencyReductionMethod;
  values(): Array<StructurePlacement_FrequencyReductionMethod>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.placement.StructurePlacementType. */
export interface StructurePlacementTypeMembers<SP /* extends StructurePlacement */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SP]>;
}
export type StructurePlacementType<SP /* extends StructurePlacement */ = unknown> = StructurePlacementTypeMembers<SP>;
export interface StructurePlacementTypeStatics {
  readonly CONCENTRIC_RINGS: StructurePlacementType<ConcentricRingsStructurePlacement>;
  readonly RANDOM_SPREAD: StructurePlacementType<RandomSpreadStructurePlacement>;
}
