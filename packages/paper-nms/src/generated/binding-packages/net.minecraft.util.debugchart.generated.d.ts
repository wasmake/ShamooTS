// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_players from './net.minecraft.server.players.generated.js';

/** JVM abstract net.minecraft.util.debugchart.AbstractSampleLogger. */
export interface AbstractSampleLoggerMembers {
  readonly __javaSupertypes?: readonly [SampleLogger];
  readonly defaults: Array<bigint>;
  logFullSample(arg0: Array<bigint>): void;
  logPartialSample(arg0: bigint, arg1: number): void;
  logSample(arg0: bigint): void;
  resetSample(): void;
  readonly sample: Array<bigint>;
  useSample(): void;
}
export type AbstractSampleLogger = AbstractSampleLoggerMembers & SampleLogger;
export interface AbstractSampleLoggerStatics {
  new(arg0: number, arg1: Array<bigint>): AbstractSampleLogger;
}

/** JVM class net.minecraft.util.debugchart.DebugSampleSubscriptionTracker. */
export interface DebugSampleSubscriptionTrackerMembers {
  broadcast(arg0: j_net_minecraft_network_protocol_game.ClientboundDebugSamplePacket): void;
  shouldLogSamples(arg0: RemoteDebugSampleType): boolean;
  subscribe(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: RemoteDebugSampleType): void;
  tick(arg0: number): void;
}
export type DebugSampleSubscriptionTracker = DebugSampleSubscriptionTrackerMembers;
export interface DebugSampleSubscriptionTrackerStatics {
  new(arg0: j_net_minecraft_server_players.PlayerList): DebugSampleSubscriptionTracker;
  readonly STOP_SENDING_AFTER_MS: 10000;
  readonly STOP_SENDING_AFTER_TICKS: 200;
}

/** JVM class net.minecraft.util.debugchart.LocalSampleLogger. */
export interface LocalSampleLoggerMembers {
  readonly __javaSupertypes?: readonly [AbstractSampleLogger, SampleStorage];
  capacity(): number;
  get(arg0: number): bigint;
  get(arg0: number, arg1: number): bigint;
  reset(): void;
  size(): number;
  useSample(): void;
}
export type LocalSampleLogger = LocalSampleLoggerMembers & AbstractSampleLogger & SampleStorage;
export interface LocalSampleLoggerStatics {
  new(arg0: number): LocalSampleLogger;
  new(arg0: number, arg1: Array<bigint>): LocalSampleLogger;
  readonly CAPACITY: 240;
}

/** Live JVM enum net.minecraft.util.debugchart.RemoteDebugSampleType; constants are host handles, not strings. */
export type RemoteDebugSampleType = JavaEnum<"net.minecraft.util.debugchart.RemoteDebugSampleType", "TICK_TIME"> & RemoteDebugSampleTypeMembers;
export interface RemoteDebugSampleTypeMembers {
}
export interface RemoteDebugSampleTypeStatics {
  readonly TICK_TIME: RemoteDebugSampleType;
  valueOf(arg0: string): RemoteDebugSampleType;
  values(): Array<RemoteDebugSampleType>;
}

/** JVM class net.minecraft.util.debugchart.RemoteSampleLogger. */
export interface RemoteSampleLoggerMembers {
  readonly __javaSupertypes?: readonly [AbstractSampleLogger];
  useSample(): void;
}
export type RemoteSampleLogger = RemoteSampleLoggerMembers & AbstractSampleLogger;
export interface RemoteSampleLoggerStatics {
  new(arg0: number, arg1: DebugSampleSubscriptionTracker, arg2: RemoteDebugSampleType): RemoteSampleLogger;
  new(arg0: number, arg1: DebugSampleSubscriptionTracker, arg2: RemoteDebugSampleType, arg3: Array<bigint>): RemoteSampleLogger;
}

/** JVM interface net.minecraft.util.debugchart.SampleLogger. */
export interface SampleLoggerMembers {
  logFullSample(arg0: Array<bigint>): void;
  logPartialSample(arg0: bigint, arg1: number): void;
  logSample(arg0: bigint): void;
}
export type SampleLogger = SampleLoggerMembers;
export interface SampleLoggerStatics {
}

/** JVM interface net.minecraft.util.debugchart.SampleStorage. */
export interface SampleStorageMembers {
  capacity(): number;
  get(arg0: number): bigint;
  get(arg0: number, arg1: number): bigint;
  reset(): void;
  size(): number;
}
export type SampleStorage = SampleStorageMembers;
export interface SampleStorageStatics {
}

/** Live JVM enum net.minecraft.util.debugchart.TpsDebugDimensions; constants are host handles, not strings. */
export type TpsDebugDimensions = JavaEnum<"net.minecraft.util.debugchart.TpsDebugDimensions", "FULL_TICK" | "IDLE" | "SCHEDULED_TASKS" | "TICK_SERVER_METHOD"> & TpsDebugDimensionsMembers;
export interface TpsDebugDimensionsMembers {
}
export interface TpsDebugDimensionsStatics {
  readonly FULL_TICK: TpsDebugDimensions;
  readonly IDLE: TpsDebugDimensions;
  readonly SCHEDULED_TASKS: TpsDebugDimensions;
  readonly TICK_SERVER_METHOD: TpsDebugDimensions;
  valueOf(arg0: string): TpsDebugDimensions;
  values(): Array<TpsDebugDimensions>;
}
