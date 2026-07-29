// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_text_minimessage from './net.kyori.adventure.text.minimessage.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag from './net.kyori.adventure.text.minimessage.tag.generated.js';
import type * as j_net_kyori_adventure_text_minimessage_tag_resolver from './net.kyori.adventure.text.minimessage.tag.resolver.generated.js';

/** JVM interface net.kyori.adventure.text.minimessage.internal.serializer.ClaimConsumer. */
export interface ClaimConsumerMembers {
  component(arg0: Emitable): boolean;
  componentClaimed(): boolean;
  style(arg0: string, arg1: Emitable): void;
  styleClaimed(arg0: string): boolean;
}
export type ClaimConsumer = ClaimConsumerMembers;
export interface ClaimConsumerStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.internal.serializer.Emitable. */
export interface EmitableMembers {
  emit(arg0: TokenEmitter): void;
  substitute(): j_net_kyori_adventure_text.Component | null;
}
export type Emitable = EmitableMembers;
export interface EmitableStatics {
}

/** Live JVM enum net.kyori.adventure.text.minimessage.internal.serializer.QuotingOverride; constants are host handles, not strings. */
export type QuotingOverride = JavaEnum<"net.kyori.adventure.text.minimessage.internal.serializer.QuotingOverride", "QUOTED" | "UNQUOTED"> & QuotingOverrideMembers;
export interface QuotingOverrideMembers {
}
export interface QuotingOverrideStatics {
  readonly QUOTED: QuotingOverride;
  readonly UNQUOTED: QuotingOverride;
  valueOf(arg0: string): QuotingOverride;
  values(): Array<QuotingOverride>;
}

/** JVM interface net.kyori.adventure.text.minimessage.internal.serializer.SerializableResolver. */
export interface SerializableResolverMembers {
  handle(arg0: j_net_kyori_adventure_text.Component, arg1: ClaimConsumer): void;
}
export type SerializableResolver = SerializableResolverMembers;
export interface SerializableResolverStatics {
  claimingComponent(arg0: string, arg1: JavaBiFunction<j_net_kyori_adventure_text_minimessage_tag_resolver.ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>, arg2: JavaFunction<j_net_kyori_adventure_text.Component, Emitable> | null): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  claimingComponent(arg0: JavaSet<string>, arg1: JavaBiFunction<j_net_kyori_adventure_text_minimessage_tag_resolver.ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>, arg2: JavaFunction<j_net_kyori_adventure_text.Component, Emitable> | null): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  claimingStyle(arg0: string, arg1: JavaBiFunction<j_net_kyori_adventure_text_minimessage_tag_resolver.ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>, arg2: StyleClaim<object>): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
  claimingStyle(arg0: JavaSet<string>, arg1: JavaBiFunction<j_net_kyori_adventure_text_minimessage_tag_resolver.ArgumentQueue, j_net_kyori_adventure_text_minimessage.Context, j_net_kyori_adventure_text_minimessage_tag.Tag_2>, arg2: StyleClaim<object>): j_net_kyori_adventure_text_minimessage_tag_resolver.TagResolver;
}

/** JVM interface net.kyori.adventure.text.minimessage.internal.serializer.SerializableResolver$Single. */
export interface SerializableResolver_SingleMembers {
  readonly __javaSupertypes?: readonly [SerializableResolver];
  claimComponent(arg0: j_net_kyori_adventure_text.Component): Emitable | null;
  claimStyle(): StyleClaim<object> | null;
  handle(arg0: j_net_kyori_adventure_text.Component, arg1: ClaimConsumer): void;
}
export type SerializableResolver_Single = SerializableResolver_SingleMembers & SerializableResolver;
export interface SerializableResolver_SingleStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.internal.serializer.StyleClaim. */
export interface StyleClaimMembers<V = unknown> {
  apply(arg0: j_net_kyori_adventure_text_format.Style): Emitable | null;
  claimKey(): string;
}
export type StyleClaim<V = unknown> = StyleClaimMembers<V>;
export interface StyleClaimStatics {
  claim<T>(arg0: string, arg1: JavaFunction<j_net_kyori_adventure_text_format.Style, T> | null, arg2: JavaBiConsumer<T, TokenEmitter>): StyleClaim<T>;
  claim<T>(arg0: string, arg1: JavaFunction<j_net_kyori_adventure_text_format.Style, T> | null, arg2: JavaPredicate<T>, arg3: JavaBiConsumer<T, TokenEmitter>): StyleClaim<T>;
}

/** JVM interface net.kyori.adventure.text.minimessage.internal.serializer.TokenEmitter. */
export interface TokenEmitterMembers {
  argument(arg0: string): TokenEmitter;
  argument(arg0: string, arg1: QuotingOverride): TokenEmitter;
  argument(arg0: j_net_kyori_adventure_text.Component): TokenEmitter;
  arguments(...arg0: Array<string>): TokenEmitter;
  pop(): TokenEmitter;
  selfClosingTag(arg0: string): TokenEmitter;
  tag(arg0: string): TokenEmitter;
  text(arg0: string): TokenEmitter;
}
export type TokenEmitter = TokenEmitterMembers;
export interface TokenEmitterStatics {
}
