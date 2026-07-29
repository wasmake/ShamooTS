// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_control from './net.minecraft.world.entity.ai.control.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_variant from './net.minecraft.world.entity.variant.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.entity.animal.AbstractCow. */
export interface AbstractCowMembers {
  readonly __javaSupertypes?: readonly [Animal];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getSoundVolume(): number;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type AbstractCow = AbstractCowMembers & Animal;
export interface AbstractCowStatics {
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM abstract net.minecraft.world.entity.animal.AbstractFish. */
export interface AbstractFishMembers {
  readonly __javaSupertypes?: readonly [WaterAnimal, Bucketable];
  aiStep(): void;
  fromBucket(): boolean;
  getMaxSpawnClusterSize(): number;
  getPickupSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  loadFromBucketTag(arg0: j_net_minecraft_nbt.CompoundTag): void;
  removeWhenFarAway(arg0: number): boolean;
  requiresCustomPersistence(): boolean;
  saveToBucketTag(arg0: j_net_minecraft_world_item.ItemStack): void;
  setFromBucket(arg0: boolean): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type AbstractFish = AbstractFishMembers & WaterAnimal & Bucketable;
export interface AbstractFishStatics {
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM abstract net.minecraft.world.entity.animal.AbstractGolem. */
export interface AbstractGolemMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.PathfinderMob];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAmbientSoundInterval(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  removeWhenFarAway(arg0: number): boolean;
}
export type AbstractGolem = AbstractGolemMembers & j_net_minecraft_world_entity.PathfinderMob;
export interface AbstractGolemStatics {
}

/** JVM abstract net.minecraft.world.entity.animal.AbstractSchoolingFish. */
export interface AbstractSchoolingFishMembers {
  readonly __javaSupertypes?: readonly [AbstractFish];
  addFollowers(arg0: JavaOpaque<"java.util.stream.Stream", [AbstractSchoolingFish]>): void;
  canBeFollowed(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getMaxSchoolSize(): number;
  getMaxSpawnClusterSize(): number;
  hasFollowers(): boolean;
  inRangeOfLeader(): boolean;
  isFollower(): boolean;
  leader: AbstractSchoolingFish | null;
  pathToLeader(): void;
  schoolSize: number;
  startFollowing(arg0: AbstractSchoolingFish): AbstractSchoolingFish;
  stopFollowing(): void;
  tick(): void;
}
export type AbstractSchoolingFish = AbstractSchoolingFishMembers & AbstractFish;
export interface AbstractSchoolingFishStatics {
}

/** JVM class net.minecraft.world.entity.animal.AbstractSchoolingFish$SchoolSpawnGroupData. */
export interface AbstractSchoolingFish_SchoolSpawnGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.SpawnGroupData];
  readonly leader: AbstractSchoolingFish;
}
export type AbstractSchoolingFish_SchoolSpawnGroupData = AbstractSchoolingFish_SchoolSpawnGroupDataMembers & j_net_minecraft_world_entity.SpawnGroupData;
export interface AbstractSchoolingFish_SchoolSpawnGroupDataStatics {
  new(arg0: AbstractSchoolingFish): AbstractSchoolingFish_SchoolSpawnGroupData;
}

/** JVM abstract net.minecraft.world.entity.animal.AgeableWaterCreature. */
export interface AgeableWaterCreatureMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob];
  baseTick(): void;
  canBeLeashed(): boolean;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  getAmbientSoundInterval(): number;
  getBaseExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel): number;
  isPushedByFluid(): boolean;
}
export type AgeableWaterCreature = AgeableWaterCreatureMembers & j_net_minecraft_world_entity.AgeableMob;
export interface AgeableWaterCreatureStatics {
  checkSurfaceAgeableWaterCreatureSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<AgeableWaterCreature>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM abstract net.minecraft.world.entity.animal.Animal. */
export interface AnimalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob];
  actuallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): boolean;
  aiStep(): void;
  breedItem: j_net_minecraft_world_item.ItemStack | null;
  canFallInLove(): boolean;
  canMate(arg0: Animal): boolean;
  finalizeSpawnChildFromBreeding(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Animal, arg2: j_net_minecraft_world_entity.AgeableMob | null): void;
  finalizeSpawnChildFromBreeding(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Animal, arg2: j_net_minecraft_world_entity.AgeableMob | null, arg3: number): void;
  getAmbientSoundInterval(): number;
  getInLoveTime(): number;
  getLoveCause(): j_net_minecraft_server_level.ServerPlayer | null;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  handleEntityEvent(arg0: number): void;
  inLove: number;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isInLove(): boolean;
  loveCause: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_server_level.ServerPlayer> | null;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  removeWhenFarAway(arg0: number): boolean;
  resetLove(): void;
  setInLove(arg0: j_net_minecraft_world_entity_player.Player | null): void;
  setInLove(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: j_net_minecraft_world_item.ItemStack | null): void;
  setInLoveTime(arg0: number): void;
  spawnChildFromBreeding(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Animal): void;
}
export type Animal = AnimalMembers & j_net_minecraft_world_entity.AgeableMob;
export interface AnimalStatics {
  checkAnimalSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Animal>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAnimalAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.Bee. */
export interface BeeMembers {
  readonly __javaSupertypes?: readonly [Animal, j_net_minecraft_world_entity.NeutralMob, FlyingAnimal];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: boolean): void;
  aiStep(): void;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  dropOffNectar(): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBlacklistedHives(): JavaList<j_net_minecraft_core.BlockPos>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Bee | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getGoalSelector(): j_net_minecraft_world_entity_ai_goal.GoalSelector;
  getHivePos(): j_net_minecraft_core.BlockPos | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  getRollAmount(arg0: number): number;
  getSavedFlowerPos(): j_net_minecraft_core.BlockPos | null;
  getSoundVolume(): number;
  getTravellingTicks(): number;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  hasHive(): boolean;
  hasNectar(): boolean;
  hasSavedFlowerPos(): boolean;
  hasStung(): boolean;
  hivePos: j_net_minecraft_core.BlockPos | null;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isFlapping(): boolean;
  isFlying(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isRolling(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  numCropsGrownSincePollination: number;
  resetTicksWithoutNectarSinceExitingHive(): void;
  rollingOverride: JavaOpaque<"net.kyori.adventure.util.TriState">;
  setHasNectar(arg0: boolean): void;
  setHasStung(arg0: boolean): void;
  setHivePos(arg0: j_net_minecraft_core.BlockPos): void;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void;
  setRemainingPersistentAngerTime(arg0: number): void;
  setRolling(arg0: boolean): void;
  setSavedFlowerPos(arg0: j_net_minecraft_core.BlockPos): void;
  setStayOutOfHiveCountdown(arg0: number): void;
  startPersistentAngerTimer(): void;
  stayOutOfHiveCountdown: number;
  tick(): void;
  ticksWithoutNectarSinceExitingHive: number;
  timeSinceSting: number;
}
export type Bee = BeeMembers & Animal & j_net_minecraft_world_entity.NeutralMob & FlyingAnimal;
export interface BeeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Bee>, arg1: j_net_minecraft_world_level.Level): Bee;
  readonly DEFAULT_HAS_NECTAR: 0;
  readonly FLAP_DEGREES_PER_TICK: 120.32113;
  readonly TAG_CANNOT_ENTER_HIVE_TICKS: "CannotEnterHiveTicks";
  readonly TAG_CROPS_GROWN_SINCE_POLLINATION: "CropsGrownSincePollination";
  readonly TAG_FLOWER_POS: "flower_pos";
  readonly TAG_HAS_NECTAR: "HasNectar";
  readonly TAG_HAS_STUNG: "HasStung";
  readonly TAG_HIVE_POS: "hive_pos";
  readonly TAG_TICKS_SINCE_POLLINATION: "TicksSincePollination";
  readonly TICKS_PER_FLAP: number;
  attractsBees(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  isNightOrRaining(arg0: j_net_minecraft_world_level.Level): boolean;
}

/** JVM class net.minecraft.world.entity.animal.Bee$BeeGoToHiveGoal. */
export interface Bee_BeeGoToHiveGoalMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.entity.animal.Bee$BaseBeeGoal">];
  canBeeContinueToUse(): boolean;
  canBeeUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Bee_BeeGoToHiveGoal = Bee_BeeGoToHiveGoalMembers & JavaOpaque<"net.minecraft.world.entity.animal.Bee$BaseBeeGoal">;
export interface Bee_BeeGoToHiveGoalStatics {
  readonly MAX_TRAVELLING_TICKS: 2400;
}

/** JVM class net.minecraft.world.entity.animal.Bee$BeeGoToKnownFlowerGoal. */
export interface Bee_BeeGoToKnownFlowerGoalMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.world.entity.animal.Bee$BaseBeeGoal">];
  canBeeContinueToUse(): boolean;
  canBeeUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Bee_BeeGoToKnownFlowerGoal = Bee_BeeGoToKnownFlowerGoalMembers & JavaOpaque<"net.minecraft.world.entity.animal.Bee$BaseBeeGoal">;
export interface Bee_BeeGoToKnownFlowerGoalStatics {
}

/** JVM interface net.minecraft.world.entity.animal.Bucketable. */
export interface BucketableMembers {
  fromBucket(): boolean;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getPickupSound(): j_net_minecraft_sounds.SoundEvent;
  loadFromBucketTag(arg0: j_net_minecraft_nbt.CompoundTag): void;
  saveToBucketTag(arg0: j_net_minecraft_world_item.ItemStack): void;
  setFromBucket(arg0: boolean): void;
}
export type Bucketable = BucketableMembers;
export interface BucketableStatics {
  bucketMobPickup<T /* extends Bucketable */>(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand, arg2: T): JavaOptional<j_net_minecraft_world.InteractionResult>;
  loadDefaultDataFromBucketTag(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_nbt.CompoundTag): void;
  saveDefaultDataToBucketTag(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_world_item.ItemStack): void;
}

/** JVM class net.minecraft.world.entity.animal.Cat. */
export interface CatMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.TamableAnimal];
  canMate(arg0: Animal): boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAmbientSoundInterval(): number;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Cat | null;
  getCollarColor(): j_net_minecraft_world_item.DyeColor;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLieDownAmount(arg0: number): number;
  getLieDownAmountTail(arg0: number): number;
  getRelaxStateOneAmount(arg0: number): number;
  getVariant(): j_net_minecraft_core.Holder<CatVariant>;
  hiss(): void;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isLying(): boolean;
  isLyingOnTopOfSleepingPlayer(): boolean;
  isRelaxStateOne(): boolean;
  isSteppingCarefully(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  removeWhenFarAway(arg0: number): boolean;
  setCollarColor(arg0: j_net_minecraft_world_item.DyeColor): void;
  setLying(arg0: boolean): void;
  setRelaxStateOne(arg0: boolean): void;
  setTame(arg0: boolean, arg1: boolean): void;
  setVariant(arg0: j_net_minecraft_core.Holder<CatVariant>): void;
  tick(): void;
}
export type Cat = CatMembers & j_net_minecraft_world_entity.TamableAnimal;
export interface CatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Cat>, arg1: j_net_minecraft_world_level.Level): Cat;
  readonly SPRINT_SPEED_MOD: 1.33;
  readonly TEMPT_SPEED_MOD: 0.6;
  readonly WALK_SPEED_MOD: 0.8;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM record net.minecraft.world.entity.animal.CatVariant. */
export interface CatVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>];
  assetInfo(): j_net_minecraft_core.ClientAsset;
  equals(arg0: object): boolean;
  hashCode(): number;
  selectors(): JavaList<j_net_minecraft_world_entity_variant.PriorityProvider_Selector<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>>;
  spawnConditions(): j_net_minecraft_world_entity_variant.SpawnPrioritySelectors;
  toString(): string;
}
export type CatVariant = CatVariantMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>;
export interface CatVariantStatics {
  new(arg0: j_net_minecraft_core.ClientAsset, arg1: j_net_minecraft_world_entity_variant.SpawnPrioritySelectors): CatVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<CatVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CatVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CatVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<CatVariant>>;
}

/** JVM interface net.minecraft.world.entity.animal.CatVariants. */
export interface CatVariantsMembers {
}
export type CatVariants = CatVariantsMembers;
export interface CatVariantsStatics {
  readonly ALL_BLACK: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly BLACK: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly BRITISH_SHORTHAIR: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly CALICO: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly JELLIE: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly PERSIAN: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly RAGDOLL: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly RED: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly SIAMESE: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly TABBY: j_net_minecraft_resources.ResourceKey<CatVariant>;
  readonly WHITE: j_net_minecraft_resources.ResourceKey<CatVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<CatVariant>): void;
}

/** JVM class net.minecraft.world.entity.animal.Chicken. */
export interface ChickenMembers {
  readonly __javaSupertypes?: readonly [Animal];
  aiStep(): void;
  eggTime: number;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  flap: number;
  flapSpeed: number;
  flapping: number;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Chicken | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getVariant(): j_net_minecraft_core.Holder<ChickenVariant>;
  isChickenJockey: (boolean) & { (): boolean };
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  oFlap: number;
  oFlapSpeed: number;
  removeWhenFarAway(arg0: number): boolean;
  setChickenJockey(arg0: boolean): void;
  setVariant(arg0: j_net_minecraft_core.Holder<ChickenVariant>): void;
}
export type Chicken = ChickenMembers & Animal;
export interface ChickenStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Chicken>, arg1: j_net_minecraft_world_level.Level): Chicken;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM record net.minecraft.world.entity.animal.ChickenVariant. */
export interface ChickenVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>];
  equals(arg0: object): boolean;
  hashCode(): number;
  modelAndTexture(): j_net_minecraft_world_entity_variant.ModelAndTexture<ChickenVariant_ModelType>;
  selectors(): JavaList<j_net_minecraft_world_entity_variant.PriorityProvider_Selector<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>>;
  spawnConditions(): j_net_minecraft_world_entity_variant.SpawnPrioritySelectors;
  toString(): string;
}
export type ChickenVariant = ChickenVariantMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>;
export interface ChickenVariantStatics {
  new(arg0: j_net_minecraft_world_entity_variant.ModelAndTexture<ChickenVariant_ModelType>, arg1: j_net_minecraft_world_entity_variant.SpawnPrioritySelectors): ChickenVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<ChickenVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChickenVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChickenVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<ChickenVariant>>;
}

/** Live JVM enum net.minecraft.world.entity.animal.ChickenVariant$ModelType; constants are host handles, not strings. */
export type ChickenVariant_ModelType = JavaEnum<"net.minecraft.world.entity.animal.ChickenVariant$ModelType", "COLD" | "NORMAL"> & ChickenVariant_ModelTypeMembers;
export interface ChickenVariant_ModelTypeMembers {
  getSerializedName(): string;
}
export interface ChickenVariant_ModelTypeStatics {
  readonly COLD: ChickenVariant_ModelType;
  readonly NORMAL: ChickenVariant_ModelType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChickenVariant_ModelType]>;
  valueOf(arg0: string): ChickenVariant_ModelType;
  values(): Array<ChickenVariant_ModelType>;
}

/** JVM class net.minecraft.world.entity.animal.ChickenVariants. */
export interface ChickenVariantsMembers {
}
export type ChickenVariants = ChickenVariantsMembers;
export interface ChickenVariantsStatics {
  new(): ChickenVariants;
  readonly COLD: j_net_minecraft_resources.ResourceKey<ChickenVariant>;
  readonly DEFAULT: j_net_minecraft_resources.ResourceKey<ChickenVariant>;
  readonly TEMPERATE: j_net_minecraft_resources.ResourceKey<ChickenVariant>;
  readonly WARM: j_net_minecraft_resources.ResourceKey<ChickenVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<ChickenVariant>): void;
}

/** JVM class net.minecraft.world.entity.animal.Cod. */
export interface CodMembers {
  readonly __javaSupertypes?: readonly [AbstractSchoolingFish];
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
}
export type Cod = CodMembers & AbstractSchoolingFish;
export interface CodStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Cod>, arg1: j_net_minecraft_world_level.Level): Cod;
}

/** JVM class net.minecraft.world.entity.animal.Cow. */
export interface CowMembers {
  readonly __javaSupertypes?: readonly [AbstractCow];
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Cow | null;
  getVariant(): j_net_minecraft_core.Holder<CowVariant>;
  setVariant(arg0: j_net_minecraft_core.Holder<CowVariant>): void;
}
export type Cow = CowMembers & AbstractCow;
export interface CowStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Cow>, arg1: j_net_minecraft_world_level.Level): Cow;
}

/** JVM record net.minecraft.world.entity.animal.CowVariant. */
export interface CowVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>];
  equals(arg0: object): boolean;
  hashCode(): number;
  modelAndTexture(): j_net_minecraft_world_entity_variant.ModelAndTexture<CowVariant_ModelType>;
  selectors(): JavaList<j_net_minecraft_world_entity_variant.PriorityProvider_Selector<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>>;
  spawnConditions(): j_net_minecraft_world_entity_variant.SpawnPrioritySelectors;
  toString(): string;
}
export type CowVariant = CowVariantMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>;
export interface CowVariantStatics {
  new(arg0: j_net_minecraft_world_entity_variant.ModelAndTexture<CowVariant_ModelType>, arg1: j_net_minecraft_world_entity_variant.SpawnPrioritySelectors): CowVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<CowVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CowVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CowVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<CowVariant>>;
}

/** Live JVM enum net.minecraft.world.entity.animal.CowVariant$ModelType; constants are host handles, not strings. */
export type CowVariant_ModelType = JavaEnum<"net.minecraft.world.entity.animal.CowVariant$ModelType", "COLD" | "NORMAL" | "WARM"> & CowVariant_ModelTypeMembers;
export interface CowVariant_ModelTypeMembers {
  getSerializedName(): string;
}
export interface CowVariant_ModelTypeStatics {
  readonly COLD: CowVariant_ModelType;
  readonly NORMAL: CowVariant_ModelType;
  readonly WARM: CowVariant_ModelType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CowVariant_ModelType]>;
  valueOf(arg0: string): CowVariant_ModelType;
  values(): Array<CowVariant_ModelType>;
}

/** JVM class net.minecraft.world.entity.animal.CowVariants. */
export interface CowVariantsMembers {
}
export type CowVariants = CowVariantsMembers;
export interface CowVariantsStatics {
  new(): CowVariants;
  readonly COLD: j_net_minecraft_resources.ResourceKey<CowVariant>;
  readonly DEFAULT: j_net_minecraft_resources.ResourceKey<CowVariant>;
  readonly TEMPERATE: j_net_minecraft_resources.ResourceKey<CowVariant>;
  readonly WARM: j_net_minecraft_resources.ResourceKey<CowVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<CowVariant>): void;
}

/** JVM class net.minecraft.world.entity.animal.Dolphin. */
export interface DolphinMembers {
  readonly __javaSupertypes?: readonly [AgeableWaterCreature];
  canAttack(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  canBeLeashed(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAgeScale(): number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Dolphin | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultMaxAirSupply(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxAirSupply(): number;
  getMaxHeadXRot(): number;
  getMaxHeadYRot(): number;
  getMoistnessLevel(): number;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSplashSound(): j_net_minecraft_sounds.SoundEvent;
  gotFish(): boolean;
  handleEntityEvent(arg0: number): void;
  playAttackSound(): void;
  setGotFish(arg0: boolean): void;
  setMoisntessLevel(arg0: number): void;
  tick(): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  treasurePos: j_net_minecraft_core.BlockPos | null;
}
export type Dolphin = DolphinMembers & AgeableWaterCreature;
export interface DolphinStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Dolphin>, arg1: j_net_minecraft_world_level.Level): Dolphin;
  readonly ALLOWED_ITEMS: JavaPredicate<j_net_minecraft_world_entity_item.ItemEntity>;
  readonly BABY_SCALE: 0.65;
  readonly TOTAL_AIR_SUPPLY: 4800;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM interface net.minecraft.world.entity.animal.FlyingAnimal. */
export interface FlyingAnimalMembers {
  isFlying(): boolean;
}
export type FlyingAnimal = FlyingAnimalMembers;
export interface FlyingAnimalStatics {
}

/** JVM class net.minecraft.world.entity.animal.Fox. */
export interface FoxMembers {
  readonly __javaSupertypes?: readonly [Animal];
  aiStep(): void;
  canHoldItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Fox | null;
  getCrouchAmount(arg0: number): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHeadRollAngle(arg0: number): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getVariant(): Fox_Variant;
  handleEntityEvent(arg0: number): void;
  isCrouching(): boolean;
  isDefending(): boolean;
  isFaceplanted(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isFullyCrouched(): boolean;
  isInterested(): boolean;
  isPouncing(): boolean;
  isSitting(): boolean;
  isSleeping(): boolean;
  playAmbientSound(): void;
  setDefending(arg0: boolean): void;
  setFaceplanted(arg0: boolean): void;
  setIsCrouching(arg0: boolean): void;
  setIsInterested(arg0: boolean): void;
  setIsPouncing(arg0: boolean): void;
  setSitting(arg0: boolean): void;
  setSitting(arg0: boolean, arg1: boolean): void;
  setSleeping(arg0: boolean): void;
  setTarget(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: JavaOpaque<"org.bukkit.event.entity.EntityTargetEvent$TargetReason"> | null): boolean;
  setVariant(arg0: Fox_Variant): void;
  tick(): void;
}
export type Fox = FoxMembers & Animal;
export interface FoxStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Fox>, arg1: j_net_minecraft_world_level.Level): Fox;
  readonly DATA_TRUSTED_ID_0: j_net_minecraft_network_syncher.EntityDataAccessor<JavaOptional<j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity>>>;
  readonly DATA_TRUSTED_ID_1: j_net_minecraft_network_syncher.EntityDataAccessor<JavaOptional<j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity>>>;
  readonly FLAG_CROUCHING: 4;
  readonly FLAG_INTERESTED: 8;
  readonly FLAG_POUNCING: 16;
  checkFoxSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Fox>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  isPathClear(arg0: Fox, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
}

/** JVM class net.minecraft.world.entity.animal.Fox$FoxAlertableEntitiesSelector. */
export interface Fox_FoxAlertableEntitiesSelectorMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector];
  test(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_server_level.ServerLevel): boolean;
}
export type Fox_FoxAlertableEntitiesSelector = Fox_FoxAlertableEntitiesSelectorMembers & j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector;
export interface Fox_FoxAlertableEntitiesSelectorStatics {
  new(arg0: Fox): Fox_FoxAlertableEntitiesSelector;
}

/** JVM class net.minecraft.world.entity.animal.Fox$FoxEatBerriesGoal. */
export interface Fox_FoxEatBerriesGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.MoveToBlockGoal];
  acceptedDistance(): number;
  canUse(): boolean;
  shouldRecalculatePath(): boolean;
  start(): void;
  tick(): void;
}
export type Fox_FoxEatBerriesGoal = Fox_FoxEatBerriesGoalMembers & j_net_minecraft_world_entity_ai_goal.MoveToBlockGoal;
export interface Fox_FoxEatBerriesGoalStatics {
  new(arg0: Fox, arg1: number, arg2: number, arg3: number): Fox_FoxEatBerriesGoal;
}

/** JVM class net.minecraft.world.entity.animal.Fox$FoxGroupData. */
export interface Fox_FoxGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData];
  readonly variant: Fox_Variant;
}
export type Fox_FoxGroupData = Fox_FoxGroupDataMembers & j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData;
export interface Fox_FoxGroupDataStatics {
  new(arg0: Fox_Variant): Fox_FoxGroupData;
}

/** JVM class net.minecraft.world.entity.animal.Fox$FoxLookControl. */
export interface Fox_FoxLookControlMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_control.LookControl];
  tick(): void;
}
export type Fox_FoxLookControl = Fox_FoxLookControlMembers & j_net_minecraft_world_entity_ai_control.LookControl;
export interface Fox_FoxLookControlStatics {
  new(arg0: Fox): Fox_FoxLookControl;
}

/** JVM class net.minecraft.world.entity.animal.Fox$FoxPounceGoal. */
export interface Fox_FoxPounceGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.JumpGoal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  isInterruptable(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Fox_FoxPounceGoal = Fox_FoxPounceGoalMembers & j_net_minecraft_world_entity_ai_goal.JumpGoal;
export interface Fox_FoxPounceGoalStatics {
  new(arg0: Fox): Fox_FoxPounceGoal;
}

/** Live JVM enum net.minecraft.world.entity.animal.Fox$Variant; constants are host handles, not strings. */
export type Fox_Variant = JavaEnum<"net.minecraft.world.entity.animal.Fox$Variant", "RED" | "SNOW"> & Fox_VariantMembers;
export interface Fox_VariantMembers {
  getId(): number;
  getSerializedName(): string;
}
export interface Fox_VariantStatics {
  readonly RED: Fox_Variant;
  readonly SNOW: Fox_Variant;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<Fox_Variant>;
  readonly DEFAULT: Fox_Variant;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Fox_Variant>;
  byBiome(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): Fox_Variant;
  byId(arg0: number): Fox_Variant;
  valueOf(arg0: string): Fox_Variant;
  values(): Array<Fox_Variant>;
}

/** JVM class net.minecraft.world.entity.animal.HappyGhast. */
export interface HappyGhastMembers {
  readonly __javaSupertypes?: readonly [Animal];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  canBeCollidedWith(arg0: j_net_minecraft_world_entity.Entity | null): boolean;
  canBreatheUnderwater(): boolean;
  canFallInLove(): boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  getAgeScale(): number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getAmbientSoundInterval(): number;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getControllingPassenger(): j_net_minecraft_world_entity.LivingEntity | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getMaxSpawnClusterSize(): number;
  getQuadLeashHolderOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getVoicePitch(): number;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  isFlyingVehicle(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isLeashHolder(): boolean;
  isOnStillTimeout(): boolean;
  leashElasticDistance(): number;
  leashSnapDistance(): number;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  notifyLeashHolder(arg0: j_net_minecraft_world_entity.Leashable): void;
  onClimbable(): boolean;
  onElasticLeashPull(): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  staysStill(): boolean;
  supportQuadLeashAsHolder(): boolean;
  tick(): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type HappyGhast = HappyGhastMembers & Animal;
export interface HappyGhastStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<HappyGhast>, arg1: j_net_minecraft_world_level.Level): HappyGhast;
  readonly BABY_SCALE: 0.2375;
  readonly FAST_HEALING_TICKS: 20;
  readonly IS_FOOD: JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  readonly LARGE_RESTRICTION_RADIUS: 64;
  readonly MAX_PASSANGERS: 4;
  readonly RESTRICTION_RADIUS_BUFFER: 16;
  readonly SLOW_HEALING_TICKS: 600;
  readonly SMALL_RESTRICTION_RADIUS: 32;
  readonly SPEED_MULTIPLIER_WHEN_PANICKING: 2;
  readonly WANDER_GROUND_DISTANCE: 16;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.HappyGhastAi. */
export interface HappyGhastAiMembers {
}
export type HappyGhastAi = HappyGhastAiMembers;
export interface HappyGhastAiStatics {
  new(): HappyGhastAi;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<HappyGhast>;
  updateActivity(arg0: HappyGhast): void;
}

/** JVM class net.minecraft.world.entity.animal.IronGolem. */
export interface IronGolemMembers {
  readonly __javaSupertypes?: readonly [AbstractGolem, j_net_minecraft_world_entity.NeutralMob];
  aiStep(): void;
  canAttackType(arg0: j_net_minecraft_world_entity.EntityType<object>): boolean;
  canSpawnSprintParticle(): boolean;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  getAttackAnimationTick(): number;
  getCrackiness(): j_net_minecraft_world_entity.Crackiness_Level;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getOfferFlowerTick(): number;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isPlayerCreated(): boolean;
  offerFlower(arg0: boolean): void;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void;
  setPlayerCreated(arg0: boolean): void;
  setRemainingPersistentAngerTime(arg0: number): void;
  startPersistentAngerTimer(): void;
}
export type IronGolem = IronGolemMembers & AbstractGolem & j_net_minecraft_world_entity.NeutralMob;
export interface IronGolemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<IronGolem>, arg1: j_net_minecraft_world_level.Level): IronGolem;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.MushroomCow. */
export interface MushroomCowMembers {
  readonly __javaSupertypes?: readonly [AbstractCow, j_net_minecraft_world_entity.Shearable];
  generateDefaultDrops(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): JavaList<j_net_minecraft_world_item.ItemStack>;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): MushroomCow | null;
  getVariant(): MushroomCow_Variant;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  readyForShearing(): boolean;
  setVariant(arg0: MushroomCow_Variant): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaList<j_net_minecraft_world_item.ItemStack>): void;
  stewEffects: j_net_minecraft_world_item_component.SuspiciousStewEffects | null;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
}
export type MushroomCow = MushroomCowMembers & AbstractCow & j_net_minecraft_world_entity.Shearable;
export interface MushroomCowStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MushroomCow>, arg1: j_net_minecraft_world_level.Level): MushroomCow;
  checkMushroomSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<MushroomCow>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** Live JVM enum net.minecraft.world.entity.animal.MushroomCow$Variant; constants are host handles, not strings. */
export type MushroomCow_Variant = JavaEnum<"net.minecraft.world.entity.animal.MushroomCow$Variant", "BROWN" | "RED"> & MushroomCow_VariantMembers;
export interface MushroomCow_VariantMembers {
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getSerializedName(): string;
}
export interface MushroomCow_VariantStatics {
  readonly BROWN: MushroomCow_Variant;
  readonly RED: MushroomCow_Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MushroomCow_Variant]>;
  readonly DEFAULT: MushroomCow_Variant;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MushroomCow_Variant>;
  valueOf(arg0: string): MushroomCow_Variant;
  values(): Array<MushroomCow_Variant>;
}

/** JVM class net.minecraft.world.entity.animal.Ocelot. */
export interface OcelotMembers {
  readonly __javaSupertypes?: readonly [Animal];
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAmbientSoundInterval(): number;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Ocelot | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  handleEntityEvent(arg0: number): void;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isSteppingCarefully(): boolean;
  isTrusting(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  removeWhenFarAway(arg0: number): boolean;
  setTrusting(arg0: boolean): void;
}
export type Ocelot = OcelotMembers & Animal;
export interface OcelotStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Ocelot>, arg1: j_net_minecraft_world_level.Level): Ocelot;
  readonly CROUCH_SPEED_MOD: 0.6;
  readonly SPRINT_SPEED_MOD: 1.33;
  readonly WALK_SPEED_MOD: 0.8;
  checkOcelotSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Ocelot>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.Panda. */
export interface PandaMembers {
  readonly __javaSupertypes?: readonly [Animal];
  canBeLeashed(): boolean;
  canPerformAction(): boolean;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): boolean;
  eat(arg0: boolean): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getEatCounter(): number;
  getHiddenGene(): Panda_Gene;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getLieOnBackAmount(arg0: number): number;
  getMainGene(): Panda_Gene;
  getRollAmount(arg0: number): number;
  getSitAmount(arg0: number): number;
  getSneezeCounter(): number;
  getUnhappyCounter(): number;
  getVariant(): Panda_Gene;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAggressive(): boolean;
  isBrown(): boolean;
  isEating(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isLazy(): boolean;
  isOnBack(): boolean;
  isPlayful(): boolean;
  isRolling(): boolean;
  isScared(): boolean;
  isSitting(): boolean;
  isSneezing(): boolean;
  isWeak(): boolean;
  isWorried(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  playAttackSound(): void;
  roll(arg0: boolean): void;
  rollCounter: number;
  setAttributes(): void;
  setEatCounter(arg0: number): void;
  setGeneFromParents(arg0: Panda, arg1: Panda | null): void;
  setHiddenGene(arg0: Panda_Gene): void;
  setMainGene(arg0: Panda_Gene): void;
  setOnBack(arg0: boolean): void;
  setSneezeCounter(arg0: number): void;
  setUnhappyCounter(arg0: number): void;
  sit(arg0: boolean): void;
  sneeze(arg0: boolean): void;
  tick(): void;
}
export type Panda = PandaMembers & Animal;
export interface PandaStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Panda>, arg1: j_net_minecraft_world_level.Level): Panda;
  readonly TOTAL_ROLL_STEPS: 32;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** Live JVM enum net.minecraft.world.entity.animal.Panda$Gene; constants are host handles, not strings. */
export type Panda_Gene = JavaEnum<"net.minecraft.world.entity.animal.Panda$Gene", "AGGRESSIVE" | "BROWN" | "LAZY" | "NORMAL" | "PLAYFUL" | "WEAK" | "WORRIED"> & Panda_GeneMembers;
export interface Panda_GeneMembers {
  getId(): number;
  getSerializedName(): string;
  isRecessive(): boolean;
}
export interface Panda_GeneStatics {
  readonly AGGRESSIVE: Panda_Gene;
  readonly BROWN: Panda_Gene;
  readonly LAZY: Panda_Gene;
  readonly NORMAL: Panda_Gene;
  readonly PLAYFUL: Panda_Gene;
  readonly WEAK: Panda_Gene;
  readonly WORRIED: Panda_Gene;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Panda_Gene]>;
  byId(arg0: number): Panda_Gene;
  getRandom(arg0: j_net_minecraft_util.RandomSource): Panda_Gene;
  valueOf(arg0: string): Panda_Gene;
  values(): Array<Panda_Gene>;
}

/** JVM class net.minecraft.world.entity.animal.Parrot. */
export interface ParrotMembers {
  readonly __javaSupertypes?: readonly [ShoulderRidingEntity, FlyingAnimal];
  aiStep(): void;
  canMate(arg0: Animal): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  flap: number;
  flapSpeed: number;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getVariant(): Parrot_Variant;
  getVoicePitch(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isBaby(): boolean;
  isCollidable(arg0: boolean): boolean;
  isFlying(): boolean;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isPartyParrot(): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  oFlap: number;
  oFlapSpeed: number;
  setRecordPlayingNearby(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  setVariant(arg0: Parrot_Variant): void;
}
export type Parrot = ParrotMembers & ShoulderRidingEntity & FlyingAnimal;
export interface ParrotStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Parrot>, arg1: j_net_minecraft_world_level.Level): Parrot;
  checkParrotSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Parrot>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  getAmbient(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_sounds.SoundEvent;
  getPitch(arg0: j_net_minecraft_util.RandomSource): number;
  imitateNearbyMobs(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Entity): boolean;
}

/** Live JVM enum net.minecraft.world.entity.animal.Parrot$Variant; constants are host handles, not strings. */
export type Parrot_Variant = JavaEnum<"net.minecraft.world.entity.animal.Parrot$Variant", "BLUE" | "GRAY" | "GREEN" | "RED_BLUE" | "YELLOW_BLUE"> & Parrot_VariantMembers;
export interface Parrot_VariantMembers {
  getId(): number;
  getSerializedName(): string;
}
export interface Parrot_VariantStatics {
  readonly BLUE: Parrot_Variant;
  readonly GRAY: Parrot_Variant;
  readonly GREEN: Parrot_Variant;
  readonly RED_BLUE: Parrot_Variant;
  readonly YELLOW_BLUE: Parrot_Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Parrot_Variant]>;
  readonly DEFAULT: Parrot_Variant;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Parrot_Variant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Parrot_Variant>;
  byId(arg0: number): Parrot_Variant;
  valueOf(arg0: string): Parrot_Variant;
  values(): Array<Parrot_Variant>;
}

/** JVM class net.minecraft.world.entity.animal.Pig. */
export interface PigMembers {
  readonly __javaSupertypes?: readonly [Animal, j_net_minecraft_world_entity.ItemSteerable];
  boost(): boolean;
  canUseSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Pig | null;
  getControllingPassenger(): j_net_minecraft_world_entity.LivingEntity | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDismountLocationForPassenger(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec3;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getVariant(): j_net_minecraft_core.Holder<PigVariant>;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  setVariant(arg0: j_net_minecraft_core.Holder<PigVariant>): void;
  readonly steering: j_net_minecraft_world_entity.ItemBasedSteering;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
}
export type Pig = PigMembers & Animal & j_net_minecraft_world_entity.ItemSteerable;
export interface PigStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Pig>, arg1: j_net_minecraft_world_level.Level): Pig;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM record net.minecraft.world.entity.animal.PigVariant. */
export interface PigVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>];
  equals(arg0: object): boolean;
  hashCode(): number;
  modelAndTexture(): j_net_minecraft_world_entity_variant.ModelAndTexture<PigVariant_ModelType>;
  selectors(): JavaList<j_net_minecraft_world_entity_variant.PriorityProvider_Selector<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>>;
  spawnConditions(): j_net_minecraft_world_entity_variant.SpawnPrioritySelectors;
  toString(): string;
}
export type PigVariant = PigVariantMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_entity_variant.PriorityProvider<j_net_minecraft_world_entity_variant.SpawnContext, j_net_minecraft_world_entity_variant.SpawnCondition>;
export interface PigVariantStatics {
  new(arg0: j_net_minecraft_world_entity_variant.ModelAndTexture<PigVariant_ModelType>, arg1: j_net_minecraft_world_entity_variant.SpawnPrioritySelectors): PigVariant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<PigVariant>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PigVariant]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PigVariant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<PigVariant>>;
}

/** Live JVM enum net.minecraft.world.entity.animal.PigVariant$ModelType; constants are host handles, not strings. */
export type PigVariant_ModelType = JavaEnum<"net.minecraft.world.entity.animal.PigVariant$ModelType", "COLD" | "NORMAL"> & PigVariant_ModelTypeMembers;
export interface PigVariant_ModelTypeMembers {
  getSerializedName(): string;
}
export interface PigVariant_ModelTypeStatics {
  readonly COLD: PigVariant_ModelType;
  readonly NORMAL: PigVariant_ModelType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PigVariant_ModelType]>;
  valueOf(arg0: string): PigVariant_ModelType;
  values(): Array<PigVariant_ModelType>;
}

/** JVM class net.minecraft.world.entity.animal.PigVariants. */
export interface PigVariantsMembers {
}
export type PigVariants = PigVariantsMembers;
export interface PigVariantsStatics {
  new(): PigVariants;
  readonly COLD: j_net_minecraft_resources.ResourceKey<PigVariant>;
  readonly DEFAULT: j_net_minecraft_resources.ResourceKey<PigVariant>;
  readonly TEMPERATE: j_net_minecraft_resources.ResourceKey<PigVariant>;
  readonly WARM: j_net_minecraft_resources.ResourceKey<PigVariant>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<PigVariant>): void;
}

/** JVM class net.minecraft.world.entity.animal.PolarBear. */
export interface PolarBearMembers {
  readonly __javaSupertypes?: readonly [Animal, j_net_minecraft_world_entity.NeutralMob];
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  getStandingAnimationScale(arg0: number): number;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isStanding(): boolean;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void;
  setRemainingPersistentAngerTime(arg0: number): void;
  setStanding(arg0: boolean): void;
  startPersistentAngerTimer(): void;
  tick(): void;
}
export type PolarBear = PolarBearMembers & Animal & j_net_minecraft_world_entity.NeutralMob;
export interface PolarBearStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<PolarBear>, arg1: j_net_minecraft_world_level.Level): PolarBear;
  checkPolarBearSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<PolarBear>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.Pufferfish. */
export interface PufferfishMembers {
  readonly __javaSupertypes?: readonly [AbstractFish];
  aiStep(): void;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPuffState(): number;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  setPuffState(arg0: number): void;
  tick(): void;
}
export type Pufferfish = PufferfishMembers & AbstractFish;
export interface PufferfishStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Pufferfish>, arg1: j_net_minecraft_world_level.Level): Pufferfish;
  readonly STATE_FULL: 2;
  readonly STATE_MID: 1;
  readonly STATE_SMALL: 0;
}

/** JVM class net.minecraft.world.entity.animal.Rabbit. */
export interface RabbitMembers {
  readonly __javaSupertypes?: readonly [Animal];
  aiStep(): void;
  canSpawnSprintParticle(): boolean;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Rabbit | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getJumpCompletion(arg0: number): number;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getVariant(): Rabbit_Variant;
  handleEntityEvent(arg0: number): void;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  jumpFromGround(): void;
  moreCarrotTicks: number;
  playAttackSound(): void;
  registerGoals(): void;
  setJumping(arg0: boolean): void;
  setSpeedModifier(arg0: number): void;
  setVariant(arg0: Rabbit_Variant): void;
  startJumping(): void;
}
export type Rabbit = RabbitMembers & Animal;
export interface RabbitStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Rabbit>, arg1: j_net_minecraft_world_level.Level): Rabbit;
  readonly ATTACK_SPEED_MOD: 1.4;
  readonly BREED_SPEED_MOD: 0.8;
  readonly FLEE_SPEED_MOD: 2.2;
  readonly FOLLOW_SPEED_MOD: 1;
  readonly STROLL_SPEED_MOD: 0.6;
  checkRabbitSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Rabbit>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.Rabbit$RabbitGroupData. */
export interface Rabbit_RabbitGroupDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData];
  readonly variant: Rabbit_Variant;
}
export type Rabbit_RabbitGroupData = Rabbit_RabbitGroupDataMembers & j_net_minecraft_world_entity.AgeableMob_AgeableMobGroupData;
export interface Rabbit_RabbitGroupDataStatics {
  new(arg0: Rabbit_Variant): Rabbit_RabbitGroupData;
}

/** JVM class net.minecraft.world.entity.animal.Rabbit$RabbitJumpControl. */
export interface Rabbit_RabbitJumpControlMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_control.JumpControl];
  canJump(): boolean;
  setCanJump(arg0: boolean): void;
  tick(): void;
  wantJump(): boolean;
}
export type Rabbit_RabbitJumpControl = Rabbit_RabbitJumpControlMembers & j_net_minecraft_world_entity_ai_control.JumpControl;
export interface Rabbit_RabbitJumpControlStatics {
  new(arg0: Rabbit): Rabbit_RabbitJumpControl;
}

/** Live JVM enum net.minecraft.world.entity.animal.Rabbit$Variant; constants are host handles, not strings. */
export type Rabbit_Variant = JavaEnum<"net.minecraft.world.entity.animal.Rabbit$Variant", "BLACK" | "BROWN" | "EVIL" | "GOLD" | "SALT" | "WHITE" | "WHITE_SPLOTCHED"> & Rabbit_VariantMembers;
export interface Rabbit_VariantMembers {
  getSerializedName(): string;
  id(): number;
}
export interface Rabbit_VariantStatics {
  readonly BLACK: Rabbit_Variant;
  readonly BROWN: Rabbit_Variant;
  readonly EVIL: Rabbit_Variant;
  readonly GOLD: Rabbit_Variant;
  readonly SALT: Rabbit_Variant;
  readonly WHITE: Rabbit_Variant;
  readonly WHITE_SPLOTCHED: Rabbit_Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Rabbit_Variant]>;
  readonly DEFAULT: Rabbit_Variant;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Rabbit_Variant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Rabbit_Variant>;
  byId(arg0: number): Rabbit_Variant;
  valueOf(arg0: string): Rabbit_Variant;
  values(): Array<Rabbit_Variant>;
}

/** JVM class net.minecraft.world.entity.animal.Salmon. */
export interface SalmonMembers {
  readonly __javaSupertypes?: readonly [AbstractSchoolingFish];
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxSchoolSize(): number;
  getSalmonScale(): number;
  getVariant(): Salmon_Variant;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  saveToBucketTag(arg0: j_net_minecraft_world_item.ItemStack): void;
  setVariant(arg0: Salmon_Variant): void;
}
export type Salmon = SalmonMembers & AbstractSchoolingFish;
export interface SalmonStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Salmon>, arg1: j_net_minecraft_world_level.Level): Salmon;
}

/** Live JVM enum net.minecraft.world.entity.animal.Salmon$Variant; constants are host handles, not strings. */
export type Salmon_Variant = JavaEnum<"net.minecraft.world.entity.animal.Salmon$Variant", "LARGE" | "MEDIUM" | "SMALL"> & Salmon_VariantMembers;
export interface Salmon_VariantMembers {
  getSerializedName(): string;
}
export interface Salmon_VariantStatics {
  readonly LARGE: Salmon_Variant;
  readonly MEDIUM: Salmon_Variant;
  readonly SMALL: Salmon_Variant;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<Salmon_Variant>;
  readonly DEFAULT: Salmon_Variant;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Salmon_Variant>;
  valueOf(arg0: string): Salmon_Variant;
  values(): Array<Salmon_Variant>;
}

/** JVM abstract net.minecraft.world.entity.animal.ShoulderRidingEntity. */
export interface ShoulderRidingEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.TamableAnimal];
  canSitOnShoulder(): boolean;
  setEntityOnShoulder(arg0: j_net_minecraft_server_level.ServerPlayer): boolean;
  tick(): void;
}
export type ShoulderRidingEntity = ShoulderRidingEntityMembers & j_net_minecraft_world_entity.TamableAnimal;
export interface ShoulderRidingEntityStatics {
}

/** JVM class net.minecraft.world.entity.animal.SnowGolem. */
export interface SnowGolemMembers {
  readonly __javaSupertypes?: readonly [AbstractGolem, j_net_minecraft_world_entity.Shearable, j_net_minecraft_world_entity_monster.RangedAttackMob];
  aiStep(): void;
  generateDefaultDrops(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): JavaList<j_net_minecraft_world_item.ItemStack>;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  hasPumpkin(): boolean;
  isSensitiveToWater(): boolean;
  performRangedAttack(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  readyForShearing(): boolean;
  setPumpkin(arg0: boolean): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaList<j_net_minecraft_world_item.ItemStack>): void;
}
export type SnowGolem = SnowGolemMembers & AbstractGolem & j_net_minecraft_world_entity.Shearable & j_net_minecraft_world_entity_monster.RangedAttackMob;
export interface SnowGolemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<SnowGolem>, arg1: j_net_minecraft_world_level.Level): SnowGolem;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM class net.minecraft.world.entity.animal.Squid. */
export interface SquidMembers {
  readonly __javaSupertypes?: readonly [AgeableWaterCreature];
  aiStep(): void;
  canBeLeashed(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getSoundVolume(): number;
  handleEntityEvent(arg0: number): void;
  hasMovementVector(): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  oldTentacleAngle: number;
  oldTentacleMovement: number;
  tentacleAngle: number;
  tentacleMovement: number;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  xBodyRot: number;
  xBodyRotO: number;
  zBodyRot: number;
  zBodyRotO: number;
}
export type Squid = SquidMembers & AgeableWaterCreature;
export interface SquidStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Squid>, arg1: j_net_minecraft_world_level.Level): Squid;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM interface net.minecraft.world.entity.animal.TemperatureVariants. */
export interface TemperatureVariantsMembers {
}
export type TemperatureVariants = TemperatureVariantsMembers;
export interface TemperatureVariantsStatics {
  readonly COLD: j_net_minecraft_resources.ResourceLocation;
  readonly TEMPERATE: j_net_minecraft_resources.ResourceLocation;
  readonly WARM: j_net_minecraft_resources.ResourceLocation;
}

/** JVM class net.minecraft.world.entity.animal.TropicalFish. */
export interface TropicalFishMembers {
  readonly __javaSupertypes?: readonly [AbstractSchoolingFish];
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBaseColor(): j_net_minecraft_world_item.DyeColor;
  getBucketItemStack(): j_net_minecraft_world_item.ItemStack;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPackedVariant(): number;
  getPattern(): TropicalFish_Pattern;
  getPatternColor(): j_net_minecraft_world_item.DyeColor;
  isMaxGroupSizeReached(arg0: number): boolean;
  saveToBucketTag(arg0: j_net_minecraft_world_item.ItemStack): void;
  setPackedVariant(arg0: number): void;
}
export type TropicalFish = TropicalFishMembers & AbstractSchoolingFish;
export interface TropicalFishStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<TropicalFish>, arg1: j_net_minecraft_world_level.Level): TropicalFish;
  readonly COMMON_VARIANTS: JavaList<TropicalFish_Variant>;
  readonly DEFAULT_VARIANT: TropicalFish_Variant;
  checkTropicalFishSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<TropicalFish>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  getBaseColor(arg0: number): j_net_minecraft_world_item.DyeColor;
  getPattern(arg0: number): TropicalFish_Pattern;
  getPatternColor(arg0: number): j_net_minecraft_world_item.DyeColor;
  getPredefinedName(arg0: number): string;
}

/** Live JVM enum net.minecraft.world.entity.animal.TropicalFish$Base; constants are host handles, not strings. */
export type TropicalFish_Base = JavaEnum<"net.minecraft.world.entity.animal.TropicalFish$Base", "LARGE" | "SMALL"> & TropicalFish_BaseMembers;
export interface TropicalFish_BaseMembers {
}
export interface TropicalFish_BaseStatics {
  readonly LARGE: TropicalFish_Base;
  readonly SMALL: TropicalFish_Base;
  valueOf(arg0: string): TropicalFish_Base;
  values(): Array<TropicalFish_Base>;
}

/** Live JVM enum net.minecraft.world.entity.animal.TropicalFish$Pattern; constants are host handles, not strings. */
export type TropicalFish_Pattern = JavaEnum<"net.minecraft.world.entity.animal.TropicalFish$Pattern", "BETTY" | "BLOCKFISH" | "BRINELY" | "CLAYFISH" | "DASHER" | "FLOPPER" | "GLITTER" | "KOB" | "SNOOPER" | "SPOTTY" | "STRIPEY" | "SUNSTREAK"> & TropicalFish_PatternMembers;
export interface TropicalFish_PatternMembers {
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  base(): TropicalFish_Base;
  displayName(): j_net_minecraft_network_chat.Component;
  getPackedId(): number;
  getSerializedName(): string;
}
export interface TropicalFish_PatternStatics {
  readonly BETTY: TropicalFish_Pattern;
  readonly BLOCKFISH: TropicalFish_Pattern;
  readonly BRINELY: TropicalFish_Pattern;
  readonly CLAYFISH: TropicalFish_Pattern;
  readonly DASHER: TropicalFish_Pattern;
  readonly FLOPPER: TropicalFish_Pattern;
  readonly GLITTER: TropicalFish_Pattern;
  readonly KOB: TropicalFish_Pattern;
  readonly SNOOPER: TropicalFish_Pattern;
  readonly SPOTTY: TropicalFish_Pattern;
  readonly STRIPEY: TropicalFish_Pattern;
  readonly SUNSTREAK: TropicalFish_Pattern;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TropicalFish_Pattern]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, TropicalFish_Pattern>;
  byId(arg0: number): TropicalFish_Pattern;
  valueOf(arg0: string): TropicalFish_Pattern;
  values(): Array<TropicalFish_Pattern>;
}

/** JVM record net.minecraft.world.entity.animal.TropicalFish$Variant. */
export interface TropicalFish_VariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  baseColor(): j_net_minecraft_world_item.DyeColor;
  equals(arg0: object): boolean;
  getPackedId(): number;
  hashCode(): number;
  pattern(): TropicalFish_Pattern;
  patternColor(): j_net_minecraft_world_item.DyeColor;
  toString(): string;
}
export type TropicalFish_Variant = TropicalFish_VariantMembers & JavaOpaque<"java.lang.Record">;
export interface TropicalFish_VariantStatics {
  new(arg0: number): TropicalFish_Variant;
  new(arg0: TropicalFish_Pattern, arg1: j_net_minecraft_world_item.DyeColor, arg2: j_net_minecraft_world_item.DyeColor): TropicalFish_Variant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TropicalFish_Variant]>;
}

/** JVM class net.minecraft.world.entity.animal.Turtle. */
export interface TurtleMembers {
  readonly __javaSupertypes?: readonly [Animal];
  aiStep(): void;
  canBeLeashed(): boolean;
  canFallInLove(): boolean;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getAgeScale(): number;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAmbientSoundInterval(): number;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  goingHome: boolean;
  hasEgg(): boolean;
  homePos: j_net_minecraft_core.BlockPos;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isLayingEgg(): boolean;
  isPushedByFluid(): boolean;
  setHasEgg(arg0: boolean): void;
  setHomePos(arg0: j_net_minecraft_core.BlockPos): void;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type Turtle = TurtleMembers & Animal;
export interface TurtleStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Turtle>, arg1: j_net_minecraft_world_level.Level): Turtle;
  readonly BABY_ON_LAND_SELECTOR: j_net_minecraft_world_entity_ai_targeting.TargetingConditions_Selector;
  checkTurtleSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<Turtle>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** JVM abstract net.minecraft.world.entity.animal.WaterAnimal. */
export interface WaterAnimalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.PathfinderMob];
  baseTick(): void;
  canBeLeashed(): boolean;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  getAmbientSoundInterval(): number;
  isPushedByFluid(): boolean;
}
export type WaterAnimal = WaterAnimalMembers & j_net_minecraft_world_entity.PathfinderMob;
export interface WaterAnimalStatics {
  readonly AMBIENT_SOUND_INTERVAL: 120;
  checkSurfaceWaterAnimalSpawnRules(arg0: j_net_minecraft_world_entity.EntityType<WaterAnimal>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}
