// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_connection from './io.papermc.paper.connection.generated.js';
import type * as j_io_papermc_paper_entity from './io.papermc.paper.entity.generated.js';
import type * as j_io_papermc_paper_event_player from './io.papermc.paper.event.player.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_advancement from './org.bukkit.advancement.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_sign from './org.bukkit.block.sign.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_block from './org.bukkit.event.block.generated.js';
import type * as j_org_bukkit_event_entity from './org.bukkit.event.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta from './org.bukkit.inventory.meta.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class org.bukkit.event.player.AsyncPlayerChatEvent. */
export interface AsyncPlayerChatEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getFormat(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMessage(): string;
  getRecipients(): JavaSet<j_org_bukkit_entity.Player>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  /** @throws java.lang.NullPointerException @throws java.util.IllegalFormatException */
  setFormat(arg0: string): void;
  setMessage(arg0: string): void;
}
export type AsyncPlayerChatEvent = AsyncPlayerChatEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface AsyncPlayerChatEventStatics {
  new(arg0: boolean, arg1: j_org_bukkit_entity.Player, arg2: string, arg3: JavaSet<j_org_bukkit_entity.Player>): AsyncPlayerChatEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.AsyncPlayerChatPreviewEvent. */
export interface AsyncPlayerChatPreviewEventMembers {
  readonly __javaSupertypes?: readonly [AsyncPlayerChatEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type AsyncPlayerChatPreviewEvent = AsyncPlayerChatPreviewEventMembers & AsyncPlayerChatEvent;
export interface AsyncPlayerChatPreviewEventStatics {
  new(arg0: boolean, arg1: j_org_bukkit_entity.Player, arg2: string, arg3: JavaSet<j_org_bukkit_entity.Player>): AsyncPlayerChatPreviewEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.AsyncPlayerPreLoginEvent. */
export interface AsyncPlayerPreLoginEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  allow(): void;
  disallow(arg0: AsyncPlayerPreLoginEvent_Result, arg1: string): void;
  disallow(arg0: AsyncPlayerPreLoginEvent_Result, arg1: j_net_kyori_adventure_text.Component): void;
  disallow(arg0: PlayerPreLoginEvent_Result, arg1: string): void;
  disallow(arg0: PlayerPreLoginEvent_Result, arg1: j_net_kyori_adventure_text.Component): void;
  getAddress(): JavaOpaque<"java.net.InetAddress">;
  getConnection(): j_io_papermc_paper_connection.PlayerLoginConnection;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHostname(): string;
  getKickMessage(): string;
  getLoginResult(): AsyncPlayerPreLoginEvent_Result;
  getName(): string;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  getRawAddress(): JavaOpaque<"java.net.InetAddress">;
  getResult(): PlayerPreLoginEvent_Result;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  isTransferred(): boolean;
  kickMessage(): j_net_kyori_adventure_text.Component;
  kickMessage(arg0: j_net_kyori_adventure_text.Component): void;
  setKickMessage(arg0: string): void;
  setLoginResult(arg0: AsyncPlayerPreLoginEvent_Result): void;
  setPlayerProfile(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): void;
  setResult(arg0: PlayerPreLoginEvent_Result): void;
}
export type AsyncPlayerPreLoginEvent = AsyncPlayerPreLoginEventMembers & j_org_bukkit_event.Event;
export interface AsyncPlayerPreLoginEventStatics {
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">): AsyncPlayerPreLoginEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: JavaOpaque<"java.net.InetAddress">, arg3: JavaOpaque<"java.util.UUID">, arg4: boolean, arg5: j_com_destroystokyo_paper_profile.PlayerProfile): AsyncPlayerPreLoginEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: JavaOpaque<"java.net.InetAddress">, arg3: JavaOpaque<"java.util.UUID">, arg4: boolean, arg5: j_com_destroystokyo_paper_profile.PlayerProfile, arg6: string, arg7: j_io_papermc_paper_connection.PlayerLoginConnection): AsyncPlayerPreLoginEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: JavaOpaque<"java.util.UUID">): AsyncPlayerPreLoginEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: JavaOpaque<"java.util.UUID">, arg3: boolean): AsyncPlayerPreLoginEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: JavaOpaque<"java.util.UUID">, arg3: boolean, arg4: j_com_destroystokyo_paper_profile.PlayerProfile): AsyncPlayerPreLoginEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result; constants are host handles, not strings. */
export type AsyncPlayerPreLoginEvent_Result = JavaEnum<"org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result", "ALLOWED" | "KICK_BANNED" | "KICK_FULL" | "KICK_OTHER" | "KICK_WHITELIST"> & AsyncPlayerPreLoginEvent_ResultMembers;
export interface AsyncPlayerPreLoginEvent_ResultMembers {
}
export interface AsyncPlayerPreLoginEvent_ResultStatics {
  readonly ALLOWED: AsyncPlayerPreLoginEvent_Result;
  readonly KICK_BANNED: AsyncPlayerPreLoginEvent_Result;
  readonly KICK_FULL: AsyncPlayerPreLoginEvent_Result;
  readonly KICK_OTHER: AsyncPlayerPreLoginEvent_Result;
  readonly KICK_WHITELIST: AsyncPlayerPreLoginEvent_Result;
  valueOf(arg0: string): AsyncPlayerPreLoginEvent_Result;
  values(): Array<AsyncPlayerPreLoginEvent_Result>;
}

/** JVM class org.bukkit.event.player.PlayerAdvancementDoneEvent. */
export interface PlayerAdvancementDoneEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getAdvancement(): j_org_bukkit_advancement.Advancement;
  getHandlers(): j_org_bukkit_event.HandlerList;
  message(): j_net_kyori_adventure_text.Component | null;
  message(arg0: j_net_kyori_adventure_text.Component | null): void;
}
export type PlayerAdvancementDoneEvent = PlayerAdvancementDoneEventMembers & PlayerEvent;
export interface PlayerAdvancementDoneEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_advancement.Advancement): PlayerAdvancementDoneEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_advancement.Advancement, arg2: j_net_kyori_adventure_text.Component | null): PlayerAdvancementDoneEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerAnimationEvent. */
export interface PlayerAnimationEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getAnimationType(): PlayerAnimationType;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerAnimationEvent = PlayerAnimationEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerAnimationEventStatics {
  new(arg0: j_org_bukkit_entity.Player): PlayerAnimationEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: PlayerAnimationType): PlayerAnimationEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerAnimationType; constants are host handles, not strings. */
export type PlayerAnimationType = JavaEnum<"org.bukkit.event.player.PlayerAnimationType", "ARM_SWING" | "OFF_ARM_SWING"> & PlayerAnimationTypeMembers;
export interface PlayerAnimationTypeMembers {
}
export interface PlayerAnimationTypeStatics {
  readonly ARM_SWING: PlayerAnimationType;
  readonly OFF_ARM_SWING: PlayerAnimationType;
  valueOf(arg0: string): PlayerAnimationType;
  values(): Array<PlayerAnimationType>;
}

/** JVM class org.bukkit.event.player.PlayerArmorStandManipulateEvent. */
export interface PlayerArmorStandManipulateEventMembers {
  readonly __javaSupertypes?: readonly [PlayerInteractEntityEvent];
  getArmorStandItem(): j_org_bukkit_inventory.ItemStack;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayerItem(): j_org_bukkit_inventory.ItemStack;
  getRightClicked(): j_org_bukkit_entity.ArmorStand;
  getSlot(): j_org_bukkit_inventory.EquipmentSlot;
}
export type PlayerArmorStandManipulateEvent = PlayerArmorStandManipulateEventMembers & PlayerInteractEntityEvent;
export interface PlayerArmorStandManipulateEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.ArmorStand, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.ItemStack, arg4: j_org_bukkit_inventory.EquipmentSlot): PlayerArmorStandManipulateEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.ArmorStand, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.ItemStack, arg4: j_org_bukkit_inventory.EquipmentSlot, arg5: j_org_bukkit_inventory.EquipmentSlot): PlayerArmorStandManipulateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerAttemptPickupItemEvent. */
export interface PlayerAttemptPickupItemEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getFlyAtPlayer(): boolean;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_entity.Item;
  getRemaining(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFlyAtPlayer(arg0: boolean): void;
}
export type PlayerAttemptPickupItemEvent = PlayerAttemptPickupItemEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerAttemptPickupItemEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Item): PlayerAttemptPickupItemEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Item, arg2: number): PlayerAttemptPickupItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerBedEnterEvent. */
export interface PlayerBedEnterEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getBed(): j_org_bukkit_block.Block;
  getBedEnterResult(): PlayerBedEnterEvent_BedEnterResult;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setUseBed(arg0: j_org_bukkit_event.Event_Result): void;
  useBed(): j_org_bukkit_event.Event_Result;
}
export type PlayerBedEnterEvent = PlayerBedEnterEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerBedEnterEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block): PlayerBedEnterEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: PlayerBedEnterEvent_BedEnterResult): PlayerBedEnterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult; constants are host handles, not strings. */
export type PlayerBedEnterEvent_BedEnterResult = JavaEnum<"org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult", "NOT_POSSIBLE_HERE" | "NOT_POSSIBLE_NOW" | "NOT_SAFE" | "OBSTRUCTED" | "OK" | "OTHER_PROBLEM" | "TOO_FAR_AWAY"> & PlayerBedEnterEvent_BedEnterResultMembers;
export interface PlayerBedEnterEvent_BedEnterResultMembers {
}
export interface PlayerBedEnterEvent_BedEnterResultStatics {
  readonly NOT_POSSIBLE_HERE: PlayerBedEnterEvent_BedEnterResult;
  readonly NOT_POSSIBLE_NOW: PlayerBedEnterEvent_BedEnterResult;
  readonly NOT_SAFE: PlayerBedEnterEvent_BedEnterResult;
  readonly OBSTRUCTED: PlayerBedEnterEvent_BedEnterResult;
  readonly OK: PlayerBedEnterEvent_BedEnterResult;
  readonly OTHER_PROBLEM: PlayerBedEnterEvent_BedEnterResult;
  readonly TOO_FAR_AWAY: PlayerBedEnterEvent_BedEnterResult;
  valueOf(arg0: string): PlayerBedEnterEvent_BedEnterResult;
  values(): Array<PlayerBedEnterEvent_BedEnterResult>;
}

/** JVM class org.bukkit.event.player.PlayerBedLeaveEvent. */
export interface PlayerBedLeaveEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getBed(): j_org_bukkit_block.Block;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setSpawnLocation(arg0: boolean): void;
  shouldSetSpawnLocation(): boolean;
}
export type PlayerBedLeaveEvent = PlayerBedLeaveEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerBedLeaveEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: boolean): PlayerBedLeaveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerBucketEmptyEvent. */
export interface PlayerBucketEmptyEventMembers {
  readonly __javaSupertypes?: readonly [PlayerBucketEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerBucketEmptyEvent = PlayerBucketEmptyEventMembers & PlayerBucketEvent;
export interface PlayerBucketEmptyEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit.Material, arg5: j_org_bukkit_inventory.ItemStack): PlayerBucketEmptyEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit.Material, arg5: j_org_bukkit_inventory.ItemStack, arg6: j_org_bukkit_inventory.EquipmentSlot): PlayerBucketEmptyEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.BlockFace, arg3: j_org_bukkit.Material, arg4: j_org_bukkit_inventory.ItemStack): PlayerBucketEmptyEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerBucketEntityEvent. */
export interface PlayerBucketEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntityBucket(): j_org_bukkit_inventory.ItemStack;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOriginalBucket(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerBucketEntityEvent = PlayerBucketEntityEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerBucketEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.ItemStack, arg4: j_org_bukkit_inventory.EquipmentSlot): PlayerBucketEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.player.PlayerBucketEvent. */
export interface PlayerBucketEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getBlockClicked(): j_org_bukkit_block.Block;
  getBlockFace(): j_org_bukkit_block.BlockFace;
  getBucket(): j_org_bukkit.Material;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getItemStack(): j_org_bukkit_inventory.ItemStack | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setItemStack(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type PlayerBucketEvent = PlayerBucketEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerBucketEventStatics {
}

/** JVM class org.bukkit.event.player.PlayerBucketFillEvent. */
export interface PlayerBucketFillEventMembers {
  readonly __javaSupertypes?: readonly [PlayerBucketEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerBucketFillEvent = PlayerBucketFillEventMembers & PlayerBucketEvent;
export interface PlayerBucketFillEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit.Material, arg5: j_org_bukkit_inventory.ItemStack): PlayerBucketFillEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit.Material, arg5: j_org_bukkit_inventory.ItemStack, arg6: j_org_bukkit_inventory.EquipmentSlot): PlayerBucketFillEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block.BlockFace, arg3: j_org_bukkit.Material, arg4: j_org_bukkit_inventory.ItemStack): PlayerBucketFillEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerBucketFishEvent. */
export interface PlayerBucketFishEventMembers {
  readonly __javaSupertypes?: readonly [PlayerBucketEntityEvent];
  getEntity(): j_org_bukkit_entity.Fish;
  getFishBucket(): j_org_bukkit_inventory.ItemStack;
  getWaterBucket(): j_org_bukkit_inventory.ItemStack;
}
export type PlayerBucketFishEvent = PlayerBucketFishEventMembers & PlayerBucketEntityEvent;
export interface PlayerBucketFishEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Fish, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.ItemStack, arg4: j_org_bukkit_inventory.EquipmentSlot): PlayerBucketFishEvent;
}

/** JVM class org.bukkit.event.player.PlayerChangedMainHandEvent. */
export interface PlayerChangedMainHandEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMainHand(): j_org_bukkit_inventory.MainHand;
  getNewMainHand(): j_org_bukkit_inventory.MainHand;
}
export type PlayerChangedMainHandEvent = PlayerChangedMainHandEventMembers & PlayerEvent;
export interface PlayerChangedMainHandEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.MainHand): PlayerChangedMainHandEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerChangedWorldEvent. */
export interface PlayerChangedWorldEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getFrom(): j_org_bukkit.World;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerChangedWorldEvent = PlayerChangedWorldEventMembers & PlayerEvent;
export interface PlayerChangedWorldEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.World): PlayerChangedWorldEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.player.PlayerChannelEvent. */
export interface PlayerChannelEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getChannel(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerChannelEvent = PlayerChannelEventMembers & PlayerEvent;
export interface PlayerChannelEventStatics {
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerChatEvent. */
export interface PlayerChatEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getFormat(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMessage(): string;
  getRecipients(): JavaSet<j_org_bukkit_entity.Player>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFormat(arg0: string): void;
  setMessage(arg0: string): void;
  setPlayer(arg0: j_org_bukkit_entity.Player): void;
}
export type PlayerChatEvent = PlayerChatEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerChatEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string): PlayerChatEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: string, arg3: JavaSet<j_org_bukkit_entity.Player>): PlayerChatEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerChatTabCompleteEvent. */
export interface PlayerChatTabCompleteEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getChatMessage(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLastToken(): string;
  getTabCompletions(): JavaCollection<string>;
}
export type PlayerChatTabCompleteEvent = PlayerChatTabCompleteEventMembers & PlayerEvent;
export interface PlayerChatTabCompleteEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaCollection<string>): PlayerChatTabCompleteEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerCommandPreprocessEvent. */
export interface PlayerCommandPreprocessEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMessage(): string;
  getRecipients(): JavaSet<j_org_bukkit_entity.Player>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  /** @throws java.lang.IllegalArgumentException */
  setMessage(arg0: string): void;
  /** @throws java.lang.IllegalArgumentException */
  setPlayer(arg0: j_org_bukkit_entity.Player): void;
}
export type PlayerCommandPreprocessEvent = PlayerCommandPreprocessEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerCommandPreprocessEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string): PlayerCommandPreprocessEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaSet<j_org_bukkit_entity.Player>): PlayerCommandPreprocessEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerCommandSendEvent. */
export interface PlayerCommandSendEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getCommands(): JavaCollection<string>;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerCommandSendEvent = PlayerCommandSendEventMembers & PlayerEvent;
export interface PlayerCommandSendEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: JavaCollection<string>): PlayerCommandSendEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerDropItemEvent. */
export interface PlayerDropItemEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemDrop(): j_org_bukkit_entity.Item;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerDropItemEvent = PlayerDropItemEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerDropItemEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Item): PlayerDropItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerEditBookEvent. */
export interface PlayerEditBookEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewBookMeta(): j_org_bukkit_inventory_meta.BookMeta;
  getPreviousBookMeta(): j_org_bukkit_inventory_meta.BookMeta;
  getSlot(): number;
  isCancelled(): boolean;
  isSigning(): boolean;
  setCancelled(arg0: boolean): void;
  /** @throws java.lang.IllegalArgumentException */
  setNewBookMeta(arg0: j_org_bukkit_inventory_meta.BookMeta): void;
  setSigning(arg0: boolean): void;
}
export type PlayerEditBookEvent = PlayerEditBookEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerEditBookEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number, arg2: j_org_bukkit_inventory_meta.BookMeta, arg3: j_org_bukkit_inventory_meta.BookMeta, arg4: boolean): PlayerEditBookEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerEggThrowEvent. */
export interface PlayerEggThrowEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getEgg(): j_org_bukkit_entity.Egg;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHatchingType(): j_org_bukkit_entity.EntityType;
  getNumHatches(): number;
  isHatching(): boolean;
  setHatching(arg0: boolean): void;
  setHatchingType(arg0: j_org_bukkit_entity.EntityType): void;
  setNumHatches(arg0: number): void;
}
export type PlayerEggThrowEvent = PlayerEggThrowEventMembers & PlayerEvent;
export interface PlayerEggThrowEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Egg, arg2: boolean, arg3: number, arg4: j_org_bukkit_entity.EntityType): PlayerEggThrowEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.player.PlayerEvent. */
export interface PlayerEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getPlayer(): j_org_bukkit_entity.Player;
}
export type PlayerEvent = PlayerEventMembers & j_org_bukkit_event.Event;
export interface PlayerEventStatics {
}

/** JVM class org.bukkit.event.player.PlayerExpChangeEvent. */
export interface PlayerExpChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getAmount(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSource(): j_org_bukkit_entity.Entity | null;
  setAmount(arg0: number): void;
}
export type PlayerExpChangeEvent = PlayerExpChangeEventMembers & PlayerEvent;
export interface PlayerExpChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number): PlayerExpChangeEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity | null, arg2: number): PlayerExpChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerExpCooldownChangeEvent. */
export interface PlayerExpCooldownChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewCooldown(): number;
  getReason(): PlayerExpCooldownChangeEvent_ChangeReason;
  setNewCooldown(arg0: number): void;
}
export type PlayerExpCooldownChangeEvent = PlayerExpCooldownChangeEventMembers & PlayerEvent;
export interface PlayerExpCooldownChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number, arg2: PlayerExpCooldownChangeEvent_ChangeReason): PlayerExpCooldownChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerExpCooldownChangeEvent$ChangeReason; constants are host handles, not strings. */
export type PlayerExpCooldownChangeEvent_ChangeReason = JavaEnum<"org.bukkit.event.player.PlayerExpCooldownChangeEvent$ChangeReason", "PICKUP_ORB" | "PLUGIN"> & PlayerExpCooldownChangeEvent_ChangeReasonMembers;
export interface PlayerExpCooldownChangeEvent_ChangeReasonMembers {
}
export interface PlayerExpCooldownChangeEvent_ChangeReasonStatics {
  readonly PICKUP_ORB: PlayerExpCooldownChangeEvent_ChangeReason;
  readonly PLUGIN: PlayerExpCooldownChangeEvent_ChangeReason;
  valueOf(arg0: string): PlayerExpCooldownChangeEvent_ChangeReason;
  values(): Array<PlayerExpCooldownChangeEvent_ChangeReason>;
}

/** JVM class org.bukkit.event.player.PlayerFishEvent. */
export interface PlayerFishEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getCaught(): j_org_bukkit_entity.Entity | null;
  getExpToDrop(): number;
  getHand(): j_org_bukkit_inventory.EquipmentSlot | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHook(): j_org_bukkit_entity.FishHook;
  getState(): PlayerFishEvent_State;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setExpToDrop(arg0: number): void;
}
export type PlayerFishEvent = PlayerFishEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerFishEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_entity.FishHook, arg3: PlayerFishEvent_State): PlayerFishEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_entity.FishHook, arg3: j_org_bukkit_inventory.EquipmentSlot | null, arg4: PlayerFishEvent_State): PlayerFishEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerFishEvent$State; constants are host handles, not strings. */
export type PlayerFishEvent_State = JavaEnum<"org.bukkit.event.player.PlayerFishEvent$State", "BITE" | "CAUGHT_ENTITY" | "CAUGHT_FISH" | "FAILED_ATTEMPT" | "FISHING" | "IN_GROUND" | "LURED" | "REEL_IN"> & PlayerFishEvent_StateMembers;
export interface PlayerFishEvent_StateMembers {
}
export interface PlayerFishEvent_StateStatics {
  readonly BITE: PlayerFishEvent_State;
  readonly CAUGHT_ENTITY: PlayerFishEvent_State;
  readonly CAUGHT_FISH: PlayerFishEvent_State;
  readonly FAILED_ATTEMPT: PlayerFishEvent_State;
  readonly FISHING: PlayerFishEvent_State;
  readonly IN_GROUND: PlayerFishEvent_State;
  readonly LURED: PlayerFishEvent_State;
  readonly REEL_IN: PlayerFishEvent_State;
  valueOf(arg0: string): PlayerFishEvent_State;
  values(): Array<PlayerFishEvent_State>;
}

/** JVM class org.bukkit.event.player.PlayerGameModeChangeEvent. */
export interface PlayerGameModeChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  cancelMessage(): j_net_kyori_adventure_text.Component | null;
  cancelMessage(arg0: j_net_kyori_adventure_text.Component | null): void;
  getCause(): PlayerGameModeChangeEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewGameMode(): j_org_bukkit.GameMode;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerGameModeChangeEvent = PlayerGameModeChangeEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerGameModeChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.GameMode): PlayerGameModeChangeEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.GameMode, arg2: PlayerGameModeChangeEvent_Cause, arg3: j_net_kyori_adventure_text.Component | null): PlayerGameModeChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerGameModeChangeEvent$Cause; constants are host handles, not strings. */
export type PlayerGameModeChangeEvent_Cause = JavaEnum<"org.bukkit.event.player.PlayerGameModeChangeEvent$Cause", "COMMAND" | "DEFAULT_GAMEMODE" | "HARDCORE_DEATH" | "PLUGIN" | "UNKNOWN"> & PlayerGameModeChangeEvent_CauseMembers;
export interface PlayerGameModeChangeEvent_CauseMembers {
}
export interface PlayerGameModeChangeEvent_CauseStatics {
  readonly COMMAND: PlayerGameModeChangeEvent_Cause;
  readonly DEFAULT_GAMEMODE: PlayerGameModeChangeEvent_Cause;
  readonly HARDCORE_DEATH: PlayerGameModeChangeEvent_Cause;
  readonly PLUGIN: PlayerGameModeChangeEvent_Cause;
  readonly UNKNOWN: PlayerGameModeChangeEvent_Cause;
  valueOf(arg0: string): PlayerGameModeChangeEvent_Cause;
  values(): Array<PlayerGameModeChangeEvent_Cause>;
}

/** JVM class org.bukkit.event.player.PlayerHarvestBlockEvent. */
export interface PlayerHarvestBlockEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHarvestedBlock(): j_org_bukkit_block.Block;
  getItemsHarvested(): JavaList<j_org_bukkit_inventory.ItemStack>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerHarvestBlockEvent = PlayerHarvestBlockEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerHarvestBlockEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: JavaList<j_org_bukkit_inventory.ItemStack>): PlayerHarvestBlockEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.EquipmentSlot, arg3: JavaList<j_org_bukkit_inventory.ItemStack>): PlayerHarvestBlockEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerHideEntityEvent. */
export interface PlayerHideEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerHideEntityEvent = PlayerHideEntityEventMembers & PlayerEvent;
export interface PlayerHideEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerHideEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerInputEvent. */
export interface PlayerInputEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInput(): j_org_bukkit.Input;
}
export type PlayerInputEvent = PlayerInputEventMembers & PlayerEvent;
export interface PlayerInputEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Input): PlayerInputEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerInteractAtEntityEvent. */
export interface PlayerInteractAtEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerInteractEntityEvent];
  getClickedPosition(): j_org_bukkit_util.Vector;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerInteractAtEntityEvent = PlayerInteractAtEntityEventMembers & PlayerInteractEntityEvent;
export interface PlayerInteractAtEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_util.Vector): PlayerInteractAtEntityEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_util.Vector, arg3: j_org_bukkit_inventory.EquipmentSlot): PlayerInteractAtEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerInteractEntityEvent. */
export interface PlayerInteractEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRightClicked(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerInteractEntityEvent = PlayerInteractEntityEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerInteractEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerInteractEntityEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_inventory.EquipmentSlot): PlayerInteractEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerInteractEvent. */
export interface PlayerInteractEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getAction(): j_org_bukkit_event_block.Action;
  getBlockFace(): j_org_bukkit_block.BlockFace;
  getClickedBlock(): j_org_bukkit_block.Block | null;
  getClickedPosition(): j_org_bukkit_util.Vector | null;
  getHand(): j_org_bukkit_inventory.EquipmentSlot | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInteractionPoint(): j_org_bukkit.Location | null;
  getItem(): j_org_bukkit_inventory.ItemStack | null;
  getMaterial(): j_org_bukkit.Material;
  hasBlock(): boolean;
  hasItem(): boolean;
  isBlockInHand(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setUseInteractedBlock(arg0: j_org_bukkit_event.Event_Result): void;
  setUseItemInHand(arg0: j_org_bukkit_event.Event_Result): void;
  useInteractedBlock(): j_org_bukkit_event.Event_Result;
  useItemInHand(): j_org_bukkit_event.Event_Result;
}
export type PlayerInteractEvent = PlayerInteractEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerInteractEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_event_block.Action, arg2: j_org_bukkit_inventory.ItemStack | null, arg3: j_org_bukkit_block.Block | null, arg4: j_org_bukkit_block.BlockFace): PlayerInteractEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_event_block.Action, arg2: j_org_bukkit_inventory.ItemStack | null, arg3: j_org_bukkit_block.Block | null, arg4: j_org_bukkit_block.BlockFace, arg5: j_org_bukkit_inventory.EquipmentSlot | null): PlayerInteractEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_event_block.Action, arg2: j_org_bukkit_inventory.ItemStack | null, arg3: j_org_bukkit_block.Block | null, arg4: j_org_bukkit_block.BlockFace, arg5: j_org_bukkit_inventory.EquipmentSlot | null, arg6: j_org_bukkit_util.Vector | null): PlayerInteractEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerItemBreakEvent. */
export interface PlayerItemBreakEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getBrokenItem(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerItemBreakEvent = PlayerItemBreakEventMembers & PlayerEvent;
export interface PlayerItemBreakEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack): PlayerItemBreakEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerItemConsumeEvent. */
export interface PlayerItemConsumeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getReplacement(): j_org_bukkit_inventory.ItemStack | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null): void;
  setReplacement(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type PlayerItemConsumeEvent = PlayerItemConsumeEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerItemConsumeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack): PlayerItemConsumeEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.EquipmentSlot): PlayerItemConsumeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerItemDamageEvent. */
export interface PlayerItemDamageEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getDamage(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getOriginalDamage(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDamage(arg0: number): void;
}
export type PlayerItemDamageEvent = PlayerItemDamageEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerItemDamageEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): PlayerItemDamageEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: number, arg3: number): PlayerItemDamageEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerItemHeldEvent. */
export interface PlayerItemHeldEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewSlot(): number;
  getPreviousSlot(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerItemHeldEvent = PlayerItemHeldEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerItemHeldEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number, arg2: number): PlayerItemHeldEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerItemMendEvent. */
export interface PlayerItemMendEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getConsumedExperience(): number;
  getDurabilityToXpOperation(): JavaOpaque<"java.util.function.IntUnaryOperator">;
  getExperienceOrb(): j_org_bukkit_entity.ExperienceOrb;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getRepairAmount(): number;
  getSlot(): j_org_bukkit_inventory.EquipmentSlot;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDurabilityToXpOperation(arg0: JavaOpaque<"java.util.function.IntUnaryOperator">): void;
  setRepairAmount(arg0: number): void;
}
export type PlayerItemMendEvent = PlayerItemMendEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerItemMendEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_entity.ExperienceOrb, arg3: number): PlayerItemMendEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.EquipmentSlot, arg3: j_org_bukkit_entity.ExperienceOrb, arg4: number): PlayerItemMendEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.EquipmentSlot, arg3: j_org_bukkit_entity.ExperienceOrb, arg4: number, arg5: number): PlayerItemMendEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerJoinEvent. */
export interface PlayerJoinEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getJoinMessage(): string | null;
  joinMessage(): j_net_kyori_adventure_text.Component | null;
  joinMessage(arg0: j_net_kyori_adventure_text.Component | null): void;
  setJoinMessage(arg0: string | null): void;
}
export type PlayerJoinEvent = PlayerJoinEventMembers & PlayerEvent;
export interface PlayerJoinEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string | null): PlayerJoinEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component | null): PlayerJoinEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerKickEvent. */
export interface PlayerKickEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getCause(): PlayerKickEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLeaveMessage(): string;
  getReason(): string;
  isCancelled(): boolean;
  leaveMessage(): j_net_kyori_adventure_text.Component;
  leaveMessage(arg0: j_net_kyori_adventure_text.Component): void;
  reason(): j_net_kyori_adventure_text.Component;
  reason(arg0: j_net_kyori_adventure_text.Component): void;
  setCancelled(arg0: boolean): void;
  setLeaveMessage(arg0: string): void;
  setReason(arg0: string): void;
}
export type PlayerKickEvent = PlayerKickEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerKickEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: string): PlayerKickEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_text.Component): PlayerKickEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_text.Component, arg3: PlayerKickEvent_Cause): PlayerKickEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerKickEvent$Cause; constants are host handles, not strings. */
export type PlayerKickEvent_Cause = JavaEnum<"org.bukkit.event.player.PlayerKickEvent$Cause", "BANNED" | "CHAT_VALIDATION_FAILED" | "DUPLICATE_LOGIN" | "EXPIRED_PROFILE_PUBLIC_KEY" | "FLYING_PLAYER" | "FLYING_VEHICLE" | "IDLING" | "ILLEGAL_ACTION" | "ILLEGAL_CHARACTERS" | "INVALID_COOKIE" | "INVALID_ENTITY_ATTACKED" | "INVALID_PAYLOAD" | "INVALID_PLAYER_MOVEMENT" | "INVALID_PUBLIC_KEY_SIGNATURE" | "INVALID_VEHICLE_MOVEMENT" | "IP_BANNED" | "KICK_COMMAND" | "OUT_OF_ORDER_CHAT" | "PLUGIN" | "RESOURCE_PACK_REJECTION" | "RESTART_COMMAND" | "SELF_INTERACTION" | "SPAM" | "TIMEOUT" | "TOO_MANY_PENDING_CHATS" | "UNKNOWN" | "UNSIGNED_CHAT" | "WHITELIST"> & PlayerKickEvent_CauseMembers;
export interface PlayerKickEvent_CauseMembers {
}
export interface PlayerKickEvent_CauseStatics {
  readonly BANNED: PlayerKickEvent_Cause;
  readonly CHAT_VALIDATION_FAILED: PlayerKickEvent_Cause;
  readonly DUPLICATE_LOGIN: PlayerKickEvent_Cause;
  readonly EXPIRED_PROFILE_PUBLIC_KEY: PlayerKickEvent_Cause;
  readonly FLYING_PLAYER: PlayerKickEvent_Cause;
  readonly FLYING_VEHICLE: PlayerKickEvent_Cause;
  readonly IDLING: PlayerKickEvent_Cause;
  readonly ILLEGAL_ACTION: PlayerKickEvent_Cause;
  readonly ILLEGAL_CHARACTERS: PlayerKickEvent_Cause;
  readonly INVALID_COOKIE: PlayerKickEvent_Cause;
  readonly INVALID_ENTITY_ATTACKED: PlayerKickEvent_Cause;
  readonly INVALID_PAYLOAD: PlayerKickEvent_Cause;
  readonly INVALID_PLAYER_MOVEMENT: PlayerKickEvent_Cause;
  readonly INVALID_PUBLIC_KEY_SIGNATURE: PlayerKickEvent_Cause;
  readonly INVALID_VEHICLE_MOVEMENT: PlayerKickEvent_Cause;
  readonly IP_BANNED: PlayerKickEvent_Cause;
  readonly KICK_COMMAND: PlayerKickEvent_Cause;
  readonly OUT_OF_ORDER_CHAT: PlayerKickEvent_Cause;
  readonly PLUGIN: PlayerKickEvent_Cause;
  readonly RESOURCE_PACK_REJECTION: PlayerKickEvent_Cause;
  readonly RESTART_COMMAND: PlayerKickEvent_Cause;
  readonly SELF_INTERACTION: PlayerKickEvent_Cause;
  readonly SPAM: PlayerKickEvent_Cause;
  readonly TIMEOUT: PlayerKickEvent_Cause;
  readonly TOO_MANY_PENDING_CHATS: PlayerKickEvent_Cause;
  readonly UNKNOWN: PlayerKickEvent_Cause;
  readonly UNSIGNED_CHAT: PlayerKickEvent_Cause;
  readonly WHITELIST: PlayerKickEvent_Cause;
  valueOf(arg0: string): PlayerKickEvent_Cause;
  values(): Array<PlayerKickEvent_Cause>;
}

/** JVM class org.bukkit.event.player.PlayerLevelChangeEvent. */
export interface PlayerLevelChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewLevel(): number;
  getOldLevel(): number;
}
export type PlayerLevelChangeEvent = PlayerLevelChangeEventMembers & PlayerEvent;
export interface PlayerLevelChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number, arg2: number): PlayerLevelChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerLinksSendEvent. */
export interface PlayerLinksSendEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getConnection(): j_io_papermc_paper_connection.PlayerCommonConnection;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLinks(): j_org_bukkit.ServerLinks;
}
export type PlayerLinksSendEvent = PlayerLinksSendEventMembers & j_org_bukkit_event.Event;
export interface PlayerLinksSendEventStatics {
  new(arg0: j_io_papermc_paper_connection.PlayerConfigurationConnection, arg1: j_org_bukkit.ServerLinks): PlayerLinksSendEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerLocaleChangeEvent. */
export interface PlayerLocaleChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocale(): string;
  locale(): JavaOpaque<"java.util.Locale">;
}
export type PlayerLocaleChangeEvent = PlayerLocaleChangeEventMembers & PlayerEvent;
export interface PlayerLocaleChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string): PlayerLocaleChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerLoginEvent. */
export interface PlayerLoginEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  allow(): void;
  disallow(arg0: PlayerLoginEvent_Result, arg1: string): void;
  disallow(arg0: PlayerLoginEvent_Result, arg1: j_net_kyori_adventure_text.Component): void;
  getAddress(): JavaOpaque<"java.net.InetAddress">;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHostname(): string;
  getKickMessage(): string;
  getRealAddress(): JavaOpaque<"java.net.InetAddress">;
  getResult(): PlayerLoginEvent_Result;
  kickMessage(): j_net_kyori_adventure_text.Component;
  kickMessage(arg0: j_net_kyori_adventure_text.Component): void;
  setKickMessage(arg0: string): void;
  setResult(arg0: PlayerLoginEvent_Result): void;
}
export type PlayerLoginEvent = PlayerLoginEventMembers & PlayerEvent;
export interface PlayerLoginEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaOpaque<"java.net.InetAddress">): PlayerLoginEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaOpaque<"java.net.InetAddress">, arg3: JavaOpaque<"java.net.InetAddress">): PlayerLoginEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaOpaque<"java.net.InetAddress">, arg3: PlayerLoginEvent_Result, arg4: string, arg5: JavaOpaque<"java.net.InetAddress">): PlayerLoginEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaOpaque<"java.net.InetAddress">, arg3: PlayerLoginEvent_Result, arg4: j_net_kyori_adventure_text.Component, arg5: JavaOpaque<"java.net.InetAddress">): PlayerLoginEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerLoginEvent$Result; constants are host handles, not strings. */
export type PlayerLoginEvent_Result = JavaEnum<"org.bukkit.event.player.PlayerLoginEvent$Result", "ALLOWED" | "KICK_BANNED" | "KICK_FULL" | "KICK_OTHER" | "KICK_WHITELIST"> & PlayerLoginEvent_ResultMembers;
export interface PlayerLoginEvent_ResultMembers {
}
export interface PlayerLoginEvent_ResultStatics {
  readonly ALLOWED: PlayerLoginEvent_Result;
  readonly KICK_BANNED: PlayerLoginEvent_Result;
  readonly KICK_FULL: PlayerLoginEvent_Result;
  readonly KICK_OTHER: PlayerLoginEvent_Result;
  readonly KICK_WHITELIST: PlayerLoginEvent_Result;
  valueOf(arg0: string): PlayerLoginEvent_Result;
  values(): Array<PlayerLoginEvent_Result>;
}

/** JVM class org.bukkit.event.player.PlayerMoveEvent. */
export interface PlayerMoveEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getFrom(): j_org_bukkit.Location;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTo(): j_org_bukkit.Location;
  hasChangedBlock(): boolean;
  hasChangedOrientation(): boolean;
  hasChangedPosition(): boolean;
  hasExplicitlyChangedBlock(): boolean;
  hasExplicitlyChangedPosition(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFrom(arg0: j_org_bukkit.Location): void;
  setTo(arg0: j_org_bukkit.Location): void;
}
export type PlayerMoveEvent = PlayerMoveEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerMoveEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null): PlayerMoveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerPickupArrowEvent. */
export interface PlayerPickupArrowEventMembers {
  readonly __javaSupertypes?: readonly [PlayerPickupItemEvent];
  getArrow(): j_org_bukkit_entity.AbstractArrow;
}
export type PlayerPickupArrowEvent = PlayerPickupArrowEventMembers & PlayerPickupItemEvent;
export interface PlayerPickupArrowEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Item, arg2: j_org_bukkit_entity.AbstractArrow): PlayerPickupArrowEvent;
}

/** JVM class org.bukkit.event.player.PlayerPickupItemEvent. */
export interface PlayerPickupItemEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getFlyAtPlayer(): boolean;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_entity.Item;
  getRemaining(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFlyAtPlayer(arg0: boolean): void;
}
export type PlayerPickupItemEvent = PlayerPickupItemEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerPickupItemEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Item, arg2: number): PlayerPickupItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerPortalEvent. */
export interface PlayerPortalEventMembers {
  readonly __javaSupertypes?: readonly [PlayerTeleportEvent];
  getCanCreatePortal(): boolean;
  getCreationRadius(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRelativeTeleportationFlags(): JavaSet<j_io_papermc_paper_entity.TeleportFlag_Relative>;
  getSearchRadius(): number;
  getTo(): j_org_bukkit.Location;
  setCanCreatePortal(arg0: boolean): void;
  setCreationRadius(arg0: number): void;
  setSearchRadius(arg0: number): void;
  setTo(arg0: j_org_bukkit.Location): void;
  willDismountPlayer(): boolean;
}
export type PlayerPortalEvent = PlayerPortalEventMembers & PlayerTeleportEvent;
export interface PlayerPortalEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null): PlayerPortalEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: PlayerTeleportEvent_TeleportCause): PlayerPortalEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: PlayerTeleportEvent_TeleportCause, arg4: number, arg5: boolean, arg6: number): PlayerPortalEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerPreLoginEvent. */
export interface PlayerPreLoginEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  allow(): void;
  disallow(arg0: PlayerPreLoginEvent_Result, arg1: string): void;
  disallow(arg0: PlayerPreLoginEvent_Result, arg1: j_net_kyori_adventure_text.Component): void;
  getAddress(): JavaOpaque<"java.net.InetAddress">;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKickMessage(): string;
  getName(): string;
  getResult(): PlayerPreLoginEvent_Result;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  kickMessage(): j_net_kyori_adventure_text.Component;
  kickMessage(arg0: j_net_kyori_adventure_text.Component): void;
  setKickMessage(arg0: string): void;
  setResult(arg0: PlayerPreLoginEvent_Result): void;
}
export type PlayerPreLoginEvent = PlayerPreLoginEventMembers & j_org_bukkit_event.Event;
export interface PlayerPreLoginEventStatics {
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">): PlayerPreLoginEvent;
  new(arg0: string, arg1: JavaOpaque<"java.net.InetAddress">, arg2: JavaOpaque<"java.util.UUID">): PlayerPreLoginEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerPreLoginEvent$Result; constants are host handles, not strings. */
export type PlayerPreLoginEvent_Result = JavaEnum<"org.bukkit.event.player.PlayerPreLoginEvent$Result", "ALLOWED" | "KICK_BANNED" | "KICK_FULL" | "KICK_OTHER" | "KICK_WHITELIST"> & PlayerPreLoginEvent_ResultMembers;
export interface PlayerPreLoginEvent_ResultMembers {
}
export interface PlayerPreLoginEvent_ResultStatics {
  readonly ALLOWED: PlayerPreLoginEvent_Result;
  readonly KICK_BANNED: PlayerPreLoginEvent_Result;
  readonly KICK_FULL: PlayerPreLoginEvent_Result;
  readonly KICK_OTHER: PlayerPreLoginEvent_Result;
  readonly KICK_WHITELIST: PlayerPreLoginEvent_Result;
  valueOf(arg0: string): PlayerPreLoginEvent_Result;
  values(): Array<PlayerPreLoginEvent_Result>;
}

/** JVM class org.bukkit.event.player.PlayerQuitEvent. */
export interface PlayerQuitEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getQuitMessage(): string | null;
  getReason(): PlayerQuitEvent_QuitReason;
  quitMessage(): j_net_kyori_adventure_text.Component | null;
  quitMessage(arg0: j_net_kyori_adventure_text.Component | null): void;
  setQuitMessage(arg0: string | null): void;
}
export type PlayerQuitEvent = PlayerQuitEventMembers & PlayerEvent;
export interface PlayerQuitEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string | null): PlayerQuitEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: string | null, arg2: PlayerQuitEvent_QuitReason | null): PlayerQuitEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component | null): PlayerQuitEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component | null, arg2: PlayerQuitEvent_QuitReason | null): PlayerQuitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerQuitEvent$QuitReason; constants are host handles, not strings. */
export type PlayerQuitEvent_QuitReason = JavaEnum<"org.bukkit.event.player.PlayerQuitEvent$QuitReason", "DISCONNECTED" | "ERRONEOUS_STATE" | "KICKED" | "TIMED_OUT"> & PlayerQuitEvent_QuitReasonMembers;
export interface PlayerQuitEvent_QuitReasonMembers {
}
export interface PlayerQuitEvent_QuitReasonStatics {
  readonly DISCONNECTED: PlayerQuitEvent_QuitReason;
  readonly ERRONEOUS_STATE: PlayerQuitEvent_QuitReason;
  readonly KICKED: PlayerQuitEvent_QuitReason;
  readonly TIMED_OUT: PlayerQuitEvent_QuitReason;
  valueOf(arg0: string): PlayerQuitEvent_QuitReason;
  values(): Array<PlayerQuitEvent_QuitReason>;
}

/** JVM class org.bukkit.event.player.PlayerRecipeBookClickEvent. */
export interface PlayerRecipeBookClickEvent_2Members {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOriginalRecipe(): j_org_bukkit_inventory.Recipe;
  getRecipe(): j_org_bukkit_inventory.Recipe;
  isShiftClick(): boolean;
  setRecipe(arg0: j_org_bukkit_inventory.Recipe): void;
  setShiftClick(arg0: boolean): void;
}
export type PlayerRecipeBookClickEvent_2 = PlayerRecipeBookClickEvent_2Members & PlayerEvent;
export interface PlayerRecipeBookClickEvent_2Statics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.Recipe, arg2: boolean): PlayerRecipeBookClickEvent_2;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent. */
export interface PlayerRecipeBookSettingsChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipeBookType(): PlayerRecipeBookSettingsChangeEvent_RecipeBookType;
  isFiltering(): boolean;
  isOpen(): boolean;
}
export type PlayerRecipeBookSettingsChangeEvent = PlayerRecipeBookSettingsChangeEventMembers & PlayerEvent;
export interface PlayerRecipeBookSettingsChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: PlayerRecipeBookSettingsChangeEvent_RecipeBookType, arg2: boolean, arg3: boolean): PlayerRecipeBookSettingsChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent$RecipeBookType; constants are host handles, not strings. */
export type PlayerRecipeBookSettingsChangeEvent_RecipeBookType = JavaEnum<"org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent$RecipeBookType", "BLAST_FURNACE" | "CRAFTING" | "FURNACE" | "SMOKER"> & PlayerRecipeBookSettingsChangeEvent_RecipeBookTypeMembers;
export interface PlayerRecipeBookSettingsChangeEvent_RecipeBookTypeMembers {
}
export interface PlayerRecipeBookSettingsChangeEvent_RecipeBookTypeStatics {
  readonly BLAST_FURNACE: PlayerRecipeBookSettingsChangeEvent_RecipeBookType;
  readonly CRAFTING: PlayerRecipeBookSettingsChangeEvent_RecipeBookType;
  readonly FURNACE: PlayerRecipeBookSettingsChangeEvent_RecipeBookType;
  readonly SMOKER: PlayerRecipeBookSettingsChangeEvent_RecipeBookType;
  valueOf(arg0: string): PlayerRecipeBookSettingsChangeEvent_RecipeBookType;
  values(): Array<PlayerRecipeBookSettingsChangeEvent_RecipeBookType>;
}

/** JVM class org.bukkit.event.player.PlayerRecipeDiscoverEvent. */
export interface PlayerRecipeDiscoverEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipe(): j_org_bukkit.NamespacedKey;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  shouldShowNotification(): boolean;
  shouldShowNotification(arg0: boolean): void;
}
export type PlayerRecipeDiscoverEvent = PlayerRecipeDiscoverEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerRecipeDiscoverEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.NamespacedKey, arg2: boolean): PlayerRecipeDiscoverEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerRegisterChannelEvent. */
export interface PlayerRegisterChannelEventMembers {
  readonly __javaSupertypes?: readonly [PlayerChannelEvent];
}
export type PlayerRegisterChannelEvent = PlayerRegisterChannelEventMembers & PlayerChannelEvent;
export interface PlayerRegisterChannelEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string): PlayerRegisterChannelEvent;
}

/** JVM class org.bukkit.event.player.PlayerResourcePackStatusEvent. */
export interface PlayerResourcePackStatusEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHash(): string;
  getID(): JavaOpaque<"java.util.UUID">;
  getStatus(): PlayerResourcePackStatusEvent_Status;
}
export type PlayerResourcePackStatusEvent = PlayerResourcePackStatusEventMembers & PlayerEvent;
export interface PlayerResourcePackStatusEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: JavaOpaque<"java.util.UUID">, arg2: PlayerResourcePackStatusEvent_Status): PlayerResourcePackStatusEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerResourcePackStatusEvent$Status; constants are host handles, not strings. */
export type PlayerResourcePackStatusEvent_Status = JavaEnum<"org.bukkit.event.player.PlayerResourcePackStatusEvent$Status", "ACCEPTED" | "DECLINED" | "DISCARDED" | "DOWNLOADED" | "FAILED_DOWNLOAD" | "FAILED_RELOAD" | "INVALID_URL" | "SUCCESSFULLY_LOADED"> & PlayerResourcePackStatusEvent_StatusMembers;
export interface PlayerResourcePackStatusEvent_StatusMembers {
}
export interface PlayerResourcePackStatusEvent_StatusStatics {
  readonly ACCEPTED: PlayerResourcePackStatusEvent_Status;
  readonly DECLINED: PlayerResourcePackStatusEvent_Status;
  readonly DISCARDED: PlayerResourcePackStatusEvent_Status;
  readonly DOWNLOADED: PlayerResourcePackStatusEvent_Status;
  readonly FAILED_DOWNLOAD: PlayerResourcePackStatusEvent_Status;
  readonly FAILED_RELOAD: PlayerResourcePackStatusEvent_Status;
  readonly INVALID_URL: PlayerResourcePackStatusEvent_Status;
  readonly SUCCESSFULLY_LOADED: PlayerResourcePackStatusEvent_Status;
  valueOf(arg0: string): PlayerResourcePackStatusEvent_Status;
  values(): Array<PlayerResourcePackStatusEvent_Status>;
}

/** JVM class org.bukkit.event.player.PlayerRespawnEvent. */
export interface PlayerRespawnEventMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_event_player.AbstractRespawnEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  setRespawnLocation(arg0: j_org_bukkit.Location): void;
}
export type PlayerRespawnEvent = PlayerRespawnEventMembers & j_io_papermc_paper_event_player.AbstractRespawnEvent;
export interface PlayerRespawnEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: boolean): PlayerRespawnEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: boolean, arg3: boolean): PlayerRespawnEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: boolean, arg3: boolean, arg4: boolean, arg5: PlayerRespawnEvent_RespawnReason): PlayerRespawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerRespawnEvent$RespawnFlag; constants are host handles, not strings. */
export type PlayerRespawnEvent_RespawnFlag = JavaEnum<"org.bukkit.event.player.PlayerRespawnEvent$RespawnFlag", "ANCHOR_SPAWN" | "BED_SPAWN" | "END_PORTAL"> & PlayerRespawnEvent_RespawnFlagMembers;
export interface PlayerRespawnEvent_RespawnFlagMembers {
}
export interface PlayerRespawnEvent_RespawnFlagStatics {
  readonly ANCHOR_SPAWN: PlayerRespawnEvent_RespawnFlag;
  readonly BED_SPAWN: PlayerRespawnEvent_RespawnFlag;
  readonly END_PORTAL: PlayerRespawnEvent_RespawnFlag;
  valueOf(arg0: string): PlayerRespawnEvent_RespawnFlag;
  values(): Array<PlayerRespawnEvent_RespawnFlag>;
}

/** Live JVM enum org.bukkit.event.player.PlayerRespawnEvent$RespawnReason; constants are host handles, not strings. */
export type PlayerRespawnEvent_RespawnReason = JavaEnum<"org.bukkit.event.player.PlayerRespawnEvent$RespawnReason", "DEATH" | "END_PORTAL" | "PLUGIN"> & PlayerRespawnEvent_RespawnReasonMembers;
export interface PlayerRespawnEvent_RespawnReasonMembers {
}
export interface PlayerRespawnEvent_RespawnReasonStatics {
  readonly DEATH: PlayerRespawnEvent_RespawnReason;
  readonly END_PORTAL: PlayerRespawnEvent_RespawnReason;
  readonly PLUGIN: PlayerRespawnEvent_RespawnReason;
  valueOf(arg0: string): PlayerRespawnEvent_RespawnReason;
  values(): Array<PlayerRespawnEvent_RespawnReason>;
}

/** JVM class org.bukkit.event.player.PlayerRiptideEvent. */
export interface PlayerRiptideEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getVelocity(): j_org_bukkit_util.Vector;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerRiptideEvent = PlayerRiptideEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerRiptideEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack): PlayerRiptideEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_util.Vector): PlayerRiptideEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerShearEntityEvent. */
export interface PlayerShearEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getDrops(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getEntity(): j_org_bukkit_entity.Entity;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDrops(arg0: JavaList<j_org_bukkit_inventory.ItemStack>): void;
}
export type PlayerShearEntityEvent = PlayerShearEntityEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerShearEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerShearEntityEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.EquipmentSlot, arg4: JavaList<j_org_bukkit_inventory.ItemStack>): PlayerShearEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerShowEntityEvent. */
export interface PlayerShowEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent];
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerShowEntityEvent = PlayerShowEntityEventMembers & PlayerEvent;
export interface PlayerShowEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerShowEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerSignOpenEvent. */
export interface PlayerSignOpenEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getCause(): PlayerSignOpenEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSide(): j_org_bukkit_block_sign.Side;
  getSign(): j_org_bukkit_block.Sign;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerSignOpenEvent = PlayerSignOpenEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerSignOpenEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Sign, arg2: j_org_bukkit_block_sign.Side, arg3: PlayerSignOpenEvent_Cause): PlayerSignOpenEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerSignOpenEvent$Cause; constants are host handles, not strings. */
export type PlayerSignOpenEvent_Cause = JavaEnum<"org.bukkit.event.player.PlayerSignOpenEvent$Cause", "INTERACT" | "PLACE" | "PLUGIN" | "UNKNOWN"> & PlayerSignOpenEvent_CauseMembers;
export interface PlayerSignOpenEvent_CauseMembers {
}
export interface PlayerSignOpenEvent_CauseStatics {
  readonly INTERACT: PlayerSignOpenEvent_Cause;
  readonly PLACE: PlayerSignOpenEvent_Cause;
  readonly PLUGIN: PlayerSignOpenEvent_Cause;
  readonly UNKNOWN: PlayerSignOpenEvent_Cause;
  valueOf(arg0: string): PlayerSignOpenEvent_Cause;
  values(): Array<PlayerSignOpenEvent_Cause>;
}

/** JVM class org.bukkit.event.player.PlayerSpawnChangeEvent. */
export interface PlayerSpawnChangeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getCause(): PlayerSpawnChangeEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewSpawn(): j_org_bukkit.Location | null;
  isCancelled(): boolean;
  isForced(): boolean;
  setCancelled(arg0: boolean): void;
  setForced(arg0: boolean): void;
  setNewSpawn(arg0: j_org_bukkit.Location | null): void;
}
export type PlayerSpawnChangeEvent = PlayerSpawnChangeEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerSpawnChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location | null, arg2: boolean, arg3: PlayerSpawnChangeEvent_Cause): PlayerSpawnChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerSpawnChangeEvent$Cause; constants are host handles, not strings. */
export type PlayerSpawnChangeEvent_Cause = JavaEnum<"org.bukkit.event.player.PlayerSpawnChangeEvent$Cause", "BED" | "COMMAND" | "PLUGIN" | "RESET" | "RESPAWN_ANCHOR" | "UNKNOWN"> & PlayerSpawnChangeEvent_CauseMembers;
export interface PlayerSpawnChangeEvent_CauseMembers {
}
export interface PlayerSpawnChangeEvent_CauseStatics {
  readonly BED: PlayerSpawnChangeEvent_Cause;
  readonly COMMAND: PlayerSpawnChangeEvent_Cause;
  readonly PLUGIN: PlayerSpawnChangeEvent_Cause;
  readonly RESET: PlayerSpawnChangeEvent_Cause;
  readonly RESPAWN_ANCHOR: PlayerSpawnChangeEvent_Cause;
  readonly UNKNOWN: PlayerSpawnChangeEvent_Cause;
  valueOf(arg0: string): PlayerSpawnChangeEvent_Cause;
  values(): Array<PlayerSpawnChangeEvent_Cause>;
}

/** JVM class org.bukkit.event.player.PlayerStatisticIncrementEvent. */
export interface PlayerStatisticIncrementEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getEntityType(): j_org_bukkit_entity.EntityType | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMaterial(): j_org_bukkit.Material | null;
  getNewValue(): number;
  getPreviousValue(): number;
  getStatistic(): j_org_bukkit.Statistic;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerStatisticIncrementEvent = PlayerStatisticIncrementEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerStatisticIncrementEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Statistic, arg2: number, arg3: number): PlayerStatisticIncrementEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Statistic, arg2: number, arg3: number, arg4: j_org_bukkit.Material): PlayerStatisticIncrementEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Statistic, arg2: number, arg3: number, arg4: j_org_bukkit_entity.EntityType): PlayerStatisticIncrementEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerSwapHandItemsEvent. */
export interface PlayerSwapHandItemsEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMainHandItem(): j_org_bukkit_inventory.ItemStack;
  getOffHandItem(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setMainHandItem(arg0: j_org_bukkit_inventory.ItemStack | null): void;
  setOffHandItem(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type PlayerSwapHandItemsEvent = PlayerSwapHandItemsEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerSwapHandItemsEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack): PlayerSwapHandItemsEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerTakeLecternBookEvent. */
export interface PlayerTakeLecternBookEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getBook(): j_org_bukkit_inventory.ItemStack | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLectern(): j_org_bukkit_block.Lectern;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerTakeLecternBookEvent = PlayerTakeLecternBookEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerTakeLecternBookEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Lectern): PlayerTakeLecternBookEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerTeleportEvent. */
export interface PlayerTeleportEventMembers {
  readonly __javaSupertypes?: readonly [PlayerMoveEvent];
  getCause(): PlayerTeleportEvent_TeleportCause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRelativeTeleportationFlags(): JavaSet<j_io_papermc_paper_entity.TeleportFlag_Relative>;
  willDismountPlayer(): boolean;
}
export type PlayerTeleportEvent = PlayerTeleportEventMembers & PlayerMoveEvent;
export interface PlayerTeleportEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null): PlayerTeleportEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: PlayerTeleportEvent_TeleportCause): PlayerTeleportEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: PlayerTeleportEvent_TeleportCause, arg4: JavaSet<j_io_papermc_paper_entity.TeleportFlag_Relative>): PlayerTeleportEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.player.PlayerTeleportEvent$TeleportCause; constants are host handles, not strings. */
export type PlayerTeleportEvent_TeleportCause = JavaEnum<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause", "COMMAND" | "CONSUMABLE_EFFECT" | "DISMOUNT" | "ENDER_PEARL" | "END_GATEWAY" | "END_PORTAL" | "EXIT_BED" | "NETHER_PORTAL" | "PLUGIN" | "SPECTATE" | "UNKNOWN"> & PlayerTeleportEvent_TeleportCauseMembers;
export interface PlayerTeleportEvent_TeleportCauseMembers {
}
export interface PlayerTeleportEvent_TeleportCauseStatics {
  readonly COMMAND: PlayerTeleportEvent_TeleportCause;
  readonly CONSUMABLE_EFFECT: PlayerTeleportEvent_TeleportCause;
  readonly DISMOUNT: PlayerTeleportEvent_TeleportCause;
  readonly ENDER_PEARL: PlayerTeleportEvent_TeleportCause;
  readonly END_GATEWAY: PlayerTeleportEvent_TeleportCause;
  readonly END_PORTAL: PlayerTeleportEvent_TeleportCause;
  readonly EXIT_BED: PlayerTeleportEvent_TeleportCause;
  readonly NETHER_PORTAL: PlayerTeleportEvent_TeleportCause;
  readonly PLUGIN: PlayerTeleportEvent_TeleportCause;
  readonly SPECTATE: PlayerTeleportEvent_TeleportCause;
  readonly UNKNOWN: PlayerTeleportEvent_TeleportCause;
  readonly CHORUS_FRUIT: PlayerTeleportEvent_TeleportCause;
  valueOf(arg0: string): PlayerTeleportEvent_TeleportCause;
  values(): Array<PlayerTeleportEvent_TeleportCause>;
}

/** JVM class org.bukkit.event.player.PlayerToggleFlightEvent. */
export interface PlayerToggleFlightEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isFlying(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerToggleFlightEvent = PlayerToggleFlightEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerToggleFlightEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: boolean): PlayerToggleFlightEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerToggleSneakEvent. */
export interface PlayerToggleSneakEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isSneaking(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerToggleSneakEvent = PlayerToggleSneakEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerToggleSneakEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: boolean): PlayerToggleSneakEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerToggleSprintEvent. */
export interface PlayerToggleSprintEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isSprinting(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerToggleSprintEvent = PlayerToggleSprintEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerToggleSprintEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: boolean): PlayerToggleSprintEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.player.PlayerUnleashEntityEvent. */
export interface PlayerUnleashEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityUnleashEvent, j_org_bukkit_event.Cancellable];
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerUnleashEntityEvent = PlayerUnleashEntityEventMembers & j_org_bukkit_event_entity.EntityUnleashEvent & j_org_bukkit_event.Cancellable;
export interface PlayerUnleashEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Player): PlayerUnleashEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Player, arg2: j_org_bukkit_inventory.EquipmentSlot): PlayerUnleashEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Player, arg2: j_org_bukkit_inventory.EquipmentSlot, arg3: boolean): PlayerUnleashEntityEvent;
}

/** JVM class org.bukkit.event.player.PlayerUnregisterChannelEvent. */
export interface PlayerUnregisterChannelEventMembers {
  readonly __javaSupertypes?: readonly [PlayerChannelEvent];
}
export type PlayerUnregisterChannelEvent = PlayerUnregisterChannelEventMembers & PlayerChannelEvent;
export interface PlayerUnregisterChannelEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string): PlayerUnregisterChannelEvent;
}

/** JVM class org.bukkit.event.player.PlayerVelocityEvent. */
export interface PlayerVelocityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getVelocity(): j_org_bukkit_util.Vector;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setVelocity(arg0: j_org_bukkit_util.Vector): void;
}
export type PlayerVelocityEvent = PlayerVelocityEventMembers & PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerVelocityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_util.Vector): PlayerVelocityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
