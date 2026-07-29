// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_text_minimessage from './net.kyori.adventure.text.minimessage.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag from './net.kyori.adventure.text.minimessage.tag.generated.js';

/** JVM interface net.kyori.adventure.text.minimessage.tag.resolver.ArgumentQueue. */
export interface ArgumentQueueMembers {
  hasNext(): boolean;
  peek(): j_net_kyori_adventure_text_minimessage_tag.Tag_Argument | null;
  pop(): j_net_kyori_adventure_text_minimessage_tag.Tag_Argument;
  popOr(arg0: string): j_net_kyori_adventure_text_minimessage_tag.Tag_Argument;
  popOr(arg0: JavaSupplier<string>): j_net_kyori_adventure_text_minimessage_tag.Tag_Argument;
  reset(): void;
}
export type ArgumentQueue = ArgumentQueueMembers;
export interface ArgumentQueueStatics {
}

/** JVM class net.kyori.adventure.text.minimessage.tag.resolver.Formatter. */
export interface FormatterMembers {
}
export type Formatter = FormatterMembers;
export interface FormatterStatics {
  booleanChoice(arg0: string, arg1: boolean): TagResolver;
  choice(arg0: string, arg1: number): TagResolver;
  date(arg0: string, arg1: JavaOpaque<"java.time.temporal.TemporalAccessor">): TagResolver;
  joining(arg0: string, arg1: Iterable<j_net_kyori_adventure_text.ComponentLike>): TagResolver;
  joining(arg0: string, ...arg1: Array<j_net_kyori_adventure_text.ComponentLike>): TagResolver;
  number(arg0: string, arg1: number): TagResolver;
}

/** JVM class net.kyori.adventure.text.minimessage.tag.resolver.Placeholder. */
export interface PlaceholderMembers {
}
export type Placeholder = PlaceholderMembers;
export interface PlaceholderStatics {
  component(arg0: string, arg1: j_net_kyori_adventure_text.ComponentLike): TagResolver_Single;
  parsed(arg0: string, arg1: string): TagResolver_Single;
  styling(arg0: string, ...arg1: Array<j_net_kyori_adventure_text_format.StyleBuilderApplicable>): TagResolver_Single;
  unparsed(arg0: string, arg1: string): TagResolver_Single;
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.resolver.TagResolver. */
export interface TagResolverMembers {
  has(arg0: string): boolean;
  /** @throws net.kyori.adventure.text.minimessage.ParsingException */
  resolve(arg0: string, arg1: ArgumentQueue, arg2: j_net_kyori_adventure_text_minimessage.Context): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
}
export type TagResolver = TagResolverMembers;
export interface TagResolverStatics {
  builder(): TagResolver_Builder;
  caching(arg0: TagResolver_WithoutArguments): TagResolver;
  empty(): TagResolver;
  resolver(arg0: Iterable<TagResolver>): TagResolver;
  resolver(arg0: string, arg1: JavaBiFunction<ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>): TagResolver;
  resolver(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag.Tag_2): TagResolver_Single;
  resolver(arg0: JavaSet<string>, arg1: JavaBiFunction<ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>): TagResolver;
  resolver(...arg0: Array<TagResolver>): TagResolver;
  standard(): TagResolver;
  toTagResolver(): JavaOpaque<"java.util.stream.Collector", [TagResolver, object, TagResolver]>;
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.resolver.TagResolver$Builder. */
export interface TagResolver_BuilderMembers {
  build(): TagResolver;
  caching(arg0: TagResolver_WithoutArguments): TagResolver_Builder;
  resolver(arg0: TagResolver): TagResolver_Builder;
  resolvers(arg0: Iterable<TagResolver>): TagResolver_Builder;
  resolvers(...arg0: Array<TagResolver>): TagResolver_Builder;
  tag(arg0: string, arg1: JavaBiFunction<ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>): TagResolver_Builder;
  tag(arg0: string, arg1: j_net_kyori_adventure_text_minimessage_tag.Tag_2): TagResolver_Builder;
  tag(arg0: JavaSet<string>, arg1: JavaBiFunction<ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>): TagResolver_Builder;
}
export type TagResolver_Builder = TagResolver_BuilderMembers;
export interface TagResolver_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.resolver.TagResolver$Single. */
export interface TagResolver_SingleMembers {
  readonly __javaSupertypes?: readonly [TagResolver_WithoutArguments];
  has(arg0: string): boolean;
  key(): string;
  resolve(arg0: string): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
  tag(): j_net_kyori_adventure_text_minimessage_tag.Tag_2;
}
export type TagResolver_Single = TagResolver_SingleMembers & TagResolver_WithoutArguments;
export interface TagResolver_SingleStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tag.resolver.TagResolver$WithoutArguments. */
export interface TagResolver_WithoutArgumentsMembers {
  readonly __javaSupertypes?: readonly [TagResolver];
  has(arg0: string): boolean;
  resolve(arg0: string): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
  /** @throws net.kyori.adventure.text.minimessage.ParsingException */
  resolve(arg0: string, arg1: ArgumentQueue, arg2: j_net_kyori_adventure_text_minimessage.Context): j_net_kyori_adventure_text_minimessage_tag.Tag_2 | null;
}
export type TagResolver_WithoutArguments = TagResolver_WithoutArgumentsMembers & TagResolver;
export interface TagResolver_WithoutArgumentsStatics {
}
