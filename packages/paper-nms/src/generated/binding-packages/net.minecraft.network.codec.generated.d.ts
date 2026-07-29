// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM interface net.minecraft.network.codec.ByteBufCodecs. */
export interface ByteBufCodecsMembers {
}
export type ByteBufCodecs = ByteBufCodecsMembers;
export interface ByteBufCodecsStatics {
  readonly BOOL: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, boolean>;
  readonly BYTE: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly BYTE_ARRAY: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Array<number>>;
  readonly COMPOUND_TAG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_nbt.CompoundTag>;
  readonly CONTAINER_ID: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly DOUBLE: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly FLOAT: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly GAME_PROFILE: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"com.mojang.authlib.GameProfile">>;
  readonly GAME_PROFILE_PROPERTIES: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"com.mojang.authlib.properties.PropertyMap">>;
  readonly INT: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly LONG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, bigint>;
  readonly LONG_ARRAY: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Array<bigint>>;
  readonly MAX_INITIAL_COLLECTION_SIZE: 65536;
  readonly OPTIONAL_COMPOUND_TAG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOptional<j_net_minecraft_nbt.CompoundTag>>;
  readonly OPTIONAL_VAR_INT: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOptionalNumber>;
  readonly QUATERNIONF: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"org.joml.Quaternionf">>;
  readonly RGB_COLOR: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly ROTATION_BYTE: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly SHORT: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly STRING_UTF8: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, string>;
  readonly TAG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_nbt.Tag>;
  readonly TRUSTED_COMPOUND_TAG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_nbt.CompoundTag>;
  readonly TRUSTED_TAG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_nbt.Tag>;
  readonly UNSIGNED_SHORT: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly VAR_INT: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, number>;
  readonly VAR_LONG: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, bigint>;
  readonly VECTOR3F: StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"org.joml.Vector3f">>;
  byteArray(arg0: number): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Array<number>>;
  collection<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V, C /* extends JavaCollection<V> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [C]>): StreamCodec_CodecOperation<B, V, C>;
  collection<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V, C /* extends JavaCollection<V> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [C]>, arg1: StreamCodec<B, V>): StreamCodec<B, C>;
  collection<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V, C /* extends JavaCollection<V> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [C]>, arg1: StreamCodec<B, V>, arg2: number): StreamCodec<B, C>;
  compoundTagCodec(arg0: JavaSupplier<j_net_minecraft_nbt.NbtAccounter>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_nbt.CompoundTag>;
  either<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, L, R>(arg0: StreamCodec<B, L>, arg1: StreamCodec<B, R>): StreamCodec<B, JavaOpaque<"com.mojang.datafixers.util.Either", [L, R]>>;
  fromCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, T>;
  fromCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: JavaSupplier<j_net_minecraft_nbt.NbtAccounter>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, T>;
  fromCodec<T, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [V]>): StreamCodec_CodecOperation<B, T, V>;
  fromCodecTrusted<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, T>;
  fromCodecWithRegistries<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  fromCodecWithRegistries<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: JavaSupplier<j_net_minecraft_nbt.NbtAccounter>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  fromCodecWithRegistriesTrusted<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  holder<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<T>>;
  holderRegistry<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<T>>;
  holderSet<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.HolderSet<T>>;
  idMapper<T>(arg0: JavaOpaque<"java.util.function.IntFunction", [T]>, arg1: JavaOpaque<"java.util.function.ToIntFunction", [T]>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, T>;
  idMapper<T>(arg0: j_net_minecraft_core.IdMap<T>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, T>;
  increaseDepth<B /* extends j_net_minecraft_network.FriendlyByteBuf */, V>(arg0: StreamCodec<B, V>): StreamCodec<B, V>;
  lengthPrefixed<V>(arg0: number): StreamCodec_CodecOperation<JavaOpaque<"io.netty.buffer.ByteBuf">, V, V>;
  lengthPrefixed<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V>(arg0: number, arg1: JavaBiFunction<B, JavaOpaque<"io.netty.buffer.ByteBuf">, B>): StreamCodec_CodecOperation<B, V, V>;
  lenientJson(arg0: number): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"com.google.gson.JsonElement">>;
  list<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V>(): StreamCodec_CodecOperation<B, V, JavaList<V>>;
  list<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V>(arg0: number): StreamCodec_CodecOperation<B, V, JavaList<V>>;
  map<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, K, V, M /* extends JavaMap<K, V> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [M]>, arg1: StreamCodec<B, K>, arg2: StreamCodec<B, V>): StreamCodec<B, M>;
  map<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, K, V, M /* extends JavaMap<K, V> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [M]>, arg1: StreamCodec<B, K>, arg2: StreamCodec<B, V>, arg3: number): StreamCodec<B, M>;
  optional<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V>(arg0: StreamCodec<B, V>): StreamCodec<B, JavaOptional<V>>;
  optionalTagCodec(arg0: JavaSupplier<j_net_minecraft_nbt.NbtAccounter>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOptional<j_net_minecraft_nbt.Tag>>;
  readCount(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): number;
  registry<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  registryFriendlyLengthPrefixed<V>(arg0: number): StreamCodec_CodecOperation<j_net_minecraft_network.RegistryFriendlyByteBuf, V, V>;
  stringUtf8(arg0: number): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, string>;
  tagCodec(arg0: JavaSupplier<j_net_minecraft_nbt.NbtAccounter>): StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_nbt.Tag>;
  trackDepth<B /* extends j_net_minecraft_network.FriendlyByteBuf */, V>(arg0: StreamCodec<B, V>): StreamCodec<B, V>;
  writeCount(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number, arg2: number): void;
}

/** JVM class net.minecraft.network.codec.IdDispatchCodec. */
export interface IdDispatchCodecMembers<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, V = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [StreamCodec<B, V>];
  decode(arg0: B): V;
  encode(arg0: B, arg1: V): void;
}
export type IdDispatchCodec<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, V = unknown, T = unknown> = IdDispatchCodecMembers<B, V, T> & StreamCodec<B, V>;
export interface IdDispatchCodecStatics {
  builder<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, V, T>(arg0: JavaFunction<V, T>): IdDispatchCodec_Builder<B, V, T>;
}

/** JVM class net.minecraft.network.codec.IdDispatchCodec$Builder. */
export interface IdDispatchCodec_BuilderMembers<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, V = unknown, T = unknown> {
  add(arg0: T, arg1: StreamCodec<B, V>): IdDispatchCodec_Builder<B, V, T>;
  build(): IdDispatchCodec<B, V, T>;
}
export type IdDispatchCodec_Builder<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, V = unknown, T = unknown> = IdDispatchCodec_BuilderMembers<B, V, T>;
export interface IdDispatchCodec_BuilderStatics {
}

/** JVM interface net.minecraft.network.codec.IdDispatchCodec$DontDecorateException. */
export interface IdDispatchCodec_DontDecorateExceptionMembers {
}
export type IdDispatchCodec_DontDecorateException = IdDispatchCodec_DontDecorateExceptionMembers;
export interface IdDispatchCodec_DontDecorateExceptionStatics {
}

/** JVM interface net.minecraft.network.codec.StreamCodec. */
export interface StreamCodecMembers<B = unknown, V = unknown> {
  readonly __javaSupertypes?: readonly [StreamDecoder<B, V>, StreamEncoder<B, V>];
  apply<O>(arg0: StreamCodec_CodecOperation<B, V, O>): StreamCodec<B, O>;
  cast<S /* extends B */>(): StreamCodec<S, V>;
  dispatch<U>(arg0: JavaFunction<U, V>, arg1: JavaFunction<V, StreamCodec<B, U>>): StreamCodec<B, U>;
  map<O>(arg0: JavaFunction<V, O>, arg1: JavaFunction<O, V>): StreamCodec<B, O>;
  mapStream<O /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */>(arg0: JavaFunction<O, B>): StreamCodec<O, V>;
}
export type StreamCodec<B = unknown, V = unknown> = StreamCodecMembers<B, V> & StreamDecoder<B, V> & StreamEncoder<B, V>;
export interface StreamCodecStatics {
  composite<B, C, T1>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: JavaFunction<T1, C>): StreamCodec<B, C>;
  composite<B, C, T1, T2>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: JavaBiFunction<T1, T2, C>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: JavaOpaque<"com.mojang.datafixers.util.Function3", [T1, T2, T3, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: JavaOpaque<"com.mojang.datafixers.util.Function4", [T1, T2, T3, T4, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4, T5>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: StreamCodec<B, T5>, arg9: JavaFunction<C, T5>, arg10: JavaOpaque<"com.mojang.datafixers.util.Function5", [T1, T2, T3, T4, T5, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4, T5, T6>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: StreamCodec<B, T5>, arg9: JavaFunction<C, T5>, arg10: StreamCodec<B, T6>, arg11: JavaFunction<C, T6>, arg12: JavaOpaque<"com.mojang.datafixers.util.Function6", [T1, T2, T3, T4, T5, T6, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4, T5, T6, T7>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: StreamCodec<B, T5>, arg9: JavaFunction<C, T5>, arg10: StreamCodec<B, T6>, arg11: JavaFunction<C, T6>, arg12: StreamCodec<B, T7>, arg13: JavaFunction<C, T7>, arg14: JavaOpaque<"com.mojang.datafixers.util.Function7", [T1, T2, T3, T4, T5, T6, T7, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4, T5, T6, T7, T8>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: StreamCodec<B, T5>, arg9: JavaFunction<C, T5>, arg10: StreamCodec<B, T6>, arg11: JavaFunction<C, T6>, arg12: StreamCodec<B, T7>, arg13: JavaFunction<C, T7>, arg14: StreamCodec<B, T8>, arg15: JavaFunction<C, T8>, arg16: JavaOpaque<"com.mojang.datafixers.util.Function8", [T1, T2, T3, T4, T5, T6, T7, T8, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: StreamCodec<B, T5>, arg9: JavaFunction<C, T5>, arg10: StreamCodec<B, T6>, arg11: JavaFunction<C, T6>, arg12: StreamCodec<B, T7>, arg13: JavaFunction<C, T7>, arg14: StreamCodec<B, T8>, arg15: JavaFunction<C, T8>, arg16: StreamCodec<B, T9>, arg17: JavaFunction<C, T9>, arg18: JavaOpaque<"com.mojang.datafixers.util.Function9", [T1, T2, T3, T4, T5, T6, T7, T8, T9, C]>): StreamCodec<B, C>;
  composite<B, C, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: StreamCodec<B, T1>, arg1: JavaFunction<C, T1>, arg2: StreamCodec<B, T2>, arg3: JavaFunction<C, T2>, arg4: StreamCodec<B, T3>, arg5: JavaFunction<C, T3>, arg6: StreamCodec<B, T4>, arg7: JavaFunction<C, T4>, arg8: StreamCodec<B, T5>, arg9: JavaFunction<C, T5>, arg10: StreamCodec<B, T6>, arg11: JavaFunction<C, T6>, arg12: StreamCodec<B, T7>, arg13: JavaFunction<C, T7>, arg14: StreamCodec<B, T8>, arg15: JavaFunction<C, T8>, arg16: StreamCodec<B, T9>, arg17: JavaFunction<C, T9>, arg18: StreamCodec<B, T10>, arg19: JavaFunction<C, T10>, arg20: StreamCodec<B, T11>, arg21: JavaFunction<C, T11>, arg22: JavaOpaque<"com.mojang.datafixers.util.Function11", [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, C]>): StreamCodec<B, C>;
  of<B, V>(arg0: StreamEncoder<B, V>, arg1: StreamDecoder<B, V>): StreamCodec<B, V>;
  ofMember<B, V>(arg0: StreamMemberEncoder<B, V>, arg1: StreamDecoder<B, V>): StreamCodec<B, V>;
  recursive<B, T>(arg0: JavaOpaque<"java.util.function.UnaryOperator", [StreamCodec<B, T>]>): StreamCodec<B, T>;
  unit<B, V>(arg0: V): StreamCodec<B, V>;
}

/** JVM interface net.minecraft.network.codec.StreamCodec$CodecOperation. */
export interface StreamCodec_CodecOperationMembers<B = unknown, S = unknown, T = unknown> {
  apply(arg0: StreamCodec<B, S>): StreamCodec<B, T>;
}
export type StreamCodec_CodecOperation<B = unknown, S = unknown, T = unknown> = StreamCodec_CodecOperationMembers<B, S, T>;
export interface StreamCodec_CodecOperationStatics {
}

/** JVM interface net.minecraft.network.codec.StreamDecoder. */
export interface StreamDecoderMembers<I = unknown, T = unknown> {
  decode(arg0: I): T;
}
export type StreamDecoder<I = unknown, T = unknown> = StreamDecoderMembers<I, T>;
export interface StreamDecoderStatics {
}

/** JVM interface net.minecraft.network.codec.StreamEncoder. */
export interface StreamEncoderMembers<O = unknown, T = unknown> {
  encode(arg0: O, arg1: T): void;
}
export type StreamEncoder<O = unknown, T = unknown> = StreamEncoderMembers<O, T>;
export interface StreamEncoderStatics {
}

/** JVM interface net.minecraft.network.codec.StreamMemberEncoder. */
export interface StreamMemberEncoderMembers<O = unknown, T = unknown> {
  encode(arg0: T, arg1: O): void;
}
export type StreamMemberEncoder<O = unknown, T = unknown> = StreamMemberEncoderMembers<O, T>;
export interface StreamMemberEncoderStatics {
}
