// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';

/** Live JVM enum net.minecraft.network.protocol.handshake.ClientIntent; constants are host handles, not strings. */
export type ClientIntent = JavaEnum<"net.minecraft.network.protocol.handshake.ClientIntent", "LOGIN" | "STATUS" | "TRANSFER"> & ClientIntentMembers;
export interface ClientIntentMembers {
  id(): number;
}
export interface ClientIntentStatics {
  readonly LOGIN: ClientIntent;
  readonly STATUS: ClientIntent;
  readonly TRANSFER: ClientIntent;
  byId(arg0: number): ClientIntent;
  valueOf(arg0: string): ClientIntent;
  values(): Array<ClientIntent>;
}

/** JVM record net.minecraft.network.protocol.handshake.ClientIntentionPacket. */
export interface ClientIntentionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerHandshakePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: ServerHandshakePacketListener): void;
  hashCode(): number;
  hostName(): string;
  intention(): ClientIntent;
  isTerminal(): boolean;
  port(): number;
  protocolVersion(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientIntentionPacket>;
}
export type ClientIntentionPacket = ClientIntentionPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerHandshakePacketListener>;
export interface ClientIntentionPacketStatics {
  new(arg0: number, arg1: string, arg2: number, arg3: ClientIntent): ClientIntentionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientIntentionPacket>;
}

/** JVM class net.minecraft.network.protocol.handshake.HandshakePacketTypes. */
export interface HandshakePacketTypesMembers {
}
export type HandshakePacketTypes = HandshakePacketTypesMembers;
export interface HandshakePacketTypesStatics {
  new(): HandshakePacketTypes;
  readonly CLIENT_INTENTION: j_net_minecraft_network_protocol.PacketType<ClientIntentionPacket>;
}

/** JVM class net.minecraft.network.protocol.handshake.HandshakeProtocols. */
export interface HandshakeProtocolsMembers {
}
export type HandshakeProtocols = HandshakeProtocolsMembers;
export interface HandshakeProtocolsStatics {
  new(): HandshakeProtocols;
  readonly SERVERBOUND: j_net_minecraft_network.ProtocolInfo<ServerHandshakePacketListener>;
  readonly SERVERBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ServerHandshakePacketListener, j_net_minecraft_network.FriendlyByteBuf>;
}

/** JVM interface net.minecraft.network.protocol.handshake.ServerHandshakePacketListener. */
export interface ServerHandshakePacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_game.ServerPacketListener];
  handleIntention(arg0: ClientIntentionPacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ServerHandshakePacketListener = ServerHandshakePacketListenerMembers & j_net_minecraft_network_protocol_game.ServerPacketListener;
export interface ServerHandshakePacketListenerStatics {
}
