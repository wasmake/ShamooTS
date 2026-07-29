// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_packs from './net.minecraft.server.packs.generated.js';
import type * as j_net_minecraft_server_packs_metadata from './net.minecraft.server.packs.metadata.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM interface net.minecraft.server.packs.resources.CloseableResourceManager. */
export interface CloseableResourceManagerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, ResourceManager];
  close(): void;
}
export type CloseableResourceManager = CloseableResourceManagerMembers & JavaOpaque<"java.lang.AutoCloseable"> & ResourceManager;
export interface CloseableResourceManagerStatics {
}

/** JVM class net.minecraft.server.packs.resources.FallbackResourceManager. */
export interface FallbackResourceManagerMembers {
  readonly __javaSupertypes?: readonly [ResourceManager];
  getNamespaces(): JavaSet<string>;
  getResource(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Resource>;
  getResourceStack(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<Resource>;
  listPacks(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_server_packs.PackResources]>;
  listResourceStacks(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<Resource>>;
  listResources(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, Resource>;
  push(arg0: j_net_minecraft_server_packs.PackResources): void;
  push(arg0: j_net_minecraft_server_packs.PackResources, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): void;
  pushFilterOnly(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): void;
}
export type FallbackResourceManager = FallbackResourceManagerMembers & ResourceManager;
export interface FallbackResourceManagerStatics {
  new(arg0: j_net_minecraft_server_packs.PackType, arg1: string): FallbackResourceManager;
}

/** JVM interface net.minecraft.server.packs.resources.IoSupplier. */
export interface IoSupplierMembers<T = unknown> {
  /** @throws java.io.IOException */
  get(): T;
}
export type IoSupplier<T = unknown> = IoSupplierMembers<T>;
export interface IoSupplierStatics {
  create(arg0: JavaOpaque<"java.nio.file.Path">): IoSupplier<JavaOpaque<"java.io.InputStream">>;
  create(arg0: JavaOpaque<"java.util.zip.ZipFile">, arg1: JavaOpaque<"java.util.zip.ZipEntry">): IoSupplier<JavaOpaque<"java.io.InputStream">>;
}

/** JVM class net.minecraft.server.packs.resources.MultiPackResourceManager. */
export interface MultiPackResourceManagerMembers {
  readonly __javaSupertypes?: readonly [CloseableResourceManager];
  close(): void;
  getNamespaces(): JavaSet<string>;
  getResource(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Resource>;
  getResourceStack(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<Resource>;
  listPacks(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_server_packs.PackResources]>;
  listResourceStacks(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<Resource>>;
  listResources(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, Resource>;
}
export type MultiPackResourceManager = MultiPackResourceManagerMembers & CloseableResourceManager;
export interface MultiPackResourceManagerStatics {
  new(arg0: j_net_minecraft_server_packs.PackType, arg1: JavaList<j_net_minecraft_server_packs.PackResources>): MultiPackResourceManager;
}

/** JVM interface net.minecraft.server.packs.resources.PreparableReloadListener. */
export interface PreparableReloadListenerMembers {
  getName(): string;
  reload(arg0: PreparableReloadListener_PreparationBarrier, arg1: ResourceManager, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<void>;
}
export type PreparableReloadListener = PreparableReloadListenerMembers;
export interface PreparableReloadListenerStatics {
}

/** JVM interface net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier. */
export interface PreparableReloadListener_PreparationBarrierMembers {
  wait<T>(arg0: T): PromiseLike<T>;
}
export type PreparableReloadListener_PreparationBarrier = PreparableReloadListener_PreparationBarrierMembers;
export interface PreparableReloadListener_PreparationBarrierStatics {
}

/** JVM class net.minecraft.server.packs.resources.ProfiledReloadInstance. */
export interface ProfiledReloadInstanceMembers {
  readonly __javaSupertypes?: readonly [SimpleReloadInstance<ProfiledReloadInstance_State>];
}
export type ProfiledReloadInstance = ProfiledReloadInstanceMembers & SimpleReloadInstance<ProfiledReloadInstance_State>;
export interface ProfiledReloadInstanceStatics {
  of(arg0: ResourceManager, arg1: JavaList<PreparableReloadListener>, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">, arg4: PromiseLike<j_net_minecraft_util.Unit>): ReloadInstance;
}

/** JVM record net.minecraft.server.packs.resources.ProfiledReloadInstance$State. */
export interface ProfiledReloadInstance_StateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  preparationCount(): JavaOpaque<"java.util.concurrent.atomic.AtomicLong">;
  preparationNanos(): JavaOpaque<"java.util.concurrent.atomic.AtomicLong">;
  reloadCount(): JavaOpaque<"java.util.concurrent.atomic.AtomicLong">;
  reloadNanos(): JavaOpaque<"java.util.concurrent.atomic.AtomicLong">;
  toString(): string;
}
export type ProfiledReloadInstance_State = ProfiledReloadInstance_StateMembers & JavaOpaque<"java.lang.Record">;
export interface ProfiledReloadInstance_StateStatics {
  new(arg0: string, arg1: JavaOpaque<"java.util.concurrent.atomic.AtomicLong">, arg2: JavaOpaque<"java.util.concurrent.atomic.AtomicLong">, arg3: JavaOpaque<"java.util.concurrent.atomic.AtomicLong">, arg4: JavaOpaque<"java.util.concurrent.atomic.AtomicLong">): ProfiledReloadInstance_State;
}

/** JVM class net.minecraft.server.packs.resources.ReloadableResourceManager. */
export interface ReloadableResourceManagerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">, ResourceManager];
  close(): void;
  createReload(arg0: JavaOpaque<"java.util.concurrent.Executor">, arg1: JavaOpaque<"java.util.concurrent.Executor">, arg2: PromiseLike<j_net_minecraft_util.Unit>, arg3: JavaList<j_net_minecraft_server_packs.PackResources>): ReloadInstance;
  getNamespaces(): JavaSet<string>;
  getResource(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Resource>;
  getResourceStack(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<Resource>;
  listPacks(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_server_packs.PackResources]>;
  listResourceStacks(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<Resource>>;
  listResources(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, Resource>;
  registerReloadListener(arg0: PreparableReloadListener): void;
}
export type ReloadableResourceManager = ReloadableResourceManagerMembers & JavaOpaque<"java.lang.AutoCloseable"> & ResourceManager;
export interface ReloadableResourceManagerStatics {
  new(arg0: j_net_minecraft_server_packs.PackType): ReloadableResourceManager;
}

/** JVM interface net.minecraft.server.packs.resources.ReloadInstance. */
export interface ReloadInstanceMembers {
  checkExceptions(): void;
  done(): PromiseLike<object>;
  getActualProgress(): number;
  isDone(): boolean;
}
export type ReloadInstance = ReloadInstanceMembers;
export interface ReloadInstanceStatics {
}

/** JVM class net.minecraft.server.packs.resources.Resource. */
export interface ResourceMembers {
  knownPackInfo(): JavaOptional<j_net_minecraft_server_packs_repository.KnownPack>;
  /** @throws java.io.IOException */
  metadata(): ResourceMetadata;
  /** @throws java.io.IOException */
  open(): JavaOpaque<"java.io.InputStream">;
  /** @throws java.io.IOException */
  openAsReader(): JavaOpaque<"java.io.BufferedReader">;
  source(): j_net_minecraft_server_packs.PackResources;
  sourcePackId(): string;
}
export type Resource = ResourceMembers;
export interface ResourceStatics {
  new(arg0: j_net_minecraft_server_packs.PackResources, arg1: IoSupplier<JavaOpaque<"java.io.InputStream">>): Resource;
  new(arg0: j_net_minecraft_server_packs.PackResources, arg1: IoSupplier<JavaOpaque<"java.io.InputStream">>, arg2: IoSupplier<ResourceMetadata>): Resource;
}

/** JVM class net.minecraft.server.packs.resources.ResourceFilterSection. */
export interface ResourceFilterSectionMembers {
  isNamespaceFiltered(arg0: string): boolean;
  isPathFiltered(arg0: string): boolean;
}
export type ResourceFilterSection = ResourceFilterSectionMembers;
export interface ResourceFilterSectionStatics {
  new(arg0: JavaList<j_net_minecraft_util.ResourceLocationPattern>): ResourceFilterSection;
  readonly TYPE: j_net_minecraft_server_packs_metadata.MetadataSectionType<ResourceFilterSection>;
}

/** JVM interface net.minecraft.server.packs.resources.ResourceManager. */
export interface ResourceManagerMembers {
  readonly __javaSupertypes?: readonly [ResourceProvider];
  getNamespaces(): JavaSet<string>;
  getResourceStack(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<Resource>;
  listPacks(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_server_packs.PackResources]>;
  listResourceStacks(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<Resource>>;
  listResources(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, Resource>;
}
export type ResourceManager = ResourceManagerMembers & ResourceProvider;
export interface ResourceManagerStatics {
}

/** Live JVM enum net.minecraft.server.packs.resources.ResourceManager$Empty; constants are host handles, not strings. */
export type ResourceManager_Empty = JavaEnum<"net.minecraft.server.packs.resources.ResourceManager$Empty", "INSTANCE"> & ResourceManager_EmptyMembers;
export interface ResourceManager_EmptyMembers {
  getNamespaces(): JavaSet<string>;
  getResource(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Resource>;
  /** @throws java.io.FileNotFoundException */
  getResourceOrThrow(arg0: j_net_minecraft_resources.ResourceLocation): Resource;
  getResourceStack(arg0: j_net_minecraft_resources.ResourceLocation): JavaList<Resource>;
  listPacks(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_server_packs.PackResources]>;
  listResourceStacks(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<Resource>>;
  listResources(arg0: string, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): JavaMap<j_net_minecraft_resources.ResourceLocation, Resource>;
  /** @throws java.io.IOException */
  open(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"java.io.InputStream">;
  /** @throws java.io.IOException */
  openAsReader(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"java.io.BufferedReader">;
}
export interface ResourceManager_EmptyStatics {
  readonly INSTANCE: ResourceManager_Empty;
  valueOf(arg0: string): ResourceManager_Empty;
  values(): Array<ResourceManager_Empty>;
}

/** JVM interface net.minecraft.server.packs.resources.ResourceManagerReloadListener. */
export interface ResourceManagerReloadListenerMembers {
  readonly __javaSupertypes?: readonly [PreparableReloadListener];
  onResourceManagerReload(arg0: ResourceManager): void;
  reload(arg0: PreparableReloadListener_PreparationBarrier, arg1: ResourceManager, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<void>;
}
export type ResourceManagerReloadListener = ResourceManagerReloadListenerMembers & PreparableReloadListener;
export interface ResourceManagerReloadListenerStatics {
}

/** JVM interface net.minecraft.server.packs.resources.ResourceMetadata. */
export interface ResourceMetadataMembers {
  copySections(arg0: JavaCollection<j_net_minecraft_server_packs_metadata.MetadataSectionType<object>>): ResourceMetadata;
  getSection<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>): JavaOptional<T>;
}
export type ResourceMetadata = ResourceMetadataMembers;
export interface ResourceMetadataStatics {
  readonly EMPTY: ResourceMetadata;
  readonly EMPTY_SUPPLIER: IoSupplier<ResourceMetadata>;
  /** @throws java.io.IOException */
  fromJsonStream(arg0: JavaOpaque<"java.io.InputStream">): ResourceMetadata;
}

/** JVM class net.minecraft.server.packs.resources.ResourceMetadata$Builder. */
export interface ResourceMetadata_BuilderMembers {
  build(): ResourceMetadata;
  put<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>, arg1: T): ResourceMetadata_Builder;
}
export type ResourceMetadata_Builder = ResourceMetadata_BuilderMembers;
export interface ResourceMetadata_BuilderStatics {
  new(): ResourceMetadata_Builder;
}

/** JVM interface net.minecraft.server.packs.resources.ResourceProvider. */
export interface ResourceProviderMembers {
  getResource(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<Resource>;
  /** @throws java.io.FileNotFoundException */
  getResourceOrThrow(arg0: j_net_minecraft_resources.ResourceLocation): Resource;
  /** @throws java.io.IOException */
  open(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"java.io.InputStream">;
  /** @throws java.io.IOException */
  openAsReader(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"java.io.BufferedReader">;
}
export type ResourceProvider = ResourceProviderMembers;
export interface ResourceProviderStatics {
  readonly EMPTY: ResourceProvider;
  fromMap(arg0: JavaMap<j_net_minecraft_resources.ResourceLocation, Resource>): ResourceProvider;
}

/** JVM abstract net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener. */
export interface SimpleJsonResourceReloadListenerMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [SimplePreparableReloadListener<JavaMap<j_net_minecraft_resources.ResourceLocation, T>>];
}
export type SimpleJsonResourceReloadListener<T = unknown> = SimpleJsonResourceReloadListenerMembers<T> & SimplePreparableReloadListener<JavaMap<j_net_minecraft_resources.ResourceLocation, T>>;
export interface SimpleJsonResourceReloadListenerStatics {
  scanDirectory<T>(arg0: ResourceManager, arg1: j_net_minecraft_resources.FileToIdConverter, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [JavaOpaque<"com.google.gson.JsonElement">]>, arg3: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg4: JavaMap<j_net_minecraft_resources.ResourceLocation, T>): void;
  scanDirectory<T>(arg0: ResourceManager, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [JavaOpaque<"com.google.gson.JsonElement">]>, arg3: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg4: JavaMap<j_net_minecraft_resources.ResourceLocation, T>): void;
}

/** JVM abstract net.minecraft.server.packs.resources.SimplePreparableReloadListener. */
export interface SimplePreparableReloadListenerMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [PreparableReloadListener];
  reload(arg0: PreparableReloadListener_PreparationBarrier, arg1: ResourceManager, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<void>;
}
export type SimplePreparableReloadListener<T = unknown> = SimplePreparableReloadListenerMembers<T> & PreparableReloadListener;
export interface SimplePreparableReloadListenerStatics {
}

/** JVM class net.minecraft.server.packs.resources.SimpleReloadInstance. */
export interface SimpleReloadInstanceMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [ReloadInstance];
  done(): PromiseLike<object>;
  getActualProgress(): number;
}
export type SimpleReloadInstance<S = unknown> = SimpleReloadInstanceMembers<S> & ReloadInstance;
export interface SimpleReloadInstanceStatics {
  create(arg0: ResourceManager, arg1: JavaList<PreparableReloadListener>, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">, arg4: PromiseLike<j_net_minecraft_util.Unit>, arg5: boolean): ReloadInstance;
  of(arg0: ResourceManager, arg1: JavaList<PreparableReloadListener>, arg2: JavaOpaque<"java.util.concurrent.Executor">, arg3: JavaOpaque<"java.util.concurrent.Executor">, arg4: PromiseLike<j_net_minecraft_util.Unit>): ReloadInstance;
}

/** JVM interface net.minecraft.server.packs.resources.SimpleReloadInstance$StateFactory. */
export interface SimpleReloadInstance_StateFactoryMembers<S = unknown> {
  create(arg0: PreparableReloadListener_PreparationBarrier, arg1: ResourceManager, arg2: PreparableReloadListener, arg3: JavaOpaque<"java.util.concurrent.Executor">, arg4: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<S>;
}
export type SimpleReloadInstance_StateFactory<S = unknown> = SimpleReloadInstance_StateFactoryMembers<S>;
export interface SimpleReloadInstance_StateFactoryStatics {
  readonly SIMPLE: SimpleReloadInstance_StateFactory<void>;
}
