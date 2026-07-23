// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_structure from './org.bukkit.block.structure.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.structure.Palette. */
export interface PaletteMembers {
  getBlockCount(): number;
  getBlocks(): JavaList<j_org_bukkit_block.BlockState>;
}
export type Palette = PaletteMembers;
export interface PaletteStatics {
}

/** JVM interface org.bukkit.structure.Structure. */
export interface Structure_3Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_persistence.PersistentDataHolder];
  fill(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Location, arg2: boolean): void;
  fill(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_util.BlockVector, arg2: boolean): void;
  getEntities(): JavaList<j_org_bukkit_entity.Entity>;
  getEntityCount(): number;
  getPaletteCount(): number;
  getPalettes(): JavaList<Palette>;
  getSize(): j_org_bukkit_util.BlockVector;
  place(arg0: j_org_bukkit.Location, arg1: boolean, arg2: j_org_bukkit_block_structure.StructureRotation, arg3: j_org_bukkit_block_structure.Mirror, arg4: number, arg5: number, arg6: JavaOpaque<"java.util.Random">): void;
  place(arg0: j_org_bukkit.Location, arg1: boolean, arg2: j_org_bukkit_block_structure.StructureRotation, arg3: j_org_bukkit_block_structure.Mirror, arg4: number, arg5: number, arg6: JavaOpaque<"java.util.Random">, arg7: JavaCollection<j_org_bukkit_util.BlockTransformer>, arg8: JavaCollection<j_org_bukkit_util.EntityTransformer>): void;
  place(arg0: j_org_bukkit.RegionAccessor, arg1: j_org_bukkit_util.BlockVector, arg2: boolean, arg3: j_org_bukkit_block_structure.StructureRotation, arg4: j_org_bukkit_block_structure.Mirror, arg5: number, arg6: number, arg7: JavaOpaque<"java.util.Random">): void;
  place(arg0: j_org_bukkit.RegionAccessor, arg1: j_org_bukkit_util.BlockVector, arg2: boolean, arg3: j_org_bukkit_block_structure.StructureRotation, arg4: j_org_bukkit_block_structure.Mirror, arg5: number, arg6: number, arg7: JavaOpaque<"java.util.Random">, arg8: JavaCollection<j_org_bukkit_util.BlockTransformer>, arg9: JavaCollection<j_org_bukkit_util.EntityTransformer>): void;
}
export type Structure_3 = Structure_3Members & j_org_bukkit_persistence.PersistentDataHolder;
export interface Structure_3Statics {
}

/** JVM interface org.bukkit.structure.StructureManager. */
export interface StructureManagerMembers {
  copy(arg0: Structure_3): Structure_3;
  createStructure(): Structure_3;
  /** @throws java.io.IOException */
  deleteStructure(arg0: j_org_bukkit.NamespacedKey): void;
  /** @throws java.io.IOException */
  deleteStructure(arg0: j_org_bukkit.NamespacedKey, arg1: boolean): void;
  getStructure(arg0: j_org_bukkit.NamespacedKey): Structure_3 | null;
  getStructureFile(arg0: j_org_bukkit.NamespacedKey): JavaOpaque<"java.io.File">;
  getStructures(): JavaMap<j_org_bukkit.NamespacedKey, Structure_3>;
  /** @throws java.io.IOException */
  loadStructure(arg0: JavaOpaque<"java.io.File">): Structure_3;
  /** @throws java.io.IOException */
  loadStructure(arg0: JavaOpaque<"java.io.InputStream">): Structure_3;
  loadStructure(arg0: j_org_bukkit.NamespacedKey): Structure_3 | null;
  loadStructure(arg0: j_org_bukkit.NamespacedKey, arg1: boolean): Structure_3 | null;
  registerStructure(arg0: j_org_bukkit.NamespacedKey, arg1: Structure_3): Structure_3 | null;
  /** @throws java.io.IOException */
  saveStructure(arg0: JavaOpaque<"java.io.File">, arg1: Structure_3): void;
  /** @throws java.io.IOException */
  saveStructure(arg0: JavaOpaque<"java.io.OutputStream">, arg1: Structure_3): void;
  saveStructure(arg0: j_org_bukkit.NamespacedKey): void;
  /** @throws java.io.IOException */
  saveStructure(arg0: j_org_bukkit.NamespacedKey, arg1: Structure_3): void;
  unregisterStructure(arg0: j_org_bukkit.NamespacedKey): Structure_3 | null;
}
export type StructureManager = StructureManagerMembers;
export interface StructureManagerStatics {
}
