// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface io.papermc.paper.registry.set.RegistryKeySet. */
export interface RegistryKeySetMembers<T /* extends j_org_bukkit.Keyed */ = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<j_io_papermc_paper_registry.TypedKey<T>>, RegistrySet<T>];
  contains(arg0: j_io_papermc_paper_registry.TypedKey<T>): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [j_io_papermc_paper_registry.TypedKey<T>]>;
  resolve(arg0: j_org_bukkit.Registry<T>): JavaCollection<T>;
  size(): number;
  values(): JavaCollection<j_io_papermc_paper_registry.TypedKey<T>>;
}
export type RegistryKeySet<T /* extends j_org_bukkit.Keyed */ = unknown> = RegistryKeySetMembers<T> & Iterable<j_io_papermc_paper_registry.TypedKey<T>> & RegistrySet<T>;
export interface RegistryKeySetStatics {
}

/** JVM interface io.papermc.paper.registry.set.RegistrySet. */
export interface RegistrySetMembers<T = unknown> {
  isEmpty(): boolean;
  registryKey(): j_io_papermc_paper_registry.RegistryKey<T>;
  size(): number;
}
export type RegistrySet<T = unknown> = RegistrySetMembers<T>;
export interface RegistrySetStatics {
  keySet<T /* extends j_org_bukkit.Keyed */>(arg0: j_io_papermc_paper_registry.RegistryKey<T>, arg1: Iterable<j_io_papermc_paper_registry.TypedKey<T>>): RegistryKeySet<T>;
  keySet<T /* extends j_org_bukkit.Keyed */>(arg0: j_io_papermc_paper_registry.RegistryKey<T>, ...arg1: Array<j_io_papermc_paper_registry.TypedKey<T>>): RegistryKeySet<T>;
  keySetFromValues<T /* extends j_org_bukkit.Keyed */>(arg0: j_io_papermc_paper_registry.RegistryKey<T>, arg1: Iterable<T>): RegistryKeySet<T>;
  valueSet<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>, arg1: Iterable<T>): RegistryValueSet<T>;
}

/** JVM interface io.papermc.paper.registry.set.RegistryValueSet. */
export interface RegistryValueSetMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<T>, RegistrySet<T>];
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  size(): number;
  values(): JavaCollection<T>;
}
export type RegistryValueSet<T = unknown> = RegistryValueSetMembers<T> & Iterable<T> & RegistrySet<T>;
export interface RegistryValueSetStatics {
}

/** JVM interface io.papermc.paper.registry.set.RegistryValueSetBuilder. */
export interface RegistryValueSetBuilderMembers<API = unknown, ENTRY_BUILDER /* extends j_io_papermc_paper_registry.RegistryBuilder<API> */ = unknown> {
  add(arg0: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<API, ENTRY_BUILDER>>): RegistryValueSetBuilder<API, ENTRY_BUILDER>;
  build(): RegistryValueSet<API>;
}
export type RegistryValueSetBuilder<API = unknown, ENTRY_BUILDER /* extends j_io_papermc_paper_registry.RegistryBuilder<API> */ = unknown> = RegistryValueSetBuilderMembers<API, ENTRY_BUILDER>;
export interface RegistryValueSetBuilderStatics {
}
