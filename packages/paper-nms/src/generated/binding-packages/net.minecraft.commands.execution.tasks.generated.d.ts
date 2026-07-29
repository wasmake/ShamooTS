// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_execution from './net.minecraft.commands.execution.generated.js';
import type * as j_net_minecraft_commands_functions from './net.minecraft.commands.functions.generated.js';

/** JVM class net.minecraft.commands.execution.tasks.BuildContexts. */
export interface BuildContextsMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  toString(): string;
}
export type BuildContexts<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = BuildContextsMembers<T>;
export interface BuildContextsStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>): BuildContexts<T>;
  readonly ERROR_FORK_LIMIT_REACHED: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
}

/** JVM class net.minecraft.commands.execution.tasks.BuildContexts$Continuation. */
export interface BuildContexts_ContinuationMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [BuildContexts<T>, j_net_minecraft_commands_execution.EntryAction<T>];
  execute(arg0: j_net_minecraft_commands_execution.ExecutionContext<T>, arg1: j_net_minecraft_commands_execution.Frame): void;
}
export type BuildContexts_Continuation<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = BuildContexts_ContinuationMembers<T> & BuildContexts<T> & j_net_minecraft_commands_execution.EntryAction<T>;
export interface BuildContexts_ContinuationStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg2: j_net_minecraft_commands_execution.ChainModifiers, arg3: T, arg4: JavaList<T>): BuildContexts_Continuation<T>;
}

/** JVM class net.minecraft.commands.execution.tasks.BuildContexts$TopLevel. */
export interface BuildContexts_TopLevelMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [BuildContexts<T>, j_net_minecraft_commands_execution.EntryAction<T>];
  execute(arg0: j_net_minecraft_commands_execution.ExecutionContext<T>, arg1: j_net_minecraft_commands_execution.Frame): void;
}
export type BuildContexts_TopLevel<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = BuildContexts_TopLevelMembers<T> & BuildContexts<T> & j_net_minecraft_commands_execution.EntryAction<T>;
export interface BuildContexts_TopLevelStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg2: T): BuildContexts_TopLevel<T>;
}

/** JVM class net.minecraft.commands.execution.tasks.BuildContexts$Unbound. */
export interface BuildContexts_UnboundMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [BuildContexts<T>, j_net_minecraft_commands_execution.UnboundEntryAction<T>];
  execute(arg0: T, arg1: j_net_minecraft_commands_execution.ExecutionContext<T>, arg2: j_net_minecraft_commands_execution.Frame): void;
}
export type BuildContexts_Unbound<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = BuildContexts_UnboundMembers<T> & BuildContexts<T> & j_net_minecraft_commands_execution.UnboundEntryAction<T>;
export interface BuildContexts_UnboundStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>): BuildContexts_Unbound<T>;
}

/** JVM class net.minecraft.commands.execution.tasks.CallFunction. */
export interface CallFunctionMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_execution.UnboundEntryAction<T>];
  execute(arg0: T, arg1: j_net_minecraft_commands_execution.ExecutionContext<T>, arg2: j_net_minecraft_commands_execution.Frame): void;
}
export type CallFunction<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = CallFunctionMembers<T> & j_net_minecraft_commands_execution.UnboundEntryAction<T>;
export interface CallFunctionStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: j_net_minecraft_commands_functions.InstantiatedFunction<T>, arg1: j_net_minecraft_commands.CommandResultCallback, arg2: boolean): CallFunction<T>;
}

/** JVM class net.minecraft.commands.execution.tasks.ContinuationTask. */
export interface ContinuationTaskMembers<T = unknown, P = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_execution.EntryAction<T>];
  execute(arg0: j_net_minecraft_commands_execution.ExecutionContext<T>, arg1: j_net_minecraft_commands_execution.Frame): void;
}
export type ContinuationTask<T = unknown, P = unknown> = ContinuationTaskMembers<T, P> & j_net_minecraft_commands_execution.EntryAction<T>;
export interface ContinuationTaskStatics {
  schedule<T, P>(arg0: j_net_minecraft_commands_execution.ExecutionContext<T>, arg1: j_net_minecraft_commands_execution.Frame, arg2: JavaList<P>, arg3: ContinuationTask_TaskProvider<T, P>): void;
}

/** JVM interface net.minecraft.commands.execution.tasks.ContinuationTask$TaskProvider. */
export interface ContinuationTask_TaskProviderMembers<T = unknown, P = unknown> {
  create(arg0: j_net_minecraft_commands_execution.Frame, arg1: P): j_net_minecraft_commands_execution.CommandQueueEntry<T>;
}
export type ContinuationTask_TaskProvider<T = unknown, P = unknown> = ContinuationTask_TaskProviderMembers<T, P>;
export interface ContinuationTask_TaskProviderStatics {
}

/** JVM class net.minecraft.commands.execution.tasks.ExecuteCommand. */
export interface ExecuteCommandMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_execution.UnboundEntryAction<T>];
  execute(arg0: T, arg1: j_net_minecraft_commands_execution.ExecutionContext<T>, arg2: j_net_minecraft_commands_execution.Frame): void;
}
export type ExecuteCommand<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = ExecuteCommandMembers<T> & j_net_minecraft_commands_execution.UnboundEntryAction<T>;
export interface ExecuteCommandStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: string, arg1: j_net_minecraft_commands_execution.ChainModifiers, arg2: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [T]>): ExecuteCommand<T>;
}

/** JVM class net.minecraft.commands.execution.tasks.FallthroughTask. */
export interface FallthroughTaskMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_execution.EntryAction<T>];
  execute(arg0: j_net_minecraft_commands_execution.ExecutionContext<T>, arg1: j_net_minecraft_commands_execution.Frame): void;
}
export type FallthroughTask<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = FallthroughTaskMembers<T> & j_net_minecraft_commands_execution.EntryAction<T>;
export interface FallthroughTaskStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(): FallthroughTask<T>;
  instance<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(): j_net_minecraft_commands_execution.EntryAction<T>;
}

/** JVM class net.minecraft.commands.execution.tasks.IsolatedCall. */
export interface IsolatedCallMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_execution.EntryAction<T>];
  execute(arg0: j_net_minecraft_commands_execution.ExecutionContext<T>, arg1: j_net_minecraft_commands_execution.Frame): void;
}
export type IsolatedCall<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = IsolatedCallMembers<T> & j_net_minecraft_commands_execution.EntryAction<T>;
export interface IsolatedCallStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: JavaConsumer<j_net_minecraft_commands_execution.ExecutionControl<T>>, arg1: j_net_minecraft_commands.CommandResultCallback): IsolatedCall<T>;
}
