// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_world from './org.bukkit.event.world.generated.js';

/** JVM abstract org.bukkit.event.raid.RaidEvent. */
export interface RaidEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.WorldEvent];
  getRaid(): j_org_bukkit.Raid;
}
export type RaidEvent = RaidEventMembers & j_org_bukkit_event_world.WorldEvent;
export interface RaidEventStatics {
}

/** JVM class org.bukkit.event.raid.RaidFinishEvent. */
export interface RaidFinishEventMembers {
  readonly __javaSupertypes?: readonly [RaidEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getWinners(): JavaList<j_org_bukkit_entity.Player>;
}
export type RaidFinishEvent = RaidFinishEventMembers & RaidEvent;
export interface RaidFinishEventStatics {
  new(arg0: j_org_bukkit.Raid, arg1: j_org_bukkit.World, arg2: JavaList<j_org_bukkit_entity.Player>): RaidFinishEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.raid.RaidSpawnWaveEvent. */
export interface RaidSpawnWaveEventMembers {
  readonly __javaSupertypes?: readonly [RaidEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPatrolLeader(): j_org_bukkit_entity.Raider;
  getRaiders(): JavaList<j_org_bukkit_entity.Raider>;
}
export type RaidSpawnWaveEvent = RaidSpawnWaveEventMembers & RaidEvent;
export interface RaidSpawnWaveEventStatics {
  new(arg0: j_org_bukkit.Raid, arg1: j_org_bukkit.World, arg2: j_org_bukkit_entity.Raider, arg3: JavaList<j_org_bukkit_entity.Raider>): RaidSpawnWaveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.raid.RaidStopEvent. */
export interface RaidStopEventMembers {
  readonly __javaSupertypes?: readonly [RaidEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReason(): RaidStopEvent_Reason;
}
export type RaidStopEvent = RaidStopEventMembers & RaidEvent;
export interface RaidStopEventStatics {
  new(arg0: j_org_bukkit.Raid, arg1: j_org_bukkit.World, arg2: RaidStopEvent_Reason): RaidStopEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.raid.RaidStopEvent$Reason; constants are host handles, not strings. */
export type RaidStopEvent_Reason = JavaEnum<"org.bukkit.event.raid.RaidStopEvent$Reason", "FINISHED" | "NOT_IN_VILLAGE" | "PEACE" | "TIMEOUT" | "UNSPAWNABLE"> & RaidStopEvent_ReasonMembers;
export interface RaidStopEvent_ReasonMembers {
}
export interface RaidStopEvent_ReasonStatics {
  readonly FINISHED: RaidStopEvent_Reason;
  readonly NOT_IN_VILLAGE: RaidStopEvent_Reason;
  readonly PEACE: RaidStopEvent_Reason;
  readonly TIMEOUT: RaidStopEvent_Reason;
  readonly UNSPAWNABLE: RaidStopEvent_Reason;
  valueOf(arg0: string): RaidStopEvent_Reason;
  values(): Array<RaidStopEvent_Reason>;
}

/** JVM class org.bukkit.event.raid.RaidTriggerEvent. */
export interface RaidTriggerEventMembers {
  readonly __javaSupertypes?: readonly [RaidEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type RaidTriggerEvent = RaidTriggerEventMembers & RaidEvent & j_org_bukkit_event.Cancellable;
export interface RaidTriggerEventStatics {
  new(arg0: j_org_bukkit.Raid, arg1: j_org_bukkit.World, arg2: j_org_bukkit_entity.Player): RaidTriggerEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
