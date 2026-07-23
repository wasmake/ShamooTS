// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_functions from './net.minecraft.commands.functions.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_status from './net.minecraft.network.protocol.status.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_bossevents from './net.minecraft.server.bossevents.generated.js';
import type * as j_net_minecraft_server_dedicated from './net.minecraft.server.dedicated.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_level_progress from './net.minecraft.server.level.progress.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_server_players from './net.minecraft.server.players.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_debugchart from './net.minecraft.util.debugchart.generated.js';
import type * as j_net_minecraft_util_profiling from './net.minecraft.util.profiling.generated.js';
import type * as j_net_minecraft_util_thread from './net.minecraft.util.thread.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_chunk_storage from './net.minecraft.world.level.chunk.storage.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';

/** JVM class net.minecraft.server.Bootstrap. */
export interface BootstrapMembers {
}
export type Bootstrap = BootstrapMembers;
export interface BootstrapStatics {
  new(): Bootstrap;
  readonly STDOUT: JavaOpaque<"java.io.PrintStream">;
  bootStrap(): void;
  readonly bootstrapDuration: JavaOpaque<"java.util.concurrent.atomic.AtomicLong">;
  checkBootstrapCalled(arg0: JavaSupplier<string>): void;
  getMissingTranslations(): JavaSet<string>;
  realStdoutPrintln(arg0: string): void;
  validate(): void;
}

/** JVM class net.minecraft.server.ChainedJsonException. */
export interface ChainedJsonExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.IOException">];
  getMessage(): string;
  prependJsonKey(arg0: string): void;
  setFilenameAndFlush(arg0: string): void;
}
export type ChainedJsonException = ChainedJsonExceptionMembers & JavaOpaque<"java.io.IOException">;
export interface ChainedJsonExceptionStatics {
  new(arg0: string): ChainedJsonException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): ChainedJsonException;
  forException(arg0: JavaOpaque<"java.lang.Exception">): ChainedJsonException;
}

/** JVM class net.minecraft.server.ChainedJsonException$Entry. */
export interface ChainedJsonException_EntryMembers {
  getFilename(): string | null;
  getJsonKeys(): string;
  toString(): string;
}
export type ChainedJsonException_Entry = ChainedJsonException_EntryMembers;
export interface ChainedJsonException_EntryStatics {
}

/** JVM class net.minecraft.server.ConsoleInput. */
export interface ConsoleInputMembers {
  readonly msg: string;
  readonly source: j_net_minecraft_commands.CommandSourceStack;
}
export type ConsoleInput = ConsoleInputMembers;
export interface ConsoleInputStatics {
  new(arg0: string, arg1: j_net_minecraft_commands.CommandSourceStack): ConsoleInput;
}

/** JVM class net.minecraft.server.DebugLoggedPrintStream. */
export interface DebugLoggedPrintStreamMembers {
  readonly __javaSupertypes?: readonly [LoggedPrintStream];
  logLine(arg0: string): void;
}
export type DebugLoggedPrintStream = DebugLoggedPrintStreamMembers & LoggedPrintStream;
export interface DebugLoggedPrintStreamStatics {
  new(arg0: string, arg1: JavaOpaque<"java.io.OutputStream">): DebugLoggedPrintStream;
}

/** JVM class net.minecraft.server.Eula. */
export interface EulaMembers {
  hasAgreedToEULA(): boolean;
}
export type Eula = EulaMembers;
export interface EulaStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): Eula;
}

/** JVM class net.minecraft.server.LoggedPrintStream. */
export interface LoggedPrintStreamMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.PrintStream">];
  logLine(arg0: string | null): void | null;
  readonly name: string;
  println(arg0: object): void;
  println(arg0: string | null): void | null;
}
export type LoggedPrintStream = LoggedPrintStreamMembers & JavaOpaque<"java.io.PrintStream">;
export interface LoggedPrintStreamStatics {
  new(arg0: string, arg1: JavaOpaque<"java.io.OutputStream">): LoggedPrintStream;
}

/** JVM class net.minecraft.server.Main. */
export interface Main_3Members {
}
export type Main_3 = Main_3Members;
export interface Main_3Statics {
  new(): Main_3;
  forceUpgrade(arg0: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg1: j_net_minecraft_world_level_storage.WorldData, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: boolean, arg4: JavaOpaque<"java.util.function.BooleanSupplier">, arg5: j_net_minecraft_core.RegistryAccess, arg6: boolean): void;
  main(arg0: JavaOpaque<"joptsimple.OptionSet">): void;
}

/** JVM abstract net.minecraft.server.MinecraftServer. */
export interface MinecraftServerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_thread.ReentrantBlockableEventLoop<TickTask>, ServerInfo, j_net_minecraft_world_level_chunk_storage.ChunkIOErrorReporter, j_net_minecraft_commands.CommandSource, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.server.ChunkSystemMinecraftServer">];
  abnormalExit: boolean;
  acceptsFailure(): boolean;
  acceptsSuccess(): boolean;
  acceptsTransfers(): boolean;
  addLevel(arg0: j_net_minecraft_server_level.ServerLevel): void;
  addPluginAllowingSleep(arg0: string, arg1: boolean): void;
  addTickable(arg0: JavaRunnable): void;
  autosavePeriod: number;
  cancelRecordingMetrics(): void;
  readonly chatExecutor: JavaOpaque<"java.util.concurrent.ExecutorService">;
  close(): void;
  console: JavaOpaque<"org.bukkit.command.ConsoleCommandSender">;
  createCommandSourceStack(): j_net_minecraft_commands.CommandSourceStack;
  createGameModeForPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_server_level.ServerPlayerGameMode;
  createTextFilterForPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_server_network.TextFilter;
  doRunTask(arg0: JavaRunnable): void;
  doRunTask(arg0: TickTask): void;
  /** @throws java.io.IOException */
  dumpServerProperties(arg0: JavaOpaque<"java.nio.file.Path">): void;
  endMetricsRecordingTick(): void;
  enforceSecureProfile(): boolean;
  readonly entitySchedulerTickList: JavaOpaque<"io.papermc.paper.threadedregions.EntityScheduler$EntitySchedulerTickList">;
  executeIfPossible(arg0: JavaRunnable): void;
  readonly executor: JavaOpaque<"java.util.concurrent.Executor">;
  fillServerSystemReport(arg0: j_net_minecraft.SystemReport): j_net_minecraft.SystemReport;
  fillSystemReport(arg0: j_net_minecraft.SystemReport): j_net_minecraft.SystemReport;
  finishRecordingMetrics(): void;
  readonly fixerUpper: JavaOpaque<"com.mojang.datafixers.DataFixer">;
  forceDifficulty(): void;
  forceSynchronousWrites(): boolean;
  forceTicks: boolean;
  forceTimeSynchronization(): void;
  fuelValues(): j_net_minecraft_world_level_block_entity.FuelValues;
  getAbsoluteMaxWorldSize(): number;
  getAdvancements(): ServerAdvancementManager;
  getAllLevels(): Iterable<j_net_minecraft_server_level.ServerLevel>;
  getAverageTickTimeNanos(): bigint;
  getChatDecorator(): j_net_minecraft_network_chat.ChatDecorator;
  getCommandStorage(): j_net_minecraft_world_level_storage.CommandStorage;
  getCommands(): j_net_minecraft_commands.Commands;
  getCompressionThreshold(): number;
  getConnection(): j_net_minecraft_server_network.ServerConnectionListener;
  getCurrentSmoothedTickTime(): number;
  getCustomBossEvents(): j_net_minecraft_server_bossevents.CustomBossEvents;
  getDefaultGameType(): j_net_minecraft_world_level.GameType;
  getFile(arg0: string): JavaOpaque<"java.nio.file.Path">;
  getFixerUpper(): JavaOpaque<"com.mojang.datafixers.DataFixer">;
  getForcedGameType(): j_net_minecraft_world_level.GameType | null;
  getFunctionCompilationLevel(): number;
  getFunctions(): ServerFunctionManager;
  getGameRules(): j_net_minecraft_world_level.GameRules;
  getKeyPair(): JavaOpaque<"java.security.KeyPair">;
  getLevel(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): j_net_minecraft_server_level.ServerLevel | null;
  getLocalIp(): string;
  getMaxChainedNeighborUpdates(): number;
  getMaxPlayers(): number;
  getModdedStatus(): j_net_minecraft_util.ModCheck;
  getMotd(): string;
  getNextTickTime(): bigint;
  getOperatorUserPermissionLevel(): number;
  getPackRepository(): j_net_minecraft_server_packs_repository.PackRepository;
  getPlayerCount(): number;
  getPlayerIdleTimeout(): number;
  getPlayerList(): j_net_minecraft_server_players.PlayerList;
  getPlayerNames(): Array<string>;
  getPort(): number;
  getPreventProxyConnections(): boolean;
  getProfileCache(): j_net_minecraft_server_players.GameProfileCache | null;
  getProfileKeySignatureValidator(): j_net_minecraft_util.SignatureValidator | null;
  getProfilePermissions(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): number;
  getProfileRepository(): JavaOpaque<"com.mojang.authlib.GameProfileRepository">;
  getProxy(): JavaOpaque<"java.net.Proxy">;
  getRateLimitPacketsPerSecond(): number;
  getRecipeManager(): j_net_minecraft_world_item_crafting.RecipeManager;
  getResourceManager(): j_net_minecraft_server_packs_resources.ResourceManager;
  getRunningThread(): JavaOpaque<"java.lang.Thread">;
  getScaledTrackingDistance(arg0: number): number;
  getScoreboard(): ServerScoreboard;
  getServerDirectory(): JavaOpaque<"java.nio.file.Path">;
  getServerModName(): string;
  getServerResourcePack(): JavaOptional<MinecraftServer_ServerResourcePackInfo>;
  getServerVersion(): string;
  getSessionService(): JavaOpaque<"com.mojang.authlib.minecraft.MinecraftSessionService">;
  getSingleplayerProfile(): JavaOpaque<"com.mojang.authlib.GameProfile"> | null;
  getSpawnProtectionRadius(): number;
  getSpawnRadius(arg0: j_net_minecraft_server_level.ServerLevel | null): number | null;
  getStatus(): j_net_minecraft_network_protocol_status.ServerStatus | null;
  getStructureManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  getTickCount(): number;
  getTickTimeLogger(): j_net_minecraft_util_debugchart.SampleLogger;
  getTickTimesNanos(): Array<bigint>;
  getWorldData(): j_net_minecraft_world_level_storage.WorldData;
  getWorldPath(arg0: j_net_minecraft_world_level_storage.LevelResource): JavaOpaque<"java.nio.file.Path">;
  getWorldScreenshotFile(): JavaOptional<JavaOpaque<"java.nio.file.Path">>;
  halt(arg0: boolean): void;
  handleCustomClickAction(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOptional<j_net_minecraft_nbt.Tag>): void;
  hasFullyShutdown: boolean;
  hasGui(): boolean;
  hasStopped(): boolean;
  hidesOnlinePlayers(): boolean;
  readonly improvedChatDecorator: j_net_minecraft_network_chat.ChatDecorator;
  /** @throws java.io.IOException */
  initServer(): boolean;
  initWorld(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_storage.ServerLevelData, arg2: j_net_minecraft_world_level_storage.WorldData, arg3: j_net_minecraft_world_level_levelgen.WorldOptions): void;
  initializeKeyPair(): void;
  invalidateStatus(): void;
  isCommandBlockEnabled(): boolean;
  isCurrentlySaving(): boolean;
  isDebugging(): boolean;
  isDedicatedServer(): boolean;
  isDemo(): boolean;
  isEnforceWhitelist(): boolean;
  isEpollEnabled(): boolean;
  isFlightAllowed(): boolean;
  isHardcore(): boolean;
  isIteratingOverLevels: boolean;
  isLevelEnabled(arg0: j_net_minecraft_world_level.Level): boolean;
  isPaused(): boolean;
  isPublished(): boolean;
  isPvpAllowed(): boolean;
  isReady(): boolean;
  isRecordingMetrics(): boolean;
  isResourcePackRequired(): boolean;
  isRunning(): boolean;
  isSameThread(): boolean;
  isShutdown(): boolean;
  isSingleplayer(): boolean;
  isSingleplayerOwner(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  isSpawningMonsters(): boolean;
  isStopped(): boolean;
  isTickPaused(): boolean;
  isTickTimeLoggingEnabled(): boolean;
  isTimeProfilerRunning(): boolean;
  isUnderSpawnProtection(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_player.Player): boolean;
  kickUnlistedPlayers(arg0: j_net_minecraft_commands.CommandSourceStack): void;
  levelKeys(): JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  loadLevel(arg0: string): void;
  logChatMessage(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_network_chat.ChatType_Bound, arg2: string | null): void | null;
  logIPs(): boolean;
  managedBlock(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  moonrise$executeMidTickTasks(): void;
  moonrise$setChunkSystemCrash(arg0: JavaOpaque<"java.lang.Throwable">): void;
  motd(): JavaOpaque<"net.kyori.adventure.text.Component">;
  motd(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  onServerCrash(arg0: j_net_minecraft.CrashReport): void;
  onServerExit(): void;
  onTickRateChanged(): void;
  options: JavaOpaque<"joptsimple.OptionSet">;
  overworld(): j_net_minecraft_server_level.ServerLevel;
  readonly paperConfigurations: JavaOpaque<"io.papermc.paper.configuration.PaperConfigurations">;
  pauseWhileEmptySeconds(): number;
  readonly playerDataStorage: j_net_minecraft_world_level_storage.PlayerDataStorage;
  pollTask(): boolean;
  potionBrewing: (j_net_minecraft_world_item_alchemy.PotionBrewing) & { (): j_net_minecraft_world_item_alchemy.PotionBrewing };
  prepareLevels(arg0: j_net_minecraft_server_level_progress.ChunkProgressListener, arg1: j_net_minecraft_server_level.ServerLevel): void;
  processQueue: JavaOpaque<"java.util.Queue", [JavaRunnable]>;
  readonly progressListenerFactory: j_net_minecraft_server_level_progress.ChunkProgressListenerFactory;
  readonly proxy: JavaOpaque<"java.net.Proxy">;
  publishServer(arg0: j_net_minecraft_world_level.GameType | null, arg1: boolean, arg2: number): boolean | null;
  readonly recentTps: Array<number>;
  registries(): j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>;
  registryAccess(): j_net_minecraft_core.RegistryAccess_Frozen;
  reloadResources(arg0: JavaCollection<string>): PromiseLike<void>;
  reloadResources(arg0: JavaCollection<string>, arg1: JavaOpaque<"io.papermc.paper.event.server.ServerResourcesReloadedEvent$Cause">): PromiseLike<void>;
  reloadableRegistries(): ReloadableServerRegistries_Holder;
  removeLevel(arg0: j_net_minecraft_server_level.ServerLevel): void;
  repliesToStatus(): boolean;
  reportChunkLoadFailure(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg2: j_net_minecraft_world_level.ChunkPos): void;
  reportChunkSaveFailure(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg2: j_net_minecraft_world_level.ChunkPos): void;
  reportPacketHandlingException(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_net_minecraft_network_protocol.PacketType<object>): void;
  resources: MinecraftServer_ReloadableResources;
  runServer(): void;
  safeShutdown(arg0: boolean, arg1: boolean): void;
  saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
  saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): boolean;
  saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
  scheduleExecutables(): boolean;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component): void;
  server: j_org_bukkit_craftbukkit.CraftServer;
  serverLinks(): ServerLinks;
  readonly serverThread: JavaOpaque<"java.lang.Thread">;
  readonly services: Services;
  setDefaultGameType(arg0: j_net_minecraft_world_level.GameType): void;
  setDemo(arg0: boolean): void;
  setDifficulty(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world.Difficulty, arg2: j_net_minecraft_commands.CommandSourceStack | null, arg3: boolean): void | null;
  setDifficultyLocked(arg0: boolean): void;
  setEnforceWhitelist(arg0: boolean): void;
  setFlightAllowed(arg0: boolean): void;
  setId(arg0: string): void;
  setLocalIp(arg0: string): void;
  setMotd(arg0: string): void;
  setPlayerIdleTimeout(arg0: number): void;
  setPlayerList(arg0: j_net_minecraft_server_players.PlayerList): void;
  setPort(arg0: number): void;
  setPreventProxyConnections(arg0: boolean): void;
  setPvpAllowed(arg0: boolean): void;
  setSingleplayerProfile(arg0: JavaOpaque<"com.mojang.authlib.GameProfile"> | null): void | null;
  setUsesAuthentication(arg0: boolean): void;
  shouldInformAdmins(): boolean;
  shouldRconBroadcast(): boolean;
  shouldRun(arg0: JavaRunnable): boolean;
  shouldRun(arg0: TickTask): boolean;
  shutdownThread: JavaOpaque<"java.lang.Thread">;
  startRecordingMetrics(arg0: JavaConsumer<j_net_minecraft_util_profiling.ProfileResults>, arg1: JavaConsumer<JavaOpaque<"java.nio.file.Path">>): void;
  startTimeProfiler(): void;
  stopRecordingMetrics(): void;
  stopServer(): void;
  stopTimeProfiler(): j_net_minecraft_util_profiling.ProfileResults;
  storageSource: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess;
  subscribeToDebugSample(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_util_debugchart.RemoteDebugSampleType): void;
  tickChildren(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  tickConnection(): void;
  tickRateManager(): ServerTickRateManager;
  tickServer(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  readonly tickTimes10s: MinecraftServer_TickTimes;
  readonly tickTimes5s: MinecraftServer_TickTimes;
  readonly tickTimes60s: MinecraftServer_TickTimes;
  readonly tps1: MinecraftServer_RollingAverage;
  readonly tps15: MinecraftServer_RollingAverage;
  readonly tps5: MinecraftServer_RollingAverage;
  usesAuthentication(): boolean;
  waitForTasks(): void;
  waitUntilNextTick(): void;
  worldData: j_net_minecraft_world_level_storage.WorldData;
  readonly worldLoader: WorldLoader_DataLoadContext;
  wrapRunnable(arg0: JavaRunnable): JavaRunnable;
  wrapRunnable(arg0: JavaRunnable): TickTask;
}
export type MinecraftServer = MinecraftServerMembers & j_net_minecraft_util_thread.ReentrantBlockableEventLoop<TickTask> & ServerInfo & j_net_minecraft_world_level_chunk_storage.ChunkIOErrorReporter & j_net_minecraft_commands.CommandSource & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.server.ChunkSystemMinecraftServer">;
export interface MinecraftServerStatics {
  new(arg0: JavaOpaque<"joptsimple.OptionSet">, arg1: WorldLoader_DataLoadContext, arg2: JavaOpaque<"java.lang.Thread">, arg3: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg4: j_net_minecraft_server_packs_repository.PackRepository, arg5: WorldStem, arg6: JavaOpaque<"java.net.Proxy">, arg7: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg8: Services, arg9: j_net_minecraft_server_level_progress.ChunkProgressListenerFactory): MinecraftServer;
  readonly ABSOLUTE_MAX_WORLD_SIZE: 29999984;
  readonly ANONYMOUS_PLAYER_PROFILE: JavaOpaque<"com.mojang.authlib.GameProfile">;
  readonly COMPONENT_LOGGER: JavaOpaque<"net.kyori.adventure.text.logger.slf4j.ComponentLogger">;
  readonly DEMO_SETTINGS: j_net_minecraft_world_level.LevelSettings;
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  readonly SERVER_INIT: bigint;
  readonly TICK_TIME: 50000000;
  readonly TPS: 20;
  readonly VANILLA_BRAND: "vanilla";
  configurePackRepository(arg0: j_net_minecraft_server_packs_repository.PackRepository, arg1: j_net_minecraft_world_level.WorldDataConfiguration, arg2: boolean, arg3: boolean): j_net_minecraft_world_level.WorldDataConfiguration;
  readonly currentTick: number;
  getServer(): MinecraftServer;
  setFatalException(arg0: JavaOpaque<"java.lang.RuntimeException">): void;
  spin<S /* extends MinecraftServer */>(arg0: JavaFunction<JavaOpaque<"java.lang.Thread">, S>): S;
  throwIfFatalException(): boolean;
}

/** JVM record net.minecraft.server.MinecraftServer$ReloadableResources. */
export interface MinecraftServer_ReloadableResourcesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  managers(): ReloadableServerResources;
  resourceManager(): j_net_minecraft_server_packs_resources.CloseableResourceManager;
  toString(): string;
}
export type MinecraftServer_ReloadableResources = MinecraftServer_ReloadableResourcesMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"java.lang.AutoCloseable">;
export interface MinecraftServer_ReloadableResourcesStatics {
  new(arg0: j_net_minecraft_server_packs_resources.CloseableResourceManager, arg1: ReloadableServerResources): MinecraftServer_ReloadableResources;
}

/** JVM class net.minecraft.server.MinecraftServer$RollingAverage. */
export interface MinecraftServer_RollingAverageMembers {
  add(arg0: JavaOpaque<"java.math.BigDecimal">, arg1: bigint): void;
  getAverage(): number;
}
export type MinecraftServer_RollingAverage = MinecraftServer_RollingAverageMembers;
export interface MinecraftServer_RollingAverageStatics {
}

/** JVM record net.minecraft.server.MinecraftServer$ServerResourcePackInfo. */
export interface MinecraftServer_ServerResourcePackInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hash(): string;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  isRequired(): boolean;
  prompt(): j_net_minecraft_network_chat.Component | null;
  toString(): string;
  url(): string;
}
export type MinecraftServer_ServerResourcePackInfo = MinecraftServer_ServerResourcePackInfoMembers & JavaOpaque<"java.lang.Record">;
export interface MinecraftServer_ServerResourcePackInfoStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: string, arg3: boolean, arg4: j_net_minecraft_network_chat.Component | null): MinecraftServer_ServerResourcePackInfo;
}

/** JVM class net.minecraft.server.MinecraftServer$TickTimes. */
export interface MinecraftServer_TickTimesMembers {
  getAverage(): number;
  getTimes(): Array<bigint>;
}
export type MinecraftServer_TickTimes = MinecraftServer_TickTimesMembers;
export interface MinecraftServer_TickTimesStatics {
  new(arg0: number): MinecraftServer_TickTimes;
}

/** JVM class net.minecraft.server.PlayerAdvancements. */
export interface PlayerAdvancementsMembers {
  award(arg0: j_net_minecraft_advancements.AdvancementHolder, arg1: string): boolean;
  readonly criterionData: JavaMap<j_net_minecraft_advancements_critereon.SimpleCriterionTrigger<object>, JavaSet<j_net_minecraft_advancements.CriterionTrigger_Listener<object>>>;
  flushDirty(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean): void;
  getOrStartProgress(arg0: j_net_minecraft_advancements.AdvancementHolder): j_net_minecraft_advancements.AdvancementProgress;
  reload(arg0: ServerAdvancementManager): void;
  revoke(arg0: j_net_minecraft_advancements.AdvancementHolder, arg1: string): boolean;
  save(): void;
  setPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  setSelectedTab(arg0: j_net_minecraft_advancements.AdvancementHolder | null): void | null;
  stopListening(): void;
}
export type PlayerAdvancements = PlayerAdvancementsMembers;
export interface PlayerAdvancementsStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg1: j_net_minecraft_server_players.PlayerList, arg2: ServerAdvancementManager, arg3: JavaOpaque<"java.nio.file.Path">, arg4: j_net_minecraft_server_level.ServerPlayer): PlayerAdvancements;
}

/** Live JVM enum net.minecraft.server.RegistryLayer; constants are host handles, not strings. */
export type RegistryLayer = JavaEnum<"net.minecraft.server.RegistryLayer", "DIMENSIONS" | "RELOADABLE" | "STATIC" | "WORLDGEN"> & RegistryLayerMembers;
export interface RegistryLayerMembers {
}
export interface RegistryLayerStatics {
  readonly DIMENSIONS: RegistryLayer;
  readonly RELOADABLE: RegistryLayer;
  readonly STATIC: RegistryLayer;
  readonly WORLDGEN: RegistryLayer;
  readonly STATIC_ACCESS: j_net_minecraft_core.RegistryAccess_Frozen;
  createRegistryAccess(): j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>;
  valueOf(arg0: string): RegistryLayer;
  values(): Array<RegistryLayer>;
}

/** JVM class net.minecraft.server.ReloadableServerRegistries. */
export interface ReloadableServerRegistriesMembers {
}
export type ReloadableServerRegistries = ReloadableServerRegistriesMembers;
export interface ReloadableServerRegistriesStatics {
  new(): ReloadableServerRegistries;
  reload(arg0: j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>, arg1: JavaList<j_net_minecraft_core.Registry_PendingTags<object>>, arg2: j_net_minecraft_server_packs_resources.ResourceManager, arg3: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<ReloadableServerRegistries_LoadResult>;
}

/** JVM class net.minecraft.server.ReloadableServerRegistries$Holder. */
export interface ReloadableServerRegistries_HolderMembers {
  getLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): j_net_minecraft_world_level_storage_loot.LootTable;
  lookup(): j_net_minecraft_core.HolderLookup_Provider;
}
export type ReloadableServerRegistries_Holder = ReloadableServerRegistries_HolderMembers;
export interface ReloadableServerRegistries_HolderStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): ReloadableServerRegistries_Holder;
}

/** JVM record net.minecraft.server.ReloadableServerRegistries$LoadResult. */
export interface ReloadableServerRegistries_LoadResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  layers(): j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>;
  lookupWithUpdatedTags(): j_net_minecraft_core.HolderLookup_Provider;
  toString(): string;
}
export type ReloadableServerRegistries_LoadResult = ReloadableServerRegistries_LoadResultMembers & JavaOpaque<"java.lang.Record">;
export interface ReloadableServerRegistries_LoadResultStatics {
  new(arg0: j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>, arg1: j_net_minecraft_core.HolderLookup_Provider): ReloadableServerRegistries_LoadResult;
}

/** JVM class net.minecraft.server.ReloadableServerResources. */
export interface ReloadableServerResourcesMembers {
  commands: j_net_minecraft_commands.Commands;
  fullRegistries(): ReloadableServerRegistries_Holder;
  getAdvancements(): ServerAdvancementManager;
  getCommands(): j_net_minecraft_commands.Commands;
  getFunctionLibrary(): ServerFunctionLibrary;
  getRecipeManager(): j_net_minecraft_world_item_crafting.RecipeManager;
  listeners(): JavaList<j_net_minecraft_server_packs_resources.PreparableReloadListener>;
  updateStaticRegistryTags(): void;
}
export type ReloadableServerResources = ReloadableServerResourcesMembers;
export interface ReloadableServerResourcesStatics {
  loadResources(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>, arg2: JavaList<j_net_minecraft_core.Registry_PendingTags<object>>, arg3: j_net_minecraft_world_flag.FeatureFlagSet, arg4: j_net_minecraft_commands.Commands_CommandSelection, arg5: number, arg6: JavaOpaque<"java.util.concurrent.Executor">, arg7: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<ReloadableServerResources>;
}

/** JVM class net.minecraft.server.RunningOnDifferentThreadException. */
export interface RunningOnDifferentThreadExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  fillInStackTrace(): JavaOpaque<"java.lang.Throwable">;
}
export type RunningOnDifferentThreadException = RunningOnDifferentThreadExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface RunningOnDifferentThreadExceptionStatics {
  readonly RUNNING_ON_DIFFERENT_THREAD: RunningOnDifferentThreadException;
}

/** JVM class net.minecraft.server.ServerAdvancementManager. */
export interface ServerAdvancementManagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_packs_resources.SimpleJsonResourceReloadListener<j_net_minecraft_advancements.Advancement>];
  advancements: JavaMap<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_advancements.AdvancementHolder>;
  apply(arg0: object, arg1: j_net_minecraft_server_packs_resources.ResourceManager, arg2: j_net_minecraft_util_profiling.ProfilerFiller): void;
  apply(arg0: JavaMap<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_advancements.Advancement>, arg1: j_net_minecraft_server_packs_resources.ResourceManager, arg2: j_net_minecraft_util_profiling.ProfilerFiller): void;
  get(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_advancements.AdvancementHolder | null;
  getAllAdvancements(): JavaCollection<j_net_minecraft_advancements.AdvancementHolder>;
  tree(): j_net_minecraft_advancements.AdvancementTree;
}
export type ServerAdvancementManager = ServerAdvancementManagerMembers & j_net_minecraft_server_packs_resources.SimpleJsonResourceReloadListener<j_net_minecraft_advancements.Advancement>;
export interface ServerAdvancementManagerStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): ServerAdvancementManager;
}

/** JVM class net.minecraft.server.ServerFunctionLibrary. */
export interface ServerFunctionLibraryMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_packs_resources.PreparableReloadListener];
  getAvailableTags(): Iterable<j_net_minecraft_resources.ResourceLocation>;
  getFunction(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
  getFunctions(): JavaMap<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
  getTag(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
  reload(arg0: j_net_minecraft_server_packs_resources.PreparableReloadListener_PreparationBarrier, arg1: j_net_minecraft_server_packs_resources.ResourceManager, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<void>;
}
export type ServerFunctionLibrary = ServerFunctionLibraryMembers & j_net_minecraft_server_packs_resources.PreparableReloadListener;
export interface ServerFunctionLibraryStatics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): ServerFunctionLibrary;
  readonly TYPE_KEY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>>;
}

/** JVM class net.minecraft.server.ServerFunctionManager. */
export interface ServerFunctionManagerMembers {
  execute(arg0: j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>, arg1: j_net_minecraft_commands.CommandSourceStack): void;
  get(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
  getDispatcher(): JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>;
  getFunctionNames(): Iterable<j_net_minecraft_resources.ResourceLocation>;
  getGameLoopSender(): j_net_minecraft_commands.CommandSourceStack;
  getTag(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
  getTagNames(): Iterable<j_net_minecraft_resources.ResourceLocation>;
  replaceLibrary(arg0: ServerFunctionLibrary): void;
  tick(): void;
}
export type ServerFunctionManager = ServerFunctionManagerMembers;
export interface ServerFunctionManagerStatics {
  new(arg0: MinecraftServer, arg1: ServerFunctionLibrary): ServerFunctionManager;
}

/** JVM interface net.minecraft.server.ServerInfo. */
export interface ServerInfoMembers {
  getMaxPlayers(): number;
  getMotd(): string;
  getPlayerCount(): number;
  getServerVersion(): string;
}
export type ServerInfo = ServerInfoMembers;
export interface ServerInfoStatics {
}

/** JVM interface net.minecraft.server.ServerInterface. */
export interface ServerInterfaceMembers {
  readonly __javaSupertypes?: readonly [ServerInfo];
  getLevelIdName(): string;
  getPlayerNames(): Array<string>;
  getPluginNames(): string;
  getProperties(): j_net_minecraft_server_dedicated.DedicatedServerProperties;
  getServerIp(): string;
  getServerName(): string;
  getServerPort(): number;
  runCommand(arg0: string): string;
}
export type ServerInterface = ServerInterfaceMembers & ServerInfo;
export interface ServerInterfaceStatics {
}

/** JVM record net.minecraft.server.ServerLinks. */
export interface ServerLinksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  entries(): JavaList<ServerLinks_Entry>;
  equals(arg0: object): boolean;
  findKnownType(arg0: ServerLinks_KnownLinkType): JavaOptional<ServerLinks_Entry>;
  hashCode(): number;
  isEmpty(): boolean;
  toString(): string;
  untrust(): JavaList<ServerLinks_UntrustedEntry>;
}
export type ServerLinks = ServerLinksMembers & JavaOpaque<"java.lang.Record">;
export interface ServerLinksStatics {
  new(arg0: JavaList<ServerLinks_Entry>): ServerLinks;
  readonly EMPTY: ServerLinks;
  readonly TYPE_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOpaque<"com.mojang.datafixers.util.Either", [ServerLinks_KnownLinkType, j_net_minecraft_network_chat.Component]>>;
  readonly UNTRUSTED_LINKS_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaList<ServerLinks_UntrustedEntry>>;
}

/** JVM record net.minecraft.server.ServerLinks$Entry. */
export interface ServerLinks_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  displayName(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  link(): JavaOpaque<"java.net.URI">;
  toString(): string;
  type(): JavaOpaque<"com.mojang.datafixers.util.Either", [ServerLinks_KnownLinkType, j_net_minecraft_network_chat.Component]>;
}
export type ServerLinks_Entry = ServerLinks_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface ServerLinks_EntryStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.util.Either", [ServerLinks_KnownLinkType, j_net_minecraft_network_chat.Component]>, arg1: JavaOpaque<"java.net.URI">): ServerLinks_Entry;
  custom(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"java.net.URI">): ServerLinks_Entry;
  knownType(arg0: ServerLinks_KnownLinkType, arg1: JavaOpaque<"java.net.URI">): ServerLinks_Entry;
}

/** Live JVM enum net.minecraft.server.ServerLinks$KnownLinkType; constants are host handles, not strings. */
export type ServerLinks_KnownLinkType = JavaEnum<"net.minecraft.server.ServerLinks$KnownLinkType", "ANNOUNCEMENTS" | "BUG_REPORT" | "COMMUNITY" | "COMMUNITY_GUIDELINES" | "FEEDBACK" | "FORUMS" | "NEWS" | "STATUS" | "SUPPORT" | "WEBSITE"> & ServerLinks_KnownLinkTypeMembers;
export interface ServerLinks_KnownLinkTypeMembers {
  create(arg0: JavaOpaque<"java.net.URI">): ServerLinks_Entry;
}
export interface ServerLinks_KnownLinkTypeStatics {
  readonly ANNOUNCEMENTS: ServerLinks_KnownLinkType;
  readonly BUG_REPORT: ServerLinks_KnownLinkType;
  readonly COMMUNITY: ServerLinks_KnownLinkType;
  readonly COMMUNITY_GUIDELINES: ServerLinks_KnownLinkType;
  readonly FEEDBACK: ServerLinks_KnownLinkType;
  readonly FORUMS: ServerLinks_KnownLinkType;
  readonly NEWS: ServerLinks_KnownLinkType;
  readonly STATUS: ServerLinks_KnownLinkType;
  readonly SUPPORT: ServerLinks_KnownLinkType;
  readonly WEBSITE: ServerLinks_KnownLinkType;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerLinks_KnownLinkType>;
  valueOf(arg0: string): ServerLinks_KnownLinkType;
  values(): Array<ServerLinks_KnownLinkType>;
}

/** JVM record net.minecraft.server.ServerLinks$UntrustedEntry. */
export interface ServerLinks_UntrustedEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  link(): string;
  toString(): string;
  type(): JavaOpaque<"com.mojang.datafixers.util.Either", [ServerLinks_KnownLinkType, j_net_minecraft_network_chat.Component]>;
}
export type ServerLinks_UntrustedEntry = ServerLinks_UntrustedEntryMembers & JavaOpaque<"java.lang.Record">;
export interface ServerLinks_UntrustedEntryStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.util.Either", [ServerLinks_KnownLinkType, j_net_minecraft_network_chat.Component]>, arg1: string): ServerLinks_UntrustedEntry;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerLinks_UntrustedEntry>;
}

/** JVM class net.minecraft.server.ServerScoreboard. */
export interface ServerScoreboardMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_scores.Scoreboard];
  addDirtyListener(arg0: JavaRunnable): void;
  addPlayerToTeam(arg0: string, arg1: j_net_minecraft_world_scores.PlayerTeam): boolean;
  addPlayersToTeam(arg0: JavaCollection<string>, arg1: j_net_minecraft_world_scores.PlayerTeam): boolean;
  getObjectiveDisplaySlotCount(arg0: j_net_minecraft_world_scores.Objective): number;
  getStartTrackingPackets(arg0: j_net_minecraft_world_scores.Objective): JavaList<j_net_minecraft_network_protocol.Packet<object>>;
  getStopTrackingPackets(arg0: j_net_minecraft_world_scores.Objective): JavaList<j_net_minecraft_network_protocol.Packet<object>>;
  onObjectiveAdded(arg0: j_net_minecraft_world_scores.Objective): void;
  onObjectiveChanged(arg0: j_net_minecraft_world_scores.Objective): void;
  onObjectiveRemoved(arg0: j_net_minecraft_world_scores.Objective): void;
  onPlayerRemoved(arg0: j_net_minecraft_world_scores.ScoreHolder): void;
  onPlayerScoreRemoved(arg0: j_net_minecraft_world_scores.ScoreHolder, arg1: j_net_minecraft_world_scores.Objective): void;
  onScoreChanged(arg0: j_net_minecraft_world_scores.ScoreHolder, arg1: j_net_minecraft_world_scores.Objective, arg2: j_net_minecraft_world_scores.Score): void;
  onScoreLockChanged(arg0: j_net_minecraft_world_scores.ScoreHolder, arg1: j_net_minecraft_world_scores.Objective): void;
  onTeamAdded(arg0: j_net_minecraft_world_scores.PlayerTeam): void;
  onTeamChanged(arg0: j_net_minecraft_world_scores.PlayerTeam): void;
  onTeamRemoved(arg0: j_net_minecraft_world_scores.PlayerTeam): void;
  removePlayerFromTeam(arg0: string, arg1: j_net_minecraft_world_scores.PlayerTeam): void;
  removePlayersFromTeam(arg0: JavaCollection<string>, arg1: j_net_minecraft_world_scores.PlayerTeam): void;
  setDirty(): void;
  setDisplayObjective(arg0: j_net_minecraft_world_scores.DisplaySlot, arg1: j_net_minecraft_world_scores.Objective | null): void | null;
  startTrackingObjective(arg0: j_net_minecraft_world_scores.Objective): void;
  stopTrackingObjective(arg0: j_net_minecraft_world_scores.Objective): void;
}
export type ServerScoreboard = ServerScoreboardMembers & j_net_minecraft_world_scores.Scoreboard;
export interface ServerScoreboardStatics {
  new(arg0: MinecraftServer): ServerScoreboard;
  readonly TYPE: j_net_minecraft_world_level_saveddata.SavedDataType<j_net_minecraft_world_scores.ScoreboardSaveData>;
}

/** JVM class net.minecraft.server.ServerTickRateManager. */
export interface ServerTickRateManagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.TickRateManager];
  checkShouldSprintThisTick(): boolean;
  endTickWork(): void;
  isSprinting(): boolean;
  requestGameToSprint(arg0: number): boolean;
  requestGameToSprint(arg0: number, arg1: boolean): boolean;
  setFrozen(arg0: boolean): void;
  setTickRate(arg0: number): void;
  stepGameIfPaused(arg0: number): boolean;
  stopSprinting(): boolean;
  stopStepping(): boolean;
  updateJoiningPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type ServerTickRateManager = ServerTickRateManagerMembers & j_net_minecraft_world.TickRateManager;
export interface ServerTickRateManagerStatics {
  new(arg0: MinecraftServer): ServerTickRateManager;
}

/** JVM record net.minecraft.server.Services. */
export interface ServicesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  canValidateProfileKeys(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  paperConfigurations(): JavaOpaque<"io.papermc.paper.configuration.PaperConfigurations">;
  profileCache(): j_net_minecraft_server_players.GameProfileCache;
  profileKeySignatureValidator(): j_net_minecraft_util.SignatureValidator | null;
  profileRepository(): JavaOpaque<"com.mojang.authlib.GameProfileRepository">;
  servicesKeySet(): JavaOpaque<"com.mojang.authlib.yggdrasil.ServicesKeySet">;
  sessionService(): JavaOpaque<"com.mojang.authlib.minecraft.MinecraftSessionService">;
  toString(): string;
}
export type Services = ServicesMembers & JavaOpaque<"java.lang.Record">;
export interface ServicesStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.minecraft.MinecraftSessionService">, arg1: JavaOpaque<"com.mojang.authlib.yggdrasil.ServicesKeySet">, arg2: JavaOpaque<"com.mojang.authlib.GameProfileRepository">, arg3: j_net_minecraft_server_players.GameProfileCache): Services;
  new(arg0: JavaOpaque<"com.mojang.authlib.minecraft.MinecraftSessionService">, arg1: JavaOpaque<"com.mojang.authlib.yggdrasil.ServicesKeySet">, arg2: JavaOpaque<"com.mojang.authlib.GameProfileRepository">, arg3: j_net_minecraft_server_players.GameProfileCache, arg4: JavaOpaque<"io.papermc.paper.configuration.PaperConfigurations"> | null): Services;
  readonly USERID_CACHE_FILE: "usercache.json";
  /** @throws java.lang.Exception */
  create(arg0: JavaOpaque<"com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService">, arg1: JavaOpaque<"java.io.File">, arg2: JavaOpaque<"java.io.File">, arg3: JavaOpaque<"joptsimple.OptionSet">): Services;
}

/** JVM class net.minecraft.server.SuppressedExceptionCollector. */
export interface SuppressedExceptionCollectorMembers {
  addEntry(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): void;
  dump(): string;
}
export type SuppressedExceptionCollector = SuppressedExceptionCollectorMembers;
export interface SuppressedExceptionCollectorStatics {
  new(): SuppressedExceptionCollector;
}

/** JVM class net.minecraft.server.TickTask. */
export interface TickTaskMembers {
  readonly __javaSupertypes?: readonly [JavaRunnable];
  getTick(): number;
  run(): void;
}
export type TickTask = TickTaskMembers & JavaRunnable;
export interface TickTaskStatics {
  new(arg0: number, arg1: JavaRunnable): TickTask;
}

/** JVM class net.minecraft.server.WorldLoader. */
export interface WorldLoaderMembers {
}
export type WorldLoader = WorldLoaderMembers;
export interface WorldLoaderStatics {
  new(): WorldLoader;
  load<D, R>(arg0: WorldLoader_InitConfig, arg1: WorldLoader_WorldDataSupplier<D>, arg2: WorldLoader_ResultFactory<D, R>, arg3: JavaOpaque<"java.util.concurrent.Executor">, arg4: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<R>;
}

/** JVM record net.minecraft.server.WorldLoader$DataLoadContext. */
export interface WorldLoader_DataLoadContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dataConfiguration(): j_net_minecraft_world_level.WorldDataConfiguration;
  datapackDimensions(): j_net_minecraft_core.RegistryAccess_Frozen;
  datapackWorldgen(): j_net_minecraft_core.HolderLookup_Provider;
  equals(arg0: object): boolean;
  hashCode(): number;
  resources(): j_net_minecraft_server_packs_resources.ResourceManager;
  toString(): string;
}
export type WorldLoader_DataLoadContext = WorldLoader_DataLoadContextMembers & JavaOpaque<"java.lang.Record">;
export interface WorldLoader_DataLoadContextStatics {
  new(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_world_level.WorldDataConfiguration, arg2: j_net_minecraft_core.HolderLookup_Provider, arg3: j_net_minecraft_core.RegistryAccess_Frozen): WorldLoader_DataLoadContext;
}

/** JVM record net.minecraft.server.WorldLoader$DataLoadOutput. */
export interface WorldLoader_DataLoadOutputMembers<D = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  cookie(): D;
  equals(arg0: object): boolean;
  finalDimensions(): j_net_minecraft_core.RegistryAccess_Frozen;
  hashCode(): number;
  toString(): string;
}
export type WorldLoader_DataLoadOutput<D = unknown> = WorldLoader_DataLoadOutputMembers<D> & JavaOpaque<"java.lang.Record">;
export interface WorldLoader_DataLoadOutputStatics {
  new<D>(arg0: D, arg1: j_net_minecraft_core.RegistryAccess_Frozen): WorldLoader_DataLoadOutput<D>;
}

/** JVM record net.minecraft.server.WorldLoader$InitConfig. */
export interface WorldLoader_InitConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  commandSelection(): j_net_minecraft_commands.Commands_CommandSelection;
  equals(arg0: object): boolean;
  functionCompilationLevel(): number;
  hashCode(): number;
  packConfig(): WorldLoader_PackConfig;
  toString(): string;
}
export type WorldLoader_InitConfig = WorldLoader_InitConfigMembers & JavaOpaque<"java.lang.Record">;
export interface WorldLoader_InitConfigStatics {
  new(arg0: WorldLoader_PackConfig, arg1: j_net_minecraft_commands.Commands_CommandSelection, arg2: number): WorldLoader_InitConfig;
}

/** JVM record net.minecraft.server.WorldLoader$PackConfig. */
export interface WorldLoader_PackConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  createResourceManager(): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_level.WorldDataConfiguration, j_net_minecraft_server_packs_resources.CloseableResourceManager]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  initMode(): boolean;
  initialDataConfig(): j_net_minecraft_world_level.WorldDataConfiguration;
  packRepository(): j_net_minecraft_server_packs_repository.PackRepository;
  safeMode(): boolean;
  toString(): string;
}
export type WorldLoader_PackConfig = WorldLoader_PackConfigMembers & JavaOpaque<"java.lang.Record">;
export interface WorldLoader_PackConfigStatics {
  new(arg0: j_net_minecraft_server_packs_repository.PackRepository, arg1: j_net_minecraft_world_level.WorldDataConfiguration, arg2: boolean, arg3: boolean): WorldLoader_PackConfig;
}

/** JVM interface net.minecraft.server.WorldLoader$ResultFactory. */
export interface WorldLoader_ResultFactoryMembers<D = unknown, R = unknown> {
  create(arg0: j_net_minecraft_server_packs_resources.CloseableResourceManager, arg1: ReloadableServerResources, arg2: j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>, arg3: D): R;
}
export type WorldLoader_ResultFactory<D = unknown, R = unknown> = WorldLoader_ResultFactoryMembers<D, R>;
export interface WorldLoader_ResultFactoryStatics {
}

/** JVM interface net.minecraft.server.WorldLoader$WorldDataSupplier. */
export interface WorldLoader_WorldDataSupplierMembers<D = unknown> {
  get(arg0: WorldLoader_DataLoadContext): WorldLoader_DataLoadOutput<D>;
}
export type WorldLoader_WorldDataSupplier<D = unknown> = WorldLoader_WorldDataSupplierMembers<D>;
export interface WorldLoader_WorldDataSupplierStatics {
}

/** JVM record net.minecraft.server.WorldStem. */
export interface WorldStemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  dataPackResources(): ReloadableServerResources;
  equals(arg0: object): boolean;
  hashCode(): number;
  registries(): j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>;
  resourceManager(): j_net_minecraft_server_packs_resources.CloseableResourceManager;
  toString(): string;
  worldData(): j_net_minecraft_world_level_storage.WorldData;
}
export type WorldStem = WorldStemMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"java.lang.AutoCloseable">;
export interface WorldStemStatics {
  new(arg0: j_net_minecraft_server_packs_resources.CloseableResourceManager, arg1: ReloadableServerResources, arg2: j_net_minecraft_core.LayeredRegistryAccess<RegistryLayer>, arg3: j_net_minecraft_world_level_storage.WorldData): WorldStem;
}
