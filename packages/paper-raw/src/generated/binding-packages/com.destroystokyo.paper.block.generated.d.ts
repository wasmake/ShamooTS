// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';

/** JVM interface com.destroystokyo.paper.block.BlockSoundGroup. */
export interface BlockSoundGroupMembers {
  getBreakSound(): j_org_bukkit.Sound_2;
  getFallSound(): j_org_bukkit.Sound_2;
  getHitSound(): j_org_bukkit.Sound_2;
  getPlaceSound(): j_org_bukkit.Sound_2;
  getStepSound(): j_org_bukkit.Sound_2;
}
export type BlockSoundGroup = BlockSoundGroupMembers;
export interface BlockSoundGroupStatics {
}

/** JVM class com.destroystokyo.paper.block.TargetBlockInfo. */
export interface TargetBlockInfoMembers {
  getBlock(): j_org_bukkit_block.Block;
  getBlockFace(): j_org_bukkit_block.BlockFace;
  getRelativeBlock(): j_org_bukkit_block.Block;
}
export type TargetBlockInfo = TargetBlockInfoMembers;
export interface TargetBlockInfoStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_block.BlockFace): TargetBlockInfo;
}

/** Live JVM enum com.destroystokyo.paper.block.TargetBlockInfo$FluidMode; constants are host handles, not strings. */
export type TargetBlockInfo_FluidMode = JavaEnum<"com.destroystokyo.paper.block.TargetBlockInfo$FluidMode", "ALWAYS" | "NEVER" | "SOURCE_ONLY"> & TargetBlockInfo_FluidModeMembers;
export interface TargetBlockInfo_FluidModeMembers {
  readonly bukkit: j_org_bukkit.FluidCollisionMode;
}
export interface TargetBlockInfo_FluidModeStatics {
  readonly ALWAYS: TargetBlockInfo_FluidMode;
  readonly NEVER: TargetBlockInfo_FluidMode;
  readonly SOURCE_ONLY: TargetBlockInfo_FluidMode;
  valueOf(arg0: string): TargetBlockInfo_FluidMode;
  values(): Array<TargetBlockInfo_FluidMode>;
}
