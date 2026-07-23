// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_levelgen_placement from './net.minecraft.world.level.levelgen.placement.generated.js';

/** JVM class net.minecraft.data.registries.RegistriesDatapackGenerator. */
export interface RegistriesDatapackGeneratorMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type RegistriesDatapackGenerator = RegistriesDatapackGeneratorMembers & j_net_minecraft_data.DataProvider;
export interface RegistriesDatapackGeneratorStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): RegistriesDatapackGenerator;
}

/** JVM class net.minecraft.data.registries.RegistryPatchGenerator. */
export interface RegistryPatchGeneratorMembers {
}
export type RegistryPatchGenerator = RegistryPatchGeneratorMembers;
export interface RegistryPatchGeneratorStatics {
  new(): RegistryPatchGenerator;
  createLookup(arg0: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>, arg1: j_net_minecraft_core.RegistrySetBuilder): PromiseLike<j_net_minecraft_core.RegistrySetBuilder_PatchedRegistries>;
}

/** JVM class net.minecraft.data.registries.TradeRebalanceRegistries. */
export interface TradeRebalanceRegistriesMembers {
}
export type TradeRebalanceRegistries = TradeRebalanceRegistriesMembers;
export interface TradeRebalanceRegistriesStatics {
  new(): TradeRebalanceRegistries;
  createLookup(arg0: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>): PromiseLike<j_net_minecraft_core.RegistrySetBuilder_PatchedRegistries>;
}

/** JVM class net.minecraft.data.registries.VanillaRegistries. */
export interface VanillaRegistriesMembers {
}
export type VanillaRegistries = VanillaRegistriesMembers;
export interface VanillaRegistriesStatics {
  new(): VanillaRegistries;
  createLookup(): j_net_minecraft_core.HolderLookup_Provider;
  validateThatAllBiomeFeaturesHaveBiomeFilter(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_levelgen_placement.PlacedFeature>, arg1: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_biome.Biome>): void;
}
