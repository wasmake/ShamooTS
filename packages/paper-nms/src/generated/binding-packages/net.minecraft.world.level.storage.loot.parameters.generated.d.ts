// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util_context from './net.minecraft.util.context.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.level.storage.loot.parameters.LootContextParams. */
export interface LootContextParamsMembers {
}
export type LootContextParams = LootContextParamsMembers;
export interface LootContextParamsStatics {
  new(): LootContextParams;
  readonly ATTACKING_ENTITY: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_entity.Entity>;
  readonly BLOCK_ENTITY: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_level_block_entity.BlockEntity>;
  readonly BLOCK_STATE: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_level_block_state.BlockState>;
  readonly DAMAGE_SOURCE: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_damagesource.DamageSource>;
  readonly DIRECT_ATTACKING_ENTITY: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_entity.Entity>;
  readonly ENCHANTMENT_ACTIVE: j_net_minecraft_util_context.ContextKey<boolean>;
  readonly ENCHANTMENT_LEVEL: j_net_minecraft_util_context.ContextKey<number>;
  readonly EXPLOSION_RADIUS: j_net_minecraft_util_context.ContextKey<number>;
  readonly LAST_DAMAGE_PLAYER: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_entity_player.Player>;
  readonly ORIGIN: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_phys.Vec3>;
  readonly THIS_ENTITY: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_entity.Entity>;
  readonly TOOL: j_net_minecraft_util_context.ContextKey<j_net_minecraft_world_item.ItemStack>;
}

/** JVM class net.minecraft.world.level.storage.loot.parameters.LootContextParamSets. */
export interface LootContextParamSetsMembers {
}
export type LootContextParamSets = LootContextParamSetsMembers;
export interface LootContextParamSetsStatics {
  new(): LootContextParamSets;
  readonly ADVANCEMENT_ENTITY: j_net_minecraft_util_context.ContextKeySet;
  readonly ADVANCEMENT_LOCATION: j_net_minecraft_util_context.ContextKeySet;
  readonly ADVANCEMENT_REWARD: j_net_minecraft_util_context.ContextKeySet;
  readonly ALL_PARAMS: j_net_minecraft_util_context.ContextKeySet;
  readonly ARCHAEOLOGY: j_net_minecraft_util_context.ContextKeySet;
  readonly BLOCK: j_net_minecraft_util_context.ContextKeySet;
  readonly BLOCK_USE: j_net_minecraft_util_context.ContextKeySet;
  readonly CHEST: j_net_minecraft_util_context.ContextKeySet;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_util_context.ContextKeySet]>;
  readonly COMMAND: j_net_minecraft_util_context.ContextKeySet;
  readonly EMPTY: j_net_minecraft_util_context.ContextKeySet;
  readonly ENCHANTED_DAMAGE: j_net_minecraft_util_context.ContextKeySet;
  readonly ENCHANTED_ENTITY: j_net_minecraft_util_context.ContextKeySet;
  readonly ENCHANTED_ITEM: j_net_minecraft_util_context.ContextKeySet;
  readonly ENCHANTED_LOCATION: j_net_minecraft_util_context.ContextKeySet;
  readonly ENTITY: j_net_minecraft_util_context.ContextKeySet;
  readonly EQUIPMENT: j_net_minecraft_util_context.ContextKeySet;
  readonly FISHING: j_net_minecraft_util_context.ContextKeySet;
  readonly GIFT: j_net_minecraft_util_context.ContextKeySet;
  readonly HIT_BLOCK: j_net_minecraft_util_context.ContextKeySet;
  readonly PIGLIN_BARTER: j_net_minecraft_util_context.ContextKeySet;
  readonly SELECTOR: j_net_minecraft_util_context.ContextKeySet;
  readonly SHEARING: j_net_minecraft_util_context.ContextKeySet;
  readonly VAULT: j_net_minecraft_util_context.ContextKeySet;
}
