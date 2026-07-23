// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';

/** JVM class net.minecraft.world.level.levelgen.presets.WorldPreset. */
export interface WorldPresetMembers {
  createWorldDimensions(): j_net_minecraft_world_level_levelgen.WorldDimensions;
  overworld(): JavaOptional<j_net_minecraft_world_level_dimension.LevelStem>;
}
export type WorldPreset = WorldPresetMembers;
export interface WorldPresetStatics {
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_dimension.LevelStem>, j_net_minecraft_world_level_dimension.LevelStem>): WorldPreset;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<WorldPreset>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WorldPreset]>;
}

/** JVM class net.minecraft.world.level.levelgen.presets.WorldPresets. */
export interface WorldPresetsMembers {
}
export type WorldPresets = WorldPresetsMembers;
export interface WorldPresetsStatics {
  new(): WorldPresets;
  readonly AMPLIFIED: j_net_minecraft_resources.ResourceKey<WorldPreset>;
  readonly DEBUG: j_net_minecraft_resources.ResourceKey<WorldPreset>;
  readonly FLAT: j_net_minecraft_resources.ResourceKey<WorldPreset>;
  readonly LARGE_BIOMES: j_net_minecraft_resources.ResourceKey<WorldPreset>;
  readonly NORMAL: j_net_minecraft_resources.ResourceKey<WorldPreset>;
  readonly SINGLE_BIOME_SURFACE: j_net_minecraft_resources.ResourceKey<WorldPreset>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<WorldPreset>): void;
  createFlatWorldDimensions(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_level_levelgen.WorldDimensions;
  createNormalWorldDimensions(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_level_levelgen.WorldDimensions;
  fromSettings(arg0: j_net_minecraft_world_level_levelgen.WorldDimensions): JavaOptional<j_net_minecraft_resources.ResourceKey<WorldPreset>>;
  getNormalOverworld(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_level_dimension.LevelStem;
}
