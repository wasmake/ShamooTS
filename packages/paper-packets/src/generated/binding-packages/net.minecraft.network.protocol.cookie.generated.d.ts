// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket. */
export interface ClientboundCookieRequestPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.cookie.ClientCookiePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.PacketListener">): void;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.cookie.ClientCookiePacketListener">): void;
  hashCode(): number;
  key(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCookieRequestPacket]>;
}
export type ClientboundCookieRequestPacket = ClientboundCookieRequestPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.cookie.ClientCookiePacketListener">]>;
export interface ClientboundCookieRequestPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation">): ClientboundCookieRequestPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundCookieRequestPacket]>;
}

/** JVM record net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket. */
export interface ServerboundCookieResponsePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.cookie.ServerCookiePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.PacketListener">): void;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.cookie.ServerCookiePacketListener">): void;
  hashCode(): number;
  key(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  payload(): Array<number> | null;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundCookieResponsePacket]>;
}
export type ServerboundCookieResponsePacket = ServerboundCookieResponsePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.cookie.ServerCookiePacketListener">]>;
export interface ServerboundCookieResponsePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg1: Array<number> | null): ServerboundCookieResponsePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundCookieResponsePacket]>;
}
