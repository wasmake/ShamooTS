// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface org.bukkit.damage.DamageEffect. */
export interface DamageEffectMembers {
  getSound(): j_org_bukkit.Sound_2;
}
export type DamageEffect = DamageEffectMembers;
export interface DamageEffectStatics {
  readonly BURNING: DamageEffect;
  readonly DROWNING: DamageEffect;
  readonly FREEZING: DamageEffect;
  readonly HURT: DamageEffect;
  readonly POKING: DamageEffect;
  readonly THORNS: DamageEffect;
}

/** Live JVM enum org.bukkit.damage.DamageScaling; constants are host handles, not strings. */
export type DamageScaling = JavaEnum<"org.bukkit.damage.DamageScaling", "ALWAYS" | "NEVER" | "WHEN_CAUSED_BY_LIVING_NON_PLAYER"> & DamageScalingMembers;
export interface DamageScalingMembers {
}
export interface DamageScalingStatics {
  readonly ALWAYS: DamageScaling;
  readonly NEVER: DamageScaling;
  readonly WHEN_CAUSED_BY_LIVING_NON_PLAYER: DamageScaling;
  valueOf(arg0: string): DamageScaling;
  values(): Array<DamageScaling>;
}

/** JVM interface org.bukkit.damage.DamageSource. */
export interface DamageSourceMembers {
  getCausingEntity(): j_org_bukkit_entity.Entity | null;
  getDamageLocation(): j_org_bukkit.Location | null;
  getDamageType(): DamageType;
  getDirectEntity(): j_org_bukkit_entity.Entity | null;
  getFoodExhaustion(): number;
  getSourceLocation(): j_org_bukkit.Location | null;
  isIndirect(): boolean;
  scalesWithDifficulty(): boolean;
}
export type DamageSource = DamageSourceMembers;
export interface DamageSourceStatics {
  builder(arg0: DamageType): DamageSource_Builder;
}

/** JVM interface org.bukkit.damage.DamageSource$Builder. */
export interface DamageSource_BuilderMembers {
  build(): DamageSource;
  withCausingEntity(arg0: j_org_bukkit_entity.Entity): DamageSource_Builder;
  withDamageLocation(arg0: j_org_bukkit.Location): DamageSource_Builder;
  withDirectEntity(arg0: j_org_bukkit_entity.Entity): DamageSource_Builder;
}
export type DamageSource_Builder = DamageSource_BuilderMembers;
export interface DamageSource_BuilderStatics {
}

/** JVM interface org.bukkit.damage.DamageType. */
export interface DamageTypeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  getDamageEffect(): DamageEffect;
  getDamageScaling(): DamageScaling;
  getDeathMessageType(): DeathMessageType;
  getExhaustion(): number;
  getTranslationKey(): string;
}
export type DamageType = DamageTypeMembers & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface DamageTypeStatics {
  readonly ARROW: DamageType;
  readonly BAD_RESPAWN_POINT: DamageType;
  readonly CACTUS: DamageType;
  readonly CAMPFIRE: DamageType;
  readonly CRAMMING: DamageType;
  readonly DRAGON_BREATH: DamageType;
  readonly DROWN: DamageType;
  readonly DRY_OUT: DamageType;
  readonly ENDER_PEARL: DamageType;
  readonly EXPLOSION: DamageType;
  readonly FALL: DamageType;
  readonly FALLING_ANVIL: DamageType;
  readonly FALLING_BLOCK: DamageType;
  readonly FALLING_STALACTITE: DamageType;
  readonly FIREBALL: DamageType;
  readonly FIREWORKS: DamageType;
  readonly FLY_INTO_WALL: DamageType;
  readonly FREEZE: DamageType;
  readonly GENERIC: DamageType;
  readonly GENERIC_KILL: DamageType;
  readonly HOT_FLOOR: DamageType;
  readonly INDIRECT_MAGIC: DamageType;
  readonly IN_FIRE: DamageType;
  readonly IN_WALL: DamageType;
  readonly LAVA: DamageType;
  readonly LIGHTNING_BOLT: DamageType;
  readonly MACE_SMASH: DamageType;
  readonly MAGIC: DamageType;
  readonly MOB_ATTACK: DamageType;
  readonly MOB_ATTACK_NO_AGGRO: DamageType;
  readonly MOB_PROJECTILE: DamageType;
  readonly ON_FIRE: DamageType;
  readonly OUTSIDE_BORDER: DamageType;
  readonly OUT_OF_WORLD: DamageType;
  readonly PLAYER_ATTACK: DamageType;
  readonly PLAYER_EXPLOSION: DamageType;
  readonly SONIC_BOOM: DamageType;
  readonly SPIT: DamageType;
  readonly STALAGMITE: DamageType;
  readonly STARVE: DamageType;
  readonly STING: DamageType;
  readonly SWEET_BERRY_BUSH: DamageType;
  readonly THORNS: DamageType;
  readonly THROWN: DamageType;
  readonly TRIDENT: DamageType;
  readonly UNATTRIBUTED_FIREBALL: DamageType;
  readonly WIND_CHARGE: DamageType;
  readonly WITHER: DamageType;
  readonly WITHER_SKULL: DamageType;
}

/** Live JVM enum org.bukkit.damage.DeathMessageType; constants are host handles, not strings. */
export type DeathMessageType = JavaEnum<"org.bukkit.damage.DeathMessageType", "DEFAULT" | "FALL_VARIANTS" | "INTENTIONAL_GAME_DESIGN"> & DeathMessageTypeMembers;
export interface DeathMessageTypeMembers {
}
export interface DeathMessageTypeStatics {
  readonly DEFAULT: DeathMessageType;
  readonly FALL_VARIANTS: DeathMessageType;
  readonly INTENTIONAL_GAME_DESIGN: DeathMessageType;
  valueOf(arg0: string): DeathMessageType;
  values(): Array<DeathMessageType>;
}
