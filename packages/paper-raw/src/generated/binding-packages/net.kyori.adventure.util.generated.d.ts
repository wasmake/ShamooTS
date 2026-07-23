// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface net.kyori.adventure.util.ARGBLike. */
export interface ARGBLikeMembers {
  readonly __javaSupertypes?: readonly [RGBLike];
  alpha(): number;
}
export type ARGBLike = ARGBLikeMembers & RGBLike;
export interface ARGBLikeStatics {
}

/** JVM interface net.kyori.adventure.util.Buildable. */
export interface BuildableMembers<R = unknown, B /* extends Buildable_Builder<R> */ = unknown> {
  toBuilder(): B;
}
export type Buildable<R = unknown, B /* extends Buildable_Builder<R> */ = unknown> = BuildableMembers<R, B>;
export interface BuildableStatics {
  configureAndBuild<R /* extends Buildable<R, B> */, B /* extends Buildable_Builder<R> */>(arg0: B, arg1: JavaConsumer<B> | null): R | null;
}

/** JVM interface net.kyori.adventure.util.Buildable$Builder. */
export interface Buildable_BuilderMembers<R = unknown> {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<R>];
  build(): R;
}
export type Buildable_Builder<R = unknown> = Buildable_BuilderMembers<R> & j_net_kyori_adventure_builder.AbstractBuilder<R>;
export interface Buildable_BuilderStatics {
}

/** JVM interface net.kyori.adventure.util.Codec. */
export interface CodecMembers<D = unknown, E = unknown, DX /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown, EX /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> {
  /** @throws java.lang.Throwable */
  decode(arg0: E): D;
  /** @throws java.lang.Throwable */
  encode(arg0: D): E;
}
export type Codec<D = unknown, E = unknown, DX /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown, EX /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> = CodecMembers<D, E, DX, EX>;
export interface CodecStatics {
  codec<D, E, DX /* extends JavaOpaque<"java.lang.Throwable"> */, EX /* extends JavaOpaque<"java.lang.Throwable"> */>(arg0: Codec_Decoder<D, E, DX>, arg1: Codec_Encoder<D, E, EX>): Codec<D, E, DX, EX>;
  of<D, E, DX /* extends JavaOpaque<"java.lang.Throwable"> */, EX /* extends JavaOpaque<"java.lang.Throwable"> */>(arg0: Codec_Decoder<D, E, DX>, arg1: Codec_Encoder<D, E, EX>): Codec<D, E, DX, EX>;
}

/** JVM interface net.kyori.adventure.util.Codec$Decoder. */
export interface Codec_DecoderMembers<D = unknown, E = unknown, X /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> {
  /** @throws java.lang.Throwable */
  decode(arg0: E): D;
}
export type Codec_Decoder<D = unknown, E = unknown, X /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> = Codec_DecoderMembers<D, E, X>;
export interface Codec_DecoderStatics {
}

/** JVM interface net.kyori.adventure.util.Codec$Encoder. */
export interface Codec_EncoderMembers<D = unknown, E = unknown, X /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> {
  /** @throws java.lang.Throwable */
  encode(arg0: D): E;
}
export type Codec_Encoder<D = unknown, E = unknown, X /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> = Codec_EncoderMembers<D, E, X>;
export interface Codec_EncoderStatics {
}

/** JVM interface net.kyori.adventure.util.ComponentMessageThrowable. */
export interface ComponentMessageThrowableMembers {
  componentMessage(): j_net_kyori_adventure_text.Component | null;
}
export type ComponentMessageThrowable = ComponentMessageThrowableMembers;
export interface ComponentMessageThrowableStatics {
  getMessage(arg0: JavaOpaque<"java.lang.Throwable"> | null): j_net_kyori_adventure_text.Component | null;
  getOrConvertMessage(arg0: JavaOpaque<"java.lang.Throwable"> | null): j_net_kyori_adventure_text.Component | null;
}

/** JVM class net.kyori.adventure.util.ForwardingIterator. */
export interface ForwardingIteratorMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<T>];
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  spliterator(): JavaOpaque<"java.util.Spliterator", [T]>;
}
export type ForwardingIterator<T = unknown> = ForwardingIteratorMembers<T> & Iterable<T>;
export interface ForwardingIteratorStatics {
  new<T>(arg0: JavaSupplier<JavaOpaque<"java.util.Iterator", [T]>>, arg1: JavaSupplier<JavaOpaque<"java.util.Spliterator", [T]>>): ForwardingIterator<T>;
}

/** JVM interface net.kyori.adventure.util.HSVLike. */
export interface HSVLikeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  h(): number;
  s(): number;
  v(): number;
}
export type HSVLike = HSVLikeMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface HSVLikeStatics {
  fromRGB(arg0: number, arg1: number, arg2: number): HSVLike;
  hsvLike(arg0: number, arg1: number, arg2: number): HSVLike;
  of(arg0: number, arg1: number, arg2: number): HSVLike;
}

/** JVM class net.kyori.adventure.util.Index. */
export interface IndexMembers<K = unknown, V = unknown> {
  key(arg0: V): K | null;
  keyOr(arg0: V, arg1: K | null): K | null;
  keyOrThrow(arg0: V): K;
  keyToValue(): JavaMap<K, V>;
  keys(): JavaSet<K>;
  value(arg0: K): V | null;
  valueOr(arg0: K, arg1: V | null): V | null;
  valueOrThrow(arg0: K): V;
  valueToKey(): JavaMap<V, K>;
  values(): JavaSet<V>;
}
export type Index<K = unknown, V = unknown> = IndexMembers<K, V>;
export interface IndexStatics {
  create<K, V /* extends JavaOpaque<"java.lang.Enum", [V]> */>(arg0: JavaClass<V>, arg1: JavaFunction<V, K>): Index<K, V>;
  create<K, V /* extends JavaOpaque<"java.lang.Enum", [V]> */>(arg0: JavaClass<V>, arg1: JavaFunction<V, K>, ...arg2: Array<V>): Index<K, V>;
  create<K, V>(arg0: JavaFunction<V, K>, arg1: JavaList<V>): Index<K, V>;
  create<K, V>(arg0: JavaFunction<V, K>, ...arg1: Array<V>): Index<K, V>;
}

/** JVM interface net.kyori.adventure.util.InheritanceAwareMap. */
export interface InheritanceAwareMapMembers<C = unknown, V = unknown> {
  containsKey(arg0: JavaClass<C>): boolean;
  get(arg0: JavaClass<C>): V | null;
  with(arg0: JavaClass<C>, arg1: V): InheritanceAwareMap<C, V>;
  without(arg0: JavaClass<C>): InheritanceAwareMap<C, V>;
}
export type InheritanceAwareMap<C = unknown, V = unknown> = InheritanceAwareMapMembers<C, V>;
export interface InheritanceAwareMapStatics {
  builder<K, E>(): InheritanceAwareMap_Builder<K, E>;
  builder<K, E>(arg0: InheritanceAwareMap<K, E>): InheritanceAwareMap_Builder<K, E>;
  empty<K, E>(): InheritanceAwareMap<K, E>;
}

/** JVM interface net.kyori.adventure.util.InheritanceAwareMap$Builder. */
export interface InheritanceAwareMap_BuilderMembers<C = unknown, V = unknown> {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<InheritanceAwareMap<C, V>>];
  put(arg0: JavaClass<C>, arg1: V): InheritanceAwareMap_Builder<C, V>;
  putAll(arg0: InheritanceAwareMap<C, V>): InheritanceAwareMap_Builder<C, V>;
  remove(arg0: JavaClass<C>): InheritanceAwareMap_Builder<C, V>;
  strict(arg0: boolean): InheritanceAwareMap_Builder<C, V>;
}
export type InheritanceAwareMap_Builder<C = unknown, V = unknown> = InheritanceAwareMap_BuilderMembers<C, V> & j_net_kyori_adventure_builder.AbstractBuilder<InheritanceAwareMap<C, V>>;
export interface InheritanceAwareMap_BuilderStatics {
}

/** JVM interface net.kyori.adventure.util.IntFunction2. */
export interface IntFunction2Members<R = unknown> {
  apply(arg0: number, arg1: number): R;
}
export type IntFunction2<R = unknown> = IntFunction2Members<R>;
export interface IntFunction2Statics {
}

/** JVM abstract net.kyori.adventure.util.Listenable. */
export interface ListenableMembers<L = unknown> {
  addListener0(arg0: L): void;
  forEachListener(arg0: JavaConsumer<L>): void;
  removeListener0(arg0: L): void;
}
export type Listenable<L = unknown> = ListenableMembers<L>;
export interface ListenableStatics {
  new<L>(): Listenable<L>;
}

/** JVM class net.kyori.adventure.util.MonkeyBars. */
export interface MonkeyBarsMembers {
}
export type MonkeyBars = MonkeyBarsMembers;
export interface MonkeyBarsStatics {
  addOne<T>(arg0: JavaList<T>, arg1: T): JavaList<T>;
  enumSet<E /* extends JavaOpaque<"java.lang.Enum", [E]> */>(arg0: JavaClass<E>, ...arg1: Array<E>): JavaSet<E>;
  nonEmptyArrayToList<I, O>(arg0: JavaFunction<I, O>, arg1: I, ...arg2: Array<I>): JavaList<O>;
  toUnmodifiableList<I, O>(arg0: JavaFunction<I, O>, arg1: Iterable<I>): JavaList<O>;
}

/** JVM abstract net.kyori.adventure.util.Nag. */
export interface NagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type Nag = NagMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface NagStatics {
  new(arg0: string): Nag;
  print(arg0: Nag): void;
}

/** JVM interface net.kyori.adventure.util.PlatformAPI. */
export interface PlatformAPIMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type PlatformAPI = PlatformAPIMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface PlatformAPIStatics {
}

/** JVM interface net.kyori.adventure.util.RGBLike. */
export interface RGBLikeMembers {
  asHSV(): HSVLike;
  blue(): number;
  green(): number;
  red(): number;
}
export type RGBLike = RGBLikeMembers;
export interface RGBLikeStatics {
}

/** JVM class net.kyori.adventure.util.Services. */
export interface ServicesMembers {
}
export type Services = ServicesMembers;
export interface ServicesStatics {
  service<P>(arg0: JavaClass<P>): JavaOptional<P>;
  serviceWithFallback<P>(arg0: JavaClass<P>): JavaOptional<P>;
  services<P>(arg0: JavaClass<P>): JavaSet<P>;
}

/** JVM interface net.kyori.adventure.util.Services$Fallback. */
export interface Services_FallbackMembers {
}
export type Services_Fallback = Services_FallbackMembers;
export interface Services_FallbackStatics {
}

/** JVM class net.kyori.adventure.util.ShadyPines. */
export interface ShadyPinesMembers {
}
export type ShadyPines = ShadyPinesMembers;
export interface ShadyPinesStatics {
  enumSet<E /* extends JavaOpaque<"java.lang.Enum", [E]> */>(arg0: JavaClass<E>, ...arg1: Array<E>): JavaSet<E>;
  equals(arg0: number, arg1: number): boolean;
  equals(arg0: number, arg1: number): boolean;
}

/** JVM interface net.kyori.adventure.util.Ticks. */
export interface TicksMembers {
}
export type Ticks = TicksMembers;
export interface TicksStatics {
  readonly SINGLE_TICK_DURATION_MS: 50;
  readonly TICKS_PER_SECOND: 20;
  duration(arg0: bigint): JavaOpaque<"java.time.Duration">;
}

/** Live JVM enum net.kyori.adventure.util.TriState; constants are host handles, not strings. */
export type TriState = JavaEnum<"net.kyori.adventure.util.TriState", "FALSE" | "NOT_SET" | "TRUE"> & TriStateMembers;
export interface TriStateMembers {
  toBoolean(): boolean | null;
  toBooleanOrElse(arg0: boolean): boolean;
  toBooleanOrElseGet(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): boolean;
}
export interface TriStateStatics {
  readonly FALSE: TriState;
  readonly NOT_SET: TriState;
  readonly TRUE: TriState;
  byBoolean(arg0: boolean | null): TriState | null;
  byBoolean(arg0: boolean): TriState;
  valueOf(arg0: string): TriState;
  values(): Array<TriState>;
}

/** JVM class net.kyori.adventure.util.UTF8ResourceBundleControl. */
export interface UTF8ResourceBundleControlMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.ResourceBundle$Control">];
  /** @throws java.io.IOException @throws java.lang.IllegalAccessException @throws java.lang.InstantiationException */
  newBundle(arg0: string, arg1: JavaOpaque<"java.util.Locale">, arg2: string, arg3: JavaOpaque<"java.lang.ClassLoader">, arg4: boolean): JavaOpaque<"java.util.ResourceBundle">;
}
export type UTF8ResourceBundleControl = UTF8ResourceBundleControlMembers & JavaOpaque<"java.util.ResourceBundle$Control">;
export interface UTF8ResourceBundleControlStatics {
  new(): UTF8ResourceBundleControl;
  get(): JavaOpaque<"java.util.ResourceBundle$Control">;
  utf8ResourceBundleControl(): JavaOpaque<"java.util.ResourceBundle$Control">;
}
