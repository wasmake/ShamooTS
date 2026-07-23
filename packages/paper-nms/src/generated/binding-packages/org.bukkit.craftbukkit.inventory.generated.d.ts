// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_org_bukkit_craftbukkit_block from './org.bukkit.craftbukkit.block.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM abstract org.bukkit.craftbukkit.inventory.CraftAbstractInventoryView. */
export interface CraftAbstractInventoryViewMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.InventoryView">];
  close(): void;
  convertSlot(arg0: number): number;
  countSlots(): number;
  getCursor(): JavaOpaque<"org.bukkit.inventory.ItemStack"> | null;
  getInventory(arg0: number): JavaOpaque<"org.bukkit.inventory.Inventory"> | null;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack"> | null;
  getSlotType(arg0: number): JavaOpaque<"org.bukkit.event.inventory.InventoryType$SlotType">;
  open(): void;
  setCursor(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack"> | null): void | null;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack"> | null): void | null;
  setProperty(arg0: JavaOpaque<"org.bukkit.inventory.InventoryView$Property">, arg1: number): boolean;
}
export type CraftAbstractInventoryView = CraftAbstractInventoryViewMembers & JavaOpaque<"org.bukkit.inventory.InventoryView">;
export interface CraftAbstractInventoryViewStatics {
  new(): CraftAbstractInventoryView;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftBlastingRecipe. */
export interface CraftBlastingRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.BlastingRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftBlastingRecipe = CraftBlastingRecipeMembers & JavaOpaque<"org.bukkit.inventory.BlastingRecipe"> & CraftRecipe;
export interface CraftBlastingRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: number, arg4: number): CraftBlastingRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.BlastingRecipe">): CraftBlastingRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftBlockInventoryHolder. */
export interface CraftBlockInventoryHolderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.BlockInventoryHolder">];
  getBlock(): JavaOpaque<"org.bukkit.block.Block">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftBlockInventoryHolder = CraftBlockInventoryHolderMembers & JavaOpaque<"org.bukkit.inventory.BlockInventoryHolder">;
export interface CraftBlockInventoryHolderStatics {
  new(arg0: j_net_minecraft_world_inventory.ContainerLevelAccess, arg1: JavaOpaque<"org.bukkit.inventory.Inventory">): CraftBlockInventoryHolder;
  new(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world.Container): CraftBlockInventoryHolder;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftCampfireRecipe. */
export interface CraftCampfireRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.CampfireRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftCampfireRecipe = CraftCampfireRecipeMembers & JavaOpaque<"org.bukkit.inventory.CampfireRecipe"> & CraftRecipe;
export interface CraftCampfireRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: number, arg4: number): CraftCampfireRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.CampfireRecipe">): CraftCampfireRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftComplexRecipe. */
export interface CraftComplexRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.CraftingRecipe">, CraftRecipe, JavaOpaque<"org.bukkit.inventory.ComplexRecipe">];
  addToCraftingManager(): void;
}
export type CraftComplexRecipe = CraftComplexRecipeMembers & JavaOpaque<"org.bukkit.inventory.CraftingRecipe"> & CraftRecipe & JavaOpaque<"org.bukkit.inventory.ComplexRecipe">;
export interface CraftComplexRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: j_net_minecraft_world_item_crafting.CustomRecipe): CraftComplexRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftContainer. */
export interface CraftContainer_2Members {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_inventory.AbstractContainerMenu];
  getBukkitView(): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  getType(): j_net_minecraft_world_inventory.MenuType<object>;
  quickMoveStack(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): j_net_minecraft_world_item.ItemStack;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type CraftContainer_2 = CraftContainer_2Members & j_net_minecraft_world_inventory.AbstractContainerMenu;
export interface CraftContainer_2Statics {
  new(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: j_net_minecraft_world_entity_player.Player, arg2: number): CraftContainer_2;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryView">, arg1: j_net_minecraft_world_entity_player.Player, arg2: number): CraftContainer_2;
  getNotchInventoryType(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">): j_net_minecraft_world_inventory.MenuType;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftEntityEquipment. */
export interface CraftEntityEquipmentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.EntityEquipment">];
  clear(): void;
  getArmorContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getBoots(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getBootsDropChance(): number;
  getChestplate(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getChestplateDropChance(): number;
  getDropChance(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): number;
  getHelmet(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getHelmetDropChance(): number;
  getHolder(): JavaOpaque<"org.bukkit.entity.Entity">;
  getItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInHandDropChance(): number;
  getItemInMainHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInMainHandDropChance(): number;
  getItemInOffHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInOffHandDropChance(): number;
  getLeggings(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLeggingsDropChance(): number;
  setArmorContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setBoots(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setBoots(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setBootsDropChance(arg0: number): void;
  setChestplate(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setChestplate(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setChestplateDropChance(arg0: number): void;
  setDropChance(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: number): void;
  setHelmet(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setHelmet(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setHelmetDropChance(arg0: number): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: boolean): void;
  setItemInHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInHandDropChance(arg0: number): void;
  setItemInMainHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInMainHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setItemInMainHandDropChance(arg0: number): void;
  setItemInOffHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInOffHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setItemInOffHandDropChance(arg0: number): void;
  setLeggings(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLeggings(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setLeggingsDropChance(arg0: number): void;
}
export type CraftEntityEquipment = CraftEntityEquipmentMembers & JavaOpaque<"org.bukkit.inventory.EntityEquipment">;
export interface CraftEntityEquipmentStatics {
  new(arg0: j_org_bukkit_craftbukkit_entity.CraftLivingEntity): CraftEntityEquipment;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftFurnaceRecipe. */
export interface CraftFurnaceRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.FurnaceRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftFurnaceRecipe = CraftFurnaceRecipeMembers & JavaOpaque<"org.bukkit.inventory.FurnaceRecipe"> & CraftRecipe;
export interface CraftFurnaceRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: number, arg4: number): CraftFurnaceRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.FurnaceRecipe">): CraftFurnaceRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventory. */
export interface CraftInventoryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.Inventory">];
  addItem(...arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): JavaOpaque<"java.util.HashMap", [number, JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  all(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"java.util.HashMap", [number, JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  all(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"java.util.HashMap", [number, JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  asCraftMirror(arg0: JavaList<j_net_minecraft_world_item.ItemStack>): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  clear(): void;
  clear(arg0: number): void;
  close(): number;
  contains(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number): boolean;
  containsAtLeast(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number): boolean;
  equals(arg0: object): boolean;
  first(arg0: JavaOpaque<"org.bukkit.Material">): number;
  first(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): number;
  firstEmpty(): number;
  getContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getHolder(arg0: boolean): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getInventory(): j_net_minecraft_world.Container;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaxStackSize(): number;
  getSize(): number;
  getStorageContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getType(): JavaOpaque<"org.bukkit.event.inventory.InventoryType">;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  hashCode(): number;
  readonly inventory: j_net_minecraft_world.Container;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator">;
  iterator(): JavaOpaque<"java.util.ListIterator", [JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  iterator(arg0: number): JavaOpaque<"java.util.ListIterator", [JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  remove(arg0: JavaOpaque<"org.bukkit.Material">): void;
  remove(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  removeItem(...arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): JavaOpaque<"java.util.HashMap", [number, JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  removeItemAnySlot(...arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): JavaOpaque<"java.util.HashMap", [number, JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  setContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setMaxStackSize(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setStorageContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
}
export type CraftInventory = CraftInventoryMembers & JavaOpaque<"org.bukkit.inventory.Inventory">;
export interface CraftInventoryStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventory;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryAbstractHorse. */
export interface CraftInventoryAbstractHorseMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.AbstractHorseInventory">];
  getArmor(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getArmorInventory(): j_net_minecraft_world.Container;
  getContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getMainInventory(): j_net_minecraft_world.Container;
  getSaddle(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getSaddleInventory(): j_net_minecraft_world.Container;
  getSize(): number;
  isEmpty(): boolean;
  setArmor(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setSaddle(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryAbstractHorse = CraftInventoryAbstractHorseMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.AbstractHorseInventory">;
export interface CraftInventoryAbstractHorseStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world.Container): CraftInventoryAbstractHorse;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryAnvil. */
export interface CraftInventoryAnvilMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.AnvilInventory">];
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaximumRepairCost(): number;
  getRenameText(): string;
  getRepairCost(): number;
  getRepairCostAmount(): number;
  isMaximumRepairCostSet(): boolean;
  isRepairCostAmountSet(): boolean;
  isRepairCostSet(): boolean;
  setMaximumRepairCost(arg0: number): void;
  setRepairCost(arg0: number): void;
  setRepairCostAmount(arg0: number): void;
}
export type CraftInventoryAnvil = CraftInventoryAnvilMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.AnvilInventory">;
export interface CraftInventoryAnvilStatics {
  new(arg0: JavaOpaque<"org.bukkit.Location">, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world.Container): CraftInventoryAnvil;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryBeacon. */
export interface CraftInventoryBeaconMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.BeaconInventory">];
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryBeacon = CraftInventoryBeaconMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.BeaconInventory">;
export interface CraftInventoryBeaconStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventoryBeacon;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryBrewer. */
export interface CraftInventoryBrewerMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.BrewerInventory">];
  getFuel(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getHolder(): JavaOpaque<"org.bukkit.block.BrewingStand">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getIngredient(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setFuel(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryBrewer = CraftInventoryBrewerMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.BrewerInventory">;
export interface CraftInventoryBrewerStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventoryBrewer;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryCartography. */
export interface CraftInventoryCartographyMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.CartographyInventory">];
}
export type CraftInventoryCartography = CraftInventoryCartographyMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.CartographyInventory">;
export interface CraftInventoryCartographyStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container): CraftInventoryCartography;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryChiseledBookshelf. */
export interface CraftInventoryChiseledBookshelfMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.ChiseledBookshelfInventory">];
  getHolder(): JavaOpaque<"org.bukkit.block.ChiseledBookshelf">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryChiseledBookshelf = CraftInventoryChiseledBookshelfMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.ChiseledBookshelfInventory">;
export interface CraftInventoryChiseledBookshelfStatics {
  new(arg0: j_net_minecraft_world_level_block_entity.ChiseledBookShelfBlockEntity): CraftInventoryChiseledBookshelf;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryCrafter. */
export interface CraftInventoryCrafterMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.CrafterInventory">];
}
export type CraftInventoryCrafter = CraftInventoryCrafterMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.CrafterInventory">;
export interface CraftInventoryCrafterStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container): CraftInventoryCrafter;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryCrafting. */
export interface CraftInventoryCraftingMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.CraftingInventory">];
  getContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getItem(arg0: number): CraftItemStack;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getMatrix(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getMatrixInventory(): j_net_minecraft_world_inventory.CraftingContainer;
  getRecipe(): JavaOpaque<"org.bukkit.inventory.Recipe">;
  getResult(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getResultInventory(): j_net_minecraft_world.Container;
  getSize(): number;
  setContents(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setMatrix(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setResult(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryCrafting = CraftInventoryCraftingMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.CraftingInventory">;
export interface CraftInventoryCraftingStatics {
  new(arg0: j_net_minecraft_world_inventory.CraftingContainer, arg1: j_net_minecraft_world.Container): CraftInventoryCrafting;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryCustom. */
export interface CraftInventoryCustomMembers {
  readonly __javaSupertypes?: readonly [CraftInventory];
  getTitle(): string;
  title(): JavaOpaque<"net.kyori.adventure.text.Component">;
}
export type CraftInventoryCustom = CraftInventoryCustomMembers & CraftInventory;
export interface CraftInventoryCustomStatics {
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number): CraftInventoryCustom;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: string): CraftInventoryCustom;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: number, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): CraftInventoryCustom;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">): CraftInventoryCustom;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: string): CraftInventoryCustom;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">): CraftInventoryCustom;
  new(arg0: JavaOpaque<"org.bukkit.inventory.InventoryHolder">, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryType">, arg2: j_net_minecraft_world.Container): CraftInventoryCustom;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryDecoratedPot. */
export interface CraftInventoryDecoratedPotMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.DecoratedPotInventory">];
  getHolder(): JavaOpaque<"org.bukkit.block.DecoratedPot">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryDecoratedPot = CraftInventoryDecoratedPotMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.DecoratedPotInventory">;
export interface CraftInventoryDecoratedPotStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventoryDecoratedPot;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryDoubleChest. */
export interface CraftInventoryDoubleChestMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.DoubleChestInventory">];
  getHolder(): JavaOpaque<"org.bukkit.block.DoubleChest">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getHolder(arg0: boolean): JavaOpaque<"org.bukkit.block.DoubleChest">;
  getHolder(arg0: boolean): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getLeftSide(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getRightSide(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  provider: j_net_minecraft_world.MenuProvider;
  setContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
}
export type CraftInventoryDoubleChest = CraftInventoryDoubleChestMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.DoubleChestInventory">;
export interface CraftInventoryDoubleChestStatics {
  new(arg0: j_net_minecraft_world.CompoundContainer): CraftInventoryDoubleChest;
  new(arg0: j_net_minecraft_world_level_block.ChestBlock_DoubleInventory): CraftInventoryDoubleChest;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryEnchanting. */
export interface CraftInventoryEnchantingMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.EnchantingInventory">];
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getSecondary(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setSecondary(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryEnchanting = CraftInventoryEnchantingMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.EnchantingInventory">;
export interface CraftInventoryEnchantingStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventoryEnchanting;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryFurnace. */
export interface CraftInventoryFurnaceMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.FurnaceInventory">];
  canSmelt(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  getFuel(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getHolder(): JavaOpaque<"org.bukkit.block.Furnace">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getResult(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getSmelting(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  isFuel(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  setFuel(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setResult(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setSmelting(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryFurnace = CraftInventoryFurnaceMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.FurnaceInventory">;
export interface CraftInventoryFurnaceStatics {
  new(arg0: j_net_minecraft_world_level_block_entity.AbstractFurnaceBlockEntity): CraftInventoryFurnace;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryGrindstone. */
export interface CraftInventoryGrindstoneMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.GrindstoneInventory">];
}
export type CraftInventoryGrindstone = CraftInventoryGrindstoneMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.GrindstoneInventory">;
export interface CraftInventoryGrindstoneStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container): CraftInventoryGrindstone;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryHorse. */
export interface CraftInventoryHorseMembers {
  readonly __javaSupertypes?: readonly [CraftSaddledInventory, JavaOpaque<"org.bukkit.inventory.HorseInventory">];
}
export type CraftInventoryHorse = CraftInventoryHorseMembers & CraftSaddledInventory & JavaOpaque<"org.bukkit.inventory.HorseInventory">;
export interface CraftInventoryHorseStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world.Container): CraftInventoryHorse;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryJukebox. */
export interface CraftInventoryJukeboxMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.JukeboxInventory">];
  getHolder(): JavaOpaque<"org.bukkit.block.Jukebox">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getRecord(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setRecord(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryJukebox = CraftInventoryJukeboxMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.JukeboxInventory">;
export interface CraftInventoryJukeboxStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventoryJukebox;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryLectern. */
export interface CraftInventoryLecternMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.LecternInventory">];
  getHolder(): JavaOpaque<"org.bukkit.block.Lectern">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  provider: j_net_minecraft_world.MenuProvider;
}
export type CraftInventoryLectern = CraftInventoryLecternMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.LecternInventory">;
export interface CraftInventoryLecternStatics {
  new(arg0: j_net_minecraft_world.Container): CraftInventoryLectern;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryLlama. */
export interface CraftInventoryLlamaMembers {
  readonly __javaSupertypes?: readonly [CraftInventoryAbstractHorse, JavaOpaque<"org.bukkit.inventory.LlamaInventory">];
  getDecor(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setDecor(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventoryLlama = CraftInventoryLlamaMembers & CraftInventoryAbstractHorse & JavaOpaque<"org.bukkit.inventory.LlamaInventory">;
export interface CraftInventoryLlamaStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world.Container): CraftInventoryLlama;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryLoom. */
export interface CraftInventoryLoomMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.LoomInventory">];
}
export type CraftInventoryLoom = CraftInventoryLoomMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.LoomInventory">;
export interface CraftInventoryLoomStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container): CraftInventoryLoom;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryMerchant. */
export interface CraftInventoryMerchantMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.MerchantInventory">];
  getInventory(): j_net_minecraft_world.Container;
  getInventory(): j_net_minecraft_world_inventory.MerchantContainer;
  getMerchant(): JavaOpaque<"org.bukkit.inventory.Merchant">;
  getSelectedRecipe(): JavaOpaque<"org.bukkit.inventory.MerchantRecipe">;
  getSelectedRecipeIndex(): number;
}
export type CraftInventoryMerchant = CraftInventoryMerchantMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.MerchantInventory">;
export interface CraftInventoryMerchantStatics {
  new(arg0: j_net_minecraft_world_item_trading.Merchant, arg1: j_net_minecraft_world_inventory.MerchantContainer): CraftInventoryMerchant;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryPlayer. */
export interface CraftInventoryPlayerMembers {
  readonly __javaSupertypes?: readonly [CraftInventory, JavaOpaque<"org.bukkit.inventory.EntityEquipment">, JavaOpaque<"org.bukkit.inventory.PlayerInventory">];
  getArmorContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getBoots(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getBootsDropChance(): number;
  getChestplate(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getChestplateDropChance(): number;
  getDropChance(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): number;
  getExtraContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getHeldItemSlot(): number;
  getHelmet(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getHelmetDropChance(): number;
  getHolder(): JavaOpaque<"org.bukkit.entity.Entity">;
  getHolder(): JavaOpaque<"org.bukkit.entity.HumanEntity">;
  getHolder(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getInventory(): j_net_minecraft_world.Container;
  getInventory(): j_net_minecraft_world_entity_player.Inventory;
  getItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInHandDropChance(): number;
  getItemInMainHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInMainHandDropChance(): number;
  getItemInOffHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInOffHandDropChance(): number;
  getLeggings(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLeggingsDropChance(): number;
  getStorageContents(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  setArmorContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setBoots(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setBoots(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setBootsDropChance(arg0: number): void;
  setChestplate(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setChestplate(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setChestplateDropChance(arg0: number): void;
  setDropChance(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: number): void;
  setExtraContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setHeldItemSlot(arg0: number): void;
  setHelmet(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setHelmet(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setHelmetDropChance(arg0: number): void;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: boolean): void;
  setItemInHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInHandDropChance(arg0: number): void;
  setItemInMainHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInMainHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setItemInMainHandDropChance(arg0: number): void;
  setItemInOffHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInOffHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setItemInOffHandDropChance(arg0: number): void;
  setLeggings(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLeggings(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setLeggingsDropChance(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setStorageContents(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
}
export type CraftInventoryPlayer = CraftInventoryPlayerMembers & CraftInventory & JavaOpaque<"org.bukkit.inventory.EntityEquipment"> & JavaOpaque<"org.bukkit.inventory.PlayerInventory">;
export interface CraftInventoryPlayerStatics {
  new(arg0: j_net_minecraft_world_entity_player.Inventory): CraftInventoryPlayer;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventorySmithing. */
export interface CraftInventorySmithingMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.SmithingInventory">];
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getRecipe(): JavaOpaque<"org.bukkit.inventory.Recipe">;
  getResult(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getResultInventory(): j_net_minecraft_world.Container;
  getResultInventory(): j_net_minecraft_world_inventory.ResultContainer;
  setResult(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftInventorySmithing = CraftInventorySmithingMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.SmithingInventory">;
export interface CraftInventorySmithingStatics {
  new(arg0: JavaOpaque<"org.bukkit.Location">, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world_inventory.ResultContainer): CraftInventorySmithing;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryStonecutter. */
export interface CraftInventoryStonecutterMembers {
  readonly __javaSupertypes?: readonly [CraftResultInventory, JavaOpaque<"org.bukkit.inventory.StonecutterInventory">];
}
export type CraftInventoryStonecutter = CraftInventoryStonecutterMembers & CraftResultInventory & JavaOpaque<"org.bukkit.inventory.StonecutterInventory">;
export interface CraftInventoryStonecutterStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container): CraftInventoryStonecutter;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftInventoryView. */
export interface CraftInventoryViewMembers<T /* extends j_net_minecraft_world_inventory.AbstractContainerMenu */ = unknown, I /* extends JavaOpaque<"org.bukkit.inventory.Inventory"> */ = unknown> {
  readonly __javaSupertypes?: readonly [CraftAbstractInventoryView];
  readonly container: T;
  getBottomInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getHandle(): j_net_minecraft_world_inventory.AbstractContainerMenu;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getMenuType(): JavaOpaque<"org.bukkit.inventory.MenuType">;
  getOriginalTitle(): string;
  getPlayer(): JavaOpaque<"org.bukkit.entity.HumanEntity">;
  getTitle(): string;
  getTopInventory(): I;
  getType(): JavaOpaque<"org.bukkit.event.inventory.InventoryType">;
  isInTop(arg0: number): boolean;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setTitle(arg0: string): void;
  title(): JavaOpaque<"net.kyori.adventure.text.Component">;
}
export type CraftInventoryView<T /* extends j_net_minecraft_world_inventory.AbstractContainerMenu */ = unknown, I /* extends JavaOpaque<"org.bukkit.inventory.Inventory"> */ = unknown> = CraftInventoryViewMembers<T, I> & CraftAbstractInventoryView;
export interface CraftInventoryViewStatics {
  new<T /* extends j_net_minecraft_world_inventory.AbstractContainerMenu */, I /* extends JavaOpaque<"org.bukkit.inventory.Inventory"> */>(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: I, arg2: T): CraftInventoryView<T, I>;
  sendInventoryTitleChange(arg0: JavaOpaque<"org.bukkit.inventory.InventoryView">, arg1: string): void;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftItemCraftResult. */
export interface CraftItemCraftResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.ItemCraftResult">];
  getOverflowItems(): JavaList<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getResult(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getResultingMatrix(): Array<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  setResultMatrix(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftItemCraftResult = CraftItemCraftResultMembers & JavaOpaque<"org.bukkit.inventory.ItemCraftResult">;
export interface CraftItemCraftResultStatics {
  new(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): CraftItemCraftResult;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftItemFactory. */
export interface CraftItemFactoryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.ItemFactory">];
  asHoverEvent(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"java.util.function.UnaryOperator", [JavaOpaque<"net.kyori.adventure.text.event.HoverEvent$ShowItem">]>): JavaOpaque<"net.kyori.adventure.text.event.HoverEvent", [JavaOpaque<"net.kyori.adventure.text.event.HoverEvent$ShowItem">]>;
  asMetaFor(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  asMetaFor(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  /** @throws java.lang.IllegalArgumentException */
  createItemStack(arg0: string): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  displayName(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"net.kyori.adventure.text.Component">;
  enchantItem(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  enchantItem(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  enchantItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: boolean): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  enchantWithLevels(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: JavaOpaque<"io.papermc.paper.registry.set.RegistryKeySet", [JavaOpaque<"org.bukkit.enchantments.Enchantment">]>, arg3: JavaOpaque<"java.util.Random">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  enchantWithLevels(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: boolean, arg3: JavaOpaque<"java.util.Random">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  ensureServerConversions(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  equals(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): boolean;
  getDefaultLeatherColor(): JavaOpaque<"org.bukkit.Color">;
  getI18NDisplayName(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): string;
  getItemMeta(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getSpawnEgg(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): JavaOpaque<"org.bukkit.Material">;
  getSpawnEgg0(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  hoverContentOf(arg0: JavaOpaque<"org.bukkit.entity.Entity">): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  isApplicable(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  isApplicable(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
}
export type CraftItemFactory = CraftItemFactoryMembers & JavaOpaque<"org.bukkit.inventory.ItemFactory">;
export interface CraftItemFactoryStatics {
  instance(): CraftItemFactory;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftItemFlag. */
export interface CraftItemFlagMembers {
}
export type CraftItemFlag = CraftItemFlagMembers;
export interface CraftItemFlagStatics {
  new(): CraftItemFlag;
  bukkitToString(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): string;
  stringToBukkit(arg0: string): JavaOpaque<"org.bukkit.inventory.ItemFlag">;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftItemMetas. */
export interface CraftItemMetasMembers {
}
export type CraftItemMetas = CraftItemMetasMembers;
export interface CraftItemMetasStatics {
  getItemMetaData<I /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */>(arg0: CraftItemType<object>): CraftItemMetas_ItemMetaData<I>;
}

/** JVM record org.bukkit.craftbukkit.inventory.CraftItemMetas$ItemMetaData. */
export interface CraftItemMetas_ItemMetaDataMembers<I /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  fromItemMeta(): JavaBiFunction<JavaOpaque<"org.bukkit.inventory.ItemType$Typed", [I]>, JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, I>;
  fromItemStack(): JavaBiFunction<j_net_minecraft_world_item.ItemStack, JavaSet<j_net_minecraft_core_component.DataComponentType<object>>, I>;
  hashCode(): number;
  metaClass(): JavaClass<I>;
  toString(): string;
}
export type CraftItemMetas_ItemMetaData<I /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */ = unknown> = CraftItemMetas_ItemMetaDataMembers<I> & JavaOpaque<"java.lang.Record">;
export interface CraftItemMetas_ItemMetaDataStatics {
  new<I /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */>(arg0: JavaClass<I>, arg1: JavaBiFunction<j_net_minecraft_world_item.ItemStack, JavaSet<j_net_minecraft_core_component.DataComponentType<object>>, I>, arg2: JavaBiFunction<JavaOpaque<"org.bukkit.inventory.ItemType$Typed", [I]>, JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, I>): CraftItemMetas_ItemMetaData<I>;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftItemStack. */
export interface CraftItemStackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.ItemStack">];
  addUnsafeEnchantment(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number): void;
  adjustTagForItemMeta(arg0: JavaOpaque<"org.bukkit.Material">): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftItemStack;
  clone(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  containsEnchantment(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  copyDataFrom(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaPredicate<JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">>): void;
  editPersistentDataContainer(arg0: JavaConsumer<JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">>): boolean;
  effectiveName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  equals(arg0: object): boolean;
  getAmount(): number;
  getData(): JavaOpaque<"org.bukkit.material.MaterialData">;
  getData<T>(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType$Valued", [T]>): T;
  getDataTypes(): JavaSet<JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">>;
  getDurability(): number;
  getEnchantmentLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantments(): JavaMap<JavaOpaque<"org.bukkit.enchantments.Enchantment">, number>;
  getItemMeta(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getMaxItemUseDuration(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"io.papermc.paper.persistence.PersistentDataContainerView">;
  getType(): JavaOpaque<"org.bukkit.Material">;
  handle: j_net_minecraft_world_item.ItemStack;
  hasData(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">): boolean;
  hasItemMeta(): boolean;
  hashCode(): number;
  isDataOverridden(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">): boolean;
  isEmpty(): boolean;
  isSimilar(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  matchesWithoutData(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaSet<JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">>, arg2: boolean): boolean;
  removeEnchantment(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  removeEnchantments(): void;
  resetData(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">): void;
  setAmount(arg0: number): void;
  setData(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType$NonValued">): void;
  setData<T>(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType$Valued", [T]>, arg1: T): void;
  setDurability(arg0: number): void;
  setItemMeta(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): boolean;
  setType(arg0: JavaOpaque<"org.bukkit.Material">): void;
  unsetData(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">): void;
  withType(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
}
export type CraftItemStack = CraftItemStackMembers & JavaOpaque<"org.bukkit.inventory.ItemStack">;
export interface CraftItemStackStatics {
  readonly PDC_CUSTOM_DATA_KEY: "PublicBukkitValues";
  applyMetaToItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): void;
  asBukkitCopy(arg0: j_net_minecraft_world_item.ItemStack): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  asCraftCopy(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): CraftItemStack;
  asCraftMirror(arg0: j_net_minecraft_world_item.ItemStack): CraftItemStack;
  asCriterionConditionItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): j_net_minecraft_advancements_critereon.ItemPredicate;
  asNMSCopy(arg0: JavaList<JavaOpaque<"org.bukkit.inventory.ItemStack">>): JavaList<j_net_minecraft_world_item.ItemStack>;
  asNMSCopy(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): j_net_minecraft_world_item.ItemStack;
  asNewCraftStack(arg0: j_net_minecraft_world_item.Item): CraftItemStack;
  asNewCraftStack(arg0: j_net_minecraft_world_item.Item, arg1: number): CraftItemStack;
  copyNMSStack(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): j_net_minecraft_world_item.ItemStack;
  getItemMeta(arg0: j_net_minecraft_world_item.ItemStack): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getItemMeta(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOpaque<"org.bukkit.inventory.ItemType">): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getItemMeta(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOpaque<"org.bukkit.inventory.ItemType">, arg2: JavaSet<j_net_minecraft_core_component.DataComponentType<object>>): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getOrCloneOnMutation(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): j_net_minecraft_world_item.ItemStack;
  setItemMeta(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): boolean;
  unwrap(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): j_net_minecraft_world_item.ItemStack;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftItemType. */
export interface CraftItemTypeMembers<M /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item.Item]>, JavaOpaque<"org.bukkit.inventory.ItemType$Typed", [M]>, JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_item.Item]>];
  asMaterial(): JavaOpaque<"org.bukkit.Material"> | null;
  createItemStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  createItemStack(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  createItemStack(arg0: number, arg1: JavaConsumer<M>): JavaOpaque<"org.bukkit.inventory.ItemStack"> | null;
  createItemStack(arg0: JavaConsumer<M>): JavaOpaque<"org.bukkit.inventory.ItemStack"> | null;
  getBlockType(): JavaOpaque<"org.bukkit.block.BlockType">;
  getBurnDuration(): number;
  getCompostChance(): number;
  getCraftingRemainingItem(): JavaOpaque<"org.bukkit.inventory.ItemType"> | null;
  getCreativeCategory(): JavaOpaque<"org.bukkit.inventory.CreativeCategory">;
  getDefaultAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap", [JavaOpaque<"org.bukkit.attribute.Attribute">, JavaOpaque<"org.bukkit.attribute.AttributeModifier">]>;
  getDefaultAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): JavaOpaque<"com.google.common.collect.Multimap", [JavaOpaque<"org.bukkit.attribute.Attribute">, JavaOpaque<"org.bukkit.attribute.AttributeModifier">]>;
  getDefaultData<T>(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType$Valued", [T]>): T | null;
  getDefaultDataTypes(): JavaSet<JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">>;
  getItemMeta(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaSet<j_net_minecraft_core_component.DataComponentType<object>>): M;
  getItemMeta(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): M;
  getItemMetaClass(): JavaClass<M>;
  getItemRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity"> | null;
  getMaxDurability(): number;
  getMaxStackSize(): number;
  getTranslationKey(): string;
  hasBlockType(): boolean;
  hasDefaultData(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">): boolean;
  isCompostable(): boolean;
  isEdible(): boolean;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.World">): boolean;
  isFuel(): boolean;
  isRecord(): boolean;
  translationKey(): string;
  typed(): JavaOpaque<"org.bukkit.inventory.ItemType$Typed", [JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">]>;
  typed<Other /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */>(arg0: JavaClass<Other>): JavaOpaque<"org.bukkit.inventory.ItemType$Typed", [Other]>;
}
export type CraftItemType<M /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */ = unknown> = CraftItemTypeMembers<M> & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_item.Item]> & JavaOpaque<"org.bukkit.inventory.ItemType$Typed", [M]> & JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_item.Item]>;
export interface CraftItemTypeStatics {
  new<M /* extends JavaOpaque<"org.bukkit.inventory.meta.ItemMeta"> */>(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>): CraftItemType<M>;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.Material">): j_net_minecraft_world_item.Item;
  bukkitToMinecraftNew(arg0: JavaOpaque<"org.bukkit.inventory.ItemType">): j_net_minecraft_world_item.Item;
  minecraftToBukkit(arg0: j_net_minecraft_world_item.Item): JavaOpaque<"org.bukkit.Material">;
  minecraftToBukkitNew(arg0: j_net_minecraft_world_item.Item): JavaOpaque<"org.bukkit.inventory.ItemType">;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMenuType. */
export interface CraftMenuTypeMembers<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_inventory.MenuType<object>]>, JavaOpaque<"org.bukkit.inventory.MenuType$Typed", [V, B]>, JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_inventory.MenuType<object>]>];
  builder(): B;
  create(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: string): V | null;
  create(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): V | null;
  getInventoryViewClass(): JavaClass<JavaOpaque<"org.bukkit.inventory.InventoryView">>;
  typed(): JavaOpaque<"org.bukkit.inventory.MenuType$Typed", [JavaOpaque<"org.bukkit.inventory.InventoryView">, JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [JavaOpaque<"org.bukkit.inventory.InventoryView">]>]>;
  typed<NV /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */, NB /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [NV]> */>(arg0: JavaClass<NV>): JavaOpaque<"org.bukkit.inventory.MenuType$Typed", [NV, NB]>;
}
export type CraftMenuType<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */ = unknown, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */ = unknown> = CraftMenuTypeMembers<V, B> & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_inventory.MenuType<object>]> & JavaOpaque<"org.bukkit.inventory.MenuType$Typed", [V, B]> & JavaOpaque<"io.papermc.paper.world.flag.PaperFeatureDependent", [j_net_minecraft_world_inventory.MenuType<object>]>;
export interface CraftMenuTypeStatics {
  new<V /* extends JavaOpaque<"org.bukkit.inventory.InventoryView"> */, B /* extends JavaOpaque<"org.bukkit.inventory.view.builder.InventoryViewBuilder", [V]> */>(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_inventory.MenuType<object>>): CraftMenuType<V, B>;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.inventory.MenuType">): j_net_minecraft_world_inventory.MenuType<object>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_inventory.MenuType<object>>): JavaOpaque<"org.bukkit.inventory.MenuType">;
  minecraftToBukkit(arg0: j_net_minecraft_world_inventory.MenuType<object>): JavaOpaque<"org.bukkit.inventory.MenuType">;
}

/** JVM interface org.bukkit.craftbukkit.inventory.CraftMerchant. */
export interface CraftMerchantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.Merchant">];
  getMerchant(): j_net_minecraft_world_item_trading.Merchant;
  getRecipe(arg0: number): JavaOpaque<"org.bukkit.inventory.MerchantRecipe">;
  getRecipeCount(): number;
  getRecipes(): JavaList<JavaOpaque<"org.bukkit.inventory.MerchantRecipe">>;
  getTrader(): JavaOpaque<"org.bukkit.entity.HumanEntity">;
  isTrading(): boolean;
  setRecipe(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.MerchantRecipe">): void;
  setRecipes(arg0: JavaList<JavaOpaque<"org.bukkit.inventory.MerchantRecipe">>): void;
}
export type CraftMerchant = CraftMerchantMembers & JavaOpaque<"org.bukkit.inventory.Merchant">;
export interface CraftMerchantStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMerchantCustom. */
export interface CraftMerchantCustomMembers {
  readonly __javaSupertypes?: readonly [CraftMerchant];
  getMerchant(): j_net_minecraft_world_item_trading.Merchant;
  getMerchant(): CraftMerchantCustom_MinecraftMerchant;
}
export type CraftMerchantCustom = CraftMerchantCustomMembers & CraftMerchant;
export interface CraftMerchantCustomStatics {
  new(): CraftMerchantCustom;
  new(arg0: string): CraftMerchantCustom;
  new(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): CraftMerchantCustom;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMerchantCustom$MinecraftMerchant. */
export interface CraftMerchantCustom_MinecraftMerchantMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_item_trading.Merchant];
  craftMerchant: CraftMerchant;
  getCraftMerchant(): CraftMerchant;
  getNotifyTradeSound(): j_net_minecraft_sounds.SoundEvent;
  getOffers(): j_net_minecraft_world_item_trading.MerchantOffers;
  getScoreboardDisplayName(): j_net_minecraft_network_chat.Component;
  getTradingPlayer(): j_net_minecraft_world_entity_player.Player;
  getVillagerXp(): number;
  isClientSide(): boolean;
  notifyTrade(arg0: j_net_minecraft_world_item_trading.MerchantOffer): void;
  notifyTradeUpdated(arg0: j_net_minecraft_world_item.ItemStack): void;
  overrideOffers(arg0: j_net_minecraft_world_item_trading.MerchantOffers): void;
  overrideXp(arg0: number): void;
  processTrade(arg0: j_net_minecraft_world_item_trading.MerchantOffer, arg1: JavaOpaque<"io.papermc.paper.event.player.PlayerPurchaseEvent"> | null): void | null;
  setTradingPlayer(arg0: j_net_minecraft_world_entity_player.Player): void;
  showProgressBar(): boolean;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type CraftMerchantCustom_MinecraftMerchant = CraftMerchantCustom_MinecraftMerchantMembers & j_net_minecraft_world_item_trading.Merchant;
export interface CraftMerchantCustom_MinecraftMerchantStatics {
  new(): CraftMerchantCustom_MinecraftMerchant;
  new(arg0: string): CraftMerchantCustom_MinecraftMerchant;
  new(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): CraftMerchantCustom_MinecraftMerchant;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMerchantRecipe. */
export interface CraftMerchantRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.MerchantRecipe">];
  getDemand(): number;
  getMaxUses(): number;
  getPriceMultiplier(): number;
  getSpecialPrice(): number;
  getUses(): number;
  getVillagerExperience(): number;
  hasExperienceReward(): boolean;
  setDemand(arg0: number): void;
  setExperienceReward(arg0: boolean): void;
  setIgnoreDiscounts(arg0: boolean): void;
  setMaxUses(arg0: number): void;
  setPriceMultiplier(arg0: number): void;
  setSpecialPrice(arg0: number): void;
  setUses(arg0: number): void;
  setVillagerExperience(arg0: number): void;
  shouldIgnoreDiscounts(): boolean;
  toMinecraft(): j_net_minecraft_world_item_trading.MerchantOffer;
}
export type CraftMerchantRecipe = CraftMerchantRecipeMembers & JavaOpaque<"org.bukkit.inventory.MerchantRecipe">;
export interface CraftMerchantRecipeStatics {
  new(arg0: j_net_minecraft_world_item_trading.MerchantOffer): CraftMerchantRecipe;
  new(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): CraftMerchantRecipe;
  new(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number): CraftMerchantRecipe;
  new(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): CraftMerchantRecipe;
  new(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: boolean): CraftMerchantRecipe;
  fromBukkit(arg0: JavaOpaque<"org.bukkit.inventory.MerchantRecipe">): CraftMerchantRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaArmor. */
export interface CraftMetaArmorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.ArmorMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaArmor;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ArmorMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getTrim(): JavaOpaque<"org.bukkit.inventory.meta.trim.ArmorTrim">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasTrim(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setTrim(arg0: JavaOpaque<"org.bukkit.inventory.meta.trim.ArmorTrim">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaArmor = CraftMetaArmorMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.ArmorMeta">;
export interface CraftMetaArmorStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaArmorStand. */
export interface CraftMetaArmorStandMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"com.destroystokyo.paper.inventory.meta.ArmorStandMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaArmorStand;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasNoBasePlate(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isInvisible(): boolean;
  isMarker(): boolean;
  isSmall(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setInvisible(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMarker(arg0: boolean): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setNoBasePlate(arg0: boolean): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setShowArms(arg0: boolean): void;
  setSmall(arg0: boolean): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
  shouldShowArms(): boolean;
}
export type CraftMetaArmorStand = CraftMetaArmorStandMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"com.destroystokyo.paper.inventory.meta.ArmorStandMeta">;
export interface CraftMetaArmorStandStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaAxolotlBucket. */
export interface CraftMetaAxolotlBucketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.AxolotlBucketMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaAxolotlBucket;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.AxolotlBucketMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVariant(): JavaOpaque<"org.bukkit.entity.Axolotl$Variant">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  hasVariant(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Axolotl$Variant">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaAxolotlBucket = CraftMetaAxolotlBucketMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.AxolotlBucketMeta">;
export interface CraftMetaAxolotlBucketStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaBanner. */
export interface CraftMetaBannerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.BannerMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  addPattern(arg0: JavaOpaque<"org.bukkit.block.banner.Pattern">): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaBanner;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  equalsCommon(arg0: JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">): boolean;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPattern(arg0: number): JavaOpaque<"org.bukkit.block.banner.Pattern">;
  getPatterns(): JavaList<JavaOpaque<"org.bukkit.block.banner.Pattern">>;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  numberOfPatterns(): number;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  removePattern(arg0: number): JavaOpaque<"org.bukkit.block.banner.Pattern">;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPattern(arg0: number, arg1: JavaOpaque<"org.bukkit.block.banner.Pattern">): void;
  setPatterns(arg0: JavaList<JavaOpaque<"org.bukkit.block.banner.Pattern">>): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaBanner = CraftMetaBannerMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.BannerMeta">;
export interface CraftMetaBannerStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaBlockState. */
export interface CraftMetaBlockStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.BlockStateMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  clearBlockState(): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaBlockState;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  equalsCommon(arg0: JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">): boolean;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockState(): JavaOpaque<"org.bukkit.block.BlockState">;
  getBlockState(): j_org_bukkit_craftbukkit_block.CraftBlockEntityState<object>;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasBlockState(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlockState(arg0: JavaOpaque<"org.bukkit.block.BlockState">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaBlockState = CraftMetaBlockStateMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.BlockStateMeta">;
export interface CraftMetaBlockStateStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaBook. */
export interface CraftMetaBookMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.BookMeta">, JavaOpaque<"org.bukkit.inventory.meta.WritableBookMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  addPage(...arg0: Array<string>): void;
  addPages(...arg0: Array<JavaOpaque<"net.kyori.adventure.text.Component">>): void;
  author(): JavaOpaque<"net.kyori.adventure.text.Component">;
  author(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"net.kyori.adventure.inventory.Book">;
  author(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.meta.BookMeta">;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaBook;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.WritableBookMeta">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getAuthor(): string;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getGeneration(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta$Generation">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPage(arg0: number): string;
  getPageCount(): number;
  getPages(): JavaList<string>;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTitle(): string;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasAuthor(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasGeneration(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPages(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTitle(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  page(arg0: number): JavaOpaque<"net.kyori.adventure.text.Component">;
  page(arg0: number, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  pages: (JavaList<string>) & { (): JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>; (arg0: JavaList<object>): JavaOpaque<"net.kyori.adventure.inventory.Book">; (arg0: JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"org.bukkit.inventory.meta.BookMeta">; (arg0: Array<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"net.kyori.adventure.inventory.Book">; (...arg0: Array<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"org.bukkit.inventory.meta.BookMeta"> };
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setAuthor(arg0: string): void;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGeneration(arg0: JavaOpaque<"org.bukkit.inventory.meta.BookMeta$Generation">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPage(arg0: number, arg1: string): void;
  setPages(arg0: JavaList<string>): void;
  setPages(...arg0: Array<string>): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTitle(arg0: string): boolean;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
  spigot(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta$Spigot">;
  title(): JavaOpaque<"net.kyori.adventure.text.Component">;
  title(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"net.kyori.adventure.inventory.Book">;
  title(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.meta.BookMeta">;
  toBuilder(): JavaOpaque<"net.kyori.adventure.inventory.Book$Builder">;
  toBuilder(): JavaOpaque<"net.kyori.adventure.util.Buildable$Builder">;
  toBuilder(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta$BookMetaBuilder">;
}
export type CraftMetaBook = CraftMetaBookMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.BookMeta"> & JavaOpaque<"org.bukkit.inventory.meta.WritableBookMeta">;
export interface CraftMetaBookStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaBookSigned. */
export interface CraftMetaBookSignedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.BookMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  addPage(...arg0: Array<string>): void;
  addPages(...arg0: Array<JavaOpaque<"net.kyori.adventure.text.Component">>): void;
  author: (string) & { (): JavaOpaque<"net.kyori.adventure.text.Component">; (arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"net.kyori.adventure.inventory.Book">; (arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.meta.BookMeta"> };
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaBookSigned;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.WritableBookMeta">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  generation: number;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getAuthor(): string;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getGeneration(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta$Generation">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPage(arg0: number): string;
  getPageCount(): number;
  getPages(): JavaList<string>;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTitle(): string;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasAuthor(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasGeneration(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPages(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTitle(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isResolved(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  page(arg0: number): JavaOpaque<"net.kyori.adventure.text.Component">;
  page(arg0: number, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  pages: (JavaList<j_net_minecraft_network_chat.Component>) & { (): JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>; (arg0: JavaList<object>): JavaOpaque<"net.kyori.adventure.inventory.Book">; (arg0: JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"org.bukkit.inventory.meta.BookMeta">; (arg0: Array<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"net.kyori.adventure.inventory.Book">; (...arg0: Array<JavaOpaque<"net.kyori.adventure.text.Component">>): JavaOpaque<"org.bukkit.inventory.meta.BookMeta"> };
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  resolved: boolean;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setAuthor(arg0: string): void;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGeneration(arg0: JavaOpaque<"org.bukkit.inventory.meta.BookMeta$Generation">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPage(arg0: number, arg1: string): void;
  setPages(arg0: JavaList<string>): void;
  setPages(...arg0: Array<string>): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setResolved(arg0: boolean): void;
  setTitle(arg0: string): boolean;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
  spigot(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta$Spigot">;
  title: (string) & { (): JavaOpaque<"net.kyori.adventure.text.Component">; (arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"net.kyori.adventure.inventory.Book">; (arg0: JavaOpaque<"net.kyori.adventure.text.Component">): JavaOpaque<"org.bukkit.inventory.meta.BookMeta"> };
  toBuilder(): JavaOpaque<"net.kyori.adventure.inventory.Book$Builder">;
  toBuilder(): JavaOpaque<"net.kyori.adventure.util.Buildable$Builder">;
  toBuilder(): JavaOpaque<"org.bukkit.inventory.meta.BookMeta$BookMetaBuilder">;
}
export type CraftMetaBookSigned = CraftMetaBookSignedMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.BookMeta">;
export interface CraftMetaBookSignedStatics {
  readonly LEGACY_DOWNSAMPLING_COMPONENT_SERIALIZER: JavaOpaque<"net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer">;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaBundle. */
export interface CraftMetaBundleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.BundleMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaBundle;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getItems(): JavaList<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasItems(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setItems(arg0: JavaList<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaBundle = CraftMetaBundleMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.BundleMeta">;
export interface CraftMetaBundleStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaColorableArmor. */
export interface CraftMetaColorableArmorMembers {
  readonly __javaSupertypes?: readonly [CraftMetaArmor, JavaOpaque<"org.bukkit.inventory.meta.ColorableArmorMeta">];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaArmor;
  clone(): CraftMetaColorableArmor;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ArmorMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ColorableArmorMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.LeatherArmorMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  getColor(): JavaOpaque<"org.bukkit.Color">;
  isDyed(): boolean;
  setColor(arg0: JavaOpaque<"org.bukkit.Color">): void;
}
export type CraftMetaColorableArmor = CraftMetaColorableArmorMembers & CraftMetaArmor & JavaOpaque<"org.bukkit.inventory.meta.ColorableArmorMeta">;
export interface CraftMetaColorableArmorStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaCompass. */
export interface CraftMetaCompassMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.CompassMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  clearLodestone(): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaCompass;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.CompassMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLodestone(): JavaOpaque<"org.bukkit.Location">;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLodestone(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isLodestoneCompass(): boolean;
  isLodestoneTracked(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLodestone(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setLodestoneTracked(arg0: boolean): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaCompass = CraftMetaCompassMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.CompassMeta">;
export interface CraftMetaCompassStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaCrossbow. */
export interface CraftMetaCrossbowMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.CrossbowMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addChargedProjectile(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaCrossbow;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getChargedProjectiles(): JavaList<JavaOpaque<"org.bukkit.inventory.ItemStack">>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasChargedProjectiles(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setChargedProjectiles(arg0: JavaList<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaCrossbow = CraftMetaCrossbowMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.CrossbowMeta">;
export interface CraftMetaCrossbowStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaEntityTag. */
export interface CraftMetaEntityTagMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaEntityTag;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaEntityTag = CraftMetaEntityTagMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
export interface CraftMetaEntityTagStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaFirework. */
export interface CraftMetaFireworkMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.FireworkMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEffect(arg0: JavaOpaque<"org.bukkit.FireworkEffect">): void;
  addEffects(arg0: Iterable<JavaOpaque<"org.bukkit.FireworkEffect">>): void;
  addEffects(...arg0: Array<JavaOpaque<"org.bukkit.FireworkEffect">>): void;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  clearEffects(): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftMetaFirework;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.FireworkMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEffects(): JavaList<JavaOpaque<"org.bukkit.FireworkEffect">>;
  getEffectsSize(): number;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getPower(): number;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEffects(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasPower(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  power: number;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEffect(arg0: number): void;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setPower(arg0: number): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaFirework = CraftMetaFireworkMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.FireworkMeta">;
export interface CraftMetaFireworkStatics {
  getEffect(arg0: j_net_minecraft_world_item_component.FireworkExplosion): JavaOpaque<"org.bukkit.FireworkEffect">;
  getExplosion(arg0: JavaOpaque<"org.bukkit.FireworkEffect">): j_net_minecraft_world_item_component.FireworkExplosion;
  getNBT(arg0: JavaOpaque<"org.bukkit.FireworkEffect$Type">): j_net_minecraft_world_item_component.FireworkExplosion_Shape;
}

/** Live JVM enum org.bukkit.craftbukkit.inventory.CraftMetaItem$ItemMetaKey$Specific$To; constants are host handles, not strings. */
export type CraftMetaItem_ItemMetaKey_Specific_To = JavaEnum<"org.bukkit.craftbukkit.inventory.CraftMetaItem$ItemMetaKey$Specific$To", "BUKKIT" | "NBT"> & CraftMetaItem_ItemMetaKey_Specific_ToMembers;
export interface CraftMetaItem_ItemMetaKey_Specific_ToMembers {
}
export interface CraftMetaItem_ItemMetaKey_Specific_ToStatics {
  readonly BUKKIT: CraftMetaItem_ItemMetaKey_Specific_To;
  readonly NBT: CraftMetaItem_ItemMetaKey_Specific_To;
  valueOf(arg0: string): CraftMetaItem_ItemMetaKey_Specific_To;
  values(): Array<CraftMetaItem_ItemMetaKey_Specific_To>;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaKnowledgeBook. */
export interface CraftMetaKnowledgeBookMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.KnowledgeBookMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  addRecipe(...arg0: Array<JavaOpaque<"org.bukkit.NamespacedKey">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): CraftMetaKnowledgeBook;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.KnowledgeBookMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRecipes(): JavaList<JavaOpaque<"org.bukkit.NamespacedKey">>;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRecipes(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  recipes: JavaList<JavaOpaque<"org.bukkit.NamespacedKey">>;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRecipes(arg0: JavaList<JavaOpaque<"org.bukkit.NamespacedKey">>): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaKnowledgeBook = CraftMetaKnowledgeBookMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.KnowledgeBookMeta">;
export interface CraftMetaKnowledgeBookStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaMusicInstrument. */
export interface CraftMetaMusicInstrumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.MusicInstrumentMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): CraftMetaMusicInstrument;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.MusicInstrumentMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getInstrument(): JavaOpaque<"org.bukkit.MusicInstrument">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasInstrument(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setInstrument(arg0: JavaOpaque<"org.bukkit.MusicInstrument">): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaMusicInstrument = CraftMetaMusicInstrumentMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.MusicInstrumentMeta">;
export interface CraftMetaMusicInstrumentStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaOminousBottle. */
export interface CraftMetaOminousBottleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.OminousBottleMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): CraftMetaOminousBottle;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.OminousBottleMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAmplifier(): number;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAmplifier(): boolean;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAmplifier(arg0: number): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaOminousBottle = CraftMetaOminousBottleMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.OminousBottleMeta">;
export interface CraftMetaOminousBottleStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaShield. */
export interface CraftMetaShieldMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.BlockStateMeta">, JavaOpaque<"org.bukkit.inventory.meta.ShieldMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  addPattern(arg0: JavaOpaque<"org.bukkit.block.banner.Pattern">): void;
  clearBlockState(): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): CraftMetaShield;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBaseColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockState(): JavaOpaque<"org.bukkit.block.BlockState">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPattern(arg0: number): JavaOpaque<"org.bukkit.block.banner.Pattern">;
  getPatterns(): JavaList<JavaOpaque<"org.bukkit.block.banner.Pattern">>;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasBlockState(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  numberOfPatterns(): number;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  removePattern(arg0: number): JavaOpaque<"org.bukkit.block.banner.Pattern">;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBaseColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlockState(arg0: JavaOpaque<"org.bukkit.block.BlockState">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPattern(arg0: number, arg1: JavaOpaque<"org.bukkit.block.banner.Pattern">): void;
  setPatterns(arg0: JavaList<JavaOpaque<"org.bukkit.block.banner.Pattern">>): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaShield = CraftMetaShieldMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.BlockStateMeta"> & JavaOpaque<"org.bukkit.inventory.meta.ShieldMeta">;
export interface CraftMetaShieldStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaSpawnEgg. */
export interface CraftMetaSpawnEggMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.SpawnEggMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): CraftMetaSpawnEgg;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.SpawnEggMeta">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomSpawnedType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getSpawnedEntity(): JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
  getSpawnedType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setCustomSpawnedType(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">): void;
  setSpawnedType(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaSpawnEgg = CraftMetaSpawnEggMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.SpawnEggMeta">;
export interface CraftMetaSpawnEggStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftMetaSuspiciousStew. */
export interface CraftMetaSuspiciousStewMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">, JavaOpaque<"org.bukkit.inventory.meta.SuspiciousStewMeta">];
  addAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  addCustomEffect(arg0: JavaOpaque<"io.papermc.paper.potion.SuspiciousEffectEntry">, arg1: boolean): boolean;
  addCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">, arg1: boolean): boolean;
  addEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">, arg1: number, arg2: boolean): boolean;
  addItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  clearCustomEffects(): boolean;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem">;
  clone(): CraftMetaSuspiciousStew;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Damageable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.Repairable">;
  clone(): JavaOpaque<"org.bukkit.inventory.meta.SuspiciousStewMeta">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  getAsComponentString(): string;
  getAsString(): string;
  getAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap">;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaCollection<object>;
  getAttributeModifiers(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot"> | null): JavaOpaque<"com.google.common.collect.Multimap"> | null;
  getBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCanDestroy(): JavaSet<object>;
  getCanPlaceOn(): JavaSet<object>;
  getCustomEffects(): JavaList<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  getCustomModelData(): number;
  getCustomModelDataComponent(): JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
  getCustomTagContainer(): JavaOpaque<"org.bukkit.inventory.meta.tags.CustomItemTagContainer">;
  getDamage(): number;
  getDamageResistant(): JavaOpaque<"org.bukkit.Tag">;
  getDestroyableKeys(): JavaSet<object>;
  getDisplayName(): string;
  getDisplayNameComponent(): Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>;
  getEnchantLevel(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): number;
  getEnchantable(): number;
  getEnchantmentGlintOverride(): boolean;
  getEnchants(): JavaMap<object>;
  getEquippable(): JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
  getFood(): JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
  getItemFlags(): JavaSet<object>;
  getItemModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getItemName(): string;
  getJukeboxPlayable(): JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
  getLocalizedName(): string;
  getLore(): JavaList<object>;
  getLoreComponents(): JavaList<object>;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPlaceableKeys(): JavaSet<object>;
  getRarity(): JavaOpaque<"org.bukkit.inventory.ItemRarity">;
  getRepairCost(): number;
  getTool(): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
  getTooltipStyle(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getUseCooldown(): JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
  getUseRemainder(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getVersion(): number;
  hasAttributeModifiers(): boolean;
  hasBlockData(): boolean;
  hasConflictingEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  hasCustomEffects(): boolean;
  hasCustomModelData(): boolean;
  hasCustomModelDataComponent(): boolean;
  hasCustomName(): boolean;
  hasDamage(): boolean;
  hasDamageResistant(): boolean;
  hasDamageValue(): boolean;
  hasDestroyableKeys(): boolean;
  hasEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  hasEnchantable(): boolean;
  hasEnchantmentGlintOverride(): boolean;
  hasEnchants(): boolean;
  hasEquippable(): boolean;
  hasFood(): boolean;
  hasItemFlag(arg0: JavaOpaque<"org.bukkit.inventory.ItemFlag">): boolean;
  hasItemModel(): boolean;
  hasItemName(): boolean;
  hasJukeboxPlayable(): boolean;
  hasLocalizedName(): boolean;
  hasLore(): boolean;
  hasMaxDamage(): boolean;
  hasMaxStackSize(): boolean;
  hasPlaceableKeys(): boolean;
  hasRarity(): boolean;
  hasRepairCost(): boolean;
  hasTool(): boolean;
  hasTooltipStyle(): boolean;
  hasUseCooldown(): boolean;
  hasUseRemainder(): boolean;
  isFireResistant(): boolean;
  isGlider(): boolean;
  isHideTooltip(): boolean;
  isUnbreakable(): boolean;
  itemName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  itemName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lore(): JavaList<object>;
  lore(arg0: JavaList<object>): void;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">, arg1: JavaOpaque<"org.bukkit.attribute.AttributeModifier">): boolean;
  removeAttributeModifier(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  removeCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  removeEnchant(arg0: JavaOpaque<"org.bukkit.enchantments.Enchantment">): boolean;
  removeEnchantments(): void;
  removeItemFlags(arg0: Array<JavaOpaque<"org.bukkit.inventory.ItemFlag">>): void;
  resetDamage(): void;
  setAttributeModifiers(arg0: JavaOpaque<"com.google.common.collect.Multimap"> | null): void | null;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCanDestroy(arg0: JavaSet<object>): void;
  setCanPlaceOn(arg0: JavaSet<object>): void;
  setCustomModelData(arg0: number): void;
  setCustomModelDataComponent(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">): void;
  setDamage(arg0: number): void;
  setDamageResistant(arg0: JavaOpaque<"org.bukkit.Tag">): void;
  setDestroyableKeys(arg0: JavaCollection<object>): void;
  setDisplayNameComponent(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setEnchantable(arg0: number): void;
  setEnchantmentGlintOverride(arg0: boolean): void;
  setEquippable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">): void;
  setFireResistant(arg0: boolean): void;
  setFood(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">): void;
  setGlider(arg0: boolean): void;
  setHideTooltip(arg0: boolean): void;
  setItemModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setJukeboxPlayable(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">): void;
  setLocalizedName(arg0: string): void;
  setLore(arg0: JavaList<object>): void;
  setLoreComponents(arg0: JavaList<object>): void;
  setMaxDamage(arg0: number): void;
  setMaxStackSize(arg0: number): void;
  setPlaceableKeys(arg0: JavaCollection<object>): void;
  setRarity(arg0: JavaOpaque<"org.bukkit.inventory.ItemRarity">): void;
  setRepairCost(arg0: number): void;
  setTool(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">): void;
  setTooltipStyle(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setUnbreakable(arg0: boolean): void;
  setUseCooldown(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">): void;
  setUseRemainder(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setVersion(arg0: number): void;
}
export type CraftMetaSuspiciousStew = CraftMetaSuspiciousStewMembers & JavaOpaque<"org.bukkit.craftbukkit.inventory.CraftMetaItem"> & JavaOpaque<"org.bukkit.inventory.meta.SuspiciousStewMeta">;
export interface CraftMetaSuspiciousStewStatics {
}

/** JVM interface org.bukkit.craftbukkit.inventory.CraftRecipe. */
export interface CraftRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.Recipe">];
  addToCraftingManager(): void;
  toNMS(arg0: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg1: boolean): j_net_minecraft_world_item_crafting.Ingredient;
  toNMSOptional(arg0: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg1: boolean): JavaOptional<j_net_minecraft_world_item_crafting.Ingredient>;
}
export type CraftRecipe = CraftRecipeMembers & JavaOpaque<"org.bukkit.inventory.Recipe">;
export interface CraftRecipeStatics {
  getCategory(arg0: j_net_minecraft_world_item_crafting.CookingBookCategory): JavaOpaque<"org.bukkit.inventory.recipe.CookingBookCategory">;
  getCategory(arg0: j_net_minecraft_world_item_crafting.CraftingBookCategory): JavaOpaque<"org.bukkit.inventory.recipe.CraftingBookCategory">;
  getCategory(arg0: JavaOpaque<"org.bukkit.inventory.recipe.CookingBookCategory">): j_net_minecraft_world_item_crafting.CookingBookCategory;
  getCategory(arg0: JavaOpaque<"org.bukkit.inventory.recipe.CraftingBookCategory">): j_net_minecraft_world_item_crafting.CraftingBookCategory;
  toBukkit(arg0: JavaOptional<j_net_minecraft_world_item_crafting.Ingredient>): JavaOpaque<"org.bukkit.inventory.RecipeChoice">;
  toBukkit(arg0: j_net_minecraft_world_item_crafting.Ingredient): JavaOpaque<"org.bukkit.inventory.RecipeChoice">;
  toIngredient(arg0: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg1: boolean): j_net_minecraft_world_item_crafting.Ingredient;
  toMinecraft(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftResultInventory. */
export interface CraftResultInventoryMembers {
  readonly __javaSupertypes?: readonly [CraftInventory];
  getIngredientsInventory(): j_net_minecraft_world.Container;
  getItem(arg0: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getResultInventory(): j_net_minecraft_world.Container;
  getSize(): number;
  setItem(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftResultInventory = CraftResultInventoryMembers & CraftInventory;
export interface CraftResultInventoryStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container): CraftResultInventory;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftSaddledInventory. */
export interface CraftSaddledInventoryMembers {
  readonly __javaSupertypes?: readonly [CraftInventoryAbstractHorse, JavaOpaque<"org.bukkit.inventory.SaddledHorseInventory">];
}
export type CraftSaddledInventory = CraftSaddledInventoryMembers & CraftInventoryAbstractHorse & JavaOpaque<"org.bukkit.inventory.SaddledHorseInventory">;
export interface CraftSaddledInventoryStatics {
  new(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world.Container): CraftSaddledInventory;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftShapedRecipe. */
export interface CraftShapedRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.ShapedRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftShapedRecipe = CraftShapedRecipeMembers & JavaOpaque<"org.bukkit.inventory.ShapedRecipe"> & CraftRecipe;
export interface CraftShapedRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): CraftShapedRecipe;
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: j_net_minecraft_world_item_crafting.ShapedRecipe): CraftShapedRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.ShapedRecipe">): CraftShapedRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftShapelessRecipe. */
export interface CraftShapelessRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftShapelessRecipe = CraftShapelessRecipeMembers & JavaOpaque<"org.bukkit.inventory.ShapelessRecipe"> & CraftRecipe;
export interface CraftShapelessRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): CraftShapelessRecipe;
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: j_net_minecraft_world_item_crafting.ShapelessRecipe): CraftShapelessRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">): CraftShapelessRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftSmithingTransformRecipe. */
export interface CraftSmithingTransformRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.SmithingTransformRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftSmithingTransformRecipe = CraftSmithingTransformRecipeMembers & JavaOpaque<"org.bukkit.inventory.SmithingTransformRecipe"> & CraftRecipe;
export interface CraftSmithingTransformRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg4: JavaOpaque<"org.bukkit.inventory.RecipeChoice">): CraftSmithingTransformRecipe;
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg4: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg5: boolean): CraftSmithingTransformRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.SmithingTransformRecipe">): CraftSmithingTransformRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftSmithingTrimRecipe. */
export interface CraftSmithingTrimRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.SmithingTrimRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftSmithingTrimRecipe = CraftSmithingTrimRecipeMembers & JavaOpaque<"org.bukkit.inventory.SmithingTrimRecipe"> & CraftRecipe;
export interface CraftSmithingTrimRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg4: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">): CraftSmithingTrimRecipe;
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg4: JavaOpaque<"org.bukkit.inventory.meta.trim.TrimPattern">, arg5: boolean): CraftSmithingTrimRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.SmithingTrimRecipe">): CraftSmithingTrimRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftSmokingRecipe. */
export interface CraftSmokingRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.SmokingRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftSmokingRecipe = CraftSmokingRecipeMembers & JavaOpaque<"org.bukkit.inventory.SmokingRecipe"> & CraftRecipe;
export interface CraftSmokingRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: number, arg4: number): CraftSmokingRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.SmokingRecipe">): CraftSmokingRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftStonecuttingRecipe. */
export interface CraftStonecuttingRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.StonecuttingRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftStonecuttingRecipe = CraftStonecuttingRecipeMembers & JavaOpaque<"org.bukkit.inventory.StonecuttingRecipe"> & CraftRecipe;
export interface CraftStonecuttingRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">): CraftStonecuttingRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.StonecuttingRecipe">): CraftStonecuttingRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.CraftTransmuteRecipe. */
export interface CraftTransmuteRecipeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.TransmuteRecipe">, CraftRecipe];
  addToCraftingManager(): void;
}
export type CraftTransmuteRecipe = CraftTransmuteRecipeMembers & JavaOpaque<"org.bukkit.inventory.TransmuteRecipe"> & CraftRecipe;
export interface CraftTransmuteRecipeStatics {
  new(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: JavaOpaque<"org.bukkit.inventory.RecipeChoice">, arg3: JavaOpaque<"org.bukkit.inventory.RecipeChoice">): CraftTransmuteRecipe;
  fromBukkitRecipe(arg0: JavaOpaque<"org.bukkit.inventory.TransmuteRecipe">): CraftTransmuteRecipe;
}

/** JVM class org.bukkit.craftbukkit.inventory.InventoryIterator. */
export interface InventoryIteratorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.ListIterator", [JavaOpaque<"org.bukkit.inventory.ItemStack">]>];
  add(arg0: object): void;
  add(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  hasNext(): boolean;
  hasPrevious(): boolean;
  next(): object;
  next(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  nextIndex(): number;
  previous(): object;
  previous(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  previousIndex(): number;
  remove(): void;
  set(arg0: object): void;
  set(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type InventoryIterator = InventoryIteratorMembers & JavaOpaque<"java.util.ListIterator", [JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
export interface InventoryIteratorStatics {
}

/** JVM class org.bukkit.craftbukkit.inventory.RecipeIterator. */
export interface RecipeIteratorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Iterator", [JavaOpaque<"org.bukkit.inventory.Recipe">]>];
  hasNext(): boolean;
  next(): object;
  next(): JavaOpaque<"org.bukkit.inventory.Recipe">;
  remove(): void;
}
export type RecipeIterator = RecipeIteratorMembers & JavaOpaque<"java.util.Iterator", [JavaOpaque<"org.bukkit.inventory.Recipe">]>;
export interface RecipeIteratorStatics {
  new(): RecipeIterator;
}

/** JVM class org.bukkit.craftbukkit.inventory.SerializableMeta. */
export interface SerializableMetaMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.configuration.serialization.ConfigurationSerializable">];
  serialize(): JavaMap<string, object>;
}
export type SerializableMeta = SerializableMetaMembers & JavaOpaque<"org.bukkit.configuration.serialization.ConfigurationSerializable">;
export interface SerializableMetaStatics {
  /** @throws java.lang.Throwable */
  deserialize(arg0: JavaMap<string, object>): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getBoolean(arg0: JavaMap<object, object>, arg1: object): boolean;
  getInteger(arg0: JavaMap<object, object>, arg1: object): number;
  getList<T>(arg0: JavaClass<T>, arg1: JavaMap<object, object>, arg2: object): JavaList<T>;
  getObject<T>(arg0: JavaClass<T>, arg1: JavaMap<object, object>, arg2: object, arg3: boolean): T;
  getObjectOptionally<T>(arg0: JavaClass<T>, arg1: JavaMap<object, object>, arg2: object, arg3: boolean): JavaOptional<T>;
  getString(arg0: JavaMap<object, object>, arg1: object, arg2: boolean): string;
}
