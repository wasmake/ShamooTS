// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_generator_structure from './org.bukkit.generator.structure.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class org.bukkit.event.world.AsyncStructureGenerateEvent. */
export interface AsyncStructureGenerateEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent];
  clearBlockTransformers(): void;
  clearEntityTransformers(): void;
  getBlockTransformer(arg0: j_org_bukkit.NamespacedKey): j_org_bukkit_util.BlockTransformer | null;
  getBlockTransformers(): JavaMap<j_org_bukkit.NamespacedKey, j_org_bukkit_util.BlockTransformer>;
  getBoundingBox(): j_org_bukkit_util.BoundingBox;
  getCause(): AsyncStructureGenerateEvent_Cause;
  getChunkX(): number;
  getChunkZ(): number;
  getEntityTransformer(arg0: j_org_bukkit.NamespacedKey): j_org_bukkit_util.EntityTransformer | null;
  getEntityTransformers(): JavaMap<j_org_bukkit.NamespacedKey, j_org_bukkit_util.EntityTransformer>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getStructure(): j_org_bukkit_generator_structure.Structure_2;
  removeBlockTransformer(arg0: j_org_bukkit.NamespacedKey): void;
  removeEntityTransformer(arg0: j_org_bukkit.NamespacedKey): void;
  setBlockTransformer(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit_util.BlockTransformer): void;
  setEntityTransformer(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit_util.EntityTransformer): void;
}
export type AsyncStructureGenerateEvent = AsyncStructureGenerateEventMembers & WorldEvent;
export interface AsyncStructureGenerateEventStatics {
  new(arg0: j_org_bukkit.World, arg1: boolean, arg2: AsyncStructureGenerateEvent_Cause, arg3: j_org_bukkit_generator_structure.Structure_2, arg4: j_org_bukkit_util.BoundingBox, arg5: number, arg6: number): AsyncStructureGenerateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.world.AsyncStructureGenerateEvent$Cause; constants are host handles, not strings. */
export type AsyncStructureGenerateEvent_Cause = JavaEnum<"org.bukkit.event.world.AsyncStructureGenerateEvent$Cause", "COMMAND" | "CUSTOM" | "WORLD_GENERATION"> & AsyncStructureGenerateEvent_CauseMembers;
export interface AsyncStructureGenerateEvent_CauseMembers {
}
export interface AsyncStructureGenerateEvent_CauseStatics {
  readonly COMMAND: AsyncStructureGenerateEvent_Cause;
  readonly CUSTOM: AsyncStructureGenerateEvent_Cause;
  readonly WORLD_GENERATION: AsyncStructureGenerateEvent_Cause;
  valueOf(arg0: string): AsyncStructureGenerateEvent_Cause;
  values(): Array<AsyncStructureGenerateEvent_Cause>;
}

/** JVM class org.bukkit.event.world.AsyncStructureSpawnEvent. */
export interface AsyncStructureSpawnEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getBoundingBox(): j_org_bukkit_util.BoundingBox;
  getChunkX(): number;
  getChunkZ(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getStructure(): j_org_bukkit_generator_structure.Structure_2;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type AsyncStructureSpawnEvent = AsyncStructureSpawnEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface AsyncStructureSpawnEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit_generator_structure.Structure_2, arg2: j_org_bukkit_util.BoundingBox, arg3: number, arg4: number): AsyncStructureSpawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.world.ChunkEvent. */
export interface ChunkEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent];
  chunk: j_org_bukkit.Chunk;
  getChunk(): j_org_bukkit.Chunk;
}
export type ChunkEvent = ChunkEventMembers & WorldEvent;
export interface ChunkEventStatics {
  new(arg0: j_org_bukkit.Chunk): ChunkEvent;
}

/** JVM class org.bukkit.event.world.ChunkLoadEvent. */
export interface ChunkLoadEventMembers {
  readonly __javaSupertypes?: readonly [ChunkEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isNewChunk(): boolean;
}
export type ChunkLoadEvent = ChunkLoadEventMembers & ChunkEvent;
export interface ChunkLoadEventStatics {
  new(arg0: j_org_bukkit.Chunk, arg1: boolean): ChunkLoadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.ChunkPopulateEvent. */
export interface ChunkPopulateEventMembers {
  readonly __javaSupertypes?: readonly [ChunkEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ChunkPopulateEvent = ChunkPopulateEventMembers & ChunkEvent;
export interface ChunkPopulateEventStatics {
  new(arg0: j_org_bukkit.Chunk): ChunkPopulateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.ChunkUnloadEvent. */
export interface ChunkUnloadEventMembers {
  readonly __javaSupertypes?: readonly [ChunkEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isSaveChunk(): boolean;
  setSaveChunk(arg0: boolean): void;
}
export type ChunkUnloadEvent = ChunkUnloadEventMembers & ChunkEvent;
export interface ChunkUnloadEventStatics {
  new(arg0: j_org_bukkit.Chunk): ChunkUnloadEvent;
  new(arg0: j_org_bukkit.Chunk, arg1: boolean): ChunkUnloadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.EntitiesLoadEvent. */
export interface EntitiesLoadEventMembers {
  readonly __javaSupertypes?: readonly [ChunkEvent];
  getEntities(): JavaList<j_org_bukkit_entity.Entity>;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type EntitiesLoadEvent = EntitiesLoadEventMembers & ChunkEvent;
export interface EntitiesLoadEventStatics {
  new(arg0: j_org_bukkit.Chunk, arg1: JavaList<j_org_bukkit_entity.Entity>): EntitiesLoadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.EntitiesUnloadEvent. */
export interface EntitiesUnloadEventMembers {
  readonly __javaSupertypes?: readonly [ChunkEvent];
  getEntities(): JavaList<j_org_bukkit_entity.Entity>;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type EntitiesUnloadEvent = EntitiesUnloadEventMembers & ChunkEvent;
export interface EntitiesUnloadEventStatics {
  new(arg0: j_org_bukkit.Chunk, arg1: JavaList<j_org_bukkit_entity.Entity>): EntitiesUnloadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.GenericGameEvent. */
export interface GenericGameEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity | null;
  getEvent(): j_org_bukkit.GameEvent;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  getRadius(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setRadius(arg0: number): void;
}
export type GenericGameEvent = GenericGameEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface GenericGameEventStatics {
  new(arg0: j_org_bukkit.GameEvent, arg1: j_org_bukkit.Location, arg2: j_org_bukkit_entity.Entity | null, arg3: number, arg4: boolean): GenericGameEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.LootGenerateEvent. */
export interface LootGenerateEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventoryHolder(): j_org_bukkit_inventory.InventoryHolder | null;
  getLoot(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getLootContext(): j_org_bukkit_loot.LootContext;
  getLootTable(): j_org_bukkit_loot.LootTable;
  isCancelled(): boolean;
  isPlugin(): boolean;
  setCancelled(arg0: boolean): void;
  setLoot(arg0: JavaCollection<j_org_bukkit_inventory.ItemStack> | null): void | null;
}
export type LootGenerateEvent = LootGenerateEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface LootGenerateEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_inventory.InventoryHolder | null, arg3: j_org_bukkit_loot.LootTable, arg4: j_org_bukkit_loot.LootContext, arg5: JavaList<j_org_bukkit_inventory.ItemStack>, arg6: boolean): LootGenerateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.PortalCreateEvent. */
export interface PortalCreateEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getBlocks(): JavaList<j_org_bukkit_block.BlockState>;
  getEntity(): j_org_bukkit_entity.Entity | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReason(): PortalCreateEvent_CreateReason;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PortalCreateEvent = PortalCreateEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface PortalCreateEventStatics {
  new(arg0: JavaList<j_org_bukkit_block.BlockState>, arg1: j_org_bukkit.World, arg2: j_org_bukkit_entity.Entity | null, arg3: PortalCreateEvent_CreateReason): PortalCreateEvent;
  new(arg0: JavaList<j_org_bukkit_block.BlockState>, arg1: j_org_bukkit.World, arg2: PortalCreateEvent_CreateReason): PortalCreateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.world.PortalCreateEvent$CreateReason; constants are host handles, not strings. */
export type PortalCreateEvent_CreateReason = JavaEnum<"org.bukkit.event.world.PortalCreateEvent$CreateReason", "END_PLATFORM" | "FIRE" | "NETHER_PAIR"> & PortalCreateEvent_CreateReasonMembers;
export interface PortalCreateEvent_CreateReasonMembers {
}
export interface PortalCreateEvent_CreateReasonStatics {
  readonly END_PLATFORM: PortalCreateEvent_CreateReason;
  readonly FIRE: PortalCreateEvent_CreateReason;
  readonly NETHER_PAIR: PortalCreateEvent_CreateReason;
  valueOf(arg0: string): PortalCreateEvent_CreateReason;
  values(): Array<PortalCreateEvent_CreateReason>;
}

/** JVM class org.bukkit.event.world.SpawnChangeEvent. */
export interface SpawnChangeEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPreviousLocation(): j_org_bukkit.Location;
}
export type SpawnChangeEvent = SpawnChangeEventMembers & WorldEvent;
export interface SpawnChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit.Location): SpawnChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.StructureGrowEvent. */
export interface StructureGrowEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getBlocks(): JavaList<j_org_bukkit_block.BlockState>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  getPlayer(): j_org_bukkit_entity.Player | null;
  getSpecies(): j_org_bukkit.TreeType;
  isCancelled(): boolean;
  isFromBonemeal(): boolean;
  setCancelled(arg0: boolean): void;
}
export type StructureGrowEvent = StructureGrowEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface StructureGrowEventStatics {
  new(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.TreeType, arg2: boolean, arg3: j_org_bukkit_entity.Player | null, arg4: JavaList<j_org_bukkit_block.BlockState>): StructureGrowEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.TimeSkipEvent. */
export interface TimeSkipEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSkipAmount(): bigint;
  getSkipReason(): TimeSkipEvent_SkipReason;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setSkipAmount(arg0: bigint): void;
}
export type TimeSkipEvent = TimeSkipEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface TimeSkipEventStatics {
  new(arg0: j_org_bukkit.World, arg1: TimeSkipEvent_SkipReason, arg2: bigint): TimeSkipEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.world.TimeSkipEvent$SkipReason; constants are host handles, not strings. */
export type TimeSkipEvent_SkipReason = JavaEnum<"org.bukkit.event.world.TimeSkipEvent$SkipReason", "COMMAND" | "CUSTOM" | "NIGHT_SKIP"> & TimeSkipEvent_SkipReasonMembers;
export interface TimeSkipEvent_SkipReasonMembers {
}
export interface TimeSkipEvent_SkipReasonStatics {
  readonly COMMAND: TimeSkipEvent_SkipReason;
  readonly CUSTOM: TimeSkipEvent_SkipReason;
  readonly NIGHT_SKIP: TimeSkipEvent_SkipReason;
  valueOf(arg0: string): TimeSkipEvent_SkipReason;
  values(): Array<TimeSkipEvent_SkipReason>;
}

/** JVM abstract org.bukkit.event.world.WorldEvent. */
export interface WorldEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getWorld(): j_org_bukkit.World;
  readonly world: j_org_bukkit.World;
}
export type WorldEvent = WorldEventMembers & j_org_bukkit_event.Event;
export interface WorldEventStatics {
  new(arg0: j_org_bukkit.World): WorldEvent;
  new(arg0: j_org_bukkit.World, arg1: boolean): WorldEvent;
}

/** JVM class org.bukkit.event.world.WorldInitEvent. */
export interface WorldInitEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type WorldInitEvent = WorldInitEventMembers & WorldEvent;
export interface WorldInitEventStatics {
  new(arg0: j_org_bukkit.World): WorldInitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.WorldLoadEvent. */
export interface WorldLoadEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type WorldLoadEvent = WorldLoadEventMembers & WorldEvent;
export interface WorldLoadEventStatics {
  new(arg0: j_org_bukkit.World): WorldLoadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.WorldSaveEvent. */
export interface WorldSaveEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type WorldSaveEvent = WorldSaveEventMembers & WorldEvent;
export interface WorldSaveEventStatics {
  new(arg0: j_org_bukkit.World): WorldSaveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.world.WorldUnloadEvent. */
export interface WorldUnloadEventMembers {
  readonly __javaSupertypes?: readonly [WorldEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type WorldUnloadEvent = WorldUnloadEventMembers & WorldEvent & j_org_bukkit_event.Cancellable;
export interface WorldUnloadEventStatics {
  new(arg0: j_org_bukkit.World): WorldUnloadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
