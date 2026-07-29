// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.level.pathfinder.AmphibiousNodeEvaluator. */
export interface AmphibiousNodeEvaluatorMembers {
  readonly __javaSupertypes?: readonly [WalkNodeEvaluator];
  done(): void;
  getNeighbors(arg0: Array<Node>, arg1: Node): number;
  getPathType(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number): PathType;
  getStart(): Node;
  getTarget(arg0: number, arg1: number, arg2: number): Target;
  prepare(arg0: j_net_minecraft_world_level.PathNavigationRegion, arg1: j_net_minecraft_world_entity.Mob): void;
}
export type AmphibiousNodeEvaluator = AmphibiousNodeEvaluatorMembers & WalkNodeEvaluator;
export interface AmphibiousNodeEvaluatorStatics {
  new(arg0: boolean): AmphibiousNodeEvaluator;
}

/** JVM class net.minecraft.world.level.pathfinder.BinaryHeap. */
export interface BinaryHeapMembers {
  changeCost(arg0: Node, arg1: number): void;
  clear(): void;
  getHeap(): Array<Node>;
  insert(arg0: Node): Node;
  isEmpty(): boolean;
  peek(): Node;
  pop(): Node;
  remove(arg0: Node): void;
  size(): number;
}
export type BinaryHeap = BinaryHeapMembers;
export interface BinaryHeapStatics {
  new(): BinaryHeap;
}

/** JVM class net.minecraft.world.level.pathfinder.FlyNodeEvaluator. */
export interface FlyNodeEvaluatorMembers {
  readonly __javaSupertypes?: readonly [WalkNodeEvaluator];
  done(): void;
  getNeighbors(arg0: Array<Node>, arg1: Node): number;
  getPathType(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number): PathType;
  getStart(): Node;
  getTarget(arg0: number, arg1: number, arg2: number): Target;
  prepare(arg0: j_net_minecraft_world_level.PathNavigationRegion, arg1: j_net_minecraft_world_entity.Mob): void;
}
export type FlyNodeEvaluator = FlyNodeEvaluatorMembers & WalkNodeEvaluator;
export interface FlyNodeEvaluatorStatics {
  new(): FlyNodeEvaluator;
}

/** JVM class net.minecraft.world.level.pathfinder.Node. */
export interface NodeMembers {
  asBlockPos(): j_net_minecraft_core.BlockPos;
  asVec3(): j_net_minecraft_world_phys.Vec3;
  cameFrom: Node | null;
  cloneAndMove(arg0: number, arg1: number, arg2: number): Node;
  closed: boolean;
  costMalus: number;
  distanceManhattan(arg0: j_net_minecraft_core.BlockPos): number;
  distanceManhattan(arg0: Node): number;
  distanceTo(arg0: j_net_minecraft_core.BlockPos): number;
  distanceTo(arg0: Node): number;
  distanceToSqr(arg0: j_net_minecraft_core.BlockPos): number;
  distanceToSqr(arg0: Node): number;
  distanceToXZ(arg0: Node): number;
  equals(arg0: object): boolean;
  f: number;
  g: number;
  h: number;
  hashCode(): number;
  heapIdx: number;
  inOpenSet(): boolean;
  toString(): string;
  type: PathType;
  walkedDistance: number;
  writeToStream(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
export type Node = NodeMembers;
export interface NodeStatics {
  new(arg0: number, arg1: number, arg2: number): Node;
  createFromStream(arg0: j_net_minecraft_network.FriendlyByteBuf): Node;
  createHash(arg0: number, arg1: number, arg2: number): number;
}

/** JVM abstract net.minecraft.world.level.pathfinder.NodeEvaluator. */
export interface NodeEvaluatorMembers {
  canFloat(): boolean;
  canOpenDoors(): boolean;
  canPassDoors(): boolean;
  canWalkOverFences(): boolean;
  done(): void;
  getNeighbors(arg0: Array<Node>, arg1: Node): number;
  getPathType(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_core.BlockPos): PathType;
  getPathType(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number): PathType;
  getPathTypeOfMob(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity.Mob): PathType;
  getStart(): Node;
  getTarget(arg0: number, arg1: number, arg2: number): Target;
  prepare(arg0: j_net_minecraft_world_level.PathNavigationRegion, arg1: j_net_minecraft_world_entity.Mob): void;
  setCanFloat(arg0: boolean): void;
  setCanOpenDoors(arg0: boolean): void;
  setCanPassDoors(arg0: boolean): void;
  setCanWalkOverFences(arg0: boolean): void;
}
export type NodeEvaluator = NodeEvaluatorMembers;
export interface NodeEvaluatorStatics {
  isBurningBlock(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.pathfinder.Path. */
export interface PathMembers {
  advance(): void;
  canReach(): boolean;
  copy(): Path;
  debugData(): Path_DebugData | null;
  getDistToTarget(): number;
  getEndNode(): Node | null;
  getEntityPosAtNode(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_phys.Vec3;
  getNextEntityPos(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_phys.Vec3;
  getNextNode(): Node;
  getNextNodeIndex(): number;
  getNextNodePos(): j_net_minecraft_core.BlockPos;
  getNode(arg0: number): Node;
  getNodeCount(): number;
  getNodePos(arg0: number): j_net_minecraft_core.BlockPos;
  getPreviousNode(): Node | null;
  getTarget(): j_net_minecraft_core.BlockPos;
  isDone(): boolean;
  readonly nodes: JavaList<Node>;
  notStarted(): boolean;
  replaceNode(arg0: number, arg1: Node): void;
  sameAs(arg0: Path | null): boolean;
  setNextNodeIndex(arg0: number): void;
  toString(): string;
  truncateNodes(arg0: number): void;
  writeToStream(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type Path = PathMembers;
export interface PathStatics {
  new(arg0: JavaList<Node>, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): Path;
  createFromStream(arg0: j_net_minecraft_network.FriendlyByteBuf): Path;
}

/** JVM record net.minecraft.world.level.pathfinder.Path$DebugData. */
export interface Path_DebugDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  closedSet(): Array<Node>;
  equals(arg0: object): boolean;
  hashCode(): number;
  openSet(): Array<Node>;
  targetNodes(): JavaSet<Target>;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type Path_DebugData = Path_DebugDataMembers & JavaOpaque<"java.lang.Record">;
export interface Path_DebugDataStatics {
  new(arg0: Array<Node>, arg1: Array<Node>, arg2: JavaSet<Target>): Path_DebugData;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): Path_DebugData;
}

/** Live JVM enum net.minecraft.world.level.pathfinder.PathComputationType; constants are host handles, not strings. */
export type PathComputationType = JavaEnum<"net.minecraft.world.level.pathfinder.PathComputationType", "AIR" | "LAND" | "WATER"> & PathComputationTypeMembers;
export interface PathComputationTypeMembers {
}
export interface PathComputationTypeStatics {
  readonly AIR: PathComputationType;
  readonly LAND: PathComputationType;
  readonly WATER: PathComputationType;
  valueOf(arg0: string): PathComputationType;
  values(): Array<PathComputationType>;
}

/** JVM class net.minecraft.world.level.pathfinder.PathFinder. */
export interface PathFinderMembers {
  findPath(arg0: j_net_minecraft_world_level.PathNavigationRegion, arg1: j_net_minecraft_world_entity.Mob, arg2: JavaSet<j_net_minecraft_core.BlockPos>, arg3: number, arg4: number, arg5: number): Path | null;
  readonly nodeEvaluator: NodeEvaluator;
  setMaxVisitedNodes(arg0: number): void;
}
export type PathFinder = PathFinderMembers;
export interface PathFinderStatics {
  new(arg0: NodeEvaluator, arg1: number): PathFinder;
}

/** JVM class net.minecraft.world.level.pathfinder.PathfindingContext. */
export interface PathfindingContextMembers {
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getPathTypeFromState(arg0: number, arg1: number, arg2: number): PathType;
  level(): j_net_minecraft_world_level.CollisionGetter;
  mobPosition(): j_net_minecraft_core.BlockPos;
}
export type PathfindingContext = PathfindingContextMembers;
export interface PathfindingContextStatics {
  new(arg0: j_net_minecraft_world_level.CollisionGetter, arg1: j_net_minecraft_world_entity.Mob): PathfindingContext;
}

/** Live JVM enum net.minecraft.world.level.pathfinder.PathType; constants are host handles, not strings. */
export type PathType = JavaEnum<"net.minecraft.world.level.pathfinder.PathType", "BLOCKED" | "BREACH" | "COCOA" | "DAMAGE_CAUTIOUS" | "DAMAGE_FIRE" | "DAMAGE_OTHER" | "DANGER_FIRE" | "DANGER_OTHER" | "DANGER_POWDER_SNOW" | "DANGER_TRAPDOOR" | "DOOR_IRON_CLOSED" | "DOOR_OPEN" | "DOOR_WOOD_CLOSED" | "FENCE" | "LAVA" | "LEAVES" | "OPEN" | "POWDER_SNOW" | "RAIL" | "STICKY_HONEY" | "TRAPDOOR" | "UNPASSABLE_RAIL" | "WALKABLE" | "WALKABLE_DOOR" | "WATER" | "WATER_BORDER"> & PathTypeMembers;
export interface PathTypeMembers {
  getMalus(): number;
}
export interface PathTypeStatics {
  readonly BLOCKED: PathType;
  readonly BREACH: PathType;
  readonly COCOA: PathType;
  readonly DAMAGE_CAUTIOUS: PathType;
  readonly DAMAGE_FIRE: PathType;
  readonly DAMAGE_OTHER: PathType;
  readonly DANGER_FIRE: PathType;
  readonly DANGER_OTHER: PathType;
  readonly DANGER_POWDER_SNOW: PathType;
  readonly DANGER_TRAPDOOR: PathType;
  readonly DOOR_IRON_CLOSED: PathType;
  readonly DOOR_OPEN: PathType;
  readonly DOOR_WOOD_CLOSED: PathType;
  readonly FENCE: PathType;
  readonly LAVA: PathType;
  readonly LEAVES: PathType;
  readonly OPEN: PathType;
  readonly POWDER_SNOW: PathType;
  readonly RAIL: PathType;
  readonly STICKY_HONEY: PathType;
  readonly TRAPDOOR: PathType;
  readonly UNPASSABLE_RAIL: PathType;
  readonly WALKABLE: PathType;
  readonly WALKABLE_DOOR: PathType;
  readonly WATER: PathType;
  readonly WATER_BORDER: PathType;
  valueOf(arg0: string): PathType;
  values(): Array<PathType>;
}

/** JVM class net.minecraft.world.level.pathfinder.PathTypeCache. */
export interface PathTypeCacheMembers {
  getOrCompute(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): PathType;
  invalidate(arg0: j_net_minecraft_core.BlockPos): void;
}
export type PathTypeCache = PathTypeCacheMembers;
export interface PathTypeCacheStatics {
  new(): PathTypeCache;
}

/** JVM class net.minecraft.world.level.pathfinder.SwimNodeEvaluator. */
export interface SwimNodeEvaluatorMembers {
  readonly __javaSupertypes?: readonly [NodeEvaluator];
  done(): void;
  getNeighbors(arg0: Array<Node>, arg1: Node): number;
  getPathType(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number): PathType;
  getPathTypeOfMob(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity.Mob): PathType;
  getStart(): Node;
  getTarget(arg0: number, arg1: number, arg2: number): Target;
  prepare(arg0: j_net_minecraft_world_level.PathNavigationRegion, arg1: j_net_minecraft_world_entity.Mob): void;
}
export type SwimNodeEvaluator = SwimNodeEvaluatorMembers & NodeEvaluator;
export interface SwimNodeEvaluatorStatics {
  new(arg0: boolean): SwimNodeEvaluator;
}

/** JVM class net.minecraft.world.level.pathfinder.Target. */
export interface TargetMembers {
  readonly __javaSupertypes?: readonly [Node];
  getBestNode(): Node;
  isReached(): boolean;
  setReached(): void;
  updateBest(arg0: number, arg1: Node): void;
}
export type Target = TargetMembers & Node;
export interface TargetStatics {
  new(arg0: number, arg1: number, arg2: number): Target;
  new(arg0: Node): Target;
  createFromStream(arg0: j_net_minecraft_network.FriendlyByteBuf): Target;
}

/** JVM class net.minecraft.world.level.pathfinder.WalkNodeEvaluator. */
export interface WalkNodeEvaluatorMembers {
  readonly __javaSupertypes?: readonly [NodeEvaluator];
  done(): void;
  getNeighbors(arg0: Array<Node>, arg1: Node): number;
  getPathType(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number): PathType;
  getPathTypeOfMob(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity.Mob): PathType;
  getPathTypeWithinMobBB(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number): JavaSet<PathType>;
  getStart(): Node;
  getTarget(arg0: number, arg1: number, arg2: number): Target;
  prepare(arg0: j_net_minecraft_world_level.PathNavigationRegion, arg1: j_net_minecraft_world_entity.Mob): void;
}
export type WalkNodeEvaluator = WalkNodeEvaluatorMembers & NodeEvaluator;
export interface WalkNodeEvaluatorStatics {
  new(): WalkNodeEvaluator;
  readonly SPACE_BETWEEN_WALL_POSTS: 0.5;
  checkNeighbourBlocks(arg0: PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: PathType): PathType;
  getFloorLevel(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  getPathTypeStatic(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_core.BlockPos): PathType;
  getPathTypeStatic(arg0: PathfindingContext, arg1: j_net_minecraft_core.BlockPos_MutableBlockPos): PathType;
}
