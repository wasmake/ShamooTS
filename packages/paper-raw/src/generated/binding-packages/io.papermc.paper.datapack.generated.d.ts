// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_registrar from './io.papermc.paper.plugin.lifecycle.event.registrar.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface io.papermc.paper.datapack.Datapack. */
export interface DatapackMembers {
  readonly __javaSupertypes?: readonly [DiscoveredDatapack];
  computeDisplayName(): j_net_kyori_adventure_text.Component;
  isEnabled(): boolean;
  setEnabled(arg0: boolean): void;
}
export type Datapack = DatapackMembers & DiscoveredDatapack;
export interface DatapackStatics {
}

/** Live JVM enum io.papermc.paper.datapack.Datapack$Compatibility; constants are host handles, not strings. */
export type Datapack_Compatibility = JavaEnum<"io.papermc.paper.datapack.Datapack$Compatibility", "COMPATIBLE" | "TOO_NEW" | "TOO_OLD"> & Datapack_CompatibilityMembers;
export interface Datapack_CompatibilityMembers {
}
export interface Datapack_CompatibilityStatics {
  readonly COMPATIBLE: Datapack_Compatibility;
  readonly TOO_NEW: Datapack_Compatibility;
  readonly TOO_OLD: Datapack_Compatibility;
  valueOf(arg0: string): Datapack_Compatibility;
  values(): Array<Datapack_Compatibility>;
}

/** Live JVM enum io.papermc.paper.datapack.Datapack$Position; constants are host handles, not strings. */
export type Datapack_Position = JavaEnum<"io.papermc.paper.datapack.Datapack$Position", "BOTTOM" | "TOP"> & Datapack_PositionMembers;
export interface Datapack_PositionMembers {
}
export interface Datapack_PositionStatics {
  readonly BOTTOM: Datapack_Position;
  readonly TOP: Datapack_Position;
  valueOf(arg0: string): Datapack_Position;
  values(): Array<Datapack_Position>;
}

/** JVM interface io.papermc.paper.datapack.DatapackManager. */
export interface DatapackManagerMembers {
  getEnabledPacks(): JavaCollection<Datapack>;
  getPack(arg0: string): Datapack | null;
  getPacks(): JavaCollection<Datapack>;
  refreshPacks(): void;
}
export type DatapackManager = DatapackManagerMembers;
export interface DatapackManagerStatics {
}

/** JVM interface io.papermc.paper.datapack.DatapackRegistrar. */
export interface DatapackRegistrarMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar];
  /** @throws java.io.IOException */
  discoverPack(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: JavaOpaque<"java.net.URI">, arg2: string, arg3: JavaConsumer<DatapackRegistrar_Configurer>): DiscoveredDatapack | null;
  /** @throws java.io.IOException */
  discoverPack(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: JavaOpaque<"java.nio.file.Path">, arg2: string, arg3: JavaConsumer<DatapackRegistrar_Configurer>): DiscoveredDatapack | null;
  /** @throws java.io.IOException */
  discoverPack(arg0: JavaOpaque<"java.net.URI">, arg1: string): DiscoveredDatapack | null;
  /** @throws java.io.IOException */
  discoverPack(arg0: JavaOpaque<"java.net.URI">, arg1: string, arg2: JavaConsumer<DatapackRegistrar_Configurer>): DiscoveredDatapack | null;
  /** @throws java.io.IOException */
  discoverPack(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string): DiscoveredDatapack | null;
  /** @throws java.io.IOException */
  discoverPack(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string, arg2: JavaConsumer<DatapackRegistrar_Configurer>): DiscoveredDatapack | null;
  getDiscoveredPack(arg0: string): DiscoveredDatapack;
  getDiscoveredPacks(): JavaMap<string, DiscoveredDatapack>;
  hasPackDiscovered(arg0: string): boolean;
  removeDiscoveredPack(arg0: string): boolean;
}
export type DatapackRegistrar = DatapackRegistrarMembers & j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar;
export interface DatapackRegistrarStatics {
}

/** JVM interface io.papermc.paper.datapack.DatapackRegistrar$Configurer. */
export interface DatapackRegistrar_ConfigurerMembers {
  autoEnableOnServerStart(arg0: boolean): DatapackRegistrar_Configurer;
  position(arg0: boolean, arg1: Datapack_Position): DatapackRegistrar_Configurer;
  title(arg0: j_net_kyori_adventure_text.Component): DatapackRegistrar_Configurer;
}
export type DatapackRegistrar_Configurer = DatapackRegistrar_ConfigurerMembers;
export interface DatapackRegistrar_ConfigurerStatics {
}

/** JVM interface io.papermc.paper.datapack.DatapackSource. */
export interface DatapackSourceMembers {
}
export type DatapackSource = DatapackSourceMembers;
export interface DatapackSourceStatics {
  readonly BUILT_IN: DatapackSource;
  readonly DEFAULT: DatapackSource;
  readonly FEATURE: DatapackSource;
  readonly PLUGIN: DatapackSource;
  readonly SERVER: DatapackSource;
  readonly WORLD: DatapackSource;
}

/** JVM interface io.papermc.paper.datapack.DiscoveredDatapack. */
export interface DiscoveredDatapackMembers {
  getCompatibility(): Datapack_Compatibility;
  getDescription(): j_net_kyori_adventure_text.Component;
  getName(): string;
  getRequiredFeatures(): JavaSet<j_org_bukkit.FeatureFlag>;
  getSource(): DatapackSource;
  getTitle(): j_net_kyori_adventure_text.Component;
  isRequired(): boolean;
}
export type DiscoveredDatapack = DiscoveredDatapackMembers;
export interface DiscoveredDatapackStatics {
}
