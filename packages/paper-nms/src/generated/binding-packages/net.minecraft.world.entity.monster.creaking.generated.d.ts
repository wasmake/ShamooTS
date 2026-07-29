// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM class net.minecraft.world.entity.monster.creaking.Creaking. */
export interface CreakingMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.Monster];
  activate(arg0: j_net_minecraft_world_entity_player.Player): void;
  aiStep(): void;
  readonly attackAnimationState: j_net_minecraft_world_entity.AnimationState;
  blameSourceForDamage(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_world_entity_player.Player;
  canMove(): boolean;
  canUsePortal(arg0: boolean): boolean;
  checkCanMove(): boolean;
  checkEyeBlink(): void;
  creakingDeathEffects(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  deactivate(): void;
  readonly deathAnimationState: j_net_minecraft_world_entity.AnimationState;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  fireImmune(): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Creaking>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHomePos(): j_net_minecraft_core.BlockPos | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getTarget(): j_net_minecraft_world_entity.LivingEntity | null;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  handleEntityEvent(arg0: number): void;
  hasGlowingEyes(): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  readonly invulnerabilityAnimationState: j_net_minecraft_world_entity.AnimationState;
  isActive(): boolean;
  isHeartBound(): boolean;
  isPushable(): boolean;
  isTearingDown(): boolean;
  knockback(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null, arg4: JavaOpaque<"io.papermc.paper.event.entity.EntityKnockbackEvent$Cause">): void;
  playAttackSound(): void;
  playerIsStuckInYou(): boolean;
  push(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null): void;
  setHomePos(arg0: j_net_minecraft_core.BlockPos): void;
  setIsActive(arg0: boolean): void;
  setTearingDown(): void;
  setTransient(arg0: j_net_minecraft_core.BlockPos): void;
  tearDown(): void;
  tick(): void;
}
export type Creaking = CreakingMembers & j_net_minecraft_world_entity_monster.Monster;
export interface CreakingStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Creaking>, arg1: j_net_minecraft_world_level.Level): Creaking;
  readonly ATTACK_INTERVAL: 40;
  readonly CREAKING_GRAY: 6250335;
  readonly CREAKING_ORANGE: 16545810;
  readonly INVULNERABILITY_ANIMATION_DURATION: 8;
  readonly SPEED_MULTIPLIER_WHEN_IDLING: 0.3;
  readonly TWITCH_DEATH_DURATION: 45;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.monster.creaking.CreakingAi. */
export interface CreakingAiMembers {
}
export type CreakingAi = CreakingAiMembers;
export interface CreakingAiStatics {
  new(): CreakingAi;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Creaking>;
  makeBrain(arg0: Creaking, arg1: j_net_minecraft_world_entity_ai.Brain<Creaking>): j_net_minecraft_world_entity_ai.Brain<Creaking>;
  updateActivity(arg0: Creaking): void;
}
