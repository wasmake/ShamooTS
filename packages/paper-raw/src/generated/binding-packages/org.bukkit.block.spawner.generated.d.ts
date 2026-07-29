// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';

/** JVM class org.bukkit.block.spawner.SpawnerEntry. */
export interface SpawnerEntryMembers {
  getEquipment(): SpawnerEntry_Equipment | null;
  getSnapshot(): j_org_bukkit_entity.EntitySnapshot;
  getSpawnRule(): SpawnRule | null;
  getSpawnWeight(): number;
  setEquipment(arg0: SpawnerEntry_Equipment | null): void;
  setSnapshot(arg0: j_org_bukkit_entity.EntitySnapshot): void;
  setSpawnRule(arg0: SpawnRule | null): void;
  setSpawnWeight(arg0: number): void;
}
export type SpawnerEntry = SpawnerEntryMembers;
export interface SpawnerEntryStatics {
  new(arg0: j_org_bukkit_entity.EntitySnapshot, arg1: number, arg2: SpawnRule | null): SpawnerEntry;
  new(arg0: j_org_bukkit_entity.EntitySnapshot, arg1: number, arg2: SpawnRule | null, arg3: SpawnerEntry_Equipment | null): SpawnerEntry;
}

/** JVM class org.bukkit.block.spawner.SpawnerEntry$Equipment. */
export interface SpawnerEntry_EquipmentMembers {
  getDropChances(): JavaMap<j_org_bukkit_inventory.EquipmentSlot, number>;
  getEquipmentLootTable(): j_org_bukkit_loot.LootTable;
  setEquipmentLootTable(arg0: j_org_bukkit_loot.LootTable): void;
}
export type SpawnerEntry_Equipment = SpawnerEntry_EquipmentMembers;
export interface SpawnerEntry_EquipmentStatics {
  new(arg0: j_org_bukkit_loot.LootTable, arg1: JavaMap<j_org_bukkit_inventory.EquipmentSlot, number>): SpawnerEntry_Equipment;
}

/** JVM class org.bukkit.block.spawner.SpawnRule. */
export interface SpawnRuleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">, j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  clone(): SpawnRule;
  equals(arg0: object): boolean;
  getMaxBlockLight(): number;
  getMaxSkyLight(): number;
  getMinBlockLight(): number;
  getMinSkyLight(): number;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
  setMaxBlockLight(arg0: number): void;
  setMaxSkyLight(arg0: number): void;
  setMinBlockLight(arg0: number): void;
  setMinSkyLight(arg0: number): void;
}
export type SpawnRule = SpawnRuleMembers & JavaOpaque<"java.lang.Cloneable"> & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface SpawnRuleStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number): SpawnRule;
  deserialize(arg0: JavaMap<string, object>): SpawnRule;
}
