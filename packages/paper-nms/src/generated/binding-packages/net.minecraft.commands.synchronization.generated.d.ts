// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM interface net.minecraft.commands.synchronization.ArgumentTypeInfo. */
export interface ArgumentTypeInfoMembers<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */ = unknown, T /* extends ArgumentTypeInfo_Template<A> */ = unknown> {
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): T;
  serializeToJson(arg0: T, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: T, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: A): T;
}
export type ArgumentTypeInfo<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */ = unknown, T /* extends ArgumentTypeInfo_Template<A> */ = unknown> = ArgumentTypeInfoMembers<A, T>;
export interface ArgumentTypeInfoStatics {
}

/** JVM interface net.minecraft.commands.synchronization.ArgumentTypeInfo$Template. */
export interface ArgumentTypeInfo_TemplateMembers<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */ = unknown> {
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): A;
  type(): ArgumentTypeInfo<A, object>;
}
export type ArgumentTypeInfo_Template<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */ = unknown> = ArgumentTypeInfo_TemplateMembers<A>;
export interface ArgumentTypeInfo_TemplateStatics {
}

/** JVM class net.minecraft.commands.synchronization.ArgumentTypeInfos. */
export interface ArgumentTypeInfosMembers {
}
export type ArgumentTypeInfos = ArgumentTypeInfosMembers;
export interface ArgumentTypeInfosStatics {
  new(): ArgumentTypeInfos;
  bootstrap(arg0: j_net_minecraft_core.Registry<ArgumentTypeInfo<object, object>>): ArgumentTypeInfo<object, object>;
  byClass<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */>(arg0: A): ArgumentTypeInfo<A, object>;
  isClassRecognized(arg0: JavaClass<object>): boolean;
  unpack<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */>(arg0: A): ArgumentTypeInfo_Template<A>;
}

/** JVM class net.minecraft.commands.synchronization.ArgumentUtils. */
export interface ArgumentUtilsMembers {
}
export type ArgumentUtils = ArgumentUtilsMembers;
export interface ArgumentUtilsStatics {
  new(): ArgumentUtils;
  createNumberFlags(arg0: boolean, arg1: boolean): number;
  findUsedArgumentTypes<T>(arg0: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [T]>): JavaSet<JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]>>;
  numberHasMax(arg0: number): boolean;
  numberHasMin(arg0: number): boolean;
  serializeNodeToJson<S>(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [S]>): JavaOpaque<"com.google.gson.JsonObject">;
}

/** JVM class net.minecraft.commands.synchronization.SingletonArgumentInfo. */
export interface SingletonArgumentInfoMembers<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */ = unknown> {
  readonly __javaSupertypes?: readonly [ArgumentTypeInfo<A, SingletonArgumentInfo_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): SingletonArgumentInfo_Template;
  serializeToJson(arg0: SingletonArgumentInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: SingletonArgumentInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: A): SingletonArgumentInfo_Template;
}
export type SingletonArgumentInfo<A /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */ = unknown> = SingletonArgumentInfoMembers<A>;
export interface SingletonArgumentInfoStatics {
  contextAware<T /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */>(arg0: JavaFunction<j_net_minecraft_commands.CommandBuildContext, T>): SingletonArgumentInfo<T>;
  contextFree<T /* extends JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]> */>(arg0: JavaSupplier<T>): SingletonArgumentInfo<T>;
}

/** JVM class net.minecraft.commands.synchronization.SingletonArgumentInfo$Template. */
export interface SingletonArgumentInfo_TemplateMembers {
  readonly __javaSupertypes?: readonly [ArgumentTypeInfo_Template<JavaOpaque<"A">>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"A">;
  type(): ArgumentTypeInfo<JavaOpaque<"A">, object>;
}
export type SingletonArgumentInfo_Template = SingletonArgumentInfo_TemplateMembers & ArgumentTypeInfo_Template<JavaOpaque<"A">>;
export interface SingletonArgumentInfo_TemplateStatics {
  new(arg0: SingletonArgumentInfo, arg1: JavaFunction<j_net_minecraft_commands.CommandBuildContext, JavaOpaque<"A">>): SingletonArgumentInfo_Template;
}

/** JVM class net.minecraft.commands.synchronization.SuggestionProviders. */
export interface SuggestionProvidersMembers {
}
export type SuggestionProviders = SuggestionProvidersMembers;
export interface SuggestionProvidersStatics {
  new(): SuggestionProviders;
  readonly ASK_SERVER: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.SharedSuggestionProvider]>;
  readonly AVAILABLE_SOUNDS: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.SharedSuggestionProvider]>;
  readonly SUMMONABLE_ENTITIES: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.SharedSuggestionProvider]>;
  cast<S /* extends j_net_minecraft_commands.SharedSuggestionProvider */>(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.SharedSuggestionProvider]>): JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [S]>;
  getName(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [object]>): j_net_minecraft_resources.ResourceLocation;
  getProvider<S /* extends j_net_minecraft_commands.SharedSuggestionProvider */>(arg0: j_net_minecraft_resources.ResourceLocation): JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [S]>;
  register<S /* extends j_net_minecraft_commands.SharedSuggestionProvider */>(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.SharedSuggestionProvider]>): JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [S]>;
}
