// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.server.packs.metadata.MetadataSectionType. */
export interface MetadataSectionTypeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type MetadataSectionType<T = unknown> = MetadataSectionTypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface MetadataSectionTypeStatics {
  new<T>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): MetadataSectionType<T>;
}
