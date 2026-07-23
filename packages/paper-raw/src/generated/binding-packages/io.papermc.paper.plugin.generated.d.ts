// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_permissions from './org.bukkit.permissions.generated.js';

/** JVM interface io.papermc.paper.plugin.PermissionManager. */
export interface PermissionManagerMembers {
  addPermission(arg0: j_org_bukkit_permissions.Permission): void;
  addPermissions(arg0: JavaList<j_org_bukkit_permissions.Permission>): void;
  clearPermissions(): void;
  getDefaultPermSubscriptions(arg0: boolean): JavaSet<j_org_bukkit_permissions.Permissible>;
  getDefaultPermissions(arg0: boolean): JavaSet<j_org_bukkit_permissions.Permission>;
  getPermission(arg0: string): j_org_bukkit_permissions.Permission | null;
  getPermissionSubscriptions(arg0: string): JavaSet<j_org_bukkit_permissions.Permissible>;
  getPermissions(): JavaSet<j_org_bukkit_permissions.Permission>;
  recalculatePermissionDefaults(arg0: j_org_bukkit_permissions.Permission): void;
  removePermission(arg0: string): void;
  removePermission(arg0: j_org_bukkit_permissions.Permission): void;
  subscribeToDefaultPerms(arg0: boolean, arg1: j_org_bukkit_permissions.Permissible): void;
  subscribeToPermission(arg0: string, arg1: j_org_bukkit_permissions.Permissible): void;
  unsubscribeFromDefaultPerms(arg0: boolean, arg1: j_org_bukkit_permissions.Permissible): void;
  unsubscribeFromPermission(arg0: string, arg1: j_org_bukkit_permissions.Permissible): void;
}
export type PermissionManager = PermissionManagerMembers;
export interface PermissionManagerStatics {
}
