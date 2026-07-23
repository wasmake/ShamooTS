// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_network from './com.velocitypowered.api.network.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';

/** JVM interface com.velocitypowered.api.proxy.crypto.IdentifiedKey. */
export interface IdentifiedKeyMembers {
  readonly __javaSupertypes?: readonly [KeySigned];
  getKeyRevision(): IdentifiedKey_Revision;
  getSignatureHolder(): JavaOpaque<"java.util.UUID"> | null;
  getSignedPublicKey(): JavaOpaque<"java.security.PublicKey">;
  verifyDataSignature(arg0: Array<number>, ...arg1: Array<Array<number>>): boolean;
}
export type IdentifiedKey = IdentifiedKeyMembers & KeySigned;
export interface IdentifiedKeyStatics {
}

/** Live JVM enum com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision; constants are host handles, not strings. */
export type IdentifiedKey_Revision = JavaEnum<"com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision", "GENERIC_V1" | "LINKED_V2"> & IdentifiedKey_RevisionMembers;
export interface IdentifiedKey_RevisionMembers {
  getApplicableTo(): JavaSet<j_com_velocitypowered_api_network.ProtocolVersion>;
  getBackwardsCompatibleTo(): JavaSet<IdentifiedKey_Revision>;
  greaterThan(arg0: IdentifiedKey_Revision): boolean;
  lessThan(arg0: IdentifiedKey_Revision): boolean;
  noGreaterOrLessThan(arg0: IdentifiedKey_Revision): boolean;
  noGreaterThan(arg0: IdentifiedKey_Revision): boolean;
  noLessThan(arg0: IdentifiedKey_Revision): boolean;
}
export interface IdentifiedKey_RevisionStatics {
  readonly GENERIC_V1: IdentifiedKey_Revision;
  readonly LINKED_V2: IdentifiedKey_Revision;
  valueOf(arg0: string): IdentifiedKey_Revision;
  values(): Array<IdentifiedKey_Revision>;
}

/** JVM interface com.velocitypowered.api.proxy.crypto.KeyIdentifiable. */
export interface KeyIdentifiableMembers {
  getIdentifiedKey(): IdentifiedKey | null;
}
export type KeyIdentifiable = KeyIdentifiableMembers;
export interface KeyIdentifiableStatics {
}

/** JVM interface com.velocitypowered.api.proxy.crypto.KeySigned. */
export interface KeySignedMembers {
  getExpiryTemporal(): JavaOpaque<"java.time.Instant">;
  getSalt(): Array<number>;
  getSignature(): Array<number> | null;
  getSigner(): JavaOpaque<"java.security.PublicKey">;
  hasExpired(): boolean;
  isSignatureValid(): boolean;
}
export type KeySigned = KeySignedMembers;
export interface KeySignedStatics {
}

/** JVM interface com.velocitypowered.api.proxy.crypto.SignedMessage. */
export interface SignedMessageMembers {
  readonly __javaSupertypes?: readonly [KeySigned];
  getMessage(): string;
  getSignerUuid(): JavaOpaque<"java.util.UUID">;
  isPreviewSigned(): boolean;
}
export type SignedMessage = SignedMessageMembers & KeySigned;
export interface SignedMessageStatics {
}
