// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon from './net.minecraft.world.entity.boss.enderdragon.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance. */
export interface AbstractDragonPhaseInstanceMembers {
  readonly __javaSupertypes?: readonly [DragonPhaseInstance];
  begin(): void;
  doClientTick(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  end(): void;
  getFlySpeed(): number;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getTurnSpeed(): number;
  isSitting(): boolean;
  onCrystalDestroyed(arg0: j_net_minecraft_world_entity_boss_enderdragon.EndCrystal, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: j_net_minecraft_world_entity_player.Player | null): void;
  onHurt(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): number;
}
export type AbstractDragonPhaseInstance = AbstractDragonPhaseInstanceMembers & DragonPhaseInstance;
export interface AbstractDragonPhaseInstanceStatics {
}

/** JVM abstract net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase. */
export interface AbstractDragonSittingPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  isSitting(): boolean;
  onHurt(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): number;
}
export type AbstractDragonSittingPhase = AbstractDragonSittingPhaseMembers & AbstractDragonPhaseInstance;
export interface AbstractDragonSittingPhaseStatics {
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonChargePlayerPhase. */
export interface DragonChargePlayerPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlySpeed(): number;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonChargePlayerPhase>;
  setTarget(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type DragonChargePlayerPhase = DragonChargePlayerPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonChargePlayerPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonChargePlayerPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonDeathPhase. */
export interface DragonDeathPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doClientTick(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlySpeed(): number;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonDeathPhase>;
}
export type DragonDeathPhase = DragonDeathPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonDeathPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonDeathPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonHoldingPatternPhase. */
export interface DragonHoldingPatternPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonHoldingPatternPhase>;
  onCrystalDestroyed(arg0: j_net_minecraft_world_entity_boss_enderdragon.EndCrystal, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: j_net_minecraft_world_entity_player.Player | null): void;
}
export type DragonHoldingPatternPhase = DragonHoldingPatternPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonHoldingPatternPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonHoldingPatternPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonHoverPhase. */
export interface DragonHoverPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlySpeed(): number;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonHoverPhase>;
  isSitting(): boolean;
}
export type DragonHoverPhase = DragonHoverPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonHoverPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonHoverPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingApproachPhase. */
export interface DragonLandingApproachPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonLandingApproachPhase>;
}
export type DragonLandingApproachPhase = DragonLandingApproachPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonLandingApproachPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonLandingApproachPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingPhase. */
export interface DragonLandingPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doClientTick(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlySpeed(): number;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonLandingPhase>;
  getTurnSpeed(): number;
}
export type DragonLandingPhase = DragonLandingPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonLandingPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonLandingPhase;
}

/** JVM interface net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance. */
export interface DragonPhaseInstanceMembers {
  begin(): void;
  doClientTick(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  end(): void;
  getFlySpeed(): number;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonPhaseInstance>;
  getTurnSpeed(): number;
  isSitting(): boolean;
  onCrystalDestroyed(arg0: j_net_minecraft_world_entity_boss_enderdragon.EndCrystal, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: j_net_minecraft_world_entity_player.Player | null): void;
  onHurt(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): number;
}
export type DragonPhaseInstance = DragonPhaseInstanceMembers;
export interface DragonPhaseInstanceStatics {
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingAttackingPhase. */
export interface DragonSittingAttackingPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonSittingPhase];
  begin(): void;
  doClientTick(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getPhase(): EnderDragonPhase<DragonSittingAttackingPhase>;
}
export type DragonSittingAttackingPhase = DragonSittingAttackingPhaseMembers & AbstractDragonSittingPhase;
export interface DragonSittingAttackingPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonSittingAttackingPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingFlamingPhase. */
export interface DragonSittingFlamingPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonSittingPhase];
  begin(): void;
  doClientTick(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  end(): void;
  getPhase(): EnderDragonPhase<DragonSittingFlamingPhase>;
  resetFlameCount(): void;
}
export type DragonSittingFlamingPhase = DragonSittingFlamingPhaseMembers & AbstractDragonSittingPhase;
export interface DragonSittingFlamingPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonSittingFlamingPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingScanningPhase. */
export interface DragonSittingScanningPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonSittingPhase];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getPhase(): EnderDragonPhase<DragonSittingScanningPhase>;
}
export type DragonSittingScanningPhase = DragonSittingScanningPhaseMembers & AbstractDragonSittingPhase;
export interface DragonSittingScanningPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonSittingScanningPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonStrafePlayerPhase. */
export interface DragonStrafePlayerPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonStrafePlayerPhase>;
  setTarget(arg0: j_net_minecraft_world_entity.LivingEntity): void;
}
export type DragonStrafePlayerPhase = DragonStrafePlayerPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonStrafePlayerPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonStrafePlayerPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.DragonTakeoffPhase. */
export interface DragonTakeoffPhaseMembers {
  readonly __javaSupertypes?: readonly [AbstractDragonPhaseInstance];
  begin(): void;
  doServerTick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getFlyTargetLocation(): j_net_minecraft_world_phys.Vec3 | null;
  getPhase(): EnderDragonPhase<DragonTakeoffPhase>;
}
export type DragonTakeoffPhase = DragonTakeoffPhaseMembers & AbstractDragonPhaseInstance;
export interface DragonTakeoffPhaseStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonTakeoffPhase;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase. */
export interface EnderDragonPhaseMembers<T /* extends DragonPhaseInstance */ = unknown> {
  createInstance(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): DragonPhaseInstance;
  getId(): number;
  toString(): string;
}
export type EnderDragonPhase<T /* extends DragonPhaseInstance */ = unknown> = EnderDragonPhaseMembers<T>;
export interface EnderDragonPhaseStatics {
  readonly CHARGING_PLAYER: EnderDragonPhase<DragonChargePlayerPhase>;
  readonly DYING: EnderDragonPhase<DragonDeathPhase>;
  readonly HOLDING_PATTERN: EnderDragonPhase<DragonHoldingPatternPhase>;
  readonly HOVERING: EnderDragonPhase<DragonHoverPhase>;
  readonly LANDING: EnderDragonPhase<DragonLandingPhase>;
  readonly LANDING_APPROACH: EnderDragonPhase<DragonLandingApproachPhase>;
  readonly SITTING_ATTACKING: EnderDragonPhase<DragonSittingAttackingPhase>;
  readonly SITTING_FLAMING: EnderDragonPhase<DragonSittingFlamingPhase>;
  readonly SITTING_SCANNING: EnderDragonPhase<DragonSittingScanningPhase>;
  readonly STRAFE_PLAYER: EnderDragonPhase<DragonStrafePlayerPhase>;
  readonly TAKEOFF: EnderDragonPhase<DragonTakeoffPhase>;
  getById(arg0: number): EnderDragonPhase<object>;
  getCount(): number;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhaseManager. */
export interface EnderDragonPhaseManagerMembers {
  getCurrentPhase(): DragonPhaseInstance;
  getPhase<T /* extends DragonPhaseInstance */>(arg0: EnderDragonPhase<T>): T;
  setPhase(arg0: EnderDragonPhase<object>): void;
}
export type EnderDragonPhaseManager = EnderDragonPhaseManagerMembers;
export interface EnderDragonPhaseManagerStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): EnderDragonPhaseManager;
}
