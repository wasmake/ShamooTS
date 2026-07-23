// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface org.bukkit.packs.DataPack. */
export interface DataPackMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  getCompatibility(): DataPack_Compatibility;
  getDescription(): string;
  getMaxSupportedPackFormat(): number;
  getMinSupportedPackFormat(): number;
  getPackFormat(): number;
  getRequestedFeatures(): JavaSet<j_org_bukkit.FeatureFlag>;
  getSource(): DataPack_Source;
  getTitle(): string;
  isEnabled(): boolean;
  isRequired(): boolean;
}
export type DataPack = DataPackMembers & j_org_bukkit.Keyed;
export interface DataPackStatics {
}

/** Live JVM enum org.bukkit.packs.DataPack$Compatibility; constants are host handles, not strings. */
export type DataPack_Compatibility = JavaEnum<"org.bukkit.packs.DataPack$Compatibility", "COMPATIBLE" | "NEW" | "OLD"> & DataPack_CompatibilityMembers;
export interface DataPack_CompatibilityMembers {
}
export interface DataPack_CompatibilityStatics {
  readonly COMPATIBLE: DataPack_Compatibility;
  readonly NEW: DataPack_Compatibility;
  readonly OLD: DataPack_Compatibility;
  valueOf(arg0: string): DataPack_Compatibility;
  values(): Array<DataPack_Compatibility>;
}

/** Live JVM enum org.bukkit.packs.DataPack$Source; constants are host handles, not strings. */
export type DataPack_Source = JavaEnum<"org.bukkit.packs.DataPack$Source", "BUILT_IN" | "DEFAULT" | "FEATURE" | "SERVER" | "WORLD"> & DataPack_SourceMembers;
export interface DataPack_SourceMembers {
}
export interface DataPack_SourceStatics {
  readonly BUILT_IN: DataPack_Source;
  readonly DEFAULT: DataPack_Source;
  readonly FEATURE: DataPack_Source;
  readonly SERVER: DataPack_Source;
  readonly WORLD: DataPack_Source;
  valueOf(arg0: string): DataPack_Source;
  values(): Array<DataPack_Source>;
}

/** JVM interface org.bukkit.packs.DataPackManager. */
export interface DataPackManagerMembers {
  getDataPack(arg0: j_org_bukkit.NamespacedKey): DataPack | null;
  getDataPacks(): JavaCollection<DataPack>;
  getDisabledDataPacks(arg0: j_org_bukkit.World): JavaCollection<DataPack>;
  getEnabledDataPacks(arg0: j_org_bukkit.World): JavaCollection<DataPack>;
  isEnabledByFeature(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.World): boolean;
  isEnabledByFeature(arg0: j_org_bukkit_block.BlockType, arg1: j_org_bukkit.World): boolean;
  isEnabledByFeature(arg0: j_org_bukkit_entity.EntityType, arg1: j_org_bukkit.World): boolean;
  isEnabledByFeature(arg0: j_org_bukkit_inventory.ItemType, arg1: j_org_bukkit.World): boolean;
}
export type DataPackManager = DataPackManagerMembers;
export interface DataPackManagerStatics {
}

/** JVM interface org.bukkit.packs.ResourcePack. */
export interface ResourcePackMembers {
  getHash(): string | null;
  getId(): JavaOpaque<"java.util.UUID">;
  getPrompt(): string | null;
  getUrl(): string;
  isRequired(): boolean;
}
export type ResourcePack = ResourcePackMembers;
export interface ResourcePackStatics {
}
