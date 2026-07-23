// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class com.destroystokyo.paper.util.SneakyThrow. */
export interface SneakyThrowMembers {
}
export type SneakyThrow = SneakyThrowMembers;
export interface SneakyThrowStatics {
  new(): SneakyThrow;
  sneaky(arg0: JavaOpaque<"java.lang.Throwable">): void;
}

/** JVM interface com.destroystokyo.paper.util.VersionFetcher. */
export interface VersionFetcherMembers {
  getCacheTime(): bigint;
  getVersionMessage(): j_net_kyori_adventure_text.Component;
  getVersionMessage(arg0: string): j_net_kyori_adventure_text.Component;
}
export type VersionFetcher = VersionFetcherMembers;
export interface VersionFetcherStatics {
}

/** JVM class com.destroystokyo.paper.util.VersionFetcher$DummyVersionFetcher. */
export interface VersionFetcher_DummyVersionFetcherMembers {
  readonly __javaSupertypes?: readonly [VersionFetcher];
  getCacheTime(): bigint;
  getVersionMessage(): j_net_kyori_adventure_text.Component;
}
export type VersionFetcher_DummyVersionFetcher = VersionFetcher_DummyVersionFetcherMembers & VersionFetcher;
export interface VersionFetcher_DummyVersionFetcherStatics {
  new(): VersionFetcher_DummyVersionFetcher;
}
