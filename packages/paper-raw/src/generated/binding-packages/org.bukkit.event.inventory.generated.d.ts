// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_event_inventory from './com.destroystokyo.paper.event.inventory.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_block from './org.bukkit.event.block.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_view from './org.bukkit.inventory.view.generated.js';

/** JVM class org.bukkit.event.inventory.BrewEvent. */
export interface BrewEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getContents(): j_org_bukkit_inventory.BrewerInventory;
  getFuelLevel(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getResults(): JavaList<j_org_bukkit_inventory.ItemStack>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BrewEvent = BrewEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface BrewEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.BrewerInventory, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number): BrewEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.BrewingStandFuelEvent. */
export interface BrewingStandFuelEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getFuel(): j_org_bukkit_inventory.ItemStack;
  getFuelPower(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isConsuming(): boolean;
  setCancelled(arg0: boolean): void;
  setConsuming(arg0: boolean): void;
  setFuelPower(arg0: number): void;
}
export type BrewingStandFuelEvent = BrewingStandFuelEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface BrewingStandFuelEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): BrewingStandFuelEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.inventory.ClickType; constants are host handles, not strings. */
export type ClickType = JavaEnum<"org.bukkit.event.inventory.ClickType", "CONTROL_DROP" | "CREATIVE" | "DOUBLE_CLICK" | "DROP" | "LEFT" | "MIDDLE" | "NUMBER_KEY" | "RIGHT" | "SHIFT_LEFT" | "SHIFT_RIGHT" | "SWAP_OFFHAND" | "UNKNOWN" | "WINDOW_BORDER_LEFT" | "WINDOW_BORDER_RIGHT"> & ClickTypeMembers;
export interface ClickTypeMembers {
  isCreativeAction(): boolean;
  isKeyboardClick(): boolean;
  isLeftClick(): boolean;
  isMouseClick(): boolean;
  isRightClick(): boolean;
  isShiftClick(): boolean;
}
export interface ClickTypeStatics {
  readonly CONTROL_DROP: ClickType;
  readonly CREATIVE: ClickType;
  readonly DOUBLE_CLICK: ClickType;
  readonly DROP: ClickType;
  readonly LEFT: ClickType;
  readonly MIDDLE: ClickType;
  readonly NUMBER_KEY: ClickType;
  readonly RIGHT: ClickType;
  readonly SHIFT_LEFT: ClickType;
  readonly SHIFT_RIGHT: ClickType;
  readonly SWAP_OFFHAND: ClickType;
  readonly UNKNOWN: ClickType;
  readonly WINDOW_BORDER_LEFT: ClickType;
  readonly WINDOW_BORDER_RIGHT: ClickType;
  valueOf(arg0: string): ClickType;
  values(): Array<ClickType>;
}

/** JVM class org.bukkit.event.inventory.CraftItemEvent. */
export interface CraftItemEventMembers {
  readonly __javaSupertypes?: readonly [InventoryClickEvent];
  getInventory(): j_org_bukkit_inventory.CraftingInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getRecipe(): j_org_bukkit_inventory.Recipe;
}
export type CraftItemEvent = CraftItemEventMembers & InventoryClickEvent;
export interface CraftItemEventStatics {
  new(arg0: j_org_bukkit_inventory.Recipe, arg1: j_org_bukkit_inventory.InventoryView, arg2: InventoryType_SlotType, arg3: number, arg4: ClickType, arg5: InventoryAction): CraftItemEvent;
  new(arg0: j_org_bukkit_inventory.Recipe, arg1: j_org_bukkit_inventory.InventoryView, arg2: InventoryType_SlotType, arg3: number, arg4: ClickType, arg5: InventoryAction, arg6: number): CraftItemEvent;
}

/** Live JVM enum org.bukkit.event.inventory.DragType; constants are host handles, not strings. */
export type DragType = JavaEnum<"org.bukkit.event.inventory.DragType", "EVEN" | "SINGLE"> & DragTypeMembers;
export interface DragTypeMembers {
}
export interface DragTypeStatics {
  readonly EVEN: DragType;
  readonly SINGLE: DragType;
  valueOf(arg0: string): DragType;
  values(): Array<DragType>;
}

/** JVM class org.bukkit.event.inventory.FurnaceBurnEvent. */
export interface FurnaceBurnEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent, j_org_bukkit_event.Cancellable];
  getBurnTime(): number;
  getFuel(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isBurning(): boolean;
  isCancelled(): boolean;
  setBurnTime(arg0: number): void;
  setBurning(arg0: boolean): void;
  setCancelled(arg0: boolean): void;
  setConsumeFuel(arg0: boolean): void;
  willConsumeFuel(): boolean;
}
export type FurnaceBurnEvent = FurnaceBurnEventMembers & j_org_bukkit_event_block.BlockEvent & j_org_bukkit_event.Cancellable;
export interface FurnaceBurnEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): FurnaceBurnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.FurnaceExtractEvent. */
export interface FurnaceExtractEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockExpEvent];
  getItemAmount(): number;
  getItemType(): j_org_bukkit.Material;
  getPlayer(): j_org_bukkit_entity.Player;
}
export type FurnaceExtractEvent = FurnaceExtractEventMembers & j_org_bukkit_event_block.BlockExpEvent;
export interface FurnaceExtractEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit.Material, arg3: number, arg4: number): FurnaceExtractEvent;
}

/** JVM class org.bukkit.event.inventory.FurnaceSmeltEvent. */
export interface FurnaceSmeltEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockCookEvent];
}
export type FurnaceSmeltEvent = FurnaceSmeltEventMembers & j_org_bukkit_event_block.BlockCookEvent;
export interface FurnaceSmeltEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack): FurnaceSmeltEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.CookingRecipe<object> | null): FurnaceSmeltEvent;
}

/** JVM class org.bukkit.event.inventory.FurnaceStartSmeltEvent. */
export interface FurnaceStartSmeltEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.InventoryBlockStartEvent];
  getRecipe(): j_org_bukkit_inventory.CookingRecipe<object>;
  getTotalCookTime(): number;
  setTotalCookTime(arg0: number): void;
}
export type FurnaceStartSmeltEvent = FurnaceStartSmeltEventMembers & j_org_bukkit_event_block.InventoryBlockStartEvent;
export interface FurnaceStartSmeltEventStatics {
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.CookingRecipe<object>): FurnaceStartSmeltEvent;
  new(arg0: j_org_bukkit_block.Block, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.CookingRecipe<object>, arg3: number): FurnaceStartSmeltEvent;
}

/** JVM class org.bukkit.event.inventory.HopperInventorySearchEvent. */
export interface HopperInventorySearchEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_block.BlockEvent];
  getContainerType(): HopperInventorySearchEvent_ContainerType;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventory(): j_org_bukkit_inventory.Inventory | null;
  getSearchBlock(): j_org_bukkit_block.Block;
  setInventory(arg0: j_org_bukkit_inventory.Inventory | null): void | null;
}
export type HopperInventorySearchEvent = HopperInventorySearchEventMembers & j_org_bukkit_event_block.BlockEvent;
export interface HopperInventorySearchEventStatics {
  new(arg0: j_org_bukkit_inventory.Inventory | null, arg1: HopperInventorySearchEvent_ContainerType, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.Block): HopperInventorySearchEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.inventory.HopperInventorySearchEvent$ContainerType; constants are host handles, not strings. */
export type HopperInventorySearchEvent_ContainerType = JavaEnum<"org.bukkit.event.inventory.HopperInventorySearchEvent$ContainerType", "DESTINATION" | "SOURCE"> & HopperInventorySearchEvent_ContainerTypeMembers;
export interface HopperInventorySearchEvent_ContainerTypeMembers {
}
export interface HopperInventorySearchEvent_ContainerTypeStatics {
  readonly DESTINATION: HopperInventorySearchEvent_ContainerType;
  readonly SOURCE: HopperInventorySearchEvent_ContainerType;
  valueOf(arg0: string): HopperInventorySearchEvent_ContainerType;
  values(): Array<HopperInventorySearchEvent_ContainerType>;
}

/** Live JVM enum org.bukkit.event.inventory.InventoryAction; constants are host handles, not strings. */
export type InventoryAction = JavaEnum<"org.bukkit.event.inventory.InventoryAction", "CLONE_STACK" | "COLLECT_TO_CURSOR" | "DROP_ALL_CURSOR" | "DROP_ALL_SLOT" | "DROP_ONE_CURSOR" | "DROP_ONE_SLOT" | "HOTBAR_MOVE_AND_READD" | "HOTBAR_SWAP" | "MOVE_TO_OTHER_INVENTORY" | "NOTHING" | "PICKUP_ALL" | "PICKUP_ALL_INTO_BUNDLE" | "PICKUP_FROM_BUNDLE" | "PICKUP_HALF" | "PICKUP_ONE" | "PICKUP_SOME" | "PICKUP_SOME_INTO_BUNDLE" | "PLACE_ALL" | "PLACE_ALL_INTO_BUNDLE" | "PLACE_FROM_BUNDLE" | "PLACE_ONE" | "PLACE_SOME" | "PLACE_SOME_INTO_BUNDLE" | "SWAP_WITH_CURSOR" | "UNKNOWN"> & InventoryActionMembers;
export interface InventoryActionMembers {
}
export interface InventoryActionStatics {
  readonly CLONE_STACK: InventoryAction;
  readonly COLLECT_TO_CURSOR: InventoryAction;
  readonly DROP_ALL_CURSOR: InventoryAction;
  readonly DROP_ALL_SLOT: InventoryAction;
  readonly DROP_ONE_CURSOR: InventoryAction;
  readonly DROP_ONE_SLOT: InventoryAction;
  readonly HOTBAR_MOVE_AND_READD: InventoryAction;
  readonly HOTBAR_SWAP: InventoryAction;
  readonly MOVE_TO_OTHER_INVENTORY: InventoryAction;
  readonly NOTHING: InventoryAction;
  readonly PICKUP_ALL: InventoryAction;
  readonly PICKUP_ALL_INTO_BUNDLE: InventoryAction;
  readonly PICKUP_FROM_BUNDLE: InventoryAction;
  readonly PICKUP_HALF: InventoryAction;
  readonly PICKUP_ONE: InventoryAction;
  readonly PICKUP_SOME: InventoryAction;
  readonly PICKUP_SOME_INTO_BUNDLE: InventoryAction;
  readonly PLACE_ALL: InventoryAction;
  readonly PLACE_ALL_INTO_BUNDLE: InventoryAction;
  readonly PLACE_FROM_BUNDLE: InventoryAction;
  readonly PLACE_ONE: InventoryAction;
  readonly PLACE_SOME: InventoryAction;
  readonly PLACE_SOME_INTO_BUNDLE: InventoryAction;
  readonly SWAP_WITH_CURSOR: InventoryAction;
  readonly UNKNOWN: InventoryAction;
  valueOf(arg0: string): InventoryAction;
  values(): Array<InventoryAction>;
}

/** JVM class org.bukkit.event.inventory.InventoryClickEvent. */
export interface InventoryClickEventMembers {
  readonly __javaSupertypes?: readonly [InventoryInteractEvent];
  getAction(): InventoryAction;
  getClick(): ClickType;
  getClickedInventory(): j_org_bukkit_inventory.Inventory | null;
  getCurrentItem(): j_org_bukkit_inventory.ItemStack | null;
  getCursor(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHotbarButton(): number;
  getRawSlot(): number;
  getSlot(): number;
  getSlotType(): InventoryType_SlotType;
  isLeftClick(): boolean;
  isRightClick(): boolean;
  isShiftClick(): boolean;
  setCurrentItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setCursor(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type InventoryClickEvent = InventoryClickEventMembers & InventoryInteractEvent;
export interface InventoryClickEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: InventoryType_SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction): InventoryClickEvent;
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: InventoryType_SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction, arg5: number): InventoryClickEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.InventoryCloseEvent. */
export interface InventoryCloseEventMembers {
  readonly __javaSupertypes?: readonly [InventoryEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.HumanEntity;
  getReason(): InventoryCloseEvent_Reason;
}
export type InventoryCloseEvent = InventoryCloseEventMembers & InventoryEvent;
export interface InventoryCloseEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView): InventoryCloseEvent;
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: InventoryCloseEvent_Reason): InventoryCloseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.inventory.InventoryCloseEvent$Reason; constants are host handles, not strings. */
export type InventoryCloseEvent_Reason = JavaEnum<"org.bukkit.event.inventory.InventoryCloseEvent$Reason", "CANT_USE" | "DEATH" | "DISCONNECT" | "OPEN_NEW" | "PLAYER" | "PLUGIN" | "TELEPORT" | "UNKNOWN" | "UNLOADED"> & InventoryCloseEvent_ReasonMembers;
export interface InventoryCloseEvent_ReasonMembers {
}
export interface InventoryCloseEvent_ReasonStatics {
  readonly CANT_USE: InventoryCloseEvent_Reason;
  readonly DEATH: InventoryCloseEvent_Reason;
  readonly DISCONNECT: InventoryCloseEvent_Reason;
  readonly OPEN_NEW: InventoryCloseEvent_Reason;
  readonly PLAYER: InventoryCloseEvent_Reason;
  readonly PLUGIN: InventoryCloseEvent_Reason;
  readonly TELEPORT: InventoryCloseEvent_Reason;
  readonly UNKNOWN: InventoryCloseEvent_Reason;
  readonly UNLOADED: InventoryCloseEvent_Reason;
  valueOf(arg0: string): InventoryCloseEvent_Reason;
  values(): Array<InventoryCloseEvent_Reason>;
}

/** JVM class org.bukkit.event.inventory.InventoryCreativeEvent. */
export interface InventoryCreativeEventMembers {
  readonly __javaSupertypes?: readonly [InventoryClickEvent];
  getCursor(): j_org_bukkit_inventory.ItemStack;
  setCursor(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type InventoryCreativeEvent = InventoryCreativeEventMembers & InventoryClickEvent;
export interface InventoryCreativeEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: InventoryType_SlotType, arg2: number, arg3: j_org_bukkit_inventory.ItemStack): InventoryCreativeEvent;
}

/** JVM class org.bukkit.event.inventory.InventoryDragEvent. */
export interface InventoryDragEventMembers {
  readonly __javaSupertypes?: readonly [InventoryInteractEvent];
  getCursor(): j_org_bukkit_inventory.ItemStack | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventorySlots(): JavaSet<number>;
  getNewItems(): JavaMap<number, j_org_bukkit_inventory.ItemStack>;
  getOldCursor(): j_org_bukkit_inventory.ItemStack;
  getRawSlots(): JavaSet<number>;
  getType(): DragType;
  setCursor(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type InventoryDragEvent = InventoryDragEventMembers & InventoryInteractEvent;
export interface InventoryDragEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_inventory.ItemStack | null, arg2: j_org_bukkit_inventory.ItemStack, arg3: boolean, arg4: JavaMap<number, j_org_bukkit_inventory.ItemStack>): InventoryDragEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.InventoryEvent. */
export interface InventoryEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getView(): j_org_bukkit_inventory.InventoryView;
  getViewers(): JavaList<j_org_bukkit_entity.HumanEntity>;
  transaction: j_org_bukkit_inventory.InventoryView;
}
export type InventoryEvent = InventoryEventMembers & j_org_bukkit_event.Event;
export interface InventoryEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView): InventoryEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.inventory.InventoryInteractEvent. */
export interface InventoryInteractEventMembers {
  readonly __javaSupertypes?: readonly [InventoryEvent, j_org_bukkit_event.Cancellable];
  getResult(): j_org_bukkit_event.Event_Result;
  getWhoClicked(): j_org_bukkit_entity.HumanEntity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setResult(arg0: j_org_bukkit_event.Event_Result): void;
}
export type InventoryInteractEvent = InventoryInteractEventMembers & InventoryEvent & j_org_bukkit_event.Cancellable;
export interface InventoryInteractEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView): InventoryInteractEvent;
}

/** JVM class org.bukkit.event.inventory.InventoryMoveItemEvent. */
export interface InventoryMoveItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  getDestination(): j_org_bukkit_inventory.Inventory;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInitiator(): j_org_bukkit_inventory.Inventory;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getSource(): j_org_bukkit_inventory.Inventory;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type InventoryMoveItemEvent = InventoryMoveItemEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface InventoryMoveItemEventStatics {
  new(arg0: j_org_bukkit_inventory.Inventory, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.Inventory, arg3: boolean): InventoryMoveItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.InventoryOpenEvent. */
export interface InventoryOpenEventMembers {
  readonly __javaSupertypes?: readonly [InventoryEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.HumanEntity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  titleOverride(): j_net_kyori_adventure_text.Component | null;
  titleOverride(arg0: j_net_kyori_adventure_text.Component | null): void | null;
}
export type InventoryOpenEvent = InventoryOpenEventMembers & InventoryEvent & j_org_bukkit_event.Cancellable;
export interface InventoryOpenEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView): InventoryOpenEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.InventoryPickupItemEvent. */
export interface InventoryPickupItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getItem(): j_org_bukkit_entity.Item;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type InventoryPickupItemEvent = InventoryPickupItemEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface InventoryPickupItemEventStatics {
  new(arg0: j_org_bukkit_inventory.Inventory, arg1: j_org_bukkit_entity.Item): InventoryPickupItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.inventory.InventoryType; constants are host handles, not strings. */
export type InventoryType = JavaEnum<"org.bukkit.event.inventory.InventoryType", "ANVIL" | "BARREL" | "BEACON" | "BLAST_FURNACE" | "BREWING" | "CARTOGRAPHY" | "CHEST" | "CHISELED_BOOKSHELF" | "COMPOSTER" | "CRAFTER" | "CRAFTING" | "CREATIVE" | "DECORATED_POT" | "DISPENSER" | "DROPPER" | "ENCHANTING" | "ENDER_CHEST" | "FURNACE" | "GRINDSTONE" | "HOPPER" | "JUKEBOX" | "LECTERN" | "LOOM" | "MERCHANT" | "PLAYER" | "SHULKER_BOX" | "SMITHING" | "SMITHING_NEW" | "SMOKER" | "STONECUTTER" | "WORKBENCH"> & InventoryTypeMembers;
export interface InventoryTypeMembers {
  defaultTitle(): j_net_kyori_adventure_text.Component;
  getDefaultSize(): number;
  getDefaultTitle(): string;
  getMenuType(): j_org_bukkit_inventory.MenuType | null;
  isCreatable(): boolean;
}
export interface InventoryTypeStatics {
  readonly ANVIL: InventoryType;
  readonly BARREL: InventoryType;
  readonly BEACON: InventoryType;
  readonly BLAST_FURNACE: InventoryType;
  readonly BREWING: InventoryType;
  readonly CARTOGRAPHY: InventoryType;
  readonly CHEST: InventoryType;
  readonly CHISELED_BOOKSHELF: InventoryType;
  readonly COMPOSTER: InventoryType;
  readonly CRAFTER: InventoryType;
  readonly CRAFTING: InventoryType;
  readonly CREATIVE: InventoryType;
  readonly DECORATED_POT: InventoryType;
  readonly DISPENSER: InventoryType;
  readonly DROPPER: InventoryType;
  readonly ENCHANTING: InventoryType;
  readonly ENDER_CHEST: InventoryType;
  readonly FURNACE: InventoryType;
  readonly GRINDSTONE: InventoryType;
  readonly HOPPER: InventoryType;
  readonly JUKEBOX: InventoryType;
  readonly LECTERN: InventoryType;
  readonly LOOM: InventoryType;
  readonly MERCHANT: InventoryType;
  readonly PLAYER: InventoryType;
  readonly SHULKER_BOX: InventoryType;
  readonly SMITHING: InventoryType;
  readonly SMITHING_NEW: InventoryType;
  readonly SMOKER: InventoryType;
  readonly STONECUTTER: InventoryType;
  readonly WORKBENCH: InventoryType;
  valueOf(arg0: string): InventoryType;
  values(): Array<InventoryType>;
}

/** Live JVM enum org.bukkit.event.inventory.InventoryType$SlotType; constants are host handles, not strings. */
export type InventoryType_SlotType = JavaEnum<"org.bukkit.event.inventory.InventoryType$SlotType", "ARMOR" | "CONTAINER" | "CRAFTING" | "FUEL" | "OUTSIDE" | "QUICKBAR" | "RESULT"> & InventoryType_SlotTypeMembers;
export interface InventoryType_SlotTypeMembers {
}
export interface InventoryType_SlotTypeStatics {
  readonly ARMOR: InventoryType_SlotType;
  readonly CONTAINER: InventoryType_SlotType;
  readonly CRAFTING: InventoryType_SlotType;
  readonly FUEL: InventoryType_SlotType;
  readonly OUTSIDE: InventoryType_SlotType;
  readonly QUICKBAR: InventoryType_SlotType;
  readonly RESULT: InventoryType_SlotType;
  valueOf(arg0: string): InventoryType_SlotType;
  values(): Array<InventoryType_SlotType>;
}

/** JVM class org.bukkit.event.inventory.PrepareAnvilEvent. */
export interface PrepareAnvilEventMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_event_inventory.PrepareResultEvent];
  getInventory(): j_org_bukkit_inventory.AnvilInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getView(): j_org_bukkit_inventory.InventoryView;
  getView(): j_org_bukkit_inventory_view.AnvilView;
  setResult(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type PrepareAnvilEvent = PrepareAnvilEventMembers & j_com_destroystokyo_paper_event_inventory.PrepareResultEvent;
export interface PrepareAnvilEventStatics {
  new(arg0: j_org_bukkit_inventory_view.AnvilView, arg1: j_org_bukkit_inventory.ItemStack | null): PrepareAnvilEvent;
}

/** JVM class org.bukkit.event.inventory.PrepareGrindstoneEvent. */
export interface PrepareGrindstoneEvent_2Members {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_event_inventory.PrepareGrindstoneEvent];
  getInventory(): j_org_bukkit_inventory.GrindstoneInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
}
export type PrepareGrindstoneEvent_2 = PrepareGrindstoneEvent_2Members & j_com_destroystokyo_paper_event_inventory.PrepareGrindstoneEvent;
export interface PrepareGrindstoneEvent_2Statics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_inventory.ItemStack | null): PrepareGrindstoneEvent_2;
}

/** JVM class org.bukkit.event.inventory.PrepareInventoryResultEvent. */
export interface PrepareInventoryResultEventMembers {
  readonly __javaSupertypes?: readonly [InventoryEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getResult(): j_org_bukkit_inventory.ItemStack | null;
  setResult(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type PrepareInventoryResultEvent = PrepareInventoryResultEventMembers & InventoryEvent;
export interface PrepareInventoryResultEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_inventory.ItemStack | null): PrepareInventoryResultEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.PrepareItemCraftEvent. */
export interface PrepareItemCraftEventMembers {
  readonly __javaSupertypes?: readonly [InventoryEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInventory(): j_org_bukkit_inventory.CraftingInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getRecipe(): j_org_bukkit_inventory.Recipe | null;
  isRepair(): boolean;
}
export type PrepareItemCraftEvent = PrepareItemCraftEventMembers & InventoryEvent;
export interface PrepareItemCraftEventStatics {
  new(arg0: j_org_bukkit_inventory.CraftingInventory, arg1: j_org_bukkit_inventory.InventoryView, arg2: boolean): PrepareItemCraftEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.inventory.PrepareSmithingEvent. */
export interface PrepareSmithingEventMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_event_inventory.PrepareResultEvent];
  getInventory(): j_org_bukkit_inventory.Inventory;
  getInventory(): j_org_bukkit_inventory.SmithingInventory;
}
export type PrepareSmithingEvent = PrepareSmithingEventMembers & j_com_destroystokyo_paper_event_inventory.PrepareResultEvent;
export interface PrepareSmithingEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_inventory.ItemStack | null): PrepareSmithingEvent;
}

/** JVM class org.bukkit.event.inventory.SmithItemEvent. */
export interface SmithItemEventMembers {
  readonly __javaSupertypes?: readonly [InventoryClickEvent];
  getInventory(): j_org_bukkit_inventory.Inventory;
  getInventory(): j_org_bukkit_inventory.SmithingInventory;
}
export type SmithItemEvent = SmithItemEventMembers & InventoryClickEvent;
export interface SmithItemEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: InventoryType_SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction): SmithItemEvent;
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: InventoryType_SlotType, arg2: number, arg3: ClickType, arg4: InventoryAction, arg5: number): SmithItemEvent;
}

/** JVM class org.bukkit.event.inventory.TradeSelectEvent. */
export interface TradeSelectEventMembers {
  readonly __javaSupertypes?: readonly [InventoryInteractEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getIndex(): number;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getInventory(): j_org_bukkit_inventory.MerchantInventory;
  getMerchant(): j_org_bukkit_inventory.Merchant;
  getView(): j_org_bukkit_inventory.InventoryView;
  getView(): j_org_bukkit_inventory_view.MerchantView;
}
export type TradeSelectEvent = TradeSelectEventMembers & InventoryInteractEvent;
export interface TradeSelectEventStatics {
  new(arg0: j_org_bukkit_inventory_view.MerchantView, arg1: number): TradeSelectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
