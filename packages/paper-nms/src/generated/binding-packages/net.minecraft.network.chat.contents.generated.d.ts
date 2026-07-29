// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments_coordinates from './net.minecraft.commands.arguments.coordinates.generated.js';
import type * as j_net_minecraft_commands_arguments_selector from './net.minecraft.commands.arguments.selector.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';

/** JVM record net.minecraft.network.chat.contents.BlockDataSource. */
export interface BlockDataSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DataSource];
  compiledPos(): j_net_minecraft_commands_arguments_coordinates.Coordinates | null;
  equals(arg0: object): boolean;
  getData(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_nbt.CompoundTag]>;
  hashCode(): number;
  posPattern(): string;
  toString(): string;
  type(): DataSource_Type<object>;
}
export type BlockDataSource = BlockDataSourceMembers & JavaOpaque<"java.lang.Record"> & DataSource;
export interface BlockDataSourceStatics {
  new(arg0: string): BlockDataSource;
  new(arg0: string, arg1: j_net_minecraft_commands_arguments_coordinates.Coordinates | null): BlockDataSource;
  readonly SUB_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockDataSource]>;
  readonly TYPE: DataSource_Type<BlockDataSource>;
}

/** JVM interface net.minecraft.network.chat.contents.DataSource. */
export interface DataSourceMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getData(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_nbt.CompoundTag]>;
  type(): DataSource_Type<object>;
}
export type DataSource = DataSourceMembers;
export interface DataSourceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DataSource]>;
}

/** JVM record net.minecraft.network.chat.contents.DataSource$Type. */
export interface DataSource_TypeMembers<T /* extends DataSource */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.StringRepresentable];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  equals(arg0: object): boolean;
  getSerializedName(): string;
  hashCode(): number;
  id(): string;
  toString(): string;
}
export type DataSource_Type<T /* extends DataSource */ = unknown> = DataSource_TypeMembers<T> & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.StringRepresentable;
export interface DataSource_TypeStatics {
  new<T /* extends DataSource */>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: string): DataSource_Type<T>;
}

/** JVM record net.minecraft.network.chat.contents.EntityDataSource. */
export interface EntityDataSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DataSource];
  compiledSelector(): j_net_minecraft_commands_arguments_selector.EntitySelector | null;
  equals(arg0: object): boolean;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getData(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_nbt.CompoundTag]>;
  hashCode(): number;
  selectorPattern(): string;
  toString(): string;
  type(): DataSource_Type<object>;
}
export type EntityDataSource = EntityDataSourceMembers & JavaOpaque<"java.lang.Record"> & DataSource;
export interface EntityDataSourceStatics {
  new(arg0: string): EntityDataSource;
  new(arg0: string, arg1: j_net_minecraft_commands_arguments_selector.EntitySelector | null): EntityDataSource;
  readonly SUB_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EntityDataSource]>;
  readonly TYPE: DataSource_Type<EntityDataSource>;
}

/** JVM class net.minecraft.network.chat.contents.KeybindContents. */
export interface KeybindContentsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_chat.ComponentContents];
  equals(arg0: object): boolean;
  getName(): string;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_chat.ComponentContents_Type<object>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_StyledContentConsumer<T>, arg1: j_net_minecraft_network_chat.Style): JavaOptional<T>;
}
export type KeybindContents = KeybindContentsMembers & j_net_minecraft_network_chat.ComponentContents;
export interface KeybindContentsStatics {
  new(arg0: string): KeybindContents;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [KeybindContents]>;
  readonly TYPE: j_net_minecraft_network_chat.ComponentContents_Type<KeybindContents>;
}

/** JVM class net.minecraft.network.chat.contents.KeybindResolver. */
export interface KeybindResolverMembers {
}
export type KeybindResolver = KeybindResolverMembers;
export interface KeybindResolverStatics {
  new(): KeybindResolver;
  setKeyResolver(arg0: JavaFunction<string, JavaSupplier<j_net_minecraft_network_chat.Component>>): void;
}

/** JVM class net.minecraft.network.chat.contents.NbtContents. */
export interface NbtContentsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_chat.ComponentContents];
  equals(arg0: object): boolean;
  getDataSource(): DataSource;
  getNbtPath(): string;
  getSeparator(): JavaOptional<j_net_minecraft_network_chat.Component>;
  hashCode(): number;
  isInterpreting(): boolean;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_network_chat.MutableComponent;
  toString(): string;
  type(): j_net_minecraft_network_chat.ComponentContents_Type<object>;
}
export type NbtContents = NbtContentsMembers & j_net_minecraft_network_chat.ComponentContents;
export interface NbtContentsStatics {
  new(arg0: string, arg1: boolean, arg2: JavaOptional<j_net_minecraft_network_chat.Component>, arg3: DataSource): NbtContents;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NbtContents]>;
  readonly TYPE: j_net_minecraft_network_chat.ComponentContents_Type<NbtContents>;
}

/** JVM interface net.minecraft.network.chat.contents.PlainTextContents. */
export interface PlainTextContentsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_chat.ComponentContents];
  text(): string;
  type(): j_net_minecraft_network_chat.ComponentContents_Type<object>;
}
export type PlainTextContents = PlainTextContentsMembers & j_net_minecraft_network_chat.ComponentContents;
export interface PlainTextContentsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlainTextContents]>;
  readonly EMPTY: PlainTextContents;
  readonly TYPE: j_net_minecraft_network_chat.ComponentContents_Type<PlainTextContents>;
  create(arg0: string): PlainTextContents;
}

/** JVM record net.minecraft.network.chat.contents.PlainTextContents$LiteralContents. */
export interface PlainTextContents_LiteralContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, PlainTextContents];
  equals(arg0: object): boolean;
  hashCode(): number;
  text(): string;
  toString(): string;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_StyledContentConsumer<T>, arg1: j_net_minecraft_network_chat.Style): JavaOptional<T>;
}
export type PlainTextContents_LiteralContents = PlainTextContents_LiteralContentsMembers & JavaOpaque<"java.lang.Record"> & PlainTextContents;
export interface PlainTextContents_LiteralContentsStatics {
  new(arg0: string): PlainTextContents_LiteralContents;
}

/** JVM record net.minecraft.network.chat.contents.ScoreContents. */
export interface ScoreContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_chat.ComponentContents];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_commands_arguments_selector.SelectorPattern, string]>;
  objective(): string;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_network_chat.MutableComponent;
  toString(): string;
  type(): j_net_minecraft_network_chat.ComponentContents_Type<object>;
}
export type ScoreContents = ScoreContentsMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_chat.ComponentContents;
export interface ScoreContentsStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_commands_arguments_selector.SelectorPattern, string]>, arg1: string): ScoreContents;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ScoreContents]>;
  readonly INNER_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ScoreContents]>;
  readonly TYPE: j_net_minecraft_network_chat.ComponentContents_Type<ScoreContents>;
}

/** JVM record net.minecraft.network.chat.contents.SelectorContents. */
export interface SelectorContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_chat.ComponentContents];
  equals(arg0: object): boolean;
  hashCode(): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_network_chat.MutableComponent;
  selector(): j_net_minecraft_commands_arguments_selector.SelectorPattern;
  separator(): JavaOptional<j_net_minecraft_network_chat.Component>;
  toString(): string;
  type(): j_net_minecraft_network_chat.ComponentContents_Type<object>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_StyledContentConsumer<T>, arg1: j_net_minecraft_network_chat.Style): JavaOptional<T>;
}
export type SelectorContents = SelectorContentsMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_chat.ComponentContents;
export interface SelectorContentsStatics {
  new(arg0: j_net_minecraft_commands_arguments_selector.SelectorPattern, arg1: JavaOptional<j_net_minecraft_network_chat.Component>): SelectorContents;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SelectorContents]>;
  readonly TYPE: j_net_minecraft_network_chat.ComponentContents_Type<SelectorContents>;
}

/** JVM record net.minecraft.network.chat.contents.StorageDataSource. */
export interface StorageDataSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DataSource];
  equals(arg0: object): boolean;
  getData(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_nbt.CompoundTag]>;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  type(): DataSource_Type<object>;
}
export type StorageDataSource = StorageDataSourceMembers & JavaOpaque<"java.lang.Record"> & DataSource;
export interface StorageDataSourceStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): StorageDataSource;
  readonly SUB_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StorageDataSource]>;
  readonly TYPE: DataSource_Type<StorageDataSource>;
}

/** JVM class net.minecraft.network.chat.contents.TranslatableContents. */
export interface TranslatableContentsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_chat.ComponentContents];
  equals(arg0: object): boolean;
  getArgs(): Array<object>;
  getFallback(): string | null;
  getKey(): string;
  hashCode(): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_network_chat.MutableComponent;
  toString(): string;
  type(): j_net_minecraft_network_chat.ComponentContents_Type<object>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: j_net_minecraft_network_chat.FormattedText_StyledContentConsumer<T>, arg1: j_net_minecraft_network_chat.Style): JavaOptional<T>;
}
export type TranslatableContents = TranslatableContentsMembers & j_net_minecraft_network_chat.ComponentContents;
export interface TranslatableContentsStatics {
  new(arg0: string, arg1: string | null, arg2: Array<object>): TranslatableContents;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TranslatableContents]>;
  readonly NO_ARGS: Array<object>;
  readonly TYPE: j_net_minecraft_network_chat.ComponentContents_Type<TranslatableContents>;
  filterAllowedArguments(arg0: object | null): JavaOpaque<"com.mojang.serialization.DataResult", [object]>;
  isAllowedPrimitiveArgument(arg0: object | null): boolean;
}

/** JVM class net.minecraft.network.chat.contents.TranslatableFormatException. */
export interface TranslatableFormatExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.IllegalArgumentException">];
}
export type TranslatableFormatException = TranslatableFormatExceptionMembers & JavaOpaque<"java.lang.IllegalArgumentException">;
export interface TranslatableFormatExceptionStatics {
  new(arg0: TranslatableContents, arg1: number): TranslatableFormatException;
  new(arg0: TranslatableContents, arg1: string): TranslatableFormatException;
  new(arg0: TranslatableContents, arg1: JavaOpaque<"java.lang.Throwable">): TranslatableFormatException;
}
