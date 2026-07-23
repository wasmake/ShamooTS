// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';

/** JVM interface io.papermc.paper.plugin.lifecycle.event.handler.LifecycleEventHandler. */
export interface LifecycleEventHandlerMembers<E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown> {
  run(arg0: E): void;
}
export type LifecycleEventHandler<E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown> = LifecycleEventHandlerMembers<E>;
export interface LifecycleEventHandlerStatics {
}
