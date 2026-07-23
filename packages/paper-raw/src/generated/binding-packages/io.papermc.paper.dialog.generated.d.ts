// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog from './io.papermc.paper.registry.data.dialog.generated.js';
import type * as j_net_kyori_adventure_dialog from './net.kyori.adventure.dialog.generated.js';
import type * as j_net_kyori_adventure_nbt_api from './net.kyori.adventure.nbt.api.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface io.papermc.paper.dialog.Dialog. */
export interface DialogMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_dialog.DialogLike, j_org_bukkit.Keyed];
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type Dialog = DialogMembers & j_net_kyori_adventure_dialog.DialogLike & j_org_bukkit.Keyed;
export interface DialogStatics {
  readonly CUSTOM_OPTIONS: Dialog;
  readonly QUICK_ACTIONS: Dialog;
  readonly SERVER_LINKS: Dialog;
  create(arg0: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<Dialog, j_io_papermc_paper_registry_data_dialog.DialogRegistryEntry_Builder>>): Dialog;
}

/** JVM interface io.papermc.paper.dialog.DialogResponseView. */
export interface DialogResponseViewMembers {
  getBoolean(arg0: string): boolean | null;
  getFloat(arg0: string): number | null;
  getText(arg0: string): string | null;
  payload(): j_net_kyori_adventure_nbt_api.BinaryTagHolder;
}
export type DialogResponseView = DialogResponseViewMembers;
export interface DialogResponseViewStatics {
}
