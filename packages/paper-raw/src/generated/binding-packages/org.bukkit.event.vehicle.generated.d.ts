// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class org.bukkit.event.vehicle.VehicleBlockCollisionEvent. */
export interface VehicleBlockCollisionEventMembers {
  readonly __javaSupertypes?: readonly [VehicleCollisionEvent];
  getBlock(): j_org_bukkit_block.Block;
  getVelocity(): j_org_bukkit_util.Vector;
}
export type VehicleBlockCollisionEvent = VehicleBlockCollisionEventMembers & VehicleCollisionEvent;
export interface VehicleBlockCollisionEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_block.Block): VehicleBlockCollisionEvent;
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_util.Vector): VehicleBlockCollisionEvent;
}

/** JVM abstract org.bukkit.event.vehicle.VehicleCollisionEvent. */
export interface VehicleCollisionEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type VehicleCollisionEvent = VehicleCollisionEventMembers & VehicleEvent;
export interface VehicleCollisionEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle): VehicleCollisionEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleCreateEvent. */
export interface VehicleCreateEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type VehicleCreateEvent = VehicleCreateEventMembers & VehicleEvent & j_org_bukkit_event.Cancellable;
export interface VehicleCreateEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle): VehicleCreateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleDamageEvent. */
export interface VehicleDamageEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent, j_org_bukkit_event.Cancellable];
  getAttacker(): j_org_bukkit_entity.Entity | null;
  getDamage(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDamage(arg0: number): void;
}
export type VehicleDamageEvent = VehicleDamageEventMembers & VehicleEvent & j_org_bukkit_event.Cancellable;
export interface VehicleDamageEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_entity.Entity | null, arg2: number): VehicleDamageEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleDestroyEvent. */
export interface VehicleDestroyEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent, j_org_bukkit_event.Cancellable];
  getAttacker(): j_org_bukkit_entity.Entity | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type VehicleDestroyEvent = VehicleDestroyEventMembers & VehicleEvent & j_org_bukkit_event.Cancellable;
export interface VehicleDestroyEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_entity.Entity | null): VehicleDestroyEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleEnterEvent. */
export interface VehicleEnterEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent, j_org_bukkit_event.Cancellable];
  getEntered(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type VehicleEnterEvent = VehicleEnterEventMembers & VehicleEvent & j_org_bukkit_event.Cancellable;
export interface VehicleEnterEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_entity.Entity): VehicleEnterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleEntityCollisionEvent. */
export interface VehicleEntityCollisionEventMembers {
  readonly __javaSupertypes?: readonly [VehicleCollisionEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  isCollisionCancelled(): boolean;
  isPickupCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setCollisionCancelled(arg0: boolean): void;
  setPickupCancelled(arg0: boolean): void;
}
export type VehicleEntityCollisionEvent = VehicleEntityCollisionEventMembers & VehicleCollisionEvent & j_org_bukkit_event.Cancellable;
export interface VehicleEntityCollisionEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_entity.Entity): VehicleEntityCollisionEvent;
}

/** JVM abstract org.bukkit.event.vehicle.VehicleEvent. */
export interface VehicleEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getVehicle(): j_org_bukkit_entity.Vehicle;
  vehicle: j_org_bukkit_entity.Vehicle;
}
export type VehicleEvent = VehicleEventMembers & j_org_bukkit_event.Event;
export interface VehicleEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle): VehicleEvent;
}

/** JVM class org.bukkit.event.vehicle.VehicleExitEvent. */
export interface VehicleExitEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent, j_org_bukkit_event.Cancellable];
  getExited(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancellable(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type VehicleExitEvent = VehicleExitEventMembers & VehicleEvent & j_org_bukkit_event.Cancellable;
export interface VehicleExitEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_entity.LivingEntity): VehicleExitEvent;
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit_entity.LivingEntity, arg2: boolean): VehicleExitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleMoveEvent. */
export interface VehicleMoveEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent];
  getFrom(): j_org_bukkit.Location;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTo(): j_org_bukkit.Location;
}
export type VehicleMoveEvent = VehicleMoveEventMembers & VehicleEvent;
export interface VehicleMoveEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location): VehicleMoveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.vehicle.VehicleUpdateEvent. */
export interface VehicleUpdateEventMembers {
  readonly __javaSupertypes?: readonly [VehicleEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type VehicleUpdateEvent = VehicleUpdateEventMembers & VehicleEvent;
export interface VehicleUpdateEventStatics {
  new(arg0: j_org_bukkit_entity.Vehicle): VehicleUpdateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
