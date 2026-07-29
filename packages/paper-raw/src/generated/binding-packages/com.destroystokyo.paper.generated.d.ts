// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_tag from './io.papermc.paper.tag.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM class com.destroystokyo.paper.ClientOption. */
export interface ClientOptionMembers<T = unknown> {
  getType(): JavaClass<T>;
}
export type ClientOption<T = unknown> = ClientOptionMembers<T>;
export interface ClientOptionStatics {
  readonly ALLOW_SERVER_LISTINGS: ClientOption<boolean>;
  readonly CHAT_COLORS_ENABLED: ClientOption<boolean>;
  readonly CHAT_VISIBILITY: ClientOption<ClientOption_ChatVisibility>;
  readonly LOCALE: ClientOption<string>;
  readonly MAIN_HAND: ClientOption<j_org_bukkit_inventory.MainHand>;
  readonly PARTICLE_VISIBILITY: ClientOption<ClientOption_ParticleVisibility>;
  readonly SKIN_PARTS: ClientOption<SkinParts>;
  readonly TEXT_FILTERING_ENABLED: ClientOption<boolean>;
  readonly VIEW_DISTANCE: ClientOption<number>;
}

/** Live JVM enum com.destroystokyo.paper.ClientOption$ChatVisibility; constants are host handles, not strings. */
export type ClientOption_ChatVisibility = JavaEnum<"com.destroystokyo.paper.ClientOption$ChatVisibility", "FULL" | "HIDDEN" | "SYSTEM" | "UNKNOWN"> & ClientOption_ChatVisibilityMembers;
export interface ClientOption_ChatVisibilityMembers {
  translationKey(): string;
}
export interface ClientOption_ChatVisibilityStatics {
  readonly FULL: ClientOption_ChatVisibility;
  readonly HIDDEN: ClientOption_ChatVisibility;
  readonly SYSTEM: ClientOption_ChatVisibility;
  readonly UNKNOWN: ClientOption_ChatVisibility;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, ClientOption_ChatVisibility>;
  valueOf(arg0: string): ClientOption_ChatVisibility;
  values(): Array<ClientOption_ChatVisibility>;
}

/** Live JVM enum com.destroystokyo.paper.ClientOption$ParticleVisibility; constants are host handles, not strings. */
export type ClientOption_ParticleVisibility = JavaEnum<"com.destroystokyo.paper.ClientOption$ParticleVisibility", "ALL" | "DECREASED" | "MINIMAL"> & ClientOption_ParticleVisibilityMembers;
export interface ClientOption_ParticleVisibilityMembers {
  translationKey(): string;
}
export interface ClientOption_ParticleVisibilityStatics {
  readonly ALL: ClientOption_ParticleVisibility;
  readonly DECREASED: ClientOption_ParticleVisibility;
  readonly MINIMAL: ClientOption_ParticleVisibility;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, ClientOption_ParticleVisibility>;
  valueOf(arg0: string): ClientOption_ParticleVisibility;
  values(): Array<ClientOption_ParticleVisibility>;
}

/** JVM class com.destroystokyo.paper.MaterialSetTag. */
export interface MaterialSetTagMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_tag.BaseTag<j_org_bukkit.Material, MaterialSetTag>];
  add(arg0: JavaCollection<j_org_bukkit.Material>): MaterialSetTag;
  add(arg0: JavaPredicate<j_org_bukkit.Material>): MaterialSetTag;
  add(...arg0: Array<j_org_bukkit.Material>): MaterialSetTag;
  add(...arg0: Array<j_org_bukkit.Tag_3<j_org_bukkit.Material>>): MaterialSetTag;
  contains(arg0: string): MaterialSetTag;
  endsWith(arg0: string): MaterialSetTag;
  ensureSize(arg0: string, arg1: number): MaterialSetTag;
  getKey(): j_org_bukkit.NamespacedKey;
  getValues(): JavaSet<j_org_bukkit.Material>;
  isLocked(): boolean;
  isTagged(arg0: j_org_bukkit.Material): boolean;
  isTagged(arg0: j_org_bukkit_block.Block): boolean;
  isTagged(arg0: j_org_bukkit_block.BlockState): boolean;
  isTagged(arg0: j_org_bukkit_block_data.BlockData): boolean;
  isTagged(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  lock(): MaterialSetTag;
  not(arg0: JavaCollection<j_org_bukkit.Material>): MaterialSetTag;
  not(arg0: JavaPredicate<j_org_bukkit.Material>): MaterialSetTag;
  not(...arg0: Array<j_org_bukkit.Material>): MaterialSetTag;
  not(...arg0: Array<j_org_bukkit.Tag_3<j_org_bukkit.Material>>): MaterialSetTag;
  notContains(arg0: string): MaterialSetTag;
  notEndsWith(arg0: string): MaterialSetTag;
  notStartsWith(arg0: string): MaterialSetTag;
  startsWith(arg0: string): MaterialSetTag;
}
export type MaterialSetTag = MaterialSetTagMembers;
export interface MaterialSetTagStatics {
  new(arg0: JavaCollection<j_org_bukkit.Material>): MaterialSetTag;
  new(arg0: JavaPredicate<j_org_bukkit.Material>): MaterialSetTag;
  new(arg0: j_org_bukkit.NamespacedKey | null, arg1: JavaCollection<j_org_bukkit.Material>): MaterialSetTag;
  new(arg0: j_org_bukkit.NamespacedKey | null, arg1: JavaCollection<j_org_bukkit.Material>, ...arg2: Array<JavaPredicate<j_org_bukkit.Material>>): MaterialSetTag;
  new(arg0: j_org_bukkit.NamespacedKey | null, arg1: JavaPredicate<j_org_bukkit.Material>): MaterialSetTag;
  new(arg0: j_org_bukkit.NamespacedKey | null, ...arg1: Array<j_org_bukkit.Material>): MaterialSetTag;
  new(...arg0: Array<j_org_bukkit.Material>): MaterialSetTag;
}

/** JVM class com.destroystokyo.paper.MaterialTags. */
export interface MaterialTagsMembers {
}
export type MaterialTags = MaterialTagsMembers;
export interface MaterialTagsStatics {
  new(): MaterialTags;
  readonly ARMOR: MaterialSetTag;
  readonly ARROWS: MaterialSetTag;
  readonly AXES: MaterialSetTag;
  readonly BEDS: MaterialSetTag;
  readonly BOOTS: MaterialSetTag;
  readonly BOWS: MaterialSetTag;
  readonly BUCKETS: MaterialSetTag;
  readonly CHESTPLATES: MaterialSetTag;
  readonly CHEST_EQUIPPABLE: MaterialSetTag;
  readonly COALS: MaterialSetTag;
  readonly COBBLESTONES: MaterialSetTag;
  readonly COBBLESTONE_WALLS: MaterialSetTag;
  readonly COLORABLE: MaterialSetTag;
  readonly COMMAND_BLOCKS: MaterialSetTag;
  readonly CONCRETES: MaterialSetTag;
  readonly CONCRETE_POWDER: MaterialSetTag;
  readonly COOKED_FISH: MaterialSetTag;
  readonly COPPER_BLOCKS: MaterialSetTag;
  readonly CORAL: MaterialSetTag;
  readonly CORAL_BLOCKS: MaterialSetTag;
  readonly CORAL_FANS: MaterialSetTag;
  readonly CUT_COPPER_BLOCKS: MaterialSetTag;
  readonly CUT_COPPER_SLABS: MaterialSetTag;
  readonly CUT_COPPER_STAIRS: MaterialSetTag;
  readonly DEEPSLATE_ORES: MaterialSetTag;
  readonly DIAMOND_TOOLS: MaterialSetTag;
  readonly DOORS: MaterialSetTag;
  readonly DYES: MaterialSetTag;
  readonly ENCHANTABLE: MaterialSetTag;
  readonly EXPOSED_COPPER_BLOCKS: MaterialSetTag;
  readonly FENCES: MaterialSetTag;
  readonly FENCE_GATES: MaterialSetTag;
  readonly FISH_BUCKETS: MaterialSetTag;
  readonly FULL_COPPER_BLOCKS: MaterialSetTag;
  readonly GLASS: MaterialSetTag;
  readonly GLASS_PANES: MaterialSetTag;
  readonly GLAZED_TERRACOTTA: MaterialSetTag;
  readonly GOLDEN_APPLES: MaterialSetTag;
  readonly GOLDEN_TOOLS: MaterialSetTag;
  readonly HEAD_EQUIPPABLE: MaterialSetTag;
  readonly HELMETS: MaterialSetTag;
  readonly HOES: MaterialSetTag;
  readonly HORSE_ARMORS: MaterialSetTag;
  readonly INFESTED_BLOCKS: MaterialSetTag;
  readonly IRON_TOOLS: MaterialSetTag;
  readonly LANTERNS: MaterialSetTag;
  readonly LEGGINGS: MaterialSetTag;
  readonly MUSHROOMS: MaterialSetTag;
  readonly MUSHROOM_BLOCKS: MaterialSetTag;
  readonly MUSIC_DISCS: MaterialSetTag;
  readonly NETHERITE_TOOLS: MaterialSetTag;
  readonly ORES: MaterialSetTag;
  readonly OXIDIZED_COPPER_BLOCKS: MaterialSetTag;
  readonly PICKAXES: MaterialSetTag;
  readonly PISTONS: MaterialSetTag;
  readonly POTATOES: MaterialSetTag;
  readonly PRESSURE_PLATES: MaterialSetTag;
  readonly PRISMARINE: MaterialSetTag;
  readonly PRISMARINE_SLABS: MaterialSetTag;
  readonly PRISMARINE_STAIRS: MaterialSetTag;
  readonly PUMPKINS: MaterialSetTag;
  readonly PURPUR: MaterialSetTag;
  readonly QUARTZ_BLOCKS: MaterialSetTag;
  readonly RAILS: MaterialSetTag;
  readonly RAW_FISH: MaterialSetTag;
  readonly RAW_ORES: MaterialSetTag;
  readonly RAW_ORE_BLOCKS: MaterialSetTag;
  readonly REDSTONE_TORCH: MaterialSetTag;
  readonly RED_SANDSTONES: MaterialSetTag;
  readonly SANDSTONES: MaterialSetTag;
  readonly SHOVELS: MaterialSetTag;
  readonly SHULKER_BOXES: MaterialSetTag;
  readonly SIGNS: MaterialSetTag;
  readonly SKULLS: MaterialSetTag;
  readonly SOUL_TORCH: MaterialSetTag;
  readonly SPAWN_EGGS: MaterialSetTag;
  readonly SPONGES: MaterialSetTag;
  readonly STAINED_GLASS: MaterialSetTag;
  readonly STAINED_GLASS_PANES: MaterialSetTag;
  readonly STAINED_TERRACOTTA: MaterialSetTag;
  readonly STONE_TOOLS: MaterialSetTag;
  readonly SWORDS: MaterialSetTag;
  readonly TERRACOTTA: MaterialSetTag;
  readonly THROWABLE_PROJECTILES: MaterialSetTag;
  readonly TORCH: MaterialSetTag;
  readonly TORCHES: MaterialSetTag;
  readonly TRAPDOORS: MaterialSetTag;
  readonly UNAFFECTED_COPPER_BLOCKS: MaterialSetTag;
  readonly UNWAXED_COPPER_BLOCKS: MaterialSetTag;
  readonly WAXED_COPPER_BLOCKS: MaterialSetTag;
  readonly WEATHERED_COPPER_BLOCKS: MaterialSetTag;
  readonly WOODEN_DOORS: MaterialSetTag;
  readonly WOODEN_FENCES: MaterialSetTag;
  readonly WOODEN_GATES: MaterialSetTag;
  readonly WOODEN_TOOLS: MaterialSetTag;
  readonly WOODEN_TRAPDOORS: MaterialSetTag;
}

/** JVM interface com.destroystokyo.paper.Namespaced. */
export interface NamespacedMembers {
  getKey(): string;
  getNamespace(): string;
}
export type Namespaced = NamespacedMembers;
export interface NamespacedStatics {
}

/** JVM class com.destroystokyo.paper.NamespacedTag. */
export interface NamespacedTagMembers {
  readonly __javaSupertypes?: readonly [Namespaced];
  equals(arg0: object): boolean;
  getKey(): string;
  getNamespace(): string;
  hashCode(): number;
  toString(): string;
}
export type NamespacedTag = NamespacedTagMembers & Namespaced;
export interface NamespacedTagStatics {
  new(arg0: string, arg1: string): NamespacedTag;
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: string): NamespacedTag;
  readonly BUKKIT: "bukkit";
  readonly MINECRAFT: "minecraft";
  minecraft(arg0: string): NamespacedTag;
  randomKey(): NamespacedTag;
}

/** JVM class com.destroystokyo.paper.ParticleBuilder. */
export interface ParticleBuilderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">];
  allPlayers(): ParticleBuilder;
  clone(): ParticleBuilder;
  color(arg0: number): ParticleBuilder;
  color(arg0: number, arg1: number, arg2: number): ParticleBuilder;
  color(arg0: number, arg1: number, arg2: number, arg3: number): ParticleBuilder;
  color(arg0: j_org_bukkit.Color | null): ParticleBuilder;
  color(arg0: j_org_bukkit.Color | null, arg1: number): ParticleBuilder;
  colorTransition(arg0: number, arg1: number): ParticleBuilder;
  colorTransition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): ParticleBuilder;
  colorTransition(arg0: j_org_bukkit.Color, arg1: j_org_bukkit.Color): ParticleBuilder;
  colorTransition(arg0: j_org_bukkit.Color, arg1: j_org_bukkit.Color, arg2: number): ParticleBuilder;
  count(): number;
  count(arg0: number): ParticleBuilder;
  data<T>(): T | null;
  data<T>(arg0: T | null): ParticleBuilder;
  extra(): number;
  extra(arg0: number): ParticleBuilder;
  force(): boolean;
  force(arg0: boolean): ParticleBuilder;
  hasReceivers(): boolean;
  location(): j_org_bukkit.Location | null;
  location(arg0: j_org_bukkit.Location): ParticleBuilder;
  location(arg0: j_org_bukkit.World, arg1: number, arg2: number, arg3: number): ParticleBuilder;
  offset(arg0: number, arg1: number, arg2: number): ParticleBuilder;
  offsetX(): number;
  offsetY(): number;
  offsetZ(): number;
  particle(): j_org_bukkit.Particle;
  particle(arg0: j_org_bukkit.Particle): ParticleBuilder;
  receivers(): JavaList<j_org_bukkit_entity.Player> | null;
  receivers(arg0: number): ParticleBuilder;
  receivers(arg0: number, arg1: number): ParticleBuilder;
  receivers(arg0: number, arg1: number, arg2: number): ParticleBuilder;
  receivers(arg0: number, arg1: number, arg2: boolean): ParticleBuilder;
  receivers(arg0: number, arg1: boolean): ParticleBuilder;
  receivers(arg0: JavaCollection<j_org_bukkit_entity.Player> | null): ParticleBuilder;
  receivers(arg0: JavaList<j_org_bukkit_entity.Player> | null): ParticleBuilder;
  receivers(...arg0: Array<j_org_bukkit_entity.Player | null>): ParticleBuilder;
  source(): j_org_bukkit_entity.Player | null;
  source(arg0: j_org_bukkit_entity.Player | null): ParticleBuilder;
  spawn(): ParticleBuilder;
}
export type ParticleBuilder = ParticleBuilderMembers & JavaOpaque<"java.lang.Cloneable">;
export interface ParticleBuilderStatics {
  new(arg0: j_org_bukkit.Particle): ParticleBuilder;
}

/** JVM interface com.destroystokyo.paper.SkinParts. */
export interface SkinPartsMembers {
  getRaw(): number;
  hasCapeEnabled(): boolean;
  hasHatsEnabled(): boolean;
  hasJacketEnabled(): boolean;
  hasLeftPantsEnabled(): boolean;
  hasLeftSleeveEnabled(): boolean;
  hasRightPantsEnabled(): boolean;
  hasRightSleeveEnabled(): boolean;
}
export type SkinParts = SkinPartsMembers;
export interface SkinPartsStatics {
}

/** JVM class com.destroystokyo.paper.Title. */
export interface TitleMembers {
  broadcast(): void;
  getFadeIn(): number;
  getFadeOut(): number;
  getStay(): number;
  getSubtitle(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">> | null;
  getTitle(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  send(arg0: JavaCollection<j_org_bukkit_entity.Player>): void;
  send(arg0: j_org_bukkit_entity.Player): void;
  send(arg0: Array<j_org_bukkit_entity.Player>): void;
}
export type Title = TitleMembers;
export interface TitleStatics {
  new(arg0: string): Title;
  new(arg0: string, arg1: string | null): Title;
  new(arg0: string, arg1: string | null, arg2: number, arg3: number, arg4: number): Title;
  new(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): Title;
  new(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent"> | null): Title;
  new(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent"> | null, arg2: number, arg3: number, arg4: number): Title;
  new(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): Title;
  new(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">> | null): Title;
  new(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">> | null, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg2: number, arg3: number, arg4: number): Title;
  readonly DEFAULT_FADE_IN: 20;
  readonly DEFAULT_FADE_OUT: 20;
  readonly DEFAULT_STAY: 200;
  builder(): Title_Builder;
}

/** JVM class com.destroystokyo.paper.Title$Builder. */
export interface Title_BuilderMembers {
  build(): Title;
  fadeIn(arg0: number): Title_Builder;
  fadeOut(arg0: number): Title_Builder;
  stay(arg0: number): Title_Builder;
  subtitle(arg0: string | null): Title_Builder;
  subtitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent"> | null): Title_Builder;
  subtitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">> | null): Title_Builder;
  title(arg0: string): Title_Builder;
  title(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): Title_Builder;
  title(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): Title_Builder;
}
export type Title_Builder = Title_BuilderMembers;
export interface Title_BuilderStatics {
  new(): Title_Builder;
}
