// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin from './io.papermc.paper.plugin.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_configuration_file from './org.bukkit.configuration.file.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_generator from './org.bukkit.generator.generated.js';
import type * as j_org_bukkit_permissions from './org.bukkit.permissions.generated.js';

/** JVM class org.bukkit.plugin.AuthorNagException. */
export interface AuthorNagExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  getMessage(): string;
}
export type AuthorNagException = AuthorNagExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface AuthorNagExceptionStatics {
  new(arg0: string): AuthorNagException;
}

/** JVM interface org.bukkit.plugin.EventExecutor. */
export interface EventExecutorMembers {
  /** @throws org.bukkit.event.EventException */
  execute(arg0: j_org_bukkit_event.Listener, arg1: j_org_bukkit_event.Event): void;
}
export type EventExecutor = EventExecutorMembers;
export interface EventExecutorStatics {
  create(arg0: JavaOpaque<"java.lang.reflect.Method">, arg1: JavaClass<j_org_bukkit_event.Event>): EventExecutor;
}

/** JVM class org.bukkit.plugin.IllegalPluginAccessException. */
export interface IllegalPluginAccessExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type IllegalPluginAccessException = IllegalPluginAccessExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface IllegalPluginAccessExceptionStatics {
  new(): IllegalPluginAccessException;
  new(arg0: string): IllegalPluginAccessException;
}

/** JVM class org.bukkit.plugin.InvalidDescriptionException. */
export interface InvalidDescriptionExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
}
export type InvalidDescriptionException = InvalidDescriptionExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface InvalidDescriptionExceptionStatics {
  new(): InvalidDescriptionException;
  new(arg0: string): InvalidDescriptionException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): InvalidDescriptionException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: string): InvalidDescriptionException;
}

/** JVM class org.bukkit.plugin.InvalidPluginException. */
export interface InvalidPluginExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
}
export type InvalidPluginException = InvalidPluginExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface InvalidPluginExceptionStatics {
  new(): InvalidPluginException;
  new(arg0: string): InvalidPluginException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): InvalidPluginException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): InvalidPluginException;
}

/** JVM interface org.bukkit.plugin.Plugin. */
export interface PluginMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner, JavaOpaque<"net.kyori.adventure.key.Namespaced">, j_org_bukkit_command.TabExecutor];
  getComponentLogger(): JavaOpaque<"net.kyori.adventure.text.logger.slf4j.ComponentLogger">;
  getConfig(): j_org_bukkit_configuration_file.FileConfiguration;
  getDataFolder(): JavaOpaque<"java.io.File">;
  getDataPath(): JavaOpaque<"java.nio.file.Path">;
  getDefaultBiomeProvider(arg0: string, arg1: string | null): j_org_bukkit_generator.BiomeProvider | null;
  getDefaultWorldGenerator(arg0: string, arg1: string | null): j_org_bukkit_generator.ChunkGenerator | null;
  getDescription(): PluginDescriptionFile;
  getLifecycleManager(): j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventManager<Plugin>;
  getLog4JLogger(): JavaOpaque<"org.apache.logging.log4j.Logger">;
  getLogger(): JavaOpaque<"java.util.logging.Logger">;
  getName(): string;
  getPluginLoader(): PluginLoader_2;
  getPluginMeta(): j_io_papermc_paper_plugin_configuration.PluginMeta;
  getResource(arg0: string): JavaOpaque<"java.io.InputStream"> | null;
  getSLF4JLogger(): JavaOpaque<"org.slf4j.Logger">;
  getServer(): j_org_bukkit.Server;
  isEnabled(): boolean;
  isNaggable(): boolean;
  onDisable(): void;
  onEnable(): void;
  onLoad(): void;
  reloadConfig(): void;
  saveConfig(): void;
  saveDefaultConfig(): void;
  saveResource(arg0: string, arg1: boolean): void;
  setNaggable(arg0: boolean): void;
}
export type Plugin = PluginMembers & j_io_papermc_paper_plugin_lifecycle_event.LifecycleEventOwner & JavaOpaque<"net.kyori.adventure.key.Namespaced"> & j_org_bukkit_command.TabExecutor;
export interface PluginStatics {
}

/** JVM interface org.bukkit.plugin.PluginAwareness. */
export interface PluginAwarenessMembers {
}
export type PluginAwareness = PluginAwarenessMembers;
export interface PluginAwarenessStatics {
}

/** Live JVM enum org.bukkit.plugin.PluginAwareness$Flags; constants are host handles, not strings. */
export type PluginAwareness_Flags = JavaEnum<"org.bukkit.plugin.PluginAwareness$Flags", "UTF8"> & PluginAwareness_FlagsMembers;
export interface PluginAwareness_FlagsMembers {
}
export interface PluginAwareness_FlagsStatics {
  readonly UTF8: PluginAwareness_Flags;
  valueOf(arg0: string): PluginAwareness_Flags;
  values(): Array<PluginAwareness_Flags>;
}

/** JVM abstract org.bukkit.plugin.PluginBase. */
export interface PluginBaseMembers {
  readonly __javaSupertypes?: readonly [Plugin];
  equals(arg0: object): boolean;
  getName(): string;
  hashCode(): number;
  namespace(): string;
}
export type PluginBase = PluginBaseMembers & Plugin;
export interface PluginBaseStatics {
  new(): PluginBase;
}

/** JVM class org.bukkit.plugin.PluginDescriptionFile. */
export interface PluginDescriptionFileMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_configuration.PluginMeta];
  getAPIVersion(): string | null;
  getAuthors(): JavaList<string>;
  getAwareness(): JavaSet<PluginAwareness>;
  getClassLoaderOf(): string | null;
  getCommands(): JavaMap<string, JavaMap<string, object>>;
  getContributors(): JavaList<string>;
  getDepend(): JavaList<string>;
  getDescription(): string | null;
  getFullName(): string;
  getLibraries(): JavaList<string>;
  getLoad(): PluginLoadOrder;
  getLoadBefore(): JavaList<string>;
  getLoadBeforePlugins(): JavaList<string>;
  getLoadOrder(): PluginLoadOrder;
  getLoggerPrefix(): string | null;
  getMain(): string;
  getMainClass(): string;
  getName(): string;
  getPaperPluginLoader(): string | null;
  getPermissionDefault(): j_org_bukkit_permissions.PermissionDefault;
  getPermissions(): JavaList<j_org_bukkit_permissions.Permission>;
  getPluginDependencies(): JavaList<string>;
  getPluginSoftDependencies(): JavaList<string>;
  getPrefix(): string | null;
  getProvidedPlugins(): JavaList<string>;
  getProvides(): JavaList<string>;
  getRawName(): string;
  getSoftDepend(): JavaList<string>;
  getVersion(): string;
  getWebsite(): string | null;
  save(arg0: JavaOpaque<"java.io.Writer">): void;
}
export type PluginDescriptionFile = PluginDescriptionFileMembers & j_io_papermc_paper_plugin_configuration.PluginMeta;
export interface PluginDescriptionFileStatics {
  /** @throws org.bukkit.plugin.InvalidDescriptionException */
  new(arg0: JavaOpaque<"java.io.InputStream">): PluginDescriptionFile;
  /** @throws org.bukkit.plugin.InvalidDescriptionException */
  new(arg0: JavaOpaque<"java.io.Reader">): PluginDescriptionFile;
  new(arg0: string, arg1: string, arg2: string): PluginDescriptionFile;
  new(arg0: string, arg1: string, arg2: JavaList<string>, arg3: string, arg4: string, arg5: JavaList<string>, arg6: JavaList<string>, arg7: JavaList<string>, arg8: string, arg9: JavaMap<string, JavaMap<string, object>>, arg10: string, arg11: JavaList<string>, arg12: JavaList<string>, arg13: string, arg14: string, arg15: PluginLoadOrder, arg16: JavaList<j_org_bukkit_permissions.Permission>, arg17: j_org_bukkit_permissions.PermissionDefault, arg18: JavaSet<PluginAwareness>, arg19: string, arg20: JavaList<string>): PluginDescriptionFile;
}

/** JVM interface org.bukkit.plugin.PluginLoader. */
export interface PluginLoader_2Members {
  createRegisteredListeners(arg0: j_org_bukkit_event.Listener, arg1: Plugin): JavaMap<JavaClass<j_org_bukkit_event.Event>, JavaSet<RegisteredListener>>;
  disablePlugin(arg0: Plugin): void;
  enablePlugin(arg0: Plugin): void;
  /** @throws org.bukkit.plugin.InvalidDescriptionException */
  getPluginDescription(arg0: JavaOpaque<"java.io.File">): PluginDescriptionFile;
  getPluginFileFilters(): Array<JavaOpaque<"java.util.regex.Pattern">>;
  /** @throws org.bukkit.plugin.InvalidPluginException @throws org.bukkit.plugin.UnknownDependencyException */
  loadPlugin(arg0: JavaOpaque<"java.io.File">): Plugin;
}
export type PluginLoader_2 = PluginLoader_2Members;
export interface PluginLoader_2Statics {
}

/** Live JVM enum org.bukkit.plugin.PluginLoadOrder; constants are host handles, not strings. */
export type PluginLoadOrder = JavaEnum<"org.bukkit.plugin.PluginLoadOrder", "POSTWORLD" | "STARTUP"> & PluginLoadOrderMembers;
export interface PluginLoadOrderMembers {
}
export interface PluginLoadOrderStatics {
  readonly POSTWORLD: PluginLoadOrder;
  readonly STARTUP: PluginLoadOrder;
  valueOf(arg0: string): PluginLoadOrder;
  values(): Array<PluginLoadOrder>;
}

/** JVM class org.bukkit.plugin.PluginLogger. */
export interface PluginLoggerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.logging.Logger">];
  log(arg0: JavaOpaque<"java.util.logging.LogRecord">): void;
}
export type PluginLogger = PluginLoggerMembers & JavaOpaque<"java.util.logging.Logger">;
export interface PluginLoggerStatics {
  new(arg0: Plugin): PluginLogger;
}

/** JVM interface org.bukkit.plugin.PluginManager. */
export interface PluginManagerMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin.PermissionManager];
  addPermission(arg0: j_org_bukkit_permissions.Permission): void;
  /** @throws java.lang.IllegalStateException */
  callEvent(arg0: j_org_bukkit_event.Event): void;
  clearPlugins(): void;
  disablePlugin(arg0: Plugin): void;
  disablePlugins(): void;
  enablePlugin(arg0: Plugin): void;
  getDefaultPermSubscriptions(arg0: boolean): JavaSet<j_org_bukkit_permissions.Permissible>;
  getDefaultPermissions(arg0: boolean): JavaSet<j_org_bukkit_permissions.Permission>;
  getPermission(arg0: string): j_org_bukkit_permissions.Permission | null;
  getPermissionSubscriptions(arg0: string): JavaSet<j_org_bukkit_permissions.Permissible>;
  getPermissions(): JavaSet<j_org_bukkit_permissions.Permission>;
  getPlugin(arg0: string): Plugin | null;
  getPlugins(): Array<Plugin>;
  isPluginEnabled(arg0: string): boolean;
  isPluginEnabled(arg0: Plugin | null): boolean | null;
  isTransitiveDependency(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: j_io_papermc_paper_plugin_configuration.PluginMeta): boolean;
  /** @throws org.bukkit.plugin.InvalidDescriptionException @throws org.bukkit.plugin.InvalidPluginException @throws org.bukkit.plugin.UnknownDependencyException */
  loadPlugin(arg0: JavaOpaque<"java.io.File">): Plugin | null;
  loadPlugins(arg0: JavaOpaque<"java.io.File">): Array<Plugin>;
  loadPlugins(arg0: Array<JavaOpaque<"java.io.File">>): Array<Plugin>;
  overridePermissionManager(arg0: Plugin, arg1: j_io_papermc_paper_plugin.PermissionManager | null): void | null;
  recalculatePermissionDefaults(arg0: j_org_bukkit_permissions.Permission): void;
  registerEvent(arg0: JavaClass<j_org_bukkit_event.Event>, arg1: j_org_bukkit_event.Listener, arg2: j_org_bukkit_event.EventPriority, arg3: EventExecutor, arg4: Plugin): void;
  registerEvent(arg0: JavaClass<j_org_bukkit_event.Event>, arg1: j_org_bukkit_event.Listener, arg2: j_org_bukkit_event.EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
  registerEvents(arg0: j_org_bukkit_event.Listener, arg1: Plugin): void;
  /** @throws java.lang.IllegalArgumentException */
  registerInterface(arg0: JavaClass<PluginLoader_2>): void;
  removePermission(arg0: string): void;
  removePermission(arg0: j_org_bukkit_permissions.Permission): void;
  subscribeToDefaultPerms(arg0: boolean, arg1: j_org_bukkit_permissions.Permissible): void;
  subscribeToPermission(arg0: string, arg1: j_org_bukkit_permissions.Permissible): void;
  unsubscribeFromDefaultPerms(arg0: boolean, arg1: j_org_bukkit_permissions.Permissible): void;
  unsubscribeFromPermission(arg0: string, arg1: j_org_bukkit_permissions.Permissible): void;
  useTimings(): boolean;
}
export type PluginManager = PluginManagerMembers & j_io_papermc_paper_plugin.PermissionManager;
export interface PluginManagerStatics {
}

/** JVM class org.bukkit.plugin.RegisteredListener. */
export interface RegisteredListenerMembers {
  /** @throws org.bukkit.event.EventException */
  callEvent(arg0: j_org_bukkit_event.Event): void;
  getExecutor(): EventExecutor;
  getListener(): j_org_bukkit_event.Listener;
  getPlugin(): Plugin;
  getPriority(): j_org_bukkit_event.EventPriority;
  isIgnoringCancelled(): boolean;
  toString(): string;
}
export type RegisteredListener = RegisteredListenerMembers;
export interface RegisteredListenerStatics {
  new(arg0: j_org_bukkit_event.Listener, arg1: EventExecutor, arg2: j_org_bukkit_event.EventPriority, arg3: Plugin, arg4: boolean): RegisteredListener;
}

/** JVM class org.bukkit.plugin.RegisteredServiceProvider. */
export interface RegisteredServiceProviderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [RegisteredServiceProvider<object>]>];
  compareTo(arg0: object): number;
  compareTo(arg0: RegisteredServiceProvider<object>): number;
  getPlugin(): Plugin;
  getPriority(): ServicePriority;
  getProvider(): T;
  getService(): JavaClass<T>;
}
export type RegisteredServiceProvider<T = unknown> = RegisteredServiceProviderMembers<T>;
export interface RegisteredServiceProviderStatics {
  new<T>(arg0: JavaClass<T>, arg1: T, arg2: ServicePriority, arg3: Plugin): RegisteredServiceProvider<T>;
}

/** Live JVM enum org.bukkit.plugin.ServicePriority; constants are host handles, not strings. */
export type ServicePriority = JavaEnum<"org.bukkit.plugin.ServicePriority", "High" | "Highest" | "Low" | "Lowest" | "Normal"> & ServicePriorityMembers;
export interface ServicePriorityMembers {
}
export interface ServicePriorityStatics {
  readonly High: ServicePriority;
  readonly Highest: ServicePriority;
  readonly Low: ServicePriority;
  readonly Lowest: ServicePriority;
  readonly Normal: ServicePriority;
  valueOf(arg0: string): ServicePriority;
  values(): Array<ServicePriority>;
}

/** JVM interface org.bukkit.plugin.ServicesManager. */
export interface ServicesManagerMembers {
  getKnownServices(): JavaCollection<JavaClass<object>>;
  getRegistration<T>(arg0: JavaClass<T>): RegisteredServiceProvider<T> | null;
  getRegistrations<T>(arg0: JavaClass<T>): JavaCollection<RegisteredServiceProvider<T>>;
  getRegistrations(arg0: Plugin): JavaList<RegisteredServiceProvider<object>>;
  isProvidedFor<T>(arg0: JavaClass<T>): boolean;
  load<T>(arg0: JavaClass<T>): T | null;
  register<T>(arg0: JavaClass<T>, arg1: T, arg2: Plugin, arg3: ServicePriority): void;
  unregister(arg0: JavaClass<object>, arg1: object): void;
  unregister(arg0: object): void;
  unregisterAll(arg0: Plugin): void;
}
export type ServicesManager = ServicesManagerMembers;
export interface ServicesManagerStatics {
}

/** JVM class org.bukkit.plugin.SimplePluginManager. */
export interface SimplePluginManagerMembers {
  readonly __javaSupertypes?: readonly [PluginManager];
  addPermission(arg0: j_org_bukkit_permissions.Permission): void;
  addPermission(arg0: j_org_bukkit_permissions.Permission, arg1: boolean): void;
  addPermissions(arg0: JavaList<j_org_bukkit_permissions.Permission>): void;
  callEvent(arg0: j_org_bukkit_event.Event): void;
  clearPermissions(): void;
  clearPlugins(): void;
  readonly defSubs: JavaMap<boolean, JavaMap<j_org_bukkit_permissions.Permissible, boolean>>;
  readonly defaultPerms: JavaMap<boolean, JavaSet<j_org_bukkit_permissions.Permission>>;
  dirtyPermissibles(): void;
  disablePlugin(arg0: Plugin): void;
  disablePlugins(): void;
  enablePlugin(arg0: Plugin): void;
  getDefaultPermSubscriptions(arg0: boolean): JavaSet<j_org_bukkit_permissions.Permissible>;
  getDefaultPermissions(arg0: boolean): JavaSet<j_org_bukkit_permissions.Permission>;
  getPermission(arg0: string): j_org_bukkit_permissions.Permission | null;
  getPermissionSubscriptions(arg0: string): JavaSet<j_org_bukkit_permissions.Permissible>;
  getPermissions(): JavaSet<j_org_bukkit_permissions.Permission>;
  getPlugin(arg0: string): Plugin | null;
  getPlugins(): Array<Plugin>;
  isPluginEnabled(arg0: string): boolean;
  isPluginEnabled(arg0: Plugin | null): boolean | null;
  isTransitiveDepend(arg0: PluginDescriptionFile, arg1: PluginDescriptionFile): boolean;
  isTransitiveDependency(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: j_io_papermc_paper_plugin_configuration.PluginMeta): boolean;
  /** @throws org.bukkit.plugin.InvalidPluginException @throws org.bukkit.plugin.UnknownDependencyException */
  loadPlugin(arg0: JavaOpaque<"java.io.File">): Plugin | null;
  loadPlugins(arg0: JavaOpaque<"java.io.File">): Array<Plugin>;
  loadPlugins(arg0: JavaOpaque<"java.io.File">, arg1: JavaList<JavaOpaque<"java.io.File">>): Array<Plugin>;
  loadPlugins(arg0: Array<JavaOpaque<"java.io.File">>): Array<Plugin>;
  overridePermissionManager(arg0: Plugin, arg1: j_io_papermc_paper_plugin.PermissionManager | null): void | null;
  paperPluginManager: PluginManager;
  readonly permSubs: JavaMap<string, JavaMap<j_org_bukkit_permissions.Permissible, boolean>>;
  readonly permissions: JavaMap<string, j_org_bukkit_permissions.Permission>;
  recalculatePermissionDefaults(arg0: j_org_bukkit_permissions.Permission): void;
  registerEvent(arg0: JavaClass<j_org_bukkit_event.Event>, arg1: j_org_bukkit_event.Listener, arg2: j_org_bukkit_event.EventPriority, arg3: EventExecutor, arg4: Plugin): void;
  registerEvent(arg0: JavaClass<j_org_bukkit_event.Event>, arg1: j_org_bukkit_event.Listener, arg2: j_org_bukkit_event.EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
  registerEvents(arg0: j_org_bukkit_event.Listener, arg1: Plugin): void;
  /** @throws java.lang.IllegalArgumentException */
  registerInterface(arg0: JavaClass<PluginLoader_2>): void;
  removePermission(arg0: string): void;
  removePermission(arg0: j_org_bukkit_permissions.Permission): void;
  subscribeToDefaultPerms(arg0: boolean, arg1: j_org_bukkit_permissions.Permissible): void;
  subscribeToPermission(arg0: string, arg1: j_org_bukkit_permissions.Permissible): void;
  unsubscribeFromDefaultPerms(arg0: boolean, arg1: j_org_bukkit_permissions.Permissible): void;
  unsubscribeFromPermission(arg0: string, arg1: j_org_bukkit_permissions.Permissible): void;
  useTimings(): boolean;
  useTimings(arg0: boolean): void;
}
export type SimplePluginManager = SimplePluginManagerMembers & PluginManager;
export interface SimplePluginManagerStatics {
  new(arg0: j_org_bukkit.Server, arg1: j_org_bukkit_command.SimpleCommandMap): SimplePluginManager;
}

/** JVM class org.bukkit.plugin.SimpleServicesManager. */
export interface SimpleServicesManagerMembers {
  readonly __javaSupertypes?: readonly [ServicesManager];
  getKnownServices(): JavaCollection<object>;
  getKnownServices(): JavaSet<JavaClass<object>>;
  getRegistration<T>(arg0: JavaClass<T>): RegisteredServiceProvider<T> | null;
  getRegistrations(arg0: JavaClass<object>): JavaCollection<object>;
  getRegistrations<T>(arg0: JavaClass<T>): JavaList<RegisteredServiceProvider<T>>;
  getRegistrations(arg0: Plugin): JavaList<RegisteredServiceProvider<object>>;
  isProvidedFor<T>(arg0: JavaClass<T>): boolean;
  load<T>(arg0: JavaClass<T>): T | null;
  register<T>(arg0: JavaClass<T>, arg1: T, arg2: Plugin, arg3: ServicePriority): void;
  unregister(arg0: JavaClass<object>, arg1: object): void;
  unregister(arg0: object): void;
  unregisterAll(arg0: Plugin): void;
}
export type SimpleServicesManager = SimpleServicesManagerMembers & ServicesManager;
export interface SimpleServicesManagerStatics {
  new(): SimpleServicesManager;
}

/** JVM class org.bukkit.plugin.TimedRegisteredListener. */
export interface TimedRegisteredListenerMembers {
  readonly __javaSupertypes?: readonly [RegisteredListener];
  /** @throws org.bukkit.event.EventException */
  callEvent(arg0: j_org_bukkit_event.Event): void;
  getCount(): number;
  getEventClass(): JavaClass<j_org_bukkit_event.Event> | null;
  getTotalTime(): bigint;
  hasMultiple(): boolean;
  reset(): void;
}
export type TimedRegisteredListener = TimedRegisteredListenerMembers & RegisteredListener;
export interface TimedRegisteredListenerStatics {
  new(arg0: j_org_bukkit_event.Listener, arg1: EventExecutor, arg2: j_org_bukkit_event.EventPriority, arg3: Plugin, arg4: boolean): TimedRegisteredListener;
}

/** JVM class org.bukkit.plugin.UnknownDependencyException. */
export interface UnknownDependencyExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type UnknownDependencyException = UnknownDependencyExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface UnknownDependencyExceptionStatics {
  new(): UnknownDependencyException;
  new(arg0: string): UnknownDependencyException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): UnknownDependencyException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: string): UnknownDependencyException;
  new(arg0: JavaCollection<string>, arg1: string): UnknownDependencyException;
}
