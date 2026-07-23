// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_registrar from './io.papermc.paper.plugin.lifecycle.event.registrar.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_tag from './io.papermc.paper.registry.tag.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM abstract io.papermc.paper.tag.BaseTag. */
export interface BaseTagMembers<T /* extends j_org_bukkit.Keyed */ = unknown, C /* extends BaseTag<T, C> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Tag_2<T>];
  add(arg0: JavaCollection<T>): C;
  add(arg0: JavaPredicate<T>): C;
  add(...arg0: Array<T>): C;
  add(...arg0: Array<j_org_bukkit.Tag_2<T>>): C;
  contains(arg0: string): C;
  endsWith(arg0: string): C;
  ensureSize(arg0: string, arg1: number): C;
  getAllPossibleValues(): JavaSet<T>;
  getKey(): j_org_bukkit.NamespacedKey;
  getName(arg0: T): string;
  getValues(): JavaSet<T>;
  isLocked(): boolean;
  isTagged(arg0: T): boolean;
  readonly key: j_org_bukkit.NamespacedKey;
  lock(): C;
  not(arg0: JavaCollection<T>): C;
  not(arg0: JavaPredicate<T>): C;
  not(...arg0: Array<T>): C;
  not(...arg0: Array<j_org_bukkit.Tag_2<T>>): C;
  notContains(arg0: string): C;
  notEndsWith(arg0: string): C;
  notStartsWith(arg0: string): C;
  startsWith(arg0: string): C;
  readonly tagged: JavaSet<T>;
}
export type BaseTag<T /* extends j_org_bukkit.Keyed */ = unknown, C /* extends BaseTag<T, C> */ = unknown> = BaseTagMembers<T, C> & j_org_bukkit.Tag_2<T>;
export interface BaseTagStatics {
  new<T /* extends j_org_bukkit.Keyed */, C /* extends BaseTag<T, C> */>(arg0: JavaClass<T>, arg1: j_org_bukkit.NamespacedKey, arg2: JavaCollection<T>): BaseTag<T, C>;
  new<T /* extends j_org_bukkit.Keyed */, C /* extends BaseTag<T, C> */>(arg0: JavaClass<T>, arg1: j_org_bukkit.NamespacedKey, arg2: JavaCollection<T>, ...arg3: Array<JavaPredicate<T>>): BaseTag<T, C>;
  new<T /* extends j_org_bukkit.Keyed */, C /* extends BaseTag<T, C> */>(arg0: JavaClass<T>, arg1: j_org_bukkit.NamespacedKey, arg2: JavaPredicate<T>): BaseTag<T, C>;
  new<T /* extends j_org_bukkit.Keyed */, C /* extends BaseTag<T, C> */>(arg0: JavaClass<T>, arg1: j_org_bukkit.NamespacedKey, ...arg2: Array<T>): BaseTag<T, C>;
}

/** JVM class io.papermc.paper.tag.EntitySetTag. */
export interface EntitySetTagMembers {
  readonly __javaSupertypes?: readonly [BaseTag<j_org_bukkit_entity.EntityType, EntitySetTag>];
  add(arg0: JavaCollection<j_org_bukkit_entity.EntityType>): EntitySetTag;
  add(arg0: JavaPredicate<j_org_bukkit_entity.EntityType>): EntitySetTag;
  add(...arg0: Array<j_org_bukkit_entity.EntityType>): EntitySetTag;
  add(...arg0: Array<j_org_bukkit.Tag_2<j_org_bukkit_entity.EntityType>>): EntitySetTag;
  contains(arg0: string): EntitySetTag;
  endsWith(arg0: string): EntitySetTag;
  ensureSize(arg0: string, arg1: number): EntitySetTag;
  getAllPossibleValues(): JavaSet<j_org_bukkit_entity.EntityType>;
  getKey(): j_org_bukkit.NamespacedKey;
  getName(arg0: j_org_bukkit_entity.EntityType): string;
  getName(arg0: j_org_bukkit.Keyed): string;
  getValues(): JavaSet<j_org_bukkit_entity.EntityType>;
  isLocked(): boolean;
  isTagged(arg0: j_org_bukkit_entity.EntityType): boolean;
  readonly key: (j_org_bukkit.NamespacedKey) & { (): JavaOpaque<"net.kyori.adventure.key.Key"> };
  lock(): EntitySetTag;
  not(arg0: JavaCollection<j_org_bukkit_entity.EntityType>): EntitySetTag;
  not(arg0: JavaPredicate<j_org_bukkit_entity.EntityType>): EntitySetTag;
  not(...arg0: Array<j_org_bukkit_entity.EntityType>): EntitySetTag;
  not(...arg0: Array<j_org_bukkit.Tag_2<j_org_bukkit_entity.EntityType>>): EntitySetTag;
  notContains(arg0: string): EntitySetTag;
  notEndsWith(arg0: string): EntitySetTag;
  notStartsWith(arg0: string): EntitySetTag;
  startsWith(arg0: string): EntitySetTag;
  readonly tagged: JavaSet<j_org_bukkit_entity.EntityType>;
}
export type EntitySetTag = EntitySetTagMembers;
export interface EntitySetTagStatics {
  new(arg0: j_org_bukkit.NamespacedKey, arg1: JavaCollection<j_org_bukkit_entity.EntityType>): EntitySetTag;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: JavaCollection<j_org_bukkit_entity.EntityType>, ...arg2: Array<JavaPredicate<j_org_bukkit_entity.EntityType>>): EntitySetTag;
  new(arg0: j_org_bukkit.NamespacedKey, arg1: JavaPredicate<j_org_bukkit_entity.EntityType>): EntitySetTag;
  new(arg0: j_org_bukkit.NamespacedKey, ...arg1: Array<j_org_bukkit_entity.EntityType>): EntitySetTag;
}

/** JVM class io.papermc.paper.tag.EntityTags. */
export interface EntityTagsMembers {
}
export type EntityTags = EntityTagsMembers;
export interface EntityTagsStatics {
  new(): EntityTags;
  readonly HORSES: EntitySetTag;
  readonly MINECARTS: EntitySetTag;
  readonly SPLITTING_MOBS: EntitySetTag;
  readonly UNDEADS: EntitySetTag;
  readonly WATER_BASED: EntitySetTag;
}

/** JVM interface io.papermc.paper.tag.PostFlattenTagRegistrar. */
export interface PostFlattenTagRegistrarMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar];
  addToTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>, arg1: JavaCollection<j_io_papermc_paper_registry.TypedKey<T>>): void;
  getAllTags(): JavaMap<j_io_papermc_paper_registry_tag.TagKey<T>, JavaCollection<j_io_papermc_paper_registry.TypedKey<T>>>;
  getTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>): JavaCollection<j_io_papermc_paper_registry.TypedKey<T>>;
  hasTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>): boolean;
  registryKey(): j_io_papermc_paper_registry.RegistryKey<T>;
  setTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>, arg1: JavaCollection<j_io_papermc_paper_registry.TypedKey<T>>): void;
}
export type PostFlattenTagRegistrar<T = unknown> = PostFlattenTagRegistrarMembers<T> & j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar;
export interface PostFlattenTagRegistrarStatics {
}

/** JVM interface io.papermc.paper.tag.PreFlattenTagRegistrar. */
export interface PreFlattenTagRegistrarMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar];
  addToTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>, arg1: JavaCollection<TagEntry<T>>): void;
  getAllTags(): JavaMap<j_io_papermc_paper_registry_tag.TagKey<T>, JavaCollection<TagEntry<T>>>;
  getTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>): JavaList<TagEntry<T>>;
  hasTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>): boolean;
  registryKey(): j_io_papermc_paper_registry.RegistryKey<T>;
  setTag(arg0: j_io_papermc_paper_registry_tag.TagKey<T>, arg1: JavaCollection<TagEntry<T>>): void;
}
export type PreFlattenTagRegistrar<T = unknown> = PreFlattenTagRegistrarMembers<T> & j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar;
export interface PreFlattenTagRegistrarStatics {
}

/** JVM interface io.papermc.paper.tag.TagEntry. */
export interface TagEntryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Keyed">];
  isRequired(): boolean;
  isTag(): boolean;
}
export type TagEntry<T = unknown> = TagEntryMembers<T> & JavaOpaque<"net.kyori.adventure.key.Keyed">;
export interface TagEntryStatics {
  tagEntry<T>(arg0: j_io_papermc_paper_registry_tag.TagKey<T>): TagEntry<T>;
  tagEntry<T>(arg0: j_io_papermc_paper_registry_tag.TagKey<T>, arg1: boolean): TagEntry<T>;
  valueEntry<T>(arg0: j_io_papermc_paper_registry.TypedKey<T>): TagEntry<T>;
  valueEntry<T>(arg0: j_io_papermc_paper_registry.TypedKey<T>, arg1: boolean): TagEntry<T>;
}
