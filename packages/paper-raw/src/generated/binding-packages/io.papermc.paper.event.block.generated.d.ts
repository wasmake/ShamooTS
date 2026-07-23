// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_block from './io.papermc.paper.block.generated.js';
import type * as j_net_kyori_adventure_sound from './net.kyori.adventure.sound.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data_type from './org.bukkit.block.data.type.generated.js';
import type * as j_org_bukkit_boss from './org.bukkit.boss.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_block from './org.bukkit.event.block.generated.js';
import type * as j_org_bukkit_event_entity from './org.bukkit.event.entity.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM class io.papermc.paper.event.block.BeaconActivatedEvent. */
export interface BeaconActivatedEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  getBeacon(): j_org_bukkit_block.Beacon;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type BeaconActivatedEvent = BeaconActivatedEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface BeaconActivatedEventStatics {
  new(arg0: j_org_bukkit_block.Block): BeaconActivatedEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BeaconDeactivatedEvent. */
export interface BeaconDeactivatedEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  getBeacon(): j_org_bukkit_block.Beacon | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type BeaconDeactivatedEvent = BeaconDeactivatedEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface BeaconDeactivatedEventStatics {
  new(arg0: j_org_bukkit_block.Block): BeaconDeactivatedEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BellRevealRaiderEvent. */
export interface BellRevealRaiderEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Raider;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BellRevealRaiderEvent = BellRevealRaiderEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface BellRevealRaiderEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Raider): BellRevealRaiderEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BellRingEvent. */
export interface BellRingEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BellRingEvent_2];
}
export type BellRingEvent = BellRingEventMembers & j_org_bukkit_event_block.BellRingEvent_2;
export interface BellRingEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockFace, arg2: j_org_bukkit_entity.Entity | null): BellRingEvent;
}

/** JVM class io.papermc.paper.event.block.BlockBreakBlockEvent. */
export interface BlockBreakBlockEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockExpEvent];
  getDrops(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSource(): j_org_bukkit_block.Block;
}
export type BlockBreakBlockEvent = BlockBreakBlockEventMembers & j_org_bukkit_event_block.BlockExpEvent;
export interface BlockBreakBlockEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.Block, arg2: JavaList<j_org_bukkit_inventory.ItemStack>): BlockBreakBlockEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BlockBreakProgressUpdateEvent. */
export interface BlockBreakProgressUpdateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getProgress(): number;
}
export type BlockBreakProgressUpdateEvent = BlockBreakProgressUpdateEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface BlockBreakProgressUpdateEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: number, arg2: j_org_bukkit_entity.Entity): BlockBreakProgressUpdateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BlockFailedDispenseEvent. */
export interface BlockFailedDispenseEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  callEvent(): boolean;
  getHandlers(): j_org_bukkit_event.HandlerList;
  shouldPlayEffect(): boolean;
  shouldPlayEffect(arg0: boolean): void;
}
export type BlockFailedDispenseEvent = BlockFailedDispenseEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface BlockFailedDispenseEventStatics {
  new(arg0: j_org_bukkit_block.Block): BlockFailedDispenseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BlockLockCheckEvent. */
export interface BlockLockCheckEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  denyWithMessageAndSound(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_sound.Sound): void | null;
  getBlockState(): j_io_papermc_paper_block.LockableTileState;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKeyItem(): j_org_bukkit_inventory.ItemStack;
  getLockedMessage(): j_net_kyori_adventure_text.Component | null;
  getLockedSound(): j_net_kyori_adventure_sound.Sound | null;
  getPlayer(): j_org_bukkit_entity.Player;
  getResult(): j_org_bukkit_event.Event_Result;
  isUsingCustomKeyItemStack(): boolean;
  resetKeyItem(): void;
  setKeyItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  setLockedMessage(arg0: j_net_kyori_adventure_text.Component): void | null;
  setLockedSound(arg0: j_net_kyori_adventure_sound.Sound): void | null;
  setResult(arg0: j_org_bukkit_event.Event_Result): void;
}
export type BlockLockCheckEvent = BlockLockCheckEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface BlockLockCheckEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player, arg2: j_net_kyori_adventure_text.Component, arg3: j_net_kyori_adventure_sound.Sound): BlockLockCheckEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.BlockPreDispenseEvent. */
export interface BlockPreDispenseEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  getSlot(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BlockPreDispenseEvent = BlockPreDispenseEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface BlockPreDispenseEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): BlockPreDispenseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.CompostItemEvent. */
export interface CompostItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  setWillRaiseLevel(arg0: boolean): void;
  willRaiseLevel(): boolean;
}
export type CompostItemEvent = CompostItemEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface CompostItemEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: boolean): CompostItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.DragonEggFormEvent. */
export interface DragonEggFormEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockFormEvent];
  getDragonBattle(): j_org_bukkit_boss.DragonBattle;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type DragonEggFormEvent = DragonEggFormEventMembers & j_org_bukkit_event_block.BlockFormEvent;
export interface DragonEggFormEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockState, arg2: j_org_bukkit_boss.DragonBattle): DragonEggFormEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.PlayerShearBlockEvent. */
export interface PlayerShearBlockEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getDrops(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerShearBlockEvent = PlayerShearBlockEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerShearBlockEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.EquipmentSlot, arg4: JavaList<j_org_bukkit_inventory.ItemStack>): PlayerShearBlockEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.TargetHitEvent. */
export interface TargetHitEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.ProjectileHitEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSignalStrength(): number;
  setSignalStrength(arg0: number): void;
}
export type TargetHitEvent = TargetHitEventMembers & j_org_bukkit_event_entity.ProjectileHitEvent;
export interface TargetHitEventStatics {
  new(arg0: j_org_bukkit_entity.Projectile, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.BlockFace, arg3: number): TargetHitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.block.VaultChangeStateEvent. */
export interface VaultChangeStateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getCurrentState(): j_org_bukkit_block_data_type.Vault_State;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewState(): j_org_bukkit_block_data_type.Vault_State;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type VaultChangeStateEvent = VaultChangeStateEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface VaultChangeStateEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_entity.Player, arg2: j_org_bukkit_block_data_type.Vault_State, arg3: j_org_bukkit_block_data_type.Vault_State): VaultChangeStateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
