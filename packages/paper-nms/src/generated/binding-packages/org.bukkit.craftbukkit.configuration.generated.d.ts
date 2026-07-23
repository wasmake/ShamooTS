// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM class org.bukkit.craftbukkit.configuration.ConfigSerializationUtil. */
export interface ConfigSerializationUtilMembers {
}
export type ConfigSerializationUtil = ConfigSerializationUtilMembers;
export interface ConfigSerializationUtilStatics {
  getHolderSet<T>(arg0: object, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_core.HolderSet<T>;
  getObject<T>(arg0: JavaClass<T>, arg1: JavaMap<object, object>, arg2: string, arg3: boolean): T;
  getString(arg0: JavaMap<object, object>, arg1: string, arg2: boolean): string;
  getUuid(arg0: JavaMap<object, object>, arg1: string, arg2: boolean): JavaOpaque<"java.util.UUID">;
  setHolderSet(arg0: JavaMap<string, object>, arg1: string, arg2: j_net_minecraft_core.HolderSet<object>): void;
}
