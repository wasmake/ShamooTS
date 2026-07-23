// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster_hoglin from './net.minecraft.world.entity.monster.hoglin.generated.js';
import type * as j_net_minecraft_world_entity_monster_piglin from './net.minecraft.world.entity.monster.piglin.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.memory.ExpirableValue. */
export interface ExpirableValueMembers<T = unknown> {
  canExpire(): boolean;
  getTimeToLive(): bigint;
  getValue(): T;
  hasExpired(): boolean;
  tick(): void;
  toString(): string;
}
export type ExpirableValue<T = unknown> = ExpirableValueMembers<T>;
export interface ExpirableValueStatics {
  new<T>(arg0: T, arg1: bigint): ExpirableValue<T>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [ExpirableValue<T>]>;
  of<T>(arg0: T): ExpirableValue<T>;
  of<T>(arg0: T, arg1: bigint): ExpirableValue<T>;
}

/** JVM class net.minecraft.world.entity.ai.memory.MemoryModuleType. */
export interface MemoryModuleTypeMembers<U = unknown> {
  getCodec(): JavaOptional<JavaOpaque<"com.mojang.serialization.Codec", [ExpirableValue<U>]>>;
  toString(): string;
}
export type MemoryModuleType<U = unknown> = MemoryModuleTypeMembers<U>;
export interface MemoryModuleTypeStatics {
  new<U>(arg0: JavaOptional<JavaOpaque<"com.mojang.serialization.Codec", [U]>>): MemoryModuleType<U>;
  readonly ADMIRING_DISABLED: MemoryModuleType<boolean>;
  readonly ADMIRING_ITEM: MemoryModuleType<boolean>;
  readonly ANGRY_AT: MemoryModuleType<JavaOpaque<"java.util.UUID">>;
  readonly ATE_RECENTLY: MemoryModuleType<boolean>;
  readonly ATTACK_COOLING_DOWN: MemoryModuleType<boolean>;
  readonly ATTACK_TARGET: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly AVOID_TARGET: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly BREED_TARGET: MemoryModuleType<j_net_minecraft_world_entity.AgeableMob>;
  readonly BREEZE_JUMP_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly BREEZE_JUMP_INHALING: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly BREEZE_JUMP_TARGET: MemoryModuleType<j_net_minecraft_core.BlockPos>;
  readonly BREEZE_LEAVING_WATER: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly BREEZE_SHOOT: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly BREEZE_SHOOT_CHARGING: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly BREEZE_SHOOT_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly BREEZE_SHOOT_RECOVERING: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly CANT_REACH_WALK_TARGET_SINCE: MemoryModuleType<bigint>;
  readonly CELEBRATE_LOCATION: MemoryModuleType<j_net_minecraft_core.BlockPos>;
  readonly DANCING: MemoryModuleType<boolean>;
  readonly DANGER_DETECTED_RECENTLY: MemoryModuleType<boolean>;
  readonly DIG_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly DISABLE_WALK_TO_ADMIRE_ITEM: MemoryModuleType<boolean>;
  readonly DISTURBANCE_LOCATION: MemoryModuleType<j_net_minecraft_core.BlockPos>;
  readonly DOORS_TO_CLOSE: MemoryModuleType<JavaSet<j_net_minecraft_core.GlobalPos>>;
  readonly DUMMY: MemoryModuleType<void>;
  readonly GAZE_COOLDOWN_TICKS: MemoryModuleType<number>;
  readonly GOLEM_DETECTED_RECENTLY: MemoryModuleType<boolean>;
  readonly HAS_HUNTING_COOLDOWN: MemoryModuleType<boolean>;
  readonly HEARD_BELL_TIME: MemoryModuleType<bigint>;
  readonly HIDING_PLACE: MemoryModuleType<j_net_minecraft_core.GlobalPos>;
  readonly HOME: MemoryModuleType<j_net_minecraft_core.GlobalPos>;
  readonly HUNTED_RECENTLY: MemoryModuleType<boolean>;
  readonly HURT_BY: MemoryModuleType<j_net_minecraft_world_damagesource.DamageSource>;
  readonly HURT_BY_ENTITY: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly INTERACTABLE_DOORS: MemoryModuleType<JavaList<j_net_minecraft_core.GlobalPos>>;
  readonly INTERACTION_TARGET: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly IS_EMERGING: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly IS_IN_WATER: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly IS_PANICKING: MemoryModuleType<boolean>;
  readonly IS_PREGNANT: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly IS_SNIFFING: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly IS_TEMPTED: MemoryModuleType<boolean>;
  readonly ITEM_PICKUP_COOLDOWN_TICKS: MemoryModuleType<number>;
  readonly JOB_SITE: MemoryModuleType<j_net_minecraft_core.GlobalPos>;
  readonly LAST_SLEPT: MemoryModuleType<bigint>;
  readonly LAST_WOKEN: MemoryModuleType<bigint>;
  readonly LAST_WORKED_AT_POI: MemoryModuleType<bigint>;
  readonly LIKED_NOTEBLOCK_COOLDOWN_TICKS: MemoryModuleType<number>;
  readonly LIKED_NOTEBLOCK_POSITION: MemoryModuleType<j_net_minecraft_core.GlobalPos>;
  readonly LIKED_PLAYER: MemoryModuleType<JavaOpaque<"java.util.UUID">>;
  readonly LONG_JUMP_COOLDOWN_TICKS: MemoryModuleType<number>;
  readonly LONG_JUMP_MID_JUMP: MemoryModuleType<boolean>;
  readonly LOOK_TARGET: MemoryModuleType<j_net_minecraft_world_entity_ai_behavior.PositionTracker>;
  readonly MEETING_POINT: MemoryModuleType<j_net_minecraft_core.GlobalPos>;
  readonly NEARBY_ADULT_PIGLINS: MemoryModuleType<JavaList<j_net_minecraft_world_entity_monster_piglin.AbstractPiglin>>;
  readonly NEAREST_ATTACKABLE: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly NEAREST_BED: MemoryModuleType<j_net_minecraft_core.BlockPos>;
  readonly NEAREST_HOSTILE: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly NEAREST_LIVING_ENTITIES: MemoryModuleType<JavaList<j_net_minecraft_world_entity.LivingEntity>>;
  readonly NEAREST_PLAYERS: MemoryModuleType<JavaList<j_net_minecraft_world_entity_player.Player>>;
  readonly NEAREST_PLAYER_HOLDING_WANTED_ITEM: MemoryModuleType<j_net_minecraft_world_entity_player.Player>;
  readonly NEAREST_REPELLENT: MemoryModuleType<j_net_minecraft_core.BlockPos>;
  readonly NEAREST_TARGETABLE_PLAYER_NOT_WEARING_GOLD: MemoryModuleType<j_net_minecraft_world_entity_player.Player>;
  readonly NEAREST_VISIBLE_ADULT: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly NEAREST_VISIBLE_ADULT_HOGLINS: MemoryModuleType<JavaList<j_net_minecraft_world_entity_monster_hoglin.Hoglin>>;
  readonly NEAREST_VISIBLE_ADULT_PIGLIN: MemoryModuleType<j_net_minecraft_world_entity_monster_piglin.AbstractPiglin>;
  readonly NEAREST_VISIBLE_ADULT_PIGLINS: MemoryModuleType<JavaList<j_net_minecraft_world_entity_monster_piglin.AbstractPiglin>>;
  readonly NEAREST_VISIBLE_ATTACKABLE_PLAYER: MemoryModuleType<j_net_minecraft_world_entity_player.Player>;
  readonly NEAREST_VISIBLE_ATTACKABLE_PLAYERS: MemoryModuleType<JavaList<j_net_minecraft_world_entity_player.Player>>;
  readonly NEAREST_VISIBLE_BABY_HOGLIN: MemoryModuleType<j_net_minecraft_world_entity_monster_hoglin.Hoglin>;
  readonly NEAREST_VISIBLE_HUNTABLE_HOGLIN: MemoryModuleType<j_net_minecraft_world_entity_monster_hoglin.Hoglin>;
  readonly NEAREST_VISIBLE_LIVING_ENTITIES: MemoryModuleType<NearestVisibleLivingEntities>;
  readonly NEAREST_VISIBLE_NEMESIS: MemoryModuleType<j_net_minecraft_world_entity.Mob>;
  readonly NEAREST_VISIBLE_PLAYER: MemoryModuleType<j_net_minecraft_world_entity_player.Player>;
  readonly NEAREST_VISIBLE_WANTED_ITEM: MemoryModuleType<j_net_minecraft_world_entity_item.ItemEntity>;
  readonly NEAREST_VISIBLE_ZOMBIFIED: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly PACIFIED: MemoryModuleType<boolean>;
  readonly PATH: MemoryModuleType<j_net_minecraft_world_level_pathfinder.Path>;
  readonly PLAY_DEAD_TICKS: MemoryModuleType<number>;
  readonly POTENTIAL_JOB_SITE: MemoryModuleType<j_net_minecraft_core.GlobalPos>;
  readonly RAM_COOLDOWN_TICKS: MemoryModuleType<number>;
  readonly RAM_TARGET: MemoryModuleType<j_net_minecraft_world_phys.Vec3>;
  readonly RECENT_PROJECTILE: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly RIDE_TARGET: MemoryModuleType<j_net_minecraft_world_entity.Entity>;
  readonly ROAR_SOUND_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly ROAR_SOUND_DELAY: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly ROAR_TARGET: MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  readonly SECONDARY_JOB_SITE: MemoryModuleType<JavaList<j_net_minecraft_core.GlobalPos>>;
  readonly SNIFFER_DIGGING: MemoryModuleType<boolean>;
  readonly SNIFFER_EXPLORED_POSITIONS: MemoryModuleType<JavaList<j_net_minecraft_core.GlobalPos>>;
  readonly SNIFFER_HAPPY: MemoryModuleType<boolean>;
  readonly SNIFFER_SNIFFING_TARGET: MemoryModuleType<j_net_minecraft_core.BlockPos>;
  readonly SNIFF_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly SONIC_BOOM_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly SONIC_BOOM_SOUND_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly SONIC_BOOM_SOUND_DELAY: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly TEMPTATION_COOLDOWN_TICKS: MemoryModuleType<number>;
  readonly TEMPTING_PLAYER: MemoryModuleType<j_net_minecraft_world_entity_player.Player>;
  readonly TIME_TRYING_TO_REACH_ADMIRE_ITEM: MemoryModuleType<number>;
  readonly TOUCH_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly UNIVERSAL_ANGER: MemoryModuleType<boolean>;
  readonly UNREACHABLE_TONGUE_TARGETS: MemoryModuleType<JavaList<JavaOpaque<"java.util.UUID">>>;
  readonly VIBRATION_COOLDOWN: MemoryModuleType<j_net_minecraft_util.Unit>;
  readonly VISIBLE_ADULT_HOGLIN_COUNT: MemoryModuleType<number>;
  readonly VISIBLE_ADULT_PIGLIN_COUNT: MemoryModuleType<number>;
  readonly VISIBLE_VILLAGER_BABIES: MemoryModuleType<JavaList<j_net_minecraft_world_entity.LivingEntity>>;
  readonly WALK_TARGET: MemoryModuleType<WalkTarget>;
}

/** Live JVM enum net.minecraft.world.entity.ai.memory.MemoryStatus; constants are host handles, not strings. */
export type MemoryStatus = JavaEnum<"net.minecraft.world.entity.ai.memory.MemoryStatus", "REGISTERED" | "VALUE_ABSENT" | "VALUE_PRESENT"> & MemoryStatusMembers;
export interface MemoryStatusMembers {
}
export interface MemoryStatusStatics {
  readonly REGISTERED: MemoryStatus;
  readonly VALUE_ABSENT: MemoryStatus;
  readonly VALUE_PRESENT: MemoryStatus;
  valueOf(arg0: string): MemoryStatus;
  values(): Array<MemoryStatus>;
}

/** JVM class net.minecraft.world.entity.ai.memory.NearestVisibleLivingEntities. */
export interface NearestVisibleLivingEntitiesMembers {
  contains(arg0: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>): boolean;
  contains(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  find(arg0: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.LivingEntity]>;
  findAll(arg0: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>): Iterable<j_net_minecraft_world_entity.LivingEntity>;
  findClosest(arg0: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
}
export type NearestVisibleLivingEntities = NearestVisibleLivingEntitiesMembers;
export interface NearestVisibleLivingEntitiesStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: JavaList<j_net_minecraft_world_entity.LivingEntity>): NearestVisibleLivingEntities;
  empty(): NearestVisibleLivingEntities;
}

/** JVM class net.minecraft.world.entity.ai.memory.WalkTarget. */
export interface WalkTargetMembers {
  getCloseEnoughDist(): number;
  getSpeedModifier(): number;
  getTarget(): j_net_minecraft_world_entity_ai_behavior.PositionTracker;
}
export type WalkTarget = WalkTargetMembers;
export interface WalkTargetStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number): WalkTarget;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: number): WalkTarget;
  new(arg0: j_net_minecraft_world_entity_ai_behavior.PositionTracker, arg1: number, arg2: number): WalkTarget;
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): WalkTarget;
}
