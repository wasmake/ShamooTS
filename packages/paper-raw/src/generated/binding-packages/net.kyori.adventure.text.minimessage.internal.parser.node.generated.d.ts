// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_internal_parser from './net.kyori.adventure.text.minimessage.internal.parser.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag from './net.kyori.adventure.text.minimessage.tag.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tree from './net.kyori.adventure.text.minimessage.tree.generated.js';

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.node.ElementNode. */
export interface ElementNodeMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_minimessage_tree.Node];
  addChild(arg0: ElementNode): void;
  buildToString(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: number): JavaOpaque<"java.lang.StringBuilder">;
  children(): JavaList<ElementNode>;
  parent(): ElementNode | null;
  sourceMessage(): string;
  toString(): string;
  token(): j_net_kyori_adventure_text_minimessage_internal_parser.Token | null;
  unsafeChildren(): JavaList<ElementNode>;
}
export type ElementNode = ElementNodeMembers & j_net_kyori_adventure_text_minimessage_tree.Node;
export interface ElementNodeStatics {
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.node.RootNode. */
export interface RootNodeMembers {
  readonly __javaSupertypes?: readonly [ElementNode, j_net_kyori_adventure_text_minimessage_tree.Node_Root];
  input(): string;
}
export type RootNode = RootNodeMembers & ElementNode & j_net_kyori_adventure_text_minimessage_tree.Node_Root;
export interface RootNodeStatics {
  new(arg0: string, arg1: string): RootNode;
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.node.TagNode. */
export interface TagNodeMembers {
  readonly __javaSupertypes?: readonly [ElementNode];
  buildToString(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: number): JavaOpaque<"java.lang.StringBuilder">;
  name(): string;
  parts(): JavaList<TagPart>;
  tag(): j_net_kyori_adventure_text_minimessage_tag.Tag_2;
  tag(arg0: j_net_kyori_adventure_text_minimessage_tag.Tag_2): void;
  token(): j_net_kyori_adventure_text_minimessage_internal_parser.Token;
}
export type TagNode = TagNodeMembers & ElementNode;
export interface TagNodeStatics {
  new(arg0: ElementNode, arg1: j_net_kyori_adventure_text_minimessage_internal_parser.Token, arg2: string, arg3: j_net_kyori_adventure_text_minimessage_internal_parser.TokenParser_TagProvider): TagNode;
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.node.TagPart. */
export interface TagPartMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_minimessage_tag.Tag_Argument];
  toString(): string;
  token(): j_net_kyori_adventure_text_minimessage_internal_parser.Token;
  value(): string;
}
export type TagPart = TagPartMembers & j_net_kyori_adventure_text_minimessage_tag.Tag_Argument;
export interface TagPartStatics {
  new(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_internal_parser.Token, arg2: j_net_kyori_adventure_text_minimessage_internal_parser.TokenParser_TagProvider): TagPart;
  unquoteAndEscape(arg0: string, arg1: number, arg2: number): string;
}

/** JVM class net.kyori.adventure.text.minimessage.internal.parser.node.TextNode. */
export interface TextNodeMembers {
  readonly __javaSupertypes?: readonly [ValueNode];
}
export type TextNode = TextNodeMembers & ValueNode;
export interface TextNodeStatics {
  new(arg0: ElementNode | null, arg1: j_net_kyori_adventure_text_minimessage_internal_parser.Token, arg2: string): TextNode;
}

/** JVM abstract net.kyori.adventure.text.minimessage.internal.parser.node.ValueNode. */
export interface ValueNodeMembers {
  readonly __javaSupertypes?: readonly [ElementNode];
  buildToString(arg0: JavaOpaque<"java.lang.StringBuilder">, arg1: number): JavaOpaque<"java.lang.StringBuilder">;
  token(): j_net_kyori_adventure_text_minimessage_internal_parser.Token;
  value(): string;
}
export type ValueNode = ValueNodeMembers & ElementNode;
export interface ValueNodeStatics {
}
