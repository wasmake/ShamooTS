// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';

/** JVM interface io.papermc.paper.scoreboard.numbers.FixedFormat. */
export interface FixedFormatMembers {
  readonly __javaSupertypes?: readonly [NumberFormat, j_net_kyori_adventure_text.ComponentLike];
  component(): j_net_kyori_adventure_text.Component;
}
export type FixedFormat = FixedFormatMembers & NumberFormat & j_net_kyori_adventure_text.ComponentLike;
export interface FixedFormatStatics {
}

/** JVM interface io.papermc.paper.scoreboard.numbers.NumberFormat. */
export interface NumberFormatMembers {
}
export type NumberFormat = NumberFormatMembers;
export interface NumberFormatStatics {
  blank(): NumberFormat;
  fixed(arg0: j_net_kyori_adventure_text.ComponentLike): FixedFormat;
  noStyle(): StyledFormat;
  styled(arg0: j_net_kyori_adventure_text_format.Style): StyledFormat;
  styled(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): StyledFormat;
}

/** JVM interface io.papermc.paper.scoreboard.numbers.StyledFormat. */
export interface StyledFormatMembers {
  readonly __javaSupertypes?: readonly [NumberFormat, j_net_kyori_adventure_text_format.StyleBuilderApplicable];
  style(): j_net_kyori_adventure_text_format.Style;
}
export type StyledFormat = StyledFormatMembers & NumberFormat & j_net_kyori_adventure_text_format.StyleBuilderApplicable;
export interface StyledFormatStatics {
}
