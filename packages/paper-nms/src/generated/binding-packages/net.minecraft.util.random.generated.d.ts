// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM record net.minecraft.util.random.Weighted. */
export interface WeightedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  map<U>(arg0: JavaFunction<T, U>): Weighted<U>;
  toString(): string;
  value(): T;
  weight(): number;
}
export type Weighted<T = unknown> = WeightedMembers<T> & JavaOpaque<"java.lang.Record">;
export interface WeightedStatics {
  new<T>(arg0: T, arg1: number): Weighted<T>;
  codec<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [Weighted<E>]>;
  codec<E>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [Weighted<E>]>;
}

/** JVM class net.minecraft.util.random.WeightedList. */
export interface WeightedListMembers<E = unknown> {
  contains(arg0: E): boolean;
  equals(arg0: object | null): boolean | null;
  getRandom(arg0: j_net_minecraft_util.RandomSource): JavaOptional<E>;
  getRandomOrThrow(arg0: j_net_minecraft_util.RandomSource): E;
  hashCode(): number;
  isEmpty(): boolean;
  map<T>(arg0: JavaFunction<E, T>): WeightedList<T>;
  unwrap(): JavaList<Weighted<E>>;
}
export type WeightedList<E = unknown> = WeightedListMembers<E>;
export interface WeightedListStatics {
  new<E>(arg0: JavaList<Weighted<E>>): WeightedList<E>;
  builder<E>(): WeightedList_Builder<E>;
  codec<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [WeightedList<E>]>;
  codec<E>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [WeightedList<E>]>;
  nonEmptyCodec<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [WeightedList<E>]>;
  nonEmptyCodec<E>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [WeightedList<E>]>;
  of<E>(): WeightedList<E>;
  of<E>(arg0: E): WeightedList<E>;
  of<E>(arg0: JavaList<Weighted<E>>): WeightedList<E>;
  of<E>(...arg0: Array<Weighted<E>>): WeightedList<E>;
}

/** JVM class net.minecraft.util.random.WeightedList$Builder. */
export interface WeightedList_BuilderMembers<E = unknown> {
  add(arg0: E): WeightedList_Builder<E>;
  add(arg0: E, arg1: number): WeightedList_Builder<E>;
  build(): WeightedList<E>;
  readonly result: JavaOpaque<"com.google.common.collect.ImmutableList$Builder", [Weighted<E>]>;
}
export type WeightedList_Builder<E = unknown> = WeightedList_BuilderMembers<E>;
export interface WeightedList_BuilderStatics {
  new<E>(): WeightedList_Builder<E>;
}

/** JVM class net.minecraft.util.random.WeightedRandom. */
export interface WeightedRandomMembers {
}
export type WeightedRandom = WeightedRandomMembers;
export interface WeightedRandomStatics {
  getRandomItem<T>(arg0: j_net_minecraft_util.RandomSource, arg1: JavaList<T>, arg2: number, arg3: JavaOpaque<"java.util.function.ToIntFunction", [T]>): JavaOptional<T>;
  getRandomItem<T>(arg0: j_net_minecraft_util.RandomSource, arg1: JavaList<T>, arg2: JavaOpaque<"java.util.function.ToIntFunction", [T]>): JavaOptional<T>;
  getTotalWeight<T>(arg0: JavaList<T>, arg1: JavaOpaque<"java.util.function.ToIntFunction", [T]>): number;
  getWeightedItem<T>(arg0: JavaList<T>, arg1: number, arg2: JavaOpaque<"java.util.function.ToIntFunction", [T]>): JavaOptional<T>;
}
