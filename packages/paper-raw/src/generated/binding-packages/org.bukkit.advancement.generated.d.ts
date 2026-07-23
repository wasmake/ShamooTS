// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_advancement from './io.papermc.paper.advancement.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface org.bukkit.advancement.Advancement. */
export interface AdvancementMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  displayName(): j_net_kyori_adventure_text.Component;
  getChildren(): JavaCollection<Advancement>;
  getCriteria(): JavaCollection<string>;
  getDisplay(): j_io_papermc_paper_advancement.AdvancementDisplay | null;
  getParent(): Advancement | null;
  getRequirements(): AdvancementRequirements;
  getRoot(): Advancement;
}
export type Advancement = AdvancementMembers & j_org_bukkit.Keyed;
export interface AdvancementStatics {
}

/** JVM interface org.bukkit.advancement.AdvancementDisplay. */
export interface AdvancementDisplay_2Members {
  getDescription(): string;
  getIcon(): j_org_bukkit_inventory.ItemStack;
  getTitle(): string;
  getType(): AdvancementDisplayType;
  getX(): number;
  getY(): number;
  isHidden(): boolean;
  shouldAnnounceChat(): boolean;
  shouldShowToast(): boolean;
}
export type AdvancementDisplay_2 = AdvancementDisplay_2Members;
export interface AdvancementDisplay_2Statics {
}

/** Live JVM enum org.bukkit.advancement.AdvancementDisplayType; constants are host handles, not strings. */
export type AdvancementDisplayType = JavaEnum<"org.bukkit.advancement.AdvancementDisplayType", "CHALLENGE" | "GOAL" | "TASK"> & AdvancementDisplayTypeMembers;
export interface AdvancementDisplayTypeMembers {
  getColor(): j_org_bukkit.ChatColor;
}
export interface AdvancementDisplayTypeStatics {
  readonly CHALLENGE: AdvancementDisplayType;
  readonly GOAL: AdvancementDisplayType;
  readonly TASK: AdvancementDisplayType;
  valueOf(arg0: string): AdvancementDisplayType;
  values(): Array<AdvancementDisplayType>;
}

/** JVM interface org.bukkit.advancement.AdvancementProgress. */
export interface AdvancementProgressMembers {
  awardCriteria(arg0: string): boolean;
  getAdvancement(): Advancement;
  getAwardedCriteria(): JavaCollection<string>;
  getDateAwarded(arg0: string): JavaOpaque<"java.util.Date"> | null;
  getRemainingCriteria(): JavaCollection<string>;
  isDone(): boolean;
  revokeCriteria(arg0: string): boolean;
}
export type AdvancementProgress = AdvancementProgressMembers;
export interface AdvancementProgressStatics {
}

/** JVM interface org.bukkit.advancement.AdvancementRequirement. */
export interface AdvancementRequirementMembers {
  getRequiredCriteria(): JavaList<string>;
  isStrict(): boolean;
}
export type AdvancementRequirement = AdvancementRequirementMembers;
export interface AdvancementRequirementStatics {
}

/** JVM interface org.bukkit.advancement.AdvancementRequirements. */
export interface AdvancementRequirementsMembers {
  getRequirements(): JavaList<AdvancementRequirement>;
}
export type AdvancementRequirements = AdvancementRequirementsMembers;
export interface AdvancementRequirementsStatics {
}
