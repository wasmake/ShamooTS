// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';

/** JVM class net.minecraft.util.monitoring.jmx.MinecraftServerStatistics. */
export interface MinecraftServerStatisticsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"javax.management.DynamicMBean">];
  getAttribute(arg0: string): object | null;
  getAttributes(arg0: Array<string>): JavaOpaque<"javax.management.AttributeList">;
  getMBeanInfo(): JavaOpaque<"javax.management.MBeanInfo">;
  invoke(arg0: string, arg1: Array<object>, arg2: Array<string>): object | null;
  setAttribute(arg0: JavaOpaque<"javax.management.Attribute">): void;
  setAttributes(arg0: JavaOpaque<"javax.management.AttributeList">): JavaOpaque<"javax.management.AttributeList">;
}
export type MinecraftServerStatistics = MinecraftServerStatisticsMembers & JavaOpaque<"javax.management.DynamicMBean">;
export interface MinecraftServerStatisticsStatics {
  registerJmxMonitoring(arg0: j_net_minecraft_server.MinecraftServer): void;
}
