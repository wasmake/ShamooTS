// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.network.protocol.common.ClientboundClearDialogPacket. */
export interface ClientboundClearDialogPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundClearDialogPacket]>;
}
export type ClientboundClearDialogPacket = ClientboundClearDialogPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundClearDialogPacketStatics {
  readonly INSTANCE: ClientboundClearDialogPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundClearDialogPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket. */
export interface ClientboundCustomPayloadPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  payload(): JavaOpaque<"net.minecraft.network.protocol.common.custom.CustomPacketPayload">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCustomPayloadPacket]>;
}
export type ClientboundCustomPayloadPacket = ClientboundCustomPayloadPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundCustomPayloadPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.common.custom.CustomPacketPayload">): ClientboundCustomPayloadPacket;
  readonly CONFIG_STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundCustomPayloadPacket]>;
  readonly GAMEPLAY_STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundCustomPayloadPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket. */
export interface ClientboundCustomReportDetailsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  details(): JavaMap<string, string>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCustomReportDetailsPacket]>;
}
export type ClientboundCustomReportDetailsPacket = ClientboundCustomReportDetailsPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundCustomReportDetailsPacketStatics {
  new(arg0: JavaMap<string, string>): ClientboundCustomReportDetailsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundCustomReportDetailsPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundDisconnectPacket. */
export interface ClientboundDisconnectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  reason(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundDisconnectPacket]>;
}
export type ClientboundDisconnectPacket = ClientboundDisconnectPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundDisconnectPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundDisconnectPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundDisconnectPacket]>;
}

/** JVM class net.minecraft.network.protocol.common.ClientboundKeepAlivePacket. */
export interface ClientboundKeepAlivePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  getId(): bigint;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundKeepAlivePacket]>;
}
export type ClientboundKeepAlivePacket = ClientboundKeepAlivePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundKeepAlivePacketStatics {
  new(arg0: bigint): ClientboundKeepAlivePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundKeepAlivePacket]>;
}

/** JVM class net.minecraft.network.protocol.common.ClientboundPingPacket. */
export interface ClientboundPingPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPingPacket]>;
}
export type ClientboundPingPacket = ClientboundPingPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundPingPacketStatics {
  new(arg0: number): ClientboundPingPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPingPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket. */
export interface ClientboundResourcePackPopPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  id(): JavaOptional<JavaOpaque<"java.util.UUID">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundResourcePackPopPacket]>;
}
export type ClientboundResourcePackPopPacket = ClientboundResourcePackPopPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundResourcePackPopPacketStatics {
  new(arg0: JavaOptional<JavaOpaque<"java.util.UUID">>): ClientboundResourcePackPopPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundResourcePackPopPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket. */
export interface ClientboundResourcePackPushPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hash(): string;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  prompt(): JavaOptional<JavaOpaque<"net.minecraft.network.chat.Component">>;
  required(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundResourcePackPushPacket]>;
  url(): string;
}
export type ClientboundResourcePackPushPacket = ClientboundResourcePackPushPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundResourcePackPushPacketStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: string, arg3: boolean, arg4: JavaOptional<JavaOpaque<"net.minecraft.network.chat.Component">>): ClientboundResourcePackPushPacket;
  readonly MAX_HASH_LENGTH: 40;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundResourcePackPushPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundServerLinksPacket. */
export interface ClientboundServerLinksPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  links(): JavaList<JavaOpaque<"net.minecraft.server.ServerLinks$UntrustedEntry">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundServerLinksPacket]>;
}
export type ClientboundServerLinksPacket = ClientboundServerLinksPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundServerLinksPacketStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.server.ServerLinks$UntrustedEntry">>): ClientboundServerLinksPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundServerLinksPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundShowDialogPacket. */
export interface ClientboundShowDialogPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  dialog(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.server.dialog.Dialog">]>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundShowDialogPacket]>;
}
export type ClientboundShowDialogPacket = ClientboundShowDialogPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundShowDialogPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.server.dialog.Dialog">]>): ClientboundShowDialogPacket;
  readonly CONTEXT_FREE_STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundShowDialogPacket]>;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundShowDialogPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundStoreCookiePacket. */
export interface ClientboundStoreCookiePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  key(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  payload(): Array<number>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundStoreCookiePacket]>;
}
export type ClientboundStoreCookiePacket = ClientboundStoreCookiePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundStoreCookiePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg1: Array<number>): ClientboundStoreCookiePacket;
  readonly PAYLOAD_STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, Array<number>]>;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundStoreCookiePacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundTransferPacket. */
export interface ClientboundTransferPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  hashCode(): number;
  host(): string;
  port(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTransferPacket]>;
}
export type ClientboundTransferPacket = ClientboundTransferPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundTransferPacketStatics {
  new(arg0: string, arg1: number): ClientboundTransferPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundTransferPacket]>;
}

/** JVM class net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket. */
export interface ClientboundUpdateTagsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>];
  getTags(): JavaMap<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.core.Registry", [object]>]>, JavaOpaque<"net.minecraft.tags.TagNetworkSerialization$NetworkPayload">>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundUpdateTagsPacket]>;
}
export type ClientboundUpdateTagsPacket = ClientboundUpdateTagsPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ClientCommonPacketListener">]>;
export interface ClientboundUpdateTagsPacketStatics {
  new(arg0: JavaMap<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.core.Registry", [object]>]>, JavaOpaque<"net.minecraft.tags.TagNetworkSerialization$NetworkPayload">>): ClientboundUpdateTagsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundUpdateTagsPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundClientInformationPacket. */
export interface ServerboundClientInformationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">): void;
  hashCode(): number;
  information(): JavaOpaque<"net.minecraft.server.level.ClientInformation">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundClientInformationPacket]>;
}
export type ServerboundClientInformationPacket = ServerboundClientInformationPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>;
export interface ServerboundClientInformationPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.server.level.ClientInformation">): ServerboundClientInformationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundClientInformationPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket. */
export interface ServerboundCustomClickActionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">): void;
  hashCode(): number;
  id(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  payload(): JavaOptional<JavaOpaque<"net.minecraft.nbt.Tag">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundCustomClickActionPacket]>;
}
export type ServerboundCustomClickActionPacket = ServerboundCustomClickActionPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>;
export interface ServerboundCustomClickActionPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg1: JavaOptional<JavaOpaque<"net.minecraft.nbt.Tag">>): ServerboundCustomClickActionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundCustomClickActionPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket. */
export interface ServerboundCustomPayloadPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">): void;
  hashCode(): number;
  payload(): JavaOpaque<"net.minecraft.network.protocol.common.custom.CustomPacketPayload">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundCustomPayloadPacket]>;
}
export type ServerboundCustomPayloadPacket = ServerboundCustomPayloadPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>;
export interface ServerboundCustomPayloadPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.common.custom.CustomPacketPayload">): ServerboundCustomPayloadPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundCustomPayloadPacket]>;
}

/** JVM class net.minecraft.network.protocol.common.ServerboundKeepAlivePacket. */
export interface ServerboundKeepAlivePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>];
  getId(): bigint;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundKeepAlivePacket]>;
}
export type ServerboundKeepAlivePacket = ServerboundKeepAlivePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>;
export interface ServerboundKeepAlivePacketStatics {
  new(arg0: bigint): ServerboundKeepAlivePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundKeepAlivePacket]>;
}

/** JVM class net.minecraft.network.protocol.common.ServerboundPongPacket. */
export interface ServerboundPongPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>];
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPongPacket]>;
}
export type ServerboundPongPacket = ServerboundPongPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>;
export interface ServerboundPongPacketStatics {
  new(arg0: number): ServerboundPongPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPongPacket]>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundResourcePackPacket. */
export interface ServerboundResourcePackPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>];
  action(): JavaOpaque<"net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">): void;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundResourcePackPacket]>;
}
export type ServerboundResourcePackPacket = ServerboundResourcePackPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.common.ServerCommonPacketListener">]>;
export interface ServerboundResourcePackPacketStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action">): ServerboundResourcePackPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundResourcePackPacket]>;
}
