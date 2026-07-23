// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_profiling from './net.minecraft.util.profiling.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting_display from './net.minecraft.world.item.crafting.display.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM abstract net.minecraft.world.item.crafting.AbstractCookingRecipe. */
export interface AbstractCookingRecipeMembers {
  readonly __javaSupertypes?: readonly [SingleItemRecipe];
  category(): CookingBookCategory;
  cookingTime(): number;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  experience(): number;
  furnaceIcon(): j_net_minecraft_world_item.Item;
  getSerializer(): RecipeSerializer<AbstractCookingRecipe>;
  getType(): RecipeType<AbstractCookingRecipe>;
}
export type AbstractCookingRecipe = AbstractCookingRecipeMembers & SingleItemRecipe;
export interface AbstractCookingRecipeStatics {
  new(arg0: string, arg1: CookingBookCategory, arg2: Ingredient, arg3: j_net_minecraft_world_item.ItemStack, arg4: number, arg5: number): AbstractCookingRecipe;
}

/** JVM interface net.minecraft.world.item.crafting.AbstractCookingRecipe$Factory. */
export interface AbstractCookingRecipe_FactoryMembers<T /* extends AbstractCookingRecipe */ = unknown> {
  create(arg0: string, arg1: CookingBookCategory, arg2: Ingredient, arg3: j_net_minecraft_world_item.ItemStack, arg4: number, arg5: number): T;
}
export type AbstractCookingRecipe_Factory<T /* extends AbstractCookingRecipe */ = unknown> = AbstractCookingRecipe_FactoryMembers<T>;
export interface AbstractCookingRecipe_FactoryStatics {
}

/** JVM class net.minecraft.world.item.crafting.AbstractCookingRecipe$Serializer. */
export interface AbstractCookingRecipe_SerializerMembers<T /* extends AbstractCookingRecipe */ = unknown> {
  readonly __javaSupertypes?: readonly [RecipeSerializer<T>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type AbstractCookingRecipe_Serializer<T /* extends AbstractCookingRecipe */ = unknown> = AbstractCookingRecipe_SerializerMembers<T> & RecipeSerializer<T>;
export interface AbstractCookingRecipe_SerializerStatics {
  new<T /* extends AbstractCookingRecipe */>(arg0: AbstractCookingRecipe_Factory<T>, arg1: number): AbstractCookingRecipe_Serializer<T>;
}

/** JVM class net.minecraft.world.item.crafting.ArmorDyeRecipe. */
export interface ArmorDyeRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<ArmorDyeRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type ArmorDyeRecipe = ArmorDyeRecipeMembers & CustomRecipe;
export interface ArmorDyeRecipeStatics {
  new(arg0: CraftingBookCategory): ArmorDyeRecipe;
}

/** JVM class net.minecraft.world.item.crafting.BannerDuplicateRecipe. */
export interface BannerDuplicateRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getRemainingItems(arg0: CraftingInput): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getSerializer(): RecipeSerializer<BannerDuplicateRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type BannerDuplicateRecipe = BannerDuplicateRecipeMembers & CustomRecipe;
export interface BannerDuplicateRecipeStatics {
  new(arg0: CraftingBookCategory): BannerDuplicateRecipe;
}

/** JVM class net.minecraft.world.item.crafting.BlastingRecipe. */
export interface BlastingRecipeMembers {
  readonly __javaSupertypes?: readonly [AbstractCookingRecipe];
  furnaceIcon(): j_net_minecraft_world_item.Item;
  getSerializer(): RecipeSerializer<BlastingRecipe>;
  getType(): RecipeType<BlastingRecipe>;
  recipeBookCategory(): RecipeBookCategory;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type BlastingRecipe = BlastingRecipeMembers & AbstractCookingRecipe;
export interface BlastingRecipeStatics {
  new(arg0: string, arg1: CookingBookCategory, arg2: Ingredient, arg3: j_net_minecraft_world_item.ItemStack, arg4: number, arg5: number): BlastingRecipe;
}

/** JVM class net.minecraft.world.item.crafting.BookCloningRecipe. */
export interface BookCloningRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getRemainingItems(arg0: CraftingInput): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getSerializer(): RecipeSerializer<BookCloningRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type BookCloningRecipe = BookCloningRecipeMembers & CustomRecipe;
export interface BookCloningRecipeStatics {
  new(arg0: CraftingBookCategory): BookCloningRecipe;
}

/** JVM class net.minecraft.world.item.crafting.CampfireCookingRecipe. */
export interface CampfireCookingRecipeMembers {
  readonly __javaSupertypes?: readonly [AbstractCookingRecipe];
  furnaceIcon(): j_net_minecraft_world_item.Item;
  getSerializer(): RecipeSerializer<CampfireCookingRecipe>;
  getType(): RecipeType<CampfireCookingRecipe>;
  recipeBookCategory(): RecipeBookCategory;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type CampfireCookingRecipe = CampfireCookingRecipeMembers & AbstractCookingRecipe;
export interface CampfireCookingRecipeStatics {
  new(arg0: string, arg1: CookingBookCategory, arg2: Ingredient, arg3: j_net_minecraft_world_item.ItemStack, arg4: number, arg5: number): CampfireCookingRecipe;
}

/** Live JVM enum net.minecraft.world.item.crafting.CookingBookCategory; constants are host handles, not strings. */
export type CookingBookCategory = JavaEnum<"net.minecraft.world.item.crafting.CookingBookCategory", "BLOCKS" | "FOOD" | "MISC"> & CookingBookCategoryMembers;
export interface CookingBookCategoryMembers {
  getSerializedName(): string;
}
export interface CookingBookCategoryStatics {
  readonly BLOCKS: CookingBookCategory;
  readonly FOOD: CookingBookCategory;
  readonly MISC: CookingBookCategory;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CookingBookCategory]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, CookingBookCategory>;
  valueOf(arg0: string): CookingBookCategory;
  values(): Array<CookingBookCategory>;
}

/** Live JVM enum net.minecraft.world.item.crafting.CraftingBookCategory; constants are host handles, not strings. */
export type CraftingBookCategory = JavaEnum<"net.minecraft.world.item.crafting.CraftingBookCategory", "BUILDING" | "EQUIPMENT" | "MISC" | "REDSTONE"> & CraftingBookCategoryMembers;
export interface CraftingBookCategoryMembers {
  getSerializedName(): string;
}
export interface CraftingBookCategoryStatics {
  readonly BUILDING: CraftingBookCategory;
  readonly EQUIPMENT: CraftingBookCategory;
  readonly MISC: CraftingBookCategory;
  readonly REDSTONE: CraftingBookCategory;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [CraftingBookCategory]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CraftingBookCategory]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, CraftingBookCategory>;
  valueOf(arg0: string): CraftingBookCategory;
  values(): Array<CraftingBookCategory>;
}

/** JVM class net.minecraft.world.item.crafting.CraftingInput. */
export interface CraftingInputMembers {
  readonly __javaSupertypes?: readonly [RecipeInput];
  equals(arg0: object): boolean;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  hashCode(): number;
  height(): number;
  ingredientCount(): number;
  isEmpty(): boolean;
  items(): JavaList<j_net_minecraft_world_item.ItemStack>;
  size(): number;
  stackedContents(): j_net_minecraft_world_entity_player.StackedItemContents;
  width(): number;
}
export type CraftingInput = CraftingInputMembers & RecipeInput;
export interface CraftingInputStatics {
  readonly EMPTY: CraftingInput;
  of(arg0: number, arg1: number, arg2: JavaList<j_net_minecraft_world_item.ItemStack>): CraftingInput;
  ofPositioned(arg0: number, arg1: number, arg2: JavaList<j_net_minecraft_world_item.ItemStack>): CraftingInput_Positioned;
}

/** JVM record net.minecraft.world.item.crafting.CraftingInput$Positioned. */
export interface CraftingInput_PositionedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): CraftingInput;
  left(): number;
  toString(): string;
  top(): number;
}
export type CraftingInput_Positioned = CraftingInput_PositionedMembers & JavaOpaque<"java.lang.Record">;
export interface CraftingInput_PositionedStatics {
  new(arg0: CraftingInput, arg1: number, arg2: number): CraftingInput_Positioned;
  readonly EMPTY: CraftingInput_Positioned;
}

/** JVM interface net.minecraft.world.item.crafting.CraftingRecipe. */
export interface CraftingRecipeMembers {
  readonly __javaSupertypes?: readonly [Recipe<CraftingInput>];
  category(): CraftingBookCategory;
  getRemainingItems(arg0: CraftingInput): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getSerializer(): RecipeSerializer<CraftingRecipe>;
  getType(): RecipeType<CraftingRecipe>;
  recipeBookCategory(): RecipeBookCategory;
}
export type CraftingRecipe = CraftingRecipeMembers & Recipe<CraftingInput>;
export interface CraftingRecipeStatics {
  defaultCraftingReminder(arg0: CraftingInput): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
}

/** JVM abstract net.minecraft.world.item.crafting.CustomRecipe. */
export interface CustomRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe];
  category(): CraftingBookCategory;
  getSerializer(): RecipeSerializer<CustomRecipe>;
  isSpecial(): boolean;
  placementInfo(): PlacementInfo;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type CustomRecipe = CustomRecipeMembers & CraftingRecipe;
export interface CustomRecipeStatics {
  new(arg0: CraftingBookCategory): CustomRecipe;
}

/** JVM class net.minecraft.world.item.crafting.CustomRecipe$Serializer. */
export interface CustomRecipe_SerializerMembers<T /* extends CraftingRecipe */ = unknown> {
  readonly __javaSupertypes?: readonly [RecipeSerializer<T>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type CustomRecipe_Serializer<T /* extends CraftingRecipe */ = unknown> = CustomRecipe_SerializerMembers<T> & RecipeSerializer<T>;
export interface CustomRecipe_SerializerStatics {
  new<T /* extends CraftingRecipe */>(arg0: CustomRecipe_Serializer_Factory<T>): CustomRecipe_Serializer<T>;
}

/** JVM interface net.minecraft.world.item.crafting.CustomRecipe$Serializer$Factory. */
export interface CustomRecipe_Serializer_FactoryMembers<T /* extends CraftingRecipe */ = unknown> {
  create(arg0: CraftingBookCategory): T;
}
export type CustomRecipe_Serializer_Factory<T /* extends CraftingRecipe */ = unknown> = CustomRecipe_Serializer_FactoryMembers<T>;
export interface CustomRecipe_Serializer_FactoryStatics {
}

/** JVM class net.minecraft.world.item.crafting.DecoratedPotRecipe. */
export interface DecoratedPotRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<DecoratedPotRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type DecoratedPotRecipe = DecoratedPotRecipeMembers & CustomRecipe;
export interface DecoratedPotRecipeStatics {
  new(arg0: CraftingBookCategory): DecoratedPotRecipe;
}

/** JVM interface net.minecraft.world.item.crafting.ExtendedRecipeBookCategory. */
export interface ExtendedRecipeBookCategoryMembers {
}
export type ExtendedRecipeBookCategory = ExtendedRecipeBookCategoryMembers;
export interface ExtendedRecipeBookCategoryStatics {
}

/** JVM class net.minecraft.world.item.crafting.FireworkRocketRecipe. */
export interface FireworkRocketRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<FireworkRocketRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type FireworkRocketRecipe = FireworkRocketRecipeMembers & CustomRecipe;
export interface FireworkRocketRecipeStatics {
  new(arg0: CraftingBookCategory): FireworkRocketRecipe;
}

/** JVM class net.minecraft.world.item.crafting.FireworkStarFadeRecipe. */
export interface FireworkStarFadeRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<FireworkStarFadeRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type FireworkStarFadeRecipe = FireworkStarFadeRecipeMembers & CustomRecipe;
export interface FireworkStarFadeRecipeStatics {
  new(arg0: CraftingBookCategory): FireworkStarFadeRecipe;
}

/** JVM class net.minecraft.world.item.crafting.FireworkStarRecipe. */
export interface FireworkStarRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<FireworkStarRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type FireworkStarRecipe = FireworkStarRecipeMembers & CustomRecipe;
export interface FireworkStarRecipeStatics {
  new(arg0: CraftingBookCategory): FireworkStarRecipe;
}

/** JVM class net.minecraft.world.item.crafting.Ingredient. */
export interface IngredientMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_player.StackedContents_IngredientInfo<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">>, JavaPredicate<j_net_minecraft_world_item.ItemStack>];
  acceptsItem(arg0: JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">): boolean;
  acceptsItem(arg0: object): boolean;
  display(): j_net_minecraft_world_item_crafting_display.SlotDisplay;
  equals(arg0: object): boolean;
  isEmpty(): boolean;
  isExact(): boolean;
  itemStacks(): JavaSet<j_net_minecraft_world_item.ItemStack> | null;
  items(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>]>;
  test(arg0: object): boolean;
  test(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type Ingredient = IngredientMembers & j_net_minecraft_world_entity_player.StackedContents_IngredientInfo<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">> & JavaPredicate<j_net_minecraft_world_item.ItemStack>;
export interface IngredientStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Ingredient]>;
  readonly CONTENTS_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Ingredient>;
  readonly NON_AIR_HOLDER_SET_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>]>;
  readonly OPTIONAL_CONTENTS_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaOptional<Ingredient>>;
  of(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_level.ItemLike]>): Ingredient;
  of(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_item.Item>): Ingredient;
  of(arg0: j_net_minecraft_world_level.ItemLike): Ingredient;
  of(...arg0: Array<j_net_minecraft_world_level.ItemLike>): Ingredient;
  ofStacks(arg0: JavaList<j_net_minecraft_world_item.ItemStack>): Ingredient;
  optionalIngredientToDisplay(arg0: JavaOptional<Ingredient>): j_net_minecraft_world_item_crafting_display.SlotDisplay;
  testOptionalIngredient(arg0: JavaOptional<Ingredient>, arg1: j_net_minecraft_world_item.ItemStack): boolean;
}

/** JVM class net.minecraft.world.item.crafting.MapCloningRecipe. */
export interface MapCloningRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<MapCloningRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type MapCloningRecipe = MapCloningRecipeMembers & CustomRecipe;
export interface MapCloningRecipeStatics {
  new(arg0: CraftingBookCategory): MapCloningRecipe;
}

/** JVM class net.minecraft.world.item.crafting.MapExtendingRecipe. */
export interface MapExtendingRecipeMembers {
  readonly __javaSupertypes?: readonly [ShapedRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<MapExtendingRecipe>;
  isSpecial(): boolean;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type MapExtendingRecipe = MapExtendingRecipeMembers & ShapedRecipe;
export interface MapExtendingRecipeStatics {
  new(arg0: CraftingBookCategory): MapExtendingRecipe;
}

/** JVM class net.minecraft.world.item.crafting.PlacementInfo. */
export interface PlacementInfoMembers {
  ingredients(): JavaList<Ingredient>;
  isImpossibleToPlace(): boolean;
  slotsToIngredientIndex(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
}
export type PlacementInfo = PlacementInfoMembers;
export interface PlacementInfoStatics {
  readonly EMPTY_SLOT: -1;
  readonly NOT_PLACEABLE: PlacementInfo;
  create(arg0: JavaList<Ingredient>): PlacementInfo;
  create(arg0: Ingredient): PlacementInfo;
  createFromOptionals(arg0: JavaList<JavaOptional<Ingredient>>): PlacementInfo;
}

/** JVM interface net.minecraft.world.item.crafting.Recipe. */
export interface RecipeMembers<T /* extends RecipeInput */ = unknown> {
  assemble(arg0: T, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getSerializer(): RecipeSerializer<Recipe<T>>;
  getType(): RecipeType<Recipe<T>>;
  group(): string;
  isSpecial(): boolean;
  matches(arg0: T, arg1: j_net_minecraft_world_level.Level): boolean;
  placementInfo(): PlacementInfo;
  recipeBookCategory(): RecipeBookCategory;
  showNotification(): boolean;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type Recipe<T /* extends RecipeInput */ = unknown> = RecipeMembers<T>;
export interface RecipeStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Recipe<object>]>;
  readonly KEY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_resources.ResourceKey<Recipe<object>>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Recipe<object>>;
}

/** JVM interface net.minecraft.world.item.crafting.RecipeAccess. */
export interface RecipeAccessMembers {
  propertySet(arg0: j_net_minecraft_resources.ResourceKey<RecipePropertySet>): RecipePropertySet;
  stonecutterRecipes(): SelectableRecipe_SingleInputSet<StonecutterRecipe>;
}
export type RecipeAccess = RecipeAccessMembers;
export interface RecipeAccessStatics {
}

/** JVM class net.minecraft.world.item.crafting.RecipeBookCategories. */
export interface RecipeBookCategoriesMembers {
}
export type RecipeBookCategories = RecipeBookCategoriesMembers;
export interface RecipeBookCategoriesStatics {
  new(): RecipeBookCategories;
  readonly BLAST_FURNACE_BLOCKS: RecipeBookCategory;
  readonly BLAST_FURNACE_MISC: RecipeBookCategory;
  readonly CAMPFIRE: RecipeBookCategory;
  readonly CRAFTING_BUILDING_BLOCKS: RecipeBookCategory;
  readonly CRAFTING_EQUIPMENT: RecipeBookCategory;
  readonly CRAFTING_MISC: RecipeBookCategory;
  readonly CRAFTING_REDSTONE: RecipeBookCategory;
  readonly FURNACE_BLOCKS: RecipeBookCategory;
  readonly FURNACE_FOOD: RecipeBookCategory;
  readonly FURNACE_MISC: RecipeBookCategory;
  readonly SMITHING: RecipeBookCategory;
  readonly SMOKER_FOOD: RecipeBookCategory;
  readonly STONECUTTER: RecipeBookCategory;
  bootstrap(arg0: j_net_minecraft_core.Registry<RecipeBookCategory>): RecipeBookCategory;
}

/** JVM class net.minecraft.world.item.crafting.RecipeBookCategory. */
export interface RecipeBookCategoryMembers {
  readonly __javaSupertypes?: readonly [ExtendedRecipeBookCategory];
}
export type RecipeBookCategory = RecipeBookCategoryMembers & ExtendedRecipeBookCategory;
export interface RecipeBookCategoryStatics {
  new(): RecipeBookCategory;
}

/** JVM class net.minecraft.world.item.crafting.RecipeCache. */
export interface RecipeCacheMembers {
  get(arg0: j_net_minecraft_server_level.ServerLevel, arg1: CraftingInput): JavaOptional<RecipeHolder<CraftingRecipe>>;
}
export type RecipeCache = RecipeCacheMembers;
export interface RecipeCacheStatics {
  new(arg0: number): RecipeCache;
}

/** JVM record net.minecraft.world.item.crafting.RecipeHolder. */
export interface RecipeHolderMembers<T /* extends Recipe<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceKey<Recipe<object>>;
  toBukkitRecipe(): JavaOpaque<"org.bukkit.inventory.Recipe">;
  toString(): string;
  value(): T;
}
export type RecipeHolder<T /* extends Recipe<object> */ = unknown> = RecipeHolderMembers<T> & JavaOpaque<"java.lang.Record">;
export interface RecipeHolderStatics {
  new<T /* extends Recipe<object> */>(arg0: j_net_minecraft_resources.ResourceKey<Recipe<object>>, arg1: T): RecipeHolder<T>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, RecipeHolder<object>>;
}

/** JVM interface net.minecraft.world.item.crafting.RecipeInput. */
export interface RecipeInputMembers {
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  isEmpty(): boolean;
  size(): number;
}
export type RecipeInput = RecipeInputMembers;
export interface RecipeInputStatics {
}

/** JVM class net.minecraft.world.item.crafting.RecipeManager. */
export interface RecipeManagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_packs_resources.SimplePreparableReloadListener<RecipeMap>, RecipeAccess];
  addRecipe(arg0: RecipeHolder<object>): void;
  apply(arg0: object, arg1: j_net_minecraft_server_packs_resources.ResourceManager, arg2: j_net_minecraft_util_profiling.ProfilerFiller): void;
  apply(arg0: RecipeMap, arg1: j_net_minecraft_server_packs_resources.ResourceManager, arg2: j_net_minecraft_util_profiling.ProfilerFiller): void;
  byKey(arg0: j_net_minecraft_resources.ResourceKey<Recipe<object>>): JavaOptional<RecipeHolder<object>>;
  clearRecipes(): void;
  finalizeRecipeLoading(): void;
  finalizeRecipeLoading(arg0: j_net_minecraft_world_flag.FeatureFlagSet): void;
  getRecipeFor<I /* extends RecipeInput */, T /* extends Recipe<I> */>(arg0: RecipeType<T>, arg1: I, arg2: j_net_minecraft_world_level.Level): JavaOptional<RecipeHolder<T>>;
  getRecipeFor<I /* extends RecipeInput */, T /* extends Recipe<I> */>(arg0: RecipeType<T>, arg1: I, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_resources.ResourceKey<Recipe<object>> | null): JavaOptional<RecipeHolder<T>> | null;
  getRecipeFor<I /* extends RecipeInput */, T /* extends Recipe<I> */>(arg0: RecipeType<T>, arg1: I, arg2: j_net_minecraft_world_level.Level, arg3: RecipeHolder<T> | null): JavaOptional<RecipeHolder<T>> | null;
  getRecipeFromDisplay(arg0: j_net_minecraft_world_item_crafting_display.RecipeDisplayId): RecipeManager_ServerDisplayInfo | null;
  getRecipes(): JavaCollection<RecipeHolder<object>>;
  getSynchronizedItemProperties(): JavaMap<j_net_minecraft_resources.ResourceKey<RecipePropertySet>, RecipePropertySet>;
  getSynchronizedStonecutterRecipes(): SelectableRecipe_SingleInputSet<StonecutterRecipe>;
  listDisplaysForRecipe(arg0: j_net_minecraft_resources.ResourceKey<Recipe<object>>, arg1: JavaConsumer<j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry>): void;
  prepare(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_util_profiling.ProfilerFiller): object;
  prepare(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_util_profiling.ProfilerFiller): RecipeMap;
  propertySet(arg0: j_net_minecraft_resources.ResourceKey<RecipePropertySet>): RecipePropertySet;
  recipes: RecipeMap;
  removeRecipe(arg0: j_net_minecraft_resources.ResourceKey<Recipe<object>>): boolean;
  stonecutterRecipes(): SelectableRecipe_SingleInputSet<StonecutterRecipe>;
}
export type RecipeManager = RecipeManagerMembers & j_net_minecraft_server_packs_resources.SimplePreparableReloadListener<RecipeMap> & RecipeAccess;
export interface RecipeManagerStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): RecipeManager;
  createCheck<I /* extends RecipeInput */, T /* extends Recipe<I> */>(arg0: RecipeType<T>): RecipeManager_CachedCheck<I, T>;
  fromJson(arg0: j_net_minecraft_resources.ResourceKey<Recipe<object>>, arg1: JavaOpaque<"com.google.gson.JsonObject">, arg2: j_net_minecraft_core.HolderLookup_Provider): RecipeHolder<object>;
}

/** JVM interface net.minecraft.world.item.crafting.RecipeManager$CachedCheck. */
export interface RecipeManager_CachedCheckMembers<I /* extends RecipeInput */ = unknown, T /* extends Recipe<I> */ = unknown> {
  getRecipeFor(arg0: I, arg1: j_net_minecraft_server_level.ServerLevel): JavaOptional<RecipeHolder<T>>;
}
export type RecipeManager_CachedCheck<I /* extends RecipeInput */ = unknown, T /* extends Recipe<I> */ = unknown> = RecipeManager_CachedCheckMembers<I, T>;
export interface RecipeManager_CachedCheckStatics {
}

/** JVM class net.minecraft.world.item.crafting.RecipeManager$IngredientCollector. */
export interface RecipeManager_IngredientCollectorMembers {
  readonly __javaSupertypes?: readonly [JavaConsumer<Recipe<object>>];
  accept(arg0: object): void;
  accept(arg0: Recipe<object>): void;
  asPropertySet(arg0: j_net_minecraft_world_flag.FeatureFlagSet): RecipePropertySet;
}
export type RecipeManager_IngredientCollector = RecipeManager_IngredientCollectorMembers & JavaConsumer<Recipe<object>>;
export interface RecipeManager_IngredientCollectorStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<RecipePropertySet>, arg1: RecipeManager_IngredientExtractor): RecipeManager_IngredientCollector;
}

/** JVM interface net.minecraft.world.item.crafting.RecipeManager$IngredientExtractor. */
export interface RecipeManager_IngredientExtractorMembers {
  apply(arg0: Recipe<object>): JavaOptional<Ingredient>;
}
export type RecipeManager_IngredientExtractor = RecipeManager_IngredientExtractorMembers;
export interface RecipeManager_IngredientExtractorStatics {
}

/** JVM record net.minecraft.world.item.crafting.RecipeManager$ServerDisplayInfo. */
export interface RecipeManager_ServerDisplayInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  display(): j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry;
  equals(arg0: object): boolean;
  hashCode(): number;
  parent(): RecipeHolder<object>;
  toString(): string;
}
export type RecipeManager_ServerDisplayInfo = RecipeManager_ServerDisplayInfoMembers & JavaOpaque<"java.lang.Record">;
export interface RecipeManager_ServerDisplayInfoStatics {
  new(arg0: j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry, arg1: RecipeHolder<object>): RecipeManager_ServerDisplayInfo;
}

/** JVM class net.minecraft.world.item.crafting.RecipeMap. */
export interface RecipeMapMembers {
  addRecipe(arg0: RecipeHolder<object>): void;
  readonly byKey: (JavaMap<j_net_minecraft_resources.ResourceKey<Recipe<object>>, RecipeHolder<object>>) & { (arg0: j_net_minecraft_resources.ResourceKey<Recipe<object>>): RecipeHolder<object> | null };
  readonly byType: (JavaOpaque<"com.google.common.collect.Multimap", [RecipeType<object>, RecipeHolder<object>]>) & { <I /* extends RecipeInput */, T /* extends Recipe<I> */>(arg0: RecipeType<T>): JavaCollection<RecipeHolder<T>> };
  getRecipesFor<I /* extends RecipeInput */, T /* extends Recipe<I> */>(arg0: RecipeType<T>, arg1: I, arg2: j_net_minecraft_world_level.Level): JavaOpaque<"java.util.stream.Stream", [RecipeHolder<T>]>;
  removeRecipe<T /* extends RecipeInput */>(arg0: j_net_minecraft_resources.ResourceKey<Recipe<T>>): boolean;
  values(): JavaCollection<RecipeHolder<object>>;
}
export type RecipeMap = RecipeMapMembers;
export interface RecipeMapStatics {
  readonly EMPTY: RecipeMap;
  create(arg0: Iterable<RecipeHolder<object>>): RecipeMap;
}

/** JVM class net.minecraft.world.item.crafting.RecipePropertySet. */
export interface RecipePropertySetMembers {
  test(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type RecipePropertySet = RecipePropertySetMembers;
export interface RecipePropertySetStatics {
  readonly BLAST_FURNACE_INPUT: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly CAMPFIRE_INPUT: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly EMPTY: RecipePropertySet;
  readonly FURNACE_INPUT: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly SMITHING_ADDITION: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly SMITHING_BASE: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly SMITHING_TEMPLATE: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly SMOKER_INPUT: j_net_minecraft_resources.ResourceKey<RecipePropertySet>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, RecipePropertySet>;
  readonly TYPE_KEY: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<RecipePropertySet>>;
}

/** JVM interface net.minecraft.world.item.crafting.RecipeSerializer. */
export interface RecipeSerializerMembers<T /* extends Recipe<object> */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type RecipeSerializer<T /* extends Recipe<object> */ = unknown> = RecipeSerializerMembers<T>;
export interface RecipeSerializerStatics {
  readonly ARMOR_DYE: RecipeSerializer<ArmorDyeRecipe>;
  readonly BANNER_DUPLICATE: RecipeSerializer<BannerDuplicateRecipe>;
  readonly BLASTING_RECIPE: RecipeSerializer<BlastingRecipe>;
  readonly BOOK_CLONING: RecipeSerializer<BookCloningRecipe>;
  readonly CAMPFIRE_COOKING_RECIPE: RecipeSerializer<CampfireCookingRecipe>;
  readonly DECORATED_POT_RECIPE: RecipeSerializer<DecoratedPotRecipe>;
  readonly FIREWORK_ROCKET: RecipeSerializer<FireworkRocketRecipe>;
  readonly FIREWORK_STAR: RecipeSerializer<FireworkStarRecipe>;
  readonly FIREWORK_STAR_FADE: RecipeSerializer<FireworkStarFadeRecipe>;
  readonly MAP_CLONING: RecipeSerializer<MapCloningRecipe>;
  readonly MAP_EXTENDING: RecipeSerializer<MapExtendingRecipe>;
  readonly REPAIR_ITEM: RecipeSerializer<RepairItemRecipe>;
  readonly SHAPED_RECIPE: RecipeSerializer<ShapedRecipe>;
  readonly SHAPELESS_RECIPE: RecipeSerializer<ShapelessRecipe>;
  readonly SHIELD_DECORATION: RecipeSerializer<ShieldDecorationRecipe>;
  readonly SMELTING_RECIPE: RecipeSerializer<SmeltingRecipe>;
  readonly SMITHING_TRANSFORM: RecipeSerializer<SmithingTransformRecipe>;
  readonly SMITHING_TRIM: RecipeSerializer<SmithingTrimRecipe>;
  readonly SMOKING_RECIPE: RecipeSerializer<SmokingRecipe>;
  readonly STONECUTTER: RecipeSerializer<StonecutterRecipe>;
  readonly TIPPED_ARROW: RecipeSerializer<TippedArrowRecipe>;
  readonly TRANSMUTE: RecipeSerializer<TransmuteRecipe>;
  register<S /* extends RecipeSerializer<T> */, T /* extends Recipe<object> */>(arg0: string, arg1: S): S;
}

/** JVM interface net.minecraft.world.item.crafting.RecipeType. */
export interface RecipeTypeMembers<T /* extends Recipe<object> */ = unknown> {
}
export type RecipeType<T /* extends Recipe<object> */ = unknown> = RecipeTypeMembers<T>;
export interface RecipeTypeStatics {
  readonly BLASTING: RecipeType<BlastingRecipe>;
  readonly CAMPFIRE_COOKING: RecipeType<CampfireCookingRecipe>;
  readonly CRAFTING: RecipeType<CraftingRecipe>;
  readonly SMELTING: RecipeType<SmeltingRecipe>;
  readonly SMITHING: RecipeType<SmithingRecipe>;
  readonly SMOKING: RecipeType<SmokingRecipe>;
  readonly STONECUTTING: RecipeType<StonecutterRecipe>;
  register<T /* extends Recipe<object> */>(arg0: string): RecipeType<T>;
}

/** JVM class net.minecraft.world.item.crafting.RepairItemRecipe. */
export interface RepairItemRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<RepairItemRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type RepairItemRecipe = RepairItemRecipeMembers & CustomRecipe;
export interface RepairItemRecipeStatics {
  new(arg0: CraftingBookCategory): RepairItemRecipe;
}

/** JVM record net.minecraft.world.item.crafting.SelectableRecipe. */
export interface SelectableRecipeMembers<T /* extends Recipe<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  optionDisplay(): j_net_minecraft_world_item_crafting_display.SlotDisplay;
  recipe(): JavaOptional<RecipeHolder<T>>;
  toString(): string;
}
export type SelectableRecipe<T /* extends Recipe<object> */ = unknown> = SelectableRecipeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SelectableRecipeStatics {
  new<T /* extends Recipe<object> */>(arg0: j_net_minecraft_world_item_crafting_display.SlotDisplay, arg1: JavaOptional<RecipeHolder<T>>): SelectableRecipe<T>;
  noRecipeCodec<T /* extends Recipe<object> */>(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SelectableRecipe<T>>;
}

/** JVM record net.minecraft.world.item.crafting.SelectableRecipe$SingleInputEntry. */
export interface SelectableRecipe_SingleInputEntryMembers<T /* extends Recipe<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): Ingredient;
  recipe(): SelectableRecipe<T>;
  toString(): string;
}
export type SelectableRecipe_SingleInputEntry<T /* extends Recipe<object> */ = unknown> = SelectableRecipe_SingleInputEntryMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SelectableRecipe_SingleInputEntryStatics {
  new<T /* extends Recipe<object> */>(arg0: Ingredient, arg1: SelectableRecipe<T>): SelectableRecipe_SingleInputEntry<T>;
  noRecipeCodec<T /* extends Recipe<object> */>(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SelectableRecipe_SingleInputEntry<T>>;
}

/** JVM record net.minecraft.world.item.crafting.SelectableRecipe$SingleInputSet. */
export interface SelectableRecipe_SingleInputSetMembers<T /* extends Recipe<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  acceptsInput(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  entries(): JavaList<SelectableRecipe_SingleInputEntry<T>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  selectByInput(arg0: j_net_minecraft_world_item.ItemStack): SelectableRecipe_SingleInputSet<T>;
  size(): number;
  toString(): string;
}
export type SelectableRecipe_SingleInputSet<T /* extends Recipe<object> */ = unknown> = SelectableRecipe_SingleInputSetMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SelectableRecipe_SingleInputSetStatics {
  new<T /* extends Recipe<object> */>(arg0: JavaList<SelectableRecipe_SingleInputEntry<T>>): SelectableRecipe_SingleInputSet<T>;
  empty<T /* extends Recipe<object> */>(): SelectableRecipe_SingleInputSet<T>;
  noRecipeCodec<T /* extends Recipe<object> */>(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SelectableRecipe_SingleInputSet<T>>;
}

/** JVM class net.minecraft.world.item.crafting.ShapedRecipe. */
export interface ShapedRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  category(): CraftingBookCategory;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getHeight(): number;
  getIngredients(): JavaList<JavaOptional<Ingredient>>;
  getSerializer(): RecipeSerializer<ShapedRecipe>;
  getWidth(): number;
  group(): string;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  placementInfo(): PlacementInfo;
  showNotification(): boolean;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.ShapedRecipe">;
}
export type ShapedRecipe = ShapedRecipeMembers & CraftingRecipe;
export interface ShapedRecipeStatics {
  new(arg0: string, arg1: CraftingBookCategory, arg2: ShapedRecipePattern, arg3: j_net_minecraft_world_item.ItemStack): ShapedRecipe;
  new(arg0: string, arg1: CraftingBookCategory, arg2: ShapedRecipePattern, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): ShapedRecipe;
}

/** JVM class net.minecraft.world.item.crafting.ShapedRecipe$Serializer. */
export interface ShapedRecipe_SerializerMembers {
  readonly __javaSupertypes?: readonly [RecipeSerializer<ShapedRecipe>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ShapedRecipe]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapedRecipe>;
}
export type ShapedRecipe_Serializer = ShapedRecipe_SerializerMembers & RecipeSerializer<ShapedRecipe>;
export interface ShapedRecipe_SerializerStatics {
  new(): ShapedRecipe_Serializer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShapedRecipe]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapedRecipe>;
}

/** JVM class net.minecraft.world.item.crafting.ShapedRecipePattern. */
export interface ShapedRecipePatternMembers {
  height(): number;
  ingredients(): JavaList<JavaOptional<Ingredient>>;
  matches(arg0: CraftingInput): boolean;
  width(): number;
}
export type ShapedRecipePattern = ShapedRecipePatternMembers;
export interface ShapedRecipePatternStatics {
  new(arg0: number, arg1: number, arg2: JavaList<JavaOptional<Ingredient>>, arg3: JavaOptional<ShapedRecipePattern_Data>): ShapedRecipePattern;
  readonly EMPTY_SLOT: 32;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShapedRecipePattern]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapedRecipePattern>;
  of(arg0: JavaMap<string, Ingredient>, arg1: JavaList<string>): ShapedRecipePattern;
  of(arg0: JavaMap<string, Ingredient>, ...arg1: Array<string>): ShapedRecipePattern;
}

/** JVM record net.minecraft.world.item.crafting.ShapedRecipePattern$Data. */
export interface ShapedRecipePattern_DataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): JavaMap<string, Ingredient>;
  pattern(): JavaList<string>;
  toString(): string;
}
export type ShapedRecipePattern_Data = ShapedRecipePattern_DataMembers & JavaOpaque<"java.lang.Record">;
export interface ShapedRecipePattern_DataStatics {
  new(arg0: JavaMap<string, Ingredient>, arg1: JavaList<string>): ShapedRecipePattern_Data;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShapedRecipePattern_Data]>;
}

/** JVM class net.minecraft.world.item.crafting.ShapelessRecipe. */
export interface ShapelessRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  category(): CraftingBookCategory;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getSerializer(): RecipeSerializer<ShapelessRecipe>;
  group(): string;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  placementInfo(): PlacementInfo;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
}
export type ShapelessRecipe = ShapelessRecipeMembers & CraftingRecipe;
export interface ShapelessRecipeStatics {
  new(arg0: string, arg1: CraftingBookCategory, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaList<Ingredient>): ShapelessRecipe;
}

/** JVM class net.minecraft.world.item.crafting.ShapelessRecipe$Serializer. */
export interface ShapelessRecipe_SerializerMembers {
  readonly __javaSupertypes?: readonly [RecipeSerializer<ShapelessRecipe>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ShapelessRecipe]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapelessRecipe>;
}
export type ShapelessRecipe_Serializer = ShapelessRecipe_SerializerMembers & RecipeSerializer<ShapelessRecipe>;
export interface ShapelessRecipe_SerializerStatics {
  new(): ShapelessRecipe_Serializer;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapelessRecipe>;
}

/** JVM class net.minecraft.world.item.crafting.ShieldDecorationRecipe. */
export interface ShieldDecorationRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<ShieldDecorationRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type ShieldDecorationRecipe = ShieldDecorationRecipeMembers & CustomRecipe;
export interface ShieldDecorationRecipeStatics {
  new(arg0: CraftingBookCategory): ShieldDecorationRecipe;
}

/** JVM abstract net.minecraft.world.item.crafting.SingleItemRecipe. */
export interface SingleItemRecipeMembers {
  readonly __javaSupertypes?: readonly [Recipe<SingleRecipeInput>];
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: SingleRecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<SingleItemRecipe>;
  getType(): RecipeType<SingleItemRecipe>;
  group(): string;
  input(): Ingredient;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: SingleRecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  placementInfo(): PlacementInfo;
  result(): j_net_minecraft_world_item.ItemStack;
}
export type SingleItemRecipe = SingleItemRecipeMembers & Recipe<SingleRecipeInput>;
export interface SingleItemRecipeStatics {
  new(arg0: string, arg1: Ingredient, arg2: j_net_minecraft_world_item.ItemStack): SingleItemRecipe;
}

/** JVM interface net.minecraft.world.item.crafting.SingleItemRecipe$Factory. */
export interface SingleItemRecipe_FactoryMembers<T /* extends SingleItemRecipe */ = unknown> {
  create(arg0: string, arg1: Ingredient, arg2: j_net_minecraft_world_item.ItemStack): T;
}
export type SingleItemRecipe_Factory<T /* extends SingleItemRecipe */ = unknown> = SingleItemRecipe_FactoryMembers<T>;
export interface SingleItemRecipe_FactoryStatics {
}

/** JVM class net.minecraft.world.item.crafting.SingleItemRecipe$Serializer. */
export interface SingleItemRecipe_SerializerMembers<T /* extends SingleItemRecipe */ = unknown> {
  readonly __javaSupertypes?: readonly [RecipeSerializer<T>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type SingleItemRecipe_Serializer<T /* extends SingleItemRecipe */ = unknown> = SingleItemRecipe_SerializerMembers<T> & RecipeSerializer<T>;
export interface SingleItemRecipe_SerializerStatics {
  new<T /* extends SingleItemRecipe */>(arg0: SingleItemRecipe_Factory<T>): SingleItemRecipe_Serializer<T>;
}

/** JVM record net.minecraft.world.item.crafting.SingleRecipeInput. */
export interface SingleRecipeInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeInput];
  equals(arg0: object): boolean;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  hashCode(): number;
  item(): j_net_minecraft_world_item.ItemStack;
  size(): number;
  toString(): string;
}
export type SingleRecipeInput = SingleRecipeInputMembers & JavaOpaque<"java.lang.Record"> & RecipeInput;
export interface SingleRecipeInputStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack): SingleRecipeInput;
}

/** JVM class net.minecraft.world.item.crafting.SmeltingRecipe. */
export interface SmeltingRecipeMembers {
  readonly __javaSupertypes?: readonly [AbstractCookingRecipe];
  furnaceIcon(): j_net_minecraft_world_item.Item;
  getSerializer(): RecipeSerializer<SmeltingRecipe>;
  getType(): RecipeType<SmeltingRecipe>;
  recipeBookCategory(): RecipeBookCategory;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type SmeltingRecipe = SmeltingRecipeMembers & AbstractCookingRecipe;
export interface SmeltingRecipeStatics {
  new(arg0: string, arg1: CookingBookCategory, arg2: Ingredient, arg3: j_net_minecraft_world_item.ItemStack, arg4: number, arg5: number): SmeltingRecipe;
}

/** JVM interface net.minecraft.world.item.crafting.SmithingRecipe. */
export interface SmithingRecipeMembers {
  readonly __javaSupertypes?: readonly [Recipe<SmithingRecipeInput>];
  additionIngredient(): JavaOptional<Ingredient>;
  baseIngredient(): Ingredient;
  getSerializer(): RecipeSerializer<SmithingRecipe>;
  getType(): RecipeType<SmithingRecipe>;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: SmithingRecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  recipeBookCategory(): RecipeBookCategory;
  templateIngredient(): JavaOptional<Ingredient>;
}
export type SmithingRecipe = SmithingRecipeMembers & Recipe<SmithingRecipeInput>;
export interface SmithingRecipeStatics {
}

/** JVM record net.minecraft.world.item.crafting.SmithingRecipeInput. */
export interface SmithingRecipeInputMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeInput];
  addition(): j_net_minecraft_world_item.ItemStack;
  base(): j_net_minecraft_world_item.ItemStack;
  equals(arg0: object): boolean;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  hashCode(): number;
  isEmpty(): boolean;
  size(): number;
  template(): j_net_minecraft_world_item.ItemStack;
  toString(): string;
}
export type SmithingRecipeInput = SmithingRecipeInputMembers & JavaOpaque<"java.lang.Record"> & RecipeInput;
export interface SmithingRecipeInputStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack): SmithingRecipeInput;
}

/** JVM class net.minecraft.world.item.crafting.SmithingTransformRecipe. */
export interface SmithingTransformRecipeMembers {
  readonly __javaSupertypes?: readonly [SmithingRecipe];
  additionIngredient(): JavaOptional<Ingredient>;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: SmithingRecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  baseIngredient(): Ingredient;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getSerializer(): RecipeSerializer<SmithingTransformRecipe>;
  placementInfo(): PlacementInfo;
  templateIngredient(): JavaOptional<Ingredient>;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type SmithingTransformRecipe = SmithingTransformRecipeMembers & SmithingRecipe;
export interface SmithingTransformRecipeStatics {
  new(arg0: JavaOptional<Ingredient>, arg1: Ingredient, arg2: JavaOptional<Ingredient>, arg3: TransmuteResult): SmithingTransformRecipe;
  new(arg0: JavaOptional<Ingredient>, arg1: Ingredient, arg2: JavaOptional<Ingredient>, arg3: TransmuteResult, arg4: boolean): SmithingTransformRecipe;
}

/** JVM class net.minecraft.world.item.crafting.SmithingTransformRecipe$Serializer. */
export interface SmithingTransformRecipe_SerializerMembers {
  readonly __javaSupertypes?: readonly [RecipeSerializer<SmithingTransformRecipe>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SmithingTransformRecipe]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SmithingTransformRecipe>;
}
export type SmithingTransformRecipe_Serializer = SmithingTransformRecipe_SerializerMembers & RecipeSerializer<SmithingTransformRecipe>;
export interface SmithingTransformRecipe_SerializerStatics {
  new(): SmithingTransformRecipe_Serializer;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SmithingTransformRecipe>;
}

/** JVM class net.minecraft.world.item.crafting.SmithingTrimRecipe. */
export interface SmithingTrimRecipeMembers {
  readonly __javaSupertypes?: readonly [SmithingRecipe];
  additionIngredient(): JavaOptional<Ingredient>;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: SmithingRecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  baseIngredient(): Ingredient;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getSerializer(): RecipeSerializer<SmithingTrimRecipe>;
  placementInfo(): PlacementInfo;
  templateIngredient(): JavaOptional<Ingredient>;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type SmithingTrimRecipe = SmithingTrimRecipeMembers & SmithingRecipe;
export interface SmithingTrimRecipeStatics {
  new(arg0: Ingredient, arg1: Ingredient, arg2: Ingredient, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>): SmithingTrimRecipe;
  new(arg0: Ingredient, arg1: Ingredient, arg2: Ingredient, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>, arg4: boolean): SmithingTrimRecipe;
  applyTrim(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>): j_net_minecraft_world_item.ItemStack;
  applyTrim(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>, arg4: boolean): j_net_minecraft_world_item.ItemStack;
}

/** JVM class net.minecraft.world.item.crafting.SmithingTrimRecipe$Serializer. */
export interface SmithingTrimRecipe_SerializerMembers {
  readonly __javaSupertypes?: readonly [RecipeSerializer<SmithingTrimRecipe>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SmithingTrimRecipe]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SmithingTrimRecipe>;
}
export type SmithingTrimRecipe_Serializer = SmithingTrimRecipe_SerializerMembers & RecipeSerializer<SmithingTrimRecipe>;
export interface SmithingTrimRecipe_SerializerStatics {
  new(): SmithingTrimRecipe_Serializer;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SmithingTrimRecipe>;
}

/** JVM class net.minecraft.world.item.crafting.SmokingRecipe. */
export interface SmokingRecipeMembers {
  readonly __javaSupertypes?: readonly [AbstractCookingRecipe];
  furnaceIcon(): j_net_minecraft_world_item.Item;
  getSerializer(): RecipeSerializer<SmokingRecipe>;
  getType(): RecipeType<SmokingRecipe>;
  recipeBookCategory(): RecipeBookCategory;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type SmokingRecipe = SmokingRecipeMembers & AbstractCookingRecipe;
export interface SmokingRecipeStatics {
  new(arg0: string, arg1: CookingBookCategory, arg2: Ingredient, arg3: j_net_minecraft_world_item.ItemStack, arg4: number, arg5: number): SmokingRecipe;
}

/** JVM class net.minecraft.world.item.crafting.StonecutterRecipe. */
export interface StonecutterRecipeMembers {
  readonly __javaSupertypes?: readonly [SingleItemRecipe];
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getSerializer(): RecipeSerializer<StonecutterRecipe>;
  getType(): RecipeType<StonecutterRecipe>;
  recipeBookCategory(): RecipeBookCategory;
  resultDisplay(): j_net_minecraft_world_item_crafting_display.SlotDisplay;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type StonecutterRecipe = StonecutterRecipeMembers & SingleItemRecipe;
export interface StonecutterRecipeStatics {
  new(arg0: string, arg1: Ingredient, arg2: j_net_minecraft_world_item.ItemStack): StonecutterRecipe;
}

/** JVM class net.minecraft.world.item.crafting.TippedArrowRecipe. */
export interface TippedArrowRecipeMembers {
  readonly __javaSupertypes?: readonly [CustomRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  getSerializer(): RecipeSerializer<TippedArrowRecipe>;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
}
export type TippedArrowRecipe = TippedArrowRecipeMembers & CustomRecipe;
export interface TippedArrowRecipeStatics {
  new(arg0: CraftingBookCategory): TippedArrowRecipe;
}

/** JVM class net.minecraft.world.item.crafting.TransmuteRecipe. */
export interface TransmuteRecipeMembers {
  readonly __javaSupertypes?: readonly [CraftingRecipe];
  assemble(arg0: CraftingInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  assemble(arg0: RecipeInput, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_world_item.ItemStack;
  category(): CraftingBookCategory;
  display(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplay>;
  getSerializer(): RecipeSerializer<TransmuteRecipe>;
  group(): string;
  matches(arg0: CraftingInput, arg1: j_net_minecraft_world_level.Level): boolean;
  matches(arg0: RecipeInput, arg1: j_net_minecraft_world_level.Level): boolean;
  placementInfo(): PlacementInfo;
  toBukkitRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): JavaOpaque<"org.bukkit.inventory.Recipe">;
}
export type TransmuteRecipe = TransmuteRecipeMembers & CraftingRecipe;
export interface TransmuteRecipeStatics {
  new(arg0: string, arg1: CraftingBookCategory, arg2: Ingredient, arg3: Ingredient, arg4: TransmuteResult): TransmuteRecipe;
}

/** JVM class net.minecraft.world.item.crafting.TransmuteRecipe$Serializer. */
export interface TransmuteRecipe_SerializerMembers {
  readonly __javaSupertypes?: readonly [RecipeSerializer<TransmuteRecipe>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TransmuteRecipe]>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TransmuteRecipe>;
}
export type TransmuteRecipe_Serializer = TransmuteRecipe_SerializerMembers & RecipeSerializer<TransmuteRecipe>;
export interface TransmuteRecipe_SerializerStatics {
  new(): TransmuteRecipe_Serializer;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TransmuteRecipe>;
}

/** JVM record net.minecraft.world.item.crafting.TransmuteResult. */
export interface TransmuteResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  apply(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  apply(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean): j_net_minecraft_world_item.ItemStack;
  components(): j_net_minecraft_core_component.DataComponentPatch;
  count(): number;
  display(): j_net_minecraft_world_item_crafting_display.SlotDisplay;
  equals(arg0: object): boolean;
  hashCode(): number;
  isResultUnchanged(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  item(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  toString(): string;
}
export type TransmuteResult = TransmuteResultMembers & JavaOpaque<"java.lang.Record">;
export interface TransmuteResultStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: number, arg2: j_net_minecraft_core_component.DataComponentPatch): TransmuteResult;
  new(arg0: j_net_minecraft_world_item.Item): TransmuteResult;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TransmuteResult]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TransmuteResult>;
}
