// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog from './io.papermc.paper.registry.data.dialog.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';

/** JVM interface io.papermc.paper.registry.data.dialog.type.ConfirmationType. */
export interface ConfirmationTypeMembers {
  readonly __javaSupertypes?: readonly [DialogType];
  noButton(): j_io_papermc_paper_registry_data_dialog.ActionButton;
  yesButton(): j_io_papermc_paper_registry_data_dialog.ActionButton;
}
export type ConfirmationType = ConfirmationTypeMembers & DialogType;
export interface ConfirmationTypeStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.DialogListType. */
export interface DialogListTypeMembers {
  readonly __javaSupertypes?: readonly [DialogType];
  buttonWidth(): number;
  columns(): number;
  dialogs(): j_io_papermc_paper_registry_set.RegistrySet<j_io_papermc_paper_dialog.Dialog>;
  exitAction(): j_io_papermc_paper_registry_data_dialog.ActionButton | null;
}
export type DialogListType = DialogListTypeMembers & DialogType;
export interface DialogListTypeStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.DialogListType$Builder. */
export interface DialogListType_BuilderMembers {
  build(): DialogListType;
  buttonWidth(arg0: number): DialogListType_Builder;
  columns(arg0: number): DialogListType_Builder;
  exitAction(arg0: j_io_papermc_paper_registry_data_dialog.ActionButton | null): DialogListType_Builder;
}
export type DialogListType_Builder = DialogListType_BuilderMembers;
export interface DialogListType_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.DialogType. */
export interface DialogTypeMembers {
}
export type DialogType = DialogTypeMembers;
export interface DialogTypeStatics {
  confirmation(arg0: j_io_papermc_paper_registry_data_dialog.ActionButton, arg1: j_io_papermc_paper_registry_data_dialog.ActionButton): ConfirmationType;
  dialogList(arg0: j_io_papermc_paper_registry_set.RegistrySet<j_io_papermc_paper_dialog.Dialog>): DialogListType_Builder;
  dialogList(arg0: j_io_papermc_paper_registry_set.RegistrySet<j_io_papermc_paper_dialog.Dialog>, arg1: j_io_papermc_paper_registry_data_dialog.ActionButton | null, arg2: number, arg3: number): DialogListType;
  multiAction(arg0: JavaList<j_io_papermc_paper_registry_data_dialog.ActionButton>): MultiActionType_Builder;
  multiAction(arg0: JavaList<j_io_papermc_paper_registry_data_dialog.ActionButton>, arg1: j_io_papermc_paper_registry_data_dialog.ActionButton | null, arg2: number): MultiActionType;
  notice(): NoticeType;
  notice(arg0: j_io_papermc_paper_registry_data_dialog.ActionButton): NoticeType;
  serverLinks(arg0: j_io_papermc_paper_registry_data_dialog.ActionButton | null, arg1: number, arg2: number): ServerLinksType;
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.MultiActionType. */
export interface MultiActionTypeMembers {
  readonly __javaSupertypes?: readonly [DialogType];
  actions(): JavaList<j_io_papermc_paper_registry_data_dialog.ActionButton>;
  columns(): number;
  exitAction(): j_io_papermc_paper_registry_data_dialog.ActionButton | null;
}
export type MultiActionType = MultiActionTypeMembers & DialogType;
export interface MultiActionTypeStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.MultiActionType$Builder. */
export interface MultiActionType_BuilderMembers {
  build(): MultiActionType;
  columns(arg0: number): MultiActionType_Builder;
  exitAction(arg0: j_io_papermc_paper_registry_data_dialog.ActionButton | null): MultiActionType_Builder;
}
export type MultiActionType_Builder = MultiActionType_BuilderMembers;
export interface MultiActionType_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.NoticeType. */
export interface NoticeTypeMembers {
  readonly __javaSupertypes?: readonly [DialogType];
  action(): j_io_papermc_paper_registry_data_dialog.ActionButton;
}
export type NoticeType = NoticeTypeMembers & DialogType;
export interface NoticeTypeStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.type.ServerLinksType. */
export interface ServerLinksTypeMembers {
  readonly __javaSupertypes?: readonly [DialogType];
  buttonWidth(): number;
  columns(): number;
  exitAction(): j_io_papermc_paper_registry_data_dialog.ActionButton | null;
}
export type ServerLinksType = ServerLinksTypeMembers & DialogType;
export interface ServerLinksTypeStatics {
}
