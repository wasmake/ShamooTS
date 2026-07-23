// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_help from './org.bukkit.help.generated.js';

/** JVM abstract org.bukkit.command.defaults.BukkitCommand. */
export interface BukkitCommandMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_command.Command];
}
export type BukkitCommand = BukkitCommandMembers & j_org_bukkit_command.Command;
export interface BukkitCommandStatics {
  new(arg0: string): BukkitCommand;
  new(arg0: string, arg1: string, arg2: string, arg3: JavaList<string>): BukkitCommand;
}

/** JVM class org.bukkit.command.defaults.HelpCommand. */
export interface HelpCommandMembers {
  readonly __javaSupertypes?: readonly [BukkitCommand];
  execute(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): boolean;
  findPossibleMatches(arg0: string): j_org_bukkit_help.HelpTopic | null;
  tabComplete(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): JavaList<string>;
}
export type HelpCommand = HelpCommandMembers & BukkitCommand;
export interface HelpCommandStatics {
  new(): HelpCommand;
  damerauLevenshteinDistance(arg0: string | null, arg1: string | null): number | null;
}

/** JVM class org.bukkit.command.defaults.PluginsCommand. */
export interface PluginsCommandMembers {
  readonly __javaSupertypes?: readonly [BukkitCommand];
  execute(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): boolean;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): JavaList<string>;
}
export type PluginsCommand = PluginsCommandMembers & BukkitCommand;
export interface PluginsCommandStatics {
  new(arg0: string): PluginsCommand;
}

/** JVM class org.bukkit.command.defaults.ReloadCommand. */
export interface ReloadCommandMembers {
  readonly __javaSupertypes?: readonly [BukkitCommand];
  execute(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): boolean;
  /** @throws java.lang.IllegalArgumentException */
  tabComplete(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): JavaList<string>;
}
export type ReloadCommand = ReloadCommandMembers & BukkitCommand;
export interface ReloadCommandStatics {
  new(arg0: string): ReloadCommand;
  readonly RELOADING_DISABLED_MESSAGE: "A lifecycle event handler has been registered which makes reloading plugins not possible";
}

/** JVM class org.bukkit.command.defaults.VersionCommand. */
export interface VersionCommandMembers {
  readonly __javaSupertypes?: readonly [BukkitCommand];
  execute(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): boolean;
  tabComplete(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: Array<string>): JavaList<string>;
}
export type VersionCommand = VersionCommandMembers & BukkitCommand;
export interface VersionCommandStatics {
  new(arg0: string): VersionCommand;
}
