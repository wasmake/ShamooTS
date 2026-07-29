// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.text.format.MutableStyleSetter. */
export interface MutableStyleSetterMembers<T /* extends MutableStyleSetter<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [StyleSetter<T>];
  decorate(...arg0: Array<TextDecoration>): T;
  decorations(arg0: JavaMap<TextDecoration, TextDecoration_State>): T;
  decorations(arg0: JavaSet<TextDecoration>, arg1: boolean): T;
}
export type MutableStyleSetter<T /* extends MutableStyleSetter<object> */ = unknown> = MutableStyleSetterMembers<T> & StyleSetter<T>;
export interface MutableStyleSetterStatics {
}

/** JVM class net.kyori.adventure.text.format.NamedTextColor. */
export interface NamedTextColorMembers {
  readonly __javaSupertypes?: readonly [TextColor];
  asHSV(): j_net_kyori_adventure_util.HSVLike;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  toString(): string;
  value(): number;
}
export type NamedTextColor = NamedTextColorMembers & TextColor;
export interface NamedTextColorStatics {
  readonly AQUA: NamedTextColor;
  readonly BLACK: NamedTextColor;
  readonly BLUE: NamedTextColor;
  readonly DARK_AQUA: NamedTextColor;
  readonly DARK_BLUE: NamedTextColor;
  readonly DARK_GRAY: NamedTextColor;
  readonly DARK_GREEN: NamedTextColor;
  readonly DARK_PURPLE: NamedTextColor;
  readonly DARK_RED: NamedTextColor;
  readonly GOLD: NamedTextColor;
  readonly GRAY: NamedTextColor;
  readonly GREEN: NamedTextColor;
  readonly LIGHT_PURPLE: NamedTextColor;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, NamedTextColor>;
  readonly RED: NamedTextColor;
  readonly WHITE: NamedTextColor;
  readonly YELLOW: NamedTextColor;
  namedColor(arg0: number): NamedTextColor | null;
  nearestTo(arg0: TextColor): NamedTextColor;
  ofExact(arg0: number): NamedTextColor | null;
}

/** JVM interface net.kyori.adventure.text.format.ShadowColor. */
export interface ShadowColorMembers {
  readonly __javaSupertypes?: readonly [StyleBuilderApplicable, j_net_kyori_adventure_util.ARGBLike];
  alpha(): number;
  asHexString(): string;
  blue(): number;
  green(): number;
  red(): number;
  styleApply(arg0: Style_Builder): void;
  value(): number;
}
export type ShadowColor = ShadowColorMembers & StyleBuilderApplicable & j_net_kyori_adventure_util.ARGBLike;
export interface ShadowColorStatics {
  fromHexString(arg0: string): ShadowColor | null;
  lerp(arg0: number, arg1: j_net_kyori_adventure_util.ARGBLike, arg2: j_net_kyori_adventure_util.ARGBLike): ShadowColor;
  none(): ShadowColor;
  shadowColor(arg0: number): ShadowColor;
  shadowColor(arg0: number, arg1: number, arg2: number, arg3: number): ShadowColor;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike): ShadowColor;
  shadowColor(arg0: j_net_kyori_adventure_util.RGBLike, arg1: number): ShadowColor;
}

/** JVM interface net.kyori.adventure.text.format.Style. */
export interface StyleMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<Style, Style_Builder>, JavaOpaque<"net.kyori.examination.Examinable">, StyleGetter, StyleSetter<Style>];
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Style;
  color(): TextColor | null;
  color(arg0: TextColor | null): Style;
  colorIfAbsent(arg0: TextColor | null): Style;
  decorate(arg0: TextDecoration): Style;
  decorate(...arg0: Array<TextDecoration>): Style;
  decoration(arg0: TextDecoration): TextDecoration_State;
  decoration(arg0: TextDecoration, arg1: TextDecoration_State): Style;
  decoration(arg0: TextDecoration, arg1: boolean): Style;
  decorationIfAbsent(arg0: TextDecoration, arg1: TextDecoration_State): Style;
  decorations(): JavaMap<TextDecoration, TextDecoration_State>;
  decorations(arg0: JavaMap<TextDecoration, TextDecoration_State>): Style;
  decorations(arg0: JavaSet<TextDecoration>, arg1: boolean): Style;
  edit(arg0: JavaConsumer<Style_Builder>): Style;
  edit(arg0: JavaConsumer<Style_Builder>, arg1: Style_Merge_Strategy): Style;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Style;
  hasDecoration(arg0: TextDecoration): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Style;
  insertion(): string | null;
  insertion(arg0: string | null): Style;
  isEmpty(): boolean;
  merge(arg0: Style): Style;
  merge(arg0: Style, arg1: JavaSet<Style_Merge>): Style;
  merge(arg0: Style, arg1: Style_Merge_Strategy): Style;
  merge(arg0: Style, arg1: Style_Merge_Strategy, arg2: JavaSet<Style_Merge>): Style;
  merge(arg0: Style, arg1: Style_Merge_Strategy, arg2: Style_Merge): Style;
  merge(arg0: Style, arg1: Style_Merge_Strategy, ...arg2: Array<Style_Merge>): Style;
  merge(arg0: Style, arg1: Style_Merge): Style;
  merge(arg0: Style, ...arg1: Array<Style_Merge>): Style;
  shadowColor(): ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Style;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Style;
  toBuilder(): Style_Builder;
  unmerge(arg0: Style): Style;
}
export type Style = StyleMembers & JavaOpaque<"net.kyori.examination.Examinable"> & StyleGetter;
export interface StyleStatics {
  readonly DEFAULT_FONT: JavaOpaque<"net.kyori.adventure.key.Key">;
  empty(): Style;
  style(): Style_Builder;
  style(arg0: Iterable<StyleBuilderApplicable>): Style;
  style(arg0: JavaConsumer<Style_Builder>): Style;
  style(arg0: TextColor | null): Style;
  style(arg0: TextColor | null, arg1: JavaSet<TextDecoration>): Style;
  style(arg0: TextColor | null, ...arg1: Array<TextDecoration>): Style;
  style(arg0: TextDecoration): Style;
  style(...arg0: Array<StyleBuilderApplicable>): Style;
}

/** JVM interface net.kyori.adventure.text.format.Style$Builder. */
export interface Style_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<Style>, j_net_kyori_adventure_util.Buildable_Builder<Style>, MutableStyleSetter<Style_Builder>];
  apply(arg0: StyleBuilderApplicable): Style_Builder;
  build(): Style;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Style_Builder;
  color(arg0: TextColor | null): Style_Builder;
  colorIfAbsent(arg0: TextColor | null): Style_Builder;
  decorate(arg0: TextDecoration): Style_Builder;
  decorate(...arg0: Array<TextDecoration>): Style_Builder;
  decoration(arg0: TextDecoration, arg1: TextDecoration_State): Style_Builder;
  decoration(arg0: TextDecoration, arg1: boolean): Style_Builder;
  decorationIfAbsent(arg0: TextDecoration, arg1: TextDecoration_State): Style_Builder;
  decorations(arg0: JavaMap<TextDecoration, TextDecoration_State>): Style_Builder;
  decorations(arg0: JavaSet<TextDecoration>, arg1: boolean): Style_Builder;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Style_Builder;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Style_Builder;
  insertion(arg0: string | null): Style_Builder;
  merge(arg0: Style): Style_Builder;
  merge(arg0: Style, arg1: JavaSet<Style_Merge>): Style_Builder;
  merge(arg0: Style, arg1: Style_Merge_Strategy): Style_Builder;
  merge(arg0: Style, arg1: Style_Merge_Strategy, arg2: JavaSet<Style_Merge>): Style_Builder;
  merge(arg0: Style, arg1: Style_Merge_Strategy, ...arg2: Array<Style_Merge>): Style_Builder;
  merge(arg0: Style, ...arg1: Array<Style_Merge>): Style_Builder;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Style_Builder;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Style_Builder;
}
export type Style_Builder = Style_BuilderMembers;
export interface Style_BuilderStatics {
}

/** Live JVM enum net.kyori.adventure.text.format.Style$Merge; constants are host handles, not strings. */
export type Style_Merge = JavaEnum<"net.kyori.adventure.text.format.Style$Merge", "COLOR" | "DECORATIONS" | "EVENTS" | "FONT" | "INSERTION" | "SHADOW_COLOR"> & Style_MergeMembers;
export interface Style_MergeMembers {
}
export interface Style_MergeStatics {
  readonly COLOR: Style_Merge;
  readonly DECORATIONS: Style_Merge;
  readonly EVENTS: Style_Merge;
  readonly FONT: Style_Merge;
  readonly INSERTION: Style_Merge;
  readonly SHADOW_COLOR: Style_Merge;
  all(): JavaSet<Style_Merge>;
  colorAndDecorations(): JavaSet<Style_Merge>;
  merges(...arg0: Array<Style_Merge>): JavaSet<Style_Merge>;
  of(...arg0: Array<Style_Merge>): JavaSet<Style_Merge>;
  valueOf(arg0: string): Style_Merge;
  values(): Array<Style_Merge>;
}

/** Live JVM enum net.kyori.adventure.text.format.Style$Merge$Strategy; constants are host handles, not strings. */
export type Style_Merge_Strategy = JavaEnum<"net.kyori.adventure.text.format.Style$Merge$Strategy", "ALWAYS" | "IF_ABSENT_ON_TARGET" | "NEVER"> & Style_Merge_StrategyMembers;
export interface Style_Merge_StrategyMembers {
}
export interface Style_Merge_StrategyStatics {
  readonly ALWAYS: Style_Merge_Strategy;
  readonly IF_ABSENT_ON_TARGET: Style_Merge_Strategy;
  readonly NEVER: Style_Merge_Strategy;
  valueOf(arg0: string): Style_Merge_Strategy;
  values(): Array<Style_Merge_Strategy>;
}

/** JVM interface net.kyori.adventure.text.format.StyleBuilderApplicable. */
export interface StyleBuilderApplicableMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text.ComponentBuilderApplicable];
  componentBuilderApply(arg0: j_net_kyori_adventure_text.ComponentBuilder<object, object>): void;
  styleApply(arg0: Style_Builder): void;
}
export type StyleBuilderApplicable = StyleBuilderApplicableMembers & j_net_kyori_adventure_text.ComponentBuilderApplicable;
export interface StyleBuilderApplicableStatics {
}

/** JVM interface net.kyori.adventure.text.format.StyleGetter. */
export interface StyleGetterMembers {
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  color(): TextColor | null;
  decoration(arg0: TextDecoration): TextDecoration_State;
  decorations(): JavaMap<TextDecoration, TextDecoration_State>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  hasDecoration(arg0: TextDecoration): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  insertion(): string | null;
  shadowColor(): ShadowColor | null;
}
export type StyleGetter = StyleGetterMembers;
export interface StyleGetterStatics {
}

/** JVM interface net.kyori.adventure.text.format.StyleSetter. */
export interface StyleSetterMembers<T /* extends StyleSetter<object> */ = unknown> {
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): T;
  color(arg0: TextColor | null): T;
  colorIfAbsent(arg0: TextColor | null): T;
  decorate(arg0: TextDecoration): T;
  decorate(...arg0: Array<TextDecoration>): T;
  decoration(arg0: TextDecoration, arg1: TextDecoration_State): T;
  decoration(arg0: TextDecoration, arg1: boolean): T;
  decorationIfAbsent(arg0: TextDecoration, arg1: TextDecoration_State): T;
  decorations(arg0: JavaMap<TextDecoration, TextDecoration_State>): T;
  decorations(arg0: JavaSet<TextDecoration>, arg1: boolean): T;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): T;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): T;
  insertion(arg0: string | null): T;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): T;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): T;
}
export type StyleSetter<T /* extends StyleSetter<object> */ = unknown> = StyleSetterMembers<T>;
export interface StyleSetterStatics {
}

/** JVM interface net.kyori.adventure.text.format.TextColor. */
export interface TextColorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [TextColor]>, JavaOpaque<"net.kyori.examination.Examinable">, j_net_kyori_adventure_util.RGBLike, StyleBuilderApplicable, TextFormat];
  asHSV(): j_net_kyori_adventure_util.HSVLike;
  asHexString(): string;
  blue(): number;
  compareTo(arg0: TextColor): number;
  componentBuilderApply(arg0: j_net_kyori_adventure_text.ComponentBuilder<object, object>): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  green(): number;
  red(): number;
  styleApply(arg0: Style_Builder): void;
  value(): number;
}
export type TextColor = TextColorMembers & JavaOpaque<"net.kyori.examination.Examinable"> & j_net_kyori_adventure_util.RGBLike & StyleBuilderApplicable & TextFormat;
export interface TextColorStatics {
  readonly HEX_CHARACTER: 35;
  readonly HEX_PREFIX: "#";
  color(arg0: number, arg1: number, arg2: number): TextColor;
  color(arg0: number): TextColor;
  color(arg0: number, arg1: number, arg2: number): TextColor;
  color(arg0: j_net_kyori_adventure_util.HSVLike): TextColor;
  color(arg0: j_net_kyori_adventure_util.RGBLike): TextColor;
  fromCSSHexString(arg0: string): TextColor | null;
  fromHexString(arg0: string): TextColor | null;
  lerp(arg0: number, arg1: j_net_kyori_adventure_util.RGBLike, arg2: j_net_kyori_adventure_util.RGBLike): TextColor;
  nearestColorTo<C /* extends TextColor */>(arg0: JavaList<C>, arg1: TextColor): C;
}

/** Live JVM enum net.kyori.adventure.text.format.TextDecoration; constants are host handles, not strings. */
export type TextDecoration = JavaEnum<"net.kyori.adventure.text.format.TextDecoration", "BOLD" | "ITALIC" | "OBFUSCATED" | "STRIKETHROUGH" | "UNDERLINED"> & TextDecorationMembers;
export interface TextDecorationMembers {
  as(arg0: TextDecoration_State): TextDecorationAndState;
  as(arg0: boolean): TextDecorationAndState;
  componentBuilderApply(arg0: j_net_kyori_adventure_text.ComponentBuilder<object, object>): void;
  styleApply(arg0: Style_Builder): void;
  toString(): string;
  withState(arg0: TextDecoration_State): TextDecorationAndState;
  withState(arg0: j_net_kyori_adventure_util.TriState): TextDecorationAndState;
  withState(arg0: boolean): TextDecorationAndState;
}
export interface TextDecorationStatics {
  readonly BOLD: TextDecoration;
  readonly ITALIC: TextDecoration;
  readonly OBFUSCATED: TextDecoration;
  readonly STRIKETHROUGH: TextDecoration;
  readonly UNDERLINED: TextDecoration;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, TextDecoration>;
  valueOf(arg0: string): TextDecoration;
  values(): Array<TextDecoration>;
}

/** Live JVM enum net.kyori.adventure.text.format.TextDecoration$State; constants are host handles, not strings. */
export type TextDecoration_State = JavaEnum<"net.kyori.adventure.text.format.TextDecoration$State", "FALSE" | "NOT_SET" | "TRUE"> & TextDecoration_StateMembers;
export interface TextDecoration_StateMembers {
  toString(): string;
}
export interface TextDecoration_StateStatics {
  readonly FALSE: TextDecoration_State;
  readonly NOT_SET: TextDecoration_State;
  readonly TRUE: TextDecoration_State;
  byBoolean(arg0: boolean | null): TextDecoration_State;
  byBoolean(arg0: boolean): TextDecoration_State;
  byTriState(arg0: j_net_kyori_adventure_util.TriState): TextDecoration_State;
  valueOf(arg0: string): TextDecoration_State;
  values(): Array<TextDecoration_State>;
}

/** JVM interface net.kyori.adventure.text.format.TextDecorationAndState. */
export interface TextDecorationAndStateMembers {
  readonly __javaSupertypes?: readonly [StyleBuilderApplicable, JavaOpaque<"net.kyori.examination.Examinable">];
  decoration(): TextDecoration;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  state(): TextDecoration_State;
  styleApply(arg0: Style_Builder): void;
}
export type TextDecorationAndState = TextDecorationAndStateMembers & StyleBuilderApplicable & JavaOpaque<"net.kyori.examination.Examinable">;
export interface TextDecorationAndStateStatics {
}

/** JVM interface net.kyori.adventure.text.format.TextFormat. */
export interface TextFormatMembers {
}
export type TextFormat = TextFormatMembers;
export interface TextFormatStatics {
}
