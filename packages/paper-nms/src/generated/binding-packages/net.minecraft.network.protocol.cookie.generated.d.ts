// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM record net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket. */
export interface ClientboundCookieRequestPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientCookiePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientCookiePacketListener): void;
  hashCode(): number;
  key(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCookieRequestPacket>;
}
export type ClientboundCookieRequestPacket = ClientboundCookieRequestPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientCookiePacketListener>;
export interface ClientboundCookieRequestPacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): ClientboundCookieRequestPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundCookieRequestPacket>;
}

/** JVM interface net.minecraft.network.protocol.cookie.ClientCookiePacketListener. */
export interface ClientCookiePacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.ClientboundPacketListener];
  handleRequestCookie(arg0: ClientboundCookieRequestPacket): void;
}
export type ClientCookiePacketListener = ClientCookiePacketListenerMembers & j_net_minecraft_network.ClientboundPacketListener;
export interface ClientCookiePacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.cookie.CookiePacketTypes. */
export interface CookiePacketTypesMembers {
}
export type CookiePacketTypes = CookiePacketTypesMembers;
export interface CookiePacketTypesStatics {
  new(): CookiePacketTypes;
  readonly CLIENTBOUND_COOKIE_REQUEST: j_net_minecraft_network_protocol.PacketType<ClientboundCookieRequestPacket>;
  readonly SERVERBOUND_COOKIE_RESPONSE: j_net_minecraft_network_protocol.PacketType<ServerboundCookieResponsePacket>;
}

/** JVM record net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket. */
export interface ServerboundCookieResponsePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerCookiePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerCookiePacketListener): void;
  hashCode(): number;
  key(): j_net_minecraft_resources.ResourceLocation;
  payload(): Array<number> | null;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundCookieResponsePacket>;
}
export type ServerboundCookieResponsePacket = ServerboundCookieResponsePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerCookiePacketListener>;
export interface ServerboundCookieResponsePacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: Array<number> | null): ServerboundCookieResponsePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundCookieResponsePacket>;
}

/** JVM interface net.minecraft.network.protocol.cookie.ServerCookiePacketListener. */
export interface ServerCookiePacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_game.ServerPacketListener];
  handleCookieResponse(arg0: ServerboundCookieResponsePacket): void;
}
export type ServerCookiePacketListener = ServerCookiePacketListenerMembers & j_net_minecraft_network_protocol_game.ServerPacketListener;
export interface ServerCookiePacketListenerStatics {
}
