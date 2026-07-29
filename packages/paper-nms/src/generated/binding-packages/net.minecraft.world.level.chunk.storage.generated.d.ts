// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util_datafix from './net.minecraft.util.datafix.generated.js';
import type * as j_net_minecraft_util_thread from './net.minecraft.util.thread.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_village_poi from './net.minecraft.world.entity.ai.village.poi.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_blending from './net.minecraft.world.level.levelgen.blending.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM interface net.minecraft.world.level.chunk.storage.ChunkIOErrorReporter. */
export interface ChunkIOErrorReporterMembers {
  reportChunkLoadFailure(arg0: JavaOpaque<"java.lang.Throwable">, arg1: RegionStorageInfo, arg2: j_net_minecraft_world_level.ChunkPos): void;
  reportChunkSaveFailure(arg0: JavaOpaque<"java.lang.Throwable">, arg1: RegionStorageInfo, arg2: j_net_minecraft_world_level.ChunkPos): void;
  reportMisplacedChunk(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level.ChunkPos, arg2: RegionStorageInfo): void;
}
export type ChunkIOErrorReporter = ChunkIOErrorReporterMembers;
export interface ChunkIOErrorReporterStatics {
  createMisplacedChunkReport(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level.ChunkPos): j_net_minecraft.ReportedException;
}

/** JVM interface net.minecraft.world.level.chunk.storage.ChunkScanAccess. */
export interface ChunkScanAccessMembers {
  scanChunk(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.StreamTagVisitor): PromiseLike<void>;
}
export type ChunkScanAccess = ChunkScanAccessMembers;
export interface ChunkScanAccessStatics {
}

/** JVM class net.minecraft.world.level.chunk.storage.ChunkStorage. */
export interface ChunkStorageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.storage.ChunkSystemChunkStorage">, JavaOpaque<"java.lang.AutoCloseable">];
  chunkScanner(): ChunkScanAccess;
  /** @throws java.io.IOException */
  close(): void;
  flushWorker(): void;
  isOldChunkAround(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): boolean;
  moonrise$getRegionStorage(): RegionFileStorage;
  read(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<JavaOptional<j_net_minecraft_nbt.CompoundTag>>;
  storageInfo(): RegionStorageInfo;
  upgradeChunkTag(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, arg1: JavaSupplier<j_net_minecraft_world_level_storage.DimensionDataStorage>, arg2: j_net_minecraft_nbt.CompoundTag, arg3: JavaOptional<j_net_minecraft_resources.ResourceKey<JavaOpaque<"com.mojang.serialization.MapCodec", [j_net_minecraft_world_level_chunk.ChunkGenerator]>>>, arg4: j_net_minecraft_world_level.ChunkPos, arg5: j_net_minecraft_world_level.LevelAccessor | null): j_net_minecraft_nbt.CompoundTag;
  write(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaSupplier<j_net_minecraft_nbt.CompoundTag>): PromiseLike<void>;
}
export type ChunkStorage = ChunkStorageMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.storage.ChunkSystemChunkStorage"> & JavaOpaque<"java.lang.AutoCloseable">;
export interface ChunkStorageStatics {
  new(arg0: RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: boolean): ChunkStorage;
  readonly LAST_MONOLYTH_STRUCTURE_DATA_VERSION: 1493;
  getVersion(arg0: j_net_minecraft_nbt.CompoundTag): number;
  injectDatafixingContext(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, arg2: JavaOptional<j_net_minecraft_resources.ResourceKey<JavaOpaque<"com.mojang.serialization.MapCodec", [j_net_minecraft_world_level_chunk.ChunkGenerator]>>>): void;
}

/** JVM class net.minecraft.world.level.chunk.storage.EntityStorage. */
export interface EntityStorageMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_entity.EntityPersistentStorage<j_net_minecraft_world_entity.Entity>];
  /** @throws java.io.IOException */
  close(): void;
  readonly entityDeserializerQueue: j_net_minecraft_util_thread.ConsecutiveExecutor;
  flush(arg0: boolean): void;
  readonly level: j_net_minecraft_server_level.ServerLevel;
  loadEntities(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<j_net_minecraft_world_level_entity.ChunkEntities<j_net_minecraft_world_entity.Entity>>;
  storeEntities(arg0: j_net_minecraft_world_level_entity.ChunkEntities<j_net_minecraft_world_entity.Entity>): void;
}
export type EntityStorage = EntityStorageMembers & j_net_minecraft_world_level_entity.EntityPersistentStorage<j_net_minecraft_world_entity.Entity>;
export interface EntityStorageStatics {
  new(arg0: SimpleRegionStorage, arg1: j_net_minecraft_server_level.ServerLevel, arg2: JavaOpaque<"java.util.concurrent.Executor">): EntityStorage;
}

/** JVM class net.minecraft.world.level.chunk.storage.IOWorker. */
export interface IOWorkerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, ChunkScanAccess];
  /** @throws java.io.IOException */
  close(): void;
  isOldChunkAround(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): boolean;
  loadAsync(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<JavaOptional<j_net_minecraft_nbt.CompoundTag>>;
  scanChunk(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.StreamTagVisitor): PromiseLike<void>;
  readonly storage: RegionFileStorage;
  storageInfo(): RegionStorageInfo;
  store(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaSupplier<j_net_minecraft_nbt.CompoundTag>): PromiseLike<void>;
  store(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.CompoundTag | null): PromiseLike<void>;
  synchronize(arg0: boolean): PromiseLike<void>;
}
export type IOWorker = IOWorkerMembers & JavaOpaque<"java.lang.AutoCloseable"> & ChunkScanAccess;
export interface IOWorkerStatics {
}

/** JVM class net.minecraft.world.level.chunk.storage.RecreatingChunkStorage. */
export interface RecreatingChunkStorageMembers {
  readonly __javaSupertypes?: readonly [ChunkStorage];
  /** @throws java.io.IOException */
  close(): void;
  write(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaSupplier<j_net_minecraft_nbt.CompoundTag>): PromiseLike<void>;
}
export type RecreatingChunkStorage = RecreatingChunkStorageMembers & ChunkStorage;
export interface RecreatingChunkStorageStatics {
  new(arg0: RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: RegionStorageInfo, arg3: JavaOpaque<"java.nio.file.Path">, arg4: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg5: boolean): RecreatingChunkStorage;
}

/** JVM class net.minecraft.world.level.chunk.storage.RecreatingSimpleRegionStorage. */
export interface RecreatingSimpleRegionStorageMembers {
  readonly __javaSupertypes?: readonly [SimpleRegionStorage];
  /** @throws java.io.IOException */
  close(): void;
  write(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.CompoundTag | null): PromiseLike<void>;
}
export type RecreatingSimpleRegionStorage = RecreatingSimpleRegionStorageMembers & SimpleRegionStorage;
export interface RecreatingSimpleRegionStorageStatics {
  new(arg0: RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: RegionStorageInfo, arg3: JavaOpaque<"java.nio.file.Path">, arg4: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg5: boolean, arg6: j_net_minecraft_util_datafix.DataFixTypes): RecreatingSimpleRegionStorage;
}

/** JVM class net.minecraft.world.level.chunk.storage.RegionBitmap. */
export interface RegionBitmapMembers {
  allocate(arg0: number): number;
  copyFrom(arg0: RegionBitmap): void;
  force(arg0: number, arg1: number): void;
  free(arg0: number, arg1: number): void;
  getUsed(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntSet">;
  tryAllocate(arg0: number, arg1: number): boolean;
}
export type RegionBitmap = RegionBitmapMembers;
export interface RegionBitmapStatics {
  new(): RegionBitmap;
}

/** JVM class net.minecraft.world.level.chunk.storage.RegionFile. */
export interface RegionFileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.storage.ChunkSystemRegionFile">, JavaOpaque<"java.lang.AutoCloseable">];
  /** @throws java.io.IOException */
  clear(arg0: j_net_minecraft_world_level.ChunkPos): void;
  /** @throws java.io.IOException */
  close(): void;
  doesChunkExist(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  /** @throws java.io.IOException */
  flush(): void;
  /** @throws java.io.IOException */
  getChunkDataInputStream(arg0: j_net_minecraft_world_level.ChunkPos): JavaOpaque<"java.io.DataInputStream"> | null;
  /** @throws java.io.IOException */
  getChunkDataOutputStream(arg0: j_net_minecraft_world_level.ChunkPos): JavaOpaque<"java.io.DataOutputStream">;
  getPath(): JavaOpaque<"java.nio.file.Path">;
  getRecalculateCount(): number;
  hasChunk(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  /** @throws java.io.IOException */
  moonrise$startWrite(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_world_level.ChunkPos): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController$WriteData">;
}
export type RegionFile = RegionFileMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.storage.ChunkSystemRegionFile"> & JavaOpaque<"java.lang.AutoCloseable">;
export interface RegionFileStatics {
  /** @throws java.io.IOException */
  new(arg0: RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"java.nio.file.Path">, arg3: RegionFileVersion, arg4: boolean): RegionFile;
  /** @throws java.io.IOException */
  new(arg0: RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"java.nio.file.Path">, arg3: boolean): RegionFile;
  readonly MAX_CHUNK_SIZE: 524288000;
}

/** JVM class net.minecraft.world.level.chunk.storage.RegionFileStorage. */
export interface RegionFileStorageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.ChunkSystemRegionFileStorage">, JavaOpaque<"java.lang.AutoCloseable">];
  /** @throws java.io.IOException */
  close(): void;
  /** @throws java.io.IOException */
  flush(): void;
  /** @throws java.io.IOException */
  getRegionFile(arg0: j_net_minecraft_world_level.ChunkPos): RegionFile;
  info(): RegionStorageInfo;
  moonrise$doesRegionFileNotExistNoIO(arg0: number, arg1: number): boolean;
  /** @throws java.io.IOException */
  moonrise$finishRead(arg0: number, arg1: number, arg2: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController$ReadData">): j_net_minecraft_nbt.CompoundTag;
  /** @throws java.io.IOException */
  moonrise$finishWrite(arg0: number, arg1: number, arg2: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController$WriteData">): void;
  /** @throws java.io.IOException */
  moonrise$getRegionFileIfExists(arg0: number, arg1: number): RegionFile;
  moonrise$getRegionFileIfLoaded(arg0: number, arg1: number): RegionFile;
  /** @throws java.io.IOException */
  moonrise$readData(arg0: number, arg1: number): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController$ReadData">;
  /** @throws java.io.IOException */
  moonrise$startWrite(arg0: number, arg1: number, arg2: j_net_minecraft_nbt.CompoundTag): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController$WriteData">;
  /** @throws java.io.IOException */
  read(arg0: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_nbt.CompoundTag | null;
  readonly regionCache: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap", [RegionFile]>;
  /** @throws java.io.IOException */
  scanChunk(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.StreamTagVisitor): void;
  /** @throws java.io.IOException */
  write(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.CompoundTag | null): void;
}
export type RegionFileStorage = RegionFileStorageMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.ChunkSystemRegionFileStorage"> & JavaOpaque<"java.lang.AutoCloseable">;
export interface RegionFileStorageStatics {
  readonly ANVIL_EXTENSION: ".mca";
  getRegionFileCoordinates(arg0: JavaOpaque<"java.nio.file.Path">): j_net_minecraft_world_level.ChunkPos | null;
  isChunkDataFolder(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}

/** JVM class net.minecraft.world.level.chunk.storage.RegionFileStorage$RegionFileSizeException. */
export interface RegionFileStorage_RegionFileSizeExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type RegionFileStorage_RegionFileSizeException = RegionFileStorage_RegionFileSizeExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface RegionFileStorage_RegionFileSizeExceptionStatics {
  new(arg0: string): RegionFileStorage_RegionFileSizeException;
}

/** JVM class net.minecraft.world.level.chunk.storage.RegionFileVersion. */
export interface RegionFileVersionMembers {
  getId(): number;
  /** @throws java.io.IOException */
  wrap(arg0: JavaOpaque<"java.io.InputStream">): JavaOpaque<"java.io.InputStream">;
  /** @throws java.io.IOException */
  wrap(arg0: JavaOpaque<"java.io.OutputStream">): JavaOpaque<"java.io.OutputStream">;
}
export type RegionFileVersion = RegionFileVersionMembers;
export interface RegionFileVersionStatics {
  readonly DEFAULT: RegionFileVersion;
  readonly VERSIONS: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [RegionFileVersion]>;
  readonly VERSION_CUSTOM: RegionFileVersion;
  readonly VERSION_DEFLATE: RegionFileVersion;
  readonly VERSION_GZIP: RegionFileVersion;
  readonly VERSION_LZ4: RegionFileVersion;
  readonly VERSION_NONE: RegionFileVersion;
  configure(arg0: string): void;
  fromId(arg0: number): RegionFileVersion | null;
  getCompressionFormat(): RegionFileVersion;
  getSelected(): RegionFileVersion;
  isValidVersion(arg0: number): boolean;
}

/** JVM record net.minecraft.world.level.chunk.storage.RegionStorageInfo. */
export interface RegionStorageInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimension(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): string;
  toString(): string;
  type(): string;
  withTypeSuffix(arg0: string): RegionStorageInfo;
}
export type RegionStorageInfo = RegionStorageInfoMembers & JavaOpaque<"java.lang.Record">;
export interface RegionStorageInfoStatics {
  new(arg0: string, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: string): RegionStorageInfo;
}

/** JVM class net.minecraft.world.level.chunk.storage.SectionStorage. */
export interface SectionStorageMembers<R = unknown, P = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.storage.ChunkSystemSectionStorage">];
  /** @throws java.io.IOException */
  close(): void;
  flush(arg0: j_net_minecraft_world_level.ChunkPos): void;
  flushAll(): void;
  get(arg0: bigint): JavaOptional<R> | null;
  getOrLoad(arg0: bigint): JavaOptional<R>;
  hasWork(): boolean;
  /** @throws java.io.IOException */
  moonrise$close(): void;
  moonrise$getRegionStorage(): RegionFileStorage;
  prefetch(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<object>;
  setDirty(arg0: bigint): void;
}
export type SectionStorage<R = unknown, P = unknown> = SectionStorageMembers<R, P> & JavaOpaque<"java.lang.AutoCloseable"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.storage.ChunkSystemSectionStorage">;
export interface SectionStorageStatics {
  new<R, P>(arg0: SimpleRegionStorage, arg1: JavaOpaque<"com.mojang.serialization.Codec", [P]>, arg2: JavaFunction<R, P>, arg3: JavaBiFunction<P, JavaRunnable, R>, arg4: JavaFunction<JavaRunnable, R>, arg5: j_net_minecraft_core.RegistryAccess, arg6: ChunkIOErrorReporter, arg7: j_net_minecraft_world_level.LevelHeightAccessor): SectionStorage<R, P>;
}

/** JVM record net.minecraft.world.level.chunk.storage.SerializableChunkData. */
export interface SerializableChunkDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  belowZeroRetrogen(): j_net_minecraft_world_level_levelgen.BelowZeroRetrogen | null;
  biomeRegistry(): j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>;
  blendingData(): j_net_minecraft_world_level_levelgen_blending.BlendingData_Packed | null;
  blockEntities(): JavaList<j_net_minecraft_nbt.CompoundTag>;
  carvingMask(): Array<bigint> | null;
  chunkPos(): j_net_minecraft_world_level.ChunkPos;
  chunkStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  entities(): JavaList<j_net_minecraft_nbt.CompoundTag>;
  equals(arg0: object): boolean;
  hashCode(): number;
  heightmaps(): JavaMap<j_net_minecraft_world_level_levelgen.Heightmap_Types, Array<bigint>>;
  inhabitedTime(): bigint;
  lastUpdateTime(): bigint;
  lightCorrect(): boolean;
  minSectionY(): number;
  packedTicks(): j_net_minecraft_world_level_chunk.ChunkAccess_PackedTicks;
  persistentDataContainer(): j_net_minecraft_nbt.Tag | null;
  postProcessingSections(): Array<JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">>;
  read(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_ai_village_poi.PoiManager, arg2: RegionStorageInfo, arg3: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_world_level_chunk.ProtoChunk;
  sectionData(): JavaList<SerializableChunkData_SectionData>;
  structureData(): j_net_minecraft_nbt.CompoundTag;
  toString(): string;
  upgradeData(): j_net_minecraft_world_level_chunk.UpgradeData;
  write(): j_net_minecraft_nbt.CompoundTag;
}
export type SerializableChunkData = SerializableChunkDataMembers & JavaOpaque<"java.lang.Record">;
export interface SerializableChunkDataStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_biome.Biome>, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number, arg3: bigint, arg4: bigint, arg5: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg6: j_net_minecraft_world_level_levelgen_blending.BlendingData_Packed | null, arg7: j_net_minecraft_world_level_levelgen.BelowZeroRetrogen | null, arg8: j_net_minecraft_world_level_chunk.UpgradeData, arg9: Array<bigint> | null, arg10: JavaMap<j_net_minecraft_world_level_levelgen.Heightmap_Types, Array<bigint>>, arg11: j_net_minecraft_world_level_chunk.ChunkAccess_PackedTicks, arg12: Array<JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortList">>, arg13: boolean, arg14: JavaList<SerializableChunkData_SectionData>, arg15: JavaList<j_net_minecraft_nbt.CompoundTag>, arg16: JavaList<j_net_minecraft_nbt.CompoundTag>, arg17: j_net_minecraft_nbt.CompoundTag, arg18: j_net_minecraft_nbt.Tag | null): SerializableChunkData;
  readonly BLOCK_LIGHT_TAG: "BlockLight";
  readonly BLOCK_STATE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_world_level_chunk.PalettedContainer<j_net_minecraft_world_level_block_state.BlockState>]>;
  readonly HEIGHTMAPS_TAG: "Heightmaps";
  readonly IS_LIGHT_ON_TAG: "isLightOn";
  readonly SECTIONS_TAG: "sections";
  readonly SKY_LIGHT_TAG: "SkyLight";
  readonly X_POS_TAG: "xPos";
  readonly Z_POS_TAG: "zPos";
  copyOf(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_chunk.ChunkAccess): SerializableChunkData;
  getChunkCoordinate(arg0: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_world_level.ChunkPos;
  getChunkStatusFromTag(arg0: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getLastWorldSaveTime(arg0: j_net_minecraft_nbt.CompoundTag): bigint;
  parse(arg0: j_net_minecraft_world_level.LevelHeightAccessor, arg1: j_net_minecraft_core.RegistryAccess, arg2: j_net_minecraft_nbt.CompoundTag): SerializableChunkData | null;
}

/** JVM class net.minecraft.world.level.chunk.storage.SerializableChunkData$ChunkReadException. */
export interface SerializableChunkData_ChunkReadExceptionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_nbt.NbtException];
}
export type SerializableChunkData_ChunkReadException = SerializableChunkData_ChunkReadExceptionMembers & j_net_minecraft_nbt.NbtException;
export interface SerializableChunkData_ChunkReadExceptionStatics {
  new(arg0: string): SerializableChunkData_ChunkReadException;
}

/** JVM class net.minecraft.world.level.chunk.storage.SerializableChunkData$SectionData. */
export interface SerializableChunkData_SectionDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.storage.StarlightSectionData">];
  blockLight(): j_net_minecraft_world_level_chunk.DataLayer | null;
  chunkSection(): j_net_minecraft_world_level_chunk.LevelChunkSection | null;
  skyLight(): j_net_minecraft_world_level_chunk.DataLayer | null;
  starlight$getBlockLightState(): number;
  starlight$getSkyLightState(): number;
  starlight$setBlockLightState(arg0: number): void;
  starlight$setSkyLightState(arg0: number): void;
  y(): number;
}
export type SerializableChunkData_SectionData = SerializableChunkData_SectionDataMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.storage.StarlightSectionData">;
export interface SerializableChunkData_SectionDataStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_chunk.LevelChunkSection | null, arg2: j_net_minecraft_world_level_chunk.DataLayer | null, arg3: j_net_minecraft_world_level_chunk.DataLayer | null): SerializableChunkData_SectionData;
}

/** JVM class net.minecraft.world.level.chunk.storage.SimpleRegionStorage. */
export interface SimpleRegionStorageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  /** @throws java.io.IOException */
  close(): void;
  read(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<JavaOptional<j_net_minecraft_nbt.CompoundTag>>;
  storageInfo(): RegionStorageInfo;
  synchronize(arg0: boolean): PromiseLike<void>;
  upgradeChunkTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [j_net_minecraft_nbt.Tag]>, arg1: number): JavaOpaque<"com.mojang.serialization.Dynamic", [j_net_minecraft_nbt.Tag]>;
  upgradeChunkTag(arg0: j_net_minecraft_nbt.CompoundTag, arg1: number): j_net_minecraft_nbt.CompoundTag;
  readonly worker: IOWorker;
  write(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.CompoundTag | null): PromiseLike<void>;
}
export type SimpleRegionStorage = SimpleRegionStorageMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface SimpleRegionStorageStatics {
  new(arg0: RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: boolean, arg4: j_net_minecraft_util_datafix.DataFixTypes): SimpleRegionStorage;
}
