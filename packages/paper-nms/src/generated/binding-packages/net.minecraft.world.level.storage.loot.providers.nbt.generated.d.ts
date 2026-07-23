// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM class net.minecraft.world.level.storage.loot.providers.nbt.ContextNbtProvider. */
export interface ContextNbtProviderMembers {
  readonly __javaSupertypes?: readonly [NbtProvider];
  get(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_nbt.Tag | null;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootNbtProviderType;
}
export type ContextNbtProvider = ContextNbtProviderMembers & NbtProvider;
export interface ContextNbtProviderStatics {
  readonly BLOCK_ENTITY: ContextNbtProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ContextNbtProvider]>;
  readonly INLINE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ContextNbtProvider]>;
  forContextEntity(arg0: j_net_minecraft_world_level_storage_loot.LootContext_EntityTarget): NbtProvider;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.nbt.LootNbtProviderType. */
export interface LootNbtProviderTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NbtProvider]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type LootNbtProviderType = LootNbtProviderTypeMembers & JavaOpaque<"java.lang.Record">;
export interface LootNbtProviderTypeStatics {
  new(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [NbtProvider]>): LootNbtProviderType;
}

/** JVM interface net.minecraft.world.level.storage.loot.providers.nbt.NbtProvider. */
export interface NbtProviderMembers {
  get(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_nbt.Tag | null;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootNbtProviderType;
}
export type NbtProvider = NbtProviderMembers;
export interface NbtProviderStatics {
}

/** JVM class net.minecraft.world.level.storage.loot.providers.nbt.NbtProviders. */
export interface NbtProvidersMembers {
}
export type NbtProviders = NbtProvidersMembers;
export interface NbtProvidersStatics {
  new(): NbtProviders;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NbtProvider]>;
  readonly CONTEXT: LootNbtProviderType;
  readonly STORAGE: LootNbtProviderType;
}

/** JVM record net.minecraft.world.level.storage.loot.providers.nbt.StorageNbtProvider. */
export interface StorageNbtProviderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, NbtProvider];
  equals(arg0: object): boolean;
  get(arg0: j_net_minecraft_world_level_storage_loot.LootContext): j_net_minecraft_nbt.Tag;
  getReferencedContextParams(): JavaSet<j_net_minecraft_util_context.ContextKey<object>>;
  getType(): LootNbtProviderType;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type StorageNbtProvider = StorageNbtProviderMembers & JavaOpaque<"java.lang.Record"> & NbtProvider;
export interface StorageNbtProviderStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): StorageNbtProvider;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StorageNbtProvider]>;
}
