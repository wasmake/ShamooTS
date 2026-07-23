// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';
import type * as j_io_papermc_paper_plugin_provider_classloader from './io.papermc.paper.plugin.provider.classloader.generated.js';
import type * as j_io_papermc_paper_plugin_provider_entrypoint from './io.papermc.paper.plugin.provider.entrypoint.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_configuration_file from './org.bukkit.configuration.file.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_generator from './org.bukkit.generator.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM abstract org.bukkit.plugin.java.JavaPlugin. */
export interface JavaPluginMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_plugin.PluginBase];
  getClassLoader(): JavaOpaque<"java.lang.ClassLoader">;
  getCommand(arg0: string): j_org_bukkit_command.PluginCommand | null;
  getConfig(): j_org_bukkit_configuration_file.FileConfiguration;
  getDataFolder(): JavaOpaque<"java.io.File">;
  getDefaultBiomeProvider(arg0: string, arg1: string): j_org_bukkit_generator.BiomeProvider | null;
  getDefaultWorldGenerator(arg0: string, arg1: string): j_org_bukkit_generator.ChunkGenerator | null;
  getDescription(): j_org_bukkit_plugin.PluginDescriptionFile;
  getFile(): JavaOpaque<"java.io.File">;
  getLifecycleManager(): j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventManager<j_org_bukkit_plugin.Plugin>;
  getLogger(): JavaOpaque<"java.util.logging.Logger">;
  getPluginLoader(): j_org_bukkit_plugin.PluginLoader_2;
  getPluginMeta(): j_io_papermc_paper_plugin_configuration.PluginMeta;
  getResource(arg0: string): JavaOpaque<"java.io.InputStream"> | null;
  getServer(): j_org_bukkit.Server;
  getTextResource(arg0: string): JavaOpaque<"java.io.Reader"> | null;
  init(arg0: j_org_bukkit.Server, arg1: j_org_bukkit_plugin.PluginDescriptionFile, arg2: JavaOpaque<"java.io.File">, arg3: JavaOpaque<"java.io.File">, arg4: JavaOpaque<"java.lang.ClassLoader">, arg5: j_io_papermc_paper_plugin_configuration.PluginMeta, arg6: JavaOpaque<"java.util.logging.Logger">): void | null;
  init(arg0: j_org_bukkit_plugin.PluginLoader_2, arg1: j_org_bukkit.Server, arg2: j_org_bukkit_plugin.PluginDescriptionFile, arg3: JavaOpaque<"java.io.File">, arg4: JavaOpaque<"java.io.File">, arg5: JavaOpaque<"java.lang.ClassLoader">): void;
  isEnabled(): boolean;
  isNaggable(): boolean;
  onCommand(arg0: j_org_bukkit_command.CommandSender, arg1: j_org_bukkit_command.Command, arg2: string, arg3: Array<string>): boolean;
  onDisable(): void;
  onEnable(): void;
  onLoad(): void;
  onTabComplete(arg0: j_org_bukkit_command.CommandSender, arg1: j_org_bukkit_command.Command, arg2: string, arg3: Array<string>): JavaList<string> | null;
  registerCommand(arg0: string, arg1: j_io_papermc_paper_command_brigadier.BasicCommand): void;
  registerCommand(arg0: string, arg1: string, arg2: j_io_papermc_paper_command_brigadier.BasicCommand): void | null;
  registerCommand(arg0: string, arg1: string, arg2: JavaCollection<string>, arg3: j_io_papermc_paper_command_brigadier.BasicCommand): void | null;
  registerCommand(arg0: string, arg1: JavaCollection<string>, arg2: j_io_papermc_paper_command_brigadier.BasicCommand): void;
  reloadConfig(): void;
  saveConfig(): void;
  saveDefaultConfig(): void;
  saveResource(arg0: string, arg1: boolean): void;
  setEnabled(arg0: boolean): void;
  setNaggable(arg0: boolean): void;
  toString(): string;
}
export type JavaPlugin = JavaPluginMembers & j_org_bukkit_plugin.PluginBase;
export interface JavaPluginStatics {
  new(): JavaPlugin;
  new(arg0: JavaPluginLoader, arg1: j_org_bukkit_plugin.PluginDescriptionFile, arg2: JavaOpaque<"java.io.File">, arg3: JavaOpaque<"java.io.File">): JavaPlugin;
  getPlugin<T /* extends JavaPlugin */>(arg0: JavaClass<T>): T;
  getProvidingPlugin(arg0: JavaClass<object>): JavaPlugin;
}

/** JVM class org.bukkit.plugin.java.JavaPluginLoader. */
export interface JavaPluginLoaderMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_plugin.PluginLoader_2];
  createRegisteredListeners(arg0: j_org_bukkit_event.Listener, arg1: j_org_bukkit_plugin.Plugin): JavaMap<JavaClass<j_org_bukkit_event.Event>, JavaSet<j_org_bukkit_plugin.RegisteredListener>>;
  disablePlugin(arg0: j_org_bukkit_plugin.Plugin): void;
  enablePlugin(arg0: j_org_bukkit_plugin.Plugin): void;
  /** @throws org.bukkit.plugin.InvalidDescriptionException */
  getPluginDescription(arg0: JavaOpaque<"java.io.File">): j_org_bukkit_plugin.PluginDescriptionFile;
  getPluginFileFilters(): Array<JavaOpaque<"java.util.regex.Pattern">>;
  /** @throws org.bukkit.plugin.InvalidPluginException */
  loadPlugin(arg0: JavaOpaque<"java.io.File">): j_org_bukkit_plugin.Plugin;
}
export type JavaPluginLoader = JavaPluginLoaderMembers & j_org_bukkit_plugin.PluginLoader_2;
export interface JavaPluginLoaderStatics {
  new(arg0: j_org_bukkit.Server): JavaPluginLoader;
}

/** JVM class org.bukkit.plugin.java.LibraryLoader. */
export interface LibraryLoaderMembers {
  createLoader(arg0: j_org_bukkit_plugin.PluginDescriptionFile): JavaOpaque<"java.lang.ClassLoader"> | null;
  createLoader(arg0: j_org_bukkit_plugin.PluginDescriptionFile, arg1: JavaList<JavaOpaque<"java.nio.file.Path">>): JavaOpaque<"java.lang.ClassLoader"> | null;
}
export type LibraryLoader = LibraryLoaderMembers;
export interface LibraryLoaderStatics {
  new(arg0: JavaOpaque<"java.util.logging.Logger">): LibraryLoader;
  readonly LIBRARY_LOADER_FACTORY: JavaBiFunction<Array<JavaOpaque<"java.net.URL">>, JavaOpaque<"java.lang.ClassLoader">, JavaOpaque<"java.net.URLClassLoader">>;
  readonly REMAPPER: JavaFunction<JavaList<JavaOpaque<"java.nio.file.Path">>, JavaList<JavaOpaque<"java.nio.file.Path">>>;
}

/** JVM class org.bukkit.plugin.java.PluginClassLoader. */
export interface PluginClassLoaderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.net.URLClassLoader">, j_io_papermc_paper_plugin_provider_classloader.ConfiguredPluginClassLoader];
  /** @throws java.io.IOException */
  close(): void;
  dependencyContext: j_io_papermc_paper_plugin_provider_entrypoint.DependencyContext;
  /** @throws java.lang.ClassNotFoundException */
  findClass(arg0: string): JavaClass<object>;
  getConfiguration(): j_io_papermc_paper_plugin_configuration.PluginMeta;
  getGroup(): j_io_papermc_paper_plugin_provider_classloader.PluginClassLoaderGroup | null;
  getPlugin(): JavaPlugin;
  getResource(arg0: string): JavaOpaque<"java.net.URL">;
  /** @throws java.io.IOException */
  getResources(arg0: string): JavaOpaque<"java.util.Enumeration", [JavaOpaque<"java.net.URL">]>;
  init(arg0: JavaPlugin): void;
  initialize(arg0: JavaPlugin): void;
  /** @throws java.lang.ClassNotFoundException */
  loadClass(arg0: string, arg1: boolean): JavaClass<object>;
  /** @throws java.lang.ClassNotFoundException */
  loadClass(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean): JavaClass<object>;
  toString(): string;
}
export type PluginClassLoader = PluginClassLoaderMembers & JavaOpaque<"java.net.URLClassLoader"> & j_io_papermc_paper_plugin_provider_classloader.ConfiguredPluginClassLoader;
export interface PluginClassLoaderStatics {
  /** @throws java.io.IOException @throws java.net.MalformedURLException @throws org.bukkit.plugin.InvalidPluginException */
  new(arg0: JavaOpaque<"java.lang.ClassLoader"> | null, arg1: j_org_bukkit_plugin.PluginDescriptionFile, arg2: JavaOpaque<"java.io.File">, arg3: JavaOpaque<"java.io.File">, arg4: JavaOpaque<"java.lang.ClassLoader"> | null, arg5: JavaOpaque<"java.util.jar.JarFile">, arg6: j_io_papermc_paper_plugin_provider_entrypoint.DependencyContext): PluginClassLoader;
}
