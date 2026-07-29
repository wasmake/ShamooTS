// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_packs_metadata from './net.minecraft.server.packs.metadata.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';

/** JVM abstract net.minecraft.server.packs.AbstractPackResources. */
export interface AbstractPackResourcesMembers {
  readonly __javaSupertypes?: readonly [PackResources];
  /** @throws java.io.IOException */
  getMetadataSection<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>): T | null;
  location(): PackLocationInfo;
}
export type AbstractPackResources = AbstractPackResourcesMembers & PackResources;
export interface AbstractPackResourcesStatics {
  getMetadataFromStream<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>, arg1: JavaOpaque<"java.io.InputStream">): T | null;
}

/** JVM class net.minecraft.server.packs.BuiltInMetadata. */
export interface BuiltInMetadataMembers {
  get<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>): T;
}
export type BuiltInMetadata = BuiltInMetadataMembers;
export interface BuiltInMetadataStatics {
  of(): BuiltInMetadata;
  of<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>, arg1: T): BuiltInMetadata;
  of<T1, T2>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T1>, arg1: T1, arg2: j_net_minecraft_server_packs_metadata.MetadataSectionType<T2>, arg3: T2): BuiltInMetadata;
}

/** JVM class net.minecraft.server.packs.CompositePackResources. */
export interface CompositePackResourcesMembers {
  readonly __javaSupertypes?: readonly [PackResources];
  close(): void;
  /** @throws java.io.IOException */
  getMetadataSection<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>): T | null;
  getNamespaces(arg0: PackType): JavaSet<string>;
  getResource(arg0: PackType, arg1: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  getRootResource(...arg0: Array<string>): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  listResources(arg0: PackType, arg1: string, arg2: string, arg3: PackResources_ResourceOutput): void;
  location(): PackLocationInfo;
}
export type CompositePackResources = CompositePackResourcesMembers & PackResources;
export interface CompositePackResourcesStatics {
  new(arg0: PackResources, arg1: JavaList<PackResources>): CompositePackResources;
}

/** JVM class net.minecraft.server.packs.DownloadCacheCleaner. */
export interface DownloadCacheCleanerMembers {
}
export type DownloadCacheCleaner = DownloadCacheCleanerMembers;
export interface DownloadCacheCleanerStatics {
  new(): DownloadCacheCleaner;
  vacuumCacheDir(arg0: JavaOpaque<"java.nio.file.Path">, arg1: number): void;
}

/** JVM class net.minecraft.server.packs.DownloadQueue. */
export interface DownloadQueueMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  /** @throws java.io.IOException */
  close(): void;
  downloadBatch(arg0: DownloadQueue_BatchConfig, arg1: JavaMap<JavaOpaque<"java.util.UUID">, DownloadQueue_DownloadRequest>): PromiseLike<DownloadQueue_BatchResult>;
}
export type DownloadQueue = DownloadQueueMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface DownloadQueueStatics {
  /** @throws java.io.IOException */
  new(arg0: JavaOpaque<"java.nio.file.Path">): DownloadQueue;
}

/** JVM record net.minecraft.server.packs.DownloadQueue$BatchConfig. */
export interface DownloadQueue_BatchConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  hashFunction(): JavaOpaque<"com.google.common.hash.HashFunction">;
  headers(): JavaMap<string, string>;
  listener(): j_net_minecraft_util.HttpUtil_DownloadProgressListener;
  maxSize(): number;
  proxy(): JavaOpaque<"java.net.Proxy">;
  toString(): string;
}
export type DownloadQueue_BatchConfig = DownloadQueue_BatchConfigMembers & JavaOpaque<"java.lang.Record">;
export interface DownloadQueue_BatchConfigStatics {
  new(arg0: JavaOpaque<"com.google.common.hash.HashFunction">, arg1: number, arg2: JavaMap<string, string>, arg3: JavaOpaque<"java.net.Proxy">, arg4: j_net_minecraft_util.HttpUtil_DownloadProgressListener): DownloadQueue_BatchConfig;
}

/** JVM record net.minecraft.server.packs.DownloadQueue$BatchResult. */
export interface DownloadQueue_BatchResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  downloaded(): JavaMap<JavaOpaque<"java.util.UUID">, JavaOpaque<"java.nio.file.Path">>;
  equals(arg0: object): boolean;
  failed(): JavaSet<JavaOpaque<"java.util.UUID">>;
  hashCode(): number;
  toString(): string;
}
export type DownloadQueue_BatchResult = DownloadQueue_BatchResultMembers & JavaOpaque<"java.lang.Record">;
export interface DownloadQueue_BatchResultStatics {
  new(): DownloadQueue_BatchResult;
  new(arg0: JavaMap<JavaOpaque<"java.util.UUID">, JavaOpaque<"java.nio.file.Path">>, arg1: JavaSet<JavaOpaque<"java.util.UUID">>): DownloadQueue_BatchResult;
}

/** JVM record net.minecraft.server.packs.DownloadQueue$DownloadRequest. */
export interface DownloadQueue_DownloadRequestMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hash(): JavaOpaque<"com.google.common.hash.HashCode"> | null;
  hashCode(): number;
  toString(): string;
  url(): JavaOpaque<"java.net.URL">;
}
export type DownloadQueue_DownloadRequest = DownloadQueue_DownloadRequestMembers & JavaOpaque<"java.lang.Record">;
export interface DownloadQueue_DownloadRequestStatics {
  new(arg0: JavaOpaque<"java.net.URL">, arg1: JavaOpaque<"com.google.common.hash.HashCode"> | null): DownloadQueue_DownloadRequest;
}

/** JVM record net.minecraft.server.packs.FeatureFlagsMetadataSection. */
export interface FeatureFlagsMetadataSectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  flags(): j_net_minecraft_world_flag.FeatureFlagSet;
  hashCode(): number;
  toString(): string;
}
export type FeatureFlagsMetadataSection = FeatureFlagsMetadataSectionMembers & JavaOpaque<"java.lang.Record">;
export interface FeatureFlagsMetadataSectionStatics {
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet): FeatureFlagsMetadataSection;
  readonly TYPE: j_net_minecraft_server_packs_metadata.MetadataSectionType<FeatureFlagsMetadataSection>;
}

/** JVM class net.minecraft.server.packs.FilePackResources. */
export interface FilePackResourcesMembers {
  readonly __javaSupertypes?: readonly [AbstractPackResources];
  close(): void;
  getNamespaces(arg0: PackType): JavaSet<string>;
  getResource(arg0: PackType, arg1: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">>;
  getRootResource(...arg0: Array<string>): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  listResources(arg0: PackType, arg1: string, arg2: string, arg3: PackResources_ResourceOutput): void;
}
export type FilePackResources = FilePackResourcesMembers & AbstractPackResources;
export interface FilePackResourcesStatics {
  extractNamespace(arg0: string, arg1: string): string;
}

/** JVM class net.minecraft.server.packs.FilePackResources$FileResourcesSupplier. */
export interface FilePackResources_FileResourcesSupplierMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_packs_repository.Pack_ResourcesSupplier];
  openFull(arg0: PackLocationInfo, arg1: j_net_minecraft_server_packs_repository.Pack_Metadata): PackResources;
  openPrimary(arg0: PackLocationInfo): PackResources;
}
export type FilePackResources_FileResourcesSupplier = FilePackResources_FileResourcesSupplierMembers & j_net_minecraft_server_packs_repository.Pack_ResourcesSupplier;
export interface FilePackResources_FileResourcesSupplierStatics {
  new(arg0: JavaOpaque<"java.io.File">): FilePackResources_FileResourcesSupplier;
  new(arg0: JavaOpaque<"java.nio.file.Path">): FilePackResources_FileResourcesSupplier;
}

/** JVM record net.minecraft.server.packs.OverlayMetadataSection. */
export interface OverlayMetadataSectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  overlays(): JavaList<OverlayMetadataSection_OverlayEntry>;
  overlaysForVersion(arg0: number): JavaList<string>;
  toString(): string;
}
export type OverlayMetadataSection = OverlayMetadataSectionMembers & JavaOpaque<"java.lang.Record">;
export interface OverlayMetadataSectionStatics {
  new(arg0: JavaList<OverlayMetadataSection_OverlayEntry>): OverlayMetadataSection;
  readonly TYPE: j_net_minecraft_server_packs_metadata.MetadataSectionType<OverlayMetadataSection>;
}

/** JVM record net.minecraft.server.packs.OverlayMetadataSection$OverlayEntry. */
export interface OverlayMetadataSection_OverlayEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  format(): j_net_minecraft_util.InclusiveRange<number>;
  hashCode(): number;
  isApplicable(arg0: number): boolean;
  overlay(): string;
  toString(): string;
}
export type OverlayMetadataSection_OverlayEntry = OverlayMetadataSection_OverlayEntryMembers & JavaOpaque<"java.lang.Record">;
export interface OverlayMetadataSection_OverlayEntryStatics {
  new(arg0: j_net_minecraft_util.InclusiveRange<number>, arg1: string): OverlayMetadataSection_OverlayEntry;
}

/** JVM record net.minecraft.server.packs.PackLocationInfo. */
export interface PackLocationInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  createChatLink(arg0: boolean, arg1: j_net_minecraft_network_chat.Component): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  knownPackInfo(): JavaOptional<j_net_minecraft_server_packs_repository.KnownPack>;
  source(): j_net_minecraft_server_packs_repository.PackSource;
  title(): j_net_minecraft_network_chat.Component;
  toString(): string;
}
export type PackLocationInfo = PackLocationInfoMembers & JavaOpaque<"java.lang.Record">;
export interface PackLocationInfoStatics {
  new(arg0: string, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_server_packs_repository.PackSource, arg3: JavaOptional<j_net_minecraft_server_packs_repository.KnownPack>): PackLocationInfo;
}

/** JVM interface net.minecraft.server.packs.PackResources. */
export interface PackResourcesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  /** @throws java.io.IOException */
  getMetadataSection<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>): T | null;
  getNamespaces(arg0: PackType): JavaSet<string>;
  getResource(arg0: PackType, arg1: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  getRootResource(...arg0: Array<string>): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  knownPackInfo(): JavaOptional<j_net_minecraft_server_packs_repository.KnownPack>;
  listResources(arg0: PackType, arg1: string, arg2: string, arg3: PackResources_ResourceOutput): void;
  location(): PackLocationInfo;
  packId(): string;
}
export type PackResources = PackResourcesMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface PackResourcesStatics {
  readonly METADATA_EXTENSION: ".mcmeta";
  readonly PACK_META: "pack.mcmeta";
}

/** JVM interface net.minecraft.server.packs.PackResources$ResourceOutput. */
export interface PackResources_ResourceOutputMembers {
  readonly __javaSupertypes?: readonly [JavaBiConsumer<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">>>];
}
export type PackResources_ResourceOutput = PackResources_ResourceOutputMembers & JavaBiConsumer<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">>>;
export interface PackResources_ResourceOutputStatics {
}

/** JVM record net.minecraft.server.packs.PackSelectionConfig. */
export interface PackSelectionConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  defaultPosition(): j_net_minecraft_server_packs_repository.Pack_Position;
  equals(arg0: object): boolean;
  fixedPosition(): boolean;
  hashCode(): number;
  required(): boolean;
  toString(): string;
}
export type PackSelectionConfig = PackSelectionConfigMembers & JavaOpaque<"java.lang.Record">;
export interface PackSelectionConfigStatics {
  new(arg0: boolean, arg1: j_net_minecraft_server_packs_repository.Pack_Position, arg2: boolean): PackSelectionConfig;
}

/** Live JVM enum net.minecraft.server.packs.PackType; constants are host handles, not strings. */
export type PackType = JavaEnum<"net.minecraft.server.packs.PackType", "CLIENT_RESOURCES" | "SERVER_DATA"> & PackTypeMembers;
export interface PackTypeMembers {
  getDirectory(): string;
}
export interface PackTypeStatics {
  readonly CLIENT_RESOURCES: PackType;
  readonly SERVER_DATA: PackType;
  valueOf(arg0: string): PackType;
  values(): Array<PackType>;
}

/** JVM class net.minecraft.server.packs.PathPackResources. */
export interface PathPackResourcesMembers {
  readonly __javaSupertypes?: readonly [AbstractPackResources];
  close(): void;
  getNamespaces(arg0: PackType): JavaSet<string>;
  getResource(arg0: PackType, arg1: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  getRootResource(...arg0: Array<string>): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  listResources(arg0: PackType, arg1: string, arg2: string, arg3: PackResources_ResourceOutput): void;
}
export type PathPackResources = PathPackResourcesMembers & AbstractPackResources;
export interface PathPackResourcesStatics {
  new(arg0: PackLocationInfo, arg1: JavaOpaque<"java.nio.file.Path">): PathPackResources;
  getResource(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOpaque<"java.nio.file.Path">): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  listPath(arg0: string, arg1: JavaOpaque<"java.nio.file.Path">, arg2: JavaList<string>, arg3: PackResources_ResourceOutput): void;
  validatePath(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}

/** JVM class net.minecraft.server.packs.PathPackResources$PathResourcesSupplier. */
export interface PathPackResources_PathResourcesSupplierMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_packs_repository.Pack_ResourcesSupplier];
  openFull(arg0: PackLocationInfo, arg1: j_net_minecraft_server_packs_repository.Pack_Metadata): PackResources;
  openPrimary(arg0: PackLocationInfo): PackResources;
}
export type PathPackResources_PathResourcesSupplier = PathPackResources_PathResourcesSupplierMembers & j_net_minecraft_server_packs_repository.Pack_ResourcesSupplier;
export interface PathPackResources_PathResourcesSupplierStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): PathPackResources_PathResourcesSupplier;
}

/** JVM class net.minecraft.server.packs.VanillaPackResources. */
export interface VanillaPackResourcesMembers {
  readonly __javaSupertypes?: readonly [PackResources];
  asProvider(): j_net_minecraft_server_packs_resources.ResourceProvider;
  close(): void;
  getMetadataSection<T>(arg0: j_net_minecraft_server_packs_metadata.MetadataSectionType<T>): T | null;
  getNamespaces(arg0: PackType): JavaSet<string>;
  getResource(arg0: PackType, arg1: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  getRootResource(...arg0: Array<string>): j_net_minecraft_server_packs_resources.IoSupplier<JavaOpaque<"java.io.InputStream">> | null;
  listRawPaths(arg0: PackType, arg1: j_net_minecraft_resources.ResourceLocation, arg2: JavaConsumer<JavaOpaque<"java.nio.file.Path">>): void;
  listResources(arg0: PackType, arg1: string, arg2: string, arg3: PackResources_ResourceOutput): void;
  location(): PackLocationInfo;
}
export type VanillaPackResources = VanillaPackResourcesMembers & PackResources;
export interface VanillaPackResourcesStatics {
}

/** JVM class net.minecraft.server.packs.VanillaPackResourcesBuilder. */
export interface VanillaPackResourcesBuilderMembers {
  applyDevelopmentConfig(): VanillaPackResourcesBuilder;
  build(arg0: PackLocationInfo): VanillaPackResources;
  exposeNamespace(...arg0: Array<string>): VanillaPackResourcesBuilder;
  pushAssetPath(arg0: PackType, arg1: JavaOpaque<"java.nio.file.Path">): VanillaPackResourcesBuilder;
  pushClasspathResources(arg0: PackType, arg1: JavaClass<object>): VanillaPackResourcesBuilder;
  pushJarResources(): VanillaPackResourcesBuilder;
  pushUniversalPath(arg0: JavaOpaque<"java.nio.file.Path">): VanillaPackResourcesBuilder;
  setMetadata(arg0: BuiltInMetadata): VanillaPackResourcesBuilder;
}
export type VanillaPackResourcesBuilder = VanillaPackResourcesBuilderMembers;
export interface VanillaPackResourcesBuilderStatics {
  new(): VanillaPackResourcesBuilder;
  readonly developmentConfig: JavaConsumer<VanillaPackResourcesBuilder>;
}
