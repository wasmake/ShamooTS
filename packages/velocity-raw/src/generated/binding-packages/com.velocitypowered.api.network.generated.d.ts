// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_util from './com.velocitypowered.api.util.generated.js';

/** Live JVM enum com.velocitypowered.api.network.HandshakeIntent; constants are host handles, not strings. */
export type HandshakeIntent = JavaEnum<"com.velocitypowered.api.network.HandshakeIntent", "LOGIN" | "STATUS" | "TRANSFER"> & HandshakeIntentMembers;
export interface HandshakeIntentMembers {
  id(): number;
}
export interface HandshakeIntentStatics {
  readonly LOGIN: HandshakeIntent;
  readonly STATUS: HandshakeIntent;
  readonly TRANSFER: HandshakeIntent;
  getById(arg0: number): HandshakeIntent;
  valueOf(arg0: string): HandshakeIntent;
  values(): Array<HandshakeIntent>;
}

/** Live JVM enum com.velocitypowered.api.network.ListenerType; constants are host handles, not strings. */
export type ListenerType = JavaEnum<"com.velocitypowered.api.network.ListenerType", "MINECRAFT" | "QUERY"> & ListenerTypeMembers;
export interface ListenerTypeMembers {
  toString(): string;
}
export interface ListenerTypeStatics {
  readonly MINECRAFT: ListenerType;
  readonly QUERY: ListenerType;
  valueOf(arg0: string): ListenerType;
  values(): Array<ListenerType>;
}

/** Live JVM enum com.velocitypowered.api.network.ProtocolState; constants are host handles, not strings. */
export type ProtocolState = JavaEnum<"com.velocitypowered.api.network.ProtocolState", "CONFIGURATION" | "HANDSHAKE" | "LOGIN" | "PLAY" | "STATUS"> & ProtocolStateMembers;
export interface ProtocolStateMembers {
}
export interface ProtocolStateStatics {
  readonly CONFIGURATION: ProtocolState;
  readonly HANDSHAKE: ProtocolState;
  readonly LOGIN: ProtocolState;
  readonly PLAY: ProtocolState;
  readonly STATUS: ProtocolState;
  valueOf(arg0: string): ProtocolState;
  values(): Array<ProtocolState>;
}

/** Live JVM enum com.velocitypowered.api.network.ProtocolVersion; constants are host handles, not strings. */
export type ProtocolVersion = JavaEnum<"com.velocitypowered.api.network.ProtocolVersion", "LEGACY" | "MINECRAFT_1_10" | "MINECRAFT_1_11" | "MINECRAFT_1_11_1" | "MINECRAFT_1_12" | "MINECRAFT_1_12_1" | "MINECRAFT_1_12_2" | "MINECRAFT_1_13" | "MINECRAFT_1_13_1" | "MINECRAFT_1_13_2" | "MINECRAFT_1_14" | "MINECRAFT_1_14_1" | "MINECRAFT_1_14_2" | "MINECRAFT_1_14_3" | "MINECRAFT_1_14_4" | "MINECRAFT_1_15" | "MINECRAFT_1_15_1" | "MINECRAFT_1_15_2" | "MINECRAFT_1_16" | "MINECRAFT_1_16_1" | "MINECRAFT_1_16_2" | "MINECRAFT_1_16_3" | "MINECRAFT_1_16_4" | "MINECRAFT_1_17" | "MINECRAFT_1_17_1" | "MINECRAFT_1_18" | "MINECRAFT_1_18_2" | "MINECRAFT_1_19" | "MINECRAFT_1_19_1" | "MINECRAFT_1_19_3" | "MINECRAFT_1_19_4" | "MINECRAFT_1_20" | "MINECRAFT_1_20_2" | "MINECRAFT_1_20_3" | "MINECRAFT_1_20_5" | "MINECRAFT_1_21" | "MINECRAFT_1_21_11" | "MINECRAFT_1_21_2" | "MINECRAFT_1_21_4" | "MINECRAFT_1_21_5" | "MINECRAFT_1_21_6" | "MINECRAFT_1_21_7" | "MINECRAFT_1_21_9" | "MINECRAFT_1_7_2" | "MINECRAFT_1_7_6" | "MINECRAFT_1_8" | "MINECRAFT_1_9" | "MINECRAFT_1_9_1" | "MINECRAFT_1_9_2" | "MINECRAFT_1_9_4" | "UNKNOWN"> & ProtocolVersionMembers;
export interface ProtocolVersionMembers {
  getMostRecentSupportedVersion(): string;
  getName(): string;
  getProtocol(): number;
  getVersionIntroducedIn(): string;
  getVersionsSupportedBy(): JavaList<string>;
  greaterThan(arg0: ProtocolVersion): boolean;
  isLegacy(): boolean;
  isSupported(): boolean;
  isUnknown(): boolean;
  lessThan(arg0: ProtocolVersion): boolean;
  noGreaterOrLessThan(arg0: ProtocolVersion): boolean;
  noGreaterThan(arg0: ProtocolVersion): boolean;
  noLessThan(arg0: ProtocolVersion): boolean;
  toString(): string;
}
export interface ProtocolVersionStatics {
  readonly LEGACY: ProtocolVersion;
  readonly MINECRAFT_1_10: ProtocolVersion;
  readonly MINECRAFT_1_11: ProtocolVersion;
  readonly MINECRAFT_1_11_1: ProtocolVersion;
  readonly MINECRAFT_1_12: ProtocolVersion;
  readonly MINECRAFT_1_12_1: ProtocolVersion;
  readonly MINECRAFT_1_12_2: ProtocolVersion;
  readonly MINECRAFT_1_13: ProtocolVersion;
  readonly MINECRAFT_1_13_1: ProtocolVersion;
  readonly MINECRAFT_1_13_2: ProtocolVersion;
  readonly MINECRAFT_1_14: ProtocolVersion;
  readonly MINECRAFT_1_14_1: ProtocolVersion;
  readonly MINECRAFT_1_14_2: ProtocolVersion;
  readonly MINECRAFT_1_14_3: ProtocolVersion;
  readonly MINECRAFT_1_14_4: ProtocolVersion;
  readonly MINECRAFT_1_15: ProtocolVersion;
  readonly MINECRAFT_1_15_1: ProtocolVersion;
  readonly MINECRAFT_1_15_2: ProtocolVersion;
  readonly MINECRAFT_1_16: ProtocolVersion;
  readonly MINECRAFT_1_16_1: ProtocolVersion;
  readonly MINECRAFT_1_16_2: ProtocolVersion;
  readonly MINECRAFT_1_16_3: ProtocolVersion;
  readonly MINECRAFT_1_16_4: ProtocolVersion;
  readonly MINECRAFT_1_17: ProtocolVersion;
  readonly MINECRAFT_1_17_1: ProtocolVersion;
  readonly MINECRAFT_1_18: ProtocolVersion;
  readonly MINECRAFT_1_18_2: ProtocolVersion;
  readonly MINECRAFT_1_19: ProtocolVersion;
  readonly MINECRAFT_1_19_1: ProtocolVersion;
  readonly MINECRAFT_1_19_3: ProtocolVersion;
  readonly MINECRAFT_1_19_4: ProtocolVersion;
  readonly MINECRAFT_1_20: ProtocolVersion;
  readonly MINECRAFT_1_20_2: ProtocolVersion;
  readonly MINECRAFT_1_20_3: ProtocolVersion;
  readonly MINECRAFT_1_20_5: ProtocolVersion;
  readonly MINECRAFT_1_21: ProtocolVersion;
  readonly MINECRAFT_1_21_11: ProtocolVersion;
  readonly MINECRAFT_1_21_2: ProtocolVersion;
  readonly MINECRAFT_1_21_4: ProtocolVersion;
  readonly MINECRAFT_1_21_5: ProtocolVersion;
  readonly MINECRAFT_1_21_6: ProtocolVersion;
  readonly MINECRAFT_1_21_7: ProtocolVersion;
  readonly MINECRAFT_1_21_9: ProtocolVersion;
  readonly MINECRAFT_1_7_2: ProtocolVersion;
  readonly MINECRAFT_1_7_6: ProtocolVersion;
  readonly MINECRAFT_1_8: ProtocolVersion;
  readonly MINECRAFT_1_9: ProtocolVersion;
  readonly MINECRAFT_1_9_1: ProtocolVersion;
  readonly MINECRAFT_1_9_2: ProtocolVersion;
  readonly MINECRAFT_1_9_4: ProtocolVersion;
  readonly UNKNOWN: ProtocolVersion;
  readonly ID_TO_PROTOCOL_CONSTANT: JavaOpaque<"com.google.common.collect.ImmutableMap", [number, ProtocolVersion]>;
  readonly MAXIMUM_VERSION: ProtocolVersion;
  readonly MINIMUM_VERSION: ProtocolVersion;
  readonly SUPPORTED_VERSIONS: JavaSet<ProtocolVersion>;
  readonly SUPPORTED_VERSION_STRING: string;
  getProtocolVersion(arg0: number): ProtocolVersion;
  isSupported(arg0: number): boolean;
  isSupported(arg0: ProtocolVersion): boolean;
  valueOf(arg0: string): ProtocolVersion;
  values(): Array<ProtocolVersion>;
}
