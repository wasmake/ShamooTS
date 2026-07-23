// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';

/** JVM class net.minecraft.server.network.config.JoinWorldTask. */
export interface JoinWorldTaskMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_network.ConfigurationTask];
  start(arg0: JavaConsumer<j_net_minecraft_network_protocol.Packet<object>>): void;
  type(): j_net_minecraft_server_network.ConfigurationTask_Type;
}
export type JoinWorldTask = JoinWorldTaskMembers & j_net_minecraft_server_network.ConfigurationTask;
export interface JoinWorldTaskStatics {
  new(): JoinWorldTask;
  readonly TYPE: j_net_minecraft_server_network.ConfigurationTask_Type;
}

/** JVM class net.minecraft.server.network.config.ServerResourcePackConfigurationTask. */
export interface ServerResourcePackConfigurationTaskMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_network.ConfigurationTask];
  start(arg0: JavaConsumer<j_net_minecraft_network_protocol.Packet<object>>): void;
  type(): j_net_minecraft_server_network.ConfigurationTask_Type;
}
export type ServerResourcePackConfigurationTask = ServerResourcePackConfigurationTaskMembers & j_net_minecraft_server_network.ConfigurationTask;
export interface ServerResourcePackConfigurationTaskStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer_ServerResourcePackInfo): ServerResourcePackConfigurationTask;
  readonly TYPE: j_net_minecraft_server_network.ConfigurationTask_Type;
}

/** JVM class net.minecraft.server.network.config.SynchronizeRegistriesTask. */
export interface SynchronizeRegistriesTaskMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_network.ConfigurationTask];
  handleResponse(arg0: JavaList<j_net_minecraft_server_packs_repository.KnownPack>, arg1: JavaConsumer<j_net_minecraft_network_protocol.Packet<object>>): void;
  start(arg0: JavaConsumer<j_net_minecraft_network_protocol.Packet<object>>): void;
  type(): j_net_minecraft_server_network.ConfigurationTask_Type;
}
export type SynchronizeRegistriesTask = SynchronizeRegistriesTaskMembers & j_net_minecraft_server_network.ConfigurationTask;
export interface SynchronizeRegistriesTaskStatics {
  new(arg0: JavaList<j_net_minecraft_server_packs_repository.KnownPack>, arg1: j_net_minecraft_core.LayeredRegistryAccess<j_net_minecraft_server.RegistryLayer>): SynchronizeRegistriesTask;
  readonly TYPE: j_net_minecraft_server_network.ConfigurationTask_Type;
}
