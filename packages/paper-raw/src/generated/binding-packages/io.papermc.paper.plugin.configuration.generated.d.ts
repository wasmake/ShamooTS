// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_permissions from './org.bukkit.permissions.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM interface io.papermc.paper.plugin.configuration.PluginMeta. */
export interface PluginMetaMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Namespaced">];
  getAPIVersion(): string | null;
  getAuthors(): JavaList<string>;
  getContributors(): JavaList<string>;
  getDescription(): string | null;
  getDisplayName(): string;
  getLoadBeforePlugins(): JavaList<string>;
  getLoadOrder(): j_org_bukkit_plugin.PluginLoadOrder;
  getLoggerPrefix(): string | null;
  getMainClass(): string;
  getName(): string;
  getPermissionDefault(): j_org_bukkit_permissions.PermissionDefault;
  getPermissions(): JavaList<j_org_bukkit_permissions.Permission>;
  getPluginDependencies(): JavaList<string>;
  getPluginSoftDependencies(): JavaList<string>;
  getProvidedPlugins(): JavaList<string>;
  getVersion(): string;
  getWebsite(): string | null;
  namespace(): string;
}
export type PluginMeta = PluginMetaMembers & JavaOpaque<"net.kyori.adventure.key.Namespaced">;
export interface PluginMetaStatics {
}
