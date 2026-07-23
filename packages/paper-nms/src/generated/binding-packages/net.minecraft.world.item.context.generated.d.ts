// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.item.context.BlockPlaceContext. */
export interface BlockPlaceContextMembers {
  readonly __javaSupertypes?: readonly [UseOnContext];
  canPlace(): boolean;
  getClickedPos(): j_net_minecraft_core.BlockPos;
  getNearestLookingDirection(): j_net_minecraft_core.Direction;
  getNearestLookingDirections(): Array<j_net_minecraft_core.Direction>;
  getNearestLookingVerticalDirection(): j_net_minecraft_core.Direction;
  replaceClicked: boolean;
  replacingClickedOnBlock(): boolean;
}
export type BlockPlaceContext = BlockPlaceContextMembers & UseOnContext;
export interface BlockPlaceContextStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_phys.BlockHitResult): BlockPlaceContext;
  new(arg0: UseOnContext): BlockPlaceContext;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_world.InteractionHand, arg3: j_net_minecraft_world_item.ItemStack, arg4: j_net_minecraft_world_phys.BlockHitResult): BlockPlaceContext;
  at(arg0: BlockPlaceContext, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): BlockPlaceContext;
}

/** JVM class net.minecraft.world.item.context.DirectionalPlaceContext. */
export interface DirectionalPlaceContextMembers {
  readonly __javaSupertypes?: readonly [BlockPlaceContext];
  canPlace(): boolean;
  getClickedPos(): j_net_minecraft_core.BlockPos;
  getHorizontalDirection(): j_net_minecraft_core.Direction;
  getNearestLookingDirection(): j_net_minecraft_core.Direction;
  getNearestLookingDirections(): Array<j_net_minecraft_core.Direction>;
  getRotation(): number;
  isSecondaryUseActive(): boolean;
  replacingClickedOnBlock(): boolean;
}
export type DirectionalPlaceContext = DirectionalPlaceContextMembers & BlockPlaceContext;
export interface DirectionalPlaceContextStatics {
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_world_item.ItemStack, arg4: j_net_minecraft_core.Direction): DirectionalPlaceContext;
}

/** JVM class net.minecraft.world.item.context.UseOnContext. */
export interface UseOnContextMembers {
  getClickLocation(): j_net_minecraft_world_phys.Vec3;
  getClickedFace(): j_net_minecraft_core.Direction;
  getClickedPos(): j_net_minecraft_core.BlockPos;
  getHand(): j_net_minecraft_world.InteractionHand;
  getHitResult(): j_net_minecraft_world_phys.BlockHitResult;
  getHorizontalDirection(): j_net_minecraft_core.Direction;
  getItemInHand(): j_net_minecraft_world_item.ItemStack;
  getLevel(): j_net_minecraft_world_level.Level;
  getPlayer(): j_net_minecraft_world_entity_player.Player | null;
  getRotation(): number;
  isInside(): boolean;
  isSecondaryUseActive(): boolean;
}
export type UseOnContext = UseOnContextMembers;
export interface UseOnContextStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand, arg2: j_net_minecraft_world_phys.BlockHitResult): UseOnContext;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_world.InteractionHand, arg3: j_net_minecraft_world_item.ItemStack, arg4: j_net_minecraft_world_phys.BlockHitResult): UseOnContext;
}
