// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_data_advancements from './net.minecraft.data.advancements.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';

/** JVM class net.minecraft.data.advancements.packs.VanillaAdvancementProvider. */
export interface VanillaAdvancementProviderMembers {
}
export type VanillaAdvancementProvider = VanillaAdvancementProviderMembers;
export interface VanillaAdvancementProviderStatics {
  new(): VanillaAdvancementProvider;
  create(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): j_net_minecraft_data_advancements.AdvancementProvider;
}

/** JVM class net.minecraft.data.advancements.packs.VanillaAdventureAdvancements. */
export interface VanillaAdventureAdvancementsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_advancements.AdvancementSubProvider];
  generate(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>): void;
}
export type VanillaAdventureAdvancements = VanillaAdventureAdvancementsMembers & j_net_minecraft_data_advancements.AdvancementSubProvider;
export interface VanillaAdventureAdvancementsStatics {
  new(): VanillaAdventureAdvancements;
  createMonsterHunterAdvancement(arg0: j_net_minecraft_advancements.AdvancementHolder, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>, arg2: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg3: JavaList<j_net_minecraft_world_entity.EntityType<object>>): j_net_minecraft_advancements.AdvancementHolder;
}

/** JVM class net.minecraft.data.advancements.packs.VanillaHusbandryAdvancements. */
export interface VanillaHusbandryAdvancementsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_advancements.AdvancementSubProvider];
  generate(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>): void;
}
export type VanillaHusbandryAdvancements = VanillaHusbandryAdvancementsMembers & j_net_minecraft_data_advancements.AdvancementSubProvider;
export interface VanillaHusbandryAdvancementsStatics {
  new(): VanillaHusbandryAdvancements;
  readonly BREEDABLE_ANIMALS: JavaList<j_net_minecraft_world_entity.EntityType<object>>;
  readonly INDIRECTLY_BREEDABLE_ANIMALS: JavaList<j_net_minecraft_world_entity.EntityType<object>>;
  readonly WAX_SCRAPING_TOOLS: Array<j_net_minecraft_world_item.Item>;
  createBreedAllAnimalsAdvancement(arg0: j_net_minecraft_advancements.AdvancementHolder, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>, arg2: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_entity.EntityType<object>>, arg3: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.EntityType<object>]>, arg4: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_entity.EntityType<object>]>): j_net_minecraft_advancements.AdvancementHolder;
}

/** JVM class net.minecraft.data.advancements.packs.VanillaNetherAdvancements. */
export interface VanillaNetherAdvancementsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_advancements.AdvancementSubProvider];
  generate(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>): void;
}
export type VanillaNetherAdvancements = VanillaNetherAdvancementsMembers & j_net_minecraft_data_advancements.AdvancementSubProvider;
export interface VanillaNetherAdvancementsStatics {
  new(): VanillaNetherAdvancements;
}

/** JVM class net.minecraft.data.advancements.packs.VanillaStoryAdvancements. */
export interface VanillaStoryAdvancementsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_advancements.AdvancementSubProvider];
  generate(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>): void;
}
export type VanillaStoryAdvancements = VanillaStoryAdvancementsMembers & j_net_minecraft_data_advancements.AdvancementSubProvider;
export interface VanillaStoryAdvancementsStatics {
  new(): VanillaStoryAdvancements;
}

/** JVM class net.minecraft.data.advancements.packs.VanillaTheEndAdvancements. */
export interface VanillaTheEndAdvancementsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data_advancements.AdvancementSubProvider];
  generate(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>): void;
}
export type VanillaTheEndAdvancements = VanillaTheEndAdvancementsMembers & j_net_minecraft_data_advancements.AdvancementSubProvider;
export interface VanillaTheEndAdvancementsStatics {
  new(): VanillaTheEndAdvancements;
}
