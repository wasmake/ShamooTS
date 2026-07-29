// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_loottable from './com.destroystokyo.paper.loottable.generated.js';
import type * as j_io_papermc_paper_command from './io.papermc.paper.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_spawner from './org.bukkit.spawner.generated.js';

/** JVM interface org.bukkit.entity.minecart.CommandMinecart. */
export interface CommandMinecartMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_command.CommandBlockHolder, j_org_bukkit_entity.Minecart];
  getCommand(): string;
  setCommand(arg0: string | null): void;
  setName(arg0: string | null): void;
}
export type CommandMinecart = CommandMinecartMembers & j_io_papermc_paper_command.CommandBlockHolder & j_org_bukkit_entity.Minecart;
export interface CommandMinecartStatics {
}

/** JVM interface org.bukkit.entity.minecart.ExplosiveMinecart. */
export interface ExplosiveMinecartMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Explosive, j_org_bukkit_entity.Minecart];
  explode(): void;
  explode(arg0: number): void;
  getExplosionSpeedFactor(): number;
  getFuseTicks(): number;
  ignite(): void;
  isIgnited(): boolean;
  setExplosionSpeedFactor(arg0: number): void;
  setFuseTicks(arg0: number): void;
}
export type ExplosiveMinecart = ExplosiveMinecartMembers & j_org_bukkit_entity.Explosive & j_org_bukkit_entity.Minecart;
export interface ExplosiveMinecartStatics {
}

/** JVM interface org.bukkit.entity.minecart.HopperMinecart. */
export interface HopperMinecartMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableEntityInventory, j_org_bukkit_entity.Minecart, j_org_bukkit_inventory.InventoryHolder];
  getPickupCooldown(): number;
  isEnabled(): boolean;
  setEnabled(arg0: boolean): void;
  setPickupCooldown(arg0: number): void;
}
export type HopperMinecart = HopperMinecartMembers & j_com_destroystokyo_paper_loottable.LootableEntityInventory & j_org_bukkit_entity.Minecart & j_org_bukkit_inventory.InventoryHolder;
export interface HopperMinecartStatics {
}

/** JVM interface org.bukkit.entity.minecart.PoweredMinecart. */
export interface PoweredMinecartMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Minecart];
  getFuel(): number;
  getPushX(): number;
  getPushZ(): number;
  setFuel(arg0: number): void;
  setPushX(arg0: number): void;
  setPushZ(arg0: number): void;
}
export type PoweredMinecart = PoweredMinecartMembers & j_org_bukkit_entity.Minecart;
export interface PoweredMinecartStatics {
}

/** JVM interface org.bukkit.entity.minecart.RideableMinecart. */
export interface RideableMinecartMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Minecart];
}
export type RideableMinecart = RideableMinecartMembers & j_org_bukkit_entity.Minecart;
export interface RideableMinecartStatics {
}

/** JVM interface org.bukkit.entity.minecart.SpawnerMinecart. */
export interface SpawnerMinecartMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Minecart, j_org_bukkit_spawner.Spawner];
}
export type SpawnerMinecart = SpawnerMinecartMembers & j_org_bukkit_entity.Minecart & j_org_bukkit_spawner.Spawner;
export interface SpawnerMinecartStatics {
}

/** JVM interface org.bukkit.entity.minecart.StorageMinecart. */
export interface StorageMinecartMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableEntityInventory, j_org_bukkit_entity.Minecart, j_org_bukkit_inventory.InventoryHolder];
}
export type StorageMinecart = StorageMinecartMembers & j_com_destroystokyo_paper_loottable.LootableEntityInventory & j_org_bukkit_entity.Minecart & j_org_bukkit_inventory.InventoryHolder;
export interface StorageMinecartStatics {
}
