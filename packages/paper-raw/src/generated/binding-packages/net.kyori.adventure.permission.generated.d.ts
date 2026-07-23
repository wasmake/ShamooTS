// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_pointer from './net.kyori.adventure.pointer.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.permission.PermissionChecker. */
export interface PermissionCheckerMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<string>];
  test(arg0: object): boolean;
  test(arg0: string): boolean;
  value(arg0: string): j_net_kyori_adventure_util.TriState;
}
export type PermissionChecker = PermissionCheckerMembers & JavaPredicate<string>;
export interface PermissionCheckerStatics {
  readonly POINTER: j_net_kyori_adventure_pointer.Pointer<PermissionChecker>;
  always(arg0: j_net_kyori_adventure_util.TriState): PermissionChecker;
}
