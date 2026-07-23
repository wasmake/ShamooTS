// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.util.worldupdate.WorldUpgrader. */
export interface WorldUpgraderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  cancel(): void;
  close(): void;
  dimensionProgress(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): number;
  getConverted(): number;
  getProgress(): number;
  getSkipped(): number;
  getStatus(): j_net_minecraft_network_chat.Component;
  getTotalChunks(): number;
  isFinished(): boolean;
  levels(): JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
}
export type WorldUpgrader = WorldUpgraderMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface WorldUpgraderStatics {
  new(arg0: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg1: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg2: j_net_minecraft_world_level_storage.WorldData, arg3: j_net_minecraft_core.RegistryAccess, arg4: boolean, arg5: boolean): WorldUpgrader;
}
