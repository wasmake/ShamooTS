// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_boss from './net.minecraft.world.entity.boss.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_placement from './net.minecraft.world.level.levelgen.structure.placement.generated.js';
import type * as j_net_minecraft_world_level_lighting from './net.minecraft.world.level.lighting.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_redstone from './net.minecraft.world.level.redstone.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_net_minecraft_world_ticks from './net.minecraft.world.ticks.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';
import type * as j_org_bukkit_craftbukkit_block from './org.bukkit.craftbukkit.block.generated.js';

/** JVM abstract net.minecraft.world.level.BaseCommandBlock. */
export interface BaseCommandBlockMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands.CommandSource];
  acceptsFailure(): boolean;
  acceptsSuccess(): boolean;
  createCommandSourceStack(): j_net_minecraft_commands.CommandSourceStack;
  getBukkitSender(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"org.bukkit.command.CommandSender">;
  getCommand(): string;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getLastOutput(): j_net_minecraft_network_chat.Component;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getName(): j_net_minecraft_network_chat.Component;
  getPosition(): j_net_minecraft_world_phys.Vec3;
  getSuccessCount(): number;
  isTrackOutput(): boolean;
  isValid(): boolean;
  load(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  onUpdated(): void;
  performCommand(arg0: Level): boolean;
  save(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component): void;
  setCommand(arg0: string): void;
  setCustomName(arg0: j_net_minecraft_network_chat.Component | null): void | null;
  setLastOutput(arg0: j_net_minecraft_network_chat.Component | null): void | null;
  setSuccessCount(arg0: number): void;
  setTrackOutput(arg0: boolean): void;
  shouldInformAdmins(): boolean;
  usedBy(arg0: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world.InteractionResult;
}
export type BaseCommandBlock = BaseCommandBlockMembers & j_net_minecraft_commands.CommandSource;
export interface BaseCommandBlockStatics {
  new(): BaseCommandBlock;
}

/** JVM abstract net.minecraft.world.level.BaseSpawner. */
export interface BaseSpawnerMembers {
  broadcastEvent(arg0: Level, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  clientTick(arg0: Level, arg1: j_net_minecraft_core.BlockPos): void;
  delay(arg0: Level, arg1: j_net_minecraft_core.BlockPos): void;
  getOrCreateDisplayEntity(arg0: Level, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_entity.Entity | null;
  getSpin(): number;
  getoSpin(): number;
  isNearPlayer(arg0: Level, arg1: j_net_minecraft_core.BlockPos): boolean;
  load(arg0: Level | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_storage.ValueInput): void | null;
  maxNearbyEntities: number;
  maxSpawnDelay: number;
  minSpawnDelay: number;
  nextSpawnData: SpawnData | null;
  onEventTriggered(arg0: Level, arg1: number): boolean;
  requiredPlayerRange: number;
  save(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  serverTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  setEntityId(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: Level | null, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): void | null;
  setNextSpawnData(arg0: Level | null, arg1: j_net_minecraft_core.BlockPos, arg2: SpawnData): void | null;
  spawnCount: number;
  spawnDelay: number;
  spawnPotentials: j_net_minecraft_util_random.WeightedList<SpawnData>;
  spawnRange: number;
}
export type BaseSpawner = BaseSpawnerMembers;
export interface BaseSpawnerStatics {
  new(): BaseSpawner;
  readonly SPAWN_DATA_TAG: "SpawnData";
}

/** JVM interface net.minecraft.world.level.BlockAndTintGetter. */
export interface BlockAndTintGetterMembers {
  readonly __javaSupertypes?: readonly [BlockGetter];
  canSeeSky(arg0: j_net_minecraft_core.BlockPos): boolean;
  getBlockTint(arg0: j_net_minecraft_core.BlockPos, arg1: ColorResolver): number;
  getBrightness(arg0: LightLayer, arg1: j_net_minecraft_core.BlockPos): number;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getShade(arg0: j_net_minecraft_core.Direction, arg1: boolean): number;
}
export type BlockAndTintGetter = BlockAndTintGetterMembers & BlockGetter;
export interface BlockAndTintGetterStatics {
}

/** JVM class net.minecraft.world.level.BlockCollisions. */
export interface BlockCollisionsMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.google.common.collect.AbstractIterator", [T]>];
  computeNext(): T;
}
export type BlockCollisions<T = unknown> = BlockCollisionsMembers<T> & JavaOpaque<"com.google.common.collect.AbstractIterator", [T]>;
export interface BlockCollisionsStatics {
  new<T>(arg0: CollisionGetter, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_phys.AABB, arg3: boolean, arg4: JavaBiFunction<j_net_minecraft_core.BlockPos_MutableBlockPos, j_net_minecraft_world_phys_shapes.VoxelShape, T>): BlockCollisions<T>;
  new<T>(arg0: CollisionGetter, arg1: j_net_minecraft_world_phys_shapes.CollisionContext, arg2: j_net_minecraft_world_phys.AABB, arg3: boolean, arg4: JavaBiFunction<j_net_minecraft_core.BlockPos_MutableBlockPos, j_net_minecraft_world_phys_shapes.VoxelShape, T>): BlockCollisions<T>;
}

/** JVM record net.minecraft.world.level.BlockEventData. */
export interface BlockEventDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  block(): j_net_minecraft_world_level_block.Block;
  equals(arg0: object): boolean;
  hashCode(): number;
  paramA(): number;
  paramB(): number;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type BlockEventData = BlockEventDataMembers & JavaOpaque<"java.lang.Record">;
export interface BlockEventDataStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: number): BlockEventData;
}

/** JVM interface net.minecraft.world.level.BlockGetter. */
export interface BlockGetterMembers {
  readonly __javaSupertypes?: readonly [LevelHeightAccessor];
  clip(arg0: ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: ClipContext, arg1: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">> | null): j_net_minecraft_world_phys.BlockHitResult | null;
  clip(arg0: ClipContext, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: ClipContext, arg1: j_net_minecraft_core.BlockPos, arg2: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">> | null): j_net_minecraft_world_phys.BlockHitResult | null;
  clipWithInteractionOverride(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.VoxelShape, arg4: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.BlockHitResult | null;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getBlockFloorHeight(arg0: j_net_minecraft_core.BlockPos): number;
  getBlockFloorHeight(arg0: j_net_minecraft_world_phys_shapes.VoxelShape, arg1: JavaSupplier<j_net_minecraft_world_phys_shapes.VoxelShape>): number;
  getBlockIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block.Block | null;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getBlockStates(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_block_state.BlockState]>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getLightEmission(arg0: j_net_minecraft_core.BlockPos): number;
  isBlockInLine(arg0: ClipBlockStateContext): j_net_minecraft_world_phys.BlockHitResult;
}
export type BlockGetter = BlockGetterMembers & LevelHeightAccessor;
export interface BlockGetterStatics {
  readonly MAX_BLOCK_ITERATIONS_ALONG_TRAVEL: 16;
  forEachBlockIntersectedBetween(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.AABB, arg3: BlockGetter_BlockStepVisitor): boolean;
  traverseBlocks<T, C>(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: C, arg3: JavaBiFunction<C, j_net_minecraft_core.BlockPos, T>, arg4: JavaFunction<C, T>): T;
}

/** JVM interface net.minecraft.world.level.BlockGetter$BlockStepVisitor. */
export interface BlockGetter_BlockStepVisitorMembers {
  visit(arg0: j_net_minecraft_core.BlockPos, arg1: number): boolean;
}
export type BlockGetter_BlockStepVisitor = BlockGetter_BlockStepVisitorMembers;
export interface BlockGetter_BlockStepVisitorStatics {
}

/** JVM class net.minecraft.world.level.ChunkPos. */
export interface ChunkPosMembers {
  distanceSquared(arg0: bigint): number;
  distanceSquared(arg0: ChunkPos): number;
  equals(arg0: object): boolean;
  getBlockAt(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.BlockPos;
  getBlockX(arg0: number): number;
  getBlockZ(arg0: number): number;
  getChessboardDistance(arg0: number, arg1: number): number;
  getChessboardDistance(arg0: ChunkPos): number;
  getMaxBlockX(): number;
  getMaxBlockZ(): number;
  getMiddleBlockPosition(arg0: number): j_net_minecraft_core.BlockPos;
  getMiddleBlockX(): number;
  getMiddleBlockZ(): number;
  getMinBlockX(): number;
  getMinBlockZ(): number;
  getRegionLocalX(): number;
  getRegionLocalZ(): number;
  getRegionX(): number;
  getRegionZ(): number;
  getWorldPosition(): j_net_minecraft_core.BlockPos;
  hashCode(): number;
  readonly longKey: bigint;
  toLong(): bigint;
  toString(): string;
  readonly x: number;
  readonly z: number;
}
export type ChunkPos = ChunkPosMembers;
export interface ChunkPosStatics {
  new(arg0: number, arg1: number): ChunkPos;
  new(arg0: bigint): ChunkPos;
  new(arg0: j_net_minecraft_core.BlockPos): ChunkPos;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChunkPos]>;
  readonly INVALID_CHUNK_POS: bigint;
  readonly MAX_COORDINATE_VALUE: number;
  readonly REGION_MAX_INDEX: 31;
  readonly REGION_SIZE: 32;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ChunkPos>;
  readonly ZERO: ChunkPos;
  asLong(arg0: number, arg1: number): bigint;
  asLong(arg0: j_net_minecraft_core.BlockPos): bigint;
  getX(arg0: bigint): number;
  getZ(arg0: bigint): number;
  hash(arg0: number, arg1: number): number;
  maxFromRegion(arg0: number, arg1: number): ChunkPos;
  minFromRegion(arg0: number, arg1: number): ChunkPos;
  rangeClosed(arg0: ChunkPos, arg1: number): JavaOpaque<"java.util.stream.Stream", [ChunkPos]>;
  rangeClosed(arg0: ChunkPos, arg1: ChunkPos): JavaOpaque<"java.util.stream.Stream", [ChunkPos]>;
}

/** JVM class net.minecraft.world.level.ClipBlockStateContext. */
export interface ClipBlockStateContextMembers {
  getFrom(): j_net_minecraft_world_phys.Vec3;
  getTo(): j_net_minecraft_world_phys.Vec3;
  isTargetBlock(): JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>;
}
export type ClipBlockStateContext = ClipBlockStateContextMembers;
export interface ClipBlockStateContextStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): ClipBlockStateContext;
}

/** JVM class net.minecraft.world.level.ClipContext. */
export interface ClipContextMembers {
  readonly fluid: ClipContext_Fluid;
  getBlockShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getFluidShape(arg0: j_net_minecraft_world_level_material.FluidState, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getFrom(): j_net_minecraft_world_phys.Vec3;
  getTo(): j_net_minecraft_world_phys.Vec3;
}
export type ClipContext = ClipContextMembers;
export interface ClipContextStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: ClipContext_Block, arg3: ClipContext_Fluid, arg4: j_net_minecraft_world_entity.Entity): ClipContext;
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: ClipContext_Block, arg3: ClipContext_Fluid, arg4: j_net_minecraft_world_phys_shapes.CollisionContext): ClipContext;
}

/** Live JVM enum net.minecraft.world.level.ClipContext$Block; constants are host handles, not strings. */
export type ClipContext_Block = JavaEnum<"net.minecraft.world.level.ClipContext$Block", "COLLIDER" | "FALLDAMAGE_RESETTING" | "OUTLINE" | "VISUAL"> & ClipContext_BlockMembers;
export interface ClipContext_BlockMembers {
  get(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
}
export interface ClipContext_BlockStatics {
  readonly COLLIDER: ClipContext_Block;
  readonly FALLDAMAGE_RESETTING: ClipContext_Block;
  readonly OUTLINE: ClipContext_Block;
  readonly VISUAL: ClipContext_Block;
  valueOf(arg0: string): ClipContext_Block;
  values(): Array<ClipContext_Block>;
}

/** Live JVM enum net.minecraft.world.level.ClipContext$Fluid; constants are host handles, not strings. */
export type ClipContext_Fluid = JavaEnum<"net.minecraft.world.level.ClipContext$Fluid", "ANY" | "NONE" | "SOURCE_ONLY" | "WATER"> & ClipContext_FluidMembers;
export interface ClipContext_FluidMembers {
  canPick(arg0: j_net_minecraft_world_level_material.FluidState): boolean;
}
export interface ClipContext_FluidStatics {
  readonly ANY: ClipContext_Fluid;
  readonly NONE: ClipContext_Fluid;
  readonly SOURCE_ONLY: ClipContext_Fluid;
  readonly WATER: ClipContext_Fluid;
  valueOf(arg0: string): ClipContext_Fluid;
  values(): Array<ClipContext_Fluid>;
}

/** JVM interface net.minecraft.world.level.ClipContext$ShapeGetter. */
export interface ClipContext_ShapeGetterMembers {
  get(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
}
export type ClipContext_ShapeGetter = ClipContext_ShapeGetterMembers;
export interface ClipContext_ShapeGetterStatics {
}

/** JVM interface net.minecraft.world.level.CollisionGetter. */
export interface CollisionGetterMembers {
  readonly __javaSupertypes?: readonly [BlockGetter];
  clipIncludingBorder(arg0: ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  collidesWithSuffocatingBlock(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): boolean | null;
  findFreePosition(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys_shapes.VoxelShape, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: number): JavaOptional<j_net_minecraft_world_phys.Vec3> | null;
  findSupportingBlock(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): JavaOptional<j_net_minecraft_core.BlockPos>;
  getBlockAndLiquidCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getBlockCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getChunkForCollisions(arg0: number, arg1: number): BlockGetter | null;
  getCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getEntityCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getPreMoveCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB, arg2: j_net_minecraft_world_phys.Vec3): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity): boolean;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys_shapes.VoxelShape): boolean | null;
  isUnobstructed(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): boolean;
  noBlockCollision(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): boolean | null;
  noCollision(arg0: j_net_minecraft_world_entity.Entity): boolean;
  noCollision(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): boolean | null;
  noCollision(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB, arg2: boolean): boolean | null;
  noCollision(arg0: j_net_minecraft_world_phys.AABB): boolean;
}
export type CollisionGetter = CollisionGetterMembers & BlockGetter;
export interface CollisionGetterStatics {
}

/** JVM interface net.minecraft.world.level.ColorMapColorUtil. */
export interface ColorMapColorUtilMembers {
}
export type ColorMapColorUtil = ColorMapColorUtilMembers;
export interface ColorMapColorUtilStatics {
  get(arg0: number, arg1: number, arg2: Array<number>, arg3: number): number;
}

/** JVM interface net.minecraft.world.level.ColorResolver. */
export interface ColorResolverMembers {
  getColor(arg0: j_net_minecraft_world_level_biome.Biome, arg1: number, arg2: number): number;
}
export type ColorResolver = ColorResolverMembers;
export interface ColorResolverStatics {
}

/** JVM interface net.minecraft.world.level.CommonLevelAccessor. */
export interface CommonLevelAccessorMembers {
  readonly __javaSupertypes?: readonly [EntityGetter, LevelReader, LevelSimulatedRW];
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getEntityCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getHeightmapPos(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys_shapes.VoxelShape): boolean | null;
}
export type CommonLevelAccessor = CommonLevelAccessorMembers & EntityGetter & LevelReader & LevelSimulatedRW;
export interface CommonLevelAccessorStatics {
}

/** JVM interface net.minecraft.world.level.CustomSpawner. */
export interface CustomSpawnerMembers {
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean, arg2: boolean): void;
}
export type CustomSpawner = CustomSpawnerMembers;
export interface CustomSpawnerStatics {
}

/** JVM class net.minecraft.world.level.DataPackConfig. */
export interface DataPackConfigMembers {
  getDisabled(): JavaList<string>;
  getEnabled(): JavaList<string>;
}
export type DataPackConfig = DataPackConfigMembers;
export interface DataPackConfigStatics {
  new(arg0: JavaList<string>, arg1: JavaList<string>): DataPackConfig;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DataPackConfig]>;
  readonly DEFAULT: DataPackConfig;
}

/** JVM class net.minecraft.world.level.DryFoliageColor. */
export interface DryFoliageColorMembers {
}
export type DryFoliageColor = DryFoliageColorMembers;
export interface DryFoliageColorStatics {
  new(): DryFoliageColor;
  readonly FOLIAGE_DRY_DEFAULT: -10732494;
  get(arg0: number, arg1: number): number;
  init(arg0: Array<number>): void;
}

/** Live JVM enum net.minecraft.world.level.EmptyBlockAndTintGetter; constants are host handles, not strings. */
export type EmptyBlockAndTintGetter = JavaEnum<"net.minecraft.world.level.EmptyBlockAndTintGetter", "INSTANCE"> & EmptyBlockAndTintGetterMembers;
export interface EmptyBlockAndTintGetterMembers {
  canSeeSky(arg0: j_net_minecraft_core.BlockPos): boolean;
  clip(arg0: ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: ClipContext, arg1: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">> | null): j_net_minecraft_world_phys.BlockHitResult | null;
  clip(arg0: ClipContext, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: ClipContext, arg1: j_net_minecraft_core.BlockPos, arg2: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">> | null): j_net_minecraft_world_phys.BlockHitResult | null;
  clipWithInteractionOverride(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.VoxelShape, arg4: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.BlockHitResult | null;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getBlockFloorHeight(arg0: j_net_minecraft_core.BlockPos): number;
  getBlockFloorHeight(arg0: j_net_minecraft_world_phys_shapes.VoxelShape, arg1: JavaSupplier<j_net_minecraft_world_phys_shapes.VoxelShape>): number;
  getBlockIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block.Block | null;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getBlockStates(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_block_state.BlockState]>;
  getBlockTint(arg0: j_net_minecraft_core.BlockPos, arg1: ColorResolver): number;
  getBrightness(arg0: LightLayer, arg1: j_net_minecraft_core.BlockPos): number;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getHeight(): number;
  getLightEmission(arg0: j_net_minecraft_core.BlockPos): number;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getMaxSectionY(): number;
  getMaxY(): number;
  getMinSectionY(): number;
  getMinY(): number;
  getRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getSectionIndex(arg0: number): number;
  getSectionIndexFromSectionY(arg0: number): number;
  getSectionYFromSectionIndex(arg0: number): number;
  getSectionsCount(): number;
  getShade(arg0: j_net_minecraft_core.Direction, arg1: boolean): number;
  isBlockInLine(arg0: ClipBlockStateContext): j_net_minecraft_world_phys.BlockHitResult;
  isInsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: j_net_minecraft_core.BlockPos): boolean;
}
export interface EmptyBlockAndTintGetterStatics {
  readonly INSTANCE: EmptyBlockAndTintGetter;
  valueOf(arg0: string): EmptyBlockAndTintGetter;
  values(): Array<EmptyBlockAndTintGetter>;
}

/** Live JVM enum net.minecraft.world.level.EmptyBlockGetter; constants are host handles, not strings. */
export type EmptyBlockGetter = JavaEnum<"net.minecraft.world.level.EmptyBlockGetter", "INSTANCE"> & EmptyBlockGetterMembers;
export interface EmptyBlockGetterMembers {
  clip(arg0: ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: ClipContext, arg1: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">> | null): j_net_minecraft_world_phys.BlockHitResult | null;
  clip(arg0: ClipContext, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: ClipContext, arg1: j_net_minecraft_core.BlockPos, arg2: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">> | null): j_net_minecraft_world_phys.BlockHitResult | null;
  clipWithInteractionOverride(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.VoxelShape, arg4: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.BlockHitResult | null;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getBlockFloorHeight(arg0: j_net_minecraft_core.BlockPos): number;
  getBlockFloorHeight(arg0: j_net_minecraft_world_phys_shapes.VoxelShape, arg1: JavaSupplier<j_net_minecraft_world_phys_shapes.VoxelShape>): number;
  getBlockIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block.Block | null;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStates(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_block_state.BlockState]>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getHeight(): number;
  getLightEmission(arg0: j_net_minecraft_core.BlockPos): number;
  getMaxSectionY(): number;
  getMaxY(): number;
  getMinSectionY(): number;
  getMinY(): number;
  getSectionIndex(arg0: number): number;
  getSectionIndexFromSectionY(arg0: number): number;
  getSectionYFromSectionIndex(arg0: number): number;
  getSectionsCount(): number;
  isBlockInLine(arg0: ClipBlockStateContext): j_net_minecraft_world_phys.BlockHitResult;
  isInsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: j_net_minecraft_core.BlockPos): boolean;
}
export interface EmptyBlockGetterStatics {
  readonly INSTANCE: EmptyBlockGetter;
  valueOf(arg0: string): EmptyBlockGetter;
  values(): Array<EmptyBlockGetter>;
}

/** JVM class net.minecraft.world.level.EntityBasedExplosionDamageCalculator. */
export interface EntityBasedExplosionDamageCalculatorMembers {
  readonly __javaSupertypes?: readonly [ExplosionDamageCalculator];
  getBlockExplosionResistance(arg0: Explosion, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.FluidState): JavaOptional<number>;
  shouldBlockExplode(arg0: Explosion, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number): boolean;
}
export type EntityBasedExplosionDamageCalculator = EntityBasedExplosionDamageCalculatorMembers & ExplosionDamageCalculator;
export interface EntityBasedExplosionDamageCalculatorStatics {
  new(arg0: j_net_minecraft_world_entity.Entity): EntityBasedExplosionDamageCalculator;
}

/** JVM interface net.minecraft.world.level.EntityGetter. */
export interface EntityGetterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.world.ChunkSystemEntityGetter">];
  findNearbyBukkitPlayers(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_world_entity.Entity> | null): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">> | null;
  findNearbyBukkitPlayers(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  findNearbyPlayer(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity> | null): j_net_minecraft_world_entity_player.Player | null;
  getEntities(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_entity.Entity> | null;
  getEntities(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaList<j_net_minecraft_world_entity.Entity> | null;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getEntitiesOfClass<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_phys.AABB): JavaList<T>;
  getEntitiesOfClass<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getEntityCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getGlobalPlayerByUUID(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_entity_player.Player | null;
  getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_world_entity.Entity> | null): j_net_minecraft_world_entity_player.Player | null;
  getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): j_net_minecraft_world_entity_player.Player | null;
  getNearestPlayer(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_entity_player.Player | null;
  getPlayerByUUID(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_entity_player.Player | null;
  hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  hasNearbyAlivePlayerThatAffectsSpawning(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys_shapes.VoxelShape): boolean | null;
  moonrise$getHardCollidingEntities(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaList<j_net_minecraft_world_entity.Entity>;
  players(): JavaList<j_net_minecraft_world_entity_player.Player>;
}
export type EntityGetter = EntityGetterMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.world.ChunkSystemEntityGetter">;
export interface EntityGetterStatics {
}

/** JVM interface net.minecraft.world.level.Explosion. */
export interface ExplosionMembers {
  canTriggerBlocks(): boolean;
  center(): j_net_minecraft_world_phys.Vec3;
  getBlockInteraction(): Explosion_BlockInteraction;
  getDirectSourceEntity(): j_net_minecraft_world_entity.Entity | null;
  getIndirectSourceEntity(): j_net_minecraft_world_entity.LivingEntity | null;
  level(): j_net_minecraft_server_level.ServerLevel;
  radius(): number;
  shouldAffectBlocklikeEntities(): boolean;
}
export type Explosion = ExplosionMembers;
export interface ExplosionStatics {
  getDefaultDamageSource(arg0: Level, arg1: j_net_minecraft_world_entity.Entity | null): j_net_minecraft_world_damagesource.DamageSource | null;
  getIndirectSourceEntity(arg0: j_net_minecraft_world_entity.Entity | null): j_net_minecraft_world_entity.LivingEntity | null;
}

/** Live JVM enum net.minecraft.world.level.Explosion$BlockInteraction; constants are host handles, not strings. */
export type Explosion_BlockInteraction = JavaEnum<"net.minecraft.world.level.Explosion$BlockInteraction", "DESTROY" | "DESTROY_WITH_DECAY" | "KEEP" | "TRIGGER_BLOCK"> & Explosion_BlockInteractionMembers;
export interface Explosion_BlockInteractionMembers {
  shouldAffectBlocklikeEntities(): boolean;
}
export interface Explosion_BlockInteractionStatics {
  readonly DESTROY: Explosion_BlockInteraction;
  readonly DESTROY_WITH_DECAY: Explosion_BlockInteraction;
  readonly KEEP: Explosion_BlockInteraction;
  readonly TRIGGER_BLOCK: Explosion_BlockInteraction;
  valueOf(arg0: string): Explosion_BlockInteraction;
  values(): Array<Explosion_BlockInteraction>;
}

/** JVM class net.minecraft.world.level.ExplosionDamageCalculator. */
export interface ExplosionDamageCalculatorMembers {
  getBlockExplosionResistance(arg0: Explosion, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.FluidState): JavaOptional<number>;
  getEntityDamageAmount(arg0: Explosion, arg1: j_net_minecraft_world_entity.Entity, arg2: number): number;
  getKnockbackMultiplier(arg0: j_net_minecraft_world_entity.Entity): number;
  shouldBlockExplode(arg0: Explosion, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number): boolean;
  shouldDamageEntity(arg0: Explosion, arg1: j_net_minecraft_world_entity.Entity): boolean;
}
export type ExplosionDamageCalculator = ExplosionDamageCalculatorMembers;
export interface ExplosionDamageCalculatorStatics {
  new(): ExplosionDamageCalculator;
}

/** JVM class net.minecraft.world.level.FoliageColor. */
export interface FoliageColorMembers {
}
export type FoliageColor = FoliageColorMembers;
export interface FoliageColorStatics {
  new(): FoliageColor;
  readonly FOLIAGE_BIRCH: -8345771;
  readonly FOLIAGE_DEFAULT: -12012264;
  readonly FOLIAGE_EVERGREEN: -10380959;
  readonly FOLIAGE_MANGROVE: -7158200;
  get(arg0: number, arg1: number): number;
  init(arg0: Array<number>): void;
}

/** JVM class net.minecraft.world.level.GameRules. */
export interface GameRulesMembers {
  assignFrom(arg0: GameRules, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  copy(arg0: j_net_minecraft_world_flag.FeatureFlagSet): GameRules;
  createTag(): j_net_minecraft_nbt.CompoundTag;
  getBoolean(arg0: GameRules_Key<GameRules_BooleanValue>): boolean;
  getInt(arg0: GameRules_Key<GameRules_IntegerValue>): number;
  getRule<T /* extends GameRules_Value<T> */>(arg0: GameRules_Key<T>): T;
  visitGameRuleTypes(arg0: GameRules_GameRuleTypeVisitor): void;
}
export type GameRules = GameRulesMembers;
export interface GameRulesStatics {
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet): GameRules;
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet, arg1: JavaOpaque<"com.mojang.serialization.DynamicLike", [object]>): GameRules;
  readonly DEFAULT_RANDOM_TICK_SPEED: 3;
  readonly GAME_RULE_TYPES: JavaMap<GameRules_Key<object>, GameRules_Type<object>>;
  readonly RULE_ALLOWFIRETICKAWAYFROMPLAYERS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_ANNOUNCE_ADVANCEMENTS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_BLOCK_EXPLOSION_DROP_DECAY: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_COMMANDBLOCKOUTPUT: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_DAYLIGHT: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DISABLE_PLAYER_MOVEMENT_CHECK: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DISABLE_RAIDS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DOBLOCKDROPS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DOENTITYDROPS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DOFIRETICK: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DOINSOMNIA: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DOMOBLOOT: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DOMOBSPAWNING: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DO_IMMEDIATE_RESPAWN: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DO_PATROL_SPAWNING: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DO_TRADER_SPAWNING: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DO_VINES_SPREAD: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DO_WARDEN_SPAWNING: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_DROWNING_DAMAGE: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_ENDER_PEARLS_VANISH_ON_DEATH: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_FALL_DAMAGE: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_FIRE_DAMAGE: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_FORGIVE_DEAD_PLAYERS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_FREEZE_DAMAGE: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_GLOBAL_SOUND_EVENTS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_KEEPINVENTORY: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_LAVA_SOURCE_CONVERSION: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_LIMITED_CRAFTING: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_LOCATOR_BAR: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_LOGADMINCOMMANDS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_MAX_COMMAND_CHAIN_LENGTH: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_MAX_COMMAND_FORK_COUNT: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_MAX_ENTITY_CRAMMING: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_MINECART_MAX_SPEED: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_MOBGRIEFING: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_MOB_EXPLOSION_DROP_DECAY: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_NATURAL_REGENERATION: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_PLAYERS_NETHER_PORTAL_CREATIVE_DELAY: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_PLAYERS_NETHER_PORTAL_DEFAULT_DELAY: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_PLAYERS_SLEEPING_PERCENTAGE: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_PROJECTILESCANBREAKBLOCKS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_RANDOMTICKING: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_REDUCEDDEBUGINFO: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_SENDCOMMANDFEEDBACK: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_SHOWDEATHMESSAGES: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_SNOW_ACCUMULATION_HEIGHT: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_SPAWN_CHUNK_RADIUS: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_SPAWN_RADIUS: GameRules_Key<GameRules_IntegerValue>;
  readonly RULE_SPECTATORSGENERATECHUNKS: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_TNT_EXPLODES: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_TNT_EXPLOSION_DROP_DECAY: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_UNIVERSAL_ANGER: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_WATER_SOURCE_CONVERSION: GameRules_Key<GameRules_BooleanValue>;
  readonly RULE_WEATHER_CYCLE: GameRules_Key<GameRules_BooleanValue>;
  getType<T /* extends GameRules_Value<T> */>(arg0: GameRules_Key<T>): GameRules_Type<T>;
  keyCodec<T /* extends GameRules_Value<T> */>(arg0: JavaClass<T>): JavaOpaque<"com.mojang.serialization.Codec", [GameRules_Key<T>]>;
}

/** JVM class net.minecraft.world.level.GameRules$BooleanValue. */
export interface GameRules_BooleanValueMembers {
  readonly __javaSupertypes?: readonly [GameRules_Value<GameRules_BooleanValue>];
  copy(): GameRules_BooleanValue;
  copy(): GameRules_Value;
  deserialize(arg0: string): void;
  get(): boolean;
  getCommandResult(): number;
  getSelf(): GameRules_BooleanValue;
  getSelf(): GameRules_Value;
  onChanged(arg0: j_net_minecraft_server_level.ServerLevel | null): void | null;
  serialize(): string;
  set(arg0: boolean, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFrom(arg0: GameRules_BooleanValue, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFrom(arg0: GameRules_Value, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFromArgument(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: GameRules_Key<GameRules_BooleanValue>): void;
  toString(): string;
  readonly type: GameRules_Type<GameRules_BooleanValue>;
  updateFromArgument(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: GameRules_Key<GameRules_BooleanValue>): void;
}
export type GameRules_BooleanValue = GameRules_BooleanValueMembers;
export interface GameRules_BooleanValueStatics {
  new(arg0: GameRules_Type<GameRules_BooleanValue>, arg1: boolean): GameRules_BooleanValue;
}

/** Live JVM enum net.minecraft.world.level.GameRules$Category; constants are host handles, not strings. */
export type GameRules_Category = JavaEnum<"net.minecraft.world.level.GameRules$Category", "CHAT" | "DROPS" | "MISC" | "MOBS" | "PLAYER" | "SPAWNING" | "UPDATES"> & GameRules_CategoryMembers;
export interface GameRules_CategoryMembers {
  getDescriptionId(): string;
}
export interface GameRules_CategoryStatics {
  readonly CHAT: GameRules_Category;
  readonly DROPS: GameRules_Category;
  readonly MISC: GameRules_Category;
  readonly MOBS: GameRules_Category;
  readonly PLAYER: GameRules_Category;
  readonly SPAWNING: GameRules_Category;
  readonly UPDATES: GameRules_Category;
  valueOf(arg0: string): GameRules_Category;
  values(): Array<GameRules_Category>;
}

/** JVM interface net.minecraft.world.level.GameRules$GameRuleTypeVisitor. */
export interface GameRules_GameRuleTypeVisitorMembers {
  visit<T /* extends GameRules_Value<T> */>(arg0: GameRules_Key<T>, arg1: GameRules_Type<T>): void;
  visitBoolean(arg0: GameRules_Key<GameRules_BooleanValue>, arg1: GameRules_Type<GameRules_BooleanValue>): void;
  visitInteger(arg0: GameRules_Key<GameRules_IntegerValue>, arg1: GameRules_Type<GameRules_IntegerValue>): void;
}
export type GameRules_GameRuleTypeVisitor = GameRules_GameRuleTypeVisitorMembers;
export interface GameRules_GameRuleTypeVisitorStatics {
}

/** JVM class net.minecraft.world.level.GameRules$IntegerValue. */
export interface GameRules_IntegerValueMembers {
  readonly __javaSupertypes?: readonly [GameRules_Value<GameRules_IntegerValue>];
  copy(): GameRules_IntegerValue;
  copy(): GameRules_Value;
  deserialize(arg0: string): void;
  get(): number;
  getCommandResult(): number;
  getSelf(): GameRules_IntegerValue;
  getSelf(): GameRules_Value;
  onChanged(arg0: j_net_minecraft_server_level.ServerLevel | null): void | null;
  serialize(): string;
  set(arg0: number, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFrom(arg0: GameRules_IntegerValue, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFrom(arg0: GameRules_Value, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFromArgument(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: GameRules_Key<GameRules_IntegerValue>): void;
  toString(): string;
  tryDeserialize(arg0: string): boolean;
  readonly type: GameRules_Type<GameRules_IntegerValue>;
  updateFromArgument(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: GameRules_Key<GameRules_IntegerValue>): void;
}
export type GameRules_IntegerValue = GameRules_IntegerValueMembers;
export interface GameRules_IntegerValueStatics {
  new(arg0: GameRules_Type<GameRules_IntegerValue>, arg1: number): GameRules_IntegerValue;
}

/** JVM class net.minecraft.world.level.GameRules$Key. */
export interface GameRules_KeyMembers<T /* extends GameRules_Value<T> */ = unknown> {
  equals(arg0: object): boolean;
  readonly gameRuleIndex: number;
  getCategory(): GameRules_Category;
  getDescriptionId(): string;
  getId(): string;
  hashCode(): number;
  toString(): string;
}
export type GameRules_Key<T /* extends GameRules_Value<T> */ = unknown> = GameRules_KeyMembers<T>;
export interface GameRules_KeyStatics {
  new<T /* extends GameRules_Value<T> */>(arg0: string, arg1: GameRules_Category): GameRules_Key<T>;
  readonly lastGameRuleIndex: number;
}

/** JVM class net.minecraft.world.level.GameRules$Type. */
export interface GameRules_TypeMembers<T /* extends GameRules_Value<T> */ = unknown> {
  asFeatureElement(): j_net_minecraft_world_flag.FeatureElement;
  callVisitor(arg0: GameRules_GameRuleTypeVisitor, arg1: GameRules_Key<T>): void;
  createArgument(arg0: string): JavaOpaque<"com.mojang.brigadier.builder.RequiredArgumentBuilder", [j_net_minecraft_commands.CommandSourceStack, object]>;
  createRule(): T;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
}
export type GameRules_Type<T /* extends GameRules_Value<T> */ = unknown> = GameRules_TypeMembers<T>;
export interface GameRules_TypeStatics {
}

/** JVM abstract net.minecraft.world.level.GameRules$Value. */
export interface GameRules_ValueMembers<T /* extends GameRules_Value<T> */ = unknown> {
  copy(): T;
  deserialize(arg0: string): void;
  getCommandResult(): number;
  getSelf(): T;
  onChanged(arg0: j_net_minecraft_server_level.ServerLevel | null): void | null;
  serialize(): string;
  setFrom(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel | null): void | null;
  setFromArgument(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: GameRules_Key<T>): void;
  toString(): string;
  readonly type: GameRules_Type<T>;
  updateFromArgument(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: GameRules_Key<T>): void;
}
export type GameRules_Value<T /* extends GameRules_Value<T> */ = unknown> = GameRules_ValueMembers<T>;
export interface GameRules_ValueStatics {
  new<T /* extends GameRules_Value<T> */>(arg0: GameRules_Type<T>): GameRules_Value<T>;
}

/** Live JVM enum net.minecraft.world.level.GameType; constants are host handles, not strings. */
export type GameType = JavaEnum<"net.minecraft.world.level.GameType", "ADVENTURE" | "CREATIVE" | "SPECTATOR" | "SURVIVAL"> & GameTypeMembers;
export interface GameTypeMembers {
  getId(): number;
  getLongDisplayName(): j_net_minecraft_network_chat.Component;
  getName(): string;
  getSerializedName(): string;
  getShortDisplayName(): j_net_minecraft_network_chat.Component;
  isBlockPlacingRestricted(): boolean;
  isCreative(): boolean;
  isSurvival(): boolean;
  updatePlayerAbilities(arg0: j_net_minecraft_world_entity_player.Abilities): void;
}
export interface GameTypeStatics {
  readonly ADVENTURE: GameType;
  readonly CREATIVE: GameType;
  readonly SPECTATOR: GameType;
  readonly SURVIVAL: GameType;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<GameType>;
  readonly DEFAULT_MODE: GameType;
  readonly LEGACY_ID_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GameType]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, GameType>;
  byId(arg0: number): GameType;
  byName(arg0: string): GameType;
  byName(arg0: string, arg1: GameType | null): GameType | null;
  byNullableId(arg0: number): GameType | null;
  getNullableId(arg0: GameType | null): number | null;
  isValidId(arg0: number): boolean;
  valueOf(arg0: string): GameType;
  values(): Array<GameType>;
}

/** JVM class net.minecraft.world.level.GrassColor. */
export interface GrassColorMembers {
}
export type GrassColor = GrassColorMembers;
export interface GrassColorStatics {
  new(): GrassColor;
  get(arg0: number, arg1: number): number;
  getDefaultColor(): number;
  init(arg0: Array<number>): void;
}

/** JVM interface net.minecraft.world.level.ItemLike. */
export interface ItemLikeMembers {
  asItem(): j_net_minecraft_world_item.Item;
}
export type ItemLike = ItemLikeMembers;
export interface ItemLikeStatics {
}

/** JVM abstract net.minecraft.world.level.Level. */
export interface LevelMembers {
  readonly __javaSupertypes?: readonly [LevelAccessor, j_net_minecraft_world_level_entity.UUIDLookup<j_net_minecraft_world_entity.Entity>, JavaOpaque<"java.lang.AutoCloseable">, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemLevel">, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.world.ChunkSystemEntityGetter">];
  addAlwaysVisibleParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  addAlwaysVisibleParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
  addBlockEntityTicker(arg0: j_net_minecraft_world_level_block_entity.TickingBlockEntity): void;
  addDestroyBlockEffect(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  addParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  addParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  readonly addend: 1013904223;
  blockEntityChanged(arg0: j_net_minecraft_core.BlockPos): void;
  readonly blockEntityTickers: JavaList<j_net_minecraft_world_level_block_entity.TickingBlockEntity>;
  blockEvent(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: number): void;
  broadcastDamageEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  broadcastEntityEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: number): void;
  captureBlockStates: boolean;
  captureDrops: JavaList<j_net_minecraft_world_entity_item.ItemEntity> | null;
  captureTreeGeneration: boolean;
  capturedBlockStates: JavaMap<j_net_minecraft_core.BlockPos, j_org_bukkit_craftbukkit_block.CraftBlockState>;
  capturedTileEntities: JavaMap<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_entity.BlockEntity>;
  checkEntityCollision(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_phys_shapes.CollisionContext, arg3: j_net_minecraft_core.BlockPos, arg4: boolean): boolean;
  readonly chunkPacketBlockController: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketBlockController">;
  clip(arg0: ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  clipDirect(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys.HitResult_Type;
  /** @throws java.io.IOException */
  close(): void;
  collidesWithSuffocatingBlock(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): boolean;
  createFireworks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JavaList<j_net_minecraft_world_item_component.FireworkExplosion>): void;
  damageSources(): j_net_minecraft_world_damagesource.DamageSources;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): boolean | null;
  destroyBlockProgress(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  dimension(): j_net_minecraft_resources.ResourceKey<Level>;
  dimensionType(): j_net_minecraft_world_level_dimension.DimensionType;
  dimensionTypeRegistration(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_dimension.DimensionType>;
  dragonParts(): JavaCollection<j_net_minecraft_world_entity_boss.EnderDragonPart>;
  explode(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Level_ExplosionInteraction): void | null;
  explode(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: Level_ExplosionInteraction): void | null;
  explode(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: ExplosionDamageCalculator | null, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: Level_ExplosionInteraction): void | null;
  explode(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: ExplosionDamageCalculator | null, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: Level_ExplosionInteraction, arg9: j_net_minecraft_core_particles.ParticleOptions, arg10: j_net_minecraft_core_particles.ParticleOptions, arg11: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): void | null;
  explode(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: ExplosionDamageCalculator | null, arg3: j_net_minecraft_world_phys.Vec3, arg4: number, arg5: boolean, arg6: Level_ExplosionInteraction): void | null;
  readonly explosionDensityCache: JavaMap<JavaOpaque<"net.minecraft.world.level.ServerExplosion$CacheKey">, number>;
  fillReportDetails(arg0: j_net_minecraft.CrashReport): j_net_minecraft.CrashReportCategory;
  findFreePosition(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys_shapes.VoxelShape, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: number): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  findSupportingBlock(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): JavaOptional<j_net_minecraft_core.BlockPos>;
  fuelValues(): j_net_minecraft_world_level_block_entity.FuelValues;
  gatherChunkSourceStats(): string;
  generator: JavaOpaque<"org.bukkit.generator.ChunkGenerator"> | null;
  getBiomeManager(): j_net_minecraft_world_level_biome.BiomeManager;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockRandomPos(arg0: number, arg1: number, arg2: number, arg3: number): j_net_minecraft_core.BlockPos;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getBlockStateIfLoadedAndInBounds(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getChunk(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_chunk.LevelChunk;
  getChunkEntities(arg0: number, arg1: number): Array<JavaOpaque<"org.bukkit.entity.Entity">>;
  getChunkForCollisions(arg0: number, arg1: number): BlockGetter | null;
  getChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getChunkIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_chunk.LevelChunk | null;
  getChunkIfLoadedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getClientLeafTintColor(arg0: j_net_minecraft_core.BlockPos): number;
  getCraftServer(): j_org_bukkit_craftbukkit.CraftServer;
  getCurrentDifficultyAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world.DifficultyInstance;
  getDayTime(): bigint;
  getEntities(): j_net_minecraft_world_level_entity.LevelEntityGetter<j_net_minecraft_world_entity.Entity>;
  getEntities(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaList<j_net_minecraft_world_entity.Entity> | null;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>, arg3: JavaList<T>): void;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>, arg3: JavaList<T>, arg4: number): void;
  getEntitiesOfClass<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getEntity(arg0: number): j_net_minecraft_world_entity.Entity | null;
  getEntity(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_entity.Entity | null;
  getEntity(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_level_entity.UniquelyIdentifyable | null;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getGameTime(): bigint;
  getHeight(): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getHeightmapPos(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getLevelData(): j_net_minecraft_world_level_storage.LevelData;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getMapData(arg0: j_net_minecraft_world_level_saveddata_maps.MapId): j_net_minecraft_world_level_saveddata_maps.MapItemSavedData | null;
  getMaxSectionY(): number;
  getMaxY(): number;
  getMinSectionY(): number;
  getMinY(): number;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getPushableEntities(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_entity.Entity>;
  getRainLevel(arg0: number): number;
  getRandom(): j_net_minecraft_util.RandomSource;
  getScoreboard(): j_net_minecraft_world_scores.Scoreboard;
  getSectionIndex(arg0: number): number;
  getSectionIndexFromSectionY(arg0: number): number;
  getSectionYFromSectionIndex(arg0: number): number;
  getSectionsCount(): number;
  getServer(): j_net_minecraft_server.MinecraftServer | null;
  getSharedSpawnAngle(): number;
  getSharedSpawnPos(): j_net_minecraft_core.BlockPos;
  getSkyDarken(): number;
  getSunAngle(arg0: number): number;
  getThunderLevel(arg0: number): number;
  getTypeKey(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>;
  getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getWireHandler(): JavaOpaque<"alternate.current.wire.WireHandler">;
  getWorld(): j_org_bukkit_craftbukkit.CraftWorld;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder;
  globalLevelEvent(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  guardEntityTick<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaConsumer<T>, arg1: T): void;
  hasChunk(arg0: number, arg1: number): boolean;
  hasChunkAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  isBrightOutside(): boolean;
  readonly isClientSide: (boolean) & { (): boolean };
  isDarkOutside(): boolean;
  isDebug(): boolean;
  isFluidAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_material.FluidState>): boolean;
  isInWorldBounds(arg0: j_net_minecraft_core.BlockPos): boolean;
  isInsideBuildHeight(arg0: number): boolean;
  isLoaded(arg0: j_net_minecraft_core.BlockPos): boolean;
  isLoadedAndInBounds(arg0: j_net_minecraft_core.BlockPos): boolean;
  isMoonVisible(): boolean;
  isOutsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: j_net_minecraft_core.BlockPos): boolean;
  isRaining(): boolean;
  isRainingAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  isStateAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  isThundering(): boolean;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity): boolean;
  readonly levelData: j_net_minecraft_world_level_storage.WritableLevelData;
  loadedAndEntityCanStandOn(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.Entity): boolean;
  loadedAndEntityCanStandOnFace(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.Direction): boolean;
  mayInteract(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.BlockPos): boolean;
  moonrise$areChunksLoaded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  moonrise$getAnyChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  moonrise$getChunkData(arg0: number, arg1: number): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkData">;
  moonrise$getChunkData(arg0: bigint): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkData">;
  moonrise$getEntityLookup(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.entity.EntityLookup">;
  moonrise$getFullChunkIfLoaded(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.LevelChunk;
  moonrise$getHardCollidingEntities(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaList<j_net_minecraft_world_entity.Entity>;
  moonrise$getSpecificChunkIfLoaded(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  moonrise$midTickTasks(): void;
  moonrise$releaseChunkData(arg0: bigint): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkData">;
  moonrise$requestChunkData(arg0: bigint): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkData">;
  moonrise$setEntityLookup(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.entity.EntityLookup">): void;
  neighborChanged(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_world_level_redstone.Orientation | null): void | null;
  neighborChanged(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_world_level_redstone.Orientation | null, arg4: boolean): void | null;
  neighborShapeChanged(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number, arg5: number): void;
  readonly neighborUpdater: j_net_minecraft_world_level_redstone.NeighborUpdater;
  nextSubTickCount(): bigint;
  noCollision(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): boolean | null;
  noSave(): boolean;
  notifyAndUpdatePhysics(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_chunk.LevelChunk, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_state.BlockState, arg5: number, arg6: number): void;
  oRainLevel: number;
  oThunderLevel: number;
  onBlockEntityAdded(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  paperConfig(): JavaOpaque<"io.papermc.paper.configuration.WorldConfiguration">;
  playLocalSound(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_sounds.SoundEvent, arg4: j_net_minecraft_sounds.SoundSource, arg5: number, arg6: number, arg7: boolean): void;
  playLocalSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_sounds.SoundEvent, arg2: j_net_minecraft_sounds.SoundSource, arg3: number, arg4: number, arg5: boolean): void;
  playLocalSound(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_sounds.SoundEvent, arg2: j_net_minecraft_sounds.SoundSource, arg3: number, arg4: number): void;
  playPlayerSound(arg0: j_net_minecraft_sounds.SoundEvent, arg1: j_net_minecraft_sounds.SoundSource, arg2: number, arg3: number): void;
  playSeededSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg5: j_net_minecraft_sounds.SoundSource, arg6: number, arg7: number, arg8: bigint): void | null;
  playSeededSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_sounds.SoundEvent, arg5: j_net_minecraft_sounds.SoundSource, arg6: number, arg7: number, arg8: bigint): void | null;
  playSeededSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number, arg6: bigint): void | null;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg5: j_net_minecraft_sounds.SoundSource, arg6: number, arg7: number): void | null;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_sounds.SoundEvent, arg5: j_net_minecraft_sounds.SoundSource): void | null;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_sounds.SoundEvent, arg5: j_net_minecraft_sounds.SoundSource, arg6: number, arg7: number): void | null;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number): void | null;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number): void | null;
  populating: boolean;
  potionBrewing(): j_net_minecraft_world_item_alchemy.PotionBrewing;
  precipitationAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_biome.Biome_Precipitation;
  prepareWeather(): void;
  pvpMode: boolean;
  rainLevel: number;
  randValue: number;
  readonly random: j_net_minecraft_util.RandomSource;
  recipeAccess(): j_net_minecraft_world_item_crafting.RecipeAccess;
  redstoneUpdateInfos: JavaOpaque<"java.util.ArrayDeque", [j_net_minecraft_world_level_block.RedstoneTorchBlock_Toggle]>;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  removeBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  removeBlockEntity(arg0: j_net_minecraft_core.BlockPos): void;
  sendBlockUpdated(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: number): void;
  sendPacketToServer(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): boolean;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
  setBlockAndUpdate(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): boolean;
  setBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): void;
  setBlocksDirty(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  setRainLevel(arg0: number): void;
  setSkyFlashTime(arg0: number): void;
  setSpawnSettings(arg0: boolean): void;
  setThunderLevel(arg0: number): void;
  shouldTickBlocksAt(arg0: bigint): boolean;
  shouldTickBlocksAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  shouldTickDeath(arg0: j_net_minecraft_world_entity.Entity): boolean;
  readonly spigotConfig: JavaOpaque<"org.spigotmc.SpigotWorldConfig">;
  readonly thread: JavaOpaque<"java.lang.Thread">;
  thunderLevel: number;
  tickBlockEntities(): void;
  tickRateManager(): j_net_minecraft_world.TickRateManager;
  readonly ticksPerSpawnCategory: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2LongOpenHashMap", [JavaOpaque<"org.bukkit.entity.SpawnCategory">]>;
  updateNeighborsAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_world_level_redstone.Orientation | null): void | null;
  updateNeighborsAtExceptFromFacing(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_world_level_redstone.Orientation | null): void | null;
  updateNeighbourForOutputSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block): void;
  updatePOIOnBlockStateChange(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  updateSkyBrightness(): void;
  wakeupInactiveRemainingAnimals: number;
  wakeupInactiveRemainingFlying: number;
  wakeupInactiveRemainingMonsters: number;
  wakeupInactiveRemainingVillagers: number;
}
export type Level = LevelMembers & LevelAccessor & j_net_minecraft_world_level_entity.UUIDLookup<j_net_minecraft_world_entity.Entity> & JavaOpaque<"java.lang.AutoCloseable"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemLevel"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.world.ChunkSystemEntityGetter">;
export interface LevelStatics {
  new(arg0: j_net_minecraft_world_level_storage.WritableLevelData, arg1: j_net_minecraft_resources.ResourceKey<Level>, arg2: j_net_minecraft_core.RegistryAccess, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_dimension.DimensionType>, arg4: boolean, arg5: boolean, arg6: bigint, arg7: number, arg8: JavaOpaque<"org.bukkit.generator.ChunkGenerator"> | null, arg9: JavaOpaque<"org.bukkit.generator.BiomeProvider"> | null, arg10: JavaOpaque<"org.bukkit.World$Environment">, arg11: JavaFunction<JavaOpaque<"org.spigotmc.SpigotWorldConfig">, JavaOpaque<"io.papermc.paper.configuration.WorldConfiguration">>, arg12: JavaOpaque<"java.util.concurrent.Executor">): Level;
  readonly END: j_net_minecraft_resources.ResourceKey<Level>;
  readonly LONG_PARTICLE_CLIP_RANGE: 512;
  readonly MAX_BRIGHTNESS: 15;
  readonly MAX_ENTITY_SPAWN_Y: 20000000;
  readonly MAX_LEVEL_SIZE: 30000000;
  readonly MIN_ENTITY_SPAWN_Y: -20000000;
  readonly NETHER: j_net_minecraft_resources.ResourceKey<Level>;
  readonly OVERWORLD: j_net_minecraft_resources.ResourceKey<Level>;
  readonly RESOURCE_KEY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_resources.ResourceKey<Level>]>;
  readonly SHORT_PARTICLE_CLIP_RANGE: 32;
  readonly TICKS_PER_DAY: 24000;
  isInSpawnableBounds(arg0: j_net_minecraft_core.BlockPos): boolean;
  readonly lastPhysicsProblem: j_net_minecraft_core.BlockPos | null;
}

/** Live JVM enum net.minecraft.world.level.Level$ExplosionInteraction; constants are host handles, not strings. */
export type Level_ExplosionInteraction = JavaEnum<"net.minecraft.world.level.Level$ExplosionInteraction", "BLOCK" | "MOB" | "NONE" | "STANDARD" | "TNT" | "TRIGGER"> & Level_ExplosionInteractionMembers;
export interface Level_ExplosionInteractionMembers {
  getSerializedName(): string;
}
export interface Level_ExplosionInteractionStatics {
  readonly BLOCK: Level_ExplosionInteraction;
  readonly MOB: Level_ExplosionInteraction;
  readonly NONE: Level_ExplosionInteraction;
  readonly STANDARD: Level_ExplosionInteraction;
  readonly TNT: Level_ExplosionInteraction;
  readonly TRIGGER: Level_ExplosionInteraction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Level_ExplosionInteraction]>;
  valueOf(arg0: string): Level_ExplosionInteraction;
  values(): Array<Level_ExplosionInteraction>;
}

/** JVM interface net.minecraft.world.level.LevelAccessor. */
export interface LevelAccessorMembers {
  readonly __javaSupertypes?: readonly [CommonLevelAccessor, LevelTimeAccess, ScheduledTickAccess];
  addParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  createTick<T>(arg0: j_net_minecraft_core.BlockPos, arg1: T, arg2: number): j_net_minecraft_world_ticks.ScheduledTick<T>;
  createTick<T>(arg0: j_net_minecraft_core.BlockPos, arg1: T, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): j_net_minecraft_world_ticks.ScheduledTick<T>;
  dayTime(): bigint;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gameEvent(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gameEvent(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_core.BlockPos): void | null;
  gameEvent(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_world_phys.Vec3): void | null;
  getChunkSource(): j_net_minecraft_world_level_chunk.ChunkSource;
  getCurrentDifficultyAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world.DifficultyInstance;
  getDifficulty(): j_net_minecraft_world.Difficulty;
  getLevelData(): j_net_minecraft_world_level_storage.LevelData;
  getMinecraftWorld(): j_net_minecraft_server_level.ServerLevel;
  getRandom(): j_net_minecraft_util.RandomSource;
  getServer(): j_net_minecraft_server.MinecraftServer | null;
  hasChunk(arg0: number, arg1: number): boolean;
  levelEvent(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  levelEvent(arg0: j_net_minecraft_world_entity.Entity | null, arg1: number, arg2: j_net_minecraft_core.BlockPos, arg3: number): void | null;
  neighborShapeChanged(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number, arg5: number): void;
  nextSubTickCount(): bigint;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource): void | null;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number): void | null;
  updateNeighborsAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block): void;
}
export type LevelAccessor = LevelAccessorMembers & CommonLevelAccessor & LevelTimeAccess & ScheduledTickAccess;
export interface LevelAccessorStatics {
}

/** JVM interface net.minecraft.world.level.LevelHeightAccessor. */
export interface LevelHeightAccessorMembers {
  getHeight(): number;
  getMaxSectionY(): number;
  getMaxY(): number;
  getMinSectionY(): number;
  getMinY(): number;
  getSectionIndex(arg0: number): number;
  getSectionIndexFromSectionY(arg0: number): number;
  getSectionYFromSectionIndex(arg0: number): number;
  getSectionsCount(): number;
  isInsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: j_net_minecraft_core.BlockPos): boolean;
}
export type LevelHeightAccessor = LevelHeightAccessorMembers;
export interface LevelHeightAccessorStatics {
  create(arg0: number, arg1: number): LevelHeightAccessor;
}

/** JVM interface net.minecraft.world.level.LevelReader. */
export interface LevelReaderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemLevelReader">, BlockAndTintGetter, CollisionGetter, SignalGetter, j_net_minecraft_world_level_biome.BiomeManager_NoiseBiomeSource];
  canSeeSkyFromBelowWater(arg0: j_net_minecraft_core.BlockPos): boolean;
  containsAnyLiquid(arg0: j_net_minecraft_world_phys.AABB): boolean;
  dimensionType(): j_net_minecraft_world_level_dimension.DimensionType;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  getBiome(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getBiomeManager(): j_net_minecraft_world_level_biome.BiomeManager;
  getBlockStatesIfLoaded(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_block_state.BlockState]>;
  getBlockTint(arg0: j_net_minecraft_core.BlockPos, arg1: ColorResolver): number;
  getChunk(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunk(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunkForCollisions(arg0: number, arg1: number): BlockGetter | null;
  getChunkIfLoadedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkIfLoadedImmediately(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getHeight(): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): number;
  getHeightmapPos(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getLightLevelDependentMagicValue(arg0: j_net_minecraft_core.BlockPos): number;
  getMaxLocalRawBrightness(arg0: j_net_minecraft_core.BlockPos): number;
  getMaxLocalRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getMinY(): number;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getPathfindingCostFromLightLevels(arg0: j_net_minecraft_core.BlockPos): number;
  getSeaLevel(): number;
  getSkyDarken(): number;
  getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  hasChunk(arg0: number, arg1: number): boolean;
  hasChunkAt(arg0: number, arg1: number): boolean;
  hasChunkAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
  hasChunksAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos): boolean;
  holderLookup<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_core.HolderLookup<T>;
  isClientSide(): boolean;
  isEmptyBlock(arg0: j_net_minecraft_core.BlockPos): boolean;
  isWaterAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  moonrise$syncLoadNonFull(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
}
export type LevelReader = LevelReaderMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.ChunkSystemLevelReader"> & BlockAndTintGetter & CollisionGetter & SignalGetter & j_net_minecraft_world_level_biome.BiomeManager_NoiseBiomeSource;
export interface LevelReaderStatics {
}

/** JVM class net.minecraft.world.level.LevelSettings. */
export interface LevelSettingsMembers {
  allowCommands(): boolean;
  copy(): LevelSettings;
  difficulty(): j_net_minecraft_world.Difficulty;
  gameRules(): GameRules;
  gameType(): GameType;
  getDataConfiguration(): WorldDataConfiguration;
  hardcore: (boolean) & { (): boolean };
  levelName: (string) & { (): string };
  withDataConfiguration(arg0: WorldDataConfiguration): LevelSettings;
  withDifficulty(arg0: j_net_minecraft_world.Difficulty): LevelSettings;
  withGameType(arg0: GameType): LevelSettings;
}
export type LevelSettings = LevelSettingsMembers;
export interface LevelSettingsStatics {
  new(arg0: string, arg1: GameType, arg2: boolean, arg3: j_net_minecraft_world.Difficulty, arg4: boolean, arg5: GameRules, arg6: WorldDataConfiguration): LevelSettings;
  parse(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: WorldDataConfiguration): LevelSettings;
}

/** JVM interface net.minecraft.world.level.LevelSimulatedReader. */
export interface LevelSimulatedReaderMembers {
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getHeightmapPos(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  isFluidAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_material.FluidState>): boolean;
  isStateAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
}
export type LevelSimulatedReader = LevelSimulatedReaderMembers;
export interface LevelSimulatedReaderStatics {
}

/** JVM interface net.minecraft.world.level.LevelSimulatedRW. */
export interface LevelSimulatedRWMembers {
  readonly __javaSupertypes?: readonly [LevelSimulatedReader, LevelWriter];
}
export type LevelSimulatedRW = LevelSimulatedRWMembers & LevelSimulatedReader & LevelWriter;
export interface LevelSimulatedRWStatics {
}

/** JVM interface net.minecraft.world.level.LevelTimeAccess. */
export interface LevelTimeAccessMembers {
  readonly __javaSupertypes?: readonly [LevelReader];
  dayTime(): bigint;
  getMoonBrightness(): number;
  getMoonPhase(): number;
  getTimeOfDay(arg0: number): number;
}
export type LevelTimeAccess = LevelTimeAccessMembers & LevelReader;
export interface LevelTimeAccessStatics {
}

/** JVM interface net.minecraft.world.level.LevelWriter. */
export interface LevelWriterMembers {
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): boolean | null;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity | null): boolean | null;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): boolean | null;
  removeBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): boolean;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
}
export type LevelWriter = LevelWriterMembers;
export interface LevelWriterStatics {
}

/** Live JVM enum net.minecraft.world.level.LightLayer; constants are host handles, not strings. */
export type LightLayer = JavaEnum<"net.minecraft.world.level.LightLayer", "BLOCK" | "SKY"> & LightLayerMembers;
export interface LightLayerMembers {
}
export interface LightLayerStatics {
  readonly BLOCK: LightLayer;
  readonly SKY: LightLayer;
  valueOf(arg0: string): LightLayer;
  values(): Array<LightLayer>;
}

/** JVM class net.minecraft.world.level.LocalMobCapCalculator. */
export interface LocalMobCapCalculatorMembers {
  addMob(arg0: ChunkPos, arg1: j_net_minecraft_world_entity.MobCategory): void;
  canSpawn(arg0: j_net_minecraft_world_entity.MobCategory, arg1: ChunkPos): boolean;
}
export type LocalMobCapCalculator = LocalMobCapCalculatorMembers;
export interface LocalMobCapCalculatorStatics {
  new(arg0: j_net_minecraft_server_level.ChunkMap): LocalMobCapCalculator;
}

/** JVM class net.minecraft.world.level.NaturalSpawner. */
export interface NaturalSpawnerMembers {
}
export type NaturalSpawner = NaturalSpawnerMembers;
export interface NaturalSpawnerStatics {
  readonly INSCRIBED_SQUARE_SPAWN_DISTANCE_CHUNK: number;
  readonly SPAWNING_CATEGORIES: Array<j_net_minecraft_world_entity.MobCategory>;
  readonly SPAWN_DISTANCE_BLOCK: 128;
  readonly SPAWN_DISTANCE_CHUNK: 8;
  createState(arg0: number, arg1: Iterable<j_net_minecraft_world_entity.Entity>, arg2: NaturalSpawner_ChunkGetter, arg3: LocalMobCapCalculator): NaturalSpawner_SpawnState;
  createState(arg0: number, arg1: Iterable<j_net_minecraft_world_entity.Entity>, arg2: NaturalSpawner_ChunkGetter, arg3: LocalMobCapCalculator, arg4: boolean): NaturalSpawner_SpawnState;
  getFilteredSpawningCategories(arg0: NaturalSpawner_SpawnState, arg1: boolean, arg2: boolean, arg3: boolean, arg4: j_net_minecraft_server_level.ServerLevel): JavaList<j_net_minecraft_world_entity.MobCategory>;
  globalLimitForCategory(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.MobCategory, arg2: number): number;
  isInNetherFortressBounds(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.MobCategory, arg3: StructureManager): boolean;
  isValidEmptySpawnBlock(arg0: BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState, arg4: j_net_minecraft_world_entity.EntityType<object>): boolean;
  spawnCategoryForChunk(arg0: j_net_minecraft_world_entity.MobCategory, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_level_chunk.LevelChunk, arg3: NaturalSpawner_SpawnPredicate, arg4: NaturalSpawner_AfterSpawnCallback): void;
  spawnCategoryForChunk(arg0: j_net_minecraft_world_entity.MobCategory, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_level_chunk.LevelChunk, arg3: NaturalSpawner_SpawnPredicate, arg4: NaturalSpawner_AfterSpawnCallback, arg5: number, arg6: JavaConsumer<j_net_minecraft_world_entity.Entity>): void;
  spawnCategoryForPosition(arg0: j_net_minecraft_world_entity.MobCategory, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos): void;
  spawnCategoryForPosition(arg0: j_net_minecraft_world_entity.MobCategory, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: j_net_minecraft_core.BlockPos, arg4: NaturalSpawner_SpawnPredicate, arg5: NaturalSpawner_AfterSpawnCallback): void;
  spawnCategoryForPosition(arg0: j_net_minecraft_world_entity.MobCategory, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_level_chunk.ChunkAccess, arg3: j_net_minecraft_core.BlockPos, arg4: NaturalSpawner_SpawnPredicate, arg5: NaturalSpawner_AfterSpawnCallback, arg6: number, arg7: JavaConsumer<j_net_minecraft_world_entity.Entity> | null): void | null;
  spawnForChunk(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_chunk.LevelChunk, arg2: NaturalSpawner_SpawnState, arg3: JavaList<j_net_minecraft_world_entity.MobCategory>): void;
  spawnMobsForChunkGeneration(arg0: ServerLevelAccessor, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, arg2: ChunkPos, arg3: j_net_minecraft_util.RandomSource): void;
}

/** JVM interface net.minecraft.world.level.NaturalSpawner$AfterSpawnCallback. */
export interface NaturalSpawner_AfterSpawnCallbackMembers {
  run(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level_chunk.ChunkAccess): void;
}
export type NaturalSpawner_AfterSpawnCallback = NaturalSpawner_AfterSpawnCallbackMembers;
export interface NaturalSpawner_AfterSpawnCallbackStatics {
}

/** JVM interface net.minecraft.world.level.NaturalSpawner$ChunkGetter. */
export interface NaturalSpawner_ChunkGetterMembers {
  query(arg0: bigint, arg1: JavaConsumer<j_net_minecraft_world_level_chunk.LevelChunk>): void;
}
export type NaturalSpawner_ChunkGetter = NaturalSpawner_ChunkGetterMembers;
export interface NaturalSpawner_ChunkGetterStatics {
}

/** JVM interface net.minecraft.world.level.NaturalSpawner$SpawnPredicate. */
export interface NaturalSpawner_SpawnPredicateMembers {
  test(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_chunk.ChunkAccess): boolean;
}
export type NaturalSpawner_SpawnPredicate = NaturalSpawner_SpawnPredicateMembers;
export interface NaturalSpawner_SpawnPredicateStatics {
}

/** JVM class net.minecraft.world.level.NaturalSpawner$SpawnState. */
export interface NaturalSpawner_SpawnStateMembers {
  getMobCategoryCounts(): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [j_net_minecraft_world_entity.MobCategory]>;
  getSpawnableChunkCount(): number;
}
export type NaturalSpawner_SpawnState = NaturalSpawner_SpawnStateMembers;
export interface NaturalSpawner_SpawnStateStatics {
}

/** JVM class net.minecraft.world.level.NoiseColumn. */
export interface NoiseColumnMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_chunk.BlockColumn];
  getBlock(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
  setBlock(arg0: number, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type NoiseColumn = NoiseColumnMembers & j_net_minecraft_world_level_chunk.BlockColumn;
export interface NoiseColumnStatics {
  new(arg0: number, arg1: Array<j_net_minecraft_world_level_block_state.BlockState>): NoiseColumn;
}

/** JVM class net.minecraft.world.level.PathNavigationRegion. */
export interface PathNavigationRegionMembers {
  readonly __javaSupertypes?: readonly [CollisionGetter];
  allEmpty: boolean;
  readonly centerX: number;
  readonly centerZ: number;
  readonly chunks: Array<Array<j_net_minecraft_world_level_chunk.ChunkAccess>>;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getChunkForCollisions(arg0: number, arg1: number): BlockGetter;
  getEntityCollisions(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_phys_shapes.VoxelShape> | null;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getHeight(): number;
  getMinY(): number;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder;
  readonly level: Level;
}
export type PathNavigationRegion = PathNavigationRegionMembers & CollisionGetter;
export interface PathNavigationRegionStatics {
  new(arg0: Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos): PathNavigationRegion;
}

/** JVM class net.minecraft.world.level.PotentialCalculator. */
export interface PotentialCalculatorMembers {
  addCharge(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  getPotentialEnergyChange(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
}
export type PotentialCalculator = PotentialCalculatorMembers;
export interface PotentialCalculatorStatics {
  new(): PotentialCalculator;
}

/** JVM interface net.minecraft.world.level.ScheduledTickAccess. */
export interface ScheduledTickAccessMembers {
  createTick<T>(arg0: j_net_minecraft_core.BlockPos, arg1: T, arg2: number): j_net_minecraft_world_ticks.ScheduledTick<T>;
  createTick<T>(arg0: j_net_minecraft_core.BlockPos, arg1: T, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): j_net_minecraft_world_ticks.ScheduledTick<T>;
  getBlockTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_block.Block>;
  getFluidTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_material.Fluid>;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_material.Fluid, arg2: number): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_material.Fluid, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): void;
}
export type ScheduledTickAccess = ScheduledTickAccessMembers;
export interface ScheduledTickAccessStatics {
}

/** JVM class net.minecraft.world.level.ServerExplosion. */
export interface ServerExplosionMembers {
  readonly __javaSupertypes?: readonly [Explosion];
  canTriggerBlocks(): boolean;
  center(): j_net_minecraft_world_phys.Vec3;
  excludeSourceFromDamage: boolean;
  explode(): void;
  getBlockInteraction(): Explosion_BlockInteraction;
  getDamageSource(): j_net_minecraft_world_damagesource.DamageSource;
  getDirectSourceEntity(): j_net_minecraft_world_entity.Entity | null;
  getHitPlayers(): JavaMap<j_net_minecraft_world_entity_player.Player, j_net_minecraft_world_phys.Vec3>;
  getIndirectSourceEntity(): j_net_minecraft_world_entity.LivingEntity | null;
  isSmall(): boolean;
  level(): j_net_minecraft_server_level.ServerLevel;
  radius(): number;
  shouldAffectBlocklikeEntities(): boolean;
  wasCanceled: boolean;
  yield: number;
}
export type ServerExplosion = ServerExplosionMembers & Explosion;
export interface ServerExplosionStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_damagesource.DamageSource | null, arg3: ExplosionDamageCalculator | null, arg4: j_net_minecraft_world_phys.Vec3, arg5: number, arg6: boolean, arg7: Explosion_BlockInteraction): ServerExplosion;
  getSeenPercent(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_entity.Entity): number;
}

/** JVM interface net.minecraft.world.level.ServerLevelAccessor. */
export interface ServerLevelAccessorMembers {
  readonly __javaSupertypes?: readonly [LevelAccessor];
  addFreshEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity): void;
  addFreshEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getMinecraftWorld(): j_net_minecraft_server_level.ServerLevel;
}
export type ServerLevelAccessor = ServerLevelAccessorMembers & LevelAccessor;
export interface ServerLevelAccessorStatics {
}

/** JVM interface net.minecraft.world.level.SignalGetter. */
export interface SignalGetterMembers {
  readonly __javaSupertypes?: readonly [BlockGetter];
  getBestNeighborSignal(arg0: j_net_minecraft_core.BlockPos): number;
  getControlInputSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: boolean): number;
  getDirectSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): number;
  getDirectSignalTo(arg0: j_net_minecraft_core.BlockPos): number;
  getSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): number;
  hasNeighborSignal(arg0: j_net_minecraft_core.BlockPos): boolean;
  hasSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): boolean;
}
export type SignalGetter = SignalGetterMembers & BlockGetter;
export interface SignalGetterStatics {
  readonly DIRECTIONS: Array<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.SimpleExplosionDamageCalculator. */
export interface SimpleExplosionDamageCalculatorMembers {
  readonly __javaSupertypes?: readonly [ExplosionDamageCalculator];
  getBlockExplosionResistance(arg0: Explosion, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.FluidState): JavaOptional<number>;
  getKnockbackMultiplier(arg0: j_net_minecraft_world_entity.Entity): number;
  shouldBlockExplode(arg0: Explosion, arg1: BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number): boolean;
  shouldDamageEntity(arg0: Explosion, arg1: j_net_minecraft_world_entity.Entity): boolean;
}
export type SimpleExplosionDamageCalculator = SimpleExplosionDamageCalculatorMembers & ExplosionDamageCalculator;
export interface SimpleExplosionDamageCalculatorStatics {
  new(arg0: boolean, arg1: boolean, arg2: JavaOptional<number>, arg3: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>>): SimpleExplosionDamageCalculator;
}

/** JVM record net.minecraft.world.level.SpawnData. */
export interface SpawnDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  customSpawnRules(): JavaOptional<SpawnData_CustomSpawnRules>;
  entityToSpawn(): j_net_minecraft_nbt.CompoundTag;
  equals(arg0: object): boolean;
  equipment(): JavaOptional<j_net_minecraft_world_entity.EquipmentTable>;
  getCustomSpawnRules(): JavaOptional<SpawnData_CustomSpawnRules>;
  getEntityToSpawn(): j_net_minecraft_nbt.CompoundTag;
  getEquipment(): JavaOptional<j_net_minecraft_world_entity.EquipmentTable>;
  hashCode(): number;
  toString(): string;
}
export type SpawnData = SpawnDataMembers & JavaOpaque<"java.lang.Record">;
export interface SpawnDataStatics {
  new(): SpawnData;
  new(arg0: j_net_minecraft_nbt.CompoundTag, arg1: JavaOptional<SpawnData_CustomSpawnRules>, arg2: JavaOptional<j_net_minecraft_world_entity.EquipmentTable>): SpawnData;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpawnData]>;
  readonly ENTITY_TAG: "entity";
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_util_random.WeightedList<SpawnData>]>;
}

/** JVM record net.minecraft.world.level.SpawnData$CustomSpawnRules. */
export interface SpawnData_CustomSpawnRulesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blockLightLimit(): j_net_minecraft_util.InclusiveRange<number>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isValidPosition(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_server_level.ServerLevel): boolean;
  skyLightLimit(): j_net_minecraft_util.InclusiveRange<number>;
  toString(): string;
}
export type SpawnData_CustomSpawnRules = SpawnData_CustomSpawnRulesMembers & JavaOpaque<"java.lang.Record">;
export interface SpawnData_CustomSpawnRulesStatics {
  new(arg0: j_net_minecraft_util.InclusiveRange<number>, arg1: j_net_minecraft_util.InclusiveRange<number>): SpawnData_CustomSpawnRules;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SpawnData_CustomSpawnRules]>;
}

/** JVM interface net.minecraft.world.level.Spawner. */
export interface SpawnerMembers {
  setEntityId(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_util.RandomSource): void;
}
export type Spawner = SpawnerMembers;
export interface SpawnerStatics {
  appendHoverText(arg0: j_net_minecraft_world_item_component.CustomData, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: string): void;
  getSpawnEntityDisplayName(arg0: j_net_minecraft_world_item_component.CustomData, arg1: string): j_net_minecraft_network_chat.Component | null;
}

/** JVM class net.minecraft.world.level.StructureManager. */
export interface StructureManagerMembers {
  addReference(arg0: j_net_minecraft_world_level_levelgen_structure.StructureStart): void;
  addReferenceForStructure(arg0: j_net_minecraft_core.SectionPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure, arg2: bigint, arg3: j_net_minecraft_world_level_chunk.StructureAccess): void;
  checkStructurePresence(arg0: ChunkPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure, arg2: j_net_minecraft_world_level_levelgen_structure_placement.StructurePlacement, arg3: boolean): j_net_minecraft_world_level_levelgen_structure.StructureCheckResult;
  fillStartsForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.Structure, arg1: JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">, arg2: JavaConsumer<j_net_minecraft_world_level_levelgen_structure.StructureStart>): void;
  forWorldGenRegion(arg0: j_net_minecraft_server_level.WorldGenRegion): StructureManager;
  getAllStructuresAt(arg0: j_net_minecraft_core.BlockPos): JavaMap<j_net_minecraft_world_level_levelgen_structure.Structure, JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">>;
  getStartForStructure(arg0: j_net_minecraft_core.SectionPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure, arg2: j_net_minecraft_world_level_chunk.StructureAccess): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  getStructureAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure): j_net_minecraft_world_level_levelgen_structure.StructureStart;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>>): j_net_minecraft_world_level_levelgen_structure.StructureStart;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>>, arg2: ServerLevelAccessor | null): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>): j_net_minecraft_world_level_levelgen_structure.StructureStart;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.Structure>, arg2: ServerLevelAccessor | null): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>): j_net_minecraft_world_level_levelgen_structure.StructureStart;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>, arg2: ServerLevelAccessor | null): j_net_minecraft_world_level_levelgen_structure.StructureStart | null;
  getStructureWithPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure): j_net_minecraft_world_level_levelgen_structure.StructureStart;
  hasAnyStructureAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  readonly level: LevelAccessor;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  setStartForStructure(arg0: j_net_minecraft_core.SectionPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure, arg2: j_net_minecraft_world_level_levelgen_structure.StructureStart, arg3: j_net_minecraft_world_level_chunk.StructureAccess): void;
  shouldGenerateStructures(): boolean;
  startsForStructure(arg0: j_net_minecraft_core.SectionPos, arg1: j_net_minecraft_world_level_levelgen_structure.Structure): JavaList<j_net_minecraft_world_level_levelgen_structure.StructureStart>;
  startsForStructure(arg0: ChunkPos, arg1: JavaPredicate<j_net_minecraft_world_level_levelgen_structure.Structure>): JavaList<j_net_minecraft_world_level_levelgen_structure.StructureStart>;
  startsForStructure(arg0: ChunkPos, arg1: JavaPredicate<j_net_minecraft_world_level_levelgen_structure.Structure>, arg2: ServerLevelAccessor | null): JavaList<j_net_minecraft_world_level_levelgen_structure.StructureStart> | null;
  structureHasPieceAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_levelgen_structure.StructureStart): boolean;
}
export type StructureManager = StructureManagerMembers;
export interface StructureManagerStatics {
  new(arg0: LevelAccessor, arg1: j_net_minecraft_world_level_levelgen.WorldOptions, arg2: j_net_minecraft_world_level_levelgen_structure.StructureCheck_2): StructureManager;
}

/** JVM class net.minecraft.world.level.TicketStorage. */
export interface TicketStorageMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticket.ChunkSystemTicketStorage">];
  activateAllDeactivatedTickets(): void;
  addPluginRegionTicket(arg0: ChunkPos, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): boolean;
  addTicket(arg0: bigint, arg1: j_net_minecraft_server_level.Ticket): boolean;
  addTicket(arg0: j_net_minecraft_server_level.Ticket, arg1: ChunkPos): void;
  addTicketWithRadius(arg0: j_net_minecraft_server_level.TicketType, arg1: ChunkPos, arg2: number): void;
  deactivateTicketsOnClosing(): void;
  getForceLoadedChunks(): JavaOpaque<"it.unimi.dsi.fastutil.longs.LongSet">;
  getTicketDebugString(arg0: bigint, arg1: boolean): string;
  getTicketLevelAt(arg0: bigint, arg1: boolean): number;
  getTickets(arg0: bigint): JavaList<j_net_minecraft_server_level.Ticket>;
  hasTickets(): boolean;
  moonrise$getChunkMap(): j_net_minecraft_server_level.ChunkMap;
  moonrise$setChunkMap(arg0: j_net_minecraft_server_level.ChunkMap): void;
  purgeStaleTickets(arg0: j_net_minecraft_server_level.ChunkMap): void;
  removeAllPluginRegionTickets(arg0: j_net_minecraft_server_level.TicketType, arg1: number, arg2: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  removePluginRegionTicket(arg0: ChunkPos, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): boolean;
  removeTicket(arg0: bigint, arg1: j_net_minecraft_server_level.Ticket): boolean;
  removeTicket(arg0: j_net_minecraft_server_level.Ticket, arg1: ChunkPos): void;
  removeTicketIf(arg0: JavaOpaque<"java.util.function.BiPredicate", [bigint, j_net_minecraft_server_level.Ticket]>, arg1: JavaOpaque<"it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap", [JavaList<j_net_minecraft_server_level.Ticket>]> | null): void | null;
  removeTicketWithRadius(arg0: j_net_minecraft_server_level.TicketType, arg1: ChunkPos, arg2: number): void;
  replaceTicketLevelOfType(arg0: number, arg1: j_net_minecraft_server_level.TicketType): void;
  setLoadingChunkUpdatedListener(arg0: TicketStorage_ChunkUpdated | null): void | null;
  setSimulationChunkUpdatedListener(arg0: TicketStorage_ChunkUpdated | null): void | null;
  updateChunkForced(arg0: ChunkPos, arg1: boolean): boolean;
}
export type TicketStorage = TicketStorageMembers & j_net_minecraft_world_level_saveddata.SavedData & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticket.ChunkSystemTicketStorage">;
export interface TicketStorageStatics {
  new(): TicketStorage;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TicketStorage]>;
  readonly TYPE: j_net_minecraft_world_level_saveddata.SavedDataType<TicketStorage>;
}

/** JVM interface net.minecraft.world.level.TicketStorage$ChunkUpdated. */
export interface TicketStorage_ChunkUpdatedMembers {
  update(arg0: bigint, arg1: number, arg2: boolean): void;
}
export type TicketStorage_ChunkUpdated = TicketStorage_ChunkUpdatedMembers;
export interface TicketStorage_ChunkUpdatedStatics {
}

/** JVM record net.minecraft.world.level.WorldDataConfiguration. */
export interface WorldDataConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dataPacks(): DataPackConfig;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  equals(arg0: object): boolean;
  expandFeatures(arg0: j_net_minecraft_world_flag.FeatureFlagSet): WorldDataConfiguration;
  hashCode(): number;
  toString(): string;
}
export type WorldDataConfiguration = WorldDataConfigurationMembers & JavaOpaque<"java.lang.Record">;
export interface WorldDataConfigurationStatics {
  new(arg0: DataPackConfig, arg1: j_net_minecraft_world_flag.FeatureFlagSet): WorldDataConfiguration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WorldDataConfiguration]>;
  readonly DEFAULT: WorldDataConfiguration;
  readonly ENABLED_FEATURES_ID: "enabled_features";
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WorldDataConfiguration]>;
}

/** JVM interface net.minecraft.world.level.WorldGenLevel. */
export interface WorldGenLevelMembers {
  readonly __javaSupertypes?: readonly [ServerLevelAccessor];
  ensureCanWrite(arg0: j_net_minecraft_core.BlockPos): boolean;
  getSeed(): bigint;
  setCurrentlyGenerating(arg0: JavaSupplier<string> | null): void | null;
}
export type WorldGenLevel = WorldGenLevelMembers & ServerLevelAccessor;
export interface WorldGenLevelStatics {
}
