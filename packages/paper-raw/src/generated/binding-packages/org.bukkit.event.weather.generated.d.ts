// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';

/** JVM class org.bukkit.event.weather.LightningStrikeEvent. */
export interface LightningStrikeEventMembers {
  readonly __javaSupertypes?: readonly [WeatherEvent, j_org_bukkit_event.Cancellable];
  getCause(): LightningStrikeEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLightning(): j_org_bukkit_entity.LightningStrike;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type LightningStrikeEvent = LightningStrikeEventMembers & WeatherEvent & j_org_bukkit_event.Cancellable;
export interface LightningStrikeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit_entity.LightningStrike): LightningStrikeEvent;
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit_entity.LightningStrike, arg2: LightningStrikeEvent_Cause): LightningStrikeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.weather.LightningStrikeEvent$Cause; constants are host handles, not strings. */
export type LightningStrikeEvent_Cause = JavaEnum<"org.bukkit.event.weather.LightningStrikeEvent$Cause", "COMMAND" | "CUSTOM" | "ENCHANTMENT" | "SPAWNER" | "TRAP" | "TRIDENT" | "UNKNOWN" | "WEATHER"> & LightningStrikeEvent_CauseMembers;
export interface LightningStrikeEvent_CauseMembers {
}
export interface LightningStrikeEvent_CauseStatics {
  readonly COMMAND: LightningStrikeEvent_Cause;
  readonly CUSTOM: LightningStrikeEvent_Cause;
  readonly ENCHANTMENT: LightningStrikeEvent_Cause;
  readonly SPAWNER: LightningStrikeEvent_Cause;
  readonly TRAP: LightningStrikeEvent_Cause;
  readonly TRIDENT: LightningStrikeEvent_Cause;
  readonly UNKNOWN: LightningStrikeEvent_Cause;
  readonly WEATHER: LightningStrikeEvent_Cause;
  valueOf(arg0: string): LightningStrikeEvent_Cause;
  values(): Array<LightningStrikeEvent_Cause>;
}

/** JVM class org.bukkit.event.weather.ThunderChangeEvent. */
export interface ThunderChangeEventMembers {
  readonly __javaSupertypes?: readonly [WeatherEvent, j_org_bukkit_event.Cancellable];
  getCause(): ThunderChangeEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  toThunderState(): boolean;
}
export type ThunderChangeEvent = ThunderChangeEventMembers & WeatherEvent & j_org_bukkit_event.Cancellable;
export interface ThunderChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: boolean): ThunderChangeEvent;
  new(arg0: j_org_bukkit.World, arg1: boolean, arg2: ThunderChangeEvent_Cause): ThunderChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.weather.ThunderChangeEvent$Cause; constants are host handles, not strings. */
export type ThunderChangeEvent_Cause = JavaEnum<"org.bukkit.event.weather.ThunderChangeEvent$Cause", "COMMAND" | "NATURAL" | "PLUGIN" | "SLEEP" | "UNKNOWN"> & ThunderChangeEvent_CauseMembers;
export interface ThunderChangeEvent_CauseMembers {
}
export interface ThunderChangeEvent_CauseStatics {
  readonly COMMAND: ThunderChangeEvent_Cause;
  readonly NATURAL: ThunderChangeEvent_Cause;
  readonly PLUGIN: ThunderChangeEvent_Cause;
  readonly SLEEP: ThunderChangeEvent_Cause;
  readonly UNKNOWN: ThunderChangeEvent_Cause;
  valueOf(arg0: string): ThunderChangeEvent_Cause;
  values(): Array<ThunderChangeEvent_Cause>;
}

/** JVM class org.bukkit.event.weather.WeatherChangeEvent. */
export interface WeatherChangeEventMembers {
  readonly __javaSupertypes?: readonly [WeatherEvent, j_org_bukkit_event.Cancellable];
  getCause(): WeatherChangeEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  toWeatherState(): boolean;
}
export type WeatherChangeEvent = WeatherChangeEventMembers & WeatherEvent & j_org_bukkit_event.Cancellable;
export interface WeatherChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: boolean): WeatherChangeEvent;
  new(arg0: j_org_bukkit.World, arg1: boolean, arg2: WeatherChangeEvent_Cause): WeatherChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.weather.WeatherChangeEvent$Cause; constants are host handles, not strings. */
export type WeatherChangeEvent_Cause = JavaEnum<"org.bukkit.event.weather.WeatherChangeEvent$Cause", "COMMAND" | "NATURAL" | "PLUGIN" | "SLEEP" | "UNKNOWN"> & WeatherChangeEvent_CauseMembers;
export interface WeatherChangeEvent_CauseMembers {
}
export interface WeatherChangeEvent_CauseStatics {
  readonly COMMAND: WeatherChangeEvent_Cause;
  readonly NATURAL: WeatherChangeEvent_Cause;
  readonly PLUGIN: WeatherChangeEvent_Cause;
  readonly SLEEP: WeatherChangeEvent_Cause;
  readonly UNKNOWN: WeatherChangeEvent_Cause;
  valueOf(arg0: string): WeatherChangeEvent_Cause;
  values(): Array<WeatherChangeEvent_Cause>;
}

/** JVM abstract org.bukkit.event.weather.WeatherEvent. */
export interface WeatherEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getWorld(): j_org_bukkit.World;
}
export type WeatherEvent = WeatherEventMembers & j_org_bukkit_event.Event;
export interface WeatherEventStatics {
}
