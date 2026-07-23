// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.nbt.api.BinaryTagHolder. */
export interface BinaryTagHolderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_text_event.DataComponentValue_TagSerializable];
  asBinaryTag(): BinaryTagHolder;
  /** @throws java.lang.Exception */
  get<T, DX /* extends JavaOpaque<"java.lang.Exception"> */>(arg0: j_net_kyori_adventure_util.Codec<T, string, DX, object>): T;
  string(): string;
}
export type BinaryTagHolder = BinaryTagHolderMembers & j_net_kyori_adventure_text_event.DataComponentValue_TagSerializable;
export interface BinaryTagHolderStatics {
  binaryTagHolder(arg0: string): BinaryTagHolder;
  /** @throws java.lang.Exception */
  encode<T, EX /* extends JavaOpaque<"java.lang.Exception"> */>(arg0: T, arg1: j_net_kyori_adventure_util.Codec<T, string, object, EX>): BinaryTagHolder;
  of(arg0: string): BinaryTagHolder;
}
