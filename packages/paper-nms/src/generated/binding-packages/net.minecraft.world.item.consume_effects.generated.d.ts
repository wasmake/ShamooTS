// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM record net.minecraft.world.item.consume_effects.ApplyStatusEffectsConsumeEffect. */
export interface ApplyStatusEffectsConsumeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumeEffect];
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  effects(): JavaList<j_net_minecraft_world_effect.MobEffectInstance>;
  equals(arg0: object): boolean;
  getType(): ConsumeEffect_Type<ApplyStatusEffectsConsumeEffect>;
  hashCode(): number;
  probability(): number;
  toString(): string;
}
export type ApplyStatusEffectsConsumeEffect = ApplyStatusEffectsConsumeEffectMembers & JavaOpaque<"java.lang.Record"> & ConsumeEffect;
export interface ApplyStatusEffectsConsumeEffectStatics {
  new(arg0: JavaList<j_net_minecraft_world_effect.MobEffectInstance>): ApplyStatusEffectsConsumeEffect;
  new(arg0: JavaList<j_net_minecraft_world_effect.MobEffectInstance>, arg1: number): ApplyStatusEffectsConsumeEffect;
  new(arg0: j_net_minecraft_world_effect.MobEffectInstance): ApplyStatusEffectsConsumeEffect;
  new(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: number): ApplyStatusEffectsConsumeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ApplyStatusEffectsConsumeEffect]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ApplyStatusEffectsConsumeEffect>;
}

/** JVM record net.minecraft.world.item.consume_effects.ClearAllStatusEffectsConsumeEffect. */
export interface ClearAllStatusEffectsConsumeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumeEffect];
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  equals(arg0: object): boolean;
  getType(): ConsumeEffect_Type<ClearAllStatusEffectsConsumeEffect>;
  hashCode(): number;
  toString(): string;
}
export type ClearAllStatusEffectsConsumeEffect = ClearAllStatusEffectsConsumeEffectMembers & JavaOpaque<"java.lang.Record"> & ConsumeEffect;
export interface ClearAllStatusEffectsConsumeEffectStatics {
  new(): ClearAllStatusEffectsConsumeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ClearAllStatusEffectsConsumeEffect]>;
  readonly INSTANCE: ClearAllStatusEffectsConsumeEffect;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClearAllStatusEffectsConsumeEffect>;
}

/** JVM interface net.minecraft.world.item.consume_effects.ConsumeEffect. */
export interface ConsumeEffectMembers {
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  getType(): ConsumeEffect_Type<ConsumeEffect>;
}
export type ConsumeEffect = ConsumeEffectMembers;
export interface ConsumeEffectStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ConsumeEffect]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ConsumeEffect>;
}

/** JVM record net.minecraft.world.item.consume_effects.ConsumeEffect$Type. */
export interface ConsumeEffect_TypeMembers<T /* extends ConsumeEffect */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  toString(): string;
}
export type ConsumeEffect_Type<T /* extends ConsumeEffect */ = unknown> = ConsumeEffect_TypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface ConsumeEffect_TypeStatics {
  new<T /* extends ConsumeEffect */>(arg0: JavaOpaque<"com.mojang.serialization.MapCodec", [T]>, arg1: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): ConsumeEffect_Type<T>;
  readonly APPLY_EFFECTS: ConsumeEffect_Type<ApplyStatusEffectsConsumeEffect>;
  readonly CLEAR_ALL_EFFECTS: ConsumeEffect_Type<ClearAllStatusEffectsConsumeEffect>;
  readonly PLAY_SOUND: ConsumeEffect_Type<PlaySoundConsumeEffect>;
  readonly REMOVE_EFFECTS: ConsumeEffect_Type<RemoveStatusEffectsConsumeEffect>;
  readonly TELEPORT_RANDOMLY: ConsumeEffect_Type<TeleportRandomlyConsumeEffect>;
}

/** JVM record net.minecraft.world.item.consume_effects.PlaySoundConsumeEffect. */
export interface PlaySoundConsumeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumeEffect];
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  equals(arg0: object): boolean;
  getType(): ConsumeEffect_Type<PlaySoundConsumeEffect>;
  hashCode(): number;
  sound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  toString(): string;
}
export type PlaySoundConsumeEffect = PlaySoundConsumeEffectMembers & JavaOpaque<"java.lang.Record"> & ConsumeEffect;
export interface PlaySoundConsumeEffectStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): PlaySoundConsumeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlaySoundConsumeEffect]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, PlaySoundConsumeEffect>;
}

/** JVM record net.minecraft.world.item.consume_effects.RemoveStatusEffectsConsumeEffect. */
export interface RemoveStatusEffectsConsumeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumeEffect];
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  effects(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_effect.MobEffect>;
  equals(arg0: object): boolean;
  getType(): ConsumeEffect_Type<RemoveStatusEffectsConsumeEffect>;
  hashCode(): number;
  toString(): string;
}
export type RemoveStatusEffectsConsumeEffect = RemoveStatusEffectsConsumeEffectMembers & JavaOpaque<"java.lang.Record"> & ConsumeEffect;
export interface RemoveStatusEffectsConsumeEffectStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): RemoveStatusEffectsConsumeEffect;
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_effect.MobEffect>): RemoveStatusEffectsConsumeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RemoveStatusEffectsConsumeEffect]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, RemoveStatusEffectsConsumeEffect>;
}

/** JVM record net.minecraft.world.item.consume_effects.TeleportRandomlyConsumeEffect. */
export interface TeleportRandomlyConsumeEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumeEffect];
  apply(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity): boolean;
  diameter(): number;
  equals(arg0: object): boolean;
  getType(): ConsumeEffect_Type<TeleportRandomlyConsumeEffect>;
  hashCode(): number;
  toString(): string;
}
export type TeleportRandomlyConsumeEffect = TeleportRandomlyConsumeEffectMembers & JavaOpaque<"java.lang.Record"> & ConsumeEffect;
export interface TeleportRandomlyConsumeEffectStatics {
  new(): TeleportRandomlyConsumeEffect;
  new(arg0: number): TeleportRandomlyConsumeEffect;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TeleportRandomlyConsumeEffect]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TeleportRandomlyConsumeEffect>;
}
