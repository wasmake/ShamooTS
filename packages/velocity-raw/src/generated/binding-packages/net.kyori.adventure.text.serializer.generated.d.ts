// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface net.kyori.adventure.text.serializer.ComponentDecoder. */
export interface ComponentDecoderMembers<S = unknown, O /* extends j_net_kyori_adventure_text.Component */ = unknown> {
  deserialize(arg0: S): O;
  deserializeOr(arg0: S | null, arg1: O | null): O | null;
  deserializeOrNull(arg0: S | null): O | null;
}
export type ComponentDecoder<S = unknown, O /* extends j_net_kyori_adventure_text.Component */ = unknown> = ComponentDecoderMembers<S, O>;
export interface ComponentDecoderStatics {
}

/** JVM interface net.kyori.adventure.text.serializer.ComponentEncoder. */
export interface ComponentEncoderMembers<I /* extends j_net_kyori_adventure_text.Component */ = unknown, R = unknown> {
  serialize(arg0: I): R;
  serializeOr(arg0: I | null, arg1: R | null): R | null;
  serializeOrNull(arg0: I | null): R | null;
}
export type ComponentEncoder<I /* extends j_net_kyori_adventure_text.Component */ = unknown, R = unknown> = ComponentEncoderMembers<I, R>;
export interface ComponentEncoderStatics {
}

/** JVM interface net.kyori.adventure.text.serializer.ComponentSerializer. */
export interface ComponentSerializerMembers<I /* extends j_net_kyori_adventure_text.Component */ = unknown, O /* extends j_net_kyori_adventure_text.Component */ = unknown, R = unknown> {
  readonly __javaSupertypes?: readonly [ComponentEncoder<I, R>, ComponentDecoder<R, O>];
  deseializeOrNull(arg0: R | null): O | null;
  deserialize(arg0: R): O;
  deserializeOr(arg0: R | null, arg1: O | null): O | null;
  deserializeOrNull(arg0: R | null): O | null;
  serialize(arg0: I): R;
  serializeOr(arg0: I | null, arg1: R | null): R | null;
  serializeOrNull(arg0: I | null): R | null;
}
export type ComponentSerializer<I /* extends j_net_kyori_adventure_text.Component */ = unknown, O /* extends j_net_kyori_adventure_text.Component */ = unknown, R = unknown> = ComponentSerializerMembers<I, O, R> & ComponentEncoder<I, R> & ComponentDecoder<R, O>;
export interface ComponentSerializerStatics {
}
