// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.effect.InstantenousMobEffect. */
export interface InstantenousMobEffectMembers {
  readonly __javaSupertypes?: readonly [MobEffect];
  isInstantenous(): boolean;
  shouldApplyEffectTickThisTick(arg0: number, arg1: number): boolean;
}
export type InstantenousMobEffect = InstantenousMobEffectMembers & MobEffect;
export interface InstantenousMobEffectStatics {
  new(arg0: MobEffectCategory, arg1: number): InstantenousMobEffect;
}

/** JVM class net.minecraft.world.effect.MobEffect. */
export interface MobEffectMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_flag.FeatureElement];
  addAttributeModifier(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_resources.ResourceLocation, arg2: number, arg3: j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation): MobEffect;
  addAttributeModifiers(arg0: j_net_minecraft_world_entity_ai_attributes.AttributeMap, arg1: number): void;
  applyEffectTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): boolean;
  applyInstantenousEffect(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_entity.Entity | null, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: number, arg5: number): void;
  readonly attributeModifiers: JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, MobEffect_AttributeTemplate>;
  createModifiers(arg0: number, arg1: JavaBiConsumer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): void;
  createParticleOptions(arg0: MobEffectInstance): j_net_minecraft_core_particles.ParticleOptions;
  getBlendInDurationTicks(): number;
  getBlendOutAdvanceTicks(): number;
  getBlendOutDurationTicks(): number;
  getCategory(): MobEffectCategory;
  getColor(): number;
  getDescriptionId(): string;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  isBeneficial(): boolean;
  isInstantenous(): boolean;
  onEffectAdded(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  onEffectStarted(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  onMobHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number, arg3: j_net_minecraft_world_damagesource.DamageSource, arg4: number): void;
  onMobRemoved(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number, arg3: j_net_minecraft_world_entity.Entity_RemovalReason): void;
  removeAttributeModifiers(arg0: j_net_minecraft_world_entity_ai_attributes.AttributeMap): void;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  requiredFeatures(...arg0: Array<j_net_minecraft_world_flag.FeatureFlag>): MobEffect;
  setBlendDuration(arg0: number): MobEffect;
  setBlendDuration(arg0: number, arg1: number, arg2: number): MobEffect;
  shouldApplyEffectTickThisTick(arg0: number, arg1: number): boolean;
  withSoundOnAdded(arg0: j_net_minecraft_sounds.SoundEvent): MobEffect;
}
export type MobEffect = MobEffectMembers & j_net_minecraft_world_flag.FeatureElement;
export interface MobEffectStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<MobEffect>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<MobEffect>>;
}

/** JVM record net.minecraft.world.effect.MobEffect$AttributeTemplate. */
export interface MobEffect_AttributeTemplateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  amount(): number;
  create(arg0: number): j_net_minecraft_world_entity_ai_attributes.AttributeModifier;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  operation(): j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation;
  toString(): string;
}
export type MobEffect_AttributeTemplate = MobEffect_AttributeTemplateMembers & JavaOpaque<"java.lang.Record">;
export interface MobEffect_AttributeTemplateStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number, arg2: j_net_minecraft_world_entity_ai_attributes.AttributeModifier_Operation): MobEffect_AttributeTemplate;
}

/** Live JVM enum net.minecraft.world.effect.MobEffectCategory; constants are host handles, not strings. */
export type MobEffectCategory = JavaEnum<"net.minecraft.world.effect.MobEffectCategory", "BENEFICIAL" | "HARMFUL" | "NEUTRAL"> & MobEffectCategoryMembers;
export interface MobEffectCategoryMembers {
  getTooltipFormatting(): j_net_minecraft.ChatFormatting;
}
export interface MobEffectCategoryStatics {
  readonly BENEFICIAL: MobEffectCategory;
  readonly HARMFUL: MobEffectCategory;
  readonly NEUTRAL: MobEffectCategory;
  valueOf(arg0: string): MobEffectCategory;
  values(): Array<MobEffectCategory>;
}

/** JVM class net.minecraft.world.effect.MobEffectInstance. */
export interface MobEffectInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [MobEffectInstance]>];
  compareTo(arg0: MobEffectInstance): number;
  copyBlendState(arg0: MobEffectInstance): void;
  endsWithin(arg0: number): boolean;
  equals(arg0: object): boolean;
  getAmplifier(): number;
  getBlendFactor(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): number;
  getDescriptionId(): string;
  getDuration(): number;
  getEffect(): j_net_minecraft_core.Holder<MobEffect>;
  getParticleOptions(): j_net_minecraft_core_particles.ParticleOptions;
  hashCode(): number;
  hiddenEffect: MobEffectInstance | null;
  is(arg0: j_net_minecraft_core.Holder<MobEffect>): boolean;
  isAmbient(): boolean;
  isInfiniteDuration(): boolean;
  isVisible(): boolean;
  mapDuration(arg0: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2IntFunction">): number;
  onEffectAdded(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  onEffectStarted(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  onMobHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: number): void;
  onMobRemoved(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.Entity_RemovalReason): void;
  showIcon(): boolean;
  skipBlending(): void;
  tickClient(): void;
  tickServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: JavaRunnable): boolean;
  toString(): string;
  update(arg0: MobEffectInstance): boolean;
  withScaledDuration(arg0: number): MobEffectInstance;
}
export type MobEffectInstance = MobEffectInstanceMembers;
export interface MobEffectInstanceStatics {
  new(arg0: j_net_minecraft_core.Holder<MobEffect>): MobEffectInstance;
  new(arg0: j_net_minecraft_core.Holder<MobEffect>, arg1: number): MobEffectInstance;
  new(arg0: j_net_minecraft_core.Holder<MobEffect>, arg1: number, arg2: number): MobEffectInstance;
  new(arg0: j_net_minecraft_core.Holder<MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean): MobEffectInstance;
  new(arg0: j_net_minecraft_core.Holder<MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): MobEffectInstance;
  new(arg0: j_net_minecraft_core.Holder<MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: MobEffectInstance | null): MobEffectInstance;
  new(arg0: MobEffectInstance): MobEffectInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MobEffectInstance]>;
  readonly INFINITE_DURATION: -1;
  readonly MAX_AMPLIFIER: 255;
  readonly MIN_AMPLIFIER: 0;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, MobEffectInstance>;
}

/** JVM class net.minecraft.world.effect.MobEffects. */
export interface MobEffectsMembers {
}
export type MobEffects = MobEffectsMembers;
export interface MobEffectsStatics {
  new(): MobEffects;
  readonly ABSORPTION: j_net_minecraft_core.Holder<MobEffect>;
  readonly BAD_OMEN: j_net_minecraft_core.Holder<MobEffect>;
  readonly BLINDNESS: j_net_minecraft_core.Holder<MobEffect>;
  readonly CONDUIT_POWER: j_net_minecraft_core.Holder<MobEffect>;
  readonly DARKNESS: j_net_minecraft_core.Holder<MobEffect>;
  readonly DOLPHINS_GRACE: j_net_minecraft_core.Holder<MobEffect>;
  readonly FIRE_RESISTANCE: j_net_minecraft_core.Holder<MobEffect>;
  readonly GLOWING: j_net_minecraft_core.Holder<MobEffect>;
  readonly HASTE: j_net_minecraft_core.Holder<MobEffect>;
  readonly HEALTH_BOOST: j_net_minecraft_core.Holder<MobEffect>;
  readonly HERO_OF_THE_VILLAGE: j_net_minecraft_core.Holder<MobEffect>;
  readonly HUNGER: j_net_minecraft_core.Holder<MobEffect>;
  readonly INFESTED: j_net_minecraft_core.Holder<MobEffect>;
  readonly INSTANT_DAMAGE: j_net_minecraft_core.Holder<MobEffect>;
  readonly INSTANT_HEALTH: j_net_minecraft_core.Holder<MobEffect>;
  readonly INVISIBILITY: j_net_minecraft_core.Holder<MobEffect>;
  readonly JUMP_BOOST: j_net_minecraft_core.Holder<MobEffect>;
  readonly LEVITATION: j_net_minecraft_core.Holder<MobEffect>;
  readonly LUCK: j_net_minecraft_core.Holder<MobEffect>;
  readonly MINING_FATIGUE: j_net_minecraft_core.Holder<MobEffect>;
  readonly NAUSEA: j_net_minecraft_core.Holder<MobEffect>;
  readonly NIGHT_VISION: j_net_minecraft_core.Holder<MobEffect>;
  readonly OOZING: j_net_minecraft_core.Holder<MobEffect>;
  readonly POISON: j_net_minecraft_core.Holder<MobEffect>;
  readonly RAID_OMEN: j_net_minecraft_core.Holder<MobEffect>;
  readonly REGENERATION: j_net_minecraft_core.Holder<MobEffect>;
  readonly RESISTANCE: j_net_minecraft_core.Holder<MobEffect>;
  readonly SATURATION: j_net_minecraft_core.Holder<MobEffect>;
  readonly SLOWNESS: j_net_minecraft_core.Holder<MobEffect>;
  readonly SLOW_FALLING: j_net_minecraft_core.Holder<MobEffect>;
  readonly SPEED: j_net_minecraft_core.Holder<MobEffect>;
  readonly STRENGTH: j_net_minecraft_core.Holder<MobEffect>;
  readonly TRIAL_OMEN: j_net_minecraft_core.Holder<MobEffect>;
  readonly UNLUCK: j_net_minecraft_core.Holder<MobEffect>;
  readonly WATER_BREATHING: j_net_minecraft_core.Holder<MobEffect>;
  readonly WEAKNESS: j_net_minecraft_core.Holder<MobEffect>;
  readonly WEAVING: j_net_minecraft_core.Holder<MobEffect>;
  readonly WIND_CHARGED: j_net_minecraft_core.Holder<MobEffect>;
  readonly WITHER: j_net_minecraft_core.Holder<MobEffect>;
  bootstrap(arg0: j_net_minecraft_core.Registry<MobEffect>): j_net_minecraft_core.Holder<MobEffect>;
}

/** JVM class net.minecraft.world.effect.MobEffectUtil. */
export interface MobEffectUtilMembers {
}
export type MobEffectUtil = MobEffectUtilMembers;
export interface MobEffectUtilStatics {
  new(): MobEffectUtil;
  addEffectToPlayersAround(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: MobEffectInstance, arg5: number): JavaList<j_net_minecraft_server_level.ServerPlayer>;
  addEffectToPlayersAround(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: MobEffectInstance, arg5: number, arg6: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): JavaList<j_net_minecraft_server_level.ServerPlayer>;
  addEffectToPlayersAround(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: MobEffectInstance, arg5: number, arg6: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">, arg7: JavaPredicate<j_net_minecraft_server_level.ServerPlayer> | null): JavaList<j_net_minecraft_server_level.ServerPlayer>;
  formatDuration(arg0: MobEffectInstance, arg1: number, arg2: number): j_net_minecraft_network_chat.Component;
  getDigSpeedAmplification(arg0: j_net_minecraft_world_entity.LivingEntity): number;
  hasDigSpeed(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  hasWaterBreathing(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
}

/** JVM interface net.minecraft.world.effect.OozingMobEffect$NearbySlimes. */
export interface OozingMobEffect_NearbySlimesMembers {
  count(arg0: number): number;
}
export type OozingMobEffect_NearbySlimes = OozingMobEffect_NearbySlimesMembers;
export interface OozingMobEffect_NearbySlimesStatics {
  closeTo(arg0: j_net_minecraft_world_entity.LivingEntity): OozingMobEffect_NearbySlimes;
}

/** JVM class net.minecraft.world.effect.PoisonMobEffect. */
export interface PoisonMobEffectMembers {
  readonly __javaSupertypes?: readonly [MobEffect];
  applyEffectTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): boolean;
  shouldApplyEffectTickThisTick(arg0: number, arg1: number): boolean;
}
export type PoisonMobEffect = PoisonMobEffectMembers & MobEffect;
export interface PoisonMobEffectStatics {
  readonly DAMAGE_INTERVAL: 25;
}

/** JVM class net.minecraft.world.effect.WitherMobEffect. */
export interface WitherMobEffectMembers {
  readonly __javaSupertypes?: readonly [MobEffect];
  applyEffectTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): boolean;
  shouldApplyEffectTickThisTick(arg0: number, arg1: number): boolean;
}
export type WitherMobEffect = WitherMobEffectMembers & MobEffect;
export interface WitherMobEffectStatics {
  readonly DAMAGE_INTERVAL: 40;
}
