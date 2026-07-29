// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.network.protocol.login.ClientboundCustomQueryPacket. */
export interface ClientboundCustomQueryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">): void;
  hashCode(): number;
  payload(): JavaOpaque<"net.minecraft.network.protocol.login.custom.CustomQueryPayload">;
  toString(): string;
  transactionId(): number;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCustomQueryPacket]>;
}
export type ClientboundCustomQueryPacket = ClientboundCustomQueryPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>;
export interface ClientboundCustomQueryPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.network.protocol.login.custom.CustomQueryPayload">): ClientboundCustomQueryPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundCustomQueryPacket]>;
}

/** JVM class net.minecraft.network.protocol.login.ClientboundHelloPacket. */
export interface ClientboundHelloPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>];
  getChallenge(): Array<number>;
  /** @throws net.minecraft.util.CryptException */
  getPublicKey(): JavaOpaque<"java.security.PublicKey">;
  getServerId(): string;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">): void;
  shouldAuthenticate(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundHelloPacket]>;
}
export type ClientboundHelloPacket = ClientboundHelloPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>;
export interface ClientboundHelloPacketStatics {
  new(arg0: string, arg1: Array<number>, arg2: Array<number>, arg3: boolean): ClientboundHelloPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundHelloPacket]>;
}

/** JVM class net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket. */
export interface ClientboundLoginCompressionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>];
  getCompressionThreshold(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLoginCompressionPacket]>;
}
export type ClientboundLoginCompressionPacket = ClientboundLoginCompressionPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>;
export interface ClientboundLoginCompressionPacketStatics {
  new(arg0: number): ClientboundLoginCompressionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundLoginCompressionPacket]>;
}

/** JVM record net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket. */
export interface ClientboundLoginDisconnectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">): void;
  hashCode(): number;
  reason(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLoginDisconnectPacket]>;
}
export type ClientboundLoginDisconnectPacket = ClientboundLoginDisconnectPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>;
export interface ClientboundLoginDisconnectPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundLoginDisconnectPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundLoginDisconnectPacket]>;
}

/** JVM record net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket. */
export interface ClientboundLoginFinishedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>];
  equals(arg0: object): boolean;
  gameProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">): void;
  hashCode(): number;
  isTerminal(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLoginFinishedPacket]>;
}
export type ClientboundLoginFinishedPacket = ClientboundLoginFinishedPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ClientLoginPacketListener">]>;
export interface ClientboundLoginFinishedPacketStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): ClientboundLoginFinishedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundLoginFinishedPacket]>;
}

/** JVM record net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket. */
export interface ServerboundCustomQueryAnswerPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">): void;
  hashCode(): number;
  payload(): JavaOpaque<"net.minecraft.network.protocol.login.custom.CustomQueryAnswerPayload"> | null;
  toString(): string;
  transactionId(): number;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundCustomQueryAnswerPacket]>;
}
export type ServerboundCustomQueryAnswerPacket = ServerboundCustomQueryAnswerPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>;
export interface ServerboundCustomQueryAnswerPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.network.protocol.login.custom.CustomQueryAnswerPayload"> | null): ServerboundCustomQueryAnswerPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundCustomQueryAnswerPacket]>;
}

/** JVM record net.minecraft.network.protocol.login.ServerboundHelloPacket. */
export interface ServerboundHelloPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">): void;
  hashCode(): number;
  name(): string;
  profileId(): JavaOpaque<"java.util.UUID">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundHelloPacket]>;
}
export type ServerboundHelloPacket = ServerboundHelloPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>;
export interface ServerboundHelloPacketStatics {
  new(arg0: string, arg1: JavaOpaque<"java.util.UUID">): ServerboundHelloPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundHelloPacket]>;
}

/** JVM class net.minecraft.network.protocol.login.ServerboundKeyPacket. */
export interface ServerboundKeyPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>];
  /** @throws net.minecraft.util.CryptException */
  getSecretKey(arg0: JavaOpaque<"java.security.PrivateKey">): JavaOpaque<"javax.crypto.SecretKey">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">): void;
  isChallengeValid(arg0: Array<number>, arg1: JavaOpaque<"java.security.PrivateKey">): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundKeyPacket]>;
}
export type ServerboundKeyPacket = ServerboundKeyPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>;
export interface ServerboundKeyPacketStatics {
  /** @throws net.minecraft.util.CryptException */
  new(arg0: JavaOpaque<"javax.crypto.SecretKey">, arg1: JavaOpaque<"java.security.PublicKey">, arg2: Array<number>): ServerboundKeyPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundKeyPacket]>;
}

/** JVM class net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket. */
export interface ServerboundLoginAcknowledgedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">): void;
  isTerminal(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundLoginAcknowledgedPacket]>;
}
export type ServerboundLoginAcknowledgedPacket = ServerboundLoginAcknowledgedPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.login.ServerLoginPacketListener">]>;
export interface ServerboundLoginAcknowledgedPacketStatics {
  readonly INSTANCE: ServerboundLoginAcknowledgedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundLoginAcknowledgedPacket]>;
}
