// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';

/** JVM class org.bukkit.craftbukkit.advancement.CraftAdvancement. */
export interface CraftAdvancementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.advancement.Advancement">];
  displayName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  getChildren(): JavaCollection<JavaOpaque<"org.bukkit.advancement.Advancement">>;
  getCriteria(): JavaCollection<string>;
  getDisplay(): JavaOpaque<"io.papermc.paper.advancement.AdvancementDisplay">;
  getDisplay0(): JavaOpaque<"org.bukkit.advancement.AdvancementDisplay">;
  getHandle(): j_net_minecraft_advancements.AdvancementHolder;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getParent(): JavaOpaque<"org.bukkit.advancement.Advancement">;
  getRequirements(): JavaOpaque<"org.bukkit.advancement.AdvancementRequirements">;
  getRoot(): JavaOpaque<"org.bukkit.advancement.Advancement">;
}
export type CraftAdvancement = CraftAdvancementMembers & JavaOpaque<"org.bukkit.advancement.Advancement">;
export interface CraftAdvancementStatics {
  new(arg0: j_net_minecraft_advancements.AdvancementHolder): CraftAdvancement;
}

/** JVM class org.bukkit.craftbukkit.advancement.CraftAdvancementDisplay. */
export interface CraftAdvancementDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.advancement.AdvancementDisplay">];
  getDescription(): string;
  getHandle(): j_net_minecraft_advancements.DisplayInfo;
  getIcon(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getTitle(): string;
  getType(): JavaOpaque<"org.bukkit.advancement.AdvancementDisplayType">;
  getX(): number;
  getY(): number;
  isHidden(): boolean;
  shouldAnnounceChat(): boolean;
  shouldShowToast(): boolean;
}
export type CraftAdvancementDisplay = CraftAdvancementDisplayMembers & JavaOpaque<"org.bukkit.advancement.AdvancementDisplay">;
export interface CraftAdvancementDisplayStatics {
  new(arg0: j_net_minecraft_advancements.DisplayInfo): CraftAdvancementDisplay;
}

/** JVM class org.bukkit.craftbukkit.advancement.CraftAdvancementProgress. */
export interface CraftAdvancementProgressMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.advancement.AdvancementProgress">];
  awardCriteria(arg0: string): boolean;
  getAdvancement(): JavaOpaque<"org.bukkit.advancement.Advancement">;
  getAwardedCriteria(): JavaCollection<string>;
  getDateAwarded(arg0: string): JavaOpaque<"java.util.Date">;
  getRemainingCriteria(): JavaCollection<string>;
  isDone(): boolean;
  revokeCriteria(arg0: string): boolean;
}
export type CraftAdvancementProgress = CraftAdvancementProgressMembers & JavaOpaque<"org.bukkit.advancement.AdvancementProgress">;
export interface CraftAdvancementProgressStatics {
  new(arg0: CraftAdvancement, arg1: j_net_minecraft_server.PlayerAdvancements, arg2: j_net_minecraft_advancements.AdvancementProgress): CraftAdvancementProgress;
}

/** JVM class org.bukkit.craftbukkit.advancement.CraftAdvancementRequirement. */
export interface CraftAdvancementRequirementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.advancement.AdvancementRequirement">];
  getRequiredCriteria(): JavaList<string>;
  isStrict(): boolean;
}
export type CraftAdvancementRequirement = CraftAdvancementRequirementMembers & JavaOpaque<"org.bukkit.advancement.AdvancementRequirement">;
export interface CraftAdvancementRequirementStatics {
  new(arg0: JavaList<string>): CraftAdvancementRequirement;
}

/** JVM class org.bukkit.craftbukkit.advancement.CraftAdvancementRequirements. */
export interface CraftAdvancementRequirementsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.advancement.AdvancementRequirements">];
  getRequirements(): JavaList<JavaOpaque<"org.bukkit.advancement.AdvancementRequirement">>;
}
export type CraftAdvancementRequirements = CraftAdvancementRequirementsMembers & JavaOpaque<"org.bukkit.advancement.AdvancementRequirements">;
export interface CraftAdvancementRequirementsStatics {
  new(arg0: j_net_minecraft_advancements.AdvancementRequirements): CraftAdvancementRequirements;
}
