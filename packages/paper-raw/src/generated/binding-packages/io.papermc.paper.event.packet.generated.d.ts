// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block_sign from './org.bukkit.block.sign.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_event_world from './org.bukkit.event.world.generated.js';

/** JVM class io.papermc.paper.event.packet.ClientTickEndEvent. */
export interface ClientTickEndEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ClientTickEndEvent = ClientTickEndEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface ClientTickEndEventStatics {
  new(arg0: j_org_bukkit_entity.Player): ClientTickEndEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.packet.PlayerChunkLoadEvent. */
export interface PlayerChunkLoadEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.ChunkEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player;
}
export type PlayerChunkLoadEvent = PlayerChunkLoadEventMembers & j_org_bukkit_event_world.ChunkEvent;
export interface PlayerChunkLoadEventStatics {
  new(arg0: j_org_bukkit.Chunk, arg1: j_org_bukkit_entity.Player): PlayerChunkLoadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.packet.PlayerChunkUnloadEvent. */
export interface PlayerChunkUnloadEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.ChunkEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player;
}
export type PlayerChunkUnloadEvent = PlayerChunkUnloadEventMembers & j_org_bukkit_event_world.ChunkEvent;
export interface PlayerChunkUnloadEventStatics {
  new(arg0: j_org_bukkit.Chunk, arg1: j_org_bukkit_entity.Player): PlayerChunkUnloadEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.packet.UncheckedSignChangeEvent. */
export interface UncheckedSignChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getEditedBlockPosition(): j_io_papermc_paper_math.BlockPosition;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSide(): j_org_bukkit_block_sign.Side;
  isCancelled(): boolean;
  lines(): JavaList<j_net_kyori_adventure_text.Component>;
  setCancelled(arg0: boolean): void;
}
export type UncheckedSignChangeEvent = UncheckedSignChangeEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface UncheckedSignChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_io_papermc_paper_math.BlockPosition, arg2: j_org_bukkit_block_sign.Side, arg3: JavaList<j_net_kyori_adventure_text.Component>): UncheckedSignChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
