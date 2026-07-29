// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_bootstrap from './io.papermc.paper.plugin.bootstrap.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_handler_configuration from './io.papermc.paper.plugin.lifecycle.event.handler.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_types from './io.papermc.paper.plugin.lifecycle.event.types.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_event from './io.papermc.paper.registry.event.generated.js';

/** JVM interface io.papermc.paper.registry.event.type.RegistryEntryAddConfiguration. */
export interface RegistryEntryAddConfigurationMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.PrioritizedLifecycleEventHandlerConfiguration<j_io_papermc_paper_plugin_bootstrap.BootstrapContext>];
  filter(arg0: j_io_papermc_paper_registry.TypedKey<T>): RegistryEntryAddConfiguration<T>;
  filter(arg0: JavaPredicate<j_io_papermc_paper_registry.TypedKey<T>>): RegistryEntryAddConfiguration<T>;
  monitor(): RegistryEntryAddConfiguration<T>;
  priority(arg0: number): RegistryEntryAddConfiguration<T>;
}
export type RegistryEntryAddConfiguration<T = unknown> = RegistryEntryAddConfigurationMembers<T> & j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.PrioritizedLifecycleEventHandlerConfiguration<j_io_papermc_paper_plugin_bootstrap.BootstrapContext>;
export interface RegistryEntryAddConfigurationStatics {
}

/** JVM interface io.papermc.paper.registry.event.type.RegistryEntryAddEventType. */
export interface RegistryEntryAddEventTypeMembers<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event_types.LifecycleEventType<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, j_io_papermc_paper_registry_event.RegistryEntryAddEvent<T, B>, RegistryEntryAddConfiguration<T>>];
}
export type RegistryEntryAddEventType<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> = RegistryEntryAddEventTypeMembers<T, B> & j_io_papermc_paper_plugin_lifecycle_event_types.LifecycleEventType<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, j_io_papermc_paper_registry_event.RegistryEntryAddEvent<T, B>, RegistryEntryAddConfiguration<T>>;
export interface RegistryEntryAddEventTypeStatics {
}
