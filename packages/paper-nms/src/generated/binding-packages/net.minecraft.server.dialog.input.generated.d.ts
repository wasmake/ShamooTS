// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';

/** JVM record net.minecraft.server.dialog.input.BooleanInput. */
export interface BooleanInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InputControl];
  equals(arg0: object): boolean;
  hashCode(): number;
  initial(): boolean;
  label(): j_net_minecraft_network_chat.Component;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BooleanInput]>;
  onFalse(): string;
  onTrue(): string;
  toString(): string;
}
export type BooleanInput = BooleanInputMembers & JavaOpaque<"java.lang.Record"> & InputControl;
export interface BooleanInputStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: boolean, arg2: string, arg3: string): BooleanInput;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BooleanInput]>;
}

/** JVM interface net.minecraft.server.dialog.input.InputControl. */
export interface InputControlMembers {
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [InputControl]>;
}
export type InputControl = InputControlMembers;
export interface InputControlStatics {
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [InputControl]>;
}

/** JVM class net.minecraft.server.dialog.input.InputControlTypes. */
export interface InputControlTypesMembers {
}
export type InputControlTypes = InputControlTypesMembers;
export interface InputControlTypesStatics {
  new(): InputControlTypes;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [InputControl]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [InputControl]>;
}

/** JVM record net.minecraft.server.dialog.input.NumberRangeInput. */
export interface NumberRangeInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InputControl];
  computeLabel(arg0: string): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  label(): j_net_minecraft_network_chat.Component;
  labelFormat(): string;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NumberRangeInput]>;
  rangeInfo(): NumberRangeInput_RangeInfo;
  toString(): string;
  width(): number;
}
export type NumberRangeInput = NumberRangeInputMembers & JavaOpaque<"java.lang.Record"> & InputControl;
export interface NumberRangeInputStatics {
  new(arg0: number, arg1: j_net_minecraft_network_chat.Component, arg2: string, arg3: NumberRangeInput_RangeInfo): NumberRangeInput;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NumberRangeInput]>;
}

/** JVM record net.minecraft.server.dialog.input.NumberRangeInput$RangeInfo. */
export interface NumberRangeInput_RangeInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  computeScaledValue(arg0: number): number;
  end(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  initial(): JavaOptional<number>;
  initialSliderValue(): number;
  start(): number;
  step(): JavaOptional<number>;
  toString(): string;
}
export type NumberRangeInput_RangeInfo = NumberRangeInput_RangeInfoMembers & JavaOpaque<"java.lang.Record">;
export interface NumberRangeInput_RangeInfoStatics {
  new(arg0: number, arg1: number, arg2: JavaOptional<number>, arg3: JavaOptional<number>): NumberRangeInput_RangeInfo;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NumberRangeInput_RangeInfo]>;
}

/** JVM record net.minecraft.server.dialog.input.SingleOptionInput. */
export interface SingleOptionInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InputControl];
  entries(): JavaList<SingleOptionInput_Entry>;
  equals(arg0: object): boolean;
  hashCode(): number;
  initial(): JavaOptional<SingleOptionInput_Entry>;
  label(): j_net_minecraft_network_chat.Component;
  labelVisible(): boolean;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SingleOptionInput]>;
  toString(): string;
  width(): number;
}
export type SingleOptionInput = SingleOptionInputMembers & JavaOpaque<"java.lang.Record"> & InputControl;
export interface SingleOptionInputStatics {
  new(arg0: number, arg1: JavaList<SingleOptionInput_Entry>, arg2: j_net_minecraft_network_chat.Component, arg3: boolean): SingleOptionInput;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SingleOptionInput]>;
}

/** JVM record net.minecraft.server.dialog.input.SingleOptionInput$Entry. */
export interface SingleOptionInput_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  display(): JavaOptional<j_net_minecraft_network_chat.Component>;
  displayOrDefault(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  initial(): boolean;
  toString(): string;
}
export type SingleOptionInput_Entry = SingleOptionInput_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface SingleOptionInput_EntryStatics {
  new(arg0: string, arg1: JavaOptional<j_net_minecraft_network_chat.Component>, arg2: boolean): SingleOptionInput_Entry;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SingleOptionInput_Entry]>;
  readonly FULL_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SingleOptionInput_Entry]>;
}

/** JVM record net.minecraft.server.dialog.input.TextInput. */
export interface TextInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InputControl];
  equals(arg0: object): boolean;
  hashCode(): number;
  initial(): string;
  label(): j_net_minecraft_network_chat.Component;
  labelVisible(): boolean;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TextInput]>;
  maxLength(): number;
  multiline(): JavaOptional<TextInput_MultilineOptions>;
  toString(): string;
  width(): number;
}
export type TextInput = TextInputMembers & JavaOpaque<"java.lang.Record"> & InputControl;
export interface TextInputStatics {
  new(arg0: number, arg1: j_net_minecraft_network_chat.Component, arg2: boolean, arg3: string, arg4: number, arg5: JavaOptional<TextInput_MultilineOptions>): TextInput;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TextInput]>;
}

/** JVM record net.minecraft.server.dialog.input.TextInput$MultilineOptions. */
export interface TextInput_MultilineOptionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): JavaOptional<number>;
  maxLines(): JavaOptional<number>;
  toString(): string;
}
export type TextInput_MultilineOptions = TextInput_MultilineOptionsMembers & JavaOpaque<"java.lang.Record">;
export interface TextInput_MultilineOptionsStatics {
  new(arg0: JavaOptional<number>, arg1: JavaOptional<number>): TextInput_MultilineOptions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TextInput_MultilineOptions]>;
  readonly MAX_HEIGHT: 512;
}
