// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_behavior from './net.minecraft.world.entity.ai.behavior.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM class net.minecraft.world.entity.animal.armadillo.Armadillo. */
export interface ArmadilloMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal];
  actuallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): boolean;
  brushOffScute(): boolean;
  canFallInLove(): boolean;
  canStayRolledUp(): boolean;
  getAgeScale(): number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadYRot(): number;
  getState(): Armadillo_ArmadilloState;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isScared(): boolean;
  isScaredBy(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readonly peekAnimationState: j_net_minecraft_world_entity.AnimationState;
  rollOut(): void;
  readonly rollOutAnimationState: j_net_minecraft_world_entity.AnimationState;
  rollUp(): void;
  readonly rollUpAnimationState: j_net_minecraft_world_entity.AnimationState;
  shouldHideInShell(): boolean;
  shouldSwitchToScaredState(): boolean;
  switchToState(arg0: Armadillo_ArmadilloState): void;
  tick(): void;
}
export type Armadillo = ArmadilloMembers & j_net_minecraft_world_entity_animal.Animal;
export interface ArmadilloStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.Level): Armadillo;
  readonly BABY_SCALE: 0.6;
  readonly MAX_HEAD_ROTATION_EXTENT: 32.5;
  readonly SCARE_CHECK_INTERVAL: 80;
  checkArmadilloSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Armadillo>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** Live JVM enum net.minecraft.world.entity.animal.armadillo.Armadillo$ArmadilloState; constants are host handles, not strings. */
export type Armadillo_ArmadilloState = JavaEnum<"net.minecraft.world.entity.animal.armadillo.Armadillo$ArmadilloState", "IDLE" | "ROLLING" | "SCARED" | "UNROLLING"> & Armadillo_ArmadilloStateMembers;
export interface Armadillo_ArmadilloStateMembers {
  animationDuration(): number;
  getSerializedName(): string;
  isThreatened(): boolean;
  shouldHideInShell(arg0: bigint): boolean;
}
export interface Armadillo_ArmadilloStateStatics {
  readonly IDLE: Armadillo_ArmadilloState;
  readonly ROLLING: Armadillo_ArmadilloState;
  readonly SCARED: Armadillo_ArmadilloState;
  readonly UNROLLING: Armadillo_ArmadilloState;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Armadillo_ArmadilloState>;
  valueOf(arg0: string): Armadillo_ArmadilloState;
  values(): Array<Armadillo_ArmadilloState>;
}

/** JVM class net.minecraft.world.entity.animal.armadillo.ArmadilloAi. */
export interface ArmadilloAiMembers {
}
export type ArmadilloAi = ArmadilloAiMembers;
export interface ArmadilloAiStatics {
  new(): ArmadilloAi;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Armadillo>;
  getTemptations(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  updateActivity(arg0: Armadillo): void;
}

/** JVM class net.minecraft.world.entity.animal.armadillo.ArmadilloAi$ArmadilloBallUp. */
export interface ArmadilloAi_ArmadilloBallUpMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.Behavior<Armadillo>];
}
export type ArmadilloAi_ArmadilloBallUp = ArmadilloAi_ArmadilloBallUpMembers & j_net_minecraft_world_entity_ai_behavior.Behavior<Armadillo>;
export interface ArmadilloAi_ArmadilloBallUpStatics {
  new(): ArmadilloAi_ArmadilloBallUp;
}

/** JVM class net.minecraft.world.entity.animal.armadillo.ArmadilloAi$ArmadilloPanic. */
export interface ArmadilloAi_ArmadilloPanicMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_behavior.AnimalPanic<Armadillo>];
}
export type ArmadilloAi_ArmadilloPanic = ArmadilloAi_ArmadilloPanicMembers & j_net_minecraft_world_entity_ai_behavior.AnimalPanic<Armadillo>;
export interface ArmadilloAi_ArmadilloPanicStatics {
  new(arg0: number): ArmadilloAi_ArmadilloPanic;
}
