// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_carver from './net.minecraft.world.level.levelgen.carver.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';
import type * as j_net_minecraft_world_level_levelgen_synth from './net.minecraft.world.level.levelgen.synth.generated.js';

/** JVM class net.minecraft.world.level.biome.AmbientAdditionsSettings. */
export interface AmbientAdditionsSettingsMembers {
  getSoundEvent(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getTickChance(): number;
}
export type AmbientAdditionsSettings = AmbientAdditionsSettingsMembers;
export interface AmbientAdditionsSettingsStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: number): AmbientAdditionsSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AmbientAdditionsSettings]>;
}

/** JVM class net.minecraft.world.level.biome.AmbientMoodSettings. */
export interface AmbientMoodSettingsMembers {
  getBlockSearchExtent(): number;
  getSoundEvent(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getSoundPositionOffset(): number;
  getTickDelay(): number;
}
export type AmbientMoodSettings = AmbientMoodSettingsMembers;
export interface AmbientMoodSettingsStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: number, arg2: number, arg3: number): AmbientMoodSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AmbientMoodSettings]>;
  readonly LEGACY_CAVE_SETTINGS: AmbientMoodSettings;
}

/** JVM class net.minecraft.world.level.biome.AmbientParticleSettings. */
export interface AmbientParticleSettingsMembers {
  canSpawn(arg0: j_net_minecraft_util.RandomSource): boolean;
  getOptions(): j_net_minecraft_core_particles.ParticleOptions;
}
export type AmbientParticleSettings = AmbientParticleSettingsMembers;
export interface AmbientParticleSettingsStatics {
  new(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number): AmbientParticleSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AmbientParticleSettings]>;
}

/** JVM class net.minecraft.world.level.biome.Biome. */
export interface BiomeMembers {
  readonly climateSettings: Biome_ClimateSettings;
  coldEnoughToSnow(arg0: j_net_minecraft_core.BlockPos, arg1: number): boolean;
  getAmbientAdditions(): JavaOptional<AmbientAdditionsSettings>;
  getAmbientLoop(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  getAmbientMood(): JavaOptional<AmbientMoodSettings>;
  getAmbientParticle(): JavaOptional<AmbientParticleSettings>;
  getBackgroundMusic(): JavaOptional<j_net_minecraft_util_random.WeightedList<j_net_minecraft_sounds.Music>>;
  getBackgroundMusicVolume(): number;
  getBaseTemperature(): number;
  getDryFoliageColor(): number;
  getFogColor(): number;
  getFoliageColor(): number;
  getGenerationSettings(): BiomeGenerationSettings;
  getGrassColor(arg0: number, arg1: number): number;
  getMobSettings(): MobSpawnSettings;
  getPrecipitationAt(arg0: j_net_minecraft_core.BlockPos, arg1: number): Biome_Precipitation;
  getSkyColor(): number;
  getSpecialEffects(): BiomeSpecialEffects;
  getTemperature(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getWaterColor(): number;
  getWaterFogColor(): number;
  hasPrecipitation(): boolean;
  shouldFreeze(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  shouldFreeze(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): boolean;
  shouldMeltFrozenOceanIcebergSlightly(arg0: j_net_minecraft_core.BlockPos, arg1: number): boolean;
  shouldSnow(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  warmEnoughToRain(arg0: j_net_minecraft_core.BlockPos, arg1: number): boolean;
}
export type Biome = BiomeMembers;
export interface BiomeStatics {
  readonly BIOME_INFO_NOISE: j_net_minecraft_world_level_levelgen_synth.PerlinSimplexNoise;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Biome>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Biome]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<Biome>]>;
  readonly NETWORK_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Biome]>;
}

/** JVM class net.minecraft.world.level.biome.Biome$BiomeBuilder. */
export interface Biome_BiomeBuilderMembers {
  build(): Biome;
  downfall(arg0: number): Biome_BiomeBuilder;
  generationSettings(arg0: BiomeGenerationSettings): Biome_BiomeBuilder;
  hasPrecipitation(arg0: boolean): Biome_BiomeBuilder;
  mobSpawnSettings(arg0: MobSpawnSettings): Biome_BiomeBuilder;
  specialEffects(arg0: BiomeSpecialEffects): Biome_BiomeBuilder;
  temperature(arg0: number): Biome_BiomeBuilder;
  temperatureAdjustment(arg0: Biome_TemperatureModifier): Biome_BiomeBuilder;
  toString(): string;
}
export type Biome_BiomeBuilder = Biome_BiomeBuilderMembers;
export interface Biome_BiomeBuilderStatics {
  new(): Biome_BiomeBuilder;
}

/** JVM record net.minecraft.world.level.biome.Biome$ClimateSettings. */
export interface Biome_ClimateSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  downfall(): number;
  equals(arg0: object): boolean;
  hasPrecipitation(): boolean;
  hashCode(): number;
  temperature(): number;
  temperatureModifier(): Biome_TemperatureModifier;
  toString(): string;
}
export type Biome_ClimateSettings = Biome_ClimateSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface Biome_ClimateSettingsStatics {
  new(arg0: boolean, arg1: number, arg2: Biome_TemperatureModifier, arg3: number): Biome_ClimateSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Biome_ClimateSettings]>;
}

/** Live JVM enum net.minecraft.world.level.biome.Biome$Precipitation; constants are host handles, not strings. */
export type Biome_Precipitation = JavaEnum<"net.minecraft.world.level.biome.Biome$Precipitation", "NONE" | "RAIN" | "SNOW"> & Biome_PrecipitationMembers;
export interface Biome_PrecipitationMembers {
  getSerializedName(): string;
}
export interface Biome_PrecipitationStatics {
  readonly NONE: Biome_Precipitation;
  readonly RAIN: Biome_Precipitation;
  readonly SNOW: Biome_Precipitation;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Biome_Precipitation]>;
  valueOf(arg0: string): Biome_Precipitation;
  values(): Array<Biome_Precipitation>;
}

/** Live JVM enum net.minecraft.world.level.biome.Biome$TemperatureModifier; constants are host handles, not strings. */
export type Biome_TemperatureModifier = JavaEnum<"net.minecraft.world.level.biome.Biome$TemperatureModifier", "FROZEN" | "NONE"> & Biome_TemperatureModifierMembers;
export interface Biome_TemperatureModifierMembers {
  getName(): string;
  getSerializedName(): string;
  modifyTemperature(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
}
export interface Biome_TemperatureModifierStatics {
  readonly FROZEN: Biome_TemperatureModifier;
  readonly NONE: Biome_TemperatureModifier;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Biome_TemperatureModifier]>;
  valueOf(arg0: string): Biome_TemperatureModifier;
  values(): Array<Biome_TemperatureModifier>;
}

/** JVM class net.minecraft.world.level.biome.BiomeGenerationSettings. */
export interface BiomeGenerationSettingsMembers {
  features(): JavaList<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>>;
  getCarvers(): Iterable<j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>>;
  getFlowerFeatures(): JavaList<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  hasFeature(arg0: j_net_minecraft_world_level_levelgen_placement.PlacedFeature): boolean;
}
export type BiomeGenerationSettings = BiomeGenerationSettingsMembers;
export interface BiomeGenerationSettingsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeGenerationSettings]>;
  readonly EMPTY: BiomeGenerationSettings;
}

/** JVM class net.minecraft.world.level.biome.BiomeGenerationSettings$Builder. */
export interface BiomeGenerationSettings_BuilderMembers {
  readonly __javaSupertypes?: readonly [BiomeGenerationSettings_PlainBuilder];
  addCarver(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): BiomeGenerationSettings_Builder;
  addFeature(arg0: j_net_minecraft_world_level_levelgen.GenerationStep_Decoration, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): BiomeGenerationSettings_Builder;
}
export type BiomeGenerationSettings_Builder = BiomeGenerationSettings_BuilderMembers & BiomeGenerationSettings_PlainBuilder;
export interface BiomeGenerationSettings_BuilderStatics {
  new(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): BiomeGenerationSettings_Builder;
}

/** JVM class net.minecraft.world.level.biome.BiomeGenerationSettings$PlainBuilder. */
export interface BiomeGenerationSettings_PlainBuilderMembers {
  addCarver(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): BiomeGenerationSettings_PlainBuilder;
  addFeature(arg0: number, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): BiomeGenerationSettings_PlainBuilder;
  addFeature(arg0: j_net_minecraft_world_level_levelgen.GenerationStep_Decoration, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): BiomeGenerationSettings_PlainBuilder;
  build(): BiomeGenerationSettings;
}
export type BiomeGenerationSettings_PlainBuilder = BiomeGenerationSettings_PlainBuilderMembers;
export interface BiomeGenerationSettings_PlainBuilderStatics {
  new(): BiomeGenerationSettings_PlainBuilder;
}

/** JVM class net.minecraft.world.level.biome.BiomeManager. */
export interface BiomeManagerMembers {
  getBiome(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.Holder<Biome>;
  getNoiseBiomeAtPosition(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<Biome>;
  getNoiseBiomeAtPosition(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.Holder<Biome>;
  getNoiseBiomeAtQuart(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<Biome>;
  withDifferentSource(arg0: BiomeManager_NoiseBiomeSource): BiomeManager;
}
export type BiomeManager = BiomeManagerMembers;
export interface BiomeManagerStatics {
  new(arg0: BiomeManager_NoiseBiomeSource, arg1: bigint): BiomeManager;
  readonly CHUNK_CENTER_QUART: number;
  obfuscateSeed(arg0: bigint): bigint;
}

/** JVM interface net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource. */
export interface BiomeManager_NoiseBiomeSourceMembers {
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<Biome>;
}
export type BiomeManager_NoiseBiomeSource = BiomeManager_NoiseBiomeSourceMembers;
export interface BiomeManager_NoiseBiomeSourceStatics {
}

/** JVM interface net.minecraft.world.level.biome.BiomeResolver. */
export interface BiomeResolverMembers {
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Climate_Sampler): j_net_minecraft_core.Holder<Biome>;
}
export type BiomeResolver = BiomeResolverMembers;
export interface BiomeResolverStatics {
}

/** JVM abstract net.minecraft.world.level.biome.Biomes. */
export interface BiomesMembers {
}
export type Biomes = BiomesMembers;
export interface BiomesStatics {
  new(): Biomes;
  readonly BADLANDS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly BAMBOO_JUNGLE: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly BASALT_DELTAS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly BEACH: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly BIRCH_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly CHERRY_GROVE: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly COLD_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly CRIMSON_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DARK_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DEEP_COLD_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DEEP_DARK: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DEEP_FROZEN_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DEEP_LUKEWARM_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DEEP_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DESERT: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly DRIPSTONE_CAVES: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly END_BARRENS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly END_HIGHLANDS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly END_MIDLANDS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly ERODED_BADLANDS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly FLOWER_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly FROZEN_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly FROZEN_PEAKS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly FROZEN_RIVER: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly GROVE: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly ICE_SPIKES: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly JAGGED_PEAKS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly JUNGLE: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly LUKEWARM_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly LUSH_CAVES: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly MANGROVE_SWAMP: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly MEADOW: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly MUSHROOM_FIELDS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly NETHER_WASTES: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly OLD_GROWTH_BIRCH_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly OLD_GROWTH_PINE_TAIGA: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly OLD_GROWTH_SPRUCE_TAIGA: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly PALE_GARDEN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly PLAINS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly RIVER: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SAVANNA: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SAVANNA_PLATEAU: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SMALL_END_ISLANDS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SNOWY_BEACH: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SNOWY_PLAINS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SNOWY_SLOPES: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SNOWY_TAIGA: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SOUL_SAND_VALLEY: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SPARSE_JUNGLE: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly STONY_PEAKS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly STONY_SHORE: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SUNFLOWER_PLAINS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly SWAMP: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly TAIGA: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly THE_END: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly THE_VOID: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WARM_OCEAN: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WARPED_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WINDSWEPT_FOREST: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WINDSWEPT_GRAVELLY_HILLS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WINDSWEPT_HILLS: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WINDSWEPT_SAVANNA: j_net_minecraft_resources.ResourceKey<Biome>;
  readonly WOODED_BADLANDS: j_net_minecraft_resources.ResourceKey<Biome>;
}

/** JVM abstract net.minecraft.world.level.biome.BiomeSource. */
export interface BiomeSourceMembers {
  readonly __javaSupertypes?: readonly [BiomeResolver];
  addDebugInfo(arg0: JavaList<string>, arg1: j_net_minecraft_core.BlockPos, arg2: Climate_Sampler): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>;
  collectPossibleBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Biome>]>;
  findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: JavaPredicate<j_net_minecraft_core.Holder<Biome>>, arg6: j_net_minecraft_util.RandomSource, arg7: boolean, arg8: Climate_Sampler): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<Biome>]> | null;
  findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_core.Holder<Biome>>, arg5: j_net_minecraft_util.RandomSource, arg6: Climate_Sampler): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<Biome>]> | null;
  findClosestBiome3d(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_core.Holder<Biome>>, arg5: Climate_Sampler, arg6: j_net_minecraft_world_level.LevelReader): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<Biome>]> | null;
  getBiomesWithin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Climate_Sampler): JavaSet<j_net_minecraft_core.Holder<Biome>>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Climate_Sampler): j_net_minecraft_core.Holder<Biome>;
  possibleBiomes(): JavaSet<j_net_minecraft_core.Holder<Biome>>;
}
export type BiomeSource = BiomeSourceMembers & BiomeResolver;
export interface BiomeSourceStatics {
  new(): BiomeSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BiomeSource]>;
}

/** JVM class net.minecraft.world.level.biome.BiomeSources. */
export interface BiomeSourcesMembers {
}
export type BiomeSources = BiomeSourcesMembers;
export interface BiomeSourcesStatics {
  new(): BiomeSources;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>;
}

/** JVM class net.minecraft.world.level.biome.BiomeSpecialEffects. */
export interface BiomeSpecialEffectsMembers {
  getAmbientAdditionsSettings(): JavaOptional<AmbientAdditionsSettings>;
  getAmbientLoopSoundEvent(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  getAmbientMoodSettings(): JavaOptional<AmbientMoodSettings>;
  getAmbientParticleSettings(): JavaOptional<AmbientParticleSettings>;
  getBackgroundMusic(): JavaOptional<j_net_minecraft_util_random.WeightedList<j_net_minecraft_sounds.Music>>;
  getBackgroundMusicVolume(): number;
  getDryFoliageColorOverride(): JavaOptional<number>;
  getFogColor(): number;
  getFoliageColorOverride(): JavaOptional<number>;
  getGrassColorModifier(): BiomeSpecialEffects_GrassColorModifier;
  getGrassColorOverride(): JavaOptional<number>;
  getSkyColor(): number;
  getWaterColor(): number;
  getWaterFogColor(): number;
}
export type BiomeSpecialEffects = BiomeSpecialEffectsMembers;
export interface BiomeSpecialEffectsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BiomeSpecialEffects]>;
}

/** JVM class net.minecraft.world.level.biome.BiomeSpecialEffects$Builder. */
export interface BiomeSpecialEffects_BuilderMembers {
  ambientAdditionsSound(arg0: AmbientAdditionsSettings): BiomeSpecialEffects_Builder;
  ambientLoopSound(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): BiomeSpecialEffects_Builder;
  ambientMoodSound(arg0: AmbientMoodSettings): BiomeSpecialEffects_Builder;
  ambientParticle(arg0: AmbientParticleSettings): BiomeSpecialEffects_Builder;
  backgroundMusic(arg0: j_net_minecraft_sounds.Music | null): BiomeSpecialEffects_Builder | null;
  backgroundMusic(arg0: j_net_minecraft_util_random.WeightedList<j_net_minecraft_sounds.Music>): BiomeSpecialEffects_Builder;
  backgroundMusicVolume(arg0: number): BiomeSpecialEffects_Builder;
  build(): BiomeSpecialEffects;
  dryFoliageColorOverride(arg0: number): BiomeSpecialEffects_Builder;
  fogColor(arg0: number): BiomeSpecialEffects_Builder;
  foliageColorOverride(arg0: number): BiomeSpecialEffects_Builder;
  grassColorModifier(arg0: BiomeSpecialEffects_GrassColorModifier): BiomeSpecialEffects_Builder;
  grassColorOverride(arg0: number): BiomeSpecialEffects_Builder;
  silenceAllBackgroundMusic(): BiomeSpecialEffects_Builder;
  skyColor(arg0: number): BiomeSpecialEffects_Builder;
  waterColor(arg0: number): BiomeSpecialEffects_Builder;
  waterFogColor(arg0: number): BiomeSpecialEffects_Builder;
}
export type BiomeSpecialEffects_Builder = BiomeSpecialEffects_BuilderMembers;
export interface BiomeSpecialEffects_BuilderStatics {
  new(): BiomeSpecialEffects_Builder;
}

/** Live JVM enum net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier; constants are host handles, not strings. */
export type BiomeSpecialEffects_GrassColorModifier = JavaEnum<"net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier", "DARK_FOREST" | "NONE" | "SWAMP"> & BiomeSpecialEffects_GrassColorModifierMembers;
export interface BiomeSpecialEffects_GrassColorModifierMembers {
  getName(): string;
  getSerializedName(): string;
  modifyColor(arg0: number, arg1: number, arg2: number): number;
}
export interface BiomeSpecialEffects_GrassColorModifierStatics {
  readonly DARK_FOREST: BiomeSpecialEffects_GrassColorModifier;
  readonly NONE: BiomeSpecialEffects_GrassColorModifier;
  readonly SWAMP: BiomeSpecialEffects_GrassColorModifier;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BiomeSpecialEffects_GrassColorModifier]>;
  valueOf(arg0: string): BiomeSpecialEffects_GrassColorModifier;
  values(): Array<BiomeSpecialEffects_GrassColorModifier>;
}

/** JVM class net.minecraft.world.level.biome.CheckerboardColumnBiomeSource. */
export interface CheckerboardColumnBiomeSourceMembers {
  readonly __javaSupertypes?: readonly [BiomeSource];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>;
  collectPossibleBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Biome>]>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Climate_Sampler): j_net_minecraft_core.Holder<Biome>;
}
export type CheckerboardColumnBiomeSource = CheckerboardColumnBiomeSourceMembers & BiomeSource;
export interface CheckerboardColumnBiomeSourceStatics {
  new(arg0: j_net_minecraft_core.HolderSet<Biome>, arg1: number): CheckerboardColumnBiomeSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CheckerboardColumnBiomeSource]>;
}

/** JVM class net.minecraft.world.level.biome.Climate. */
export interface ClimateMembers {
}
export type Climate = ClimateMembers;
export interface ClimateStatics {
  new(): Climate;
  readonly PARAMETER_COUNT: 7;
  empty(): Climate_Sampler;
  findSpawnPosition(arg0: JavaList<Climate_ParameterPoint>, arg1: Climate_Sampler): j_net_minecraft_core.BlockPos;
  parameters(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Climate_ParameterPoint;
  parameters(arg0: Climate_Parameter, arg1: Climate_Parameter, arg2: Climate_Parameter, arg3: Climate_Parameter, arg4: Climate_Parameter, arg5: Climate_Parameter, arg6: number): Climate_ParameterPoint;
  quantizeCoord(arg0: number): bigint;
  target(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Climate_TargetPoint;
  unquantizeCoord(arg0: bigint): number;
}

/** JVM record net.minecraft.world.level.biome.Climate$Parameter. */
export interface Climate_ParameterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  distance(arg0: bigint): bigint;
  distance(arg0: Climate_Parameter): bigint;
  equals(arg0: object): boolean;
  hashCode(): number;
  max(): bigint;
  min(): bigint;
  span(arg0: Climate_Parameter | null): Climate_Parameter | null;
  toString(): string;
}
export type Climate_Parameter = Climate_ParameterMembers & JavaOpaque<"java.lang.Record">;
export interface Climate_ParameterStatics {
  new(arg0: bigint, arg1: bigint): Climate_Parameter;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Climate_Parameter]>;
  point(arg0: number): Climate_Parameter;
  span(arg0: number, arg1: number): Climate_Parameter;
  span(arg0: Climate_Parameter, arg1: Climate_Parameter): Climate_Parameter;
}

/** JVM class net.minecraft.world.level.biome.Climate$ParameterList. */
export interface Climate_ParameterListMembers<T = unknown> {
  findValue(arg0: Climate_TargetPoint): T;
  findValueBruteForce(arg0: Climate_TargetPoint): T;
  findValueIndex(arg0: Climate_TargetPoint): T;
  findValueIndex(arg0: Climate_TargetPoint, arg1: JavaOpaque<"net.minecraft.world.level.biome.Climate$DistanceMetric", [T]>): T;
  values(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [Climate_ParameterPoint, T]>>;
}
export type Climate_ParameterList<T = unknown> = Climate_ParameterListMembers<T>;
export interface Climate_ParameterListStatics {
  new<T>(arg0: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [Climate_ParameterPoint, T]>>): Climate_ParameterList<T>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [Climate_ParameterList<T>]>;
}

/** JVM record net.minecraft.world.level.biome.Climate$ParameterPoint. */
export interface Climate_ParameterPointMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  continentalness(): Climate_Parameter;
  depth(): Climate_Parameter;
  equals(arg0: object): boolean;
  erosion(): Climate_Parameter;
  hashCode(): number;
  humidity(): Climate_Parameter;
  offset(): bigint;
  parameterSpace(): JavaList<Climate_Parameter>;
  temperature(): Climate_Parameter;
  toString(): string;
  weirdness(): Climate_Parameter;
}
export type Climate_ParameterPoint = Climate_ParameterPointMembers & JavaOpaque<"java.lang.Record">;
export interface Climate_ParameterPointStatics {
  new(arg0: Climate_Parameter, arg1: Climate_Parameter, arg2: Climate_Parameter, arg3: Climate_Parameter, arg4: Climate_Parameter, arg5: Climate_Parameter, arg6: bigint): Climate_ParameterPoint;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Climate_ParameterPoint]>;
}

/** JVM class net.minecraft.world.level.biome.Climate$RTree. */
export interface Climate_RTreeMembers<T = unknown> {
  search(arg0: Climate_TargetPoint, arg1: JavaOpaque<"net.minecraft.world.level.biome.Climate$DistanceMetric", [T]>): T;
}
export type Climate_RTree<T = unknown> = Climate_RTreeMembers<T>;
export interface Climate_RTreeStatics {
  create<T>(arg0: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [Climate_ParameterPoint, T]>>): Climate_RTree<T>;
}

/** JVM record net.minecraft.world.level.biome.Climate$Sampler. */
export interface Climate_SamplerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  continentalness(): j_net_minecraft_world_level_levelgen.DensityFunction;
  depth(): j_net_minecraft_world_level_levelgen.DensityFunction;
  equals(arg0: object): boolean;
  erosion(): j_net_minecraft_world_level_levelgen.DensityFunction;
  findSpawnPosition(): j_net_minecraft_core.BlockPos;
  hashCode(): number;
  humidity(): j_net_minecraft_world_level_levelgen.DensityFunction;
  sample(arg0: number, arg1: number, arg2: number): Climate_TargetPoint;
  spawnTarget(): JavaList<Climate_ParameterPoint>;
  temperature(): j_net_minecraft_world_level_levelgen.DensityFunction;
  toString(): string;
  weirdness(): j_net_minecraft_world_level_levelgen.DensityFunction;
}
export type Climate_Sampler = Climate_SamplerMembers & JavaOpaque<"java.lang.Record">;
export interface Climate_SamplerStatics {
  new(arg0: j_net_minecraft_world_level_levelgen.DensityFunction, arg1: j_net_minecraft_world_level_levelgen.DensityFunction, arg2: j_net_minecraft_world_level_levelgen.DensityFunction, arg3: j_net_minecraft_world_level_levelgen.DensityFunction, arg4: j_net_minecraft_world_level_levelgen.DensityFunction, arg5: j_net_minecraft_world_level_levelgen.DensityFunction, arg6: JavaList<Climate_ParameterPoint>): Climate_Sampler;
}

/** JVM record net.minecraft.world.level.biome.Climate$TargetPoint. */
export interface Climate_TargetPointMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  continentalness(): bigint;
  depth(): bigint;
  equals(arg0: object): boolean;
  erosion(): bigint;
  hashCode(): number;
  humidity(): bigint;
  temperature(): bigint;
  toParameterArray(): Array<bigint>;
  toString(): string;
  weirdness(): bigint;
}
export type Climate_TargetPoint = Climate_TargetPointMembers & JavaOpaque<"java.lang.Record">;
export interface Climate_TargetPointStatics {
  new(arg0: bigint, arg1: bigint, arg2: bigint, arg3: bigint, arg4: bigint, arg5: bigint): Climate_TargetPoint;
}

/** JVM class net.minecraft.world.level.biome.FeatureSorter. */
export interface FeatureSorterMembers {
}
export type FeatureSorter = FeatureSorterMembers;
export interface FeatureSorterStatics {
  new(): FeatureSorter;
  buildFeaturesPerStep<T>(arg0: JavaList<T>, arg1: JavaFunction<T, JavaList<j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>>>, arg2: boolean): JavaList<FeatureSorter_StepFeatureData>;
}

/** JVM record net.minecraft.world.level.biome.FeatureSorter$StepFeatureData. */
export interface FeatureSorter_StepFeatureDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  features(): JavaList<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>;
  hashCode(): number;
  indexMapping(): JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_world_level_levelgen_placement.PlacedFeature]>;
  toString(): string;
}
export type FeatureSorter_StepFeatureData = FeatureSorter_StepFeatureDataMembers & JavaOpaque<"java.lang.Record">;
export interface FeatureSorter_StepFeatureDataStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_world_level_levelgen_placement.PlacedFeature]>): FeatureSorter_StepFeatureData;
}

/** JVM class net.minecraft.world.level.biome.FixedBiomeSource. */
export interface FixedBiomeSourceMembers {
  readonly __javaSupertypes?: readonly [BiomeSource, BiomeManager_NoiseBiomeSource];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>;
  collectPossibleBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Biome>]>;
  findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: JavaPredicate<j_net_minecraft_core.Holder<Biome>>, arg6: j_net_minecraft_util.RandomSource, arg7: boolean, arg8: Climate_Sampler): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<Biome>]> | null;
  findClosestBiome3d(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_core.Holder<Biome>>, arg5: Climate_Sampler, arg6: j_net_minecraft_world_level.LevelReader): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<Biome>]> | null;
  getBiomesWithin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Climate_Sampler): JavaSet<j_net_minecraft_core.Holder<Biome>>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<Biome>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Climate_Sampler): j_net_minecraft_core.Holder<Biome>;
}
export type FixedBiomeSource = FixedBiomeSourceMembers & BiomeSource & BiomeManager_NoiseBiomeSource;
export interface FixedBiomeSourceStatics {
  new(arg0: j_net_minecraft_core.Holder<Biome>): FixedBiomeSource;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FixedBiomeSource]>;
}

/** JVM class net.minecraft.world.level.biome.MobSpawnSettings. */
export interface MobSpawnSettingsMembers {
  getCreatureProbability(): number;
  getMobSpawnCost(arg0: j_net_minecraft_world_entity.EntityType<object>): MobSpawnSettings_MobSpawnCost | null;
  getMobs(arg0: j_net_minecraft_world_entity.MobCategory): j_net_minecraft_util_random.WeightedList<MobSpawnSettings_SpawnerData>;
}
export type MobSpawnSettings = MobSpawnSettingsMembers;
export interface MobSpawnSettingsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MobSpawnSettings]>;
  readonly EMPTY: MobSpawnSettings;
  readonly EMPTY_MOB_LIST: j_net_minecraft_util_random.WeightedList<MobSpawnSettings_SpawnerData>;
}

/** JVM class net.minecraft.world.level.biome.MobSpawnSettings$Builder. */
export interface MobSpawnSettings_BuilderMembers {
  addMobCharge(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number): MobSpawnSettings_Builder;
  addSpawn(arg0: j_net_minecraft_world_entity.MobCategory, arg1: number, arg2: MobSpawnSettings_SpawnerData): MobSpawnSettings_Builder;
  build(): MobSpawnSettings;
  creatureGenerationProbability(arg0: number): MobSpawnSettings_Builder;
}
export type MobSpawnSettings_Builder = MobSpawnSettings_BuilderMembers;
export interface MobSpawnSettings_BuilderStatics {
  new(): MobSpawnSettings_Builder;
}

/** JVM class net.minecraft.world.level.biome.MobSpawnSettings$Builder$MobListBuilder. */
export interface MobSpawnSettings_Builder_MobListBuilderMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_random.WeightedList_Builder<E>];
  build(): j_net_minecraft_util_random.WeightedList<E>;
}
export type MobSpawnSettings_Builder_MobListBuilder<E = unknown> = MobSpawnSettings_Builder_MobListBuilderMembers<E> & j_net_minecraft_util_random.WeightedList_Builder<E>;
export interface MobSpawnSettings_Builder_MobListBuilderStatics {
  new<E>(): MobSpawnSettings_Builder_MobListBuilder<E>;
}

/** JVM class net.minecraft.world.level.biome.MobSpawnSettings$Builder$WeightedSpawnerDataList. */
export interface MobSpawnSettings_Builder_WeightedSpawnerDataListMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_random.WeightedList<E>];
  contains(arg0: E): boolean;
}
export type MobSpawnSettings_Builder_WeightedSpawnerDataList<E = unknown> = MobSpawnSettings_Builder_WeightedSpawnerDataListMembers<E> & j_net_minecraft_util_random.WeightedList<E>;
export interface MobSpawnSettings_Builder_WeightedSpawnerDataListStatics {
  new<E>(arg0: JavaList<j_net_minecraft_util_random.Weighted<E>>): MobSpawnSettings_Builder_WeightedSpawnerDataList<E>;
}

/** JVM record net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost. */
export interface MobSpawnSettings_MobSpawnCostMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  charge(): number;
  energyBudget(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type MobSpawnSettings_MobSpawnCost = MobSpawnSettings_MobSpawnCostMembers & JavaOpaque<"java.lang.Record">;
export interface MobSpawnSettings_MobSpawnCostStatics {
  new(arg0: number, arg1: number): MobSpawnSettings_MobSpawnCost;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MobSpawnSettings_MobSpawnCost]>;
}

/** JVM record net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData. */
export interface MobSpawnSettings_SpawnerDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  maxCount(): number;
  minCount(): number;
  toString(): string;
  type(): j_net_minecraft_world_entity.EntityType<object>;
}
export type MobSpawnSettings_SpawnerData = MobSpawnSettings_SpawnerDataMembers & JavaOpaque<"java.lang.Record">;
export interface MobSpawnSettings_SpawnerDataStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number): MobSpawnSettings_SpawnerData;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MobSpawnSettings_SpawnerData]>;
}

/** JVM class net.minecraft.world.level.biome.MultiNoiseBiomeSource. */
export interface MultiNoiseBiomeSourceMembers {
  readonly __javaSupertypes?: readonly [BiomeSource];
  addDebugInfo(arg0: JavaList<string>, arg1: j_net_minecraft_core.BlockPos, arg2: Climate_Sampler): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>;
  collectPossibleBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Biome>]>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Climate_Sampler): j_net_minecraft_core.Holder<Biome>;
  getNoiseBiome(arg0: Climate_TargetPoint): j_net_minecraft_core.Holder<Biome>;
  stable(arg0: j_net_minecraft_resources.ResourceKey<MultiNoiseBiomeSourceParameterList>): boolean;
}
export type MultiNoiseBiomeSource = MultiNoiseBiomeSourceMembers & BiomeSource;
export interface MultiNoiseBiomeSourceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MultiNoiseBiomeSource]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Climate_ParameterList<j_net_minecraft_core.Holder<Biome>>]>;
  createFromList(arg0: Climate_ParameterList<j_net_minecraft_core.Holder<Biome>>): MultiNoiseBiomeSource;
  createFromPreset(arg0: j_net_minecraft_core.Holder<MultiNoiseBiomeSourceParameterList>): MultiNoiseBiomeSource;
}

/** JVM class net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList. */
export interface MultiNoiseBiomeSourceParameterListMembers {
  parameters(): Climate_ParameterList<j_net_minecraft_core.Holder<Biome>>;
}
export type MultiNoiseBiomeSourceParameterList = MultiNoiseBiomeSourceParameterListMembers;
export interface MultiNoiseBiomeSourceParameterListStatics {
  new(arg0: MultiNoiseBiomeSourceParameterList_Preset, arg1: j_net_minecraft_core.HolderGetter<Biome>): MultiNoiseBiomeSourceParameterList;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<MultiNoiseBiomeSourceParameterList>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MultiNoiseBiomeSourceParameterList]>;
  knownPresets(): JavaMap<MultiNoiseBiomeSourceParameterList_Preset, Climate_ParameterList<j_net_minecraft_resources.ResourceKey<Biome>>>;
}

/** JVM record net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset. */
export interface MultiNoiseBiomeSourceParameterList_PresetMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  provider(): JavaOpaque<"net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider">;
  toString(): string;
  usedBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceKey<Biome>]>;
}
export type MultiNoiseBiomeSourceParameterList_Preset = MultiNoiseBiomeSourceParameterList_PresetMembers & JavaOpaque<"java.lang.Record">;
export interface MultiNoiseBiomeSourceParameterList_PresetStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOpaque<"net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider">): MultiNoiseBiomeSourceParameterList_Preset;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MultiNoiseBiomeSourceParameterList_Preset]>;
  readonly NETHER: MultiNoiseBiomeSourceParameterList_Preset;
  readonly OVERWORLD: MultiNoiseBiomeSourceParameterList_Preset;
}

/** JVM class net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterLists. */
export interface MultiNoiseBiomeSourceParameterListsMembers {
}
export type MultiNoiseBiomeSourceParameterLists = MultiNoiseBiomeSourceParameterListsMembers;
export interface MultiNoiseBiomeSourceParameterListsStatics {
  new(): MultiNoiseBiomeSourceParameterLists;
  readonly NETHER: j_net_minecraft_resources.ResourceKey<MultiNoiseBiomeSourceParameterList>;
  readonly OVERWORLD: j_net_minecraft_resources.ResourceKey<MultiNoiseBiomeSourceParameterList>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<MultiNoiseBiomeSourceParameterList>): void;
}

/** JVM class net.minecraft.world.level.biome.OverworldBiomeBuilder. */
export interface OverworldBiomeBuilderMembers {
  addBiomes(arg0: JavaConsumer<JavaOpaque<"com.mojang.datafixers.util.Pair", [Climate_ParameterPoint, j_net_minecraft_resources.ResourceKey<Biome>]>>): void;
  getContinentalnessThresholds(): Array<Climate_Parameter>;
  getDebugStringForContinentalness(arg0: number): string;
  getDebugStringForErosion(arg0: number): string;
  getDebugStringForHumidity(arg0: number): string;
  getDebugStringForTemperature(arg0: number): string;
  getErosionThresholds(): Array<Climate_Parameter>;
  getHumidityThresholds(): Array<Climate_Parameter>;
  getPeaksAndValleysThresholds(): Array<Climate_Parameter>;
  getTemperatureThresholds(): Array<Climate_Parameter>;
  getWeirdnessThresholds(): Array<Climate_Parameter>;
  spawnTarget(): JavaList<Climate_ParameterPoint>;
}
export type OverworldBiomeBuilder = OverworldBiomeBuilderMembers;
export interface OverworldBiomeBuilderStatics {
  new(): OverworldBiomeBuilder;
  readonly EROSION_INDEX_1_START: -0.78;
  readonly EROSION_INDEX_2_START: -0.375;
  readonly FAR_INLAND_START: 0.3;
  readonly HIGH_START: 0.4;
  readonly MID_INLAND_START: 0.03;
  readonly NEAR_INLAND_START: -0.11;
  readonly PEAK_START: 0.56666666;
  getDebugStringForPeaksAndValleys(arg0: number): string;
  isDeepDarkRegion(arg0: j_net_minecraft_world_level_levelgen.DensityFunction, arg1: j_net_minecraft_world_level_levelgen.DensityFunction, arg2: j_net_minecraft_world_level_levelgen.DensityFunction_FunctionContext): boolean;
}

/** JVM class net.minecraft.world.level.biome.TheEndBiomeSource. */
export interface TheEndBiomeSourceMembers {
  readonly __javaSupertypes?: readonly [BiomeSource];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BiomeSource]>;
  collectPossibleBiomes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<Biome>]>;
  getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Climate_Sampler): j_net_minecraft_core.Holder<Biome>;
}
export type TheEndBiomeSource = TheEndBiomeSourceMembers & BiomeSource;
export interface TheEndBiomeSourceStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TheEndBiomeSource]>;
  create(arg0: j_net_minecraft_core.HolderGetter<Biome>): TheEndBiomeSource;
}
