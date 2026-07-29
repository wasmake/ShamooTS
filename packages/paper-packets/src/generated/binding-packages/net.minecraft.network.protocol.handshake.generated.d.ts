// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.network.protocol.handshake.ClientIntentionPacket. */
export interface ClientIntentionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.handshake.ServerHandshakePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.handshake.ServerHandshakePacketListener">): void;
  hashCode(): number;
  hostName(): string;
  intention(): JavaOpaque<"net.minecraft.network.protocol.handshake.ClientIntent">;
  isTerminal(): boolean;
  port(): number;
  protocolVersion(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientIntentionPacket]>;
}
export type ClientIntentionPacket = ClientIntentionPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.handshake.ServerHandshakePacketListener">]>;
export interface ClientIntentionPacketStatics {
  new(arg0: number, arg1: string, arg2: number, arg3: JavaOpaque<"net.minecraft.network.protocol.handshake.ClientIntent">): ClientIntentionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientIntentionPacket]>;
}
