// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_packs from './net.minecraft.server.packs.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.BlockUtil. */
export interface BlockUtilMembers {
}
export type BlockUtil = BlockUtilMembers;
export interface BlockUtilStatics {
  new(): BlockUtil;
  getLargestRectangleAround(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction_Axis, arg2: number, arg3: j_net_minecraft_core.Direction_Axis, arg4: number, arg5: JavaPredicate<j_net_minecraft_core.BlockPos>): BlockUtil_FoundRectangle;
  getTopConnectedBlock(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_world_level_block.Block): JavaOptional<j_net_minecraft_core.BlockPos>;
}

/** JVM class net.minecraft.BlockUtil$FoundRectangle. */
export interface BlockUtil_FoundRectangleMembers {
  readonly axis1Size: number;
  readonly axis2Size: number;
  readonly minCorner: j_net_minecraft_core.BlockPos;
}
export type BlockUtil_FoundRectangle = BlockUtil_FoundRectangleMembers;
export interface BlockUtil_FoundRectangleStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number): BlockUtil_FoundRectangle;
}

/** JVM class net.minecraft.BlockUtil$IntBounds. */
export interface BlockUtil_IntBoundsMembers {
  readonly max: number;
  readonly min: number;
  toString(): string;
}
export type BlockUtil_IntBounds = BlockUtil_IntBoundsMembers;
export interface BlockUtil_IntBoundsStatics {
  new(arg0: number, arg1: number): BlockUtil_IntBounds;
}

/** JVM interface net.minecraft.CharPredicate. */
export interface CharPredicateMembers {
  and(arg0: CharPredicate): CharPredicate;
  negate(): CharPredicate;
  or(arg0: CharPredicate): CharPredicate;
  test(arg0: string): boolean;
}
export type CharPredicate = CharPredicateMembers;
export interface CharPredicateStatics {
}

/** Live JVM enum net.minecraft.ChatFormatting; constants are host handles, not strings. */
export type ChatFormatting = JavaEnum<"net.minecraft.ChatFormatting", "AQUA" | "BLACK" | "BLUE" | "BOLD" | "DARK_AQUA" | "DARK_BLUE" | "DARK_GRAY" | "DARK_GREEN" | "DARK_PURPLE" | "DARK_RED" | "GOLD" | "GRAY" | "GREEN" | "ITALIC" | "LIGHT_PURPLE" | "OBFUSCATED" | "RED" | "RESET" | "STRIKETHROUGH" | "UNDERLINE" | "WHITE" | "YELLOW"> & ChatFormattingMembers;
export interface ChatFormattingMembers {
  readonly code: string;
  getChar(): string;
  getColor(): number | null;
  getId(): number;
  getName(): string;
  getSerializedName(): string;
  isColor(): boolean;
  isFormat(): boolean;
  toString(): string;
}
export interface ChatFormattingStatics {
  readonly AQUA: ChatFormatting;
  readonly BLACK: ChatFormatting;
  readonly BLUE: ChatFormatting;
  readonly BOLD: ChatFormatting;
  readonly DARK_AQUA: ChatFormatting;
  readonly DARK_BLUE: ChatFormatting;
  readonly DARK_GRAY: ChatFormatting;
  readonly DARK_GREEN: ChatFormatting;
  readonly DARK_PURPLE: ChatFormatting;
  readonly DARK_RED: ChatFormatting;
  readonly GOLD: ChatFormatting;
  readonly GRAY: ChatFormatting;
  readonly GREEN: ChatFormatting;
  readonly ITALIC: ChatFormatting;
  readonly LIGHT_PURPLE: ChatFormatting;
  readonly OBFUSCATED: ChatFormatting;
  readonly RED: ChatFormatting;
  readonly RESET: ChatFormatting;
  readonly STRIKETHROUGH: ChatFormatting;
  readonly UNDERLINE: ChatFormatting;
  readonly WHITE: ChatFormatting;
  readonly YELLOW: ChatFormatting;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChatFormatting]>;
  readonly COLOR_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChatFormatting]>;
  readonly PREFIX_CODE: 167;
  getByCode(arg0: string): ChatFormatting | null;
  getByHexValue(arg0: number): ChatFormatting | null;
  getById(arg0: number): ChatFormatting | null;
  getByName(arg0: string | null): ChatFormatting | null;
  getNames(arg0: boolean, arg1: boolean): JavaCollection<string>;
  stripFormatting(arg0: string | null): string | null;
  valueOf(arg0: string): ChatFormatting;
  values(): Array<ChatFormatting>;
}

/** JVM class net.minecraft.CrashReport. */
export interface CrashReportMembers {
  addCategory(arg0: string): CrashReportCategory;
  addCategory(arg0: string, arg1: number): CrashReportCategory;
  getDetails(): string;
  getDetails(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
  getException(): JavaOpaque<"java.lang.Throwable">;
  getExceptionMessage(): string;
  getFriendlyReport(arg0: ReportType): string;
  getFriendlyReport(arg0: ReportType, arg1: JavaList<string>): string;
  getSaveFile(): JavaOpaque<"java.nio.file.Path"> | null;
  getSystemReport(): SystemReport;
  getTitle(): string;
  saveToFile(arg0: JavaOpaque<"java.nio.file.Path">, arg1: ReportType): boolean;
  saveToFile(arg0: JavaOpaque<"java.nio.file.Path">, arg1: ReportType, arg2: JavaList<string>): boolean;
}
export type CrashReport = CrashReportMembers;
export interface CrashReportStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): CrashReport;
  forThrowable(arg0: JavaOpaque<"java.lang.Throwable">, arg1: string): CrashReport;
  preload(): void;
}

/** JVM class net.minecraft.CrashReportCategory. */
export interface CrashReportCategoryMembers {
  fillInStackTrace(arg0: number): number;
  getDetails(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
  getStacktrace(): Array<JavaOpaque<"java.lang.StackTraceElement">>;
  setDetail(arg0: string, arg1: object): CrashReportCategory;
  setDetail(arg0: string, arg1: CrashReportDetail<string>): CrashReportCategory;
  setDetailError(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): void;
  trimStacktrace(arg0: number): void;
  validateStackTrace(arg0: JavaOpaque<"java.lang.StackTraceElement">, arg1: JavaOpaque<"java.lang.StackTraceElement">): boolean;
}
export type CrashReportCategory = CrashReportCategoryMembers;
export interface CrashReportCategoryStatics {
  new(arg0: string): CrashReportCategory;
  formatLocation(arg0: j_net_minecraft_world_level.LevelHeightAccessor, arg1: number, arg2: number, arg3: number): string;
  formatLocation(arg0: j_net_minecraft_world_level.LevelHeightAccessor, arg1: number, arg2: number, arg3: number): string;
  formatLocation(arg0: j_net_minecraft_world_level.LevelHeightAccessor, arg1: j_net_minecraft_core.BlockPos): string;
  populateBlockDetails(arg0: CrashReportCategory, arg1: j_net_minecraft_world_level.LevelHeightAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  populateBlockLocationDetails(arg0: CrashReportCategory, arg1: j_net_minecraft_world_level.LevelHeightAccessor, arg2: j_net_minecraft_core.BlockPos): CrashReportCategory;
}

/** JVM interface net.minecraft.CrashReportDetail. */
export interface CrashReportDetailMembers<V = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.concurrent.Callable", [V]>];
}
export type CrashReportDetail<V = unknown> = CrashReportDetailMembers<V> & JavaOpaque<"java.util.concurrent.Callable", [V]>;
export interface CrashReportDetailStatics {
}

/** JVM class net.minecraft.DefaultUncaughtExceptionHandler. */
export interface DefaultUncaughtExceptionHandlerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Thread$UncaughtExceptionHandler">];
  uncaughtException(arg0: JavaOpaque<"java.lang.Thread">, arg1: JavaOpaque<"java.lang.Throwable">): void;
}
export type DefaultUncaughtExceptionHandler = DefaultUncaughtExceptionHandlerMembers & JavaOpaque<"java.lang.Thread$UncaughtExceptionHandler">;
export interface DefaultUncaughtExceptionHandlerStatics {
  new(arg0: JavaOpaque<"org.slf4j.Logger">): DefaultUncaughtExceptionHandler;
}

/** JVM class net.minecraft.DefaultUncaughtExceptionHandlerWithName. */
export interface DefaultUncaughtExceptionHandlerWithNameMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Thread$UncaughtExceptionHandler">];
  uncaughtException(arg0: JavaOpaque<"java.lang.Thread">, arg1: JavaOpaque<"java.lang.Throwable">): void;
}
export type DefaultUncaughtExceptionHandlerWithName = DefaultUncaughtExceptionHandlerWithNameMembers & JavaOpaque<"java.lang.Thread$UncaughtExceptionHandler">;
export interface DefaultUncaughtExceptionHandlerWithNameStatics {
  new(arg0: JavaOpaque<"org.slf4j.Logger">): DefaultUncaughtExceptionHandlerWithName;
}

/** JVM class net.minecraft.DetectedVersion. */
export interface DetectedVersionMembers {
}
export type DetectedVersion = DetectedVersionMembers;
export interface DetectedVersionStatics {
  new(): DetectedVersion;
  readonly BUILT_IN: WorldVersion;
  tryDetectVersion(): WorldVersion;
}

/** JVM interface net.minecraft.FieldsAreNonnullByDefault. */
export interface FieldsAreNonnullByDefaultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type FieldsAreNonnullByDefault = FieldsAreNonnullByDefaultMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface FieldsAreNonnullByDefaultStatics {
}

/** JVM class net.minecraft.FileUtil. */
export interface FileUtilMembers {
}
export type FileUtil = FileUtilMembers;
export interface FileUtilStatics {
  new(): FileUtil;
  /** @throws java.io.IOException */
  createDirectoriesSafe(arg0: JavaOpaque<"java.nio.file.Path">): void;
  createPathToResource(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string, arg2: string): JavaOpaque<"java.nio.file.Path">;
  decomposePath(arg0: string): JavaOpaque<"com.mojang.serialization.DataResult", [JavaList<string>]>;
  /** @throws java.io.IOException */
  findAvailableName(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string, arg2: string): string;
  getFullResourcePath(arg0: string): string;
  isPathNormalized(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
  isPathPartPortable(arg0: string): boolean;
  isPathPortable(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
  isValidStrictPathSegment(arg0: string): boolean;
  normalizeResourcePath(arg0: string): string;
  resolvePath(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaList<string>): JavaOpaque<"java.nio.file.Path">;
  sanitizeName(arg0: string): string;
  validatePath(...arg0: Array<string>): void;
}

/** JVM interface net.minecraft.MethodsReturnNonnullByDefault. */
export interface MethodsReturnNonnullByDefaultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type MethodsReturnNonnullByDefault = MethodsReturnNonnullByDefaultMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface MethodsReturnNonnullByDefaultStatics {
}

/** JVM class net.minecraft.Optionull. */
export interface OptionullMembers {
}
export type Optionull = OptionullMembers;
export interface OptionullStatics {
  new(): Optionull;
  first<T>(arg0: JavaCollection<T>): T | null;
  firstOrDefault<T>(arg0: JavaCollection<T>, arg1: T): T;
  firstOrElse<T>(arg0: JavaCollection<T>, arg1: JavaSupplier<T>): T;
  isNullOrEmpty(arg0: Array<number> | null): boolean;
  isNullOrEmpty(arg0: Array<string> | null): boolean;
  isNullOrEmpty(arg0: Array<number> | null): boolean;
  isNullOrEmpty(arg0: Array<number> | null): boolean;
  isNullOrEmpty(arg0: Array<number> | null): boolean;
  isNullOrEmpty(arg0: Array<bigint> | null): boolean;
  isNullOrEmpty<T>(arg0: Array<T> | null): boolean;
  isNullOrEmpty(arg0: Array<number> | null): boolean;
  isNullOrEmpty(arg0: Array<boolean> | null): boolean;
  map<T, R>(arg0: T | null, arg1: JavaFunction<T, R>): R | null;
  mapOrDefault<T, R>(arg0: T | null, arg1: JavaFunction<T, R>, arg2: R): R;
  mapOrElse<T, R>(arg0: T | null, arg1: JavaFunction<T, R>, arg2: JavaSupplier<R>): R;
  orElse<T>(arg0: T | null, arg1: T): T;
}

/** JVM class net.minecraft.ReportedException. */
export interface ReportedExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  getCause(): JavaOpaque<"java.lang.Throwable">;
  getMessage(): string;
  getReport(): CrashReport;
}
export type ReportedException = ReportedExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ReportedExceptionStatics {
  new(arg0: CrashReport): ReportedException;
}

/** JVM record net.minecraft.ReportType. */
export interface ReportTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  appendHeader(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: JavaList<string>): void;
  equals(arg0: object): boolean;
  getErrorComment(): string;
  hashCode(): number;
  header(): string;
  nuggets(): JavaList<string>;
  toString(): string;
}
export type ReportType = ReportTypeMembers & JavaOpaque<"java.lang.Record">;
export interface ReportTypeStatics {
  new(arg0: string, arg1: JavaList<string>): ReportType;
  readonly CHUNK_IO_ERROR: ReportType;
  readonly CRASH: ReportType;
  readonly NETWORK_PROTOCOL_ERROR: ReportType;
  readonly PROFILE: ReportType;
  readonly TEST: ReportType;
}

/** JVM class net.minecraft.ResourceLocationException. */
export interface ResourceLocationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type ResourceLocationException = ResourceLocationExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ResourceLocationExceptionStatics {
  new(arg0: string): ResourceLocationException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): ResourceLocationException;
}

/** JVM class net.minecraft.SharedConstants. */
export interface SharedConstantsMembers {
}
export type SharedConstants = SharedConstantsMembers;
export interface SharedConstantsStatics {
  new(): SharedConstants;
  readonly AVERAGE_GAME_TICKS_PER_RANDOM_TICK_PER_BLOCK: 1365.3334;
  readonly AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_GAME_DAY: 17.578125;
  readonly AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_MINUTE: 0.87890625;
  readonly CHECK_DATA_FIXER_SCHEMA: boolean;
  readonly COMMAND_STACK_TRACES: 0;
  readonly CRASH_EAGERLY: 0;
  readonly DATA_PACK_FORMAT: 81;
  readonly DATA_VERSION_TAG: "DataVersion";
  readonly DEBUG_ALLOW_LOW_SIM_DISTANCE: 0;
  readonly DEBUG_AQUIFERS: 0;
  readonly DEBUG_BEES: 0;
  readonly DEBUG_BLOCK_BREAK: 0;
  readonly DEBUG_BRAIN: 0;
  readonly DEBUG_BREEZE_MOB: 0;
  readonly DEBUG_BYPASS_REALMS_VERSION_CHECK: 0;
  readonly DEBUG_CARVERS: 0;
  readonly DEBUG_CHUNKS: 0;
  readonly DEBUG_COLLISION: 0;
  readonly DEBUG_CURSOR_POS: 0;
  readonly DEBUG_DEFAULT_SKIN_OVERRIDE: 0;
  readonly DEBUG_DISABLE_AQUIFERS: 0;
  readonly DEBUG_DISABLE_BELOW_ZERO_RETROGENERATION: 0;
  readonly DEBUG_DISABLE_BLENDING: 0;
  readonly DEBUG_DISABLE_CARVERS: 0;
  readonly DEBUG_DISABLE_FEATURES: 0;
  readonly DEBUG_DISABLE_FLUID_GENERATION: 0;
  readonly DEBUG_DISABLE_LIQUID_SPREADING: 0;
  readonly DEBUG_DISABLE_ORE_VEINS: 0;
  readonly DEBUG_DISABLE_STRUCTURES: 0;
  readonly DEBUG_DISABLE_SURFACE: 0;
  readonly DEBUG_DONT_SAVE_WORLD: 0;
  readonly DEBUG_DONT_SEND_TELEMETRY_TO_BACKEND: 0;
  readonly DEBUG_DUMP_INTERPOLATED_TEXTURE_FRAMES: 0;
  readonly DEBUG_DUMP_TEXTURE_ATLAS: 0;
  readonly DEBUG_ENTITY_BLOCK_INTERSECTION: 0;
  readonly DEBUG_EXPERIMENTAL_REDSTONEWIRE_UPDATE_ORDER: 0;
  readonly DEBUG_FEATURE_COUNT: 0;
  readonly DEBUG_FORCE_ONBOARDING_SCREEN: 0;
  readonly DEBUG_FORCE_TELEMETRY: 0;
  readonly DEBUG_GAME_EVENT_LISTENERS: 0;
  readonly DEBUG_GOAL_SELECTOR: 0;
  readonly DEBUG_HEIGHTMAP: 0;
  readonly DEBUG_HOTKEYS: 0;
  readonly DEBUG_IGNORE_LOCAL_MOB_CAP: 0;
  readonly DEBUG_JFR_PROFILING_ENABLE_LEVEL_LOADING: 0;
  readonly DEBUG_KEEP_JIGSAW_BLOCKS_DURING_STRUCTURE_GEN: 0;
  readonly DEBUG_LARGE_DRIPSTONE: 0;
  readonly DEBUG_LIGHT: 0;
  readonly DEBUG_MONITOR_TICK_TIMES: 0;
  readonly DEBUG_NAMED_RUNNABLES: 0;
  readonly DEBUG_NEIGHBORSUPDATE: 0;
  readonly DEBUG_ONLY_GENERATE_HALF_THE_WORLD: 0;
  readonly DEBUG_OPEN_INCOMPATIBLE_WORLDS: 0;
  readonly DEBUG_ORE_VEINS: 0;
  readonly DEBUG_PATHFINDING: 0;
  readonly DEBUG_RAIDS: 0;
  readonly DEBUG_RENDER: 0;
  readonly DEBUG_RENDER_UI_LAYERING_RECTANGLES: 0;
  readonly DEBUG_RESOURCE_GENERATION_OVERRIDE: 0;
  readonly DEBUG_SAVE_STRUCTURES_AS_SNBT: 0;
  readonly DEBUG_SCULK_CATALYST: 0;
  readonly DEBUG_SHAPES: 0;
  readonly DEBUG_SHOW_LOCAL_SERVER_ENTITY_HIT_BOXES: 0;
  readonly DEBUG_SHOW_SERVER_DEBUG_VALUES: 0;
  readonly DEBUG_SHUFFLE_UI_RENDERING_ORDER: 0;
  readonly DEBUG_SKY_LIGHT_SECTIONS: 0;
  readonly DEBUG_SOCIAL_INTERACTIONS: 0;
  readonly DEBUG_SOLID_FACE: 0;
  readonly DEBUG_STRUCTURES: 0;
  readonly DEBUG_STRUCTURE_EDIT_MODE: 0;
  readonly DEBUG_SUBTITLES: 0;
  readonly DEBUG_SUPPORT_BLOCKS: 0;
  readonly DEBUG_SYNCHRONOUS_GL_LOGS: 0;
  readonly DEBUG_TRIAL_SPAWNER_DETECTS_SHEEP_AS_PLAYERS: 0;
  readonly DEBUG_UI_NARRATION: 0;
  readonly DEBUG_UNLOCK_ALL_TRADES: 0;
  readonly DEBUG_VALIDATE_RESOURCE_PATH_CASE: 0;
  readonly DEBUG_VAULT_DETECTS_SHEEP_AS_PLAYERS: 0;
  readonly DEBUG_VERBOSE_SERVER_EVENTS: 0;
  readonly DEBUG_VILLAGE_SECTIONS: 0;
  readonly DEBUG_WATER: 0;
  readonly DEBUG_WORLDGENATTEMPT: 0;
  readonly DEBUG_WORLD_RECREATE: 0;
  readonly DEFAULT_MINECRAFT_PORT: 25565;
  readonly FAKE_MS_JITTER: 0;
  readonly FAKE_MS_LATENCY: 0;
  readonly FIX_SAND_DUPE: 0;
  readonly FIX_TNT_DUPE: 0;
  readonly ILLEGAL_FILE_CHARACTERS: Array<string>;
  readonly IS_RUNNING_IN_IDE: boolean;
  readonly LANGUAGE_FORMAT: 1;
  readonly MAXIMUM_BLOCK_EXPLOSION_RESISTANCE: 3600000;
  readonly MAXIMUM_TICK_TIME_NANOS: bigint;
  readonly MAX_CHAINED_NEIGHBOR_UPDATES: 1000000;
  readonly MAX_CHAT_LENGTH: 256;
  readonly MAX_FUNCTION_COMMAND_LENGTH: 2000000;
  readonly MAX_PLAYER_NAME_LENGTH: 16;
  readonly MAX_RENDER_DISTANCE: 32;
  readonly MAX_USER_INPUT_COMMAND_LENGTH: 32500;
  readonly MILLIS_PER_TICK: 50;
  readonly NETTY_LEAK_DETECTION: JavaOpaque<"io.netty.util.ResourceLeakDetector$Level">;
  readonly RELEASE_NETWORK_PROTOCOL_VERSION: 772;
  readonly REPORT_FORMAT_VERSION: 1;
  readonly RESOURCE_PACK_FORMAT: 64;
  readonly SERIES: "main";
  readonly SNAPSHOT: 0;
  readonly SNAPSHOT_NETWORK_PROTOCOL_VERSION: 259;
  readonly SNBT_NAG_VERSION: 4420;
  readonly TICKS_PER_GAME_DAY: 24000;
  readonly TICKS_PER_MINUTE: 1200;
  readonly TICKS_PER_SECOND: 20;
  readonly USE_DEBUG_FEATURES: 0;
  readonly USE_DEVONLY: 0;
  readonly USE_WORKFLOWS_HOOKS: 0;
  readonly VERSION_STRING: "1.21.8";
  readonly WORLD_ICON_SIZE: 64;
  readonly WORLD_RESOLUTION: 16;
  readonly WORLD_VERSION: 4440;
  readonly debugGenerateSquareTerrainWithoutNoise: boolean;
  readonly debugGenerateStripedTerrainWithoutNoise: boolean;
  debugVoidTerrain(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  getCurrentVersion(): WorldVersion;
  getProtocolVersion(): number;
  setVersion(arg0: WorldVersion): void;
  tryDetectVersion(): void;
}

/** JVM interface net.minecraft.SuppressForbidden. */
export interface SuppressForbiddenMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  reason(): string;
}
export type SuppressForbidden = SuppressForbiddenMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface SuppressForbiddenStatics {
}

/** JVM class net.minecraft.SystemReport. */
export interface SystemReportMembers {
  appendToCrashReportString(arg0: JavaOpaque<"java.lang.StringBuilder">): void;
  setDetail(arg0: string, arg1: string): void;
  setDetail(arg0: string, arg1: JavaSupplier<string>): void;
  toLineSeparatedString(): string;
}
export type SystemReport = SystemReportMembers;
export interface SystemReportStatics {
  new(): SystemReport;
  readonly BYTES_PER_MEBIBYTE: 1048576;
  sizeInMiB(arg0: bigint): number;
}

/** JVM record net.minecraft.TracingExecutor. */
export interface TracingExecutorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"java.util.concurrent.Executor">];
  equals(arg0: object): boolean;
  execute(arg0: JavaRunnable): void;
  forName(arg0: string): JavaOpaque<"java.util.concurrent.Executor">;
  hashCode(): number;
  service(): JavaOpaque<"java.util.concurrent.ExecutorService">;
  shutdownAndAwait(arg0: bigint, arg1: JavaOpaque<"java.util.concurrent.TimeUnit">): void;
  toString(): string;
}
export type TracingExecutor = TracingExecutorMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"java.util.concurrent.Executor">;
export interface TracingExecutorStatics {
  new(arg0: JavaOpaque<"java.util.concurrent.ExecutorService">): TracingExecutor;
}

/** JVM class net.minecraft.Util. */
export interface UtilMembers {
}
export type Util = UtilMembers;
export interface UtilStatics {
  new(): Util;
  readonly COLLISION_EPSILON: 1e-7;
  readonly DIMENSION_DATA_IO_POOL: TracingExecutor;
  readonly LINEAR_LOOKUP_THRESHOLD: 8;
  readonly NANOS_PER_MILLI: 1000000;
  readonly NIL_UUID: JavaOpaque<"java.util.UUID">;
  readonly PROFILE_EXECUTOR: JavaOpaque<"java.util.concurrent.ExecutorService">;
  readonly TICKER: JavaOpaque<"com.google.common.base.Ticker">;
  readonly ZIP_FILE_SYSTEM_PROVIDER: JavaOpaque<"java.nio.file.spi.FileSystemProvider">;
  allOf<T>(): JavaPredicate<T>;
  allOf<T>(arg0: JavaList<JavaPredicate<T>>): JavaPredicate<T>;
  allOf<T>(arg0: JavaPredicate<T>): JavaPredicate<T>;
  allOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>): JavaPredicate<T>;
  allOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>, arg2: JavaPredicate<T>): JavaPredicate<T>;
  allOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>, arg2: JavaPredicate<T>, arg3: JavaPredicate<T>): JavaPredicate<T>;
  allOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>, arg2: JavaPredicate<T>, arg3: JavaPredicate<T>, arg4: JavaPredicate<T>): JavaPredicate<T>;
  allOf<T>(...arg0: Array<JavaPredicate<T>>): JavaPredicate<T>;
  anyOf<T>(): JavaPredicate<T>;
  anyOf<T>(arg0: JavaList<JavaPredicate<T>>): JavaPredicate<T>;
  anyOf<T>(arg0: JavaPredicate<T>): JavaPredicate<T>;
  anyOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>): JavaPredicate<T>;
  anyOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>, arg2: JavaPredicate<T>): JavaPredicate<T>;
  anyOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>, arg2: JavaPredicate<T>, arg3: JavaPredicate<T>): JavaPredicate<T>;
  anyOf<T>(arg0: JavaPredicate<T>, arg1: JavaPredicate<T>, arg2: JavaPredicate<T>, arg3: JavaPredicate<T>, arg4: JavaPredicate<T>): JavaPredicate<T>;
  anyOf<T>(...arg0: Array<JavaPredicate<T>>): JavaPredicate<T>;
  backgroundExecutor(): TracingExecutor;
  blockUntilDone<T>(arg0: JavaFunction<JavaOpaque<"java.util.concurrent.Executor">, PromiseLike<T>>): PromiseLike<T>;
  blockUntilDone<T>(arg0: JavaFunction<JavaOpaque<"java.util.concurrent.Executor">, T>, arg1: JavaPredicate<T>): T;
  copyAndAdd<T>(arg0: T, arg1: JavaList<T>): JavaList<T>;
  copyAndAdd<T>(arg0: JavaList<T>, arg1: T): JavaList<T>;
  copyAndPut<K, V>(arg0: JavaMap<K, V>, arg1: K, arg2: V): JavaMap<K, V>;
  /** @throws java.io.IOException */
  copyBetweenDirs(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"java.nio.file.Path">): void;
  createIndexIdentityLookup<T>(arg0: JavaList<T>): JavaOpaque<"java.util.function.ToIntFunction", [T]>;
  createIndexLookup<T>(arg0: JavaList<T>): JavaOpaque<"java.util.function.ToIntFunction", [T]>;
  describeError(arg0: JavaOpaque<"java.lang.Throwable">): string;
  fetchChoiceType(arg0: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg1: string): JavaOpaque<"com.mojang.datafixers.types.Type", [object]> | null;
  findNextInIterable<T>(arg0: Iterable<T>, arg1: T | null): T;
  findPreviousInIterable<T>(arg0: Iterable<T>, arg1: T | null): T;
  fixedSize<T>(arg0: JavaList<T>, arg1: number): JavaOpaque<"com.mojang.serialization.DataResult", [JavaList<T>]>;
  fixedSize(arg0: JavaOpaque<"java.util.stream.IntStream">, arg1: number): JavaOpaque<"com.mojang.serialization.DataResult", [Array<number>]>;
  fixedSize(arg0: JavaOpaque<"java.util.stream.LongStream">, arg1: number): JavaOpaque<"com.mojang.serialization.DataResult", [Array<bigint>]>;
  getEpochMillis(): bigint;
  getFilenameFormattedDateTime(): string;
  getMillis(): bigint;
  getNanos(): bigint;
  getPlatform(): Util_OS;
  getPropertyName<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: object): string;
  getRandom<T>(arg0: JavaList<T>, arg1: j_net_minecraft_util.RandomSource): T;
  getRandom(arg0: Array<number>, arg1: j_net_minecraft_util.RandomSource): number;
  getRandom<T>(arg0: Array<T>, arg1: j_net_minecraft_util.RandomSource): T;
  getRandomSafe<T>(arg0: JavaList<T>, arg1: j_net_minecraft_util.RandomSource): JavaOptional<T>;
  getRegisteredName<T>(arg0: j_net_minecraft_core.Registry<T>, arg1: T): string;
  getVmArguments(): JavaOpaque<"java.util.stream.Stream", [string]>;
  growByHalf(arg0: number, arg1: number): number;
  ifElse<T>(arg0: JavaOptional<T>, arg1: JavaConsumer<T>, arg2: JavaRunnable): JavaOptional<T>;
  ioPool(): TracingExecutor;
  isAarch64(): boolean;
  isSymmetrical<T>(arg0: number, arg1: number, arg2: JavaList<T>): boolean;
  lastOf<T>(arg0: JavaList<T>): T;
  logAndPauseIfInIde(arg0: string): void;
  logAndPauseIfInIde(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): void;
  make<T>(arg0: T, arg1: JavaConsumer<T>): T;
  make<T>(arg0: JavaSupplier<T>): T;
  makeDescriptionId(arg0: string, arg1: j_net_minecraft_resources.ResourceLocation | null): string;
  makeEnumMap<K /* extends JavaOpaque<"java.lang.Enum", [K]> */, V>(arg0: JavaClass<K>, arg1: JavaFunction<K, V>): JavaMap<K, V>;
  mapValues<K, V1, V2>(arg0: JavaMap<K, V1>, arg1: JavaFunction<V1, V2>): JavaMap<K, V2>;
  mapValuesLazy<K, V1, V2>(arg0: JavaMap<K, V1>, arg1: JavaOpaque<"com.google.common.base.Function", [V1, V2]>): JavaMap<K, V2>;
  maxAllowedExecutorThreads(): number;
  memoize<T, U, R>(arg0: JavaBiFunction<T, U, R>): JavaBiFunction<T, U, R>;
  memoize<T, R>(arg0: JavaFunction<T, R>): JavaFunction<T, R>;
  name(arg0: JavaRunnable, arg1: JavaSupplier<string>): JavaRunnable;
  name<T>(arg0: JavaSupplier<T>, arg1: JavaSupplier<string>): JavaSupplier<T>;
  nonCriticalIoPool(): TracingExecutor;
  offsetByCodepoints(arg0: string, arg1: number, arg2: number): number;
  onThreadException(arg0: JavaOpaque<"java.lang.Thread">, arg1: JavaOpaque<"java.lang.Throwable">): void;
  /** @throws java.net.URISyntaxException */
  parseAndValidateUntrustedUri(arg0: string): JavaOpaque<"java.net.URI">;
  pauseInIde<T /* extends JavaOpaque<"java.lang.Throwable"> */>(arg0: T): T;
  prefix(arg0: string, arg1: JavaConsumer<string>): JavaConsumer<string>;
  readTypedOrThrow<T>(arg0: JavaOpaque<"com.mojang.datafixers.types.Type", [T]>, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.datafixers.Typed", [T]>;
  readTypedOrThrow<T>(arg0: JavaOpaque<"com.mojang.datafixers.types.Type", [T]>, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg2: boolean): JavaOpaque<"com.mojang.datafixers.Typed", [T]>;
  runNamed(arg0: JavaRunnable, arg1: string): void;
  safeReplaceFile(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"java.nio.file.Path">): void;
  safeReplaceOrMoveFile(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"java.nio.file.Path">, arg3: boolean): boolean;
  sanitizeName(arg0: string, arg1: CharPredicate): string;
  sequence<V>(arg0: JavaList<PromiseLike<V>>): PromiseLike<JavaList<V>>;
  sequenceFailFast<V>(arg0: JavaList<PromiseLike<V>>): PromiseLike<JavaList<V>>;
  sequenceFailFastAndCancel<V>(arg0: JavaList<PromiseLike<V>>): PromiseLike<JavaList<V>>;
  setPause(arg0: JavaConsumer<string>): void;
  shuffle<T>(arg0: JavaList<T>, arg1: j_net_minecraft_util.RandomSource): void;
  shuffledCopy<T>(arg0: JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [T]>, arg1: j_net_minecraft_util.RandomSource): JavaList<T>;
  shuffledCopy<T>(arg0: Array<T>, arg1: j_net_minecraft_util.RandomSource): JavaList<T>;
  shutdownExecutors(): void;
  singleKeyCache<K, V>(arg0: JavaFunction<K, V>): j_net_minecraft_util.SingleKeyCache<K, V>;
  startTimerHackThread(): void;
  throwAsRuntime(arg0: JavaOpaque<"java.lang.Throwable">): void;
  readonly timeSource: j_net_minecraft_util.TimeSource_NanoTimeSource;
  toMap<K, V>(): JavaOpaque<"java.util.stream.Collector", [JavaMapEntry<K, V>, object, JavaMap<K, V>]>;
  toMutableList<T>(): JavaOpaque<"java.util.stream.Collector", [T, object, JavaList<T>]>;
  toShuffledList(arg0: JavaOpaque<"java.util.stream.IntStream">, arg1: j_net_minecraft_util.RandomSource): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntArrayList">;
  toShuffledList<T>(arg0: JavaOpaque<"java.util.stream.Stream", [T]>, arg1: j_net_minecraft_util.RandomSource): JavaList<T>;
  writeAndReadTypedOrThrow<A, B>(arg0: JavaOpaque<"com.mojang.datafixers.Typed", [A]>, arg1: JavaOpaque<"com.mojang.datafixers.types.Type", [B]>, arg2: JavaOpaque<"java.util.function.UnaryOperator", [JavaOpaque<"com.mojang.serialization.Dynamic", [object]>]>): JavaOpaque<"com.mojang.datafixers.Typed", [B]>;
}

/** Live JVM enum net.minecraft.Util$OS; constants are host handles, not strings. */
export type Util_OS = JavaEnum<"net.minecraft.Util$OS", "LINUX" | "OSX" | "SOLARIS" | "UNKNOWN" | "WINDOWS"> & Util_OSMembers;
export interface Util_OSMembers {
  openFile(arg0: JavaOpaque<"java.io.File">): void;
  openPath(arg0: JavaOpaque<"java.nio.file.Path">): void;
  openUri(arg0: string): void;
  openUri(arg0: JavaOpaque<"java.net.URI">): void;
  telemetryName(): string;
}
export interface Util_OSStatics {
  readonly LINUX: Util_OS;
  readonly OSX: Util_OS;
  readonly SOLARIS: Util_OS;
  readonly UNKNOWN: Util_OS;
  readonly WINDOWS: Util_OS;
  valueOf(arg0: string): Util_OS;
  values(): Array<Util_OS>;
}

/** JVM interface net.minecraft.WorldVersion. */
export interface WorldVersionMembers {
  buildTime(): JavaOpaque<"java.util.Date">;
  dataVersion(): j_net_minecraft_world_level_storage.DataVersion;
  id(): string;
  name(): string;
  packVersion(arg0: j_net_minecraft_server_packs.PackType): number;
  protocolVersion(): number;
  stable(): boolean;
}
export type WorldVersion = WorldVersionMembers;
export interface WorldVersionStatics {
}

/** JVM record net.minecraft.WorldVersion$Simple. */
export interface WorldVersion_SimpleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, WorldVersion];
  buildTime(): JavaOpaque<"java.util.Date">;
  dataVersion(): j_net_minecraft_world_level_storage.DataVersion;
  datapackVersion(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  name(): string;
  packVersion(arg0: j_net_minecraft_server_packs.PackType): number;
  protocolVersion(): number;
  resourcePackVersion(): number;
  stable(): boolean;
  toString(): string;
}
export type WorldVersion_Simple = WorldVersion_SimpleMembers & JavaOpaque<"java.lang.Record"> & WorldVersion;
export interface WorldVersion_SimpleStatics {
  new(arg0: string, arg1: string, arg2: j_net_minecraft_world_level_storage.DataVersion, arg3: number, arg4: number, arg5: number, arg6: JavaOpaque<"java.util.Date">, arg7: boolean): WorldVersion_Simple;
}
