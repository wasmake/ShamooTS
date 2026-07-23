// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_brigadier from './com.destroystokyo.paper.brigadier.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_event_server from './org.bukkit.event.server.generated.js';

/** JVM class com.destroystokyo.paper.event.brigadier.AsyncPlayerSendCommandsEvent. */
export interface AsyncPlayerSendCommandsEventMembers<S /* extends j_io_papermc_paper_command_brigadier.CommandSourceStack */ = unknown> {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getCommandNode(): JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  hasFiredAsync(): boolean;
}
export type AsyncPlayerSendCommandsEvent<S /* extends j_io_papermc_paper_command_brigadier.CommandSourceStack */ = unknown> = AsyncPlayerSendCommandsEventMembers<S> & j_org_bukkit_event_player.PlayerEvent;
export interface AsyncPlayerSendCommandsEventStatics {
  new<S /* extends j_io_papermc_paper_command_brigadier.CommandSourceStack */>(arg0: j_org_bukkit_entity.Player, arg1: JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>, arg2: boolean): AsyncPlayerSendCommandsEvent<S>;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.brigadier.AsyncPlayerSendSuggestionsEvent. */
export interface AsyncPlayerSendSuggestionsEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getBuffer(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSuggestions(): JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setSuggestions(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">): void;
}
export type AsyncPlayerSendSuggestionsEvent = AsyncPlayerSendSuggestionsEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface AsyncPlayerSendSuggestionsEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">, arg2: string): AsyncPlayerSendSuggestionsEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.brigadier.CommandRegisteredEvent. */
export interface CommandRegisteredEventMembers<S /* extends j_com_destroystokyo_paper_brigadier.BukkitBrigadierCommandSource */ = unknown> {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_server.ServerEvent, j_org_bukkit_event.Cancellable];
  getBrigadierCommand(): j_com_destroystokyo_paper_brigadier.BukkitBrigadierCommand<S>;
  getCommand(): j_org_bukkit_command.Command;
  getCommandLabel(): string;
  getDefaultArgs(): JavaOpaque<"com.mojang.brigadier.tree.ArgumentCommandNode", [S, string]>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLiteral(): JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [S]>;
  getRoot(): JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>;
  isCancelled(): boolean;
  isRawCommand(): boolean;
  setCancelled(arg0: boolean): void;
  setLiteral(arg0: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [S]>): void;
  setRawCommand(arg0: boolean): void;
}
export type CommandRegisteredEvent<S /* extends j_com_destroystokyo_paper_brigadier.BukkitBrigadierCommandSource */ = unknown> = CommandRegisteredEventMembers<S> & j_org_bukkit_event_server.ServerEvent & j_org_bukkit_event.Cancellable;
export interface CommandRegisteredEventStatics {
  new<S /* extends j_com_destroystokyo_paper_brigadier.BukkitBrigadierCommandSource */>(arg0: string, arg1: j_com_destroystokyo_paper_brigadier.BukkitBrigadierCommand<S>, arg2: j_org_bukkit_command.Command, arg3: JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>, arg4: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [S]>, arg5: JavaOpaque<"com.mojang.brigadier.tree.ArgumentCommandNode", [S, string]>): CommandRegisteredEvent<S>;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
