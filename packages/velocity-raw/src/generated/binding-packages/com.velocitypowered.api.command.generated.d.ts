// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_permission from './com.velocitypowered.api.permission.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class com.velocitypowered.api.command.BrigadierCommand. */
export interface BrigadierCommandMembers {
  readonly __javaSupertypes?: readonly [Command];
  getNode(): JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSource]>;
}
export type BrigadierCommand = BrigadierCommandMembers & Command;
export interface BrigadierCommandStatics {
  new(arg0: JavaOpaque<"com.mojang.brigadier.builder.LiteralArgumentBuilder", [CommandSource]>): BrigadierCommand;
  new(arg0: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSource]>): BrigadierCommand;
  readonly FORWARD: -165120983;
  literalArgumentBuilder(arg0: string): JavaOpaque<"com.mojang.brigadier.builder.LiteralArgumentBuilder", [CommandSource]>;
  requiredArgumentBuilder<T>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>): JavaOpaque<"com.mojang.brigadier.builder.RequiredArgumentBuilder", [CommandSource, T]>;
}

/** JVM interface com.velocitypowered.api.command.Command. */
export interface CommandMembers {
}
export type Command = CommandMembers;
export interface CommandStatics {
}

/** JVM interface com.velocitypowered.api.command.CommandInvocation. */
export interface CommandInvocationMembers<T = unknown> {
  arguments(): T;
  source(): CommandSource;
}
export type CommandInvocation<T = unknown> = CommandInvocationMembers<T>;
export interface CommandInvocationStatics {
}

/** JVM interface com.velocitypowered.api.command.CommandManager. */
export interface CommandManagerMembers {
  executeAsync(arg0: CommandSource, arg1: string): PromiseLike<boolean>;
  executeImmediatelyAsync(arg0: CommandSource, arg1: string): PromiseLike<boolean>;
  getAliases(): JavaCollection<string>;
  getCommandMeta(arg0: string): CommandMeta | null;
  hasCommand(arg0: string): boolean;
  hasCommand(arg0: string, arg1: CommandSource): boolean;
  metaBuilder(arg0: BrigadierCommand): CommandMeta_Builder;
  metaBuilder(arg0: string): CommandMeta_Builder;
  offerBrigadierSuggestions(arg0: CommandSource, arg1: string): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  offerSuggestions(arg0: CommandSource, arg1: string): PromiseLike<JavaList<string>>;
  register(arg0: BrigadierCommand): void;
  register(arg0: CommandMeta, arg1: Command): void;
  register(arg0: string, arg1: Command, ...arg2: Array<string>): void;
  unregister(arg0: CommandMeta): void;
  unregister(arg0: string): void;
}
export type CommandManager = CommandManagerMembers;
export interface CommandManagerStatics {
}

/** JVM interface com.velocitypowered.api.command.CommandMeta. */
export interface CommandMetaMembers {
  getAliases(): JavaCollection<string>;
  getHints(): JavaCollection<JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [CommandSource]>>;
  getPlugin(): object | null;
}
export type CommandMeta = CommandMetaMembers;
export interface CommandMetaStatics {
}

/** JVM interface com.velocitypowered.api.command.CommandMeta$Builder. */
export interface CommandMeta_BuilderMembers {
  aliases(...arg0: Array<string>): CommandMeta_Builder;
  build(): CommandMeta;
  hint(arg0: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [CommandSource]>): CommandMeta_Builder;
  plugin(arg0: object): CommandMeta_Builder;
}
export type CommandMeta_Builder = CommandMeta_BuilderMembers;
export interface CommandMeta_BuilderStatics {
}

/** Live JVM enum com.velocitypowered.api.command.CommandResult; constants are host handles, not strings. */
export type CommandResult = JavaEnum<"com.velocitypowered.api.command.CommandResult", "EXCEPTION" | "EXECUTED" | "FORWARDED" | "SYNTAX_ERROR"> & CommandResultMembers;
export interface CommandResultMembers {
}
export interface CommandResultStatics {
  readonly EXCEPTION: CommandResult;
  readonly EXECUTED: CommandResult;
  readonly FORWARDED: CommandResult;
  readonly SYNTAX_ERROR: CommandResult;
  valueOf(arg0: string): CommandResult;
  values(): Array<CommandResult>;
}

/** JVM interface com.velocitypowered.api.command.CommandSource. */
export interface CommandSourceMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_permission.PermissionSubject, j_net_kyori_adventure_audience.Audience];
  sendPlainMessage(arg0: string): void;
  sendRichMessage(arg0: string): void;
  sendRichMessage(arg0: string, ...arg1: Array<JavaOpaque<"net.kyori.adventure.text.minimessage.tag.resolver.TagResolver">>): void;
}
export type CommandSource = CommandSourceMembers & j_com_velocitypowered_api_permission.PermissionSubject & j_net_kyori_adventure_audience.Audience;
export interface CommandSourceStatics {
}

/** JVM interface com.velocitypowered.api.command.InvocableCommand. */
export interface InvocableCommandMembers<I /* extends CommandInvocation<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [Command];
  execute(arg0: I): void;
  hasPermission(arg0: I): boolean;
  suggest(arg0: I): JavaList<string>;
  suggestAsync(arg0: I): PromiseLike<JavaList<string>>;
}
export type InvocableCommand<I /* extends CommandInvocation<object> */ = unknown> = InvocableCommandMembers<I> & Command;
export interface InvocableCommandStatics {
}

/** JVM interface com.velocitypowered.api.command.RawCommand. */
export interface RawCommandMembers {
  readonly __javaSupertypes?: readonly [InvocableCommand<RawCommand_Invocation>];
}
export type RawCommand = RawCommandMembers & InvocableCommand<RawCommand_Invocation>;
export interface RawCommandStatics {
}

/** JVM interface com.velocitypowered.api.command.RawCommand$Invocation. */
export interface RawCommand_InvocationMembers {
  readonly __javaSupertypes?: readonly [CommandInvocation<string>];
  alias(): string;
}
export type RawCommand_Invocation = RawCommand_InvocationMembers & CommandInvocation<string>;
export interface RawCommand_InvocationStatics {
}

/** JVM interface com.velocitypowered.api.command.SimpleCommand. */
export interface SimpleCommandMembers {
  readonly __javaSupertypes?: readonly [InvocableCommand<SimpleCommand_Invocation>];
}
export type SimpleCommand = SimpleCommandMembers & InvocableCommand<SimpleCommand_Invocation>;
export interface SimpleCommandStatics {
}

/** JVM interface com.velocitypowered.api.command.SimpleCommand$Invocation. */
export interface SimpleCommand_InvocationMembers {
  readonly __javaSupertypes?: readonly [CommandInvocation<Array<string>>];
  alias(): string;
}
export type SimpleCommand_Invocation = SimpleCommand_InvocationMembers & CommandInvocation<Array<string>>;
export interface SimpleCommand_InvocationStatics {
}

/** JVM class com.velocitypowered.api.command.VelocityBrigadierMessage. */
export interface VelocityBrigadierMessageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.Message">, j_net_kyori_adventure_text.ComponentLike];
  asComponent(): j_net_kyori_adventure_text.Component;
  getString(): string;
}
export type VelocityBrigadierMessage = VelocityBrigadierMessageMembers & JavaOpaque<"com.mojang.brigadier.Message"> & j_net_kyori_adventure_text.ComponentLike;
export interface VelocityBrigadierMessageStatics {
  tooltip(arg0: j_net_kyori_adventure_text.Component): VelocityBrigadierMessage;
}
