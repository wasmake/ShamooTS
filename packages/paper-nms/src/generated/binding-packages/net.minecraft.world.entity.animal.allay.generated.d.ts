// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_gameevent_vibrations from './net.minecraft.world.level.gameevent.vibrations.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.allay.Allay. */
export interface AllayMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.PathfinderMob, j_net_minecraft_world_entity_npc.InventoryCarrier, j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem];
  aiStep(): void;
  canDuplicate(): boolean;
  canPickUpLoot(): boolean;
  duplicateAllay(): Allay | null;
  duplicationCooldown: bigint;
  equipmentHasChanged(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  forceDancing: boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Allay>;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHoldingItemAnimationProgress(arg0: number): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInventory(): j_net_minecraft_world.SimpleContainer;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getSoundVolume(): number;
  getSpinningProgress(arg0: number): number;
  getVibrationData(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Data;
  getVibrationUser(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
  handleEntityEvent(arg0: number): void;
  hasItemInHand(): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isDancing(): boolean;
  isFlapping(): boolean;
  isSpinning(): boolean;
  jukeboxPos: j_net_minecraft_core.BlockPos | null;
  removeWhenFarAway(arg0: number): boolean;
  resetDuplicationCooldown(): void;
  setCanDuplicate(arg0: boolean): void;
  setDancing(arg0: boolean): void;
  setJukeboxPlaying(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  tick(): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  updateDynamicGameEventListener(arg0: JavaBiConsumer<j_net_minecraft_world_level_gameevent.DynamicGameEventListener<object>, j_net_minecraft_server_level.ServerLevel>): void;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type Allay = AllayMembers & j_net_minecraft_world_entity.PathfinderMob & j_net_minecraft_world_entity_npc.InventoryCarrier & j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem;
export interface AllayStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Allay>, arg1: j_net_minecraft_world_level.Level): Allay;
  readonly MAX_NOTEBLOCK_DISTANCE: 1024;
  readonly THROW_SOUND_PITCHES: JavaOpaque<"com.google.common.collect.ImmutableList", [number]>;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.allay.AllayAi. */
export interface AllayAiMembers {
}
export type AllayAi = AllayAiMembers;
export interface AllayAiStatics {
  new(): AllayAi;
  getLikedPlayer(arg0: j_net_minecraft_world_entity.LivingEntity): JavaOptional<j_net_minecraft_server_level.ServerPlayer>;
  hearNoteblock(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_core.BlockPos): void;
  updateActivity(arg0: Allay): void;
}
