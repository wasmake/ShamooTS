// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';

/** JVM interface org.bukkit.block.data.type.AmethystCluster. */
export interface AmethystClusterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type AmethystCluster = AmethystClusterMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface AmethystClusterStatics {
}

/** JVM interface org.bukkit.block.data.type.Bamboo. */
export interface BambooMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Ageable, Sapling];
  getLeaves(): Bamboo_Leaves;
  setLeaves(arg0: Bamboo_Leaves): void;
}
export type Bamboo = BambooMembers & j_org_bukkit_block_data.Ageable & Sapling;
export interface BambooStatics {
}

/** Live JVM enum org.bukkit.block.data.type.Bamboo$Leaves; constants are host handles, not strings. */
export type Bamboo_Leaves = JavaEnum<"org.bukkit.block.data.type.Bamboo$Leaves", "LARGE" | "NONE" | "SMALL"> & Bamboo_LeavesMembers;
export interface Bamboo_LeavesMembers {
}
export interface Bamboo_LeavesStatics {
  readonly LARGE: Bamboo_Leaves;
  readonly NONE: Bamboo_Leaves;
  readonly SMALL: Bamboo_Leaves;
  valueOf(arg0: string): Bamboo_Leaves;
  values(): Array<Bamboo_Leaves>;
}

/** JVM interface org.bukkit.block.data.type.Barrel. */
export interface Barrel_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Openable];
}
export type Barrel_2 = Barrel_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Openable;
export interface Barrel_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Bed. */
export interface Bed_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  getPart(): Bed_Part;
  isOccupied(): boolean;
  setOccupied(arg0: boolean): void;
  setPart(arg0: Bed_Part): void;
}
export type Bed_2 = Bed_2Members & j_org_bukkit_block_data.Directional;
export interface Bed_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Bed$Part; constants are host handles, not strings. */
export type Bed_Part = JavaEnum<"org.bukkit.block.data.type.Bed$Part", "FOOT" | "HEAD"> & Bed_PartMembers;
export interface Bed_PartMembers {
}
export interface Bed_PartStatics {
  readonly FOOT: Bed_Part;
  readonly HEAD: Bed_Part;
  valueOf(arg0: string): Bed_Part;
  values(): Array<Bed_Part>;
}

/** JVM interface org.bukkit.block.data.type.Beehive. */
export interface Beehive_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  getHoneyLevel(): number;
  getMaximumHoneyLevel(): number;
  setHoneyLevel(arg0: number): void;
}
export type Beehive_2 = Beehive_2Members & j_org_bukkit_block_data.Directional;
export interface Beehive_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Bell. */
export interface Bell_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
  getAttachment(): Bell_Attachment;
  setAttachment(arg0: Bell_Attachment): void;
}
export type Bell_2 = Bell_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface Bell_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Bell$Attachment; constants are host handles, not strings. */
export type Bell_Attachment = JavaEnum<"org.bukkit.block.data.type.Bell$Attachment", "CEILING" | "DOUBLE_WALL" | "FLOOR" | "SINGLE_WALL"> & Bell_AttachmentMembers;
export interface Bell_AttachmentMembers {
}
export interface Bell_AttachmentStatics {
  readonly CEILING: Bell_Attachment;
  readonly DOUBLE_WALL: Bell_Attachment;
  readonly FLOOR: Bell_Attachment;
  readonly SINGLE_WALL: Bell_Attachment;
  valueOf(arg0: string): Bell_Attachment;
  values(): Array<Bell_Attachment>;
}

/** JVM interface org.bukkit.block.data.type.BigDripleaf. */
export interface BigDripleafMembers {
  readonly __javaSupertypes?: readonly [Dripleaf];
  getTilt(): BigDripleaf_Tilt;
  setTilt(arg0: BigDripleaf_Tilt): void;
}
export type BigDripleaf = BigDripleafMembers & Dripleaf;
export interface BigDripleafStatics {
}

/** Live JVM enum org.bukkit.block.data.type.BigDripleaf$Tilt; constants are host handles, not strings. */
export type BigDripleaf_Tilt = JavaEnum<"org.bukkit.block.data.type.BigDripleaf$Tilt", "FULL" | "NONE" | "PARTIAL" | "UNSTABLE"> & BigDripleaf_TiltMembers;
export interface BigDripleaf_TiltMembers {
}
export interface BigDripleaf_TiltStatics {
  readonly FULL: BigDripleaf_Tilt;
  readonly NONE: BigDripleaf_Tilt;
  readonly PARTIAL: BigDripleaf_Tilt;
  readonly UNSTABLE: BigDripleaf_Tilt;
  valueOf(arg0: string): BigDripleaf_Tilt;
  values(): Array<BigDripleaf_Tilt>;
}

/** JVM interface org.bukkit.block.data.type.BrewingStand. */
export interface BrewingStand_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getBottles(): JavaSet<number>;
  getMaximumBottles(): number;
  hasBottle(arg0: number): boolean;
  setBottle(arg0: number, arg1: boolean): void;
}
export type BrewingStand_2 = BrewingStand_2Members & j_org_bukkit_block_data.BlockData;
export interface BrewingStand_2Statics {
}

/** JVM interface org.bukkit.block.data.type.BubbleColumn. */
export interface BubbleColumnMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  isDrag(): boolean;
  setDrag(arg0: boolean): void;
}
export type BubbleColumn = BubbleColumnMembers & j_org_bukkit_block_data.BlockData;
export interface BubbleColumnStatics {
}

/** JVM interface org.bukkit.block.data.type.Cake. */
export interface CakeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getBites(): number;
  getMaximumBites(): number;
  setBites(arg0: number): void;
}
export type Cake = CakeMembers & j_org_bukkit_block_data.BlockData;
export interface CakeStatics {
}

/** JVM interface org.bukkit.block.data.type.CalibratedSculkSensor. */
export interface CalibratedSculkSensor_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, SculkSensor_2];
}
export type CalibratedSculkSensor_2 = CalibratedSculkSensor_2Members & j_org_bukkit_block_data.Directional & SculkSensor_2;
export interface CalibratedSculkSensor_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Campfire. */
export interface Campfire_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Lightable, j_org_bukkit_block_data.Waterlogged];
  isSignalFire(): boolean;
  setSignalFire(arg0: boolean): void;
}
export type Campfire_2 = Campfire_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Lightable & j_org_bukkit_block_data.Waterlogged;
export interface Campfire_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Candle. */
export interface CandleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Lightable, j_org_bukkit_block_data.Waterlogged];
  getCandles(): number;
  getMaximumCandles(): number;
  getMinimumCandles(): number;
  setCandles(arg0: number): void;
}
export type Candle = CandleMembers & j_org_bukkit_block_data.Lightable & j_org_bukkit_block_data.Waterlogged;
export interface CandleStatics {
}

/** JVM interface org.bukkit.block.data.type.CaveVines. */
export interface CaveVinesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Ageable, CaveVinesPlant];
}
export type CaveVines = CaveVinesMembers & j_org_bukkit_block_data.Ageable & CaveVinesPlant;
export interface CaveVinesStatics {
}

/** JVM interface org.bukkit.block.data.type.CaveVinesPlant. */
export interface CaveVinesPlantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  hasBerries(): boolean;
  isBerries(): boolean;
  setBerries(arg0: boolean): void;
}
export type CaveVinesPlant = CaveVinesPlantMembers & j_org_bukkit_block_data.BlockData;
export interface CaveVinesPlantStatics {
}

/** JVM interface org.bukkit.block.data.type.Chain. */
export interface ChainMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Orientable, j_org_bukkit_block_data.Waterlogged];
}
export type Chain = ChainMembers & j_org_bukkit_block_data.Orientable & j_org_bukkit_block_data.Waterlogged;
export interface ChainStatics {
}

/** JVM interface org.bukkit.block.data.type.Chest. */
export interface Chest_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
  getType(): Chest_Type;
  setType(arg0: Chest_Type): void;
}
export type Chest_2 = Chest_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface Chest_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Chest$Type; constants are host handles, not strings. */
export type Chest_Type = JavaEnum<"org.bukkit.block.data.type.Chest$Type", "LEFT" | "RIGHT" | "SINGLE"> & Chest_TypeMembers;
export interface Chest_TypeMembers {
}
export interface Chest_TypeStatics {
  readonly LEFT: Chest_Type;
  readonly RIGHT: Chest_Type;
  readonly SINGLE: Chest_Type;
  valueOf(arg0: string): Chest_Type;
  values(): Array<Chest_Type>;
}

/** JVM interface org.bukkit.block.data.type.ChiseledBookshelf. */
export interface ChiseledBookshelf_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  getMaximumOccupiedSlots(): number;
  getOccupiedSlots(): JavaSet<number>;
  isSlotOccupied(arg0: number): boolean;
  setSlotOccupied(arg0: number, arg1: boolean): void;
}
export type ChiseledBookshelf_2 = ChiseledBookshelf_2Members & j_org_bukkit_block_data.Directional;
export interface ChiseledBookshelf_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Cocoa. */
export interface CocoaMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Ageable, j_org_bukkit_block_data.Directional];
}
export type Cocoa = CocoaMembers & j_org_bukkit_block_data.Ageable & j_org_bukkit_block_data.Directional;
export interface CocoaStatics {
}

/** JVM interface org.bukkit.block.data.type.CommandBlock. */
export interface CommandBlock_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  isConditional(): boolean;
  setConditional(arg0: boolean): void;
}
export type CommandBlock_2 = CommandBlock_2Members & j_org_bukkit_block_data.Directional;
export interface CommandBlock_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Comparator. */
export interface Comparator_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
  getMode(): Comparator_Mode;
  setMode(arg0: Comparator_Mode): void;
}
export type Comparator_2 = Comparator_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface Comparator_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Comparator$Mode; constants are host handles, not strings. */
export type Comparator_Mode = JavaEnum<"org.bukkit.block.data.type.Comparator$Mode", "COMPARE" | "SUBTRACT"> & Comparator_ModeMembers;
export interface Comparator_ModeMembers {
}
export interface Comparator_ModeStatics {
  readonly COMPARE: Comparator_Mode;
  readonly SUBTRACT: Comparator_Mode;
  valueOf(arg0: string): Comparator_Mode;
  values(): Array<Comparator_Mode>;
}

/** JVM interface org.bukkit.block.data.type.CopperBulb. */
export interface CopperBulbMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Lightable, j_org_bukkit_block_data.Powerable];
}
export type CopperBulb = CopperBulbMembers & j_org_bukkit_block_data.Lightable & j_org_bukkit_block_data.Powerable;
export interface CopperBulbStatics {
}

/** JVM interface org.bukkit.block.data.type.CoralWallFan. */
export interface CoralWallFanMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type CoralWallFan = CoralWallFanMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface CoralWallFanStatics {
}

/** JVM interface org.bukkit.block.data.type.Crafter. */
export interface Crafter_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getOrientation(): j_org_bukkit_block.Orientation;
  isCrafting(): boolean;
  isTriggered(): boolean;
  setCrafting(arg0: boolean): void;
  setOrientation(arg0: j_org_bukkit_block.Orientation): void;
  setTriggered(arg0: boolean): void;
}
export type Crafter_2 = Crafter_2Members & j_org_bukkit_block_data.BlockData;
export interface Crafter_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Crafter$Orientation; constants are host handles, not strings. */
export type Crafter_Orientation = JavaEnum<"org.bukkit.block.data.type.Crafter$Orientation", "DOWN_EAST" | "DOWN_NORTH" | "DOWN_SOUTH" | "DOWN_WEST" | "EAST_UP" | "NORTH_UP" | "SOUTH_UP" | "UP_EAST" | "UP_NORTH" | "UP_SOUTH" | "UP_WEST" | "WEST_UP"> & Crafter_OrientationMembers;
export interface Crafter_OrientationMembers {
}
export interface Crafter_OrientationStatics {
  readonly DOWN_EAST: Crafter_Orientation;
  readonly DOWN_NORTH: Crafter_Orientation;
  readonly DOWN_SOUTH: Crafter_Orientation;
  readonly DOWN_WEST: Crafter_Orientation;
  readonly EAST_UP: Crafter_Orientation;
  readonly NORTH_UP: Crafter_Orientation;
  readonly SOUTH_UP: Crafter_Orientation;
  readonly UP_EAST: Crafter_Orientation;
  readonly UP_NORTH: Crafter_Orientation;
  readonly UP_SOUTH: Crafter_Orientation;
  readonly UP_WEST: Crafter_Orientation;
  readonly WEST_UP: Crafter_Orientation;
  valueOf(arg0: string): Crafter_Orientation;
  values(): Array<Crafter_Orientation>;
}

/** JVM interface org.bukkit.block.data.type.CreakingHeart. */
export interface CreakingHeart_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Orientable];
  getCreakingHeartState(): CreakingHeart_State;
  isActive(): boolean;
  isNatural(): boolean;
  setActive(arg0: boolean): void;
  setCreakingHeartState(arg0: CreakingHeart_State): void;
  setNatural(arg0: boolean): void;
}
export type CreakingHeart_2 = CreakingHeart_2Members & j_org_bukkit_block_data.Orientable;
export interface CreakingHeart_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.CreakingHeart$State; constants are host handles, not strings. */
export type CreakingHeart_State = JavaEnum<"org.bukkit.block.data.type.CreakingHeart$State", "AWAKE" | "DORMANT" | "UPROOTED"> & CreakingHeart_StateMembers;
export interface CreakingHeart_StateMembers {
}
export interface CreakingHeart_StateStatics {
  readonly AWAKE: CreakingHeart_State;
  readonly DORMANT: CreakingHeart_State;
  readonly UPROOTED: CreakingHeart_State;
  valueOf(arg0: string): CreakingHeart_State;
  values(): Array<CreakingHeart_State>;
}

/** JVM interface org.bukkit.block.data.type.DaylightDetector. */
export interface DaylightDetector_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.AnaloguePowerable];
  isInverted(): boolean;
  setInverted(arg0: boolean): void;
}
export type DaylightDetector_2 = DaylightDetector_2Members & j_org_bukkit_block_data.AnaloguePowerable;
export interface DaylightDetector_2Statics {
}

/** JVM interface org.bukkit.block.data.type.DecoratedPot. */
export interface DecoratedPot_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
  isCracked(): boolean;
  setCracked(arg0: boolean): void;
}
export type DecoratedPot_2 = DecoratedPot_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface DecoratedPot_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Dispenser. */
export interface Dispenser_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  isTriggered(): boolean;
  setTriggered(arg0: boolean): void;
}
export type Dispenser_2 = Dispenser_2Members & j_org_bukkit_block_data.Directional;
export interface Dispenser_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Door. */
export interface DoorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Bisected, j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Openable, j_org_bukkit_block_data.Powerable];
  getHinge(): Door_Hinge;
  setHinge(arg0: Door_Hinge): void;
}
export type Door = DoorMembers & j_org_bukkit_block_data.Bisected & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Openable & j_org_bukkit_block_data.Powerable;
export interface DoorStatics {
}

/** Live JVM enum org.bukkit.block.data.type.Door$Hinge; constants are host handles, not strings. */
export type Door_Hinge = JavaEnum<"org.bukkit.block.data.type.Door$Hinge", "LEFT" | "RIGHT"> & Door_HingeMembers;
export interface Door_HingeMembers {
}
export interface Door_HingeStatics {
  readonly LEFT: Door_Hinge;
  readonly RIGHT: Door_Hinge;
  valueOf(arg0: string): Door_Hinge;
  values(): Array<Door_Hinge>;
}

/** JVM interface org.bukkit.block.data.type.DriedGhast. */
export interface DriedGhastMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
  getHydration(): number;
  getMaximumHydration(): number;
  setHydration(arg0: number): void;
}
export type DriedGhast = DriedGhastMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface DriedGhastStatics {
}

/** JVM interface org.bukkit.block.data.type.Dripleaf. */
export interface DripleafMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type Dripleaf = DripleafMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface DripleafStatics {
}

/** JVM interface org.bukkit.block.data.type.EnderChest. */
export interface EnderChest_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type EnderChest_2 = EnderChest_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface EnderChest_2Statics {
}

/** JVM interface org.bukkit.block.data.type.EndPortalFrame. */
export interface EndPortalFrameMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  hasEye(): boolean;
  setEye(arg0: boolean): void;
}
export type EndPortalFrame = EndPortalFrameMembers & j_org_bukkit_block_data.Directional;
export interface EndPortalFrameStatics {
}

/** JVM interface org.bukkit.block.data.type.Farmland. */
export interface FarmlandMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getMaximumMoisture(): number;
  getMoisture(): number;
  setMoisture(arg0: number): void;
}
export type Farmland = FarmlandMembers & j_org_bukkit_block_data.BlockData;
export interface FarmlandStatics {
}

/** JVM interface org.bukkit.block.data.type.Fence. */
export interface FenceMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.MultipleFacing, j_org_bukkit_block_data.Waterlogged];
}
export type Fence = FenceMembers & j_org_bukkit_block_data.MultipleFacing & j_org_bukkit_block_data.Waterlogged;
export interface FenceStatics {
}

/** JVM interface org.bukkit.block.data.type.Fire. */
export interface FireMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Ageable, j_org_bukkit_block_data.MultipleFacing];
}
export type Fire = FireMembers & j_org_bukkit_block_data.Ageable & j_org_bukkit_block_data.MultipleFacing;
export interface FireStatics {
}

/** JVM interface org.bukkit.block.data.type.FlowerBed. */
export interface FlowerBedMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  getFlowerAmount(): number;
  getMaximumFlowerAmount(): number;
  getMinimumFlowerAmount(): number;
  setFlowerAmount(arg0: number): void;
}
export type FlowerBed = FlowerBedMembers & j_org_bukkit_block_data.Directional;
export interface FlowerBedStatics {
}

/** JVM interface org.bukkit.block.data.type.Furnace. */
export interface Furnace_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Lightable];
}
export type Furnace_2 = Furnace_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Lightable;
export interface Furnace_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Gate. */
export interface GateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Openable, j_org_bukkit_block_data.Powerable];
  isInWall(): boolean;
  setInWall(arg0: boolean): void;
}
export type Gate = GateMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Openable & j_org_bukkit_block_data.Powerable;
export interface GateStatics {
}

/** JVM interface org.bukkit.block.data.type.GlassPane. */
export interface GlassPaneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.MultipleFacing, j_org_bukkit_block_data.Waterlogged];
}
export type GlassPane = GlassPaneMembers & j_org_bukkit_block_data.MultipleFacing & j_org_bukkit_block_data.Waterlogged;
export interface GlassPaneStatics {
}

/** JVM interface org.bukkit.block.data.type.GlowLichen. */
export interface GlowLichenMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.MultipleFacing, j_org_bukkit_block_data.Waterlogged];
}
export type GlowLichen = GlowLichenMembers & j_org_bukkit_block_data.MultipleFacing & j_org_bukkit_block_data.Waterlogged;
export interface GlowLichenStatics {
}

/** JVM interface org.bukkit.block.data.type.Grindstone. */
export interface GrindstoneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.FaceAttachable];
}
export type Grindstone = GrindstoneMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.FaceAttachable;
export interface GrindstoneStatics {
}

/** JVM interface org.bukkit.block.data.type.HangingMoss. */
export interface HangingMossMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  isTip(): boolean;
  setTip(arg0: boolean): void;
}
export type HangingMoss = HangingMossMembers & j_org_bukkit_block_data.BlockData;
export interface HangingMossStatics {
}

/** JVM interface org.bukkit.block.data.type.HangingSign. */
export interface HangingSign_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Attachable, j_org_bukkit_block_data.Rotatable, j_org_bukkit_block_data.Waterlogged];
}
export type HangingSign_2 = HangingSign_2Members & j_org_bukkit_block_data.Attachable & j_org_bukkit_block_data.Rotatable & j_org_bukkit_block_data.Waterlogged;
export interface HangingSign_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Hopper. */
export interface Hopper_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  isEnabled(): boolean;
  setEnabled(arg0: boolean): void;
}
export type Hopper_2 = Hopper_2Members & j_org_bukkit_block_data.Directional;
export interface Hopper_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Jigsaw. */
export interface Jigsaw_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getOrientation(): j_org_bukkit_block.Orientation;
  setOrientation(arg0: j_org_bukkit_block.Orientation): void;
}
export type Jigsaw_2 = Jigsaw_2Members & j_org_bukkit_block_data.BlockData;
export interface Jigsaw_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Jigsaw$Orientation; constants are host handles, not strings. */
export type Jigsaw_Orientation = JavaEnum<"org.bukkit.block.data.type.Jigsaw$Orientation", "DOWN_EAST" | "DOWN_NORTH" | "DOWN_SOUTH" | "DOWN_WEST" | "EAST_UP" | "NORTH_UP" | "SOUTH_UP" | "UP_EAST" | "UP_NORTH" | "UP_SOUTH" | "UP_WEST" | "WEST_UP"> & Jigsaw_OrientationMembers;
export interface Jigsaw_OrientationMembers {
}
export interface Jigsaw_OrientationStatics {
  readonly DOWN_EAST: Jigsaw_Orientation;
  readonly DOWN_NORTH: Jigsaw_Orientation;
  readonly DOWN_SOUTH: Jigsaw_Orientation;
  readonly DOWN_WEST: Jigsaw_Orientation;
  readonly EAST_UP: Jigsaw_Orientation;
  readonly NORTH_UP: Jigsaw_Orientation;
  readonly SOUTH_UP: Jigsaw_Orientation;
  readonly UP_EAST: Jigsaw_Orientation;
  readonly UP_NORTH: Jigsaw_Orientation;
  readonly UP_SOUTH: Jigsaw_Orientation;
  readonly UP_WEST: Jigsaw_Orientation;
  readonly WEST_UP: Jigsaw_Orientation;
  valueOf(arg0: string): Jigsaw_Orientation;
  values(): Array<Jigsaw_Orientation>;
}

/** JVM interface org.bukkit.block.data.type.Jukebox. */
export interface Jukebox_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  hasRecord(): boolean;
  setHasRecord(arg0: boolean): void;
}
export type Jukebox_2 = Jukebox_2Members & j_org_bukkit_block_data.BlockData;
export interface Jukebox_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Ladder. */
export interface LadderMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type Ladder = LadderMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface LadderStatics {
}

/** JVM interface org.bukkit.block.data.type.Lantern. */
export interface LanternMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Hangable, j_org_bukkit_block_data.Waterlogged];
}
export type Lantern = LanternMembers & j_org_bukkit_block_data.Hangable & j_org_bukkit_block_data.Waterlogged;
export interface LanternStatics {
}

/** JVM interface org.bukkit.block.data.type.LeafLitter. */
export interface LeafLitterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Segmentable];
}
export type LeafLitter = LeafLitterMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Segmentable;
export interface LeafLitterStatics {
}

/** JVM interface org.bukkit.block.data.type.Leaves. */
export interface LeavesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  getDistance(): number;
  getMaximumDistance(): number;
  getMinimumDistance(): number;
  isPersistent(): boolean;
  setDistance(arg0: number): void;
  setPersistent(arg0: boolean): void;
}
export type Leaves = LeavesMembers & j_org_bukkit_block_data.Waterlogged;
export interface LeavesStatics {
}

/** JVM interface org.bukkit.block.data.type.Lectern. */
export interface Lectern_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
  hasBook(): boolean;
  setHasBook(arg0: boolean): void;
}
export type Lectern_2 = Lectern_2Members & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface Lectern_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Light. */
export interface LightMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Levelled, j_org_bukkit_block_data.Waterlogged];
}
export type Light = LightMembers & j_org_bukkit_block_data.Levelled & j_org_bukkit_block_data.Waterlogged;
export interface LightStatics {
}

/** JVM interface org.bukkit.block.data.type.LightningRod. */
export interface LightningRodMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable, j_org_bukkit_block_data.Waterlogged];
}
export type LightningRod = LightningRodMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable & j_org_bukkit_block_data.Waterlogged;
export interface LightningRodStatics {
}

/** JVM interface org.bukkit.block.data.type.MangrovePropagule. */
export interface MangrovePropaguleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Ageable, j_org_bukkit_block_data.Hangable, j_org_bukkit_block_data.Waterlogged, Sapling];
}
export type MangrovePropagule = MangrovePropaguleMembers & j_org_bukkit_block_data.Ageable & j_org_bukkit_block_data.Hangable & j_org_bukkit_block_data.Waterlogged & Sapling;
export interface MangrovePropaguleStatics {
}

/** JVM interface org.bukkit.block.data.type.MossyCarpet. */
export interface MossyCarpetMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getHeight(arg0: j_org_bukkit_block.BlockFace): Wall_Height;
  isBottom(): boolean;
  setBottom(arg0: boolean): void;
  setHeight(arg0: j_org_bukkit_block.BlockFace, arg1: Wall_Height): void;
}
export type MossyCarpet = MossyCarpetMembers & j_org_bukkit_block_data.BlockData;
export interface MossyCarpetStatics {
}

/** Live JVM enum org.bukkit.block.data.type.MossyCarpet$Height; constants are host handles, not strings. */
export type MossyCarpet_Height = JavaEnum<"org.bukkit.block.data.type.MossyCarpet$Height", "LOW" | "NONE" | "TALL"> & MossyCarpet_HeightMembers;
export interface MossyCarpet_HeightMembers {
}
export interface MossyCarpet_HeightStatics {
  readonly LOW: MossyCarpet_Height;
  readonly NONE: MossyCarpet_Height;
  readonly TALL: MossyCarpet_Height;
  valueOf(arg0: string): MossyCarpet_Height;
  values(): Array<MossyCarpet_Height>;
}

/** JVM interface org.bukkit.block.data.type.NoteBlock. */
export interface NoteBlockMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Powerable];
  getInstrument(): j_org_bukkit.Instrument;
  getNote(): j_org_bukkit.Note;
  setInstrument(arg0: j_org_bukkit.Instrument): void;
  setNote(arg0: j_org_bukkit.Note): void;
}
export type NoteBlock = NoteBlockMembers & j_org_bukkit_block_data.Powerable;
export interface NoteBlockStatics {
}

/** JVM interface org.bukkit.block.data.type.Observer. */
export interface ObserverMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
}
export type Observer = ObserverMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface ObserverStatics {
}

/** JVM interface org.bukkit.block.data.type.PinkPetals. */
export interface PinkPetalsMembers {
  readonly __javaSupertypes?: readonly [FlowerBed];
}
export type PinkPetals = PinkPetalsMembers & FlowerBed;
export interface PinkPetalsStatics {
}

/** JVM interface org.bukkit.block.data.type.Piston. */
export interface PistonMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  isExtended(): boolean;
  setExtended(arg0: boolean): void;
}
export type Piston = PistonMembers & j_org_bukkit_block_data.Directional;
export interface PistonStatics {
}

/** JVM interface org.bukkit.block.data.type.PistonHead. */
export interface PistonHeadMembers {
  readonly __javaSupertypes?: readonly [TechnicalPiston];
  isShort(): boolean;
  setShort(arg0: boolean): void;
}
export type PistonHead = PistonHeadMembers & TechnicalPiston;
export interface PistonHeadStatics {
}

/** JVM interface org.bukkit.block.data.type.PitcherCrop. */
export interface PitcherCropMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Ageable, j_org_bukkit_block_data.Bisected];
}
export type PitcherCrop = PitcherCropMembers & j_org_bukkit_block_data.Ageable & j_org_bukkit_block_data.Bisected;
export interface PitcherCropStatics {
}

/** JVM interface org.bukkit.block.data.type.PointedDripstone. */
export interface PointedDripstoneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  getThickness(): PointedDripstone_Thickness;
  getVerticalDirection(): j_org_bukkit_block.BlockFace;
  getVerticalDirections(): JavaSet<j_org_bukkit_block.BlockFace>;
  setThickness(arg0: PointedDripstone_Thickness): void;
  setVerticalDirection(arg0: j_org_bukkit_block.BlockFace): void;
}
export type PointedDripstone = PointedDripstoneMembers & j_org_bukkit_block_data.Waterlogged;
export interface PointedDripstoneStatics {
}

/** Live JVM enum org.bukkit.block.data.type.PointedDripstone$Thickness; constants are host handles, not strings. */
export type PointedDripstone_Thickness = JavaEnum<"org.bukkit.block.data.type.PointedDripstone$Thickness", "BASE" | "FRUSTUM" | "MIDDLE" | "TIP" | "TIP_MERGE"> & PointedDripstone_ThicknessMembers;
export interface PointedDripstone_ThicknessMembers {
}
export interface PointedDripstone_ThicknessStatics {
  readonly BASE: PointedDripstone_Thickness;
  readonly FRUSTUM: PointedDripstone_Thickness;
  readonly MIDDLE: PointedDripstone_Thickness;
  readonly TIP: PointedDripstone_Thickness;
  readonly TIP_MERGE: PointedDripstone_Thickness;
  valueOf(arg0: string): PointedDripstone_Thickness;
  values(): Array<PointedDripstone_Thickness>;
}

/** JVM interface org.bukkit.block.data.type.RedstoneRail. */
export interface RedstoneRailMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Powerable, j_org_bukkit_block_data.Rail];
}
export type RedstoneRail = RedstoneRailMembers & j_org_bukkit_block_data.Powerable & j_org_bukkit_block_data.Rail;
export interface RedstoneRailStatics {
}

/** JVM interface org.bukkit.block.data.type.RedstoneWallTorch. */
export interface RedstoneWallTorchMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Lightable];
}
export type RedstoneWallTorch = RedstoneWallTorchMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Lightable;
export interface RedstoneWallTorchStatics {
}

/** JVM interface org.bukkit.block.data.type.RedstoneWire. */
export interface RedstoneWireMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.AnaloguePowerable];
  getAllowedFaces(): JavaSet<j_org_bukkit_block.BlockFace>;
  getFace(arg0: j_org_bukkit_block.BlockFace): RedstoneWire_Connection;
  setFace(arg0: j_org_bukkit_block.BlockFace, arg1: RedstoneWire_Connection): void;
}
export type RedstoneWire = RedstoneWireMembers & j_org_bukkit_block_data.AnaloguePowerable;
export interface RedstoneWireStatics {
}

/** Live JVM enum org.bukkit.block.data.type.RedstoneWire$Connection; constants are host handles, not strings. */
export type RedstoneWire_Connection = JavaEnum<"org.bukkit.block.data.type.RedstoneWire$Connection", "NONE" | "SIDE" | "UP"> & RedstoneWire_ConnectionMembers;
export interface RedstoneWire_ConnectionMembers {
}
export interface RedstoneWire_ConnectionStatics {
  readonly NONE: RedstoneWire_Connection;
  readonly SIDE: RedstoneWire_Connection;
  readonly UP: RedstoneWire_Connection;
  valueOf(arg0: string): RedstoneWire_Connection;
  values(): Array<RedstoneWire_Connection>;
}

/** JVM interface org.bukkit.block.data.type.Repeater. */
export interface RepeaterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
  getDelay(): number;
  getMaximumDelay(): number;
  getMinimumDelay(): number;
  isLocked(): boolean;
  setDelay(arg0: number): void;
  setLocked(arg0: boolean): void;
}
export type Repeater = RepeaterMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface RepeaterStatics {
}

/** JVM interface org.bukkit.block.data.type.ResinClump. */
export interface ResinClumpMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.MultipleFacing, j_org_bukkit_block_data.Waterlogged];
}
export type ResinClump = ResinClumpMembers & j_org_bukkit_block_data.MultipleFacing & j_org_bukkit_block_data.Waterlogged;
export interface ResinClumpStatics {
}

/** JVM interface org.bukkit.block.data.type.RespawnAnchor. */
export interface RespawnAnchorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getCharges(): number;
  getMaximumCharges(): number;
  setCharges(arg0: number): void;
}
export type RespawnAnchor = RespawnAnchorMembers & j_org_bukkit_block_data.BlockData;
export interface RespawnAnchorStatics {
}

/** JVM interface org.bukkit.block.data.type.Sapling. */
export interface SaplingMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getMaximumStage(): number;
  getStage(): number;
  setStage(arg0: number): void;
}
export type Sapling = SaplingMembers & j_org_bukkit_block_data.BlockData;
export interface SaplingStatics {
}

/** JVM interface org.bukkit.block.data.type.Scaffolding. */
export interface ScaffoldingMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  getDistance(): number;
  getMaximumDistance(): number;
  isBottom(): boolean;
  setBottom(arg0: boolean): void;
  setDistance(arg0: number): void;
}
export type Scaffolding = ScaffoldingMembers & j_org_bukkit_block_data.Waterlogged;
export interface ScaffoldingStatics {
}

/** JVM interface org.bukkit.block.data.type.SculkCatalyst. */
export interface SculkCatalyst_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  isBloom(): boolean;
  setBloom(arg0: boolean): void;
}
export type SculkCatalyst_2 = SculkCatalyst_2Members & j_org_bukkit_block_data.BlockData;
export interface SculkCatalyst_2Statics {
}

/** JVM interface org.bukkit.block.data.type.SculkSensor. */
export interface SculkSensor_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.AnaloguePowerable, j_org_bukkit_block_data.Waterlogged];
  getPhase(): SculkSensor_Phase;
  getSculkSensorPhase(): SculkSensor_Phase;
  setPhase(arg0: SculkSensor_Phase): void;
  setSculkSensorPhase(arg0: SculkSensor_Phase): void;
}
export type SculkSensor_2 = SculkSensor_2Members & j_org_bukkit_block_data.AnaloguePowerable & j_org_bukkit_block_data.Waterlogged;
export interface SculkSensor_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.SculkSensor$Phase; constants are host handles, not strings. */
export type SculkSensor_Phase = JavaEnum<"org.bukkit.block.data.type.SculkSensor$Phase", "ACTIVE" | "COOLDOWN" | "INACTIVE"> & SculkSensor_PhaseMembers;
export interface SculkSensor_PhaseMembers {
}
export interface SculkSensor_PhaseStatics {
  readonly ACTIVE: SculkSensor_Phase;
  readonly COOLDOWN: SculkSensor_Phase;
  readonly INACTIVE: SculkSensor_Phase;
  valueOf(arg0: string): SculkSensor_Phase;
  values(): Array<SculkSensor_Phase>;
}

/** JVM interface org.bukkit.block.data.type.SculkShrieker. */
export interface SculkShrieker_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  isCanSummon(): boolean;
  isShrieking(): boolean;
  setCanSummon(arg0: boolean): void;
  setShrieking(arg0: boolean): void;
}
export type SculkShrieker_2 = SculkShrieker_2Members & j_org_bukkit_block_data.Waterlogged;
export interface SculkShrieker_2Statics {
}

/** JVM interface org.bukkit.block.data.type.SculkVein. */
export interface SculkVeinMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.MultipleFacing, j_org_bukkit_block_data.Waterlogged];
}
export type SculkVein = SculkVeinMembers & j_org_bukkit_block_data.MultipleFacing & j_org_bukkit_block_data.Waterlogged;
export interface SculkVeinStatics {
}

/** JVM interface org.bukkit.block.data.type.SeaPickle. */
export interface SeaPickleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  getMaximumPickles(): number;
  getMinimumPickles(): number;
  getPickles(): number;
  setPickles(arg0: number): void;
}
export type SeaPickle = SeaPickleMembers & j_org_bukkit_block_data.Waterlogged;
export interface SeaPickleStatics {
}

/** JVM interface org.bukkit.block.data.type.Sign. */
export interface Sign_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Rotatable, j_org_bukkit_block_data.Waterlogged];
}
export type Sign_2 = Sign_2Members & j_org_bukkit_block_data.Rotatable & j_org_bukkit_block_data.Waterlogged;
export interface Sign_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Skull. */
export interface Skull_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Powerable, j_org_bukkit_block_data.Rotatable];
}
export type Skull_2 = Skull_2Members & j_org_bukkit_block_data.Powerable & j_org_bukkit_block_data.Rotatable;
export interface Skull_2Statics {
}

/** JVM interface org.bukkit.block.data.type.Slab. */
export interface SlabMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  getType(): Slab_Type;
  setType(arg0: Slab_Type): void;
}
export type Slab = SlabMembers & j_org_bukkit_block_data.Waterlogged;
export interface SlabStatics {
}

/** Live JVM enum org.bukkit.block.data.type.Slab$Type; constants are host handles, not strings. */
export type Slab_Type = JavaEnum<"org.bukkit.block.data.type.Slab$Type", "BOTTOM" | "DOUBLE" | "TOP"> & Slab_TypeMembers;
export interface Slab_TypeMembers {
}
export interface Slab_TypeStatics {
  readonly BOTTOM: Slab_Type;
  readonly DOUBLE: Slab_Type;
  readonly TOP: Slab_Type;
  valueOf(arg0: string): Slab_Type;
  values(): Array<Slab_Type>;
}

/** JVM interface org.bukkit.block.data.type.SmallDripleaf. */
export interface SmallDripleafMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Bisected, Dripleaf];
}
export type SmallDripleaf = SmallDripleafMembers & j_org_bukkit_block_data.Bisected & Dripleaf;
export interface SmallDripleafStatics {
}

/** JVM interface org.bukkit.block.data.type.Snow. */
export interface SnowMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getLayers(): number;
  getMaximumLayers(): number;
  getMinimumLayers(): number;
  setLayers(arg0: number): void;
}
export type Snow = SnowMembers & j_org_bukkit_block_data.BlockData;
export interface SnowStatics {
}

/** JVM interface org.bukkit.block.data.type.Stairs. */
export interface StairsMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Bisected, j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
  getShape(): Stairs_Shape;
  setShape(arg0: Stairs_Shape): void;
}
export type Stairs = StairsMembers & j_org_bukkit_block_data.Bisected & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface StairsStatics {
}

/** Live JVM enum org.bukkit.block.data.type.Stairs$Shape; constants are host handles, not strings. */
export type Stairs_Shape = JavaEnum<"org.bukkit.block.data.type.Stairs$Shape", "INNER_LEFT" | "INNER_RIGHT" | "OUTER_LEFT" | "OUTER_RIGHT" | "STRAIGHT"> & Stairs_ShapeMembers;
export interface Stairs_ShapeMembers {
}
export interface Stairs_ShapeStatics {
  readonly INNER_LEFT: Stairs_Shape;
  readonly INNER_RIGHT: Stairs_Shape;
  readonly OUTER_LEFT: Stairs_Shape;
  readonly OUTER_RIGHT: Stairs_Shape;
  readonly STRAIGHT: Stairs_Shape;
  valueOf(arg0: string): Stairs_Shape;
  values(): Array<Stairs_Shape>;
}

/** JVM interface org.bukkit.block.data.type.StructureBlock. */
export interface StructureBlockMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getMode(): StructureBlock_Mode;
  setMode(arg0: StructureBlock_Mode): void;
}
export type StructureBlock = StructureBlockMembers & j_org_bukkit_block_data.BlockData;
export interface StructureBlockStatics {
}

/** Live JVM enum org.bukkit.block.data.type.StructureBlock$Mode; constants are host handles, not strings. */
export type StructureBlock_Mode = JavaEnum<"org.bukkit.block.data.type.StructureBlock$Mode", "CORNER" | "DATA" | "LOAD" | "SAVE"> & StructureBlock_ModeMembers;
export interface StructureBlock_ModeMembers {
}
export interface StructureBlock_ModeStatics {
  readonly CORNER: StructureBlock_Mode;
  readonly DATA: StructureBlock_Mode;
  readonly LOAD: StructureBlock_Mode;
  readonly SAVE: StructureBlock_Mode;
  valueOf(arg0: string): StructureBlock_Mode;
  values(): Array<StructureBlock_Mode>;
}

/** JVM interface org.bukkit.block.data.type.Switch. */
export interface SwitchMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.FaceAttachable, j_org_bukkit_block_data.Powerable];
  getAttachedFace(): j_org_bukkit_block_data.FaceAttachable_AttachedFace;
  getFace(): Switch_Face;
  setAttachedFace(arg0: j_org_bukkit_block_data.FaceAttachable_AttachedFace): void;
  setFace(arg0: Switch_Face): void;
}
export type Switch = SwitchMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.FaceAttachable & j_org_bukkit_block_data.Powerable;
export interface SwitchStatics {
}

/** Live JVM enum org.bukkit.block.data.type.Switch$Face; constants are host handles, not strings. */
export type Switch_Face = JavaEnum<"org.bukkit.block.data.type.Switch$Face", "CEILING" | "FLOOR" | "WALL"> & Switch_FaceMembers;
export interface Switch_FaceMembers {
}
export interface Switch_FaceStatics {
  readonly CEILING: Switch_Face;
  readonly FLOOR: Switch_Face;
  readonly WALL: Switch_Face;
  valueOf(arg0: string): Switch_Face;
  values(): Array<Switch_Face>;
}

/** JVM interface org.bukkit.block.data.type.TechnicalPiston. */
export interface TechnicalPistonMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  getType(): TechnicalPiston_Type;
  setType(arg0: TechnicalPiston_Type): void;
}
export type TechnicalPiston = TechnicalPistonMembers & j_org_bukkit_block_data.Directional;
export interface TechnicalPistonStatics {
}

/** Live JVM enum org.bukkit.block.data.type.TechnicalPiston$Type; constants are host handles, not strings. */
export type TechnicalPiston_Type = JavaEnum<"org.bukkit.block.data.type.TechnicalPiston$Type", "NORMAL" | "STICKY"> & TechnicalPiston_TypeMembers;
export interface TechnicalPiston_TypeMembers {
}
export interface TechnicalPiston_TypeStatics {
  readonly NORMAL: TechnicalPiston_Type;
  readonly STICKY: TechnicalPiston_Type;
  valueOf(arg0: string): TechnicalPiston_Type;
  values(): Array<TechnicalPiston_Type>;
}

/** JVM interface org.bukkit.block.data.type.TestBlock. */
export interface TestBlock_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getMode(): TestBlock_Mode;
  setMode(arg0: TestBlock_Mode): void;
}
export type TestBlock_2 = TestBlock_2Members & j_org_bukkit_block_data.BlockData;
export interface TestBlock_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.TestBlock$Mode; constants are host handles, not strings. */
export type TestBlock_Mode = JavaEnum<"org.bukkit.block.data.type.TestBlock$Mode", "ACCEPT" | "FAIL" | "LOG" | "START"> & TestBlock_ModeMembers;
export interface TestBlock_ModeMembers {
}
export interface TestBlock_ModeStatics {
  readonly ACCEPT: TestBlock_Mode;
  readonly FAIL: TestBlock_Mode;
  readonly LOG: TestBlock_Mode;
  readonly START: TestBlock_Mode;
  valueOf(arg0: string): TestBlock_Mode;
  values(): Array<TestBlock_Mode>;
}

/** JVM interface org.bukkit.block.data.type.TNT. */
export interface TNTMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  isUnstable(): boolean;
  setUnstable(arg0: boolean): void;
}
export type TNT = TNTMembers & j_org_bukkit_block_data.BlockData;
export interface TNTStatics {
}

/** JVM interface org.bukkit.block.data.type.TrapDoor. */
export interface TrapDoorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Bisected, j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Openable, j_org_bukkit_block_data.Powerable, j_org_bukkit_block_data.Waterlogged];
}
export type TrapDoor = TrapDoorMembers & j_org_bukkit_block_data.Bisected & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Openable & j_org_bukkit_block_data.Powerable & j_org_bukkit_block_data.Waterlogged;
export interface TrapDoorStatics {
}

/** JVM interface org.bukkit.block.data.type.TrialSpawner. */
export interface TrialSpawner_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.BlockData];
  getTrialSpawnerState(): TrialSpawner_State;
  isOminous(): boolean;
  setOminous(arg0: boolean): void;
  setTrialSpawnerState(arg0: TrialSpawner_State): void;
}
export type TrialSpawner_2 = TrialSpawner_2Members & j_org_bukkit_block_data.BlockData;
export interface TrialSpawner_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.TrialSpawner$State; constants are host handles, not strings. */
export type TrialSpawner_State = JavaEnum<"org.bukkit.block.data.type.TrialSpawner$State", "ACTIVE" | "COOLDOWN" | "EJECTING_REWARD" | "INACTIVE" | "WAITING_FOR_PLAYERS" | "WAITING_FOR_REWARD_EJECTION"> & TrialSpawner_StateMembers;
export interface TrialSpawner_StateMembers {
}
export interface TrialSpawner_StateStatics {
  readonly ACTIVE: TrialSpawner_State;
  readonly COOLDOWN: TrialSpawner_State;
  readonly EJECTING_REWARD: TrialSpawner_State;
  readonly INACTIVE: TrialSpawner_State;
  readonly WAITING_FOR_PLAYERS: TrialSpawner_State;
  readonly WAITING_FOR_REWARD_EJECTION: TrialSpawner_State;
  valueOf(arg0: string): TrialSpawner_State;
  values(): Array<TrialSpawner_State>;
}

/** JVM interface org.bukkit.block.data.type.Tripwire. */
export interface TripwireMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Attachable, j_org_bukkit_block_data.MultipleFacing, j_org_bukkit_block_data.Powerable];
  isDisarmed(): boolean;
  setDisarmed(arg0: boolean): void;
}
export type Tripwire = TripwireMembers & j_org_bukkit_block_data.Attachable & j_org_bukkit_block_data.MultipleFacing & j_org_bukkit_block_data.Powerable;
export interface TripwireStatics {
}

/** JVM interface org.bukkit.block.data.type.TripwireHook. */
export interface TripwireHookMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Attachable, j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
}
export type TripwireHook = TripwireHookMembers & j_org_bukkit_block_data.Attachable & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface TripwireHookStatics {
}

/** JVM interface org.bukkit.block.data.type.TurtleEgg. */
export interface TurtleEggMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Hatchable];
  getEggs(): number;
  getMaximumEggs(): number;
  getMinimumEggs(): number;
  setEggs(arg0: number): void;
}
export type TurtleEgg = TurtleEggMembers & j_org_bukkit_block_data.Hatchable;
export interface TurtleEggStatics {
}

/** JVM interface org.bukkit.block.data.type.Vault. */
export interface Vault_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional];
  getTrialSpawnerState(): Vault_State;
  getVaultState(): Vault_State;
  isOminous(): boolean;
  setOminous(arg0: boolean): void;
  setTrialSpawnerState(arg0: Vault_State): void;
  setVaultState(arg0: Vault_State): void;
}
export type Vault_2 = Vault_2Members & j_org_bukkit_block_data.Directional;
export interface Vault_2Statics {
}

/** Live JVM enum org.bukkit.block.data.type.Vault$State; constants are host handles, not strings. */
export type Vault_State = JavaEnum<"org.bukkit.block.data.type.Vault$State", "ACTIVE" | "EJECTING" | "INACTIVE" | "UNLOCKING"> & Vault_StateMembers;
export interface Vault_StateMembers {
}
export interface Vault_StateStatics {
  readonly ACTIVE: Vault_State;
  readonly EJECTING: Vault_State;
  readonly INACTIVE: Vault_State;
  readonly UNLOCKING: Vault_State;
  valueOf(arg0: string): Vault_State;
  values(): Array<Vault_State>;
}

/** JVM interface org.bukkit.block.data.type.Wall. */
export interface WallMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Waterlogged];
  getHeight(arg0: j_org_bukkit_block.BlockFace): Wall_Height;
  isUp(): boolean;
  setHeight(arg0: j_org_bukkit_block.BlockFace, arg1: Wall_Height): void;
  setUp(arg0: boolean): void;
}
export type Wall = WallMembers & j_org_bukkit_block_data.Waterlogged;
export interface WallStatics {
}

/** Live JVM enum org.bukkit.block.data.type.Wall$Height; constants are host handles, not strings. */
export type Wall_Height = JavaEnum<"org.bukkit.block.data.type.Wall$Height", "LOW" | "NONE" | "TALL"> & Wall_HeightMembers;
export interface Wall_HeightMembers {
}
export interface Wall_HeightStatics {
  readonly LOW: Wall_Height;
  readonly NONE: Wall_Height;
  readonly TALL: Wall_Height;
  valueOf(arg0: string): Wall_Height;
  values(): Array<Wall_Height>;
}

/** JVM interface org.bukkit.block.data.type.WallHangingSign. */
export interface WallHangingSignMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type WallHangingSign = WallHangingSignMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface WallHangingSignStatics {
}

/** JVM interface org.bukkit.block.data.type.WallSign. */
export interface WallSignMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Waterlogged];
}
export type WallSign = WallSignMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Waterlogged;
export interface WallSignStatics {
}

/** JVM interface org.bukkit.block.data.type.WallSkull. */
export interface WallSkullMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_block_data.Directional, j_org_bukkit_block_data.Powerable];
}
export type WallSkull = WallSkullMembers & j_org_bukkit_block_data.Directional & j_org_bukkit_block_data.Powerable;
export interface WallSkullStatics {
}
