// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.bukkit.craftbukkit.metadata.BlockMetadataStore. */
export interface BlockMetadataStoreMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.block.Block">]>, JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.block.Block">]>];
  getMetadata(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: string): JavaList<JavaOpaque<"org.bukkit.metadata.MetadataValue">>;
  hasMetadata(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: string): boolean;
  removeMetadata(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: string, arg2: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  setMetadata(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: string, arg2: JavaOpaque<"org.bukkit.metadata.MetadataValue">): void;
}
export type BlockMetadataStore = BlockMetadataStoreMembers & JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.block.Block">]> & JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.block.Block">]>;
export interface BlockMetadataStoreStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">): BlockMetadataStore;
}

/** JVM class org.bukkit.craftbukkit.metadata.EntityMetadataStore. */
export interface EntityMetadataStoreMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.entity.Entity">]>, JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.entity.Entity">]>];
}
export type EntityMetadataStore = EntityMetadataStoreMembers & JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.entity.Entity">]> & JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.entity.Entity">]>;
export interface EntityMetadataStoreStatics {
  new(): EntityMetadataStore;
}

/** JVM class org.bukkit.craftbukkit.metadata.PlayerMetadataStore. */
export interface PlayerMetadataStoreMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.OfflinePlayer">]>, JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.OfflinePlayer">]>];
}
export type PlayerMetadataStore = PlayerMetadataStoreMembers & JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.OfflinePlayer">]> & JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.OfflinePlayer">]>;
export interface PlayerMetadataStoreStatics {
  new(): PlayerMetadataStore;
}

/** JVM class org.bukkit.craftbukkit.metadata.WorldMetadataStore. */
export interface WorldMetadataStoreMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.World">]>, JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.World">]>];
}
export type WorldMetadataStore = WorldMetadataStoreMembers & JavaOpaque<"org.bukkit.metadata.MetadataStoreBase", [JavaOpaque<"org.bukkit.World">]> & JavaOpaque<"org.bukkit.metadata.MetadataStore", [JavaOpaque<"org.bukkit.World">]>;
export interface WorldMetadataStoreStatics {
  new(): WorldMetadataStore;
}
