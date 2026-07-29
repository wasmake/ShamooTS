// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_pointer from './net.kyori.adventure.pointer.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_minimessage from './net.kyori.adventure.text.minimessage.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag from './net.kyori.adventure.text.minimessage.tag.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag_resolver from './net.kyori.adventure.text.minimessage.tag.resolver.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';

/** JVM class net.kyori.adventure.text.minimessage.translation.Argument. */
export interface ArgumentMembers {
}
export type Argument = ArgumentMembers;
export interface ArgumentStatics {
  argument(arg0: string, arg1: j_net_kyori_adventure_text.TranslationArgument): j_net_kyori_adventure_text.ComponentLike;
  argument(arg0: string, arg1: j_net_kyori_adventure_text.TranslationArgumentLike): j_net_kyori_adventure_text.ComponentLike;
  bool(arg0: string, arg1: boolean): j_net_kyori_adventure_text.ComponentLike;
  component(arg0: string, arg1: j_net_kyori_adventure_text.ComponentLike): j_net_kyori_adventure_text.ComponentLike;
  numeric(arg0: string, arg1: number): j_net_kyori_adventure_text.ComponentLike;
  numeric(arg0: string, arg1: string): j_net_kyori_adventure_text.ComponentLike;
  string(arg0: string, arg1: string): j_net_kyori_adventure_text.ComponentLike;
  tag(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag.Tag_2): j_net_kyori_adventure_text.ComponentLike;
  tagResolver(arg0: Iterable<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text.ComponentLike;
  tagResolver(arg0: j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver): j_net_kyori_adventure_text.ComponentLike;
  tagResolver(...arg0: Array<j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver>): j_net_kyori_adventure_text.ComponentLike;
  target(arg0: j_net_kyori_adventure_pointer.Pointered): j_net_kyori_adventure_text.ComponentLike;
}

/** JVM interface net.kyori.adventure.text.minimessage.translation.MiniMessageTranslationStore. */
export interface MiniMessageTranslationStoreMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_translation.TranslationStore_StringBased<string>];
}
export type MiniMessageTranslationStore = MiniMessageTranslationStoreMembers & j_net_kyori_adventure_translation.TranslationStore_StringBased<string>;
export interface MiniMessageTranslationStoreStatics {
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): MiniMessageTranslationStore;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: j_net_kyori_adventure_text_minimessage.MiniMessage): MiniMessageTranslationStore;
}

/** JVM abstract net.kyori.adventure.text.minimessage.translation.MiniMessageTranslator. */
export interface MiniMessageTranslatorMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_translation.Translator];
  translate(arg0: string, arg1: JavaOpaque<"java.util.Locale">): JavaOpaque<"java.text.MessageFormat"> | null;
  translate(arg0: j_net_kyori_adventure_text.TranslatableComponent, arg1: JavaOpaque<"java.util.Locale">): j_net_kyori_adventure_text.Component | null;
}
export type MiniMessageTranslator = MiniMessageTranslatorMembers & j_net_kyori_adventure_translation.Translator;
export interface MiniMessageTranslatorStatics {
}
