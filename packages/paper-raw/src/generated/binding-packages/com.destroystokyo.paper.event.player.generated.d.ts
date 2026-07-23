// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper from './com.destroystokyo.paper.generated.js';
import type * as j_io_papermc_paper_event_player from './io.papermc.paper.event.player.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_advancement from './org.bukkit.advancement.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class com.destroystokyo.paper.event.player.IllegalPacketEvent. */
export interface IllegalPacketEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getExceptionMessage(): string | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKickMessage(): string | null;
  getType(): string | null;
  isShouldKick(): boolean;
  setKickMessage(arg0: string | null): void | null;
  setShouldKick(arg0: boolean): void;
}
export type IllegalPacketEvent = IllegalPacketEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface IllegalPacketEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: string | null, arg2: string | null, arg3: JavaOpaque<"java.lang.Exception">): IllegalPacketEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent. */
export interface PlayerAdvancementCriterionGrantEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getAdvancement(): j_org_bukkit_advancement.Advancement;
  getAdvancementProgress(): j_org_bukkit_advancement.AdvancementProgress;
  getCriterion(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerAdvancementCriterionGrantEvent = PlayerAdvancementCriterionGrantEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerAdvancementCriterionGrantEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_advancement.Advancement, arg2: string): PlayerAdvancementCriterionGrantEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerArmorChangeEvent. */
export interface PlayerArmorChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewItem(): j_org_bukkit_inventory.ItemStack;
  getOldItem(): j_org_bukkit_inventory.ItemStack;
  getSlot(): j_org_bukkit_inventory.EquipmentSlot;
  getSlotType(): PlayerArmorChangeEvent_SlotType;
}
export type PlayerArmorChangeEvent = PlayerArmorChangeEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerArmorChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: PlayerArmorChangeEvent_SlotType, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_inventory.ItemStack): PlayerArmorChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum com.destroystokyo.paper.event.player.PlayerArmorChangeEvent$SlotType; constants are host handles, not strings. */
export type PlayerArmorChangeEvent_SlotType = JavaEnum<"com.destroystokyo.paper.event.player.PlayerArmorChangeEvent$SlotType", "CHEST" | "FEET" | "HEAD" | "LEGS"> & PlayerArmorChangeEvent_SlotTypeMembers;
export interface PlayerArmorChangeEvent_SlotTypeMembers {
  getTypes(): JavaSet<j_org_bukkit.Material>;
}
export interface PlayerArmorChangeEvent_SlotTypeStatics {
  readonly CHEST: PlayerArmorChangeEvent_SlotType;
  readonly FEET: PlayerArmorChangeEvent_SlotType;
  readonly HEAD: PlayerArmorChangeEvent_SlotType;
  readonly LEGS: PlayerArmorChangeEvent_SlotType;
  getByMaterial(arg0: j_org_bukkit.Material): PlayerArmorChangeEvent_SlotType | null;
  isEquipable(arg0: j_org_bukkit.Material): boolean;
  valueOf(arg0: string): PlayerArmorChangeEvent_SlotType;
  values(): Array<PlayerArmorChangeEvent_SlotType>;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent. */
export interface PlayerAttackEntityCooldownResetEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getAttackedEntity(): j_org_bukkit_entity.Entity;
  getCooledAttackStrength(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerAttackEntityCooldownResetEvent = PlayerAttackEntityCooldownResetEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerAttackEntityCooldownResetEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: number): PlayerAttackEntityCooldownResetEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent. */
export interface PlayerClientOptionsChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  allowsServerListings(): boolean;
  getChatVisibility(): j_com_destroystokyo_paper.ClientOption_ChatVisibility;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocale(): string;
  getMainHand(): j_org_bukkit_inventory.MainHand;
  getParticleVisibility(): j_com_destroystokyo_paper.ClientOption_ParticleVisibility;
  getSkinParts(): j_com_destroystokyo_paper.SkinParts;
  getViewDistance(): number;
  hasAllowServerListingsChanged(): boolean;
  hasChatColorsEnabled(): boolean;
  hasChatColorsEnabledChanged(): boolean;
  hasChatVisibilityChanged(): boolean;
  hasLocaleChanged(): boolean;
  hasMainHandChanged(): boolean;
  hasParticleVisibilityChanged(): boolean;
  hasSkinPartsChanged(): boolean;
  hasTextFilteringChanged(): boolean;
  hasTextFilteringEnabled(): boolean;
  hasViewDistanceChanged(): boolean;
}
export type PlayerClientOptionsChangeEvent = PlayerClientOptionsChangeEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerClientOptionsChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: JavaMap<j_com_destroystokyo_paper.ClientOption<object>, object>): PlayerClientOptionsChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent. */
export interface PlayerConnectionCloseEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getIpAddress(): JavaOpaque<"java.net.InetAddress">;
  getPlayerName(): string;
  getPlayerUniqueId(): JavaOpaque<"java.util.UUID">;
}
export type PlayerConnectionCloseEvent = PlayerConnectionCloseEventMembers & j_org_bukkit_event.Event;
export interface PlayerConnectionCloseEventStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: JavaOpaque<"java.net.InetAddress">, arg3: boolean): PlayerConnectionCloseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerElytraBoostEvent. */
export interface PlayerElytraBoostEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getFirework(): j_org_bukkit_entity.Firework;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setShouldConsume(arg0: boolean): void;
  shouldConsume(): boolean;
}
export type PlayerElytraBoostEvent = PlayerElytraBoostEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerElytraBoostEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_entity.Firework, arg3: j_org_bukkit_inventory.EquipmentSlot): PlayerElytraBoostEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerHandshakeEvent. */
export interface PlayerHandshakeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  failMessage(): j_net_kyori_adventure_text.Component;
  failMessage(arg0: j_net_kyori_adventure_text.Component): void;
  getFailMessage(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOriginalHandshake(): string;
  getOriginalSocketAddressHostname(): string;
  getPropertiesJson(): string | null;
  getServerHostname(): string | null;
  getSocketAddressHostname(): string | null;
  getUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  isCancelled(): boolean;
  isFailed(): boolean;
  setCancelled(arg0: boolean): void;
  setFailMessage(arg0: string): void;
  setFailed(arg0: boolean): void;
  setPropertiesJson(arg0: string): void;
  setServerHostname(arg0: string): void;
  setSocketAddressHostname(arg0: string): void;
  setUniqueId(arg0: JavaOpaque<"java.util.UUID">): void;
}
export type PlayerHandshakeEvent = PlayerHandshakeEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface PlayerHandshakeEventStatics {
  new(arg0: string, arg1: string, arg2: boolean): PlayerHandshakeEvent;
  new(arg0: string, arg1: boolean): PlayerHandshakeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerJumpEvent. */
export interface PlayerJumpEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getFrom(): j_org_bukkit.Location;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTo(): j_org_bukkit.Location;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFrom(arg0: j_org_bukkit.Location): void;
}
export type PlayerJumpEvent = PlayerJumpEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerJumpEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location): PlayerJumpEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent. */
export interface PlayerLaunchProjectileEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  getProjectile(): j_org_bukkit_entity.Projectile;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setShouldConsume(arg0: boolean): void;
  shouldConsume(): boolean;
}
export type PlayerLaunchProjectileEvent = PlayerLaunchProjectileEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerLaunchProjectileEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_entity.Projectile): PlayerLaunchProjectileEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent. */
export interface PlayerPickupExperienceEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getExperienceOrb(): j_org_bukkit_entity.ExperienceOrb;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerPickupExperienceEvent = PlayerPickupExperienceEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerPickupExperienceEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.ExperienceOrb): PlayerPickupExperienceEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerPostRespawnEvent. */
export interface PlayerPostRespawnEventMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_event_player.AbstractRespawnEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRespawnedLocation(): j_org_bukkit.Location;
}
export type PlayerPostRespawnEvent = PlayerPostRespawnEventMembers & j_io_papermc_paper_event_player.AbstractRespawnEvent;
export interface PlayerPostRespawnEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: boolean, arg3: boolean, arg4: boolean, arg5: j_org_bukkit_event_player.PlayerRespawnEvent_RespawnReason): PlayerPostRespawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerReadyArrowEvent. */
export interface PlayerReadyArrowEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getArrow(): j_org_bukkit_inventory.ItemStack;
  getBow(): j_org_bukkit_inventory.ItemStack;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerReadyArrowEvent = PlayerReadyArrowEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerReadyArrowEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.ItemStack): PlayerReadyArrowEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent. */
export interface PlayerRecipeBookClickEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipe(): j_org_bukkit.NamespacedKey;
  isCancelled(): boolean;
  isMakeAll(): boolean;
  setCancelled(arg0: boolean): void;
  setMakeAll(arg0: boolean): void;
  setRecipe(arg0: j_org_bukkit.NamespacedKey): void;
}
export type PlayerRecipeBookClickEvent = PlayerRecipeBookClickEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerRecipeBookClickEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.NamespacedKey, arg2: boolean): PlayerRecipeBookClickEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerSetSpawnEvent. */
export interface PlayerSetSpawnEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getCause(): PlayerSetSpawnEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location | null;
  getNotification(): j_net_kyori_adventure_text.Component | null;
  isCancelled(): boolean;
  isForced(): boolean;
  setCancelled(arg0: boolean): void;
  setForced(arg0: boolean): void;
  setLocation(arg0: j_org_bukkit.Location): void | null;
  setNotification(arg0: j_net_kyori_adventure_text.Component): void | null;
  setNotifyPlayer(arg0: boolean): void;
  willNotifyPlayer(): boolean;
}
export type PlayerSetSpawnEvent = PlayerSetSpawnEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerSetSpawnEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: PlayerSetSpawnEvent_Cause, arg2: j_org_bukkit.Location, arg3: boolean, arg4: boolean, arg5: j_net_kyori_adventure_text.Component): PlayerSetSpawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum com.destroystokyo.paper.event.player.PlayerSetSpawnEvent$Cause; constants are host handles, not strings. */
export type PlayerSetSpawnEvent_Cause = JavaEnum<"com.destroystokyo.paper.event.player.PlayerSetSpawnEvent$Cause", "BED" | "COMMAND" | "PLAYER_RESPAWN" | "PLUGIN" | "RESPAWN_ANCHOR" | "UNKNOWN"> & PlayerSetSpawnEvent_CauseMembers;
export interface PlayerSetSpawnEvent_CauseMembers {
}
export interface PlayerSetSpawnEvent_CauseStatics {
  readonly BED: PlayerSetSpawnEvent_Cause;
  readonly COMMAND: PlayerSetSpawnEvent_Cause;
  readonly PLAYER_RESPAWN: PlayerSetSpawnEvent_Cause;
  readonly PLUGIN: PlayerSetSpawnEvent_Cause;
  readonly RESPAWN_ANCHOR: PlayerSetSpawnEvent_Cause;
  readonly UNKNOWN: PlayerSetSpawnEvent_Cause;
  valueOf(arg0: string): PlayerSetSpawnEvent_Cause;
  values(): Array<PlayerSetSpawnEvent_Cause>;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent. */
export interface PlayerStartSpectatingEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getCurrentSpectatorTarget(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewSpectatorTarget(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerStartSpectatingEntityEvent = PlayerStartSpectatingEntityEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerStartSpectatingEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_entity.Entity): PlayerStartSpectatingEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent. */
export interface PlayerStopSpectatingEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSpectatorTarget(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerStopSpectatingEntityEvent = PlayerStopSpectatingEntityEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerStopSpectatingEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_entity.Entity): PlayerStopSpectatingEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent. */
export interface PlayerTeleportEndGatewayEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerTeleportEvent];
  getGateway(): j_org_bukkit_block.EndGateway;
}
export type PlayerTeleportEndGatewayEvent = PlayerTeleportEndGatewayEventMembers & j_org_bukkit_event_player.PlayerTeleportEvent;
export interface PlayerTeleportEndGatewayEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location, arg3: j_org_bukkit_block.EndGateway): PlayerTeleportEndGatewayEvent;
}

/** JVM class com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent. */
export interface PlayerUseUnknownEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent];
  getClickedRelativePosition(): j_org_bukkit_util.Vector | null;
  getEntityId(): number;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isAttack(): boolean;
}
export type PlayerUseUnknownEntityEvent = PlayerUseUnknownEntityEventMembers & j_org_bukkit_event_player.PlayerEvent;
export interface PlayerUseUnknownEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number, arg2: boolean, arg3: j_org_bukkit_inventory.EquipmentSlot, arg4: j_org_bukkit_util.Vector): PlayerUseUnknownEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
