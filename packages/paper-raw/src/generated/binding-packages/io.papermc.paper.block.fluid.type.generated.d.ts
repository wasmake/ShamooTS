// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_block_fluid from './io.papermc.paper.block.fluid.generated.js';

/** JVM interface io.papermc.paper.block.fluid.type.FallingFluidData. */
export interface FallingFluidDataMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block_fluid.FluidData];
  isFalling(): boolean;
}
export type FallingFluidData = FallingFluidDataMembers & j_io_papermc_paper_block_fluid.FluidData;
export interface FallingFluidDataStatics {
}

/** JVM interface io.papermc.paper.block.fluid.type.FlowingFluidData. */
export interface FlowingFluidDataMembers {
  readonly __javaSupertypes?: readonly [FallingFluidData];
}
export type FlowingFluidData = FlowingFluidDataMembers & FallingFluidData;
export interface FlowingFluidDataStatics {
}
