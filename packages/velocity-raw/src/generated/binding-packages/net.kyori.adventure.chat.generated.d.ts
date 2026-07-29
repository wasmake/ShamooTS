// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_identity from './net.kyori.adventure.identity.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface net.kyori.adventure.chat.ChatType. */
export interface ChatTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Keyed">, JavaOpaque<"net.kyori.examination.Examinable">];
  bind(arg0: j_net_kyori_adventure_text.ComponentLike): ChatType_Bound;
  bind(arg0: j_net_kyori_adventure_text.ComponentLike, arg1: j_net_kyori_adventure_text.ComponentLike | null): ChatType_Bound;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type ChatType = ChatTypeMembers & JavaOpaque<"net.kyori.adventure.key.Keyed"> & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ChatTypeStatics {
  readonly CHAT: ChatType;
  readonly EMOTE_COMMAND: ChatType;
  readonly MSG_COMMAND_INCOMING: ChatType;
  readonly MSG_COMMAND_OUTGOING: ChatType;
  readonly SAY_COMMAND: ChatType;
  readonly TEAM_MSG_COMMAND_INCOMING: ChatType;
  readonly TEAM_MSG_COMMAND_OUTGOING: ChatType;
  chatType(arg0: JavaOpaque<"net.kyori.adventure.key.Keyed">): ChatType;
}

/** JVM interface net.kyori.adventure.chat.ChatType$Bound. */
export interface ChatType_BoundMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  name(): j_net_kyori_adventure_text.Component;
  target(): j_net_kyori_adventure_text.Component | null;
  type(): ChatType;
}
export type ChatType_Bound = ChatType_BoundMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ChatType_BoundStatics {
}

/** JVM interface net.kyori.adventure.chat.SignedMessage. */
export interface SignedMessage_2Members {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_identity.Identified, JavaOpaque<"net.kyori.examination.Examinable">];
  canDelete(): boolean;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  isSystem(): boolean;
  message(): string;
  salt(): bigint;
  signature(): SignedMessage_Signature | null;
  timestamp(): JavaOpaque<"java.time.Instant">;
  unsignedContent(): j_net_kyori_adventure_text.Component | null;
}
export type SignedMessage_2 = SignedMessage_2Members & j_net_kyori_adventure_identity.Identified & JavaOpaque<"net.kyori.examination.Examinable">;
export interface SignedMessage_2Statics {
  signature(arg0: Array<number>): SignedMessage_Signature;
  system(arg0: string, arg1: j_net_kyori_adventure_text.ComponentLike | null): SignedMessage_2;
}

/** JVM interface net.kyori.adventure.chat.SignedMessage$Signature. */
export interface SignedMessage_SignatureMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  bytes(): Array<number>;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
}
export type SignedMessage_Signature = SignedMessage_SignatureMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface SignedMessage_SignatureStatics {
}
