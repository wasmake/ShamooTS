// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_packs from './net.minecraft.server.packs.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_validation from './net.minecraft.world.level.validation.generated.js';

/** JVM abstract net.minecraft.server.packs.repository.BuiltInPackSource. */
export interface BuiltInPackSourceMembers {
  readonly __javaSupertypes?: readonly [RepositorySource];
  createBuiltinPack(arg0: string, arg1: Pack_ResourcesSupplier, arg2: j_net_minecraft_network_chat.Component): Pack | null;
  createVanillaPack(arg0: j_net_minecraft_server_packs.PackResources): Pack | null;
  discoverPacksInPath(arg0: JavaOpaque<"java.nio.file.Path"> | null, arg1: JavaBiConsumer<string, JavaFunction<string, Pack>>): void | null;
  getPackTitle(arg0: string): j_net_minecraft_network_chat.Component;
  getVanillaPack(): j_net_minecraft_server_packs.VanillaPackResources;
  loadPacks(arg0: JavaConsumer<Pack>): void;
  populatePackList(arg0: JavaBiConsumer<string, JavaFunction<string, Pack>>): void;
}
export type BuiltInPackSource = BuiltInPackSourceMembers & RepositorySource;
export interface BuiltInPackSourceStatics {
  new(arg0: j_net_minecraft_server_packs.PackType, arg1: j_net_minecraft_server_packs.VanillaPackResources, arg2: j_net_minecraft_resources.ResourceLocation, arg3: j_net_minecraft_world_level_validation.DirectoryValidator): BuiltInPackSource;
  readonly CORE_PACK_INFO: KnownPack;
  readonly TESTS_ID: "tests";
  readonly VANILLA_ID: "vanilla";
  fixedResources(arg0: j_net_minecraft_server_packs.PackResources): Pack_ResourcesSupplier;
}

/** JVM class net.minecraft.server.packs.repository.FolderRepositorySource. */
export interface FolderRepositorySourceMembers {
  readonly __javaSupertypes?: readonly [RepositorySource];
  loadPacks(arg0: JavaConsumer<Pack>): void;
}
export type FolderRepositorySource = FolderRepositorySourceMembers & RepositorySource;
export interface FolderRepositorySourceStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: j_net_minecraft_server_packs.PackType, arg2: PackSource, arg3: j_net_minecraft_world_level_validation.DirectoryValidator): FolderRepositorySource;
  /** @throws java.io.IOException */
  discoverPacks(arg0: JavaOpaque<"java.nio.file.Path">, arg1: j_net_minecraft_world_level_validation.DirectoryValidator, arg2: JavaBiConsumer<JavaOpaque<"java.nio.file.Path">, Pack_ResourcesSupplier>): void;
}

/** JVM class net.minecraft.server.packs.repository.FolderRepositorySource$FolderPackDetector. */
export interface FolderRepositorySource_FolderPackDetectorMembers {
  readonly __javaSupertypes?: readonly [PackDetector<Pack_ResourcesSupplier>];
  /** @throws java.io.IOException */
  createDirectoryPack(arg0: JavaOpaque<"java.nio.file.Path">): object;
  createDirectoryPack(arg0: JavaOpaque<"java.nio.file.Path">): Pack_ResourcesSupplier;
  /** @throws java.io.IOException */
  createZipPack(arg0: JavaOpaque<"java.nio.file.Path">): object | null;
  createZipPack(arg0: JavaOpaque<"java.nio.file.Path">): Pack_ResourcesSupplier | null;
}
export type FolderRepositorySource_FolderPackDetector = FolderRepositorySource_FolderPackDetectorMembers & PackDetector<Pack_ResourcesSupplier>;
export interface FolderRepositorySource_FolderPackDetectorStatics {
  new(arg0: j_net_minecraft_world_level_validation.DirectoryValidator): FolderRepositorySource_FolderPackDetector;
}

/** JVM record net.minecraft.server.packs.repository.KnownPack. */
export interface KnownPackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  isVanilla(): boolean;
  namespace(): string;
  toString(): string;
  version(): string;
}
export type KnownPack = KnownPackMembers & JavaOpaque<"java.lang.Record">;
export interface KnownPackStatics {
  new(arg0: string, arg1: string, arg2: string): KnownPack;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, KnownPack>;
  readonly VANILLA_NAMESPACE: "minecraft";
  vanilla(arg0: string): KnownPack;
}

/** JVM class net.minecraft.server.packs.repository.Pack. */
export interface PackMembers {
  equals(arg0: object): boolean;
  getChatLink(arg0: boolean): j_net_minecraft_network_chat.Component;
  getCompatibility(): PackCompatibility;
  getDefaultPosition(): Pack_Position;
  getDescription(): j_net_minecraft_network_chat.Component;
  getId(): string;
  getPackSource(): PackSource;
  getRequestedFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  getTitle(): j_net_minecraft_network_chat.Component;
  hashCode(): number;
  isFixedPosition(): boolean;
  isRequired(): boolean;
  location(): j_net_minecraft_server_packs.PackLocationInfo;
  open(): j_net_minecraft_server_packs.PackResources;
  readonly resources: Pack_ResourcesSupplier;
  selectionConfig(): j_net_minecraft_server_packs.PackSelectionConfig;
}
export type Pack = PackMembers;
export interface PackStatics {
  new(arg0: j_net_minecraft_server_packs.PackLocationInfo, arg1: Pack_ResourcesSupplier, arg2: Pack_Metadata, arg3: j_net_minecraft_server_packs.PackSelectionConfig): Pack;
  readMetaAndCreate(arg0: j_net_minecraft_server_packs.PackLocationInfo, arg1: Pack_ResourcesSupplier, arg2: j_net_minecraft_server_packs.PackType, arg3: j_net_minecraft_server_packs.PackSelectionConfig): Pack | null;
  readPackMetadata(arg0: j_net_minecraft_server_packs.PackLocationInfo, arg1: Pack_ResourcesSupplier, arg2: number): Pack_Metadata | null;
}

/** JVM record net.minecraft.server.packs.repository.Pack$Metadata. */
export interface Pack_MetadataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  compatibility(): PackCompatibility;
  description(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  overlays(): JavaList<string>;
  requestedFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  toString(): string;
}
export type Pack_Metadata = Pack_MetadataMembers & JavaOpaque<"java.lang.Record">;
export interface Pack_MetadataStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: PackCompatibility, arg2: j_net_minecraft_world_flag.FeatureFlagSet, arg3: JavaList<string>): Pack_Metadata;
}

/** Live JVM enum net.minecraft.server.packs.repository.Pack$Position; constants are host handles, not strings. */
export type Pack_Position = JavaEnum<"net.minecraft.server.packs.repository.Pack$Position", "BOTTOM" | "TOP"> & Pack_PositionMembers;
export interface Pack_PositionMembers {
  insert<T>(arg0: JavaList<T>, arg1: T, arg2: JavaFunction<T, j_net_minecraft_server_packs.PackSelectionConfig>, arg3: boolean): number;
  opposite(): Pack_Position;
}
export interface Pack_PositionStatics {
  readonly BOTTOM: Pack_Position;
  readonly TOP: Pack_Position;
  valueOf(arg0: string): Pack_Position;
  values(): Array<Pack_Position>;
}

/** JVM interface net.minecraft.server.packs.repository.Pack$ResourcesSupplier. */
export interface Pack_ResourcesSupplierMembers {
  openFull(arg0: j_net_minecraft_server_packs.PackLocationInfo, arg1: Pack_Metadata): j_net_minecraft_server_packs.PackResources;
  openPrimary(arg0: j_net_minecraft_server_packs.PackLocationInfo): j_net_minecraft_server_packs.PackResources;
}
export type Pack_ResourcesSupplier = Pack_ResourcesSupplierMembers;
export interface Pack_ResourcesSupplierStatics {
}

/** Live JVM enum net.minecraft.server.packs.repository.PackCompatibility; constants are host handles, not strings. */
export type PackCompatibility = JavaEnum<"net.minecraft.server.packs.repository.PackCompatibility", "COMPATIBLE" | "TOO_NEW" | "TOO_OLD"> & PackCompatibilityMembers;
export interface PackCompatibilityMembers {
  getConfirmation(): j_net_minecraft_network_chat.Component;
  getDescription(): j_net_minecraft_network_chat.Component;
  isCompatible(): boolean;
}
export interface PackCompatibilityStatics {
  readonly COMPATIBLE: PackCompatibility;
  readonly TOO_NEW: PackCompatibility;
  readonly TOO_OLD: PackCompatibility;
  forVersion(arg0: j_net_minecraft_util.InclusiveRange<number>, arg1: number): PackCompatibility;
  valueOf(arg0: string): PackCompatibility;
  values(): Array<PackCompatibility>;
}

/** JVM abstract net.minecraft.server.packs.repository.PackDetector. */
export interface PackDetectorMembers<T = unknown> {
  /** @throws java.io.IOException */
  createDirectoryPack(arg0: JavaOpaque<"java.nio.file.Path">): T | null;
  /** @throws java.io.IOException */
  createZipPack(arg0: JavaOpaque<"java.nio.file.Path">): T | null;
  /** @throws java.io.IOException */
  detectPackResources(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaList<j_net_minecraft_world_level_validation.ForbiddenSymlinkInfo>): T | null;
}
export type PackDetector<T = unknown> = PackDetectorMembers<T>;
export interface PackDetectorStatics {
  new<T>(arg0: j_net_minecraft_world_level_validation.DirectoryValidator): PackDetector<T>;
}

/** JVM class net.minecraft.server.packs.repository.PackRepository. */
export interface PackRepositoryMembers {
  addPack(arg0: string): boolean;
  getAvailableIds(): JavaCollection<string>;
  getAvailablePacks(): JavaCollection<Pack>;
  getPack(arg0: string): Pack | null;
  getRequestedFeatureFlags(): j_net_minecraft_world_flag.FeatureFlagSet;
  getSelectedIds(): JavaCollection<string>;
  getSelectedPacks(): JavaCollection<Pack>;
  isAbleToClearAnyPack(): boolean;
  isAvailable(arg0: string): boolean;
  openAllSelected(): JavaList<j_net_minecraft_server_packs.PackResources>;
  reload(): void;
  reload(arg0: boolean): void;
  removePack(arg0: string): boolean;
  setSelected(arg0: JavaCollection<string>, arg1: boolean): void;
}
export type PackRepository = PackRepositoryMembers;
export interface PackRepositoryStatics {
  new(arg0: j_net_minecraft_world_level_validation.DirectoryValidator, ...arg1: Array<RepositorySource>): PackRepository;
  displayPackList(arg0: JavaCollection<Pack>): string;
}

/** JVM interface net.minecraft.server.packs.repository.PackSource. */
export interface PackSourceMembers {
  decorate(arg0: j_net_minecraft_network_chat.Component): j_net_minecraft_network_chat.Component;
  shouldAddAutomatically(): boolean;
}
export type PackSource = PackSourceMembers;
export interface PackSourceStatics {
  readonly BUILT_IN: PackSource;
  readonly DEFAULT: PackSource;
  readonly FEATURE: PackSource;
  readonly NO_DECORATION: JavaOpaque<"java.util.function.UnaryOperator", [j_net_minecraft_network_chat.Component]>;
  readonly SERVER: PackSource;
  readonly WORLD: PackSource;
  create(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_minecraft_network_chat.Component]>, arg1: boolean): PackSource;
}

/** JVM interface net.minecraft.server.packs.repository.RepositorySource. */
export interface RepositorySourceMembers {
  loadPacks(arg0: JavaConsumer<Pack>): void;
}
export type RepositorySource = RepositorySourceMembers;
export interface RepositorySourceStatics {
}

/** JVM class net.minecraft.server.packs.repository.ServerPacksSource. */
export interface ServerPacksSourceMembers {
  readonly __javaSupertypes?: readonly [BuiltInPackSource];
  createBuiltinPack(arg0: string, arg1: Pack_ResourcesSupplier, arg2: j_net_minecraft_network_chat.Component): Pack | null;
  createVanillaPack(arg0: j_net_minecraft_server_packs.PackResources): Pack | null;
  getPackTitle(arg0: string): j_net_minecraft_network_chat.Component;
}
export type ServerPacksSource = ServerPacksSourceMembers & BuiltInPackSource;
export interface ServerPacksSourceStatics {
  new(arg0: j_net_minecraft_world_level_validation.DirectoryValidator): ServerPacksSource;
  createPackRepository(arg0: JavaOpaque<"java.nio.file.Path">, arg1: j_net_minecraft_world_level_validation.DirectoryValidator): PackRepository;
  createPackRepository(arg0: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess): PackRepository;
  createVanillaPackSource(): j_net_minecraft_server_packs.VanillaPackResources;
  createVanillaTrustedRepository(): PackRepository;
}
