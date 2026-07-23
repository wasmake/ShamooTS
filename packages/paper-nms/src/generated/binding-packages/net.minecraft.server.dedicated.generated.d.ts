// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_level_progress from './net.minecraft.server.level.progress.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_server_players from './net.minecraft.server.players.generated.js';
import type * as j_net_minecraft_server_rcon from './net.minecraft.server.rcon.generated.js';
import type * as j_net_minecraft_util_debugchart from './net.minecraft.util.debugchart.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.server.dedicated.DedicatedPlayerList. */
export interface DedicatedPlayerListMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_players.PlayerList];
  canBypassPlayerLimit(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  deop(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): void;
  getServer(): j_net_minecraft_server.MinecraftServer;
  getServer(): DedicatedServer;
  isWhiteListed(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  loadAndSaveFiles(): void;
  op(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): void;
  reloadWhiteList(): void;
  setUsingWhiteList(arg0: boolean): void;
}
export type DedicatedPlayerList = DedicatedPlayerListMembers & j_net_minecraft_server_players.PlayerList;
export interface DedicatedPlayerListStatics {
  new(arg0: DedicatedServer, arg1: j_net_minecraft_core.LayeredRegistryAccess<j_net_minecraft_server.RegistryLayer>, arg2: j_net_minecraft_world_level_storage.PlayerDataStorage): DedicatedPlayerList;
}

/** JVM class net.minecraft.server.dedicated.DedicatedServer. */
export interface DedicatedServerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server.MinecraftServer, j_net_minecraft_server.ServerInterface];
  acceptsTransfers(): boolean;
  convertOldUsers(): boolean;
  createTextFilterForPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_server_network.TextFilter;
  /** @throws java.io.IOException */
  dumpServerProperties(arg0: JavaOpaque<"java.nio.file.Path">): void;
  endMetricsRecordingTick(): void;
  enforceSecureProfile(): boolean;
  fillServerSystemReport(arg0: j_net_minecraft.SystemReport): j_net_minecraft.SystemReport;
  forceDifficulty(): void;
  forceSynchronousWrites(): boolean;
  getAbsoluteMaxWorldSize(): number;
  getBukkitSender(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"org.bukkit.command.CommandSender">;
  getCompressionThreshold(): number;
  getForcedGameType(): j_net_minecraft_world_level.GameType | null;
  getFunctionCompilationLevel(): number;
  getLevelIdName(): string;
  getMaxChainedNeighborUpdates(): number;
  getMaxTickLength(): bigint;
  getOperatorUserPermissionLevel(): number;
  getPlayerList(): DedicatedPlayerList;
  getPlayerList(): j_net_minecraft_server_players.PlayerList;
  getPluginNames(): string;
  getPluginsFolder(): JavaOpaque<"java.io.File">;
  getProperties(): DedicatedServerProperties;
  getRateLimitPacketsPerSecond(): number;
  getScaledTrackingDistance(arg0: number): number;
  getServerIp(): string;
  getServerName(): string;
  getServerPort(): number;
  getServerResourcePack(): JavaOptional<j_net_minecraft_server.MinecraftServer_ServerResourcePackInfo>;
  getSpawnProtectionRadius(): number;
  getTickTimeLogger(): j_net_minecraft_util_debugchart.SampleLogger;
  handleConsoleInput(arg0: string, arg1: j_net_minecraft_commands.CommandSourceStack): void;
  handleConsoleInputs(): void;
  hasGui(): boolean;
  hidesOnlinePlayers(): boolean;
  /** @throws java.io.IOException */
  initServer(): boolean;
  isCommandBlockEnabled(): boolean;
  isDebugging(): boolean;
  isDedicatedServer(): boolean;
  isEpollEnabled(): boolean;
  isLevelEnabled(arg0: j_net_minecraft_world_level.Level): boolean;
  isPublished(): boolean;
  isSingleplayerOwner(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  isSpawningMonsters(): boolean;
  isTickTimeLoggingEnabled(): boolean;
  isUnderSpawnProtection(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_player.Player): boolean;
  logIPs(): boolean;
  onServerExit(): void;
  pauseWhileEmptySeconds(): number;
  repliesToStatus(): boolean;
  runCommand(arg0: string): string;
  runCommand(arg0: j_net_minecraft_server_rcon.RconConsoleSource, arg1: string): string;
  serverLinks: (j_net_minecraft_server.ServerLinks) & { (): j_net_minecraft_server.ServerLinks };
  setPlayerIdleTimeout(arg0: number): void;
  settings: DedicatedServerSettings;
  shouldInformAdmins(): boolean;
  shouldRconBroadcast(): boolean;
  showGui(): void;
  stopServer(): void;
  storeUsingWhiteList(arg0: boolean): void;
  subscribeToDebugSample(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_util_debugchart.RemoteDebugSampleType): void;
  tickConnection(): void;
}
export type DedicatedServer = DedicatedServerMembers & j_net_minecraft_server.MinecraftServer & j_net_minecraft_server.ServerInterface;
export interface DedicatedServerStatics {
  new(arg0: JavaOpaque<"joptsimple.OptionSet">, arg1: j_net_minecraft_server.WorldLoader_DataLoadContext, arg2: JavaOpaque<"java.lang.Thread">, arg3: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg4: j_net_minecraft_server_packs_repository.PackRepository, arg5: j_net_minecraft_server.WorldStem, arg6: DedicatedServerSettings, arg7: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg8: j_net_minecraft_server.Services, arg9: j_net_minecraft_server_level_progress.ChunkProgressListenerFactory): DedicatedServer;
}

/** JVM class net.minecraft.server.dedicated.DedicatedServerProperties. */
export interface DedicatedServerPropertiesMembers {
  readonly __javaSupertypes?: readonly [Settings<DedicatedServerProperties>];
  acceptsTransfers: boolean;
  readonly allowFlight: boolean;
  readonly allowNether: boolean;
  readonly announcePlayerAchievements: boolean | null;
  readonly broadcastConsoleToOps: boolean;
  readonly broadcastRconToOps: boolean;
  readonly bugReportLink: string;
  cloneProperties(): JavaOpaque<"java.util.Properties">;
  createDimensions(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_level_levelgen.WorldDimensions;
  readonly debug: boolean;
  readonly difficulty: j_net_minecraft_world.Difficulty;
  readonly enableCommandBlock: boolean;
  readonly enableJmxMonitoring: boolean;
  readonly enableQuery: boolean;
  readonly enableRcon: boolean;
  readonly enableStatus: boolean;
  readonly enforceSecureProfile: boolean;
  readonly enforceWhitelist: boolean;
  readonly entityBroadcastRangePercentage: number;
  readonly forceGameMode: boolean;
  readonly functionPermissionLevel: number;
  readonly gamemode: j_net_minecraft_world_level.GameType;
  get(arg0: string, arg1: number): number;
  get(arg0: string, arg1: bigint): bigint;
  get(arg0: string, arg1: string): string;
  get<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: V): V;
  get<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: JavaFunction<V, string>, arg3: V): V;
  get<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: JavaOpaque<"java.util.function.UnaryOperator", [V]>, arg3: JavaFunction<V, string>, arg4: V): V;
  get(arg0: string, arg1: JavaOpaque<"java.util.function.UnaryOperator", [number]>, arg2: number): number;
  get(arg0: string, arg1: boolean): boolean;
  getLegacy<V>(arg0: string, arg1: JavaFunction<string, V>): V | null;
  getLegacyBoolean(arg0: string): boolean | null;
  getLegacyString(arg0: string): string | null;
  getMutable(arg0: string, arg1: number): Settings_MutableValue<number>;
  getMutable<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: V): Settings_MutableValue<V>;
  getMutable<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: JavaFunction<V, string>, arg3: V): Settings_MutableValue<V>;
  getMutable(arg0: string, arg1: boolean): Settings_MutableValue<boolean>;
  getStringRaw(arg0: string): string | null;
  readonly hardcore: boolean;
  readonly hideOnlinePlayers: boolean;
  readonly initialDataPackConfiguration: j_net_minecraft_world_level.DataPackConfig;
  readonly levelName: string;
  readonly logIPs: boolean;
  readonly maxChainedNeighborUpdates: number;
  readonly maxPlayers: number;
  readonly maxTickTime: bigint;
  readonly maxWorldSize: number;
  readonly motd: string;
  readonly networkCompressionThreshold: number;
  readonly onlineMode: boolean;
  readonly opPermissionLevel: number;
  pauseWhenEmptySeconds: number;
  readonly playerIdleTimeout: Settings_MutableValue<number>;
  readonly preventProxyConnections: boolean;
  readonly properties: JavaOpaque<"java.util.Properties">;
  readonly pvp: boolean;
  readonly queryPort: number;
  readonly rateLimitPacketsPerSecond: number;
  readonly rconIp: string;
  readonly rconPassword: string;
  readonly rconPort: number;
  readonly regionFileComression: string;
  reload(arg0: j_net_minecraft_core.RegistryAccess, arg1: JavaOpaque<"java.util.Properties">, arg2: JavaOpaque<"joptsimple.OptionSet">): DedicatedServerProperties;
  reload(arg0: j_net_minecraft_core.RegistryAccess, arg1: JavaOpaque<"java.util.Properties">, arg2: JavaOpaque<"joptsimple.OptionSet">): Settings;
  readonly serverIp: string;
  readonly serverPort: number;
  readonly serverResourcePackInfo: JavaOptional<j_net_minecraft_server.MinecraftServer_ServerResourcePackInfo>;
  readonly simulationDistance: number;
  readonly spawnMonsters: boolean;
  readonly spawnProtection: number;
  store(arg0: JavaOpaque<"java.nio.file.Path">): void;
  readonly syncChunkWrites: boolean;
  readonly textFilteringConfig: string;
  readonly textFilteringVersion: number;
  readonly useNativeTransport: boolean;
  readonly viewDistance: number;
  readonly whiteList: Settings_MutableValue<boolean>;
  readonly worldOptions: j_net_minecraft_world_level_levelgen.WorldOptions;
}
export type DedicatedServerProperties = DedicatedServerPropertiesMembers;
export interface DedicatedServerPropertiesStatics {
  new(arg0: JavaOpaque<"java.util.Properties">, arg1: JavaOpaque<"joptsimple.OptionSet">): DedicatedServerProperties;
  fromFile(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"joptsimple.OptionSet">): DedicatedServerProperties;
}

/** JVM record net.minecraft.server.dedicated.DedicatedServerProperties$WorldDimensionData. */
export interface DedicatedServerProperties_WorldDimensionDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  create(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_level_levelgen.WorldDimensions;
  equals(arg0: object): boolean;
  generatorSettings(): JavaOpaque<"com.google.gson.JsonObject">;
  hashCode(): number;
  levelType(): string;
  toString(): string;
}
export type DedicatedServerProperties_WorldDimensionData = DedicatedServerProperties_WorldDimensionDataMembers & JavaOpaque<"java.lang.Record">;
export interface DedicatedServerProperties_WorldDimensionDataStatics {
  new(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): DedicatedServerProperties_WorldDimensionData;
}

/** JVM class net.minecraft.server.dedicated.DedicatedServerSettings. */
export interface DedicatedServerSettingsMembers {
  forceSave(): void;
  getProperties(): DedicatedServerProperties;
  update(arg0: JavaOpaque<"java.util.function.UnaryOperator", [DedicatedServerProperties]>): DedicatedServerSettings;
}
export type DedicatedServerSettings = DedicatedServerSettingsMembers;
export interface DedicatedServerSettingsStatics {
  new(arg0: JavaOpaque<"joptsimple.OptionSet">): DedicatedServerSettings;
}

/** JVM class net.minecraft.server.dedicated.ServerWatchdog. */
export interface ServerWatchdogMembers {
  readonly __javaSupertypes?: readonly [JavaRunnable];
  run(): void;
}
export type ServerWatchdog = ServerWatchdogMembers & JavaRunnable;
export interface ServerWatchdogStatics {
  new(arg0: DedicatedServer): ServerWatchdog;
  createWatchdogCrashReport(arg0: string, arg1: bigint): j_net_minecraft.CrashReport;
}

/** JVM abstract net.minecraft.server.dedicated.Settings. */
export interface SettingsMembers<T /* extends Settings<T> */ = unknown> {
  cloneProperties(): JavaOpaque<"java.util.Properties">;
  get(arg0: string, arg1: number): number;
  get(arg0: string, arg1: bigint): bigint;
  get(arg0: string, arg1: string): string;
  get<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: V): V;
  get<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: JavaFunction<V, string>, arg3: V): V;
  get<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: JavaOpaque<"java.util.function.UnaryOperator", [V]>, arg3: JavaFunction<V, string>, arg4: V): V;
  get(arg0: string, arg1: JavaOpaque<"java.util.function.UnaryOperator", [number]>, arg2: number): number;
  get(arg0: string, arg1: boolean): boolean;
  getLegacy<V>(arg0: string, arg1: JavaFunction<string, V>): V | null;
  getLegacyBoolean(arg0: string): boolean | null;
  getLegacyString(arg0: string): string | null;
  getMutable(arg0: string, arg1: number): Settings_MutableValue<number>;
  getMutable<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: V): Settings_MutableValue<V>;
  getMutable<V>(arg0: string, arg1: JavaFunction<string, V>, arg2: JavaFunction<V, string>, arg3: V): Settings_MutableValue<V>;
  getMutable(arg0: string, arg1: boolean): Settings_MutableValue<boolean>;
  getStringRaw(arg0: string): string | null;
  readonly properties: JavaOpaque<"java.util.Properties">;
  reload(arg0: j_net_minecraft_core.RegistryAccess, arg1: JavaOpaque<"java.util.Properties">, arg2: JavaOpaque<"joptsimple.OptionSet">): T;
  store(arg0: JavaOpaque<"java.nio.file.Path">): void;
}
export type Settings<T /* extends Settings<T> */ = unknown> = SettingsMembers<T>;
export interface SettingsStatics {
  new<T /* extends Settings<T> */>(arg0: JavaOpaque<"java.util.Properties">, arg1: JavaOpaque<"joptsimple.OptionSet">): Settings<T>;
  dispatchNumberOrString<V>(arg0: JavaOpaque<"java.util.function.IntFunction", [V]>, arg1: JavaFunction<string, V>): JavaFunction<string, V>;
  loadFromFile(arg0: JavaOpaque<"java.nio.file.Path">): JavaOpaque<"java.util.Properties">;
}

/** JVM class net.minecraft.server.dedicated.Settings$MutableValue. */
export interface Settings_MutableValueMembers<V = unknown> {
  readonly __javaSupertypes?: readonly [JavaSupplier<V>];
  get(): V;
  update(arg0: j_net_minecraft_core.RegistryAccess, arg1: V): JavaOpaque<"T">;
}
export type Settings_MutableValue<V = unknown> = Settings_MutableValueMembers<V> & JavaSupplier<V>;
export interface Settings_MutableValueStatics {
}
