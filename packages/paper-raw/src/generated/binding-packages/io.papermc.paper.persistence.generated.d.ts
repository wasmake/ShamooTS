// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';

/** JVM interface io.papermc.paper.persistence.PersistentDataContainerView. */
export interface PersistentDataContainerViewMembers {
  copyTo(arg0: j_org_bukkit_persistence.PersistentDataContainer, arg1: boolean): void;
  get<P, C>(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit_persistence.PersistentDataType<P, C>): C | null;
  getAdapterContext(): j_org_bukkit_persistence.PersistentDataAdapterContext;
  getKeys(): JavaSet<j_org_bukkit.NamespacedKey>;
  getOrDefault<P, C>(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit_persistence.PersistentDataType<P, C>, arg2: C): C;
  has(arg0: j_org_bukkit.NamespacedKey): boolean;
  has<P, C>(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit_persistence.PersistentDataType<P, C>): boolean;
  isEmpty(): boolean;
  /** @throws java.io.IOException */
  serializeToBytes(): Array<number>;
}
export type PersistentDataContainerView = PersistentDataContainerViewMembers;
export interface PersistentDataContainerViewStatics {
}

/** JVM interface io.papermc.paper.persistence.PersistentDataViewHolder. */
export interface PersistentDataViewHolderMembers {
  getPersistentDataContainer(): PersistentDataContainerView;
}
export type PersistentDataViewHolder = PersistentDataViewHolderMembers;
export interface PersistentDataViewHolderStatics {
}
