// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_handler from './io.papermc.paper.plugin.lifecycle.event.handler.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_handler_configuration from './io.papermc.paper.plugin.lifecycle.event.handler.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_types from './io.papermc.paper.plugin.lifecycle.event.types.generated.js';

/** JVM interface io.papermc.paper.plugin.lifecycle.event.LifecycleEvent. */
export interface LifecycleEventMembers {
}
export type LifecycleEvent = LifecycleEventMembers;
export interface LifecycleEventStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.LifecycleEventManager. */
export interface LifecycleEventManagerMembers<O /* extends LifecycleEventOwner */ = unknown> {
  registerEventHandler(arg0: j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.LifecycleEventHandlerConfiguration<O>): void;
  registerEventHandler<E /* extends LifecycleEvent */>(arg0: j_io_papermc_paper_plugin_lifecycle_event_types.LifecycleEventType<O, E, object>, arg1: j_io_papermc_paper_plugin_lifecycle_event_handler.LifecycleEventHandler<E>): void;
}
export type LifecycleEventManager<O /* extends LifecycleEventOwner */ = unknown> = LifecycleEventManagerMembers<O>;
export interface LifecycleEventManagerStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.LifecycleEventOwner. */
export interface LifecycleEventOwnerMembers {
  getPluginMeta(): j_io_papermc_paper_plugin_configuration.PluginMeta;
}
export type LifecycleEventOwner = LifecycleEventOwnerMembers;
export interface LifecycleEventOwnerStatics {
}
