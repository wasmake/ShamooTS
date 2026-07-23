// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';

/** JVM class org.bukkit.craftbukkit.packs.CraftDataPack. */
export interface CraftDataPackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.packs.DataPack">];
  getCompatibility(): JavaOpaque<"org.bukkit.packs.DataPack$Compatibility">;
  getDescription(): string;
  getHandle(): j_net_minecraft_server_packs_repository.Pack;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getMaxSupportedPackFormat(): number;
  getMinSupportedPackFormat(): number;
  getPackFormat(): number;
  getRawId(): string;
  getRequestedFeatures(): JavaSet<JavaOpaque<"org.bukkit.FeatureFlag">>;
  getSource(): JavaOpaque<"org.bukkit.packs.DataPack$Source">;
  getTitle(): string;
  isEnabled(): boolean;
  isRequired(): boolean;
  toString(): string;
}
export type CraftDataPack = CraftDataPackMembers & JavaOpaque<"org.bukkit.packs.DataPack">;
export interface CraftDataPackStatics {
  new(arg0: j_net_minecraft_server_packs_repository.Pack): CraftDataPack;
}

/** JVM class org.bukkit.craftbukkit.packs.CraftDataPackManager. */
export interface CraftDataPackManagerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.packs.DataPackManager">];
  getDataPack(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.packs.DataPack">;
  getDataPacks(): JavaCollection<JavaOpaque<"org.bukkit.packs.DataPack">>;
  getDisabledDataPacks(arg0: JavaOpaque<"org.bukkit.World">): JavaCollection<JavaOpaque<"org.bukkit.packs.DataPack">>;
  getEnabledDataPacks(arg0: JavaOpaque<"org.bukkit.World">): JavaCollection<JavaOpaque<"org.bukkit.packs.DataPack">>;
  getHandle(): j_net_minecraft_server_packs_repository.PackRepository;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.Material">, arg1: JavaOpaque<"org.bukkit.World">): boolean;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.block.BlockType">, arg1: JavaOpaque<"org.bukkit.World">): boolean;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.entity.EntityType">, arg1: JavaOpaque<"org.bukkit.World">): boolean;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.inventory.ItemType">, arg1: JavaOpaque<"org.bukkit.World">): boolean;
}
export type CraftDataPackManager = CraftDataPackManagerMembers & JavaOpaque<"org.bukkit.packs.DataPackManager">;
export interface CraftDataPackManagerStatics {
  new(arg0: j_net_minecraft_server_packs_repository.PackRepository): CraftDataPackManager;
}

/** JVM class org.bukkit.craftbukkit.packs.CraftResourcePack. */
export interface CraftResourcePackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.packs.ResourcePack">];
  getHash(): string;
  getId(): JavaOpaque<"java.util.UUID">;
  getPrompt(): string;
  getUrl(): string;
  isRequired(): boolean;
  toString(): string;
}
export type CraftResourcePack = CraftResourcePackMembers & JavaOpaque<"org.bukkit.packs.ResourcePack">;
export interface CraftResourcePackStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer_ServerResourcePackInfo): CraftResourcePack;
}
