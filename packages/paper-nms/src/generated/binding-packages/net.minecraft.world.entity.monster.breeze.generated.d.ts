// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.monster.breeze.Breeze. */
export interface BreezeMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.Monster];
  canAttackType(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  deflection(arg0: j_net_minecraft_world_entity_projectile.Projectile): j_net_minecraft_world_entity_projectile.ProjectileDeflection;
  emitGroundParticles(arg0: number): void;
  emitJumpTrailParticles(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Breeze>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getFiringYPosition(): number;
  getFluidJumpThreshold(): number;
  getHeadRotSpeed(): number;
  getHurtBy(): JavaOptional<j_net_minecraft_world_entity.LivingEntity>;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadYRot(): number;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  idle: j_net_minecraft_world_entity.AnimationState;
  inhale: j_net_minecraft_world_entity.AnimationState;
  isInvulnerableTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  longJump: j_net_minecraft_world_entity.AnimationState;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playAmbientSound(): void;
  playWhirlSound(): void;
  resetJumpTrail(): Breeze;
  shoot: j_net_minecraft_world_entity.AnimationState;
  slide: j_net_minecraft_world_entity.AnimationState;
  slideBack: j_net_minecraft_world_entity.AnimationState;
  tick(): void;
  withinInnerCircleRange(arg0: j_net_minecraft_world_phys.Vec3): boolean;
}
export type Breeze = BreezeMembers & j_net_minecraft_world_entity_monster.Monster;
export interface BreezeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_monster.Monster>, arg1: j_net_minecraft_world_level.Level): Breeze;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.breeze.BreezeAi. */
export interface BreezeAiMembers {
}
export type BreezeAi = BreezeAiMembers;
export interface BreezeAiStatics {
  new(): BreezeAi;
  readonly JUMP_CIRCLE_INNER_RADIUS: 4;
  readonly JUMP_CIRCLE_MIDDLE_RADIUS: 8;
  readonly JUMP_CIRCLE_OUTER_RADIUS: 24;
  readonly SPEED_MULTIPLIER_WHEN_SLIDING: 0.6;
}

/** JVM class net.minecraft.world.entity.monster.breeze.BreezeAi$SlideToTargetSink. */
export interface BreezeAi_SlideToTargetSinkMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.MoveToTargetSink];
}
export type BreezeAi_SlideToTargetSink = BreezeAi_SlideToTargetSinkMembers & j_net_minecraft_world_entity_ai_behavior.MoveToTargetSink;
export interface BreezeAi_SlideToTargetSinkStatics {
  new(arg0: number, arg1: number): BreezeAi_SlideToTargetSink;
}

/** JVM class net.minecraft.world.entity.monster.breeze.BreezeUtil. */
export interface BreezeUtilMembers {
}
export type BreezeUtil = BreezeUtilMembers;
export interface BreezeUtilStatics {
  new(): BreezeUtil;
  hasLineOfSight(arg0: Breeze, arg1: j_net_minecraft_world_phys.Vec3): boolean;
  randomPointBehindTarget(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_world_phys.Vec3;
}

/** JVM class net.minecraft.world.entity.monster.breeze.LongJump. */
export interface LongJumpMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>];
}
export type LongJump = LongJumpMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>;
export interface LongJumpStatics {
  new(): LongJump;
  canRun(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Breeze): boolean;
}

/** JVM class net.minecraft.world.entity.monster.breeze.Shoot. */
export interface ShootMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>];
}
export type Shoot = ShootMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>;
export interface ShootStatics {
  new(): Shoot;
}

/** JVM class net.minecraft.world.entity.monster.breeze.ShootWhenStuck. */
export interface ShootWhenStuckMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>];
}
export type ShootWhenStuck = ShootWhenStuckMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>;
export interface ShootWhenStuckStatics {
  new(): ShootWhenStuck;
}

/** JVM class net.minecraft.world.entity.monster.breeze.Slide. */
export interface SlideMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>];
}
export type Slide = SlideMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Breeze>;
export interface SlideStatics {
  new(): Slide;
}
