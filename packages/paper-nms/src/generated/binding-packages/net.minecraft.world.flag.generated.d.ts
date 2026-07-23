// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM interface net.minecraft.world.flag.FeatureElement. */
export interface FeatureElementMembers {
  isEnabled(arg0: FeatureFlagSet): boolean;
  requiredFeatures(): FeatureFlagSet;
}
export type FeatureElement = FeatureElementMembers;
export interface FeatureElementStatics {
  readonly FILTERED_REGISTRIES: JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<FeatureElement>>>;
}

/** JVM class net.minecraft.world.flag.FeatureFlag. */
export interface FeatureFlagMembers {
  readonly mask: bigint;
  readonly universe: FeatureFlagUniverse;
}
export type FeatureFlag = FeatureFlagMembers;
export interface FeatureFlagStatics {
}

/** JVM class net.minecraft.world.flag.FeatureFlagRegistry. */
export interface FeatureFlagRegistryMembers {
  allFlags(): FeatureFlagSet;
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [FeatureFlagSet]>;
  fromNames(arg0: Iterable<j_net_minecraft_resources.ResourceLocation>): FeatureFlagSet;
  fromNames(arg0: Iterable<j_net_minecraft_resources.ResourceLocation>, arg1: JavaConsumer<j_net_minecraft_resources.ResourceLocation>): FeatureFlagSet;
  isSubset(arg0: FeatureFlagSet): boolean;
  readonly names: JavaMap<j_net_minecraft_resources.ResourceLocation, FeatureFlag>;
  subset(...arg0: Array<FeatureFlag>): FeatureFlagSet;
  toNames(arg0: FeatureFlagSet): JavaSet<j_net_minecraft_resources.ResourceLocation>;
}
export type FeatureFlagRegistry = FeatureFlagRegistryMembers;
export interface FeatureFlagRegistryStatics {
}

/** JVM class net.minecraft.world.flag.FeatureFlagRegistry$Builder. */
export interface FeatureFlagRegistry_BuilderMembers {
  build(): FeatureFlagRegistry;
  create(arg0: j_net_minecraft_resources.ResourceLocation): FeatureFlag;
  createVanilla(arg0: string): FeatureFlag;
}
export type FeatureFlagRegistry_Builder = FeatureFlagRegistry_BuilderMembers;
export interface FeatureFlagRegistry_BuilderStatics {
  new(arg0: string): FeatureFlagRegistry_Builder;
}

/** JVM class net.minecraft.world.flag.FeatureFlags. */
export interface FeatureFlagsMembers {
}
export type FeatureFlags = FeatureFlagsMembers;
export interface FeatureFlagsStatics {
  new(): FeatureFlags;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FeatureFlagSet]>;
  readonly DEFAULT_FLAGS: FeatureFlagSet;
  readonly MINECART_IMPROVEMENTS: FeatureFlag;
  readonly REDSTONE_EXPERIMENTS: FeatureFlag;
  readonly REGISTRY: FeatureFlagRegistry;
  readonly TRADE_REBALANCE: FeatureFlag;
  readonly VANILLA: FeatureFlag;
  readonly VANILLA_SET: FeatureFlagSet;
  isExperimental(arg0: FeatureFlagSet): boolean;
  printMissingFlags(arg0: FeatureFlagRegistry, arg1: FeatureFlagSet, arg2: FeatureFlagSet): string;
  printMissingFlags(arg0: FeatureFlagSet, arg1: FeatureFlagSet): string;
}

/** JVM class net.minecraft.world.flag.FeatureFlagSet. */
export interface FeatureFlagSetMembers {
  contains(arg0: FeatureFlag): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  intersects(arg0: FeatureFlagSet): boolean;
  isEmpty(): boolean;
  isSubsetOf(arg0: FeatureFlagSet): boolean;
  join(arg0: FeatureFlagSet): FeatureFlagSet;
  subtract(arg0: FeatureFlagSet): FeatureFlagSet;
}
export type FeatureFlagSet = FeatureFlagSetMembers;
export interface FeatureFlagSetStatics {
  readonly MAX_CONTAINER_SIZE: 64;
  of(): FeatureFlagSet;
  of(arg0: FeatureFlag): FeatureFlagSet;
  of(arg0: FeatureFlag, ...arg1: Array<FeatureFlag>): FeatureFlagSet;
}

/** JVM class net.minecraft.world.flag.FeatureFlagUniverse. */
export interface FeatureFlagUniverseMembers {
  toString(): string;
}
export type FeatureFlagUniverse = FeatureFlagUniverseMembers;
export interface FeatureFlagUniverseStatics {
  new(arg0: string): FeatureFlagUniverse;
}
