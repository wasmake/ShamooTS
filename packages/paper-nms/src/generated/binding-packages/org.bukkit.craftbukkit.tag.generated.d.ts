// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';

/** JVM class org.bukkit.craftbukkit.tag.CraftBlockTag. */
export interface CraftBlockTagMembers {
  readonly __javaSupertypes?: readonly [CraftTag<j_net_minecraft_world_level_block.Block, JavaOpaque<"org.bukkit.Material">>];
  getValues(): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  isTagged(arg0: JavaOpaque<"org.bukkit.Keyed">): boolean;
  isTagged(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
}
export type CraftBlockTag = CraftBlockTagMembers & CraftTag<j_net_minecraft_world_level_block.Block, JavaOpaque<"org.bukkit.Material">>;
export interface CraftBlockTagStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): CraftBlockTag;
}

/** JVM class org.bukkit.craftbukkit.tag.CraftDamageTag. */
export interface CraftDamageTagMembers {
  readonly __javaSupertypes?: readonly [CraftTag<j_net_minecraft_world_damagesource.DamageType, JavaOpaque<"org.bukkit.damage.DamageType">>];
  getValues(): JavaSet<JavaOpaque<"org.bukkit.damage.DamageType">>;
  isTagged(arg0: JavaOpaque<"org.bukkit.Keyed">): boolean;
  isTagged(arg0: JavaOpaque<"org.bukkit.damage.DamageType">): boolean;
}
export type CraftDamageTag = CraftDamageTagMembers & CraftTag<j_net_minecraft_world_damagesource.DamageType, JavaOpaque<"org.bukkit.damage.DamageType">>;
export interface CraftDamageTagStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_damagesource.DamageType>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>): CraftDamageTag;
}

/** JVM class org.bukkit.craftbukkit.tag.CraftEntityTag. */
export interface CraftEntityTagMembers {
  readonly __javaSupertypes?: readonly [CraftTag<j_net_minecraft_world_entity.EntityType<object>, JavaOpaque<"org.bukkit.entity.EntityType">>];
  getValues(): JavaSet<JavaOpaque<"org.bukkit.entity.EntityType">>;
  isTagged(arg0: JavaOpaque<"org.bukkit.Keyed">): boolean;
  isTagged(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): boolean;
}
export type CraftEntityTag = CraftEntityTagMembers & CraftTag<j_net_minecraft_world_entity.EntityType<object>, JavaOpaque<"org.bukkit.entity.EntityType">>;
export interface CraftEntityTagStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_entity.EntityType<object>>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_entity.EntityType<object>>): CraftEntityTag;
}

/** JVM class org.bukkit.craftbukkit.tag.CraftFluidTag. */
export interface CraftFluidTagMembers {
  readonly __javaSupertypes?: readonly [CraftTag<j_net_minecraft_world_level_material.Fluid, JavaOpaque<"org.bukkit.Fluid">>];
  getValues(): JavaSet<JavaOpaque<"org.bukkit.Fluid">>;
  isTagged(arg0: JavaOpaque<"org.bukkit.Fluid">): boolean;
  isTagged(arg0: JavaOpaque<"org.bukkit.Keyed">): boolean;
}
export type CraftFluidTag = CraftFluidTagMembers & CraftTag<j_net_minecraft_world_level_material.Fluid, JavaOpaque<"org.bukkit.Fluid">>;
export interface CraftFluidTagStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_material.Fluid>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>): CraftFluidTag;
}

/** JVM class org.bukkit.craftbukkit.tag.CraftGameEventTag. */
export interface CraftGameEventTagMembers {
  readonly __javaSupertypes?: readonly [CraftTag<j_net_minecraft_world_level_gameevent.GameEvent, JavaOpaque<"org.bukkit.GameEvent">>];
  getValues(): JavaSet<JavaOpaque<"org.bukkit.GameEvent">>;
  isTagged(arg0: JavaOpaque<"org.bukkit.GameEvent">): boolean;
  isTagged(arg0: JavaOpaque<"org.bukkit.Keyed">): boolean;
}
export type CraftGameEventTag = CraftGameEventTagMembers & CraftTag<j_net_minecraft_world_level_gameevent.GameEvent, JavaOpaque<"org.bukkit.GameEvent">>;
export interface CraftGameEventTagStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_gameevent.GameEvent>): CraftGameEventTag;
}

/** JVM class org.bukkit.craftbukkit.tag.CraftItemTag. */
export interface CraftItemTagMembers {
  readonly __javaSupertypes?: readonly [CraftTag<j_net_minecraft_world_item.Item, JavaOpaque<"org.bukkit.Material">>];
  getValues(): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  isTagged(arg0: JavaOpaque<"org.bukkit.Keyed">): boolean;
  isTagged(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
}
export type CraftItemTag = CraftItemTagMembers & CraftTag<j_net_minecraft_world_item.Item, JavaOpaque<"org.bukkit.Material">>;
export interface CraftItemTagStatics {
  new(arg0: j_net_minecraft_core.Registry<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): CraftItemTag;
}

/** JVM abstract org.bukkit.craftbukkit.tag.CraftTag. */
export interface CraftTagMembers<N = unknown, B /* extends JavaOpaque<"org.bukkit.Keyed"> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.Tag", [B]>];
  equals(arg0: object): boolean;
  getHandle(): j_net_minecraft_core.HolderSet_Named<N>;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
  hashCode(): number;
  readonly registry: j_net_minecraft_core.Registry<N>;
  readonly tag: j_net_minecraft_tags.TagKey<N>;
  toString(): string;
}
export type CraftTag<N = unknown, B /* extends JavaOpaque<"org.bukkit.Keyed"> */ = unknown> = CraftTagMembers<N, B> & JavaOpaque<"org.bukkit.Tag", [B]>;
export interface CraftTagStatics {
  new<N, B /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: j_net_minecraft_core.Registry<N>, arg1: j_net_minecraft_tags.TagKey<N>): CraftTag<N, B>;
}
