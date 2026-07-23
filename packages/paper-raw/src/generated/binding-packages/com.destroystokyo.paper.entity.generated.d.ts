// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface com.destroystokyo.paper.entity.Pathfinder. */
export interface PathfinderMembers {
  canFloat(): boolean;
  canOpenDoors(): boolean;
  canPassDoors(): boolean;
  findPath(arg0: j_org_bukkit.Location): Pathfinder_PathResult | null;
  findPath(arg0: j_org_bukkit_entity.LivingEntity): Pathfinder_PathResult | null;
  getCurrentPath(): Pathfinder_PathResult | null;
  getEntity(): j_org_bukkit_entity.Mob;
  hasPath(): boolean;
  moveTo(arg0: Pathfinder_PathResult): boolean;
  moveTo(arg0: Pathfinder_PathResult, arg1: number): boolean;
  moveTo(arg0: j_org_bukkit.Location): boolean;
  moveTo(arg0: j_org_bukkit.Location, arg1: number): boolean;
  moveTo(arg0: j_org_bukkit_entity.LivingEntity): boolean;
  moveTo(arg0: j_org_bukkit_entity.LivingEntity, arg1: number): boolean;
  setCanFloat(arg0: boolean): void;
  setCanOpenDoors(arg0: boolean): void;
  setCanPassDoors(arg0: boolean): void;
  stopPathfinding(): void;
}
export type Pathfinder = PathfinderMembers;
export interface PathfinderStatics {
}

/** JVM interface com.destroystokyo.paper.entity.Pathfinder$PathResult. */
export interface Pathfinder_PathResultMembers {
  canReachFinalPoint(): boolean;
  getFinalPoint(): j_org_bukkit.Location | null;
  getNextPoint(): j_org_bukkit.Location | null;
  getNextPointIndex(): number;
  getPoints(): JavaList<j_org_bukkit.Location>;
}
export type Pathfinder_PathResult = Pathfinder_PathResultMembers;
export interface Pathfinder_PathResultStatics {
}

/** JVM interface com.destroystokyo.paper.entity.RangedEntity. */
export interface RangedEntityMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Mob];
  isChargingAttack(): boolean;
  rangedAttack(arg0: j_org_bukkit_entity.LivingEntity, arg1: number): void;
  setChargingAttack(arg0: boolean): void;
}
export type RangedEntity = RangedEntityMembers & j_org_bukkit_entity.Mob;
export interface RangedEntityStatics {
}

/** JVM class com.destroystokyo.paper.entity.TargetEntityInfo. */
export interface TargetEntityInfoMembers {
  getEntity(): j_org_bukkit_entity.Entity;
  getHitVector(): j_org_bukkit_util.Vector;
}
export type TargetEntityInfo = TargetEntityInfoMembers;
export interface TargetEntityInfoStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_util.Vector): TargetEntityInfo;
}
