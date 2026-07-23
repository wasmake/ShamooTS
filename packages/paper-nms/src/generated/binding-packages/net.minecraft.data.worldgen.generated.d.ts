// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_carver from './net.minecraft.world.level.levelgen.carver.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools_alias from './net.minecraft.world.level.levelgen.structure.pools.alias.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_levelgen_synth from './net.minecraft.world.level.levelgen.synth.generated.js';

/** JVM class net.minecraft.data.worldgen.AncientCityStructurePieces. */
export interface AncientCityStructurePiecesMembers {
}
export type AncientCityStructurePieces = AncientCityStructurePiecesMembers;
export interface AncientCityStructurePiecesStatics {
  new(): AncientCityStructurePieces;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.AncientCityStructurePools. */
export interface AncientCityStructurePoolsMembers {
}
export type AncientCityStructurePools = AncientCityStructurePoolsMembers;
export interface AncientCityStructurePoolsStatics {
  new(): AncientCityStructurePools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BastionBridgePools. */
export interface BastionBridgePoolsMembers {
}
export type BastionBridgePools = BastionBridgePoolsMembers;
export interface BastionBridgePoolsStatics {
  new(): BastionBridgePools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BastionHoglinStablePools. */
export interface BastionHoglinStablePoolsMembers {
}
export type BastionHoglinStablePools = BastionHoglinStablePoolsMembers;
export interface BastionHoglinStablePoolsStatics {
  new(): BastionHoglinStablePools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BastionHousingUnitsPools. */
export interface BastionHousingUnitsPoolsMembers {
}
export type BastionHousingUnitsPools = BastionHousingUnitsPoolsMembers;
export interface BastionHousingUnitsPoolsStatics {
  new(): BastionHousingUnitsPools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BastionPieces. */
export interface BastionPiecesMembers {
}
export type BastionPieces = BastionPiecesMembers;
export interface BastionPiecesStatics {
  new(): BastionPieces;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BastionSharedPools. */
export interface BastionSharedPoolsMembers {
}
export type BastionSharedPools = BastionSharedPoolsMembers;
export interface BastionSharedPoolsStatics {
  new(): BastionSharedPools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BastionTreasureRoomPools. */
export interface BastionTreasureRoomPoolsMembers {
}
export type BastionTreasureRoomPools = BastionTreasureRoomPoolsMembers;
export interface BastionTreasureRoomPoolsStatics {
  new(): BastionTreasureRoomPools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.BiomeDefaultFeatures. */
export interface BiomeDefaultFeaturesMembers {
}
export type BiomeDefaultFeatures = BiomeDefaultFeaturesMembers;
export interface BiomeDefaultFeaturesStatics {
  new(): BiomeDefaultFeatures;
  addAncientDebris(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBadlandExtraVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBadlandGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBadlandsTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBambooVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBirchForestFlowers(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBirchTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBlueIce(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addBushes(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addCherryGroveVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addColdOceanExtraVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addCommonBerryBushes(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultCarversAndLakes(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultCrystalFormations(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultExtraVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder, arg1: boolean): void;
  addDefaultFlowers(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultMonsterRoom(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultMushrooms(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultOres(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultOres(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder, arg1: boolean): void;
  addDefaultSoftDisks(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultSprings(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDefaultUndergroundVariety(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDesertExtraDecoration(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDesertExtraVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDesertVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addDripstone(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addExtraEmeralds(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addExtraGold(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addFerns(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addForestFlowers(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addForestGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addFossilDecoration(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addFrozenSprings(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addGiantTaigaVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addGroveTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addIcebergs(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addInfestedStone(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addJungleGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addJungleMelons(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addJungleTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addJungleVines(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addLeafLitterPatch(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addLightBambooVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addLukeWarmKelp(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addLushCavesSpecialOres(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addLushCavesVegetationFeatures(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMangroveSwampDisks(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMangroveSwampExtraVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMangroveSwampVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMeadowVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMossyStoneBlock(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMountainForestTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMountainTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addMushroomFieldVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addNetherDefaultOres(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addOtherBirchTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addPlainGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addPlainVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addRareBerryBushes(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSavannaExtraGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSavannaGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSavannaTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSculk(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addShatteredSavannaGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addShatteredSavannaTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSnowyTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSparseJungleMelons(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSparseJungleTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSurfaceFreezing(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSwampClayDisk(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSwampExtraVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addSwampVegetation(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addTaigaGrass(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addTaigaTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addTallBirchTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addWarmFlowers(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  addWaterTrees(arg0: j_net_minecraft_world_level_biome.BiomeGenerationSettings_Builder): void;
  baseJungleSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  caveSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  commonSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  commonSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder, arg1: number): void;
  desertSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  dripstoneCavesSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  endSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  farmAnimals(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  monsters(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
  mooshroomSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  oceanSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder, arg1: number, arg2: number, arg3: number): void;
  plainsSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  snowySpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder): void;
  warmOceanSpawns(arg0: j_net_minecraft_world_level_biome.MobSpawnSettings_Builder, arg1: number, arg2: number): void;
}

/** JVM interface net.minecraft.data.worldgen.BootstrapContext. */
export interface BootstrapContextMembers<T = unknown> {
  lookup<S>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<S>>): j_net_minecraft_core.HolderGetter<S>;
  register(arg0: j_net_minecraft_resources.ResourceKey<T>, arg1: T): j_net_minecraft_core.Holder_Reference<T>;
  register(arg0: j_net_minecraft_resources.ResourceKey<T>, arg1: T, arg2: JavaOpaque<"com.mojang.serialization.Lifecycle">): j_net_minecraft_core.Holder_Reference<T>;
}
export type BootstrapContext<T = unknown> = BootstrapContextMembers<T>;
export interface BootstrapContextStatics {
}

/** JVM class net.minecraft.data.worldgen.Carvers. */
export interface CarversMembers {
}
export type Carvers = CarversMembers;
export interface CarversStatics {
  new(): Carvers;
  readonly CANYON: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>;
  readonly CAVE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>;
  readonly CAVE_EXTRA_UNDERGROUND: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>;
  readonly NETHER_CAVE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_carver.ConfiguredWorldCarver<object>>): void;
}

/** JVM class net.minecraft.data.worldgen.DesertVillagePools. */
export interface DesertVillagePoolsMembers {
}
export type DesertVillagePools = DesertVillagePoolsMembers;
export interface DesertVillagePoolsStatics {
  new(): DesertVillagePools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.DimensionTypes. */
export interface DimensionTypesMembers {
}
export type DimensionTypes = DimensionTypesMembers;
export interface DimensionTypesStatics {
  new(): DimensionTypes;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_dimension.DimensionType>): void;
}

/** JVM class net.minecraft.data.worldgen.NoiseData. */
export interface NoiseDataMembers {
}
export type NoiseData = NoiseDataMembers;
export interface NoiseDataStatics {
  new(): NoiseData;
  readonly DEFAULT_SHIFT: j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_synth.NormalNoise_NoiseParameters>): void;
}

/** JVM class net.minecraft.data.worldgen.PillagerOutpostPools. */
export interface PillagerOutpostPoolsMembers {
}
export type PillagerOutpostPools = PillagerOutpostPoolsMembers;
export interface PillagerOutpostPoolsStatics {
  new(): PillagerOutpostPools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.PlainVillagePools. */
export interface PlainVillagePoolsMembers {
}
export type PlainVillagePools = PlainVillagePoolsMembers;
export interface PlainVillagePoolsStatics {
  new(): PlainVillagePools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.Pools. */
export interface PoolsMembers {
}
export type Pools = PoolsMembers;
export interface PoolsStatics {
  new(): Pools;
  readonly EMPTY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
  createKey(arg0: string): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  createKey(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  parseKey(arg0: string): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  register(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg1: string, arg2: j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool): void;
}

/** JVM class net.minecraft.data.worldgen.ProcessorLists. */
export interface ProcessorListsMembers {
}
export type ProcessorLists = ProcessorListsMembers;
export interface ProcessorListsStatics {
  new(): ProcessorLists;
  readonly ANCIENT_CITY_GENERIC_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ANCIENT_CITY_START_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ANCIENT_CITY_WALLS_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly BASTION_GENERIC_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly BOTTOM_RAMPART: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly BRIDGE: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ENTRANCE_REPLACEMENT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FARM_DESERT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FARM_PLAINS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FARM_SAVANNA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FARM_SNOWY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FARM_TAIGA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FOSSIL_COAL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FOSSIL_DIAMONDS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly FOSSIL_ROT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly HIGH_RAMPART: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly HIGH_WALL: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly HOUSING: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly MOSSIFY_10_PERCENT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly MOSSIFY_20_PERCENT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly MOSSIFY_70_PERCENT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly OUTPOST_ROT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly RAMPART_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ROOF: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly SIDE_WALL_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly STABLE_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly STREET_PLAINS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly STREET_SAVANNA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly STREET_SNOWY_OR_TAIGA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly TRAIL_RUINS_HOUSES_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly TRAIL_RUINS_ROADS_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly TRAIL_RUINS_TOWER_TOP_ARCHAEOLOGY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly TREASURE_ROOMS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly TRIAL_CHAMBERS_COPPER_BULB_DEGRADATION: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ZOMBIE_DESERT: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ZOMBIE_PLAINS: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ZOMBIE_SAVANNA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ZOMBIE_SNOWY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  readonly ZOMBIE_TAIGA: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureProcessorList>): void;
}

/** JVM class net.minecraft.data.worldgen.SavannaVillagePools. */
export interface SavannaVillagePoolsMembers {
}
export type SavannaVillagePools = SavannaVillagePoolsMembers;
export interface SavannaVillagePoolsStatics {
  new(): SavannaVillagePools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.SnowyVillagePools. */
export interface SnowyVillagePoolsMembers {
}
export type SnowyVillagePools = SnowyVillagePoolsMembers;
export interface SnowyVillagePoolsStatics {
  new(): SnowyVillagePools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.Structures. */
export interface StructuresMembers {
}
export type Structures = StructuresMembers;
export interface StructuresStatics {
  new(): Structures;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure.Structure>): void;
}

/** JVM interface net.minecraft.data.worldgen.StructureSets. */
export interface StructureSetsMembers {
}
export type StructureSets = StructureSetsMembers;
export interface StructureSetsStatics {
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure.StructureSet>): void;
}

/** JVM class net.minecraft.data.worldgen.SurfaceRuleData. */
export interface SurfaceRuleDataMembers {
}
export type SurfaceRuleData = SurfaceRuleDataMembers;
export interface SurfaceRuleDataStatics {
  new(): SurfaceRuleData;
  air(): j_net_minecraft_world_level_levelgen.SurfaceRules_RuleSource;
  end(): j_net_minecraft_world_level_levelgen.SurfaceRules_RuleSource;
  nether(): j_net_minecraft_world_level_levelgen.SurfaceRules_RuleSource;
  overworld(): j_net_minecraft_world_level_levelgen.SurfaceRules_RuleSource;
  overworldLike(arg0: boolean, arg1: boolean, arg2: boolean): j_net_minecraft_world_level_levelgen.SurfaceRules_RuleSource;
}

/** JVM class net.minecraft.data.worldgen.TaigaVillagePools. */
export interface TaigaVillagePoolsMembers {
}
export type TaigaVillagePools = TaigaVillagePoolsMembers;
export interface TaigaVillagePoolsStatics {
  new(): TaigaVillagePools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.TerrainProvider. */
export interface TerrainProviderMembers {
}
export type TerrainProvider = TerrainProviderMembers;
export interface TerrainProviderStatics {
  new(): TerrainProvider;
  buildErosionOffsetSpline<C, I /* extends j_net_minecraft_util.ToFloatFunction<C> */>(arg0: I, arg1: I, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: j_net_minecraft_util.ToFloatFunction<number>): j_net_minecraft_util.CubicSpline<C, I>;
  overworldFactor<C, I /* extends j_net_minecraft_util.ToFloatFunction<C> */>(arg0: I, arg1: I, arg2: I, arg3: I, arg4: boolean): j_net_minecraft_util.CubicSpline<C, I>;
  overworldJaggedness<C, I /* extends j_net_minecraft_util.ToFloatFunction<C> */>(arg0: I, arg1: I, arg2: I, arg3: I, arg4: boolean): j_net_minecraft_util.CubicSpline<C, I>;
  overworldOffset<C, I /* extends j_net_minecraft_util.ToFloatFunction<C> */>(arg0: I, arg1: I, arg2: I, arg3: boolean): j_net_minecraft_util.CubicSpline<C, I>;
}

/** JVM class net.minecraft.data.worldgen.TrailRuinsStructurePools. */
export interface TrailRuinsStructurePoolsMembers {
}
export type TrailRuinsStructurePools = TrailRuinsStructurePoolsMembers;
export interface TrailRuinsStructurePoolsStatics {
  new(): TrailRuinsStructurePools;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}

/** JVM class net.minecraft.data.worldgen.TrialChambersStructurePools. */
export interface TrialChambersStructurePoolsMembers {
}
export type TrialChambersStructurePools = TrialChambersStructurePoolsMembers;
export interface TrialChambersStructurePoolsStatics {
  new(): TrialChambersStructurePools;
  readonly ALIAS_BINDINGS: JavaList<j_net_minecraft_world_level_levelgen_structure_pools_alias.PoolAliasBinding>;
  readonly HALLWAY_FALLBACK: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  readonly START: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
  spawner(arg0: string): string;
}

/** JVM class net.minecraft.data.worldgen.VillagePools. */
export interface VillagePoolsMembers {
}
export type VillagePools = VillagePoolsMembers;
export interface VillagePoolsStatics {
  new(): VillagePools;
  bootstrap(arg0: BootstrapContext<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
}
