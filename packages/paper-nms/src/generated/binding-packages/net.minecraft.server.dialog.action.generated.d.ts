// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM interface net.minecraft.server.dialog.action.Action. */
export interface ActionMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [Action]>;
  createAction(arg0: JavaMap<string, Action_ValueGetter>): JavaOptional<j_net_minecraft_network_chat.ClickEvent>;
}
export type Action = ActionMembers;
export interface ActionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Action]>;
}

/** JVM interface net.minecraft.server.dialog.action.Action$ValueGetter. */
export interface Action_ValueGetterMembers {
  asTag(): j_net_minecraft_nbt.Tag;
  asTemplateSubstitution(): string;
}
export type Action_ValueGetter = Action_ValueGetterMembers;
export interface Action_ValueGetterStatics {
  getAsTemplateSubstitutions(arg0: JavaMap<string, Action_ValueGetter>): JavaMap<string, string>;
  of(arg0: string): Action_ValueGetter;
  of(arg0: JavaSupplier<string>): Action_ValueGetter;
}

/** JVM class net.minecraft.server.dialog.action.ActionTypes. */
export interface ActionTypesMembers {
}
export type ActionTypes = ActionTypesMembers;
export interface ActionTypesStatics {
  new(): ActionTypes;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [Action]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [Action]>;
}

/** JVM record net.minecraft.server.dialog.action.CommandTemplate. */
export interface CommandTemplateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Action];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CommandTemplate]>;
  createAction(arg0: JavaMap<string, Action_ValueGetter>): JavaOptional<j_net_minecraft_network_chat.ClickEvent>;
  equals(arg0: object): boolean;
  hashCode(): number;
  template(): ParsedTemplate;
  toString(): string;
}
export type CommandTemplate = CommandTemplateMembers & JavaOpaque<"java.lang.Record"> & Action;
export interface CommandTemplateStatics {
  new(arg0: ParsedTemplate): CommandTemplate;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CommandTemplate]>;
}

/** JVM record net.minecraft.server.dialog.action.CustomAll. */
export interface CustomAllMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Action];
  additions(): JavaOptional<j_net_minecraft_nbt.CompoundTag>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CustomAll]>;
  createAction(arg0: JavaMap<string, Action_ValueGetter>): JavaOptional<j_net_minecraft_network_chat.ClickEvent>;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type CustomAll = CustomAllMembers & JavaOpaque<"java.lang.Record"> & Action;
export interface CustomAllStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: JavaOptional<j_net_minecraft_nbt.CompoundTag>): CustomAll;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CustomAll]>;
}

/** JVM class net.minecraft.server.dialog.action.ParsedTemplate. */
export interface ParsedTemplateMembers {
  instantiate(arg0: JavaMap<string, string>): string;
}
export type ParsedTemplate = ParsedTemplateMembers;
export interface ParsedTemplateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ParsedTemplate]>;
  readonly VARIABLE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [string]>;
}

/** JVM record net.minecraft.server.dialog.action.StaticAction. */
export interface StaticActionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Action];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StaticAction]>;
  createAction(arg0: JavaMap<string, Action_ValueGetter>): JavaOptional<j_net_minecraft_network_chat.ClickEvent>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  value(): j_net_minecraft_network_chat.ClickEvent;
}
export type StaticAction = StaticActionMembers & JavaOpaque<"java.lang.Record"> & Action;
export interface StaticActionStatics {
  new(arg0: j_net_minecraft_network_chat.ClickEvent): StaticAction;
  readonly WRAPPED_CODECS: JavaMap<j_net_minecraft_network_chat.ClickEvent_Action, JavaOpaque<"com.mojang.serialization.MapCodec", [StaticAction]>>;
}
