// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM interface net.minecraft.data.recipes.RecipeBuilder. */
export interface RecipeBuilderMembers {
  getResult(): j_net_minecraft_world_item.Item;
  group(arg0: string | null): RecipeBuilder;
  save(arg0: RecipeOutput): void;
  save(arg0: RecipeOutput, arg1: string): void;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlockedBy(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): RecipeBuilder;
}
export type RecipeBuilder = RecipeBuilderMembers;
export interface RecipeBuilderStatics {
  readonly ROOT_RECIPE_ADVANCEMENT: j_net_minecraft_resources.ResourceLocation;
  determineBookCategory(arg0: RecipeCategory): j_net_minecraft_world_item_crafting.CraftingBookCategory;
  getDefaultRecipeId(arg0: j_net_minecraft_world_level.ItemLike): j_net_minecraft_resources.ResourceLocation;
}

/** Live JVM enum net.minecraft.data.recipes.RecipeCategory; constants are host handles, not strings. */
export type RecipeCategory = JavaEnum<"net.minecraft.data.recipes.RecipeCategory", "BREWING" | "BUILDING_BLOCKS" | "COMBAT" | "DECORATIONS" | "FOOD" | "MISC" | "REDSTONE" | "TOOLS" | "TRANSPORTATION"> & RecipeCategoryMembers;
export interface RecipeCategoryMembers {
  getFolderName(): string;
}
export interface RecipeCategoryStatics {
  readonly BREWING: RecipeCategory;
  readonly BUILDING_BLOCKS: RecipeCategory;
  readonly COMBAT: RecipeCategory;
  readonly DECORATIONS: RecipeCategory;
  readonly FOOD: RecipeCategory;
  readonly MISC: RecipeCategory;
  readonly REDSTONE: RecipeCategory;
  readonly TOOLS: RecipeCategory;
  readonly TRANSPORTATION: RecipeCategory;
  valueOf(arg0: string): RecipeCategory;
  values(): Array<RecipeCategory>;
}

/** JVM interface net.minecraft.data.recipes.RecipeOutput. */
export interface RecipeOutputMembers {
  accept(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>, arg1: j_net_minecraft_world_item_crafting.Recipe<object>, arg2: j_net_minecraft_advancements.AdvancementHolder | null): void;
  advancement(): j_net_minecraft_advancements.Advancement_Builder;
  includeRootAdvancement(): void;
}
export type RecipeOutput = RecipeOutputMembers;
export interface RecipeOutputStatics {
}

/** JVM abstract net.minecraft.data.recipes.RecipeProvider. */
export interface RecipeProviderMembers {
}
export type RecipeProvider = RecipeProviderMembers;
export interface RecipeProviderStatics {
}

/** JVM abstract net.minecraft.data.recipes.RecipeProvider$Runner. */
export interface RecipeProvider_RunnerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type RecipeProvider_Runner = RecipeProvider_RunnerMembers & j_net_minecraft_data.DataProvider;
export interface RecipeProvider_RunnerStatics {
}

/** JVM class net.minecraft.data.recipes.ShapedRecipeBuilder. */
export interface ShapedRecipeBuilderMembers {
  readonly __javaSupertypes?: readonly [RecipeBuilder];
  define(arg0: string, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): ShapedRecipeBuilder;
  define(arg0: string, arg1: j_net_minecraft_world_item_crafting.Ingredient): ShapedRecipeBuilder;
  define(arg0: string, arg1: j_net_minecraft_world_level.ItemLike): ShapedRecipeBuilder;
  getResult(): j_net_minecraft_world_item.Item;
  group(arg0: string | null): ShapedRecipeBuilder;
  pattern(arg0: string): ShapedRecipeBuilder;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  showNotification(arg0: boolean): ShapedRecipeBuilder;
  unlockedBy(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): ShapedRecipeBuilder;
}
export type ShapedRecipeBuilder = ShapedRecipeBuilderMembers & RecipeBuilder;
export interface ShapedRecipeBuilderStatics {
  shaped(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike): ShapedRecipeBuilder;
  shaped(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number): ShapedRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.ShapelessRecipeBuilder. */
export interface ShapelessRecipeBuilderMembers {
  readonly __javaSupertypes?: readonly [RecipeBuilder];
  getResult(): j_net_minecraft_world_item.Item;
  group(arg0: string | null): ShapelessRecipeBuilder;
  requires(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): ShapelessRecipeBuilder;
  requires(arg0: j_net_minecraft_world_item_crafting.Ingredient): ShapelessRecipeBuilder;
  requires(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: number): ShapelessRecipeBuilder;
  requires(arg0: j_net_minecraft_world_level.ItemLike): ShapelessRecipeBuilder;
  requires(arg0: j_net_minecraft_world_level.ItemLike, arg1: number): ShapelessRecipeBuilder;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlockedBy(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): ShapelessRecipeBuilder;
}
export type ShapelessRecipeBuilder = ShapelessRecipeBuilderMembers & RecipeBuilder;
export interface ShapelessRecipeBuilderStatics {
  shapeless(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: RecipeCategory, arg2: j_net_minecraft_world_item.ItemStack): ShapelessRecipeBuilder;
  shapeless(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike): ShapelessRecipeBuilder;
  shapeless(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_item.Item>, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number): ShapelessRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.SimpleCookingRecipeBuilder. */
export interface SimpleCookingRecipeBuilderMembers {
  readonly __javaSupertypes?: readonly [RecipeBuilder];
  getResult(): j_net_minecraft_world_item.Item;
  group(arg0: string | null): SimpleCookingRecipeBuilder;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlockedBy(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): SimpleCookingRecipeBuilder;
}
export type SimpleCookingRecipeBuilder = SimpleCookingRecipeBuilderMembers & RecipeBuilder;
export interface SimpleCookingRecipeBuilderStatics {
  blasting(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number, arg4: number): SimpleCookingRecipeBuilder;
  campfireCooking(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number, arg4: number): SimpleCookingRecipeBuilder;
  generic<T /* extends j_net_minecraft_world_item_crafting.AbstractCookingRecipe */>(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number, arg4: number, arg5: j_net_minecraft_world_item_crafting.RecipeSerializer<T>, arg6: j_net_minecraft_world_item_crafting.AbstractCookingRecipe_Factory<T>): SimpleCookingRecipeBuilder;
  smelting(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number, arg4: number): SimpleCookingRecipeBuilder;
  smoking(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number, arg4: number): SimpleCookingRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.SingleItemRecipeBuilder. */
export interface SingleItemRecipeBuilderMembers {
  readonly __javaSupertypes?: readonly [RecipeBuilder];
  getResult(): j_net_minecraft_world_item.Item;
  group(arg0: string | null): SingleItemRecipeBuilder;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlockedBy(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): SingleItemRecipeBuilder;
}
export type SingleItemRecipeBuilder = SingleItemRecipeBuilderMembers & RecipeBuilder;
export interface SingleItemRecipeBuilderStatics {
  new(arg0: RecipeCategory, arg1: j_net_minecraft_world_item_crafting.SingleItemRecipe_Factory<object>, arg2: j_net_minecraft_world_item_crafting.Ingredient, arg3: j_net_minecraft_world_level.ItemLike, arg4: number): SingleItemRecipeBuilder;
  stonecutting(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike): SingleItemRecipeBuilder;
  stonecutting(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: RecipeCategory, arg2: j_net_minecraft_world_level.ItemLike, arg3: number): SingleItemRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.SmithingTransformRecipeBuilder. */
export interface SmithingTransformRecipeBuilderMembers {
  save(arg0: RecipeOutput, arg1: string): void;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlocks(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): SmithingTransformRecipeBuilder;
}
export type SmithingTransformRecipeBuilder = SmithingTransformRecipeBuilderMembers;
export interface SmithingTransformRecipeBuilderStatics {
  new(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: j_net_minecraft_world_item_crafting.Ingredient, arg2: j_net_minecraft_world_item_crafting.Ingredient, arg3: RecipeCategory, arg4: j_net_minecraft_world_item.Item): SmithingTransformRecipeBuilder;
  smithing(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: j_net_minecraft_world_item_crafting.Ingredient, arg2: j_net_minecraft_world_item_crafting.Ingredient, arg3: RecipeCategory, arg4: j_net_minecraft_world_item.Item): SmithingTransformRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.SmithingTrimRecipeBuilder. */
export interface SmithingTrimRecipeBuilderMembers {
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlocks(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): SmithingTrimRecipeBuilder;
}
export type SmithingTrimRecipeBuilder = SmithingTrimRecipeBuilderMembers;
export interface SmithingTrimRecipeBuilderStatics {
  new(arg0: RecipeCategory, arg1: j_net_minecraft_world_item_crafting.Ingredient, arg2: j_net_minecraft_world_item_crafting.Ingredient, arg3: j_net_minecraft_world_item_crafting.Ingredient, arg4: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>): SmithingTrimRecipeBuilder;
  smithingTrim(arg0: j_net_minecraft_world_item_crafting.Ingredient, arg1: j_net_minecraft_world_item_crafting.Ingredient, arg2: j_net_minecraft_world_item_crafting.Ingredient, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>, arg4: RecipeCategory): SmithingTrimRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.SpecialRecipeBuilder. */
export interface SpecialRecipeBuilderMembers {
  save(arg0: RecipeOutput, arg1: string): void;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
}
export type SpecialRecipeBuilder = SpecialRecipeBuilderMembers;
export interface SpecialRecipeBuilderStatics {
  new(arg0: JavaFunction<j_net_minecraft_world_item_crafting.CraftingBookCategory, j_net_minecraft_world_item_crafting.Recipe<object>>): SpecialRecipeBuilder;
  special(arg0: JavaFunction<j_net_minecraft_world_item_crafting.CraftingBookCategory, j_net_minecraft_world_item_crafting.Recipe<object>>): SpecialRecipeBuilder;
}

/** JVM class net.minecraft.data.recipes.TransmuteRecipeBuilder. */
export interface TransmuteRecipeBuilderMembers {
  readonly __javaSupertypes?: readonly [RecipeBuilder];
  getResult(): j_net_minecraft_world_item.Item;
  group(arg0: string | null): TransmuteRecipeBuilder;
  save(arg0: RecipeOutput, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): void;
  unlockedBy(arg0: string, arg1: j_net_minecraft_advancements.Criterion<object>): TransmuteRecipeBuilder;
}
export type TransmuteRecipeBuilder = TransmuteRecipeBuilderMembers & RecipeBuilder;
export interface TransmuteRecipeBuilderStatics {
  transmute(arg0: RecipeCategory, arg1: j_net_minecraft_world_item_crafting.Ingredient, arg2: j_net_minecraft_world_item_crafting.Ingredient, arg3: j_net_minecraft_world_item.Item): TransmuteRecipeBuilder;
}
