// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_monster_warden from './net.minecraft.world.entity.monster.warden.generated.js';

/** JVM class net.minecraft.world.entity.ai.behavior.warden.Digging. */
export interface DiggingMembers<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<E>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
}
export type Digging<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */ = unknown> = DiggingMembers<E> & j_net_minecraft_world_entity_ai_behavior.Behavior<E>;
export interface DiggingStatics {
  new<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */>(arg0: number): Digging<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.Emerging. */
export interface EmergingMembers<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<E>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
}
export type Emerging<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */ = unknown> = EmergingMembers<E> & j_net_minecraft_world_entity_ai_behavior.Behavior<E>;
export interface EmergingStatics {
  new<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */>(arg0: number): Emerging<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.ForceUnmount. */
export interface ForceUnmountMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<j_net_minecraft_world_entity.LivingEntity>];
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
}
export type ForceUnmount = ForceUnmountMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<j_net_minecraft_world_entity.LivingEntity>;
export interface ForceUnmountStatics {
  new(): ForceUnmount;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.Roar. */
export interface RoarMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<j_net_minecraft_world_entity_monster_warden.Warden>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): void;
}
export type Roar = RoarMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<j_net_minecraft_world_entity_monster_warden.Warden>;
export interface RoarStatics {
  new(): Roar;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.SetRoarTarget. */
export interface SetRoarTargetMembers {
}
export type SetRoarTarget = SetRoarTargetMembers;
export interface SetRoarTargetStatics {
  new(): SetRoarTarget;
  create<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */>(arg0: JavaFunction<E, JavaOptional<j_net_minecraft_world_entity.LivingEntity>>): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.SetWardenLookTarget. */
export interface SetWardenLookTargetMembers {
}
export type SetWardenLookTarget = SetWardenLookTargetMembers;
export interface SetWardenLookTargetStatics {
  new(): SetWardenLookTarget;
  create(): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.Sniffing. */
export interface SniffingMembers<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<E>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E, arg2: bigint): void;
}
export type Sniffing<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */ = unknown> = SniffingMembers<E> & j_net_minecraft_world_entity_ai_behavior.Behavior<E>;
export interface SniffingStatics {
  new<E /* extends j_net_minecraft_world_entity_monster_warden.Warden */>(arg0: number): Sniffing<E>;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.SonicBoom. */
export interface SonicBoomMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<j_net_minecraft_world_entity_monster_warden.Warden>];
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): boolean;
  canStillUse(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  checkExtraStartConditions(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden): boolean;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  start(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  stop(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: bigint): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden, arg2: bigint): void;
}
export type SonicBoom = SonicBoomMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<j_net_minecraft_world_entity_monster_warden.Warden>;
export interface SonicBoomStatics {
  new(): SonicBoom;
  readonly COOLDOWN: 40;
  setCooldown(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
}

/** JVM class net.minecraft.world.entity.ai.behavior.warden.TryToSniff. */
export interface TryToSniffMembers {
}
export type TryToSniff = TryToSniffMembers;
export interface TryToSniffStatics {
  new(): TryToSniff;
  create(): j_net_minecraft_world_entity_ai_behavior.BehaviorControl<j_net_minecraft_world_entity.LivingEntity>;
}
