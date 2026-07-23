// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_redstone from './net.minecraft.world.level.redstone.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM record net.minecraft.network.protocol.common.custom.BeeDebugPayload. */
export interface BeeDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  beeInfo(): BeeDebugPayload_BeeInfo;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<BeeDebugPayload>;
}
export type BeeDebugPayload = BeeDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface BeeDebugPayloadStatics {
  new(arg0: BeeDebugPayload_BeeInfo): BeeDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, BeeDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<BeeDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.BeeDebugPayload$BeeInfo. */
export interface BeeDebugPayload_BeeInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blacklistedHives(): JavaList<j_net_minecraft_core.BlockPos>;
  equals(arg0: object): boolean;
  flowerPos(): j_net_minecraft_core.BlockPos | null;
  generateName(): string;
  goals(): JavaSet<string>;
  hasHive(arg0: j_net_minecraft_core.BlockPos): boolean;
  hashCode(): number;
  hivePos(): j_net_minecraft_core.BlockPos | null;
  id(): number;
  path(): j_net_minecraft_world_level_pathfinder.Path | null;
  pos(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  travelTicks(): number;
  uuid(): JavaOpaque<"java.util.UUID">;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type BeeDebugPayload_BeeInfo = BeeDebugPayload_BeeInfoMembers & JavaOpaque<"java.lang.Record">;
export interface BeeDebugPayload_BeeInfoStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: number, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_level_pathfinder.Path | null, arg4: j_net_minecraft_core.BlockPos | null, arg5: j_net_minecraft_core.BlockPos | null, arg6: number, arg7: JavaSet<string>, arg8: JavaList<j_net_minecraft_core.BlockPos>): BeeDebugPayload_BeeInfo;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): BeeDebugPayload_BeeInfo;
}

/** JVM record net.minecraft.network.protocol.common.custom.BrainDebugPayload. */
export interface BrainDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  brainDump(): BrainDebugPayload_BrainDump;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<BrainDebugPayload>;
}
export type BrainDebugPayload = BrainDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface BrainDebugPayloadStatics {
  new(arg0: BrainDebugPayload_BrainDump): BrainDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, BrainDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<BrainDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.BrainDebugPayload$BrainDump. */
export interface BrainDebugPayload_BrainDumpMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  activities(): JavaList<string>;
  angerLevel(): number;
  behaviors(): JavaList<string>;
  equals(arg0: object): boolean;
  gossips(): JavaList<string>;
  hasPoi(arg0: j_net_minecraft_core.BlockPos): boolean;
  hasPotentialPoi(arg0: j_net_minecraft_core.BlockPos): boolean;
  hashCode(): number;
  health(): number;
  id(): number;
  inventory(): string;
  maxHealth(): number;
  memories(): JavaList<string>;
  name(): string;
  path(): j_net_minecraft_world_level_pathfinder.Path | null;
  pois(): JavaSet<j_net_minecraft_core.BlockPos>;
  pos(): j_net_minecraft_world_phys.Vec3;
  potentialPois(): JavaSet<j_net_minecraft_core.BlockPos>;
  profession(): string;
  toString(): string;
  uuid(): JavaOpaque<"java.util.UUID">;
  wantsGolem(): boolean;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  xp(): number;
}
export type BrainDebugPayload_BrainDump = BrainDebugPayload_BrainDumpMembers & JavaOpaque<"java.lang.Record">;
export interface BrainDebugPayload_BrainDumpStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: j_net_minecraft_world_phys.Vec3, arg8: string, arg9: j_net_minecraft_world_level_pathfinder.Path | null, arg10: boolean, arg11: number, arg12: JavaList<string>, arg13: JavaList<string>, arg14: JavaList<string>, arg15: JavaList<string>, arg16: JavaSet<j_net_minecraft_core.BlockPos>, arg17: JavaSet<j_net_minecraft_core.BlockPos>): BrainDebugPayload_BrainDump;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): BrainDebugPayload_BrainDump;
}

/** JVM record net.minecraft.network.protocol.common.custom.BrandPayload. */
export interface BrandPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  brand(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<BrandPayload>;
}
export type BrandPayload = BrandPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface BrandPayloadStatics {
  new(arg0: string): BrandPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, BrandPayload>;
  readonly TYPE: CustomPacketPayload_Type<BrandPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.BreezeDebugPayload. */
export interface BreezeDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  breezeInfo(): BreezeDebugPayload_BreezeInfo;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<BreezeDebugPayload>;
}
export type BreezeDebugPayload = BreezeDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface BreezeDebugPayloadStatics {
  new(arg0: BreezeDebugPayload_BreezeInfo): BreezeDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, BreezeDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<BreezeDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.BreezeDebugPayload$BreezeInfo. */
export interface BreezeDebugPayload_BreezeInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  attackTarget(): number;
  equals(arg0: object): boolean;
  generateName(): string;
  hashCode(): number;
  id(): number;
  jumpTarget(): j_net_minecraft_core.BlockPos;
  toString(): string;
  uuid(): JavaOpaque<"java.util.UUID">;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type BreezeDebugPayload_BreezeInfo = BreezeDebugPayload_BreezeInfoMembers & JavaOpaque<"java.lang.Record">;
export interface BreezeDebugPayload_BreezeInfoStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: number, arg2: number, arg3: j_net_minecraft_core.BlockPos): BreezeDebugPayload_BreezeInfo;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): BreezeDebugPayload_BreezeInfo;
}

/** JVM interface net.minecraft.network.protocol.common.custom.CustomPacketPayload. */
export interface CustomPacketPayloadMembers {
  type(): CustomPacketPayload_Type<CustomPacketPayload>;
}
export type CustomPacketPayload = CustomPacketPayloadMembers;
export interface CustomPacketPayloadStatics {
  codec<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, T /* extends CustomPacketPayload */>(arg0: j_net_minecraft_network_codec.StreamMemberEncoder<B, T>, arg1: j_net_minecraft_network_codec.StreamDecoder<B, T>): j_net_minecraft_network_codec.StreamCodec<B, T>;
  codec<B /* extends j_net_minecraft_network.FriendlyByteBuf */>(arg0: CustomPacketPayload_FallbackProvider<B>, arg1: JavaList<CustomPacketPayload_TypeAndCodec<B, object>>): j_net_minecraft_network_codec.StreamCodec<B, CustomPacketPayload>;
  createType<T /* extends CustomPacketPayload */>(arg0: string): CustomPacketPayload_Type<T>;
}

/** JVM interface net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider. */
export interface CustomPacketPayload_FallbackProviderMembers<B /* extends j_net_minecraft_network.FriendlyByteBuf */ = unknown> {
  create(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_network_codec.StreamCodec<B, CustomPacketPayload>;
}
export type CustomPacketPayload_FallbackProvider<B /* extends j_net_minecraft_network.FriendlyByteBuf */ = unknown> = CustomPacketPayload_FallbackProviderMembers<B>;
export interface CustomPacketPayload_FallbackProviderStatics {
}

/** JVM record net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type. */
export interface CustomPacketPayload_TypeMembers<T /* extends CustomPacketPayload */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type CustomPacketPayload_Type<T /* extends CustomPacketPayload */ = unknown> = CustomPacketPayload_TypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface CustomPacketPayload_TypeStatics {
  new<T /* extends CustomPacketPayload */>(arg0: j_net_minecraft_resources.ResourceLocation): CustomPacketPayload_Type<T>;
}

/** JVM record net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec. */
export interface CustomPacketPayload_TypeAndCodecMembers<B /* extends j_net_minecraft_network.FriendlyByteBuf */ = unknown, T /* extends CustomPacketPayload */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): j_net_minecraft_network_codec.StreamCodec<B, T>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<T>;
}
export type CustomPacketPayload_TypeAndCodec<B /* extends j_net_minecraft_network.FriendlyByteBuf */ = unknown, T /* extends CustomPacketPayload */ = unknown> = CustomPacketPayload_TypeAndCodecMembers<B, T> & JavaOpaque<"java.lang.Record">;
export interface CustomPacketPayload_TypeAndCodecStatics {
  new<B /* extends j_net_minecraft_network.FriendlyByteBuf */, T /* extends CustomPacketPayload */>(arg0: CustomPacketPayload_Type<T>, arg1: j_net_minecraft_network_codec.StreamCodec<B, T>): CustomPacketPayload_TypeAndCodec<B, T>;
}

/** JVM record net.minecraft.network.protocol.common.custom.DiscardedPayload. */
export interface DiscardedPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  data(): Array<number>;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  type(): CustomPacketPayload_Type<DiscardedPayload>;
}
export type DiscardedPayload = DiscardedPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface DiscardedPayloadStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: Array<number>): DiscardedPayload;
  codec<T /* extends j_net_minecraft_network.FriendlyByteBuf */>(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number): j_net_minecraft_network_codec.StreamCodec<T, DiscardedPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.GameEventDebugPayload. */
export interface GameEventDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  gameEventType(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>;
  hashCode(): number;
  pos(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  type(): CustomPacketPayload_Type<GameEventDebugPayload>;
}
export type GameEventDebugPayload = GameEventDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface GameEventDebugPayloadStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_phys.Vec3): GameEventDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, GameEventDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<GameEventDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.GameEventListenerDebugPayload. */
export interface GameEventListenerDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  listenerPos(): j_net_minecraft_world_level_gameevent.PositionSource;
  listenerRange(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<GameEventListenerDebugPayload>;
}
export type GameEventListenerDebugPayload = GameEventListenerDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface GameEventListenerDebugPayloadStatics {
  new(arg0: j_net_minecraft_world_level_gameevent.PositionSource, arg1: number): GameEventListenerDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, GameEventListenerDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<GameEventListenerDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.GameTestAddMarkerDebugPayload. */
export interface GameTestAddMarkerDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  color(): number;
  durationMs(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  text(): string;
  toString(): string;
  type(): CustomPacketPayload_Type<GameTestAddMarkerDebugPayload>;
}
export type GameTestAddMarkerDebugPayload = GameTestAddMarkerDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface GameTestAddMarkerDebugPayloadStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: string, arg3: number): GameTestAddMarkerDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, GameTestAddMarkerDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<GameTestAddMarkerDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.GameTestClearMarkersDebugPayload. */
export interface GameTestClearMarkersDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<GameTestClearMarkersDebugPayload>;
}
export type GameTestClearMarkersDebugPayload = GameTestClearMarkersDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface GameTestClearMarkersDebugPayloadStatics {
  new(): GameTestClearMarkersDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, GameTestClearMarkersDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<GameTestClearMarkersDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.GoalDebugPayload. */
export interface GoalDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  entityId(): number;
  equals(arg0: object): boolean;
  goals(): JavaList<GoalDebugPayload_DebugGoal>;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): CustomPacketPayload_Type<GoalDebugPayload>;
}
export type GoalDebugPayload = GoalDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface GoalDebugPayloadStatics {
  new(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: JavaList<GoalDebugPayload_DebugGoal>): GoalDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, GoalDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<GoalDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.GoalDebugPayload$DebugGoal. */
export interface GoalDebugPayload_DebugGoalMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isRunning(): boolean;
  name(): string;
  priority(): number;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type GoalDebugPayload_DebugGoal = GoalDebugPayload_DebugGoalMembers & JavaOpaque<"java.lang.Record">;
export interface GoalDebugPayload_DebugGoalStatics {
  new(arg0: number, arg1: boolean, arg2: string): GoalDebugPayload_DebugGoal;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): GoalDebugPayload_DebugGoal;
}

/** JVM record net.minecraft.network.protocol.common.custom.HiveDebugPayload. */
export interface HiveDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  hiveInfo(): HiveDebugPayload_HiveInfo;
  toString(): string;
  type(): CustomPacketPayload_Type<HiveDebugPayload>;
}
export type HiveDebugPayload = HiveDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface HiveDebugPayloadStatics {
  new(arg0: HiveDebugPayload_HiveInfo): HiveDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, HiveDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<HiveDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.HiveDebugPayload$HiveInfo. */
export interface HiveDebugPayload_HiveInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  hiveType(): string;
  honeyLevel(): number;
  occupantCount(): number;
  pos(): j_net_minecraft_core.BlockPos;
  sedated(): boolean;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type HiveDebugPayload_HiveInfo = HiveDebugPayload_HiveInfoMembers & JavaOpaque<"java.lang.Record">;
export interface HiveDebugPayload_HiveInfoStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: string, arg2: number, arg3: number, arg4: boolean): HiveDebugPayload_HiveInfo;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): HiveDebugPayload_HiveInfo;
}

/** JVM record net.minecraft.network.protocol.common.custom.NeighborUpdatesDebugPayload. */
export interface NeighborUpdatesDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  time(): bigint;
  toString(): string;
  type(): CustomPacketPayload_Type<NeighborUpdatesDebugPayload>;
}
export type NeighborUpdatesDebugPayload = NeighborUpdatesDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface NeighborUpdatesDebugPayloadStatics {
  new(arg0: bigint, arg1: j_net_minecraft_core.BlockPos): NeighborUpdatesDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, NeighborUpdatesDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<NeighborUpdatesDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.PathfindingDebugPayload. */
export interface PathfindingDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  entityId(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  maxNodeDistance(): number;
  path(): j_net_minecraft_world_level_pathfinder.Path;
  toString(): string;
  type(): CustomPacketPayload_Type<PathfindingDebugPayload>;
}
export type PathfindingDebugPayload = PathfindingDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface PathfindingDebugPayloadStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_pathfinder.Path, arg2: number): PathfindingDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, PathfindingDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<PathfindingDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.PoiAddedDebugPayload. */
export interface PoiAddedDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  freeTicketCount(): number;
  hashCode(): number;
  poiType(): string;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): CustomPacketPayload_Type<PoiAddedDebugPayload>;
}
export type PoiAddedDebugPayload = PoiAddedDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface PoiAddedDebugPayloadStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: string, arg2: number): PoiAddedDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, PoiAddedDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<PoiAddedDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.PoiRemovedDebugPayload. */
export interface PoiRemovedDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): CustomPacketPayload_Type<PoiRemovedDebugPayload>;
}
export type PoiRemovedDebugPayload = PoiRemovedDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface PoiRemovedDebugPayloadStatics {
  new(arg0: j_net_minecraft_core.BlockPos): PoiRemovedDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, PoiRemovedDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<PoiRemovedDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.PoiTicketCountDebugPayload. */
export interface PoiTicketCountDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  freeTicketCount(): number;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): CustomPacketPayload_Type<PoiTicketCountDebugPayload>;
}
export type PoiTicketCountDebugPayload = PoiTicketCountDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface PoiTicketCountDebugPayloadStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number): PoiTicketCountDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, PoiTicketCountDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<PoiTicketCountDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.RaidsDebugPayload. */
export interface RaidsDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  raidCenters(): JavaList<j_net_minecraft_core.BlockPos>;
  toString(): string;
  type(): CustomPacketPayload_Type<RaidsDebugPayload>;
}
export type RaidsDebugPayload = RaidsDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface RaidsDebugPayloadStatics {
  new(arg0: JavaList<j_net_minecraft_core.BlockPos>): RaidsDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, RaidsDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<RaidsDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.RedstoneWireOrientationsDebugPayload. */
export interface RedstoneWireOrientationsDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  time(): bigint;
  toString(): string;
  type(): CustomPacketPayload_Type<RedstoneWireOrientationsDebugPayload>;
  wires(): JavaList<RedstoneWireOrientationsDebugPayload_Wire>;
}
export type RedstoneWireOrientationsDebugPayload = RedstoneWireOrientationsDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface RedstoneWireOrientationsDebugPayloadStatics {
  new(arg0: bigint, arg1: JavaList<RedstoneWireOrientationsDebugPayload_Wire>): RedstoneWireOrientationsDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, RedstoneWireOrientationsDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<RedstoneWireOrientationsDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.RedstoneWireOrientationsDebugPayload$Wire. */
export interface RedstoneWireOrientationsDebugPayload_WireMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  orientation(): j_net_minecraft_world_level_redstone.Orientation;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type RedstoneWireOrientationsDebugPayload_Wire = RedstoneWireOrientationsDebugPayload_WireMembers & JavaOpaque<"java.lang.Record">;
export interface RedstoneWireOrientationsDebugPayload_WireStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_redstone.Orientation): RedstoneWireOrientationsDebugPayload_Wire;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, RedstoneWireOrientationsDebugPayload_Wire>;
}

/** JVM record net.minecraft.network.protocol.common.custom.StructuresDebugPayload. */
export interface StructuresDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  dimension(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
  equals(arg0: object): boolean;
  hashCode(): number;
  mainBB(): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  pieces(): JavaList<StructuresDebugPayload_PieceInfo>;
  toString(): string;
  type(): CustomPacketPayload_Type<StructuresDebugPayload>;
}
export type StructuresDebugPayload = StructuresDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface StructuresDebugPayloadStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg2: JavaList<StructuresDebugPayload_PieceInfo>): StructuresDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, StructuresDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<StructuresDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.StructuresDebugPayload$PieceInfo. */
export interface StructuresDebugPayload_PieceInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  boundingBox(): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  equals(arg0: object): boolean;
  hashCode(): number;
  isStart(): boolean;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type StructuresDebugPayload_PieceInfo = StructuresDebugPayload_PieceInfoMembers & JavaOpaque<"java.lang.Record">;
export interface StructuresDebugPayload_PieceInfoStatics {
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): StructuresDebugPayload_PieceInfo;
  new(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg1: boolean): StructuresDebugPayload_PieceInfo;
}

/** JVM record net.minecraft.network.protocol.common.custom.VillageSectionsDebugPayload. */
export interface VillageSectionsDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  notVillageChunks(): JavaSet<j_net_minecraft_core.SectionPos>;
  toString(): string;
  type(): CustomPacketPayload_Type<VillageSectionsDebugPayload>;
  villageChunks(): JavaSet<j_net_minecraft_core.SectionPos>;
}
export type VillageSectionsDebugPayload = VillageSectionsDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface VillageSectionsDebugPayloadStatics {
  new(arg0: JavaSet<j_net_minecraft_core.SectionPos>, arg1: JavaSet<j_net_minecraft_core.SectionPos>): VillageSectionsDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, VillageSectionsDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<VillageSectionsDebugPayload>;
}

/** JVM record net.minecraft.network.protocol.common.custom.WorldGenAttemptDebugPayload. */
export interface WorldGenAttemptDebugPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomPacketPayload];
  alpha(): number;
  blue(): number;
  equals(arg0: object): boolean;
  green(): number;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  red(): number;
  scale(): number;
  toString(): string;
  type(): CustomPacketPayload_Type<WorldGenAttemptDebugPayload>;
}
export type WorldGenAttemptDebugPayload = WorldGenAttemptDebugPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomPacketPayload;
export interface WorldGenAttemptDebugPayloadStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): WorldGenAttemptDebugPayload;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, WorldGenAttemptDebugPayload>;
  readonly TYPE: CustomPacketPayload_Type<WorldGenAttemptDebugPayload>;
}
