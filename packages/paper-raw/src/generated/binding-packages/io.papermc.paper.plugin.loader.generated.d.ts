// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_bootstrap from './io.papermc.paper.plugin.bootstrap.generated.js';
import type * as j_io_papermc_paper_plugin_loader_library from './io.papermc.paper.plugin.loader.library.generated.js';

/** JVM interface io.papermc.paper.plugin.loader.PluginClasspathBuilder. */
export interface PluginClasspathBuilderMembers {
  addLibrary(arg0: j_io_papermc_paper_plugin_loader_library.ClassPathLibrary): PluginClasspathBuilder;
  getContext(): j_io_papermc_paper_plugin_bootstrap.PluginProviderContext;
}
export type PluginClasspathBuilder = PluginClasspathBuilderMembers;
export interface PluginClasspathBuilderStatics {
}

/** JVM interface io.papermc.paper.plugin.loader.PluginLoader. */
export interface PluginLoaderMembers {
  classloader(arg0: PluginClasspathBuilder): void;
}
export type PluginLoader = PluginLoaderMembers;
export interface PluginLoaderStatics {
}
