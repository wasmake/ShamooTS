// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dedicated from './net.minecraft.server.dedicated.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM abstract net.minecraft.server.players.BanListEntry. */
export interface BanListEntryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [StoredUserEntry<T>];
  getCreated(): JavaOpaque<"java.util.Date">;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getExpires(): JavaOpaque<"java.util.Date"> | null;
  getReason(): string;
  getSource(): string;
}
export type BanListEntry<T = unknown> = BanListEntryMembers<T> & StoredUserEntry<T>;
export interface BanListEntryStatics {
  readonly DATE_FORMAT: JavaOpaque<"java.text.SimpleDateFormat">;
  readonly EXPIRES_NEVER: "forever";
}

/** JVM class net.minecraft.server.players.GameProfileCache. */
export interface GameProfileCacheMembers {
  add(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): void;
  clearExecutor(): void;
  get(arg0: string): JavaOptional<JavaOpaque<"com.mojang.authlib.GameProfile">>;
  get(arg0: JavaOpaque<"java.util.UUID">): JavaOptional<JavaOpaque<"com.mojang.authlib.GameProfile">>;
  getAsync(arg0: string): PromiseLike<JavaOptional<JavaOpaque<"com.mojang.authlib.GameProfile">>>;
  getProfileIfCached(arg0: string): JavaOpaque<"com.mojang.authlib.GameProfile"> | null;
  load(): JavaList<JavaOpaque<"net.minecraft.server.players.GameProfileCache$GameProfileInfo">>;
  save(arg0: boolean): void;
  setExecutor(arg0: JavaOpaque<"java.util.concurrent.Executor">): void;
}
export type GameProfileCache = GameProfileCacheMembers;
export interface GameProfileCacheStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfileRepository">, arg1: JavaOpaque<"java.io.File">): GameProfileCache;
  setUsesAuthentication(arg0: boolean): void;
}

/** JVM class net.minecraft.server.players.IpBanList. */
export interface IpBanListMembers {
  readonly __javaSupertypes?: readonly [StoredUserList<string, IpBanListEntry>];
  get(arg0: JavaOpaque<"java.net.SocketAddress">): IpBanListEntry | null;
  isBanned(arg0: string): boolean;
  isBanned(arg0: JavaOpaque<"java.net.SocketAddress">): boolean;
}
export type IpBanList = IpBanListMembers & StoredUserList<string, IpBanListEntry>;
export interface IpBanListStatics {
  new(arg0: JavaOpaque<"java.io.File">): IpBanList;
}

/** JVM class net.minecraft.server.players.IpBanListEntry. */
export interface IpBanListEntryMembers {
  readonly __javaSupertypes?: readonly [BanListEntry<string>];
  getDisplayName(): j_net_minecraft_network_chat.Component;
}
export type IpBanListEntry = IpBanListEntryMembers & BanListEntry<string>;
export interface IpBanListEntryStatics {
  new(arg0: JavaOpaque<"com.google.gson.JsonObject">): IpBanListEntry;
  new(arg0: string): IpBanListEntry;
  new(arg0: string, arg1: JavaOpaque<"java.util.Date"> | null, arg2: string | null, arg3: JavaOpaque<"java.util.Date"> | null, arg4: string | null): IpBanListEntry;
}

/** JVM class net.minecraft.server.players.OldUsersConverter. */
export interface OldUsersConverterMembers {
}
export type OldUsersConverter = OldUsersConverterMembers;
export interface OldUsersConverterStatics {
  new(): OldUsersConverter;
  readonly OLD_IPBANLIST: JavaOpaque<"java.io.File">;
  readonly OLD_OPLIST: JavaOpaque<"java.io.File">;
  readonly OLD_USERBANLIST: JavaOpaque<"java.io.File">;
  readonly OLD_WHITELIST: JavaOpaque<"java.io.File">;
  convertIpBanlist(arg0: j_net_minecraft_server.MinecraftServer): boolean;
  convertMobOwnerIfNecessary(arg0: j_net_minecraft_server.MinecraftServer, arg1: string): JavaOpaque<"java.util.UUID"> | null;
  convertOpsList(arg0: j_net_minecraft_server.MinecraftServer): boolean;
  convertPlayers(arg0: j_net_minecraft_server_dedicated.DedicatedServer): boolean;
  convertUserBanlist(arg0: j_net_minecraft_server.MinecraftServer): boolean;
  convertWhiteList(arg0: j_net_minecraft_server.MinecraftServer): boolean;
  serverReadyAfterUserconversion(arg0: j_net_minecraft_server.MinecraftServer): boolean;
}

/** JVM abstract net.minecraft.server.players.PlayerList. */
export interface PlayerListMembers {
  addWorldborderListener(arg0: j_net_minecraft_server_level.ServerLevel): void;
  broadcast(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg6: j_net_minecraft_network_protocol.Packet<object>): void;
  broadcastAll(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
  broadcastAll(arg0: j_net_minecraft_network_protocol.Packet<object>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): void;
  broadcastAll(arg0: j_net_minecraft_network_protocol.Packet, arg1: j_net_minecraft_world_entity_player.Player): void;
  broadcastAll(arg0: j_net_minecraft_network_protocol.Packet, arg1: j_net_minecraft_world_level.Level): void;
  broadcastChatMessage(arg0: j_net_minecraft_network_chat.PlayerChatMessage, arg1: JavaPredicate<j_net_minecraft_server_level.ServerPlayer>, arg2: j_net_minecraft_server_level.ServerPlayer | null, arg3: j_net_minecraft_network_chat.ChatType_Bound, arg4: JavaFunction<JavaOpaque<"net.kyori.adventure.audience.Audience">, j_net_minecraft_network_chat.Component> | null): void;
  broadcastChatMessage(arg0: j_net_minecraft_network_chat.PlayerChatMessage, arg1: j_net_minecraft_commands.CommandSourceStack, arg2: j_net_minecraft_network_chat.ChatType_Bound): void;
  broadcastChatMessage(arg0: j_net_minecraft_network_chat.PlayerChatMessage, arg1: j_net_minecraft_server_level.ServerPlayer, arg2: j_net_minecraft_network_chat.ChatType_Bound): void;
  broadcastChatMessage(arg0: j_net_minecraft_network_chat.PlayerChatMessage, arg1: j_net_minecraft_server_level.ServerPlayer, arg2: j_net_minecraft_network_chat.ChatType_Bound, arg3: JavaFunction<JavaOpaque<"net.kyori.adventure.audience.Audience">, j_net_minecraft_network_chat.Component> | null): void;
  broadcastMessage(arg0: Array<j_net_minecraft_network_chat.Component>): void;
  broadcastSystemMessage(arg0: j_net_minecraft_network_chat.Component, arg1: JavaFunction<j_net_minecraft_server_level.ServerPlayer, j_net_minecraft_network_chat.Component>, arg2: boolean): void;
  broadcastSystemMessage(arg0: j_net_minecraft_network_chat.Component, arg1: boolean): void;
  broadcastSystemToAllExceptTeam(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_network_chat.Component): void;
  broadcastSystemToTeam(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_network_chat.Component): void;
  canBypassFullServerLogin(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: PlayerList_LoginResult): PlayerList_LoginResult;
  canBypassPlayerLimit(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  canPlayerLogin(arg0: JavaOpaque<"java.net.SocketAddress">, arg1: JavaOpaque<"com.mojang.authlib.GameProfile">): PlayerList_LoginResult;
  collideRuleTeamName: string | null;
  deop(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): void;
  disconnectAllPlayersWithProfile(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  getBans(): UserBanList;
  getIpBans(): IpBanList;
  getMaxPlayers(): number;
  getOpNames(): Array<string>;
  getOps(): ServerOpList;
  getPlayer(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_server_level.ServerPlayer | null;
  getPlayerAdvancements(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_server.PlayerAdvancements;
  getPlayerByName(arg0: string): j_net_minecraft_server_level.ServerPlayer | null;
  getPlayerCount(): number;
  getPlayerNamesArray(): Array<string>;
  getPlayerStats(arg0: JavaOpaque<"java.util.UUID">, arg1: string): j_net_minecraft_stats.ServerStatsCounter;
  getPlayerStats(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_stats.ServerStatsCounter;
  getPlayers(): JavaList<j_net_minecraft_server_level.ServerPlayer>;
  getPlayersWithAddress(arg0: string): JavaList<j_net_minecraft_server_level.ServerPlayer>;
  getServer(): j_net_minecraft_server.MinecraftServer;
  getSimulationDistance(): number;
  getSingleplayerData(): j_net_minecraft_nbt.CompoundTag | null;
  getViewDistance(): number;
  getWhiteList(): UserWhiteList;
  getWhiteListNames(): Array<string>;
  isAllowCommandsForAllPlayers(): boolean;
  isOp(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  isUsingWhitelist(): boolean;
  isWhiteListed(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  isWhiteListedLogin(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): PlayerList_LoginResult;
  load(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_util.ProblemReporter): JavaOptional<j_net_minecraft_world_level_storage.ValueInput>;
  loadAndSaveFiles(): void;
  maxPlayers: number;
  op(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): void;
  placeNewPlayer(arg0: j_net_minecraft_network.Connection, arg1: j_net_minecraft_server_level.ServerPlayer, arg2: j_net_minecraft_server_network.CommonListenerCookie): void;
  readonly playerIo: j_net_minecraft_world_level_storage.PlayerDataStorage;
  readonly players: JavaList<j_net_minecraft_server_level.ServerPlayer>;
  reloadAdvancementData(): void;
  reloadRecipes(): void;
  reloadResources(): void;
  reloadTagData(): void;
  reloadWhiteList(): void;
  remove(arg0: j_net_minecraft_server_level.ServerPlayer): JavaOpaque<"net.kyori.adventure.text.Component"> | null;
  remove(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"net.kyori.adventure.text.Component"> | null;
  removeAll(): void;
  removeAll(arg0: boolean): void;
  respawn(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity_RemovalReason, arg3: JavaOpaque<"org.bukkit.event.player.PlayerRespawnEvent$RespawnReason"> | null): j_net_minecraft_server_level.ServerPlayer;
  respawn(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity_RemovalReason, arg3: JavaOpaque<"org.bukkit.event.player.PlayerRespawnEvent$RespawnReason"> | null, arg4: JavaOpaque<"org.bukkit.Location"> | null): j_net_minecraft_server_level.ServerPlayer;
  saveAll(): void;
  saveAll(arg0: number): void;
  sendActiveEffects(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: JavaConsumer<j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>>): void;
  sendActiveEffects(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_server_network.ServerGamePacketListenerImpl): void;
  sendActivePlayerEffects(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  sendAllPlayerInfo(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  sendLevelInfo(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_server_level.ServerLevel): void;
  sendPlayerPermissionLevel(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  sendPlayerPermissionLevel(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: number, arg2: boolean): void;
  sendPlayerPermissionLevel(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean): void;
  setAllowCommandsForAllPlayers(arg0: boolean): void;
  setSimulationDistance(arg0: number): void;
  setUsingWhiteList(arg0: boolean): void;
  setViewDistance(arg0: number): void;
  tick(): void;
  updateEntireScoreboard(arg0: j_net_minecraft_server.ServerScoreboard, arg1: j_net_minecraft_server_level.ServerPlayer): void;
  verifyChatTrusted(arg0: j_net_minecraft_network_chat.PlayerChatMessage): boolean;
}
export type PlayerList = PlayerListMembers;
export interface PlayerListStatics {
  readonly CHAT_FILTERED_FULL: j_net_minecraft_network_chat.Component;
  readonly DUPLICATE_LOGIN_DISCONNECT_MESSAGE: j_net_minecraft_network_chat.Component;
  readonly IPBANLIST_FILE: JavaOpaque<"java.io.File">;
  readonly OPLIST_FILE: JavaOpaque<"java.io.File">;
  readonly USERBANLIST_FILE: JavaOpaque<"java.io.File">;
  readonly WHITELIST_FILE: JavaOpaque<"java.io.File">;
}

/** JVM record net.minecraft.server.players.PlayerList$LoginResult. */
export interface PlayerList_LoginResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isAllowed(): boolean;
  message(): j_net_minecraft_network_chat.Component | null;
  result(): JavaOpaque<"org.bukkit.event.player.PlayerLoginEvent$Result">;
  toString(): string;
}
export type PlayerList_LoginResult = PlayerList_LoginResultMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerList_LoginResultStatics {
  new(arg0: j_net_minecraft_network_chat.Component | null, arg1: JavaOpaque<"org.bukkit.event.player.PlayerLoginEvent$Result">): PlayerList_LoginResult;
  readonly ALLOW: PlayerList_LoginResult;
}

/** JVM class net.minecraft.server.players.ServerOpList. */
export interface ServerOpListMembers {
  readonly __javaSupertypes?: readonly [StoredUserList<JavaOpaque<"com.mojang.authlib.GameProfile">, ServerOpListEntry>];
  canBypassPlayerLimit(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  getUserList(): Array<string>;
}
export type ServerOpList = ServerOpListMembers & StoredUserList<JavaOpaque<"com.mojang.authlib.GameProfile">, ServerOpListEntry>;
export interface ServerOpListStatics {
  new(arg0: JavaOpaque<"java.io.File">): ServerOpList;
}

/** JVM class net.minecraft.server.players.ServerOpListEntry. */
export interface ServerOpListEntryMembers {
  readonly __javaSupertypes?: readonly [StoredUserEntry<JavaOpaque<"com.mojang.authlib.GameProfile">>];
  getBypassesPlayerLimit(): boolean;
  getLevel(): number;
}
export type ServerOpListEntry = ServerOpListEntryMembers & StoredUserEntry<JavaOpaque<"com.mojang.authlib.GameProfile">>;
export interface ServerOpListEntryStatics {
  new(arg0: JavaOpaque<"com.google.gson.JsonObject">): ServerOpListEntry;
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: number, arg2: boolean): ServerOpListEntry;
}

/** JVM class net.minecraft.server.players.SleepStatus. */
export interface SleepStatusMembers {
  amountSleeping(): number;
  areEnoughDeepSleeping(arg0: number, arg1: JavaList<j_net_minecraft_server_level.ServerPlayer>): boolean;
  areEnoughSleeping(arg0: number): boolean;
  removeAllSleepers(): void;
  sleepersNeeded(arg0: number): number;
  update(arg0: JavaList<j_net_minecraft_server_level.ServerPlayer>): boolean;
}
export type SleepStatus = SleepStatusMembers;
export interface SleepStatusStatics {
  new(): SleepStatus;
}

/** JVM abstract net.minecraft.server.players.StoredUserEntry. */
export interface StoredUserEntryMembers<T = unknown> {
  getUser(): T | null;
}
export type StoredUserEntry<T = unknown> = StoredUserEntryMembers<T>;
export interface StoredUserEntryStatics {
}

/** JVM abstract net.minecraft.server.players.StoredUserList. */
export interface StoredUserListMembers<K = unknown, V /* extends StoredUserEntry<K> */ = unknown> {
  add(arg0: V): void;
  get(arg0: K): V | null;
  getEntries(): JavaCollection<V>;
  getFile(): JavaOpaque<"java.io.File">;
  getUserList(): Array<string>;
  isEmpty(): boolean;
  /** @throws java.io.IOException */
  load(): void;
  remove(arg0: K): void;
  remove(arg0: StoredUserEntry<K>): void;
  /** @throws java.io.IOException */
  save(): void;
}
export type StoredUserList<K = unknown, V /* extends StoredUserEntry<K> */ = unknown> = StoredUserListMembers<K, V>;
export interface StoredUserListStatics {
}

/** JVM class net.minecraft.server.players.UserBanList. */
export interface UserBanListMembers {
  readonly __javaSupertypes?: readonly [StoredUserList<JavaOpaque<"com.mojang.authlib.GameProfile">, UserBanListEntry>];
  getUserList(): Array<string>;
  isBanned(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
}
export type UserBanList = UserBanListMembers & StoredUserList<JavaOpaque<"com.mojang.authlib.GameProfile">, UserBanListEntry>;
export interface UserBanListStatics {
  new(arg0: JavaOpaque<"java.io.File">): UserBanList;
}

/** JVM class net.minecraft.server.players.UserBanListEntry. */
export interface UserBanListEntryMembers {
  readonly __javaSupertypes?: readonly [BanListEntry<JavaOpaque<"com.mojang.authlib.GameProfile">>];
  getDisplayName(): j_net_minecraft_network_chat.Component;
}
export type UserBanListEntry = UserBanListEntryMembers & BanListEntry<JavaOpaque<"com.mojang.authlib.GameProfile">>;
export interface UserBanListEntryStatics {
  new(arg0: JavaOpaque<"com.google.gson.JsonObject">): UserBanListEntry;
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile"> | null): UserBanListEntry;
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile"> | null, arg1: JavaOpaque<"java.util.Date"> | null, arg2: string | null, arg3: JavaOpaque<"java.util.Date"> | null, arg4: string | null): UserBanListEntry;
}

/** JVM class net.minecraft.server.players.UserWhiteList. */
export interface UserWhiteListMembers {
  readonly __javaSupertypes?: readonly [StoredUserList<JavaOpaque<"com.mojang.authlib.GameProfile">, UserWhiteListEntry>];
  add(arg0: UserWhiteListEntry): void;
  getUserList(): Array<string>;
  isWhiteListed(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  remove(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): void;
}
export type UserWhiteList = UserWhiteListMembers & StoredUserList<JavaOpaque<"com.mojang.authlib.GameProfile">, UserWhiteListEntry>;
export interface UserWhiteListStatics {
  new(arg0: JavaOpaque<"java.io.File">): UserWhiteList;
}

/** JVM class net.minecraft.server.players.UserWhiteListEntry. */
export interface UserWhiteListEntryMembers {
  readonly __javaSupertypes?: readonly [StoredUserEntry<JavaOpaque<"com.mojang.authlib.GameProfile">>];
}
export type UserWhiteListEntry = UserWhiteListEntryMembers & StoredUserEntry<JavaOpaque<"com.mojang.authlib.GameProfile">>;
export interface UserWhiteListEntryStatics {
  new(arg0: JavaOpaque<"com.google.gson.JsonObject">): UserWhiteListEntry;
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): UserWhiteListEntry;
}
