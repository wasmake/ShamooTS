// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';

/** JVM interface io.papermc.paper.plugin.provider.entrypoint.DependencyContext. */
export interface DependencyContextMembers {
  hasDependency(arg0: string): boolean;
  isTransitiveDependency(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: j_io_papermc_paper_plugin_configuration.PluginMeta): boolean;
}
export type DependencyContext = DependencyContextMembers;
export interface DependencyContextStatics {
}
