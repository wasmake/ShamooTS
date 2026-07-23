// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM class net.minecraft.world.item.alchemy.Potion. */
export interface PotionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_flag.FeatureElement];
  getEffects(): JavaList<j_net_minecraft_world_effect.MobEffectInstance>;
  hasInstantEffects(): boolean;
  name(): string;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  requiredFeatures(...arg0: Array<j_net_minecraft_world_flag.FeatureFlag>): Potion;
}
export type Potion = PotionMembers & j_net_minecraft_world_flag.FeatureElement;
export interface PotionStatics {
  new(arg0: string, ...arg1: Array<j_net_minecraft_world_effect.MobEffectInstance>): Potion;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Potion>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<Potion>>;
}

/** JVM class net.minecraft.world.item.alchemy.PotionBrewing. */
export interface PotionBrewingMembers {
  addPotionMix(arg0: JavaOpaque<"io.papermc.paper.potion.PotionMix">): void;
  hasContainerMix(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  hasMix(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  hasPotionMix(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  isBrewablePotion(arg0: j_net_minecraft_core.Holder<Potion>): boolean;
  isContainerIngredient(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isCustomIngredient(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isCustomInput(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isIngredient(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isPotionIngredient(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  mix(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  reload(arg0: j_net_minecraft_world_flag.FeatureFlagSet): PotionBrewing;
  removePotionMix(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
}
export type PotionBrewing = PotionBrewingMembers;
export interface PotionBrewingStatics {
  readonly BREWING_TIME_SECONDS: 20;
  readonly EMPTY: PotionBrewing;
  addVanillaMixes(arg0: PotionBrewing_Builder): void;
  bootstrap(arg0: j_net_minecraft_world_flag.FeatureFlagSet): PotionBrewing;
}

/** JVM class net.minecraft.world.item.alchemy.PotionBrewing$Builder. */
export interface PotionBrewing_BuilderMembers {
  addContainer(arg0: j_net_minecraft_world_item.Item): void;
  addContainerRecipe(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_world_item.Item, arg2: j_net_minecraft_world_item.Item): void;
  addMix(arg0: j_net_minecraft_core.Holder<Potion>, arg1: j_net_minecraft_world_item.Item, arg2: j_net_minecraft_core.Holder<Potion>): void;
  addStartMix(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_core.Holder<Potion>): void;
  build(): PotionBrewing;
}
export type PotionBrewing_Builder = PotionBrewing_BuilderMembers;
export interface PotionBrewing_BuilderStatics {
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet): PotionBrewing_Builder;
}

/** JVM record net.minecraft.world.item.alchemy.PotionContents. */
export interface PotionContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.ConsumableListener, j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  applyToLivingEntity(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: number): void;
  customColor(): JavaOptional<number>;
  customEffects(): JavaList<j_net_minecraft_world_effect.MobEffectInstance>;
  customName(): JavaOptional<string>;
  equals(arg0: object): boolean;
  forEachEffect(arg0: JavaConsumer<j_net_minecraft_world_effect.MobEffectInstance>, arg1: number): void;
  getAllEffects(): Iterable<j_net_minecraft_world_effect.MobEffectInstance>;
  getColor(): number;
  getColorOr(arg0: number): number;
  getName(arg0: string): j_net_minecraft_network_chat.Component;
  hasEffects(): boolean;
  hashCode(): number;
  is(arg0: j_net_minecraft_core.Holder<Potion>): boolean;
  onConsume(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_item_component.Consumable): void;
  potion(): JavaOptional<j_net_minecraft_core.Holder<Potion>>;
  toString(): string;
  withEffectAdded(arg0: j_net_minecraft_world_effect.MobEffectInstance): PotionContents;
  withPotion(arg0: j_net_minecraft_core.Holder<Potion>): PotionContents;
}
export type PotionContents = PotionContentsMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.ConsumableListener & j_net_minecraft_world_item_component.TooltipProvider;
export interface PotionContentsStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.Holder<Potion>>, arg1: JavaOptional<number>, arg2: JavaList<j_net_minecraft_world_effect.MobEffectInstance>, arg3: JavaOptional<string>): PotionContents;
  new(arg0: j_net_minecraft_core.Holder<Potion>): PotionContents;
  readonly BASE_POTION_COLOR: -13083194;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PotionContents]>;
  readonly EMPTY: PotionContents;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, PotionContents>;
  addPotionTooltip(arg0: Iterable<j_net_minecraft_world_effect.MobEffectInstance>, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: number, arg3: number): void;
  createItemStack(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_core.Holder<Potion>): j_net_minecraft_world_item.ItemStack;
  getColorOptional(arg0: Iterable<j_net_minecraft_world_effect.MobEffectInstance>): JavaOptionalNumber;
  getPotionDescription(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: number): j_net_minecraft_network_chat.MutableComponent;
}

/** JVM class net.minecraft.world.item.alchemy.Potions. */
export interface PotionsMembers {
}
export type Potions = PotionsMembers;
export interface PotionsStatics {
  new(): Potions;
  readonly AWKWARD: j_net_minecraft_core.Holder<Potion>;
  readonly FIRE_RESISTANCE: j_net_minecraft_core.Holder<Potion>;
  readonly HARMING: j_net_minecraft_core.Holder<Potion>;
  readonly HEALING: j_net_minecraft_core.Holder<Potion>;
  readonly INFESTED: j_net_minecraft_core.Holder<Potion>;
  readonly INVISIBILITY: j_net_minecraft_core.Holder<Potion>;
  readonly LEAPING: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_FIRE_RESISTANCE: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_INVISIBILITY: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_LEAPING: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_NIGHT_VISION: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_POISON: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_REGENERATION: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_SLOWNESS: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_SLOW_FALLING: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_STRENGTH: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_SWIFTNESS: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_TURTLE_MASTER: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_WATER_BREATHING: j_net_minecraft_core.Holder<Potion>;
  readonly LONG_WEAKNESS: j_net_minecraft_core.Holder<Potion>;
  readonly LUCK: j_net_minecraft_core.Holder<Potion>;
  readonly MUNDANE: j_net_minecraft_core.Holder<Potion>;
  readonly NIGHT_VISION: j_net_minecraft_core.Holder<Potion>;
  readonly OOZING: j_net_minecraft_core.Holder<Potion>;
  readonly POISON: j_net_minecraft_core.Holder<Potion>;
  readonly REGENERATION: j_net_minecraft_core.Holder<Potion>;
  readonly SLOWNESS: j_net_minecraft_core.Holder<Potion>;
  readonly SLOW_FALLING: j_net_minecraft_core.Holder<Potion>;
  readonly STRENGTH: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_HARMING: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_HEALING: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_LEAPING: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_POISON: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_REGENERATION: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_SLOWNESS: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_STRENGTH: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_SWIFTNESS: j_net_minecraft_core.Holder<Potion>;
  readonly STRONG_TURTLE_MASTER: j_net_minecraft_core.Holder<Potion>;
  readonly SWIFTNESS: j_net_minecraft_core.Holder<Potion>;
  readonly THICK: j_net_minecraft_core.Holder<Potion>;
  readonly TURTLE_MASTER: j_net_minecraft_core.Holder<Potion>;
  readonly WATER: j_net_minecraft_core.Holder<Potion>;
  readonly WATER_BREATHING: j_net_minecraft_core.Holder<Potion>;
  readonly WEAKNESS: j_net_minecraft_core.Holder<Potion>;
  readonly WEAVING: j_net_minecraft_core.Holder<Potion>;
  readonly WIND_CHARGED: j_net_minecraft_core.Holder<Potion>;
  bootstrap(arg0: j_net_minecraft_core.Registry<Potion>): j_net_minecraft_core.Holder<Potion>;
}
