// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';

/** JVM interface io.papermc.paper.registry.holder.RegistryHolder. */
export interface RegistryHolderMembers<API = unknown, ENTRY = unknown> {
}
export type RegistryHolder<API = unknown, ENTRY = unknown> = RegistryHolderMembers<API, ENTRY>;
export interface RegistryHolderStatics {
}

/** JVM interface io.papermc.paper.registry.holder.RegistryHolder$Inlined. */
export interface RegistryHolder_InlinedMembers<API = unknown, ENTRY = unknown> {
  readonly __javaSupertypes?: readonly [RegistryHolder<API, ENTRY>];
  entry(): ENTRY;
}
export type RegistryHolder_Inlined<API = unknown, ENTRY = unknown> = RegistryHolder_InlinedMembers<API, ENTRY> & RegistryHolder<API, ENTRY>;
export interface RegistryHolder_InlinedStatics {
}

/** JVM interface io.papermc.paper.registry.holder.RegistryHolder$Reference. */
export interface RegistryHolder_ReferenceMembers<API = unknown, ENTRY = unknown> {
  readonly __javaSupertypes?: readonly [RegistryHolder<API, ENTRY>];
  key(): j_io_papermc_paper_registry.TypedKey<API>;
}
export type RegistryHolder_Reference<API = unknown, ENTRY = unknown> = RegistryHolder_ReferenceMembers<API, ENTRY> & RegistryHolder<API, ENTRY>;
export interface RegistryHolder_ReferenceStatics {
}
