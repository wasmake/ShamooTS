// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_synchronization from './net.minecraft.commands.synchronization.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';

/** JVM class net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo. */
export interface DoubleArgumentInfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">, DoubleArgumentInfo_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): DoubleArgumentInfo_Template;
  serializeToJson(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToJson(arg0: DoubleArgumentInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  serializeToNetwork(arg0: DoubleArgumentInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">): DoubleArgumentInfo_Template;
}
export type DoubleArgumentInfo = DoubleArgumentInfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">, DoubleArgumentInfo_Template>;
export interface DoubleArgumentInfoStatics {
  new(): DoubleArgumentInfo;
}

/** JVM class net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo$Template. */
export interface DoubleArgumentInfo_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">;
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">, object>;
}
export type DoubleArgumentInfo_Template = DoubleArgumentInfo_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.DoubleArgumentType">>;
export interface DoubleArgumentInfo_TemplateStatics {
}

/** JVM class net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo. */
export interface FloatArgumentInfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">, FloatArgumentInfo_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): FloatArgumentInfo_Template;
  serializeToJson(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToJson(arg0: FloatArgumentInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  serializeToNetwork(arg0: FloatArgumentInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">): FloatArgumentInfo_Template;
}
export type FloatArgumentInfo = FloatArgumentInfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">, FloatArgumentInfo_Template>;
export interface FloatArgumentInfoStatics {
  new(): FloatArgumentInfo;
}

/** JVM class net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo$Template. */
export interface FloatArgumentInfo_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">;
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">, object>;
}
export type FloatArgumentInfo_Template = FloatArgumentInfo_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.FloatArgumentType">>;
export interface FloatArgumentInfo_TemplateStatics {
}

/** JVM class net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo. */
export interface IntegerArgumentInfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">, IntegerArgumentInfo_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): IntegerArgumentInfo_Template;
  serializeToJson(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToJson(arg0: IntegerArgumentInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  serializeToNetwork(arg0: IntegerArgumentInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">): IntegerArgumentInfo_Template;
}
export type IntegerArgumentInfo = IntegerArgumentInfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">, IntegerArgumentInfo_Template>;
export interface IntegerArgumentInfoStatics {
  new(): IntegerArgumentInfo;
}

/** JVM class net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo$Template. */
export interface IntegerArgumentInfo_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">;
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">, object>;
}
export type IntegerArgumentInfo_Template = IntegerArgumentInfo_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.IntegerArgumentType">>;
export interface IntegerArgumentInfo_TemplateStatics {
}

/** JVM class net.minecraft.commands.synchronization.brigadier.LongArgumentInfo. */
export interface LongArgumentInfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">, LongArgumentInfo_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): LongArgumentInfo_Template;
  serializeToJson(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToJson(arg0: LongArgumentInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  serializeToNetwork(arg0: LongArgumentInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">): LongArgumentInfo_Template;
}
export type LongArgumentInfo = LongArgumentInfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">, LongArgumentInfo_Template>;
export interface LongArgumentInfoStatics {
  new(): LongArgumentInfo;
}

/** JVM class net.minecraft.commands.synchronization.brigadier.LongArgumentInfo$Template. */
export interface LongArgumentInfo_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">;
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">, object>;
}
export type LongArgumentInfo_Template = LongArgumentInfo_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.LongArgumentType">>;
export interface LongArgumentInfo_TemplateStatics {
}

/** JVM class net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer. */
export interface StringArgumentSerializerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">, StringArgumentSerializer_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): StringArgumentSerializer_Template;
  serializeToJson(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToJson(arg0: StringArgumentSerializer_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  serializeToNetwork(arg0: StringArgumentSerializer_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">): j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template;
  unpack(arg0: JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">): StringArgumentSerializer_Template;
}
export type StringArgumentSerializer = StringArgumentSerializerMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">, StringArgumentSerializer_Template>;
export interface StringArgumentSerializerStatics {
  new(): StringArgumentSerializer;
}

/** JVM class net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer$Template. */
export interface StringArgumentSerializer_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType">;
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">, object>;
}
export type StringArgumentSerializer_Template = StringArgumentSerializer_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType">>;
export interface StringArgumentSerializer_TemplateStatics {
  new(arg0: StringArgumentSerializer, arg1: JavaOpaque<"com.mojang.brigadier.arguments.StringArgumentType$StringType">): StringArgumentSerializer_Template;
}
