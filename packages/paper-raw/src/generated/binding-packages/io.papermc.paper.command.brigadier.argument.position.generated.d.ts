// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';

/** JVM interface io.papermc.paper.command.brigadier.argument.position.ColumnBlockPosition. */
export interface ColumnBlockPositionMembers {
  blockX(): number;
  blockZ(): number;
  toPosition(arg0: number): j_io_papermc_paper_math.BlockPosition;
}
export type ColumnBlockPosition = ColumnBlockPositionMembers;
export interface ColumnBlockPositionStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.position.ColumnFinePosition. */
export interface ColumnFinePositionMembers {
  toPosition(arg0: number): j_io_papermc_paper_math.FinePosition;
  x(): number;
  z(): number;
}
export type ColumnFinePosition = ColumnFinePositionMembers;
export interface ColumnFinePositionStatics {
}
