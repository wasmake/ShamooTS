// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';

/** JVM record net.minecraft.world.level.storage.loot.providers.score.ContextScoreboardNameProvider. */
export interface ContextScoreboardNameProviderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ScoreboardNameProvider];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getScoreHolder(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_scores.ScoreHolder | null;
  getType(): LootScoreProviderType;
  hashCode(): number;
  target(): j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget;
  toString(): string;
}
export type ContextScoreboardNameProvider = ContextScoreboardNameProviderMembers & JavaOpaque<"java.lang.Record"> & ScoreboardNameProvider;
export interface ContextScoreboardNameProviderStatics {
  new(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): ContextScoreboardNameProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ContextScoreboardNameProvider]>;
  readonly INLINE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ContextScoreboardNameProvider]>;
  forTarget(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): ScoreboardNameProvider;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.score.FixedScoreboardNameProvider. */
export interface FixedScoreboardNameProviderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ScoreboardNameProvider];
  equals(arg0: object): boolean;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getScoreHolder(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_scores.ScoreHolder;
  getType(): LootScoreProviderType;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type FixedScoreboardNameProvider = FixedScoreboardNameProviderMembers & JavaOpaque<"java.lang.Record"> & ScoreboardNameProvider;
export interface FixedScoreboardNameProviderStatics {
  new(arg0: string): FixedScoreboardNameProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FixedScoreboardNameProvider]>;
  forName(arg0: string): ScoreboardNameProvider;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.score.LootScoreProviderType. */
export interface LootScoreProviderTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ScoreboardNameProvider]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LootScoreProviderType = LootScoreProviderTypeMembers & JavaOpaque<"java.lang.Record">;
export interface LootScoreProviderTypeStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [ScoreboardNameProvider]>): LootScoreProviderType;
}

/** JVM interface net.minecraft.world.level.storage.loot.providers.score.ScoreboardNameProvider. */
export interface ScoreboardNameProviderMembers {
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getScoreHolder(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_world_scores.ScoreHolder | null;
  getType(): LootScoreProviderType;
}
export type ScoreboardNameProvider = ScoreboardNameProviderMembers;
export interface ScoreboardNameProviderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.providers.score.ScoreboardNameProviders. */
export interface ScoreboardNameProvidersMembers {
}
export type ScoreboardNameProviders = ScoreboardNameProvidersMembers;
export interface ScoreboardNameProvidersStatics {
  new(): ScoreboardNameProviders;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ScoreboardNameProvider]>;
  readonly CONTEXT: LootScoreProviderType;
  readonly FIXED: LootScoreProviderType;
}
