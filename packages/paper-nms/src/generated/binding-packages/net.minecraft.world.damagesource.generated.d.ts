// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM record net.minecraft.world.damagesource.CombatEntry. */
export interface CombatEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  damage(): number;
  equals(arg0: object): boolean;
  fallDistance(): number;
  fallLocation(): FallLocation | null;
  hashCode(): number;
  source(): DamageSource;
  toString(): string;
}
export type CombatEntry = CombatEntryMembers & JavaOpaque<"java.lang.Record">;
export interface CombatEntryStatics {
  new(arg0: DamageSource, arg1: number, arg2: FallLocation | null, arg3: number): CombatEntry;
}

/** JVM class net.minecraft.world.damagesource.CombatRules. */
export interface CombatRulesMembers {
}
export type CombatRules = CombatRulesMembers;
export interface CombatRulesStatics {
  new(): CombatRules;
  readonly ARMOR_PROTECTION_DIVIDER: 25;
  readonly BASE_ARMOR_TOUGHNESS: 2;
  readonly MAX_ARMOR: 20;
  readonly MIN_ARMOR_RATIO: 0.2;
  getDamageAfterAbsorb(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number, arg2: DamageSource, arg3: number, arg4: number): number;
  getDamageAfterMagicAbsorb(arg0: number, arg1: number): number;
}

/** JVM class net.minecraft.world.damagesource.CombatTracker. */
export interface CombatTrackerMembers {
  readonly entries: JavaList<CombatEntry>;
  getCombatDuration(): number;
  getDeathMessage(): j_net_minecraft_network_chat.Component;
  getMostSignificantFall(): CombatEntry | null;
  inCombat: boolean;
  readonly mob: j_net_minecraft_world_entity.LivingEntity;
  readonly paperCombatTracker: JavaOpaque<"io.papermc.paper.world.damagesource.PaperCombatTrackerWrapper">;
  recheckStatus(): void;
  recordDamage(arg0: DamageSource, arg1: number): void;
  recordDamageAndCheckCombatState(arg0: CombatEntry): void;
  resetCombatState(): void;
  takingDamage: boolean;
}
export type CombatTracker = CombatTrackerMembers;
export interface CombatTrackerStatics {
  new(arg0: j_net_minecraft_world_entity.LivingEntity): CombatTracker;
  readonly RESET_COMBAT_STATUS_TIME: 300;
  readonly RESET_DAMAGE_STATUS_TIME: 100;
}

/** Live JVM enum net.minecraft.world.damagesource.DamageEffects; constants are host handles, not strings. */
export type DamageEffects = JavaEnum<"net.minecraft.world.damagesource.DamageEffects", "BURNING" | "DROWNING" | "FREEZING" | "HURT" | "POKING" | "THORNS"> & DamageEffectsMembers;
export interface DamageEffectsMembers {
  getSerializedName(): string;
  sound(): j_net_minecraft_sounds.SoundEvent;
}
export interface DamageEffectsStatics {
  readonly BURNING: DamageEffects;
  readonly DROWNING: DamageEffects;
  readonly FREEZING: DamageEffects;
  readonly HURT: DamageEffects;
  readonly POKING: DamageEffects;
  readonly THORNS: DamageEffects;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamageEffects]>;
  valueOf(arg0: string): DamageEffects;
  values(): Array<DamageEffects>;
}

/** Live JVM enum net.minecraft.world.damagesource.DamageScaling; constants are host handles, not strings. */
export type DamageScaling = JavaEnum<"net.minecraft.world.damagesource.DamageScaling", "ALWAYS" | "NEVER" | "WHEN_CAUSED_BY_LIVING_NON_PLAYER"> & DamageScalingMembers;
export interface DamageScalingMembers {
  getSerializedName(): string;
}
export interface DamageScalingStatics {
  readonly ALWAYS: DamageScaling;
  readonly NEVER: DamageScaling;
  readonly WHEN_CAUSED_BY_LIVING_NON_PLAYER: DamageScaling;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamageScaling]>;
  valueOf(arg0: string): DamageScaling;
  values(): Array<DamageScaling>;
}

/** JVM class net.minecraft.world.damagesource.DamageSource. */
export interface DamageSourceMembers {
  causingBlockSnapshot(): JavaOpaque<"org.bukkit.block.BlockState"> | null;
  causingBlockSnapshot(arg0: JavaOpaque<"org.bukkit.block.BlockState">): DamageSource;
  critical(): DamageSource;
  eventBlockDamager(): JavaOpaque<"org.bukkit.block.Block"> | null;
  eventBlockDamager(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos | null): DamageSource | null;
  eventEntityDamager(): j_net_minecraft_world_entity.Entity | null;
  eventEntityDamager(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  getDirectEntity(): j_net_minecraft_world_entity.Entity | null;
  getEntity(): j_net_minecraft_world_entity.Entity | null;
  getFoodExhaustion(): number;
  getLocalizedDeathMessage(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_network_chat.Component;
  getMsgId(): string;
  getSourcePosition(): j_net_minecraft_world_phys.Vec3 | null;
  getWeaponItem(): j_net_minecraft_world_item.ItemStack | null;
  is(arg0: j_net_minecraft_resources.ResourceKey<DamageType>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<DamageType>): boolean;
  isCreativePlayer(): boolean;
  isCritical(): boolean;
  isDirect(): boolean;
  knownCause(): JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent$DamageCause"> | null;
  knownCause(arg0: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent$DamageCause">): DamageSource;
  scalesWithDifficulty(): boolean;
  sourcePositionRaw(): j_net_minecraft_world_phys.Vec3 | null;
  toString(): string;
  type(): DamageType;
  typeHolder(): j_net_minecraft_core.Holder<DamageType>;
}
export type DamageSource = DamageSourceMembers;
export interface DamageSourceStatics {
  new(arg0: j_net_minecraft_core.Holder<DamageType>): DamageSource;
  new(arg0: j_net_minecraft_core.Holder<DamageType>, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource;
  new(arg0: j_net_minecraft_core.Holder<DamageType>, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_entity.Entity | null): DamageSource;
  new(arg0: j_net_minecraft_core.Holder<DamageType>, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_entity.Entity | null, arg3: j_net_minecraft_world_phys.Vec3 | null): DamageSource;
  new(arg0: j_net_minecraft_core.Holder<DamageType>, arg1: j_net_minecraft_world_phys.Vec3): DamageSource;
}

/** JVM class net.minecraft.world.damagesource.DamageSources. */
export interface DamageSourcesMembers {
  anvil(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  arrow(arg0: j_net_minecraft_world_entity_projectile.AbstractArrow, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  badRespawnPointExplosion(arg0: j_net_minecraft_world_phys.Vec3): DamageSource;
  cactus(): DamageSource;
  campfire(): DamageSource;
  cramming(): DamageSource;
  dragonBreath(): DamageSource;
  drown(): DamageSource;
  dryOut(): DamageSource;
  enderPearl(): DamageSource;
  explosion(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  explosion(arg0: j_net_minecraft_world_level.Explosion | null): DamageSource | null;
  fall(): DamageSource;
  fallingBlock(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  fallingStalactite(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  fellOutOfWorld(): DamageSource;
  fireball(arg0: j_net_minecraft_world_entity_projectile.Fireball, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  fireworks(arg0: j_net_minecraft_world_entity_projectile.FireworkRocketEntity, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  flyIntoWall(): DamageSource;
  freeze(): DamageSource;
  generic(): DamageSource;
  genericKill(): DamageSource;
  hotFloor(): DamageSource;
  inFire(): DamageSource;
  inWall(): DamageSource;
  indirectMagic(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  lava(): DamageSource;
  lightningBolt(): DamageSource;
  mace(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  magic(): DamageSource;
  mobAttack(arg0: j_net_minecraft_world_entity.LivingEntity): DamageSource;
  mobProjectile(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.LivingEntity | null): DamageSource | null;
  noAggroMobAttack(arg0: j_net_minecraft_world_entity.LivingEntity): DamageSource;
  onFire(): DamageSource;
  outOfBorder(): DamageSource;
  playerAttack(arg0: j_net_minecraft_world_entity_player.Player): DamageSource;
  sonicBoom(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  spit(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.LivingEntity | null): DamageSource | null;
  stalagmite(): DamageSource;
  starve(): DamageSource;
  sting(arg0: j_net_minecraft_world_entity.LivingEntity): DamageSource;
  sweetBerryBush(): DamageSource;
  thorns(arg0: j_net_minecraft_world_entity.Entity): DamageSource;
  thrown(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  trident(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity | null): DamageSource | null;
  windCharge(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.LivingEntity | null): DamageSource | null;
  wither(): DamageSource;
  witherSkull(arg0: j_net_minecraft_world_entity_projectile.WitherSkull, arg1: j_net_minecraft_world_entity.Entity): DamageSource;
}
export type DamageSources = DamageSourcesMembers;
export interface DamageSourcesStatics {
  new(arg0: j_net_minecraft_core.RegistryAccess): DamageSources;
}

/** JVM record net.minecraft.world.damagesource.DamageType. */
export interface DamageTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  deathMessageType(): DeathMessageType;
  effects(): DamageEffects;
  equals(arg0: object): boolean;
  exhaustion(): number;
  hashCode(): number;
  msgId(): string;
  scaling(): DamageScaling;
  toString(): string;
}
export type DamageType = DamageTypeMembers & JavaOpaque<"java.lang.Record">;
export interface DamageTypeStatics {
  new(arg0: string, arg1: number): DamageType;
  new(arg0: string, arg1: number, arg2: DamageEffects): DamageType;
  new(arg0: string, arg1: DamageScaling, arg2: number): DamageType;
  new(arg0: string, arg1: DamageScaling, arg2: number, arg3: DamageEffects): DamageType;
  new(arg0: string, arg1: DamageScaling, arg2: number, arg3: DamageEffects, arg4: DeathMessageType): DamageType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<DamageType>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamageType]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<DamageType>>;
}

/** JVM interface net.minecraft.world.damagesource.DamageTypes. */
export interface DamageTypesMembers {
}
export type DamageTypes = DamageTypesMembers;
export interface DamageTypesStatics {
  readonly ARROW: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly BAD_RESPAWN_POINT: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly CACTUS: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly CAMPFIRE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly CRAMMING: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly DRAGON_BREATH: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly DROWN: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly DRY_OUT: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly ENDER_PEARL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly EXPLOSION: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FALL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FALLING_ANVIL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FALLING_BLOCK: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FALLING_STALACTITE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FELL_OUT_OF_WORLD: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FIREBALL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FIREWORKS: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FLY_INTO_WALL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly FREEZE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly GENERIC: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly GENERIC_KILL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly HOT_FLOOR: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly INDIRECT_MAGIC: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly IN_FIRE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly IN_WALL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly LAVA: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly LIGHTNING_BOLT: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly MACE_SMASH: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly MAGIC: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly MOB_ATTACK: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly MOB_ATTACK_NO_AGGRO: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly MOB_PROJECTILE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly ON_FIRE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly OUTSIDE_BORDER: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly PLAYER_ATTACK: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly PLAYER_EXPLOSION: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly SONIC_BOOM: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly SPIT: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly STALAGMITE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly STARVE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly STING: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly SWEET_BERRY_BUSH: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly THORNS: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly THROWN: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly TRIDENT: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly UNATTRIBUTED_FIREBALL: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly WIND_CHARGE: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly WITHER: j_net_minecraft_resources.ResourceKey<DamageType>;
  readonly WITHER_SKULL: j_net_minecraft_resources.ResourceKey<DamageType>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<DamageType>): void;
}

/** Live JVM enum net.minecraft.world.damagesource.DeathMessageType; constants are host handles, not strings. */
export type DeathMessageType = JavaEnum<"net.minecraft.world.damagesource.DeathMessageType", "DEFAULT" | "FALL_VARIANTS" | "INTENTIONAL_GAME_DESIGN"> & DeathMessageTypeMembers;
export interface DeathMessageTypeMembers {
  getSerializedName(): string;
}
export interface DeathMessageTypeStatics {
  readonly DEFAULT: DeathMessageType;
  readonly FALL_VARIANTS: DeathMessageType;
  readonly INTENTIONAL_GAME_DESIGN: DeathMessageType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DeathMessageType]>;
  valueOf(arg0: string): DeathMessageType;
  values(): Array<DeathMessageType>;
}

/** JVM record net.minecraft.world.damagesource.FallLocation. */
export interface FallLocationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  languageKey(): string;
  toString(): string;
}
export type FallLocation = FallLocationMembers & JavaOpaque<"java.lang.Record">;
export interface FallLocationStatics {
  new(arg0: string): FallLocation;
  readonly GENERIC: FallLocation;
  readonly LADDER: FallLocation;
  readonly OTHER_CLIMBABLE: FallLocation;
  readonly SCAFFOLDING: FallLocation;
  readonly TWISTING_VINES: FallLocation;
  readonly VINES: FallLocation;
  readonly WATER: FallLocation;
  readonly WEEPING_VINES: FallLocation;
  blockToFallLocation(arg0: j_net_minecraft_world_level_block_state.BlockState): FallLocation;
  getCurrentFallLocation(arg0: j_net_minecraft_world_entity.LivingEntity): FallLocation | null;
}
