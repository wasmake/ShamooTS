// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface org.bukkit.inventory.meta.components.CustomModelDataComponent. */
export interface CustomModelDataComponentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  getColors(): JavaList<j_org_bukkit.Color>;
  getFlags(): JavaList<boolean>;
  getFloats(): JavaList<number>;
  getStrings(): JavaList<string>;
  setColors(arg0: JavaList<j_org_bukkit.Color>): void;
  setFlags(arg0: JavaList<boolean>): void;
  setFloats(arg0: JavaList<number>): void;
  setStrings(arg0: JavaList<string>): void;
}
export type CustomModelDataComponent = CustomModelDataComponentMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface CustomModelDataComponentStatics {
}

/** JVM interface org.bukkit.inventory.meta.components.EquippableComponent. */
export interface EquippableComponentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  getAllowedEntities(): JavaCollection<j_org_bukkit_entity.EntityType> | null;
  getCameraOverlay(): j_org_bukkit.NamespacedKey | null;
  getEquipSound(): j_org_bukkit.Sound_2;
  getModel(): j_org_bukkit.NamespacedKey | null;
  getSlot(): j_org_bukkit_inventory.EquipmentSlot;
  isDamageOnHurt(): boolean;
  isDispensable(): boolean;
  isEquipOnInteract(): boolean;
  isSwappable(): boolean;
  setAllowedEntities(arg0: JavaCollection<j_org_bukkit_entity.EntityType> | null): void;
  setAllowedEntities(arg0: j_org_bukkit.Tag_3<j_org_bukkit_entity.EntityType> | null): void;
  setAllowedEntities(arg0: j_org_bukkit_entity.EntityType | null): void;
  setCameraOverlay(arg0: j_org_bukkit.NamespacedKey | null): void;
  setDamageOnHurt(arg0: boolean): void;
  setDispensable(arg0: boolean): void;
  setEquipOnInteract(arg0: boolean): void;
  setEquipSound(arg0: j_org_bukkit.Sound_2 | null): void;
  setModel(arg0: j_org_bukkit.NamespacedKey | null): void;
  setSlot(arg0: j_org_bukkit_inventory.EquipmentSlot): void;
  setSwappable(arg0: boolean): void;
}
export type EquippableComponent = EquippableComponentMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface EquippableComponentStatics {
}

/** JVM interface org.bukkit.inventory.meta.components.FoodComponent. */
export interface FoodComponentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  canAlwaysEat(): boolean;
  getNutrition(): number;
  getSaturation(): number;
  setCanAlwaysEat(arg0: boolean): void;
  setNutrition(arg0: number): void;
  setSaturation(arg0: number): void;
}
export type FoodComponent = FoodComponentMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface FoodComponentStatics {
}

/** JVM interface org.bukkit.inventory.meta.components.JukeboxPlayableComponent. */
export interface JukeboxPlayableComponentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  getSong(): j_org_bukkit.JukeboxSong | null;
  getSongKey(): j_org_bukkit.NamespacedKey;
  isShowInTooltip(): boolean;
  setShowInTooltip(arg0: boolean): void;
  setSong(arg0: j_org_bukkit.JukeboxSong): void;
  setSongKey(arg0: j_org_bukkit.NamespacedKey): void;
}
export type JukeboxPlayableComponent = JukeboxPlayableComponentMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface JukeboxPlayableComponentStatics {
}

/** JVM interface org.bukkit.inventory.meta.components.ToolComponent. */
export interface ToolComponentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  addRule(arg0: JavaCollection<j_org_bukkit.Material>, arg1: number | null, arg2: boolean | null): ToolComponent_ToolRule;
  addRule(arg0: j_org_bukkit.Material, arg1: number | null, arg2: boolean | null): ToolComponent_ToolRule;
  addRule(arg0: j_org_bukkit.Tag_3<j_org_bukkit.Material>, arg1: number | null, arg2: boolean | null): ToolComponent_ToolRule;
  getDamagePerBlock(): number;
  getDefaultMiningSpeed(): number;
  getRules(): JavaList<ToolComponent_ToolRule>;
  removeRule(arg0: ToolComponent_ToolRule): boolean;
  setDamagePerBlock(arg0: number): void;
  setDefaultMiningSpeed(arg0: number): void;
  setRules(arg0: JavaList<ToolComponent_ToolRule>): void;
}
export type ToolComponent = ToolComponentMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface ToolComponentStatics {
}

/** JVM interface org.bukkit.inventory.meta.components.ToolComponent$ToolRule. */
export interface ToolComponent_ToolRuleMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  getBlocks(): JavaCollection<j_org_bukkit.Material>;
  getSpeed(): number | null;
  isCorrectForDrops(): boolean | null;
  setBlocks(arg0: JavaCollection<j_org_bukkit.Material>): void;
  setBlocks(arg0: j_org_bukkit.Material): void;
  setBlocks(arg0: j_org_bukkit.Tag_3<j_org_bukkit.Material>): void;
  setCorrectForDrops(arg0: boolean | null): void;
  setSpeed(arg0: number | null): void;
}
export type ToolComponent_ToolRule = ToolComponent_ToolRuleMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface ToolComponent_ToolRuleStatics {
}

/** JVM interface org.bukkit.inventory.meta.components.UseCooldownComponent. */
export interface UseCooldownComponentMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  getCooldownGroup(): j_org_bukkit.NamespacedKey | null;
  getCooldownSeconds(): number;
  setCooldownGroup(arg0: j_org_bukkit.NamespacedKey | null): void;
  setCooldownSeconds(arg0: number): void;
}
export type UseCooldownComponent = UseCooldownComponentMembers & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface UseCooldownComponentStatics {
}
