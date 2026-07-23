// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** Live JVM enum io.papermc.paper.item.MapPostProcessing; constants are host handles, not strings. */
export type MapPostProcessing = JavaEnum<"io.papermc.paper.item.MapPostProcessing", "LOCK" | "SCALE"> & MapPostProcessingMembers;
export interface MapPostProcessingMembers {
}
export interface MapPostProcessingStatics {
  readonly LOCK: MapPostProcessing;
  readonly SCALE: MapPostProcessing;
  valueOf(arg0: string): MapPostProcessing;
  values(): Array<MapPostProcessing>;
}
