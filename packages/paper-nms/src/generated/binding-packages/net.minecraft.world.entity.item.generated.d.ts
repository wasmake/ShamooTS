// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_portal from './net.minecraft.world.level.portal.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.world.entity.item.FallingBlockEntity. */
export interface FallingBlockEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  autoExpire: boolean;
  blockData: j_net_minecraft_nbt.CompoundTag | null;
  blockState: j_net_minecraft_world_level_block_state.BlockState;
  callOnBrokenAfterFall(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_core.BlockPos): void;
  cancelDrop: boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  disableDrop(): void;
  displayFireAnimation(): boolean;
  dropItem: boolean;
  fallDamageMax: number;
  fallDamagePerDistance: number;
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory): void;
  forceTickAfterTeleportToDuplicate: boolean;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDefaultGravity(): number;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getStartPos(): j_net_minecraft_core.BlockPos;
  getTypeName(): j_net_minecraft_network_chat.Component;
  hurtEntities: boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAttackable(): boolean;
  isPickable(): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  setHurtsEntities(arg0: number, arg1: number): void;
  setStartPos(arg0: j_net_minecraft_core.BlockPos): void;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): j_net_minecraft_world_entity.Entity | null;
  tick(): void;
  time: number;
}
export type FallingBlockEntity = FallingBlockEntityMembers & j_net_minecraft_world_entity.Entity;
export interface FallingBlockEntityStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<FallingBlockEntity>, arg1: j_net_minecraft_world_level.Level): FallingBlockEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level_block_state.BlockState): FallingBlockEntity;
  readonly DATA_START_POS: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.BlockPos>;
  fall(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): FallingBlockEntity;
}

/** JVM class net.minecraft.world.entity.item.ItemEntity. */
export interface ItemEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity, j_net_minecraft_world_entity.TraceableEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  age: number;
  readonly bobOffs: number;
  canMobPickup: boolean;
  copy(): ItemEntity;
  dampensVibrations(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  fireImmune(): boolean;
  frictionState: JavaOpaque<"net.kyori.adventure.util.TriState">;
  getAge(): number;
  getBlockPosBelowThatAffectsMyMovement(): j_net_minecraft_core.BlockPos;
  getDefaultGravity(): number;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getName(): j_net_minecraft_network_chat.Component;
  getOwner(): j_net_minecraft_world_entity.Entity | null;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getVisualRotationYInDegrees(): number;
  hasPickUpDelay(): boolean;
  health: number;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  ignoreExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  inactiveTick(): void;
  isAttackable(): boolean;
  makeFakeItem(): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  pickupDelay: number;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  restoreFrom(arg0: j_net_minecraft_world_entity.Entity): void;
  setDefaultPickUpDelay(): void;
  setExtendedLifetime(): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  setNeverPickUp(): void;
  setNoPickUpDelay(): void;
  setPickUpDelay(arg0: number): void;
  setTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setThrower(arg0: j_net_minecraft_world_entity.Entity): void;
  setUnlimitedLifetime(): void;
  shouldPlayLavaHurtSound(): boolean;
  target: JavaOpaque<"java.util.UUID"> | null;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): j_net_minecraft_world_entity.Entity | null;
  thrower: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.Entity> | null;
  tick(): void;
}
export type ItemEntity = ItemEntityMembers & j_net_minecraft_world_entity.Entity & j_net_minecraft_world_entity.TraceableEntity;
export interface ItemEntityStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ItemEntity>, arg1: j_net_minecraft_world_level.Level): ItemEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): ItemEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack, arg5: number, arg6: number, arg7: number): ItemEntity;
  readonly EYE_HEIGHT: 0.2125;
  areMergable(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  getSpin(arg0: number, arg1: number): number;
  merge(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): j_net_minecraft_world_item.ItemStack;
}

/** JVM class net.minecraft.world.entity.item.PrimedTnt. */
export interface PrimedTntMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity, j_net_minecraft_world_entity.TraceableEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  explosionPower: number;
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDefaultGravity(): number;
  getFuse(): number;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getOwner(): j_net_minecraft_world_entity.Entity | null;
  getOwner(): j_net_minecraft_world_entity.LivingEntity | null;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isIncendiary: boolean;
  isPickable(): boolean;
  isPushedByFluid(): boolean;
  owner: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity> | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  restoreFrom(arg0: j_net_minecraft_world_entity.Entity): void;
  setBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  setFuse(arg0: number): void;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): j_net_minecraft_world_entity.Entity | null;
  tick(): void;
}
export type PrimedTnt = PrimedTntMembers & j_net_minecraft_world_entity.Entity & j_net_minecraft_world_entity.TraceableEntity;
export interface PrimedTntStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<PrimedTnt>, arg1: j_net_minecraft_world_level.Level): PrimedTnt;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity.LivingEntity | null): PrimedTnt;
  readonly TAG_FUSE: "fuse";
}
