// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_plugin_meta from './com.velocitypowered.api.plugin.meta.generated.js';

/** JVM interface com.velocitypowered.api.plugin.Dependency. */
export interface DependencyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  id(): string;
  optional(): boolean;
}
export type Dependency = DependencyMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface DependencyStatics {
}

/** JVM class com.velocitypowered.api.plugin.InvalidPluginException. */
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

/** JVM interface com.velocitypowered.api.plugin.Plugin. */
export interface PluginMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  authors(): Array<string>;
  dependencies(): Array<Dependency>;
  description(): string;
  id(): string;
  name(): string;
  url(): string;
  version(): string;
}
export type Plugin = PluginMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface PluginStatics {
}

/** JVM interface com.velocitypowered.api.plugin.PluginContainer. */
export interface PluginContainerMembers {
  getDescription(): PluginDescription;
  getExecutorService(): JavaOpaque<"java.util.concurrent.ExecutorService">;
  getInstance(): JavaOptional<object>;
}
export type PluginContainer = PluginContainerMembers;
export interface PluginContainerStatics {
}

/** JVM interface com.velocitypowered.api.plugin.PluginDescription. */
export interface PluginDescriptionMembers {
  getAuthors(): JavaList<string>;
  getDependencies(): JavaCollection<j_com_velocitypowered_api_plugin_meta.PluginDependency>;
  getDependency(arg0: string): JavaOptional<j_com_velocitypowered_api_plugin_meta.PluginDependency>;
  getDescription(): JavaOptional<string>;
  getId(): string;
  getName(): JavaOptional<string>;
  getSource(): JavaOptional<JavaOpaque<"java.nio.file.Path">>;
  getUrl(): JavaOptional<string>;
  getVersion(): JavaOptional<string>;
}
export type PluginDescription = PluginDescriptionMembers;
export interface PluginDescriptionStatics {
  readonly ID_PATTERN: JavaOpaque<"java.util.regex.Pattern">;
}

/** JVM interface com.velocitypowered.api.plugin.PluginManager. */
export interface PluginManagerMembers {
  addToClasspath(arg0: object, arg1: JavaOpaque<"java.nio.file.Path">): void;
  ensurePluginContainer(arg0: object): PluginContainer;
  fromInstance(arg0: object): JavaOptional<PluginContainer>;
  getPlugin(arg0: string): JavaOptional<PluginContainer>;
  getPlugins(): JavaCollection<PluginContainer>;
  isLoaded(arg0: string): boolean;
}
export type PluginManager = PluginManagerMembers;
export interface PluginManagerStatics {
}
