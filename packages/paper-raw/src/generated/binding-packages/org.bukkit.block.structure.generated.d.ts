// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** Live JVM enum org.bukkit.block.structure.Mirror; constants are host handles, not strings. */
export type Mirror = JavaEnum<"org.bukkit.block.structure.Mirror", "FRONT_BACK" | "LEFT_RIGHT" | "NONE"> & MirrorMembers;
export interface MirrorMembers {
}
export interface MirrorStatics {
  readonly FRONT_BACK: Mirror;
  readonly LEFT_RIGHT: Mirror;
  readonly NONE: Mirror;
  valueOf(arg0: string): Mirror;
  values(): Array<Mirror>;
}

/** Live JVM enum org.bukkit.block.structure.StructureRotation; constants are host handles, not strings. */
export type StructureRotation = JavaEnum<"org.bukkit.block.structure.StructureRotation", "CLOCKWISE_180" | "CLOCKWISE_90" | "COUNTERCLOCKWISE_90" | "NONE"> & StructureRotationMembers;
export interface StructureRotationMembers {
}
export interface StructureRotationStatics {
  readonly CLOCKWISE_180: StructureRotation;
  readonly CLOCKWISE_90: StructureRotation;
  readonly COUNTERCLOCKWISE_90: StructureRotation;
  readonly NONE: StructureRotation;
  valueOf(arg0: string): StructureRotation;
  values(): Array<StructureRotation>;
}

/** Live JVM enum org.bukkit.block.structure.UsageMode; constants are host handles, not strings. */
export type UsageMode = JavaEnum<"org.bukkit.block.structure.UsageMode", "CORNER" | "DATA" | "LOAD" | "SAVE"> & UsageModeMembers;
export interface UsageModeMembers {
}
export interface UsageModeStatics {
  readonly CORNER: UsageMode;
  readonly DATA: UsageMode;
  readonly LOAD: UsageMode;
  readonly SAVE: UsageMode;
  valueOf(arg0: string): UsageMode;
  values(): Array<UsageMode>;
}
