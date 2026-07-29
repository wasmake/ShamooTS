// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_inventory_meta from './com.destroystokyo.paper.inventory.meta.generated.js';
import type * as j_io_papermc_paper_datacomponent from './io.papermc.paper.datacomponent.generated.js';
import type * as j_io_papermc_paper_inventory from './io.papermc.paper.inventory.generated.js';
import type * as j_io_papermc_paper_inventory_tooltip from './io.papermc.paper.inventory.tooltip.generated.js';
import type * as j_io_papermc_paper_persistence from './io.papermc.paper.persistence.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_io_papermc_paper_world_flag from './io.papermc.paper.world.flag.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_attribute from './org.bukkit.attribute.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event_inventory from './org.bukkit.event.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta from './org.bukkit.inventory.meta.generated.js';
import type * as j_org_bukkit_inventory_meta_trim from './org.bukkit.inventory.meta.trim.generated.js';
import type * as j_org_bukkit_inventory_recipe from './org.bukkit.inventory.recipe.generated.js';
import type * as j_org_bukkit_inventory_view from './org.bukkit.inventory.view.generated.js';
import type * as j_org_bukkit_inventory_view_builder from './org.bukkit.inventory.view.builder.generated.js';
import type * as j_org_bukkit_material from './org.bukkit.material.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';

/** JVM interface org.bukkit.inventory.AbstractHorseInventory. */
export interface AbstractHorseInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getSaddle(): ItemStack | null;
  setSaddle(arg0: ItemStack | null): void;
}
export type AbstractHorseInventory = AbstractHorseInventoryMembers & Inventory;
export interface AbstractHorseInventoryStatics {
}

/** JVM interface org.bukkit.inventory.AnvilInventory. */
export interface AnvilInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getFirstItem(): ItemStack | null;
  getMaximumRepairCost(): number;
  getRenameText(): string | null;
  getRepairCost(): number;
  getRepairCostAmount(): number;
  getResult(): ItemStack | null;
  getSecondItem(): ItemStack | null;
  setFirstItem(arg0: ItemStack | null): void;
  setMaximumRepairCost(arg0: number): void;
  setRepairCost(arg0: number): void;
  setRepairCostAmount(arg0: number): void;
  setResult(arg0: ItemStack | null): void;
  setSecondItem(arg0: ItemStack | null): void;
}
export type AnvilInventory = AnvilInventoryMembers & Inventory;
export interface AnvilInventoryStatics {
}

/** JVM interface org.bukkit.inventory.ArmoredHorseInventory. */
export interface ArmoredHorseInventoryMembers {
  readonly __javaSupertypes?: readonly [AbstractHorseInventory];
  getArmor(): ItemStack | null;
  setArmor(arg0: ItemStack | null): void;
}
export type ArmoredHorseInventory = ArmoredHorseInventoryMembers & AbstractHorseInventory;
export interface ArmoredHorseInventoryStatics {
}

/** JVM interface org.bukkit.inventory.BeaconInventory. */
export interface BeaconInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getItem(): ItemStack | null;
  setItem(arg0: ItemStack | null): void;
}
export type BeaconInventory = BeaconInventoryMembers & Inventory;
export interface BeaconInventoryStatics {
}

/** JVM class org.bukkit.inventory.BlastingRecipe. */
export interface BlastingRecipeMembers {
  readonly __javaSupertypes?: readonly [CookingRecipe<BlastingRecipe>];
  getCategory(): j_org_bukkit_inventory_recipe.CookingBookCategory;
  getCookingTime(): number;
  getExperience(): number;
  getGroup(): string;
  getInput(): ItemStack;
  getInputChoice(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  setCategory(arg0: j_org_bukkit_inventory_recipe.CookingBookCategory): void;
  setCookingTime(arg0: number): void;
  setExperience(arg0: number): void;
  setGroup(arg0: string): void;
  setInput(arg0: j_org_bukkit.Material): CookingRecipe;
  setInputChoice(arg0: RecipeChoice): BlastingRecipe;
}
export type BlastingRecipe = BlastingRecipeMembers;
export interface BlastingRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: j_org_bukkit.Material, arg3: number, arg4: number): BlastingRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice, arg3: number, arg4: number): BlastingRecipe;
}

/** JVM interface org.bukkit.inventory.BlockInventoryHolder. */
export interface BlockInventoryHolderMembers {
  readonly __javaSupertypes?: readonly [InventoryHolder];
  getBlock(): j_org_bukkit_block.Block;
}
export type BlockInventoryHolder = BlockInventoryHolderMembers & InventoryHolder;
export interface BlockInventoryHolderStatics {
}

/** JVM interface org.bukkit.inventory.BrewerInventory. */
export interface BrewerInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getFuel(): ItemStack | null;
  getHolder(): j_org_bukkit_block.BrewingStand | null;
  getIngredient(): ItemStack | null;
  setFuel(arg0: ItemStack | null): void;
  setIngredient(arg0: ItemStack | null): void;
}
export type BrewerInventory = BrewerInventoryMembers & Inventory;
export interface BrewerInventoryStatics {
}

/** JVM class org.bukkit.inventory.CampfireRecipe. */
export interface CampfireRecipeMembers {
  readonly __javaSupertypes?: readonly [CookingRecipe<CampfireRecipe>];
  getCategory(): j_org_bukkit_inventory_recipe.CookingBookCategory;
  getCookingTime(): number;
  getExperience(): number;
  getGroup(): string;
  getInput(): ItemStack;
  getInputChoice(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  setCategory(arg0: j_org_bukkit_inventory_recipe.CookingBookCategory): void;
  setCookingTime(arg0: number): void;
  setExperience(arg0: number): void;
  setGroup(arg0: string): void;
  setInput(arg0: j_org_bukkit.Material): CookingRecipe;
  setInputChoice(arg0: RecipeChoice): CampfireRecipe;
}
export type CampfireRecipe = CampfireRecipeMembers;
export interface CampfireRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: j_org_bukkit.Material, arg3: number, arg4: number): CampfireRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice, arg3: number, arg4: number): CampfireRecipe;
}

/** JVM interface org.bukkit.inventory.CartographyInventory. */
export interface CartographyInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getResult(): ItemStack | null;
  setResult(arg0: ItemStack | null): void;
}
export type CartographyInventory = CartographyInventoryMembers & Inventory;
export interface CartographyInventoryStatics {
}

/** JVM interface org.bukkit.inventory.ChiseledBookshelfInventory. */
export interface ChiseledBookshelfInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getHolder(): j_org_bukkit_block.ChiseledBookshelf | null;
}
export type ChiseledBookshelfInventory = ChiseledBookshelfInventoryMembers & Inventory;
export interface ChiseledBookshelfInventoryStatics {
}

/** JVM interface org.bukkit.inventory.ComplexRecipe. */
export interface ComplexRecipeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, Recipe];
}
export type ComplexRecipe = ComplexRecipeMembers & j_org_bukkit.Keyed & Recipe;
export interface ComplexRecipeStatics {
}

/** JVM abstract org.bukkit.inventory.CookingRecipe. */
export interface CookingRecipeMembers<T /* extends CookingRecipe */ = unknown> {
  readonly __javaSupertypes?: readonly [Recipe, j_org_bukkit.Keyed];
  getCategory(): j_org_bukkit_inventory_recipe.CookingBookCategory;
  getCookingTime(): number;
  getExperience(): number;
  getGroup(): string;
  getInput(): ItemStack;
  getInputChoice(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  setCategory(arg0: j_org_bukkit_inventory_recipe.CookingBookCategory): void;
  setCookingTime(arg0: number): void;
  setExperience(arg0: number): void;
  setGroup(arg0: string): void;
  setInput(arg0: j_org_bukkit.Material): CookingRecipe;
  setInputChoice(arg0: RecipeChoice): T;
}
export type CookingRecipe<T /* extends CookingRecipe */ = unknown> = CookingRecipeMembers<T> & Recipe & j_org_bukkit.Keyed;
export interface CookingRecipeStatics {
}

/** JVM interface org.bukkit.inventory.CrafterInventory. */
export interface CrafterInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
}
export type CrafterInventory = CrafterInventoryMembers & Inventory;
export interface CrafterInventoryStatics {
}

/** JVM interface org.bukkit.inventory.CraftingInventory. */
export interface CraftingInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getMatrix(): Array<ItemStack> | null;
  getRecipe(): Recipe | null;
  getResult(): ItemStack | null;
  setMatrix(arg0: Array<ItemStack> | null): void;
  setResult(arg0: ItemStack | null): void;
}
export type CraftingInventory = CraftingInventoryMembers & Inventory;
export interface CraftingInventoryStatics {
}

/** JVM abstract org.bukkit.inventory.CraftingRecipe. */
export interface CraftingRecipeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, Recipe];
  getCategory(): j_org_bukkit_inventory_recipe.CraftingBookCategory;
  getGroup(): string;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  setCategory(arg0: j_org_bukkit_inventory_recipe.CraftingBookCategory): void;
  setGroup(arg0: string): void;
}
export type CraftingRecipe = CraftingRecipeMembers & j_org_bukkit.Keyed & Recipe;
export interface CraftingRecipeStatics {
}

/** Live JVM enum org.bukkit.inventory.CreativeCategory; constants are host handles, not strings. */
export type CreativeCategory = JavaEnum<"org.bukkit.inventory.CreativeCategory", "BREWING" | "BUILDING_BLOCKS" | "COMBAT" | "DECORATIONS" | "FOOD" | "MISC" | "REDSTONE" | "TOOLS" | "TRANSPORTATION"> & CreativeCategoryMembers;
export interface CreativeCategoryMembers {
  translationKey(): string;
}
export interface CreativeCategoryStatics {
  readonly BREWING: CreativeCategory;
  readonly BUILDING_BLOCKS: CreativeCategory;
  readonly COMBAT: CreativeCategory;
  readonly DECORATIONS: CreativeCategory;
  readonly FOOD: CreativeCategory;
  readonly MISC: CreativeCategory;
  readonly REDSTONE: CreativeCategory;
  readonly TOOLS: CreativeCategory;
  readonly TRANSPORTATION: CreativeCategory;
  valueOf(arg0: string): CreativeCategory;
  values(): Array<CreativeCategory>;
}

/** JVM interface org.bukkit.inventory.DecoratedPotInventory. */
export interface DecoratedPotInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getHolder(): j_org_bukkit_block.DecoratedPot | null;
  getItem(): ItemStack | null;
  setItem(arg0: ItemStack | null): void;
}
export type DecoratedPotInventory = DecoratedPotInventoryMembers & Inventory;
export interface DecoratedPotInventoryStatics {
}

/** JVM interface org.bukkit.inventory.DoubleChestInventory. */
export interface DoubleChestInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getHolder(): j_org_bukkit_block.DoubleChest | null;
  getLeftSide(): Inventory;
  getRightSide(): Inventory;
}
export type DoubleChestInventory = DoubleChestInventoryMembers & Inventory;
export interface DoubleChestInventoryStatics {
}

/** JVM interface org.bukkit.inventory.EnchantingInventory. */
export interface EnchantingInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getItem(): ItemStack | null;
  getSecondary(): ItemStack | null;
  setItem(arg0: ItemStack | null): void;
  setSecondary(arg0: ItemStack | null): void;
}
export type EnchantingInventory = EnchantingInventoryMembers & Inventory;
export interface EnchantingInventoryStatics {
}

/** JVM interface org.bukkit.inventory.EntityEquipment. */
export interface EntityEquipmentMembers {
  clear(): void;
  getArmorContents(): Array<ItemStack>;
  getBoots(): ItemStack;
  getBootsDropChance(): number;
  getChestplate(): ItemStack;
  getChestplateDropChance(): number;
  getDropChance(arg0: EquipmentSlot): number;
  getHelmet(): ItemStack;
  getHelmetDropChance(): number;
  getHolder(): j_org_bukkit_entity.Entity;
  getItem(arg0: EquipmentSlot): ItemStack;
  getItemInHand(): ItemStack;
  getItemInHandDropChance(): number;
  getItemInMainHand(): ItemStack;
  getItemInMainHandDropChance(): number;
  getItemInOffHand(): ItemStack;
  getItemInOffHandDropChance(): number;
  getLeggings(): ItemStack;
  getLeggingsDropChance(): number;
  setArmorContents(arg0: Array<ItemStack>): void;
  setBoots(arg0: ItemStack | null): void;
  setBoots(arg0: ItemStack | null, arg1: boolean): void;
  setBootsDropChance(arg0: number): void;
  setChestplate(arg0: ItemStack | null): void;
  setChestplate(arg0: ItemStack | null, arg1: boolean): void;
  setChestplateDropChance(arg0: number): void;
  setDropChance(arg0: EquipmentSlot, arg1: number): void;
  setHelmet(arg0: ItemStack | null): void;
  setHelmet(arg0: ItemStack | null, arg1: boolean): void;
  setHelmetDropChance(arg0: number): void;
  setItem(arg0: EquipmentSlot, arg1: ItemStack | null): void;
  setItem(arg0: EquipmentSlot, arg1: ItemStack | null, arg2: boolean): void;
  setItemInHand(arg0: ItemStack | null): void;
  setItemInHandDropChance(arg0: number): void;
  setItemInMainHand(arg0: ItemStack | null): void;
  setItemInMainHand(arg0: ItemStack | null, arg1: boolean): void;
  setItemInMainHandDropChance(arg0: number): void;
  setItemInOffHand(arg0: ItemStack | null): void;
  setItemInOffHand(arg0: ItemStack | null, arg1: boolean): void;
  setItemInOffHandDropChance(arg0: number): void;
  setLeggings(arg0: ItemStack | null): void;
  setLeggings(arg0: ItemStack | null, arg1: boolean): void;
  setLeggingsDropChance(arg0: number): void;
}
export type EntityEquipment = EntityEquipmentMembers;
export interface EntityEquipmentStatics {
}

/** Live JVM enum org.bukkit.inventory.EquipmentSlot; constants are host handles, not strings. */
export type EquipmentSlot = JavaEnum<"org.bukkit.inventory.EquipmentSlot", "BODY" | "CHEST" | "FEET" | "HAND" | "HEAD" | "LEGS" | "OFF_HAND" | "SADDLE"> & EquipmentSlotMembers;
export interface EquipmentSlotMembers {
  getGroup(): EquipmentSlotGroup;
  getOppositeHand(): EquipmentSlot;
  isArmor(): boolean;
  isHand(): boolean;
}
export interface EquipmentSlotStatics {
  readonly BODY: EquipmentSlot;
  readonly CHEST: EquipmentSlot;
  readonly FEET: EquipmentSlot;
  readonly HAND: EquipmentSlot;
  readonly HEAD: EquipmentSlot;
  readonly LEGS: EquipmentSlot;
  readonly OFF_HAND: EquipmentSlot;
  readonly SADDLE: EquipmentSlot;
  valueOf(arg0: string): EquipmentSlot;
  values(): Array<EquipmentSlot>;
}

/** JVM class org.bukkit.inventory.EquipmentSlotGroup. */
export interface EquipmentSlotGroupMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<EquipmentSlot>];
  getExample(): EquipmentSlot;
  test(arg0: EquipmentSlot): boolean;
  toString(): string;
}
export type EquipmentSlotGroup = EquipmentSlotGroupMembers & JavaPredicate<EquipmentSlot>;
export interface EquipmentSlotGroupStatics {
  readonly ANY: EquipmentSlotGroup;
  readonly ARMOR: EquipmentSlotGroup;
  readonly BODY: EquipmentSlotGroup;
  readonly CHEST: EquipmentSlotGroup;
  readonly FEET: EquipmentSlotGroup;
  readonly HAND: EquipmentSlotGroup;
  readonly HEAD: EquipmentSlotGroup;
  readonly LEGS: EquipmentSlotGroup;
  readonly MAINHAND: EquipmentSlotGroup;
  readonly OFFHAND: EquipmentSlotGroup;
  readonly SADDLE: EquipmentSlotGroup;
  getByName(arg0: string): EquipmentSlotGroup | null;
}

/** JVM interface org.bukkit.inventory.FurnaceInventory. */
export interface FurnaceInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  canSmelt(arg0: ItemStack | null): boolean;
  getFuel(): ItemStack | null;
  getHolder(): j_org_bukkit_block.Furnace | null;
  getResult(): ItemStack | null;
  getSmelting(): ItemStack | null;
  isFuel(arg0: ItemStack | null): boolean;
  setFuel(arg0: ItemStack | null): void;
  setResult(arg0: ItemStack | null): void;
  setSmelting(arg0: ItemStack | null): void;
}
export type FurnaceInventory = FurnaceInventoryMembers & Inventory;
export interface FurnaceInventoryStatics {
}

/** JVM class org.bukkit.inventory.FurnaceRecipe. */
export interface FurnaceRecipeMembers {
  readonly __javaSupertypes?: readonly [CookingRecipe<FurnaceRecipe>];
  getCategory(): j_org_bukkit_inventory_recipe.CookingBookCategory;
  getCookingTime(): number;
  getExperience(): number;
  getGroup(): string;
  getInput(): ItemStack;
  getInputChoice(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  setCategory(arg0: j_org_bukkit_inventory_recipe.CookingBookCategory): void;
  setCookingTime(arg0: number): void;
  setExperience(arg0: number): void;
  setGroup(arg0: string): void;
  setInput(arg0: j_org_bukkit.Material): CookingRecipe;
  setInput(arg0: j_org_bukkit.Material): FurnaceRecipe;
  setInput(arg0: j_org_bukkit.Material, arg1: number): FurnaceRecipe;
  setInput(arg0: j_org_bukkit_material.MaterialData): FurnaceRecipe;
  setInputChoice(arg0: RecipeChoice): FurnaceRecipe;
}
export type FurnaceRecipe = FurnaceRecipeMembers;
export interface FurnaceRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: j_org_bukkit.Material, arg3: number, arg4: number): FurnaceRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: j_org_bukkit.Material, arg3: number, arg4: number, arg5: number): FurnaceRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice, arg3: number, arg4: number): FurnaceRecipe;
  new(arg0: ItemStack, arg1: j_org_bukkit.Material): FurnaceRecipe;
  new(arg0: ItemStack, arg1: j_org_bukkit.Material, arg2: number): FurnaceRecipe;
  new(arg0: ItemStack, arg1: j_org_bukkit_material.MaterialData): FurnaceRecipe;
  new(arg0: ItemStack, arg1: j_org_bukkit_material.MaterialData, arg2: number): FurnaceRecipe;
}

/** JVM interface org.bukkit.inventory.GrindstoneInventory. */
export interface GrindstoneInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getLowerItem(): ItemStack | null;
  getResult(): ItemStack | null;
  getUpperItem(): ItemStack | null;
  setLowerItem(arg0: ItemStack | null): void;
  setResult(arg0: ItemStack | null): void;
  setUpperItem(arg0: ItemStack | null): void;
}
export type GrindstoneInventory = GrindstoneInventoryMembers & Inventory;
export interface GrindstoneInventoryStatics {
}

/** JVM interface org.bukkit.inventory.HorseInventory. */
export interface HorseInventoryMembers {
  readonly __javaSupertypes?: readonly [AbstractHorseInventory, ArmoredHorseInventory];
}
export type HorseInventory = HorseInventoryMembers & AbstractHorseInventory & ArmoredHorseInventory;
export interface HorseInventoryStatics {
}

/** JVM interface org.bukkit.inventory.Inventory. */
export interface InventoryMembers {
  readonly __javaSupertypes?: readonly [Iterable<ItemStack>];
  /** @throws java.lang.IllegalArgumentException */
  addItem(...arg0: Array<ItemStack>): JavaOpaque<"java.util.HashMap", [number, ItemStack]>;
  /** @throws java.lang.IllegalArgumentException */
  all(arg0: j_org_bukkit.Material): JavaOpaque<"java.util.HashMap", [number, ItemStack]>;
  all(arg0: ItemStack | null): JavaOpaque<"java.util.HashMap", [number, ItemStack]>;
  clear(): void;
  clear(arg0: number): void;
  close(): number;
  /** @throws java.lang.IllegalArgumentException */
  contains(arg0: j_org_bukkit.Material): boolean;
  /** @throws java.lang.IllegalArgumentException */
  contains(arg0: j_org_bukkit.Material, arg1: number): boolean;
  contains(arg0: ItemStack | null): boolean;
  contains(arg0: ItemStack | null, arg1: number): boolean;
  containsAtLeast(arg0: ItemStack | null, arg1: number): boolean;
  /** @throws java.lang.IllegalArgumentException */
  first(arg0: j_org_bukkit.Material): number;
  first(arg0: ItemStack): number;
  firstEmpty(): number;
  getContents(): Array<ItemStack> | null;
  getHolder(): InventoryHolder | null;
  getHolder(arg0: boolean): InventoryHolder | null;
  getItem(arg0: number): ItemStack | null;
  getLocation(): j_org_bukkit.Location | null;
  getMaxStackSize(): number;
  getSize(): number;
  getStorageContents(): Array<ItemStack> | null;
  getType(): j_org_bukkit_event_inventory.InventoryType;
  getViewers(): JavaList<j_org_bukkit_entity.HumanEntity>;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.ListIterator", [ItemStack]>;
  iterator(arg0: number): JavaOpaque<"java.util.ListIterator", [ItemStack]>;
  /** @throws java.lang.IllegalArgumentException */
  remove(arg0: j_org_bukkit.Material): void;
  remove(arg0: ItemStack): void;
  /** @throws java.lang.IllegalArgumentException */
  removeItem(...arg0: Array<ItemStack>): JavaOpaque<"java.util.HashMap", [number, ItemStack]>;
  /** @throws java.lang.IllegalArgumentException */
  removeItemAnySlot(...arg0: Array<ItemStack>): JavaOpaque<"java.util.HashMap", [number, ItemStack]>;
  /** @throws java.lang.IllegalArgumentException */
  setContents(arg0: Array<ItemStack> | null): void;
  setItem(arg0: number, arg1: ItemStack | null): void;
  setMaxStackSize(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setStorageContents(arg0: Array<ItemStack> | null): void;
}
export type Inventory = InventoryMembers & Iterable<ItemStack>;
export interface InventoryStatics {
}

/** JVM interface org.bukkit.inventory.InventoryHolder. */
export interface InventoryHolderMembers {
  getInventory(): Inventory;
}
export type InventoryHolder = InventoryHolderMembers;
export interface InventoryHolderStatics {
}

/** JVM interface org.bukkit.inventory.InventoryView. */
export interface InventoryViewMembers {
  close(): void;
  convertSlot(arg0: number): number;
  countSlots(): number;
  getBottomInventory(): Inventory;
  getCursor(): ItemStack;
  getInventory(arg0: number): Inventory | null;
  getItem(arg0: number): ItemStack | null;
  getMenuType(): MenuType | null;
  getOriginalTitle(): string;
  getPlayer(): j_org_bukkit_entity.HumanEntity;
  getSlotType(arg0: number): j_org_bukkit_event_inventory.InventoryType_SlotType;
  getTitle(): string;
  getTopInventory(): Inventory;
  getType(): j_org_bukkit_event_inventory.InventoryType;
  open(): void;
  setCursor(arg0: ItemStack | null): void;
  setItem(arg0: number, arg1: ItemStack | null): void;
  setProperty(arg0: InventoryView_Property, arg1: number): boolean;
  setTitle(arg0: string): void;
  title(): j_net_kyori_adventure_text.Component;
}
export type InventoryView = InventoryViewMembers;
export interface InventoryViewStatics {
  readonly OUTSIDE: -999;
}

/** Live JVM enum org.bukkit.inventory.InventoryView$Property; constants are host handles, not strings. */
export type InventoryView_Property = JavaEnum<"org.bukkit.inventory.InventoryView$Property", "BOOK_PAGE" | "BREW_TIME" | "BURN_TIME" | "COOK_TIME" | "ENCHANT_BUTTON1" | "ENCHANT_BUTTON2" | "ENCHANT_BUTTON3" | "ENCHANT_ID1" | "ENCHANT_ID2" | "ENCHANT_ID3" | "ENCHANT_LEVEL1" | "ENCHANT_LEVEL2" | "ENCHANT_LEVEL3" | "ENCHANT_XP_SEED" | "FUEL_TIME" | "LEVELS" | "PRIMARY_EFFECT" | "REPAIR_COST" | "SECONDARY_EFFECT" | "TICKS_FOR_CURRENT_FUEL" | "TICKS_FOR_CURRENT_SMELTING"> & InventoryView_PropertyMembers;
export interface InventoryView_PropertyMembers {
  getId(): number;
  getType(): j_org_bukkit_event_inventory.InventoryType;
}
export interface InventoryView_PropertyStatics {
  readonly BOOK_PAGE: InventoryView_Property;
  readonly BREW_TIME: InventoryView_Property;
  readonly BURN_TIME: InventoryView_Property;
  readonly COOK_TIME: InventoryView_Property;
  readonly ENCHANT_BUTTON1: InventoryView_Property;
  readonly ENCHANT_BUTTON2: InventoryView_Property;
  readonly ENCHANT_BUTTON3: InventoryView_Property;
  readonly ENCHANT_ID1: InventoryView_Property;
  readonly ENCHANT_ID2: InventoryView_Property;
  readonly ENCHANT_ID3: InventoryView_Property;
  readonly ENCHANT_LEVEL1: InventoryView_Property;
  readonly ENCHANT_LEVEL2: InventoryView_Property;
  readonly ENCHANT_LEVEL3: InventoryView_Property;
  readonly ENCHANT_XP_SEED: InventoryView_Property;
  readonly FUEL_TIME: InventoryView_Property;
  readonly LEVELS: InventoryView_Property;
  readonly PRIMARY_EFFECT: InventoryView_Property;
  readonly REPAIR_COST: InventoryView_Property;
  readonly SECONDARY_EFFECT: InventoryView_Property;
  readonly TICKS_FOR_CURRENT_FUEL: InventoryView_Property;
  readonly TICKS_FOR_CURRENT_SMELTING: InventoryView_Property;
  valueOf(arg0: string): InventoryView_Property;
  values(): Array<InventoryView_Property>;
}

/** JVM interface org.bukkit.inventory.ItemCraftResult. */
export interface ItemCraftResultMembers {
  getOverflowItems(): JavaList<ItemStack>;
  getResult(): ItemStack;
  getResultingMatrix(): Array<ItemStack>;
}
export type ItemCraftResult = ItemCraftResultMembers;
export interface ItemCraftResultStatics {
}

/** JVM interface org.bukkit.inventory.ItemFactory. */
export interface ItemFactoryMembers {
  asHoverEvent(arg0: ItemStack, arg1: JavaOpaque<"java.util.function.UnaryOperator", [j_net_kyori_adventure_text_event.HoverEvent_ShowItem]>): j_net_kyori_adventure_text_event.HoverEvent<j_net_kyori_adventure_text_event.HoverEvent_ShowItem>;
  /** @throws java.lang.IllegalArgumentException */
  asMetaFor(arg0: j_org_bukkit_inventory_meta.ItemMeta, arg1: j_org_bukkit.Material): j_org_bukkit_inventory_meta.ItemMeta | null;
  /** @throws java.lang.IllegalArgumentException */
  asMetaFor(arg0: j_org_bukkit_inventory_meta.ItemMeta, arg1: ItemStack): j_org_bukkit_inventory_meta.ItemMeta | null;
  /** @throws java.lang.IllegalArgumentException */
  createItemStack(arg0: string): ItemStack;
  displayName(arg0: ItemStack): j_net_kyori_adventure_text.Component;
  enchantItem(arg0: j_org_bukkit.World, arg1: ItemStack, arg2: number, arg3: boolean): ItemStack;
  enchantItem(arg0: j_org_bukkit_entity.Entity, arg1: ItemStack, arg2: number, arg3: boolean): ItemStack;
  enchantItem(arg0: ItemStack, arg1: number, arg2: boolean): ItemStack;
  enchantWithLevels(arg0: ItemStack, arg1: number, arg2: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_enchantments.Enchantment>, arg3: JavaOpaque<"java.util.Random">): ItemStack;
  enchantWithLevels(arg0: ItemStack, arg1: number, arg2: boolean, arg3: JavaOpaque<"java.util.Random">): ItemStack;
  ensureServerConversions(arg0: ItemStack): ItemStack;
  /** @throws java.lang.IllegalArgumentException */
  equals(arg0: j_org_bukkit_inventory_meta.ItemMeta | null, arg1: j_org_bukkit_inventory_meta.ItemMeta | null): boolean;
  getDefaultLeatherColor(): j_org_bukkit.Color;
  getI18NDisplayName(arg0: ItemStack | null): string | null;
  getItemMeta(arg0: j_org_bukkit.Material): j_org_bukkit_inventory_meta.ItemMeta;
  getSpawnEgg(arg0: j_org_bukkit_entity.EntityType): j_org_bukkit.Material | null;
  hoverContentOf(arg0: j_org_bukkit_entity.Entity): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: j_org_bukkit_entity.Entity, arg1: string | null): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: j_org_bukkit_entity.Entity, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent"> | null): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: j_org_bukkit_entity.Entity, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  hoverContentOf(arg0: ItemStack): JavaOpaque<"net.md_5.bungee.api.chat.hover.content.Content">;
  /** @throws java.lang.IllegalArgumentException */
  isApplicable(arg0: j_org_bukkit_inventory_meta.ItemMeta | null, arg1: j_org_bukkit.Material | null): boolean;
  /** @throws java.lang.IllegalArgumentException */
  isApplicable(arg0: j_org_bukkit_inventory_meta.ItemMeta | null, arg1: ItemStack | null): boolean;
}
export type ItemFactory = ItemFactoryMembers;
export interface ItemFactoryStatics {
}

/** Live JVM enum org.bukkit.inventory.ItemFlag; constants are host handles, not strings. */
export type ItemFlag = JavaEnum<"org.bukkit.inventory.ItemFlag", "HIDE_ADDITIONAL_TOOLTIP" | "HIDE_ARMOR_TRIM" | "HIDE_ATTRIBUTES" | "HIDE_DESTROYS" | "HIDE_DYE" | "HIDE_ENCHANTS" | "HIDE_PLACED_ON" | "HIDE_STORED_ENCHANTS" | "HIDE_UNBREAKABLE"> & ItemFlagMembers;
export interface ItemFlagMembers {
}
export interface ItemFlagStatics {
  readonly HIDE_ADDITIONAL_TOOLTIP: ItemFlag;
  readonly HIDE_ARMOR_TRIM: ItemFlag;
  readonly HIDE_ATTRIBUTES: ItemFlag;
  readonly HIDE_DESTROYS: ItemFlag;
  readonly HIDE_DYE: ItemFlag;
  readonly HIDE_ENCHANTS: ItemFlag;
  readonly HIDE_PLACED_ON: ItemFlag;
  readonly HIDE_STORED_ENCHANTS: ItemFlag;
  readonly HIDE_UNBREAKABLE: ItemFlag;
  valueOf(arg0: string): ItemFlag;
  values(): Array<ItemFlag>;
}

/** Live JVM enum org.bukkit.inventory.ItemRarity; constants are host handles, not strings. */
export type ItemRarity_2 = JavaEnum<"org.bukkit.inventory.ItemRarity", "COMMON" | "EPIC" | "RARE" | "UNCOMMON"> & ItemRarity_2Members;
export interface ItemRarity_2Members {
  color(): j_net_kyori_adventure_text_format.TextColor;
}
export interface ItemRarity_2Statics {
  readonly COMMON: ItemRarity_2;
  readonly EPIC: ItemRarity_2;
  readonly RARE: ItemRarity_2;
  readonly UNCOMMON: ItemRarity_2;
  valueOf(arg0: string): ItemRarity_2;
  values(): Array<ItemRarity_2>;
}

/** JVM class org.bukkit.inventory.ItemStack. */
export interface ItemStackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">, j_org_bukkit_configuration_serialization.ConfigurationSerializable, j_org_bukkit.Translatable_2, j_net_kyori_adventure_text_event.HoverEventSource<j_net_kyori_adventure_text_event.HoverEvent_ShowItem>, j_net_kyori_adventure_translation.Translatable, j_io_papermc_paper_persistence.PersistentDataViewHolder, j_io_papermc_paper_datacomponent.DataComponentHolder];
  add(): ItemStack;
  add(arg0: number): ItemStack;
  addEnchantment(arg0: j_org_bukkit_enchantments.Enchantment, arg1: number): void;
  addEnchantments(arg0: JavaMap<j_org_bukkit_enchantments.Enchantment, number>): void;
  addItemFlags(...arg0: Array<ItemFlag>): void;
  addUnsafeEnchantment(arg0: j_org_bukkit_enchantments.Enchantment, arg1: number): void;
  addUnsafeEnchantments(arg0: JavaMap<j_org_bukkit_enchantments.Enchantment, number>): void;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_kyori_adventure_text_event.HoverEvent_ShowItem]>): j_net_kyori_adventure_text_event.HoverEvent<j_net_kyori_adventure_text_event.HoverEvent_ShowItem>;
  asOne(): ItemStack;
  asQuantity(arg0: number): ItemStack;
  canRepair(arg0: ItemStack): boolean;
  clone(): ItemStack;
  computeTooltipLines(arg0: j_io_papermc_paper_inventory_tooltip.TooltipContext, arg1: j_org_bukkit_entity.Player | null): JavaList<j_net_kyori_adventure_text.Component>;
  containsEnchantment(arg0: j_org_bukkit_enchantments.Enchantment): boolean;
  copyDataFrom(arg0: ItemStack, arg1: JavaPredicate<j_io_papermc_paper_datacomponent.DataComponentType>): void;
  damage(arg0: number, arg1: j_org_bukkit_entity.LivingEntity): ItemStack;
  displayName(): j_net_kyori_adventure_text.Component;
  editMeta<M /* extends j_org_bukkit_inventory_meta.ItemMeta */>(arg0: JavaClass<M>, arg1: JavaConsumer<M>): boolean;
  editMeta(arg0: JavaConsumer<j_org_bukkit_inventory_meta.ItemMeta>): boolean;
  editPersistentDataContainer(arg0: JavaConsumer<j_org_bukkit_persistence.PersistentDataContainer>): boolean;
  effectiveName(): j_net_kyori_adventure_text.Component;
  enchantWithLevels(arg0: number, arg1: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_enchantments.Enchantment>, arg2: JavaOpaque<"java.util.Random">): ItemStack;
  enchantWithLevels(arg0: number, arg1: boolean, arg2: JavaOpaque<"java.util.Random">): ItemStack;
  ensureServerConversions(): ItemStack;
  equals(arg0: object): boolean;
  getAmount(): number;
  getData(): j_org_bukkit_material.MaterialData | null;
  getData<T>(arg0: j_io_papermc_paper_datacomponent.DataComponentType_Valued<T>): T | null;
  getDataOrDefault<T>(arg0: j_io_papermc_paper_datacomponent.DataComponentType_Valued<T>, arg1: T | null): T | null;
  getDataTypes(): JavaSet<j_io_papermc_paper_datacomponent.DataComponentType>;
  getDurability(): number;
  getEnchantmentLevel(arg0: j_org_bukkit_enchantments.Enchantment): number;
  getEnchantments(): JavaMap<j_org_bukkit_enchantments.Enchantment, number>;
  getI18NDisplayName(): string | null;
  getItemFlags(): JavaSet<ItemFlag>;
  getItemMeta(): j_org_bukkit_inventory_meta.ItemMeta;
  getLore(): JavaList<string> | null;
  getMaxItemUseDuration(): number;
  getMaxItemUseDuration(arg0: j_org_bukkit_entity.LivingEntity): number;
  getMaxStackSize(): number;
  getPersistentDataContainer(): j_io_papermc_paper_persistence.PersistentDataContainerView;
  getRarity(): j_io_papermc_paper_inventory.ItemRarity;
  getTranslationKey(): string;
  getType(): j_org_bukkit.Material;
  hasData(arg0: j_io_papermc_paper_datacomponent.DataComponentType): boolean;
  hasItemFlag(arg0: ItemFlag): boolean;
  hasItemMeta(): boolean;
  hashCode(): number;
  isDataOverridden(arg0: j_io_papermc_paper_datacomponent.DataComponentType): boolean;
  isEmpty(): boolean;
  isRepairableBy(arg0: ItemStack): boolean;
  isSimilar(arg0: ItemStack | null): boolean;
  lore(): JavaList<j_net_kyori_adventure_text.Component> | null;
  lore(arg0: JavaList<j_net_kyori_adventure_text.Component> | null): void;
  matchesWithoutData(arg0: ItemStack, arg1: JavaSet<j_io_papermc_paper_datacomponent.DataComponentType>): boolean;
  matchesWithoutData(arg0: ItemStack, arg1: JavaSet<j_io_papermc_paper_datacomponent.DataComponentType>, arg2: boolean): boolean;
  removeEnchantment(arg0: j_org_bukkit_enchantments.Enchantment): number;
  removeEnchantments(): void;
  removeItemFlags(...arg0: Array<ItemFlag>): void;
  resetData(arg0: j_io_papermc_paper_datacomponent.DataComponentType): void;
  serialize(): JavaMap<string, object>;
  serializeAsBytes(): Array<number>;
  setAmount(arg0: number): void;
  setData(arg0: j_io_papermc_paper_datacomponent.DataComponentType_NonValued): void;
  setData<T>(arg0: j_io_papermc_paper_datacomponent.DataComponentType_Valued<T>, arg1: j_io_papermc_paper_datacomponent.DataComponentBuilder<T>): void;
  setData<T>(arg0: j_io_papermc_paper_datacomponent.DataComponentType_Valued<T>, arg1: T): void;
  setData(arg0: j_org_bukkit_material.MaterialData | null): void;
  setDurability(arg0: number): void;
  setItemMeta(arg0: j_org_bukkit_inventory_meta.ItemMeta | null): boolean;
  setLore(arg0: JavaList<string> | null): void;
  setType(arg0: j_org_bukkit.Material): void;
  subtract(): ItemStack;
  subtract(arg0: number): ItemStack;
  toString(): string;
  translationKey(): string;
  unsetData(arg0: j_io_papermc_paper_datacomponent.DataComponentType): void;
  withType(arg0: j_org_bukkit.Material): ItemStack;
}
export type ItemStack = ItemStackMembers & JavaOpaque<"java.lang.Cloneable"> & j_org_bukkit_configuration_serialization.ConfigurationSerializable & j_org_bukkit.Translatable_2 & j_net_kyori_adventure_text_event.HoverEventSource<j_net_kyori_adventure_text_event.HoverEvent_ShowItem> & j_net_kyori_adventure_translation.Translatable & j_io_papermc_paper_persistence.PersistentDataViewHolder & j_io_papermc_paper_datacomponent.DataComponentHolder;
export interface ItemStackStatics {
  new(arg0: j_org_bukkit.Material): ItemStack;
  new(arg0: j_org_bukkit.Material, arg1: number): ItemStack;
  new(arg0: j_org_bukkit.Material, arg1: number, arg2: number): ItemStack;
  new(arg0: j_org_bukkit.Material, arg1: number, arg2: number, arg3: number | null): ItemStack;
  /** @throws java.lang.IllegalArgumentException */
  new(arg0: ItemStack): ItemStack;
  deserialize(arg0: JavaMap<string, object>): ItemStack;
  deserializeBytes(arg0: Array<number>): ItemStack;
  deserializeItemsFromBytes(arg0: Array<number>): Array<ItemStack>;
  empty(): ItemStack;
  of(arg0: j_org_bukkit.Material): ItemStack;
  of(arg0: j_org_bukkit.Material, arg1: number): ItemStack;
  serializeItemsAsBytes(arg0: JavaCollection<ItemStack>): Array<number>;
  serializeItemsAsBytes(arg0: Array<ItemStack> | null): Array<number>;
}

/** JVM interface org.bukkit.inventory.ItemType. */
export interface ItemTypeMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_world_flag.FeatureDependant, j_net_kyori_adventure_translation.Translatable, j_org_bukkit.Keyed, j_org_bukkit.Translatable_2];
  asMaterial(): j_org_bukkit.Material | null;
  createItemStack(): ItemStack;
  createItemStack(arg0: number): ItemStack;
  getBlockType(): j_org_bukkit_block.BlockType;
  getBurnDuration(): number;
  getCompostChance(): number;
  getCraftingRemainingItem(): ItemType | null;
  getCreativeCategory(): CreativeCategory | null;
  getDefaultAttributeModifiers(): JavaOpaque<"com.google.common.collect.Multimap", [j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier]>;
  getDefaultAttributeModifiers(arg0: EquipmentSlot): JavaOpaque<"com.google.common.collect.Multimap", [j_org_bukkit_attribute.Attribute, j_org_bukkit_attribute.AttributeModifier]>;
  getDefaultData<T>(arg0: j_io_papermc_paper_datacomponent.DataComponentType_Valued<T>): T | null;
  getDefaultDataTypes(): JavaSet<j_io_papermc_paper_datacomponent.DataComponentType>;
  getItemMetaClass(): JavaClass<j_org_bukkit_inventory_meta.ItemMeta>;
  getItemRarity(): ItemRarity_2 | null;
  getMaxDurability(): number;
  getMaxStackSize(): number;
  getTranslationKey(): string;
  hasBlockType(): boolean;
  hasDefaultData(arg0: j_io_papermc_paper_datacomponent.DataComponentType): boolean;
  isCompostable(): boolean;
  isEdible(): boolean;
  isEnabledByFeature(arg0: j_org_bukkit.World): boolean;
  isFuel(): boolean;
  isRecord(): boolean;
  typed(): ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  typed<M /* extends j_org_bukkit_inventory_meta.ItemMeta */>(arg0: JavaClass<M>): ItemType_Typed<M>;
}
export type ItemType = ItemTypeMembers & j_io_papermc_paper_world_flag.FeatureDependant & j_net_kyori_adventure_translation.Translatable & j_org_bukkit.Keyed & j_org_bukkit.Translatable_2;
export interface ItemTypeStatics {
  readonly ACACIA_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly ACACIA_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly ACACIA_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACACIA_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ACTIVATOR_RAIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AIR: ItemType;
  readonly ALLAY_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ALLIUM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AMETHYST_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AMETHYST_CLUSTER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AMETHYST_SHARD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANCIENT_DEBRIS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANDESITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANDESITE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANDESITE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANDESITE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANGLER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ANVIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly APPLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ARCHER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ARMADILLO_SCUTE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ARMADILLO_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ARMOR_STAND: ItemType_Typed<j_com_destroystokyo_paper_inventory_meta.ArmorStandMeta>;
  readonly ARMS_UP_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ARROW: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AXOLOTL_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.AxolotlBucketMeta>;
  readonly AXOLOTL_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly AZALEA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AZALEA_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly AZURE_BLUET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAKED_POTATO: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_CHEST_RAFT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BAMBOO_MOSAIC: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_MOSAIC_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_MOSAIC_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_RAFT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BAMBOO_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAMBOO_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BARREL: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BARRIER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BASALT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BAT_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly BEACON: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BEDROCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BEEF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BEEHIVE: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BEETROOT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BEETROOT_SEEDS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BEETROOT_SOUP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BEE_NEST: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BEE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly BELL: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BIG_DRIPLEAF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BIRCH_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BIRCH_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BIRCH_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACKSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACKSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACKSTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACKSTONE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly BLACK_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BLACK_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly BLACK_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BLACK_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLACK_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLADE_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLAST_FURNACE: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BLAZE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLAZE_ROD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLAZE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly BLUE_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly BLUE_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BLUE_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly BLUE_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_ICE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_ORCHID: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BLUE_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BLUE_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BOGGED_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly BOLT_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BONE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BONE_MEAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BOOK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BOOKSHELF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BORDURE_INDENTED_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BOW: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BOWL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRAIN_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRAIN_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRAIN_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BREAD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BREEZE_ROD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BREEZE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly BREWER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BREWING_STAND: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BRICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly BROWN_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BROWN_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly BROWN_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_MUSHROOM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_MUSHROOM_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly BROWN_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BROWN_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BRUSH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUBBLE_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUBBLE_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUBBLE_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUDDING_AMETHYST: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly BURN_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly BUSH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CACTUS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CACTUS_FLOWER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CAKE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CALCITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CALIBRATED_SCULK_SENSOR: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CAMEL_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CAMPFIRE: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CARROT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CARROT_ON_A_STICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CARTOGRAPHY_TABLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CARVED_PUMPKIN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CAT_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CAULDRON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CAVE_SPIDER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CHAIN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHAINMAIL_BOOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly CHAINMAIL_CHESTPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly CHAINMAIL_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly CHAINMAIL_LEGGINGS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly CHAIN_COMMAND_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CHARCOAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CHERRY_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CHERRY_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHERRY_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHEST: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CHEST_MINECART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHICKEN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHICKEN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CHIPPED_ANVIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_BOOKSHELF: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_DEEPSLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_NETHER_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_POLISHED_BLACKSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_QUARTZ_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_RED_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_RESIN_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_TUFF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHISELED_TUFF_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHORUS_FLOWER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHORUS_FRUIT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CHORUS_PLANT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CLAY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CLAY_BALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CLOSED_EYEBLOSSOM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COAL_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COARSE_DIRT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COAST_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLED_DEEPSLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLED_DEEPSLATE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLED_DEEPSLATE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLED_DEEPSLATE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLESTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLESTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLESTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBBLESTONE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COBWEB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COCOA_BEANS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COD_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COD_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly COMMAND_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly COMMAND_BLOCK_MINECART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COMPARATOR: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly COMPASS: ItemType_Typed<j_org_bukkit_inventory_meta.CompassMeta>;
  readonly COMPOSTER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CONDUIT: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly COOKED_BEEF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKED_CHICKEN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKED_COD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKED_MUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKED_PORKCHOP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKED_RABBIT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKED_SALMON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COOKIE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_INGOT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CORNFLOWER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly COW_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CRACKED_DEEPSLATE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRACKED_DEEPSLATE_TILES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRACKED_NETHER_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRACKED_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRAFTER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CRAFTING_TABLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CREAKING_HEART: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CREAKING_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CREEPER_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CREEPER_HEAD: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly CREEPER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly CRIMSON_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_FUNGUS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CRIMSON_HYPHAE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_NYLIUM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_ROOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CRIMSON_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_STEM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CRIMSON_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CROSSBOW: ItemType_Typed<j_org_bukkit_inventory_meta.CrossbowMeta>;
  readonly CRYING_OBSIDIAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_RED_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_RED_SANDSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CUT_SANDSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly CYAN_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CYAN_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly CYAN_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly CYAN_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly CYAN_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DAMAGED_ANVIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DANDELION: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DANGER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly DARK_OAK_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly DARK_OAK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_OAK_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_PRISMARINE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_PRISMARINE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DARK_PRISMARINE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DAYLIGHT_DETECTOR: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly DEAD_BRAIN_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_BRAIN_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_BRAIN_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_BUBBLE_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_BUBBLE_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_BUBBLE_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_BUSH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_FIRE_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_FIRE_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_FIRE_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_HORN_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_HORN_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_HORN_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_TUBE_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_TUBE_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEAD_TUBE_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEBUG_STICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DECORATED_POT: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly DEEPSLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_COAL_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_COPPER_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_DIAMOND_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_EMERALD_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_GOLD_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_IRON_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_LAPIS_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_REDSTONE_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_TILES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_TILE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_TILE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DEEPSLATE_TILE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DETECTOR_RAIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_AXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_BOOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly DIAMOND_CHESTPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly DIAMOND_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly DIAMOND_HOE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_HORSE_ARMOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_LEGGINGS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly DIAMOND_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_PICKAXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_SHOVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIAMOND_SWORD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIORITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIORITE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIORITE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIORITE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIRT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DIRT_PATH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DISC_FRAGMENT_5: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DISPENSER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly DOLPHIN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly DONKEY_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly DRAGON_BREATH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DRAGON_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DRAGON_HEAD: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly DRIED_GHAST: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DRIED_KELP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DRIED_KELP_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DRIPSTONE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly DROPPER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly DROWNED_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly DUNE_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ECHO_SHARD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EGG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ELDER_GUARDIAN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ELYTRA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EMERALD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EMERALD_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EMERALD_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ENCHANTED_BOOK: ItemType_Typed<j_org_bukkit_inventory_meta.EnchantmentStorageMeta>;
  readonly ENCHANTED_GOLDEN_APPLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ENCHANTING_TABLE: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly ENDERMAN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ENDERMITE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ENDER_CHEST: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly ENDER_DRAGON_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ENDER_EYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ENDER_PEARL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_CRYSTAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_PORTAL_FRAME: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_ROD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_STONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_STONE_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_STONE_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly END_STONE_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EVOKER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly EXPERIENCE_BOTTLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPLORER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EXPOSED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly EYE_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FARMLAND: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FEATHER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FERMENTED_SPIDER_EYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FIELD_MASONED_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FILLED_MAP: ItemType_Typed<j_org_bukkit_inventory_meta.MapMeta>;
  readonly FIREFLY_BUSH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FIREWORK_ROCKET: ItemType_Typed<j_org_bukkit_inventory_meta.FireworkMeta>;
  readonly FIREWORK_STAR: ItemType_Typed<j_org_bukkit_inventory_meta.FireworkEffectMeta>;
  readonly FIRE_CHARGE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FIRE_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FIRE_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FIRE_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FISHING_ROD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLETCHING_TABLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLINT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLINT_AND_STEEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOWERING_AZALEA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOWERING_AZALEA_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOWER_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOWER_POT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOW_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOW_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FLOW_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FOX_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly FRIEND_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FROGSPAWN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly FROG_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly FURNACE: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly FURNACE_MINECART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GHAST_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly GHAST_TEAR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GILDED_BLACKSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLASS_BOTTLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLISTERING_MELON_SLICE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOBE_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOWSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOWSTONE_DUST: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOW_BERRIES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOW_INK_SAC: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOW_ITEM_FRAME: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOW_LICHEN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GLOW_SQUID_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly GOAT_HORN: ItemType_Typed<j_org_bukkit_inventory_meta.MusicInstrumentMeta>;
  readonly GOAT_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly GOLDEN_APPLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_AXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_BOOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly GOLDEN_CARROT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_CHESTPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly GOLDEN_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly GOLDEN_HOE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_HORSE_ARMOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_LEGGINGS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly GOLDEN_PICKAXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_SHOVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLDEN_SWORD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLD_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLD_INGOT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLD_NUGGET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GOLD_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRANITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRANITE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRANITE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRANITE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRASS_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly GRAY_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly GRAY_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly GRAY_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly GRAY_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRAY_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly GREEN_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly GREEN_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly GREEN_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly GREEN_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GREEN_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GRINDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GUARDIAN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly GUNPOWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GUSTER_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly GUSTER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HANGING_ROOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HAPPY_GHAST_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly HAY_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HEARTBREAK_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HEART_OF_THE_SEA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HEART_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HEAVY_CORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HEAVY_WEIGHTED_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HOGLIN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly HONEYCOMB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HONEYCOMB_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HONEY_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HONEY_BOTTLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HOPPER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly HOPPER_MINECART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HORN_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HORN_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HORN_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HORSE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly HOST_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HOWL_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly HUSK_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ICE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_CHISELED_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_COBBLESTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_CRACKED_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_DEEPSLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_MOSSY_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_STONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INFESTED_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly INK_SAC: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_AXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_BARS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_BOOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly IRON_CHESTPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly IRON_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_GOLEM_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly IRON_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly IRON_HOE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_HORSE_ARMOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_INGOT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_LEGGINGS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly IRON_NUGGET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_PICKAXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_SHOVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_SWORD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly IRON_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ITEM_FRAME: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JACK_O_LANTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JIGSAW: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly JUKEBOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly JUNGLE_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly JUNGLE_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly JUNGLE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly JUNGLE_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly KELP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly KNOWLEDGE_BOOK: ItemType_Typed<j_org_bukkit_inventory_meta.KnowledgeBookMeta>;
  readonly LADDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LANTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LAPIS_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LAPIS_LAZULI: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LAPIS_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LARGE_AMETHYST_BUD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LARGE_FERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LAVA_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LEAD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LEAF_LITTER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LEATHER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LEATHER_BOOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ColorableArmorMeta>;
  readonly LEATHER_CHESTPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ColorableArmorMeta>;
  readonly LEATHER_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ColorableArmorMeta>;
  readonly LEATHER_HORSE_ARMOR: ItemType_Typed<j_org_bukkit_inventory_meta.LeatherArmorMeta>;
  readonly LEATHER_LEGGINGS: ItemType_Typed<j_org_bukkit_inventory_meta.ColorableArmorMeta>;
  readonly LECTERN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LEVER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHTNING_ROD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly LIGHT_BLUE_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LIGHT_BLUE_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly LIGHT_BLUE_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LIGHT_BLUE_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_BLUE_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly LIGHT_GRAY_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LIGHT_GRAY_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly LIGHT_GRAY_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LIGHT_GRAY_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_GRAY_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIGHT_WEIGHTED_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LILAC: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LILY_OF_THE_VALLEY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LILY_PAD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly LIME_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LIME_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly LIME_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly LIME_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LIME_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LINGERING_POTION: ItemType_Typed<j_org_bukkit_inventory_meta.PotionMeta>;
  readonly LLAMA_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly LODESTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly LOOM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MACE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly MAGENTA_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly MAGENTA_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly MAGENTA_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly MAGENTA_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGENTA_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGMA_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGMA_CREAM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAGMA_CUBE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly MANGROVE_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly MANGROVE_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_PROPAGULE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_ROOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly MANGROVE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MANGROVE_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MAP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MEDIUM_AMETHYST_BUD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MELON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MELON_SEEDS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MELON_SLICE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MILK_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MINECART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MINER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOJANG_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOOSHROOM_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly MOSSY_COBBLESTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_COBBLESTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_COBBLESTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_COBBLESTONE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_STONE_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_STONE_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSSY_STONE_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSS_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOSS_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MOURNER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUDDY_MANGROVE_ROOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUD_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUD_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUD_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUD_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MULE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly MUSHROOM_STEM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSHROOM_STEW: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_11: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_13: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_5: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_BLOCKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_CAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_CHIRP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_CREATOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_CREATOR_MUSIC_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_FAR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_LAVA_CHICKEN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_MALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_MELLOHI: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_OTHERSIDE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_PIGSTEP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_PRECIPICE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_RELIC: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_STAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_STRAD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_TEARS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_WAIT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUSIC_DISC_WARD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly MYCELIUM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NAME_TAG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NAUTILUS_SHELL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_AXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_BOOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly NETHERITE_CHESTPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly NETHERITE_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly NETHERITE_HOE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_INGOT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_LEGGINGS: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly NETHERITE_PICKAXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_SCRAP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_SHOVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_SWORD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERITE_UPGRADE_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHERRACK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_BRICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_BRICK_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_GOLD_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_QUARTZ_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_SPROUTS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_STAR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_WART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NETHER_WART_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly NOTE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly OAK_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly OAK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OAK_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OBSERVER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OBSIDIAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OCELOT_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly OCHRE_FROGLIGHT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OMINOUS_BOTTLE: ItemType_Typed<j_org_bukkit_inventory_meta.OminousBottleMeta>;
  readonly OMINOUS_TRIAL_KEY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OPEN_EYEBLOSSOM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly ORANGE_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly ORANGE_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly ORANGE_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly ORANGE_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_TULIP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ORANGE_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXEYE_DAISY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly OXIDIZED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PACKED_ICE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PACKED_MUD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PAINTING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_HANGING_MOSS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_MOSS_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_MOSS_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly PALE_OAK_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly PALE_OAK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PALE_OAK_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PANDA_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PAPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PARROT_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PEARLESCENT_FROGLIGHT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PEONY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PETRIFIED_OAK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PHANTOM_MEMBRANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PHANTOM_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PIGLIN_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PIGLIN_BRUTE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PIGLIN_HEAD: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly PIGLIN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PIG_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PILLAGER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PINK_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly PINK_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly PINK_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly PINK_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_PETALS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly PINK_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_TULIP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PINK_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PISTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PITCHER_PLANT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PITCHER_POD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PLAYER_HEAD: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly PLENTY_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PODZOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POINTED_DRIPSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POISONOUS_POTATO: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLAR_BEAR_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly POLISHED_ANDESITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_ANDESITE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_ANDESITE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BASALT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_BLACKSTONE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DEEPSLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DEEPSLATE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DEEPSLATE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DEEPSLATE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DIORITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DIORITE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_DIORITE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_GRANITE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_GRANITE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_GRANITE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_TUFF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_TUFF_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_TUFF_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POLISHED_TUFF_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POPPED_CHORUS_FRUIT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POPPY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PORKCHOP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POTATO: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POTION: ItemType_Typed<j_org_bukkit_inventory_meta.PotionMeta>;
  readonly POWDER_SNOW_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly POWERED_RAIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_CRYSTALS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_SHARD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRISMARINE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PRIZE_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PUFFERFISH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PUFFERFISH_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PUFFERFISH_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly PUMPKIN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PUMPKIN_PIE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PUMPKIN_SEEDS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly PURPLE_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly PURPLE_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly PURPLE_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly PURPLE_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPLE_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPUR_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPUR_PILLAR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPUR_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly PURPUR_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly QUARTZ: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly QUARTZ_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly QUARTZ_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly QUARTZ_PILLAR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly QUARTZ_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly QUARTZ_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RABBIT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RABBIT_FOOT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RABBIT_HIDE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RABBIT_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly RABBIT_STEW: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAISER_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAVAGER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly RAW_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAW_COPPER_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAW_GOLD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAW_GOLD_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAW_IRON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RAW_IRON_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RECOVERY_COMPASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REDSTONE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REDSTONE_LAMP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REDSTONE_ORE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REDSTONE_TORCH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly RED_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly RED_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly RED_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_MUSHROOM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_MUSHROOM_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_NETHER_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_NETHER_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_NETHER_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_NETHER_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_SAND: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_SANDSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_SANDSTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_SANDSTONE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly RED_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_TULIP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RED_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REINFORCED_DEEPSLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REPEATER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly REPEATING_COMMAND_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly RESIN_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESIN_BRICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESIN_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESIN_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESIN_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESIN_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESIN_CLUMP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RESPAWN_ANCHOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly RIB_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ROOTED_DIRT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ROSE_BUSH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ROTTEN_FLESH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SADDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SALMON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SALMON_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SALMON_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SAND: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SANDSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SANDSTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SANDSTONE_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SCAFFOLDING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SCRAPE_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SCULK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SCULK_CATALYST: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SCULK_SENSOR: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SCULK_SHRIEKER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SCULK_VEIN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SEAGRASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SEA_LANTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SEA_PICKLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHEAF_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHEARS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHEEP_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SHELTER_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHIELD: ItemType_Typed<j_org_bukkit_inventory_meta.ShieldMeta>;
  readonly SHORT_DRY_GRASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHORT_GRASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHROOMLIGHT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SHULKER_SHELL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SHULKER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SILVERFISH_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SKELETON_HORSE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SKELETON_SKULL: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly SKELETON_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SKULL_BANNER_PATTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SKULL_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SLIME_BALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SLIME_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SLIME_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SMALL_AMETHYST_BUD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMALL_DRIPLEAF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMITHING_TABLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOKER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SMOOTH_BASALT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_QUARTZ: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_QUARTZ_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_QUARTZ_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_RED_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_RED_SANDSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_RED_SANDSTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_SANDSTONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_SANDSTONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_SANDSTONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_STONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SMOOTH_STONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNIFFER_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNIFFER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SNORT_POTTERY_SHERD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNOW: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNOWBALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNOW_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SNOW_GOLEM_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SOUL_CAMPFIRE: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SOUL_LANTERN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SOUL_SAND: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SOUL_SOIL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SOUL_TORCH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPAWNER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SPECTRAL_ARROW: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPIDER_EYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPIDER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPLASH_POTION: ItemType_Typed<j_org_bukkit_inventory_meta.PotionMeta>;
  readonly SPONGE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPORE_BLOSSOM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_CHEST_BOAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SPRUCE_LEAVES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_SAPLING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SPRUCE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPRUCE_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SPYGLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SQUID_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly STICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STICKY_PISTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONECUTTER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_AXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_HOE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_PICKAXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_SHOVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STONE_SWORD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRAY_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly STRIDER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly STRING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_ACACIA_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_ACACIA_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_BAMBOO_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_BIRCH_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_BIRCH_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_CHERRY_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_CHERRY_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_CRIMSON_HYPHAE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_CRIMSON_STEM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_DARK_OAK_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_DARK_OAK_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_JUNGLE_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_JUNGLE_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_MANGROVE_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_MANGROVE_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_OAK_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_OAK_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_PALE_OAK_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_PALE_OAK_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_SPRUCE_LOG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_SPRUCE_WOOD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_WARPED_HYPHAE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRIPPED_WARPED_STEM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly STRUCTURE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly STRUCTURE_VOID: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SUGAR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SUGAR_CANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SUNFLOWER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly SUSPICIOUS_GRAVEL: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SUSPICIOUS_SAND: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly SUSPICIOUS_STEW: ItemType_Typed<j_org_bukkit_inventory_meta.SuspiciousStewMeta>;
  readonly SWEET_BERRIES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TADPOLE_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TADPOLE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly TALL_DRY_GRASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TALL_GRASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TARGET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TEST_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly TEST_INSTANCE_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly TIDE_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TINTED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TIPPED_ARROW: ItemType_Typed<j_org_bukkit_inventory_meta.PotionMeta>;
  readonly TNT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TNT_MINECART: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TORCH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TORCHFLOWER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TORCHFLOWER_SEEDS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TOTEM_OF_UNDYING: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TRADER_LLAMA_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly TRAPPED_CHEST: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly TRIAL_KEY: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TRIAL_SPAWNER: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly TRIDENT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TRIPWIRE_HOOK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TROPICAL_FISH: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TROPICAL_FISH_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.TropicalFishBucketMeta>;
  readonly TROPICAL_FISH_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly TUBE_CORAL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUBE_CORAL_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUBE_CORAL_FAN: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_BRICKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_BRICK_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_BRICK_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_BRICK_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TUFF_WALL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TURTLE_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TURTLE_HELMET: ItemType_Typed<j_org_bukkit_inventory_meta.ArmorMeta>;
  readonly TURTLE_SCUTE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly TURTLE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly TWISTING_VINES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly VAULT: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly VERDANT_FROGLIGHT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly VEX_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly VEX_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly VILLAGER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly VINDICATOR_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly VINE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WANDERING_TRADER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly WARDEN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly WARD_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_BUTTON: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_FENCE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_FENCE_GATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_FUNGUS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_FUNGUS_ON_A_STICK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_HANGING_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly WARPED_HYPHAE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_NYLIUM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_PLANKS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_PRESSURE_PLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_ROOTS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_SIGN: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly WARPED_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_STEM: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WARPED_WART_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WATER_BUCKET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_COPPER_BLOCK: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_CHISELED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_COPPER_BULB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_COPPER_DOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_COPPER_GRATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_COPPER_TRAPDOOR: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_CUT_COPPER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_CUT_COPPER_SLAB: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEATHERED_CUT_COPPER_STAIRS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WEEPING_VINES: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WET_SPONGE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHEAT: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHEAT_SEEDS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly WHITE_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly WHITE_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly WHITE_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly WHITE_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_TULIP: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WHITE_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WILDFLOWERS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WILD_ARMOR_TRIM_SMITHING_TEMPLATE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WIND_CHARGE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WITCH_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly WITHER_ROSE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WITHER_SKELETON_SKULL: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly WITHER_SKELETON_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly WITHER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly WOLF_ARMOR: ItemType_Typed<j_org_bukkit_inventory_meta.ColorableArmorMeta>;
  readonly WOLF_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly WOODEN_AXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WOODEN_HOE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WOODEN_PICKAXE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WOODEN_SHOVEL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WOODEN_SWORD: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly WRITABLE_BOOK: ItemType_Typed<j_org_bukkit_inventory_meta.BookMeta>;
  readonly WRITTEN_BOOK: ItemType_Typed<j_org_bukkit_inventory_meta.BookMeta>;
  readonly YELLOW_BANNER: ItemType_Typed<j_org_bukkit_inventory_meta.BannerMeta>;
  readonly YELLOW_BED: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly YELLOW_BUNDLE: ItemType_Typed<j_org_bukkit_inventory_meta.BundleMeta>;
  readonly YELLOW_CANDLE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_CARPET: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_CONCRETE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_CONCRETE_POWDER: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_DYE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_GLAZED_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_HARNESS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_SHULKER_BOX: ItemType_Typed<j_org_bukkit_inventory_meta.BlockStateMeta>;
  readonly YELLOW_STAINED_GLASS: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_STAINED_GLASS_PANE: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_TERRACOTTA: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly YELLOW_WOOL: ItemType_Typed<j_org_bukkit_inventory_meta.ItemMeta>;
  readonly ZOGLIN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ZOMBIE_HEAD: ItemType_Typed<j_org_bukkit_inventory_meta.SkullMeta>;
  readonly ZOMBIE_HORSE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ZOMBIE_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ZOMBIE_VILLAGER_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
  readonly ZOMBIFIED_PIGLIN_SPAWN_EGG: ItemType_Typed<j_org_bukkit_inventory_meta.SpawnEggMeta>;
}

/** JVM interface org.bukkit.inventory.ItemType$Typed. */
export interface ItemType_TypedMembers<M /* extends j_org_bukkit_inventory_meta.ItemMeta */ = unknown> {
  readonly __javaSupertypes?: readonly [ItemType];
  createItemStack(arg0: number, arg1: JavaConsumer<M> | null): ItemStack;
  createItemStack(arg0: JavaConsumer<M> | null): ItemStack;
  getItemMetaClass(): JavaClass<M>;
}
export type ItemType_Typed<M /* extends j_org_bukkit_inventory_meta.ItemMeta */ = unknown> = ItemType_TypedMembers<M> & ItemType;
export interface ItemType_TypedStatics {
}

/** JVM interface org.bukkit.inventory.JukeboxInventory. */
export interface JukeboxInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getHolder(): j_org_bukkit_block.Jukebox | null;
  getRecord(): ItemStack | null;
  setRecord(arg0: ItemStack | null): void;
}
export type JukeboxInventory = JukeboxInventoryMembers & Inventory;
export interface JukeboxInventoryStatics {
}

/** JVM interface org.bukkit.inventory.LecternInventory. */
export interface LecternInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getBook(): ItemStack | null;
  getHolder(): j_org_bukkit_block.Lectern | null;
  setBook(arg0: ItemStack | null): void;
}
export type LecternInventory = LecternInventoryMembers & Inventory;
export interface LecternInventoryStatics {
}

/** JVM interface org.bukkit.inventory.LlamaInventory. */
export interface LlamaInventoryMembers {
  readonly __javaSupertypes?: readonly [SaddledHorseInventory];
  getDecor(): ItemStack | null;
  setDecor(arg0: ItemStack | null): void;
}
export type LlamaInventory = LlamaInventoryMembers & SaddledHorseInventory;
export interface LlamaInventoryStatics {
}

/** JVM interface org.bukkit.inventory.LoomInventory. */
export interface LoomInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
}
export type LoomInventory = LoomInventoryMembers & Inventory;
export interface LoomInventoryStatics {
}

/** Live JVM enum org.bukkit.inventory.MainHand; constants are host handles, not strings. */
export type MainHand = JavaEnum<"org.bukkit.inventory.MainHand", "LEFT" | "RIGHT"> & MainHandMembers;
export interface MainHandMembers {
}
export interface MainHandStatics {
  readonly LEFT: MainHand;
  readonly RIGHT: MainHand;
  valueOf(arg0: string): MainHand;
  values(): Array<MainHand>;
}

/** JVM interface org.bukkit.inventory.MenuType. */
export interface MenuTypeMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_world_flag.FeatureDependant, j_org_bukkit.Keyed];
  create(arg0: j_org_bukkit_entity.HumanEntity, arg1: j_net_kyori_adventure_text.Component | null): InventoryView;
  getInventoryViewClass(): JavaClass<InventoryView>;
  typed(): MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.InventoryViewBuilder<InventoryView>>;
  /** @throws java.lang.IllegalArgumentException */
  typed<V /* extends InventoryView */, B /* extends j_org_bukkit_inventory_view_builder.InventoryViewBuilder<V> */>(arg0: JavaClass<V>): MenuType_Typed<V, B>;
}
export type MenuType = MenuTypeMembers & j_io_papermc_paper_world_flag.FeatureDependant & j_org_bukkit.Keyed;
export interface MenuTypeStatics {
  readonly ANVIL: MenuType_Typed<j_org_bukkit_inventory_view.AnvilView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.AnvilView>>;
  readonly BEACON: MenuType_Typed<j_org_bukkit_inventory_view.BeaconView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.BeaconView>>;
  readonly BLAST_FURNACE: MenuType_Typed<j_org_bukkit_inventory_view.FurnaceView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.FurnaceView>>;
  readonly BREWING_STAND: MenuType_Typed<j_org_bukkit_inventory_view.BrewingStandView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.BrewingStandView>>;
  readonly CARTOGRAPHY_TABLE: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly CRAFTER_3X3: MenuType_Typed<j_org_bukkit_inventory_view.CrafterView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.CrafterView>>;
  readonly CRAFTING: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly ENCHANTMENT: MenuType_Typed<j_org_bukkit_inventory_view.EnchantmentView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.EnchantmentView>>;
  readonly FURNACE: MenuType_Typed<j_org_bukkit_inventory_view.FurnaceView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.FurnaceView>>;
  readonly GENERIC_3X3: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly GENERIC_9X1: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.InventoryViewBuilder<InventoryView>>;
  readonly GENERIC_9X2: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.InventoryViewBuilder<InventoryView>>;
  readonly GENERIC_9X3: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly GENERIC_9X4: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.InventoryViewBuilder<InventoryView>>;
  readonly GENERIC_9X5: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.InventoryViewBuilder<InventoryView>>;
  readonly GENERIC_9X6: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly GRINDSTONE: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly HOPPER: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly LECTERN: MenuType_Typed<j_org_bukkit_inventory_view.LecternView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.LecternView>>;
  readonly LOOM: MenuType_Typed<j_org_bukkit_inventory_view.LoomView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.LoomView>>;
  readonly MERCHANT: MenuType_Typed<j_org_bukkit_inventory_view.MerchantView, j_org_bukkit_inventory_view_builder.MerchantInventoryViewBuilder<j_org_bukkit_inventory_view.MerchantView>>;
  readonly SHULKER_BOX: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly SMITHING: MenuType_Typed<InventoryView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<InventoryView>>;
  readonly SMOKER: MenuType_Typed<j_org_bukkit_inventory_view.FurnaceView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.FurnaceView>>;
  readonly STONECUTTER: MenuType_Typed<j_org_bukkit_inventory_view.StonecutterView, j_org_bukkit_inventory_view_builder.LocationInventoryViewBuilder<j_org_bukkit_inventory_view.StonecutterView>>;
}

/** JVM interface org.bukkit.inventory.MenuType$Typed. */
export interface MenuType_TypedMembers<V /* extends InventoryView */ = unknown, B /* extends j_org_bukkit_inventory_view_builder.InventoryViewBuilder<V> */ = unknown> {
  readonly __javaSupertypes?: readonly [MenuType];
  builder(): B;
  create(arg0: j_org_bukkit_entity.HumanEntity): V;
  create(arg0: j_org_bukkit_entity.HumanEntity, arg1: string | null): V;
  create(arg0: j_org_bukkit_entity.HumanEntity, arg1: j_net_kyori_adventure_text.Component | null): V;
}
export type MenuType_Typed<V /* extends InventoryView */ = unknown, B /* extends j_org_bukkit_inventory_view_builder.InventoryViewBuilder<V> */ = unknown> = MenuType_TypedMembers<V, B> & MenuType;
export interface MenuType_TypedStatics {
}

/** JVM interface org.bukkit.inventory.Merchant. */
export interface MerchantMembers {
  /** @throws java.lang.IndexOutOfBoundsException */
  getRecipe(arg0: number): MerchantRecipe;
  getRecipeCount(): number;
  getRecipes(): JavaList<MerchantRecipe>;
  getTrader(): j_org_bukkit_entity.HumanEntity | null;
  isTrading(): boolean;
  /** @throws java.lang.IndexOutOfBoundsException */
  setRecipe(arg0: number, arg1: MerchantRecipe): void;
  setRecipes(arg0: JavaList<MerchantRecipe>): void;
}
export type Merchant = MerchantMembers;
export interface MerchantStatics {
}

/** JVM interface org.bukkit.inventory.MerchantInventory. */
export interface MerchantInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getMerchant(): Merchant;
  getSelectedRecipe(): MerchantRecipe | null;
  getSelectedRecipeIndex(): number;
}
export type MerchantInventory = MerchantInventoryMembers & Inventory;
export interface MerchantInventoryStatics {
}

/** JVM class org.bukkit.inventory.MerchantRecipe. */
export interface MerchantRecipeMembers {
  readonly __javaSupertypes?: readonly [Recipe];
  addIngredient(arg0: ItemStack): void;
  adjust(arg0: ItemStack | null): void;
  getAdjustedIngredient1(): ItemStack | null;
  getDemand(): number;
  getIngredients(): JavaList<ItemStack>;
  getMaxUses(): number;
  getPriceMultiplier(): number;
  getResult(): ItemStack;
  getSpecialPrice(): number;
  getUses(): number;
  getVillagerExperience(): number;
  hasExperienceReward(): boolean;
  removeIngredient(arg0: number): void;
  setDemand(arg0: number): void;
  setExperienceReward(arg0: boolean): void;
  setIgnoreDiscounts(arg0: boolean): void;
  setIngredients(arg0: JavaList<ItemStack>): void;
  setMaxUses(arg0: number): void;
  setPriceMultiplier(arg0: number): void;
  setSpecialPrice(arg0: number): void;
  setUses(arg0: number): void;
  setVillagerExperience(arg0: number): void;
  shouldIgnoreDiscounts(): boolean;
}
export type MerchantRecipe = MerchantRecipeMembers & Recipe;
export interface MerchantRecipeStatics {
  new(arg0: ItemStack, arg1: number): MerchantRecipe;
  new(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean): MerchantRecipe;
  new(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): MerchantRecipe;
  new(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number): MerchantRecipe;
  new(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): MerchantRecipe;
  new(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: boolean): MerchantRecipe;
  new(arg0: MerchantRecipe): MerchantRecipe;
}

/** JVM interface org.bukkit.inventory.PlayerInventory. */
export interface PlayerInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getArmorContents(): Array<ItemStack> | null;
  getBoots(): ItemStack | null;
  getChestplate(): ItemStack | null;
  getExtraContents(): Array<ItemStack> | null;
  getHeldItemSlot(): number;
  getHelmet(): ItemStack | null;
  getHolder(): j_org_bukkit_entity.HumanEntity | null;
  getItem(arg0: EquipmentSlot): ItemStack;
  getItemInHand(): ItemStack;
  getItemInMainHand(): ItemStack;
  getItemInOffHand(): ItemStack;
  getLeggings(): ItemStack | null;
  setArmorContents(arg0: Array<ItemStack> | null): void;
  setBoots(arg0: ItemStack | null): void;
  setChestplate(arg0: ItemStack | null): void;
  setExtraContents(arg0: Array<ItemStack> | null): void;
  setHeldItemSlot(arg0: number): void;
  setHelmet(arg0: ItemStack | null): void;
  setItem(arg0: number, arg1: ItemStack | null): void;
  setItem(arg0: EquipmentSlot, arg1: ItemStack | null): void;
  setItemInHand(arg0: ItemStack | null): void;
  setItemInMainHand(arg0: ItemStack | null): void;
  setItemInOffHand(arg0: ItemStack | null): void;
  setLeggings(arg0: ItemStack | null): void;
}
export type PlayerInventory = PlayerInventoryMembers & Inventory;
export interface PlayerInventoryStatics {
}

/** JVM interface org.bukkit.inventory.Recipe. */
export interface RecipeMembers {
  getResult(): ItemStack;
}
export type Recipe = RecipeMembers;
export interface RecipeStatics {
}

/** JVM interface org.bukkit.inventory.RecipeChoice. */
export interface RecipeChoiceMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<ItemStack>, JavaOpaque<"java.lang.Cloneable">];
  clone(): RecipeChoice;
  getItemStack(): ItemStack;
  test(arg0: ItemStack): boolean;
  validate(arg0: boolean): RecipeChoice;
}
export type RecipeChoice = RecipeChoiceMembers & JavaPredicate<ItemStack> & JavaOpaque<"java.lang.Cloneable">;
export interface RecipeChoiceStatics {
  empty(): RecipeChoice;
}

/** JVM class org.bukkit.inventory.RecipeChoice$ExactChoice. */
export interface RecipeChoice_ExactChoiceMembers {
  readonly __javaSupertypes?: readonly [RecipeChoice];
  clone(): RecipeChoice_ExactChoice;
  equals(arg0: object): boolean;
  getChoices(): JavaList<ItemStack>;
  getItemStack(): ItemStack;
  hashCode(): number;
  test(arg0: ItemStack): boolean;
  toString(): string;
  validate(arg0: boolean): RecipeChoice;
}
export type RecipeChoice_ExactChoice = RecipeChoice_ExactChoiceMembers & RecipeChoice;
export interface RecipeChoice_ExactChoiceStatics {
  new(arg0: JavaList<ItemStack>): RecipeChoice_ExactChoice;
  new(arg0: ItemStack): RecipeChoice_ExactChoice;
  new(...arg0: Array<ItemStack>): RecipeChoice_ExactChoice;
}

/** JVM class org.bukkit.inventory.RecipeChoice$MaterialChoice. */
export interface RecipeChoice_MaterialChoiceMembers {
  readonly __javaSupertypes?: readonly [RecipeChoice];
  clone(): RecipeChoice_MaterialChoice;
  equals(arg0: object): boolean;
  getChoices(): JavaList<j_org_bukkit.Material>;
  getItemStack(): ItemStack;
  hashCode(): number;
  test(arg0: ItemStack): boolean;
  toString(): string;
  validate(arg0: boolean): RecipeChoice;
}
export type RecipeChoice_MaterialChoice = RecipeChoice_MaterialChoiceMembers & RecipeChoice;
export interface RecipeChoice_MaterialChoiceStatics {
  new(arg0: JavaList<j_org_bukkit.Material>): RecipeChoice_MaterialChoice;
  new(arg0: j_org_bukkit.Material): RecipeChoice_MaterialChoice;
  new(arg0: j_org_bukkit.Tag_3<j_org_bukkit.Material>): RecipeChoice_MaterialChoice;
  new(...arg0: Array<j_org_bukkit.Material>): RecipeChoice_MaterialChoice;
}

/** JVM interface org.bukkit.inventory.SaddledHorseInventory. */
export interface SaddledHorseInventoryMembers {
  readonly __javaSupertypes?: readonly [AbstractHorseInventory];
}
export type SaddledHorseInventory = SaddledHorseInventoryMembers & AbstractHorseInventory;
export interface SaddledHorseInventoryStatics {
}

/** JVM class org.bukkit.inventory.ShapedRecipe. */
export interface ShapedRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe];
  getChoiceMap(): JavaMap<string, RecipeChoice>;
  getIngredientMap(): JavaMap<string, ItemStack>;
  getShape(): Array<string>;
  setIngredient(arg0: string, arg1: j_org_bukkit.Material): ShapedRecipe;
  setIngredient(arg0: string, arg1: j_org_bukkit.Material, arg2: number): ShapedRecipe;
  setIngredient(arg0: string, arg1: ItemStack): ShapedRecipe;
  setIngredient(arg0: string, arg1: RecipeChoice): ShapedRecipe;
  setIngredient(arg0: string, arg1: j_org_bukkit_material.MaterialData): ShapedRecipe;
  shape(...arg0: Array<string>): ShapedRecipe;
}
export type ShapedRecipe = ShapedRecipeMembers & CraftingRecipe;
export interface ShapedRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack): ShapedRecipe;
  new(arg0: ItemStack): ShapedRecipe;
}

/** JVM class org.bukkit.inventory.ShapelessRecipe. */
export interface ShapelessRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe];
  addIngredient(arg0: number, arg1: j_org_bukkit.Material): ShapelessRecipe;
  addIngredient(arg0: number, arg1: j_org_bukkit.Material, arg2: number): ShapelessRecipe;
  addIngredient(arg0: number, arg1: ItemStack): ShapelessRecipe;
  addIngredient(arg0: number, arg1: j_org_bukkit_material.MaterialData): ShapelessRecipe;
  addIngredient(arg0: j_org_bukkit.Material): ShapelessRecipe;
  addIngredient(arg0: j_org_bukkit.Material, arg1: number): ShapelessRecipe;
  addIngredient(arg0: ItemStack): ShapelessRecipe;
  addIngredient(arg0: RecipeChoice): ShapelessRecipe;
  addIngredient(arg0: j_org_bukkit_material.MaterialData): ShapelessRecipe;
  getChoiceList(): JavaList<RecipeChoice>;
  getIngredientList(): JavaList<ItemStack>;
  removeIngredient(arg0: number, arg1: j_org_bukkit.Material): ShapelessRecipe;
  removeIngredient(arg0: number, arg1: j_org_bukkit.Material, arg2: number): ShapelessRecipe;
  removeIngredient(arg0: number, arg1: ItemStack): ShapelessRecipe;
  removeIngredient(arg0: number, arg1: j_org_bukkit_material.MaterialData): ShapelessRecipe;
  removeIngredient(arg0: j_org_bukkit.Material): ShapelessRecipe;
  removeIngredient(arg0: j_org_bukkit.Material, arg1: number): ShapelessRecipe;
  removeIngredient(arg0: ItemStack): ShapelessRecipe;
  removeIngredient(arg0: RecipeChoice): ShapelessRecipe;
  removeIngredient(arg0: j_org_bukkit_material.MaterialData): ShapelessRecipe;
}
export type ShapelessRecipe = ShapelessRecipeMembers & CraftingRecipe;
export interface ShapelessRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack): ShapelessRecipe;
  new(arg0: ItemStack): ShapelessRecipe;
}

/** JVM interface org.bukkit.inventory.SmithingInventory. */
export interface SmithingInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getInputEquipment(): ItemStack | null;
  getInputMineral(): ItemStack | null;
  getInputTemplate(): ItemStack | null;
  getRecipe(): Recipe | null;
  getResult(): ItemStack | null;
  setInputEquipment(arg0: ItemStack | null): void;
  setInputMineral(arg0: ItemStack | null): void;
  setInputTemplate(arg0: ItemStack | null): void;
  setResult(arg0: ItemStack | null): void;
}
export type SmithingInventory = SmithingInventoryMembers & Inventory;
export interface SmithingInventoryStatics {
}

/** JVM class org.bukkit.inventory.SmithingRecipe. */
export interface SmithingRecipeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, Recipe];
  getAddition(): RecipeChoice;
  getBase(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  willCopyDataComponents(): boolean;
  willCopyNbt(): boolean;
}
export type SmithingRecipe = SmithingRecipeMembers & j_org_bukkit.Keyed & Recipe;
export interface SmithingRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice | null, arg3: RecipeChoice | null): SmithingRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice | null, arg3: RecipeChoice | null, arg4: boolean): SmithingRecipe;
}

/** JVM class org.bukkit.inventory.SmithingTransformRecipe. */
export interface SmithingTransformRecipeMembers {
  readonly __javaSupertypes?: readonly [SmithingRecipe];
  getTemplate(): RecipeChoice;
}
export type SmithingTransformRecipe = SmithingTransformRecipeMembers & SmithingRecipe;
export interface SmithingTransformRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice, arg3: RecipeChoice, arg4: RecipeChoice): SmithingTransformRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice, arg3: RecipeChoice, arg4: RecipeChoice, arg5: boolean): SmithingTransformRecipe;
}

/** JVM class org.bukkit.inventory.SmithingTrimRecipe. */
export interface SmithingTrimRecipeMembers {
  readonly __javaSupertypes?: readonly [SmithingRecipe, ComplexRecipe];
  getTemplate(): RecipeChoice;
  getTrimPattern(): j_org_bukkit_inventory_meta_trim.TrimPattern;
}
export type SmithingTrimRecipe = SmithingTrimRecipeMembers & SmithingRecipe & ComplexRecipe;
export interface SmithingTrimRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: RecipeChoice, arg2: RecipeChoice, arg3: RecipeChoice): SmithingTrimRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: RecipeChoice, arg2: RecipeChoice, arg3: RecipeChoice, arg4: j_org_bukkit_inventory_meta_trim.TrimPattern): SmithingTrimRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: RecipeChoice, arg2: RecipeChoice, arg3: RecipeChoice, arg4: j_org_bukkit_inventory_meta_trim.TrimPattern, arg5: boolean): SmithingTrimRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: RecipeChoice, arg2: RecipeChoice, arg3: RecipeChoice, arg4: boolean): SmithingTrimRecipe;
}

/** JVM class org.bukkit.inventory.SmokingRecipe. */
export interface SmokingRecipeMembers {
  readonly __javaSupertypes?: readonly [CookingRecipe<SmokingRecipe>];
  getCategory(): j_org_bukkit_inventory_recipe.CookingBookCategory;
  getCookingTime(): number;
  getExperience(): number;
  getGroup(): string;
  getInput(): ItemStack;
  getInputChoice(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  setCategory(arg0: j_org_bukkit_inventory_recipe.CookingBookCategory): void;
  setCookingTime(arg0: number): void;
  setExperience(arg0: number): void;
  setGroup(arg0: string): void;
  setInput(arg0: j_org_bukkit.Material): CookingRecipe;
  setInputChoice(arg0: RecipeChoice): SmokingRecipe;
}
export type SmokingRecipe = SmokingRecipeMembers;
export interface SmokingRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: j_org_bukkit.Material, arg3: number, arg4: number): SmokingRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice, arg3: number, arg4: number): SmokingRecipe;
}

/** JVM interface org.bukkit.inventory.StonecutterInventory. */
export interface StonecutterInventoryMembers {
  readonly __javaSupertypes?: readonly [Inventory];
  getInputItem(): ItemStack | null;
  getResult(): ItemStack | null;
  setInputItem(arg0: ItemStack | null): void;
  setResult(arg0: ItemStack | null): void;
}
export type StonecutterInventory = StonecutterInventoryMembers & Inventory;
export interface StonecutterInventoryStatics {
}

/** JVM class org.bukkit.inventory.StonecuttingRecipe. */
export interface StonecuttingRecipeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, Recipe];
  getGroup(): string;
  getInput(): ItemStack;
  getInputChoice(): RecipeChoice;
  getKey(): j_org_bukkit.NamespacedKey;
  getResult(): ItemStack;
  setGroup(arg0: string): void;
  setInput(arg0: j_org_bukkit.Material): StonecuttingRecipe;
  setInputChoice(arg0: RecipeChoice): StonecuttingRecipe;
}
export type StonecuttingRecipe = StonecuttingRecipeMembers & j_org_bukkit.Keyed & Recipe;
export interface StonecuttingRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: j_org_bukkit.Material): StonecuttingRecipe;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: ItemStack, arg2: RecipeChoice): StonecuttingRecipe;
}

/** JVM class org.bukkit.inventory.TransmuteRecipe. */
export interface TransmuteRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe, ComplexRecipe];
  getInput(): RecipeChoice;
  getMaterial(): RecipeChoice;
}
export type TransmuteRecipe = TransmuteRecipeMembers & CraftingRecipe & ComplexRecipe;
export interface TransmuteRecipeStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: j_org_bukkit.Material, arg2: RecipeChoice, arg3: RecipeChoice): TransmuteRecipe;
}
