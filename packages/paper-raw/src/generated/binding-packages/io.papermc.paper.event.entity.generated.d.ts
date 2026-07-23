// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_event_block from './io.papermc.paper.event.block.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_entity from './org.bukkit.event.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class io.papermc.paper.event.entity.ElderGuardianAppearanceEvent. */
export interface ElderGuardianAppearanceEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getAffectedPlayer(): j_org_bukkit_entity.Player;
  getEntity(): j_org_bukkit_entity.ElderGuardian;
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ElderGuardianAppearanceEvent = ElderGuardianAppearanceEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface ElderGuardianAppearanceEventStatics {
  new(arg0: j_org_bukkit_entity.ElderGuardian, arg1: j_org_bukkit_entity.Player): ElderGuardianAppearanceEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent. */
export interface EntityAttemptSmashAttackEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOriginalResult(): boolean;
  getResult(): j_org_bukkit_event.Event_Result;
  getTarget(): j_org_bukkit_entity.LivingEntity;
  getWeapon(): j_org_bukkit_inventory.ItemStack;
  setResult(arg0: j_org_bukkit_event.Event_Result): void;
}
export type EntityAttemptSmashAttackEvent = EntityAttemptSmashAttackEventMembers & j_org_bukkit_event_entity.EntityEvent;
export interface EntityAttemptSmashAttackEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.LivingEntity, arg2: j_org_bukkit_inventory.ItemStack, arg3: boolean): EntityAttemptSmashAttackEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent. */
export interface EntityAttemptSpinAttackEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTarget(): j_org_bukkit_entity.LivingEntity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityAttemptSpinAttackEvent = EntityAttemptSpinAttackEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityAttemptSpinAttackEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.LivingEntity): EntityAttemptSpinAttackEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityCompostItemEvent. */
export interface EntityCompostItemEventMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_event_block.CompostItemEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityCompostItemEvent = EntityCompostItemEventMembers & j_io_papermc_paper_event_block.CompostItemEvent & j_org_bukkit_event.Cancellable;
export interface EntityCompostItemEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_inventory.ItemStack, arg3: boolean): EntityCompostItemEvent;
}

/** JVM class io.papermc.paper.event.entity.EntityDamageItemEvent. */
export interface EntityDamageItemEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getDamage(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDamage(arg0: number): void;
}
export type EntityDamageItemEvent = EntityDamageItemEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityDamageItemEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_inventory.ItemStack, arg2: number): EntityDamageItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityDyeEvent. */
export interface EntityDyeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getColor(): j_org_bukkit.DyeColor;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setColor(arg0: j_org_bukkit.DyeColor): void;
}
export type EntityDyeEvent = EntityDyeEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityDyeEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.DyeColor, arg2: j_org_bukkit_entity.Player): EntityDyeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityEffectTickEvent. */
export interface EntityEffectTickEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getAmplifier(): number;
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getType(): j_org_bukkit_potion.PotionEffectType;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityEffectTickEvent = EntityEffectTickEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityEffectTickEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_potion.PotionEffectType, arg2: number): EntityEffectTickEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityEquipmentChangedEvent. */
export interface EntityEquipmentChangedEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getEquipmentChanges(): JavaMap<j_org_bukkit_inventory.EquipmentSlot, EntityEquipmentChangedEvent_EquipmentChange>;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type EntityEquipmentChangedEvent = EntityEquipmentChangedEventMembers & j_org_bukkit_event_entity.EntityEvent;
export interface EntityEquipmentChangedEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: JavaMap<j_org_bukkit_inventory.EquipmentSlot, EntityEquipmentChangedEvent_EquipmentChange>): EntityEquipmentChangedEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM interface io.papermc.paper.event.entity.EntityEquipmentChangedEvent$EquipmentChange. */
export interface EntityEquipmentChangedEvent_EquipmentChangeMembers {
  newItem(): j_org_bukkit_inventory.ItemStack;
  oldItem(): j_org_bukkit_inventory.ItemStack;
}
export type EntityEquipmentChangedEvent_EquipmentChange = EntityEquipmentChangedEvent_EquipmentChangeMembers;
export interface EntityEquipmentChangedEvent_EquipmentChangeStatics {
}

/** JVM class io.papermc.paper.event.entity.EntityFertilizeEggEvent. */
export interface EntityFertilizeEggEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getBredWith(): j_org_bukkit_inventory.ItemStack | null;
  getBreeder(): j_org_bukkit_entity.Player | null;
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getExperience(): number;
  getFather(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMother(): j_org_bukkit_entity.LivingEntity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setExperience(arg0: number): void;
}
export type EntityFertilizeEggEvent = EntityFertilizeEggEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityFertilizeEggEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.LivingEntity, arg2: j_org_bukkit_entity.Player, arg3: j_org_bukkit_inventory.ItemStack, arg4: number): EntityFertilizeEggEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityInsideBlockEvent. */
export interface EntityInsideBlockEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityInsideBlockEvent = EntityInsideBlockEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityInsideBlockEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.Block): EntityInsideBlockEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityKnockbackEvent. */
export interface EntityKnockbackEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getCause(): EntityKnockbackEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKnockback(): j_org_bukkit_util.Vector;
  isCancelled(): boolean;
  knockback: j_org_bukkit_util.Vector;
  setCancelled(arg0: boolean): void;
  setKnockback(arg0: j_org_bukkit_util.Vector): void;
}
export type EntityKnockbackEvent = EntityKnockbackEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityKnockbackEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityKnockbackEvent_Cause, arg2: j_org_bukkit_util.Vector): EntityKnockbackEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum io.papermc.paper.event.entity.EntityKnockbackEvent$Cause; constants are host handles, not strings. */
export type EntityKnockbackEvent_Cause = JavaEnum<"io.papermc.paper.event.entity.EntityKnockbackEvent$Cause", "DAMAGE" | "ENTITY_ATTACK" | "EXPLOSION" | "PUSH" | "SHIELD_BLOCK" | "SWEEP_ATTACK" | "UNKNOWN"> & EntityKnockbackEvent_CauseMembers;
export interface EntityKnockbackEvent_CauseMembers {
}
export interface EntityKnockbackEvent_CauseStatics {
  readonly DAMAGE: EntityKnockbackEvent_Cause;
  readonly ENTITY_ATTACK: EntityKnockbackEvent_Cause;
  readonly EXPLOSION: EntityKnockbackEvent_Cause;
  readonly PUSH: EntityKnockbackEvent_Cause;
  readonly SHIELD_BLOCK: EntityKnockbackEvent_Cause;
  readonly SWEEP_ATTACK: EntityKnockbackEvent_Cause;
  readonly UNKNOWN: EntityKnockbackEvent_Cause;
  valueOf(arg0: string): EntityKnockbackEvent_Cause;
  values(): Array<EntityKnockbackEvent_Cause>;
}

/** JVM class io.papermc.paper.event.entity.EntityLoadCrossbowEvent. */
export interface EntityLoadCrossbowEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getCrossbow(): j_org_bukkit_inventory.ItemStack;
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setConsumeItem(arg0: boolean): void;
  shouldConsumeItem(): boolean;
}
export type EntityLoadCrossbowEvent = EntityLoadCrossbowEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityLoadCrossbowEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_inventory.ItemStack, arg2: j_org_bukkit_inventory.EquipmentSlot): EntityLoadCrossbowEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityMoveEvent. */
export interface EntityMoveEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.LivingEntity;
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
export type EntityMoveEvent = EntityMoveEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityMoveEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location): EntityMoveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityPortalReadyEvent. */
export interface EntityPortalReadyEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPortalType(): j_org_bukkit.PortalType;
  getTargetWorld(): j_org_bukkit.World | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setTargetWorld(arg0: j_org_bukkit.World): void | null;
}
export type EntityPortalReadyEvent = EntityPortalReadyEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityPortalReadyEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.World, arg2: j_org_bukkit.PortalType): EntityPortalReadyEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent. */
export interface EntityPushedByEntityAttackEventMembers {
  readonly __javaSupertypes?: readonly [EntityKnockbackEvent, j_org_bukkit_event.Cancellable];
  getAcceleration(): j_org_bukkit_util.Vector;
  getPushedBy(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setAcceleration(arg0: j_org_bukkit_util.Vector): void;
  setCancelled(arg0: boolean): void;
}
export type EntityPushedByEntityAttackEvent = EntityPushedByEntityAttackEventMembers & EntityKnockbackEvent & j_org_bukkit_event.Cancellable;
export interface EntityPushedByEntityAttackEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityKnockbackEvent_Cause, arg2: j_org_bukkit_entity.Entity, arg3: j_org_bukkit_util.Vector): EntityPushedByEntityAttackEvent;
}

/** JVM class io.papermc.paper.event.entity.EntityToggleSitEvent. */
export interface EntityToggleSitEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSittingState(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityToggleSitEvent = EntityToggleSitEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityToggleSitEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: boolean): EntityToggleSitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.FishHookStateChangeEvent. */
export interface FishHookStateChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.FishHook;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewHookState(): j_org_bukkit_entity.FishHook_HookState;
}
export type FishHookStateChangeEvent = FishHookStateChangeEventMembers & j_org_bukkit_event_entity.EntityEvent;
export interface FishHookStateChangeEventStatics {
  new(arg0: j_org_bukkit_entity.FishHook, arg1: j_org_bukkit_entity.FishHook_HookState): FishHookStateChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.PufferFishStateChangeEvent. */
export interface PufferFishStateChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.PufferFish;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewPuffState(): number;
  isCancelled(): boolean;
  isDeflating(): boolean;
  isInflating(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PufferFishStateChangeEvent = PufferFishStateChangeEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface PufferFishStateChangeEventStatics {
  new(arg0: j_org_bukkit_entity.PufferFish, arg1: number): PufferFishStateChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.ShulkerDuplicateEvent. */
export interface ShulkerDuplicateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.Shulker;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getParent(): j_org_bukkit_entity.Shulker;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ShulkerDuplicateEvent = ShulkerDuplicateEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface ShulkerDuplicateEventStatics {
  new(arg0: j_org_bukkit_entity.Shulker, arg1: j_org_bukkit_entity.Shulker): ShulkerDuplicateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.TameableDeathMessageEvent. */
export interface TameableDeathMessageEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  deathMessage(): j_net_kyori_adventure_text.Component;
  deathMessage(arg0: j_net_kyori_adventure_text.Component): void;
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.Tameable;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type TameableDeathMessageEvent = TameableDeathMessageEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface TameableDeathMessageEventStatics {
  new(arg0: j_org_bukkit_entity.Tameable, arg1: j_net_kyori_adventure_text.Component): TameableDeathMessageEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.WardenAngerChangeEvent. */
export interface WardenAngerChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.Warden;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewAnger(): number;
  getOldAnger(): number;
  getTarget(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewAnger(arg0: number): void;
}
export type WardenAngerChangeEvent = WardenAngerChangeEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface WardenAngerChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Warden, arg1: j_org_bukkit_entity.Entity, arg2: number, arg3: number): WardenAngerChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.entity.WaterBottleSplashEvent. */
export interface WaterBottleSplashEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.PotionSplashEvent];
  damageAsWaterSensitive(arg0: j_org_bukkit_entity.LivingEntity): void;
  doNotDamageAsWaterSensitive(arg0: j_org_bukkit_entity.LivingEntity): void;
  getAffectedEntities(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  getIntensity(arg0: j_org_bukkit_entity.LivingEntity): number;
  getToDamage(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  getToExtinguish(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  getToRehydrate(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  setIntensity(arg0: j_org_bukkit_entity.LivingEntity, arg1: number): void;
}
export type WaterBottleSplashEvent = WaterBottleSplashEventMembers & j_org_bukkit_event_entity.PotionSplashEvent;
export interface WaterBottleSplashEventStatics {
  new(arg0: j_org_bukkit_entity.ThrownPotion, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: JavaMap<j_org_bukkit_entity.LivingEntity, number>, arg5: JavaSet<j_org_bukkit_entity.LivingEntity>, arg6: JavaSet<j_org_bukkit_entity.LivingEntity>): WaterBottleSplashEvent;
}
