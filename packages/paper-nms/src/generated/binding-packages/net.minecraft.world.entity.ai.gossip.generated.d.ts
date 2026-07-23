// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM class net.minecraft.world.entity.ai.gossip.GossipContainer. */
export interface GossipContainerMembers {
  add(arg0: JavaOpaque<"java.util.UUID">, arg1: GossipType, arg2: number): void;
  clear(): void;
  copy(): GossipContainer;
  decay(): void;
  getCountForType(arg0: GossipType, arg1: JavaOpaque<"java.util.function.DoublePredicate">): bigint;
  getGossipEntries(): JavaMap<JavaOpaque<"java.util.UUID">, JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [GossipType]>>;
  getReputation(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaPredicate<GossipType>): number;
  readonly gossips: JavaMap<JavaOpaque<"java.util.UUID">, GossipContainer_EntityGossips>;
  putAll(arg0: GossipContainer): void;
  remove(arg0: JavaOpaque<"java.util.UUID">, arg1: GossipType): void;
  remove(arg0: JavaOpaque<"java.util.UUID">, arg1: GossipType, arg2: number): void;
  remove(arg0: GossipType): void;
  transferFrom(arg0: GossipContainer, arg1: j_net_minecraft_util.RandomSource, arg2: number): void;
}
export type GossipContainer = GossipContainerMembers;
export interface GossipContainerStatics {
  new(): GossipContainer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GossipContainer]>;
  readonly DISCARD_THRESHOLD: 2;
}

/** JVM class net.minecraft.world.entity.ai.gossip.GossipContainer$EntityGossips. */
export interface GossipContainer_EntityGossipsMembers {
  assignFromPaperReputation(arg0: JavaOpaque<"com.destroystokyo.paper.entity.villager.Reputation">): void;
  decay(): void;
  decompress(arg0: JavaOpaque<"java.util.UUID">): JavaList<JavaOpaque<"net.minecraft.world.entity.ai.gossip.GossipContainer$GossipEntry">>;
  getPaperReputation(): JavaOpaque<"com.destroystokyo.paper.entity.villager.Reputation">;
  isEmpty(): boolean;
  makeSureValueIsntTooLowOrTooHigh(arg0: GossipType): void;
  remove(arg0: GossipType): void;
  unpack(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.minecraft.world.entity.ai.gossip.GossipContainer$GossipEntry">]>;
  weightedValue(arg0: JavaPredicate<GossipType>): number;
}
export type GossipContainer_EntityGossips = GossipContainer_EntityGossipsMembers;
export interface GossipContainer_EntityGossipsStatics {
  new(): GossipContainer_EntityGossips;
}

/** Live JVM enum net.minecraft.world.entity.ai.gossip.GossipType; constants are host handles, not strings. */
export type GossipType = JavaEnum<"net.minecraft.world.entity.ai.gossip.GossipType", "MAJOR_NEGATIVE" | "MAJOR_POSITIVE" | "MINOR_NEGATIVE" | "MINOR_POSITIVE" | "TRADING"> & GossipTypeMembers;
export interface GossipTypeMembers {
  readonly decayPerDay: number;
  readonly decayPerTransfer: number;
  getSerializedName(): string;
  readonly id: string;
  readonly max: number;
  readonly weight: number;
}
export interface GossipTypeStatics {
  readonly MAJOR_NEGATIVE: GossipType;
  readonly MAJOR_POSITIVE: GossipType;
  readonly MINOR_NEGATIVE: GossipType;
  readonly MINOR_POSITIVE: GossipType;
  readonly TRADING: GossipType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GossipType]>;
  readonly REPUTATION_CHANGE_PER_EVENT: 25;
  readonly REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: 20;
  readonly REPUTATION_CHANGE_PER_TRADE: 2;
  valueOf(arg0: string): GossipType;
  values(): Array<GossipType>;
}
