// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper from './com.destroystokyo.paper.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_plugin_messaging from './org.bukkit.plugin.messaging.generated.js';

/** JVM interface io.papermc.paper.connection.PlayerCommonConnection. */
export interface PlayerCommonConnectionMembers {
  readonly __javaSupertypes?: readonly [ReadablePlayerCookieConnection, WritablePlayerCookieConnection, j_org_bukkit_plugin_messaging.PluginMessageRecipient];
  getClientOption<T>(arg0: j_com_destroystokyo_paper.ClientOption<T>): T;
  sendLinks(arg0: j_org_bukkit.ServerLinks): void;
  sendReportDetails(arg0: JavaMap<string, string>): void;
  transfer(arg0: string, arg1: number): void;
}
export type PlayerCommonConnection = PlayerCommonConnectionMembers & ReadablePlayerCookieConnection & WritablePlayerCookieConnection & j_org_bukkit_plugin_messaging.PluginMessageRecipient;
export interface PlayerCommonConnectionStatics {
}

/** JVM interface io.papermc.paper.connection.PlayerConfigurationConnection. */
export interface PlayerConfigurationConnectionMembers {
  readonly __javaSupertypes?: readonly [PlayerCommonConnection];
  clearChat(): void;
  completeReconfiguration(): void;
  getAudience(): j_net_kyori_adventure_audience.Audience;
  getProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
}
export type PlayerConfigurationConnection = PlayerConfigurationConnectionMembers & PlayerCommonConnection;
export interface PlayerConfigurationConnectionStatics {
}

/** JVM interface io.papermc.paper.connection.PlayerConnection. */
export interface PlayerConnectionMembers {
  disconnect(arg0: j_net_kyori_adventure_text.Component): void;
  getAddress(): JavaOpaque<"java.net.SocketAddress">;
  getClientAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getHAProxyAddress(): JavaOpaque<"java.net.InetSocketAddress"> | null;
  getVirtualHost(): JavaOpaque<"java.net.InetSocketAddress"> | null;
  isTransferred(): boolean;
}
export type PlayerConnection = PlayerConnectionMembers;
export interface PlayerConnectionStatics {
}

/** JVM interface io.papermc.paper.connection.PlayerGameConnection. */
export interface PlayerGameConnectionMembers {
  readonly __javaSupertypes?: readonly [PlayerCommonConnection];
  getPlayer(): j_org_bukkit_entity.Player;
  reenterConfiguration(): void;
}
export type PlayerGameConnection = PlayerGameConnectionMembers & PlayerCommonConnection;
export interface PlayerGameConnectionStatics {
}

/** JVM interface io.papermc.paper.connection.PlayerLoginConnection. */
export interface PlayerLoginConnectionMembers {
  readonly __javaSupertypes?: readonly [ReadablePlayerCookieConnection];
  getAuthenticatedProfile(): j_com_destroystokyo_paper_profile.PlayerProfile | null;
  getUnsafeProfile(): j_com_destroystokyo_paper_profile.PlayerProfile | null;
}
export type PlayerLoginConnection = PlayerLoginConnectionMembers & ReadablePlayerCookieConnection;
export interface PlayerLoginConnectionStatics {
}

/** JVM interface io.papermc.paper.connection.ReadablePlayerCookieConnection. */
export interface ReadablePlayerCookieConnectionMembers {
  readonly __javaSupertypes?: readonly [PlayerConnection];
  retrieveCookie(arg0: j_org_bukkit.NamespacedKey): PromiseLike<Array<number>>;
}
export type ReadablePlayerCookieConnection = ReadablePlayerCookieConnectionMembers & PlayerConnection;
export interface ReadablePlayerCookieConnectionStatics {
}

/** JVM interface io.papermc.paper.connection.WritablePlayerCookieConnection. */
export interface WritablePlayerCookieConnectionMembers {
  readonly __javaSupertypes?: readonly [PlayerConnection];
  storeCookie(arg0: j_org_bukkit.NamespacedKey, arg1: Array<number>): void;
}
export type WritablePlayerCookieConnection = WritablePlayerCookieConnectionMembers & PlayerConnection;
export interface WritablePlayerCookieConnectionStatics {
}
