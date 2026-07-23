// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_server_packs_metadata from './net.minecraft.server.packs.metadata.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';

/** JVM class net.minecraft.data.metadata.PackMetadataGenerator. */
export interface PackMetadataGeneratorMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  add<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>, arg1: T): PackMetadataGenerator;
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type PackMetadataGenerator = PackMetadataGeneratorMembers & j_net_minecraft_data.DataProvider;
export interface PackMetadataGeneratorStatics {
  new(arg0: j_net_minecraft_data.PackOutput): PackMetadataGenerator;
  forFeaturePack(arg0: j_net_minecraft_data.PackOutput, arg1: j_net_minecraft_network_chat.Component): PackMetadataGenerator;
  forFeaturePack(arg0: j_net_minecraft_data.PackOutput, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_world_flag.FeatureFlagSet): PackMetadataGenerator;
}
