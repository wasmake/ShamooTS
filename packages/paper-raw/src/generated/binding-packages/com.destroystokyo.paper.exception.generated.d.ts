// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';
import type * as j_org_bukkit_scheduler from './org.bukkit.scheduler.generated.js';

/** JVM class com.destroystokyo.paper.exception.ServerCommandException. */
export interface ServerCommandExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerException];
  getArguments(): Array<string>;
  getCommand(): j_org_bukkit_command.Command;
  getCommandSender(): j_org_bukkit_command.CommandSender;
}
export type ServerCommandException = ServerCommandExceptionMembers & ServerException;
export interface ServerCommandExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_command.Command, arg3: j_org_bukkit_command.CommandSender, arg4: Array<string>): ServerCommandException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_command.Command, arg2: j_org_bukkit_command.CommandSender, arg3: Array<string>): ServerCommandException;
}

/** JVM class com.destroystokyo.paper.exception.ServerEventException. */
export interface ServerEventExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerPluginException];
  getEvent(): j_org_bukkit_event.Event;
  getListener(): j_org_bukkit_event.Listener;
}
export type ServerEventException = ServerEventExceptionMembers & ServerPluginException;
export interface ServerEventExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_plugin.Plugin, arg3: j_org_bukkit_event.Listener, arg4: j_org_bukkit_event.Event): ServerEventException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_plugin.Plugin, arg2: j_org_bukkit_event.Listener, arg3: j_org_bukkit_event.Event): ServerEventException;
}

/** JVM class com.destroystokyo.paper.exception.ServerException. */
export interface ServerExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
}
export type ServerException = ServerExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface ServerExceptionStatics {
  new(arg0: string): ServerException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): ServerException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): ServerException;
}

/** JVM class com.destroystokyo.paper.exception.ServerInternalException. */
export interface ServerInternalExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerException];
}
export type ServerInternalException = ServerInternalExceptionMembers & ServerException;
export interface ServerInternalExceptionStatics {
  new(arg0: string): ServerInternalException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">): ServerInternalException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): ServerInternalException;
  reportInternalException(arg0: JavaOpaque<"java.lang.Throwable">): void;
}

/** JVM class com.destroystokyo.paper.exception.ServerPluginEnableDisableException. */
export interface ServerPluginEnableDisableExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerPluginException];
}
export type ServerPluginEnableDisableException = ServerPluginEnableDisableExceptionMembers & ServerPluginException;
export interface ServerPluginEnableDisableExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_plugin.Plugin): ServerPluginEnableDisableException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_plugin.Plugin): ServerPluginEnableDisableException;
}

/** JVM class com.destroystokyo.paper.exception.ServerPluginException. */
export interface ServerPluginExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerException];
  getResponsiblePlugin(): j_org_bukkit_plugin.Plugin;
}
export type ServerPluginException = ServerPluginExceptionMembers & ServerException;
export interface ServerPluginExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_plugin.Plugin): ServerPluginException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_plugin.Plugin): ServerPluginException;
}

/** JVM class com.destroystokyo.paper.exception.ServerPluginMessageException. */
export interface ServerPluginMessageExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerPluginException];
  getChannel(): string;
  getData(): Array<number>;
  getPlayer(): j_org_bukkit_entity.Player;
}
export type ServerPluginMessageException = ServerPluginMessageExceptionMembers & ServerPluginException;
export interface ServerPluginMessageExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_plugin.Plugin, arg3: j_org_bukkit_entity.Player, arg4: string, arg5: Array<number>): ServerPluginMessageException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_plugin.Plugin, arg2: j_org_bukkit_entity.Player, arg3: string, arg4: Array<number>): ServerPluginMessageException;
}

/** JVM class com.destroystokyo.paper.exception.ServerSchedulerException. */
export interface ServerSchedulerExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerPluginException];
  getTask(): j_org_bukkit_scheduler.BukkitTask;
}
export type ServerSchedulerException = ServerSchedulerExceptionMembers & ServerPluginException;
export interface ServerSchedulerExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_scheduler.BukkitTask): ServerSchedulerException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_scheduler.BukkitTask): ServerSchedulerException;
}

/** JVM class com.destroystokyo.paper.exception.ServerTabCompleteException. */
export interface ServerTabCompleteExceptionMembers {
  readonly __javaSupertypes?: readonly [ServerCommandException];
}
export type ServerTabCompleteException = ServerTabCompleteExceptionMembers & ServerCommandException;
export interface ServerTabCompleteExceptionStatics {
  new(arg0: string, arg1: JavaOpaque<"java.lang.Throwable">, arg2: j_org_bukkit_command.Command, arg3: j_org_bukkit_command.CommandSender, arg4: Array<string>): ServerTabCompleteException;
  new(arg0: JavaOpaque<"java.lang.Throwable">, arg1: j_org_bukkit_command.Command, arg2: j_org_bukkit_command.CommandSender, arg3: Array<string>): ServerTabCompleteException;
}
