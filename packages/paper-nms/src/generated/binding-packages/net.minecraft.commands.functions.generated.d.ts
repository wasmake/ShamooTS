// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_execution from './net.minecraft.commands.execution.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM interface net.minecraft.commands.functions.CommandFunction. */
export interface CommandFunctionMembers<T = unknown> {
  id(): j_net_minecraft_resources.ResourceLocation;
  /** @throws net.minecraft.commands.FunctionInstantiationException */
  instantiate(arg0: j_net_minecraft_nbt.CompoundTag | null, arg1: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>): InstantiatedFunction<T> | null;
}
export type CommandFunction<T = unknown> = CommandFunctionMembers<T>;
export interface CommandFunctionStatics {
  checkCommandLineLength(arg0: string): void;
  fromLines<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>, arg2: T, arg3: JavaList<string>): CommandFunction<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseCommand<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>, arg1: T, arg2: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_commands_execution.UnboundEntryAction<T>;
}

/** JVM interface net.minecraft.commands.functions.InstantiatedFunction. */
export interface InstantiatedFunctionMembers<T = unknown> {
  entries(): JavaList<j_net_minecraft_commands_execution.UnboundEntryAction<T>>;
  id(): j_net_minecraft_resources.ResourceLocation;
}
export type InstantiatedFunction<T = unknown> = InstantiatedFunctionMembers<T>;
export interface InstantiatedFunctionStatics {
}

/** JVM class net.minecraft.commands.functions.MacroFunction. */
export interface MacroFunctionMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [CommandFunction<T>];
  id(): j_net_minecraft_resources.ResourceLocation;
  /** @throws net.minecraft.commands.FunctionInstantiationException */
  instantiate(arg0: j_net_minecraft_nbt.CompoundTag | null, arg1: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>): InstantiatedFunction<T> | null;
}
export type MacroFunction<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = MacroFunctionMembers<T> & CommandFunction<T>;
export interface MacroFunctionStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaList<JavaOpaque<"net.minecraft.commands.functions.MacroFunction$Entry", [T]>>, arg2: JavaList<string>): MacroFunction<T>;
}

/** JVM record net.minecraft.commands.functions.PlainTextFunction. */
export interface PlainTextFunctionMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CommandFunction<T>, InstantiatedFunction<T>];
  entries(): JavaList<j_net_minecraft_commands_execution.UnboundEntryAction<T>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  /** @throws net.minecraft.commands.FunctionInstantiationException */
  instantiate(arg0: j_net_minecraft_nbt.CompoundTag | null, arg1: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>): InstantiatedFunction<T> | null;
  toString(): string;
}
export type PlainTextFunction<T = unknown> = PlainTextFunctionMembers<T> & JavaOpaque<"java.lang.Record"> & CommandFunction<T> & InstantiatedFunction<T>;
export interface PlainTextFunctionStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaList<j_net_minecraft_commands_execution.UnboundEntryAction<T>>): PlainTextFunction<T>;
}

/** JVM record net.minecraft.commands.functions.StringTemplate. */
export interface StringTemplateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  segments(): JavaList<string>;
  substitute(arg0: JavaList<string>): string;
  toString(): string;
  variables(): JavaList<string>;
}
export type StringTemplate = StringTemplateMembers & JavaOpaque<"java.lang.Record">;
export interface StringTemplateStatics {
  new(arg0: JavaList<string>, arg1: JavaList<string>): StringTemplate;
  fromString(arg0: string): StringTemplate;
  isValidVariableName(arg0: string): boolean;
}
