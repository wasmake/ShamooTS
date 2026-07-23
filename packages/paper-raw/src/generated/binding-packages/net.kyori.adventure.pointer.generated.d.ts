// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.pointer.Pointer. */
export interface PointerMembers<V = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  type(): JavaClass<V>;
}
export type Pointer<V = unknown> = PointerMembers<V> & JavaOpaque<"net.kyori.examination.Examinable">;
export interface PointerStatics {
  pointer<V>(arg0: JavaClass<V>, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): Pointer<V>;
}

/** JVM interface net.kyori.adventure.pointer.Pointered. */
export interface PointeredMembers {
  get<T>(arg0: Pointer<T>): JavaOptional<T>;
  getOrDefault<T>(arg0: Pointer<T>, arg1: T | null): T | null;
  getOrDefaultFrom<T>(arg0: Pointer<T>, arg1: JavaSupplier<T>): T;
  pointers(): Pointers;
}
export type Pointered = PointeredMembers;
export interface PointeredStatics {
}

/** JVM interface net.kyori.adventure.pointer.Pointers. */
export interface PointersMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<Pointers, Pointers_Builder>];
  get<T>(arg0: Pointer<T>): JavaOptional<T>;
  getOrDefault<T>(arg0: Pointer<T>, arg1: T | null): T | null;
  getOrDefaultFrom<T>(arg0: Pointer<T>, arg1: JavaSupplier<T>): T;
  supports<T>(arg0: Pointer<T>): boolean;
  toBuilder(): Pointers_Builder;
}
export type Pointers = PointersMembers;
export interface PointersStatics {
  builder(): Pointers_Builder;
  empty(): Pointers;
}

/** JVM interface net.kyori.adventure.pointer.Pointers$Builder. */
export interface Pointers_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<Pointers>, j_net_kyori_adventure_util.Buildable_Builder<Pointers>];
  build(): Pointers;
  withDynamic<T>(arg0: Pointer<T>, arg1: JavaSupplier<T>): Pointers_Builder | null;
  withStatic<T>(arg0: Pointer<T>, arg1: T | null): Pointers_Builder | null;
}
export type Pointers_Builder = Pointers_BuilderMembers;
export interface Pointers_BuilderStatics {
}

/** JVM interface net.kyori.adventure.pointer.PointersSupplier. */
export interface PointersSupplierMembers<T = unknown> {
  resolver<P>(arg0: Pointer<P>): JavaFunction<T, P> | null;
  supports<P>(arg0: Pointer<P>): boolean;
  view(arg0: T): Pointers;
}
export type PointersSupplier<T = unknown> = PointersSupplierMembers<T>;
export interface PointersSupplierStatics {
  builder<T>(): PointersSupplier_Builder<T>;
}

/** JVM interface net.kyori.adventure.pointer.PointersSupplier$Builder. */
export interface PointersSupplier_BuilderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<PointersSupplier<T>>];
  parent(arg0: PointersSupplier<T> | null): PointersSupplier_Builder<T> | null;
  resolving<P>(arg0: Pointer<P>, arg1: JavaFunction<T, P>): PointersSupplier_Builder<T>;
}
export type PointersSupplier_Builder<T = unknown> = PointersSupplier_BuilderMembers<T> & j_net_kyori_adventure_builder.AbstractBuilder<PointersSupplier<T>>;
export interface PointersSupplier_BuilderStatics {
}
