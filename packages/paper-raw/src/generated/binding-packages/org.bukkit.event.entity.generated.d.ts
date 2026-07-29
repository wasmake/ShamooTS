// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_event_entity from './com.destroystokyo.paper.event.entity.generated.js';
import type * as j_io_papermc_paper_event_entity from './io.papermc.paper.event.entity.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM class org.bukkit.event.entity.AreaEffectCloudApplyEvent. */
export interface AreaEffectCloudApplyEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getAffectedEntities(): JavaList<j_org_bukkit_entity.LivingEntity>;
  getEntity(): j_org_bukkit_entity.AreaEffectCloud;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type AreaEffectCloudApplyEvent = AreaEffectCloudApplyEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface AreaEffectCloudApplyEventStatics {
  new(arg0: j_org_bukkit_entity.AreaEffectCloud, arg1: JavaList<j_org_bukkit_entity.LivingEntity>): AreaEffectCloudApplyEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ArrowBodyCountChangeEvent. */
export interface ArrowBodyCountChangeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewAmount(): number;
  getOldAmount(): number;
  isCancelled(): boolean;
  isReset(): boolean;
  setCancelled(arg0: boolean): void;
  setNewAmount(arg0: number): void;
}
export type ArrowBodyCountChangeEvent = ArrowBodyCountChangeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface ArrowBodyCountChangeEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: number, arg2: number, arg3: boolean): ArrowBodyCountChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.BatToggleSleepEvent. */
export interface BatToggleSleepEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isAwake(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type BatToggleSleepEvent = BatToggleSleepEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface BatToggleSleepEventStatics {
  new(arg0: j_org_bukkit_entity.Bat, arg1: boolean): BatToggleSleepEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.CreatureSpawnEvent. */
export interface CreatureSpawnEventMembers {
  readonly __javaSupertypes?: readonly [EntitySpawnEvent];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getSpawnReason(): CreatureSpawnEvent_SpawnReason;
}
export type CreatureSpawnEvent = CreatureSpawnEventMembers & EntitySpawnEvent;
export interface CreatureSpawnEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: CreatureSpawnEvent_SpawnReason): CreatureSpawnEvent;
}

/** Live JVM enum org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason; constants are host handles, not strings. */
export type CreatureSpawnEvent_SpawnReason = JavaEnum<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason", "BEEHIVE" | "BREEDING" | "BUCKET" | "BUILD_IRONGOLEM" | "BUILD_SNOWMAN" | "BUILD_WITHER" | "CHUNK_GEN" | "COMMAND" | "CURED" | "CUSTOM" | "DEFAULT" | "DISPENSE_EGG" | "DROWNED" | "DUPLICATION" | "EGG" | "ENCHANTMENT" | "ENDER_PEARL" | "EXPLOSION" | "FROZEN" | "INFECTION" | "JOCKEY" | "LIGHTNING" | "METAMORPHOSIS" | "MOUNT" | "NATURAL" | "NETHER_PORTAL" | "OCELOT_BABY" | "OMINOUS_ITEM_SPAWNER" | "PATROL" | "PIGLIN_ZOMBIFIED" | "POTION_EFFECT" | "RAID" | "REHYDRATION" | "REINFORCEMENTS" | "SHEARED" | "SHOULDER_ENTITY" | "SILVERFISH_BLOCK" | "SLIME_SPLIT" | "SPAWNER" | "SPAWNER_EGG" | "SPELL" | "TRAP" | "TRIAL_SPAWNER" | "VILLAGE_DEFENSE" | "VILLAGE_INVASION"> & CreatureSpawnEvent_SpawnReasonMembers;
export interface CreatureSpawnEvent_SpawnReasonMembers {
}
export interface CreatureSpawnEvent_SpawnReasonStatics {
  readonly BEEHIVE: CreatureSpawnEvent_SpawnReason;
  readonly BREEDING: CreatureSpawnEvent_SpawnReason;
  readonly BUCKET: CreatureSpawnEvent_SpawnReason;
  readonly BUILD_IRONGOLEM: CreatureSpawnEvent_SpawnReason;
  readonly BUILD_SNOWMAN: CreatureSpawnEvent_SpawnReason;
  readonly BUILD_WITHER: CreatureSpawnEvent_SpawnReason;
  readonly CHUNK_GEN: CreatureSpawnEvent_SpawnReason;
  readonly COMMAND: CreatureSpawnEvent_SpawnReason;
  readonly CURED: CreatureSpawnEvent_SpawnReason;
  readonly CUSTOM: CreatureSpawnEvent_SpawnReason;
  readonly DEFAULT: CreatureSpawnEvent_SpawnReason;
  readonly DISPENSE_EGG: CreatureSpawnEvent_SpawnReason;
  readonly DROWNED: CreatureSpawnEvent_SpawnReason;
  readonly DUPLICATION: CreatureSpawnEvent_SpawnReason;
  readonly EGG: CreatureSpawnEvent_SpawnReason;
  readonly ENCHANTMENT: CreatureSpawnEvent_SpawnReason;
  readonly ENDER_PEARL: CreatureSpawnEvent_SpawnReason;
  readonly EXPLOSION: CreatureSpawnEvent_SpawnReason;
  readonly FROZEN: CreatureSpawnEvent_SpawnReason;
  readonly INFECTION: CreatureSpawnEvent_SpawnReason;
  readonly JOCKEY: CreatureSpawnEvent_SpawnReason;
  readonly LIGHTNING: CreatureSpawnEvent_SpawnReason;
  readonly METAMORPHOSIS: CreatureSpawnEvent_SpawnReason;
  readonly MOUNT: CreatureSpawnEvent_SpawnReason;
  readonly NATURAL: CreatureSpawnEvent_SpawnReason;
  readonly NETHER_PORTAL: CreatureSpawnEvent_SpawnReason;
  readonly OCELOT_BABY: CreatureSpawnEvent_SpawnReason;
  readonly OMINOUS_ITEM_SPAWNER: CreatureSpawnEvent_SpawnReason;
  readonly PATROL: CreatureSpawnEvent_SpawnReason;
  readonly PIGLIN_ZOMBIFIED: CreatureSpawnEvent_SpawnReason;
  readonly POTION_EFFECT: CreatureSpawnEvent_SpawnReason;
  readonly RAID: CreatureSpawnEvent_SpawnReason;
  readonly REHYDRATION: CreatureSpawnEvent_SpawnReason;
  readonly REINFORCEMENTS: CreatureSpawnEvent_SpawnReason;
  readonly SHEARED: CreatureSpawnEvent_SpawnReason;
  readonly SHOULDER_ENTITY: CreatureSpawnEvent_SpawnReason;
  readonly SILVERFISH_BLOCK: CreatureSpawnEvent_SpawnReason;
  readonly SLIME_SPLIT: CreatureSpawnEvent_SpawnReason;
  readonly SPAWNER: CreatureSpawnEvent_SpawnReason;
  readonly SPAWNER_EGG: CreatureSpawnEvent_SpawnReason;
  readonly SPELL: CreatureSpawnEvent_SpawnReason;
  readonly TRAP: CreatureSpawnEvent_SpawnReason;
  readonly TRIAL_SPAWNER: CreatureSpawnEvent_SpawnReason;
  readonly VILLAGE_DEFENSE: CreatureSpawnEvent_SpawnReason;
  readonly VILLAGE_INVASION: CreatureSpawnEvent_SpawnReason;
  valueOf(arg0: string): CreatureSpawnEvent_SpawnReason;
  values(): Array<CreatureSpawnEvent_SpawnReason>;
}

/** JVM class org.bukkit.event.entity.CreeperPowerEvent. */
export interface CreeperPowerEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getCause(): CreeperPowerEvent_PowerCause;
  getEntity(): j_org_bukkit_entity.Creeper;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLightning(): j_org_bukkit_entity.LightningStrike | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type CreeperPowerEvent = CreeperPowerEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface CreeperPowerEventStatics {
  new(arg0: j_org_bukkit_entity.Creeper, arg1: j_org_bukkit_entity.LightningStrike, arg2: CreeperPowerEvent_PowerCause): CreeperPowerEvent;
  new(arg0: j_org_bukkit_entity.Creeper, arg1: CreeperPowerEvent_PowerCause): CreeperPowerEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.CreeperPowerEvent$PowerCause; constants are host handles, not strings. */
export type CreeperPowerEvent_PowerCause = JavaEnum<"org.bukkit.event.entity.CreeperPowerEvent$PowerCause", "LIGHTNING" | "SET_OFF" | "SET_ON"> & CreeperPowerEvent_PowerCauseMembers;
export interface CreeperPowerEvent_PowerCauseMembers {
}
export interface CreeperPowerEvent_PowerCauseStatics {
  readonly LIGHTNING: CreeperPowerEvent_PowerCause;
  readonly SET_OFF: CreeperPowerEvent_PowerCause;
  readonly SET_ON: CreeperPowerEvent_PowerCause;
  valueOf(arg0: string): CreeperPowerEvent_PowerCause;
  values(): Array<CreeperPowerEvent_PowerCause>;
}

/** JVM class org.bukkit.event.entity.EnderDragonChangePhaseEvent. */
export interface EnderDragonChangePhaseEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getCurrentPhase(): j_org_bukkit_entity.EnderDragon_Phase | null;
  getEntity(): j_org_bukkit_entity.EnderDragon;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewPhase(): j_org_bukkit_entity.EnderDragon_Phase;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewPhase(arg0: j_org_bukkit_entity.EnderDragon_Phase): void;
}
export type EnderDragonChangePhaseEvent = EnderDragonChangePhaseEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EnderDragonChangePhaseEventStatics {
  new(arg0: j_org_bukkit_entity.EnderDragon, arg1: j_org_bukkit_entity.EnderDragon_Phase | null, arg2: j_org_bukkit_entity.EnderDragon_Phase): EnderDragonChangePhaseEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityAirChangeEvent. */
export interface EntityAirChangeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getAmount(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setAmount(arg0: number): void;
  setCancelled(arg0: boolean): void;
}
export type EntityAirChangeEvent = EntityAirChangeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityAirChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: number): EntityAirChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityBreakDoorEvent. */
export interface EntityBreakDoorEventMembers {
  readonly __javaSupertypes?: readonly [EntityChangeBlockEvent];
  getEntity(): j_org_bukkit_entity.LivingEntity;
}
export type EntityBreakDoorEvent = EntityBreakDoorEventMembers & EntityChangeBlockEvent;
export interface EntityBreakDoorEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block_data.BlockData): EntityBreakDoorEvent;
}

/** JVM class org.bukkit.event.entity.EntityBreedEvent. */
export interface EntityBreedEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBredWith(): j_org_bukkit_inventory.ItemStack | null;
  getBreeder(): j_org_bukkit_entity.LivingEntity | null;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getExperience(): number;
  getFather(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMother(): j_org_bukkit_entity.LivingEntity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setExperience(arg0: number): void;
}
export type EntityBreedEvent = EntityBreedEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityBreedEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.LivingEntity, arg2: j_org_bukkit_entity.LivingEntity, arg3: j_org_bukkit_entity.LivingEntity | null, arg4: j_org_bukkit_inventory.ItemStack | null, arg5: number): EntityBreedEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityChangeBlockEvent. */
export interface EntityChangeBlockEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getBlockData(): j_org_bukkit_block_data.BlockData;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTo(): j_org_bukkit.Material;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityChangeBlockEvent = EntityChangeBlockEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityChangeBlockEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.Block, arg2: j_org_bukkit_block_data.BlockData): EntityChangeBlockEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityCombustByBlockEvent. */
export interface EntityCombustByBlockEventMembers {
  readonly __javaSupertypes?: readonly [EntityCombustEvent];
  getCombuster(): j_org_bukkit_block.Block | null;
}
export type EntityCombustByBlockEvent = EntityCombustByBlockEventMembers & EntityCombustEvent;
export interface EntityCombustByBlockEventStatics {
  new(arg0: j_org_bukkit_block.Block | null, arg1: j_org_bukkit_entity.Entity, arg2: number): EntityCombustByBlockEvent;
  new(arg0: j_org_bukkit_block.Block | null, arg1: j_org_bukkit_entity.Entity, arg2: number): EntityCombustByBlockEvent;
}

/** JVM class org.bukkit.event.entity.EntityCombustByEntityEvent. */
export interface EntityCombustByEntityEventMembers {
  readonly __javaSupertypes?: readonly [EntityCombustEvent];
  getCombuster(): j_org_bukkit_entity.Entity;
}
export type EntityCombustByEntityEvent = EntityCombustByEntityEventMembers & EntityCombustEvent;
export interface EntityCombustByEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: number): EntityCombustByEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: number): EntityCombustByEntityEvent;
}

/** JVM class org.bukkit.event.entity.EntityCombustEvent. */
export interface EntityCombustEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getDuration(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDuration(arg0: number): void;
  setDuration(arg0: number): void;
}
export type EntityCombustEvent = EntityCombustEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityCombustEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: number): EntityCombustEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: number): EntityCombustEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityCreatePortalEvent. */
export interface EntityCreatePortalEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBlocks(): JavaList<j_org_bukkit_block.BlockState>;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPortalType(): j_org_bukkit.PortalType;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityCreatePortalEvent = EntityCreatePortalEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityCreatePortalEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: JavaList<j_org_bukkit_block.BlockState>, arg2: j_org_bukkit.PortalType): EntityCreatePortalEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityDamageByBlockEvent. */
export interface EntityDamageByBlockEventMembers {
  readonly __javaSupertypes?: readonly [EntityDamageEvent];
  getDamager(): j_org_bukkit_block.Block | null;
  getDamagerBlockState(): j_org_bukkit_block.BlockState | null;
}
export type EntityDamageByBlockEvent = EntityDamageByBlockEventMembers & EntityDamageEvent;
export interface EntityDamageByBlockEventStatics {
  new(arg0: j_org_bukkit_block.Block | null, arg1: j_org_bukkit_block.BlockState | null, arg2: j_org_bukkit_entity.Entity, arg3: EntityDamageEvent_DamageCause, arg4: j_org_bukkit_damage.DamageSource, arg5: number): EntityDamageByBlockEvent;
  new(arg0: j_org_bukkit_block.Block | null, arg1: j_org_bukkit_block.BlockState | null, arg2: j_org_bukkit_entity.Entity, arg3: EntityDamageEvent_DamageCause, arg4: j_org_bukkit_damage.DamageSource, arg5: JavaMap<EntityDamageEvent_DamageModifier, number>, arg6: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>): EntityDamageByBlockEvent;
  new(arg0: j_org_bukkit_block.Block | null, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: number): EntityDamageByBlockEvent;
  new(arg0: j_org_bukkit_block.Block | null, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: JavaMap<EntityDamageEvent_DamageModifier, number>, arg4: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>): EntityDamageByBlockEvent;
}

/** JVM class org.bukkit.event.entity.EntityDamageByEntityEvent. */
export interface EntityDamageByEntityEventMembers {
  readonly __javaSupertypes?: readonly [EntityDamageEvent];
  getDamageSource(): j_org_bukkit_damage.DamageSource;
  getDamager(): j_org_bukkit_entity.Entity;
  isCritical(): boolean;
}
export type EntityDamageByEntityEvent = EntityDamageByEntityEventMembers & EntityDamageEvent;
export interface EntityDamageByEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: number): EntityDamageByEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: JavaMap<EntityDamageEvent_DamageModifier, number>, arg4: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>): EntityDamageByEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: j_org_bukkit_damage.DamageSource, arg4: number): EntityDamageByEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: j_org_bukkit_damage.DamageSource, arg4: JavaMap<EntityDamageEvent_DamageModifier, number>, arg5: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>): EntityDamageByEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: EntityDamageEvent_DamageCause, arg3: j_org_bukkit_damage.DamageSource, arg4: JavaMap<EntityDamageEvent_DamageModifier, number>, arg5: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>, arg6: boolean): EntityDamageByEntityEvent;
}

/** JVM class org.bukkit.event.entity.EntityDamageEvent. */
export interface EntityDamageEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getCause(): EntityDamageEvent_DamageCause;
  getDamage(): number;
  /** @throws java.lang.IllegalArgumentException */
  getDamage(arg0: EntityDamageEvent_DamageModifier): number;
  getDamageSource(): j_org_bukkit_damage.DamageSource;
  getFinalDamage(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  /** @throws java.lang.IllegalArgumentException */
  getOriginalDamage(arg0: EntityDamageEvent_DamageModifier): number;
  /** @throws java.lang.IllegalArgumentException */
  isApplicable(arg0: EntityDamageEvent_DamageModifier): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDamage(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.UnsupportedOperationException */
  setDamage(arg0: EntityDamageEvent_DamageModifier, arg1: number): void;
}
export type EntityDamageEvent = EntityDamageEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityDamageEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityDamageEvent_DamageCause, arg2: number): EntityDamageEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityDamageEvent_DamageCause, arg2: JavaMap<EntityDamageEvent_DamageModifier, number>, arg3: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>): EntityDamageEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityDamageEvent_DamageCause, arg2: j_org_bukkit_damage.DamageSource, arg3: number): EntityDamageEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityDamageEvent_DamageCause, arg2: j_org_bukkit_damage.DamageSource, arg3: JavaMap<EntityDamageEvent_DamageModifier, number>, arg4: JavaMap<EntityDamageEvent_DamageModifier, JavaOpaque<"com.google.common.base.Function", [number, number]>>): EntityDamageEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityDamageEvent$DamageCause; constants are host handles, not strings. */
export type EntityDamageEvent_DamageCause = JavaEnum<"org.bukkit.event.entity.EntityDamageEvent$DamageCause", "BLOCK_EXPLOSION" | "CAMPFIRE" | "CONTACT" | "CRAMMING" | "CUSTOM" | "DRAGON_BREATH" | "DROWNING" | "DRYOUT" | "ENTITY_ATTACK" | "ENTITY_EXPLOSION" | "ENTITY_SWEEP_ATTACK" | "FALLING_BLOCK" | "FALL" | "FIRE" | "FIRE_TICK" | "FLY_INTO_WALL" | "FREEZE" | "HOT_FLOOR" | "KILL" | "LAVA" | "LIGHTNING" | "MAGIC" | "MELTING" | "POISON" | "PROJECTILE" | "SONIC_BOOM" | "STARVATION" | "SUFFOCATION" | "SUICIDE" | "THORNS" | "VOID" | "WITHER" | "WORLD_BORDER"> & EntityDamageEvent_DamageCauseMembers;
export interface EntityDamageEvent_DamageCauseMembers {
}
export interface EntityDamageEvent_DamageCauseStatics {
  readonly BLOCK_EXPLOSION: EntityDamageEvent_DamageCause;
  readonly CAMPFIRE: EntityDamageEvent_DamageCause;
  readonly CONTACT: EntityDamageEvent_DamageCause;
  readonly CRAMMING: EntityDamageEvent_DamageCause;
  readonly CUSTOM: EntityDamageEvent_DamageCause;
  readonly DRAGON_BREATH: EntityDamageEvent_DamageCause;
  readonly DROWNING: EntityDamageEvent_DamageCause;
  readonly DRYOUT: EntityDamageEvent_DamageCause;
  readonly ENTITY_ATTACK: EntityDamageEvent_DamageCause;
  readonly ENTITY_EXPLOSION: EntityDamageEvent_DamageCause;
  readonly ENTITY_SWEEP_ATTACK: EntityDamageEvent_DamageCause;
  readonly FALLING_BLOCK: EntityDamageEvent_DamageCause;
  readonly FALL: EntityDamageEvent_DamageCause;
  readonly FIRE: EntityDamageEvent_DamageCause;
  readonly FIRE_TICK: EntityDamageEvent_DamageCause;
  readonly FLY_INTO_WALL: EntityDamageEvent_DamageCause;
  readonly FREEZE: EntityDamageEvent_DamageCause;
  readonly HOT_FLOOR: EntityDamageEvent_DamageCause;
  readonly KILL: EntityDamageEvent_DamageCause;
  readonly LAVA: EntityDamageEvent_DamageCause;
  readonly LIGHTNING: EntityDamageEvent_DamageCause;
  readonly MAGIC: EntityDamageEvent_DamageCause;
  readonly MELTING: EntityDamageEvent_DamageCause;
  readonly POISON: EntityDamageEvent_DamageCause;
  readonly PROJECTILE: EntityDamageEvent_DamageCause;
  readonly SONIC_BOOM: EntityDamageEvent_DamageCause;
  readonly STARVATION: EntityDamageEvent_DamageCause;
  readonly SUFFOCATION: EntityDamageEvent_DamageCause;
  readonly SUICIDE: EntityDamageEvent_DamageCause;
  readonly THORNS: EntityDamageEvent_DamageCause;
  readonly VOID: EntityDamageEvent_DamageCause;
  readonly WITHER: EntityDamageEvent_DamageCause;
  readonly WORLD_BORDER: EntityDamageEvent_DamageCause;
  valueOf(arg0: string): EntityDamageEvent_DamageCause;
  values(): Array<EntityDamageEvent_DamageCause>;
}

/** Live JVM enum org.bukkit.event.entity.EntityDamageEvent$DamageModifier; constants are host handles, not strings. */
export type EntityDamageEvent_DamageModifier = JavaEnum<"org.bukkit.event.entity.EntityDamageEvent$DamageModifier", "ABSORPTION" | "ARMOR" | "BASE" | "BLOCKING" | "FREEZING" | "HARD_HAT" | "INVULNERABILITY_REDUCTION" | "MAGIC" | "RESISTANCE"> & EntityDamageEvent_DamageModifierMembers;
export interface EntityDamageEvent_DamageModifierMembers {
}
export interface EntityDamageEvent_DamageModifierStatics {
  readonly ABSORPTION: EntityDamageEvent_DamageModifier;
  readonly ARMOR: EntityDamageEvent_DamageModifier;
  readonly BASE: EntityDamageEvent_DamageModifier;
  readonly BLOCKING: EntityDamageEvent_DamageModifier;
  readonly FREEZING: EntityDamageEvent_DamageModifier;
  readonly HARD_HAT: EntityDamageEvent_DamageModifier;
  readonly INVULNERABILITY_REDUCTION: EntityDamageEvent_DamageModifier;
  readonly MAGIC: EntityDamageEvent_DamageModifier;
  readonly RESISTANCE: EntityDamageEvent_DamageModifier;
  valueOf(arg0: string): EntityDamageEvent_DamageModifier;
  values(): Array<EntityDamageEvent_DamageModifier>;
}

/** JVM class org.bukkit.event.entity.EntityDeathEvent. */
export interface EntityDeathEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getDamageSource(): j_org_bukkit_damage.DamageSource;
  getDeathSound(): j_org_bukkit.Sound_2 | null;
  getDeathSoundCategory(): j_org_bukkit.SoundCategory | null;
  getDeathSoundPitch(): number;
  getDeathSoundVolume(): number;
  getDroppedExp(): number;
  getDrops(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReviveHealth(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setDeathSound(arg0: j_org_bukkit.Sound_2 | null): void;
  setDeathSoundCategory(arg0: j_org_bukkit.SoundCategory | null): void;
  setDeathSoundPitch(arg0: number): void;
  setDeathSoundVolume(arg0: number): void;
  setDroppedExp(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setReviveHealth(arg0: number): void;
  setShouldPlayDeathSound(arg0: boolean): void;
  shouldPlayDeathSound(): boolean;
}
export type EntityDeathEvent = EntityDeathEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityDeathEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>): EntityDeathEvent;
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number): EntityDeathEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityDismountEvent. */
export interface EntityDismountEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getDismounted(): j_org_bukkit_entity.Entity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancellable(): boolean;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityDismountEvent = EntityDismountEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityDismountEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity): EntityDismountEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: boolean): EntityDismountEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityDropItemEvent. */
export interface EntityDropItemEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItemDrop(): j_org_bukkit_entity.Item;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityDropItemEvent = EntityDropItemEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityDropItemEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Item): EntityDropItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityEnterBlockEvent. */
export interface EntityEnterBlockEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityEnterBlockEvent = EntityEnterBlockEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityEnterBlockEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.Block): EntityEnterBlockEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityEnterLoveModeEvent. */
export interface EntityEnterLoveModeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Animals;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHumanEntity(): j_org_bukkit_entity.HumanEntity | null;
  getTicksInLove(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setTicksInLove(arg0: number): void;
}
export type EntityEnterLoveModeEvent = EntityEnterLoveModeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityEnterLoveModeEventStatics {
  new(arg0: j_org_bukkit_entity.Animals, arg1: j_org_bukkit_entity.HumanEntity | null, arg2: number): EntityEnterLoveModeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM abstract org.bukkit.event.entity.EntityEvent. */
export interface EntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getEntity(): j_org_bukkit_entity.Entity;
  getEntityType(): j_org_bukkit_entity.EntityType;
}
export type EntityEvent = EntityEventMembers & j_org_bukkit_event.Event;
export interface EntityEventStatics {
}

/** JVM class org.bukkit.event.entity.EntityExhaustionEvent. */
export interface EntityExhaustionEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.HumanEntity;
  getExhaustion(): number;
  getExhaustionReason(): EntityExhaustionEvent_ExhaustionReason;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setExhaustion(arg0: number): void;
}
export type EntityExhaustionEvent = EntityExhaustionEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityExhaustionEventStatics {
  new(arg0: j_org_bukkit_entity.HumanEntity, arg1: EntityExhaustionEvent_ExhaustionReason, arg2: number): EntityExhaustionEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityExhaustionEvent$ExhaustionReason; constants are host handles, not strings. */
export type EntityExhaustionEvent_ExhaustionReason = JavaEnum<"org.bukkit.event.entity.EntityExhaustionEvent$ExhaustionReason", "ATTACK" | "BLOCK_MINED" | "CROUCH" | "DAMAGED" | "HUNGER_EFFECT" | "JUMP" | "JUMP_SPRINT" | "REGEN" | "SPRINT" | "SWIM" | "UNKNOWN" | "WALK" | "WALK_ON_WATER" | "WALK_UNDERWATER"> & EntityExhaustionEvent_ExhaustionReasonMembers;
export interface EntityExhaustionEvent_ExhaustionReasonMembers {
}
export interface EntityExhaustionEvent_ExhaustionReasonStatics {
  readonly ATTACK: EntityExhaustionEvent_ExhaustionReason;
  readonly BLOCK_MINED: EntityExhaustionEvent_ExhaustionReason;
  readonly CROUCH: EntityExhaustionEvent_ExhaustionReason;
  readonly DAMAGED: EntityExhaustionEvent_ExhaustionReason;
  readonly HUNGER_EFFECT: EntityExhaustionEvent_ExhaustionReason;
  readonly JUMP: EntityExhaustionEvent_ExhaustionReason;
  readonly JUMP_SPRINT: EntityExhaustionEvent_ExhaustionReason;
  readonly REGEN: EntityExhaustionEvent_ExhaustionReason;
  readonly SPRINT: EntityExhaustionEvent_ExhaustionReason;
  readonly SWIM: EntityExhaustionEvent_ExhaustionReason;
  readonly UNKNOWN: EntityExhaustionEvent_ExhaustionReason;
  readonly WALK: EntityExhaustionEvent_ExhaustionReason;
  readonly WALK_ON_WATER: EntityExhaustionEvent_ExhaustionReason;
  readonly WALK_UNDERWATER: EntityExhaustionEvent_ExhaustionReason;
  valueOf(arg0: string): EntityExhaustionEvent_ExhaustionReason;
  values(): Array<EntityExhaustionEvent_ExhaustionReason>;
}

/** JVM class org.bukkit.event.entity.EntityExplodeEvent. */
export interface EntityExplodeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  blockList(): JavaList<j_org_bukkit_block.Block>;
  getExplosionResult(): j_org_bukkit.ExplosionResult;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  getYield(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setYield(arg0: number): void;
}
export type EntityExplodeEvent = EntityExplodeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityExplodeEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: JavaList<j_org_bukkit_block.Block>, arg3: number, arg4: j_org_bukkit.ExplosionResult): EntityExplodeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityInteractEvent. */
export interface EntityInteractEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityInteractEvent = EntityInteractEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityInteractEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.Block): EntityInteractEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityKnockbackByEntityEvent. */
export interface EntityKnockbackByEntityEvent_2Members {
  readonly __javaSupertypes?: readonly [EntityKnockbackEvent_2];
  getSourceEntity(): j_org_bukkit_entity.Entity;
}
export type EntityKnockbackByEntityEvent_2 = EntityKnockbackByEntityEvent_2Members & EntityKnockbackEvent_2;
export interface EntityKnockbackByEntityEvent_2Statics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.Entity, arg2: EntityKnockbackEvent_KnockbackCause, arg3: number, arg4: j_org_bukkit_util.Vector, arg5: j_org_bukkit_util.Vector): EntityKnockbackByEntityEvent_2;
}

/** JVM class org.bukkit.event.entity.EntityKnockbackEvent. */
export interface EntityKnockbackEvent_2Members {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getCause(): EntityKnockbackEvent_KnockbackCause;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getFinalKnockback(): j_org_bukkit_util.Vector;
  getForce(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKnockback(): j_org_bukkit_util.Vector;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFinalKnockback(arg0: j_org_bukkit_util.Vector): void;
}
export type EntityKnockbackEvent_2 = EntityKnockbackEvent_2Members & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityKnockbackEvent_2Statics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: EntityKnockbackEvent_KnockbackCause, arg2: number, arg3: j_org_bukkit_util.Vector, arg4: j_org_bukkit_util.Vector): EntityKnockbackEvent_2;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityKnockbackEvent$KnockbackCause; constants are host handles, not strings. */
export type EntityKnockbackEvent_KnockbackCause = JavaEnum<"org.bukkit.event.entity.EntityKnockbackEvent$KnockbackCause", "DAMAGE" | "ENTITY_ATTACK" | "EXPLOSION" | "SHIELD_BLOCK" | "SWEEP_ATTACK" | "UNKNOWN"> & EntityKnockbackEvent_KnockbackCauseMembers;
export interface EntityKnockbackEvent_KnockbackCauseMembers {
}
export interface EntityKnockbackEvent_KnockbackCauseStatics {
  readonly DAMAGE: EntityKnockbackEvent_KnockbackCause;
  readonly ENTITY_ATTACK: EntityKnockbackEvent_KnockbackCause;
  readonly EXPLOSION: EntityKnockbackEvent_KnockbackCause;
  readonly SHIELD_BLOCK: EntityKnockbackEvent_KnockbackCause;
  readonly SWEEP_ATTACK: EntityKnockbackEvent_KnockbackCause;
  readonly UNKNOWN: EntityKnockbackEvent_KnockbackCause;
  valueOf(arg0: string): EntityKnockbackEvent_KnockbackCause;
  values(): Array<EntityKnockbackEvent_KnockbackCause>;
}

/** JVM class org.bukkit.event.entity.EntityMountEvent. */
export interface EntityMountEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMount(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityMountEvent = EntityMountEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityMountEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity): EntityMountEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPickupItemEvent. */
export interface EntityPickupItemEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_entity.Item;
  getRemaining(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityPickupItemEvent = EntityPickupItemEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityPickupItemEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.Item, arg2: number): EntityPickupItemEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPlaceEvent. */
export interface EntityPlaceEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBlock(): j_org_bukkit_block.Block;
  getBlockFace(): j_org_bukkit_block.BlockFace;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPlayer(): j_org_bukkit_entity.Player | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityPlaceEvent = EntityPlaceEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityPlaceEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Player | null, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace): EntityPlaceEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Player | null, arg2: j_org_bukkit_block.Block, arg3: j_org_bukkit_block.BlockFace, arg4: j_org_bukkit_inventory.EquipmentSlot): EntityPlaceEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPortalEnterEvent. */
export interface EntityPortalEnterEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  getPortalType(): j_org_bukkit.PortalType;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityPortalEnterEvent = EntityPortalEnterEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityPortalEnterEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location): EntityPortalEnterEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.PortalType): EntityPortalEnterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPortalEvent. */
export interface EntityPortalEventMembers {
  readonly __javaSupertypes?: readonly [EntityTeleportEvent];
  getCanCreatePortal(): boolean;
  getCreationRadius(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPortalType(): j_org_bukkit.PortalType;
  getSearchRadius(): number;
  getTo(): j_org_bukkit.Location | null;
  setCanCreatePortal(arg0: boolean): void;
  setCreationRadius(arg0: number): void;
  setSearchRadius(arg0: number): void;
  setTo(arg0: j_org_bukkit.Location | null): void;
}
export type EntityPortalEvent = EntityPortalEventMembers & EntityTeleportEvent;
export interface EntityPortalEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null): EntityPortalEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: number): EntityPortalEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: number, arg4: boolean, arg5: number): EntityPortalEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null, arg3: number, arg4: boolean, arg5: number, arg6: j_org_bukkit.PortalType): EntityPortalEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPortalExitEvent. */
export interface EntityPortalExitEventMembers {
  readonly __javaSupertypes?: readonly [EntityTeleportEvent];
  getAfter(): j_org_bukkit_util.Vector;
  getBefore(): j_org_bukkit_util.Vector;
  getHandlers(): j_org_bukkit_event.HandlerList;
  setAfter(arg0: j_org_bukkit_util.Vector): void;
}
export type EntityPortalExitEvent = EntityPortalExitEventMembers & EntityTeleportEvent;
export interface EntityPortalExitEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location, arg3: j_org_bukkit_util.Vector, arg4: j_org_bukkit_util.Vector): EntityPortalExitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPoseChangeEvent. */
export interface EntityPoseChangeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPose(): j_org_bukkit_entity.Pose;
}
export type EntityPoseChangeEvent = EntityPoseChangeEventMembers & EntityEvent;
export interface EntityPoseChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Pose): EntityPoseChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityPotionEffectEvent. */
export interface EntityPotionEffectEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getAction(): EntityPotionEffectEvent_Action;
  getCause(): EntityPotionEffectEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getModifiedType(): j_org_bukkit_potion.PotionEffectType;
  getNewEffect(): j_org_bukkit_potion.PotionEffect | null;
  getOldEffect(): j_org_bukkit_potion.PotionEffect | null;
  isCancelled(): boolean;
  isOverride(): boolean;
  setCancelled(arg0: boolean): void;
  setOverride(arg0: boolean): void;
}
export type EntityPotionEffectEvent = EntityPotionEffectEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityPotionEffectEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_potion.PotionEffect | null, arg2: j_org_bukkit_potion.PotionEffect | null, arg3: EntityPotionEffectEvent_Cause, arg4: EntityPotionEffectEvent_Action, arg5: boolean): EntityPotionEffectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityPotionEffectEvent$Action; constants are host handles, not strings. */
export type EntityPotionEffectEvent_Action = JavaEnum<"org.bukkit.event.entity.EntityPotionEffectEvent$Action", "ADDED" | "CHANGED" | "CLEARED" | "REMOVED"> & EntityPotionEffectEvent_ActionMembers;
export interface EntityPotionEffectEvent_ActionMembers {
}
export interface EntityPotionEffectEvent_ActionStatics {
  readonly ADDED: EntityPotionEffectEvent_Action;
  readonly CHANGED: EntityPotionEffectEvent_Action;
  readonly CLEARED: EntityPotionEffectEvent_Action;
  readonly REMOVED: EntityPotionEffectEvent_Action;
  valueOf(arg0: string): EntityPotionEffectEvent_Action;
  values(): Array<EntityPotionEffectEvent_Action>;
}

/** Live JVM enum org.bukkit.event.entity.EntityPotionEffectEvent$Cause; constants are host handles, not strings. */
export type EntityPotionEffectEvent_Cause = JavaEnum<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause", "AREA_EFFECT_CLOUD" | "ARROW" | "ATTACK" | "AXOLOTL" | "BEACON" | "COMMAND" | "CONDUIT" | "CONVERSION" | "DEATH" | "DOLPHIN" | "EXPIRATION" | "FOOD" | "ILLUSION" | "MILK" | "PATROL_CAPTAIN" | "PLUGIN" | "POTION_DRINK" | "POTION_SPLASH" | "SPIDER_SPAWN" | "TOTEM" | "TURTLE_HELMET" | "UNKNOWN" | "VILLAGER_TRADE" | "WARDEN" | "WITHER_ROSE"> & EntityPotionEffectEvent_CauseMembers;
export interface EntityPotionEffectEvent_CauseMembers {
}
export interface EntityPotionEffectEvent_CauseStatics {
  readonly AREA_EFFECT_CLOUD: EntityPotionEffectEvent_Cause;
  readonly ARROW: EntityPotionEffectEvent_Cause;
  readonly ATTACK: EntityPotionEffectEvent_Cause;
  readonly AXOLOTL: EntityPotionEffectEvent_Cause;
  readonly BEACON: EntityPotionEffectEvent_Cause;
  readonly COMMAND: EntityPotionEffectEvent_Cause;
  readonly CONDUIT: EntityPotionEffectEvent_Cause;
  readonly CONVERSION: EntityPotionEffectEvent_Cause;
  readonly DEATH: EntityPotionEffectEvent_Cause;
  readonly DOLPHIN: EntityPotionEffectEvent_Cause;
  readonly EXPIRATION: EntityPotionEffectEvent_Cause;
  readonly FOOD: EntityPotionEffectEvent_Cause;
  readonly ILLUSION: EntityPotionEffectEvent_Cause;
  readonly MILK: EntityPotionEffectEvent_Cause;
  readonly PATROL_CAPTAIN: EntityPotionEffectEvent_Cause;
  readonly PLUGIN: EntityPotionEffectEvent_Cause;
  readonly POTION_DRINK: EntityPotionEffectEvent_Cause;
  readonly POTION_SPLASH: EntityPotionEffectEvent_Cause;
  readonly SPIDER_SPAWN: EntityPotionEffectEvent_Cause;
  readonly TOTEM: EntityPotionEffectEvent_Cause;
  readonly TURTLE_HELMET: EntityPotionEffectEvent_Cause;
  readonly UNKNOWN: EntityPotionEffectEvent_Cause;
  readonly VILLAGER_TRADE: EntityPotionEffectEvent_Cause;
  readonly WARDEN: EntityPotionEffectEvent_Cause;
  readonly WITHER_ROSE: EntityPotionEffectEvent_Cause;
  valueOf(arg0: string): EntityPotionEffectEvent_Cause;
  values(): Array<EntityPotionEffectEvent_Cause>;
}

/** JVM class org.bukkit.event.entity.EntityRegainHealthEvent. */
export interface EntityRegainHealthEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getAmount(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRegainReason(): EntityRegainHealthEvent_RegainReason;
  isCancelled(): boolean;
  isFastRegen(): boolean;
  setAmount(arg0: number): void;
  setCancelled(arg0: boolean): void;
}
export type EntityRegainHealthEvent = EntityRegainHealthEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityRegainHealthEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: number, arg2: EntityRegainHealthEvent_RegainReason): EntityRegainHealthEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: number, arg2: EntityRegainHealthEvent_RegainReason, arg3: boolean): EntityRegainHealthEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason; constants are host handles, not strings. */
export type EntityRegainHealthEvent_RegainReason = JavaEnum<"org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason", "CUSTOM" | "EATING" | "ENDER_CRYSTAL" | "MAGIC" | "MAGIC_REGEN" | "REGEN" | "SATIATED" | "WITHER" | "WITHER_SPAWN"> & EntityRegainHealthEvent_RegainReasonMembers;
export interface EntityRegainHealthEvent_RegainReasonMembers {
}
export interface EntityRegainHealthEvent_RegainReasonStatics {
  readonly CUSTOM: EntityRegainHealthEvent_RegainReason;
  readonly EATING: EntityRegainHealthEvent_RegainReason;
  readonly ENDER_CRYSTAL: EntityRegainHealthEvent_RegainReason;
  readonly MAGIC: EntityRegainHealthEvent_RegainReason;
  readonly MAGIC_REGEN: EntityRegainHealthEvent_RegainReason;
  readonly REGEN: EntityRegainHealthEvent_RegainReason;
  readonly SATIATED: EntityRegainHealthEvent_RegainReason;
  readonly WITHER: EntityRegainHealthEvent_RegainReason;
  readonly WITHER_SPAWN: EntityRegainHealthEvent_RegainReason;
  valueOf(arg0: string): EntityRegainHealthEvent_RegainReason;
  values(): Array<EntityRegainHealthEvent_RegainReason>;
}

/** JVM class org.bukkit.event.entity.EntityRemoveEvent. */
export interface EntityRemoveEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent];
  getCause(): EntityRemoveEvent_Cause;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type EntityRemoveEvent = EntityRemoveEventMembers & EntityEvent;
export interface EntityRemoveEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityRemoveEvent_Cause): EntityRemoveEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityRemoveEvent$Cause; constants are host handles, not strings. */
export type EntityRemoveEvent_Cause = JavaEnum<"org.bukkit.event.entity.EntityRemoveEvent$Cause", "DEATH" | "DESPAWN" | "DISCARD" | "DROP" | "ENTER_BLOCK" | "EXPLODE" | "HIT" | "MERGE" | "OUT_OF_WORLD" | "PICKUP" | "PLAYER_QUIT" | "PLUGIN" | "TRANSFORMATION" | "UNLOAD"> & EntityRemoveEvent_CauseMembers;
export interface EntityRemoveEvent_CauseMembers {
}
export interface EntityRemoveEvent_CauseStatics {
  readonly DEATH: EntityRemoveEvent_Cause;
  readonly DESPAWN: EntityRemoveEvent_Cause;
  readonly DISCARD: EntityRemoveEvent_Cause;
  readonly DROP: EntityRemoveEvent_Cause;
  readonly ENTER_BLOCK: EntityRemoveEvent_Cause;
  readonly EXPLODE: EntityRemoveEvent_Cause;
  readonly HIT: EntityRemoveEvent_Cause;
  readonly MERGE: EntityRemoveEvent_Cause;
  readonly OUT_OF_WORLD: EntityRemoveEvent_Cause;
  readonly PICKUP: EntityRemoveEvent_Cause;
  readonly PLAYER_QUIT: EntityRemoveEvent_Cause;
  readonly PLUGIN: EntityRemoveEvent_Cause;
  readonly TRANSFORMATION: EntityRemoveEvent_Cause;
  readonly UNLOAD: EntityRemoveEvent_Cause;
  valueOf(arg0: string): EntityRemoveEvent_Cause;
  values(): Array<EntityRemoveEvent_Cause>;
}

/** JVM class org.bukkit.event.entity.EntityResurrectEvent. */
export interface EntityResurrectEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHand(): j_org_bukkit_inventory.EquipmentSlot | null;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityResurrectEvent = EntityResurrectEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityResurrectEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity): EntityResurrectEvent;
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_inventory.EquipmentSlot | null): EntityResurrectEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityShootBowEvent. */
export interface EntityShootBowEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getArrowItem(): j_org_bukkit_inventory.ItemStack | null;
  getBow(): j_org_bukkit_inventory.ItemStack | null;
  getConsumable(): j_org_bukkit_inventory.ItemStack | null;
  getConsumeArrow(): boolean;
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getForce(): number;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getProjectile(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setConsumeArrow(arg0: boolean): void;
  setConsumeItem(arg0: boolean): void;
  setProjectile(arg0: j_org_bukkit_entity.Entity): void;
  shouldConsumeItem(): boolean;
}
export type EntityShootBowEvent = EntityShootBowEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityShootBowEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_inventory.ItemStack | null, arg2: j_org_bukkit_entity.Entity, arg3: number): EntityShootBowEvent;
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_inventory.ItemStack | null, arg2: j_org_bukkit_inventory.ItemStack, arg3: j_org_bukkit_entity.Entity, arg4: number): EntityShootBowEvent;
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_inventory.ItemStack | null, arg2: j_org_bukkit_inventory.ItemStack | null, arg3: j_org_bukkit_entity.Entity, arg4: j_org_bukkit_inventory.EquipmentSlot, arg5: number, arg6: boolean): EntityShootBowEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntitySpawnEvent. */
export interface EntitySpawnEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntitySpawnEvent = EntitySpawnEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntitySpawnEventStatics {
  new(arg0: j_org_bukkit_entity.Entity): EntitySpawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntitySpellCastEvent. */
export interface EntitySpellCastEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Spellcaster;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getSpell(): j_org_bukkit_entity.Spellcaster_Spell;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntitySpellCastEvent = EntitySpellCastEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntitySpellCastEventStatics {
  new(arg0: j_org_bukkit_entity.Spellcaster, arg1: j_org_bukkit_entity.Spellcaster_Spell): EntitySpellCastEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityTameEvent. */
export interface EntityTameEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.LivingEntity;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOwner(): j_org_bukkit_entity.AnimalTamer;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityTameEvent = EntityTameEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityTameEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_entity.AnimalTamer): EntityTameEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityTargetEvent. */
export interface EntityTargetEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReason(): EntityTargetEvent_TargetReason;
  getTarget(): j_org_bukkit_entity.Entity | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setTarget(arg0: j_org_bukkit_entity.Entity | null): void;
}
export type EntityTargetEvent = EntityTargetEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityTargetEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity | null, arg2: EntityTargetEvent_TargetReason): EntityTargetEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityTargetEvent$TargetReason; constants are host handles, not strings. */
export type EntityTargetEvent_TargetReason = JavaEnum<"org.bukkit.event.entity.EntityTargetEvent$TargetReason", "CLOSEST_ENTITY" | "CLOSEST_PLAYER" | "COLLISION" | "CUSTOM" | "DEFEND_VILLAGE" | "FOLLOW_LEADER" | "FORGOT_TARGET" | "OWNER_ATTACKED_TARGET" | "PIG_ZOMBIE_TARGET" | "RANDOM_TARGET" | "REINFORCEMENT_TARGET" | "TARGET_ATTACKED_ENTITY" | "TARGET_ATTACKED_NEARBY_ENTITY" | "TARGET_ATTACKED_OWNER" | "TARGET_DIED" | "TARGET_INVALID" | "TARGET_OTHER_LEVEL" | "TEMPT" | "UNKNOWN"> & EntityTargetEvent_TargetReasonMembers;
export interface EntityTargetEvent_TargetReasonMembers {
}
export interface EntityTargetEvent_TargetReasonStatics {
  readonly CLOSEST_ENTITY: EntityTargetEvent_TargetReason;
  readonly CLOSEST_PLAYER: EntityTargetEvent_TargetReason;
  readonly COLLISION: EntityTargetEvent_TargetReason;
  readonly CUSTOM: EntityTargetEvent_TargetReason;
  readonly DEFEND_VILLAGE: EntityTargetEvent_TargetReason;
  readonly FOLLOW_LEADER: EntityTargetEvent_TargetReason;
  readonly FORGOT_TARGET: EntityTargetEvent_TargetReason;
  readonly OWNER_ATTACKED_TARGET: EntityTargetEvent_TargetReason;
  readonly PIG_ZOMBIE_TARGET: EntityTargetEvent_TargetReason;
  readonly RANDOM_TARGET: EntityTargetEvent_TargetReason;
  readonly REINFORCEMENT_TARGET: EntityTargetEvent_TargetReason;
  readonly TARGET_ATTACKED_ENTITY: EntityTargetEvent_TargetReason;
  readonly TARGET_ATTACKED_NEARBY_ENTITY: EntityTargetEvent_TargetReason;
  readonly TARGET_ATTACKED_OWNER: EntityTargetEvent_TargetReason;
  readonly TARGET_DIED: EntityTargetEvent_TargetReason;
  readonly TARGET_INVALID: EntityTargetEvent_TargetReason;
  readonly TARGET_OTHER_LEVEL: EntityTargetEvent_TargetReason;
  readonly TEMPT: EntityTargetEvent_TargetReason;
  readonly UNKNOWN: EntityTargetEvent_TargetReason;
  valueOf(arg0: string): EntityTargetEvent_TargetReason;
  values(): Array<EntityTargetEvent_TargetReason>;
}

/** JVM class org.bukkit.event.entity.EntityTargetLivingEntityEvent. */
export interface EntityTargetLivingEntityEventMembers {
  readonly __javaSupertypes?: readonly [EntityTargetEvent];
  getTarget(): j_org_bukkit_entity.LivingEntity | null;
  setTarget(arg0: j_org_bukkit_entity.Entity | null): void;
}
export type EntityTargetLivingEntityEvent = EntityTargetLivingEntityEventMembers & EntityTargetEvent;
export interface EntityTargetLivingEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.LivingEntity | null, arg2: EntityTargetEvent_TargetReason): EntityTargetLivingEntityEvent;
}

/** JVM class org.bukkit.event.entity.EntityTeleportEvent. */
export interface EntityTeleportEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getFrom(): j_org_bukkit.Location;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTo(): j_org_bukkit.Location | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFrom(arg0: j_org_bukkit.Location): void;
  setTo(arg0: j_org_bukkit.Location | null): void;
}
export type EntityTeleportEvent = EntityTeleportEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityTeleportEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit.Location, arg2: j_org_bukkit.Location | null): EntityTeleportEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityToggleGlideEvent. */
export interface EntityToggleGlideEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isGliding(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityToggleGlideEvent = EntityToggleGlideEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityToggleGlideEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: boolean): EntityToggleGlideEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityToggleSwimEvent. */
export interface EntityToggleSwimEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isSwimming(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityToggleSwimEvent = EntityToggleSwimEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityToggleSwimEventStatics {
  new(arg0: j_org_bukkit_entity.LivingEntity, arg1: boolean): EntityToggleSwimEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.EntityTransformEvent. */
export interface EntityTransformEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTransformReason(): EntityTransformEvent_TransformReason;
  getTransformedEntities(): JavaList<j_org_bukkit_entity.Entity>;
  getTransformedEntity(): j_org_bukkit_entity.Entity;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type EntityTransformEvent = EntityTransformEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityTransformEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: JavaList<j_org_bukkit_entity.Entity>, arg2: EntityTransformEvent_TransformReason): EntityTransformEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityTransformEvent$TransformReason; constants are host handles, not strings. */
export type EntityTransformEvent_TransformReason = JavaEnum<"org.bukkit.event.entity.EntityTransformEvent$TransformReason", "CURED" | "DROWNED" | "FROZEN" | "INFECTION" | "LIGHTNING" | "METAMORPHOSIS" | "PIGLIN_ZOMBIFIED" | "SHEARED" | "SPLIT" | "UNKNOWN"> & EntityTransformEvent_TransformReasonMembers;
export interface EntityTransformEvent_TransformReasonMembers {
}
export interface EntityTransformEvent_TransformReasonStatics {
  readonly CURED: EntityTransformEvent_TransformReason;
  readonly DROWNED: EntityTransformEvent_TransformReason;
  readonly FROZEN: EntityTransformEvent_TransformReason;
  readonly INFECTION: EntityTransformEvent_TransformReason;
  readonly LIGHTNING: EntityTransformEvent_TransformReason;
  readonly METAMORPHOSIS: EntityTransformEvent_TransformReason;
  readonly PIGLIN_ZOMBIFIED: EntityTransformEvent_TransformReason;
  readonly SHEARED: EntityTransformEvent_TransformReason;
  readonly SPLIT: EntityTransformEvent_TransformReason;
  readonly UNKNOWN: EntityTransformEvent_TransformReason;
  valueOf(arg0: string): EntityTransformEvent_TransformReason;
  values(): Array<EntityTransformEvent_TransformReason>;
}

/** JVM class org.bukkit.event.entity.EntityUnleashEvent. */
export interface EntityUnleashEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getReason(): EntityUnleashEvent_UnleashReason;
  isCancelled(): boolean;
  isDropLeash(): boolean;
  setCancelled(arg0: boolean): void;
  setDropLeash(arg0: boolean): void;
}
export type EntityUnleashEvent = EntityUnleashEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface EntityUnleashEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityUnleashEvent_UnleashReason): EntityUnleashEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: EntityUnleashEvent_UnleashReason, arg2: boolean): EntityUnleashEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.EntityUnleashEvent$UnleashReason; constants are host handles, not strings. */
export type EntityUnleashEvent_UnleashReason = JavaEnum<"org.bukkit.event.entity.EntityUnleashEvent$UnleashReason", "DISTANCE" | "HOLDER_GONE" | "PLAYER_UNLEASH" | "UNKNOWN"> & EntityUnleashEvent_UnleashReasonMembers;
export interface EntityUnleashEvent_UnleashReasonMembers {
}
export interface EntityUnleashEvent_UnleashReasonStatics {
  readonly DISTANCE: EntityUnleashEvent_UnleashReason;
  readonly HOLDER_GONE: EntityUnleashEvent_UnleashReason;
  readonly PLAYER_UNLEASH: EntityUnleashEvent_UnleashReason;
  readonly UNKNOWN: EntityUnleashEvent_UnleashReason;
  valueOf(arg0: string): EntityUnleashEvent_UnleashReason;
  values(): Array<EntityUnleashEvent_UnleashReason>;
}

/** JVM class org.bukkit.event.entity.ExpBottleEvent. */
export interface ExpBottleEventMembers {
  readonly __javaSupertypes?: readonly [ProjectileHitEvent];
  getEntity(): j_org_bukkit_entity.ThrownExpBottle;
  getExperience(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getShowEffect(): boolean;
  setExperience(arg0: number): void;
  setShowEffect(arg0: boolean): void;
}
export type ExpBottleEvent = ExpBottleEventMembers & ProjectileHitEvent;
export interface ExpBottleEventStatics {
  new(arg0: j_org_bukkit_entity.ThrownExpBottle, arg1: number): ExpBottleEvent;
  new(arg0: j_org_bukkit_entity.ThrownExpBottle, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_block.Block | null, arg3: j_org_bukkit_block.BlockFace | null, arg4: number): ExpBottleEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ExplosionPrimeEvent. */
export interface ExplosionPrimeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getFire(): boolean;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRadius(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFire(arg0: boolean): void;
  setRadius(arg0: number): void;
}
export type ExplosionPrimeEvent = ExplosionPrimeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface ExplosionPrimeEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: number, arg2: boolean): ExplosionPrimeEvent;
  new(arg0: j_org_bukkit_entity.Explosive): ExplosionPrimeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.FireworkExplodeEvent. */
export interface FireworkExplodeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Firework;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type FireworkExplodeEvent = FireworkExplodeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface FireworkExplodeEventStatics {
  new(arg0: j_org_bukkit_entity.Firework): FireworkExplodeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.FoodLevelChangeEvent. */
export interface FoodLevelChangeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.HumanEntity;
  getFoodLevel(): number;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getItem(): j_org_bukkit_inventory.ItemStack | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFoodLevel(arg0: number): void;
}
export type FoodLevelChangeEvent = FoodLevelChangeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface FoodLevelChangeEventStatics {
  new(arg0: j_org_bukkit_entity.HumanEntity, arg1: number): FoodLevelChangeEvent;
  new(arg0: j_org_bukkit_entity.HumanEntity, arg1: number, arg2: j_org_bukkit_inventory.ItemStack | null): FoodLevelChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.HorseJumpEvent. */
export interface HorseJumpEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.AbstractHorse;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getPower(): number;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setPower(arg0: number): void;
}
export type HorseJumpEvent = HorseJumpEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface HorseJumpEventStatics {
  new(arg0: j_org_bukkit_entity.AbstractHorse, arg1: number): HorseJumpEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ItemDespawnEvent. */
export interface ItemDespawnEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Item;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLocation(): j_org_bukkit.Location;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ItemDespawnEvent = ItemDespawnEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface ItemDespawnEventStatics {
  new(arg0: j_org_bukkit_entity.Item, arg1: j_org_bukkit.Location): ItemDespawnEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ItemMergeEvent. */
export interface ItemMergeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Item;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getTarget(): j_org_bukkit_entity.Item;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ItemMergeEvent = ItemMergeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface ItemMergeEventStatics {
  new(arg0: j_org_bukkit_entity.Item, arg1: j_org_bukkit_entity.Item): ItemMergeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ItemSpawnEvent. */
export interface ItemSpawnEventMembers {
  readonly __javaSupertypes?: readonly [EntitySpawnEvent];
  getEntity(): j_org_bukkit_entity.Item;
}
export type ItemSpawnEvent = ItemSpawnEventMembers & EntitySpawnEvent;
export interface ItemSpawnEventStatics {
  new(arg0: j_org_bukkit_entity.Item): ItemSpawnEvent;
  new(arg0: j_org_bukkit_entity.Item, arg1: j_org_bukkit.Location): ItemSpawnEvent;
}

/** JVM class org.bukkit.event.entity.LingeringPotionSplashEvent. */
export interface LingeringPotionSplashEventMembers {
  readonly __javaSupertypes?: readonly [ProjectileHitEvent, j_org_bukkit_event.Cancellable];
  allowsEmptyCreation(): boolean;
  allowsEmptyCreation(arg0: boolean): void;
  getAreaEffectCloud(): j_org_bukkit_entity.AreaEffectCloud;
  getEntity(): j_org_bukkit_entity.ThrownPotion;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type LingeringPotionSplashEvent = LingeringPotionSplashEventMembers & ProjectileHitEvent & j_org_bukkit_event.Cancellable;
export interface LingeringPotionSplashEventStatics {
  new(arg0: j_org_bukkit_entity.ThrownPotion, arg1: j_org_bukkit_entity.AreaEffectCloud): LingeringPotionSplashEvent;
  new(arg0: j_org_bukkit_entity.ThrownPotion, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_block.Block | null, arg3: j_org_bukkit_block.BlockFace | null, arg4: j_org_bukkit_entity.AreaEffectCloud): LingeringPotionSplashEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.PiglinBarterEvent. */
export interface PiglinBarterEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Piglin;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getInput(): j_org_bukkit_inventory.ItemStack;
  getOutcome(): JavaList<j_org_bukkit_inventory.ItemStack>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PiglinBarterEvent = PiglinBarterEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface PiglinBarterEventStatics {
  new(arg0: j_org_bukkit_entity.Piglin, arg1: j_org_bukkit_inventory.ItemStack, arg2: JavaList<j_org_bukkit_inventory.ItemStack>): PiglinBarterEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.PigZapEvent. */
export interface PigZapEventMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_event_entity.EntityZapEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Pig;
  getLightning(): j_org_bukkit_entity.LightningStrike;
  getPigZombie(): j_org_bukkit_entity.PigZombie;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PigZapEvent = PigZapEventMembers & j_com_destroystokyo_paper_event_entity.EntityZapEvent & j_org_bukkit_event.Cancellable;
export interface PigZapEventStatics {
  new(arg0: j_org_bukkit_entity.Pig, arg1: j_org_bukkit_entity.LightningStrike, arg2: j_org_bukkit_entity.PigZombie): PigZapEvent;
}

/** JVM class org.bukkit.event.entity.PigZombieAngerEvent. */
export interface PigZombieAngerEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.PigZombie;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getNewAnger(): number;
  getTarget(): j_org_bukkit_entity.Entity | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setNewAnger(arg0: number): void;
}
export type PigZombieAngerEvent = PigZombieAngerEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface PigZombieAngerEventStatics {
  new(arg0: j_org_bukkit_entity.PigZombie, arg1: j_org_bukkit_entity.Entity | null, arg2: number): PigZombieAngerEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.PlayerDeathEvent. */
export interface PlayerDeathEventMembers {
  readonly __javaSupertypes?: readonly [EntityDeathEvent];
  deathMessage(): j_net_kyori_adventure_text.Component | null;
  deathMessage(arg0: j_net_kyori_adventure_text.Component | null): void;
  deathScreenMessageOverride(): j_net_kyori_adventure_text.Component | null;
  deathScreenMessageOverride(arg0: j_net_kyori_adventure_text.Component | null): void;
  getDeathMessage(): string | null;
  getEntity(): j_org_bukkit_entity.Player;
  getItemsToKeep(): JavaList<j_org_bukkit_inventory.ItemStack>;
  getKeepInventory(): boolean;
  getKeepLevel(): boolean;
  getNewExp(): number;
  getNewLevel(): number;
  getNewTotalExp(): number;
  getPlayer(): j_org_bukkit_entity.Player;
  getShowDeathMessages(): boolean;
  setDeathMessage(arg0: string | null): void;
  setKeepInventory(arg0: boolean): void;
  setKeepLevel(arg0: boolean): void;
  setNewExp(arg0: number): void;
  setNewLevel(arg0: number): void;
  setNewTotalExp(arg0: number): void;
  setShouldDropExperience(arg0: boolean): void;
  setShowDeathMessages(arg0: boolean): void;
  shouldDropExperience(): boolean;
}
export type PlayerDeathEvent = PlayerDeathEventMembers & EntityDeathEvent;
export interface PlayerDeathEventStatics {
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: string | null): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: string | null, arg8: boolean): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: j_net_kyori_adventure_text.Component | null, arg8: boolean): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: j_net_kyori_adventure_text.Component | null, arg8: boolean, arg9: boolean): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: number, arg5: string | null): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: number, arg5: j_net_kyori_adventure_text.Component | null, arg6: boolean): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: string | null): PlayerDeathEvent;
  new(arg0: j_org_bukkit_entity.Player, arg1: j_org_bukkit_damage.DamageSource, arg2: JavaList<j_org_bukkit_inventory.ItemStack>, arg3: number, arg4: j_net_kyori_adventure_text.Component | null, arg5: boolean): PlayerDeathEvent;
}

/** JVM class org.bukkit.event.entity.PlayerLeashEntityEvent. */
export interface PlayerLeashEntityEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Entity;
  getHand(): j_org_bukkit_inventory.EquipmentSlot;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getLeashHolder(): j_org_bukkit_entity.Entity;
  getPlayer(): j_org_bukkit_entity.Player;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type PlayerLeashEntityEvent = PlayerLeashEntityEventMembers & j_org_bukkit_event.Event & j_org_bukkit_event.Cancellable;
export interface PlayerLeashEntityEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_entity.Player): PlayerLeashEntityEvent;
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_entity.Entity, arg2: j_org_bukkit_entity.Player, arg3: j_org_bukkit_inventory.EquipmentSlot): PlayerLeashEntityEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.PotionSplashEvent. */
export interface PotionSplashEventMembers {
  readonly __javaSupertypes?: readonly [ProjectileHitEvent, j_org_bukkit_event.Cancellable];
  getAffectedEntities(): JavaCollection<j_org_bukkit_entity.LivingEntity>;
  getEntity(): j_org_bukkit_entity.ThrownPotion;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getIntensity(arg0: j_org_bukkit_entity.LivingEntity): number;
  getPotion(): j_org_bukkit_entity.ThrownPotion;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setIntensity(arg0: j_org_bukkit_entity.LivingEntity, arg1: number): void;
}
export type PotionSplashEvent = PotionSplashEventMembers & ProjectileHitEvent & j_org_bukkit_event.Cancellable;
export interface PotionSplashEventStatics {
  new(arg0: j_org_bukkit_entity.ThrownPotion, arg1: JavaMap<j_org_bukkit_entity.LivingEntity, number>): PotionSplashEvent;
  new(arg0: j_org_bukkit_entity.ThrownPotion, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_block.Block | null, arg3: j_org_bukkit_block.BlockFace | null, arg4: JavaMap<j_org_bukkit_entity.LivingEntity, number>): PotionSplashEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ProjectileHitEvent. */
export interface ProjectileHitEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Projectile;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getHitBlock(): j_org_bukkit_block.Block | null;
  getHitBlockFace(): j_org_bukkit_block.BlockFace | null;
  getHitEntity(): j_org_bukkit_entity.Entity | null;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ProjectileHitEvent = ProjectileHitEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface ProjectileHitEventStatics {
  new(arg0: j_org_bukkit_entity.Projectile): ProjectileHitEvent;
  new(arg0: j_org_bukkit_entity.Projectile, arg1: j_org_bukkit_block.Block | null): ProjectileHitEvent;
  new(arg0: j_org_bukkit_entity.Projectile, arg1: j_org_bukkit_entity.Entity | null): ProjectileHitEvent;
  new(arg0: j_org_bukkit_entity.Projectile, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_block.Block | null): ProjectileHitEvent;
  new(arg0: j_org_bukkit_entity.Projectile, arg1: j_org_bukkit_entity.Entity | null, arg2: j_org_bukkit_block.Block | null, arg3: j_org_bukkit_block.BlockFace | null): ProjectileHitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.ProjectileLaunchEvent. */
export interface ProjectileLaunchEventMembers {
  readonly __javaSupertypes?: readonly [EntitySpawnEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Projectile;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type ProjectileLaunchEvent = ProjectileLaunchEventMembers & EntitySpawnEvent & j_org_bukkit_event.Cancellable;
export interface ProjectileLaunchEventStatics {
  new(arg0: j_org_bukkit_entity.Entity): ProjectileLaunchEvent;
}

/** JVM class org.bukkit.event.entity.SheepDyeWoolEvent. */
export interface SheepDyeWoolEventMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_event_entity.EntityDyeEvent];
  getEntity(): j_org_bukkit_entity.Sheep;
}
export type SheepDyeWoolEvent = SheepDyeWoolEventMembers & j_io_papermc_paper_event_entity.EntityDyeEvent;
export interface SheepDyeWoolEventStatics {
  new(arg0: j_org_bukkit_entity.Sheep, arg1: j_org_bukkit.DyeColor): SheepDyeWoolEvent;
  new(arg0: j_org_bukkit_entity.Sheep, arg1: j_org_bukkit.DyeColor, arg2: j_org_bukkit_entity.Player | null): SheepDyeWoolEvent;
}

/** JVM class org.bukkit.event.entity.SheepRegrowWoolEvent. */
export interface SheepRegrowWoolEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Sheep;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
}
export type SheepRegrowWoolEvent = SheepRegrowWoolEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface SheepRegrowWoolEventStatics {
  new(arg0: j_org_bukkit_entity.Sheep): SheepRegrowWoolEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.SlimeSplitEvent. */
export interface SlimeSplitEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getCount(): number;
  getEntity(): j_org_bukkit_entity.Slime;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setCount(arg0: number): void;
}
export type SlimeSplitEvent = SlimeSplitEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface SlimeSplitEventStatics {
  new(arg0: j_org_bukkit_entity.Slime, arg1: number): SlimeSplitEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.SpawnerSpawnEvent. */
export interface SpawnerSpawnEventMembers {
  readonly __javaSupertypes?: readonly [EntitySpawnEvent];
  getSpawner(): j_org_bukkit_block.CreatureSpawner | null;
}
export type SpawnerSpawnEvent = SpawnerSpawnEventMembers & EntitySpawnEvent;
export interface SpawnerSpawnEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.CreatureSpawner | null): SpawnerSpawnEvent;
}

/** JVM class org.bukkit.event.entity.StriderTemperatureChangeEvent. */
export interface StriderTemperatureChangeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Strider;
  getHandlers(): j_org_bukkit_event.HandlerList;
  isCancelled(): boolean;
  isShivering(): boolean;
  setCancelled(arg0: boolean): void;
}
export type StriderTemperatureChangeEvent = StriderTemperatureChangeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface StriderTemperatureChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Strider, arg1: boolean): StriderTemperatureChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.TrialSpawnerSpawnEvent. */
export interface TrialSpawnerSpawnEventMembers {
  readonly __javaSupertypes?: readonly [EntitySpawnEvent];
  getTrialSpawner(): j_org_bukkit_block.TrialSpawner;
}
export type TrialSpawnerSpawnEvent = TrialSpawnerSpawnEventMembers & EntitySpawnEvent;
export interface TrialSpawnerSpawnEventStatics {
  new(arg0: j_org_bukkit_entity.Entity, arg1: j_org_bukkit_block.TrialSpawner): TrialSpawnerSpawnEvent;
}

/** JVM class org.bukkit.event.entity.VillagerAcquireTradeEvent. */
export interface VillagerAcquireTradeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.AbstractVillager;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipe(): j_org_bukkit_inventory.MerchantRecipe;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setRecipe(arg0: j_org_bukkit_inventory.MerchantRecipe): void;
}
export type VillagerAcquireTradeEvent = VillagerAcquireTradeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface VillagerAcquireTradeEventStatics {
  new(arg0: j_org_bukkit_entity.AbstractVillager, arg1: j_org_bukkit_inventory.MerchantRecipe): VillagerAcquireTradeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class org.bukkit.event.entity.VillagerCareerChangeEvent. */
export interface VillagerCareerChangeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getEntity(): j_org_bukkit_entity.Villager;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getProfession(): j_org_bukkit_entity.Villager_Profession;
  getReason(): VillagerCareerChangeEvent_ChangeReason;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setProfession(arg0: j_org_bukkit_entity.Villager_Profession): void;
}
export type VillagerCareerChangeEvent = VillagerCareerChangeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface VillagerCareerChangeEventStatics {
  new(arg0: j_org_bukkit_entity.Villager, arg1: j_org_bukkit_entity.Villager_Profession, arg2: VillagerCareerChangeEvent_ChangeReason): VillagerCareerChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** Live JVM enum org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason; constants are host handles, not strings. */
export type VillagerCareerChangeEvent_ChangeReason = JavaEnum<"org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason", "EMPLOYED" | "LOSING_JOB"> & VillagerCareerChangeEvent_ChangeReasonMembers;
export interface VillagerCareerChangeEvent_ChangeReasonMembers {
}
export interface VillagerCareerChangeEvent_ChangeReasonStatics {
  readonly EMPLOYED: VillagerCareerChangeEvent_ChangeReason;
  readonly LOSING_JOB: VillagerCareerChangeEvent_ChangeReason;
  valueOf(arg0: string): VillagerCareerChangeEvent_ChangeReason;
  values(): Array<VillagerCareerChangeEvent_ChangeReason>;
}

/** JVM class org.bukkit.event.entity.VillagerReplenishTradeEvent. */
export interface VillagerReplenishTradeEventMembers {
  readonly __javaSupertypes?: readonly [EntityEvent, j_org_bukkit_event.Cancellable];
  getBonus(): number;
  getEntity(): j_org_bukkit_entity.AbstractVillager;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getRecipe(): j_org_bukkit_inventory.MerchantRecipe;
  isCancelled(): boolean;
  setBonus(arg0: number): void;
  setCancelled(arg0: boolean): void;
  setRecipe(arg0: j_org_bukkit_inventory.MerchantRecipe): void;
}
export type VillagerReplenishTradeEvent = VillagerReplenishTradeEventMembers & EntityEvent & j_org_bukkit_event.Cancellable;
export interface VillagerReplenishTradeEventStatics {
  new(arg0: j_org_bukkit_entity.AbstractVillager, arg1: j_org_bukkit_inventory.MerchantRecipe): VillagerReplenishTradeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
