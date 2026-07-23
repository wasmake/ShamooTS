// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM interface org.bukkit.craftbukkit.spawner.PaperSharedSpawnerLogic. */
export interface PaperSharedSpawnerLogicMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.spawner.Spawner">];
  getInternalPosition(): j_net_minecraft_core.BlockPos;
  getInternalWorld(): j_net_minecraft_world_level.Level;
  getRegistryAccess(): j_net_minecraft_core.RegistryAccess;
  getSpawner(): j_net_minecraft_world_level.BaseSpawner;
  isActivated(): boolean;
  resetTimer(): void;
  setNextSpawnData(arg0: j_net_minecraft_world_level.SpawnData): void;
  setSpawnedItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type PaperSharedSpawnerLogic = PaperSharedSpawnerLogicMembers & JavaOpaque<"org.bukkit.spawner.Spawner">;
export interface PaperSharedSpawnerLogicStatics {
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
}
