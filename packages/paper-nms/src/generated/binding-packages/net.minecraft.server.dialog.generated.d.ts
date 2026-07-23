// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_dialog_action from './net.minecraft.server.dialog.action.generated.js';
import type * as j_net_minecraft_server_dialog_body from './net.minecraft.server.dialog.body.generated.js';
import type * as j_net_minecraft_server_dialog_input from './net.minecraft.server.dialog.input.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM record net.minecraft.server.dialog.ActionButton. */
export interface ActionButtonMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  action(): JavaOptional<j_net_minecraft_server_dialog_action.Action>;
  button(): CommonButtonData;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ActionButton = ActionButtonMembers & JavaOpaque<"java.lang.Record">;
export interface ActionButtonStatics {
  new(arg0: CommonButtonData, arg1: JavaOptional<j_net_minecraft_server_dialog_action.Action>): ActionButton;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ActionButton]>;
}

/** JVM interface net.minecraft.server.dialog.ButtonListDialog. */
export interface ButtonListDialogMembers {
  readonly __javaSupertypes?: readonly [Dialog];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ButtonListDialog]>;
  columns(): number;
  exitAction(): JavaOptional<ActionButton>;
  onCancel(): JavaOptional<j_net_minecraft_server_dialog_action.Action>;
}
export type ButtonListDialog = ButtonListDialogMembers & Dialog;
export interface ButtonListDialogStatics {
}

/** JVM record net.minecraft.server.dialog.CommonButtonData. */
export interface CommonButtonDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  label(): j_net_minecraft_network_chat.Component;
  toString(): string;
  tooltip(): JavaOptional<j_net_minecraft_network_chat.Component>;
  width(): number;
}
export type CommonButtonData = CommonButtonDataMembers & JavaOpaque<"java.lang.Record">;
export interface CommonButtonDataStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: number): CommonButtonData;
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<j_net_minecraft_network_chat.Component>, arg2: number): CommonButtonData;
  readonly DEFAULT_WIDTH: 150;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CommonButtonData]>;
}

/** JVM record net.minecraft.server.dialog.CommonDialogData. */
export interface CommonDialogDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  afterAction(): DialogAction;
  body(): JavaList<j_net_minecraft_server_dialog_body.DialogBody>;
  canCloseWithEscape(): boolean;
  computeExternalTitle(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  externalTitle(): JavaOptional<j_net_minecraft_network_chat.Component>;
  hashCode(): number;
  inputs(): JavaList<Input>;
  pause(): boolean;
  title(): j_net_minecraft_network_chat.Component;
  toString(): string;
}
export type CommonDialogData = CommonDialogDataMembers & JavaOpaque<"java.lang.Record">;
export interface CommonDialogDataStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<j_net_minecraft_network_chat.Component>, arg2: boolean, arg3: boolean, arg4: DialogAction, arg5: JavaList<j_net_minecraft_server_dialog_body.DialogBody>, arg6: JavaList<Input>): CommonDialogData;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CommonDialogData]>;
}

/** JVM record net.minecraft.server.dialog.ConfirmationDialog. */
export interface ConfirmationDialogMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleDialog];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ConfirmationDialog]>;
  common(): CommonDialogData;
  equals(arg0: object): boolean;
  hashCode(): number;
  mainActions(): JavaList<ActionButton>;
  noButton(): ActionButton;
  onCancel(): JavaOptional<j_net_minecraft_server_dialog_action.Action>;
  toString(): string;
  yesButton(): ActionButton;
}
export type ConfirmationDialog = ConfirmationDialogMembers & JavaOpaque<"java.lang.Record"> & SimpleDialog;
export interface ConfirmationDialogStatics {
  new(arg0: CommonDialogData, arg1: ActionButton, arg2: ActionButton): ConfirmationDialog;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConfirmationDialog]>;
}

/** JVM interface net.minecraft.server.dialog.Dialog. */
export interface DialogMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [Dialog]>;
  common(): CommonDialogData;
  onCancel(): JavaOptional<j_net_minecraft_server_dialog_action.Action>;
}
export type Dialog = DialogMembers;
export interface DialogStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Dialog>]>;
  readonly CONTEXT_FREE_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Dialog>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Dialog]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<Dialog>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<Dialog>>;
  readonly WIDTH_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [number]>;
}

/** Live JVM enum net.minecraft.server.dialog.DialogAction; constants are host handles, not strings. */
export type DialogAction = JavaEnum<"net.minecraft.server.dialog.DialogAction", "CLOSE" | "NONE" | "WAIT_FOR_RESPONSE"> & DialogActionMembers;
export interface DialogActionMembers {
  getSerializedName(): string;
  willUnpause(): boolean;
}
export interface DialogActionStatics {
  readonly CLOSE: DialogAction;
  readonly NONE: DialogAction;
  readonly WAIT_FOR_RESPONSE: DialogAction;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [DialogAction]>;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<DialogAction>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, DialogAction>;
  valueOf(arg0: string): DialogAction;
  values(): Array<DialogAction>;
}

/** JVM record net.minecraft.server.dialog.DialogListDialog. */
export interface DialogListDialogMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ButtonListDialog];
  buttonWidth(): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DialogListDialog]>;
  columns(): number;
  common(): CommonDialogData;
  dialogs(): j_net_minecraft_core.HolderSet<Dialog>;
  equals(arg0: object): boolean;
  exitAction(): JavaOptional<ActionButton>;
  hashCode(): number;
  toString(): string;
}
export type DialogListDialog = DialogListDialogMembers & JavaOpaque<"java.lang.Record"> & ButtonListDialog;
export interface DialogListDialogStatics {
  new(arg0: CommonDialogData, arg1: j_net_minecraft_core.HolderSet<Dialog>, arg2: JavaOptional<ActionButton>, arg3: number, arg4: number): DialogListDialog;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DialogListDialog]>;
}

/** JVM class net.minecraft.server.dialog.Dialogs. */
export interface DialogsMembers {
}
export type Dialogs = DialogsMembers;
export interface DialogsStatics {
  new(): Dialogs;
  readonly BIG_BUTTON_WIDTH: 310;
  readonly CUSTOM_OPTIONS: j_net_minecraft_resources.ResourceKey<Dialog>;
  readonly QUICK_ACTIONS: j_net_minecraft_resources.ResourceKey<Dialog>;
  readonly SERVER_LINKS: j_net_minecraft_resources.ResourceKey<Dialog>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<Dialog>): void;
}

/** JVM class net.minecraft.server.dialog.DialogTypes. */
export interface DialogTypesMembers {
}
export type DialogTypes = DialogTypesMembers;
export interface DialogTypesStatics {
  new(): DialogTypes;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [Dialog]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [Dialog]>;
}

/** JVM record net.minecraft.server.dialog.Input. */
export interface InputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  control(): j_net_minecraft_server_dialog_input.InputControl;
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): string;
  toString(): string;
}
export type Input = InputMembers & JavaOpaque<"java.lang.Record">;
export interface InputStatics {
  new(arg0: string, arg1: j_net_minecraft_server_dialog_input.InputControl): Input;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Input]>;
}

/** JVM record net.minecraft.server.dialog.MultiActionDialog. */
export interface MultiActionDialogMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ButtonListDialog];
  actions(): JavaList<ActionButton>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MultiActionDialog]>;
  columns(): number;
  common(): CommonDialogData;
  equals(arg0: object): boolean;
  exitAction(): JavaOptional<ActionButton>;
  hashCode(): number;
  toString(): string;
}
export type MultiActionDialog = MultiActionDialogMembers & JavaOpaque<"java.lang.Record"> & ButtonListDialog;
export interface MultiActionDialogStatics {
  new(arg0: CommonDialogData, arg1: JavaList<ActionButton>, arg2: JavaOptional<ActionButton>, arg3: number): MultiActionDialog;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MultiActionDialog]>;
}

/** JVM record net.minecraft.server.dialog.NoticeDialog. */
export interface NoticeDialogMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SimpleDialog];
  action(): ActionButton;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NoticeDialog]>;
  common(): CommonDialogData;
  equals(arg0: object): boolean;
  hashCode(): number;
  mainActions(): JavaList<ActionButton>;
  onCancel(): JavaOptional<j_net_minecraft_server_dialog_action.Action>;
  toString(): string;
}
export type NoticeDialog = NoticeDialogMembers & JavaOpaque<"java.lang.Record"> & SimpleDialog;
export interface NoticeDialogStatics {
  new(arg0: CommonDialogData, arg1: ActionButton): NoticeDialog;
  readonly DEFAULT_ACTION: ActionButton;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoticeDialog]>;
}

/** JVM record net.minecraft.server.dialog.ServerLinksDialog. */
export interface ServerLinksDialogMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ButtonListDialog];
  buttonWidth(): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ServerLinksDialog]>;
  columns(): number;
  common(): CommonDialogData;
  equals(arg0: object): boolean;
  exitAction(): JavaOptional<ActionButton>;
  hashCode(): number;
  toString(): string;
}
export type ServerLinksDialog = ServerLinksDialogMembers & JavaOpaque<"java.lang.Record"> & ButtonListDialog;
export interface ServerLinksDialogStatics {
  new(arg0: CommonDialogData, arg1: JavaOptional<ActionButton>, arg2: number, arg3: number): ServerLinksDialog;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ServerLinksDialog]>;
}

/** JVM interface net.minecraft.server.dialog.SimpleDialog. */
export interface SimpleDialogMembers {
  readonly __javaSupertypes?: readonly [Dialog];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SimpleDialog]>;
  mainActions(): JavaList<ActionButton>;
}
export type SimpleDialog = SimpleDialogMembers & Dialog;
export interface SimpleDialogStatics {
}
