// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_org_bukkit_plugin_java from './org.bukkit.plugin.java.generated.js';

/** JVM interface io.papermc.paper.plugin.provider.classloader.ClassLoaderAccess. */
export interface ClassLoaderAccessMembers {
  canAccess(arg0: ConfiguredPluginClassLoader): boolean;
}
export type ClassLoaderAccess = ClassLoaderAccessMembers;
export interface ClassLoaderAccessStatics {
}

/** JVM interface io.papermc.paper.plugin.provider.classloader.ConfiguredPluginClassLoader. */
export interface ConfiguredPluginClassLoaderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.Closeable">];
  getConfiguration(): j_io_papermc_paper_plugin_configuration.PluginMeta;
  getGroup(): PluginClassLoaderGroup | null;
  getPlugin(): j_org_bukkit_plugin_java.JavaPlugin | null;
  init(arg0: j_org_bukkit_plugin_java.JavaPlugin): void;
  /** @throws java.lang.ClassNotFoundException */
  loadClass(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean): JavaClass<object>;
}
export type ConfiguredPluginClassLoader = ConfiguredPluginClassLoaderMembers & JavaOpaque<"java.io.Closeable">;
export interface ConfiguredPluginClassLoaderStatics {
}

/** JVM interface io.papermc.paper.plugin.provider.classloader.PaperClassLoaderStorage. */
export interface PaperClassLoaderStorageMembers {
  registerAccessBackedGroup(arg0: ConfiguredPluginClassLoader, arg1: ClassLoaderAccess): PluginClassLoaderGroup;
  registerOpenGroup(arg0: ConfiguredPluginClassLoader): PluginClassLoaderGroup;
  registerSpigotGroup(arg0: j_org_bukkit_plugin_java.PluginClassLoader): PluginClassLoaderGroup;
  registerUnsafePlugin(arg0: ConfiguredPluginClassLoader): boolean;
  unregisterClassloader(arg0: ConfiguredPluginClassLoader): void;
}
export type PaperClassLoaderStorage = PaperClassLoaderStorageMembers;
export interface PaperClassLoaderStorageStatics {
  instance(): PaperClassLoaderStorage;
}

/** JVM interface io.papermc.paper.plugin.provider.classloader.PluginClassLoaderGroup. */
export interface PluginClassLoaderGroupMembers {
  add(arg0: ConfiguredPluginClassLoader): void;
  getAccess(): ClassLoaderAccess;
  getClassByName(arg0: string, arg1: boolean, arg2: ConfiguredPluginClassLoader): JavaClass<object> | null;
  remove(arg0: ConfiguredPluginClassLoader): void;
}
export type PluginClassLoaderGroup = PluginClassLoaderGroupMembers;
export interface PluginClassLoaderGroupStatics {
}
