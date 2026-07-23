// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.AppendLoot. */
export interface AppendLootMembers {
  readonly __javaSupertypes?: readonly [RuleBlockEntityModifier];
  apply(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  getType(): RuleBlockEntityModifierType<object>;
}
export type AppendLoot = AppendLootMembers & RuleBlockEntityModifier;
export interface AppendLootStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): AppendLoot;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AppendLoot]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.AppendStatic. */
export interface AppendStaticMembers {
  readonly __javaSupertypes?: readonly [RuleBlockEntityModifier];
  apply(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  getType(): RuleBlockEntityModifierType<object>;
}
export type AppendStatic = AppendStaticMembers & RuleBlockEntityModifier;
export interface AppendStaticStatics {
  new(arg0: j_net_minecraft_nbt.CompoundTag): AppendStatic;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AppendStatic]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Clear. */
export interface ClearMembers {
  readonly __javaSupertypes?: readonly [RuleBlockEntityModifier];
  apply(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  getType(): RuleBlockEntityModifierType<object>;
}
export type Clear = ClearMembers & RuleBlockEntityModifier;
export interface ClearStatics {
  new(): Clear;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Clear]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Passthrough. */
export interface PassthroughMembers {
  readonly __javaSupertypes?: readonly [RuleBlockEntityModifier];
  apply(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  getType(): RuleBlockEntityModifierType<object>;
}
export type Passthrough = PassthroughMembers & RuleBlockEntityModifier;
export interface PassthroughStatics {
  new(): Passthrough;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Passthrough]>;
  readonly INSTANCE: Passthrough;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier. */
export interface RuleBlockEntityModifierMembers {
  apply(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  getType(): RuleBlockEntityModifierType<object>;
}
export type RuleBlockEntityModifier = RuleBlockEntityModifierMembers;
export interface RuleBlockEntityModifierStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuleBlockEntityModifier]>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType. */
export interface RuleBlockEntityModifierTypeMembers<P /* extends RuleBlockEntityModifier */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type RuleBlockEntityModifierType<P /* extends RuleBlockEntityModifier */ = unknown> = RuleBlockEntityModifierTypeMembers<P>;
export interface RuleBlockEntityModifierTypeStatics {
  readonly APPEND_LOOT: RuleBlockEntityModifierType<AppendLoot>;
  readonly APPEND_STATIC: RuleBlockEntityModifierType<AppendStatic>;
  readonly CLEAR: RuleBlockEntityModifierType<Clear>;
  readonly PASSTHROUGH: RuleBlockEntityModifierType<Passthrough>;
}
