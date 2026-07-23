// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_common from './net.minecraft.network.protocol.common.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';

/** JVM class net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket. */
export interface ClientboundFinishConfigurationPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientConfigurationPacketListener): void;
  isTerminal(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundFinishConfigurationPacket>;
}
export type ClientboundFinishConfigurationPacket = ClientboundFinishConfigurationPacketMembers & j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>;
export interface ClientboundFinishConfigurationPacketStatics {
  readonly INSTANCE: ClientboundFinishConfigurationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundFinishConfigurationPacket>;
}

/** JVM record net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket. */
export interface ClientboundRegistryDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>];
  entries(): JavaList<j_net_minecraft_core.RegistrySynchronization_PackedRegistryEntry>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientConfigurationPacketListener): void;
  hashCode(): number;
  registry(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRegistryDataPacket>;
}
export type ClientboundRegistryDataPacket = ClientboundRegistryDataPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>;
export interface ClientboundRegistryDataPacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, arg1: JavaList<j_net_minecraft_core.RegistrySynchronization_PackedRegistryEntry>): ClientboundRegistryDataPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundRegistryDataPacket>;
}

/** JVM class net.minecraft.network.protocol.configuration.ClientboundResetChatPacket. */
export interface ClientboundResetChatPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientConfigurationPacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundResetChatPacket>;
}
export type ClientboundResetChatPacket = ClientboundResetChatPacketMembers & j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>;
export interface ClientboundResetChatPacketStatics {
  readonly INSTANCE: ClientboundResetChatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundResetChatPacket>;
}

/** JVM record net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks. */
export interface ClientboundSelectKnownPacksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientConfigurationPacketListener): void;
  hashCode(): number;
  knownPacks(): JavaList<j_net_minecraft_server_packs_repository.KnownPack>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSelectKnownPacks>;
}
export type ClientboundSelectKnownPacks = ClientboundSelectKnownPacksMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>;
export interface ClientboundSelectKnownPacksStatics {
  new(arg0: JavaList<j_net_minecraft_server_packs_repository.KnownPack>): ClientboundSelectKnownPacks;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundSelectKnownPacks>;
}

/** JVM record net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket. */
export interface ClientboundUpdateEnabledFeaturesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>];
  equals(arg0: object): boolean;
  features(): JavaSet<j_net_minecraft_resources.ResourceLocation>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientConfigurationPacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundUpdateEnabledFeaturesPacket>;
}
export type ClientboundUpdateEnabledFeaturesPacket = ClientboundUpdateEnabledFeaturesPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientConfigurationPacketListener>;
export interface ClientboundUpdateEnabledFeaturesPacketStatics {
  new(arg0: JavaSet<j_net_minecraft_resources.ResourceLocation>): ClientboundUpdateEnabledFeaturesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundUpdateEnabledFeaturesPacket>;
}

/** JVM interface net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener. */
export interface ClientConfigurationPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_common.ClientCommonPacketListener];
  handleConfigurationFinished(arg0: ClientboundFinishConfigurationPacket): void;
  handleEnabledFeatures(arg0: ClientboundUpdateEnabledFeaturesPacket): void;
  handleRegistryData(arg0: ClientboundRegistryDataPacket): void;
  handleResetChat(arg0: ClientboundResetChatPacket): void;
  handleSelectKnownPacks(arg0: ClientboundSelectKnownPacks): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ClientConfigurationPacketListener = ClientConfigurationPacketListenerMembers & j_net_minecraft_network_protocol_common.ClientCommonPacketListener;
export interface ClientConfigurationPacketListenerStatics {
}

/** JVM class net.minecraft.network.protocol.configuration.ConfigurationPacketTypes. */
export interface ConfigurationPacketTypesMembers {
}
export type ConfigurationPacketTypes = ConfigurationPacketTypesMembers;
export interface ConfigurationPacketTypesStatics {
  new(): ConfigurationPacketTypes;
  readonly CLIENTBOUND_FINISH_CONFIGURATION: j_net_minecraft_network_protocol.PacketType<ClientboundFinishConfigurationPacket>;
  readonly CLIENTBOUND_REGISTRY_DATA: j_net_minecraft_network_protocol.PacketType<ClientboundRegistryDataPacket>;
  readonly CLIENTBOUND_RESET_CHAT: j_net_minecraft_network_protocol.PacketType<ClientboundResetChatPacket>;
  readonly CLIENTBOUND_SELECT_KNOWN_PACKS: j_net_minecraft_network_protocol.PacketType<ClientboundSelectKnownPacks>;
  readonly CLIENTBOUND_UPDATE_ENABLED_FEATURES: j_net_minecraft_network_protocol.PacketType<ClientboundUpdateEnabledFeaturesPacket>;
  readonly SERVERBOUND_FINISH_CONFIGURATION: j_net_minecraft_network_protocol.PacketType<ServerboundFinishConfigurationPacket>;
  readonly SERVERBOUND_SELECT_KNOWN_PACKS: j_net_minecraft_network_protocol.PacketType<ServerboundSelectKnownPacks>;
}

/** JVM class net.minecraft.network.protocol.configuration.ConfigurationProtocols. */
export interface ConfigurationProtocolsMembers {
}
export type ConfigurationProtocols = ConfigurationProtocolsMembers;
export interface ConfigurationProtocolsStatics {
  new(): ConfigurationProtocols;
  readonly CLIENTBOUND: j_net_minecraft_network.ProtocolInfo<ClientConfigurationPacketListener>;
  readonly CLIENTBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ClientConfigurationPacketListener, j_net_minecraft_network.FriendlyByteBuf>;
  readonly SERVERBOUND: j_net_minecraft_network.ProtocolInfo<ServerConfigurationPacketListener>;
  readonly SERVERBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ServerConfigurationPacketListener, j_net_minecraft_network.FriendlyByteBuf>;
}

/** JVM class net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket. */
export interface ServerboundFinishConfigurationPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerConfigurationPacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerConfigurationPacketListener): void;
  isTerminal(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundFinishConfigurationPacket>;
}
export type ServerboundFinishConfigurationPacket = ServerboundFinishConfigurationPacketMembers & j_net_minecraft_network_protocol.Packet<ServerConfigurationPacketListener>;
export interface ServerboundFinishConfigurationPacketStatics {
  readonly INSTANCE: ServerboundFinishConfigurationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundFinishConfigurationPacket>;
}

/** JVM record net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks. */
export interface ServerboundSelectKnownPacksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerConfigurationPacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerConfigurationPacketListener): void;
  hashCode(): number;
  knownPacks(): JavaList<j_net_minecraft_server_packs_repository.KnownPack>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSelectKnownPacks>;
}
export type ServerboundSelectKnownPacks = ServerboundSelectKnownPacksMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerConfigurationPacketListener>;
export interface ServerboundSelectKnownPacksStatics {
  new(arg0: JavaList<j_net_minecraft_server_packs_repository.KnownPack>): ServerboundSelectKnownPacks;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundSelectKnownPacks>;
}

/** JVM interface net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener. */
export interface ServerConfigurationPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_common.ServerCommonPacketListener];
  handleConfigurationFinished(arg0: ServerboundFinishConfigurationPacket): void;
  handleSelectKnownPacks(arg0: ServerboundSelectKnownPacks): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ServerConfigurationPacketListener = ServerConfigurationPacketListenerMembers & j_net_minecraft_network_protocol_common.ServerCommonPacketListener;
export interface ServerConfigurationPacketListenerStatics {
}
