// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM interface io.papermc.paper.datacomponent.item.consumable.ConsumeEffect. */
export interface ConsumeEffectMembers {
}
export type ConsumeEffect = ConsumeEffectMembers;
export interface ConsumeEffectStatics {
  applyStatusEffects(arg0: JavaList<j_org_bukkit_potion.PotionEffect>, arg1: number): ConsumeEffect_ApplyStatusEffects;
  clearAllStatusEffects(): ConsumeEffect_ClearAllStatusEffects;
  playSoundConsumeEffect(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): ConsumeEffect_PlaySound;
  removeEffects(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_potion.PotionEffectType>): ConsumeEffect_RemoveStatusEffects;
  teleportRandomlyEffect(arg0: number): ConsumeEffect_TeleportRandomly;
}

/** JVM interface io.papermc.paper.datacomponent.item.consumable.ConsumeEffect$ApplyStatusEffects. */
export interface ConsumeEffect_ApplyStatusEffectsMembers {
  readonly __javaSupertypes?: readonly [ConsumeEffect];
  effects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  probability(): number;
}
export type ConsumeEffect_ApplyStatusEffects = ConsumeEffect_ApplyStatusEffectsMembers & ConsumeEffect;
export interface ConsumeEffect_ApplyStatusEffectsStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.consumable.ConsumeEffect$ClearAllStatusEffects. */
export interface ConsumeEffect_ClearAllStatusEffectsMembers {
  readonly __javaSupertypes?: readonly [ConsumeEffect];
}
export type ConsumeEffect_ClearAllStatusEffects = ConsumeEffect_ClearAllStatusEffectsMembers & ConsumeEffect;
export interface ConsumeEffect_ClearAllStatusEffectsStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.consumable.ConsumeEffect$PlaySound. */
export interface ConsumeEffect_PlaySoundMembers {
  readonly __javaSupertypes?: readonly [ConsumeEffect];
  sound(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type ConsumeEffect_PlaySound = ConsumeEffect_PlaySoundMembers & ConsumeEffect;
export interface ConsumeEffect_PlaySoundStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.consumable.ConsumeEffect$RemoveStatusEffects. */
export interface ConsumeEffect_RemoveStatusEffectsMembers {
  readonly __javaSupertypes?: readonly [ConsumeEffect];
  removeEffects(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_potion.PotionEffectType>;
}
export type ConsumeEffect_RemoveStatusEffects = ConsumeEffect_RemoveStatusEffectsMembers & ConsumeEffect;
export interface ConsumeEffect_RemoveStatusEffectsStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.consumable.ConsumeEffect$TeleportRandomly. */
export interface ConsumeEffect_TeleportRandomlyMembers {
  readonly __javaSupertypes?: readonly [ConsumeEffect];
  diameter(): number;
}
export type ConsumeEffect_TeleportRandomly = ConsumeEffect_TeleportRandomlyMembers & ConsumeEffect;
export interface ConsumeEffect_TeleportRandomlyStatics {
}

/** Live JVM enum io.papermc.paper.datacomponent.item.consumable.ItemUseAnimation; constants are host handles, not strings. */
export type ItemUseAnimation = JavaEnum<"io.papermc.paper.datacomponent.item.consumable.ItemUseAnimation", "BLOCK" | "BOW" | "BRUSH" | "BUNDLE" | "CROSSBOW" | "DRINK" | "EAT" | "NONE" | "SPEAR" | "SPYGLASS" | "TOOT_HORN"> & ItemUseAnimationMembers;
export interface ItemUseAnimationMembers {
}
export interface ItemUseAnimationStatics {
  readonly BLOCK: ItemUseAnimation;
  readonly BOW: ItemUseAnimation;
  readonly BRUSH: ItemUseAnimation;
  readonly BUNDLE: ItemUseAnimation;
  readonly CROSSBOW: ItemUseAnimation;
  readonly DRINK: ItemUseAnimation;
  readonly EAT: ItemUseAnimation;
  readonly NONE: ItemUseAnimation;
  readonly SPEAR: ItemUseAnimation;
  readonly SPYGLASS: ItemUseAnimation;
  readonly TOOT_HORN: ItemUseAnimation;
  valueOf(arg0: string): ItemUseAnimation;
  values(): Array<ItemUseAnimation>;
}
