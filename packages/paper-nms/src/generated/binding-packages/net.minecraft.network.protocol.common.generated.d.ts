// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_common_custom from './net.minecraft.network.protocol.common.custom.generated.js';
import type * as j_net_minecraft_network_protocol_cookie from './net.minecraft.network.protocol.cookie.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';

/** JVM class net.minecraft.network.protocol.common.ClientboundClearDialogPacket. */
export interface ClientboundClearDialogPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  handle(arg0: ClientCommonPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundClearDialogPacket>;
}
export type ClientboundClearDialogPacket = ClientboundClearDialogPacketMembers & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundClearDialogPacketStatics {
  readonly INSTANCE: ClientboundClearDialogPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundClearDialogPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket. */
export interface ClientboundCustomPayloadPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  payload(): j_net_minecraft_network_protocol_common_custom.CustomPacketPayload;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCustomPayloadPacket>;
}
export type ClientboundCustomPayloadPacket = ClientboundCustomPayloadPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundCustomPayloadPacketStatics {
  new(arg0: j_net_minecraft_network_protocol_common_custom.CustomPacketPayload): ClientboundCustomPayloadPacket;
  readonly CONFIG_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundCustomPayloadPacket>;
  readonly GAMEPLAY_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundCustomPayloadPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket. */
export interface ClientboundCustomReportDetailsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  details(): JavaMap<string, string>;
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCustomReportDetailsPacket>;
}
export type ClientboundCustomReportDetailsPacket = ClientboundCustomReportDetailsPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundCustomReportDetailsPacketStatics {
  new(arg0: JavaMap<string, string>): ClientboundCustomReportDetailsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundCustomReportDetailsPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundDisconnectPacket. */
export interface ClientboundDisconnectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  reason(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundDisconnectPacket>;
}
export type ClientboundDisconnectPacket = ClientboundDisconnectPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundDisconnectPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ClientboundDisconnectPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundDisconnectPacket>;
}

/** JVM class net.minecraft.network.protocol.common.ClientboundKeepAlivePacket. */
export interface ClientboundKeepAlivePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  getId(): bigint;
  handle(arg0: ClientCommonPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundKeepAlivePacket>;
}
export type ClientboundKeepAlivePacket = ClientboundKeepAlivePacketMembers & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundKeepAlivePacketStatics {
  new(arg0: bigint): ClientboundKeepAlivePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundKeepAlivePacket>;
}

/** JVM class net.minecraft.network.protocol.common.ClientboundPingPacket. */
export interface ClientboundPingPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  getId(): number;
  handle(arg0: ClientCommonPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPingPacket>;
}
export type ClientboundPingPacket = ClientboundPingPacketMembers & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundPingPacketStatics {
  new(arg0: number): ClientboundPingPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPingPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket. */
export interface ClientboundResourcePackPopPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  id(): JavaOptional<JavaOpaque<"java.util.UUID">>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundResourcePackPopPacket>;
}
export type ClientboundResourcePackPopPacket = ClientboundResourcePackPopPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundResourcePackPopPacketStatics {
  new(arg0: JavaOptional<JavaOpaque<"java.util.UUID">>): ClientboundResourcePackPopPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundResourcePackPopPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket. */
export interface ClientboundResourcePackPushPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hash(): string;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  prompt(): JavaOptional<j_net_minecraft_network_chat.Component>;
  required(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundResourcePackPushPacket>;
  url(): string;
}
export type ClientboundResourcePackPushPacket = ClientboundResourcePackPushPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundResourcePackPushPacketStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: string, arg3: boolean, arg4: JavaOptional<j_net_minecraft_network_chat.Component>): ClientboundResourcePackPushPacket;
  readonly MAX_HASH_LENGTH: 40;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundResourcePackPushPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundServerLinksPacket. */
export interface ClientboundServerLinksPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  links(): JavaList<j_net_minecraft_server.ServerLinks_UntrustedEntry>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundServerLinksPacket>;
}
export type ClientboundServerLinksPacket = ClientboundServerLinksPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundServerLinksPacketStatics {
  new(arg0: JavaList<j_net_minecraft_server.ServerLinks_UntrustedEntry>): ClientboundServerLinksPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundServerLinksPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundShowDialogPacket. */
export interface ClientboundShowDialogPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  dialog(): j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>;
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundShowDialogPacket>;
}
export type ClientboundShowDialogPacket = ClientboundShowDialogPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundShowDialogPacketStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>): ClientboundShowDialogPacket;
  readonly CONTEXT_FREE_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundShowDialogPacket>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundShowDialogPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundStoreCookiePacket. */
export interface ClientboundStoreCookiePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  key(): j_net_minecraft_resources.ResourceLocation;
  payload(): Array<number>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundStoreCookiePacket>;
}
export type ClientboundStoreCookiePacket = ClientboundStoreCookiePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundStoreCookiePacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: Array<number>): ClientboundStoreCookiePacket;
  readonly PAYLOAD_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Array<number>>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundStoreCookiePacket>;
}

/** JVM record net.minecraft.network.protocol.common.ClientboundTransferPacket. */
export interface ClientboundTransferPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientCommonPacketListener): void;
  hashCode(): number;
  host(): string;
  port(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTransferPacket>;
}
export type ClientboundTransferPacket = ClientboundTransferPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundTransferPacketStatics {
  new(arg0: string, arg1: number): ClientboundTransferPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundTransferPacket>;
}

/** JVM class net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket. */
export interface ClientboundUpdateTagsPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>];
  getTags(): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, j_net_minecraft_tags.TagNetworkSerialization_NetworkPayload>;
  handle(arg0: ClientCommonPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundUpdateTagsPacket>;
}
export type ClientboundUpdateTagsPacket = ClientboundUpdateTagsPacketMembers & j_net_minecraft_network_protocol.Packet<ClientCommonPacketListener>;
export interface ClientboundUpdateTagsPacketStatics {
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, j_net_minecraft_tags.TagNetworkSerialization_NetworkPayload>): ClientboundUpdateTagsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundUpdateTagsPacket>;
}

/** JVM interface net.minecraft.network.protocol.common.ClientCommonPacketListener. */
export interface ClientCommonPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_cookie.ClientCookiePacketListener];
  handleClearDialog(arg0: ClientboundClearDialogPacket): void;
  handleCustomPayload(arg0: ClientboundCustomPayloadPacket): void;
  handleCustomReportDetails(arg0: ClientboundCustomReportDetailsPacket): void;
  handleDisconnect(arg0: ClientboundDisconnectPacket): void;
  handleKeepAlive(arg0: ClientboundKeepAlivePacket): void;
  handlePing(arg0: ClientboundPingPacket): void;
  handleResourcePackPop(arg0: ClientboundResourcePackPopPacket): void;
  handleResourcePackPush(arg0: ClientboundResourcePackPushPacket): void;
  handleServerLinks(arg0: ClientboundServerLinksPacket): void;
  handleShowDialog(arg0: ClientboundShowDialogPacket): void;
  handleStoreCookie(arg0: ClientboundStoreCookiePacket): void;
  handleTransfer(arg0: ClientboundTransferPacket): void;
  handleUpdateTags(arg0: ClientboundUpdateTagsPacket): void;
}
export type ClientCommonPacketListener = ClientCommonPacketListenerMembers & j_net_minecraft_network_protocol_cookie.ClientCookiePacketListener;
export interface ClientCommonPacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.common.CommonPacketTypes. */
export interface CommonPacketTypesMembers {
}
export type CommonPacketTypes = CommonPacketTypesMembers;
export interface CommonPacketTypesStatics {
  new(): CommonPacketTypes;
  readonly CLIENTBOUND_CLEAR_DIALOG: j_net_minecraft_network_protocol.PacketType<ClientboundClearDialogPacket>;
  readonly CLIENTBOUND_CUSTOM_PAYLOAD: j_net_minecraft_network_protocol.PacketType<ClientboundCustomPayloadPacket>;
  readonly CLIENTBOUND_CUSTOM_REPORT_DETAILS: j_net_minecraft_network_protocol.PacketType<ClientboundCustomReportDetailsPacket>;
  readonly CLIENTBOUND_DISCONNECT: j_net_minecraft_network_protocol.PacketType<ClientboundDisconnectPacket>;
  readonly CLIENTBOUND_KEEP_ALIVE: j_net_minecraft_network_protocol.PacketType<ClientboundKeepAlivePacket>;
  readonly CLIENTBOUND_PING: j_net_minecraft_network_protocol.PacketType<ClientboundPingPacket>;
  readonly CLIENTBOUND_RESOURCE_PACK_POP: j_net_minecraft_network_protocol.PacketType<ClientboundResourcePackPopPacket>;
  readonly CLIENTBOUND_RESOURCE_PACK_PUSH: j_net_minecraft_network_protocol.PacketType<ClientboundResourcePackPushPacket>;
  readonly CLIENTBOUND_SERVER_LINKS: j_net_minecraft_network_protocol.PacketType<ClientboundServerLinksPacket>;
  readonly CLIENTBOUND_SHOW_DIALOG: j_net_minecraft_network_protocol.PacketType<ClientboundShowDialogPacket>;
  readonly CLIENTBOUND_STORE_COOKIE: j_net_minecraft_network_protocol.PacketType<ClientboundStoreCookiePacket>;
  readonly CLIENTBOUND_TRANSFER: j_net_minecraft_network_protocol.PacketType<ClientboundTransferPacket>;
  readonly CLIENTBOUND_UPDATE_TAGS: j_net_minecraft_network_protocol.PacketType<ClientboundUpdateTagsPacket>;
  readonly SERVERBOUND_CLIENT_INFORMATION: j_net_minecraft_network_protocol.PacketType<ServerboundClientInformationPacket>;
  readonly SERVERBOUND_CUSTOM_CLICK_ACTION: j_net_minecraft_network_protocol.PacketType<ServerboundCustomClickActionPacket>;
  readonly SERVERBOUND_CUSTOM_PAYLOAD: j_net_minecraft_network_protocol.PacketType<ServerboundCustomPayloadPacket>;
  readonly SERVERBOUND_KEEP_ALIVE: j_net_minecraft_network_protocol.PacketType<ServerboundKeepAlivePacket>;
  readonly SERVERBOUND_PONG: j_net_minecraft_network_protocol.PacketType<ServerboundPongPacket>;
  readonly SERVERBOUND_RESOURCE_PACK: j_net_minecraft_network_protocol.PacketType<ServerboundResourcePackPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundClientInformationPacket. */
export interface ServerboundClientInformationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ServerCommonPacketListener): void;
  hashCode(): number;
  information(): j_net_minecraft_server_level.ClientInformation;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundClientInformationPacket>;
}
export type ServerboundClientInformationPacket = ServerboundClientInformationPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>;
export interface ServerboundClientInformationPacketStatics {
  new(arg0: j_net_minecraft_server_level.ClientInformation): ServerboundClientInformationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundClientInformationPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket. */
export interface ServerboundCustomClickActionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ServerCommonPacketListener): void;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  payload(): JavaOptional<j_net_minecraft_nbt.Tag>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundCustomClickActionPacket>;
}
export type ServerboundCustomClickActionPacket = ServerboundCustomClickActionPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>;
export interface ServerboundCustomClickActionPacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOptional<j_net_minecraft_nbt.Tag>): ServerboundCustomClickActionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundCustomClickActionPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket. */
export interface ServerboundCustomPayloadPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ServerCommonPacketListener): void;
  hashCode(): number;
  payload(): j_net_minecraft_network_protocol_common_custom.CustomPacketPayload;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundCustomPayloadPacket>;
}
export type ServerboundCustomPayloadPacket = ServerboundCustomPayloadPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>;
export interface ServerboundCustomPayloadPacketStatics {
  new(arg0: j_net_minecraft_network_protocol_common_custom.CustomPacketPayload): ServerboundCustomPayloadPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundCustomPayloadPacket>;
}

/** JVM class net.minecraft.network.protocol.common.ServerboundKeepAlivePacket. */
export interface ServerboundKeepAlivePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>];
  getId(): bigint;
  handle(arg0: ServerCommonPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundKeepAlivePacket>;
}
export type ServerboundKeepAlivePacket = ServerboundKeepAlivePacketMembers & j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>;
export interface ServerboundKeepAlivePacketStatics {
  new(arg0: bigint): ServerboundKeepAlivePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundKeepAlivePacket>;
}

/** JVM class net.minecraft.network.protocol.common.ServerboundPongPacket. */
export interface ServerboundPongPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>];
  getId(): number;
  handle(arg0: ServerCommonPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPongPacket>;
}
export type ServerboundPongPacket = ServerboundPongPacketMembers & j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>;
export interface ServerboundPongPacketStatics {
  new(arg0: number): ServerboundPongPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPongPacket>;
}

/** JVM record net.minecraft.network.protocol.common.ServerboundResourcePackPacket. */
export interface ServerboundResourcePackPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>];
  action(): ServerboundResourcePackPacket_Action;
  equals(arg0: object): boolean;
  handle(arg0: ServerCommonPacketListener): void;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundResourcePackPacket>;
}
export type ServerboundResourcePackPacket = ServerboundResourcePackPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerCommonPacketListener>;
export interface ServerboundResourcePackPacketStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: ServerboundResourcePackPacket_Action): ServerboundResourcePackPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundResourcePackPacket>;
}

/** Live JVM enum net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action; constants are host handles, not strings. */
export type ServerboundResourcePackPacket_Action = JavaEnum<"net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action", "ACCEPTED" | "DECLINED" | "DISCARDED" | "DOWNLOADED" | "FAILED_DOWNLOAD" | "FAILED_RELOAD" | "INVALID_URL" | "SUCCESSFULLY_LOADED"> & ServerboundResourcePackPacket_ActionMembers;
export interface ServerboundResourcePackPacket_ActionMembers {
  isTerminal(): boolean;
}
export interface ServerboundResourcePackPacket_ActionStatics {
  readonly ACCEPTED: ServerboundResourcePackPacket_Action;
  readonly DECLINED: ServerboundResourcePackPacket_Action;
  readonly DISCARDED: ServerboundResourcePackPacket_Action;
  readonly DOWNLOADED: ServerboundResourcePackPacket_Action;
  readonly FAILED_DOWNLOAD: ServerboundResourcePackPacket_Action;
  readonly FAILED_RELOAD: ServerboundResourcePackPacket_Action;
  readonly INVALID_URL: ServerboundResourcePackPacket_Action;
  readonly SUCCESSFULLY_LOADED: ServerboundResourcePackPacket_Action;
  valueOf(arg0: string): ServerboundResourcePackPacket_Action;
  values(): Array<ServerboundResourcePackPacket_Action>;
}

/** JVM interface net.minecraft.network.protocol.common.ServerCommonPacketListener. */
export interface ServerCommonPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_cookie.ServerCookiePacketListener];
  handleClientInformation(arg0: ServerboundClientInformationPacket): void;
  handleCustomClickAction(arg0: ServerboundCustomClickActionPacket): void;
  handleCustomPayload(arg0: ServerboundCustomPayloadPacket): void;
  handleKeepAlive(arg0: ServerboundKeepAlivePacket): void;
  handlePong(arg0: ServerboundPongPacket): void;
  handleResourcePackResponse(arg0: ServerboundResourcePackPacket): void;
}
export type ServerCommonPacketListener = ServerCommonPacketListenerMembers & j_net_minecraft_network_protocol_cookie.ServerCookiePacketListener;
export interface ServerCommonPacketListenerStatics {
}
