// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface org.bukkit.loot.Lootable. */
export interface LootableMembers {
  clearLootTable(): void;
  getLootTable(): LootTable | null;
  getSeed(): bigint;
  hasLootTable(): boolean;
  setLootTable(arg0: LootTable | null): void | null;
  setLootTable(arg0: LootTable | null, arg1: bigint): void | null;
  setSeed(arg0: bigint): void;
}
export type Lootable = LootableMembers;
export interface LootableStatics {
}

/** JVM class org.bukkit.loot.LootContext. */
export interface LootContextMembers {
  getKiller(): j_org_bukkit_entity.HumanEntity | null;
  getLocation(): j_org_bukkit.Location;
  getLootedEntity(): j_org_bukkit_entity.Entity | null;
  getLootingModifier(): number;
  getLuck(): number;
}
export type LootContext = LootContextMembers;
export interface LootContextStatics {
  readonly DEFAULT_LOOT_MODIFIER: -1;
}

/** JVM class org.bukkit.loot.LootContext$Builder. */
export interface LootContext_BuilderMembers {
  build(): LootContext;
  killer(arg0: j_org_bukkit_entity.HumanEntity | null): LootContext_Builder | null;
  lootedEntity(arg0: j_org_bukkit_entity.Entity | null): LootContext_Builder | null;
  lootingModifier(arg0: number): LootContext_Builder;
  luck(arg0: number): LootContext_Builder;
}
export type LootContext_Builder = LootContext_BuilderMembers;
export interface LootContext_BuilderStatics {
  new(arg0: j_org_bukkit.Location): LootContext_Builder;
}

/** JVM interface org.bukkit.loot.LootTable. */
export interface LootTableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  fillInventory(arg0: j_org_bukkit_inventory.Inventory, arg1: JavaOpaque<"java.util.Random"> | null, arg2: LootContext): void | null;
  populateLoot(arg0: JavaOpaque<"java.util.Random"> | null, arg1: LootContext): JavaCollection<j_org_bukkit_inventory.ItemStack> | null;
}
export type LootTable = LootTableMembers & j_org_bukkit.Keyed;
export interface LootTableStatics {
}

/** Live JVM enum org.bukkit.loot.LootTables; constants are host handles, not strings. */
export type LootTables = JavaEnum<"org.bukkit.loot.LootTables", "ABANDONED_MINESHAFT" | "ANCIENT_CITY" | "ANCIENT_CITY_ICE_BOX" | "ARMADILLO_SHED" | "ARMORER_GIFT" | "ARMOR_STAND" | "AXOLOTL" | "BABY_VILLAGER_GIFT" | "BASTION_BRIDGE" | "BASTION_HOGLIN_STABLE" | "BASTION_OTHER" | "BASTION_TREASURE" | "BAT" | "BEE" | "BLAZE" | "BURIED_TREASURE" | "BUTCHER_GIFT" | "CARTOGRAPHER_GIFT" | "CAT" | "CAT_MORNING_GIFT" | "CAVE_SPIDER" | "CHICKEN" | "CHICKEN_LAY" | "CLERIC_GIFT" | "COD" | "COW" | "CREEPER" | "DESERT_PYRAMID" | "DESERT_PYRAMID_ARCHAEOLOGY" | "DESERT_WELL_ARCHAEOLOGY" | "DOLPHIN" | "DONKEY" | "DROWNED" | "ELDER_GUARDIAN" | "ENDERMAN" | "ENDERMITE" | "ENDER_DRAGON" | "END_CITY_TREASURE" | "EQUIPMENT_TRIAL_CHAMBER" | "EQUIPMENT_TRIAL_CHAMBER_MELEE" | "EQUIPMENT_TRIAL_CHAMBER_RANGED" | "EVOKER" | "FARMER_GIFT" | "FISHERMAN_GIFT" | "FISHING" | "FISHING_FISH" | "FISHING_JUNK" | "FISHING_TREASURE" | "FLETCHER_GIFT" | "FOX" | "GHAST" | "GIANT" | "GLOW_SQUID" | "GOAT" | "GUARDIAN" | "HOGLIN" | "HORSE" | "HUSK" | "IGLOO_CHEST" | "ILLUSIONER" | "IRON_GOLEM" | "JUNGLE_TEMPLE" | "JUNGLE_TEMPLE_DISPENSER" | "LEATHERWORKER_GIFT" | "LIBRARIAN_GIFT" | "LLAMA" | "MAGMA_CUBE" | "MASON_GIFT" | "MOOSHROOM" | "MULE" | "NETHER_BRIDGE" | "OCEAN_RUIN_COLD_ARCHAEOLOGY" | "OCEAN_RUIN_WARM_ARCHAEOLOGY" | "OCELOT" | "OMINOUS_TRIAL_CHAMBER_CONSUMABLES" | "OMINOUS_TRIAL_CHAMBER_KEY" | "PANDA" | "PANDA_SNEEZE" | "PARROT" | "PHANTOM" | "PIGLIN" | "PIGLIN_BARTERING" | "PIGLIN_BRUTE" | "PIG" | "PILLAGER" | "PILLAGER_OUTPOST" | "PLAYER" | "POLAR_BEAR" | "PUFFERFISH" | "RABBIT" | "RAVAGER" | "RUINED_PORTAL" | "SALMON" | "SHEARING_BOGGED" | "SHEARING_MOOSHROOM" | "SHEARING_MOOSHROOM_BROWN" | "SHEARING_MOOSHROOM_RED" | "SHEARING_SHEEP" | "SHEARING_SHEEP_BLACK" | "SHEARING_SHEEP_BLUE" | "SHEARING_SHEEP_BROWN" | "SHEARING_SHEEP_CYAN" | "SHEARING_SHEEP_GRAY" | "SHEARING_SHEEP_GREEN" | "SHEARING_SHEEP_LIGHT_BLUE" | "SHEARING_SHEEP_LIGHT_GRAY" | "SHEARING_SHEEP_LIME" | "SHEARING_SHEEP_MAGENTA" | "SHEARING_SHEEP_ORANGE" | "SHEARING_SHEEP_PINK" | "SHEARING_SHEEP_PURPLE" | "SHEARING_SHEEP_RED" | "SHEARING_SHEEP_WHITE" | "SHEARING_SHEEP_YELLOW" | "SHEARING_SNOW_GOLEM" | "SHEEP" | "SHEEP_BLACK" | "SHEEP_BLUE" | "SHEEP_BROWN" | "SHEEP_CYAN" | "SHEEP_GRAY" | "SHEEP_GREEN" | "SHEEP_LIGHT_BLUE" | "SHEEP_LIGHT_GRAY" | "SHEEP_LIME" | "SHEEP_MAGENTA" | "SHEEP_ORANGE" | "SHEEP_PINK" | "SHEEP_PURPLE" | "SHEEP_RED" | "SHEEP_WHITE" | "SHEEP_YELLOW" | "SHEPHERD_GIFT" | "SHIPWRECK_MAP" | "SHIPWRECK_SUPPLY" | "SHIPWRECK_TREASURE" | "SHULKER" | "SILVERFISH" | "SIMPLE_DUNGEON" | "SKELETON" | "SKELETON_HORSE" | "SLIME" | "SNIFFER_DIGGING" | "SNOW_GOLEM" | "SPAWN_BONUS_CHEST" | "SPIDER" | "SQUID" | "STRAY" | "STRIDER" | "STRONGHOLD_CORRIDOR" | "STRONGHOLD_CROSSING" | "STRONGHOLD_LIBRARY" | "TOOLSMITH_GIFT" | "TRADER_LLAMA" | "TRAIL_RUINS_ARCHAEOLOGY_COMMON" | "TRAIL_RUINS_ARCHAEOLOGY_RARE" | "TRIAL_CHAMBERS_CHAMBER_DISPENSER" | "TRIAL_CHAMBERS_CORRIDOR" | "TRIAL_CHAMBERS_CORRIDOR_DISPENSER" | "TRIAL_CHAMBERS_CORRIDOR_POT" | "TRIAL_CHAMBERS_ENTRANCE" | "TRIAL_CHAMBERS_INTERSECTION" | "TRIAL_CHAMBERS_INTERSECTION_BARREL" | "TRIAL_CHAMBERS_REWARD" | "TRIAL_CHAMBERS_REWARD_COMMON" | "TRIAL_CHAMBERS_REWARD_OMINOUS" | "TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON" | "TRIAL_CHAMBERS_REWARD_OMINOUS_RARE" | "TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE" | "TRIAL_CHAMBERS_REWARD_RARE" | "TRIAL_CHAMBERS_REWARD_UNIQUE" | "TRIAL_CHAMBERS_SUPPLY" | "TRIAL_CHAMBERS_WATER_DISPENSER" | "TRIAL_CHAMBER_CONSUMABLES" | "TRIAL_CHAMBER_ITEMS_TO_DROP_WHEN_OMINOUS" | "TRIAL_CHAMBER_KEY" | "TROPICAL_FISH" | "TURTLE" | "UNDERWATER_RUIN_BIG" | "UNDERWATER_RUIN_SMALL" | "UNEMPLOYED_GIFT" | "VEX" | "VILLAGER" | "VILLAGE_ARMORER" | "VILLAGE_BUTCHER" | "VILLAGE_CARTOGRAPHER" | "VILLAGE_DESERT_HOUSE" | "VILLAGE_FISHER" | "VILLAGE_FLETCHER" | "VILLAGE_MASON" | "VILLAGE_PLAINS_HOUSE" | "VILLAGE_SAVANNA_HOUSE" | "VILLAGE_SHEPHERD" | "VILLAGE_SNOWY_HOUSE" | "VILLAGE_TAIGA_HOUSE" | "VILLAGE_TANNERY" | "VILLAGE_TEMPLE" | "VILLAGE_TOOLSMITH" | "VILLAGE_WEAPONSMITH" | "VINDICATOR" | "WANDERING_TRADER" | "WEAPONSMITH_GIFT" | "WITCH" | "WITHER" | "WITHER_SKELETON" | "WOLF" | "WOODLAND_MANSION" | "ZOGLIN" | "ZOMBIE" | "ZOMBIE_HORSE" | "ZOMBIE_VILLAGER" | "ZOMBIFIED_PIGLIN"> & LootTablesMembers;
export interface LootTablesMembers {
  getKey(): j_org_bukkit.NamespacedKey;
  getLootTable(): LootTable;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export interface LootTablesStatics {
  readonly ABANDONED_MINESHAFT: LootTables;
  readonly ANCIENT_CITY: LootTables;
  readonly ANCIENT_CITY_ICE_BOX: LootTables;
  readonly ARMADILLO_SHED: LootTables;
  readonly ARMORER_GIFT: LootTables;
  readonly ARMOR_STAND: LootTables;
  readonly AXOLOTL: LootTables;
  readonly BABY_VILLAGER_GIFT: LootTables;
  readonly BASTION_BRIDGE: LootTables;
  readonly BASTION_HOGLIN_STABLE: LootTables;
  readonly BASTION_OTHER: LootTables;
  readonly BASTION_TREASURE: LootTables;
  readonly BAT: LootTables;
  readonly BEE: LootTables;
  readonly BLAZE: LootTables;
  readonly BURIED_TREASURE: LootTables;
  readonly BUTCHER_GIFT: LootTables;
  readonly CARTOGRAPHER_GIFT: LootTables;
  readonly CAT: LootTables;
  readonly CAT_MORNING_GIFT: LootTables;
  readonly CAVE_SPIDER: LootTables;
  readonly CHICKEN: LootTables;
  readonly CHICKEN_LAY: LootTables;
  readonly CLERIC_GIFT: LootTables;
  readonly COD: LootTables;
  readonly COW: LootTables;
  readonly CREEPER: LootTables;
  readonly DESERT_PYRAMID: LootTables;
  readonly DESERT_PYRAMID_ARCHAEOLOGY: LootTables;
  readonly DESERT_WELL_ARCHAEOLOGY: LootTables;
  readonly DOLPHIN: LootTables;
  readonly DONKEY: LootTables;
  readonly DROWNED: LootTables;
  readonly ELDER_GUARDIAN: LootTables;
  readonly ENDERMAN: LootTables;
  readonly ENDERMITE: LootTables;
  readonly ENDER_DRAGON: LootTables;
  readonly END_CITY_TREASURE: LootTables;
  readonly EQUIPMENT_TRIAL_CHAMBER: LootTables;
  readonly EQUIPMENT_TRIAL_CHAMBER_MELEE: LootTables;
  readonly EQUIPMENT_TRIAL_CHAMBER_RANGED: LootTables;
  readonly EVOKER: LootTables;
  readonly FARMER_GIFT: LootTables;
  readonly FISHERMAN_GIFT: LootTables;
  readonly FISHING: LootTables;
  readonly FISHING_FISH: LootTables;
  readonly FISHING_JUNK: LootTables;
  readonly FISHING_TREASURE: LootTables;
  readonly FLETCHER_GIFT: LootTables;
  readonly FOX: LootTables;
  readonly GHAST: LootTables;
  readonly GIANT: LootTables;
  readonly GLOW_SQUID: LootTables;
  readonly GOAT: LootTables;
  readonly GUARDIAN: LootTables;
  readonly HOGLIN: LootTables;
  readonly HORSE: LootTables;
  readonly HUSK: LootTables;
  readonly IGLOO_CHEST: LootTables;
  readonly ILLUSIONER: LootTables;
  readonly IRON_GOLEM: LootTables;
  readonly JUNGLE_TEMPLE: LootTables;
  readonly JUNGLE_TEMPLE_DISPENSER: LootTables;
  readonly LEATHERWORKER_GIFT: LootTables;
  readonly LIBRARIAN_GIFT: LootTables;
  readonly LLAMA: LootTables;
  readonly MAGMA_CUBE: LootTables;
  readonly MASON_GIFT: LootTables;
  readonly MOOSHROOM: LootTables;
  readonly MULE: LootTables;
  readonly NETHER_BRIDGE: LootTables;
  readonly OCEAN_RUIN_COLD_ARCHAEOLOGY: LootTables;
  readonly OCEAN_RUIN_WARM_ARCHAEOLOGY: LootTables;
  readonly OCELOT: LootTables;
  readonly OMINOUS_TRIAL_CHAMBER_CONSUMABLES: LootTables;
  readonly OMINOUS_TRIAL_CHAMBER_KEY: LootTables;
  readonly PANDA: LootTables;
  readonly PANDA_SNEEZE: LootTables;
  readonly PARROT: LootTables;
  readonly PHANTOM: LootTables;
  readonly PIGLIN: LootTables;
  readonly PIGLIN_BARTERING: LootTables;
  readonly PIGLIN_BRUTE: LootTables;
  readonly PIG: LootTables;
  readonly PILLAGER: LootTables;
  readonly PILLAGER_OUTPOST: LootTables;
  readonly PLAYER: LootTables;
  readonly POLAR_BEAR: LootTables;
  readonly PUFFERFISH: LootTables;
  readonly RABBIT: LootTables;
  readonly RAVAGER: LootTables;
  readonly RUINED_PORTAL: LootTables;
  readonly SALMON: LootTables;
  readonly SHEARING_BOGGED: LootTables;
  readonly SHEARING_MOOSHROOM: LootTables;
  readonly SHEARING_MOOSHROOM_BROWN: LootTables;
  readonly SHEARING_MOOSHROOM_RED: LootTables;
  readonly SHEARING_SHEEP: LootTables;
  readonly SHEARING_SHEEP_BLACK: LootTables;
  readonly SHEARING_SHEEP_BLUE: LootTables;
  readonly SHEARING_SHEEP_BROWN: LootTables;
  readonly SHEARING_SHEEP_CYAN: LootTables;
  readonly SHEARING_SHEEP_GRAY: LootTables;
  readonly SHEARING_SHEEP_GREEN: LootTables;
  readonly SHEARING_SHEEP_LIGHT_BLUE: LootTables;
  readonly SHEARING_SHEEP_LIGHT_GRAY: LootTables;
  readonly SHEARING_SHEEP_LIME: LootTables;
  readonly SHEARING_SHEEP_MAGENTA: LootTables;
  readonly SHEARING_SHEEP_ORANGE: LootTables;
  readonly SHEARING_SHEEP_PINK: LootTables;
  readonly SHEARING_SHEEP_PURPLE: LootTables;
  readonly SHEARING_SHEEP_RED: LootTables;
  readonly SHEARING_SHEEP_WHITE: LootTables;
  readonly SHEARING_SHEEP_YELLOW: LootTables;
  readonly SHEARING_SNOW_GOLEM: LootTables;
  readonly SHEEP: LootTables;
  readonly SHEEP_BLACK: LootTables;
  readonly SHEEP_BLUE: LootTables;
  readonly SHEEP_BROWN: LootTables;
  readonly SHEEP_CYAN: LootTables;
  readonly SHEEP_GRAY: LootTables;
  readonly SHEEP_GREEN: LootTables;
  readonly SHEEP_LIGHT_BLUE: LootTables;
  readonly SHEEP_LIGHT_GRAY: LootTables;
  readonly SHEEP_LIME: LootTables;
  readonly SHEEP_MAGENTA: LootTables;
  readonly SHEEP_ORANGE: LootTables;
  readonly SHEEP_PINK: LootTables;
  readonly SHEEP_PURPLE: LootTables;
  readonly SHEEP_RED: LootTables;
  readonly SHEEP_WHITE: LootTables;
  readonly SHEEP_YELLOW: LootTables;
  readonly SHEPHERD_GIFT: LootTables;
  readonly SHIPWRECK_MAP: LootTables;
  readonly SHIPWRECK_SUPPLY: LootTables;
  readonly SHIPWRECK_TREASURE: LootTables;
  readonly SHULKER: LootTables;
  readonly SILVERFISH: LootTables;
  readonly SIMPLE_DUNGEON: LootTables;
  readonly SKELETON: LootTables;
  readonly SKELETON_HORSE: LootTables;
  readonly SLIME: LootTables;
  readonly SNIFFER_DIGGING: LootTables;
  readonly SNOW_GOLEM: LootTables;
  readonly SPAWN_BONUS_CHEST: LootTables;
  readonly SPIDER: LootTables;
  readonly SQUID: LootTables;
  readonly STRAY: LootTables;
  readonly STRIDER: LootTables;
  readonly STRONGHOLD_CORRIDOR: LootTables;
  readonly STRONGHOLD_CROSSING: LootTables;
  readonly STRONGHOLD_LIBRARY: LootTables;
  readonly TOOLSMITH_GIFT: LootTables;
  readonly TRADER_LLAMA: LootTables;
  readonly TRAIL_RUINS_ARCHAEOLOGY_COMMON: LootTables;
  readonly TRAIL_RUINS_ARCHAEOLOGY_RARE: LootTables;
  readonly TRIAL_CHAMBERS_CHAMBER_DISPENSER: LootTables;
  readonly TRIAL_CHAMBERS_CORRIDOR: LootTables;
  readonly TRIAL_CHAMBERS_CORRIDOR_DISPENSER: LootTables;
  readonly TRIAL_CHAMBERS_CORRIDOR_POT: LootTables;
  readonly TRIAL_CHAMBERS_ENTRANCE: LootTables;
  readonly TRIAL_CHAMBERS_INTERSECTION: LootTables;
  readonly TRIAL_CHAMBERS_INTERSECTION_BARREL: LootTables;
  readonly TRIAL_CHAMBERS_REWARD: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_COMMON: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS_RARE: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_RARE: LootTables;
  readonly TRIAL_CHAMBERS_REWARD_UNIQUE: LootTables;
  readonly TRIAL_CHAMBERS_SUPPLY: LootTables;
  readonly TRIAL_CHAMBERS_WATER_DISPENSER: LootTables;
  readonly TRIAL_CHAMBER_CONSUMABLES: LootTables;
  readonly TRIAL_CHAMBER_ITEMS_TO_DROP_WHEN_OMINOUS: LootTables;
  readonly TRIAL_CHAMBER_KEY: LootTables;
  readonly TROPICAL_FISH: LootTables;
  readonly TURTLE: LootTables;
  readonly UNDERWATER_RUIN_BIG: LootTables;
  readonly UNDERWATER_RUIN_SMALL: LootTables;
  readonly UNEMPLOYED_GIFT: LootTables;
  readonly VEX: LootTables;
  readonly VILLAGER: LootTables;
  readonly VILLAGE_ARMORER: LootTables;
  readonly VILLAGE_BUTCHER: LootTables;
  readonly VILLAGE_CARTOGRAPHER: LootTables;
  readonly VILLAGE_DESERT_HOUSE: LootTables;
  readonly VILLAGE_FISHER: LootTables;
  readonly VILLAGE_FLETCHER: LootTables;
  readonly VILLAGE_MASON: LootTables;
  readonly VILLAGE_PLAINS_HOUSE: LootTables;
  readonly VILLAGE_SAVANNA_HOUSE: LootTables;
  readonly VILLAGE_SHEPHERD: LootTables;
  readonly VILLAGE_SNOWY_HOUSE: LootTables;
  readonly VILLAGE_TAIGA_HOUSE: LootTables;
  readonly VILLAGE_TANNERY: LootTables;
  readonly VILLAGE_TEMPLE: LootTables;
  readonly VILLAGE_TOOLSMITH: LootTables;
  readonly VILLAGE_WEAPONSMITH: LootTables;
  readonly VINDICATOR: LootTables;
  readonly WANDERING_TRADER: LootTables;
  readonly WEAPONSMITH_GIFT: LootTables;
  readonly WITCH: LootTables;
  readonly WITHER: LootTables;
  readonly WITHER_SKELETON: LootTables;
  readonly WOLF: LootTables;
  readonly WOODLAND_MANSION: LootTables;
  readonly ZOGLIN: LootTables;
  readonly ZOMBIE: LootTables;
  readonly ZOMBIE_HORSE: LootTables;
  readonly ZOMBIE_VILLAGER: LootTables;
  readonly ZOMBIFIED_PIGLIN: LootTables;
  valueOf(arg0: string): LootTables;
  values(): Array<LootTables>;
}
