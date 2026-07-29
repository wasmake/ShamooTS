// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util_datafix from './net.minecraft.util.datafix.generated.js';

/** JVM abstract net.minecraft.world.level.saveddata.SavedData. */
export interface SavedDataMembers {
  isDirty(): boolean;
  setDirty(): void;
  setDirty(arg0: boolean): void;
}
export type SavedData = SavedDataMembers;
export interface SavedDataStatics {
}

/** JVM record net.minecraft.world.level.saveddata.SavedData$Context. */
export interface SavedData_ContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): j_net_minecraft_server_level.ServerLevel | null;
  levelOrThrow(): j_net_minecraft_server_level.ServerLevel;
  toString(): string;
  worldSeed(): bigint;
}
export type SavedData_Context = SavedData_ContextMembers & JavaOpaque<"java.lang.Record">;
export interface SavedData_ContextStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel): SavedData_Context;
  new(arg0: j_net_minecraft_server_level.ServerLevel | null, arg1: bigint): SavedData_Context;
}

/** JVM record net.minecraft.world.level.saveddata.SavedDataType. */
export interface SavedDataTypeMembers<T /* extends SavedData */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaFunction<SavedData_Context, JavaOpaque<"com.mojang.serialization.Codec", [T]>>;
  constructor(): JavaFunction<SavedData_Context, T>;
  dataFixType(): j_net_minecraft_util_datafix.DataFixTypes;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  toString(): string;
}
export type SavedDataType<T /* extends SavedData */ = unknown> = SavedDataTypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SavedDataTypeStatics {
  new<T /* extends SavedData */>(arg0: string, arg1: JavaFunction<SavedData_Context, T>, arg2: JavaFunction<SavedData_Context, JavaOpaque<"com.mojang.serialization.Codec", [T]>>, arg3: j_net_minecraft_util_datafix.DataFixTypes): SavedDataType<T>;
  new<T /* extends SavedData */>(arg0: string, arg1: JavaSupplier<T>, arg2: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg3: j_net_minecraft_util_datafix.DataFixTypes): SavedDataType<T>;
}
