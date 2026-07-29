// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_context from './net.minecraft.world.item.context.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';

/** JVM class net.minecraft.world.level.block.piston.MovingPistonBlock. */
export interface MovingPistonBlockMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block.BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MovingPistonBlock]>;
  destroy(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type MovingPistonBlock = MovingPistonBlockMembers & j_net_minecraft_world_level_block.BaseEntityBlock;
export interface MovingPistonBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MovingPistonBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MovingPistonBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly TYPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.PistonType>;
  newMovingBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.Direction, arg4: boolean, arg5: boolean): j_net_minecraft_world_level_block_entity.BlockEntity;
}

/** JVM class net.minecraft.world.level.block.piston.PistonBaseBlock. */
export interface PistonBaseBlockMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block.DirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PistonBaseBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type PistonBaseBlock = PistonBaseBlockMembers & j_net_minecraft_world_level_block.DirectionalBlock;
export interface PistonBaseBlockStatics {
  new(arg0: boolean, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PistonBaseBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PistonBaseBlock]>;
  readonly EXTENDED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly PLATFORM_THICKNESS: 4;
  readonly TRIGGER_CONTRACT: 1;
  readonly TRIGGER_DROP: 2;
  readonly TRIGGER_EXTEND: 0;
  isPushable(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: boolean, arg5: j_net_minecraft_core.Direction): boolean;
}

/** JVM class net.minecraft.world.level.block.piston.PistonHeadBlock. */
export interface PistonHeadBlockMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block.DirectionalBlock];
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
}
export type PistonHeadBlock = PistonHeadBlockMembers & j_net_minecraft_world_level_block.DirectionalBlock;
export interface PistonHeadBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PistonHeadBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PistonHeadBlock]>;
  readonly PLATFORM_THICKNESS: 4;
  readonly SHORT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly TYPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.PistonType>;
}

/** JVM class net.minecraft.world.level.block.piston.PistonMath. */
export interface PistonMathMembers {
}
export type PistonMath = PistonMathMembers;
export interface PistonMathStatics {
  new(): PistonMath;
  getMovementArea(arg0: j_net_minecraft_world_phys.AABB, arg1: j_net_minecraft_core.Direction, arg2: number): j_net_minecraft_world_phys.AABB;
}

/** JVM class net.minecraft.world.level.block.piston.PistonMovingBlockEntity. */
export interface PistonMovingBlockEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block_entity.BlockEntity];
  finalTick(): void;
  getCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getDirection(): j_net_minecraft_core.Direction;
  getLastTicked(): bigint;
  getMovedState(): j_net_minecraft_world_level_block_state.BlockState;
  getMovementDirection(): j_net_minecraft_core.Direction;
  getProgress(arg0: number): number;
  getPushDirection(): j_net_minecraft_core.Direction;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  getXOff(arg0: number): number;
  getYOff(arg0: number): number;
  getZOff(arg0: number): number;
  isExtending(): boolean;
  isSourcePiston(): boolean;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  setLevel(arg0: j_net_minecraft_world_level.Level): void;
}
export type PistonMovingBlockEntity = PistonMovingBlockEntityMembers & j_net_minecraft_world_level_block_entity.BlockEntity;
export interface PistonMovingBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): PistonMovingBlockEntity;
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.Direction, arg4: boolean, arg5: boolean): PistonMovingBlockEntity;
  readonly TICK_MOVEMENT: 0.51;
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: PistonMovingBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.piston.PistonStructureResolver. */
export interface PistonStructureResolverMembers {
  getPushDirection(): j_net_minecraft_core.Direction;
  getToDestroy(): JavaList<j_net_minecraft_core.BlockPos>;
  getToPush(): JavaList<j_net_minecraft_core.BlockPos>;
  resolve(): boolean;
}
export type PistonStructureResolver = PistonStructureResolverMembers;
export interface PistonStructureResolverStatics {
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: boolean): PistonStructureResolver;
  readonly MAX_PUSH_DEPTH: 12;
}
