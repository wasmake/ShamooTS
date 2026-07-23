// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_data_recipes from './net.minecraft.data.recipes.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';

/** JVM class net.minecraft.data.recipes.packs.VanillaRecipeProvider. */
export interface VanillaRecipeProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_recipes.RecipeProvider];
  buildRecipes(): void;
}
export type VanillaRecipeProvider = VanillaRecipeProviderMembers & j_net_minecraft_data_recipes.RecipeProvider;
export interface VanillaRecipeProviderStatics {
  smithingTrims(): JavaOpaque<"java.util.stream.Stream", [VanillaRecipeProvider_TrimTemplate]>;
}

/** JVM class net.minecraft.data.recipes.packs.VanillaRecipeProvider$Runner. */
export interface VanillaRecipeProvider_RunnerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_recipes.RecipeProvider_Runner];
  createRecipeProvider(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_data_recipes.RecipeOutput): j_net_minecraft_data_recipes.RecipeProvider;
  getName(): string;
}
export type VanillaRecipeProvider_Runner = VanillaRecipeProvider_RunnerMembers & j_net_minecraft_data_recipes.RecipeProvider_Runner;
export interface VanillaRecipeProvider_RunnerStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): VanillaRecipeProvider_Runner;
}

/** JVM record net.minecraft.data.recipes.packs.VanillaRecipeProvider$TrimTemplate. */
export interface VanillaRecipeProvider_TrimTemplateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  patternId(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment_trim.TrimPattern>;
  recipeId(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>;
  template(): j_net_minecraft_world_item.Item;
  toString(): string;
}
export type VanillaRecipeProvider_TrimTemplate = VanillaRecipeProvider_TrimTemplateMembers & JavaOpaque<"java.lang.Record">;
export interface VanillaRecipeProvider_TrimTemplateStatics {
  new(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment_trim.TrimPattern>, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): VanillaRecipeProvider_TrimTemplate;
}
