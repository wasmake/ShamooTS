// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory_view from './org.bukkit.craftbukkit.inventory.view.generated.js';

/** JVM abstract net.minecraft.world.inventory.AbstractContainerMenu. */
export interface AbstractContainerMenuMembers {
  addSlotListener(arg0: ContainerListener_2): void;
  broadcastCarriedItem(): void;
  broadcastChanges(): void;
  broadcastFullState(): void;
  canDragTo(arg0: Slot): boolean;
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  checkReachable: boolean;
  clickMenuButton(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): boolean;
  clicked(arg0: number, arg1: number, arg2: ClickType, arg3: j_net_minecraft_world_entity_player.Player): void;
  readonly containerId: number;
  dataSlots: JavaList<DataSlot>;
  findSlot(arg0: j_net_minecraft_world.Container, arg1: number): JavaOptionalNumber;
  forceHeldSlot(arg0: j_net_minecraft_world.InteractionHand): void;
  forceHeldSlotAndArmor(arg0: j_net_minecraft_world.InteractionHand): void;
  forceSlot(arg0: j_net_minecraft_world.Container, arg1: number): void;
  getBukkitView(): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  getCarried(): j_net_minecraft_world_item.ItemStack;
  getItems(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getSlot(arg0: number): Slot;
  getStateId(): number;
  getTitle(): j_net_minecraft_network_chat.Component;
  getType(): MenuType<object>;
  incrementStateId(): number;
  initializeContents(arg0: number, arg1: JavaList<j_net_minecraft_world_item.ItemStack>, arg2: j_net_minecraft_world_item.ItemStack): void;
  isValidSlotIndex(arg0: number): boolean;
  lastSlots: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  readonly menuType: MenuType<object> | null;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  readonly quickcraftSlots: JavaSet<Slot>;
  quickcraftStatus: number;
  quickcraftType: number;
  remoteDataSlots: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
  remoteSlots: j_net_minecraft_core.NonNullList<RemoteSlot>;
  removeSlotListener(arg0: ContainerListener_2): void;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  resetQuickCraft(): void;
  resumeRemoteUpdates(): void;
  sendAllDataToRemote(): void;
  setCarried(arg0: j_net_minecraft_world_item.ItemStack): void;
  setData(arg0: number, arg1: number): void;
  setItem(arg0: number, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): void;
  setRemoteCarried(arg0: j_net_minecraft_network.HashedStack): void;
  setRemoteSlot(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setRemoteSlotUnsafe(arg0: number, arg1: j_net_minecraft_network.HashedStack): void;
  setSelectedBundleItemIndex(arg0: number, arg1: number): void;
  setSynchronizer(arg0: ContainerSynchronizer): void;
  setTitle(arg0: j_net_minecraft_network_chat.Component): void;
  slots: j_net_minecraft_core.NonNullList<Slot>;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  startOpen(): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  suppressRemoteUpdates(): void;
  synchronizeSlotToRemote(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaSupplier<j_net_minecraft_world_item.ItemStack>): void;
  transferState(arg0: AbstractContainerMenu): void;
  transferTo(arg0: AbstractContainerMenu, arg1: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  triggerSlotListeners(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaSupplier<j_net_minecraft_world_item.ItemStack>): void;
}
export type AbstractContainerMenu = AbstractContainerMenuMembers;
export interface AbstractContainerMenuStatics {
  readonly CARRIED_SLOT_SIZE: 2147483647;
  readonly QUICKCRAFT_HEADER_CONTINUE: 1;
  readonly QUICKCRAFT_HEADER_END: 2;
  readonly QUICKCRAFT_HEADER_START: 0;
  readonly QUICKCRAFT_TYPE_CHARITABLE: 0;
  readonly QUICKCRAFT_TYPE_CLONE: 2;
  readonly QUICKCRAFT_TYPE_GREEDY: 1;
  readonly SLOTS_PER_ROW: 9;
  readonly SLOT_CLICKED_OUTSIDE: -999;
  readonly SLOT_SIZE: 18;
  canItemQuickReplace(arg0: Slot | null, arg1: j_net_minecraft_world_item.ItemStack, arg2: boolean): boolean;
  getQuickCraftPlaceCount(arg0: JavaSet<Slot>, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): number;
  getQuickcraftHeader(arg0: number): number;
  getQuickcraftMask(arg0: number, arg1: number): number;
  getQuickcraftType(arg0: number): number;
  getRedstoneSignalFromBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity | null): number;
  getRedstoneSignalFromContainer(arg0: j_net_minecraft_world.Container | null): number;
  isValidQuickcraftType(arg0: number, arg1: j_net_minecraft_world_entity_player.Player): boolean;
}

/** JVM abstract net.minecraft.world.inventory.AbstractCraftingMenu. */
export interface AbstractCraftingMenuMembers {
  readonly __javaSupertypes?: readonly [RecipeBookMenu];
  readonly craftSlots: TransientCraftingContainer;
  fillCraftSlotsStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  getGridHeight(): number;
  getGridWidth(): number;
  getInputGridSlots(): JavaList<Slot>;
  getResultSlot(): Slot;
  handlePlacement(arg0: boolean, arg1: boolean, arg2: j_net_minecraft_world_item_crafting.RecipeHolder<object>, arg3: j_net_minecraft_server_level.ServerLevel, arg4: j_net_minecraft_world_entity_player.Inventory): RecipeBookMenu_PostPlaceAction;
  readonly resultSlots: ResultContainer;
}
export type AbstractCraftingMenu = AbstractCraftingMenuMembers & RecipeBookMenu;
export interface AbstractCraftingMenuStatics {
}

/** JVM abstract net.minecraft.world.inventory.AbstractFurnaceMenu. */
export interface AbstractFurnaceMenuMembers {
  readonly __javaSupertypes?: readonly [RecipeBookMenu];
  fillCraftSlotsStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftFurnaceView;
  getBurnProgress(): number;
  getLitProgress(): number;
  getRecipeBookType(): RecipeBookType;
  getResultSlot(): Slot;
  handlePlacement(arg0: boolean, arg1: boolean, arg2: j_net_minecraft_world_item_crafting.RecipeHolder<object>, arg3: j_net_minecraft_server_level.ServerLevel, arg4: j_net_minecraft_world_entity_player.Inventory): RecipeBookMenu_PostPlaceAction;
  isLit(): boolean;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type AbstractFurnaceMenu = AbstractFurnaceMenuMembers & RecipeBookMenu;
export interface AbstractFurnaceMenuStatics {
  readonly DATA_COUNT: 4;
  readonly FUEL_SLOT: 1;
  readonly INGREDIENT_SLOT: 0;
  readonly RESULT_SLOT: 2;
  readonly SLOT_COUNT: 3;
}

/** JVM class net.minecraft.world.inventory.AnvilMenu. */
export interface AnvilMenuMembers {
  readonly __javaSupertypes?: readonly [ItemCombinerMenu];
  bypassEnchantmentLevelRestriction: boolean;
  readonly cost: DataSlot;
  createResult(): void;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftAnvilView;
  getCost(): number;
  itemName: string | null;
  maximumRepairCost: number;
  repairItemCountCost: number;
  setItemName(arg0: string): boolean;
}
export type AnvilMenu = AnvilMenuMembers & ItemCombinerMenu;
export interface AnvilMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): AnvilMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): AnvilMenu;
  readonly ADDITIONAL_SLOT: 1;
  readonly DEFAULT_DENIED_COST: -1;
  readonly INPUT_SLOT: 0;
  readonly MAX_NAME_LENGTH: 50;
  readonly RESULT_SLOT: 2;
  calculateIncreasedRepairCost(arg0: number): number;
}

/** JVM class net.minecraft.world.inventory.BeaconMenu. */
export interface BeaconMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftBeaconView;
  getLevels(): number;
  getPrimaryEffect(): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null;
  getSecondaryEffect(): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null;
  hasPayment(): boolean;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  setData(arg0: number, arg1: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  updateEffects(arg0: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>): void;
}
export type BeaconMenu = BeaconMenuMembers & AbstractContainerMenu;
export interface BeaconMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world.Container): BeaconMenu;
  new(arg0: number, arg1: j_net_minecraft_world.Container, arg2: ContainerData, arg3: ContainerLevelAccess): BeaconMenu;
  decodeEffect(arg0: number): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null;
  encodeEffect(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null): number;
}

/** JVM class net.minecraft.world.inventory.BlastFurnaceMenu. */
export interface BlastFurnaceMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceMenu];
}
export type BlastFurnaceMenu = BlastFurnaceMenuMembers & AbstractFurnaceMenu;
export interface BlastFurnaceMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): BlastFurnaceMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container, arg3: ContainerData): BlastFurnaceMenu;
}

/** JVM class net.minecraft.world.inventory.BrewingStandMenu. */
export interface BrewingStandMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  readonly brewingStandData: ContainerData;
  getBrewingTicks(): number;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftBrewingStandView;
  getFuel(): number;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type BrewingStandMenu = BrewingStandMenuMembers & AbstractContainerMenu;
export interface BrewingStandMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): BrewingStandMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container, arg3: ContainerData): BrewingStandMenu;
}

/** JVM class net.minecraft.world.inventory.CartographyTableMenu. */
export interface CartographyTableMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  readonly container: j_net_minecraft_world.Container;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type CartographyTableMenu = CartographyTableMenuMembers & AbstractContainerMenu;
export interface CartographyTableMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): CartographyTableMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): CartographyTableMenu;
  readonly ADDITIONAL_SLOT: 1;
  readonly MAP_SLOT: 0;
  readonly RESULT_SLOT: 2;
}

/** JVM class net.minecraft.world.inventory.ChestMenu. */
export interface ChestMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  getContainer(): j_net_minecraft_world.Container;
  getRowCount(): number;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  startOpen(): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ChestMenu = ChestMenuMembers & AbstractContainerMenu;
export interface ChestMenuStatics {
  new(arg0: MenuType<object>, arg1: number, arg2: j_net_minecraft_world_entity_player.Inventory, arg3: j_net_minecraft_world.Container, arg4: number): ChestMenu;
  fiveRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ChestMenu;
  fourRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ChestMenu;
  oneRow(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ChestMenu;
  sixRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ChestMenu;
  sixRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container): ChestMenu;
  threeRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ChestMenu;
  threeRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container): ChestMenu;
  twoRows(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ChestMenu;
}

/** Live JVM enum net.minecraft.world.inventory.ClickAction; constants are host handles, not strings. */
export type ClickAction = JavaEnum<"net.minecraft.world.inventory.ClickAction", "PRIMARY" | "SECONDARY"> & ClickActionMembers;
export interface ClickActionMembers {
}
export interface ClickActionStatics {
  readonly PRIMARY: ClickAction;
  readonly SECONDARY: ClickAction;
  valueOf(arg0: string): ClickAction;
  values(): Array<ClickAction>;
}

/** Live JVM enum net.minecraft.world.inventory.ClickType; constants are host handles, not strings. */
export type ClickType = JavaEnum<"net.minecraft.world.inventory.ClickType", "CLONE" | "PICKUP" | "PICKUP_ALL" | "QUICK_CRAFT" | "QUICK_MOVE" | "SWAP" | "THROW"> & ClickTypeMembers;
export interface ClickTypeMembers {
  id(): number;
}
export interface ClickTypeStatics {
  readonly CLONE: ClickType;
  readonly PICKUP: ClickType;
  readonly PICKUP_ALL: ClickType;
  readonly QUICK_CRAFT: ClickType;
  readonly QUICK_MOVE: ClickType;
  readonly SWAP: ClickType;
  readonly THROW: ClickType;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClickType>;
  valueOf(arg0: string): ClickType;
  values(): Array<ClickType>;
}

/** JVM interface net.minecraft.world.inventory.ContainerData. */
export interface ContainerDataMembers {
  get(arg0: number): number;
  getCount(): number;
  set(arg0: number, arg1: number): void;
}
export type ContainerData = ContainerDataMembers;
export interface ContainerDataStatics {
}

/** JVM interface net.minecraft.world.inventory.ContainerLevelAccess. */
export interface ContainerLevelAccessMembers {
  createBlockHolder(arg0: AbstractContainerMenu): JavaOpaque<"org.bukkit.inventory.BlockInventoryHolder"> | null;
  evaluate<T>(arg0: JavaBiFunction<j_net_minecraft_world_level.Level, j_net_minecraft_core.BlockPos, T>): JavaOptional<T>;
  evaluate<T>(arg0: JavaBiFunction<j_net_minecraft_world_level.Level, j_net_minecraft_core.BlockPos, T>, arg1: T): T;
  execute(arg0: JavaBiConsumer<j_net_minecraft_world_level.Level, j_net_minecraft_core.BlockPos>): void;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getPosition(): j_net_minecraft_core.BlockPos;
  getWorld(): j_net_minecraft_world_level.Level;
  isBlock(): boolean;
}
export type ContainerLevelAccess = ContainerLevelAccessMembers;
export interface ContainerLevelAccessStatics {
  readonly NULL: ContainerLevelAccess;
  create(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): ContainerLevelAccess;
}

/** JVM interface net.minecraft.world.inventory.ContainerListener. */
export interface ContainerListener_2Members {
  dataChanged(arg0: AbstractContainerMenu, arg1: number, arg2: number): void;
  slotChanged(arg0: AbstractContainerMenu, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): void;
  slotChanged(arg0: AbstractContainerMenu, arg1: number, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_item.ItemStack): void;
}
export type ContainerListener_2 = ContainerListener_2Members;
export interface ContainerListener_2Statics {
}

/** JVM interface net.minecraft.world.inventory.ContainerSynchronizer. */
export interface ContainerSynchronizerMembers {
  createSlot(): RemoteSlot;
  sendCarriedChange(arg0: AbstractContainerMenu, arg1: j_net_minecraft_world_item.ItemStack): void;
  sendDataChange(arg0: AbstractContainerMenu, arg1: number, arg2: number): void;
  sendInitialData(arg0: AbstractContainerMenu, arg1: JavaList<j_net_minecraft_world_item.ItemStack>, arg2: j_net_minecraft_world_item.ItemStack, arg3: Array<number>): void;
  sendOffHandSlotChange(): void;
  sendSlotChange(arg0: AbstractContainerMenu, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): void;
}
export type ContainerSynchronizer = ContainerSynchronizerMembers;
export interface ContainerSynchronizerStatics {
}

/** JVM class net.minecraft.world.inventory.CrafterMenu. */
export interface CrafterMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu, ContainerListener_2];
  dataChanged(arg0: AbstractContainerMenu, arg1: number, arg2: number): void;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftCrafterView;
  getContainer(): j_net_minecraft_world.Container;
  isPowered(): boolean;
  isSlotDisabled(arg0: number): boolean;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  setSlotState(arg0: number, arg1: boolean): void;
  slotChanged(arg0: AbstractContainerMenu, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type CrafterMenu = CrafterMenuMembers & AbstractContainerMenu & ContainerListener_2;
export interface CrafterMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): CrafterMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: CraftingContainer, arg3: ContainerData): CrafterMenu;
}

/** JVM class net.minecraft.world.inventory.CrafterSlot. */
export interface CrafterSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  setChanged(): void;
}
export type CrafterSlot = CrafterSlotMembers & Slot;
export interface CrafterSlotStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: number, arg2: number, arg3: number, arg4: CrafterMenu): CrafterSlot;
}

/** JVM interface net.minecraft.world.inventory.CraftingContainer. */
export interface CraftingContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container, StackedContentsCompatible];
  asCraftInput(): j_net_minecraft_world_item_crafting.CraftingInput;
  asPositionedCraftInput(): j_net_minecraft_world_item_crafting.CraftingInput_Positioned;
  getCurrentRecipe(): j_net_minecraft_world_item_crafting.RecipeHolder<j_net_minecraft_world_item_crafting.CraftingRecipe>;
  getHeight(): number;
  getItems(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getWidth(): number;
  setCurrentRecipe(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<j_net_minecraft_world_item_crafting.CraftingRecipe>): void;
}
export type CraftingContainer = CraftingContainerMembers & j_net_minecraft_world.Container & StackedContentsCompatible;
export interface CraftingContainerStatics {
}

/** JVM class net.minecraft.world.inventory.CraftingMenu. */
export interface CraftingMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractCraftingMenu];
  readonly access: ContainerLevelAccess;
  beginPlacingRecipe(): void;
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  finishPlacingRecipe(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item_crafting.RecipeHolder<j_net_minecraft_world_item_crafting.CraftingRecipe>): void;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  getInputGridSlots(): JavaList<Slot>;
  getRecipeBookType(): RecipeBookType;
  getResultSlot(): Slot;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type CraftingMenu = CraftingMenuMembers & AbstractCraftingMenu;
export interface CraftingMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): CraftingMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): CraftingMenu;
  readonly RESULT_SLOT: 0;
}

/** JVM abstract net.minecraft.world.inventory.DataSlot. */
export interface DataSlotMembers {
  checkAndClearUpdateFlag(): boolean;
  get(): number;
  set(arg0: number): void;
}
export type DataSlot = DataSlotMembers;
export interface DataSlotStatics {
  forContainer(arg0: ContainerData, arg1: number): DataSlot;
  shared(arg0: Array<number>, arg1: number): DataSlot;
  standalone(): DataSlot;
}

/** JVM class net.minecraft.world.inventory.DispenserMenu. */
export interface DispenserMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  readonly dispenser: j_net_minecraft_world.Container;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type DispenserMenu = DispenserMenuMembers & AbstractContainerMenu;
export interface DispenserMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): DispenserMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container): DispenserMenu;
}

/** JVM class net.minecraft.world.inventory.EnchantmentMenu. */
export interface EnchantmentMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  clickMenuButton(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): boolean;
  readonly costs: Array<number>;
  readonly enchantClue: Array<number>;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftEnchantmentView;
  getEnchantmentSeed(): number;
  getGoldCount(): number;
  readonly levelClue: Array<number>;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  setEnchantmentSeed(arg0: number): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type EnchantmentMenu = EnchantmentMenuMembers & AbstractContainerMenu;
export interface EnchantmentMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): EnchantmentMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): EnchantmentMenu;
}

/** JVM class net.minecraft.world.inventory.FurnaceFuelSlot. */
export interface FurnaceFuelSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  getMaxStackSize(arg0: j_net_minecraft_world_item.ItemStack): number;
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type FurnaceFuelSlot = FurnaceFuelSlotMembers & Slot;
export interface FurnaceFuelSlotStatics {
  new(arg0: AbstractFurnaceMenu, arg1: j_net_minecraft_world.Container, arg2: number, arg3: number, arg4: number): FurnaceFuelSlot;
  isBucket(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}

/** JVM class net.minecraft.world.inventory.FurnaceMenu. */
export interface FurnaceMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceMenu];
}
export type FurnaceMenu = FurnaceMenuMembers & AbstractFurnaceMenu;
export interface FurnaceMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): FurnaceMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container, arg3: ContainerData): FurnaceMenu;
}

/** JVM class net.minecraft.world.inventory.FurnaceResultSlot. */
export interface FurnaceResultSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  onTake(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  remove(arg0: number): j_net_minecraft_world_item.ItemStack;
}
export type FurnaceResultSlot = FurnaceResultSlotMembers & Slot;
export interface FurnaceResultSlotStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.Container, arg2: number, arg3: number, arg4: number): FurnaceResultSlot;
}

/** JVM class net.minecraft.world.inventory.GrindstoneMenu. */
export interface GrindstoneMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type GrindstoneMenu = GrindstoneMenuMembers & AbstractContainerMenu;
export interface GrindstoneMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): GrindstoneMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): GrindstoneMenu;
  readonly ADDITIONAL_SLOT: 1;
  readonly INPUT_SLOT: 0;
  readonly MAX_NAME_LENGTH: 35;
  readonly RESULT_SLOT: 2;
}

/** JVM class net.minecraft.world.inventory.HopperMenu. */
export interface HopperMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type HopperMenu = HopperMenuMembers & AbstractContainerMenu;
export interface HopperMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): HopperMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container): HopperMenu;
  readonly CONTAINER_SIZE: 5;
}

/** JVM class net.minecraft.world.inventory.HorseInventoryMenu. */
export interface HorseInventoryMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  getBukkitView(): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  readonly horse: j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type HorseInventoryMenu = HorseInventoryMenuMembers & AbstractContainerMenu;
export interface HorseInventoryMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container, arg3: j_net_minecraft_world_entity_animal_horse.AbstractHorse, arg4: number): HorseInventoryMenu;
  readonly SLOT_BODY_ARMOR: 1;
  readonly SLOT_HORSE_INVENTORY_START: 2;
  readonly SLOT_SADDLE: 0;
}

/** JVM class net.minecraft.world.inventory.InventoryMenu. */
export interface InventoryMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractCraftingMenu];
  readonly active: boolean;
  broadcastNonContainerSlotChanges(): void;
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  forceHeldSlot(arg0: j_net_minecraft_world.InteractionHand): void;
  forceHeldSlotAndArmor(arg0: j_net_minecraft_world.InteractionHand): void;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  getCraftSlots(): CraftingContainer;
  getInputGridSlots(): JavaList<Slot>;
  getRecipeBookType(): RecipeBookType;
  getResultSlot(): Slot;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type InventoryMenu = InventoryMenuMembers & AbstractCraftingMenu;
export interface InventoryMenuStatics {
  new(arg0: j_net_minecraft_world_entity_player.Inventory, arg1: boolean, arg2: j_net_minecraft_world_entity_player.Player): InventoryMenu;
  readonly ARMOR_SLOT_COUNT: 4;
  readonly ARMOR_SLOT_END: 9;
  readonly ARMOR_SLOT_START: 5;
  readonly CONTAINER_ID: 0;
  readonly CRAFT_SLOT_COUNT: 4;
  readonly CRAFT_SLOT_END: 5;
  readonly CRAFT_SLOT_START: 1;
  readonly EMPTY_ARMOR_SLOT_BOOTS: j_net_minecraft_resources.ResourceLocation;
  readonly EMPTY_ARMOR_SLOT_CHESTPLATE: j_net_minecraft_resources.ResourceLocation;
  readonly EMPTY_ARMOR_SLOT_HELMET: j_net_minecraft_resources.ResourceLocation;
  readonly EMPTY_ARMOR_SLOT_LEGGINGS: j_net_minecraft_resources.ResourceLocation;
  readonly EMPTY_ARMOR_SLOT_SHIELD: j_net_minecraft_resources.ResourceLocation;
  readonly INV_SLOT_END: 36;
  readonly INV_SLOT_START: 9;
  readonly RESULT_SLOT: 0;
  readonly SHIELD_SLOT: 45;
  readonly USE_ROW_SLOT_END: 45;
  readonly USE_ROW_SLOT_START: 36;
  isHotbarSlot(arg0: number): boolean;
}

/** JVM abstract net.minecraft.world.inventory.ItemCombinerMenu. */
export interface ItemCombinerMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  createResult(): void;
  getResultSlot(): number;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ItemCombinerMenu = ItemCombinerMenuMembers & AbstractContainerMenu;
export interface ItemCombinerMenuStatics {
}

/** JVM class net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition. */
export interface ItemCombinerMenuSlotDefinitionMembers {
  getNumOfInputSlots(): number;
  getResultSlot(): ItemCombinerMenuSlotDefinition_SlotDefinition;
  getResultSlotIndex(): number;
  getSlot(arg0: number): ItemCombinerMenuSlotDefinition_SlotDefinition;
  getSlots(): JavaList<ItemCombinerMenuSlotDefinition_SlotDefinition>;
}
export type ItemCombinerMenuSlotDefinition = ItemCombinerMenuSlotDefinitionMembers;
export interface ItemCombinerMenuSlotDefinitionStatics {
  create(): ItemCombinerMenuSlotDefinition_Builder;
}

/** JVM class net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition$Builder. */
export interface ItemCombinerMenuSlotDefinition_BuilderMembers {
  build(): ItemCombinerMenuSlotDefinition;
  withResultSlot(arg0: number, arg1: number, arg2: number): ItemCombinerMenuSlotDefinition_Builder;
  withSlot(arg0: number, arg1: number, arg2: number, arg3: JavaPredicate<j_net_minecraft_world_item.ItemStack>): ItemCombinerMenuSlotDefinition_Builder;
}
export type ItemCombinerMenuSlotDefinition_Builder = ItemCombinerMenuSlotDefinition_BuilderMembers;
export interface ItemCombinerMenuSlotDefinition_BuilderStatics {
  new(): ItemCombinerMenuSlotDefinition_Builder;
}

/** JVM record net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition$SlotDefinition. */
export interface ItemCombinerMenuSlotDefinition_SlotDefinitionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  mayPlace(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
  slotIndex(): number;
  toString(): string;
  x(): number;
  y(): number;
}
export type ItemCombinerMenuSlotDefinition_SlotDefinition = ItemCombinerMenuSlotDefinition_SlotDefinitionMembers & JavaOpaque<"java.lang.Record">;
export interface ItemCombinerMenuSlotDefinition_SlotDefinitionStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: JavaPredicate<j_net_minecraft_world_item.ItemStack>): ItemCombinerMenuSlotDefinition_SlotDefinition;
}

/** JVM class net.minecraft.world.inventory.LecternMenu. */
export interface LecternMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  clickMenuButton(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): boolean;
  getBook(): j_net_minecraft_world_item.ItemStack;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftLecternView;
  getPage(): number;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  setData(arg0: number, arg1: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type LecternMenu = LecternMenuMembers & AbstractContainerMenu;
export interface LecternMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world.Container, arg2: ContainerData, arg3: j_net_minecraft_world_entity_player.Inventory): LecternMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): LecternMenu;
  readonly BUTTON_NEXT_PAGE: 2;
  readonly BUTTON_PAGE_JUMP_RANGE_START: 100;
  readonly BUTTON_PREV_PAGE: 1;
  readonly BUTTON_TAKE_BOOK: 3;
}

/** JVM class net.minecraft.world.inventory.LoomMenu. */
export interface LoomMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  clickMenuButton(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): boolean;
  getBannerSlot(): Slot;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftLoomView;
  getDyeSlot(): Slot;
  getPatternSlot(): Slot;
  getResultSlot(): Slot;
  getSelectablePatterns(): JavaList<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block_entity.BannerPattern>>;
  getSelectedBannerPatternIndex(): number;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  registerUpdateListener(arg0: JavaRunnable): void;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type LoomMenu = LoomMenuMembers & AbstractContainerMenu;
export interface LoomMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): LoomMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): LoomMenu;
}

/** JVM interface net.minecraft.world.inventory.MenuConstructor. */
export interface MenuConstructorMembers {
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): AbstractContainerMenu | null;
}
export type MenuConstructor = MenuConstructorMembers;
export interface MenuConstructorStatics {
}

/** JVM class net.minecraft.world.inventory.MenuType. */
export interface MenuTypeMembers<T /* extends AbstractContainerMenu */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_flag.FeatureElement];
  create(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): T;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
}
export type MenuType<T /* extends AbstractContainerMenu */ = unknown> = MenuTypeMembers<T> & j_net_minecraft_world_flag.FeatureElement;
export interface MenuTypeStatics {
  readonly ANVIL: MenuType<AnvilMenu>;
  readonly BEACON: MenuType<BeaconMenu>;
  readonly BLAST_FURNACE: MenuType<BlastFurnaceMenu>;
  readonly BREWING_STAND: MenuType<BrewingStandMenu>;
  readonly CARTOGRAPHY_TABLE: MenuType<CartographyTableMenu>;
  readonly CRAFTER_3x3: MenuType<CrafterMenu>;
  readonly CRAFTING: MenuType<CraftingMenu>;
  readonly ENCHANTMENT: MenuType<EnchantmentMenu>;
  readonly FURNACE: MenuType<FurnaceMenu>;
  readonly GENERIC_3x3: MenuType<DispenserMenu>;
  readonly GENERIC_9x1: MenuType<ChestMenu>;
  readonly GENERIC_9x2: MenuType<ChestMenu>;
  readonly GENERIC_9x3: MenuType<ChestMenu>;
  readonly GENERIC_9x4: MenuType<ChestMenu>;
  readonly GENERIC_9x5: MenuType<ChestMenu>;
  readonly GENERIC_9x6: MenuType<ChestMenu>;
  readonly GRINDSTONE: MenuType<GrindstoneMenu>;
  readonly HOPPER: MenuType<HopperMenu>;
  readonly LECTERN: MenuType<LecternMenu>;
  readonly LOOM: MenuType<LoomMenu>;
  readonly MERCHANT: MenuType<MerchantMenu>;
  readonly SHULKER_BOX: MenuType<ShulkerBoxMenu>;
  readonly SMITHING: MenuType<SmithingMenu>;
  readonly SMOKER: MenuType<SmokerMenu>;
  readonly STONECUTTER: MenuType<StonecutterMenu>;
}

/** JVM class net.minecraft.world.inventory.MerchantContainer. */
export interface MerchantContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container];
  clearContent(): void;
  getActiveOffer(): j_net_minecraft_world_item_trading.MerchantOffer | null;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getFutureXp(): number;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  selectionHint: number;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  setSelectionHint(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  updateSellItem(): void;
}
export type MerchantContainer = MerchantContainerMembers & j_net_minecraft_world.Container;
export interface MerchantContainerStatics {
  new(arg0: j_net_minecraft_world_item_trading.Merchant): MerchantContainer;
}

/** JVM class net.minecraft.world.inventory.MerchantMenu. */
export interface MerchantMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  canRestock(): boolean;
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftMerchantView;
  getFutureTraderXp(): number;
  getOffers(): j_net_minecraft_world_item_trading.MerchantOffers;
  getTraderLevel(): number;
  getTraderXp(): number;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  setCanRestock(arg0: boolean): void;
  setMerchantLevel(arg0: number): void;
  setOffers(arg0: j_net_minecraft_world_item_trading.MerchantOffers): void;
  setSelectionHint(arg0: number): void;
  setShowProgressBar(arg0: boolean): void;
  setXp(arg0: number): void;
  showProgressBar(): boolean;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  tryMoveItems(arg0: number): void;
}
export type MerchantMenu = MerchantMenuMembers & AbstractContainerMenu;
export interface MerchantMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): MerchantMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_item_trading.Merchant): MerchantMenu;
}

/** JVM class net.minecraft.world.inventory.MerchantResultSlot. */
export interface MerchantResultSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  onTake(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  remove(arg0: number): j_net_minecraft_world_item.ItemStack;
}
export type MerchantResultSlot = MerchantResultSlotMembers & Slot;
export interface MerchantResultSlotStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item_trading.Merchant, arg2: MerchantContainer, arg3: number, arg4: number, arg5: number): MerchantResultSlot;
}

/** JVM class net.minecraft.world.inventory.NonInteractiveResultSlot. */
export interface NonInteractiveResultSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  allowModification(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  isFake(): boolean;
  isHighlightable(): boolean;
  mayPickup(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  onQuickCraft(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): void;
  onTake(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  remove(arg0: number): j_net_minecraft_world_item.ItemStack;
  safeInsert(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  safeInsert(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): j_net_minecraft_world_item.ItemStack;
  safeTake(arg0: number, arg1: number, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_item.ItemStack;
  tryRemove(arg0: number, arg1: number, arg2: j_net_minecraft_world_entity_player.Player): JavaOptional<j_net_minecraft_world_item.ItemStack>;
}
export type NonInteractiveResultSlot = NonInteractiveResultSlotMembers & Slot;
export interface NonInteractiveResultSlotStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: number, arg2: number, arg3: number): NonInteractiveResultSlot;
}

/** JVM class net.minecraft.world.inventory.PlayerEnderChestContainer. */
export interface PlayerEnderChestContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.SimpleContainer];
  fromSlots(arg0: j_net_minecraft_world_level_storage.ValueInput_TypedInputList<j_net_minecraft_world.ItemStackWithSlot>): void;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  isActiveChest(arg0: j_net_minecraft_world_level_block_entity.EnderChestBlockEntity): boolean;
  setActiveChest(arg0: j_net_minecraft_world_level_block_entity.EnderChestBlockEntity): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  storeAsSlots(arg0: j_net_minecraft_world_level_storage.ValueOutput_TypedOutputList<j_net_minecraft_world.ItemStackWithSlot>): void;
}
export type PlayerEnderChestContainer = PlayerEnderChestContainerMembers & j_net_minecraft_world.SimpleContainer;
export interface PlayerEnderChestContainerStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player): PlayerEnderChestContainer;
}

/** JVM abstract net.minecraft.world.inventory.RecipeBookMenu. */
export interface RecipeBookMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  fillCraftSlotsStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  getRecipeBookType(): RecipeBookType;
  handlePlacement(arg0: boolean, arg1: boolean, arg2: j_net_minecraft_world_item_crafting.RecipeHolder<object>, arg3: j_net_minecraft_server_level.ServerLevel, arg4: j_net_minecraft_world_entity_player.Inventory): RecipeBookMenu_PostPlaceAction;
}
export type RecipeBookMenu = RecipeBookMenuMembers & AbstractContainerMenu;
export interface RecipeBookMenuStatics {
}

/** Live JVM enum net.minecraft.world.inventory.RecipeBookMenu$PostPlaceAction; constants are host handles, not strings. */
export type RecipeBookMenu_PostPlaceAction = JavaEnum<"net.minecraft.world.inventory.RecipeBookMenu$PostPlaceAction", "NOTHING" | "PLACE_GHOST_RECIPE"> & RecipeBookMenu_PostPlaceActionMembers;
export interface RecipeBookMenu_PostPlaceActionMembers {
}
export interface RecipeBookMenu_PostPlaceActionStatics {
  readonly NOTHING: RecipeBookMenu_PostPlaceAction;
  readonly PLACE_GHOST_RECIPE: RecipeBookMenu_PostPlaceAction;
  valueOf(arg0: string): RecipeBookMenu_PostPlaceAction;
  values(): Array<RecipeBookMenu_PostPlaceAction>;
}

/** Live JVM enum net.minecraft.world.inventory.RecipeBookType; constants are host handles, not strings. */
export type RecipeBookType = JavaEnum<"net.minecraft.world.inventory.RecipeBookType", "BLAST_FURNACE" | "CRAFTING" | "FURNACE" | "SMOKER"> & RecipeBookTypeMembers;
export interface RecipeBookTypeMembers {
}
export interface RecipeBookTypeStatics {
  readonly BLAST_FURNACE: RecipeBookType;
  readonly CRAFTING: RecipeBookType;
  readonly FURNACE: RecipeBookType;
  readonly SMOKER: RecipeBookType;
  valueOf(arg0: string): RecipeBookType;
  values(): Array<RecipeBookType>;
}

/** JVM interface net.minecraft.world.inventory.RecipeCraftingHolder. */
export interface RecipeCraftingHolderMembers {
  awardUsedRecipes(arg0: j_net_minecraft_world_entity_player.Player, arg1: JavaList<j_net_minecraft_world_item.ItemStack>): void;
  getRecipeUsed(): j_net_minecraft_world_item_crafting.RecipeHolder<object> | null;
  setRecipeUsed(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item_crafting.RecipeHolder<object>): boolean;
  setRecipeUsed(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<object> | null): void;
}
export type RecipeCraftingHolder = RecipeCraftingHolderMembers;
export interface RecipeCraftingHolderStatics {
}

/** JVM interface net.minecraft.world.inventory.RemoteSlot. */
export interface RemoteSlotMembers {
  force(arg0: j_net_minecraft_world_item.ItemStack): void;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  receive(arg0: j_net_minecraft_network.HashedStack): void;
}
export type RemoteSlot = RemoteSlotMembers;
export interface RemoteSlotStatics {
  readonly PLACEHOLDER: RemoteSlot;
}

/** JVM class net.minecraft.world.inventory.RemoteSlot$Synchronized. */
export interface RemoteSlot_SynchronizedMembers {
  readonly __javaSupertypes?: readonly [RemoteSlot];
  copyFrom(arg0: RemoteSlot_Synchronized): void;
  force(arg0: j_net_minecraft_world_item.ItemStack): void;
  matches(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  receive(arg0: j_net_minecraft_network.HashedStack): void;
}
export type RemoteSlot_Synchronized = RemoteSlot_SynchronizedMembers & RemoteSlot;
export interface RemoteSlot_SynchronizedStatics {
  new(arg0: j_net_minecraft_network.HashedPatchMap_HashGenerator): RemoteSlot_Synchronized;
}

/** JVM class net.minecraft.world.inventory.ResultContainer. */
export interface ResultContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container, RecipeCraftingHolder];
  clearContent(): void;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getRecipeUsed(): j_net_minecraft_world_item_crafting.RecipeHolder<object> | null;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  setRecipeUsed(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<object> | null): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ResultContainer = ResultContainerMembers & j_net_minecraft_world.Container & RecipeCraftingHolder;
export interface ResultContainerStatics {
  new(): ResultContainer;
  new(arg0: JavaSupplier<JavaOpaque<"org.bukkit.inventory.InventoryHolder">>): ResultContainer;
}

/** JVM class net.minecraft.world.inventory.ResultSlot. */
export interface ResultSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  isFake(): boolean;
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  onTake(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  remove(arg0: number): j_net_minecraft_world_item.ItemStack;
}
export type ResultSlot = ResultSlotMembers & Slot;
export interface ResultSlotStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: CraftingContainer, arg2: j_net_minecraft_world.Container, arg3: number, arg4: number, arg5: number): ResultSlot;
}

/** JVM class net.minecraft.world.inventory.ShulkerBoxMenu. */
export interface ShulkerBoxMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  startOpen(): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ShulkerBoxMenu = ShulkerBoxMenuMembers & AbstractContainerMenu;
export interface ShulkerBoxMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): ShulkerBoxMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container): ShulkerBoxMenu;
}

/** JVM class net.minecraft.world.inventory.ShulkerBoxSlot. */
export interface ShulkerBoxSlotMembers {
  readonly __javaSupertypes?: readonly [Slot];
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type ShulkerBoxSlot = ShulkerBoxSlotMembers & Slot;
export interface ShulkerBoxSlotStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: number, arg2: number, arg3: number): ShulkerBoxSlot;
}

/** JVM class net.minecraft.world.inventory.SimpleContainerData. */
export interface SimpleContainerDataMembers {
  readonly __javaSupertypes?: readonly [ContainerData];
  get(arg0: number): number;
  getCount(): number;
  set(arg0: number, arg1: number): void;
}
export type SimpleContainerData = SimpleContainerDataMembers & ContainerData;
export interface SimpleContainerDataStatics {
  new(arg0: number): SimpleContainerData;
}

/** JVM class net.minecraft.world.inventory.Slot. */
export interface SlotMembers {
  allowModification(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  readonly container: j_net_minecraft_world.Container;
  getContainerSlot(): number;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getMaxStackSize(): number;
  getMaxStackSize(arg0: j_net_minecraft_world_item.ItemStack): number;
  getNoItemIcon(): j_net_minecraft_resources.ResourceLocation | null;
  hasItem(): boolean;
  index: number;
  isActive(): boolean;
  isFake(): boolean;
  isHighlightable(): boolean;
  mayPickup(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  mayPlace(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  onQuickCraft(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): void;
  onTake(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  remove(arg0: number): j_net_minecraft_world_item.ItemStack;
  safeInsert(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  safeInsert(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): j_net_minecraft_world_item.ItemStack;
  safeTake(arg0: number, arg1: number, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_item.ItemStack;
  set(arg0: j_net_minecraft_world_item.ItemStack): void;
  setByPlayer(arg0: j_net_minecraft_world_item.ItemStack): void;
  setByPlayer(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): void;
  setChanged(): void;
  readonly slot: number;
  tryRemove(arg0: number, arg1: number, arg2: j_net_minecraft_world_entity_player.Player): JavaOptional<j_net_minecraft_world_item.ItemStack>;
  readonly x: number;
  readonly y: number;
}
export type Slot = SlotMembers;
export interface SlotStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: number, arg2: number, arg3: number): Slot;
}

/** JVM interface net.minecraft.world.inventory.SlotRange. */
export interface SlotRangeMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util.StringRepresentable];
  size(): number;
  slots(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
}
export type SlotRange = SlotRangeMembers & j_net_minecraft_util.StringRepresentable;
export interface SlotRangeStatics {
  of(arg0: string, arg1: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">): SlotRange;
}

/** JVM class net.minecraft.world.inventory.SlotRanges. */
export interface SlotRangesMembers {
}
export type SlotRanges = SlotRangesMembers;
export interface SlotRangesStatics {
  new(): SlotRanges;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SlotRange]>;
  allNames(): JavaOpaque<"java.util.stream.Stream", [string]>;
  nameToIds(arg0: string): SlotRange | null;
  singleSlotNames(): JavaOpaque<"java.util.stream.Stream", [string]>;
}

/** JVM class net.minecraft.world.inventory.SmithingMenu. */
export interface SmithingMenuMembers {
  readonly __javaSupertypes?: readonly [ItemCombinerMenu];
  canMoveIntoInputSlots(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  createResult(): void;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory.CraftInventoryView;
  hasRecipeError(): boolean;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
}
export type SmithingMenu = SmithingMenuMembers & ItemCombinerMenu;
export interface SmithingMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): SmithingMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): SmithingMenu;
  readonly ADDITIONAL_SLOT: 2;
  readonly ADDITIONAL_SLOT_X_PLACEMENT: 44;
  readonly BASE_SLOT: 1;
  readonly BASE_SLOT_X_PLACEMENT: 26;
  readonly RESULT_SLOT: 3;
  readonly SLOT_Y_PLACEMENT: 48;
  readonly TEMPLATE_SLOT: 0;
  readonly TEMPLATE_SLOT_X_PLACEMENT: 8;
}

/** JVM class net.minecraft.world.inventory.SmokerMenu. */
export interface SmokerMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceMenu];
}
export type SmokerMenu = SmokerMenuMembers & AbstractFurnaceMenu;
export interface SmokerMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): SmokerMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world.Container, arg3: ContainerData): SmokerMenu;
}

/** JVM interface net.minecraft.world.inventory.StackedContentsCompatible. */
export interface StackedContentsCompatibleMembers {
  fillStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
}
export type StackedContentsCompatible = StackedContentsCompatibleMembers;
export interface StackedContentsCompatibleStatics {
}

/** JVM class net.minecraft.world.inventory.StonecutterMenu. */
export interface StonecutterMenuMembers {
  readonly __javaSupertypes?: readonly [AbstractContainerMenu];
  canTakeItemForPickAll(arg0: j_net_minecraft_world_item.ItemStack, arg1: Slot): boolean;
  clickMenuButton(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): boolean;
  readonly container: j_net_minecraft_world.Container;
  getBukkitView(): j_org_bukkit_craftbukkit_inventory_view.CraftStonecutterView;
  getNumberOfVisibleRecipes(): number;
  getSelectedRecipeIndex(): number;
  getType(): MenuType<object>;
  getVisibleRecipes(): j_net_minecraft_world_item_crafting.SelectableRecipe_SingleInputSet<j_net_minecraft_world_item_crafting.StonecutterRecipe>;
  hasInputItem(): boolean;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  registerUpdateListener(arg0: JavaRunnable): void;
  removed(arg0: j_net_minecraft_world_entity_player.Player): void;
  slotsChanged(arg0: j_net_minecraft_world.Container): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type StonecutterMenu = StonecutterMenuMembers & AbstractContainerMenu;
export interface StonecutterMenuStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory): StonecutterMenu;
  new(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: ContainerLevelAccess): StonecutterMenu;
  readonly INPUT_SLOT: 0;
  readonly RESULT_SLOT: 1;
}

/** JVM class net.minecraft.world.inventory.TransientCraftingContainer. */
export interface TransientCraftingContainerMembers {
  readonly __javaSupertypes?: readonly [CraftingContainer];
  clearContent(): void;
  fillStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getCurrentRecipe(): j_net_minecraft_world_item_crafting.RecipeHolder<j_net_minecraft_world_item_crafting.CraftingRecipe>;
  getHeight(): number;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getItems(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  getWidth(): number;
  isEmpty(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  resultInventory: j_net_minecraft_world.Container;
  setChanged(): void;
  setCurrentRecipe(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<j_net_minecraft_world_item_crafting.CraftingRecipe>): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type TransientCraftingContainer = TransientCraftingContainerMembers & CraftingContainer;
export interface TransientCraftingContainerStatics {
  new(arg0: AbstractContainerMenu, arg1: number, arg2: number): TransientCraftingContainer;
  new(arg0: AbstractContainerMenu, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity_player.Player): TransientCraftingContainer;
}
