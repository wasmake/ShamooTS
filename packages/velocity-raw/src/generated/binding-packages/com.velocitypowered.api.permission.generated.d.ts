// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_permission from './net.kyori.adventure.permission.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface com.velocitypowered.api.permission.PermissionFunction. */
export interface PermissionFunctionMembers {
  getPermissionValue(arg0: string): Tristate;
}
export type PermissionFunction = PermissionFunctionMembers;
export interface PermissionFunctionStatics {
  readonly ALWAYS_FALSE: PermissionFunction;
  readonly ALWAYS_TRUE: PermissionFunction;
  readonly ALWAYS_UNDEFINED: PermissionFunction;
}

/** JVM interface com.velocitypowered.api.permission.PermissionProvider. */
export interface PermissionProviderMembers {
  createFunction(arg0: PermissionSubject): PermissionFunction;
}
export type PermissionProvider = PermissionProviderMembers;
export interface PermissionProviderStatics {
}

/** JVM interface com.velocitypowered.api.permission.PermissionSubject. */
export interface PermissionSubjectMembers {
  getPermissionChecker(): j_net_kyori_adventure_permission.PermissionChecker;
  getPermissionValue(arg0: string): Tristate;
  hasPermission(arg0: string): boolean;
}
export type PermissionSubject = PermissionSubjectMembers;
export interface PermissionSubjectStatics {
}

/** Live JVM enum com.velocitypowered.api.permission.Tristate; constants are host handles, not strings. */
export type Tristate = JavaEnum<"com.velocitypowered.api.permission.Tristate", "FALSE" | "TRUE" | "UNDEFINED"> & TristateMembers;
export interface TristateMembers {
  asBoolean(): boolean;
  toAdventureTriState(): j_net_kyori_adventure_util.TriState;
}
export interface TristateStatics {
  readonly FALSE: Tristate;
  readonly TRUE: Tristate;
  readonly UNDEFINED: Tristate;
  fromBoolean(arg0: boolean): Tristate;
  fromNullableBoolean(arg0: boolean): Tristate | null;
  fromOptionalBoolean(arg0: JavaOptional<boolean>): Tristate;
  valueOf(arg0: string): Tristate;
  values(): Array<Tristate>;
}
