// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';

/** JVM interface net.minecraft.world.item.crafting.display.DisplayContentsFactory. */
export interface DisplayContentsFactoryMembers<T = unknown> {
}
export type DisplayContentsFactory<T = unknown> = DisplayContentsFactoryMembers<T>;
export interface DisplayContentsFactoryStatics {
}

/** JVM interface net.minecraft.world.item.crafting.display.DisplayContentsFactory$ForRemainders. */
export interface DisplayContentsFactory_ForRemaindersMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [DisplayContentsFactory<T>];
  addRemainder(arg0: T, arg1: JavaList<T>): T;
}
export type DisplayContentsFactory_ForRemainders<T = unknown> = DisplayContentsFactory_ForRemaindersMembers<T> & DisplayContentsFactory<T>;
export interface DisplayContentsFactory_ForRemaindersStatics {
}

/** JVM interface net.minecraft.world.item.crafting.display.DisplayContentsFactory$ForStacks. */
export interface DisplayContentsFactory_ForStacksMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [DisplayContentsFactory<T>];
  forStack(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>): T;
  forStack(arg0: j_net_minecraft_world_item.Item): T;
  forStack(arg0: j_net_minecraft_world_item.ItemStack): T;
}
export type DisplayContentsFactory_ForStacks<T = unknown> = DisplayContentsFactory_ForStacksMembers<T> & DisplayContentsFactory<T>;
export interface DisplayContentsFactory_ForStacksStatics {
}

/** JVM record net.minecraft.world.item.crafting.display.FurnaceRecipeDisplay. */
export interface FurnaceRecipeDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeDisplay];
  craftingStation(): SlotDisplay;
  duration(): number;
  equals(arg0: object): boolean;
  experience(): number;
  fuel(): SlotDisplay;
  hashCode(): number;
  ingredient(): SlotDisplay;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  result(): SlotDisplay;
  toString(): string;
  type(): RecipeDisplay_Type<FurnaceRecipeDisplay>;
}
export type FurnaceRecipeDisplay = FurnaceRecipeDisplayMembers & JavaOpaque<"java.lang.Record"> & RecipeDisplay;
export interface FurnaceRecipeDisplayStatics {
  new(arg0: SlotDisplay, arg1: SlotDisplay, arg2: SlotDisplay, arg3: SlotDisplay, arg4: number, arg5: number): FurnaceRecipeDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FurnaceRecipeDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, FurnaceRecipeDisplay>;
  readonly TYPE: RecipeDisplay_Type<FurnaceRecipeDisplay>;
}

/** JVM interface net.minecraft.world.item.crafting.display.RecipeDisplay. */
export interface RecipeDisplayMembers {
  craftingStation(): SlotDisplay;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  result(): SlotDisplay;
  type(): RecipeDisplay_Type<RecipeDisplay>;
}
export type RecipeDisplay = RecipeDisplayMembers;
export interface RecipeDisplayStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RecipeDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, RecipeDisplay>;
}

/** JVM record net.minecraft.world.item.crafting.display.RecipeDisplay$Type. */
export interface RecipeDisplay_TypeMembers<T /* extends RecipeDisplay */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  toString(): string;
}
export type RecipeDisplay_Type<T /* extends RecipeDisplay */ = unknown> = RecipeDisplay_TypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface RecipeDisplay_TypeStatics {
  new<T /* extends RecipeDisplay */>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): RecipeDisplay_Type<T>;
}

/** JVM record net.minecraft.world.item.crafting.display.RecipeDisplayEntry. */
export interface RecipeDisplayEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  canCraft(arg0: j_net_minecraft_world_entity_player.StackedItemContents): boolean;
  category(): j_net_minecraft_world_item_crafting.RecipeBookCategory;
  craftingRequirements(): JavaOptional<JavaList<j_net_minecraft_world_item_crafting.Ingredient>>;
  display(): RecipeDisplay;
  equals(arg0: object): boolean;
  group(): JavaOptionalNumber;
  hashCode(): number;
  id(): RecipeDisplayId;
  resultItems(arg0: j_net_minecraft_util_context.ContextMap): JavaList<j_net_minecraft_world_item.ItemStack>;
  toString(): string;
}
export type RecipeDisplayEntry = RecipeDisplayEntryMembers & JavaOpaque<"java.lang.Record">;
export interface RecipeDisplayEntryStatics {
  new(arg0: RecipeDisplayId, arg1: RecipeDisplay, arg2: JavaOptionalNumber, arg3: j_net_minecraft_world_item_crafting.RecipeBookCategory, arg4: JavaOptional<JavaList<j_net_minecraft_world_item_crafting.Ingredient>>): RecipeDisplayEntry;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, RecipeDisplayEntry>;
}

/** JVM record net.minecraft.world.item.crafting.display.RecipeDisplayId. */
export interface RecipeDisplayIdMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  index(): number;
  toString(): string;
}
export type RecipeDisplayId = RecipeDisplayIdMembers & JavaOpaque<"java.lang.Record">;
export interface RecipeDisplayIdStatics {
  new(arg0: number): RecipeDisplayId;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, RecipeDisplayId>;
}

/** JVM class net.minecraft.world.item.crafting.display.RecipeDisplays. */
export interface RecipeDisplaysMembers {
}
export type RecipeDisplays = RecipeDisplaysMembers;
export interface RecipeDisplaysStatics {
  new(): RecipeDisplays;
  bootstrap(arg0: j_net_minecraft_core.Registry<RecipeDisplay_Type<object>>): RecipeDisplay_Type<object>;
}

/** JVM record net.minecraft.world.item.crafting.display.ShapedCraftingRecipeDisplay. */
export interface ShapedCraftingRecipeDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeDisplay];
  craftingStation(): SlotDisplay;
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): number;
  ingredients(): JavaList<SlotDisplay>;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  result(): SlotDisplay;
  toString(): string;
  type(): RecipeDisplay_Type<ShapedCraftingRecipeDisplay>;
  width(): number;
}
export type ShapedCraftingRecipeDisplay = ShapedCraftingRecipeDisplayMembers & JavaOpaque<"java.lang.Record"> & RecipeDisplay;
export interface ShapedCraftingRecipeDisplayStatics {
  new(arg0: number, arg1: number, arg2: JavaList<SlotDisplay>, arg3: SlotDisplay, arg4: SlotDisplay): ShapedCraftingRecipeDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShapedCraftingRecipeDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapedCraftingRecipeDisplay>;
  readonly TYPE: RecipeDisplay_Type<ShapedCraftingRecipeDisplay>;
}

/** JVM record net.minecraft.world.item.crafting.display.ShapelessCraftingRecipeDisplay. */
export interface ShapelessCraftingRecipeDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeDisplay];
  craftingStation(): SlotDisplay;
  equals(arg0: object): boolean;
  hashCode(): number;
  ingredients(): JavaList<SlotDisplay>;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  result(): SlotDisplay;
  toString(): string;
  type(): RecipeDisplay_Type<ShapelessCraftingRecipeDisplay>;
}
export type ShapelessCraftingRecipeDisplay = ShapelessCraftingRecipeDisplayMembers & JavaOpaque<"java.lang.Record"> & RecipeDisplay;
export interface ShapelessCraftingRecipeDisplayStatics {
  new(arg0: JavaList<SlotDisplay>, arg1: SlotDisplay, arg2: SlotDisplay): ShapelessCraftingRecipeDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShapelessCraftingRecipeDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShapelessCraftingRecipeDisplay>;
  readonly TYPE: RecipeDisplay_Type<ShapelessCraftingRecipeDisplay>;
}

/** JVM interface net.minecraft.world.item.crafting.display.SlotDisplay. */
export interface SlotDisplayMembers {
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  resolveForFirstStack(arg0: j_net_minecraft_util_context.ContextMap): j_net_minecraft_world_item.ItemStack;
  resolveForStacks(arg0: j_net_minecraft_util_context.ContextMap): JavaList<j_net_minecraft_world_item.ItemStack>;
  type(): SlotDisplay_Type<SlotDisplay>;
}
export type SlotDisplay = SlotDisplayMembers;
export interface SlotDisplayStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SlotDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay>;
}

/** JVM class net.minecraft.world.item.crafting.display.SlotDisplay$AnyFuel. */
export interface SlotDisplay_AnyFuelMembers {
  readonly __javaSupertypes?: readonly [SlotDisplay];
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_AnyFuel>;
}
export type SlotDisplay_AnyFuel = SlotDisplay_AnyFuelMembers & SlotDisplay;
export interface SlotDisplay_AnyFuelStatics {
  readonly INSTANCE: SlotDisplay_AnyFuel;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_AnyFuel]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_AnyFuel>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_AnyFuel>;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$Composite. */
export interface SlotDisplay_CompositeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SlotDisplay];
  contents(): JavaList<SlotDisplay>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_Composite>;
}
export type SlotDisplay_Composite = SlotDisplay_CompositeMembers & JavaOpaque<"java.lang.Record"> & SlotDisplay;
export interface SlotDisplay_CompositeStatics {
  new(arg0: JavaList<SlotDisplay>): SlotDisplay_Composite;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_Composite]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_Composite>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_Composite>;
}

/** JVM class net.minecraft.world.item.crafting.display.SlotDisplay$Empty. */
export interface SlotDisplay_EmptyMembers {
  readonly __javaSupertypes?: readonly [SlotDisplay];
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_Empty>;
}
export type SlotDisplay_Empty = SlotDisplay_EmptyMembers & SlotDisplay;
export interface SlotDisplay_EmptyStatics {
  readonly INSTANCE: SlotDisplay_Empty;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_Empty]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_Empty>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_Empty>;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$ItemSlotDisplay. */
export interface SlotDisplay_ItemSlotDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SlotDisplay];
  equals(arg0: object): boolean;
  hashCode(): number;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  item(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_ItemSlotDisplay>;
}
export type SlotDisplay_ItemSlotDisplay = SlotDisplay_ItemSlotDisplayMembers & JavaOpaque<"java.lang.Record"> & SlotDisplay;
export interface SlotDisplay_ItemSlotDisplayStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>): SlotDisplay_ItemSlotDisplay;
  new(arg0: j_net_minecraft_world_item.Item): SlotDisplay_ItemSlotDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_ItemSlotDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_ItemSlotDisplay>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_ItemSlotDisplay>;
}

/** JVM class net.minecraft.world.item.crafting.display.SlotDisplay$ItemStackContentsFactory. */
export interface SlotDisplay_ItemStackContentsFactoryMembers {
  readonly __javaSupertypes?: readonly [DisplayContentsFactory_ForStacks<j_net_minecraft_world_item.ItemStack>];
  forStack(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type SlotDisplay_ItemStackContentsFactory = SlotDisplay_ItemStackContentsFactoryMembers & DisplayContentsFactory_ForStacks<j_net_minecraft_world_item.ItemStack>;
export interface SlotDisplay_ItemStackContentsFactoryStatics {
  new(): SlotDisplay_ItemStackContentsFactory;
  readonly INSTANCE: SlotDisplay_ItemStackContentsFactory;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$ItemStackSlotDisplay. */
export interface SlotDisplay_ItemStackSlotDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SlotDisplay];
  equals(arg0: object): boolean;
  hashCode(): number;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  stack(): j_net_minecraft_world_item.ItemStack;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_ItemStackSlotDisplay>;
}
export type SlotDisplay_ItemStackSlotDisplay = SlotDisplay_ItemStackSlotDisplayMembers & JavaOpaque<"java.lang.Record"> & SlotDisplay;
export interface SlotDisplay_ItemStackSlotDisplayStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack): SlotDisplay_ItemStackSlotDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_ItemStackSlotDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_ItemStackSlotDisplay>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_ItemStackSlotDisplay>;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$SmithingTrimDemoSlotDisplay. */
export interface SlotDisplay_SmithingTrimDemoSlotDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SlotDisplay];
  base(): SlotDisplay;
  equals(arg0: object): boolean;
  hashCode(): number;
  material(): SlotDisplay;
  pattern(): j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_SmithingTrimDemoSlotDisplay>;
}
export type SlotDisplay_SmithingTrimDemoSlotDisplay = SlotDisplay_SmithingTrimDemoSlotDisplayMembers & JavaOpaque<"java.lang.Record"> & SlotDisplay;
export interface SlotDisplay_SmithingTrimDemoSlotDisplayStatics {
  new(arg0: SlotDisplay, arg1: SlotDisplay, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimPattern>): SlotDisplay_SmithingTrimDemoSlotDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_SmithingTrimDemoSlotDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_SmithingTrimDemoSlotDisplay>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_SmithingTrimDemoSlotDisplay>;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$TagSlotDisplay. */
export interface SlotDisplay_TagSlotDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SlotDisplay];
  equals(arg0: object): boolean;
  hashCode(): number;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  tag(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_TagSlotDisplay>;
}
export type SlotDisplay_TagSlotDisplay = SlotDisplay_TagSlotDisplayMembers & JavaOpaque<"java.lang.Record"> & SlotDisplay;
export interface SlotDisplay_TagSlotDisplayStatics {
  new(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): SlotDisplay_TagSlotDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_TagSlotDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_TagSlotDisplay>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_TagSlotDisplay>;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$Type. */
export interface SlotDisplay_TypeMembers<T /* extends SlotDisplay */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  toString(): string;
}
export type SlotDisplay_Type<T /* extends SlotDisplay */ = unknown> = SlotDisplay_TypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SlotDisplay_TypeStatics {
  new<T /* extends SlotDisplay */>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): SlotDisplay_Type<T>;
}

/** JVM record net.minecraft.world.item.crafting.display.SlotDisplay$WithRemainder. */
export interface SlotDisplay_WithRemainderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, SlotDisplay];
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): SlotDisplay;
  isEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  remainder(): SlotDisplay;
  resolve<T>(arg0: j_net_minecraft_util_context.ContextMap, arg1: DisplayContentsFactory<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  toString(): string;
  type(): SlotDisplay_Type<SlotDisplay_WithRemainder>;
}
export type SlotDisplay_WithRemainder = SlotDisplay_WithRemainderMembers & JavaOpaque<"java.lang.Record"> & SlotDisplay;
export interface SlotDisplay_WithRemainderStatics {
  new(arg0: SlotDisplay, arg1: SlotDisplay): SlotDisplay_WithRemainder;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlotDisplay_WithRemainder]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SlotDisplay_WithRemainder>;
  readonly TYPE: SlotDisplay_Type<SlotDisplay_WithRemainder>;
}

/** JVM class net.minecraft.world.item.crafting.display.SlotDisplayContext. */
export interface SlotDisplayContextMembers {
}
export type SlotDisplayContext = SlotDisplayContextMembers;
export interface SlotDisplayContextStatics {
  new(): SlotDisplayContext;
  readonly CONTEXT: j_net_minecraft_util_context.ContextKeySet;
  readonly FUEL_VALUES: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_level_block_entity.FuelValues>;
  readonly REGISTRIES: j_net_minecraft_util_context.ContextKey<j_net_minecraft_core.HolderLookup_Provider>;
  fromLevel(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_util_context.ContextMap;
}

/** JVM class net.minecraft.world.item.crafting.display.SlotDisplays. */
export interface SlotDisplaysMembers {
}
export type SlotDisplays = SlotDisplaysMembers;
export interface SlotDisplaysStatics {
  new(): SlotDisplays;
  bootstrap(arg0: j_net_minecraft_core.Registry<SlotDisplay_Type<object>>): SlotDisplay_Type<object>;
}

/** JVM record net.minecraft.world.item.crafting.display.SmithingRecipeDisplay. */
export interface SmithingRecipeDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeDisplay];
  addition(): SlotDisplay;
  base(): SlotDisplay;
  craftingStation(): SlotDisplay;
  equals(arg0: object): boolean;
  hashCode(): number;
  result(): SlotDisplay;
  template(): SlotDisplay;
  toString(): string;
  type(): RecipeDisplay_Type<SmithingRecipeDisplay>;
}
export type SmithingRecipeDisplay = SmithingRecipeDisplayMembers & JavaOpaque<"java.lang.Record"> & RecipeDisplay;
export interface SmithingRecipeDisplayStatics {
  new(arg0: SlotDisplay, arg1: SlotDisplay, arg2: SlotDisplay, arg3: SlotDisplay, arg4: SlotDisplay): SmithingRecipeDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SmithingRecipeDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SmithingRecipeDisplay>;
  readonly TYPE: RecipeDisplay_Type<SmithingRecipeDisplay>;
}

/** JVM record net.minecraft.world.item.crafting.display.StonecutterRecipeDisplay. */
export interface StonecutterRecipeDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, RecipeDisplay];
  craftingStation(): SlotDisplay;
  equals(arg0: object): boolean;
  hashCode(): number;
  input(): SlotDisplay;
  result(): SlotDisplay;
  toString(): string;
  type(): RecipeDisplay_Type<StonecutterRecipeDisplay>;
}
export type StonecutterRecipeDisplay = StonecutterRecipeDisplayMembers & JavaOpaque<"java.lang.Record"> & RecipeDisplay;
export interface StonecutterRecipeDisplayStatics {
  new(arg0: SlotDisplay, arg1: SlotDisplay, arg2: SlotDisplay): StonecutterRecipeDisplay;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StonecutterRecipeDisplay]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, StonecutterRecipeDisplay>;
  readonly TYPE: RecipeDisplay_Type<StonecutterRecipeDisplay>;
}
