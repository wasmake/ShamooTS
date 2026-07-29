// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.decoration.ArmorStand. */
export interface ArmorStandMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.LivingEntity];
  attackable(): boolean;
  canBeSeenByAnyone(): boolean;
  canMove: boolean;
  canTick: boolean;
  canTickSetByAPI: boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  disabledSlots: number;
  getArmorStandPose(): ArmorStand_ArmorStandPose;
  getBodyPose(): j_net_minecraft_core.Rotations;
  getBukkitYaw(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getFallSounds(): j_net_minecraft_world_entity.LivingEntity_Fallsounds;
  getHeadPose(): j_net_minecraft_core.Rotations;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getLeftArmPose(): j_net_minecraft_core.Rotations;
  getLeftLegPose(): j_net_minecraft_core.Rotations;
  getLightProbePosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getMainArm(): j_net_minecraft_world_entity.HumanoidArm;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getRightArmPose(): j_net_minecraft_core.Rotations;
  getRightLegPose(): j_net_minecraft_core.Rotations;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  ignoreExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  interactAt(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  isAffectedByPotions(): boolean;
  isBaby(): boolean;
  isCollidable(arg0: boolean): boolean;
  isDisabled(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  isEffectiveAi(): boolean;
  isIgnoringBlockTriggers(): boolean;
  isMarker(): boolean;
  isPickable(): boolean;
  isSmall(): boolean;
  kill(arg0: j_net_minecraft_server_level.ServerLevel): void;
  kill(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource | null): void;
  kill(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource | null, arg2: boolean): void;
  lastHit: bigint;
  move(arg0: j_net_minecraft_world_entity.MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  refreshDimensions(): void;
  setArmorStandPose(arg0: ArmorStand_ArmorStandPose): void;
  setBodyPose(arg0: j_net_minecraft_core.Rotations): void;
  setHeadPose(arg0: j_net_minecraft_core.Rotations): void;
  setInvisible(arg0: boolean): void;
  setItemSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: boolean): void;
  setLeftArmPose(arg0: j_net_minecraft_core.Rotations): void;
  setLeftLegPose(arg0: j_net_minecraft_core.Rotations): void;
  setMarker(arg0: boolean): void;
  setNoBasePlate(arg0: boolean): void;
  setRightArmPose(arg0: j_net_minecraft_core.Rotations): void;
  setRightLegPose(arg0: j_net_minecraft_core.Rotations): void;
  setShowArms(arg0: boolean): void;
  setSmall(arg0: boolean): void;
  setYBodyRot(arg0: number): void;
  setYHeadRot(arg0: number): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  showArms(): boolean;
  showBasePlate(): boolean;
  skipAttackInteraction(arg0: j_net_minecraft_world_entity.Entity): boolean;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
  tick(): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type ArmorStand = ArmorStandMembers & j_net_minecraft_world_entity.LivingEntity;
export interface ArmorStandStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ArmorStand>, arg1: j_net_minecraft_world_level.Level): ArmorStand;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number): ArmorStand;
  readonly CLIENT_FLAG_MARKER: 16;
  readonly CLIENT_FLAG_NO_BASEPLATE: 8;
  readonly CLIENT_FLAG_SHOW_ARMS: 4;
  readonly CLIENT_FLAG_SMALL: 1;
  readonly DATA_BODY_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.Rotations>;
  readonly DATA_CLIENT_FLAGS: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_HEAD_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.Rotations>;
  readonly DATA_LEFT_ARM_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.Rotations>;
  readonly DATA_LEFT_LEG_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.Rotations>;
  readonly DATA_RIGHT_ARM_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.Rotations>;
  readonly DATA_RIGHT_LEG_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_core.Rotations>;
  readonly DEFAULT_BODY_POSE: j_net_minecraft_core.Rotations;
  readonly DEFAULT_HEAD_POSE: j_net_minecraft_core.Rotations;
  readonly DEFAULT_LEFT_ARM_POSE: j_net_minecraft_core.Rotations;
  readonly DEFAULT_LEFT_LEG_POSE: j_net_minecraft_core.Rotations;
  readonly DEFAULT_RIGHT_ARM_POSE: j_net_minecraft_core.Rotations;
  readonly DEFAULT_RIGHT_LEG_POSE: j_net_minecraft_core.Rotations;
  readonly DISABLE_PUTTING_OFFSET: 16;
  readonly DISABLE_TAKING_OFFSET: 8;
  readonly WOBBLE_TIME: 5;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM record net.minecraft.world.entity.decoration.ArmorStand$ArmorStandPose. */
export interface ArmorStand_ArmorStandPoseMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  body(): j_net_minecraft_core.Rotations;
  equals(arg0: object): boolean;
  hashCode(): number;
  head(): j_net_minecraft_core.Rotations;
  leftArm(): j_net_minecraft_core.Rotations;
  leftLeg(): j_net_minecraft_core.Rotations;
  rightArm(): j_net_minecraft_core.Rotations;
  rightLeg(): j_net_minecraft_core.Rotations;
  toString(): string;
}
export type ArmorStand_ArmorStandPose = ArmorStand_ArmorStandPoseMembers & JavaOpaque<"java.lang.Record">;
export interface ArmorStand_ArmorStandPoseStatics {
  new(arg0: j_net_minecraft_core.Rotations, arg1: j_net_minecraft_core.Rotations, arg2: j_net_minecraft_core.Rotations, arg3: j_net_minecraft_core.Rotations, arg4: j_net_minecraft_core.Rotations, arg5: j_net_minecraft_core.Rotations): ArmorStand_ArmorStandPose;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ArmorStand_ArmorStandPose]>;
  readonly DEFAULT: ArmorStand_ArmorStandPose;
}

/** JVM abstract net.minecraft.world.entity.decoration.BlockAttachedEntity. */
export interface BlockAttachedEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity];
  dropItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null): void;
  getPos(): j_net_minecraft_core.BlockPos;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  ignoreExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  isPickable(): boolean;
  move(arg0: j_net_minecraft_world_entity.MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  push(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null): void;
  refreshDimensions(): void;
  setPos(arg0: number, arg1: number, arg2: number): void;
  skipAttackInteraction(arg0: j_net_minecraft_world_entity.Entity): boolean;
  survives(): boolean;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
  tick(): void;
}
export type BlockAttachedEntity = BlockAttachedEntityMembers & j_net_minecraft_world_entity.Entity;
export interface BlockAttachedEntityStatics {
}

/** JVM class net.minecraft.world.entity.decoration.GlowItemFrame. */
export interface GlowItemFrameMembers {
  readonly __javaSupertypes?: readonly [ItemFrame];
  getAddItemSound(): j_net_minecraft_sounds.SoundEvent;
  getBreakSound(): j_net_minecraft_sounds.SoundEvent;
  getPlaceSound(): j_net_minecraft_sounds.SoundEvent;
  getRemoveItemSound(): j_net_minecraft_sounds.SoundEvent;
  getRotateItemSound(): j_net_minecraft_sounds.SoundEvent;
}
export type GlowItemFrame = GlowItemFrameMembers & ItemFrame;
export interface GlowItemFrameStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ItemFrame>, arg1: j_net_minecraft_world_level.Level): GlowItemFrame;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): GlowItemFrame;
}

/** JVM abstract net.minecraft.world.entity.decoration.HangingEntity. */
export interface HangingEntityMembers {
  readonly __javaSupertypes?: readonly [BlockAttachedEntity];
  getDirection(): j_net_minecraft_core.Direction;
  mirror(arg0: j_net_minecraft_world_level_block.Mirror): number;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playPlacementSound(): void;
  rotate(arg0: j_net_minecraft_world_level_block.Rotation): number;
  setDirection(arg0: j_net_minecraft_core.Direction): void;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): j_net_minecraft_world_entity_item.ItemEntity;
  survives(): boolean;
}
export type HangingEntity = HangingEntityMembers & BlockAttachedEntity;
export interface HangingEntityStatics {
}

/** JVM class net.minecraft.world.entity.decoration.ItemFrame. */
export interface ItemFrameMembers {
  readonly __javaSupertypes?: readonly [HangingEntity];
  cachedMapId: j_net_minecraft_world_level_saveddata_maps.MapId | null;
  dropChance: number;
  dropItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null): void;
  fixed: boolean;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getAddItemSound(): j_net_minecraft_sounds.SoundEvent;
  getAnalogOutput(): number;
  getBreakSound(): j_net_minecraft_sounds.SoundEvent;
  getFramedMapId(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_level_saveddata_maps.MapId | null;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getPlaceSound(): j_net_minecraft_sounds.SoundEvent;
  getRemoveItemSound(): j_net_minecraft_sounds.SoundEvent;
  getRotateItemSound(): j_net_minecraft_sounds.SoundEvent;
  getRotation(): number;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getVisualRotationYInDegrees(): number;
  hasFramedMap(): boolean;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  kill(arg0: j_net_minecraft_server_level.ServerLevel): void;
  move(arg0: j_net_minecraft_world_entity.MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playPlacementSound(): void;
  push(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  setDirection(arg0: j_net_minecraft_core.Direction): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean, arg2: boolean): void;
  setRotation(arg0: number): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_entity_item.ItemEntity | null;
  survives(): boolean;
}
export type ItemFrame = ItemFrameMembers & HangingEntity;
export interface ItemFrameStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ItemFrame>, arg1: j_net_minecraft_world_level.Level): ItemFrame;
  new(arg0: j_net_minecraft_world_entity.EntityType<ItemFrame>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): ItemFrame;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): ItemFrame;
  readonly DATA_ITEM: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_world_item.ItemStack>;
  readonly DATA_ROTATION: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly NUM_ROTATIONS: 8;
  calculateBoundingBoxStatic(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): j_net_minecraft_world_phys.AABB;
}

/** JVM class net.minecraft.world.entity.decoration.LeashFenceKnotEntity. */
export interface LeashFenceKnotEntityMembers {
  readonly __javaSupertypes?: readonly [BlockAttachedEntity];
  dropItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null): void;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getRopeHoldPosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  notifyLeasheeRemoved(arg0: j_net_minecraft_world_entity.Leashable): void;
  playPlacementSound(): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  survives(): boolean;
}
export type LeashFenceKnotEntity = LeashFenceKnotEntityMembers & BlockAttachedEntity;
export interface LeashFenceKnotEntityStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<LeashFenceKnotEntity>, arg1: j_net_minecraft_world_level.Level): LeashFenceKnotEntity;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): LeashFenceKnotEntity;
  readonly OFFSET_Y: 0.375;
  getOrCreateKnot(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): LeashFenceKnotEntity;
  getOrCreateKnot(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: JavaOpaque<"org.apache.commons.lang3.mutable.MutableBoolean"> | null): LeashFenceKnotEntity;
}

/** JVM class net.minecraft.world.entity.decoration.Painting. */
export interface PaintingMembers {
  readonly __javaSupertypes?: readonly [HangingEntity];
  dropItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity | null): void;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getVariant(): j_net_minecraft_core.Holder<PaintingVariant>;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playPlacementSound(): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  setVariant(arg0: j_net_minecraft_core.Holder<PaintingVariant>): void;
  snapTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  trackingPosition(): j_net_minecraft_world_phys.Vec3;
}
export type Painting = PaintingMembers & HangingEntity;
export interface PaintingStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Painting>, arg1: j_net_minecraft_world_level.Level): Painting;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_core.Holder<PaintingVariant>): Painting;
  readonly DEPTH: 0.0625;
  calculateBoundingBoxStatic(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: number, arg3: number): j_net_minecraft_world_phys.AABB;
  create(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): JavaOptional<Painting>;
}

/** JVM record net.minecraft.world.entity.decoration.PaintingVariant. */
export interface PaintingVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  area(): number;
  assetId(): j_net_minecraft_resources.ResourceLocation;
  author(): JavaOptional<j_net_minecraft_network_chat.Component>;
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): number;
  title(): JavaOptional<j_net_minecraft_network_chat.Component>;
  toString(): string;
  width(): number;
}
export type PaintingVariant = PaintingVariantMembers & JavaOpaque<"java.lang.Record">;
export interface PaintingVariantStatics {
  new(arg0: number, arg1: number, arg2: j_net_minecraft_resources.ResourceLocation, arg3: JavaOptional<j_net_minecraft_network_chat.Component>, arg4: JavaOptional<j_net_minecraft_network_chat.Component>): PaintingVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<PaintingVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PaintingVariant]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, PaintingVariant>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<PaintingVariant>>;
}

/** JVM class net.minecraft.world.entity.decoration.PaintingVariants. */
export interface PaintingVariantsMembers {
}
export type PaintingVariants = PaintingVariantsMembers;
export interface PaintingVariantsStatics {
  new(): PaintingVariants;
  readonly ALBAN: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly AZTEC: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly AZTEC2: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly BACKYARD: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly BAROQUE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly BOMB: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly BOUQUET: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly BURNING_SKULL: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly BUST: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly CAVEBIRD: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly CHANGING: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly COTAN: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly COURBET: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly CREEBET: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly DENNIS: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly DONKEY_KONG: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly EARTH: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly ENDBOSS: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly FERN: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly FIGHTERS: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly FINDING: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly FIRE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly GRAHAM: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly HUMBLE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly KEBAB: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly LOWMIST: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly MATCH: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly MEDITATIVE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly ORB: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly OWLEMONS: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly PASSAGE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly PIGSCENE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly PLANT: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly POINTER: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly POND: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly POOL: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly PRAIRIE_RIDE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly SEA: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly SKELETON: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly SKULL_AND_ROSES: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly STAGE: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly SUNFLOWERS: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly SUNSET: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly TIDES: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly UNPACKED: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly VOID: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly WANDERER: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly WASTELAND: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly WATER: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly WIND: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  readonly WITHER: j_net_minecraft_resources.ResourceKey<PaintingVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<PaintingVariant>): void;
}
