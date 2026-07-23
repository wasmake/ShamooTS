// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_io_papermc_paper_plugin_bootstrap from './io.papermc.paper.plugin.bootstrap.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event from './io.papermc.paper.plugin.lifecycle.event.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_types from './io.papermc.paper.plugin.lifecycle.event.types.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_data from './io.papermc.paper.registry.data.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog from './io.papermc.paper.registry.data.dialog.generated.js';
import type * as j_io_papermc_paper_registry_event_type from './io.papermc.paper.registry.event.type.generated.js';
import type * as j_io_papermc_paper_registry_tag from './io.papermc.paper.registry.tag.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.registry.event.RegistryComposeEvent. */
export interface RegistryComposeEventMembers<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [RegistryEvent<T>];
  getOrCreateTag<V /* extends j_org_bukkit.Keyed */>(arg0: j_io_papermc_paper_registry_tag.TagKey<V>): j_io_papermc_paper_registry_tag.Tag<V>;
  registry(): WritableRegistry<T, B>;
}
export type RegistryComposeEvent<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> = RegistryComposeEventMembers<T, B> & RegistryEvent<T>;
export interface RegistryComposeEventStatics {
}

/** JVM interface io.papermc.paper.registry.event.RegistryEntryAddEvent. */
export interface RegistryEntryAddEventMembers<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [RegistryEvent<T>];
  builder(): B;
  getOrCreateTag<V /* extends j_org_bukkit.Keyed */>(arg0: j_io_papermc_paper_registry_tag.TagKey<V>): j_io_papermc_paper_registry_tag.Tag<V>;
  key(): j_io_papermc_paper_registry.TypedKey<T>;
}
export type RegistryEntryAddEvent<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> = RegistryEntryAddEventMembers<T, B> & RegistryEvent<T>;
export interface RegistryEntryAddEventStatics {
}

/** JVM interface io.papermc.paper.registry.event.RegistryEvent. */
export interface RegistryEventMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent];
  registryKey(): j_io_papermc_paper_registry.RegistryKey<T>;
}
export type RegistryEvent<T = unknown> = RegistryEventMembers<T> & j_io_papermc_paper_plugin_lifecycle_event.LifecycleEvent;
export interface RegistryEventStatics {
}

/** JVM interface io.papermc.paper.registry.event.RegistryEventProvider. */
export interface RegistryEventProviderMembers<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> {
  compose(): j_io_papermc_paper_plugin_lifecycle_event_types.LifecycleEventType_Prioritizable<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, RegistryComposeEvent<T, B>>;
  entryAdd(): j_io_papermc_paper_registry_event_type.RegistryEntryAddEventType<T, B>;
  freeze(): j_io_papermc_paper_plugin_lifecycle_event_types.LifecycleEventType_Prioritizable<j_io_papermc_paper_plugin_bootstrap.BootstrapContext, RegistryFreezeEvent<T, B>>;
  registryKey(): j_io_papermc_paper_registry.RegistryKey<T>;
}
export type RegistryEventProvider<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> = RegistryEventProviderMembers<T, B>;
export interface RegistryEventProviderStatics {
}

/** JVM class io.papermc.paper.registry.event.RegistryEvents. */
export interface RegistryEventsMembers {
}
export type RegistryEvents = RegistryEventsMembers;
export interface RegistryEventsStatics {
  readonly BANNER_PATTERN: RegistryEventProvider<j_org_bukkit_block_banner.PatternType, j_io_papermc_paper_registry_data.BannerPatternRegistryEntry_Builder>;
  readonly CAT_VARIANT: RegistryEventProvider<j_org_bukkit_entity.Cat_Type, j_io_papermc_paper_registry_data.CatTypeRegistryEntry_Builder>;
  readonly CHICKEN_VARIANT: RegistryEventProvider<j_org_bukkit_entity.Chicken_Variant, j_io_papermc_paper_registry_data.ChickenVariantRegistryEntry_Builder>;
  readonly COW_VARIANT: RegistryEventProvider<j_org_bukkit_entity.Cow_Variant, j_io_papermc_paper_registry_data.CowVariantRegistryEntry_Builder>;
  readonly DAMAGE_TYPE: RegistryEventProvider<j_org_bukkit_damage.DamageType, j_io_papermc_paper_registry_data.DamageTypeRegistryEntry_Builder>;
  readonly DIALOG: RegistryEventProvider<j_io_papermc_paper_dialog.Dialog, j_io_papermc_paper_registry_data_dialog.DialogRegistryEntry_Builder>;
  readonly ENCHANTMENT: RegistryEventProvider<j_org_bukkit_enchantments.Enchantment, j_io_papermc_paper_registry_data.EnchantmentRegistryEntry_Builder>;
  readonly FROG_VARIANT: RegistryEventProvider<j_org_bukkit_entity.Frog_Variant, j_io_papermc_paper_registry_data.FrogVariantRegistryEntry_Builder>;
  readonly GAME_EVENT: RegistryEventProvider<j_org_bukkit.GameEvent, j_io_papermc_paper_registry_data.GameEventRegistryEntry_Builder>;
  readonly INSTRUMENT: RegistryEventProvider<j_org_bukkit.MusicInstrument, j_io_papermc_paper_registry_data.InstrumentRegistryEntry_Builder>;
  readonly JUKEBOX_SONG: RegistryEventProvider<j_org_bukkit.JukeboxSong, j_io_papermc_paper_registry_data.JukeboxSongRegistryEntry_Builder>;
  readonly PAINTING_VARIANT: RegistryEventProvider<j_org_bukkit.Art, j_io_papermc_paper_registry_data.PaintingVariantRegistryEntry_Builder>;
  readonly PIG_VARIANT: RegistryEventProvider<j_org_bukkit_entity.Pig_Variant, j_io_papermc_paper_registry_data.PigVariantRegistryEntry_Builder>;
  readonly WOLF_VARIANT: RegistryEventProvider<j_org_bukkit_entity.Wolf_Variant, j_io_papermc_paper_registry_data.WolfVariantRegistryEntry_Builder>;
}

/** JVM interface io.papermc.paper.registry.event.RegistryFreezeEvent. */
export interface RegistryFreezeEventMembers<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [RegistryComposeEvent<T, B>];
}
export type RegistryFreezeEvent<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> = RegistryFreezeEventMembers<T, B> & RegistryComposeEvent<T, B>;
export interface RegistryFreezeEventStatics {
}

/** JVM interface io.papermc.paper.registry.event.WritableRegistry. */
export interface WritableRegistryMembers<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> {
  register(arg0: j_io_papermc_paper_registry.TypedKey<T>, arg1: JavaConsumer<B>): void;
  registerWith(arg0: j_io_papermc_paper_registry.TypedKey<T>, arg1: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<T, B>>): void;
}
export type WritableRegistry<T = unknown, B /* extends j_io_papermc_paper_registry.RegistryBuilder<T> */ = unknown> = WritableRegistryMembers<T, B>;
export interface WritableRegistryStatics {
}
