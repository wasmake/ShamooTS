// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.advancement.AdvancementDisplay. */
export interface AdvancementDisplayMembers {
  backgroundPath(): j_org_bukkit.NamespacedKey | null;
  description(): j_net_kyori_adventure_text.Component;
  displayName(): j_net_kyori_adventure_text.Component;
  doesAnnounceToChat(): boolean;
  doesShowToast(): boolean;
  frame(): AdvancementDisplay_Frame;
  icon(): j_org_bukkit_inventory.ItemStack;
  isHidden(): boolean;
  title(): j_net_kyori_adventure_text.Component;
}
export type AdvancementDisplay = AdvancementDisplayMembers;
export interface AdvancementDisplayStatics {
}

/** Live JVM enum io.papermc.paper.advancement.AdvancementDisplay$Frame; constants are host handles, not strings. */
export type AdvancementDisplay_Frame = JavaEnum<"io.papermc.paper.advancement.AdvancementDisplay$Frame", "CHALLENGE" | "GOAL" | "TASK"> & AdvancementDisplay_FrameMembers;
export interface AdvancementDisplay_FrameMembers {
  color(): j_net_kyori_adventure_text_format.TextColor;
  translationKey(): string;
}
export interface AdvancementDisplay_FrameStatics {
  readonly CHALLENGE: AdvancementDisplay_Frame;
  readonly GOAL: AdvancementDisplay_Frame;
  readonly TASK: AdvancementDisplay_Frame;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, AdvancementDisplay_Frame>;
  valueOf(arg0: string): AdvancementDisplay_Frame;
  values(): Array<AdvancementDisplay_Frame>;
}
