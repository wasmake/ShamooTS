// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments_selector from './net.minecraft.commands.arguments.selector.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat_contents from './net.minecraft.network.chat.contents.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM interface net.minecraft.network.chat.ChatDecorator. */
export interface ChatDecoratorMembers {
  decorate(arg0: j_net_minecraft_server_level.ServerPlayer | null, arg1: j_net_minecraft_commands.CommandSourceStack | null, arg2: Component): PromiseLike<Component> | null;
  decorate(arg0: j_net_minecraft_server_level.ServerPlayer | null, arg1: Component): PromiseLike<Component> | null;
}
export type ChatDecorator = ChatDecoratorMembers;
export interface ChatDecoratorStatics {
  readonly PLAIN: ChatDecorator;
}

/** JVM record net.minecraft.network.chat.ChatType. */
export interface ChatTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  chat(): ChatTypeDecoration;
  equals(arg0: object): boolean;
  hashCode(): number;
  narration(): ChatTypeDecoration;
  toString(): string;
}
export type ChatType = ChatTypeMembers & JavaOpaque<"java.lang.Record">;
export interface ChatTypeStatics {
  new(arg0: ChatTypeDecoration, arg1: ChatTypeDecoration): ChatType;
  readonly CHAT: j_net_minecraft_resources.ResourceKey<ChatType>;
  readonly DEFAULT_CHAT_DECORATION: ChatTypeDecoration;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChatType]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ChatType>;
  readonly EMOTE_COMMAND: j_net_minecraft_resources.ResourceKey<ChatType>;
  readonly MSG_COMMAND_INCOMING: j_net_minecraft_resources.ResourceKey<ChatType>;
  readonly MSG_COMMAND_OUTGOING: j_net_minecraft_resources.ResourceKey<ChatType>;
  readonly SAY_COMMAND: j_net_minecraft_resources.ResourceKey<ChatType>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<ChatType>>;
  readonly TEAM_MSG_COMMAND_INCOMING: j_net_minecraft_resources.ResourceKey<ChatType>;
  readonly TEAM_MSG_COMMAND_OUTGOING: j_net_minecraft_resources.ResourceKey<ChatType>;
  bind(arg0: j_net_minecraft_resources.ResourceKey<ChatType>, arg1: j_net_minecraft_commands.CommandSourceStack): ChatType_Bound;
  bind(arg0: j_net_minecraft_resources.ResourceKey<ChatType>, arg1: j_net_minecraft_core.RegistryAccess, arg2: Component): ChatType_Bound;
  bind(arg0: j_net_minecraft_resources.ResourceKey<ChatType>, arg1: j_net_minecraft_world_entity.Entity): ChatType_Bound;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<ChatType>): void;
}

/** JVM record net.minecraft.network.chat.ChatType$Bound. */
export interface ChatType_BoundMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  chatType(): j_net_minecraft_core.Holder<ChatType>;
  decorate(arg0: Component): Component;
  decorateNarration(arg0: Component): Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): Component;
  targetName(): JavaOptional<Component>;
  toString(): string;
  withTargetName(arg0: Component): ChatType_Bound;
}
export type ChatType_Bound = ChatType_BoundMembers & JavaOpaque<"java.lang.Record">;
export interface ChatType_BoundStatics {
  new(arg0: j_net_minecraft_core.Holder<ChatType>, arg1: Component, arg2: JavaOptional<Component>): ChatType_Bound;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ChatType_Bound>;
}

/** JVM record net.minecraft.network.chat.ChatTypeDecoration. */
export interface ChatTypeDecorationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  decorate(arg0: Component, arg1: ChatType_Bound): Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  parameters(): JavaList<ChatTypeDecoration_Parameter>;
  style(): Style;
  toString(): string;
  translationKey(): string;
}
export type ChatTypeDecoration = ChatTypeDecorationMembers & JavaOpaque<"java.lang.Record">;
export interface ChatTypeDecorationStatics {
  new(arg0: string, arg1: JavaList<ChatTypeDecoration_Parameter>, arg2: Style): ChatTypeDecoration;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChatTypeDecoration]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ChatTypeDecoration>;
  incomingDirectMessage(arg0: string): ChatTypeDecoration;
  outgoingDirectMessage(arg0: string): ChatTypeDecoration;
  teamMessage(arg0: string): ChatTypeDecoration;
  withSender(arg0: string): ChatTypeDecoration;
}

/** Live JVM enum net.minecraft.network.chat.ChatTypeDecoration$Parameter; constants are host handles, not strings. */
export type ChatTypeDecoration_Parameter = JavaEnum<"net.minecraft.network.chat.ChatTypeDecoration$Parameter", "CONTENT" | "SENDER" | "TARGET"> & ChatTypeDecoration_ParameterMembers;
export interface ChatTypeDecoration_ParameterMembers {
  getSerializedName(): string;
  select(arg0: Component, arg1: ChatType_Bound): Component;
}
export interface ChatTypeDecoration_ParameterStatics {
  readonly CONTENT: ChatTypeDecoration_Parameter;
  readonly SENDER: ChatTypeDecoration_Parameter;
  readonly TARGET: ChatTypeDecoration_Parameter;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChatTypeDecoration_Parameter]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ChatTypeDecoration_Parameter>;
  valueOf(arg0: string): ChatTypeDecoration_Parameter;
  values(): Array<ChatTypeDecoration_Parameter>;
}

/** JVM interface net.minecraft.network.chat.ChatTypeDecoration$Parameter$Selector. */
export interface ChatTypeDecoration_Parameter_SelectorMembers {
  select(arg0: Component, arg1: ChatType_Bound): Component;
}
export type ChatTypeDecoration_Parameter_Selector = ChatTypeDecoration_Parameter_SelectorMembers;
export interface ChatTypeDecoration_Parameter_SelectorStatics {
}

/** JVM interface net.minecraft.network.chat.ClickEvent. */
export interface ClickEventMembers {
  action(): ClickEvent_Action;
}
export type ClickEvent = ClickEventMembers;
export interface ClickEventStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ClickEvent]>;
}

/** Live JVM enum net.minecraft.network.chat.ClickEvent$Action; constants are host handles, not strings. */
export type ClickEvent_Action = JavaEnum<"net.minecraft.network.chat.ClickEvent$Action", "CHANGE_PAGE" | "COPY_TO_CLIPBOARD" | "CUSTOM" | "OPEN_FILE" | "OPEN_URL" | "RUN_COMMAND" | "SHOW_DIALOG" | "SUGGEST_COMMAND"> & ClickEvent_ActionMembers;
export interface ClickEvent_ActionMembers {
  getSerializedName(): string;
  isAllowedFromServer(): boolean;
  valueCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent]>;
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
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ClickEvent_Action]>;
  readonly UNSAFE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ClickEvent_Action]>;
  filterForSerialization(arg0: ClickEvent_Action): JavaOpaque<"com.mojang.serialization.DataResult", [ClickEvent_Action]>;
  valueOf(arg0: string): ClickEvent_Action;
  values(): Array<ClickEvent_Action>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$ChangePage. */
export interface ClickEvent_ChangePageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  equals(arg0: object): boolean;
  hashCode(): number;
  page(): number;
  toString(): string;
}
export type ClickEvent_ChangePage = ClickEvent_ChangePageMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_ChangePageStatics {
  new(arg0: number): ClickEvent_ChangePage;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_ChangePage]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$CopyToClipboard. */
export interface ClickEvent_CopyToClipboardMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  value(): string;
}
export type ClickEvent_CopyToClipboard = ClickEvent_CopyToClipboardMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_CopyToClipboardStatics {
  new(arg0: string): ClickEvent_CopyToClipboard;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_CopyToClipboard]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$Custom. */
export interface ClickEvent_CustomMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  payload(): JavaOptional<j_net_minecraft_nbt.Tag>;
  toString(): string;
}
export type ClickEvent_Custom = ClickEvent_CustomMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_CustomStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOptional<j_net_minecraft_nbt.Tag>): ClickEvent_Custom;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_Custom]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$OpenFile. */
export interface ClickEvent_OpenFileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  equals(arg0: object): boolean;
  file(): JavaOpaque<"java.io.File">;
  hashCode(): number;
  path(): string;
  toString(): string;
}
export type ClickEvent_OpenFile = ClickEvent_OpenFileMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_OpenFileStatics {
  new(arg0: JavaOpaque<"java.io.File">): ClickEvent_OpenFile;
  new(arg0: string): ClickEvent_OpenFile;
  new(arg0: JavaOpaque<"java.nio.file.Path">): ClickEvent_OpenFile;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_OpenFile]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$OpenUrl. */
export interface ClickEvent_OpenUrlMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  uri(): JavaOpaque<"java.net.URI">;
}
export type ClickEvent_OpenUrl = ClickEvent_OpenUrlMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_OpenUrlStatics {
  new(arg0: JavaOpaque<"java.net.URI">): ClickEvent_OpenUrl;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_OpenUrl]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$RunCommand. */
export interface ClickEvent_RunCommandMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  command(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ClickEvent_RunCommand = ClickEvent_RunCommandMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_RunCommandStatics {
  new(arg0: string): ClickEvent_RunCommand;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_RunCommand]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$ShowDialog. */
export interface ClickEvent_ShowDialogMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  dialog(): j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ClickEvent_ShowDialog = ClickEvent_ShowDialogMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_ShowDialogStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>): ClickEvent_ShowDialog;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_ShowDialog]>;
}

/** JVM record net.minecraft.network.chat.ClickEvent$SuggestCommand. */
export interface ClickEvent_SuggestCommandMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ClickEvent];
  action(): ClickEvent_Action;
  command(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ClickEvent_SuggestCommand = ClickEvent_SuggestCommandMembers & JavaOpaque<"java.lang.Record"> & ClickEvent;
export interface ClickEvent_SuggestCommandStatics {
  new(arg0: string): ClickEvent_SuggestCommand;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClickEvent_SuggestCommand]>;
}

/** JVM class net.minecraft.network.chat.CommonComponents. */
export interface CommonComponentsMembers {
}
export type CommonComponents = CommonComponentsMembers;
export interface CommonComponentsStatics {
  new(): CommonComponents;
  readonly CONNECT_FAILED: Component;
  readonly ELLIPSIS: Component;
  readonly EMPTY: Component;
  readonly GUI_ACKNOWLEDGE: Component;
  readonly GUI_BACK: Component;
  readonly GUI_CANCEL: Component;
  readonly GUI_CONTINUE: Component;
  readonly GUI_COPY_LINK_TO_CLIPBOARD: Component;
  readonly GUI_DISCONNECT: Component;
  readonly GUI_DONE: Component;
  readonly GUI_NO: Component;
  readonly GUI_OK: Component;
  readonly GUI_OPEN_IN_BROWSER: Component;
  readonly GUI_PROCEED: Component;
  readonly GUI_RETURN_TO_MENU: Component;
  readonly GUI_TO_TITLE: Component;
  readonly GUI_YES: Component;
  readonly NARRATION_SEPARATOR: Component;
  readonly NEW_LINE: Component;
  readonly OPTION_OFF: Component;
  readonly OPTION_ON: Component;
  readonly SPACE: Component;
  readonly TRANSFER_CONNECT_FAILED: Component;
  days(arg0: bigint): MutableComponent;
  disconnectButtonLabel(arg0: boolean): Component;
  hours(arg0: bigint): MutableComponent;
  joinForNarration(...arg0: Array<Component>): MutableComponent;
  joinLines(arg0: JavaCollection<Component>): Component;
  joinLines(...arg0: Array<Component>): Component;
  minutes(arg0: bigint): MutableComponent;
  optionNameValue(arg0: Component, arg1: Component): MutableComponent;
  optionStatus(arg0: Component, arg1: boolean): MutableComponent;
  optionStatus(arg0: boolean): Component;
  space(): MutableComponent;
}

/** JVM interface net.minecraft.network.chat.Component. */
export interface ComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.Message">, FormattedText, Iterable<Component>];
  contains(arg0: Component): boolean;
  copy(): MutableComponent;
  getContents(): ComponentContents;
  getSiblings(): JavaList<Component>;
  getString(): string;
  getString(arg0: number): string;
  getStyle(): Style;
  getVisualOrderText(): j_net_minecraft_util.FormattedCharSequence;
  iterator(): JavaOpaque<"java.util.Iterator", [Component]>;
  plainCopy(): MutableComponent;
  stream(): JavaOpaque<"java.util.stream.Stream", [Component]>;
  toFlatList(): JavaList<Component>;
  toFlatList(arg0: Style): JavaList<Component>;
  tryCollapseToString(): string | null;
  visit<T>(arg0: FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: FormattedText_StyledContentConsumer<T>, arg1: Style): JavaOptional<T>;
}
export type Component = ComponentMembers & JavaOpaque<"com.mojang.brigadier.Message"> & FormattedText;
export interface ComponentStatics {
  empty(): MutableComponent;
  keybind(arg0: string): MutableComponent;
  literal(arg0: string): MutableComponent;
  nbt(arg0: string, arg1: boolean, arg2: JavaOptional<Component>, arg3: j_net_minecraft_network_chat_contents.DataSource): MutableComponent;
  nullToEmpty(arg0: string | null): Component | null;
  score(arg0: string, arg1: string): MutableComponent;
  score(arg0: j_net_minecraft_commands_arguments_selector.SelectorPattern, arg1: string): MutableComponent;
  selector(arg0: j_net_minecraft_commands_arguments_selector.SelectorPattern, arg1: JavaOptional<Component>): MutableComponent;
  translatable(arg0: string): MutableComponent;
  translatable(arg0: string, ...arg1: Array<object>): MutableComponent;
  translatableEscape(arg0: string, ...arg1: Array<object>): MutableComponent;
  translatableWithFallback(arg0: string, arg1: string | null): MutableComponent | null;
  translatableWithFallback(arg0: string, arg1: string | null, ...arg2: Array<object>): MutableComponent | null;
  translationArg(arg0: JavaOpaque<"com.mojang.brigadier.Message">): Component;
  translationArg(arg0: JavaOpaque<"java.net.URI">): Component;
  translationArg(arg0: JavaOpaque<"java.util.Date">): Component;
  translationArg(arg0: JavaOpaque<"java.util.UUID">): Component;
  translationArg(arg0: j_net_minecraft_resources.ResourceLocation): Component;
  translationArg(arg0: j_net_minecraft_world_level.ChunkPos): Component;
}

/** JVM interface net.minecraft.network.chat.ComponentContents. */
export interface ComponentContentsMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number): MutableComponent | null;
  type(): ComponentContents_Type<object>;
  visit<T>(arg0: FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: FormattedText_StyledContentConsumer<T>, arg1: Style): JavaOptional<T>;
}
export type ComponentContents = ComponentContentsMembers;
export interface ComponentContentsStatics {
}

/** JVM record net.minecraft.network.chat.ComponentContents$Type. */
export interface ComponentContents_TypeMembers<T /* extends ComponentContents */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_util.StringRepresentable];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  equals(arg0: object): boolean;
  getSerializedName(): string;
  hashCode(): number;
  id(): string;
  toString(): string;
}
export type ComponentContents_Type<T /* extends ComponentContents */ = unknown> = ComponentContents_TypeMembers<T> & JavaOpaque<"java.lang.Record"> & j_net_minecraft_util.StringRepresentable;
export interface ComponentContents_TypeStatics {
  new<T /* extends ComponentContents */>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: string): ComponentContents_Type<T>;
}

/** JVM class net.minecraft.network.chat.ComponentSerialization. */
export interface ComponentSerializationMembers {
}
export type ComponentSerialization = ComponentSerializationMembers;
export interface ComponentSerializationStatics {
  new(): ComponentSerialization;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Component]>;
  readonly DONT_RENDER_TRANSLATABLES: JavaOpaque<"java.lang.ThreadLocal", [boolean]>;
  readonly OPTIONAL_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaOptional<Component>>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Component>;
  readonly TRUSTED_CONTEXT_FREE_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Component>;
  readonly TRUSTED_OPTIONAL_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaOptional<Component>>;
  readonly TRUSTED_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Component>;
  createLegacyComponentMatcher<T /* extends j_net_minecraft_util.StringRepresentable */, E>(arg0: Array<T>, arg1: JavaFunction<T, JavaOpaque<"com.mojang.serialization.MapCodec", [E]>>, arg2: JavaFunction<E, T>, arg3: string): JavaOpaque<"com.mojang.serialization.MapCodec", [E]>;
  flatRestrictedCodec(arg0: number): JavaOpaque<"com.mojang.serialization.Codec", [Component]>;
  localizedCodec(arg0: JavaOpaque<"java.util.Locale">): JavaOpaque<"com.mojang.serialization.Codec", [Component]> | null;
}

/** JVM class net.minecraft.network.chat.ComponentUtils. */
export interface ComponentUtilsMembers {
}
export type ComponentUtils = ComponentUtilsMembers;
export interface ComponentUtilsStatics {
  new(): ComponentUtils;
  readonly DEFAULT_NO_STYLE_SEPARATOR: Component;
  readonly DEFAULT_SEPARATOR: Component;
  readonly DEFAULT_SEPARATOR_TEXT: ", ";
  copyOnClickText(arg0: string): MutableComponent;
  formatAndSortList<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: JavaCollection<T>, arg1: JavaFunction<T, Component>): Component;
  formatList(arg0: JavaCollection<string>): Component;
  formatList<T>(arg0: JavaCollection<T>, arg1: JavaOptional<Component>, arg2: JavaFunction<T, Component>): MutableComponent;
  formatList<T>(arg0: JavaCollection<T>, arg1: JavaFunction<T, Component>): Component;
  formatList(arg0: JavaCollection<Component>, arg1: Component): Component;
  formatList<T>(arg0: JavaCollection<T>, arg1: Component, arg2: JavaFunction<T, Component>): MutableComponent;
  fromMessage(arg0: JavaOpaque<"com.mojang.brigadier.Message">): Component;
  isTranslationResolvable(arg0: Component | null): boolean | null;
  isValidSelector(arg0: Component): boolean;
  mergeStyles(arg0: MutableComponent, arg1: Style): MutableComponent;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  updateForEntity(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: JavaOptional<Component>, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): JavaOptional<MutableComponent> | null;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  updateForEntity(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: Component, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): MutableComponent | null;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  updateSeparatorForEntity(arg0: j_net_minecraft_commands.CommandSourceStack | null, arg1: JavaOptional<Component>, arg2: j_net_minecraft_world_entity.Entity | null, arg3: number): JavaOptional<MutableComponent> | null;
  wrapInSquareBrackets(arg0: Component): MutableComponent;
}

/** JVM class net.minecraft.network.chat.FilterMask. */
export interface FilterMaskMembers {
  apply(arg0: string): string | null;
  applyWithFormatting(arg0: string): Component | null;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  isFullyFiltered(): boolean;
  setFiltered(arg0: number): void;
}
export type FilterMask = FilterMaskMembers;
export interface FilterMaskStatics {
  new(arg0: number): FilterMask;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FilterMask]>;
  readonly FILTERED_STYLE: Style;
  readonly FULLY_FILTERED: FilterMask;
  readonly PASS_THROUGH: FilterMask;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): FilterMask;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: FilterMask): void;
}

/** JVM interface net.minecraft.network.chat.FormattedText. */
export interface FormattedTextMembers {
  getString(): string;
  visit<T>(arg0: FormattedText_ContentConsumer<T>): JavaOptional<T>;
  visit<T>(arg0: FormattedText_StyledContentConsumer<T>, arg1: Style): JavaOptional<T>;
}
export type FormattedText = FormattedTextMembers;
export interface FormattedTextStatics {
  readonly EMPTY: FormattedText;
  readonly STOP_ITERATION: JavaOptional<j_net_minecraft_util.Unit>;
  composite(arg0: JavaList<FormattedText>): FormattedText;
  composite(...arg0: Array<FormattedText>): FormattedText;
  of(arg0: string): FormattedText;
  of(arg0: string, arg1: Style): FormattedText;
}

/** JVM interface net.minecraft.network.chat.FormattedText$ContentConsumer. */
export interface FormattedText_ContentConsumerMembers<T = unknown> {
  accept(arg0: string): JavaOptional<T>;
}
export type FormattedText_ContentConsumer<T = unknown> = FormattedText_ContentConsumerMembers<T>;
export interface FormattedText_ContentConsumerStatics {
}

/** JVM interface net.minecraft.network.chat.FormattedText$StyledContentConsumer. */
export interface FormattedText_StyledContentConsumerMembers<T = unknown> {
  accept(arg0: Style, arg1: string): JavaOptional<T>;
}
export type FormattedText_StyledContentConsumer<T = unknown> = FormattedText_StyledContentConsumerMembers<T>;
export interface FormattedText_StyledContentConsumerStatics {
}

/** JVM interface net.minecraft.network.chat.HoverEvent. */
export interface HoverEventMembers {
  action(): HoverEvent_Action;
}
export type HoverEvent = HoverEventMembers;
export interface HoverEventStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HoverEvent]>;
}

/** Live JVM enum net.minecraft.network.chat.HoverEvent$Action; constants are host handles, not strings. */
export type HoverEvent_Action = JavaEnum<"net.minecraft.network.chat.HoverEvent$Action", "SHOW_ENTITY" | "SHOW_ITEM" | "SHOW_TEXT"> & HoverEvent_ActionMembers;
export interface HoverEvent_ActionMembers {
  getSerializedName(): string;
  isAllowedFromServer(): boolean;
  toString(): string;
}
export interface HoverEvent_ActionStatics {
  readonly SHOW_ENTITY: HoverEvent_Action;
  readonly SHOW_ITEM: HoverEvent_Action;
  readonly SHOW_TEXT: HoverEvent_Action;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HoverEvent_Action]>;
  readonly UNSAFE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HoverEvent_Action]>;
  valueOf(arg0: string): HoverEvent_Action;
  values(): Array<HoverEvent_Action>;
}

/** JVM class net.minecraft.network.chat.HoverEvent$EntityTooltipInfo. */
export interface HoverEvent_EntityTooltipInfoMembers {
  equals(arg0: object): boolean;
  getTooltipLines(): JavaList<Component>;
  hashCode(): number;
  readonly name: JavaOptional<Component>;
  readonly type: j_net_minecraft_world_entity.EntityType<object>;
  readonly uuid: JavaOpaque<"java.util.UUID">;
}
export type HoverEvent_EntityTooltipInfo = HoverEvent_EntityTooltipInfoMembers;
export interface HoverEvent_EntityTooltipInfoStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: JavaOpaque<"java.util.UUID">, arg2: JavaOptional<Component>): HoverEvent_EntityTooltipInfo;
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: JavaOpaque<"java.util.UUID">, arg2: Component | null): HoverEvent_EntityTooltipInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HoverEvent_EntityTooltipInfo]>;
}

/** JVM record net.minecraft.network.chat.HoverEvent$ShowEntity. */
export interface HoverEvent_ShowEntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, HoverEvent];
  action(): HoverEvent_Action;
  entity(): HoverEvent_EntityTooltipInfo;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type HoverEvent_ShowEntity = HoverEvent_ShowEntityMembers & JavaOpaque<"java.lang.Record"> & HoverEvent;
export interface HoverEvent_ShowEntityStatics {
  new(arg0: HoverEvent_EntityTooltipInfo): HoverEvent_ShowEntity;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HoverEvent_ShowEntity]>;
}

/** JVM record net.minecraft.network.chat.HoverEvent$ShowItem. */
export interface HoverEvent_ShowItemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, HoverEvent];
  action(): HoverEvent_Action;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): j_net_minecraft_world_item.ItemStack;
  toString(): string;
}
export type HoverEvent_ShowItem = HoverEvent_ShowItemMembers & JavaOpaque<"java.lang.Record"> & HoverEvent;
export interface HoverEvent_ShowItemStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack): HoverEvent_ShowItem;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HoverEvent_ShowItem]>;
}

/** JVM record net.minecraft.network.chat.HoverEvent$ShowText. */
export interface HoverEvent_ShowTextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, HoverEvent];
  action(): HoverEvent_Action;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  value(): Component;
}
export type HoverEvent_ShowText = HoverEvent_ShowTextMembers & JavaOpaque<"java.lang.Record"> & HoverEvent;
export interface HoverEvent_ShowTextStatics {
  new(arg0: Component): HoverEvent_ShowText;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HoverEvent_ShowText]>;
}

/** JVM record net.minecraft.network.chat.LastSeenMessages. */
export interface LastSeenMessagesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  computeChecksum(): number;
  entries(): JavaList<MessageSignature>;
  equals(arg0: object): boolean;
  hashCode(): number;
  pack(arg0: MessageSignatureCache): LastSeenMessages_Packed;
  toString(): string;
  /** @throws java.security.SignatureException */
  updateSignature(arg0: j_net_minecraft_util.SignatureUpdater_Output): void;
}
export type LastSeenMessages = LastSeenMessagesMembers & JavaOpaque<"java.lang.Record">;
export interface LastSeenMessagesStatics {
  new(arg0: JavaList<MessageSignature>): LastSeenMessages;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LastSeenMessages]>;
  readonly EMPTY: LastSeenMessages;
  readonly LAST_SEEN_MESSAGES_MAX_LENGTH: 20;
}

/** JVM record net.minecraft.network.chat.LastSeenMessages$Packed. */
export interface LastSeenMessages_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  entries(): JavaList<MessageSignature_Packed>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  unpack(arg0: MessageSignatureCache): JavaOptional<LastSeenMessages>;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type LastSeenMessages_Packed = LastSeenMessages_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface LastSeenMessages_PackedStatics {
  new(arg0: JavaList<MessageSignature_Packed>): LastSeenMessages_Packed;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): LastSeenMessages_Packed;
  readonly EMPTY: LastSeenMessages_Packed;
}

/** JVM record net.minecraft.network.chat.LastSeenMessages$Update. */
export interface LastSeenMessages_UpdateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  acknowledged(): JavaOpaque<"java.util.BitSet">;
  checksum(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  offset(): number;
  toString(): string;
  verifyChecksum(arg0: LastSeenMessages): boolean;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type LastSeenMessages_Update = LastSeenMessages_UpdateMembers & JavaOpaque<"java.lang.Record">;
export interface LastSeenMessages_UpdateStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.BitSet">, arg2: number): LastSeenMessages_Update;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): LastSeenMessages_Update;
  readonly IGNORE_CHECKSUM: 0;
}

/** JVM class net.minecraft.network.chat.LastSeenMessagesTracker. */
export interface LastSeenMessagesTrackerMembers {
  addPending(arg0: MessageSignature, arg1: boolean): boolean;
  generateAndApplyUpdate(): LastSeenMessagesTracker_Update;
  getAndClearOffset(): number;
  ignorePending(arg0: MessageSignature): void;
  offset(): number;
}
export type LastSeenMessagesTracker = LastSeenMessagesTrackerMembers;
export interface LastSeenMessagesTrackerStatics {
  new(arg0: number): LastSeenMessagesTracker;
}

/** JVM record net.minecraft.network.chat.LastSeenMessagesTracker$Update. */
export interface LastSeenMessagesTracker_UpdateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  lastSeen(): LastSeenMessages;
  toString(): string;
  update(): LastSeenMessages_Update;
}
export type LastSeenMessagesTracker_Update = LastSeenMessagesTracker_UpdateMembers & JavaOpaque<"java.lang.Record">;
export interface LastSeenMessagesTracker_UpdateStatics {
  new(arg0: LastSeenMessages, arg1: LastSeenMessages_Update): LastSeenMessagesTracker_Update;
}

/** JVM class net.minecraft.network.chat.LastSeenMessagesValidator. */
export interface LastSeenMessagesValidatorMembers {
  addPending(arg0: MessageSignature): void;
  /** @throws net.minecraft.network.chat.LastSeenMessagesValidator$ValidationException */
  applyOffset(arg0: number): void;
  /** @throws net.minecraft.network.chat.LastSeenMessagesValidator$ValidationException */
  applyUpdate(arg0: LastSeenMessages_Update): LastSeenMessages;
  trackedMessagesCount(): number;
}
export type LastSeenMessagesValidator = LastSeenMessagesValidatorMembers;
export interface LastSeenMessagesValidatorStatics {
  new(arg0: number): LastSeenMessagesValidator;
}

/** JVM class net.minecraft.network.chat.LastSeenMessagesValidator$ValidationException. */
export interface LastSeenMessagesValidator_ValidationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
}
export type LastSeenMessagesValidator_ValidationException = LastSeenMessagesValidator_ValidationExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface LastSeenMessagesValidator_ValidationExceptionStatics {
  new(arg0: string): LastSeenMessagesValidator_ValidationException;
}

/** JVM record net.minecraft.network.chat.LastSeenTrackedEntry. */
export interface LastSeenTrackedEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  acknowledge(): LastSeenTrackedEntry;
  equals(arg0: object): boolean;
  hashCode(): number;
  pending(): boolean;
  signature(): MessageSignature;
  toString(): string;
}
export type LastSeenTrackedEntry = LastSeenTrackedEntryMembers & JavaOpaque<"java.lang.Record">;
export interface LastSeenTrackedEntryStatics {
  new(arg0: MessageSignature, arg1: boolean): LastSeenTrackedEntry;
}

/** JVM record net.minecraft.network.chat.LocalChatSession. */
export interface LocalChatSessionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  asRemote(): RemoteChatSession;
  createMessageEncoder(arg0: JavaOpaque<"java.util.UUID">): SignedMessageChain_Encoder;
  equals(arg0: object): boolean;
  hashCode(): number;
  keyPair(): j_net_minecraft_world_entity_player.ProfileKeyPair;
  sessionId(): JavaOpaque<"java.util.UUID">;
  toString(): string;
}
export type LocalChatSession = LocalChatSessionMembers & JavaOpaque<"java.lang.Record">;
export interface LocalChatSessionStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_entity_player.ProfileKeyPair): LocalChatSession;
  create(arg0: j_net_minecraft_world_entity_player.ProfileKeyPair): LocalChatSession;
}

/** JVM record net.minecraft.network.chat.MessageSignature. */
export interface MessageSignatureMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  adventure(): JavaOpaque<"net.kyori.adventure.chat.SignedMessage$Signature">;
  asByteBuffer(): JavaOpaque<"java.nio.ByteBuffer">;
  bytes(): Array<number>;
  checksum(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  pack(arg0: MessageSignatureCache): MessageSignature_Packed;
  toString(): string;
  verify(arg0: j_net_minecraft_util.SignatureValidator, arg1: j_net_minecraft_util.SignatureUpdater): boolean;
}
export type MessageSignature = MessageSignatureMembers & JavaOpaque<"java.lang.Record">;
export interface MessageSignatureStatics {
  new(arg0: Array<number>): MessageSignature;
  readonly BYTES: 256;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MessageSignature]>;
  describe(arg0: MessageSignature | null): string | null;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): MessageSignature;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: MessageSignature): void;
}

/** JVM record net.minecraft.network.chat.MessageSignature$Packed. */
export interface MessageSignature_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  fullSignature(): MessageSignature | null;
  hashCode(): number;
  id(): number;
  toString(): string;
  unpack(arg0: MessageSignatureCache): JavaOptional<MessageSignature>;
}
export type MessageSignature_Packed = MessageSignature_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface MessageSignature_PackedStatics {
  new(arg0: number): MessageSignature_Packed;
  new(arg0: number, arg1: MessageSignature | null): MessageSignature_Packed;
  new(arg0: MessageSignature): MessageSignature_Packed;
  readonly FULL_SIGNATURE: -1;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): MessageSignature_Packed;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: MessageSignature_Packed): void;
}

/** JVM class net.minecraft.network.chat.MessageSignatureCache. */
export interface MessageSignatureCacheMembers {
  pack(arg0: MessageSignature): number;
  push(arg0: SignedMessageBody, arg1: MessageSignature | null): void | null;
  unpack(arg0: number): MessageSignature | null;
}
export type MessageSignatureCache = MessageSignatureCacheMembers;
export interface MessageSignatureCacheStatics {
  new(arg0: number): MessageSignatureCache;
  readonly NOT_FOUND: -1;
  createDefault(): MessageSignatureCache;
}

/** JVM class net.minecraft.network.chat.MutableComponent. */
export interface MutableComponentMembers {
  readonly __javaSupertypes?: readonly [Component];
  append(arg0: string): MutableComponent;
  append(arg0: Component): MutableComponent;
  equals(arg0: object): boolean;
  getContents(): ComponentContents;
  getSiblings(): JavaList<Component>;
  getStyle(): Style;
  getVisualOrderText(): j_net_minecraft_util.FormattedCharSequence;
  hashCode(): number;
  setStyle(arg0: Style): MutableComponent;
  toString(): string;
  withColor(arg0: number): MutableComponent;
  withStyle(arg0: JavaOpaque<"java.util.function.UnaryOperator", [Style]>): MutableComponent;
  withStyle(arg0: j_net_minecraft.ChatFormatting): MutableComponent;
  withStyle(arg0: Style): MutableComponent;
  withStyle(...arg0: Array<j_net_minecraft.ChatFormatting>): MutableComponent;
}
export type MutableComponent = MutableComponentMembers & Component;
export interface MutableComponentStatics {
  create(arg0: ComponentContents): MutableComponent;
}

/** JVM interface net.minecraft.network.chat.OutgoingChatMessage. */
export interface OutgoingChatMessageMembers {
  content(): Component;
  sendToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: ChatType_Bound): void;
  sendToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: ChatType_Bound, arg3: Component | null): void | null;
}
export type OutgoingChatMessage = OutgoingChatMessageMembers;
export interface OutgoingChatMessageStatics {
  create(arg0: PlayerChatMessage): OutgoingChatMessage;
}

/** JVM record net.minecraft.network.chat.OutgoingChatMessage$Disguised. */
export interface OutgoingChatMessage_DisguisedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, OutgoingChatMessage];
  content(): Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  sendToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: ChatType_Bound): void;
  sendToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: ChatType_Bound, arg3: Component | null): void | null;
  toString(): string;
}
export type OutgoingChatMessage_Disguised = OutgoingChatMessage_DisguisedMembers & JavaOpaque<"java.lang.Record"> & OutgoingChatMessage;
export interface OutgoingChatMessage_DisguisedStatics {
  new(arg0: Component): OutgoingChatMessage_Disguised;
}

/** JVM record net.minecraft.network.chat.OutgoingChatMessage$Player. */
export interface OutgoingChatMessage_PlayerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, OutgoingChatMessage];
  content(): Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  message(): PlayerChatMessage;
  sendToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: ChatType_Bound): void;
  sendToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean, arg2: ChatType_Bound, arg3: Component | null): void | null;
  toString(): string;
}
export type OutgoingChatMessage_Player = OutgoingChatMessage_PlayerMembers & JavaOpaque<"java.lang.Record"> & OutgoingChatMessage;
export interface OutgoingChatMessage_PlayerStatics {
  new(arg0: PlayerChatMessage): OutgoingChatMessage_Player;
}

/** JVM record net.minecraft.network.chat.PlayerChatMessage. */
export interface PlayerChatMessageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  adventureView(): PlayerChatMessage_AdventureView;
  decoratedContent(): Component;
  equals(arg0: object): boolean;
  filter(arg0: FilterMask): PlayerChatMessage;
  filter(arg0: boolean): PlayerChatMessage;
  filterMask(): FilterMask;
  hasExpiredClient(arg0: JavaOpaque<"java.time.Instant">): boolean;
  hasExpiredServer(arg0: JavaOpaque<"java.time.Instant">): boolean;
  hasSignature(): boolean;
  hasSignatureFrom(arg0: JavaOpaque<"java.util.UUID">): boolean;
  hashCode(): number;
  isFullyFiltered(): boolean;
  isSystem(): boolean;
  link(): SignedMessageLink;
  removeSignature(): PlayerChatMessage;
  removeUnsignedContent(): PlayerChatMessage;
  salt(): bigint;
  sender(): JavaOpaque<"java.util.UUID">;
  signature(): MessageSignature | null;
  signedBody(): SignedMessageBody;
  signedContent(): string;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  unsignedContent(): Component | null;
  verify(arg0: j_net_minecraft_util.SignatureValidator): boolean;
  withUnsignedContent(arg0: Component): PlayerChatMessage;
}
export type PlayerChatMessage = PlayerChatMessageMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerChatMessageStatics {
  new(arg0: SignedMessageLink, arg1: MessageSignature | null, arg2: SignedMessageBody, arg3: Component | null, arg4: FilterMask): PlayerChatMessage;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerChatMessage]>;
  readonly MESSAGE_EXPIRES_AFTER_CLIENT: JavaOpaque<"java.time.Duration">;
  readonly MESSAGE_EXPIRES_AFTER_SERVER: JavaOpaque<"java.time.Duration">;
  describeSigned(arg0: PlayerChatMessage): string;
  system(arg0: string): PlayerChatMessage;
  unsigned(arg0: JavaOpaque<"java.util.UUID">, arg1: string): PlayerChatMessage;
  /** @throws java.security.SignatureException */
  updateSignature(arg0: j_net_minecraft_util.SignatureUpdater_Output, arg1: SignedMessageLink, arg2: SignedMessageBody): void;
}

/** JVM class net.minecraft.network.chat.PlayerChatMessage$AdventureView. */
export interface PlayerChatMessage_AdventureViewMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.chat.SignedMessage">];
  identity(): JavaOpaque<"net.kyori.adventure.identity.Identity">;
  message(): string;
  playerChatMessage(): PlayerChatMessage;
  salt(): bigint;
  signature(): JavaOpaque<"net.kyori.adventure.chat.SignedMessage$Signature"> | null;
  timestamp(): JavaOpaque<"java.time.Instant">;
  unsignedContent(): JavaOpaque<"net.kyori.adventure.text.Component"> | null;
}
export type PlayerChatMessage_AdventureView = PlayerChatMessage_AdventureViewMembers & JavaOpaque<"net.kyori.adventure.chat.SignedMessage">;
export interface PlayerChatMessage_AdventureViewStatics {
}

/** JVM record net.minecraft.network.chat.RemoteChatSession. */
export interface RemoteChatSessionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  asData(): RemoteChatSession_Data;
  createMessageDecoder(arg0: JavaOpaque<"java.util.UUID">): SignedMessageChain_Decoder;
  createMessageValidator(arg0: JavaOpaque<"java.time.Duration">): SignedMessageValidator;
  equals(arg0: object): boolean;
  hasExpired(): boolean;
  hashCode(): number;
  profilePublicKey(): j_net_minecraft_world_entity_player.ProfilePublicKey;
  sessionId(): JavaOpaque<"java.util.UUID">;
  toString(): string;
}
export type RemoteChatSession = RemoteChatSessionMembers & JavaOpaque<"java.lang.Record">;
export interface RemoteChatSessionStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_entity_player.ProfilePublicKey): RemoteChatSession;
}

/** JVM record net.minecraft.network.chat.RemoteChatSession$Data. */
export interface RemoteChatSession_DataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  profilePublicKey(): j_net_minecraft_world_entity_player.ProfilePublicKey_Data;
  sessionId(): JavaOpaque<"java.util.UUID">;
  toString(): string;
  /** @throws net.minecraft.world.entity.player.ProfilePublicKey$ValidationException */
  validate(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: j_net_minecraft_util.SignatureValidator): RemoteChatSession;
}
export type RemoteChatSession_Data = RemoteChatSession_DataMembers & JavaOpaque<"java.lang.Record">;
export interface RemoteChatSession_DataStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_entity_player.ProfilePublicKey_Data): RemoteChatSession_Data;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): RemoteChatSession_Data;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: RemoteChatSession_Data): void;
}

/** JVM record net.minecraft.network.chat.SignableCommand. */
export interface SignableCommandMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  arguments(): JavaList<SignableCommand_Argument<S>>;
  equals(arg0: object): boolean;
  getArgument(arg0: string): SignableCommand_Argument<S> | null;
  hashCode(): number;
  toString(): string;
}
export type SignableCommand<S = unknown> = SignableCommandMembers<S> & JavaOpaque<"java.lang.Record">;
export interface SignableCommandStatics {
  new<S>(arg0: JavaList<SignableCommand_Argument<S>>): SignableCommand<S>;
  hasSignableArguments<S>(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [S]>): boolean;
  of<S>(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [S]>): SignableCommand<S>;
}

/** JVM record net.minecraft.network.chat.SignableCommand$Argument. */
export interface SignableCommand_ArgumentMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  node(): JavaOpaque<"com.mojang.brigadier.tree.ArgumentCommandNode", [S, object]>;
  toString(): string;
  value(): string;
}
export type SignableCommand_Argument<S = unknown> = SignableCommand_ArgumentMembers<S> & JavaOpaque<"java.lang.Record">;
export interface SignableCommand_ArgumentStatics {
  new<S>(arg0: JavaOpaque<"com.mojang.brigadier.tree.ArgumentCommandNode", [S, object]>, arg1: string): SignableCommand_Argument<S>;
}

/** JVM record net.minecraft.network.chat.SignedMessageBody. */
export interface SignedMessageBodyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  content(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  lastSeen(): LastSeenMessages;
  pack(arg0: MessageSignatureCache): SignedMessageBody_Packed;
  salt(): bigint;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  /** @throws java.security.SignatureException */
  updateSignature(arg0: j_net_minecraft_util.SignatureUpdater_Output): void;
}
export type SignedMessageBody = SignedMessageBodyMembers & JavaOpaque<"java.lang.Record">;
export interface SignedMessageBodyStatics {
  new(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: bigint, arg3: LastSeenMessages): SignedMessageBody;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SignedMessageBody]>;
  unsigned(arg0: string): SignedMessageBody;
}

/** JVM record net.minecraft.network.chat.SignedMessageBody$Packed. */
export interface SignedMessageBody_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  content(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  lastSeen(): LastSeenMessages_Packed;
  salt(): bigint;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  unpack(arg0: MessageSignatureCache): JavaOptional<SignedMessageBody>;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type SignedMessageBody_Packed = SignedMessageBody_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface SignedMessageBody_PackedStatics {
  new(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: bigint, arg3: LastSeenMessages_Packed): SignedMessageBody_Packed;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): SignedMessageBody_Packed;
}

/** JVM class net.minecraft.network.chat.SignedMessageChain. */
export interface SignedMessageChainMembers {
  decoder(arg0: j_net_minecraft_world_entity_player.ProfilePublicKey): SignedMessageChain_Decoder;
  encoder(arg0: j_net_minecraft_util.Signer): SignedMessageChain_Encoder;
}
export type SignedMessageChain = SignedMessageChainMembers;
export interface SignedMessageChainStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"java.util.UUID">): SignedMessageChain;
}

/** JVM class net.minecraft.network.chat.SignedMessageChain$DecodeException. */
export interface SignedMessageChain_DecodeExceptionMembers {
  readonly __javaSupertypes?: readonly [ThrowingComponent];
  readonly kickCause: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">;
}
export type SignedMessageChain_DecodeException = SignedMessageChain_DecodeExceptionMembers & ThrowingComponent;
export interface SignedMessageChain_DecodeExceptionStatics {
  new(arg0: Component): SignedMessageChain_DecodeException;
  new(arg0: Component, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): SignedMessageChain_DecodeException;
}

/** JVM interface net.minecraft.network.chat.SignedMessageChain$Decoder. */
export interface SignedMessageChain_DecoderMembers {
  setChainBroken(): void;
  /** @throws net.minecraft.network.chat.SignedMessageChain$DecodeException */
  unpack(arg0: MessageSignature | null, arg1: SignedMessageBody): PlayerChatMessage | null;
}
export type SignedMessageChain_Decoder = SignedMessageChain_DecoderMembers;
export interface SignedMessageChain_DecoderStatics {
  unsigned(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"java.util.function.BooleanSupplier">): SignedMessageChain_Decoder;
}

/** JVM interface net.minecraft.network.chat.SignedMessageChain$Encoder. */
export interface SignedMessageChain_EncoderMembers {
  pack(arg0: SignedMessageBody): MessageSignature | null;
}
export type SignedMessageChain_Encoder = SignedMessageChain_EncoderMembers;
export interface SignedMessageChain_EncoderStatics {
  readonly UNSIGNED: SignedMessageChain_Encoder;
}

/** JVM record net.minecraft.network.chat.SignedMessageLink. */
export interface SignedMessageLinkMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  advance(): SignedMessageLink | null;
  equals(arg0: object): boolean;
  hashCode(): number;
  index(): number;
  isDescendantOf(arg0: SignedMessageLink): boolean;
  sender(): JavaOpaque<"java.util.UUID">;
  sessionId(): JavaOpaque<"java.util.UUID">;
  toString(): string;
  /** @throws java.security.SignatureException */
  updateSignature(arg0: j_net_minecraft_util.SignatureUpdater_Output): void;
}
export type SignedMessageLink = SignedMessageLinkMembers & JavaOpaque<"java.lang.Record">;
export interface SignedMessageLinkStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.UUID">, arg2: JavaOpaque<"java.util.UUID">): SignedMessageLink;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SignedMessageLink]>;
  root(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"java.util.UUID">): SignedMessageLink;
  unsigned(arg0: JavaOpaque<"java.util.UUID">): SignedMessageLink;
}

/** JVM interface net.minecraft.network.chat.SignedMessageValidator. */
export interface SignedMessageValidatorMembers {
  updateAndValidate(arg0: PlayerChatMessage): PlayerChatMessage | null;
}
export type SignedMessageValidator = SignedMessageValidatorMembers;
export interface SignedMessageValidatorStatics {
  readonly ACCEPT_UNSIGNED: SignedMessageValidator;
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  readonly REJECT_ALL: SignedMessageValidator;
}

/** JVM class net.minecraft.network.chat.SignedMessageValidator$KeyBased. */
export interface SignedMessageValidator_KeyBasedMembers {
  readonly __javaSupertypes?: readonly [SignedMessageValidator];
  updateAndValidate(arg0: PlayerChatMessage): PlayerChatMessage | null;
}
export type SignedMessageValidator_KeyBased = SignedMessageValidator_KeyBasedMembers & SignedMessageValidator;
export interface SignedMessageValidator_KeyBasedStatics {
  new(arg0: j_net_minecraft_util.SignatureValidator, arg1: JavaOpaque<"java.util.function.BooleanSupplier">): SignedMessageValidator_KeyBased;
}

/** JVM class net.minecraft.network.chat.Style. */
export interface StyleMembers {
  applyFormat(arg0: j_net_minecraft.ChatFormatting): Style;
  applyFormats(...arg0: Array<j_net_minecraft.ChatFormatting>): Style;
  applyLegacyFormat(arg0: j_net_minecraft.ChatFormatting): Style;
  applyTo(arg0: Style): Style;
  equals(arg0: object): boolean;
  getClickEvent(): ClickEvent | null;
  getColor(): TextColor | null;
  getFont(): j_net_minecraft_resources.ResourceLocation;
  getHoverEvent(): HoverEvent | null;
  getInsertion(): string | null;
  getShadowColor(): number | null;
  hashCode(): number;
  isBold(): boolean;
  isEmpty(): boolean;
  isItalic(): boolean;
  isObfuscated(): boolean;
  isStrikethrough(): boolean;
  isUnderlined(): boolean;
  toString(): string;
  withBold(arg0: boolean | null): Style | null;
  withClickEvent(arg0: ClickEvent | null): Style | null;
  withColor(arg0: number): Style;
  withColor(arg0: j_net_minecraft.ChatFormatting | null): Style | null;
  withColor(arg0: TextColor | null): Style | null;
  withFont(arg0: j_net_minecraft_resources.ResourceLocation | null): Style | null;
  withHoverEvent(arg0: HoverEvent | null): Style | null;
  withInsertion(arg0: string | null): Style | null;
  withItalic(arg0: boolean | null): Style | null;
  withObfuscated(arg0: boolean | null): Style | null;
  withShadowColor(arg0: number): Style;
  withStrikethrough(arg0: boolean | null): Style | null;
  withUnderlined(arg0: boolean | null): Style | null;
}
export type Style = StyleMembers;
export interface StyleStatics {
  readonly DEFAULT_FONT: j_net_minecraft_resources.ResourceLocation;
  readonly EMPTY: Style;
}

/** JVM class net.minecraft.network.chat.Style$Serializer. */
export interface Style_SerializerMembers {
}
export type Style_Serializer = Style_SerializerMembers;
export interface Style_SerializerStatics {
  new(): Style_Serializer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Style]>;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Style]>;
  readonly TRUSTED_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Style>;
}

/** JVM class net.minecraft.network.chat.SubStringSource. */
export interface SubStringSourceMembers {
  getPlainText(): string;
  substring(arg0: number, arg1: number, arg2: boolean): JavaList<j_net_minecraft_util.FormattedCharSequence>;
}
export type SubStringSource = SubStringSourceMembers;
export interface SubStringSourceStatics {
  create(arg0: FormattedText): SubStringSource;
  create(arg0: FormattedText, arg1: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2IntFunction">, arg2: JavaOpaque<"java.util.function.UnaryOperator", [string]>): SubStringSource;
}

/** JVM class net.minecraft.network.chat.TextColor. */
export interface TextColorMembers {
  equals(arg0: object): boolean;
  readonly format: j_net_minecraft.ChatFormatting | null;
  getValue(): number;
  hashCode(): number;
  readonly name: string | null;
  serialize(): string;
  toString(): string;
}
export type TextColor = TextColorMembers;
export interface TextColorStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TextColor]>;
  fromLegacyFormat(arg0: j_net_minecraft.ChatFormatting): TextColor | null;
  fromRgb(arg0: number): TextColor;
  parseColor(arg0: string): JavaOpaque<"com.mojang.serialization.DataResult", [TextColor]>;
}

/** JVM class net.minecraft.network.chat.ThrowingComponent. */
export interface ThrowingComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
  getComponent(): Component;
}
export type ThrowingComponent = ThrowingComponentMembers & JavaOpaque<"java.lang.Exception">;
export interface ThrowingComponentStatics {
  new(arg0: Component): ThrowingComponent;
  new(arg0: Component, arg1: JavaOpaque<"java.lang.Throwable">): ThrowingComponent;
}
