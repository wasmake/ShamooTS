// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.block.BlockPredicate. */
export interface BlockPredicateMembers {
  blocks(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_block.BlockType> | null;
}
export type BlockPredicate = BlockPredicateMembers;
export interface BlockPredicateStatics {
  predicate(): BlockPredicate_Builder;
}

/** JVM interface io.papermc.paper.block.BlockPredicate$Builder. */
export interface BlockPredicate_BuilderMembers {
  blocks(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_block.BlockType> | null): BlockPredicate_Builder;
  build(): BlockPredicate;
}
export type BlockPredicate_Builder = BlockPredicate_BuilderMembers;
export interface BlockPredicate_BuilderStatics {
}

/** JVM interface io.papermc.paper.block.LockableTileState. */
export interface LockableTileStateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Nameable, j_org_bukkit_block.Lockable, j_org_bukkit_block.TileState];
}
export type LockableTileState = LockableTileStateMembers & j_org_bukkit.Nameable & j_org_bukkit_block.Lockable & j_org_bukkit_block.TileState;
export interface LockableTileStateStatics {
}

/** JVM interface io.papermc.paper.block.MovingPiston. */
export interface MovingPistonMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block.TileState];
  getDirection(): j_org_bukkit_block.BlockFace;
  getMovingBlock(): j_org_bukkit_block_data.BlockData;
  isExtending(): boolean;
  isPistonHead(): boolean;
}
export type MovingPiston = MovingPistonMembers & j_org_bukkit_block.TileState;
export interface MovingPistonStatics {
}

/** JVM interface io.papermc.paper.block.TileStateInventoryHolder. */
export interface TileStateInventoryHolderMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block.TileState, j_org_bukkit_inventory.BlockInventoryHolder];
  getInventory(): j_org_bukkit_inventory.Inventory;
  getSnapshotInventory(): j_org_bukkit_inventory.Inventory;
}
export type TileStateInventoryHolder = TileStateInventoryHolderMembers & j_org_bukkit_block.TileState & j_org_bukkit_inventory.BlockInventoryHolder;
export interface TileStateInventoryHolderStatics {
}
