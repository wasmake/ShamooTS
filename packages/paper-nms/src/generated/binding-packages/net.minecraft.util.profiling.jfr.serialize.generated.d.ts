// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_profiling_jfr_parse from './net.minecraft.util.profiling.jfr.parse.generated.js';

/** JVM class net.minecraft.util.profiling.jfr.serialize.JfrResultJsonSerializer. */
export interface JfrResultJsonSerializerMembers {
  format(arg0: j_net_minecraft_util_profiling_jfr_parse.JfrStatsResult): string;
}
export type JfrResultJsonSerializer = JfrResultJsonSerializerMembers;
export interface JfrResultJsonSerializerStatics {
  new(): JfrResultJsonSerializer;
}
