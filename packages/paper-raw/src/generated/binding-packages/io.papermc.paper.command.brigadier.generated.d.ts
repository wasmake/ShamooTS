// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_io_papermc_paper_plugin_lifecycle_event_registrar from './io.papermc.paper.plugin.lifecycle.event.registrar.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_serializer from './net.kyori.adventure.text.serializer.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.command.brigadier.BasicCommand. */
export interface BasicCommandMembers {
  canUse(arg0: j_org_bukkit_command.CommandSender): boolean;
  execute(arg0: CommandSourceStack, arg1: Array<string>): void;
  permission(): string | null;
  suggest(arg0: CommandSourceStack, arg1: Array<string>): JavaCollection<string>;
}
export type BasicCommand = BasicCommandMembers;
export interface BasicCommandStatics {
}

/** Live JVM enum io.papermc.paper.command.brigadier.CommandRegistrationFlag; constants are host handles, not strings. */
export type CommandRegistrationFlag = JavaEnum<"io.papermc.paper.command.brigadier.CommandRegistrationFlag", "FLATTEN_ALIASES" | "SERVER_ONLY"> & CommandRegistrationFlagMembers;
export interface CommandRegistrationFlagMembers {
}
export interface CommandRegistrationFlagStatics {
  readonly FLATTEN_ALIASES: CommandRegistrationFlag;
  readonly SERVER_ONLY: CommandRegistrationFlag;
  valueOf(arg0: string): CommandRegistrationFlag;
  values(): Array<CommandRegistrationFlag>;
}

/** JVM interface io.papermc.paper.command.brigadier.Commands. */
export interface CommandsMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar];
  getDispatcher(): JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [CommandSourceStack]>;
  register(arg0: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSourceStack]>): JavaSet<string>;
  register(arg0: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSourceStack]>, arg1: string): JavaSet<string> | null;
  register(arg0: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSourceStack]>, arg1: string, arg2: JavaCollection<string>): JavaSet<string> | null;
  register(arg0: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSourceStack]>, arg1: JavaCollection<string>): JavaSet<string>;
  register(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSourceStack]>, arg2: string, arg3: JavaCollection<string>): JavaSet<string> | null;
  register(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: string, arg2: string, arg3: JavaCollection<string>, arg4: BasicCommand): JavaSet<string> | null;
  register(arg0: string, arg1: BasicCommand): JavaSet<string>;
  register(arg0: string, arg1: string, arg2: BasicCommand): JavaSet<string> | null;
  register(arg0: string, arg1: string, arg2: JavaCollection<string>, arg3: BasicCommand): JavaSet<string> | null;
  register(arg0: string, arg1: JavaCollection<string>, arg2: BasicCommand): JavaSet<string>;
  registerWithFlags(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta, arg1: JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [CommandSourceStack]>, arg2: string, arg3: JavaCollection<string>, arg4: JavaSet<CommandRegistrationFlag>): JavaSet<string> | null;
}
export type Commands = CommandsMembers & j_io_papermc_paper_plugin_lifecycle_event_registrar.Registrar;
export interface CommandsStatics {
  argument<T>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>): JavaOpaque<"com.mojang.brigadier.builder.RequiredArgumentBuilder", [CommandSourceStack, T]>;
  literal(arg0: string): JavaOpaque<"com.mojang.brigadier.builder.LiteralArgumentBuilder", [CommandSourceStack]>;
  restricted(arg0: JavaPredicate<CommandSourceStack>): JavaPredicate<CommandSourceStack>;
}

/** JVM interface io.papermc.paper.command.brigadier.CommandSourceStack. */
export interface CommandSourceStackMembers {
  getExecutor(): j_org_bukkit_entity.Entity | null;
  getLocation(): j_org_bukkit.Location;
  getSender(): j_org_bukkit_command.CommandSender;
  withExecutor(arg0: j_org_bukkit_entity.Entity): CommandSourceStack;
  withLocation(arg0: j_org_bukkit.Location): CommandSourceStack;
}
export type CommandSourceStack = CommandSourceStackMembers;
export interface CommandSourceStackStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.MessageComponentSerializer. */
export interface MessageComponentSerializerMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_serializer.ComponentSerializer<j_net_kyori_adventure_text.Component, j_net_kyori_adventure_text.Component, JavaOpaque<"com.mojang.brigadier.Message">>];
}
export type MessageComponentSerializer = MessageComponentSerializerMembers & j_net_kyori_adventure_text_serializer.ComponentSerializer<j_net_kyori_adventure_text.Component, j_net_kyori_adventure_text.Component, JavaOpaque<"com.mojang.brigadier.Message">>;
export interface MessageComponentSerializerStatics {
  message(): MessageComponentSerializer;
}
