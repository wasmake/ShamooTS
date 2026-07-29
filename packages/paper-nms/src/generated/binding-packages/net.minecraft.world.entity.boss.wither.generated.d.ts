// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.boss.wither.WitherBoss. */
export interface WitherBossMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.Monster, j_net_minecraft_world_entity_monster.RangedAttackMob];
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: j_net_minecraft_world_entity.Entity | null): boolean;
  aiStep(): void;
  readonly bossEvent: j_net_minecraft_server_level.ServerBossEvent;
  canBeAffected(arg0: j_net_minecraft_world_effect.MobEffectInstance): boolean;
  canUsePortal(arg0: boolean): boolean;
  checkDespawn(): void;
  getAlternativeTarget(arg0: number): number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHeadXRots(): Array<number>;
  getHeadYRots(): Array<number>;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInvulnerableTicks(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isPowered(): boolean;
  makeInvulnerable(): void;
  makeStuckInBlock(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_phys.Vec3): void;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  setAlternativeTarget(arg0: number, arg1: number): void;
  setCanTravelThroughPortals(arg0: boolean): void;
  setCustomName(arg0: j_net_minecraft_network_chat.Component | null): void;
  setInvulnerableTicks(arg0: number): void;
  startSeenByPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  stopSeenByPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type WitherBoss = WitherBossMembers & j_net_minecraft_world_entity_monster.Monster & j_net_minecraft_world_entity_monster.RangedAttackMob;
export interface WitherBossStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<WitherBoss>, arg1: j_net_minecraft_world_level.Level): WitherBoss;
  canDestroy(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}
