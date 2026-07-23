// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface io.papermc.paper.registry.data.dialog.input.BooleanDialogInput. */
export interface BooleanDialogInputMembers {
  readonly __javaSupertypes?: readonly [DialogInput];
  initial(): boolean;
  label(): j_net_kyori_adventure_text.Component;
  onFalse(): string;
  onTrue(): string;
}
export type BooleanDialogInput = BooleanDialogInputMembers & DialogInput;
export interface BooleanDialogInputStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.BooleanDialogInput$Builder. */
export interface BooleanDialogInput_BuilderMembers {
  build(): BooleanDialogInput;
  initial(arg0: boolean): BooleanDialogInput_Builder;
  onFalse(arg0: string): BooleanDialogInput_Builder;
  onTrue(arg0: string): BooleanDialogInput_Builder;
}
export type BooleanDialogInput_Builder = BooleanDialogInput_BuilderMembers;
export interface BooleanDialogInput_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.DialogInput. */
export interface DialogInputMembers {
  key(): string;
}
export type DialogInput = DialogInputMembers;
export interface DialogInputStatics {
  bool(arg0: string, arg1: j_net_kyori_adventure_text.Component): BooleanDialogInput_Builder;
  bool(arg0: string, arg1: j_net_kyori_adventure_text.Component, arg2: boolean, arg3: string, arg4: string): BooleanDialogInput;
  numberRange(arg0: string, arg1: number, arg2: j_net_kyori_adventure_text.Component, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number): NumberRangeDialogInput | null;
  numberRange(arg0: string, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number): NumberRangeDialogInput_Builder;
  singleOption(arg0: string, arg1: number, arg2: JavaList<SingleOptionDialogInput_OptionEntry>, arg3: j_net_kyori_adventure_text.Component, arg4: boolean): SingleOptionDialogInput;
  singleOption(arg0: string, arg1: j_net_kyori_adventure_text.Component, arg2: JavaList<SingleOptionDialogInput_OptionEntry>): SingleOptionDialogInput_Builder;
  text(arg0: string, arg1: number, arg2: j_net_kyori_adventure_text.Component, arg3: boolean, arg4: string, arg5: number, arg6: TextDialogInput_MultilineOptions): TextDialogInput | null;
  text(arg0: string, arg1: j_net_kyori_adventure_text.Component): TextDialogInput_Builder;
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.NumberRangeDialogInput. */
export interface NumberRangeDialogInputMembers {
  readonly __javaSupertypes?: readonly [DialogInput];
  end(): number;
  initial(): number | null;
  label(): j_net_kyori_adventure_text.Component;
  labelFormat(): string;
  start(): number;
  step(): number | null;
  width(): number;
}
export type NumberRangeDialogInput = NumberRangeDialogInputMembers & DialogInput;
export interface NumberRangeDialogInputStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.NumberRangeDialogInput$Builder. */
export interface NumberRangeDialogInput_BuilderMembers {
  build(): NumberRangeDialogInput;
  initial(arg0: number): NumberRangeDialogInput_Builder | null;
  labelFormat(arg0: string): NumberRangeDialogInput_Builder;
  step(arg0: number): NumberRangeDialogInput_Builder | null;
  width(arg0: number): NumberRangeDialogInput_Builder;
}
export type NumberRangeDialogInput_Builder = NumberRangeDialogInput_BuilderMembers;
export interface NumberRangeDialogInput_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.SingleOptionDialogInput. */
export interface SingleOptionDialogInputMembers {
  readonly __javaSupertypes?: readonly [DialogInput];
  entries(): JavaList<SingleOptionDialogInput_OptionEntry>;
  label(): j_net_kyori_adventure_text.Component;
  labelVisible(): boolean;
  width(): number;
}
export type SingleOptionDialogInput = SingleOptionDialogInputMembers & DialogInput;
export interface SingleOptionDialogInputStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.SingleOptionDialogInput$Builder. */
export interface SingleOptionDialogInput_BuilderMembers {
  build(): SingleOptionDialogInput;
  labelVisible(arg0: boolean): SingleOptionDialogInput_Builder;
  width(arg0: number): SingleOptionDialogInput_Builder;
}
export type SingleOptionDialogInput_Builder = SingleOptionDialogInput_BuilderMembers;
export interface SingleOptionDialogInput_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.SingleOptionDialogInput$OptionEntry. */
export interface SingleOptionDialogInput_OptionEntryMembers {
  display(): j_net_kyori_adventure_text.Component | null;
  id(): string;
  initial(): boolean;
}
export type SingleOptionDialogInput_OptionEntry = SingleOptionDialogInput_OptionEntryMembers;
export interface SingleOptionDialogInput_OptionEntryStatics {
  create(arg0: string, arg1: j_net_kyori_adventure_text.Component, arg2: boolean): SingleOptionDialogInput_OptionEntry | null;
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.TextDialogInput. */
export interface TextDialogInputMembers {
  readonly __javaSupertypes?: readonly [DialogInput];
  initial(): string;
  label(): j_net_kyori_adventure_text.Component;
  labelVisible(): boolean;
  maxLength(): number;
  multiline(): TextDialogInput_MultilineOptions | null;
  width(): number;
}
export type TextDialogInput = TextDialogInputMembers & DialogInput;
export interface TextDialogInputStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.TextDialogInput$Builder. */
export interface TextDialogInput_BuilderMembers {
  build(): TextDialogInput;
  initial(arg0: string): TextDialogInput_Builder;
  labelVisible(arg0: boolean): TextDialogInput_Builder;
  maxLength(arg0: number): TextDialogInput_Builder;
  multiline(arg0: TextDialogInput_MultilineOptions): TextDialogInput_Builder | null;
  width(arg0: number): TextDialogInput_Builder;
}
export type TextDialogInput_Builder = TextDialogInput_BuilderMembers;
export interface TextDialogInput_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.input.TextDialogInput$MultilineOptions. */
export interface TextDialogInput_MultilineOptionsMembers {
  height(): number | null;
  maxLines(): number | null;
}
export type TextDialogInput_MultilineOptions = TextDialogInput_MultilineOptionsMembers;
export interface TextDialogInput_MultilineOptionsStatics {
  create(arg0: number, arg1: number): TextDialogInput_MultilineOptions | null;
}
