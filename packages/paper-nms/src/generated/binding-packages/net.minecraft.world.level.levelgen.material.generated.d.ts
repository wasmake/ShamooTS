// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';

/** JVM record net.minecraft.world.level.levelgen.material.MaterialRuleList. */
export interface MaterialRuleListMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_level_levelgen.NoiseChunk_BlockStateFiller];
  calculate(arg0: j_net_minecraft_world_level_levelgen.DensityFunction_FunctionContext): j_net_minecraft_world_level_block_state.BlockState | null;
  equals(arg0: object): boolean;
  hashCode(): number;
  materialRuleList(): Array<j_net_minecraft_world_level_levelgen.NoiseChunk_BlockStateFiller>;
  toString(): string;
}
export type MaterialRuleList = MaterialRuleListMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_level_levelgen.NoiseChunk_BlockStateFiller;
export interface MaterialRuleListStatics {
  new(arg0: Array<j_net_minecraft_world_level_levelgen.NoiseChunk_BlockStateFiller>): MaterialRuleList;
}

/** JVM interface net.minecraft.world.level.levelgen.material.WorldGenMaterialRule. */
export interface WorldGenMaterialRuleMembers {
  apply(arg0: j_net_minecraft_world_level_levelgen.NoiseChunk, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type WorldGenMaterialRule = WorldGenMaterialRuleMembers;
export interface WorldGenMaterialRuleStatics {
}
