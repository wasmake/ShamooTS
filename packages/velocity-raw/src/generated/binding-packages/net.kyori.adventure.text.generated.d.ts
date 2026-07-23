// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_text_object from './net.kyori.adventure.text.object.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM abstract net.kyori.adventure.text.AbstractComponent. */
export interface AbstractComponentMembers {
  readonly __javaSupertypes?: readonly [Component];
  readonly children: (JavaList<Component>) & { (): JavaList<Component> };
  equals(arg0: object | null): boolean | null;
  hashCode(): number;
  readonly style: (j_net_kyori_adventure_text_format.Style) & { (): j_net_kyori_adventure_text_format.Style };
  toBuilder(): ComponentBuilder<object, object>;
  toString(): string;
}
export type AbstractComponent = AbstractComponentMembers & Component;
export interface AbstractComponentStatics {
  new(arg0: JavaList<ComponentLike>, arg1: j_net_kyori_adventure_text_format.Style): AbstractComponent;
}

/** JVM interface net.kyori.adventure.text.BlockNBTComponent. */
export interface BlockNBTComponentMembers {
  readonly __javaSupertypes?: readonly [NBTComponent<BlockNBTComponent, BlockNBTComponent_Builder>, ScopedComponent<BlockNBTComponent>];
  absoluteWorldPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent;
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): BlockNBTComponent;
  append(arg0: Component): BlockNBTComponent;
  append(arg0: ComponentBuilder<object, object>): BlockNBTComponent;
  append(arg0: ComponentLike): BlockNBTComponent;
  append(...arg0: Array<ComponentLike>): BlockNBTComponent;
  appendNewline(): Component;
  appendNewline(): BlockNBTComponent;
  appendSpace(): Component;
  appendSpace(): BlockNBTComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): BlockNBTComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): BlockNBTComponent;
  asComponent(): Component;
  asComponent(): BlockNBTComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): BlockNBTComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): BlockNBTComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): BlockNBTComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): BlockNBTComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): BlockNBTComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): BlockNBTComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): BlockNBTComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): BlockNBTComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): BlockNBTComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): BlockNBTComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): BlockNBTComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): BlockNBTComponent | null;
  interpret(): boolean;
  interpret(arg0: boolean): BlockNBTComponent;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  localPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): BlockNBTComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): BlockNBTComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): BlockNBTComponent;
  nbtPath(): string;
  nbtPath(arg0: string): BlockNBTComponent;
  pos(): BlockNBTComponent_Pos;
  pos(arg0: BlockNBTComponent_Pos): BlockNBTComponent;
  relativeWorldPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  separator(): Component | null;
  separator(arg0: ComponentLike | null): BlockNBTComponent | null;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): BlockNBTComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): BlockNBTComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): BlockNBTComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): BlockNBTComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): BlockNBTComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): BlockNBTComponent;
  toBuilder(): BlockNBTComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
  worldPos(arg0: BlockNBTComponent_WorldPos_Coordinate, arg1: BlockNBTComponent_WorldPos_Coordinate, arg2: BlockNBTComponent_WorldPos_Coordinate): BlockNBTComponent;
}
export type BlockNBTComponent = BlockNBTComponentMembers;
export interface BlockNBTComponentStatics {
}

/** JVM interface net.kyori.adventure.text.BlockNBTComponent$Builder. */
export interface BlockNBTComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [NBTComponentBuilder<BlockNBTComponent, BlockNBTComponent_Builder>];
  absoluteWorldPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent_Builder;
  append(arg0: Iterable<ComponentLike>): BlockNBTComponent_Builder;
  append(arg0: Component): BlockNBTComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): BlockNBTComponent_Builder;
  append(arg0: ComponentLike): BlockNBTComponent_Builder;
  append(...arg0: Array<Component>): BlockNBTComponent_Builder;
  append(...arg0: Array<ComponentLike>): BlockNBTComponent_Builder;
  appendNewline(): BlockNBTComponent_Builder;
  appendSpace(): BlockNBTComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): BlockNBTComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): BlockNBTComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): BlockNBTComponent_Builder;
  asComponent(): Component;
  build(): BlockNBTComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): BlockNBTComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): BlockNBTComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): BlockNBTComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): BlockNBTComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): BlockNBTComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): BlockNBTComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): BlockNBTComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): BlockNBTComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): BlockNBTComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): BlockNBTComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): BlockNBTComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): BlockNBTComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): BlockNBTComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  interpret(arg0: boolean): BlockNBTComponent_Builder;
  localPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent_Builder;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): BlockNBTComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): BlockNBTComponent_Builder;
  mergeStyle(arg0: Component): BlockNBTComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): BlockNBTComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): BlockNBTComponent_Builder;
  nbtPath(arg0: string): BlockNBTComponent_Builder;
  pos(arg0: BlockNBTComponent_Pos): BlockNBTComponent_Builder;
  relativeWorldPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent_Builder;
  resetStyle(): BlockNBTComponent_Builder;
  separator(arg0: ComponentLike | null): BlockNBTComponent_Builder | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): BlockNBTComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): BlockNBTComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): BlockNBTComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): BlockNBTComponent_Builder;
  worldPos(arg0: BlockNBTComponent_WorldPos_Coordinate, arg1: BlockNBTComponent_WorldPos_Coordinate, arg2: BlockNBTComponent_WorldPos_Coordinate): BlockNBTComponent_Builder;
}
export type BlockNBTComponent_Builder = BlockNBTComponent_BuilderMembers;
export interface BlockNBTComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.BlockNBTComponent$LocalPos. */
export interface BlockNBTComponent_LocalPosMembers {
  readonly __javaSupertypes?: readonly [BlockNBTComponent_Pos];
  forwards(): number;
  left(): number;
  up(): number;
}
export type BlockNBTComponent_LocalPos = BlockNBTComponent_LocalPosMembers & BlockNBTComponent_Pos;
export interface BlockNBTComponent_LocalPosStatics {
  localPos(arg0: number, arg1: number, arg2: number): BlockNBTComponent_LocalPos;
  of(arg0: number, arg1: number, arg2: number): BlockNBTComponent_LocalPos;
}

/** JVM interface net.kyori.adventure.text.BlockNBTComponent$Pos. */
export interface BlockNBTComponent_PosMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  asString(): string;
}
export type BlockNBTComponent_Pos = BlockNBTComponent_PosMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface BlockNBTComponent_PosStatics {
  /** @throws java.lang.IllegalArgumentException */
  fromString(arg0: string): BlockNBTComponent_Pos;
}

/** JVM interface net.kyori.adventure.text.BlockNBTComponent$WorldPos. */
export interface BlockNBTComponent_WorldPosMembers {
  readonly __javaSupertypes?: readonly [BlockNBTComponent_Pos];
  x(): BlockNBTComponent_WorldPos_Coordinate;
  y(): BlockNBTComponent_WorldPos_Coordinate;
  z(): BlockNBTComponent_WorldPos_Coordinate;
}
export type BlockNBTComponent_WorldPos = BlockNBTComponent_WorldPosMembers & BlockNBTComponent_Pos;
export interface BlockNBTComponent_WorldPosStatics {
  of(arg0: BlockNBTComponent_WorldPos_Coordinate, arg1: BlockNBTComponent_WorldPos_Coordinate, arg2: BlockNBTComponent_WorldPos_Coordinate): BlockNBTComponent_WorldPos;
  worldPos(arg0: BlockNBTComponent_WorldPos_Coordinate, arg1: BlockNBTComponent_WorldPos_Coordinate, arg2: BlockNBTComponent_WorldPos_Coordinate): BlockNBTComponent_WorldPos;
}

/** JVM interface net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate. */
export interface BlockNBTComponent_WorldPos_CoordinateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  type(): BlockNBTComponent_WorldPos_Coordinate_Type;
  value(): number;
}
export type BlockNBTComponent_WorldPos_Coordinate = BlockNBTComponent_WorldPos_CoordinateMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface BlockNBTComponent_WorldPos_CoordinateStatics {
  absolute(arg0: number): BlockNBTComponent_WorldPos_Coordinate;
  coordinate(arg0: number, arg1: BlockNBTComponent_WorldPos_Coordinate_Type): BlockNBTComponent_WorldPos_Coordinate;
  of(arg0: number, arg1: BlockNBTComponent_WorldPos_Coordinate_Type): BlockNBTComponent_WorldPos_Coordinate;
  relative(arg0: number): BlockNBTComponent_WorldPos_Coordinate;
}

/** Live JVM enum net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type; constants are host handles, not strings. */
export type BlockNBTComponent_WorldPos_Coordinate_Type = JavaEnum<"net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type", "ABSOLUTE" | "RELATIVE"> & BlockNBTComponent_WorldPos_Coordinate_TypeMembers;
export interface BlockNBTComponent_WorldPos_Coordinate_TypeMembers {
}
export interface BlockNBTComponent_WorldPos_Coordinate_TypeStatics {
  readonly ABSOLUTE: BlockNBTComponent_WorldPos_Coordinate_Type;
  readonly RELATIVE: BlockNBTComponent_WorldPos_Coordinate_Type;
  valueOf(arg0: string): BlockNBTComponent_WorldPos_Coordinate_Type;
  values(): Array<BlockNBTComponent_WorldPos_Coordinate_Type>;
}

/** JVM interface net.kyori.adventure.text.BuildableComponent. */
export interface BuildableComponentMembers<C /* extends BuildableComponent<C, B> */ = unknown, B /* extends ComponentBuilder<C, B> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<C, B>, Component];
  toBuilder(): B;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type BuildableComponent<C /* extends BuildableComponent<C, B> */ = unknown, B /* extends ComponentBuilder<C, B> */ = unknown> = BuildableComponentMembers<C, B> & j_net_kyori_adventure_util.Buildable<C, B> & Component;
export interface BuildableComponentStatics {
}

/** JVM interface net.kyori.adventure.text.Component. */
export interface ComponentMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilderApplicable, ComponentLike, JavaOpaque<"net.kyori.examination.Examinable">, j_net_kyori_adventure_text_event.HoverEventSource<Component>, j_net_kyori_adventure_text_format.StyleGetter, j_net_kyori_adventure_text_format.StyleSetter<Component>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  appendNewline(): Component;
  appendSpace(): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  asComponent(): Component;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  toBuilder(): ComponentBuilder<object, object>;
}
export type Component = ComponentMembers & ComponentBuilderApplicable & ComponentLike & JavaOpaque<"net.kyori.examination.Examinable"> & j_net_kyori_adventure_text_format.StyleGetter;
export interface ComponentStatics {
  readonly EQUALS: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>;
  readonly EQUALS_IDENTITY: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>;
  readonly IS_NOT_EMPTY: JavaPredicate<Component>;
  blockNBT(): BlockNBTComponent_Builder;
  blockNBT(arg0: string, arg1: BlockNBTComponent_Pos): BlockNBTComponent;
  blockNBT(arg0: string, arg1: boolean, arg2: BlockNBTComponent_Pos): BlockNBTComponent;
  blockNBT(arg0: string, arg1: boolean, arg2: ComponentLike | null, arg3: BlockNBTComponent_Pos): BlockNBTComponent | null;
  blockNBT(arg0: JavaConsumer<BlockNBTComponent_Builder>): BlockNBTComponent;
  empty(): TextComponent;
  entityNBT(): EntityNBTComponent_Builder;
  entityNBT(arg0: string, arg1: string): EntityNBTComponent;
  entityNBT(arg0: JavaConsumer<EntityNBTComponent_Builder>): EntityNBTComponent;
  join(arg0: ComponentLike, arg1: Iterable<ComponentLike>): TextComponent;
  join(arg0: ComponentLike, ...arg1: Array<ComponentLike>): TextComponent;
  join(arg0: JoinConfiguration_Builder, arg1: Iterable<ComponentLike>): Component;
  join(arg0: JoinConfiguration_Builder, ...arg1: Array<ComponentLike>): Component;
  join(arg0: JoinConfiguration, arg1: Iterable<ComponentLike>): Component;
  join(arg0: JoinConfiguration, ...arg1: Array<ComponentLike>): Component;
  keybind(): KeybindComponent_Builder;
  keybind(arg0: string): KeybindComponent;
  keybind(arg0: string, arg1: j_net_kyori_adventure_text_format.Style): KeybindComponent;
  keybind(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null): KeybindComponent | null;
  keybind(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): KeybindComponent | null;
  keybind(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): KeybindComponent | null;
  keybind(arg0: JavaConsumer<KeybindComponent_Builder>): KeybindComponent;
  keybind(arg0: KeybindComponent_KeybindLike): KeybindComponent;
  keybind(arg0: KeybindComponent_KeybindLike, arg1: j_net_kyori_adventure_text_format.Style): KeybindComponent;
  keybind(arg0: KeybindComponent_KeybindLike, arg1: j_net_kyori_adventure_text_format.TextColor | null): KeybindComponent | null;
  keybind(arg0: KeybindComponent_KeybindLike, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): KeybindComponent | null;
  keybind(arg0: KeybindComponent_KeybindLike, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): KeybindComponent | null;
  newline(): TextComponent;
  object(): ObjectComponent_Builder;
  object(arg0: JavaConsumer<ObjectComponent_Builder>): ObjectComponent;
  object(arg0: j_net_kyori_adventure_text_object.ObjectContents): ObjectComponent;
  score(): ScoreComponent_Builder;
  score(arg0: string, arg1: string): ScoreComponent;
  score(arg0: string, arg1: string, arg2: string | null): ScoreComponent | null;
  score(arg0: JavaConsumer<ScoreComponent_Builder>): ScoreComponent;
  selector(): SelectorComponent_Builder;
  selector(arg0: string): SelectorComponent;
  selector(arg0: string, arg1: ComponentLike | null): SelectorComponent | null;
  selector(arg0: JavaConsumer<SelectorComponent_Builder>): SelectorComponent;
  space(): TextComponent;
  storageNBT(): StorageNBTComponent_Builder;
  storageNBT(arg0: string, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): StorageNBTComponent;
  storageNBT(arg0: string, arg1: boolean, arg2: JavaOpaque<"net.kyori.adventure.key.Key">): StorageNBTComponent;
  storageNBT(arg0: string, arg1: boolean, arg2: ComponentLike | null, arg3: JavaOpaque<"net.kyori.adventure.key.Key">): StorageNBTComponent | null;
  storageNBT(arg0: JavaConsumer<StorageNBTComponent_Builder>): StorageNBTComponent;
  text(): TextComponent_Builder;
  text(arg0: string): TextComponent;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: number): TextComponent;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: number): TextComponent;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: number): TextComponent;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: number, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: bigint): TextComponent;
  text(arg0: bigint, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: bigint, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: bigint, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: bigint, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: string): TextComponent;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: JavaConsumer<TextComponent_Builder>): TextComponent;
  text(arg0: boolean): TextComponent;
  text(arg0: boolean, arg1: j_net_kyori_adventure_text_format.Style): TextComponent;
  text(arg0: boolean, arg1: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  text(arg0: boolean, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  text(arg0: boolean, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent | null;
  textOfChildren(...arg0: Array<ComponentLike>): TextComponent;
  toComponent(): JavaOpaque<"java.util.stream.Collector", [Component, ComponentBuilder<object, object>, Component]>;
  toComponent(arg0: Component): JavaOpaque<"java.util.stream.Collector", [Component, ComponentBuilder<object, object>, Component]>;
  translatable(): TranslatableComponent_Builder;
  translatable(arg0: string): TranslatableComponent;
  translatable(arg0: string, arg1: string | null): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, arg2: JavaList<ComponentLike>, arg3: Iterable<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, arg2: JavaList<ComponentLike>, ...arg3: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, arg2: j_net_kyori_adventure_text_format.Style): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, arg2: j_net_kyori_adventure_text_format.Style, arg3: JavaList<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, arg2: j_net_kyori_adventure_text_format.Style, ...arg3: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, ...arg2: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: string | null, ...arg2: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent | null;
  translatable(arg0: string, arg1: JavaList<ComponentLike>): TranslatableComponent;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.Style): TranslatableComponent;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.Style, arg2: JavaList<ComponentLike>): TranslatableComponent;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.Style, ...arg2: Array<ComponentLike>): TranslatableComponent;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null): TranslatableComponent | null;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaList<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TranslatableComponent | null;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg3: JavaList<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, ...arg3: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: string, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TranslatableComponent | null;
  translatable(arg0: string, ...arg1: Array<ComponentLike>): TranslatableComponent;
  translatable(arg0: JavaConsumer<TranslatableComponent_Builder>): TranslatableComponent;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable): TranslatableComponent;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, arg2: Iterable<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, arg2: JavaList<ComponentLike>, arg3: Iterable<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, arg2: JavaList<ComponentLike>, ...arg3: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, arg2: j_net_kyori_adventure_text_format.Style): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, arg2: j_net_kyori_adventure_text_format.Style, arg3: JavaList<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, arg2: j_net_kyori_adventure_text_format.Style, ...arg3: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: string | null, ...arg2: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: JavaList<ComponentLike>): TranslatableComponent;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.Style): TranslatableComponent;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.Style, arg2: JavaList<ComponentLike>): TranslatableComponent;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.Style, ...arg2: Array<ComponentLike>): TranslatableComponent;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaList<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg3: JavaList<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null, arg2: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, ...arg3: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<ComponentLike>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, arg1: j_net_kyori_adventure_text_format.TextColor | null, ...arg2: Array<j_net_kyori_adventure_text_format.TextDecoration>): TranslatableComponent | null;
  translatable(arg0: j_net_kyori_adventure_translation.Translatable, ...arg1: Array<ComponentLike>): TranslatableComponent;
  virtual<C>(arg0: JavaClass<C>, arg1: VirtualComponentRenderer<C>): VirtualComponent;
  virtual<C>(arg0: JavaClass<C>, arg1: VirtualComponentRenderer<C>, arg2: Iterable<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): VirtualComponent;
  virtual<C>(arg0: JavaClass<C>, arg1: VirtualComponentRenderer<C>, arg2: j_net_kyori_adventure_text_format.Style): VirtualComponent;
  virtual<C>(arg0: JavaClass<C>, arg1: VirtualComponentRenderer<C>, ...arg2: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): VirtualComponent;
}

/** JVM interface net.kyori.adventure.text.ComponentApplicable. */
export interface ComponentApplicableMembers {
  componentApply(arg0: Component): Component;
}
export type ComponentApplicable = ComponentApplicableMembers;
export interface ComponentApplicableStatics {
}

/** JVM interface net.kyori.adventure.text.ComponentBuilder. */
export interface ComponentBuilderMembers<C /* extends BuildableComponent<C, B> */ = unknown, B /* extends ComponentBuilder<C, B> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<C>, j_net_kyori_adventure_util.Buildable_Builder<C>, ComponentBuilderApplicable, ComponentLike, j_net_kyori_adventure_text_format.MutableStyleSetter<B>];
  append(arg0: Iterable<ComponentLike>): B;
  append(arg0: Component): B;
  append(arg0: ComponentBuilder<object, object>): B;
  append(arg0: ComponentLike): B;
  append(...arg0: Array<Component>): B;
  append(...arg0: Array<ComponentLike>): B;
  appendNewline(): B;
  appendSpace(): B;
  applicableApply(arg0: ComponentBuilderApplicable): B;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): B;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): B;
  asComponent(): Component;
  build(): object;
  build(): C;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): B | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): B | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): B | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): B;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): B;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): B;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): B;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): B;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): B;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): B;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): B | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): B | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): B | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): B;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): B;
  mergeStyle(arg0: Component): B;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): B;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): B;
  resetStyle(): B;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): B;
  style(arg0: j_net_kyori_adventure_text_format.Style): B;
}
export type ComponentBuilder<C /* extends BuildableComponent<C, B> */ = unknown, B /* extends ComponentBuilder<C, B> */ = unknown> = ComponentBuilderMembers<C, B> & j_net_kyori_adventure_builder.AbstractBuilder<C> & j_net_kyori_adventure_util.Buildable_Builder<C> & ComponentBuilderApplicable & ComponentLike & j_net_kyori_adventure_text_format.MutableStyleSetter<B>;
export interface ComponentBuilderStatics {
}

/** JVM interface net.kyori.adventure.text.ComponentBuilderApplicable. */
export interface ComponentBuilderApplicableMembers {
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
}
export type ComponentBuilderApplicable = ComponentBuilderApplicableMembers;
export interface ComponentBuilderApplicableStatics {
}

/** Live JVM enum net.kyori.adventure.text.ComponentIteratorFlag; constants are host handles, not strings. */
export type ComponentIteratorFlag = JavaEnum<"net.kyori.adventure.text.ComponentIteratorFlag", "INCLUDE_HOVER_SHOW_ENTITY_NAME" | "INCLUDE_HOVER_SHOW_TEXT_COMPONENT" | "INCLUDE_TRANSLATABLE_COMPONENT_ARGUMENTS"> & ComponentIteratorFlagMembers;
export interface ComponentIteratorFlagMembers {
}
export interface ComponentIteratorFlagStatics {
  readonly INCLUDE_HOVER_SHOW_ENTITY_NAME: ComponentIteratorFlag;
  readonly INCLUDE_HOVER_SHOW_TEXT_COMPONENT: ComponentIteratorFlag;
  readonly INCLUDE_TRANSLATABLE_COMPONENT_ARGUMENTS: ComponentIteratorFlag;
  valueOf(arg0: string): ComponentIteratorFlag;
  values(): Array<ComponentIteratorFlag>;
}

/** JVM interface net.kyori.adventure.text.ComponentIteratorType. */
export interface ComponentIteratorTypeMembers {
  populate(arg0: Component, arg1: JavaOpaque<"java.util.Deque", [Component]>, arg2: JavaSet<ComponentIteratorFlag>): void;
}
export type ComponentIteratorType = ComponentIteratorTypeMembers;
export interface ComponentIteratorTypeStatics {
  readonly BREADTH_FIRST: ComponentIteratorType;
  readonly DEPTH_FIRST: ComponentIteratorType;
}

/** JVM interface net.kyori.adventure.text.ComponentLike. */
export interface ComponentLikeMembers {
  asComponent(): Component;
}
export type ComponentLike = ComponentLikeMembers;
export interface ComponentLikeStatics {
  asComponents(arg0: JavaList<ComponentLike>): JavaList<Component>;
  asComponents(arg0: JavaList<ComponentLike>, arg1: JavaPredicate<Component> | null): JavaList<Component> | null;
  unbox(arg0: ComponentLike | null): Component | null;
}

/** JVM interface net.kyori.adventure.text.EntityNBTComponent. */
export interface EntityNBTComponentMembers {
  readonly __javaSupertypes?: readonly [NBTComponent<EntityNBTComponent, EntityNBTComponent_Builder>, ScopedComponent<EntityNBTComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): EntityNBTComponent;
  append(arg0: Component): EntityNBTComponent;
  append(arg0: ComponentBuilder<object, object>): EntityNBTComponent;
  append(arg0: ComponentLike): EntityNBTComponent;
  append(...arg0: Array<ComponentLike>): EntityNBTComponent;
  appendNewline(): Component;
  appendNewline(): EntityNBTComponent;
  appendSpace(): Component;
  appendSpace(): EntityNBTComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): EntityNBTComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): EntityNBTComponent;
  asComponent(): Component;
  asComponent(): EntityNBTComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): EntityNBTComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): EntityNBTComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): EntityNBTComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): EntityNBTComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): EntityNBTComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): EntityNBTComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): EntityNBTComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): EntityNBTComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): EntityNBTComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): EntityNBTComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): EntityNBTComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): EntityNBTComponent | null;
  interpret(): boolean;
  interpret(arg0: boolean): EntityNBTComponent;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): EntityNBTComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): EntityNBTComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): EntityNBTComponent;
  nbtPath(): string;
  nbtPath(arg0: string): EntityNBTComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  selector(): string;
  selector(arg0: string): EntityNBTComponent;
  separator(): Component | null;
  separator(arg0: ComponentLike | null): EntityNBTComponent | null;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): EntityNBTComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): EntityNBTComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): EntityNBTComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): EntityNBTComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): EntityNBTComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): EntityNBTComponent;
  toBuilder(): EntityNBTComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type EntityNBTComponent = EntityNBTComponentMembers;
export interface EntityNBTComponentStatics {
}

/** JVM interface net.kyori.adventure.text.EntityNBTComponent$Builder. */
export interface EntityNBTComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [NBTComponentBuilder<EntityNBTComponent, EntityNBTComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): EntityNBTComponent_Builder;
  append(arg0: Component): EntityNBTComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): EntityNBTComponent_Builder;
  append(arg0: ComponentLike): EntityNBTComponent_Builder;
  append(...arg0: Array<Component>): EntityNBTComponent_Builder;
  append(...arg0: Array<ComponentLike>): EntityNBTComponent_Builder;
  appendNewline(): EntityNBTComponent_Builder;
  appendSpace(): EntityNBTComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): EntityNBTComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): EntityNBTComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): EntityNBTComponent_Builder;
  asComponent(): Component;
  build(): EntityNBTComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): EntityNBTComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): EntityNBTComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): EntityNBTComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): EntityNBTComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): EntityNBTComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): EntityNBTComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): EntityNBTComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): EntityNBTComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): EntityNBTComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): EntityNBTComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): EntityNBTComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): EntityNBTComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): EntityNBTComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  interpret(arg0: boolean): EntityNBTComponent_Builder;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): EntityNBTComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): EntityNBTComponent_Builder;
  mergeStyle(arg0: Component): EntityNBTComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): EntityNBTComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): EntityNBTComponent_Builder;
  nbtPath(arg0: string): EntityNBTComponent_Builder;
  resetStyle(): EntityNBTComponent_Builder;
  selector(arg0: string): EntityNBTComponent_Builder;
  separator(arg0: ComponentLike | null): EntityNBTComponent_Builder | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): EntityNBTComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): EntityNBTComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): EntityNBTComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): EntityNBTComponent_Builder;
}
export type EntityNBTComponent_Builder = EntityNBTComponent_BuilderMembers;
export interface EntityNBTComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.JoinConfiguration. */
export interface JoinConfigurationMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<JoinConfiguration, JoinConfiguration_Builder>, JavaOpaque<"net.kyori.examination.Examinable">];
  convertor(): JavaFunction<ComponentLike, Component>;
  lastSeparator(): Component | null;
  lastSeparatorIfSerial(): Component | null;
  parentStyle(): j_net_kyori_adventure_text_format.Style;
  predicate(): JavaPredicate<ComponentLike>;
  prefix(): Component | null;
  separator(): Component | null;
  suffix(): Component | null;
  toBuilder(): JoinConfiguration_Builder;
}
export type JoinConfiguration = JoinConfigurationMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface JoinConfigurationStatics {
  arrayLike(): JoinConfiguration;
  builder(): JoinConfiguration_Builder;
  commas(arg0: boolean): JoinConfiguration;
  newlines(): JoinConfiguration;
  noSeparators(): JoinConfiguration;
  separator(arg0: ComponentLike | null): JoinConfiguration | null;
  separators(arg0: ComponentLike | null, arg1: ComponentLike | null): JoinConfiguration | null;
  spaces(): JoinConfiguration;
}

/** JVM interface net.kyori.adventure.text.JoinConfiguration$Builder. */
export interface JoinConfiguration_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<JoinConfiguration>, j_net_kyori_adventure_util.Buildable_Builder<JoinConfiguration>];
  build(): JoinConfiguration;
  convertor(arg0: JavaFunction<ComponentLike, Component>): JoinConfiguration_Builder;
  lastSeparator(arg0: ComponentLike | null): JoinConfiguration_Builder | null;
  lastSeparatorIfSerial(arg0: ComponentLike | null): JoinConfiguration_Builder | null;
  parentStyle(arg0: j_net_kyori_adventure_text_format.Style): JoinConfiguration_Builder;
  predicate(arg0: JavaPredicate<ComponentLike>): JoinConfiguration_Builder;
  prefix(arg0: ComponentLike | null): JoinConfiguration_Builder | null;
  separator(arg0: ComponentLike | null): JoinConfiguration_Builder | null;
  suffix(arg0: ComponentLike | null): JoinConfiguration_Builder | null;
}
export type JoinConfiguration_Builder = JoinConfiguration_BuilderMembers;
export interface JoinConfiguration_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.KeybindComponent. */
export interface KeybindComponentMembers {
  readonly __javaSupertypes?: readonly [BuildableComponent<KeybindComponent, KeybindComponent_Builder>, ScopedComponent<KeybindComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): KeybindComponent;
  append(arg0: Component): KeybindComponent;
  append(arg0: ComponentBuilder<object, object>): KeybindComponent;
  append(arg0: ComponentLike): KeybindComponent;
  append(...arg0: Array<ComponentLike>): KeybindComponent;
  appendNewline(): Component;
  appendNewline(): KeybindComponent;
  appendSpace(): Component;
  appendSpace(): KeybindComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): KeybindComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): KeybindComponent;
  asComponent(): Component;
  asComponent(): KeybindComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): KeybindComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): KeybindComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): KeybindComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): KeybindComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): KeybindComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): KeybindComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): KeybindComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): KeybindComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): KeybindComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): KeybindComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): KeybindComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): KeybindComponent | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  keybind(): string;
  keybind(arg0: string): KeybindComponent;
  keybind(arg0: KeybindComponent_KeybindLike): KeybindComponent;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): KeybindComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): KeybindComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): KeybindComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): KeybindComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): KeybindComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): KeybindComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): KeybindComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): KeybindComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): KeybindComponent;
  toBuilder(): KeybindComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type KeybindComponent = KeybindComponentMembers;
export interface KeybindComponentStatics {
}

/** JVM interface net.kyori.adventure.text.KeybindComponent$Builder. */
export interface KeybindComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilder<KeybindComponent, KeybindComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): KeybindComponent_Builder;
  append(arg0: Component): KeybindComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): KeybindComponent_Builder;
  append(arg0: ComponentLike): KeybindComponent_Builder;
  append(...arg0: Array<Component>): KeybindComponent_Builder;
  append(...arg0: Array<ComponentLike>): KeybindComponent_Builder;
  appendNewline(): KeybindComponent_Builder;
  appendSpace(): KeybindComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): KeybindComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): KeybindComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): KeybindComponent_Builder;
  asComponent(): Component;
  build(): KeybindComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): KeybindComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): KeybindComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): KeybindComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): KeybindComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): KeybindComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): KeybindComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): KeybindComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): KeybindComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): KeybindComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): KeybindComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): KeybindComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): KeybindComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): KeybindComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  keybind(arg0: string): KeybindComponent_Builder;
  keybind(arg0: KeybindComponent_KeybindLike): KeybindComponent_Builder;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): KeybindComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): KeybindComponent_Builder;
  mergeStyle(arg0: Component): KeybindComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): KeybindComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): KeybindComponent_Builder;
  resetStyle(): KeybindComponent_Builder;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): KeybindComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): KeybindComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): KeybindComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): KeybindComponent_Builder;
}
export type KeybindComponent_Builder = KeybindComponent_BuilderMembers;
export interface KeybindComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.KeybindComponent$KeybindLike. */
export interface KeybindComponent_KeybindLikeMembers {
  asKeybind(): string;
}
export type KeybindComponent_KeybindLike = KeybindComponent_KeybindLikeMembers;
export interface KeybindComponent_KeybindLikeStatics {
}

/** JVM class net.kyori.adventure.text.LinearComponents. */
export interface LinearComponentsMembers {
}
export type LinearComponents = LinearComponentsMembers;
export interface LinearComponentsStatics {
  linear(...arg0: Array<ComponentBuilderApplicable>): Component;
}

/** JVM interface net.kyori.adventure.text.NBTComponent. */
export interface NBTComponentMembers<C /* extends NBTComponent<C, B> */ = unknown, B /* extends NBTComponentBuilder<C, B> */ = unknown> {
  readonly __javaSupertypes?: readonly [BuildableComponent<C, B>];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  interpret(): boolean;
  interpret(arg0: boolean): C;
  nbtPath(): string;
  nbtPath(arg0: string): C;
  separator(): Component | null;
  separator(arg0: ComponentLike | null): C | null;
}
export type NBTComponent<C /* extends NBTComponent<C, B> */ = unknown, B /* extends NBTComponentBuilder<C, B> */ = unknown> = NBTComponentMembers<C, B> & BuildableComponent<C, B>;
export interface NBTComponentStatics {
}

/** JVM interface net.kyori.adventure.text.NBTComponentBuilder. */
export interface NBTComponentBuilderMembers<C /* extends NBTComponent<C, B> */ = unknown, B /* extends NBTComponentBuilder<C, B> */ = unknown> {
  readonly __javaSupertypes?: readonly [ComponentBuilder<C, B>];
  interpret(arg0: boolean): B;
  nbtPath(arg0: string): B;
  separator(arg0: ComponentLike | null): B | null;
}
export type NBTComponentBuilder<C /* extends NBTComponent<C, B> */ = unknown, B /* extends NBTComponentBuilder<C, B> */ = unknown> = NBTComponentBuilderMembers<C, B> & ComponentBuilder<C, B>;
export interface NBTComponentBuilderStatics {
}

/** JVM interface net.kyori.adventure.text.ObjectComponent. */
export interface ObjectComponentMembers {
  readonly __javaSupertypes?: readonly [BuildableComponent<ObjectComponent, ObjectComponent_Builder>, ScopedComponent<ObjectComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): ObjectComponent;
  append(arg0: Component): ObjectComponent;
  append(arg0: ComponentBuilder<object, object>): ObjectComponent;
  append(arg0: ComponentLike): ObjectComponent;
  append(...arg0: Array<ComponentLike>): ObjectComponent;
  appendNewline(): Component;
  appendNewline(): ObjectComponent;
  appendSpace(): Component;
  appendSpace(): ObjectComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): ObjectComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): ObjectComponent;
  asComponent(): Component;
  asComponent(): ObjectComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): ObjectComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): ObjectComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): ObjectComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): ObjectComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  contents(): j_net_kyori_adventure_text_object.ObjectContents;
  contents(arg0: j_net_kyori_adventure_text_object.ObjectContents): ObjectComponent;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): ObjectComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ObjectComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): ObjectComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ObjectComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): ObjectComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): ObjectComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): ObjectComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): ObjectComponent | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): ObjectComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): ObjectComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): ObjectComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): ObjectComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): ObjectComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): ObjectComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): ObjectComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): ObjectComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): ObjectComponent;
  toBuilder(): ObjectComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type ObjectComponent = ObjectComponentMembers;
export interface ObjectComponentStatics {
}

/** JVM interface net.kyori.adventure.text.ObjectComponent$Builder. */
export interface ObjectComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilder<ObjectComponent, ObjectComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): ObjectComponent_Builder;
  append(arg0: Component): ObjectComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): ObjectComponent_Builder;
  append(arg0: ComponentLike): ObjectComponent_Builder;
  append(...arg0: Array<Component>): ObjectComponent_Builder;
  append(...arg0: Array<ComponentLike>): ObjectComponent_Builder;
  appendNewline(): ObjectComponent_Builder;
  appendSpace(): ObjectComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): ObjectComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): ObjectComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): ObjectComponent_Builder;
  asComponent(): Component;
  build(): ObjectComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): ObjectComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): ObjectComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): ObjectComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contents(arg0: j_net_kyori_adventure_text_object.ObjectContents): ObjectComponent_Builder;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): ObjectComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): ObjectComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ObjectComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): ObjectComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ObjectComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): ObjectComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): ObjectComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): ObjectComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): ObjectComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): ObjectComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): ObjectComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): ObjectComponent_Builder;
  mergeStyle(arg0: Component): ObjectComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): ObjectComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): ObjectComponent_Builder;
  resetStyle(): ObjectComponent_Builder;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): ObjectComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): ObjectComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): ObjectComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): ObjectComponent_Builder;
}
export type ObjectComponent_Builder = ObjectComponent_BuilderMembers;
export interface ObjectComponent_BuilderStatics {
}

/** Live JVM enum net.kyori.adventure.text.PatternReplacementResult; constants are host handles, not strings. */
export type PatternReplacementResult = JavaEnum<"net.kyori.adventure.text.PatternReplacementResult", "CONTINUE" | "REPLACE" | "STOP"> & PatternReplacementResultMembers;
export interface PatternReplacementResultMembers {
}
export interface PatternReplacementResultStatics {
  readonly CONTINUE: PatternReplacementResult;
  readonly REPLACE: PatternReplacementResult;
  readonly STOP: PatternReplacementResult;
  valueOf(arg0: string): PatternReplacementResult;
  values(): Array<PatternReplacementResult>;
}

/** JVM interface net.kyori.adventure.text.ScopedComponent. */
export interface ScopedComponentMembers<C /* extends Component */ = unknown> {
  readonly __javaSupertypes?: readonly [Component];
  append(arg0: JavaList<ComponentLike>): C;
  append(arg0: Component): C;
  append(arg0: ComponentBuilder<object, object>): C;
  append(arg0: ComponentLike): C;
  append(...arg0: Array<ComponentLike>): C;
  appendNewline(): C;
  appendSpace(): C;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): C;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): C;
  asComponent(): C;
  children(arg0: JavaList<ComponentLike>): C;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): C | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): C | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): C | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): C;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): C;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): C;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): C;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): C;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): C | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): C | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): C | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  mergeStyle(arg0: Component): C;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): C;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): C;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): C | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): C | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): C;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): C;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): C;
  style(arg0: j_net_kyori_adventure_text_format.Style): C;
}
export type ScopedComponent<C /* extends Component */ = unknown> = ScopedComponentMembers<C> & Component;
export interface ScopedComponentStatics {
}

/** JVM interface net.kyori.adventure.text.ScoreComponent. */
export interface ScoreComponentMembers {
  readonly __javaSupertypes?: readonly [BuildableComponent<ScoreComponent, ScoreComponent_Builder>, ScopedComponent<ScoreComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): ScoreComponent;
  append(arg0: Component): ScoreComponent;
  append(arg0: ComponentBuilder<object, object>): ScoreComponent;
  append(arg0: ComponentLike): ScoreComponent;
  append(...arg0: Array<ComponentLike>): ScoreComponent;
  appendNewline(): Component;
  appendNewline(): ScoreComponent;
  appendSpace(): Component;
  appendSpace(): ScoreComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): ScoreComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): ScoreComponent;
  asComponent(): Component;
  asComponent(): ScoreComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): ScoreComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): ScoreComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): ScoreComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): ScoreComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): ScoreComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ScoreComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): ScoreComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ScoreComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): ScoreComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): ScoreComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): ScoreComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): ScoreComponent | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): ScoreComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): ScoreComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): ScoreComponent;
  name(): string;
  name(arg0: string): ScoreComponent;
  objective(): string;
  objective(arg0: string): ScoreComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): ScoreComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): ScoreComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): ScoreComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): ScoreComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): ScoreComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): ScoreComponent;
  toBuilder(): ScoreComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
  value(): string | null;
  value(arg0: string | null): ScoreComponent | null;
}
export type ScoreComponent = ScoreComponentMembers;
export interface ScoreComponentStatics {
}

/** JVM interface net.kyori.adventure.text.ScoreComponent$Builder. */
export interface ScoreComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilder<ScoreComponent, ScoreComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): ScoreComponent_Builder;
  append(arg0: Component): ScoreComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): ScoreComponent_Builder;
  append(arg0: ComponentLike): ScoreComponent_Builder;
  append(...arg0: Array<Component>): ScoreComponent_Builder;
  append(...arg0: Array<ComponentLike>): ScoreComponent_Builder;
  appendNewline(): ScoreComponent_Builder;
  appendSpace(): ScoreComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): ScoreComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): ScoreComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): ScoreComponent_Builder;
  asComponent(): Component;
  build(): ScoreComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): ScoreComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): ScoreComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): ScoreComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): ScoreComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): ScoreComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ScoreComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): ScoreComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): ScoreComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): ScoreComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): ScoreComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): ScoreComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): ScoreComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): ScoreComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): ScoreComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): ScoreComponent_Builder;
  mergeStyle(arg0: Component): ScoreComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): ScoreComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): ScoreComponent_Builder;
  name(arg0: string): ScoreComponent_Builder;
  objective(arg0: string): ScoreComponent_Builder;
  resetStyle(): ScoreComponent_Builder;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): ScoreComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): ScoreComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): ScoreComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): ScoreComponent_Builder;
  value(arg0: string | null): ScoreComponent_Builder | null;
}
export type ScoreComponent_Builder = ScoreComponent_BuilderMembers;
export interface ScoreComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.SelectorComponent. */
export interface SelectorComponentMembers {
  readonly __javaSupertypes?: readonly [BuildableComponent<SelectorComponent, SelectorComponent_Builder>, ScopedComponent<SelectorComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): SelectorComponent;
  append(arg0: Component): SelectorComponent;
  append(arg0: ComponentBuilder<object, object>): SelectorComponent;
  append(arg0: ComponentLike): SelectorComponent;
  append(...arg0: Array<ComponentLike>): SelectorComponent;
  appendNewline(): Component;
  appendNewline(): SelectorComponent;
  appendSpace(): Component;
  appendSpace(): SelectorComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): SelectorComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): SelectorComponent;
  asComponent(): Component;
  asComponent(): SelectorComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): SelectorComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): SelectorComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): SelectorComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): SelectorComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): SelectorComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): SelectorComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): SelectorComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): SelectorComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): SelectorComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): SelectorComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): SelectorComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): SelectorComponent | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): SelectorComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): SelectorComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): SelectorComponent;
  pattern(): string;
  pattern(arg0: string): SelectorComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  separator(): Component | null;
  separator(arg0: ComponentLike | null): SelectorComponent | null;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): SelectorComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): SelectorComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): SelectorComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): SelectorComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): SelectorComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): SelectorComponent;
  toBuilder(): SelectorComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type SelectorComponent = SelectorComponentMembers;
export interface SelectorComponentStatics {
}

/** JVM interface net.kyori.adventure.text.SelectorComponent$Builder. */
export interface SelectorComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilder<SelectorComponent, SelectorComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): SelectorComponent_Builder;
  append(arg0: Component): SelectorComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): SelectorComponent_Builder;
  append(arg0: ComponentLike): SelectorComponent_Builder;
  append(...arg0: Array<Component>): SelectorComponent_Builder;
  append(...arg0: Array<ComponentLike>): SelectorComponent_Builder;
  appendNewline(): SelectorComponent_Builder;
  appendSpace(): SelectorComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): SelectorComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): SelectorComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): SelectorComponent_Builder;
  asComponent(): Component;
  build(): SelectorComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): SelectorComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): SelectorComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): SelectorComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): SelectorComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): SelectorComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): SelectorComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): SelectorComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): SelectorComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): SelectorComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): SelectorComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): SelectorComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): SelectorComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): SelectorComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): SelectorComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): SelectorComponent_Builder;
  mergeStyle(arg0: Component): SelectorComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): SelectorComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): SelectorComponent_Builder;
  pattern(arg0: string): SelectorComponent_Builder;
  resetStyle(): SelectorComponent_Builder;
  separator(arg0: ComponentLike | null): SelectorComponent_Builder | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): SelectorComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): SelectorComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): SelectorComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): SelectorComponent_Builder;
}
export type SelectorComponent_Builder = SelectorComponent_BuilderMembers;
export interface SelectorComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.StorageNBTComponent. */
export interface StorageNBTComponentMembers {
  readonly __javaSupertypes?: readonly [NBTComponent<StorageNBTComponent, StorageNBTComponent_Builder>, ScopedComponent<StorageNBTComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): StorageNBTComponent;
  append(arg0: Component): StorageNBTComponent;
  append(arg0: ComponentBuilder<object, object>): StorageNBTComponent;
  append(arg0: ComponentLike): StorageNBTComponent;
  append(...arg0: Array<ComponentLike>): StorageNBTComponent;
  appendNewline(): Component;
  appendNewline(): StorageNBTComponent;
  appendSpace(): Component;
  appendSpace(): StorageNBTComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): StorageNBTComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): StorageNBTComponent;
  asComponent(): Component;
  asComponent(): StorageNBTComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): StorageNBTComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): StorageNBTComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): StorageNBTComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): StorageNBTComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): StorageNBTComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): StorageNBTComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): StorageNBTComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): StorageNBTComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): StorageNBTComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): StorageNBTComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): StorageNBTComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): StorageNBTComponent | null;
  interpret(): boolean;
  interpret(arg0: boolean): StorageNBTComponent;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): StorageNBTComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): StorageNBTComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): StorageNBTComponent;
  nbtPath(): string;
  nbtPath(arg0: string): StorageNBTComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  separator(): Component | null;
  separator(arg0: ComponentLike | null): StorageNBTComponent | null;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): StorageNBTComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): StorageNBTComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  storage(): JavaOpaque<"net.kyori.adventure.key.Key">;
  storage(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): StorageNBTComponent;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): StorageNBTComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): StorageNBTComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): StorageNBTComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): StorageNBTComponent;
  toBuilder(): StorageNBTComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type StorageNBTComponent = StorageNBTComponentMembers;
export interface StorageNBTComponentStatics {
}

/** JVM interface net.kyori.adventure.text.StorageNBTComponent$Builder. */
export interface StorageNBTComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [NBTComponentBuilder<StorageNBTComponent, StorageNBTComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): StorageNBTComponent_Builder;
  append(arg0: Component): StorageNBTComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): StorageNBTComponent_Builder;
  append(arg0: ComponentLike): StorageNBTComponent_Builder;
  append(...arg0: Array<Component>): StorageNBTComponent_Builder;
  append(...arg0: Array<ComponentLike>): StorageNBTComponent_Builder;
  appendNewline(): StorageNBTComponent_Builder;
  appendSpace(): StorageNBTComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): StorageNBTComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): StorageNBTComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): StorageNBTComponent_Builder;
  asComponent(): Component;
  build(): StorageNBTComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): StorageNBTComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): StorageNBTComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): StorageNBTComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): StorageNBTComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): StorageNBTComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): StorageNBTComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): StorageNBTComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): StorageNBTComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): StorageNBTComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): StorageNBTComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): StorageNBTComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): StorageNBTComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): StorageNBTComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  interpret(arg0: boolean): StorageNBTComponent_Builder;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): StorageNBTComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): StorageNBTComponent_Builder;
  mergeStyle(arg0: Component): StorageNBTComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): StorageNBTComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): StorageNBTComponent_Builder;
  nbtPath(arg0: string): StorageNBTComponent_Builder;
  resetStyle(): StorageNBTComponent_Builder;
  separator(arg0: ComponentLike | null): StorageNBTComponent_Builder | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): StorageNBTComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): StorageNBTComponent_Builder | null;
  storage(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): StorageNBTComponent_Builder;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): StorageNBTComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): StorageNBTComponent_Builder;
}
export type StorageNBTComponent_Builder = StorageNBTComponent_BuilderMembers;
export interface StorageNBTComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.TextComponent. */
export interface TextComponentMembers {
  readonly __javaSupertypes?: readonly [BuildableComponent<TextComponent, TextComponent_Builder>, ScopedComponent<TextComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): TextComponent;
  append(arg0: Component): TextComponent;
  append(arg0: ComponentBuilder<object, object>): TextComponent;
  append(arg0: ComponentLike): TextComponent;
  append(...arg0: Array<ComponentLike>): TextComponent;
  appendNewline(): Component;
  appendNewline(): TextComponent;
  appendSpace(): Component;
  appendSpace(): TextComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): TextComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TextComponent;
  asComponent(): Component;
  asComponent(): TextComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): TextComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): TextComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): TextComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  content(): string;
  content(arg0: string): TextComponent;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): TextComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TextComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): TextComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TextComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): TextComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): TextComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): TextComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): TextComponent | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): TextComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): TextComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): TextComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): TextComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): TextComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): TextComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): TextComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): TextComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): TextComponent;
  toBuilder(): TextComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type TextComponent = TextComponentMembers;
export interface TextComponentStatics {
  ofChildren(...arg0: Array<ComponentLike>): TextComponent;
}

/** JVM interface net.kyori.adventure.text.TextComponent$Builder. */
export interface TextComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilder<TextComponent, TextComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): TextComponent_Builder;
  append(arg0: Component): TextComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): TextComponent_Builder;
  append(arg0: ComponentLike): TextComponent_Builder;
  append(...arg0: Array<Component>): TextComponent_Builder;
  append(...arg0: Array<ComponentLike>): TextComponent_Builder;
  appendNewline(): TextComponent_Builder;
  appendSpace(): TextComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): TextComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): TextComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): TextComponent_Builder;
  asComponent(): Component;
  build(): TextComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): TextComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): TextComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): TextComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  content(): string;
  content(arg0: string): TextComponent_Builder;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): TextComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): TextComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TextComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): TextComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TextComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): TextComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): TextComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): TextComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): TextComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): TextComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): TextComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): TextComponent_Builder;
  mergeStyle(arg0: Component): TextComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): TextComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): TextComponent_Builder;
  resetStyle(): TextComponent_Builder;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): TextComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): TextComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): TextComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): TextComponent_Builder;
}
export type TextComponent_Builder = TextComponent_BuilderMembers;
export interface TextComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.TextReplacementConfig. */
export interface TextReplacementConfigMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<TextReplacementConfig, TextReplacementConfig_Builder>, JavaOpaque<"net.kyori.examination.Examinable">];
  matchPattern(): JavaOpaque<"java.util.regex.Pattern">;
  toBuilder(): TextReplacementConfig_Builder;
}
export type TextReplacementConfig = TextReplacementConfigMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface TextReplacementConfigStatics {
  builder(): TextReplacementConfig_Builder;
}

/** JVM interface net.kyori.adventure.text.TextReplacementConfig$Builder. */
export interface TextReplacementConfig_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<TextReplacementConfig>, j_net_kyori_adventure_util.Buildable_Builder<TextReplacementConfig>];
  build(): TextReplacementConfig;
  condition(arg0: TextReplacementConfig_Condition): TextReplacementConfig_Builder;
  condition(arg0: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): TextReplacementConfig_Builder;
  match(arg0: string): TextReplacementConfig_Builder;
  match(arg0: JavaOpaque<"java.util.regex.Pattern">): TextReplacementConfig_Builder;
  matchLiteral(arg0: string): TextReplacementConfig_Builder;
  once(): TextReplacementConfig_Builder;
  replaceInsideHoverEvents(arg0: boolean): TextReplacementConfig_Builder;
  replacement(arg0: string): TextReplacementConfig_Builder;
  replacement(arg0: JavaBiFunction<JavaOpaque<"java.util.regex.MatchResult">, TextComponent_Builder, ComponentLike>): TextReplacementConfig_Builder | null;
  replacement(arg0: JavaFunction<TextComponent_Builder, ComponentLike>): TextReplacementConfig_Builder | null;
  replacement(arg0: ComponentLike | null): TextReplacementConfig_Builder | null;
  times(arg0: number): TextReplacementConfig_Builder;
}
export type TextReplacementConfig_Builder = TextReplacementConfig_BuilderMembers;
export interface TextReplacementConfig_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.TextReplacementConfig$Condition. */
export interface TextReplacementConfig_ConditionMembers {
  shouldReplace(arg0: JavaOpaque<"java.util.regex.MatchResult">, arg1: number, arg2: number): PatternReplacementResult;
}
export type TextReplacementConfig_Condition = TextReplacementConfig_ConditionMembers;
export interface TextReplacementConfig_ConditionStatics {
}

/** JVM interface net.kyori.adventure.text.TranslatableComponent. */
export interface TranslatableComponentMembers {
  readonly __javaSupertypes?: readonly [BuildableComponent<TranslatableComponent, TranslatableComponent_Builder>, ScopedComponent<TranslatableComponent>];
  append(arg0: JavaList<ComponentLike>): Component;
  append(arg0: Component): Component;
  append(arg0: ComponentBuilder<object, object>): Component;
  append(arg0: ComponentLike): Component;
  append(...arg0: Array<ComponentLike>): Component;
  append(arg0: JavaList<ComponentLike>): TranslatableComponent;
  append(arg0: Component): TranslatableComponent;
  append(arg0: ComponentBuilder<object, object>): TranslatableComponent;
  append(arg0: ComponentLike): TranslatableComponent;
  append(...arg0: Array<ComponentLike>): TranslatableComponent;
  appendNewline(): Component;
  appendNewline(): TranslatableComponent;
  appendSpace(): Component;
  appendSpace(): TranslatableComponent;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): Component;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Component;
  applyFallbackStyle(arg0: j_net_kyori_adventure_text_format.Style): TranslatableComponent;
  applyFallbackStyle(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TranslatableComponent;
  args(): JavaList<Component>;
  args(arg0: JavaList<ComponentLike>): TranslatableComponent;
  args(...arg0: Array<ComponentLike>): TranslatableComponent;
  arguments(): JavaList<TranslationArgument>;
  arguments(arg0: JavaList<ComponentLike>): TranslatableComponent;
  arguments(...arg0: Array<ComponentLike>): TranslatableComponent;
  asComponent(): Component;
  asComponent(): TranslatableComponent;
  asHoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Component]>): j_net_kyori_adventure_text_event.HoverEvent<Component>;
  children(): JavaList<Component>;
  children(arg0: JavaList<ComponentLike>): Component;
  children(arg0: JavaList<ComponentLike>): TranslatableComponent;
  clickEvent(): j_net_kyori_adventure_text_event.ClickEvent | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): Component | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): TranslatableComponent | null;
  color(): j_net_kyori_adventure_text_format.TextColor | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): TranslatableComponent | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): Component | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): TranslatableComponent | null;
  compact(): Component;
  compact(arg0: j_net_kyori_adventure_text_format.Style | null): Component | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  contains(arg0: Component): boolean;
  contains(arg0: Component, arg1: JavaOpaque<"java.util.function.BiPredicate", [Component, Component]>): boolean;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): Component;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): Component;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): TranslatableComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.TextDecoration_State;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): Component;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TranslatableComponent;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): TranslatableComponent;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): Component;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TranslatableComponent;
  decorations(): JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): Component;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): Component;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): TranslatableComponent;
  detectCycle(arg0: Component): void;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  fallback(): string | null;
  fallback(arg0: string | null): TranslatableComponent | null;
  font(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): Component | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): TranslatableComponent | null;
  hasDecoration(arg0: j_net_kyori_adventure_text_format.TextDecoration): boolean;
  hasStyling(): boolean;
  hoverEvent(): j_net_kyori_adventure_text_event.HoverEvent<object> | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): Component | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): TranslatableComponent | null;
  insertion(): string | null;
  insertion(arg0: string | null): Component | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): TranslatableComponent | null;
  iterable(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): Iterable<Component>;
  iterable(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): Iterable<Component> | null;
  iterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]>;
  iterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Iterator", [Component]> | null;
  key(): string;
  key(arg0: string): TranslatableComponent;
  key(arg0: j_net_kyori_adventure_translation.Translatable): TranslatableComponent;
  mergeStyle(arg0: Component): Component;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): Component;
  mergeStyle(arg0: Component): TranslatableComponent;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): TranslatableComponent;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): TranslatableComponent;
  replaceFirstText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceFirstText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: number): Component | null;
  replaceText(arg0: string, arg1: ComponentLike | null, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: JavaConsumer<TextReplacementConfig_Builder>): Component;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: number): Component | null;
  replaceText(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: JavaFunction<TextComponent_Builder, ComponentLike>, arg2: j_net_kyori_adventure_util.IntFunction2<PatternReplacementResult>): Component | null;
  replaceText(arg0: TextReplacementConfig): Component;
  shadowColor(): j_net_kyori_adventure_text_format.ShadowColor | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): TranslatableComponent | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): Component | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): TranslatableComponent | null;
  spliterator(arg0: ComponentIteratorType, arg1: JavaSet<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]>;
  spliterator(arg0: ComponentIteratorType, ...arg1: Array<ComponentIteratorFlag>): JavaOpaque<"java.util.Spliterator", [Component]> | null;
  style(): j_net_kyori_adventure_text_format.Style;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): Component;
  style(arg0: j_net_kyori_adventure_text_format.Style): Component;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): TranslatableComponent;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>, arg1: j_net_kyori_adventure_text_format.Style_Merge_Strategy): TranslatableComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style_Builder): TranslatableComponent;
  style(arg0: j_net_kyori_adventure_text_format.Style): TranslatableComponent;
  toBuilder(): TranslatableComponent_Builder;
  toBuilder(): ComponentBuilder<object, object>;
  toBuilder(): j_net_kyori_adventure_util.Buildable_Builder;
}
export type TranslatableComponent = TranslatableComponentMembers;
export interface TranslatableComponentStatics {
}

/** JVM interface net.kyori.adventure.text.TranslatableComponent$Builder. */
export interface TranslatableComponent_BuilderMembers {
  readonly __javaSupertypes?: readonly [ComponentBuilder<TranslatableComponent, TranslatableComponent_Builder>];
  append(arg0: Iterable<ComponentLike>): TranslatableComponent_Builder;
  append(arg0: Component): TranslatableComponent_Builder;
  append(arg0: ComponentBuilder<object, object>): TranslatableComponent_Builder;
  append(arg0: ComponentLike): TranslatableComponent_Builder;
  append(...arg0: Array<Component>): TranslatableComponent_Builder;
  append(...arg0: Array<ComponentLike>): TranslatableComponent_Builder;
  appendNewline(): TranslatableComponent_Builder;
  appendSpace(): TranslatableComponent_Builder;
  applicableApply(arg0: ComponentBuilderApplicable): TranslatableComponent_Builder;
  apply(arg0: JavaConsumer<ComponentBuilder<object, object>>): TranslatableComponent_Builder;
  applyDeep(arg0: JavaConsumer<ComponentBuilder<object, object>>): TranslatableComponent_Builder;
  args(arg0: JavaList<ComponentLike>): TranslatableComponent_Builder;
  args(arg0: Component): TranslatableComponent_Builder;
  args(arg0: ComponentBuilder<object, object>): TranslatableComponent_Builder;
  args(...arg0: Array<ComponentBuilder<object, object>>): TranslatableComponent_Builder;
  args(...arg0: Array<ComponentLike>): TranslatableComponent_Builder;
  arguments(arg0: JavaList<ComponentLike>): TranslatableComponent_Builder;
  arguments(...arg0: Array<ComponentLike>): TranslatableComponent_Builder;
  asComponent(): Component;
  build(): TranslatableComponent;
  build(): object;
  children(): JavaList<Component>;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): TranslatableComponent_Builder | null;
  clickEvent(arg0: j_net_kyori_adventure_text_event.ClickEvent | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): TranslatableComponent_Builder | null;
  color(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): TranslatableComponent_Builder | null;
  colorIfAbsent(arg0: j_net_kyori_adventure_text_format.TextColor | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  componentBuilderApply(arg0: ComponentBuilder<object, object>): void;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): TranslatableComponent_Builder;
  decorate(...arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): TranslatableComponent_Builder;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_format.StyleSetter;
  decorate(arg0: Array<j_net_kyori_adventure_text_format.TextDecoration>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TranslatableComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): TranslatableComponent_Builder;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decoration(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): TranslatableComponent_Builder;
  decorationIfAbsent(arg0: j_net_kyori_adventure_text_format.TextDecoration, arg1: j_net_kyori_adventure_text_format.TextDecoration_State): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<j_net_kyori_adventure_text_format.TextDecoration, j_net_kyori_adventure_text_format.TextDecoration_State>): TranslatableComponent_Builder;
  decorations(arg0: JavaSet<j_net_kyori_adventure_text_format.TextDecoration>, arg1: boolean): TranslatableComponent_Builder;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.StyleSetter;
  decorations(arg0: JavaMap<object>): j_net_kyori_adventure_text_format.MutableStyleSetter;
  decorations(arg0: JavaSet<object>, arg1: boolean): j_net_kyori_adventure_text_format.MutableStyleSetter;
  fallback(arg0: string | null): TranslatableComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): TranslatableComponent_Builder | null;
  font(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource<object> | null): TranslatableComponent_Builder | null;
  hoverEvent(arg0: j_net_kyori_adventure_text_event.HoverEventSource | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  insertion(arg0: string | null): TranslatableComponent_Builder | null;
  insertion(arg0: string | null): j_net_kyori_adventure_text_format.StyleSetter | null;
  key(arg0: string): TranslatableComponent_Builder;
  key(arg0: j_net_kyori_adventure_translation.Translatable): TranslatableComponent_Builder;
  mapChildren(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): TranslatableComponent_Builder;
  mapChildrenDeep(arg0: JavaFunction<BuildableComponent<object, object>, BuildableComponent<object, object>>): TranslatableComponent_Builder;
  mergeStyle(arg0: Component): TranslatableComponent_Builder;
  mergeStyle(arg0: Component, arg1: JavaSet<j_net_kyori_adventure_text_format.Style_Merge>): TranslatableComponent_Builder;
  mergeStyle(arg0: Component, ...arg1: Array<j_net_kyori_adventure_text_format.Style_Merge>): TranslatableComponent_Builder;
  resetStyle(): TranslatableComponent_Builder;
  shadowColor(arg0: j_net_kyori_adventure_util.ARGBLike | null): TranslatableComponent_Builder | null;
  shadowColorIfAbsent(arg0: j_net_kyori_adventure_util.ARGBLike | null): TranslatableComponent_Builder | null;
  style(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): TranslatableComponent_Builder;
  style(arg0: j_net_kyori_adventure_text_format.Style): TranslatableComponent_Builder;
}
export type TranslatableComponent_Builder = TranslatableComponent_BuilderMembers;
export interface TranslatableComponent_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.TranslationArgument. */
export interface TranslationArgumentMembers {
  readonly __javaSupertypes?: readonly [TranslationArgumentLike, JavaOpaque<"net.kyori.examination.Examinable">];
  asTranslationArgument(): TranslationArgument;
  value(): object;
}
export type TranslationArgument = TranslationArgumentMembers & TranslationArgumentLike & JavaOpaque<"net.kyori.examination.Examinable">;
export interface TranslationArgumentStatics {
  bool(arg0: boolean): TranslationArgument;
  component(arg0: ComponentLike): TranslationArgument;
  numeric(arg0: number): TranslationArgument;
}

/** JVM interface net.kyori.adventure.text.TranslationArgumentLike. */
export interface TranslationArgumentLikeMembers {
  readonly __javaSupertypes?: readonly [ComponentLike];
  asComponent(): Component;
  asTranslationArgument(): TranslationArgument;
}
export type TranslationArgumentLike = TranslationArgumentLikeMembers & ComponentLike;
export interface TranslationArgumentLikeStatics {
}

/** JVM interface net.kyori.adventure.text.VirtualComponent. */
export interface VirtualComponentMembers {
  readonly __javaSupertypes?: readonly [TextComponent];
  contextType(): JavaClass<object>;
  renderer(): VirtualComponentRenderer<object>;
}
export type VirtualComponent = VirtualComponentMembers & TextComponent;
export interface VirtualComponentStatics {
}

/** JVM interface net.kyori.adventure.text.VirtualComponentRenderer. */
export interface VirtualComponentRendererMembers<C = unknown> {
  apply(arg0: C): ComponentLike;
  fallbackString(): string;
}
export type VirtualComponentRenderer<C = unknown> = VirtualComponentRendererMembers<C>;
export interface VirtualComponentRendererStatics {
}
