// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_boss from './net.minecraft.world.entity.boss.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon_phases from './net.minecraft.world.entity.boss.enderdragon.phases.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_dimension_end from './net.minecraft.world.level.dimension.end.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.boss.enderdragon.DragonFlightHistory. */
export interface DragonFlightHistoryMembers {
  copyFrom(arg0: DragonFlightHistory): void;
  get(arg0: number): DragonFlightHistory_Sample;
  get(arg0: number, arg1: number): DragonFlightHistory_Sample;
  record(arg0: number, arg1: number): void;
}
export type DragonFlightHistory = DragonFlightHistoryMembers;
export interface DragonFlightHistoryStatics {
  new(): DragonFlightHistory;
  readonly LENGTH: 64;
}

/** JVM record net.minecraft.world.entity.boss.enderdragon.DragonFlightHistory$Sample. */
export interface DragonFlightHistory_SampleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  y(): number;
  yRot(): number;
}
export type DragonFlightHistory_Sample = DragonFlightHistory_SampleMembers & JavaOpaque<"java.lang.Record">;
export interface DragonFlightHistory_SampleStatics {
  new(arg0: number, arg1: number): DragonFlightHistory_Sample;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.EndCrystal. */
export interface EndCrystalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  generatedByDragonFight: boolean;
  getBeamTarget(): j_net_minecraft_core.BlockPos | null;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isPickable(): boolean;
  kill(arg0: j_net_minecraft_server_level.ServerLevel): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setBeamTarget(arg0: j_net_minecraft_core.BlockPos | null): void | null;
  setShowBottom(arg0: boolean): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  showsBottom(): boolean;
  tick(): void;
  time: number;
}
export type EndCrystal = EndCrystalMembers & j_net_minecraft_world_entity.Entity;
export interface EndCrystalStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<EndCrystal>, arg1: j_net_minecraft_world_level.Level): EndCrystal;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number): EndCrystal;
}

/** JVM class net.minecraft.world.entity.boss.enderdragon.EnderDragon. */
export interface EnderDragonMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Mob, j_net_minecraft_world_entity_monster.Enemy];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: j_net_minecraft_world_entity.Entity | null): boolean | null;
  aiStep(): void;
  canAttack(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  canRide(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canUsePortal(arg0: boolean): boolean;
  checkDespawn(): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  dragonDeathTime: number;
  findClosestNode(): number;
  findClosestNode(arg0: number, arg1: number, arg2: number): number;
  findPath(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_pathfinder.Node | null): j_net_minecraft_world_level_pathfinder.Path | null;
  flapTime: number;
  readonly flightHistory: DragonFlightHistory;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDragonFight(): j_net_minecraft_world_level_dimension_end.EndDragonFight | null;
  getExpReward(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): number;
  getFightOrigin(): j_net_minecraft_core.BlockPos;
  getHeadLookVector(arg0: number): j_net_minecraft_world_phys.Vec3;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPhaseManager(): j_net_minecraft_world_entity_boss_enderdragon_phases.EnderDragonPhaseManager;
  getPodium(): j_net_minecraft_core.BlockPos;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSoundVolume(): number;
  getSubEntities(): Array<j_net_minecraft_world_entity_boss.EnderDragonPart>;
  readonly head: j_net_minecraft_world_entity_boss.EnderDragonPart;
  hurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_boss.EnderDragonPart, arg2: j_net_minecraft_world_damagesource.DamageSource, arg3: number): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  inWall: boolean;
  isFlapping(): boolean;
  isPickable(): boolean;
  kill(arg0: j_net_minecraft_server_level.ServerLevel): void;
  nearestCrystal: EndCrystal | null;
  oFlapTime: number;
  onCrystalDestroyed(arg0: j_net_minecraft_server_level.ServerLevel, arg1: EndCrystal, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_damagesource.DamageSource): void;
  onFlap(): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  reallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  sanitizeScale(arg0: number): number;
  setDragonFight(arg0: j_net_minecraft_world_level_dimension_end.EndDragonFight): void;
  setFightOrigin(arg0: j_net_minecraft_core.BlockPos): void;
  setPodium(arg0: j_net_minecraft_core.BlockPos | null): void | null;
  readonly subEntities: Array<j_net_minecraft_world_entity_boss.EnderDragonPart>;
  tickDeath(): void;
  yRotA: number;
}
export type EnderDragon = EnderDragonMembers & j_net_minecraft_world_entity.Mob & j_net_minecraft_world_entity_monster.Enemy;
export interface EnderDragonStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<EnderDragon>, arg1: j_net_minecraft_world_level.Level): EnderDragon;
  readonly DATA_PHASE: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}
