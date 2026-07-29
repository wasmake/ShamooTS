// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_identity from './net.kyori.adventure.identity.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag_resolver from './net.kyori.adventure.text.minimessage.tag.resolver.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_conversations from './org.bukkit.conversations.generated.js';
import type * as j_org_bukkit_permissions from './org.bukkit.permissions.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM interface org.bukkit.command.BlockCommandSender. */
export interface BlockCommandSenderMembers {
  readonly __javaSupertypes?: readonly [CommandSender];
  getBlock(): j_org_bukkit_block.Block;
}
export type BlockCommandSender = BlockCommandSenderMembers & CommandSender;
export interface BlockCommandSenderStatics {
}

/** JVM class org.bukkit.command.BufferedCommandSender. */
export interface BufferedCommandSenderMembers {
  readonly __javaSupertypes?: readonly [MessageCommandSender];
  getBuffer(): string;
  reset(): void;
  sendMessage(arg0: string): void;
}
export type BufferedCommandSender = BufferedCommandSenderMembers & MessageCommandSender;
export interface BufferedCommandSenderStatics {
  new(): BufferedCommandSender;
}

/** JVM abstract org.bukkit.command.Command. */
export interface CommandMembers {
  canBeOverriden(): boolean;
  execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
  getAliases(): JavaList<string>;
  getDescription(): string;
  getLabel(): string;
  getName(): string;
  getPermission(): string | null;
  getPermissionMessage(): string | null;
  getTimingName(): string;
  getUsage(): string;
  isRegistered(): boolean;
  permissionMessage(): j_net_kyori_adventure_text.Component | null;
  permissionMessage(arg0: j_net_kyori_adventure_text.Component | null): void;
  register(arg0: CommandMap): boolean;
  setAliases(arg0: JavaList<string>): Command;
  setDescription(arg0: string): Command;
  setLabel(arg0: string): boolean;
  setName(arg0: string): boolean;
  setPermission(arg0: string | null): void;
  setPermissionMessage(arg0: string | null): Command;
  setUsage(arg0: string): Command;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: CommandSender, arg1: string, arg2: Array<string>): JavaList<string>;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: CommandSender, arg1: string, arg2: Array<string>, arg3: j_org_bukkit.Location | null): JavaList<string>;
  testPermission(arg0: CommandSender): boolean;
  testPermissionSilent(arg0: CommandSender): boolean;
  timings: JavaOpaque<"co.aikar.timings.Timing">;
  toString(): string;
  unregister(arg0: CommandMap): boolean;
}
export type Command = CommandMembers;
export interface CommandStatics {
  broadcastCommandMessage(arg0: CommandSender, arg1: string): void;
  broadcastCommandMessage(arg0: CommandSender, arg1: string, arg2: boolean): void;
  broadcastCommandMessage(arg0: CommandSender, arg1: j_net_kyori_adventure_text.Component): void;
  broadcastCommandMessage(arg0: CommandSender, arg1: j_net_kyori_adventure_text.Component, arg2: boolean): void;
}

/** JVM class org.bukkit.command.CommandException. */
export interface CommandExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type CommandException = CommandExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface CommandExceptionStatics {
  new(): CommandException;
  new(arg0: string): CommandException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): CommandException;
}

/** JVM interface org.bukkit.command.CommandExecutor. */
export interface CommandExecutorMembers {
  onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}
export type CommandExecutor = CommandExecutorMembers;
export interface CommandExecutorStatics {
}

/** JVM interface org.bukkit.command.CommandMap. */
export interface CommandMapMembers {
  clearCommands(): void;
  /** @throws org.bukkit.command.CommandException */
  dispatch(arg0: CommandSender, arg1: string): boolean;
  getCommand(arg0: string): Command | null;
  getKnownCommands(): JavaMap<string, Command>;
  register(arg0: string, arg1: string, arg2: Command): boolean;
  register(arg0: string, arg1: Command): boolean;
  registerAll(arg0: string, arg1: JavaList<Command>): void;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: CommandSender, arg1: string): JavaList<string> | null;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: CommandSender, arg1: string, arg2: j_org_bukkit.Location | null): JavaList<string> | null;
}
export type CommandMap = CommandMapMembers;
export interface CommandMapStatics {
}

/** JVM interface org.bukkit.command.CommandSender. */
export interface CommandSenderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_audience.Audience, j_org_bukkit_permissions.Permissible];
  getName(): string;
  getServer(): j_org_bukkit.Server;
  name(): j_net_kyori_adventure_text.Component;
  sendMessage(arg0: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID"> | null, ...arg1: Array<string>): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_audience.MessageType): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  sendMessage(...arg0: Array<string>): void;
  sendMessage(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendPlainMessage(arg0: string): void;
  sendRichMessage(arg0: string): void;
  sendRichMessage(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): void;
  spigot(): CommandSender_Spigot;
}
export type CommandSender = CommandSenderMembers & j_net_kyori_adventure_audience.Audience & j_org_bukkit_permissions.Permissible;
export interface CommandSenderStatics {
}

/** JVM class org.bukkit.command.CommandSender$Spigot. */
export interface CommandSender_SpigotMembers {
  sendMessage(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID"> | null, ...arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  sendMessage(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
}
export type CommandSender_Spigot = CommandSender_SpigotMembers;
export interface CommandSender_SpigotStatics {
  new(): CommandSender_Spigot;
}

/** JVM interface org.bukkit.command.ConsoleCommandSender. */
export interface ConsoleCommandSenderMembers {
  readonly __javaSupertypes?: readonly [CommandSender, j_org_bukkit_conversations.Conversable];
}
export type ConsoleCommandSender = ConsoleCommandSenderMembers & CommandSender & j_org_bukkit_conversations.Conversable;
export interface ConsoleCommandSenderStatics {
}

/** JVM class org.bukkit.command.FormattedCommandAlias. */
export interface FormattedCommandAliasMembers {
  readonly __javaSupertypes?: readonly [Command];
  execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
  getTimingName(): string;
}
export type FormattedCommandAlias = FormattedCommandAliasMembers & Command;
export interface FormattedCommandAliasStatics {
  new(arg0: string, arg1: Array<string>): FormattedCommandAlias;
}

/** JVM interface org.bukkit.command.MessageCommandSender. */
export interface MessageCommandSenderMembers {
  readonly __javaSupertypes?: readonly [CommandSender];
  addAttachment(arg0: j_org_bukkit_plugin.Plugin): j_org_bukkit_permissions.PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: number): j_org_bukkit_permissions.PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: boolean): j_org_bukkit_permissions.PermissionAttachment;
  addAttachment(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: boolean, arg3: number): j_org_bukkit_permissions.PermissionAttachment;
  getEffectivePermissions(): JavaSet<j_org_bukkit_permissions.PermissionAttachmentInfo>;
  getName(): string;
  getServer(): j_org_bukkit.Server;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: j_org_bukkit_permissions.Permission): boolean;
  isOp(): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: j_org_bukkit_permissions.Permission): boolean;
  name(): j_net_kyori_adventure_text.Component;
  recalculatePermissions(): void;
  removeAttachment(arg0: j_org_bukkit_permissions.PermissionAttachment): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: Array<string>): void;
  sendMessage(arg0: Array<string>): void;
  setOp(arg0: boolean): void;
  spigot(): CommandSender_Spigot;
}
export type MessageCommandSender = MessageCommandSenderMembers & CommandSender;
export interface MessageCommandSenderStatics {
}

/** JVM class org.bukkit.command.MultipleCommandAlias. */
export interface MultipleCommandAliasMembers {
  readonly __javaSupertypes?: readonly [Command];
  execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
  getCommands(): Array<Command>;
}
export type MultipleCommandAlias = MultipleCommandAliasMembers & Command;
export interface MultipleCommandAliasStatics {
  new(arg0: string, arg1: Array<Command>): MultipleCommandAlias;
}

/** JVM class org.bukkit.command.PluginCommand. */
export interface PluginCommandMembers {
  readonly __javaSupertypes?: readonly [Command, PluginIdentifiableCommand];
  execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
  getExecutor(): CommandExecutor;
  getPlugin(): j_org_bukkit_plugin.Plugin;
  getTabCompleter(): TabCompleter | null;
  setExecutor(arg0: CommandExecutor | null): void;
  setTabCompleter(arg0: TabCompleter | null): void;
  /** @throws java.lang.IllegalArgumentException @throws org.bukkit.command.CommandException */
  tabComplete(arg0: CommandSender, arg1: string, arg2: Array<string>): JavaList<string>;
  toString(): string;
}
export type PluginCommand = PluginCommandMembers & Command & PluginIdentifiableCommand;
export interface PluginCommandStatics {
}

/** JVM class org.bukkit.command.PluginCommandYamlParser. */
export interface PluginCommandYamlParserMembers {
}
export type PluginCommandYamlParser = PluginCommandYamlParserMembers;
export interface PluginCommandYamlParserStatics {
  new(): PluginCommandYamlParser;
  parse(arg0: j_org_bukkit_plugin.Plugin): JavaList<Command>;
}

/** JVM interface org.bukkit.command.PluginIdentifiableCommand. */
export interface PluginIdentifiableCommandMembers {
  getPlugin(): j_org_bukkit_plugin.Plugin;
}
export type PluginIdentifiableCommand = PluginIdentifiableCommandMembers;
export interface PluginIdentifiableCommandStatics {
}

/** JVM interface org.bukkit.command.ProxiedCommandSender. */
export interface ProxiedCommandSenderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_audience.ForwardingAudience_Single, CommandSender];
  audience(): j_net_kyori_adventure_audience.Audience;
  getCallee(): CommandSender;
  getCaller(): CommandSender;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_audience.MessageType): void;
}
export type ProxiedCommandSender = ProxiedCommandSenderMembers & j_net_kyori_adventure_audience.ForwardingAudience_Single & CommandSender;
export interface ProxiedCommandSenderStatics {
}

/** JVM interface org.bukkit.command.RemoteConsoleCommandSender. */
export interface RemoteConsoleCommandSenderMembers {
  readonly __javaSupertypes?: readonly [CommandSender];
  getAddress(): JavaOpaque<"java.net.SocketAddress">;
}
export type RemoteConsoleCommandSender = RemoteConsoleCommandSenderMembers & CommandSender;
export interface RemoteConsoleCommandSenderStatics {
}

/** JVM class org.bukkit.command.SimpleCommandMap. */
export interface SimpleCommandMapMembers {
  readonly __javaSupertypes?: readonly [CommandMap];
  clearCommands(): void;
  /** @throws org.bukkit.command.CommandException */
  dispatch(arg0: CommandSender, arg1: string): boolean;
  getCommand(arg0: string): Command | null;
  getCommands(): JavaCollection<Command>;
  getKnownCommands(): JavaMap<string, Command>;
  register(arg0: string, arg1: string, arg2: Command): boolean;
  register(arg0: string, arg1: Command): boolean;
  registerAll(arg0: string, arg1: JavaList<Command>): void;
  registerServerAliases(): void;
  setFallbackCommands(): void;
  tabComplete(arg0: CommandSender, arg1: string): JavaList<string> | null;
  tabComplete(arg0: CommandSender, arg1: string, arg2: j_org_bukkit.Location | null): JavaList<string> | null;
}
export type SimpleCommandMap = SimpleCommandMapMembers & CommandMap;
export interface SimpleCommandMapStatics {
  new(arg0: j_org_bukkit.Server, arg1: JavaMap<string, Command>): SimpleCommandMap;
}

/** JVM interface org.bukkit.command.TabCompleter. */
export interface TabCompleterMembers {
  onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): JavaList<string> | null;
}
export type TabCompleter = TabCompleterMembers;
export interface TabCompleterStatics {
}

/** JVM interface org.bukkit.command.TabExecutor. */
export interface TabExecutorMembers {
  readonly __javaSupertypes?: readonly [CommandExecutor, TabCompleter];
}
export type TabExecutor = TabExecutorMembers & CommandExecutor & TabCompleter;
export interface TabExecutorStatics {
}
