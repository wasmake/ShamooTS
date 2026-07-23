// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.navigation.AmphibiousPathNavigation. */
export interface AmphibiousPathNavigationMembers {
  readonly __javaSupertypes?: readonly [PathNavigation];
  canMoveDirectly(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): boolean;
  canNavigateGround(): boolean;
  canUpdatePath(): boolean;
  createPathFinder(arg0: number): j_net_minecraft_world_level_pathfinder.PathFinder;
  getGroundY(arg0: j_net_minecraft_world_phys.Vec3): number;
  getTempMobPos(): j_net_minecraft_world_phys.Vec3;
  isStableDestination(arg0: j_net_minecraft_core.BlockPos): boolean;
  setCanFloat(arg0: boolean): void;
}
export type AmphibiousPathNavigation = AmphibiousPathNavigationMembers & PathNavigation;
export interface AmphibiousPathNavigationStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): AmphibiousPathNavigation;
}

/** JVM class net.minecraft.world.entity.ai.navigation.FlyingPathNavigation. */
export interface FlyingPathNavigationMembers {
  readonly __javaSupertypes?: readonly [PathNavigation];
  canMoveDirectly(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): boolean;
  canNavigateGround(): boolean;
  canUpdatePath(): boolean;
  createPath(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_level_pathfinder.Path;
  createPathFinder(arg0: number): j_net_minecraft_world_level_pathfinder.PathFinder;
  getTempMobPos(): j_net_minecraft_world_phys.Vec3;
  isStableDestination(arg0: j_net_minecraft_core.BlockPos): boolean;
  tick(): void;
}
export type FlyingPathNavigation = FlyingPathNavigationMembers & PathNavigation;
export interface FlyingPathNavigationStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): FlyingPathNavigation;
}

/** JVM class net.minecraft.world.entity.ai.navigation.GroundPathNavigation. */
export interface GroundPathNavigationMembers {
  readonly __javaSupertypes?: readonly [PathNavigation];
  canNavigateGround(): boolean;
  canUpdatePath(): boolean;
  createPath(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_level_pathfinder.Path;
  createPathFinder(arg0: number): j_net_minecraft_world_level_pathfinder.PathFinder;
  getTempMobPos(): j_net_minecraft_world_phys.Vec3;
  hasValidPathType(arg0: j_net_minecraft_world_level_pathfinder.PathType): boolean;
  setAvoidSun(arg0: boolean): void;
  setCanWalkOverFences(arg0: boolean): void;
  trimPath(): void;
}
export type GroundPathNavigation = GroundPathNavigationMembers & PathNavigation;
export interface GroundPathNavigationStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): GroundPathNavigation;
}

/** JVM abstract net.minecraft.world.entity.ai.navigation.PathNavigation. */
export interface PathNavigationMembers {
  canCutCorner(arg0: j_net_minecraft_world_level_pathfinder.PathType): boolean;
  canFloat(): boolean;
  canMoveDirectly(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): boolean;
  canNavigateGround(): boolean;
  canUpdatePath(): boolean;
  createPath(arg0: number, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: JavaSet<j_net_minecraft_core.BlockPos>, arg1: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: JavaSet<j_net_minecraft_core.BlockPos>, arg1: number, arg2: boolean, arg3: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: JavaSet<j_net_minecraft_core.BlockPos>, arg1: number, arg2: boolean, arg3: number, arg4: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: JavaSet<j_net_minecraft_core.BlockPos>, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number, arg3: boolean, arg4: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: JavaSet<j_net_minecraft_core.BlockPos>, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number, arg3: boolean, arg4: number, arg5: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>, arg1: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: j_net_minecraft_core.BlockPos, arg1: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPathFinder(arg0: number): j_net_minecraft_world_level_pathfinder.PathFinder;
  doStuckDetection(arg0: j_net_minecraft_world_phys.Vec3): void;
  followThePath(): void;
  getGroundY(arg0: j_net_minecraft_world_phys.Vec3): number;
  getMaxDistanceToWaypoint(): number;
  getNodeEvaluator(): j_net_minecraft_world_level_pathfinder.NodeEvaluator;
  getPath(): j_net_minecraft_world_level_pathfinder.Path | null;
  getTargetPos(): j_net_minecraft_core.BlockPos | null;
  getTempMobPos(): j_net_minecraft_world_phys.Vec3;
  hasDelayedRecomputation: boolean;
  isDone(): boolean;
  isInProgress(): boolean;
  isStableDestination(arg0: j_net_minecraft_core.BlockPos): boolean;
  isStuck(): boolean;
  lastStuckCheck: number;
  lastStuckCheckPos: j_net_minecraft_world_phys.Vec3;
  lastTimeoutCheck: bigint;
  readonly level: j_net_minecraft_world_level.Level;
  maxDistanceToWaypoint: number;
  readonly mob: j_net_minecraft_world_entity.Mob;
  moveTo(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  moveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
  moveTo(arg0: j_net_minecraft_world_entity.Entity, arg1: number): boolean;
  moveTo(arg0: j_net_minecraft_world_level_pathfinder.Path | null, arg1: number): boolean | null;
  nodeEvaluator: j_net_minecraft_world_level_pathfinder.NodeEvaluator;
  path: j_net_minecraft_world_level_pathfinder.Path | null;
  readonly pathFinder: j_net_minecraft_world_level_pathfinder.PathFinder;
  recomputePath(): void;
  resetMaxVisitedNodesMultiplier(): void;
  setCanFloat(arg0: boolean): void;
  setCanOpenDoors(arg0: boolean): void;
  setMaxVisitedNodesMultiplier(arg0: number): void;
  setRequiredPathLength(arg0: number): void;
  setSpeedModifier(arg0: number): void;
  shouldRecomputePath(arg0: j_net_minecraft_core.BlockPos): boolean;
  speedModifier: number;
  stop(): void;
  tick: (number) & { (): void };
  timeLastRecompute: bigint;
  timeoutCachedNode: j_net_minecraft_core.Vec3i;
  timeoutLimit: number;
  timeoutTimer: bigint;
  trimPath(): void;
  updatePathfinderMaxVisitedNodes(): void;
}
export type PathNavigation = PathNavigationMembers;
export interface PathNavigationStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): PathNavigation;
  isClearForMovementBetween(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: boolean): boolean;
}

/** JVM class net.minecraft.world.entity.ai.navigation.WallClimberNavigation. */
export interface WallClimberNavigationMembers {
  readonly __javaSupertypes?: readonly [GroundPathNavigation];
  createPath(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): j_net_minecraft_world_level_pathfinder.Path | null;
  createPath(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_level_pathfinder.Path;
  moveTo(arg0: j_net_minecraft_world_entity.Entity, arg1: number): boolean;
  tick(): void;
}
export type WallClimberNavigation = WallClimberNavigationMembers & GroundPathNavigation;
export interface WallClimberNavigationStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): WallClimberNavigation;
}

/** JVM class net.minecraft.world.entity.ai.navigation.WaterBoundPathNavigation. */
export interface WaterBoundPathNavigationMembers {
  readonly __javaSupertypes?: readonly [PathNavigation];
  canMoveDirectly(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): boolean;
  canNavigateGround(): boolean;
  canUpdatePath(): boolean;
  createPathFinder(arg0: number): j_net_minecraft_world_level_pathfinder.PathFinder;
  getGroundY(arg0: j_net_minecraft_world_phys.Vec3): number;
  getTempMobPos(): j_net_minecraft_world_phys.Vec3;
  isStableDestination(arg0: j_net_minecraft_core.BlockPos): boolean;
  setCanFloat(arg0: boolean): void;
}
export type WaterBoundPathNavigation = WaterBoundPathNavigationMembers & PathNavigation;
export interface WaterBoundPathNavigationStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_level.Level): WaterBoundPathNavigation;
}
