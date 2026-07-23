// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM interface net.minecraft.world.level.block.entity.trialspawner.PlayerDetector. */
export interface PlayerDetectorMembers {
  detect(arg0: j_net_minecraft_server_level.ServerLevel, arg1: PlayerDetector_EntitySelector, arg2: j_net_minecraft_core.BlockPos, arg3: number, arg4: boolean): JavaList<JavaOpaque<"java.util.UUID">>;
}
export type PlayerDetector = PlayerDetectorMembers;
export interface PlayerDetectorStatics {
  readonly INCLUDING_CREATIVE_PLAYERS: PlayerDetector;
  readonly NO_CREATIVE_PLAYERS: PlayerDetector;
  readonly SHEEP: PlayerDetector;
}

/** JVM interface net.minecraft.world.level.block.entity.trialspawner.PlayerDetector$EntitySelector. */
export interface PlayerDetector_EntitySelectorMembers {
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg2: j_net_minecraft_world_phys.AABB, arg3: JavaPredicate<T>): JavaList<T>;
  getPlayers(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaPredicate<j_net_minecraft_world_entity_player.Player>): JavaList<j_net_minecraft_world_entity_player.Player>;
}
export type PlayerDetector_EntitySelector = PlayerDetector_EntitySelectorMembers;
export interface PlayerDetector_EntitySelectorStatics {
  readonly SELECT_FROM_LEVEL: PlayerDetector_EntitySelector;
  onlySelectPlayer(arg0: j_net_minecraft_world_entity_player.Player): PlayerDetector_EntitySelector;
  onlySelectPlayers(arg0: JavaList<j_net_minecraft_world_entity_player.Player>): PlayerDetector_EntitySelector;
}

/** JVM class net.minecraft.world.level.block.entity.trialspawner.TrialSpawner. */
export interface TrialSpawnerMembers {
  activeConfig(): TrialSpawnerConfig;
  applyOminous(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  canSpawnInLevel(arg0: j_net_minecraft_server_level.ServerLevel): boolean;
  config: TrialSpawner_FullConfig;
  ejectReward(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): void;
  getEntitySelector(): PlayerDetector_EntitySelector;
  getPlayerDetector(): PlayerDetector;
  getRequiredPlayerRange(): number;
  getState(): TrialSpawnerState;
  getStateData(): TrialSpawnerStateData;
  getTargetCooldownLength(): number;
  isOminous: (boolean) & { (): boolean };
  load(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  markUpdated(): void;
  normalConfig(): TrialSpawnerConfig;
  ominousConfig(): TrialSpawnerConfig;
  overrideEntityToSpawn(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.Level): void;
  overridePeacefulAndMobSpawnRule(): void;
  removeOminous(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  setPlayerDetector(arg0: PlayerDetector): void;
  setState(arg0: j_net_minecraft_world_level.Level, arg1: TrialSpawnerState): void;
  spawnMob(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): JavaOptional<JavaOpaque<"java.util.UUID">>;
  readonly stateAccessor: TrialSpawner_StateAccessor;
  store(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  tickClient(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
  tickServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
}
export type TrialSpawner = TrialSpawnerMembers;
export interface TrialSpawnerStatics {
  new(arg0: TrialSpawner_FullConfig, arg1: TrialSpawner_StateAccessor, arg2: PlayerDetector, arg3: PlayerDetector_EntitySelector): TrialSpawner;
  readonly DETECT_PLAYER_SPAWN_BUFFER: 40;
  addBecomeOminousParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  addDetectPlayerParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: number, arg4: j_net_minecraft_core_particles.ParticleOptions): void;
  addEjectItemParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  addSpawnParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: j_net_minecraft_core_particles.SimpleParticleType): void;
}

/** Live JVM enum net.minecraft.world.level.block.entity.trialspawner.TrialSpawner$FlameParticle; constants are host handles, not strings. */
export type TrialSpawner_FlameParticle = JavaEnum<"net.minecraft.world.level.block.entity.trialspawner.TrialSpawner$FlameParticle", "NORMAL" | "OMINOUS"> & TrialSpawner_FlameParticleMembers;
export interface TrialSpawner_FlameParticleMembers {
  encode(): number;
  readonly particleType: j_net_minecraft_core_particles.SimpleParticleType;
}
export interface TrialSpawner_FlameParticleStatics {
  readonly NORMAL: TrialSpawner_FlameParticle;
  readonly OMINOUS: TrialSpawner_FlameParticle;
  decode(arg0: number): TrialSpawner_FlameParticle;
  valueOf(arg0: string): TrialSpawner_FlameParticle;
  values(): Array<TrialSpawner_FlameParticle>;
}

/** JVM record net.minecraft.world.level.block.entity.trialspawner.TrialSpawner$FullConfig. */
export interface TrialSpawner_FullConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  normal(): j_net_minecraft_core.Holder<TrialSpawnerConfig>;
  ominous(): j_net_minecraft_core.Holder<TrialSpawnerConfig>;
  overrideConfigs(arg0: j_net_minecraft_core.Holder<TrialSpawnerConfig>, arg1: j_net_minecraft_core.Holder<TrialSpawnerConfig>): TrialSpawner_FullConfig;
  overrideEntity(arg0: j_net_minecraft_world_entity.EntityType<object>): TrialSpawner_FullConfig;
  overrideRequiredPlayerRange(arg0: number): TrialSpawner_FullConfig;
  overrideTargetCooldownLength(arg0: number): TrialSpawner_FullConfig;
  requiredPlayerRange(): number;
  targetCooldownLength(): number;
  toString(): string;
}
export type TrialSpawner_FullConfig = TrialSpawner_FullConfigMembers & JavaOpaque<"java.lang.Record">;
export interface TrialSpawner_FullConfigStatics {
  new(arg0: j_net_minecraft_core.Holder<TrialSpawnerConfig>, arg1: j_net_minecraft_core.Holder<TrialSpawnerConfig>, arg2: number, arg3: number): TrialSpawner_FullConfig;
  readonly DEFAULT: TrialSpawner_FullConfig;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrialSpawner_FullConfig]>;
}

/** JVM interface net.minecraft.world.level.block.entity.trialspawner.TrialSpawner$StateAccessor. */
export interface TrialSpawner_StateAccessorMembers {
  getState(): TrialSpawnerState;
  markUpdated(): void;
  setState(arg0: j_net_minecraft_world_level.Level, arg1: TrialSpawnerState): void;
}
export type TrialSpawner_StateAccessor = TrialSpawner_StateAccessorMembers;
export interface TrialSpawner_StateAccessorStatics {
}

/** JVM record net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerConfig. */
export interface TrialSpawnerConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  calculateTargetSimultaneousMobs(arg0: number): number;
  calculateTargetTotalMobs(arg0: number): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  itemsToDropWhenOminous(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  lootTablesToEject(): j_net_minecraft_util_random.WeightedList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  simultaneousMobs(): number;
  simultaneousMobsAddedPerPlayer(): number;
  spawnPotentialsDefinition(): j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level.SpawnData>;
  spawnRange(): number;
  ticksBetweenItemSpawners(): bigint;
  ticksBetweenSpawn(): number;
  toString(): string;
  totalMobs(): number;
  totalMobsAddedPerPlayer(): number;
  withSpawning(arg0: j_net_minecraft_world_entity.EntityType<object>): TrialSpawnerConfig;
}
export type TrialSpawnerConfig = TrialSpawnerConfigMembers & JavaOpaque<"java.lang.Record">;
export interface TrialSpawnerConfigStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level.SpawnData>, arg7: j_net_minecraft_util_random.WeightedList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>, arg8: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): TrialSpawnerConfig;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<TrialSpawnerConfig>]>;
  readonly DEFAULT: TrialSpawnerConfig;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TrialSpawnerConfig]>;
  builder(): TrialSpawnerConfig_Builder;
}

/** JVM class net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerConfig$Builder. */
export interface TrialSpawnerConfig_BuilderMembers {
  build(): TrialSpawnerConfig;
  itemsToDropWhenOminous(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): TrialSpawnerConfig_Builder;
  lootTablesToEject(arg0: j_net_minecraft_util_random.WeightedList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>): TrialSpawnerConfig_Builder;
  simultaneousMobs(arg0: number): TrialSpawnerConfig_Builder;
  simultaneousMobsAddedPerPlayer(arg0: number): TrialSpawnerConfig_Builder;
  spawnPotentialsDefinition(arg0: j_net_minecraft_util_random.WeightedList<j_net_minecraft_world_level.SpawnData>): TrialSpawnerConfig_Builder;
  spawnRange(arg0: number): TrialSpawnerConfig_Builder;
  ticksBetweenSpawn(arg0: number): TrialSpawnerConfig_Builder;
  totalMobs(arg0: number): TrialSpawnerConfig_Builder;
  totalMobsAddedPerPlayer(arg0: number): TrialSpawnerConfig_Builder;
}
export type TrialSpawnerConfig_Builder = TrialSpawnerConfig_BuilderMembers;
export interface TrialSpawnerConfig_BuilderStatics {
  new(): TrialSpawnerConfig_Builder;
}

/** JVM class net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerConfigs. */
export interface TrialSpawnerConfigsMembers {
}
export type TrialSpawnerConfigs = TrialSpawnerConfigsMembers;
export interface TrialSpawnerConfigsStatics {
  new(): TrialSpawnerConfigs;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<TrialSpawnerConfig>): void;
}

/** Live JVM enum net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerState; constants are host handles, not strings. */
export type TrialSpawnerState = JavaEnum<"net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerState", "ACTIVE" | "COOLDOWN" | "EJECTING_REWARD" | "INACTIVE" | "WAITING_FOR_PLAYERS" | "WAITING_FOR_REWARD_EJECTION"> & TrialSpawnerStateMembers;
export interface TrialSpawnerStateMembers {
  emitParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
  getSerializedName(): string;
  hasSpinningMob(): boolean;
  isCapableOfSpawning(): boolean;
  lightLevel(): number;
  spinningMobSpeed(): number;
}
export interface TrialSpawnerStateStatics {
  readonly ACTIVE: TrialSpawnerState;
  readonly COOLDOWN: TrialSpawnerState;
  readonly EJECTING_REWARD: TrialSpawnerState;
  readonly INACTIVE: TrialSpawnerState;
  readonly WAITING_FOR_PLAYERS: TrialSpawnerState;
  readonly WAITING_FOR_REWARD_EJECTION: TrialSpawnerState;
  valueOf(arg0: string): TrialSpawnerState;
  values(): Array<TrialSpawnerState>;
}

/** JVM class net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerStateData. */
export interface TrialSpawnerStateDataMembers {
  apply(arg0: TrialSpawnerStateData_Packed): void;
  cooldownEndsAt: bigint;
  countAdditionalPlayers(arg0: j_net_minecraft_core.BlockPos): number;
  readonly currentMobs: JavaSet<JavaOpaque<"java.util.UUID">>;
  readonly detectedPlayers: JavaSet<JavaOpaque<"java.util.UUID">>;
  getOSpin(): number;
  getOrCreateDisplayEntity(arg0: TrialSpawner, arg1: j_net_minecraft_world_level.Level, arg2: TrialSpawnerState): j_net_minecraft_world_entity.Entity | null;
  getOrCreateNextSpawnData(arg0: TrialSpawner, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_world_level.SpawnData;
  getSpin(): number;
  getUpdateTag(arg0: TrialSpawnerState): j_net_minecraft_nbt.CompoundTag;
  hasFinishedSpawningAllMobs(arg0: TrialSpawnerConfig, arg1: number): boolean;
  hasMobToSpawn(arg0: TrialSpawner, arg1: j_net_minecraft_util.RandomSource): boolean;
  haveAllCurrentMobsDied(): boolean;
  isCooldownFinished(arg0: j_net_minecraft_server_level.ServerLevel): boolean;
  isReadyToEjectItems(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number): boolean;
  isReadyToOpenShutter(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number): boolean;
  isReadyToSpawnNextMob(arg0: j_net_minecraft_server_level.ServerLevel, arg1: TrialSpawnerConfig, arg2: number): boolean;
  nextMobSpawnsAt: bigint;
  nextSpawnData: JavaOptional<j_net_minecraft_world_level.SpawnData>;
  pack(): TrialSpawnerStateData_Packed;
  reset(): void;
  resetAfterBecomingOminous(arg0: TrialSpawner, arg1: j_net_minecraft_server_level.ServerLevel): void;
  resetStatistics(): void;
  tryDetectPlayers(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: TrialSpawner): void;
}
export type TrialSpawnerStateData = TrialSpawnerStateDataMembers;
export interface TrialSpawnerStateDataStatics {
  new(): TrialSpawnerStateData;
}

/** JVM record net.minecraft.world.level.block.entity.trialspawner.TrialSpawnerStateData$Packed. */
export interface TrialSpawnerStateData_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  cooldownEndsAt(): bigint;
  currentMobs(): JavaSet<JavaOpaque<"java.util.UUID">>;
  detectedPlayers(): JavaSet<JavaOpaque<"java.util.UUID">>;
  ejectingLootTable(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  nextMobSpawnsAt(): bigint;
  nextSpawnData(): JavaOptional<j_net_minecraft_world_level.SpawnData>;
  toString(): string;
  totalMobsSpawned(): number;
}
export type TrialSpawnerStateData_Packed = TrialSpawnerStateData_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface TrialSpawnerStateData_PackedStatics {
  new(arg0: JavaSet<JavaOpaque<"java.util.UUID">>, arg1: JavaSet<JavaOpaque<"java.util.UUID">>, arg2: bigint, arg3: bigint, arg4: number, arg5: JavaOptional<j_net_minecraft_world_level.SpawnData>, arg6: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>): TrialSpawnerStateData_Packed;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrialSpawnerStateData_Packed]>;
}
