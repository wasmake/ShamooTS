// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** JVM class net.minecraft.world.ticks.BlackholeTickAccess. */
export interface BlackholeTickAccessMembers {
}
export type BlackholeTickAccess = BlackholeTickAccessMembers;
export interface BlackholeTickAccessStatics {
  new(): BlackholeTickAccess;
  emptyContainer<T>(): TickContainerAccess<T>;
  emptyLevelList<T>(): LevelTickAccess<T>;
}

/** JVM interface net.minecraft.world.ticks.ContainerSingleItem. */
export interface ContainerSingleItemMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container];
  clearContent(): void;
  getContainerSize(): number;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getTheItem(): j_net_minecraft_world_item.ItemStack;
  isEmpty(): boolean;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  removeTheItem(): j_net_minecraft_world_item.ItemStack;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setTheItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  splitTheItem(arg0: number): j_net_minecraft_world_item.ItemStack;
}
export type ContainerSingleItem = ContainerSingleItemMembers & j_net_minecraft_world.Container;
export interface ContainerSingleItemStatics {
}

/** JVM interface net.minecraft.world.ticks.ContainerSingleItem$BlockContainerSingleItem. */
export interface ContainerSingleItem_BlockContainerSingleItemMembers {
  readonly __javaSupertypes?: readonly [ContainerSingleItem];
  getContainerBlockEntity(): j_net_minecraft_world_level_block_entity.BlockEntity;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ContainerSingleItem_BlockContainerSingleItem = ContainerSingleItem_BlockContainerSingleItemMembers & ContainerSingleItem;
export interface ContainerSingleItem_BlockContainerSingleItemStatics {
}

/** JVM class net.minecraft.world.ticks.LevelChunkTicks. */
export interface LevelChunkTicksMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [SerializableTickContainer<T>, TickContainerAccess<T>, JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticks.ChunkSystemLevelChunkTicks">];
  count(): number;
  getAll(): JavaOpaque<"java.util.stream.Stream", [ScheduledTick<T>]>;
  hasScheduledTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
  moonrise$clearDirty(): void;
  moonrise$isDirty(arg0: bigint): boolean;
  pack(arg0: bigint): JavaList<SavedTick<T>>;
  peek(): ScheduledTick<T> | null;
  poll(): ScheduledTick<T> | null;
  removeIf(arg0: JavaPredicate<ScheduledTick<T>>): void;
  schedule(arg0: ScheduledTick<T>): void;
  setOnTickAdded(arg0: JavaBiConsumer<LevelChunkTicks<T>, ScheduledTick<T>> | null): void;
  unpack(arg0: bigint): void;
}
export type LevelChunkTicks<T = unknown> = LevelChunkTicksMembers<T> & SerializableTickContainer<T> & TickContainerAccess<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.ticks.ChunkSystemLevelChunkTicks">;
export interface LevelChunkTicksStatics {
  new<T>(): LevelChunkTicks<T>;
  new<T>(arg0: JavaList<SavedTick<T>>): LevelChunkTicks<T>;
}

/** JVM interface net.minecraft.world.ticks.LevelTickAccess. */
export interface LevelTickAccessMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [TickAccess<T>];
  willTickThisTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
}
export type LevelTickAccess<T = unknown> = LevelTickAccessMembers<T> & TickAccess<T>;
export interface LevelTickAccessStatics {
}

/** JVM class net.minecraft.world.ticks.LevelTicks. */
export interface LevelTicksMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [LevelTickAccess<T>];
  addContainer(arg0: j_net_minecraft_world_level.ChunkPos, arg1: LevelChunkTicks<T>): void;
  clearArea(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox): void;
  copyArea(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg1: j_net_minecraft_core.Vec3i): void;
  copyAreaFrom(arg0: LevelTicks<T>, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: j_net_minecraft_core.Vec3i): void;
  count(): number;
  hasScheduledTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
  removeContainer(arg0: j_net_minecraft_world_level.ChunkPos): void;
  schedule(arg0: ScheduledTick<T>): void;
  tick(arg0: bigint, arg1: number, arg2: JavaBiConsumer<j_net_minecraft_core.BlockPos, T>): void;
  willTickThisTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
}
export type LevelTicks<T = unknown> = LevelTicksMembers<T> & LevelTickAccess<T>;
export interface LevelTicksStatics {
  new<T>(arg0: JavaOpaque<"java.util.function.LongPredicate">): LevelTicks<T>;
}

/** JVM class net.minecraft.world.ticks.ProtoChunkTicks. */
export interface ProtoChunkTicksMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [SerializableTickContainer<T>, TickContainerAccess<T>];
  count(): number;
  hasScheduledTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
  pack(arg0: bigint): JavaList<SavedTick<T>>;
  schedule(arg0: ScheduledTick<T>): void;
  scheduledTicks(): JavaList<SavedTick<T>>;
}
export type ProtoChunkTicks<T = unknown> = ProtoChunkTicksMembers<T> & SerializableTickContainer<T> & TickContainerAccess<T>;
export interface ProtoChunkTicksStatics {
  new<T>(): ProtoChunkTicks<T>;
  load<T>(arg0: JavaList<SavedTick<T>>): ProtoChunkTicks<T>;
}

/** JVM record net.minecraft.world.ticks.SavedTick. */
export interface SavedTickMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  delay(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  priority(): TickPriority;
  toString(): string;
  type(): T;
  unpack(arg0: bigint, arg1: bigint): ScheduledTick<T>;
}
export type SavedTick<T = unknown> = SavedTickMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SavedTickStatics {
  new<T>(arg0: T, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: TickPriority): SavedTick<T>;
  readonly UNIQUE_TICK_HASH: JavaOpaque<"it.unimi.dsi.fastutil.Hash$Strategy", [SavedTick<object>]>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [SavedTick<T>]>;
  filterTickListForChunk<T>(arg0: JavaList<SavedTick<T>>, arg1: j_net_minecraft_world_level.ChunkPos): JavaList<SavedTick<T>>;
  probe<T>(arg0: T, arg1: j_net_minecraft_core.BlockPos): SavedTick<T>;
}

/** JVM record net.minecraft.world.ticks.ScheduledTick. */
export interface ScheduledTickMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  priority(): TickPriority;
  subTickOrder(): bigint;
  toSavedTick(arg0: bigint): SavedTick<T>;
  toString(): string;
  triggerTick(): bigint;
  type(): T;
}
export type ScheduledTick<T = unknown> = ScheduledTickMembers<T> & JavaOpaque<"java.lang.Record">;
export interface ScheduledTickStatics {
  new<T>(arg0: T, arg1: j_net_minecraft_core.BlockPos, arg2: bigint, arg3: bigint): ScheduledTick<T>;
  new<T>(arg0: T, arg1: j_net_minecraft_core.BlockPos, arg2: bigint, arg3: TickPriority, arg4: bigint): ScheduledTick<T>;
  readonly DRAIN_ORDER: JavaOpaque<"java.util.Comparator", [ScheduledTick<object>]>;
  readonly INTRA_TICK_DRAIN_ORDER: JavaOpaque<"java.util.Comparator", [ScheduledTick<object>]>;
  readonly UNIQUE_TICK_HASH: JavaOpaque<"it.unimi.dsi.fastutil.Hash$Strategy", [ScheduledTick<object>]>;
  probe<T>(arg0: T, arg1: j_net_minecraft_core.BlockPos): ScheduledTick<T>;
}

/** JVM interface net.minecraft.world.ticks.SerializableTickContainer. */
export interface SerializableTickContainerMembers<T = unknown> {
  pack(arg0: bigint): JavaList<SavedTick<T>>;
}
export type SerializableTickContainer<T = unknown> = SerializableTickContainerMembers<T>;
export interface SerializableTickContainerStatics {
}

/** JVM interface net.minecraft.world.ticks.TickAccess. */
export interface TickAccessMembers<T = unknown> {
  count(): number;
  hasScheduledTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
  schedule(arg0: ScheduledTick<T>): void;
}
export type TickAccess<T = unknown> = TickAccessMembers<T>;
export interface TickAccessStatics {
}

/** JVM interface net.minecraft.world.ticks.TickContainerAccess. */
export interface TickContainerAccessMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [TickAccess<T>];
}
export type TickContainerAccess<T = unknown> = TickContainerAccessMembers<T> & TickAccess<T>;
export interface TickContainerAccessStatics {
}

/** Live JVM enum net.minecraft.world.ticks.TickPriority; constants are host handles, not strings. */
export type TickPriority = JavaEnum<"net.minecraft.world.ticks.TickPriority", "EXTREMELY_HIGH" | "EXTREMELY_LOW" | "HIGH" | "LOW" | "NORMAL" | "VERY_HIGH" | "VERY_LOW"> & TickPriorityMembers;
export interface TickPriorityMembers {
  getValue(): number;
}
export interface TickPriorityStatics {
  readonly EXTREMELY_HIGH: TickPriority;
  readonly EXTREMELY_LOW: TickPriority;
  readonly HIGH: TickPriority;
  readonly LOW: TickPriority;
  readonly NORMAL: TickPriority;
  readonly VERY_HIGH: TickPriority;
  readonly VERY_LOW: TickPriority;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TickPriority]>;
  byValue(arg0: number): TickPriority;
  valueOf(arg0: string): TickPriority;
  values(): Array<TickPriority>;
}

/** JVM class net.minecraft.world.ticks.WorldGenTickAccess. */
export interface WorldGenTickAccessMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [LevelTickAccess<T>];
  count(): number;
  hasScheduledTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
  schedule(arg0: ScheduledTick<T>): void;
  willTickThisTick(arg0: j_net_minecraft_core.BlockPos, arg1: T): boolean;
}
export type WorldGenTickAccess<T = unknown> = WorldGenTickAccessMembers<T> & LevelTickAccess<T>;
export interface WorldGenTickAccessStatics {
  new<T>(arg0: JavaFunction<j_net_minecraft_core.BlockPos, TickContainerAccess<T>>): WorldGenTickAccess<T>;
}
