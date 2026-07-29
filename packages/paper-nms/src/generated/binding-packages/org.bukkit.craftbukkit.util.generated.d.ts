// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_lighting from './net.minecraft.world.level.lighting.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';
import type * as j_net_minecraft_world_ticks from './net.minecraft.world.ticks.generated.js';
import type * as j_org_bukkit_craftbukkit_block from './org.bukkit.craftbukkit.block.generated.js';
import type * as j_org_bukkit_craftbukkit_legacy_reroute from './org.bukkit.craftbukkit.legacy.reroute.generated.js';

/** JVM class org.bukkit.craftbukkit.util.ApiVersion. */
export interface ApiVersionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [ApiVersion]>, JavaOpaque<"java.io.Serializable">];
  compareTo(arg0: ApiVersion): number;
  getVersionString(): string;
  isNewerThan(arg0: ApiVersion): boolean;
  isNewerThanOrSameAs(arg0: ApiVersion): boolean;
  isOlderThan(arg0: ApiVersion): boolean;
  isOlderThanOrSameAs(arg0: ApiVersion): boolean;
  toString(): string;
}
export type ApiVersion = ApiVersionMembers & JavaOpaque<"java.io.Serializable">;
export interface ApiVersionStatics {
  readonly ABSTRACT_COW: ApiVersion;
  readonly CURRENT: ApiVersion;
  readonly FIELD_NAME_PARITY: ApiVersion;
  readonly FLATTENING: ApiVersion;
  readonly NONE: ApiVersion;
  getOrCreateVersion(arg0: string): ApiVersion;
}

/** JVM class org.bukkit.craftbukkit.util.BlockStateListPopulator. */
export interface BlockStateListPopulatorMembers {
  readonly __javaSupertypes?: readonly [DummyGeneratorAccess];
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity, arg3: number): boolean;
  dimensionType(): j_net_minecraft_world_level_dimension.DimensionType;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity;
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBrightness(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.BlockPos): number;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getHeight(): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getHeightmapPos(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getLevelData(): j_net_minecraft_world_level_storage.LevelData;
  getMinY(): number;
  getMinecraftWorld(): j_net_minecraft_server_level.ServerLevel;
  getRandom(): j_net_minecraft_util.RandomSource;
  getRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getSnapshotBlocks(): JavaList<j_org_bukkit_craftbukkit_block.CraftBlockState>;
  isFluidAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_material.FluidState>): boolean;
  isStateAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  nextSubTickCount(): bigint;
  placeBlocks(): void;
  placeBlocks(arg0: JavaConsumer<j_org_bukkit_craftbukkit_block.CraftBlockState>): void;
  placeSomeBlocks(arg0: JavaConsumer<j_org_bukkit_craftbukkit_block.CraftBlockState>, arg1: JavaPredicate<JavaOpaque<"org.bukkit.block.BlockState">>): void;
  placeSomeBlocks(arg0: JavaPredicate<JavaOpaque<"org.bukkit.block.BlockState">>): void;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
}
export type BlockStateListPopulator = BlockStateListPopulatorMembers & DummyGeneratorAccess;
export interface BlockStateListPopulatorStatics {
  new(arg0: j_net_minecraft_world_level.LevelAccessor): BlockStateListPopulator;
}

/** JVM record org.bukkit.craftbukkit.util.CapturedBlock. */
export interface CapturedBlockMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blockEntity(): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  equals(arg0: object): boolean;
  flags(): number;
  hashCode(): number;
  state(): j_net_minecraft_world_level_block_state.BlockState;
  toString(): string;
}
export type CapturedBlock = CapturedBlockMembers & JavaOpaque<"java.lang.Record">;
export interface CapturedBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: number, arg2: j_net_minecraft_world_level_block_entity.BlockEntity | null): CapturedBlock;
}

/** JVM class org.bukkit.craftbukkit.util.ClassTraverser. */
export interface ClassTraverserMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Iterator", [JavaClass<object>]>];
  hasNext(): boolean;
  next(): JavaClass<object>;
}
export type ClassTraverser = ClassTraverserMembers & JavaOpaque<"java.util.Iterator", [JavaClass<object>]>;
export interface ClassTraverserStatics {
  new(arg0: JavaClass<object>): ClassTraverser;
}

/** JVM class org.bukkit.craftbukkit.util.Commodore. */
export interface CommodoreMembers {
  convert(arg0: Array<number>, arg1: string, arg2: ApiVersion, arg3: JavaSet<string>): Array<number>;
  getReroutes(): JavaList<j_org_bukkit_craftbukkit_legacy_reroute.Reroute>;
  updateReroute(arg0: JavaPredicate<string>): void;
}
export type Commodore = CommodoreMembers;
export interface CommodoreStatics {
  new(): Commodore;
  new(arg0: JavaPredicate<string>): Commodore;
  main(arg0: Array<string>): void;
  rerouteMethods(arg0: ApiVersion, arg1: j_org_bukkit_craftbukkit_legacy_reroute.Reroute, arg2: boolean, arg3: string, arg4: string, arg5: string, arg6: JavaConsumer<j_org_bukkit_craftbukkit_legacy_reroute.RerouteMethodData>): boolean;
}

/** JVM record org.bukkit.craftbukkit.util.CraftBiomeSearchResult. */
export interface CraftBiomeSearchResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"org.bukkit.util.BiomeSearchResult">];
  biome(): JavaOpaque<"org.bukkit.block.Biome">;
  equals(arg0: object): boolean;
  getBiome(): JavaOpaque<"org.bukkit.block.Biome">;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  hashCode(): number;
  location(): JavaOpaque<"org.bukkit.Location">;
  toString(): string;
}
export type CraftBiomeSearchResult = CraftBiomeSearchResultMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"org.bukkit.util.BiomeSearchResult">;
export interface CraftBiomeSearchResultStatics {
  new(arg0: JavaOpaque<"org.bukkit.block.Biome">, arg1: JavaOpaque<"org.bukkit.Location">): CraftBiomeSearchResult;
}

/** JVM class org.bukkit.craftbukkit.util.CraftBlockVector. */
export interface CraftBlockVectorMembers {
}
export type CraftBlockVector = CraftBlockVectorMembers;
export interface CraftBlockVectorStatics {
  toBlockPosition(arg0: JavaOpaque<"org.bukkit.util.BlockVector">): j_net_minecraft_core.BlockPos;
  toBukkit(arg0: j_net_minecraft_core.Vec3i): JavaOpaque<"org.bukkit.util.BlockVector">;
}

/** JVM class org.bukkit.craftbukkit.util.CraftChatMessage. */
export interface CraftChatMessageMembers {
}
export type CraftChatMessage = CraftChatMessageMembers;
export interface CraftChatMessageStatics {
  bungeeToJson(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): string;
  bungeeToVanilla(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): j_net_minecraft_network_chat.Component;
  fromComponent(arg0: j_net_minecraft_network_chat.Component): string;
  /** @throws com.google.gson.JsonParseException */
  fromJSON(arg0: string): j_net_minecraft_network_chat.Component;
  fromJSONOrNull(arg0: string): j_net_minecraft_network_chat.Component;
  fromJSONOrString(arg0: string): j_net_minecraft_network_chat.Component;
  fromJSONOrString(arg0: string, arg1: boolean): j_net_minecraft_network_chat.Component;
  fromJSONOrString(arg0: string, arg1: boolean, arg2: boolean): j_net_minecraft_network_chat.Component;
  fromJSONOrString(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: boolean): j_net_minecraft_network_chat.Component;
  fromString(arg0: string): Array<j_net_minecraft_network_chat.Component>;
  fromString(arg0: string, arg1: boolean): Array<j_net_minecraft_network_chat.Component>;
  fromString(arg0: string, arg1: boolean, arg2: boolean): Array<j_net_minecraft_network_chat.Component>;
  fromStringOrEmpty(arg0: string): j_net_minecraft_network_chat.Component;
  fromStringOrEmpty(arg0: string, arg1: boolean): j_net_minecraft_network_chat.Component;
  fromStringOrNull(arg0: string): j_net_minecraft_network_chat.Component;
  fromStringOrNull(arg0: string, arg1: boolean): j_net_minecraft_network_chat.Component;
  fromStringOrOptional(arg0: string): JavaOptional<j_net_minecraft_network_chat.Component>;
  fromStringOrOptional(arg0: string, arg1: boolean): JavaOptional<j_net_minecraft_network_chat.Component>;
  getColor(arg0: j_net_minecraft.ChatFormatting): JavaOpaque<"org.bukkit.ChatColor">;
  getColor(arg0: JavaOpaque<"org.bukkit.ChatColor">): j_net_minecraft.ChatFormatting;
  jsonToBungee(arg0: string): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  toJSON(arg0: j_net_minecraft_network_chat.Component): string;
  toJSONOrNull(arg0: j_net_minecraft_network_chat.Component): string;
  trimMessage(arg0: string, arg1: number): string;
  vanillaToBungee(arg0: j_net_minecraft_network_chat.Component): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
}

/** JVM class org.bukkit.craftbukkit.util.CraftDifficulty. */
export interface CraftDifficultyMembers {
}
export type CraftDifficulty = CraftDifficultyMembers;
export interface CraftDifficultyStatics {
  new(): CraftDifficulty;
  toBukkit(arg0: j_net_minecraft_world.Difficulty): JavaOpaque<"org.bukkit.Difficulty">;
  toMinecraft(arg0: JavaOpaque<"org.bukkit.Difficulty">): j_net_minecraft_world.Difficulty;
}

/** JVM class org.bukkit.craftbukkit.util.CraftDimensionUtil. */
export interface CraftDimensionUtilMembers {
}
export type CraftDimensionUtil = CraftDimensionUtilMembers;
export interface CraftDimensionUtilStatics {
  getMainDimensionKey(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
}

/** JVM class org.bukkit.craftbukkit.util.CraftIconCache. */
export interface CraftIconCacheMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.util.CachedServerIcon">];
  getData(): string | null;
  readonly value: Array<number>;
}
export type CraftIconCache = CraftIconCacheMembers & JavaOpaque<"org.bukkit.util.CachedServerIcon">;
export interface CraftIconCacheStatics {
  new(arg0: Array<number>): CraftIconCache;
}

/** JVM class org.bukkit.craftbukkit.util.CraftLegacy. */
export interface CraftLegacy_2Members {
}
export type CraftLegacy_2 = CraftLegacy_2Members;
export interface CraftLegacy_2Statics {
  fromLegacy(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.Material">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): JavaOpaque<"org.bukkit.Material">;
  modern_ordinal(arg0: JavaOpaque<"org.bukkit.Material">): number;
  modern_values(): Array<JavaOpaque<"org.bukkit.Material">>;
}

/** JVM class org.bukkit.craftbukkit.util.CraftLocation. */
export interface CraftLocationMembers {
}
export type CraftLocation = CraftLocationMembers;
export interface CraftLocationStatics {
  fromGlobalPos(arg0: j_net_minecraft_core.GlobalPos): JavaOpaque<"org.bukkit.Location">;
  toBlockPosition(arg0: JavaOpaque<"org.bukkit.Location">): j_net_minecraft_core.BlockPos;
  toBukkit(arg0: j_net_minecraft_core.BlockPos): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.Level): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_core.BlockPos, arg1: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_core.BlockPos, arg1: JavaOpaque<"org.bukkit.World">, arg2: number, arg3: number): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_world_level_pathfinder.Node, arg1: j_net_minecraft_world_level.Level): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_world_phys.Vec3): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_world_phys.Vec3, arg1: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.Location">;
  toBukkit(arg0: j_net_minecraft_world_phys.Vec3, arg1: JavaOpaque<"org.bukkit.World">, arg2: number, arg3: number): JavaOpaque<"org.bukkit.Location">;
  toGlobalPos(arg0: JavaOpaque<"org.bukkit.Location">): j_net_minecraft_core.GlobalPos;
  toVec3(arg0: JavaOpaque<"org.bukkit.Location">): j_net_minecraft_world_phys.Vec3;
}

/** JVM class org.bukkit.craftbukkit.util.CraftMagicNumbers. */
export interface CraftMagicNumbersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.UnsafeValues">];
  /** @throws org.bukkit.plugin.InvalidPluginException */
  checkSupported(arg0: JavaOpaque<"org.bukkit.plugin.PluginDescriptionFile">): void;
  colorDownsamplingGsonComponentSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.gson.GsonComponentSerializer">;
  componentFlattener(): JavaOpaque<"net.kyori.adventure.text.flattener.ComponentFlattener">;
  computeTooltipLines(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"io.papermc.paper.inventory.tooltip.TooltipContext">, arg2: JavaOpaque<"org.bukkit.entity.Player">): JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>;
  createDamageSourceBuilder(arg0: JavaOpaque<"org.bukkit.damage.DamageType">): JavaOpaque<"org.bukkit.damage.DamageSource$Builder">;
  createEmptyStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  createPluginLifecycleEventManager(arg0: JavaOpaque<"org.bukkit.plugin.java.JavaPlugin">, arg1: JavaOpaque<"java.util.function.BooleanSupplier">): JavaOpaque<"io.papermc.paper.plugin.lifecycle.event.LifecycleEventManager", [JavaOpaque<"org.bukkit.plugin.Plugin">]>;
  deserializeEntity(arg0: Array<number>, arg1: JavaOpaque<"org.bukkit.World">, arg2: boolean, arg3: boolean): JavaOpaque<"org.bukkit.entity.Entity">;
  deserializeItem(arg0: Array<number>): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  /** @throws java.lang.IllegalArgumentException */
  deserializeItemFromJson(arg0: JavaOpaque<"com.google.gson.JsonObject">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  deserializeStack(arg0: JavaMap<string, object>): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.Material">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): JavaOpaque<"org.bukkit.block.data.BlockData">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): JavaOpaque<"org.bukkit.Material">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.material.MaterialData">, arg1: boolean): JavaOpaque<"org.bukkit.Material">;
  get<B /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: JavaOpaque<"io.papermc.paper.registry.RegistryKey", [B]>, arg1: JavaOpaque<"org.bukkit.NamespacedKey">): B;
  get(arg0: JavaClass<object>, arg1: string): string;
  getBiomeKey(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: number, arg2: number, arg3: number): JavaOpaque<"org.bukkit.NamespacedKey">;
  getBlockTranslationKey(arg0: JavaOpaque<"org.bukkit.Material">): string;
  getCommodore(): Commodore;
  getCreativeCategory(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.CreativeCategory">;
  getDataVersion(): number;
  getDefaultAttributeModifiers(arg0: JavaOpaque<"org.bukkit.Material">, arg1: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): JavaOpaque<"com.google.common.collect.Multimap", [JavaOpaque<"org.bukkit.attribute.Attribute">, JavaOpaque<"org.bukkit.attribute.AttributeModifier">]>;
  getDefaultEntityAttributes(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.attribute.Attributable">;
  getInternalPotionData(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.potion.PotionType$InternalPotionData">;
  getItemTranslationKey(arg0: JavaOpaque<"org.bukkit.Material">): string;
  getMainLevelName(): string;
  getMappingsVersion(): string;
  getMaterial(arg0: string, arg1: number): JavaOpaque<"org.bukkit.Material">;
  getProtocolVersion(): number;
  getSpawnEggLayerColor(arg0: JavaOpaque<"org.bukkit.entity.EntityType">, arg1: number): JavaOpaque<"org.bukkit.Color">;
  getStatisticCriteriaKey(arg0: JavaOpaque<"org.bukkit.Statistic">): string;
  getTranslationKey(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): string;
  getTranslationKey(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): string;
  getTranslationKey(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): string;
  getVersionFetcher(): JavaOpaque<"com.destroystokyo.paper.util.VersionFetcher">;
  gsonComponentSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.gson.GsonComponentSerializer">;
  hasDefaultEntityAttributes(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  isSupportedApiVersion(arg0: string): boolean;
  isValidRepairItemStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  legacyComponentSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer">;
  loadAdvancement(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: string): JavaOpaque<"org.bukkit.advancement.Advancement">;
  modifyItemStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: string): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  nextEntityId(): number;
  plainComponentSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.plain.PlainComponentSerializer">;
  plainTextSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer">;
  processClass(arg0: JavaOpaque<"org.bukkit.plugin.PluginDescriptionFile">, arg1: string, arg2: Array<number>): Array<number>;
  removeAdvancement(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  /** @throws java.io.IOException */
  resolveWithContext(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"org.bukkit.command.CommandSender">, arg2: JavaOpaque<"org.bukkit.entity.Entity">, arg3: boolean): JavaOpaque<"net.kyori.adventure.text.Component">;
  serializeEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">, ...arg1: Array<JavaOpaque<"io.papermc.paper.entity.EntitySerializationFlag">>): Array<number>;
  serializeItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): Array<number>;
  serializeItemAsJson(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"com.google.gson.JsonObject">;
  serializeStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaMap<string, object>;
  setBiomeKey(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: number, arg2: number, arg3: number, arg4: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  toLegacy(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.Material">;
}
export type CraftMagicNumbers = CraftMagicNumbersMembers & JavaOpaque<"org.bukkit.UnsafeValues">;
export interface CraftMagicNumbersStatics {
  readonly DISABLE_OLD_API_SUPPORT: boolean;
  readonly INSTANCE: CraftMagicNumbers;
  getBlock(arg0: JavaOpaque<"org.bukkit.Material">): j_net_minecraft_world_level_block.Block;
  getBlock(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): j_net_minecraft_world_level_block_state.BlockState;
  getBlock(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): j_net_minecraft_world_level_block_state.BlockState;
  getItem(arg0: JavaOpaque<"org.bukkit.Material">): j_net_minecraft_world_item.Item;
  getItem(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): j_net_minecraft_world_item.Item;
  getMaterial(arg0: j_net_minecraft_world_item.Item): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: j_net_minecraft_world_level_block.Block): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOpaque<"org.bukkit.material.MaterialData">;
  getMaterialData(arg0: j_net_minecraft_world_item.Item): JavaOpaque<"org.bukkit.material.MaterialData">;
  isLegacy(arg0: JavaOpaque<"org.bukkit.plugin.PluginDescriptionFile">): boolean;
  toLegacyData(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
}

/** JVM class org.bukkit.craftbukkit.util.CraftNamespacedKey. */
export interface CraftNamespacedKeyMembers {
}
export type CraftNamespacedKey = CraftNamespacedKeyMembers;
export interface CraftNamespacedKeyStatics {
  new(): CraftNamespacedKey;
  fromMinecraft(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"org.bukkit.NamespacedKey">;
  fromString(arg0: string): JavaOpaque<"org.bukkit.NamespacedKey">;
  toMinecraft(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): j_net_minecraft_resources.ResourceLocation;
}

/** JVM class org.bukkit.craftbukkit.util.CraftNBTTagConfigSerializer. */
export interface CraftNBTTagConfigSerializerMembers {
}
export type CraftNBTTagConfigSerializer = CraftNBTTagConfigSerializerMembers;
export interface CraftNBTTagConfigSerializerStatics {
  new(): CraftNBTTagConfigSerializer;
  deserialize(arg0: object): j_net_minecraft_nbt.Tag;
  serialize(arg0: j_net_minecraft_nbt.Tag): string;
}

/** JVM class org.bukkit.craftbukkit.util.CraftRayTraceResult. */
export interface CraftRayTraceResultMembers {
}
export type CraftRayTraceResult = CraftRayTraceResultMembers;
export interface CraftRayTraceResultStatics {
  convertFromInternal(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_phys.HitResult | null): JavaOpaque<"org.bukkit.util.RayTraceResult"> | null;
}

/** JVM class org.bukkit.craftbukkit.util.CraftSpawnCategory. */
export interface CraftSpawnCategoryMembers {
}
export type CraftSpawnCategory = CraftSpawnCategoryMembers;
export interface CraftSpawnCategoryStatics {
  new(): CraftSpawnCategory;
  getConfigNameSpawnLimit(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): string;
  getConfigNameTicksPerSpawn(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): string;
  getDefaultTicksPerSpawn(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): bigint;
  isValidForLimits(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): boolean;
  toBukkit(arg0: j_net_minecraft_world_entity.MobCategory): JavaOpaque<"org.bukkit.entity.SpawnCategory">;
  toNMS(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): j_net_minecraft_world_entity.MobCategory;
}

/** JVM record org.bukkit.craftbukkit.util.CraftStructureSearchResult. */
export interface CraftStructureSearchResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"org.bukkit.util.StructureSearchResult">];
  equals(arg0: object): boolean;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getStructure(): JavaOpaque<"org.bukkit.generator.structure.Structure">;
  hashCode(): number;
  location(): JavaOpaque<"org.bukkit.Location">;
  structure(): JavaOpaque<"org.bukkit.generator.structure.Structure">;
  toString(): string;
}
export type CraftStructureSearchResult = CraftStructureSearchResultMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"org.bukkit.util.StructureSearchResult">;
export interface CraftStructureSearchResultStatics {
  new(arg0: JavaOpaque<"org.bukkit.generator.structure.Structure">, arg1: JavaOpaque<"org.bukkit.Location">): CraftStructureSearchResult;
}

/** JVM class org.bukkit.craftbukkit.util.CraftStructureTransformer. */
export interface CraftStructureTransformerMembers {
  canTransformBlocks(): boolean;
  discard(): void;
  transformCraftState(arg0: j_org_bukkit_craftbukkit_block.CraftBlockState): j_org_bukkit_craftbukkit_block.CraftBlockState;
  transformEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
}
export type CraftStructureTransformer = CraftStructureTransformerMembers;
export interface CraftStructureTransformerStatics {
  new(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level.ChunkPos, arg2: JavaCollection<JavaOpaque<"org.bukkit.util.BlockTransformer">>, arg3: JavaCollection<JavaOpaque<"org.bukkit.util.EntityTransformer">>): CraftStructureTransformer;
  new(arg0: JavaOpaque<"org.bukkit.event.world.AsyncStructureGenerateEvent$Cause">, arg1: j_net_minecraft_world_level.WorldGenLevel, arg2: j_net_minecraft_world_level.StructureManager, arg3: j_net_minecraft_world_level_levelgen_structure.Structure, arg4: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg5: j_net_minecraft_world_level.ChunkPos): CraftStructureTransformer;
}

/** JVM class org.bukkit.craftbukkit.util.CraftVector. */
export interface CraftVectorMembers {
}
export type CraftVector = CraftVectorMembers;
export interface CraftVectorStatics {
  toBlockPos(arg0: JavaOpaque<"org.bukkit.util.Vector">): j_net_minecraft_core.BlockPos;
  toBukkit(arg0: j_net_minecraft_core.BlockPos): JavaOpaque<"org.bukkit.util.Vector">;
  toBukkit(arg0: j_net_minecraft_world_phys.Vec3): JavaOpaque<"org.bukkit.util.Vector">;
  toVec3(arg0: JavaOpaque<"org.bukkit.util.Vector">): j_net_minecraft_world_phys.Vec3;
}

/** JVM class org.bukkit.craftbukkit.util.CraftVoxelShape. */
export interface CraftVoxelShapeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.util.VoxelShape">];
  getBoundingBoxes(): JavaCollection<JavaOpaque<"org.bukkit.util.BoundingBox">>;
  overlaps(arg0: JavaOpaque<"org.bukkit.util.BoundingBox">): boolean;
}
export type CraftVoxelShape = CraftVoxelShapeMembers & JavaOpaque<"org.bukkit.util.VoxelShape">;
export interface CraftVoxelShapeStatics {
  new(arg0: j_net_minecraft_world_phys_shapes.VoxelShape): CraftVoxelShape;
}

/** JVM abstract org.bukkit.craftbukkit.util.DelegatedGeneratorAccess. */
export interface DelegatedGeneratorAccessMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.WorldGenLevel];
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): boolean;
  addParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  canSeeSky(arg0: j_net_minecraft_core.BlockPos): boolean;
  canSeeSkyFromBelowWater(arg0: j_net_minecraft_core.BlockPos): boolean;
  clip(arg0: j_net_minecraft_world_level.ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  clip(arg0: j_net_minecraft_world_level.ClipContext, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.BlockHitResult;
  clipIncludingBorder(arg0: j_net_minecraft_world_level.ClipContext): j_net_minecraft_world_phys.BlockHitResult;
  clipWithInteractionOverride(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.VoxelShape, arg4: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.BlockHitResult;
  collidesWithSuffocatingBlock(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): boolean;
  containsAnyLiquid(arg0: j_net_minecraft_world_phys.AABB): boolean;
  dayTime(): bigint;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity): boolean;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity, arg3: number): boolean;
  dimensionType(): j_net_minecraft_world_level_dimension.DimensionType;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  ensureCanWrite(arg0: j_net_minecraft_core.BlockPos): boolean;
  findFreePosition(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys_shapes.VoxelShape, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: number, arg5: number): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  findSupportingBlock(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): JavaOptional<j_net_minecraft_core.BlockPos>;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gameEvent(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  gameEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_core.BlockPos): void;
  gameEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_world_phys.Vec3): void;
  getBestNeighborSignal(arg0: j_net_minecraft_core.BlockPos): number;
  getBiome(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getBiomeManager(): j_net_minecraft_world_level_biome.BiomeManager;
  getBlockAndLiquidCollisions(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape>;
  getBlockCollisions(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape>;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity;
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): JavaOptional<T>;
  getBlockFloorHeight(arg0: j_net_minecraft_core.BlockPos): number;
  getBlockFloorHeight(arg0: j_net_minecraft_world_phys_shapes.VoxelShape, arg1: JavaSupplier<j_net_minecraft_world_phys_shapes.VoxelShape>): number;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  getBlockStates(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_block_state.BlockState]>;
  getBlockStatesIfLoaded(arg0: j_net_minecraft_world_phys.AABB): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level_block_state.BlockState]>;
  getBlockTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_block.Block>;
  getBlockTint(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.ColorResolver): number;
  getBrightness(arg0: j_net_minecraft_world_level.LightLayer, arg1: j_net_minecraft_core.BlockPos): number;
  getChunk(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunk(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunkForCollisions(arg0: number, arg1: number): j_net_minecraft_world_level.BlockGetter;
  getChunkIfLoadedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess | null;
  getChunkSource(): j_net_minecraft_world_level_chunk.ChunkSource;
  getCollisions(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): Iterable<j_net_minecraft_world_phys_shapes.VoxelShape>;
  getControlInputSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: boolean): number;
  getCurrentDifficultyAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world.DifficultyInstance;
  getDelegate(): j_net_minecraft_world_level.WorldGenLevel;
  getDifficulty(): j_net_minecraft_world.Difficulty;
  getDirectSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): number;
  getDirectSignalTo(arg0: j_net_minecraft_core.BlockPos): number;
  getEntities(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_entity.Entity>;
  getEntities(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaList<j_net_minecraft_world_entity.Entity>;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getEntitiesOfClass<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_phys.AABB): JavaList<T>;
  getEntitiesOfClass<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaClass<T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getEntityCollisions(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): JavaList<j_net_minecraft_world_phys_shapes.VoxelShape>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState | null;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_material.Fluid>;
  getHeight(): number;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getHeightmapPos(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getLevelData(): j_net_minecraft_world_level_storage.LevelData;
  getLightEmission(arg0: j_net_minecraft_core.BlockPos): number;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getLightLevelDependentMagicValue(arg0: j_net_minecraft_core.BlockPos): number;
  getMaxLocalRawBrightness(arg0: j_net_minecraft_core.BlockPos): number;
  getMaxLocalRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getMaxSectionY(): number;
  getMaxY(): number;
  getMinSectionY(): number;
  getMinY(): number;
  getMinecraftWorld(): j_net_minecraft_server_level.ServerLevel;
  getMoonBrightness(): number;
  getMoonPhase(): number;
  getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<j_net_minecraft_world_entity.Entity>): j_net_minecraft_world_entity_player.Player;
  getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): j_net_minecraft_world_entity_player.Player;
  getNearestPlayer(arg0: j_net_minecraft_world_entity.Entity, arg1: number): j_net_minecraft_world_entity_player.Player;
  getNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getPathfindingCostFromLightLevels(arg0: j_net_minecraft_core.BlockPos): number;
  getPlayerByUUID(arg0: JavaOpaque<"java.util.UUID">): j_net_minecraft_world_entity_player.Player;
  getRandom(): j_net_minecraft_util.RandomSource;
  getRawBrightness(arg0: j_net_minecraft_core.BlockPos, arg1: number): number;
  getSeaLevel(): number;
  getSectionIndex(arg0: number): number;
  getSectionIndexFromSectionY(arg0: number): number;
  getSectionYFromSectionIndex(arg0: number): number;
  getSectionsCount(): number;
  getSeed(): bigint;
  getServer(): j_net_minecraft_server.MinecraftServer;
  getShade(arg0: j_net_minecraft_core.Direction, arg1: boolean): number;
  getSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): number;
  getSkyDarken(): number;
  getTimeOfDay(arg0: number): number;
  getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder;
  hasChunk(arg0: number, arg1: number): boolean;
  hasChunkAt(arg0: number, arg1: number): boolean;
  hasChunkAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
  hasChunksAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos): boolean;
  hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  hasNeighborSignal(arg0: j_net_minecraft_core.BlockPos): boolean;
  hasSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction): boolean;
  holderLookup<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_core.HolderLookup<T>;
  isBlockInLine(arg0: j_net_minecraft_world_level.ClipBlockStateContext): j_net_minecraft_world_phys.BlockHitResult;
  isClientSide(): boolean;
  isEmptyBlock(arg0: j_net_minecraft_core.BlockPos): boolean;
  isFluidAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_material.FluidState>): boolean;
  isInsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: number): boolean;
  isOutsideBuildHeight(arg0: j_net_minecraft_core.BlockPos): boolean;
  isStateAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity): boolean;
  isUnobstructed(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys_shapes.VoxelShape): boolean;
  isUnobstructed(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): boolean;
  isWaterAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  levelEvent(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  levelEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_core.BlockPos, arg3: number): void;
  neighborShapeChanged(arg0: j_net_minecraft_core.Direction, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number, arg5: number): void;
  nextSubTickCount(): bigint;
  noBlockCollision(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): boolean;
  noCollision(arg0: j_net_minecraft_world_entity.Entity): boolean;
  noCollision(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB): boolean;
  noCollision(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB, arg2: boolean): boolean;
  noCollision(arg0: j_net_minecraft_world_phys.AABB): boolean;
  playSound(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number): void;
  players(): JavaList<j_net_minecraft_world_entity_player.Player>;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  removeBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_material.Fluid, arg2: number): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_material.Fluid, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): void;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): boolean;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
  setCurrentlyGenerating(arg0: JavaSupplier<string>): void;
  setDelegate(arg0: j_net_minecraft_world_level.WorldGenLevel): void;
  updateNeighborsAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block): void;
}
export type DelegatedGeneratorAccess = DelegatedGeneratorAccessMembers & j_net_minecraft_world_level.WorldGenLevel;
export interface DelegatedGeneratorAccessStatics {
}

/** JVM class org.bukkit.craftbukkit.util.DummyGeneratorAccess. */
export interface DummyGeneratorAccessMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.WorldGenLevel];
  addParticle(arg0: j_net_minecraft_core_particles.ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: j_net_minecraft_world_entity.Entity, arg3: number): boolean;
  dimensionType(): j_net_minecraft_world_level_dimension.DimensionType;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context): void;
  getBiomeManager(): j_net_minecraft_world_level_biome.BiomeManager;
  getBlockEntity(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_entity.BlockEntity;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_block.Block>;
  getChunk(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_chunk_status.ChunkStatus, arg3: boolean): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunkIfLoadedImmediately(arg0: number, arg1: number): j_net_minecraft_world_level_chunk.ChunkAccess;
  getChunkSource(): j_net_minecraft_world_level_chunk.ChunkSource;
  getCurrentDifficultyAt(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world.DifficultyInstance;
  getEntities(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<j_net_minecraft_world_entity.Entity>): JavaList<j_net_minecraft_world_entity.Entity>;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_level_entity.EntityTypeTest<j_net_minecraft_world_entity.Entity, T>, arg1: j_net_minecraft_world_phys.AABB, arg2: JavaPredicate<T>): JavaList<T>;
  getFluidIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.FluidState;
  getFluidTicks(): j_net_minecraft_world_ticks.LevelTickAccess<j_net_minecraft_world_level_material.Fluid>;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getLevelData(): j_net_minecraft_world_level_storage.LevelData;
  getLightEngine(): j_net_minecraft_world_level_lighting.LevelLightEngine;
  getRandom(): j_net_minecraft_util.RandomSource;
  getSeaLevel(): number;
  getSeed(): bigint;
  getServer(): j_net_minecraft_server.MinecraftServer;
  getShade(arg0: j_net_minecraft_core.Direction, arg1: boolean): number;
  getSkyDarken(): number;
  getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>;
  getWorldBorder(): j_net_minecraft_world_level_border.WorldBorder;
  isClientSide(): boolean;
  isFluidAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_material.FluidState>): boolean;
  isStateAtPosition(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  levelEvent(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_core.BlockPos, arg3: number): void;
  nextSubTickCount(): bigint;
  playSound(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundSource, arg4: number, arg5: number): void;
  players(): JavaList<j_net_minecraft_world_entity_player.Player>;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  removeBlock(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): boolean;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_material.Fluid, arg2: number): void;
  scheduleTick(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_material.Fluid, arg2: number, arg3: j_net_minecraft_world_ticks.TickPriority): void;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
}
export type DummyGeneratorAccess = DummyGeneratorAccessMembers & j_net_minecraft_world_level.WorldGenLevel;
export interface DummyGeneratorAccessStatics {
  readonly INSTANCE: j_net_minecraft_world_level.WorldGenLevel;
}

/** JVM class org.bukkit.craftbukkit.util.ForwardLogHandler. */
export interface ForwardLogHandlerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.logging.ConsoleHandler">];
  /** @throws java.lang.SecurityException */
  close(): void;
  flush(): void;
  publish(arg0: JavaOpaque<"java.util.logging.LogRecord">): void;
}
export type ForwardLogHandler = ForwardLogHandlerMembers & JavaOpaque<"java.util.logging.ConsoleHandler">;
export interface ForwardLogHandlerStatics {
  new(): ForwardLogHandler;
}

/** JVM interface org.bukkit.craftbukkit.util.Handleable. */
export interface HandleableMembers<M = unknown> {
  getHandle(): M;
}
export type Handleable<M = unknown> = HandleableMembers<M>;
export interface HandleableStatics {
}

/** JVM class org.bukkit.craftbukkit.util.JsonHelper. */
export interface JsonHelperMembers {
}
export type JsonHelper = JsonHelperMembers;
export interface JsonHelperStatics {
  getObjectOrNull(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"com.google.gson.JsonObject"> | null;
  getOrCreateObject(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"com.google.gson.JsonObject">;
  getPrimitiveOrNull(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): JavaOpaque<"com.google.gson.JsonPrimitive"> | null;
  getStringOrNull(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string): string | null;
  setOrRemove(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: string, arg2: JavaOpaque<"com.google.gson.JsonElement"> | null): void;
}

/** JVM abstract org.bukkit.craftbukkit.util.LazyHashSet. */
export interface LazyHashSetMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaSet<E>];
  add(arg0: E): boolean;
  addAll(arg0: JavaCollection<E>): boolean;
  clear(): void;
  contains(arg0: object): boolean;
  containsAll(arg0: JavaCollection<object>): boolean;
  equals(arg0: object): boolean;
  getReference(): JavaSet<E>;
  hashCode(): number;
  isEmpty(): boolean;
  isLazy(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [E]>;
  remove(arg0: object): boolean;
  removeAll(arg0: JavaCollection<object>): boolean;
  retainAll(arg0: JavaCollection<object>): boolean;
  size(): number;
  toArray(): Array<object>;
  toArray<T>(arg0: Array<T>): Array<T>;
  toString(): string;
}
export type LazyHashSet<E = unknown> = LazyHashSetMembers<E> & JavaSet<E>;
export interface LazyHashSetStatics {
}

/** JVM class org.bukkit.craftbukkit.util.LazyPlayerSet. */
export interface LazyPlayerSetMembers {
  readonly __javaSupertypes?: readonly [LazyHashSet<JavaOpaque<"org.bukkit.entity.Player">>];
}
export type LazyPlayerSet = LazyPlayerSetMembers & LazyHashSet<JavaOpaque<"org.bukkit.entity.Player">>;
export interface LazyPlayerSetStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer): LazyPlayerSet;
  makePlayerSet(arg0: j_net_minecraft_server.MinecraftServer): JavaSet<JavaOpaque<"org.bukkit.entity.Player">>;
}

/** JVM class org.bukkit.craftbukkit.util.LimitedClassRemapper. */
export interface LimitedClassRemapperMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.objectweb.asm.commons.ClassRemapper">];
  visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: Array<string>): void;
}
export type LimitedClassRemapper = LimitedClassRemapperMembers & JavaOpaque<"org.objectweb.asm.commons.ClassRemapper">;
export interface LimitedClassRemapperStatics {
  new(arg0: JavaOpaque<"org.objectweb.asm.ClassVisitor">, arg1: JavaOpaque<"org.objectweb.asm.commons.Remapper">): LimitedClassRemapper;
}

/** JVM class org.bukkit.craftbukkit.util.RandomSourceWrapper. */
export interface RandomSourceWrapperMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util.RandomSource];
  fork(): j_net_minecraft_util.RandomSource;
  forkPositional(): j_net_minecraft_world_level_levelgen.PositionalRandomFactory;
  nextBoolean(): boolean;
  nextDouble(): number;
  nextFloat(): number;
  nextGaussian(): number;
  nextInt(): number;
  nextInt(arg0: number): number;
  nextLong(): bigint;
  setSeed(arg0: bigint): void;
}
export type RandomSourceWrapper = RandomSourceWrapperMembers & j_net_minecraft_util.RandomSource;
export interface RandomSourceWrapperStatics {
  new(arg0: JavaOpaque<"java.util.Random">): RandomSourceWrapper;
}

/** JVM class org.bukkit.craftbukkit.util.RandomSourceWrapper$RandomWrapper. */
export interface RandomSourceWrapper_RandomWrapperMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Random">];
  nextBoolean(): boolean;
  nextDouble(): number;
  nextFloat(): number;
  nextGaussian(): number;
  nextInt(): number;
  nextInt(arg0: number): number;
  nextInt(arg0: number, arg1: number): number;
  nextLong(): bigint;
  setSeed(arg0: bigint): void;
}
export type RandomSourceWrapper_RandomWrapper = RandomSourceWrapper_RandomWrapperMembers & JavaOpaque<"java.util.Random">;
export interface RandomSourceWrapper_RandomWrapperStatics {
  new(arg0: j_net_minecraft_util.RandomSource): RandomSourceWrapper_RandomWrapper;
}

/** JVM class org.bukkit.craftbukkit.util.ServerShutdownThread. */
export interface ServerShutdownThreadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Thread">];
  run(): void;
}
export type ServerShutdownThread = ServerShutdownThreadMembers & JavaOpaque<"java.lang.Thread">;
export interface ServerShutdownThreadStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer): ServerShutdownThread;
}

/** JVM class org.bukkit.craftbukkit.util.TransformerGeneratorAccess. */
export interface TransformerGeneratorAccessMembers {
  readonly __javaSupertypes?: readonly [DelegatedGeneratorAccess];
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  addFreshEntity(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): boolean;
  canTransformBlocks(): boolean;
  getStructureTransformer(): CraftStructureTransformer;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number): boolean;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: number, arg3: number): boolean;
  setCraftBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_org_bukkit_craftbukkit_block.CraftBlockState, arg2: number): boolean;
  setCraftBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_org_bukkit_craftbukkit_block.CraftBlockState, arg2: number, arg3: number): boolean;
  setStructureTransformer(arg0: CraftStructureTransformer): void;
}
export type TransformerGeneratorAccess = TransformerGeneratorAccessMembers & DelegatedGeneratorAccess;
export interface TransformerGeneratorAccessStatics {
  new(): TransformerGeneratorAccess;
}

/** JVM class org.bukkit.craftbukkit.util.UnsafeList. */
export interface UnsafeListMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.AbstractList", [E]>, JavaList<E>, JavaOpaque<"java.util.RandomAccess">, JavaOpaque<"java.lang.Cloneable">, JavaOpaque<"java.io.Serializable">];
  add(arg0: number, arg1: E): void;
  add(arg0: E): boolean;
  clear(): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  contains(arg0: object): boolean;
  get(arg0: number): E;
  indexOf(arg0: object): number;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [E]>;
  remove(arg0: number): E;
  remove(arg0: object): boolean;
  set(arg0: number, arg1: E): E;
  size(): number;
  trimToSize(): void;
  unsafeGet(arg0: number): E;
}
export type UnsafeList<E = unknown> = UnsafeListMembers<E> & JavaOpaque<"java.util.AbstractList", [E]> & JavaList<E> & JavaOpaque<"java.util.RandomAccess"> & JavaOpaque<"java.lang.Cloneable"> & JavaOpaque<"java.io.Serializable">;
export interface UnsafeListStatics {
  new<E>(): UnsafeList<E>;
  new<E>(arg0: number): UnsafeList<E>;
  new<E>(arg0: number, arg1: number): UnsafeList<E>;
}

/** JVM class org.bukkit.craftbukkit.util.UnsafeList$Itr. */
export interface UnsafeList_ItrMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Iterator", [JavaOpaque<"E">]>];
  hasNext(): boolean;
  next(): JavaOpaque<"E">;
  remove(): void;
  reset(): void;
  valid: boolean;
}
export type UnsafeList_Itr = UnsafeList_ItrMembers & JavaOpaque<"java.util.Iterator", [JavaOpaque<"E">]>;
export interface UnsafeList_ItrStatics {
  new(arg0: UnsafeList): UnsafeList_Itr;
}

/** JVM class org.bukkit.craftbukkit.util.Versioning. */
export interface VersioningMembers {
}
export type Versioning = VersioningMembers;
export interface VersioningStatics {
  new(): Versioning;
  getBukkitVersion(): string;
}

/** JVM abstract org.bukkit.craftbukkit.util.Waitable. */
export interface WaitableMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaRunnable];
  /** @throws java.lang.InterruptedException @throws java.util.concurrent.ExecutionException */
  get(): T;
  run(): void;
}
export type Waitable<T = unknown> = WaitableMembers<T> & JavaRunnable;
export interface WaitableStatics {
}

/** JVM class org.bukkit.craftbukkit.util.WeakCollection. */
export interface WeakCollectionMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaCollection<E>];
  add(arg0: E): boolean;
  addAll(arg0: JavaCollection<E>): boolean;
  clear(): void;
  contains(arg0: object): boolean;
  containsAll(arg0: JavaCollection<object>): boolean;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [E]>;
  remove(arg0: object): boolean;
  removeAll(arg0: JavaCollection<object>): boolean;
  retainAll(arg0: JavaCollection<object>): boolean;
  size(): number;
  toArray(): Array<object>;
  toArray<T>(arg0: Array<T>): Array<T>;
}
export type WeakCollection<E = unknown> = WeakCollectionMembers<E> & JavaCollection<E>;
export interface WeakCollectionStatics {
  new<E>(): WeakCollection<E>;
}

/** JVM class org.bukkit.craftbukkit.util.WorldUUID. */
export interface WorldUUIDMembers {
}
export type WorldUUID = WorldUUIDMembers;
export interface WorldUUIDStatics {
  getOrCreate(arg0: JavaOpaque<"java.io.File">): JavaOpaque<"java.util.UUID">;
}
