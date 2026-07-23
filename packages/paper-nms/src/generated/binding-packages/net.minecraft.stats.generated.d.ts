// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_crafting_display from './net.minecraft.world.item.crafting.display.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_scores_criteria from './net.minecraft.world.scores.criteria.generated.js';

/** JVM class net.minecraft.stats.RecipeBook. */
export interface RecipeBookMembers {
  readonly bookSettings: RecipeBookSettings;
  getBookSettings(): RecipeBookSettings;
  isFiltering(arg0: j_net_minecraft_world_inventory.RecipeBookType): boolean;
  isOpen(arg0: j_net_minecraft_world_inventory.RecipeBookType): boolean;
  setBookSetting(arg0: j_net_minecraft_world_inventory.RecipeBookType, arg1: boolean, arg2: boolean): void;
  setBookSettings(arg0: RecipeBookSettings): void;
  setFiltering(arg0: j_net_minecraft_world_inventory.RecipeBookType, arg1: boolean): void;
  setOpen(arg0: j_net_minecraft_world_inventory.RecipeBookType, arg1: boolean): void;
}
export type RecipeBook = RecipeBookMembers;
export interface RecipeBookStatics {
  new(): RecipeBook;
}

/** JVM class net.minecraft.stats.RecipeBookSettings. */
export interface RecipeBookSettingsMembers {
  copy(): RecipeBookSettings;
  getSettings(arg0: j_net_minecraft_world_inventory.RecipeBookType): RecipeBookSettings_TypeSettings;
  isFiltering(arg0: j_net_minecraft_world_inventory.RecipeBookType): boolean;
  isOpen(arg0: j_net_minecraft_world_inventory.RecipeBookType): boolean;
  replaceFrom(arg0: RecipeBookSettings): void;
  setFiltering(arg0: j_net_minecraft_world_inventory.RecipeBookType, arg1: boolean): void;
  setOpen(arg0: j_net_minecraft_world_inventory.RecipeBookType, arg1: boolean): void;
}
export type RecipeBookSettings = RecipeBookSettingsMembers;
export interface RecipeBookSettingsStatics {
  new(): RecipeBookSettings;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RecipeBookSettings]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, RecipeBookSettings>;
}

/** JVM record net.minecraft.stats.RecipeBookSettings$TypeSettings. */
export interface RecipeBookSettings_TypeSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  filtering(): boolean;
  hashCode(): number;
  open(): boolean;
  setFiltering(arg0: boolean): RecipeBookSettings_TypeSettings;
  setOpen(arg0: boolean): RecipeBookSettings_TypeSettings;
  toString(): string;
}
export type RecipeBookSettings_TypeSettings = RecipeBookSettings_TypeSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface RecipeBookSettings_TypeSettingsStatics {
  new(arg0: boolean, arg1: boolean): RecipeBookSettings_TypeSettings;
  readonly BLAST_FURNACE_MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RecipeBookSettings_TypeSettings]>;
  readonly CRAFTING_MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RecipeBookSettings_TypeSettings]>;
  readonly DEFAULT: RecipeBookSettings_TypeSettings;
  readonly FURNACE_MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RecipeBookSettings_TypeSettings]>;
  readonly SMOKER_MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RecipeBookSettings_TypeSettings]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, RecipeBookSettings_TypeSettings>;
}

/** JVM class net.minecraft.stats.ServerRecipeBook. */
export interface ServerRecipeBookMembers {
  readonly __javaSupertypes?: readonly [RecipeBook];
  add(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  addRecipes(arg0: JavaCollection<j_net_minecraft_world_item_crafting.RecipeHolder<object>>, arg1: j_net_minecraft_server_level.ServerPlayer): number;
  contains(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): boolean;
  copyOverData(arg0: ServerRecipeBook): void;
  readonly highlight: JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>;
  readonly known: JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>;
  loadUntrusted(arg0: ServerRecipeBook_Packed, arg1: JavaPredicate<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>): void;
  pack(): ServerRecipeBook_Packed;
  remove(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  removeHighlight(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  removeRecipes(arg0: JavaCollection<j_net_minecraft_world_item_crafting.RecipeHolder<object>>, arg1: j_net_minecraft_server_level.ServerPlayer): number;
  sendInitialRecipeBook(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type ServerRecipeBook = ServerRecipeBookMembers & RecipeBook;
export interface ServerRecipeBookStatics {
  new(arg0: ServerRecipeBook_DisplayResolver): ServerRecipeBook;
  readonly RECIPE_BOOK_TAG: "recipeBook";
}

/** JVM interface net.minecraft.stats.ServerRecipeBook$DisplayResolver. */
export interface ServerRecipeBook_DisplayResolverMembers {
  displaysForRecipe(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>, arg1: JavaConsumer<j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry>): void;
}
export type ServerRecipeBook_DisplayResolver = ServerRecipeBook_DisplayResolverMembers;
export interface ServerRecipeBook_DisplayResolverStatics {
}

/** JVM record net.minecraft.stats.ServerRecipeBook$Packed. */
export interface ServerRecipeBook_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  highlight(): JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>;
  known(): JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>;
  settings(): RecipeBookSettings;
  toString(): string;
}
export type ServerRecipeBook_Packed = ServerRecipeBook_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface ServerRecipeBook_PackedStatics {
  new(arg0: RecipeBookSettings, arg1: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>, arg2: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>): ServerRecipeBook_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ServerRecipeBook_Packed]>;
}

/** JVM class net.minecraft.stats.ServerStatsCounter. */
export interface ServerStatsCounterMembers {
  readonly __javaSupertypes?: readonly [StatsCounter];
  markAllDirty(): void;
  parseLocal(arg0: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg1: string): void;
  save(): void;
  sendStats(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  setValue(arg0: j_net_minecraft_world_entity_player.Player, arg1: Stat<object>, arg2: number): void;
  toJson(): string;
}
export type ServerStatsCounter = ServerStatsCounterMembers & StatsCounter;
export interface ServerStatsCounterStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: JavaOpaque<"java.io.File">): ServerStatsCounter;
}

/** JVM class net.minecraft.stats.Stat. */
export interface StatMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_scores_criteria.ObjectiveCriteria];
  equals(arg0: object): boolean;
  format(arg0: number): string;
  getType(): StatType<T>;
  getValue(): T;
  hashCode(): number;
  toString(): string;
}
export type Stat<T = unknown> = StatMembers<T> & j_net_minecraft_world_scores_criteria.ObjectiveCriteria;
export interface StatStatics {
  new<T>(arg0: StatType<T>, arg1: T, arg2: StatFormatter): Stat<T>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Stat<object>>;
  buildName<T>(arg0: StatType<T>, arg1: T): string;
}

/** JVM interface net.minecraft.stats.StatFormatter. */
export interface StatFormatterMembers {
  format(arg0: number): string;
}
export type StatFormatter = StatFormatterMembers;
export interface StatFormatterStatics {
  readonly DECIMAL_FORMAT: JavaOpaque<"java.text.DecimalFormat">;
  readonly DEFAULT: StatFormatter;
  readonly DISTANCE: StatFormatter;
  readonly DIVIDE_BY_TEN: StatFormatter;
  readonly TIME: StatFormatter;
}

/** JVM class net.minecraft.stats.Stats. */
export interface StatsMembers {
}
export type Stats = StatsMembers;
export interface StatsStatics {
  new(): Stats;
  readonly ANIMALS_BRED: j_net_minecraft_resources.ResourceLocation;
  readonly AVIATE_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly BELL_RING: j_net_minecraft_resources.ResourceLocation;
  readonly BLOCK_MINED: StatType<j_net_minecraft_world_level_block.Block>;
  readonly BOAT_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly CLEAN_ARMOR: j_net_minecraft_resources.ResourceLocation;
  readonly CLEAN_BANNER: j_net_minecraft_resources.ResourceLocation;
  readonly CLEAN_SHULKER_BOX: j_net_minecraft_resources.ResourceLocation;
  readonly CLIMB_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly CROUCH_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly CROUCH_TIME: j_net_minecraft_resources.ResourceLocation;
  readonly CUSTOM: StatType<j_net_minecraft_resources.ResourceLocation>;
  readonly DAMAGE_ABSORBED: j_net_minecraft_resources.ResourceLocation;
  readonly DAMAGE_BLOCKED_BY_SHIELD: j_net_minecraft_resources.ResourceLocation;
  readonly DAMAGE_DEALT: j_net_minecraft_resources.ResourceLocation;
  readonly DAMAGE_DEALT_ABSORBED: j_net_minecraft_resources.ResourceLocation;
  readonly DAMAGE_DEALT_RESISTED: j_net_minecraft_resources.ResourceLocation;
  readonly DAMAGE_RESISTED: j_net_minecraft_resources.ResourceLocation;
  readonly DAMAGE_TAKEN: j_net_minecraft_resources.ResourceLocation;
  readonly DEATHS: j_net_minecraft_resources.ResourceLocation;
  readonly DROP: j_net_minecraft_resources.ResourceLocation;
  readonly EAT_CAKE_SLICE: j_net_minecraft_resources.ResourceLocation;
  readonly ENCHANT_ITEM: j_net_minecraft_resources.ResourceLocation;
  readonly ENTITY_KILLED: StatType<j_net_minecraft_world_entity.EntityType<object>>;
  readonly ENTITY_KILLED_BY: StatType<j_net_minecraft_world_entity.EntityType<object>>;
  readonly FALL_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly FILL_CAULDRON: j_net_minecraft_resources.ResourceLocation;
  readonly FISH_CAUGHT: j_net_minecraft_resources.ResourceLocation;
  readonly FLY_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly HAPPY_GHAST_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly HORSE_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly INSPECT_DISPENSER: j_net_minecraft_resources.ResourceLocation;
  readonly INSPECT_DROPPER: j_net_minecraft_resources.ResourceLocation;
  readonly INSPECT_HOPPER: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_ANVIL: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_BEACON: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_BLAST_FURNACE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_BREWINGSTAND: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_CAMPFIRE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_CARTOGRAPHY_TABLE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_CRAFTING_TABLE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_FURNACE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_GRINDSTONE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_LECTERN: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_LOOM: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_SMITHING_TABLE: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_SMOKER: j_net_minecraft_resources.ResourceLocation;
  readonly INTERACT_WITH_STONECUTTER: j_net_minecraft_resources.ResourceLocation;
  readonly ITEM_BROKEN: StatType<j_net_minecraft_world_item.Item>;
  readonly ITEM_CRAFTED: StatType<j_net_minecraft_world_item.Item>;
  readonly ITEM_DROPPED: StatType<j_net_minecraft_world_item.Item>;
  readonly ITEM_PICKED_UP: StatType<j_net_minecraft_world_item.Item>;
  readonly ITEM_USED: StatType<j_net_minecraft_world_item.Item>;
  readonly JUMP: j_net_minecraft_resources.ResourceLocation;
  readonly LEAVE_GAME: j_net_minecraft_resources.ResourceLocation;
  readonly MINECART_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly MOB_KILLS: j_net_minecraft_resources.ResourceLocation;
  readonly OPEN_BARREL: j_net_minecraft_resources.ResourceLocation;
  readonly OPEN_CHEST: j_net_minecraft_resources.ResourceLocation;
  readonly OPEN_ENDERCHEST: j_net_minecraft_resources.ResourceLocation;
  readonly OPEN_SHULKER_BOX: j_net_minecraft_resources.ResourceLocation;
  readonly PIG_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly PLAYER_KILLS: j_net_minecraft_resources.ResourceLocation;
  readonly PLAY_NOTEBLOCK: j_net_minecraft_resources.ResourceLocation;
  readonly PLAY_RECORD: j_net_minecraft_resources.ResourceLocation;
  readonly PLAY_TIME: j_net_minecraft_resources.ResourceLocation;
  readonly POT_FLOWER: j_net_minecraft_resources.ResourceLocation;
  readonly RAID_TRIGGER: j_net_minecraft_resources.ResourceLocation;
  readonly RAID_WIN: j_net_minecraft_resources.ResourceLocation;
  readonly SLEEP_IN_BED: j_net_minecraft_resources.ResourceLocation;
  readonly SPRINT_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly STRIDER_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly SWIM_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly TALKED_TO_VILLAGER: j_net_minecraft_resources.ResourceLocation;
  readonly TARGET_HIT: j_net_minecraft_resources.ResourceLocation;
  readonly TIME_SINCE_DEATH: j_net_minecraft_resources.ResourceLocation;
  readonly TIME_SINCE_REST: j_net_minecraft_resources.ResourceLocation;
  readonly TOTAL_WORLD_TIME: j_net_minecraft_resources.ResourceLocation;
  readonly TRADED_WITH_VILLAGER: j_net_minecraft_resources.ResourceLocation;
  readonly TRIGGER_TRAPPED_CHEST: j_net_minecraft_resources.ResourceLocation;
  readonly TUNE_NOTEBLOCK: j_net_minecraft_resources.ResourceLocation;
  readonly USE_CAULDRON: j_net_minecraft_resources.ResourceLocation;
  readonly WALK_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly WALK_ON_WATER_ONE_CM: j_net_minecraft_resources.ResourceLocation;
  readonly WALK_UNDER_WATER_ONE_CM: j_net_minecraft_resources.ResourceLocation;
}

/** JVM class net.minecraft.stats.StatsCounter. */
export interface StatsCounterMembers {
  getValue(arg0: Stat<object>): number;
  getValue<T>(arg0: StatType<T>, arg1: T): number;
  increment(arg0: j_net_minecraft_world_entity_player.Player, arg1: Stat<object>, arg2: number): void;
  setValue(arg0: j_net_minecraft_world_entity_player.Player, arg1: Stat<object>, arg2: number): void;
  readonly stats: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [Stat<object>]>;
}
export type StatsCounter = StatsCounterMembers;
export interface StatsCounterStatics {
  new(): StatsCounter;
}

/** JVM class net.minecraft.stats.StatType. */
export interface StatTypeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Iterable<Stat<T>>];
  contains(arg0: T): boolean;
  get(arg0: T): Stat<T>;
  get(arg0: T, arg1: StatFormatter): Stat<T>;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getRegistry(): j_net_minecraft_core.Registry<T>;
  iterator(): JavaOpaque<"java.util.Iterator", [Stat<T>]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Stat<T>>;
}
export type StatType<T = unknown> = StatTypeMembers<T> & Iterable<Stat<T>>;
export interface StatTypeStatics {
  new<T>(arg0: j_net_minecraft_core.Registry<T>, arg1: j_net_minecraft_network_chat.Component): StatType<T>;
}
