// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util_parsing_packrat from './net.minecraft.util.parsing.packrat.generated.js';

/** JVM interface net.minecraft.util.parsing.packrat.commands.CommandArgumentParser. */
export interface CommandArgumentParserMembers<T = unknown> {
  mapResult<S>(arg0: JavaFunction<T, S>): CommandArgumentParser<S>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseForCommands(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
  parseForSuggestions(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  withCodec<T, O>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [O]>, arg1: CommandArgumentParser<O>, arg2: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg3: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">): CommandArgumentParser<T>;
}
export type CommandArgumentParser<T = unknown> = CommandArgumentParserMembers<T>;
export interface CommandArgumentParserStatics {
}

/** JVM record net.minecraft.util.parsing.packrat.commands.Grammar. */
export interface GrammarMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CommandArgumentParser<T>];
  equals(arg0: object): boolean;
  hashCode(): number;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): JavaOptional<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseForCommands(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
  parseForSuggestions(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  rules(): j_net_minecraft_util_parsing_packrat.Dictionary<JavaOpaque<"com.mojang.brigadier.StringReader">>;
  toString(): string;
  top(): j_net_minecraft_util_parsing_packrat.NamedRule<JavaOpaque<"com.mojang.brigadier.StringReader">, T>;
}
export type Grammar<T = unknown> = GrammarMembers<T> & JavaOpaque<"java.lang.Record"> & CommandArgumentParser<T>;
export interface GrammarStatics {
  new<T>(arg0: j_net_minecraft_util_parsing_packrat.Dictionary<JavaOpaque<"com.mojang.brigadier.StringReader">>, arg1: j_net_minecraft_util_parsing_packrat.NamedRule<JavaOpaque<"com.mojang.brigadier.StringReader">, T>): Grammar<T>;
}

/** JVM class net.minecraft.util.parsing.packrat.commands.GreedyPatternParseRule. */
export interface GreedyPatternParseRuleMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>];
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState): object;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): string;
}
export type GreedyPatternParseRule = GreedyPatternParseRuleMembers & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>;
export interface GreedyPatternParseRuleStatics {
  new(arg0: JavaOpaque<"java.util.regex.Pattern">, arg1: j_net_minecraft_util_parsing_packrat.DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>): GreedyPatternParseRule;
}

/** JVM abstract net.minecraft.util.parsing.packrat.commands.GreedyPredicateParseRule. */
export interface GreedyPredicateParseRuleMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>];
  isAccepted(arg0: string): boolean;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState): object | null;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): string | null;
}
export type GreedyPredicateParseRule = GreedyPredicateParseRuleMembers & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>;
export interface GreedyPredicateParseRuleStatics {
  new(arg0: number, arg1: number, arg2: j_net_minecraft_util_parsing_packrat.DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>): GreedyPredicateParseRule;
  new(arg0: number, arg1: j_net_minecraft_util_parsing_packrat.DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>): GreedyPredicateParseRule;
}

/** JVM abstract net.minecraft.util.parsing.packrat.commands.NumberRunParseRule. */
export interface NumberRunParseRuleMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>];
  isAccepted(arg0: string): boolean;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState): object | null;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): string | null;
}
export type NumberRunParseRule = NumberRunParseRuleMembers & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>;
export interface NumberRunParseRuleStatics {
  new(arg0: j_net_minecraft_util_parsing_packrat.DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>, arg1: j_net_minecraft_util_parsing_packrat.DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>): NumberRunParseRule;
}

/** JVM abstract net.minecraft.util.parsing.packrat.commands.ParserBasedArgument. */
export interface ParserBasedArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>];
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
}
export type ParserBasedArgument<T = unknown> = ParserBasedArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>;
export interface ParserBasedArgumentStatics {
  new<T>(arg0: CommandArgumentParser<T>): ParserBasedArgument<T>;
}

/** JVM class net.minecraft.util.parsing.packrat.commands.ResourceLocationParseRule. */
export interface ResourceLocationParseRuleMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, j_net_minecraft_resources.ResourceLocation>];
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState): object | null;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): j_net_minecraft_resources.ResourceLocation | null;
}
export type ResourceLocationParseRule = ResourceLocationParseRuleMembers & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, j_net_minecraft_resources.ResourceLocation>;
export interface ResourceLocationParseRuleStatics {
  readonly INSTANCE: j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, j_net_minecraft_resources.ResourceLocation>;
}

/** JVM abstract net.minecraft.util.parsing.packrat.commands.ResourceLookupRule. */
export interface ResourceLookupRuleMembers<C = unknown, V = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, V>, ResourceSuggestion];
  readonly context: C;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): V | null;
  /** @throws java.lang.Exception */
  validateElement(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_resources.ResourceLocation): V;
}
export type ResourceLookupRule<C = unknown, V = unknown> = ResourceLookupRuleMembers<C, V> & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, V> & ResourceSuggestion;
export interface ResourceLookupRuleStatics {
  new<C, V>(arg0: j_net_minecraft_util_parsing_packrat.NamedRule<JavaOpaque<"com.mojang.brigadier.StringReader">, j_net_minecraft_resources.ResourceLocation>, arg1: C): ResourceLookupRule<C, V>;
}

/** JVM interface net.minecraft.util.parsing.packrat.commands.ResourceSuggestion. */
export interface ResourceSuggestionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.SuggestionSupplier<JavaOpaque<"com.mojang.brigadier.StringReader">>];
  possibleResources(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  possibleValues(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): JavaOpaque<"java.util.stream.Stream", [string]>;
}
export type ResourceSuggestion = ResourceSuggestionMembers & j_net_minecraft_util_parsing_packrat.SuggestionSupplier<JavaOpaque<"com.mojang.brigadier.StringReader">>;
export interface ResourceSuggestionStatics {
}

/** JVM class net.minecraft.util.parsing.packrat.commands.StringReaderParserState. */
export interface StringReaderParserStateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.CachedParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>];
  input(): JavaOpaque<"com.mojang.brigadier.StringReader">;
  input(): object;
  mark(): number;
  restore(arg0: number): void;
}
export type StringReaderParserState = StringReaderParserStateMembers & j_net_minecraft_util_parsing_packrat.CachedParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>;
export interface StringReaderParserStateStatics {
  new(arg0: j_net_minecraft_util_parsing_packrat.ErrorCollector<JavaOpaque<"com.mojang.brigadier.StringReader">>, arg1: JavaOpaque<"com.mojang.brigadier.StringReader">): StringReaderParserState;
}

/** JVM interface net.minecraft.util.parsing.packrat.commands.StringReaderTerms. */
export interface StringReaderTermsMembers {
}
export type StringReaderTerms = StringReaderTermsMembers;
export interface StringReaderTermsStatics {
  character(arg0: string): j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>;
  characters(arg0: string, arg1: string): j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>;
  createReader(arg0: string, arg1: number): JavaOpaque<"com.mojang.brigadier.StringReader">;
  word(arg0: string): j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>;
}

/** JVM abstract net.minecraft.util.parsing.packrat.commands.StringReaderTerms$TerminalCharacters. */
export interface StringReaderTerms_TerminalCharactersMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>];
  isAccepted(arg0: string): boolean;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>, arg1: j_net_minecraft_util_parsing_packrat.Scope, arg2: j_net_minecraft_util_parsing_packrat.Control): boolean;
}
export type StringReaderTerms_TerminalCharacters = StringReaderTerms_TerminalCharactersMembers & j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>;
export interface StringReaderTerms_TerminalCharactersStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.chars.CharList">): StringReaderTerms_TerminalCharacters;
}

/** JVM class net.minecraft.util.parsing.packrat.commands.StringReaderTerms$TerminalWord. */
export interface StringReaderTerms_TerminalWordMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>];
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>, arg1: j_net_minecraft_util_parsing_packrat.Scope, arg2: j_net_minecraft_util_parsing_packrat.Control): boolean;
  toString(): string;
}
export type StringReaderTerms_TerminalWord = StringReaderTerms_TerminalWordMembers & j_net_minecraft_util_parsing_packrat.Term<JavaOpaque<"com.mojang.brigadier.StringReader">>;
export interface StringReaderTerms_TerminalWordStatics {
  new(arg0: string): StringReaderTerms_TerminalWord;
}

/** JVM class net.minecraft.util.parsing.packrat.commands.TagParseRule. */
export interface TagParseRuleMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, JavaOpaque<"com.mojang.serialization.Dynamic", [object]>>];
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): JavaOpaque<"com.mojang.serialization.Dynamic", [T]> | null;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState): object | null;
}
export type TagParseRule<T = unknown> = TagParseRuleMembers<T> & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, JavaOpaque<"com.mojang.serialization.Dynamic", [object]>>;
export interface TagParseRuleStatics {
  new<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [T]>): TagParseRule<T>;
}

/** JVM class net.minecraft.util.parsing.packrat.commands.UnquotedStringParseRule. */
export interface UnquotedStringParseRuleMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>];
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState): object | null;
  parse(arg0: j_net_minecraft_util_parsing_packrat.ParseState<JavaOpaque<"com.mojang.brigadier.StringReader">>): string | null;
}
export type UnquotedStringParseRule = UnquotedStringParseRuleMembers & j_net_minecraft_util_parsing_packrat.Rule<JavaOpaque<"com.mojang.brigadier.StringReader">, string>;
export interface UnquotedStringParseRuleStatics {
  new(arg0: number, arg1: j_net_minecraft_util_parsing_packrat.DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>): UnquotedStringParseRule;
}
