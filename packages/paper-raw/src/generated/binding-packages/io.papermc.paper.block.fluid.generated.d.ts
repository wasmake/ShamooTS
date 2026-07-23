// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface io.papermc.paper.block.fluid.FluidData. */
export interface FluidDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">];
  clone(): FluidData;
  computeFlowDirection(arg0: j_org_bukkit.Location): j_org_bukkit_util.Vector;
  computeHeight(arg0: j_org_bukkit.Location): number;
  getFluidType(): j_org_bukkit.Fluid;
  getLevel(): number;
  isSource(): boolean;
}
export type FluidData = FluidDataMembers & JavaOpaque<"java.lang.Cloneable">;
export interface FluidDataStatics {
}
