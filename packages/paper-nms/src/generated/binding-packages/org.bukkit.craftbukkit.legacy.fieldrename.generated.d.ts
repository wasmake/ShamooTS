// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_craftbukkit_util from './org.bukkit.craftbukkit.util.generated.js';

/** JVM record org.bukkit.craftbukkit.legacy.fieldrename.FieldRenameData. */
export interface FieldRenameDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  getReplacement(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.NamespacedKey">;
  getReplacement(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  hashCode(): number;
  keyRenameData(): JavaOpaque<"org.bukkit.craftbukkit.legacy.fieldrename.FieldRenameData$RenameData", [JavaOpaque<"org.bukkit.NamespacedKey">]>;
  renameData(): JavaOpaque<"org.bukkit.craftbukkit.legacy.fieldrename.FieldRenameData$RenameData", [string]>;
  toString(): string;
}
export type FieldRenameData = FieldRenameDataMembers & JavaOpaque<"java.lang.Record">;
export interface FieldRenameDataStatics {
  new(arg0: JavaOpaque<"org.bukkit.craftbukkit.legacy.fieldrename.FieldRenameData$RenameData", [string]>, arg1: JavaOpaque<"org.bukkit.craftbukkit.legacy.fieldrename.FieldRenameData$RenameData", [JavaOpaque<"org.bukkit.NamespacedKey">]>): FieldRenameData;
}

/** JVM class org.bukkit.craftbukkit.legacy.fieldrename.FieldRenameData$Builder. */
export interface FieldRenameData_BuilderMembers {
  build(): FieldRenameData;
  change(arg0: string, arg1: string): FieldRenameData_Builder;
  forAllVersions(): FieldRenameData_Builder;
  forVersionsBefore(arg0: j_org_bukkit_craftbukkit_util.ApiVersion): FieldRenameData_Builder;
  withKeyRename(): FieldRenameData_Builder;
}
export type FieldRenameData_Builder = FieldRenameData_BuilderMembers;
export interface FieldRenameData_BuilderStatics {
  new(): FieldRenameData_Builder;
  newBuilder(): FieldRenameData_Builder;
}
