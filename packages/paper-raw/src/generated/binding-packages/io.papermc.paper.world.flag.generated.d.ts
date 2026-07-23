// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM interface io.papermc.paper.world.flag.FeatureDependant. */
export interface FeatureDependantMembers {
  requiredFeatures(): JavaSet<j_org_bukkit.FeatureFlag>;
}
export type FeatureDependant = FeatureDependantMembers;
export interface FeatureDependantStatics {
}

/** JVM interface io.papermc.paper.world.flag.FeatureFlagSetHolder. */
export interface FeatureFlagSetHolderMembers {
  getFeatureFlags(): JavaSet<j_org_bukkit.FeatureFlag>;
  isEnabled(arg0: FeatureDependant): boolean;
}
export type FeatureFlagSetHolder = FeatureFlagSetHolderMembers;
export interface FeatureFlagSetHolderStatics {
}
