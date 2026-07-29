// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_functions from './net.minecraft.commands.functions.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_parsing_packrat_commands from './net.minecraft.util.parsing.packrat.commands.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';

/** JVM class net.minecraft.commands.arguments.item.ComponentPredicateParser. */
export interface ComponentPredicateParserMembers {
}
export type ComponentPredicateParser = ComponentPredicateParserMembers;
export interface ComponentPredicateParserStatics {
  new(): ComponentPredicateParser;
  createGrammar<T, C, P>(arg0: ComponentPredicateParser_Context<T, C, P>): j_net_minecraft_util_parsing_packrat_commands.Grammar<JavaList<T>>;
}

/** JVM interface net.minecraft.commands.arguments.item.ComponentPredicateParser$Context. */
export interface ComponentPredicateParser_ContextMembers<T = unknown, C = unknown, P = unknown> {
  anyOf(arg0: JavaList<T>): T;
  createComponentTest(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: C): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  createComponentTest(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: C, arg2: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  createPredicateTest(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: P, arg2: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  forElementType(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_resources.ResourceLocation): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  forTagType(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_resources.ResourceLocation): T;
  listComponentTypes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  listElementTypes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  listPredicateTypes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  listTagTypes(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  lookupComponentType(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_resources.ResourceLocation): C;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  lookupPredicateType(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_resources.ResourceLocation): P;
  negate(arg0: T): T;
}
export type ComponentPredicateParser_Context<T = unknown, C = unknown, P = unknown> = ComponentPredicateParser_ContextMembers<T, C, P>;
export interface ComponentPredicateParser_ContextStatics {
}

/** JVM class net.minecraft.commands.arguments.item.FunctionArgument. */
export interface FunctionArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [FunctionArgument_Result]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): FunctionArgument_Result;
}
export type FunctionArgument = FunctionArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [FunctionArgument_Result]>;
export interface FunctionArgumentStatics {
  new(): FunctionArgument;
  functions(): FunctionArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getFunctionCollection(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_resources.ResourceLocation, JavaCollection<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getFunctionOrTag(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_resources.ResourceLocation, JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>, JavaCollection<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>]>]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getFunctions(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
}

/** JVM interface net.minecraft.commands.arguments.item.FunctionArgument$Result. */
export interface FunctionArgument_ResultMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  create(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): JavaCollection<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  unwrap(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_resources.ResourceLocation, JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>, JavaCollection<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>]>]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  unwrapToCollection(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_resources.ResourceLocation, JavaCollection<j_net_minecraft_commands_functions.CommandFunction<j_net_minecraft_commands.CommandSourceStack>>]>;
}
export type FunctionArgument_Result = FunctionArgument_ResultMembers;
export interface FunctionArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.item.ItemArgument. */
export interface ItemArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ItemInput]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ItemInput;
}
export type ItemArgument = ItemArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ItemInput]>;
export interface ItemArgumentStatics {
  new(arg0: j_net_minecraft_commands.CommandBuildContext): ItemArgument;
  getItem<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: string): ItemInput;
  item(arg0: j_net_minecraft_commands.CommandBuildContext): ItemArgument;
}

/** JVM class net.minecraft.commands.arguments.item.ItemInput. */
export interface ItemInputMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  createItemStack(arg0: number, arg1: boolean): j_net_minecraft_world_item.ItemStack;
  getItem(): j_net_minecraft_world_item.Item;
  serialize(arg0: j_net_minecraft_core.HolderLookup_Provider): string;
}
export type ItemInput = ItemInputMembers;
export interface ItemInputStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_core_component.DataComponentPatch): ItemInput;
}

/** JVM class net.minecraft.commands.arguments.item.ItemParser. */
export interface ItemParserMembers {
  fillSuggestions(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ItemParser_ItemResult;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: ItemParser_Visitor): void;
}
export type ItemParser = ItemParserMembers;
export interface ItemParserStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider): ItemParser;
  readonly SYNTAX_COMPONENT_ASSIGNMENT: 61;
  readonly SYNTAX_COMPONENT_SEPARATOR: 44;
  readonly SYNTAX_END_COMPONENTS: 93;
  readonly SYNTAX_REMOVED_COMPONENT: 33;
  readonly SYNTAX_START_COMPONENTS: 91;
}

/** JVM record net.minecraft.commands.arguments.item.ItemParser$ItemResult. */
export interface ItemParser_ItemResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  components(): j_net_minecraft_core_component.DataComponentPatch;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  toString(): string;
}
export type ItemParser_ItemResult = ItemParser_ItemResultMembers & JavaOpaque<"java.lang.Record">;
export interface ItemParser_ItemResultStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: j_net_minecraft_core_component.DataComponentPatch): ItemParser_ItemResult;
}

/** JVM interface net.minecraft.commands.arguments.item.ItemParser$Visitor. */
export interface ItemParser_VisitorMembers {
  visitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): void;
  visitItem(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>): void;
  visitRemovedComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): void;
  visitSuggestions(arg0: JavaFunction<JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>>): void;
}
export type ItemParser_Visitor = ItemParser_VisitorMembers;
export interface ItemParser_VisitorStatics {
}

/** JVM class net.minecraft.commands.arguments.item.ItemPredicateArgument. */
export interface ItemPredicateArgumentMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<ItemPredicateArgument_Result>];
  getExamples(): JavaCollection<string>;
}
export type ItemPredicateArgument = ItemPredicateArgumentMembers & j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<ItemPredicateArgument_Result>;
export interface ItemPredicateArgumentStatics {
  new(arg0: j_net_minecraft_commands.CommandBuildContext): ItemPredicateArgument;
  getItemPredicate(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): ItemPredicateArgument_Result;
  itemPredicate(arg0: j_net_minecraft_commands.CommandBuildContext): ItemPredicateArgument;
}

/** JVM interface net.minecraft.commands.arguments.item.ItemPredicateArgument$Result. */
export interface ItemPredicateArgument_ResultMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_world_item.ItemStack>];
}
export type ItemPredicateArgument_Result = ItemPredicateArgument_ResultMembers & JavaPredicate<j_net_minecraft_world_item.ItemStack>;
export interface ItemPredicateArgument_ResultStatics {
}
