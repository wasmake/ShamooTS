// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_random from './net.minecraft.util.random.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_configurations from './net.minecraft.world.level.levelgen.feature.configurations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';

/** JVM class net.minecraft.data.worldgen.features.AquaticFeatures. */
export interface AquaticFeaturesMembers {
}
export type AquaticFeatures = AquaticFeaturesMembers;
export interface AquaticFeaturesStatics {
  new(): AquaticFeatures;
  readonly KELP: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SEAGRASS_MID: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SEAGRASS_SHORT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SEAGRASS_SLIGHTLY_LESS_SHORT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SEAGRASS_TALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SEA_PICKLE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WARM_OCEAN_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.CaveFeatures. */
export interface CaveFeaturesMembers {
}
export type CaveFeatures = CaveFeaturesMembers;
export interface CaveFeaturesStatics {
  new(): CaveFeatures;
  readonly AMETHYST_GEODE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CAVE_VINE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CAVE_VINE_IN_MOSS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CLAY_POOL_WITH_DRIPLEAVES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CLAY_WITH_DRIPLEAVES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DRIPLEAF: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DRIPSTONE_CLUSTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FOSSIL_COAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FOSSIL_DIAMONDS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly GLOW_LICHEN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly LARGE_DRIPSTONE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly LUSH_CAVES_CLAY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MONSTER_ROOM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MOSS_PATCH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MOSS_PATCH_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MOSS_PATCH_CEILING: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MOSS_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly POINTED_DRIPSTONE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ROOTED_AZALEA_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SCULK_PATCH_ANCIENT_CITY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SCULK_PATCH_DEEP_DARK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SCULK_VEIN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPORE_BLOSSOM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly UNDERWATER_MAGMA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.EndFeatures. */
export interface EndFeaturesMembers {
}
export type EndFeatures = EndFeaturesMembers;
export interface EndFeaturesStatics {
  new(): EndFeatures;
  readonly CHORUS_PLANT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly END_GATEWAY_DELAYED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly END_GATEWAY_RETURN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly END_ISLAND: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly END_PLATFORM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly END_SPIKE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.FeatureUtils. */
export interface FeatureUtilsMembers {
}
export type FeatureUtils = FeatureUtilsMembers;
export interface FeatureUtilsStatics {
  new(): FeatureUtils;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
  createKey(arg0: string): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  register(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg2: j_net_minecraft_world_level_levelgen_feature.Feature<j_net_minecraft_world_level_levelgen_feature_configurations.NoneFeatureConfiguration>): void;
  register<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */, F /* extends j_net_minecraft_world_level_levelgen_feature.Feature<FC> */>(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg2: F, arg3: FC): void;
  simplePatchConfiguration<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */, F /* extends j_net_minecraft_world_level_levelgen_feature.Feature<FC> */>(arg0: F, arg1: FC): j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration;
  simplePatchConfiguration<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */, F /* extends j_net_minecraft_world_level_levelgen_feature.Feature<FC> */>(arg0: F, arg1: FC, arg2: JavaList<j_net_minecraft_world_level_block.Block>): j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration;
  simplePatchConfiguration<FC /* extends j_net_minecraft_world_level_levelgen_feature_configurations.FeatureConfiguration */, F /* extends j_net_minecraft_world_level_levelgen_feature.Feature<FC> */>(arg0: F, arg1: FC, arg2: JavaList<j_net_minecraft_world_level_block.Block>, arg3: number): j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration;
  simpleRandomPatchConfiguration(arg0: number, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>): j_net_minecraft_world_level_levelgen_feature_configurations.RandomPatchConfiguration;
}

/** JVM class net.minecraft.data.worldgen.features.MiscOverworldFeatures. */
export interface MiscOverworldFeaturesMembers {
}
export type MiscOverworldFeatures = MiscOverworldFeaturesMembers;
export interface MiscOverworldFeaturesStatics {
  new(): MiscOverworldFeatures;
  readonly BLUE_ICE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BONUS_CHEST: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DESERT_WELL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DISK_CLAY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DISK_GRASS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DISK_GRAVEL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DISK_SAND: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FOREST_ROCK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FREEZE_TOP_LAYER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ICEBERG_BLUE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ICEBERG_PACKED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ICE_PATCH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ICE_SPIKE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly LAKE_LAVA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRING_LAVA_FROZEN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRING_LAVA_OVERWORLD: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRING_WATER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly VOID_START_PLATFORM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.NetherFeatures. */
export interface NetherFeaturesMembers {
}
export type NetherFeatures = NetherFeaturesMembers;
export interface NetherFeaturesStatics {
  new(): NetherFeatures;
  readonly BASALT_BLOBS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BASALT_PILLAR: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BLACKSTONE_BLOBS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CRIMSON_FOREST_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CRIMSON_FOREST_VEGETATION_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DELTA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly GLOWSTONE_EXTRA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly LARGE_BASALT_COLUMNS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly NETHER_SPROUTS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly NETHER_SPROUTS_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_CRIMSON_ROOTS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_FIRE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_SOUL_FIRE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SMALL_BASALT_COLUMNS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRING_LAVA_NETHER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRING_NETHER_CLOSED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRING_NETHER_OPEN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TWISTING_VINES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TWISTING_VINES_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WARPED_FOREST_VEGETATION_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WARPED_FOREST_VEGETION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WEEPING_VINES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.OreFeatures. */
export interface OreFeaturesMembers {
}
export type OreFeatures = OreFeaturesMembers;
export interface OreFeaturesStatics {
  new(): OreFeatures;
  readonly ORE_ANCIENT_DEBRIS_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_ANCIENT_DEBRIS_SMALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_ANDESITE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_BLACKSTONE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_CLAY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_COAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_COAL_BURIED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_COPPER_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_COPPPER_SMALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_DIAMOND_BURIED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_DIAMOND_LARGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_DIAMOND_MEDIUM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_DIAMOND_SMALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_DIORITE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_DIRT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_EMERALD: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_GOLD: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_GOLD_BURIED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_GRANITE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_GRAVEL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_GRAVEL_NETHER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_INFESTED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_IRON: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_IRON_SMALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_LAPIS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_LAPIS_BURIED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_MAGMA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_NETHER_GOLD: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_QUARTZ: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_REDSTONE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_SOUL_SAND: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly ORE_TUFF: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.PileFeatures. */
export interface PileFeaturesMembers {
}
export type PileFeatures = PileFeaturesMembers;
export interface PileFeaturesStatics {
  new(): PileFeatures;
  readonly PILE_HAY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PILE_ICE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PILE_MELON: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PILE_PUMPKIN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PILE_SNOW: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.TreeFeatures. */
export interface TreeFeaturesMembers {
}
export type TreeFeatures = TreeFeaturesMembers;
export interface TreeFeaturesStatics {
  new(): TreeFeatures;
  readonly ACACIA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly AZALEA_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH_BEES_0002: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH_BEES_0002_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH_BEES_002: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH_BEES_005: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CHERRY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CHERRY_BEES_005: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CRIMSON_FUNGUS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly CRIMSON_FUNGUS_PLANTED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DARK_OAK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DARK_OAK_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FALLEN_BIRCH_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FALLEN_JUNGLE_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FALLEN_OAK_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FALLEN_SPRUCE_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FALLEN_SUPER_BIRCH_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FANCY_OAK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FANCY_OAK_BEES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FANCY_OAK_BEES_0002_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FANCY_OAK_BEES_002: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FANCY_OAK_BEES_005: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FANCY_OAK_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly HUGE_BROWN_MUSHROOM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly HUGE_RED_MUSHROOM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly JUNGLE_BUSH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly JUNGLE_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly JUNGLE_TREE_NO_VINE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MANGROVE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MEGA_JUNGLE_TREE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MEGA_PINE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MEGA_SPRUCE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly OAK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly OAK_BEES_0002_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly OAK_BEES_002: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly OAK_BEES_005: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly OAK_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_OAK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_OAK_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_OAK_CREAKING: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PINE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SPRUCE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SUPER_BIRCH_BEES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SUPER_BIRCH_BEES_0002: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SWAMP_OAK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TALL_MANGROVE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WARPED_FUNGUS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WARPED_FUNGUS_PLANTED: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
}

/** JVM class net.minecraft.data.worldgen.features.VegetationFeatures. */
export interface VegetationFeaturesMembers {
}
export type VegetationFeatures = VegetationFeaturesMembers;
export interface VegetationFeaturesStatics {
  new(): VegetationFeatures;
  readonly BAMBOO_NO_PODZOL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BAMBOO_SOME_PODZOL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BAMBOO_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly BIRCH_TALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly DARK_FOREST_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_CHERRY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_DEFAULT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_FLOWER_FOREST: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_MEADOW: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_PALE_GARDEN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_PLAIN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FLOWER_SWAMP: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly FOREST_FLOWERS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MANGROVE_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MEADOW_TREES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly MUSHROOM_ISLAND_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_FOREST_FLOWERS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_GARDEN_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_MOSS_PATCH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_MOSS_PATCH_BONEMEAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PALE_MOSS_VEGETATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_BERRY_BUSH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_BROWN_MUSHROOM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_BUSH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_CACTUS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_DEAD_BUSH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_DRY_GRASS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_FIREFLY_BUSH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_GRASS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_GRASS_JUNGLE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_GRASS_MEADOW: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_LARGE_FERN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_MELON: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_PUMPKIN: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_RED_MUSHROOM: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_SUGAR_CANE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_SUNFLOWER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_TAIGA_GRASS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_TALL_GRASS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly PATCH_WATERLILY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly SINGLE_PIECE_OF_GRASS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_BADLANDS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_BIRCH: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_BIRCH_AND_OAK_LEAF_LITTER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_FLOWER_FOREST: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_GROVE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_JUNGLE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_OLD_GROWTH_PINE_TAIGA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_OLD_GROWTH_SPRUCE_TAIGA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_PLAINS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_SAVANNA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_SNOWY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_SPARSE_JUNGLE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_TAIGA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_WATER: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly TREES_WINDSWEPT_HILLS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly VINES: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WILDFLOWERS_BIRCH_FOREST: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  readonly WILDFLOWERS_MEADOW: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>): void;
  leafLitterPatchBuilder(arg0: number, arg1: number): j_net_minecraft_util_random.WeightedList_Builder<j_net_minecraft_world_level_block_state.BlockState>;
  nearWaterPredicate(arg0: j_net_minecraft_world_level_block.Block): j_net_minecraft_world_level_levelgen_placement.BlockPredicateFilter;
}
