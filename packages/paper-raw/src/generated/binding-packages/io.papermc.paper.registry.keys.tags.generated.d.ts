// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_io_papermc_paper_registry_tag from './io.papermc.paper.registry.tag.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_generator_structure from './org.bukkit.generator.structure.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM class io.papermc.paper.registry.keys.tags.BannerPatternTagKeys. */
export interface BannerPatternTagKeysMembers {
}
export type BannerPatternTagKeys = BannerPatternTagKeysMembers;
export interface BannerPatternTagKeysStatics {
  readonly NO_ITEM_REQUIRED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_BORDURE_INDENTED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_CREEPER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_FIELD_MASONED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_FLOW: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_FLOWER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_GLOBE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_GUSTER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_MOJANG: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_PIGLIN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  readonly PATTERN_ITEM_SKULL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block_banner.PatternType>;
}

/** JVM class io.papermc.paper.registry.keys.tags.BiomeTagKeys. */
export interface BiomeTagKeysMembers {
}
export type BiomeTagKeys = BiomeTagKeysMembers;
export interface BiomeTagKeysStatics {
  readonly ALLOWS_SURFACE_SLIME_SPAWNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly ALLOWS_TROPICAL_FISH_SPAWNS_AT_ANY_HEIGHT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_CLOSER_WATER_FOG: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_ANCIENT_CITY: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_BASTION_REMNANT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_BURIED_TREASURE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_DESERT_PYRAMID: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_END_CITY: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_IGLOO: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_JUNGLE_TEMPLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_MINESHAFT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_MINESHAFT_MESA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_NETHER_FORTRESS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_NETHER_FOSSIL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_OCEAN_MONUMENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_OCEAN_RUIN_COLD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_OCEAN_RUIN_WARM: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_PILLAGER_OUTPOST: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_DESERT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_JUNGLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_MOUNTAIN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_NETHER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_OCEAN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_STANDARD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_RUINED_PORTAL_SWAMP: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_SHIPWRECK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_SHIPWRECK_BEACHED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_STRONGHOLD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_SWAMP_HUT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_TRAIL_RUINS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_TRIAL_CHAMBERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_VILLAGE_DESERT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_VILLAGE_PLAINS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_VILLAGE_SAVANNA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_VILLAGE_SNOWY: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_VILLAGE_TAIGA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly HAS_STRUCTURE_WOODLAND_MANSION: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly INCREASED_FIRE_BURNOUT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_BADLANDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_BEACH: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_DEEP_OCEAN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_END: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_FOREST: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_HILL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_JUNGLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_MOUNTAIN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_NETHER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_OCEAN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_OVERWORLD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_RIVER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_SAVANNA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly IS_TAIGA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly MINESHAFT_BLOCKING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly MORE_FREQUENT_DROWNED_SPAWNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly PLAYS_UNDERWATER_MUSIC: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly POLAR_BEARS_SPAWN_ON_ALTERNATE_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly PRODUCES_CORALS_FROM_BONEMEAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly REDUCE_WATER_AMBIENT_SPAWNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly REQUIRED_OCEAN_MONUMENT_SURROUNDING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SNOW_GOLEM_MELTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_COLD_VARIANT_FARM_ANIMALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_COLD_VARIANT_FROGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_GOLD_RABBITS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_SNOW_FOXES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_WARM_VARIANT_FARM_ANIMALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_WARM_VARIANT_FROGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly SPAWNS_WHITE_RABBITS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly STRONGHOLD_BIASED_TO: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly WATER_ON_MAP_OUTLINES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly WITHOUT_PATROL_SPAWNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly WITHOUT_WANDERING_TRADER_SPAWNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  readonly WITHOUT_ZOMBIE_SIEGES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.Biome>;
}

/** JVM class io.papermc.paper.registry.keys.tags.BlockTypeTagKeys. */
export interface BlockTypeTagKeysMembers {
}
export type BlockTypeTagKeys = BlockTypeTagKeysMembers;
export interface BlockTypeTagKeysStatics {
  readonly ACACIA_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly AIR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ALL_HANGING_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ALL_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ANCIENT_CITY_REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ANIMALS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ANVIL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ARMADILLO_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly AXOLOTLS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly AZALEA_GROWS_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly AZALEA_ROOT_REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BADLANDS_TERRACOTTA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BAMBOO_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BAMBOO_PLANTABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BANNERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BASE_STONE_NETHER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BASE_STONE_OVERWORLD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BATS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BEACON_BASE_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BEDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BEEHIVES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BEE_ATTRACTIVE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BEE_GROWABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BIG_DRIPLEAF_PLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BIRCH_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BLOCKS_WIND_CHARGE_EXPLOSIONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly BUTTONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CAMELS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CAMEL_SAND_STEP_SOUND_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CAMPFIRES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CANDLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CANDLE_CAKES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CAULDRONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CAVE_VINES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CEILING_HANGING_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CHERRY_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CLIMBABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly COAL_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly COMBINATION_STEP_SOUND_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly COMPLETES_FIND_TREE_TUTORIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CONCRETE_POWDER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CONVERTABLE_TO_MUD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly COPPER_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CORALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CORAL_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CORAL_PLANTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CRIMSON_STEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CROPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly CRYSTAL_SOUND_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DAMPENS_VIBRATIONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DARK_OAK_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DEEPSLATE_ORE_REPLACEABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DIAMOND_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DIRT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DOES_NOT_BLOCK_HOPPERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DRAGON_IMMUNE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DRAGON_TRANSPARENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DRIPSTONE_REPLACEABLE_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly DRY_VEGETATION_MAY_PLACE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly EDIBLE_FOR_SHEEP: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly EMERALD_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ENCHANTMENT_POWER_PROVIDER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ENCHANTMENT_POWER_TRANSMITTER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ENDERMAN_HOLDABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FALL_DAMAGE_RESETTING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FEATURES_CANNOT_REPLACE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FENCES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FENCE_GATES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FIRE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FLOWERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FLOWER_POTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FOXES_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FROGS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly FROG_PREFER_JUMP_TO: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly GEODE_INVALID_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly GOATS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly GOLD_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly GUARDED_BY_PIGLINS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly HAPPY_GHAST_AVOIDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly HOGLIN_REPELLENTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly ICE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly IMPERMEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INCORRECT_FOR_DIAMOND_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INCORRECT_FOR_GOLD_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INCORRECT_FOR_IRON_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INCORRECT_FOR_NETHERITE_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INCORRECT_FOR_STONE_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INCORRECT_FOR_WOODEN_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INFINIBURN_END: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INFINIBURN_NETHER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INFINIBURN_OVERWORLD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INSIDE_STEP_SOUND_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly INVALID_SPAWN_INSIDE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly IRON_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly JUNGLE_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly LAPIS_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly LAVA_POOL_STONE_CANNOT_REPLACE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly LEAVES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly LOGS_THAT_BURN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly LUSH_GROUND_REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MAINTAINS_FARMLAND: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MANGROVE_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MANGROVE_LOGS_CAN_GROW_THROUGH: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MANGROVE_ROOTS_CAN_GROW_THROUGH: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MINEABLE_AXE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MINEABLE_HOE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MINEABLE_PICKAXE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MINEABLE_SHOVEL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MOB_INTERACTABLE_DOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MOOSHROOMS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MOSS_REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly MUSHROOM_GROW_BLOCK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly NEEDS_DIAMOND_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly NEEDS_IRON_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly NEEDS_STONE_TOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly NETHER_CARVER_REPLACEABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly NYLIUM: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly OAK_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly OCCLUDES_VIBRATION_SIGNALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly OVERWORLD_CARVER_REPLACEABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly OVERWORLD_NATURAL_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PALE_OAK_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PARROTS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PIGLIN_REPELLENTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PLANKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly POLAR_BEARS_SPAWNABLE_ON_ALTERNATE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PORTALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PRESSURE_PLATES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly PREVENT_MOB_SPAWNING_INSIDE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly RABBITS_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly RAILS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly REDSTONE_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly REPLACEABLE_BY_MUSHROOMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly REPLACEABLE_BY_TREES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SAND: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SAPLINGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SCULK_REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SCULK_REPLACEABLE_WORLD_GEN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SHULKER_BOXES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SLABS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SMALL_DRIPLEAF_PLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SMALL_FLOWERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SMELTS_TO_GLASS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SNAPS_GOAT_HORN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SNIFFER_DIGGABLE_BLOCK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SNIFFER_EGG_HATCH_BOOST: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SNOW: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SNOW_LAYER_CANNOT_SURVIVE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SNOW_LAYER_CAN_SURVIVE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SOUL_FIRE_BASE_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SOUL_SPEED_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SPRUCE_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STAIRS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STANDING_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STONE_BRICKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STONE_BUTTONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STONE_ORE_REPLACEABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STONE_PRESSURE_PLATES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly STRIDER_WARM_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SWORD_EFFICIENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly SWORD_INSTANTLY_MINES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly TERRACOTTA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly TRAIL_RUINS_REPLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly TRAPDOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly TRIGGERS_AMBIENT_DESERT_DRY_VEGETATION_BLOCK_SOUNDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly TRIGGERS_AMBIENT_DESERT_SAND_BLOCK_SOUNDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly TRIGGERS_AMBIENT_DRIED_GHAST_BLOCK_SOUNDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly UNDERWATER_BONEMEALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly UNSTABLE_BOTTOM_CENTER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly VALID_SPAWN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly VIBRATION_RESONATORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WALLS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WALL_CORALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WALL_HANGING_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WALL_POST_OVERRIDE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WALL_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WARPED_STEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WART_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WITHER_IMMUNE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WITHER_SUMMON_BASE_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOLVES_SPAWNABLE_ON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_BUTTONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_DOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_FENCES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_PRESSURE_PLATES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_SLABS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_STAIRS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOODEN_TRAPDOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  readonly WOOL_CARPETS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_block.BlockType>;
}

/** JVM class io.papermc.paper.registry.keys.tags.DamageTypeTagKeys. */
export interface DamageTypeTagKeysMembers {
}
export type DamageTypeTagKeys = DamageTypeTagKeysMembers;
export interface DamageTypeTagKeysStatics {
  readonly ALWAYS_HURTS_ENDER_DRAGONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly ALWAYS_KILLS_ARMOR_STANDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly ALWAYS_MOST_SIGNIFICANT_FALL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly ALWAYS_TRIGGERS_SILVERFISH: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly AVOIDS_GUARDIAN_THORNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BURNS_ARMOR_STANDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BURN_FROM_STEPPING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_EFFECTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_ENCHANTMENTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_INVULNERABILITY: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_RESISTANCE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_SHIELD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly BYPASSES_WOLF_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly CAN_BREAK_ARMOR_STAND: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly DAMAGES_HELMET: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IGNITES_ARMOR_STANDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_DROWNING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_EXPLOSION: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_FALL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_FIRE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_FREEZING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_LIGHTNING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_PLAYER_ATTACK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly IS_PROJECTILE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly MACE_SMASH: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly NO_ANGER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly NO_IMPACT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly NO_KNOCKBACK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly PANIC_CAUSES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly PANIC_ENVIRONMENTAL_CAUSES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly WITCH_RESISTANT_TO: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  readonly WITHER_IMMUNE_TO: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_damage.DamageType>;
}

/** JVM class io.papermc.paper.registry.keys.tags.DialogTagKeys. */
export interface DialogTagKeysMembers {
}
export type DialogTagKeys = DialogTagKeysMembers;
export interface DialogTagKeysStatics {
  readonly PAUSE_SCREEN_ADDITIONS: j_io_papermc_paper_registry_tag.TagKey<j_io_papermc_paper_dialog.Dialog>;
  readonly QUICK_ACTIONS: j_io_papermc_paper_registry_tag.TagKey<j_io_papermc_paper_dialog.Dialog>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_io_papermc_paper_dialog.Dialog>;
}

/** JVM class io.papermc.paper.registry.keys.tags.EnchantmentTagKeys. */
export interface EnchantmentTagKeysMembers {
}
export type EnchantmentTagKeys = EnchantmentTagKeysMembers;
export interface EnchantmentTagKeysStatics {
  readonly CURSE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly DOUBLE_TRADE_PRICE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_BOOTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_BOW: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_CROSSBOW: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_DAMAGE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_MINING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly EXCLUSIVE_SET_RIPTIDE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly IN_ENCHANTING_TABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly NON_TREASURE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly ON_MOB_SPAWN_EQUIPMENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly ON_RANDOM_LOOT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly ON_TRADED_EQUIPMENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly PREVENTS_BEE_SPAWNS_WHEN_MINING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly PREVENTS_DECORATED_POT_SHATTERING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly PREVENTS_ICE_MELTING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly PREVENTS_INFESTED_SPAWNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly SMELTS_LOOT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TOOLTIP_ORDER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_DESERT_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_DESERT_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_JUNGLE_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_JUNGLE_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_PLAINS_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_PLAINS_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_SAVANNA_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_SAVANNA_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_SNOW_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_SNOW_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_SWAMP_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_SWAMP_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_TAIGA_COMMON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TRADES_TAIGA_SPECIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  readonly TREASURE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_enchantments.Enchantment>;
}

/** JVM class io.papermc.paper.registry.keys.tags.EntityTypeTagKeys. */
export interface EntityTypeTagKeysMembers {
}
export type EntityTypeTagKeys = EntityTypeTagKeysMembers;
export interface EntityTypeTagKeysStatics {
  readonly AQUATIC: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly ARROWS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly ARTHROPOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly AXOLOTL_ALWAYS_HOSTILES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly AXOLOTL_HUNT_TARGETS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly BEEHIVE_INHABITORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly BOAT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly CAN_BREATHE_UNDER_WATER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly CAN_EQUIP_HARNESS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly CAN_EQUIP_SADDLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly CAN_TURN_IN_BOATS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly CAN_WEAR_HORSE_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly DEFLECTS_PROJECTILES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly DISMOUNTS_UNDERWATER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly FALL_DAMAGE_IMMUNE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly FOLLOWABLE_FRIENDLY_MOBS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly FREEZE_HURTS_EXTRA_TYPES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly FREEZE_IMMUNE_ENTITY_TYPES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly FROG_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly IGNORES_POISON_AND_REGEN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly ILLAGER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly ILLAGER_FRIENDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly IMMUNE_TO_INFESTED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly IMMUNE_TO_OOZING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly IMPACT_PROJECTILES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly INVERTED_HEALING_AND_HARM: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly NON_CONTROLLING_RIDER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly NOT_SCARY_FOR_PUFFERFISH: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly NO_ANGER_FROM_WIND_CHARGE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly POWDER_SNOW_WALKABLE_MOBS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly RAIDERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly REDIRECTABLE_PROJECTILE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly SENSITIVE_TO_BANE_OF_ARTHROPODS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly SENSITIVE_TO_IMPALING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly SENSITIVE_TO_SMITE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly SKELETONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly UNDEAD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly WITHER_FRIENDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  readonly ZOMBIES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_entity.EntityType>;
}

/** JVM class io.papermc.paper.registry.keys.tags.FluidTagKeys. */
export interface FluidTagKeysMembers {
}
export type FluidTagKeys = FluidTagKeysMembers;
export interface FluidTagKeysStatics {
  readonly LAVA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.Fluid>;
  readonly WATER: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.Fluid>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.Fluid>;
}

/** JVM class io.papermc.paper.registry.keys.tags.GameEventTagKeys. */
export interface GameEventTagKeysMembers {
}
export type GameEventTagKeys = GameEventTagKeysMembers;
export interface GameEventTagKeysStatics {
  readonly ALLAY_CAN_LISTEN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.GameEvent>;
  readonly IGNORE_VIBRATIONS_SNEAKING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.GameEvent>;
  readonly SHRIEKER_CAN_LISTEN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.GameEvent>;
  readonly VIBRATIONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.GameEvent>;
  readonly WARDEN_CAN_LISTEN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.GameEvent>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.GameEvent>;
}

/** JVM class io.papermc.paper.registry.keys.tags.InstrumentTagKeys. */
export interface InstrumentTagKeysMembers {
}
export type InstrumentTagKeys = InstrumentTagKeysMembers;
export interface InstrumentTagKeysStatics {
  readonly GOAT_HORNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.MusicInstrument>;
  readonly REGULAR_GOAT_HORNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.MusicInstrument>;
  readonly SCREAMING_GOAT_HORNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.MusicInstrument>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.MusicInstrument>;
}

/** JVM class io.papermc.paper.registry.keys.tags.ItemTypeTagKeys. */
export interface ItemTypeTagKeysMembers {
}
export type ItemTypeTagKeys = ItemTypeTagKeysMembers;
export interface ItemTypeTagKeysStatics {
  readonly ACACIA_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ANVIL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ARMADILLO_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ARROWS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly AXES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly AXOLOTL_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BAMBOO_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BANNERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BEACON_PAYMENT_ITEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BEDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BEE_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BIRCH_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BOATS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BOOKSHELF_BOOKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BOOK_CLONING_TARGET: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BREAKS_DECORATED_POTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BREWING_FUEL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BUNDLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly BUTTONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CAMEL_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CANDLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CAT_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CHERRY_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CHEST_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CHEST_BOATS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CHICKEN_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CLUSTER_MAX_HARVESTABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly COALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly COAL_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly COMPASSES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly COMPLETES_FIND_TREE_TUTORIAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly COPPER_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly COW_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CREEPER_DROP_MUSIC_DISCS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CREEPER_IGNITERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly CRIMSON_STEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DAMPENS_VIBRATIONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DARK_OAK_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DECORATED_POT_INGREDIENTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DECORATED_POT_SHERDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DIAMOND_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DIAMOND_TOOL_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DIRT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DROWNED_PREFERRED_WEAPONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DUPLICATES_ALLAYS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly DYEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly EGGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly EMERALD_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_BOW: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_CHEST_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_CROSSBOW: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_DURABILITY: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_EQUIPPABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_FIRE_ASPECT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_FISHING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_FOOT_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_HEAD_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_LEG_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_MACE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_MINING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_MINING_LOOT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_SHARP_WEAPON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_SWORD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_TRIDENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_VANISHING: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly ENCHANTABLE_WEAPON: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FENCES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FENCE_GATES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FISHES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FLOWERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FOOT_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FOX_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FREEZE_IMMUNE_WEARABLES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FROG_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly FURNACE_MINECART_FUEL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly GAZE_DISGUISE_EQUIPMENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly GOAT_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly GOLD_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly GOLD_TOOL_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HANGING_SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HAPPY_GHAST_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HAPPY_GHAST_TEMPT_ITEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HARNESSES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HEAD_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HOES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HOGLIN_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HORSE_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly HORSE_TEMPT_ITEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly IGNORED_BY_PIGLIN_BABIES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly IRON_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly IRON_TOOL_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly JUNGLE_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LAPIS_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LEAVES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LECTERN_BOOKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LEG_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LLAMA_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LLAMA_TEMPT_ITEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly LOGS_THAT_BURN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly MANGROVE_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly MAP_INVISIBILITY_EQUIPMENT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly MEAT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly NETHERITE_TOOL_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly NON_FLAMMABLE_WOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly NOTEBLOCK_TOP_INSTRUMENTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly OAK_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly OCELOT_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PALE_OAK_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PANDA_EATS_FROM_GROUND: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PANDA_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PARROT_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PARROT_POISONOUS_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PICKAXES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PIGLIN_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PIGLIN_LOVED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PIGLIN_PREFERRED_WEAPONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PIGLIN_REPELLENTS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PIGLIN_SAFE_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PIG_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PILLAGER_PREFERRED_WEAPONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly PLANKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly RABBIT_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly RAILS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REDSTONE_ORES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_CHAIN_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_DIAMOND_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_GOLD_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_IRON_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_LEATHER_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_NETHERITE_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_TURTLE_HELMET: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly REPAIRS_WOLF_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SAND: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SAPLINGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SHEEP_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SHOVELS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SHULKER_BOXES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SIGNS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SKELETON_PREFERRED_WEAPONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SKULLS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SLABS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SMALL_FLOWERS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SMELTS_TO_GLASS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SNIFFER_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SOUL_FIRE_BASE_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SPRUCE_LOGS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STAIRS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STONE_BRICKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STONE_BUTTONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STONE_CRAFTING_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STONE_TOOL_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STRIDER_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly STRIDER_TEMPT_ITEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly SWORDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly TERRACOTTA: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly TRAPDOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly TRIMMABLE_ARMOR: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly TRIM_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly TURTLE_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly VILLAGER_PICKS_UP: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly VILLAGER_PLANTABLE_SEEDS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WALLS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WARPED_STEMS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WART_BLOCKS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WITHER_SKELETON_DISLIKED_WEAPONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOLF_FOOD: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_BUTTONS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_DOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_FENCES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_PRESSURE_PLATES: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_SLABS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_STAIRS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_TOOL_MATERIALS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOODEN_TRAPDOORS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOOL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  readonly WOOL_CARPETS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_inventory.ItemType>;
}

/** JVM class io.papermc.paper.registry.keys.tags.PaintingVariantTagKeys. */
export interface PaintingVariantTagKeysMembers {
}
export type PaintingVariantTagKeys = PaintingVariantTagKeysMembers;
export interface PaintingVariantTagKeysStatics {
  readonly PLACEABLE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.Art>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit.Art>;
}

/** JVM class io.papermc.paper.registry.keys.tags.StructureTagKeys. */
export interface StructureTagKeysMembers {
}
export type StructureTagKeys = StructureTagKeysMembers;
export interface StructureTagKeysStatics {
  readonly CATS_SPAWN_AS_BLACK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly CATS_SPAWN_IN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly DOLPHIN_LOCATED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly EYE_OF_ENDER_LOCATED: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly MINESHAFT: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly OCEAN_RUIN: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_DESERT_VILLAGE_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_JUNGLE_EXPLORER_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_OCEAN_EXPLORER_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_PLAINS_VILLAGE_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_SAVANNA_VILLAGE_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_SNOWY_VILLAGE_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_SWAMP_EXPLORER_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_TAIGA_VILLAGE_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_TREASURE_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_TRIAL_CHAMBERS_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly ON_WOODLAND_EXPLORER_MAPS: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly RUINED_PORTAL: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly SHIPWRECK: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly VILLAGE: j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<j_org_bukkit_generator_structure.Structure_2>;
}
