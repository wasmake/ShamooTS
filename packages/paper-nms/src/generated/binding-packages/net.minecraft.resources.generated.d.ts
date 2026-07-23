// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';

/** JVM abstract net.minecraft.resources.DelegatingOps. */
export interface DelegatingOpsMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>];
  compressMaps(): boolean;
  convertTo<U>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>, arg1: T): U;
  createBoolean(arg0: boolean): T;
  createByte(arg0: number): T;
  createByteList(arg0: JavaOpaque<"java.nio.ByteBuffer">): T;
  createDouble(arg0: number): T;
  createFloat(arg0: number): T;
  createInt(arg0: number): T;
  createIntList(arg0: JavaOpaque<"java.util.stream.IntStream">): T;
  createList(arg0: JavaOpaque<"java.util.stream.Stream", [T]>): T;
  createLong(arg0: bigint): T;
  createLongList(arg0: JavaOpaque<"java.util.stream.LongStream">): T;
  createMap(arg0: JavaMap<T, T>): T;
  createMap(arg0: JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [T, T]>]>): T;
  createNumeric(arg0: number): T;
  createShort(arg0: number): T;
  createString(arg0: string): T;
  readonly delegate: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>;
  empty(): T;
  emptyList(): T;
  emptyMap(): T;
  getBooleanValue(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [boolean]>;
  getByteBuffer(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.nio.ByteBuffer">]>;
  getIntStream(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.IntStream">]>;
  getList(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaConsumer<T>>]>;
  getLongStream(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.LongStream">]>;
  getMap(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.serialization.MapLike", [T]>]>;
  getMapEntries(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaBiConsumer<T, T>>]>;
  getMapValues(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [T, T]>]>]>;
  getNumberValue(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [number]>;
  getStream(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [T]>]>;
  getStringValue(arg0: T): JavaOpaque<"com.mojang.serialization.DataResult", [string]>;
  listBuilder(): JavaOpaque<"com.mojang.serialization.ListBuilder", [T]>;
  mapBuilder(): JavaOpaque<"com.mojang.serialization.RecordBuilder", [T]>;
  mergeToList(arg0: T, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  mergeToList(arg0: T, arg1: JavaList<T>): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  mergeToMap(arg0: T, arg1: JavaOpaque<"com.mojang.serialization.MapLike", [T]>): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  mergeToMap(arg0: T, arg1: T, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  mergeToMap(arg0: T, arg1: JavaMap<T, T>): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  mergeToPrimitive(arg0: T, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  remove(arg0: T, arg1: string): T;
}
export type DelegatingOps<T = unknown> = DelegatingOpsMembers<T> & JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>;
export interface DelegatingOpsStatics {
  new<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): DelegatingOps<T>;
}

/** JVM class net.minecraft.resources.DelegatingOps$DelegateListBuilder. */
export interface DelegatingOps_DelegateListBuilderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>];
  add(arg0: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
  add(arg0: JavaOpaque<"T">): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
  add<E>(arg0: E, arg1: JavaOpaque<"com.mojang.serialization.Encoder", [E]>): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
  addAll<E>(arg0: Iterable<E>, arg1: JavaOpaque<"com.mojang.serialization.Encoder", [E]>): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
  build(arg0: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>;
  build(arg0: JavaOpaque<"T">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>;
  mapError(arg0: JavaOpaque<"java.util.function.UnaryOperator", [string]>): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
  ops(): JavaOpaque<"com.mojang.serialization.DynamicOps", [JavaOpaque<"T">]>;
  withErrorsFrom(arg0: JavaOpaque<"com.mojang.serialization.DataResult", [object]>): JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
}
export type DelegatingOps_DelegateListBuilder = DelegatingOps_DelegateListBuilderMembers & JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>;
export interface DelegatingOps_DelegateListBuilderStatics {
  new(arg0: DelegatingOps, arg1: JavaOpaque<"com.mojang.serialization.ListBuilder", [JavaOpaque<"T">]>): DelegatingOps_DelegateListBuilder;
}

/** JVM class net.minecraft.resources.DelegatingOps$DelegateRecordBuilder. */
export interface DelegatingOps_DelegateRecordBuilderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>];
  add(arg0: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>, arg1: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  add(arg0: JavaOpaque<"T">, arg1: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  add(arg0: JavaOpaque<"T">, arg1: JavaOpaque<"T">): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  add(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  add(arg0: string, arg1: JavaOpaque<"T">): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  add<E>(arg0: string, arg1: E, arg2: JavaOpaque<"com.mojang.serialization.Encoder", [E]>): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  build(arg0: JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>;
  build(arg0: JavaOpaque<"T">): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"T">]>;
  mapError(arg0: JavaOpaque<"java.util.function.UnaryOperator", [string]>): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  ops(): JavaOpaque<"com.mojang.serialization.DynamicOps", [JavaOpaque<"T">]>;
  setLifecycle(arg0: JavaOpaque<"com.mojang.serialization.Lifecycle">): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
  withErrorsFrom(arg0: JavaOpaque<"com.mojang.serialization.DataResult", [object]>): JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
}
export type DelegatingOps_DelegateRecordBuilder = DelegatingOps_DelegateRecordBuilderMembers & JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>;
export interface DelegatingOps_DelegateRecordBuilderStatics {
  new(arg0: DelegatingOps, arg1: JavaOpaque<"com.mojang.serialization.RecordBuilder", [JavaOpaque<"T">]>): DelegatingOps_DelegateRecordBuilder;
}

/** JVM interface net.minecraft.resources.DependantName. */
export interface DependantNameMembers<T = unknown, V = unknown> {
  get(arg0: ResourceKey<T>): V;
}
export type DependantName<T = unknown, V = unknown> = DependantNameMembers<T, V>;
export interface DependantNameStatics {
  fixed<T, V>(arg0: V): DependantName<T, V>;
}

/** JVM class net.minecraft.resources.FileToIdConverter. */
export interface FileToIdConverterMembers {
  fileToId(arg0: ResourceLocation): ResourceLocation;
  idToFile(arg0: ResourceLocation): ResourceLocation;
  listMatchingResourceStacks(arg0: j_net_minecraft_server_packs_resources.ResourceManager): JavaMap<ResourceLocation, JavaList<j_net_minecraft_server_packs_resources.Resource>>;
  listMatchingResources(arg0: j_net_minecraft_server_packs_resources.ResourceManager): JavaMap<ResourceLocation, j_net_minecraft_server_packs_resources.Resource>;
}
export type FileToIdConverter = FileToIdConverterMembers;
export interface FileToIdConverterStatics {
  new(arg0: string, arg1: string): FileToIdConverter;
  json(arg0: string): FileToIdConverter;
  registry(arg0: ResourceKey<j_net_minecraft_core.Registry<object>>): FileToIdConverter;
}

/** JVM class net.minecraft.resources.HolderSetCodec. */
export interface HolderSetCodecMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<E>]>];
  decode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.HolderSet<E>, T]>]>;
  encode(arg0: object, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps">, arg2: object): JavaOpaque<"com.mojang.serialization.DataResult">;
  encode<T>(arg0: j_net_minecraft_core.HolderSet<E>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
}
export type HolderSetCodec<E = unknown> = HolderSetCodecMembers<E> & JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<E>]>;
export interface HolderSetCodecStatics {
  create<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<E>]>, arg2: boolean): JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<E>]>;
}

/** JVM class net.minecraft.resources.RegistryDataLoader. */
export interface RegistryDataLoaderMembers {
}
export type RegistryDataLoader = RegistryDataLoaderMembers;
export interface RegistryDataLoaderStatics {
  new(): RegistryDataLoader;
  readonly DIMENSION_REGISTRIES: JavaList<RegistryDataLoader_RegistryData<object>>;
  readonly SYNCHRONIZED_REGISTRIES: JavaList<RegistryDataLoader_RegistryData<object>>;
  readonly WORLDGEN_REGISTRIES: JavaList<RegistryDataLoader_RegistryData<object>>;
  load(arg0: JavaMap<ResourceKey<j_net_minecraft_core.Registry<object>>, RegistryDataLoader_NetworkedRegistryData>, arg1: j_net_minecraft_server_packs_resources.ResourceProvider, arg2: JavaList<j_net_minecraft_core.HolderLookup_RegistryLookup<object>>, arg3: JavaList<RegistryDataLoader_RegistryData<object>>): j_net_minecraft_core.RegistryAccess_Frozen;
  load(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: JavaList<j_net_minecraft_core.HolderLookup_RegistryLookup<object>>, arg2: JavaList<RegistryDataLoader_RegistryData<object>>): j_net_minecraft_core.RegistryAccess_Frozen;
}

/** JVM record net.minecraft.resources.RegistryDataLoader$NetworkedRegistryData. */
export interface RegistryDataLoader_NetworkedRegistryDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  elements(): JavaList<j_net_minecraft_core.RegistrySynchronization_PackedRegistryEntry>;
  equals(arg0: object): boolean;
  hashCode(): number;
  tags(): j_net_minecraft_tags.TagNetworkSerialization_NetworkPayload;
  toString(): string;
}
export type RegistryDataLoader_NetworkedRegistryData = RegistryDataLoader_NetworkedRegistryDataMembers & JavaOpaque<"java.lang.Record">;
export interface RegistryDataLoader_NetworkedRegistryDataStatics {
  new(arg0: JavaList<j_net_minecraft_core.RegistrySynchronization_PackedRegistryEntry>, arg1: j_net_minecraft_tags.TagNetworkSerialization_NetworkPayload): RegistryDataLoader_NetworkedRegistryData;
}

/** JVM record net.minecraft.resources.RegistryDataLoader$RegistryData. */
export interface RegistryDataLoader_RegistryDataMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  elementCodec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): ResourceKey<j_net_minecraft_core.Registry<T>>;
  requiredNonEmpty(): boolean;
  runWithArguments(arg0: JavaBiConsumer<ResourceKey<j_net_minecraft_core.Registry<T>>, JavaOpaque<"com.mojang.serialization.Codec", [T]>>): void;
  toString(): string;
}
export type RegistryDataLoader_RegistryData<T = unknown> = RegistryDataLoader_RegistryDataMembers<T> & JavaOpaque<"java.lang.Record">;
export interface RegistryDataLoader_RegistryDataStatics {
  new<T>(arg0: ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: boolean): RegistryDataLoader_RegistryData<T>;
}

/** JVM class net.minecraft.resources.RegistryFileCodec. */
export interface RegistryFileCodecMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<E>]>];
  decode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Holder<E>, T]>]>;
  encode(arg0: object, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps">, arg2: object): JavaOpaque<"com.mojang.serialization.DataResult">;
  encode<T>(arg0: j_net_minecraft_core.Holder<E>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  toString(): string;
}
export type RegistryFileCodec<E = unknown> = RegistryFileCodecMembers<E> & JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<E>]>;
export interface RegistryFileCodecStatics {
  create<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [E]>): RegistryFileCodec<E>;
  create<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [E]>, arg2: boolean): RegistryFileCodec<E>;
}

/** JVM class net.minecraft.resources.RegistryFixedCodec. */
export interface RegistryFixedCodecMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<E>]>];
  decode<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: T): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Holder<E>, T]>]>;
  encode(arg0: object, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps">, arg2: object): JavaOpaque<"com.mojang.serialization.DataResult">;
  encode<T>(arg0: j_net_minecraft_core.Holder<E>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  toString(): string;
}
export type RegistryFixedCodec<E = unknown> = RegistryFixedCodecMembers<E> & JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<E>]>;
export interface RegistryFixedCodecStatics {
  create<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>): RegistryFixedCodec<E>;
}

/** JVM class net.minecraft.resources.RegistryOps. */
export interface RegistryOpsMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [DelegatingOps<T>];
  equals(arg0: object): boolean;
  getter<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<j_net_minecraft_core.HolderGetter<E>>;
  hashCode(): number;
  readonly lookupProvider: RegistryOps_RegistryInfoLookup;
  owner<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<j_net_minecraft_core.HolderOwner<E>>;
  withParent<U>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>): RegistryOps<U>;
}
export type RegistryOps<T = unknown> = RegistryOpsMembers<T> & DelegatingOps<T>;
export interface RegistryOpsStatics {
  create<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: j_net_minecraft_core.HolderLookup_Provider): RegistryOps<T>;
  create<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: RegistryOps_RegistryInfoLookup): RegistryOps<T>;
  injectRegistryContext<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>, arg1: j_net_minecraft_core.HolderLookup_Provider): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  retrieveElement<E, O>(arg0: ResourceKey<E>): JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder", [O, j_net_minecraft_core.Holder_Reference<E>]>;
  retrieveGetter<E, O>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOpaque<"com.mojang.serialization.codecs.RecordCodecBuilder", [O, j_net_minecraft_core.HolderGetter<E>]>;
}

/** JVM class net.minecraft.resources.RegistryOps$HolderLookupAdapter. */
export interface RegistryOps_HolderLookupAdapterMembers {
  readonly __javaSupertypes?: readonly [RegistryOps_RegistryInfoLookup];
  equals(arg0: object): boolean;
  hashCode(): number;
  lookup<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<RegistryOps_RegistryInfo<E>>;
  lookupForValueCopyViaBuilders(): j_net_minecraft_core.HolderLookup_Provider;
}
export type RegistryOps_HolderLookupAdapter = RegistryOps_HolderLookupAdapterMembers & RegistryOps_RegistryInfoLookup;
export interface RegistryOps_HolderLookupAdapterStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): RegistryOps_HolderLookupAdapter;
}

/** JVM record net.minecraft.resources.RegistryOps$RegistryInfo. */
export interface RegistryOps_RegistryInfoMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  elementsLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
  equals(arg0: object): boolean;
  getter(): j_net_minecraft_core.HolderGetter<T>;
  hashCode(): number;
  owner(): j_net_minecraft_core.HolderOwner<T>;
  toString(): string;
}
export type RegistryOps_RegistryInfo<T = unknown> = RegistryOps_RegistryInfoMembers<T> & JavaOpaque<"java.lang.Record">;
export interface RegistryOps_RegistryInfoStatics {
  new<T>(arg0: j_net_minecraft_core.HolderOwner<T>, arg1: j_net_minecraft_core.HolderGetter<T>, arg2: JavaOpaque<"com.mojang.serialization.Lifecycle">): RegistryOps_RegistryInfo<T>;
  fromRegistryLookup<T>(arg0: j_net_minecraft_core.HolderLookup_RegistryLookup<T>): RegistryOps_RegistryInfo<T>;
}

/** JVM interface net.minecraft.resources.RegistryOps$RegistryInfoLookup. */
export interface RegistryOps_RegistryInfoLookupMembers {
  lookup<T>(arg0: ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOptional<RegistryOps_RegistryInfo<T>>;
  lookupForValueCopyViaBuilders(): j_net_minecraft_core.HolderLookup_Provider;
}
export type RegistryOps_RegistryInfoLookup = RegistryOps_RegistryInfoLookupMembers;
export interface RegistryOps_RegistryInfoLookupStatics {
}

/** JVM class net.minecraft.resources.ResourceKey. */
export interface ResourceKeyMembers<T = unknown> {
  cast<E>(arg0: ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<ResourceKey<E>>;
  isFor(arg0: ResourceKey<j_net_minecraft_core.Registry<object>>): boolean;
  location(): ResourceLocation;
  registry(): ResourceLocation;
  registryKey(): ResourceKey<j_net_minecraft_core.Registry<T>>;
  toString(): string;
}
export type ResourceKey<T = unknown> = ResourceKeyMembers<T>;
export interface ResourceKeyStatics {
  codec<T>(arg0: ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOpaque<"com.mojang.serialization.Codec", [ResourceKey<T>]>;
  create<T>(arg0: ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: ResourceLocation): ResourceKey<T>;
  createRegistryKey<T>(arg0: ResourceLocation): ResourceKey<j_net_minecraft_core.Registry<T>>;
  streamCodec<T>(arg0: ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ResourceKey<T>>;
}

/** JVM class net.minecraft.resources.ResourceLocation. */
export interface ResourceLocationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [ResourceLocation]>];
  compareTo(arg0: object): number;
  compareTo(arg0: ResourceLocation): number;
  equals(arg0: object): boolean;
  getNamespace(): string;
  getPath(): string;
  hashCode(): number;
  toDebugFileName(): string;
  toLanguageKey(): string;
  toLanguageKey(arg0: string): string;
  toLanguageKey(arg0: string, arg1: string): string;
  toShortLanguageKey(): string;
  toString(): string;
  withPath(arg0: string): ResourceLocation;
  withPath(arg0: JavaOpaque<"java.util.function.UnaryOperator", [string]>): ResourceLocation;
  withPrefix(arg0: string): ResourceLocation;
  withSuffix(arg0: string): ResourceLocation;
}
export type ResourceLocation = ResourceLocationMembers;
export interface ResourceLocationStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ResourceLocation]>;
  readonly DEFAULT_NAMESPACE: "minecraft";
  readonly ERROR_INVALID: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly NAMESPACE_SEPARATOR: 58;
  readonly PAPER_NAMESPACE: "paper";
  readonly REALMS_NAMESPACE: "realms";
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ResourceLocation>;
  bySeparator(arg0: string, arg1: string): ResourceLocation;
  fromNamespaceAndPath(arg0: string, arg1: string): ResourceLocation;
  isAllowedInResourceLocation(arg0: string): boolean;
  isValidNamespace(arg0: string): boolean;
  isValidPath(arg0: string): boolean;
  parse(arg0: string): ResourceLocation;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  read(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ResourceLocation;
  read(arg0: string): JavaOpaque<"com.mojang.serialization.DataResult", [ResourceLocation]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  readNonEmpty(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ResourceLocation;
  tryBuild(arg0: string, arg1: string): ResourceLocation | null;
  tryBySeparator(arg0: string, arg1: string): ResourceLocation | null;
  tryParse(arg0: string): ResourceLocation | null;
  validPathChar(arg0: string): boolean;
  withDefaultNamespace(arg0: string): ResourceLocation;
}
