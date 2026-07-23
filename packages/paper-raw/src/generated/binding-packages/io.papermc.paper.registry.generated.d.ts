// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_datacomponent from './io.papermc.paper.datacomponent.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_io_papermc_paper_registry_tag from './io.papermc.paper.registry.tag.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_attribute from './org.bukkit.attribute.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_entity_memory from './org.bukkit.entity.memory.generated.js';
import type * as j_org_bukkit_generator_structure from './org.bukkit.generator.structure.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta_trim from './org.bukkit.inventory.meta.trim.generated.js';
import type * as j_org_bukkit_map from './org.bukkit.map.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM interface io.papermc.paper.registry.Reference. */
export interface ReferenceMembers<T /* extends j_org_bukkit.Keyed */ = unknown> {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  value(): T;
  valueOrNull(): T | null;
}
export type Reference<T /* extends j_org_bukkit.Keyed */ = unknown> = ReferenceMembers<T> & j_org_bukkit.Keyed;
export interface ReferenceStatics {
  create<T /* extends j_org_bukkit.Keyed */>(arg0: j_org_bukkit.Registry<T>, arg1: j_org_bukkit.NamespacedKey): Reference<T>;
}

/** JVM interface io.papermc.paper.registry.RegistryAccess. */
export interface RegistryAccessMembers {
  getRegistry<T /* extends j_org_bukkit.Keyed */>(arg0: RegistryKey<T>): j_org_bukkit.Registry<T>;
  getRegistry<T /* extends j_org_bukkit.Keyed */>(arg0: JavaClass<T>): j_org_bukkit.Registry<T> | null;
}
export type RegistryAccess = RegistryAccessMembers;
export interface RegistryAccessStatics {
  registryAccess(): RegistryAccess;
}

/** JVM interface io.papermc.paper.registry.RegistryBuilder. */
export interface RegistryBuilderMembers<T = unknown> {
}
export type RegistryBuilder<T = unknown> = RegistryBuilderMembers<T>;
export interface RegistryBuilderStatics {
}

/** JVM interface io.papermc.paper.registry.RegistryBuilderFactory. */
export interface RegistryBuilderFactoryMembers<T = unknown, B /* extends RegistryBuilder<T> */ = unknown> {
  copyFrom(arg0: TypedKey<T>): B;
  empty(): B;
}
export type RegistryBuilderFactory<T = unknown, B /* extends RegistryBuilder<T> */ = unknown> = RegistryBuilderFactoryMembers<T, B>;
export interface RegistryBuilderFactoryStatics {
}

/** JVM interface io.papermc.paper.registry.RegistryKey. */
export interface RegistryKeyMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Keyed">];
  tagKey(arg0: string): j_io_papermc_paper_registry_tag.TagKey<T>;
  tagKey(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): j_io_papermc_paper_registry_tag.TagKey<T>;
  typedKey(arg0: string): TypedKey<T>;
  typedKey(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): TypedKey<T>;
}
export type RegistryKey<T = unknown> = RegistryKeyMembers<T> & JavaOpaque<"net.kyori.adventure.key.Keyed">;
export interface RegistryKeyStatics {
  readonly ATTRIBUTE: RegistryKey<j_org_bukkit_attribute.Attribute>;
  readonly BANNER_PATTERN: RegistryKey<j_org_bukkit_block_banner.PatternType>;
  readonly BIOME: RegistryKey<j_org_bukkit_block.Biome>;
  readonly BLOCK: RegistryKey<j_org_bukkit_block.BlockType>;
  readonly CAT_VARIANT: RegistryKey<j_org_bukkit_entity.Cat_Type>;
  readonly CHICKEN_VARIANT: RegistryKey<j_org_bukkit_entity.Chicken_Variant>;
  readonly COW_VARIANT: RegistryKey<j_org_bukkit_entity.Cow_Variant>;
  readonly DAMAGE_TYPE: RegistryKey<j_org_bukkit_damage.DamageType>;
  readonly DATA_COMPONENT_TYPE: RegistryKey<j_io_papermc_paper_datacomponent.DataComponentType>;
  readonly DIALOG: RegistryKey<j_io_papermc_paper_dialog.Dialog>;
  readonly ENCHANTMENT: RegistryKey<j_org_bukkit_enchantments.Enchantment>;
  readonly ENTITY_TYPE: RegistryKey<j_org_bukkit_entity.EntityType>;
  readonly FLUID: RegistryKey<j_org_bukkit.Fluid>;
  readonly FROG_VARIANT: RegistryKey<j_org_bukkit_entity.Frog_Variant>;
  readonly GAME_EVENT: RegistryKey<j_org_bukkit.GameEvent>;
  readonly INSTRUMENT: RegistryKey<j_org_bukkit.MusicInstrument>;
  readonly ITEM: RegistryKey<j_org_bukkit_inventory.ItemType>;
  readonly JUKEBOX_SONG: RegistryKey<j_org_bukkit.JukeboxSong>;
  readonly MAP_DECORATION_TYPE: RegistryKey<j_org_bukkit_map.MapCursor_Type>;
  readonly MEMORY_MODULE_TYPE: RegistryKey<j_org_bukkit_entity_memory.MemoryKey<object>>;
  readonly MENU: RegistryKey<j_org_bukkit_inventory.MenuType>;
  readonly MOB_EFFECT: RegistryKey<j_org_bukkit_potion.PotionEffectType>;
  readonly PAINTING_VARIANT: RegistryKey<j_org_bukkit.Art>;
  readonly PARTICLE_TYPE: RegistryKey<j_org_bukkit.Particle>;
  readonly PIG_VARIANT: RegistryKey<j_org_bukkit_entity.Pig_Variant>;
  readonly POTION: RegistryKey<j_org_bukkit_potion.PotionType>;
  readonly SOUND_EVENT: RegistryKey<j_org_bukkit.Sound_2>;
  readonly STRUCTURE: RegistryKey<j_org_bukkit_generator_structure.Structure_2>;
  readonly STRUCTURE_TYPE: RegistryKey<j_org_bukkit_generator_structure.StructureType_2>;
  readonly TRIM_MATERIAL: RegistryKey<j_org_bukkit_inventory_meta_trim.TrimMaterial>;
  readonly TRIM_PATTERN: RegistryKey<j_org_bukkit_inventory_meta_trim.TrimPattern>;
  readonly VILLAGER_PROFESSION: RegistryKey<j_org_bukkit_entity.Villager_Profession>;
  readonly VILLAGER_TYPE: RegistryKey<j_org_bukkit_entity.Villager_Type>;
  readonly WOLF_SOUND_VARIANT: RegistryKey<j_org_bukkit_entity.Wolf_SoundVariant>;
  readonly WOLF_VARIANT: RegistryKey<j_org_bukkit_entity.Wolf_Variant>;
}

/** JVM interface io.papermc.paper.registry.TypedKey. */
export interface TypedKeyMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Key">];
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  registryKey(): RegistryKey<T>;
}
export type TypedKey<T = unknown> = TypedKeyMembers<T> & JavaOpaque<"net.kyori.adventure.key.Key">;
export interface TypedKeyStatics {
  create<T>(arg0: RegistryKey<T>, arg1: string): TypedKey<T>;
  create<T>(arg0: RegistryKey<T>, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): TypedKey<T>;
}
