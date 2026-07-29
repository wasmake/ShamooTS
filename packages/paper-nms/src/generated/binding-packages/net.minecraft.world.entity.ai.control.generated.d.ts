// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.ai.control.BodyRotationControl. */
export interface BodyRotationControlMembers {
  readonly __javaSupertypes?: readonly [Control_2];
  clientTick(): void;
}
export type BodyRotationControl = BodyRotationControlMembers & Control_2;
export interface BodyRotationControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): BodyRotationControl;
}

/** JVM interface net.minecraft.world.entity.ai.control.Control. */
export interface Control_2Members {
  rotateTowards(arg0: number, arg1: number, arg2: number): number;
}
export type Control_2 = Control_2Members;
export interface Control_2Statics {
}

/** JVM class net.minecraft.world.entity.ai.control.FlyingMoveControl. */
export interface FlyingMoveControlMembers {
  readonly __javaSupertypes?: readonly [MoveControl];
  tick(): void;
}
export type FlyingMoveControl = FlyingMoveControlMembers & MoveControl;
export interface FlyingMoveControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number, arg2: boolean): FlyingMoveControl;
}

/** JVM class net.minecraft.world.entity.ai.control.JumpControl. */
export interface JumpControlMembers {
  readonly __javaSupertypes?: readonly [Control_2];
  jump(): void;
  tick(): void;
}
export type JumpControl = JumpControlMembers & Control_2;
export interface JumpControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): JumpControl;
}

/** JVM class net.minecraft.world.entity.ai.control.LookControl. */
export interface LookControlMembers {
  readonly __javaSupertypes?: readonly [Control_2];
  getWantedX(): number;
  getWantedY(): number;
  getWantedZ(): number;
  isLookingAtTarget(): boolean;
  setLookAt(arg0: number, arg1: number, arg2: number): void;
  setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  setLookAt(arg0: j_net_minecraft_world_entity.Entity): void;
  setLookAt(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: number): void;
  setLookAt(arg0: j_net_minecraft_world_phys.Vec3): void;
  tick(): void;
}
export type LookControl = LookControlMembers & Control_2;
export interface LookControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): LookControl;
}

/** JVM class net.minecraft.world.entity.ai.control.MoveControl. */
export interface MoveControlMembers {
  readonly __javaSupertypes?: readonly [Control_2];
  getSpeedModifier(): number;
  getWantedX(): number;
  getWantedY(): number;
  getWantedZ(): number;
  hasWanted(): boolean;
  setWait(): void;
  setWantedPosition(arg0: number, arg1: number, arg2: number, arg3: number): void;
  strafe(arg0: number, arg1: number): void;
  tick(): void;
}
export type MoveControl = MoveControlMembers & Control_2;
export interface MoveControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): MoveControl;
  readonly MIN_SPEED: 0.0005;
  readonly MIN_SPEED_SQR: 2.5000003e-7;
}

/** Live JVM enum net.minecraft.world.entity.ai.control.MoveControl$Operation; constants are host handles, not strings. */
export type MoveControl_Operation = JavaEnum<"net.minecraft.world.entity.ai.control.MoveControl$Operation", "JUMPING" | "MOVE_TO" | "STRAFE" | "WAIT"> & MoveControl_OperationMembers;
export interface MoveControl_OperationMembers {
}
export interface MoveControl_OperationStatics {
  readonly JUMPING: MoveControl_Operation;
  readonly MOVE_TO: MoveControl_Operation;
  readonly STRAFE: MoveControl_Operation;
  readonly WAIT: MoveControl_Operation;
  valueOf(arg0: string): MoveControl_Operation;
  values(): Array<MoveControl_Operation>;
}

/** JVM class net.minecraft.world.entity.ai.control.SmoothSwimmingLookControl. */
export interface SmoothSwimmingLookControlMembers {
  readonly __javaSupertypes?: readonly [LookControl];
  tick(): void;
}
export type SmoothSwimmingLookControl = SmoothSwimmingLookControlMembers & LookControl;
export interface SmoothSwimmingLookControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number): SmoothSwimmingLookControl;
}

/** JVM class net.minecraft.world.entity.ai.control.SmoothSwimmingMoveControl. */
export interface SmoothSwimmingMoveControlMembers {
  readonly __javaSupertypes?: readonly [MoveControl];
  tick(): void;
}
export type SmoothSwimmingMoveControl = SmoothSwimmingMoveControlMembers & MoveControl;
export interface SmoothSwimmingMoveControlStatics {
  new(arg0: j_net_minecraft_world_entity.Mob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): SmoothSwimmingMoveControl;
}
