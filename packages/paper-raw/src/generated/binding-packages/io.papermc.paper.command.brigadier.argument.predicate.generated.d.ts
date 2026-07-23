// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.command.brigadier.argument.predicate.BlockInWorldPredicate. */
export interface BlockInWorldPredicateMembers {
  testBlock(arg0: j_org_bukkit_block.Block): BlockInWorldPredicate_Result;
  testBlock(arg0: j_org_bukkit_block.Block, arg1: boolean): BlockInWorldPredicate_Result;
}
export type BlockInWorldPredicate = BlockInWorldPredicateMembers;
export interface BlockInWorldPredicateStatics {
}

/** Live JVM enum io.papermc.paper.command.brigadier.argument.predicate.BlockInWorldPredicate$Result; constants are host handles, not strings. */
export type BlockInWorldPredicate_Result = JavaEnum<"io.papermc.paper.command.brigadier.argument.predicate.BlockInWorldPredicate$Result", "FALSE" | "TRUE" | "UNLOADED_CHUNK"> & BlockInWorldPredicate_ResultMembers;
export interface BlockInWorldPredicate_ResultMembers {
  asBoolean(): boolean;
}
export interface BlockInWorldPredicate_ResultStatics {
  readonly FALSE: BlockInWorldPredicate_Result;
  readonly TRUE: BlockInWorldPredicate_Result;
  readonly UNLOADED_CHUNK: BlockInWorldPredicate_Result;
  valueOf(arg0: string): BlockInWorldPredicate_Result;
  values(): Array<BlockInWorldPredicate_Result>;
}

/** JVM interface io.papermc.paper.command.brigadier.argument.predicate.ItemStackPredicate. */
export interface ItemStackPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_org_bukkit_inventory.ItemStack>];
}
export type ItemStackPredicate = ItemStackPredicateMembers & JavaPredicate<j_org_bukkit_inventory.ItemStack>;
export interface ItemStackPredicateStatics {
}
