// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_storage from './net.minecraft.world.level.chunk.storage.generated.js';

/** JVM class net.minecraft.world.entity.ai.village.poi.PoiManager. */
export interface PoiManagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk_storage.SectionStorage<PoiSection, PoiSection_Packed>, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.poi.ChunkSystemPoiManager">];
  add(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Holder<PoiType>): void;
  checkConsistencyWithBlocks(arg0: j_net_minecraft_core.SectionPos, arg1: j_net_minecraft_world_level_chunk.LevelChunkSection): void;
  ensureLoadedAndValid(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  exists(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>): boolean;
  existsAtPosition(arg0: j_net_minecraft_resources.ResourceKey<PoiType>, arg1: j_net_minecraft_core.BlockPos): boolean;
  find(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaPredicate<j_net_minecraft_core.BlockPos>, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: PoiManager_Occupancy): JavaOptional<j_net_minecraft_core.BlockPos>;
  findAll(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaPredicate<j_net_minecraft_core.BlockPos>, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  findAllClosestFirstWithType(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaPredicate<j_net_minecraft_core.BlockPos>, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Holder<PoiType>, j_net_minecraft_core.BlockPos]>]>;
  findAllWithType(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaPredicate<j_net_minecraft_core.BlockPos>, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Holder<PoiType>, j_net_minecraft_core.BlockPos]>]>;
  findClosest(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaPredicate<j_net_minecraft_core.BlockPos>, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: PoiManager_Occupancy): JavaOptional<j_net_minecraft_core.BlockPos>;
  findClosest(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: PoiManager_Occupancy): JavaOptional<j_net_minecraft_core.BlockPos>;
  findClosestWithType(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: PoiManager_Occupancy): JavaOptional<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Holder<PoiType>, j_net_minecraft_core.BlockPos]>>;
  get(arg0: bigint): JavaOptional<PoiSection>;
  getCountInRange(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: PoiManager_Occupancy): bigint;
  getFreeTickets(arg0: j_net_minecraft_core.BlockPos): number;
  getInChunk(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: j_net_minecraft_world_level.ChunkPos, arg2: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [PoiRecord]>;
  getInRange(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [PoiRecord]>;
  getInSquare(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [PoiRecord]>;
  getOrCreate(arg0: bigint): object;
  getOrCreate(arg0: bigint): PoiSection;
  getOrLoad(arg0: bigint): JavaOptional<PoiSection>;
  getRandom(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaPredicate<j_net_minecraft_core.BlockPos>, arg2: PoiManager_Occupancy, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: j_net_minecraft_util.RandomSource): JavaOptional<j_net_minecraft_core.BlockPos>;
  getType(arg0: j_net_minecraft_core.BlockPos): JavaOptional<j_net_minecraft_core.Holder<PoiType>>;
  moonrise$checkConsistency(arg0: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  moonrise$getWorld(): j_net_minecraft_server_level.ServerLevel;
  moonrise$loadInPoiChunk(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.poi.PoiChunk">): void;
  moonrise$onUnload(arg0: bigint): void;
  onSectionLoad(arg0: bigint): void;
  release(arg0: j_net_minecraft_core.BlockPos): boolean;
  remove(arg0: j_net_minecraft_core.BlockPos): void;
  sectionsToVillage(arg0: j_net_minecraft_core.SectionPos): number;
  setDirty(arg0: bigint): void;
  take(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_core.Holder<PoiType>, j_net_minecraft_core.BlockPos]>, arg2: j_net_minecraft_core.BlockPos, arg3: number): JavaOptional<j_net_minecraft_core.BlockPos>;
  tick(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
}
export type PoiManager = PoiManagerMembers & j_net_minecraft_world_level_chunk_storage.SectionStorage<PoiSection, PoiSection_Packed> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.poi.ChunkSystemPoiManager">;
export interface PoiManagerStatics {
  new(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: boolean, arg4: j_net_minecraft_core.RegistryAccess, arg5: j_net_minecraft_world_level_chunk_storage.ChunkIOErrorReporter, arg6: j_net_minecraft_world_level.LevelHeightAccessor): PoiManager;
  readonly MAX_VILLAGE_DISTANCE: 6;
  readonly VILLAGE_SECTION_SIZE: 1;
}

/** Live JVM enum net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy; constants are host handles, not strings. */
export type PoiManager_Occupancy = JavaEnum<"net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy", "ANY" | "HAS_SPACE" | "IS_OCCUPIED"> & PoiManager_OccupancyMembers;
export interface PoiManager_OccupancyMembers {
  getTest(): JavaPredicate<PoiRecord>;
}
export interface PoiManager_OccupancyStatics {
  readonly ANY: PoiManager_Occupancy;
  readonly HAS_SPACE: PoiManager_Occupancy;
  readonly IS_OCCUPIED: PoiManager_Occupancy;
  valueOf(arg0: string): PoiManager_Occupancy;
  values(): Array<PoiManager_Occupancy>;
}

/** JVM class net.minecraft.world.entity.ai.village.poi.PoiRecord. */
export interface PoiRecordMembers {
  acquireTicket(): boolean;
  equals(arg0: object): boolean;
  getFreeTickets(): number;
  getPoiType(): j_net_minecraft_core.Holder<PoiType>;
  getPos(): j_net_minecraft_core.BlockPos;
  hasSpace(): boolean;
  hashCode(): number;
  isOccupied(): boolean;
  pack(): PoiRecord_Packed;
  releaseTicket(): boolean;
}
export type PoiRecord = PoiRecordMembers;
export interface PoiRecordStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Holder<PoiType>, arg2: JavaRunnable): PoiRecord;
}

/** JVM record net.minecraft.world.entity.ai.village.poi.PoiRecord$Packed. */
export interface PoiRecord_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  freeTickets(): number;
  hashCode(): number;
  poiType(): j_net_minecraft_core.Holder<PoiType>;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  unpack(arg0: JavaRunnable): PoiRecord;
}
export type PoiRecord_Packed = PoiRecord_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface PoiRecord_PackedStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Holder<PoiType>, arg2: number): PoiRecord_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PoiRecord_Packed]>;
}

/** JVM class net.minecraft.world.entity.ai.village.poi.PoiSection. */
export interface PoiSectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.poi.ChunkSystemPoiSection">];
  add(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Holder<PoiType>): void;
  exists(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>): boolean;
  getData(): JavaMap<j_net_minecraft_core.Holder<PoiType>, JavaSet<PoiRecord>>;
  getFreeTickets(arg0: j_net_minecraft_core.BlockPos): number;
  getRecords(arg0: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>, arg1: PoiManager_Occupancy): JavaOpaque<"java.util.stream.Stream", [PoiRecord]>;
  getType(arg0: j_net_minecraft_core.BlockPos): JavaOptional<j_net_minecraft_core.Holder<PoiType>>;
  moonrise$asOptional(): JavaOptional<PoiSection>;
  moonrise$isEmpty(): boolean;
  pack(): PoiSection_Packed;
  refresh(arg0: JavaConsumer<JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<PoiType>>>): void;
  release(arg0: j_net_minecraft_core.BlockPos): boolean;
  remove(arg0: j_net_minecraft_core.BlockPos): void;
}
export type PoiSection = PoiSectionMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.poi.ChunkSystemPoiSection">;
export interface PoiSectionStatics {
  new(arg0: JavaRunnable): PoiSection;
}

/** JVM record net.minecraft.world.entity.ai.village.poi.PoiSection$Packed. */
export interface PoiSection_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isValid(): boolean;
  records(): JavaList<PoiRecord_Packed>;
  toString(): string;
  unpack(arg0: JavaRunnable): PoiSection;
}
export type PoiSection_Packed = PoiSection_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface PoiSection_PackedStatics {
  new(arg0: boolean, arg1: JavaList<PoiRecord_Packed>): PoiSection_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PoiSection_Packed]>;
}

/** JVM record net.minecraft.world.entity.ai.village.poi.PoiType. */
export interface PoiTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  is(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  matchingStates(): JavaSet<j_net_minecraft_world_level_block_state.BlockState>;
  maxTickets(): number;
  toString(): string;
  validRange(): number;
}
export type PoiType = PoiTypeMembers & JavaOpaque<"java.lang.Record">;
export interface PoiTypeStatics {
  new(arg0: JavaSet<j_net_minecraft_world_level_block_state.BlockState>, arg1: number, arg2: number): PoiType;
  readonly NONE: JavaPredicate<j_net_minecraft_core.Holder<PoiType>>;
}

/** JVM class net.minecraft.world.entity.ai.village.poi.PoiTypes. */
export interface PoiTypesMembers {
}
export type PoiTypes = PoiTypesMembers;
export interface PoiTypesStatics {
  new(): PoiTypes;
  readonly ARMORER: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly BEEHIVE: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly BEE_NEST: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly BUTCHER: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly CARTOGRAPHER: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly CLERIC: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly FARMER: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly FISHERMAN: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly FLETCHER: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly HOME: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly LEATHERWORKER: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly LIBRARIAN: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly LIGHTNING_ROD: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly LODESTONE: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly MASON: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly MEETING: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly NETHER_PORTAL: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly SHEPHERD: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly TEST_INSTANCE: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly TOOLSMITH: j_net_minecraft_resources.ResourceKey<PoiType>;
  readonly WEAPONSMITH: j_net_minecraft_resources.ResourceKey<PoiType>;
  bootstrap(arg0: j_net_minecraft_core.Registry<PoiType>): PoiType;
  forState(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOptional<j_net_minecraft_core.Holder<PoiType>>;
  hasPoi(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
