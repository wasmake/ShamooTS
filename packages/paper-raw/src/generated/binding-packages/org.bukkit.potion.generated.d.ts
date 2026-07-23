// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_potion from './io.papermc.paper.potion.generated.js';
import type * as j_io_papermc_paper_world_flag from './io.papermc.paper.world.flag.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_attribute from './org.bukkit.attribute.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface org.bukkit.potion.PotionBrewer. */
export interface PotionBrewerMembers {
  addPotionMix(arg0: j_io_papermc_paper_potion.PotionMix): void;
  createEffect(arg0: PotionEffectType, arg1: number, arg2: number): PotionEffect;
  getEffects(arg0: PotionType, arg1: boolean, arg2: boolean): JavaCollection<PotionEffect>;
  getEffectsFromDamage(arg0: number): JavaCollection<PotionEffect>;
  removePotionMix(arg0: j_org_bukkit.NamespacedKey): void;
  resetPotionMixes(): void;
}
export type PotionBrewer = PotionBrewerMembers;
export interface PotionBrewerStatics {
}

/** JVM class org.bukkit.potion.PotionData. */
export interface PotionDataMembers {
  equals(arg0: object): boolean;
  getType(): PotionType;
  hashCode(): number;
  isExtended(): boolean;
  isUpgraded(): boolean;
}
export type PotionData = PotionDataMembers;
export interface PotionDataStatics {
  new(arg0: PotionType): PotionData;
  new(arg0: PotionType, arg1: boolean, arg2: boolean): PotionData;
}

/** JVM class org.bukkit.potion.PotionEffect. */
export interface PotionEffectMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  apply(arg0: j_org_bukkit_entity.LivingEntity): boolean;
  equals(arg0: object): boolean;
  getAmplifier(): number;
  getColor(): j_org_bukkit.Color | null;
  getDuration(): number;
  getHiddenPotionEffect(): PotionEffect | null;
  getType(): PotionEffectType;
  hasIcon(): boolean;
  hasParticles(): boolean;
  hashCode(): number;
  isAmbient(): boolean;
  isInfinite(): boolean;
  isShorterThan(arg0: PotionEffect): boolean;
  serialize(): JavaMap<string, object>;
  toString(): string;
  withAmbient(arg0: boolean): PotionEffect;
  withAmplifier(arg0: number): PotionEffect;
  withDuration(arg0: number): PotionEffect;
  withIcon(arg0: boolean): PotionEffect;
  withParticles(arg0: boolean): PotionEffect;
  withType(arg0: PotionEffectType): PotionEffect;
}
export type PotionEffect = PotionEffectMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface PotionEffectStatics {
  new(arg0: JavaMap<string, object>): PotionEffect;
  new(arg0: PotionEffectType, arg1: number, arg2: number): PotionEffect;
  new(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean): PotionEffect;
  new(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean, arg4: boolean): PotionEffect;
  new(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): PotionEffect;
  new(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: PotionEffect | null): PotionEffect;
  readonly INFINITE_DURATION: -1;
}

/** JVM abstract org.bukkit.potion.PotionEffectType. */
export interface PotionEffectTypeMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_world_flag.FeatureDependant, j_net_kyori_adventure_translation.Translatable, j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  createEffect(arg0: number, arg1: number): PotionEffect;
  getAttributeModifierAmount(arg0: j_org_bukkit_attribute.Attribute, arg1: number): number;
  getCategory(): PotionEffectTypeCategory;
  getColor(): j_org_bukkit.Color;
  getDurationModifier(): number;
  getEffectAttributes(): JavaMap<j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier>;
  getEffectCategory(): PotionEffectType_Category;
  getId(): number;
  getName(): string;
  isInstant(): boolean;
}
export type PotionEffectType = PotionEffectTypeMembers & j_io_papermc_paper_world_flag.FeatureDependant & j_net_kyori_adventure_translation.Translatable & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface PotionEffectTypeStatics {
  new(): PotionEffectType;
  readonly ABSORPTION: PotionEffectType;
  readonly BAD_OMEN: PotionEffectType;
  readonly BLINDNESS: PotionEffectType;
  readonly CONDUIT_POWER: PotionEffectType;
  readonly DARKNESS: PotionEffectType;
  readonly DOLPHINS_GRACE: PotionEffectType;
  readonly FIRE_RESISTANCE: PotionEffectType;
  readonly GLOWING: PotionEffectType;
  readonly HASTE: PotionEffectType;
  readonly HEALTH_BOOST: PotionEffectType;
  readonly HERO_OF_THE_VILLAGE: PotionEffectType;
  readonly HUNGER: PotionEffectType;
  readonly INFESTED: PotionEffectType;
  readonly INSTANT_DAMAGE: PotionEffectType;
  readonly INSTANT_HEALTH: PotionEffectType;
  readonly INVISIBILITY: PotionEffectType;
  readonly JUMP_BOOST: PotionEffectType;
  readonly LEVITATION: PotionEffectType;
  readonly LUCK: PotionEffectType;
  readonly MINING_FATIGUE: PotionEffectType;
  readonly NAUSEA: PotionEffectType;
  readonly NIGHT_VISION: PotionEffectType;
  readonly OOZING: PotionEffectType;
  readonly POISON: PotionEffectType;
  readonly RAID_OMEN: PotionEffectType;
  readonly REGENERATION: PotionEffectType;
  readonly RESISTANCE: PotionEffectType;
  readonly SATURATION: PotionEffectType;
  readonly SLOWNESS: PotionEffectType;
  readonly SLOW_FALLING: PotionEffectType;
  readonly SPEED: PotionEffectType;
  readonly STRENGTH: PotionEffectType;
  readonly TRIAL_OMEN: PotionEffectType;
  readonly UNLUCK: PotionEffectType;
  readonly WATER_BREATHING: PotionEffectType;
  readonly WEAKNESS: PotionEffectType;
  readonly WEAVING: PotionEffectType;
  readonly WIND_CHARGED: PotionEffectType;
  readonly WITHER: PotionEffectType;
  getById(arg0: number): PotionEffectType | null;
  getByKey(arg0: j_org_bukkit.NamespacedKey | null): PotionEffectType | null;
  getByName(arg0: string): PotionEffectType | null;
  values(): Array<PotionEffectType>;
}

/** Live JVM enum org.bukkit.potion.PotionEffectType$Category; constants are host handles, not strings. */
export type PotionEffectType_Category = JavaEnum<"org.bukkit.potion.PotionEffectType$Category", "BENEFICIAL" | "HARMFUL" | "NEUTRAL"> & PotionEffectType_CategoryMembers;
export interface PotionEffectType_CategoryMembers {
  getColor(): j_net_kyori_adventure_text_format.TextColor;
}
export interface PotionEffectType_CategoryStatics {
  readonly BENEFICIAL: PotionEffectType_Category;
  readonly HARMFUL: PotionEffectType_Category;
  readonly NEUTRAL: PotionEffectType_Category;
  valueOf(arg0: string): PotionEffectType_Category;
  values(): Array<PotionEffectType_Category>;
}

/** Live JVM enum org.bukkit.potion.PotionEffectTypeCategory; constants are host handles, not strings. */
export type PotionEffectTypeCategory = JavaEnum<"org.bukkit.potion.PotionEffectTypeCategory", "BENEFICIAL" | "HARMFUL" | "NEUTRAL"> & PotionEffectTypeCategoryMembers;
export interface PotionEffectTypeCategoryMembers {
}
export interface PotionEffectTypeCategoryStatics {
  readonly BENEFICIAL: PotionEffectTypeCategory;
  readonly HARMFUL: PotionEffectTypeCategory;
  readonly NEUTRAL: PotionEffectTypeCategory;
  valueOf(arg0: string): PotionEffectTypeCategory;
  values(): Array<PotionEffectTypeCategory>;
}

/** JVM abstract org.bukkit.potion.PotionEffectTypeWrapper. */
export interface PotionEffectTypeWrapperMembers {
  readonly __javaSupertypes?: readonly [PotionEffectType];
  getAttributeModifierAmount(arg0: j_org_bukkit_attribute.Attribute, arg1: number): number;
  getColor(): j_org_bukkit.Color;
  getEffectAttributes(): JavaMap<j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier>;
  getEffectCategory(): PotionEffectType_Category;
  getKey(): j_org_bukkit.NamespacedKey;
  getType(): PotionEffectType;
  isInstant(): boolean;
  translationKey(): string;
}
export type PotionEffectTypeWrapper = PotionEffectTypeWrapperMembers & PotionEffectType;
export interface PotionEffectTypeWrapperStatics {
  new(): PotionEffectTypeWrapper;
}

/** Live JVM enum org.bukkit.potion.PotionType; constants are host handles, not strings. */
export type PotionType = JavaEnum<"org.bukkit.potion.PotionType", "AWKWARD" | "FIRE_RESISTANCE" | "HARMING" | "HEALING" | "INFESTED" | "INVISIBILITY" | "LEAPING" | "LONG_FIRE_RESISTANCE" | "LONG_INVISIBILITY" | "LONG_LEAPING" | "LONG_NIGHT_VISION" | "LONG_POISON" | "LONG_REGENERATION" | "LONG_SLOWNESS" | "LONG_SLOW_FALLING" | "LONG_STRENGTH" | "LONG_SWIFTNESS" | "LONG_TURTLE_MASTER" | "LONG_WATER_BREATHING" | "LONG_WEAKNESS" | "LUCK" | "MUNDANE" | "NIGHT_VISION" | "OOZING" | "POISON" | "REGENERATION" | "SLOWNESS" | "SLOW_FALLING" | "STRENGTH" | "STRONG_HARMING" | "STRONG_HEALING" | "STRONG_LEAPING" | "STRONG_POISON" | "STRONG_REGENERATION" | "STRONG_SLOWNESS" | "STRONG_STRENGTH" | "STRONG_SWIFTNESS" | "STRONG_TURTLE_MASTER" | "SWIFTNESS" | "THICK" | "TURTLE_MASTER" | "WATER" | "WATER_BREATHING" | "WEAKNESS" | "WEAVING" | "WIND_CHARGED"> & PotionTypeMembers;
export interface PotionTypeMembers {
  getEffectType(): PotionEffectType | null;
  getKey(): j_org_bukkit.NamespacedKey;
  getMaxLevel(): number;
  getPotionEffects(): JavaList<PotionEffect>;
  isExtendable(): boolean;
  isInstant(): boolean;
  isUpgradeable(): boolean;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  requiredFeatures(): JavaSet<j_org_bukkit.FeatureFlag>;
}
export interface PotionTypeStatics {
  readonly AWKWARD: PotionType;
  readonly FIRE_RESISTANCE: PotionType;
  readonly HARMING: PotionType;
  readonly HEALING: PotionType;
  readonly INFESTED: PotionType;
  readonly INVISIBILITY: PotionType;
  readonly LEAPING: PotionType;
  readonly LONG_FIRE_RESISTANCE: PotionType;
  readonly LONG_INVISIBILITY: PotionType;
  readonly LONG_LEAPING: PotionType;
  readonly LONG_NIGHT_VISION: PotionType;
  readonly LONG_POISON: PotionType;
  readonly LONG_REGENERATION: PotionType;
  readonly LONG_SLOWNESS: PotionType;
  readonly LONG_SLOW_FALLING: PotionType;
  readonly LONG_STRENGTH: PotionType;
  readonly LONG_SWIFTNESS: PotionType;
  readonly LONG_TURTLE_MASTER: PotionType;
  readonly LONG_WATER_BREATHING: PotionType;
  readonly LONG_WEAKNESS: PotionType;
  readonly LUCK: PotionType;
  readonly MUNDANE: PotionType;
  readonly NIGHT_VISION: PotionType;
  readonly OOZING: PotionType;
  readonly POISON: PotionType;
  readonly REGENERATION: PotionType;
  readonly SLOWNESS: PotionType;
  readonly SLOW_FALLING: PotionType;
  readonly STRENGTH: PotionType;
  readonly STRONG_HARMING: PotionType;
  readonly STRONG_HEALING: PotionType;
  readonly STRONG_LEAPING: PotionType;
  readonly STRONG_POISON: PotionType;
  readonly STRONG_REGENERATION: PotionType;
  readonly STRONG_SLOWNESS: PotionType;
  readonly STRONG_STRENGTH: PotionType;
  readonly STRONG_SWIFTNESS: PotionType;
  readonly STRONG_TURTLE_MASTER: PotionType;
  readonly SWIFTNESS: PotionType;
  readonly THICK: PotionType;
  readonly TURTLE_MASTER: PotionType;
  readonly WATER: PotionType;
  readonly WATER_BREATHING: PotionType;
  readonly WEAKNESS: PotionType;
  readonly WEAVING: PotionType;
  readonly WIND_CHARGED: PotionType;
  getByEffect(arg0: PotionEffectType | null): PotionType | null;
  valueOf(arg0: string): PotionType;
  values(): Array<PotionType>;
}

/** JVM interface org.bukkit.potion.PotionType$InternalPotionData. */
export interface PotionType_InternalPotionDataMembers {
  getEffectType(): PotionEffectType;
  getMaxLevel(): number;
  getPotionEffects(): JavaList<PotionEffect>;
  isExtendable(): boolean;
  isInstant(): boolean;
  isUpgradeable(): boolean;
}
export type PotionType_InternalPotionData = PotionType_InternalPotionDataMembers;
export interface PotionType_InternalPotionDataStatics {
}
