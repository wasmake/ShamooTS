// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_dialog from './net.kyori.adventure.dialog.generated.js';
import type * as j_net_kyori_adventure_nbt_api from './net.kyori.adventure.nbt.api.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_text_renderer from './net.kyori.adventure.text.renderer.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.text.event.ClickCallback. */
export interface ClickCallbackMembers<T /* extends j_net_kyori_adventure_audience.Audience */ = unknown> {
  accept(arg0: T): void;
  filter(arg0: JavaPredicate<T>): ClickCallback<T>;
  filter(arg0: JavaPredicate<T>, arg1: JavaConsumer<j_net_kyori_adventure_audience.Audience> | null): ClickCallback<T> | null;
  requiringPermission(arg0: string): ClickCallback<T>;
  requiringPermission(arg0: string, arg1: JavaConsumer<j_net_kyori_adventure_audience.Audience> | null): ClickCallback<T> | null;
}
export type ClickCallback<T /* extends j_net_kyori_adventure_audience.Audience */ = unknown> = ClickCallbackMembers<T>;
export interface ClickCallbackStatics {
  readonly DEFAULT_LIFETIME: JavaOpaque<"java.time.Duration">;
  readonly UNLIMITED_USES: -1;
  widen<W /* extends j_net_kyori_adventure_audience.Audience */, N /* extends W */>(arg0: ClickCallback<N>, arg1: JavaClass<N>): ClickCallback<W>;
  widen<W /* extends j_net_kyori_adventure_audience.Audience */, N /* extends W */>(arg0: ClickCallback<N>, arg1: JavaClass<N>, arg2: JavaConsumer<j_net_kyori_adventure_audience.Audience> | null): ClickCallback<W> | null;
}

/** JVM interface net.kyori.adventure.text.event.ClickCallback$Options. */
export interface ClickCallback_OptionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  lifetime(): JavaOpaque<"java.time.Duration">;
  uses(): number;
}
export type ClickCallback_Options = ClickCallback_OptionsMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ClickCallback_OptionsStatics {
  builder(): ClickCallback_Options_Builder;
  builder(arg0: ClickCallback_Options): ClickCallback_Options_Builder;
}

/** JVM interface net.kyori.adventure.text.event.ClickCallback$Options$Builder. */
export interface ClickCallback_Options_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<ClickCallback_Options>];
  lifetime(arg0: JavaOpaque<"java.time.temporal.TemporalAmount">): ClickCallback_Options_Builder;
  uses(arg0: number): ClickCallback_Options_Builder;
}
export type ClickCallback_Options_Builder = ClickCallback_Options_BuilderMembers & j_net_kyori_adventure_builder.AbstractBuilder<ClickCallback_Options>;
export interface ClickCallback_Options_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.event.ClickCallback$Provider. */
export interface ClickCallback_ProviderMembers {
  create(arg0: ClickCallback<j_net_kyori_adventure_audience.Audience>, arg1: ClickCallback_Options): ClickEvent;
}
export type ClickCallback_Provider = ClickCallback_ProviderMembers;
export interface ClickCallback_ProviderStatics {
}

/** JVM class net.kyori.adventure.text.event.ClickEvent. */
export interface ClickEventMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_format.StyleBuilderApplicable, JavaOpaque<"net.kyori.examination.Examinable">];
  action(): ClickEvent_Action;
  equals(arg0: object | null): boolean | null;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hashCode(): number;
  payload(): ClickEvent_Payload;
  styleApply(arg0: j_net_kyori_adventure_text_format.Style_Builder): void;
  toString(): string;
  value(): string;
}
export type ClickEvent = ClickEventMembers & j_net_kyori_adventure_text_format.StyleBuilderApplicable & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ClickEventStatics {
  callback(arg0: ClickCallback<j_net_kyori_adventure_audience.Audience>): ClickEvent;
  callback(arg0: ClickCallback<j_net_kyori_adventure_audience.Audience>, arg1: JavaConsumer<ClickCallback_Options_Builder>): ClickEvent;
  callback(arg0: ClickCallback<j_net_kyori_adventure_audience.Audience>, arg1: ClickCallback_Options): ClickEvent;
  changePage(arg0: number): ClickEvent;
  changePage(arg0: string): ClickEvent;
  clickEvent(arg0: ClickEvent_Action, arg1: string): ClickEvent;
  copyToClipboard(arg0: string): ClickEvent;
  custom(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: string): ClickEvent;
  custom(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: j_net_kyori_adventure_nbt_api.BinaryTagHolder): ClickEvent;
  openFile(arg0: string): ClickEvent;
  openUrl(arg0: string): ClickEvent;
  openUrl(arg0: JavaOpaque<"java.net.URL">): ClickEvent;
  runCommand(arg0: string): ClickEvent;
  showDialog(arg0: j_net_kyori_adventure_dialog.DialogLike): ClickEvent;
  suggestCommand(arg0: string): ClickEvent;
}

/** Live JVM enum net.kyori.adventure.text.event.ClickEvent$Action; constants are host handles, not strings. */
export type ClickEvent_Action = JavaEnum<"net.kyori.adventure.text.event.ClickEvent$Action", "CHANGE_PAGE" | "COPY_TO_CLIPBOARD" | "CUSTOM" | "OPEN_FILE" | "OPEN_URL" | "RUN_COMMAND" | "SHOW_DIALOG" | "SUGGEST_COMMAND"> & ClickEvent_ActionMembers;
export interface ClickEvent_ActionMembers {
  payloadType(): JavaClass<ClickEvent_Payload>;
  readable(): boolean;
  supports(arg0: ClickEvent_Payload): boolean;
  toString(): string;
}
export interface ClickEvent_ActionStatics {
  readonly CHANGE_PAGE: ClickEvent_Action;
  readonly COPY_TO_CLIPBOARD: ClickEvent_Action;
  readonly CUSTOM: ClickEvent_Action;
  readonly OPEN_FILE: ClickEvent_Action;
  readonly OPEN_URL: ClickEvent_Action;
  readonly RUN_COMMAND: ClickEvent_Action;
  readonly SHOW_DIALOG: ClickEvent_Action;
  readonly SUGGEST_COMMAND: ClickEvent_Action;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, ClickEvent_Action>;
  valueOf(arg0: string): ClickEvent_Action;
  values(): Array<ClickEvent_Action>;
}

/** JVM interface net.kyori.adventure.text.event.ClickEvent$Payload. */
export interface ClickEvent_PayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
}
export type ClickEvent_Payload = ClickEvent_PayloadMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ClickEvent_PayloadStatics {
  custom(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: string): ClickEvent_Payload_Custom;
  custom(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: j_net_kyori_adventure_nbt_api.BinaryTagHolder): ClickEvent_Payload_Custom;
  dialog(arg0: j_net_kyori_adventure_dialog.DialogLike): ClickEvent_Payload_Dialog;
  integer(arg0: number): ClickEvent_Payload_Int;
  string(arg0: string): ClickEvent_Payload_Text;
}

/** JVM interface net.kyori.adventure.text.event.ClickEvent$Payload$Custom. */
export interface ClickEvent_Payload_CustomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Keyed">, ClickEvent_Payload];
  data(): string;
  nbt(): j_net_kyori_adventure_nbt_api.BinaryTagHolder;
}
export type ClickEvent_Payload_Custom = ClickEvent_Payload_CustomMembers & JavaOpaque<"net.kyori.adventure.key.Keyed"> & ClickEvent_Payload;
export interface ClickEvent_Payload_CustomStatics {
}

/** JVM interface net.kyori.adventure.text.event.ClickEvent$Payload$Dialog. */
export interface ClickEvent_Payload_DialogMembers {
  readonly __javaSupertypes?: readonly [ClickEvent_Payload];
  dialog(): j_net_kyori_adventure_dialog.DialogLike;
}
export type ClickEvent_Payload_Dialog = ClickEvent_Payload_DialogMembers & ClickEvent_Payload;
export interface ClickEvent_Payload_DialogStatics {
}

/** JVM interface net.kyori.adventure.text.event.ClickEvent$Payload$Int. */
export interface ClickEvent_Payload_IntMembers {
  readonly __javaSupertypes?: readonly [ClickEvent_Payload];
  integer(): number;
}
export type ClickEvent_Payload_Int = ClickEvent_Payload_IntMembers & ClickEvent_Payload;
export interface ClickEvent_Payload_IntStatics {
}

/** JVM interface net.kyori.adventure.text.event.ClickEvent$Payload$Text. */
export interface ClickEvent_Payload_TextMembers {
  readonly __javaSupertypes?: readonly [ClickEvent_Payload];
  value(): string;
}
export type ClickEvent_Payload_Text = ClickEvent_Payload_TextMembers & ClickEvent_Payload;
export interface ClickEvent_Payload_TextStatics {
}

/** JVM interface net.kyori.adventure.text.event.DataComponentValue. */
export interface DataComponentValueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
}
export type DataComponentValue = DataComponentValueMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface DataComponentValueStatics {
  removed(): DataComponentValue_Removed;
}

/** JVM interface net.kyori.adventure.text.event.DataComponentValue$Removed. */
export interface DataComponentValue_RemovedMembers {
  readonly __javaSupertypes?: readonly [DataComponentValue];
}
export type DataComponentValue_Removed = DataComponentValue_RemovedMembers & DataComponentValue;
export interface DataComponentValue_RemovedStatics {
}

/** JVM interface net.kyori.adventure.text.event.DataComponentValue$TagSerializable. */
export interface DataComponentValue_TagSerializableMembers {
  readonly __javaSupertypes?: readonly [DataComponentValue];
  asBinaryTag(): j_net_kyori_adventure_nbt_api.BinaryTagHolder;
}
export type DataComponentValue_TagSerializable = DataComponentValue_TagSerializableMembers & DataComponentValue;
export interface DataComponentValue_TagSerializableStatics {
}

/** JVM class net.kyori.adventure.text.event.DataComponentValueConverterRegistry. */
export interface DataComponentValueConverterRegistryMembers {
}
export type DataComponentValueConverterRegistry = DataComponentValueConverterRegistryMembers;
export interface DataComponentValueConverterRegistryStatics {
  convert<O /* extends DataComponentValue */>(arg0: JavaClass<O>, arg1: JavaOpaque<"net.kyori.adventure.key.Key">, arg2: DataComponentValue): O;
  knownProviders(): JavaSet<JavaOpaque<"net.kyori.adventure.key.Key">>;
}

/** JVM interface net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion. */
export interface DataComponentValueConverterRegistry_ConversionMembers<I = unknown, O = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  convert(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: I): O;
  destination(): JavaClass<O>;
  source(): JavaClass<I>;
}
export type DataComponentValueConverterRegistry_Conversion<I = unknown, O = unknown> = DataComponentValueConverterRegistry_ConversionMembers<I, O> & JavaOpaque<"net.kyori.examination.Examinable">;
export interface DataComponentValueConverterRegistry_ConversionStatics {
  convert<I1, O1>(arg0: JavaClass<I1>, arg1: JavaClass<O1>, arg2: JavaBiFunction<JavaOpaque<"net.kyori.adventure.key.Key">, I1, O1>): DataComponentValueConverterRegistry_Conversion<I1, O1>;
}

/** JVM interface net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Provider. */
export interface DataComponentValueConverterRegistry_ProviderMembers {
  conversions(): Iterable<DataComponentValueConverterRegistry_Conversion<object, object>>;
  id(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type DataComponentValueConverterRegistry_Provider = DataComponentValueConverterRegistry_ProviderMembers;
export interface DataComponentValueConverterRegistry_ProviderStatics {
}

/** JVM class net.kyori.adventure.text.event.HoverEvent. */
export interface HoverEventMembers<V = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">, HoverEventSource<V>, j_net_kyori_adventure_text_format.StyleBuilderApplicable];
  action(): HoverEvent_Action<V>;
  asHoverEvent(): HoverEvent<V>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [V]>): HoverEvent<V>;
  equals(arg0: object | null): boolean | null;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hashCode(): number;
  styleApply(arg0: j_net_kyori_adventure_text_format.Style_Builder): void;
  toString(): string;
  value(): V;
  value(arg0: V): HoverEvent<V>;
  withRenderedValue<C>(arg0: j_net_kyori_adventure_text_renderer.ComponentRenderer<C>, arg1: C): HoverEvent<V>;
}
export type HoverEvent<V = unknown> = HoverEventMembers<V> & JavaOpaque<"net.kyori.examination.Examinable"> & HoverEventSource<V> & j_net_kyori_adventure_text_format.StyleBuilderApplicable;
export interface HoverEventStatics {
  hoverEvent<V>(arg0: HoverEvent_Action<V>, arg1: V): HoverEvent<V>;
  showAchievement(arg0: string): HoverEvent<string>;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"java.util.UUID">): HoverEvent<HoverEvent_ShowEntity>;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"java.util.UUID">, arg2: j_net_kyori_adventure_text.Component | null): HoverEvent<HoverEvent_ShowEntity> | null;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: JavaOpaque<"java.util.UUID">): HoverEvent<HoverEvent_ShowEntity>;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: JavaOpaque<"java.util.UUID">, arg2: j_net_kyori_adventure_text.Component | null): HoverEvent<HoverEvent_ShowEntity> | null;
  showEntity(arg0: HoverEvent_ShowEntity): HoverEvent<HoverEvent_ShowEntity>;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number): HoverEvent<HoverEvent_ShowItem>;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number, arg2: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent<HoverEvent_ShowItem> | null;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number): HoverEvent<HoverEvent_ShowItem>;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number, arg2: JavaMap<JavaOpaque<"net.kyori.adventure.key.Key">, DataComponentValue>): HoverEvent<HoverEvent_ShowItem>;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number, arg2: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent<HoverEvent_ShowItem> | null;
  showItem(arg0: HoverEvent_ShowItem): HoverEvent<HoverEvent_ShowItem>;
  showText(arg0: j_net_kyori_adventure_text.Component): HoverEvent<j_net_kyori_adventure_text.Component>;
  showText(arg0: j_net_kyori_adventure_text.ComponentLike): HoverEvent<j_net_kyori_adventure_text.Component>;
}

/** JVM class net.kyori.adventure.text.event.HoverEvent$Action. */
export interface HoverEvent_ActionMembers<V = unknown> {
  readable(): boolean;
  toString(): string;
  type(): JavaClass<V>;
}
export type HoverEvent_Action<V = unknown> = HoverEvent_ActionMembers<V>;
export interface HoverEvent_ActionStatics {
  readonly NAMES: j_net_kyori_adventure_util.Index<string, HoverEvent_Action<object>>;
  readonly SHOW_ACHIEVEMENT: HoverEvent_Action<string>;
  readonly SHOW_ENTITY: HoverEvent_Action<HoverEvent_ShowEntity>;
  readonly SHOW_ITEM: HoverEvent_Action<HoverEvent_ShowItem>;
  readonly SHOW_TEXT: HoverEvent_Action<j_net_kyori_adventure_text.Component>;
}

/** JVM class net.kyori.adventure.text.event.HoverEvent$ShowEntity. */
export interface HoverEvent_ShowEntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  equals(arg0: object | null): boolean | null;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hashCode(): number;
  id(): JavaOpaque<"java.util.UUID">;
  id(arg0: JavaOpaque<"java.util.UUID">): HoverEvent_ShowEntity;
  name(): j_net_kyori_adventure_text.Component | null;
  name(arg0: j_net_kyori_adventure_text.Component | null): HoverEvent_ShowEntity | null;
  toString(): string;
  type(): JavaOpaque<"net.kyori.adventure.key.Key">;
  type(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): HoverEvent_ShowEntity;
  type(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">): HoverEvent_ShowEntity;
}
export type HoverEvent_ShowEntity = HoverEvent_ShowEntityMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface HoverEvent_ShowEntityStatics {
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"java.util.UUID">): HoverEvent_ShowEntity;
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"java.util.UUID">, arg2: j_net_kyori_adventure_text.Component | null): HoverEvent_ShowEntity | null;
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: JavaOpaque<"java.util.UUID">): HoverEvent_ShowEntity;
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: JavaOpaque<"java.util.UUID">, arg2: j_net_kyori_adventure_text.Component | null): HoverEvent_ShowEntity | null;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"java.util.UUID">): HoverEvent_ShowEntity;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"java.util.UUID">, arg2: j_net_kyori_adventure_text.Component | null): HoverEvent_ShowEntity | null;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: JavaOpaque<"java.util.UUID">): HoverEvent_ShowEntity;
  showEntity(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: JavaOpaque<"java.util.UUID">, arg2: j_net_kyori_adventure_text.Component | null): HoverEvent_ShowEntity | null;
}

/** JVM class net.kyori.adventure.text.event.HoverEvent$ShowItem. */
export interface HoverEvent_ShowItemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  count(): number;
  count(arg0: number): HoverEvent_ShowItem;
  dataComponents(): JavaMap<JavaOpaque<"net.kyori.adventure.key.Key">, DataComponentValue>;
  dataComponents(arg0: JavaMap<JavaOpaque<"net.kyori.adventure.key.Key">, DataComponentValue>): HoverEvent_ShowItem;
  dataComponentsAs<V /* extends DataComponentValue */>(arg0: JavaClass<V>): JavaMap<JavaOpaque<"net.kyori.adventure.key.Key">, V>;
  equals(arg0: object | null): boolean | null;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hashCode(): number;
  item(): JavaOpaque<"net.kyori.adventure.key.Key">;
  item(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): HoverEvent_ShowItem;
  nbt(): j_net_kyori_adventure_nbt_api.BinaryTagHolder | null;
  nbt(arg0: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent_ShowItem | null;
  toString(): string;
}
export type HoverEvent_ShowItem = HoverEvent_ShowItemMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface HoverEvent_ShowItemStatics {
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number): HoverEvent_ShowItem;
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number, arg2: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent_ShowItem | null;
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number): HoverEvent_ShowItem;
  of(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number, arg2: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent_ShowItem | null;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number): HoverEvent_ShowItem;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number, arg2: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent_ShowItem | null;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number): HoverEvent_ShowItem;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number, arg2: JavaMap<JavaOpaque<"net.kyori.adventure.key.Key">, DataComponentValue>): HoverEvent_ShowItem;
  showItem(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">, arg1: number, arg2: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): HoverEvent_ShowItem | null;
}

/** JVM interface net.kyori.adventure.text.event.HoverEventSource. */
export interface HoverEventSourceMembers<V = unknown> {
  asHoverEvent(): HoverEvent<V>;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [V]>): HoverEvent<V>;
}
export type HoverEventSource<V = unknown> = HoverEventSourceMembers<V>;
export interface HoverEventSourceStatics {
  unbox<V>(arg0: HoverEventSource<V> | null): HoverEvent<V> | null;
}
