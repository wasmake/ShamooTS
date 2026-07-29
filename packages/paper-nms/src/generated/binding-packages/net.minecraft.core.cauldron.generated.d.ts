// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';

/** JVM interface net.minecraft.core.cauldron.CauldronInteraction. */
export interface CauldronInteractionMembers {
  interact(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player, arg4: j_net_minecraft_world.InteractionHand, arg5: j_net_minecraft_world_item.ItemStack, arg6: j_net_minecraft_core.Direction): j_net_minecraft_world.InteractionResult;
}
export type CauldronInteraction = CauldronInteractionMembers;
export interface CauldronInteractionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CauldronInteraction_InteractionMap]>;
  readonly EMPTY: CauldronInteraction_InteractionMap;
  readonly INTERACTIONS: JavaMap<string, CauldronInteraction_InteractionMap>;
  readonly LAVA: CauldronInteraction_InteractionMap;
  readonly POWDER_SNOW: CauldronInteraction_InteractionMap;
  readonly WATER: CauldronInteraction_InteractionMap;
  addDefaultInteractions(arg0: JavaMap<j_net_minecraft_world_item.Item, CauldronInteraction>): void;
  bootStrap(): void;
  emptyBucket(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_player.Player, arg3: j_net_minecraft_world.InteractionHand, arg4: j_net_minecraft_world_item.ItemStack, arg5: j_net_minecraft_world_level_block_state.BlockState, arg6: j_net_minecraft_sounds.SoundEvent): j_net_minecraft_world.InteractionResult;
  emptyBucket(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_player.Player, arg3: j_net_minecraft_world.InteractionHand, arg4: j_net_minecraft_world_item.ItemStack, arg5: j_net_minecraft_world_level_block_state.BlockState, arg6: j_net_minecraft_sounds.SoundEvent, arg7: j_net_minecraft_core.Direction | null): j_net_minecraft_world.InteractionResult;
  fillBucket(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player, arg4: j_net_minecraft_world.InteractionHand, arg5: j_net_minecraft_world_item.ItemStack, arg6: j_net_minecraft_world_item.ItemStack, arg7: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>, arg8: j_net_minecraft_sounds.SoundEvent): j_net_minecraft_world.InteractionResult;
  fillBucket(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player, arg4: j_net_minecraft_world.InteractionHand, arg5: j_net_minecraft_world_item.ItemStack, arg6: j_net_minecraft_world_item.ItemStack, arg7: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>, arg8: j_net_minecraft_sounds.SoundEvent, arg9: j_net_minecraft_core.Direction | null): j_net_minecraft_world.InteractionResult;
  newInteractionMap(arg0: string): CauldronInteraction_InteractionMap;
}

/** JVM record net.minecraft.core.cauldron.CauldronInteraction$InteractionMap. */
export interface CauldronInteraction_InteractionMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  map(): JavaMap<j_net_minecraft_world_item.Item, CauldronInteraction>;
  name(): string;
  toString(): string;
}
export type CauldronInteraction_InteractionMap = CauldronInteraction_InteractionMapMembers & JavaOpaque<"java.lang.Record">;
export interface CauldronInteraction_InteractionMapStatics {
  new(arg0: string, arg1: JavaMap<j_net_minecraft_world_item.Item, CauldronInteraction>): CauldronInteraction_InteractionMap;
}
