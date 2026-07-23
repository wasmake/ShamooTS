// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_io_papermc_paper_datapack from './io.papermc.paper.datapack.generated.js';
import type * as j_io_papermc_paper_plugin_bootstrap from './io.papermc.paper.plugin.bootstrap.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_handler from './io.papermc.paper.plugin.lifecycle.event.handler.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_handler_configuration from './io.papermc.paper.plugin.lifecycle.event.handler.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_registrar from './io.papermc.paper.plugin.lifecycle.event.registrar.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_tag from './io.papermc.paper.tag.generated.js';

/** JVM class io.papermc.paper.plugin.lifecycle.event.types.LifecycleEvents. */
export interface LifecycleEventsMembers {
}
export type LifecycleEvents = LifecycleEventsMembers;
export interface LifecycleEventsStatics {
  readonly COMMANDS: LifecycleEventType_Prioritizable<j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner, j_io_papermc_paper_plugin_lifecycle_event_registrar.ReloadableRegistrarEvent<j_io_papermc_paper_command_brigadier.Commands>>;
  readonly DATAPACK_DISCOVERY: LifecycleEventType_Prioritizable<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, j_io_papermc_paper_plugin_lifecycle_event_registrar.RegistrarEvent<j_io_papermc_paper_datapack.DatapackRegistrar>>;
  readonly TAGS: TagEventTypeProvider;
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.types.LifecycleEventType. */
export interface LifecycleEventTypeMembers<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown, E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown, C /* extends j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.LifecycleEventHandlerConfiguration<O> */ = unknown> {
  name(): string;
  newHandler(arg0: j_io_papermc_paper_plugin_lifecycle_event_handler.LifecycleEventHandler<E>): C;
}
export type LifecycleEventType<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown, E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown, C /* extends j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.LifecycleEventHandlerConfiguration<O> */ = unknown> = LifecycleEventTypeMembers<O, E, C>;
export interface LifecycleEventTypeStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.types.LifecycleEventType$Monitorable. */
export interface LifecycleEventType_MonitorableMembers<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown, E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown> {
  readonly __javaSupertypes?: readonly [LifecycleEventType<O, E, j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.MonitorLifecycleEventHandlerConfiguration<O>>];
}
export type LifecycleEventType_Monitorable<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown, E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown> = LifecycleEventType_MonitorableMembers<O, E> & LifecycleEventType<O, E, j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.MonitorLifecycleEventHandlerConfiguration<O>>;
export interface LifecycleEventType_MonitorableStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.types.LifecycleEventType$Prioritizable. */
export interface LifecycleEventType_PrioritizableMembers<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown, E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown> {
  readonly __javaSupertypes?: readonly [LifecycleEventType<O, E, j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.PrioritizedLifecycleEventHandlerConfiguration<O>>];
}
export type LifecycleEventType_Prioritizable<O /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner */ = unknown, E /* extends j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent */ = unknown> = LifecycleEventType_PrioritizableMembers<O, E> & LifecycleEventType<O, E, j_io_papermc_paper_plugin_lifecycle_event_handler_configuration.PrioritizedLifecycleEventHandlerConfiguration<O>>;
export interface LifecycleEventType_PrioritizableStatics {
}

/** JVM interface io.papermc.paper.plugin.lifecycle.event.types.TagEventTypeProvider. */
export interface TagEventTypeProviderMembers {
  postFlatten<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>): LifecycleEventType_Prioritizable<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, j_io_papermc_paper_plugin_lifecycle_event_registrar.ReloadableRegistrarEvent<j_io_papermc_paper_tag.PostFlattenTagRegistrar<T>>>;
  preFlatten<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>): LifecycleEventType_Prioritizable<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, j_io_papermc_paper_plugin_lifecycle_event_registrar.ReloadableRegistrarEvent<j_io_papermc_paper_tag.PreFlattenTagRegistrar<T>>>;
}
export type TagEventTypeProvider = TagEventTypeProviderMembers;
export interface TagEventTypeProviderStatics {
}
