// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_pointer from './net.kyori.adventure.pointer.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag_resolver from './net.kyori.adventure.text.minimessage.tag.resolver.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tree from './net.kyori.adventure.text.minimessage.tree.generated.js';
import type * as j_net_kyori_adventure_text_serializer from './net.kyori.adventure.text.serializer.generated.js';

/** JVM interface net.kyori.adventure.text.minimessage.Context. */
export interface ContextMembers {
  deserialize(arg0: string): j_net_kyori_adventure_text.Component;
  deserialize(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): j_net_kyori_adventure_text.Component;
  deserialize(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text.Component;
  emitVirtuals(): boolean;
  newException(arg0: string): ParsingException;
  newException(arg0: string, arg1: JavaOpaque<"java.lang.Throwable"> | null, arg2: j_net_kyori_adventure_text_minimessage_tag_resolver.ArgumentQueue): ParsingException;
  newException(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag_resolver.ArgumentQueue): ParsingException;
  target(): j_net_kyori_adventure_pointer.Pointered | null;
  targetAsType<T /* extends j_net_kyori_adventure_pointer.Pointered */>(arg0: JavaClass<T>): T;
  targetOrThrow(): j_net_kyori_adventure_pointer.Pointered;
}
export type Context = ContextMembers;
export interface ContextStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.MiniMessage. */
export interface MiniMessageMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_serializer.ComponentSerializer<j_net_kyori_adventure_text.Component, j_net_kyori_adventure_text.Component, string>];
  deserialize(arg0: string, arg1: j_net_kyori_adventure_pointer.Pointered): j_net_kyori_adventure_text.Component;
  deserialize(arg0: string, arg1: j_net_kyori_adventure_pointer.Pointered, arg2: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): j_net_kyori_adventure_text.Component;
  deserialize(arg0: string, arg1: j_net_kyori_adventure_pointer.Pointered, ...arg2: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text.Component;
  deserialize(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): j_net_kyori_adventure_text.Component;
  deserialize(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text.Component;
  deserializeToTree(arg0: string): j_net_kyori_adventure_text_minimessage_tree.Node_Root;
  deserializeToTree(arg0: string, arg1: j_net_kyori_adventure_pointer.Pointered): j_net_kyori_adventure_text_minimessage_tree.Node_Root;
  deserializeToTree(arg0: string, arg1: j_net_kyori_adventure_pointer.Pointered, arg2: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): j_net_kyori_adventure_text_minimessage_tree.Node_Root;
  deserializeToTree(arg0: string, arg1: j_net_kyori_adventure_pointer.Pointered, ...arg2: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text_minimessage_tree.Node_Root;
  deserializeToTree(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): j_net_kyori_adventure_text_minimessage_tree.Node_Root;
  deserializeToTree(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text_minimessage_tree.Node_Root;
  escapeTags(arg0: string): string;
  escapeTags(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): string;
  escapeTags(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): string;
  strict(): boolean;
  stripTags(arg0: string): string;
  stripTags(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): string;
  stripTags(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): string;
  tags(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
}
export type MiniMessage = MiniMessageMembers & j_net_kyori_adventure_text_serializer.ComponentSerializer<j_net_kyori_adventure_text.Component, j_net_kyori_adventure_text.Component, string>;
export interface MiniMessageStatics {
  builder(): MiniMessage_Builder;
  miniMessage(): MiniMessage;
}

/** JVM interface net.kyori.adventure.text.minimessage.MiniMessage$Builder. */
export interface MiniMessage_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<MiniMessage>];
  build(): MiniMessage;
  debug(arg0: JavaConsumer<string> | null): MiniMessage_Builder;
  editTags(arg0: JavaConsumer<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver_Builder>): MiniMessage_Builder;
  emitVirtuals(arg0: boolean): MiniMessage_Builder;
  postProcessor(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_kyori_adventure_text.Component]>): MiniMessage_Builder;
  preProcessor(arg0: JavaOpaque<"java.util.function.UnaryOperator", [string]>): MiniMessage_Builder;
  strict(arg0: boolean): MiniMessage_Builder;
  tags(arg0: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): MiniMessage_Builder;
}
export type MiniMessage_Builder = MiniMessage_BuilderMembers & j_net_kyori_adventure_builder.AbstractBuilder<MiniMessage>;
export interface MiniMessage_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.MiniMessage$Provider. */
export interface MiniMessage_ProviderMembers {
  builder(): JavaConsumer<MiniMessage_Builder>;
  miniMessage(): MiniMessage;
}
export type MiniMessage_Provider = MiniMessage_ProviderMembers;
export interface MiniMessage_ProviderStatics {
}

/** JVM abstract net.kyori.adventure.text.minimessage.ParsingException. */
export interface ParsingExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  detailMessage(): string | null;
  endIndex(): number;
  originalText(): string;
  startIndex(): number;
}
export type ParsingException = ParsingExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ParsingExceptionStatics {
  readonly LOCATION_UNKNOWN: -1;
}
