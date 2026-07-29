// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_world from './org.bukkit.event.world.generated.js';

/** JVM class io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent. */
export interface WorldBorderBoundsChangeEventMembers {
  readonly __javaSupertypes?: readonly [WorldBorderEvent, j_org_bukkit_event.Cancellable];
  getDuration(): bigint;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewSize(): number;
  getOldSize(): number;
  getType(): WorldBorderBoundsChangeEvent_Type;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDuration(arg0: bigint): void;
  setNewSize(arg0: number): void;
}
export type WorldBorderBoundsChangeEvent = WorldBorderBoundsChangeEventMembers & WorldBorderEvent & j_org_bukkit_event.Cancellable;
export interface WorldBorderBoundsChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit.WorldBorder, arg2: WorldBorderBoundsChangeEvent_Type, arg3: number, arg4: number, arg5: bigint): WorldBorderBoundsChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent$Type; constants are host handles, not strings. */
export type WorldBorderBoundsChangeEvent_Type = JavaEnum<"io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent$Type", "INSTANT_MOVE" | "STARTED_MOVE"> & WorldBorderBoundsChangeEvent_TypeMembers;
export interface WorldBorderBoundsChangeEvent_TypeMembers {
}
export interface WorldBorderBoundsChangeEvent_TypeStatics {
  readonly INSTANT_MOVE: WorldBorderBoundsChangeEvent_Type;
  readonly STARTED_MOVE: WorldBorderBoundsChangeEvent_Type;
  valueOf(arg0: string): WorldBorderBoundsChangeEvent_Type;
  values(): Array<WorldBorderBoundsChangeEvent_Type>;
}

/** JVM class io.papermc.paper.event.world.border.WorldBorderBoundsChangeFinishEvent. */
export interface WorldBorderBoundsChangeFinishEventMembers {
  readonly __javaSupertypes?: readonly [WorldBorderEvent];
  getDuration(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewSize(): number;
  getOldSize(): number;
}
export type WorldBorderBoundsChangeFinishEvent = WorldBorderBoundsChangeFinishEventMembers & WorldBorderEvent;
export interface WorldBorderBoundsChangeFinishEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit.WorldBorder, arg2: number, arg3: number, arg4: number): WorldBorderBoundsChangeFinishEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.world.border.WorldBorderCenterChangeEvent. */
export interface WorldBorderCenterChangeEventMembers {
  readonly __javaSupertypes?: readonly [WorldBorderEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewCenter(): j_org_bukkit.Location;
  getOldCenter(): j_org_bukkit.Location;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewCenter(arg0: j_org_bukkit.Location): void;
}
export type WorldBorderCenterChangeEvent = WorldBorderCenterChangeEventMembers & WorldBorderEvent & j_org_bukkit_event.Cancellable;
export interface WorldBorderCenterChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit.WorldBorder, arg2: j_org_bukkit.Location, arg3: j_org_bukkit.Location): WorldBorderCenterChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract io.papermc.paper.event.world.border.WorldBorderEvent. */
export interface WorldBorderEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.WorldEvent];
  getWorldBorder(): j_org_bukkit.WorldBorder;
}
export type WorldBorderEvent = WorldBorderEventMembers & j_org_bukkit_event_world.WorldEvent;
export interface WorldBorderEventStatics {
}
