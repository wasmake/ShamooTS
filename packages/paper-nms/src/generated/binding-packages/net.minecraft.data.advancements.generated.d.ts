// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data from './net.minecraft.data.generated.js';

/** JVM class net.minecraft.data.advancements.AdvancementProvider. */
export interface AdvancementProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_data.DataProvider];
  getName(): string;
  run(arg0: j_net_minecraft_data.CachedOutput): PromiseLike<object>;
}
export type AdvancementProvider = AdvancementProviderMembers & j_net_minecraft_data.DataProvider;
export interface AdvancementProviderStatics {
  new(arg0: j_net_minecraft_data.PackOutput, arg1: PromiseLike<j_net_minecraft_core.HolderLookup_Provider>, arg2: JavaList<AdvancementSubProvider>): AdvancementProvider;
}

/** JVM interface net.minecraft.data.advancements.AdvancementSubProvider. */
export interface AdvancementSubProviderMembers {
  generate(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: JavaConsumer<j_net_minecraft_advancements.AdvancementHolder>): void;
}
export type AdvancementSubProvider = AdvancementSubProviderMembers;
export interface AdvancementSubProviderStatics {
  createPlaceholder(arg0: string): j_net_minecraft_advancements.AdvancementHolder;
}
