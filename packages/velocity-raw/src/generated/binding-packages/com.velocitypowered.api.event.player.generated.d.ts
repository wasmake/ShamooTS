// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_event from './com.velocitypowered.api.event.generated.js';
import type * as j_com_velocitypowered_api_proxy from './com.velocitypowered.api.proxy.generated.js';
import type * as j_com_velocitypowered_api_proxy_messages from './com.velocitypowered.api.proxy.messages.generated.js';
import type * as j_com_velocitypowered_api_proxy_player from './com.velocitypowered.api.proxy.player.generated.js';
import type * as j_com_velocitypowered_api_proxy_server from './com.velocitypowered.api.proxy.server.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class com.velocitypowered.api.event.player.CookieReceiveEvent. */
export interface CookieReceiveEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<CookieReceiveEvent_ForwardResult>];
  getOriginalData(): Array<number> | null;
  getOriginalKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): CookieReceiveEvent_ForwardResult;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: CookieReceiveEvent_ForwardResult): void;
  toString(): string;
}
export type CookieReceiveEvent = CookieReceiveEventMembers & j_com_velocitypowered_api_event.ResultedEvent<CookieReceiveEvent_ForwardResult>;
export interface CookieReceiveEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaOpaque<"net.kyori.adventure.key.Key">, arg2: Array<number>): CookieReceiveEvent;
}

/** JVM class com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult. */
export interface CookieReceiveEvent_ForwardResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getData(): Array<number>;
  getKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  isAllowed(): boolean;
  toString(): string;
}
export type CookieReceiveEvent_ForwardResult = CookieReceiveEvent_ForwardResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface CookieReceiveEvent_ForwardResultStatics {
  data(arg0: Array<number>): CookieReceiveEvent_ForwardResult;
  forward(): CookieReceiveEvent_ForwardResult;
  handled(): CookieReceiveEvent_ForwardResult;
  key(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): CookieReceiveEvent_ForwardResult;
}

/** JVM class com.velocitypowered.api.event.player.CookieRequestEvent. */
export interface CookieRequestEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<CookieRequestEvent_ForwardResult>];
  getOriginalKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): CookieRequestEvent_ForwardResult;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: CookieRequestEvent_ForwardResult): void;
  toString(): string;
}
export type CookieRequestEvent = CookieRequestEventMembers & j_com_velocitypowered_api_event.ResultedEvent<CookieRequestEvent_ForwardResult>;
export interface CookieRequestEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): CookieRequestEvent;
}

/** JVM class com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult. */
export interface CookieRequestEvent_ForwardResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  isAllowed(): boolean;
  toString(): string;
}
export type CookieRequestEvent_ForwardResult = CookieRequestEvent_ForwardResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface CookieRequestEvent_ForwardResultStatics {
  forward(): CookieRequestEvent_ForwardResult;
  handled(): CookieRequestEvent_ForwardResult;
  key(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): CookieRequestEvent_ForwardResult;
}

/** JVM class com.velocitypowered.api.event.player.CookieStoreEvent. */
export interface CookieStoreEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<CookieStoreEvent_ForwardResult>];
  getOriginalData(): Array<number>;
  getOriginalKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): CookieStoreEvent_ForwardResult;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: CookieStoreEvent_ForwardResult): void;
  toString(): string;
}
export type CookieStoreEvent = CookieStoreEventMembers & j_com_velocitypowered_api_event.ResultedEvent<CookieStoreEvent_ForwardResult>;
export interface CookieStoreEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaOpaque<"net.kyori.adventure.key.Key">, arg2: Array<number>): CookieStoreEvent;
}

/** JVM class com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult. */
export interface CookieStoreEvent_ForwardResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getData(): Array<number>;
  getKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  isAllowed(): boolean;
  toString(): string;
}
export type CookieStoreEvent_ForwardResult = CookieStoreEvent_ForwardResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface CookieStoreEvent_ForwardResultStatics {
  data(arg0: Array<number>): CookieStoreEvent_ForwardResult;
  forward(): CookieStoreEvent_ForwardResult;
  handled(): CookieStoreEvent_ForwardResult;
  key(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): CookieStoreEvent_ForwardResult;
}

/** JVM class com.velocitypowered.api.event.player.GameProfileRequestEvent. */
export interface GameProfileRequestEventMembers {
  getConnection(): j_com_velocitypowered_api_proxy.InboundConnection;
  getGameProfile(): j_com_velocitypowered_api_util.GameProfile;
  getOriginalProfile(): j_com_velocitypowered_api_util.GameProfile;
  getUsername(): string;
  isOnlineMode(): boolean;
  setGameProfile(arg0: j_com_velocitypowered_api_util.GameProfile): void | null;
  toString(): string;
}
export type GameProfileRequestEvent = GameProfileRequestEventMembers;
export interface GameProfileRequestEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.InboundConnection, arg1: j_com_velocitypowered_api_util.GameProfile, arg2: boolean): GameProfileRequestEvent;
}

/** JVM class com.velocitypowered.api.event.player.KickedFromServerEvent. */
export interface KickedFromServerEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<KickedFromServerEvent_ServerKickResult>];
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): KickedFromServerEvent_ServerKickResult;
  getServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  getServerKickReason(): JavaOptional<j_net_kyori_adventure_text.Component>;
  kickedDuringLogin(): boolean;
  kickedDuringServerConnect(): boolean;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: KickedFromServerEvent_ServerKickResult): void;
}
export type KickedFromServerEvent = KickedFromServerEventMembers & j_com_velocitypowered_api_event.ResultedEvent<KickedFromServerEvent_ServerKickResult>;
export interface KickedFromServerEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_server.RegisteredServer, arg2: j_net_kyori_adventure_text.Component, arg3: boolean, arg4: KickedFromServerEvent_ServerKickResult): KickedFromServerEvent;
}

/** JVM class com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer. */
export interface KickedFromServerEvent_DisconnectPlayerMembers {
  readonly __javaSupertypes?: readonly [KickedFromServerEvent_ServerKickResult];
  getReasonComponent(): j_net_kyori_adventure_text.Component;
  isAllowed(): boolean;
  toString(): string;
}
export type KickedFromServerEvent_DisconnectPlayer = KickedFromServerEvent_DisconnectPlayerMembers & KickedFromServerEvent_ServerKickResult;
export interface KickedFromServerEvent_DisconnectPlayerStatics {
  create(arg0: j_net_kyori_adventure_text.Component): KickedFromServerEvent_DisconnectPlayer;
}

/** JVM class com.velocitypowered.api.event.player.KickedFromServerEvent$Notify. */
export interface KickedFromServerEvent_NotifyMembers {
  readonly __javaSupertypes?: readonly [KickedFromServerEvent_ServerKickResult];
  getMessageComponent(): j_net_kyori_adventure_text.Component;
  isAllowed(): boolean;
  toString(): string;
}
export type KickedFromServerEvent_Notify = KickedFromServerEvent_NotifyMembers & KickedFromServerEvent_ServerKickResult;
export interface KickedFromServerEvent_NotifyStatics {
  create(arg0: j_net_kyori_adventure_text.Component): KickedFromServerEvent_Notify;
}

/** JVM class com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer. */
export interface KickedFromServerEvent_RedirectPlayerMembers {
  readonly __javaSupertypes?: readonly [KickedFromServerEvent_ServerKickResult];
  getMessageComponent(): j_net_kyori_adventure_text.Component | null;
  getServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  isAllowed(): boolean;
  toString(): string;
}
export type KickedFromServerEvent_RedirectPlayer = KickedFromServerEvent_RedirectPlayerMembers & KickedFromServerEvent_ServerKickResult;
export interface KickedFromServerEvent_RedirectPlayerStatics {
  create(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer): KickedFromServerEvent_ServerKickResult;
  create(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer, arg1: j_net_kyori_adventure_text.Component): KickedFromServerEvent_RedirectPlayer;
}

/** JVM interface com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult. */
export interface KickedFromServerEvent_ServerKickResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
}
export type KickedFromServerEvent_ServerKickResult = KickedFromServerEvent_ServerKickResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface KickedFromServerEvent_ServerKickResultStatics {
}

/** JVM class com.velocitypowered.api.event.player.PlayerChannelRegisterEvent. */
export interface PlayerChannelRegisterEventMembers {
  getChannels(): JavaList<j_com_velocitypowered_api_proxy_messages.ChannelIdentifier>;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  toString(): string;
}
export type PlayerChannelRegisterEvent = PlayerChannelRegisterEventMembers;
export interface PlayerChannelRegisterEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaList<j_com_velocitypowered_api_proxy_messages.ChannelIdentifier>): PlayerChannelRegisterEvent;
}

/** JVM class com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent. */
export interface PlayerChannelUnregisterEventMembers {
  getChannels(): JavaList<j_com_velocitypowered_api_proxy_messages.ChannelIdentifier>;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  toString(): string;
}
export type PlayerChannelUnregisterEvent = PlayerChannelUnregisterEventMembers;
export interface PlayerChannelUnregisterEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaList<j_com_velocitypowered_api_proxy_messages.ChannelIdentifier>): PlayerChannelUnregisterEvent;
}

/** JVM class com.velocitypowered.api.event.player.PlayerChatEvent. */
export interface PlayerChatEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<PlayerChatEvent_ChatResult>];
  getMessage(): string;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): PlayerChatEvent_ChatResult;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: PlayerChatEvent_ChatResult): void;
  toString(): string;
}
export type PlayerChatEvent = PlayerChatEventMembers & j_com_velocitypowered_api_event.ResultedEvent<PlayerChatEvent_ChatResult>;
export interface PlayerChatEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: string): PlayerChatEvent;
}

/** JVM class com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult. */
export interface PlayerChatEvent_ChatResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getMessage(): JavaOptional<string>;
  isAllowed(): boolean;
  toString(): string;
}
export type PlayerChatEvent_ChatResult = PlayerChatEvent_ChatResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface PlayerChatEvent_ChatResultStatics {
  allowed(): PlayerChatEvent_ChatResult;
  denied(): PlayerChatEvent_ChatResult;
  message(arg0: string): PlayerChatEvent_ChatResult;
}

/** JVM class com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent. */
export interface PlayerChooseInitialServerEventMembers {
  getInitialServer(): JavaOptional<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  setInitialServer(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer): void | null;
  toString(): string;
}
export type PlayerChooseInitialServerEvent = PlayerChooseInitialServerEventMembers;
export interface PlayerChooseInitialServerEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_server.RegisteredServer): PlayerChooseInitialServerEvent;
}

/** JVM class com.velocitypowered.api.event.player.PlayerClientBrandEvent. */
export interface PlayerClientBrandEventMembers {
  getBrand(): string;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  toString(): string;
}
export type PlayerClientBrandEvent = PlayerClientBrandEventMembers;
export interface PlayerClientBrandEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: string): PlayerClientBrandEvent;
}

/** JVM class com.velocitypowered.api.event.player.PlayerModInfoEvent. */
export interface PlayerModInfoEventMembers {
  getModInfo(): j_com_velocitypowered_api_util.ModInfo;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  toString(): string;
}
export type PlayerModInfoEvent = PlayerModInfoEventMembers;
export interface PlayerModInfoEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_util.ModInfo): PlayerModInfoEvent;
}

/** JVM class com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent. */
export interface PlayerResourcePackStatusEventMembers {
  getPackId(): JavaOpaque<"java.util.UUID"> | null;
  getPackInfo(): j_com_velocitypowered_api_proxy_player.ResourcePackInfo | null;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getStatus(): PlayerResourcePackStatusEvent_Status;
  isOverwriteKick(): boolean;
  setOverwriteKick(arg0: boolean): void;
  toString(): string;
}
export type PlayerResourcePackStatusEvent = PlayerResourcePackStatusEventMembers;
export interface PlayerResourcePackStatusEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: PlayerResourcePackStatusEvent_Status): PlayerResourcePackStatusEvent;
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: PlayerResourcePackStatusEvent_Status, arg2: j_com_velocitypowered_api_proxy_player.ResourcePackInfo): PlayerResourcePackStatusEvent;
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaOpaque<"java.util.UUID">, arg2: PlayerResourcePackStatusEvent_Status, arg3: j_com_velocitypowered_api_proxy_player.ResourcePackInfo): PlayerResourcePackStatusEvent;
}

/** Live JVM enum com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status; constants are host handles, not strings. */
export type PlayerResourcePackStatusEvent_Status = JavaEnum<"com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status", "ACCEPTED" | "DECLINED" | "DISCARDED" | "DOWNLOADED" | "FAILED_DOWNLOAD" | "FAILED_RELOAD" | "INVALID_URL" | "SUCCESSFUL"> & PlayerResourcePackStatusEvent_StatusMembers;
export interface PlayerResourcePackStatusEvent_StatusMembers {
  isIntermediate(): boolean;
}
export interface PlayerResourcePackStatusEvent_StatusStatics {
  readonly ACCEPTED: PlayerResourcePackStatusEvent_Status;
  readonly DECLINED: PlayerResourcePackStatusEvent_Status;
  readonly DISCARDED: PlayerResourcePackStatusEvent_Status;
  readonly DOWNLOADED: PlayerResourcePackStatusEvent_Status;
  readonly FAILED_DOWNLOAD: PlayerResourcePackStatusEvent_Status;
  readonly FAILED_RELOAD: PlayerResourcePackStatusEvent_Status;
  readonly INVALID_URL: PlayerResourcePackStatusEvent_Status;
  readonly SUCCESSFUL: PlayerResourcePackStatusEvent_Status;
  valueOf(arg0: string): PlayerResourcePackStatusEvent_Status;
  values(): Array<PlayerResourcePackStatusEvent_Status>;
}

/** JVM class com.velocitypowered.api.event.player.PlayerSettingsChangedEvent. */
export interface PlayerSettingsChangedEventMembers {
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getPlayerSettings(): j_com_velocitypowered_api_proxy_player.PlayerSettings;
  toString(): string;
}
export type PlayerSettingsChangedEvent = PlayerSettingsChangedEventMembers;
export interface PlayerSettingsChangedEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_player.PlayerSettings): PlayerSettingsChangedEvent;
}

/** JVM class com.velocitypowered.api.event.player.ServerConnectedEvent. */
export interface ServerConnectedEventMembers {
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getPreviousServer(): JavaOptional<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  getServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  toString(): string;
}
export type ServerConnectedEvent = ServerConnectedEventMembers;
export interface ServerConnectedEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_server.RegisteredServer, arg2: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerConnectedEvent;
}

/** JVM class com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent. */
export interface ServerLoginPluginMessageEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<ServerLoginPluginMessageEvent_ResponseResult>];
  contentsAsDataStream(): JavaOpaque<"com.google.common.io.ByteArrayDataInput">;
  contentsAsInputStream(): JavaOpaque<"java.io.ByteArrayInputStream">;
  getConnection(): j_com_velocitypowered_api_proxy.ServerConnection;
  getContents(): Array<number>;
  getIdentifier(): j_com_velocitypowered_api_proxy_messages.ChannelIdentifier;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): ServerLoginPluginMessageEvent_ResponseResult;
  getSequenceId(): number;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: ServerLoginPluginMessageEvent_ResponseResult): void;
  toString(): string;
}
export type ServerLoginPluginMessageEvent = ServerLoginPluginMessageEventMembers & j_com_velocitypowered_api_event.ResultedEvent<ServerLoginPluginMessageEvent_ResponseResult>;
export interface ServerLoginPluginMessageEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.ServerConnection, arg1: j_com_velocitypowered_api_proxy_messages.ChannelIdentifier, arg2: Array<number>, arg3: number): ServerLoginPluginMessageEvent;
}

/** JVM class com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult. */
export interface ServerLoginPluginMessageEvent_ResponseResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  equals(arg0: object): boolean;
  getResponse(): Array<number>;
  hashCode(): number;
  isAllowed(): boolean;
  toString(): string;
}
export type ServerLoginPluginMessageEvent_ResponseResult = ServerLoginPluginMessageEvent_ResponseResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface ServerLoginPluginMessageEvent_ResponseResultStatics {
  reply(arg0: Array<number>): ServerLoginPluginMessageEvent_ResponseResult;
  unknown(): ServerLoginPluginMessageEvent_ResponseResult;
}

/** JVM class com.velocitypowered.api.event.player.ServerPostConnectEvent. */
export interface ServerPostConnectEventMembers {
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getPreviousServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer | null;
  toString(): string;
}
export type ServerPostConnectEvent = ServerPostConnectEventMembers;
export interface ServerPostConnectEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerPostConnectEvent;
}

/** JVM class com.velocitypowered.api.event.player.ServerPreConnectEvent. */
export interface ServerPreConnectEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<ServerPreConnectEvent_ServerResult>];
  getOriginalServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getPreviousServer(): j_com_velocitypowered_api_proxy_server.RegisteredServer | null;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getResult(): ServerPreConnectEvent_ServerResult;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
  setResult(arg0: ServerPreConnectEvent_ServerResult): void;
  toString(): string;
}
export type ServerPreConnectEvent = ServerPreConnectEventMembers & j_com_velocitypowered_api_event.ResultedEvent<ServerPreConnectEvent_ServerResult>;
export interface ServerPreConnectEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerPreConnectEvent;
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: j_com_velocitypowered_api_proxy_server.RegisteredServer, arg2: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerPreConnectEvent;
}

/** JVM class com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult. */
export interface ServerPreConnectEvent_ServerResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getServer(): JavaOptional<j_com_velocitypowered_api_proxy_server.RegisteredServer>;
  isAllowed(): boolean;
  toString(): string;
}
export type ServerPreConnectEvent_ServerResult = ServerPreConnectEvent_ServerResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface ServerPreConnectEvent_ServerResultStatics {
  allowed(arg0: j_com_velocitypowered_api_proxy_server.RegisteredServer): ServerPreConnectEvent_ServerResult;
  denied(): ServerPreConnectEvent_ServerResult;
}

/** JVM class com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent. */
export interface ServerResourcePackRemoveEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_GenericResult>];
  getPackId(): JavaOpaque<"java.util.UUID"> | null;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_GenericResult;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getServerConnection(): j_com_velocitypowered_api_proxy.ServerConnection;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_GenericResult): void;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
}
export type ServerResourcePackRemoveEvent = ServerResourcePackRemoveEventMembers & j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_GenericResult>;
export interface ServerResourcePackRemoveEventStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: j_com_velocitypowered_api_proxy.ServerConnection): ServerResourcePackRemoveEvent;
}

/** JVM class com.velocitypowered.api.event.player.ServerResourcePackSendEvent. */
export interface ServerResourcePackSendEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_GenericResult>];
  getProvidedResourcePack(): j_com_velocitypowered_api_proxy_player.ResourcePackInfo;
  getReceivedResourcePack(): j_com_velocitypowered_api_proxy_player.ResourcePackInfo;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_GenericResult;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_Result;
  getServerConnection(): j_com_velocitypowered_api_proxy.ServerConnection;
  setProvidedResourcePack(arg0: j_com_velocitypowered_api_proxy_player.ResourcePackInfo): void;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_GenericResult): void;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_Result): void;
}
export type ServerResourcePackSendEvent = ServerResourcePackSendEventMembers & j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_GenericResult>;
export interface ServerResourcePackSendEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy_player.ResourcePackInfo, arg1: j_com_velocitypowered_api_proxy.ServerConnection): ServerResourcePackSendEvent;
}

/** JVM class com.velocitypowered.api.event.player.TabCompleteEvent. */
export interface TabCompleteEventMembers {
  getPartialMessage(): string;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getSuggestions(): JavaList<string>;
  toString(): string;
}
export type TabCompleteEvent = TabCompleteEventMembers;
export interface TabCompleteEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: string, arg2: JavaList<string>): TabCompleteEvent;
}
