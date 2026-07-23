// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';

/** JVM class net.minecraft.util.datafix.DataFixers. */
export interface DataFixersMembers {
}
export type DataFixers = DataFixersMembers;
export interface DataFixersStatics {
  readonly BLENDING_VERSION: 4295;
  getDataFixer(): JavaOpaque<"com.mojang.datafixers.DataFixer">;
  optimize(arg0: JavaSet<JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">>): PromiseLike<object>;
}

/** Live JVM enum net.minecraft.util.datafix.DataFixTypes; constants are host handles, not strings. */
export type DataFixTypes = JavaEnum<"net.minecraft.util.datafix.DataFixTypes", "ADVANCEMENTS" | "CHUNK" | "ENTITY_CHUNK" | "HOTBAR" | "LEVEL" | "LEVEL_SUMMARY" | "OPTIONS" | "PLAYER" | "POI_CHUNK" | "SAVED_DATA_COMMAND_STORAGE" | "SAVED_DATA_FORCED_CHUNKS" | "SAVED_DATA_MAP_DATA" | "SAVED_DATA_MAP_INDEX" | "SAVED_DATA_RAIDS" | "SAVED_DATA_RANDOM_SEQUENCES" | "SAVED_DATA_SCOREBOARD" | "SAVED_DATA_STRUCTURE_FEATURE_INDICES" | "STATS" | "STRUCTURE" | "WORLD_GEN_SETTINGS"> & DataFixTypesMembers;
export interface DataFixTypesMembers {
  update<T>(arg0: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>, arg2: number, arg3: number): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  update(arg0: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg1: j_net_minecraft_nbt.CompoundTag, arg2: number, arg3: number): j_net_minecraft_nbt.CompoundTag;
  updateToCurrentVersion<T>(arg0: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>, arg2: number): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  updateToCurrentVersion(arg0: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg1: j_net_minecraft_nbt.CompoundTag, arg2: number): j_net_minecraft_nbt.CompoundTag;
  wrapCodec<A>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [A]>, arg1: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg2: number): JavaOpaque<"com.mojang.serialization.Codec", [A]>;
}
export interface DataFixTypesStatics {
  readonly ADVANCEMENTS: DataFixTypes;
  readonly CHUNK: DataFixTypes;
  readonly ENTITY_CHUNK: DataFixTypes;
  readonly HOTBAR: DataFixTypes;
  readonly LEVEL: DataFixTypes;
  readonly LEVEL_SUMMARY: DataFixTypes;
  readonly OPTIONS: DataFixTypes;
  readonly PLAYER: DataFixTypes;
  readonly POI_CHUNK: DataFixTypes;
  readonly SAVED_DATA_COMMAND_STORAGE: DataFixTypes;
  readonly SAVED_DATA_FORCED_CHUNKS: DataFixTypes;
  readonly SAVED_DATA_MAP_DATA: DataFixTypes;
  readonly SAVED_DATA_MAP_INDEX: DataFixTypes;
  readonly SAVED_DATA_RAIDS: DataFixTypes;
  readonly SAVED_DATA_RANDOM_SEQUENCES: DataFixTypes;
  readonly SAVED_DATA_SCOREBOARD: DataFixTypes;
  readonly SAVED_DATA_STRUCTURE_FEATURE_INDICES: DataFixTypes;
  readonly STATS: DataFixTypes;
  readonly STRUCTURE: DataFixTypes;
  readonly WORLD_GEN_SETTINGS: DataFixTypes;
  readonly TYPES_FOR_LEVEL_LIST: JavaSet<JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">>;
  valueOf(arg0: string): DataFixTypes;
  values(): Array<DataFixTypes>;
}

/** JVM class net.minecraft.util.datafix.ExtraDataFixUtils. */
export interface ExtraDataFixUtilsMembers {
}
export type ExtraDataFixUtils = ExtraDataFixUtilsMembers;
export interface ExtraDataFixUtilsStatics {
  new(): ExtraDataFixUtils;
  blockState(arg0: string): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  blockState(arg0: string, arg1: JavaMap<string, string>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  cast<T, R>(arg0: JavaOpaque<"com.mojang.datafixers.types.Type", [R]>, arg1: JavaOpaque<"com.mojang.datafixers.Typed", [T]>): JavaOpaque<"com.mojang.datafixers.Typed", [R]>;
  cast<T>(arg0: JavaOpaque<"com.mojang.datafixers.types.Type", [T]>, arg1: object, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [object]>): JavaOpaque<"com.mojang.datafixers.Typed", [T]>;
  chainAllFilters<T>(...arg0: Array<JavaFunction<JavaOpaque<"com.mojang.datafixers.Typed", [object]>, JavaOpaque<"com.mojang.datafixers.Typed", [object]>>>): JavaFunction<JavaOpaque<"com.mojang.datafixers.Typed", [object]>, JavaOpaque<"com.mojang.datafixers.Typed", [object]>>;
  createBlockPos(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: number, arg2: number, arg3: number): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  dyeColorIdToName(arg0: number): string;
  fixBlockPos(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  fixInlineBlockPos(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: string, arg2: string, arg3: string, arg4: string): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  fixStringField(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: string, arg2: JavaOpaque<"java.util.function.UnaryOperator", [string]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  patchSubType(arg0: JavaOpaque<"com.mojang.datafixers.types.Type", [object]>, arg1: JavaOpaque<"com.mojang.datafixers.types.Type", [object]>, arg2: JavaOpaque<"com.mojang.datafixers.types.Type", [object]>): JavaOpaque<"com.mojang.datafixers.types.Type", [object]>;
  readAndSet<T>(arg0: JavaOpaque<"com.mojang.datafixers.Typed", [object]>, arg1: JavaOpaque<"com.mojang.datafixers.OpticFinder", [T]>, arg2: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.datafixers.Typed", [object]>;
}

/** JVM class net.minecraft.util.datafix.LegacyComponentDataFixUtils. */
export interface LegacyComponentDataFixUtilsMembers {
}
export type LegacyComponentDataFixUtils = LegacyComponentDataFixUtilsMembers;
export interface LegacyComponentDataFixUtilsStatics {
  new(): LegacyComponentDataFixUtils;
  createEmptyComponent<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  createPlainTextComponent<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: string): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  createTextComponentJson(arg0: string): string;
  createTranslatableComponent<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>, arg1: string): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
  createTranslatableComponentJson(arg0: string): string;
  extractTranslationString(arg0: string): JavaOptional<string>;
  rewriteFromLenient(arg0: string): string;
}

/** JVM class net.minecraft.util.datafix.PackedBitStorage. */
export interface PackedBitStorageMembers {
  get(arg0: number): number;
  getBits(): number;
  getRaw(): Array<bigint>;
  set(arg0: number, arg1: number): void;
}
export type PackedBitStorage = PackedBitStorageMembers;
export interface PackedBitStorageStatics {
  new(arg0: number, arg1: number): PackedBitStorage;
  new(arg0: number, arg1: number, arg2: Array<bigint>): PackedBitStorage;
}
