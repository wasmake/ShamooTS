// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM class org.bukkit.metadata.FixedMetadataValue. */
export interface FixedMetadataValueMembers {
  readonly __javaSupertypes?: readonly [LazyMetadataValue];
  invalidate(): void;
  value(): object | null;
}
export type FixedMetadataValue = FixedMetadataValueMembers & LazyMetadataValue;
export interface FixedMetadataValueStatics {
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: object | null): FixedMetadataValue;
}

/** JVM class org.bukkit.metadata.LazyMetadataValue. */
export interface LazyMetadataValueMembers {
  readonly __javaSupertypes?: readonly [MetadataValueAdapter];
  invalidate(): void;
  value(): object | null;
}
export type LazyMetadataValue = LazyMetadataValueMembers & MetadataValueAdapter;
export interface LazyMetadataValueStatics {
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: JavaOpaque<"java.util.concurrent.Callable", [object]>): LazyMetadataValue;
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: LazyMetadataValue_CacheStrategy, arg2: JavaOpaque<"java.util.concurrent.Callable", [object]>): LazyMetadataValue;
}

/** Live JVM enum org.bukkit.metadata.LazyMetadataValue$CacheStrategy; constants are host handles, not strings. */
export type LazyMetadataValue_CacheStrategy = JavaEnum<"org.bukkit.metadata.LazyMetadataValue$CacheStrategy", "CACHE_AFTER_FIRST_EVAL" | "CACHE_ETERNALLY" | "NEVER_CACHE"> & LazyMetadataValue_CacheStrategyMembers;
export interface LazyMetadataValue_CacheStrategyMembers {
}
export interface LazyMetadataValue_CacheStrategyStatics {
  readonly CACHE_AFTER_FIRST_EVAL: LazyMetadataValue_CacheStrategy;
  readonly CACHE_ETERNALLY: LazyMetadataValue_CacheStrategy;
  readonly NEVER_CACHE: LazyMetadataValue_CacheStrategy;
  valueOf(arg0: string): LazyMetadataValue_CacheStrategy;
  values(): Array<LazyMetadataValue_CacheStrategy>;
}

/** JVM interface org.bukkit.metadata.Metadatable. */
export interface MetadatableMembers {
  getMetadata(arg0: string): JavaList<MetadataValue>;
  hasMetadata(arg0: string): boolean;
  removeMetadata(arg0: string, arg1: j_org_bukkit_plugin.Plugin): void;
  setMetadata(arg0: string, arg1: MetadataValue): void;
}
export type Metadatable = MetadatableMembers;
export interface MetadatableStatics {
}

/** JVM class org.bukkit.metadata.MetadataConversionException. */
export interface MetadataConversionExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type MetadataConversionException = MetadataConversionExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface MetadataConversionExceptionStatics {
}

/** JVM class org.bukkit.metadata.MetadataEvaluationException. */
export interface MetadataEvaluationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type MetadataEvaluationException = MetadataEvaluationExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface MetadataEvaluationExceptionStatics {
}

/** JVM interface org.bukkit.metadata.MetadataStore. */
export interface MetadataStoreMembers<T = unknown> {
  getMetadata(arg0: T, arg1: string): JavaList<MetadataValue>;
  hasMetadata(arg0: T, arg1: string): boolean;
  invalidateAll(arg0: j_org_bukkit_plugin.Plugin): void;
  removeMetadata(arg0: T, arg1: string, arg2: j_org_bukkit_plugin.Plugin): void;
  setMetadata(arg0: T, arg1: string, arg2: MetadataValue): void;
}
export type MetadataStore<T = unknown> = MetadataStoreMembers<T>;
export interface MetadataStoreStatics {
}

/** JVM abstract org.bukkit.metadata.MetadataStoreBase. */
export interface MetadataStoreBaseMembers<T = unknown> {
  getMetadata(arg0: T, arg1: string): JavaList<MetadataValue>;
  hasMetadata(arg0: T, arg1: string): boolean;
  invalidateAll(arg0: j_org_bukkit_plugin.Plugin): void;
  removeAll(arg0: j_org_bukkit_plugin.Plugin): void;
  removeMetadata(arg0: T, arg1: string, arg2: j_org_bukkit_plugin.Plugin): void;
  setMetadata(arg0: T, arg1: string, arg2: MetadataValue): void;
}
export type MetadataStoreBase<T = unknown> = MetadataStoreBaseMembers<T>;
export interface MetadataStoreBaseStatics {
}

/** JVM interface org.bukkit.metadata.MetadataValue. */
export interface MetadataValueMembers {
  asBoolean(): boolean;
  asByte(): number;
  asDouble(): number;
  asFloat(): number;
  asInt(): number;
  asLong(): bigint;
  asShort(): number;
  asString(): string;
  getOwningPlugin(): j_org_bukkit_plugin.Plugin | null;
  invalidate(): void;
  value(): object | null;
}
export type MetadataValue = MetadataValueMembers;
export interface MetadataValueStatics {
}

/** JVM abstract org.bukkit.metadata.MetadataValueAdapter. */
export interface MetadataValueAdapterMembers {
  readonly __javaSupertypes?: readonly [MetadataValue];
  asBoolean(): boolean;
  asByte(): number;
  asDouble(): number;
  asFloat(): number;
  asInt(): number;
  asLong(): bigint;
  asShort(): number;
  asString(): string;
  getOwningPlugin(): j_org_bukkit_plugin.Plugin | null;
}
export type MetadataValueAdapter = MetadataValueAdapterMembers & MetadataValue;
export interface MetadataValueAdapterStatics {
}
