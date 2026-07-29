// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_event from './com.velocitypowered.api.event.generated.js';
import type * as j_com_velocitypowered_api_network from './com.velocitypowered.api.network.generated.js';
import type * as j_com_velocitypowered_api_proxy from './com.velocitypowered.api.proxy.generated.js';
import type * as j_com_velocitypowered_api_proxy_messages from './com.velocitypowered.api.proxy.messages.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class com.velocitypowered.api.event.connection.ConnectionHandshakeEvent. */
export interface ConnectionHandshakeEventMembers {
  getConnection(): j_com_velocitypowered_api_proxy.InboundConnection;
  getIntent(): j_com_velocitypowered_api_network.HandshakeIntent;
  toString(): string;
}
export type ConnectionHandshakeEvent = ConnectionHandshakeEventMembers;
export interface ConnectionHandshakeEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.InboundConnection): ConnectionHandshakeEvent;
  new(arg0: j_com_velocitypowered_api_proxy.InboundConnection, arg1: j_com_velocitypowered_api_network.HandshakeIntent): ConnectionHandshakeEvent;
}

/** JVM class com.velocitypowered.api.event.connection.DisconnectEvent. */
export interface DisconnectEventMembers {
  getLoginStatus(): DisconnectEvent_LoginStatus;
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  toString(): string;
}
export type DisconnectEvent = DisconnectEventMembers;
export interface DisconnectEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: DisconnectEvent_LoginStatus): DisconnectEvent;
}

/** Live JVM enum com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus; constants are host handles, not strings. */
export type DisconnectEvent_LoginStatus = JavaEnum<"com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus", "CANCELLED_BY_PROXY" | "CANCELLED_BY_USER" | "CANCELLED_BY_USER_BEFORE_COMPLETE" | "CONFLICTING_LOGIN" | "PRE_SERVER_JOIN" | "SUCCESSFUL_LOGIN"> & DisconnectEvent_LoginStatusMembers;
export interface DisconnectEvent_LoginStatusMembers {
}
export interface DisconnectEvent_LoginStatusStatics {
  readonly CANCELLED_BY_PROXY: DisconnectEvent_LoginStatus;
  readonly CANCELLED_BY_USER: DisconnectEvent_LoginStatus;
  readonly CANCELLED_BY_USER_BEFORE_COMPLETE: DisconnectEvent_LoginStatus;
  readonly CONFLICTING_LOGIN: DisconnectEvent_LoginStatus;
  readonly PRE_SERVER_JOIN: DisconnectEvent_LoginStatus;
  readonly SUCCESSFUL_LOGIN: DisconnectEvent_LoginStatus;
  valueOf(arg0: string): DisconnectEvent_LoginStatus;
  values(): Array<DisconnectEvent_LoginStatus>;
}

/** JVM class com.velocitypowered.api.event.connection.LoginEvent. */
export interface LoginEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_ComponentResult>];
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getResult(): j_com_velocitypowered_api_event.ResultedEvent_ComponentResult;
  setResult(arg0: j_com_velocitypowered_api_event.ResultedEvent_ComponentResult): void;
  toString(): string;
}
export type LoginEvent = LoginEventMembers & j_com_velocitypowered_api_event.ResultedEvent<j_com_velocitypowered_api_event.ResultedEvent_ComponentResult>;
export interface LoginEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player): LoginEvent;
}

/** JVM class com.velocitypowered.api.event.connection.PluginMessageEvent. */
export interface PluginMessageEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<PluginMessageEvent_ForwardResult>];
  dataAsDataStream(): JavaOpaque<"com.google.common.io.ByteArrayDataInput">;
  dataAsInputStream(): JavaOpaque<"java.io.ByteArrayInputStream">;
  getData(): Array<number>;
  getIdentifier(): j_com_velocitypowered_api_proxy_messages.ChannelIdentifier;
  getResult(): PluginMessageEvent_ForwardResult;
  getSource(): j_com_velocitypowered_api_proxy_messages.ChannelMessageSource;
  getTarget(): j_com_velocitypowered_api_proxy_messages.ChannelMessageSink;
  setResult(arg0: PluginMessageEvent_ForwardResult): void;
  toString(): string;
}
export type PluginMessageEvent = PluginMessageEventMembers & j_com_velocitypowered_api_event.ResultedEvent<PluginMessageEvent_ForwardResult>;
export interface PluginMessageEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy_messages.ChannelMessageSource, arg1: j_com_velocitypowered_api_proxy_messages.ChannelMessageSink, arg2: j_com_velocitypowered_api_proxy_messages.ChannelIdentifier, arg3: Array<number>): PluginMessageEvent;
}

/** JVM class com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult. */
export interface PluginMessageEvent_ForwardResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  isAllowed(): boolean;
  toString(): string;
}
export type PluginMessageEvent_ForwardResult = PluginMessageEvent_ForwardResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface PluginMessageEvent_ForwardResultStatics {
  forward(): PluginMessageEvent_ForwardResult;
  handled(): PluginMessageEvent_ForwardResult;
}

/** JVM class com.velocitypowered.api.event.connection.PostLoginEvent. */
export interface PostLoginEventMembers {
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  toString(): string;
}
export type PostLoginEvent = PostLoginEventMembers;
export interface PostLoginEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player): PostLoginEvent;
}

/** JVM class com.velocitypowered.api.event.connection.PreLoginEvent. */
export interface PreLoginEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<PreLoginEvent_PreLoginComponentResult>];
  getConnection(): j_com_velocitypowered_api_proxy.InboundConnection;
  getResult(): PreLoginEvent_PreLoginComponentResult;
  getUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  getUsername(): string;
  setResult(arg0: PreLoginEvent_PreLoginComponentResult): void;
  toString(): string;
}
export type PreLoginEvent = PreLoginEventMembers & j_com_velocitypowered_api_event.ResultedEvent<PreLoginEvent_PreLoginComponentResult>;
export interface PreLoginEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.InboundConnection, arg1: string): PreLoginEvent;
  new(arg0: j_com_velocitypowered_api_proxy.InboundConnection, arg1: string, arg2: JavaOpaque<"java.util.UUID"> | null): PreLoginEvent;
}

/** JVM class com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult. */
export interface PreLoginEvent_PreLoginComponentResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getReasonComponent(): JavaOptional<j_net_kyori_adventure_text.Component>;
  isAllowed(): boolean;
  isForceOfflineMode(): boolean;
  isOnlineModeAllowed(): boolean;
  toString(): string;
}
export type PreLoginEvent_PreLoginComponentResult = PreLoginEvent_PreLoginComponentResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface PreLoginEvent_PreLoginComponentResultStatics {
  allowed(): PreLoginEvent_PreLoginComponentResult;
  denied(arg0: j_net_kyori_adventure_text.Component): PreLoginEvent_PreLoginComponentResult;
  forceOfflineMode(): PreLoginEvent_PreLoginComponentResult;
  forceOnlineMode(): PreLoginEvent_PreLoginComponentResult;
}

/** JVM class com.velocitypowered.api.event.connection.PreTransferEvent. */
export interface PreTransferEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<PreTransferEvent_TransferResult>];
  getResult(): PreTransferEvent_TransferResult;
  originalAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  player(): j_com_velocitypowered_api_proxy.Player;
  setResult(arg0: PreTransferEvent_TransferResult): void;
}
export type PreTransferEvent = PreTransferEventMembers & j_com_velocitypowered_api_event.ResultedEvent<PreTransferEvent_TransferResult>;
export interface PreTransferEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaOpaque<"java.net.InetSocketAddress">): PreTransferEvent;
}

/** JVM class com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult. */
export interface PreTransferEvent_TransferResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  address(): JavaOpaque<"java.net.InetSocketAddress"> | null;
  isAllowed(): boolean;
}
export type PreTransferEvent_TransferResult = PreTransferEvent_TransferResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface PreTransferEvent_TransferResultStatics {
  allowed(): PreTransferEvent_TransferResult;
  denied(): PreTransferEvent_TransferResult;
  transferTo(arg0: JavaOpaque<"java.net.InetSocketAddress">): PreTransferEvent_TransferResult;
}
