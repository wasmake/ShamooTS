// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.network.protocol.status.ClientboundStatusResponsePacket. */
export interface ClientboundStatusResponsePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.status.ClientStatusPacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.PacketListener">): void;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.status.ClientStatusPacketListener">): void;
  hashCode(): number;
  status(): JavaOpaque<"net.minecraft.network.protocol.status.ServerStatus">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundStatusResponsePacket]>;
}
export type ClientboundStatusResponsePacket = ClientboundStatusResponsePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.status.ClientStatusPacketListener">]>;
export interface ClientboundStatusResponsePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.status.ServerStatus">): ClientboundStatusResponsePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundStatusResponsePacket]>;
}

/** JVM class net.minecraft.network.protocol.status.ServerboundStatusRequestPacket. */
export interface ServerboundStatusRequestPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.status.ServerStatusPacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.PacketListener">): void;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.status.ServerStatusPacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundStatusRequestPacket]>;
}
export type ServerboundStatusRequestPacket = ServerboundStatusRequestPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.status.ServerStatusPacketListener">]>;
export interface ServerboundStatusRequestPacketStatics {
  readonly INSTANCE: ServerboundStatusRequestPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundStatusRequestPacket]>;
}
