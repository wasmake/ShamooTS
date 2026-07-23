// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';

/** JVM class net.minecraft.world.level.block.state.predicate.BlockPredicate. */
export interface BlockPredicate_2Members {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>];
  test(arg0: object | null): boolean | null;
  test(arg0: j_net_minecraft_world_level_block_state.BlockState | null): boolean | null;
}
export type BlockPredicate_2 = BlockPredicate_2Members & JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>;
export interface BlockPredicate_2Statics {
  new(arg0: j_net_minecraft_world_level_block.Block): BlockPredicate_2;
  forBlock(arg0: j_net_minecraft_world_level_block.Block): BlockPredicate_2;
}

/** JVM class net.minecraft.world.level.block.state.predicate.BlockStatePredicate. */
export interface BlockStatePredicateMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>];
  applies<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state_properties.Property<T>, arg2: JavaPredicate<object>): boolean;
  test(arg0: object | null): boolean | null;
  test(arg0: j_net_minecraft_world_level_block_state.BlockState | null): boolean | null;
  where<V /* extends JavaOpaque<"java.lang.Comparable", [V]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<V>, arg1: JavaPredicate<object>): BlockStatePredicate;
}
export type BlockStatePredicate = BlockStatePredicateMembers & JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>;
export interface BlockStatePredicateStatics {
  readonly ANY: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>;
  forBlock(arg0: j_net_minecraft_world_level_block.Block): BlockStatePredicate;
}
