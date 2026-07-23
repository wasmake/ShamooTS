// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_food from './net.minecraft.world.food.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftCustomModelDataComponent. */
export interface CraftCustomModelDataComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">];
  equals(arg0: object): boolean;
  getColors(): JavaList<JavaOpaque<"org.bukkit.Color">>;
  getFlags(): JavaList<boolean>;
  getFloats(): JavaList<number>;
  getHandle(): j_net_minecraft_world_item_component.CustomModelData;
  getStrings(): JavaList<string>;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
  setColors(arg0: JavaList<JavaOpaque<"org.bukkit.Color">>): void;
  setFlags(arg0: JavaList<boolean>): void;
  setFloats(arg0: JavaList<number>): void;
  setStrings(arg0: JavaList<string>): void;
  toString(): string;
}
export type CraftCustomModelDataComponent = CraftCustomModelDataComponentMembers & JavaOpaque<"org.bukkit.inventory.meta.components.CustomModelDataComponent">;
export interface CraftCustomModelDataComponentStatics {
  new(arg0: JavaMap<string, object>): CraftCustomModelDataComponent;
  new(arg0: j_net_minecraft_world_item_component.CustomModelData): CraftCustomModelDataComponent;
  new(arg0: CraftCustomModelDataComponent): CraftCustomModelDataComponent;
}

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftEquippableComponent. */
export interface CraftEquippableComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">];
  equals(arg0: object): boolean;
  getAllowedEntities(): JavaCollection<JavaOpaque<"org.bukkit.entity.EntityType">>;
  getCameraOverlay(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getEquipSound(): JavaOpaque<"org.bukkit.Sound">;
  getHandle(): j_net_minecraft_world_item_equipment.Equippable;
  getModel(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getSlot(): JavaOpaque<"org.bukkit.inventory.EquipmentSlot">;
  hashCode(): number;
  isDamageOnHurt(): boolean;
  isDispensable(): boolean;
  isEquipOnInteract(): boolean;
  isSwappable(): boolean;
  serialize(): JavaMap<string, object>;
  setAllowedEntities(arg0: JavaCollection<JavaOpaque<"org.bukkit.entity.EntityType">>): void;
  setAllowedEntities(arg0: JavaOpaque<"org.bukkit.Tag", [JavaOpaque<"org.bukkit.entity.EntityType">]>): void;
  setAllowedEntities(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  setCameraOverlay(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setDamageOnHurt(arg0: boolean): void;
  setDispensable(arg0: boolean): void;
  setEquipOnInteract(arg0: boolean): void;
  setEquipSound(arg0: JavaOpaque<"org.bukkit.Sound">): void;
  setModel(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setSlot(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): void;
  setSwappable(arg0: boolean): void;
  toString(): string;
}
export type CraftEquippableComponent = CraftEquippableComponentMembers & JavaOpaque<"org.bukkit.inventory.meta.components.EquippableComponent">;
export interface CraftEquippableComponentStatics {
  new(arg0: JavaMap<string, object>): CraftEquippableComponent;
  new(arg0: j_net_minecraft_world_item_equipment.Equippable): CraftEquippableComponent;
  new(arg0: CraftEquippableComponent): CraftEquippableComponent;
}

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftFoodComponent. */
export interface CraftFoodComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">];
  canAlwaysEat(): boolean;
  equals(arg0: object): boolean;
  getHandle(): j_net_minecraft_world_food.FoodProperties;
  getNutrition(): number;
  getSaturation(): number;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
  setCanAlwaysEat(arg0: boolean): void;
  setNutrition(arg0: number): void;
  setSaturation(arg0: number): void;
  toString(): string;
}
export type CraftFoodComponent = CraftFoodComponentMembers & JavaOpaque<"org.bukkit.inventory.meta.components.FoodComponent">;
export interface CraftFoodComponentStatics {
  new(arg0: JavaMap<string, object>): CraftFoodComponent;
  new(arg0: j_net_minecraft_world_food.FoodProperties): CraftFoodComponent;
  new(arg0: CraftFoodComponent): CraftFoodComponent;
}

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftJukeboxComponent. */
export interface CraftJukeboxComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">];
  equals(arg0: object): boolean;
  getHandle(): j_net_minecraft_world_item.JukeboxPlayable;
  getSong(): JavaOpaque<"org.bukkit.JukeboxSong">;
  getSongKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
  setSong(arg0: JavaOpaque<"org.bukkit.JukeboxSong">): void;
  setSongKey(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  toString(): string;
}
export type CraftJukeboxComponent = CraftJukeboxComponentMembers & JavaOpaque<"org.bukkit.inventory.meta.components.JukeboxPlayableComponent">;
export interface CraftJukeboxComponentStatics {
  new(arg0: JavaMap<string, object>): CraftJukeboxComponent;
  new(arg0: j_net_minecraft_world_item.JukeboxPlayable): CraftJukeboxComponent;
  new(arg0: CraftJukeboxComponent): CraftJukeboxComponent;
}

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftToolComponent. */
export interface CraftToolComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">];
  addRule(arg0: JavaCollection<JavaOpaque<"org.bukkit.Material">>, arg1: number, arg2: boolean): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">;
  addRule(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number, arg2: boolean): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">;
  addRule(arg0: JavaOpaque<"org.bukkit.Tag", [JavaOpaque<"org.bukkit.Material">]>, arg1: number, arg2: boolean): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">;
  equals(arg0: object): boolean;
  getDamagePerBlock(): number;
  getDefaultMiningSpeed(): number;
  getHandle(): j_net_minecraft_world_item_component.Tool;
  getRules(): JavaList<JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">>;
  hashCode(): number;
  removeRule(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">): boolean;
  serialize(): JavaMap<string, object>;
  setDamagePerBlock(arg0: number): void;
  setDefaultMiningSpeed(arg0: number): void;
  setRules(arg0: JavaList<JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">>): void;
  toString(): string;
}
export type CraftToolComponent = CraftToolComponentMembers & JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">;
export interface CraftToolComponentStatics {
  new(arg0: JavaMap<string, object>): CraftToolComponent;
  new(arg0: j_net_minecraft_world_item_component.Tool): CraftToolComponent;
  new(arg0: CraftToolComponent): CraftToolComponent;
}

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftToolComponent$CraftToolRule. */
export interface CraftToolComponent_CraftToolRuleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">];
  equals(arg0: object): boolean;
  getBlocks(): JavaCollection<JavaOpaque<"org.bukkit.Material">>;
  getHandle(): j_net_minecraft_world_item_component.Tool_Rule;
  getSpeed(): number;
  hashCode(): number;
  isCorrectForDrops(): boolean;
  serialize(): JavaMap<string, object>;
  setBlocks(arg0: JavaCollection<JavaOpaque<"org.bukkit.Material">>): void;
  setBlocks(arg0: JavaOpaque<"org.bukkit.Material">): void;
  setBlocks(arg0: JavaOpaque<"org.bukkit.Tag", [JavaOpaque<"org.bukkit.Material">]>): void;
  setCorrectForDrops(arg0: boolean): void;
  setSpeed(arg0: number): void;
  toString(): string;
}
export type CraftToolComponent_CraftToolRule = CraftToolComponent_CraftToolRuleMembers & JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">;
export interface CraftToolComponent_CraftToolRuleStatics {
  new(arg0: JavaMap<string, object>): CraftToolComponent_CraftToolRule;
  new(arg0: j_net_minecraft_world_item_component.Tool_Rule): CraftToolComponent_CraftToolRule;
  new(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">): CraftToolComponent_CraftToolRule;
}

/** JVM class org.bukkit.craftbukkit.inventory.components.CraftUseCooldownComponent. */
export interface CraftUseCooldownComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">];
  equals(arg0: object): boolean;
  getCooldownGroup(): JavaOpaque<"org.bukkit.NamespacedKey">;
  getCooldownSeconds(): number;
  getHandle(): j_net_minecraft_world_item_component.UseCooldown;
  hashCode(): number;
  serialize(): JavaMap<string, object>;
  setCooldownGroup(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): void;
  setCooldownSeconds(arg0: number): void;
  toString(): string;
}
export type CraftUseCooldownComponent = CraftUseCooldownComponentMembers & JavaOpaque<"org.bukkit.inventory.meta.components.UseCooldownComponent">;
export interface CraftUseCooldownComponentStatics {
  new(arg0: JavaMap<string, object>): CraftUseCooldownComponent;
  new(arg0: j_net_minecraft_world_item_component.UseCooldown): CraftUseCooldownComponent;
  new(arg0: CraftUseCooldownComponent): CraftUseCooldownComponent;
}
