// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_datafix from './net.minecraft.util.datafix.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_dimension_end from './net.minecraft.world.level.dimension.end.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_level_timers from './net.minecraft.world.level.timers.generated.js';
import type * as j_net_minecraft_world_level_validation from './net.minecraft.world.level.validation.generated.js';

/** JVM class net.minecraft.world.level.storage.CommandStorage. */
export interface CommandStorageMembers {
  get(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_nbt.CompoundTag;
  keys(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  set(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_nbt.CompoundTag): void;
}
export type CommandStorage = CommandStorageMembers;
export interface CommandStorageStatics {
  new(arg0: DimensionDataStorage): CommandStorage;
}

/** JVM record net.minecraft.world.level.storage.DataVersion. */
export interface DataVersionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isCompatible(arg0: DataVersion): boolean;
  isSideSeries(): boolean;
  series(): string;
  toString(): string;
  version(): number;
}
export type DataVersion = DataVersionMembers & JavaOpaque<"java.lang.Record">;
export interface DataVersionStatics {
  new(arg0: number, arg1: string): DataVersion;
  readonly MAIN_SERIES: "main";
}

/** JVM class net.minecraft.world.level.storage.DerivedLevelData. */
export interface DerivedLevelDataMembers {
  readonly __javaSupertypes?: readonly [ServerLevelData];
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory, arg1: j_net_minecraft_world_level.LevelHeightAccessor): void;
  getClearWeatherTime(): number;
  getDayTime(): bigint;
  getDifficulty(): j_net_minecraft_world.Difficulty;
  getGameRules(): j_net_minecraft_world_level.GameRules;
  getGameTime(): bigint;
  getGameType(): j_net_minecraft_world_level.GameType;
  getLevelName(): string;
  getRainTime(): number;
  getScheduledEvents(): j_net_minecraft_world_level_timers.TimerQueue<j_net_minecraft_server.MinecraftServer>;
  getSpawnAngle(): number;
  getSpawnPos(): j_net_minecraft_core.BlockPos;
  getThunderTime(): number;
  getWanderingTraderId(): JavaOpaque<"java.util.UUID">;
  getWanderingTraderSpawnChance(): number;
  getWanderingTraderSpawnDelay(): number;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder_Settings;
  isAllowCommands(): boolean;
  isDifficultyLocked(): boolean;
  isHardcore(): boolean;
  isInitialized(): boolean;
  isRaining(): boolean;
  isThundering(): boolean;
  setClearWeatherTime(arg0: number): void;
  setDayTime(arg0: bigint): void;
  setGameTime(arg0: bigint): void;
  setGameType(arg0: j_net_minecraft_world_level.GameType): void;
  setInitialized(arg0: boolean): void;
  setRainTime(arg0: number): void;
  setRaining(arg0: boolean): void;
  setSpawn(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  setThunderTime(arg0: number): void;
  setThundering(arg0: boolean): void;
  setWanderingTraderId(arg0: JavaOpaque<"java.util.UUID">): void;
  setWanderingTraderSpawnChance(arg0: number): void;
  setWanderingTraderSpawnDelay(arg0: number): void;
  setWorldBorder(arg0: j_net_minecraft_world_level_border.WorldBorder_Settings): void;
}
export type DerivedLevelData = DerivedLevelDataMembers & ServerLevelData;
export interface DerivedLevelDataStatics {
  new(arg0: WorldData, arg1: ServerLevelData): DerivedLevelData;
}

/** JVM class net.minecraft.world.level.storage.DimensionDataStorage. */
export interface DimensionDataStorageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  readonly cache: JavaMap<j_net_minecraft_world_level_saveddata.SavedDataType<object>, JavaOptional<j_net_minecraft_world_level_saveddata.SavedData>>;
  close(): void;
  computeIfAbsent<T /* extends j_net_minecraft_world_level_saveddata.SavedData */>(arg0: j_net_minecraft_world_level_saveddata.SavedDataType<T>): T;
  get<T /* extends j_net_minecraft_world_level_saveddata.SavedData */>(arg0: j_net_minecraft_world_level_saveddata.SavedDataType<T>): T | null;
  /** @throws java.io.IOException */
  readTagFromDisk(arg0: string, arg1: j_net_minecraft_util_datafix.DataFixTypes, arg2: number): j_net_minecraft_nbt.CompoundTag;
  saveAndJoin(): void;
  scheduleSave(): PromiseLike<object>;
  set<T /* extends j_net_minecraft_world_level_saveddata.SavedData */>(arg0: j_net_minecraft_world_level_saveddata.SavedDataType<T>, arg1: T): void;
}
export type DimensionDataStorage = DimensionDataStorageMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface DimensionDataStorageStatics {
  new(arg0: j_net_minecraft_world_level_saveddata.SavedData_Context, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: j_net_minecraft_core.HolderLookup_Provider): DimensionDataStorage;
}

/** JVM class net.minecraft.world.level.storage.FileNameDateFormatter. */
export interface FileNameDateFormatterMembers {
}
export type FileNameDateFormatter = FileNameDateFormatterMembers;
export interface FileNameDateFormatterStatics {
  new(): FileNameDateFormatter;
  create(): JavaOpaque<"java.time.format.DateTimeFormatter">;
}

/** JVM interface net.minecraft.world.level.storage.LevelData. */
export interface LevelDataMembers {
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory, arg1: j_net_minecraft_world_level.LevelHeightAccessor): void;
  getDayTime(): bigint;
  getDifficulty(): j_net_minecraft_world.Difficulty;
  getGameTime(): bigint;
  getSpawnAngle(): number;
  getSpawnPos(): j_net_minecraft_core.BlockPos;
  isDifficultyLocked(): boolean;
  isHardcore(): boolean;
  isRaining(): boolean;
  isThundering(): boolean;
  setRaining(arg0: boolean): void;
}
export type LevelData = LevelDataMembers;
export interface LevelDataStatics {
}

/** JVM record net.minecraft.world.level.storage.LevelDataAndDimensions. */
export interface LevelDataAndDimensionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimensions(): j_net_minecraft_world_level_levelgen.WorldDimensions_Complete;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  worldData(): WorldData;
}
export type LevelDataAndDimensions = LevelDataAndDimensionsMembers & JavaOpaque<"java.lang.Record">;
export interface LevelDataAndDimensionsStatics {
  new(arg0: WorldData, arg1: j_net_minecraft_world_level_levelgen.WorldDimensions_Complete): LevelDataAndDimensions;
}

/** JVM class net.minecraft.world.level.storage.LevelResource. */
export interface LevelResourceMembers {
  getId(): string;
  toString(): string;
}
export type LevelResource = LevelResourceMembers;
export interface LevelResourceStatics {
  readonly DATAPACK_DIR: LevelResource;
  readonly GENERATED_DIR: LevelResource;
  readonly ICON_FILE: LevelResource;
  readonly LEVEL_DATA_FILE: LevelResource;
  readonly LOCK_FILE: LevelResource;
  readonly MAP_RESOURCE_FILE: LevelResource;
  readonly OLD_LEVEL_DATA_FILE: LevelResource;
  readonly PLAYER_ADVANCEMENTS_DIR: LevelResource;
  readonly PLAYER_DATA_DIR: LevelResource;
  readonly PLAYER_OLD_DATA_DIR: LevelResource;
  readonly PLAYER_STATS_DIR: LevelResource;
  readonly ROOT: LevelResource;
}

/** JVM class net.minecraft.world.level.storage.LevelStorageException. */
export interface LevelStorageExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  getMessageComponent(): j_net_minecraft_network_chat.Component;
}
export type LevelStorageException = LevelStorageExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface LevelStorageExceptionStatics {
  new(arg0: j_net_minecraft_network_chat.Component): LevelStorageException;
}

/** JVM class net.minecraft.world.level.storage.LevelStorageSource. */
export interface LevelStorageSourceMembers {
  readonly baseDir: JavaOpaque<"java.nio.file.Path">;
  /** @throws java.io.IOException */
  createAccess(arg0: string, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>): LevelStorageSource_LevelStorageAccess;
  /** @throws net.minecraft.world.level.storage.LevelStorageException */
  findLevelCandidates(): LevelStorageSource_LevelCandidates;
  getBackupPath(): JavaOpaque<"java.nio.file.Path">;
  getBaseDir(): JavaOpaque<"java.nio.file.Path">;
  getLevelPath(arg0: string): JavaOpaque<"java.nio.file.Path">;
  getName(): string;
  getWorldDirValidator(): j_net_minecraft_world_level_validation.DirectoryValidator;
  isNewLevelIdAcceptable(arg0: string): boolean;
  levelExists(arg0: string): boolean;
  loadLevelSummaries(arg0: LevelStorageSource_LevelCandidates): PromiseLike<JavaList<LevelSummary>>;
  /** @throws java.io.IOException @throws net.minecraft.world.level.validation.ContentValidationException */
  validateAndCreateAccess(arg0: string, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>): LevelStorageSource_LevelStorageAccess;
}
export type LevelStorageSource = LevelStorageSourceMembers;
export interface LevelStorageSourceStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: j_net_minecraft_world_level_validation.DirectoryValidator, arg3: JavaOpaque<"com.mojang.datafixers.DataFixer">): LevelStorageSource;
  readonly ALLOWED_SYMLINKS_CONFIG_NAME: "allowed_symlinks.txt";
  readonly TAG_DATA: "Data";
  createDefault(arg0: JavaOpaque<"java.nio.file.Path">): LevelStorageSource;
  getLevelDataAndDimensions(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: j_net_minecraft_world_level.WorldDataConfiguration, arg2: j_net_minecraft_core.Registry<j_net_minecraft_world_level_dimension.LevelStem>, arg3: j_net_minecraft_core.HolderLookup_Provider): LevelDataAndDimensions;
  getPackConfig(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: j_net_minecraft_server_packs_repository.PackRepository, arg2: boolean): j_net_minecraft_server.WorldLoader_PackConfig;
  getStorageFolder(arg0: JavaOpaque<"java.nio.file.Path">, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>): JavaOpaque<"java.nio.file.Path">;
  parseValidator(arg0: JavaOpaque<"java.nio.file.Path">): j_net_minecraft_world_level_validation.DirectoryValidator;
  readDataConfig(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_level.WorldDataConfiguration;
}

/** JVM record net.minecraft.world.level.storage.LevelStorageSource$LevelCandidates. */
export interface LevelStorageSource_LevelCandidatesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Iterable<LevelStorageSource_LevelDirectory>];
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [LevelStorageSource_LevelDirectory]>;
  levels(): JavaList<LevelStorageSource_LevelDirectory>;
  toString(): string;
}
export type LevelStorageSource_LevelCandidates = LevelStorageSource_LevelCandidatesMembers & JavaOpaque<"java.lang.Record"> & Iterable<LevelStorageSource_LevelDirectory>;
export interface LevelStorageSource_LevelCandidatesStatics {
  new(arg0: JavaList<LevelStorageSource_LevelDirectory>): LevelStorageSource_LevelCandidates;
}

/** JVM record net.minecraft.world.level.storage.LevelStorageSource$LevelDirectory. */
export interface LevelStorageSource_LevelDirectoryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  corruptedDataFile(arg0: JavaOpaque<"java.time.LocalDateTime">): JavaOpaque<"java.nio.file.Path">;
  dataFile(): JavaOpaque<"java.nio.file.Path">;
  directoryName(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  iconFile(): JavaOpaque<"java.nio.file.Path">;
  lockFile(): JavaOpaque<"java.nio.file.Path">;
  oldDataFile(): JavaOpaque<"java.nio.file.Path">;
  path(): JavaOpaque<"java.nio.file.Path">;
  rawDataFile(arg0: JavaOpaque<"java.time.LocalDateTime">): JavaOpaque<"java.nio.file.Path">;
  resourcePath(arg0: LevelResource): JavaOpaque<"java.nio.file.Path">;
  toString(): string;
}
export type LevelStorageSource_LevelDirectory = LevelStorageSource_LevelDirectoryMembers & JavaOpaque<"java.lang.Record">;
export interface LevelStorageSource_LevelDirectoryStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): LevelStorageSource_LevelDirectory;
}

/** JVM class net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess. */
export interface LevelStorageSource_LevelStorageAccessMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  checkForLowDiskSpace(): boolean;
  /** @throws java.io.IOException */
  close(): void;
  createPlayerStorage(): PlayerDataStorage;
  /** @throws java.io.IOException */
  deleteLevel(): void;
  readonly dimensionType: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>;
  estimateDiskSpace(): bigint;
  /** @throws java.io.IOException */
  getDataTag(): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  /** @throws java.io.IOException */
  getDataTagFallback(): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  getDimensionPath(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): JavaOpaque<"java.nio.file.Path">;
  getFileModificationTime(arg0: boolean): JavaOpaque<"java.time.Instant"> | null;
  getIconFile(): JavaOptional<JavaOpaque<"java.nio.file.Path">>;
  getLevelDirectory(): LevelStorageSource_LevelDirectory;
  getLevelId(): string;
  getLevelPath(arg0: LevelResource): JavaOpaque<"java.nio.file.Path">;
  getSummary(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): LevelSummary;
  hasWorldData(): boolean;
  readonly levelDirectory: LevelStorageSource_LevelDirectory;
  /** @throws java.io.IOException */
  makeWorldBackup(): bigint;
  parent(): LevelStorageSource;
  /** @throws java.io.IOException */
  renameAndDropPlayer(arg0: string): void;
  /** @throws java.io.IOException */
  renameLevel(arg0: string): void;
  restoreLevelDataFromOld(): boolean;
  safeClose(): void;
  saveDataTag(arg0: j_net_minecraft_core.RegistryAccess, arg1: WorldData): void;
  saveDataTag(arg0: j_net_minecraft_core.RegistryAccess, arg1: WorldData, arg2: j_net_minecraft_nbt.CompoundTag | null): void | null;
}
export type LevelStorageSource_LevelStorageAccess = LevelStorageSource_LevelStorageAccessMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface LevelStorageSource_LevelStorageAccessStatics {
}

/** JVM class net.minecraft.world.level.storage.LevelSummary. */
export interface LevelSummaryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [LevelSummary]>];
  backupStatus(): LevelSummary_BackupStatus;
  canDelete(): boolean;
  canEdit(): boolean;
  canRecreate(): boolean;
  canUpload(): boolean;
  compareTo(arg0: object): number;
  compareTo(arg0: LevelSummary): number;
  getGameMode(): j_net_minecraft_world_level.GameType;
  getIcon(): JavaOpaque<"java.nio.file.Path">;
  getInfo(): j_net_minecraft_network_chat.Component;
  getLastPlayed(): bigint;
  getLevelId(): string;
  getLevelName(): string;
  getSettings(): j_net_minecraft_world_level.LevelSettings;
  getWorldVersionName(): j_net_minecraft_network_chat.MutableComponent;
  hasCommands(): boolean;
  isCompatible(): boolean;
  isDisabled(): boolean;
  isDowngrade(): boolean;
  isExperimental(): boolean;
  isHardcore(): boolean;
  isLocked(): boolean;
  levelVersion(): LevelVersion;
  primaryActionActive(): boolean;
  primaryActionMessage(): j_net_minecraft_network_chat.Component;
  requiresManualConversion(): boolean;
  shouldBackup(): boolean;
}
export type LevelSummary = LevelSummaryMembers;
export interface LevelSummaryStatics {
  new(arg0: j_net_minecraft_world_level.LevelSettings, arg1: LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: JavaOpaque<"java.nio.file.Path">): LevelSummary;
  readonly PLAY_WORLD: j_net_minecraft_network_chat.Component;
}

/** Live JVM enum net.minecraft.world.level.storage.LevelSummary$BackupStatus; constants are host handles, not strings. */
export type LevelSummary_BackupStatus = JavaEnum<"net.minecraft.world.level.storage.LevelSummary$BackupStatus", "DOWNGRADE" | "NONE" | "UPGRADE_TO_SNAPSHOT"> & LevelSummary_BackupStatusMembers;
export interface LevelSummary_BackupStatusMembers {
  getTranslationKey(): string;
  isSevere(): boolean;
  shouldBackup(): boolean;
}
export interface LevelSummary_BackupStatusStatics {
  readonly DOWNGRADE: LevelSummary_BackupStatus;
  readonly NONE: LevelSummary_BackupStatus;
  readonly UPGRADE_TO_SNAPSHOT: LevelSummary_BackupStatus;
  valueOf(arg0: string): LevelSummary_BackupStatus;
  values(): Array<LevelSummary_BackupStatus>;
}

/** JVM class net.minecraft.world.level.storage.LevelSummary$CorruptedLevelSummary. */
export interface LevelSummary_CorruptedLevelSummaryMembers {
  readonly __javaSupertypes?: readonly [LevelSummary];
  canEdit(): boolean;
  canRecreate(): boolean;
  canUpload(): boolean;
  compareTo(arg0: object): number;
  getInfo(): j_net_minecraft_network_chat.Component;
  getLastPlayed(): bigint;
  getLevelName(): string;
  isDisabled(): boolean;
  primaryActionActive(): boolean;
  primaryActionMessage(): j_net_minecraft_network_chat.Component;
}
export type LevelSummary_CorruptedLevelSummary = LevelSummary_CorruptedLevelSummaryMembers & LevelSummary;
export interface LevelSummary_CorruptedLevelSummaryStatics {
  new(arg0: string, arg1: JavaOpaque<"java.nio.file.Path">, arg2: bigint): LevelSummary_CorruptedLevelSummary;
}

/** JVM class net.minecraft.world.level.storage.LevelSummary$SymlinkLevelSummary. */
export interface LevelSummary_SymlinkLevelSummaryMembers {
  readonly __javaSupertypes?: readonly [LevelSummary];
  canEdit(): boolean;
  canRecreate(): boolean;
  canUpload(): boolean;
  compareTo(arg0: object): number;
  getInfo(): j_net_minecraft_network_chat.Component;
  getLastPlayed(): bigint;
  getLevelName(): string;
  isDisabled(): boolean;
  primaryActionActive(): boolean;
  primaryActionMessage(): j_net_minecraft_network_chat.Component;
}
export type LevelSummary_SymlinkLevelSummary = LevelSummary_SymlinkLevelSummaryMembers & LevelSummary;
export interface LevelSummary_SymlinkLevelSummaryStatics {
  new(arg0: string, arg1: JavaOpaque<"java.nio.file.Path">): LevelSummary_SymlinkLevelSummary;
}

/** JVM class net.minecraft.world.level.storage.LevelVersion. */
export interface LevelVersionMembers {
  lastPlayed(): bigint;
  levelDataVersion(): number;
  minecraftVersion(): DataVersion;
  minecraftVersionName(): string;
  snapshot(): boolean;
}
export type LevelVersion = LevelVersionMembers;
export interface LevelVersionStatics {
  parse(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): LevelVersion;
}

/** JVM class net.minecraft.world.level.storage.PlayerDataStorage. */
export interface PlayerDataStorageMembers {
  readonly fixerUpper: JavaOpaque<"com.mojang.datafixers.DataFixer">;
  getPlayerDir(): JavaOpaque<"java.io.File">;
  load(arg0: string, arg1: string, arg2: j_net_minecraft_util.ProblemReporter): JavaOptional<j_net_minecraft_nbt.CompoundTag>;
  load(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_util.ProblemReporter): JavaOptional<ValueInput>;
  save(arg0: j_net_minecraft_world_entity_player.Player): void;
}
export type PlayerDataStorage = PlayerDataStorageMembers;
export interface PlayerDataStorageStatics {
  new(arg0: LevelStorageSource_LevelStorageAccess, arg1: JavaOpaque<"com.mojang.datafixers.DataFixer">): PlayerDataStorage;
}

/** JVM class net.minecraft.world.level.storage.PrimaryLevelData. */
export interface PrimaryLevelDataMembers {
  readonly __javaSupertypes?: readonly [ServerLevelData, WorldData];
  checkName(arg0: string): void;
  createTag(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  customDimensions: j_net_minecraft_core.Registry<j_net_minecraft_world_level_dimension.LevelStem>;
  endDragonFightData(): j_net_minecraft_world_level_dimension_end.EndDragonFight_Data;
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory, arg1: j_net_minecraft_world_level.LevelHeightAccessor): void;
  getClearWeatherTime(): number;
  getCustomBossEvents(): j_net_minecraft_nbt.CompoundTag | null;
  getDataConfiguration(): j_net_minecraft_world_level.WorldDataConfiguration;
  getDayTime(): bigint;
  getDifficulty(): j_net_minecraft_world.Difficulty;
  getGameRules(): j_net_minecraft_world_level.GameRules;
  getGameTime(): bigint;
  getGameType(): j_net_minecraft_world_level.GameType;
  getKnownServerBrands(): JavaSet<string>;
  getLevelName(): string;
  getLevelSettings(): j_net_minecraft_world_level.LevelSettings;
  getLoadedPlayerTag(): j_net_minecraft_nbt.CompoundTag | null;
  getRainTime(): number;
  getRemovedFeatureFlags(): JavaSet<string>;
  getScheduledEvents(): j_net_minecraft_world_level_timers.TimerQueue<j_net_minecraft_server.MinecraftServer>;
  getSpawnAngle(): number;
  getSpawnPos(): j_net_minecraft_core.BlockPos;
  getThunderTime(): number;
  getVersion(): number;
  getWanderingTraderId(): JavaOpaque<"java.util.UUID"> | null;
  getWanderingTraderSpawnChance(): number;
  getWanderingTraderSpawnDelay(): number;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder_Settings;
  isAllowCommands(): boolean;
  isDebugWorld(): boolean;
  isDifficultyLocked(): boolean;
  isFlatWorld(): boolean;
  isHardcore(): boolean;
  isInitialized(): boolean;
  isRaining(): boolean;
  isThundering(): boolean;
  overworldData(): ServerLevelData;
  pdc: j_net_minecraft_nbt.Tag;
  setClearWeatherTime(arg0: number): void;
  setCustomBossEvents(arg0: j_net_minecraft_nbt.CompoundTag | null): void | null;
  setDataConfiguration(arg0: j_net_minecraft_world_level.WorldDataConfiguration): void;
  setDayTime(arg0: bigint): void;
  setDifficulty(arg0: j_net_minecraft_world.Difficulty): void;
  setDifficultyLocked(arg0: boolean): void;
  setEndDragonFightData(arg0: j_net_minecraft_world_level_dimension_end.EndDragonFight_Data): void;
  setGameTime(arg0: bigint): void;
  setGameType(arg0: j_net_minecraft_world_level.GameType): void;
  setInitialized(arg0: boolean): void;
  setModdedInfo(arg0: string, arg1: boolean): void;
  setRainTime(arg0: number): void;
  setRaining(arg0: boolean): void;
  setRaining(arg0: boolean, arg1: JavaOpaque<"org.bukkit.event.weather.WeatherChangeEvent$Cause">): void;
  setSpawn(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  setThunderTime(arg0: number): void;
  setThundering(arg0: boolean): void;
  setThundering(arg0: boolean, arg1: JavaOpaque<"org.bukkit.event.weather.ThunderChangeEvent$Cause">): void;
  setWanderingTraderId(arg0: JavaOpaque<"java.util.UUID">): void;
  setWanderingTraderSpawnChance(arg0: number): void;
  setWanderingTraderSpawnDelay(arg0: number): void;
  setWorld(arg0: j_net_minecraft_server_level.ServerLevel): void;
  setWorldBorder(arg0: j_net_minecraft_world_level_border.WorldBorder_Settings): void;
  settings: j_net_minecraft_world_level.LevelSettings;
  wasModded(): boolean;
  worldGenOptions(): j_net_minecraft_world_level_levelgen.WorldOptions;
  worldGenSettingsLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
}
export type PrimaryLevelData = PrimaryLevelDataMembers & ServerLevelData & WorldData;
export interface PrimaryLevelDataStatics {
  new(arg0: j_net_minecraft_world_level.LevelSettings, arg1: j_net_minecraft_world_level_levelgen.WorldOptions, arg2: PrimaryLevelData_SpecialWorldProperty, arg3: JavaOpaque<"com.mojang.serialization.Lifecycle">): PrimaryLevelData;
  readonly LEVEL_NAME: "LevelName";
  readonly PLAYER: "Player";
  readonly WORLD_GEN_SETTINGS: "WorldGenSettings";
  parse<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>, arg1: j_net_minecraft_world_level.LevelSettings, arg2: PrimaryLevelData_SpecialWorldProperty, arg3: j_net_minecraft_world_level_levelgen.WorldOptions, arg4: JavaOpaque<"com.mojang.serialization.Lifecycle">): PrimaryLevelData;
}

/** Live JVM enum net.minecraft.world.level.storage.PrimaryLevelData$SpecialWorldProperty; constants are host handles, not strings. */
export type PrimaryLevelData_SpecialWorldProperty = JavaEnum<"net.minecraft.world.level.storage.PrimaryLevelData$SpecialWorldProperty", "DEBUG" | "FLAT" | "NONE"> & PrimaryLevelData_SpecialWorldPropertyMembers;
export interface PrimaryLevelData_SpecialWorldPropertyMembers {
}
export interface PrimaryLevelData_SpecialWorldPropertyStatics {
  readonly DEBUG: PrimaryLevelData_SpecialWorldProperty;
  readonly FLAT: PrimaryLevelData_SpecialWorldProperty;
  readonly NONE: PrimaryLevelData_SpecialWorldProperty;
  valueOf(arg0: string): PrimaryLevelData_SpecialWorldProperty;
  values(): Array<PrimaryLevelData_SpecialWorldProperty>;
}

/** JVM interface net.minecraft.world.level.storage.ServerLevelData. */
export interface ServerLevelDataMembers {
  readonly __javaSupertypes?: readonly [WritableLevelData];
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory, arg1: j_net_minecraft_world_level.LevelHeightAccessor): void;
  getClearWeatherTime(): number;
  getGameRules(): j_net_minecraft_world_level.GameRules;
  getGameType(): j_net_minecraft_world_level.GameType;
  getLevelName(): string;
  getRainTime(): number;
  getScheduledEvents(): j_net_minecraft_world_level_timers.TimerQueue<j_net_minecraft_server.MinecraftServer>;
  getThunderTime(): number;
  getWanderingTraderId(): JavaOpaque<"java.util.UUID"> | null;
  getWanderingTraderSpawnChance(): number;
  getWanderingTraderSpawnDelay(): number;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder_Settings;
  isAllowCommands(): boolean;
  isInitialized(): boolean;
  setClearWeatherTime(arg0: number): void;
  setDayTime(arg0: bigint): void;
  setGameTime(arg0: bigint): void;
  setGameType(arg0: j_net_minecraft_world_level.GameType): void;
  setInitialized(arg0: boolean): void;
  setRainTime(arg0: number): void;
  setThunderTime(arg0: number): void;
  setThundering(arg0: boolean): void;
  setWanderingTraderId(arg0: JavaOpaque<"java.util.UUID">): void;
  setWanderingTraderSpawnChance(arg0: number): void;
  setWanderingTraderSpawnDelay(arg0: number): void;
  setWorldBorder(arg0: j_net_minecraft_world_level_border.WorldBorder_Settings): void;
}
export type ServerLevelData = ServerLevelDataMembers & WritableLevelData;
export interface ServerLevelDataStatics {
}

/** JVM class net.minecraft.world.level.storage.TagValueInput. */
export interface TagValueInputMembers {
  readonly __javaSupertypes?: readonly [ValueInput];
  child(arg0: string): JavaOptional<ValueInput>;
  childOrEmpty(arg0: string): ValueInput;
  childrenList(arg0: string): JavaOptional<ValueInput_ValueInputList>;
  childrenListOrEmpty(arg0: string): ValueInput_ValueInputList;
  getBooleanOr(arg0: string, arg1: boolean): boolean;
  getByteOr(arg0: string, arg1: number): number;
  getDoubleOr(arg0: string, arg1: number): number;
  getFloatOr(arg0: string, arg1: number): number;
  getInt(arg0: string): JavaOptional<number>;
  getIntArray(arg0: string): JavaOptional<Array<number>>;
  getIntOr(arg0: string, arg1: number): number;
  getLong(arg0: string): JavaOptional<bigint>;
  getLongOr(arg0: string, arg1: bigint): bigint;
  getShortOr(arg0: string, arg1: number): number;
  getString(arg0: string): JavaOptional<string>;
  getStringOr(arg0: string, arg1: string): string;
  list<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOptional<ValueInput_TypedInputList<T>>;
  listOrEmpty<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): ValueInput_TypedInputList<T>;
  lookup(): j_net_minecraft_core.HolderLookup_Provider;
  read<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>): JavaOptional<T>;
  read<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOptional<T>;
}
export type TagValueInput = TagValueInputMembers & ValueInput;
export interface TagValueInputStatics {
  create(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: JavaList<j_net_minecraft_nbt.CompoundTag>): ValueInput_ValueInputList;
  create(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: j_net_minecraft_nbt.CompoundTag): ValueInput;
  createGlobal(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_nbt.CompoundTag): ValueInput;
}

/** JVM record net.minecraft.world.level.storage.TagValueInput$DecodeFromFieldFailedProblem. */
export interface TagValueInput_DecodeFromFieldFailedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  error(): JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>;
  hashCode(): number;
  name(): string;
  tag(): j_net_minecraft_nbt.Tag;
  toString(): string;
}
export type TagValueInput_DecodeFromFieldFailedProblem = TagValueInput_DecodeFromFieldFailedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueInput_DecodeFromFieldFailedProblemStatics {
  new(arg0: string, arg1: j_net_minecraft_nbt.Tag, arg2: JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>): TagValueInput_DecodeFromFieldFailedProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueInput$DecodeFromListFailedProblem. */
export interface TagValueInput_DecodeFromListFailedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  error(): JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>;
  hashCode(): number;
  index(): number;
  name(): string;
  tag(): j_net_minecraft_nbt.Tag;
  toString(): string;
}
export type TagValueInput_DecodeFromListFailedProblem = TagValueInput_DecodeFromListFailedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueInput_DecodeFromListFailedProblemStatics {
  new(arg0: string, arg1: number, arg2: j_net_minecraft_nbt.Tag, arg3: JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>): TagValueInput_DecodeFromListFailedProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueInput$DecodeFromMapFailedProblem. */
export interface TagValueInput_DecodeFromMapFailedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  error(): JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>;
  hashCode(): number;
  toString(): string;
}
export type TagValueInput_DecodeFromMapFailedProblem = TagValueInput_DecodeFromMapFailedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueInput_DecodeFromMapFailedProblemStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>): TagValueInput_DecodeFromMapFailedProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueInput$UnexpectedListElementTypeProblem. */
export interface TagValueInput_UnexpectedListElementTypeProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  actual(): j_net_minecraft_nbt.TagType<object>;
  description(): string;
  equals(arg0: object): boolean;
  expected(): j_net_minecraft_nbt.TagType<object>;
  hashCode(): number;
  index(): number;
  name(): string;
  toString(): string;
}
export type TagValueInput_UnexpectedListElementTypeProblem = TagValueInput_UnexpectedListElementTypeProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueInput_UnexpectedListElementTypeProblemStatics {
  new(arg0: string, arg1: number, arg2: j_net_minecraft_nbt.TagType<object>, arg3: j_net_minecraft_nbt.TagType<object>): TagValueInput_UnexpectedListElementTypeProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueInput$UnexpectedNonNumberProblem. */
export interface TagValueInput_UnexpectedNonNumberProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  actual(): j_net_minecraft_nbt.TagType<object>;
  description(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type TagValueInput_UnexpectedNonNumberProblem = TagValueInput_UnexpectedNonNumberProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueInput_UnexpectedNonNumberProblemStatics {
  new(arg0: string, arg1: j_net_minecraft_nbt.TagType<object>): TagValueInput_UnexpectedNonNumberProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueInput$UnexpectedTypeProblem. */
export interface TagValueInput_UnexpectedTypeProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  actual(): j_net_minecraft_nbt.TagType<object>;
  description(): string;
  equals(arg0: object): boolean;
  expected(): j_net_minecraft_nbt.TagType<object>;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type TagValueInput_UnexpectedTypeProblem = TagValueInput_UnexpectedTypeProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueInput_UnexpectedTypeProblemStatics {
  new(arg0: string, arg1: j_net_minecraft_nbt.TagType<object>, arg2: j_net_minecraft_nbt.TagType<object>): TagValueInput_UnexpectedTypeProblem;
}

/** JVM class net.minecraft.world.level.storage.TagValueOutput. */
export interface TagValueOutputMembers {
  readonly __javaSupertypes?: readonly [ValueOutput];
  buildResult(): j_net_minecraft_nbt.CompoundTag;
  child(arg0: string): ValueOutput;
  childrenList(arg0: string): ValueOutput_ValueOutputList;
  discard(arg0: string): void;
  isEmpty(): boolean;
  list<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): ValueOutput_TypedOutputList<T>;
  putBoolean(arg0: string, arg1: boolean): void;
  putByte(arg0: string, arg1: number): void;
  putDouble(arg0: string, arg1: number): void;
  putFloat(arg0: string, arg1: number): void;
  putInt(arg0: string, arg1: number): void;
  putIntArray(arg0: string, arg1: Array<number>): void;
  putLong(arg0: string, arg1: bigint): void;
  putShort(arg0: string, arg1: number): void;
  putString(arg0: string, arg1: string): void;
  store<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: T): void;
  store<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T): void;
  storeNullable<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T | null): void | null;
}
export type TagValueOutput = TagValueOutputMembers & ValueOutput;
export interface TagValueOutputStatics {
  createWithContext(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_core.HolderLookup_Provider): TagValueOutput;
  createWithoutContext(arg0: j_net_minecraft_util.ProblemReporter): TagValueOutput;
  createWrappingGlobal(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_nbt.CompoundTag): TagValueOutput;
  createWrappingWithContext(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: j_net_minecraft_nbt.CompoundTag): TagValueOutput;
}

/** JVM record net.minecraft.world.level.storage.TagValueOutput$EncodeToFieldFailedProblem. */
export interface TagValueOutput_EncodeToFieldFailedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  error(): JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>;
  hashCode(): number;
  name(): string;
  toString(): string;
  value(): object;
}
export type TagValueOutput_EncodeToFieldFailedProblem = TagValueOutput_EncodeToFieldFailedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueOutput_EncodeToFieldFailedProblemStatics {
  new(arg0: string, arg1: object, arg2: JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>): TagValueOutput_EncodeToFieldFailedProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueOutput$EncodeToListFailedProblem. */
export interface TagValueOutput_EncodeToListFailedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  error(): JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>;
  hashCode(): number;
  name(): string;
  toString(): string;
  value(): object;
}
export type TagValueOutput_EncodeToListFailedProblem = TagValueOutput_EncodeToListFailedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueOutput_EncodeToListFailedProblemStatics {
  new(arg0: string, arg1: object, arg2: JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>): TagValueOutput_EncodeToListFailedProblem;
}

/** JVM record net.minecraft.world.level.storage.TagValueOutput$EncodeToMapFailedProblem. */
export interface TagValueOutput_EncodeToMapFailedProblemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.ProblemReporter_Problem];
  description(): string;
  equals(arg0: object): boolean;
  error(): JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>;
  hashCode(): number;
  toString(): string;
  value(): object;
}
export type TagValueOutput_EncodeToMapFailedProblem = TagValueOutput_EncodeToMapFailedProblemMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.ProblemReporter_Problem;
export interface TagValueOutput_EncodeToMapFailedProblemStatics {
  new(arg0: object, arg1: JavaOpaque<"com.mojang.serialization.DataResult$Error", [object]>): TagValueOutput_EncodeToMapFailedProblem;
}

/** JVM interface net.minecraft.world.level.storage.ValueInput. */
export interface ValueInputMembers {
  child(arg0: string): JavaOptional<ValueInput>;
  childOrEmpty(arg0: string): ValueInput;
  childrenList(arg0: string): JavaOptional<ValueInput_ValueInputList>;
  childrenListOrEmpty(arg0: string): ValueInput_ValueInputList;
  getBooleanOr(arg0: string, arg1: boolean): boolean;
  getByteOr(arg0: string, arg1: number): number;
  getDoubleOr(arg0: string, arg1: number): number;
  getFloatOr(arg0: string, arg1: number): number;
  getInt(arg0: string): JavaOptional<number>;
  getIntArray(arg0: string): JavaOptional<Array<number>>;
  getIntOr(arg0: string, arg1: number): number;
  getLong(arg0: string): JavaOptional<bigint>;
  getLongOr(arg0: string, arg1: bigint): bigint;
  getShortOr(arg0: string, arg1: number): number;
  getString(arg0: string): JavaOptional<string>;
  getStringOr(arg0: string, arg1: string): string;
  list<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOptional<ValueInput_TypedInputList<T>>;
  listOrEmpty<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): ValueInput_TypedInputList<T>;
  lookup(): j_net_minecraft_core.HolderLookup_Provider;
  read<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>): JavaOptional<T>;
  read<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOptional<T>;
}
export type ValueInput = ValueInputMembers;
export interface ValueInputStatics {
}

/** JVM interface net.minecraft.world.level.storage.ValueInput$TypedInputList. */
export interface ValueInput_TypedInputListMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<T>];
  isEmpty(): boolean;
  stream(): JavaOpaque<"java.util.stream.Stream", [T]>;
}
export type ValueInput_TypedInputList<T = unknown> = ValueInput_TypedInputListMembers<T> & Iterable<T>;
export interface ValueInput_TypedInputListStatics {
}

/** JVM interface net.minecraft.world.level.storage.ValueInput$ValueInputList. */
export interface ValueInput_ValueInputListMembers {
  readonly __javaSupertypes?: readonly [Iterable<ValueInput>];
  isEmpty(): boolean;
  stream(): JavaOpaque<"java.util.stream.Stream", [ValueInput]>;
}
export type ValueInput_ValueInputList = ValueInput_ValueInputListMembers & Iterable<ValueInput>;
export interface ValueInput_ValueInputListStatics {
}

/** JVM class net.minecraft.world.level.storage.ValueInputContextHelper. */
export interface ValueInputContextHelperMembers {
  empty(): ValueInput;
  emptyList(): ValueInput_ValueInputList;
  emptyTypedList<T>(): ValueInput_TypedInputList<T>;
  lookup(): j_net_minecraft_core.HolderLookup_Provider;
  ops(): JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>;
}
export type ValueInputContextHelper = ValueInputContextHelperMembers;
export interface ValueInputContextHelperStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>): ValueInputContextHelper;
}

/** JVM interface net.minecraft.world.level.storage.ValueOutput. */
export interface ValueOutputMembers {
  child(arg0: string): ValueOutput;
  childrenList(arg0: string): ValueOutput_ValueOutputList;
  discard(arg0: string): void;
  isEmpty(): boolean;
  list<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): ValueOutput_TypedOutputList<T>;
  putBoolean(arg0: string, arg1: boolean): void;
  putByte(arg0: string, arg1: number): void;
  putDouble(arg0: string, arg1: number): void;
  putFloat(arg0: string, arg1: number): void;
  putInt(arg0: string, arg1: number): void;
  putIntArray(arg0: string, arg1: Array<number>): void;
  putLong(arg0: string, arg1: bigint): void;
  putShort(arg0: string, arg1: number): void;
  putString(arg0: string, arg1: string): void;
  store<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: T): void;
  store<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T): void;
  storeNullable<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T | null): void | null;
}
export type ValueOutput = ValueOutputMembers;
export interface ValueOutputStatics {
}

/** JVM interface net.minecraft.world.level.storage.ValueOutput$TypedOutputList. */
export interface ValueOutput_TypedOutputListMembers<T = unknown> {
  add(arg0: T): void;
  isEmpty(): boolean;
}
export type ValueOutput_TypedOutputList<T = unknown> = ValueOutput_TypedOutputListMembers<T>;
export interface ValueOutput_TypedOutputListStatics {
}

/** JVM interface net.minecraft.world.level.storage.ValueOutput$ValueOutputList. */
export interface ValueOutput_ValueOutputListMembers {
  addChild(): ValueOutput;
  discardLast(): void;
  isEmpty(): boolean;
}
export type ValueOutput_ValueOutputList = ValueOutput_ValueOutputListMembers;
export interface ValueOutput_ValueOutputListStatics {
}

/** JVM interface net.minecraft.world.level.storage.WorldData. */
export interface WorldDataMembers {
  createTag(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  endDragonFightData(): j_net_minecraft_world_level_dimension_end.EndDragonFight_Data;
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory): void;
  getCustomBossEvents(): j_net_minecraft_nbt.CompoundTag | null;
  getDataConfiguration(): j_net_minecraft_world_level.WorldDataConfiguration;
  getDifficulty(): j_net_minecraft_world.Difficulty;
  getGameRules(): j_net_minecraft_world_level.GameRules;
  getGameType(): j_net_minecraft_world_level.GameType;
  getKnownServerBrands(): JavaSet<string>;
  getLevelName(): string;
  getLevelSettings(): j_net_minecraft_world_level.LevelSettings;
  getLoadedPlayerTag(): j_net_minecraft_nbt.CompoundTag | null;
  getRemovedFeatureFlags(): JavaSet<string>;
  getStorageVersionName(arg0: number): string;
  getVersion(): number;
  isAllowCommands(): boolean;
  isDebugWorld(): boolean;
  isDifficultyLocked(): boolean;
  isFlatWorld(): boolean;
  isHardcore(): boolean;
  overworldData(): ServerLevelData;
  setCustomBossEvents(arg0: j_net_minecraft_nbt.CompoundTag | null): void | null;
  setDataConfiguration(arg0: j_net_minecraft_world_level.WorldDataConfiguration): void;
  setDifficulty(arg0: j_net_minecraft_world.Difficulty): void;
  setDifficultyLocked(arg0: boolean): void;
  setEndDragonFightData(arg0: j_net_minecraft_world_level_dimension_end.EndDragonFight_Data): void;
  setGameType(arg0: j_net_minecraft_world_level.GameType): void;
  setModdedInfo(arg0: string, arg1: boolean): void;
  wasModded(): boolean;
  worldGenOptions(): j_net_minecraft_world_level_levelgen.WorldOptions;
  worldGenSettingsLifecycle(): JavaOpaque<"com.mojang.serialization.Lifecycle">;
}
export type WorldData = WorldDataMembers;
export interface WorldDataStatics {
  readonly ANVIL_VERSION_ID: 19133;
  readonly MCREGION_VERSION_ID: 19132;
}

/** JVM interface net.minecraft.world.level.storage.WritableLevelData. */
export interface WritableLevelDataMembers {
  readonly __javaSupertypes?: readonly [LevelData];
  setSpawn(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
}
export type WritableLevelData = WritableLevelDataMembers & LevelData;
export interface WritableLevelDataStatics {
}
