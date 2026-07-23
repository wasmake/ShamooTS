// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface io.papermc.paper.raytracing.PositionedRayTraceConfigurationBuilder. */
export interface PositionedRayTraceConfigurationBuilderMembers {
  blockFilter(arg0: JavaPredicate<j_org_bukkit_block.Block>): PositionedRayTraceConfigurationBuilder;
  direction(arg0: j_org_bukkit_util.Vector): PositionedRayTraceConfigurationBuilder;
  entityFilter(arg0: JavaPredicate<j_org_bukkit_entity.Entity>): PositionedRayTraceConfigurationBuilder;
  fluidCollisionMode(arg0: j_org_bukkit.FluidCollisionMode): PositionedRayTraceConfigurationBuilder;
  ignorePassableBlocks(arg0: boolean): PositionedRayTraceConfigurationBuilder;
  maxDistance(arg0: number): PositionedRayTraceConfigurationBuilder;
  raySize(arg0: number): PositionedRayTraceConfigurationBuilder;
  start(arg0: j_org_bukkit.Location): PositionedRayTraceConfigurationBuilder;
  targets(arg0: RayTraceTarget, ...arg1: Array<RayTraceTarget>): PositionedRayTraceConfigurationBuilder;
}
export type PositionedRayTraceConfigurationBuilder = PositionedRayTraceConfigurationBuilderMembers;
export interface PositionedRayTraceConfigurationBuilderStatics {
}

/** Live JVM enum io.papermc.paper.raytracing.RayTraceTarget; constants are host handles, not strings. */
export type RayTraceTarget = JavaEnum<"io.papermc.paper.raytracing.RayTraceTarget", "BLOCK" | "ENTITY"> & RayTraceTargetMembers;
export interface RayTraceTargetMembers {
}
export interface RayTraceTargetStatics {
  readonly BLOCK: RayTraceTarget;
  readonly ENTITY: RayTraceTarget;
  valueOf(arg0: string): RayTraceTarget;
  values(): Array<RayTraceTarget>;
}
