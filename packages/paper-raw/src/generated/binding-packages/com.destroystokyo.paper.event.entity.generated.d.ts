// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_event_entity from './io.papermc.paper.event.entity.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_entity from './org.bukkit.event.entity.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class com.destroystokyo.paper.event.entity.CreeperIgniteEvent. */
export interface CreeperIgniteEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Creeper;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isIgnited(): boolean;
  setCancelled(arg0: boolean): void;
  setIgnited(arg0: boolean): void;
}
export type CreeperIgniteEvent = CreeperIgniteEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface CreeperIgniteEventStatics {
  new(arg0: j_org_bukkit_entity.Creeper, arg1: boolean): CreeperIgniteEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent. */
export interface EnderDragonFireballHitEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getAreaEffectCloud(): j_org_bukkit_entity.AreaEffectCloud;
  getEntity(): j_org_bukkit_entity.DragonFireball;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTargets(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EnderDragonFireballHitEvent = EnderDragonFireballHitEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EnderDragonFireballHitEventStatics {
  new(arg0: j_org_bukkit_entity.DragonFireball, arg1: JavaCollection<j_org_bukkit_entity.LivingEntity>, arg2: j_org_bukkit_entity.AreaEffectCloud): EnderDragonFireballHitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EnderDragonFlameEvent. */
export interface EnderDragonFlameEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getAreaEffectCloud(): j_org_bukkit_entity.AreaEffectCloud;
  getEntity(): j_org_bukkit_entity.EnderDragon;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EnderDragonFlameEvent = EnderDragonFlameEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EnderDragonFlameEventStatics {
  new(arg0: j_org_bukkit_entity.EnderDragon, arg1: j_org_bukkit_entity.AreaEffectCloud): EnderDragonFlameEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent. */
export interface EnderDragonShootFireballEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.EnderDragon;
  getFireball(): j_org_bukkit_entity.DragonFireball;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EnderDragonShootFireballEvent = EnderDragonShootFireballEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EnderDragonShootFireballEventStatics {
  new(arg0: j_org_bukkit_entity.EnderDragon, arg1: j_org_bukkit_entity.DragonFireball): EnderDragonShootFireballEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent. */
export interface EndermanAttackPlayerEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Enderman;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EndermanAttackPlayerEvent = EndermanAttackPlayerEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EndermanAttackPlayerEventStatics {
  new(arg0: j_org_bukkit_entity.Enderman, arg1: j_org_bukkit_entity.Player): EndermanAttackPlayerEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EndermanEscapeEvent. */
export interface EndermanEscapeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Enderman;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReason(): EndermanEscapeEvent_Reason;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EndermanEscapeEvent = EndermanEscapeEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EndermanEscapeEventStatics {
  new(arg0: j_org_bukkit_entity.Enderman, arg1: EndermanEscapeEvent_Reason): EndermanEscapeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum com.destroystokyo.paper.event.entity.EndermanEscapeEvent$Reason; constants are host handles, not strings. */
export type EndermanEscapeEvent_Reason = JavaEnum<"com.destroystokyo.paper.event.entity.EndermanEscapeEvent$Reason", "CRITICAL_HIT" | "DROWN" | "INDIRECT" | "RUNAWAY" | "STARE"> & EndermanEscapeEvent_ReasonMembers;
export interface EndermanEscapeEvent_ReasonMembers {
}
export interface EndermanEscapeEvent_ReasonStatics {
  readonly CRITICAL_HIT: EndermanEscapeEvent_Reason;
  readonly DROWN: EndermanEscapeEvent_Reason;
  readonly INDIRECT: EndermanEscapeEvent_Reason;
  readonly RUNAWAY: EndermanEscapeEvent_Reason;
  readonly STARE: EndermanEscapeEvent_Reason;
  valueOf(arg0: string): EndermanEscapeEvent_Reason;
  values(): Array<EndermanEscapeEvent_Reason>;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityAddToWorldEvent. */
export interface EntityAddToWorldEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getWorld(): j_org_bukkit.World;
}
export type EntityAddToWorldEvent = EntityAddToWorldEventMembers & j_org_bukkit_event_entity.EntityEvent;
export interface EntityAddToWorldEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.World): EntityAddToWorldEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityJumpEvent. */
export interface EntityJumpEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityJumpEvent = EntityJumpEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityJumpEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity): EntityJumpEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent. */
export interface EntityKnockbackByEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_event_entity.EntityPushedByEntityAttackEvent];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHitBy(): j_org_bukkit_entity.Entity;
  getKnockbackStrength(): number;
}
export type EntityKnockbackByEntityEvent = EntityKnockbackByEntityEventMembers & j_io_papermc_paper_event_entity.EntityPushedByEntityAttackEvent;
export interface EntityKnockbackByEntityEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.Entity, arg2: j_io_papermc_paper_event_entity.EntityKnockbackEvent_Cause, arg3: number, arg4: j_org_bukkit_util.Vector): EntityKnockbackByEntityEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityPathfindEvent. */
export interface EntityPathfindEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLoc(): j_org_bukkit.Location;
  getTargetEntity(): j_org_bukkit_entity.Entity | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityPathfindEvent = EntityPathfindEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityPathfindEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit_entity.Entity | null): EntityPathfindEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent. */
export interface EntityRemoveFromWorldEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getWorld(): j_org_bukkit.World;
}
export type EntityRemoveFromWorldEvent = EntityRemoveFromWorldEventMembers & j_org_bukkit_event_entity.EntityEvent;
export interface EntityRemoveFromWorldEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.World): EntityRemoveFromWorldEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent. */
export interface EntityTeleportEndGatewayEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityTeleportEvent];
  getGateway(): j_org_bukkit_block.EndGateway;
}
export type EntityTeleportEndGatewayEvent = EntityTeleportEndGatewayEventMembers & j_org_bukkit_event_entity.EntityTeleportEvent;
export interface EntityTeleportEndGatewayEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location, arg3: j_org_bukkit_block.EndGateway): EntityTeleportEndGatewayEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.EntityZapEvent. */
export interface EntityZapEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityTransformEvent, j_org_bukkit_event.Cancellable];
  getBolt(): j_org_bukkit_entity.LightningStrike;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReplacementEntity(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityZapEvent = EntityZapEventMembers & j_org_bukkit_event_entity.EntityTransformEvent & j_org_bukkit_event.Cancellable;
export interface EntityZapEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.LightningStrike, arg2: j_org_bukkit_entity.Entity): EntityZapEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent. */
export interface ExperienceOrbMergeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMergeSource(): j_org_bukkit_entity.ExperienceOrb;
  getMergeTarget(): j_org_bukkit_entity.ExperienceOrb;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ExperienceOrbMergeEvent = ExperienceOrbMergeEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface ExperienceOrbMergeEventStatics {
  new(arg0: j_org_bukkit_entity.ExperienceOrb, arg1: j_org_bukkit_entity.ExperienceOrb): ExperienceOrbMergeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent. */
export interface PhantomPreSpawnEventMembers {
  readonly __javaSupertypes?: readonly [PreCreatureSpawnEvent];
  getSpawningEntity(): j_org_bukkit_entity.Entity;
}
export type PhantomPreSpawnEvent = PhantomPreSpawnEventMembers & PreCreatureSpawnEvent;
export interface PhantomPreSpawnEventStatics {
  new(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_event_entity.CreatureSpawnEvent_SpawnReason): PhantomPreSpawnEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent. */
export interface PlayerNaturallySpawnCreaturesEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_player.PlayerEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSpawnRadius(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setSpawnRadius(arg0: number): void;
}
export type PlayerNaturallySpawnCreaturesEvent = PlayerNaturallySpawnCreaturesEventMembers & j_org_bukkit_event_player.PlayerEvent & j_org_bukkit_event.Cancellable;
export interface PlayerNaturallySpawnCreaturesEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: number): PlayerNaturallySpawnCreaturesEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent. */
export interface PreCreatureSpawnEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReason(): j_org_bukkit_event_entity.CreatureSpawnEvent_SpawnReason;
  getSpawnLocation(): j_org_bukkit.Location;
  getType(): j_org_bukkit_entity.EntityType;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setShouldAbortSpawn(arg0: boolean): void;
  shouldAbortSpawn(): boolean;
}
export type PreCreatureSpawnEvent = PreCreatureSpawnEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface PreCreatureSpawnEventStatics {
  new(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_entity.EntityType, arg2: j_org_bukkit_event_entity.CreatureSpawnEvent_SpawnReason): PreCreatureSpawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent. */
export interface PreSpawnerSpawnEventMembers {
  readonly __javaSupertypes?: readonly [PreCreatureSpawnEvent];
  getSpawnerLocation(): j_org_bukkit.Location;
}
export type PreSpawnerSpawnEvent = PreSpawnerSpawnEventMembers & PreCreatureSpawnEvent;
export interface PreSpawnerSpawnEventStatics {
  new(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_entity.EntityType, arg2: j_org_bukkit.Location): PreSpawnerSpawnEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.ProjectileCollideEvent. */
export interface ProjectileCollideEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getCollidedWith(): j_org_bukkit_entity.Entity;
  getEntity(): j_org_bukkit_entity.Projectile;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ProjectileCollideEvent = ProjectileCollideEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface ProjectileCollideEventStatics {
  new(arg0: j_org_bukkit_entity.Projectile, arg1: j_org_bukkit_entity.Entity): ProjectileCollideEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent. */
export interface SkeletonHorseTrapEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEligibleHumans(): JavaList<j_org_bukkit_entity.HumanEntity>;
  getEntity(): j_org_bukkit_entity.SkeletonHorse;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type SkeletonHorseTrapEvent = SkeletonHorseTrapEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface SkeletonHorseTrapEventStatics {
  new(arg0: j_org_bukkit_entity.SkeletonHorse, arg1: JavaList<j_org_bukkit_entity.HumanEntity>): SkeletonHorseTrapEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent. */
export interface SlimeChangeDirectionEventMembers {
  readonly __javaSupertypes?: readonly [SlimePathfindEvent];
  getNewYaw(): number;
  setNewYaw(arg0: number): void;
}
export type SlimeChangeDirectionEvent = SlimeChangeDirectionEventMembers & SlimePathfindEvent;
export interface SlimeChangeDirectionEventStatics {
  new(arg0: j_org_bukkit_entity.Slime, arg1: number): SlimeChangeDirectionEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.SlimePathfindEvent. */
export interface SlimePathfindEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Slime;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type SlimePathfindEvent = SlimePathfindEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface SlimePathfindEventStatics {
  new(arg0: j_org_bukkit_entity.Slime): SlimePathfindEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.SlimeSwimEvent. */
export interface SlimeSwimEventMembers {
  readonly __javaSupertypes?: readonly [SlimeWanderEvent];
}
export type SlimeSwimEvent = SlimeSwimEventMembers & SlimeWanderEvent;
export interface SlimeSwimEventStatics {
  new(arg0: j_org_bukkit_entity.Slime): SlimeSwimEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent. */
export interface SlimeTargetLivingEntityEventMembers {
  readonly __javaSupertypes?: readonly [SlimePathfindEvent];
  getTarget(): j_org_bukkit_entity.LivingEntity;
}
export type SlimeTargetLivingEntityEvent = SlimeTargetLivingEntityEventMembers & SlimePathfindEvent;
export interface SlimeTargetLivingEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Slime, arg1: j_org_bukkit_entity.LivingEntity): SlimeTargetLivingEntityEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.SlimeWanderEvent. */
export interface SlimeWanderEventMembers {
  readonly __javaSupertypes?: readonly [SlimePathfindEvent];
}
export type SlimeWanderEvent = SlimeWanderEventMembers & SlimePathfindEvent;
export interface SlimeWanderEventStatics {
  new(arg0: j_org_bukkit_entity.Slime): SlimeWanderEvent;
}

/** JVM class com.destroystokyo.paper.event.entity.ThrownEggHatchEvent. */
export interface ThrownEggHatchEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getEgg(): j_org_bukkit_entity.Egg;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHatchingType(): j_org_bukkit_entity.EntityType;
  getNumHatches(): number;
  isHatching(): boolean;
  setHatching(arg0: boolean): void;
  setHatchingType(arg0: j_org_bukkit_entity.EntityType): void;
  setNumHatches(arg0: number): void;
}
export type ThrownEggHatchEvent = ThrownEggHatchEventMembers & j_org_bukkit_event.Event;
export interface ThrownEggHatchEventStatics {
  new(arg0: j_org_bukkit_entity.Egg, arg1: boolean, arg2: number, arg3: j_org_bukkit_entity.EntityType): ThrownEggHatchEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.TurtleGoHomeEvent. */
export interface TurtleGoHomeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Turtle;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type TurtleGoHomeEvent = TurtleGoHomeEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface TurtleGoHomeEventStatics {
  new(arg0: j_org_bukkit_entity.Turtle): TurtleGoHomeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.TurtleLayEggEvent. */
export interface TurtleLayEggEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEggCount(): number;
  getEntity(): j_org_bukkit_entity.Turtle;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setEggCount(arg0: number): void;
}
export type TurtleLayEggEvent = TurtleLayEggEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface TurtleLayEggEventStatics {
  new(arg0: j_org_bukkit_entity.Turtle, arg1: j_org_bukkit.Location, arg2: number): TurtleLayEggEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent. */
export interface TurtleStartDiggingEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Turtle;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type TurtleStartDiggingEvent = TurtleStartDiggingEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface TurtleStartDiggingEventStatics {
  new(arg0: j_org_bukkit_entity.Turtle, arg1: j_org_bukkit.Location): TurtleStartDiggingEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.WitchConsumePotionEvent. */
export interface WitchConsumePotionEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Witch;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPotion(): j_org_bukkit_inventory.ItemStack | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setPotion(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type WitchConsumePotionEvent = WitchConsumePotionEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface WitchConsumePotionEventStatics {
  new(arg0: j_org_bukkit_entity.Witch, arg1: j_org_bukkit_inventory.ItemStack | null): WitchConsumePotionEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.WitchReadyPotionEvent. */
export interface WitchReadyPotionEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Witch;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPotion(): j_org_bukkit_inventory.ItemStack | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setPotion(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type WitchReadyPotionEvent = WitchReadyPotionEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface WitchReadyPotionEventStatics {
  new(arg0: j_org_bukkit_entity.Witch, arg1: j_org_bukkit_inventory.ItemStack | null): WitchReadyPotionEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class com.destroystokyo.paper.event.entity.WitchThrowPotionEvent. */
export interface WitchThrowPotionEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_entity.EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Witch;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPotion(): j_org_bukkit_inventory.ItemStack | null;
  getTarget(): j_org_bukkit_entity.LivingEntity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setPotion(arg0: j_org_bukkit_inventory.ItemStack | null): void;
}
export type WitchThrowPotionEvent = WitchThrowPotionEventMembers & j_org_bukkit_event_entity.EntityEvent & j_org_bukkit_event.Cancellable;
export interface WitchThrowPotionEventStatics {
  new(arg0: j_org_bukkit_entity.Witch, arg1: j_org_bukkit_entity.LivingEntity, arg2: j_org_bukkit_inventory.ItemStack | null): WitchThrowPotionEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
