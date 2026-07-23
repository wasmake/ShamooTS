// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_portal from './net.minecraft.world.level.portal.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.entity.projectile.AbstractArrow. */
export interface AbstractArrowMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  baseDamage: number;
  canHitEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  doKnockback(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  doPostHurtEffects(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  findHitEntity(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.EntityHitResult | null;
  firedFromWeapon: j_net_minecraft_world_item.ItemStack | null;
  getDefaultGravity(): number;
  getDefaultHitGroundSoundEvent(): j_net_minecraft_sounds.SoundEvent;
  getDefaultPickupItem(): j_net_minecraft_world_item.ItemStack;
  getHitGroundSoundEvent(): j_net_minecraft_sounds.SoundEvent;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getPickupItem(): j_net_minecraft_world_item.ItemStack;
  getPickupItemStackOrigin(): j_net_minecraft_world_item.ItemStack;
  getPierceLevel(): number;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getWaterInertia(): number;
  getWeaponItem(): j_net_minecraft_world_item.ItemStack;
  hitBlockEnchantmentEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.BlockHitResult, arg2: j_net_minecraft_world_item.ItemStack): void;
  inGroundTime: number;
  isAttackable(): boolean;
  isCritArrow(): boolean;
  isInGround(): boolean;
  isNoPhysics(): boolean;
  isPickable(): boolean;
  isPushedByFluid(): boolean;
  lerpMotion(arg0: number, arg1: number, arg2: number): void;
  life: number;
  move(arg0: j_net_minecraft_world_entity.MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  onAboveBubbleColumn(arg0: boolean, arg1: j_net_minecraft_core.BlockPos): void;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  onInsideBubbleColumn(arg0: boolean): void;
  onItemBreak(arg0: j_net_minecraft_world_item.Item): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  pickup: AbstractArrow_Pickup;
  pickupItemStack: j_net_minecraft_world_item.ItemStack;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  preHitTargetOrDeflectSelf(arg0: j_net_minecraft_world_phys.HitResult): ProjectileDeflection;
  push(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null): void | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setBaseDamage(arg0: number): void;
  setBaseDamageFromMob(arg0: number): void;
  setCritArrow(arg0: boolean): void;
  setInGround(arg0: boolean): void;
  setNoPhysics(arg0: boolean): void;
  setOwner(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  setOwner(arg0: j_net_minecraft_world_entity.Entity | null, arg1: boolean): void | null;
  setPickupItemStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  setPierceLevel(arg0: number): void;
  setSoundEvent(arg0: j_net_minecraft_sounds.SoundEvent): void;
  shakeTime: number;
  shoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  shouldBounceOnWorldBorder(): boolean;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  tick(): void;
  tickDespawn(): void;
  tryPickup(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type AbstractArrow = AbstractArrowMembers & Projectile;
export interface AbstractArrowStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractArrow>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level.Level, arg5: j_net_minecraft_world_item.ItemStack, arg6: j_net_minecraft_world_item.ItemStack | null): AbstractArrow;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractArrow>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level.Level, arg5: j_net_minecraft_world_item.ItemStack, arg6: j_net_minecraft_world_item.ItemStack | null, arg7: j_net_minecraft_world_entity.LivingEntity | null): AbstractArrow;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractArrow>, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_world_item.ItemStack, arg4: j_net_minecraft_world_item.ItemStack | null): AbstractArrow;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractArrow>, arg1: j_net_minecraft_world_level.Level): AbstractArrow;
}

/** Live JVM enum net.minecraft.world.entity.projectile.AbstractArrow$Pickup; constants are host handles, not strings. */
export type AbstractArrow_Pickup = JavaEnum<"net.minecraft.world.entity.projectile.AbstractArrow$Pickup", "ALLOWED" | "CREATIVE_ONLY" | "DISALLOWED"> & AbstractArrow_PickupMembers;
export interface AbstractArrow_PickupMembers {
}
export interface AbstractArrow_PickupStatics {
  readonly ALLOWED: AbstractArrow_Pickup;
  readonly CREATIVE_ONLY: AbstractArrow_Pickup;
  readonly DISALLOWED: AbstractArrow_Pickup;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AbstractArrow_Pickup]>;
  byOrdinal(arg0: number): AbstractArrow_Pickup;
  valueOf(arg0: string): AbstractArrow_Pickup;
  values(): Array<AbstractArrow_Pickup>;
}

/** JVM abstract net.minecraft.world.entity.projectile.AbstractHurtingProjectile. */
export interface AbstractHurtingProjectileMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  accelerationPower: number;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  assignDirectionalMovement(arg0: j_net_minecraft_world_phys.Vec3, arg1: number): void;
  bukkitYield: number;
  canHitEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getClipType(): j_net_minecraft_world_level.ClipContext_Block;
  getInertia(): number;
  getLightLevelDependentMagicValue(): number;
  getLiquidInertia(): number;
  getTrailParticle(): j_net_minecraft_core_particles.ParticleOptions | null;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isIncendiary: boolean;
  onDeflection(arg0: j_net_minecraft_world_entity.Entity | null, arg1: boolean): void | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  shouldBurn(): boolean;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  tick(): void;
}
export type AbstractHurtingProjectile = AbstractHurtingProjectileMembers & Projectile;
export interface AbstractHurtingProjectileStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractHurtingProjectile>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level.Level): AbstractHurtingProjectile;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractHurtingProjectile>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_phys.Vec3, arg5: j_net_minecraft_world_level.Level): AbstractHurtingProjectile;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractHurtingProjectile>, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_level.Level): AbstractHurtingProjectile;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractHurtingProjectile>, arg1: j_net_minecraft_world_level.Level): AbstractHurtingProjectile;
  readonly DEFLECTION_SCALE: 0.5;
  readonly INITAL_ACCELERATION_POWER: 0.1;
}

/** JVM abstract net.minecraft.world.entity.projectile.AbstractThrownPotion. */
export interface AbstractThrownPotionMembers {
  readonly __javaSupertypes?: readonly [ThrowableItemProjectile];
  calculateHorizontalHurtKnockbackDirection(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_damagesource.DamageSource): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleDoubleImmutablePair">;
  getDefaultGravity(): number;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitAsPotion(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.HitResult): boolean;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  splash(arg0: j_net_minecraft_world_phys.HitResult): void;
}
export type AbstractThrownPotion = AbstractThrownPotionMembers & ThrowableItemProjectile;
export interface AbstractThrownPotionStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractThrownPotion>, arg1: j_net_minecraft_world_level.Level): AbstractThrownPotion;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractThrownPotion>, arg1: j_net_minecraft_world_level.Level, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_world_item.ItemStack): AbstractThrownPotion;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractThrownPotion>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world_item.ItemStack): AbstractThrownPotion;
  readonly SPLASH_RANGE: 4;
  readonly SPLASH_RANGE_SQ: 16;
  readonly WATER_SENSITIVE_OR_ON_FIRE: JavaPredicate<j_net_minecraft_world_entity.LivingEntity>;
}

/** JVM class net.minecraft.world.entity.projectile.Arrow. */
export interface ArrowMembers {
  readonly __javaSupertypes?: readonly [AbstractArrow];
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  doPostHurtEffects(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  getColor(): number;
  getDefaultPickupItem(): j_net_minecraft_world_item.ItemStack;
  getPotionContents(): j_net_minecraft_world_item_alchemy.PotionContents;
  handleEntityEvent(arg0: number): void;
  inactiveTick(): void;
  setPickupItemStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  setPotionContents(arg0: j_net_minecraft_world_item_alchemy.PotionContents): void;
  tick(): void;
  updateColor(): void;
}
export type Arrow = ArrowMembers & AbstractArrow;
export interface ArrowStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Arrow>, arg1: j_net_minecraft_world_level.Level): Arrow;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack, arg5: j_net_minecraft_world_item.ItemStack | null): Arrow;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_item.ItemStack | null): Arrow;
  readonly NO_EFFECT_COLOR: -1;
}

/** JVM class net.minecraft.world.entity.projectile.DragonFireball. */
export interface DragonFireballMembers {
  readonly __javaSupertypes?: readonly [AbstractHurtingProjectile];
  getTrailParticle(): j_net_minecraft_core_particles.ParticleOptions;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  shouldBurn(): boolean;
}
export type DragonFireball = DragonFireballMembers & AbstractHurtingProjectile;
export interface DragonFireballStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<DragonFireball>, arg1: j_net_minecraft_world_level.Level): DragonFireball;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.Vec3): DragonFireball;
  readonly SPLASH_RANGE: 4;
}

/** JVM class net.minecraft.world.entity.projectile.EvokerFangs. */
export interface EvokerFangsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity, j_net_minecraft_world_entity.TraceableEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getAnimationProgress(arg0: number): number;
  getOwner(): j_net_minecraft_world_entity.Entity | null;
  getOwner(): j_net_minecraft_world_entity.LivingEntity | null;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setOwner(arg0: j_net_minecraft_world_entity.LivingEntity | null): void | null;
  tick(): void;
  warmupDelayTicks: number;
}
export type EvokerFangs = EvokerFangsMembers & j_net_minecraft_world_entity.Entity & j_net_minecraft_world_entity.TraceableEntity;
export interface EvokerFangsStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<EvokerFangs>, arg1: j_net_minecraft_world_level.Level): EvokerFangs;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_world_entity.LivingEntity): EvokerFangs;
  readonly ATTACK_DURATION: 20;
  readonly ATTACK_TRIGGER_TICKS: 14;
  readonly LIFE_OFFSET: 2;
}

/** JVM class net.minecraft.world.entity.projectile.EyeOfEnder. */
export interface EyeOfEnderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity, ItemSupplier];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getLightLevelDependentMagicValue(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAttackable(): boolean;
  life: number;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  signalTo(arg0: j_net_minecraft_world_phys.Vec3): void;
  signalTo(arg0: j_net_minecraft_world_phys.Vec3, arg1: boolean): void;
  surviveAfterDeath: boolean;
  target: j_net_minecraft_world_phys.Vec3 | null;
  tick(): void;
}
export type EyeOfEnder = EyeOfEnderMembers & j_net_minecraft_world_entity.Entity & ItemSupplier;
export interface EyeOfEnderStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<EyeOfEnder>, arg1: j_net_minecraft_world_level.Level): EyeOfEnder;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number): EyeOfEnder;
}

/** JVM abstract net.minecraft.world.entity.projectile.Fireball. */
export interface FireballMembers {
  readonly __javaSupertypes?: readonly [AbstractHurtingProjectile, ItemSupplier];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  playEntityOnFireExtinguishedSound(): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
}
export type Fireball = FireballMembers & AbstractHurtingProjectile & ItemSupplier;
export interface FireballStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Fireball>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_phys.Vec3, arg5: j_net_minecraft_world_level.Level): Fireball;
  new(arg0: j_net_minecraft_world_entity.EntityType<Fireball>, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_level.Level): Fireball;
  new(arg0: j_net_minecraft_world_entity.EntityType<Fireball>, arg1: j_net_minecraft_world_level.Level): Fireball;
}

/** JVM class net.minecraft.world.entity.projectile.FireworkRocketEntity. */
export interface FireworkRocketEntityMembers {
  readonly __javaSupertypes?: readonly [Projectile, ItemSupplier];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  attachedToEntity: j_net_minecraft_world_entity.LivingEntity | null;
  calculateHorizontalHurtKnockbackDirection(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_damagesource.DamageSource): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleDoubleImmutablePair">;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getItem(): j_net_minecraft_world_item.ItemStack;
  handleEntityEvent(arg0: number): void;
  inactiveTick(): void;
  isAttackable(): boolean;
  isShotAtAngle(): boolean;
  life: number;
  lifetime: number;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  shouldRender(arg0: number, arg1: number, arg2: number): boolean;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  spawningEntity: JavaOpaque<"java.util.UUID"> | null;
  tick(): void;
}
export type FireworkRocketEntity = FireworkRocketEntityMembers & Projectile & ItemSupplier;
export interface FireworkRocketEntityStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<FireworkRocketEntity>, arg1: j_net_minecraft_world_level.Level): FireworkRocketEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): FireworkRocketEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Entity | null, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_world_item.ItemStack): FireworkRocketEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: number, arg4: number, arg5: boolean): FireworkRocketEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.Entity, arg3: number, arg4: number, arg5: number, arg6: boolean): FireworkRocketEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity): FireworkRocketEntity;
  readonly DATA_ATTACHED_TO_TARGET: j_net_minecraft_network_syncher.EntityDataAccessor<JavaOptionalNumber>;
  readonly DATA_ID_FIREWORKS_ITEM: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_world_item.ItemStack>;
  readonly DATA_SHOT_AT_ANGLE: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
  getDefaultItem(): j_net_minecraft_world_item.ItemStack;
}

/** JVM class net.minecraft.world.entity.projectile.FishingHook. */
export interface FishingHookMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyLure: boolean;
  calculateOpenWater(arg0: j_net_minecraft_core.BlockPos): boolean;
  canHitEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canUsePortal(arg0: boolean): boolean;
  currentState: FishingHook_FishHookState;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  fishAngle: number;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getHookedIn(): j_net_minecraft_world_entity.Entity | null;
  getInterpolation(): j_net_minecraft_world_entity.InterpolationHandler;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getPlayerOwner(): j_net_minecraft_world_entity_player.Player | null;
  handleEntityEvent(arg0: number): void;
  hookedIn: j_net_minecraft_world_entity.Entity | null;
  isOpenWaterFishing(): boolean;
  maxLureAngle: number;
  maxLureTime: number;
  maxWaitTime: number;
  minLureAngle: number;
  minLureTime: number;
  minWaitTime: number;
  onClientRemoval(): void;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  outOfWaterTime: number;
  pullEntity(arg0: j_net_minecraft_world_entity.Entity): void;
  rainInfluenced: boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  remove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  resetTimeUntilLured(): void;
  retrieve(arg0: j_net_minecraft_world_item.ItemStack): number;
  retrieve(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world.InteractionHand): number;
  setHookedEntity(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  setOwner(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  shouldBounceOnWorldBorder(): boolean;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  skyInfluenced: boolean;
  tick(): void;
  timeUntilHooked: number;
  timeUntilLured: number;
}
export type FishingHook = FishingHookMembers & Projectile;
export interface FishingHookStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<FishingHook>, arg1: j_net_minecraft_world_level.Level): FishingHook;
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.Level, arg2: number, arg3: number): FishingHook;
  readonly DATA_HOOKED_ENTITY: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
}

/** Live JVM enum net.minecraft.world.entity.projectile.FishingHook$FishHookState; constants are host handles, not strings. */
export type FishingHook_FishHookState = JavaEnum<"net.minecraft.world.entity.projectile.FishingHook$FishHookState", "BOBBING" | "FLYING" | "HOOKED_IN_ENTITY"> & FishingHook_FishHookStateMembers;
export interface FishingHook_FishHookStateMembers {
}
export interface FishingHook_FishHookStateStatics {
  readonly BOBBING: FishingHook_FishHookState;
  readonly FLYING: FishingHook_FishHookState;
  readonly HOOKED_IN_ENTITY: FishingHook_FishHookState;
  valueOf(arg0: string): FishingHook_FishHookState;
  values(): Array<FishingHook_FishHookState>;
}

/** JVM interface net.minecraft.world.entity.projectile.ItemSupplier. */
export interface ItemSupplierMembers {
  getItem(): j_net_minecraft_world_item.ItemStack;
}
export type ItemSupplier = ItemSupplierMembers;
export interface ItemSupplierStatics {
}

/** JVM class net.minecraft.world.entity.projectile.LargeFireball. */
export interface LargeFireballMembers {
  readonly __javaSupertypes?: readonly [Fireball];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  explosionPower: number;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
}
export type LargeFireball = LargeFireballMembers & Fireball;
export interface LargeFireballStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<LargeFireball>, arg1: j_net_minecraft_world_level.Level): LargeFireball;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): LargeFireball;
}

/** JVM class net.minecraft.world.entity.projectile.LlamaSpit. */
export interface LlamaSpitMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getDefaultGravity(): number;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  tick(): void;
}
export type LlamaSpit = LlamaSpitMembers & Projectile;
export interface LlamaSpitStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<LlamaSpit>, arg1: j_net_minecraft_world_level.Level): LlamaSpit;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_animal_horse.Llama): LlamaSpit;
}

/** JVM abstract net.minecraft.world.entity.projectile.Projectile. */
export interface ProjectileMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity, j_net_minecraft_world_entity.TraceableEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyOnProjectileSpawned(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): void;
  calculateHorizontalHurtKnockbackDirection(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_damagesource.DamageSource): JavaOpaque<"it.unimi.dsi.fastutil.doubles.DoubleDoubleImmutablePair">;
  canHitEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canHitEntityPublic(arg0: j_net_minecraft_world_entity.Entity): boolean;
  deflect(arg0: ProjectileDeflection, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_entity.Entity | null, arg3: boolean): boolean | null;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getDimensionChangingDelay(): number;
  getEffectSource(): j_net_minecraft_world_entity.Entity;
  getMovementToShoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): j_net_minecraft_world_phys.Vec3;
  getOwner(): j_net_minecraft_world_entity.Entity | null;
  getPickRadius(): number;
  hasBeenShot: boolean;
  hitCancelled: boolean;
  hitTargetOrDeflectSelf(arg0: j_net_minecraft_world_phys.HitResult): ProjectileDeflection;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isPickable(): boolean;
  leftOwner: boolean;
  mayBreak(arg0: j_net_minecraft_server_level.ServerLevel): boolean;
  mayInteract(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  onAboveBubbleColumn(arg0: boolean, arg1: j_net_minecraft_core.BlockPos): void;
  onDeflection(arg0: j_net_minecraft_world_entity.Entity | null, arg1: boolean): void | null;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  onInsideBubbleColumn(arg0: boolean): void;
  onItemBreak(arg0: j_net_minecraft_world_item.Item): void;
  ownedBy(arg0: j_net_minecraft_world_entity.Entity): boolean;
  owner: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.Entity> | null;
  preHitTargetOrDeflectSelf(arg0: j_net_minecraft_world_phys.HitResult): ProjectileDeflection;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  refreshProjectileSource(arg0: boolean): void;
  restoreFrom(arg0: j_net_minecraft_world_entity.Entity): void;
  setOwner(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  setOwner(arg0: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.Entity> | null): void | null;
  shoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  shootFromRotation(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  shouldBounceOnWorldBorder(): boolean;
  tick(): void;
  updateRotation(): void;
}
export type Projectile = ProjectileMembers & j_net_minecraft_world_entity.Entity & j_net_minecraft_world_entity.TraceableEntity;
export interface ProjectileStatics {
  lerpRotation(arg0: number, arg1: number): number;
  spawnProjectile<T /* extends Projectile */>(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack): T;
  spawnProjectile<T /* extends Projectile */>(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaConsumer<T>): T;
  spawnProjectileDelayed<T /* extends Projectile */>(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaConsumer<T>): Projectile_Delayed<T>;
  spawnProjectileFromRotation<T /* extends Projectile */>(arg0: Projectile_ProjectileFactory<T>, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: number, arg5: number, arg6: number): T;
  spawnProjectileFromRotationDelayed<T /* extends Projectile */>(arg0: Projectile_ProjectileFactory<T>, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: number, arg5: number, arg6: number): Projectile_Delayed<T>;
  spawnProjectileUsingShoot<T /* extends Projectile */>(arg0: Projectile_ProjectileFactory<T>, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): T;
  spawnProjectileUsingShoot<T /* extends Projectile */>(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): T;
  spawnProjectileUsingShootDelayed<T /* extends Projectile */>(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Projectile_Delayed<T>;
}

/** JVM record net.minecraft.world.entity.projectile.Projectile$Delayed. */
export interface Projectile_DelayedMembers<T /* extends Projectile */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  attemptSpawn(): boolean;
  attemptSpawn(arg0: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  projectile(): T;
  projectileStack(): j_net_minecraft_world_item.ItemStack;
  spawn(): T;
  spawn(arg0: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T;
  toString(): string;
  world(): j_net_minecraft_server_level.ServerLevel;
}
export type Projectile_Delayed<T /* extends Projectile */ = unknown> = Projectile_DelayedMembers<T> & JavaOpaque<"java.lang.Record">;
export interface Projectile_DelayedStatics {
  new<T /* extends Projectile */>(arg0: T, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_item.ItemStack): Projectile_Delayed<T>;
}

/** JVM interface net.minecraft.world.entity.projectile.Projectile$ProjectileFactory. */
export interface Projectile_ProjectileFactoryMembers<T /* extends Projectile */ = unknown> {
  create(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): T;
}
export type Projectile_ProjectileFactory<T /* extends Projectile */ = unknown> = Projectile_ProjectileFactoryMembers<T>;
export interface Projectile_ProjectileFactoryStatics {
}

/** JVM interface net.minecraft.world.entity.projectile.ProjectileDeflection. */
export interface ProjectileDeflectionMembers {
  deflect(arg0: Projectile, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_util.RandomSource): void | null;
}
export type ProjectileDeflection = ProjectileDeflectionMembers;
export interface ProjectileDeflectionStatics {
  readonly AIM_DEFLECT: ProjectileDeflection;
  readonly MOMENTUM_DEFLECT: ProjectileDeflection;
  readonly NONE: ProjectileDeflection;
  readonly REVERSE: ProjectileDeflection;
}

/** JVM class net.minecraft.world.entity.projectile.ProjectileUtil. */
export interface ProjectileUtilMembers {
}
export type ProjectileUtil = ProjectileUtilMembers;
export interface ProjectileUtilStatics {
  new(): ProjectileUtil;
  readonly DEFAULT_ENTITY_HIT_RESULT_MARGIN: 0.3;
  computeMargin(arg0: j_net_minecraft_world_entity.Entity): number;
  getEntityHitResult(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_phys.AABB, arg4: JavaPredicate<j_net_minecraft_world_entity.Entity>, arg5: number): j_net_minecraft_world_phys.EntityHitResult | null;
  getEntityHitResult(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_phys.Vec3, arg4: j_net_minecraft_world_phys.AABB, arg5: JavaPredicate<j_net_minecraft_world_entity.Entity>, arg6: number): j_net_minecraft_world_phys.EntityHitResult | null;
  getEntityHitResult(arg0: j_net_minecraft_world_level.Level, arg1: Projectile, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_phys.Vec3, arg4: j_net_minecraft_world_phys.AABB, arg5: JavaPredicate<j_net_minecraft_world_entity.Entity>): j_net_minecraft_world_phys.EntityHitResult | null;
  getHitResultOnMoveVector(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaPredicate<j_net_minecraft_world_entity.Entity>): j_net_minecraft_world_phys.HitResult;
  getHitResultOnMoveVector(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaPredicate<j_net_minecraft_world_entity.Entity>, arg2: j_net_minecraft_world_level.ClipContext_Block): j_net_minecraft_world_phys.HitResult;
  getHitResultOnViewVector(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaPredicate<j_net_minecraft_world_entity.Entity>, arg2: number): j_net_minecraft_world_phys.HitResult;
  getMobArrow(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: j_net_minecraft_world_item.ItemStack | null): AbstractArrow | null;
  getWeaponHoldingHand(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.Item): j_net_minecraft_world.InteractionHand;
  rotateTowardsMovement(arg0: j_net_minecraft_world_entity.Entity, arg1: number): void;
}

/** JVM class net.minecraft.world.entity.projectile.ShulkerBullet. */
export interface ShulkerBulletMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  canHitEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  checkDespawn(): void;
  currentMoveDirection: j_net_minecraft_core.Direction | null;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  flightSteps: number;
  getDefaultGravity(): number;
  getLightLevelDependentMagicValue(): number;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getTarget(): j_net_minecraft_world_entity.Entity | null;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAffectedByBlocks(): boolean;
  isOnFire(): boolean;
  isPickable(): boolean;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  setTarget(arg0: j_net_minecraft_world_entity.Entity | null): void | null;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  targetDeltaX: number;
  targetDeltaY: number;
  targetDeltaZ: number;
  tick(): void;
}
export type ShulkerBullet = ShulkerBulletMembers & Projectile;
export interface ShulkerBulletStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ShulkerBullet>, arg1: j_net_minecraft_world_level.Level): ShulkerBullet;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_core.Direction_Axis): ShulkerBullet;
}

/** JVM class net.minecraft.world.entity.projectile.SmallFireball. */
export interface SmallFireballMembers {
  readonly __javaSupertypes?: readonly [Fireball];
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
}
export type SmallFireball = SmallFireballMembers & Fireball;
export interface SmallFireballStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<SmallFireball>, arg1: j_net_minecraft_world_level.Level): SmallFireball;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_phys.Vec3): SmallFireball;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.Vec3): SmallFireball;
}

/** JVM class net.minecraft.world.entity.projectile.Snowball. */
export interface SnowballMembers {
  readonly __javaSupertypes?: readonly [ThrowableItemProjectile];
  getDefaultItem(): j_net_minecraft_world_item.Item;
  handleEntityEvent(arg0: number): void;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
}
export type Snowball = SnowballMembers & ThrowableItemProjectile;
export interface SnowballStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Snowball>, arg1: j_net_minecraft_world_level.Level): Snowball;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): Snowball;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): Snowball;
}

/** JVM class net.minecraft.world.entity.projectile.SpectralArrow. */
export interface SpectralArrowMembers {
  readonly __javaSupertypes?: readonly [AbstractArrow];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  doPostHurtEffects(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  duration: number;
  getDefaultPickupItem(): j_net_minecraft_world_item.ItemStack;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  tick(): void;
}
export type SpectralArrow = SpectralArrowMembers & AbstractArrow;
export interface SpectralArrowStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<SpectralArrow>, arg1: j_net_minecraft_world_level.Level): SpectralArrow;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack, arg5: j_net_minecraft_world_item.ItemStack | null): SpectralArrow;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_item.ItemStack | null): SpectralArrow;
}

/** JVM abstract net.minecraft.world.entity.projectile.ThrowableItemProjectile. */
export interface ThrowableItemProjectileMembers {
  readonly __javaSupertypes?: readonly [ThrowableProjectile, ItemSupplier];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getDefaultItem(): j_net_minecraft_world_item.Item;
  getItem(): j_net_minecraft_world_item.ItemStack;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack): void;
}
export type ThrowableItemProjectile = ThrowableItemProjectileMembers & ThrowableProjectile & ItemSupplier;
export interface ThrowableItemProjectileStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrowableItemProjectile>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level.Level, arg5: j_net_minecraft_world_item.ItemStack): ThrowableItemProjectile;
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrowableItemProjectile>, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_world_item.ItemStack): ThrowableItemProjectile;
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrowableItemProjectile>, arg1: j_net_minecraft_world_level.Level): ThrowableItemProjectile;
}

/** JVM abstract net.minecraft.world.entity.projectile.ThrowableProjectile. */
export interface ThrowableProjectileMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  canUsePortal(arg0: boolean): boolean;
  getDefaultGravity(): number;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  tick(): void;
}
export type ThrowableProjectile = ThrowableProjectileMembers & Projectile;
export interface ThrowableProjectileStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrowableProjectile>, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_level.Level): ThrowableProjectile;
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrowableProjectile>, arg1: j_net_minecraft_world_level.Level): ThrowableProjectile;
}

/** JVM class net.minecraft.world.entity.projectile.ThrownEgg. */
export interface ThrownEggMembers {
  readonly __javaSupertypes?: readonly [ThrowableItemProjectile];
  getDefaultItem(): j_net_minecraft_world_item.Item;
  handleEntityEvent(arg0: number): void;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
}
export type ThrownEgg = ThrownEggMembers & ThrowableItemProjectile;
export interface ThrownEggStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrownEgg>, arg1: j_net_minecraft_world_level.Level): ThrownEgg;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): ThrownEgg;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): ThrownEgg;
}

/** JVM class net.minecraft.world.entity.projectile.ThrownEnderpearl. */
export interface ThrownEnderpearlMembers {
  readonly __javaSupertypes?: readonly [ThrowableItemProjectile];
  canTeleport(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level.Level): boolean;
  getDefaultItem(): j_net_minecraft_world_item.Item;
  getOwner(): j_net_minecraft_world_entity.Entity | null;
  onAboveBubbleColumn(arg0: boolean, arg1: j_net_minecraft_core.BlockPos): void;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  onInsideBlock(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  onInsideBubbleColumn(arg0: boolean): void;
  onRemoval(arg0: j_net_minecraft_world_entity.Entity_RemovalReason): void;
  setOwner(arg0: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.Entity> | null): void | null;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): j_net_minecraft_world_entity.Entity | null;
  tick(): void;
}
export type ThrownEnderpearl = ThrownEnderpearlMembers & ThrowableItemProjectile;
export interface ThrownEnderpearlStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrownEnderpearl>, arg1: j_net_minecraft_world_level.Level): ThrownEnderpearl;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): ThrownEnderpearl;
}

/** JVM class net.minecraft.world.entity.projectile.ThrownExperienceBottle. */
export interface ThrownExperienceBottleMembers {
  readonly __javaSupertypes?: readonly [ThrowableItemProjectile];
  getDefaultGravity(): number;
  getDefaultItem(): j_net_minecraft_world_item.Item;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
}
export type ThrownExperienceBottle = ThrownExperienceBottleMembers & ThrowableItemProjectile;
export interface ThrownExperienceBottleStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrownExperienceBottle>, arg1: j_net_minecraft_world_level.Level): ThrownExperienceBottle;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): ThrownExperienceBottle;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): ThrownExperienceBottle;
}

/** JVM class net.minecraft.world.entity.projectile.ThrownLingeringPotion. */
export interface ThrownLingeringPotionMembers {
  readonly __javaSupertypes?: readonly [AbstractThrownPotion];
  getDefaultItem(): j_net_minecraft_world_item.Item;
  onHitAsPotion(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.HitResult): boolean;
}
export type ThrownLingeringPotion = ThrownLingeringPotionMembers & AbstractThrownPotion;
export interface ThrownLingeringPotionStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrownLingeringPotion>, arg1: j_net_minecraft_world_level.Level): ThrownLingeringPotion;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): ThrownLingeringPotion;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): ThrownLingeringPotion;
}

/** JVM class net.minecraft.world.entity.projectile.ThrownSplashPotion. */
export interface ThrownSplashPotionMembers {
  readonly __javaSupertypes?: readonly [AbstractThrownPotion];
  getDefaultItem(): j_net_minecraft_world_item.Item;
  onHitAsPotion(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.HitResult): boolean;
}
export type ThrownSplashPotion = ThrownSplashPotionMembers & AbstractThrownPotion;
export interface ThrownSplashPotionStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrownSplashPotion>, arg1: j_net_minecraft_world_level.Level): ThrownSplashPotion;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): ThrownSplashPotion;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): ThrownSplashPotion;
}

/** JVM class net.minecraft.world.entity.projectile.ThrownTrident. */
export interface ThrownTridentMembers {
  readonly __javaSupertypes?: readonly [AbstractArrow];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  clientSideReturnTridentTickCount: number;
  dealtDamage: boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  findHitEntity(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.EntityHitResult | null;
  getDefaultHitGroundSoundEvent(): j_net_minecraft_sounds.SoundEvent;
  getDefaultPickupItem(): j_net_minecraft_world_item.ItemStack;
  getLoyalty(): number;
  getWaterInertia(): number;
  getWeaponItem(): j_net_minecraft_world_item.ItemStack;
  hitBlockEnchantmentEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.BlockHitResult, arg2: j_net_minecraft_world_item.ItemStack): void;
  isFoil(): boolean;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setFoil(arg0: boolean): void;
  setLoyalty(arg0: number): void;
  shouldRender(arg0: number, arg1: number, arg2: number): boolean;
  tick(): void;
  tickDespawn(): void;
  tryPickup(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ThrownTrident = ThrownTridentMembers & AbstractArrow;
export interface ThrownTridentStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ThrownTrident>, arg1: j_net_minecraft_world_level.Level): ThrownTrident;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): ThrownTrident;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): ThrownTrident;
}

/** JVM class net.minecraft.world.entity.projectile.WitherSkull. */
export interface WitherSkullMembers {
  readonly __javaSupertypes?: readonly [AbstractHurtingProjectile];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getBlockExplosionResistance(arg0: j_net_minecraft_world_level.Explosion, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.FluidState, arg5: number): number;
  getInertia(): number;
  isDangerous(): boolean;
  isOnFire(): boolean;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setDangerous(arg0: boolean): void;
  shouldBurn(): boolean;
}
export type WitherSkull = WitherSkullMembers & AbstractHurtingProjectile;
export interface WitherSkullStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<WitherSkull>, arg1: j_net_minecraft_world_level.Level): WitherSkull;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.Vec3): WitherSkull;
}
