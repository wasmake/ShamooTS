// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_functions from './net.minecraft.commands.functions.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_profiling from './net.minecraft.util.profiling.generated.js';

/** JVM record net.minecraft.commands.execution.ChainModifiers. */
export interface ChainModifiersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  flags(): number;
  hashCode(): number;
  isForked(): boolean;
  isReturn(): boolean;
  setForked(): ChainModifiers;
  setReturn(): ChainModifiers;
  toString(): string;
}
export type ChainModifiers = ChainModifiersMembers & JavaOpaque<"java.lang.Record">;
export interface ChainModifiersStatics {
  new(arg0: number): ChainModifiers;
  readonly DEFAULT: ChainModifiers;
}

/** JVM record net.minecraft.commands.execution.CommandQueueEntry. */
export interface CommandQueueEntryMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  action(): EntryAction<T>;
  equals(arg0: object): boolean;
  execute(arg0: ExecutionContext<T>): void;
  frame(): Frame;
  hashCode(): number;
  toString(): string;
}
export type CommandQueueEntry<T = unknown> = CommandQueueEntryMembers<T> & JavaOpaque<"java.lang.Record">;
export interface CommandQueueEntryStatics {
  new<T>(arg0: Frame, arg1: EntryAction<T>): CommandQueueEntry<T>;
}

/** JVM interface net.minecraft.commands.execution.CustomCommandExecutor. */
export interface CustomCommandExecutorMembers<T = unknown> {
  run(arg0: T, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg2: ChainModifiers, arg3: ExecutionControl<T>): void;
}
export type CustomCommandExecutor<T = unknown> = CustomCommandExecutorMembers<T>;
export interface CustomCommandExecutorStatics {
}

/** JVM interface net.minecraft.commands.execution.CustomCommandExecutor$CommandAdapter. */
export interface CustomCommandExecutor_CommandAdapterMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.Command", [T]>, CustomCommandExecutor<T>];
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  run(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [T]>): number;
}
export type CustomCommandExecutor_CommandAdapter<T = unknown> = CustomCommandExecutor_CommandAdapterMembers<T> & JavaOpaque<"com.mojang.brigadier.Command", [T]> & CustomCommandExecutor<T>;
export interface CustomCommandExecutor_CommandAdapterStatics {
}

/** JVM abstract net.minecraft.commands.execution.CustomCommandExecutor$WithErrorHandling. */
export interface CustomCommandExecutor_WithErrorHandlingMembers<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [CustomCommandExecutor<T>];
  onError(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">, arg1: T, arg2: ChainModifiers, arg3: TraceCallbacks | null): void | null;
  run(arg0: object, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain">, arg2: ChainModifiers, arg3: ExecutionControl): void;
  run(arg0: T, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg2: ChainModifiers, arg3: ExecutionControl<T>): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  runGuarded(arg0: T, arg1: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg2: ChainModifiers, arg3: ExecutionControl<T>): void;
}
export type CustomCommandExecutor_WithErrorHandling<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */ = unknown> = CustomCommandExecutor_WithErrorHandlingMembers<T> & CustomCommandExecutor<T>;
export interface CustomCommandExecutor_WithErrorHandlingStatics {
  new<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(): CustomCommandExecutor_WithErrorHandling<T>;
}

/** JVM interface net.minecraft.commands.execution.CustomModifierExecutor. */
export interface CustomModifierExecutorMembers<T = unknown> {
  apply(arg0: T, arg1: JavaList<T>, arg2: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg3: ChainModifiers, arg4: ExecutionControl<T>): void;
}
export type CustomModifierExecutor<T = unknown> = CustomModifierExecutorMembers<T>;
export interface CustomModifierExecutorStatics {
}

/** JVM interface net.minecraft.commands.execution.CustomModifierExecutor$ModifierAdapter. */
export interface CustomModifierExecutor_ModifierAdapterMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.RedirectModifier", [T]>, CustomModifierExecutor<T>];
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  apply(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [T]>): JavaCollection<T>;
}
export type CustomModifierExecutor_ModifierAdapter<T = unknown> = CustomModifierExecutor_ModifierAdapterMembers<T> & JavaOpaque<"com.mojang.brigadier.RedirectModifier", [T]> & CustomModifierExecutor<T>;
export interface CustomModifierExecutor_ModifierAdapterStatics {
}

/** JVM interface net.minecraft.commands.execution.EntryAction. */
export interface EntryActionMembers<T = unknown> {
  execute(arg0: ExecutionContext<T>, arg1: Frame): void;
}
export type EntryAction<T = unknown> = EntryActionMembers<T>;
export interface EntryActionStatics {
}

/** JVM class net.minecraft.commands.execution.ExecutionContext. */
export interface ExecutionContextMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  discardAtDepthOrHigher(arg0: number): void;
  forkLimit(): number;
  frameControlForDepth(arg0: number): Frame_FrameControl;
  incrementCost(): void;
  profiler(): j_net_minecraft_util_profiling.ProfilerFiller;
  queueNext(arg0: CommandQueueEntry<T>): void;
  runCommandQueue(): void;
  tracer(): TraceCallbacks | null;
  tracer(arg0: TraceCallbacks | null): void | null;
}
export type ExecutionContext<T = unknown> = ExecutionContextMembers<T> & JavaOpaque<"java.lang.AutoCloseable">;
export interface ExecutionContextStatics {
  new<T>(arg0: number, arg1: number, arg2: j_net_minecraft_util_profiling.ProfilerFiller): ExecutionContext<T>;
  queueInitialCommandExecution<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: ExecutionContext<T>, arg1: string, arg2: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg3: T, arg4: j_net_minecraft_commands.CommandResultCallback): void;
  queueInitialFunctionCall<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: ExecutionContext<T>, arg1: j_net_minecraft_commands_functions.InstantiatedFunction<T>, arg2: T, arg3: j_net_minecraft_commands.CommandResultCallback): void;
}

/** JVM interface net.minecraft.commands.execution.ExecutionControl. */
export interface ExecutionControlMembers<T = unknown> {
  currentFrame(): Frame;
  queueNext(arg0: EntryAction<T>): void;
  tracer(): TraceCallbacks | null;
  tracer(arg0: TraceCallbacks | null): void | null;
}
export type ExecutionControl<T = unknown> = ExecutionControlMembers<T>;
export interface ExecutionControlStatics {
  create<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: ExecutionContext<T>, arg1: Frame): ExecutionControl<T>;
}

/** JVM record net.minecraft.commands.execution.Frame. */
export interface FrameMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  depth(): number;
  discard(): void;
  equals(arg0: object): boolean;
  frameControl(): Frame_FrameControl;
  hashCode(): number;
  returnFailure(): void;
  returnSuccess(arg0: number): void;
  returnValueConsumer(): j_net_minecraft_commands.CommandResultCallback;
  toString(): string;
}
export type Frame = FrameMembers & JavaOpaque<"java.lang.Record">;
export interface FrameStatics {
  new(arg0: number, arg1: j_net_minecraft_commands.CommandResultCallback, arg2: Frame_FrameControl): Frame;
}

/** JVM interface net.minecraft.commands.execution.Frame$FrameControl. */
export interface Frame_FrameControlMembers {
  discard(): void;
}
export type Frame_FrameControl = Frame_FrameControlMembers;
export interface Frame_FrameControlStatics {
}

/** JVM interface net.minecraft.commands.execution.TraceCallbacks. */
export interface TraceCallbacksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  onCall(arg0: number, arg1: j_net_minecraft_resources.ResourceLocation, arg2: number): void;
  onCommand(arg0: number, arg1: string): void;
  onError(arg0: string): void;
  onReturn(arg0: number, arg1: string, arg2: number): void;
}
export type TraceCallbacks = TraceCallbacksMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface TraceCallbacksStatics {
}

/** JVM interface net.minecraft.commands.execution.UnboundEntryAction. */
export interface UnboundEntryActionMembers<T = unknown> {
  bind(arg0: T): EntryAction<T>;
  execute(arg0: T, arg1: ExecutionContext<T>, arg2: Frame): void;
}
export type UnboundEntryAction<T = unknown> = UnboundEntryActionMembers<T>;
export interface UnboundEntryActionStatics {
}
