// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';

/** JVM class net.minecraft.world.level.redstone.CollectingNeighborUpdater. */
export interface CollectingNeighborUpdaterMembers {
  readonly __javaSupertypes?: readonly [NeighborUpdater];
  neighborChanged(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: Orientation | null): void | null;
  neighborChanged(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: Orientation | null, arg4: boolean): void | null;
  shapeUpdate(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: number): void;
  updateNeighborsAtExceptFromFacing(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_core.Direction | null, arg3: Orientation | null): void | null;
}
export type CollectingNeighborUpdater = CollectingNeighborUpdaterMembers & NeighborUpdater;
export interface CollectingNeighborUpdaterStatics {
  new(arg0: j_net_minecraft_world_level.Level, arg1: number): CollectingNeighborUpdater;
}

/** JVM class net.minecraft.world.level.redstone.DefaultRedstoneWireEvaluator. */
export interface DefaultRedstoneWireEvaluatorMembers {
  readonly __javaSupertypes?: readonly [RedstoneWireEvaluator];
  calculateTargetStrength(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  updatePowerStrength(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: Orientation | null, arg4: boolean): void | null;
}
export type DefaultRedstoneWireEvaluator = DefaultRedstoneWireEvaluatorMembers & RedstoneWireEvaluator;
export interface DefaultRedstoneWireEvaluatorStatics {
  new(arg0: j_net_minecraft_world_level_block.RedStoneWireBlock): DefaultRedstoneWireEvaluator;
}

/** JVM class net.minecraft.world.level.redstone.ExperimentalRedstoneUtils. */
export interface ExperimentalRedstoneUtilsMembers {
}
export type ExperimentalRedstoneUtils = ExperimentalRedstoneUtilsMembers;
export interface ExperimentalRedstoneUtilsStatics {
  new(): ExperimentalRedstoneUtils;
  initialOrientation(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Direction | null, arg2: j_net_minecraft_core.Direction | null): Orientation | null;
  withFront(arg0: Orientation | null, arg1: j_net_minecraft_core.Direction): Orientation | null;
}

/** JVM class net.minecraft.world.level.redstone.ExperimentalRedstoneWireEvaluator. */
export interface ExperimentalRedstoneWireEvaluatorMembers {
  readonly __javaSupertypes?: readonly [RedstoneWireEvaluator];
  getWireSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): number;
  updatePowerStrength(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: Orientation | null, arg4: boolean): void | null;
}
export type ExperimentalRedstoneWireEvaluator = ExperimentalRedstoneWireEvaluatorMembers & RedstoneWireEvaluator;
export interface ExperimentalRedstoneWireEvaluatorStatics {
  new(arg0: j_net_minecraft_world_level_block.RedStoneWireBlock): ExperimentalRedstoneWireEvaluator;
}

/** JVM class net.minecraft.world.level.redstone.InstantNeighborUpdater. */
export interface InstantNeighborUpdaterMembers {
  readonly __javaSupertypes?: readonly [NeighborUpdater];
  neighborChanged(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: Orientation | null): void | null;
  neighborChanged(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: Orientation | null, arg4: boolean): void | null;
  shapeUpdate(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: number): void;
}
export type InstantNeighborUpdater = InstantNeighborUpdaterMembers & NeighborUpdater;
export interface InstantNeighborUpdaterStatics {
  new(arg0: j_net_minecraft_world_level.Level): InstantNeighborUpdater;
}

/** JVM interface net.minecraft.world.level.redstone.NeighborUpdater. */
export interface NeighborUpdaterMembers {
  neighborChanged(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: Orientation | null): void | null;
  neighborChanged(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: Orientation | null, arg4: boolean): void | null;
  shapeUpdate(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: number): void;
  updateNeighborsAtExceptFromFacing(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_core.Direction | null, arg3: Orientation | null): void | null;
}
export type NeighborUpdater = NeighborUpdaterMembers;
export interface NeighborUpdaterStatics {
  readonly UPDATE_ORDER: Array<j_net_minecraft_core.Direction>;
  executeShapeUpdate(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_level_block_state.BlockState, arg5: number, arg6: number): void;
  executeUpdate(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Block, arg4: Orientation | null, arg5: boolean): void | null;
  executeUpdate(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Block, arg4: Orientation | null, arg5: boolean, arg6: j_net_minecraft_core.BlockPos): void | null;
}

/** JVM class net.minecraft.world.level.redstone.Orientation. */
export interface OrientationMembers {
  getDirections(): JavaList<j_net_minecraft_core.Direction>;
  getFront(): j_net_minecraft_core.Direction;
  getHorizontalDirections(): JavaList<j_net_minecraft_core.Direction>;
  getIndex(): number;
  getSide(): j_net_minecraft_core.Direction;
  getSideBias(): Orientation_SideBias;
  getUp(): j_net_minecraft_core.Direction;
  getVerticalDirections(): JavaList<j_net_minecraft_core.Direction>;
  toString(): string;
  withFront(arg0: j_net_minecraft_core.Direction): Orientation;
  withFrontAdjustSideBias(arg0: j_net_minecraft_core.Direction): Orientation;
  withFrontPreserveUp(arg0: j_net_minecraft_core.Direction): Orientation;
  withMirror(): Orientation;
  withSideBias(arg0: Orientation_SideBias): Orientation;
  withUp(arg0: j_net_minecraft_core.Direction): Orientation;
}
export type Orientation = OrientationMembers;
export interface OrientationStatics {
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Orientation>;
  fromIndex(arg0: number): Orientation;
  generateIndex(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_core.Direction, arg2: Orientation_SideBias): number;
  of(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_core.Direction, arg2: Orientation_SideBias): Orientation;
  random(arg0: j_net_minecraft_util.RandomSource): Orientation;
}

/** Live JVM enum net.minecraft.world.level.redstone.Orientation$SideBias; constants are host handles, not strings. */
export type Orientation_SideBias = JavaEnum<"net.minecraft.world.level.redstone.Orientation$SideBias", "LEFT" | "RIGHT"> & Orientation_SideBiasMembers;
export interface Orientation_SideBiasMembers {
  getOpposite(): Orientation_SideBias;
  toString(): string;
}
export interface Orientation_SideBiasStatics {
  readonly LEFT: Orientation_SideBias;
  readonly RIGHT: Orientation_SideBias;
  valueOf(arg0: string): Orientation_SideBias;
  values(): Array<Orientation_SideBias>;
}

/** JVM class net.minecraft.world.level.redstone.Redstone. */
export interface RedstoneMembers {
}
export type Redstone = RedstoneMembers;
export interface RedstoneStatics {
  new(): Redstone;
  readonly BITS: 4;
  readonly MASK: 15;
  readonly SIGNAL_MAX: 15;
  readonly SIGNAL_MIN: 0;
  readonly SIGNAL_NONE: 0;
}

/** JVM abstract net.minecraft.world.level.redstone.RedstoneWireEvaluator. */
export interface RedstoneWireEvaluatorMembers {
  getBlockSignal(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  getIncomingWireSignal(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  getWireSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): number;
  updatePowerStrength(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: Orientation | null, arg4: boolean): void | null;
  readonly wireBlock: j_net_minecraft_world_level_block.RedStoneWireBlock;
}
export type RedstoneWireEvaluator = RedstoneWireEvaluatorMembers;
export interface RedstoneWireEvaluatorStatics {
  new(arg0: j_net_minecraft_world_level_block.RedStoneWireBlock): RedstoneWireEvaluator;
}
