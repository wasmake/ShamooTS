// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text_minimessage from './net.kyori.adventure.text.minimessage.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_internal_parser_match from './net.kyori.adventure.text.minimessage.internal.parser.match.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_internal_parser_node from './net.kyori.adventure.text.minimessage.internal.parser.node.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag from './net.kyori.adventure.text.minimessage.tag.generated.js';

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.ParsingExceptionImpl. */
export interface ParsingExceptionImplMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_minimessage.ParsingException];
  detailMessage(): string | null;
  endIndex(): number;
  getMessage(): string;
  originalText(): string | null;
  startIndex(): number;
  tokens(): Array<Token>;
  tokens(arg0: Array<Token>): void;
}
export type ParsingExceptionImpl = ParsingExceptionImplMembers & j_net_kyori_adventure_text_minimessage.ParsingException;
export interface ParsingExceptionImplStatics {
  new(arg0: string, arg1: string | null, arg2: JavaOpaque<"java.lang.Throwable"> | null, arg3: boolean, ...arg4: Array<Token>): ParsingExceptionImpl;
  new(arg0: string, arg1: string | null, ...arg2: Array<Token>): ParsingExceptionImpl;
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.Token. */
export interface TokenMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  childTokens(): JavaList<Token>;
  childTokens(arg0: JavaList<Token>): void;
  endIndex(): number;
  equals(arg0: object): boolean;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  get(arg0: string): string;
  hashCode(): number;
  startIndex(): number;
  toString(): string;
  type(): TokenType;
}
export type Token = TokenMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface TokenStatics {
  new(arg0: number, arg1: number, arg2: TokenType): Token;
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.TokenParser. */
export interface TokenParserMembers {
}
export type TokenParser = TokenParserMembers;
export interface TokenParserStatics {
  readonly CLOSE_TAG: 47;
  readonly ESCAPE: 92;
  readonly SEPARATOR: 58;
  readonly TAG_END: 62;
  readonly TAG_START: 60;
  /** @throws net.kyori.adventure.text.minimessage.ParsingException */
  parse(arg0: TokenParser_TagProvider, arg1: JavaPredicate<string>, arg2: string, arg3: string, arg4: boolean): j_net_kyori_adventure_text_minimessage_internal_parser_node.RootNode;
  parseString(arg0: string, arg1: boolean, arg2: j_net_kyori_adventure_text_minimessage_internal_parser_match.MatchedTokenConsumer<object>): void;
  resolvePreProcessTags(arg0: string, arg1: TokenParser_TagProvider): string;
  tokenize(arg0: string, arg1: boolean): JavaList<Token>;
  unescape(arg0: string, arg1: number, arg2: number, arg3: JavaOpaque<"java.util.function.IntPredicate">): string;
}

/** JVM interface net.kyori.adventure.text.minimessage.internal.parser.TokenParser$TagProvider. */
export interface TokenParser_TagProviderMembers {
  resolve(arg0: string): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
  resolve(arg0: string, arg1: JavaList<j_net_kyori_adventure_text_minimessage_tag.Tag_Argument>, arg2: Token | null): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
  resolve(arg0: j_net_kyori_adventure_text_minimessage_internal_parser_node.TagNode): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
}
export type TokenParser_TagProvider = TokenParser_TagProviderMembers;
export interface TokenParser_TagProviderStatics {
  sanitizePlaceholderName(arg0: string): string;
}

/** Live JVM enum net.kyori.adventure.text.minimessage.internal.parser.TokenType; constants are host handles, not strings. */
export type TokenType = JavaEnum<"net.kyori.adventure.text.minimessage.internal.parser.TokenType", "CLOSE_TAG" | "OPEN_CLOSE_TAG" | "OPEN_TAG" | "TAG_VALUE" | "TEXT"> & TokenTypeMembers;
export interface TokenTypeMembers {
}
export interface TokenTypeStatics {
  readonly CLOSE_TAG: TokenType;
  readonly OPEN_CLOSE_TAG: TokenType;
  readonly OPEN_TAG: TokenType;
  readonly TAG_VALUE: TokenType;
  readonly TEXT: TokenType;
  valueOf(arg0: string): TokenType;
  values(): Array<TokenType>;
}
