// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class com.velocitypowered.api.util.Favicon. */
export interface FaviconMembers {
  equals(arg0: object | null): boolean;
  getBase64Url(): string;
  hashCode(): number;
  toString(): string;
}
export type Favicon = FaviconMembers;
export interface FaviconStatics {
  new(arg0: string): Favicon;
  create(arg0: JavaOpaque<"java.awt.image.BufferedImage">): Favicon;
  /** @throws java.io.IOException */
  create(arg0: JavaOpaque<"java.nio.file.Path">): Favicon;
}

/** JVM class com.velocitypowered.api.util.GameProfile. */
export interface GameProfileMembers {
  addProperties(arg0: Iterable<GameProfile_Property>): GameProfile;
  addProperty(arg0: GameProfile_Property): GameProfile;
  getId(): JavaOpaque<"java.util.UUID">;
  getName(): string;
  getProperties(): JavaList<GameProfile_Property>;
  getUndashedId(): string;
  toString(): string;
  withId(arg0: JavaOpaque<"java.util.UUID">): GameProfile;
  withName(arg0: string): GameProfile;
  withProperties(arg0: JavaList<GameProfile_Property>): GameProfile;
  withUndashedId(arg0: string): GameProfile;
}
export type GameProfile = GameProfileMembers;
export interface GameProfileStatics {
  new(arg0: string, arg1: string, arg2: JavaList<GameProfile_Property>): GameProfile;
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: JavaList<GameProfile_Property>): GameProfile;
  forOfflinePlayer(arg0: string): GameProfile;
}

/** JVM class com.velocitypowered.api.util.GameProfile$Property. */
export interface GameProfile_PropertyMembers {
  getName(): string;
  getSignature(): string;
  getValue(): string;
  toString(): string;
}
export type GameProfile_Property = GameProfile_PropertyMembers;
export interface GameProfile_PropertyStatics {
  new(arg0: string, arg1: string, arg2: string): GameProfile_Property;
}

/** Live JVM enum com.velocitypowered.api.util.MessagePosition; constants are host handles, not strings. */
export type MessagePosition = JavaEnum<"com.velocitypowered.api.util.MessagePosition", "ACTION_BAR" | "CHAT" | "SYSTEM"> & MessagePositionMembers;
export interface MessagePositionMembers {
}
export interface MessagePositionStatics {
  readonly ACTION_BAR: MessagePosition;
  readonly CHAT: MessagePosition;
  readonly SYSTEM: MessagePosition;
  valueOf(arg0: string): MessagePosition;
  values(): Array<MessagePosition>;
}

/** JVM class com.velocitypowered.api.util.ModInfo. */
export interface ModInfoMembers {
  equals(arg0: object): boolean;
  getMods(): JavaList<ModInfo_Mod>;
  getType(): string;
  hashCode(): number;
  toString(): string;
}
export type ModInfo = ModInfoMembers;
export interface ModInfoStatics {
  new(arg0: string, arg1: JavaList<ModInfo_Mod>): ModInfo;
  readonly DEFAULT: ModInfo;
}

/** JVM class com.velocitypowered.api.util.ModInfo$Mod. */
export interface ModInfo_ModMembers {
  equals(arg0: object): boolean;
  getId(): string;
  getVersion(): string;
  hashCode(): number;
  toString(): string;
}
export type ModInfo_Mod = ModInfo_ModMembers;
export interface ModInfo_ModStatics {
  new(arg0: string, arg1: string): ModInfo_Mod;
}

/** JVM interface com.velocitypowered.api.util.Ordered. */
export interface OrderedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [T]>];
  greaterThan(arg0: T): boolean;
  lessThan(arg0: T): boolean;
  noGreaterOrLessThan(arg0: T): boolean;
  noGreaterThan(arg0: T): boolean;
  noLessThan(arg0: T): boolean;
}
export type Ordered<T = unknown> = OrderedMembers<T> & JavaOpaque<"java.lang.Comparable", [T]>;
export interface OrderedStatics {
}

/** JVM class com.velocitypowered.api.util.ProxyVersion. */
export interface ProxyVersionMembers {
  equals(arg0: object | null): boolean;
  getName(): string;
  getVendor(): string;
  getVersion(): string;
  hashCode(): number;
  toString(): string;
}
export type ProxyVersion = ProxyVersionMembers;
export interface ProxyVersionStatics {
  new(arg0: string, arg1: string, arg2: string): ProxyVersion;
}

/** JVM class com.velocitypowered.api.util.ServerLink. */
export interface ServerLinkMembers {
  getBuiltInType(): JavaOptional<ServerLink_Type>;
  getCustomLabel(): JavaOptional<j_net_kyori_adventure_text.Component>;
  getUrl(): JavaOpaque<"java.net.URI">;
}
export type ServerLink = ServerLinkMembers;
export interface ServerLinkStatics {
  serverLink(arg0: ServerLink_Type, arg1: string): ServerLink;
  serverLink(arg0: j_net_kyori_adventure_text.Component, arg1: string): ServerLink;
}

/** Live JVM enum com.velocitypowered.api.util.ServerLink$Type; constants are host handles, not strings. */
export type ServerLink_Type = JavaEnum<"com.velocitypowered.api.util.ServerLink$Type", "ANNOUNCEMENTS" | "BUG_REPORT" | "COMMUNITY" | "COMMUNITY_GUIDELINES" | "FEEDBACK" | "FORUMS" | "NEWS" | "STATUS" | "SUPPORT" | "WEBSITE"> & ServerLink_TypeMembers;
export interface ServerLink_TypeMembers {
}
export interface ServerLink_TypeStatics {
  readonly ANNOUNCEMENTS: ServerLink_Type;
  readonly BUG_REPORT: ServerLink_Type;
  readonly COMMUNITY: ServerLink_Type;
  readonly COMMUNITY_GUIDELINES: ServerLink_Type;
  readonly FEEDBACK: ServerLink_Type;
  readonly FORUMS: ServerLink_Type;
  readonly NEWS: ServerLink_Type;
  readonly STATUS: ServerLink_Type;
  readonly SUPPORT: ServerLink_Type;
  readonly WEBSITE: ServerLink_Type;
  valueOf(arg0: string): ServerLink_Type;
  values(): Array<ServerLink_Type>;
}

/** JVM class com.velocitypowered.api.util.UuidUtils. */
export interface UuidUtilsMembers {
}
export type UuidUtils = UuidUtilsMembers;
export interface UuidUtilsStatics {
  fromUndashed(arg0: string): JavaOpaque<"java.util.UUID">;
  generateOfflinePlayerUuid(arg0: string): JavaOpaque<"java.util.UUID">;
  toUndashed(arg0: JavaOpaque<"java.util.UUID">): string;
}
