// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_server_dedicated from './net.minecraft.server.dedicated.generated.js';
import type * as j_net_minecraft_server_rcon from './net.minecraft.server.rcon.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';

/** JVM class org.bukkit.craftbukkit.command.BukkitCommandWrapper. */
export interface BukkitCommandWrapperMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.Command", [j_net_minecraft_commands.CommandSourceStack]>, JavaPredicate<j_net_minecraft_commands.CommandSourceStack>, JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.CommandSourceStack]>, JavaOpaque<"com.destroystokyo.paper.brigadier.BukkitBrigadierCommand", [j_net_minecraft_commands.CommandSourceStack]>];
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getSuggestions(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaOpaque<"com.mojang.brigadier.tree.LiteralCommandNode", [j_net_minecraft_commands.CommandSourceStack]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  run(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): number;
  test(arg0: j_net_minecraft_commands.CommandSourceStack): boolean;
}
export type BukkitCommandWrapper = BukkitCommandWrapperMembers & JavaOpaque<"com.mojang.brigadier.Command", [j_net_minecraft_commands.CommandSourceStack]> & JavaPredicate<j_net_minecraft_commands.CommandSourceStack> & JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.CommandSourceStack]> & JavaOpaque<"com.destroystokyo.paper.brigadier.BukkitBrigadierCommand", [j_net_minecraft_commands.CommandSourceStack]>;
export interface BukkitCommandWrapperStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: JavaOpaque<"org.bukkit.command.Command">): BukkitCommandWrapper;
}

/** JVM class org.bukkit.craftbukkit.command.ConsoleCommandCompleter. */
export interface ConsoleCommandCompleterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.jline.reader.Completer">];
  complete(arg0: JavaOpaque<"org.jline.reader.LineReader">, arg1: JavaOpaque<"org.jline.reader.ParsedLine">, arg2: JavaList<JavaOpaque<"org.jline.reader.Candidate">>): void;
}
export type ConsoleCommandCompleter = ConsoleCommandCompleterMembers & JavaOpaque<"org.jline.reader.Completer">;
export interface ConsoleCommandCompleterStatics {
  new(arg0: j_net_minecraft_server_dedicated.DedicatedServer): ConsoleCommandCompleter;
}

/** JVM class org.bukkit.craftbukkit.command.CraftBlockCommandSender. */
export interface CraftBlockCommandSenderMembers {
  readonly __javaSupertypes?: readonly [ServerCommandSender, JavaOpaque<"org.bukkit.command.BlockCommandSender">];
  getBlock(): JavaOpaque<"org.bukkit.block.Block">;
  getName(): string;
  getWrapper(): j_net_minecraft_commands.CommandSourceStack;
  isOp(): boolean;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  sendMessage(arg0: string): void;
  sendMessage(arg0: JavaOpaque<"net.kyori.adventure.identity.Identity">, arg1: JavaOpaque<"net.kyori.adventure.text.Component">, arg2: JavaOpaque<"net.kyori.adventure.audience.MessageType">): void;
  sendMessage(...arg0: Array<string>): void;
  setOp(arg0: boolean): void;
}
export type CraftBlockCommandSender = CraftBlockCommandSenderMembers & ServerCommandSender & JavaOpaque<"org.bukkit.command.BlockCommandSender">;
export interface CraftBlockCommandSenderStatics {
  new(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_world_level_block_entity.BlockEntity): CraftBlockCommandSender;
}

/** JVM class org.bukkit.craftbukkit.command.CraftCommandMap. */
export interface CraftCommandMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.command.SimpleCommandMap">];
  getKnownCommands(): JavaMap<string, JavaOpaque<"org.bukkit.command.Command">>;
}
export type CraftCommandMap = CraftCommandMapMembers & JavaOpaque<"org.bukkit.command.SimpleCommandMap">;
export interface CraftCommandMapStatics {
  new(arg0: JavaOpaque<"org.bukkit.Server">): CraftCommandMap;
}

/** JVM class org.bukkit.craftbukkit.command.CraftConsoleCommandSender. */
export interface CraftConsoleCommandSenderMembers {
  readonly __javaSupertypes?: readonly [ServerCommandSender, JavaOpaque<"org.bukkit.command.ConsoleCommandSender">];
  abandonConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">): void;
  abandonConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">, arg1: JavaOpaque<"org.bukkit.conversations.ConversationAbandonedEvent">): void;
  acceptConversationInput(arg0: string): void;
  beginConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">): boolean;
  getName(): string;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isConversing(): boolean;
  isOp(): boolean;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  sendMessage(arg0: string): void;
  sendMessage(arg0: JavaOpaque<"net.kyori.adventure.identity.Identity">, arg1: JavaOpaque<"net.kyori.adventure.text.Component">, arg2: JavaOpaque<"net.kyori.adventure.audience.MessageType">): void;
  sendMessage(...arg0: Array<string>): void;
  sendRawMessage(arg0: string): void;
  sendRawMessage(arg0: JavaOpaque<"java.util.UUID">, arg1: string): void;
  setOp(arg0: boolean): void;
}
export type CraftConsoleCommandSender = CraftConsoleCommandSenderMembers & ServerCommandSender & JavaOpaque<"org.bukkit.command.ConsoleCommandSender">;
export interface CraftConsoleCommandSenderStatics {
}

/** JVM class org.bukkit.craftbukkit.command.CraftRemoteConsoleCommandSender. */
export interface CraftRemoteConsoleCommandSenderMembers {
  readonly __javaSupertypes?: readonly [ServerCommandSender, JavaOpaque<"org.bukkit.command.RemoteConsoleCommandSender">];
  getAddress(): JavaOpaque<"java.net.SocketAddress">;
  getListener(): j_net_minecraft_server_rcon.RconConsoleSource;
  getName(): string;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isOp(): boolean;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  sendMessage(arg0: string): void;
  sendMessage(...arg0: Array<string>): void;
  setOp(arg0: boolean): void;
}
export type CraftRemoteConsoleCommandSender = CraftRemoteConsoleCommandSenderMembers & ServerCommandSender & JavaOpaque<"org.bukkit.command.RemoteConsoleCommandSender">;
export interface CraftRemoteConsoleCommandSenderStatics {
  new(arg0: j_net_minecraft_server_rcon.RconConsoleSource): CraftRemoteConsoleCommandSender;
}

/** JVM class org.bukkit.craftbukkit.command.ProxiedNativeCommandSender. */
export interface ProxiedNativeCommandSenderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.command.ProxiedCommandSender">];
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean, arg3: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  getCallee(): JavaOpaque<"org.bukkit.command.CommandSender">;
  getCaller(): JavaOpaque<"org.bukkit.command.CommandSender">;
  getEffectivePermissions(): JavaSet<JavaOpaque<"org.bukkit.permissions.PermissionAttachmentInfo">>;
  getHandle(): j_net_minecraft_commands.CommandSourceStack;
  getName(): string;
  getServer(): JavaOpaque<"org.bukkit.Server">;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isOp(): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  recalculatePermissions(): void;
  removeAttachment(arg0: JavaOpaque<"org.bukkit.permissions.PermissionAttachment">): void;
  sendMessage(arg0: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, arg1: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<string>): void;
  sendMessage(...arg0: Array<string>): void;
  setOp(arg0: boolean): void;
  spigot(): JavaOpaque<"org.bukkit.command.CommandSender$Spigot">;
}
export type ProxiedNativeCommandSender = ProxiedNativeCommandSenderMembers & JavaOpaque<"org.bukkit.command.ProxiedCommandSender">;
export interface ProxiedNativeCommandSenderStatics {
  new(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: JavaOpaque<"org.bukkit.command.CommandSender">, arg2: JavaOpaque<"org.bukkit.command.CommandSender">): ProxiedNativeCommandSender;
}

/** JVM abstract org.bukkit.craftbukkit.command.ServerCommandSender. */
export interface ServerCommandSenderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.command.CommandSender">];
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean, arg3: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  getEffectivePermissions(): JavaSet<JavaOpaque<"org.bukkit.permissions.PermissionAttachmentInfo">>;
  getServer(): JavaOpaque<"org.bukkit.Server">;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isPlayer(): boolean;
  readonly perm: JavaOpaque<"org.bukkit.permissions.PermissibleBase">;
  pointers(): JavaOpaque<"net.kyori.adventure.pointer.Pointers">;
  recalculatePermissions(): void;
  removeAttachment(arg0: JavaOpaque<"org.bukkit.permissions.PermissionAttachment">): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, arg1: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<string>): void;
  spigot(): JavaOpaque<"org.bukkit.command.CommandSender$Spigot">;
}
export type ServerCommandSender = ServerCommandSenderMembers & JavaOpaque<"org.bukkit.command.CommandSender">;
export interface ServerCommandSenderStatics {
}

/** JVM class org.bukkit.craftbukkit.command.VanillaCommandWrapper. */
export interface VanillaCommandWrapperMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.command.defaults.BukkitCommand">];
  canBeOverriden(): boolean;
  execute(arg0: JavaOpaque<"org.bukkit.command.CommandSender">, arg1: string, arg2: Array<string>): boolean;
  readonly helpCommandNamespace: string;
  isRegistered(): boolean;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: JavaOpaque<"org.bukkit.command.CommandSender">, arg1: string, arg2: Array<string>, arg3: JavaOpaque<"org.bukkit.Location">): JavaList<string>;
  readonly vanillaCommand: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [j_net_minecraft_commands.CommandSourceStack]>;
}
export type VanillaCommandWrapper = VanillaCommandWrapperMembers & JavaOpaque<"org.bukkit.command.defaults.BukkitCommand">;
export interface VanillaCommandWrapperStatics {
  new(arg0: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [j_net_minecraft_commands.CommandSourceStack]>): VanillaCommandWrapper;
  new(arg0: string, arg1: string, arg2: string, arg3: JavaList<string>, arg4: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [j_net_minecraft_commands.CommandSourceStack]>, arg5: string): VanillaCommandWrapper;
  getListener(arg0: JavaOpaque<"org.bukkit.command.CommandSender">): j_net_minecraft_commands.CommandSourceStack;
  getPermission(arg0: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [j_net_minecraft_commands.CommandSourceStack]>): string;
}
