// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_animal_armadillo from './net.minecraft.world.entity.animal.armadillo.generated.js';
import type * as j_net_minecraft_world_entity_monster_breeze from './net.minecraft.world.entity.monster.breeze.generated.js';
import type * as j_net_minecraft_world_entity_monster_hoglin from './net.minecraft.world.entity.monster.hoglin.generated.js';
import type * as j_net_minecraft_world_entity_monster_warden from './net.minecraft.world.entity.monster.warden.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';

/** JVM class net.minecraft.world.entity.ai.sensing.AdultSensor. */
export interface AdultSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
  setNearestVisibleAdult(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity_ai_memory.NearestVisibleLivingEntities): void;
}
export type AdultSensor = AdultSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface AdultSensorStatics {
  new(): AdultSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.AdultSensorAnyType. */
export interface AdultSensorAnyTypeMembers {
  readonly __javaSupertypes?: readonly [AdultSensor];
  setNearestVisibleAdult(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity_ai_memory.NearestVisibleLivingEntities): void;
}
export type AdultSensorAnyType = AdultSensorAnyTypeMembers & AdultSensor;
export interface AdultSensorAnyTypeStatics {
  new(): AdultSensorAnyType;
}

/** JVM class net.minecraft.world.entity.ai.sensing.AxolotlAttackablesSensor. */
export interface AxolotlAttackablesSensorMembers {
  readonly __javaSupertypes?: readonly [NearestVisibleLivingEntitySensor];
  getMemory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  isMatchingEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
}
export type AxolotlAttackablesSensor = AxolotlAttackablesSensorMembers & NearestVisibleLivingEntitySensor;
export interface AxolotlAttackablesSensorStatics {
  new(): AxolotlAttackablesSensor;
  readonly TARGET_DETECTION_DISTANCE: 8;
}

/** JVM class net.minecraft.world.entity.ai.sensing.BreezeAttackEntitySensor. */
export interface BreezeAttackEntitySensorMembers {
  readonly __javaSupertypes?: readonly [NearestLivingEntitySensor<j_net_minecraft_world_entity_monster_breeze.Breeze>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_breeze.Breeze): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type BreezeAttackEntitySensor = BreezeAttackEntitySensorMembers & NearestLivingEntitySensor<j_net_minecraft_world_entity_monster_breeze.Breeze>;
export interface BreezeAttackEntitySensorStatics {
  new(): BreezeAttackEntitySensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.DummySensor. */
export interface DummySensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type DummySensor = DummySensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface DummySensorStatics {
  new(): DummySensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.FrogAttackablesSensor. */
export interface FrogAttackablesSensorMembers {
  readonly __javaSupertypes?: readonly [NearestVisibleLivingEntitySensor];
  getMemory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  isMatchingEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
}
export type FrogAttackablesSensor = FrogAttackablesSensorMembers & NearestVisibleLivingEntitySensor;
export interface FrogAttackablesSensorStatics {
  new(): FrogAttackablesSensor;
  readonly TARGET_DETECTION_DISTANCE: 10;
}

/** JVM class net.minecraft.world.entity.ai.sensing.GolemSensor. */
export interface GolemSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type GolemSensor = GolemSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface GolemSensorStatics {
  new(): GolemSensor;
  new(arg0: number): GolemSensor;
  checkForNearbyGolem(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  golemDetected(arg0: j_net_minecraft_world_entity.LivingEntity): void;
}

/** JVM class net.minecraft.world.entity.ai.sensing.HoglinSpecificSensor. */
export interface HoglinSpecificSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity_monster_hoglin.Hoglin>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_hoglin.Hoglin): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type HoglinSpecificSensor = HoglinSpecificSensorMembers & Sensor<j_net_minecraft_world_entity_monster_hoglin.Hoglin>;
export interface HoglinSpecificSensorStatics {
  new(): HoglinSpecificSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.HurtBySensor. */
export interface HurtBySensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type HurtBySensor = HurtBySensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface HurtBySensorStatics {
  new(): HurtBySensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.IsInWaterSensor. */
export interface IsInWaterSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type IsInWaterSensor = IsInWaterSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface IsInWaterSensorStatics {
  new(): IsInWaterSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.MobSensor. */
export interface MobSensorMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [Sensor<T>];
  checkForMobsNearby(arg0: T): void;
  clearMemory(arg0: T): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: T): void;
  mobDetected(arg0: T): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type MobSensor<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = MobSensorMembers<T> & Sensor<T>;
export interface MobSensorStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: number, arg1: JavaOpaque<"java.util.function.BiPredicate", [T, j_net_minecraft_world_entity.LivingEntity]>, arg2: JavaPredicate<T>, arg3: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<boolean>, arg4: number): MobSensor<T>;
}

/** JVM class net.minecraft.world.entity.ai.sensing.NearestBedSensor. */
export interface NearestBedSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.Mob>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Mob): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type NearestBedSensor = NearestBedSensorMembers & Sensor<j_net_minecraft_world_entity.Mob>;
export interface NearestBedSensorStatics {
  new(): NearestBedSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.NearestItemSensor. */
export interface NearestItemSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.Mob>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Mob): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type NearestItemSensor = NearestItemSensorMembers & Sensor<j_net_minecraft_world_entity.Mob>;
export interface NearestItemSensorStatics {
  new(): NearestItemSensor;
  readonly MAX_DISTANCE_TO_WANTED_ITEM: 32;
}

/** JVM class net.minecraft.world.entity.ai.sensing.NearestLivingEntitySensor. */
export interface NearestLivingEntitySensorMembers<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [Sensor<T>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: T): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type NearestLivingEntitySensor<T /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = NearestLivingEntitySensorMembers<T> & Sensor<T>;
export interface NearestLivingEntitySensorStatics {
  new<T /* extends j_net_minecraft_world_entity.LivingEntity */>(): NearestLivingEntitySensor<T>;
}

/** JVM abstract net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor. */
export interface NearestVisibleLivingEntitySensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  getMemory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  getVisibleEntities(arg0: j_net_minecraft_world_entity.LivingEntity): JavaOptional<j_net_minecraft_world_entity_ai_memory.NearestVisibleLivingEntities>;
  isMatchingEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type NearestVisibleLivingEntitySensor = NearestVisibleLivingEntitySensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface NearestVisibleLivingEntitySensorStatics {
  new(): NearestVisibleLivingEntitySensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.PiglinBruteSpecificSensor. */
export interface PiglinBruteSpecificSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type PiglinBruteSpecificSensor = PiglinBruteSpecificSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface PiglinBruteSpecificSensorStatics {
  new(): PiglinBruteSpecificSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.PiglinSpecificSensor. */
export interface PiglinSpecificSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type PiglinSpecificSensor = PiglinSpecificSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface PiglinSpecificSensorStatics {
  new(): PiglinSpecificSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.PlayerSensor. */
export interface PlayerSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  getFollowDistance(arg0: j_net_minecraft_world_entity.LivingEntity): number;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type PlayerSensor = PlayerSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface PlayerSensorStatics {
  new(): PlayerSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.SecondaryPoiSensor. */
export interface SecondaryPoiSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity_npc.Villager>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_npc.Villager): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type SecondaryPoiSensor = SecondaryPoiSensorMembers & Sensor<j_net_minecraft_world_entity_npc.Villager>;
export interface SecondaryPoiSensorStatics {
  new(): SecondaryPoiSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.Sensing. */
export interface SensingMembers {
  hasLineOfSight(arg0: j_net_minecraft_world_entity.Entity): boolean;
  tick(): void;
}
export type Sensing = SensingMembers;
export interface SensingStatics {
  new(arg0: j_net_minecraft_world_entity.Mob): Sensing;
}

/** JVM abstract net.minecraft.world.entity.ai.sensing.Sensor. */
export interface SensorMembers<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> {
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): void;
}
export type Sensor<E /* extends j_net_minecraft_world_entity.LivingEntity */ = unknown> = SensorMembers<E>;
export interface SensorStatics {
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(): Sensor<E>;
  new<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: number): Sensor<E>;
  isEntityAttackable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  isEntityAttackableIgnoringLineOfSight(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  isEntityTargetable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  wasEntityAttackableLastNTicks(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_server_level.ServerLevel, j_net_minecraft_world_entity.LivingEntity]>;
}

/** JVM class net.minecraft.world.entity.ai.sensing.SensorType. */
export interface SensorTypeMembers<U /* extends Sensor<object> */ = unknown> {
  create(): U;
}
export type SensorType<U /* extends Sensor<object> */ = unknown> = SensorTypeMembers<U>;
export interface SensorTypeStatics {
  readonly ARMADILLO_SCARE_DETECTED: SensorType<MobSensor<j_net_minecraft_world_entity_animal_armadillo.Armadillo>>;
  readonly ARMADILLO_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly AXOLOTL_ATTACKABLES: SensorType<AxolotlAttackablesSensor>;
  readonly AXOLOTL_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly BREEZE_ATTACK_ENTITY_SENSOR: SensorType<BreezeAttackEntitySensor>;
  readonly CAMEL_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly DUMMY: SensorType<DummySensor>;
  readonly FROG_ATTACKABLES: SensorType<FrogAttackablesSensor>;
  readonly FROG_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly GOAT_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly GOLEM_DETECTED: SensorType<GolemSensor>;
  readonly HAPPY_GHAST_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly HOGLIN_SPECIFIC_SENSOR: SensorType<HoglinSpecificSensor>;
  readonly HURT_BY: SensorType<HurtBySensor>;
  readonly IS_IN_WATER: SensorType<IsInWaterSensor>;
  readonly NEAREST_ADULT: SensorType<AdultSensor>;
  readonly NEAREST_ADULT_ANY_TYPE: SensorType<AdultSensor>;
  readonly NEAREST_BED: SensorType<NearestBedSensor>;
  readonly NEAREST_ITEMS: SensorType<NearestItemSensor>;
  readonly NEAREST_LIVING_ENTITIES: SensorType<NearestLivingEntitySensor<j_net_minecraft_world_entity.LivingEntity>>;
  readonly NEAREST_PLAYERS: SensorType<PlayerSensor>;
  readonly PIGLIN_BRUTE_SPECIFIC_SENSOR: SensorType<PiglinBruteSpecificSensor>;
  readonly PIGLIN_SPECIFIC_SENSOR: SensorType<PiglinSpecificSensor>;
  readonly SECONDARY_POIS: SensorType<SecondaryPoiSensor>;
  readonly SNIFFER_TEMPTATIONS: SensorType<TemptingSensor>;
  readonly VILLAGER_BABIES: SensorType<VillagerBabiesSensor>;
  readonly VILLAGER_HOSTILES: SensorType<VillagerHostilesSensor>;
  readonly WARDEN_ENTITY_SENSOR: SensorType<WardenEntitySensor>;
}

/** JVM class net.minecraft.world.entity.ai.sensing.TemptingSensor. */
export interface TemptingSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.PathfinderMob>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.PathfinderMob): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type TemptingSensor = TemptingSensorMembers & Sensor<j_net_minecraft_world_entity.PathfinderMob>;
export interface TemptingSensorStatics {
  new(arg0: JavaPredicate<j_net_minecraft_world_item.ItemStack>): TemptingSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.VillagerBabiesSensor. */
export interface VillagerBabiesSensorMembers {
  readonly __javaSupertypes?: readonly [Sensor<j_net_minecraft_world_entity.LivingEntity>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type VillagerBabiesSensor = VillagerBabiesSensorMembers & Sensor<j_net_minecraft_world_entity.LivingEntity>;
export interface VillagerBabiesSensorStatics {
  new(): VillagerBabiesSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.VillagerHostilesSensor. */
export interface VillagerHostilesSensorMembers {
  readonly __javaSupertypes?: readonly [NearestVisibleLivingEntitySensor];
  getMemory(): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_world_entity.LivingEntity>;
  isMatchingEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
}
export type VillagerHostilesSensor = VillagerHostilesSensorMembers & NearestVisibleLivingEntitySensor;
export interface VillagerHostilesSensorStatics {
  new(): VillagerHostilesSensor;
}

/** JVM class net.minecraft.world.entity.ai.sensing.WardenEntitySensor. */
export interface WardenEntitySensorMembers {
  readonly __javaSupertypes?: readonly [NearestLivingEntitySensor<j_net_minecraft_world_entity_monster_warden.Warden>];
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  doTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_monster_warden.Warden): void;
  requires(): JavaSet<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<object>>;
}
export type WardenEntitySensor = WardenEntitySensorMembers & NearestLivingEntitySensor<j_net_minecraft_world_entity_monster_warden.Warden>;
export interface WardenEntitySensorStatics {
  new(): WardenEntitySensor;
}
