// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dedicated from './net.minecraft.server.dedicated.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_players from './net.minecraft.server.players.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_chunk_status from './net.minecraft.world.level.chunk.status.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';
import type * as j_org_bukkit_craftbukkit_map from './org.bukkit.craftbukkit.map.generated.js';
import type * as j_org_bukkit_craftbukkit_metadata from './org.bukkit.craftbukkit.metadata.generated.js';
import type * as j_org_bukkit_craftbukkit_packs from './org.bukkit.craftbukkit.packs.generated.js';
import type * as j_org_bukkit_craftbukkit_scheduler from './org.bukkit.craftbukkit.scheduler.generated.js';
import type * as j_org_bukkit_craftbukkit_scoreboard from './org.bukkit.craftbukkit.scoreboard.generated.js';
import type * as j_org_bukkit_craftbukkit_util from './org.bukkit.craftbukkit.util.generated.js';

/** JVM class org.bukkit.craftbukkit.CraftArt. */
export interface CraftArtMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.Art">, j_net_minecraft_world_entity_decoration.PaintingVariant]>, JavaOpaque<"org.bukkit.Art">];
  assetId(): JavaOpaque<"net.kyori.adventure.key.Key">;
  author(): JavaOpaque<"net.kyori.adventure.text.Component">;
  getBlockHeight(): number;
  getBlockWidth(): number;
  getId(): number;
  title(): JavaOpaque<"net.kyori.adventure.text.Component">;
}
export type CraftArt = CraftArtMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.Art">, j_net_minecraft_world_entity_decoration.PaintingVariant]> & JavaOpaque<"org.bukkit.Art">;
export interface CraftArtStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_decoration.PaintingVariant>): CraftArt;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.Art">): j_net_minecraft_world_entity_decoration.PaintingVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.Art">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_decoration.PaintingVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_decoration.PaintingVariant>): JavaOpaque<"org.bukkit.Art">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_decoration.PaintingVariant): JavaOpaque<"org.bukkit.Art">;
}

/** JVM class org.bukkit.craftbukkit.CraftChunk. */
export interface CraftChunkMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Chunk">];
  addPluginChunkTicket(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.block.Biome">): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): boolean;
  equals(arg0: object): boolean;
  getBlock(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Block">;
  getChunkSnapshot(): JavaOpaque<"org.bukkit.ChunkSnapshot">;
  getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): JavaOpaque<"org.bukkit.ChunkSnapshot">;
  getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): JavaOpaque<"org.bukkit.ChunkSnapshot">;
  getCraftWorld(): CraftWorld;
  getEntities(): Array<JavaOpaque<"org.bukkit.entity.Entity">>;
  getHandle(arg0: j_net_minecraft_world_level_chunk_status.ChunkStatus): j_net_minecraft_world_level_chunk.ChunkAccess;
  getInhabitedTime(): bigint;
  getLoadLevel(): JavaOpaque<"org.bukkit.Chunk$LoadLevel">;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlayersSeeingChunk(): JavaCollection<JavaOpaque<"org.bukkit.entity.Player">>;
  getPluginChunkTickets(): JavaCollection<JavaOpaque<"org.bukkit.plugin.Plugin">>;
  getStructures(): JavaCollection<JavaOpaque<"org.bukkit.generator.structure.GeneratedStructure">>;
  getStructures(arg0: JavaOpaque<"org.bukkit.generator.structure.Structure">): JavaCollection<JavaOpaque<"org.bukkit.generator.structure.GeneratedStructure">>;
  getTileEntities(): Array<JavaOpaque<"org.bukkit.block.BlockState">>;
  getTileEntities(arg0: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">>, arg1: boolean): JavaCollection<JavaOpaque<"org.bukkit.block.BlockState">>;
  getTileEntities(arg0: boolean): Array<JavaOpaque<"org.bukkit.block.BlockState">>;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  getX(): number;
  getZ(): number;
  hashCode(): number;
  isEntitiesLoaded(): boolean;
  isForceLoaded(): boolean;
  isGenerated(): boolean;
  isLoaded(): boolean;
  isSlimeChunk(): boolean;
  load(): boolean;
  load(arg0: boolean): boolean;
  removePluginChunkTicket(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): boolean;
  setForceLoaded(arg0: boolean): void;
  setInhabitedTime(arg0: bigint): void;
  toString(): string;
  unload(): boolean;
  unload(arg0: boolean): boolean;
}
export type CraftChunk = CraftChunkMembers & JavaOpaque<"org.bukkit.Chunk">;
export interface CraftChunkStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number): CraftChunk;
  new(arg0: j_net_minecraft_world_level_chunk.LevelChunk): CraftChunk;
  getEmptyChunkSnapshot(arg0: number, arg1: number, arg2: CraftWorld, arg3: boolean, arg4: boolean): JavaOpaque<"org.bukkit.ChunkSnapshot">;
}

/** JVM class org.bukkit.craftbukkit.CraftChunkSnapshot. */
export interface CraftChunkSnapshotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.ChunkSnapshot">];
  contains(arg0: JavaOpaque<"org.bukkit.block.Biome">): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): boolean;
  getBiome(arg0: number, arg1: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBlockData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
  getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
  getBlockType(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.Material">;
  getCaptureFullTime(): bigint;
  getData(arg0: number, arg1: number, arg2: number): number;
  getHighestBlockYAt(arg0: number, arg1: number): number;
  getRawBiomeTemperature(arg0: number, arg1: number): number;
  getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
  getWorldName(): string;
  getX(): number;
  getZ(): number;
  isSectionEmpty(arg0: number): boolean;
}
export type CraftChunkSnapshot = CraftChunkSnapshotMembers & JavaOpaque<"org.bukkit.ChunkSnapshot">;
export interface CraftChunkSnapshotStatics {
}

/** JVM class org.bukkit.craftbukkit.CraftCrashReport. */
export interface CraftCrashReportMembers {
  readonly __javaSupertypes?: readonly [JavaSupplier<string>];
  get(): string;
}
export type CraftCrashReport = CraftCrashReportMembers & JavaSupplier<string>;
export interface CraftCrashReportStatics {
  new(): CraftCrashReport;
}

/** JVM class org.bukkit.craftbukkit.CraftEffect. */
export interface CraftEffectMembers {
}
export type CraftEffect = CraftEffectMembers;
export interface CraftEffectStatics {
  new(): CraftEffect;
  getDataValue<T>(arg0: JavaOpaque<"org.bukkit.Effect">, arg1: T): number;
}

/** JVM class org.bukkit.craftbukkit.CraftEquipmentSlot. */
export interface CraftEquipmentSlotMembers {
}
export type CraftEquipmentSlot = CraftEquipmentSlotMembers;
export interface CraftEquipmentSlotStatics {
  getHand(arg0: j_net_minecraft_world.InteractionHand): JavaOpaque<"org.bukkit.inventory.EquipmentSlot">;
  getHand(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): j_net_minecraft_world.InteractionHand;
  getNMS(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): j_net_minecraft_world_entity.EquipmentSlot;
  getNMSGroup(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlotGroup">): j_net_minecraft_world_entity.EquipmentSlotGroup;
  getSlot(arg0: j_net_minecraft_world_entity.EquipmentSlot): JavaOpaque<"org.bukkit.inventory.EquipmentSlot">;
  getSlotGroup(arg0: j_net_minecraft_world_entity.EquipmentSlotGroup): JavaOpaque<"org.bukkit.inventory.EquipmentSlotGroup">;
}

/** JVM class org.bukkit.craftbukkit.CraftExplosionResult. */
export interface CraftExplosionResultMembers {
}
export type CraftExplosionResult = CraftExplosionResultMembers;
export interface CraftExplosionResultStatics {
  toExplosionResult(arg0: j_net_minecraft_world_level.Explosion_BlockInteraction): JavaOpaque<"org.bukkit.ExplosionResult">;
}

/** JVM class org.bukkit.craftbukkit.CraftFluid. */
export interface CraftFluidMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.Fluid">, j_net_minecraft_world_level_material.Fluid]>, JavaOpaque<"org.bukkit.Fluid">];
}
export type CraftFluid = CraftFluidMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.Fluid">, j_net_minecraft_world_level_material.Fluid]> & JavaOpaque<"org.bukkit.Fluid">;
export interface CraftFluidStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_material.Fluid>): CraftFluid;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.Fluid">): j_net_minecraft_world_level_material.Fluid;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_material.Fluid): JavaOpaque<"org.bukkit.Fluid">;
}

/** JVM class org.bukkit.craftbukkit.CraftFluidCollisionMode. */
export interface CraftFluidCollisionModeMembers {
}
export type CraftFluidCollisionMode = CraftFluidCollisionModeMembers;
export interface CraftFluidCollisionModeStatics {
  toFluid(arg0: JavaOpaque<"org.bukkit.FluidCollisionMode">): j_net_minecraft_world_level.ClipContext_Fluid;
}

/** JVM class org.bukkit.craftbukkit.CraftGameEvent. */
export interface CraftGameEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.GameEvent">, JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_level_gameevent.GameEvent]>];
  equals(arg0: object): boolean;
  getHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getRange(): number;
  getVibrationLevel(): number;
  hashCode(): number;
  toString(): string;
}
export type CraftGameEvent = CraftGameEventMembers & JavaOpaque<"org.bukkit.GameEvent"> & JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_level_gameevent.GameEvent]>;
export interface CraftGameEventStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>): CraftGameEvent;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.GameEvent">): j_net_minecraft_world_level_gameevent.GameEvent;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_gameevent.GameEvent): JavaOpaque<"org.bukkit.GameEvent">;
}

/** JVM class org.bukkit.craftbukkit.CraftHeightMap. */
export interface CraftHeightMapMembers {
}
export type CraftHeightMap = CraftHeightMapMembers;
export interface CraftHeightMapStatics {
  fromNMS(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types): JavaOpaque<"org.bukkit.HeightMap">;
  toNMS(arg0: JavaOpaque<"org.bukkit.HeightMap">): j_net_minecraft_world_level_levelgen.Heightmap_Types;
}

/** JVM class org.bukkit.craftbukkit.CraftInput. */
export interface CraftInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Input">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isBackward(): boolean;
  isForward(): boolean;
  isJump(): boolean;
  isLeft(): boolean;
  isRight(): boolean;
  isSneak(): boolean;
  isSprint(): boolean;
  toString(): string;
}
export type CraftInput = CraftInputMembers & JavaOpaque<"org.bukkit.Input">;
export interface CraftInputStatics {
  new(arg0: j_net_minecraft_world_entity_player.Input_2): CraftInput;
}

/** JVM class org.bukkit.craftbukkit.CraftJukeboxSong. */
export interface CraftJukeboxSongMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item.JukeboxSong]>, JavaOpaque<"org.bukkit.JukeboxSong">];
  getTranslationKey(): string;
}
export type CraftJukeboxSong = CraftJukeboxSongMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item.JukeboxSong]> & JavaOpaque<"org.bukkit.JukeboxSong">;
export interface CraftJukeboxSongStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.JukeboxSong>): CraftJukeboxSong;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.JukeboxSong">): j_net_minecraft_world_item.JukeboxSong;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.JukeboxSong">): j_net_minecraft_core.Holder<j_net_minecraft_world_item.JukeboxSong>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.JukeboxSong>): JavaOpaque<"org.bukkit.JukeboxSong">;
  minecraftToBukkit(arg0: j_net_minecraft_world_item.JukeboxSong): JavaOpaque<"org.bukkit.JukeboxSong">;
}

/** JVM class org.bukkit.craftbukkit.CraftLootTable. */
export interface CraftLootTableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.loot.LootTable">];
  equals(arg0: object): boolean;
  fillInventory(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: JavaOpaque<"java.util.Random">, arg2: JavaOpaque<"org.bukkit.loot.LootContext">): void;
  getHandle(): j_net_minecraft_world_level_storage_loot.LootTable;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  hashCode(): number;
  populateLoot(arg0: JavaOpaque<"java.util.Random">, arg1: JavaOpaque<"org.bukkit.loot.LootContext">): JavaCollection<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  toString(): string;
}
export type CraftLootTable = CraftLootTableMembers & JavaOpaque<"org.bukkit.loot.LootTable">;
export interface CraftLootTableStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: j_net_minecraft_world_level_storage_loot.LootTable): CraftLootTable;
  bukkitKeyToMinecraft(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.loot.LootTable">): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  convertContext(arg0: j_net_minecraft_world_level_storage_loot.LootContext): JavaOpaque<"org.bukkit.loot.LootContext">;
  minecraftToBukkit(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): JavaOpaque<"org.bukkit.loot.LootTable">;
  minecraftToBukkit(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"org.bukkit.loot.LootTable">;
  minecraftToBukkitKey(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): JavaOpaque<"org.bukkit.NamespacedKey">;
}

/** JVM class org.bukkit.craftbukkit.CraftMusicInstrument. */
export interface CraftMusicInstrumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.MusicInstrument">, JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_item.Instrument]>];
  description(): JavaOpaque<"net.kyori.adventure.text.Component">;
  equals(arg0: object): boolean;
  getDuration(): number;
  getHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Instrument>;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getRange(): number;
  getSound(): JavaOpaque<"org.bukkit.Sound">;
  hashCode(): number;
  toString(): string;
  translationKey(): string;
}
export type CraftMusicInstrument = CraftMusicInstrumentMembers & JavaOpaque<"org.bukkit.MusicInstrument"> & JavaOpaque<"io.papermc.paper.util.Holderable", [j_net_minecraft_world_item.Instrument]>;
export interface CraftMusicInstrumentStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Instrument>): CraftMusicInstrument;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.MusicInstrument">): j_net_minecraft_world_item.Instrument;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.MusicInstrument">): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Instrument>;
  bukkitToString(arg0: JavaOpaque<"org.bukkit.MusicInstrument">): object;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Instrument>): JavaOpaque<"org.bukkit.MusicInstrument">;
  minecraftToBukkit(arg0: j_net_minecraft_world_item.Instrument): JavaOpaque<"org.bukkit.MusicInstrument">;
  stringToBukkit(arg0: object): JavaOpaque<"org.bukkit.MusicInstrument">;
}

/** JVM class org.bukkit.craftbukkit.CraftOfflinePlayer. */
export interface CraftOfflinePlayerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.OfflinePlayer">, JavaOpaque<"org.bukkit.configuration.serialization.ConfigurationSerializable">];
  ban(arg0: string, arg1: JavaOpaque<"java.time.Duration">, arg2: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: number): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: number): void;
  equals(arg0: object): boolean;
  getFirstPlayed(): bigint;
  getLastDeathLocation(): JavaOpaque<"org.bukkit.Location">;
  getLastLogin(): bigint;
  getLastPlayed(): bigint;
  getLastSeen(): bigint;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getName(): string;
  getPersistentDataContainer(): JavaOpaque<"io.papermc.paper.persistence.PersistentDataContainerView">;
  getPlayer(): JavaOpaque<"org.bukkit.entity.Player">;
  getPlayerProfile(): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  getRespawnLocation(arg0: boolean): JavaOpaque<"org.bukkit.Location">;
  getServer(): JavaOpaque<"org.bukkit.Server">;
  getStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): number;
  getStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): number;
  getStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): number;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  hasPlayedBefore(): boolean;
  hashCode(): number;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: number): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: number): void;
  isBanned(): boolean;
  isConnected(): boolean;
  isOnline(): boolean;
  isOp(): boolean;
  isWhitelisted(): boolean;
  serialize(): JavaMap<string, object>;
  setBanned(arg0: boolean): void;
  setOp(arg0: boolean): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: number): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: number): void;
  setWhitelisted(arg0: boolean): void;
  toString(): string;
}
export type CraftOfflinePlayer = CraftOfflinePlayerMembers & JavaOpaque<"org.bukkit.OfflinePlayer"> & JavaOpaque<"org.bukkit.configuration.serialization.ConfigurationSerializable">;
export interface CraftOfflinePlayerStatics {
  deserialize(arg0: JavaMap<string, object>): JavaOpaque<"org.bukkit.OfflinePlayer">;
}

/** JVM abstract org.bukkit.craftbukkit.CraftParticle. */
export interface CraftParticleMembers<D = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Keyed">];
  createParticleParam(arg0: D): j_net_minecraft_core_particles.ParticleOptions;
  getHandle(): j_net_minecraft_core_particles.ParticleType<object>;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
}
export type CraftParticle<D = unknown> = CraftParticleMembers<D> & JavaOpaque<"org.bukkit.Keyed">;
export interface CraftParticleStatics {
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.Particle">): j_net_minecraft_core_particles.ParticleType<object>;
  convertLegacy<T>(arg0: T): T;
  createParticleParam<D>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: D): j_net_minecraft_core_particles.ParticleOptions;
  minecraftToBukkit(arg0: j_net_minecraft_core_particles.ParticleType<object>): JavaOpaque<"org.bukkit.Particle">;
}

/** JVM class org.bukkit.craftbukkit.CraftParticle$CraftParticleRegistry. */
export interface CraftParticle_CraftParticleRegistryMembers {
  readonly __javaSupertypes?: readonly [CraftRegistry<CraftParticle<object>, j_net_minecraft_core_particles.ParticleType<object>>];
}
export type CraftParticle_CraftParticleRegistry = CraftParticle_CraftParticleRegistryMembers & CraftRegistry<CraftParticle<object>, j_net_minecraft_core_particles.ParticleType<object>>;
export interface CraftParticle_CraftParticleRegistryStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_core_particles.ParticleType<object>>): CraftParticle_CraftParticleRegistry;
  createBukkit(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: j_net_minecraft_core_particles.ParticleType<object>): CraftParticle<object>;
}

/** JVM class org.bukkit.craftbukkit.CraftRaid. */
export interface CraftRaidMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Raid">];
  equals(arg0: object): boolean;
  getActiveTicks(): bigint;
  getBadOmenLevel(): number;
  getBossBar(): JavaOpaque<"org.bukkit.boss.BossBar">;
  getHandle(): j_net_minecraft_world_entity_raid.Raid;
  getHeroes(): JavaSet<JavaOpaque<"java.util.UUID">>;
  getId(): number;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getRaiders(): JavaList<JavaOpaque<"org.bukkit.entity.Raider">>;
  getSpawnedGroups(): number;
  getStatus(): JavaOpaque<"org.bukkit.Raid$RaidStatus">;
  getTotalGroups(): number;
  getTotalHealth(): number;
  getTotalWaves(): number;
  hashCode(): number;
  isStarted(): boolean;
  setBadOmenLevel(arg0: number): void;
}
export type CraftRaid = CraftRaidMembers & JavaOpaque<"org.bukkit.Raid">;
export interface CraftRaidStatics {
  new(arg0: j_net_minecraft_world_entity_raid.Raid, arg1: j_net_minecraft_world_level.Level): CraftRaid;
}

/** JVM abstract org.bukkit.craftbukkit.CraftRegionAccessor. */
export interface CraftRegionAccessorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.RegionAccessor">];
  /** @throws java.lang.IllegalArgumentException */
  addEntity<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T;
  /** @throws java.lang.IllegalArgumentException */
  addEntity<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">, arg2: JavaConsumer<T>, arg3: boolean): T;
  addEntity<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: T): T;
  addEntityToWorld(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  addEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  /** @throws java.lang.IllegalArgumentException */
  createEntity<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>): T;
  /** @throws java.lang.IllegalArgumentException */
  createEntity(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<JavaOpaque<"org.bukkit.entity.Entity">>, arg2: boolean): j_net_minecraft_world_entity.Entity;
  generateTree(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource, arg4: JavaOpaque<"org.bukkit.TreeType">): boolean;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"java.util.Random">, arg2: JavaOpaque<"org.bukkit.TreeType">): boolean;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"java.util.Random">, arg2: JavaOpaque<"org.bukkit.TreeType">, arg3: JavaConsumer<JavaOpaque<"org.bukkit.block.BlockState">>): boolean;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"java.util.Random">, arg2: JavaOpaque<"org.bukkit.TreeType">, arg3: JavaPredicate<JavaOpaque<"org.bukkit.block.BlockState">>): boolean;
  getBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBiome(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.block.Biome">;
  getBlockData(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockState(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.block.BlockState">;
  getComputedBiome(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Biome">;
  getEntities(): JavaList<JavaOpaque<"org.bukkit.entity.Entity">>;
  getEntitiesByClass<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaClass<T>): JavaCollection<T>;
  getEntitiesByClasses(...arg0: Array<JavaClass<object>>): JavaCollection<JavaOpaque<"org.bukkit.entity.Entity">>;
  getFeatureFlags(): JavaSet<JavaOpaque<"org.bukkit.FeatureFlag">>;
  getFluidData(arg0: number, arg1: number, arg2: number): JavaOpaque<"io.papermc.paper.block.fluid.FluidData">;
  getHandle(): j_net_minecraft_world_level.WorldGenLevel;
  getHighestBlockYAt(arg0: number, arg1: number): number;
  getHighestBlockYAt(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.HeightMap">): number;
  getHighestBlockYAt(arg0: JavaOpaque<"org.bukkit.Location">): number;
  getHighestBlockYAt(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.HeightMap">): number;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getLivingEntities(): JavaList<JavaOpaque<"org.bukkit.entity.LivingEntity">>;
  getMoonPhase(): JavaOpaque<"io.papermc.paper.world.MoonPhase">;
  getNMSEntities(): Iterable<j_net_minecraft_world_entity.Entity>;
  getType(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Material">;
  hasCollisionsIn(arg0: JavaOpaque<"org.bukkit.util.BoundingBox">): boolean;
  isNormalWorld(): boolean;
  lineOfSightExists(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Location">): boolean;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): void;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.block.Biome">): void;
  setBiome(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.block.Biome">): void;
  setBlockData(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlockData(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setType(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"org.bukkit.Material">): void;
  setType(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>): T;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>, arg2: JavaConsumer<T>): T;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>, arg2: JavaConsumer<T>, arg3: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>, arg2: JavaConsumer<T>, arg3: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">, arg4: boolean): T;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>, arg2: boolean, arg3: JavaConsumer<T>): T;
  spawnEntity(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): JavaOpaque<"org.bukkit.entity.Entity">;
  spawnEntity(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: boolean): JavaOpaque<"org.bukkit.entity.Entity">;
}
export type CraftRegionAccessor = CraftRegionAccessorMembers & JavaOpaque<"org.bukkit.RegionAccessor">;
export interface CraftRegionAccessorStatics {
}

/** JVM class org.bukkit.craftbukkit.CraftRegistry. */
export interface CraftRegistryMembers<B /* extends JavaOpaque<"org.bukkit.Keyed"> */ = unknown, M = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Registry", [B]>];
  createBukkit(arg0: j_net_minecraft_core.Holder<M>): B;
  get(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): B;
  getKey(arg0: B): JavaOpaque<"org.bukkit.NamespacedKey">;
  getTag(arg0: JavaOpaque<"io.papermc.paper.registry.tag.TagKey", [B]>): JavaOpaque<"io.papermc.paper.registry.tag.Tag", [B]>;
  getTags(): JavaCollection<JavaOpaque<"io.papermc.paper.registry.tag.Tag", [B]>>;
  hasTag(arg0: JavaOpaque<"io.papermc.paper.registry.tag.TagKey", [B]>): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [B]>;
  keyStream(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"org.bukkit.NamespacedKey">]>;
  lockReferenceHolders(): void;
  size(): number;
  stream(): JavaOpaque<"java.util.stream.Stream", [B]>;
  supportsDirectHolders(): boolean;
}
export type CraftRegistry<B /* extends JavaOpaque<"org.bukkit.Keyed"> */ = unknown, M = unknown> = CraftRegistryMembers<B, M> & JavaOpaque<"org.bukkit.Registry", [B]>;
export interface CraftRegistryStatics {
  new<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: JavaOpaque<"io.papermc.paper.registry.entry.RegistryEntryMeta$ServerSide", [M, B]>, arg1: j_net_minecraft_core.Registry<M>): CraftRegistry<B, M>;
  new<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: JavaClass<object>, arg1: j_net_minecraft_core.Registry<M>, arg2: JavaOpaque<"io.papermc.paper.registry.entry.RegistryTypeMapper", [M, B]>, arg3: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>): CraftRegistry<B, M>;
  new<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: JavaClass<object>, arg1: j_net_minecraft_core.Registry<M>, arg2: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, M, B>, arg3: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>): CraftRegistry<B, M>;
  bukkitToMinecraft<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: B): M;
  bukkitToMinecraftHolder<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: B): j_net_minecraft_core.Holder<M>;
  get<B /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: JavaOpaque<"io.papermc.paper.registry.RegistryKey", [B]>, arg1: JavaOpaque<"org.bukkit.NamespacedKey">, arg2: j_org_bukkit_craftbukkit_util.ApiVersion): B;
  getMinecraftRegistry(): j_net_minecraft_core.RegistryAccess;
  getMinecraftRegistry<E>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<E>>): j_net_minecraft_core.Registry<E>;
  minecraftHolderToBukkit<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: j_net_minecraft_core.Holder<M>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<M>>): B;
  minecraftToBukkit<B /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: M, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<M>>): B;
  setMinecraftRegistry(arg0: j_net_minecraft_core.RegistryAccess): void;
  unwrapAndConvertHolder<T /* extends JavaOpaque<"org.bukkit.Keyed"> */, M>(arg0: JavaOpaque<"io.papermc.paper.registry.RegistryKey", [T]>, arg1: j_net_minecraft_core.Holder<M>): JavaOptional<T>;
}

/** JVM class org.bukkit.craftbukkit.CraftServer. */
export interface CraftServerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Server">];
  activeCompatibilities: JavaSet<string>;
  addRecipe(arg0: JavaOpaque<"org.bukkit.inventory.Recipe">): boolean;
  addRecipe(arg0: JavaOpaque<"org.bukkit.inventory.Recipe">, arg1: boolean): boolean;
  addWorld(arg0: JavaOpaque<"org.bukkit.World">): void;
  advancementIterator(): JavaOpaque<"java.util.Iterator", [JavaOpaque<"org.bukkit.advancement.Advancement">]>;
  allowPausing(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: boolean): void;
  audiences(): Iterable<JavaOpaque<"net.kyori.adventure.audience.Audience">>;
  banIP(arg0: string): void;
  banIP(arg0: JavaOpaque<"java.net.InetAddress">): void;
  broadcast(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: string): number;
  checkSaveState(): void;
  clearRecipes(): void;
  craftItem(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>, arg1: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  craftItem(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>, arg1: JavaOpaque<"org.bukkit.World">, arg2: JavaOpaque<"org.bukkit.entity.Player">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  craftItemResult(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>, arg1: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.inventory.ItemCraftResult">;
  craftItemResult(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>, arg1: JavaOpaque<"org.bukkit.World">, arg2: JavaOpaque<"org.bukkit.entity.Player">): JavaOpaque<"org.bukkit.inventory.ItemCraftResult">;
  /** @throws java.lang.IllegalArgumentException */
  createBlockData(arg0: string): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: string): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.block.data.BlockData">>): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBossBar(arg0: string, arg1: JavaOpaque<"org.bukkit.boss.BarColor">, arg2: JavaOpaque<"org.bukkit.boss.BarStyle">, ...arg3: Array<JavaOpaque<"org.bukkit.boss.BarFlag">>): JavaOpaque<"org.bukkit.boss.BossBar">;
  createBossBar(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: string, arg2: JavaOpaque<"org.bukkit.boss.BarColor">, arg3: JavaOpaque<"org.bukkit.boss.BarStyle">, ...arg4: Array<JavaOpaque<"org.bukkit.boss.BarFlag">>): JavaOpaque<"org.bukkit.boss.KeyedBossBar">;
  createChunkData(arg0: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">;
  createCommandSender(arg0: JavaConsumer<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"org.bukkit.command.CommandSender">;
  createExplorerMap(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.StructureType">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  createExplorerMap(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.StructureType">, arg3: number, arg4: boolean): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  createExplorerMap(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.generator.structure.StructureType">, arg3: JavaOpaque<"org.bukkit.map.MapCursor$Type">, arg4: number, arg5: boolean): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  /** @throws java.lang.IllegalArgumentException */
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number): JavaOpaque<"org.bukkit.inventory.Inventory">;
  /** @throws java.lang.IllegalArgumentException */
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  /** @throws java.lang.IllegalArgumentException */
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Inventory">;
  createMap(arg0: JavaOpaque<"org.bukkit.World">): j_org_bukkit_craftbukkit_map.CraftMapView;
  createMerchant(): JavaOpaque<"org.bukkit.inventory.Merchant">;
  createMerchant(arg0: string): JavaOpaque<"org.bukkit.inventory.Merchant">;
  createMerchant(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.Merchant">;
  createPlayerProfile(arg0: string): JavaOpaque<"org.bukkit.profile.PlayerProfile">;
  createPlayerProfile(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.profile.PlayerProfile">;
  createPlayerProfile(arg0: JavaOpaque<"java.util.UUID">, arg1: string): JavaOpaque<"org.bukkit.profile.PlayerProfile">;
  createProfile(arg0: string): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  createProfile(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  createProfile(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: string | null): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  createProfileExact(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: string | null): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  createWorld(arg0: JavaOpaque<"org.bukkit.WorldCreator">): JavaOpaque<"org.bukkit.World">;
  createWorldBorder(): JavaOpaque<"org.bukkit.WorldBorder">;
  dataPackManager: j_org_bukkit_craftbukkit_packs.CraftDataPackManager;
  disablePlugins(): void;
  dispatchCommand(arg0: JavaOpaque<"org.bukkit.command.CommandSender">, arg1: string): boolean;
  enablePlugins(arg0: JavaOpaque<"org.bukkit.plugin.PluginLoadOrder">): void;
  forcesDefaultGameMode(): boolean;
  getAdvancement(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.advancement.Advancement">;
  getAllowEnd(): boolean;
  getAllowFlight(): boolean;
  getAllowNether(): boolean;
  getAmbientSpawnLimit(): number;
  getAnimalSpawnLimit(): number;
  getAsyncScheduler(): JavaOpaque<"io.papermc.paper.threadedregions.scheduler.AsyncScheduler">;
  getAverageTickTime(): number;
  getBanList<B /* extends JavaOpaque<"org.bukkit.BanList", [E]> */, E>(arg0: JavaOpaque<"io.papermc.paper.ban.BanListType", [B]>): B;
  getBanList<T /* extends JavaOpaque<"org.bukkit.BanList", [object]> */>(arg0: JavaOpaque<"org.bukkit.BanList$Type">): T;
  getBannedPlayers(): JavaSet<JavaOpaque<"org.bukkit.OfflinePlayer">>;
  getBiomeProvider(arg0: string): JavaOpaque<"org.bukkit.generator.BiomeProvider">;
  getBossBar(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.boss.KeyedBossBar">;
  getBossBars(): JavaOpaque<"java.util.Iterator", [JavaOpaque<"org.bukkit.boss.KeyedBossBar">]>;
  getBukkitVersion(): string;
  getCommandAliases(): JavaMap<string, Array<string>>;
  getCommandBlockOverride(arg0: string): boolean;
  getCommandMap(): JavaOpaque<"org.bukkit.command.SimpleCommandMap">;
  getConnectionThrottle(): bigint;
  getConsoleSender(): JavaOpaque<"org.bukkit.command.ConsoleCommandSender">;
  getCraftingRecipe(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>, arg1: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.inventory.Recipe">;
  getCurrentTick(): number;
  getDataPackManager(): JavaOpaque<"org.bukkit.packs.DataPackManager">;
  getDatapackManager(): JavaOpaque<"io.papermc.paper.datapack.PaperDatapackManager">;
  getDefaultGameMode(): JavaOpaque<"org.bukkit.GameMode">;
  getEntity(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.entity.Entity">;
  getEntityFactory(): j_org_bukkit_craftbukkit_entity.CraftEntityFactory;
  getEntityMetadata(): j_org_bukkit_craftbukkit_metadata.EntityMetadataStore;
  getGenerateStructures(): boolean;
  getGenerator(arg0: string): JavaOpaque<"org.bukkit.generator.ChunkGenerator">;
  getGlobalRegionScheduler(): JavaOpaque<"io.papermc.paper.threadedregions.scheduler.FoliaGlobalRegionScheduler">;
  getHandle(): j_net_minecraft_server_dedicated.DedicatedPlayerList;
  getHelpMap(): JavaOpaque<"org.bukkit.help.HelpMap">;
  getHideOnlinePlayers(): boolean;
  getIPBans(): JavaSet<string>;
  getIdleTimeout(): number;
  getInitialDisabledPacks(): JavaList<string>;
  getInitialEnabledPacks(): JavaList<string>;
  getIp(): string;
  getItemFactory(): j_org_bukkit_craftbukkit_inventory.CraftItemFactory;
  getListeningPluginChannels(): JavaSet<string>;
  getLogger(): JavaOpaque<"java.util.logging.Logger">;
  getLootTable(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.loot.LootTable">;
  getMap(arg0: number): j_org_bukkit_craftbukkit_map.CraftMapView;
  getMaxChainedNeighborUpdates(): number;
  getMaxPlayers(): number;
  getMaxWorldSize(): number;
  getMessenger(): JavaOpaque<"org.bukkit.plugin.messaging.Messenger">;
  getMinecraftVersion(): string;
  getMobGoals(): JavaOpaque<"com.destroystokyo.paper.entity.ai.MobGoals">;
  getMonsterSpawnLimit(): number;
  getMotd(): string;
  getName(): string;
  getOfflinePlayer(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): JavaOpaque<"org.bukkit.OfflinePlayer">;
  getOfflinePlayer(arg0: string): JavaOpaque<"org.bukkit.OfflinePlayer">;
  getOfflinePlayer(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.OfflinePlayer">;
  getOfflinePlayerIfCached(arg0: string): JavaOpaque<"org.bukkit.OfflinePlayer"> | null;
  getOfflinePlayers(): Array<JavaOpaque<"org.bukkit.OfflinePlayer">>;
  getOnlineMode(): boolean;
  getOnlinePlayers(): JavaList<j_org_bukkit_craftbukkit_entity.CraftPlayer>;
  getOperators(): JavaSet<JavaOpaque<"org.bukkit.OfflinePlayer">>;
  getPauseWhenEmptyTime(): number;
  getPermissionMessage(): string;
  getPlayer(arg0: string): JavaOpaque<"org.bukkit.entity.Player">;
  getPlayer(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.entity.Player">;
  getPlayerExact(arg0: string): JavaOpaque<"org.bukkit.entity.Player">;
  getPlayerMetadata(): j_org_bukkit_craftbukkit_metadata.PlayerMetadataStore;
  getPlayerUniqueId(arg0: string): JavaOpaque<"java.util.UUID">;
  getPluginCommand(arg0: string): JavaOpaque<"org.bukkit.command.PluginCommand">;
  getPluginManager(): JavaOpaque<"org.bukkit.plugin.PluginManager">;
  getPluginsFolder(): JavaOpaque<"java.io.File">;
  getPort(): number;
  getPotionBrewer(): JavaOpaque<"io.papermc.paper.potion.PaperPotionBrewer">;
  getQueryPlugins(): boolean;
  getRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
  getRecipesFor(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaList<JavaOpaque<"org.bukkit.inventory.Recipe">>;
  getRegionScheduler(): JavaOpaque<"io.papermc.paper.threadedregions.scheduler.RegionScheduler">;
  getRegistry<T /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: JavaClass<T>): JavaOpaque<"org.bukkit.Registry", [T]>;
  getResourcePack(): string;
  getResourcePackHash(): string;
  getResourcePackPrompt(): string;
  getScheduler(): j_org_bukkit_craftbukkit_scheduler.CraftScheduler;
  getScoreboardCriteria(arg0: string): JavaOpaque<"org.bukkit.scoreboard.Criteria">;
  getScoreboardManager(): j_org_bukkit_craftbukkit_scoreboard.CraftScoreboardManager;
  getServer(): j_net_minecraft_server_dedicated.DedicatedServer;
  getServerConfig(): JavaOpaque<"io.papermc.paper.configuration.ServerConfiguration">;
  getServerIcon(): j_org_bukkit_craftbukkit_util.CraftIconCache;
  getServerLinks(): JavaOpaque<"org.bukkit.ServerLinks">;
  getServerResourcePack(): JavaOpaque<"org.bukkit.packs.ResourcePack">;
  getServerTickManager(): JavaOpaque<"org.bukkit.ServerTickManager">;
  getServicesManager(): JavaOpaque<"org.bukkit.plugin.ServicesManager">;
  getShutdownMessage(): string;
  getSimulationDistance(): number;
  getSpawnLimit(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): number;
  getSpawnLimitUnsafe(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): number;
  getSpawnRadius(): number;
  getStructureManager(): JavaOpaque<"org.bukkit.structure.StructureManager">;
  getTPS(): Array<number>;
  getTag<T /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: string, arg1: JavaOpaque<"org.bukkit.NamespacedKey">, arg2: JavaClass<T>): JavaOpaque<"org.bukkit.Tag", [T]>;
  getTags<T /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: string, arg1: JavaClass<T>): Iterable<JavaOpaque<"org.bukkit.Tag", [T]>>;
  getTickTimes(): Array<bigint>;
  getTicksPerAmbientSpawns(): number;
  getTicksPerAnimalSpawns(): number;
  getTicksPerMonsterSpawns(): number;
  getTicksPerSpawns(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): number;
  getTicksPerWaterAmbientSpawns(): number;
  getTicksPerWaterSpawns(): number;
  getTicksPerWaterUndergroundCreatureSpawns(): number;
  getUnsafe(): JavaOpaque<"org.bukkit.UnsafeValues">;
  getUpdateFolder(): string;
  getUpdateFolderFile(): JavaOpaque<"java.io.File">;
  getVersion(): string;
  getViewDistance(): number;
  getWarnOnOverload(): boolean;
  getWarningState(): JavaOpaque<"org.bukkit.Warning$WarningState">;
  getWaterAmbientSpawnLimit(): number;
  getWaterAnimalSpawnLimit(): number;
  getWaterUndergroundCreatureSpawnLimit(): number;
  getWhitelistedPlayers(): JavaSet<JavaOpaque<"org.bukkit.OfflinePlayer">>;
  getWorld(arg0: string): JavaOpaque<"org.bukkit.World">;
  getWorld(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.World">;
  getWorld(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): JavaOpaque<"org.bukkit.World">;
  getWorldContainer(): JavaOpaque<"java.io.File">;
  getWorldMetadata(): j_org_bukkit_craftbukkit_metadata.WorldMetadataStore;
  getWorldType(): string;
  getWorlds(): JavaList<JavaOpaque<"org.bukkit.World">>;
  hasWhitelist(): boolean;
  ignoreVanillaPermissions: boolean;
  isAcceptingTransfers(): boolean;
  isEnforcingSecureProfiles(): boolean;
  isGlobalTickThread(): boolean;
  isHardcore(): boolean;
  isLoggingIPs(): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.World">, arg1: number, arg2: number): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.World">, arg1: number, arg2: number, arg3: number): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.World">, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"io.papermc.paper.math.Position">): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"io.papermc.paper.math.Position">, arg2: number): boolean;
  isOwnedByCurrentRegion(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  isPaused(): boolean;
  isPrimaryThread(): boolean;
  isResourcePackRequired(): boolean;
  isStopping(): boolean;
  isTickingWorlds(): boolean;
  isWhitelistEnforced(): boolean;
  loadPlugins(): void;
  /** @throws java.lang.Exception */
  loadServerIcon(arg0: JavaOpaque<"java.awt.image.BufferedImage">): j_org_bukkit_craftbukkit_util.CraftIconCache;
  /** @throws java.lang.Exception */
  loadServerIcon(arg0: JavaOpaque<"java.io.File">): j_org_bukkit_craftbukkit_util.CraftIconCache;
  matchPlayer(arg0: string): JavaList<JavaOpaque<"org.bukkit.entity.Player">>;
  minimumAPI: j_org_bukkit_craftbukkit_util.ApiVersion;
  motd(): JavaOpaque<"net.kyori.adventure.text.Component">;
  motd(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  readonly paperPluginManager: JavaOpaque<"io.papermc.paper.plugin.manager.PaperPluginManagerImpl">;
  permissionMessage(): JavaOpaque<"net.kyori.adventure.text.Component">;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">, arg1: JavaOpaque<"net.kyori.adventure.sound.Sound$Emitter">): void;
  recipeIterator(): JavaOpaque<"java.util.Iterator", [JavaOpaque<"org.bukkit.inventory.Recipe">]>;
  reload(): void;
  reloadCommandAliases(): boolean;
  reloadCount: number;
  reloadData(): void;
  reloadPermissions(): void;
  reloadWhitelist(): void;
  removeBossBar(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  removeRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  removeRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: boolean): boolean;
  resetRecipes(): void;
  restart(): void;
  savePlayers(): void;
  scoreboardManager: j_org_bukkit_craftbukkit_scoreboard.CraftScoreboardManager;
  selectEntities(arg0: JavaOpaque<"org.bukkit.command.CommandSender">, arg1: string): JavaList<JavaOpaque<"org.bukkit.entity.Entity">>;
  sendPluginMessage(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: Array<number>): void;
  setDefaultGameMode(arg0: JavaOpaque<"org.bukkit.GameMode">): void;
  setIdleTimeout(arg0: number): void;
  setMaxPlayers(arg0: number): void;
  setMotd(arg0: string): void;
  setPauseWhenEmptyTime(arg0: number): void;
  setSpawnRadius(arg0: number): void;
  setWhitelist(arg0: boolean): void;
  setWhitelistEnforced(arg0: boolean): void;
  shutdown(): void;
  shutdownMessage(): JavaOpaque<"net.kyori.adventure.text.Component">;
  readonly spark: JavaOpaque<"io.papermc.paper.SparksFly">;
  spigot(): JavaOpaque<"org.bukkit.Server$Spigot">;
  suggestPlayerNamesWhenNullTabCompletions(): boolean;
  syncCommands(): void;
  tabComplete(arg0: JavaOpaque<"org.bukkit.command.CommandSender">, arg1: string, arg2: j_net_minecraft_server_level.ServerLevel, arg3: j_net_minecraft_world_phys.Vec3, arg4: boolean): JavaList<string>;
  tabCompleteChat(arg0: JavaOpaque<"org.bukkit.entity.Player">, arg1: string): JavaList<string>;
  tabCompleteCommand(arg0: JavaOpaque<"org.bukkit.entity.Player">, arg1: string, arg2: j_net_minecraft_server_level.ServerLevel, arg3: j_net_minecraft_world_phys.Vec3): JavaList<string>;
  toString(): string;
  unbanIP(arg0: string): void;
  unbanIP(arg0: JavaOpaque<"java.net.InetAddress">): void;
  unloadWorld(arg0: string, arg1: boolean): boolean;
  unloadWorld(arg0: JavaOpaque<"org.bukkit.World">, arg1: boolean): boolean;
  updateRecipes(): void;
  updateResources(): void;
  waitForAsyncTasksShutdown(): void;
}
export type CraftServer = CraftServerMembers & JavaOpaque<"org.bukkit.Server">;
export interface CraftServerStatics {
  new(arg0: j_net_minecraft_server_dedicated.DedicatedServer, arg1: j_net_minecraft_server_players.PlayerList): CraftServer;
  dumpHeap(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string): JavaOpaque<"java.nio.file.Path">;
  readonly excessiveVelEx: JavaOpaque<"java.lang.Exception">;
}

/** JVM class org.bukkit.craftbukkit.CraftServerLinks. */
export interface CraftServerLinksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.ServerLinks">];
  addLink(arg0: string, arg1: JavaOpaque<"java.net.URI">): JavaOpaque<"org.bukkit.ServerLinks$ServerLink">;
  addLink(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"java.net.URI">): JavaOpaque<"org.bukkit.ServerLinks$ServerLink">;
  addLink(arg0: JavaOpaque<"org.bukkit.ServerLinks$Type">, arg1: JavaOpaque<"java.net.URI">): JavaOpaque<"org.bukkit.ServerLinks$ServerLink">;
  copy(): JavaOpaque<"org.bukkit.ServerLinks">;
  getLink(arg0: JavaOpaque<"org.bukkit.ServerLinks$Type">): JavaOpaque<"org.bukkit.ServerLinks$ServerLink">;
  getLinks(): JavaList<JavaOpaque<"org.bukkit.ServerLinks$ServerLink">>;
  getServerLinks(): j_net_minecraft_server.ServerLinks;
  removeLink(arg0: JavaOpaque<"org.bukkit.ServerLinks$ServerLink">): boolean;
  setLink(arg0: JavaOpaque<"org.bukkit.ServerLinks$Type">, arg1: JavaOpaque<"java.net.URI">): JavaOpaque<"org.bukkit.ServerLinks$ServerLink">;
}
export type CraftServerLinks = CraftServerLinksMembers & JavaOpaque<"org.bukkit.ServerLinks">;
export interface CraftServerLinksStatics {
  new(arg0: j_net_minecraft_server.ServerLinks): CraftServerLinks;
  new(arg0: j_net_minecraft_server_dedicated.DedicatedServer): CraftServerLinks;
}

/** JVM class org.bukkit.craftbukkit.CraftServerLinks$CraftServerLink. */
export interface CraftServerLinks_CraftServerLinkMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.ServerLinks$ServerLink">];
  displayName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  getDisplayName(): string;
  getType(): JavaOpaque<"org.bukkit.ServerLinks$Type">;
  getUrl(): JavaOpaque<"java.net.URI">;
}
export type CraftServerLinks_CraftServerLink = CraftServerLinks_CraftServerLinkMembers & JavaOpaque<"org.bukkit.ServerLinks$ServerLink">;
export interface CraftServerLinks_CraftServerLinkStatics {
  new(arg0: j_net_minecraft_server.ServerLinks_Entry): CraftServerLinks_CraftServerLink;
}

/** JVM class org.bukkit.craftbukkit.CraftSound. */
export interface CraftSoundMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.Sound">, j_net_minecraft_sounds.SoundEvent]>, JavaOpaque<"org.bukkit.Sound">];
}
export type CraftSound = CraftSoundMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.Sound">, j_net_minecraft_sounds.SoundEvent]> & JavaOpaque<"org.bukkit.Sound">;
export interface CraftSoundStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): CraftSound;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.Sound">): j_net_minecraft_sounds.SoundEvent;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.Sound">): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): JavaOpaque<"org.bukkit.Sound">;
  minecraftToBukkit(arg0: j_net_minecraft_sounds.SoundEvent): JavaOpaque<"org.bukkit.Sound">;
}

/** JVM class org.bukkit.craftbukkit.CraftSoundGroup. */
export interface CraftSoundGroupMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.SoundGroup">];
  getBreakSound(): JavaOpaque<"org.bukkit.Sound">;
  getFallSound(): JavaOpaque<"org.bukkit.Sound">;
  getHandle(): j_net_minecraft_world_level_block.SoundType;
  getHitSound(): JavaOpaque<"org.bukkit.Sound">;
  getPitch(): number;
  getPlaceSound(): JavaOpaque<"org.bukkit.Sound">;
  getStepSound(): JavaOpaque<"org.bukkit.Sound">;
  getVolume(): number;
}
export type CraftSoundGroup = CraftSoundGroupMembers & JavaOpaque<"org.bukkit.SoundGroup">;
export interface CraftSoundGroupStatics {
  getSoundGroup(arg0: j_net_minecraft_world_level_block.SoundType): JavaOpaque<"org.bukkit.SoundGroup">;
}

/** Live JVM enum org.bukkit.craftbukkit.CraftStatistic; constants are host handles, not strings. */
export type CraftStatistic = JavaEnum<"org.bukkit.craftbukkit.CraftStatistic", "ANIMALS_BRED" | "ARMOR_CLEANED" | "AVIATE_ONE_CM" | "BANNER_CLEANED" | "BEACON_INTERACTION" | "BELL_RING" | "BOAT_ONE_CM" | "BREAK_ITEM" | "BREWINGSTAND_INTERACTION" | "CAKE_SLICES_EATEN" | "CAULDRON_FILLED" | "CAULDRON_USED" | "CHEST_OPENED" | "CLEAN_SHULKER_BOX" | "CLIMB_ONE_CM" | "CRAFTING_TABLE_INTERACTION" | "CRAFT_ITEM" | "CROUCH_ONE_CM" | "DAMAGE_ABSORBED" | "DAMAGE_BLOCKED_BY_SHIELD" | "DAMAGE_DEALT" | "DAMAGE_DEALT_ABSORBED" | "DAMAGE_DEALT_RESISTED" | "DAMAGE_RESISTED" | "DAMAGE_TAKEN" | "DEATHS" | "DISPENSER_INSPECTED" | "DROP" | "DROPPER_INSPECTED" | "DROP_COUNT" | "ENDERCHEST_OPENED" | "ENTITY_KILLED_BY" | "FALL_ONE_CM" | "FISH_CAUGHT" | "FLOWER_POTTED" | "FLY_ONE_CM" | "FURNACE_INTERACTION" | "HAPPY_GHAST_ONE_CM" | "HOPPER_INSPECTED" | "HORSE_ONE_CM" | "INTERACT_WITH_ANVIL" | "INTERACT_WITH_BLAST_FURNACE" | "INTERACT_WITH_CAMPFIRE" | "INTERACT_WITH_CARTOGRAPHY_TABLE" | "INTERACT_WITH_GRINDSTONE" | "INTERACT_WITH_LECTERN" | "INTERACT_WITH_LOOM" | "INTERACT_WITH_SMITHING_TABLE" | "INTERACT_WITH_SMOKER" | "INTERACT_WITH_STONECUTTER" | "ITEM_ENCHANTED" | "JUMP" | "KILL_ENTITY" | "LEAVE_GAME" | "MINECART_ONE_CM" | "MINE_BLOCK" | "MOB_KILLS" | "NOTEBLOCK_PLAYED" | "NOTEBLOCK_TUNED" | "OPEN_BARREL" | "PICKUP" | "PIG_ONE_CM" | "PLAYER_KILLS" | "PLAY_ONE_MINUTE" | "RAID_TRIGGER" | "RAID_WIN" | "RECORD_PLAYED" | "SHULKER_BOX_OPENED" | "SLEEP_IN_BED" | "SNEAK_TIME" | "SPRINT_ONE_CM" | "STRIDER_ONE_CM" | "SWIM_ONE_CM" | "TALKED_TO_VILLAGER" | "TARGET_HIT" | "TIME_SINCE_DEATH" | "TIME_SINCE_REST" | "TOTAL_WORLD_TIME" | "TRADED_WITH_VILLAGER" | "TRAPPED_CHEST_TRIGGERED" | "USE_ITEM" | "WALK_ONE_CM" | "WALK_ON_WATER_ONE_CM" | "WALK_UNDER_WATER_ONE_CM"> & CraftStatisticMembers;
export interface CraftStatisticMembers {
}
export interface CraftStatisticStatics {
  readonly ANIMALS_BRED: CraftStatistic;
  readonly ARMOR_CLEANED: CraftStatistic;
  readonly AVIATE_ONE_CM: CraftStatistic;
  readonly BANNER_CLEANED: CraftStatistic;
  readonly BEACON_INTERACTION: CraftStatistic;
  readonly BELL_RING: CraftStatistic;
  readonly BOAT_ONE_CM: CraftStatistic;
  readonly BREAK_ITEM: CraftStatistic;
  readonly BREWINGSTAND_INTERACTION: CraftStatistic;
  readonly CAKE_SLICES_EATEN: CraftStatistic;
  readonly CAULDRON_FILLED: CraftStatistic;
  readonly CAULDRON_USED: CraftStatistic;
  readonly CHEST_OPENED: CraftStatistic;
  readonly CLEAN_SHULKER_BOX: CraftStatistic;
  readonly CLIMB_ONE_CM: CraftStatistic;
  readonly CRAFTING_TABLE_INTERACTION: CraftStatistic;
  readonly CRAFT_ITEM: CraftStatistic;
  readonly CROUCH_ONE_CM: CraftStatistic;
  readonly DAMAGE_ABSORBED: CraftStatistic;
  readonly DAMAGE_BLOCKED_BY_SHIELD: CraftStatistic;
  readonly DAMAGE_DEALT: CraftStatistic;
  readonly DAMAGE_DEALT_ABSORBED: CraftStatistic;
  readonly DAMAGE_DEALT_RESISTED: CraftStatistic;
  readonly DAMAGE_RESISTED: CraftStatistic;
  readonly DAMAGE_TAKEN: CraftStatistic;
  readonly DEATHS: CraftStatistic;
  readonly DISPENSER_INSPECTED: CraftStatistic;
  readonly DROP: CraftStatistic;
  readonly DROPPER_INSPECTED: CraftStatistic;
  readonly DROP_COUNT: CraftStatistic;
  readonly ENDERCHEST_OPENED: CraftStatistic;
  readonly ENTITY_KILLED_BY: CraftStatistic;
  readonly FALL_ONE_CM: CraftStatistic;
  readonly FISH_CAUGHT: CraftStatistic;
  readonly FLOWER_POTTED: CraftStatistic;
  readonly FLY_ONE_CM: CraftStatistic;
  readonly FURNACE_INTERACTION: CraftStatistic;
  readonly HAPPY_GHAST_ONE_CM: CraftStatistic;
  readonly HOPPER_INSPECTED: CraftStatistic;
  readonly HORSE_ONE_CM: CraftStatistic;
  readonly INTERACT_WITH_ANVIL: CraftStatistic;
  readonly INTERACT_WITH_BLAST_FURNACE: CraftStatistic;
  readonly INTERACT_WITH_CAMPFIRE: CraftStatistic;
  readonly INTERACT_WITH_CARTOGRAPHY_TABLE: CraftStatistic;
  readonly INTERACT_WITH_GRINDSTONE: CraftStatistic;
  readonly INTERACT_WITH_LECTERN: CraftStatistic;
  readonly INTERACT_WITH_LOOM: CraftStatistic;
  readonly INTERACT_WITH_SMITHING_TABLE: CraftStatistic;
  readonly INTERACT_WITH_SMOKER: CraftStatistic;
  readonly INTERACT_WITH_STONECUTTER: CraftStatistic;
  readonly ITEM_ENCHANTED: CraftStatistic;
  readonly JUMP: CraftStatistic;
  readonly KILL_ENTITY: CraftStatistic;
  readonly LEAVE_GAME: CraftStatistic;
  readonly MINECART_ONE_CM: CraftStatistic;
  readonly MINE_BLOCK: CraftStatistic;
  readonly MOB_KILLS: CraftStatistic;
  readonly NOTEBLOCK_PLAYED: CraftStatistic;
  readonly NOTEBLOCK_TUNED: CraftStatistic;
  readonly OPEN_BARREL: CraftStatistic;
  readonly PICKUP: CraftStatistic;
  readonly PIG_ONE_CM: CraftStatistic;
  readonly PLAYER_KILLS: CraftStatistic;
  readonly PLAY_ONE_MINUTE: CraftStatistic;
  readonly RAID_TRIGGER: CraftStatistic;
  readonly RAID_WIN: CraftStatistic;
  readonly RECORD_PLAYED: CraftStatistic;
  readonly SHULKER_BOX_OPENED: CraftStatistic;
  readonly SLEEP_IN_BED: CraftStatistic;
  readonly SNEAK_TIME: CraftStatistic;
  readonly SPRINT_ONE_CM: CraftStatistic;
  readonly STRIDER_ONE_CM: CraftStatistic;
  readonly SWIM_ONE_CM: CraftStatistic;
  readonly TALKED_TO_VILLAGER: CraftStatistic;
  readonly TARGET_HIT: CraftStatistic;
  readonly TIME_SINCE_DEATH: CraftStatistic;
  readonly TIME_SINCE_REST: CraftStatistic;
  readonly TOTAL_WORLD_TIME: CraftStatistic;
  readonly TRADED_WITH_VILLAGER: CraftStatistic;
  readonly TRAPPED_CHEST_TRIGGERED: CraftStatistic;
  readonly USE_ITEM: CraftStatistic;
  readonly WALK_ONE_CM: CraftStatistic;
  readonly WALK_ON_WATER_ONE_CM: CraftStatistic;
  readonly WALK_UNDER_WATER_ONE_CM: CraftStatistic;
  decrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: number, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  decrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: j_net_minecraft_server_level.ServerPlayer): void;
  decrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number, arg4: j_net_minecraft_server_level.ServerPlayer): void;
  decrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  decrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.entity.EntityType">, arg3: number, arg4: j_net_minecraft_server_level.ServerPlayer): void;
  decrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.entity.EntityType">, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  getBukkitStatistic(arg0: j_net_minecraft_stats.Stat<object>): JavaOpaque<"org.bukkit.Statistic">;
  getEntityStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): j_net_minecraft_stats.Stat;
  getEntityTypeFromStatistic(arg0: j_net_minecraft_stats.Stat<j_net_minecraft_world_entity.EntityType<object>>): JavaOpaque<"org.bukkit.entity.EntityType">;
  getMaterialFromStatistic(arg0: j_net_minecraft_stats.Stat<object>): JavaOpaque<"org.bukkit.Material">;
  getNMSStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): j_net_minecraft_stats.Stat;
  getStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">): number;
  getStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">): number;
  getStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.entity.EntityType">): number;
  incrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: number, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  incrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: j_net_minecraft_server_level.ServerPlayer): void;
  incrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number, arg4: j_net_minecraft_server_level.ServerPlayer): void;
  incrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  incrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.entity.EntityType">, arg3: number, arg4: j_net_minecraft_server_level.ServerPlayer): void;
  incrementStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.entity.EntityType">, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  setStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: number, arg3: j_net_minecraft_server_level.ServerPlayer): void;
  setStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number, arg4: j_net_minecraft_server_level.ServerPlayer): void;
  setStatistic(arg0: j_net_minecraft_stats.ServerStatsCounter, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.entity.EntityType">, arg3: number, arg4: j_net_minecraft_server_level.ServerPlayer): void;
  valueOf(arg0: string): CraftStatistic;
  values(): Array<CraftStatistic>;
}

/** JVM class org.bukkit.craftbukkit.CraftWorld. */
export interface CraftWorldMembers {
  readonly __javaSupertypes?: readonly [CraftRegionAccessor, JavaOpaque<"org.bukkit.World">];
  addEntityToWorld(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  addEntityWithPassengers(arg0: j_net_minecraft_world_entity.Entity, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): void;
  addPluginChunkTicket(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.plugin.Plugin">): boolean;
  canGenerateStructures(): boolean;
  createExplosion(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
  createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
  createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: JavaOpaque<"org.bukkit.entity.Entity">, arg7: JavaConsumer<j_net_minecraft_world_level.ServerExplosion>): boolean;
  createExplosion(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number): boolean;
  createExplosion(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: boolean): boolean;
  createExplosion(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: boolean, arg3: boolean): boolean;
  createExplosion(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: boolean, arg3: boolean, arg4: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  createExplosion(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): boolean;
  dropItem(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.entity.Item">;
  dropItem(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">>): JavaOpaque<"org.bukkit.entity.Item">;
  dropItemNaturally(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.entity.Item">;
  dropItemNaturally(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">>): JavaOpaque<"org.bukkit.entity.Item">;
  equals(arg0: object): boolean;
  findLightningRod(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Location">;
  findLightningTarget(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Location">;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.TreeType">): boolean;
  generateTree(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.TreeType">, arg2: JavaOpaque<"org.bukkit.BlockChangeDelegate">): boolean;
  getAllowAnimals(): boolean;
  getAllowMonsters(): boolean;
  getAmbientSpawnLimit(): number;
  getAnimalSpawnLimit(): number;
  getBiome(arg0: number, arg1: number): JavaOpaque<"org.bukkit.block.Biome">;
  getBiomeProvider(): JavaOpaque<"org.bukkit.generator.BiomeProvider"> | null;
  getBlockAt(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Block">;
  getBlockAt(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.block.Block">;
  getBlockMetadata(): j_org_bukkit_craftbukkit_metadata.BlockMetadataStore;
  getChunkAt(arg0: number, arg1: number): JavaOpaque<"org.bukkit.Chunk">;
  getChunkAt(arg0: number, arg1: number, arg2: boolean): JavaOpaque<"org.bukkit.Chunk">;
  getChunkAt(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Chunk">;
  getChunkAt(arg0: JavaOpaque<"org.bukkit.block.Block">): JavaOpaque<"org.bukkit.Chunk">;
  getChunkAtAsync(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: JavaConsumer<JavaOpaque<"org.bukkit.Chunk">>): void;
  getChunkCount(): number;
  getChunksAtAsync(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: JavaRunnable): void;
  getClearWeatherDuration(): number;
  getCoordinateScale(): number;
  getDifficulty(): JavaOpaque<"org.bukkit.Difficulty">;
  getEmptyChunkSnapshot(arg0: number, arg1: number, arg2: boolean, arg3: boolean): JavaOpaque<"org.bukkit.ChunkSnapshot">;
  getEnderDragonBattle(): JavaOpaque<"org.bukkit.boss.DragonBattle">;
  getEntitiesByClass<T /* extends JavaOpaque<"org.bukkit.entity.Entity"> */>(...arg0: Array<JavaClass<T>>): JavaCollection<T>;
  getEntity(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"org.bukkit.entity.Entity">;
  getEntityCount(): number;
  getEnvironment(): JavaOpaque<"org.bukkit.World$Environment">;
  getForceLoadedChunks(): JavaCollection<JavaOpaque<"org.bukkit.Chunk">>;
  getFullTime(): bigint;
  getGameRuleDefault<T>(arg0: JavaOpaque<"org.bukkit.GameRule", [T]>): T;
  getGameRuleDefinitions(): JavaMap<string, j_net_minecraft_world_level.GameRules_Type<object>>;
  getGameRuleValue(arg0: string): string;
  getGameRuleValue<T>(arg0: JavaOpaque<"org.bukkit.GameRule", [T]>): T;
  getGameRules(): Array<string>;
  getGameRulesNMS(): JavaMap<string, j_net_minecraft_world_level.GameRules_Key<object>>;
  getGameTime(): bigint;
  getGenerator(): JavaOpaque<"org.bukkit.generator.ChunkGenerator"> | null;
  getHandle(): j_net_minecraft_server_level.ServerLevel;
  getHighestBlockAt(arg0: number, arg1: number): JavaOpaque<"org.bukkit.block.Block">;
  getHighestBlockAt(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.HeightMap">): JavaOpaque<"org.bukkit.block.Block">;
  getHighestBlockAt(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.block.Block">;
  getHighestBlockAt(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.HeightMap">): JavaOpaque<"org.bukkit.block.Block">;
  getHighestBlockYAt(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.HeightMap">): number;
  getHumidity(arg0: number, arg1: number): number;
  getHumidity(arg0: number, arg1: number, arg2: number): number;
  getInfiniburn(): JavaCollection<JavaOpaque<"org.bukkit.Material">>;
  getIntersectingChunks(arg0: JavaOpaque<"org.bukkit.util.BoundingBox">): JavaCollection<JavaOpaque<"org.bukkit.Chunk">>;
  getKeepSpawnInMemory(): boolean;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getListeningPluginChannels(): JavaSet<string>;
  getLoadedChunks(): Array<JavaOpaque<"org.bukkit.Chunk">>;
  getLogicalHeight(): number;
  getMaxHeight(): number;
  getMaxY(): number;
  getMetadata(arg0: string): JavaList<JavaOpaque<"org.bukkit.metadata.MetadataValue">>;
  getMinHeight(): number;
  getMonsterSpawnLimit(): number;
  getNMSEntities(): Iterable<j_net_minecraft_world_entity.Entity>;
  getName(): string;
  getNearbyEntities(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: number, arg3: number): JavaCollection<JavaOpaque<"org.bukkit.entity.Entity">>;
  getNearbyEntities(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: number, arg3: number, arg4: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>): JavaCollection<JavaOpaque<"org.bukkit.entity.Entity">>;
  getNearbyEntities(arg0: JavaOpaque<"org.bukkit.util.BoundingBox">): JavaCollection<JavaOpaque<"org.bukkit.entity.Entity">>;
  getNearbyEntities(arg0: JavaOpaque<"org.bukkit.util.BoundingBox">, arg1: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>): JavaCollection<JavaOpaque<"org.bukkit.entity.Entity">>;
  getPVP(): boolean;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlayerCount(): number;
  getPlayers(): JavaList<JavaOpaque<"org.bukkit.entity.Player">>;
  getPlayersSeeingChunk(arg0: number, arg1: number): JavaCollection<JavaOpaque<"org.bukkit.entity.Player">>;
  getPlayersSeeingChunk(arg0: JavaOpaque<"org.bukkit.Chunk">): JavaCollection<JavaOpaque<"org.bukkit.entity.Player">>;
  getPluginChunkTickets(): JavaMap<JavaOpaque<"org.bukkit.plugin.Plugin">, JavaCollection<JavaOpaque<"org.bukkit.Chunk">>>;
  getPluginChunkTickets(arg0: number, arg1: number): JavaCollection<JavaOpaque<"org.bukkit.plugin.Plugin">>;
  getPopulators(): JavaList<JavaOpaque<"org.bukkit.generator.BlockPopulator">>;
  getRaid(arg0: number): JavaOpaque<"org.bukkit.Raid"> | null;
  getRaids(): JavaList<JavaOpaque<"org.bukkit.Raid">>;
  getSeaLevel(): number;
  getSeed(): bigint;
  getSendViewDistance(): number;
  getSimulationDistance(): number;
  getSpawnLimit(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): number;
  getSpawnLimitUnsafe(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): number;
  getSpawnLocation(): JavaOpaque<"org.bukkit.Location">;
  getStructures(arg0: number, arg1: number): JavaCollection<JavaOpaque<"org.bukkit.generator.structure.GeneratedStructure">>;
  getStructures(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.generator.structure.Structure">): JavaCollection<JavaOpaque<"org.bukkit.generator.structure.GeneratedStructure">>;
  getTemperature(arg0: number, arg1: number): number;
  getTemperature(arg0: number, arg1: number, arg2: number): number;
  getThunderDuration(): number;
  getTickableTileEntityCount(): number;
  getTicksPerAmbientSpawns(): bigint;
  getTicksPerAnimalSpawns(): bigint;
  getTicksPerMonsterSpawns(): bigint;
  getTicksPerSpawns(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">): bigint;
  getTicksPerWaterAmbientSpawns(): bigint;
  getTicksPerWaterSpawns(): bigint;
  getTicksPerWaterUndergroundCreatureSpawns(): bigint;
  getTileEntityCount(): number;
  getTime(): bigint;
  getUID(): JavaOpaque<"java.util.UUID">;
  getViewDistance(): number;
  getVoidDamageAmount(): number;
  getVoidDamageMinBuildHeightOffset(): number;
  getWaterAmbientSpawnLimit(): number;
  getWaterAnimalSpawnLimit(): number;
  getWaterUndergroundCreatureSpawnLimit(): number;
  getWeatherDuration(): number;
  getWorldBorder(): JavaOpaque<"org.bukkit.WorldBorder">;
  getWorldPath(): JavaOpaque<"java.nio.file.Path">;
  getWorldType(): JavaOpaque<"org.bukkit.WorldType">;
  hasBonusChest(): boolean;
  hasCeiling(): boolean;
  hasMetadata(arg0: string): boolean;
  hasRaids(): boolean;
  hasSkyLight(): boolean;
  hasStorm(): boolean;
  hasStructureAt(arg0: JavaOpaque<"io.papermc.paper.math.Position">, arg1: JavaOpaque<"org.bukkit.generator.structure.Structure">): boolean;
  hashCode(): number;
  isAutoSave(): boolean;
  isBedWorks(): boolean;
  isChunkForceLoaded(arg0: number, arg1: number): boolean;
  isChunkGenerated(arg0: number, arg1: number): boolean;
  isChunkInUse(arg0: number, arg1: number): boolean;
  isChunkLoaded(arg0: number, arg1: number): boolean;
  isChunkLoaded(arg0: JavaOpaque<"org.bukkit.Chunk">): boolean;
  isClearWeather(): boolean;
  isDayTime(): boolean;
  isFixedTime(): boolean;
  isGameRule(arg0: string): boolean;
  isHardcore(): boolean;
  isNatural(): boolean;
  isPiglinSafe(): boolean;
  isRespawnAnchorWorks(): boolean;
  isThundering(): boolean;
  isUltraWarm(): boolean;
  isVoidDamageEnabled(): boolean;
  loadChunk(arg0: number, arg1: number): void;
  loadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
  loadChunk(arg0: JavaOpaque<"org.bukkit.Chunk">): void;
  locateNearestBiome(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: number, arg3: number, ...arg4: Array<JavaOpaque<"org.bukkit.block.Biome">>): JavaOpaque<"org.bukkit.util.BiomeSearchResult">;
  locateNearestBiome(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, ...arg2: Array<JavaOpaque<"org.bukkit.block.Biome">>): JavaOpaque<"org.bukkit.util.BiomeSearchResult">;
  locateNearestRaid(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number): JavaOpaque<"org.bukkit.Raid">;
  locateNearestStructure(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaList<JavaOpaque<"org.bukkit.generator.structure.Structure">>, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.util.StructureSearchResult">;
  locateNearestStructure(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.StructureType">, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.Location">;
  locateNearestStructure(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.generator.structure.Structure">, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.util.StructureSearchResult">;
  locateNearestStructure(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.generator.structure.StructureType">, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.util.StructureSearchResult">;
  playEffect(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: number): void;
  playEffect(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: number, arg3: number): void;
  playEffect<T>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: T): void;
  playEffect<T>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: T, arg3: number): void;
  playEffect(arg0: JavaOpaque<"org.bukkit.entity.Player">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: number): void;
  playNote(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Instrument">, arg2: JavaOpaque<"org.bukkit.Note">): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">, arg1: JavaOpaque<"net.kyori.adventure.sound.Sound$Emitter">): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: string, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  pointers(): JavaOpaque<"net.kyori.adventure.pointer.Pointers">;
  rayTrace(arg0: JavaOpaque<"io.papermc.paper.math.Position">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaOpaque<"org.bukkit.FluidCollisionMode">, arg4: boolean, arg5: number, arg6: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>, arg7: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTrace(arg0: JavaConsumer<JavaOpaque<"io.papermc.paper.raytracing.PositionedRayTraceConfigurationBuilder">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTrace(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaOpaque<"org.bukkit.FluidCollisionMode">, arg4: boolean, arg5: number, arg6: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceBlocks(arg0: JavaOpaque<"io.papermc.paper.math.Position">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaOpaque<"org.bukkit.FluidCollisionMode">, arg4: boolean, arg5: JavaPredicate<JavaOpaque<"org.bukkit.block.Block">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceBlocks(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceBlocks(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaOpaque<"org.bukkit.FluidCollisionMode">): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceBlocks(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaOpaque<"org.bukkit.FluidCollisionMode">, arg4: boolean): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntities(arg0: JavaOpaque<"io.papermc.paper.math.Position">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: number, arg4: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntities(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntities(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: number): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntities(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: number, arg4: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntities(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaPredicate<JavaOpaque<"org.bukkit.entity.Entity">>): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  readBukkitValues(arg0: j_net_minecraft_nbt.Tag): void;
  refreshChunk(arg0: number, arg1: number): boolean;
  removeMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  removePluginChunkTicket(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.plugin.Plugin">): boolean;
  removePluginChunkTickets(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  save(arg0: boolean): void;
  sendGameEvent(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.GameEvent">, arg2: JavaOpaque<"org.bukkit.util.Vector">): void;
  sendPluginMessage(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: Array<number>): void;
  setAmbientSpawnLimit(arg0: number): void;
  setAnimalSpawnLimit(arg0: number): void;
  setAutoSave(arg0: boolean): void;
  setBiome(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): void;
  setBiome(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.block.Biome">): void;
  setChunkForceLoaded(arg0: number, arg1: number, arg2: boolean): void;
  setClearWeatherDuration(arg0: number): void;
  setDifficulty(arg0: JavaOpaque<"org.bukkit.Difficulty">): void;
  setFullTime(arg0: bigint): void;
  setGameRule<T>(arg0: JavaOpaque<"org.bukkit.GameRule", [T]>, arg1: T): boolean;
  setGameRuleValue(arg0: string, arg1: string): boolean;
  setHardcore(arg0: boolean): void;
  setKeepSpawnInMemory(arg0: boolean): void;
  setMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.metadata.MetadataValue">): void;
  setMonsterSpawnLimit(arg0: number): void;
  setPVP(arg0: boolean): void;
  setSendViewDistance(arg0: number): void;
  setSimulationDistance(arg0: number): void;
  setSpawnFlags(arg0: boolean, arg1: boolean): void;
  setSpawnLimit(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">, arg1: number): void;
  setSpawnLocation(arg0: number, arg1: number, arg2: number): boolean;
  setSpawnLocation(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
  setSpawnLocation(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  setStorm(arg0: boolean): void;
  setThunderDuration(arg0: number): void;
  setThundering(arg0: boolean): void;
  setTicksPerAmbientSpawns(arg0: number): void;
  setTicksPerAnimalSpawns(arg0: number): void;
  setTicksPerMonsterSpawns(arg0: number): void;
  setTicksPerSpawns(arg0: JavaOpaque<"org.bukkit.entity.SpawnCategory">, arg1: number): void;
  setTicksPerWaterAmbientSpawns(arg0: number): void;
  setTicksPerWaterSpawns(arg0: number): void;
  setTicksPerWaterUndergroundCreatureSpawns(arg0: number): void;
  setTime(arg0: bigint): void;
  setViewDistance(arg0: number): void;
  setVoidDamageAmount(arg0: number): void;
  setVoidDamageEnabled(arg0: boolean): void;
  setVoidDamageMinBuildHeightOffset(arg0: number): void;
  setWaterAmbientSpawnLimit(arg0: number): void;
  setWaterAnimalSpawnLimit(arg0: number): void;
  setWaterUndergroundCreatureSpawnLimit(arg0: number): void;
  setWeatherDuration(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  spawn<T /* extends JavaOpaque<"org.bukkit.entity.LivingEntity"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaClass<T>, arg2: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">, arg3: boolean, arg4: JavaConsumer<T> | null): T;
  spawnArrow(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: number): JavaOpaque<"org.bukkit.entity.Arrow">;
  spawnArrow<T /* extends JavaOpaque<"org.bukkit.entity.AbstractArrow"> */>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: number, arg4: JavaClass<T>): T;
  /** @throws java.lang.IllegalArgumentException */
  spawnFallingBlock(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): JavaOpaque<"org.bukkit.entity.FallingBlock">;
  /** @throws java.lang.IllegalArgumentException */
  spawnFallingBlock(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.block.data.BlockData">): JavaOpaque<"org.bukkit.entity.FallingBlock">;
  /** @throws java.lang.IllegalArgumentException */
  spawnFallingBlock(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.material.MaterialData">): JavaOpaque<"org.bukkit.entity.FallingBlock">;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T, arg10: boolean): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaList<JavaOpaque<"org.bukkit.entity.Player">>, arg2: JavaOpaque<"org.bukkit.entity.Player">, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: T, arg12: boolean): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: boolean): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: T): void;
  spigot(): JavaOpaque<"org.bukkit.World$Spigot">;
  storeBukkitValues(arg0: j_net_minecraft_nbt.CompoundTag): void;
  strikeLightning(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.entity.LightningStrike">;
  strikeLightningEffect(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.entity.LightningStrike">;
  toString(): string;
  unloadChunk(arg0: number, arg1: number): boolean;
  unloadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
  unloadChunk(arg0: JavaOpaque<"org.bukkit.Chunk">): boolean;
  unloadChunkRequest(arg0: number, arg1: number): boolean;
  vanillaBiomeProvider(): JavaOpaque<"org.bukkit.generator.BiomeProvider">;
}
export type CraftWorld = CraftWorldMembers & CraftRegionAccessor & JavaOpaque<"org.bukkit.World">;
export interface CraftWorldStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaOpaque<"org.bukkit.generator.ChunkGenerator"> | null, arg2: JavaOpaque<"org.bukkit.generator.BiomeProvider"> | null, arg3: JavaOpaque<"org.bukkit.World$Environment">): CraftWorld;
  readonly CUSTOM_DIMENSION_OFFSET: 10;
  getGameRulesNMS(arg0: j_net_minecraft_world_level.GameRules): JavaMap<string, j_net_minecraft_world_level.GameRules_Key<object>>;
}

/** JVM class org.bukkit.craftbukkit.CraftWorldBorder. */
export interface CraftWorldBorderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.WorldBorder">];
  getCenter(): JavaOpaque<"org.bukkit.Location">;
  getDamageAmount(): number;
  getDamageBuffer(): number;
  getHandle(): j_net_minecraft_world_level_border.WorldBorder;
  getMaxCenterCoordinate(): number;
  getMaxSize(): number;
  getSize(): number;
  getWarningDistance(): number;
  getWarningTime(): number;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  isInside(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  isVirtual(): boolean;
  reset(): void;
  setCenter(arg0: number, arg1: number): void;
  setCenter(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setDamageAmount(arg0: number): void;
  setDamageBuffer(arg0: number): void;
  setSize(arg0: number): void;
  setSize(arg0: number, arg1: bigint): void;
  setSize(arg0: number, arg1: JavaOpaque<"java.util.concurrent.TimeUnit">, arg2: bigint): void;
  setWarningDistance(arg0: number): void;
  setWarningTime(arg0: number): void;
}
export type CraftWorldBorder = CraftWorldBorderMembers & JavaOpaque<"org.bukkit.WorldBorder">;
export interface CraftWorldBorderStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): CraftWorldBorder;
  new(arg0: CraftWorld): CraftWorldBorder;
}

/** JVM class org.bukkit.craftbukkit.Main. */
export interface Main_4Members {
}
export type Main_4 = Main_4Members;
export interface Main_4Statics {
  new(): Main_4;
  readonly BOOT_TIME: JavaOpaque<"java.time.Instant">;
  main(arg0: Array<string>): void;
  readonly useConsole: boolean;
  readonly useJline: boolean;
}

/** JVM interface org.bukkit.craftbukkit.Overridden. */
export interface OverriddenMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type Overridden = OverriddenMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface OverriddenStatics {
}
