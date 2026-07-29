// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_permission from './com.velocitypowered.api.permission.generated.js';

/** JVM class com.velocitypowered.api.event.permission.PermissionsSetupEvent. */
export interface PermissionsSetupEventMembers {
  createFunction(arg0: j_com_velocitypowered_api_permission.PermissionSubject): j_com_velocitypowered_api_permission.PermissionFunction;
  getProvider(): j_com_velocitypowered_api_permission.PermissionProvider;
  getSubject(): j_com_velocitypowered_api_permission.PermissionSubject;
  setProvider(arg0: j_com_velocitypowered_api_permission.PermissionProvider | null): void;
  toString(): string;
}
export type PermissionsSetupEvent = PermissionsSetupEventMembers;
export interface PermissionsSetupEventStatics {
  new(arg0: j_com_velocitypowered_api_permission.PermissionSubject, arg1: j_com_velocitypowered_api_permission.PermissionProvider): PermissionsSetupEvent;
}
