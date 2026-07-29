// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface com.velocitypowered.api.proxy.config.ProxyConfig. */
export interface ProxyConfigMembers {
  getAttemptConnectionOrder(): JavaList<string>;
  getCommandRatelimit(): number;
  getCompressionLevel(): number;
  getCompressionThreshold(): number;
  getConnectTimeout(): number;
  getFavicon(): JavaOptional<j_com_velocitypowered_api_util.Favicon>;
  getForcedHosts(): JavaMap<string, JavaList<string>>;
  getKickAfterRateLimitedCommands(): number;
  getKickAfterRateLimitedTabCompletes(): number;
  getLoginRatelimit(): number;
  getMotd(): j_net_kyori_adventure_text.Component;
  getQueryMap(): string;
  getQueryPort(): number;
  getReadTimeout(): number;
  getServers(): JavaMap<string, string>;
  getShowMaxPlayers(): number;
  getTabCompleteRatelimit(): number;
  isAnnounceForge(): boolean;
  isForwardCommandsIfRateLimited(): boolean;
  isKickOnCommandRateLimit(): boolean;
  isKickOnTabCompleteRateLimit(): boolean;
  isOnlineMode(): boolean;
  isQueryEnabled(): boolean;
  shouldPreventClientProxyConnections(): boolean;
  shouldQueryShowPlugins(): boolean;
}
export type ProxyConfig = ProxyConfigMembers;
export interface ProxyConfigStatics {
}
