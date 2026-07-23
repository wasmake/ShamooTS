// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_navigation from './net.minecraft.world.entity.ai.navigation.generated.js';
import type * as j_net_minecraft_world_entity_ai_sensing from './net.minecraft.world.entity.ai.sensing.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_gameevent_vibrations from './net.minecraft.world.level.gameevent.vibrations.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.allay.Allay. */
export interface AllayMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.PathfinderMob, j_net_minecraft_world_entity_npc.InventoryCarrier, j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<Allay>;
  canDispenserEquipIntoSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  canDuplicate(): boolean;
  canPickUpLoot(): boolean;
  checkFallDamage(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos): void;
  considersEntityAsAlly(arg0: j_net_minecraft_world_entity.Entity): boolean;
  createNavigation(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  dropEquipment(arg0: j_net_minecraft_server_level.ServerLevel): void;
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
  getPickupReach(): j_net_minecraft_core.Vec3i;
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
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  pickUpItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_item.ItemEntity): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  removeWhenFarAway(arg0: number): boolean;
  resetDuplicationCooldown(): void;
  sendDebugPackets(): void;
  setCanDuplicate(arg0: boolean): void;
  setDancing(arg0: boolean): void;
  setJukeboxPlaying(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  shouldStayCloseToLeashHolder(): boolean;
  tick(): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  updateDynamicGameEventListener(arg0: JavaBiConsumer<j_net_minecraft_world_level_gameevent.DynamicGameEventListener<object>, j_net_minecraft_server_level.ServerLevel>): void;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}
export type Allay = AllayMembers & j_net_minecraft_world_entity.PathfinderMob & j_net_minecraft_world_entity_npc.InventoryCarrier & j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem;
export interface AllayStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Allay>, arg1: j_net_minecraft_world_level.Level): Allay;
  readonly MAX_NOTEBLOCK_DISTANCE: 1024;
  readonly MEMORY_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>]>;
  readonly SENSOR_TYPES: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity_ai_sensing.SensorType<j_net_minecraft_world_entity_ai_sensing.Sensor<Allay>>]>;
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
  makeBrain(arg0: j_net_minecraft_world_entity_ai.Brain<Allay>): j_net_minecraft_world_entity_ai.Brain<object>;
  updateActivity(arg0: Allay): void;
}
