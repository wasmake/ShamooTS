// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag from './net.kyori.adventure.text.minimessage.tag.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag_resolver from './net.kyori.adventure.text.minimessage.tag.resolver.generated.js';

/** JVM class net.kyori.adventure.text.minimessage.tag.standard.StandardTags. */
export interface StandardTagsMembers {
}
export type StandardTags = StandardTagsMembers;
export interface StandardTagsStatics {
  clickEvent(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  color(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  decorations(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  decorations(arg0: j_net_kyori_adventure_text_format.TextDecoration): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  defaults(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  font(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  gradient(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  hoverEvent(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  insertion(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  keybind(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  nbt(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  newline(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  pride(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  rainbow(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  reset(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  score(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  selector(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  shadowColor(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  transition(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  translatable(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  translatableFallback(): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
}

/** JVM class net.kyori.adventure.text.minimessage.tag.standard.TransitionTag. */
export interface TransitionTagMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_minimessage_tag.Inserting, JavaOpaque<"net.kyori.examination.Examinable">];
  equals(arg0: object): boolean;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hashCode(): number;
  value(): j_net_kyori_adventure_text.Component;
}
export type TransitionTag = TransitionTagMembers & j_net_kyori_adventure_text_minimessage_tag.Inserting & JavaOpaque<"net.kyori.examination.Examinable">;
export interface TransitionTagStatics {
  readonly TRANSITION: "transition";
}
