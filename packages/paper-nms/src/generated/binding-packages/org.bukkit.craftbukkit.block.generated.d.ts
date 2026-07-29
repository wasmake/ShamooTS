// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_entity_trialspawner from './net.minecraft.world.level.block.entity.trialspawner.generated.js';
import type * as j_net_minecraft_world_level_block_entity_vault from './net.minecraft.world.level.block.entity.vault.generated.js';
import type * as j_net_minecraft_world_level_block_piston from './net.minecraft.world.level.block.piston.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';
import type * as j_org_bukkit_craftbukkit_spawner from './org.bukkit.craftbukkit.spawner.generated.js';

/** JVM class org.bukkit.craftbukkit.block.CapturedBlockState. */
export interface CapturedBlockStateMembers {
  readonly __javaSupertypes?: readonly [CraftBlockState];
  copy(): CapturedBlockState;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CapturedBlockState;
  place(arg0: number): boolean;
  update(arg0: boolean, arg1: boolean): boolean;
}
export type CapturedBlockState = CapturedBlockStateMembers & CraftBlockState;
export interface CapturedBlockStateStatics {
  new(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number, arg2: boolean): CapturedBlockState;
  getTreeBlockState(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: number): CapturedBlockState;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBanner. */
export interface CraftBannerMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BannerBlockEntity>, JavaOpaque<"org.bukkit.block.Banner">];
  addPattern(arg0: JavaOpaque<"org.bukkit.block.banner.Pattern">): void;
  applyTo(arg0: j_net_minecraft_world_level_block_entity.BannerBlockEntity): void;
  copy(): CraftBanner;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBanner;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getBaseColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getCustomName(): string;
  getPattern(arg0: number): JavaOpaque<"org.bukkit.block.banner.Pattern">;
  getPatterns(): JavaList<JavaOpaque<"org.bukkit.block.banner.Pattern">>;
  load(arg0: j_net_minecraft_world_level_block_entity.BannerBlockEntity): void;
  numberOfPatterns(): number;
  removePattern(arg0: number): JavaOpaque<"org.bukkit.block.banner.Pattern">;
  setBaseColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setCustomName(arg0: string): void;
  setPattern(arg0: number, arg1: JavaOpaque<"org.bukkit.block.banner.Pattern">): void;
  setPatterns(arg0: JavaList<JavaOpaque<"org.bukkit.block.banner.Pattern">>): void;
}
export type CraftBanner = CraftBannerMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BannerBlockEntity> & JavaOpaque<"org.bukkit.block.Banner">;
export interface CraftBannerStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BannerBlockEntity): CraftBanner;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBarrel. */
export interface CraftBarrelMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.BarrelBlockEntity>, JavaOpaque<"org.bukkit.block.Barrel">];
  close(): void;
  copy(): CraftBarrel;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBarrel;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  isOpen(): boolean;
  open(): void;
}
export type CraftBarrel = CraftBarrelMembers & CraftLootable<j_net_minecraft_world_level_block_entity.BarrelBlockEntity> & JavaOpaque<"org.bukkit.block.Barrel">;
export interface CraftBarrelStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BarrelBlockEntity): CraftBarrel;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBeacon. */
export interface CraftBeaconMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BeaconBlockEntity>, JavaOpaque<"org.bukkit.block.Beacon">];
  copy(): CraftBeacon;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBeacon;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getCustomName(): string;
  getEffectRange(): number;
  getEntitiesInRange(): JavaCollection<JavaOpaque<"org.bukkit.entity.LivingEntity">>;
  getLock(): string;
  getPrimaryEffect(): JavaOpaque<"org.bukkit.potion.PotionEffect">;
  getSecondaryEffect(): JavaOpaque<"org.bukkit.potion.PotionEffect">;
  getTier(): number;
  isLocked(): boolean;
  resetEffectRange(): void;
  setCustomName(arg0: string): void;
  setEffectRange(arg0: number): void;
  setLock(arg0: string): void;
  setLockItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setPrimaryEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): void;
  setSecondaryEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): void;
}
export type CraftBeacon = CraftBeaconMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BeaconBlockEntity> & JavaOpaque<"org.bukkit.block.Beacon">;
export interface CraftBeaconStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BeaconBlockEntity): CraftBeacon;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBed. */
export interface CraftBedMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BedBlockEntity>, JavaOpaque<"org.bukkit.block.Bed">];
  copy(): CraftBed;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBed;
  getColor(): JavaOpaque<"org.bukkit.DyeColor">;
  setColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
}
export type CraftBed = CraftBedMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BedBlockEntity> & JavaOpaque<"org.bukkit.block.Bed">;
export interface CraftBedStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BedBlockEntity): CraftBed;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBeehive. */
export interface CraftBeehiveMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BeehiveBlockEntity>, JavaOpaque<"org.bukkit.block.Beehive">];
  addEntity(arg0: JavaOpaque<"org.bukkit.entity.Bee">): void;
  clearEntities(): void;
  copy(): CraftBeehive;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBeehive;
  getEntityCount(): number;
  getFlower(): JavaOpaque<"org.bukkit.Location">;
  getMaxEntities(): number;
  isFull(): boolean;
  isSedated(): boolean;
  releaseEntities(): JavaList<JavaOpaque<"org.bukkit.entity.Bee">>;
  setFlower(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setMaxEntities(arg0: number): void;
}
export type CraftBeehive = CraftBeehiveMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BeehiveBlockEntity> & JavaOpaque<"org.bukkit.block.Beehive">;
export interface CraftBeehiveStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BeehiveBlockEntity): CraftBeehive;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBell. */
export interface CraftBellMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BellBlockEntity>, JavaOpaque<"org.bukkit.block.Bell">];
  copy(): CraftBell;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBell;
  getResonatingTicks(): number;
  getShakingTicks(): number;
  isResonating(): boolean;
  isShaking(): boolean;
  ring(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
}
export type CraftBell = CraftBellMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BellBlockEntity> & JavaOpaque<"org.bukkit.block.Bell">;
export interface CraftBellStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BellBlockEntity): CraftBell;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBiome. */
export interface CraftBiomeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.block.Biome">, j_net_minecraft_world_level_biome.Biome]>, JavaOpaque<"org.bukkit.block.Biome">];
}
export type CraftBiome = CraftBiomeMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.block.Biome">, j_net_minecraft_world_level_biome.Biome]> & JavaOpaque<"org.bukkit.block.Biome">;
export interface CraftBiomeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): CraftBiome;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.block.Biome">): j_net_minecraft_world_level_biome.Biome | null;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.block.Biome">): j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome> | null;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): JavaOpaque<"org.bukkit.block.Biome">;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_biome.Biome): JavaOpaque<"org.bukkit.block.Biome">;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBiome$LegacyCustomBiomeImpl. */
export interface CraftBiome_LegacyCustomBiomeImplMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.block.Biome">];
  compareTo(arg0: JavaOpaque<"org.bukkit.block.Biome">): number;
  equals(arg0: object): boolean;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  hashCode(): number;
  name(): string;
  ordinal(): number;
  toString(): string;
}
export type CraftBiome_LegacyCustomBiomeImpl = CraftBiome_LegacyCustomBiomeImplMembers & JavaOpaque<"org.bukkit.block.Biome">;
export interface CraftBiome_LegacyCustomBiomeImplStatics {
  new(): CraftBiome_LegacyCustomBiomeImpl;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBlastFurnace. */
export interface CraftBlastFurnaceMembers {
  readonly __javaSupertypes?: readonly [CraftFurnace<j_net_minecraft_world_level_block_entity.BlastFurnaceBlockEntity>, JavaOpaque<"org.bukkit.block.BlastFurnace">];
  copy(): CraftBlastFurnace;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBlastFurnace;
}
export type CraftBlastFurnace = CraftBlastFurnaceMembers & CraftFurnace<j_net_minecraft_world_level_block_entity.BlastFurnaceBlockEntity> & JavaOpaque<"org.bukkit.block.BlastFurnace">;
export interface CraftBlastFurnaceStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BlastFurnaceBlockEntity): CraftBlastFurnace;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBlock. */
export interface CraftBlockMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.block.Block">];
  applyBoneMeal(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  breakNaturally(): boolean;
  breakNaturally(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  breakNaturally(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean, arg2: boolean): boolean;
  breakNaturally(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean, arg2: boolean, arg3: boolean): boolean;
  breakNaturally(arg0: boolean, arg1: boolean): boolean;
  canPlace(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): boolean;
  equals(arg0: object): boolean;
  fluidTick(): void;
  getBiome(): JavaOpaque<"org.bukkit.block.Biome">;
  getBlockData(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockPower(): number;
  getBlockPower(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): number;
  getBlockSoundGroup(): JavaOpaque<"org.bukkit.SoundGroup">;
  getBoundingBox(): JavaOpaque<"org.bukkit.util.BoundingBox">;
  getBreakSpeed(arg0: JavaOpaque<"org.bukkit.entity.Player">): number;
  getChunk(): JavaOpaque<"org.bukkit.Chunk">;
  getCollisionShape(): JavaOpaque<"org.bukkit.util.VoxelShape">;
  getComputedBiome(): JavaOpaque<"org.bukkit.block.Biome">;
  getCraftWorld(): j_org_bukkit_craftbukkit.CraftWorld;
  getData(): number;
  getDrops(): JavaCollection<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getDrops(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaCollection<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getDrops(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"org.bukkit.entity.Entity">): JavaCollection<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getFace(arg0: JavaOpaque<"org.bukkit.block.Block">): JavaOpaque<"org.bukkit.block.BlockFace">;
  getFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): JavaOpaque<"org.bukkit.block.Block">;
  getFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: number): JavaOpaque<"org.bukkit.block.Block">;
  getHandle(): j_net_minecraft_world_level.LevelAccessor;
  getHumidity(): number;
  getLightFromBlocks(): number;
  getLightFromSky(): number;
  getLightLevel(): number;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getLocation(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Location">;
  getMetadata(arg0: string): JavaList<JavaOpaque<"org.bukkit.metadata.MetadataValue">>;
  getNMS(): j_net_minecraft_world_level_block_state.BlockState;
  getNMSFluid(): j_net_minecraft_world_level_material.FluidState;
  getPistonMoveReaction(): JavaOpaque<"org.bukkit.block.PistonMoveReaction">;
  getPosition(): j_net_minecraft_core.BlockPos;
  getRelative(arg0: number, arg1: number, arg2: number): JavaOpaque<"org.bukkit.block.Block">;
  getRelative(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): JavaOpaque<"org.bukkit.block.Block">;
  getRelative(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: number): JavaOpaque<"org.bukkit.block.Block">;
  getSoundGroup(): JavaOpaque<"com.destroystokyo.paper.block.BlockSoundGroup">;
  getState(): JavaOpaque<"org.bukkit.block.BlockState">;
  getState(arg0: boolean): JavaOpaque<"org.bukkit.block.BlockState">;
  getTemperature(): number;
  getTranslationKey(): string;
  getType(): JavaOpaque<"org.bukkit.Material">;
  getVector(): JavaOpaque<"org.bukkit.util.BlockVector">;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  getX(): number;
  getY(): number;
  getZ(): number;
  hasMetadata(arg0: string): boolean;
  hashCode(): number;
  isBlockFaceIndirectlyPowered(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isBlockFacePowered(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isBlockIndirectlyPowered(): boolean;
  isBlockPowered(): boolean;
  isBuildable(): boolean;
  isBurnable(): boolean;
  isCollidable(): boolean;
  isEmpty(): boolean;
  isLiquid(): boolean;
  isPassable(): boolean;
  isPreferredTool(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  isReplaceable(): boolean;
  isSolid(): boolean;
  isSuffocating(): boolean;
  isValidTool(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  randomTick(): void;
  rayTrace(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: number, arg3: JavaOpaque<"org.bukkit.FluidCollisionMode">): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  removeMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  setBiome(arg0: JavaOpaque<"org.bukkit.block.Biome">): void;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">, arg1: boolean): void;
  setData(arg0: number): void;
  setData(arg0: number, arg1: boolean): void;
  setMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.metadata.MetadataValue">): void;
  setType(arg0: JavaOpaque<"org.bukkit.Material">): void;
  setType(arg0: JavaOpaque<"org.bukkit.Material">, arg1: boolean): void;
  tick(): void;
  toString(): string;
  translationKey(): string;
}
export type CraftBlock = CraftBlockMembers & JavaOpaque<"org.bukkit.block.Block">;
export interface CraftBlockStatics {
  new(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): CraftBlock;
  at(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): CraftBlock;
  blockFaceToNotch(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): j_net_minecraft_core.Direction;
  notchToBlockFace(arg0: j_net_minecraft_core.Direction): JavaOpaque<"org.bukkit.block.BlockFace">;
  setBlockState(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: boolean): boolean;
}

/** JVM abstract org.bukkit.craftbukkit.block.CraftBlockEntityState. */
export interface CraftBlockEntityStateMembers<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftBlockState, JavaOpaque<"org.bukkit.block.TileState">];
  applyComponents(arg0: j_net_minecraft_core_component.DataComponentMap, arg1: j_net_minecraft_core_component.DataComponentPatch): JavaSet<j_net_minecraft_core_component.DataComponentType<object>>;
  collectComponents(): j_net_minecraft_core_component.DataComponentMap;
  copy(): CraftBlockEntityState<T>;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBlockEntityState<T>;
  getBlockEntity(): T;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getRegistryAccess(): j_net_minecraft_core.RegistryAccess;
  getSnapshotCustomNbtOnly(): j_net_minecraft_nbt.CompoundTag;
  getSnapshotNBT(): j_net_minecraft_nbt.CompoundTag;
  getUpdateNBT(): j_net_minecraft_nbt.CompoundTag;
  getUpdatePacket(arg0: JavaOpaque<"org.bukkit.Location">): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener> | null;
  isSnapshot(): boolean;
  loadData(arg0: j_net_minecraft_nbt.CompoundTag): void;
  place(arg0: number): boolean;
  snapshotDisabled: boolean;
  update(arg0: boolean, arg1: boolean): boolean;
}
export type CraftBlockEntityState<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */ = unknown> = CraftBlockEntityStateMembers<T> & CraftBlockState & JavaOpaque<"org.bukkit.block.TileState">;
export interface CraftBlockEntityStateStatics {
  readonly DISABLE_SNAPSHOT: boolean;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBlockState. */
export interface CraftBlockStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.block.BlockState">];
  copy(): CraftBlockState;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.block.BlockState">;
  equals(arg0: object): boolean;
  getBlock(): CraftBlock;
  getBlockData(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getChunk(): JavaOpaque<"org.bukkit.Chunk">;
  getData(): JavaOpaque<"org.bukkit.material.MaterialData">;
  getDrops(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"org.bukkit.entity.Entity">): JavaCollection<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getFlags(): number;
  getHandle(): j_net_minecraft_world_level_block_state.BlockState;
  getLightLevel(): number;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getLocation(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Location">;
  getMetadata(arg0: string): JavaList<JavaOpaque<"org.bukkit.metadata.MetadataValue">>;
  getPosition(): j_net_minecraft_core.BlockPos;
  getRawData(): number;
  getType(): JavaOpaque<"org.bukkit.Material">;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  getWorldHandle(): j_net_minecraft_world_level.LevelAccessor | null;
  getX(): number;
  getY(): number;
  getZ(): number;
  hasMetadata(arg0: string): boolean;
  hashCode(): number;
  isCollidable(): boolean;
  isPlaced(): boolean;
  isSuffocating(): boolean;
  place(arg0: number): boolean;
  removeMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  revertPlace(): boolean;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setData(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  setData(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): void;
  setFlags(arg0: number): void;
  setMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.metadata.MetadataValue">): void;
  setRawData(arg0: number): void;
  setType(arg0: JavaOpaque<"org.bukkit.Material">): void;
  setWorldHandle(arg0: j_net_minecraft_world_level.LevelAccessor): void;
  update(): boolean;
  update(arg0: boolean): boolean;
  update(arg0: boolean, arg1: boolean): boolean;
}
export type CraftBlockState = CraftBlockStateMembers & JavaOpaque<"org.bukkit.block.BlockState">;
export interface CraftBlockStateStatics {
}

/** JVM class org.bukkit.craftbukkit.block.CraftBlockStates. */
export interface CraftBlockStatesMembers {
}
export type CraftBlockStates = CraftBlockStatesMembers;
export interface CraftBlockStatesStatics {
  createNewBlockEntity(arg0: JavaOpaque<"org.bukkit.Material">): j_net_minecraft_world_level_block_entity.BlockEntity;
  getBlockEntityType(arg0: JavaOpaque<"org.bukkit.Material">): j_net_minecraft_world_level_block_entity.BlockEntityType<object> | null;
  getBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: JavaOpaque<"org.bukkit.Material">, arg2: j_net_minecraft_nbt.CompoundTag | null): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_nbt.CompoundTag | null): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: j_net_minecraft_core.RegistryAccess, arg1: j_net_minecraft_core.BlockPos, arg2: JavaOpaque<"org.bukkit.Material">, arg3: j_net_minecraft_nbt.CompoundTag | null): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): CraftBlockState;
  getBlockState(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_nbt.CompoundTag | null): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: JavaOpaque<"org.bukkit.Material">, arg3: j_net_minecraft_nbt.CompoundTag | null): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_nbt.CompoundTag | null): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_entity.BlockEntity): CraftBlockState;
  getBlockState(arg0: JavaOpaque<"org.bukkit.block.Block">): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: boolean): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockStateType(arg0: j_net_minecraft_world_level_block_entity.BlockEntityType<object>): JavaClass<CraftBlockState>;
  getBlockStateType(arg0: JavaOpaque<"org.bukkit.Material">): JavaClass<CraftBlockState>;
  isBlockEntityOptional(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBlockSupport. */
export interface CraftBlockSupportMembers {
}
export type CraftBlockSupport = CraftBlockSupportMembers;
export interface CraftBlockSupportStatics {
  toBukkit(arg0: j_net_minecraft_world_level_block.SupportType): JavaOpaque<"org.bukkit.block.BlockSupport">;
  toNMS(arg0: JavaOpaque<"org.bukkit.block.BlockSupport">): j_net_minecraft_world_level_block.SupportType;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBlockType. */
export interface CraftBlockTypeMembers<B /* extends JavaOpaque<"org.bukkit.block.data.BlockData"> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_level_block.Block]>, JavaOpaque<"org.bukkit.block.BlockType$Typed", [B]>, JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_level_block.Block]>];
  asMaterial(): JavaOpaque<"org.bukkit.Material"> | null;
  createBlockData(): B;
  createBlockData(arg0: string | null): B;
  createBlockData(arg0: JavaConsumer<B> | null): B;
  createBlockDataStates(): JavaCollection<B>;
  getBlastResistance(): number;
  getBlockDataClass(): JavaClass<B>;
  getHardness(): number;
  getItemType(): JavaOpaque<"org.bukkit.inventory.ItemType">;
  getSlipperiness(): number;
  getTranslationKey(): string;
  hasCollision(): boolean;
  hasGravity(): boolean;
  hasItemType(): boolean;
  isAir(): boolean;
  isBurnable(): boolean;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.World">): boolean;
  isFlammable(): boolean;
  isInteractable(): boolean;
  isOccluding(): boolean;
  isSolid(): boolean;
  translationKey(): string;
  typed(): JavaOpaque<"org.bukkit.block.BlockType$Typed", [JavaOpaque<"org.bukkit.block.data.BlockData">]>;
  typed<Other /* extends JavaOpaque<"org.bukkit.block.data.BlockData"> */>(arg0: JavaClass<Other>): JavaOpaque<"org.bukkit.block.BlockType$Typed", [Other]>;
}
export type CraftBlockType<B /* extends JavaOpaque<"org.bukkit.block.data.BlockData"> */ = unknown> = CraftBlockTypeMembers<B> & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_level_block.Block]> & JavaOpaque<"org.bukkit.block.BlockType$Typed", [B]> & JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_level_block.Block]>;
export interface CraftBlockTypeStatics {
  new<B /* extends JavaOpaque<"org.bukkit.block.data.BlockData"> */>(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>): CraftBlockType<B>;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.Material">): j_net_minecraft_world_level_block.Block;
  bukkitToMinecraftNew(arg0: JavaOpaque<"org.bukkit.block.BlockType">): j_net_minecraft_world_level_block.Block;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_block.Block): JavaOpaque<"org.bukkit.Material">;
  minecraftToBukkitNew(arg0: j_net_minecraft_world_level_block.Block): JavaOpaque<"org.bukkit.block.BlockType">;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBrewingStand. */
export interface CraftBrewingStandMembers {
  readonly __javaSupertypes?: readonly [CraftContainer<j_net_minecraft_world_level_block_entity.BrewingStandBlockEntity>, JavaOpaque<"org.bukkit.block.BrewingStand">];
  copy(): CraftBrewingStand;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBrewingStand;
  getBrewingTime(): number;
  getFuelLevel(): number;
  getInventory(): JavaOpaque<"org.bukkit.inventory.BrewerInventory">;
  getRecipeBrewTime(): number;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.BrewerInventory">;
  setBrewingTime(arg0: number): void;
  setFuelLevel(arg0: number): void;
  setRecipeBrewTime(arg0: number): void;
}
export type CraftBrewingStand = CraftBrewingStandMembers & CraftContainer<j_net_minecraft_world_level_block_entity.BrewingStandBlockEntity> & JavaOpaque<"org.bukkit.block.BrewingStand">;
export interface CraftBrewingStandStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BrewingStandBlockEntity): CraftBrewingStand;
}

/** JVM class org.bukkit.craftbukkit.block.CraftBrushableBlock. */
export interface CraftBrushableBlockMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BrushableBlockEntity>, JavaOpaque<"org.bukkit.block.BrushableBlock">];
  applyTo(arg0: j_net_minecraft_world_level_block_entity.BrushableBlockEntity): void;
  copy(): CraftBrushableBlock;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftBrushableBlock;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLootTable(): JavaOpaque<"org.bukkit.loot.LootTable">;
  getSeed(): bigint;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable">): void;
  setLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable">, arg1: bigint): void;
  setSeed(arg0: bigint): void;
}
export type CraftBrushableBlock = CraftBrushableBlockMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.BrushableBlockEntity> & JavaOpaque<"org.bukkit.block.BrushableBlock">;
export interface CraftBrushableBlockStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.BrushableBlockEntity): CraftBrushableBlock;
}

/** JVM class org.bukkit.craftbukkit.block.CraftCalibratedSculkSensor. */
export interface CraftCalibratedSculkSensorMembers {
  readonly __javaSupertypes?: readonly [CraftSculkSensor<j_net_minecraft_world_level_block_entity.CalibratedSculkSensorBlockEntity>, JavaOpaque<"org.bukkit.block.CalibratedSculkSensor">];
  copy(): CraftCalibratedSculkSensor;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftCalibratedSculkSensor;
}
export type CraftCalibratedSculkSensor = CraftCalibratedSculkSensorMembers & CraftSculkSensor<j_net_minecraft_world_level_block_entity.CalibratedSculkSensorBlockEntity> & JavaOpaque<"org.bukkit.block.CalibratedSculkSensor">;
export interface CraftCalibratedSculkSensorStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.CalibratedSculkSensorBlockEntity): CraftCalibratedSculkSensor;
}

/** JVM class org.bukkit.craftbukkit.block.CraftCampfire. */
export interface CraftCampfireMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.CampfireBlockEntity>, JavaOpaque<"org.bukkit.block.Campfire">];
  copy(): CraftCampfire;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftCampfire;
  getCookTime(arg0: number): number;
  getCookTimeTotal(arg0: number): number;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getSize(): number;
  isCookingDisabled(arg0: number): boolean;
  setCookTime(arg0: number, arg1: number): void;
  setCookTimeTotal(arg0: number, arg1: number): void;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  startCooking(): void;
  startCooking(arg0: number): boolean;
  stopCooking(): void;
  stopCooking(arg0: number): boolean;
}
export type CraftCampfire = CraftCampfireMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.CampfireBlockEntity> & JavaOpaque<"org.bukkit.block.Campfire">;
export interface CraftCampfireStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.CampfireBlockEntity): CraftCampfire;
}

/** JVM class org.bukkit.craftbukkit.block.CraftChest. */
export interface CraftChestMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.ChestBlockEntity>, JavaOpaque<"org.bukkit.block.Chest">];
  close(): void;
  copy(): CraftChest;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftChest;
  getBlockInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  isBlocked(): boolean;
  isOpen(): boolean;
  open(): void;
}
export type CraftChest = CraftChestMembers & CraftLootable<j_net_minecraft_world_level_block_entity.ChestBlockEntity> & JavaOpaque<"org.bukkit.block.Chest">;
export interface CraftChestStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.ChestBlockEntity): CraftChest;
}

/** JVM class org.bukkit.craftbukkit.block.CraftChiseledBookshelf. */
export interface CraftChiseledBookshelfMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.ChiseledBookShelfBlockEntity>, JavaOpaque<"org.bukkit.block.ChiseledBookshelf">];
  copy(): CraftChiseledBookshelf;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftChiseledBookshelf;
  getInventory(): JavaOpaque<"org.bukkit.inventory.ChiseledBookshelfInventory">;
  getLastInteractedSlot(): number;
  getSlot(arg0: JavaOpaque<"org.bukkit.util.Vector">): number;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.ChiseledBookshelfInventory">;
  setLastInteractedSlot(arg0: number): void;
}
export type CraftChiseledBookshelf = CraftChiseledBookshelfMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.ChiseledBookShelfBlockEntity> & JavaOpaque<"org.bukkit.block.ChiseledBookshelf">;
export interface CraftChiseledBookshelfStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.ChiseledBookShelfBlockEntity): CraftChiseledBookshelf;
}

/** JVM class org.bukkit.craftbukkit.block.CraftCommandBlock. */
export interface CraftCommandBlockMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.CommandBlockEntity>, JavaOpaque<"org.bukkit.block.CommandBlock">, JavaOpaque<"io.papermc.paper.commands.PaperCommandBlockHolder">];
  copy(): CraftCommandBlock;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftCommandBlock;
  getCommand(): string;
  getCommandBlockHandle(): j_net_minecraft_world_level.BaseCommandBlock;
  getName(): string;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  name(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  setCommand(arg0: string): void;
  setName(arg0: string): void;
}
export type CraftCommandBlock = CraftCommandBlockMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.CommandBlockEntity> & JavaOpaque<"org.bukkit.block.CommandBlock"> & JavaOpaque<"io.papermc.paper.commands.PaperCommandBlockHolder">;
export interface CraftCommandBlockStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.CommandBlockEntity): CraftCommandBlock;
}

/** JVM class org.bukkit.craftbukkit.block.CraftComparator. */
export interface CraftComparatorMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.ComparatorBlockEntity>, JavaOpaque<"org.bukkit.block.Comparator">];
  copy(): CraftComparator;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftComparator;
}
export type CraftComparator = CraftComparatorMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.ComparatorBlockEntity> & JavaOpaque<"org.bukkit.block.Comparator">;
export interface CraftComparatorStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.ComparatorBlockEntity): CraftComparator;
}

/** JVM class org.bukkit.craftbukkit.block.CraftConduit. */
export interface CraftConduitMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.ConduitBlockEntity>, JavaOpaque<"org.bukkit.block.Conduit">];
  copy(): CraftConduit;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftConduit;
  getFrameBlockCount(): number;
  getFrameBlocks(): JavaCollection<JavaOpaque<"org.bukkit.block.Block">>;
  getHuntingArea(): JavaOpaque<"org.bukkit.util.BoundingBox">;
  getRange(): number;
  getTarget(): JavaOpaque<"org.bukkit.entity.LivingEntity">;
  hasTarget(): boolean;
  isActive(): boolean;
  isHunting(): boolean;
  setTarget(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): boolean;
}
export type CraftConduit = CraftConduitMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.ConduitBlockEntity> & JavaOpaque<"org.bukkit.block.Conduit">;
export interface CraftConduitStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.ConduitBlockEntity): CraftConduit;
}

/** JVM abstract org.bukkit.craftbukkit.block.CraftContainer. */
export interface CraftContainerMembers<T /* extends j_net_minecraft_world_level_block_entity.BaseContainerBlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<T>, JavaOpaque<"org.bukkit.block.Container">];
  applyTo(arg0: T): void;
  copy(): CraftContainer<T>;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftContainer<T>;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getCustomName(): string;
  getLock(): string;
  isLocked(): boolean;
  setCustomName(arg0: string): void;
  setLock(arg0: string): void;
  setLockItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftContainer<T /* extends j_net_minecraft_world_level_block_entity.BaseContainerBlockEntity */ = unknown> = CraftContainerMembers<T> & CraftBlockEntityState<T> & JavaOpaque<"org.bukkit.block.Container">;
export interface CraftContainerStatics {
}

/** JVM class org.bukkit.craftbukkit.block.CraftCrafter. */
export interface CraftCrafterMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.CrafterBlockEntity>, JavaOpaque<"org.bukkit.block.Crafter">];
  copy(): CraftCrafter;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftCrafter;
  getCraftingTicks(): number;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  isSlotDisabled(arg0: number): boolean;
  isTriggered(): boolean;
  setCraftingTicks(arg0: number): void;
  setSlotDisabled(arg0: number, arg1: boolean): void;
  setTriggered(arg0: boolean): void;
}
export type CraftCrafter = CraftCrafterMembers & CraftLootable<j_net_minecraft_world_level_block_entity.CrafterBlockEntity> & JavaOpaque<"org.bukkit.block.Crafter">;
export interface CraftCrafterStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.CrafterBlockEntity): CraftCrafter;
}

/** JVM class org.bukkit.craftbukkit.block.CraftCreakingHeart. */
export interface CraftCreakingHeartMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.CreakingHeartBlockEntity>, JavaOpaque<"org.bukkit.block.CreakingHeart">];
  copy(): CraftCreakingHeart;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftCreakingHeart;
}
export type CraftCreakingHeart = CraftCreakingHeartMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.CreakingHeartBlockEntity> & JavaOpaque<"org.bukkit.block.CreakingHeart">;
export interface CraftCreakingHeartStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.CreakingHeartBlockEntity): CraftCreakingHeart;
}

/** JVM class org.bukkit.craftbukkit.block.CraftCreatureSpawner. */
export interface CraftCreatureSpawnerMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SpawnerBlockEntity>, JavaOpaque<"org.bukkit.block.CreatureSpawner">, j_org_bukkit_craftbukkit_spawner.PaperSharedSpawnerLogic];
  addPotentialSpawn(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">): void;
  addPotentialSpawn(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">, arg1: number, arg2: JavaOpaque<"org.bukkit.block.spawner.SpawnRule">): void;
  copy(): CraftCreatureSpawner;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftCreatureSpawner;
  getCreatureTypeName(): string;
  getDelay(): number;
  getInternalPosition(): j_net_minecraft_core.BlockPos;
  getInternalWorld(): j_net_minecraft_world_level.Level;
  getMaxNearbyEntities(): number;
  getMaxSpawnDelay(): number;
  getMinSpawnDelay(): number;
  getPotentialSpawns(): JavaList<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>;
  getRequiredPlayerRange(): number;
  getSpawnCount(): number;
  getSpawnRange(): number;
  getSpawnedEntity(): JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
  getSpawnedType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  getSpawner(): j_net_minecraft_world_level.BaseSpawner;
  isActivated(): boolean;
  resetTimer(): void;
  setCreatureTypeByName(arg0: string): void;
  setDelay(arg0: number): void;
  setMaxNearbyEntities(arg0: number): void;
  setMaxSpawnDelay(arg0: number): void;
  setMinSpawnDelay(arg0: number): void;
  setNextSpawnData(arg0: j_net_minecraft_world_level.SpawnData): void;
  setPotentialSpawns(arg0: JavaCollection<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>): void;
  setRequiredPlayerRange(arg0: number): void;
  setSpawnCount(arg0: number): void;
  setSpawnRange(arg0: number): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">): void;
  setSpawnedType(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): void;
}
export type CraftCreatureSpawner = CraftCreatureSpawnerMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SpawnerBlockEntity> & JavaOpaque<"org.bukkit.block.CreatureSpawner"> & j_org_bukkit_craftbukkit_spawner.PaperSharedSpawnerLogic;
export interface CraftCreatureSpawnerStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.SpawnerBlockEntity): CraftCreatureSpawner;
  addPotentialSpawn(arg0: j_net_minecraft_world_level.BaseSpawner, arg1: JavaOpaque<"org.bukkit.entity.EntitySnapshot">, arg2: number, arg3: JavaOpaque<"org.bukkit.block.spawner.SpawnRule">, arg4: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry$Equipment">): void;
  fromMinecraftRule(arg0: j_net_minecraft_world_level.SpawnData_CustomSpawnRules): JavaOpaque<"org.bukkit.block.spawner.SpawnRule">;
  getEquipment(arg0: JavaOptional<j_net_minecraft_world_entity.EquipmentTable>): JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry$Equipment">;
  getEquipment(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry$Equipment">): JavaOptional<j_net_minecraft_world_entity.EquipmentTable>;
  getPotentialSpawns(arg0: j_net_minecraft_world_level.BaseSpawner): JavaList<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>;
  setPotentialSpawns(arg0: j_net_minecraft_world_level.BaseSpawner, arg1: JavaCollection<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>): void;
  setSpawnedEntity(arg0: j_net_minecraft_world_level.BaseSpawner, arg1: JavaOpaque<"org.bukkit.entity.EntitySnapshot">, arg2: JavaOpaque<"org.bukkit.block.spawner.SpawnRule">, arg3: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry$Equipment">): void;
  toMinecraftRule(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnRule">): j_net_minecraft_world_level.SpawnData_CustomSpawnRules;
}

/** JVM class org.bukkit.craftbukkit.block.CraftDaylightDetector. */
export interface CraftDaylightDetectorMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.DaylightDetectorBlockEntity>, JavaOpaque<"org.bukkit.block.DaylightDetector">];
  copy(): CraftDaylightDetector;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftDaylightDetector;
}
export type CraftDaylightDetector = CraftDaylightDetectorMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.DaylightDetectorBlockEntity> & JavaOpaque<"org.bukkit.block.DaylightDetector">;
export interface CraftDaylightDetectorStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.DaylightDetectorBlockEntity): CraftDaylightDetector;
}

/** JVM class org.bukkit.craftbukkit.block.CraftDecoratedPot. */
export interface CraftDecoratedPotMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.DecoratedPotBlockEntity>, JavaOpaque<"org.bukkit.block.DecoratedPot">];
  copy(): CraftDecoratedPot;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftDecoratedPot;
  getInventory(): JavaOpaque<"org.bukkit.inventory.DecoratedPotInventory">;
  getLootTable(): JavaOpaque<"org.bukkit.loot.LootTable">;
  getSeed(): bigint;
  getShards(): JavaList<JavaOpaque<"org.bukkit.Material">>;
  getSherd(arg0: JavaOpaque<"org.bukkit.block.DecoratedPot$Side">): JavaOpaque<"org.bukkit.Material">;
  getSherds(): JavaMap<JavaOpaque<"org.bukkit.block.DecoratedPot$Side">, JavaOpaque<"org.bukkit.Material">>;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.DecoratedPotInventory">;
  setLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable">): void;
  setLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable">, arg1: bigint): void;
  setSeed(arg0: bigint): void;
  setSherd(arg0: JavaOpaque<"org.bukkit.block.DecoratedPot$Side">, arg1: JavaOpaque<"org.bukkit.Material">): void;
}
export type CraftDecoratedPot = CraftDecoratedPotMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.DecoratedPotBlockEntity> & JavaOpaque<"org.bukkit.block.DecoratedPot">;
export interface CraftDecoratedPotStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.DecoratedPotBlockEntity): CraftDecoratedPot;
}

/** JVM class org.bukkit.craftbukkit.block.CraftDispenser. */
export interface CraftDispenserMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.DispenserBlockEntity>, JavaOpaque<"org.bukkit.block.Dispenser">];
  copy(): CraftDispenser;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftDispenser;
  dispense(): boolean;
  getBlockProjectileSource(): JavaOpaque<"org.bukkit.projectiles.BlockProjectileSource">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftDispenser = CraftDispenserMembers & CraftLootable<j_net_minecraft_world_level_block_entity.DispenserBlockEntity> & JavaOpaque<"org.bukkit.block.Dispenser">;
export interface CraftDispenserStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.DispenserBlockEntity): CraftDispenser;
}

/** JVM class org.bukkit.craftbukkit.block.CraftDropper. */
export interface CraftDropperMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.DropperBlockEntity>, JavaOpaque<"org.bukkit.block.Dropper">];
  copy(): CraftDropper;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftDropper;
  drop(): void;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftDropper = CraftDropperMembers & CraftLootable<j_net_minecraft_world_level_block_entity.DropperBlockEntity> & JavaOpaque<"org.bukkit.block.Dropper">;
export interface CraftDropperStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.DropperBlockEntity): CraftDropper;
}

/** JVM class org.bukkit.craftbukkit.block.CraftEnchantingTable. */
export interface CraftEnchantingTableMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.EnchantingTableBlockEntity>, JavaOpaque<"org.bukkit.block.EnchantingTable">];
  applyTo(arg0: j_net_minecraft_world_level_block_entity.EnchantingTableBlockEntity): void;
  copy(): CraftEnchantingTable;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftEnchantingTable;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getCustomName(): string;
  setCustomName(arg0: string): void;
}
export type CraftEnchantingTable = CraftEnchantingTableMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.EnchantingTableBlockEntity> & JavaOpaque<"org.bukkit.block.EnchantingTable">;
export interface CraftEnchantingTableStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.EnchantingTableBlockEntity): CraftEnchantingTable;
}

/** JVM class org.bukkit.craftbukkit.block.CraftEnderChest. */
export interface CraftEnderChestMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.EnderChestBlockEntity>, JavaOpaque<"org.bukkit.block.EnderChest">];
  close(): void;
  copy(): CraftEnderChest;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftEnderChest;
  isBlocked(): boolean;
  isOpen(): boolean;
  open(): void;
}
export type CraftEnderChest = CraftEnderChestMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.EnderChestBlockEntity> & JavaOpaque<"org.bukkit.block.EnderChest">;
export interface CraftEnderChestStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.EnderChestBlockEntity): CraftEnderChest;
}

/** JVM class org.bukkit.craftbukkit.block.CraftEndGateway. */
export interface CraftEndGatewayMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TheEndGatewayBlockEntity>, JavaOpaque<"org.bukkit.block.EndGateway">];
  applyTo(arg0: j_net_minecraft_world_level_block_entity.TheEndGatewayBlockEntity): void;
  copy(): CraftEndGateway;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftEndGateway;
  getAge(): bigint;
  getExitLocation(): JavaOpaque<"org.bukkit.Location">;
  isExactTeleport(): boolean;
  setAge(arg0: bigint): void;
  setExactTeleport(arg0: boolean): void;
  setExitLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftEndGateway = CraftEndGatewayMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TheEndGatewayBlockEntity> & JavaOpaque<"org.bukkit.block.EndGateway">;
export interface CraftEndGatewayStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.TheEndGatewayBlockEntity): CraftEndGateway;
}

/** JVM class org.bukkit.craftbukkit.block.CraftEndPortal. */
export interface CraftEndPortalMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TheEndPortalBlockEntity>];
  copy(): CraftEndPortal;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftEndPortal;
}
export type CraftEndPortal = CraftEndPortalMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TheEndPortalBlockEntity>;
export interface CraftEndPortalStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.TheEndPortalBlockEntity): CraftEndPortal;
}

/** JVM abstract org.bukkit.craftbukkit.block.CraftFurnace. */
export interface CraftFurnaceMembers<T /* extends j_net_minecraft_world_level_block_entity.AbstractFurnaceBlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftContainer<T>, JavaOpaque<"org.bukkit.block.Furnace">];
  copy(): CraftFurnace<T>;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftFurnace<T>;
  getBurnTime(): number;
  getCookSpeedMultiplier(): number;
  getCookTime(): number;
  getCookTimeTotal(): number;
  getInventory(): JavaOpaque<"org.bukkit.inventory.FurnaceInventory">;
  getRecipeUsedCount(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): number;
  getRecipesUsed(): JavaMap<JavaOpaque<"org.bukkit.inventory.CookingRecipe", [object]>, number>;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.FurnaceInventory">;
  hasRecipeUsedCount(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  setBurnTime(arg0: number): void;
  setCookSpeedMultiplier(arg0: number): void;
  setCookTime(arg0: number): void;
  setCookTimeTotal(arg0: number): void;
  setRecipeUsedCount(arg0: JavaOpaque<"org.bukkit.inventory.CookingRecipe", [object]>, arg1: number): void;
  setRecipesUsed(arg0: JavaMap<JavaOpaque<"org.bukkit.inventory.CookingRecipe", [object]>, number>): void;
}
export type CraftFurnace<T /* extends j_net_minecraft_world_level_block_entity.AbstractFurnaceBlockEntity */ = unknown> = CraftFurnaceMembers<T> & CraftContainer<T> & JavaOpaque<"org.bukkit.block.Furnace">;
export interface CraftFurnaceStatics {
}

/** JVM class org.bukkit.craftbukkit.block.CraftFurnaceFurnace. */
export interface CraftFurnaceFurnaceMembers {
  readonly __javaSupertypes?: readonly [CraftFurnace<j_net_minecraft_world_level_block_entity.FurnaceBlockEntity>];
  copy(): CraftFurnaceFurnace;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftFurnaceFurnace;
}
export type CraftFurnaceFurnace = CraftFurnaceFurnaceMembers & CraftFurnace<j_net_minecraft_world_level_block_entity.FurnaceBlockEntity>;
export interface CraftFurnaceFurnaceStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.FurnaceBlockEntity): CraftFurnaceFurnace;
}

/** JVM class org.bukkit.craftbukkit.block.CraftHangingSign. */
export interface CraftHangingSignMembers {
  readonly __javaSupertypes?: readonly [CraftSign<j_net_minecraft_world_level_block_entity.HangingSignBlockEntity>, JavaOpaque<"org.bukkit.block.HangingSign">];
  copy(): CraftHangingSign;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftHangingSign;
}
export type CraftHangingSign = CraftHangingSignMembers & CraftSign<j_net_minecraft_world_level_block_entity.HangingSignBlockEntity> & JavaOpaque<"org.bukkit.block.HangingSign">;
export interface CraftHangingSignStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.HangingSignBlockEntity): CraftHangingSign;
}

/** JVM class org.bukkit.craftbukkit.block.CraftHopper. */
export interface CraftHopperMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.HopperBlockEntity>, JavaOpaque<"org.bukkit.block.Hopper">];
  copy(): CraftHopper;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftHopper;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getTransferCooldown(): number;
  setTransferCooldown(arg0: number): void;
}
export type CraftHopper = CraftHopperMembers & CraftLootable<j_net_minecraft_world_level_block_entity.HopperBlockEntity> & JavaOpaque<"org.bukkit.block.Hopper">;
export interface CraftHopperStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.HopperBlockEntity): CraftHopper;
}

/** JVM class org.bukkit.craftbukkit.block.CraftJigsaw. */
export interface CraftJigsawMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.JigsawBlockEntity>, JavaOpaque<"org.bukkit.block.Jigsaw">];
  copy(): CraftJigsaw;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftJigsaw;
}
export type CraftJigsaw = CraftJigsawMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.JigsawBlockEntity> & JavaOpaque<"org.bukkit.block.Jigsaw">;
export interface CraftJigsawStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.JigsawBlockEntity): CraftJigsaw;
}

/** JVM class org.bukkit.craftbukkit.block.CraftJukebox. */
export interface CraftJukeboxMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.JukeboxBlockEntity>, JavaOpaque<"org.bukkit.block.Jukebox">];
  copy(): CraftJukebox;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftJukebox;
  eject(): boolean;
  getInventory(): JavaOpaque<"org.bukkit.inventory.JukeboxInventory">;
  getPlaying(): JavaOpaque<"org.bukkit.Material">;
  getRecord(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.JukeboxInventory">;
  hasRecord(): boolean;
  isPlaying(): boolean;
  setPlaying(arg0: JavaOpaque<"org.bukkit.Material">): void;
  setRecord(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  startPlaying(): boolean;
  stopPlaying(): void;
  update(arg0: boolean, arg1: boolean): boolean;
}
export type CraftJukebox = CraftJukeboxMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.JukeboxBlockEntity> & JavaOpaque<"org.bukkit.block.Jukebox">;
export interface CraftJukeboxStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.JukeboxBlockEntity): CraftJukebox;
}

/** JVM class org.bukkit.craftbukkit.block.CraftLectern. */
export interface CraftLecternMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.LecternBlockEntity>, JavaOpaque<"org.bukkit.block.Lectern">];
  copy(): CraftLectern;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftLectern;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getPage(): number;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  setPage(arg0: number): void;
  update(arg0: boolean, arg1: boolean): boolean;
}
export type CraftLectern = CraftLecternMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.LecternBlockEntity> & JavaOpaque<"org.bukkit.block.Lectern">;
export interface CraftLecternStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.LecternBlockEntity): CraftLectern;
}

/** JVM abstract org.bukkit.craftbukkit.block.CraftLootable. */
export interface CraftLootableMembers<T /* extends j_net_minecraft_world_level_block_entity.RandomizableContainerBlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftContainer<T>, JavaOpaque<"org.bukkit.Nameable">, JavaOpaque<"org.bukkit.loot.Lootable">, JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableBlockInventory">];
  applyTo(arg0: T): void;
  copy(): CraftLootable<T>;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftLootable<T>;
  getNMSWorld(): j_net_minecraft_world_level.Level;
  getRandomizableContainer(): j_net_minecraft_world.RandomizableContainer;
}
export type CraftLootable<T /* extends j_net_minecraft_world_level_block_entity.RandomizableContainerBlockEntity */ = unknown> = CraftLootableMembers<T> & CraftContainer<T> & JavaOpaque<"org.bukkit.Nameable"> & JavaOpaque<"org.bukkit.loot.Lootable"> & JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableBlockInventory">;
export interface CraftLootableStatics {
}

/** JVM class org.bukkit.craftbukkit.block.CraftMovingPiston. */
export interface CraftMovingPistonMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_piston.PistonMovingBlockEntity>, JavaOpaque<"io.papermc.paper.block.MovingPiston">];
  copy(): CraftMovingPiston;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftMovingPiston;
  getDirection(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMovingBlock(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  isExtending(): boolean;
  isPistonHead(): boolean;
}
export type CraftMovingPiston = CraftMovingPistonMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_piston.PistonMovingBlockEntity> & JavaOpaque<"io.papermc.paper.block.MovingPiston">;
export interface CraftMovingPistonStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_piston.PistonMovingBlockEntity): CraftMovingPiston;
}

/** JVM class org.bukkit.craftbukkit.block.CraftSculkCatalyst. */
export interface CraftSculkCatalystMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SculkCatalystBlockEntity>, JavaOpaque<"org.bukkit.block.SculkCatalyst">];
  bloom(arg0: JavaOpaque<"io.papermc.paper.math.Position">, arg1: number): void;
  bloom(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number): void;
  copy(): CraftSculkCatalyst;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftSculkCatalyst;
}
export type CraftSculkCatalyst = CraftSculkCatalystMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SculkCatalystBlockEntity> & JavaOpaque<"org.bukkit.block.SculkCatalyst">;
export interface CraftSculkCatalystStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.SculkCatalystBlockEntity): CraftSculkCatalyst;
}

/** JVM class org.bukkit.craftbukkit.block.CraftSculkSensor. */
export interface CraftSculkSensorMembers<T /* extends j_net_minecraft_world_level_block_entity.SculkSensorBlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<T>, JavaOpaque<"org.bukkit.block.SculkSensor">];
  copy(): CraftSculkSensor<T>;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftSculkSensor<T>;
  getLastVibrationFrequency(): number;
  getListenerRange(): number;
  setLastVibrationFrequency(arg0: number): void;
  setListenerRange(arg0: number): void;
}
export type CraftSculkSensor<T /* extends j_net_minecraft_world_level_block_entity.SculkSensorBlockEntity */ = unknown> = CraftSculkSensorMembers<T> & CraftBlockEntityState<T> & JavaOpaque<"org.bukkit.block.SculkSensor">;
export interface CraftSculkSensorStatics {
  new<T /* extends j_net_minecraft_world_level_block_entity.SculkSensorBlockEntity */>(arg0: JavaOpaque<"org.bukkit.World">, arg1: T): CraftSculkSensor<T>;
}

/** JVM class org.bukkit.craftbukkit.block.CraftSculkShrieker. */
export interface CraftSculkShriekerMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SculkShriekerBlockEntity>, JavaOpaque<"org.bukkit.block.SculkShrieker">];
  copy(): CraftSculkShrieker;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftSculkShrieker;
  getWarningLevel(): number;
  setWarningLevel(arg0: number): void;
  tryShriek(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
}
export type CraftSculkShrieker = CraftSculkShriekerMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SculkShriekerBlockEntity> & JavaOpaque<"org.bukkit.block.SculkShrieker">;
export interface CraftSculkShriekerStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.SculkShriekerBlockEntity): CraftSculkShrieker;
}

/** JVM class org.bukkit.craftbukkit.block.CraftShulkerBox. */
export interface CraftShulkerBoxMembers {
  readonly __javaSupertypes?: readonly [CraftLootable<j_net_minecraft_world_level_block_entity.ShulkerBoxBlockEntity>, JavaOpaque<"org.bukkit.block.ShulkerBox">];
  close(): void;
  copy(): CraftShulkerBox;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftShulkerBox;
  getColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getSnapshotInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  isOpen(): boolean;
  open(): void;
}
export type CraftShulkerBox = CraftShulkerBoxMembers & CraftLootable<j_net_minecraft_world_level_block_entity.ShulkerBoxBlockEntity> & JavaOpaque<"org.bukkit.block.ShulkerBox">;
export interface CraftShulkerBoxStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.ShulkerBoxBlockEntity): CraftShulkerBox;
}

/** JVM class org.bukkit.craftbukkit.block.CraftSign. */
export interface CraftSignMembers<T /* extends j_net_minecraft_world_level_block_entity.SignBlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<T>, JavaOpaque<"org.bukkit.block.Sign">];
  applyTo(arg0: T): void;
  copy(): CraftSign<T>;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftSign<T>;
  getAllowedEditor(): JavaOpaque<"org.bukkit.entity.Player">;
  getAllowedEditorUniqueId(): JavaOpaque<"java.util.UUID">;
  getColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getInteractableSideFor(arg0: number, arg1: number): JavaOpaque<"org.bukkit.block.sign.Side">;
  /** @throws java.lang.IndexOutOfBoundsException */
  getLine(arg0: number): string;
  getLines(): Array<string>;
  getSide(arg0: JavaOpaque<"org.bukkit.block.sign.Side">): JavaOpaque<"org.bukkit.block.sign.SignSide">;
  getTargetSide(arg0: JavaOpaque<"org.bukkit.entity.Player">): JavaOpaque<"org.bukkit.block.sign.SignSide">;
  isEditable(): boolean;
  isGlowingText(): boolean;
  isWaxed(): boolean;
  line(arg0: number): JavaOpaque<"net.kyori.adventure.text.Component">;
  line(arg0: number, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lines(): JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>;
  setAllowedEditorUniqueId(arg0: JavaOpaque<"java.util.UUID">): void;
  setColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setEditable(arg0: boolean): void;
  setGlowingText(arg0: boolean): void;
  /** @throws java.lang.IndexOutOfBoundsException */
  setLine(arg0: number, arg1: string): void;
  setWaxed(arg0: boolean): void;
}
export type CraftSign<T /* extends j_net_minecraft_world_level_block_entity.SignBlockEntity */ = unknown> = CraftSignMembers<T> & CraftBlockEntityState<T> & JavaOpaque<"org.bukkit.block.Sign">;
export interface CraftSignStatics {
  new<T /* extends j_net_minecraft_world_level_block_entity.SignBlockEntity */>(arg0: JavaOpaque<"org.bukkit.World">, arg1: T): CraftSign<T>;
  openSign(arg0: JavaOpaque<"org.bukkit.block.Sign">, arg1: JavaOpaque<"org.bukkit.entity.Player">, arg2: JavaOpaque<"org.bukkit.block.sign.Side">): void;
  revertComponents(arg0: Array<j_net_minecraft_network_chat.Component>): Array<string>;
  sanitizeLines(arg0: JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>): Array<j_net_minecraft_network_chat.Component>;
  sanitizeLines(arg0: Array<string>): Array<j_net_minecraft_network_chat.Component>;
}

/** JVM class org.bukkit.craftbukkit.block.CraftSkull. */
export interface CraftSkullMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SkullBlockEntity>, JavaOpaque<"org.bukkit.block.Skull">];
  applyTo(arg0: j_net_minecraft_world_level_block_entity.SkullBlockEntity): void;
  copy(): CraftSkull;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftSkull;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component"> | null;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component"> | null): void;
  getNoteBlockSound(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getOwner(): string;
  getOwnerProfile(): JavaOpaque<"org.bukkit.profile.PlayerProfile">;
  getOwningPlayer(): JavaOpaque<"org.bukkit.OfflinePlayer">;
  getPlayerProfile(): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile"> | null;
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getSkullType(): JavaOpaque<"org.bukkit.SkullType">;
  hasOwner(): boolean;
  load(arg0: j_net_minecraft_world_level_block_entity.SkullBlockEntity): void;
  setNoteBlockSound(arg0: JavaOpaque<"org.bukkit.NamespacedKey"> | null): void;
  setOwner(arg0: string): boolean;
  setOwnerProfile(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">): void;
  setOwningPlayer(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">): void;
  setPlayerProfile(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setSkullType(arg0: JavaOpaque<"org.bukkit.SkullType">): void;
}
export type CraftSkull = CraftSkullMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.SkullBlockEntity> & JavaOpaque<"org.bukkit.block.Skull">;
export interface CraftSkullStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.SkullBlockEntity): CraftSkull;
}

/** JVM class org.bukkit.craftbukkit.block.CraftSmoker. */
export interface CraftSmokerMembers {
  readonly __javaSupertypes?: readonly [CraftFurnace<j_net_minecraft_world_level_block_entity.SmokerBlockEntity>, JavaOpaque<"org.bukkit.block.Smoker">];
  copy(): CraftSmoker;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftSmoker;
}
export type CraftSmoker = CraftSmokerMembers & CraftFurnace<j_net_minecraft_world_level_block_entity.SmokerBlockEntity> & JavaOpaque<"org.bukkit.block.Smoker">;
export interface CraftSmokerStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.SmokerBlockEntity): CraftSmoker;
}

/** JVM class org.bukkit.craftbukkit.block.CraftStructureBlock. */
export interface CraftStructureBlockMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.StructureBlockEntity>, JavaOpaque<"org.bukkit.block.Structure">];
  copy(): CraftStructureBlock;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftStructureBlock;
  getAuthor(): string;
  getIntegrity(): number;
  getMetadata(): string;
  getMirror(): JavaOpaque<"org.bukkit.block.structure.Mirror">;
  getRelativePosition(): JavaOpaque<"org.bukkit.util.BlockVector">;
  getRotation(): JavaOpaque<"org.bukkit.block.structure.StructureRotation">;
  getSeed(): bigint;
  getStructureName(): string;
  getStructureSize(): JavaOpaque<"org.bukkit.util.BlockVector">;
  getUsageMode(): JavaOpaque<"org.bukkit.block.structure.UsageMode">;
  isBoundingBoxVisible(): boolean;
  isIgnoreEntities(): boolean;
  isShowAir(): boolean;
  setAuthor(arg0: string): void;
  setAuthor(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
  setBoundingBoxVisible(arg0: boolean): void;
  setIgnoreEntities(arg0: boolean): void;
  setIntegrity(arg0: number): void;
  setMetadata(arg0: string): void;
  setMirror(arg0: JavaOpaque<"org.bukkit.block.structure.Mirror">): void;
  setRelativePosition(arg0: JavaOpaque<"org.bukkit.util.BlockVector">): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.structure.StructureRotation">): void;
  setSeed(arg0: bigint): void;
  setShowAir(arg0: boolean): void;
  setStructureName(arg0: string): void;
  setStructureSize(arg0: JavaOpaque<"org.bukkit.util.BlockVector">): void;
  setUsageMode(arg0: JavaOpaque<"org.bukkit.block.structure.UsageMode">): void;
}
export type CraftStructureBlock = CraftStructureBlockMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.StructureBlockEntity> & JavaOpaque<"org.bukkit.block.Structure">;
export interface CraftStructureBlockStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.StructureBlockEntity): CraftStructureBlock;
}

/** JVM class org.bukkit.craftbukkit.block.CraftTestBlock. */
export interface CraftTestBlockMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TestBlockEntity>, JavaOpaque<"org.bukkit.block.TestBlock">];
  copy(): CraftTestBlock;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftTestBlock;
}
export type CraftTestBlock = CraftTestBlockMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TestBlockEntity> & JavaOpaque<"org.bukkit.block.TestBlock">;
export interface CraftTestBlockStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.TestBlockEntity): CraftTestBlock;
}

/** JVM class org.bukkit.craftbukkit.block.CraftTestInstanceBlock. */
export interface CraftTestInstanceBlockMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity>, JavaOpaque<"org.bukkit.block.TestInstanceBlock">];
  copy(): CraftTestInstanceBlock;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftTestInstanceBlock;
}
export type CraftTestInstanceBlock = CraftTestInstanceBlockMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity> & JavaOpaque<"org.bukkit.block.TestInstanceBlock">;
export interface CraftTestInstanceBlockStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity): CraftTestInstanceBlock;
}

/** JVM class org.bukkit.craftbukkit.block.CraftTrialSpawner. */
export interface CraftTrialSpawnerMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TrialSpawnerBlockEntity>, JavaOpaque<"org.bukkit.block.TrialSpawner">];
  copy(): CraftTrialSpawner;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftTrialSpawner;
  getCooldownEnd(): bigint;
  getCooldownLength(): number;
  getNextSpawnAttempt(): bigint;
  getNormalConfiguration(): JavaOpaque<"org.bukkit.spawner.TrialSpawnerConfiguration">;
  getOminousConfiguration(): JavaOpaque<"org.bukkit.spawner.TrialSpawnerConfiguration">;
  getRequiredPlayerRange(): number;
  getTrackedEntities(): JavaCollection<JavaOpaque<"org.bukkit.entity.Entity">>;
  getTrackedPlayers(): JavaCollection<JavaOpaque<"org.bukkit.entity.Player">>;
  isOminous(): boolean;
  isTrackingEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  isTrackingPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): boolean;
  setCooldownEnd(arg0: bigint): void;
  setCooldownLength(arg0: number): void;
  setNextSpawnAttempt(arg0: bigint): void;
  setOminous(arg0: boolean): void;
  setRequiredPlayerRange(arg0: number): void;
  startTrackingEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  startTrackingPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  stopTrackingEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  stopTrackingPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
}
export type CraftTrialSpawner = CraftTrialSpawnerMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity.TrialSpawnerBlockEntity> & JavaOpaque<"org.bukkit.block.TrialSpawner">;
export interface CraftTrialSpawnerStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity.TrialSpawnerBlockEntity): CraftTrialSpawner;
}

/** JVM class org.bukkit.craftbukkit.block.CraftTrialSpawnerConfiguration. */
export interface CraftTrialSpawnerConfigurationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.spawner.TrialSpawnerConfiguration">];
  addPossibleReward(arg0: JavaOpaque<"org.bukkit.loot.LootTable">, arg1: number): void;
  addPotentialSpawn(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">): void;
  addPotentialSpawn(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">, arg1: number, arg2: JavaOpaque<"org.bukkit.block.spawner.SpawnRule">): void;
  getAdditionalSimultaneousEntities(): number;
  getAdditionalSpawnsBeforeCooldown(): number;
  getBaseSimultaneousEntities(): number;
  getBaseSpawnsBeforeCooldown(): number;
  getDelay(): number;
  getPossibleRewards(): JavaMap<JavaOpaque<"org.bukkit.loot.LootTable">, number>;
  getPotentialSpawns(): JavaList<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>;
  getRequiredPlayerRange(): number;
  getSpawnRange(): number;
  getSpawnedEntity(): JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
  getSpawnedType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  removePossibleReward(arg0: JavaOpaque<"org.bukkit.loot.LootTable">): void;
  setAdditionalSimultaneousEntities(arg0: number): void;
  setAdditionalSpawnsBeforeCooldown(arg0: number): void;
  setBaseSimultaneousEntities(arg0: number): void;
  setBaseSpawnsBeforeCooldown(arg0: number): void;
  setDelay(arg0: number): void;
  setPossibleRewards(arg0: JavaMap<JavaOpaque<"org.bukkit.loot.LootTable">, number>): void;
  setPotentialSpawns(arg0: JavaCollection<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>): void;
  setRequiredPlayerRange(arg0: number): void;
  setSpawnRange(arg0: number): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">): void;
  setSpawnedType(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): void;
}
export type CraftTrialSpawnerConfiguration = CraftTrialSpawnerConfigurationMembers & JavaOpaque<"org.bukkit.spawner.TrialSpawnerConfiguration">;
export interface CraftTrialSpawnerConfigurationStatics {
  new(arg0: j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawnerConfig, arg1: j_net_minecraft_world_level_block_entity.TrialSpawnerBlockEntity): CraftTrialSpawnerConfiguration;
}

/** JVM class org.bukkit.craftbukkit.block.CraftVault. */
export interface CraftVaultMembers {
  readonly __javaSupertypes?: readonly [CraftBlockEntityState<j_net_minecraft_world_level_block_entity_vault.VaultBlockEntity>, JavaOpaque<"org.bukkit.block.Vault">];
  addRewardedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  copy(): CraftVault;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): CraftVault;
  getActivationRange(): number;
  getConnectedPlayers(): JavaSet<JavaOpaque<"java.util.UUID">>;
  getDeactivationRange(): number;
  getDisplayedItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getDisplayedLootTable(): JavaOpaque<"org.bukkit.loot.LootTable"> | null;
  getKeyItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLootTable(): JavaOpaque<"org.bukkit.loot.LootTable">;
  getNextStateUpdateTime(): bigint;
  getRewardedPlayers(): JavaCollection<JavaOpaque<"java.util.UUID">>;
  hasConnectedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  hasRewardedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  removeRewardedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  setActivationRange(arg0: number): void;
  setDeactivationRange(arg0: number): void;
  setDisplayedItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setDisplayedLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable"> | null): void;
  setKeyItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable">): void;
  setNextStateUpdateTime(arg0: bigint): void;
}
export type CraftVault = CraftVaultMembers & CraftBlockEntityState<j_net_minecraft_world_level_block_entity_vault.VaultBlockEntity> & JavaOpaque<"org.bukkit.block.Vault">;
export interface CraftVaultStatics {
  new(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_net_minecraft_world_level_block_entity_vault.VaultBlockEntity): CraftVault;
}
