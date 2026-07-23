// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_protocol_status from './net.minecraft.network.protocol.status.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_server_level_progress from './net.minecraft.server.level.progress.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_server_waypoints from './net.minecraft.server.waypoints.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_thread from './net.minecraft.util.thread.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_ai_village from './net.minecraft.world.entity.ai.village.generated.js';
import type * as j_net_minecraft_world_entity_ai_village_poi from './net.minecraft.world.entity.ai.village.poi.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_boss from './net.minecraft.world.entity.boss.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon from './net.minecraft.world.entity.boss.enderdragon.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster_warden from './net.minecraft.world.entity.monster.warden.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_chunk_storage from './net.minecraft.world.level.chunk.storage.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_dimension_end from './net.minecraft.world.level.dimension.end.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_lighting from './net.minecraft.world.level.lighting.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_portal from './net.minecraft.world.level.portal.generated.js';
import type * as j_net_minecraft_world_level_redstone from './net.minecraft.world.level.redstone.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_net_minecraft_world_ticks from './net.minecraft.world.ticks.generated.js';
import type * as j_org_bukkit_craftbukkit_block from './org.bukkit.craftbukkit.block.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';
import type * as j_org_bukkit_craftbukkit_event from './org.bukkit.craftbukkit.event.generated.js';

/** JVM class net.minecraft.server.level.BlockDestructionProgress. */
export interface BlockDestructionProgressMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [BlockDestructionProgress]>];
  compareTo(arg0: object): number;
  compareTo(arg0: BlockDestructionProgress): number;
  equals(arg0: object): boolean;
  getId(): number;
  getPos(): j_net_minecraft_core.BlockPos;
  getProgress(): number;
  getUpdatedRenderTick(): number;
  hashCode(): number;
  setProgress(arg0: number): void;
  updateTick(arg0: number): void;
}
export type BlockDestructionProgress = BlockDestructionProgressMembers;
export interface BlockDestructionProgressStatics {
  new(arg0: number, arg1: j_net_minecraft_core.BlockPos): BlockDestructionProgress;
}

/** JVM class net.minecraft.server.level.ChunkGenerationTask. */
export interface ChunkGenerationTaskMembers {
  getCenter(): GenerationChunkHolder;
  markForCancellation(): void;
  runUntilWait(): PromiseLike<object> | null;
  readonly targetStatus: j_net_minecraft_world_level_chunk_status.ChunkStatus;
}
export type ChunkGenerationTask = ChunkGenerationTaskMembers;
export interface ChunkGenerationTaskStatics {
  create(arg0: GeneratingChunkMap, arg1: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg2: j_net_minecraft_world_level.ChunkPos): ChunkGenerationTask;
}

/** JVM class net.minecraft.server.level.ChunkHolder. */
export interface ChunkHolderMembers {
  readonly __javaSupertypes?: readonly [GenerationChunkHolder, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemChunkHolder">];
  addSaveDependency(arg0: PromiseLike<object>): void;
  addSendDependency(arg0: PromiseLike<object>): void;
  blockChanged(arg0: j_net_minecraft_core.BlockPos): boolean;
  broadcastChanges(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  callEventIfUnloading(arg0: ChunkMap): void;
  getChunkToSend(): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getEntityTickingChunkFuture(): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>>;
  getFullChunkFuture(): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>>;
  getFullChunkNow(): j_net_minecraft_world_level_chunk.LevelChunk;
  getFullChunkNowUnchecked(): j_net_minecraft_world_level_chunk.LevelChunk;
  getQueueLevel(): number;
  getSaveSyncFuture(): PromiseLike<object>;
  getSendSyncFuture(): PromiseLike<object>;
  getTicketLevel(): number;
  getTickingChunk(): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getTickingChunkFuture(): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>>;
  hasChangesToBroadcast(): boolean;
  isReadyForSaving(): boolean;
  moonrise$addReceivedChunk(arg0: ServerPlayer): void;
  moonrise$getFullChunk(): j_net_minecraft_world_level_chunk.LevelChunk;
  moonrise$getPlayers(arg0: boolean): JavaList<ServerPlayer>;
  moonrise$getRealChunkHolder(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.scheduling.NewChunkHolder">;
  moonrise$hasChunkBeenSent(): boolean;
  moonrise$hasChunkBeenSent(arg0: ServerPlayer): boolean;
  moonrise$removeReceivedChunk(arg0: ServerPlayer): void;
  moonrise$setRealChunkHolder(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.scheduling.NewChunkHolder">): void;
  readonly playerProvider: ChunkHolder_PlayerProvider;
  refreshAccessibility(): void;
  sectionLightChanged(arg0: j_net_minecraft_world_level.LightLayer, arg1: number): boolean;
  setTicketLevel(arg0: number): void;
  updateFutures(arg0: ChunkMap, arg1: JavaOpaque<"java.util.concurrent.Executor">): void;
  wasAccessibleSinceLastSave(): boolean;
}
export type ChunkHolder = ChunkHolderMembers & GenerationChunkHolder & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemChunkHolder">;
export interface ChunkHolderStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number, arg2: j_net_minecraft_world_level.LevelHeightAccessor, arg3: j_net_minecraft_world_level_lighting.LevelLightEngine, arg4: ChunkHolder_LevelChangeListener, arg5: ChunkHolder_PlayerProvider): ChunkHolder;
  readonly UNLOADED_LEVEL_CHUNK: ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>;
}

/** JVM interface net.minecraft.server.level.ChunkHolder$LevelChangeListener. */
export interface ChunkHolder_LevelChangeListenerMembers {
  onLevelChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaOpaque<"java.util.function.IntSupplier">, arg2: number, arg3: JavaOpaque<"java.util.function.IntConsumer">): void;
}
export type ChunkHolder_LevelChangeListener = ChunkHolder_LevelChangeListenerMembers;
export interface ChunkHolder_LevelChangeListenerStatics {
}

/** JVM interface net.minecraft.server.level.ChunkHolder$PlayerProvider. */
export interface ChunkHolder_PlayerProviderMembers {
  getPlayers(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): JavaList<ServerPlayer>;
}
export type ChunkHolder_PlayerProvider = ChunkHolder_PlayerProviderMembers;
export interface ChunkHolder_PlayerProviderStatics {
}

/** JVM class net.minecraft.server.level.ChunkLevel. */
export interface ChunkLevelMembers {
}
export type ChunkLevel = ChunkLevelMembers;
export interface ChunkLevelStatics {
  new(): ChunkLevel;
  readonly BLOCK_TICKING_LEVEL: 32;
  readonly ENTITY_TICKING_LEVEL: 31;
  readonly FULL_CHUNK_LEVEL: 33;
  readonly MAX_LEVEL: number;
  readonly RADIUS_AROUND_FULL_CHUNK: number;
  byStatus(arg0: FullChunkStatus): number;
  byStatus(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus): number;
  fullStatus(arg0: number): FullChunkStatus;
  generationStatus(arg0: number): j_net_minecraft_world_level_chunk_status.ChunkStatus | null;
  getStatusAroundFullChunk(arg0: number): j_net_minecraft_world_level_chunk_status.ChunkStatus;
  getStatusAroundFullChunk(arg0: number, arg1: j_net_minecraft_world_level_chunk_status.ChunkStatus | null): j_net_minecraft_world_level_chunk_status.ChunkStatus | null;
  isBlockTicking(arg0: number): boolean;
  isEntityTicking(arg0: number): boolean;
  isLoaded(arg0: number): boolean;
}

/** JVM class net.minecraft.server.level.ChunkMap. */
export interface ChunkMapMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk_storage.ChunkStorage, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemChunkMap">, ChunkHolder_PlayerProvider, GeneratingChunkMap];
  acquireGeneration(arg0: bigint): GenerationChunkHolder;
  addEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  anyPlayerCloseEnoughForSpawning(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  applyStep(arg0: GenerationChunkHolder, arg1: j_net_minecraft_world_level_chunk_status.ChunkStep, arg2: j_net_minecraft_util.StaticCache2D<GenerationChunkHolder>): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  broadcast(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
  broadcastAndSend(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
  readonly callbackExecutor: ChunkMap_CallbackExecutor;
  /** @throws java.io.IOException */
  close(): void;
  debugFuturesAndCreateReportedException(arg0: JavaOpaque<"java.lang.IllegalStateException">, arg1: string): j_net_minecraft.ReportedException;
  readonly distanceManager: ChunkMap_DistanceManager;
  readonly entityMap: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [ChunkMap_TrackedEntity]>;
  flushWorker(): void;
  generator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  generatorState(): j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState;
  getChunkDebugData(arg0: j_net_minecraft_world_level.ChunkPos): string;
  getChunkQueueLevel(arg0: bigint): JavaOpaque<"java.util.function.IntSupplier">;
  getChunkToSend(arg0: bigint): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getChunks(): Iterable<ChunkHolder>;
  getDistanceManager(): DistanceManager;
  getLightEngine(): ThreadedLevelLightEngine;
  getMobCountNear(arg0: ServerPlayer, arg1: j_net_minecraft_world_entity.MobCategory): number;
  getPlayers(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): JavaList<ServerPlayer>;
  getPlayersCloseForSpawning(arg0: j_net_minecraft_world_level.ChunkPos): JavaList<ServerPlayer>;
  getPoiManager(): j_net_minecraft_world_entity_ai_village_poi.PoiManager;
  getStorageName(): string;
  getTickingGenerated(): number;
  getUnloadingChunkHolder(arg0: number, arg1: number): ChunkHolder;
  getUpdatingChunkIfPresent(arg0: bigint): ChunkHolder | null;
  getVisibleChunkIfPresent(arg0: bigint): ChunkHolder | null;
  hasWork(): boolean;
  readonly level: ServerLevel;
  /** @throws java.io.IOException */
  moonrise$writeFinishCallback(arg0: j_net_minecraft_world_level.ChunkPos): void;
  move(arg0: ServerPlayer): void;
  playerIsCloseEnoughForSpawning(arg0: ServerPlayer, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number): boolean;
  prepareAccessibleChunk(arg0: ChunkHolder): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>>;
  prepareEntityTickingChunk(arg0: ChunkHolder): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>>;
  prepareTickingChunk(arg0: ChunkHolder): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.LevelChunk>>;
  readonly progressListener: j_net_minecraft_server_level_progress.ChunkProgressListener;
  promoteChunkMap(): boolean;
  randomState(): j_net_minecraft_world_level_levelgen.RandomState;
  read(arg0: j_net_minecraft_world_level.ChunkPos): PromiseLike<JavaOptional<j_net_minecraft_nbt.CompoundTag>>;
  releaseGeneration(arg0: GenerationChunkHolder): void;
  removeEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  resendBiomesForChunks(arg0: JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>): void;
  runGenerationTasks(): void;
  save(arg0: j_net_minecraft_world_level_chunk.ChunkAccess): boolean;
  saveAllChunks(arg0: boolean): void;
  scheduleGenerationTask(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg1: j_net_minecraft_world_level.ChunkPos): ChunkGenerationTask;
  serverViewDistance: number;
  setServerViewDistance(arg0: number): void;
  size(): number;
  tick(): void;
  tick(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  readonly tickingGenerated: JavaOpaque<"java.util.concurrent.atomic.AtomicInteger">;
  readonly toDrop: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  updateFailurePlayerMobTypeMap(arg0: number, arg1: number, arg2: j_net_minecraft_world_entity.MobCategory): void;
  updatePlayerMobTypeMap(arg0: j_net_minecraft_world_entity.Entity): void;
  upgradeChunkTag(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_nbt.CompoundTag;
  waitForLightBeforeSending(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): void;
  readonly worldGenContext: j_net_minecraft_world_level_chunk_status.WorldGenContext;
  write(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaSupplier<j_net_minecraft_nbt.CompoundTag>): PromiseLike<void>;
}
export type ChunkMap = ChunkMapMembers & j_net_minecraft_world_level_chunk_storage.ChunkStorage & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemChunkMap"> & ChunkHolder_PlayerProvider & GeneratingChunkMap;
export interface ChunkMapStatics {
  new(arg0: ServerLevel, arg1: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg4: JavaOpaque<"java.util.concurrent.Executor">, arg5: j_net_minecraft_util_thread.BlockableEventLoop<JavaRunnable>, arg6: j_net_minecraft_world_level_chunk.LightChunkGetter, arg7: j_net_minecraft_world_level_chunk.ChunkGenerator, arg8: j_net_minecraft_server_level_progress.ChunkProgressListener, arg9: j_net_minecraft_world_level_entity.ChunkStatusUpdateListener, arg10: JavaSupplier<j_net_minecraft_world_level_storage.DimensionDataStorage>, arg11: j_net_minecraft_world_level.TicketStorage, arg12: number, arg13: boolean): ChunkMap;
  readonly FORCED_TICKET_LEVEL: number;
  readonly MAX_VIEW_DISTANCE: 32;
  readonly MIN_VIEW_DISTANCE: 2;
}

/** JVM class net.minecraft.server.level.ChunkMap$CallbackExecutor. */
export interface ChunkMap_CallbackExecutorMembers {
  readonly __javaSupertypes?: readonly [JavaRunnable, JavaOpaque<"java.util.concurrent.Executor">];
  execute(arg0: JavaRunnable): void;
  run(): void;
}
export type ChunkMap_CallbackExecutor = ChunkMap_CallbackExecutorMembers & JavaRunnable & JavaOpaque<"java.util.concurrent.Executor">;
export interface ChunkMap_CallbackExecutorStatics {
  new(): ChunkMap_CallbackExecutor;
}

/** JVM class net.minecraft.server.level.ChunkMap$DistanceManager. */
export interface ChunkMap_DistanceManagerMembers {
  readonly __javaSupertypes?: readonly [DistanceManager, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemDistanceManager">];
  getChunk(arg0: bigint): ChunkHolder | null;
  isChunkToRemove(arg0: bigint): boolean;
  moonrise$getChunkMap(): ChunkMap;
  updateChunkScheduling(arg0: bigint, arg1: number, arg2: ChunkHolder | null, arg3: number): ChunkHolder | null;
}
export type ChunkMap_DistanceManager = ChunkMap_DistanceManagerMembers & DistanceManager & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemDistanceManager">;
export interface ChunkMap_DistanceManagerStatics {
  new(arg0: ChunkMap, arg1: j_net_minecraft_world_level.TicketStorage, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">): ChunkMap_DistanceManager;
}

/** JVM class net.minecraft.server.level.ChunkMap$TrackedEntity. */
export interface ChunkMap_TrackedEntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.entity_tracker.EntityTrackerTrackedEntity">];
  broadcast(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
  broadcastAndSend(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
  broadcastIgnorePlayers(arg0: j_net_minecraft_network_protocol.Packet<object>, arg1: JavaList<JavaOpaque<"java.util.UUID">>): void;
  broadcastRemoved(): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  moonrise$clearPlayers(): void;
  moonrise$hasPlayers(): boolean;
  moonrise$removeNonTickThreadPlayers(): void;
  moonrise$tick(arg0: JavaOpaque<"ca.spottedleaf.moonrise.common.misc.NearbyPlayers$TrackedChunk">): void;
  removePlayer(arg0: ServerPlayer): void;
  readonly seenBy: JavaSet<j_net_minecraft_server_network.ServerPlayerConnection>;
  readonly serverEntity: ServerEntity;
  updatePlayer(arg0: ServerPlayer): void;
  updatePlayers(arg0: JavaList<ServerPlayer>): void;
}
export type ChunkMap_TrackedEntity = ChunkMap_TrackedEntityMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.entity_tracker.EntityTrackerTrackedEntity">;
export interface ChunkMap_TrackedEntityStatics {
  new(arg0: ChunkMap, arg1: j_net_minecraft_world_entity.Entity, arg2: number, arg3: number, arg4: boolean): ChunkMap_TrackedEntity;
}

/** JVM interface net.minecraft.server.level.ChunkResult. */
export interface ChunkResultMembers<T = unknown> {
  getError(): string | null;
  ifSuccess(arg0: JavaConsumer<T>): ChunkResult<T>;
  isSuccess(): boolean;
  map<R>(arg0: JavaFunction<T, R>): ChunkResult<R>;
  orElse(arg0: T | null): T | null;
  /** @throws java.lang.Throwable */
  orElseThrow<E /* extends JavaOpaque<"java.lang.Throwable"> */>(arg0: JavaSupplier<E>): T;
}
export type ChunkResult<T = unknown> = ChunkResultMembers<T>;
export interface ChunkResultStatics {
  error<T>(arg0: string): ChunkResult<T>;
  error<T>(arg0: JavaSupplier<string>): ChunkResult<T>;
  of<T>(arg0: T): ChunkResult<T>;
  orElse<R>(arg0: ChunkResult<R>, arg1: R | null): R | null;
}

/** JVM record net.minecraft.server.level.ChunkResult$Fail. */
export interface ChunkResult_FailMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ChunkResult<T>];
  equals(arg0: object): boolean;
  error(): JavaSupplier<string>;
  getError(): string;
  hashCode(): number;
  ifSuccess(arg0: JavaConsumer<T>): ChunkResult<T>;
  isSuccess(): boolean;
  map<R>(arg0: JavaFunction<T, R>): ChunkResult<R>;
  orElse(arg0: T | null): T | null;
  /** @throws java.lang.Throwable */
  orElseThrow<E /* extends JavaOpaque<"java.lang.Throwable"> */>(arg0: JavaSupplier<E>): T;
  toString(): string;
}
export type ChunkResult_Fail<T = unknown> = ChunkResult_FailMembers<T> & JavaOpaque<"java.lang.Record"> & ChunkResult<T>;
export interface ChunkResult_FailStatics {
  new<T>(arg0: JavaSupplier<string>): ChunkResult_Fail<T>;
}

/** JVM record net.minecraft.server.level.ChunkResult$Success. */
export interface ChunkResult_SuccessMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ChunkResult<T>];
  equals(arg0: object): boolean;
  getError(): string | null;
  hashCode(): number;
  ifSuccess(arg0: JavaConsumer<T>): ChunkResult<T>;
  isSuccess(): boolean;
  map<R>(arg0: JavaFunction<T, R>): ChunkResult<R>;
  orElse(arg0: T | null): T | null;
  /** @throws java.lang.Throwable */
  orElseThrow<E /* extends JavaOpaque<"java.lang.Throwable"> */>(arg0: JavaSupplier<E>): T;
  toString(): string;
  value(): T;
}
export type ChunkResult_Success<T = unknown> = ChunkResult_SuccessMembers<T> & JavaOpaque<"java.lang.Record"> & ChunkResult<T>;
export interface ChunkResult_SuccessStatics {
  new<T>(arg0: T): ChunkResult_Success<T>;
}

/** JVM class net.minecraft.server.level.ChunkTaskDispatcher. */
export interface ChunkTaskDispatcherMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, ChunkHolder_LevelChangeListener];
  close(): void;
  hasWork(): boolean;
  onLevelChange(arg0: j_net_minecraft_world_level.ChunkPos, arg1: JavaOpaque<"java.util.function.IntSupplier">, arg2: number, arg3: JavaOpaque<"java.util.function.IntConsumer">): void;
  onRelease(arg0: bigint): void;
  pollTask(): void;
  popTasks(): ChunkTaskPriorityQueue_TasksForChunk | null;
  release(arg0: bigint, arg1: JavaRunnable, arg2: boolean): void;
  scheduleForExecution(arg0: ChunkTaskPriorityQueue_TasksForChunk): void;
  sleeping: boolean;
  submit(arg0: JavaRunnable, arg1: bigint, arg2: JavaOpaque<"java.util.function.IntSupplier">): void;
}
export type ChunkTaskDispatcher = ChunkTaskDispatcherMembers & JavaOpaque<"java.lang.AutoCloseable"> & ChunkHolder_LevelChangeListener;
export interface ChunkTaskDispatcherStatics {
  new(arg0: j_net_minecraft_util_thread.TaskScheduler<JavaRunnable>, arg1: JavaOpaque<"java.util.concurrent.Executor">): ChunkTaskDispatcher;
  readonly DISPATCHER_PRIORITY_COUNT: 4;
}

/** JVM class net.minecraft.server.level.ChunkTaskPriorityQueue. */
export interface ChunkTaskPriorityQueueMembers {
  hasWork(): boolean;
  pop(): ChunkTaskPriorityQueue_TasksForChunk | null;
  release(arg0: bigint, arg1: boolean): void;
  resortChunkTasks(arg0: number, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number): void;
  submit(arg0: JavaRunnable, arg1: bigint, arg2: number): void;
  toString(): string;
}
export type ChunkTaskPriorityQueue = ChunkTaskPriorityQueueMembers;
export interface ChunkTaskPriorityQueueStatics {
  new(arg0: string): ChunkTaskPriorityQueue;
  readonly PRIORITY_LEVEL_COUNT: number;
}

/** JVM record net.minecraft.server.level.ChunkTaskPriorityQueue$TasksForChunk. */
export interface ChunkTaskPriorityQueue_TasksForChunkMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  chunkPos(): bigint;
  equals(arg0: object): boolean;
  hashCode(): number;
  tasks(): JavaList<JavaRunnable>;
  toString(): string;
}
export type ChunkTaskPriorityQueue_TasksForChunk = ChunkTaskPriorityQueue_TasksForChunkMembers & JavaOpaque<"java.lang.Record">;
export interface ChunkTaskPriorityQueue_TasksForChunkStatics {
  new(arg0: bigint, arg1: JavaList<JavaRunnable>): ChunkTaskPriorityQueue_TasksForChunk;
}

/** JVM abstract net.minecraft.server.level.ChunkTracker. */
export interface ChunkTrackerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_lighting.DynamicGraphMinFixedPoint];
  checkNeighborsAfterUpdate(arg0: bigint, arg1: number, arg2: boolean): void;
  computeLevelFromNeighbor(arg0: bigint, arg1: bigint, arg2: number): number;
  getComputedLevel(arg0: bigint, arg1: bigint, arg2: number): number;
  getLevelFromSource(arg0: bigint): number;
  isSource(arg0: bigint): boolean;
  update(arg0: bigint, arg1: number, arg2: boolean): void;
}
export type ChunkTracker = ChunkTrackerMembers & j_net_minecraft_world_level_lighting.DynamicGraphMinFixedPoint;
export interface ChunkTrackerStatics {
  new(arg0: number, arg1: number, arg2: number): ChunkTracker;
}

/** JVM interface net.minecraft.server.level.ChunkTrackingView. */
export interface ChunkTrackingViewMembers {
  contains(arg0: number, arg1: number): boolean;
  contains(arg0: number, arg1: number, arg2: boolean): boolean;
  contains(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  forEach(arg0: JavaConsumer<j_net_minecraft_world_level.ChunkPos>): void;
  isInViewDistance(arg0: number, arg1: number): boolean;
}
export type ChunkTrackingView = ChunkTrackingViewMembers;
export interface ChunkTrackingViewStatics {
  readonly EMPTY: ChunkTrackingView;
  difference(arg0: ChunkTrackingView, arg1: ChunkTrackingView, arg2: JavaConsumer<j_net_minecraft_world_level.ChunkPos>, arg3: JavaConsumer<j_net_minecraft_world_level.ChunkPos>): void;
  isInViewDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
  isWithinDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
  of(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): ChunkTrackingView;
}

/** JVM record net.minecraft.server.level.ChunkTrackingView$Positioned. */
export interface ChunkTrackingView_PositionedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ChunkTrackingView];
  center(): j_net_minecraft_world_level.ChunkPos;
  contains(arg0: number, arg1: number, arg2: boolean): boolean;
  equals(arg0: object): boolean;
  forEach(arg0: JavaConsumer<j_net_minecraft_world_level.ChunkPos>): void;
  hashCode(): number;
  squareIntersects(arg0: ChunkTrackingView_Positioned): boolean;
  toString(): string;
  viewDistance(): number;
}
export type ChunkTrackingView_Positioned = ChunkTrackingView_PositionedMembers & JavaOpaque<"java.lang.Record"> & ChunkTrackingView;
export interface ChunkTrackingView_PositionedStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): ChunkTrackingView_Positioned;
}

/** JVM record net.minecraft.server.level.ClientInformation. */
export interface ClientInformationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  allowsListing(): boolean;
  chatColors(): boolean;
  chatVisibility(): j_net_minecraft_world_entity_player.ChatVisiblity;
  equals(arg0: object): boolean;
  hashCode(): number;
  language(): string;
  mainHand(): j_net_minecraft_world_entity.HumanoidArm;
  modelCustomisation(): number;
  particleStatus(): ParticleStatus;
  textFilteringEnabled(): boolean;
  toString(): string;
  viewDistance(): number;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ClientInformation = ClientInformationMembers & JavaOpaque<"java.lang.Record">;
export interface ClientInformationStatics {
  new(arg0: string, arg1: number, arg2: j_net_minecraft_world_entity_player.ChatVisiblity, arg3: boolean, arg4: number, arg5: j_net_minecraft_world_entity.HumanoidArm, arg6: boolean, arg7: boolean, arg8: ParticleStatus): ClientInformation;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): ClientInformation;
  readonly MAX_LANGUAGE_LENGTH: 16;
  createDefault(): ClientInformation;
}

/** JVM record net.minecraft.server.level.ColumnPos. */
export interface ColumnPosMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toChunkPos(): j_net_minecraft_world_level.ChunkPos;
  toLong(): bigint;
  toString(): string;
  x(): number;
  z(): number;
}
export type ColumnPos = ColumnPosMembers & JavaOpaque<"java.lang.Record">;
export interface ColumnPosStatics {
  new(arg0: number, arg1: number): ColumnPos;
  asLong(arg0: number, arg1: number): bigint;
  getX(arg0: bigint): number;
  getZ(arg0: bigint): number;
}

/** JVM class net.minecraft.server.level.DemoMode. */
export interface DemoModeMembers {
  readonly __javaSupertypes?: readonly [ServerPlayerGameMode];
  handleBlockBreakAction(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_network_protocol_game.ServerboundPlayerActionPacket_Action, arg2: j_net_minecraft_core.Direction, arg3: number, arg4: number): void;
  tick(): void;
  useItem(arg0: ServerPlayer, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useItemOn(arg0: ServerPlayer, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world.InteractionHand, arg4: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
}
export type DemoMode = DemoModeMembers & ServerPlayerGameMode;
export interface DemoModeStatics {
  new(arg0: ServerPlayer): DemoMode;
  readonly DEMO_DAYS: 5;
  readonly TOTAL_PLAY_TICKS: 120500;
}

/** JVM abstract net.minecraft.server.level.DistanceManager. */
export interface DistanceManagerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemDistanceManager">, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_tick_iteration.ChunkTickDistanceManager">];
  addPlayer(arg0: j_net_minecraft_core.SectionPos, arg1: ServerPlayer): void;
  forEachEntityTickingChunk(arg0: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongConsumer">): void;
  getChunk(arg0: bigint): ChunkHolder | null;
  getChunkLevel(arg0: bigint, arg1: boolean): number;
  getDebugStatus(): string;
  getNaturalSpawnChunkCount(): number;
  getSpawnCandidateChunks(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongIterator">;
  hasPlayersNearby(arg0: bigint): j_net_minecraft_util.TriState;
  hasTickets(): boolean;
  inBlockTickingRange(arg0: bigint): boolean;
  inEntityTickingRange(arg0: bigint): boolean;
  isChunkToRemove(arg0: bigint): boolean;
  moonrise$addPlayer(arg0: ServerPlayer, arg1: j_net_minecraft_core.SectionPos): void;
  moonrise$getChunkHolderManager(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.scheduling.ChunkHolderManager">;
  moonrise$hasAnyNearbyNarrow(arg0: number, arg1: number): boolean;
  moonrise$removePlayer(arg0: ServerPlayer, arg1: j_net_minecraft_core.SectionPos): void;
  moonrise$updatePlayer(arg0: ServerPlayer, arg1: j_net_minecraft_core.SectionPos, arg2: j_net_minecraft_core.SectionPos, arg3: boolean, arg4: boolean): void;
  removePlayer(arg0: j_net_minecraft_core.SectionPos, arg1: ServerPlayer): void;
  runAllUpdates(arg0: ChunkMap): boolean;
  readonly ticketStorage: j_net_minecraft_world_level.TicketStorage;
  updateChunkScheduling(arg0: bigint, arg1: number, arg2: ChunkHolder | null, arg3: number): ChunkHolder | null;
  updatePlayerTickets(arg0: number): void;
  updateSimulationDistance(arg0: number): void;
}
export type DistanceManager = DistanceManagerMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkSystemDistanceManager"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_tick_iteration.ChunkTickDistanceManager">;
export interface DistanceManagerStatics {
  new(arg0: j_net_minecraft_world_level.TicketStorage, arg1: JavaOpaque<"java.util.concurrent.Executor">, arg2: JavaOpaque<"java.util.concurrent.Executor">): DistanceManager;
}

/** Live JVM enum net.minecraft.server.level.FullChunkStatus; constants are host handles, not strings. */
export type FullChunkStatus = JavaEnum<"net.minecraft.server.level.FullChunkStatus", "BLOCK_TICKING" | "ENTITY_TICKING" | "FULL" | "INACCESSIBLE"> & FullChunkStatusMembers;
export interface FullChunkStatusMembers {
  isOrAfter(arg0: FullChunkStatus): boolean;
}
export interface FullChunkStatusStatics {
  readonly BLOCK_TICKING: FullChunkStatus;
  readonly ENTITY_TICKING: FullChunkStatus;
  readonly FULL: FullChunkStatus;
  readonly INACCESSIBLE: FullChunkStatus;
  valueOf(arg0: string): FullChunkStatus;
  values(): Array<FullChunkStatus>;
}

/** JVM interface net.minecraft.server.level.GeneratingChunkMap. */
export interface GeneratingChunkMapMembers {
  acquireGeneration(arg0: bigint): GenerationChunkHolder;
  applyStep(arg0: GenerationChunkHolder, arg1: j_net_minecraft_world_level_chunk_status.ChunkStep, arg2: j_net_minecraft_util.StaticCache2D<GenerationChunkHolder>): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  releaseGeneration(arg0: GenerationChunkHolder): void;
  runGenerationTasks(): void;
  scheduleGenerationTask(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg1: j_net_minecraft_world_level.ChunkPos): ChunkGenerationTask;
}
export type GeneratingChunkMap = GeneratingChunkMapMembers;
export interface GeneratingChunkMapStatics {
}

/** JVM abstract net.minecraft.server.level.GenerationChunkHolder. */
export interface GenerationChunkHolderMembers {
  addSaveDependency(arg0: PromiseLike<object>): void;
  decreaseGenerationRefCount(): void;
  getAllFutures(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_level_chunk_status.ChunkStatus, PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.ChunkAccess>>]>>;
  getChunkIfPresent(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkIfPresentUnchecked(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getFullStatus(): FullChunkStatus;
  getLatestChunk(): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getLatestStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus | null;
  getPersistedStatus(): j_net_minecraft_world_level_chunk_status.ChunkStatus | null;
  getPos(): j_net_minecraft_world_level.ChunkPos;
  getQueueLevel(): number;
  getTicketLevel(): number;
  increaseGenerationRefCount(): void;
  readonly pos: j_net_minecraft_world_level.ChunkPos;
  replaceProtoChunk(arg0: j_net_minecraft_world_level_chunk.ImposterProtoChunk): void;
  scheduleChunkGenerationTask(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg1: ChunkMap): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.ChunkAccess>>;
  updateHighestAllowedStatus(arg0: ChunkMap): void;
}
export type GenerationChunkHolder = GenerationChunkHolderMembers;
export interface GenerationChunkHolderStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos): GenerationChunkHolder;
  readonly UNLOADED_CHUNK: ChunkResult<j_net_minecraft_world_level_chunk.ChunkAccess>;
  readonly UNLOADED_CHUNK_FUTURE: PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.ChunkAccess>>;
}

/** Live JVM enum net.minecraft.server.level.ParticleStatus; constants are host handles, not strings. */
export type ParticleStatus = JavaEnum<"net.minecraft.server.level.ParticleStatus", "ALL" | "DECREASED" | "MINIMAL"> & ParticleStatusMembers;
export interface ParticleStatusMembers {
  getCaption(): j_net_minecraft_network_chat.Component;
  getId(): number;
  getKey(): string;
}
export interface ParticleStatusStatics {
  readonly ALL: ParticleStatus;
  readonly DECREASED: ParticleStatus;
  readonly MINIMAL: ParticleStatus;
  byId(arg0: number): ParticleStatus;
  valueOf(arg0: string): ParticleStatus;
  values(): Array<ParticleStatus>;
}

/** JVM class net.minecraft.server.level.PlayerMap. */
export interface PlayerMapMembers {
  addPlayer(arg0: ServerPlayer, arg1: boolean): void;
  getAllPlayers(): JavaSet<ServerPlayer>;
  ignorePlayer(arg0: ServerPlayer): void;
  ignored(arg0: ServerPlayer): boolean;
  ignoredOrUnknown(arg0: ServerPlayer): boolean;
  removePlayer(arg0: ServerPlayer): void;
  unIgnorePlayer(arg0: ServerPlayer): void;
}
export type PlayerMap = PlayerMapMembers;
export interface PlayerMapStatics {
  new(): PlayerMap;
}

/** JVM class net.minecraft.server.level.PlayerRespawnLogic. */
export interface PlayerRespawnLogicMembers {
}
export type PlayerRespawnLogic = PlayerRespawnLogicMembers;
export interface PlayerRespawnLogicStatics {
  new(): PlayerRespawnLogic;
  getOverworldRespawnPos(arg0: ServerLevel, arg1: number, arg2: number): j_net_minecraft_core.BlockPos | null;
  getSpawnPosInChunk(arg0: ServerLevel, arg1: j_net_minecraft_world_level.ChunkPos): j_net_minecraft_core.BlockPos | null;
}

/** JVM abstract net.minecraft.server.level.SectionTracker. */
export interface SectionTrackerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_lighting.DynamicGraphMinFixedPoint];
  checkNeighborsAfterUpdate(arg0: bigint, arg1: number, arg2: boolean): void;
  computeLevelFromNeighbor(arg0: bigint, arg1: bigint, arg2: number): number;
  getComputedLevel(arg0: bigint, arg1: bigint, arg2: number): number;
  getLevelFromSource(arg0: bigint): number;
  update(arg0: bigint, arg1: number, arg2: boolean): void;
}
export type SectionTracker = SectionTrackerMembers & j_net_minecraft_world_level_lighting.DynamicGraphMinFixedPoint;
export interface SectionTrackerStatics {
  new(arg0: number, arg1: number, arg2: number): SectionTracker;
}

/** JVM class net.minecraft.server.level.ServerBossEvent. */
export interface ServerBossEventMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.BossEvent];
  addPlayer(arg0: ServerPlayer): void;
  broadcast(arg0: JavaFunction<j_net_minecraft_world.BossEvent, j_net_minecraft_network_protocol_game.ClientboundBossEventPacket>): void;
  getPlayers(): JavaCollection<ServerPlayer>;
  isVisible(): boolean;
  removeAllPlayers(): void;
  removePlayer(arg0: ServerPlayer): void;
  setColor(arg0: j_net_minecraft_world.BossEvent_BossBarColor): void;
  setCreateWorldFog(arg0: boolean): j_net_minecraft_world.BossEvent;
  setDarkenScreen(arg0: boolean): j_net_minecraft_world.BossEvent;
  setName(arg0: j_net_minecraft_network_chat.Component): void;
  setOverlay(arg0: j_net_minecraft_world.BossEvent_BossBarOverlay): void;
  setPlayBossMusic(arg0: boolean): j_net_minecraft_world.BossEvent;
  setProgress(arg0: number): void;
  setVisible(arg0: boolean): void;
  visible: boolean;
}
export type ServerBossEvent = ServerBossEventMembers & j_net_minecraft_world.BossEvent;
export interface ServerBossEventStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_world.BossEvent_BossBarColor, arg2: j_net_minecraft_world.BossEvent_BossBarOverlay): ServerBossEvent;
}

/** JVM class net.minecraft.server.level.ServerChunkCache. */
export interface ServerChunkCacheMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk.ChunkSource, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.world.ChunkSystemServerChunkCache">];
  addEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  addTicket(arg0: Ticket, arg1: j_net_minecraft_world_level.ChunkPos): void;
  addTicketAtLevel(arg0: TicketType, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number): void;
  addTicketWithRadius(arg0: TicketType, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number): void;
  blockChanged(arg0: j_net_minecraft_core.BlockPos): void;
  broadcast(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
  broadcastAndSend(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
  readonly chunkMap: ChunkMap;
  chunkScanner(): j_net_minecraft_world_level_chunk_storage.ChunkScanAccess;
  /** @throws java.io.IOException */
  close(): void;
  /** @throws java.io.IOException */
  close(arg0: boolean): void;
  deactivateTicketsOnClosing(): void;
  readonly fullChunks: JavaOpaque<"ca.spottedleaf.concurrentutil.map.ConcurrentLong2ReferenceChainedHashTable", [j_net_minecraft_world_level_chunk.LevelChunk]>;
  gatherStats(): string;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkAtIfCachedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getChunkAtIfLoadedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getChunkAtImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkDebugData(arg0: j_net_minecraft_world_level.ChunkPos): string;
  getChunkForLighting(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LightChunk | null;
  getChunkFuture(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): PromiseLike<ChunkResult<j_net_minecraft_world_level_chunk.ChunkAccess>>;
  getChunkNow(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getDataStorage(): j_net_minecraft_world_level_storage.DimensionDataStorage;
  getForceLoadedChunks(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getFullChunksCount(): number;
  getGenerator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  getGeneratorState(): j_net_minecraft_world_level_chunk.ChunkGeneratorStructureState;
  getLastSpawnState(): j_net_minecraft_world_level.NaturalSpawner_SpawnState | null;
  getLevel(): j_net_minecraft_world_level.BlockGetter;
  getLevel(): j_net_minecraft_world_level.Level;
  getLightEngine(): ThreadedLevelLightEngine;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getLoadedChunksCount(): number;
  getPendingTasksCount(): number;
  getPoiManager(): j_net_minecraft_world_entity_ai_village_poi.PoiManager;
  getTickingGenerated(): number;
  hasChunk(arg0: number, arg1: number): boolean;
  isChunkLoaded(arg0: number, arg1: number): boolean;
  isPositionTicking(arg0: bigint): boolean;
  readonly mainThread: JavaOpaque<"java.lang.Thread">;
  readonly mainThreadProcessor: ServerChunkCache_MainThreadExecutor;
  moonrise$getFullChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk;
  moonrise$setFullChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk.LevelChunk): void;
  move(arg0: ServerPlayer): void;
  onChunkReadyToSend(arg0: ChunkHolder): void;
  onLightUpdate(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos): void;
  pollTask(): boolean;
  purgeUnload(): void;
  randomState(): j_net_minecraft_world_level_levelgen.RandomState;
  removeEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  removeTicketAtLevel(arg0: TicketType, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number): void;
  removeTicketWithRadius(arg0: TicketType, arg1: j_net_minecraft_world_level.ChunkPos, arg2: number): void;
  runDistanceManagerUpdates(): boolean;
  save(arg0: boolean): void;
  setSendViewDistance(arg0: number): void;
  setSimulationDistance(arg0: number): void;
  setSpawnSettings(arg0: boolean): void;
  setSpawnSettings(arg0: boolean, arg1: boolean): void;
  setViewDistance(arg0: number): void;
  spawnEnemies: boolean;
  spawnFriendlies: boolean;
  tick(arg0: JavaOpaque<"java.util.function.BooleanSupplier">, arg1: boolean): void;
  updateChunkForced(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): boolean;
}
export type ServerChunkCache = ServerChunkCacheMembers & j_net_minecraft_world_level_chunk.ChunkSource & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.world.ChunkSystemServerChunkCache">;
export interface ServerChunkCacheStatics {
  new(arg0: ServerLevel, arg1: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg4: JavaOpaque<"java.util.concurrent.Executor">, arg5: j_net_minecraft_world_level_chunk.ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: j_net_minecraft_server_level_progress.ChunkProgressListener, arg10: j_net_minecraft_world_level_entity.ChunkStatusUpdateListener, arg11: JavaSupplier<j_net_minecraft_world_level_storage.DimensionDataStorage>): ServerChunkCache;
}

/** JVM class net.minecraft.server.level.ServerChunkCache$MainThreadExecutor. */
export interface ServerChunkCache_MainThreadExecutorMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_thread.BlockableEventLoop<JavaRunnable>];
  doRunTask(arg0: JavaRunnable): void;
  getRunningThread(): JavaOpaque<"java.lang.Thread">;
  managedBlock(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  pollTask(): boolean;
  scheduleExecutables(): boolean;
  shouldRun(arg0: JavaRunnable): boolean;
  wrapRunnable(arg0: JavaRunnable): JavaRunnable;
}
export type ServerChunkCache_MainThreadExecutor = ServerChunkCache_MainThreadExecutorMembers & j_net_minecraft_util_thread.BlockableEventLoop<JavaRunnable>;
export interface ServerChunkCache_MainThreadExecutorStatics {
}

/** JVM class net.minecraft.server.level.ServerEntity. */
export interface ServerEntityMembers {
  addPairing(arg0: ServerPlayer): void;
  getLastSentMovement(): j_net_minecraft_world_phys.Vec3;
  getLastSentXRot(): number;
  getLastSentYHeadRot(): number;
  getLastSentYRot(): number;
  getPositionBase(): j_net_minecraft_world_phys.Vec3;
  onPlayerAdd(): void;
  removePairing(arg0: ServerPlayer): void;
  sendChanges(): void;
  sendPairingData(arg0: ServerPlayer, arg1: JavaConsumer<j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>>): void;
}
export type ServerEntity = ServerEntityMembers;
export interface ServerEntityStatics {
  new(arg0: ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: number, arg3: boolean, arg4: JavaConsumer<j_net_minecraft_network_protocol.Packet<object>>, arg5: JavaBiConsumer<j_net_minecraft_network_protocol.Packet<object>, JavaList<JavaOpaque<"java.util.UUID">>>, arg6: JavaSet<j_net_minecraft_server_network.ServerPlayerConnection>): ServerEntity;
  readonly FORCED_POS_UPDATE_PERIOD: 60;
}

/** JVM interface net.minecraft.server.level.ServerEntityGetter. */
export interface ServerEntityGetterMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.EntityGetter];
  getLevel(): ServerLevel;
  getNearbyEntities<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world_phys.AABB): JavaList<T>;
  getNearbyPlayers(arg0: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_entity_player.Player>;
  getNearestEntity<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg2: j_net_minecraft_world_entity.LivingEntity | null, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_world_phys.AABB): T | null;
  getNearestEntity<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: JavaList<T>, arg1: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg2: j_net_minecraft_world_entity.LivingEntity | null, arg3: number, arg4: number, arg5: number): T | null;
  getNearestPlayer(arg0: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_entity_player.Player | null;
  getNearestPlayer(arg0: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg1: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_entity_player.Player | null;
  getNearestPlayer(arg0: j_net_minecraft_world_entity_ai_targeting.TargetingConditions, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number, arg3: number, arg4: number): j_net_minecraft_world_entity_player.Player | null;
}
export type ServerEntityGetter = ServerEntityGetterMembers & j_net_minecraft_world_level.EntityGetter;
export interface ServerEntityGetterStatics {
}

/** JVM class net.minecraft.server.level.ServerLevel. */
export interface ServerLevelMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.Level, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemLevelReader">, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemServerLevel">, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_tick_iteration.ChunkTickServerLevel">, ServerEntityGetter, j_net_minecraft_world_level.WorldGenLevel];
  addDuringTeleport(arg0: j_net_minecraft_world_entity.Entity): void;
  addDuringTeleport(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): void | null;
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): boolean | null;
  addLegacyChunkEntities(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.Entity]>): void;
  addLegacyChunkEntities(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.Entity]>, arg1: j_net_minecraft_world_level.ChunkPos): void;
  addNewPlayer(arg0: ServerPlayer): void;
  addRespawnedPlayer(arg0: ServerPlayer): void;
  addWithUUID(arg0: j_net_minecraft_world_entity.Entity): boolean;
  addWithUUID(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): boolean | null;
  addWorldGenChunkEntities(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.Entity]>): void;
  addWorldGenChunkEntities(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.Entity]>, arg1: j_net_minecraft_world_level.ChunkPos): void;
  anyPlayerCloseEnoughForSpawning(arg0: j_net_minecraft_core.BlockPos): boolean;
  anyPlayerCloseEnoughForSpawning(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  areChunksLoadedForMove(arg0: j_net_minecraft_world_phys.AABB): boolean;
  areEntitiesActuallyLoadedAndTicking(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  areEntitiesLoaded(arg0: bigint): boolean;
  blockEvent(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: number): void;
  broadcastDamageEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  broadcastEntityEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: number): void;
  canSleepThroughNights(): boolean;
  canSpawnEntitiesInChunk(arg0: j_net_minecraft_world_level.ChunkPos): boolean;
  checkCapturedTreeStateForObserverNotify(arg0: j_net_minecraft_core.BlockPos, arg1: j_org_bukkit_craftbukkit_block.CraftBlockState): void;
  readonly chunkSource: ServerChunkCache;
  clearBlockEvents(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox): void;
  /** @throws java.io.IOException */
  close(): void;
  destroyBlockProgress(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  dragonParts(): JavaCollection<j_net_minecraft_world_entity_boss.EnderDragonPart>;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  explode(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: j_net_minecraft_world_level.ExplosionDamageCalculator | null, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: j_net_minecraft_world_level.Level_ExplosionInteraction, arg9: j_net_minecraft_core_particles.ParticleOptions, arg10: j_net_minecraft_core_particles.ParticleOptions, arg11: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): void | null;
  explode0(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: j_net_minecraft_world_level.ExplosionDamageCalculator | null, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: j_net_minecraft_world_level.Level_ExplosionInteraction, arg9: j_net_minecraft_core_particles.ParticleOptions, arg10: j_net_minecraft_core_particles.ParticleOptions, arg11: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): j_net_minecraft_world_level.ServerExplosion | null;
  explode0(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: j_net_minecraft_world_level.ExplosionDamageCalculator | null, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: j_net_minecraft_world_level.Level_ExplosionInteraction, arg9: j_net_minecraft_core_particles.ParticleOptions, arg10: j_net_minecraft_core_particles.ParticleOptions, arg11: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg12: JavaConsumer<j_net_minecraft_world_level.ServerExplosion> | null): j_net_minecraft_world_level.ServerExplosion | null;
  fillReportDetails(arg0: j_net_minecraft.CrashReport): j_net_minecraft.CrashReportCategory;
  findClosestBiome3d(arg0: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number, arg4: number): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>]> | null;
  findLightningRod(arg0: j_net_minecraft_core.BlockPos): JavaOptional<j_net_minecraft_core.BlockPos>;
  findLightningTargetAround(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  findLightningTargetAround(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): j_net_minecraft_core.BlockPos;
  findNearestMapStructure(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: boolean): j_net_minecraft_core.BlockPos | null;
  fuelValues(): j_net_minecraft_world_level_block_entity.FuelValues;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gatherChunkSourceStats(): string;
  getAllEntities(): Iterable<j_net_minecraft_world_entity.Entity>;
  getBlockTicks(): j_net_minecraft_world_ticks.LevelTickAccess;
  getBlockTicks(): j_net_minecraft_world_ticks.LevelTicks<j_net_minecraft_world_level_block.Block>;
  getChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getChunkSource(): ServerChunkCache;
  getChunkSource(): j_net_minecraft_world_level_chunk.ChunkSource;
  getDataStorage(): j_net_minecraft_world_level_storage.DimensionDataStorage;
  getDragonFight(): j_net_minecraft_world_level_dimension_end.EndDragonFight | null;
  getDragons(): JavaList<j_net_minecraft_world_entity_boss_enderdragon.EnderDragon>;
  getEntities(): j_net_minecraft_world_level_entity.LevelEntityGetter<j_net_minecraft_world_entity.Entity>;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: JavaPredicate<T>): JavaList<T>;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: JavaPredicate<T>, arg2: JavaList<T>): void;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: JavaPredicate<T>, arg2: JavaList<T>, arg3: number): void;
  getEntity(arg0: number): j_net_minecraft_world_entity.Entity | null;
  getEntityOrPart(arg0: number): j_net_minecraft_world_entity.Entity | null;
  getFluidTicks(): j_net_minecraft_world_ticks.LevelTickAccess;
  getFluidTicks(): j_net_minecraft_world_ticks.LevelTicks<j_net_minecraft_world_level_material.Fluid>;
  getForceLoadedChunks(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getFreeMapId(): j_net_minecraft_world_level_saveddata_maps.MapId;
  getGameRules(): j_net_minecraft_world_level.GameRules;
  getGlobalPlayerByUUID(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_entity_player.Player | null;
  getGlobalSoundRangeSquared(arg0: JavaFunction<JavaOpaque<"org.spigotmc.SpigotWorldConfig">, number>): number;
  getLagCompensationTick(): bigint;
  getLevel(): ServerLevel;
  getLogicalHeight(): number;
  getMapData(arg0: j_net_minecraft_world_level_saveddata_maps.MapId): j_net_minecraft_world_level_saveddata_maps.MapItemSavedData | null;
  getPathTypeCache(): j_net_minecraft_world_level_pathfinder.PathTypeCache;
  getPlayerByUUID(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_entity_player.Player | null;
  getPlayers(arg0: JavaPredicate<ServerPlayer>): JavaList<ServerPlayer>;
  getPlayers(arg0: JavaPredicate<ServerPlayer>, arg1: number): JavaList<ServerPlayer>;
  getPlayersForGlobalSoundGamerule(): JavaList<ServerPlayer>;
  getPoiManager(): j_net_minecraft_world_entity_ai_village_poi.PoiManager;
  getPortalForcer(): j_net_minecraft_world_level_portal.PortalForcer;
  getRaidAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_entity_raid.Raid | null;
  getRaids(): j_net_minecraft_world_entity_raid.Raids;
  getRandomPlayer(): ServerPlayer | null;
  getRandomSequence(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_util.RandomSource;
  getRandomSequences(): j_net_minecraft_world.RandomSequences;
  getScoreboard(): j_net_minecraft_server.ServerScoreboard;
  getScoreboard(): j_net_minecraft_world_scores.Scoreboard;
  getSeaLevel(): number;
  getSeed(): bigint;
  getServer(): j_net_minecraft_server.MinecraftServer;
  getShade(arg0: j_net_minecraft_core.Direction, arg1: boolean): number;
  getStructureManager(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager;
  getTypeKey(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>;
  getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getWatchdogStats(): string;
  getWaypointManager(): j_net_minecraft_server_waypoints.ServerWaypointManager;
  getWireHandler(): JavaOpaque<"alternate.current.wire.WireHandler">;
  globalLevelEvent(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  hasChunk(arg0: number, arg1: number): boolean;
  hasEntityMoveEvent: boolean;
  hasPhysicsEvent: boolean;
  isCloseToVillage(arg0: j_net_minecraft_core.BlockPos, arg1: number): boolean;
  isFlat(): boolean;
  isHandlingTick(): boolean;
  isPositionEntityTicking(arg0: j_net_minecraft_core.BlockPos): boolean;
  isPositionTickingWithEntitiesLoaded(arg0: bigint): boolean;
  isRaided(arg0: j_net_minecraft_core.BlockPos): boolean;
  isVillage(arg0: j_net_minecraft_core.BlockPos): boolean;
  isVillage(arg0: j_net_minecraft_core.SectionPos): boolean;
  levelEvent(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: j_net_minecraft_core.BlockPos, arg3: number): void | null;
  readonly levelStorageAccess: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess;
  loadChunks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaOpaque<"ca.spottedleaf.concurrentutil.util.Priority">, arg5: JavaConsumer<JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>>): void;
  loadChunksForMoveAsync(arg0: j_net_minecraft_world_phys.AABB, arg1: JavaOpaque<"ca.spottedleaf.concurrentutil.util.Priority">, arg2: JavaConsumer<JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>>): void;
  mayInteract(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.BlockPos): boolean;
  moonrise$addPlayerTickingRequest(arg0: number, arg1: number): void;
  moonrise$areChunksLoaded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  moonrise$getAnyChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  moonrise$getChunkDataController(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController">;
  moonrise$getChunkTaskScheduler(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.scheduling.ChunkTaskScheduler">;
  moonrise$getEntityChunkDataController(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController">;
  moonrise$getEntityTickingChunks(): JavaOpaque<"ca.spottedleaf.moonrise.common.list.ReferenceList", [j_net_minecraft_world_level_chunk.LevelChunk]>;
  moonrise$getFullChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk;
  moonrise$getLastMidTickFailure(): bigint;
  moonrise$getLoadedChunks(): JavaOpaque<"ca.spottedleaf.moonrise.common.list.ReferenceList", [j_net_minecraft_world_level_chunk.LevelChunk]>;
  moonrise$getNearbyPlayers(): JavaOpaque<"ca.spottedleaf.moonrise.common.misc.NearbyPlayers">;
  moonrise$getPlayerChunkLoader(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.RegionizedPlayerChunkLoader">;
  moonrise$getPlayerTickingChunks(): JavaOpaque<"ca.spottedleaf.moonrise.common.list.ReferenceList", [j_net_minecraft_world_level_chunk.LevelChunk]>;
  moonrise$getPoiChunkDataController(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.io.MoonriseRegionFileIO$RegionDataController">;
  moonrise$getRegionChunkShift(): number;
  moonrise$getSpecificChunkIfLoaded(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  moonrise$getTickingChunks(): JavaOpaque<"ca.spottedleaf.moonrise.common.list.ReferenceList", [j_net_minecraft_world_level_chunk.LevelChunk]>;
  moonrise$getViewDistanceHolder(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.RegionizedPlayerChunkLoader$ViewDistanceHolder">;
  moonrise$loadChunksAsync(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaOpaque<"ca.spottedleaf.concurrentutil.util.Priority">, arg5: JavaConsumer<JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>>): void;
  moonrise$loadChunksAsync(arg0: number, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg5: JavaOpaque<"ca.spottedleaf.concurrentutil.util.Priority">, arg6: JavaConsumer<JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>>): void;
  moonrise$loadChunksAsync(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: JavaOpaque<"ca.spottedleaf.concurrentutil.util.Priority">, arg3: JavaConsumer<JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>>): void;
  moonrise$loadChunksAsync(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: JavaOpaque<"ca.spottedleaf.concurrentutil.util.Priority">, arg4: JavaConsumer<JavaList<j_net_minecraft_world_level_chunk.ChunkAccess>>): void;
  moonrise$markChunkForPlayerTicking(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  moonrise$midTickTasks(): void;
  moonrise$removeChunkForPlayerTicking(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  moonrise$removePlayerTickingRequest(arg0: number, arg1: number): void;
  moonrise$setLastMidTickFailure(arg0: bigint): void;
  moonrise$syncLoadNonFull(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  neighborChanged(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_world_level_redstone.Orientation | null): void | null;
  neighborChanged(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_world_level_redstone.Orientation | null, arg4: boolean): void | null;
  noSave: (boolean) & { (): boolean };
  onReputationEvent(arg0: j_net_minecraft_world_entity_ai_village.ReputationEventType, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_entity.ReputationEventHandler): void;
  onStructureStartsAvailable(arg0: j_net_minecraft_world_level_chunk.ChunkAccess): void;
  playSeededSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg5: j_net_minecraft_sounds.SoundSource, arg6: number, arg7: number, arg8: bigint): void | null;
  playSeededSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number, arg6: bigint): void | null;
  players(): JavaList<ServerPlayer>;
  potionBrewing(): j_net_minecraft_world_item_alchemy.PotionBrewing;
  readonly raids: j_net_minecraft_world_entity_raid.Raids;
  recipeAccess(): j_net_minecraft_world_item_crafting.RecipeAccess;
  recipeAccess(): j_net_minecraft_world_item_crafting.RecipeManager;
  removePlayerImmediately(arg0: ServerPlayer, arg1: j_net_minecraft_world_entity.Entity_RemovalReason): void;
  resetEmptyTime(): void;
  resetWeatherCycle(): void;
  save(arg0: j_net_minecraft_util.ProgressListener | null, arg1: boolean, arg2: boolean): void | null;
  save(arg0: j_net_minecraft_util.ProgressListener | null, arg1: boolean, arg2: boolean, arg3: boolean): void | null;
  /** @throws java.io.IOException */
  saveDebugReport(arg0: JavaOpaque<"java.nio.file.Path">): void;
  saveIncrementally(arg0: boolean): void;
  sectionsToVillage(arg0: j_net_minecraft_core.SectionPos): number;
  sendBlockUpdated(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: number): void;
  sendParticles<T /* extends j_net_minecraft_core_particles.ParticleOptions */>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): number;
  sendParticles<T /* extends j_net_minecraft_core_particles.ParticleOptions */>(arg0: T, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): number;
  sendParticles<T /* extends j_net_minecraft_core_particles.ParticleOptions */>(arg0: ServerPlayer, arg1: T, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): boolean;
  sendParticlesSource<T /* extends j_net_minecraft_core_particles.ParticleOptions */>(arg0: JavaList<ServerPlayer>, arg1: j_net_minecraft_world_entity.Entity | null, arg2: T, arg3: boolean, arg4: boolean, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): number | null;
  sendParticlesSource<T /* extends j_net_minecraft_core_particles.ParticleOptions */>(arg0: j_net_minecraft_world_entity.Entity | null, arg1: T, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): number | null;
  readonly serverLevelData: j_net_minecraft_world_level_storage.PrimaryLevelData;
  setChunkForced(arg0: number, arg1: number, arg2: boolean): boolean;
  setDayTime(arg0: bigint): void;
  setDefaultSpawnPos(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  setDragonFight(arg0: j_net_minecraft_world_level_dimension_end.EndDragonFight | null): void | null;
  setMapData(arg0: j_net_minecraft_world_level_saveddata_maps.MapId, arg1: j_net_minecraft_world_level_saveddata_maps.MapItemSavedData): void;
  setWeatherParameters(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
  shouldTickBlocksAt(arg0: bigint): boolean;
  startTickingChunk(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  strikeLightning(arg0: j_net_minecraft_world_entity.Entity): boolean;
  strikeLightning(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.weather.LightningStrikeEvent$Cause">): boolean;
  structureManager(): j_net_minecraft_world_level.StructureManager;
  tick(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  tickChunk(arg0: j_net_minecraft_world_level_chunk.LevelChunk, arg1: number): void;
  tickCustomSpawners(arg0: boolean, arg1: boolean): void;
  tickNonPassenger(arg0: j_net_minecraft_world_entity.Entity): void;
  tickPrecipitation(arg0: j_net_minecraft_core.BlockPos): void;
  tickRateManager(): j_net_minecraft_world.TickRateManager;
  tickThunder(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  tickTime(): void;
  toString(): string;
  tryAddFreshEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity): boolean;
  tryAddFreshEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): boolean;
  unload(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  updateLagCompensationTick(): void;
  updateNeighborsAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block): void;
  updateNeighborsAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_world_level_redstone.Orientation | null): void | null;
  updateNeighborsAtExceptFromFacing(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_world_level_redstone.Orientation | null): void | null;
  updateNeighboursOnBlockSet(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  updatePOIOnBlockStateChange(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  updateSleepingPlayerList(): void;
  readonly uuid: JavaOpaque<"java.util.UUID">;
  waitForChunkAndEntities(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): void;
}
export type ServerLevel = ServerLevelMembers & j_net_minecraft_world_level.Level & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemLevelReader"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemServerLevel"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_tick_iteration.ChunkTickServerLevel"> & ServerEntityGetter & j_net_minecraft_world_level.WorldGenLevel;
export interface ServerLevelStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: JavaOpaque<"java.util.concurrent.Executor">, arg2: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg3: j_net_minecraft_world_level_storage.PrimaryLevelData, arg4: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg5: j_net_minecraft_world_level_dimension.LevelStem, arg6: j_net_minecraft_server_level_progress.ChunkProgressListener, arg7: boolean, arg8: bigint, arg9: JavaList<j_net_minecraft_world_level.CustomSpawner>, arg10: boolean, arg11: j_net_minecraft_world.RandomSequences | null, arg12: JavaOpaque<"org.bukkit.World$Environment">, arg13: JavaOpaque<"org.bukkit.generator.ChunkGenerator">, arg14: JavaOpaque<"org.bukkit.generator.BiomeProvider">): ServerLevel;
  readonly END_SPAWN_POINT: j_net_minecraft_core.BlockPos;
  readonly RAIN_DELAY: j_net_minecraft_util_valueproviders.IntProvider;
  readonly RAIN_DURATION: j_net_minecraft_util_valueproviders.IntProvider;
  readonly THUNDER_DURATION: j_net_minecraft_util_valueproviders.IntProvider;
  getCurrentlyTickingEntities(): JavaList<j_net_minecraft_world_entity.Entity>;
}

/** JVM class net.minecraft.server.level.ServerPlayer. */
export interface ServerPlayerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_player.Player, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.ChunkSystemServerPlayer">];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  adjustSpawnLocation(arg0: ServerLevel, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  adventure$displayName: JavaOpaque<"net.kyori.adventure.text.Component">;
  adventure$locale: JavaOpaque<"java.util.Locale">;
  allowsListing(): boolean;
  attack(arg0: j_net_minecraft_world_entity.Entity): void;
  awardKillScore(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  awardRecipes(arg0: JavaCollection<j_net_minecraft_world_item_crafting.RecipeHolder<object>>): number;
  awardRecipesByKey(arg0: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>): void;
  awardStat(arg0: j_net_minecraft_stats.Stat<object>, arg1: number): void;
  broadcastToPlayer(arg0: ServerPlayer): boolean;
  callPortalEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">, arg3: number, arg4: number): j_org_bukkit_craftbukkit_event.CraftPortalEvent | null;
  canChatInColor(): boolean;
  canHarmPlayer(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  checkFallDamage(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos): void;
  checkMovementStatistics(arg0: number, arg1: number, arg2: number): void;
  clearRaidOmenPosition(): void;
  clientInformation(): ClientInformation;
  closeContainer(): void;
  closeContainer(arg0: JavaOpaque<"org.bukkit.event.inventory.InventoryCloseEvent$Reason">): void;
  closeUnloadedInventory(arg0: JavaOpaque<"org.bukkit.event.inventory.InventoryCloseEvent$Reason">): void;
  commandSource(): j_net_minecraft_commands.CommandSource;
  compassTarget: JavaOpaque<"org.bukkit.Location">;
  completeUsingItem(): void;
  connection: j_net_minecraft_server_network.ServerGamePacketListenerImpl;
  readonly containerSynchronizer: j_net_minecraft_world_inventory.ContainerSynchronizer;
  copyRespawnPosition(arg0: ServerPlayer): void;
  createCommandSourceStack(): j_net_minecraft_commands.CommandSourceStack;
  createCommonSpawnInfo(arg0: ServerLevel): j_net_minecraft_network_protocol_game.CommonPlayerSpawnInfo;
  createItemCooldowns(): j_net_minecraft_world_item.ItemCooldowns;
  crit(arg0: j_net_minecraft_world_entity.Entity): void;
  deregisterEnderPearl(arg0: j_net_minecraft_world_entity_projectile.ThrownEnderpearl): void;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  disconnect(): void;
  displayClientMessage(arg0: j_net_minecraft_network_chat.Component, arg1: boolean): void;
  displayName: string;
  doCloseContainer(): void;
  doTick(): void;
  drop(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean, arg2: boolean, arg3: boolean, arg4: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">> | null): j_net_minecraft_world_entity_item.ItemEntity | null;
  drop(arg0: boolean): boolean;
  findRespawnPositionAndUseSpawnBlock(arg0: boolean, arg1: j_net_minecraft_world_level_portal.TeleportTransition_PostTeleportTransition, arg2: JavaOpaque<"org.bukkit.event.player.PlayerRespawnEvent$RespawnReason"> | null): j_net_minecraft_world_level_portal.TeleportTransition | null;
  forceSetPositionRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  forceSetRotation(arg0: number, arg1: number): void;
  readonly gameMode: (ServerPlayerGameMode) & { (): j_net_minecraft_world_level.GameType };
  getAdvancements(): j_net_minecraft_server.PlayerAdvancements;
  getBukkitEntity(): j_org_bukkit_craftbukkit_entity.CraftEntity;
  getBukkitEntity(): j_org_bukkit_craftbukkit_entity.CraftHumanEntity;
  getBukkitEntity(): j_org_bukkit_craftbukkit_entity.CraftPlayer;
  getCamera(): j_net_minecraft_world_entity.Entity;
  getChatSession(): j_net_minecraft_network_chat.RemoteChatSession | null;
  getChatVisibility(): j_net_minecraft_world_entity_player.ChatVisiblity;
  getChunkTrackingView(): ChunkTrackingView;
  getEnchantedDamage(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): number;
  getEnderPearls(): JavaSet<j_net_minecraft_world_entity_projectile.ThrownEnderpearl>;
  getIpAddress(): string;
  getKnownMovement(): j_net_minecraft_world_phys.Vec3;
  getLastActionTime(): bigint;
  getLastClientInput(): j_net_minecraft_world_entity_player.Input_2;
  getLastClientMoveIntent(): j_net_minecraft_world_phys.Vec3;
  getLastSectionPos(): j_net_minecraft_core.SectionPos;
  getPermissionLevel(): number;
  getPlayerTime(): bigint;
  getRaidOmenPosition(): j_net_minecraft_core.BlockPos | null;
  getRecipeBook(): j_net_minecraft_stats.ServerRecipeBook;
  getRespawnConfig(): ServerPlayer_RespawnConfig | null;
  getScoreboard(): j_net_minecraft_world_scores.Scoreboard;
  getStats(): j_net_minecraft_stats.ServerStatsCounter;
  getTabListDisplayName(): j_net_minecraft_network_chat.Component | null;
  getTabListOrder(): number;
  getTextFilter(): j_net_minecraft_server_network.TextFilter;
  getWardenSpawnTracker(): JavaOptional<j_net_minecraft_world_entity_monster_warden.WardenSpawnTracker>;
  giveExperienceLevels(arg0: number): void;
  giveExperiencePoints(arg0: number): void;
  handleExtraItemsCreatedOnUse(arg0: j_net_minecraft_world_item.ItemStack): void;
  hasChangedDimension(): void;
  hasDisconnected(): boolean;
  hurtServer(arg0: ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  indicateDamage(arg0: number, arg1: number): void;
  initInventoryMenu(): void;
  initMenu(arg0: j_net_minecraft_world_inventory.AbstractContainerMenu): void;
  isChangingDimension: (boolean) & { (): boolean };
  isImmobile(): boolean;
  isInvulnerableTo(arg0: ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  isRealPlayer: boolean;
  isReceivingWaypoints(): boolean;
  isTextFilteringEnabled(): boolean;
  joining: boolean;
  jumpFromGround(): void;
  keepLevel: boolean;
  language: string;
  lastSave: bigint;
  lastSentExp: number;
  level(): ServerLevel;
  level(): j_net_minecraft_world_level.Level;
  listName: j_net_minecraft_network_chat.Component | null;
  listOrder: number;
  loadAndSpawnEnderPearls(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  loadAndSpawnParentVehicle(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  loadGameTypes(arg0: j_net_minecraft_world_level_storage.ValueInput | null): void | null;
  loginTime: bigint;
  lookAt(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor): void;
  lookAt(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg1: j_net_minecraft_world_phys.Vec3): void;
  magicCrit(arg0: j_net_minecraft_world_entity.Entity): void;
  maxHealthCache: number;
  mayInteract(arg0: ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  readonly mobBackoffCounts: Array<number>;
  readonly mobCounts: Array<number>;
  moonrise$getChunkLoader(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.RegionizedPlayerChunkLoader$PlayerChunkLoaderData">;
  moonrise$getViewDistanceHolder(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.RegionizedPlayerChunkLoader$ViewDistanceHolder">;
  moonrise$isRealPlayer(): boolean;
  moonrise$setChunkLoader(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.RegionizedPlayerChunkLoader$PlayerChunkLoaderData">): void;
  moonrise$setRealPlayer(arg0: boolean): void;
  newExp: number;
  newLevel: number;
  newTotalExp: number;
  nextContainerCounter(): number;
  readonly object: object | null;
  onAttributeUpdated(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): void;
  onChangedBlock(arg0: ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  onEffectAdded(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: j_net_minecraft_world_entity.Entity | null): void | null;
  onEffectUpdated(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity | null): void | null;
  onEffectsRemoved(arg0: JavaCollection<j_net_minecraft_world_effect.MobEffectInstance>): void;
  onEnchantmentPerformed(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): void;
  onEnterCombat(): void;
  onEquippedItemBroken(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_world_entity.EquipmentSlot): void;
  onExplosionHit(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  onInsideBlock(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  onItemPickup(arg0: j_net_minecraft_world_entity_item.ItemEntity): void;
  onLeaveCombat(): void;
  onUpdateAbilities(): void;
  openCommandBlock(arg0: j_net_minecraft_world_level_block_entity.CommandBlockEntity): void;
  openDialog(arg0: j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>): void;
  openHorseInventory(arg0: j_net_minecraft_world_entity_animal_horse.AbstractHorse, arg1: j_net_minecraft_world.Container): void;
  openItemGui(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world.InteractionHand): void;
  openMenu(arg0: j_net_minecraft_world.MenuProvider | null): JavaOptionalNumber | null;
  openTextEdit(arg0: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg1: boolean): void;
  particleStatus: ParticleStatus;
  patrolSpawnDelay: number;
  playNotifySound(arg0: j_net_minecraft_sounds.SoundEvent, arg1: j_net_minecraft_sounds.SoundSource, arg2: number, arg3: number): void;
  playerNaturallySpawnedEvent: JavaOpaque<"com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent"> | null;
  processPortalCooldown(): void;
  pushEntities(): void;
  queueHealthUpdatePacket: boolean;
  queuedHealthUpdatePacket: j_net_minecraft_network_protocol_game.ClientboundSetHealthPacket | null;
  quitReason: JavaOpaque<"org.bukkit.event.player.PlayerQuitEvent$QuitReason"> | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerAndUpdateEnderPearlTicket(arg0: j_net_minecraft_world_entity_projectile.ThrownEnderpearl): bigint;
  registerEnderPearl(arg0: j_net_minecraft_world_entity_projectile.ThrownEnderpearl): void;
  relativeTime: boolean;
  removeVehicle(): void;
  removeVehicle(arg0: boolean): void;
  requestedViewDistance(): number;
  reset(): void;
  resetFallDistance(): void;
  resetLastActionTime(): void;
  resetPlayerWeather(): void;
  resetRecipes(arg0: JavaCollection<j_net_minecraft_world_item_crafting.RecipeHolder<object>>): number;
  resetSentInfo(): void;
  resetStat(arg0: j_net_minecraft_stats.Stat<object>): void;
  restoreFrom(arg0: ServerPlayer, arg1: boolean): void;
  rideTick(): void;
  seenCredits: boolean;
  sendChatMessage(arg0: j_net_minecraft_network_chat.OutgoingChatMessage, arg1: boolean, arg2: j_net_minecraft_network_chat.ChatType_Bound): void;
  sendChatMessage(arg0: j_net_minecraft_network_chat.OutgoingChatMessage, arg1: boolean, arg2: j_net_minecraft_network_chat.ChatType_Bound, arg3: j_net_minecraft_network_chat.Component | null): void | null;
  sendMerchantOffers(arg0: number, arg1: j_net_minecraft_world_item_trading.MerchantOffers, arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
  sendServerStatus(arg0: j_net_minecraft_network_protocol_status.ServerStatus): void;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component): void;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component, arg1: boolean): void;
  sentListPacket: boolean;
  setCamera(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  setChatSession(arg0: j_net_minecraft_network_chat.RemoteChatSession): void;
  setChunkTrackingView(arg0: ChunkTrackingView): void;
  setExperienceLevels(arg0: number): void;
  setExperiencePoints(arg0: number): void;
  setGameMode(arg0: j_net_minecraft_world_level.GameType): boolean;
  setGameMode(arg0: j_net_minecraft_world_level.GameType, arg1: JavaOpaque<"org.bukkit.event.player.PlayerGameModeChangeEvent$Cause">, arg2: JavaOpaque<"net.kyori.adventure.text.Component"> | null): JavaOpaque<"org.bukkit.event.player.PlayerGameModeChangeEvent"> | null;
  setKnownMovement(arg0: j_net_minecraft_world_phys.Vec3): void;
  setLastClientInput(arg0: j_net_minecraft_world_entity_player.Input_2): void;
  setLastSectionPos(arg0: j_net_minecraft_core.SectionPos): void;
  setPlayerWeather(arg0: JavaOpaque<"org.bukkit.WeatherType">, arg1: boolean): void;
  setRaidOmenPosition(arg0: j_net_minecraft_core.BlockPos): void;
  setRespawnPosition(arg0: ServerPlayer_RespawnConfig | null, arg1: boolean): void | null;
  setRespawnPosition(arg0: ServerPlayer_RespawnConfig | null, arg1: boolean, arg2: JavaOpaque<"com.destroystokyo.paper.event.player.PlayerSetSpawnEvent$Cause">): boolean | null;
  setServerLevel(arg0: ServerLevel): void;
  setSpawnExtraParticlesOnFall(arg0: boolean): void;
  shouldFilterMessageTo(arg0: ServerPlayer): boolean;
  showEndCredits(): void;
  snapTo(arg0: number, arg1: number, arg2: number): void;
  spawnIn(arg0: ServerLevel): void;
  startRiding(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): boolean;
  startSleepInBed(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_world_entity_player.Player_BedSleepingProblem, j_net_minecraft_util.Unit]>;
  startSleeping(arg0: j_net_minecraft_core.BlockPos): void;
  stopSleepInBed(arg0: boolean, arg1: boolean): void;
  supressTrackerForLogin: boolean;
  swing(arg0: j_net_minecraft_world.InteractionHand): void;
  take(arg0: j_net_minecraft_world_entity.Entity, arg1: number): void;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): ServerPlayer | null;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): j_net_minecraft_world_entity.Entity | null;
  teleportRelative(arg0: number, arg1: number, arg2: number): void;
  teleportTo(arg0: number, arg1: number, arg2: number): void;
  teleportTo(arg0: ServerLevel, arg1: number, arg2: number, arg3: number, arg4: JavaSet<j_net_minecraft_world_entity.Relative>, arg5: number, arg6: number, arg7: boolean, arg8: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  tick(): void;
  tickRegeneration(): void;
  tickWeather(): void;
  timeOffset: bigint;
  toString(): string;
  trackEnteredOrExitedLavaOnVehicle(): void;
  trackStartFallingPosition(): void;
  triggerDimensionChangeTriggers(arg0: ServerLevel): void;
  triggerRecipeCrafted(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<object>, arg1: JavaList<j_net_minecraft_world_item.ItemStack>): void;
  updateInvisibilityStatus(): void;
  updateOptions(arg0: ClientInformation): void;
  updateOptionsNoEvents(arg0: ClientInformation): void;
  updateUsingItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  updateWeather(arg0: number, arg1: number, arg2: number, arg3: number): void;
  wardenSpawnTracker: j_net_minecraft_world_entity_monster_warden.WardenSpawnTracker;
  weatherType: JavaOpaque<"org.bukkit.WeatherType"> | null;
  wonGame: boolean;
}
export type ServerPlayer = ServerPlayerMembers & j_net_minecraft_world_entity_player.Player & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.player.ChunkSystemServerPlayer">;
export interface ServerPlayerStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: ServerLevel, arg2: JavaOpaque<"com.mojang.authlib.GameProfile">, arg3: ClientInformation): ServerPlayer;
  readonly BLOCK_INTERACTION_DISTANCE_VERIFICATION_BUFFER: 1;
  readonly ENDER_PEARLS_TAG: "ender_pearls";
  readonly ENDER_PEARL_DIMENSION_TAG: "ender_pearl_dimension";
  readonly ENDER_PEARL_TICKET_RADIUS: 2;
  readonly ENTITY_INTERACTION_DISTANCE_VERIFICATION_BUFFER: 3;
  readonly MOBCATEGORY_TOTAL_ENUMS: number;
  readonly TAG_DIMENSION: "Dimension";
  findRespawnAndUseSpawnBlock(arg0: ServerLevel, arg1: ServerPlayer_RespawnConfig, arg2: boolean): JavaOptional<ServerPlayer_RespawnPosAngle>;
  placeEnderPearlTicket(arg0: ServerLevel, arg1: j_net_minecraft_world_level.ChunkPos): bigint;
}

/** JVM record net.minecraft.server.level.ServerPlayer$RespawnConfig. */
export interface ServerPlayer_RespawnConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  angle(): number;
  dimension(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
  equals(arg0: object): boolean;
  forced(): boolean;
  hashCode(): number;
  isSamePosition(arg0: ServerPlayer_RespawnConfig | null): boolean | null;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type ServerPlayer_RespawnConfig = ServerPlayer_RespawnConfigMembers & JavaOpaque<"java.lang.Record">;
export interface ServerPlayer_RespawnConfigStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: boolean): ServerPlayer_RespawnConfig;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ServerPlayer_RespawnConfig]>;
}

/** JVM record net.minecraft.server.level.ServerPlayer$RespawnPosAngle. */
export interface ServerPlayer_RespawnPosAngleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  consumeAnchorCharge(): JavaRunnable | null;
  equals(arg0: object): boolean;
  hashCode(): number;
  isAnchorSpawn(): boolean;
  isBedSpawn(): boolean;
  position(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  yaw(): number;
}
export type ServerPlayer_RespawnPosAngle = ServerPlayer_RespawnPosAngleMembers & JavaOpaque<"java.lang.Record">;
export interface ServerPlayer_RespawnPosAngleStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: boolean, arg3: boolean, arg4: JavaRunnable | null): ServerPlayer_RespawnPosAngle;
  of(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_core.BlockPos, arg2: boolean, arg3: boolean, arg4: JavaRunnable | null): ServerPlayer_RespawnPosAngle | null;
}

/** JVM class net.minecraft.server.level.ServerPlayerGameMode. */
export interface ServerPlayerGameModeMembers {
  captureSentBlockEntities: boolean;
  capturedBlockEntity: boolean;
  changeGameModeForPlayer(arg0: j_net_minecraft_world_level.GameType): boolean;
  changeGameModeForPlayer(arg0: j_net_minecraft_world_level.GameType, arg1: JavaOpaque<"org.bukkit.event.player.PlayerGameModeChangeEvent$Cause">, arg2: JavaOpaque<"net.kyori.adventure.text.Component"> | null): JavaOpaque<"org.bukkit.event.player.PlayerGameModeChangeEvent"> | null;
  destroyAndAck(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: string): void;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos): boolean;
  firedInteract: boolean;
  getGameModeForPlayer(): j_net_minecraft_world_level.GameType;
  getPreviousGameModeForPlayer(): j_net_minecraft_world_level.GameType | null;
  handleBlockBreakAction(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_network_protocol_game.ServerboundPlayerActionPacket_Action, arg2: j_net_minecraft_core.Direction, arg3: number, arg4: number): void;
  interactHand: j_net_minecraft_world.InteractionHand;
  interactItemStack: j_net_minecraft_world_item.ItemStack;
  interactPosition: j_net_minecraft_core.BlockPos;
  interactResult: boolean;
  isCreative(): boolean;
  isSurvival(): boolean;
  level: ServerLevel;
  readonly player: ServerPlayer;
  setGameModeForPlayer(arg0: j_net_minecraft_world_level.GameType, arg1: j_net_minecraft_world_level.GameType | null): void | null;
  setLevel(arg0: ServerLevel): void;
  tick(): void;
  useItem(arg0: ServerPlayer, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useItemOn(arg0: ServerPlayer, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world.InteractionHand, arg4: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
}
export type ServerPlayerGameMode = ServerPlayerGameModeMembers;
export interface ServerPlayerGameModeStatics {
  new(arg0: ServerPlayer): ServerPlayerGameMode;
}

/** JVM class net.minecraft.server.level.SimulationChunkTracker. */
export interface SimulationChunkTrackerMembers {
  readonly __javaSupertypes?: readonly [ChunkTracker];
  readonly chunks: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ByteMap">;
  getLevel(arg0: bigint): number;
  getLevel(arg0: j_net_minecraft_world_level.ChunkPos): number;
  getLevelFromSource(arg0: bigint): number;
  runAllUpdates(): void;
  setLevel(arg0: bigint, arg1: number): void;
}
export type SimulationChunkTracker = SimulationChunkTrackerMembers & ChunkTracker;
export interface SimulationChunkTrackerStatics {
  new(arg0: j_net_minecraft_world_level.TicketStorage): SimulationChunkTracker;
  readonly MAX_LEVEL: 33;
}

/** JVM class net.minecraft.server.level.ThreadedLevelLightEngine. */
export interface ThreadedLevelLightEngineMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_lighting.LevelLightEngine, JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.StarLightLightingProvider">, JavaOpaque<"java.lang.AutoCloseable">];
  checkBlock(arg0: j_net_minecraft_core.BlockPos): void;
  close(): void;
  initializeLight(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: boolean): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  lightChunk(arg0: j_net_minecraft_world_level_chunk.ChunkAccess, arg1: boolean): PromiseLike<j_net_minecraft_world_level_chunk.ChunkAccess>;
  propagateLightSources(arg0: j_net_minecraft_world_level.ChunkPos): void;
  queueSectionData(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.SectionPos, arg2: j_net_minecraft_world_level_chunk.DataLayer | null): void | null;
  retainData(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  runLightUpdates(): number;
  setLightEnabled(arg0: j_net_minecraft_world_level.ChunkPos, arg1: boolean): void;
  starlight$serverRelightChunks(arg0: JavaCollection<j_net_minecraft_world_level.ChunkPos>, arg1: JavaConsumer<j_net_minecraft_world_level.ChunkPos>, arg2: JavaOpaque<"java.util.function.IntConsumer">): number;
  tryScheduleUpdate(): void;
  updateChunkStatus(arg0: j_net_minecraft_world_level.ChunkPos): void;
  updateSectionStatus(arg0: j_net_minecraft_core.SectionPos, arg1: boolean): void;
  waitForPendingTasks(arg0: number, arg1: number): PromiseLike<object>;
}
export type ThreadedLevelLightEngine = ThreadedLevelLightEngineMembers & j_net_minecraft_world_level_lighting.LevelLightEngine & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.light.StarLightLightingProvider"> & JavaOpaque<"java.lang.AutoCloseable">;
export interface ThreadedLevelLightEngineStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LightChunkGetter, arg1: ChunkMap, arg2: boolean, arg3: j_net_minecraft_util_thread.ConsecutiveExecutor, arg4: ChunkTaskDispatcher): ThreadedLevelLightEngine;
  readonly DEFAULT_BATCH_SIZE: 1000;
}

/** JVM class net.minecraft.server.level.ThrottlingChunkTaskDispatcher. */
export interface ThrottlingChunkTaskDispatcherMembers {
  readonly __javaSupertypes?: readonly [ChunkTaskDispatcher];
  getDebugStatus(): string;
  onRelease(arg0: bigint): void;
  popTasks(): ChunkTaskPriorityQueue_TasksForChunk | null;
  scheduleForExecution(arg0: ChunkTaskPriorityQueue_TasksForChunk): void;
}
export type ThrottlingChunkTaskDispatcher = ThrottlingChunkTaskDispatcherMembers & ChunkTaskDispatcher;
export interface ThrottlingChunkTaskDispatcherStatics {
  new(arg0: j_net_minecraft_util_thread.TaskScheduler<JavaRunnable>, arg1: JavaOpaque<"java.util.concurrent.Executor">, arg2: number): ThrottlingChunkTaskDispatcher;
}

/** JVM class net.minecraft.server.level.Ticket. */
export interface TicketMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [Ticket]>, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticket.ChunkSystemTicket", [T]>];
  compareTo(arg0: object): number;
  compareTo(arg0: Ticket): number;
  decreaseTicksLeft(): void;
  getIdentifier(): object;
  getTicketLevel(): number;
  getType(): TicketType;
  isTimedOut(): boolean;
  moonrise$getIdentifier(): T;
  moonrise$getRemoveDelay(): bigint;
  moonrise$setIdentifier(arg0: T): void;
  moonrise$setRemoveDelay(arg0: bigint): void;
  resetTicksLeft(): void;
  toString(): string;
}
export type Ticket<T = unknown> = TicketMembers<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticket.ChunkSystemTicket", [T]>;
export interface TicketStatics {
  new<T>(arg0: TicketType, arg1: number): Ticket<T>;
  new<T>(arg0: TicketType, arg1: number, arg2: bigint): Ticket<T>;
  new<T>(arg0: TicketType, arg1: number, arg2: object): Ticket<T>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Ticket]>;
}

/** JVM class net.minecraft.server.level.TicketType. */
export interface TicketTypeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticket.ChunkSystemTicketType", [T]>];
  doesLoad(): boolean;
  doesSimulate(): boolean;
  equals(arg0: object): boolean;
  hasTimeout(): boolean;
  hashCode(): number;
  moonrise$getCounterTypes(): Array<bigint>;
  moonrise$getId(): bigint;
  moonrise$getIdentifierComparator(): JavaOpaque<"java.util.Comparator", [T]>;
  moonrise$setIdentifierComparator(arg0: JavaOpaque<"java.util.Comparator", [T]>): void;
  moonrise$setTimeout(arg0: bigint): void;
  persist(): boolean;
  timeout(): bigint;
  toString(): string;
  use(): TicketType_TicketUse;
}
export type TicketType<T = unknown> = TicketTypeMembers<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticket.ChunkSystemTicketType", [T]>;
export interface TicketTypeStatics {
  new<T>(arg0: bigint, arg1: boolean, arg2: TicketType_TicketUse): TicketType<T>;
  readonly CHUNK_LOAD: TicketType;
  readonly DRAGON: TicketType;
  readonly ENDER_PEARL: TicketType;
  readonly FORCED: TicketType;
  readonly FUTURE_AWAIT: TicketType;
  readonly NO_TIMEOUT: 0;
  readonly PLAYER_LOADING: TicketType;
  readonly PLAYER_SIMULATION: TicketType;
  readonly PLUGIN: TicketType;
  readonly PLUGIN_TICKET: TicketType;
  readonly PLUGIN_TYPE_TIMEOUT: number;
  readonly PORTAL: TicketType;
  readonly POST_TELEPORT: TicketType;
  readonly START: TicketType;
  readonly UNKNOWN: TicketType;
  register(arg0: string, arg1: bigint, arg2: boolean, arg3: TicketType_TicketUse): TicketType;
}

/** Live JVM enum net.minecraft.server.level.TicketType$TicketUse; constants are host handles, not strings. */
export type TicketType_TicketUse = JavaEnum<"net.minecraft.server.level.TicketType$TicketUse", "LOADING" | "LOADING_AND_SIMULATION" | "SIMULATION"> & TicketType_TicketUseMembers;
export interface TicketType_TicketUseMembers {
}
export interface TicketType_TicketUseStatics {
  readonly LOADING: TicketType_TicketUse;
  readonly LOADING_AND_SIMULATION: TicketType_TicketUse;
  readonly SIMULATION: TicketType_TicketUse;
  valueOf(arg0: string): TicketType_TicketUse;
  values(): Array<TicketType_TicketUse>;
}

/** JVM class net.minecraft.server.level.WorldGenRegion. */
export interface WorldGenRegionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.WorldGenLevel];
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): boolean;
  addParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): boolean | null;
  dimensionType(): j_net_minecraft_world_level_dimension.DimensionType;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  ensureCanWrite(arg0: j_net_minecraft_core.BlockPos): boolean;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  getBiomeManager(): j_net_minecraft_world_level_biome.BiomeManager;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getBlockTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_block.Block>;
  getBrightness(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.BlockPos): number;
  getCenter(): j_net_minecraft_world_level.ChunkPos;
  getChunk(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkIfLoadedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkSource(): j_net_minecraft_world_level_chunk.ChunkSource;
  getCurrentDifficultyAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world.DifficultyInstance;
  getEntities(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity> | null): JavaList<j_net_minecraft_world_entity.Entity> | null;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_material.Fluid>;
  getHeight(): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getLevel(): ServerLevel;
  getLevelData(): j_net_minecraft_world_level_storage.LevelData;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getMinY(): number;
  getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_world_entity.Entity>): j_net_minecraft_world_entity_player.Player | null;
  getRandom(): j_net_minecraft_util.RandomSource;
  getRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getSeaLevel(): number;
  getSeed(): bigint;
  getServer(): j_net_minecraft_server.MinecraftServer | null;
  getShade(arg0: j_net_minecraft_core.Direction, arg1: boolean): number;
  getSkyDarken(): number;
  getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder;
  hasChunk(arg0: number, arg1: number): boolean;
  isClientSide(): boolean;
  isFluidAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_material.FluidState>): boolean;
  isOldChunkAround(arg0: j_net_minecraft_world_level.ChunkPos, arg1: number): boolean;
  isStateAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  levelEvent(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: j_net_minecraft_core.BlockPos, arg3: number): void | null;
  nextSubTickCount(): bigint;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number): void | null;
  players(): JavaList<j_net_minecraft_world_entity_player.Player>;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  removeBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
  setCurrentlyGenerating(arg0: JavaSupplier<string> | null): void | null;
}
export type WorldGenRegion = WorldGenRegionMembers & j_net_minecraft_world_level.WorldGenLevel;
export interface WorldGenRegionStatics {
  new(arg0: ServerLevel, arg1: j_net_minecraft_util.StaticCache2D<GenerationChunkHolder>, arg2: j_net_minecraft_world_level_chunk_status.ChunkStep, arg3: j_net_minecraft_world_level_chunk.ChunkAccess): WorldGenRegion;
}
