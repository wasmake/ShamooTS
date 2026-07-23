// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.generator.structure.GeneratedStructure. */
export interface GeneratedStructureMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_persistence.PersistentDataHolder];
  getBoundingBox(): j_org_bukkit_util.BoundingBox;
  getPieces(): JavaCollection<StructurePiece>;
  getStructure(): Structure_2;
}
export type GeneratedStructure = GeneratedStructureMembers & j_org_bukkit_persistence.PersistentDataHolder;
export interface GeneratedStructureStatics {
}

/** JVM abstract org.bukkit.generator.structure.Structure. */
export interface Structure_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  getKey(): j_org_bukkit.NamespacedKey;
  getStructureType(): StructureType_2;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type Structure_2 = Structure_2Members & j_org_bukkit.Keyed;
export interface Structure_2Statics {
  new(): Structure_2;
  readonly ANCIENT_CITY: Structure_2;
  readonly BASTION_REMNANT: Structure_2;
  readonly BURIED_TREASURE: Structure_2;
  readonly DESERT_PYRAMID: Structure_2;
  readonly END_CITY: Structure_2;
  readonly FORTRESS: Structure_2;
  readonly IGLOO: Structure_2;
  readonly JUNGLE_PYRAMID: Structure_2;
  readonly MANSION: Structure_2;
  readonly MINESHAFT: Structure_2;
  readonly MINESHAFT_MESA: Structure_2;
  readonly MONUMENT: Structure_2;
  readonly NETHER_FOSSIL: Structure_2;
  readonly OCEAN_RUIN_COLD: Structure_2;
  readonly OCEAN_RUIN_WARM: Structure_2;
  readonly PILLAGER_OUTPOST: Structure_2;
  readonly RUINED_PORTAL: Structure_2;
  readonly RUINED_PORTAL_DESERT: Structure_2;
  readonly RUINED_PORTAL_JUNGLE: Structure_2;
  readonly RUINED_PORTAL_MOUNTAIN: Structure_2;
  readonly RUINED_PORTAL_NETHER: Structure_2;
  readonly RUINED_PORTAL_OCEAN: Structure_2;
  readonly RUINED_PORTAL_SWAMP: Structure_2;
  readonly SHIPWRECK: Structure_2;
  readonly SHIPWRECK_BEACHED: Structure_2;
  readonly STRONGHOLD: Structure_2;
  readonly SWAMP_HUT: Structure_2;
  readonly TRAIL_RUINS: Structure_2;
  readonly TRIAL_CHAMBERS: Structure_2;
  readonly VILLAGE_DESERT: Structure_2;
  readonly VILLAGE_PLAINS: Structure_2;
  readonly VILLAGE_SAVANNA: Structure_2;
  readonly VILLAGE_SNOWY: Structure_2;
  readonly VILLAGE_TAIGA: Structure_2;
}

/** JVM interface org.bukkit.generator.structure.StructurePiece. */
export interface StructurePieceMembers {
  getBoundingBox(): j_org_bukkit_util.BoundingBox;
}
export type StructurePiece = StructurePieceMembers;
export interface StructurePieceStatics {
}

/** JVM abstract org.bukkit.generator.structure.StructureType. */
export interface StructureType_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
}
export type StructureType_2 = StructureType_2Members & j_org_bukkit.Keyed;
export interface StructureType_2Statics {
  new(): StructureType_2;
  readonly BURIED_TREASURE: StructureType_2;
  readonly DESERT_PYRAMID: StructureType_2;
  readonly END_CITY: StructureType_2;
  readonly FORTRESS: StructureType_2;
  readonly IGLOO: StructureType_2;
  readonly JIGSAW: StructureType_2;
  readonly JUNGLE_TEMPLE: StructureType_2;
  readonly MINESHAFT: StructureType_2;
  readonly NETHER_FOSSIL: StructureType_2;
  readonly OCEAN_MONUMENT: StructureType_2;
  readonly OCEAN_RUIN: StructureType_2;
  readonly RUINED_PORTAL: StructureType_2;
  readonly SHIPWRECK: StructureType_2;
  readonly STRONGHOLD: StructureType_2;
  readonly SWAMP_HUT: StructureType_2;
  readonly WOODLAND_MANSION: StructureType_2;
}
