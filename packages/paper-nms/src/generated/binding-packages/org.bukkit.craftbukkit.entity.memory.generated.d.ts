// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';

/** JVM class org.bukkit.craftbukkit.entity.memory.CraftMemoryKey. */
export interface CraftMemoryKeyMembers {
}
export type CraftMemoryKey = CraftMemoryKeyMembers;
export interface CraftMemoryKeyStatics {
  bukkitToMinecraft<T, U>(arg0: JavaOpaque<"org.bukkit.entity.memory.MemoryKey", [T]>): j_net_minecraft_world_entity_ai_memory.MemoryModuleType<U>;
  minecraftToBukkit<T, U>(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<T>): JavaOpaque<"org.bukkit.entity.memory.MemoryKey", [U]>;
}

/** JVM class org.bukkit.craftbukkit.entity.memory.CraftMemoryMapper. */
export interface CraftMemoryMapperMembers {
}
export type CraftMemoryMapper = CraftMemoryMapperMembers;
export interface CraftMemoryMapperStatics {
  fromNms(arg0: object): object;
  toNms(arg0: object): object;
}
