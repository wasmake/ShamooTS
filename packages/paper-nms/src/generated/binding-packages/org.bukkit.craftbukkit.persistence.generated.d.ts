// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';

/** JVM class org.bukkit.craftbukkit.persistence.CraftPersistentDataAdapterContext. */
export interface CraftPersistentDataAdapterContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">];
  newPersistentDataContainer(): CraftPersistentDataContainer;
  newPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
}
export type CraftPersistentDataAdapterContext = CraftPersistentDataAdapterContextMembers & JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">;
export interface CraftPersistentDataAdapterContextStatics {
  new(arg0: CraftPersistentDataTypeRegistry): CraftPersistentDataAdapterContext;
}

/** JVM class org.bukkit.craftbukkit.persistence.CraftPersistentDataContainer. */
export interface CraftPersistentDataContainerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.persistence.PaperPersistentDataContainerView">, JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">];
  clear(): void;
  copyTo(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">, arg1: boolean): void;
  equals(arg0: object): boolean;
  getAdapterContext(): JavaOpaque<"org.bukkit.persistence.PersistentDataAdapterContext">;
  getDataTagTypeRegistry(): CraftPersistentDataTypeRegistry;
  getKeys(): JavaSet<JavaOpaque<"org.bukkit.NamespacedKey">>;
  getRaw(): JavaMap<string, j_net_minecraft_nbt.Tag>;
  getTag(arg0: string): j_net_minecraft_nbt.Tag;
  getTagsCloned(): JavaMap<string, j_net_minecraft_nbt.Tag>;
  hashCode(): number;
  isEmpty(): boolean;
  put(arg0: string, arg1: j_net_minecraft_nbt.Tag): void;
  putAll(arg0: JavaMap<string, j_net_minecraft_nbt.Tag>): void;
  putAll(arg0: j_net_minecraft_nbt.CompoundTag): void;
  /** @throws java.io.IOException */
  readFromBytes(arg0: Array<number>, arg1: boolean): void;
  remove(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  serialize(): string;
  set<T, Z>(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataType", [T, Z]>, arg2: Z): void;
  toTagCompound(): j_net_minecraft_nbt.CompoundTag;
}
export type CraftPersistentDataContainer = CraftPersistentDataContainerMembers & JavaOpaque<"io.papermc.paper.persistence.PaperPersistentDataContainerView"> & JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
export interface CraftPersistentDataContainerStatics {
  new(arg0: JavaMap<string, j_net_minecraft_nbt.Tag>, arg1: CraftPersistentDataTypeRegistry): CraftPersistentDataContainer;
  new(arg0: CraftPersistentDataTypeRegistry): CraftPersistentDataContainer;
  createCodec(arg0: CraftPersistentDataTypeRegistry): JavaOpaque<"com.mojang.serialization.Codec", [CraftPersistentDataContainer]>;
}

/** JVM class org.bukkit.craftbukkit.persistence.CraftPersistentDataTypeRegistry. */
export interface CraftPersistentDataTypeRegistryMembers {
  /** @throws java.lang.ClassCastException @throws java.lang.IllegalArgumentException */
  extract<T, Z /* extends j_net_minecraft_nbt.Tag */>(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataType", [T, object]>, arg1: j_net_minecraft_nbt.Tag): T;
  isInstanceOf<T>(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataType", [T, object]>, arg1: j_net_minecraft_nbt.Tag): boolean;
  wrap<T>(arg0: JavaOpaque<"org.bukkit.persistence.PersistentDataType", [T, object]>, arg1: T): j_net_minecraft_nbt.Tag;
}
export type CraftPersistentDataTypeRegistry = CraftPersistentDataTypeRegistryMembers;
export interface CraftPersistentDataTypeRegistryStatics {
  new(): CraftPersistentDataTypeRegistry;
}

/** JVM class org.bukkit.craftbukkit.persistence.DirtyCraftPersistentDataContainer. */
export interface DirtyCraftPersistentDataContainerMembers {
  readonly __javaSupertypes?: readonly [CraftPersistentDataContainer];
  dirty(): boolean;
  dirty(arg0: boolean): void;
  put(arg0: string, arg1: j_net_minecraft_nbt.Tag): void;
  putAll(arg0: JavaMap<string, j_net_minecraft_nbt.Tag>): void;
  putAll(arg0: j_net_minecraft_nbt.CompoundTag): void;
  remove(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  set<T, Z>(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.persistence.PersistentDataType", [T, Z]>, arg2: Z): void;
}
export type DirtyCraftPersistentDataContainer = DirtyCraftPersistentDataContainerMembers & CraftPersistentDataContainer;
export interface DirtyCraftPersistentDataContainerStatics {
  new(arg0: JavaMap<string, j_net_minecraft_nbt.Tag>, arg1: CraftPersistentDataTypeRegistry): DirtyCraftPersistentDataContainer;
  new(arg0: CraftPersistentDataTypeRegistry): DirtyCraftPersistentDataContainer;
}
