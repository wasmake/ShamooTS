// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface io.papermc.paper.registry.tag.Tag. */
export interface TagMembers<T /* extends j_org_bukkit.Keyed */ = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_registry_set.RegistryKeySet<T>];
  tagKey(): TagKey<T>;
}
export type Tag<T /* extends j_org_bukkit.Keyed */ = unknown> = TagMembers<T> & j_io_papermc_paper_registry_set.RegistryKeySet<T>;
export interface TagStatics {
}

/** JVM interface io.papermc.paper.registry.tag.TagKey. */
export interface TagKeyMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Keyed">];
  registryKey(): j_io_papermc_paper_registry.RegistryKey<T>;
}
export type TagKey<T = unknown> = TagKeyMembers<T> & JavaOpaque<"net.kyori.adventure.key.Keyed">;
export interface TagKeyStatics {
  create<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>, arg1: string): TagKey<T>;
  create<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): TagKey<T>;
}
