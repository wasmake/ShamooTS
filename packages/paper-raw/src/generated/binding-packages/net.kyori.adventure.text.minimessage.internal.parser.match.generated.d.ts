// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_internal_parser from './net.kyori.adventure.text.minimessage.internal.parser.generated.js';

/** JVM abstract net.kyori.adventure.text.minimessage.internal.parser.match.MatchedTokenConsumer. */
export interface MatchedTokenConsumerMembers<T = unknown> {
  accept(arg0: number, arg1: number, arg2: j_net_kyori_adventure_text_minimessage_internal_parser.TokenType): void;
  lastEndIndex(): number;
  result(): T;
}
export type MatchedTokenConsumer<T = unknown> = MatchedTokenConsumerMembers<T>;
export interface MatchedTokenConsumerStatics {
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.match.StringResolvingMatchedTokenConsumer. */
export interface StringResolvingMatchedTokenConsumerMembers {
  readonly __javaSupertypes?: readonly [MatchedTokenConsumer<string>];
  accept(arg0: number, arg1: number, arg2: j_net_kyori_adventure_text_minimessage_internal_parser.TokenType): void;
  result(): string;
}
export type StringResolvingMatchedTokenConsumer = StringResolvingMatchedTokenConsumerMembers & MatchedTokenConsumer<string>;
export interface StringResolvingMatchedTokenConsumerStatics {
  new(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_internal_parser.TokenParser_TagProvider): StringResolvingMatchedTokenConsumer;
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.match.TokenListProducingMatchedTokenConsumer. */
export interface TokenListProducingMatchedTokenConsumerMembers {
  readonly __javaSupertypes?: readonly [MatchedTokenConsumer<JavaList<j_net_kyori_adventure_text_minimessage_internal_parser.Token>>];
  accept(arg0: number, arg1: number, arg2: j_net_kyori_adventure_text_minimessage_internal_parser.TokenType): void;
  result(): JavaList<j_net_kyori_adventure_text_minimessage_internal_parser.Token>;
}
export type TokenListProducingMatchedTokenConsumer = TokenListProducingMatchedTokenConsumerMembers & MatchedTokenConsumer<JavaList<j_net_kyori_adventure_text_minimessage_internal_parser.Token>>;
export interface TokenListProducingMatchedTokenConsumerStatics {
  new(arg0: string): TokenListProducingMatchedTokenConsumer;
}
