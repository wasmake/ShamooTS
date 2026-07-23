// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.level.portal.PortalForcer. */
export interface PortalForcerMembers {
  createPortal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction_Axis): JavaOptional<j_net_minecraft.BlockUtil_FoundRectangle>;
  createPortal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction_Axis, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): JavaOptional<j_net_minecraft.BlockUtil_FoundRectangle> | null;
  findClosestPortalPosition(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_border.WorldBorder, arg2: number): JavaOptional<j_net_minecraft_core.BlockPos>;
  findClosestPortalPosition(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_level_border.WorldBorder): JavaOptional<j_net_minecraft_core.BlockPos>;
}
export type PortalForcer = PortalForcerMembers;
export interface PortalForcerStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel): PortalForcer;
  readonly TICKET_RADIUS: 3;
}

/** JVM class net.minecraft.world.level.portal.PortalShape. */
export interface PortalShapeMembers {
  createPortalBlocks(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_entity.Entity): boolean;
  isComplete(): boolean;
  isValid(): boolean;
}
export type PortalShape = PortalShapeMembers;
export interface PortalShapeStatics {
  readonly MAX_HEIGHT: 21;
  readonly MAX_WIDTH: 21;
  findAnyShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction_Axis): PortalShape;
  findCollisionFreePosition(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.EntityDimensions): j_net_minecraft_world_phys.Vec3;
  findEmptyPortalShape(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction_Axis): JavaOptional<PortalShape>;
  findPortalShape(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: JavaPredicate<PortalShape>, arg3: j_net_minecraft_core.Direction_Axis): JavaOptional<PortalShape>;
  getRelativePosition(arg0: j_net_minecraft.BlockUtil_FoundRectangle, arg1: j_net_minecraft_core.Direction_Axis, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_entity.EntityDimensions): j_net_minecraft_world_phys.Vec3;
}

/** JVM record net.minecraft.world.level.portal.TeleportTransition. */
export interface TeleportTransitionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  asPassenger(): boolean;
  cause(): JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">;
  deltaMovement(): j_net_minecraft_world_phys.Vec3;
  equals(arg0: object): boolean;
  hashCode(): number;
  missingRespawnBlock(): boolean;
  newLevel(): j_net_minecraft_server_level.ServerLevel;
  position(): j_net_minecraft_world_phys.Vec3;
  postTeleportTransition(): TeleportTransition_PostTeleportTransition;
  relatives(): JavaSet<j_net_minecraft_world_entity.Relative>;
  toString(): string;
  transitionAsPassenger(): TeleportTransition;
  withPosition(arg0: j_net_minecraft_world_phys.Vec3): TeleportTransition;
  withRotation(arg0: number, arg1: number): TeleportTransition;
  xRot(): number;
  yRot(): number;
}
export type TeleportTransition = TeleportTransitionMembers & JavaOpaque<"java.lang.Record">;
export interface TeleportTransitionStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: TeleportTransition_PostTeleportTransition): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: TeleportTransition_PostTeleportTransition, arg3: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: JavaSet<j_net_minecraft_world_entity.Relative>, arg6: TeleportTransition_PostTeleportTransition): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: JavaSet<j_net_minecraft_world_entity.Relative>, arg6: TeleportTransition_PostTeleportTransition, arg7: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: TeleportTransition_PostTeleportTransition): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: TeleportTransition_PostTeleportTransition, arg6: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: JavaSet<j_net_minecraft_world_entity.Relative>, arg8: TeleportTransition_PostTeleportTransition): TeleportTransition;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: JavaSet<j_net_minecraft_world_entity.Relative>, arg8: TeleportTransition_PostTeleportTransition, arg9: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): TeleportTransition;
  new(arg0: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): TeleportTransition;
  readonly DO_NOTHING: TeleportTransition_PostTeleportTransition;
  readonly PLACE_PORTAL_TICKET: TeleportTransition_PostTeleportTransition;
  readonly PLAY_PORTAL_SOUND: TeleportTransition_PostTeleportTransition;
  missingRespawnBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: TeleportTransition_PostTeleportTransition): TeleportTransition;
}

/** JVM interface net.minecraft.world.level.portal.TeleportTransition$PostTeleportTransition. */
export interface TeleportTransition_PostTeleportTransitionMembers {
  onTransition(arg0: j_net_minecraft_world_entity.Entity): void;
  then(arg0: TeleportTransition_PostTeleportTransition): TeleportTransition_PostTeleportTransition;
}
export type TeleportTransition_PostTeleportTransition = TeleportTransition_PostTeleportTransitionMembers;
export interface TeleportTransition_PostTeleportTransitionStatics {
}
