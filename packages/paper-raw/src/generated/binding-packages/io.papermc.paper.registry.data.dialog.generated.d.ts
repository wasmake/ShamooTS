// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog_action from './io.papermc.paper.registry.data.dialog.action.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog_body from './io.papermc.paper.registry.data.dialog.body.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog_input from './io.papermc.paper.registry.data.dialog.input.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog_type from './io.papermc.paper.registry.data.dialog.type.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_net_kyori_adventure_nbt_api from './net.kyori.adventure.nbt.api.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.registry.data.dialog.ActionButton. */
export interface ActionButtonMembers {
  action(): j_io_papermc_paper_registry_data_dialog_action.DialogAction | null;
  label(): j_net_kyori_adventure_text.Component;
  tooltip(): j_net_kyori_adventure_text.Component | null;
  width(): number;
}
export type ActionButton = ActionButtonMembers;
export interface ActionButtonStatics {
  builder(arg0: j_net_kyori_adventure_text.Component): ActionButton_Builder;
  create(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component | null, arg2: number, arg3: j_io_papermc_paper_registry_data_dialog_action.DialogAction | null): ActionButton;
}

/** JVM interface io.papermc.paper.registry.data.dialog.ActionButton$Builder. */
export interface ActionButton_BuilderMembers {
  action(arg0: j_io_papermc_paper_registry_data_dialog_action.DialogAction | null): ActionButton_Builder;
  build(): ActionButton;
  tooltip(arg0: j_net_kyori_adventure_text.Component | null): ActionButton_Builder;
  width(arg0: number): ActionButton_Builder;
}
export type ActionButton_Builder = ActionButton_BuilderMembers;
export interface ActionButton_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.DialogBase. */
export interface DialogBaseMembers {
  afterAction(): DialogBase_DialogAfterAction;
  body(): JavaList<j_io_papermc_paper_registry_data_dialog_body.DialogBody>;
  canCloseWithEscape(): boolean;
  externalTitle(): j_net_kyori_adventure_text.Component | null;
  inputs(): JavaList<j_io_papermc_paper_registry_data_dialog_input.DialogInput>;
  pause(): boolean;
  title(): j_net_kyori_adventure_text.Component;
}
export type DialogBase = DialogBaseMembers;
export interface DialogBaseStatics {
  builder(arg0: j_net_kyori_adventure_text.Component): DialogBase_Builder;
  create(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component | null, arg2: boolean, arg3: boolean, arg4: DialogBase_DialogAfterAction, arg5: JavaList<j_io_papermc_paper_registry_data_dialog_body.DialogBody>, arg6: JavaList<j_io_papermc_paper_registry_data_dialog_input.DialogInput>): DialogBase;
}

/** JVM interface io.papermc.paper.registry.data.dialog.DialogBase$Builder. */
export interface DialogBase_BuilderMembers {
  afterAction(arg0: DialogBase_DialogAfterAction): DialogBase_Builder;
  body(arg0: JavaList<j_io_papermc_paper_registry_data_dialog_body.DialogBody>): DialogBase_Builder;
  build(): DialogBase;
  canCloseWithEscape(arg0: boolean): DialogBase_Builder;
  externalTitle(arg0: j_net_kyori_adventure_text.Component | null): DialogBase_Builder;
  inputs(arg0: JavaList<j_io_papermc_paper_registry_data_dialog_input.DialogInput>): DialogBase_Builder;
  pause(arg0: boolean): DialogBase_Builder;
}
export type DialogBase_Builder = DialogBase_BuilderMembers;
export interface DialogBase_BuilderStatics {
}

/** Live JVM enum io.papermc.paper.registry.data.dialog.DialogBase$DialogAfterAction; constants are host handles, not strings. */
export type DialogBase_DialogAfterAction = JavaEnum<"io.papermc.paper.registry.data.dialog.DialogBase$DialogAfterAction", "CLOSE" | "NONE" | "WAIT_FOR_RESPONSE"> & DialogBase_DialogAfterActionMembers;
export interface DialogBase_DialogAfterActionMembers {
}
export interface DialogBase_DialogAfterActionStatics {
  readonly CLOSE: DialogBase_DialogAfterAction;
  readonly NONE: DialogBase_DialogAfterAction;
  readonly WAIT_FOR_RESPONSE: DialogBase_DialogAfterAction;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, DialogBase_DialogAfterAction>;
  valueOf(arg0: string): DialogBase_DialogAfterAction;
  values(): Array<DialogBase_DialogAfterAction>;
}

/** JVM interface io.papermc.paper.registry.data.dialog.DialogInstancesProvider. */
export interface DialogInstancesProviderMembers {
  actionButtonBuilder(arg0: j_net_kyori_adventure_text.Component): ActionButton_Builder;
  booleanBuilder(arg0: string, arg1: j_net_kyori_adventure_text.Component): j_io_papermc_paper_registry_data_dialog_input.BooleanDialogInput_Builder;
  commandTemplate(arg0: string): j_io_papermc_paper_registry_data_dialog_action.DialogAction_CommandTemplateAction;
  confirmation(arg0: ActionButton, arg1: ActionButton): j_io_papermc_paper_registry_data_dialog_type.ConfirmationType;
  customClick(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: j_net_kyori_adventure_nbt_api.BinaryTagHolder | null): j_io_papermc_paper_registry_data_dialog_action.DialogAction_CustomClickAction;
  dialogBaseBuilder(arg0: j_net_kyori_adventure_text.Component): DialogBase_Builder;
  dialogList(arg0: j_io_papermc_paper_registry_set.RegistrySet<j_io_papermc_paper_dialog.Dialog>): j_io_papermc_paper_registry_data_dialog_type.DialogListType_Builder;
  itemDialogBodyBuilder(arg0: j_org_bukkit_inventory.ItemStack): j_io_papermc_paper_registry_data_dialog_body.ItemDialogBody_Builder;
  multiAction(arg0: JavaList<ActionButton>): j_io_papermc_paper_registry_data_dialog_type.MultiActionType_Builder;
  multilineOptions(arg0: number | null, arg1: number | null): j_io_papermc_paper_registry_data_dialog_input.TextDialogInput_MultilineOptions;
  notice(): j_io_papermc_paper_registry_data_dialog_type.NoticeType;
  notice(arg0: ActionButton): j_io_papermc_paper_registry_data_dialog_type.NoticeType;
  numberRangeBuilder(arg0: string, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number): j_io_papermc_paper_registry_data_dialog_input.NumberRangeDialogInput_Builder;
  plainMessageDialogBody(arg0: j_net_kyori_adventure_text.Component): j_io_papermc_paper_registry_data_dialog_body.PlainMessageDialogBody;
  plainMessageDialogBody(arg0: j_net_kyori_adventure_text.Component, arg1: number): j_io_papermc_paper_registry_data_dialog_body.PlainMessageDialogBody;
  register(arg0: j_io_papermc_paper_registry_data_dialog_action.DialogActionCallback, arg1: j_net_kyori_adventure_text_event.ClickCallback_Options): j_io_papermc_paper_registry_data_dialog_action.DialogAction_CustomClickAction;
  serverLinks(arg0: ActionButton | null, arg1: number, arg2: number): j_io_papermc_paper_registry_data_dialog_type.ServerLinksType;
  singleOptionBuilder(arg0: string, arg1: j_net_kyori_adventure_text.Component, arg2: JavaList<j_io_papermc_paper_registry_data_dialog_input.SingleOptionDialogInput_OptionEntry>): j_io_papermc_paper_registry_data_dialog_input.SingleOptionDialogInput_Builder;
  singleOptionEntry(arg0: string, arg1: j_net_kyori_adventure_text.Component | null, arg2: boolean): j_io_papermc_paper_registry_data_dialog_input.SingleOptionDialogInput_OptionEntry;
  staticAction(arg0: j_net_kyori_adventure_text_event.ClickEvent): j_io_papermc_paper_registry_data_dialog_action.DialogAction_StaticAction;
  textBuilder(arg0: string, arg1: j_net_kyori_adventure_text.Component): j_io_papermc_paper_registry_data_dialog_input.TextDialogInput_Builder;
}
export type DialogInstancesProvider = DialogInstancesProviderMembers;
export interface DialogInstancesProviderStatics {
  instance(): DialogInstancesProvider;
}

/** JVM interface io.papermc.paper.registry.data.dialog.DialogRegistryEntry. */
export interface DialogRegistryEntryMembers {
  base(): DialogBase;
  type(): j_io_papermc_paper_registry_data_dialog_type.DialogType;
}
export type DialogRegistryEntry = DialogRegistryEntryMembers;
export interface DialogRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.DialogRegistryEntry$Builder. */
export interface DialogRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [DialogRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_io_papermc_paper_dialog.Dialog>];
  base(arg0: DialogBase): DialogRegistryEntry_Builder;
  registryValueSet(): j_io_papermc_paper_registry_set.RegistryValueSetBuilder<j_io_papermc_paper_dialog.Dialog, DialogRegistryEntry_Builder>;
  type(arg0: j_io_papermc_paper_registry_data_dialog_type.DialogType): DialogRegistryEntry_Builder;
}
export type DialogRegistryEntry_Builder = DialogRegistryEntry_BuilderMembers & DialogRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_io_papermc_paper_dialog.Dialog>;
export interface DialogRegistryEntry_BuilderStatics {
}
