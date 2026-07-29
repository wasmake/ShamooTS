// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_command from './com.velocitypowered.api.command.generated.js';
import type * as j_com_velocitypowered_api_event from './com.velocitypowered.api.event.generated.js';
import type * as j_com_velocitypowered_api_network from './com.velocitypowered.api.network.generated.js';
import type * as j_com_velocitypowered_api_plugin from './com.velocitypowered.api.plugin.generated.js';
import type * as j_com_velocitypowered_api_proxy_config from './com.velocitypowered.api.proxy.config.generated.js';
import type * as j_com_velocitypowered_api_proxy_crypto from './com.velocitypowered.api.proxy.crypto.generated.js';
import type * as j_com_velocitypowered_api_proxy_messages from './com.velocitypowered.api.proxy.messages.generated.js';
import type * as j_com_velocitypowered_api_proxy_player from './com.velocitypowered.api.proxy.player.generated.js';
import type * as j_com_velocitypowered_api_proxy_server from './com.velocitypowered.api.proxy.server.generated.js';
import type * as j_com_velocitypowered_api_scheduler from './com.velocitypowered.api.scheduler.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_dialog from './net.kyori.adventure.dialog.generated.js';
import type * as j_net_kyori_adventure_identity from './net.kyori.adventure.identity.generated.js';
import type * as j_net_kyori_adventure_inventory from './net.kyori.adventure.inventory.generated.js';
import type * as j_net_kyori_adventure_sound from './net.kyori.adventure.sound.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';

/** JVM interface com.velocitypowered.api.proxy.ConnectionRequestBuilder. */
export interface ConnectionRequestBuilderMembers {
  connect(): PromiseLike<ConnectionRequestBuilder_Result>;
  connectWithIndication(): PromiseLike<boolean>;
  fireAndForget(): void;
  getServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
}
export type ConnectionRequestBuilder = ConnectionRequestBuilderMembers;
export interface ConnectionRequestBuilderStatics {
}

/** JVM interface com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result. */
export interface ConnectionRequestBuilder_ResultMembers {
  getAttemptedConnection(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  getReasonComponent(): JavaOptional<j_net_kyori_adventure_text.Component>;
  getStatus(): ConnectionRequestBuilder_Status;
  isSuccessful(): boolean;
}
export type ConnectionRequestBuilder_Result = ConnectionRequestBuilder_ResultMembers;
export interface ConnectionRequestBuilder_ResultStatics {
}

/** Live JVM enum com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status; constants are host handles, not strings. */
export type ConnectionRequestBuilder_Status = JavaEnum<"com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status", "ALREADY_CONNECTED" | "CONNECTION_CANCELLED" | "CONNECTION_IN_PROGRESS" | "SERVER_DISCONNECTED" | "SUCCESS"> & ConnectionRequestBuilder_StatusMembers;
export interface ConnectionRequestBuilder_StatusMembers {
}
export interface ConnectionRequestBuilder_StatusStatics {
  readonly ALREADY_CONNECTED: ConnectionRequestBuilder_Status;
  readonly CONNECTION_CANCELLED: ConnectionRequestBuilder_Status;
  readonly CONNECTION_IN_PROGRESS: ConnectionRequestBuilder_Status;
  readonly SERVER_DISCONNECTED: ConnectionRequestBuilder_Status;
  readonly SUCCESS: ConnectionRequestBuilder_Status;
  valueOf(arg0: string): ConnectionRequestBuilder_Status;
  values(): Array<ConnectionRequestBuilder_Status>;
}

/** JVM interface com.velocitypowered.api.proxy.ConsoleCommandSource. */
export interface ConsoleCommandSourceMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_command.CommandSource];
}
export type ConsoleCommandSource = ConsoleCommandSourceMembers & j_com_velocitypowered_api_command.CommandSource;
export interface ConsoleCommandSourceStatics {
}

/** JVM interface com.velocitypowered.api.proxy.InboundConnection. */
export interface InboundConnectionMembers {
  getHandshakeIntent(): j_com_velocitypowered_api_network.HandshakeIntent;
  getProtocolState(): j_com_velocitypowered_api_network.ProtocolState;
  getProtocolVersion(): j_com_velocitypowered_api_network.ProtocolVersion;
  getRawVirtualHost(): JavaOptional<string>;
  getRemoteAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getVirtualHost(): JavaOptional<JavaOpaque<"java.net.InetSocketAddress">>;
  isActive(): boolean;
}
export type InboundConnection = InboundConnectionMembers;
export interface InboundConnectionStatics {
}

/** JVM interface com.velocitypowered.api.proxy.LoginPhaseConnection. */
export interface LoginPhaseConnectionMembers {
  readonly __javaSupertypes?: readonly [InboundConnection, j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable];
  sendLoginPluginMessage(arg0: j_com_velocitypowered_api_proxy_messages.ChannelIdentifier, arg1: Array<number>, arg2: LoginPhaseConnection_MessageConsumer): void;
}
export type LoginPhaseConnection = LoginPhaseConnectionMembers & InboundConnection & j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable;
export interface LoginPhaseConnectionStatics {
}

/** JVM interface com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer. */
export interface LoginPhaseConnection_MessageConsumerMembers {
  onMessageResponse(arg0: Array<number> | null): void;
}
export type LoginPhaseConnection_MessageConsumer = LoginPhaseConnection_MessageConsumerMembers;
export interface LoginPhaseConnection_MessageConsumerStatics {
}

/** JVM interface com.velocitypowered.api.proxy.Player. */
export interface PlayerMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_command.CommandSource, InboundConnection, j_com_velocitypowered_api_proxy_messages.ChannelMessageSource, j_com_velocitypowered_api_proxy_messages.ChannelMessageSink, j_net_kyori_adventure_identity.Identified, j_net_kyori_adventure_text_event.HoverEventSource<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity>, JavaOpaque<"net.kyori.adventure.key.Keyed">, j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable, j_net_kyori_adventure_sound.Sound_Emitter];
  addCustomChatCompletions(arg0: JavaCollection<string>): void;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_kyori_adventure_text_event.HoverEvent_ShowEntity]>): j_net_kyori_adventure_text_event.HoverEvent<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity>;
  clearHeaderAndFooter(): void;
  clearPlayerListHeaderAndFooter(): void;
  closeDialog(): void;
  createConnectionRequest(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer): ConnectionRequestBuilder;
  disconnect(arg0: j_net_kyori_adventure_text.Component): void;
  getAppliedResourcePack(): j_com_velocitypowered_api_proxy_player.ResourcePackInfo | null;
  getAppliedResourcePacks(): JavaCollection<j_com_velocitypowered_api_proxy_player.ResourcePackInfo>;
  getClientBrand(): string | null;
  getCurrentServer(): JavaOptional<ServerConnection>;
  getEffectiveLocale(): JavaOpaque<"java.util.Locale"> | null;
  getGameProfile(): j_com_velocitypowered_api_util.GameProfile;
  getGameProfileProperties(): JavaList<j_com_velocitypowered_api_util.GameProfile_Property>;
  getModInfo(): JavaOptional<j_com_velocitypowered_api_util.ModInfo>;
  getPendingResourcePack(): j_com_velocitypowered_api_proxy_player.ResourcePackInfo | null;
  getPendingResourcePacks(): JavaCollection<j_com_velocitypowered_api_proxy_player.ResourcePackInfo>;
  getPing(): bigint;
  getPlayerListFooter(): j_net_kyori_adventure_text.Component;
  getPlayerListHeader(): j_net_kyori_adventure_text.Component;
  getPlayerSettings(): j_com_velocitypowered_api_proxy_player.PlayerSettings;
  getTabList(): j_com_velocitypowered_api_proxy_player.TabList;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  getUsername(): string;
  hasSentPlayerSettings(): boolean;
  isOnlineMode(): boolean;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  openBook(arg0: j_net_kyori_adventure_inventory.Book): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: j_net_kyori_adventure_sound.Sound_Emitter): void;
  removeCustomChatCompletions(arg0: JavaCollection<string>): void;
  requestCookie(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): void;
  sendPluginMessage(arg0: j_com_velocitypowered_api_proxy_messages.ChannelIdentifier, arg1: j_com_velocitypowered_api_proxy_messages.PluginMessageEncoder): boolean;
  sendPluginMessage(arg0: j_com_velocitypowered_api_proxy_messages.ChannelIdentifier, arg1: Array<number>): boolean;
  sendResourcePack(arg0: string): void;
  sendResourcePack(arg0: string, arg1: Array<number>): void;
  sendResourcePackOffer(arg0: j_com_velocitypowered_api_proxy_player.ResourcePackInfo): void;
  setCustomChatCompletions(arg0: JavaCollection<string>): void;
  setEffectiveLocale(arg0: JavaOpaque<"java.util.Locale">): void;
  setGameProfileProperties(arg0: JavaList<j_com_velocitypowered_api_util.GameProfile_Property>): void;
  setServerLinks(arg0: JavaList<j_com_velocitypowered_api_util.ServerLink>): void;
  showDialog(arg0: j_net_kyori_adventure_dialog.DialogLike): void;
  spoofChatInput(arg0: string): void;
  stopSound(arg0: j_net_kyori_adventure_sound.SoundStop): void;
  storeCookie(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: Array<number>): void;
  transferToHost(arg0: JavaOpaque<"java.net.InetSocketAddress">): void;
}
export type Player = PlayerMembers & j_com_velocitypowered_api_command.CommandSource & InboundConnection & j_com_velocitypowered_api_proxy_messages.ChannelMessageSource & j_com_velocitypowered_api_proxy_messages.ChannelMessageSink & j_net_kyori_adventure_identity.Identified & j_net_kyori_adventure_text_event.HoverEventSource<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity> & JavaOpaque<"net.kyori.adventure.key.Keyed"> & j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable & j_net_kyori_adventure_sound.Sound_Emitter;
export interface PlayerStatics {
}

/** JVM interface com.velocitypowered.api.proxy.ProxyServer. */
export interface ProxyServerMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_audience.Audience];
  closeListeners(): void;
  createRawRegisteredServer(arg0: j_com_velocitypowered_api_proxy_server.ServerInfo): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  createResourcePackBuilder(arg0: string): j_com_velocitypowered_api_proxy_player.ResourcePackInfo_Builder;
  getAllPlayers(): JavaCollection<Player>;
  getAllServers(): JavaCollection<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  getBoundAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getChannelRegistrar(): j_com_velocitypowered_api_proxy_messages.ChannelRegistrar;
  getCommandManager(): j_com_velocitypowered_api_command.CommandManager;
  getConfiguration(): j_com_velocitypowered_api_proxy_config.ProxyConfig;
  getConsoleCommandSource(): ConsoleCommandSource;
  getEventManager(): j_com_velocitypowered_api_event.EventManager;
  getPlayer(arg0: string): JavaOptional<Player>;
  getPlayer(arg0: JavaOpaque<"java.util.UUID">): JavaOptional<Player>;
  getPlayerCount(): number;
  getPluginManager(): j_com_velocitypowered_api_plugin.PluginManager;
  getScheduler(): j_com_velocitypowered_api_scheduler.Scheduler;
  getServer(arg0: string): JavaOptional<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  getVersion(): j_com_velocitypowered_api_util.ProxyVersion;
  isShuttingDown(): boolean;
  matchPlayer(arg0: string): JavaCollection<Player>;
  matchServer(arg0: string): JavaCollection<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  registerServer(arg0: j_com_velocitypowered_api_proxy_server.ServerInfo): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  shutdown(): void;
  shutdown(arg0: j_net_kyori_adventure_text.Component): void;
  unregisterServer(arg0: j_com_velocitypowered_api_proxy_server.ServerInfo): void;
}
export type ProxyServer = ProxyServerMembers & j_net_kyori_adventure_audience.Audience;
export interface ProxyServerStatics {
}

/** JVM interface com.velocitypowered.api.proxy.ServerConnection. */
export interface ServerConnectionMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_proxy_messages.ChannelMessageSink, j_com_velocitypowered_api_proxy_messages.ChannelMessageSource];
  getPlayer(): Player;
  getPreviousServer(): JavaOptional<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  getServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  getServerInfo(): j_com_velocitypowered_api_proxy_server.ServerInfo;
}
export type ServerConnection = ServerConnectionMembers & j_com_velocitypowered_api_proxy_messages.ChannelMessageSink & j_com_velocitypowered_api_proxy_messages.ChannelMessageSource;
export interface ServerConnectionStatics {
}
