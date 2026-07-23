// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';

/** JVM class net.minecraft.world.level.levelgen.flat.FlatLayerInfo. */
export interface FlatLayerInfoMembers {
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getHeight(): number;
  heightLimited(arg0: number): FlatLayerInfo;
  toString(): string;
}
export type FlatLayerInfo = FlatLayerInfoMembers;
export interface FlatLayerInfoStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_block.Block): FlatLayerInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FlatLayerInfo]>;
}

/** JVM record net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorPreset. */
export interface FlatLevelGeneratorPresetMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  displayItem(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  equals(arg0: object): boolean;
  hashCode(): number;
  settings(): FlatLevelGeneratorSettings;
  toString(): string;
}
export type FlatLevelGeneratorPreset = FlatLevelGeneratorPresetMembers & JavaOpaque<"java.lang.Record">;
export interface FlatLevelGeneratorPresetStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: FlatLevelGeneratorSettings): FlatLevelGeneratorPreset;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<FlatLevelGeneratorPreset>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FlatLevelGeneratorPreset]>;
}

/** JVM class net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorPresets. */
export interface FlatLevelGeneratorPresetsMembers {
}
export type FlatLevelGeneratorPresets = FlatLevelGeneratorPresetsMembers;
export interface FlatLevelGeneratorPresetsStatics {
  new(): FlatLevelGeneratorPresets;
  readonly BOTTOMLESS_PIT: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly CLASSIC_FLAT: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly DESERT: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly OVERWORLD: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly REDSTONE_READY: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly SNOWY_KINGDOM: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly THE_VOID: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly TUNNELERS_DREAM: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  readonly WATER_WORLD: j_net_minecraft_resources.ResourceKey<FlatLevelGeneratorPreset>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<FlatLevelGeneratorPreset>): void;
}

/** JVM class net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorSettings. */
export interface FlatLevelGeneratorSettingsMembers {
  adjustGenerationSettings(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): j_net_minecraft_world_level_biome.BiomeGenerationSettings;
  getBiome(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getLayers(): JavaList<j_net_minecraft_world_level_block_state.BlockState>;
  getLayersInfo(): JavaList<FlatLayerInfo>;
  setAddLakes(): void;
  setDecoration(): void;
  structureOverrides(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.StructureSet>>;
  updateLayers(): void;
  withBiomeAndLayers(arg0: JavaList<FlatLayerInfo>, arg1: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.StructureSet>>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): FlatLevelGeneratorSettings;
}
export type FlatLevelGeneratorSettings = FlatLevelGeneratorSettingsMembers;
export interface FlatLevelGeneratorSettingsStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_structure.StructureSet>>, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, arg2: JavaList<j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>>): FlatLevelGeneratorSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FlatLevelGeneratorSettings]>;
  createLakesList(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): JavaList<j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>>;
  getDefault(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_biome.Biome>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_structure.StructureSet>, arg2: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): FlatLevelGeneratorSettings;
  getDefaultBiome(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_biome.Biome>): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
}
