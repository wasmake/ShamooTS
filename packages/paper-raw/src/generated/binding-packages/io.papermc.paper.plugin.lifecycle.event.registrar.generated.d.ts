// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';

/** JVM interface io.papermc.paper.plugin.lifecycle.event.registrar.Registrar. */
export interface RegistrarMembers {
}
export type Registrar = RegistrarMembers;
export interface RegistrarStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.registrar.RegistrarEvent. */
export interface RegistrarEventMembers<R /* extends Registrar */ = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent];
  registrar(): R;
}
export type RegistrarEvent<R /* extends Registrar */ = unknown> = RegistrarEventMembers<R> & j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent;
export interface RegistrarEventStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.registrar.ReloadableRegistrarEvent. */
export interface ReloadableRegistrarEventMembers<R /* extends Registrar */ = unknown> {
  readonly __javaSupertypes?: readonly [RegistrarEvent<R>];
  cause(): ReloadableRegistrarEvent_Cause;
}
export type ReloadableRegistrarEvent<R /* extends Registrar */ = unknown> = ReloadableRegistrarEventMembers<R> & RegistrarEvent<R>;
export interface ReloadableRegistrarEventStatics {
}

/** Live JVM enum io.papermc.paper.plugin.lifecycle.event.registrar.ReloadableRegistrarEvent$Cause; constants are host handles, not strings. */
export type ReloadableRegistrarEvent_Cause = JavaEnum<"io.papermc.paper.plugin.lifecycle.event.registrar.ReloadableRegistrarEvent$Cause", "INITIAL" | "RELOAD"> & ReloadableRegistrarEvent_CauseMembers;
export interface ReloadableRegistrarEvent_CauseMembers {
}
export interface ReloadableRegistrarEvent_CauseStatics {
  readonly INITIAL: ReloadableRegistrarEvent_Cause;
  readonly RELOAD: ReloadableRegistrarEvent_Cause;
  valueOf(arg0: string): ReloadableRegistrarEvent_Cause;
  values(): Array<ReloadableRegistrarEvent_Cause>;
}
