// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';

/** JVM class org.bukkit.craftbukkit.structure.CraftPalette. */
export interface CraftPaletteMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.structure.Palette">];
  getBlockCount(): number;
  getBlocks(): JavaList<JavaOpaque<"org.bukkit.block.BlockState">>;
}
export type CraftPalette = CraftPaletteMembers & JavaOpaque<"org.bukkit.structure.Palette">;
export interface CraftPaletteStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_Palette, arg1: j_net_minecraft_core.RegistryAccess): CraftPalette;
}

/** JVM class org.bukkit.craftbukkit.structure.CraftStructure. */
export interface CraftStructure_2Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.structure.Structure">];
  fill(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: boolean): void;
  fill(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.BlockVector">, arg2: boolean): void;
  getEntities(): JavaList<JavaOpaque<"org.bukkit.entity.Entity">>;
  getEntityCount(): number;
  getHandle(): j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate;
  getPaletteCount(): number;
  getPalettes(): JavaList<JavaOpaque<"org.bukkit.structure.Palette">>;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getSize(): JavaOpaque<"org.bukkit.util.BlockVector">;
  place(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean, arg2: JavaOpaque<"org.bukkit.block.structure.StructureRotation">, arg3: JavaOpaque<"org.bukkit.block.structure.Mirror">, arg4: number, arg5: number, arg6: JavaOpaque<"java.util.Random">): void;
  place(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean, arg2: JavaOpaque<"org.bukkit.block.structure.StructureRotation">, arg3: JavaOpaque<"org.bukkit.block.structure.Mirror">, arg4: number, arg5: number, arg6: JavaOpaque<"java.util.Random">, arg7: JavaCollection<JavaOpaque<"org.bukkit.util.BlockTransformer">>, arg8: JavaCollection<JavaOpaque<"org.bukkit.util.EntityTransformer">>): void;
  place(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: JavaOpaque<"org.bukkit.util.BlockVector">, arg2: boolean, arg3: JavaOpaque<"org.bukkit.block.structure.StructureRotation">, arg4: JavaOpaque<"org.bukkit.block.structure.Mirror">, arg5: number, arg6: number, arg7: JavaOpaque<"java.util.Random">): void;
  place(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: JavaOpaque<"org.bukkit.util.BlockVector">, arg2: boolean, arg3: JavaOpaque<"org.bukkit.block.structure.StructureRotation">, arg4: JavaOpaque<"org.bukkit.block.structure.Mirror">, arg5: number, arg6: number, arg7: JavaOpaque<"java.util.Random">, arg8: JavaCollection<JavaOpaque<"org.bukkit.util.BlockTransformer">>, arg9: JavaCollection<JavaOpaque<"org.bukkit.util.EntityTransformer">>): void;
}
export type CraftStructure_2 = CraftStructure_2Members & JavaOpaque<"org.bukkit.structure.Structure">;
export interface CraftStructure_2Statics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate, arg1: j_net_minecraft_core.RegistryAccess): CraftStructure_2;
}

/** JVM class org.bukkit.craftbukkit.structure.CraftStructureManager. */
export interface CraftStructureManagerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.structure.StructureManager">];
  copy(arg0: JavaOpaque<"org.bukkit.structure.Structure">): JavaOpaque<"org.bukkit.structure.Structure">;
  createStructure(): JavaOpaque<"org.bukkit.structure.Structure">;
  /** @throws java.io.IOException */
  deleteStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  /** @throws java.io.IOException */
  deleteStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: boolean): void;
  getStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.structure.Structure">;
  getStructureFile(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"java.io.File">;
  getStructures(): JavaMap<JavaOpaque<"org.bukkit.NamespacedKey">, JavaOpaque<"org.bukkit.structure.Structure">>;
  /** @throws java.io.IOException */
  loadStructure(arg0: JavaOpaque<"java.io.File">): JavaOpaque<"org.bukkit.structure.Structure">;
  /** @throws java.io.IOException */
  loadStructure(arg0: JavaOpaque<"java.io.InputStream">): JavaOpaque<"org.bukkit.structure.Structure">;
  loadStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.structure.Structure">;
  loadStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: boolean): JavaOpaque<"org.bukkit.structure.Structure">;
  registerStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.structure.Structure">): JavaOpaque<"org.bukkit.structure.Structure">;
  /** @throws java.io.IOException */
  saveStructure(arg0: JavaOpaque<"java.io.File">, arg1: JavaOpaque<"org.bukkit.structure.Structure">): void;
  /** @throws java.io.IOException */
  saveStructure(arg0: JavaOpaque<"java.io.OutputStream">, arg1: JavaOpaque<"org.bukkit.structure.Structure">): void;
  saveStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  /** @throws java.io.IOException */
  saveStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.structure.Structure">): void;
  unregisterStructure(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.structure.Structure">;
}
export type CraftStructureManager = CraftStructureManagerMembers & JavaOpaque<"org.bukkit.structure.StructureManager">;
export interface CraftStructureManagerStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplateManager, arg1: j_net_minecraft_core.RegistryAccess): CraftStructureManager;
}
