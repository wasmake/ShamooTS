// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM interface org.bukkit.permissions.Permissible. */
export interface PermissibleMembers {
  readonly __javaSupertypes?: readonly [ServerOperator];
  addAttachment(arg0: j_org_bukkit_plugin.Plugin): PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: number): PermissionAttachment | null;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: boolean): PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment | null;
  getEffectivePermissions(): JavaSet<PermissionAttachmentInfo>;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: Permission): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: Permission): boolean;
  permissionValue(arg0: string): j_net_kyori_adventure_util.TriState;
  permissionValue(arg0: Permission): j_net_kyori_adventure_util.TriState;
  recalculatePermissions(): void;
  removeAttachment(arg0: PermissionAttachment): void;
}
export type Permissible = PermissibleMembers & ServerOperator;
export interface PermissibleStatics {
}

/** JVM class org.bukkit.permissions.PermissibleBase. */
export interface PermissibleBaseMembers {
  readonly __javaSupertypes?: readonly [Permissible];
  addAttachment(arg0: j_org_bukkit_plugin.Plugin): PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: number): PermissionAttachment | null;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: boolean): PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment | null;
  clearPermissions(): void;
  getEffectivePermissions(): JavaSet<PermissionAttachmentInfo>;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: Permission): boolean;
  isOp(): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: Permission): boolean;
  recalculatePermissions(): void;
  removeAttachment(arg0: PermissionAttachment): void;
  setOp(arg0: boolean): void;
}
export type PermissibleBase = PermissibleBaseMembers & Permissible;
export interface PermissibleBaseStatics {
  new(arg0: ServerOperator | null): PermissibleBase;
}

/** JVM class org.bukkit.permissions.Permission. */
export interface PermissionMembers {
  addParent(arg0: string, arg1: boolean): Permission;
  addParent(arg0: Permission, arg1: boolean): void;
  getChildren(): JavaMap<string, boolean>;
  getDefault(): PermissionDefault;
  getDescription(): string;
  getName(): string;
  getPermissibles(): JavaSet<Permissible>;
  recalculatePermissibles(): void;
  setDefault(arg0: PermissionDefault): void;
  setDescription(arg0: string | null): void;
}
export type Permission = PermissionMembers;
export interface PermissionStatics {
  new(arg0: string): Permission;
  new(arg0: string, arg1: string | null): Permission;
  new(arg0: string, arg1: string | null, arg2: JavaMap<string, boolean> | null): Permission;
  new(arg0: string, arg1: string | null, arg2: PermissionDefault | null): Permission;
  new(arg0: string, arg1: string | null, arg2: PermissionDefault | null, arg3: JavaMap<string, boolean> | null): Permission;
  new(arg0: string, arg1: JavaMap<string, boolean> | null): Permission;
  new(arg0: string, arg1: PermissionDefault | null): Permission;
  new(arg0: string, arg1: PermissionDefault | null, arg2: JavaMap<string, boolean> | null): Permission;
  readonly DEFAULT_PERMISSION: PermissionDefault;
  loadPermission(arg0: string, arg1: JavaMap<string, object>): Permission;
  loadPermission(arg0: string, arg1: JavaMap<object, object>, arg2: PermissionDefault | null, arg3: JavaList<Permission> | null): Permission;
  loadPermissions(arg0: JavaMap<object, object>, arg1: string, arg2: PermissionDefault | null): JavaList<Permission>;
}

/** JVM class org.bukkit.permissions.PermissionAttachment. */
export interface PermissionAttachmentMembers {
  getPermissible(): Permissible;
  getPermissions(): JavaMap<string, boolean>;
  getPlugin(): j_org_bukkit_plugin.Plugin;
  getRemovalCallback(): PermissionRemovedExecutor | null;
  remove(): boolean;
  setPermission(arg0: string, arg1: boolean): void;
  setPermission(arg0: Permission, arg1: boolean): void;
  setRemovalCallback(arg0: PermissionRemovedExecutor | null): void;
  unsetPermission(arg0: string): void;
  unsetPermission(arg0: Permission): void;
}
export type PermissionAttachment = PermissionAttachmentMembers;
export interface PermissionAttachmentStatics {
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: Permissible): PermissionAttachment;
}

/** JVM class org.bukkit.permissions.PermissionAttachmentInfo. */
export interface PermissionAttachmentInfoMembers {
  getAttachment(): PermissionAttachment | null;
  getPermissible(): Permissible;
  getPermission(): string;
  getValue(): boolean;
}
export type PermissionAttachmentInfo = PermissionAttachmentInfoMembers;
export interface PermissionAttachmentInfoStatics {
  new(arg0: Permissible, arg1: string, arg2: PermissionAttachment | null, arg3: boolean): PermissionAttachmentInfo;
}

/** Live JVM enum org.bukkit.permissions.PermissionDefault; constants are host handles, not strings. */
export type PermissionDefault = JavaEnum<"org.bukkit.permissions.PermissionDefault", "FALSE" | "NOT_OP" | "OP" | "TRUE"> & PermissionDefaultMembers;
export interface PermissionDefaultMembers {
  getValue(arg0: boolean): boolean;
  toString(): string;
}
export interface PermissionDefaultStatics {
  readonly FALSE: PermissionDefault;
  readonly NOT_OP: PermissionDefault;
  readonly OP: PermissionDefault;
  readonly TRUE: PermissionDefault;
  getByName(arg0: string): PermissionDefault | null;
  valueOf(arg0: string): PermissionDefault;
  values(): Array<PermissionDefault>;
}

/** JVM interface org.bukkit.permissions.PermissionRemovedExecutor. */
export interface PermissionRemovedExecutorMembers {
  attachmentRemoved(arg0: PermissionAttachment): void;
}
export type PermissionRemovedExecutor = PermissionRemovedExecutorMembers;
export interface PermissionRemovedExecutorStatics {
}

/** JVM interface org.bukkit.permissions.ServerOperator. */
export interface ServerOperatorMembers {
  isOp(): boolean;
  setOp(arg0: boolean): void;
}
export type ServerOperator = ServerOperatorMembers;
export interface ServerOperatorStatics {
}
