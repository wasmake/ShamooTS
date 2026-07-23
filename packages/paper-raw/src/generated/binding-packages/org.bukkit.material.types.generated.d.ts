// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';

/** Live JVM enum org.bukkit.material.types.MushroomBlockTexture; constants are host handles, not strings. */
export type MushroomBlockTexture = JavaEnum<"org.bukkit.material.types.MushroomBlockTexture", "ALL_CAP" | "ALL_PORES" | "ALL_STEM" | "CAP_EAST" | "CAP_NORTH" | "CAP_NORTH_EAST" | "CAP_NORTH_WEST" | "CAP_SOUTH" | "CAP_SOUTH_EAST" | "CAP_SOUTH_WEST" | "CAP_TOP" | "CAP_WEST" | "STEM_SIDES"> & MushroomBlockTextureMembers;
export interface MushroomBlockTextureMembers {
  getCapFace(): j_org_bukkit_block.BlockFace | null;
  getData(): number;
}
export interface MushroomBlockTextureStatics {
  readonly ALL_CAP: MushroomBlockTexture;
  readonly ALL_PORES: MushroomBlockTexture;
  readonly ALL_STEM: MushroomBlockTexture;
  readonly CAP_EAST: MushroomBlockTexture;
  readonly CAP_NORTH: MushroomBlockTexture;
  readonly CAP_NORTH_EAST: MushroomBlockTexture;
  readonly CAP_NORTH_WEST: MushroomBlockTexture;
  readonly CAP_SOUTH: MushroomBlockTexture;
  readonly CAP_SOUTH_EAST: MushroomBlockTexture;
  readonly CAP_SOUTH_WEST: MushroomBlockTexture;
  readonly CAP_TOP: MushroomBlockTexture;
  readonly CAP_WEST: MushroomBlockTexture;
  readonly STEM_SIDES: MushroomBlockTexture;
  getByData(arg0: number): MushroomBlockTexture | null;
  getCapByFace(arg0: j_org_bukkit_block.BlockFace | null): MushroomBlockTexture | null;
  valueOf(arg0: string): MushroomBlockTexture;
  values(): Array<MushroomBlockTexture>;
}
