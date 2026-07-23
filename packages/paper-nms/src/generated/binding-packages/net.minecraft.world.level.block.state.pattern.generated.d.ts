// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';

/** JVM class net.minecraft.world.level.block.state.pattern.BlockInWorld. */
export interface BlockInWorldMembers {
  getEntity(): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getLevel(): j_net_minecraft_world_level.LevelReader;
  getPos(): j_net_minecraft_core.BlockPos;
  getState(): j_net_minecraft_world_level_block_state.BlockState;
}
export type BlockInWorld = BlockInWorldMembers;
export interface BlockInWorldStatics {
  new(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): BlockInWorld;
  hasState(arg0: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): JavaPredicate<BlockInWorld>;
}

/** JVM class net.minecraft.world.level.block.state.pattern.BlockPattern. */
export interface BlockPatternMembers {
  find(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): BlockPattern_BlockPatternMatch | null;
  getDepth(): number;
  getHeight(): number;
  getPattern(): Array<Array<Array<JavaPredicate<BlockInWorld>>>>;
  getWidth(): number;
  matches(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_core.Direction): BlockPattern_BlockPatternMatch | null;
}
export type BlockPattern = BlockPatternMembers;
export interface BlockPatternStatics {
  new(arg0: Array<Array<Array<JavaPredicate<BlockInWorld>>>>): BlockPattern;
  createLevelCache(arg0: j_net_minecraft_world_level.LevelReader, arg1: boolean): JavaOpaque<"com.google.common.cache.LoadingCache", [j_net_minecraft_core.BlockPos, BlockInWorld]>;
  translateAndRotate(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.Direction, arg3: number, arg4: number, arg5: number): j_net_minecraft_core.BlockPos;
}

/** JVM class net.minecraft.world.level.block.state.pattern.BlockPattern$BlockPatternMatch. */
export interface BlockPattern_BlockPatternMatchMembers {
  getBlock(arg0: number, arg1: number, arg2: number): BlockInWorld;
  getDepth(): number;
  getForwards(): j_net_minecraft_core.Direction;
  getFrontTopLeft(): j_net_minecraft_core.BlockPos;
  getHeight(): number;
  getUp(): j_net_minecraft_core.Direction;
  getWidth(): number;
  toString(): string;
}
export type BlockPattern_BlockPatternMatch = BlockPattern_BlockPatternMatchMembers;
export interface BlockPattern_BlockPatternMatchStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.Direction, arg3: JavaOpaque<"com.google.common.cache.LoadingCache", [j_net_minecraft_core.BlockPos, BlockInWorld]>, arg4: number, arg5: number, arg6: number): BlockPattern_BlockPatternMatch;
}

/** JVM class net.minecraft.world.level.block.state.pattern.BlockPatternBuilder. */
export interface BlockPatternBuilderMembers {
  aisle(...arg0: Array<string>): BlockPatternBuilder;
  build(): BlockPattern;
  where(arg0: string, arg1: JavaPredicate<BlockInWorld>): BlockPatternBuilder;
}
export type BlockPatternBuilder = BlockPatternBuilderMembers;
export interface BlockPatternBuilderStatics {
  start(): BlockPatternBuilder;
}
