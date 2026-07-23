// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal_target from './net.minecraft.world.entity.ai.goal.target.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.entity.animal.horse.AbstractChestedHorse. */
export interface AbstractChestedHorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  dropEquipment(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getInventoryColumns(): number;
  getQuadLeashOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  hasChest(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playChestEquipsSound(): void;
  postDeathDropItems(arg0: JavaOpaque<"org.bukkit.event.entity.EntityDeathEvent">): void;
  randomizeAttributes(arg0: j_net_minecraft_util.RandomSource): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setChest(arg0: boolean): void;
}
export type AbstractChestedHorse = AbstractChestedHorseMembers & AbstractHorse;
export interface AbstractChestedHorseStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractChestedHorse>, arg1: j_net_minecraft_world_level.Level): AbstractChestedHorse;
  createBaseChestedHorseAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM abstract net.minecraft.world.entity.animal.horse.AbstractHorse. */
export interface AbstractHorseMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal, j_net_minecraft_world_entity.HasCustomInventoryScreen, j_net_minecraft_world_entity.OwnableEntity, j_net_minecraft_world_entity.PlayerRideableJumping];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addBehaviourGoals(): void;
  aiStep(): void;
  allowStandSliding: boolean;
  canDispenserEquipIntoSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  canEatGrass(): boolean;
  canGallop: boolean;
  canJump(): boolean;
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  canParent(): boolean;
  canPerformRearing(): boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  clearStanding(): void;
  createInventory(): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  doPlayerRide(arg0: j_net_minecraft_world_entity_player.Player): void;
  dropEquipment(arg0: j_net_minecraft_server_level.ServerLevel): void;
  equipBodyArmor(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  executeRidersJump(arg0: number, arg1: j_net_minecraft_world_phys.Vec3): void;
  fedFood(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world.InteractionResult;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  followMommy(arg0: j_net_minecraft_server_level.ServerLevel): void;
  gallopSoundCounter: number;
  getAmbientSoundInterval(): number;
  getAmbientStandInterval(): number;
  getAmbientStandSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAngrySound(): j_net_minecraft_sounds.SoundEvent | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getControllingPassenger(): j_net_minecraft_world_entity.LivingEntity | null;
  getDismountLocationForPassenger(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec3;
  getEatAnim(arg0: number): number;
  getEatingSound(): j_net_minecraft_sounds.SoundEvent | null;
  getEquipSound(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item_equipment.Equippable): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getFlag(arg0: number): boolean;
  getInventoryColumns(): number;
  getInventorySize(): number;
  getMaxSpawnClusterSize(): number;
  getMaxTemper(): number;
  getMouthAnim(arg0: number): number;
  getOwnerReference(): j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity> | null;
  getPassengerAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.EntityDimensions, arg2: number): j_net_minecraft_world_phys.Vec3;
  getQuadLeashOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getRiddenInput(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  getRiddenRotation(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec2;
  getRiddenSpeed(arg0: j_net_minecraft_world_entity_player.Player): number;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getSoundVolume(): number;
  getStandAnim(arg0: number): number;
  getTemper(): number;
  handleEating(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  handleEntityEvent(arg0: number): void;
  handleStartJump(arg0: number): void;
  handleStopJump(): void;
  hasInventoryChanged(arg0: j_net_minecraft_world.Container): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  inventory: j_net_minecraft_world.SimpleContainer;
  isBred(): boolean;
  isCollidable(arg0: boolean): boolean;
  isEating(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isImmobile(): boolean;
  isMouthOpen(): boolean;
  isStanding(): boolean;
  isTamed(): boolean;
  makeMad(): void;
  maxDomestication: number;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  modifyTemper(arg0: number): number;
  onClimbable(): boolean;
  onElasticLeashPull(): void;
  onPlayerJump(arg0: number): void;
  openCustomInventoryScreen(arg0: j_net_minecraft_world_entity_player.Player): void;
  owner: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity> | null;
  playGallopSound(arg0: j_net_minecraft_world_level_block.SoundType): void;
  playJumpSound(): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  playerJumpPendingScale: number;
  positionRider(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity_MoveFunction): void;
  randomizeAttributes(arg0: j_net_minecraft_util.RandomSource): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerGoals(): void;
  setBred(arg0: boolean): void;
  setEating(arg0: boolean): void;
  setFlag(arg0: number, arg1: boolean): void;
  setMouthOpen(arg0: boolean): void;
  setOffspringAttributes(arg0: j_net_minecraft_world_entity.AgeableMob, arg1: AbstractHorse): void;
  setOwner(arg0: j_net_minecraft_world_entity.LivingEntity | null): void | null;
  setStanding(arg0: number): void;
  setTamed(arg0: boolean): void;
  setTemper(arg0: number): void;
  spawnTamingParticles(arg0: boolean): void;
  sprintCounter: number;
  standIfPossible(): void;
  supportQuadLeash(): boolean;
  tailCounter: number;
  tameWithName(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  temper: number;
  tick(): void;
  tickRidden(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3): void;
}
export type AbstractHorse = AbstractHorseMembers & j_net_minecraft_world_entity_animal.Animal & j_net_minecraft_world_entity.HasCustomInventoryScreen & j_net_minecraft_world_entity.OwnableEntity & j_net_minecraft_world_entity.PlayerRideableJumping;
export interface AbstractHorseStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractHorse>, arg1: j_net_minecraft_world_level.Level): AbstractHorse;
  readonly BREEDING_CROSS_FACTOR: 0.15;
  readonly CHEST_SLOT_OFFSET: 499;
  readonly INVENTORY_ROWS: 3;
  readonly INVENTORY_SLOT_OFFSET: 500;
  createBaseHorseAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  generateJumpStrength(arg0: JavaOpaque<"java.util.function.DoubleSupplier">): number;
  generateMaxHealth(arg0: JavaOpaque<"java.util.function.IntUnaryOperator">): number;
  generateSpeed(arg0: JavaOpaque<"java.util.function.DoubleSupplier">): number;
  getInventorySize(arg0: number): number;
}

/** JVM class net.minecraft.world.entity.animal.horse.Donkey. */
export interface DonkeyMembers {
  readonly __javaSupertypes?: readonly [AbstractChestedHorse];
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAngrySound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getEatingSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  playJumpSound(): void;
}
export type Donkey = DonkeyMembers & AbstractChestedHorse;
export interface DonkeyStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Donkey>, arg1: j_net_minecraft_world_level.Level): Donkey;
}

/** JVM class net.minecraft.world.entity.animal.horse.Horse. */
export interface HorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAngrySound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getEatingSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMarkings(): Markings;
  getVariant(): Variant;
  hurtArmor(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playGallopSound(arg0: j_net_minecraft_world_level_block.SoundType): void;
  randomizeAttributes(arg0: j_net_minecraft_util.RandomSource): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setVariantAndMarkings(arg0: Variant, arg1: Markings): void;
}
export type Horse = HorseMembers & AbstractHorse;
export interface HorseStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Horse>, arg1: j_net_minecraft_world_level.Level): Horse;
}

/** JVM class net.minecraft.world.entity.animal.horse.Horse$HorseGroupData. */
export interface Horse_HorseGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData];
  readonly variant: Variant;
}
export type Horse_HorseGroupData = Horse_HorseGroupDataMembers & j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData;
export interface Horse_HorseGroupDataStatics {
  new(arg0: Variant): Horse_HorseGroupData;
}

/** JVM class net.minecraft.world.entity.animal.horse.Llama. */
export interface LlamaMembers {
  readonly __javaSupertypes?: readonly [AbstractChestedHorse, j_net_minecraft_world_entity_monster.RangedAttackMob];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  canEatGrass(): boolean;
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  canPerformRearing(): boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  caravanTail: Llama | null;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  followLeashSpeed(): number;
  followMommy(arg0: j_net_minecraft_server_level.ServerLevel): void;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAngrySound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Llama | null;
  getCaravanHead(): Llama | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getEatingSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInventoryColumns(): number;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getMaxTemper(): number;
  getPassengerAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.EntityDimensions, arg2: number): j_net_minecraft_world_phys.Vec3;
  getStrength(): number;
  getVariant(): Llama_Variant;
  handleEating(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  hasCaravanTail(): boolean;
  inCaravan(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isImmobile(): boolean;
  isTraderLlama(): boolean;
  joinCaravan(arg0: Llama): void;
  leaveCaravan(): void;
  makeNewLlama(): Llama | null;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  playChestEquipsSound(): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerGoals(): void;
  setStrengthPublic(arg0: number): void;
  setVariant(arg0: Llama_Variant): void;
  supportQuadLeash(): boolean;
}
export type Llama = LlamaMembers & AbstractChestedHorse & j_net_minecraft_world_entity_monster.RangedAttackMob;
export interface LlamaStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Llama>, arg1: j_net_minecraft_world_level.Level): Llama;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** Live JVM enum net.minecraft.world.entity.animal.horse.Llama$Variant; constants are host handles, not strings. */
export type Llama_Variant = JavaEnum<"net.minecraft.world.entity.animal.horse.Llama$Variant", "BROWN" | "CREAMY" | "GRAY" | "WHITE"> & Llama_VariantMembers;
export interface Llama_VariantMembers {
  getId(): number;
  getSerializedName(): string;
}
export interface Llama_VariantStatics {
  readonly BROWN: Llama_Variant;
  readonly CREAMY: Llama_Variant;
  readonly GRAY: Llama_Variant;
  readonly WHITE: Llama_Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Llama_Variant]>;
  readonly DEFAULT: Llama_Variant;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Llama_Variant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Llama_Variant>;
  byId(arg0: number): Llama_Variant;
  valueOf(arg0: string): Llama_Variant;
  values(): Array<Llama_Variant>;
}

/** Live JVM enum net.minecraft.world.entity.animal.horse.Markings; constants are host handles, not strings. */
export type Markings = JavaEnum<"net.minecraft.world.entity.animal.horse.Markings", "BLACK_DOTS" | "NONE" | "WHITE" | "WHITE_DOTS" | "WHITE_FIELD"> & MarkingsMembers;
export interface MarkingsMembers {
  getId(): number;
}
export interface MarkingsStatics {
  readonly BLACK_DOTS: Markings;
  readonly NONE: Markings;
  readonly WHITE: Markings;
  readonly WHITE_DOTS: Markings;
  readonly WHITE_FIELD: Markings;
  byId(arg0: number): Markings;
  valueOf(arg0: string): Markings;
  values(): Array<Markings>;
}

/** JVM class net.minecraft.world.entity.animal.horse.Mule. */
export interface MuleMembers {
  readonly __javaSupertypes?: readonly [AbstractChestedHorse];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAngrySound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getEatingSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  playChestEquipsSound(): void;
  playJumpSound(): void;
}
export type Mule = MuleMembers & AbstractChestedHorse;
export interface MuleStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Mule>, arg1: j_net_minecraft_world_level.Level): Mule;
}

/** JVM class net.minecraft.world.entity.animal.horse.SkeletonHorse. */
export interface SkeletonHorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addBehaviourGoals(): void;
  aiStep(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getWaterSlowDown(): number;
  isTrap(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playJumpSound(): void;
  playSwimSound(arg0: number): void;
  randomizeAttributes(arg0: j_net_minecraft_util.RandomSource): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setTrap(arg0: boolean): void;
  trapTime: number;
}
export type SkeletonHorse = SkeletonHorseMembers & AbstractHorse;
export interface SkeletonHorseStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<SkeletonHorse>, arg1: j_net_minecraft_world_level.Level): SkeletonHorse;
  checkSkeletonHorseSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.horse.SkeletonTrapGoal. */
export interface SkeletonTrapGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  tick(): void;
}
export type SkeletonTrapGoal = SkeletonTrapGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface SkeletonTrapGoalStatics {
  new(arg0: SkeletonHorse): SkeletonTrapGoal;
}

/** JVM class net.minecraft.world.entity.animal.horse.TraderLlama. */
export interface TraderLlamaMembers {
  readonly __javaSupertypes?: readonly [Llama];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  doPlayerRide(arg0: j_net_minecraft_world_entity_player.Player): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  isTraderLlama(): boolean;
  makeNewLlama(): Llama | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerGoals(): void;
  setDespawnDelay(arg0: number): void;
}
export type TraderLlama = TraderLlamaMembers & Llama;
export interface TraderLlamaStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<TraderLlama>, arg1: j_net_minecraft_world_level.Level): TraderLlama;
}

/** JVM class net.minecraft.world.entity.animal.horse.TraderLlama$TraderLlamaDefendWanderingTraderGoal. */
export interface TraderLlama_TraderLlamaDefendWanderingTraderGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal_target.TargetGoal];
  canUse(): boolean;
  start(): void;
}
export type TraderLlama_TraderLlamaDefendWanderingTraderGoal = TraderLlama_TraderLlamaDefendWanderingTraderGoalMembers & j_net_minecraft_world_entity_ai_goal_target.TargetGoal;
export interface TraderLlama_TraderLlamaDefendWanderingTraderGoalStatics {
  new(arg0: Llama): TraderLlama_TraderLlamaDefendWanderingTraderGoal;
}

/** Live JVM enum net.minecraft.world.entity.animal.horse.Variant; constants are host handles, not strings. */
export type Variant = JavaEnum<"net.minecraft.world.entity.animal.horse.Variant", "BLACK" | "BROWN" | "CHESTNUT" | "CREAMY" | "DARK_BROWN" | "GRAY" | "WHITE"> & VariantMembers;
export interface VariantMembers {
  getId(): number;
  getSerializedName(): string;
}
export interface VariantStatics {
  readonly BLACK: Variant;
  readonly BROWN: Variant;
  readonly CHESTNUT: Variant;
  readonly CREAMY: Variant;
  readonly DARK_BROWN: Variant;
  readonly GRAY: Variant;
  readonly WHITE: Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Variant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Variant>;
  byId(arg0: number): Variant;
  valueOf(arg0: string): Variant;
  values(): Array<Variant>;
}

/** JVM class net.minecraft.world.entity.animal.horse.ZombieHorse. */
export interface ZombieHorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  addBehaviourGoals(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  randomizeAttributes(arg0: j_net_minecraft_util.RandomSource): void;
}
export type ZombieHorse = ZombieHorseMembers & AbstractHorse;
export interface ZombieHorseStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ZombieHorse>, arg1: j_net_minecraft_world_level.Level): ZombieHorse;
  checkZombieHorseSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}
