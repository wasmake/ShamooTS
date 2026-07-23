// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM record net.minecraft.util.parsing.packrat.Atom. */
export interface AtomMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  toString(): string;
}
export type Atom<T = unknown> = AtomMembers<T> & JavaOpaque<"java.lang.Record">;
export interface AtomStatics {
  new<T>(arg0: string): Atom<T>;
  of<T>(arg0: string): Atom<T>;
}

/** JVM abstract net.minecraft.util.parsing.packrat.CachedParseState. */
export interface CachedParseStateMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [ParseState<S>];
  acquireControl(): Control;
  errorCollector(): ErrorCollector<S>;
  parse<T>(arg0: NamedRule<S, T>): T | null;
  releaseControl(): void;
  scope(): Scope;
  silent(): ParseState<S>;
}
export type CachedParseState<S = unknown> = CachedParseStateMembers<S> & ParseState<S>;
export interface CachedParseStateStatics {
  new<S>(arg0: ErrorCollector<S>): CachedParseState<S>;
}

/** JVM interface net.minecraft.util.parsing.packrat.Control. */
export interface ControlMembers {
  cut(): void;
  hasCut(): boolean;
}
export type Control = ControlMembers;
export interface ControlStatics {
  readonly UNBOUND: Control;
}

/** JVM interface net.minecraft.util.parsing.packrat.DelayedException. */
export interface DelayedExceptionMembers<T /* extends JavaOpaque<"java.lang.Exception"> */ = unknown> {
  create(arg0: string, arg1: number): T;
}
export type DelayedException<T /* extends JavaOpaque<"java.lang.Exception"> */ = unknown> = DelayedExceptionMembers<T>;
export interface DelayedExceptionStatics {
  create(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">, arg1: string): DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>;
  create(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">): DelayedException<JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">>;
}

/** JVM class net.minecraft.util.parsing.packrat.Dictionary. */
export interface DictionaryMembers<S = unknown> {
  checkAllBound(): void;
  forward<T>(arg0: Atom<T>): NamedRule<S, T>;
  getOrThrow<T>(arg0: Atom<T>): NamedRule<S, T>;
  named<T>(arg0: Atom<T>): Term<S>;
  namedWithAlias<T>(arg0: Atom<T>, arg1: Atom<T>): Term<S>;
  put<T>(arg0: Atom<T>, arg1: Rule<S, T>): NamedRule<S, T>;
  put<T>(arg0: Atom<T>, arg1: Term<S>, arg2: Rule_SimpleRuleAction<S, T>): NamedRule<S, T>;
  putComplex<T>(arg0: Atom<T>, arg1: Term<S>, arg2: Rule_RuleAction<S, T>): NamedRule<S, T>;
}
export type Dictionary<S = unknown> = DictionaryMembers<S>;
export interface DictionaryStatics {
  new<S>(): Dictionary<S>;
}

/** JVM interface net.minecraft.util.parsing.packrat.ErrorCollector. */
export interface ErrorCollectorMembers<S = unknown> {
  finish(arg0: number): void;
  store(arg0: number, arg1: object): void;
  store(arg0: number, arg1: SuggestionSupplier<S>, arg2: object): void;
}
export type ErrorCollector<S = unknown> = ErrorCollectorMembers<S>;
export interface ErrorCollectorStatics {
}

/** JVM class net.minecraft.util.parsing.packrat.ErrorCollector$LongestOnly. */
export interface ErrorCollector_LongestOnlyMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [ErrorCollector<S>];
  cursor(): number;
  entries(): JavaList<ErrorEntry<S>>;
  finish(arg0: number): void;
  store(arg0: number, arg1: SuggestionSupplier<S>, arg2: object): void;
}
export type ErrorCollector_LongestOnly<S = unknown> = ErrorCollector_LongestOnlyMembers<S> & ErrorCollector<S>;
export interface ErrorCollector_LongestOnlyStatics {
  new<S>(): ErrorCollector_LongestOnly<S>;
}

/** JVM class net.minecraft.util.parsing.packrat.ErrorCollector$Nop. */
export interface ErrorCollector_NopMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [ErrorCollector<S>];
  finish(arg0: number): void;
  store(arg0: number, arg1: SuggestionSupplier<S>, arg2: object): void;
}
export type ErrorCollector_Nop<S = unknown> = ErrorCollector_NopMembers<S> & ErrorCollector<S>;
export interface ErrorCollector_NopStatics {
  new<S>(): ErrorCollector_Nop<S>;
}

/** JVM record net.minecraft.util.parsing.packrat.ErrorEntry. */
export interface ErrorEntryMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  cursor(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  reason(): object;
  suggestions(): SuggestionSupplier<S>;
  toString(): string;
}
export type ErrorEntry<S = unknown> = ErrorEntryMembers<S> & JavaOpaque<"java.lang.Record">;
export interface ErrorEntryStatics {
  new<S>(arg0: number, arg1: SuggestionSupplier<S>, arg2: object): ErrorEntry<S>;
}

/** JVM interface net.minecraft.util.parsing.packrat.NamedRule. */
export interface NamedRuleMembers<S = unknown, T = unknown> {
  name(): Atom<T>;
  value(): Rule<S, T>;
}
export type NamedRule<S = unknown, T = unknown> = NamedRuleMembers<S, T>;
export interface NamedRuleStatics {
}

/** JVM interface net.minecraft.util.parsing.packrat.ParseState. */
export interface ParseStateMembers<S = unknown> {
  acquireControl(): Control;
  errorCollector(): ErrorCollector<S>;
  input(): S;
  mark(): number;
  parse<T>(arg0: NamedRule<S, T>): T | null;
  parseTopRule<T>(arg0: NamedRule<S, T>): JavaOptional<T>;
  releaseControl(): void;
  restore(arg0: number): void;
  scope(): Scope;
  silent(): ParseState<S>;
}
export type ParseState<S = unknown> = ParseStateMembers<S>;
export interface ParseStateStatics {
}

/** JVM interface net.minecraft.util.parsing.packrat.Rule. */
export interface RuleMembers<S = unknown, T = unknown> {
  parse(arg0: ParseState<S>): T | null;
}
export type Rule<S = unknown, T = unknown> = RuleMembers<S, T>;
export interface RuleStatics {
  fromTerm<S, T>(arg0: Term<S>, arg1: Rule_RuleAction<S, T>): Rule<S, T>;
  fromTerm<S, T>(arg0: Term<S>, arg1: Rule_SimpleRuleAction<S, T>): Rule<S, T>;
}

/** JVM interface net.minecraft.util.parsing.packrat.Rule$RuleAction. */
export interface Rule_RuleActionMembers<S = unknown, T = unknown> {
  run(arg0: ParseState<S>): T | null;
}
export type Rule_RuleAction<S = unknown, T = unknown> = Rule_RuleActionMembers<S, T>;
export interface Rule_RuleActionStatics {
}

/** JVM interface net.minecraft.util.parsing.packrat.Rule$SimpleRuleAction. */
export interface Rule_SimpleRuleActionMembers<S = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [Rule_RuleAction<S, T>];
  run(arg0: ParseState<S>): T;
  run(arg0: Scope): T;
}
export type Rule_SimpleRuleAction<S = unknown, T = unknown> = Rule_SimpleRuleActionMembers<S, T> & Rule_RuleAction<S, T>;
export interface Rule_SimpleRuleActionStatics {
}

/** JVM record net.minecraft.util.parsing.packrat.Rule$WrappedTerm. */
export interface Rule_WrappedTermMembers<S = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Rule<S, T>];
  action(): Rule_RuleAction<S, T>;
  child(): Term<S>;
  equals(arg0: object): boolean;
  hashCode(): number;
  parse(arg0: ParseState<S>): T | null;
  toString(): string;
}
export type Rule_WrappedTerm<S = unknown, T = unknown> = Rule_WrappedTermMembers<S, T> & JavaOpaque<"java.lang.Record"> & Rule<S, T>;
export interface Rule_WrappedTermStatics {
  new<S, T>(arg0: Rule_RuleAction<S, T>, arg1: Term<S>): Rule_WrappedTerm<S, T>;
}

/** JVM class net.minecraft.util.parsing.packrat.Scope. */
export interface ScopeMembers {
  clearFrameValues(): void;
  get<T>(arg0: Atom<T>): T | null;
  getAny<T>(...arg0: Array<Atom<T>>): T | null;
  getAnyOrThrow<T>(...arg0: Array<Atom<T>>): T;
  getOrDefault<T>(arg0: Atom<T>, arg1: T): T;
  getOrThrow<T>(arg0: Atom<T>): T;
  hasOnlySingleFrame(): boolean;
  lastFrame(): JavaMap<Atom<object>, object>;
  mergeFrame(): void;
  popFrame(): void;
  pushFrame(): void;
  put<T>(arg0: Atom<T>, arg1: T | null): void | null;
  splitFrame(): void;
  toString(): string;
  valueIndexForAny(...arg0: Array<Atom<object>>): number;
}
export type Scope = ScopeMembers;
export interface ScopeStatics {
  new(): Scope;
  decreaseDepth<S>(): Term<S>;
  increaseDepth<S>(): Term<S>;
}

/** JVM interface net.minecraft.util.parsing.packrat.SuggestionSupplier. */
export interface SuggestionSupplierMembers<S = unknown> {
  possibleValues(arg0: ParseState<S>): JavaOpaque<"java.util.stream.Stream", [string]>;
}
export type SuggestionSupplier<S = unknown> = SuggestionSupplierMembers<S>;
export interface SuggestionSupplierStatics {
  empty<S>(): SuggestionSupplier<S>;
}

/** JVM interface net.minecraft.util.parsing.packrat.Term. */
export interface TermMembers<S = unknown> {
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
}
export type Term<S = unknown> = TermMembers<S>;
export interface TermStatics {
  alternative<S>(...arg0: Array<Term<S>>): Term<S>;
  cut<S>(): Term<S>;
  empty<S>(): Term<S>;
  fail<S>(arg0: object): Term<S>;
  marker<S, T>(arg0: Atom<T>, arg1: T): Term<S>;
  negativeLookahead<S>(arg0: Term<S>): Term<S>;
  optional<S>(arg0: Term<S>): Term<S>;
  positiveLookahead<S>(arg0: Term<S>): Term<S>;
  repeated<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>): Term<S>;
  repeated<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: number): Term<S>;
  repeatedWithTrailingSeparator<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: Term<S>): Term<S>;
  repeatedWithTrailingSeparator<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: Term<S>, arg3: number): Term<S>;
  repeatedWithoutTrailingSeparator<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: Term<S>): Term<S>;
  repeatedWithoutTrailingSeparator<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: Term<S>, arg3: number): Term<S>;
  sequence<S>(...arg0: Array<Term<S>>): Term<S>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$Alternative. */
export interface Term_AlternativeMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  elements(): Array<Term<S>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  toString(): string;
}
export type Term_Alternative<S = unknown> = Term_AlternativeMembers<S> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_AlternativeStatics {
  new<S>(arg0: Array<Term<S>>): Term_Alternative<S>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$LookAhead. */
export interface Term_LookAheadMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  equals(arg0: object): boolean;
  hashCode(): number;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  positive(): boolean;
  term(): Term<S>;
  toString(): string;
}
export type Term_LookAhead<S = unknown> = Term_LookAheadMembers<S> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_LookAheadStatics {
  new<S>(arg0: Term<S>, arg1: boolean): Term_LookAhead<S>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$Marker. */
export interface Term_MarkerMembers<S = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): Atom<T>;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  toString(): string;
  value(): T;
}
export type Term_Marker<S = unknown, T = unknown> = Term_MarkerMembers<S, T> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_MarkerStatics {
  new<S, T>(arg0: Atom<T>, arg1: T): Term_Marker<S, T>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$Maybe. */
export interface Term_MaybeMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  equals(arg0: object): boolean;
  hashCode(): number;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  term(): Term<S>;
  toString(): string;
}
export type Term_Maybe<S = unknown> = Term_MaybeMembers<S> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_MaybeStatics {
  new<S>(arg0: Term<S>): Term_Maybe<S>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$Repeated. */
export interface Term_RepeatedMembers<S = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  element(): NamedRule<S, T>;
  equals(arg0: object): boolean;
  hashCode(): number;
  listName(): Atom<JavaList<T>>;
  minRepetitions(): number;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  toString(): string;
}
export type Term_Repeated<S = unknown, T = unknown> = Term_RepeatedMembers<S, T> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_RepeatedStatics {
  new<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: number): Term_Repeated<S, T>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$RepeatedWithSeparator. */
export interface Term_RepeatedWithSeparatorMembers<S = unknown, T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  allowTrailingSeparator(): boolean;
  element(): NamedRule<S, T>;
  equals(arg0: object): boolean;
  hashCode(): number;
  listName(): Atom<JavaList<T>>;
  minRepetitions(): number;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  separator(): Term<S>;
  toString(): string;
}
export type Term_RepeatedWithSeparator<S = unknown, T = unknown> = Term_RepeatedWithSeparatorMembers<S, T> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_RepeatedWithSeparatorStatics {
  new<S, T>(arg0: NamedRule<S, T>, arg1: Atom<JavaList<T>>, arg2: Term<S>, arg3: number, arg4: boolean): Term_RepeatedWithSeparator<S, T>;
}

/** JVM record net.minecraft.util.parsing.packrat.Term$Sequence. */
export interface Term_SequenceMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, Term<S>];
  elements(): Array<Term<S>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  parse(arg0: ParseState<S>, arg1: Scope, arg2: Control): boolean;
  toString(): string;
}
export type Term_Sequence<S = unknown> = Term_SequenceMembers<S> & JavaOpaque<"java.lang.Record"> & Term<S>;
export interface Term_SequenceStatics {
  new<S>(arg0: Array<Term<S>>): Term_Sequence<S>;
}
