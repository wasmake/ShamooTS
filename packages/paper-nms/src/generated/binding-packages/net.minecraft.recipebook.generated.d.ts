// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';

/** JVM interface net.minecraft.recipebook.PlaceRecipeHelper. */
export interface PlaceRecipeHelperMembers {
}
export type PlaceRecipeHelper = PlaceRecipeHelperMembers;
export interface PlaceRecipeHelperStatics {
  placeRecipe<T>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Iterable<T>, arg5: PlaceRecipeHelper_Output<T>): void;
  placeRecipe<T>(arg0: number, arg1: number, arg2: j_net_minecraft_world_item_crafting.Recipe<object>, arg3: Iterable<T>, arg4: PlaceRecipeHelper_Output<T>): void;
}

/** JVM interface net.minecraft.recipebook.PlaceRecipeHelper$Output. */
export interface PlaceRecipeHelper_OutputMembers<T = unknown> {
  addItemToSlot(arg0: T, arg1: number, arg2: number, arg3: number): void;
}
export type PlaceRecipeHelper_Output<T = unknown> = PlaceRecipeHelper_OutputMembers<T>;
export interface PlaceRecipeHelper_OutputStatics {
}

/** JVM class net.minecraft.recipebook.ServerPlaceRecipe. */
export interface ServerPlaceRecipeMembers<R /* extends j_net_minecraft_world_item_crafting.Recipe<object> */ = unknown> {
}
export type ServerPlaceRecipe<R /* extends j_net_minecraft_world_item_crafting.Recipe<object> */ = unknown> = ServerPlaceRecipeMembers<R>;
export interface ServerPlaceRecipeStatics {
  placeRecipe<I /* extends j_net_minecraft_world_item_crafting.RecipeInput */, R /* extends j_net_minecraft_world_item_crafting.Recipe<I> */>(arg0: ServerPlaceRecipe_CraftingMenuAccess<R>, arg1: number, arg2: number, arg3: JavaList<j_net_minecraft_world_inventory.Slot>, arg4: JavaList<j_net_minecraft_world_inventory.Slot>, arg5: j_net_minecraft_world_entity_player.Inventory, arg6: j_net_minecraft_world_item_crafting.RecipeHolder<R>, arg7: boolean, arg8: boolean): j_net_minecraft_world_inventory.RecipeBookMenu_PostPlaceAction;
}

/** JVM interface net.minecraft.recipebook.ServerPlaceRecipe$CraftingMenuAccess. */
export interface ServerPlaceRecipe_CraftingMenuAccessMembers<T /* extends j_net_minecraft_world_item_crafting.Recipe<object> */ = unknown> {
  clearCraftingContent(): void;
  fillCraftSlotsStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  recipeMatches(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<T>): boolean;
}
export type ServerPlaceRecipe_CraftingMenuAccess<T /* extends j_net_minecraft_world_item_crafting.Recipe<object> */ = unknown> = ServerPlaceRecipe_CraftingMenuAccessMembers<T>;
export interface ServerPlaceRecipe_CraftingMenuAccessStatics {
}
