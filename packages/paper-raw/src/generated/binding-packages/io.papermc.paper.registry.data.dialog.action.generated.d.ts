// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_nbt_api from './net.kyori.adventure.nbt.api.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';

/** JVM interface io.papermc.paper.registry.data.dialog.action.DialogAction. */
export interface DialogActionMembers {
}
export type DialogAction = DialogActionMembers;
export interface DialogActionStatics {
  commandTemplate(arg0: string): DialogAction_CommandTemplateAction;
  customClick(arg0: DialogActionCallback, arg1: j_net_kyori_adventure_text_event.ClickCallback_Options): DialogAction_CustomClickAction;
  customClick(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): DialogAction_CustomClickAction;
  staticAction(arg0: j_net_kyori_adventure_text_event.ClickEvent): DialogAction_StaticAction;
}

/** JVM interface io.papermc.paper.registry.data.dialog.action.DialogAction$CommandTemplateAction. */
export interface DialogAction_CommandTemplateActionMembers {
  readonly __javaSupertypes?: readonly [DialogAction];
  template(): string;
}
export type DialogAction_CommandTemplateAction = DialogAction_CommandTemplateActionMembers & DialogAction;
export interface DialogAction_CommandTemplateActionStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.action.DialogAction$CustomClickAction. */
export interface DialogAction_CustomClickActionMembers {
  readonly __javaSupertypes?: readonly [DialogAction];
  additions(): j_net_kyori_adventure_nbt_api.BinaryTagHolder | null;
  id(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type DialogAction_CustomClickAction = DialogAction_CustomClickActionMembers & DialogAction;
export interface DialogAction_CustomClickActionStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.action.DialogAction$StaticAction. */
export interface DialogAction_StaticActionMembers {
  readonly __javaSupertypes?: readonly [DialogAction];
  value(): j_net_kyori_adventure_text_event.ClickEvent;
}
export type DialogAction_StaticAction = DialogAction_StaticActionMembers & DialogAction;
export interface DialogAction_StaticActionStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.action.DialogActionCallback. */
export interface DialogActionCallbackMembers {
  accept(arg0: j_io_papermc_paper_dialog.DialogResponseView, arg1: j_net_kyori_adventure_audience.Audience): void;
}
export type DialogActionCallback = DialogActionCallbackMembers;
export interface DialogActionCallbackStatics {
}
