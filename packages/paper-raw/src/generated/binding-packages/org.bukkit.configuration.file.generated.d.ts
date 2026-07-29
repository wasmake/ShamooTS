// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_configuration from './org.bukkit.configuration.generated.js';

/** JVM abstract org.bukkit.configuration.file.FileConfiguration. */
export interface FileConfigurationMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration.MemoryConfiguration];
  /** @throws java.io.FileNotFoundException @throws java.io.IOException @throws org.bukkit.configuration.InvalidConfigurationException */
  load(arg0: JavaOpaque<"java.io.File">): void;
  /** @throws java.io.IOException @throws org.bukkit.configuration.InvalidConfigurationException */
  load(arg0: JavaOpaque<"java.io.Reader">): void;
  /** @throws java.io.FileNotFoundException @throws java.io.IOException @throws org.bukkit.configuration.InvalidConfigurationException */
  load(arg0: string): void;
  /** @throws org.bukkit.configuration.InvalidConfigurationException */
  loadFromString(arg0: string): void;
  options(): FileConfigurationOptions;
  /** @throws java.io.IOException */
  save(arg0: JavaOpaque<"java.io.File">): void;
  /** @throws java.io.IOException */
  save(arg0: string): void;
  saveToString(): string;
}
export type FileConfiguration = FileConfigurationMembers & j_org_bukkit_configuration.MemoryConfiguration;
export interface FileConfigurationStatics {
}

/** JVM class org.bukkit.configuration.file.FileConfigurationOptions. */
export interface FileConfigurationOptionsMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration.MemoryConfigurationOptions];
  configuration(): FileConfiguration;
  copyDefaults(arg0: boolean): FileConfigurationOptions;
  copyHeader(): boolean;
  copyHeader(arg0: boolean): FileConfigurationOptions;
  getFooter(): JavaList<string>;
  getHeader(): JavaList<string>;
  header(): string;
  header(arg0: string | null): FileConfigurationOptions;
  parseComments(): boolean;
  parseComments(arg0: boolean): j_org_bukkit_configuration.MemoryConfigurationOptions;
  pathSeparator(arg0: string): FileConfigurationOptions;
  setFooter(arg0: JavaList<string> | null): FileConfigurationOptions;
  setHeader(arg0: JavaList<string> | null): FileConfigurationOptions;
}
export type FileConfigurationOptions = FileConfigurationOptionsMembers & j_org_bukkit_configuration.MemoryConfigurationOptions;
export interface FileConfigurationOptionsStatics {
}

/** JVM class org.bukkit.configuration.file.YamlConfiguration. */
export interface YamlConfigurationMembers {
  readonly __javaSupertypes?: readonly [FileConfiguration];
  /** @throws org.bukkit.configuration.InvalidConfigurationException */
  loadFromString(arg0: string): void;
  options(): YamlConfigurationOptions;
  saveToString(): string;
}
export type YamlConfiguration = YamlConfigurationMembers & FileConfiguration;
export interface YamlConfigurationStatics {
  new(): YamlConfiguration;
  loadConfiguration(arg0: JavaOpaque<"java.io.File">): YamlConfiguration;
  loadConfiguration(arg0: JavaOpaque<"java.io.Reader">): YamlConfiguration;
}

/** JVM class org.bukkit.configuration.file.YamlConfigurationOptions. */
export interface YamlConfigurationOptionsMembers {
  readonly __javaSupertypes?: readonly [FileConfigurationOptions];
  codePointLimit(): number;
  codePointLimit(arg0: number): YamlConfigurationOptions;
  configuration(): YamlConfiguration;
  copyDefaults(arg0: boolean): YamlConfigurationOptions;
  copyHeader(arg0: boolean): YamlConfigurationOptions;
  header(arg0: string | null): YamlConfigurationOptions;
  indent(): number;
  indent(arg0: number): YamlConfigurationOptions;
  parseComments(arg0: boolean): YamlConfigurationOptions;
  pathSeparator(arg0: string): YamlConfigurationOptions;
  setFooter(arg0: JavaList<string> | null): YamlConfigurationOptions;
  setHeader(arg0: JavaList<string> | null): YamlConfigurationOptions;
  width(): number;
  width(arg0: number): YamlConfigurationOptions;
}
export type YamlConfigurationOptions = YamlConfigurationOptionsMembers & FileConfigurationOptions;
export interface YamlConfigurationOptionsStatics {
}

/** JVM class org.bukkit.configuration.file.YamlConstructor. */
export interface YamlConstructorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.yaml.snakeyaml.constructor.SafeConstructor">];
  construct(arg0: JavaOpaque<"org.yaml.snakeyaml.nodes.Node">): object | null;
  flattenMapping(arg0: JavaOpaque<"org.yaml.snakeyaml.nodes.MappingNode">): void;
}
export type YamlConstructor = YamlConstructorMembers & JavaOpaque<"org.yaml.snakeyaml.constructor.SafeConstructor">;
export interface YamlConstructorStatics {
  new(): YamlConstructor;
  new(arg0: JavaOpaque<"org.yaml.snakeyaml.LoaderOptions">): YamlConstructor;
}

/** JVM class org.bukkit.configuration.file.YamlRepresenter. */
export interface YamlRepresenterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.yaml.snakeyaml.representer.Representer">];
}
export type YamlRepresenter = YamlRepresenterMembers & JavaOpaque<"org.yaml.snakeyaml.representer.Representer">;
export interface YamlRepresenterStatics {
  new(): YamlRepresenter;
  new(arg0: JavaOpaque<"org.yaml.snakeyaml.DumperOptions">): YamlRepresenter;
}
