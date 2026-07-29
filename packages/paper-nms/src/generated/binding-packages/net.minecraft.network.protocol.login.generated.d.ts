// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_cookie from './net.minecraft.network.protocol.cookie.generated.js';
import type * as j_net_minecraft_network_protocol_login_custom from './net.minecraft.network.protocol.login.custom.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM record net.minecraft.network.protocol.login.ClientboundCustomQueryPacket. */
export interface ClientboundCustomQueryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientLoginPacketListener): void;
  hashCode(): number;
  payload(): j_net_minecraft_network_protocol_login_custom.CustomQueryPayload;
  toString(): string;
  transactionId(): number;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCustomQueryPacket>;
}
export type ClientboundCustomQueryPacket = ClientboundCustomQueryPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>;
export interface ClientboundCustomQueryPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_network_protocol_login_custom.CustomQueryPayload): ClientboundCustomQueryPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundCustomQueryPacket>;
}

/** JVM record net.minecraft.network.protocol.login.ClientboundCustomQueryPacket$PlayerInfoChannelPayload. */
export interface ClientboundCustomQueryPacket_PlayerInfoChannelPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol_login_custom.CustomQueryPayload];
  buffer(): j_net_minecraft_network.FriendlyByteBuf;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ClientboundCustomQueryPacket_PlayerInfoChannelPayload = ClientboundCustomQueryPacket_PlayerInfoChannelPayloadMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol_login_custom.CustomQueryPayload;
export interface ClientboundCustomQueryPacket_PlayerInfoChannelPayloadStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_network.FriendlyByteBuf): ClientboundCustomQueryPacket_PlayerInfoChannelPayload;
}

/** JVM class net.minecraft.network.protocol.login.ClientboundHelloPacket. */
export interface ClientboundHelloPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>];
  getChallenge(): Array<number>;
  /** @throws net.minecraft.util.CryptException */
  getPublicKey(): JavaOpaque<"java.security.PublicKey">;
  getServerId(): string;
  handle(arg0: ClientLoginPacketListener): void;
  shouldAuthenticate(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundHelloPacket>;
}
export type ClientboundHelloPacket = ClientboundHelloPacketMembers & j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>;
export interface ClientboundHelloPacketStatics {
  new(arg0: string, arg1: Array<number>, arg2: Array<number>, arg3: boolean): ClientboundHelloPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundHelloPacket>;
}

/** JVM class net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket. */
export interface ClientboundLoginCompressionPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>];
  getCompressionThreshold(): number;
  handle(arg0: ClientLoginPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLoginCompressionPacket>;
}
export type ClientboundLoginCompressionPacket = ClientboundLoginCompressionPacketMembers & j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>;
export interface ClientboundLoginCompressionPacketStatics {
  new(arg0: number): ClientboundLoginCompressionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundLoginCompressionPacket>;
}

/** JVM record net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket. */
export interface ClientboundLoginDisconnectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ClientLoginPacketListener): void;
  hashCode(): number;
  reason(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLoginDisconnectPacket>;
}
export type ClientboundLoginDisconnectPacket = ClientboundLoginDisconnectPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>;
export interface ClientboundLoginDisconnectPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ClientboundLoginDisconnectPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundLoginDisconnectPacket>;
}

/** JVM record net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket. */
export interface ClientboundLoginFinishedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>];
  equals(arg0: object): boolean;
  gameProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  handle(arg0: ClientLoginPacketListener): void;
  hashCode(): number;
  isTerminal(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLoginFinishedPacket>;
}
export type ClientboundLoginFinishedPacket = ClientboundLoginFinishedPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientLoginPacketListener>;
export interface ClientboundLoginFinishedPacketStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): ClientboundLoginFinishedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundLoginFinishedPacket>;
}

/** JVM interface net.minecraft.network.protocol.login.ClientLoginPacketListener. */
export interface ClientLoginPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_cookie.ClientCookiePacketListener];
  handleCompression(arg0: ClientboundLoginCompressionPacket): void;
  handleCustomQuery(arg0: ClientboundCustomQueryPacket): void;
  handleDisconnect(arg0: ClientboundLoginDisconnectPacket): void;
  handleHello(arg0: ClientboundHelloPacket): void;
  handleLoginFinished(arg0: ClientboundLoginFinishedPacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ClientLoginPacketListener = ClientLoginPacketListenerMembers & j_net_minecraft_network_protocol_cookie.ClientCookiePacketListener;
export interface ClientLoginPacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.login.LoginPacketTypes. */
export interface LoginPacketTypesMembers {
}
export type LoginPacketTypes = LoginPacketTypesMembers;
export interface LoginPacketTypesStatics {
  new(): LoginPacketTypes;
  readonly CLIENTBOUND_CUSTOM_QUERY: j_net_minecraft_network_protocol.PacketType<ClientboundCustomQueryPacket>;
  readonly CLIENTBOUND_HELLO: j_net_minecraft_network_protocol.PacketType<ClientboundHelloPacket>;
  readonly CLIENTBOUND_LOGIN_COMPRESSION: j_net_minecraft_network_protocol.PacketType<ClientboundLoginCompressionPacket>;
  readonly CLIENTBOUND_LOGIN_DISCONNECT: j_net_minecraft_network_protocol.PacketType<ClientboundLoginDisconnectPacket>;
  readonly CLIENTBOUND_LOGIN_FINISHED: j_net_minecraft_network_protocol.PacketType<ClientboundLoginFinishedPacket>;
  readonly SERVERBOUND_CUSTOM_QUERY_ANSWER: j_net_minecraft_network_protocol.PacketType<ServerboundCustomQueryAnswerPacket>;
  readonly SERVERBOUND_HELLO: j_net_minecraft_network_protocol.PacketType<ServerboundHelloPacket>;
  readonly SERVERBOUND_KEY: j_net_minecraft_network_protocol.PacketType<ServerboundKeyPacket>;
  readonly SERVERBOUND_LOGIN_ACKNOWLEDGED: j_net_minecraft_network_protocol.PacketType<ServerboundLoginAcknowledgedPacket>;
}

/** JVM class net.minecraft.network.protocol.login.LoginProtocols. */
export interface LoginProtocolsMembers {
}
export type LoginProtocols = LoginProtocolsMembers;
export interface LoginProtocolsStatics {
  new(): LoginProtocols;
  readonly CLIENTBOUND: j_net_minecraft_network.ProtocolInfo<ClientLoginPacketListener>;
  readonly CLIENTBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ClientLoginPacketListener, j_net_minecraft_network.FriendlyByteBuf>;
  readonly SERVERBOUND: j_net_minecraft_network.ProtocolInfo<ServerLoginPacketListener>;
  readonly SERVERBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ServerLoginPacketListener, j_net_minecraft_network.FriendlyByteBuf>;
}

/** JVM record net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket. */
export interface ServerboundCustomQueryAnswerPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ServerLoginPacketListener): void;
  hashCode(): number;
  payload(): j_net_minecraft_network_protocol_login_custom.CustomQueryAnswerPayload | null;
  toString(): string;
  transactionId(): number;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundCustomQueryAnswerPacket>;
}
export type ServerboundCustomQueryAnswerPacket = ServerboundCustomQueryAnswerPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>;
export interface ServerboundCustomQueryAnswerPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_network_protocol_login_custom.CustomQueryAnswerPayload | null): ServerboundCustomQueryAnswerPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundCustomQueryAnswerPacket>;
}

/** JVM class net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket$QueryAnswerPayload. */
export interface ServerboundCustomQueryAnswerPacket_QueryAnswerPayloadMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_login_custom.CustomQueryAnswerPayload];
  readonly buffer: j_net_minecraft_network.FriendlyByteBuf;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ServerboundCustomQueryAnswerPacket_QueryAnswerPayload = ServerboundCustomQueryAnswerPacket_QueryAnswerPayloadMembers & j_net_minecraft_network_protocol_login_custom.CustomQueryAnswerPayload;
export interface ServerboundCustomQueryAnswerPacket_QueryAnswerPayloadStatics {
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): ServerboundCustomQueryAnswerPacket_QueryAnswerPayload;
}

/** JVM record net.minecraft.network.protocol.login.ServerboundHelloPacket. */
export interface ServerboundHelloPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ServerLoginPacketListener): void;
  hashCode(): number;
  name(): string;
  profileId(): JavaOpaque<"java.util.UUID">;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundHelloPacket>;
}
export type ServerboundHelloPacket = ServerboundHelloPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>;
export interface ServerboundHelloPacketStatics {
  new(arg0: string, arg1: JavaOpaque<"java.util.UUID">): ServerboundHelloPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundHelloPacket>;
}

/** JVM class net.minecraft.network.protocol.login.ServerboundKeyPacket. */
export interface ServerboundKeyPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>];
  /** @throws net.minecraft.util.CryptException */
  getSecretKey(arg0: JavaOpaque<"java.security.PrivateKey">): JavaOpaque<"javax.crypto.SecretKey">;
  handle(arg0: ServerLoginPacketListener): void;
  isChallengeValid(arg0: Array<number>, arg1: JavaOpaque<"java.security.PrivateKey">): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundKeyPacket>;
}
export type ServerboundKeyPacket = ServerboundKeyPacketMembers & j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>;
export interface ServerboundKeyPacketStatics {
  /** @throws net.minecraft.util.CryptException */
  new(arg0: JavaOpaque<"javax.crypto.SecretKey">, arg1: JavaOpaque<"java.security.PublicKey">, arg2: Array<number>): ServerboundKeyPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundKeyPacket>;
}

/** JVM class net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket. */
export interface ServerboundLoginAcknowledgedPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>];
  handle(arg0: ServerLoginPacketListener): void;
  isTerminal(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundLoginAcknowledgedPacket>;
}
export type ServerboundLoginAcknowledgedPacket = ServerboundLoginAcknowledgedPacketMembers & j_net_minecraft_network_protocol.Packet<ServerLoginPacketListener>;
export interface ServerboundLoginAcknowledgedPacketStatics {
  readonly INSTANCE: ServerboundLoginAcknowledgedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundLoginAcknowledgedPacket>;
}

/** JVM interface net.minecraft.network.protocol.login.ServerLoginPacketListener. */
export interface ServerLoginPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_cookie.ServerCookiePacketListener];
  handleCustomQueryPacket(arg0: ServerboundCustomQueryAnswerPacket): void;
  handleHello(arg0: ServerboundHelloPacket): void;
  handleKey(arg0: ServerboundKeyPacket): void;
  handleLoginAcknowledgement(arg0: ServerboundLoginAcknowledgedPacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ServerLoginPacketListener = ServerLoginPacketListenerMembers & j_net_minecraft_network_protocol_cookie.ServerCookiePacketListener;
export interface ServerLoginPacketListenerStatics {
}
