// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_protocol_ping from './net.minecraft.network.protocol.ping.generated.js';

/** JVM record net.minecraft.network.protocol.status.ClientboundStatusResponsePacket. */
export interface ClientboundStatusResponsePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientStatusPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientStatusPacketListener): void;
  hashCode(): number;
  status(): ServerStatus;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundStatusResponsePacket>;
}
export type ClientboundStatusResponsePacket = ClientboundStatusResponsePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientStatusPacketListener>;
export interface ClientboundStatusResponsePacketStatics {
  new(arg0: ServerStatus): ClientboundStatusResponsePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundStatusResponsePacket>;
}

/** JVM interface net.minecraft.network.protocol.status.ClientStatusPacketListener. */
export interface ClientStatusPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.ClientboundPacketListener, j_net_minecraft_network_protocol_ping.ClientPongPacketListener];
  handleStatusResponse(arg0: ClientboundStatusResponsePacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ClientStatusPacketListener = ClientStatusPacketListenerMembers & j_net_minecraft_network.ClientboundPacketListener & j_net_minecraft_network_protocol_ping.ClientPongPacketListener;
export interface ClientStatusPacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.status.ServerboundStatusRequestPacket. */
export interface ServerboundStatusRequestPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerStatusPacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerStatusPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundStatusRequestPacket>;
}
export type ServerboundStatusRequestPacket = ServerboundStatusRequestPacketMembers & j_net_minecraft_network_protocol.Packet<ServerStatusPacketListener>;
export interface ServerboundStatusRequestPacketStatics {
  readonly INSTANCE: ServerboundStatusRequestPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundStatusRequestPacket>;
}

/** JVM record net.minecraft.network.protocol.status.ServerStatus. */
export interface ServerStatusMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  description(): j_net_minecraft_network_chat.Component;
  enforcesSecureChat(): boolean;
  equals(arg0: object): boolean;
  favicon(): JavaOptional<ServerStatus_Favicon>;
  hashCode(): number;
  players(): JavaOptional<ServerStatus_Players>;
  toString(): string;
  version(): JavaOptional<ServerStatus_Version>;
}
export type ServerStatus = ServerStatusMembers & JavaOpaque<"java.lang.Record">;
export interface ServerStatusStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<ServerStatus_Players>, arg2: JavaOptional<ServerStatus_Version>, arg3: JavaOptional<ServerStatus_Favicon>, arg4: boolean): ServerStatus;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ServerStatus]>;
}

/** JVM record net.minecraft.network.protocol.status.ServerStatus$Favicon. */
export interface ServerStatus_FaviconMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  iconBytes(): Array<number>;
  toString(): string;
}
export type ServerStatus_Favicon = ServerStatus_FaviconMembers & JavaOpaque<"java.lang.Record">;
export interface ServerStatus_FaviconStatics {
  new(arg0: Array<number>): ServerStatus_Favicon;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ServerStatus_Favicon]>;
}

/** JVM record net.minecraft.network.protocol.status.ServerStatus$Players. */
export interface ServerStatus_PlayersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  max(): number;
  online(): number;
  sample(): JavaList<JavaOpaque<"com.mojang.authlib.GameProfile">>;
  toString(): string;
}
export type ServerStatus_Players = ServerStatus_PlayersMembers & JavaOpaque<"java.lang.Record">;
export interface ServerStatus_PlayersStatics {
  new(arg0: number, arg1: number, arg2: JavaList<JavaOpaque<"com.mojang.authlib.GameProfile">>): ServerStatus_Players;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ServerStatus_Players]>;
}

/** JVM record net.minecraft.network.protocol.status.ServerStatus$Version. */
export interface ServerStatus_VersionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  protocol(): number;
  toString(): string;
}
export type ServerStatus_Version = ServerStatus_VersionMembers & JavaOpaque<"java.lang.Record">;
export interface ServerStatus_VersionStatics {
  new(arg0: string, arg1: number): ServerStatus_Version;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ServerStatus_Version]>;
  current(): ServerStatus_Version;
}

/** JVM interface net.minecraft.network.protocol.status.ServerStatusPacketListener. */
export interface ServerStatusPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_game.ServerPacketListener, j_net_minecraft_network_protocol_ping.ServerPingPacketListener];
  handleStatusRequest(arg0: ServerboundStatusRequestPacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ServerStatusPacketListener = ServerStatusPacketListenerMembers & j_net_minecraft_network_protocol_game.ServerPacketListener & j_net_minecraft_network_protocol_ping.ServerPingPacketListener;
export interface ServerStatusPacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.status.StatusPacketTypes. */
export interface StatusPacketTypesMembers {
}
export type StatusPacketTypes = StatusPacketTypesMembers;
export interface StatusPacketTypesStatics {
  new(): StatusPacketTypes;
  readonly CLIENTBOUND_STATUS_RESPONSE: j_net_minecraft_network_protocol.PacketType<ClientboundStatusResponsePacket>;
  readonly SERVERBOUND_STATUS_REQUEST: j_net_minecraft_network_protocol.PacketType<ServerboundStatusRequestPacket>;
}

/** JVM class net.minecraft.network.protocol.status.StatusProtocols. */
export interface StatusProtocolsMembers {
}
export type StatusProtocols = StatusProtocolsMembers;
export interface StatusProtocolsStatics {
  new(): StatusProtocols;
  readonly CLIENTBOUND: j_net_minecraft_network.ProtocolInfo<ClientStatusPacketListener>;
  readonly CLIENTBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ClientStatusPacketListener, j_net_minecraft_network.FriendlyByteBuf>;
  readonly SERVERBOUND: j_net_minecraft_network.ProtocolInfo<ServerStatusPacketListener>;
  readonly SERVERBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ServerStatusPacketListener, JavaOpaque<"io.netty.buffer.ByteBuf">>;
}
