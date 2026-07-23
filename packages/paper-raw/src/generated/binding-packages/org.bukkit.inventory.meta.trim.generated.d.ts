// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM class org.bukkit.inventory.meta.trim.ArmorTrim. */
export interface ArmorTrimMembers {
  equals(arg0: object): boolean;
  getMaterial(): TrimMaterial;
  getPattern(): TrimPattern;
  hashCode(): number;
}
export type ArmorTrim = ArmorTrimMembers;
export interface ArmorTrimStatics {
  new(arg0: TrimMaterial, arg1: TrimPattern): ArmorTrim;
}

/** JVM interface org.bukkit.inventory.meta.trim.TrimMaterial. */
export interface TrimMaterialMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  description(): j_net_kyori_adventure_text.Component;
  getKey(): j_org_bukkit.NamespacedKey;
  getTranslationKey(): string;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type TrimMaterial = TrimMaterialMembers & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface TrimMaterialStatics {
  readonly AMETHYST: TrimMaterial;
  readonly COPPER: TrimMaterial;
  readonly DIAMOND: TrimMaterial;
  readonly EMERALD: TrimMaterial;
  readonly GOLD: TrimMaterial;
  readonly IRON: TrimMaterial;
  readonly LAPIS: TrimMaterial;
  readonly NETHERITE: TrimMaterial;
  readonly QUARTZ: TrimMaterial;
  readonly REDSTONE: TrimMaterial;
  readonly RESIN: TrimMaterial;
}

/** JVM interface org.bukkit.inventory.meta.trim.TrimPattern. */
export interface TrimPatternMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  description(): j_net_kyori_adventure_text.Component;
  getKey(): j_org_bukkit.NamespacedKey;
  getTranslationKey(): string;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type TrimPattern = TrimPatternMembers & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface TrimPatternStatics {
  readonly BOLT: TrimPattern;
  readonly COAST: TrimPattern;
  readonly DUNE: TrimPattern;
  readonly EYE: TrimPattern;
  readonly FLOW: TrimPattern;
  readonly HOST: TrimPattern;
  readonly RAISER: TrimPattern;
  readonly RIB: TrimPattern;
  readonly SENTRY: TrimPattern;
  readonly SHAPER: TrimPattern;
  readonly SILENCE: TrimPattern;
  readonly SNOUT: TrimPattern;
  readonly SPIRE: TrimPattern;
  readonly TIDE: TrimPattern;
  readonly VEX: TrimPattern;
  readonly WARD: TrimPattern;
  readonly WAYFINDER: TrimPattern;
  readonly WILD: TrimPattern;
}
