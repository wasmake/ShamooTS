// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_serializer from './net.kyori.adventure.text.serializer.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.configuration.Configuration. */
export interface ConfigurationMembers {
  readonly __javaSupertypes?: readonly [ConfigurationSection];
  addDefault(arg0: string, arg1: object | null): void | null;
  addDefaults(arg0: JavaMap<string, object>): void;
  addDefaults(arg0: Configuration): void;
  getDefaults(): Configuration | null;
  options(): ConfigurationOptions;
  setDefaults(arg0: Configuration): void;
}
export type Configuration = ConfigurationMembers & ConfigurationSection;
export interface ConfigurationStatics {
}

/** JVM class org.bukkit.configuration.ConfigurationOptions. */
export interface ConfigurationOptionsMembers {
  configuration(): Configuration;
  copyDefaults(): boolean;
  copyDefaults(arg0: boolean): ConfigurationOptions;
  pathSeparator(): string;
  pathSeparator(arg0: string): ConfigurationOptions;
}
export type ConfigurationOptions = ConfigurationOptionsMembers;
export interface ConfigurationOptionsStatics {
  new(arg0: Configuration): ConfigurationOptions;
}

/** JVM interface org.bukkit.configuration.ConfigurationSection. */
export interface ConfigurationSectionMembers {
  addDefault(arg0: string, arg1: object | null): void | null;
  contains(arg0: string): boolean;
  contains(arg0: string, arg1: boolean): boolean;
  createSection(arg0: string): ConfigurationSection;
  createSection(arg0: string, arg1: JavaMap<object, object>): ConfigurationSection;
  get(arg0: string): object | null;
  get(arg0: string, arg1: object | null): object | null;
  getBoolean(arg0: string): boolean;
  getBoolean(arg0: string, arg1: boolean): boolean;
  getBooleanList(arg0: string): JavaList<boolean>;
  getByteList(arg0: string): JavaList<number>;
  getCharacterList(arg0: string): JavaList<string>;
  getColor(arg0: string): j_org_bukkit.Color | null;
  getColor(arg0: string, arg1: j_org_bukkit.Color | null): j_org_bukkit.Color | null;
  getComments(arg0: string): JavaList<string>;
  getComponent<C /* extends j_net_kyori_adventure_text.Component */>(arg0: string, arg1: j_net_kyori_adventure_text_serializer.ComponentDecoder<string, C>): C | null;
  getComponent<C /* extends j_net_kyori_adventure_text.Component */>(arg0: string, arg1: j_net_kyori_adventure_text_serializer.ComponentDecoder<string, C>, arg2: C | null): C | null;
  getConfigurationSection(arg0: string): ConfigurationSection | null;
  getCurrentPath(): string | null;
  getDefaultSection(): ConfigurationSection | null;
  getDouble(arg0: string): number;
  getDouble(arg0: string, arg1: number): number;
  getDoubleList(arg0: string): JavaList<number>;
  getFloatList(arg0: string): JavaList<number>;
  getInlineComments(arg0: string): JavaList<string>;
  getInt(arg0: string): number;
  getInt(arg0: string, arg1: number): number;
  getIntegerList(arg0: string): JavaList<number>;
  getItemStack(arg0: string): j_org_bukkit_inventory.ItemStack | null;
  getItemStack(arg0: string, arg1: j_org_bukkit_inventory.ItemStack | null): j_org_bukkit_inventory.ItemStack | null;
  getKeys(arg0: boolean): JavaSet<string>;
  getList(arg0: string): JavaList<object> | null;
  getList(arg0: string, arg1: JavaList<object> | null): JavaList<object> | null;
  getLocation(arg0: string): j_org_bukkit.Location | null;
  getLocation(arg0: string, arg1: j_org_bukkit.Location | null): j_org_bukkit.Location | null;
  getLong(arg0: string): bigint;
  getLong(arg0: string, arg1: bigint): bigint;
  getLongList(arg0: string): JavaList<bigint>;
  getMapList(arg0: string): JavaList<JavaMap<object, object>>;
  getName(): string;
  getObject<T>(arg0: string, arg1: JavaClass<T>): T | null;
  getObject<T>(arg0: string, arg1: JavaClass<T>, arg2: T | null): T | null;
  getOfflinePlayer(arg0: string): j_org_bukkit.OfflinePlayer | null;
  getOfflinePlayer(arg0: string, arg1: j_org_bukkit.OfflinePlayer | null): j_org_bukkit.OfflinePlayer | null;
  getParent(): ConfigurationSection | null;
  getRichMessage(arg0: string): j_net_kyori_adventure_text.Component | null;
  getRichMessage(arg0: string, arg1: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_text.Component | null;
  getRoot(): Configuration | null;
  getSerializable<T /* extends j_org_bukkit_configuration_serialization.ConfigurationSerializable */>(arg0: string, arg1: JavaClass<T>): T | null;
  getSerializable<T /* extends j_org_bukkit_configuration_serialization.ConfigurationSerializable */>(arg0: string, arg1: JavaClass<T>, arg2: T | null): T | null;
  getShortList(arg0: string): JavaList<number>;
  getString(arg0: string): string | null;
  getString(arg0: string, arg1: string | null): string | null;
  getStringList(arg0: string): JavaList<string>;
  getValues(arg0: boolean): JavaMap<string, object>;
  getVector(arg0: string): j_org_bukkit_util.Vector | null;
  getVector(arg0: string, arg1: j_org_bukkit_util.Vector | null): j_org_bukkit_util.Vector | null;
  isBoolean(arg0: string): boolean;
  isColor(arg0: string): boolean;
  isConfigurationSection(arg0: string): boolean;
  isDouble(arg0: string): boolean;
  isInt(arg0: string): boolean;
  isItemStack(arg0: string): boolean;
  isList(arg0: string): boolean;
  isLocation(arg0: string): boolean;
  isLong(arg0: string): boolean;
  isOfflinePlayer(arg0: string): boolean;
  isSet(arg0: string): boolean;
  isString(arg0: string): boolean;
  isVector(arg0: string): boolean;
  set(arg0: string, arg1: object | null): void | null;
  setComments(arg0: string, arg1: JavaList<string> | null): void | null;
  setComponent<C /* extends j_net_kyori_adventure_text.Component */>(arg0: string, arg1: j_net_kyori_adventure_text_serializer.ComponentEncoder<C, string>, arg2: C | null): void | null;
  setInlineComments(arg0: string, arg1: JavaList<string> | null): void | null;
  setRichMessage(arg0: string, arg1: j_net_kyori_adventure_text.Component): void | null;
}
export type ConfigurationSection = ConfigurationSectionMembers;
export interface ConfigurationSectionStatics {
}

/** JVM class org.bukkit.configuration.InvalidConfigurationException. */
export interface InvalidConfigurationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
}
export type InvalidConfigurationException = InvalidConfigurationExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface InvalidConfigurationExceptionStatics {
  new(): InvalidConfigurationException;
  new(arg0: string): InvalidConfigurationException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): InvalidConfigurationException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): InvalidConfigurationException;
}

/** JVM class org.bukkit.configuration.MemoryConfiguration. */
export interface MemoryConfigurationMembers {
  readonly __javaSupertypes?: readonly [MemorySection, Configuration];
  addDefault(arg0: string, arg1: object | null): void | null;
  addDefaults(arg0: JavaMap<string, object>): void;
  addDefaults(arg0: Configuration): void;
  defaults: Configuration;
  getDefaults(): Configuration | null;
  getParent(): ConfigurationSection | null;
  options: (MemoryConfigurationOptions) & { (): ConfigurationOptions; (): MemoryConfigurationOptions };
  setDefaults(arg0: Configuration): void;
}
export type MemoryConfiguration = MemoryConfigurationMembers & MemorySection & Configuration;
export interface MemoryConfigurationStatics {
  new(): MemoryConfiguration;
  new(arg0: Configuration | null): MemoryConfiguration;
}

/** JVM class org.bukkit.configuration.MemoryConfigurationOptions. */
export interface MemoryConfigurationOptionsMembers {
  readonly __javaSupertypes?: readonly [ConfigurationOptions];
  configuration(): Configuration;
  configuration(): MemoryConfiguration;
  copyDefaults(arg0: boolean): ConfigurationOptions;
  copyDefaults(arg0: boolean): MemoryConfigurationOptions;
  pathSeparator(arg0: string): ConfigurationOptions;
  pathSeparator(arg0: string): MemoryConfigurationOptions;
}
export type MemoryConfigurationOptions = MemoryConfigurationOptionsMembers & ConfigurationOptions;
export interface MemoryConfigurationOptionsStatics {
  new(arg0: MemoryConfiguration): MemoryConfigurationOptions;
}

/** JVM class org.bukkit.configuration.MemorySection. */
export interface MemorySectionMembers {
  readonly __javaSupertypes?: readonly [ConfigurationSection];
  addDefault(arg0: string, arg1: object | null): void | null;
  contains(arg0: string): boolean;
  contains(arg0: string, arg1: boolean): boolean;
  createSection(arg0: string): ConfigurationSection;
  createSection(arg0: string, arg1: JavaMap<object, object>): ConfigurationSection;
  get(arg0: string): object | null;
  get(arg0: string, arg1: object | null): object | null;
  getBoolean(arg0: string): boolean;
  getBoolean(arg0: string, arg1: boolean): boolean;
  getBooleanList(arg0: string): JavaList<boolean>;
  getByteList(arg0: string): JavaList<number>;
  getCharacterList(arg0: string): JavaList<string>;
  getColor(arg0: string): j_org_bukkit.Color | null;
  getColor(arg0: string, arg1: j_org_bukkit.Color | null): j_org_bukkit.Color | null;
  getComments(arg0: string): JavaList<string>;
  getConfigurationSection(arg0: string): ConfigurationSection | null;
  getCurrentPath(): string;
  getDefault(arg0: string): object | null;
  getDefaultSection(): ConfigurationSection | null;
  getDouble(arg0: string): number;
  getDouble(arg0: string, arg1: number): number;
  getDoubleList(arg0: string): JavaList<number>;
  getFloatList(arg0: string): JavaList<number>;
  getInlineComments(arg0: string): JavaList<string>;
  getInt(arg0: string): number;
  getInt(arg0: string, arg1: number): number;
  getIntegerList(arg0: string): JavaList<number>;
  getItemStack(arg0: string): j_org_bukkit_inventory.ItemStack | null;
  getItemStack(arg0: string, arg1: j_org_bukkit_inventory.ItemStack | null): j_org_bukkit_inventory.ItemStack | null;
  getKeys(arg0: boolean): JavaSet<string>;
  getList(arg0: string): JavaList<object> | null;
  getList(arg0: string, arg1: JavaList<object> | null): JavaList<object> | null;
  getLocation(arg0: string): j_org_bukkit.Location | null;
  getLocation(arg0: string, arg1: j_org_bukkit.Location | null): j_org_bukkit.Location | null;
  getLong(arg0: string): bigint;
  getLong(arg0: string, arg1: bigint): bigint;
  getLongList(arg0: string): JavaList<bigint>;
  getMapList(arg0: string): JavaList<JavaMap<object, object>>;
  getName(): string;
  getObject<T>(arg0: string, arg1: JavaClass<T>): T | null;
  getObject<T>(arg0: string, arg1: JavaClass<T>, arg2: T | null): T | null;
  getOfflinePlayer(arg0: string): j_org_bukkit.OfflinePlayer | null;
  getOfflinePlayer(arg0: string, arg1: j_org_bukkit.OfflinePlayer | null): j_org_bukkit.OfflinePlayer | null;
  getParent(): ConfigurationSection | null;
  getRoot(): Configuration | null;
  getSerializable<T /* extends j_org_bukkit_configuration_serialization.ConfigurationSerializable */>(arg0: string, arg1: JavaClass<T>): T | null;
  getSerializable<T /* extends j_org_bukkit_configuration_serialization.ConfigurationSerializable */>(arg0: string, arg1: JavaClass<T>, arg2: T | null): T | null;
  getShortList(arg0: string): JavaList<number>;
  getString(arg0: string): string | null;
  getString(arg0: string, arg1: string | null): string | null;
  getStringList(arg0: string): JavaList<string>;
  getValues(arg0: boolean): JavaMap<string, object>;
  getVector(arg0: string): j_org_bukkit_util.Vector | null;
  getVector(arg0: string, arg1: j_org_bukkit_util.Vector | null): j_org_bukkit_util.Vector | null;
  isBoolean(arg0: string): boolean;
  isColor(arg0: string): boolean;
  isConfigurationSection(arg0: string): boolean;
  isDouble(arg0: string): boolean;
  isInt(arg0: string): boolean;
  isItemStack(arg0: string): boolean;
  isList(arg0: string): boolean;
  isLocation(arg0: string): boolean;
  isLong(arg0: string): boolean;
  isOfflinePlayer(arg0: string): boolean;
  isPrimitiveWrapper(arg0: object | null): boolean | null;
  isSet(arg0: string): boolean;
  isString(arg0: string): boolean;
  isVector(arg0: string): boolean;
  readonly map: JavaMap<string, JavaOpaque<"org.bukkit.configuration.SectionPathData">>;
  mapChildrenKeys(arg0: JavaSet<string>, arg1: ConfigurationSection, arg2: boolean): void;
  mapChildrenValues(arg0: JavaMap<string, object>, arg1: ConfigurationSection, arg2: boolean): void;
  set(arg0: string, arg1: object | null): void | null;
  setComments(arg0: string, arg1: JavaList<string> | null): void | null;
  setInlineComments(arg0: string, arg1: JavaList<string> | null): void | null;
  toString(): string;
}
export type MemorySection = MemorySectionMembers & ConfigurationSection;
export interface MemorySectionStatics {
  new(): MemorySection;
  new(arg0: ConfigurationSection, arg1: string): MemorySection;
  createPath(arg0: ConfigurationSection, arg1: string | null): string | null;
  createPath(arg0: ConfigurationSection, arg1: string | null, arg2: ConfigurationSection | null): string | null;
}
