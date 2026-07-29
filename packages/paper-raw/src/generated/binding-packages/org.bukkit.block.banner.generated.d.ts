// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class org.bukkit.block.banner.Pattern. */
export interface PatternMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  equals(arg0: object): boolean;
  getColor(): j_org_bukkit.DyeColor;
  getPattern(): PatternType;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
}
export type Pattern = PatternMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface PatternStatics {
  new(arg0: JavaMap<string, object>): Pattern;
  new(arg0: j_org_bukkit.DyeColor, arg1: PatternType): Pattern;
}

/** JVM interface org.bukkit.block.banner.PatternType. */
export interface PatternTypeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<PatternType>, j_org_bukkit.Keyed];
  compareTo(arg0: PatternType): number;
  getIdentifier(): string;
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
}
export type PatternType = PatternTypeMembers & j_org_bukkit.Keyed;
export interface PatternTypeStatics {
  readonly BASE: PatternType;
  readonly BORDER: PatternType;
  readonly BRICKS: PatternType;
  readonly CIRCLE: PatternType;
  readonly CREEPER: PatternType;
  readonly CROSS: PatternType;
  readonly CURLY_BORDER: PatternType;
  readonly DIAGONAL_LEFT: PatternType;
  readonly DIAGONAL_RIGHT: PatternType;
  readonly DIAGONAL_UP_LEFT: PatternType;
  readonly DIAGONAL_UP_RIGHT: PatternType;
  readonly FLOW: PatternType;
  readonly FLOWER: PatternType;
  readonly GLOBE: PatternType;
  readonly GRADIENT: PatternType;
  readonly GRADIENT_UP: PatternType;
  readonly GUSTER: PatternType;
  readonly HALF_HORIZONTAL: PatternType;
  readonly HALF_HORIZONTAL_BOTTOM: PatternType;
  readonly HALF_VERTICAL: PatternType;
  readonly HALF_VERTICAL_RIGHT: PatternType;
  readonly MOJANG: PatternType;
  readonly PIGLIN: PatternType;
  readonly RHOMBUS: PatternType;
  readonly SKULL: PatternType;
  readonly SMALL_STRIPES: PatternType;
  readonly SQUARE_BOTTOM_LEFT: PatternType;
  readonly SQUARE_BOTTOM_RIGHT: PatternType;
  readonly SQUARE_TOP_LEFT: PatternType;
  readonly SQUARE_TOP_RIGHT: PatternType;
  readonly STRAIGHT_CROSS: PatternType;
  readonly STRIPE_BOTTOM: PatternType;
  readonly STRIPE_CENTER: PatternType;
  readonly STRIPE_DOWNLEFT: PatternType;
  readonly STRIPE_DOWNRIGHT: PatternType;
  readonly STRIPE_LEFT: PatternType;
  readonly STRIPE_MIDDLE: PatternType;
  readonly STRIPE_RIGHT: PatternType;
  readonly STRIPE_TOP: PatternType;
  readonly TRIANGLES_BOTTOM: PatternType;
  readonly TRIANGLES_TOP: PatternType;
  readonly TRIANGLE_BOTTOM: PatternType;
  readonly TRIANGLE_TOP: PatternType;
  getByIdentifier(arg0: string | null): PatternType | null;
  valueOf(arg0: string): PatternType;
  values(): Array<PatternType>;
}
