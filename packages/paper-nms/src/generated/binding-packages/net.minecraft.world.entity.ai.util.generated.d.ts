// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_navigation from './net.minecraft.world.entity.ai.navigation.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.util.AirAndWaterRandomPos. */
export interface AirAndWaterRandomPosMembers {
}
export type AirAndWaterRandomPos = AirAndWaterRandomPosMembers;
export interface AirAndWaterRandomPosStatics {
  new(): AirAndWaterRandomPos;
  generateRandomPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): j_net_minecraft_core.BlockPos | null;
  getPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): j_net_minecraft_world_phys.Vec3 | null;
}

/** JVM class net.minecraft.world.entity.ai.util.AirRandomPos. */
export interface AirRandomPosMembers {
}
export type AirRandomPos = AirRandomPosMembers;
export interface AirRandomPosStatics {
  new(): AirRandomPos;
  getPosTowards(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_phys.Vec3, arg5: number): j_net_minecraft_world_phys.Vec3 | null;
}

/** JVM class net.minecraft.world.entity.ai.util.DefaultRandomPos. */
export interface DefaultRandomPosMembers {
}
export type DefaultRandomPos = DefaultRandomPosMembers;
export interface DefaultRandomPosStatics {
  new(): DefaultRandomPos;
  getPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3 | null;
  getPosAway(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3 | null;
  getPosTowards(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: j_net_minecraft_world_phys.Vec3, arg4: number): j_net_minecraft_world_phys.Vec3 | null;
}

/** JVM class net.minecraft.world.entity.ai.util.GoalUtils. */
export interface GoalUtilsMembers {
}
export type GoalUtils = GoalUtilsMembers;
export interface GoalUtilsStatics {
  new(): GoalUtils;
  hasGroundPathNavigation(arg0: j_net_minecraft_world_entity.Mob): boolean;
  hasMalus(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: j_net_minecraft_core.BlockPos): boolean;
  isNotStable(arg0: j_net_minecraft_world_entity_ai_navigation.PathNavigation, arg1: j_net_minecraft_core.BlockPos): boolean;
  isOutsideLimits(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.PathfinderMob): boolean;
  isRestricted(arg0: boolean, arg1: j_net_minecraft_world_entity.PathfinderMob, arg2: j_net_minecraft_core.BlockPos): boolean;
  isSolid(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: j_net_minecraft_core.BlockPos): boolean;
  isWater(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: j_net_minecraft_core.BlockPos): boolean;
  mobRestricted(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number): boolean;
}

/** JVM class net.minecraft.world.entity.ai.util.HoverRandomPos. */
export interface HoverRandomPosMembers {
}
export type HoverRandomPos = HoverRandomPosMembers;
export interface HoverRandomPosStatics {
  new(): HoverRandomPos;
  getPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): j_net_minecraft_world_phys.Vec3 | null;
}

/** JVM class net.minecraft.world.entity.ai.util.LandRandomPos. */
export interface LandRandomPosMembers {
}
export type LandRandomPos = LandRandomPosMembers;
export interface LandRandomPosStatics {
  new(): LandRandomPos;
  generateRandomPosTowardDirection(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: boolean, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos | null;
  getPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3 | null;
  getPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: JavaOpaque<"java.util.function.ToDoubleFunction", [j_net_minecraft_core.BlockPos]>): j_net_minecraft_world_phys.Vec3 | null;
  getPosAway(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3 | null;
  getPosTowards(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: number, arg3: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3 | null;
  movePosUpOutOfSolid(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos | null;
}

/** JVM class net.minecraft.world.entity.ai.util.RandomPos. */
export interface RandomPosMembers {
}
export type RandomPos = RandomPosMembers;
export interface RandomPosStatics {
  new(): RandomPos;
  generateRandomDirection(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number): j_net_minecraft_core.BlockPos;
  generateRandomDirectionWithinRadians(arg0: j_net_minecraft_util.RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): j_net_minecraft_core.BlockPos | null;
  generateRandomPos(arg0: JavaSupplier<j_net_minecraft_core.BlockPos>, arg1: JavaOpaque<"java.util.function.ToDoubleFunction", [j_net_minecraft_core.BlockPos]>): j_net_minecraft_world_phys.Vec3 | null;
  generateRandomPos(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: JavaSupplier<j_net_minecraft_core.BlockPos>): j_net_minecraft_world_phys.Vec3 | null;
  generateRandomPosTowardDirection(arg0: j_net_minecraft_world_entity.PathfinderMob, arg1: number, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  moveUpOutOfSolid(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: JavaPredicate<j_net_minecraft_core.BlockPos>): j_net_minecraft_core.BlockPos;
  moveUpToAboveSolid(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number, arg3: JavaPredicate<j_net_minecraft_core.BlockPos>): j_net_minecraft_core.BlockPos;
}
