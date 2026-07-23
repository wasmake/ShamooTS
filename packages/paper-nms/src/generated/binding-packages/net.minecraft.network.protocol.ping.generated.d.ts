// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';

/** JVM record net.minecraft.network.protocol.ping.ClientboundPongResponsePacket. */
export interface ClientboundPongResponsePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientPongPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientPongPacketListener): void;
  hashCode(): number;
  time(): bigint;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPongResponsePacket>;
}
export type ClientboundPongResponsePacket = ClientboundPongResponsePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientPongPacketListener>;
export interface ClientboundPongResponsePacketStatics {
  new(arg0: bigint): ClientboundPongResponsePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPongResponsePacket>;
}

/** JVM interface net.minecraft.network.protocol.ping.ClientPongPacketListener. */
export interface ClientPongPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.PacketListener];
  handlePongResponse(arg0: ClientboundPongResponsePacket): void;
}
export type ClientPongPacketListener = ClientPongPacketListenerMembers & j_net_minecraft_network.PacketListener;
export interface ClientPongPacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.ping.PingPacketTypes. */
export interface PingPacketTypesMembers {
}
export type PingPacketTypes = PingPacketTypesMembers;
export interface PingPacketTypesStatics {
  new(): PingPacketTypes;
  readonly CLIENTBOUND_PONG_RESPONSE: j_net_minecraft_network_protocol.PacketType<ClientboundPongResponsePacket>;
  readonly SERVERBOUND_PING_REQUEST: j_net_minecraft_network_protocol.PacketType<ServerboundPingRequestPacket>;
}

/** JVM class net.minecraft.network.protocol.ping.ServerboundPingRequestPacket. */
export interface ServerboundPingRequestPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerPingPacketListener>];
  getTime(): bigint;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerPingPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPingRequestPacket>;
}
export type ServerboundPingRequestPacket = ServerboundPingRequestPacketMembers & j_net_minecraft_network_protocol.Packet<ServerPingPacketListener>;
export interface ServerboundPingRequestPacketStatics {
  new(arg0: bigint): ServerboundPingRequestPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPingRequestPacket>;
}

/** JVM interface net.minecraft.network.protocol.ping.ServerPingPacketListener. */
export interface ServerPingPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.PacketListener];
  handlePingRequest(arg0: ServerboundPingRequestPacket): void;
}
export type ServerPingPacketListener = ServerPingPacketListenerMembers & j_net_minecraft_network.PacketListener;
export interface ServerPingPacketListenerStatics {
}
