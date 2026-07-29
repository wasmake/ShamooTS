// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM interface net.minecraft.util.AbortableIterationConsumer. */
export interface AbortableIterationConsumerMembers<T = unknown> {
  accept(arg0: T): AbortableIterationConsumer_Continuation;
}
export type AbortableIterationConsumer<T = unknown> = AbortableIterationConsumerMembers<T>;
export interface AbortableIterationConsumerStatics {
  forConsumer<T>(arg0: JavaConsumer<T>): AbortableIterationConsumer<T>;
}

/** Live JVM enum net.minecraft.util.AbortableIterationConsumer$Continuation; constants are host handles, not strings. */
export type AbortableIterationConsumer_Continuation = JavaEnum<"net.minecraft.util.AbortableIterationConsumer$Continuation", "ABORT" | "CONTINUE"> & AbortableIterationConsumer_ContinuationMembers;
export interface AbortableIterationConsumer_ContinuationMembers {
  shouldAbort(): boolean;
}
export interface AbortableIterationConsumer_ContinuationStatics {
  readonly ABORT: AbortableIterationConsumer_Continuation;
  readonly CONTINUE: AbortableIterationConsumer_Continuation;
  valueOf(arg0: string): AbortableIterationConsumer_Continuation;
  values(): Array<AbortableIterationConsumer_Continuation>;
}

/** JVM class net.minecraft.util.ARGB. */
export interface ARGBMembers {
}
export type ARGB = ARGBMembers;
export interface ARGBStatics {
  new(): ARGB;
  alpha(arg0: number): number;
  alphaFloat(arg0: number): number;
  as8BitChannel(arg0: number): number;
  average(arg0: number, arg1: number): number;
  blue(arg0: number): number;
  blueFloat(arg0: number): number;
  color(arg0: number, arg1: number): number;
  color(arg0: number, arg1: number): number;
  color(arg0: number, arg1: number, arg2: number): number;
  color(arg0: number, arg1: number, arg2: number, arg3: number): number;
  color(arg0: j_net_minecraft_world_phys.Vec3): number;
  colorFromFloat(arg0: number, arg1: number, arg2: number, arg3: number): number;
  fromABGR(arg0: number): number;
  green(arg0: number): number;
  greenFloat(arg0: number): number;
  greyscale(arg0: number): number;
  lerp(arg0: number, arg1: number, arg2: number): number;
  multiply(arg0: number, arg1: number): number;
  opaque(arg0: number): number;
  red(arg0: number): number;
  redFloat(arg0: number): number;
  scaleRGB(arg0: number, arg1: number): number;
  scaleRGB(arg0: number, arg1: number, arg2: number, arg3: number): number;
  scaleRGB(arg0: number, arg1: number): number;
  setBrightness(arg0: number, arg1: number): number;
  toABGR(arg0: number): number;
  transparent(arg0: number): number;
  vector3fFromRGB24(arg0: number): JavaOpaque<"org.joml.Vector3f">;
  white(arg0: number): number;
}

/** JVM class net.minecraft.util.ArrayListDeque. */
export interface ArrayListDequeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractList", [T]>, ListAndDeque<T>];
  add(arg0: number, arg1: T): void;
  addFirst(arg0: T): void;
  addLast(arg0: T): void;
  capacity(): number;
  descendingIterator(): JavaOpaque<"java.util.Iterator", [T]>;
  forEach(arg0: JavaConsumer<T>): void;
  get(arg0: number): T;
  getFirst(): T;
  getLast(): T;
  offerFirst(arg0: T): boolean;
  offerLast(arg0: T): boolean;
  peekFirst(): T | null;
  peekLast(): T | null;
  pollFirst(): T | null;
  pollLast(): T | null;
  remove(arg0: number): T;
  removeFirst(): T;
  removeFirstOccurrence(arg0: object): boolean;
  removeIf(arg0: JavaPredicate<T>): boolean;
  removeLast(): T;
  removeLastOccurrence(arg0: object): boolean;
  replaceAll(arg0: JavaOpaque<"java.util.function.UnaryOperator", [T]>): void;
  reversed(): ListAndDeque<T>;
  set(arg0: number, arg1: T): T;
  size(): number;
}
export type ArrayListDeque<T = unknown> = ArrayListDequeMembers<T> & JavaOpaque<"java.util.AbstractList", [T]> & ListAndDeque<T>;
export interface ArrayListDequeStatics {
  new<T>(): ArrayListDeque<T>;
  new<T>(arg0: number): ArrayListDeque<T>;
}

/** JVM class net.minecraft.util.BinaryAnimator. */
export interface BinaryAnimatorMembers {
  getFactor(arg0: number): number;
  tick(arg0: boolean): void;
}
export type BinaryAnimator = BinaryAnimatorMembers;
export interface BinaryAnimatorStatics {
  new(arg0: number): BinaryAnimator;
  new(arg0: number, arg1: BinaryAnimator_EasingFunction): BinaryAnimator;
}

/** JVM interface net.minecraft.util.BinaryAnimator$EasingFunction. */
export interface BinaryAnimator_EasingFunctionMembers {
  apply(arg0: number): number;
}
export type BinaryAnimator_EasingFunction = BinaryAnimator_EasingFunctionMembers;
export interface BinaryAnimator_EasingFunctionStatics {
}

/** JVM interface net.minecraft.util.BitStorage. */
export interface BitStorageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.block_counting.BlockCountingBitStorage">];
  copy(): BitStorage;
  get(arg0: number): number;
  getAll(arg0: JavaOpaque<"java.util.function.IntConsumer">): void;
  getAndSet(arg0: number, arg1: number): number;
  getBits(): number;
  getRaw(): Array<bigint>;
  getSize(): number;
  moonrise$countEntries(): JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap", [JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortArrayList">]>;
  set(arg0: number, arg1: number): void;
  unpack(arg0: Array<number>): void;
}
export type BitStorage = BitStorageMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.block_counting.BlockCountingBitStorage">;
export interface BitStorageStatics {
}

/** JVM record net.minecraft.util.Brightness. */
export interface BrightnessMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  block(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  pack(): number;
  sky(): number;
  toString(): string;
}
export type Brightness = BrightnessMembers & JavaOpaque<"java.lang.Record">;
export interface BrightnessStatics {
  new(arg0: number, arg1: number): Brightness;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Brightness]>;
  readonly FULL_BRIGHT: Brightness;
  readonly LIGHT_VALUE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  block(arg0: number): number;
  pack(arg0: number, arg1: number): number;
  sky(arg0: number): number;
  unpack(arg0: number): Brightness;
}

/** JVM class net.minecraft.util.ByIdMap. */
export interface ByIdMapMembers {
}
export type ByIdMap = ByIdMapMembers;
export interface ByIdMapStatics {
  new(): ByIdMap;
  continuous<T>(arg0: JavaOpaque<"java.util.function.ToIntFunction", [T]>, arg1: Array<T>, arg2: ByIdMap_OutOfBoundsStrategy): JavaOpaque<"java.util.function.IntFunction", [T]>;
  sparse<T>(arg0: JavaOpaque<"java.util.function.ToIntFunction", [T]>, arg1: Array<T>, arg2: T): JavaOpaque<"java.util.function.IntFunction", [T]>;
}

/** Live JVM enum net.minecraft.util.ByIdMap$OutOfBoundsStrategy; constants are host handles, not strings. */
export type ByIdMap_OutOfBoundsStrategy = JavaEnum<"net.minecraft.util.ByIdMap$OutOfBoundsStrategy", "CLAMP" | "WRAP" | "ZERO"> & ByIdMap_OutOfBoundsStrategyMembers;
export interface ByIdMap_OutOfBoundsStrategyMembers {
}
export interface ByIdMap_OutOfBoundsStrategyStatics {
  readonly CLAMP: ByIdMap_OutOfBoundsStrategy;
  readonly WRAP: ByIdMap_OutOfBoundsStrategy;
  readonly ZERO: ByIdMap_OutOfBoundsStrategy;
  valueOf(arg0: string): ByIdMap_OutOfBoundsStrategy;
  values(): Array<ByIdMap_OutOfBoundsStrategy>;
}

/** JVM class net.minecraft.util.ClassInstanceMultiMap. */
export interface ClassInstanceMultiMapMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractCollection", [T]>];
  add(arg0: T): boolean;
  contains(arg0: object): boolean;
  find<S>(arg0: JavaClass<S>): JavaCollection<S>;
  getAllInstances(): JavaList<T>;
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  remove(arg0: object): boolean;
  size(): number;
}
export type ClassInstanceMultiMap<T = unknown> = ClassInstanceMultiMapMembers<T> & JavaOpaque<"java.util.AbstractCollection", [T]>;
export interface ClassInstanceMultiMapStatics {
  new<T>(arg0: JavaClass<T>): ClassInstanceMultiMap<T>;
}

/** JVM class net.minecraft.util.ClassTreeIdRegistry. */
export interface ClassTreeIdRegistryMembers {
  define(arg0: JavaClass<object>): number;
  getCount(arg0: JavaClass<object>): number;
  getLastIdFor(arg0: JavaClass<object>): number;
}
export type ClassTreeIdRegistry = ClassTreeIdRegistryMembers;
export interface ClassTreeIdRegistryStatics {
  new(): ClassTreeIdRegistry;
  readonly NO_ID_VALUE: -1;
}

/** JVM record net.minecraft.util.ColorRGBA. */
export interface ColorRGBAMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  rgba(): number;
  toString(): string;
}
export type ColorRGBA = ColorRGBAMembers & JavaOpaque<"java.lang.Record">;
export interface ColorRGBAStatics {
  new(arg0: number): ColorRGBA;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ColorRGBA]>;
}

/** JVM class net.minecraft.util.CommonColors. */
export interface CommonColorsMembers {
}
export type CommonColors = CommonColorsMembers;
export interface CommonColorsStatics {
  new(): CommonColors;
  readonly BLACK: -16777216;
  readonly BLUE: -16776961;
  readonly COSMOS_PINK: -13108;
  readonly DARK_GRAY: -12566464;
  readonly DARK_PURPLE: -11534256;
  readonly GRAY: -8355712;
  readonly GREEN: -16711936;
  readonly HIGH_CONTRAST_DIAMOND: -11010079;
  readonly LIGHTER_GRAY: -4539718;
  readonly LIGHT_GRAY: -6250336;
  readonly RED: -65536;
  readonly SOFT_RED: -2142128;
  readonly SOFT_YELLOW: -171;
  readonly WHITE: -1;
  readonly YELLOW: -256;
}

/** JVM class net.minecraft.util.CommonLinks. */
export interface CommonLinksMembers {
}
export type CommonLinks = CommonLinksMembers;
export interface CommonLinksStatics {
  new(): CommonLinks;
  readonly ACCESSIBILITY_HELP: JavaOpaque<"java.net.URI">;
  readonly ACCOUNT_SETTINGS: JavaOpaque<"java.net.URI">;
  readonly ATTRIBUTION: JavaOpaque<"java.net.URI">;
  readonly BLOCKING_HELP: JavaOpaque<"java.net.URI">;
  readonly BUY_MINECRAFT_JAVA: JavaOpaque<"java.net.URI">;
  readonly BUY_REALMS: JavaOpaque<"java.net.URI">;
  readonly EULA: JavaOpaque<"java.net.URI">;
  readonly EXTEND_REALMS_LINK: "https://aka.ms/ExtendJavaRealms";
  readonly GDPR: JavaOpaque<"java.net.URI">;
  readonly GENERAL_HELP: JavaOpaque<"java.net.URI">;
  readonly INTENTIONAL_GAME_DESIGN_BUG: JavaOpaque<"java.net.URI">;
  readonly INTENTIONAL_GAME_DESIGN_BUG_ID: "MCPE-28723";
  readonly LICENSES: JavaOpaque<"java.net.URI">;
  readonly PRIVACY_STATEMENT: JavaOpaque<"java.net.URI">;
  readonly REALMS_CONTENT_CREATION: JavaOpaque<"java.net.URI">;
  readonly REALMS_TERMS: JavaOpaque<"java.net.URI">;
  readonly RELEASE_FEEDBACK: JavaOpaque<"java.net.URI">;
  readonly REPORTING_HELP: JavaOpaque<"java.net.URI">;
  readonly SNAPSHOT_BUGS_FEEDBACK: JavaOpaque<"java.net.URI">;
  readonly SNAPSHOT_FEEDBACK: JavaOpaque<"java.net.URI">;
  readonly START_REALMS_TRIAL: JavaOpaque<"java.net.URI">;
  readonly SUSPENSION_HELP: JavaOpaque<"java.net.URI">;
  readonly SYMLINK_HELP: JavaOpaque<"java.net.URI">;
  extendRealms(arg0: string | null, arg1: JavaOpaque<"java.util.UUID">): string;
  extendRealms(arg0: string | null, arg1: JavaOpaque<"java.util.UUID">, arg2: boolean): string;
}

/** JVM class net.minecraft.util.CrudeIncrementalIntIdentityHashBiMap. */
export interface CrudeIncrementalIntIdentityHashBiMapMembers<K = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_core.IdMap<K>, JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [K]>];
  add(arg0: K): number;
  addMapping(arg0: K, arg1: number): void;
  byId(arg0: number): K | null;
  clear(): void;
  contains(arg0: number): boolean;
  contains(arg0: K): boolean;
  copy(): CrudeIncrementalIntIdentityHashBiMap<K>;
  getId(arg0: K | null): number;
  iterator(): JavaOpaque<"java.util.Iterator", [K]>;
  moonrise$getRawPalette(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPaletteData", [K]>): Array<K>;
  size(): number;
}
export type CrudeIncrementalIntIdentityHashBiMap<K = unknown> = CrudeIncrementalIntIdentityHashBiMapMembers<K> & j_net_minecraft_core.IdMap<K> & JavaOpaque<"ca.spottedleaf.moonrise.patches.fast_palette.FastPalette", [K]>;
export interface CrudeIncrementalIntIdentityHashBiMapStatics {
  create<A>(arg0: number): CrudeIncrementalIntIdentityHashBiMap<A>;
}

/** JVM class net.minecraft.util.Crypt. */
export interface CryptMembers {
}
export type Crypt = CryptMembers;
export interface CryptStatics {
  new(): Crypt;
  readonly MIME_ENCODER: JavaOpaque<"java.util.Base64$Encoder">;
  readonly MIME_LINE_SEPARATOR: "\n";
  readonly PRIVATE_KEY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.security.PrivateKey">]>;
  readonly PUBLIC_KEY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.security.PublicKey">]>;
  readonly RSA_PUBLIC_KEY_HEADER: "-----BEGIN RSA PUBLIC KEY-----";
  readonly SIGNATURE_BYTES: 256;
  readonly SIGNING_ALGORITHM: "SHA256withRSA";
  /** @throws net.minecraft.util.CryptException */
  byteToPublicKey(arg0: Array<number>): JavaOpaque<"java.security.PublicKey">;
  /** @throws net.minecraft.util.CryptException */
  decryptByteToSecretKey(arg0: JavaOpaque<"java.security.PrivateKey">, arg1: Array<number>): JavaOpaque<"javax.crypto.SecretKey">;
  /** @throws net.minecraft.util.CryptException */
  decryptUsingKey(arg0: JavaOpaque<"java.security.Key">, arg1: Array<number>): Array<number>;
  /** @throws net.minecraft.util.CryptException */
  digestData(arg0: string, arg1: JavaOpaque<"java.security.PublicKey">, arg2: JavaOpaque<"javax.crypto.SecretKey">): Array<number>;
  /** @throws net.minecraft.util.CryptException */
  encryptUsingKey(arg0: JavaOpaque<"java.security.Key">, arg1: Array<number>): Array<number>;
  /** @throws net.minecraft.util.CryptException */
  generateKeyPair(): JavaOpaque<"java.security.KeyPair">;
  /** @throws net.minecraft.util.CryptException */
  generateSecretKey(): JavaOpaque<"javax.crypto.SecretKey">;
  /** @throws net.minecraft.util.CryptException */
  getCipher(arg0: number, arg1: JavaOpaque<"java.security.Key">): JavaOpaque<"javax.crypto.Cipher">;
  pemRsaPrivateKeyToString(arg0: JavaOpaque<"java.security.PrivateKey">): string;
  rsaPublicKeyToString(arg0: JavaOpaque<"java.security.PublicKey">): string;
  /** @throws net.minecraft.util.CryptException */
  stringToPemRsaPrivateKey(arg0: string): JavaOpaque<"java.security.PrivateKey">;
  /** @throws net.minecraft.util.CryptException */
  stringToRsaPublicKey(arg0: string): JavaOpaque<"java.security.PublicKey">;
}

/** JVM record net.minecraft.util.Crypt$SaltSignaturePair. */
export interface Crypt_SaltSignaturePairMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isValid(): boolean;
  salt(): bigint;
  saltAsBytes(): Array<number>;
  signature(): Array<number>;
  toString(): string;
}
export type Crypt_SaltSignaturePair = Crypt_SaltSignaturePairMembers & JavaOpaque<"java.lang.Record">;
export interface Crypt_SaltSignaturePairStatics {
  new(arg0: bigint, arg1: Array<number>): Crypt_SaltSignaturePair;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): Crypt_SaltSignaturePair;
  readonly EMPTY: Crypt_SaltSignaturePair;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: Crypt_SaltSignaturePair): void;
}

/** JVM class net.minecraft.util.Crypt$SaltSupplier. */
export interface Crypt_SaltSupplierMembers {
}
export type Crypt_SaltSupplier = Crypt_SaltSupplierMembers;
export interface Crypt_SaltSupplierStatics {
  new(): Crypt_SaltSupplier;
  getLong(): bigint;
}

/** JVM class net.minecraft.util.CryptException. */
export interface CryptExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
}
export type CryptException = CryptExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface CryptExceptionStatics {
  new(arg0: JavaOpaque<"java.lang.Throwable">): CryptException;
}

/** JVM class net.minecraft.util.CsvOutput. */
export interface CsvOutputMembers {
  /** @throws java.io.IOException */
  writeRow(...arg0: Array<object>): void;
}
export type CsvOutput = CsvOutputMembers;
export interface CsvOutputStatics {
  builder(): CsvOutput_Builder;
}

/** JVM class net.minecraft.util.CsvOutput$Builder. */
export interface CsvOutput_BuilderMembers {
  addColumn(arg0: string): CsvOutput_Builder;
  /** @throws java.io.IOException */
  build(arg0: JavaOpaque<"java.io.Writer">): CsvOutput;
}
export type CsvOutput_Builder = CsvOutput_BuilderMembers;
export interface CsvOutput_BuilderStatics {
  new(): CsvOutput_Builder;
}

/** JVM class net.minecraft.util.CubicSampler. */
export interface CubicSamplerMembers {
}
export type CubicSampler = CubicSamplerMembers;
export interface CubicSamplerStatics {
  gaussianSampleVec3(arg0: j_net_minecraft_world_phys.Vec3, arg1: CubicSampler_Vec3Fetcher): j_net_minecraft_world_phys.Vec3;
}

/** JVM interface net.minecraft.util.CubicSampler$Vec3Fetcher. */
export interface CubicSampler_Vec3FetcherMembers {
  fetch(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3;
}
export type CubicSampler_Vec3Fetcher = CubicSampler_Vec3FetcherMembers;
export interface CubicSampler_Vec3FetcherStatics {
}

/** JVM interface net.minecraft.util.CubicSpline. */
export interface CubicSplineMembers<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> {
  readonly __javaSupertypes?: readonly [ToFloatFunction<C>];
  mapAll(arg0: CubicSpline_CoordinateVisitor<I>): CubicSpline<C, I>;
  parityString(): string;
}
export type CubicSpline<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> = CubicSplineMembers<C, I> & ToFloatFunction<C>;
export interface CubicSplineStatics {
  builder<C, I /* extends ToFloatFunction<C> */>(arg0: I): CubicSpline_Builder<C, I>;
  builder<C, I /* extends ToFloatFunction<C> */>(arg0: I, arg1: ToFloatFunction<number>): CubicSpline_Builder<C, I>;
  codec<C, I /* extends ToFloatFunction<C> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [I]>): JavaOpaque<"com.mojang.serialization.Codec", [CubicSpline<C, I>]>;
  constant<C, I /* extends ToFloatFunction<C> */>(arg0: number): CubicSpline<C, I>;
}

/** JVM class net.minecraft.util.CubicSpline$Builder. */
export interface CubicSpline_BuilderMembers<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> {
  addPoint(arg0: number, arg1: number): CubicSpline_Builder<C, I>;
  addPoint(arg0: number, arg1: number, arg2: number): CubicSpline_Builder<C, I>;
  addPoint(arg0: number, arg1: CubicSpline<C, I>): CubicSpline_Builder<C, I>;
  build(): CubicSpline<C, I>;
}
export type CubicSpline_Builder<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> = CubicSpline_BuilderMembers<C, I>;
export interface CubicSpline_BuilderStatics {
}

/** JVM record net.minecraft.util.CubicSpline$Constant. */
export interface CubicSpline_ConstantMembers<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CubicSpline<C, I>];
  apply(arg0: C): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  mapAll(arg0: CubicSpline_CoordinateVisitor<I>): CubicSpline<C, I>;
  maxValue(): number;
  minValue(): number;
  parityString(): string;
  toString(): string;
  value(): number;
}
export type CubicSpline_Constant<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> = CubicSpline_ConstantMembers<C, I> & JavaOpaque<"java.lang.Record"> & CubicSpline<C, I>;
export interface CubicSpline_ConstantStatics {
  new<C, I /* extends ToFloatFunction<C> */>(arg0: number): CubicSpline_Constant<C, I>;
}

/** JVM interface net.minecraft.util.CubicSpline$CoordinateVisitor. */
export interface CubicSpline_CoordinateVisitorMembers<I = unknown> {
  visit(arg0: I): I;
}
export type CubicSpline_CoordinateVisitor<I = unknown> = CubicSpline_CoordinateVisitorMembers<I>;
export interface CubicSpline_CoordinateVisitorStatics {
}

/** JVM record net.minecraft.util.CubicSpline$Multipoint. */
export interface CubicSpline_MultipointMembers<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CubicSpline<C, I>];
  apply(arg0: C): number;
  coordinate(): I;
  derivatives(): Array<number>;
  equals(arg0: object): boolean;
  hashCode(): number;
  locations(): Array<number>;
  mapAll(arg0: CubicSpline_CoordinateVisitor<I>): CubicSpline<C, I>;
  maxValue(): number;
  minValue(): number;
  parityString(): string;
  toString(): string;
  values(): JavaList<CubicSpline<C, I>>;
}
export type CubicSpline_Multipoint<C = unknown, I /* extends ToFloatFunction<C> */ = unknown> = CubicSpline_MultipointMembers<C, I> & JavaOpaque<"java.lang.Record"> & CubicSpline<C, I>;
export interface CubicSpline_MultipointStatics {
  new<C, I /* extends ToFloatFunction<C> */>(arg0: I, arg1: Array<number>, arg2: JavaList<CubicSpline<C, I>>, arg3: Array<number>, arg4: number, arg5: number): CubicSpline_Multipoint<C, I>;
}

/** JVM class net.minecraft.util.DebugBuffer. */
export interface DebugBufferMembers<T = unknown> {
  dump(): JavaList<T>;
  push(arg0: T): void;
}
export type DebugBuffer<T = unknown> = DebugBufferMembers<T>;
export interface DebugBufferStatics {
  new<T>(arg0: number): DebugBuffer<T>;
}

/** JVM class net.minecraft.util.DelegateDataOutput. */
export interface DelegateDataOutputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.DataOutput">];
  /** @throws java.io.IOException */
  write(arg0: number): void;
  /** @throws java.io.IOException */
  write(arg0: Array<number>): void;
  /** @throws java.io.IOException */
  write(arg0: Array<number>, arg1: number, arg2: number): void;
  /** @throws java.io.IOException */
  writeBoolean(arg0: boolean): void;
  /** @throws java.io.IOException */
  writeByte(arg0: number): void;
  /** @throws java.io.IOException */
  writeBytes(arg0: string): void;
  /** @throws java.io.IOException */
  writeChar(arg0: number): void;
  /** @throws java.io.IOException */
  writeChars(arg0: string): void;
  /** @throws java.io.IOException */
  writeDouble(arg0: number): void;
  /** @throws java.io.IOException */
  writeFloat(arg0: number): void;
  /** @throws java.io.IOException */
  writeInt(arg0: number): void;
  /** @throws java.io.IOException */
  writeLong(arg0: bigint): void;
  /** @throws java.io.IOException */
  writeShort(arg0: number): void;
  /** @throws java.io.IOException */
  writeUTF(arg0: string): void;
}
export type DelegateDataOutput = DelegateDataOutputMembers & JavaOpaque<"java.io.DataOutput">;
export interface DelegateDataOutputStatics {
  new(arg0: JavaOpaque<"java.io.DataOutput">): DelegateDataOutput;
}

/** JVM class net.minecraft.util.DependencySorter. */
export interface DependencySorterMembers<K = unknown, V /* extends DependencySorter_Entry<K> */ = unknown> {
  addEntry(arg0: K, arg1: V): DependencySorter<K, V>;
  orderByDependencies(arg0: JavaBiConsumer<K, V>): void;
}
export type DependencySorter<K = unknown, V /* extends DependencySorter_Entry<K> */ = unknown> = DependencySorterMembers<K, V>;
export interface DependencySorterStatics {
  new<K, V /* extends DependencySorter_Entry<K> */>(): DependencySorter<K, V>;
}

/** JVM interface net.minecraft.util.DependencySorter$Entry. */
export interface DependencySorter_EntryMembers<K = unknown> {
  visitOptionalDependencies(arg0: JavaConsumer<K>): void;
  visitRequiredDependencies(arg0: JavaConsumer<K>): void;
}
export type DependencySorter_Entry<K = unknown> = DependencySorter_EntryMembers<K>;
export interface DependencySorter_EntryStatics {
}

/** JVM class net.minecraft.util.DirectoryLock. */
export interface DirectoryLockMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  /** @throws java.io.IOException */
  close(): void;
  isValid(): boolean;
}
export type DirectoryLock = DirectoryLockMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface DirectoryLockStatics {
  readonly LOCK_FILE: "session.lock";
  /** @throws java.io.IOException */
  create(arg0: JavaOpaque<"java.nio.file.Path">): DirectoryLock;
  /** @throws java.io.IOException */
  isLocked(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}

/** JVM class net.minecraft.util.DirectoryLock$LockException. */
export interface DirectoryLock_LockExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.IOException">];
}
export type DirectoryLock_LockException = DirectoryLock_LockExceptionMembers & JavaOpaque<"java.io.IOException">;
export interface DirectoryLock_LockExceptionStatics {
  alreadyLocked(arg0: JavaOpaque<"java.nio.file.Path">): DirectoryLock_LockException;
}

/** JVM class net.minecraft.util.EncoderCache. */
export interface EncoderCacheMembers {
  wrap<A>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [A]>): JavaOpaque<"com.mojang.serialization.Codec", [A]>;
}
export type EncoderCache = EncoderCacheMembers;
export interface EncoderCacheStatics {
  new(arg0: number): EncoderCache;
}

/** JVM class net.minecraft.util.ExceptionCollector. */
export interface ExceptionCollectorMembers<T /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> {
  add(arg0: T): void;
  /** @throws java.lang.Throwable */
  throwIfPresent(): void;
}
export type ExceptionCollector<T /* extends JavaOpaque<"java.lang.Throwable"> */ = unknown> = ExceptionCollectorMembers<T>;
export interface ExceptionCollectorStatics {
  new<T /* extends JavaOpaque<"java.lang.Throwable"> */>(): ExceptionCollector<T>;
}

/** JVM class net.minecraft.util.ExtraCodecs. */
export interface ExtraCodecsMembers {
}
export type ExtraCodecs = ExtraCodecsMembers;
export interface ExtraCodecsStatics {
  new(): ExtraCodecs;
  readonly ARGB_COLOR_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly AXISANGLE4F: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.AxisAngle4f">]>;
  readonly BASE64_STRING: JavaOpaque<"com.mojang.serialization.Codec", [Array<number>]>;
  readonly BIT_SET: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.util.BitSet">]>;
  readonly CHAT_STRING: JavaOpaque<"com.mojang.serialization.Codec", [string]>;
  readonly CODEPOINT: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly ESCAPED_STRING: JavaOpaque<"com.mojang.serialization.Codec", [string]>;
  readonly GAME_PROFILE: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"com.mojang.authlib.GameProfile">]>;
  readonly INSTANT_ISO8601: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.time.Instant">]>;
  readonly JAVA: JavaOpaque<"com.mojang.serialization.Codec", [object]>;
  readonly JSON: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"com.google.gson.JsonElement">]>;
  readonly MATRIX4F: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Matrix4fc">]>;
  readonly NBT: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_nbt.Tag]>;
  readonly NON_EMPTY_STRING: JavaOpaque<"com.mojang.serialization.Codec", [string]>;
  readonly NON_NEGATIVE_FLOAT: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly NON_NEGATIVE_INT: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly PATTERN: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.util.regex.Pattern">]>;
  readonly PLAYER_NAME: JavaOpaque<"com.mojang.serialization.Codec", [string]>;
  readonly POSITIVE_FLOAT: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly POSITIVE_INT: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly PROPERTY_MAP: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"com.mojang.authlib.properties.PropertyMap">]>;
  readonly QUATERNIONF: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Quaternionf">]>;
  readonly QUATERNIONF_COMPONENTS: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Quaternionf">]>;
  readonly RESOURCE_PATH_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [string]>;
  readonly RGB_COLOR_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly TAG_OR_ELEMENT_ID: JavaOpaque<"com.mojang.serialization.Codec", [ExtraCodecs_TagOrElementLocation]>;
  readonly UNSIGNED_BYTE: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly UNTRUSTED_URI: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.net.URI">]>;
  readonly VECTOR2F: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Vector2f">]>;
  readonly VECTOR3F: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Vector3f">]>;
  readonly VECTOR3I: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Vector3i">]>;
  readonly VECTOR4F: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"org.joml.Vector4f">]>;
  asOptionalLong(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [JavaOptional<bigint>]>): JavaOpaque<"com.mojang.serialization.MapCodec", [JavaOptionalBigInt]>;
  catchDecoderException<A>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [A]>): JavaOpaque<"com.mojang.serialization.Codec", [A]>;
  compactListCodec<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [JavaList<E>]>;
  compactListCodec<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<E>]>): JavaOpaque<"com.mojang.serialization.Codec", [JavaList<E>]>;
  converter<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  dispatchOptionalValue<K, V>(arg0: string, arg1: string, arg2: JavaOpaque<"com.mojang.serialization.Codec", [K]>, arg3: JavaFunction<V, K>, arg4: JavaFunction<K, JavaOpaque<"com.mojang.serialization.Codec", [V]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [V]>;
  ensureHomogenous<E, L /* extends JavaCollection<E> */, T>(arg0: JavaFunction<E, T>): JavaFunction<L, JavaOpaque<"com.mojang.serialization.DataResult", [L]>>;
  floatRange(arg0: number, arg1: number): JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  readonly fromOptionalLong: JavaFunction<JavaOptionalBigInt, JavaOptional<bigint>>;
  idResolverCodec<I, E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [I]>, arg1: JavaFunction<I, E>, arg2: JavaFunction<E, I>): JavaOpaque<"com.mojang.serialization.Codec", [E]>;
  idResolverCodec<E>(arg0: JavaOpaque<"java.util.function.ToIntFunction", [E]>, arg1: JavaOpaque<"java.util.function.IntFunction", [E]>, arg2: number): JavaOpaque<"com.mojang.serialization.Codec", [E]>;
  intRange(arg0: number, arg1: number): JavaOpaque<"com.mojang.serialization.Codec", [number]>;
  intervalCodec<P, I>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [P]>, arg1: string, arg2: string, arg3: JavaBiFunction<P, P, JavaOpaque<"com.mojang.serialization.DataResult", [I]>>, arg4: JavaFunction<I, P>, arg5: JavaFunction<I, P>): JavaOpaque<"com.mojang.serialization.Codec", [I]>;
  legacyEnum<E /* extends JavaOpaque<"java.lang.Enum", [E]> */>(arg0: JavaFunction<string, E>): JavaOpaque<"com.mojang.serialization.Codec", [E]>;
  nonEmptyHolderSet<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<T>]>): JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<T>]>;
  nonEmptyList<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<T>]>): JavaOpaque<"com.mojang.serialization.Codec", [JavaList<T>]>;
  nonEmptyMap<M /* extends JavaMap<object, object> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [M]>): JavaOpaque<"com.mojang.serialization.Codec", [M]>;
  object2BooleanMap<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2BooleanMap", [T]>]>;
  optionalEmptyMap<A>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [A]>): JavaOpaque<"com.mojang.serialization.Codec", [JavaOptional<A>]>;
  orCompressed<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [E]>): JavaOpaque<"com.mojang.serialization.Codec", [E]>;
  orCompressed<E>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [E]>, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [E]>): JavaOpaque<"com.mojang.serialization.MapCodec", [E]>;
  orElsePartial<A>(arg0: A): JavaOpaque<"com.mojang.serialization.Codec$ResultFunction", [A]>;
  overrideLifecycle<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg1: JavaFunction<E, JavaOpaque<"com.mojang.serialization.Lifecycle">>): JavaOpaque<"com.mojang.serialization.Codec", [E]>;
  overrideLifecycle<E>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg1: JavaFunction<E, JavaOpaque<"com.mojang.serialization.Lifecycle">>, arg2: JavaFunction<E, JavaOpaque<"com.mojang.serialization.Lifecycle">>): JavaOpaque<"com.mojang.serialization.Codec", [E]>;
  retrieveContext<E>(arg0: JavaFunction<JavaOpaque<"com.mojang.serialization.DynamicOps", [object]>, JavaOpaque<"com.mojang.serialization.DataResult", [E]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [E]>;
  sizeLimitedMap<K, V>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<K, V>]>, arg1: number): JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<K, V>]>;
  strictUnboundedMap<K, V>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [K]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [V]>): ExtraCodecs_StrictUnboundedMapCodec<K, V>;
  temporalCodec(arg0: JavaOpaque<"java.time.format.DateTimeFormatter">): JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"java.time.temporal.TemporalAccessor">]>;
  readonly toOptionalLong: JavaFunction<JavaOptional<bigint>, JavaOptionalBigInt>;
}

/** JVM class net.minecraft.util.ExtraCodecs$LateBoundIdMapper. */
export interface ExtraCodecs_LateBoundIdMapperMembers<I = unknown, V = unknown> {
  codec(arg0: JavaOpaque<"com.mojang.serialization.Codec", [I]>): JavaOpaque<"com.mojang.serialization.Codec", [V]>;
  put(arg0: I, arg1: V): ExtraCodecs_LateBoundIdMapper<I, V>;
}
export type ExtraCodecs_LateBoundIdMapper<I = unknown, V = unknown> = ExtraCodecs_LateBoundIdMapperMembers<I, V>;
export interface ExtraCodecs_LateBoundIdMapperStatics {
  new<I, V>(): ExtraCodecs_LateBoundIdMapper<I, V>;
}

/** JVM record net.minecraft.util.ExtraCodecs$StrictUnboundedMapCodec. */
export interface ExtraCodecs_StrictUnboundedMapCodecMembers<K = unknown, V = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<K, V>]>, JavaOpaque<"com.mojang.serialization.codecs.BaseMapCodec", [K, V]>];
  decode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: JavaOpaque<"com.mojang.serialization.MapLike", [T]>): JavaOpaque<"com.mojang.serialization.DataResult", [JavaMap<K, V>]>;
  decode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaMap<K, V>, T]>]>;
  elementCodec(): JavaOpaque<"com.mojang.serialization.Codec", [V]>;
  encode<T>(arg0: JavaMap<K, V>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  keyCodec(): JavaOpaque<"com.mojang.serialization.Codec", [K]>;
  toString(): string;
}
export type ExtraCodecs_StrictUnboundedMapCodec<K = unknown, V = unknown> = ExtraCodecs_StrictUnboundedMapCodecMembers<K, V> & JavaOpaque<"java.lang.Record"> & JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<K, V>]> & JavaOpaque<"com.mojang.serialization.codecs.BaseMapCodec", [K, V]>;
export interface ExtraCodecs_StrictUnboundedMapCodecStatics {
  new<K, V>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [K]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [V]>): ExtraCodecs_StrictUnboundedMapCodec<K, V>;
}

/** JVM record net.minecraft.util.ExtraCodecs$TagOrElementLocation. */
export interface ExtraCodecs_TagOrElementLocationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  tag(): boolean;
  toString(): string;
}
export type ExtraCodecs_TagOrElementLocation = ExtraCodecs_TagOrElementLocationMembers & JavaOpaque<"java.lang.Record">;
export interface ExtraCodecs_TagOrElementLocationStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: boolean): ExtraCodecs_TagOrElementLocation;
}

/** JVM class net.minecraft.util.FastBufferedInputStream. */
export interface FastBufferedInputStreamMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.InputStream">];
  /** @throws java.io.IOException */
  available(): number;
  /** @throws java.io.IOException */
  close(): void;
  /** @throws java.io.IOException */
  read(): number;
  /** @throws java.io.IOException */
  read(arg0: Array<number>, arg1: number, arg2: number): number;
  /** @throws java.io.IOException */
  skip(arg0: bigint): bigint;
}
export type FastBufferedInputStream = FastBufferedInputStreamMembers & JavaOpaque<"java.io.InputStream">;
export interface FastBufferedInputStreamStatics {
  new(arg0: JavaOpaque<"java.io.InputStream">): FastBufferedInputStream;
  new(arg0: JavaOpaque<"java.io.InputStream">, arg1: number): FastBufferedInputStream;
}

/** JVM class net.minecraft.util.FileSystemUtil. */
export interface FileSystemUtilMembers {
}
export type FileSystemUtil = FileSystemUtilMembers;
export interface FileSystemUtilStatics {
  new(): FileSystemUtil;
  /** @throws java.io.IOException */
  safeGetPath(arg0: JavaOpaque<"java.net.URI">): JavaOpaque<"java.nio.file.Path">;
}

/** JVM class net.minecraft.util.FileZipper. */
export interface FileZipperMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.Closeable">];
  add(arg0: JavaOpaque<"java.nio.file.Path">): void;
  add(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.io.File">): void;
  add(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string): void;
  close(): void;
}
export type FileZipper = FileZipperMembers & JavaOpaque<"java.io.Closeable">;
export interface FileZipperStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): FileZipper;
}

/** JVM interface net.minecraft.util.FormattedCharSequence. */
export interface FormattedCharSequenceMembers {
  accept(arg0: FormattedCharSink): boolean;
}
export type FormattedCharSequence = FormattedCharSequenceMembers;
export interface FormattedCharSequenceStatics {
  readonly EMPTY: FormattedCharSequence;
  backward(arg0: string, arg1: j_net_minecraft_network_chat.Style): FormattedCharSequence;
  backward(arg0: string, arg1: j_net_minecraft_network_chat.Style, arg2: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2IntFunction">): FormattedCharSequence;
  codepoint(arg0: number, arg1: j_net_minecraft_network_chat.Style): FormattedCharSequence;
  composite(): FormattedCharSequence;
  composite(arg0: JavaList<FormattedCharSequence>): FormattedCharSequence;
  composite(arg0: FormattedCharSequence): FormattedCharSequence;
  composite(arg0: FormattedCharSequence, arg1: FormattedCharSequence): FormattedCharSequence;
  composite(...arg0: Array<FormattedCharSequence>): FormattedCharSequence;
  decorateOutput(arg0: FormattedCharSink, arg1: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2IntFunction">): FormattedCharSink;
  forward(arg0: string, arg1: j_net_minecraft_network_chat.Style): FormattedCharSequence;
  forward(arg0: string, arg1: j_net_minecraft_network_chat.Style, arg2: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2IntFunction">): FormattedCharSequence;
  fromList(arg0: JavaList<FormattedCharSequence>): FormattedCharSequence;
  fromPair(arg0: FormattedCharSequence, arg1: FormattedCharSequence): FormattedCharSequence;
}

/** JVM interface net.minecraft.util.FormattedCharSink. */
export interface FormattedCharSinkMembers {
  accept(arg0: number, arg1: j_net_minecraft_network_chat.Style, arg2: number): boolean;
}
export type FormattedCharSink = FormattedCharSinkMembers;
export interface FormattedCharSinkStatics {
}

/** JVM class net.minecraft.util.FutureChain. */
export interface FutureChainMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, TaskChainer];
  append<T>(arg0: PromiseLike<T>, arg1: JavaConsumer<T>): void;
  close(): void;
}
export type FutureChain = FutureChainMembers & JavaOpaque<"java.lang.AutoCloseable"> & TaskChainer;
export interface FutureChainStatics {
  new(arg0: JavaOpaque<"java.util.concurrent.Executor">): FutureChain;
}

/** JVM class net.minecraft.util.Graph. */
export interface GraphMembers {
}
export type Graph = GraphMembers;
export interface GraphStatics {
  depthFirstSearch<T>(arg0: JavaMap<T, JavaSet<T>>, arg1: JavaSet<T>, arg2: JavaSet<T>, arg3: JavaConsumer<T>, arg4: T): boolean;
}

/** JVM class net.minecraft.util.GsonHelper. */
export interface GsonHelperMembers {
}
export type GsonHelper = GsonHelperMembers;
export interface GsonHelperStatics {
  new(): GsonHelper;
  convertToBigDecimal(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): JavaOpaque<"java.math.BigDecimal">;
  convertToBigInteger(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): JavaOpaque<"java.math.BigInteger">;
  convertToBoolean(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): boolean;
  convertToByte(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): number;
  convertToCharacter(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): string;
  convertToDouble(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): number;
  convertToFloat(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): number;
  convertToInt(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): number;
  convertToItem(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  convertToJsonArray(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): JavaOpaque<"com.google.gson.JsonArray">;
  convertToJsonObject(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): JavaOpaque<"com.google.gson.JsonObject">;
  convertToLong(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): bigint;
  convertToObject<T>(arg0: JavaOpaque<"com.google.gson.JsonElement"> | null, arg1: string, arg2: JavaOpaque<"com.google.gson.JsonDeserializationContext">, arg3: JavaClass<T>): T;
  convertToShort(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): number;
  convertToString(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: string): string;
  encodesLongerThan(arg0: JavaOpaque<"com.google.gson.JsonElement">, arg1: number): boolean;
  fromJson<T>(arg0: JavaOpaque<"com.google.gson.Gson">, arg1: JavaOpaque<"java.io.Reader">, arg2: JavaOpaque<"com.google.gson.reflect.TypeToken", [T]>): T;
  fromJson<T>(arg0: JavaOpaque<"com.google.gson.Gson">, arg1: JavaOpaque<"java.io.Reader">, arg2: JavaClass<T>): T;
  fromJson<T>(arg0: JavaOpaque<"com.google.gson.Gson">, arg1: string, arg2: JavaClass<T>): T;
  fromNullableJson<T>(arg0: JavaOpaque<"com.google.gson.Gson">, arg1: JavaOpaque<"java.io.Reader">, arg2: JavaOpaque<"com.google.gson.reflect.TypeToken", [T]>): T | null;
  fromNullableJson<T>(arg0: JavaOpaque<"com.google.gson.Gson">, arg1: string, arg2: JavaOpaque<"com.google.gson.reflect.TypeToken", [T]>): T | null;
  getAsBigDecimal(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"java.math.BigDecimal">;
  getAsBigDecimal(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: JavaOpaque<"java.math.BigDecimal">): JavaOpaque<"java.math.BigDecimal">;
  getAsBigInteger(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"java.math.BigInteger">;
  getAsBigInteger(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: JavaOpaque<"java.math.BigInteger">): JavaOpaque<"java.math.BigInteger">;
  getAsBoolean(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  getAsBoolean(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: boolean): boolean;
  getAsByte(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): number;
  getAsByte(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: number): number;
  getAsCharacter(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): string;
  getAsCharacter(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: string): string;
  getAsDouble(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): number;
  getAsDouble(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: number): number;
  getAsFloat(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): number;
  getAsFloat(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: number): number;
  getAsInt(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): number;
  getAsInt(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: number): number;
  getAsItem(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  getAsItem(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item> | null): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item> | null;
  getAsJsonArray(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"com.google.gson.JsonArray">;
  getAsJsonArray(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: JavaOpaque<"com.google.gson.JsonArray"> | null): JavaOpaque<"com.google.gson.JsonArray"> | null;
  getAsJsonObject(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"com.google.gson.JsonObject">;
  getAsJsonObject(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: JavaOpaque<"com.google.gson.JsonObject"> | null): JavaOpaque<"com.google.gson.JsonObject"> | null;
  getAsLong(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): bigint;
  getAsLong(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: bigint): bigint;
  getAsObject<T>(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: JavaOpaque<"com.google.gson.JsonDeserializationContext">, arg3: JavaClass<T>): T;
  getAsObject<T>(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: T | null, arg3: JavaOpaque<"com.google.gson.JsonDeserializationContext">, arg4: JavaClass<T>): T | null;
  getAsShort(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): number;
  getAsShort(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: number): number;
  getAsString(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): string;
  getAsString(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: string | null): string | null;
  getNonNull(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"com.google.gson.JsonElement">;
  getType(arg0: JavaOpaque<"com.google.gson.JsonElement"> | null): string;
  isArrayNode(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  isBooleanValue(arg0: JavaOpaque<"com.google.gson.JsonElement">): boolean;
  isBooleanValue(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  isNumberValue(arg0: JavaOpaque<"com.google.gson.JsonElement">): boolean;
  isNumberValue(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  isObjectNode(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  isStringValue(arg0: JavaOpaque<"com.google.gson.JsonElement">): boolean;
  isStringValue(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  isValidNode(arg0: JavaOpaque<"com.google.gson.JsonObject"> | null, arg1: string): boolean;
  isValidPrimitive(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): boolean;
  parse(arg0: JavaOpaque<"java.io.Reader">): JavaOpaque<"com.google.gson.JsonObject">;
  parse(arg0: string): JavaOpaque<"com.google.gson.JsonObject">;
  parseArray(arg0: JavaOpaque<"java.io.Reader">): JavaOpaque<"com.google.gson.JsonArray">;
  parseArray(arg0: string): JavaOpaque<"com.google.gson.JsonArray">;
  toStableString(arg0: JavaOpaque<"com.google.gson.JsonElement">): string;
  /** @throws java.io.IOException */
  writeValue(arg0: JavaOpaque<"com.google.gson.stream.JsonWriter">, arg1: JavaOpaque<"com.google.gson.JsonElement"> | null, arg2: JavaOpaque<"java.util.Comparator", [string]> | null): void;
}

/** JVM class net.minecraft.util.HashOps. */
export interface HashOpsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.DynamicOps", [JavaOpaque<"com.google.common.hash.HashCode">]>];
  convertTo<U>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>, arg1: JavaOpaque<"com.google.common.hash.HashCode">): U;
  createBoolean(arg0: boolean): JavaOpaque<"com.google.common.hash.HashCode">;
  createByte(arg0: number): JavaOpaque<"com.google.common.hash.HashCode">;
  createByteList(arg0: JavaOpaque<"java.nio.ByteBuffer">): JavaOpaque<"com.google.common.hash.HashCode">;
  createDouble(arg0: number): JavaOpaque<"com.google.common.hash.HashCode">;
  createFloat(arg0: number): JavaOpaque<"com.google.common.hash.HashCode">;
  createInt(arg0: number): JavaOpaque<"com.google.common.hash.HashCode">;
  createIntList(arg0: JavaOpaque<"java.util.stream.IntStream">): JavaOpaque<"com.google.common.hash.HashCode">;
  createList(arg0: JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.google.common.hash.HashCode">]>): JavaOpaque<"com.google.common.hash.HashCode">;
  createLong(arg0: bigint): JavaOpaque<"com.google.common.hash.HashCode">;
  createLongList(arg0: JavaOpaque<"java.util.stream.LongStream">): JavaOpaque<"com.google.common.hash.HashCode">;
  createMap(arg0: JavaMap<JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">>): JavaOpaque<"com.google.common.hash.HashCode">;
  createMap(arg0: JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">]>]>): JavaOpaque<"com.google.common.hash.HashCode">;
  createNumeric(arg0: number): JavaOpaque<"com.google.common.hash.HashCode">;
  createShort(arg0: number): JavaOpaque<"com.google.common.hash.HashCode">;
  createString(arg0: string): JavaOpaque<"com.google.common.hash.HashCode">;
  empty(): JavaOpaque<"com.google.common.hash.HashCode">;
  emptyList(): JavaOpaque<"com.google.common.hash.HashCode">;
  emptyMap(): JavaOpaque<"com.google.common.hash.HashCode">;
  get(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: string): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  getBooleanValue(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [boolean]>;
  getByteBuffer(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.nio.ByteBuffer">]>;
  getGeneric(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  getIntStream(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.IntStream">]>;
  getList(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaConsumer<JavaOpaque<"com.google.common.hash.HashCode">>>]>;
  getLongStream(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.LongStream">]>;
  getMap(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.serialization.MapLike", [JavaOpaque<"com.google.common.hash.HashCode">]>]>;
  getMapEntries(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaBiConsumer<JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">>>]>;
  getMapValues(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">]>]>]>;
  getNumberValue(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [number]>;
  getNumberValue(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: number): number;
  getStream(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.google.common.hash.HashCode">]>]>;
  getStringValue(arg0: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [string]>;
  listBuilder(): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  mapBuilder(): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  mergeToList(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  mergeToList(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaList<JavaOpaque<"com.google.common.hash.HashCode">>): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  mergeToMap(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaOpaque<"com.google.common.hash.HashCode">, arg2: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  mergeToMap(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaOpaque<"com.mojang.serialization.MapLike", [JavaOpaque<"com.google.common.hash.HashCode">]>): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  mergeToMap(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaMap<JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">>): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.google.common.hash.HashCode">]>;
  remove(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: string): JavaOpaque<"com.google.common.hash.HashCode">;
  set(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: string, arg2: JavaOpaque<"com.google.common.hash.HashCode">): JavaOpaque<"com.google.common.hash.HashCode">;
  toString(): string;
  update(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: string, arg2: JavaFunction<JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">>): JavaOpaque<"com.google.common.hash.HashCode">;
  updateGeneric(arg0: JavaOpaque<"com.google.common.hash.HashCode">, arg1: JavaOpaque<"com.google.common.hash.HashCode">, arg2: JavaFunction<JavaOpaque<"com.google.common.hash.HashCode">, JavaOpaque<"com.google.common.hash.HashCode">>): JavaOpaque<"com.google.common.hash.HashCode">;
}
export type HashOps = HashOpsMembers & JavaOpaque<"com.mojang.serialization.DynamicOps", [JavaOpaque<"com.google.common.hash.HashCode">]>;
export interface HashOpsStatics {
  new(arg0: JavaOpaque<"com.google.common.hash.HashFunction">): HashOps;
  readonly CRC32C_INSTANCE: HashOps;
  readonly EMPTY_LIST_PAYLOAD: Array<number>;
  readonly EMPTY_MAP_PAYLOAD: Array<number>;
}

/** JVM class net.minecraft.util.HttpUtil. */
export interface HttpUtilMembers {
}
export type HttpUtil = HttpUtilMembers;
export interface HttpUtilStatics {
  downloadFile(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.net.URL">, arg2: JavaMap<string, string>, arg3: JavaOpaque<"com.google.common.hash.HashFunction">, arg4: JavaOpaque<"com.google.common.hash.HashCode"> | null, arg5: number, arg6: JavaOpaque<"java.net.Proxy">, arg7: HttpUtil_DownloadProgressListener): JavaOpaque<"java.nio.file.Path">;
  getAvailablePort(): number;
  isPortAvailable(arg0: number): boolean;
}

/** JVM interface net.minecraft.util.HttpUtil$DownloadProgressListener. */
export interface HttpUtil_DownloadProgressListenerMembers {
  downloadStart(arg0: JavaOptionalBigInt): void;
  downloadedBytes(arg0: bigint): void;
  requestFinished(arg0: boolean): void;
  requestStart(): void;
}
export type HttpUtil_DownloadProgressListener = HttpUtil_DownloadProgressListenerMembers;
export interface HttpUtil_DownloadProgressListenerStatics {
}

/** JVM record net.minecraft.util.InclusiveRange. */
export interface InclusiveRangeMembers<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  contains(arg0: InclusiveRange<T>): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  isValueInRange(arg0: T): boolean;
  maxInclusive(): T;
  minInclusive(): T;
  toString(): string;
}
export type InclusiveRange<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */ = unknown> = InclusiveRangeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface InclusiveRangeStatics {
  new<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: T): InclusiveRange<T>;
  new<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: T, arg1: T): InclusiveRange<T>;
  readonly INT: JavaOpaque<"com.mojang.serialization.Codec", [InclusiveRange<number>]>;
  codec<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [InclusiveRange<T>]>;
  codec<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: T, arg2: T): JavaOpaque<"com.mojang.serialization.Codec", [InclusiveRange<T>]>;
  create<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: T, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [InclusiveRange<T>]>;
}

/** JVM record net.minecraft.util.KeyDispatchDataCodec. */
export interface KeyDispatchDataCodecMembers<A = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [A]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type KeyDispatchDataCodec<A = unknown> = KeyDispatchDataCodecMembers<A> & JavaOpaque<"java.lang.Record">;
export interface KeyDispatchDataCodecStatics {
  new<A>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [A]>): KeyDispatchDataCodec<A>;
  of<A>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [A]>): KeyDispatchDataCodec<A>;
}

/** JVM class net.minecraft.util.LazyLoadedValue. */
export interface LazyLoadedValueMembers<T = unknown> {
  get(): T;
}
export type LazyLoadedValue<T = unknown> = LazyLoadedValueMembers<T>;
export interface LazyLoadedValueStatics {
  new<T>(arg0: JavaSupplier<T>): LazyLoadedValue<T>;
}

/** JVM class net.minecraft.util.LenientJsonParser. */
export interface LenientJsonParserMembers {
}
export type LenientJsonParser = LenientJsonParserMembers;
export interface LenientJsonParserStatics {
  new(): LenientJsonParser;
  /** @throws com.google.gson.JsonIOException @throws com.google.gson.JsonSyntaxException */
  parse(arg0: JavaOpaque<"java.io.Reader">): JavaOpaque<"com.google.gson.JsonElement">;
  /** @throws com.google.gson.JsonSyntaxException */
  parse(arg0: string): JavaOpaque<"com.google.gson.JsonElement">;
}

/** JVM class net.minecraft.util.LinearCongruentialGenerator. */
export interface LinearCongruentialGeneratorMembers {
}
export type LinearCongruentialGenerator = LinearCongruentialGeneratorMembers;
export interface LinearCongruentialGeneratorStatics {
  new(): LinearCongruentialGenerator;
  next(arg0: bigint, arg1: bigint): bigint;
}

/** JVM interface net.minecraft.util.ListAndDeque. */
export interface ListAndDequeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.Serializable">, JavaOpaque<"java.lang.Cloneable">, JavaOpaque<"java.util.Deque", [T]>, JavaList<T>, JavaOpaque<"java.util.RandomAccess">];
  addFirst(arg0: T): void;
  addLast(arg0: T): void;
  element(): T;
  getFirst(): T;
  getLast(): T;
  offer(arg0: T): boolean;
  peek(): T | null;
  poll(): T | null;
  pop(): T;
  push(arg0: T): void;
  remove(): T;
  removeFirst(): T;
  removeLast(): T;
  reversed(): ListAndDeque<T>;
}
export type ListAndDeque<T = unknown> = ListAndDequeMembers<T> & JavaOpaque<"java.io.Serializable"> & JavaOpaque<"java.lang.Cloneable"> & JavaOpaque<"java.util.Deque", [T]> & JavaList<T> & JavaOpaque<"java.util.RandomAccess">;
export interface ListAndDequeStatics {
}

/** JVM class net.minecraft.util.MemoryReserve. */
export interface MemoryReserveMembers {
}
export type MemoryReserve = MemoryReserveMembers;
export interface MemoryReserveStatics {
  new(): MemoryReserve;
  allocate(): void;
  release(): void;
}

/** JVM record net.minecraft.util.ModCheck. */
export interface ModCheckMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  confidence(): ModCheck_Confidence;
  description(): string;
  equals(arg0: object): boolean;
  fullDescription(): string;
  hashCode(): number;
  merge(arg0: ModCheck): ModCheck;
  shouldReportAsModified(): boolean;
  toString(): string;
}
export type ModCheck = ModCheckMembers & JavaOpaque<"java.lang.Record">;
export interface ModCheckStatics {
  new(arg0: ModCheck_Confidence, arg1: string): ModCheck;
  identify(arg0: string, arg1: JavaSupplier<string>, arg2: string, arg3: JavaClass<object>): ModCheck;
}

/** Live JVM enum net.minecraft.util.ModCheck$Confidence; constants are host handles, not strings. */
export type ModCheck_Confidence = JavaEnum<"net.minecraft.util.ModCheck$Confidence", "DEFINITELY" | "PROBABLY_NOT" | "VERY_LIKELY"> & ModCheck_ConfidenceMembers;
export interface ModCheck_ConfidenceMembers {
}
export interface ModCheck_ConfidenceStatics {
  readonly DEFINITELY: ModCheck_Confidence;
  readonly PROBABLY_NOT: ModCheck_Confidence;
  readonly VERY_LIKELY: ModCheck_Confidence;
  valueOf(arg0: string): ModCheck_Confidence;
  values(): Array<ModCheck_Confidence>;
}

/** JVM class net.minecraft.util.Mth. */
export interface MthMembers {
}
export type Mth = MthMembers;
export interface MthStatics {
  new(): Mth;
  readonly DEG_TO_RAD: 0.017453292;
  readonly EPSILON: 0.00001;
  readonly HALF_PI: 1.5707964;
  readonly PI: 3.1415927;
  readonly RAD_TO_DEG: 57.295776;
  readonly SQRT_OF_TWO: number;
  readonly TWO_PI: 6.2831855;
  readonly X_AXIS: JavaOpaque<"org.joml.Vector3f">;
  readonly Y_AXIS: JavaOpaque<"org.joml.Vector3f">;
  readonly Z_AXIS: JavaOpaque<"org.joml.Vector3f">;
  abs(arg0: number): number;
  abs(arg0: number): number;
  absMax(arg0: number, arg1: number): number;
  approach(arg0: number, arg1: number, arg2: number): number;
  approachDegrees(arg0: number, arg1: number, arg2: number): number;
  atan2(arg0: number, arg1: number): number;
  binarySearch(arg0: number, arg1: number, arg2: JavaOpaque<"java.util.function.IntPredicate">): number;
  catmullrom(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  ceil(arg0: number): number;
  ceil(arg0: number): number;
  ceillog2(arg0: number): number;
  clamp(arg0: number, arg1: number, arg2: number): number;
  clamp(arg0: number, arg1: number, arg2: number): number;
  clamp(arg0: number, arg1: number, arg2: number): number;
  clamp(arg0: bigint, arg1: bigint, arg2: bigint): bigint;
  clampedLerp(arg0: number, arg1: number, arg2: number): number;
  clampedLerp(arg0: number, arg1: number, arg2: number): number;
  clampedMap(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  clampedMap(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  cos(arg0: number): number;
  createInsecureUUID(): JavaOpaque<"java.util.UUID">;
  createInsecureUUID(arg0: RandomSource): JavaOpaque<"java.util.UUID">;
  degreesDifference(arg0: number, arg1: number): number;
  degreesDifferenceAbs(arg0: number, arg1: number): number;
  easeInOutSine(arg0: number): number;
  equal(arg0: number, arg1: number): boolean;
  equal(arg0: number, arg1: number): boolean;
  fastInvCubeRoot(arg0: number): number;
  fastInvSqrt(arg0: number): number;
  floor(arg0: number): number;
  floor(arg0: number): number;
  floorDiv(arg0: number, arg1: number): number;
  frac(arg0: number): number;
  frac(arg0: number): number;
  getInt(arg0: string, arg1: number): number;
  getSeed(arg0: number, arg1: number, arg2: number): bigint;
  getSeed(arg0: j_net_minecraft_core.Vec3i): bigint;
  hsvToArgb(arg0: number, arg1: number, arg2: number, arg3: number): number;
  hsvToRgb(arg0: number, arg1: number, arg2: number): number;
  invSqrt(arg0: number): number;
  invSqrt(arg0: number): number;
  inverseLerp(arg0: number, arg1: number, arg2: number): number;
  inverseLerp(arg0: number, arg1: number, arg2: number): number;
  isMultipleOf(arg0: number, arg1: number): boolean;
  isPowerOfTwo(arg0: number): boolean;
  length(arg0: number, arg1: number): number;
  length(arg0: number, arg1: number, arg2: number): number;
  length(arg0: number, arg1: number): number;
  lengthSquared(arg0: number, arg1: number): number;
  lengthSquared(arg0: number, arg1: number, arg2: number): number;
  lengthSquared(arg0: number, arg1: number, arg2: number): number;
  lerp(arg0: number, arg1: number, arg2: number): number;
  lerp(arg0: number, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  lerp(arg0: number, arg1: number, arg2: number): number;
  lerp2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
  lerp3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): number;
  lerpDiscrete(arg0: number, arg1: number, arg2: number): number;
  lerpInt(arg0: number, arg1: number, arg2: number): number;
  lfloor(arg0: number): bigint;
  log2(arg0: number): number;
  map(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  map(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  mulAndTruncate(arg0: JavaOpaque<"org.apache.commons.lang3.math.Fraction">, arg1: number): number;
  murmurHash3Mixer(arg0: number): number;
  nextDouble(arg0: RandomSource, arg1: number, arg2: number): number;
  nextFloat(arg0: RandomSource, arg1: number, arg2: number): number;
  nextInt(arg0: RandomSource, arg1: number, arg2: number): number;
  normal(arg0: RandomSource, arg1: number, arg2: number): number;
  outFromOrigin(arg0: number, arg1: number, arg2: number): JavaOpaque<"java.util.stream.IntStream">;
  outFromOrigin(arg0: number, arg1: number, arg2: number, arg3: number): JavaOpaque<"java.util.stream.IntStream">;
  packDegrees(arg0: number): number;
  positiveCeilDiv(arg0: number, arg1: number): number;
  positiveModulo(arg0: number, arg1: number): number;
  positiveModulo(arg0: number, arg1: number): number;
  positiveModulo(arg0: number, arg1: number): number;
  quantize(arg0: number, arg1: number): number;
  randomBetween(arg0: RandomSource, arg1: number, arg2: number): number;
  randomBetweenInclusive(arg0: RandomSource, arg1: number, arg2: number): number;
  rayIntersectsAABB(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.AABB): boolean;
  rotLerp(arg0: number, arg1: number, arg2: number): number;
  rotLerp(arg0: number, arg1: number, arg2: number): number;
  rotLerpRad(arg0: number, arg1: number, arg2: number): number;
  rotateIfNecessary(arg0: number, arg1: number, arg2: number): number;
  rotationAroundAxis(arg0: JavaOpaque<"org.joml.Vector3f">, arg1: JavaOpaque<"org.joml.Quaternionf">, arg2: JavaOpaque<"org.joml.Quaternionf">): JavaOpaque<"org.joml.Quaternionf">;
  roundToward(arg0: number, arg1: number): number;
  sign(arg0: number): number;
  sin(arg0: number): number;
  smallestEncompassingPowerOfTwo(arg0: number): number;
  smallestSquareSide(arg0: number): number;
  smoothstep(arg0: number): number;
  smoothstepDerivative(arg0: number): number;
  sqrt(arg0: number): number;
  square(arg0: number): number;
  square(arg0: number): number;
  square(arg0: number): number;
  square(arg0: bigint): bigint;
  triangleWave(arg0: number, arg1: number): number;
  unpackDegrees(arg0: number): number;
  wobble(arg0: number): number;
  wrapDegrees(arg0: number): number;
  wrapDegrees(arg0: number): number;
  wrapDegrees(arg0: number): number;
  wrapDegrees(arg0: bigint): number;
}

/** JVM class net.minecraft.util.NativeModuleLister. */
export interface NativeModuleListerMembers {
}
export type NativeModuleLister = NativeModuleListerMembers;
export interface NativeModuleListerStatics {
  new(): NativeModuleLister;
  addCrashSection(arg0: j_net_minecraft.CrashReportCategory): void;
  listModules(): JavaList<NativeModuleLister_NativeModuleInfo>;
}

/** JVM class net.minecraft.util.NativeModuleLister$NativeModuleInfo. */
export interface NativeModuleLister_NativeModuleInfoMembers {
  readonly name: string;
  toString(): string;
  readonly version: JavaOptional<NativeModuleLister_NativeModuleVersion>;
}
export type NativeModuleLister_NativeModuleInfo = NativeModuleLister_NativeModuleInfoMembers;
export interface NativeModuleLister_NativeModuleInfoStatics {
  new(arg0: string, arg1: JavaOptional<NativeModuleLister_NativeModuleVersion>): NativeModuleLister_NativeModuleInfo;
}

/** JVM class net.minecraft.util.NativeModuleLister$NativeModuleVersion. */
export interface NativeModuleLister_NativeModuleVersionMembers {
  readonly company: string;
  readonly description: string;
  toString(): string;
  readonly version: string;
}
export type NativeModuleLister_NativeModuleVersion = NativeModuleLister_NativeModuleVersionMembers;
export interface NativeModuleLister_NativeModuleVersionStatics {
  new(arg0: string, arg1: string, arg2: string): NativeModuleLister_NativeModuleVersion;
}

/** JVM class net.minecraft.util.NullOps. */
export interface NullOpsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.DynamicOps", [Unit]>];
  convertTo<U>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>, arg1: Unit): U;
  createBoolean(arg0: boolean): Unit;
  createByte(arg0: number): Unit;
  createByteList(arg0: JavaOpaque<"java.nio.ByteBuffer">): Unit;
  createDouble(arg0: number): Unit;
  createFloat(arg0: number): Unit;
  createInt(arg0: number): Unit;
  createIntList(arg0: JavaOpaque<"java.util.stream.IntStream">): Unit;
  createList(arg0: JavaOpaque<"java.util.stream.Stream", [Unit]>): Unit;
  createLong(arg0: bigint): Unit;
  createLongList(arg0: JavaOpaque<"java.util.stream.LongStream">): Unit;
  createMap(arg0: JavaMap<Unit, Unit>): Unit;
  createMap(arg0: JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [Unit, Unit]>]>): Unit;
  createNumeric(arg0: number): Unit;
  createShort(arg0: number): Unit;
  createString(arg0: string): Unit;
  empty(): Unit;
  emptyList(): Unit;
  emptyMap(): Unit;
  getBooleanValue(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [boolean]>;
  getByteBuffer(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.nio.ByteBuffer">]>;
  getIntStream(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.IntStream">]>;
  getList(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaConsumer<Unit>>]>;
  getLongStream(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.LongStream">]>;
  getMap(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.serialization.MapLike", [Unit]>]>;
  getMapEntries(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaBiConsumer<Unit, Unit>>]>;
  getMapValues(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [Unit, Unit]>]>]>;
  getNumberValue(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [number]>;
  getStream(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [Unit]>]>;
  getStringValue(arg0: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [string]>;
  listBuilder(): JavaOpaque<"com.mojang.serialization.ListBuilder", [Unit]>;
  mapBuilder(): JavaOpaque<"com.mojang.serialization.RecordBuilder", [Unit]>;
  mergeToList(arg0: Unit, arg1: JavaList<Unit>): JavaOpaque<"com.mojang.serialization.DataResult", [Unit]>;
  mergeToList(arg0: Unit, arg1: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [Unit]>;
  mergeToMap(arg0: Unit, arg1: JavaOpaque<"com.mojang.serialization.MapLike", [Unit]>): JavaOpaque<"com.mojang.serialization.DataResult", [Unit]>;
  mergeToMap(arg0: Unit, arg1: JavaMap<Unit, Unit>): JavaOpaque<"com.mojang.serialization.DataResult", [Unit]>;
  mergeToMap(arg0: Unit, arg1: Unit, arg2: Unit): JavaOpaque<"com.mojang.serialization.DataResult", [Unit]>;
  remove(arg0: Unit, arg1: string): Unit;
  toString(): string;
}
export type NullOps = NullOpsMembers & JavaOpaque<"com.mojang.serialization.DynamicOps", [Unit]>;
export interface NullOpsStatics {
  readonly INSTANCE: NullOps;
}

/** JVM interface net.minecraft.util.OptionEnum. */
export interface OptionEnumMembers {
  getCaption(): j_net_minecraft_network_chat.Component;
  getId(): number;
  getKey(): string;
}
export type OptionEnum = OptionEnumMembers;
export interface OptionEnumStatics {
}

/** JVM class net.minecraft.util.ParticleUtils. */
export interface ParticleUtilsMembers {
}
export type ParticleUtils = ParticleUtilsMembers;
export interface ParticleUtilsStatics {
  new(): ParticleUtils;
  spawnParticleBelow(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: RandomSource, arg3: j_net_minecraft_core_particles.ParticleOptions): void;
  spawnParticleInBlock(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: j_net_minecraft_core_particles.ParticleOptions): void;
  spawnParticleOnFace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_core_particles.ParticleOptions, arg4: j_net_minecraft_world_phys.Vec3, arg5: number): void;
  spawnParticles(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: j_net_minecraft_core_particles.ParticleOptions): void;
  spawnParticlesAlongAxis(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: j_net_minecraft_core_particles.ParticleOptions, arg5: j_net_minecraft_util_valueproviders.UniformInt): void;
  spawnParticlesOnBlockFace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core_particles.ParticleOptions, arg3: j_net_minecraft_util_valueproviders.IntProvider, arg4: j_net_minecraft_core.Direction, arg5: JavaSupplier<j_net_minecraft_world_phys.Vec3>, arg6: number): void;
  spawnParticlesOnBlockFaces(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core_particles.ParticleOptions, arg3: j_net_minecraft_util_valueproviders.IntProvider): void;
  spawnSmashAttackParticles(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
}

/** JVM class net.minecraft.util.PlaceholderLookupProvider. */
export interface PlaceholderLookupProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_core.HolderGetter_Provider];
  createSerializationContext<V>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [V]>): j_net_minecraft_resources.RegistryOps<V>;
  createSwapper(): RegistryContextSwapper;
  hasRegisteredPlaceholders(): boolean;
  lookup<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOptional<j_net_minecraft_core.HolderGetter<T>>;
}
export type PlaceholderLookupProvider = PlaceholderLookupProviderMembers & j_net_minecraft_core.HolderGetter_Provider;
export interface PlaceholderLookupProviderStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): PlaceholderLookupProvider;
}

/** JVM record net.minecraft.util.PngInfo. */
export interface PngInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): number;
  toString(): string;
  width(): number;
}
export type PngInfo = PngInfoMembers & JavaOpaque<"java.lang.Record">;
export interface PngInfoStatics {
  new(arg0: number, arg1: number): PngInfo;
  /** @throws java.io.IOException */
  fromBytes(arg0: Array<number>): PngInfo;
  /** @throws java.io.IOException */
  fromStream(arg0: JavaOpaque<"java.io.InputStream">): PngInfo;
  /** @throws java.io.IOException */
  validateHeader(arg0: JavaOpaque<"java.nio.ByteBuffer">): void;
}

/** JVM interface net.minecraft.util.ProblemReporter. */
export interface ProblemReporterMembers {
  forChild(arg0: ProblemReporter_PathElement): ProblemReporter;
  report(arg0: ProblemReporter_Problem): void;
}
export type ProblemReporter = ProblemReporterMembers;
export interface ProblemReporterStatics {
  readonly DISCARDING: ProblemReporter;
}

/** JVM class net.minecraft.util.ProblemReporter$Collector. */
export interface ProblemReporter_CollectorMembers {
  readonly __javaSupertypes?: readonly [ProblemReporter];
  forChild(arg0: ProblemReporter_PathElement): ProblemReporter;
  forEach(arg0: JavaBiConsumer<string, ProblemReporter_Problem>): void;
  getReport(): string;
  getTreeReport(): string;
  isEmpty(): boolean;
  report(arg0: ProblemReporter_Problem): void;
}
export type ProblemReporter_Collector = ProblemReporter_CollectorMembers & ProblemReporter;
export interface ProblemReporter_CollectorStatics {
  new(): ProblemReporter_Collector;
  new(arg0: ProblemReporter_PathElement): ProblemReporter_Collector;
  readonly EMPTY_ROOT: ProblemReporter_PathElement;
}

/** JVM record net.minecraft.util.ProblemReporter$ElementReferencePathElement. */
export interface ProblemReporter_ElementReferencePathElementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ProblemReporter_PathElement];
  equals(arg0: object): boolean;
  get(): string;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceKey<object>;
  toString(): string;
}
export type ProblemReporter_ElementReferencePathElement = ProblemReporter_ElementReferencePathElementMembers & JavaOpaque<"java.lang.Record"> & ProblemReporter_PathElement;
export interface ProblemReporter_ElementReferencePathElementStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<object>): ProblemReporter_ElementReferencePathElement;
}

/** JVM record net.minecraft.util.ProblemReporter$FieldPathElement. */
export interface ProblemReporter_FieldPathElementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ProblemReporter_PathElement];
  equals(arg0: object): boolean;
  get(): string;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type ProblemReporter_FieldPathElement = ProblemReporter_FieldPathElementMembers & JavaOpaque<"java.lang.Record"> & ProblemReporter_PathElement;
export interface ProblemReporter_FieldPathElementStatics {
  new(arg0: string): ProblemReporter_FieldPathElement;
}

/** JVM record net.minecraft.util.ProblemReporter$IndexedFieldPathElement. */
export interface ProblemReporter_IndexedFieldPathElementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ProblemReporter_PathElement];
  equals(arg0: object): boolean;
  get(): string;
  hashCode(): number;
  index(): number;
  name(): string;
  toString(): string;
}
export type ProblemReporter_IndexedFieldPathElement = ProblemReporter_IndexedFieldPathElementMembers & JavaOpaque<"java.lang.Record"> & ProblemReporter_PathElement;
export interface ProblemReporter_IndexedFieldPathElementStatics {
  new(arg0: string, arg1: number): ProblemReporter_IndexedFieldPathElement;
}

/** JVM record net.minecraft.util.ProblemReporter$IndexedPathElement. */
export interface ProblemReporter_IndexedPathElementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ProblemReporter_PathElement];
  equals(arg0: object): boolean;
  get(): string;
  hashCode(): number;
  index(): number;
  toString(): string;
}
export type ProblemReporter_IndexedPathElement = ProblemReporter_IndexedPathElementMembers & JavaOpaque<"java.lang.Record"> & ProblemReporter_PathElement;
export interface ProblemReporter_IndexedPathElementStatics {
  new(arg0: number): ProblemReporter_IndexedPathElement;
}

/** JVM interface net.minecraft.util.ProblemReporter$PathElement. */
export interface ProblemReporter_PathElementMembers {
  get(): string;
}
export type ProblemReporter_PathElement = ProblemReporter_PathElementMembers;
export interface ProblemReporter_PathElementStatics {
}

/** JVM interface net.minecraft.util.ProblemReporter$Problem. */
export interface ProblemReporter_ProblemMembers {
  description(): string;
}
export type ProblemReporter_Problem = ProblemReporter_ProblemMembers;
export interface ProblemReporter_ProblemStatics {
}

/** JVM record net.minecraft.util.ProblemReporter$RootElementPathElement. */
export interface ProblemReporter_RootElementPathElementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ProblemReporter_PathElement];
  equals(arg0: object): boolean;
  get(): string;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceKey<object>;
  toString(): string;
}
export type ProblemReporter_RootElementPathElement = ProblemReporter_RootElementPathElementMembers & JavaOpaque<"java.lang.Record"> & ProblemReporter_PathElement;
export interface ProblemReporter_RootElementPathElementStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<object>): ProblemReporter_RootElementPathElement;
}

/** JVM record net.minecraft.util.ProblemReporter$RootFieldPathElement. */
export interface ProblemReporter_RootFieldPathElementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ProblemReporter_PathElement];
  equals(arg0: object): boolean;
  get(): string;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type ProblemReporter_RootFieldPathElement = ProblemReporter_RootFieldPathElementMembers & JavaOpaque<"java.lang.Record"> & ProblemReporter_PathElement;
export interface ProblemReporter_RootFieldPathElementStatics {
  new(arg0: string): ProblemReporter_RootFieldPathElement;
}

/** JVM class net.minecraft.util.ProblemReporter$ScopedCollector. */
export interface ProblemReporter_ScopedCollectorMembers {
  readonly __javaSupertypes?: readonly [ProblemReporter_Collector, JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
}
export type ProblemReporter_ScopedCollector = ProblemReporter_ScopedCollectorMembers & ProblemReporter_Collector & JavaOpaque<"java.lang.AutoCloseable">;
export interface ProblemReporter_ScopedCollectorStatics {
  new(arg0: ProblemReporter_PathElement, arg1: JavaOpaque<"org.slf4j.Logger">): ProblemReporter_ScopedCollector;
  new(arg0: JavaOpaque<"org.slf4j.Logger">): ProblemReporter_ScopedCollector;
}

/** JVM interface net.minecraft.util.ProgressListener. */
export interface ProgressListenerMembers {
  progressStage(arg0: j_net_minecraft_network_chat.Component): void;
  progressStagePercentage(arg0: number): void;
  progressStart(arg0: j_net_minecraft_network_chat.Component): void;
  progressStartNoAbort(arg0: j_net_minecraft_network_chat.Component): void;
  stop(): void;
}
export type ProgressListener = ProgressListenerMembers;
export interface ProgressListenerStatics {
}

/** JVM interface net.minecraft.util.RandomSource. */
export interface RandomSourceMembers {
  consumeCount(arg0: number): void;
  fork(): RandomSource;
  forkPositional(): j_net_minecraft_world_level_levelgen.PositionalRandomFactory;
  nextBoolean(): boolean;
  nextDouble(): number;
  nextFloat(): number;
  nextGaussian(): number;
  nextInt(): number;
  nextInt(arg0: number): number;
  nextInt(arg0: number, arg1: number): number;
  nextIntBetweenInclusive(arg0: number, arg1: number): number;
  nextLong(): bigint;
  setSeed(arg0: bigint): void;
  triangle(arg0: number, arg1: number): number;
  triangle(arg0: number, arg1: number): number;
}
export type RandomSource = RandomSourceMembers;
export interface RandomSourceStatics {
  readonly GAUSSIAN_SPREAD_FACTOR: 2.297;
  create(): RandomSource;
  create(arg0: bigint): RandomSource;
  createNewThreadLocalInstance(): RandomSource;
  createThreadSafe(): RandomSource;
}

/** JVM interface net.minecraft.util.RegistryContextSwapper. */
export interface RegistryContextSwapperMembers {
  swapTo<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: T, arg2: j_net_minecraft_core.HolderLookup_Provider): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
}
export type RegistryContextSwapper = RegistryContextSwapperMembers;
export interface RegistryContextSwapperStatics {
}

/** JVM class net.minecraft.util.ResourceLocationPattern. */
export interface ResourceLocationPatternMembers {
  locationPredicate(): JavaPredicate<j_net_minecraft_resources.ResourceLocation>;
  namespacePredicate(): JavaPredicate<string>;
  pathPredicate(): JavaPredicate<string>;
}
export type ResourceLocationPattern = ResourceLocationPatternMembers;
export interface ResourceLocationPatternStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ResourceLocationPattern]>;
}

/** JVM class net.minecraft.util.SegmentedAnglePrecision. */
export interface SegmentedAnglePrecisionMembers {
  fromDegrees(arg0: number): number;
  fromDegreesWithTurns(arg0: number): number;
  fromDirection(arg0: j_net_minecraft_core.Direction): number;
  getMask(): number;
  isSameAxis(arg0: number, arg1: number): boolean;
  normalize(arg0: number): number;
  toDegrees(arg0: number): number;
  toDegreesWithTurns(arg0: number): number;
}
export type SegmentedAnglePrecision = SegmentedAnglePrecisionMembers;
export interface SegmentedAnglePrecisionStatics {
  new(arg0: number): SegmentedAnglePrecision;
}

/** JVM class net.minecraft.util.SequencedPriorityIterator. */
export interface SequencedPriorityIteratorMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.google.common.collect.AbstractIterator", [T]>];
  add(arg0: T, arg1: number): void;
}
export type SequencedPriorityIterator<T = unknown> = SequencedPriorityIteratorMembers<T> & JavaOpaque<"com.google.common.collect.AbstractIterator", [T]>;
export interface SequencedPriorityIteratorStatics {
  new<T>(): SequencedPriorityIterator<T>;
}

/** JVM interface net.minecraft.util.SignatureUpdater. */
export interface SignatureUpdaterMembers {
  /** @throws java.security.SignatureException */
  update(arg0: SignatureUpdater_Output): void;
}
export type SignatureUpdater = SignatureUpdaterMembers;
export interface SignatureUpdaterStatics {
}

/** JVM interface net.minecraft.util.SignatureUpdater$Output. */
export interface SignatureUpdater_OutputMembers {
  /** @throws java.security.SignatureException */
  update(arg0: Array<number>): void;
}
export type SignatureUpdater_Output = SignatureUpdater_OutputMembers;
export interface SignatureUpdater_OutputStatics {
}

/** JVM interface net.minecraft.util.SignatureValidator. */
export interface SignatureValidatorMembers {
  validate(arg0: SignatureUpdater, arg1: Array<number>): boolean;
  validate(arg0: Array<number>, arg1: Array<number>): boolean;
}
export type SignatureValidator = SignatureValidatorMembers;
export interface SignatureValidatorStatics {
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  readonly NO_VALIDATION: SignatureValidator;
  from(arg0: JavaOpaque<"com.mojang.authlib.yggdrasil.ServicesKeySet">, arg1: JavaOpaque<"com.mojang.authlib.yggdrasil.ServicesKeyType">): SignatureValidator | null;
  from(arg0: JavaOpaque<"java.security.PublicKey">, arg1: string): SignatureValidator;
}

/** JVM interface net.minecraft.util.Signer. */
export interface SignerMembers {
  sign(arg0: SignatureUpdater): Array<number>;
  sign(arg0: Array<number>): Array<number>;
}
export type Signer = SignerMembers;
export interface SignerStatics {
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  from(arg0: JavaOpaque<"java.security.PrivateKey">, arg1: string): Signer;
}

/** JVM class net.minecraft.util.SimpleBitStorage. */
export interface SimpleBitStorageMembers {
  readonly __javaSupertypes?: readonly [BitStorage];
  copy(): BitStorage;
  get(arg0: number): number;
  getAll(arg0: JavaOpaque<"java.util.function.IntConsumer">): void;
  getAndSet(arg0: number, arg1: number): number;
  getBits(): number;
  getRaw(): Array<bigint>;
  getSize(): number;
  moonrise$countEntries(): JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap", [JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortArrayList">]>;
  set(arg0: number, arg1: number): void;
  unpack(arg0: Array<number>): void;
}
export type SimpleBitStorage = SimpleBitStorageMembers & BitStorage;
export interface SimpleBitStorageStatics {
  new(arg0: number, arg1: number): SimpleBitStorage;
  new(arg0: number, arg1: number, arg2: Array<number>): SimpleBitStorage;
  new(arg0: number, arg1: number, arg2: Array<bigint> | null): SimpleBitStorage;
}

/** JVM class net.minecraft.util.SimpleBitStorage$InitializationException. */
export interface SimpleBitStorage_InitializationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type SimpleBitStorage_InitializationException = SimpleBitStorage_InitializationExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface SimpleBitStorage_InitializationExceptionStatics {
}

/** JVM class net.minecraft.util.SingleKeyCache. */
export interface SingleKeyCacheMembers<K = unknown, V = unknown> {
  getValue(arg0: K): V;
}
export type SingleKeyCache<K = unknown, V = unknown> = SingleKeyCacheMembers<K, V>;
export interface SingleKeyCacheStatics {
  new<K, V>(arg0: JavaFunction<K, V>): SingleKeyCache<K, V>;
}

/** JVM class net.minecraft.util.SmoothDouble. */
export interface SmoothDoubleMembers {
  getNewDeltaValue(arg0: number, arg1: number): number;
  reset(): void;
}
export type SmoothDouble = SmoothDoubleMembers;
export interface SmoothDoubleStatics {
  new(): SmoothDouble;
}

/** JVM class net.minecraft.util.SortedArraySet. */
export interface SortedArraySetMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractSet", [T]>, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.util.ChunkSystemSortedArraySet", [T]>];
  add(arg0: T): boolean;
  addOrGet(arg0: T): T;
  clear(): void;
  contains(arg0: object): boolean;
  equals(arg0: object): boolean;
  first(): T;
  get(arg0: T): T | null;
  iterator(): JavaOpaque<"java.util.Iterator", [T]>;
  last(): T;
  moonrise$copy(): SortedArraySet<T>;
  moonrise$copyBackingArray(): Array<object>;
  moonrise$removeAndGet(arg0: T): T;
  moonrise$replace(arg0: T): T;
  remove(arg0: object): boolean;
  removeIf(arg0: JavaPredicate<T>): boolean;
  size(): number;
  toArray(): Array<object>;
  toArray<U>(arg0: Array<U>): Array<U>;
}
export type SortedArraySet<T = unknown> = SortedArraySetMembers<T> & JavaOpaque<"java.util.AbstractSet", [T]> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.util.ChunkSystemSortedArraySet", [T]>;
export interface SortedArraySetStatics {
  create<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(): SortedArraySet<T>;
  create<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: number): SortedArraySet<T>;
  create<T>(arg0: JavaOpaque<"java.util.Comparator", [T]>): SortedArraySet<T>;
  create<T>(arg0: JavaOpaque<"java.util.Comparator", [T]>, arg1: number): SortedArraySet<T>;
}

/** JVM class net.minecraft.util.SpawnUtil. */
export interface SpawnUtilMembers {
}
export type SpawnUtil = SpawnUtilMembers;
export interface SpawnUtilStatics {
  new(): SpawnUtil;
  trySpawnMob<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity.EntityType<T>, arg1: j_net_minecraft_world_entity.EntitySpawnReason, arg2: j_net_minecraft_server_level.ServerLevel, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: number, arg6: number, arg7: SpawnUtil_Strategy, arg8: boolean): JavaOptional<T>;
  trySpawnMob<T /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity.EntityType<T>, arg1: j_net_minecraft_world_entity.EntitySpawnReason, arg2: j_net_minecraft_server_level.ServerLevel, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: number, arg6: number, arg7: SpawnUtil_Strategy, arg8: boolean, arg9: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">, arg10: JavaRunnable | null): JavaOptional<T>;
}

/** JVM interface net.minecraft.util.SpawnUtil$Strategy. */
export interface SpawnUtil_StrategyMembers {
  canSpawnOn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type SpawnUtil_Strategy = SpawnUtil_StrategyMembers;
export interface SpawnUtil_StrategyStatics {
  readonly LEGACY_IRON_GOLEM: SpawnUtil_Strategy;
  readonly ON_TOP_OF_COLLIDER: SpawnUtil_Strategy;
  readonly ON_TOP_OF_COLLIDER_NO_LEAVES: SpawnUtil_Strategy;
}

/** JVM class net.minecraft.util.StaticCache2D. */
export interface StaticCache2DMembers<T = unknown> {
  contains(arg0: number, arg1: number): boolean;
  forEach(arg0: JavaConsumer<T>): void;
  get(arg0: number, arg1: number): T;
  toString(): string;
}
export type StaticCache2D<T = unknown> = StaticCache2DMembers<T>;
export interface StaticCache2DStatics {
  create<T>(arg0: number, arg1: number, arg2: number, arg3: StaticCache2D_Initializer<T>): StaticCache2D<T>;
}

/** JVM interface net.minecraft.util.StaticCache2D$Initializer. */
export interface StaticCache2D_InitializerMembers<T = unknown> {
  get(arg0: number, arg1: number): T;
}
export type StaticCache2D_Initializer<T = unknown> = StaticCache2D_InitializerMembers<T>;
export interface StaticCache2D_InitializerStatics {
}

/** JVM class net.minecraft.util.StrictJsonParser. */
export interface StrictJsonParserMembers {
}
export type StrictJsonParser = StrictJsonParserMembers;
export interface StrictJsonParserStatics {
  new(): StrictJsonParser;
  /** @throws com.google.gson.JsonIOException @throws com.google.gson.JsonSyntaxException */
  parse(arg0: JavaOpaque<"java.io.Reader">): JavaOpaque<"com.google.gson.JsonElement">;
  /** @throws com.google.gson.JsonSyntaxException */
  parse(arg0: string): JavaOpaque<"com.google.gson.JsonElement">;
}

/** JVM class net.minecraft.util.StringDecomposer. */
export interface StringDecomposerMembers {
}
export type StringDecomposer = StringDecomposerMembers;
export interface StringDecomposerStatics {
  new(): StringDecomposer;
  filterBrokenSurrogates(arg0: string): string;
  getPlainText(arg0: j_net_minecraft_network_chat.FormattedText): string;
  iterate(arg0: string, arg1: j_net_minecraft_network_chat.Style, arg2: FormattedCharSink): boolean;
  iterateBackwards(arg0: string, arg1: j_net_minecraft_network_chat.Style, arg2: FormattedCharSink): boolean;
  iterateFormatted(arg0: string, arg1: number, arg2: j_net_minecraft_network_chat.Style, arg3: j_net_minecraft_network_chat.Style, arg4: FormattedCharSink): boolean;
  iterateFormatted(arg0: string, arg1: number, arg2: j_net_minecraft_network_chat.Style, arg3: FormattedCharSink): boolean;
  iterateFormatted(arg0: string, arg1: j_net_minecraft_network_chat.Style, arg2: FormattedCharSink): boolean;
  iterateFormatted(arg0: j_net_minecraft_network_chat.FormattedText, arg1: j_net_minecraft_network_chat.Style, arg2: FormattedCharSink): boolean;
}

/** JVM interface net.minecraft.util.StringRepresentable. */
export interface StringRepresentableMembers {
  getSerializedName(): string;
}
export type StringRepresentable = StringRepresentableMembers;
export interface StringRepresentableStatics {
  readonly PRE_BUILT_MAP_THRESHOLD: 16;
  createNameLookup<T /* extends StringRepresentable */>(arg0: Array<T>, arg1: JavaFunction<string, string>): JavaFunction<string, T>;
  fromEnum<E /* extends StringRepresentable */>(arg0: JavaSupplier<Array<E>>): StringRepresentable_EnumCodec<E>;
  fromEnumWithMapping<E /* extends StringRepresentable */>(arg0: JavaSupplier<Array<E>>, arg1: JavaFunction<string, string>): StringRepresentable_EnumCodec<E>;
  fromValues<T /* extends StringRepresentable */>(arg0: JavaSupplier<Array<T>>): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  keys(arg0: Array<StringRepresentable>): JavaOpaque<"com.mojang.serialization.Keyable">;
}

/** JVM class net.minecraft.util.StringRepresentable$EnumCodec. */
export interface StringRepresentable_EnumCodecMembers<E /* extends StringRepresentable */ = unknown> {
  readonly __javaSupertypes?: readonly [StringRepresentable_StringRepresentableCodec<E>];
  byName(arg0: string | null): E | null;
  byName(arg0: string | null, arg1: E): E;
  byName(arg0: string | null, arg1: JavaSupplier<E>): E;
}
export type StringRepresentable_EnumCodec<E /* extends StringRepresentable */ = unknown> = StringRepresentable_EnumCodecMembers<E> & StringRepresentable_StringRepresentableCodec<E>;
export interface StringRepresentable_EnumCodecStatics {
  new<E /* extends StringRepresentable */>(arg0: Array<E>, arg1: JavaFunction<string, E>): StringRepresentable_EnumCodec<E>;
}

/** JVM class net.minecraft.util.StringRepresentable$StringRepresentableCodec. */
export interface StringRepresentable_StringRepresentableCodecMembers<S /* extends StringRepresentable */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.Codec", [S]>];
  decode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.datafixers.util.Pair", [S, T]>]>;
  encode<T>(arg0: S, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
}
export type StringRepresentable_StringRepresentableCodec<S /* extends StringRepresentable */ = unknown> = StringRepresentable_StringRepresentableCodecMembers<S> & JavaOpaque<"com.mojang.serialization.Codec", [S]>;
export interface StringRepresentable_StringRepresentableCodecStatics {
  new<S /* extends StringRepresentable */>(arg0: Array<S>, arg1: JavaFunction<string, S>, arg2: JavaOpaque<"java.util.function.ToIntFunction", [S]>): StringRepresentable_StringRepresentableCodec<S>;
}

/** JVM class net.minecraft.util.StringUtil. */
export interface StringUtilMembers {
}
export type StringUtil = StringUtilMembers;
export interface StringUtilStatics {
  new(): StringUtil;
  endsWithNewLine(arg0: string): boolean;
  filterText(arg0: string): string;
  filterText(arg0: string, arg1: boolean): string;
  formatTickDuration(arg0: number, arg1: number): string;
  isAllowedChatCharacter(arg0: string): boolean;
  isBlank(arg0: string | null): boolean;
  isNullOrEmpty(arg0: string | null): boolean;
  isReasonablePlayerName(arg0: string): boolean;
  isValidPlayerName(arg0: string): boolean;
  isWhitespace(arg0: number): boolean;
  lineCount(arg0: string): number;
  stripColor(arg0: string): string;
  trimChatMessage(arg0: string): string;
  truncateStringIfNecessary(arg0: string, arg1: number, arg2: boolean): string;
}

/** JVM interface net.minecraft.util.TaskChainer. */
export interface TaskChainerMembers {
  append(arg0: JavaRunnable): void;
  append<T>(arg0: PromiseLike<T>, arg1: JavaConsumer<T>): void;
}
export type TaskChainer = TaskChainerMembers;
export interface TaskChainerStatics {
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  immediate(arg0: JavaOpaque<"java.util.concurrent.Executor">): TaskChainer;
}

/** JVM class net.minecraft.util.ThreadingDetector. */
export interface ThreadingDetectorMembers {
  checkAndLock(): void;
  checkAndUnlock(): void;
}
export type ThreadingDetector = ThreadingDetectorMembers;
export interface ThreadingDetectorStatics {
  new(arg0: string): ThreadingDetector;
  makeThreadingException(arg0: string, arg1: JavaOpaque<"java.lang.Thread"> | null): j_net_minecraft.ReportedException;
}

/** JVM class net.minecraft.util.TickThrottler. */
export interface TickThrottlerMembers {
  increment(): void;
  isIncrementAndUnderThreshold(): boolean;
  isIncrementAndUnderThreshold(arg0: number, arg1: number): boolean;
  isUnderThreshold(): boolean;
  tick(): void;
}
export type TickThrottler = TickThrottlerMembers;
export interface TickThrottlerStatics {
  new(arg0: number, arg1: number): TickThrottler;
}

/** JVM interface net.minecraft.util.TimeSource. */
export interface TimeSourceMembers {
  get(arg0: JavaOpaque<"java.util.concurrent.TimeUnit">): bigint;
}
export type TimeSource = TimeSourceMembers;
export interface TimeSourceStatics {
}

/** JVM interface net.minecraft.util.TimeSource$NanoTimeSource. */
export interface TimeSource_NanoTimeSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.function.LongSupplier">, TimeSource];
  get(arg0: JavaOpaque<"java.util.concurrent.TimeUnit">): bigint;
}
export type TimeSource_NanoTimeSource = TimeSource_NanoTimeSourceMembers & JavaOpaque<"java.util.function.LongSupplier"> & TimeSource;
export interface TimeSource_NanoTimeSourceStatics {
}

/** JVM class net.minecraft.util.TimeUtil. */
export interface TimeUtilMembers {
}
export type TimeUtil = TimeUtilMembers;
export interface TimeUtilStatics {
  new(): TimeUtil;
  readonly MILLISECONDS_PER_SECOND: bigint;
  readonly NANOSECONDS_PER_MILLISECOND: bigint;
  readonly NANOSECONDS_PER_SECOND: bigint;
  readonly SECONDS_PER_HOUR: bigint;
  readonly SECONDS_PER_MINUTE: number;
  rangeOfSeconds(arg0: number, arg1: number): j_net_minecraft_util_valueproviders.UniformInt;
}

/** JVM interface net.minecraft.util.ToFloatFunction. */
export interface ToFloatFunctionMembers<C = unknown> {
  apply(arg0: C): number;
  comap<C2>(arg0: JavaFunction<C2, C>): ToFloatFunction<C2>;
  maxValue(): number;
  minValue(): number;
}
export type ToFloatFunction<C = unknown> = ToFloatFunctionMembers<C>;
export interface ToFloatFunctionStatics {
  readonly IDENTITY: ToFloatFunction<number>;
  createUnlimited(arg0: JavaOpaque<"it.unimi.dsi.fastutil.floats.Float2FloatFunction">): ToFloatFunction<number>;
}

/** Live JVM enum net.minecraft.util.TriState; constants are host handles, not strings. */
export type TriState = JavaEnum<"net.minecraft.util.TriState", "DEFAULT" | "FALSE" | "TRUE"> & TriStateMembers;
export interface TriStateMembers {
  toBoolean(arg0: boolean): boolean;
}
export interface TriStateStatics {
  readonly DEFAULT: TriState;
  readonly FALSE: TriState;
  readonly TRUE: TriState;
  valueOf(arg0: string): TriState;
  values(): Array<TriState>;
}

/** JVM class net.minecraft.util.Tuple. */
export interface TupleMembers<A = unknown, B = unknown> {
  getA(): A;
  getB(): B;
  setA(arg0: A): void;
  setB(arg0: B): void;
}
export type Tuple<A = unknown, B = unknown> = TupleMembers<A, B>;
export interface TupleStatics {
  new<A, B>(arg0: A, arg1: B): Tuple<A, B>;
}

/** Live JVM enum net.minecraft.util.Unit; constants are host handles, not strings. */
export type Unit = JavaEnum<"net.minecraft.util.Unit", "INSTANCE"> & UnitMembers;
export interface UnitMembers {
}
export interface UnitStatics {
  readonly INSTANCE: Unit;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Unit]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Unit>;
  valueOf(arg0: string): Unit;
  values(): Array<Unit>;
}

/** JVM interface net.minecraft.util.VisibleForDebug. */
export interface VisibleForDebugMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type VisibleForDebug = VisibleForDebugMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface VisibleForDebugStatics {
}

/** JVM class net.minecraft.util.ZeroBitStorage. */
export interface ZeroBitStorageMembers {
  readonly __javaSupertypes?: readonly [BitStorage];
  copy(): BitStorage;
  get(arg0: number): number;
  getAll(arg0: JavaOpaque<"java.util.function.IntConsumer">): void;
  getAndSet(arg0: number, arg1: number): number;
  getBits(): number;
  getRaw(): Array<bigint>;
  getSize(): number;
  moonrise$countEntries(): JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap", [JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortArrayList">]>;
  set(arg0: number, arg1: number): void;
  unpack(arg0: Array<number>): void;
}
export type ZeroBitStorage = ZeroBitStorageMembers & BitStorage;
export interface ZeroBitStorageStatics {
  new(arg0: number): ZeroBitStorage;
  readonly RAW: Array<bigint>;
}
