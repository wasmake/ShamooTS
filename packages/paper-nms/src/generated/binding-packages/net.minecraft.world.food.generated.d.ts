// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';

/** JVM class net.minecraft.world.food.FoodConstants. */
export interface FoodConstantsMembers {
}
export type FoodConstants = FoodConstantsMembers;
export interface FoodConstantsStatics {
  new(): FoodConstants;
  readonly EXHAUSTION_ATTACK: 0.1;
  readonly EXHAUSTION_CROUCH: 0;
  readonly EXHAUSTION_DROP: 4;
  readonly EXHAUSTION_HEAL: 6;
  readonly EXHAUSTION_JUMP: 0.05;
  readonly EXHAUSTION_MINE: 0.005;
  readonly EXHAUSTION_SPRINT: 0.1;
  readonly EXHAUSTION_SPRINT_JUMP: 0.2;
  readonly EXHAUSTION_SWIM: 0.01;
  readonly EXHAUSTION_WALK: 0;
  readonly FOOD_SATURATION_GOOD: 0.8;
  readonly FOOD_SATURATION_LOW: 0.3;
  readonly FOOD_SATURATION_MAX: 1;
  readonly FOOD_SATURATION_NORMAL: 0.6;
  readonly FOOD_SATURATION_POOR: 0.1;
  readonly FOOD_SATURATION_SUPERNATURAL: 1.2;
  readonly HEALTH_TICK_COUNT: 80;
  readonly HEALTH_TICK_COUNT_SATURATED: 10;
  readonly HEAL_LEVEL: 18;
  readonly MAX_FOOD: 20;
  readonly MAX_SATURATION: 20;
  readonly SATURATION_FLOOR: 2.5;
  readonly SPRINT_LEVEL: 6;
  readonly START_SATURATION: 5;
  readonly STARVE_LEVEL: 0;
  saturationByModifier(arg0: number, arg1: number): number;
}

/** JVM class net.minecraft.world.food.FoodData. */
export interface FoodDataMembers {
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addExhaustion(arg0: number): void;
  eat(arg0: number, arg1: number): void;
  eat(arg0: FoodProperties): void;
  eat(arg0: FoodProperties, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_server_level.ServerPlayer): void;
  exhaustionLevel: number;
  foodLevel: number;
  getFoodLevel(): number;
  getSaturationLevel(): number;
  needsFood(): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  saturatedRegenRate: number;
  saturationLevel: number;
  setFoodLevel(arg0: number): void;
  setSaturation(arg0: number): void;
  starvationRate: number;
  tick(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  unsaturatedRegenRate: number;
}
export type FoodData = FoodDataMembers;
export interface FoodDataStatics {
  new(): FoodData;
}

/** JVM record net.minecraft.world.food.FoodProperties. */
export interface FoodPropertiesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.ConsumableListener];
  canAlwaysEat(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  nutrition(): number;
  onConsume(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_world_item_component.Consumable): void;
  saturation(): number;
  toString(): string;
}
export type FoodProperties = FoodPropertiesMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.ConsumableListener;
export interface FoodPropertiesStatics {
  new(arg0: number, arg1: number, arg2: boolean): FoodProperties;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FoodProperties]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, FoodProperties>;
}

/** JVM class net.minecraft.world.food.FoodProperties$Builder. */
export interface FoodProperties_BuilderMembers {
  alwaysEdible(): FoodProperties_Builder;
  build(): FoodProperties;
  nutrition(arg0: number): FoodProperties_Builder;
  saturationModifier(arg0: number): FoodProperties_Builder;
}
export type FoodProperties_Builder = FoodProperties_BuilderMembers;
export interface FoodProperties_BuilderStatics {
  new(): FoodProperties_Builder;
}

/** JVM class net.minecraft.world.food.Foods. */
export interface FoodsMembers {
}
export type Foods = FoodsMembers;
export interface FoodsStatics {
  new(): Foods;
  readonly APPLE: FoodProperties;
  readonly BAKED_POTATO: FoodProperties;
  readonly BEEF: FoodProperties;
  readonly BEETROOT: FoodProperties;
  readonly BEETROOT_SOUP: FoodProperties;
  readonly BREAD: FoodProperties;
  readonly CARROT: FoodProperties;
  readonly CHICKEN: FoodProperties;
  readonly CHORUS_FRUIT: FoodProperties;
  readonly COD: FoodProperties;
  readonly COOKED_BEEF: FoodProperties;
  readonly COOKED_CHICKEN: FoodProperties;
  readonly COOKED_COD: FoodProperties;
  readonly COOKED_MUTTON: FoodProperties;
  readonly COOKED_PORKCHOP: FoodProperties;
  readonly COOKED_RABBIT: FoodProperties;
  readonly COOKED_SALMON: FoodProperties;
  readonly COOKIE: FoodProperties;
  readonly DRIED_KELP: FoodProperties;
  readonly ENCHANTED_GOLDEN_APPLE: FoodProperties;
  readonly GLOW_BERRIES: FoodProperties;
  readonly GOLDEN_APPLE: FoodProperties;
  readonly GOLDEN_CARROT: FoodProperties;
  readonly HONEY_BOTTLE: FoodProperties;
  readonly MELON_SLICE: FoodProperties;
  readonly MUSHROOM_STEW: FoodProperties;
  readonly MUTTON: FoodProperties;
  readonly POISONOUS_POTATO: FoodProperties;
  readonly PORKCHOP: FoodProperties;
  readonly POTATO: FoodProperties;
  readonly PUFFERFISH: FoodProperties;
  readonly PUMPKIN_PIE: FoodProperties;
  readonly RABBIT: FoodProperties;
  readonly RABBIT_STEW: FoodProperties;
  readonly ROTTEN_FLESH: FoodProperties;
  readonly SALMON: FoodProperties;
  readonly SPIDER_EYE: FoodProperties;
  readonly SUSPICIOUS_STEW: FoodProperties;
  readonly SWEET_BERRIES: FoodProperties;
  readonly TROPICAL_FISH: FoodProperties;
}
