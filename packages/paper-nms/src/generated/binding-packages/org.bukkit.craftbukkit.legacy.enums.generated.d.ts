// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_craftbukkit_util from './org.bukkit.craftbukkit.util.generated.js';

/** Live JVM enum org.bukkit.craftbukkit.legacy.enums.DummyEnum; constants are host handles, not strings. */
export type DummyEnum = JavaEnum<"org.bukkit.craftbukkit.legacy.enums.DummyEnum", never> & DummyEnumMembers;
export interface DummyEnumMembers {
}
export interface DummyEnumStatics {
  valueOf(arg0: string): DummyEnum;
  values(): Array<DummyEnum>;
}

/** JVM class org.bukkit.craftbukkit.legacy.enums.EnumEvil. */
export interface EnumEvilMembers {
}
export type EnumEvil = EnumEvilMembers;
export interface EnumEvilStatics {
  new(): EnumEvil;
  compareTo(arg0: object, arg1: object): number;
  describeConstable(arg0: object): JavaOptional<JavaOpaque<"java.lang.Enum$EnumDesc">>;
  getDeclaringClass(arg0: object): JavaClass<object>;
  getEnumConstants(arg0: JavaClass<object>): Array<object>;
  getField(arg0: object): JavaOpaque<"java.lang.reflect.Field">;
  getIfPresent(arg0: JavaClass<object>, arg1: string, arg2: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"com.google.common.base.Optional">;
  getRegistry(arg0: JavaClass<object>): JavaOpaque<"org.bukkit.Registry", [object]>;
  getRegistryData(arg0: JavaClass<object>): EnumEvil_LegacyRegistryData;
  immutableEnumSet(arg0: Iterable<object>): JavaOpaque<"com.google.common.collect.ImmutableSet", [object]>;
  immutableEnumSet(arg0: object, ...arg1: Array<object>): JavaOpaque<"com.google.common.collect.ImmutableSet", [object]>;
  name(arg0: object): string;
  newEnumMap(arg0: JavaClass<object>): ImposterEnumMap;
  newEnumMap(arg0: JavaMap<object>): ImposterEnumMap;
  newEnumSet(arg0: Iterable<object>, arg1: JavaClass<object>): ImposterEnumSet;
  ordinal(arg0: object): number;
  stringConverter(arg0: JavaClass<object>, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"com.google.common.base.Converter">;
  toImmutableEnumSet(): JavaOpaque<"java.util.stream.Collector", [object, object, object]>;
  toString(arg0: object): string;
  valueOf(arg0: JavaClass<object>, arg1: string, arg2: j_org_bukkit_craftbukkit_util.ApiVersion): object;
}

/** JVM record org.bukkit.craftbukkit.legacy.enums.EnumEvil$LegacyRegistryData. */
export interface EnumEvil_LegacyRegistryDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  function(): JavaFunction<string, object>;
  hashCode(): number;
  registry(): JavaOpaque<"org.bukkit.Registry", [object]>;
  toString(): string;
}
export type EnumEvil_LegacyRegistryData = EnumEvil_LegacyRegistryDataMembers & JavaOpaque<"java.lang.Record">;
export interface EnumEvil_LegacyRegistryDataStatics {
  new(arg0: JavaOpaque<"org.bukkit.Registry", [object]>, arg1: JavaFunction<string, object>): EnumEvil_LegacyRegistryData;
}

/** JVM class org.bukkit.craftbukkit.legacy.enums.ImposterEnumMap. */
export interface ImposterEnumMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractMap", [object, object]>];
  clear(): void;
  clone(): ImposterEnumMap;
  containsKey(arg0: object): boolean;
  containsValue(arg0: object): boolean;
  entrySet(): JavaSet<JavaMapEntry<object, object>>;
  equals(arg0: object): boolean;
  get(arg0: object): object;
  hashCode(): number;
  keySet(): JavaSet<object>;
  put(arg0: object, arg1: object): object;
  putAll(arg0: JavaMap<object, object>): void;
  remove(arg0: object): object;
  size(): number;
  values(): JavaCollection<object>;
}
export type ImposterEnumMap = ImposterEnumMapMembers & JavaOpaque<"java.util.AbstractMap", [object, object]>;
export interface ImposterEnumMapStatics {
  new(arg0: JavaClass<object>): ImposterEnumMap;
  new(arg0: JavaOpaque<"java.util.EnumMap">): ImposterEnumMap;
  new(arg0: JavaMap<object>): ImposterEnumMap;
}

/** JVM class org.bukkit.craftbukkit.legacy.enums.ImposterEnumSet. */
export interface ImposterEnumSetMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractSet", [object]>];
  add(arg0: object): boolean;
  addAll(arg0: JavaCollection<object>): boolean;
  clear(): void;
  clone(): ImposterEnumSet;
  contains(arg0: object): boolean;
  containsAll(arg0: JavaCollection<object>): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [object]>;
  remove(arg0: object): boolean;
  removeAll(arg0: JavaCollection<object>): boolean;
  retainAll(arg0: JavaCollection<object>): boolean;
  size(): number;
  toArray(): Array<object>;
  toArray<T>(arg0: Array<T>): Array<T>;
  toString(): string;
}
export type ImposterEnumSet = ImposterEnumSetMembers & JavaOpaque<"java.util.AbstractSet", [object]>;
export interface ImposterEnumSetStatics {
  allOf(arg0: JavaClass<object>): ImposterEnumSet;
  complementOf(arg0: JavaSet<object>): ImposterEnumSet;
  copyOf(arg0: JavaCollection<object>): ImposterEnumSet;
  copyOf(arg0: JavaSet<object>): ImposterEnumSet;
  noneOf(arg0: JavaClass<object>): ImposterEnumSet;
  of(arg0: object): ImposterEnumSet;
  of(arg0: object, arg1: object): ImposterEnumSet;
  of(arg0: object, arg1: object, arg2: object): ImposterEnumSet;
  of(arg0: object, arg1: object, arg2: object, arg3: object): ImposterEnumSet;
  of(arg0: object, arg1: object, arg2: object, arg3: object, arg4: object): ImposterEnumSet;
  of(arg0: object, ...arg1: Array<object>): ImposterEnumSet;
  range(arg0: object, arg1: object): ImposterEnumSet;
}
