// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_block from './com.destroystokyo.paper.block.generated.js';
import type * as j_com_destroystokyo_paper_loottable from './com.destroystokyo.paper.loottable.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_block from './io.papermc.paper.block.generated.js';
import type * as j_io_papermc_paper_command from './io.papermc.paper.command.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';
import type * as j_io_papermc_paper_persistence from './io.papermc.paper.persistence.generated.js';
import type * as j_io_papermc_paper_world_flag from './io.papermc.paper.world.flag.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_block_data_type from './org.bukkit.block.data.type.generated.js';
import type * as j_org_bukkit_block_sign from './org.bukkit.block.sign.generated.js';
import type * as j_org_bukkit_block_structure from './org.bukkit.block.structure.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';
import type * as j_org_bukkit_material from './org.bukkit.material.generated.js';
import type * as j_org_bukkit_metadata from './org.bukkit.metadata.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';
import type * as j_org_bukkit_profile from './org.bukkit.profile.generated.js';
import type * as j_org_bukkit_projectiles from './org.bukkit.projectiles.generated.js';
import type * as j_org_bukkit_spawner from './org.bukkit.spawner.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.block.Banner. */
export interface BannerMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Nameable, TileState];
  addPattern(arg0: j_org_bukkit_block_banner.Pattern): void;
  getBaseColor(): j_org_bukkit.DyeColor;
  getPattern(arg0: number): j_org_bukkit_block_banner.Pattern;
  getPatterns(): JavaList<j_org_bukkit_block_banner.Pattern>;
  numberOfPatterns(): number;
  removePattern(arg0: number): j_org_bukkit_block_banner.Pattern;
  setBaseColor(arg0: j_org_bukkit.DyeColor): void;
  setPattern(arg0: number, arg1: j_org_bukkit_block_banner.Pattern): void;
  setPatterns(arg0: JavaList<j_org_bukkit_block_banner.Pattern>): void;
}
export type Banner = BannerMembers & j_org_bukkit.Nameable & TileState;
export interface BannerStatics {
}

/** JVM interface org.bukkit.block.Barrel. */
export interface BarrelMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, Container, Lidded];
}
export type Barrel = BarrelMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & Container & Lidded;
export interface BarrelStatics {
}

/** JVM interface org.bukkit.block.Beacon. */
export interface BeaconMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block.LockableTileState];
  getEffectRange(): number;
  getEntitiesInRange(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  getPrimaryEffect(): j_org_bukkit_potion.PotionEffect | null;
  getSecondaryEffect(): j_org_bukkit_potion.PotionEffect | null;
  getTier(): number;
  resetEffectRange(): void;
  setEffectRange(arg0: number): void;
  setPrimaryEffect(arg0: j_org_bukkit_potion.PotionEffectType | null): void | null;
  setSecondaryEffect(arg0: j_org_bukkit_potion.PotionEffectType | null): void | null;
}
export type Beacon = BeaconMembers & j_io_papermc_paper_block.LockableTileState;
export interface BeaconStatics {
}

/** JVM interface org.bukkit.block.Bed. */
export interface BedMembers {
  readonly __javaSupertypes?: readonly [TileState, j_org_bukkit_material.Colorable];
  getColor(): j_org_bukkit.DyeColor;
  setColor(arg0: j_org_bukkit.DyeColor): void;
}
export type Bed = BedMembers & TileState & j_org_bukkit_material.Colorable;
export interface BedStatics {
}

/** JVM interface org.bukkit.block.Beehive. */
export interface BeehiveMembers {
  readonly __javaSupertypes?: readonly [EntityBlockStorage<j_org_bukkit_entity.Bee>];
  getFlower(): j_org_bukkit.Location | null;
  isSedated(): boolean;
  setFlower(arg0: j_org_bukkit.Location | null): void | null;
}
export type Beehive = BeehiveMembers & EntityBlockStorage<j_org_bukkit_entity.Bee>;
export interface BeehiveStatics {
}

/** JVM interface org.bukkit.block.Bell. */
export interface BellMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getResonatingTicks(): number;
  getShakingTicks(): number;
  isResonating(): boolean;
  isShaking(): boolean;
  ring(): boolean;
  ring(arg0: BlockFace | null): boolean | null;
  ring(arg0: j_org_bukkit_entity.Entity | null): boolean | null;
  ring(arg0: j_org_bukkit_entity.Entity | null, arg1: BlockFace | null): boolean | null;
}
export type Bell = BellMembers & TileState;
export interface BellStatics {
}

/** JVM interface org.bukkit.block.Biome. */
export interface BiomeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<Biome>, j_org_bukkit.Keyed, j_net_kyori_adventure_translation.Translatable];
  compareTo(arg0: object): number;
  compareTo(arg0: Biome): number;
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
  translationKey(): string;
}
export type Biome = BiomeMembers & j_org_bukkit.Keyed & j_net_kyori_adventure_translation.Translatable;
export interface BiomeStatics {
  readonly BADLANDS: Biome;
  readonly BAMBOO_JUNGLE: Biome;
  readonly BASALT_DELTAS: Biome;
  readonly BEACH: Biome;
  readonly BIRCH_FOREST: Biome;
  readonly CHERRY_GROVE: Biome;
  readonly COLD_OCEAN: Biome;
  readonly CRIMSON_FOREST: Biome;
  readonly CUSTOM: Biome;
  readonly DARK_FOREST: Biome;
  readonly DEEP_COLD_OCEAN: Biome;
  readonly DEEP_DARK: Biome;
  readonly DEEP_FROZEN_OCEAN: Biome;
  readonly DEEP_LUKEWARM_OCEAN: Biome;
  readonly DEEP_OCEAN: Biome;
  readonly DESERT: Biome;
  readonly DRIPSTONE_CAVES: Biome;
  readonly END_BARRENS: Biome;
  readonly END_HIGHLANDS: Biome;
  readonly END_MIDLANDS: Biome;
  readonly ERODED_BADLANDS: Biome;
  readonly FLOWER_FOREST: Biome;
  readonly FOREST: Biome;
  readonly FROZEN_OCEAN: Biome;
  readonly FROZEN_PEAKS: Biome;
  readonly FROZEN_RIVER: Biome;
  readonly GROVE: Biome;
  readonly ICE_SPIKES: Biome;
  readonly JAGGED_PEAKS: Biome;
  readonly JUNGLE: Biome;
  readonly LUKEWARM_OCEAN: Biome;
  readonly LUSH_CAVES: Biome;
  readonly MANGROVE_SWAMP: Biome;
  readonly MEADOW: Biome;
  readonly MUSHROOM_FIELDS: Biome;
  readonly NETHER_WASTES: Biome;
  readonly OCEAN: Biome;
  readonly OLD_GROWTH_BIRCH_FOREST: Biome;
  readonly OLD_GROWTH_PINE_TAIGA: Biome;
  readonly OLD_GROWTH_SPRUCE_TAIGA: Biome;
  readonly PALE_GARDEN: Biome;
  readonly PLAINS: Biome;
  readonly RIVER: Biome;
  readonly SAVANNA: Biome;
  readonly SAVANNA_PLATEAU: Biome;
  readonly SMALL_END_ISLANDS: Biome;
  readonly SNOWY_BEACH: Biome;
  readonly SNOWY_PLAINS: Biome;
  readonly SNOWY_SLOPES: Biome;
  readonly SNOWY_TAIGA: Biome;
  readonly SOUL_SAND_VALLEY: Biome;
  readonly SPARSE_JUNGLE: Biome;
  readonly STONY_PEAKS: Biome;
  readonly STONY_SHORE: Biome;
  readonly SUNFLOWER_PLAINS: Biome;
  readonly SWAMP: Biome;
  readonly TAIGA: Biome;
  readonly THE_END: Biome;
  readonly THE_VOID: Biome;
  readonly WARM_OCEAN: Biome;
  readonly WARPED_FOREST: Biome;
  readonly WINDSWEPT_FOREST: Biome;
  readonly WINDSWEPT_GRAVELLY_HILLS: Biome;
  readonly WINDSWEPT_HILLS: Biome;
  readonly WINDSWEPT_SAVANNA: Biome;
  readonly WOODED_BADLANDS: Biome;
  valueOf(arg0: string): Biome;
  values(): Array<Biome>;
}

/** JVM interface org.bukkit.block.BlastFurnace. */
export interface BlastFurnaceMembers {
  readonly __javaSupertypes?: readonly [Furnace];
}
export type BlastFurnace = BlastFurnaceMembers & Furnace;
export interface BlastFurnaceStatics {
}

/** JVM interface org.bukkit.block.Block. */
export interface BlockMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_translation.Translatable, j_org_bukkit.Translatable_2, j_org_bukkit_metadata.Metadatable];
  applyBoneMeal(arg0: BlockFace): boolean;
  breakNaturally(): boolean;
  breakNaturally(arg0: j_org_bukkit_inventory.ItemStack | null): boolean | null;
  breakNaturally(arg0: j_org_bukkit_inventory.ItemStack, arg1: boolean): boolean;
  breakNaturally(arg0: j_org_bukkit_inventory.ItemStack, arg1: boolean, arg2: boolean): boolean;
  breakNaturally(arg0: j_org_bukkit_inventory.ItemStack, arg1: boolean, arg2: boolean, arg3: boolean): boolean;
  breakNaturally(arg0: boolean): boolean;
  breakNaturally(arg0: boolean, arg1: boolean): boolean;
  canPlace(arg0: j_org_bukkit_block_data.BlockData): boolean;
  fluidTick(): void;
  getBiome(): Biome;
  getBlockData(): j_org_bukkit_block_data.BlockData;
  getBlockKey(): bigint;
  getBlockPower(): number;
  getBlockPower(arg0: BlockFace): number;
  getBlockSoundGroup(): j_org_bukkit.SoundGroup;
  getBoundingBox(): j_org_bukkit_util.BoundingBox;
  getBreakSpeed(arg0: j_org_bukkit_entity.Player): number;
  getChunk(): j_org_bukkit.Chunk;
  getCollisionShape(): j_org_bukkit_util.VoxelShape;
  getComputedBiome(): Biome;
  getData(): number;
  getDestroySpeed(arg0: j_org_bukkit_inventory.ItemStack): number;
  getDestroySpeed(arg0: j_org_bukkit_inventory.ItemStack, arg1: boolean): number;
  getDrops(): JavaCollection<j_org_bukkit_inventory.ItemStack>;
  getDrops(arg0: j_org_bukkit_inventory.ItemStack | null): JavaCollection<j_org_bukkit_inventory.ItemStack> | null;
  getDrops(arg0: j_org_bukkit_inventory.ItemStack | null, arg1: j_org_bukkit_entity.Entity | null): JavaCollection<j_org_bukkit_inventory.ItemStack> | null;
  getFace(arg0: Block): BlockFace | null;
  getHumidity(): number;
  getLightFromBlocks(): number;
  getLightFromSky(): number;
  getLightLevel(): number;
  getLocation(): j_org_bukkit.Location;
  getLocation(arg0: j_org_bukkit.Location | null): j_org_bukkit.Location | null;
  getPistonMoveReaction(): PistonMoveReaction;
  getRelative(arg0: number, arg1: number, arg2: number): Block;
  getRelative(arg0: BlockFace): Block;
  getRelative(arg0: BlockFace, arg1: number): Block;
  getSoundGroup(): j_com_destroystokyo_paper_block.BlockSoundGroup;
  getState(): BlockState;
  getState(arg0: boolean): BlockState;
  getTemperature(): number;
  getTranslationKey(): string;
  getType(): j_org_bukkit.Material;
  getWorld(): j_org_bukkit.World;
  getX(): number;
  getY(): number;
  getZ(): number;
  isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean;
  isBlockFacePowered(arg0: BlockFace): boolean;
  isBlockIndirectlyPowered(): boolean;
  isBlockPowered(): boolean;
  isBuildable(): boolean;
  isBurnable(): boolean;
  isCollidable(): boolean;
  isEmpty(): boolean;
  isLiquid(): boolean;
  isPassable(): boolean;
  isPreferredTool(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  isReplaceable(): boolean;
  isSolid(): boolean;
  isSuffocating(): boolean;
  isValidTool(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  randomTick(): void;
  rayTrace(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_util.Vector, arg2: number, arg3: j_org_bukkit.FluidCollisionMode): j_org_bukkit_util.RayTraceResult | null;
  setBiome(arg0: Biome): void;
  setBlockData(arg0: j_org_bukkit_block_data.BlockData): void;
  setBlockData(arg0: j_org_bukkit_block_data.BlockData, arg1: boolean): void;
  setType(arg0: j_org_bukkit.Material): void;
  setType(arg0: j_org_bukkit.Material, arg1: boolean): void;
  tick(): void;
}
export type Block = BlockMembers & j_net_kyori_adventure_translation.Translatable & j_org_bukkit.Translatable_2 & j_org_bukkit_metadata.Metadatable;
export interface BlockStatics {
  getBlockKey(arg0: number, arg1: number, arg2: number): bigint;
  getBlockKeyX(arg0: bigint): number;
  getBlockKeyY(arg0: bigint): number;
  getBlockKeyZ(arg0: bigint): number;
}

/** Live JVM enum org.bukkit.block.BlockFace; constants are host handles, not strings. */
export type BlockFace = JavaEnum<"org.bukkit.block.BlockFace", "DOWN" | "EAST" | "EAST_NORTH_EAST" | "EAST_SOUTH_EAST" | "NORTH" | "NORTH_EAST" | "NORTH_NORTH_EAST" | "NORTH_NORTH_WEST" | "NORTH_WEST" | "SELF" | "SOUTH" | "SOUTH_EAST" | "SOUTH_SOUTH_EAST" | "SOUTH_SOUTH_WEST" | "SOUTH_WEST" | "UP" | "WEST" | "WEST_NORTH_WEST" | "WEST_SOUTH_WEST"> & BlockFaceMembers;
export interface BlockFaceMembers {
  getDirection(): j_org_bukkit_util.Vector;
  getModX(): number;
  getModY(): number;
  getModZ(): number;
  getOppositeFace(): BlockFace;
  isCartesian(): boolean;
}
export interface BlockFaceStatics {
  readonly DOWN: BlockFace;
  readonly EAST: BlockFace;
  readonly EAST_NORTH_EAST: BlockFace;
  readonly EAST_SOUTH_EAST: BlockFace;
  readonly NORTH: BlockFace;
  readonly NORTH_EAST: BlockFace;
  readonly NORTH_NORTH_EAST: BlockFace;
  readonly NORTH_NORTH_WEST: BlockFace;
  readonly NORTH_WEST: BlockFace;
  readonly SELF: BlockFace;
  readonly SOUTH: BlockFace;
  readonly SOUTH_EAST: BlockFace;
  readonly SOUTH_SOUTH_EAST: BlockFace;
  readonly SOUTH_SOUTH_WEST: BlockFace;
  readonly SOUTH_WEST: BlockFace;
  readonly UP: BlockFace;
  readonly WEST: BlockFace;
  readonly WEST_NORTH_WEST: BlockFace;
  readonly WEST_SOUTH_WEST: BlockFace;
  valueOf(arg0: string): BlockFace;
  values(): Array<BlockFace>;
}

/** JVM interface org.bukkit.block.BlockState. */
export interface BlockStateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_metadata.Metadatable];
  copy(): BlockState;
  copy(arg0: j_org_bukkit.Location): BlockState;
  getBlock(): Block;
  getBlockData(): j_org_bukkit_block_data.BlockData;
  getChunk(): j_org_bukkit.Chunk;
  getData(): j_org_bukkit_material.MaterialData;
  getDrops(): JavaCollection<j_org_bukkit_inventory.ItemStack>;
  getDrops(arg0: j_org_bukkit_inventory.ItemStack | null): JavaCollection<j_org_bukkit_inventory.ItemStack> | null;
  getDrops(arg0: j_org_bukkit_inventory.ItemStack | null, arg1: j_org_bukkit_entity.Entity | null): JavaCollection<j_org_bukkit_inventory.ItemStack> | null;
  getLightLevel(): number;
  getLocation(): j_org_bukkit.Location;
  getLocation(arg0: j_org_bukkit.Location | null): j_org_bukkit.Location | null;
  getRawData(): number;
  getType(): j_org_bukkit.Material;
  getWorld(): j_org_bukkit.World;
  getX(): number;
  getY(): number;
  getZ(): number;
  isCollidable(): boolean;
  isPlaced(): boolean;
  isSuffocating(): boolean;
  setBlockData(arg0: j_org_bukkit_block_data.BlockData): void;
  setData(arg0: j_org_bukkit_material.MaterialData): void;
  setRawData(arg0: number): void;
  setType(arg0: j_org_bukkit.Material): void;
  update(): boolean;
  update(arg0: boolean): boolean;
  update(arg0: boolean, arg1: boolean): boolean;
}
export type BlockState = BlockStateMembers & j_org_bukkit_metadata.Metadatable;
export interface BlockStateStatics {
}

/** Live JVM enum org.bukkit.block.BlockSupport; constants are host handles, not strings. */
export type BlockSupport = JavaEnum<"org.bukkit.block.BlockSupport", "CENTER" | "FULL" | "RIGID"> & BlockSupportMembers;
export interface BlockSupportMembers {
}
export interface BlockSupportStatics {
  readonly CENTER: BlockSupport;
  readonly FULL: BlockSupport;
  readonly RIGID: BlockSupport;
  valueOf(arg0: string): BlockSupport;
  values(): Array<BlockSupport>;
}

/** JVM interface org.bukkit.block.BlockType. */
export interface BlockTypeMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_world_flag.FeatureDependant, j_net_kyori_adventure_translation.Translatable, j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  asMaterial(): j_org_bukkit.Material | null;
  createBlockData(): j_org_bukkit_block_data.BlockData;
  createBlockData(arg0: string): j_org_bukkit_block_data.BlockData | null;
  createBlockDataStates(): JavaCollection<j_org_bukkit_block_data.BlockData>;
  getBlastResistance(): number;
  getBlockDataClass(): JavaClass<j_org_bukkit_block_data.BlockData>;
  getHardness(): number;
  getItemType(): j_org_bukkit_inventory.ItemType;
  getSlipperiness(): number;
  getTranslationKey(): string;
  hasCollision(): boolean;
  hasGravity(): boolean;
  hasItemType(): boolean;
  isAir(): boolean;
  isBurnable(): boolean;
  isEnabledByFeature(arg0: j_org_bukkit.World): boolean;
  isFlammable(): boolean;
  isInteractable(): boolean;
  isOccluding(): boolean;
  isSolid(): boolean;
  typed(): BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  typed<B /* extends j_org_bukkit_block_data.BlockData */>(arg0: JavaClass<B>): BlockType_Typed<B>;
}
export type BlockType = BlockTypeMembers & j_io_papermc_paper_world_flag.FeatureDependant & j_net_kyori_adventure_translation.Translatable & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface BlockTypeStatics {
  readonly ACACIA_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly ACACIA_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly ACACIA_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly ACACIA_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly ACACIA_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly ACACIA_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly ACACIA_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly ACACIA_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ACACIA_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly ACACIA_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly ACACIA_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly ACACIA_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly ACACIA_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly ACACIA_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly ACACIA_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly ACACIA_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly ACACIA_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly ACTIVATOR_RAIL: BlockType_Typed<j_org_bukkit_block_data_type.RedstoneRail>;
  readonly AIR: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ALLIUM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly AMETHYST_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly AMETHYST_CLUSTER: BlockType_Typed<j_org_bukkit_block_data_type.AmethystCluster>;
  readonly ANCIENT_DEBRIS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ANDESITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ANDESITE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly ANDESITE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly ANDESITE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly ANVIL: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly ATTACHED_MELON_STEM: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly ATTACHED_PUMPKIN_STEM: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly AZALEA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly AZALEA_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly AZURE_BLUET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BAMBOO: BlockType_Typed<j_org_bukkit_block_data_type.Bamboo>;
  readonly BAMBOO_BLOCK: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly BAMBOO_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly BAMBOO_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly BAMBOO_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly BAMBOO_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly BAMBOO_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly BAMBOO_MOSAIC: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BAMBOO_MOSAIC_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly BAMBOO_MOSAIC_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly BAMBOO_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BAMBOO_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly BAMBOO_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BAMBOO_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly BAMBOO_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly BAMBOO_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly BAMBOO_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly BAMBOO_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly BAMBOO_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly BARREL: BlockType_Typed<j_org_bukkit_block_data_type.Barrel_2>;
  readonly BARRIER: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly BASALT: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly BEACON: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BEDROCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BEEHIVE: BlockType_Typed<j_org_bukkit_block_data_type.Beehive_2>;
  readonly BEETROOTS: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly BEE_NEST: BlockType_Typed<j_org_bukkit_block_data_type.Beehive_2>;
  readonly BELL: BlockType_Typed<j_org_bukkit_block_data_type.Bell_2>;
  readonly BIG_DRIPLEAF: BlockType_Typed<j_org_bukkit_block_data_type.BigDripleaf>;
  readonly BIG_DRIPLEAF_STEM: BlockType_Typed<j_org_bukkit_block_data_type.Dripleaf>;
  readonly BIRCH_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly BIRCH_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly BIRCH_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly BIRCH_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly BIRCH_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly BIRCH_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly BIRCH_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly BIRCH_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BIRCH_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly BIRCH_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly BIRCH_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly BIRCH_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly BIRCH_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly BIRCH_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly BIRCH_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly BIRCH_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly BIRCH_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly BLACKSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLACKSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly BLACKSTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly BLACKSTONE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly BLACK_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly BLACK_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly BLACK_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly BLACK_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly BLACK_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLACK_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLACK_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLACK_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BLACK_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BLACK_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLACK_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly BLACK_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLACK_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BLACK_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLAST_FURNACE: BlockType_Typed<j_org_bukkit_block_data_type.Furnace_2>;
  readonly BLUE_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly BLUE_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly BLUE_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly BLUE_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly BLUE_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BLUE_ICE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_ORCHID: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BLUE_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly BLUE_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BLUE_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BLUE_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BONE_BLOCK: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly BOOKSHELF: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BRAIN_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly BRAIN_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BRAIN_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly BRAIN_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly BREWING_STAND: BlockType_Typed<j_org_bukkit_block_data_type.BrewingStand_2>;
  readonly BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly BROWN_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly BROWN_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly BROWN_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly BROWN_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly BROWN_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BROWN_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BROWN_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BROWN_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BROWN_MUSHROOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BROWN_MUSHROOM_BLOCK: BlockType_Typed<j_org_bukkit_block_data.MultipleFacing>;
  readonly BROWN_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BROWN_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BROWN_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly BROWN_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BROWN_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly BROWN_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BUBBLE_COLUMN: BlockType_Typed<j_org_bukkit_block_data_type.BubbleColumn>;
  readonly BUBBLE_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly BUBBLE_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BUBBLE_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly BUBBLE_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly BUDDING_AMETHYST: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly BUSH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CACTUS: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly CACTUS_FLOWER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CAKE: BlockType_Typed<j_org_bukkit_block_data_type.Cake>;
  readonly CALCITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CALIBRATED_SCULK_SENSOR: BlockType_Typed<j_org_bukkit_block_data_type.CalibratedSculkSensor_2>;
  readonly CAMPFIRE: BlockType_Typed<j_org_bukkit_block_data_type.Campfire_2>;
  readonly CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly CARROTS: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly CARTOGRAPHY_TABLE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CARVED_PUMPKIN: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly CAULDRON: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CAVE_AIR: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CAVE_VINES: BlockType_Typed<j_org_bukkit_block_data_type.CaveVines>;
  readonly CAVE_VINES_PLANT: BlockType_Typed<j_org_bukkit_block_data_type.CaveVinesPlant>;
  readonly CHAIN: BlockType_Typed<j_org_bukkit_block_data_type.Chain>;
  readonly CHAIN_COMMAND_BLOCK: BlockType_Typed<j_org_bukkit_block_data_type.CommandBlock_2>;
  readonly CHERRY_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly CHERRY_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly CHERRY_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly CHERRY_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly CHERRY_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly CHERRY_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly CHERRY_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly CHERRY_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHERRY_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly CHERRY_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly CHERRY_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly CHERRY_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly CHERRY_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly CHERRY_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly CHERRY_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly CHERRY_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly CHERRY_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly CHEST: BlockType_Typed<j_org_bukkit_block_data_type.Chest_2>;
  readonly CHIPPED_ANVIL: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly CHISELED_BOOKSHELF: BlockType_Typed<j_org_bukkit_block_data_type.ChiseledBookshelf_2>;
  readonly CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_DEEPSLATE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_NETHER_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_POLISHED_BLACKSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_QUARTZ_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_RED_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_RESIN_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_TUFF: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHISELED_TUFF_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CHORUS_FLOWER: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly CHORUS_PLANT: BlockType_Typed<j_org_bukkit_block_data.MultipleFacing>;
  readonly CLAY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CLOSED_EYEBLOSSOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COAL_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COARSE_DIRT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COBBLED_DEEPSLATE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COBBLED_DEEPSLATE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly COBBLED_DEEPSLATE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly COBBLED_DEEPSLATE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly COBBLESTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COBBLESTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly COBBLESTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly COBBLESTONE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly COBWEB: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COCOA: BlockType_Typed<j_org_bukkit_block_data_type.Cocoa>;
  readonly COMMAND_BLOCK: BlockType_Typed<j_org_bukkit_block_data_type.CommandBlock_2>;
  readonly COMPARATOR: BlockType_Typed<j_org_bukkit_block_data_type.Comparator_2>;
  readonly COMPOSTER: BlockType_Typed<j_org_bukkit_block_data.Levelled>;
  readonly CONDUIT: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly COPPER_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly COPPER_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly CORNFLOWER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRACKED_DEEPSLATE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRACKED_DEEPSLATE_TILES: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRACKED_NETHER_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRACKED_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRAFTER: BlockType_Typed<j_org_bukkit_block_data_type.Crafter_2>;
  readonly CRAFTING_TABLE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CREAKING_HEART: BlockType_Typed<j_org_bukkit_block_data_type.CreakingHeart_2>;
  readonly CREEPER_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly CREEPER_WALL_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
  readonly CRIMSON_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly CRIMSON_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly CRIMSON_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly CRIMSON_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly CRIMSON_FUNGUS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRIMSON_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly CRIMSON_HYPHAE: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly CRIMSON_NYLIUM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRIMSON_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRIMSON_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly CRIMSON_ROOTS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CRIMSON_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly CRIMSON_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly CRIMSON_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly CRIMSON_STEM: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly CRIMSON_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly CRIMSON_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly CRIMSON_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly CRYING_OBSIDIAN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly CUT_RED_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CUT_RED_SANDSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly CUT_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CUT_SANDSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly CYAN_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly CYAN_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly CYAN_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly CYAN_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly CYAN_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CYAN_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CYAN_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CYAN_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly CYAN_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly CYAN_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CYAN_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly CYAN_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly CYAN_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly CYAN_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DAMAGED_ANVIL: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly DANDELION: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DARK_OAK_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly DARK_OAK_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly DARK_OAK_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly DARK_OAK_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly DARK_OAK_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly DARK_OAK_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly DARK_OAK_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly DARK_OAK_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DARK_OAK_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly DARK_OAK_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly DARK_OAK_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly DARK_OAK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly DARK_OAK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly DARK_OAK_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly DARK_OAK_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly DARK_OAK_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly DARK_OAK_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly DARK_PRISMARINE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DARK_PRISMARINE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly DARK_PRISMARINE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly DAYLIGHT_DETECTOR: BlockType_Typed<j_org_bukkit_block_data_type.DaylightDetector_2>;
  readonly DEAD_BRAIN_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_BRAIN_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEAD_BRAIN_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_BRAIN_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly DEAD_BUBBLE_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_BUBBLE_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEAD_BUBBLE_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_BUBBLE_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly DEAD_BUSH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEAD_FIRE_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_FIRE_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEAD_FIRE_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_FIRE_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly DEAD_HORN_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_HORN_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEAD_HORN_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_HORN_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly DEAD_TUBE_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_TUBE_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEAD_TUBE_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly DEAD_TUBE_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly DECORATED_POT: BlockType_Typed<j_org_bukkit_block_data_type.DecoratedPot_2>;
  readonly DEEPSLATE: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly DEEPSLATE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly DEEPSLATE_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly DEEPSLATE_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly DEEPSLATE_COAL_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_COPPER_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_DIAMOND_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_EMERALD_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_GOLD_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_IRON_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_LAPIS_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_REDSTONE_ORE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly DEEPSLATE_TILES: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DEEPSLATE_TILE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly DEEPSLATE_TILE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly DEEPSLATE_TILE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly DETECTOR_RAIL: BlockType_Typed<j_org_bukkit_block_data_type.RedstoneRail>;
  readonly DIAMOND_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DIAMOND_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DIORITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DIORITE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly DIORITE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly DIORITE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly DIRT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DIRT_PATH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DISPENSER: BlockType_Typed<j_org_bukkit_block_data_type.Dispenser_2>;
  readonly DRAGON_EGG: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DRAGON_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly DRAGON_WALL_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
  readonly DRIED_GHAST: BlockType_Typed<j_org_bukkit_block_data_type.DriedGhast>;
  readonly DRIED_KELP_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DRIPSTONE_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly DROPPER: BlockType_Typed<j_org_bukkit_block_data_type.Dispenser_2>;
  readonly EMERALD_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly EMERALD_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ENCHANTING_TABLE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ENDER_CHEST: BlockType_Typed<j_org_bukkit_block_data_type.EnderChest_2>;
  readonly END_GATEWAY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly END_PORTAL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly END_PORTAL_FRAME: BlockType_Typed<j_org_bukkit_block_data_type.EndPortalFrame>;
  readonly END_ROD: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly END_STONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly END_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly END_STONE_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly END_STONE_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly END_STONE_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly EXPOSED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly EXPOSED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly EXPOSED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly EXPOSED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly EXPOSED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly EXPOSED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly EXPOSED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly EXPOSED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly EXPOSED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly FARMLAND: BlockType_Typed<j_org_bukkit_block_data_type.Farmland>;
  readonly FERN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FIRE: BlockType_Typed<j_org_bukkit_block_data_type.Fire>;
  readonly FIREFLY_BUSH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FIRE_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly FIRE_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FIRE_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly FIRE_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly FLETCHING_TABLE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FLOWERING_AZALEA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FLOWERING_AZALEA_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly FLOWER_POT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FROGSPAWN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly FROSTED_ICE: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly FURNACE: BlockType_Typed<j_org_bukkit_block_data_type.Furnace_2>;
  readonly GILDED_BLACKSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly GLOWSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GLOW_LICHEN: BlockType_Typed<j_org_bukkit_block_data_type.GlowLichen>;
  readonly GOLD_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GOLD_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRANITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRANITE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly GRANITE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly GRANITE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly GRASS_BLOCK: BlockType_Typed<j_org_bukkit_block_data.Snowable>;
  readonly GRAVEL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRAY_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly GRAY_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly GRAY_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly GRAY_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly GRAY_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRAY_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRAY_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRAY_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly GRAY_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly GRAY_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRAY_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly GRAY_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRAY_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly GRAY_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GREEN_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly GREEN_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly GREEN_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly GREEN_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly GREEN_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GREEN_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GREEN_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GREEN_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly GREEN_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly GREEN_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GREEN_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly GREEN_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GREEN_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly GREEN_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly GRINDSTONE: BlockType_Typed<j_org_bukkit_block_data_type.Grindstone>;
  readonly HANGING_ROOTS: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly HAY_BLOCK: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly HEAVY_CORE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly HEAVY_WEIGHTED_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.AnaloguePowerable>;
  readonly HONEYCOMB_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly HONEY_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly HOPPER: BlockType_Typed<j_org_bukkit_block_data_type.Hopper_2>;
  readonly HORN_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly HORN_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly HORN_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly HORN_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly ICE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly INFESTED_CHISELED_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly INFESTED_COBBLESTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly INFESTED_CRACKED_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly INFESTED_DEEPSLATE: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly INFESTED_MOSSY_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly INFESTED_STONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly INFESTED_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly IRON_BARS: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly IRON_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly IRON_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly IRON_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly IRON_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly JACK_O_LANTERN: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly JIGSAW: BlockType_Typed<j_org_bukkit_block_data_type.Jigsaw_2>;
  readonly JUKEBOX: BlockType_Typed<j_org_bukkit_block_data_type.Jukebox_2>;
  readonly JUNGLE_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly JUNGLE_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly JUNGLE_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly JUNGLE_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly JUNGLE_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly JUNGLE_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly JUNGLE_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly JUNGLE_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly JUNGLE_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly JUNGLE_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly JUNGLE_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly JUNGLE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly JUNGLE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly JUNGLE_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly JUNGLE_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly JUNGLE_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly JUNGLE_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly KELP: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly KELP_PLANT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LADDER: BlockType_Typed<j_org_bukkit_block_data_type.Ladder>;
  readonly LANTERN: BlockType_Typed<j_org_bukkit_block_data_type.Lantern>;
  readonly LAPIS_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LAPIS_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LARGE_AMETHYST_BUD: BlockType_Typed<j_org_bukkit_block_data_type.AmethystCluster>;
  readonly LARGE_FERN: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly LAVA: BlockType_Typed<j_org_bukkit_block_data.Levelled>;
  readonly LAVA_CAULDRON: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LEAF_LITTER: BlockType_Typed<j_org_bukkit_block_data_type.LeafLitter>;
  readonly LECTERN: BlockType_Typed<j_org_bukkit_block_data_type.Lectern_2>;
  readonly LEVER: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly LIGHT: BlockType_Typed<j_org_bukkit_block_data_type.Light>;
  readonly LIGHTNING_ROD: BlockType_Typed<j_org_bukkit_block_data_type.LightningRod>;
  readonly LIGHT_BLUE_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly LIGHT_BLUE_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly LIGHT_BLUE_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly LIGHT_BLUE_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly LIGHT_BLUE_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_BLUE_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_BLUE_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_BLUE_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIGHT_BLUE_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIGHT_BLUE_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_BLUE_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly LIGHT_BLUE_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_BLUE_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIGHT_BLUE_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_GRAY_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly LIGHT_GRAY_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly LIGHT_GRAY_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly LIGHT_GRAY_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly LIGHT_GRAY_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_GRAY_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_GRAY_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_GRAY_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIGHT_GRAY_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIGHT_GRAY_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_GRAY_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly LIGHT_GRAY_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_GRAY_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIGHT_GRAY_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIGHT_WEIGHTED_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.AnaloguePowerable>;
  readonly LILAC: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly LILY_OF_THE_VALLEY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LILY_PAD: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIME_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly LIME_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly LIME_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly LIME_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly LIME_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIME_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIME_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIME_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIME_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIME_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIME_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly LIME_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LIME_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly LIME_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LODESTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly LOOM: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly MAGENTA_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly MAGENTA_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly MAGENTA_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly MAGENTA_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly MAGENTA_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MAGENTA_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MAGENTA_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MAGENTA_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly MAGENTA_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly MAGENTA_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MAGENTA_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly MAGENTA_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MAGENTA_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly MAGENTA_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MAGMA_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MANGROVE_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly MANGROVE_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly MANGROVE_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly MANGROVE_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly MANGROVE_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly MANGROVE_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly MANGROVE_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly MANGROVE_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MANGROVE_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly MANGROVE_PROPAGULE: BlockType_Typed<j_org_bukkit_block_data_type.MangrovePropagule>;
  readonly MANGROVE_ROOTS: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly MANGROVE_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly MANGROVE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly MANGROVE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly MANGROVE_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly MANGROVE_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly MANGROVE_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly MANGROVE_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly MEDIUM_AMETHYST_BUD: BlockType_Typed<j_org_bukkit_block_data_type.AmethystCluster>;
  readonly MELON: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MELON_STEM: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly MOSSY_COBBLESTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MOSSY_COBBLESTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly MOSSY_COBBLESTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly MOSSY_COBBLESTONE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly MOSSY_STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MOSSY_STONE_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly MOSSY_STONE_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly MOSSY_STONE_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly MOSS_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MOSS_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MOVING_PISTON: BlockType_Typed<j_org_bukkit_block_data_type.TechnicalPiston>;
  readonly MUD: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MUDDY_MANGROVE_ROOTS: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly MUD_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly MUD_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly MUD_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly MUD_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly MUSHROOM_STEM: BlockType_Typed<j_org_bukkit_block_data.MultipleFacing>;
  readonly MYCELIUM: BlockType_Typed<j_org_bukkit_block_data.Snowable>;
  readonly NETHERITE_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NETHERRACK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NETHER_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NETHER_BRICK_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly NETHER_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly NETHER_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly NETHER_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly NETHER_GOLD_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NETHER_PORTAL: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly NETHER_QUARTZ_ORE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NETHER_SPROUTS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NETHER_WART: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly NETHER_WART_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly NOTE_BLOCK: BlockType_Typed<j_org_bukkit_block_data_type.NoteBlock>;
  readonly OAK_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly OAK_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly OAK_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly OAK_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly OAK_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly OAK_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly OAK_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly OAK_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OAK_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly OAK_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly OAK_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly OAK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly OAK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly OAK_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly OAK_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly OAK_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly OAK_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly OBSERVER: BlockType_Typed<j_org_bukkit_block_data_type.Observer>;
  readonly OBSIDIAN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OCHRE_FROGLIGHT: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly OPEN_EYEBLOSSOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly ORANGE_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly ORANGE_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly ORANGE_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly ORANGE_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly ORANGE_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly ORANGE_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly ORANGE_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ORANGE_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly ORANGE_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OXEYE_DAISY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OXIDIZED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OXIDIZED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OXIDIZED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly OXIDIZED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly OXIDIZED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly OXIDIZED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly OXIDIZED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly OXIDIZED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly OXIDIZED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly PACKED_ICE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PACKED_MUD: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PALE_HANGING_MOSS: BlockType_Typed<j_org_bukkit_block_data_type.HangingMoss>;
  readonly PALE_MOSS_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PALE_MOSS_CARPET: BlockType_Typed<j_org_bukkit_block_data_type.MossyCarpet>;
  readonly PALE_OAK_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly PALE_OAK_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly PALE_OAK_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly PALE_OAK_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly PALE_OAK_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly PALE_OAK_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly PALE_OAK_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly PALE_OAK_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PALE_OAK_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly PALE_OAK_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly PALE_OAK_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly PALE_OAK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly PALE_OAK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly PALE_OAK_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly PALE_OAK_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly PALE_OAK_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly PALE_OAK_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly PEARLESCENT_FROGLIGHT: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly PEONY: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly PETRIFIED_OAK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly PIGLIN_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly PIGLIN_WALL_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
  readonly PINK_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly PINK_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly PINK_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly PINK_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly PINK_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PINK_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PINK_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PINK_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly PINK_PETALS: BlockType_Typed<j_org_bukkit_block_data_type.FlowerBed>;
  readonly PINK_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly PINK_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PINK_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly PINK_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PINK_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PINK_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly PINK_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PISTON: BlockType_Typed<j_org_bukkit_block_data_type.Piston>;
  readonly PISTON_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.PistonHead>;
  readonly PITCHER_CROP: BlockType_Typed<j_org_bukkit_block_data_type.PitcherCrop>;
  readonly PITCHER_PLANT: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly PLAYER_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly PLAYER_WALL_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
  readonly PODZOL: BlockType_Typed<j_org_bukkit_block_data.Snowable>;
  readonly POINTED_DRIPSTONE: BlockType_Typed<j_org_bukkit_block_data_type.PointedDripstone>;
  readonly POLISHED_ANDESITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_ANDESITE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_ANDESITE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_BASALT: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly POLISHED_BLACKSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_BLACKSTONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_BLACKSTONE_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_BLACKSTONE_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_BLACKSTONE_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly POLISHED_BLACKSTONE_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly POLISHED_BLACKSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_BLACKSTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_BLACKSTONE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly POLISHED_DEEPSLATE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_DEEPSLATE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_DEEPSLATE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_DEEPSLATE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly POLISHED_DIORITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_DIORITE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_DIORITE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_GRANITE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_GRANITE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_GRANITE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_TUFF: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POLISHED_TUFF_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly POLISHED_TUFF_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly POLISHED_TUFF_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly POPPY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTATOES: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly POTTED_ACACIA_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_ALLIUM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_AZALEA_BUSH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_AZURE_BLUET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_BAMBOO: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_BIRCH_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_BLUE_ORCHID: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_BROWN_MUSHROOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_CACTUS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_CHERRY_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_CLOSED_EYEBLOSSOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_CORNFLOWER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_CRIMSON_FUNGUS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_CRIMSON_ROOTS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_DANDELION: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_DARK_OAK_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_DEAD_BUSH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_FERN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_FLOWERING_AZALEA_BUSH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_JUNGLE_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_LILY_OF_THE_VALLEY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_MANGROVE_PROPAGULE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_OAK_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_OPEN_EYEBLOSSOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_ORANGE_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_OXEYE_DAISY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_PALE_OAK_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_PINK_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_POPPY: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_RED_MUSHROOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_RED_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_SPRUCE_SAPLING: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_TORCHFLOWER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_WARPED_FUNGUS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_WARPED_ROOTS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_WHITE_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POTTED_WITHER_ROSE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POWDER_SNOW: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly POWDER_SNOW_CAULDRON: BlockType_Typed<j_org_bukkit_block_data.Levelled>;
  readonly POWERED_RAIL: BlockType_Typed<j_org_bukkit_block_data_type.RedstoneRail>;
  readonly PRISMARINE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PRISMARINE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PRISMARINE_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly PRISMARINE_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly PRISMARINE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly PRISMARINE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly PRISMARINE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly PUMPKIN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PUMPKIN_STEM: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly PURPLE_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly PURPLE_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly PURPLE_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly PURPLE_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly PURPLE_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPLE_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPLE_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPLE_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly PURPLE_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly PURPLE_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPLE_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly PURPLE_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPLE_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly PURPLE_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPUR_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly PURPUR_PILLAR: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly PURPUR_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly PURPUR_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly QUARTZ_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly QUARTZ_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly QUARTZ_PILLAR: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly QUARTZ_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly QUARTZ_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly RAIL: BlockType_Typed<j_org_bukkit_block_data.Rail>;
  readonly RAW_COPPER_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RAW_GOLD_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RAW_IRON_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly REDSTONE_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly REDSTONE_LAMP: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly REDSTONE_ORE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly REDSTONE_TORCH: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly REDSTONE_WALL_TORCH: BlockType_Typed<j_org_bukkit_block_data_type.RedstoneWallTorch>;
  readonly REDSTONE_WIRE: BlockType_Typed<j_org_bukkit_block_data_type.RedstoneWire>;
  readonly RED_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly RED_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly RED_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly RED_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly RED_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly RED_MUSHROOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_MUSHROOM_BLOCK: BlockType_Typed<j_org_bukkit_block_data.MultipleFacing>;
  readonly RED_NETHER_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_NETHER_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly RED_NETHER_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly RED_NETHER_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly RED_SAND: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_SANDSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly RED_SANDSTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly RED_SANDSTONE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly RED_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly RED_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly RED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RED_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly RED_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly REINFORCED_DEEPSLATE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly REPEATER: BlockType_Typed<j_org_bukkit_block_data_type.Repeater>;
  readonly REPEATING_COMMAND_BLOCK: BlockType_Typed<j_org_bukkit_block_data_type.CommandBlock_2>;
  readonly RESIN_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RESIN_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly RESIN_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly RESIN_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly RESIN_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly RESIN_CLUMP: BlockType_Typed<j_org_bukkit_block_data_type.ResinClump>;
  readonly RESPAWN_ANCHOR: BlockType_Typed<j_org_bukkit_block_data_type.RespawnAnchor>;
  readonly ROOTED_DIRT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ROSE_BUSH: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly SAND: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SANDSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly SANDSTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly SANDSTONE_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly SCAFFOLDING: BlockType_Typed<j_org_bukkit_block_data_type.Scaffolding>;
  readonly SCULK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SCULK_CATALYST: BlockType_Typed<j_org_bukkit_block_data_type.SculkCatalyst_2>;
  readonly SCULK_SENSOR: BlockType_Typed<j_org_bukkit_block_data_type.SculkSensor_2>;
  readonly SCULK_SHRIEKER: BlockType_Typed<j_org_bukkit_block_data_type.SculkShrieker_2>;
  readonly SCULK_VEIN: BlockType_Typed<j_org_bukkit_block_data_type.SculkVein>;
  readonly SEAGRASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SEA_LANTERN: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SEA_PICKLE: BlockType_Typed<j_org_bukkit_block_data_type.SeaPickle>;
  readonly SHORT_DRY_GRASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SHORT_GRASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SHROOMLIGHT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly SKELETON_SKULL: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly SKELETON_WALL_SKULL: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
  readonly SLIME_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMALL_AMETHYST_BUD: BlockType_Typed<j_org_bukkit_block_data_type.AmethystCluster>;
  readonly SMALL_DRIPLEAF: BlockType_Typed<j_org_bukkit_block_data_type.SmallDripleaf>;
  readonly SMITHING_TABLE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMOKER: BlockType_Typed<j_org_bukkit_block_data_type.Furnace_2>;
  readonly SMOOTH_BASALT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMOOTH_QUARTZ: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMOOTH_QUARTZ_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly SMOOTH_QUARTZ_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly SMOOTH_RED_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMOOTH_RED_SANDSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly SMOOTH_RED_SANDSTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly SMOOTH_SANDSTONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMOOTH_SANDSTONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly SMOOTH_SANDSTONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly SMOOTH_STONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SMOOTH_STONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly SNIFFER_EGG: BlockType_Typed<j_org_bukkit_block_data.Hatchable>;
  readonly SNOW: BlockType_Typed<j_org_bukkit_block_data_type.Snow>;
  readonly SNOW_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SOUL_CAMPFIRE: BlockType_Typed<j_org_bukkit_block_data_type.Campfire_2>;
  readonly SOUL_FIRE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SOUL_LANTERN: BlockType_Typed<j_org_bukkit_block_data_type.Lantern>;
  readonly SOUL_SAND: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SOUL_SOIL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SOUL_TORCH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SOUL_WALL_TORCH: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly SPAWNER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SPONGE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SPORE_BLOSSOM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SPRUCE_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly SPRUCE_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly SPRUCE_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly SPRUCE_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly SPRUCE_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly SPRUCE_LEAVES: BlockType_Typed<j_org_bukkit_block_data_type.Leaves>;
  readonly SPRUCE_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly SPRUCE_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SPRUCE_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly SPRUCE_SAPLING: BlockType_Typed<j_org_bukkit_block_data_type.Sapling>;
  readonly SPRUCE_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly SPRUCE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly SPRUCE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly SPRUCE_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly SPRUCE_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly SPRUCE_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly SPRUCE_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STICKY_PISTON: BlockType_Typed<j_org_bukkit_block_data_type.Piston>;
  readonly STONE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly STONECUTTER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly STONE_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly STONE_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly STONE_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly STONE_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly STONE_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly STONE_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly STONE_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly STONE_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly STRIPPED_ACACIA_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_ACACIA_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_BAMBOO_BLOCK: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_BIRCH_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_BIRCH_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_CHERRY_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_CHERRY_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_CRIMSON_HYPHAE: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_CRIMSON_STEM: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_DARK_OAK_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_DARK_OAK_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_JUNGLE_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_JUNGLE_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_MANGROVE_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_MANGROVE_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_OAK_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_OAK_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_PALE_OAK_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_PALE_OAK_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_SPRUCE_LOG: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_SPRUCE_WOOD: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_WARPED_HYPHAE: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRIPPED_WARPED_STEM: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly STRUCTURE_BLOCK: BlockType_Typed<j_org_bukkit_block_data_type.StructureBlock>;
  readonly STRUCTURE_VOID: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly SUGAR_CANE: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly SUNFLOWER: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly SUSPICIOUS_GRAVEL: BlockType_Typed<j_org_bukkit_block_data.Brushable>;
  readonly SUSPICIOUS_SAND: BlockType_Typed<j_org_bukkit_block_data.Brushable>;
  readonly SWEET_BERRY_BUSH: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly TALL_DRY_GRASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TALL_GRASS: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly TALL_SEAGRASS: BlockType_Typed<j_org_bukkit_block_data.Bisected>;
  readonly TARGET: BlockType_Typed<j_org_bukkit_block_data.AnaloguePowerable>;
  readonly TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TEST_BLOCK: BlockType_Typed<j_org_bukkit_block_data_type.TestBlock_2>;
  readonly TEST_INSTANCE_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TINTED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TNT: BlockType_Typed<j_org_bukkit_block_data_type.TNT>;
  readonly TORCH: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TORCHFLOWER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TORCHFLOWER_CROP: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly TRAPPED_CHEST: BlockType_Typed<j_org_bukkit_block_data_type.Chest_2>;
  readonly TRIAL_SPAWNER: BlockType_Typed<j_org_bukkit_block_data_type.TrialSpawner_2>;
  readonly TRIPWIRE: BlockType_Typed<j_org_bukkit_block_data_type.Tripwire>;
  readonly TRIPWIRE_HOOK: BlockType_Typed<j_org_bukkit_block_data_type.TripwireHook>;
  readonly TUBE_CORAL: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly TUBE_CORAL_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TUBE_CORAL_FAN: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly TUBE_CORAL_WALL_FAN: BlockType_Typed<j_org_bukkit_block_data_type.CoralWallFan>;
  readonly TUFF: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TUFF_BRICKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly TUFF_BRICK_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly TUFF_BRICK_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly TUFF_BRICK_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly TUFF_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly TUFF_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly TUFF_WALL: BlockType_Typed<j_org_bukkit_block_data_type.Wall>;
  readonly TURTLE_EGG: BlockType_Typed<j_org_bukkit_block_data_type.TurtleEgg>;
  readonly TWISTING_VINES: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly TWISTING_VINES_PLANT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly VAULT: BlockType_Typed<j_org_bukkit_block_data_type.Vault_2>;
  readonly VERDANT_FROGLIGHT: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly VINE: BlockType_Typed<j_org_bukkit_block_data.MultipleFacing>;
  readonly VOID_AIR: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WALL_TORCH: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly WARPED_BUTTON: BlockType_Typed<j_org_bukkit_block_data_type.Switch>;
  readonly WARPED_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly WARPED_FENCE: BlockType_Typed<j_org_bukkit_block_data_type.Fence>;
  readonly WARPED_FENCE_GATE: BlockType_Typed<j_org_bukkit_block_data_type.Gate>;
  readonly WARPED_FUNGUS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WARPED_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.HangingSign_2>;
  readonly WARPED_HYPHAE: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly WARPED_NYLIUM: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WARPED_PLANKS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WARPED_PRESSURE_PLATE: BlockType_Typed<j_org_bukkit_block_data.Powerable>;
  readonly WARPED_ROOTS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WARPED_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.Sign_2>;
  readonly WARPED_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly WARPED_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly WARPED_STEM: BlockType_Typed<j_org_bukkit_block_data.Orientable>;
  readonly WARPED_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly WARPED_WALL_HANGING_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallHangingSign>;
  readonly WARPED_WALL_SIGN: BlockType_Typed<j_org_bukkit_block_data_type.WallSign>;
  readonly WARPED_WART_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WATER: BlockType_Typed<j_org_bukkit_block_data.Levelled>;
  readonly WATER_CAULDRON: BlockType_Typed<j_org_bukkit_block_data.Levelled>;
  readonly WAXED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_COPPER_BLOCK: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly WAXED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly WAXED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly WAXED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly WAXED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly WAXED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly WAXED_EXPOSED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_EXPOSED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_EXPOSED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly WAXED_EXPOSED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly WAXED_EXPOSED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly WAXED_EXPOSED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly WAXED_EXPOSED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_EXPOSED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly WAXED_OXIDIZED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_OXIDIZED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_OXIDIZED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly WAXED_OXIDIZED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly WAXED_OXIDIZED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly WAXED_OXIDIZED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly WAXED_OXIDIZED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly WAXED_WEATHERED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_WEATHERED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_WEATHERED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly WAXED_WEATHERED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly WAXED_WEATHERED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly WAXED_WEATHERED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly WAXED_WEATHERED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WAXED_WEATHERED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly WEATHERED_CHISELED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WEATHERED_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WEATHERED_COPPER_BULB: BlockType_Typed<j_org_bukkit_block_data_type.CopperBulb>;
  readonly WEATHERED_COPPER_DOOR: BlockType_Typed<j_org_bukkit_block_data_type.Door>;
  readonly WEATHERED_COPPER_GRATE: BlockType_Typed<j_org_bukkit_block_data.Waterlogged>;
  readonly WEATHERED_COPPER_TRAPDOOR: BlockType_Typed<j_org_bukkit_block_data_type.TrapDoor>;
  readonly WEATHERED_CUT_COPPER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WEATHERED_CUT_COPPER_SLAB: BlockType_Typed<j_org_bukkit_block_data_type.Slab>;
  readonly WEATHERED_CUT_COPPER_STAIRS: BlockType_Typed<j_org_bukkit_block_data_type.Stairs>;
  readonly WEEPING_VINES: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly WEEPING_VINES_PLANT: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WET_SPONGE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHEAT: BlockType_Typed<j_org_bukkit_block_data.Ageable>;
  readonly WHITE_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly WHITE_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly WHITE_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly WHITE_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly WHITE_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHITE_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHITE_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHITE_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly WHITE_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly WHITE_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHITE_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly WHITE_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHITE_TULIP: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WHITE_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly WHITE_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WILDFLOWERS: BlockType_Typed<j_org_bukkit_block_data_type.FlowerBed>;
  readonly WITHER_ROSE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly WITHER_SKELETON_SKULL: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly WITHER_SKELETON_WALL_SKULL: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
  readonly YELLOW_BANNER: BlockType_Typed<j_org_bukkit_block_data.Rotatable>;
  readonly YELLOW_BED: BlockType_Typed<j_org_bukkit_block_data_type.Bed_2>;
  readonly YELLOW_CANDLE: BlockType_Typed<j_org_bukkit_block_data_type.Candle>;
  readonly YELLOW_CANDLE_CAKE: BlockType_Typed<j_org_bukkit_block_data.Lightable>;
  readonly YELLOW_CARPET: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly YELLOW_CONCRETE: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly YELLOW_CONCRETE_POWDER: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly YELLOW_GLAZED_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly YELLOW_SHULKER_BOX: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly YELLOW_STAINED_GLASS: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly YELLOW_STAINED_GLASS_PANE: BlockType_Typed<j_org_bukkit_block_data_type.GlassPane>;
  readonly YELLOW_TERRACOTTA: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly YELLOW_WALL_BANNER: BlockType_Typed<j_org_bukkit_block_data.Directional>;
  readonly YELLOW_WOOL: BlockType_Typed<j_org_bukkit_block_data.BlockData>;
  readonly ZOMBIE_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.Skull_2>;
  readonly ZOMBIE_WALL_HEAD: BlockType_Typed<j_org_bukkit_block_data_type.WallSkull>;
}

/** JVM interface org.bukkit.block.BlockType$Typed. */
export interface BlockType_TypedMembers<B /* extends j_org_bukkit_block_data.BlockData */ = unknown> {
  readonly __javaSupertypes?: readonly [BlockType];
  createBlockData(): B;
  createBlockData(arg0: string): B | null;
  createBlockData(arg0: JavaConsumer<B>): B | null;
  createBlockDataStates(): JavaCollection<B>;
  getBlockDataClass(): JavaClass<B>;
}
export type BlockType_Typed<B /* extends j_org_bukkit_block_data.BlockData */ = unknown> = BlockType_TypedMembers<B> & BlockType;
export interface BlockType_TypedStatics {
}

/** JVM interface org.bukkit.block.BrewingStand. */
export interface BrewingStandMembers {
  readonly __javaSupertypes?: readonly [Container];
  getBrewingTime(): number;
  getFuelLevel(): number;
  getInventory(): j_org_bukkit_inventory.BrewerInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getRecipeBrewTime(): number;
  getSnapshotInventory(): j_org_bukkit_inventory.BrewerInventory;
  getSnapshotInventory(): j_org_bukkit_inventory.Inventory;
  setBrewingTime(arg0: number): void;
  setFuelLevel(arg0: number): void;
  setRecipeBrewTime(arg0: number): void;
}
export type BrewingStand = BrewingStandMembers & Container;
export interface BrewingStandStatics {
}

/** JVM interface org.bukkit.block.BrushableBlock. */
export interface BrushableBlockMembers {
  readonly __javaSupertypes?: readonly [TileState, j_org_bukkit_loot.Lootable];
  getItem(): j_org_bukkit_inventory.ItemStack;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type BrushableBlock = BrushableBlockMembers & TileState & j_org_bukkit_loot.Lootable;
export interface BrushableBlockStatics {
}

/** JVM interface org.bukkit.block.CalibratedSculkSensor. */
export interface CalibratedSculkSensorMembers {
  readonly __javaSupertypes?: readonly [SculkSensor];
}
export type CalibratedSculkSensor = CalibratedSculkSensorMembers & SculkSensor;
export interface CalibratedSculkSensorStatics {
}

/** JVM interface org.bukkit.block.Campfire. */
export interface CampfireMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getCookTime(arg0: number): number;
  getCookTimeTotal(arg0: number): number;
  getItem(arg0: number): j_org_bukkit_inventory.ItemStack | null;
  getSize(): number;
  isCookingDisabled(arg0: number): boolean;
  setCookTime(arg0: number, arg1: number): void;
  setCookTimeTotal(arg0: number, arg1: number): void;
  setItem(arg0: number, arg1: j_org_bukkit_inventory.ItemStack | null): void | null;
  startCooking(): void;
  startCooking(arg0: number): boolean;
  stopCooking(): void;
  stopCooking(arg0: number): boolean;
}
export type Campfire = CampfireMembers & TileState;
export interface CampfireStatics {
}

/** JVM interface org.bukkit.block.Chest. */
export interface ChestMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, Container, Lidded];
  getBlockInventory(): j_org_bukkit_inventory.Inventory;
  isBlocked(): boolean;
}
export type Chest = ChestMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & Container & Lidded;
export interface ChestStatics {
}

/** JVM interface org.bukkit.block.ChiseledBookshelf. */
export interface ChiseledBookshelfMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block.TileStateInventoryHolder];
  getInventory(): j_org_bukkit_inventory.ChiseledBookshelfInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getLastInteractedSlot(): number;
  getSlot(arg0: j_org_bukkit_util.Vector): number;
  getSnapshotInventory(): j_org_bukkit_inventory.ChiseledBookshelfInventory;
  getSnapshotInventory(): j_org_bukkit_inventory.Inventory;
  setLastInteractedSlot(arg0: number): void;
}
export type ChiseledBookshelf = ChiseledBookshelfMembers & j_io_papermc_paper_block.TileStateInventoryHolder;
export interface ChiseledBookshelfStatics {
}

/** JVM interface org.bukkit.block.CommandBlock. */
export interface CommandBlockMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_command.CommandBlockHolder, TileState];
  getCommand(): string;
  getName(): string;
  name(): j_net_kyori_adventure_text.Component;
  name(arg0: j_net_kyori_adventure_text.Component): void | null;
  setCommand(arg0: string | null): void | null;
  setName(arg0: string | null): void | null;
}
export type CommandBlock = CommandBlockMembers & j_io_papermc_paper_command.CommandBlockHolder & TileState;
export interface CommandBlockStatics {
}

/** JVM interface org.bukkit.block.Comparator. */
export interface ComparatorMembers {
  readonly __javaSupertypes?: readonly [TileState];
}
export type Comparator = ComparatorMembers & TileState;
export interface ComparatorStatics {
}

/** JVM interface org.bukkit.block.Conduit. */
export interface ConduitMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getFrameBlockCount(): number;
  getFrameBlocks(): JavaCollection<Block>;
  getHuntingArea(): j_org_bukkit_util.BoundingBox;
  getRange(): number;
  getTarget(): j_org_bukkit_entity.LivingEntity | null;
  hasTarget(): boolean;
  isActive(): boolean;
  isHunting(): boolean;
  setTarget(arg0: j_org_bukkit_entity.LivingEntity | null): boolean | null;
}
export type Conduit = ConduitMembers & TileState;
export interface ConduitStatics {
}

/** JVM interface org.bukkit.block.Container. */
export interface ContainerMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block.LockableTileState, j_io_papermc_paper_block.TileStateInventoryHolder];
}
export type Container = ContainerMembers & j_io_papermc_paper_block.LockableTileState & j_io_papermc_paper_block.TileStateInventoryHolder;
export interface ContainerStatics {
}

/** JVM interface org.bukkit.block.Crafter. */
export interface CrafterMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, Container];
  getCraftingTicks(): number;
  isSlotDisabled(arg0: number): boolean;
  isTriggered(): boolean;
  setCraftingTicks(arg0: number): void;
  setSlotDisabled(arg0: number, arg1: boolean): void;
  setTriggered(arg0: boolean): void;
}
export type Crafter = CrafterMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & Container;
export interface CrafterStatics {
}

/** JVM interface org.bukkit.block.CreakingHeart. */
export interface CreakingHeartMembers {
  readonly __javaSupertypes?: readonly [TileState];
}
export type CreakingHeart = CreakingHeartMembers & TileState;
export interface CreakingHeartStatics {
}

/** JVM interface org.bukkit.block.CreatureSpawner. */
export interface CreatureSpawnerMembers {
  readonly __javaSupertypes?: readonly [TileState, j_org_bukkit_spawner.Spawner];
  getCreatureTypeName(): string | null;
  setCreatureTypeByName(arg0: string | null): void | null;
}
export type CreatureSpawner = CreatureSpawnerMembers & TileState & j_org_bukkit_spawner.Spawner;
export interface CreatureSpawnerStatics {
}

/** JVM interface org.bukkit.block.DaylightDetector. */
export interface DaylightDetectorMembers {
  readonly __javaSupertypes?: readonly [TileState];
}
export type DaylightDetector = DaylightDetectorMembers & TileState;
export interface DaylightDetectorStatics {
}

/** JVM interface org.bukkit.block.DecoratedPot. */
export interface DecoratedPotMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block.TileStateInventoryHolder, j_org_bukkit_loot.Lootable];
  getInventory(): j_org_bukkit_inventory.DecoratedPotInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getShards(): JavaList<j_org_bukkit.Material>;
  getSherd(arg0: DecoratedPot_Side): j_org_bukkit.Material;
  getSherds(): JavaMap<DecoratedPot_Side, j_org_bukkit.Material>;
  getSnapshotInventory(): j_org_bukkit_inventory.DecoratedPotInventory;
  getSnapshotInventory(): j_org_bukkit_inventory.Inventory;
  setSherd(arg0: DecoratedPot_Side, arg1: j_org_bukkit.Material | null): void | null;
}
export type DecoratedPot = DecoratedPotMembers & j_io_papermc_paper_block.TileStateInventoryHolder & j_org_bukkit_loot.Lootable;
export interface DecoratedPotStatics {
}

/** Live JVM enum org.bukkit.block.DecoratedPot$Side; constants are host handles, not strings. */
export type DecoratedPot_Side = JavaEnum<"org.bukkit.block.DecoratedPot$Side", "BACK" | "FRONT" | "LEFT" | "RIGHT"> & DecoratedPot_SideMembers;
export interface DecoratedPot_SideMembers {
}
export interface DecoratedPot_SideStatics {
  readonly BACK: DecoratedPot_Side;
  readonly FRONT: DecoratedPot_Side;
  readonly LEFT: DecoratedPot_Side;
  readonly RIGHT: DecoratedPot_Side;
  valueOf(arg0: string): DecoratedPot_Side;
  values(): Array<DecoratedPot_Side>;
}

/** JVM interface org.bukkit.block.Dispenser. */
export interface DispenserMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, j_org_bukkit.Nameable, Container];
  dispense(): boolean;
  getBlockProjectileSource(): j_org_bukkit_projectiles.BlockProjectileSource | null;
}
export type Dispenser = DispenserMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & j_org_bukkit.Nameable & Container;
export interface DispenserStatics {
}

/** JVM class org.bukkit.block.DoubleChest. */
export interface DoubleChestMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory.InventoryHolder];
  getInventory(): j_org_bukkit_inventory.Inventory;
  getLeftSide(): j_org_bukkit_inventory.InventoryHolder | null;
  getLeftSide(arg0: boolean): j_org_bukkit_inventory.InventoryHolder | null;
  getLocation(): j_org_bukkit.Location;
  getRightSide(): j_org_bukkit_inventory.InventoryHolder | null;
  getRightSide(arg0: boolean): j_org_bukkit_inventory.InventoryHolder | null;
  getWorld(): j_org_bukkit.World | null;
  getX(): number;
  getY(): number;
  getZ(): number;
}
export type DoubleChest = DoubleChestMembers & j_org_bukkit_inventory.InventoryHolder;
export interface DoubleChestStatics {
  new(arg0: j_org_bukkit_inventory.DoubleChestInventory): DoubleChest;
}

/** JVM interface org.bukkit.block.Dropper. */
export interface DropperMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, Container];
  drop(): void;
}
export type Dropper = DropperMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & Container;
export interface DropperStatics {
}

/** JVM interface org.bukkit.block.EnchantingTable. */
export interface EnchantingTableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Nameable, TileState];
}
export type EnchantingTable = EnchantingTableMembers & j_org_bukkit.Nameable & TileState;
export interface EnchantingTableStatics {
}

/** JVM interface org.bukkit.block.EnderChest. */
export interface EnderChestMembers {
  readonly __javaSupertypes?: readonly [Lidded, TileState];
  isBlocked(): boolean;
}
export type EnderChest = EnderChestMembers & Lidded & TileState;
export interface EnderChestStatics {
}

/** JVM interface org.bukkit.block.EndGateway. */
export interface EndGatewayMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getAge(): bigint;
  getExitLocation(): j_org_bukkit.Location | null;
  isExactTeleport(): boolean;
  setAge(arg0: bigint): void;
  setExactTeleport(arg0: boolean): void;
  setExitLocation(arg0: j_org_bukkit.Location | null): void | null;
}
export type EndGateway = EndGatewayMembers & TileState;
export interface EndGatewayStatics {
}

/** JVM interface org.bukkit.block.EntityBlockStorage. */
export interface EntityBlockStorageMembers<T /* extends j_org_bukkit_entity.Entity */ = unknown> {
  readonly __javaSupertypes?: readonly [TileState];
  addEntity(arg0: T): void;
  clearEntities(): void;
  getEntityCount(): number;
  getMaxEntities(): number;
  isFull(): boolean;
  releaseEntities(): JavaList<T>;
  setMaxEntities(arg0: number): void;
}
export type EntityBlockStorage<T /* extends j_org_bukkit_entity.Entity */ = unknown> = EntityBlockStorageMembers<T> & TileState;
export interface EntityBlockStorageStatics {
}

/** JVM interface org.bukkit.block.Furnace. */
export interface FurnaceMembers {
  readonly __javaSupertypes?: readonly [Container];
  getBurnTime(): number;
  getCookSpeedMultiplier(): number;
  getCookTime(): number;
  getCookTimeTotal(): number;
  getInventory(): j_org_bukkit_inventory.FurnaceInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getRecipeUsedCount(arg0: j_org_bukkit.NamespacedKey): number;
  getRecipesUsed(): JavaMap<j_org_bukkit_inventory.CookingRecipe<object>, number>;
  getSnapshotInventory(): j_org_bukkit_inventory.FurnaceInventory;
  getSnapshotInventory(): j_org_bukkit_inventory.Inventory;
  hasRecipeUsedCount(arg0: j_org_bukkit.NamespacedKey): boolean;
  setBurnTime(arg0: number): void;
  setCookSpeedMultiplier(arg0: number): void;
  setCookTime(arg0: number): void;
  setCookTimeTotal(arg0: number): void;
  setRecipeUsedCount(arg0: j_org_bukkit_inventory.CookingRecipe<object>, arg1: number): void;
  setRecipesUsed(arg0: JavaMap<j_org_bukkit_inventory.CookingRecipe<object>, number>): void;
}
export type Furnace = FurnaceMembers & Container;
export interface FurnaceStatics {
}

/** JVM interface org.bukkit.block.HangingSign. */
export interface HangingSignMembers {
  readonly __javaSupertypes?: readonly [Sign];
}
export type HangingSign = HangingSignMembers & Sign;
export interface HangingSignStatics {
}

/** JVM interface org.bukkit.block.Hopper. */
export interface HopperMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, Container];
  getTransferCooldown(): number;
  setTransferCooldown(arg0: number): void;
}
export type Hopper = HopperMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & Container;
export interface HopperStatics {
}

/** JVM interface org.bukkit.block.Jigsaw. */
export interface JigsawMembers {
  readonly __javaSupertypes?: readonly [TileState];
}
export type Jigsaw = JigsawMembers & TileState;
export interface JigsawStatics {
}

/** JVM interface org.bukkit.block.Jukebox. */
export interface JukeboxMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block.TileStateInventoryHolder];
  eject(): boolean;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getInventory(): j_org_bukkit_inventory.JukeboxInventory;
  getPlaying(): j_org_bukkit.Material;
  getRecord(): j_org_bukkit_inventory.ItemStack;
  getSnapshotInventory(): j_org_bukkit_inventory.Inventory;
  getSnapshotInventory(): j_org_bukkit_inventory.JukeboxInventory;
  hasRecord(): boolean;
  isPlaying(): boolean;
  setPlaying(arg0: j_org_bukkit.Material | null): void | null;
  setRecord(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  startPlaying(): boolean;
  stopPlaying(): void;
}
export type Jukebox = JukeboxMembers & j_io_papermc_paper_block.TileStateInventoryHolder;
export interface JukeboxStatics {
}

/** JVM interface org.bukkit.block.Lectern. */
export interface LecternMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_block.TileStateInventoryHolder];
  getPage(): number;
  setPage(arg0: number): void;
}
export type Lectern = LecternMembers & j_io_papermc_paper_block.TileStateInventoryHolder;
export interface LecternStatics {
}

/** JVM interface org.bukkit.block.Lidded. */
export interface LiddedMembers {
  close(): void;
  isOpen(): boolean;
  open(): void;
}
export type Lidded = LiddedMembers;
export interface LiddedStatics {
}

/** JVM interface org.bukkit.block.Lockable. */
export interface LockableMembers {
  getLock(): string;
  isLocked(): boolean;
  setLock(arg0: string | null): void | null;
  setLockItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type Lockable = LockableMembers;
export interface LockableStatics {
}

/** Live JVM enum org.bukkit.block.Orientation; constants are host handles, not strings. */
export type Orientation = JavaEnum<"org.bukkit.block.Orientation", "DOWN_EAST" | "DOWN_NORTH" | "DOWN_SOUTH" | "DOWN_WEST" | "EAST_UP" | "NORTH_UP" | "SOUTH_UP" | "UP_EAST" | "UP_NORTH" | "UP_SOUTH" | "UP_WEST" | "WEST_UP"> & OrientationMembers;
export interface OrientationMembers {
}
export interface OrientationStatics {
  readonly DOWN_EAST: Orientation;
  readonly DOWN_NORTH: Orientation;
  readonly DOWN_SOUTH: Orientation;
  readonly DOWN_WEST: Orientation;
  readonly EAST_UP: Orientation;
  readonly NORTH_UP: Orientation;
  readonly SOUTH_UP: Orientation;
  readonly UP_EAST: Orientation;
  readonly UP_NORTH: Orientation;
  readonly UP_SOUTH: Orientation;
  readonly UP_WEST: Orientation;
  readonly WEST_UP: Orientation;
  valueOf(arg0: string): Orientation;
  values(): Array<Orientation>;
}

/** Live JVM enum org.bukkit.block.PistonMoveReaction; constants are host handles, not strings. */
export type PistonMoveReaction = JavaEnum<"org.bukkit.block.PistonMoveReaction", "BLOCK" | "BREAK" | "IGNORE" | "MOVE" | "PUSH_ONLY"> & PistonMoveReactionMembers;
export interface PistonMoveReactionMembers {
  getId(): number;
}
export interface PistonMoveReactionStatics {
  readonly BLOCK: PistonMoveReaction;
  readonly BREAK: PistonMoveReaction;
  readonly IGNORE: PistonMoveReaction;
  readonly MOVE: PistonMoveReaction;
  readonly PUSH_ONLY: PistonMoveReaction;
  getById(arg0: number): PistonMoveReaction | null;
  valueOf(arg0: string): PistonMoveReaction;
  values(): Array<PistonMoveReaction>;
}

/** JVM interface org.bukkit.block.SculkCatalyst. */
export interface SculkCatalystMembers {
  readonly __javaSupertypes?: readonly [TileState];
  bloom(arg0: j_io_papermc_paper_math.Position, arg1: number): void;
  bloom(arg0: Block, arg1: number): void;
}
export type SculkCatalyst = SculkCatalystMembers & TileState;
export interface SculkCatalystStatics {
}

/** JVM interface org.bukkit.block.SculkSensor. */
export interface SculkSensorMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getLastVibrationFrequency(): number;
  getListenerRange(): number;
  setLastVibrationFrequency(arg0: number): void;
  setListenerRange(arg0: number): void;
}
export type SculkSensor = SculkSensorMembers & TileState;
export interface SculkSensorStatics {
}

/** JVM interface org.bukkit.block.SculkShrieker. */
export interface SculkShriekerMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getWarningLevel(): number;
  setWarningLevel(arg0: number): void;
  tryShriek(arg0: j_org_bukkit_entity.Player | null): void | null;
}
export type SculkShrieker = SculkShriekerMembers & TileState;
export interface SculkShriekerStatics {
}

/** JVM interface org.bukkit.block.ShulkerBox. */
export interface ShulkerBoxMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableBlockInventory, Container, Lidded];
  getColor(): j_org_bukkit.DyeColor | null;
}
export type ShulkerBox = ShulkerBoxMembers & j_com_destroystokyo_paper_loottable.LootableBlockInventory & Container & Lidded;
export interface ShulkerBoxStatics {
}

/** JVM interface org.bukkit.block.Sign. */
export interface SignMembers {
  readonly __javaSupertypes?: readonly [TileState, j_org_bukkit_material.Colorable];
  getAllowedEditor(): j_org_bukkit_entity.Player | null;
  getAllowedEditorUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  getColor(): j_org_bukkit.DyeColor;
  getInteractableSideFor(arg0: number, arg1: number): j_org_bukkit_block_sign.Side;
  getInteractableSideFor(arg0: j_io_papermc_paper_math.Position): j_org_bukkit_block_sign.Side;
  getInteractableSideFor(arg0: j_org_bukkit_entity.Entity): j_org_bukkit_block_sign.Side;
  /** @throws java.lang.IndexOutOfBoundsException */
  getLine(arg0: number): string;
  getLines(): Array<string>;
  getSide(arg0: j_org_bukkit_block_sign.Side): j_org_bukkit_block_sign.SignSide;
  getTargetSide(arg0: j_org_bukkit_entity.Player): j_org_bukkit_block_sign.SignSide;
  isEditable(): boolean;
  isGlowingText(): boolean;
  isWaxed(): boolean;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number): j_net_kyori_adventure_text.Component;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number, arg1: j_net_kyori_adventure_text.Component): void;
  lines(): JavaList<j_net_kyori_adventure_text.Component>;
  setAllowedEditorUniqueId(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setColor(arg0: j_org_bukkit.DyeColor): void;
  setEditable(arg0: boolean): void;
  setGlowingText(arg0: boolean): void;
  /** @throws java.lang.IndexOutOfBoundsException */
  setLine(arg0: number, arg1: string): void;
  setWaxed(arg0: boolean): void;
}
export type Sign = SignMembers & TileState & j_org_bukkit_material.Colorable;
export interface SignStatics {
}

/** JVM interface org.bukkit.block.Skull. */
export interface SkullMembers {
  readonly __javaSupertypes?: readonly [TileState];
  customName(): j_net_kyori_adventure_text.Component | null;
  customName(arg0: j_net_kyori_adventure_text.Component | null): void | null;
  getNoteBlockSound(): j_org_bukkit.NamespacedKey | null;
  getOwner(): string | null;
  getOwnerProfile(): j_org_bukkit_profile.PlayerProfile_2 | null;
  getOwningPlayer(): j_org_bukkit.OfflinePlayer | null;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile | null;
  getRotation(): BlockFace;
  getSkullType(): j_org_bukkit.SkullType;
  hasOwner(): boolean;
  setNoteBlockSound(arg0: j_org_bukkit.NamespacedKey | null): void | null;
  setOwner(arg0: string | null): boolean | null;
  setOwnerProfile(arg0: j_org_bukkit_profile.PlayerProfile_2 | null): void | null;
  setOwningPlayer(arg0: j_org_bukkit.OfflinePlayer): void;
  setPlayerProfile(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): void;
  setRotation(arg0: BlockFace): void;
  setSkullType(arg0: j_org_bukkit.SkullType): void;
}
export type Skull = SkullMembers & TileState;
export interface SkullStatics {
}

/** JVM interface org.bukkit.block.Smoker. */
export interface SmokerMembers {
  readonly __javaSupertypes?: readonly [Furnace];
}
export type Smoker = SmokerMembers & Furnace;
export interface SmokerStatics {
}

/** JVM interface org.bukkit.block.Structure. */
export interface StructureMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getAuthor(): string;
  getIntegrity(): number;
  getMetadata(): string;
  getMirror(): j_org_bukkit_block_structure.Mirror;
  getRelativePosition(): j_org_bukkit_util.BlockVector;
  getRotation(): j_org_bukkit_block_structure.StructureRotation;
  getSeed(): bigint;
  getStructureName(): string;
  getStructureSize(): j_org_bukkit_util.BlockVector;
  getUsageMode(): j_org_bukkit_block_structure.UsageMode;
  isBoundingBoxVisible(): boolean;
  isIgnoreEntities(): boolean;
  isShowAir(): boolean;
  setAuthor(arg0: string): void;
  setAuthor(arg0: j_org_bukkit_entity.LivingEntity): void;
  setBoundingBoxVisible(arg0: boolean): void;
  setIgnoreEntities(arg0: boolean): void;
  setIntegrity(arg0: number): void;
  setMetadata(arg0: string): void;
  setMirror(arg0: j_org_bukkit_block_structure.Mirror): void;
  setRelativePosition(arg0: j_org_bukkit_util.BlockVector): void;
  setRotation(arg0: j_org_bukkit_block_structure.StructureRotation): void;
  setSeed(arg0: bigint): void;
  setShowAir(arg0: boolean): void;
  setStructureName(arg0: string): void;
  setStructureSize(arg0: j_org_bukkit_util.BlockVector): void;
  setUsageMode(arg0: j_org_bukkit_block_structure.UsageMode): void;
}
export type Structure = StructureMembers & TileState;
export interface StructureStatics {
}

/** JVM interface org.bukkit.block.SuspiciousSand. */
export interface SuspiciousSandMembers {
  readonly __javaSupertypes?: readonly [BrushableBlock];
}
export type SuspiciousSand = SuspiciousSandMembers & BrushableBlock;
export interface SuspiciousSandStatics {
}

/** JVM interface org.bukkit.block.TestBlock. */
export interface TestBlockMembers {
  readonly __javaSupertypes?: readonly [TileState];
}
export type TestBlock = TestBlockMembers & TileState;
export interface TestBlockStatics {
}

/** JVM interface org.bukkit.block.TestInstanceBlock. */
export interface TestInstanceBlockMembers {
  readonly __javaSupertypes?: readonly [TileState];
}
export type TestInstanceBlock = TestInstanceBlockMembers & TileState;
export interface TestInstanceBlockStatics {
}

/** JVM interface org.bukkit.block.TileState. */
export interface TileStateMembers {
  readonly __javaSupertypes?: readonly [BlockState, j_org_bukkit_persistence.PersistentDataHolder];
  getPersistentDataContainer(): j_io_papermc_paper_persistence.PersistentDataContainerView;
  getPersistentDataContainer(): j_org_bukkit_persistence.PersistentDataContainer;
  isSnapshot(): boolean;
}
export type TileState = TileStateMembers & BlockState & j_org_bukkit_persistence.PersistentDataHolder;
export interface TileStateStatics {
}

/** JVM interface org.bukkit.block.TrialSpawner. */
export interface TrialSpawnerMembers {
  readonly __javaSupertypes?: readonly [TileState];
  getCooldownEnd(): bigint;
  getCooldownLength(): number;
  getNextSpawnAttempt(): bigint;
  getNormalConfiguration(): j_org_bukkit_spawner.TrialSpawnerConfiguration;
  getOminousConfiguration(): j_org_bukkit_spawner.TrialSpawnerConfiguration;
  getRequiredPlayerRange(): number;
  getTrackedEntities(): JavaCollection<j_org_bukkit_entity.Entity>;
  getTrackedPlayers(): JavaCollection<j_org_bukkit_entity.Player>;
  isOminous(): boolean;
  isTrackingEntity(arg0: j_org_bukkit_entity.Entity): boolean;
  isTrackingPlayer(arg0: j_org_bukkit_entity.Player): boolean;
  setCooldownEnd(arg0: bigint): void;
  setCooldownLength(arg0: number): void;
  setNextSpawnAttempt(arg0: bigint): void;
  setOminous(arg0: boolean): void;
  setRequiredPlayerRange(arg0: number): void;
  startTrackingEntity(arg0: j_org_bukkit_entity.Entity): void;
  startTrackingPlayer(arg0: j_org_bukkit_entity.Player): void;
  stopTrackingEntity(arg0: j_org_bukkit_entity.Entity): void;
  stopTrackingPlayer(arg0: j_org_bukkit_entity.Player): void;
}
export type TrialSpawner = TrialSpawnerMembers & TileState;
export interface TrialSpawnerStatics {
}

/** JVM interface org.bukkit.block.Vault. */
export interface VaultMembers {
  readonly __javaSupertypes?: readonly [TileState];
  addRewardedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  getActivationRange(): number;
  getConnectedPlayers(): JavaSet<JavaOpaque<"java.util.UUID">>;
  getDeactivationRange(): number;
  getDisplayedItem(): j_org_bukkit_inventory.ItemStack;
  getDisplayedLootTable(): j_org_bukkit_loot.LootTable | null;
  getKeyItem(): j_org_bukkit_inventory.ItemStack;
  getLootTable(): j_org_bukkit_loot.LootTable;
  getNextStateUpdateTime(): bigint;
  getRewardedPlayers(): JavaCollection<JavaOpaque<"java.util.UUID">>;
  hasConnectedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  hasRewardedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  removeRewardedPlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  setActivationRange(arg0: number): void;
  setDeactivationRange(arg0: number): void;
  setDisplayedItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  setDisplayedLootTable(arg0: j_org_bukkit_loot.LootTable): void | null;
  setKeyItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  setLootTable(arg0: j_org_bukkit_loot.LootTable): void;
  setNextStateUpdateTime(arg0: bigint): void;
}
export type Vault = VaultMembers & TileState;
export interface VaultStatics {
}
