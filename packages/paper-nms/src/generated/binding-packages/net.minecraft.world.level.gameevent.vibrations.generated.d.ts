// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM record net.minecraft.world.level.gameevent.vibrations.VibrationInfo. */
export interface VibrationInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  distance(): number;
  entity(): j_net_minecraft_world_entity.Entity | null;
  equals(arg0: object): boolean;
  gameEvent(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>;
  getEntity(arg0: j_net_minecraft_server_level.ServerLevel): JavaOptional<j_net_minecraft_world_entity.Entity>;
  getProjectileOwner(arg0: j_net_minecraft_server_level.ServerLevel): JavaOptional<j_net_minecraft_world_entity.Entity>;
  hashCode(): number;
  pos(): j_net_minecraft_world_phys.Vec3;
  projectileOwnerUuid(): JavaOpaque<"java.util.UUID"> | null;
  toString(): string;
  uuid(): JavaOpaque<"java.util.UUID"> | null;
}
export type VibrationInfo = VibrationInfoMembers & JavaOpaque<"java.lang.Record">;
export interface VibrationInfoStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: number, arg2: j_net_minecraft_world_phys.Vec3, arg3: JavaOpaque<"java.util.UUID"> | null, arg4: JavaOpaque<"java.util.UUID"> | null): VibrationInfo;
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: number, arg2: j_net_minecraft_world_phys.Vec3, arg3: JavaOpaque<"java.util.UUID"> | null, arg4: JavaOpaque<"java.util.UUID"> | null, arg5: j_net_minecraft_world_entity.Entity | null): VibrationInfo;
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: number, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_entity.Entity | null): VibrationInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VibrationInfo]>;
}

/** JVM class net.minecraft.world.level.gameevent.vibrations.VibrationSelector. */
export interface VibrationSelectorMembers {
  addCandidate(arg0: VibrationInfo, arg1: bigint): void;
  chosenCandidate(arg0: bigint): JavaOptional<VibrationInfo>;
  startOver(): void;
}
export type VibrationSelector = VibrationSelectorMembers;
export interface VibrationSelectorStatics {
  new(): VibrationSelector;
  new(arg0: JavaOptional<VibrationInfo>, arg1: bigint): VibrationSelector;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VibrationSelector]>;
}

/** JVM interface net.minecraft.world.level.gameevent.vibrations.VibrationSystem. */
export interface VibrationSystemMembers {
  getVibrationData(): VibrationSystem_Data;
  getVibrationUser(): VibrationSystem_User;
}
export type VibrationSystem = VibrationSystemMembers;
export interface VibrationSystemStatics {
  readonly NO_VIBRATION_FREQUENCY: 0;
  readonly RESONANCE_EVENTS: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>>;
  readonly VIBRATION_FREQUENCY_FOR_EVENT: JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>]>;
  getGameEventFrequency(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>): number;
  getGameEventFrequency(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>): number;
  getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
  getResonanceEventByFrequency(arg0: number): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>;
}

/** JVM class net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Data. */
export interface VibrationSystem_DataMembers {
  decrementTravelTime(): void;
  getCurrentVibration(): VibrationInfo | null;
  getSelectionStrategy(): VibrationSelector;
  getTravelTimeInTicks(): number;
  setCurrentVibration(arg0: VibrationInfo | null): void;
  setReloadVibrationParticle(arg0: boolean): void;
  setTravelTimeInTicks(arg0: number): void;
  shouldReloadVibrationParticle(): boolean;
}
export type VibrationSystem_Data = VibrationSystem_DataMembers;
export interface VibrationSystem_DataStatics {
  new(): VibrationSystem_Data;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VibrationSystem_Data]>;
  readonly NBT_TAG_KEY: "listener";
}

/** JVM class net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Listener. */
export interface VibrationSystem_ListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_gameevent.GameEventListener];
  forceScheduleVibration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context, arg3: j_net_minecraft_world_phys.Vec3): void;
  getListenerRadius(): number;
  getListenerSource(): j_net_minecraft_world_level_gameevent.PositionSource;
  handleGameEvent(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context, arg3: j_net_minecraft_world_phys.Vec3): boolean;
}
export type VibrationSystem_Listener = VibrationSystem_ListenerMembers & j_net_minecraft_world_level_gameevent.GameEventListener;
export interface VibrationSystem_ListenerStatics {
  new(arg0: VibrationSystem): VibrationSystem_Listener;
  distanceBetweenInBlocks(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos): number;
}

/** JVM interface net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Ticker. */
export interface VibrationSystem_TickerMembers {
}
export type VibrationSystem_Ticker = VibrationSystem_TickerMembers;
export interface VibrationSystem_TickerStatics {
  tick(arg0: j_net_minecraft_world_level.Level, arg1: VibrationSystem_Data, arg2: VibrationSystem_User): void;
}

/** JVM interface net.minecraft.world.level.gameevent.vibrations.VibrationSystem$User. */
export interface VibrationSystem_UserMembers {
  calculateTravelTimeInTicks(arg0: number): number;
  canReceiveVibration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg3: j_net_minecraft_world_level_gameevent.GameEvent_Context): boolean;
  canTriggerAvoidVibration(): boolean;
  getListenableEvents(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_gameevent.GameEvent>;
  getListenerRadius(): number;
  getPositionSource(): j_net_minecraft_world_level_gameevent.PositionSource;
  isValidVibration(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_level_gameevent.GameEvent_Context): boolean;
  onDataChanged(): void;
  onReceiveVibration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg3: j_net_minecraft_world_entity.Entity | null, arg4: j_net_minecraft_world_entity.Entity | null, arg5: number): void;
  requiresAdjacentChunksToBeTicking(): boolean;
}
export type VibrationSystem_User = VibrationSystem_UserMembers;
export interface VibrationSystem_UserStatics {
}
