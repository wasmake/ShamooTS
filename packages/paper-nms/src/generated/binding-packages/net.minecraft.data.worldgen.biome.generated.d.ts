// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_levelgen_carver from './net.minecraft.world.level.levelgen.carver.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';

/** JVM abstract net.minecraft.data.worldgen.biome.BiomeData. */
export interface BiomeDataMembers {
}
export type BiomeData = BiomeDataMembers;
export interface BiomeDataStatics {
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_biome.Biome>): void;
}

/** JVM class net.minecraft.data.worldgen.biome.EndBiomes. */
export interface EndBiomesMembers {
}
export type EndBiomes = EndBiomesMembers;
export interface EndBiomesStatics {
  new(): EndBiomes;
  endBarrens(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  endHighlands(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  endMidlands(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  smallEndIslands(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  theEnd(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
}

/** JVM class net.minecraft.data.worldgen.biome.NetherBiomes. */
export interface NetherBiomesMembers {
}
export type NetherBiomes = NetherBiomesMembers;
export interface NetherBiomesStatics {
  new(): NetherBiomes;
  basaltDeltas(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  crimsonForest(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  netherWastes(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  soulSandValley(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  warpedForest(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
}

/** JVM class net.minecraft.data.worldgen.biome.OverworldBiomes. */
export interface OverworldBiomesMembers {
}
export type OverworldBiomes = OverworldBiomesMembers;
export interface OverworldBiomesStatics {
  new(): OverworldBiomes;
  readonly SWAMP_SKELETON_WEIGHT: 70;
  badlands(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  bambooJungle(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  beach(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean, arg3: boolean): j_net_minecraft_world_level_biome.Biome;
  coldOcean(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  darkForest(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  deepDark(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  desert(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  dripstoneCaves(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  forest(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean, arg3: boolean, arg4: boolean): j_net_minecraft_world_level_biome.Biome;
  frozenOcean(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  frozenPeaks(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  grove(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  jaggedPeaks(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  jungle(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  lukeWarmOcean(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  lushCaves(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  mangroveSwamp(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  meadowOrCherryGrove(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  mushroomFields(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  ocean(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  oldGrowthTaiga(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  plains(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean, arg3: boolean, arg4: boolean): j_net_minecraft_world_level_biome.Biome;
  river(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  savanna(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean, arg3: boolean): j_net_minecraft_world_level_biome.Biome;
  snowySlopes(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  sparseJungle(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  stonyPeaks(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  swamp(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  taiga(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
  theVoid(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  warmOcean(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): j_net_minecraft_world_level_biome.Biome;
  windsweptHills(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>, arg2: boolean): j_net_minecraft_world_level_biome.Biome;
}
