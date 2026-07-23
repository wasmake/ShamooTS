// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class io.papermc.paper.util.JarManifests. */
export interface JarManifestsMembers {
}
export type JarManifests = JarManifestsMembers;
export interface JarManifestsStatics {
  manifest(arg0: JavaClass<object>): JavaOpaque<"java.util.jar.Manifest"> | null;
}

/** JVM class io.papermc.paper.util.Tick. */
export interface TickMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.time.temporal.TemporalUnit">];
  addTo<R /* extends JavaOpaque<"java.time.temporal.Temporal"> */>(arg0: R, arg1: bigint): R;
  between(arg0: JavaOpaque<"java.time.temporal.Temporal">, arg1: JavaOpaque<"java.time.temporal.Temporal">): bigint;
  fromDuration(arg0: JavaOpaque<"java.time.Duration">): number;
  getDuration(): JavaOpaque<"java.time.Duration">;
  isDateBased(): boolean;
  isDurationEstimated(): boolean;
  isTimeBased(): boolean;
}
export type Tick = TickMembers & JavaOpaque<"java.time.temporal.TemporalUnit">;
export interface TickStatics {
  of(arg0: bigint): JavaOpaque<"java.time.Duration">;
  tick(): Tick;
}

/** JVM class io.papermc.paper.util.TransformingRandomAccessList. */
export interface TransformingRandomAccessListMembers<F = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractList", [T]>, JavaOpaque<"java.util.RandomAccess">];
  add(arg0: number, arg1: T): void;
  clear(): void;
  get(arg0: number): T;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  listIterator(arg0: number): JavaOpaque<"java.util.ListIterator", [T]>;
  remove(arg0: number): T;
  removeIf(arg0: JavaPredicate<T>): boolean;
  set(arg0: number, arg1: T): T;
  size(): number;
}
export type TransformingRandomAccessList<F = unknown, T = unknown> = TransformingRandomAccessListMembers<F, T> & JavaOpaque<"java.util.AbstractList", [T]> & JavaOpaque<"java.util.RandomAccess">;
export interface TransformingRandomAccessListStatics {
  new<F, T>(arg0: JavaList<F>, arg1: JavaFunction<F, T>, arg2: JavaFunction<T, F>): TransformingRandomAccessList<F, T>;
}
