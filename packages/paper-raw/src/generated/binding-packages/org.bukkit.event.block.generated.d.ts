// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_block_sign from './org.bukkit.block.sign.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** Live JVM enum org.bukkit.event.block.Action; constants are host handles, not strings. */
export type Action = JavaEnum<"org.bukkit.event.block.Action", "LEFT_CLICK_AIR" | "LEFT_CLICK_BLOCK" | "PHYSICAL" | "RIGHT_CLICK_AIR" | "RIGHT_CLICK_BLOCK"> & ActionMembers;
export interface ActionMembers {
  isLeftClick(): boolean;
  isRightClick(): boolean;
}
export interface ActionStatics {
  readonly LEFT_CLICK_AIR: Action;
  readonly LEFT_CLICK_BLOCK: Action;
  readonly PHYSICAL: Action;
  readonly RIGHT_CLICK_AIR: Action;
  readonly RIGHT_CLICK_BLOCK: Action;
  valueOf(arg0: string): Action;
  values(): Array<Action>;
}

/** JVM class org.bukkit.event.block.BellResonateEvent. */
export interface BellResonateEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getResonatedEntities(): JavaList<j_org_bukkit_entity.LivingEntity>;
}
export type BellResonateEvent = BellResonateEventMembers & BlockEvent;
export interface BellResonateEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: JavaList<j_org_bukkit_entity.LivingEntity>): BellResonateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BellRingEvent. */
export interface BellRingEvent_2Members {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getDirection(): j_org_bukkit_block.BlockFace;
  getEntity(): j_org_bukkit_entity.Entity | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BellRingEvent_2 = BellRingEvent_2Members & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BellRingEvent_2Statics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockFace, arg2: j_org_bukkit_entity.Entity | null): BellRingEvent_2;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockBreakEvent. */
export interface BlockBreakEventMembers {
  readonly __javaSupertypes?: readonly [BlockExpEvent, j_org_bukkit_event.Cancellable];
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  isDropItems(): boolean;
  setCancelled(arg0: boolean): void;
  setDropItems(arg0: boolean): void;
}
export type BlockBreakEvent = BlockBreakEventMembers & BlockExpEvent & j_org_bukkit_event.Cancellable;
export interface BlockBreakEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player): BlockBreakEvent;
}

/** JVM class org.bukkit.event.block.BlockBurnEvent. */
export interface BlockBurnEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getIgnitingBlock(): j_org_bukkit_block.Block | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockBurnEvent = BlockBurnEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockBurnEventStatics {
  new(arg0: j_org_bukkit_block.Block): BlockBurnEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.Block | null): BlockBurnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockCanBuildEvent. */
export interface BlockCanBuildEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent];
  blockData: j_org_bukkit_block_data.BlockData;
  buildable: boolean;
  getBlockData(): j_org_bukkit_block_data.BlockData;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMaterial(): j_org_bukkit.Material;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isBuildable(): boolean;
  setBuildable(arg0: boolean): void;
}
export type BlockCanBuildEvent = BlockCanBuildEventMembers & BlockEvent;
export interface BlockCanBuildEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block_data.BlockData, arg2: boolean): BlockCanBuildEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player | null, arg2: j_org_bukkit_block_data.BlockData, arg3: boolean): BlockCanBuildEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player | null, arg2: j_org_bukkit_block_data.BlockData, arg3: boolean, arg4: j_org_bukkit_inventory.EquipmentSlot): BlockCanBuildEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockCookEvent. */
export interface BlockCookEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipe(): j_org_bukkit_inventory.CookingRecipe<object> | null;
  getResult(): j_org_bukkit_inventory.ItemStack;
  getSource(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setResult(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type BlockCookEvent = BlockCookEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockCookEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack): BlockCookEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.CookingRecipe<object> | null): BlockCookEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockDamageAbortEvent. */
export interface BlockDamageAbortEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemInHand(): j_org_bukkit_inventory.ItemStack;
  getPlayer(): j_org_bukkit_entity.Player;
}
export type BlockDamageAbortEvent = BlockDamageAbortEventMembers & BlockEvent;
export interface BlockDamageAbortEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack): BlockDamageAbortEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockDamageEvent. */
export interface BlockDamageEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getBlockFace(): j_org_bukkit_block.BlockFace;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInstaBreak(): boolean;
  getItemInHand(): j_org_bukkit_inventory.ItemStack;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setInstaBreak(arg0: boolean): void;
}
export type BlockDamageEvent = BlockDamageEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockDamageEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.BlockFace, arg3: j_org_bukkit_inventory.ItemStack, arg4: boolean): BlockDamageEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack, arg3: boolean): BlockDamageEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockDispenseArmorEvent. */
export interface BlockDispenseArmorEventMembers {
  readonly __javaSupertypes?: readonly [BlockDispenseEvent];
  getTargetEntity(): j_org_bukkit_entity.LivingEntity;
}
export type BlockDispenseArmorEvent = BlockDispenseArmorEventMembers & BlockDispenseEvent;
export interface BlockDispenseArmorEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_entity.LivingEntity): BlockDispenseArmorEvent;
}

/** JVM class org.bukkit.event.block.BlockDispenseEvent. */
export interface BlockDispenseEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getVelocity(): j_org_bukkit_util.Vector;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  setVelocity(arg0: j_org_bukkit_util.Vector): void;
}
export type BlockDispenseEvent = BlockDispenseEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockDispenseEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_util.Vector): BlockDispenseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockDispenseLootEvent. */
export interface BlockDispenseLootEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getDispensedLoot(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLootTable(): j_org_bukkit_loot.LootTable;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDispensedLoot(arg0: JavaList<j_org_bukkit_inventory.ItemStack> | null): void | null;
}
export type BlockDispenseLootEvent = BlockDispenseLootEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockDispenseLootEventStatics {
  new(arg0: j_org_bukkit_entity.Player | null, arg1: j_org_bukkit_block.Block, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: j_org_bukkit_loot.LootTable): BlockDispenseLootEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockDropItemEvent. */
export interface BlockDropItemEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getBlockState(): j_org_bukkit_block.BlockState;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItems(): JavaList<j_org_bukkit_entity.Item>;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockDropItemEvent = BlockDropItemEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockDropItemEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState, arg2: j_org_bukkit_entity.Player, arg3: JavaList<j_org_bukkit_entity.Item>): BlockDropItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.block.BlockEvent. */
export interface BlockEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  block: j_org_bukkit_block.Block;
  getBlock(): j_org_bukkit_block.Block;
}
export type BlockEvent = BlockEventMembers & j_org_bukkit_event.Event;
export interface BlockEventStatics {
  new(arg0: j_org_bukkit_block.Block): BlockEvent;
}

/** JVM class org.bukkit.event.block.BlockExpEvent. */
export interface BlockExpEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent];
  getExpToDrop(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  setExpToDrop(arg0: number): void;
}
export type BlockExpEvent = BlockExpEventMembers & BlockEvent;
export interface BlockExpEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: number): BlockExpEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockExplodeEvent. */
export interface BlockExplodeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  blockList(): JavaList<j_org_bukkit_block.Block>;
  getExplodedBlockState(): j_org_bukkit_block.BlockState;
  getExplosionResult(): j_org_bukkit.ExplosionResult;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getYield(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setYield(arg0: number): void;
}
export type BlockExplodeEvent = BlockExplodeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockExplodeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState, arg2: JavaList<j_org_bukkit_block.Block>, arg3: number, arg4: j_org_bukkit.ExplosionResult): BlockExplodeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockFadeEvent. */
export interface BlockFadeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewState(): j_org_bukkit_block.BlockState;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockFadeEvent = BlockFadeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockFadeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState): BlockFadeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockFertilizeEvent. */
export interface BlockFertilizeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getBlocks(): JavaList<j_org_bukkit_block.BlockState>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockFertilizeEvent = BlockFertilizeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockFertilizeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player | null, arg2: JavaList<j_org_bukkit_block.BlockState>): BlockFertilizeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockFormEvent. */
export interface BlockFormEventMembers {
  readonly __javaSupertypes?: readonly [BlockGrowEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type BlockFormEvent = BlockFormEventMembers & BlockGrowEvent;
export interface BlockFormEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState): BlockFormEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockFromToEvent. */
export interface BlockFromToEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  cancelled: boolean;
  face: j_org_bukkit_block.BlockFace;
  getFace(): j_org_bukkit_block.BlockFace;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getToBlock(): j_org_bukkit_block.Block;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  to: j_org_bukkit_block.Block;
}
export type BlockFromToEvent = BlockFromToEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockFromToEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.Block): BlockFromToEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockFace): BlockFromToEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockGrowEvent. */
export interface BlockGrowEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewState(): j_org_bukkit_block.BlockState;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockGrowEvent = BlockGrowEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockGrowEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState): BlockGrowEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockIgniteEvent. */
export interface BlockIgniteEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getCause(): BlockIgniteEvent_IgniteCause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getIgnitingBlock(): j_org_bukkit_block.Block | null;
  getIgnitingEntity(): j_org_bukkit_entity.Entity | null;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockIgniteEvent = BlockIgniteEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockIgniteEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: BlockIgniteEvent_IgniteCause, arg2: j_org_bukkit_block.Block): BlockIgniteEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: BlockIgniteEvent_IgniteCause, arg2: j_org_bukkit_entity.Entity | null): BlockIgniteEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: BlockIgniteEvent_IgniteCause, arg2: j_org_bukkit_entity.Entity | null, arg3: j_org_bukkit_block.Block | null): BlockIgniteEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.block.BlockIgniteEvent$IgniteCause; constants are host handles, not strings. */
export type BlockIgniteEvent_IgniteCause = JavaEnum<"org.bukkit.event.block.BlockIgniteEvent$IgniteCause", "ARROW" | "ENDER_CRYSTAL" | "EXPLOSION" | "FIREBALL" | "FLINT_AND_STEEL" | "LAVA" | "LIGHTNING" | "SPREAD"> & BlockIgniteEvent_IgniteCauseMembers;
export interface BlockIgniteEvent_IgniteCauseMembers {
}
export interface BlockIgniteEvent_IgniteCauseStatics {
  readonly ARROW: BlockIgniteEvent_IgniteCause;
  readonly ENDER_CRYSTAL: BlockIgniteEvent_IgniteCause;
  readonly EXPLOSION: BlockIgniteEvent_IgniteCause;
  readonly FIREBALL: BlockIgniteEvent_IgniteCause;
  readonly FLINT_AND_STEEL: BlockIgniteEvent_IgniteCause;
  readonly LAVA: BlockIgniteEvent_IgniteCause;
  readonly LIGHTNING: BlockIgniteEvent_IgniteCause;
  readonly SPREAD: BlockIgniteEvent_IgniteCause;
  valueOf(arg0: string): BlockIgniteEvent_IgniteCause;
  values(): Array<BlockIgniteEvent_IgniteCause>;
}

/** JVM class org.bukkit.event.block.BlockMultiPlaceEvent. */
export interface BlockMultiPlaceEventMembers {
  readonly __javaSupertypes?: readonly [BlockPlaceEvent];
  getReplacedBlockStates(): JavaList<j_org_bukkit_block.BlockState>;
}
export type BlockMultiPlaceEvent = BlockMultiPlaceEventMembers & BlockPlaceEvent;
export interface BlockMultiPlaceEventStatics {
  new(arg0: JavaList<j_org_bukkit_block.BlockState>, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_entity.Player, arg4: boolean): BlockMultiPlaceEvent;
  new(arg0: JavaList<j_org_bukkit_block.BlockState>, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_entity.Player, arg4: boolean, arg5: j_org_bukkit_inventory.EquipmentSlot): BlockMultiPlaceEvent;
}

/** JVM class org.bukkit.event.block.BlockPhysicsEvent. */
export interface BlockPhysicsEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getChangedBlockData(): j_org_bukkit_block_data.BlockData;
  getChangedType(): j_org_bukkit.Material;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSourceBlock(): j_org_bukkit_block.Block;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockPhysicsEvent = BlockPhysicsEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockPhysicsEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block_data.BlockData): BlockPhysicsEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block_data.BlockData, arg2: number, arg3: number, arg4: number): BlockPhysicsEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block_data.BlockData, arg2: j_org_bukkit_block.Block): BlockPhysicsEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.block.BlockPistonEvent. */
export interface BlockPistonEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getDirection(): j_org_bukkit_block.BlockFace;
  isCancelled(): boolean;
  isSticky(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockPistonEvent = BlockPistonEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockPistonEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockFace): BlockPistonEvent;
}

/** JVM class org.bukkit.event.block.BlockPistonExtendEvent. */
export interface BlockPistonExtendEventMembers {
  readonly __javaSupertypes?: readonly [BlockPistonEvent];
  getBlocks(): JavaList<j_org_bukkit_block.Block>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLength(): number;
}
export type BlockPistonExtendEvent = BlockPistonExtendEventMembers & BlockPistonEvent;
export interface BlockPistonExtendEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: number, arg2: j_org_bukkit_block.BlockFace): BlockPistonExtendEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: JavaList<j_org_bukkit_block.Block>, arg2: j_org_bukkit_block.BlockFace): BlockPistonExtendEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockPistonRetractEvent. */
export interface BlockPistonRetractEventMembers {
  readonly __javaSupertypes?: readonly [BlockPistonEvent];
  getBlocks(): JavaList<j_org_bukkit_block.Block>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRetractLocation(): j_org_bukkit.Location;
}
export type BlockPistonRetractEvent = BlockPistonRetractEventMembers & BlockPistonEvent;
export interface BlockPistonRetractEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: JavaList<j_org_bukkit_block.Block>, arg2: j_org_bukkit_block.BlockFace): BlockPistonRetractEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockPlaceEvent. */
export interface BlockPlaceEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  canBuild: (boolean) & { (): boolean };
  cancelled: boolean;
  getBlockAgainst(): j_org_bukkit_block.Block;
  getBlockPlaced(): j_org_bukkit_block.Block;
  getBlockReplacedState(): j_org_bukkit_block.BlockState;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemInHand(): j_org_bukkit_inventory.ItemStack;
  getPlayer(): j_org_bukkit_entity.Player;
  hand: j_org_bukkit_inventory.EquipmentSlot;
  isCancelled(): boolean;
  itemInHand: j_org_bukkit_inventory.ItemStack;
  placedAgainst: j_org_bukkit_block.Block;
  player: j_org_bukkit_entity.Player;
  replacedBlockState: j_org_bukkit_block.BlockState;
  setBuild(arg0: boolean): void;
  setCancelled(arg0: boolean): void;
}
export type BlockPlaceEvent = BlockPlaceEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockPlaceEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_inventory.ItemStack, arg4: j_org_bukkit_entity.Player, arg5: boolean): BlockPlaceEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_inventory.ItemStack, arg4: j_org_bukkit_entity.Player, arg5: boolean, arg6: j_org_bukkit_inventory.EquipmentSlot): BlockPlaceEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockReceiveGameEvent. */
export interface BlockReceiveGameEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity | null;
  getEvent(): j_org_bukkit.GameEvent;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockReceiveGameEvent = BlockReceiveGameEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockReceiveGameEventStatics {
  new(arg0: j_org_bukkit.GameEvent, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_entity.Entity | null): BlockReceiveGameEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockRedstoneEvent. */
export interface BlockRedstoneEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewCurrent(): number;
  getOldCurrent(): number;
  setNewCurrent(arg0: number): void;
}
export type BlockRedstoneEvent = BlockRedstoneEventMembers & BlockEvent;
export interface BlockRedstoneEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: number, arg2: number): BlockRedstoneEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockShearEntityEvent. */
export interface BlockShearEntityEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getDrops(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTool(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDrops(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): void;
}
export type BlockShearEntityEvent = BlockShearEntityEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockShearEntityEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_inventory.ItemStack, arg3: JavaList<j_org_bukkit_inventory.ItemStack>): BlockShearEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BlockSpreadEvent. */
export interface BlockSpreadEventMembers {
  readonly __javaSupertypes?: readonly [BlockFormEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSource(): j_org_bukkit_block.Block;
}
export type BlockSpreadEvent = BlockSpreadEventMembers & BlockFormEvent;
export interface BlockSpreadEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.BlockState): BlockSpreadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.BrewingStartEvent. */
export interface BrewingStartEventMembers {
  readonly __javaSupertypes?: readonly [InventoryBlockStartEvent];
  getBrewingTime(): number;
  getRecipeBrewTime(): number;
  getTotalBrewTime(): number;
  setBrewingTime(arg0: number): void;
  setRecipeBrewTime(arg0: number): void;
  setTotalBrewTime(arg0: number): void;
}
export type BrewingStartEvent = BrewingStartEventMembers & InventoryBlockStartEvent;
export interface BrewingStartEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): BrewingStartEvent;
}

/** JVM class org.bukkit.event.block.CampfireStartEvent. */
export interface CampfireStartEventMembers {
  readonly __javaSupertypes?: readonly [InventoryBlockStartEvent];
  getRecipe(): j_org_bukkit_inventory.CampfireRecipe;
  getTotalCookTime(): number;
  setTotalCookTime(arg0: number): void;
}
export type CampfireStartEvent = CampfireStartEventMembers & InventoryBlockStartEvent;
export interface CampfireStartEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.CampfireRecipe): CampfireStartEvent;
}

/** JVM class org.bukkit.event.block.CauldronLevelChangeEvent. */
export interface CauldronLevelChangeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewLevel(): number;
  getNewState(): j_org_bukkit_block.BlockState;
  getOldLevel(): number;
  getReason(): CauldronLevelChangeEvent_ChangeReason;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewLevel(arg0: number): void;
}
export type CauldronLevelChangeEvent = CauldronLevelChangeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface CauldronLevelChangeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Entity | null, arg2: CauldronLevelChangeEvent_ChangeReason, arg3: j_org_bukkit_block.BlockState): CauldronLevelChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason; constants are host handles, not strings. */
export type CauldronLevelChangeEvent_ChangeReason = JavaEnum<"org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason", "ARMOR_WASH" | "BANNER_WASH" | "BOTTLE_EMPTY" | "BOTTLE_FILL" | "BUCKET_EMPTY" | "BUCKET_FILL" | "EVAPORATE" | "EXTINGUISH" | "NATURAL_FILL" | "SHULKER_WASH" | "UNKNOWN"> & CauldronLevelChangeEvent_ChangeReasonMembers;
export interface CauldronLevelChangeEvent_ChangeReasonMembers {
}
export interface CauldronLevelChangeEvent_ChangeReasonStatics {
  readonly ARMOR_WASH: CauldronLevelChangeEvent_ChangeReason;
  readonly BANNER_WASH: CauldronLevelChangeEvent_ChangeReason;
  readonly BOTTLE_EMPTY: CauldronLevelChangeEvent_ChangeReason;
  readonly BOTTLE_FILL: CauldronLevelChangeEvent_ChangeReason;
  readonly BUCKET_EMPTY: CauldronLevelChangeEvent_ChangeReason;
  readonly BUCKET_FILL: CauldronLevelChangeEvent_ChangeReason;
  readonly EVAPORATE: CauldronLevelChangeEvent_ChangeReason;
  readonly EXTINGUISH: CauldronLevelChangeEvent_ChangeReason;
  readonly NATURAL_FILL: CauldronLevelChangeEvent_ChangeReason;
  readonly SHULKER_WASH: CauldronLevelChangeEvent_ChangeReason;
  readonly UNKNOWN: CauldronLevelChangeEvent_ChangeReason;
  valueOf(arg0: string): CauldronLevelChangeEvent_ChangeReason;
  values(): Array<CauldronLevelChangeEvent_ChangeReason>;
}

/** JVM class org.bukkit.event.block.CrafterCraftEvent. */
export interface CrafterCraftEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipe(): j_org_bukkit_inventory.CraftingRecipe;
  getResult(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setResult(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type CrafterCraftEvent = CrafterCraftEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface CrafterCraftEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.CraftingRecipe, arg2: j_org_bukkit_inventory.ItemStack): CrafterCraftEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.EntityBlockFormEvent. */
export interface EntityBlockFormEventMembers {
  readonly __javaSupertypes?: readonly [BlockFormEvent];
  getEntity(): j_org_bukkit_entity.Entity;
}
export type EntityBlockFormEvent = EntityBlockFormEventMembers & BlockFormEvent;
export interface EntityBlockFormEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.BlockState): EntityBlockFormEvent;
}

/** JVM class org.bukkit.event.block.FluidLevelChangeEvent. */
export interface FluidLevelChangeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewData(): j_org_bukkit_block_data.BlockData;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewData(arg0: j_org_bukkit_block_data.BlockData): void;
}
export type FluidLevelChangeEvent = FluidLevelChangeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface FluidLevelChangeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block_data.BlockData): FluidLevelChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.InventoryBlockStartEvent. */
export interface InventoryBlockStartEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSource(): j_org_bukkit_inventory.ItemStack;
  source: j_org_bukkit_inventory.ItemStack;
}
export type InventoryBlockStartEvent = InventoryBlockStartEventMembers & BlockEvent;
export interface InventoryBlockStartEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack): InventoryBlockStartEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.LeavesDecayEvent. */
export interface LeavesDecayEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type LeavesDecayEvent = LeavesDecayEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface LeavesDecayEventStatics {
  new(arg0: j_org_bukkit_block.Block): LeavesDecayEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.MoistureChangeEvent. */
export interface MoistureChangeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewState(): j_org_bukkit_block.BlockState;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type MoistureChangeEvent = MoistureChangeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface MoistureChangeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState): MoistureChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.NotePlayEvent. */
export interface NotePlayEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInstrument(): j_org_bukkit.Instrument;
  getNote(): j_org_bukkit.Note;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setInstrument(arg0: j_org_bukkit.Instrument): void;
  setNote(arg0: j_org_bukkit.Note): void;
}
export type NotePlayEvent = NotePlayEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface NotePlayEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit.Instrument, arg2: j_org_bukkit.Note): NotePlayEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.SculkBloomEvent. */
export interface SculkBloomEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getCharge(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setCharge(arg0: number): void;
}
export type SculkBloomEvent = SculkBloomEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface SculkBloomEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: number): SculkBloomEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.SignChangeEvent. */
export interface SignChangeEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  /** @throws java.lang.IndexOutOfBoundsException */
  getLine(arg0: number): string | null;
  getLines(): Array<string>;
  getPlayer(): j_org_bukkit_entity.Player;
  getSide(): j_org_bukkit_block_sign.Side;
  isCancelled(): boolean;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number): j_net_kyori_adventure_text.Component | null;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number, arg1: j_net_kyori_adventure_text.Component): void | null;
  lines(): JavaList<j_net_kyori_adventure_text.Component>;
  setCancelled(arg0: boolean): void;
  /** @throws java.lang.IndexOutOfBoundsException */
  setLine(arg0: number, arg1: string | null): void | null;
}
export type SignChangeEvent = SignChangeEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface SignChangeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player, arg2: JavaList<j_net_kyori_adventure_text.Component>): SignChangeEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player, arg2: JavaList<j_net_kyori_adventure_text.Component>, arg3: j_org_bukkit_block_sign.Side): SignChangeEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player, arg2: Array<string>): SignChangeEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player, arg2: Array<string>, arg3: j_org_bukkit_block_sign.Side): SignChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.SpongeAbsorbEvent. */
export interface SpongeAbsorbEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getBlocks(): JavaList<j_org_bukkit_block.BlockState>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type SpongeAbsorbEvent = SpongeAbsorbEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface SpongeAbsorbEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: JavaList<j_org_bukkit_block.BlockState>): SpongeAbsorbEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.block.TNTPrimeEvent. */
export interface TNTPrimeEvent_2Members {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getCause(): TNTPrimeEvent_PrimeCause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPrimingBlock(): j_org_bukkit_block.Block | null;
  getPrimingEntity(): j_org_bukkit_entity.Entity | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type TNTPrimeEvent_2 = TNTPrimeEvent_2Members & BlockEvent & j_org_bukkit_event.Cancellable;
export interface TNTPrimeEvent_2Statics {
  new(arg0: j_org_bukkit_block.Block, arg1: TNTPrimeEvent_PrimeCause, arg2: j_org_bukkit_entity.Entity | null, arg3: j_org_bukkit_block.Block | null): TNTPrimeEvent_2;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.block.TNTPrimeEvent$PrimeCause; constants are host handles, not strings. */
export type TNTPrimeEvent_PrimeCause = JavaEnum<"org.bukkit.event.block.TNTPrimeEvent$PrimeCause", "BLOCK_BREAK" | "DISPENSER" | "EXPLOSION" | "FIRE" | "PLAYER" | "PROJECTILE" | "REDSTONE"> & TNTPrimeEvent_PrimeCauseMembers;
export interface TNTPrimeEvent_PrimeCauseMembers {
}
export interface TNTPrimeEvent_PrimeCauseStatics {
  readonly BLOCK_BREAK: TNTPrimeEvent_PrimeCause;
  readonly DISPENSER: TNTPrimeEvent_PrimeCause;
  readonly EXPLOSION: TNTPrimeEvent_PrimeCause;
  readonly FIRE: TNTPrimeEvent_PrimeCause;
  readonly PLAYER: TNTPrimeEvent_PrimeCause;
  readonly PROJECTILE: TNTPrimeEvent_PrimeCause;
  readonly REDSTONE: TNTPrimeEvent_PrimeCause;
  valueOf(arg0: string): TNTPrimeEvent_PrimeCause;
  values(): Array<TNTPrimeEvent_PrimeCause>;
}

/** JVM class org.bukkit.event.block.VaultDisplayItemEvent. */
export interface VaultDisplayItemEventMembers {
  readonly __javaSupertypes?: readonly [BlockEvent, j_org_bukkit_event.Cancellable];
  getDisplayItem(): j_org_bukkit_inventory.ItemStack | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDisplayItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type VaultDisplayItemEvent = VaultDisplayItemEventMembers & BlockEvent & j_org_bukkit_event.Cancellable;
export interface VaultDisplayItemEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack | null): VaultDisplayItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
