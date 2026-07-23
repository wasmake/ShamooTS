// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands_arguments_selector from './net.minecraft.commands.arguments.selector.generated.js';

/** JVM class net.minecraft.commands.arguments.selector.options.EntitySelectorOptions. */
export interface EntitySelectorOptionsMembers {
}
export type EntitySelectorOptions = EntitySelectorOptionsMembers;
export interface EntitySelectorOptionsStatics {
  new(): EntitySelectorOptions;
  readonly ERROR_ENTITY_TYPE_INVALID: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_GAME_MODE_INVALID: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_INAPPLICABLE_OPTION: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_LEVEL_NEGATIVE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_LIMIT_TOO_SMALL: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_RANGE_NEGATIVE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_SORT_UNKNOWN: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_UNKNOWN_OPTION: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  bootStrap(): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  get(arg0: j_net_minecraft_commands_arguments_selector.EntitySelectorParser, arg1: string, arg2: number): EntitySelectorOptions_Modifier;
  suggestNames(arg0: j_net_minecraft_commands_arguments_selector.EntitySelectorParser, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): void;
}

/** JVM interface net.minecraft.commands.arguments.selector.options.EntitySelectorOptions$Modifier. */
export interface EntitySelectorOptions_ModifierMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  handle(arg0: j_net_minecraft_commands_arguments_selector.EntitySelectorParser): void;
}
export type EntitySelectorOptions_Modifier = EntitySelectorOptions_ModifierMembers;
export interface EntitySelectorOptions_ModifierStatics {
}
