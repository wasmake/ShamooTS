// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM abstract net.minecraft.world.entity.vehicle.AbstractBoat. */
export interface AbstractBoatMembers {
  readonly __javaSupertypes?: readonly [VehicleEntity, j_net_minecraft_world_entity.Leashable];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  animateHurt(arg0: number): void;
  canAddPassenger(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canBeCollidedWith(arg0: j_net_minecraft_world_entity.Entity | null): boolean | null;
  canCollideWith(arg0: j_net_minecraft_world_entity.Entity): boolean;
  checkFallDamage(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos): void;
  clampRotation(arg0: j_net_minecraft_world_entity.Entity): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getBubbleAngle(arg0: number): number;
  getControllingPassenger(): j_net_minecraft_world_entity.LivingEntity | null;
  getDefaultGravity(): number;
  getDismountLocationForPassenger(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec3;
  getDropItem(): j_net_minecraft_world_item.Item;
  getGroundFriction(): number;
  getInterpolation(): j_net_minecraft_world_entity.InterpolationHandler;
  getLeashData(): j_net_minecraft_world_entity.Leashable_LeashData | null;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getMaxPassengers(): number;
  getMotionDirection(): j_net_minecraft_core.Direction;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getPaddleSound(): j_net_minecraft_sounds.SoundEvent | null;
  getPaddleState(arg0: number): boolean;
  getPassengerAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.EntityDimensions, arg2: number): j_net_minecraft_world_phys.Vec3;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getQuadLeashOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getRelativePortalPosition(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft.BlockUtil_FoundRectangle): j_net_minecraft_world_phys.Vec3;
  getRowingTime(arg0: number, arg1: number): number;
  getSinglePassengerXOffset(): number;
  getStatus(): AbstractBoat_Status;
  getWaterLevelAbove(): number;
  hasEnoughSpaceFor(arg0: j_net_minecraft_world_entity.Entity): boolean;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  isCollidable(arg0: boolean): boolean;
  isPickable(): boolean;
  isUnderWater(): boolean;
  landBoats: boolean;
  maxSpeed: number;
  occupiedDeceleration: number;
  onAboveBubbleColumn(arg0: boolean, arg1: j_net_minecraft_core.BlockPos): void;
  onPassengerTurned(arg0: j_net_minecraft_world_entity.Entity): void;
  positionRider(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity_MoveFunction): void;
  push(arg0: j_net_minecraft_world_entity.Entity): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  remove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  rideHeight(arg0: j_net_minecraft_world_entity.EntityDimensions): number;
  setInitialPos(arg0: number, arg1: number, arg2: number): void;
  setInput(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void;
  setLeashData(arg0: j_net_minecraft_world_entity.Leashable_LeashData | null): void | null;
  setPaddleState(arg0: boolean, arg1: boolean): void;
  status: AbstractBoat_Status;
  supportQuadLeash(): boolean;
  tick(): void;
  unoccupiedDeceleration: number;
}
export type AbstractBoat = AbstractBoatMembers & VehicleEntity & j_net_minecraft_world_entity.Leashable;
export interface AbstractBoatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractBoat>, arg1: j_net_minecraft_world_level.Level, arg2: JavaSupplier<j_net_minecraft_world_item.Item>): AbstractBoat;
  readonly BUBBLE_TIME: 60;
  readonly PADDLE_LEFT: 0;
  readonly PADDLE_RIGHT: 1;
  readonly PADDLE_SOUND_TIME: 0.7853981852531433;
  canVehicleCollide(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity): boolean;
}

/** Live JVM enum net.minecraft.world.entity.vehicle.AbstractBoat$Status; constants are host handles, not strings. */
export type AbstractBoat_Status = JavaEnum<"net.minecraft.world.entity.vehicle.AbstractBoat$Status", "IN_AIR" | "IN_WATER" | "ON_LAND" | "UNDER_FLOWING_WATER" | "UNDER_WATER"> & AbstractBoat_StatusMembers;
export interface AbstractBoat_StatusMembers {
}
export interface AbstractBoat_StatusStatics {
  readonly IN_AIR: AbstractBoat_Status;
  readonly IN_WATER: AbstractBoat_Status;
  readonly ON_LAND: AbstractBoat_Status;
  readonly UNDER_FLOWING_WATER: AbstractBoat_Status;
  readonly UNDER_WATER: AbstractBoat_Status;
  valueOf(arg0: string): AbstractBoat_Status;
  values(): Array<AbstractBoat_Status>;
}

/** JVM abstract net.minecraft.world.entity.vehicle.AbstractChestBoat. */
export interface AbstractChestBoatMembers {
  readonly __javaSupertypes?: readonly [AbstractBoat, j_net_minecraft_world_entity.HasCustomInventoryScreen, ContainerEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  clearContent(): void;
  clearItemStacks(): void;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu | null;
  destroy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  getContainerLootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  getContainerLootTableSeed(): bigint;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getItemStacks(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaxPassengers(): number;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getSinglePassengerXOffset(): number;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  lootableData(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventoryData">;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  openCustomInventoryScreen(arg0: j_net_minecraft_world_entity_player.Player): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  remove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChanged(): void;
  setContainerLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null): void | null;
  setContainerLootTableSeed(arg0: bigint): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  unpackLootTable(arg0: j_net_minecraft_world_entity_player.Player | null): void | null;
}
export type AbstractChestBoat = AbstractChestBoatMembers & AbstractBoat & j_net_minecraft_world_entity.HasCustomInventoryScreen & ContainerEntity;
export interface AbstractChestBoatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractChestBoat>, arg1: j_net_minecraft_world_level.Level, arg2: JavaSupplier<j_net_minecraft_world_item.Item>): AbstractChestBoat;
}

/** JVM abstract net.minecraft.world.entity.vehicle.AbstractMinecart. */
export interface AbstractMinecartMembers {
  readonly __javaSupertypes?: readonly [VehicleEntity];
  activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  animateHurt(arg0: number): void;
  applyEffectsFromBlocks(): void;
  applyGravity(): void;
  applyNaturalSlowdown(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  canCollideWith(arg0: j_net_minecraft_world_entity.Entity): boolean;
  comeOffTrack(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  frictionState: JavaOpaque<"net.kyori.adventure.util.TriState">;
  getBehavior(): MinecartBehavior;
  getBlockSpeedFactor(): number;
  getCurrentBlockPosOrRailBelow(): j_net_minecraft_core.BlockPos;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDefaultDisplayOffset(): number;
  getDefaultGravity(): number;
  getDerailedVelocityMod(): JavaOpaque<"org.bukkit.util.Vector">;
  getDismountLocationForPassenger(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_phys.Vec3;
  getDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDisplayOffset(): number;
  getFlyingVelocityMod(): JavaOpaque<"org.bukkit.util.Vector">;
  getInterpolation(): j_net_minecraft_world_entity.InterpolationHandler;
  getKnownMovement(): j_net_minecraft_world_phys.Vec3;
  getMaxSpeed(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getMotionDirection(): j_net_minecraft_core.Direction;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getPassengerAttachmentPoint(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.EntityDimensions, arg2: number): j_net_minecraft_world_phys.Vec3;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getRedstoneDirection(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3;
  getRelativePortalPosition(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft.BlockUtil_FoundRectangle): j_net_minecraft_world_phys.Vec3;
  isCollidable(arg0: boolean): boolean;
  isFirstTick(): boolean;
  isFlipped(): boolean;
  isFurnace(): boolean;
  isOnRails(): boolean;
  isPickable(): boolean;
  isRedstoneConductor(arg0: j_net_minecraft_core.BlockPos): boolean;
  isRideable(): boolean;
  lerpMotion(arg0: number, arg1: number, arg2: number): void;
  lerpPositionAndRotationStep(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  makeStepAlongTrack(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.RailShape, arg2: number): number;
  maxSpeed: number | null;
  move(arg0: j_net_minecraft_world_entity.MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  moveAlongTrack(arg0: j_net_minecraft_server_level.ServerLevel): void;
  push(arg0: j_net_minecraft_world_entity.Entity): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  reapplyPosition(): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  setCustomDisplayBlockState(arg0: JavaOptional<j_net_minecraft_world_level_block_state.BlockState>): void;
  setDerailedVelocityMod(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setDisplayOffset(arg0: number): void;
  setFlipped(arg0: boolean): void;
  setFlyingVelocityMod(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setInitialPos(arg0: number, arg1: number, arg2: number): void;
  setOnRails(arg0: boolean): void;
  slowWhenEmpty: boolean;
  tick(): void;
  updateInWaterStateAndDoFluidPushing(): boolean;
}
export type AbstractMinecart = AbstractMinecartMembers & VehicleEntity;
export interface AbstractMinecartStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.Level): AbstractMinecart;
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.Level, arg2: number, arg3: number, arg4: number): AbstractMinecart;
  readonly WATER_SLOWDOWN_FACTOR: 0.95;
  createMinecart<T /* extends AbstractMinecart */>(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_entity.EntityType<T>, arg5: j_net_minecraft_world_entity.EntitySpawnReason, arg6: j_net_minecraft_world_item.ItemStack, arg7: j_net_minecraft_world_entity_player.Player | null): T | null;
  exits(arg0: j_net_minecraft_world_level_block_state_properties.RailShape): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.Vec3i, j_net_minecraft_core.Vec3i]>;
  useExperimentalMovement(arg0: j_net_minecraft_world_level.Level): boolean;
}

/** JVM abstract net.minecraft.world.entity.vehicle.AbstractMinecartContainer. */
export interface AbstractMinecartContainerMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecart, ContainerEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyNaturalSlowdown(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  clearContent(): void;
  clearItemStacks(): void;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): j_net_minecraft_world_inventory.AbstractContainerMenu;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu | null;
  destroy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  getContainerLootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  getContainerLootTableSeed(): bigint;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getItemStacks(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  lootTable: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  lootTableSeed: bigint;
  lootableData(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventoryData">;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  remove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChanged(): void;
  setContainerLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null): void | null;
  setContainerLootTableSeed(arg0: bigint): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: bigint): void;
  setMaxStackSize(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type AbstractMinecartContainer = AbstractMinecartContainerMembers & AbstractMinecart & ContainerEntity;
export interface AbstractMinecartContainerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.Level): AbstractMinecartContainer;
}

/** JVM class net.minecraft.world.entity.vehicle.Boat. */
export interface BoatMembers {
  readonly __javaSupertypes?: readonly [AbstractBoat];
  rideHeight(arg0: j_net_minecraft_world_entity.EntityDimensions): number;
}
export type Boat = BoatMembers & AbstractBoat;
export interface BoatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Boat>, arg1: j_net_minecraft_world_level.Level, arg2: JavaSupplier<j_net_minecraft_world_item.Item>): Boat;
}

/** JVM class net.minecraft.world.entity.vehicle.ChestBoat. */
export interface ChestBoatMembers {
  readonly __javaSupertypes?: readonly [AbstractChestBoat];
  rideHeight(arg0: j_net_minecraft_world_entity.EntityDimensions): number;
}
export type ChestBoat = ChestBoatMembers & AbstractChestBoat;
export interface ChestBoatStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ChestBoat>, arg1: j_net_minecraft_world_level.Level, arg2: JavaSupplier<j_net_minecraft_world_item.Item>): ChestBoat;
}

/** JVM class net.minecraft.world.entity.vehicle.ChestRaft. */
export interface ChestRaftMembers {
  readonly __javaSupertypes?: readonly [AbstractChestBoat];
  rideHeight(arg0: j_net_minecraft_world_entity.EntityDimensions): number;
}
export type ChestRaft = ChestRaftMembers & AbstractChestBoat;
export interface ChestRaftStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<ChestRaft>, arg1: j_net_minecraft_world_level.Level, arg2: JavaSupplier<j_net_minecraft_world_item.Item>): ChestRaft;
}

/** JVM interface net.minecraft.world.entity.vehicle.ContainerEntity. */
export interface ContainerEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container, j_net_minecraft_world.MenuProvider];
  addChestVehicleSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  chestVehicleDestroyed(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.Entity): void;
  clearChestVehicleContent(): void;
  clearItemStacks(): void;
  getBoundingBox(): j_net_minecraft_world_phys.AABB;
  getChestVehicleItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getChestVehicleSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getContainerLootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  getContainerLootTableSeed(): bigint;
  getItemStacks(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getLootableInventory(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventory">;
  interactWithContainerVehicle(arg0: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world.InteractionResult;
  isChestVehicleEmpty(): boolean;
  isChestVehicleStillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  isEmpty(): boolean;
  isRemoved(): boolean;
  level(): j_net_minecraft_world_level.Level;
  lootableData(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventoryData">;
  position(): j_net_minecraft_world_phys.Vec3;
  readChestVehicleSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  removeChestVehicleItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeChestVehicleItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChestVehicleItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setContainerLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null): void | null;
  setContainerLootTableSeed(arg0: bigint): void;
  unpackChestVehicleLootTable(arg0: j_net_minecraft_world_entity_player.Player | null): void | null;
}
export type ContainerEntity = ContainerEntityMembers & j_net_minecraft_world.Container & j_net_minecraft_world.MenuProvider;
export interface ContainerEntityStatics {
}

/** JVM class net.minecraft.world.entity.vehicle.DismountHelper. */
export interface DismountHelperMembers {
}
export type DismountHelper = DismountHelperMembers;
export interface DismountHelperStatics {
  new(): DismountHelper;
  canDismountTo(arg0: j_net_minecraft_world_level.CollisionGetter, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_phys.AABB): boolean;
  canDismountTo(arg0: j_net_minecraft_world_level.CollisionGetter, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world_entity.Pose): boolean;
  findCeilingFrom(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: JavaFunction<j_net_minecraft_core.BlockPos, j_net_minecraft_world_phys_shapes.VoxelShape>): number;
  findSafeDismountLocation(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.CollisionGetter, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): j_net_minecraft_world_phys.Vec3 | null;
  isBlockFloorValid(arg0: number): boolean;
  nonClimbableShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  offsetsForDirection(arg0: j_net_minecraft_core.Direction): Array<Array<number>>;
}

/** JVM class net.minecraft.world.entity.vehicle.Minecart. */
export interface MinecartMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecart];
  activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  getDropItem(): j_net_minecraft_world_item.Item;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  isRideable(): boolean;
  positionRider(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity_MoveFunction): void;
  tick(): void;
}
export type Minecart = MinecartMembers & AbstractMinecart;
export interface MinecartStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.Level): Minecart;
}

/** JVM abstract net.minecraft.world.entity.vehicle.MinecartBehavior. */
export interface MinecartBehaviorMembers {
  getDeltaMovement(): j_net_minecraft_world_phys.Vec3;
  getInterpolation(): j_net_minecraft_world_entity.InterpolationHandler;
  getKnownMovement(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  getMaxSpeed(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getMotionDirection(): j_net_minecraft_core.Direction;
  getSlowdownFactor(): number;
  getX(): number;
  getXRot(): number;
  getY(): number;
  getYRot(): number;
  getZ(): number;
  lerpMotion(arg0: number, arg1: number, arg2: number): void;
  level(): j_net_minecraft_world_level.Level;
  readonly minecart: AbstractMinecart;
  moveAlongTrack(arg0: j_net_minecraft_server_level.ServerLevel): void;
  position(): j_net_minecraft_world_phys.Vec3;
  pushAndPickupEntities(): boolean;
  setDeltaMovement(arg0: number, arg1: number, arg2: number): void;
  setDeltaMovement(arg0: j_net_minecraft_world_phys.Vec3): void;
  setPos(arg0: number, arg1: number, arg2: number): void;
  setPos(arg0: j_net_minecraft_world_phys.Vec3): void;
  setXRot(arg0: number): void;
  setYRot(arg0: number): void;
  stepAlongTrack(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.RailShape, arg2: number): number;
  tick(): void;
}
export type MinecartBehavior = MinecartBehaviorMembers;
export interface MinecartBehaviorStatics {
  new(arg0: AbstractMinecart): MinecartBehavior;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartChest. */
export interface MinecartChestMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecartContainer];
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): j_net_minecraft_world_inventory.AbstractContainerMenu;
  getContainerSize(): number;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDefaultDisplayOffset(): number;
  getDropItem(): j_net_minecraft_world_item.Item;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
}
export type MinecartChest = MinecartChestMembers & AbstractMinecartContainer;
export interface MinecartChestStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MinecartChest>, arg1: j_net_minecraft_world_level.Level): MinecartChest;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartCommandBlock. */
export interface MinecartCommandBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecart];
  activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getCommandBlock(): j_net_minecraft_world_level.BaseCommandBlock;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDropItem(): j_net_minecraft_world_item.Item;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
}
export type MinecartCommandBlock = MinecartCommandBlockMembers & AbstractMinecart;
export interface MinecartCommandBlockStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MinecartCommandBlock>, arg1: j_net_minecraft_world_level.Level): MinecartCommandBlock;
  readonly DATA_ID_COMMAND_NAME: j_net_minecraft_network_syncher.EntityDataAccessor<string>;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartCommandBlock$MinecartCommandBase. */
export interface MinecartCommandBlock_MinecartCommandBaseMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.BaseCommandBlock];
  createCommandSourceStack(): j_net_minecraft_commands.CommandSourceStack;
  getBukkitSender(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"org.bukkit.command.CommandSender">;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getMinecart(): MinecartCommandBlock;
  getPosition(): j_net_minecraft_world_phys.Vec3;
  isValid(): boolean;
  onUpdated(): void;
}
export type MinecartCommandBlock_MinecartCommandBase = MinecartCommandBlock_MinecartCommandBaseMembers & j_net_minecraft_world_level.BaseCommandBlock;
export interface MinecartCommandBlock_MinecartCommandBaseStatics {
  new(arg0: MinecartCommandBlock): MinecartCommandBlock_MinecartCommandBase;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartFurnace. */
export interface MinecartFurnaceMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecart];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyNaturalSlowdown(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  fuel: number;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDropItem(): j_net_minecraft_world_item.Item;
  getMaxSpeed(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  hasFuel(): boolean;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  isFurnace(): boolean;
  push: j_net_minecraft_world_phys.Vec3;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setHasFuel(arg0: boolean): void;
  tick(): void;
}
export type MinecartFurnace = MinecartFurnaceMembers & AbstractMinecart;
export interface MinecartFurnaceStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MinecartFurnace>, arg1: j_net_minecraft_world_level.Level): MinecartFurnace;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartHopper. */
export interface MinecartHopperMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecartContainer, j_net_minecraft_world_level_block_entity.Hopper];
  activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): j_net_minecraft_world_inventory.AbstractContainerMenu;
  getContainerSize(): number;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDefaultDisplayOffset(): number;
  getDropItem(): j_net_minecraft_world_item.Item;
  getLevelX(): number;
  getLevelY(): number;
  getLevelZ(): number;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  immunize(): void;
  isEnabled(): boolean;
  isGridAligned(): boolean;
  makeStepAlongTrack(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.RailShape, arg2: number): number;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setEnabled(arg0: boolean): void;
  suckInItems(): boolean;
  tick(): void;
}
export type MinecartHopper = MinecartHopperMembers & AbstractMinecartContainer & j_net_minecraft_world_level_block_entity.Hopper;
export interface MinecartHopperStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MinecartHopper>, arg1: j_net_minecraft_world_level.Level): MinecartHopper;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartSpawner. */
export interface MinecartSpawnerMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecart];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDropItem(): j_net_minecraft_world_item.Item;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  getSpawner(): j_net_minecraft_world_level.BaseSpawner;
  handleEntityEvent(arg0: number): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  tick(): void;
}
export type MinecartSpawner = MinecartSpawnerMembers & AbstractMinecart;
export interface MinecartSpawnerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MinecartSpawner>, arg1: j_net_minecraft_world_level.Level): MinecartSpawner;
}

/** JVM class net.minecraft.world.entity.vehicle.MinecartTNT. */
export interface MinecartTNTMembers {
  readonly __javaSupertypes?: readonly [AbstractMinecart];
  activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  destroy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  explode(arg0: number): void;
  explode(arg0: j_net_minecraft_world_damagesource.DamageSource | null, arg1: number): void | null;
  explosionPowerBase: number;
  explosionSpeedFactor: number;
  fuse: number;
  getBlockExplosionResistance(arg0: j_net_minecraft_world_level.Explosion, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.FluidState, arg5: number): number;
  getDefaultDisplayBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getDropItem(): j_net_minecraft_world_item.Item;
  getFuse(): number;
  getPickResult(): j_net_minecraft_world_item.ItemStack;
  handleEntityEvent(arg0: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isIncendiary: boolean;
  isPrimed(): boolean;
  primeFuse(arg0: j_net_minecraft_world_damagesource.DamageSource | null): void | null;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  shouldBlockExplode(arg0: j_net_minecraft_world_level.Explosion, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number): boolean;
  tick(): void;
}
export type MinecartTNT = MinecartTNTMembers & AbstractMinecart;
export interface MinecartTNTStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<MinecartTNT>, arg1: j_net_minecraft_world_level.Level): MinecartTNT;
}

/** JVM class net.minecraft.world.entity.vehicle.NewMinecartBehavior. */
export interface NewMinecartBehaviorMembers {
  readonly __javaSupertypes?: readonly [MinecartBehavior];
  adjustToRails(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: boolean): void;
  cartHasPosRotLerp(): boolean;
  readonly currentLerpSteps: JavaList<NewMinecartBehavior_MinecartStep>;
  currentLerpStepsTotalWeight: number;
  getCartLerpMovements(arg0: number): j_net_minecraft_world_phys.Vec3;
  getCartLerpPosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getCartLerpXRot(arg0: number): number;
  getCartLerpYRot(arg0: number): number;
  getMaxSpeed(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getSlowdownFactor(): number;
  readonly lerpSteps: JavaList<NewMinecartBehavior_MinecartStep>;
  moveAlongTrack(arg0: j_net_minecraft_server_level.ServerLevel): void;
  oldLerp: NewMinecartBehavior_MinecartStep;
  pickupEntities(arg0: j_net_minecraft_world_phys.AABB): boolean;
  pushAndPickupEntities(): boolean;
  pushEntities(arg0: j_net_minecraft_world_phys.AABB): boolean;
  setOldLerpValues(): void;
  stepAlongTrack(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.RailShape, arg2: number): number;
  tick(): void;
}
export type NewMinecartBehavior = NewMinecartBehaviorMembers & MinecartBehavior;
export interface NewMinecartBehaviorStatics {
  new(arg0: AbstractMinecart): NewMinecartBehavior;
  readonly ON_RAIL_Y_OFFSET: 0.1;
  readonly OPPOSING_SLOPES_REST_AT_SPEED_THRESHOLD: 0.005;
  readonly POS_ROT_LERP_TICKS: 3;
}

/** JVM record net.minecraft.world.entity.vehicle.NewMinecartBehavior$MinecartStep. */
export interface NewMinecartBehavior_MinecartStepMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  movement(): j_net_minecraft_world_phys.Vec3;
  position(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  weight(): number;
  xRot(): number;
  yRot(): number;
}
export type NewMinecartBehavior_MinecartStep = NewMinecartBehavior_MinecartStepMembers & JavaOpaque<"java.lang.Record">;
export interface NewMinecartBehavior_MinecartStepStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: number, arg3: number, arg4: number): NewMinecartBehavior_MinecartStep;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, NewMinecartBehavior_MinecartStep>;
  readonly ZERO: NewMinecartBehavior_MinecartStep;
}

/** JVM class net.minecraft.world.entity.vehicle.OldMinecartBehavior. */
export interface OldMinecartBehaviorMembers {
  readonly __javaSupertypes?: readonly [MinecartBehavior];
  getInterpolation(): j_net_minecraft_world_entity.InterpolationHandler;
  getKnownMovement(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  getMaxSpeed(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getMotionDirection(): j_net_minecraft_core.Direction;
  getPos(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3 | null;
  getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_phys.Vec3 | null;
  getSlowdownFactor(): number;
  lerpMotion(arg0: number, arg1: number, arg2: number): void;
  moveAlongTrack(arg0: j_net_minecraft_server_level.ServerLevel): void;
  onInterpolation(arg0: j_net_minecraft_world_entity.InterpolationHandler): void;
  pushAndPickupEntities(): boolean;
  stepAlongTrack(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.RailShape, arg2: number): number;
  tick(): void;
}
export type OldMinecartBehavior = OldMinecartBehaviorMembers & MinecartBehavior;
export interface OldMinecartBehaviorStatics {
  new(arg0: AbstractMinecart): OldMinecartBehavior;
}

/** JVM class net.minecraft.world.entity.vehicle.Raft. */
export interface RaftMembers {
  readonly __javaSupertypes?: readonly [AbstractBoat];
  rideHeight(arg0: j_net_minecraft_world_entity.EntityDimensions): number;
}
export type Raft = RaftMembers & AbstractBoat;
export interface RaftStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Raft>, arg1: j_net_minecraft_world_level.Level, arg2: JavaSupplier<j_net_minecraft_world_item.Item>): Raft;
}

/** JVM abstract net.minecraft.world.entity.vehicle.VehicleEntity. */
export interface VehicleEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity];
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  destroy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  destroy(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.Item): void;
  getDamage(): number;
  getDimensionChangingDelay(): number;
  getDropItem(): j_net_minecraft_world_item.Item;
  getHurtDir(): number;
  getHurtTime(): number;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  ignoreExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  setDamage(arg0: number): void;
  setHurtDir(arg0: number): void;
  setHurtTime(arg0: number): void;
}
export type VehicleEntity = VehicleEntityMembers & j_net_minecraft_world_entity.Entity;
export interface VehicleEntityStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.Level): VehicleEntity;
  readonly DATA_ID_DAMAGE: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_ID_HURT: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_ID_HURTDIR: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
}
