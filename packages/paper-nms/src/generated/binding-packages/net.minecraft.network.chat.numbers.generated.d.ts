// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';

/** JVM class net.minecraft.network.chat.numbers.BlankFormat. */
export interface BlankFormatMembers {
  readonly __javaSupertypes?: readonly [NumberFormat];
  format(arg0: number): j_net_minecraft_network_chat.MutableComponent;
  type(): NumberFormatType<BlankFormat>;
}
export type BlankFormat = BlankFormatMembers & NumberFormat;
export interface BlankFormatStatics {
  new(): BlankFormat;
  readonly INSTANCE: BlankFormat;
  readonly TYPE: NumberFormatType<BlankFormat>;
}

/** JVM class net.minecraft.network.chat.numbers.FixedFormat. */
export interface FixedFormatMembers {
  readonly __javaSupertypes?: readonly [NumberFormat];
  format(arg0: number): j_net_minecraft_network_chat.MutableComponent;
  type(): NumberFormatType<FixedFormat>;
  readonly value: j_net_minecraft_network_chat.Component;
}
export type FixedFormat = FixedFormatMembers & NumberFormat;
export interface FixedFormatStatics {
  new(arg0: j_net_minecraft_network_chat.Component): FixedFormat;
  readonly TYPE: NumberFormatType<FixedFormat>;
}

/** JVM interface net.minecraft.network.chat.numbers.NumberFormat. */
export interface NumberFormatMembers {
  format(arg0: number): j_net_minecraft_network_chat.MutableComponent;
  type(): NumberFormatType<NumberFormat>;
}
export type NumberFormat = NumberFormatMembers;
export interface NumberFormatStatics {
}

/** JVM interface net.minecraft.network.chat.numbers.NumberFormatType. */
export interface NumberFormatTypeMembers<T /* extends NumberFormat */ = unknown> {
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type NumberFormatType<T /* extends NumberFormat */ = unknown> = NumberFormatTypeMembers<T>;
export interface NumberFormatTypeStatics {
}

/** JVM class net.minecraft.network.chat.numbers.NumberFormatTypes. */
export interface NumberFormatTypesMembers {
}
export type NumberFormatTypes = NumberFormatTypesMembers;
export interface NumberFormatTypesStatics {
  new(): NumberFormatTypes;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NumberFormat]>;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NumberFormat]>;
  readonly OPTIONAL_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaOptional<NumberFormat>>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, NumberFormat>;
  bootstrap(arg0: j_net_minecraft_core.Registry<NumberFormatType<object>>): NumberFormatType<object>;
}

/** JVM class net.minecraft.network.chat.numbers.StyledFormat. */
export interface StyledFormatMembers {
  readonly __javaSupertypes?: readonly [NumberFormat];
  format(arg0: number): j_net_minecraft_network_chat.MutableComponent;
  readonly style: j_net_minecraft_network_chat.Style;
  type(): NumberFormatType<StyledFormat>;
}
export type StyledFormat = StyledFormatMembers & NumberFormat;
export interface StyledFormatStatics {
  new(arg0: j_net_minecraft_network_chat.Style): StyledFormat;
  readonly NO_STYLE: StyledFormat;
  readonly PLAYER_LIST_DEFAULT: StyledFormat;
  readonly SIDEBAR_DEFAULT: StyledFormat;
  readonly TYPE: NumberFormatType<StyledFormat>;
}
