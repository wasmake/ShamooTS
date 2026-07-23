// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.bukkit.craftbukkit.inventory.tags.DeprecatedContainerTagType. */
export interface DeprecatedContainerTagTypeMembers<C = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.persistence.PersistentDataType", [JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">, C]>];
  fromPrimitive(arg0: object, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): object;
  fromPrimitive(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): C;
  getComplexType(): JavaClass<C>;
  getPrimitiveType(): JavaClass<JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">>;
  toPrimitive(arg0: object, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): object;
  toPrimitive(arg0: C, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
}
export type DeprecatedContainerTagType<C = unknown> = DeprecatedContainerTagTypeMembers<C> & JavaOpaque<"org.bukkit.persistence.PersistentDataType", [JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">, C]>;
export interface DeprecatedContainerTagTypeStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.tags.DeprecatedCustomTagContainer. */
export interface DeprecatedCustomTagContainerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">];
  getAdapterContext(): JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagAdapterContext">;
  getCustomTag<T, Z>(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagType", [T, Z]>): Z;
  getWrapped(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  hasCustomTag<T, Z>(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagType", [T, Z]>): boolean;
  isEmpty(): boolean;
  removeCustomTag(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setCustomTag<T, Z>(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagType", [T, Z]>, arg2: Z): void;
}
export type DeprecatedCustomTagContainer = DeprecatedCustomTagContainerMembers & JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
export interface DeprecatedCustomTagContainerStatics {
  new(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">): DeprecatedCustomTagContainer;
}

/** JVM class org.bukkit.craftbukkit.inventory.tags.DeprecatedItemAdapterContext. */
export interface DeprecatedItemAdapterContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagAdapterContext">];
  newTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
}
export type DeprecatedItemAdapterContext = DeprecatedItemAdapterContextMembers & JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagAdapterContext">;
export interface DeprecatedItemAdapterContextStatics {
  new(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): DeprecatedItemAdapterContext;
}

/** JVM class org.bukkit.craftbukkit.inventory.tags.DeprecatedItemTagType. */
export interface DeprecatedItemTagTypeMembers<P = unknown, C = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.persistence.PersistentDataType", [P, C]>];
  fromPrimitive(arg0: P, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): C;
  getComplexType(): JavaClass<C>;
  getPrimitiveType(): JavaClass<P>;
  toPrimitive(arg0: C, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">): P;
}
export type DeprecatedItemTagType<P = unknown, C = unknown> = DeprecatedItemTagTypeMembers<P, C> & JavaOpaque<"org.bukkit.persistence.PersistentDataType", [P, C]>;
export interface DeprecatedItemTagTypeStatics {
  new<P, C>(arg0: JavaOpaque<"org.bukkit.inventory.meta.tags.ItemTagType", [P, C]>): DeprecatedItemTagType<P, C>;
}
