// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';

/** JVM record net.minecraft.world.level.levelgen.structure.pools.alias.DirectPoolAlias. */
export interface DirectPoolAliasMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, PoolAliasBinding];
  alias(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  allTargets(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>]>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DirectPoolAlias]>;
  equals(arg0: object): boolean;
  forEachResolved(arg0: j_net_minecraft_util.RandomSource, arg1: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>): void;
  hashCode(): number;
  target(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  toString(): string;
}
export type DirectPoolAlias = DirectPoolAliasMembers & JavaOpaque<"java.lang.Record"> & PoolAliasBinding;
export interface DirectPoolAliasStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): DirectPoolAlias;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasBinding. */
export interface PoolAliasBindingMembers {
  allTargets(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>]>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PoolAliasBinding]>;
  forEachResolved(arg0: j_net_minecraft_util.RandomSource, arg1: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>): void;
}
export type PoolAliasBinding = PoolAliasBindingMembers;
export interface PoolAliasBindingStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PoolAliasBinding]>;
  direct(arg0: string, arg1: string): DirectPoolAlias;
  direct(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): DirectPoolAlias;
  random(arg0: string, arg1: j_net_minecraft_util_random.WeightedList<string>): RandomPoolAlias;
  random(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg1: j_net_minecraft_util_random.WeightedList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>): RandomPoolAlias;
  randomGroup(arg0: j_net_minecraft_util_random.WeightedList<JavaList<PoolAliasBinding>>): RandomGroupPoolAlias;
}

/** JVM class net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasBindings. */
export interface PoolAliasBindingsMembers {
}
export type PoolAliasBindings = PoolAliasBindingsMembers;
export interface PoolAliasBindingsStatics {
  new(): PoolAliasBindings;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [PoolAliasBinding]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [PoolAliasBinding]>;
  registerTargetsAsPools(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg2: JavaList<PoolAliasBinding>): void;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasLookup. */
export interface PoolAliasLookupMembers {
  lookup(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
}
export type PoolAliasLookup = PoolAliasLookupMembers;
export interface PoolAliasLookupStatics {
  readonly EMPTY: PoolAliasLookup;
  create(arg0: JavaList<PoolAliasBinding>, arg1: j_net_minecraft_core.BlockPos, arg2: bigint): PoolAliasLookup;
}

/** JVM record net.minecraft.world.level.levelgen.structure.pools.alias.RandomGroupPoolAlias. */
export interface RandomGroupPoolAliasMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, PoolAliasBinding];
  allTargets(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>]>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RandomGroupPoolAlias]>;
  equals(arg0: object): boolean;
  forEachResolved(arg0: j_net_minecraft_util.RandomSource, arg1: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>): void;
  groups(): j_net_minecraft_util_random.WeightedList<JavaList<PoolAliasBinding>>;
  hashCode(): number;
  toString(): string;
}
export type RandomGroupPoolAlias = RandomGroupPoolAliasMembers & JavaOpaque<"java.lang.Record"> & PoolAliasBinding;
export interface RandomGroupPoolAliasStatics {
  new(arg0: j_net_minecraft_util_random.WeightedList<JavaList<PoolAliasBinding>>): RandomGroupPoolAlias;
}

/** JVM record net.minecraft.world.level.levelgen.structure.pools.alias.RandomPoolAlias. */
export interface RandomPoolAliasMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, PoolAliasBinding];
  alias(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  allTargets(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>]>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RandomPoolAlias]>;
  equals(arg0: object): boolean;
  forEachResolved(arg0: j_net_minecraft_util.RandomSource, arg1: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>): void;
  hashCode(): number;
  targets(): j_net_minecraft_util_random.WeightedList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>;
  toString(): string;
}
export type RandomPoolAlias = RandomPoolAliasMembers & JavaOpaque<"java.lang.Record"> & PoolAliasBinding;
export interface RandomPoolAliasStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg1: j_net_minecraft_util_random.WeightedList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>>): RandomPoolAlias;
}
