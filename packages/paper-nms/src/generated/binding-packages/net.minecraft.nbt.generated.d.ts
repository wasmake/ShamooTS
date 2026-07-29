// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_parsing_packrat from './net.minecraft.util.parsing.packrat.generated.js';
import type * as j_net_minecraft_util_parsing_packrat_commands from './net.minecraft.util.parsing.packrat.commands.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.nbt.ByteArrayTag. */
export interface ByteArrayTagMembers {
  readonly __javaSupertypes?: readonly [CollectionTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  addTag(arg0: number, arg1: Tag): boolean;
  asByteArray(): JavaOptional<Array<number>>;
  clear(): void;
  copy(): Tag;
  equals(arg0: object): boolean;
  get(arg0: number): ByteTag;
  getAsByteArray(): Array<number>;
  getId(): number;
  getType(): TagType<ByteArrayTag>;
  hashCode(): number;
  remove(arg0: number): ByteTag;
  setTag(arg0: number, arg1: Tag): boolean;
  size(): number;
  sizeInBytes(): number;
  toString(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type ByteArrayTag = ByteArrayTagMembers & CollectionTag;
export interface ByteArrayTagStatics {
  new(arg0: Array<number>): ByteArrayTag;
  readonly TYPE: TagType<ByteArrayTag>;
}

/** JVM record net.minecraft.nbt.ByteTag. */
export interface ByteTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumericTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  box(): number;
  byteValue(): number;
  copy(): ByteTag;
  doubleValue(): number;
  equals(arg0: object): boolean;
  floatValue(): number;
  getId(): number;
  getType(): TagType<ByteTag>;
  hashCode(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): number;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type ByteTag = ByteTagMembers & JavaOpaque<"java.lang.Record"> & NumericTag;
export interface ByteTagStatics {
  new(arg0: number): ByteTag;
  readonly ONE: ByteTag;
  readonly TYPE: TagType<ByteTag>;
  readonly ZERO: ByteTag;
  valueOf(arg0: number): ByteTag;
  valueOf(arg0: boolean): ByteTag;
}

/** JVM interface net.minecraft.nbt.CollectionTag. */
export interface CollectionTagMembers {
  readonly __javaSupertypes?: readonly [Iterable<Tag>, Tag];
  addTag(arg0: number, arg1: Tag): boolean;
  clear(): void;
  get(arg0: number): Tag;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [Tag]>;
  remove(arg0: number): Tag;
  setTag(arg0: number, arg1: Tag): boolean;
  size(): number;
  stream(): JavaOpaque<"java.util.stream.Stream", [Tag]>;
}
export type CollectionTag = CollectionTagMembers & Iterable<Tag> & Tag;
export interface CollectionTagStatics {
}

/** JVM class net.minecraft.nbt.CompoundTag. */
export interface CompoundTagMembers {
  readonly __javaSupertypes?: readonly [Tag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  asCompound(): JavaOptional<CompoundTag>;
  contains(arg0: string): boolean;
  copy(): CompoundTag;
  entrySet(): JavaSet<JavaMapEntry<string, Tag>>;
  equals(arg0: object): boolean;
  forEach(arg0: JavaBiConsumer<string, Tag>): void;
  get(arg0: string): Tag | null;
  getBoolean(arg0: string): JavaOptional<boolean>;
  getBooleanOr(arg0: string, arg1: boolean): boolean;
  getByte(arg0: string): JavaOptional<number>;
  getByteArray(arg0: string): JavaOptional<Array<number>>;
  getByteOr(arg0: string, arg1: number): number;
  getCompound(arg0: string): JavaOptional<CompoundTag>;
  getCompoundOrEmpty(arg0: string): CompoundTag;
  getDouble(arg0: string): JavaOptional<number>;
  getDoubleOr(arg0: string, arg1: number): number;
  getFloat(arg0: string): JavaOptional<number>;
  getFloatOr(arg0: string, arg1: number): number;
  getId(): number;
  getInt(arg0: string): JavaOptional<number>;
  getIntArray(arg0: string): JavaOptional<Array<number>>;
  getIntOr(arg0: string, arg1: number): number;
  getList(arg0: string): JavaOptional<ListTag>;
  getListOrEmpty(arg0: string): ListTag;
  getLong(arg0: string): JavaOptional<bigint>;
  getLongArray(arg0: string): JavaOptional<Array<bigint>>;
  getLongOr(arg0: string, arg1: bigint): bigint;
  getShort(arg0: string): JavaOptional<number>;
  getShortOr(arg0: string, arg1: number): number;
  getString(arg0: string): JavaOptional<string>;
  getStringOr(arg0: string, arg1: string): string;
  getType(): TagType<CompoundTag>;
  hashCode(): number;
  isEmpty(): boolean;
  keySet(): JavaSet<string>;
  merge(arg0: CompoundTag): CompoundTag;
  put(arg0: string, arg1: Tag): Tag | null;
  putBoolean(arg0: string, arg1: boolean): void;
  putByte(arg0: string, arg1: number): void;
  putByteArray(arg0: string, arg1: Array<number>): void;
  putDouble(arg0: string, arg1: number): void;
  putFloat(arg0: string, arg1: number): void;
  putInt(arg0: string, arg1: number): void;
  putIntArray(arg0: string, arg1: Array<number>): void;
  putLong(arg0: string, arg1: bigint): void;
  putLongArray(arg0: string, arg1: Array<bigint>): void;
  putShort(arg0: string, arg1: number): void;
  putString(arg0: string, arg1: string): void;
  read<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>): JavaOptional<T>;
  read<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>): JavaOptional<T>;
  read<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOptional<T>;
  read<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>): JavaOptional<T>;
  readQuiet<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>): JavaOptional<T>;
  readQuiet<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>): JavaOptional<T>;
  readQuiet<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOptional<T>;
  readQuiet<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>): JavaOptional<T>;
  remove(arg0: string): void;
  size(): number;
  sizeInBytes(): number;
  store<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>, arg2: T): void;
  store<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: T): void;
  store<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>, arg3: T): void;
  store<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T): void;
  storeNullable<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>, arg3: T | null): void;
  storeNullable<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T | null): void;
  toString(): string;
  values(): JavaCollection<Tag>;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type CompoundTag = CompoundTagMembers & Tag;
export interface CompoundTagStatics {
  new(): CompoundTag;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CompoundTag]>;
  readonly TYPE: TagType<CompoundTag>;
}

/** JVM record net.minecraft.nbt.DoubleTag. */
export interface DoubleTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumericTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  box(): number;
  byteValue(): number;
  copy(): DoubleTag;
  doubleValue(): number;
  equals(arg0: object): boolean;
  floatValue(): number;
  getId(): number;
  getType(): TagType<DoubleTag>;
  hashCode(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): number;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type DoubleTag = DoubleTagMembers & JavaOpaque<"java.lang.Record"> & NumericTag;
export interface DoubleTagStatics {
  new(arg0: number): DoubleTag;
  readonly TYPE: TagType<DoubleTag>;
  readonly ZERO: DoubleTag;
  valueOf(arg0: number): DoubleTag;
}

/** JVM class net.minecraft.nbt.EndTag. */
export interface EndTagMembers {
  readonly __javaSupertypes?: readonly [Tag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  copy(): EndTag;
  getId(): number;
  getType(): TagType<EndTag>;
  sizeInBytes(): number;
  toString(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type EndTag = EndTagMembers & Tag;
export interface EndTagStatics {
  readonly INSTANCE: EndTag;
  readonly TYPE: TagType<EndTag>;
}

/** JVM record net.minecraft.nbt.FloatTag. */
export interface FloatTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumericTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  box(): number;
  byteValue(): number;
  copy(): FloatTag;
  doubleValue(): number;
  equals(arg0: object): boolean;
  floatValue(): number;
  getId(): number;
  getType(): TagType<FloatTag>;
  hashCode(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): number;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type FloatTag = FloatTagMembers & JavaOpaque<"java.lang.Record"> & NumericTag;
export interface FloatTagStatics {
  new(arg0: number): FloatTag;
  readonly TYPE: TagType<FloatTag>;
  readonly ZERO: FloatTag;
  valueOf(arg0: number): FloatTag;
}

/** JVM class net.minecraft.nbt.IntArrayTag. */
export interface IntArrayTagMembers {
  readonly __javaSupertypes?: readonly [CollectionTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  addTag(arg0: number, arg1: Tag): boolean;
  asIntArray(): JavaOptional<Array<number>>;
  clear(): void;
  copy(): IntArrayTag;
  equals(arg0: object): boolean;
  get(arg0: number): IntTag;
  getAsIntArray(): Array<number>;
  getId(): number;
  getType(): TagType<IntArrayTag>;
  hashCode(): number;
  remove(arg0: number): IntTag;
  setTag(arg0: number, arg1: Tag): boolean;
  size(): number;
  sizeInBytes(): number;
  toString(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type IntArrayTag = IntArrayTagMembers & CollectionTag;
export interface IntArrayTagStatics {
  new(arg0: Array<number>): IntArrayTag;
  readonly TYPE: TagType<IntArrayTag>;
}

/** JVM record net.minecraft.nbt.IntTag. */
export interface IntTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumericTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  box(): number;
  byteValue(): number;
  copy(): IntTag;
  doubleValue(): number;
  equals(arg0: object): boolean;
  floatValue(): number;
  getId(): number;
  getType(): TagType<IntTag>;
  hashCode(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): number;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type IntTag = IntTagMembers & JavaOpaque<"java.lang.Record"> & NumericTag;
export interface IntTagStatics {
  new(arg0: number): IntTag;
  readonly TYPE: TagType<IntTag>;
  valueOf(arg0: number): IntTag;
}

/** JVM class net.minecraft.nbt.ListTag. */
export interface ListTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractList", [Tag]>, CollectionTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  add(arg0: number, arg1: Tag): void;
  addAndUnwrap(arg0: Tag): void;
  addTag(arg0: number, arg1: Tag): boolean;
  asList(): JavaOptional<ListTag>;
  clear(): void;
  compoundStream(): JavaOpaque<"java.util.stream.Stream", [CompoundTag]>;
  copy(): ListTag;
  equals(arg0: object): boolean;
  get(arg0: number): Tag;
  getCompound(arg0: number): JavaOptional<CompoundTag>;
  getCompoundOrEmpty(arg0: number): CompoundTag;
  getDouble(arg0: number): JavaOptional<number>;
  getDoubleOr(arg0: number, arg1: number): number;
  getFloat(arg0: number): JavaOptional<number>;
  getFloatOr(arg0: number, arg1: number): number;
  getId(): number;
  getInt(arg0: number): JavaOptional<number>;
  getIntArray(arg0: number): JavaOptional<Array<number>>;
  getIntOr(arg0: number, arg1: number): number;
  getList(arg0: number): JavaOptional<ListTag>;
  getListOrEmpty(arg0: number): ListTag;
  getLongArray(arg0: number): JavaOptional<Array<bigint>>;
  getShort(arg0: number): JavaOptional<number>;
  getShortOr(arg0: number, arg1: number): number;
  getString(arg0: number): JavaOptional<string>;
  getStringOr(arg0: number, arg1: string): string;
  getType(): TagType<ListTag>;
  hashCode(): number;
  identifyRawElementType(): number;
  isEmpty(): boolean;
  remove(arg0: number): Tag;
  set(arg0: number, arg1: Tag): Tag;
  setTag(arg0: number, arg1: Tag): boolean;
  size(): number;
  sizeInBytes(): number;
  stream(): JavaOpaque<"java.util.stream.Stream", [Tag]>;
  toString(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type ListTag = ListTagMembers & JavaOpaque<"java.util.AbstractList", [Tag]> & CollectionTag;
export interface ListTagStatics {
  new(): ListTag;
  new(arg0: JavaList<Tag>): ListTag;
  readonly TYPE: TagType<ListTag>;
}

/** JVM class net.minecraft.nbt.LongArrayTag. */
export interface LongArrayTagMembers {
  readonly __javaSupertypes?: readonly [CollectionTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  addTag(arg0: number, arg1: Tag): boolean;
  asLongArray(): JavaOptional<Array<bigint>>;
  clear(): void;
  copy(): LongArrayTag;
  equals(arg0: object): boolean;
  get(arg0: number): LongTag;
  getAsLongArray(): Array<bigint>;
  getId(): number;
  getType(): TagType<LongArrayTag>;
  hashCode(): number;
  remove(arg0: number): LongTag;
  setTag(arg0: number, arg1: Tag): boolean;
  size(): number;
  sizeInBytes(): number;
  toString(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type LongArrayTag = LongArrayTagMembers & CollectionTag;
export interface LongArrayTagStatics {
  new(arg0: Array<bigint>): LongArrayTag;
  readonly TYPE: TagType<LongArrayTag>;
}

/** JVM record net.minecraft.nbt.LongTag. */
export interface LongTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumericTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  box(): number;
  byteValue(): number;
  copy(): LongTag;
  doubleValue(): number;
  equals(arg0: object): boolean;
  floatValue(): number;
  getId(): number;
  getType(): TagType<LongTag>;
  hashCode(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): bigint;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type LongTag = LongTagMembers & JavaOpaque<"java.lang.Record"> & NumericTag;
export interface LongTagStatics {
  new(arg0: bigint): LongTag;
  readonly TYPE: TagType<LongTag>;
  valueOf(arg0: bigint): LongTag;
}

/** JVM class net.minecraft.nbt.NbtAccounter. */
export interface NbtAccounterMembers {
  accountBytes(arg0: bigint): void;
  accountBytes(arg0: bigint, arg1: bigint): void;
  getDepth(): number;
  getUsage(): bigint;
  popDepth(): void;
  pushDepth(): void;
}
export type NbtAccounter = NbtAccounterMembers;
export interface NbtAccounterStatics {
  new(arg0: bigint, arg1: number): NbtAccounter;
  create(arg0: bigint): NbtAccounter;
  unlimitedHeap(): NbtAccounter;
}

/** JVM class net.minecraft.nbt.NbtAccounterException. */
export interface NbtAccounterExceptionMembers {
  readonly __javaSupertypes?: readonly [NbtException];
}
export type NbtAccounterException = NbtAccounterExceptionMembers & NbtException;
export interface NbtAccounterExceptionStatics {
  new(arg0: string): NbtAccounterException;
}

/** JVM class net.minecraft.nbt.NbtException. */
export interface NbtExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type NbtException = NbtExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface NbtExceptionStatics {
  new(arg0: string): NbtException;
}

/** JVM class net.minecraft.nbt.NbtFormatException. */
export interface NbtFormatExceptionMembers {
  readonly __javaSupertypes?: readonly [NbtException];
}
export type NbtFormatException = NbtFormatExceptionMembers & NbtException;
export interface NbtFormatExceptionStatics {
  new(arg0: string): NbtFormatException;
}

/** JVM class net.minecraft.nbt.NbtIo. */
export interface NbtIoMembers {
}
export type NbtIo = NbtIoMembers;
export interface NbtIoStatics {
  new(): NbtIo;
  /** @throws java.io.IOException */
  parse(arg0: JavaOpaque<"java.io.DataInput">, arg1: StreamTagVisitor, arg2: NbtAccounter): void;
  /** @throws java.io.IOException */
  parseCompressed(arg0: JavaOpaque<"java.io.InputStream">, arg1: StreamTagVisitor, arg2: NbtAccounter): void;
  /** @throws java.io.IOException */
  parseCompressed(arg0: JavaOpaque<"java.nio.file.Path">, arg1: StreamTagVisitor, arg2: NbtAccounter): void;
  /** @throws java.io.IOException */
  read(arg0: JavaOpaque<"java.io.DataInput">): CompoundTag;
  /** @throws java.io.IOException */
  read(arg0: JavaOpaque<"java.io.DataInput">, arg1: NbtAccounter): CompoundTag;
  /** @throws java.io.IOException */
  read(arg0: JavaOpaque<"java.nio.file.Path">): CompoundTag | null;
  /** @throws java.io.IOException */
  readAnyTag(arg0: JavaOpaque<"java.io.DataInput">, arg1: NbtAccounter): Tag;
  /** @throws java.io.IOException */
  readCompressed(arg0: JavaOpaque<"java.io.InputStream">, arg1: NbtAccounter): CompoundTag;
  /** @throws java.io.IOException */
  readCompressed(arg0: JavaOpaque<"java.nio.file.Path">, arg1: NbtAccounter): CompoundTag;
  /** @throws java.io.IOException */
  readUnnamedTag(arg0: JavaOpaque<"java.io.DataInput">, arg1: NbtAccounter): Tag;
  /** @throws java.io.IOException */
  write(arg0: CompoundTag, arg1: JavaOpaque<"java.io.DataOutput">): void;
  /** @throws java.io.IOException */
  write(arg0: CompoundTag, arg1: JavaOpaque<"java.nio.file.Path">): void;
  /** @throws java.io.IOException */
  writeAnyTag(arg0: Tag, arg1: JavaOpaque<"java.io.DataOutput">): void;
  /** @throws java.io.IOException */
  writeCompressed(arg0: CompoundTag, arg1: JavaOpaque<"java.io.OutputStream">): void;
  /** @throws java.io.IOException */
  writeCompressed(arg0: CompoundTag, arg1: JavaOpaque<"java.nio.file.Path">): void;
  /** @throws java.io.IOException */
  writeUnnamedTag(arg0: Tag, arg1: JavaOpaque<"java.io.DataOutput">): void;
  /** @throws java.io.IOException */
  writeUnnamedTagWithFallback(arg0: Tag, arg1: JavaOpaque<"java.io.DataOutput">): void;
}

/** JVM class net.minecraft.nbt.NbtIo$StringFallbackDataOutput. */
export interface NbtIo_StringFallbackDataOutputMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util.DelegateDataOutput];
  /** @throws java.io.IOException */
  writeUTF(arg0: string): void;
}
export type NbtIo_StringFallbackDataOutput = NbtIo_StringFallbackDataOutputMembers & j_net_minecraft_util.DelegateDataOutput;
export interface NbtIo_StringFallbackDataOutputStatics {
  new(arg0: JavaOpaque<"java.io.DataOutput">): NbtIo_StringFallbackDataOutput;
}

/** JVM class net.minecraft.nbt.NbtOps. */
export interface NbtOpsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>];
  convertTo<U>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>, arg1: Tag): U;
  createBoolean(arg0: boolean): Tag;
  createByte(arg0: number): Tag;
  createByteList(arg0: JavaOpaque<"java.nio.ByteBuffer">): Tag;
  createDouble(arg0: number): Tag;
  createFloat(arg0: number): Tag;
  createInt(arg0: number): Tag;
  createIntList(arg0: JavaOpaque<"java.util.stream.IntStream">): Tag;
  createList(arg0: JavaOpaque<"java.util.stream.Stream", [Tag]>): Tag;
  createLong(arg0: bigint): Tag;
  createLongList(arg0: JavaOpaque<"java.util.stream.LongStream">): Tag;
  createMap(arg0: JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [Tag, Tag]>]>): Tag;
  createNumeric(arg0: number): Tag;
  createShort(arg0: number): Tag;
  createString(arg0: string): Tag;
  empty(): Tag;
  getByteBuffer(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.nio.ByteBuffer">]>;
  getIntStream(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.IntStream">]>;
  getList(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaConsumer<Tag>>]>;
  getLongStream(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.LongStream">]>;
  getMap(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"com.mojang.serialization.MapLike", [Tag]>]>;
  getMapEntries(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaConsumer<JavaBiConsumer<Tag, Tag>>]>;
  getMapValues(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [Tag, Tag]>]>]>;
  getNumberValue(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [number]>;
  getStream(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [JavaOpaque<"java.util.stream.Stream", [Tag]>]>;
  getStringValue(arg0: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [string]>;
  mapBuilder(): JavaOpaque<"com.mojang.serialization.RecordBuilder", [Tag]>;
  mergeToList(arg0: Tag, arg1: JavaList<Tag>): JavaOpaque<"com.mojang.serialization.DataResult", [Tag]>;
  mergeToList(arg0: Tag, arg1: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [Tag]>;
  mergeToMap(arg0: Tag, arg1: JavaOpaque<"com.mojang.serialization.MapLike", [Tag]>): JavaOpaque<"com.mojang.serialization.DataResult", [Tag]>;
  mergeToMap(arg0: Tag, arg1: JavaMap<Tag, Tag>): JavaOpaque<"com.mojang.serialization.DataResult", [Tag]>;
  mergeToMap(arg0: Tag, arg1: Tag, arg2: Tag): JavaOpaque<"com.mojang.serialization.DataResult", [Tag]>;
  remove(arg0: Tag, arg1: string): Tag;
  toString(): string;
}
export type NbtOps = NbtOpsMembers & JavaOpaque<"com.mojang.serialization.DynamicOps", [Tag]>;
export interface NbtOpsStatics {
  readonly INSTANCE: NbtOps;
}

/** JVM class net.minecraft.nbt.NbtUtils. */
export interface NbtUtilsMembers {
}
export type NbtUtils = NbtUtilsMembers;
export interface NbtUtilsStatics {
  readonly SNBT_DATA_TAG: "data";
  addCurrentDataVersion(arg0: CompoundTag): CompoundTag;
  addCurrentDataVersion(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addDataVersion(arg0: CompoundTag, arg1: number): CompoundTag;
  addDataVersion(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: number): void;
  compareNbt(arg0: Tag | null, arg1: Tag | null, arg2: boolean): boolean;
  getDataVersion(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: number): number;
  getDataVersion(arg0: CompoundTag, arg1: number): number;
  prettyPrint(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: Tag, arg2: number, arg3: boolean): JavaOpaque<"java.lang.StringBuilder">;
  prettyPrint(arg0: Tag): string;
  prettyPrint(arg0: Tag, arg1: boolean): string;
  readBlockState(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>, arg1: CompoundTag): j_net_minecraft_world_level_block_state.BlockState;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  snbtToStructure(arg0: string): CompoundTag;
  structureToSnbt(arg0: CompoundTag): string;
  toPrettyComponent(arg0: Tag): j_net_minecraft_network_chat.Component;
  writeBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState): CompoundTag;
  writeFluidState(arg0: j_net_minecraft_world_level_material.FluidState): CompoundTag;
}

/** JVM interface net.minecraft.nbt.NumericTag. */
export interface NumericTagMembers {
  readonly __javaSupertypes?: readonly [PrimitiveTag];
  asBoolean(): JavaOptional<boolean>;
  asByte(): JavaOptional<number>;
  asDouble(): JavaOptional<number>;
  asFloat(): JavaOptional<number>;
  asInt(): JavaOptional<number>;
  asLong(): JavaOptional<bigint>;
  asNumber(): JavaOptional<number>;
  asShort(): JavaOptional<number>;
  box(): number;
  byteValue(): number;
  doubleValue(): number;
  floatValue(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
}
export type NumericTag = NumericTagMembers & PrimitiveTag;
export interface NumericTagStatics {
}

/** JVM interface net.minecraft.nbt.PrimitiveTag. */
export interface PrimitiveTagMembers {
  readonly __javaSupertypes?: readonly [Tag];
  copy(): Tag;
}
export type PrimitiveTag = PrimitiveTagMembers & Tag;
export interface PrimitiveTagStatics {
}

/** JVM class net.minecraft.nbt.ReportedNbtException. */
export interface ReportedNbtExceptionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft.ReportedException];
}
export type ReportedNbtException = ReportedNbtExceptionMembers & j_net_minecraft.ReportedException;
export interface ReportedNbtExceptionStatics {
  new(arg0: j_net_minecraft.CrashReport): ReportedNbtException;
}

/** JVM record net.minecraft.nbt.ShortTag. */
export interface ShortTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NumericTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  box(): number;
  byteValue(): number;
  copy(): ShortTag;
  doubleValue(): number;
  equals(arg0: object): boolean;
  floatValue(): number;
  getId(): number;
  getType(): TagType<ShortTag>;
  hashCode(): number;
  intValue(): number;
  longValue(): bigint;
  shortValue(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): number;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type ShortTag = ShortTagMembers & JavaOpaque<"java.lang.Record"> & NumericTag;
export interface ShortTagStatics {
  new(arg0: number): ShortTag;
  readonly TYPE: TagType<ShortTag>;
  valueOf(arg0: number): ShortTag;
}

/** JVM class net.minecraft.nbt.SnbtGrammar. */
export interface SnbtGrammarMembers {
}
export type SnbtGrammar = SnbtGrammarMembers;
export interface SnbtGrammarStatics {
  new(): SnbtGrammar;
  createParser<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): j_net_minecraft_util_parsing_packrat_commands.Grammar<T>;
  escapeControlCharacters(arg0: string): string | null;
}

/** JVM class net.minecraft.nbt.SnbtOperations. */
export interface SnbtOperationsMembers {
}
export type SnbtOperations = SnbtOperationsMembers;
export interface SnbtOperationsStatics {
  new(): SnbtOperations;
  readonly BUILTIN_FALSE: "false";
  readonly BUILTIN_IDS: j_net_minecraft_util_parsing_packrat.SuggestionSupplier<JavaOpaque<"com.mojang.brigadier.StringReader">>;
  readonly BUILTIN_OPERATIONS: JavaMap<SnbtOperations_BuiltinKey, SnbtOperations_BuiltinOperation>;
  readonly BUILTIN_TRUE: "true";
}

/** JVM record net.minecraft.nbt.SnbtOperations$BuiltinKey. */
export interface SnbtOperations_BuiltinKeyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  argCount(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  toString(): string;
}
export type SnbtOperations_BuiltinKey = SnbtOperations_BuiltinKeyMembers & JavaOpaque<"java.lang.Record">;
export interface SnbtOperations_BuiltinKeyStatics {
  new(arg0: string, arg1: number): SnbtOperations_BuiltinKey;
}

/** JVM interface net.minecraft.nbt.SnbtOperations$BuiltinOperation. */
export interface SnbtOperations_BuiltinOperationMembers {
  run<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: JavaList<T>, arg2: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): T | null;
}
export type SnbtOperations_BuiltinOperation = SnbtOperations_BuiltinOperationMembers;
export interface SnbtOperations_BuiltinOperationStatics {
}

/** JVM class net.minecraft.nbt.SnbtPrinterTagVisitor. */
export interface SnbtPrinterTagVisitorMembers {
  readonly __javaSupertypes?: readonly [TagVisitor];
  pathString(): string;
  visit(arg0: Tag): string;
  visitByte(arg0: ByteTag): void;
  visitByteArray(arg0: ByteArrayTag): void;
  visitCompound(arg0: CompoundTag): void;
  visitDouble(arg0: DoubleTag): void;
  visitEnd(arg0: EndTag): void;
  visitFloat(arg0: FloatTag): void;
  visitInt(arg0: IntTag): void;
  visitIntArray(arg0: IntArrayTag): void;
  visitList(arg0: ListTag): void;
  visitLong(arg0: LongTag): void;
  visitLongArray(arg0: LongArrayTag): void;
  visitShort(arg0: ShortTag): void;
  visitString(arg0: StringTag): void;
}
export type SnbtPrinterTagVisitor = SnbtPrinterTagVisitorMembers & TagVisitor;
export interface SnbtPrinterTagVisitorStatics {
  new(): SnbtPrinterTagVisitor;
  new(arg0: string, arg1: number, arg2: JavaList<string>): SnbtPrinterTagVisitor;
}

/** JVM interface net.minecraft.nbt.StreamTagVisitor. */
export interface StreamTagVisitorMembers {
  visit(arg0: number): StreamTagVisitor_ValueResult;
  visit(arg0: number): StreamTagVisitor_ValueResult;
  visit(arg0: number): StreamTagVisitor_ValueResult;
  visit(arg0: number): StreamTagVisitor_ValueResult;
  visit(arg0: bigint): StreamTagVisitor_ValueResult;
  visit(arg0: string): StreamTagVisitor_ValueResult;
  visit(arg0: number): StreamTagVisitor_ValueResult;
  visit(arg0: Array<number>): StreamTagVisitor_ValueResult;
  visit(arg0: Array<number>): StreamTagVisitor_ValueResult;
  visit(arg0: Array<bigint>): StreamTagVisitor_ValueResult;
  visitContainerEnd(): StreamTagVisitor_ValueResult;
  visitElement(arg0: TagType<object>, arg1: number): StreamTagVisitor_EntryResult;
  visitEnd(): StreamTagVisitor_ValueResult;
  visitEntry(arg0: TagType<object>): StreamTagVisitor_EntryResult;
  visitEntry(arg0: TagType<object>, arg1: string): StreamTagVisitor_EntryResult;
  visitList(arg0: TagType<object>, arg1: number): StreamTagVisitor_ValueResult;
  visitRootEntry(arg0: TagType<object>): StreamTagVisitor_ValueResult;
}
export type StreamTagVisitor = StreamTagVisitorMembers;
export interface StreamTagVisitorStatics {
}

/** Live JVM enum net.minecraft.nbt.StreamTagVisitor$EntryResult; constants are host handles, not strings. */
export type StreamTagVisitor_EntryResult = JavaEnum<"net.minecraft.nbt.StreamTagVisitor$EntryResult", "BREAK" | "ENTER" | "HALT" | "SKIP"> & StreamTagVisitor_EntryResultMembers;
export interface StreamTagVisitor_EntryResultMembers {
}
export interface StreamTagVisitor_EntryResultStatics {
  readonly BREAK: StreamTagVisitor_EntryResult;
  readonly ENTER: StreamTagVisitor_EntryResult;
  readonly HALT: StreamTagVisitor_EntryResult;
  readonly SKIP: StreamTagVisitor_EntryResult;
  valueOf(arg0: string): StreamTagVisitor_EntryResult;
  values(): Array<StreamTagVisitor_EntryResult>;
}

/** Live JVM enum net.minecraft.nbt.StreamTagVisitor$ValueResult; constants are host handles, not strings. */
export type StreamTagVisitor_ValueResult = JavaEnum<"net.minecraft.nbt.StreamTagVisitor$ValueResult", "BREAK" | "CONTINUE" | "HALT"> & StreamTagVisitor_ValueResultMembers;
export interface StreamTagVisitor_ValueResultMembers {
}
export interface StreamTagVisitor_ValueResultStatics {
  readonly BREAK: StreamTagVisitor_ValueResult;
  readonly CONTINUE: StreamTagVisitor_ValueResult;
  readonly HALT: StreamTagVisitor_ValueResult;
  valueOf(arg0: string): StreamTagVisitor_ValueResult;
  values(): Array<StreamTagVisitor_ValueResult>;
}

/** JVM record net.minecraft.nbt.StringTag. */
export interface StringTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, PrimitiveTag];
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  asString(): JavaOptional<string>;
  copy(): StringTag;
  equals(arg0: object): boolean;
  getId(): number;
  getType(): TagType<StringTag>;
  hashCode(): number;
  sizeInBytes(): number;
  toString(): string;
  value(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type StringTag = StringTagMembers & JavaOpaque<"java.lang.Record"> & PrimitiveTag;
export interface StringTagStatics {
  new(arg0: string): StringTag;
  readonly TYPE: TagType<StringTag>;
  escapeWithoutQuotes(arg0: string): string;
  escapeWithoutQuotes(arg0: string, arg1: JavaOpaque<"java.lang.StringBuilder">): void;
  quoteAndEscape(arg0: string): string;
  quoteAndEscape(arg0: string, arg1: JavaOpaque<"java.lang.StringBuilder">): void;
  /** @throws java.io.IOException */
  skipString(arg0: JavaOpaque<"java.io.DataInput">): void;
  valueOf(arg0: string): StringTag;
}

/** JVM class net.minecraft.nbt.StringTagVisitor. */
export interface StringTagVisitorMembers {
  readonly __javaSupertypes?: readonly [TagVisitor];
  build(): string;
  visitByte(arg0: ByteTag): void;
  visitByteArray(arg0: ByteArrayTag): void;
  visitCompound(arg0: CompoundTag): void;
  visitDouble(arg0: DoubleTag): void;
  visitEnd(arg0: EndTag): void;
  visitFloat(arg0: FloatTag): void;
  visitInt(arg0: IntTag): void;
  visitIntArray(arg0: IntArrayTag): void;
  visitList(arg0: ListTag): void;
  visitLong(arg0: LongTag): void;
  visitLongArray(arg0: LongArrayTag): void;
  visitShort(arg0: ShortTag): void;
  visitString(arg0: StringTag): void;
}
export type StringTagVisitor = StringTagVisitorMembers & TagVisitor;
export interface StringTagVisitorStatics {
  new(): StringTagVisitor;
}

/** JVM interface net.minecraft.nbt.Tag. */
export interface TagMembers {
  accept(arg0: StreamTagVisitor): StreamTagVisitor_ValueResult;
  accept(arg0: TagVisitor): void;
  acceptAsRoot(arg0: StreamTagVisitor): void;
  asBoolean(): JavaOptional<boolean>;
  asByte(): JavaOptional<number>;
  asByteArray(): JavaOptional<Array<number>>;
  asCompound(): JavaOptional<CompoundTag>;
  asDouble(): JavaOptional<number>;
  asFloat(): JavaOptional<number>;
  asInt(): JavaOptional<number>;
  asIntArray(): JavaOptional<Array<number>>;
  asList(): JavaOptional<ListTag>;
  asLong(): JavaOptional<bigint>;
  asLongArray(): JavaOptional<Array<bigint>>;
  asNumber(): JavaOptional<number>;
  asShort(): JavaOptional<number>;
  asString(): JavaOptional<string>;
  copy(): Tag;
  getId(): number;
  getType(): TagType<object>;
  sizeInBytes(): number;
  toString(): string;
  /** @throws java.io.IOException */
  write(arg0: JavaOpaque<"java.io.DataOutput">): void;
}
export type Tag = TagMembers;
export interface TagStatics {
  readonly ARRAY_HEADER: 12;
  readonly MAX_DEPTH: 512;
  readonly OBJECT_HEADER: 8;
  readonly OBJECT_REFERENCE: 4;
  readonly STRING_SIZE: 28;
  readonly TAG_BYTE: 1;
  readonly TAG_BYTE_ARRAY: 7;
  readonly TAG_COMPOUND: 10;
  readonly TAG_DOUBLE: 6;
  readonly TAG_END: 0;
  readonly TAG_FLOAT: 5;
  readonly TAG_INT: 3;
  readonly TAG_INT_ARRAY: 11;
  readonly TAG_LIST: 9;
  readonly TAG_LONG: 4;
  readonly TAG_LONG_ARRAY: 12;
  readonly TAG_SHORT: 2;
  readonly TAG_STRING: 8;
}

/** JVM class net.minecraft.nbt.TagParser. */
export interface TagParserMembers<T = unknown> {
  getOps(): JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseAsArgument(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseFully(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseFully(arg0: string): T;
}
export type TagParser<T = unknown> = TagParserMembers<T>;
export interface TagParserStatics {
  readonly ELEMENT_SEPARATOR: 44;
  readonly ERROR_EXPECTED_COMPOUND: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_TRAILING_DATA: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly FLATTENED_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CompoundTag]>;
  readonly LENIENT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CompoundTag]>;
  readonly NAME_VALUE_SEPARATOR: 58;
  create<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): TagParser<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseCompoundAsArgument(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): CompoundTag;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseCompoundFully(arg0: string): CompoundTag;
}

/** JVM interface net.minecraft.nbt.TagType. */
export interface TagTypeMembers<T /* extends Tag */ = unknown> {
  getName(): string;
  getPrettyName(): string;
  /** @throws java.io.IOException */
  load(arg0: JavaOpaque<"java.io.DataInput">, arg1: NbtAccounter): T;
  /** @throws java.io.IOException */
  parse(arg0: JavaOpaque<"java.io.DataInput">, arg1: StreamTagVisitor, arg2: NbtAccounter): StreamTagVisitor_ValueResult;
  /** @throws java.io.IOException */
  parseRoot(arg0: JavaOpaque<"java.io.DataInput">, arg1: StreamTagVisitor, arg2: NbtAccounter): void;
  /** @throws java.io.IOException */
  skip(arg0: JavaOpaque<"java.io.DataInput">, arg1: number, arg2: NbtAccounter): void;
  /** @throws java.io.IOException */
  skip(arg0: JavaOpaque<"java.io.DataInput">, arg1: NbtAccounter): void;
}
export type TagType<T /* extends Tag */ = unknown> = TagTypeMembers<T>;
export interface TagTypeStatics {
  createInvalid(arg0: number): TagType<EndTag>;
}

/** JVM interface net.minecraft.nbt.TagType$StaticSize. */
export interface TagType_StaticSizeMembers<T /* extends Tag */ = unknown> {
  readonly __javaSupertypes?: readonly [TagType<T>];
  size(): number;
  /** @throws java.io.IOException */
  skip(arg0: JavaOpaque<"java.io.DataInput">, arg1: number, arg2: NbtAccounter): void;
  /** @throws java.io.IOException */
  skip(arg0: JavaOpaque<"java.io.DataInput">, arg1: NbtAccounter): void;
}
export type TagType_StaticSize<T /* extends Tag */ = unknown> = TagType_StaticSizeMembers<T> & TagType<T>;
export interface TagType_StaticSizeStatics {
}

/** JVM interface net.minecraft.nbt.TagType$VariableSize. */
export interface TagType_VariableSizeMembers<T /* extends Tag */ = unknown> {
  readonly __javaSupertypes?: readonly [TagType<T>];
  /** @throws java.io.IOException */
  skip(arg0: JavaOpaque<"java.io.DataInput">, arg1: number, arg2: NbtAccounter): void;
}
export type TagType_VariableSize<T /* extends Tag */ = unknown> = TagType_VariableSizeMembers<T> & TagType<T>;
export interface TagType_VariableSizeStatics {
}

/** JVM class net.minecraft.nbt.TagTypes. */
export interface TagTypesMembers {
}
export type TagTypes = TagTypesMembers;
export interface TagTypesStatics {
  new(): TagTypes;
  getType(arg0: number): TagType<object>;
}

/** JVM interface net.minecraft.nbt.TagVisitor. */
export interface TagVisitorMembers {
  visitByte(arg0: ByteTag): void;
  visitByteArray(arg0: ByteArrayTag): void;
  visitCompound(arg0: CompoundTag): void;
  visitDouble(arg0: DoubleTag): void;
  visitEnd(arg0: EndTag): void;
  visitFloat(arg0: FloatTag): void;
  visitInt(arg0: IntTag): void;
  visitIntArray(arg0: IntArrayTag): void;
  visitList(arg0: ListTag): void;
  visitLong(arg0: LongTag): void;
  visitLongArray(arg0: LongArrayTag): void;
  visitShort(arg0: ShortTag): void;
  visitString(arg0: StringTag): void;
}
export type TagVisitor = TagVisitorMembers;
export interface TagVisitorStatics {
}

/** JVM class net.minecraft.nbt.TextComponentTagVisitor. */
export interface TextComponentTagVisitorMembers {
  readonly __javaSupertypes?: readonly [TagVisitor];
  visit(arg0: Tag): j_net_minecraft_network_chat.Component;
  visitByte(arg0: ByteTag): void;
  visitByteArray(arg0: ByteArrayTag): void;
  visitCompound(arg0: CompoundTag): void;
  visitDouble(arg0: DoubleTag): void;
  visitEnd(arg0: EndTag): void;
  visitFloat(arg0: FloatTag): void;
  visitInt(arg0: IntTag): void;
  visitIntArray(arg0: IntArrayTag): void;
  visitList(arg0: ListTag): void;
  visitLong(arg0: LongTag): void;
  visitLongArray(arg0: LongArrayTag): void;
  visitShort(arg0: ShortTag): void;
  visitString(arg0: StringTag): void;
}
export type TextComponentTagVisitor = TextComponentTagVisitorMembers & TagVisitor;
export interface TextComponentTagVisitorStatics {
  new(arg0: string): TextComponentTagVisitor;
}
