// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_org_bukkit_craftbukkit_block_data from './org.bukkit.craftbukkit.block.data.generated.js';

/** JVM class org.bukkit.craftbukkit.block.impl.CraftAmethystCluster. */
export interface CraftAmethystClusterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.AmethystCluster">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftAmethystCluster = CraftAmethystClusterMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.AmethystCluster">;
export interface CraftAmethystClusterStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftAmethystCluster;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftAnvil. */
export interface CraftAnvilMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftAnvil = CraftAnvilMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftAnvilStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftAnvil;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftAttachedStem. */
export interface CraftAttachedStemMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftAttachedStem = CraftAttachedStemMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftAttachedStemStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftAttachedStem;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBambooStalk. */
export interface CraftBambooStalkMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Bamboo">];
  getAge(): number;
  getLeaves(): JavaOpaque<"org.bukkit.block.data.type.Bamboo$Leaves">;
  getMaximumAge(): number;
  getMaximumStage(): number;
  getStage(): number;
  setAge(arg0: number): void;
  setLeaves(arg0: JavaOpaque<"org.bukkit.block.data.type.Bamboo$Leaves">): void;
  setStage(arg0: number): void;
}
export type CraftBambooStalk = CraftBambooStalkMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Bamboo">;
export interface CraftBambooStalkStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBambooStalk;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBanner. */
export interface CraftBanner_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Rotatable">];
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftBanner_2 = CraftBanner_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Rotatable">;
export interface CraftBanner_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBanner_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBarrel. */
export interface CraftBarrel_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Barrel">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isOpen(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setOpen(arg0: boolean): void;
}
export type CraftBarrel_2 = CraftBarrel_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Barrel">;
export interface CraftBarrel_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBarrel_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBarrier. */
export interface CraftBarrierMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftBarrier = CraftBarrierMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftBarrierStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBarrier;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBaseCoralFan. */
export interface CraftBaseCoralFanMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftBaseCoralFan = CraftBaseCoralFanMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftBaseCoralFanStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBaseCoralFan;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBaseCoralPlant. */
export interface CraftBaseCoralPlantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftBaseCoralPlant = CraftBaseCoralPlantMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftBaseCoralPlantStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBaseCoralPlant;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBaseCoralWallFan. */
export interface CraftBaseCoralWallFanMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CoralWallFan">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftBaseCoralWallFan = CraftBaseCoralWallFanMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CoralWallFan">;
export interface CraftBaseCoralWallFanStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBaseCoralWallFan;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBed. */
export interface CraftBed_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Bed">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getPart(): JavaOpaque<"org.bukkit.block.data.type.Bed$Part">;
  isOccupied(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setOccupied(arg0: boolean): void;
  setPart(arg0: JavaOpaque<"org.bukkit.block.data.type.Bed$Part">): void;
}
export type CraftBed_2 = CraftBed_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Bed">;
export interface CraftBed_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBed_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBeehive. */
export interface CraftBeehive_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Beehive">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHoneyLevel(): number;
  getMaximumHoneyLevel(): number;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHoneyLevel(arg0: number): void;
}
export type CraftBeehive_2 = CraftBeehive_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Beehive">;
export interface CraftBeehive_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBeehive_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBeetroot. */
export interface CraftBeetrootMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftBeetroot = CraftBeetrootMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftBeetrootStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBeetroot;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBell. */
export interface CraftBell_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Bell">];
  getAttachment(): JavaOpaque<"org.bukkit.block.data.type.Bell$Attachment">;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setAttachment(arg0: JavaOpaque<"org.bukkit.block.data.type.Bell$Attachment">): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftBell_2 = CraftBell_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Bell">;
export interface CraftBell_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBell_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBigDripleaf. */
export interface CraftBigDripleafMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.BigDripleaf">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getTilt(): JavaOpaque<"org.bukkit.block.data.type.BigDripleaf$Tilt">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setTilt(arg0: JavaOpaque<"org.bukkit.block.data.type.BigDripleaf$Tilt">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftBigDripleaf = CraftBigDripleafMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.BigDripleaf">;
export interface CraftBigDripleafStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBigDripleaf;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBigDripleafStem. */
export interface CraftBigDripleafStemMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Dripleaf">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftBigDripleafStem = CraftBigDripleafStemMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Dripleaf">;
export interface CraftBigDripleafStemStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBigDripleafStem;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBlastFurnace. */
export interface CraftBlastFurnace_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Furnace">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isLit(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setLit(arg0: boolean): void;
}
export type CraftBlastFurnace_2 = CraftBlastFurnace_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Furnace">;
export interface CraftBlastFurnace_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBlastFurnace_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBrewingStand. */
export interface CraftBrewingStand_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.BrewingStand">];
  getBottles(): JavaSet<number>;
  getMaximumBottles(): number;
  hasBottle(arg0: number): boolean;
  setBottle(arg0: number, arg1: boolean): void;
}
export type CraftBrewingStand_2 = CraftBrewingStand_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.BrewingStand">;
export interface CraftBrewingStand_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBrewingStand_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBrushable. */
export interface CraftBrushableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Brushable">];
  getDusted(): number;
  getMaximumDusted(): number;
  setDusted(arg0: number): void;
}
export type CraftBrushable = CraftBrushableMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Brushable">;
export interface CraftBrushableStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBrushable;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftBubbleColumn. */
export interface CraftBubbleColumnMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.BubbleColumn">];
  isDrag(): boolean;
  setDrag(arg0: boolean): void;
}
export type CraftBubbleColumn = CraftBubbleColumnMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.BubbleColumn">;
export interface CraftBubbleColumnStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBubbleColumn;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftButton. */
export interface CraftButtonMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Switch">];
  getAttachedFace(): JavaOpaque<"org.bukkit.block.data.FaceAttachable$AttachedFace">;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setAttachedFace(arg0: JavaOpaque<"org.bukkit.block.data.FaceAttachable$AttachedFace">): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftButton = CraftButtonMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Switch">;
export interface CraftButtonStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftButton;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCactus. */
export interface CraftCactusMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftCactus = CraftCactusMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftCactusStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCactus;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCake. */
export interface CraftCakeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Cake">];
  getBites(): number;
  getMaximumBites(): number;
  setBites(arg0: number): void;
}
export type CraftCake = CraftCakeMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Cake">;
export interface CraftCakeStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCake;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCalibratedSculkSensor. */
export interface CraftCalibratedSculkSensor_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CalibratedSculkSensor">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMaximumPower(): number;
  getPower(): number;
  getSculkSensorPhase(): JavaOpaque<"org.bukkit.block.data.type.SculkSensor$Phase">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPower(arg0: number): void;
  setSculkSensorPhase(arg0: JavaOpaque<"org.bukkit.block.data.type.SculkSensor$Phase">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCalibratedSculkSensor_2 = CraftCalibratedSculkSensor_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CalibratedSculkSensor">;
export interface CraftCalibratedSculkSensor_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCalibratedSculkSensor_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCampfire. */
export interface CraftCampfire_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Campfire">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isLit(): boolean;
  isSignalFire(): boolean;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setLit(arg0: boolean): void;
  setSignalFire(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCampfire_2 = CraftCampfire_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Campfire">;
export interface CraftCampfire_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCampfire_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCandle. */
export interface CraftCandleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Candle">];
  getCandles(): number;
  getMaximumCandles(): number;
  getMinimumCandles(): number;
  isLit(): boolean;
  isWaterlogged(): boolean;
  setCandles(arg0: number): void;
  setLit(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCandle = CraftCandleMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Candle">;
export interface CraftCandleStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCandle;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCandleCake. */
export interface CraftCandleCakeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Lightable">];
  isLit(): boolean;
  setLit(arg0: boolean): void;
}
export type CraftCandleCake = CraftCandleCakeMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Lightable">;
export interface CraftCandleCakeStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCandleCake;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCarrot. */
export interface CraftCarrotMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftCarrot = CraftCarrotMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftCarrotStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCarrot;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCarvedPumpkin. */
export interface CraftCarvedPumpkinMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftCarvedPumpkin = CraftCarvedPumpkinMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftCarvedPumpkinStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCarvedPumpkin;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCaveVines. */
export interface CraftCaveVinesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CaveVines">];
  getAge(): number;
  getMaximumAge(): number;
  hasBerries(): boolean;
  setAge(arg0: number): void;
  setBerries(arg0: boolean): void;
}
export type CraftCaveVines = CraftCaveVinesMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CaveVines">;
export interface CraftCaveVinesStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCaveVines;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCaveVinesPlant. */
export interface CraftCaveVinesPlantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CaveVinesPlant">];
  hasBerries(): boolean;
  setBerries(arg0: boolean): void;
}
export type CraftCaveVinesPlant = CraftCaveVinesPlantMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CaveVinesPlant">;
export interface CraftCaveVinesPlantStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCaveVinesPlant;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCeilingHangingSign. */
export interface CraftCeilingHangingSignMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.HangingSign">];
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isAttached(): boolean;
  isWaterlogged(): boolean;
  setAttached(arg0: boolean): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCeilingHangingSign = CraftCeilingHangingSignMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.HangingSign">;
export interface CraftCeilingHangingSignStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCeilingHangingSign;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftChain. */
export interface CraftChainMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Chain">];
  getAxes(): JavaSet<JavaOpaque<"org.bukkit.Axis">>;
  getAxis(): JavaOpaque<"org.bukkit.Axis">;
  isWaterlogged(): boolean;
  setAxis(arg0: JavaOpaque<"org.bukkit.Axis">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftChain = CraftChainMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Chain">;
export interface CraftChainStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftChain;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftChest. */
export interface CraftChest_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Chest">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getType(): JavaOpaque<"org.bukkit.block.data.type.Chest$Type">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.data.type.Chest$Type">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftChest_2 = CraftChest_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Chest">;
export interface CraftChest_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftChest_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftChiseledBookShelf. */
export interface CraftChiseledBookShelfMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.ChiseledBookshelf">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMaximumOccupiedSlots(): number;
  getOccupiedSlots(): JavaSet<number>;
  isSlotOccupied(arg0: number): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setSlotOccupied(arg0: number, arg1: boolean): void;
}
export type CraftChiseledBookShelf = CraftChiseledBookShelfMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.ChiseledBookshelf">;
export interface CraftChiseledBookShelfStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftChiseledBookShelf;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftChorusFlower. */
export interface CraftChorusFlowerMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftChorusFlower = CraftChorusFlowerMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftChorusFlowerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftChorusFlower;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftChorusPlant. */
export interface CraftChorusPlantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.MultipleFacing">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
}
export type CraftChorusPlant = CraftChorusPlantMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.MultipleFacing">;
export interface CraftChorusPlantStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftChorusPlant;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCocoa. */
export interface CraftCocoaMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Cocoa">];
  getAge(): number;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMaximumAge(): number;
  setAge(arg0: number): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftCocoa = CraftCocoaMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Cocoa">;
export interface CraftCocoaStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCocoa;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCommandBlock. */
export interface CraftCommandBlock_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CommandBlock">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isConditional(): boolean;
  setConditional(arg0: boolean): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftCommandBlock_2 = CraftCommandBlock_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CommandBlock">;
export interface CraftCommandBlock_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCommandBlock_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftComparator. */
export interface CraftComparator_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Comparator">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMode(): JavaOpaque<"org.bukkit.block.data.type.Comparator$Mode">;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setMode(arg0: JavaOpaque<"org.bukkit.block.data.type.Comparator$Mode">): void;
  setPowered(arg0: boolean): void;
}
export type CraftComparator_2 = CraftComparator_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Comparator">;
export interface CraftComparator_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftComparator_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftComposter. */
export interface CraftComposterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Levelled">];
  getLevel(): number;
  getMaximumLevel(): number;
  getMinimumLevel(): number;
  setLevel(arg0: number): void;
}
export type CraftComposter = CraftComposterMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Levelled">;
export interface CraftComposterStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftComposter;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftConduit. */
export interface CraftConduit_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftConduit_2 = CraftConduit_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftConduit_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftConduit_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCopperBulb. */
export interface CraftCopperBulbMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CopperBulb">];
  isLit(): boolean;
  isPowered(): boolean;
  setLit(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftCopperBulb = CraftCopperBulbMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CopperBulb">;
export interface CraftCopperBulbStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCopperBulb;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCoralFan. */
export interface CraftCoralFanMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCoralFan = CraftCoralFanMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftCoralFanStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCoralFan;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCoralPlant. */
export interface CraftCoralPlantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCoralPlant = CraftCoralPlantMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftCoralPlantStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCoralPlant;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCoralWallFan. */
export interface CraftCoralWallFanMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CoralWallFan">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftCoralWallFan = CraftCoralWallFanMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CoralWallFan">;
export interface CraftCoralWallFanStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCoralWallFan;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCrafter. */
export interface CraftCrafter_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Crafter">];
  getOrientation(): JavaOpaque<"org.bukkit.block.Orientation">;
  isCrafting(): boolean;
  isTriggered(): boolean;
  setCrafting(arg0: boolean): void;
  setOrientation(arg0: JavaOpaque<"org.bukkit.block.Orientation">): void;
  setTriggered(arg0: boolean): void;
}
export type CraftCrafter_2 = CraftCrafter_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Crafter">;
export interface CraftCrafter_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCrafter_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCreakingHeart. */
export interface CraftCreakingHeart_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CreakingHeart">];
  getAxes(): JavaSet<JavaOpaque<"org.bukkit.Axis">>;
  getAxis(): JavaOpaque<"org.bukkit.Axis">;
  getCreakingHeartState(): JavaOpaque<"org.bukkit.block.data.type.CreakingHeart$State">;
  isNatural(): boolean;
  setAxis(arg0: JavaOpaque<"org.bukkit.Axis">): void;
  setCreakingHeartState(arg0: JavaOpaque<"org.bukkit.block.data.type.CreakingHeart$State">): void;
  setNatural(arg0: boolean): void;
}
export type CraftCreakingHeart_2 = CraftCreakingHeart_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CreakingHeart">;
export interface CraftCreakingHeart_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCreakingHeart_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftCrop. */
export interface CraftCropMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftCrop = CraftCropMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftCropStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftCrop;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDaylightDetector. */
export interface CraftDaylightDetector_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.DaylightDetector">];
  getMaximumPower(): number;
  getPower(): number;
  isInverted(): boolean;
  setInverted(arg0: boolean): void;
  setPower(arg0: number): void;
}
export type CraftDaylightDetector_2 = CraftDaylightDetector_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.DaylightDetector">;
export interface CraftDaylightDetector_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDaylightDetector_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDecoratedPot. */
export interface CraftDecoratedPot_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.DecoratedPot">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isCracked(): boolean;
  isWaterlogged(): boolean;
  setCracked(arg0: boolean): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftDecoratedPot_2 = CraftDecoratedPot_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.DecoratedPot">;
export interface CraftDecoratedPot_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDecoratedPot_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDetectorRail. */
export interface CraftDetectorRailMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.RedstoneRail">];
  getShape(): JavaOpaque<"org.bukkit.block.data.Rail$Shape">;
  getShapes(): JavaSet<JavaOpaque<"org.bukkit.block.data.Rail$Shape">>;
  isPowered(): boolean;
  isWaterlogged(): boolean;
  setPowered(arg0: boolean): void;
  setShape(arg0: JavaOpaque<"org.bukkit.block.data.Rail$Shape">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftDetectorRail = CraftDetectorRailMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.RedstoneRail">;
export interface CraftDetectorRailStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDetectorRail;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDispenser. */
export interface CraftDispenser_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Dispenser">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isTriggered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setTriggered(arg0: boolean): void;
}
export type CraftDispenser_2 = CraftDispenser_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Dispenser">;
export interface CraftDispenser_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDispenser_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDoor. */
export interface CraftDoorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Door">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  getHinge(): JavaOpaque<"org.bukkit.block.data.type.Door$Hinge">;
  isOpen(): boolean;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setHinge(arg0: JavaOpaque<"org.bukkit.block.data.type.Door$Hinge">): void;
  setOpen(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftDoor = CraftDoorMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Door">;
export interface CraftDoorStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDoor;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDoublePlant. */
export interface CraftDoublePlantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Bisected">];
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
}
export type CraftDoublePlant = CraftDoublePlantMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Bisected">;
export interface CraftDoublePlantStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDoublePlant;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDriedGhast. */
export interface CraftDriedGhastMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.DriedGhast">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHydration(): number;
  getMaximumHydration(): number;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHydration(arg0: number): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftDriedGhast = CraftDriedGhastMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.DriedGhast">;
export interface CraftDriedGhastStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDriedGhast;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftDropper. */
export interface CraftDropper_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Dispenser">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isTriggered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setTriggered(arg0: boolean): void;
}
export type CraftDropper_2 = CraftDropper_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Dispenser">;
export interface CraftDropper_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftDropper_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftEnderChest. */
export interface CraftEnderChest_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.EnderChest">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftEnderChest_2 = CraftEnderChest_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.EnderChest">;
export interface CraftEnderChest_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftEnderChest_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftEndPortalFrame. */
export interface CraftEndPortalFrameMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.EndPortalFrame">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  hasEye(): boolean;
  setEye(arg0: boolean): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftEndPortalFrame = CraftEndPortalFrameMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.EndPortalFrame">;
export interface CraftEndPortalFrameStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftEndPortalFrame;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftEndRod. */
export interface CraftEndRodMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftEndRod = CraftEndRodMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftEndRodStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftEndRod;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFarm. */
export interface CraftFarmMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Farmland">];
  getMaximumMoisture(): number;
  getMoisture(): number;
  setMoisture(arg0: number): void;
}
export type CraftFarm = CraftFarmMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Farmland">;
export interface CraftFarmStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFarm;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFence. */
export interface CraftFenceMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Fence">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isWaterlogged(): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftFence = CraftFenceMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Fence">;
export interface CraftFenceStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFence;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFenceGate. */
export interface CraftFenceGateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Gate">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isInWall(): boolean;
  isOpen(): boolean;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setInWall(arg0: boolean): void;
  setOpen(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftFenceGate = CraftFenceGateMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Gate">;
export interface CraftFenceGateStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFenceGate;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFire. */
export interface CraftFireMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Fire">];
  getAge(): number;
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getMaximumAge(): number;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  setAge(arg0: number): void;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
}
export type CraftFire = CraftFireMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Fire">;
export interface CraftFireStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFire;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFlowerBed. */
export interface CraftFlowerBedMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.FlowerBed">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getFlowerAmount(): number;
  getMaximumFlowerAmount(): number;
  getMinimumFlowerAmount(): number;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setFlowerAmount(arg0: number): void;
}
export type CraftFlowerBed = CraftFlowerBedMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.FlowerBed">;
export interface CraftFlowerBedStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFlowerBed;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFrostedIce. */
export interface CraftFrostedIceMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftFrostedIce = CraftFrostedIceMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftFrostedIceStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFrostedIce;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftFurnace. */
export interface CraftFurnace_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Furnace">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isLit(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setLit(arg0: boolean): void;
}
export type CraftFurnace_2 = CraftFurnace_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Furnace">;
export interface CraftFurnace_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftFurnace_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftGlazedTerracotta. */
export interface CraftGlazedTerracottaMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftGlazedTerracotta = CraftGlazedTerracottaMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftGlazedTerracottaStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftGlazedTerracotta;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftGlowLichen. */
export interface CraftGlowLichenMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.GlowLichen">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isWaterlogged(): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftGlowLichen = CraftGlowLichenMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.GlowLichen">;
export interface CraftGlowLichenStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftGlowLichen;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftGrass. */
export interface CraftGrassMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Snowable">];
  isSnowy(): boolean;
  setSnowy(arg0: boolean): void;
}
export type CraftGrass = CraftGrassMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Snowable">;
export interface CraftGrassStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftGrass;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftGrindstone. */
export interface CraftGrindstoneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Grindstone">];
  getAttachedFace(): JavaOpaque<"org.bukkit.block.data.FaceAttachable$AttachedFace">;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setAttachedFace(arg0: JavaOpaque<"org.bukkit.block.data.FaceAttachable$AttachedFace">): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftGrindstone = CraftGrindstoneMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Grindstone">;
export interface CraftGrindstoneStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftGrindstone;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftHangingMoss. */
export interface CraftHangingMossMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.HangingMoss">];
  isTip(): boolean;
  setTip(arg0: boolean): void;
}
export type CraftHangingMoss = CraftHangingMossMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.HangingMoss">;
export interface CraftHangingMossStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftHangingMoss;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftHangingRoots. */
export interface CraftHangingRootsMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftHangingRoots = CraftHangingRootsMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftHangingRootsStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftHangingRoots;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftHay. */
export interface CraftHayMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Orientable">];
  getAxes(): JavaSet<JavaOpaque<"org.bukkit.Axis">>;
  getAxis(): JavaOpaque<"org.bukkit.Axis">;
  setAxis(arg0: JavaOpaque<"org.bukkit.Axis">): void;
}
export type CraftHay = CraftHayMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Orientable">;
export interface CraftHayStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftHay;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftHeavyCore. */
export interface CraftHeavyCoreMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftHeavyCore = CraftHeavyCoreMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftHeavyCoreStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftHeavyCore;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftHopper. */
export interface CraftHopper_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Hopper">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isEnabled(): boolean;
  setEnabled(arg0: boolean): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftHopper_2 = CraftHopper_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Hopper">;
export interface CraftHopper_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftHopper_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftHugeMushroom. */
export interface CraftHugeMushroomMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.MultipleFacing">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
}
export type CraftHugeMushroom = CraftHugeMushroomMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.MultipleFacing">;
export interface CraftHugeMushroomStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftHugeMushroom;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftInfestedRotatedPillar. */
export interface CraftInfestedRotatedPillarMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Orientable">];
  getAxes(): JavaSet<JavaOpaque<"org.bukkit.Axis">>;
  getAxis(): JavaOpaque<"org.bukkit.Axis">;
  setAxis(arg0: JavaOpaque<"org.bukkit.Axis">): void;
}
export type CraftInfestedRotatedPillar = CraftInfestedRotatedPillarMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Orientable">;
export interface CraftInfestedRotatedPillarStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftInfestedRotatedPillar;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftIronBars. */
export interface CraftIronBarsMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Fence">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isWaterlogged(): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftIronBars = CraftIronBarsMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Fence">;
export interface CraftIronBarsStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftIronBars;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftJigsaw. */
export interface CraftJigsaw_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Jigsaw">];
  getOrientation(): JavaOpaque<"org.bukkit.block.Orientation">;
  setOrientation(arg0: JavaOpaque<"org.bukkit.block.Orientation">): void;
}
export type CraftJigsaw_2 = CraftJigsaw_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Jigsaw">;
export interface CraftJigsaw_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftJigsaw_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftJukebox. */
export interface CraftJukebox_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Jukebox">];
  hasRecord(): boolean;
  setHasRecord(arg0: boolean): void;
}
export type CraftJukebox_2 = CraftJukebox_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Jukebox">;
export interface CraftJukebox_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftJukebox_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftKelp. */
export interface CraftKelpMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftKelp = CraftKelpMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftKelpStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftKelp;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLadder. */
export interface CraftLadderMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Ladder">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftLadder = CraftLadderMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Ladder">;
export interface CraftLadderStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLadder;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLantern. */
export interface CraftLanternMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Lantern">];
  isHanging(): boolean;
  isWaterlogged(): boolean;
  setHanging(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftLantern = CraftLanternMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Lantern">;
export interface CraftLanternStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLantern;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLayeredCauldron. */
export interface CraftLayeredCauldronMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Levelled">];
  getLevel(): number;
  getMaximumLevel(): number;
  getMinimumLevel(): number;
  setLevel(arg0: number): void;
}
export type CraftLayeredCauldron = CraftLayeredCauldronMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Levelled">;
export interface CraftLayeredCauldronStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLayeredCauldron;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLeafLitter. */
export interface CraftLeafLitterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.LeafLitter">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMaximumSegmentAmount(): number;
  getMinimumSegmentAmount(): number;
  getSegmentAmount(): number;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setSegmentAmount(arg0: number): void;
}
export type CraftLeafLitter = CraftLeafLitterMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.LeafLitter">;
export interface CraftLeafLitterStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLeafLitter;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLectern. */
export interface CraftLectern_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Lectern">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  hasBook(): boolean;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHasBook(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftLectern_2 = CraftLectern_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Lectern">;
export interface CraftLectern_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLectern_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLever. */
export interface CraftLeverMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Switch">];
  getAttachedFace(): JavaOpaque<"org.bukkit.block.data.FaceAttachable$AttachedFace">;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setAttachedFace(arg0: JavaOpaque<"org.bukkit.block.data.FaceAttachable$AttachedFace">): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftLever = CraftLeverMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Switch">;
export interface CraftLeverStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLever;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLight. */
export interface CraftLightMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Light">];
  getLevel(): number;
  getMaximumLevel(): number;
  getMinimumLevel(): number;
  isWaterlogged(): boolean;
  setLevel(arg0: number): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftLight = CraftLightMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Light">;
export interface CraftLightStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLight;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLightningRod. */
export interface CraftLightningRodMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.LightningRod">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftLightningRod = CraftLightningRodMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.LightningRod">;
export interface CraftLightningRodStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLightningRod;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLiquid. */
export interface CraftLiquidMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Levelled">];
  getLevel(): number;
  getMaximumLevel(): number;
  getMinimumLevel(): number;
  setLevel(arg0: number): void;
}
export type CraftLiquid = CraftLiquidMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Levelled">;
export interface CraftLiquidStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLiquid;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftLoom. */
export interface CraftLoomMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftLoom = CraftLoomMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftLoomStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftLoom;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMangroveLeaves. */
export interface CraftMangroveLeavesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Leaves">];
  getDistance(): number;
  getMaximumDistance(): number;
  getMinimumDistance(): number;
  isPersistent(): boolean;
  isWaterlogged(): boolean;
  setDistance(arg0: number): void;
  setPersistent(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftMangroveLeaves = CraftMangroveLeavesMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Leaves">;
export interface CraftMangroveLeavesStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMangroveLeaves;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMangrovePropagule. */
export interface CraftMangrovePropaguleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.MangrovePropagule">];
  getAge(): number;
  getMaximumAge(): number;
  getMaximumStage(): number;
  getStage(): number;
  isHanging(): boolean;
  isWaterlogged(): boolean;
  setAge(arg0: number): void;
  setHanging(arg0: boolean): void;
  setStage(arg0: number): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftMangrovePropagule = CraftMangrovePropaguleMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.MangrovePropagule">;
export interface CraftMangrovePropaguleStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMangrovePropagule;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMangroveRoots. */
export interface CraftMangroveRootsMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftMangroveRoots = CraftMangroveRootsMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftMangroveRootsStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMangroveRoots;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMossyCarpet. */
export interface CraftMossyCarpetMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.MossyCarpet">];
  getHeight(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): JavaOpaque<"org.bukkit.block.data.type.Wall$Height">;
  isBottom(): boolean;
  setBottom(arg0: boolean): void;
  setHeight(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: JavaOpaque<"org.bukkit.block.data.type.Wall$Height">): void;
}
export type CraftMossyCarpet = CraftMossyCarpetMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.MossyCarpet">;
export interface CraftMossyCarpetStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMossyCarpet;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMovingPiston. */
export interface CraftMovingPiston_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TechnicalPiston">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getType(): JavaOpaque<"org.bukkit.block.data.type.TechnicalPiston$Type">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.data.type.TechnicalPiston$Type">): void;
}
export type CraftMovingPiston_2 = CraftMovingPiston_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TechnicalPiston">;
export interface CraftMovingPiston_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMovingPiston_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMultiface. */
export interface CraftMultifaceMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.ResinClump">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isWaterlogged(): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftMultiface = CraftMultifaceMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.ResinClump">;
export interface CraftMultifaceStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMultiface;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftMycelium. */
export interface CraftMyceliumMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Snowable">];
  isSnowy(): boolean;
  setSnowy(arg0: boolean): void;
}
export type CraftMycelium = CraftMyceliumMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Snowable">;
export interface CraftMyceliumStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftMycelium;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftNetherPortal. */
export interface CraftNetherPortalMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Orientable">];
  getAxes(): JavaSet<JavaOpaque<"org.bukkit.Axis">>;
  getAxis(): JavaOpaque<"org.bukkit.Axis">;
  setAxis(arg0: JavaOpaque<"org.bukkit.Axis">): void;
}
export type CraftNetherPortal = CraftNetherPortalMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Orientable">;
export interface CraftNetherPortalStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftNetherPortal;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftNetherWart. */
export interface CraftNetherWartMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftNetherWart = CraftNetherWartMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftNetherWartStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftNetherWart;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftNoteBlock. */
export interface CraftNoteBlockMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.NoteBlock">];
  getInstrument(): JavaOpaque<"org.bukkit.Instrument">;
  getNote(): JavaOpaque<"org.bukkit.Note">;
  isPowered(): boolean;
  setInstrument(arg0: JavaOpaque<"org.bukkit.Instrument">): void;
  setNote(arg0: JavaOpaque<"org.bukkit.Note">): void;
  setPowered(arg0: boolean): void;
}
export type CraftNoteBlock = CraftNoteBlockMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.NoteBlock">;
export interface CraftNoteBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftNoteBlock;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftObserver. */
export interface CraftObserverMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Observer">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftObserver = CraftObserverMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Observer">;
export interface CraftObserverStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftObserver;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPiglinWallSkull. */
export interface CraftPiglinWallSkullMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.WallSkull">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftPiglinWallSkull = CraftPiglinWallSkullMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.WallSkull">;
export interface CraftPiglinWallSkullStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPiglinWallSkull;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPistonBase. */
export interface CraftPistonBaseMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Piston">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isExtended(): boolean;
  setExtended(arg0: boolean): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftPistonBase = CraftPistonBaseMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Piston">;
export interface CraftPistonBaseStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPistonBase;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPistonHead. */
export interface CraftPistonHeadMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.PistonHead">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getType(): JavaOpaque<"org.bukkit.block.data.type.TechnicalPiston$Type">;
  isShort(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setShort(arg0: boolean): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.data.type.TechnicalPiston$Type">): void;
}
export type CraftPistonHead = CraftPistonHeadMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.PistonHead">;
export interface CraftPistonHeadStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPistonHead;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPitcherCrop. */
export interface CraftPitcherCropMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.PitcherCrop">];
  getAge(): number;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  getMaximumAge(): number;
  setAge(arg0: number): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
}
export type CraftPitcherCrop = CraftPitcherCropMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.PitcherCrop">;
export interface CraftPitcherCropStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPitcherCrop;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPlayerHead. */
export interface CraftPlayerHeadMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Skull">];
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftPlayerHead = CraftPlayerHeadMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Skull">;
export interface CraftPlayerHeadStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPlayerHead;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPlayerWallHead. */
export interface CraftPlayerWallHeadMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.WallSkull">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftPlayerWallHead = CraftPlayerWallHeadMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.WallSkull">;
export interface CraftPlayerWallHeadStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPlayerWallHead;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPointedDripstone. */
export interface CraftPointedDripstoneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.PointedDripstone">];
  getThickness(): JavaOpaque<"org.bukkit.block.data.type.PointedDripstone$Thickness">;
  getVerticalDirection(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getVerticalDirections(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  isWaterlogged(): boolean;
  setThickness(arg0: JavaOpaque<"org.bukkit.block.data.type.PointedDripstone$Thickness">): void;
  setVerticalDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftPointedDripstone = CraftPointedDripstoneMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.PointedDripstone">;
export interface CraftPointedDripstoneStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPointedDripstone;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPotato. */
export interface CraftPotatoMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftPotato = CraftPotatoMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftPotatoStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPotato;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPoweredRail. */
export interface CraftPoweredRailMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.RedstoneRail">];
  getShape(): JavaOpaque<"org.bukkit.block.data.Rail$Shape">;
  getShapes(): JavaSet<JavaOpaque<"org.bukkit.block.data.Rail$Shape">>;
  isPowered(): boolean;
  isWaterlogged(): boolean;
  setPowered(arg0: boolean): void;
  setShape(arg0: JavaOpaque<"org.bukkit.block.data.Rail$Shape">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftPoweredRail = CraftPoweredRailMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.RedstoneRail">;
export interface CraftPoweredRailStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPoweredRail;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftPressurePlate. */
export interface CraftPressurePlateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Powerable">];
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
}
export type CraftPressurePlate = CraftPressurePlateMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Powerable">;
export interface CraftPressurePlateStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftPressurePlate;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRail. */
export interface CraftRailMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Rail">];
  getShape(): JavaOpaque<"org.bukkit.block.data.Rail$Shape">;
  getShapes(): JavaSet<JavaOpaque<"org.bukkit.block.data.Rail$Shape">>;
  isWaterlogged(): boolean;
  setShape(arg0: JavaOpaque<"org.bukkit.block.data.Rail$Shape">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftRail = CraftRailMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Rail">;
export interface CraftRailStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRail;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRedstoneLamp. */
export interface CraftRedstoneLampMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Lightable">];
  isLit(): boolean;
  setLit(arg0: boolean): void;
}
export type CraftRedstoneLamp = CraftRedstoneLampMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Lightable">;
export interface CraftRedstoneLampStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRedstoneLamp;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRedStoneOre. */
export interface CraftRedStoneOreMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Lightable">];
  isLit(): boolean;
  setLit(arg0: boolean): void;
}
export type CraftRedStoneOre = CraftRedStoneOreMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Lightable">;
export interface CraftRedStoneOreStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRedStoneOre;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRedstoneTorch. */
export interface CraftRedstoneTorchMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Lightable">];
  isLit(): boolean;
  setLit(arg0: boolean): void;
}
export type CraftRedstoneTorch = CraftRedstoneTorchMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Lightable">;
export interface CraftRedstoneTorchStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRedstoneTorch;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRedstoneWallTorch. */
export interface CraftRedstoneWallTorchMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.RedstoneWallTorch">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isLit(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setLit(arg0: boolean): void;
}
export type CraftRedstoneWallTorch = CraftRedstoneWallTorchMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.RedstoneWallTorch">;
export interface CraftRedstoneWallTorchStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRedstoneWallTorch;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRedStoneWire. */
export interface CraftRedStoneWireMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.RedstoneWire">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): JavaOpaque<"org.bukkit.block.data.type.RedstoneWire$Connection">;
  getMaximumPower(): number;
  getPower(): number;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: JavaOpaque<"org.bukkit.block.data.type.RedstoneWire$Connection">): void;
  setPower(arg0: number): void;
}
export type CraftRedStoneWire = CraftRedStoneWireMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.RedstoneWire">;
export interface CraftRedStoneWireStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRedStoneWire;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRepeater. */
export interface CraftRepeaterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Repeater">];
  getDelay(): number;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getMaximumDelay(): number;
  getMinimumDelay(): number;
  isLocked(): boolean;
  isPowered(): boolean;
  setDelay(arg0: number): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setLocked(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftRepeater = CraftRepeaterMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Repeater">;
export interface CraftRepeaterStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRepeater;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRespawnAnchor. */
export interface CraftRespawnAnchorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.RespawnAnchor">];
  getCharges(): number;
  getMaximumCharges(): number;
  setCharges(arg0: number): void;
}
export type CraftRespawnAnchor = CraftRespawnAnchorMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.RespawnAnchor">;
export interface CraftRespawnAnchorStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRespawnAnchor;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftRotatedPillar. */
export interface CraftRotatedPillarMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Orientable">];
  getAxes(): JavaSet<JavaOpaque<"org.bukkit.Axis">>;
  getAxis(): JavaOpaque<"org.bukkit.Axis">;
  setAxis(arg0: JavaOpaque<"org.bukkit.Axis">): void;
}
export type CraftRotatedPillar = CraftRotatedPillarMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Orientable">;
export interface CraftRotatedPillarStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftRotatedPillar;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSapling. */
export interface CraftSaplingMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Sapling">];
  getMaximumStage(): number;
  getStage(): number;
  setStage(arg0: number): void;
}
export type CraftSapling = CraftSaplingMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Sapling">;
export interface CraftSaplingStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSapling;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftScaffolding. */
export interface CraftScaffoldingMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Scaffolding">];
  getDistance(): number;
  getMaximumDistance(): number;
  isBottom(): boolean;
  isWaterlogged(): boolean;
  setBottom(arg0: boolean): void;
  setDistance(arg0: number): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftScaffolding = CraftScaffoldingMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Scaffolding">;
export interface CraftScaffoldingStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftScaffolding;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSculkCatalyst. */
export interface CraftSculkCatalyst_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.SculkCatalyst">];
  isBloom(): boolean;
  setBloom(arg0: boolean): void;
}
export type CraftSculkCatalyst_2 = CraftSculkCatalyst_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.SculkCatalyst">;
export interface CraftSculkCatalyst_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSculkCatalyst_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSculkSensor. */
export interface CraftSculkSensor_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.SculkSensor">];
  getMaximumPower(): number;
  getPower(): number;
  getSculkSensorPhase(): JavaOpaque<"org.bukkit.block.data.type.SculkSensor$Phase">;
  isWaterlogged(): boolean;
  setPower(arg0: number): void;
  setSculkSensorPhase(arg0: JavaOpaque<"org.bukkit.block.data.type.SculkSensor$Phase">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftSculkSensor_2 = CraftSculkSensor_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.SculkSensor">;
export interface CraftSculkSensor_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSculkSensor_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSculkShrieker. */
export interface CraftSculkShrieker_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.SculkShrieker">];
  isCanSummon(): boolean;
  isShrieking(): boolean;
  isWaterlogged(): boolean;
  setCanSummon(arg0: boolean): void;
  setShrieking(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftSculkShrieker_2 = CraftSculkShrieker_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.SculkShrieker">;
export interface CraftSculkShrieker_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSculkShrieker_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSculkVein. */
export interface CraftSculkVeinMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.SculkVein">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isWaterlogged(): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftSculkVein = CraftSculkVeinMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.SculkVein">;
export interface CraftSculkVeinStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSculkVein;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSeaPickle. */
export interface CraftSeaPickleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.SeaPickle">];
  getMaximumPickles(): number;
  getMinimumPickles(): number;
  getPickles(): number;
  isWaterlogged(): boolean;
  setPickles(arg0: number): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftSeaPickle = CraftSeaPickleMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.SeaPickle">;
export interface CraftSeaPickleStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSeaPickle;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftShulkerBox. */
export interface CraftShulkerBox_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftShulkerBox_2 = CraftShulkerBox_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftShulkerBox_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftShulkerBox_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSkull. */
export interface CraftSkull_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Skull">];
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftSkull_2 = CraftSkull_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Skull">;
export interface CraftSkull_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSkull_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSlab. */
export interface CraftSlabMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Slab">];
  getType(): JavaOpaque<"org.bukkit.block.data.type.Slab$Type">;
  isWaterlogged(): boolean;
  setType(arg0: JavaOpaque<"org.bukkit.block.data.type.Slab$Type">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftSlab = CraftSlabMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Slab">;
export interface CraftSlabStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSlab;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSmallDripleaf. */
export interface CraftSmallDripleafMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.SmallDripleaf">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftSmallDripleaf = CraftSmallDripleafMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.SmallDripleaf">;
export interface CraftSmallDripleafStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSmallDripleaf;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSmoker. */
export interface CraftSmoker_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Furnace">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isLit(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setLit(arg0: boolean): void;
}
export type CraftSmoker_2 = CraftSmoker_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Furnace">;
export interface CraftSmoker_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSmoker_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSnifferEgg. */
export interface CraftSnifferEggMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Hatchable">];
  getHatch(): number;
  getMaximumHatch(): number;
  setHatch(arg0: number): void;
}
export type CraftSnifferEgg = CraftSnifferEggMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Hatchable">;
export interface CraftSnifferEggStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSnifferEgg;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSnowLayer. */
export interface CraftSnowLayerMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Snow">];
  getLayers(): number;
  getMaximumLayers(): number;
  getMinimumLayers(): number;
  setLayers(arg0: number): void;
}
export type CraftSnowLayer = CraftSnowLayerMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Snow">;
export interface CraftSnowLayerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSnowLayer;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSnowyDirt. */
export interface CraftSnowyDirtMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Snowable">];
  isSnowy(): boolean;
  setSnowy(arg0: boolean): void;
}
export type CraftSnowyDirt = CraftSnowyDirtMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Snowable">;
export interface CraftSnowyDirtStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSnowyDirt;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftStainedGlassPane. */
export interface CraftStainedGlassPaneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.GlassPane">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isWaterlogged(): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftStainedGlassPane = CraftStainedGlassPaneMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.GlassPane">;
export interface CraftStainedGlassPaneStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftStainedGlassPane;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftStair. */
export interface CraftStairMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Stairs">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  getShape(): JavaOpaque<"org.bukkit.block.data.type.Stairs$Shape">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setShape(arg0: JavaOpaque<"org.bukkit.block.data.type.Stairs$Shape">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftStair = CraftStairMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Stairs">;
export interface CraftStairStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftStair;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftStandingSign. */
export interface CraftStandingSignMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Sign">];
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftStandingSign = CraftStandingSignMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Sign">;
export interface CraftStandingSignStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftStandingSign;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftStem. */
export interface CraftStemMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftStem = CraftStemMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftStemStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftStem;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftStonecutter. */
export interface CraftStonecutterMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftStonecutter = CraftStonecutterMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftStonecutterStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftStonecutter;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftStructureBlock. */
export interface CraftStructureBlock_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.StructureBlock">];
  getMode(): JavaOpaque<"org.bukkit.block.data.type.StructureBlock$Mode">;
  setMode(arg0: JavaOpaque<"org.bukkit.block.data.type.StructureBlock$Mode">): void;
}
export type CraftStructureBlock_2 = CraftStructureBlock_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.StructureBlock">;
export interface CraftStructureBlock_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftStructureBlock_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSugarCane. */
export interface CraftSugarCaneMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftSugarCane = CraftSugarCaneMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftSugarCaneStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSugarCane;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftSweetBerryBush. */
export interface CraftSweetBerryBushMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftSweetBerryBush = CraftSweetBerryBushMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftSweetBerryBushStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftSweetBerryBush;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTallFlower. */
export interface CraftTallFlowerMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Bisected">];
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
}
export type CraftTallFlower = CraftTallFlowerMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Bisected">;
export interface CraftTallFlowerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTallFlower;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTallSeagrass. */
export interface CraftTallSeagrassMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Bisected">];
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
}
export type CraftTallSeagrass = CraftTallSeagrassMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Bisected">;
export interface CraftTallSeagrassStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTallSeagrass;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTarget. */
export interface CraftTargetMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.AnaloguePowerable">];
  getMaximumPower(): number;
  getPower(): number;
  setPower(arg0: number): void;
}
export type CraftTarget = CraftTargetMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.AnaloguePowerable">;
export interface CraftTargetStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTarget;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTestBlock. */
export interface CraftTestBlock_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TestBlock">];
  getMode(): JavaOpaque<"org.bukkit.block.data.type.TestBlock$Mode">;
  setMode(arg0: JavaOpaque<"org.bukkit.block.data.type.TestBlock$Mode">): void;
}
export type CraftTestBlock_2 = CraftTestBlock_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TestBlock">;
export interface CraftTestBlock_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTestBlock_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTintedParticleLeaves. */
export interface CraftTintedParticleLeavesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Leaves">];
  getDistance(): number;
  getMaximumDistance(): number;
  getMinimumDistance(): number;
  isPersistent(): boolean;
  isWaterlogged(): boolean;
  setDistance(arg0: number): void;
  setPersistent(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftTintedParticleLeaves = CraftTintedParticleLeavesMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Leaves">;
export interface CraftTintedParticleLeavesStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTintedParticleLeaves;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTnt. */
export interface CraftTntMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TNT">];
  isUnstable(): boolean;
  setUnstable(arg0: boolean): void;
}
export type CraftTnt = CraftTntMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TNT">;
export interface CraftTntStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTnt;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTorchflowerCrop. */
export interface CraftTorchflowerCropMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftTorchflowerCrop = CraftTorchflowerCropMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftTorchflowerCropStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTorchflowerCrop;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTrapDoor. */
export interface CraftTrapDoorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TrapDoor">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  isOpen(): boolean;
  isPowered(): boolean;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setOpen(arg0: boolean): void;
  setPowered(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftTrapDoor = CraftTrapDoorMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TrapDoor">;
export interface CraftTrapDoorStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTrapDoor;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTrappedChest. */
export interface CraftTrappedChestMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Chest">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getType(): JavaOpaque<"org.bukkit.block.data.type.Chest$Type">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.data.type.Chest$Type">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftTrappedChest = CraftTrappedChestMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Chest">;
export interface CraftTrappedChestStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTrappedChest;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTrialSpawner. */
export interface CraftTrialSpawner_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TrialSpawner">];
  getTrialSpawnerState(): JavaOpaque<"org.bukkit.block.data.type.TrialSpawner$State">;
  isOminous(): boolean;
  setOminous(arg0: boolean): void;
  setTrialSpawnerState(arg0: JavaOpaque<"org.bukkit.block.data.type.TrialSpawner$State">): void;
}
export type CraftTrialSpawner_2 = CraftTrialSpawner_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TrialSpawner">;
export interface CraftTrialSpawner_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTrialSpawner_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTripWire. */
export interface CraftTripWireMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Tripwire">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  isAttached(): boolean;
  isDisarmed(): boolean;
  isPowered(): boolean;
  setAttached(arg0: boolean): void;
  setDisarmed(arg0: boolean): void;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftTripWire = CraftTripWireMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Tripwire">;
export interface CraftTripWireStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTripWire;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTripWireHook. */
export interface CraftTripWireHookMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TripwireHook">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isAttached(): boolean;
  isPowered(): boolean;
  setAttached(arg0: boolean): void;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftTripWireHook = CraftTripWireHookMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TripwireHook">;
export interface CraftTripWireHookStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTripWireHook;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTurtleEgg. */
export interface CraftTurtleEggMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TurtleEgg">];
  getEggs(): number;
  getHatch(): number;
  getMaximumEggs(): number;
  getMaximumHatch(): number;
  getMinimumEggs(): number;
  setEggs(arg0: number): void;
  setHatch(arg0: number): void;
}
export type CraftTurtleEgg = CraftTurtleEggMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TurtleEgg">;
export interface CraftTurtleEggStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTurtleEgg;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftTwistingVines. */
export interface CraftTwistingVinesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftTwistingVines = CraftTwistingVinesMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftTwistingVinesStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftTwistingVines;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftUntintedParticleLeaves. */
export interface CraftUntintedParticleLeavesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Leaves">];
  getDistance(): number;
  getMaximumDistance(): number;
  getMinimumDistance(): number;
  isPersistent(): boolean;
  isWaterlogged(): boolean;
  setDistance(arg0: number): void;
  setPersistent(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftUntintedParticleLeaves = CraftUntintedParticleLeavesMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Leaves">;
export interface CraftUntintedParticleLeavesStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftUntintedParticleLeaves;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftVault. */
export interface CraftVault_2Members {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Vault">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getVaultState(): JavaOpaque<"org.bukkit.block.data.type.Vault$State">;
  isOminous(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setOminous(arg0: boolean): void;
  setVaultState(arg0: JavaOpaque<"org.bukkit.block.data.type.Vault$State">): void;
}
export type CraftVault_2 = CraftVault_2Members & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Vault">;
export interface CraftVault_2Statics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftVault_2;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftVine. */
export interface CraftVineMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.MultipleFacing">];
  getAllowedFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  hasFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): boolean;
  setFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): void;
}
export type CraftVine = CraftVineMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.MultipleFacing">;
export interface CraftVineStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftVine;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWall. */
export interface CraftWallMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Wall">];
  getHeight(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): JavaOpaque<"org.bukkit.block.data.type.Wall$Height">;
  isUp(): boolean;
  isWaterlogged(): boolean;
  setHeight(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: JavaOpaque<"org.bukkit.block.data.type.Wall$Height">): void;
  setUp(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWall = CraftWallMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Wall">;
export interface CraftWallStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWall;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWallBanner. */
export interface CraftWallBannerMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftWallBanner = CraftWallBannerMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftWallBannerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWallBanner;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWallHangingSign. */
export interface CraftWallHangingSignMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.WallHangingSign">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWallHangingSign = CraftWallHangingSignMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.WallHangingSign">;
export interface CraftWallHangingSignStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWallHangingSign;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWallSign. */
export interface CraftWallSignMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.WallSign">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWallSign = CraftWallSignMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.WallSign">;
export interface CraftWallSignStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWallSign;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWallSkull. */
export interface CraftWallSkullMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.WallSkull">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftWallSkull = CraftWallSkullMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.WallSkull">;
export interface CraftWallSkullStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWallSkull;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWallTorch. */
export interface CraftWallTorchMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Directional">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftWallTorch = CraftWallTorchMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Directional">;
export interface CraftWallTorchStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWallTorch;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWaterloggedTransparent. */
export interface CraftWaterloggedTransparentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWaterloggedTransparent = CraftWaterloggedTransparentMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftWaterloggedTransparentStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWaterloggedTransparent;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeatheringCopperBulb. */
export interface CraftWeatheringCopperBulbMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.CopperBulb">];
  isLit(): boolean;
  isPowered(): boolean;
  setLit(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftWeatheringCopperBulb = CraftWeatheringCopperBulbMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.CopperBulb">;
export interface CraftWeatheringCopperBulbStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeatheringCopperBulb;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeatheringCopperDoor. */
export interface CraftWeatheringCopperDoorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Door">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  getHinge(): JavaOpaque<"org.bukkit.block.data.type.Door$Hinge">;
  isOpen(): boolean;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setHinge(arg0: JavaOpaque<"org.bukkit.block.data.type.Door$Hinge">): void;
  setOpen(arg0: boolean): void;
  setPowered(arg0: boolean): void;
}
export type CraftWeatheringCopperDoor = CraftWeatheringCopperDoorMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Door">;
export interface CraftWeatheringCopperDoorStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeatheringCopperDoor;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeatheringCopperGrate. */
export interface CraftWeatheringCopperGrateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Waterlogged">];
  isWaterlogged(): boolean;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWeatheringCopperGrate = CraftWeatheringCopperGrateMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Waterlogged">;
export interface CraftWeatheringCopperGrateStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeatheringCopperGrate;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeatheringCopperSlab. */
export interface CraftWeatheringCopperSlabMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Slab">];
  getType(): JavaOpaque<"org.bukkit.block.data.type.Slab$Type">;
  isWaterlogged(): boolean;
  setType(arg0: JavaOpaque<"org.bukkit.block.data.type.Slab$Type">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWeatheringCopperSlab = CraftWeatheringCopperSlabMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Slab">;
export interface CraftWeatheringCopperSlabStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeatheringCopperSlab;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeatheringCopperStair. */
export interface CraftWeatheringCopperStairMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Stairs">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  getShape(): JavaOpaque<"org.bukkit.block.data.type.Stairs$Shape">;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setShape(arg0: JavaOpaque<"org.bukkit.block.data.type.Stairs$Shape">): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWeatheringCopperStair = CraftWeatheringCopperStairMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Stairs">;
export interface CraftWeatheringCopperStairStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeatheringCopperStair;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeatheringCopperTrapDoor. */
export interface CraftWeatheringCopperTrapDoorMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.TrapDoor">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHalf(): JavaOpaque<"org.bukkit.block.data.Bisected$Half">;
  isOpen(): boolean;
  isPowered(): boolean;
  isWaterlogged(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setHalf(arg0: JavaOpaque<"org.bukkit.block.data.Bisected$Half">): void;
  setOpen(arg0: boolean): void;
  setPowered(arg0: boolean): void;
  setWaterlogged(arg0: boolean): void;
}
export type CraftWeatheringCopperTrapDoor = CraftWeatheringCopperTrapDoorMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.TrapDoor">;
export interface CraftWeatheringCopperTrapDoorStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeatheringCopperTrapDoor;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeepingVines. */
export interface CraftWeepingVinesMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.Ageable">];
  getAge(): number;
  getMaximumAge(): number;
  setAge(arg0: number): void;
}
export type CraftWeepingVines = CraftWeepingVinesMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.Ageable">;
export interface CraftWeepingVinesStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeepingVines;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWeightedPressurePlate. */
export interface CraftWeightedPressurePlateMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.AnaloguePowerable">];
  getMaximumPower(): number;
  getPower(): number;
  setPower(arg0: number): void;
}
export type CraftWeightedPressurePlate = CraftWeightedPressurePlateMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.AnaloguePowerable">;
export interface CraftWeightedPressurePlateStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWeightedPressurePlate;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWitherSkull. */
export interface CraftWitherSkullMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.Skull">];
  getRotation(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setPowered(arg0: boolean): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
}
export type CraftWitherSkull = CraftWitherSkullMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.Skull">;
export interface CraftWitherSkullStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWitherSkull;
}

/** JVM class org.bukkit.craftbukkit.block.impl.CraftWitherWallSkull. */
export interface CraftWitherWallSkullMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_craftbukkit_block_data.CraftBlockData, JavaOpaque<"org.bukkit.block.data.type.WallSkull">];
  getFaces(): JavaSet<JavaOpaque<"org.bukkit.block.BlockFace">>;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  isPowered(): boolean;
  setFacing(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setPowered(arg0: boolean): void;
}
export type CraftWitherWallSkull = CraftWitherWallSkullMembers & j_org_bukkit_craftbukkit_block_data.CraftBlockData & JavaOpaque<"org.bukkit.block.data.type.WallSkull">;
export interface CraftWitherWallSkullStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftWitherWallSkull;
}
