// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM class org.bukkit.event.hanging.HangingBreakByEntityEvent. */
export interface HangingBreakByEntityEventMembers {
  readonly __javaSupertypes?: readonly [HangingBreakEvent];
  getRemover(): j_org_bukkit_entity.Entity;
}
export type HangingBreakByEntityEvent = HangingBreakByEntityEventMembers & HangingBreakEvent;
export interface HangingBreakByEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Hanging, arg1: j_org_bukkit_entity.Entity): HangingBreakByEntityEvent;
  new(arg0: j_org_bukkit_entity.Hanging, arg1: j_org_bukkit_entity.Entity, arg2: HangingBreakEvent_RemoveCause): HangingBreakByEntityEvent;
}

/** JVM class org.bukkit.event.hanging.HangingBreakEvent. */
export interface HangingBreakEventMembers {
  readonly __javaSupertypes?: readonly [HangingEvent, j_org_bukkit_event.Cancellable];
  getCause(): HangingBreakEvent_RemoveCause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type HangingBreakEvent = HangingBreakEventMembers & HangingEvent & j_org_bukkit_event.Cancellable;
export interface HangingBreakEventStatics {
  new(arg0: j_org_bukkit_entity.Hanging, arg1: HangingBreakEvent_RemoveCause): HangingBreakEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.hanging.HangingBreakEvent$RemoveCause; constants are host handles, not strings. */
export type HangingBreakEvent_RemoveCause = JavaEnum<"org.bukkit.event.hanging.HangingBreakEvent$RemoveCause", "DEFAULT" | "ENTITY" | "EXPLOSION" | "OBSTRUCTION" | "PHYSICS"> & HangingBreakEvent_RemoveCauseMembers;
export interface HangingBreakEvent_RemoveCauseMembers {
}
export interface HangingBreakEvent_RemoveCauseStatics {
  readonly DEFAULT: HangingBreakEvent_RemoveCause;
  readonly ENTITY: HangingBreakEvent_RemoveCause;
  readonly EXPLOSION: HangingBreakEvent_RemoveCause;
  readonly OBSTRUCTION: HangingBreakEvent_RemoveCause;
  readonly PHYSICS: HangingBreakEvent_RemoveCause;
  valueOf(arg0: string): HangingBreakEvent_RemoveCause;
  values(): Array<HangingBreakEvent_RemoveCause>;
}

/** JVM abstract org.bukkit.event.hanging.HangingEvent. */
export interface HangingEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getEntity(): j_org_bukkit_entity.Hanging;
  hanging: j_org_bukkit_entity.Hanging;
}
export type HangingEvent = HangingEventMembers & j_org_bukkit_event.Event;
export interface HangingEventStatics {
  new(arg0: j_org_bukkit_entity.Hanging): HangingEvent;
}

/** JVM class org.bukkit.event.hanging.HangingPlaceEvent. */
export interface HangingPlaceEventMembers {
  readonly __javaSupertypes?: readonly [HangingEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getBlockFace(): j_org_bukkit_block.BlockFace;
  getHand(): j_org_bukkit_inventory.EquipmentSlot | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemStack(): j_org_bukkit_inventory.ItemStack | null;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type HangingPlaceEvent = HangingPlaceEventMembers & HangingEvent & j_org_bukkit_event.Cancellable;
export interface HangingPlaceEventStatics {
  new(arg0: j_org_bukkit_entity.Hanging, arg1: j_org_bukkit_entity.Player | null, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit_inventory.EquipmentSlot | null): HangingPlaceEvent;
  new(arg0: j_org_bukkit_entity.Hanging, arg1: j_org_bukkit_entity.Player | null, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit_inventory.EquipmentSlot | null, arg5: j_org_bukkit_inventory.ItemStack | null): HangingPlaceEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
