// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket. */
export interface ClientboundFinishConfigurationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">): void;
  isTerminal(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundFinishConfigurationPacket]>;
}
export type ClientboundFinishConfigurationPacket = ClientboundFinishConfigurationPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>;
export interface ClientboundFinishConfigurationPacketStatics {
  readonly INSTANCE: ClientboundFinishConfigurationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundFinishConfigurationPacket]>;
}

/** JVM record net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket. */
export interface ClientboundRegistryDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>];
  entries(): JavaList<JavaOpaque<"net.minecraft.core.RegistrySynchronization$PackedRegistryEntry">>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">): void;
  hashCode(): number;
  registry(): JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.core.Registry", [object]>]>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRegistryDataPacket]>;
}
export type ClientboundRegistryDataPacket = ClientboundRegistryDataPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>;
export interface ClientboundRegistryDataPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.core.Registry", [object]>]>, arg1: JavaList<JavaOpaque<"net.minecraft.core.RegistrySynchronization$PackedRegistryEntry">>): ClientboundRegistryDataPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundRegistryDataPacket]>;
}

/** JVM class net.minecraft.network.protocol.configuration.ClientboundResetChatPacket. */
export interface ClientboundResetChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundResetChatPacket]>;
}
export type ClientboundResetChatPacket = ClientboundResetChatPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>;
export interface ClientboundResetChatPacketStatics {
  readonly INSTANCE: ClientboundResetChatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundResetChatPacket]>;
}

/** JVM record net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks. */
export interface ClientboundSelectKnownPacksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">): void;
  hashCode(): number;
  knownPacks(): JavaList<JavaOpaque<"net.minecraft.server.packs.repository.KnownPack">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSelectKnownPacks]>;
}
export type ClientboundSelectKnownPacks = ClientboundSelectKnownPacksMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>;
export interface ClientboundSelectKnownPacksStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.server.packs.repository.KnownPack">>): ClientboundSelectKnownPacks;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundSelectKnownPacks]>;
}

/** JVM record net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket. */
export interface ClientboundUpdateEnabledFeaturesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>];
  equals(arg0: object): boolean;
  features(): JavaSet<JavaOpaque<"net.minecraft.resources.ResourceLocation">>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundUpdateEnabledFeaturesPacket]>;
}
export type ClientboundUpdateEnabledFeaturesPacket = ClientboundUpdateEnabledFeaturesPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener">]>;
export interface ClientboundUpdateEnabledFeaturesPacketStatics {
  new(arg0: JavaSet<JavaOpaque<"net.minecraft.resources.ResourceLocation">>): ClientboundUpdateEnabledFeaturesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundUpdateEnabledFeaturesPacket]>;
}

/** JVM class net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket. */
export interface ServerboundFinishConfigurationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener">): void;
  isTerminal(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundFinishConfigurationPacket]>;
}
export type ServerboundFinishConfigurationPacket = ServerboundFinishConfigurationPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener">]>;
export interface ServerboundFinishConfigurationPacketStatics {
  readonly INSTANCE: ServerboundFinishConfigurationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundFinishConfigurationPacket]>;
}

/** JVM record net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks. */
export interface ServerboundSelectKnownPacksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener">): void;
  hashCode(): number;
  knownPacks(): JavaList<JavaOpaque<"net.minecraft.server.packs.repository.KnownPack">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSelectKnownPacks]>;
}
export type ServerboundSelectKnownPacks = ServerboundSelectKnownPacksMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener">]>;
export interface ServerboundSelectKnownPacksStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.server.packs.repository.KnownPack">>): ServerboundSelectKnownPacks;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundSelectKnownPacks]>;
}
