// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_block from './org.bukkit.event.block.generated.js';
import type * as j_org_bukkit_event_inventory from './org.bukkit.event.inventory.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM class com.destroystokyo.paper.event.block.AnvilDamagedEvent. */
export interface AnvilDamagedEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_inventory.InventoryEvent, j_org_bukkit_event.Cancellable];
  getDamageState(): AnvilDamagedEvent_DamageState;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventory(): j_org_bukkit_inventory.AnvilInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  isBreaking(): boolean;
  isCancelled(): boolean;
  setBreaking(arg0: boolean): void;
  setCancelled(arg0: boolean): void;
  setDamageState(arg0: AnvilDamagedEvent_DamageState): void;
}
export type AnvilDamagedEvent = AnvilDamagedEventMembers & j_org_bukkit_event_inventory.InventoryEvent & j_org_bukkit_event.Cancellable;
export interface AnvilDamagedEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_block_data.BlockData): AnvilDamagedEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum com.destroystokyo.paper.event.block.AnvilDamagedEvent$DamageState; constants are host handles, not strings. */
export type AnvilDamagedEvent_DamageState = JavaEnum<"com.destroystokyo.paper.event.block.AnvilDamagedEvent$DamageState", "BROKEN" | "CHIPPED" | "DAMAGED" | "FULL"> & AnvilDamagedEvent_DamageStateMembers;
export interface AnvilDamagedEvent_DamageStateMembers {
  getMaterial(): j_org_bukkit.Material;
}
export interface AnvilDamagedEvent_DamageStateStatics {
  readonly BROKEN: AnvilDamagedEvent_DamageState;
  readonly CHIPPED: AnvilDamagedEvent_DamageState;
  readonly DAMAGED: AnvilDamagedEvent_DamageState;
  readonly FULL: AnvilDamagedEvent_DamageState;
  getState(arg0: j_org_bukkit.Material): AnvilDamagedEvent_DamageState | null;
  getState(arg0: j_org_bukkit_block_data.BlockData): AnvilDamagedEvent_DamageState | null;
  valueOf(arg0: string): AnvilDamagedEvent_DamageState;
  values(): Array<AnvilDamagedEvent_DamageState>;
}

/** JVM class com.destroystokyo.paper.event.block.BeaconEffectEvent. */
export interface BeaconEffectEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getEffect(): j_org_bukkit_potion.PotionEffect;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  isPrimary(): boolean;
  setCancelled(arg0: boolean): void;
  setEffect(arg0: j_org_bukkit_potion.PotionEffect): void;
}
export type BeaconEffectEvent = BeaconEffectEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface BeaconEffectEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_potion.PotionEffect, arg2: j_org_bukkit_entity.Player, arg3: boolean): BeaconEffectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.block.BlockDestroyEvent. */
export interface BlockDestroyEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockExpEvent, j_org_bukkit_event.Cancellable];
  getEffectBlock(): j_org_bukkit_block_data.BlockData;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewState(): j_org_bukkit_block_data.BlockData;
  isCancelled(): boolean;
  playEffect(): boolean;
  setCancelled(arg0: boolean): void;
  setEffectBlock(arg0: j_org_bukkit_block_data.BlockData): void;
  setPlayEffect(arg0: boolean): void;
  setWillDrop(arg0: boolean): void;
  willDrop(): boolean;
}
export type BlockDestroyEvent = BlockDestroyEventMembers & j_org_bukkit_event_block.BlockExpEvent & j_org_bukkit_event.Cancellable;
export interface BlockDestroyEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block_data.BlockData, arg2: j_org_bukkit_block_data.BlockData, arg3: number, arg4: boolean): BlockDestroyEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.block.TNTPrimeEvent. */
export interface TNTPrimeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPrimerEntity(): j_org_bukkit_entity.Entity | null;
  getReason(): TNTPrimeEvent_PrimeReason;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type TNTPrimeEvent = TNTPrimeEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface TNTPrimeEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: TNTPrimeEvent_PrimeReason, arg2: j_org_bukkit_entity.Entity | null): TNTPrimeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum com.destroystokyo.paper.event.block.TNTPrimeEvent$PrimeReason; constants are host handles, not strings. */
export type TNTPrimeEvent_PrimeReason = JavaEnum<"com.destroystokyo.paper.event.block.TNTPrimeEvent$PrimeReason", "EXPLOSION" | "FIRE" | "ITEM" | "PROJECTILE" | "REDSTONE"> & TNTPrimeEvent_PrimeReasonMembers;
export interface TNTPrimeEvent_PrimeReasonMembers {
}
export interface TNTPrimeEvent_PrimeReasonStatics {
  readonly EXPLOSION: TNTPrimeEvent_PrimeReason;
  readonly FIRE: TNTPrimeEvent_PrimeReason;
  readonly ITEM: TNTPrimeEvent_PrimeReason;
  readonly PROJECTILE: TNTPrimeEvent_PrimeReason;
  readonly REDSTONE: TNTPrimeEvent_PrimeReason;
  valueOf(arg0: string): TNTPrimeEvent_PrimeReason;
  values(): Array<TNTPrimeEvent_PrimeReason>;
}
