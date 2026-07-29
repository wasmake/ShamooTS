// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.network.protocol.ping.ClientboundPongResponsePacket. */
export interface ClientboundPongResponsePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.ping.ClientPongPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.ping.ClientPongPacketListener">): void;
  hashCode(): number;
  time(): bigint;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPongResponsePacket]>;
}
export type ClientboundPongResponsePacket = ClientboundPongResponsePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.ping.ClientPongPacketListener">]>;
export interface ClientboundPongResponsePacketStatics {
  new(arg0: bigint): ClientboundPongResponsePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPongResponsePacket]>;
}

/** JVM class net.minecraft.network.protocol.ping.ServerboundPingRequestPacket. */
export interface ServerboundPingRequestPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.ping.ServerPingPacketListener">]>];
  getTime(): bigint;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.ping.ServerPingPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPingRequestPacket]>;
}
export type ServerboundPingRequestPacket = ServerboundPingRequestPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.ping.ServerPingPacketListener">]>;
export interface ServerboundPingRequestPacketStatics {
  new(arg0: bigint): ServerboundPingRequestPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPingRequestPacket]>;
}
