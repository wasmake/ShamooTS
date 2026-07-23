// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_chat from './io.papermc.paper.chat.generated.js';
import type * as j_io_papermc_paper_connection from './io.papermc.paper.connection.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_chat from './net.kyori.adventure.chat.generated.js';
import type * as j_net_kyori_adventure_nbt_api from './net.kyori.adventure.nbt.api.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_block_sign from './org.bukkit.block.sign.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_inventory from './org.bukkit.event.inventory.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_event_server from './org.bukkit.event.server.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';

/** JVM abstract io.papermc.paper.event.player.AbstractChatEvent. */
export interface AbstractChatEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  isCancelled(): boolean;
  message(): j_net_kyori_adventure_text.Component;
  message(arg0: j_net_kyori_adventure_text.Component): void;
  originalMessage(): j_net_kyori_adventure_text.Component;
  renderer(): j_io_papermc_paper_chat.ChatRenderer;
  renderer(arg0: j_io_papermc_paper_chat.ChatRenderer): void;
  setCancelled(arg0: boolean): void;
  signedMessage(): j_net_kyori_adventure_chat.SignedMessage;
  viewers(): JavaSet<j_net_kyori_adventure_audience.Audience>;
}
export type AbstractChatEvent = AbstractChatEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface AbstractChatEventStatics {
}

/** JVM abstract io.papermc.paper.event.player.AbstractRespawnEvent. */
export interface AbstractRespawnEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getRespawnFlags(): JavaSet<j_org_bukkit_event_player.PlayerRespawnEvent_RespawnFlag>;
  getRespawnLocation(): j_org_bukkit.Location;
  getRespawnReason(): j_org_bukkit_event_player.PlayerRespawnEvent_RespawnReason;
  isAnchorSpawn(): boolean;
  isBedSpawn(): boolean;
  isMissingRespawnBlock(): boolean;
  respawnLocation: j_org_bukkit.Location;
}
export type AbstractRespawnEvent = AbstractRespawnEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface AbstractRespawnEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: boolean, arg3: boolean, arg4: boolean, arg5: j_org_bukkit_event_player.PlayerRespawnEvent_RespawnReason): AbstractRespawnEvent;
}

/** JVM class io.papermc.paper.event.player.AsyncChatCommandDecorateEvent. */
export interface AsyncChatCommandDecorateEventMembers {
  readonly __javaSupertypes?: readonly [AsyncChatDecorateEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type AsyncChatCommandDecorateEvent = AsyncChatCommandDecorateEventMembers & AsyncChatDecorateEvent;
export interface AsyncChatCommandDecorateEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component): AsyncChatCommandDecorateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.AsyncChatDecorateEvent. */
export interface AsyncChatDecorateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_server.ServerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  originalMessage(): j_net_kyori_adventure_text.Component;
  player(): j_org_bukkit_entity.Player | null;
  result(): j_net_kyori_adventure_text.Component;
  result(arg0: j_net_kyori_adventure_text.Component): void;
  setCancelled(arg0: boolean): void;
}
export type AsyncChatDecorateEvent = AsyncChatDecorateEventMembers & j_org_bukkit_event_server.ServerEvent & j_org_bukkit_event.Cancellable;
export interface AsyncChatDecorateEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component): AsyncChatDecorateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.AsyncChatEvent. */
export interface AsyncChatEventMembers {
  readonly __javaSupertypes?: readonly [AbstractChatEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type AsyncChatEvent = AsyncChatEventMembers & AbstractChatEvent;
export interface AsyncChatEventStatics {
  new(arg0: boolean, arg1: j_org_bukkit_entity.Player, arg2: JavaSet<j_net_kyori_adventure_audience.Audience>, arg3: j_io_papermc_paper_chat.ChatRenderer, arg4: j_net_kyori_adventure_text.Component, arg5: j_net_kyori_adventure_text.Component, arg6: j_net_kyori_adventure_chat.SignedMessage): AsyncChatEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.CartographyItemEvent. */
export interface CartographyItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_inventory.InventoryClickEvent];
  getInventory(): j_org_bukkit_inventory.CartographyInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
}
export type CartographyItemEvent = CartographyItemEventMembers & j_org_bukkit_event_inventory.InventoryClickEvent;
export interface CartographyItemEventStatics {
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_event_inventory.InventoryType_SlotType, arg2: number, arg3: j_org_bukkit_event_inventory.ClickType, arg4: j_org_bukkit_event_inventory.InventoryAction): CartographyItemEvent;
  new(arg0: j_org_bukkit_inventory.InventoryView, arg1: j_org_bukkit_event_inventory.InventoryType_SlotType, arg2: number, arg3: j_org_bukkit_event_inventory.ClickType, arg4: j_org_bukkit_event_inventory.InventoryAction, arg5: number): CartographyItemEvent;
}

/** JVM class io.papermc.paper.event.player.ChatEvent. */
export interface ChatEventMembers {
  readonly __javaSupertypes?: readonly [AbstractChatEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type ChatEvent = ChatEventMembers & AbstractChatEvent;
export interface ChatEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: JavaSet<j_net_kyori_adventure_audience.Audience>, arg2: j_io_papermc_paper_chat.ChatRenderer, arg3: j_net_kyori_adventure_text.Component, arg4: j_net_kyori_adventure_text.Component, arg5: j_net_kyori_adventure_chat.SignedMessage): ChatEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerArmSwingEvent. */
export interface PlayerArmSwingEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerAnimationEvent];
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
}
export type PlayerArmSwingEvent = PlayerArmSwingEventMembers & j_org_bukkit_event_player.PlayerAnimationEvent;
export interface PlayerArmSwingEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.EquipmentSlot): PlayerArmSwingEvent;
}

/** JVM class io.papermc.paper.event.player.PlayerBedFailEnterEvent. */
export interface PlayerBedFailEnterEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getBed(): j_org_bukkit_block.Block;
  getFailReason(): PlayerBedFailEnterEvent_FailReason;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMessage(): j_net_kyori_adventure_text.Component | null;
  getWillExplode(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setMessage(arg0: j_net_kyori_adventure_text.Component): void | null;
  setWillExplode(arg0: boolean): void;
}
export type PlayerBedFailEnterEvent = PlayerBedFailEnterEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerBedFailEnterEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: PlayerBedFailEnterEvent_FailReason, arg2: j_org_bukkit_block.Block, arg3: boolean, arg4: j_net_kyori_adventure_text.Component): PlayerBedFailEnterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.player.PlayerBedFailEnterEvent$FailReason; constants are host handles, not strings. */
export type PlayerBedFailEnterEvent_FailReason = JavaEnum<"io.papermc.paper.event.player.PlayerBedFailEnterEvent$FailReason", "NOT_POSSIBLE_HERE" | "NOT_POSSIBLE_NOW" | "NOT_SAFE" | "OBSTRUCTED" | "OTHER_PROBLEM" | "TOO_FAR_AWAY"> & PlayerBedFailEnterEvent_FailReasonMembers;
export interface PlayerBedFailEnterEvent_FailReasonMembers {
}
export interface PlayerBedFailEnterEvent_FailReasonStatics {
  readonly NOT_POSSIBLE_HERE: PlayerBedFailEnterEvent_FailReason;
  readonly NOT_POSSIBLE_NOW: PlayerBedFailEnterEvent_FailReason;
  readonly NOT_SAFE: PlayerBedFailEnterEvent_FailReason;
  readonly OBSTRUCTED: PlayerBedFailEnterEvent_FailReason;
  readonly OTHER_PROBLEM: PlayerBedFailEnterEvent_FailReason;
  readonly TOO_FAR_AWAY: PlayerBedFailEnterEvent_FailReason;
  valueOf(arg0: string): PlayerBedFailEnterEvent_FailReason;
  values(): Array<PlayerBedFailEnterEvent_FailReason>;
}

/** JVM class io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent. */
export interface PlayerChangeBeaconEffectEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getBeacon(): j_org_bukkit_block.Block;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPrimary(): j_org_bukkit_potion.PotionEffectType | null;
  getSecondary(): j_org_bukkit_potion.PotionEffectType | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setConsumeItem(arg0: boolean): void;
  setPrimary(arg0: j_org_bukkit_potion.PotionEffectType): void | null;
  setSecondary(arg0: j_org_bukkit_potion.PotionEffectType): void | null;
  willConsumeItem(): boolean;
}
export type PlayerChangeBeaconEffectEvent = PlayerChangeBeaconEffectEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerChangeBeaconEffectEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_potion.PotionEffectType, arg2: j_org_bukkit_potion.PotionEffectType, arg3: j_org_bukkit_block.Block): PlayerChangeBeaconEffectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerClientLoadedWorldEvent. */
export interface PlayerClientLoadedWorldEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isTimeout(): boolean;
}
export type PlayerClientLoadedWorldEvent = PlayerClientLoadedWorldEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerClientLoadedWorldEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: boolean): PlayerClientLoadedWorldEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract io.papermc.paper.event.player.PlayerCustomClickEvent. */
export interface PlayerCustomClickEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getCommonConnection(): j_io_papermc_paper_connection.PlayerCommonConnection;
  getDialogResponseView(): j_io_papermc_paper_dialog.DialogResponseView | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getIdentifier(): JavaOpaque<"net.kyori.adventure.key.Key">;
  getTag(): j_net_kyori_adventure_nbt_api.BinaryTagHolder | null;
}
export type PlayerCustomClickEvent = PlayerCustomClickEventMembers & j_org_bukkit_event.Event;
export interface PlayerCustomClickEventStatics {
  new(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: j_io_papermc_paper_connection.PlayerCommonConnection): PlayerCustomClickEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerDeepSleepEvent. */
export interface PlayerDeepSleepEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerDeepSleepEvent = PlayerDeepSleepEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerDeepSleepEventStatics {
  new(arg0: j_org_bukkit_entity.Player): PlayerDeepSleepEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerFailMoveEvent. */
export interface PlayerFailMoveEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getFailReason(): PlayerFailMoveEvent_FailReason;
  getFrom(): j_org_bukkit.Location;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLogWarning(): boolean;
  getTo(): j_org_bukkit.Location;
  isAllowed(): boolean;
  setAllowed(arg0: boolean): void;
  setLogWarning(arg0: boolean): void;
}
export type PlayerFailMoveEvent = PlayerFailMoveEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerFailMoveEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: PlayerFailMoveEvent_FailReason, arg2: boolean, arg3: boolean, arg4: j_org_bukkit.Location, arg5: j_org_bukkit.Location): PlayerFailMoveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.player.PlayerFailMoveEvent$FailReason; constants are host handles, not strings. */
export type PlayerFailMoveEvent_FailReason = JavaEnum<"io.papermc.paper.event.player.PlayerFailMoveEvent$FailReason", "CLIPPED_INTO_BLOCK" | "MOVED_INTO_UNLOADED_CHUNK" | "MOVED_TOO_QUICKLY" | "MOVED_WRONGLY"> & PlayerFailMoveEvent_FailReasonMembers;
export interface PlayerFailMoveEvent_FailReasonMembers {
}
export interface PlayerFailMoveEvent_FailReasonStatics {
  readonly CLIPPED_INTO_BLOCK: PlayerFailMoveEvent_FailReason;
  readonly MOVED_INTO_UNLOADED_CHUNK: PlayerFailMoveEvent_FailReason;
  readonly MOVED_TOO_QUICKLY: PlayerFailMoveEvent_FailReason;
  readonly MOVED_WRONGLY: PlayerFailMoveEvent_FailReason;
  valueOf(arg0: string): PlayerFailMoveEvent_FailReason;
  values(): Array<PlayerFailMoveEvent_FailReason>;
}

/** JVM class io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent. */
export interface PlayerFlowerPotManipulateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getFlowerpot(): j_org_bukkit_block.Block;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  isPlacing(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerFlowerPotManipulateEvent = PlayerFlowerPotManipulateEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerFlowerPotManipulateEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack, arg3: boolean): PlayerFlowerPotManipulateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerInsertLecternBookEvent. */
export interface PlayerInsertLecternBookEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getBook(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLectern(): j_org_bukkit_block.Lectern;
  isCancelled(): boolean;
  setBook(arg0: j_org_bukkit_inventory.ItemStack): void;
  setCancelled(arg0: boolean): void;
}
export type PlayerInsertLecternBookEvent = PlayerInsertLecternBookEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerInsertLecternBookEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack): PlayerInsertLecternBookEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerInventorySlotChangeEvent. */
export interface PlayerInventorySlotChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewItemStack(): j_org_bukkit_inventory.ItemStack;
  getOldItemStack(): j_org_bukkit_inventory.ItemStack;
  getRawSlot(): number;
  getSlot(): number;
  setShouldTriggerAdvancements(arg0: boolean): void;
  shouldTriggerAdvancements(): boolean;
}
export type PlayerInventorySlotChangeEvent = PlayerInventorySlotChangeEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerInventorySlotChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.ItemStack): PlayerInventorySlotChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerItemCooldownEvent. */
export interface PlayerItemCooldownEventMembers {
  readonly __javaSupertypes?: readonly [PlayerItemGroupCooldownEvent];
  getType(): j_org_bukkit.Material;
}
export type PlayerItemCooldownEvent = PlayerItemCooldownEventMembers & PlayerItemGroupCooldownEvent;
export interface PlayerItemCooldownEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Material, arg2: j_org_bukkit.NamespacedKey, arg3: number): PlayerItemCooldownEvent;
}

/** JVM class io.papermc.paper.event.player.PlayerItemFrameChangeEvent. */
export interface PlayerItemFrameChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getAction(): PlayerItemFrameChangeEvent_ItemFrameChangeAction;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemFrame(): j_org_bukkit_entity.ItemFrame;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setItemStack(arg0: j_org_bukkit_inventory.ItemStack): void | null;
}
export type PlayerItemFrameChangeEvent = PlayerItemFrameChangeEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerItemFrameChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.ItemFrame, arg2: j_org_bukkit_inventory.ItemStack, arg3: PlayerItemFrameChangeEvent_ItemFrameChangeAction): PlayerItemFrameChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.player.PlayerItemFrameChangeEvent$ItemFrameChangeAction; constants are host handles, not strings. */
export type PlayerItemFrameChangeEvent_ItemFrameChangeAction = JavaEnum<"io.papermc.paper.event.player.PlayerItemFrameChangeEvent$ItemFrameChangeAction", "PLACE" | "REMOVE" | "ROTATE"> & PlayerItemFrameChangeEvent_ItemFrameChangeActionMembers;
export interface PlayerItemFrameChangeEvent_ItemFrameChangeActionMembers {
}
export interface PlayerItemFrameChangeEvent_ItemFrameChangeActionStatics {
  readonly PLACE: PlayerItemFrameChangeEvent_ItemFrameChangeAction;
  readonly REMOVE: PlayerItemFrameChangeEvent_ItemFrameChangeAction;
  readonly ROTATE: PlayerItemFrameChangeEvent_ItemFrameChangeAction;
  valueOf(arg0: string): PlayerItemFrameChangeEvent_ItemFrameChangeAction;
  values(): Array<PlayerItemFrameChangeEvent_ItemFrameChangeAction>;
}

/** JVM class io.papermc.paper.event.player.PlayerItemGroupCooldownEvent. */
export interface PlayerItemGroupCooldownEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getCooldown(): number;
  getCooldownGroup(): j_org_bukkit.NamespacedKey;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setCooldown(arg0: number): void;
}
export type PlayerItemGroupCooldownEvent = PlayerItemGroupCooldownEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerItemGroupCooldownEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.NamespacedKey, arg2: number): PlayerItemGroupCooldownEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerLecternPageChangeEvent. */
export interface PlayerLecternPageChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getBook(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLectern(): j_org_bukkit_block.Lectern;
  getNewPage(): number;
  getOldPage(): number;
  getPageChangeDirection(): PlayerLecternPageChangeEvent_PageChangeDirection;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewPage(arg0: number): void;
}
export type PlayerLecternPageChangeEvent = PlayerLecternPageChangeEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerLecternPageChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Lectern, arg2: j_org_bukkit_inventory.ItemStack, arg3: PlayerLecternPageChangeEvent_PageChangeDirection, arg4: number, arg5: number): PlayerLecternPageChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.player.PlayerLecternPageChangeEvent$PageChangeDirection; constants are host handles, not strings. */
export type PlayerLecternPageChangeEvent_PageChangeDirection = JavaEnum<"io.papermc.paper.event.player.PlayerLecternPageChangeEvent$PageChangeDirection", "LEFT" | "RIGHT"> & PlayerLecternPageChangeEvent_PageChangeDirectionMembers;
export interface PlayerLecternPageChangeEvent_PageChangeDirectionMembers {
}
export interface PlayerLecternPageChangeEvent_PageChangeDirectionStatics {
  readonly LEFT: PlayerLecternPageChangeEvent_PageChangeDirection;
  readonly RIGHT: PlayerLecternPageChangeEvent_PageChangeDirection;
  valueOf(arg0: string): PlayerLecternPageChangeEvent_PageChangeDirection;
  values(): Array<PlayerLecternPageChangeEvent_PageChangeDirection>;
}

/** JVM class io.papermc.paper.event.player.PlayerLoomPatternSelectEvent. */
export interface PlayerLoomPatternSelectEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLoomInventory(): j_org_bukkit_inventory.LoomInventory;
  getPatternType(): j_org_bukkit_block_banner.PatternType;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setPatternType(arg0: j_org_bukkit_block_banner.PatternType): void;
}
export type PlayerLoomPatternSelectEvent = PlayerLoomPatternSelectEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerLoomPatternSelectEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.LoomInventory, arg2: j_org_bukkit_block_banner.PatternType): PlayerLoomPatternSelectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerMapFilledEvent. */
export interface PlayerMapFilledEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getCreatedMap(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOriginalItem(): j_org_bukkit_inventory.ItemStack;
  setCreatedMap(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type PlayerMapFilledEvent = PlayerMapFilledEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerMapFilledEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack): PlayerMapFilledEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerNameEntityEvent. */
export interface PlayerNameEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getName(): j_net_kyori_adventure_text.Component | null;
  isCancelled(): boolean;
  isPersistent(): boolean;
  setCancelled(arg0: boolean): void;
  setEntity(arg0: j_org_bukkit_entity.LivingEntity): void;
  setName(arg0: j_net_kyori_adventure_text.Component): void | null;
  setPersistent(arg0: boolean): void;
}
export type PlayerNameEntityEvent = PlayerNameEntityEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerNameEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.LivingEntity, arg2: j_net_kyori_adventure_text.Component, arg3: boolean): PlayerNameEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerOpenSignEvent. */
export interface PlayerOpenSignEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getCause(): PlayerOpenSignEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSide(): j_org_bukkit_block_sign.Side;
  getSign(): j_org_bukkit_block.Sign;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerOpenSignEvent = PlayerOpenSignEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerOpenSignEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Sign, arg2: j_org_bukkit_block_sign.Side, arg3: PlayerOpenSignEvent_Cause): PlayerOpenSignEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.player.PlayerOpenSignEvent$Cause; constants are host handles, not strings. */
export type PlayerOpenSignEvent_Cause = JavaEnum<"io.papermc.paper.event.player.PlayerOpenSignEvent$Cause", "INTERACT" | "PLACE" | "PLUGIN" | "UNKNOWN"> & PlayerOpenSignEvent_CauseMembers;
export interface PlayerOpenSignEvent_CauseMembers {
}
export interface PlayerOpenSignEvent_CauseStatics {
  readonly INTERACT: PlayerOpenSignEvent_Cause;
  readonly PLACE: PlayerOpenSignEvent_Cause;
  readonly PLUGIN: PlayerOpenSignEvent_Cause;
  readonly UNKNOWN: PlayerOpenSignEvent_Cause;
  valueOf(arg0: string): PlayerOpenSignEvent_Cause;
  values(): Array<PlayerOpenSignEvent_Cause>;
}

/** JVM class io.papermc.paper.event.player.PlayerPickBlockEvent. */
export interface PlayerPickBlockEventMembers {
  readonly __javaSupertypes?: readonly [PlayerPickItemEvent];
  getBlock(): j_org_bukkit_block.Block;
}
export type PlayerPickBlockEvent = PlayerPickBlockEventMembers & PlayerPickItemEvent;
export interface PlayerPickBlockEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_block.Block, arg2: boolean, arg3: number, arg4: number): PlayerPickBlockEvent;
}

/** JVM class io.papermc.paper.event.player.PlayerPickEntityEvent. */
export interface PlayerPickEntityEventMembers {
  readonly __javaSupertypes?: readonly [PlayerPickItemEvent];
  getEntity(): j_org_bukkit_entity.Entity;
}
export type PlayerPickEntityEvent = PlayerPickEntityEventMembers & PlayerPickItemEvent;
export interface PlayerPickEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: boolean, arg3: number, arg4: number): PlayerPickEntityEvent;
}

/** JVM abstract io.papermc.paper.event.player.PlayerPickItemEvent. */
export interface PlayerPickItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSourceSlot(): number;
  getTargetSlot(): number;
  isCancelled(): boolean;
  isIncludeData(): boolean;
  setCancelled(arg0: boolean): void;
  setSourceSlot(arg0: number): void;
  setTargetSlot(arg0: number): void;
}
export type PlayerPickItemEvent = PlayerPickItemEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerPickItemEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: boolean, arg2: number, arg3: number): PlayerPickItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerPurchaseEvent. */
export interface PlayerPurchaseEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTrade(): j_org_bukkit_inventory.MerchantRecipe;
  isCancelled(): boolean;
  isRewardingExp(): boolean;
  setCancelled(arg0: boolean): void;
  setIncreaseTradeUses(arg0: boolean): void;
  setRewardExp(arg0: boolean): void;
  setTrade(arg0: j_org_bukkit_inventory.MerchantRecipe): void;
  willIncreaseTradeUses(): boolean;
}
export type PlayerPurchaseEvent = PlayerPurchaseEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerPurchaseEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.MerchantRecipe, arg2: boolean, arg3: boolean): PlayerPurchaseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerServerFullCheckEvent. */
export interface PlayerServerFullCheckEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  allow(arg0: boolean): void;
  deny(arg0: j_net_kyori_adventure_text.Component): void;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  isAllowed(): boolean;
  kickMessage(): j_net_kyori_adventure_text.Component;
}
export type PlayerServerFullCheckEvent = PlayerServerFullCheckEventMembers & j_org_bukkit_event.Event;
export interface PlayerServerFullCheckEventStatics {
  new(arg0: j_com_destroystokyo_paper_profile.PlayerProfile, arg1: j_net_kyori_adventure_text.Component, arg2: boolean): PlayerServerFullCheckEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerShieldDisableEvent. */
export interface PlayerShieldDisableEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getCooldown(): number;
  getDamager(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setCooldown(arg0: number): void;
}
export type PlayerShieldDisableEvent = PlayerShieldDisableEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerShieldDisableEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: number): PlayerShieldDisableEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent. */
export interface PlayerSignCommandPreprocessEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerCommandPreprocessEvent];
  getSide(): j_org_bukkit_block_sign.Side;
  getSign(): j_org_bukkit_block.Sign;
}
export type PlayerSignCommandPreprocessEvent = PlayerSignCommandPreprocessEventMembers & j_org_bukkit_event_player.PlayerCommandPreprocessEvent;
export interface PlayerSignCommandPreprocessEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: JavaSet<j_org_bukkit_entity.Player>, arg3: j_org_bukkit_block.Sign, arg4: j_org_bukkit_block_sign.Side): PlayerSignCommandPreprocessEvent;
}

/** JVM class io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent. */
export interface PlayerStonecutterRecipeSelectEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getStonecutterInventory(): j_org_bukkit_inventory.StonecutterInventory;
  getStonecuttingRecipe(): j_org_bukkit_inventory.StonecuttingRecipe;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setStonecuttingRecipe(arg0: j_org_bukkit_inventory.StonecuttingRecipe): void;
}
export type PlayerStonecutterRecipeSelectEvent = PlayerStonecutterRecipeSelectEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerStonecutterRecipeSelectEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.StonecutterInventory, arg2: j_org_bukkit_inventory.StonecuttingRecipe): PlayerStonecutterRecipeSelectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerStopUsingItemEvent. */
export interface PlayerStopUsingItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getTicksHeldFor(): number;
}
export type PlayerStopUsingItemEvent = PlayerStopUsingItemEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerStopUsingItemEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): PlayerStopUsingItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerTrackEntityEvent. */
export interface PlayerTrackEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerTrackEntityEvent = PlayerTrackEntityEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerTrackEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerTrackEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PlayerTradeEvent. */
export interface PlayerTradeEventMembers {
  readonly __javaSupertypes?: readonly [PlayerPurchaseEvent];
  getVillager(): j_org_bukkit_entity.AbstractVillager;
}
export type PlayerTradeEvent = PlayerTradeEventMembers & PlayerPurchaseEvent;
export interface PlayerTradeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.AbstractVillager, arg2: j_org_bukkit_inventory.MerchantRecipe, arg3: boolean, arg4: boolean): PlayerTradeEvent;
}

/** JVM class io.papermc.paper.event.player.PlayerUntrackEntityEvent. */
export interface PlayerUntrackEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type PlayerUntrackEntityEvent = PlayerUntrackEntityEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerUntrackEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerUntrackEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.player.PrePlayerAttackEntityEvent. */
export interface PrePlayerAttackEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getAttacked(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  willAttack(): boolean;
}
export type PrePlayerAttackEntityEvent = PrePlayerAttackEntityEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PrePlayerAttackEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: boolean): PrePlayerAttackEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
