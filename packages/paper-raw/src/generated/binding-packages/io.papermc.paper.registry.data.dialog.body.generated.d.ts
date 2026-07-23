// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.registry.data.dialog.body.DialogBody. */
export interface DialogBodyMembers {
}
export type DialogBody = DialogBodyMembers;
export interface DialogBodyStatics {
  item(arg0: j_org_bukkit_inventory.ItemStack): ItemDialogBody_Builder;
  item(arg0: j_org_bukkit_inventory.ItemStack, arg1: PlainMessageDialogBody, arg2: boolean, arg3: boolean, arg4: number, arg5: number): ItemDialogBody | null;
  plainMessage(arg0: j_net_kyori_adventure_text.Component): PlainMessageDialogBody;
  plainMessage(arg0: j_net_kyori_adventure_text.Component, arg1: number): PlainMessageDialogBody;
}

/** JVM interface io.papermc.paper.registry.data.dialog.body.ItemDialogBody. */
export interface ItemDialogBodyMembers {
  readonly __javaSupertypes?: readonly [DialogBody];
  description(): PlainMessageDialogBody | null;
  height(): number;
  item(): j_org_bukkit_inventory.ItemStack;
  showDecorations(): boolean;
  showTooltip(): boolean;
  width(): number;
}
export type ItemDialogBody = ItemDialogBodyMembers & DialogBody;
export interface ItemDialogBodyStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.body.ItemDialogBody$Builder. */
export interface ItemDialogBody_BuilderMembers {
  build(): ItemDialogBody;
  description(arg0: PlainMessageDialogBody): ItemDialogBody_Builder | null;
  height(arg0: number): ItemDialogBody_Builder;
  showDecorations(arg0: boolean): ItemDialogBody_Builder;
  showTooltip(arg0: boolean): ItemDialogBody_Builder;
  width(arg0: number): ItemDialogBody_Builder;
}
export type ItemDialogBody_Builder = ItemDialogBody_BuilderMembers;
export interface ItemDialogBody_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.dialog.body.PlainMessageDialogBody. */
export interface PlainMessageDialogBodyMembers {
  readonly __javaSupertypes?: readonly [DialogBody];
  contents(): j_net_kyori_adventure_text.Component;
  width(): number;
}
export type PlainMessageDialogBody = PlainMessageDialogBodyMembers & DialogBody;
export interface PlainMessageDialogBodyStatics {
}
