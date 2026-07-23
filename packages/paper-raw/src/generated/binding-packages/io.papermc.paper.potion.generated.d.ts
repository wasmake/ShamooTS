// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM class io.papermc.paper.potion.PotionMix. */
export interface PotionMixMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  equals(arg0: object): boolean;
  getIngredient(): j_org_bukkit_inventory.RecipeChoice;
  getInput(): j_org_bukkit_inventory.RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): j_org_bukkit_inventory.ItemStack;
  hashCode(): number;
  toString(): string;
}
export type PotionMix = PotionMixMembers & j_org_bukkit.Keyed;
export interface PotionMixStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.RecipeChoice, arg3: j_org_bukkit_inventory.RecipeChoice): PotionMix;
  createPredicateChoice(arg0: JavaPredicate<j_org_bukkit_inventory.ItemStack>): j_org_bukkit_inventory.RecipeChoice;
}

/** JVM interface io.papermc.paper.potion.SuspiciousEffectEntry. */
export interface SuspiciousEffectEntryMembers {
  duration(): number;
  effect(): j_org_bukkit_potion.PotionEffectType;
}
export type SuspiciousEffectEntry = SuspiciousEffectEntryMembers;
export interface SuspiciousEffectEntryStatics {
  create(arg0: j_org_bukkit_potion.PotionEffectType, arg1: number): SuspiciousEffectEntry;
}
