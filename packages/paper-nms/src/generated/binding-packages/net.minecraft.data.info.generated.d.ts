// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';

/** JVM class net.minecraft.data.info.BiomeParametersDumpReport. */
export interface BiomeParametersDumpReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type BiomeParametersDumpReport = BiomeParametersDumpReportMembers & j_net_minecraft_data.DataProvider;
export interface BiomeParametersDumpReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): BiomeParametersDumpReport;
}

/** JVM class net.minecraft.data.info.BlockListReport. */
export interface BlockListReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type BlockListReport = BlockListReportMembers & j_net_minecraft_data.DataProvider;
export interface BlockListReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): BlockListReport;
}

/** JVM class net.minecraft.data.info.CommandsReport. */
export interface CommandsReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type CommandsReport = CommandsReportMembers & j_net_minecraft_data.DataProvider;
export interface CommandsReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): CommandsReport;
}

/** JVM class net.minecraft.data.info.DatapackStructureReport. */
export interface DatapackStructureReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type DatapackStructureReport = DatapackStructureReportMembers & j_net_minecraft_data.DataProvider;
export interface DatapackStructureReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput): DatapackStructureReport;
}

/** JVM class net.minecraft.data.info.ItemListReport. */
export interface ItemListReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type ItemListReport = ItemListReportMembers & j_net_minecraft_data.DataProvider;
export interface ItemListReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): ItemListReport;
}

/** JVM class net.minecraft.data.info.PacketReport. */
export interface PacketReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type PacketReport = PacketReportMembers & j_net_minecraft_data.DataProvider;
export interface PacketReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput): PacketReport;
}

/** JVM class net.minecraft.data.info.RegistryDumpReport. */
export interface RegistryDumpReportMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type RegistryDumpReport = RegistryDumpReportMembers & j_net_minecraft_data.DataProvider;
export interface RegistryDumpReportStatics {
  new(arg0: j_net_minecraft_data.PackOutput): RegistryDumpReport;
}
