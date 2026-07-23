// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_proxy_crypto from './com.velocitypowered.api.proxy.crypto.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';
import type * as j_net_kyori_adventure_resource from './net.kyori.adventure.resource.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface com.velocitypowered.api.proxy.player.ChatSession. */
export interface ChatSessionMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable];
  getSessionId(): JavaOpaque<"java.util.UUID">;
}
export type ChatSession = ChatSessionMembers & j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable;
export interface ChatSessionStatics {
}

/** JVM interface com.velocitypowered.api.proxy.player.PlayerSettings. */
export interface PlayerSettingsMembers {
  getChatMode(): PlayerSettings_ChatMode;
  getLocale(): JavaOpaque<"java.util.Locale">;
  getMainHand(): PlayerSettings_MainHand;
  getParticleStatus(): PlayerSettings_ParticleStatus;
  getSkinParts(): SkinParts;
  getViewDistance(): number;
  hasChatColors(): boolean;
  isClientListingAllowed(): boolean;
  isTextFilteringEnabled(): boolean;
}
export type PlayerSettings = PlayerSettingsMembers;
export interface PlayerSettingsStatics {
}

/** Live JVM enum com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode; constants are host handles, not strings. */
export type PlayerSettings_ChatMode = JavaEnum<"com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode", "COMMANDS_ONLY" | "HIDDEN" | "SHOWN"> & PlayerSettings_ChatModeMembers;
export interface PlayerSettings_ChatModeMembers {
}
export interface PlayerSettings_ChatModeStatics {
  readonly COMMANDS_ONLY: PlayerSettings_ChatMode;
  readonly HIDDEN: PlayerSettings_ChatMode;
  readonly SHOWN: PlayerSettings_ChatMode;
  valueOf(arg0: string): PlayerSettings_ChatMode;
  values(): Array<PlayerSettings_ChatMode>;
}

/** Live JVM enum com.velocitypowered.api.proxy.player.PlayerSettings$MainHand; constants are host handles, not strings. */
export type PlayerSettings_MainHand = JavaEnum<"com.velocitypowered.api.proxy.player.PlayerSettings$MainHand", "LEFT" | "RIGHT"> & PlayerSettings_MainHandMembers;
export interface PlayerSettings_MainHandMembers {
}
export interface PlayerSettings_MainHandStatics {
  readonly LEFT: PlayerSettings_MainHand;
  readonly RIGHT: PlayerSettings_MainHand;
  valueOf(arg0: string): PlayerSettings_MainHand;
  values(): Array<PlayerSettings_MainHand>;
}

/** Live JVM enum com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus; constants are host handles, not strings. */
export type PlayerSettings_ParticleStatus = JavaEnum<"com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus", "ALL" | "DECREASED" | "MINIMAL"> & PlayerSettings_ParticleStatusMembers;
export interface PlayerSettings_ParticleStatusMembers {
}
export interface PlayerSettings_ParticleStatusStatics {
  readonly ALL: PlayerSettings_ParticleStatus;
  readonly DECREASED: PlayerSettings_ParticleStatus;
  readonly MINIMAL: PlayerSettings_ParticleStatus;
  valueOf(arg0: string): PlayerSettings_ParticleStatus;
  values(): Array<PlayerSettings_ParticleStatus>;
}

/** JVM interface com.velocitypowered.api.proxy.player.ResourcePackInfo. */
export interface ResourcePackInfoMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_resource.ResourcePackRequestLike];
  asBuilder(): ResourcePackInfo_Builder;
  asBuilder(arg0: string): ResourcePackInfo_Builder;
  getHash(): Array<number> | null;
  getId(): JavaOpaque<"java.util.UUID">;
  getOrigin(): ResourcePackInfo_Origin;
  getOriginalOrigin(): ResourcePackInfo_Origin;
  getPrompt(): j_net_kyori_adventure_text.Component | null;
  getShouldForce(): boolean;
  getUrl(): string;
}
export type ResourcePackInfo = ResourcePackInfoMembers & j_net_kyori_adventure_resource.ResourcePackRequestLike;
export interface ResourcePackInfoStatics {
}

/** JVM interface com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder. */
export interface ResourcePackInfo_BuilderMembers {
  build(): ResourcePackInfo;
  setHash(arg0: Array<number>): ResourcePackInfo_Builder | null;
  setId(arg0: JavaOpaque<"java.util.UUID">): ResourcePackInfo_Builder;
  setPrompt(arg0: j_net_kyori_adventure_text.Component): ResourcePackInfo_Builder | null;
  setShouldForce(arg0: boolean): ResourcePackInfo_Builder;
}
export type ResourcePackInfo_Builder = ResourcePackInfo_BuilderMembers;
export interface ResourcePackInfo_BuilderStatics {
}

/** Live JVM enum com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin; constants are host handles, not strings. */
export type ResourcePackInfo_Origin = JavaEnum<"com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin", "DOWNSTREAM_SERVER" | "PLUGIN_ON_PROXY"> & ResourcePackInfo_OriginMembers;
export interface ResourcePackInfo_OriginMembers {
}
export interface ResourcePackInfo_OriginStatics {
  readonly DOWNSTREAM_SERVER: ResourcePackInfo_Origin;
  readonly PLUGIN_ON_PROXY: ResourcePackInfo_Origin;
  valueOf(arg0: string): ResourcePackInfo_Origin;
  values(): Array<ResourcePackInfo_Origin>;
}

/** JVM class com.velocitypowered.api.proxy.player.SkinParts. */
export interface SkinPartsMembers {
  equals(arg0: object): boolean | null;
  hasCape(): boolean;
  hasHat(): boolean;
  hasJacket(): boolean;
  hasLeftPants(): boolean;
  hasLeftSleeve(): boolean;
  hasRightPants(): boolean;
  hasRightSleeve(): boolean;
  hashCode(): number;
}
export type SkinParts = SkinPartsMembers;
export interface SkinPartsStatics {
  new(arg0: number): SkinParts;
}

/** JVM interface com.velocitypowered.api.proxy.player.TabList. */
export interface TabListMembers {
  addEntries(arg0: Iterable<TabListEntry>): void;
  addEntries(...arg0: Array<TabListEntry>): void;
  addEntry(arg0: TabListEntry): void;
  buildEntry(arg0: j_com_velocitypowered_api_util.GameProfile, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number): TabListEntry | null;
  buildEntry(arg0: j_com_velocitypowered_api_util.GameProfile, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: j_com_velocitypowered_api_proxy_crypto.IdentifiedKey): TabListEntry | null;
  buildEntry(arg0: j_com_velocitypowered_api_util.GameProfile, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: ChatSession): TabListEntry | null;
  buildEntry(arg0: j_com_velocitypowered_api_util.GameProfile, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: ChatSession, arg5: boolean): TabListEntry | null;
  buildEntry(arg0: j_com_velocitypowered_api_util.GameProfile, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: ChatSession, arg5: boolean, arg6: number): TabListEntry | null;
  buildEntry(arg0: j_com_velocitypowered_api_util.GameProfile, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: ChatSession, arg5: boolean, arg6: number, arg7: boolean): TabListEntry | null;
  clearAll(): void;
  clearHeaderAndFooter(): void;
  containsEntry(arg0: JavaOpaque<"java.util.UUID">): boolean;
  getEntries(): JavaCollection<TabListEntry>;
  getEntry(arg0: JavaOpaque<"java.util.UUID">): JavaOptional<TabListEntry>;
  removeEntry(arg0: JavaOpaque<"java.util.UUID">): JavaOptional<TabListEntry>;
  setHeaderAndFooter(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component): void;
}
export type TabList = TabListMembers;
export interface TabListStatics {
}

/** JVM interface com.velocitypowered.api.proxy.player.TabListEntry. */
export interface TabListEntryMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable];
  getChatSession(): ChatSession | null;
  getDisplayNameComponent(): JavaOptional<j_net_kyori_adventure_text.Component>;
  getGameMode(): number;
  getIdentifiedKey(): j_com_velocitypowered_api_proxy_crypto.IdentifiedKey;
  getLatency(): number;
  getListOrder(): number;
  getProfile(): j_com_velocitypowered_api_util.GameProfile;
  getTabList(): TabList;
  isListed(): boolean;
  isShowHat(): boolean;
  setDisplayName(arg0: j_net_kyori_adventure_text.Component): TabListEntry | null;
  setGameMode(arg0: number): TabListEntry;
  setLatency(arg0: number): TabListEntry;
  setListOrder(arg0: number): TabListEntry;
  setListed(arg0: boolean): TabListEntry;
  setShowHat(arg0: boolean): TabListEntry;
}
export type TabListEntry = TabListEntryMembers & j_com_velocitypowered_api_proxy_crypto.KeyIdentifiable;
export interface TabListEntryStatics {
  builder(): TabListEntry_Builder;
}

/** JVM class com.velocitypowered.api.proxy.player.TabListEntry$Builder. */
export interface TabListEntry_BuilderMembers {
  build(): TabListEntry;
  chatSession(arg0: ChatSession): TabListEntry_Builder;
  displayName(arg0: j_net_kyori_adventure_text.Component): TabListEntry_Builder | null;
  gameMode(arg0: number): TabListEntry_Builder;
  latency(arg0: number): TabListEntry_Builder;
  listOrder(arg0: number): TabListEntry_Builder;
  listed(arg0: boolean): TabListEntry_Builder;
  profile(arg0: j_com_velocitypowered_api_util.GameProfile): TabListEntry_Builder;
  showHat(arg0: boolean): TabListEntry_Builder;
  tabList(arg0: TabList): TabListEntry_Builder;
}
export type TabListEntry_Builder = TabListEntry_BuilderMembers;
export interface TabListEntry_BuilderStatics {
}
