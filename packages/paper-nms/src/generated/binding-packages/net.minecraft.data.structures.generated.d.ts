// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';

/** JVM class net.minecraft.data.structures.NbtToSnbt. */
export interface NbtToSnbtMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type NbtToSnbt = NbtToSnbtMembers & j_net_minecraft_data.DataProvider;
export interface NbtToSnbtStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: JavaCollection<JavaOpaque<"java.nio.file.Path">>): NbtToSnbt;
  convertStructure(arg0: j_net_minecraft_data.CachedOutput, arg1: JavaOpaque<"java.nio.file.Path">, arg2: string, arg3: JavaOpaque<"java.nio.file.Path">): JavaOpaque<"java.nio.file.Path"> | null;
  /** @throws java.io.IOException */
  writeSnbt(arg0: j_net_minecraft_data.CachedOutput, arg1: JavaOpaque<"java.nio.file.Path">, arg2: string): void;
}

/** JVM class net.minecraft.data.structures.SnbtDatafixer. */
export interface SnbtDatafixerMembers {
}
export type SnbtDatafixer = SnbtDatafixerMembers;
export interface SnbtDatafixerStatics {
  new(): SnbtDatafixer;
  /** @throws java.io.IOException */
  main(arg0: Array<string>): void;
}

/** JVM class net.minecraft.data.structures.SnbtToNbt. */
export interface SnbtToNbtMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  addFilter(arg0: SnbtToNbt_Filter): SnbtToNbt;
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type SnbtToNbt = SnbtToNbtMembers & j_net_minecraft_data.DataProvider;
export interface SnbtToNbtStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: Iterable<JavaOpaque<"java.nio.file.Path">>): SnbtToNbt;
}

/** JVM interface net.minecraft.data.structures.SnbtToNbt$Filter. */
export interface SnbtToNbt_FilterMembers {
  apply(arg0: string, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_nbt.CompoundTag;
}
export type SnbtToNbt_Filter = SnbtToNbt_FilterMembers;
export interface SnbtToNbt_FilterStatics {
}

/** JVM class net.minecraft.data.structures.StructureUpdater. */
export interface StructureUpdaterMembers {
  readonly __javaSupertypes?: readonly [SnbtToNbt_Filter];
  apply(arg0: string, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_nbt.CompoundTag;
}
export type StructureUpdater = StructureUpdaterMembers & SnbtToNbt_Filter;
export interface StructureUpdaterStatics {
  new(): StructureUpdater;
  update(arg0: string, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_nbt.CompoundTag;
}
