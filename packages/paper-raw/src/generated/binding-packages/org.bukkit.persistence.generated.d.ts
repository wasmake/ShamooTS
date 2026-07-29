// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_persistence from './io.papermc.paper.persistence.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface org.bukkit.persistence.ListPersistentDataType. */
export interface ListPersistentDataTypeMembers<P = unknown, C = unknown> {
  readonly __javaSupertypes?: readonly [PersistentDataType<JavaList<P>, JavaList<C>>];
  elementType(): PersistentDataType<P, C>;
}
export type ListPersistentDataType<P = unknown, C = unknown> = ListPersistentDataTypeMembers<P, C> & PersistentDataType<JavaList<P>, JavaList<C>>;
export interface ListPersistentDataTypeStatics {
}

/** JVM class org.bukkit.persistence.ListPersistentDataTypeProvider. */
export interface ListPersistentDataTypeProviderMembers {
  booleans(): ListPersistentDataType<number, boolean>;
  byteArrays(): ListPersistentDataType<Array<number>, Array<number>>;
  bytes(): ListPersistentDataType<number, number>;
  dataContainers(): ListPersistentDataType<PersistentDataContainer, PersistentDataContainer>;
  doubles(): ListPersistentDataType<number, number>;
  floats(): ListPersistentDataType<number, number>;
  integerArrays(): ListPersistentDataType<Array<number>, Array<number>>;
  integers(): ListPersistentDataType<number, number>;
  listTypeFrom<P, C>(arg0: PersistentDataType<P, C>): ListPersistentDataType<P, C>;
  longArrays(): ListPersistentDataType<Array<bigint>, Array<bigint>>;
  longs(): ListPersistentDataType<bigint, bigint>;
  shorts(): ListPersistentDataType<number, number>;
  strings(): ListPersistentDataType<string, string>;
}
export type ListPersistentDataTypeProvider = ListPersistentDataTypeProviderMembers;
export interface ListPersistentDataTypeProviderStatics {
}

/** JVM interface org.bukkit.persistence.PersistentDataAdapterContext. */
export interface PersistentDataAdapterContextMembers {
  newPersistentDataContainer(): PersistentDataContainer;
}
export type PersistentDataAdapterContext = PersistentDataAdapterContextMembers;
export interface PersistentDataAdapterContextStatics {
}

/** JVM interface org.bukkit.persistence.PersistentDataContainer. */
export interface PersistentDataContainerMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_persistence.PersistentDataContainerView];
  /** @throws java.io.IOException */
  readFromBytes(arg0: Array<number>): void;
  /** @throws java.io.IOException */
  readFromBytes(arg0: Array<number>, arg1: boolean): void;
  remove(arg0: j_org_bukkit.NamespacedKey): void;
  set<P, C>(arg0: j_org_bukkit.NamespacedKey, arg1: PersistentDataType<P, C>, arg2: C): void;
}
export type PersistentDataContainer = PersistentDataContainerMembers & j_io_papermc_paper_persistence.PersistentDataContainerView;
export interface PersistentDataContainerStatics {
}

/** JVM interface org.bukkit.persistence.PersistentDataHolder. */
export interface PersistentDataHolderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_persistence.PersistentDataViewHolder];
  getPersistentDataContainer(): PersistentDataContainer;
}
export type PersistentDataHolder = PersistentDataHolderMembers & j_io_papermc_paper_persistence.PersistentDataViewHolder;
export interface PersistentDataHolderStatics {
}

/** JVM interface org.bukkit.persistence.PersistentDataType. */
export interface PersistentDataTypeMembers<P = unknown, C = unknown> {
  fromPrimitive(arg0: P, arg1: PersistentDataAdapterContext): C;
  getComplexType(): JavaClass<C>;
  getPrimitiveType(): JavaClass<P>;
  toPrimitive(arg0: C, arg1: PersistentDataAdapterContext): P;
}
export type PersistentDataType<P = unknown, C = unknown> = PersistentDataTypeMembers<P, C>;
export interface PersistentDataTypeStatics {
  readonly BOOLEAN: PersistentDataType<number, boolean>;
  readonly BYTE: PersistentDataType<number, number>;
  readonly BYTE_ARRAY: PersistentDataType<Array<number>, Array<number>>;
  readonly DOUBLE: PersistentDataType<number, number>;
  readonly FLOAT: PersistentDataType<number, number>;
  readonly INTEGER: PersistentDataType<number, number>;
  readonly INTEGER_ARRAY: PersistentDataType<Array<number>, Array<number>>;
  readonly LIST: ListPersistentDataTypeProvider;
  readonly LONG: PersistentDataType<bigint, bigint>;
  readonly LONG_ARRAY: PersistentDataType<Array<bigint>, Array<bigint>>;
  readonly SHORT: PersistentDataType<number, number>;
  readonly STRING: PersistentDataType<string, string>;
  readonly TAG_CONTAINER: PersistentDataType<PersistentDataContainer, PersistentDataContainer>;
  readonly TAG_CONTAINER_ARRAY: PersistentDataType<Array<PersistentDataContainer>, Array<PersistentDataContainer>>;
}

/** JVM class org.bukkit.persistence.PersistentDataType$BooleanPersistentDataType. */
export interface PersistentDataType_BooleanPersistentDataTypeMembers {
  readonly __javaSupertypes?: readonly [PersistentDataType<number, boolean>];
  fromPrimitive(arg0: number, arg1: PersistentDataAdapterContext): boolean;
  getComplexType(): JavaClass<boolean>;
  getPrimitiveType(): JavaClass<number>;
  toPrimitive(arg0: boolean, arg1: PersistentDataAdapterContext): number;
}
export type PersistentDataType_BooleanPersistentDataType = PersistentDataType_BooleanPersistentDataTypeMembers & PersistentDataType<number, boolean>;
export interface PersistentDataType_BooleanPersistentDataTypeStatics {
  new(): PersistentDataType_BooleanPersistentDataType;
}

/** JVM class org.bukkit.persistence.PersistentDataType$PrimitivePersistentDataType. */
export interface PersistentDataType_PrimitivePersistentDataTypeMembers<P = unknown> {
  readonly __javaSupertypes?: readonly [PersistentDataType<P, P>];
  fromPrimitive(arg0: P, arg1: PersistentDataAdapterContext): P;
  getComplexType(): JavaClass<P>;
  getPrimitiveType(): JavaClass<P>;
  toPrimitive(arg0: P, arg1: PersistentDataAdapterContext): P;
}
export type PersistentDataType_PrimitivePersistentDataType<P = unknown> = PersistentDataType_PrimitivePersistentDataTypeMembers<P> & PersistentDataType<P, P>;
export interface PersistentDataType_PrimitivePersistentDataTypeStatics {
}
