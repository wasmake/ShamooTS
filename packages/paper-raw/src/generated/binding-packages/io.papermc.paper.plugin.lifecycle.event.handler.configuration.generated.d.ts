// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';

/** JVM interface io.papermc.paper.plugin.lifecycle.event.handler.configuration.LifecycleEventHandlerConfiguration. */
export interface LifecycleEventHandlerConfigurationMembers<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown> {
}
export type LifecycleEventHandlerConfiguration<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown> = LifecycleEventHandlerConfigurationMembers<O>;
export interface LifecycleEventHandlerConfigurationStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.handler.configuration.MonitorLifecycleEventHandlerConfiguration. */
export interface MonitorLifecycleEventHandlerConfigurationMembers<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown> {
  readonly __javaSupertypes?: readonly [LifecycleEventHandlerConfiguration<O>];
  monitor(): MonitorLifecycleEventHandlerConfiguration<O>;
}
export type MonitorLifecycleEventHandlerConfiguration<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown> = MonitorLifecycleEventHandlerConfigurationMembers<O> & LifecycleEventHandlerConfiguration<O>;
export interface MonitorLifecycleEventHandlerConfigurationStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.handler.configuration.PrioritizedLifecycleEventHandlerConfiguration. */
export interface PrioritizedLifecycleEventHandlerConfigurationMembers<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown> {
  readonly __javaSupertypes?: readonly [LifecycleEventHandlerConfiguration<O>];
  monitor(): PrioritizedLifecycleEventHandlerConfiguration<O>;
  priority(arg0: number): PrioritizedLifecycleEventHandlerConfiguration<O>;
}
export type PrioritizedLifecycleEventHandlerConfiguration<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown> = PrioritizedLifecycleEventHandlerConfigurationMembers<O> & LifecycleEventHandlerConfiguration<O>;
export interface PrioritizedLifecycleEventHandlerConfigurationStatics {
}
