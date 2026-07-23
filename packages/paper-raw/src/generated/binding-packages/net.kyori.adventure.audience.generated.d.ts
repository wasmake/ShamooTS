// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_bossbar from './net.kyori.adventure.bossbar.generated.js';
import type * as j_net_kyori_adventure_chat from './net.kyori.adventure.chat.generated.js';
import type * as j_net_kyori_adventure_dialog from './net.kyori.adventure.dialog.generated.js';
import type * as j_net_kyori_adventure_identity from './net.kyori.adventure.identity.generated.js';
import type * as j_net_kyori_adventure_inventory from './net.kyori.adventure.inventory.generated.js';
import type * as j_net_kyori_adventure_pointer from './net.kyori.adventure.pointer.generated.js';
import type * as j_net_kyori_adventure_resource from './net.kyori.adventure.resource.generated.js';
import type * as j_net_kyori_adventure_sound from './net.kyori.adventure.sound.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_title from './net.kyori.adventure.title.generated.js';

/** JVM interface net.kyori.adventure.audience.Audience. */
export interface AudienceMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_pointer.Pointered];
  clearResourcePacks(): void;
  clearTitle(): void;
  closeDialog(): void;
  deleteMessage(arg0: j_net_kyori_adventure_chat.SignedMessage_Signature): void;
  deleteMessage(arg0: j_net_kyori_adventure_chat.SignedMessage): void;
  filterAudience(arg0: JavaPredicate<Audience>): Audience;
  forEachAudience(arg0: JavaConsumer<Audience>): void;
  hideBossBar(arg0: j_net_kyori_adventure_bossbar.BossBar): void;
  openBook(arg0: j_net_kyori_adventure_inventory.Book_Builder): void;
  openBook(arg0: j_net_kyori_adventure_inventory.Book): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: j_net_kyori_adventure_sound.Sound_Emitter): void;
  removeResourcePacks(arg0: Iterable<JavaOpaque<"java.util.UUID">>): void;
  removeResourcePacks(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<JavaOpaque<"java.util.UUID">>): void;
  removeResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackInfoLike, ...arg1: Array<j_net_kyori_adventure_resource.ResourcePackInfoLike>): void;
  removeResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackRequest): void;
  removeResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackRequestLike): void;
  resetTitle(): void;
  sendActionBar(arg0: j_net_kyori_adventure_text.Component): void;
  sendActionBar(arg0: j_net_kyori_adventure_text.ComponentLike): void;
  sendMessage(arg0: j_net_kyori_adventure_chat.SignedMessage, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identified, arg1: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identified, arg1: j_net_kyori_adventure_text.Component, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identified, arg1: j_net_kyori_adventure_text.ComponentLike): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identified, arg1: j_net_kyori_adventure_text.ComponentLike, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.Component, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.ComponentLike): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.ComponentLike, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component, arg1: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendMessage(arg0: j_net_kyori_adventure_text.ComponentLike): void;
  sendMessage(arg0: j_net_kyori_adventure_text.ComponentLike, arg1: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_text.ComponentLike, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendPlayerListFooter(arg0: j_net_kyori_adventure_text.Component): void;
  sendPlayerListFooter(arg0: j_net_kyori_adventure_text.ComponentLike): void;
  sendPlayerListHeader(arg0: j_net_kyori_adventure_text.Component): void;
  sendPlayerListHeader(arg0: j_net_kyori_adventure_text.ComponentLike): void;
  sendPlayerListHeaderAndFooter(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component): void;
  sendPlayerListHeaderAndFooter(arg0: j_net_kyori_adventure_text.ComponentLike, arg1: j_net_kyori_adventure_text.ComponentLike): void;
  sendResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackInfoLike, ...arg1: Array<j_net_kyori_adventure_resource.ResourcePackInfoLike>): void;
  sendResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackRequest): void;
  sendResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackRequestLike): void;
  sendTitlePart<T>(arg0: j_net_kyori_adventure_title.TitlePart<T>, arg1: T): void;
  showBossBar(arg0: j_net_kyori_adventure_bossbar.BossBar): void;
  showDialog(arg0: j_net_kyori_adventure_dialog.DialogLike): void;
  showTitle(arg0: j_net_kyori_adventure_title.Title_2): void;
  stopSound(arg0: j_net_kyori_adventure_sound.Sound): void;
  stopSound(arg0: j_net_kyori_adventure_sound.SoundStop): void;
}
export type Audience = AudienceMembers & j_net_kyori_adventure_pointer.Pointered;
export interface AudienceStatics {
  audience(arg0: Iterable<Audience>): ForwardingAudience;
  audience(...arg0: Array<Audience>): Audience;
  empty(): Audience;
  toAudience(): JavaOpaque<"java.util.stream.Collector", [Audience, object, ForwardingAudience]>;
}

/** JVM class net.kyori.adventure.audience.Audiences. */
export interface AudiencesMembers {
}
export type Audiences = AudiencesMembers;
export interface AudiencesStatics {
  sendingMessage(arg0: j_net_kyori_adventure_text.ComponentLike): JavaConsumer<Audience>;
}

/** JVM interface net.kyori.adventure.audience.ForwardingAudience. */
export interface ForwardingAudienceMembers {
  readonly __javaSupertypes?: readonly [Audience];
  audiences(): Iterable<Audience>;
  clearResourcePacks(): void;
  clearTitle(): void;
  closeDialog(): void;
  deleteMessage(arg0: j_net_kyori_adventure_chat.SignedMessage_Signature): void;
  filterAudience(arg0: JavaPredicate<Audience>): Audience;
  forEachAudience(arg0: JavaConsumer<Audience>): void;
  hideBossBar(arg0: j_net_kyori_adventure_bossbar.BossBar): void;
  openBook(arg0: j_net_kyori_adventure_inventory.Book): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: j_net_kyori_adventure_sound.Sound_Emitter): void;
  pointers(): j_net_kyori_adventure_pointer.Pointers;
  removeResourcePacks(arg0: Iterable<JavaOpaque<"java.util.UUID">>): void;
  removeResourcePacks(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<JavaOpaque<"java.util.UUID">>): void;
  resetTitle(): void;
  sendActionBar(arg0: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_chat.SignedMessage, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identified, arg1: j_net_kyori_adventure_text.Component, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.Component, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendPlayerListFooter(arg0: j_net_kyori_adventure_text.Component): void;
  sendPlayerListHeader(arg0: j_net_kyori_adventure_text.Component): void;
  sendPlayerListHeaderAndFooter(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component): void;
  sendResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackRequest): void;
  sendTitlePart<T>(arg0: j_net_kyori_adventure_title.TitlePart<T>, arg1: T): void;
  showBossBar(arg0: j_net_kyori_adventure_bossbar.BossBar): void;
  showDialog(arg0: j_net_kyori_adventure_dialog.DialogLike): void;
  stopSound(arg0: j_net_kyori_adventure_sound.SoundStop): void;
}
export type ForwardingAudience = ForwardingAudienceMembers & Audience;
export interface ForwardingAudienceStatics {
}

/** JVM interface net.kyori.adventure.audience.ForwardingAudience$Single. */
export interface ForwardingAudience_SingleMembers {
  readonly __javaSupertypes?: readonly [ForwardingAudience];
  audience(): Audience;
  audiences(): Iterable<Audience>;
  clearResourcePacks(): void;
  clearTitle(): void;
  closeDialog(): void;
  deleteMessage(arg0: j_net_kyori_adventure_chat.SignedMessage_Signature): void;
  filterAudience(arg0: JavaPredicate<Audience>): Audience;
  forEachAudience(arg0: JavaConsumer<Audience>): void;
  get<T>(arg0: j_net_kyori_adventure_pointer.Pointer<T>): JavaOptional<T>;
  getOrDefault<T>(arg0: j_net_kyori_adventure_pointer.Pointer<T>, arg1: T | null): T | null;
  getOrDefaultFrom<T>(arg0: j_net_kyori_adventure_pointer.Pointer<T>, arg1: JavaSupplier<T>): T;
  hideBossBar(arg0: j_net_kyori_adventure_bossbar.BossBar): void;
  openBook(arg0: j_net_kyori_adventure_inventory.Book): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: j_net_kyori_adventure_sound.Sound, arg1: j_net_kyori_adventure_sound.Sound_Emitter): void;
  pointers(): j_net_kyori_adventure_pointer.Pointers;
  removeResourcePacks(arg0: Iterable<JavaOpaque<"java.util.UUID">>): void;
  removeResourcePacks(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<JavaOpaque<"java.util.UUID">>): void;
  resetTitle(): void;
  sendActionBar(arg0: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_chat.SignedMessage, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identified, arg1: j_net_kyori_adventure_text.Component, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_identity.Identity, arg1: j_net_kyori_adventure_text.Component, arg2: MessageType): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component): void;
  sendMessage(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_chat.ChatType_Bound): void;
  sendPlayerListFooter(arg0: j_net_kyori_adventure_text.Component): void;
  sendPlayerListHeader(arg0: j_net_kyori_adventure_text.Component): void;
  sendPlayerListHeaderAndFooter(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component): void;
  sendResourcePacks(arg0: j_net_kyori_adventure_resource.ResourcePackRequest): void;
  sendTitlePart<T>(arg0: j_net_kyori_adventure_title.TitlePart<T>, arg1: T): void;
  showBossBar(arg0: j_net_kyori_adventure_bossbar.BossBar): void;
  showDialog(arg0: j_net_kyori_adventure_dialog.DialogLike): void;
  stopSound(arg0: j_net_kyori_adventure_sound.SoundStop): void;
}
export type ForwardingAudience_Single = ForwardingAudience_SingleMembers & ForwardingAudience;
export interface ForwardingAudience_SingleStatics {
}

/** Live JVM enum net.kyori.adventure.audience.MessageType; constants are host handles, not strings. */
export type MessageType = JavaEnum<"net.kyori.adventure.audience.MessageType", "CHAT" | "SYSTEM"> & MessageTypeMembers;
export interface MessageTypeMembers {
}
export interface MessageTypeStatics {
  readonly CHAT: MessageType;
  readonly SYSTEM: MessageType;
  valueOf(arg0: string): MessageType;
  values(): Array<MessageType>;
}
