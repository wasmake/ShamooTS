// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM interface org.bukkit.event.Cancellable. */
export interface CancellableMembers {
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type Cancellable = CancellableMembers;
export interface CancellableStatics {
}

/** JVM abstract org.bukkit.event.Event. */
export interface EventMembers {
  callEvent(): boolean;
  getEventName(): string;
  getHandlers(): HandlerList;
  isAsynchronous(): boolean;
}
export type Event = EventMembers;
export interface EventStatics {
}

/** Live JVM enum org.bukkit.event.Event$Result; constants are host handles, not strings. */
export type Event_Result = JavaEnum<"org.bukkit.event.Event$Result", "ALLOW" | "DEFAULT" | "DENY"> & Event_ResultMembers;
export interface Event_ResultMembers {
}
export interface Event_ResultStatics {
  readonly ALLOW: Event_Result;
  readonly DEFAULT: Event_Result;
  readonly DENY: Event_Result;
  valueOf(arg0: string): Event_Result;
  values(): Array<Event_Result>;
}

/** JVM class org.bukkit.event.EventException. */
export interface EventExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
  getCause(): JavaOpaque<"java.lang.Throwable">;
}
export type EventException = EventExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface EventExceptionStatics {
  new(): EventException;
  new(arg0: string): EventException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): EventException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: string): EventException;
}

/** JVM interface org.bukkit.event.EventHandler. */
export interface EventHandlerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  ignoreCancelled(): boolean;
  priority(): EventPriority;
}
export type EventHandler = EventHandlerMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface EventHandlerStatics {
}

/** Live JVM enum org.bukkit.event.EventPriority; constants are host handles, not strings. */
export type EventPriority = JavaEnum<"org.bukkit.event.EventPriority", "HIGHEST" | "HIGH" | "LOWEST" | "LOW" | "MONITOR" | "NORMAL"> & EventPriorityMembers;
export interface EventPriorityMembers {
  getSlot(): number;
}
export interface EventPriorityStatics {
  readonly HIGHEST: EventPriority;
  readonly HIGH: EventPriority;
  readonly LOWEST: EventPriority;
  readonly LOW: EventPriority;
  readonly MONITOR: EventPriority;
  readonly NORMAL: EventPriority;
  valueOf(arg0: string): EventPriority;
  values(): Array<EventPriority>;
}

/** JVM class org.bukkit.event.HandlerList. */
export interface HandlerListMembers {
  bake(): void;
  getRegisteredListeners(): Array<j_org_bukkit_plugin.RegisteredListener>;
  register(arg0: j_org_bukkit_plugin.RegisteredListener): void;
  registerAll(arg0: JavaCollection<j_org_bukkit_plugin.RegisteredListener>): void;
  unregister(arg0: Listener): void;
  unregister(arg0: j_org_bukkit_plugin.Plugin): void;
  unregister(arg0: j_org_bukkit_plugin.RegisteredListener): void;
}
export type HandlerList = HandlerListMembers;
export interface HandlerListStatics {
  new(): HandlerList;
  bakeAll(): void;
  getHandlerLists(): JavaOpaque<"java.util.ArrayList", [HandlerList]>;
  getRegisteredListeners(arg0: j_org_bukkit_plugin.Plugin): JavaOpaque<"java.util.ArrayList", [j_org_bukkit_plugin.RegisteredListener]>;
  unregisterAll(): void;
  unregisterAll(arg0: Listener): void;
  unregisterAll(arg0: j_org_bukkit_plugin.Plugin): void;
}

/** JVM interface org.bukkit.event.Listener. */
export interface ListenerMembers {
}
export type Listener = ListenerMembers;
export interface ListenerStatics {
}
