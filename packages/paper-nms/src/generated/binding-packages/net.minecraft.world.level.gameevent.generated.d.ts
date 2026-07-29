// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.level.gameevent.BlockPositionSource. */
export interface BlockPositionSourceMembers {
  readonly __javaSupertypes?: readonly [PositionSource];
  getPosition(arg0: j_net_minecraft_world_level.Level): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  getType(): PositionSourceType<BlockPositionSource>;
}
export type BlockPositionSource = BlockPositionSourceMembers & PositionSource;
export interface BlockPositionSourceStatics {
  new(arg0: j_net_minecraft_core.BlockPos): BlockPositionSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockPositionSource]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BlockPositionSource>;
}

/** JVM class net.minecraft.world.level.gameevent.BlockPositionSource$Type. */
export interface BlockPositionSource_TypeMembers {
  readonly __javaSupertypes?: readonly [PositionSourceType<BlockPositionSource>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BlockPositionSource]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BlockPositionSource>;
}
export type BlockPositionSource_Type = BlockPositionSource_TypeMembers & PositionSourceType<BlockPositionSource>;
export interface BlockPositionSource_TypeStatics {
  new(): BlockPositionSource_Type;
}

/** JVM class net.minecraft.world.level.gameevent.DynamicGameEventListener. */
export interface DynamicGameEventListenerMembers<T /* extends GameEventListener */ = unknown> {
  add(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getListener(): T;
  move(arg0: j_net_minecraft_server_level.ServerLevel): void;
  remove(arg0: j_net_minecraft_server_level.ServerLevel): void;
}
export type DynamicGameEventListener<T /* extends GameEventListener */ = unknown> = DynamicGameEventListenerMembers<T>;
export interface DynamicGameEventListenerStatics {
  new<T /* extends GameEventListener */>(arg0: T): DynamicGameEventListener<T>;
}

/** JVM class net.minecraft.world.level.gameevent.EntityPositionSource. */
export interface EntityPositionSourceMembers {
  readonly __javaSupertypes?: readonly [PositionSource];
  getPosition(arg0: j_net_minecraft_world_level.Level): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  getType(): PositionSourceType<EntityPositionSource>;
}
export type EntityPositionSource = EntityPositionSourceMembers & PositionSource;
export interface EntityPositionSourceStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: number): EntityPositionSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EntityPositionSource]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, EntityPositionSource>;
}

/** JVM class net.minecraft.world.level.gameevent.EntityPositionSource$Type. */
export interface EntityPositionSource_TypeMembers {
  readonly __javaSupertypes?: readonly [PositionSourceType<EntityPositionSource>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EntityPositionSource]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, EntityPositionSource>;
}
export type EntityPositionSource_Type = EntityPositionSource_TypeMembers & PositionSourceType<EntityPositionSource>;
export interface EntityPositionSource_TypeStatics {
  new(): EntityPositionSource_Type;
}

/** JVM class net.minecraft.world.level.gameevent.EuclideanGameEventListenerRegistry. */
export interface EuclideanGameEventListenerRegistryMembers {
  readonly __javaSupertypes?: readonly [GameEventListenerRegistry];
  isEmpty(): boolean;
  register(arg0: GameEventListener): void;
  unregister(arg0: GameEventListener): void;
  visitInRangeListeners(arg0: j_net_minecraft_core.Holder<GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: GameEvent_Context, arg3: GameEventListenerRegistry_ListenerVisitor): boolean;
}
export type EuclideanGameEventListenerRegistry = EuclideanGameEventListenerRegistryMembers & GameEventListenerRegistry;
export interface EuclideanGameEventListenerRegistryStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: EuclideanGameEventListenerRegistry_OnEmptyAction): EuclideanGameEventListenerRegistry;
}

/** JVM interface net.minecraft.world.level.gameevent.EuclideanGameEventListenerRegistry$OnEmptyAction. */
export interface EuclideanGameEventListenerRegistry_OnEmptyActionMembers {
  apply(arg0: number): void;
}
export type EuclideanGameEventListenerRegistry_OnEmptyAction = EuclideanGameEventListenerRegistry_OnEmptyActionMembers;
export interface EuclideanGameEventListenerRegistry_OnEmptyActionStatics {
}

/** JVM record net.minecraft.world.level.gameevent.GameEvent. */
export interface GameEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  notificationRadius(): number;
  toString(): string;
}
export type GameEvent = GameEventMembers & JavaOpaque<"java.lang.Record">;
export interface GameEventStatics {
  new(arg0: number): GameEvent;
  readonly BLOCK_ACTIVATE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_ATTACH: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_CHANGE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_CLOSE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_DEACTIVATE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_DESTROY: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_DETACH: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_OPEN: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly BLOCK_PLACE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<GameEvent>]>;
  readonly CONTAINER_CLOSE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly CONTAINER_OPEN: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly DEFAULT_NOTIFICATION_RADIUS: 16;
  readonly DRINK: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly EAT: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ELYTRA_GLIDE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_ACTION: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_DAMAGE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_DIE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_DISMOUNT: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_INTERACT: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_MOUNT: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ENTITY_PLACE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly EQUIP: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly EXPLODE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly FLAP: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly FLUID_PICKUP: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly FLUID_PLACE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly HIT_GROUND: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly INSTRUMENT_PLAY: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ITEM_INTERACT_FINISH: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly ITEM_INTERACT_START: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly JUKEBOX_PLAY: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly JUKEBOX_STOP_PLAY: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly LIGHTNING_STRIKE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly NOTE_BLOCK_PLAY: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly PRIME_FUSE: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly PROJECTILE_LAND: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly PROJECTILE_SHOOT: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_1: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_10: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_11: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_12: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_13: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_14: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_15: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_2: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_3: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_4: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_5: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_6: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_7: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_8: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly RESONATE_9: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly SCULK_SENSOR_TENDRILS_CLICKING: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly SHEAR: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly SHRIEK: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly SPLASH: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly STEP: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly SWIM: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly TELEPORT: j_net_minecraft_core.Holder_Reference<GameEvent>;
  readonly UNEQUIP: j_net_minecraft_core.Holder_Reference<GameEvent>;
  bootstrap(arg0: j_net_minecraft_core.Registry<GameEvent>): j_net_minecraft_core.Holder<GameEvent>;
}

/** JVM record net.minecraft.world.level.gameevent.GameEvent$Context. */
export interface GameEvent_ContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  affectedState(): j_net_minecraft_world_level_block_state.BlockState | null;
  equals(arg0: object): boolean;
  hashCode(): number;
  sourceEntity(): j_net_minecraft_world_entity.Entity | null;
  toString(): string;
}
export type GameEvent_Context = GameEvent_ContextMembers & JavaOpaque<"java.lang.Record">;
export interface GameEvent_ContextStatics {
  new(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level_block_state.BlockState | null): GameEvent_Context;
  of(arg0: j_net_minecraft_world_entity.Entity | null): GameEvent_Context;
  of(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level_block_state.BlockState | null): GameEvent_Context;
  of(arg0: j_net_minecraft_world_level_block_state.BlockState | null): GameEvent_Context;
}

/** JVM class net.minecraft.world.level.gameevent.GameEvent$ListenerInfo. */
export interface GameEvent_ListenerInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [GameEvent_ListenerInfo]>];
  compareTo(arg0: GameEvent_ListenerInfo): number;
  context(): GameEvent_Context;
  gameEvent(): j_net_minecraft_core.Holder<GameEvent>;
  recipient(): GameEventListener;
  source(): j_net_minecraft_world_phys.Vec3;
}
export type GameEvent_ListenerInfo = GameEvent_ListenerInfoMembers;
export interface GameEvent_ListenerInfoStatics {
  new(arg0: j_net_minecraft_core.Holder<GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: GameEvent_Context, arg3: GameEventListener, arg4: j_net_minecraft_world_phys.Vec3): GameEvent_ListenerInfo;
}

/** JVM class net.minecraft.world.level.gameevent.GameEventDispatcher. */
export interface GameEventDispatcherMembers {
  post(arg0: j_net_minecraft_core.Holder<GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: GameEvent_Context): void;
}
export type GameEventDispatcher = GameEventDispatcherMembers;
export interface GameEventDispatcherStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel): GameEventDispatcher;
}

/** JVM interface net.minecraft.world.level.gameevent.GameEventListener. */
export interface GameEventListenerMembers {
  getDeliveryMode(): GameEventListener_DeliveryMode;
  getListenerRadius(): number;
  getListenerSource(): PositionSource;
  handleGameEvent(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.Holder<GameEvent>, arg2: GameEvent_Context, arg3: j_net_minecraft_world_phys.Vec3): boolean;
}
export type GameEventListener = GameEventListenerMembers;
export interface GameEventListenerStatics {
}

/** Live JVM enum net.minecraft.world.level.gameevent.GameEventListener$DeliveryMode; constants are host handles, not strings. */
export type GameEventListener_DeliveryMode = JavaEnum<"net.minecraft.world.level.gameevent.GameEventListener$DeliveryMode", "BY_DISTANCE" | "UNSPECIFIED"> & GameEventListener_DeliveryModeMembers;
export interface GameEventListener_DeliveryModeMembers {
}
export interface GameEventListener_DeliveryModeStatics {
  readonly BY_DISTANCE: GameEventListener_DeliveryMode;
  readonly UNSPECIFIED: GameEventListener_DeliveryMode;
  valueOf(arg0: string): GameEventListener_DeliveryMode;
  values(): Array<GameEventListener_DeliveryMode>;
}

/** JVM interface net.minecraft.world.level.gameevent.GameEventListener$Provider. */
export interface GameEventListener_ProviderMembers<T /* extends GameEventListener */ = unknown> {
  getListener(): T;
}
export type GameEventListener_Provider<T /* extends GameEventListener */ = unknown> = GameEventListener_ProviderMembers<T>;
export interface GameEventListener_ProviderStatics {
}

/** JVM interface net.minecraft.world.level.gameevent.GameEventListenerRegistry. */
export interface GameEventListenerRegistryMembers {
  isEmpty(): boolean;
  register(arg0: GameEventListener): void;
  unregister(arg0: GameEventListener): void;
  visitInRangeListeners(arg0: j_net_minecraft_core.Holder<GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: GameEvent_Context, arg3: GameEventListenerRegistry_ListenerVisitor): boolean;
}
export type GameEventListenerRegistry = GameEventListenerRegistryMembers;
export interface GameEventListenerRegistryStatics {
  readonly NOOP: GameEventListenerRegistry;
}

/** JVM interface net.minecraft.world.level.gameevent.GameEventListenerRegistry$ListenerVisitor. */
export interface GameEventListenerRegistry_ListenerVisitorMembers {
  visit(arg0: GameEventListener, arg1: j_net_minecraft_world_phys.Vec3): void;
}
export type GameEventListenerRegistry_ListenerVisitor = GameEventListenerRegistry_ListenerVisitorMembers;
export interface GameEventListenerRegistry_ListenerVisitorStatics {
}

/** JVM interface net.minecraft.world.level.gameevent.PositionSource. */
export interface PositionSourceMembers {
  getPosition(arg0: j_net_minecraft_world_level.Level): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  getType(): PositionSourceType<PositionSource>;
}
export type PositionSource = PositionSourceMembers;
export interface PositionSourceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PositionSource]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, PositionSource>;
}

/** JVM interface net.minecraft.world.level.gameevent.PositionSourceType. */
export interface PositionSourceTypeMembers<T /* extends PositionSource */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type PositionSourceType<T /* extends PositionSource */ = unknown> = PositionSourceTypeMembers<T>;
export interface PositionSourceTypeStatics {
  readonly BLOCK: PositionSourceType<BlockPositionSource>;
  readonly ENTITY: PositionSourceType<EntityPositionSource>;
  register<S /* extends PositionSourceType<T> */, T /* extends PositionSource */>(arg0: string, arg1: S): S;
}
