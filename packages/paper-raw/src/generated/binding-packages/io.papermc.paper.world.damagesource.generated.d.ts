// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.world.damagesource.CombatEntry. */
export interface CombatEntryMembers {
  getDamage(): number;
  getDamageSource(): j_org_bukkit_damage.DamageSource;
  getFallDistance(): number;
  getFallLocationType(): FallLocationType | null;
}
export type CombatEntry = CombatEntryMembers;
export interface CombatEntryStatics {
  combatEntry(arg0: j_org_bukkit_damage.DamageSource, arg1: number, arg2: FallLocationType, arg3: number): CombatEntry | null;
  combatEntry(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_damage.DamageSource, arg2: number): CombatEntry;
}

/** JVM interface io.papermc.paper.world.damagesource.CombatTracker. */
export interface CombatTrackerMembers {
  addCombatEntry(arg0: CombatEntry): void;
  calculateFallLocationType(): FallLocationType | null;
  computeMostSignificantFall(): CombatEntry | null;
  getCombatDuration(): number;
  getCombatEntries(): JavaList<CombatEntry>;
  getDeathMessage(): j_net_kyori_adventure_text.Component;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  isInCombat(): boolean;
  isTakingDamage(): boolean;
  resetCombatState(): void;
  setCombatEntries(arg0: JavaList<CombatEntry>): void;
}
export type CombatTracker = CombatTrackerMembers;
export interface CombatTrackerStatics {
}

/** JVM interface io.papermc.paper.world.damagesource.FallLocationType. */
export interface FallLocationTypeMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_translation.Translatable];
  id(): string;
  translationKey(): string;
}
export type FallLocationType = FallLocationTypeMembers & j_net_kyori_adventure_translation.Translatable;
export interface FallLocationTypeStatics {
  readonly GENERIC: FallLocationType;
  readonly LADDER: FallLocationType;
  readonly OTHER_CLIMBABLE: FallLocationType;
  readonly SCAFFOLDING: FallLocationType;
  readonly TWISTING_VINES: FallLocationType;
  readonly VINES: FallLocationType;
  readonly WATER: FallLocationType;
  readonly WEEPING_VINES: FallLocationType;
}
