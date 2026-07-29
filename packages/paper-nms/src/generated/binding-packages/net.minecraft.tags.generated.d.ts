// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_village_poi from './net.minecraft.world.entity.ai.village.poi.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen_flat from './net.minecraft.world.level.levelgen.flat.generated.js';
import type * as j_net_minecraft_world_level_levelgen_presets from './net.minecraft.world.level.levelgen.presets.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';

/** JVM class net.minecraft.tags.BannerPatternTags. */
export interface BannerPatternTagsMembers {
}
export type BannerPatternTags = BannerPatternTagsMembers;
export interface BannerPatternTagsStatics {
  readonly NO_ITEM_REQUIRED: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_BORDURE_INDENTED: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_CREEPER: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_FIELD_MASONED: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_FLOW: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_FLOWER: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_GLOBE: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_GUSTER: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_MOJANG: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_PIGLIN: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
  readonly PATTERN_ITEM_SKULL: TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>;
}

/** JVM class net.minecraft.tags.BiomeTags. */
export interface BiomeTagsMembers {
}
export type BiomeTags = BiomeTagsMembers;
export interface BiomeTagsStatics {
  readonly ALLOWS_SURFACE_SLIME_SPAWNS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly ALLOWS_TROPICAL_FISH_SPAWNS_AT_ANY_HEIGHT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_ANCIENT_CITY: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_BASTION_REMNANT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_BURIED_TREASURE: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_CLOSER_WATER_FOG: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_DESERT_PYRAMID: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_END_CITY: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_IGLOO: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_JUNGLE_TEMPLE: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_MINESHAFT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_MINESHAFT_MESA: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_NETHER_FORTRESS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_NETHER_FOSSIL: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_OCEAN_MONUMENT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_OCEAN_RUIN_COLD: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_OCEAN_RUIN_WARM: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_PILLAGER_OUTPOST: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_DESERT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_JUNGLE: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_MOUNTAIN: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_NETHER: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_OCEAN: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_STANDARD: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_RUINED_PORTAL_SWAMP: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_SHIPWRECK: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_SHIPWRECK_BEACHED: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_STRONGHOLD: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_SWAMP_HUT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_TRAIL_RUINS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_TRIAL_CHAMBERS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_VILLAGE_DESERT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_VILLAGE_PLAINS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_VILLAGE_SAVANNA: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_VILLAGE_SNOWY: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_VILLAGE_TAIGA: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly HAS_WOODLAND_MANSION: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly INCREASED_FIRE_BURNOUT: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_BADLANDS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_BEACH: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_DEEP_OCEAN: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_END: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_FOREST: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_HILL: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_JUNGLE: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_MOUNTAIN: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_NETHER: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_OCEAN: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_OVERWORLD: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_RIVER: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_SAVANNA: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly IS_TAIGA: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly MINESHAFT_BLOCKING: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly MORE_FREQUENT_DROWNED_SPAWNS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly PLAYS_UNDERWATER_MUSIC: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly POLAR_BEARS_SPAWN_ON_ALTERNATE_BLOCKS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly PRODUCES_CORALS_FROM_BONEMEAL: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly REDUCED_WATER_AMBIENT_SPAWNS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly REQUIRED_OCEAN_MONUMENT_SURROUNDING: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SNOW_GOLEM_MELTS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_COLD_VARIANT_FARM_ANIMALS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_COLD_VARIANT_FROGS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_GOLD_RABBITS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_SNOW_FOXES: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_WARM_VARIANT_FARM_ANIMALS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_WARM_VARIANT_FROGS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly SPAWNS_WHITE_RABBITS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly STRONGHOLD_BIASED_TO: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly WATER_ON_MAP_OUTLINES: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly WITHOUT_PATROL_SPAWNS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly WITHOUT_WANDERING_TRADER_SPAWNS: TagKey<j_net_minecraft_world_level_biome.Biome>;
  readonly WITHOUT_ZOMBIE_SIEGES: TagKey<j_net_minecraft_world_level_biome.Biome>;
}

/** JVM class net.minecraft.tags.BlockTags. */
export interface BlockTagsMembers {
}
export type BlockTags = BlockTagsMembers;
export interface BlockTagsStatics {
  readonly ACACIA_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly AIR: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ALL_HANGING_SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ALL_SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ANCIENT_CITY_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ANIMALS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ANVIL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ARMADILLO_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly AXOLOTLS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly AZALEA_GROWS_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly AZALEA_ROOT_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BADLANDS_TERRACOTTA: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BAMBOO_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BAMBOO_PLANTABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BANNERS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BASE_STONE_NETHER: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BASE_STONE_OVERWORLD: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BATS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BEACON_BASE_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BEDS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BEEHIVES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BEE_ATTRACTIVE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BEE_GROWABLES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BIG_DRIPLEAF_PLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BIRCH_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BLOCKS_WIND_CHARGE_EXPLOSIONS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly BUTTONS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CAMELS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CAMEL_SAND_STEP_SOUND_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CAMPFIRES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CANDLES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CANDLE_CAKES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CAULDRONS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CAVE_VINES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CEILING_HANGING_SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CHERRY_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CLIMBABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly COAL_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly COMBINATION_STEP_SOUND_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly COMPLETES_FIND_TREE_TUTORIAL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CONCRETE_POWDER: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CONVERTABLE_TO_MUD: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly COPPER_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CORALS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CORAL_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CORAL_PLANTS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CRIMSON_STEMS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CROPS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly CRYSTAL_SOUND_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DAMPENS_VIBRATIONS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DARK_OAK_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DEEPSLATE_ORE_REPLACEABLES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DIAMOND_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DIRT: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DOES_NOT_BLOCK_HOPPERS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DOORS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DRAGON_IMMUNE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DRAGON_TRANSPARENT: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DRIPSTONE_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly DRY_VEGETATION_MAY_PLACE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly EDIBLE_FOR_SHEEP: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly EMERALD_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ENCHANTMENT_POWER_PROVIDER: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ENCHANTMENT_POWER_TRANSMITTER: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ENDERMAN_HOLDABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FALL_DAMAGE_RESETTING: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FEATURES_CANNOT_REPLACE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FENCES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FENCE_GATES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FIRE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FLOWERS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FLOWER_POTS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FOXES_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FROGS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly FROG_PREFER_JUMP_TO: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly GEODE_INVALID_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly GOATS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly GOLD_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly GUARDED_BY_PIGLINS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly HAPPY_GHAST_AVOIDS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly HOGLIN_REPELLENTS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly ICE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly IMPERMEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INCORRECT_FOR_DIAMOND_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INCORRECT_FOR_GOLD_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INCORRECT_FOR_IRON_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INCORRECT_FOR_NETHERITE_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INCORRECT_FOR_STONE_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INCORRECT_FOR_WOODEN_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INFINIBURN_END: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INFINIBURN_NETHER: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INFINIBURN_OVERWORLD: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INSIDE_STEP_SOUND_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly INVALID_SPAWN_INSIDE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly IRON_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly JUNGLE_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly LAPIS_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly LAVA_POOL_STONE_CANNOT_REPLACE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly LEAVES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly LOGS_THAT_BURN: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly LUSH_GROUND_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MAINTAINS_FARMLAND: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MANGROVE_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MANGROVE_LOGS_CAN_GROW_THROUGH: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MANGROVE_ROOTS_CAN_GROW_THROUGH: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MINEABLE_WITH_AXE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MINEABLE_WITH_HOE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MINEABLE_WITH_PICKAXE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MINEABLE_WITH_SHOVEL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MOB_INTERACTABLE_DOORS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MOOSHROOMS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MOSS_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly MUSHROOM_GROW_BLOCK: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly NEEDS_DIAMOND_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly NEEDS_IRON_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly NEEDS_STONE_TOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly NETHER_CARVER_REPLACEABLES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly NYLIUM: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly OAK_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly OCCLUDES_VIBRATION_SIGNALS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly OVERWORLD_CARVER_REPLACEABLES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly OVERWORLD_NATURAL_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PALE_OAK_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PARROTS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PIGLIN_REPELLENTS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PLANKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly POLAR_BEARS_SPAWNABLE_ON_ALTERNATE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PORTALS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PRESSURE_PLATES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly PREVENT_MOB_SPAWNING_INSIDE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly RABBITS_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly RAILS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly REDSTONE_ORES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly REPLACEABLE_BY_MUSHROOMS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly REPLACEABLE_BY_TREES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SAND: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SAPLINGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SCULK_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SCULK_REPLACEABLE_WORLD_GEN: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SHULKER_BOXES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SLABS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SMALL_DRIPLEAF_PLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SMALL_FLOWERS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SMELTS_TO_GLASS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SNAPS_GOAT_HORN: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SNIFFER_DIGGABLE_BLOCK: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SNIFFER_EGG_HATCH_BOOST: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SNOW: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SNOW_LAYER_CANNOT_SURVIVE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SNOW_LAYER_CAN_SURVIVE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SOUL_FIRE_BASE_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SOUL_SPEED_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SPRUCE_LOGS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STAIRS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STANDING_SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STONE_BRICKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STONE_BUTTONS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STONE_ORE_REPLACEABLES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STONE_PRESSURE_PLATES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly STRIDER_WARM_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SWORD_EFFICIENT: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly SWORD_INSTANTLY_MINES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly TERRACOTTA: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly TRAIL_RUINS_REPLACEABLE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly TRAPDOORS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly TRIGGERS_AMBIENT_DESERT_DRY_VEGETATION_BLOCK_SOUNDS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly TRIGGERS_AMBIENT_DESERT_SAND_BLOCK_SOUNDS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly TRIGGERS_AMBIENT_DRIED_GHAST_BLOCK_SOUNDS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly UNDERWATER_BONEMEALS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly UNSTABLE_BOTTOM_CENTER: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly VALID_SPAWN: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly VIBRATION_RESONATORS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WALLS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WALL_CORALS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WALL_HANGING_SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WALL_POST_OVERRIDE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WALL_SIGNS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WARPED_STEMS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WART_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WITHER_IMMUNE: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WITHER_SUMMON_BASE_BLOCKS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOLVES_SPAWNABLE_ON: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_BUTTONS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_DOORS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_FENCES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_PRESSURE_PLATES: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_SLABS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_STAIRS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOODEN_TRAPDOORS: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOOL: TagKey<j_net_minecraft_world_level_block.Block>;
  readonly WOOL_CARPETS: TagKey<j_net_minecraft_world_level_block.Block>;
}

/** JVM interface net.minecraft.tags.DamageTypeTags. */
export interface DamageTypeTagsMembers {
}
export type DamageTypeTags = DamageTypeTagsMembers;
export interface DamageTypeTagsStatics {
  readonly ALWAYS_HURTS_ENDER_DRAGONS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly ALWAYS_KILLS_ARMOR_STANDS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly ALWAYS_MOST_SIGNIFICANT_FALL: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly ALWAYS_TRIGGERS_SILVERFISH: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly AVOIDS_GUARDIAN_THORNS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BURNS_ARMOR_STANDS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BURN_FROM_STEPPING: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_ARMOR: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_COOLDOWN: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_EFFECTS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_ENCHANTMENTS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_INVULNERABILITY: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_RESISTANCE: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_SHIELD: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly BYPASSES_WOLF_ARMOR: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly CAN_BREAK_ARMOR_STAND: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly DAMAGES_HELMET: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IGNITES_ARMOR_STANDS: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_DROWNING: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_EXPLOSION: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_FALL: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_FIRE: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_FREEZING: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_LIGHTNING: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_MACE_SMASH: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_PLAYER_ATTACK: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly IS_PROJECTILE: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly NO_ANGER: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly NO_IMPACT: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly NO_KNOCKBACK: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly PANIC_CAUSES: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly PANIC_ENVIRONMENTAL_CAUSES: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly WITCH_RESISTANT_TO: TagKey<j_net_minecraft_world_damagesource.DamageType>;
  readonly WITHER_IMMUNE_TO: TagKey<j_net_minecraft_world_damagesource.DamageType>;
}

/** JVM class net.minecraft.tags.DialogTags. */
export interface DialogTagsMembers {
}
export type DialogTags = DialogTagsMembers;
export interface DialogTagsStatics {
  readonly PAUSE_SCREEN_ADDITIONS: TagKey<j_net_minecraft_server_dialog.Dialog>;
  readonly QUICK_ACTIONS: TagKey<j_net_minecraft_server_dialog.Dialog>;
}

/** JVM interface net.minecraft.tags.EnchantmentTags. */
export interface EnchantmentTagsMembers {
}
export type EnchantmentTags = EnchantmentTagsMembers;
export interface EnchantmentTagsStatics {
  readonly ARMOR_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly BOOTS_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly BOW_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly CROSSBOW_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly CURSE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly DAMAGE_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly DOUBLE_TRADE_PRICE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly IN_ENCHANTING_TABLE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly MINING_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly NON_TREASURE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly ON_MOB_SPAWN_EQUIPMENT: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly ON_RANDOM_LOOT: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly ON_TRADED_EQUIPMENT: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly PREVENTS_BEE_SPAWNS_WHEN_MINING: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly PREVENTS_DECORATED_POT_SHATTERING: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly PREVENTS_ICE_MELTING: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly PREVENTS_INFESTED_SPAWNS: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly RIPTIDE_EXCLUSIVE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly SMELTS_LOOT: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TOOLTIP_ORDER: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADEABLE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_DESERT_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_DESERT_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_JUNGLE_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_JUNGLE_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_PLAINS_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_PLAINS_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_SAVANNA_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_SAVANNA_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_SNOW_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_SNOW_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_SWAMP_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_SWAMP_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_TAIGA_COMMON: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TRADES_TAIGA_SPECIAL: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
  readonly TREASURE: TagKey<j_net_minecraft_world_item_enchantment.Enchantment>;
}

/** JVM interface net.minecraft.tags.EntityTypeTags. */
export interface EntityTypeTagsMembers {
}
export type EntityTypeTags = EntityTypeTagsMembers;
export interface EntityTypeTagsStatics {
  readonly AQUATIC: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly ARROWS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly ARTHROPOD: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly AXOLOTL_ALWAYS_HOSTILES: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly AXOLOTL_HUNT_TARGETS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly BEEHIVE_INHABITORS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly BOAT: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly CAN_BREATHE_UNDER_WATER: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly CAN_EQUIP_HARNESS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly CAN_EQUIP_SADDLE: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly CAN_TURN_IN_BOATS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly CAN_WEAR_HORSE_ARMOR: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly DEFLECTS_PROJECTILES: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly DISMOUNTS_UNDERWATER: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly FALL_DAMAGE_IMMUNE: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly FOLLOWABLE_FRIENDLY_MOBS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly FREEZE_HURTS_EXTRA_TYPES: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly FREEZE_IMMUNE_ENTITY_TYPES: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly FROG_FOOD: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly IGNORES_POISON_AND_REGEN: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly ILLAGER: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly ILLAGER_FRIENDS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly IMMUNE_TO_INFESTED: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly IMMUNE_TO_OOZING: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly IMPACT_PROJECTILES: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly INVERTED_HEALING_AND_HARM: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly NON_CONTROLLING_RIDER: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly NOT_SCARY_FOR_PUFFERFISH: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly NO_ANGER_FROM_WIND_CHARGE: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly POWDER_SNOW_WALKABLE_MOBS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly RAIDERS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly REDIRECTABLE_PROJECTILE: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly SENSITIVE_TO_BANE_OF_ARTHROPODS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly SENSITIVE_TO_IMPALING: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly SENSITIVE_TO_SMITE: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly SKELETONS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly UNDEAD: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly WITHER_FRIENDS: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
  readonly ZOMBIES: TagKey<j_net_minecraft_world_entity.EntityType<object>>;
}

/** JVM class net.minecraft.tags.FlatLevelGeneratorPresetTags. */
export interface FlatLevelGeneratorPresetTagsMembers {
}
export type FlatLevelGeneratorPresetTags = FlatLevelGeneratorPresetTagsMembers;
export interface FlatLevelGeneratorPresetTagsStatics {
  readonly VISIBLE: TagKey<j_net_minecraft_world_level_levelgen_flat.FlatLevelGeneratorPreset>;
}

/** JVM class net.minecraft.tags.FluidTags. */
export interface FluidTagsMembers {
}
export type FluidTags = FluidTagsMembers;
export interface FluidTagsStatics {
  readonly LAVA: TagKey<j_net_minecraft_world_level_material.Fluid>;
  readonly WATER: TagKey<j_net_minecraft_world_level_material.Fluid>;
}

/** JVM class net.minecraft.tags.GameEventTags. */
export interface GameEventTagsMembers {
}
export type GameEventTags = GameEventTagsMembers;
export interface GameEventTagsStatics {
  new(): GameEventTags;
  readonly ALLAY_CAN_LISTEN: TagKey<j_net_minecraft_world_level_gameevent.GameEvent>;
  readonly IGNORE_VIBRATIONS_SNEAKING: TagKey<j_net_minecraft_world_level_gameevent.GameEvent>;
  readonly SHRIEKER_CAN_LISTEN: TagKey<j_net_minecraft_world_level_gameevent.GameEvent>;
  readonly VIBRATIONS: TagKey<j_net_minecraft_world_level_gameevent.GameEvent>;
  readonly WARDEN_CAN_LISTEN: TagKey<j_net_minecraft_world_level_gameevent.GameEvent>;
}

/** JVM interface net.minecraft.tags.InstrumentTags. */
export interface InstrumentTagsMembers {
}
export type InstrumentTags = InstrumentTagsMembers;
export interface InstrumentTagsStatics {
  readonly GOAT_HORNS: TagKey<j_net_minecraft_world_item.Instrument>;
  readonly REGULAR_GOAT_HORNS: TagKey<j_net_minecraft_world_item.Instrument>;
  readonly SCREAMING_GOAT_HORNS: TagKey<j_net_minecraft_world_item.Instrument>;
}

/** JVM class net.minecraft.tags.ItemTags. */
export interface ItemTagsMembers {
}
export type ItemTags = ItemTagsMembers;
export interface ItemTagsStatics {
  readonly ACACIA_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly ANVIL: TagKey<j_net_minecraft_world_item.Item>;
  readonly ARMADILLO_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly ARMOR_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly ARROWS: TagKey<j_net_minecraft_world_item.Item>;
  readonly AXES: TagKey<j_net_minecraft_world_item.Item>;
  readonly AXOLOTL_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly BAMBOO_BLOCKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BANNERS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BEACON_PAYMENT_ITEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BEDS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BEE_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly BIRCH_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BOATS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BOOKSHELF_BOOKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BOOK_CLONING_TARGET: TagKey<j_net_minecraft_world_item.Item>;
  readonly BOW_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly BREAKS_DECORATED_POTS: TagKey<j_net_minecraft_world_item.Item>;
  readonly BREWING_FUEL: TagKey<j_net_minecraft_world_item.Item>;
  readonly BUNDLES: TagKey<j_net_minecraft_world_item.Item>;
  readonly BUTTONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly CAMEL_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly CANDLES: TagKey<j_net_minecraft_world_item.Item>;
  readonly CAT_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly CHERRY_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly CHEST_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly CHEST_ARMOR_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly CHEST_BOATS: TagKey<j_net_minecraft_world_item.Item>;
  readonly CHICKEN_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly CLUSTER_MAX_HARVESTABLES: TagKey<j_net_minecraft_world_item.Item>;
  readonly COALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly COAL_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly COMPASSES: TagKey<j_net_minecraft_world_item.Item>;
  readonly COMPLETES_FIND_TREE_TUTORIAL: TagKey<j_net_minecraft_world_item.Item>;
  readonly COPPER_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly COW_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly CREEPER_DROP_MUSIC_DISCS: TagKey<j_net_minecraft_world_item.Item>;
  readonly CREEPER_IGNITERS: TagKey<j_net_minecraft_world_item.Item>;
  readonly CRIMSON_STEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly CROSSBOW_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly DAMPENS_VIBRATIONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DARK_OAK_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DECORATED_POT_INGREDIENTS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DECORATED_POT_SHERDS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DIAMOND_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly DIAMOND_TOOL_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DIRT: TagKey<j_net_minecraft_world_item.Item>;
  readonly DOORS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DROWNED_PREFERRED_WEAPONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DUPLICATES_ALLAYS: TagKey<j_net_minecraft_world_item.Item>;
  readonly DURABILITY_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly DYEABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly EGGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly EMERALD_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly EQUIPPABLE_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly FENCES: TagKey<j_net_minecraft_world_item.Item>;
  readonly FENCE_GATES: TagKey<j_net_minecraft_world_item.Item>;
  readonly FIRE_ASPECT_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly FISHES: TagKey<j_net_minecraft_world_item.Item>;
  readonly FISHING_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly FLOWERS: TagKey<j_net_minecraft_world_item.Item>;
  readonly FOOT_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly FOOT_ARMOR_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly FOX_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly FREEZE_IMMUNE_WEARABLES: TagKey<j_net_minecraft_world_item.Item>;
  readonly FROG_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly FURNACE_MINECART_FUEL: TagKey<j_net_minecraft_world_item.Item>;
  readonly GAZE_DISGUISE_EQUIPMENT: TagKey<j_net_minecraft_world_item.Item>;
  readonly GOAT_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly GOLD_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly GOLD_TOOL_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly HANGING_SIGNS: TagKey<j_net_minecraft_world_item.Item>;
  readonly HAPPY_GHAST_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly HAPPY_GHAST_TEMPT_ITEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly HARNESSES: TagKey<j_net_minecraft_world_item.Item>;
  readonly HEAD_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly HEAD_ARMOR_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly HOES: TagKey<j_net_minecraft_world_item.Item>;
  readonly HOGLIN_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly HORSE_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly HORSE_TEMPT_ITEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly IGNORED_BY_PIGLIN_BABIES: TagKey<j_net_minecraft_world_item.Item>;
  readonly IRON_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly IRON_TOOL_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly JUNGLE_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly LAPIS_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly LEAVES: TagKey<j_net_minecraft_world_item.Item>;
  readonly LECTERN_BOOKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly LEG_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly LEG_ARMOR_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly LLAMA_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly LLAMA_TEMPT_ITEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly LOGS_THAT_BURN: TagKey<j_net_minecraft_world_item.Item>;
  readonly MACE_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly MANGROVE_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly MAP_INVISIBILITY_EQUIPMENT: TagKey<j_net_minecraft_world_item.Item>;
  readonly MEAT: TagKey<j_net_minecraft_world_item.Item>;
  readonly MINING_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly MINING_LOOT_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly NETHERITE_TOOL_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly NON_FLAMMABLE_WOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly NOTE_BLOCK_TOP_INSTRUMENTS: TagKey<j_net_minecraft_world_item.Item>;
  readonly OAK_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly OCELOT_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly PALE_OAK_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly PANDA_EATS_FROM_GROUND: TagKey<j_net_minecraft_world_item.Item>;
  readonly PANDA_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly PARROT_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly PARROT_POISONOUS_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly PICKAXES: TagKey<j_net_minecraft_world_item.Item>;
  readonly PIGLIN_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly PIGLIN_LOVED: TagKey<j_net_minecraft_world_item.Item>;
  readonly PIGLIN_PREFERRED_WEAPONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly PIGLIN_REPELLENTS: TagKey<j_net_minecraft_world_item.Item>;
  readonly PIGLIN_SAFE_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly PIG_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly PILLAGER_PREFERRED_WEAPONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly PLANKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly RABBIT_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly RAILS: TagKey<j_net_minecraft_world_item.Item>;
  readonly REDSTONE_ORES: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_CHAIN_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_DIAMOND_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_GOLD_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_IRON_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_LEATHER_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_NETHERITE_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_TURTLE_HELMET: TagKey<j_net_minecraft_world_item.Item>;
  readonly REPAIRS_WOLF_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly SAND: TagKey<j_net_minecraft_world_item.Item>;
  readonly SAPLINGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SHARP_WEAPON_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly SHEEP_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly SHOVELS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SHULKER_BOXES: TagKey<j_net_minecraft_world_item.Item>;
  readonly SIGNS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SKELETON_PREFERRED_WEAPONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SKULLS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SLABS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SMALL_FLOWERS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SMELTS_TO_GLASS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SNIFFER_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly SOUL_FIRE_BASE_BLOCKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SPRUCE_LOGS: TagKey<j_net_minecraft_world_item.Item>;
  readonly STAIRS: TagKey<j_net_minecraft_world_item.Item>;
  readonly STONE_BRICKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly STONE_BUTTONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly STONE_CRAFTING_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly STONE_TOOL_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly STRIDER_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly STRIDER_TEMPT_ITEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SWORDS: TagKey<j_net_minecraft_world_item.Item>;
  readonly SWORD_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly TERRACOTTA: TagKey<j_net_minecraft_world_item.Item>;
  readonly TRAPDOORS: TagKey<j_net_minecraft_world_item.Item>;
  readonly TRIDENT_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly TRIMMABLE_ARMOR: TagKey<j_net_minecraft_world_item.Item>;
  readonly TRIM_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly TURTLE_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly VANISHING_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly VILLAGER_PICKS_UP: TagKey<j_net_minecraft_world_item.Item>;
  readonly VILLAGER_PLANTABLE_SEEDS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WALLS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WARPED_STEMS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WART_BLOCKS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WEAPON_ENCHANTABLE: TagKey<j_net_minecraft_world_item.Item>;
  readonly WITHER_SKELETON_DISLIKED_WEAPONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOLF_FOOD: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_BUTTONS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_DOORS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_FENCES: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_PRESSURE_PLATES: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_SLABS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_STAIRS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_TOOL_MATERIALS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOODEN_TRAPDOORS: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOOL: TagKey<j_net_minecraft_world_item.Item>;
  readonly WOOL_CARPETS: TagKey<j_net_minecraft_world_item.Item>;
}

/** JVM class net.minecraft.tags.PaintingVariantTags. */
export interface PaintingVariantTagsMembers {
}
export type PaintingVariantTags = PaintingVariantTagsMembers;
export interface PaintingVariantTagsStatics {
  readonly PLACEABLE: TagKey<j_net_minecraft_world_entity_decoration.PaintingVariant>;
}

/** JVM class net.minecraft.tags.PoiTypeTags. */
export interface PoiTypeTagsMembers {
}
export type PoiTypeTags = PoiTypeTagsMembers;
export interface PoiTypeTagsStatics {
  readonly ACQUIRABLE_JOB_SITE: TagKey<j_net_minecraft_world_entity_ai_village_poi.PoiType>;
  readonly BEE_HOME: TagKey<j_net_minecraft_world_entity_ai_village_poi.PoiType>;
  readonly VILLAGE: TagKey<j_net_minecraft_world_entity_ai_village_poi.PoiType>;
}

/** JVM interface net.minecraft.tags.StructureTags. */
export interface StructureTagsMembers {
}
export type StructureTags = StructureTagsMembers;
export interface StructureTagsStatics {
  readonly CATS_SPAWN_AS_BLACK: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly CATS_SPAWN_IN: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly DOLPHIN_LOCATED: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly EYE_OF_ENDER_LOCATED: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly MINESHAFT: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly OCEAN_RUIN: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_DESERT_VILLAGE_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_JUNGLE_EXPLORER_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_OCEAN_EXPLORER_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_PLAINS_VILLAGE_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_SAVANNA_VILLAGE_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_SNOWY_VILLAGE_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_SWAMP_EXPLORER_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_TAIGA_VILLAGE_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_TREASURE_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_TRIAL_CHAMBERS_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly ON_WOODLAND_EXPLORER_MAPS: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly RUINED_PORTAL: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly SHIPWRECK: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
  readonly VILLAGE: TagKey<j_net_minecraft_world_level_levelgen_structure.Structure>;
}

/** JVM class net.minecraft.tags.TagBuilder. */
export interface TagBuilderMembers {
  add(arg0: TagEntry): TagBuilder;
  addElement(arg0: j_net_minecraft_resources.ResourceLocation): TagBuilder;
  addOptionalElement(arg0: j_net_minecraft_resources.ResourceLocation): TagBuilder;
  addOptionalTag(arg0: j_net_minecraft_resources.ResourceLocation): TagBuilder;
  addTag(arg0: j_net_minecraft_resources.ResourceLocation): TagBuilder;
  build(): JavaList<TagEntry>;
}
export type TagBuilder = TagBuilderMembers;
export interface TagBuilderStatics {
  new(): TagBuilder;
  create(): TagBuilder;
}

/** JVM class net.minecraft.tags.TagEntry. */
export interface TagEntryMembers {
  build<T>(arg0: TagEntry_Lookup<T>, arg1: JavaConsumer<T>): boolean;
  readonly id: j_net_minecraft_resources.ResourceLocation;
  readonly required: boolean;
  readonly tag: boolean;
  toString(): string;
  verifyIfPresent(arg0: JavaPredicate<j_net_minecraft_resources.ResourceLocation>, arg1: JavaPredicate<j_net_minecraft_resources.ResourceLocation>): boolean;
  visitOptionalDependencies(arg0: JavaConsumer<j_net_minecraft_resources.ResourceLocation>): void;
  visitRequiredDependencies(arg0: JavaConsumer<j_net_minecraft_resources.ResourceLocation>): void;
}
export type TagEntry = TagEntryMembers;
export interface TagEntryStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TagEntry]>;
  element(arg0: j_net_minecraft_resources.ResourceLocation): TagEntry;
  optionalElement(arg0: j_net_minecraft_resources.ResourceLocation): TagEntry;
  optionalTag(arg0: j_net_minecraft_resources.ResourceLocation): TagEntry;
  tag(arg0: j_net_minecraft_resources.ResourceLocation): TagEntry;
}

/** JVM interface net.minecraft.tags.TagEntry$Lookup. */
export interface TagEntry_LookupMembers<T = unknown> {
  element(arg0: j_net_minecraft_resources.ResourceLocation, arg1: boolean): T | null;
  tag(arg0: j_net_minecraft_resources.ResourceLocation): JavaCollection<T> | null;
}
export type TagEntry_Lookup<T = unknown> = TagEntry_LookupMembers<T>;
export interface TagEntry_LookupStatics {
}

/** JVM record net.minecraft.tags.TagFile. */
export interface TagFileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  entries(): JavaList<TagEntry>;
  equals(arg0: object): boolean;
  hashCode(): number;
  replace(): boolean;
  toString(): string;
}
export type TagFile = TagFileMembers & JavaOpaque<"java.lang.Record">;
export interface TagFileStatics {
  new(arg0: JavaList<TagEntry>, arg1: boolean): TagFile;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TagFile]>;
}

/** JVM record net.minecraft.tags.TagKey. */
export interface TagKeyMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  cast<E>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<TagKey<E>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isFor(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>): boolean;
  location(): j_net_minecraft_resources.ResourceLocation;
  registry(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>;
  toString(): string;
}
export type TagKey<T = unknown> = TagKeyMembers<T> & JavaOpaque<"java.lang.Record">;
export interface TagKeyStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: j_net_minecraft_resources.ResourceLocation): TagKey<T>;
  codec<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOpaque<"com.mojang.serialization.Codec", [TagKey<T>]>;
  create<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: j_net_minecraft_resources.ResourceLocation): TagKey<T>;
  hashedCodec<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): JavaOpaque<"com.mojang.serialization.Codec", [TagKey<T>]>;
  streamCodec<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, TagKey<T>>;
}

/** JVM class net.minecraft.tags.TagLoader. */
export interface TagLoaderMembers<T = unknown> {
  build(arg0: JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<TagLoader_EntryWithSource>>, arg1: JavaOpaque<"io.papermc.paper.tag.TagEventConfig", [T, object]> | null): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<T>>;
  load(arg0: j_net_minecraft_server_packs_resources.ResourceManager): JavaMap<j_net_minecraft_resources.ResourceLocation, JavaList<TagLoader_EntryWithSource>>;
}
export type TagLoader<T = unknown> = TagLoaderMembers<T>;
export interface TagLoaderStatics {
  new<T>(arg0: TagLoader_ElementLookup<T>, arg1: string): TagLoader<T>;
  buildUpdatedLookups(arg0: j_net_minecraft_core.RegistryAccess_Frozen, arg1: JavaList<j_net_minecraft_core.Registry_PendingTags<object>>): JavaList<j_net_minecraft_core.HolderLookup_RegistryLookup<object>>;
  loadTagsForExistingRegistries(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_core.RegistryAccess): JavaList<j_net_minecraft_core.Registry_PendingTags<object>>;
  loadTagsForExistingRegistries(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_core.RegistryAccess, arg2: JavaOpaque<"io.papermc.paper.plugin.lifecycle.event.registrar.ReloadableRegistrarEvent$Cause">): JavaList<j_net_minecraft_core.Registry_PendingTags<object>>;
  loadTagsForRegistry<T>(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_core.WritableRegistry<T>): void;
  loadTagsForRegistry<T>(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_core.WritableRegistry<T>, arg2: JavaOpaque<"io.papermc.paper.plugin.lifecycle.event.registrar.ReloadableRegistrarEvent$Cause">): void;
  loadTagsFromNetwork<T>(arg0: TagNetworkSerialization_NetworkPayload, arg1: j_net_minecraft_core.WritableRegistry<T>): void;
}

/** JVM interface net.minecraft.tags.TagLoader$ElementLookup. */
export interface TagLoader_ElementLookupMembers<T = unknown> {
  get(arg0: j_net_minecraft_resources.ResourceLocation, arg1: boolean): JavaOptional<T>;
}
export type TagLoader_ElementLookup<T = unknown> = TagLoader_ElementLookupMembers<T>;
export interface TagLoader_ElementLookupStatics {
  fromFrozenRegistry<T>(arg0: j_net_minecraft_core.Registry<T>): TagLoader_ElementLookup<j_net_minecraft_core.Holder<T>>;
  fromWritableRegistry<T>(arg0: j_net_minecraft_core.WritableRegistry<T>): TagLoader_ElementLookup<j_net_minecraft_core.Holder<T>>;
}

/** JVM record net.minecraft.tags.TagLoader$EntryWithSource. */
export interface TagLoader_EntryWithSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  entry(): TagEntry;
  equals(arg0: object): boolean;
  hashCode(): number;
  source(): string;
  toString(): string;
}
export type TagLoader_EntryWithSource = TagLoader_EntryWithSourceMembers & JavaOpaque<"java.lang.Record">;
export interface TagLoader_EntryWithSourceStatics {
  new(arg0: TagEntry, arg1: string): TagLoader_EntryWithSource;
}

/** JVM record net.minecraft.tags.TagLoader$LoadResult. */
export interface TagLoader_LoadResultMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>;
  tags(): JavaMap<TagKey<T>, JavaList<j_net_minecraft_core.Holder<T>>>;
  toString(): string;
}
export type TagLoader_LoadResult<T = unknown> = TagLoader_LoadResultMembers<T> & JavaOpaque<"java.lang.Record">;
export interface TagLoader_LoadResultStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: JavaMap<TagKey<T>, JavaList<j_net_minecraft_core.Holder<T>>>): TagLoader_LoadResult<T>;
}

/** JVM class net.minecraft.tags.TagNetworkSerialization. */
export interface TagNetworkSerializationMembers {
}
export type TagNetworkSerialization = TagNetworkSerializationMembers;
export interface TagNetworkSerializationStatics {
  new(): TagNetworkSerialization;
  serializeTagsToNetwork(arg0: j_net_minecraft_core.LayeredRegistryAccess<j_net_minecraft_server.RegistryLayer>): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, TagNetworkSerialization_NetworkPayload>;
}

/** JVM class net.minecraft.tags.TagNetworkSerialization$NetworkPayload. */
export interface TagNetworkSerialization_NetworkPayloadMembers {
  isEmpty(): boolean;
  resolve<T>(arg0: j_net_minecraft_core.Registry<T>): TagLoader_LoadResult<T>;
  size(): number;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type TagNetworkSerialization_NetworkPayload = TagNetworkSerialization_NetworkPayloadMembers;
export interface TagNetworkSerialization_NetworkPayloadStatics {
  readonly EMPTY: TagNetworkSerialization_NetworkPayload;
  read(arg0: j_net_minecraft_network.FriendlyByteBuf): TagNetworkSerialization_NetworkPayload;
}

/** JVM class net.minecraft.tags.WorldPresetTags. */
export interface WorldPresetTagsMembers {
}
export type WorldPresetTags = WorldPresetTagsMembers;
export interface WorldPresetTagsStatics {
  readonly EXTENDED: TagKey<j_net_minecraft_world_level_levelgen_presets.WorldPreset>;
  readonly NORMAL: TagKey<j_net_minecraft_world_level_levelgen_presets.WorldPreset>;
}
