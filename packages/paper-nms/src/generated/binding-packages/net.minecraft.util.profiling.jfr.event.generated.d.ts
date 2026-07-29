// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_chunk_storage from './net.minecraft.world.level.chunk.storage.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** JVM class net.minecraft.util.profiling.jfr.event.ChunkGenerationEvent. */
export interface ChunkGenerationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
  readonly chunkPosX: number;
  readonly chunkPosZ: number;
  readonly level: string;
  readonly targetStatus: string;
  readonly worldPosX: number;
  readonly worldPosZ: number;
}
export type ChunkGenerationEvent = ChunkGenerationEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface ChunkGenerationEventStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: string): ChunkGenerationEvent;
  readonly EVENT_NAME: "minecraft.ChunkGeneration";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.ChunkGenerationEvent$Fields. */
export interface ChunkGenerationEvent_FieldsMembers {
}
export type ChunkGenerationEvent_Fields = ChunkGenerationEvent_FieldsMembers;
export interface ChunkGenerationEvent_FieldsStatics {
  readonly CHUNK_POS_X: "chunkPosX";
  readonly CHUNK_POS_Z: "chunkPosZ";
  readonly LEVEL: "level";
  readonly STATUS: "status";
  readonly WORLD_POS_X: "worldPosX";
  readonly WORLD_POS_Z: "worldPosZ";
}

/** JVM abstract net.minecraft.util.profiling.jfr.event.ChunkRegionIoEvent. */
export interface ChunkRegionIoEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
  readonly bytes: number;
  readonly chunkPosX: number;
  readonly chunkPosZ: number;
  readonly compression: string;
  readonly dimension: string;
  readonly levelId: string;
  readonly localChunkPosX: number;
  readonly localChunkPosZ: number;
  readonly regionPosX: number;
  readonly regionPosZ: number;
  readonly type: string;
}
export type ChunkRegionIoEvent = ChunkRegionIoEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface ChunkRegionIoEventStatics {
}

/** JVM class net.minecraft.util.profiling.jfr.event.ChunkRegionIoEvent$Fields. */
export interface ChunkRegionIoEvent_FieldsMembers {
}
export type ChunkRegionIoEvent_Fields = ChunkRegionIoEvent_FieldsMembers;
export interface ChunkRegionIoEvent_FieldsStatics {
  readonly BYTES: "bytes";
  readonly CHUNK_POS_X: "chunkPosX";
  readonly CHUNK_POS_Z: "chunkPosZ";
  readonly COMPRESSION: "compression";
  readonly DIMENSION: "dimension";
  readonly LEVEL: "level";
  readonly LOCAL_POS_X: "localPosX";
  readonly LOCAL_POS_Z: "localPosZ";
  readonly REGION_POS_X: "regionPosX";
  readonly REGION_POS_Z: "regionPosZ";
  readonly TYPE: "type";
}

/** JVM class net.minecraft.util.profiling.jfr.event.ChunkRegionReadEvent. */
export interface ChunkRegionReadEventMembers {
  readonly __javaSupertypes?: readonly [ChunkRegionIoEvent];
}
export type ChunkRegionReadEvent = ChunkRegionReadEventMembers & ChunkRegionIoEvent;
export interface ChunkRegionReadEventStatics {
  new(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): ChunkRegionReadEvent;
  readonly EVENT_NAME: "minecraft.ChunkRegionRead";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.ChunkRegionWriteEvent. */
export interface ChunkRegionWriteEventMembers {
  readonly __javaSupertypes?: readonly [ChunkRegionIoEvent];
}
export type ChunkRegionWriteEvent = ChunkRegionWriteEventMembers & ChunkRegionIoEvent;
export interface ChunkRegionWriteEventStatics {
  new(arg0: j_net_minecraft_world_level_chunk_storage.RegionStorageInfo, arg1: j_net_minecraft_world_level.ChunkPos, arg2: j_net_minecraft_world_level_chunk_storage.RegionFileVersion, arg3: number): ChunkRegionWriteEvent;
  readonly EVENT_NAME: "minecraft.ChunkRegionWrite";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.NetworkSummaryEvent. */
export interface NetworkSummaryEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
  receivedBytes: bigint;
  receivedPackets: number;
  readonly remoteAddress: string;
  sentBytes: bigint;
  sentPackets: number;
}
export type NetworkSummaryEvent = NetworkSummaryEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface NetworkSummaryEventStatics {
  new(arg0: string): NetworkSummaryEvent;
  readonly EVENT_NAME: "minecraft.NetworkSummary";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.NetworkSummaryEvent$Fields. */
export interface NetworkSummaryEvent_FieldsMembers {
}
export type NetworkSummaryEvent_Fields = NetworkSummaryEvent_FieldsMembers;
export interface NetworkSummaryEvent_FieldsStatics {
  readonly RECEIVED_BYTES: "receivedBytes";
  readonly REMOTE_ADDRESS: "remoteAddress";
  readonly SENT_BYTES: "sentBytes";
}

/** JVM class net.minecraft.util.profiling.jfr.event.NetworkSummaryEvent$SumAggregation. */
export interface NetworkSummaryEvent_SumAggregationMembers {
  commitEvent(): void;
  trackReceivedPacket(arg0: number): void;
  trackSentPacket(arg0: number): void;
}
export type NetworkSummaryEvent_SumAggregation = NetworkSummaryEvent_SumAggregationMembers;
export interface NetworkSummaryEvent_SumAggregationStatics {
  new(arg0: string): NetworkSummaryEvent_SumAggregation;
}

/** JVM abstract net.minecraft.util.profiling.jfr.event.PacketEvent. */
export interface PacketEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
  readonly bytes: number;
  readonly packetDirection: string;
  readonly packetId: string;
  readonly protocolId: string;
  readonly remoteAddress: string;
}
export type PacketEvent = PacketEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface PacketEventStatics {
}

/** JVM class net.minecraft.util.profiling.jfr.event.PacketEvent$Fields. */
export interface PacketEvent_FieldsMembers {
}
export type PacketEvent_Fields = PacketEvent_FieldsMembers;
export interface PacketEvent_FieldsStatics {
  readonly BYTES: "bytes";
  readonly PACKET_DIRECTION: "packetDirection";
  readonly PACKET_ID: "packetId";
  readonly PROTOCOL_ID: "protocolId";
  readonly REMOTE_ADDRESS: "remoteAddress";
}

/** JVM class net.minecraft.util.profiling.jfr.event.PacketReceivedEvent. */
export interface PacketReceivedEventMembers {
  readonly __javaSupertypes?: readonly [PacketEvent];
}
export type PacketReceivedEvent = PacketReceivedEventMembers & PacketEvent;
export interface PacketReceivedEventStatics {
  new(arg0: string, arg1: string, arg2: string, arg3: JavaOpaque<"java.net.SocketAddress">, arg4: number): PacketReceivedEvent;
  readonly NAME: "minecraft.PacketReceived";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.PacketSentEvent. */
export interface PacketSentEventMembers {
  readonly __javaSupertypes?: readonly [PacketEvent];
}
export type PacketSentEvent = PacketSentEventMembers & PacketEvent;
export interface PacketSentEventStatics {
  new(arg0: string, arg1: string, arg2: string, arg3: JavaOpaque<"java.net.SocketAddress">, arg4: number): PacketSentEvent;
  readonly NAME: "minecraft.PacketSent";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.ServerTickTimeEvent. */
export interface ServerTickTimeEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
  readonly averageTickDurationNanos: bigint;
}
export type ServerTickTimeEvent = ServerTickTimeEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface ServerTickTimeEventStatics {
  new(arg0: number): ServerTickTimeEvent;
  readonly EVENT_NAME: "minecraft.ServerTickTime";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM class net.minecraft.util.profiling.jfr.event.ServerTickTimeEvent$Fields. */
export interface ServerTickTimeEvent_FieldsMembers {
}
export type ServerTickTimeEvent_Fields = ServerTickTimeEvent_FieldsMembers;
export interface ServerTickTimeEvent_FieldsStatics {
  readonly AVERAGE_TICK_DURATION: "averageTickDuration";
}

/** JVM class net.minecraft.util.profiling.jfr.event.StructureGenerationEvent. */
export interface StructureGenerationEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
  readonly chunkPosX: number;
  readonly chunkPosZ: number;
  readonly level: string;
  readonly structure: string;
  success: boolean;
}
export type StructureGenerationEvent = StructureGenerationEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface StructureGenerationEventStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): StructureGenerationEvent;
  readonly EVENT_NAME: "minecraft.StructureGeneration";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}

/** JVM interface net.minecraft.util.profiling.jfr.event.StructureGenerationEvent$Fields. */
export interface StructureGenerationEvent_FieldsMembers {
}
export type StructureGenerationEvent_Fields = StructureGenerationEvent_FieldsMembers;
export interface StructureGenerationEvent_FieldsStatics {
  readonly CHUNK_POS_X: "chunkPosX";
  readonly CHUNK_POS_Z: "chunkPosZ";
  readonly LEVEL: "level";
  readonly STRUCTURE: "structure";
  readonly SUCCESS: "success";
}

/** JVM class net.minecraft.util.profiling.jfr.event.WorldLoadFinishedEvent. */
export interface WorldLoadFinishedEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"jdk.jfr.Event">];
}
export type WorldLoadFinishedEvent = WorldLoadFinishedEventMembers & JavaOpaque<"jdk.jfr.Event">;
export interface WorldLoadFinishedEventStatics {
  new(): WorldLoadFinishedEvent;
  readonly EVENT_NAME: "minecraft.LoadWorld";
  readonly TYPE: JavaOpaque<"jdk.jfr.EventType">;
}
