// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_material_types from './org.bukkit.material.types.generated.js';

/** JVM interface org.bukkit.material.Attachable. */
export interface Attachable_2Members {
  readonly __javaSupertypes?: readonly [Directional_2];
  getAttachedFace(): j_org_bukkit_block.BlockFace;
}
export type Attachable_2 = Attachable_2Members & Directional_2;
export interface Attachable_2Statics {
}

/** JVM class org.bukkit.material.Banner. */
export interface Banner_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Attachable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Banner_2;
  clone(): MaterialData;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  getFacing(): j_org_bukkit_block.BlockFace;
  isWallBanner(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Banner_2 = Banner_2Members & MaterialData & Attachable_2;
export interface Banner_2Statics {
  new(): Banner_2;
  new(arg0: j_org_bukkit.Material): Banner_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Banner_2;
}

/** JVM class org.bukkit.material.Bed. */
export interface Bed_3Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Bed_3;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  isHeadOfBed(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setHeadOfBed(arg0: boolean): void;
  toString(): string;
}
export type Bed_3 = Bed_3Members & MaterialData & Directional_2;
export interface Bed_3Statics {
  new(): Bed_3;
  new(arg0: j_org_bukkit.Material): Bed_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Bed_3;
  new(arg0: j_org_bukkit_block.BlockFace): Bed_3;
}

/** JVM class org.bukkit.material.Button. */
export interface ButtonMembers {
  readonly __javaSupertypes?: readonly [SimpleAttachableMaterialData, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Button;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  isPowered(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setPowered(arg0: boolean): void;
  toString(): string;
}
export type Button = ButtonMembers & SimpleAttachableMaterialData & Redstone;
export interface ButtonStatics {
  new(): Button;
  new(arg0: j_org_bukkit.Material): Button;
  new(arg0: j_org_bukkit.Material, arg1: number): Button;
}

/** JVM class org.bukkit.material.Cake. */
export interface Cake_2Members {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Cake_2;
  clone(): MaterialData;
  getSlicesEaten(): number;
  getSlicesRemaining(): number;
  setSlicesEaten(arg0: number): void;
  setSlicesRemaining(arg0: number): void;
  toString(): string;
}
export type Cake_2 = Cake_2Members & MaterialData;
export interface Cake_2Statics {
  new(): Cake_2;
  new(arg0: j_org_bukkit.Material): Cake_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Cake_2;
}

/** JVM class org.bukkit.material.Cauldron. */
export interface CauldronMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Cauldron;
  clone(): MaterialData;
  isEmpty(): boolean;
  isFull(): boolean;
  toString(): string;
}
export type Cauldron = CauldronMembers & MaterialData;
export interface CauldronStatics {
  new(): Cauldron;
  new(arg0: number): Cauldron;
  new(arg0: j_org_bukkit.Material, arg1: number): Cauldron;
}

/** JVM class org.bukkit.material.Chest. */
export interface Chest_3Members {
  readonly __javaSupertypes?: readonly [DirectionalContainer];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Chest_3;
  clone(): DirectionalContainer;
  clone(): MaterialData;
}
export type Chest_3 = Chest_3Members & DirectionalContainer;
export interface Chest_3Statics {
  new(): Chest_3;
  new(arg0: j_org_bukkit.Material): Chest_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Chest_3;
  new(arg0: j_org_bukkit_block.BlockFace): Chest_3;
}

/** JVM class org.bukkit.material.Coal. */
export interface CoalMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Coal;
  clone(): MaterialData;
  getType(): j_org_bukkit.CoalType;
  setType(arg0: j_org_bukkit.CoalType): void;
  toString(): string;
}
export type Coal = CoalMembers & MaterialData;
export interface CoalStatics {
  new(): Coal;
  new(arg0: j_org_bukkit.CoalType): Coal;
  new(arg0: j_org_bukkit.Material): Coal;
  new(arg0: j_org_bukkit.Material, arg1: number): Coal;
}

/** JVM class org.bukkit.material.CocoaPlant. */
export interface CocoaPlantMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Attachable_2, Directional_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CocoaPlant;
  clone(): MaterialData;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  getFacing(): j_org_bukkit_block.BlockFace;
  getSize(): CocoaPlant_CocoaPlantSize;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setSize(arg0: CocoaPlant_CocoaPlantSize): void;
  toString(): string;
}
export type CocoaPlant = CocoaPlantMembers & MaterialData & Attachable_2 & Directional_2;
export interface CocoaPlantStatics {
  new(): CocoaPlant;
  new(arg0: j_org_bukkit.Material, arg1: number): CocoaPlant;
  new(arg0: CocoaPlant_CocoaPlantSize): CocoaPlant;
  new(arg0: CocoaPlant_CocoaPlantSize, arg1: j_org_bukkit_block.BlockFace): CocoaPlant;
}

/** Live JVM enum org.bukkit.material.CocoaPlant$CocoaPlantSize; constants are host handles, not strings. */
export type CocoaPlant_CocoaPlantSize = JavaEnum<"org.bukkit.material.CocoaPlant$CocoaPlantSize", "LARGE" | "MEDIUM" | "SMALL"> & CocoaPlant_CocoaPlantSizeMembers;
export interface CocoaPlant_CocoaPlantSizeMembers {
}
export interface CocoaPlant_CocoaPlantSizeStatics {
  readonly LARGE: CocoaPlant_CocoaPlantSize;
  readonly MEDIUM: CocoaPlant_CocoaPlantSize;
  readonly SMALL: CocoaPlant_CocoaPlantSize;
  valueOf(arg0: string): CocoaPlant_CocoaPlantSize;
  values(): Array<CocoaPlant_CocoaPlantSize>;
}

/** JVM interface org.bukkit.material.Colorable. */
export interface ColorableMembers {
  getColor(): j_org_bukkit.DyeColor | null;
  setColor(arg0: j_org_bukkit.DyeColor): void;
}
export type Colorable = ColorableMembers;
export interface ColorableStatics {
}

/** JVM class org.bukkit.material.Command. */
export interface Command_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Command_2;
  clone(): MaterialData;
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
  toString(): string;
}
export type Command_2 = Command_2Members & MaterialData & Redstone;
export interface Command_2Statics {
  new(): Command_2;
  new(arg0: j_org_bukkit.Material): Command_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Command_2;
}

/** JVM class org.bukkit.material.Comparator. */
export interface Comparator_3Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Comparator_3;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  isBeingPowered(): boolean;
  isPowered(): boolean;
  isSubtractionMode(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setSubtractionMode(arg0: boolean): void;
  toString(): string;
}
export type Comparator_3 = Comparator_3Members & MaterialData & Directional_2 & Redstone;
export interface Comparator_3Statics {
  new(): Comparator_3;
  new(arg0: j_org_bukkit.Material): Comparator_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Comparator_3;
  new(arg0: j_org_bukkit_block.BlockFace): Comparator_3;
  new(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): Comparator_3;
  new(arg0: j_org_bukkit_block.BlockFace, arg1: boolean, arg2: boolean): Comparator_3;
  readonly DEFAULT_DIRECTION: j_org_bukkit_block.BlockFace;
  readonly DEFAULT_STATE: 0;
  readonly DEFAULT_SUBTRACTION_MODE: 0;
}

/** JVM class org.bukkit.material.Crops. */
export interface CropsMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Crops;
  clone(): MaterialData;
  getState(): j_org_bukkit.CropState;
  setState(arg0: j_org_bukkit.CropState): void;
  toString(): string;
}
export type Crops = CropsMembers & MaterialData;
export interface CropsStatics {
  new(): Crops;
  new(arg0: j_org_bukkit.CropState): Crops;
  new(arg0: j_org_bukkit.Material): Crops;
  new(arg0: j_org_bukkit.Material, arg1: number): Crops;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.CropState): Crops;
  readonly DEFAULT_STATE: j_org_bukkit.CropState;
  readonly DEFAULT_TYPE: j_org_bukkit.Material;
}

/** JVM class org.bukkit.material.DetectorRail. */
export interface DetectorRailMembers {
  readonly __javaSupertypes?: readonly [ExtendedRails, PressureSensor];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): DetectorRail;
  clone(): ExtendedRails;
  clone(): MaterialData;
  clone(): Rails;
  isPressed(): boolean;
  setPressed(arg0: boolean): void;
}
export type DetectorRail = DetectorRailMembers & ExtendedRails & PressureSensor;
export interface DetectorRailStatics {
  new(): DetectorRail;
  new(arg0: j_org_bukkit.Material): DetectorRail;
  new(arg0: j_org_bukkit.Material, arg1: number): DetectorRail;
}

/** JVM class org.bukkit.material.Diode. */
export interface DiodeMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Diode;
  clone(): MaterialData;
  getDelay(): number;
  getFacing(): j_org_bukkit_block.BlockFace;
  isPowered(): boolean;
  setDelay(arg0: number): void;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Diode = DiodeMembers & MaterialData & Directional_2 & Redstone;
export interface DiodeStatics {
  new(): Diode;
  new(arg0: j_org_bukkit.Material): Diode;
  new(arg0: j_org_bukkit.Material, arg1: number): Diode;
  new(arg0: j_org_bukkit_block.BlockFace): Diode;
  new(arg0: j_org_bukkit_block.BlockFace, arg1: number): Diode;
  new(arg0: j_org_bukkit_block.BlockFace, arg1: number, arg2: boolean): Diode;
  readonly DEFAULT_DELAY: 1;
  readonly DEFAULT_DIRECTION: j_org_bukkit_block.BlockFace;
  readonly DEFAULT_STATE: 0;
}

/** JVM interface org.bukkit.material.Directional. */
export interface Directional_2Members {
  getFacing(): j_org_bukkit_block.BlockFace;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
}
export type Directional_2 = Directional_2Members;
export interface Directional_2Statics {
}

/** JVM class org.bukkit.material.DirectionalContainer. */
export interface DirectionalContainerMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): DirectionalContainer;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type DirectionalContainer = DirectionalContainerMembers & MaterialData & Directional_2;
export interface DirectionalContainerStatics {
  new(arg0: j_org_bukkit.Material): DirectionalContainer;
  new(arg0: j_org_bukkit.Material, arg1: number): DirectionalContainer;
}

/** JVM class org.bukkit.material.Dispenser. */
export interface Dispenser_3Members {
  readonly __javaSupertypes?: readonly [FurnaceAndDispenser];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): DirectionalContainer;
  clone(): Dispenser_3;
  clone(): FurnaceAndDispenser;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
}
export type Dispenser_3 = Dispenser_3Members & FurnaceAndDispenser;
export interface Dispenser_3Statics {
  new(): Dispenser_3;
  new(arg0: j_org_bukkit.Material): Dispenser_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Dispenser_3;
  new(arg0: j_org_bukkit_block.BlockFace): Dispenser_3;
}

/** JVM class org.bukkit.material.Door. */
export interface Door_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Openable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Door_2;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  getHinge(): boolean;
  getHingeCorner(): j_org_bukkit_block.BlockFace;
  isOpen(): boolean;
  isTopHalf(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setHinge(arg0: boolean): void;
  setOpen(arg0: boolean): void;
  setTopHalf(arg0: boolean): void;
  toString(): string;
}
export type Door_2 = Door_2Members & MaterialData & Directional_2 & Openable_2;
export interface Door_2Statics {
  new(): Door_2;
  new(arg0: j_org_bukkit.Material): Door_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Door_2;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit_block.BlockFace): Door_2;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit_block.BlockFace, arg2: boolean): Door_2;
  new(arg0: j_org_bukkit.Material, arg1: boolean): Door_2;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: j_org_bukkit_block.BlockFace): Door_2;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: j_org_bukkit_block.BlockFace, arg2: boolean): Door_2;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: boolean): Door_2;
  getWoodDoorOfSpecies(arg0: j_org_bukkit.TreeSpecies): j_org_bukkit.Material;
}

/** JVM class org.bukkit.material.Dye. */
export interface DyeMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Colorable];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Dye;
  clone(): MaterialData;
  getColor(): j_org_bukkit.DyeColor;
  setColor(arg0: j_org_bukkit.DyeColor): void;
  toString(): string;
}
export type Dye = DyeMembers & MaterialData & Colorable;
export interface DyeStatics {
  new(): Dye;
  new(arg0: j_org_bukkit.DyeColor): Dye;
  new(arg0: j_org_bukkit.Material): Dye;
  new(arg0: j_org_bukkit.Material, arg1: number): Dye;
}

/** JVM class org.bukkit.material.EnderChest. */
export interface EnderChest_3Members {
  readonly __javaSupertypes?: readonly [DirectionalContainer];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): DirectionalContainer;
  clone(): EnderChest_3;
  clone(): MaterialData;
}
export type EnderChest_3 = EnderChest_3Members & DirectionalContainer;
export interface EnderChest_3Statics {
  new(): EnderChest_3;
  new(arg0: j_org_bukkit.Material): EnderChest_3;
  new(arg0: j_org_bukkit.Material, arg1: number): EnderChest_3;
  new(arg0: j_org_bukkit_block.BlockFace): EnderChest_3;
}

/** JVM class org.bukkit.material.ExtendedRails. */
export interface ExtendedRailsMembers {
  readonly __javaSupertypes?: readonly [Rails];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): ExtendedRails;
  clone(): MaterialData;
  clone(): Rails;
  getConvertedData(): number;
  isCurve(): boolean;
  setDirection(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): void;
}
export type ExtendedRails = ExtendedRailsMembers & Rails;
export interface ExtendedRailsStatics {
  new(arg0: j_org_bukkit.Material): ExtendedRails;
  new(arg0: j_org_bukkit.Material, arg1: number): ExtendedRails;
}

/** JVM class org.bukkit.material.FlowerPot. */
export interface FlowerPotMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): FlowerPot;
  clone(): MaterialData;
  getContents(): MaterialData;
  setContents(arg0: MaterialData): void;
  toString(): string;
}
export type FlowerPot = FlowerPotMembers & MaterialData;
export interface FlowerPotStatics {
  new(): FlowerPot;
  new(arg0: j_org_bukkit.Material): FlowerPot;
  new(arg0: j_org_bukkit.Material, arg1: number): FlowerPot;
}

/** JVM class org.bukkit.material.Furnace. */
export interface Furnace_3Members {
  readonly __javaSupertypes?: readonly [FurnaceAndDispenser];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): DirectionalContainer;
  clone(): Furnace_3;
  clone(): FurnaceAndDispenser;
  clone(): MaterialData;
}
export type Furnace_3 = Furnace_3Members & FurnaceAndDispenser;
export interface Furnace_3Statics {
  new(): Furnace_3;
  new(arg0: j_org_bukkit.Material): Furnace_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Furnace_3;
  new(arg0: j_org_bukkit_block.BlockFace): Furnace_3;
}

/** JVM class org.bukkit.material.FurnaceAndDispenser. */
export interface FurnaceAndDispenserMembers {
  readonly __javaSupertypes?: readonly [DirectionalContainer];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): DirectionalContainer;
  clone(): FurnaceAndDispenser;
  clone(): MaterialData;
}
export type FurnaceAndDispenser = FurnaceAndDispenserMembers & DirectionalContainer;
export interface FurnaceAndDispenserStatics {
  new(arg0: j_org_bukkit.Material): FurnaceAndDispenser;
  new(arg0: j_org_bukkit.Material, arg1: number): FurnaceAndDispenser;
}

/** JVM class org.bukkit.material.Gate. */
export interface Gate_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Openable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Gate_2;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  isOpen(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setOpen(arg0: boolean): void;
  toString(): string;
}
export type Gate_2 = Gate_2Members & MaterialData & Directional_2 & Openable_2;
export interface Gate_2Statics {
  new(): Gate_2;
  new(arg0: number): Gate_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Gate_2;
}

/** JVM class org.bukkit.material.Hopper. */
export interface Hopper_3Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Hopper_3;
  clone(): MaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  isActive(): boolean;
  isPowered(): boolean;
  setActive(arg0: boolean): void;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Hopper_3 = Hopper_3Members & MaterialData & Directional_2 & Redstone;
export interface Hopper_3Statics {
  new(): Hopper_3;
  new(arg0: j_org_bukkit.Material): Hopper_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Hopper_3;
  new(arg0: j_org_bukkit_block.BlockFace): Hopper_3;
  new(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): Hopper_3;
  readonly DEFAULT_ACTIVE: 1;
  readonly DEFAULT_DIRECTION: j_org_bukkit_block.BlockFace;
}

/** JVM class org.bukkit.material.Ladder. */
export interface Ladder_2Members {
  readonly __javaSupertypes?: readonly [SimpleAttachableMaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Ladder_2;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
}
export type Ladder_2 = Ladder_2Members & SimpleAttachableMaterialData;
export interface Ladder_2Statics {
  new(): Ladder_2;
  new(arg0: j_org_bukkit.Material): Ladder_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Ladder_2;
}

/** JVM class org.bukkit.material.Leaves. */
export interface Leaves_2Members {
  readonly __javaSupertypes?: readonly [Wood];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Leaves_2;
  clone(): MaterialData;
  clone(): Wood;
  isDecayable(): boolean;
  isDecaying(): boolean;
  setDecayable(arg0: boolean): void;
  setDecaying(arg0: boolean): void;
  toString(): string;
}
export type Leaves_2 = Leaves_2Members & Wood;
export interface Leaves_2Statics {
  new(): Leaves_2;
  new(arg0: j_org_bukkit.Material): Leaves_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Leaves_2;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies): Leaves_2;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies, arg2: boolean): Leaves_2;
  new(arg0: j_org_bukkit.TreeSpecies): Leaves_2;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: boolean): Leaves_2;
  readonly DEFAULT_DECAYABLE: 1;
  readonly DEFAULT_TYPE: j_org_bukkit.Material;
}

/** JVM class org.bukkit.material.Lever. */
export interface LeverMembers {
  readonly __javaSupertypes?: readonly [SimpleAttachableMaterialData, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): Lever;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  isPowered(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setPowered(arg0: boolean): void;
  toString(): string;
}
export type Lever = LeverMembers & SimpleAttachableMaterialData & Redstone;
export interface LeverStatics {
  new(): Lever;
  new(arg0: j_org_bukkit.Material): Lever;
  new(arg0: j_org_bukkit.Material, arg1: number): Lever;
}

/** JVM class org.bukkit.material.LongGrass. */
export interface LongGrassMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): LongGrass;
  clone(): MaterialData;
  getSpecies(): j_org_bukkit.GrassSpecies;
  setSpecies(arg0: j_org_bukkit.GrassSpecies): void;
  toString(): string;
}
export type LongGrass = LongGrassMembers & MaterialData;
export interface LongGrassStatics {
  new(): LongGrass;
  new(arg0: j_org_bukkit.GrassSpecies): LongGrass;
  new(arg0: j_org_bukkit.Material): LongGrass;
  new(arg0: j_org_bukkit.Material, arg1: number): LongGrass;
}

/** JVM class org.bukkit.material.MaterialData. */
export interface MaterialDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  equals(arg0: object): boolean;
  getData(): number;
  getItemType(): j_org_bukkit.Material;
  hashCode(): number;
  setData(arg0: number): void;
  toItemStack(): j_org_bukkit_inventory.ItemStack;
  toItemStack(arg0: number): j_org_bukkit_inventory.ItemStack;
  toString(): string;
}
export type MaterialData = MaterialDataMembers & JavaOpaque<"java.lang.Cloneable">;
export interface MaterialDataStatics {
  new(arg0: j_org_bukkit.Material): MaterialData;
  new(arg0: j_org_bukkit.Material, arg1: number): MaterialData;
}

/** JVM class org.bukkit.material.MonsterEggs. */
export interface MonsterEggsMembers {
  readonly __javaSupertypes?: readonly [TexturedMaterial];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): MonsterEggs;
  clone(): TexturedMaterial;
  getTextures(): JavaList<j_org_bukkit.Material>;
}
export type MonsterEggs = MonsterEggsMembers & TexturedMaterial;
export interface MonsterEggsStatics {
  new(): MonsterEggs;
  new(arg0: j_org_bukkit.Material): MonsterEggs;
  new(arg0: j_org_bukkit.Material, arg1: number): MonsterEggs;
}

/** JVM class org.bukkit.material.Mushroom. */
export interface MushroomMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Mushroom;
  getBlockTexture(): j_org_bukkit_material_types.MushroomBlockTexture;
  getPaintedFaces(): JavaSet<j_org_bukkit_block.BlockFace>;
  isFacePainted(arg0: j_org_bukkit_block.BlockFace): boolean;
  isStem(): boolean;
  setBlockTexture(arg0: j_org_bukkit_material_types.MushroomBlockTexture): void;
  setFacePainted(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): void;
  setStem(): void;
  toString(): string;
}
export type Mushroom = MushroomMembers & MaterialData;
export interface MushroomStatics {
  new(arg0: j_org_bukkit.Material): Mushroom;
  new(arg0: j_org_bukkit.Material, arg1: number): Mushroom;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit_block.BlockFace): Mushroom;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit_material_types.MushroomBlockTexture): Mushroom;
}

/** JVM class org.bukkit.material.NetherWarts. */
export interface NetherWartsMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): NetherWarts;
  getState(): j_org_bukkit.NetherWartsState;
  setState(arg0: j_org_bukkit.NetherWartsState): void;
  toString(): string;
}
export type NetherWarts = NetherWartsMembers & MaterialData;
export interface NetherWartsStatics {
  new(): NetherWarts;
  new(arg0: j_org_bukkit.Material): NetherWarts;
  new(arg0: j_org_bukkit.Material, arg1: number): NetherWarts;
  new(arg0: j_org_bukkit.NetherWartsState): NetherWarts;
}

/** JVM class org.bukkit.material.Observer. */
export interface Observer_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Observer_2;
  getFacing(): j_org_bukkit_block.BlockFace;
  isPowered(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Observer_2 = Observer_2Members & MaterialData & Directional_2 & Redstone;
export interface Observer_2Statics {
  new(): Observer_2;
  new(arg0: j_org_bukkit.Material): Observer_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Observer_2;
  new(arg0: j_org_bukkit_block.BlockFace): Observer_2;
}

/** JVM interface org.bukkit.material.Openable. */
export interface Openable_2Members {
  isOpen(): boolean;
  setOpen(arg0: boolean): void;
}
export type Openable_2 = Openable_2Members;
export interface Openable_2Statics {
}

/** JVM class org.bukkit.material.PistonBaseMaterial. */
export interface PistonBaseMaterialMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): PistonBaseMaterial;
  getFacing(): j_org_bukkit_block.BlockFace;
  isPowered(): boolean;
  isSticky(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setPowered(arg0: boolean): void;
}
export type PistonBaseMaterial = PistonBaseMaterialMembers & MaterialData & Directional_2 & Redstone;
export interface PistonBaseMaterialStatics {
  new(arg0: j_org_bukkit.Material): PistonBaseMaterial;
  new(arg0: j_org_bukkit.Material, arg1: number): PistonBaseMaterial;
}

/** JVM class org.bukkit.material.PistonExtensionMaterial. */
export interface PistonExtensionMaterialMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Attachable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): PistonExtensionMaterial;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  getFacing(): j_org_bukkit_block.BlockFace;
  isSticky(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setSticky(arg0: boolean): void;
}
export type PistonExtensionMaterial = PistonExtensionMaterialMembers & MaterialData & Attachable_2;
export interface PistonExtensionMaterialStatics {
  new(arg0: j_org_bukkit.Material): PistonExtensionMaterial;
  new(arg0: j_org_bukkit.Material, arg1: number): PistonExtensionMaterial;
}

/** JVM class org.bukkit.material.PoweredRail. */
export interface PoweredRailMembers {
  readonly __javaSupertypes?: readonly [ExtendedRails, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): ExtendedRails;
  clone(): MaterialData;
  clone(): PoweredRail;
  clone(): Rails;
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
}
export type PoweredRail = PoweredRailMembers & ExtendedRails & Redstone;
export interface PoweredRailStatics {
  new(): PoweredRail;
  new(arg0: j_org_bukkit.Material): PoweredRail;
  new(arg0: j_org_bukkit.Material, arg1: number): PoweredRail;
}

/** JVM class org.bukkit.material.PressurePlate. */
export interface PressurePlateMembers {
  readonly __javaSupertypes?: readonly [MaterialData, PressureSensor];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): PressurePlate;
  isPressed(): boolean;
  toString(): string;
}
export type PressurePlate = PressurePlateMembers & MaterialData & PressureSensor;
export interface PressurePlateStatics {
  new(): PressurePlate;
  new(arg0: j_org_bukkit.Material): PressurePlate;
  new(arg0: j_org_bukkit.Material, arg1: number): PressurePlate;
}

/** JVM interface org.bukkit.material.PressureSensor. */
export interface PressureSensorMembers {
  isPressed(): boolean;
}
export type PressureSensor = PressureSensorMembers;
export interface PressureSensorStatics {
}

/** JVM class org.bukkit.material.Pumpkin. */
export interface PumpkinMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Pumpkin;
  getFacing(): j_org_bukkit_block.BlockFace;
  isLit(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Pumpkin = PumpkinMembers & MaterialData & Directional_2;
export interface PumpkinStatics {
  new(): Pumpkin;
  new(arg0: j_org_bukkit.Material): Pumpkin;
  new(arg0: j_org_bukkit.Material, arg1: number): Pumpkin;
  new(arg0: j_org_bukkit_block.BlockFace): Pumpkin;
}

/** JVM class org.bukkit.material.Rails. */
export interface RailsMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Rails;
  getConvertedData(): number;
  getDirection(): j_org_bukkit_block.BlockFace;
  isCurve(): boolean;
  isOnSlope(): boolean;
  setDirection(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): void;
  toString(): string;
}
export type Rails = RailsMembers & MaterialData;
export interface RailsStatics {
  new(): Rails;
  new(arg0: j_org_bukkit.Material): Rails;
  new(arg0: j_org_bukkit.Material, arg1: number): Rails;
}

/** JVM interface org.bukkit.material.Redstone. */
export interface RedstoneMembers {
  isPowered(): boolean;
}
export type Redstone = RedstoneMembers;
export interface RedstoneStatics {
}

/** JVM class org.bukkit.material.RedstoneTorch. */
export interface RedstoneTorchMembers {
  readonly __javaSupertypes?: readonly [Torch, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): RedstoneTorch;
  clone(): SimpleAttachableMaterialData;
  clone(): Torch;
  isPowered(): boolean;
  toString(): string;
}
export type RedstoneTorch = RedstoneTorchMembers & Torch & Redstone;
export interface RedstoneTorchStatics {
  new(): RedstoneTorch;
  new(arg0: j_org_bukkit.Material): RedstoneTorch;
  new(arg0: j_org_bukkit.Material, arg1: number): RedstoneTorch;
}

/** JVM class org.bukkit.material.RedstoneWire. */
export interface RedstoneWire_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): RedstoneWire_2;
  isPowered(): boolean;
  toString(): string;
}
export type RedstoneWire_2 = RedstoneWire_2Members & MaterialData & Redstone;
export interface RedstoneWire_2Statics {
  new(): RedstoneWire_2;
  new(arg0: j_org_bukkit.Material): RedstoneWire_2;
  new(arg0: j_org_bukkit.Material, arg1: number): RedstoneWire_2;
}

/** JVM class org.bukkit.material.Sandstone. */
export interface SandstoneMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Sandstone;
  getType(): j_org_bukkit.SandstoneType;
  setType(arg0: j_org_bukkit.SandstoneType): void;
  toString(): string;
}
export type Sandstone = SandstoneMembers & MaterialData;
export interface SandstoneStatics {
  new(): Sandstone;
  new(arg0: j_org_bukkit.Material): Sandstone;
  new(arg0: j_org_bukkit.Material, arg1: number): Sandstone;
  new(arg0: j_org_bukkit.SandstoneType): Sandstone;
}

/** JVM class org.bukkit.material.Sapling. */
export interface Sapling_2Members {
  readonly __javaSupertypes?: readonly [Wood];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Sapling_2;
  clone(): Wood;
  isInstantGrowable(): boolean;
  setIsInstantGrowable(arg0: boolean): void;
  toString(): string;
}
export type Sapling_2 = Sapling_2Members & Wood;
export interface Sapling_2Statics {
  new(): Sapling_2;
  new(arg0: j_org_bukkit.Material): Sapling_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Sapling_2;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies): Sapling_2;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies, arg2: boolean): Sapling_2;
  new(arg0: j_org_bukkit.TreeSpecies): Sapling_2;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: boolean): Sapling_2;
}

/** JVM class org.bukkit.material.Sign. */
export interface Sign_3Members {
  readonly __javaSupertypes?: readonly [MaterialData, Attachable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Sign_3;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  getFacing(): j_org_bukkit_block.BlockFace;
  isWallSign(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Sign_3 = Sign_3Members & MaterialData & Attachable_2;
export interface Sign_3Statics {
  new(): Sign_3;
  new(arg0: j_org_bukkit.Material): Sign_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Sign_3;
}

/** JVM abstract org.bukkit.material.SimpleAttachableMaterialData. */
export interface SimpleAttachableMaterialDataMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Attachable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  getFacing(): j_org_bukkit_block.BlockFace;
  toString(): string;
}
export type SimpleAttachableMaterialData = SimpleAttachableMaterialDataMembers & MaterialData & Attachable_2;
export interface SimpleAttachableMaterialDataStatics {
  new(arg0: j_org_bukkit.Material): SimpleAttachableMaterialData;
  new(arg0: j_org_bukkit.Material, arg1: number): SimpleAttachableMaterialData;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit_block.BlockFace): SimpleAttachableMaterialData;
}

/** JVM class org.bukkit.material.Skull. */
export interface Skull_3Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Skull_3;
  getFacing(): j_org_bukkit_block.BlockFace;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Skull_3 = Skull_3Members & MaterialData & Directional_2;
export interface Skull_3Statics {
  new(): Skull_3;
  new(arg0: j_org_bukkit.Material): Skull_3;
  new(arg0: j_org_bukkit.Material, arg1: number): Skull_3;
  new(arg0: j_org_bukkit_block.BlockFace): Skull_3;
}

/** JVM class org.bukkit.material.SmoothBrick. */
export interface SmoothBrickMembers {
  readonly __javaSupertypes?: readonly [TexturedMaterial];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): SmoothBrick;
  clone(): TexturedMaterial;
  getTextures(): JavaList<j_org_bukkit.Material>;
}
export type SmoothBrick = SmoothBrickMembers & TexturedMaterial;
export interface SmoothBrickStatics {
  new(): SmoothBrick;
  new(arg0: j_org_bukkit.Material): SmoothBrick;
  new(arg0: j_org_bukkit.Material, arg1: number): SmoothBrick;
}

/** JVM class org.bukkit.material.SpawnEgg. */
export interface SpawnEggMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): SpawnEgg;
  getSpawnedType(): j_org_bukkit_entity.EntityType;
  setSpawnedType(arg0: j_org_bukkit_entity.EntityType): void;
  toString(): string;
}
export type SpawnEgg = SpawnEggMembers & MaterialData;
export interface SpawnEggStatics {
  new(): SpawnEgg;
  new(arg0: number): SpawnEgg;
  new(arg0: j_org_bukkit.Material, arg1: number): SpawnEgg;
  new(arg0: j_org_bukkit_entity.EntityType): SpawnEgg;
}

/** JVM class org.bukkit.material.Stairs. */
export interface Stairs_2Members {
  readonly __javaSupertypes?: readonly [MaterialData, Directional_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Stairs_2;
  getAscendingDirection(): j_org_bukkit_block.BlockFace;
  getDescendingDirection(): j_org_bukkit_block.BlockFace;
  getFacing(): j_org_bukkit_block.BlockFace;
  isInverted(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setInverted(arg0: boolean): void;
  toString(): string;
}
export type Stairs_2 = Stairs_2Members & MaterialData & Directional_2;
export interface Stairs_2Statics {
  new(arg0: j_org_bukkit.Material): Stairs_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Stairs_2;
}

/** JVM class org.bukkit.material.Step. */
export interface StepMembers {
  readonly __javaSupertypes?: readonly [TexturedMaterial];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Step;
  clone(): TexturedMaterial;
  getTextureIndex(): number;
  getTextures(): JavaList<j_org_bukkit.Material>;
  isInverted(): boolean;
  setInverted(arg0: boolean): void;
  setTextureIndex(arg0: number): void;
  toString(): string;
}
export type Step = StepMembers & TexturedMaterial;
export interface StepStatics {
  new(): Step;
  new(arg0: j_org_bukkit.Material): Step;
  new(arg0: j_org_bukkit.Material, arg1: number): Step;
}

/** JVM abstract org.bukkit.material.TexturedMaterial. */
export interface TexturedMaterialMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): TexturedMaterial;
  getMaterial(): j_org_bukkit.Material;
  getTextureIndex(): number;
  getTextures(): JavaList<j_org_bukkit.Material>;
  setMaterial(arg0: j_org_bukkit.Material): void;
  setTextureIndex(arg0: number): void;
  toString(): string;
}
export type TexturedMaterial = TexturedMaterialMembers & MaterialData;
export interface TexturedMaterialStatics {
  new(arg0: j_org_bukkit.Material): TexturedMaterial;
  new(arg0: j_org_bukkit.Material, arg1: number): TexturedMaterial;
}

/** JVM class org.bukkit.material.Torch. */
export interface TorchMembers {
  readonly __javaSupertypes?: readonly [SimpleAttachableMaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  clone(): Torch;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
}
export type Torch = TorchMembers & SimpleAttachableMaterialData;
export interface TorchStatics {
  new(): Torch;
  new(arg0: j_org_bukkit.Material): Torch;
  new(arg0: j_org_bukkit.Material, arg1: number): Torch;
}

/** JVM class org.bukkit.material.TrapDoor. */
export interface TrapDoor_2Members {
  readonly __javaSupertypes?: readonly [SimpleAttachableMaterialData, Openable_2];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  clone(): TrapDoor_2;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  isInverted(): boolean;
  isOpen(): boolean;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  setInverted(arg0: boolean): void;
  setOpen(arg0: boolean): void;
  toString(): string;
}
export type TrapDoor_2 = TrapDoor_2Members & SimpleAttachableMaterialData & Openable_2;
export interface TrapDoor_2Statics {
  new(): TrapDoor_2;
  new(arg0: j_org_bukkit.Material): TrapDoor_2;
  new(arg0: j_org_bukkit.Material, arg1: number): TrapDoor_2;
}

/** JVM class org.bukkit.material.Tree. */
export interface TreeMembers {
  readonly __javaSupertypes?: readonly [Wood];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Tree;
  clone(): Wood;
  getDirection(): j_org_bukkit_block.BlockFace;
  setDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Tree = TreeMembers & Wood;
export interface TreeStatics {
  new(): Tree;
  new(arg0: j_org_bukkit.Material): Tree;
  new(arg0: j_org_bukkit.Material, arg1: number): Tree;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies): Tree;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies, arg2: j_org_bukkit_block.BlockFace): Tree;
  new(arg0: j_org_bukkit.TreeSpecies): Tree;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: j_org_bukkit_block.BlockFace): Tree;
  readonly DEFAULT_DIRECTION: j_org_bukkit_block.BlockFace;
  readonly DEFAULT_TYPE: j_org_bukkit.Material;
}

/** JVM class org.bukkit.material.Tripwire. */
export interface Tripwire_2Members {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Tripwire_2;
  isActivated(): boolean;
  isObjectTriggering(): boolean;
  setActivated(arg0: boolean): void;
  setObjectTriggering(arg0: boolean): void;
  toString(): string;
}
export type Tripwire_2 = Tripwire_2Members & MaterialData;
export interface Tripwire_2Statics {
  new(): Tripwire_2;
  new(arg0: j_org_bukkit.Material, arg1: number): Tripwire_2;
}

/** JVM class org.bukkit.material.TripwireHook. */
export interface TripwireHook_2Members {
  readonly __javaSupertypes?: readonly [SimpleAttachableMaterialData, Redstone];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): SimpleAttachableMaterialData;
  clone(): TripwireHook_2;
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  isActivated(): boolean;
  isConnected(): boolean;
  isPowered(): boolean;
  setActivated(arg0: boolean): void;
  setConnected(arg0: boolean): void;
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type TripwireHook_2 = TripwireHook_2Members & SimpleAttachableMaterialData & Redstone;
export interface TripwireHook_2Statics {
  new(): TripwireHook_2;
  new(arg0: j_org_bukkit.Material, arg1: number): TripwireHook_2;
  new(arg0: j_org_bukkit_block.BlockFace): TripwireHook_2;
}

/** JVM class org.bukkit.material.Vine. */
export interface VineMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Vine;
  isOnFace(arg0: j_org_bukkit_block.BlockFace): boolean;
  putOnFace(arg0: j_org_bukkit_block.BlockFace): void;
  removeFromFace(arg0: j_org_bukkit_block.BlockFace): void;
  toString(): string;
}
export type Vine = VineMembers & MaterialData;
export interface VineStatics {
  new(): Vine;
  new(arg0: number): Vine;
  new(arg0: JavaOpaque<"java.util.EnumSet", [j_org_bukkit_block.BlockFace]>): Vine;
  new(arg0: j_org_bukkit.Material, arg1: number): Vine;
  new(...arg0: Array<j_org_bukkit_block.BlockFace>): Vine;
}

/** JVM class org.bukkit.material.Wood. */
export interface WoodMembers {
  readonly __javaSupertypes?: readonly [MaterialData];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Wood;
  getSpecies(): j_org_bukkit.TreeSpecies;
  setSpecies(arg0: j_org_bukkit.TreeSpecies): void;
  toString(): string;
}
export type Wood = WoodMembers & MaterialData;
export interface WoodStatics {
  new(): Wood;
  new(arg0: j_org_bukkit.Material): Wood;
  new(arg0: j_org_bukkit.Material, arg1: number): Wood;
  new(arg0: j_org_bukkit.Material, arg1: j_org_bukkit.TreeSpecies): Wood;
  new(arg0: j_org_bukkit.TreeSpecies): Wood;
  readonly DEFAULT_SPECIES: j_org_bukkit.TreeSpecies;
  readonly DEFAULT_TYPE: j_org_bukkit.Material;
}

/** JVM class org.bukkit.material.WoodenStep. */
export interface WoodenStepMembers {
  readonly __javaSupertypes?: readonly [Wood];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Wood;
  clone(): WoodenStep;
  isInverted(): boolean;
  setInverted(arg0: boolean): void;
  toString(): string;
}
export type WoodenStep = WoodenStepMembers & Wood;
export interface WoodenStepStatics {
  new(): WoodenStep;
  new(arg0: j_org_bukkit.Material, arg1: number): WoodenStep;
  new(arg0: j_org_bukkit.TreeSpecies): WoodenStep;
  new(arg0: j_org_bukkit.TreeSpecies, arg1: boolean): WoodenStep;
  readonly DEFAULT_INVERTED: 0;
  readonly DEFAULT_TYPE: j_org_bukkit.Material;
}

/** JVM class org.bukkit.material.Wool. */
export interface WoolMembers {
  readonly __javaSupertypes?: readonly [MaterialData, Colorable];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): MaterialData;
  clone(): Wool;
  getColor(): j_org_bukkit.DyeColor;
  setColor(arg0: j_org_bukkit.DyeColor): void;
  toString(): string;
}
export type Wool = WoolMembers & MaterialData & Colorable;
export interface WoolStatics {
  new(): Wool;
  new(arg0: j_org_bukkit.DyeColor): Wool;
  new(arg0: j_org_bukkit.Material): Wool;
  new(arg0: j_org_bukkit.Material, arg1: number): Wool;
}
