// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tree from './net.kyori.adventure.text.minimessage.tree.generated.js';

/** JVM interface net.kyori.adventure.text.minimessage.tag.Inserting. */
export interface InsertingMembers {
  readonly __javaSupertypes?: readonly [Tag_2];
  allowsChildren(): boolean;
  value(): j_net_kyori_adventure_text.Component;
}
export type Inserting = InsertingMembers & Tag_2;
export interface InsertingStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.Modifying. */
export interface ModifyingMembers {
  readonly __javaSupertypes?: readonly [Tag_2];
  apply(arg0: j_net_kyori_adventure_text.Component, arg1: number): j_net_kyori_adventure_text.Component;
  postVisit(): void;
  visit(arg0: j_net_kyori_adventure_text_minimessage_tree.Node, arg1: number): void;
}
export type Modifying = ModifyingMembers & Tag_2;
export interface ModifyingStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.ParserDirective. */
export interface ParserDirectiveMembers {
  readonly __javaSupertypes?: readonly [Tag_2];
}
export type ParserDirective = ParserDirectiveMembers & Tag_2;
export interface ParserDirectiveStatics {
  readonly RESET: Tag_2;
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.PreProcess. */
export interface PreProcessMembers {
  readonly __javaSupertypes?: readonly [Tag_2];
  value(): string;
}
export type PreProcess = PreProcessMembers & Tag_2;
export interface PreProcessStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.Tag. */
export interface Tag_2Members {
}
export type Tag_2 = Tag_2Members;
export interface Tag_2Statics {
  inserting(arg0: j_net_kyori_adventure_text.Component): Tag_2;
  inserting(arg0: j_net_kyori_adventure_text.ComponentLike): Tag_2;
  preProcessParsed(arg0: string): PreProcess;
  selfClosingInserting(arg0: j_net_kyori_adventure_text.Component): Tag_2;
  selfClosingInserting(arg0: j_net_kyori_adventure_text.ComponentLike): Tag_2;
  styling(arg0: JavaConsumer<j_net_kyori_adventure_text_format.Style_Builder>): Tag_2;
  styling(...arg0: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): Tag_2;
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.Tag$Argument. */
export interface Tag_ArgumentMembers {
  asDouble(): JavaOptionalNumber;
  asInt(): JavaOptionalNumber;
  isFalse(): boolean;
  isTrue(): boolean;
  lowerValue(): string;
  value(): string;
}
export type Tag_Argument = Tag_ArgumentMembers;
export interface Tag_ArgumentStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.TagPattern. */
export interface TagPatternMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type TagPattern = TagPatternMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface TagPatternStatics {
}
