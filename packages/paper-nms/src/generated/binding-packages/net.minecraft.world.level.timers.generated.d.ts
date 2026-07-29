// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';

/** JVM record net.minecraft.world.level.timers.FunctionCallback. */
export interface FunctionCallbackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TimerCallback<j_net_minecraft_server.MinecraftServer>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionCallback]>;
  equals(arg0: object): boolean;
  functionId(): j_net_minecraft_resources.ResourceLocation;
  handle(arg0: j_net_minecraft_server.MinecraftServer, arg1: TimerQueue<j_net_minecraft_server.MinecraftServer>, arg2: bigint): void;
  hashCode(): number;
  toString(): string;
}
export type FunctionCallback = FunctionCallbackMembers & JavaOpaque<"java.lang.Record"> & TimerCallback<j_net_minecraft_server.MinecraftServer>;
export interface FunctionCallbackStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): FunctionCallback;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionCallback]>;
}

/** JVM record net.minecraft.world.level.timers.FunctionTagCallback. */
export interface FunctionTagCallbackMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TimerCallback<j_net_minecraft_server.MinecraftServer>];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionTagCallback]>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_server.MinecraftServer, arg1: TimerQueue<j_net_minecraft_server.MinecraftServer>, arg2: bigint): void;
  hashCode(): number;
  tagId(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type FunctionTagCallback = FunctionTagCallbackMembers & JavaOpaque<"java.lang.Record"> & TimerCallback<j_net_minecraft_server.MinecraftServer>;
export interface FunctionTagCallbackStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): FunctionTagCallback;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionTagCallback]>;
}

/** JVM interface net.minecraft.world.level.timers.TimerCallback. */
export interface TimerCallbackMembers<T = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TimerCallback<T>]>;
  handle(arg0: T, arg1: TimerQueue<T>, arg2: bigint): void;
}
export type TimerCallback<T = unknown> = TimerCallbackMembers<T>;
export interface TimerCallbackStatics {
}

/** JVM class net.minecraft.world.level.timers.TimerCallbacks. */
export interface TimerCallbacksMembers<C = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [TimerCallback<C>]>;
  register(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [TimerCallback<C>]>): TimerCallbacks<C>;
}
export type TimerCallbacks<C = unknown> = TimerCallbacksMembers<C>;
export interface TimerCallbacksStatics {
  new<C>(): TimerCallbacks<C>;
  readonly SERVER_CALLBACKS: TimerCallbacks<j_net_minecraft_server.MinecraftServer>;
}

/** JVM class net.minecraft.world.level.timers.TimerQueue. */
export interface TimerQueueMembers<T = unknown> {
  getEventsIds(): JavaSet<string>;
  remove(arg0: string): number;
  schedule(arg0: string, arg1: bigint, arg2: TimerCallback<T>): void;
  store(): j_net_minecraft_nbt.ListTag;
  tick(arg0: T, arg1: bigint): void;
}
export type TimerQueue<T = unknown> = TimerQueueMembers<T>;
export interface TimerQueueStatics {
  new<T>(arg0: TimerCallbacks<T>): TimerQueue<T>;
  new<T>(arg0: TimerCallbacks<T>, arg1: JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"com.mojang.serialization.Dynamic", [object]>]>): TimerQueue<T>;
}

/** JVM class net.minecraft.world.level.timers.TimerQueue$Event. */
export interface TimerQueue_EventMembers<T = unknown> {
  readonly callback: TimerCallback<T>;
  readonly id: string;
  readonly sequentialId: JavaOpaque<"com.google.common.primitives.UnsignedLong">;
  readonly triggerTime: bigint;
}
export type TimerQueue_Event<T = unknown> = TimerQueue_EventMembers<T>;
export interface TimerQueue_EventStatics {
}
