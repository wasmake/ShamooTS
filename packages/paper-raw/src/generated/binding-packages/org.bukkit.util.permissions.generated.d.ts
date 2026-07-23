// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_permissions from './org.bukkit.permissions.generated.js';

/** JVM class org.bukkit.util.permissions.BroadcastPermissions. */
export interface BroadcastPermissionsMembers {
}
export type BroadcastPermissions = BroadcastPermissionsMembers;
export interface BroadcastPermissionsStatics {
  registerPermissions(arg0: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission;
}

/** JVM class org.bukkit.util.permissions.CommandPermissions. */
export interface CommandPermissionsMembers {
}
export type CommandPermissions = CommandPermissionsMembers;
export interface CommandPermissionsStatics {
  registerPermissions(arg0: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission;
}

/** JVM class org.bukkit.util.permissions.DefaultPermissions. */
export interface DefaultPermissionsMembers {
}
export type DefaultPermissions = DefaultPermissionsMembers;
export interface DefaultPermissionsStatics {
  registerCorePermissions(): void;
  registerPermission(arg0: string, arg1: string | null): j_org_bukkit_permissions.Permission | null;
  registerPermission(arg0: string, arg1: string | null, arg2: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission | null;
  registerPermission(arg0: string, arg1: string | null, arg2: j_org_bukkit_permissions.PermissionDefault | null): j_org_bukkit_permissions.Permission | null;
  registerPermission(arg0: string, arg1: string | null, arg2: j_org_bukkit_permissions.PermissionDefault | null, arg3: JavaMap<string, boolean> | null): j_org_bukkit_permissions.Permission | null;
  registerPermission(arg0: string, arg1: string | null, arg2: j_org_bukkit_permissions.PermissionDefault | null, arg3: JavaMap<string, boolean> | null, arg4: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission | null;
  registerPermission(arg0: string, arg1: string | null, arg2: j_org_bukkit_permissions.PermissionDefault | null, arg3: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission | null;
  registerPermission(arg0: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission;
  registerPermission(arg0: j_org_bukkit_permissions.Permission, arg1: j_org_bukkit_permissions.Permission): j_org_bukkit_permissions.Permission;
  registerPermission(arg0: j_org_bukkit_permissions.Permission, arg1: boolean): j_org_bukkit_permissions.Permission;
}
