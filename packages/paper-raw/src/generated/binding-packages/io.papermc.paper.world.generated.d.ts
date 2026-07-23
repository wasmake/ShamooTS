// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** Live JVM enum io.papermc.paper.world.MoonPhase; constants are host handles, not strings. */
export type MoonPhase = JavaEnum<"io.papermc.paper.world.MoonPhase", "FIRST_QUARTER" | "FULL_MOON" | "LAST_QUARTER" | "NEW_MOON" | "WANING_CRESCENT" | "WANING_GIBBOUS" | "WAXING_CRESCENT" | "WAXING_GIBBOUS"> & MoonPhaseMembers;
export interface MoonPhaseMembers {
}
export interface MoonPhaseStatics {
  readonly FIRST_QUARTER: MoonPhase;
  readonly FULL_MOON: MoonPhase;
  readonly LAST_QUARTER: MoonPhase;
  readonly NEW_MOON: MoonPhase;
  readonly WANING_CRESCENT: MoonPhase;
  readonly WANING_GIBBOUS: MoonPhase;
  readonly WAXING_CRESCENT: MoonPhase;
  readonly WAXING_GIBBOUS: MoonPhase;
  getPhase(arg0: bigint): MoonPhase;
  valueOf(arg0: string): MoonPhase;
  values(): Array<MoonPhase>;
}
