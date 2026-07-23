// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface org.bukkit.inventory.meta.tags.CustomItemTagContainer. */
export interface CustomItemTagContainerMembers {
  getAdapterContext(): ItemTagAdapterContext;
  getCustomTag<T, Z>(arg0: j_org_bukkit.NamespacedKey, arg1: ItemTagType<T, Z>): Z | null;
  hasCustomTag<T, Z>(arg0: j_org_bukkit.NamespacedKey, arg1: ItemTagType<T, Z>): boolean;
  isEmpty(): boolean;
  removeCustomTag(arg0: j_org_bukkit.NamespacedKey): void;
  setCustomTag<T, Z>(arg0: j_org_bukkit.NamespacedKey, arg1: ItemTagType<T, Z>, arg2: Z): void;
}
export type CustomItemTagContainer = CustomItemTagContainerMembers;
export interface CustomItemTagContainerStatics {
}

/** JVM interface org.bukkit.inventory.meta.tags.ItemTagAdapterContext. */
export interface ItemTagAdapterContextMembers {
  newTagContainer(): CustomItemTagContainer;
}
export type ItemTagAdapterContext = ItemTagAdapterContextMembers;
export interface ItemTagAdapterContextStatics {
}

/** JVM interface org.bukkit.inventory.meta.tags.ItemTagType. */
export interface ItemTagTypeMembers<T = unknown, Z = unknown> {
  fromPrimitive(arg0: T, arg1: ItemTagAdapterContext): Z;
  getComplexType(): JavaClass<Z>;
  getPrimitiveType(): JavaClass<T>;
  toPrimitive(arg0: Z, arg1: ItemTagAdapterContext): T;
}
export type ItemTagType<T = unknown, Z = unknown> = ItemTagTypeMembers<T, Z>;
export interface ItemTagTypeStatics {
  readonly BYTE: ItemTagType<number, number>;
  readonly BYTE_ARRAY: ItemTagType<Array<number>, Array<number>>;
  readonly DOUBLE: ItemTagType<number, number>;
  readonly FLOAT: ItemTagType<number, number>;
  readonly INTEGER: ItemTagType<number, number>;
  readonly INTEGER_ARRAY: ItemTagType<Array<number>, Array<number>>;
  readonly LONG: ItemTagType<bigint, bigint>;
  readonly LONG_ARRAY: ItemTagType<Array<bigint>, Array<bigint>>;
  readonly SHORT: ItemTagType<number, number>;
  readonly STRING: ItemTagType<string, string>;
  readonly TAG_CONTAINER: ItemTagType<CustomItemTagContainer, CustomItemTagContainer>;
}

/** JVM class org.bukkit.inventory.meta.tags.ItemTagType$PrimitiveTagType. */
export interface ItemTagType_PrimitiveTagTypeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [ItemTagType<T, T>];
  fromPrimitive(arg0: T, arg1: ItemTagAdapterContext): T;
  getComplexType(): JavaClass<T>;
  getPrimitiveType(): JavaClass<T>;
  toPrimitive(arg0: T, arg1: ItemTagAdapterContext): T;
}
export type ItemTagType_PrimitiveTagType<T = unknown> = ItemTagType_PrimitiveTagTypeMembers<T> & ItemTagType<T, T>;
export interface ItemTagType_PrimitiveTagTypeStatics {
}
