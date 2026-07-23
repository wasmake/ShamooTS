// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_network from './com.velocitypowered.api.network.generated.js';
import type * as j_com_velocitypowered_api_proxy from './com.velocitypowered.api.proxy.generated.js';
import type * as j_com_velocitypowered_api_proxy_messages from './com.velocitypowered.api.proxy.messages.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class com.velocitypowered.api.proxy.server.PingOptions. */
export interface PingOptionsMembers {
  equals(arg0: object): boolean;
  getProtocolVersion(): j_com_velocitypowered_api_network.ProtocolVersion;
  getTimeout(): bigint;
  getVirtualHost(): string | null;
  hashCode(): number;
  toString(): string;
}
export type PingOptions = PingOptionsMembers;
export interface PingOptionsStatics {
  readonly DEFAULT: PingOptions;
  builder(): PingOptions_Builder;
}

/** JVM class com.velocitypowered.api.proxy.server.PingOptions$Builder. */
export interface PingOptions_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<PingOptions>];
  build(): PingOptions;
  build(): object;
  timeout(arg0: bigint, arg1: JavaOpaque<"java.util.concurrent.TimeUnit">): PingOptions_Builder;
  timeout(arg0: JavaOpaque<"java.time.Duration">): PingOptions_Builder;
  version(arg0: j_com_velocitypowered_api_network.ProtocolVersion): PingOptions_Builder;
  virtualHost(arg0: string | null): PingOptions_Builder | null;
}
export type PingOptions_Builder = PingOptions_BuilderMembers & j_net_kyori_adventure_builder.AbstractBuilder<PingOptions>;
export interface PingOptions_BuilderStatics {
}

/** JVM class com.velocitypowered.api.proxy.server.QueryResponse. */
export interface QueryResponseMembers {
  equals(arg0: object): boolean;
  getCurrentPlayers(): number;
  getGameVersion(): string;
  getHostname(): string;
  getMap(): string;
  getMaxPlayers(): number;
  getPlayers(): JavaCollection<string>;
  getPlugins(): JavaCollection<QueryResponse_PluginInformation>;
  getProxyHost(): string;
  getProxyPort(): number;
  getProxyVersion(): string;
  hashCode(): number;
  toBuilder(): QueryResponse_Builder;
  toString(): string;
}
export type QueryResponse = QueryResponseMembers;
export interface QueryResponseStatics {
  builder(): QueryResponse_Builder;
}

/** JVM class com.velocitypowered.api.proxy.server.QueryResponse$Builder. */
export interface QueryResponse_BuilderMembers {
  build(): QueryResponse;
  clearPlayers(): QueryResponse_Builder;
  clearPlugins(): QueryResponse_Builder;
  currentPlayers(arg0: number): QueryResponse_Builder;
  gameVersion(arg0: string): QueryResponse_Builder;
  hostname(arg0: string): QueryResponse_Builder;
  map(arg0: string): QueryResponse_Builder;
  maxPlayers(arg0: number): QueryResponse_Builder;
  players(arg0: JavaCollection<string>): QueryResponse_Builder;
  players(...arg0: Array<string>): QueryResponse_Builder;
  plugins(arg0: JavaCollection<QueryResponse_PluginInformation>): QueryResponse_Builder;
  plugins(...arg0: Array<QueryResponse_PluginInformation>): QueryResponse_Builder;
  proxyHost(arg0: string): QueryResponse_Builder;
  proxyPort(arg0: number): QueryResponse_Builder;
  proxyVersion(arg0: string): QueryResponse_Builder;
}
export type QueryResponse_Builder = QueryResponse_BuilderMembers;
export interface QueryResponse_BuilderStatics {
}

/** JVM class com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation. */
export interface QueryResponse_PluginInformationMembers {
  equals(arg0: object): boolean;
  getName(): string;
  getVersion(): JavaOptional<string>;
  hashCode(): number;
  toString(): string;
}
export type QueryResponse_PluginInformation = QueryResponse_PluginInformationMembers;
export interface QueryResponse_PluginInformationStatics {
  of(arg0: string, arg1: string): QueryResponse_PluginInformation | null;
}

/** JVM interface com.velocitypowered.api.proxy.server.RegisteredServer. */
export interface RegisteredServerMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_proxy_messages.ChannelMessageSink, j_net_kyori_adventure_audience.Audience];
  getPlayersConnected(): JavaCollection<j_com_velocitypowered_api_proxy.Player>;
  getServerInfo(): ServerInfo;
  ping(): PromiseLike<ServerPing>;
  ping(arg0: PingOptions): PromiseLike<ServerPing>;
}
export type RegisteredServer = RegisteredServerMembers & j_com_velocitypowered_api_proxy_messages.ChannelMessageSink & j_net_kyori_adventure_audience.Audience;
export interface RegisteredServerStatics {
}

/** JVM class com.velocitypowered.api.proxy.server.ServerInfo. */
export interface ServerInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [ServerInfo]>];
  compareTo(arg0: ServerInfo): number;
  compareTo(arg0: object): number;
  equals(arg0: object): boolean | null;
  getAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getName(): string;
  hashCode(): number;
  toString(): string;
}
export type ServerInfo = ServerInfoMembers;
export interface ServerInfoStatics {
  new(arg0: string, arg1: JavaOpaque<"java.net.InetSocketAddress">): ServerInfo;
}

/** JVM class com.velocitypowered.api.proxy.server.ServerPing. */
export interface ServerPingMembers {
  asBuilder(): ServerPing_Builder;
  equals(arg0: object): boolean;
  getDescriptionComponent(): j_net_kyori_adventure_text.Component | null;
  getFavicon(): JavaOptional<j_com_velocitypowered_api_util.Favicon>;
  getModinfo(): JavaOptional<j_com_velocitypowered_api_util.ModInfo>;
  getPlayers(): JavaOptional<ServerPing_Players>;
  getVersion(): ServerPing_Version;
  hashCode(): number;
  toString(): string;
}
export type ServerPing = ServerPingMembers;
export interface ServerPingStatics {
  new(arg0: ServerPing_Version, arg1: ServerPing_Players, arg2: j_net_kyori_adventure_text.Component, arg3: j_com_velocitypowered_api_util.Favicon): ServerPing;
  new(arg0: ServerPing_Version, arg1: ServerPing_Players, arg2: j_net_kyori_adventure_text.Component, arg3: j_com_velocitypowered_api_util.Favicon, arg4: j_com_velocitypowered_api_util.ModInfo): ServerPing;
  builder(): ServerPing_Builder;
}

/** JVM class com.velocitypowered.api.proxy.server.ServerPing$Builder. */
export interface ServerPing_BuilderMembers {
  build(): ServerPing;
  clearFavicon(): ServerPing_Builder;
  clearMods(): ServerPing_Builder;
  clearSamplePlayers(): ServerPing_Builder;
  description(arg0: j_net_kyori_adventure_text.Component): ServerPing_Builder;
  favicon(arg0: j_com_velocitypowered_api_util.Favicon): ServerPing_Builder;
  getDescriptionComponent(): JavaOptional<j_net_kyori_adventure_text.Component>;
  getFavicon(): JavaOptional<j_com_velocitypowered_api_util.Favicon>;
  getMaximumPlayers(): number;
  getModType(): string;
  getMods(): JavaList<j_com_velocitypowered_api_util.ModInfo_Mod>;
  getOnlinePlayers(): number;
  getSamplePlayers(): JavaList<ServerPing_SamplePlayer>;
  getVersion(): ServerPing_Version;
  maximumPlayers(arg0: number): ServerPing_Builder;
  modType(arg0: string): ServerPing_Builder;
  mods(arg0: j_com_velocitypowered_api_util.ModInfo): ServerPing_Builder;
  mods(...arg0: Array<j_com_velocitypowered_api_util.ModInfo_Mod>): ServerPing_Builder;
  notModCompatible(): ServerPing_Builder;
  nullPlayers(): ServerPing_Builder;
  onlinePlayers(arg0: number): ServerPing_Builder;
  samplePlayers(arg0: JavaCollection<ServerPing_SamplePlayer>): ServerPing_Builder;
  samplePlayers(...arg0: Array<ServerPing_SamplePlayer>): ServerPing_Builder;
  toString(): string;
  version(arg0: ServerPing_Version): ServerPing_Builder;
}
export type ServerPing_Builder = ServerPing_BuilderMembers;
export interface ServerPing_BuilderStatics {
}

/** JVM class com.velocitypowered.api.proxy.server.ServerPing$Players. */
export interface ServerPing_PlayersMembers {
  equals(arg0: object): boolean;
  getMax(): number;
  getOnline(): number;
  getSample(): JavaList<ServerPing_SamplePlayer>;
  hashCode(): number;
  toString(): string;
}
export type ServerPing_Players = ServerPing_PlayersMembers;
export interface ServerPing_PlayersStatics {
  new(arg0: number, arg1: number, arg2: JavaList<ServerPing_SamplePlayer>): ServerPing_Players;
}

/** JVM class com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer. */
export interface ServerPing_SamplePlayerMembers {
  equals(arg0: object): boolean;
  getId(): JavaOpaque<"java.util.UUID">;
  getName(): string;
  hashCode(): number;
  toString(): string;
}
export type ServerPing_SamplePlayer = ServerPing_SamplePlayerMembers;
export interface ServerPing_SamplePlayerStatics {
  new(arg0: string, arg1: JavaOpaque<"java.util.UUID">): ServerPing_SamplePlayer;
  readonly ANONYMOUS: ServerPing_SamplePlayer;
}

/** JVM class com.velocitypowered.api.proxy.server.ServerPing$Version. */
export interface ServerPing_VersionMembers {
  equals(arg0: object): boolean;
  getName(): string;
  getProtocol(): number;
  hashCode(): number;
  toString(): string;
}
export type ServerPing_Version = ServerPing_VersionMembers;
export interface ServerPing_VersionStatics {
  new(arg0: number, arg1: string): ServerPing_Version;
}
