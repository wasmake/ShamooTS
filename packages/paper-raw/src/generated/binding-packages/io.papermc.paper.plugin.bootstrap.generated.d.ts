// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';
import type * as j_org_bukkit_plugin_java from './org.bukkit.plugin.java.generated.js';

/** JVM interface io.papermc.paper.plugin.bootstrap.BootstrapContext. */
export interface BootstrapContextMembers {
  readonly __javaSupertypes?: readonly [PluginProviderContext, j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner];
  getLifecycleManager(): j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventManager<BootstrapContext>;
}
export type BootstrapContext = BootstrapContextMembers & PluginProviderContext & j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner;
export interface BootstrapContextStatics {
}

/** JVM interface io.papermc.paper.plugin.bootstrap.PluginBootstrap. */
export interface PluginBootstrapMembers {
  bootstrap(arg0: BootstrapContext): void;
  createPlugin(arg0: PluginProviderContext): j_org_bukkit_plugin_java.JavaPlugin;
}
export type PluginBootstrap = PluginBootstrapMembers;
export interface PluginBootstrapStatics {
}

/** JVM interface io.papermc.paper.plugin.bootstrap.PluginProviderContext. */
export interface PluginProviderContextMembers {
  getConfiguration(): j_io_papermc_paper_plugin_configuration.PluginMeta;
  getDataDirectory(): JavaOpaque<"java.nio.file.Path">;
  getLogger(): JavaOpaque<"net.kyori.adventure.text.logger.slf4j.ComponentLogger">;
  getPluginSource(): JavaOpaque<"java.nio.file.Path">;
}
export type PluginProviderContext = PluginProviderContextMembers;
export interface PluginProviderContextStatics {
}
