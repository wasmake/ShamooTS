// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface io.papermc.paper.command.brigadier.argument.range.DoubleRangeProvider. */
export interface DoubleRangeProviderMembers {
  readonly __javaSupertypes?: readonly [RangeProvider<number>];
}
export type DoubleRangeProvider = DoubleRangeProviderMembers & RangeProvider<number>;
export interface DoubleRangeProviderStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.range.IntegerRangeProvider. */
export interface IntegerRangeProviderMembers {
  readonly __javaSupertypes?: readonly [RangeProvider<number>];
}
export type IntegerRangeProvider = IntegerRangeProviderMembers & RangeProvider<number>;
export interface IntegerRangeProviderStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.range.RangeProvider. */
export interface RangeProviderMembers<T /* extends JavaOpaque<"java.lang.Comparable", [object]> */ = unknown> {
  range(): JavaOpaque<"com.google.common.collect.Range", [T]>;
}
export type RangeProvider<T /* extends JavaOpaque<"java.lang.Comparable", [object]> */ = unknown> = RangeProviderMembers<T>;
export interface RangeProviderStatics {
}
