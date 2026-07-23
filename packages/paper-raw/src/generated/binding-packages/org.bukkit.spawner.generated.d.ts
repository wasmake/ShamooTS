// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block_spawner from './org.bukkit.block.spawner.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';

/** JVM interface org.bukkit.spawner.BaseSpawner. */
export interface BaseSpawnerMembers {
  addPotentialSpawn(arg0: j_org_bukkit_block_spawner.SpawnerEntry): void;
  addPotentialSpawn(arg0: j_org_bukkit_entity.EntitySnapshot, arg1: number, arg2: j_org_bukkit_block_spawner.SpawnRule): void | null;
  getDelay(): number;
  getPotentialSpawns(): JavaList<j_org_bukkit_block_spawner.SpawnerEntry>;
  getRequiredPlayerRange(): number;
  getSpawnRange(): number;
  getSpawnedEntity(): j_org_bukkit_entity.EntitySnapshot | null;
  getSpawnedType(): j_org_bukkit_entity.EntityType | null;
  setDelay(arg0: number): void;
  setPotentialSpawns(arg0: JavaCollection<j_org_bukkit_block_spawner.SpawnerEntry>): void;
  setRequiredPlayerRange(arg0: number): void;
  setSpawnRange(arg0: number): void;
  setSpawnedEntity(arg0: j_org_bukkit_block_spawner.SpawnerEntry): void;
  setSpawnedEntity(arg0: j_org_bukkit_entity.EntitySnapshot): void | null;
  setSpawnedType(arg0: j_org_bukkit_entity.EntityType): void | null;
}
export type BaseSpawner = BaseSpawnerMembers;
export interface BaseSpawnerStatics {
}

/** JVM interface org.bukkit.spawner.Spawner. */
export interface SpawnerMembers {
  readonly __javaSupertypes?: readonly [BaseSpawner];
  getMaxNearbyEntities(): number;
  getMaxSpawnDelay(): number;
  getMinSpawnDelay(): number;
  getSpawnCount(): number;
  isActivated(): boolean;
  resetTimer(): void;
  setDelay(arg0: number): void;
  setMaxNearbyEntities(arg0: number): void;
  setMaxSpawnDelay(arg0: number): void;
  setMinSpawnDelay(arg0: number): void;
  setSpawnCount(arg0: number): void;
  setSpawnedItem(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type Spawner = SpawnerMembers & BaseSpawner;
export interface SpawnerStatics {
}

/** JVM interface org.bukkit.spawner.TrialSpawnerConfiguration. */
export interface TrialSpawnerConfigurationMembers {
  readonly __javaSupertypes?: readonly [BaseSpawner];
  addPossibleReward(arg0: j_org_bukkit_loot.LootTable, arg1: number): void;
  getAdditionalSimultaneousEntities(): number;
  getAdditionalSpawnsBeforeCooldown(): number;
  getBaseSimultaneousEntities(): number;
  getBaseSpawnsBeforeCooldown(): number;
  getPossibleRewards(): JavaMap<j_org_bukkit_loot.LootTable, number>;
  removePossibleReward(arg0: j_org_bukkit_loot.LootTable): void;
  setAdditionalSimultaneousEntities(arg0: number): void;
  setAdditionalSpawnsBeforeCooldown(arg0: number): void;
  setBaseSimultaneousEntities(arg0: number): void;
  setBaseSpawnsBeforeCooldown(arg0: number): void;
  setPossibleRewards(arg0: JavaMap<j_org_bukkit_loot.LootTable, number>): void;
}
export type TrialSpawnerConfiguration = TrialSpawnerConfigurationMembers & BaseSpawner;
export interface TrialSpawnerConfigurationStatics {
}
