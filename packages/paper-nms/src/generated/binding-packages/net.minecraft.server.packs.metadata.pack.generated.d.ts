// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_server_packs_metadata from './net.minecraft.server.packs.metadata.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM record net.minecraft.server.packs.metadata.pack.PackMetadataSection. */
export interface PackMetadataSectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  description(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  packFormat(): number;
  supportedFormats(): JavaOptional<j_net_minecraft_util.InclusiveRange<number>>;
  toString(): string;
}
export type PackMetadataSection = PackMetadataSectionMembers & JavaOpaque<"java.lang.Record">;
export interface PackMetadataSectionStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: number, arg2: JavaOptional<j_net_minecraft_util.InclusiveRange<number>>): PackMetadataSection;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PackMetadataSection]>;
  readonly TYPE: j_net_minecraft_server_packs_metadata.MetadataSectionType<PackMetadataSection>;
}
