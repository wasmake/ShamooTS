// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_ai_targeting from './net.minecraft.world.entity.ai.targeting.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_org_bukkit_craftbukkit_persistence from './org.bukkit.craftbukkit.persistence.generated.js';

/** JVM class net.minecraft.world.entity.raid.Raid. */
export interface RaidMembers {
  absorbRaidOmen(arg0: j_net_minecraft_server_level.ServerPlayer): boolean;
  addHeroOfTheVillage(arg0: j_net_minecraft_world_entity.Entity): void;
  addWaveMob(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: Raider, arg3: boolean): boolean;
  getAllRaiders(): JavaSet<Raider>;
  getCenter(): j_net_minecraft_core.BlockPos;
  getEnchantOdds(): number;
  getGroupsSpawned(): number;
  getHealthOfLivingRaiders(): number;
  getLeader(arg0: number): Raider | null;
  getMaxRaidOmenLevel(): number;
  getNumGroups(arg0: j_net_minecraft_world.Difficulty): number;
  getRaidOmenLevel(): number;
  getRaiders(): JavaCollection<Raider>;
  getTotalHealth(): number;
  getTotalRaidersAlive(): number;
  hasFirstWaveSpawned(): boolean;
  readonly heroesOfTheVillage: JavaSet<JavaOpaque<"java.util.UUID">>;
  idOrNegativeOne: number;
  isActive(): boolean;
  isBetweenWaves(): boolean;
  isInProgress(): boolean;
  isLoss(): boolean;
  isOver(): boolean;
  isStarted(): boolean;
  isStopped(): boolean;
  isVictory(): boolean;
  joinRaid(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: Raider, arg3: j_net_minecraft_core.BlockPos | null, arg4: boolean): void | null;
  readonly numGroups: number;
  readonly persistentDataContainer: j_org_bukkit_craftbukkit_persistence.CraftPersistentDataContainer;
  readonly raidEvent: j_net_minecraft_server_level.ServerBossEvent;
  raidOmenLevel: number;
  removeFromRaid(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Raider, arg2: boolean): void;
  removeLeader(arg0: number): void;
  setLeader(arg0: number, arg1: Raider): void;
  setRaidOmenLevel(arg0: number): void;
  stop(): void;
  tick(arg0: j_net_minecraft_server_level.ServerLevel): void;
  ticksActive: bigint;
  totalHealth: number;
  updateBossbar(): void;
}
export type Raid = RaidMembers;
export interface RaidStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world.Difficulty): Raid;
  readonly DEFAULT_MAX_RAID_OMEN_LEVEL: 5;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Raid]>;
  readonly MAX_CELEBRATION_TICKS: 600;
  readonly MAX_NO_ACTION_TIME: 2400;
  readonly RAID_REMOVAL_THRESHOLD_SQR: 12544;
  readonly RAVAGER_SPAWN_PLACEMENT_TYPE: j_net_minecraft_world_entity.SpawnPlacementType;
  readonly TICKS_PER_DAY: 24000;
  readonly VALID_RAID_RADIUS_SQR: 9216;
  readonly VILLAGE_RADIUS_BUFFER: 16;
  getOminousBannerInstance(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block_entity.BannerPattern>): j_net_minecraft_world_item.ItemStack;
}

/** JVM abstract net.minecraft.world.entity.raid.Raider. */
export interface RaiderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_monster.PatrollingMonster];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  applyRaidBuffs(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  canJoinPatrol(): boolean;
  canJoinRaid(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  getCelebrateSound(): j_net_minecraft_sounds.SoundEvent;
  getCurrentRaid(): Raid | null;
  getTicksOutsideRaid(): number;
  getWave(): number;
  hasActiveRaid(): boolean;
  hasRaid(): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isCaptain(): boolean;
  isCelebrating(): boolean;
  pickUpItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_item.ItemEntity): void;
  raid: Raid | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerGoals(): void;
  removeWhenFarAway(arg0: number): boolean;
  requiresCustomPersistence(): boolean;
  setCanJoinRaid(arg0: boolean): void;
  setCelebrating(arg0: boolean): void;
  setCurrentRaid(arg0: Raid | null): void | null;
  setTicksOutsideRaid(arg0: number): void;
  setWave(arg0: number): void;
  updateNoActionTime(): void;
}
export type Raider = RaiderMembers & j_net_minecraft_world_entity_monster.PatrollingMonster;
export interface RaiderStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Raider>, arg1: j_net_minecraft_world_level.Level): Raider;
  readonly IS_CELEBRATING: j_net_minecraft_network_syncher.EntityDataAccessor<boolean>;
}

/** JVM class net.minecraft.world.entity.raid.Raider$HoldGroundAttackGoal. */
export interface Raider_HoldGroundAttackGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  requiresUpdateEveryTick(): boolean;
  readonly shoutTargeting: j_net_minecraft_world_entity_ai_targeting.TargetingConditions;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Raider_HoldGroundAttackGoal = Raider_HoldGroundAttackGoalMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface Raider_HoldGroundAttackGoalStatics {
  new(arg0: j_net_minecraft_world_entity_monster.AbstractIllager, arg1: number): Raider_HoldGroundAttackGoal;
}

/** JVM class net.minecraft.world.entity.raid.Raider$ObtainRaidLeaderBannerGoal. */
export interface Raider_ObtainRaidLeaderBannerGoalMembers<T /* extends Raider */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canContinueToUse(): boolean;
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Raider_ObtainRaidLeaderBannerGoal<T /* extends Raider */ = unknown> = Raider_ObtainRaidLeaderBannerGoalMembers<T> & j_net_minecraft_world_entity_ai_goal.Goal;
export interface Raider_ObtainRaidLeaderBannerGoalStatics {
  new<T /* extends Raider */>(arg0: Raider, arg1: T): Raider_ObtainRaidLeaderBannerGoal<T>;
}

/** JVM class net.minecraft.world.entity.raid.Raider$RaiderCelebration. */
export interface Raider_RaiderCelebrationMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.Goal];
  canUse(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Raider_RaiderCelebration = Raider_RaiderCelebrationMembers & j_net_minecraft_world_entity_ai_goal.Goal;
export interface Raider_RaiderCelebrationStatics {
}

/** JVM class net.minecraft.world.entity.raid.Raids. */
export interface RaidsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData];
  createOrExtendRaid(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_core.BlockPos): Raid | null;
  get(arg0: number): Raid | null;
  getId(arg0: Raid): JavaOptionalNumber;
  getNearbyRaid(arg0: j_net_minecraft_core.BlockPos, arg1: number): Raid | null;
  readonly raidMap: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [Raid]>;
  tick(arg0: j_net_minecraft_server_level.ServerLevel): void;
}
export type Raids = RaidsMembers & j_net_minecraft_world_level_saveddata.SavedData;
export interface RaidsStatics {
  new(): Raids;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Raids]>;
  readonly TYPE: j_net_minecraft_world_level_saveddata.SavedDataType<Raids>;
  readonly TYPE_END: j_net_minecraft_world_level_saveddata.SavedDataType<Raids>;
  canJoinRaid(arg0: Raider): boolean;
  getType(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_dimension.DimensionType>): j_net_minecraft_world_level_saveddata.SavedDataType<Raids>;
  load(arg0: j_net_minecraft_nbt.CompoundTag): Raids;
}
