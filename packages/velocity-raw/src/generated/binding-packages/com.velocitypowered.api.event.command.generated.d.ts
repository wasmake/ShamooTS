// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_command from './com.velocitypowered.api.command.generated.js';
import type * as j_com_velocitypowered_api_event from './com.velocitypowered.api.event.generated.js';
import type * as j_com_velocitypowered_api_proxy from './com.velocitypowered.api.proxy.generated.js';

/** JVM class com.velocitypowered.api.event.command.CommandExecuteEvent. */
export interface CommandExecuteEventMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent<CommandExecuteEvent_CommandResult>];
  getCommand(): string;
  getCommandSource(): j_com_velocitypowered_api_command.CommandSource;
  getInvocationInfo(): CommandExecuteEvent_InvocationInfo;
  getResult(): CommandExecuteEvent_CommandResult;
  setResult(arg0: CommandExecuteEvent_CommandResult): void;
  toString(): string;
}
export type CommandExecuteEvent = CommandExecuteEventMembers & j_com_velocitypowered_api_event.ResultedEvent<CommandExecuteEvent_CommandResult>;
export interface CommandExecuteEventStatics {
  new(arg0: j_com_velocitypowered_api_command.CommandSource, arg1: string): CommandExecuteEvent;
  new(arg0: j_com_velocitypowered_api_command.CommandSource, arg1: string, arg2: CommandExecuteEvent_InvocationInfo): CommandExecuteEvent;
}

/** JVM class com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult. */
export interface CommandExecuteEvent_CommandResultMembers {
  readonly __javaSupertypes?: readonly [j_com_velocitypowered_api_event.ResultedEvent_Result];
  getCommand(): JavaOptional<string>;
  isAllowed(): boolean;
  isForwardToServer(): boolean;
  toString(): string;
}
export type CommandExecuteEvent_CommandResult = CommandExecuteEvent_CommandResultMembers & j_com_velocitypowered_api_event.ResultedEvent_Result;
export interface CommandExecuteEvent_CommandResultStatics {
  allowed(): CommandExecuteEvent_CommandResult;
  command(arg0: string): CommandExecuteEvent_CommandResult;
  denied(): CommandExecuteEvent_CommandResult;
  forwardToServer(): CommandExecuteEvent_CommandResult;
  forwardToServer(arg0: string): CommandExecuteEvent_CommandResult;
}

/** JVM record com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo. */
export interface CommandExecuteEvent_InvocationInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  signedState(): CommandExecuteEvent_SignedState;
  source(): CommandExecuteEvent_Source;
  toString(): string;
}
export type CommandExecuteEvent_InvocationInfo = CommandExecuteEvent_InvocationInfoMembers & JavaOpaque<"java.lang.Record">;
export interface CommandExecuteEvent_InvocationInfoStatics {
  new(arg0: CommandExecuteEvent_SignedState, arg1: CommandExecuteEvent_Source): CommandExecuteEvent_InvocationInfo;
}

/** Live JVM enum com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState; constants are host handles, not strings. */
export type CommandExecuteEvent_SignedState = JavaEnum<"com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState", "SIGNED_WITHOUT_ARGS" | "SIGNED_WITH_ARGS" | "UNSIGNED" | "UNSUPPORTED"> & CommandExecuteEvent_SignedStateMembers;
export interface CommandExecuteEvent_SignedStateMembers {
}
export interface CommandExecuteEvent_SignedStateStatics {
  readonly SIGNED_WITHOUT_ARGS: CommandExecuteEvent_SignedState;
  readonly SIGNED_WITH_ARGS: CommandExecuteEvent_SignedState;
  readonly UNSIGNED: CommandExecuteEvent_SignedState;
  readonly UNSUPPORTED: CommandExecuteEvent_SignedState;
  valueOf(arg0: string): CommandExecuteEvent_SignedState;
  values(): Array<CommandExecuteEvent_SignedState>;
}

/** Live JVM enum com.velocitypowered.api.event.command.CommandExecuteEvent$Source; constants are host handles, not strings. */
export type CommandExecuteEvent_Source = JavaEnum<"com.velocitypowered.api.event.command.CommandExecuteEvent$Source", "API" | "PLAYER"> & CommandExecuteEvent_SourceMembers;
export interface CommandExecuteEvent_SourceMembers {
}
export interface CommandExecuteEvent_SourceStatics {
  readonly API: CommandExecuteEvent_Source;
  readonly PLAYER: CommandExecuteEvent_Source;
  valueOf(arg0: string): CommandExecuteEvent_Source;
  values(): Array<CommandExecuteEvent_Source>;
}

/** JVM class com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent. */
export interface PlayerAvailableCommandsEventMembers {
  getPlayer(): j_com_velocitypowered_api_proxy.Player;
  getRootNode(): JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [object]>;
}
export type PlayerAvailableCommandsEvent = PlayerAvailableCommandsEventMembers;
export interface PlayerAvailableCommandsEventStatics {
  new(arg0: j_com_velocitypowered_api_proxy.Player, arg1: JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [object]>): PlayerAvailableCommandsEvent;
}

/** JVM class com.velocitypowered.api.event.command.PostCommandInvocationEvent. */
export interface PostCommandInvocationEventMembers {
  getCommand(): string;
  getCommandSource(): j_com_velocitypowered_api_command.CommandSource;
  getResult(): j_com_velocitypowered_api_command.CommandResult;
  toString(): string;
}
export type PostCommandInvocationEvent = PostCommandInvocationEventMembers;
export interface PostCommandInvocationEventStatics {
  new(arg0: j_com_velocitypowered_api_command.CommandSource, arg1: string, arg2: j_com_velocitypowered_api_command.CommandResult): PostCommandInvocationEvent;
}
