// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';

/** JVM interface net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate. */
export interface BlockPredicate_3Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_world_level.WorldGenLevel, j_net_minecraft_core.BlockPos]>];
  type(): BlockPredicateType<object>;
}
export type BlockPredicate_3 = BlockPredicate_3Members & JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_world_level.WorldGenLevel, j_net_minecraft_core.BlockPos]>;
export interface BlockPredicate_3Statics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockPredicate_3]>;
  readonly ONLY_IN_AIR_OR_WATER_PREDICATE: BlockPredicate_3;
  readonly ONLY_IN_AIR_PREDICATE: BlockPredicate_3;
  allOf(arg0: JavaList<BlockPredicate_3>): BlockPredicate_3;
  allOf(arg0: BlockPredicate_3, arg1: BlockPredicate_3): BlockPredicate_3;
  allOf(...arg0: Array<BlockPredicate_3>): BlockPredicate_3;
  alwaysTrue(): BlockPredicate_3;
  anyOf(arg0: JavaList<BlockPredicate_3>): BlockPredicate_3;
  anyOf(arg0: BlockPredicate_3, arg1: BlockPredicate_3): BlockPredicate_3;
  anyOf(...arg0: Array<BlockPredicate_3>): BlockPredicate_3;
  hasSturdyFace(arg0: j_net_minecraft_core.Direction): BlockPredicate_3;
  hasSturdyFace(arg0: j_net_minecraft_core.Vec3i, arg1: j_net_minecraft_core.Direction): BlockPredicate_3;
  insideWorld(arg0: j_net_minecraft_core.Vec3i): BlockPredicate_3;
  matchesBlocks(arg0: JavaList<j_net_minecraft_world_level_block.Block>): BlockPredicate_3;
  matchesBlocks(arg0: j_net_minecraft_core.Vec3i, arg1: JavaList<j_net_minecraft_world_level_block.Block>): BlockPredicate_3;
  matchesBlocks(arg0: j_net_minecraft_core.Vec3i, ...arg1: Array<j_net_minecraft_world_level_block.Block>): BlockPredicate_3;
  matchesBlocks(...arg0: Array<j_net_minecraft_world_level_block.Block>): BlockPredicate_3;
  matchesFluids(arg0: j_net_minecraft_core.Vec3i, arg1: JavaList<j_net_minecraft_world_level_material.Fluid>): BlockPredicate_3;
  matchesFluids(arg0: j_net_minecraft_core.Vec3i, ...arg1: Array<j_net_minecraft_world_level_material.Fluid>): BlockPredicate_3;
  matchesFluids(...arg0: Array<j_net_minecraft_world_level_material.Fluid>): BlockPredicate_3;
  matchesTag(arg0: j_net_minecraft_core.Vec3i, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): BlockPredicate_3;
  matchesTag(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): BlockPredicate_3;
  noFluid(): BlockPredicate_3;
  noFluid(arg0: j_net_minecraft_core.Vec3i): BlockPredicate_3;
  not(arg0: BlockPredicate_3): BlockPredicate_3;
  replaceable(): BlockPredicate_3;
  replaceable(arg0: j_net_minecraft_core.Vec3i): BlockPredicate_3;
  solid(): BlockPredicate_3;
  solid(arg0: j_net_minecraft_core.Vec3i): BlockPredicate_3;
  unobstructed(): BlockPredicate_3;
  unobstructed(arg0: j_net_minecraft_core.Vec3i): BlockPredicate_3;
  wouldSurvive(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Vec3i): BlockPredicate_3;
}

/** JVM interface net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType. */
export interface BlockPredicateTypeMembers<P /* extends BlockPredicate_3 */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type BlockPredicateType<P /* extends BlockPredicate_3 */ = unknown> = BlockPredicateTypeMembers<P>;
export interface BlockPredicateTypeStatics {
  readonly ALL_OF: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.AllOfPredicate">>;
  readonly ANY_OF: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.AnyOfPredicate">>;
  readonly HAS_STURDY_FACE: BlockPredicateType<HasSturdyFacePredicate>;
  readonly INSIDE_WORLD_BOUNDS: BlockPredicateType<InsideWorldBoundsPredicate>;
  readonly MATCHING_BLOCKS: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.MatchingBlocksPredicate">>;
  readonly MATCHING_BLOCK_TAG: BlockPredicateType<MatchingBlockTagPredicate>;
  readonly MATCHING_FLUIDS: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.MatchingFluidsPredicate">>;
  readonly NOT: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.NotPredicate">>;
  readonly REPLACEABLE: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.ReplaceablePredicate">>;
  readonly SOLID: BlockPredicateType<SolidPredicate>;
  readonly TRUE: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.TrueBlockPredicate">>;
  readonly UNOBSTRUCTED: BlockPredicateType<JavaOpaque<"net.minecraft.world.level.levelgen.blockpredicates.UnobstructedPredicate">>;
  readonly WOULD_SURVIVE: BlockPredicateType<WouldSurvivePredicate>;
}

/** JVM class net.minecraft.world.level.levelgen.blockpredicates.HasSturdyFacePredicate. */
export interface HasSturdyFacePredicateMembers {
  readonly __javaSupertypes?: readonly [BlockPredicate_3];
  test(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  type(): BlockPredicateType<object>;
}
export type HasSturdyFacePredicate = HasSturdyFacePredicateMembers & BlockPredicate_3;
export interface HasSturdyFacePredicateStatics {
  new(arg0: j_net_minecraft_core.Vec3i, arg1: j_net_minecraft_core.Direction): HasSturdyFacePredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HasSturdyFacePredicate]>;
}

/** JVM class net.minecraft.world.level.levelgen.blockpredicates.InsideWorldBoundsPredicate. */
export interface InsideWorldBoundsPredicateMembers {
  readonly __javaSupertypes?: readonly [BlockPredicate_3];
  test(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  type(): BlockPredicateType<object>;
}
export type InsideWorldBoundsPredicate = InsideWorldBoundsPredicateMembers & BlockPredicate_3;
export interface InsideWorldBoundsPredicateStatics {
  new(arg0: j_net_minecraft_core.Vec3i): InsideWorldBoundsPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [InsideWorldBoundsPredicate]>;
}

/** JVM class net.minecraft.world.level.levelgen.blockpredicates.MatchingBlockTagPredicate. */
export interface MatchingBlockTagPredicateMembers {
  readonly __javaSupertypes?: readonly [StateTestingPredicate];
  type(): BlockPredicateType<object>;
}
export type MatchingBlockTagPredicate = MatchingBlockTagPredicateMembers & StateTestingPredicate;
export interface MatchingBlockTagPredicateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MatchingBlockTagPredicate]>;
}

/** JVM class net.minecraft.world.level.levelgen.blockpredicates.SolidPredicate. */
export interface SolidPredicateMembers {
  readonly __javaSupertypes?: readonly [StateTestingPredicate];
  type(): BlockPredicateType<object>;
}
export type SolidPredicate = SolidPredicateMembers & StateTestingPredicate;
export interface SolidPredicateStatics {
  new(arg0: j_net_minecraft_core.Vec3i): SolidPredicate;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SolidPredicate]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate. */
export interface StateTestingPredicateMembers {
  readonly __javaSupertypes?: readonly [BlockPredicate_3];
  test(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
}
export type StateTestingPredicate = StateTestingPredicateMembers & BlockPredicate_3;
export interface StateTestingPredicateStatics {
}

/** JVM class net.minecraft.world.level.levelgen.blockpredicates.WouldSurvivePredicate. */
export interface WouldSurvivePredicateMembers {
  readonly __javaSupertypes?: readonly [BlockPredicate_3];
  test(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  type(): BlockPredicateType<object>;
}
export type WouldSurvivePredicate = WouldSurvivePredicateMembers & BlockPredicate_3;
export interface WouldSurvivePredicateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WouldSurvivePredicate]>;
}
