// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** JVM class org.bukkit.craftbukkit.generator.structure.CraftGeneratedStructure. */
export interface CraftGeneratedStructureMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.structure.GeneratedStructure">];
  getBoundingBox(): JavaOpaque<"org.bukkit.util.BoundingBox">;
  getPersistentDataContainer(): JavaOpaque<"io.papermc.paper.persistence.PersistentDataContainerView">;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPieces(): JavaCollection<JavaOpaque<"org.bukkit.generator.structure.StructurePiece">>;
  getStructure(): JavaOpaque<"org.bukkit.generator.structure.Structure">;
}
export type CraftGeneratedStructure = CraftGeneratedStructureMembers & JavaOpaque<"org.bukkit.generator.structure.GeneratedStructure">;
export interface CraftGeneratedStructureStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.StructureStart): CraftGeneratedStructure;
}

/** JVM class org.bukkit.craftbukkit.generator.structure.CraftStructure. */
export interface CraftStructureMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.structure.Structure">, JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_level_levelgen_structure.Structure]>];
  equals(arg0: object): boolean;
  getHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getStructureType(): JavaOpaque<"org.bukkit.generator.structure.StructureType">;
  hashCode(): number;
  toString(): string;
}
export type CraftStructure = CraftStructureMembers & JavaOpaque<"org.bukkit.generator.structure.Structure"> & JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_level_levelgen_structure.Structure]>;
export interface CraftStructureStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.Structure>): CraftStructure;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.generator.structure.Structure">): j_net_minecraft_world_level_levelgen_structure.Structure;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_levelgen_structure.Structure): JavaOpaque<"org.bukkit.generator.structure.Structure">;
}

/** JVM class org.bukkit.craftbukkit.generator.structure.CraftStructurePiece. */
export interface CraftStructurePieceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.structure.StructurePiece">];
  getBoundingBox(): JavaOpaque<"org.bukkit.util.BoundingBox">;
}
export type CraftStructurePiece = CraftStructurePieceMembers & JavaOpaque<"org.bukkit.generator.structure.StructurePiece">;
export interface CraftStructurePieceStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_structure.StructurePiece): CraftStructurePiece;
}

/** JVM class org.bukkit.craftbukkit.generator.structure.CraftStructureType. */
export interface CraftStructureTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.generator.structure.StructureType">, JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_level_levelgen_structure.StructureType<object>]>];
  equals(arg0: object): boolean;
  getHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureType<object>>;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  hashCode(): number;
  toString(): string;
}
export type CraftStructureType = CraftStructureTypeMembers & JavaOpaque<"org.bukkit.generator.structure.StructureType"> & JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_level_levelgen_structure.StructureType<object>]>;
export interface CraftStructureTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure.StructureType<object>>): CraftStructureType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.generator.structure.StructureType">): j_net_minecraft_world_level_levelgen_structure.StructureType<object>;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_levelgen_structure.StructureType<object>): JavaOpaque<"org.bukkit.generator.structure.StructureType">;
}
