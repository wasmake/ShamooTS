// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';

/** JVM class com.destroystokyo.paper.event.profile.FillProfileEvent. */
export interface FillProfileEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  getProperties(): JavaSet<j_com_destroystokyo_paper_profile.ProfileProperty>;
}
export type FillProfileEvent = FillProfileEventMembers & j_org_bukkit_event.Event;
export interface FillProfileEventStatics {
  new(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): FillProfileEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.profile.LookupProfileEvent. */
export interface LookupProfileEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
}
export type LookupProfileEvent = LookupProfileEventMembers & j_org_bukkit_event.Event;
export interface LookupProfileEventStatics {
  new(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): LookupProfileEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.profile.PreFillProfileEvent. */
export interface PreFillProfileEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  setProperties(arg0: JavaCollection<j_com_destroystokyo_paper_profile.ProfileProperty>): void;
}
export type PreFillProfileEvent = PreFillProfileEventMembers & j_org_bukkit_event.Event;
export interface PreFillProfileEventStatics {
  new(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): PreFillProfileEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.profile.PreLookupProfileEvent. */
export interface PreLookupProfileEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  addProfileProperties(arg0: JavaSet<j_com_destroystokyo_paper_profile.ProfileProperty>): void;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getName(): string;
  getProfileProperties(): JavaSet<j_com_destroystokyo_paper_profile.ProfileProperty>;
  getUUID(): JavaOpaque<"java.util.UUID"> | null;
  setProfileProperties(arg0: JavaSet<j_com_destroystokyo_paper_profile.ProfileProperty>): void;
  setUUID(arg0: JavaOpaque<"java.util.UUID">): void | null;
}
export type PreLookupProfileEvent = PreLookupProfileEventMembers & j_org_bukkit_event.Event;
export interface PreLookupProfileEventStatics {
  new(arg0: string): PreLookupProfileEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.profile.ProfileWhitelistVerifyEvent. */
export interface ProfileWhitelistVerifyEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKickMessage(): string | null;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  isOp(): boolean;
  isWhitelistEnabled(): boolean;
  isWhitelisted(): boolean;
  kickMessage(): j_net_kyori_adventure_text.Component | null;
  kickMessage(arg0: j_net_kyori_adventure_text.Component): void | null;
  setKickMessage(arg0: string): void | null;
  setWhitelisted(arg0: boolean): void;
}
export type ProfileWhitelistVerifyEvent = ProfileWhitelistVerifyEventMembers & j_org_bukkit_event.Event;
export interface ProfileWhitelistVerifyEventStatics {
  new(arg0: j_com_destroystokyo_paper_profile.PlayerProfile, arg1: boolean, arg2: boolean, arg3: boolean, arg4: j_net_kyori_adventure_text.Component): ProfileWhitelistVerifyEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
