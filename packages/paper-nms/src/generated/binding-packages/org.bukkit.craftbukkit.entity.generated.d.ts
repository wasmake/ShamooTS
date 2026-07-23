// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ambient from './net.minecraft.world.entity.ambient.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_allay from './net.minecraft.world.entity.animal.allay.generated.js';
import type * as j_net_minecraft_world_entity_animal_armadillo from './net.minecraft.world.entity.animal.armadillo.generated.js';
import type * as j_net_minecraft_world_entity_animal_axolotl from './net.minecraft.world.entity.animal.axolotl.generated.js';
import type * as j_net_minecraft_world_entity_animal_camel from './net.minecraft.world.entity.animal.camel.generated.js';
import type * as j_net_minecraft_world_entity_animal_frog from './net.minecraft.world.entity.animal.frog.generated.js';
import type * as j_net_minecraft_world_entity_animal_goat from './net.minecraft.world.entity.animal.goat.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_animal_sheep from './net.minecraft.world.entity.animal.sheep.generated.js';
import type * as j_net_minecraft_world_entity_animal_sniffer from './net.minecraft.world.entity.animal.sniffer.generated.js';
import type * as j_net_minecraft_world_entity_animal_wolf from './net.minecraft.world.entity.animal.wolf.generated.js';
import type * as j_net_minecraft_world_entity_boss from './net.minecraft.world.entity.boss.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon from './net.minecraft.world.entity.boss.enderdragon.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon_phases from './net.minecraft.world.entity.boss.enderdragon.phases.generated.js';
import type * as j_net_minecraft_world_entity_boss_wither from './net.minecraft.world.entity.boss.wither.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_monster_breeze from './net.minecraft.world.entity.monster.breeze.generated.js';
import type * as j_net_minecraft_world_entity_monster_creaking from './net.minecraft.world.entity.monster.creaking.generated.js';
import type * as j_net_minecraft_world_entity_monster_hoglin from './net.minecraft.world.entity.monster.hoglin.generated.js';
import type * as j_net_minecraft_world_entity_monster_piglin from './net.minecraft.world.entity.monster.piglin.generated.js';
import type * as j_net_minecraft_world_entity_monster_warden from './net.minecraft.world.entity.monster.warden.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_entity_projectile_windcharge from './net.minecraft.world.entity.projectile.windcharge.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_entity_vehicle from './net.minecraft.world.entity.vehicle.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';
import type * as j_org_bukkit_craftbukkit_persistence from './org.bukkit.craftbukkit.persistence.generated.js';
import type * as j_org_bukkit_craftbukkit_scoreboard from './org.bukkit.craftbukkit.scoreboard.generated.js';
import type * as j_org_bukkit_craftbukkit_spawner from './org.bukkit.craftbukkit.spawner.generated.js';

/** JVM abstract org.bukkit.craftbukkit.entity.AbstractProjectile. */
export interface AbstractProjectileMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.Projectile">];
  canHitEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  doesBounce(): boolean;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID">;
  getShooter(): JavaOpaque<"org.bukkit.projectiles.ProjectileSource">;
  hasBeenShot(): boolean;
  hasLeftShooter(): boolean;
  hitEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  hitEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.util.Vector">): void;
  setBounce(arg0: boolean): void;
  setHasBeenShot(arg0: boolean): void;
  setHasLeftShooter(arg0: boolean): void;
  setShooter(arg0: JavaOpaque<"org.bukkit.projectiles.ProjectileSource">): void;
}
export type AbstractProjectile = AbstractProjectileMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.Projectile">;
export interface AbstractProjectileStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Entity): AbstractProjectile;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftAbstractArrow. */
export interface CraftAbstractArrowMembers {
  readonly __javaSupertypes?: readonly [AbstractProjectile, JavaOpaque<"org.bukkit.entity.AbstractArrow">];
  getAttachedBlock(): JavaOpaque<"org.bukkit.block.Block">;
  getAttachedBlocks(): JavaList<JavaOpaque<"org.bukkit.block.Block">>;
  getDamage(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractArrow;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHitSound(): JavaOpaque<"org.bukkit.Sound">;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemStack(): j_org_bukkit_craftbukkit_inventory.CraftItemStack;
  getItemStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getKnockbackStrength(): number;
  getLifetimeTicks(): number;
  getPickupStatus(): JavaOpaque<"org.bukkit.entity.AbstractArrow$PickupStatus">;
  getPierceLevel(): number;
  getWeapon(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  isCritical(): boolean;
  isInBlock(): boolean;
  isShotFromCrossbow(): boolean;
  setCritical(arg0: boolean): void;
  setDamage(arg0: number): void;
  setHitSound(arg0: JavaOpaque<"org.bukkit.Sound">): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setKnockbackStrength(arg0: number): void;
  setLifetimeTicks(arg0: number): void;
  setNoPhysics(arg0: boolean): void;
  setPickupStatus(arg0: JavaOpaque<"org.bukkit.entity.AbstractArrow$PickupStatus">): void;
  setPierceLevel(arg0: number): void;
  setShooter(arg0: JavaOpaque<"org.bukkit.projectiles.ProjectileSource">, arg1: boolean): void;
  setShotFromCrossbow(arg0: boolean): void;
  setTicksLived(arg0: number): void;
  setWeapon(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftAbstractArrow = CraftAbstractArrowMembers & AbstractProjectile & JavaOpaque<"org.bukkit.entity.AbstractArrow">;
export interface CraftAbstractArrowStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.AbstractArrow): CraftAbstractArrow;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftAbstractCow. */
export interface CraftAbstractCowMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.AbstractCow">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractCow;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
}
export type CraftAbstractCow = CraftAbstractCowMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.AbstractCow">;
export interface CraftAbstractCowStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.AbstractCow): CraftAbstractCow;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftAbstractHorse. */
export interface CraftAbstractHorseMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.AbstractHorse">];
  getDomestication(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  getInventory(): JavaOpaque<"org.bukkit.inventory.AbstractHorseInventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getJumpStrength(): number;
  getMaxDomestication(): number;
  getOwner(): JavaOpaque<"org.bukkit.entity.AnimalTamer">;
  getOwnerUUID(): JavaOpaque<"java.util.UUID">;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID">;
  isEating(): boolean;
  isEatingGrass(): boolean;
  isEatingHaystack(): boolean;
  isRearing(): boolean;
  isTamed(): boolean;
  setDomestication(arg0: number): void;
  setEating(arg0: boolean): void;
  setEatingGrass(arg0: boolean): void;
  setEatingHaystack(arg0: boolean): void;
  setJumpStrength(arg0: number): void;
  setMaxDomestication(arg0: number): void;
  setOwner(arg0: JavaOpaque<"org.bukkit.entity.AnimalTamer">): void;
  setOwnerUUID(arg0: JavaOpaque<"java.util.UUID">): void;
  setRearing(arg0: boolean): void;
  setTamed(arg0: boolean): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Horse$Variant">): void;
}
export type CraftAbstractHorse = CraftAbstractHorseMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.AbstractHorse">;
export interface CraftAbstractHorseStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.AbstractHorse): CraftAbstractHorse;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftAbstractSkeleton. */
export interface CraftAbstractSkeletonMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.AbstractSkeleton">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.AbstractSkeleton]>];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractSkeleton;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  setShouldBurnInDay(arg0: boolean): void;
  setSkeletonType(arg0: JavaOpaque<"org.bukkit.entity.Skeleton$SkeletonType">): void;
  shouldBurnInDay(): boolean;
}
export type CraftAbstractSkeleton = CraftAbstractSkeletonMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.AbstractSkeleton"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.AbstractSkeleton]>;
export interface CraftAbstractSkeletonStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.AbstractSkeleton): CraftAbstractSkeleton;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftAbstractVillager. */
export interface CraftAbstractVillagerMembers {
  readonly __javaSupertypes?: readonly [CraftAgeable, j_org_bukkit_craftbukkit_inventory.CraftMerchant, JavaOpaque<"org.bukkit.entity.AbstractVillager">, JavaOpaque<"org.bukkit.inventory.InventoryHolder">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_npc.AbstractVillager;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getMerchant(): j_net_minecraft_world_item_trading.Merchant;
  resetOffers(): void;
}
export type CraftAbstractVillager = CraftAbstractVillagerMembers & CraftAgeable & j_org_bukkit_craftbukkit_inventory.CraftMerchant & JavaOpaque<"org.bukkit.entity.AbstractVillager"> & JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
export interface CraftAbstractVillagerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_npc.AbstractVillager): CraftAbstractVillager;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftAbstractWindCharge. */
export interface CraftAbstractWindChargeMembers {
  readonly __javaSupertypes?: readonly [CraftFireball, JavaOpaque<"org.bukkit.entity.AbstractWindCharge">];
  explode(): void;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile_windcharge.AbstractWindCharge;
}
export type CraftAbstractWindCharge = CraftAbstractWindChargeMembers & CraftFireball & JavaOpaque<"org.bukkit.entity.AbstractWindCharge">;
export interface CraftAbstractWindChargeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile_windcharge.AbstractWindCharge): CraftAbstractWindCharge;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftAgeable. */
export interface CraftAgeableMembers {
  readonly __javaSupertypes?: readonly [CraftCreature, JavaOpaque<"org.bukkit.entity.Ageable">];
  canBreed(): boolean;
  getAge(): number;
  getAgeLock(): boolean;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  isAdult(): boolean;
  setAdult(): void;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
  setBaby(): void;
  setBreed(arg0: boolean): void;
}
export type CraftAgeable = CraftAgeableMembers & CraftCreature & JavaOpaque<"org.bukkit.entity.Ageable">;
export interface CraftAgeableStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.AgeableMob): CraftAgeable;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftAllay. */
export interface CraftAllayMembers {
  readonly __javaSupertypes?: readonly [CraftCreature, JavaOpaque<"org.bukkit.entity.Allay">];
  canDuplicate(): boolean;
  duplicateAllay(): JavaOpaque<"org.bukkit.entity.Allay">;
  getDuplicationCooldown(): bigint;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal_allay.Allay;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getJukebox(): JavaOpaque<"org.bukkit.Location">;
  isDancing(): boolean;
  resetDuplicationCooldown(): void;
  setCanDuplicate(arg0: boolean): void;
  setDuplicationCooldown(arg0: bigint): void;
  startDancing(): void;
  startDancing(arg0: JavaOpaque<"org.bukkit.Location">): void;
  stopDancing(): void;
}
export type CraftAllay = CraftAllayMembers & CraftCreature & JavaOpaque<"org.bukkit.entity.Allay">;
export interface CraftAllayStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_allay.Allay): CraftAllay;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftAmbient. */
export interface CraftAmbientMembers {
  readonly __javaSupertypes?: readonly [CraftMob, JavaOpaque<"org.bukkit.entity.Ambient">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_ambient.AmbientCreature;
}
export type CraftAmbient = CraftAmbientMembers & CraftMob & JavaOpaque<"org.bukkit.entity.Ambient">;
export interface CraftAmbientStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_ambient.AmbientCreature): CraftAmbient;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftAnimals. */
export interface CraftAnimalsMembers {
  readonly __javaSupertypes?: readonly [CraftAgeable, JavaOpaque<"org.bukkit.entity.Animals">];
  getBreedCause(): JavaOpaque<"java.util.UUID">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getLoveModeTicks(): number;
  isBreedItem(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  isBreedItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  isLoveMode(): boolean;
  setBreedCause(arg0: JavaOpaque<"java.util.UUID">): void;
  setLoveModeTicks(arg0: number): void;
}
export type CraftAnimals = CraftAnimalsMembers & CraftAgeable & JavaOpaque<"org.bukkit.entity.Animals">;
export interface CraftAnimalsStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Animal): CraftAnimals;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftAreaEffectCloud. */
export interface CraftAreaEffectCloudMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.AreaEffectCloud">];
  addCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">, arg1: boolean): boolean;
  clearCustomEffects(): void;
  getBasePotionData(): JavaOpaque<"org.bukkit.potion.PotionData">;
  getBasePotionType(): JavaOpaque<"org.bukkit.potion.PotionType">;
  getColor(): JavaOpaque<"org.bukkit.Color">;
  getCustomEffects(): JavaList<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  getDuration(): number;
  getDurationOnUse(): number;
  getHandle(): j_net_minecraft_world_entity.AreaEffectCloud;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID">;
  getParticle(): JavaOpaque<"org.bukkit.Particle">;
  getRadius(): number;
  getRadiusOnUse(): number;
  getRadiusPerTick(): number;
  getReapplicationDelay(): number;
  getSource(): JavaOpaque<"org.bukkit.projectiles.ProjectileSource">;
  getWaitTime(): number;
  hasCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  hasCustomEffects(): boolean;
  removeCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  setBasePotionData(arg0: JavaOpaque<"org.bukkit.potion.PotionData">): void;
  setBasePotionType(arg0: JavaOpaque<"org.bukkit.potion.PotionType">): void;
  setColor(arg0: JavaOpaque<"org.bukkit.Color">): void;
  setDuration(arg0: number): void;
  setDurationOnUse(arg0: number): void;
  setOwnerUniqueId(arg0: JavaOpaque<"java.util.UUID">): void;
  setParticle(arg0: JavaOpaque<"org.bukkit.Particle">): void;
  setParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: T): void;
  setRadius(arg0: number): void;
  setRadiusOnUse(arg0: number): void;
  setRadiusPerTick(arg0: number): void;
  setReapplicationDelay(arg0: number): void;
  setSource(arg0: JavaOpaque<"org.bukkit.projectiles.ProjectileSource">): void;
  setWaitTime(arg0: number): void;
}
export type CraftAreaEffectCloud = CraftAreaEffectCloudMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.AreaEffectCloud">;
export interface CraftAreaEffectCloudStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.AreaEffectCloud): CraftAreaEffectCloud;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftArmadillo. */
export interface CraftArmadilloMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Armadillo">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_armadillo.Armadillo;
  getState(): JavaOpaque<"org.bukkit.entity.Armadillo$State">;
  rollOut(): void;
  rollUp(): void;
}
export type CraftArmadillo = CraftArmadilloMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Armadillo">;
export interface CraftArmadilloStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_armadillo.Armadillo): CraftArmadillo;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftArmorStand. */
export interface CraftArmorStandMembers {
  readonly __javaSupertypes?: readonly [CraftLivingEntity, JavaOpaque<"org.bukkit.entity.ArmorStand">];
  addDisabledSlots(...arg0: Array<JavaOpaque<"org.bukkit.inventory.EquipmentSlot">>): void;
  addEquipmentLock(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.entity.ArmorStand$LockType">): void;
  canMove(): boolean;
  canTick(): boolean;
  getBodyPose(): JavaOpaque<"org.bukkit.util.EulerAngle">;
  getBodyRotations(): JavaOpaque<"io.papermc.paper.math.Rotations">;
  getBoots(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getChestplate(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getDisabledSlots(): JavaSet<JavaOpaque<"org.bukkit.inventory.EquipmentSlot">>;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.ArmorStand;
  getHeadPose(): JavaOpaque<"org.bukkit.util.EulerAngle">;
  getHeadRotations(): JavaOpaque<"io.papermc.paper.math.Rotations">;
  getHelmet(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLeftArmPose(): JavaOpaque<"org.bukkit.util.EulerAngle">;
  getLeftArmRotations(): JavaOpaque<"io.papermc.paper.math.Rotations">;
  getLeftLegPose(): JavaOpaque<"org.bukkit.util.EulerAngle">;
  getLeftLegRotations(): JavaOpaque<"io.papermc.paper.math.Rotations">;
  getLeggings(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getRightArmPose(): JavaOpaque<"org.bukkit.util.EulerAngle">;
  getRightArmRotations(): JavaOpaque<"io.papermc.paper.math.Rotations">;
  getRightLegPose(): JavaOpaque<"org.bukkit.util.EulerAngle">;
  getRightLegRotations(): JavaOpaque<"io.papermc.paper.math.Rotations">;
  hasArms(): boolean;
  hasBasePlate(): boolean;
  hasEquipmentLock(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.entity.ArmorStand$LockType">): boolean;
  isMarker(): boolean;
  isSlotDisabled(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  isSmall(): boolean;
  isVisible(): boolean;
  removeDisabledSlots(...arg0: Array<JavaOpaque<"org.bukkit.inventory.EquipmentSlot">>): void;
  removeEquipmentLock(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.entity.ArmorStand$LockType">): void;
  setArms(arg0: boolean): void;
  setBasePlate(arg0: boolean): void;
  setBodyPose(arg0: JavaOpaque<"org.bukkit.util.EulerAngle">): void;
  setBodyRotations(arg0: JavaOpaque<"io.papermc.paper.math.Rotations">): void;
  setBoots(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setCanMove(arg0: boolean): void;
  setCanTick(arg0: boolean): void;
  setChestplate(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setDisabledSlots(...arg0: Array<JavaOpaque<"org.bukkit.inventory.EquipmentSlot">>): void;
  setGravity(arg0: boolean): void;
  setHeadPose(arg0: JavaOpaque<"org.bukkit.util.EulerAngle">): void;
  setHeadRotations(arg0: JavaOpaque<"io.papermc.paper.math.Rotations">): void;
  setHelmet(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setInvisible(arg0: boolean): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemInHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLeftArmPose(arg0: JavaOpaque<"org.bukkit.util.EulerAngle">): void;
  setLeftArmRotations(arg0: JavaOpaque<"io.papermc.paper.math.Rotations">): void;
  setLeftLegPose(arg0: JavaOpaque<"org.bukkit.util.EulerAngle">): void;
  setLeftLegRotations(arg0: JavaOpaque<"io.papermc.paper.math.Rotations">): void;
  setLeggings(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setMarker(arg0: boolean): void;
  setRightArmPose(arg0: JavaOpaque<"org.bukkit.util.EulerAngle">): void;
  setRightArmRotations(arg0: JavaOpaque<"io.papermc.paper.math.Rotations">): void;
  setRightLegPose(arg0: JavaOpaque<"org.bukkit.util.EulerAngle">): void;
  setRightLegRotations(arg0: JavaOpaque<"io.papermc.paper.math.Rotations">): void;
  setSmall(arg0: boolean): void;
  setVisible(arg0: boolean): void;
}
export type CraftArmorStand = CraftArmorStandMembers & CraftLivingEntity & JavaOpaque<"org.bukkit.entity.ArmorStand">;
export interface CraftArmorStandStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.ArmorStand): CraftArmorStand;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftArrow. */
export interface CraftArrowMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractArrow, JavaOpaque<"org.bukkit.entity.Arrow">];
  addCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">, arg1: boolean): boolean;
  clearCustomEffects(): void;
  getBasePotionData(): JavaOpaque<"org.bukkit.potion.PotionData">;
  getBasePotionType(): JavaOpaque<"org.bukkit.potion.PotionType">;
  getColor(): JavaOpaque<"org.bukkit.Color">;
  getCustomEffects(): JavaList<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractArrow;
  getHandle(): j_net_minecraft_world_entity_projectile.Arrow;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  hasCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  hasCustomEffects(): boolean;
  removeCustomEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  setBasePotionData(arg0: JavaOpaque<"org.bukkit.potion.PotionData">): void;
  setBasePotionType(arg0: JavaOpaque<"org.bukkit.potion.PotionType">): void;
  setColor(arg0: JavaOpaque<"org.bukkit.Color">): void;
}
export type CraftArrow = CraftArrowMembers & CraftAbstractArrow & JavaOpaque<"org.bukkit.entity.Arrow">;
export interface CraftArrowStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.Arrow): CraftArrow;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftAxolotl. */
export interface CraftAxolotlMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"io.papermc.paper.entity.PaperBucketable">, JavaOpaque<"org.bukkit.entity.Axolotl">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal_axolotl.Axolotl;
  getVariant(): JavaOpaque<"org.bukkit.entity.Axolotl$Variant">;
  isPlayingDead(): boolean;
  setPlayingDead(arg0: boolean): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Axolotl$Variant">): void;
}
export type CraftAxolotl = CraftAxolotlMembers & CraftAnimals & JavaOpaque<"io.papermc.paper.entity.PaperBucketable"> & JavaOpaque<"org.bukkit.entity.Axolotl">;
export interface CraftAxolotlStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_axolotl.Axolotl): CraftAxolotl;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBat. */
export interface CraftBatMembers {
  readonly __javaSupertypes?: readonly [CraftAmbient, JavaOpaque<"org.bukkit.entity.Bat">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_ambient.AmbientCreature;
  getHandle(): j_net_minecraft_world_entity_ambient.Bat;
  getTargetLocation(): JavaOpaque<"org.bukkit.Location">;
  isAwake(): boolean;
  setAwake(arg0: boolean): void;
  setTargetLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftBat = CraftBatMembers & CraftAmbient & JavaOpaque<"org.bukkit.entity.Bat">;
export interface CraftBatStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_ambient.Bat): CraftBat;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBee. */
export interface CraftBeeMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Bee">];
  getAnger(): number;
  getCannotEnterHiveTicks(): number;
  getCropsGrownSincePollination(): number;
  getFlower(): JavaOpaque<"org.bukkit.Location">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Bee;
  getHive(): JavaOpaque<"org.bukkit.Location">;
  getRollingOverride(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  getTicksSincePollination(): number;
  getTimeSinceSting(): number;
  hasNectar(): boolean;
  hasStung(): boolean;
  isRolling(): boolean;
  setAnger(arg0: number): void;
  setCannotEnterHiveTicks(arg0: number): void;
  setCropsGrownSincePollination(arg0: number): void;
  setFlower(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setHasNectar(arg0: boolean): void;
  setHasStung(arg0: boolean): void;
  setHive(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setRollingOverride(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setTicksSincePollination(arg0: number): void;
  setTimeSinceSting(arg0: number): void;
}
export type CraftBee = CraftBeeMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Bee">;
export interface CraftBeeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Bee): CraftBee;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBlaze. */
export interface CraftBlazeMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Blaze">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Blaze;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
}
export type CraftBlaze = CraftBlazeMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Blaze">;
export interface CraftBlazeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Blaze): CraftBlaze;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBlockAttachedEntity. */
export interface CraftBlockAttachedEntityMembers {
  readonly __javaSupertypes?: readonly [CraftEntity];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_decoration.BlockAttachedEntity;
}
export type CraftBlockAttachedEntity = CraftBlockAttachedEntityMembers & CraftEntity;
export interface CraftBlockAttachedEntityStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.BlockAttachedEntity): CraftBlockAttachedEntity;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBlockDisplay. */
export interface CraftBlockDisplayMembers {
  readonly __javaSupertypes?: readonly [CraftDisplay, JavaOpaque<"org.bukkit.entity.BlockDisplay">];
  getBlock(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getHandle(): j_net_minecraft_world_entity.Display_BlockDisplay;
  getHandle(): j_net_minecraft_world_entity.Display;
  getHandle(): j_net_minecraft_world_entity.Entity;
  setBlock(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
}
export type CraftBlockDisplay = CraftBlockDisplayMembers & CraftDisplay & JavaOpaque<"org.bukkit.entity.BlockDisplay">;
export interface CraftBlockDisplayStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Display_BlockDisplay): CraftBlockDisplay;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftBoat. */
export interface CraftBoatMembers {
  readonly __javaSupertypes?: readonly [CraftVehicle, JavaOpaque<"io.papermc.paper.entity.PaperLeashable">, JavaOpaque<"org.bukkit.entity.Boat">];
  getBoatMaterial(): JavaOpaque<"org.bukkit.Material">;
  getBoatType(): JavaOpaque<"org.bukkit.entity.Boat$Type">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractBoat;
  getMaxSpeed(): number;
  getOccupiedDeceleration(): number;
  getStatus(): JavaOpaque<"org.bukkit.entity.Boat$Status">;
  getUnoccupiedDeceleration(): number;
  getWoodType(): JavaOpaque<"org.bukkit.TreeSpecies">;
  getWorkOnLand(): boolean;
  setBoatType(arg0: JavaOpaque<"org.bukkit.entity.Boat$Type">): void;
  setMaxSpeed(arg0: number): void;
  setOccupiedDeceleration(arg0: number): void;
  setUnoccupiedDeceleration(arg0: number): void;
  setWoodType(arg0: JavaOpaque<"org.bukkit.TreeSpecies">): void;
  setWorkOnLand(arg0: boolean): void;
}
export type CraftBoat = CraftBoatMembers & CraftVehicle & JavaOpaque<"io.papermc.paper.entity.PaperLeashable"> & JavaOpaque<"org.bukkit.entity.Boat">;
export interface CraftBoatStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.AbstractBoat): CraftBoat;
  boatStatusFromNms(arg0: j_net_minecraft_world_entity_vehicle.AbstractBoat_Status): JavaOpaque<"org.bukkit.entity.Boat$Status">;
  boatTypeFromNms(arg0: j_net_minecraft_world_entity.EntityType<object>): JavaOpaque<"org.bukkit.entity.Boat$Type">;
  getTreeSpecies(arg0: j_net_minecraft_world_entity.EntityType<object>): JavaOpaque<"org.bukkit.TreeSpecies">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBogged. */
export interface CraftBoggedMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractSkeleton, JavaOpaque<"io.papermc.paper.entity.PaperShearable">, JavaOpaque<"org.bukkit.entity.Bogged">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.Shearable;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractSkeleton;
  getHandle(): j_net_minecraft_world_entity_monster.Bogged;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getSkeletonType(): JavaOpaque<"org.bukkit.entity.Skeleton$SkeletonType">;
  isSheared(): boolean;
  setSheared(arg0: boolean): void;
}
export type CraftBogged = CraftBoggedMembers & CraftAbstractSkeleton & JavaOpaque<"io.papermc.paper.entity.PaperShearable"> & JavaOpaque<"org.bukkit.entity.Bogged">;
export interface CraftBoggedStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Bogged): CraftBogged;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBreeze. */
export interface CraftBreezeMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Breeze">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster_breeze.Breeze;
  setTarget(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
}
export type CraftBreeze = CraftBreezeMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Breeze">;
export interface CraftBreezeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_breeze.Breeze): CraftBreeze;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftBreezeWindCharge. */
export interface CraftBreezeWindChargeMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractWindCharge, JavaOpaque<"org.bukkit.entity.BreezeWindCharge">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile_windcharge.AbstractWindCharge;
  getHandle(): j_net_minecraft_world_entity_projectile_windcharge.BreezeWindCharge;
}
export type CraftBreezeWindCharge = CraftBreezeWindChargeMembers & CraftAbstractWindCharge & JavaOpaque<"org.bukkit.entity.BreezeWindCharge">;
export interface CraftBreezeWindChargeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile_windcharge.BreezeWindCharge): CraftBreezeWindCharge;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCamel. */
export interface CraftCamelMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractHorse, JavaOpaque<"org.bukkit.entity.Camel">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_camel.Camel;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
  isDashing(): boolean;
  isSitting(): boolean;
  setDashing(arg0: boolean): void;
  setSitting(arg0: boolean): void;
}
export type CraftCamel = CraftCamelMembers & CraftAbstractHorse & JavaOpaque<"org.bukkit.entity.Camel">;
export interface CraftCamelStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_camel.Camel): CraftCamel;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCat. */
export interface CraftCatMembers {
  readonly __javaSupertypes?: readonly [CraftTameableAnimal, JavaOpaque<"org.bukkit.entity.Cat">];
  getCatType(): JavaOpaque<"org.bukkit.entity.Cat$Type">;
  getCollarColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.TamableAnimal;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Cat;
  isHeadUp(): boolean;
  isLyingDown(): boolean;
  setCatType(arg0: JavaOpaque<"org.bukkit.entity.Cat$Type">): void;
  setCollarColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setHeadUp(arg0: boolean): void;
  setLyingDown(arg0: boolean): void;
}
export type CraftCat = CraftCatMembers & CraftTameableAnimal & JavaOpaque<"org.bukkit.entity.Cat">;
export interface CraftCatStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Cat): CraftCat;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCat$CraftType. */
export interface CraftCat_CraftTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Cat$Type">, j_net_minecraft_world_entity_animal.CatVariant]>, JavaOpaque<"org.bukkit.entity.Cat$Type">];
}
export type CraftCat_CraftType = CraftCat_CraftTypeMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Cat$Type">, j_net_minecraft_world_entity_animal.CatVariant]> & JavaOpaque<"org.bukkit.entity.Cat$Type">;
export interface CraftCat_CraftTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CatVariant>): CraftCat_CraftType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Cat$Type">): j_net_minecraft_world_entity_animal.CatVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Cat$Type">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CatVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CatVariant>): JavaOpaque<"org.bukkit.entity.Cat$Type">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal.CatVariant): JavaOpaque<"org.bukkit.entity.Cat$Type">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCaveSpider. */
export interface CraftCaveSpiderMembers {
  readonly __javaSupertypes?: readonly [CraftSpider, JavaOpaque<"org.bukkit.entity.CaveSpider">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.CaveSpider;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Spider;
}
export type CraftCaveSpider = CraftCaveSpiderMembers & CraftSpider & JavaOpaque<"org.bukkit.entity.CaveSpider">;
export interface CraftCaveSpiderStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.CaveSpider): CraftCaveSpider;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftChestBoat. */
export interface CraftChestBoatMembers {
  readonly __javaSupertypes?: readonly [CraftBoat, JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory">, JavaOpaque<"org.bukkit.entity.ChestBoat">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractBoat;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractChestBoat;
  getHandle(): j_net_minecraft_world_entity_vehicle.ContainerEntity;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftChestBoat = CraftChestBoatMembers & CraftBoat & JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory"> & JavaOpaque<"org.bukkit.entity.ChestBoat">;
export interface CraftChestBoatStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.AbstractChestBoat): CraftChestBoat;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftChestedHorse. */
export interface CraftChestedHorseMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractHorse, JavaOpaque<"org.bukkit.entity.ChestedHorse">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractChestedHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  isCarryingChest(): boolean;
  setCarryingChest(arg0: boolean): void;
}
export type CraftChestedHorse = CraftChestedHorseMembers & CraftAbstractHorse & JavaOpaque<"org.bukkit.entity.ChestedHorse">;
export interface CraftChestedHorseStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.AbstractChestedHorse): CraftChestedHorse;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftChicken. */
export interface CraftChickenMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Chicken">];
  getEggLayTime(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Chicken;
  getVariant(): JavaOpaque<"org.bukkit.entity.Chicken$Variant">;
  isChickenJockey(): boolean;
  setEggLayTime(arg0: number): void;
  setIsChickenJockey(arg0: boolean): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Chicken$Variant">): void;
}
export type CraftChicken = CraftChickenMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Chicken">;
export interface CraftChickenStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Chicken): CraftChicken;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftChicken$CraftVariant. */
export interface CraftChicken_CraftVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal.ChickenVariant]>, JavaOpaque<"org.bukkit.entity.Chicken$Variant">];
}
export type CraftChicken_CraftVariant = CraftChicken_CraftVariantMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal.ChickenVariant]> & JavaOpaque<"org.bukkit.entity.Chicken$Variant">;
export interface CraftChicken_CraftVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.ChickenVariant>): CraftChicken_CraftVariant;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Chicken$Variant">): j_net_minecraft_world_entity_animal.ChickenVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Chicken$Variant">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.ChickenVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.ChickenVariant>): JavaOpaque<"org.bukkit.entity.Chicken$Variant">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal.ChickenVariant): JavaOpaque<"org.bukkit.entity.Chicken$Variant">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCod. */
export interface CraftCodMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.entity.PaperSchoolableFish">, JavaOpaque<"org.bukkit.entity.Cod">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractFish;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractSchoolingFish;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal.Cod;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
}
export type CraftCod = CraftCodMembers & JavaOpaque<"io.papermc.paper.entity.PaperSchoolableFish"> & JavaOpaque<"org.bukkit.entity.Cod">;
export interface CraftCodStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Cod): CraftCod;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftComplexPart. */
export interface CraftComplexPartMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.ComplexEntityPart">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_boss.EnderDragonPart;
  getLastDamageCause(): JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">;
  getParent(): JavaOpaque<"org.bukkit.entity.ComplexLivingEntity">;
  isValid(): boolean;
  setLastDamageCause(arg0: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): void;
}
export type CraftComplexPart = CraftComplexPartMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.ComplexEntityPart">;
export interface CraftComplexPartStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_boss.EnderDragonPart): CraftComplexPart;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCow. */
export interface CraftCowMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractCow, JavaOpaque<"org.bukkit.entity.Cow">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractCow;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Cow;
  getVariant(): JavaOpaque<"org.bukkit.entity.Cow$Variant">;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Cow$Variant">): void;
}
export type CraftCow = CraftCowMembers & CraftAbstractCow & JavaOpaque<"org.bukkit.entity.Cow">;
export interface CraftCowStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Cow): CraftCow;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCow$CraftVariant. */
export interface CraftCow_CraftVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal.CowVariant]>, JavaOpaque<"org.bukkit.entity.Cow$Variant">];
}
export type CraftCow_CraftVariant = CraftCow_CraftVariantMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal.CowVariant]> & JavaOpaque<"org.bukkit.entity.Cow$Variant">;
export interface CraftCow_CraftVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CowVariant>): CraftCow_CraftVariant;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Cow$Variant">): j_net_minecraft_world_entity_animal.CowVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Cow$Variant">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CowVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CowVariant>): JavaOpaque<"org.bukkit.entity.Cow$Variant">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal.CowVariant): JavaOpaque<"org.bukkit.entity.Cow$Variant">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCreaking. */
export interface CraftCreakingMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Creaking">];
  activate(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  deactivate(): void;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster_creaking.Creaking;
  getHome(): JavaOpaque<"org.bukkit.Location"> | null;
  isActive(): boolean;
}
export type CraftCreaking = CraftCreakingMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Creaking">;
export interface CraftCreakingStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_creaking.Creaking): CraftCreaking;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCreature. */
export interface CraftCreatureMembers {
  readonly __javaSupertypes?: readonly [CraftMob, JavaOpaque<"org.bukkit.entity.Creature">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
}
export type CraftCreature = CraftCreatureMembers & CraftMob & JavaOpaque<"org.bukkit.entity.Creature">;
export interface CraftCreatureStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.PathfinderMob): CraftCreature;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftCreeper. */
export interface CraftCreeperMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Creeper">];
  explode(): void;
  getExplosionRadius(): number;
  getFuseTicks(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Creeper;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getIgniter(): JavaOpaque<"org.bukkit.entity.Entity">;
  getMaxFuseTicks(): number;
  ignite(): void;
  ignite(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  isIgnited(): boolean;
  isPowered(): boolean;
  setExplosionRadius(arg0: number): void;
  setFuseTicks(arg0: number): void;
  setIgnited(arg0: boolean): void;
  setMaxFuseTicks(arg0: number): void;
  setPowered(arg0: boolean): void;
}
export type CraftCreeper = CraftCreeperMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Creeper">;
export interface CraftCreeperStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Creeper): CraftCreeper;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftDisplay. */
export interface CraftDisplayMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.Display">];
  getBillboard(): JavaOpaque<"org.bukkit.entity.Display$Billboard">;
  getBrightness(): JavaOpaque<"org.bukkit.entity.Display$Brightness">;
  getDisplayHeight(): number;
  getDisplayWidth(): number;
  getGlowColorOverride(): JavaOpaque<"org.bukkit.Color">;
  getHandle(): j_net_minecraft_world_entity.Display;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getInterpolationDelay(): number;
  getInterpolationDuration(): number;
  getShadowRadius(): number;
  getShadowStrength(): number;
  getTeleportDuration(): number;
  getTransformation(): JavaOpaque<"org.bukkit.util.Transformation">;
  getViewRange(): number;
  setBillboard(arg0: JavaOpaque<"org.bukkit.entity.Display$Billboard">): void;
  setBrightness(arg0: JavaOpaque<"org.bukkit.entity.Display$Brightness">): void;
  setDisplayHeight(arg0: number): void;
  setDisplayWidth(arg0: number): void;
  setGlowColorOverride(arg0: JavaOpaque<"org.bukkit.Color">): void;
  setInterpolationDelay(arg0: number): void;
  setInterpolationDuration(arg0: number): void;
  setShadowRadius(arg0: number): void;
  setShadowStrength(arg0: number): void;
  setTeleportDuration(arg0: number): void;
  setTransformation(arg0: JavaOpaque<"org.bukkit.util.Transformation">): void;
  setTransformationMatrix(arg0: JavaOpaque<"org.joml.Matrix4f">): void;
  setViewRange(arg0: number): void;
}
export type CraftDisplay = CraftDisplayMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.Display">;
export interface CraftDisplayStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Display): CraftDisplay;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftDolphin. */
export interface CraftDolphinMembers {
  readonly __javaSupertypes?: readonly [CraftAgeable, JavaOpaque<"org.bukkit.entity.Dolphin">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Dolphin;
  getMoistness(): number;
  getTreasureLocation(): JavaOpaque<"org.bukkit.Location">;
  hasFish(): boolean;
  setHasFish(arg0: boolean): void;
  setMoistness(arg0: number): void;
  setTreasureLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftDolphin = CraftDolphinMembers & CraftAgeable & JavaOpaque<"org.bukkit.entity.Dolphin">;
export interface CraftDolphinStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Dolphin): CraftDolphin;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftDonkey. */
export interface CraftDonkeyMembers {
  readonly __javaSupertypes?: readonly [CraftChestedHorse, JavaOpaque<"org.bukkit.entity.Donkey">];
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
}
export type CraftDonkey = CraftDonkeyMembers & CraftChestedHorse & JavaOpaque<"org.bukkit.entity.Donkey">;
export interface CraftDonkeyStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.Donkey): CraftDonkey;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftDragonFireball. */
export interface CraftDragonFireballMembers {
  readonly __javaSupertypes?: readonly [CraftFireball, JavaOpaque<"org.bukkit.entity.DragonFireball">];
}
export type CraftDragonFireball = CraftDragonFireballMembers & CraftFireball & JavaOpaque<"org.bukkit.entity.DragonFireball">;
export interface CraftDragonFireballStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.DragonFireball): CraftDragonFireball;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftDrowned. */
export interface CraftDrownedMembers {
  readonly __javaSupertypes?: readonly [CraftZombie, JavaOpaque<"org.bukkit.entity.Drowned">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Drowned]>];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Drowned;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Zombie;
}
export type CraftDrowned = CraftDrownedMembers & CraftZombie & JavaOpaque<"org.bukkit.entity.Drowned"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Drowned]>;
export interface CraftDrownedStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Drowned): CraftDrowned;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEgg. */
export interface CraftEggMembers {
  readonly __javaSupertypes?: readonly [CraftThrowableProjectile, JavaOpaque<"org.bukkit.entity.Egg">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrownEgg;
}
export type CraftEgg = CraftEggMembers & CraftThrowableProjectile & JavaOpaque<"org.bukkit.entity.Egg">;
export interface CraftEggStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrownEgg): CraftEgg;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftElderGuardian. */
export interface CraftElderGuardianMembers {
  readonly __javaSupertypes?: readonly [CraftGuardian, JavaOpaque<"org.bukkit.entity.ElderGuardian">];
  isElder(): boolean;
}
export type CraftElderGuardian = CraftElderGuardianMembers & CraftGuardian & JavaOpaque<"org.bukkit.entity.ElderGuardian">;
export interface CraftElderGuardianStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.ElderGuardian): CraftElderGuardian;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEnderCrystal. */
export interface CraftEnderCrystalMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.EnderCrystal">];
  getBeamTarget(): JavaOpaque<"org.bukkit.Location">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_boss_enderdragon.EndCrystal;
  isShowingBottom(): boolean;
  setBeamTarget(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setShowingBottom(arg0: boolean): void;
}
export type CraftEnderCrystal = CraftEnderCrystalMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.EnderCrystal">;
export interface CraftEnderCrystalStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_boss_enderdragon.EndCrystal): CraftEnderCrystal;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEnderDragon. */
export interface CraftEnderDragonMembers {
  readonly __javaSupertypes?: readonly [CraftMob, CraftEnemy, JavaOpaque<"org.bukkit.entity.EnderDragon">];
  getBossBar(): JavaOpaque<"org.bukkit.boss.BossBar">;
  getDeathAnimationTicks(): number;
  getDragonBattle(): JavaOpaque<"org.bukkit.boss.DragonBattle">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_boss_enderdragon.EnderDragon;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getParts(): JavaSet<JavaOpaque<"org.bukkit.entity.ComplexEntityPart">>;
  getPhase(): JavaOpaque<"org.bukkit.entity.EnderDragon$Phase">;
  getPodium(): JavaOpaque<"org.bukkit.Location">;
  setPhase(arg0: JavaOpaque<"org.bukkit.entity.EnderDragon$Phase">): void;
  setPodium(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftEnderDragon = CraftEnderDragonMembers & CraftMob & CraftEnemy & JavaOpaque<"org.bukkit.entity.EnderDragon">;
export interface CraftEnderDragonStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): CraftEnderDragon;
  getBukkitPhase(arg0: j_net_minecraft_world_entity_boss_enderdragon_phases.EnderDragonPhase): JavaOpaque<"org.bukkit.entity.EnderDragon$Phase">;
  getMinecraftPhase(arg0: JavaOpaque<"org.bukkit.entity.EnderDragon$Phase">): j_net_minecraft_world_entity_boss_enderdragon_phases.EnderDragonPhase;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEnderDragonPart. */
export interface CraftEnderDragonPartMembers {
  readonly __javaSupertypes?: readonly [CraftComplexPart, JavaOpaque<"org.bukkit.entity.EnderDragonPart">];
  damage(arg0: number): void;
  damage(arg0: number, arg1: JavaOpaque<"org.bukkit.damage.DamageSource">): void;
  damage(arg0: number, arg1: JavaOpaque<"org.bukkit.entity.Entity">): void;
  getAbsorptionAmount(): number;
  getHealth(): number;
  getMaxHealth(): number;
  getParent(): JavaOpaque<"org.bukkit.entity.ComplexLivingEntity">;
  getParent(): JavaOpaque<"org.bukkit.entity.EnderDragon">;
  heal(arg0: number, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason">): void;
  resetMaxHealth(): void;
  setAbsorptionAmount(arg0: number): void;
  setHealth(arg0: number): void;
  setMaxHealth(arg0: number): void;
}
export type CraftEnderDragonPart = CraftEnderDragonPartMembers & CraftComplexPart & JavaOpaque<"org.bukkit.entity.EnderDragonPart">;
export interface CraftEnderDragonPartStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_boss.EnderDragonPart): CraftEnderDragonPart;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEnderman. */
export interface CraftEndermanMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Enderman">];
  getCarriedBlock(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getCarriedMaterial(): JavaOpaque<"org.bukkit.material.MaterialData">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.EnderMan;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  hasBeenStaredAt(): boolean;
  isScreaming(): boolean;
  setCarriedBlock(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setCarriedMaterial(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): void;
  setHasBeenStaredAt(arg0: boolean): void;
  setScreaming(arg0: boolean): void;
  teleport(): boolean;
  teleportRandomly(): boolean;
  teleportTowards(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
}
export type CraftEnderman = CraftEndermanMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Enderman">;
export interface CraftEndermanStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.EnderMan): CraftEnderman;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEndermite. */
export interface CraftEndermiteMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Endermite">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Endermite;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getLifetimeTicks(): number;
  isPlayerSpawned(): boolean;
  setLifetimeTicks(arg0: number): void;
  setPlayerSpawned(arg0: boolean): void;
}
export type CraftEndermite = CraftEndermiteMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Endermite">;
export interface CraftEndermiteStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Endermite): CraftEndermite;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEnderPearl. */
export interface CraftEnderPearlMembers {
  readonly __javaSupertypes?: readonly [CraftThrowableProjectile, JavaOpaque<"org.bukkit.entity.EnderPearl">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrownEnderpearl;
}
export type CraftEnderPearl = CraftEnderPearlMembers & CraftThrowableProjectile & JavaOpaque<"org.bukkit.entity.EnderPearl">;
export interface CraftEnderPearlStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrownEnderpearl): CraftEnderPearl;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEnderSignal. */
export interface CraftEnderSignalMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.EnderSignal">];
  getDespawnTimer(): number;
  getDropItem(): boolean;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.EyeOfEnder;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getTargetLocation(): JavaOpaque<"org.bukkit.Location">;
  setDespawnTimer(arg0: number): void;
  setDropItem(arg0: boolean): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setTargetLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setTargetLocation(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): void;
}
export type CraftEnderSignal = CraftEnderSignalMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.EnderSignal">;
export interface CraftEnderSignalStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.EyeOfEnder): CraftEnderSignal;
}

/** JVM interface org.bukkit.craftbukkit.entity.CraftEnemy. */
export interface CraftEnemyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.entity.Enemy">];
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
}
export type CraftEnemy = CraftEnemyMembers & JavaOpaque<"org.bukkit.entity.Enemy">;
export interface CraftEnemyStatics {
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftEntity. */
export interface CraftEntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.entity.Entity">];
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean, arg3: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addPassenger(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  addScoreboardTag(arg0: string): boolean;
  broadcastHurtAnimation(arg0: JavaCollection<JavaOpaque<"org.bukkit.entity.Player">>): void;
  collidesAt(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  copy(): JavaOpaque<"org.bukkit.entity.Entity">;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.entity.Entity">;
  createSnapshot(): JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
  customName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  customName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  eject(): boolean;
  entity: j_net_minecraft_world_entity.Entity;
  equals(arg0: object): boolean;
  fromMobSpawner(): boolean;
  getAsString(): string;
  getBoundingBox(): JavaOpaque<"org.bukkit.util.BoundingBox">;
  getCustomName(): string;
  getData<T>(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType$Valued", [T]>): T | null;
  getDataOrDefault<T>(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType$Valued", [T]>, arg1: T | null): T | null;
  getEffectivePermissions(): JavaSet<JavaOpaque<"org.bukkit.permissions.PermissionAttachmentInfo">>;
  getEntityId(): number;
  getEntitySpawnReason(): JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getFallDistance(): number;
  getFireTicks(): number;
  getFreezeTicks(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandleRaw(): j_net_minecraft_world_entity.Entity;
  getHeight(): number;
  getLastDamageCause(): JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getLocation(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.Location">;
  getMaxFireTicks(): number;
  getMaxFreezeTicks(): number;
  getMetadata(arg0: string): JavaList<JavaOpaque<"org.bukkit.metadata.MetadataValue">>;
  getName(): string;
  getNearbyEntities(arg0: number, arg1: number, arg2: number): JavaList<JavaOpaque<"org.bukkit.entity.Entity">>;
  getOrigin(): JavaOpaque<"org.bukkit.Location">;
  getPassenger(): JavaOpaque<"org.bukkit.entity.Entity">;
  getPassengers(): JavaList<JavaOpaque<"org.bukkit.entity.Entity">>;
  getPersistentDataContainer(): JavaOpaque<"io.papermc.paper.persistence.PersistentDataContainerView">;
  getPersistentDataContainer(): j_org_bukkit_craftbukkit_persistence.CraftPersistentDataContainer;
  getPersistentDataContainer(): JavaOpaque<"org.bukkit.persistence.PersistentDataContainer">;
  getPickItemStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getPistonMoveReaction(): JavaOpaque<"org.bukkit.block.PistonMoveReaction">;
  getPitch(): number;
  getPortalCooldown(): number;
  getPose(): JavaOpaque<"org.bukkit.entity.Pose">;
  getScheduler(): JavaOpaque<"io.papermc.paper.threadedregions.scheduler.EntityScheduler">;
  getScoreboardEntryName(): string;
  getScoreboardTags(): JavaSet<string>;
  getServer(): JavaOpaque<"org.bukkit.Server">;
  getSpawnCategory(): JavaOpaque<"org.bukkit.entity.SpawnCategory">;
  getSwimHighSpeedSplashSound(): JavaOpaque<"org.bukkit.Sound">;
  getSwimSound(): JavaOpaque<"org.bukkit.Sound">;
  getSwimSplashSound(): JavaOpaque<"org.bukkit.Sound">;
  getTicksLived(): number;
  getTrackedBy(): JavaSet<JavaOpaque<"org.bukkit.entity.Player">>;
  getTrackedPlayers(): JavaSet<JavaOpaque<"org.bukkit.entity.Player">>;
  getType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  getVehicle(): JavaOpaque<"org.bukkit.entity.Entity">;
  getVelocity(): JavaOpaque<"org.bukkit.util.Vector">;
  getVisualFire(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  getWidth(): number;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  getX(): number;
  getY(): number;
  getYaw(): number;
  getZ(): number;
  hasData(arg0: JavaOpaque<"io.papermc.paper.datacomponent.DataComponentType">): boolean;
  hasFixedPose(): boolean;
  hasGravity(): boolean;
  hasMetadata(arg0: string): boolean;
  hasNoPhysics(): boolean;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  hashCode(): number;
  isCustomNameVisible(): boolean;
  isDead(): boolean;
  isEmpty(): boolean;
  isFreezeTickingLocked(): boolean;
  isFrozen(): boolean;
  isGlowing(): boolean;
  isInLava(): boolean;
  isInPowderedSnow(): boolean;
  isInRain(): boolean;
  isInWater(): boolean;
  isInWorld(): boolean;
  isInsideVehicle(): boolean;
  isInvisible(): boolean;
  isInvulnerable(): boolean;
  isOnGround(): boolean;
  isOp(): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isPersistent(): boolean;
  isSilent(): boolean;
  isSneaking(): boolean;
  isTicking(): boolean;
  isTrackedBy(arg0: JavaOpaque<"org.bukkit.entity.Player">): boolean;
  isUnderWater(): boolean;
  isValid(): boolean;
  isVisibleByDefault(): boolean;
  isVisualFire(): boolean;
  leaveVehicle(): boolean;
  lockFreezeTicks(arg0: boolean): void;
  lookAt(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"io.papermc.paper.entity.LookAnchor">): void;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  playEffect(arg0: JavaOpaque<"org.bukkit.EntityEffect">): void;
  pointers(): JavaOpaque<"net.kyori.adventure.pointer.Pointers">;
  readBukkitValues(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recalculatePermissions(): void;
  remove(): void;
  removeAttachment(arg0: JavaOpaque<"org.bukkit.permissions.PermissionAttachment">): void;
  removeMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  removePassenger(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  removeScoreboardTag(arg0: string): boolean;
  save(): j_net_minecraft_nbt.CompoundTag;
  sendMessage(arg0: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, arg1: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<string>): void;
  sendMessage(...arg0: Array<string>): void;
  readonly server: j_org_bukkit_craftbukkit.CraftServer;
  setCustomName(arg0: string): void;
  setCustomNameVisible(arg0: boolean): void;
  setFallDistance(arg0: number): void;
  setFireTicks(arg0: number): void;
  setFreezeTicks(arg0: number): void;
  setGlowing(arg0: boolean): void;
  setGravity(arg0: boolean): void;
  setHandle(arg0: j_net_minecraft_world_entity.Entity): void;
  setInvisible(arg0: boolean): void;
  setInvulnerable(arg0: boolean): void;
  setLastDamageCause(arg0: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): void;
  setMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.metadata.MetadataValue">): void;
  setNoPhysics(arg0: boolean): void;
  setOp(arg0: boolean): void;
  setPassenger(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  setPersistent(arg0: boolean): void;
  setPortalCooldown(arg0: number): void;
  setPose(arg0: JavaOpaque<"org.bukkit.entity.Pose">, arg1: boolean): void;
  setRotation(arg0: number, arg1: number): void;
  setSilent(arg0: boolean): void;
  setSneaking(arg0: boolean): void;
  setTicksLived(arg0: number): void;
  setVelocity(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setVisibleByDefault(arg0: boolean): void;
  setVisualFire(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setVisualFire(arg0: boolean): void;
  spawnAt(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): boolean;
  spigot(): JavaOpaque<"org.bukkit.command.CommandSender$Spigot">;
  spigot(): JavaOpaque<"org.bukkit.entity.Entity$Spigot">;
  storeBukkitValues(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  readonly taskScheduler: JavaOpaque<"io.papermc.paper.threadedregions.EntityScheduler">;
  teamDisplayName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">, ...arg2: Array<JavaOpaque<"io.papermc.paper.entity.TeleportFlag">>): boolean;
  teleport(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  teleport(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  teleportAsync(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">, ...arg2: Array<JavaOpaque<"io.papermc.paper.entity.TeleportFlag">>): PromiseLike<boolean>;
  toString(): string;
  update(): void;
  update(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  wouldCollideUsing(arg0: JavaOpaque<"org.bukkit.util.BoundingBox">): boolean;
}
export type CraftEntity = CraftEntityMembers & JavaOpaque<"org.bukkit.entity.Entity">;
export interface CraftEntityStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Entity): CraftEntity;
  getEntity<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: T): CraftEntity;
  toApiAnchor(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor): JavaOpaque<"io.papermc.paper.entity.LookAnchor">;
  toNmsAnchor(arg0: JavaOpaque<"io.papermc.paper.entity.LookAnchor">): j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEntityFactory. */
export interface CraftEntityFactoryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.entity.EntityFactory">];
  createEntitySnapshot(arg0: string): JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
}
export type CraftEntityFactory = CraftEntityFactoryMembers & JavaOpaque<"org.bukkit.entity.EntityFactory">;
export interface CraftEntityFactoryStatics {
  instance(): CraftEntityFactory;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEntitySnapshot. */
export interface CraftEntitySnapshotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.entity.EntitySnapshot">];
  createEntity(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.entity.Entity">;
  createEntity(arg0: JavaOpaque<"org.bukkit.World">): JavaOpaque<"org.bukkit.entity.Entity">;
  getAsString(): string;
  getData(): j_net_minecraft_nbt.CompoundTag;
  getEntityType(): JavaOpaque<"org.bukkit.entity.EntityType">;
}
export type CraftEntitySnapshot = CraftEntitySnapshotMembers & JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
export interface CraftEntitySnapshotStatics {
  create(arg0: j_net_minecraft_nbt.CompoundTag): CraftEntitySnapshot;
  create(arg0: j_net_minecraft_nbt.CompoundTag, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): CraftEntitySnapshot;
  create(arg0: CraftEntity): CraftEntitySnapshot;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEntityType. */
export interface CraftEntityTypeMembers {
}
export type CraftEntityType = CraftEntityTypeMembers;
export interface CraftEntityTypeStatics {
  new(): CraftEntityType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): j_net_minecraft_world_entity.EntityType<object>;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity.EntityType<object>>;
  bukkitToString(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): string;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity.EntityType<object>): JavaOpaque<"org.bukkit.entity.EntityType">;
  stringToBukkit(arg0: string): JavaOpaque<"org.bukkit.entity.EntityType">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEntityTypes. */
export interface CraftEntityTypesMembers {
}
export type CraftEntityTypes = CraftEntityTypesMembers;
export interface CraftEntityTypesStatics {
  getEntityTypeData<E /* extends JavaOpaque<"org.bukkit.entity.Entity"> */, M /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaClass<E>): CraftEntityTypes_EntityTypeData<E, M>;
  getEntityTypeData<E /* extends JavaOpaque<"org.bukkit.entity.Entity"> */, M /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): CraftEntityTypes_EntityTypeData<E, M>;
}

/** JVM record org.bukkit.craftbukkit.entity.CraftEntityTypes$EntityTypeData. */
export interface CraftEntityTypes_EntityTypeDataMembers<E /* extends JavaOpaque<"org.bukkit.entity.Entity"> */ = unknown, M /* extends j_net_minecraft_world_entity.Entity */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  convertFunction(): JavaBiFunction<j_org_bukkit_craftbukkit.CraftServer, M, E>;
  entityClass(): JavaClass<E>;
  entityType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  equals(arg0: object): boolean;
  hashCode(): number;
  spawnFunction(): JavaFunction<CraftEntityTypes_SpawnData, M>;
  toString(): string;
}
export type CraftEntityTypes_EntityTypeData<E /* extends JavaOpaque<"org.bukkit.entity.Entity"> */ = unknown, M /* extends j_net_minecraft_world_entity.Entity */ = unknown> = CraftEntityTypes_EntityTypeDataMembers<E, M> & JavaOpaque<"java.lang.Record">;
export interface CraftEntityTypes_EntityTypeDataStatics {
  new<E /* extends JavaOpaque<"org.bukkit.entity.Entity"> */, M /* extends j_net_minecraft_world_entity.Entity */>(arg0: JavaOpaque<"org.bukkit.entity.EntityType">, arg1: JavaClass<E>, arg2: JavaBiFunction<j_org_bukkit_craftbukkit.CraftServer, M, E>, arg3: JavaFunction<CraftEntityTypes_SpawnData, M>): CraftEntityTypes_EntityTypeData<E, M>;
}

/** JVM record org.bukkit.craftbukkit.entity.CraftEntityTypes$SpawnData. */
export interface CraftEntityTypes_SpawnDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  location(): JavaOpaque<"org.bukkit.Location">;
  normalWorld(): boolean;
  randomizeData(): boolean;
  toString(): string;
  world(): j_net_minecraft_world_level.WorldGenLevel;
}
export type CraftEntityTypes_SpawnData = CraftEntityTypes_SpawnDataMembers & JavaOpaque<"java.lang.Record">;
export interface CraftEntityTypes_SpawnDataStatics {
  new(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: JavaOpaque<"org.bukkit.Location">, arg2: boolean, arg3: boolean): CraftEntityTypes_SpawnData;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEvoker. */
export interface CraftEvokerMembers {
  readonly __javaSupertypes?: readonly [CraftSpellcaster, JavaOpaque<"org.bukkit.entity.Evoker">];
  getCurrentSpell(): JavaOpaque<"org.bukkit.entity.Evoker$Spell">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractIllager;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Evoker;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.SpellcasterIllager;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  getWololoTarget(): JavaOpaque<"org.bukkit.entity.Sheep">;
  setCurrentSpell(arg0: JavaOpaque<"org.bukkit.entity.Evoker$Spell">): void;
  setWololoTarget(arg0: JavaOpaque<"org.bukkit.entity.Sheep">): void;
}
export type CraftEvoker = CraftEvokerMembers & CraftSpellcaster & JavaOpaque<"org.bukkit.entity.Evoker">;
export interface CraftEvokerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Evoker): CraftEvoker;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftEvokerFangs. */
export interface CraftEvokerFangsMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.EvokerFangs">];
  getAttackDelay(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.EvokerFangs;
  getOwner(): JavaOpaque<"org.bukkit.entity.LivingEntity">;
  setAttackDelay(arg0: number): void;
  setOwner(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
}
export type CraftEvokerFangs = CraftEvokerFangsMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.EvokerFangs">;
export interface CraftEvokerFangsStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.EvokerFangs): CraftEvokerFangs;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftExperienceOrb. */
export interface CraftExperienceOrbMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.ExperienceOrb">];
  getCount(): number;
  getExperience(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.ExperienceOrb;
  getSourceEntityId(): JavaOpaque<"java.util.UUID">;
  getSpawnReason(): JavaOpaque<"org.bukkit.entity.ExperienceOrb$SpawnReason">;
  getTriggerEntityId(): JavaOpaque<"java.util.UUID">;
  setCount(arg0: number): void;
  setExperience(arg0: number): void;
}
export type CraftExperienceOrb = CraftExperienceOrbMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.ExperienceOrb">;
export interface CraftExperienceOrbStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.ExperienceOrb): CraftExperienceOrb;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFallingBlock. */
export interface CraftFallingBlockMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.FallingBlock">];
  canHurtEntities(): boolean;
  doesAutoExpire(): boolean;
  getBlockData(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockState(): JavaOpaque<"org.bukkit.block.BlockState">;
  getCancelDrop(): boolean;
  getDamagePerBlock(): number;
  getDropItem(): boolean;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_item.FallingBlockEntity;
  getMaterial(): JavaOpaque<"org.bukkit.Material">;
  getMaxDamage(): number;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setBlockState(arg0: JavaOpaque<"org.bukkit.block.BlockState">): void;
  setCancelDrop(arg0: boolean): void;
  setDamagePerBlock(arg0: number): void;
  setDropItem(arg0: boolean): void;
  setHurtEntities(arg0: boolean): void;
  setMaxDamage(arg0: number): void;
  setTicksLived(arg0: number): void;
  shouldAutoExpire(arg0: boolean): void;
}
export type CraftFallingBlock = CraftFallingBlockMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.FallingBlock">;
export interface CraftFallingBlockStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_item.FallingBlockEntity): CraftFallingBlock;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFireball. */
export interface CraftFireballMembers {
  readonly __javaSupertypes?: readonly [AbstractProjectile, JavaOpaque<"org.bukkit.entity.Fireball">];
  getAcceleration(): JavaOpaque<"org.bukkit.util.Vector">;
  getDirection(): JavaOpaque<"org.bukkit.util.Vector">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getPower(): JavaOpaque<"org.bukkit.util.Vector">;
  getYield(): number;
  isIncendiary(): boolean;
  setAcceleration(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setDirection(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setIsIncendiary(arg0: boolean): void;
  setPower(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setYield(arg0: number): void;
}
export type CraftFireball = CraftFireballMembers & AbstractProjectile & JavaOpaque<"org.bukkit.entity.Fireball">;
export interface CraftFireballStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile): CraftFireball;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFirework. */
export interface CraftFireworkMembers {
  readonly __javaSupertypes?: readonly [CraftProjectile, JavaOpaque<"org.bukkit.entity.Firework">];
  detonate(): void;
  getAttachedTo(): JavaOpaque<"org.bukkit.entity.LivingEntity">;
  getFireworkMeta(): JavaOpaque<"org.bukkit.inventory.meta.FireworkMeta">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.FireworkRocketEntity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLife(): number;
  getMaxLife(): number;
  getSpawningEntity(): JavaOpaque<"java.util.UUID">;
  getTicksFlown(): number;
  getTicksToDetonate(): number;
  isDetonated(): boolean;
  isShotAtAngle(): boolean;
  setAttachedTo(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): boolean;
  setFireworkMeta(arg0: JavaOpaque<"org.bukkit.inventory.meta.FireworkMeta">): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLife(arg0: number): boolean;
  setMaxLife(arg0: number): boolean;
  setShotAtAngle(arg0: boolean): void;
  setTicksFlown(arg0: number): void;
  setTicksToDetonate(arg0: number): void;
}
export type CraftFirework = CraftFireworkMembers & CraftProjectile & JavaOpaque<"org.bukkit.entity.Firework">;
export interface CraftFireworkStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.FireworkRocketEntity): CraftFirework;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFish. */
export interface CraftFishMembers {
  readonly __javaSupertypes?: readonly [CraftWaterMob, JavaOpaque<"io.papermc.paper.entity.PaperBucketable">, JavaOpaque<"org.bukkit.entity.Fish">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractFish;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
}
export type CraftFish = CraftFishMembers & CraftWaterMob & JavaOpaque<"io.papermc.paper.entity.PaperBucketable"> & JavaOpaque<"org.bukkit.entity.Fish">;
export interface CraftFishStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.AbstractFish): CraftFish;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFishHook. */
export interface CraftFishHookMembers {
  readonly __javaSupertypes?: readonly [CraftProjectile, JavaOpaque<"org.bukkit.entity.FishHook">];
  getApplyLure(): boolean;
  getBiteChance(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.FishingHook;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHookedEntity(): JavaOpaque<"org.bukkit.entity.Entity">;
  getMaxLureAngle(): number;
  getMaxLureTime(): number;
  getMaxWaitTime(): number;
  getMinLureAngle(): number;
  getMinLureTime(): number;
  getMinWaitTime(): number;
  getState(): JavaOpaque<"org.bukkit.entity.FishHook$HookState">;
  getTimeUntilBite(): number;
  getWaitTime(): number;
  isInOpenWater(): boolean;
  isRainInfluenced(): boolean;
  isSkyInfluenced(): boolean;
  pullHookedEntity(): boolean;
  resetFishingState(): void;
  retrieve(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): number;
  setApplyLure(arg0: boolean): void;
  setBiteChance(arg0: number): void;
  setHookedEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setLureAngle(arg0: number, arg1: number): void;
  setLureTime(arg0: number, arg1: number): void;
  setMaxLureAngle(arg0: number): void;
  setMaxLureTime(arg0: number): void;
  setMaxWaitTime(arg0: number): void;
  setMinLureAngle(arg0: number): void;
  setMinLureTime(arg0: number): void;
  setMinWaitTime(arg0: number): void;
  setRainInfluenced(arg0: boolean): void;
  setSkyInfluenced(arg0: boolean): void;
  setTimeUntilBite(arg0: number): void;
  setWaitTime(arg0: number): void;
  setWaitTime(arg0: number, arg1: number): void;
}
export type CraftFishHook = CraftFishHookMembers & CraftProjectile & JavaOpaque<"org.bukkit.entity.FishHook">;
export interface CraftFishHookStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.FishingHook): CraftFishHook;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFox. */
export interface CraftFoxMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Fox">];
  getFirstTrustedPlayer(): JavaOpaque<"org.bukkit.entity.AnimalTamer">;
  getFoxType(): JavaOpaque<"org.bukkit.entity.Fox$Type">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Fox;
  getSecondTrustedPlayer(): JavaOpaque<"org.bukkit.entity.AnimalTamer">;
  isCrouching(): boolean;
  isDefending(): boolean;
  isFaceplanted(): boolean;
  isInterested(): boolean;
  isLeaping(): boolean;
  isSitting(): boolean;
  setCrouching(arg0: boolean): void;
  setDefending(arg0: boolean): void;
  setFaceplanted(arg0: boolean): void;
  setFirstTrustedPlayer(arg0: JavaOpaque<"org.bukkit.entity.AnimalTamer">): void;
  setFoxType(arg0: JavaOpaque<"org.bukkit.entity.Fox$Type">): void;
  setInterested(arg0: boolean): void;
  setLeaping(arg0: boolean): void;
  setSecondTrustedPlayer(arg0: JavaOpaque<"org.bukkit.entity.AnimalTamer">): void;
  setSitting(arg0: boolean): void;
  setSleeping(arg0: boolean): void;
}
export type CraftFox = CraftFoxMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Fox">;
export interface CraftFoxStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Fox): CraftFox;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFrog. */
export interface CraftFrogMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Frog">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_frog.Frog;
  getTongueTarget(): JavaOpaque<"org.bukkit.entity.Entity">;
  getVariant(): JavaOpaque<"org.bukkit.entity.Frog$Variant">;
  setTongueTarget(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Frog$Variant">): void;
}
export type CraftFrog = CraftFrogMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Frog">;
export interface CraftFrogStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_frog.Frog): CraftFrog;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftFrog$CraftVariant. */
export interface CraftFrog_CraftVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Frog$Variant">, j_net_minecraft_world_entity_animal_frog.FrogVariant]>, JavaOpaque<"org.bukkit.entity.Frog$Variant">];
}
export type CraftFrog_CraftVariant = CraftFrog_CraftVariantMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Frog$Variant">, j_net_minecraft_world_entity_animal_frog.FrogVariant]> & JavaOpaque<"org.bukkit.entity.Frog$Variant">;
export interface CraftFrog_CraftVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_frog.FrogVariant>): CraftFrog_CraftVariant;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Frog$Variant">): j_net_minecraft_world_entity_animal_frog.FrogVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Frog$Variant">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_frog.FrogVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_frog.FrogVariant>): JavaOpaque<"org.bukkit.entity.Frog$Variant">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal_frog.FrogVariant): JavaOpaque<"org.bukkit.entity.Frog$Variant">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGhast. */
export interface CraftGhastMembers {
  readonly __javaSupertypes?: readonly [CraftMob, CraftEnemy, JavaOpaque<"org.bukkit.entity.Ghast">];
  getExplosionPower(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Ghast;
  isCharging(): boolean;
  setCharging(arg0: boolean): void;
  setExplosionPower(arg0: number): void;
}
export type CraftGhast = CraftGhastMembers & CraftMob & CraftEnemy & JavaOpaque<"org.bukkit.entity.Ghast">;
export interface CraftGhastStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Ghast): CraftGhast;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGiant. */
export interface CraftGiantMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Giant">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Giant;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
}
export type CraftGiant = CraftGiantMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Giant">;
export interface CraftGiantStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Giant): CraftGiant;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGlowItemFrame. */
export interface CraftGlowItemFrameMembers {
  readonly __javaSupertypes?: readonly [CraftItemFrame, JavaOpaque<"org.bukkit.entity.GlowItemFrame">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_decoration.BlockAttachedEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.GlowItemFrame;
  getHandle(): j_net_minecraft_world_entity_decoration.HangingEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.ItemFrame;
}
export type CraftGlowItemFrame = CraftGlowItemFrameMembers & CraftItemFrame & JavaOpaque<"org.bukkit.entity.GlowItemFrame">;
export interface CraftGlowItemFrameStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.GlowItemFrame): CraftGlowItemFrame;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGlowSquid. */
export interface CraftGlowSquidMembers {
  readonly __javaSupertypes?: readonly [CraftSquid, JavaOpaque<"org.bukkit.entity.GlowSquid">];
  getDarkTicksRemaining(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.GlowSquid;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Squid;
  setDarkTicksRemaining(arg0: number): void;
}
export type CraftGlowSquid = CraftGlowSquidMembers & CraftSquid & JavaOpaque<"org.bukkit.entity.GlowSquid">;
export interface CraftGlowSquidStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.GlowSquid): CraftGlowSquid;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGoat. */
export interface CraftGoatMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Goat">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_goat.Goat;
  hasLeftHorn(): boolean;
  hasRightHorn(): boolean;
  isScreaming(): boolean;
  ram(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
  setLeftHorn(arg0: boolean): void;
  setRightHorn(arg0: boolean): void;
  setScreaming(arg0: boolean): void;
}
export type CraftGoat = CraftGoatMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Goat">;
export interface CraftGoatStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_goat.Goat): CraftGoat;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGolem. */
export interface CraftGolemMembers {
  readonly __javaSupertypes?: readonly [CraftCreature, JavaOpaque<"org.bukkit.entity.Golem">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractGolem;
}
export type CraftGolem = CraftGolemMembers & CraftCreature & JavaOpaque<"org.bukkit.entity.Golem">;
export interface CraftGolemStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.AbstractGolem): CraftGolem;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftGuardian. */
export interface CraftGuardianMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Guardian">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Guardian;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getLaserDuration(): number;
  getLaserTicks(): number;
  hasLaser(): boolean;
  isElder(): boolean;
  isMoving(): boolean;
  setElder(arg0: boolean): void;
  setLaser(arg0: boolean): boolean;
  setLaserTicks(arg0: number): void;
  setTarget(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
}
export type CraftGuardian = CraftGuardianMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Guardian">;
export interface CraftGuardianStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Guardian): CraftGuardian;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftHanging. */
export interface CraftHangingMembers {
  readonly __javaSupertypes?: readonly [CraftBlockAttachedEntity, JavaOpaque<"org.bukkit.entity.Hanging">];
  getAttachedFace(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_decoration.BlockAttachedEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.HangingEntity;
  setFacingDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setFacingDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): boolean;
}
export type CraftHanging = CraftHangingMembers & CraftBlockAttachedEntity & JavaOpaque<"org.bukkit.entity.Hanging">;
export interface CraftHangingStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.HangingEntity): CraftHanging;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftHappyGhast. */
export interface CraftHappyGhastMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.HappyGhast">];
}
export type CraftHappyGhast = CraftHappyGhastMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.HappyGhast">;
export interface CraftHappyGhastStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.HappyGhast): CraftHappyGhast;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftHoglin. */
export interface CraftHoglinMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, CraftEnemy, JavaOpaque<"org.bukkit.entity.Hoglin">];
  getConversionTime(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster_hoglin.Hoglin;
  isAbleToBeHunted(): boolean;
  isConverting(): boolean;
  isImmuneToZombification(): boolean;
  setConversionTime(arg0: number): void;
  setImmuneToZombification(arg0: boolean): void;
  setIsAbleToBeHunted(arg0: boolean): void;
}
export type CraftHoglin = CraftHoglinMembers & CraftAnimals & CraftEnemy & JavaOpaque<"org.bukkit.entity.Hoglin">;
export interface CraftHoglinStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_hoglin.Hoglin): CraftHoglin;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftHorse. */
export interface CraftHorseMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractHorse, JavaOpaque<"org.bukkit.entity.Horse">];
  getColor(): JavaOpaque<"org.bukkit.entity.Horse$Color">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.Horse;
  getInventory(): JavaOpaque<"org.bukkit.inventory.AbstractHorseInventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.HorseInventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getStyle(): JavaOpaque<"org.bukkit.entity.Horse$Style">;
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
  isCarryingChest(): boolean;
  setCarryingChest(arg0: boolean): void;
  setColor(arg0: JavaOpaque<"org.bukkit.entity.Horse$Color">): void;
  setStyle(arg0: JavaOpaque<"org.bukkit.entity.Horse$Style">): void;
}
export type CraftHorse = CraftHorseMembers & CraftAbstractHorse & JavaOpaque<"org.bukkit.entity.Horse">;
export interface CraftHorseStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.Horse): CraftHorse;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftHumanEntity. */
export interface CraftHumanEntityMembers {
  readonly __javaSupertypes?: readonly [CraftLivingEntity, JavaOpaque<"org.bukkit.entity.HumanEntity">];
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean, arg3: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  canUseEquipmentSlot(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  closeInventory(arg0: JavaOpaque<"org.bukkit.event.inventory.InventoryCloseEvent$Reason">): void;
  copy(): JavaOpaque<"org.bukkit.entity.Entity">;
  copy(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.entity.Entity">;
  discoverRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  discoverRecipes(arg0: JavaCollection<JavaOpaque<"org.bukkit.NamespacedKey">>): number;
  dropItem(arg0: number, arg1: number, arg2: boolean, arg3: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">> | null): JavaOpaque<"org.bukkit.entity.Item"> | null;
  dropItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: number, arg2: boolean, arg3: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">> | null): JavaOpaque<"org.bukkit.entity.Item"> | null;
  dropItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean, arg2: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">> | null): JavaOpaque<"org.bukkit.entity.Item"> | null;
  dropItem(arg0: boolean): boolean;
  fireworkBoost(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.entity.Firework">;
  getAttackCooldown(): number;
  getBedLocation(): JavaOpaque<"org.bukkit.Location">;
  getCooldown(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): number;
  getCooldown(arg0: JavaOpaque<"org.bukkit.Material">): number;
  getCooldown(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): number;
  getDiscoveredRecipes(): JavaSet<JavaOpaque<"org.bukkit.NamespacedKey">>;
  getEffectivePermissions(): JavaSet<JavaOpaque<"org.bukkit.permissions.PermissionAttachmentInfo">>;
  getEnchantmentSeed(): number;
  getEnderChest(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getEquipment(): JavaOpaque<"org.bukkit.inventory.EntityEquipment">;
  getExhaustion(): number;
  getExpToLevel(): number;
  getFishHook(): JavaOpaque<"org.bukkit.entity.FishHook">;
  getFoodLevel(): number;
  getGameMode(): JavaOpaque<"org.bukkit.GameMode">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity_player.Player;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.PlayerInventory">;
  getItemInHand(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemOnCursor(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLastDeathLocation(): JavaOpaque<"org.bukkit.Location">;
  getMainHand(): JavaOpaque<"org.bukkit.inventory.MainHand">;
  getName(): string;
  getOpenInventory(): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  getPotentialRespawnLocation(): JavaOpaque<"org.bukkit.Location">;
  getSaturatedRegenRate(): number;
  getSaturation(): number;
  getShoulderEntityLeft(): JavaOpaque<"org.bukkit.entity.Entity">;
  getShoulderEntityRight(): JavaOpaque<"org.bukkit.entity.Entity">;
  getSleepTicks(): number;
  getStarvationRate(): number;
  getUnsaturatedRegenRate(): number;
  hasCooldown(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  hasCooldown(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  hasDiscoveredRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isBlocking(): boolean;
  isDeeplySleeping(): boolean;
  isHandRaised(): boolean;
  isOp(): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  openAnvil(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openCartographyTable(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openEnchanting(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openGrindstone(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openInventory(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openInventory(arg0: JavaOpaque<"org.bukkit.inventory.InventoryView">): void;
  openLoom(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openMerchant(arg0: JavaOpaque<"org.bukkit.entity.Villager">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openMerchant(arg0: JavaOpaque<"org.bukkit.inventory.Merchant">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openSign(arg0: JavaOpaque<"org.bukkit.block.Sign">, arg1: JavaOpaque<"org.bukkit.block.sign.Side">): void;
  openSmithingTable(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openStonecutter(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  openWorkbench(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): JavaOpaque<"org.bukkit.inventory.InventoryView">;
  readonly perm: JavaOpaque<"org.bukkit.permissions.PermissibleBase">;
  recalculatePermissions(): void;
  releaseLeftShoulderEntity(): JavaOpaque<"org.bukkit.entity.Entity">;
  releaseRightShoulderEntity(): JavaOpaque<"org.bukkit.entity.Entity">;
  removeAttachment(arg0: JavaOpaque<"org.bukkit.permissions.PermissionAttachment">): void;
  setCooldown(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number): void;
  setCooldown(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): void;
  setCooldown(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number): void;
  setEnchantmentSeed(arg0: number): void;
  setExhaustion(arg0: number): void;
  setFoodLevel(arg0: number): void;
  setGameMode(arg0: JavaOpaque<"org.bukkit.GameMode">): void;
  setHandle(arg0: j_net_minecraft_world_entity_player.Player): void;
  setHurtDirection(arg0: number): void;
  setItemInHand(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItemOnCursor(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLastDeathLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setOp(arg0: boolean): void;
  setSaturatedRegenRate(arg0: number): void;
  setSaturation(arg0: number): void;
  setShoulderEntityLeft(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setShoulderEntityRight(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setStarvationRate(arg0: number): void;
  setUnsaturatedRegenRate(arg0: number): void;
  setWindowProperty(arg0: JavaOpaque<"org.bukkit.inventory.InventoryView$Property">, arg1: number): boolean;
  sleep(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): boolean;
  startRiptideAttack(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  toString(): string;
  undiscoverRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  undiscoverRecipes(arg0: JavaCollection<JavaOpaque<"org.bukkit.NamespacedKey">>): number;
  wakeup(arg0: boolean): void;
}
export type CraftHumanEntity = CraftHumanEntityMembers & CraftLivingEntity & JavaOpaque<"org.bukkit.entity.HumanEntity">;
export interface CraftHumanEntityStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_player.Player): CraftHumanEntity;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftHusk. */
export interface CraftHuskMembers {
  readonly __javaSupertypes?: readonly [CraftZombie, JavaOpaque<"org.bukkit.entity.Husk">];
}
export type CraftHusk = CraftHuskMembers & CraftZombie & JavaOpaque<"org.bukkit.entity.Husk">;
export interface CraftHuskStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Husk): CraftHusk;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftIllager. */
export interface CraftIllagerMembers {
  readonly __javaSupertypes?: readonly [CraftRaider, JavaOpaque<"org.bukkit.entity.Illager">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractIllager;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
}
export type CraftIllager = CraftIllagerMembers & CraftRaider & JavaOpaque<"org.bukkit.entity.Illager">;
export interface CraftIllagerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.AbstractIllager): CraftIllager;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftIllusioner. */
export interface CraftIllusionerMembers {
  readonly __javaSupertypes?: readonly [CraftSpellcaster, JavaOpaque<"org.bukkit.entity.Illusioner">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Illusioner]>];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractIllager;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Illusioner;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.SpellcasterIllager;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
}
export type CraftIllusioner = CraftIllusionerMembers & CraftSpellcaster & JavaOpaque<"org.bukkit.entity.Illusioner"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Illusioner]>;
export interface CraftIllusionerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Illusioner): CraftIllusioner;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftInteraction. */
export interface CraftInteractionMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.Interaction">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Interaction;
  getInteractionHeight(): number;
  getInteractionWidth(): number;
  getLastAttack(): JavaOpaque<"org.bukkit.entity.Interaction$PreviousInteraction">;
  getLastInteraction(): JavaOpaque<"org.bukkit.entity.Interaction$PreviousInteraction">;
  isResponsive(): boolean;
  setInteractionHeight(arg0: number): void;
  setInteractionWidth(arg0: number): void;
  setResponsive(arg0: boolean): void;
}
export type CraftInteraction = CraftInteractionMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.Interaction">;
export interface CraftInteractionStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Interaction): CraftInteraction;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftIronGolem. */
export interface CraftIronGolemMembers {
  readonly __javaSupertypes?: readonly [CraftGolem, JavaOpaque<"org.bukkit.entity.IronGolem">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractGolem;
  getHandle(): j_net_minecraft_world_entity_animal.IronGolem;
  isPlayerCreated(): boolean;
  setPlayerCreated(arg0: boolean): void;
}
export type CraftIronGolem = CraftIronGolemMembers & CraftGolem & JavaOpaque<"org.bukkit.entity.IronGolem">;
export interface CraftIronGolemStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.IronGolem): CraftIronGolem;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftItem. */
export interface CraftItemMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.Item">];
  canMobPickup(): boolean;
  canPlayerPickup(): boolean;
  getFrictionState(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_item.ItemEntity;
  getHealth(): number;
  getItemStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getOwner(): JavaOpaque<"java.util.UUID">;
  getPickupDelay(): number;
  getThrower(): JavaOpaque<"java.util.UUID">;
  isUnlimitedLifetime(): boolean;
  setCanMobPickup(arg0: boolean): void;
  setCanPlayerPickup(arg0: boolean): void;
  setFrictionState(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setHealth(arg0: number): void;
  setItemStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setOwner(arg0: JavaOpaque<"java.util.UUID">): void;
  setPickupDelay(arg0: number): void;
  setThrower(arg0: JavaOpaque<"java.util.UUID">): void;
  setTicksLived(arg0: number): void;
  setUnlimitedLifetime(arg0: boolean): void;
  setWillAge(arg0: boolean): void;
  willAge(): boolean;
}
export type CraftItem = CraftItemMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.Item">;
export interface CraftItemStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_item.ItemEntity): CraftItem;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftItemDisplay. */
export interface CraftItemDisplayMembers {
  readonly __javaSupertypes?: readonly [CraftDisplay, JavaOpaque<"org.bukkit.entity.ItemDisplay">];
  getHandle(): j_net_minecraft_world_entity.Display_ItemDisplay;
  getHandle(): j_net_minecraft_world_entity.Display;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getItemDisplayTransform(): JavaOpaque<"org.bukkit.entity.ItemDisplay$ItemDisplayTransform">;
  getItemStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setItemDisplayTransform(arg0: JavaOpaque<"org.bukkit.entity.ItemDisplay$ItemDisplayTransform">): void;
  setItemStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftItemDisplay = CraftItemDisplayMembers & CraftDisplay & JavaOpaque<"org.bukkit.entity.ItemDisplay">;
export interface CraftItemDisplayStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Display_ItemDisplay): CraftItemDisplay;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftItemFrame. */
export interface CraftItemFrameMembers {
  readonly __javaSupertypes?: readonly [CraftHanging, JavaOpaque<"org.bukkit.entity.ItemFrame">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_decoration.BlockAttachedEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.HangingEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.ItemFrame;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemDropChance(): number;
  getRotation(): JavaOpaque<"org.bukkit.Rotation">;
  isFixed(): boolean;
  isVisible(): boolean;
  setFacingDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): boolean;
  setFixed(arg0: boolean): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): void;
  setItemDropChance(arg0: number): void;
  setRotation(arg0: JavaOpaque<"org.bukkit.Rotation">): void;
  setVisible(arg0: boolean): void;
  update(): void;
}
export type CraftItemFrame = CraftItemFrameMembers & CraftHanging & JavaOpaque<"org.bukkit.entity.ItemFrame">;
export interface CraftItemFrameStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.ItemFrame): CraftItemFrame;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftLargeFireball. */
export interface CraftLargeFireballMembers {
  readonly __javaSupertypes?: readonly [CraftSizedFireball, JavaOpaque<"org.bukkit.entity.LargeFireball">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Fireball;
  getHandle(): j_net_minecraft_world_entity_projectile.LargeFireball;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  setYield(arg0: number): void;
}
export type CraftLargeFireball = CraftLargeFireballMembers & CraftSizedFireball & JavaOpaque<"org.bukkit.entity.LargeFireball">;
export interface CraftLargeFireballStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.LargeFireball): CraftLargeFireball;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftLeash. */
export interface CraftLeashMembers {
  readonly __javaSupertypes?: readonly [CraftBlockAttachedEntity, JavaOpaque<"org.bukkit.entity.LeashHitch">];
  getAttachedFace(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getFacing(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_decoration.BlockAttachedEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.LeashFenceKnotEntity;
  setFacingDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setFacingDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): boolean;
}
export type CraftLeash = CraftLeashMembers & CraftBlockAttachedEntity & JavaOpaque<"org.bukkit.entity.LeashHitch">;
export interface CraftLeashStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.LeashFenceKnotEntity): CraftLeash;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftLightningStrike. */
export interface CraftLightningStrikeMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.LightningStrike">];
  getCausingEntity(): JavaOpaque<"org.bukkit.entity.Entity"> | null;
  getCausingPlayer(): JavaOpaque<"org.bukkit.entity.Player">;
  getFlashCount(): number;
  getFlashes(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.LightningBolt;
  getLifeTicks(): number;
  isEffect(): boolean;
  setCausingPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  setFlashCount(arg0: number): void;
  setFlashes(arg0: number): void;
  setLifeTicks(arg0: number): void;
  spigot(): JavaOpaque<"org.bukkit.command.CommandSender$Spigot">;
  spigot(): JavaOpaque<"org.bukkit.entity.Entity$Spigot">;
  spigot(): JavaOpaque<"org.bukkit.entity.LightningStrike$Spigot">;
}
export type CraftLightningStrike = CraftLightningStrikeMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.LightningStrike">;
export interface CraftLightningStrikeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.LightningBolt): CraftLightningStrike;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftLivingEntity. */
export interface CraftLivingEntityMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.LivingEntity">];
  addPotionEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">): boolean;
  addPotionEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">, arg1: boolean): boolean;
  addPotionEffects(arg0: JavaCollection<JavaOpaque<"org.bukkit.potion.PotionEffect">>): boolean;
  attack(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  broadcastSlotBreak(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): void;
  broadcastSlotBreak(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: JavaCollection<JavaOpaque<"org.bukkit.entity.Player">>): void;
  canBreatheUnderwater(): boolean;
  canUseEquipmentSlot(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): boolean;
  clearActiveItem(): void;
  clearActivePotionEffects(): boolean;
  completeUsingActiveItem(): void;
  damage(arg0: number): void;
  damage(arg0: number, arg1: JavaOpaque<"org.bukkit.damage.DamageSource">): void;
  damage(arg0: number, arg1: JavaOpaque<"org.bukkit.entity.Entity">): void;
  damageItemStack(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg1: number): void;
  damageItemStack(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getAbsorptionAmount(): number;
  getActiveItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getActiveItemHand(): JavaOpaque<"org.bukkit.inventory.EquipmentSlot">;
  getActiveItemRemainingTime(): number;
  getActiveItemUsedTime(): number;
  getActivePotionEffects(): JavaCollection<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  getArrowCooldown(): number;
  getArrowsInBody(): number;
  getArrowsStuck(): number;
  getAttribute(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): JavaOpaque<"org.bukkit.attribute.AttributeInstance">;
  getBeeStingerCooldown(): number;
  getBeeStingersInBody(): number;
  getBodyYaw(): number;
  getCanPickupItems(): boolean;
  getCategory(): JavaOpaque<"org.bukkit.entity.EntityCategory">;
  getCollidableExemptions(): JavaSet<JavaOpaque<"java.util.UUID">>;
  getCombatTracker(): JavaOpaque<"io.papermc.paper.world.damagesource.CombatTracker">;
  getDeathSound(): JavaOpaque<"org.bukkit.Sound">;
  getDrinkingSound(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.Sound">;
  getEatingSound(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): JavaOpaque<"org.bukkit.Sound">;
  getEquipment(): JavaOpaque<"org.bukkit.inventory.EntityEquipment">;
  getEyeHeight(): number;
  getEyeHeight(arg0: boolean): number;
  getEyeLocation(): JavaOpaque<"org.bukkit.Location">;
  getFallDamageSound(arg0: number): JavaOpaque<"org.bukkit.Sound">;
  getFallDamageSoundBig(): JavaOpaque<"org.bukkit.Sound">;
  getFallDamageSoundSmall(): JavaOpaque<"org.bukkit.Sound">;
  getForwardsMovement(): number;
  getFrictionState(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHealth(): number;
  getHurtDirection(): number;
  getHurtSound(): JavaOpaque<"org.bukkit.Sound">;
  getItemInUse(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getItemInUseTicks(): number;
  getKiller(): JavaOpaque<"org.bukkit.entity.Player">;
  getLastDamage(): number;
  getLastTwoTargetBlocks(arg0: JavaSet<JavaOpaque<"org.bukkit.Material">>, arg1: number): JavaList<JavaOpaque<"org.bukkit.block.Block">>;
  /** @throws java.lang.IllegalStateException */
  getLeashHolder(): JavaOpaque<"org.bukkit.entity.Entity">;
  getLineOfSight(arg0: JavaSet<JavaOpaque<"org.bukkit.Material">>, arg1: number): JavaList<JavaOpaque<"org.bukkit.block.Block">>;
  getMaxHealth(): number;
  getMaximumAir(): number;
  getMaximumNoDamageTicks(): number;
  getMemory<T>(arg0: JavaOpaque<"org.bukkit.entity.memory.MemoryKey", [T]>): T;
  getNextArrowRemoval(): number;
  getNextBeeStingerRemoval(): number;
  getNoActionTicks(): number;
  getNoDamageTicks(): number;
  getPotionEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): JavaOpaque<"org.bukkit.potion.PotionEffect">;
  getRemainingAir(): number;
  getRemoveWhenFarAway(): boolean;
  getShieldBlockingDelay(): number;
  getSidewaysMovement(): number;
  getTargetBlock(arg0: number, arg1: JavaOpaque<"com.destroystokyo.paper.block.TargetBlockInfo$FluidMode">): JavaOpaque<"org.bukkit.block.Block">;
  getTargetBlock(arg0: JavaSet<JavaOpaque<"org.bukkit.Material">>, arg1: number): JavaOpaque<"org.bukkit.block.Block">;
  getTargetBlockExact(arg0: number): JavaOpaque<"org.bukkit.block.Block">;
  getTargetBlockExact(arg0: number, arg1: JavaOpaque<"org.bukkit.FluidCollisionMode">): JavaOpaque<"org.bukkit.block.Block">;
  getTargetBlockFace(arg0: number, arg1: JavaOpaque<"com.destroystokyo.paper.block.TargetBlockInfo$FluidMode">): JavaOpaque<"org.bukkit.block.BlockFace">;
  getTargetBlockFace(arg0: number, arg1: JavaOpaque<"org.bukkit.FluidCollisionMode">): JavaOpaque<"org.bukkit.block.BlockFace">;
  getTargetBlockInfo(arg0: number, arg1: JavaOpaque<"com.destroystokyo.paper.block.TargetBlockInfo$FluidMode">): JavaOpaque<"com.destroystokyo.paper.block.TargetBlockInfo">;
  getTargetEntity(arg0: number, arg1: boolean): JavaOpaque<"org.bukkit.entity.Entity">;
  getTargetEntityInfo(arg0: number, arg1: boolean): JavaOpaque<"com.destroystokyo.paper.entity.TargetEntityInfo">;
  getUpwardsMovement(): number;
  hasAI(): boolean;
  hasActiveItem(): boolean;
  hasLineOfSight(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  hasLineOfSight(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  hasPotionEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  heal(arg0: number, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason">): void;
  isClimbing(): boolean;
  isCollidable(): boolean;
  isGliding(): boolean;
  isInvulnerable(): boolean;
  isJumping(): boolean;
  isLeashed(): boolean;
  isRiptiding(): boolean;
  isSleeping(): boolean;
  isSwimming(): boolean;
  knockback(arg0: number, arg1: number, arg2: number): void;
  launchProjectile<T /* extends JavaOpaque<"org.bukkit.entity.Projectile"> */>(arg0: JavaClass<T>): T;
  launchProjectile<T /* extends JavaOpaque<"org.bukkit.entity.Projectile"> */>(arg0: JavaClass<T>, arg1: JavaOpaque<"org.bukkit.util.Vector">): T;
  launchProjectile<T /* extends JavaOpaque<"org.bukkit.entity.Projectile"> */>(arg0: JavaClass<T>, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: JavaConsumer<T>): T;
  playHurtAnimation(arg0: number): void;
  playPickupItemAnimation(arg0: JavaOpaque<"org.bukkit.entity.Item">, arg1: number): void;
  rayTraceBlocks(arg0: number): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceBlocks(arg0: number, arg1: JavaOpaque<"org.bukkit.FluidCollisionMode">): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntities(arg0: number, arg1: boolean): JavaOpaque<"org.bukkit.util.RayTraceResult">;
  rayTraceEntity(arg0: number, arg1: boolean): j_net_minecraft_world_phys.EntityHitResult;
  registerAttribute(arg0: JavaOpaque<"org.bukkit.attribute.Attribute">): void;
  removePotionEffect(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): void;
  resetMaxHealth(): void;
  setAI(arg0: boolean): void;
  setAbsorptionAmount(arg0: number): void;
  setActiveItemRemainingTime(arg0: number): void;
  setArrowCooldown(arg0: number): void;
  setArrowsInBody(arg0: number, arg1: boolean): void;
  setArrowsStuck(arg0: number): void;
  setBeeStingerCooldown(arg0: number): void;
  setBeeStingersInBody(arg0: number): void;
  setBodyYaw(arg0: number): void;
  setCanPickupItems(arg0: boolean): void;
  setCollidable(arg0: boolean): void;
  setFrictionState(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setGliding(arg0: boolean): void;
  setHealth(arg0: number): void;
  setHurtDirection(arg0: number): void;
  setItemInUseTicks(arg0: number): void;
  setJumping(arg0: boolean): void;
  setKiller(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  setLastDamage(arg0: number): void;
  setLeashHolder(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  setMaxHealth(arg0: number): void;
  setMaximumAir(arg0: number): void;
  setMaximumNoDamageTicks(arg0: number): void;
  setMemory<T>(arg0: JavaOpaque<"org.bukkit.entity.memory.MemoryKey", [T]>, arg1: T): void;
  setNextArrowRemoval(arg0: number): void;
  setNextBeeStingerRemoval(arg0: number): void;
  setNoActionTicks(arg0: number): void;
  setNoDamageTicks(arg0: number): void;
  setRemainingAir(arg0: number): void;
  setRemoveWhenFarAway(arg0: boolean): void;
  setRiptiding(arg0: boolean): void;
  setShieldBlockingDelay(arg0: number): void;
  setSwimming(arg0: boolean): void;
  startUsingItem(arg0: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">): void;
  swingMainHand(): void;
  swingOffHand(): void;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
}
export type CraftLivingEntity = CraftLivingEntityMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.LivingEntity">;
export interface CraftLivingEntityStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.LivingEntity): CraftLivingEntity;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftLlama. */
export interface CraftLlamaMembers {
  readonly __javaSupertypes?: readonly [CraftChestedHorse, JavaOpaque<"org.bukkit.entity.Llama">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_animal_horse.Llama]>];
  getCaravanHead(): JavaOpaque<"org.bukkit.entity.Llama">;
  getCaravanTail(): JavaOpaque<"org.bukkit.entity.Llama">;
  getColor(): JavaOpaque<"org.bukkit.entity.Llama$Color">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractChestedHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.Llama;
  getInventory(): JavaOpaque<"org.bukkit.inventory.AbstractHorseInventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getInventory(): JavaOpaque<"org.bukkit.inventory.LlamaInventory">;
  getStrength(): number;
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
  hasCaravanTail(): boolean;
  inCaravan(): boolean;
  joinCaravan(arg0: JavaOpaque<"org.bukkit.entity.Llama">): void;
  leaveCaravan(): void;
  setColor(arg0: JavaOpaque<"org.bukkit.entity.Llama$Color">): void;
  setStrength(arg0: number): void;
}
export type CraftLlama = CraftLlamaMembers & CraftChestedHorse & JavaOpaque<"org.bukkit.entity.Llama"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_animal_horse.Llama]>;
export interface CraftLlamaStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.Llama): CraftLlama;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftLlamaSpit. */
export interface CraftLlamaSpitMembers {
  readonly __javaSupertypes?: readonly [AbstractProjectile, JavaOpaque<"org.bukkit.entity.LlamaSpit">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.LlamaSpit;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
}
export type CraftLlamaSpit = CraftLlamaSpitMembers & AbstractProjectile & JavaOpaque<"org.bukkit.entity.LlamaSpit">;
export interface CraftLlamaSpitStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.LlamaSpit): CraftLlamaSpit;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMagmaCube. */
export interface CraftMagmaCubeMembers {
  readonly __javaSupertypes?: readonly [CraftSlime, JavaOpaque<"org.bukkit.entity.MagmaCube">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.MagmaCube;
  getHandle(): j_net_minecraft_world_entity_monster.Slime;
}
export type CraftMagmaCube = CraftMagmaCubeMembers & CraftSlime & JavaOpaque<"org.bukkit.entity.MagmaCube">;
export interface CraftMagmaCubeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.MagmaCube): CraftMagmaCube;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMarker. */
export interface CraftMarkerMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.Marker">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Marker;
}
export type CraftMarker = CraftMarkerMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.Marker">;
export interface CraftMarkerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Marker): CraftMarker;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftMinecart. */
export interface CraftMinecartMembers {
  readonly __javaSupertypes?: readonly [CraftVehicle, JavaOpaque<"org.bukkit.entity.Minecart">];
  getDamage(): number;
  getDerailedVelocityMod(): JavaOpaque<"org.bukkit.util.Vector">;
  getDisplayBlock(): JavaOpaque<"org.bukkit.material.MaterialData">;
  getDisplayBlockData(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getDisplayBlockOffset(): number;
  getFlyingVelocityMod(): JavaOpaque<"org.bukkit.util.Vector">;
  getFrictionState(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getMaxSpeed(): number;
  getMinecartMaterial(): JavaOpaque<"org.bukkit.Material">;
  isSlowWhenEmpty(): boolean;
  setDamage(arg0: number): void;
  setDerailedVelocityMod(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setDisplayBlock(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): void;
  setDisplayBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setDisplayBlockOffset(arg0: number): void;
  setFlyingVelocityMod(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
  setFrictionState(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setMaxSpeed(arg0: number): void;
  setSlowWhenEmpty(arg0: boolean): void;
}
export type CraftMinecart = CraftMinecartMembers & CraftVehicle & JavaOpaque<"org.bukkit.entity.Minecart">;
export interface CraftMinecartStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.AbstractMinecart): CraftMinecart;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartChest. */
export interface CraftMinecartChestMembers {
  readonly __javaSupertypes?: readonly [CraftMinecartContainer, JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory">, JavaOpaque<"org.bukkit.entity.minecart.StorageMinecart">];
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftMinecartChest = CraftMinecartChestMembers & CraftMinecartContainer & JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory"> & JavaOpaque<"org.bukkit.entity.minecart.StorageMinecart">;
export interface CraftMinecartChestStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.MinecartChest): CraftMinecartChest;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartCommand. */
export interface CraftMinecartCommandMembers {
  readonly __javaSupertypes?: readonly [CraftMinecart, JavaOpaque<"io.papermc.paper.commands.PaperCommandBlockHolder">, JavaOpaque<"org.bukkit.entity.minecart.CommandMinecart">];
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  addAttachment(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: boolean, arg3: number): JavaOpaque<"org.bukkit.permissions.PermissionAttachment">;
  getCommand(): string;
  getCommandBlockHandle(): j_net_minecraft_world_level.BaseCommandBlock;
  getEffectivePermissions(): JavaSet<JavaOpaque<"org.bukkit.permissions.PermissionAttachmentInfo">>;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getHandle(): j_net_minecraft_world_entity_vehicle.MinecartCommandBlock;
  getName(): string;
  getServer(): JavaOpaque<"org.bukkit.Server">;
  hasPermission(arg0: string): boolean;
  hasPermission(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  isOp(): boolean;
  isPermissionSet(arg0: string): boolean;
  isPermissionSet(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): boolean;
  lastOutput(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  name(): JavaOpaque<"net.kyori.adventure.text.Component">;
  recalculatePermissions(): void;
  removeAttachment(arg0: JavaOpaque<"org.bukkit.permissions.PermissionAttachment">): void;
  sendMessage(arg0: string): void;
  sendMessage(...arg0: Array<string>): void;
  setCommand(arg0: string): void;
  setName(arg0: string): void;
  setOp(arg0: boolean): void;
}
export type CraftMinecartCommand = CraftMinecartCommandMembers & CraftMinecart & JavaOpaque<"io.papermc.paper.commands.PaperCommandBlockHolder"> & JavaOpaque<"org.bukkit.entity.minecart.CommandMinecart">;
export interface CraftMinecartCommandStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.MinecartCommandBlock): CraftMinecartCommand;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftMinecartContainer. */
export interface CraftMinecartContainerMembers {
  readonly __javaSupertypes?: readonly [CraftMinecart, JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecartContainer;
  getHandle(): j_net_minecraft_world_entity_vehicle.ContainerEntity;
}
export type CraftMinecartContainer = CraftMinecartContainerMembers & CraftMinecart & JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory">;
export interface CraftMinecartContainerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.AbstractMinecart): CraftMinecartContainer;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartFurnace. */
export interface CraftMinecartFurnaceMembers {
  readonly __javaSupertypes?: readonly [CraftMinecart, JavaOpaque<"org.bukkit.entity.minecart.PoweredMinecart">];
  getFuel(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getHandle(): j_net_minecraft_world_entity_vehicle.MinecartFurnace;
  getPushX(): number;
  getPushZ(): number;
  setFuel(arg0: number): void;
  setPushX(arg0: number): void;
  setPushZ(arg0: number): void;
}
export type CraftMinecartFurnace = CraftMinecartFurnaceMembers & CraftMinecart & JavaOpaque<"org.bukkit.entity.minecart.PoweredMinecart">;
export interface CraftMinecartFurnaceStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.MinecartFurnace): CraftMinecartFurnace;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartHopper. */
export interface CraftMinecartHopperMembers {
  readonly __javaSupertypes?: readonly [CraftMinecartContainer, JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory">, JavaOpaque<"org.bukkit.entity.minecart.HopperMinecart">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecartContainer;
  getHandle(): j_net_minecraft_world_entity_vehicle.ContainerEntity;
  getHandle(): j_net_minecraft_world_entity_vehicle.MinecartHopper;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  getPickupCooldown(): number;
  isEnabled(): boolean;
  setEnabled(arg0: boolean): void;
  setPickupCooldown(arg0: number): void;
}
export type CraftMinecartHopper = CraftMinecartHopperMembers & CraftMinecartContainer & JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableEntityInventory"> & JavaOpaque<"org.bukkit.entity.minecart.HopperMinecart">;
export interface CraftMinecartHopperStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.MinecartHopper): CraftMinecartHopper;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartMobSpawner. */
export interface CraftMinecartMobSpawnerMembers {
  readonly __javaSupertypes?: readonly [CraftMinecart, j_org_bukkit_craftbukkit_spawner.PaperSharedSpawnerLogic, JavaOpaque<"org.bukkit.entity.minecart.SpawnerMinecart">];
  addPotentialSpawn(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">): void;
  addPotentialSpawn(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">, arg1: number, arg2: JavaOpaque<"org.bukkit.block.spawner.SpawnRule">): void;
  getDelay(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getHandle(): j_net_minecraft_world_entity_vehicle.MinecartSpawner;
  getInternalPosition(): j_net_minecraft_core.BlockPos;
  getInternalWorld(): j_net_minecraft_world_level.Level;
  getMaxNearbyEntities(): number;
  getMaxSpawnDelay(): number;
  getMinSpawnDelay(): number;
  getPotentialSpawns(): JavaList<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>;
  getRegistryAccess(): j_net_minecraft_core.RegistryAccess;
  getRequiredPlayerRange(): number;
  getSpawnCount(): number;
  getSpawnRange(): number;
  getSpawnedEntity(): JavaOpaque<"org.bukkit.entity.EntitySnapshot">;
  getSpawnedType(): JavaOpaque<"org.bukkit.entity.EntityType">;
  getSpawner(): j_net_minecraft_world_level.BaseSpawner;
  setDelay(arg0: number): void;
  setMaxNearbyEntities(arg0: number): void;
  setMaxSpawnDelay(arg0: number): void;
  setMinSpawnDelay(arg0: number): void;
  setPotentialSpawns(arg0: JavaCollection<JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">>): void;
  setRequiredPlayerRange(arg0: number): void;
  setSpawnCount(arg0: number): void;
  setSpawnRange(arg0: number): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.block.spawner.SpawnerEntry">): void;
  setSpawnedEntity(arg0: JavaOpaque<"org.bukkit.entity.EntitySnapshot">): void;
  setSpawnedType(arg0: JavaOpaque<"org.bukkit.entity.EntityType">): void;
}
export type CraftMinecartMobSpawner = CraftMinecartMobSpawnerMembers & CraftMinecart & j_org_bukkit_craftbukkit_spawner.PaperSharedSpawnerLogic & JavaOpaque<"org.bukkit.entity.minecart.SpawnerMinecart">;
export interface CraftMinecartMobSpawnerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.MinecartSpawner): CraftMinecartMobSpawner;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartRideable. */
export interface CraftMinecartRideableMembers {
  readonly __javaSupertypes?: readonly [CraftMinecart, JavaOpaque<"org.bukkit.entity.minecart.RideableMinecart">];
}
export type CraftMinecartRideable = CraftMinecartRideableMembers & CraftMinecart & JavaOpaque<"org.bukkit.entity.minecart.RideableMinecart">;
export interface CraftMinecartRideableStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.Minecart): CraftMinecartRideable;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMinecartTNT. */
export interface CraftMinecartTNTMembers {
  readonly __javaSupertypes?: readonly [CraftMinecart, JavaOpaque<"org.bukkit.entity.minecart.ExplosiveMinecart">];
  explode(): void;
  explode(arg0: number): void;
  getExplosionSpeedFactor(): number;
  getFuseTicks(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_vehicle.AbstractMinecart;
  getHandle(): j_net_minecraft_world_entity_vehicle.MinecartTNT;
  getYield(): number;
  ignite(): void;
  isIgnited(): boolean;
  isIncendiary(): boolean;
  setExplosionSpeedFactor(arg0: number): void;
  setFuseTicks(arg0: number): void;
  setIsIncendiary(arg0: boolean): void;
  setYield(arg0: number): void;
}
export type CraftMinecartTNT = CraftMinecartTNTMembers & CraftMinecart & JavaOpaque<"org.bukkit.entity.minecart.ExplosiveMinecart">;
export interface CraftMinecartTNTStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_vehicle.MinecartTNT): CraftMinecartTNT;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftMob. */
export interface CraftMobMembers {
  readonly __javaSupertypes?: readonly [CraftLivingEntity, JavaOpaque<"io.papermc.paper.entity.PaperLeashable">, JavaOpaque<"org.bukkit.entity.Mob">];
  getAmbientSound(): JavaOpaque<"org.bukkit.Sound">;
  getDespawnInPeacefulOverride(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHeadRotationSpeed(): number;
  /** @throws java.lang.IllegalStateException */
  getLeashHolder(): JavaOpaque<"org.bukkit.entity.Entity">;
  getLootTable(): JavaOpaque<"org.bukkit.loot.LootTable">;
  getMaxHeadPitch(): number;
  getPathfinder(): JavaOpaque<"com.destroystokyo.paper.entity.Pathfinder">;
  getPossibleExperienceReward(): number;
  getSeed(): bigint;
  getTarget(): CraftLivingEntity;
  getTarget(): JavaOpaque<"org.bukkit.entity.LivingEntity">;
  isAggressive(): boolean;
  isAware(): boolean;
  isInDaylight(): boolean;
  isLeashed(): boolean;
  isLeftHanded(): boolean;
  lookAt(arg0: number, arg1: number, arg2: number): void;
  lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  lookAt(arg0: JavaOpaque<"org.bukkit.Location">): void;
  lookAt(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: number): void;
  lookAt(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  lookAt(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: number, arg2: number): void;
  setAggressive(arg0: boolean): void;
  setAware(arg0: boolean): void;
  setDespawnInPeacefulOverride(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setHandle(arg0: j_net_minecraft_world_entity.Entity): void;
  setLeashHolder(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  setLeftHanded(arg0: boolean): void;
  setLootTable(arg0: JavaOpaque<"org.bukkit.loot.LootTable">): void;
  setSeed(arg0: bigint): void;
  setTarget(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
  shouldDespawnInPeaceful(): boolean;
}
export type CraftMob = CraftMobMembers & CraftLivingEntity & JavaOpaque<"io.papermc.paper.entity.PaperLeashable"> & JavaOpaque<"org.bukkit.entity.Mob">;
export interface CraftMobStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Mob): CraftMob;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMonster. */
export interface CraftMonsterMembers {
  readonly __javaSupertypes?: readonly [CraftCreature, CraftEnemy, JavaOpaque<"org.bukkit.entity.Monster">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
}
export type CraftMonster = CraftMonsterMembers & CraftCreature & CraftEnemy & JavaOpaque<"org.bukkit.entity.Monster">;
export interface CraftMonsterStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Monster): CraftMonster;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMule. */
export interface CraftMuleMembers {
  readonly __javaSupertypes?: readonly [CraftChestedHorse, JavaOpaque<"org.bukkit.entity.Mule">];
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
}
export type CraftMule = CraftMuleMembers & CraftChestedHorse & JavaOpaque<"org.bukkit.entity.Mule">;
export interface CraftMuleStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.Mule): CraftMule;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftMushroomCow. */
export interface CraftMushroomCowMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractCow, JavaOpaque<"io.papermc.paper.entity.PaperShearable">, JavaOpaque<"org.bukkit.entity.MushroomCow">];
  addEffectToNextStew(arg0: JavaOpaque<"io.papermc.paper.potion.SuspiciousEffectEntry">, arg1: boolean): boolean;
  addEffectToNextStew(arg0: JavaOpaque<"org.bukkit.potion.PotionEffect">, arg1: boolean): boolean;
  clearEffectsForNextStew(): void;
  getEffectsForNextStew(): JavaList<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.Shearable;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractCow;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.MushroomCow;
  getStewEffects(): JavaList<JavaOpaque<"io.papermc.paper.potion.SuspiciousEffectEntry">>;
  getVariant(): JavaOpaque<"org.bukkit.entity.MushroomCow$Variant">;
  hasEffectForNextStew(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  hasEffectsForNextStew(): boolean;
  removeEffectFromNextStew(arg0: JavaOpaque<"org.bukkit.potion.PotionEffectType">): boolean;
  setStewEffects(arg0: JavaList<JavaOpaque<"io.papermc.paper.potion.SuspiciousEffectEntry">>): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.MushroomCow$Variant">): void;
}
export type CraftMushroomCow = CraftMushroomCowMembers & CraftAbstractCow & JavaOpaque<"io.papermc.paper.entity.PaperShearable"> & JavaOpaque<"org.bukkit.entity.MushroomCow">;
export interface CraftMushroomCowStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.MushroomCow): CraftMushroomCow;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftOcelot. */
export interface CraftOcelotMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Ocelot">];
  getCatType(): JavaOpaque<"org.bukkit.entity.Ocelot$Type">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Ocelot;
  isTrusting(): boolean;
  setCatType(arg0: JavaOpaque<"org.bukkit.entity.Ocelot$Type">): void;
  setTrusting(arg0: boolean): void;
}
export type CraftOcelot = CraftOcelotMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Ocelot">;
export interface CraftOcelotStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Ocelot): CraftOcelot;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftOminousItemSpawner. */
export interface CraftOminousItemSpawnerMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.OminousItemSpawner">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.OminousItemSpawner;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getSpawnItemAfterTicks(): bigint;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setSpawnItemAfterTicks(arg0: bigint): void;
}
export type CraftOminousItemSpawner = CraftOminousItemSpawnerMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.OminousItemSpawner">;
export interface CraftOminousItemSpawnerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.OminousItemSpawner): CraftOminousItemSpawner;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPainting. */
export interface CraftPaintingMembers {
  readonly __javaSupertypes?: readonly [CraftHanging, JavaOpaque<"org.bukkit.entity.Painting">];
  getArt(): JavaOpaque<"org.bukkit.Art">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_decoration.BlockAttachedEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.HangingEntity;
  getHandle(): j_net_minecraft_world_entity_decoration.Painting;
  setArt(arg0: JavaOpaque<"org.bukkit.Art">): boolean;
  setArt(arg0: JavaOpaque<"org.bukkit.Art">, arg1: boolean): boolean;
  setFacingDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: boolean): boolean;
}
export type CraftPainting = CraftPaintingMembers & CraftHanging & JavaOpaque<"org.bukkit.entity.Painting">;
export interface CraftPaintingStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_decoration.Painting): CraftPainting;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPanda. */
export interface CraftPandaMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Panda">];
  getCombinedGene(): JavaOpaque<"org.bukkit.entity.Panda$Gene">;
  getEatingTicks(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Panda;
  getHiddenGene(): JavaOpaque<"org.bukkit.entity.Panda$Gene">;
  getMainGene(): JavaOpaque<"org.bukkit.entity.Panda$Gene">;
  getSneezeTicks(): number;
  getUnhappyTicks(): number;
  isEating(): boolean;
  isOnBack(): boolean;
  isRolling(): boolean;
  isScared(): boolean;
  isSitting(): boolean;
  isSneezing(): boolean;
  setEating(arg0: boolean): void;
  setEatingTicks(arg0: number): void;
  setHiddenGene(arg0: JavaOpaque<"org.bukkit.entity.Panda$Gene">): void;
  setMainGene(arg0: JavaOpaque<"org.bukkit.entity.Panda$Gene">): void;
  setOnBack(arg0: boolean): void;
  setRolling(arg0: boolean): void;
  setSitting(arg0: boolean): void;
  setSneezeTicks(arg0: number): void;
  setSneezing(arg0: boolean): void;
  setUnhappyTicks(arg0: number): void;
}
export type CraftPanda = CraftPandaMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Panda">;
export interface CraftPandaStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Panda): CraftPanda;
  fromNms(arg0: j_net_minecraft_world_entity_animal.Panda_Gene): JavaOpaque<"org.bukkit.entity.Panda$Gene">;
  toNms(arg0: JavaOpaque<"org.bukkit.entity.Panda$Gene">): j_net_minecraft_world_entity_animal.Panda_Gene;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftParrot. */
export interface CraftParrotMembers {
  readonly __javaSupertypes?: readonly [CraftTameableAnimal, JavaOpaque<"org.bukkit.entity.Parrot">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.TamableAnimal;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Parrot;
  getVariant(): JavaOpaque<"org.bukkit.entity.Parrot$Variant">;
  isDancing(): boolean;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Parrot$Variant">): void;
}
export type CraftParrot = CraftParrotMembers & CraftTameableAnimal & JavaOpaque<"org.bukkit.entity.Parrot">;
export interface CraftParrotStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Parrot): CraftParrot;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPhantom. */
export interface CraftPhantomMembers {
  readonly __javaSupertypes?: readonly [CraftMob, CraftEnemy, JavaOpaque<"org.bukkit.entity.Phantom">];
  getAnchorLocation(): JavaOpaque<"org.bukkit.Location">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Phantom;
  getSize(): number;
  getSpawningEntity(): JavaOpaque<"java.util.UUID">;
  setAnchorLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setShouldBurnInDay(arg0: boolean): void;
  setSize(arg0: number): void;
  shouldBurnInDay(): boolean;
}
export type CraftPhantom = CraftPhantomMembers & CraftMob & CraftEnemy & JavaOpaque<"org.bukkit.entity.Phantom">;
export interface CraftPhantomStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Phantom): CraftPhantom;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPig. */
export interface CraftPigMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Pig">];
  getBoostTicks(): number;
  getCurrentBoostTicks(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Pig;
  getSteerMaterial(): JavaOpaque<"org.bukkit.Material">;
  getVariant(): JavaOpaque<"org.bukkit.entity.Pig$Variant">;
  hasSaddle(): boolean;
  setBoostTicks(arg0: number): void;
  setCurrentBoostTicks(arg0: number): void;
  setSaddle(arg0: boolean): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Pig$Variant">): void;
}
export type CraftPig = CraftPigMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Pig">;
export interface CraftPigStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Pig): CraftPig;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPig$CraftVariant. */
export interface CraftPig_CraftVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal.PigVariant]>, JavaOpaque<"org.bukkit.entity.Pig$Variant">];
}
export type CraftPig_CraftVariant = CraftPig_CraftVariantMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal.PigVariant]> & JavaOpaque<"org.bukkit.entity.Pig$Variant">;
export interface CraftPig_CraftVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.PigVariant>): CraftPig_CraftVariant;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Pig$Variant">): j_net_minecraft_world_entity_animal.PigVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Pig$Variant">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.PigVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.PigVariant>): JavaOpaque<"org.bukkit.entity.Pig$Variant">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal.PigVariant): JavaOpaque<"org.bukkit.entity.Pig$Variant">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPiglin. */
export interface CraftPiglinMembers {
  readonly __javaSupertypes?: readonly [CraftPiglinAbstract, JavaOpaque<"org.bukkit.entity.Piglin">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster_piglin.Piglin]>];
  addBarterMaterial(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  addMaterialOfInterest(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  getBarterList(): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster_piglin.AbstractPiglin;
  getHandle(): j_net_minecraft_world_entity_monster_piglin.Piglin;
  getInterestList(): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
  isAbleToHunt(): boolean;
  isChargingCrossbow(): boolean;
  isDancing(): boolean;
  removeBarterMaterial(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  removeMaterialOfInterest(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  setChargingCrossbow(arg0: boolean): void;
  setDancing(arg0: bigint): void;
  setDancing(arg0: boolean): void;
  setIsAbleToHunt(arg0: boolean): void;
}
export type CraftPiglin = CraftPiglinMembers & CraftPiglinAbstract & JavaOpaque<"org.bukkit.entity.Piglin"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster_piglin.Piglin]>;
export interface CraftPiglinStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_piglin.Piglin): CraftPiglin;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPiglinAbstract. */
export interface CraftPiglinAbstractMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.PiglinAbstract">];
  canBreed(): boolean;
  getAge(): number;
  getAgeLock(): boolean;
  getConversionTime(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster_piglin.AbstractPiglin;
  isAdult(): boolean;
  isBaby(): boolean;
  isConverting(): boolean;
  isImmuneToZombification(): boolean;
  setAdult(): void;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
  setBaby(): void;
  setBaby(arg0: boolean): void;
  setBreed(arg0: boolean): void;
  setConversionTime(arg0: number): void;
  setImmuneToZombification(arg0: boolean): void;
}
export type CraftPiglinAbstract = CraftPiglinAbstractMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.PiglinAbstract">;
export interface CraftPiglinAbstractStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_piglin.AbstractPiglin): CraftPiglinAbstract;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPiglinBrute. */
export interface CraftPiglinBruteMembers {
  readonly __javaSupertypes?: readonly [CraftPiglinAbstract, JavaOpaque<"org.bukkit.entity.PiglinBrute">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster_piglin.AbstractPiglin;
  getHandle(): j_net_minecraft_world_entity_monster_piglin.PiglinBrute;
}
export type CraftPiglinBrute = CraftPiglinBruteMembers & CraftPiglinAbstract & JavaOpaque<"org.bukkit.entity.PiglinBrute">;
export interface CraftPiglinBruteStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_piglin.PiglinBrute): CraftPiglinBrute;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPigZombie. */
export interface CraftPigZombieMembers {
  readonly __javaSupertypes?: readonly [CraftZombie, JavaOpaque<"org.bukkit.entity.PigZombie">];
  getAnger(): number;
  getConversionTime(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Zombie;
  getHandle(): j_net_minecraft_world_entity_monster.ZombifiedPiglin;
  isAngry(): boolean;
  isConverting(): boolean;
  setAnger(arg0: number): void;
  setAngry(arg0: boolean): void;
  setConversionTime(arg0: number): void;
}
export type CraftPigZombie = CraftPigZombieMembers & CraftZombie & JavaOpaque<"org.bukkit.entity.PigZombie">;
export interface CraftPigZombieStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.ZombifiedPiglin): CraftPigZombie;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPillager. */
export interface CraftPillagerMembers {
  readonly __javaSupertypes?: readonly [CraftIllager, JavaOpaque<"org.bukkit.entity.Pillager">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Pillager]>];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractIllager;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Pillager;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  getInventory(): JavaOpaque<"org.bukkit.inventory.Inventory">;
}
export type CraftPillager = CraftPillagerMembers & CraftIllager & JavaOpaque<"org.bukkit.entity.Pillager"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Pillager]>;
export interface CraftPillagerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Pillager): CraftPillager;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPlayer. */
export interface CraftPlayerMembers {
  readonly __javaSupertypes?: readonly [CraftHumanEntity, JavaOpaque<"io.papermc.paper.connection.PluginMessageBridgeImpl">, JavaOpaque<"org.bukkit.entity.Player">];
  abandonConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">): void;
  abandonConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">, arg1: JavaOpaque<"org.bukkit.conversations.ConversationAbandonedEvent">): void;
  acceptConversationInput(arg0: string): void;
  activeBossBars(): Iterable<JavaOpaque<"net.kyori.adventure.bossbar.BossBar">>;
  addAdditionalChatCompletions(arg0: JavaCollection<string>): void;
  addCustomChatCompletions(arg0: JavaCollection<string>): void;
  addResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: Array<number>, arg3: string, arg4: boolean): void | null;
  applyMending(arg0: number): number;
  ban(arg0: string, arg1: JavaOpaque<"java.time.Duration">, arg2: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.time.Duration">, arg2: string, arg3: boolean): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: string, arg3: boolean): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  ban(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string, arg3: boolean): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  banIp(arg0: string, arg1: JavaOpaque<"java.time.Duration">, arg2: string, arg3: boolean): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  banIp(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: string, arg3: boolean): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  banIp(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string, arg3: boolean): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  beginConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">): boolean;
  breakBlock(arg0: JavaOpaque<"org.bukkit.block.Block">): boolean;
  calculateTotalExperiencePoints(): number;
  canSee(arg0: JavaOpaque<"org.bukkit.entity.Entity">): boolean;
  canSee(arg0: JavaOpaque<"org.bukkit.entity.Player">): boolean;
  canSeePlayer(arg0: JavaOpaque<"java.util.UUID">): boolean;
  channels(): JavaSet<string>;
  chat(arg0: string): void;
  clearResourcePacks(): void;
  clearTitle(): void;
  closeDialog(): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: number): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: number): void;
  deleteMessage(arg0: JavaOpaque<"net.kyori.adventure.chat.SignedMessage$Signature">): void;
  disconnect(arg0: string): void;
  displayName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  displayName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  equals(arg0: object): boolean;
  getAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getAdvancementProgress(arg0: JavaOpaque<"org.bukkit.advancement.Advancement">): JavaOpaque<"org.bukkit.advancement.AdvancementProgress">;
  getAffectsSpawning(): boolean;
  getAllowFlight(): boolean;
  getBedLocation(): JavaOpaque<"org.bukkit.Location">;
  getClientBrandName(): string;
  getClientOption<T>(arg0: JavaOpaque<"com.destroystokyo.paper.ClientOption", [T]>): T;
  getClientViewDistance(): number;
  getCompassTarget(): JavaOpaque<"org.bukkit.Location">;
  getConnection(): JavaOpaque<"io.papermc.paper.connection.PlayerGameConnection">;
  getCooldownPeriod(): number;
  getCooledAttackStrength(arg0: number): number;
  getCurrentInput(): JavaOpaque<"org.bukkit.Input">;
  getDeathScreenScore(): number;
  getDiscoveredRecipes(): JavaSet<JavaOpaque<"org.bukkit.NamespacedKey">>;
  getDisplayName(): string;
  getEnderPearls(): JavaCollection<JavaOpaque<"org.bukkit.entity.EnderPearl">>;
  getExp(): number;
  getExpCooldown(): number;
  getExperiencePointsNeededForNextLevel(): number;
  getEyeHeight(arg0: boolean): number;
  getFirstPlayed(): bigint;
  getFlySpeed(): number;
  getForwardsMovement(): number;
  getGameMode(): JavaOpaque<"org.bukkit.GameMode">;
  getHAProxyAddress(): JavaOpaque<"java.net.InetSocketAddress"> | null;
  getHandle(): j_net_minecraft_server_level.ServerPlayer;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity_player.Player;
  getHealth(): number;
  getHealthScale(): number;
  getIdleDuration(): JavaOpaque<"java.time.Duration">;
  getLastLogin(): bigint;
  getLastPlayed(): bigint;
  getLastSeen(): bigint;
  getLevel(): number;
  getListeningPluginChannels(): JavaSet<string>;
  getLocale(): string;
  getMetadata(arg0: string): JavaList<JavaOpaque<"org.bukkit.metadata.MetadataValue">>;
  getPing(): number;
  getPlayer(): JavaOpaque<"org.bukkit.entity.Player">;
  getPlayerListFooter(): string;
  getPlayerListHeader(): string;
  getPlayerListName(): string;
  getPlayerListOrder(): number;
  getPlayerProfile(): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  getPlayerTime(): bigint;
  getPlayerTimeOffset(): bigint;
  getPlayerWeather(): JavaOpaque<"org.bukkit.WeatherType">;
  getPreviousGameMode(): JavaOpaque<"org.bukkit.GameMode">;
  getProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  getProtocolVersion(): number;
  getResourcePackStatus(): JavaOpaque<"org.bukkit.event.player.PlayerResourcePackStatusEvent$Status">;
  getRespawnLocation(arg0: boolean): JavaOpaque<"org.bukkit.Location">;
  getScaledHealth(): number;
  getScaledMaxHealth(): j_net_minecraft_world_entity_ai_attributes.AttributeInstance;
  getScoreboard(): j_org_bukkit_craftbukkit_scoreboard.CraftScoreboard;
  getScoreboard(): JavaOpaque<"org.bukkit.scoreboard.Scoreboard">;
  getSendViewDistance(): number;
  getSentChunkKeys(): JavaSet<bigint>;
  getSentChunks(): JavaSet<JavaOpaque<"org.bukkit.Chunk">>;
  getSidewaysMovement(): number;
  getSimulationDistance(): number;
  getSpectatorTarget(): JavaOpaque<"org.bukkit.entity.Entity">;
  getStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): number;
  getStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): number;
  getStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): number;
  getTotalExperience(): number;
  getViewDistance(): number;
  getVirtualHost(): JavaOpaque<"java.net.InetSocketAddress">;
  getWalkSpeed(): number;
  getWardenTimeSinceLastWarning(): number;
  getWardenWarningCooldown(): number;
  getWardenWarningLevel(): number;
  getWorldBorder(): JavaOpaque<"org.bukkit.WorldBorder">;
  give(arg0: JavaCollection<JavaOpaque<"org.bukkit.inventory.ItemStack">>, arg1: boolean): JavaOpaque<"io.papermc.paper.entity.PlayerGiveResult">;
  giveExp(arg0: number, arg1: boolean): void;
  giveExpLevels(arg0: number): void;
  hasClientWorldBorder(): boolean;
  hasDiscoveredRecipe(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): boolean;
  hasFlyingFallDamage(): JavaOpaque<"net.kyori.adventure.util.TriState">;
  hasMetadata(arg0: string): boolean;
  hasPlayedBefore(): boolean;
  hasSeenWinScreen(): boolean;
  hashCode(): number;
  hideBossBar(arg0: JavaOpaque<"net.kyori.adventure.bossbar.BossBar">): void;
  hideEntity(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.entity.Entity">): void;
  hidePlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  hidePlayer(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.entity.Player">): void;
  hideTitle(): void;
  increaseWardenWarningLevel(): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: number): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: number): void;
  injectScaledMaxHealth(arg0: JavaCollection<j_net_minecraft_world_entity_ai_attributes.AttributeInstance>, arg1: boolean): void;
  isAllowingServerListings(): boolean;
  isBanned(): boolean;
  isChunkSent(arg0: bigint): boolean;
  isConnected(): boolean;
  isConversing(): boolean;
  isFlying(): boolean;
  isHealthScaled(): boolean;
  isListed(arg0: JavaOpaque<"org.bukkit.entity.Player">): boolean;
  isOnline(): boolean;
  isOp(): boolean;
  isPlayerTimeRelative(): boolean;
  isSleepingIgnored(): boolean;
  isSneaking(): boolean;
  isSprinting(): boolean;
  isTransferred(): boolean;
  isWhitelisted(): boolean;
  kick(): void;
  kick(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): void;
  kickPlayer(arg0: string): void;
  listPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): boolean;
  loadData(): void;
  locale(): JavaOpaque<"java.util.Locale">;
  lookAt(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"io.papermc.paper.entity.LookAnchor">, arg2: JavaOpaque<"io.papermc.paper.entity.LookAnchor">): void;
  onEntityRemove(arg0: j_net_minecraft_world_entity.Entity): void;
  openBook(arg0: JavaOpaque<"net.kyori.adventure.inventory.Book">): void;
  openBook(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  openSign(arg0: JavaOpaque<"org.bukkit.block.Sign">): void;
  openSign(arg0: JavaOpaque<"org.bukkit.block.Sign">, arg1: JavaOpaque<"org.bukkit.block.sign.Side">): void;
  openVirtualSign(arg0: JavaOpaque<"io.papermc.paper.math.Position">, arg1: JavaOpaque<"org.bukkit.block.sign.Side">): void;
  performCommand(arg0: string): boolean;
  playEffect(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: number): void;
  playEffect<T>(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Effect">, arg2: T): void;
  playNote(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: number): void;
  playNote(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Instrument">, arg2: JavaOpaque<"org.bukkit.Note">): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">, arg1: number, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"net.kyori.adventure.sound.Sound">, arg1: JavaOpaque<"net.kyori.adventure.sound.Sound$Emitter">): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: string, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: string, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: number, arg3: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number): void;
  playSound(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: JavaOpaque<"org.bukkit.Sound">, arg2: JavaOpaque<"org.bukkit.SoundCategory">, arg3: number, arg4: number, arg5: bigint): void;
  playerListFooter(): JavaOpaque<"net.kyori.adventure.text.Component">;
  playerListHeader(): JavaOpaque<"net.kyori.adventure.text.Component">;
  playerListName(): JavaOpaque<"net.kyori.adventure.text.Component">;
  playerListName(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  pointers(): JavaOpaque<"net.kyori.adventure.pointer.Pointers">;
  readExtraData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  remove(): void;
  removeAdditionalChatCompletions(arg0: JavaCollection<string>): void;
  removeCustomChatCompletions(arg0: JavaCollection<string>): void;
  removeMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.plugin.Plugin">): void;
  removeResourcePack(arg0: JavaOpaque<"java.util.UUID">): void;
  removeResourcePacks(): void;
  removeResourcePacks(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<JavaOpaque<"java.util.UUID">>): void;
  resetCooldown(): void;
  resetIdleDuration(): void;
  resetMaxHealth(): void;
  resetPlayerTime(): void;
  resetPlayerWeather(): void;
  resetTitle(): void;
  retrieveCookie(arg0: JavaOpaque<"org.bukkit.NamespacedKey">): PromiseLike<Array<number>> | null;
  saveData(): void;
  sendActionBar(arg0: string, arg1: string): void;
  sendActionBar(arg0: string): void;
  sendActionBar(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  sendActionBar(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendBlockChange(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  sendBlockChange(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  sendBlockChanges(arg0: JavaCollection<JavaOpaque<"org.bukkit.block.BlockState">>): void;
  sendBlockDamage(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number): void;
  sendBlockDamage(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: number): void;
  sendBlockDamage(arg0: JavaOpaque<"org.bukkit.Location">, arg1: number, arg2: JavaOpaque<"org.bukkit.entity.Entity">): void;
  /** @throws java.lang.IllegalArgumentException */
  sendBlockUpdate(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.block.TileState">): void;
  sendEntityEffect(arg0: JavaOpaque<"org.bukkit.EntityEffect">, arg1: JavaOpaque<"org.bukkit.entity.Entity">): void;
  sendEquipmentChange(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaMap<JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, JavaOpaque<"org.bukkit.inventory.ItemStack">>): void | null;
  sendEquipmentChange(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaOpaque<"org.bukkit.inventory.EquipmentSlot">, arg2: JavaOpaque<"org.bukkit.inventory.ItemStack">): void | null;
  sendExperienceChange(arg0: number): void;
  sendExperienceChange(arg0: number, arg1: number): void;
  sendHealthUpdate(): void;
  sendHealthUpdate(arg0: number, arg1: number, arg2: number): void;
  sendHurtAnimation(arg0: number): void;
  sendHurtAnimation(arg0: number, arg1: JavaOpaque<"org.bukkit.entity.Entity">): void;
  sendLinks(arg0: JavaOpaque<"org.bukkit.ServerLinks">): void;
  sendMap(arg0: JavaOpaque<"org.bukkit.map.MapView">): void;
  sendMessage(arg0: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, arg1: string): void;
  sendMessage(arg0: JavaOpaque<"java.util.UUID">, ...arg1: Array<string>): void;
  sendMessage(arg0: JavaOpaque<"net.kyori.adventure.chat.SignedMessage">, arg1: JavaOpaque<"net.kyori.adventure.chat.ChatType$Bound">): void;
  sendMessage(arg0: JavaOpaque<"net.kyori.adventure.identity.Identity">, arg1: JavaOpaque<"net.kyori.adventure.text.Component">, arg2: JavaOpaque<"net.kyori.adventure.audience.MessageType">): void;
  sendMessage(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"net.kyori.adventure.chat.ChatType$Bound">): void;
  sendMessage(...arg0: Array<string>): void;
  sendMultiBlockChange(arg0: JavaMap<JavaOpaque<"io.papermc.paper.math.Position">, JavaOpaque<"org.bukkit.block.data.BlockData">>): void;
  sendOpLevel(arg0: number): void;
  sendPlayerListFooter(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  sendPlayerListHeader(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  sendPlayerListHeaderAndFooter(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  sendPluginMessage(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: string, arg2: Array<number>): void;
  sendPotionEffectChange(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaOpaque<"org.bukkit.potion.PotionEffect">): void;
  sendPotionEffectChangeRemove(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaOpaque<"org.bukkit.potion.PotionEffectType">): void;
  sendRawMessage(arg0: string): void;
  sendRawMessage(arg0: JavaOpaque<"java.util.UUID">, arg1: string): void;
  sendResourcePacks(arg0: JavaOpaque<"net.kyori.adventure.resource.ResourcePackRequest">): void;
  sendSignChange(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>, arg2: JavaOpaque<"org.bukkit.DyeColor">, arg3: boolean): void | null;
  sendSignChange(arg0: JavaOpaque<"org.bukkit.Location">, arg1: Array<string>): void | null;
  sendSignChange(arg0: JavaOpaque<"org.bukkit.Location">, arg1: Array<string>, arg2: JavaOpaque<"org.bukkit.DyeColor">): void | null;
  sendSignChange(arg0: JavaOpaque<"org.bukkit.Location">, arg1: Array<string>, arg2: JavaOpaque<"org.bukkit.DyeColor">, arg3: boolean): void | null;
  sendSupportedChannels(): void;
  sendTitle(arg0: JavaOpaque<"com.destroystokyo.paper.Title">): void;
  sendTitle(arg0: string, arg1: string): void;
  sendTitle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void;
  sendTitlePart<T>(arg0: JavaOpaque<"net.kyori.adventure.title.TitlePart", [T]>, arg1: T): void;
  serialize(): JavaMap<string, object>;
  setAffectsSpawning(arg0: boolean): void;
  setAllowFlight(arg0: boolean): void;
  setBedSpawnLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setBedSpawnLocation(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): void;
  setCompassTarget(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setCustomChatCompletions(arg0: JavaCollection<string>): void;
  setDeathScreenScore(arg0: number): void;
  setDisplayName(arg0: string): void;
  setExp(arg0: number): void;
  setExpCooldown(arg0: number): void;
  setExperienceLevelAndProgress(arg0: number): void;
  setExtraData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  setFirstPlayed(arg0: bigint): void;
  setFlySpeed(arg0: number): void;
  setFlying(arg0: boolean): void;
  setFlyingFallDamage(arg0: JavaOpaque<"net.kyori.adventure.util.TriState">): void;
  setGameMode(arg0: JavaOpaque<"org.bukkit.GameMode">): void;
  setHasSeenWinScreen(arg0: boolean): void;
  setHealthScale(arg0: number): void;
  setHealthScaled(arg0: boolean): void;
  setLevel(arg0: number): void;
  setMaxHealth(arg0: number): void;
  setMetadata(arg0: string, arg1: JavaOpaque<"org.bukkit.metadata.MetadataValue">): void;
  setOp(arg0: boolean): void;
  setPlayerListFooter(arg0: string): void;
  setPlayerListHeader(arg0: string): void;
  setPlayerListHeaderFooter(arg0: string, arg1: string): void;
  setPlayerListHeaderFooter(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void | null;
  setPlayerListHeaderFooter(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void | null;
  setPlayerListName(arg0: string): void;
  setPlayerListOrder(arg0: number): void;
  setPlayerProfile(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">): void;
  setPlayerTime(arg0: bigint, arg1: boolean): void;
  setPlayerWeather(arg0: JavaOpaque<"org.bukkit.WeatherType">): void;
  setRealHealth(arg0: number): void;
  setResourcePack(arg0: string): void;
  setResourcePack(arg0: string, arg1: Array<number>): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: string): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: string, arg3: boolean): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: boolean): void | null;
  setResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: Array<number>, arg3: string, arg4: boolean): void | null;
  setResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: Array<number>, arg3: JavaOpaque<"net.kyori.adventure.text.Component">, arg4: boolean): void | null;
  setRespawnLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setRespawnLocation(arg0: JavaOpaque<"org.bukkit.Location">, arg1: boolean): void;
  setRotation(arg0: number, arg1: number): void;
  setScoreboard(arg0: JavaOpaque<"org.bukkit.scoreboard.Scoreboard">): void;
  setSendViewDistance(arg0: number): void;
  setSimulationDistance(arg0: number): void;
  setSleepingIgnored(arg0: boolean): void;
  setSneaking(arg0: boolean): void;
  setSpectatorTarget(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setSprinting(arg0: boolean): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: number): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: number): void;
  setSubtitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  setSubtitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setTexturePack(arg0: string): void;
  setTitleTimes(arg0: number, arg1: number, arg2: number): void;
  setTotalExperience(arg0: number): void;
  setViewDistance(arg0: number): void;
  setWalkSpeed(arg0: number): void;
  setWardenTimeSinceLastWarning(arg0: number): void;
  setWardenWarningCooldown(arg0: number): void;
  setWardenWarningLevel(arg0: number): void;
  setWhitelisted(arg0: boolean): void;
  setWindowProperty(arg0: JavaOpaque<"org.bukkit.inventory.InventoryView$Property">, arg1: number): boolean;
  setWorldBorder(arg0: JavaOpaque<"org.bukkit.WorldBorder">): void;
  showBossBar(arg0: JavaOpaque<"net.kyori.adventure.bossbar.BossBar">): void;
  showDemoScreen(): void;
  showDialog(arg0: JavaOpaque<"net.kyori.adventure.dialog.DialogLike">): void;
  showElderGuardian(arg0: boolean): void;
  showEntity(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.entity.Entity">): void;
  showPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  showPlayer(arg0: JavaOpaque<"org.bukkit.plugin.Plugin">, arg1: JavaOpaque<"org.bukkit.entity.Player">): void;
  showTitle(arg0: JavaOpaque<"net.kyori.adventure.title.Title">): void;
  showTitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  showTitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg2: number, arg3: number, arg4: number): void;
  showTitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  showTitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg2: number, arg3: number, arg4: number): void;
  showWinScreen(): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T, arg10: boolean): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: T): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number): void;
  spawnParticle(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: boolean): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: T): void;
  spawnParticle<T>(arg0: JavaOpaque<"org.bukkit.Particle">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: number, arg3: T): void;
  spigot(): JavaOpaque<"org.bukkit.command.CommandSender$Spigot">;
  spigot(): JavaOpaque<"org.bukkit.entity.Entity$Spigot">;
  spigot(): JavaOpaque<"org.bukkit.entity.Player$Spigot">;
  stopAllSounds(): void;
  stopSound(arg0: string): void;
  stopSound(arg0: string, arg1: JavaOpaque<"org.bukkit.SoundCategory">): void;
  stopSound(arg0: JavaOpaque<"net.kyori.adventure.sound.SoundStop">): void;
  stopSound(arg0: JavaOpaque<"org.bukkit.Sound">): void;
  stopSound(arg0: JavaOpaque<"org.bukkit.Sound">, arg1: JavaOpaque<"org.bukkit.SoundCategory">): void;
  stopSound(arg0: JavaOpaque<"org.bukkit.SoundCategory">): void;
  storeCookie(arg0: JavaOpaque<"org.bukkit.NamespacedKey">, arg1: Array<number>): void;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">, ...arg2: Array<JavaOpaque<"io.papermc.paper.entity.TeleportFlag">>): boolean;
  transfer(arg0: string, arg1: number): void;
  unlistPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): boolean;
  updateCommands(): void;
  updateInventory(): void;
  updateScaledHealth(): void;
  updateScaledHealth(arg0: boolean): void;
  updateTitle(arg0: JavaOpaque<"com.destroystokyo.paper.Title">): void;
}
export type CraftPlayer = CraftPlayerMembers & CraftHumanEntity & JavaOpaque<"io.papermc.paper.connection.PluginMessageBridgeImpl"> & JavaOpaque<"org.bukkit.entity.Player">;
export interface CraftPlayerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_server_level.ServerPlayer): CraftPlayer;
  deltaRelativeToAPI(arg0: j_net_minecraft_world_entity.Relative): JavaOpaque<"io.papermc.paper.entity.TeleportFlag$Relative"> | null;
  deltaRelativeToNMS(arg0: JavaOpaque<"io.papermc.paper.entity.TeleportFlag$Relative">): j_net_minecraft_world_entity.Relative;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPolarBear. */
export interface CraftPolarBearMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.PolarBear">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.PolarBear;
  isStanding(): boolean;
  setStanding(arg0: boolean): void;
}
export type CraftPolarBear = CraftPolarBearMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.PolarBear">;
export interface CraftPolarBearStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.PolarBear): CraftPolarBear;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftProjectile. */
export interface CraftProjectileMembers {
  readonly __javaSupertypes?: readonly [AbstractProjectile, JavaOpaque<"org.bukkit.entity.Projectile">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
}
export type CraftProjectile = CraftProjectileMembers & AbstractProjectile & JavaOpaque<"org.bukkit.entity.Projectile">;
export interface CraftProjectileStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.Projectile): CraftProjectile;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftPufferFish. */
export interface CraftPufferFishMembers {
  readonly __javaSupertypes?: readonly [CraftFish, JavaOpaque<"org.bukkit.entity.PufferFish">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractFish;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal.Pufferfish;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
  getPuffState(): number;
  setPuffState(arg0: number): void;
}
export type CraftPufferFish = CraftPufferFishMembers & CraftFish & JavaOpaque<"org.bukkit.entity.PufferFish">;
export interface CraftPufferFishStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Pufferfish): CraftPufferFish;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftRabbit. */
export interface CraftRabbitMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Rabbit">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Rabbit;
  getMoreCarrotTicks(): number;
  getRabbitType(): JavaOpaque<"org.bukkit.entity.Rabbit$Type">;
  setMoreCarrotTicks(arg0: number): void;
  setRabbitType(arg0: JavaOpaque<"org.bukkit.entity.Rabbit$Type">): void;
}
export type CraftRabbit = CraftRabbitMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Rabbit">;
export interface CraftRabbitStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Rabbit): CraftRabbit;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftRaider. */
export interface CraftRaiderMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Raider">];
  getCelebrationSound(): JavaOpaque<"org.bukkit.Sound">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  getPatrolTarget(): JavaOpaque<"org.bukkit.block.Block">;
  getRaid(): JavaOpaque<"org.bukkit.Raid">;
  getTicksOutsideRaid(): number;
  getWave(): number;
  isCanJoinRaid(): boolean;
  isCelebrating(): boolean;
  isPatrolLeader(): boolean;
  setCanJoinRaid(arg0: boolean): void;
  setCelebrating(arg0: boolean): void;
  setPatrolLeader(arg0: boolean): void;
  setPatrolTarget(arg0: JavaOpaque<"org.bukkit.block.Block">): void;
  setRaid(arg0: JavaOpaque<"org.bukkit.Raid">): void;
  setTicksOutsideRaid(arg0: number): void;
  setWave(arg0: number): void;
}
export type CraftRaider = CraftRaiderMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Raider">;
export interface CraftRaiderStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_raid.Raider): CraftRaider;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftRavager. */
export interface CraftRavagerMembers {
  readonly __javaSupertypes?: readonly [CraftRaider, JavaOpaque<"org.bukkit.entity.Ravager">];
  getAttackTicks(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Ravager;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  getRoarTicks(): number;
  getStunnedTicks(): number;
  setAttackTicks(arg0: number): void;
  setRoarTicks(arg0: number): void;
  setStunnedTicks(arg0: number): void;
}
export type CraftRavager = CraftRavagerMembers & CraftRaider & JavaOpaque<"org.bukkit.entity.Ravager">;
export interface CraftRavagerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Ravager): CraftRavager;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSalmon. */
export interface CraftSalmonMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.entity.PaperSchoolableFish">, JavaOpaque<"org.bukkit.entity.Salmon">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractFish;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractSchoolingFish;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal.Salmon;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
  getVariant(): JavaOpaque<"org.bukkit.entity.Salmon$Variant">;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Salmon$Variant">): void;
}
export type CraftSalmon = CraftSalmonMembers & JavaOpaque<"io.papermc.paper.entity.PaperSchoolableFish"> & JavaOpaque<"org.bukkit.entity.Salmon">;
export interface CraftSalmonStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Salmon): CraftSalmon;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSheep. */
export interface CraftSheepMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"io.papermc.paper.entity.PaperShearable">, JavaOpaque<"org.bukkit.entity.Sheep">];
  getColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.Shearable;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_sheep.Sheep;
  isSheared(): boolean;
  setColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setSheared(arg0: boolean): void;
}
export type CraftSheep = CraftSheepMembers & CraftAnimals & JavaOpaque<"io.papermc.paper.entity.PaperShearable"> & JavaOpaque<"org.bukkit.entity.Sheep">;
export interface CraftSheepStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_sheep.Sheep): CraftSheep;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftShulker. */
export interface CraftShulkerMembers {
  readonly __javaSupertypes?: readonly [CraftGolem, CraftEnemy, JavaOpaque<"org.bukkit.entity.Shulker">];
  getAttachedFace(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractGolem;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Shulker;
  getPeek(): number;
  setAttachedFace(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setPeek(arg0: number): void;
}
export type CraftShulker = CraftShulkerMembers & CraftGolem & CraftEnemy & JavaOpaque<"org.bukkit.entity.Shulker">;
export interface CraftShulkerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Shulker): CraftShulker;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftShulkerBullet. */
export interface CraftShulkerBulletMembers {
  readonly __javaSupertypes?: readonly [AbstractProjectile, JavaOpaque<"org.bukkit.entity.ShulkerBullet">];
  getCurrentMovementDirection(): JavaOpaque<"org.bukkit.block.BlockFace">;
  getFlightSteps(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ShulkerBullet;
  getTarget(): JavaOpaque<"org.bukkit.entity.Entity">;
  getTargetDelta(): JavaOpaque<"org.bukkit.util.Vector">;
  setCurrentMovementDirection(arg0: JavaOpaque<"org.bukkit.block.BlockFace">): void;
  setFlightSteps(arg0: number): void;
  setTarget(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setTargetDelta(arg0: JavaOpaque<"org.bukkit.util.Vector">): void;
}
export type CraftShulkerBullet = CraftShulkerBulletMembers & AbstractProjectile & JavaOpaque<"org.bukkit.entity.ShulkerBullet">;
export interface CraftShulkerBulletStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ShulkerBullet): CraftShulkerBullet;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSilverfish. */
export interface CraftSilverfishMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Silverfish">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Silverfish;
}
export type CraftSilverfish = CraftSilverfishMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Silverfish">;
export interface CraftSilverfishStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Silverfish): CraftSilverfish;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSizedFireball. */
export interface CraftSizedFireballMembers {
  readonly __javaSupertypes?: readonly [CraftFireball, JavaOpaque<"org.bukkit.entity.SizedFireball">];
  getDisplayItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Fireball;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  setDisplayItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftSizedFireball = CraftSizedFireballMembers & CraftFireball & JavaOpaque<"org.bukkit.entity.SizedFireball">;
export interface CraftSizedFireballStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.Fireball): CraftSizedFireball;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSkeleton. */
export interface CraftSkeletonMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractSkeleton, JavaOpaque<"org.bukkit.entity.Skeleton">];
  getConversionTime(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractSkeleton;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Skeleton;
  getSkeletonType(): JavaOpaque<"org.bukkit.entity.Skeleton$SkeletonType">;
  inPowderedSnowTime(): number;
  isConverting(): boolean;
  setConversionTime(arg0: number): void;
}
export type CraftSkeleton = CraftSkeletonMembers & CraftAbstractSkeleton & JavaOpaque<"org.bukkit.entity.Skeleton">;
export interface CraftSkeletonStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Skeleton): CraftSkeleton;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSkeletonHorse. */
export interface CraftSkeletonHorseMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractHorse, JavaOpaque<"org.bukkit.entity.SkeletonHorse">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.SkeletonHorse;
  getTrapTime(): number;
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
  isTrapped(): boolean;
  setTrapTime(arg0: number): void;
  setTrapped(arg0: boolean): void;
}
export type CraftSkeletonHorse = CraftSkeletonHorseMembers & CraftAbstractHorse & JavaOpaque<"org.bukkit.entity.SkeletonHorse">;
export interface CraftSkeletonHorseStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.SkeletonHorse): CraftSkeletonHorse;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSlime. */
export interface CraftSlimeMembers {
  readonly __javaSupertypes?: readonly [CraftMob, CraftEnemy, JavaOpaque<"org.bukkit.entity.Slime">];
  canWander(): boolean;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Slime;
  getSize(): number;
  setSize(arg0: number): void;
  setWander(arg0: boolean): void;
}
export type CraftSlime = CraftSlimeMembers & CraftMob & CraftEnemy & JavaOpaque<"org.bukkit.entity.Slime">;
export interface CraftSlimeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Slime): CraftSlime;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSmallFireball. */
export interface CraftSmallFireballMembers {
  readonly __javaSupertypes?: readonly [CraftSizedFireball, JavaOpaque<"org.bukkit.entity.SmallFireball">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Fireball;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.SmallFireball;
}
export type CraftSmallFireball = CraftSmallFireballMembers & CraftSizedFireball & JavaOpaque<"org.bukkit.entity.SmallFireball">;
export interface CraftSmallFireballStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.SmallFireball): CraftSmallFireball;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSniffer. */
export interface CraftSnifferMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Sniffer">];
  addExploredLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  canDig(): boolean;
  findPossibleDigLocation(): JavaOpaque<"org.bukkit.Location">;
  getExploredLocations(): JavaCollection<JavaOpaque<"org.bukkit.Location">>;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_sniffer.Sniffer;
  getState(): JavaOpaque<"org.bukkit.entity.Sniffer$State">;
  removeExploredLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setState(arg0: JavaOpaque<"org.bukkit.entity.Sniffer$State">): void;
}
export type CraftSniffer = CraftSnifferMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Sniffer">;
export interface CraftSnifferStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_sniffer.Sniffer): CraftSniffer;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSnowball. */
export interface CraftSnowballMembers {
  readonly __javaSupertypes?: readonly [CraftThrowableProjectile, JavaOpaque<"org.bukkit.entity.Snowball">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Snowball;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
}
export type CraftSnowball = CraftSnowballMembers & CraftThrowableProjectile & JavaOpaque<"org.bukkit.entity.Snowball">;
export interface CraftSnowballStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.Snowball): CraftSnowball;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSnowman. */
export interface CraftSnowmanMembers {
  readonly __javaSupertypes?: readonly [CraftGolem, JavaOpaque<"org.bukkit.entity.Snowman">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_animal.SnowGolem]>, JavaOpaque<"io.papermc.paper.entity.PaperShearable">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.Shearable;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractGolem;
  getHandle(): j_net_minecraft_world_entity_animal.SnowGolem;
  isDerp(): boolean;
  setDerp(arg0: boolean): void;
}
export type CraftSnowman = CraftSnowmanMembers & CraftGolem & JavaOpaque<"org.bukkit.entity.Snowman"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_animal.SnowGolem]> & JavaOpaque<"io.papermc.paper.entity.PaperShearable">;
export interface CraftSnowmanStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.SnowGolem): CraftSnowman;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSpectralArrow. */
export interface CraftSpectralArrowMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractArrow, JavaOpaque<"org.bukkit.entity.SpectralArrow">];
  getGlowingTicks(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractArrow;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.SpectralArrow;
  setGlowingTicks(arg0: number): void;
}
export type CraftSpectralArrow = CraftSpectralArrowMembers & CraftAbstractArrow & JavaOpaque<"org.bukkit.entity.SpectralArrow">;
export interface CraftSpectralArrowStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.SpectralArrow): CraftSpectralArrow;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSpellcaster. */
export interface CraftSpellcasterMembers {
  readonly __javaSupertypes?: readonly [CraftIllager, JavaOpaque<"org.bukkit.entity.Spellcaster">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractIllager;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.SpellcasterIllager;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  getSpell(): JavaOpaque<"org.bukkit.entity.Spellcaster$Spell">;
  setSpell(arg0: JavaOpaque<"org.bukkit.entity.Spellcaster$Spell">): void;
}
export type CraftSpellcaster = CraftSpellcasterMembers & CraftIllager & JavaOpaque<"org.bukkit.entity.Spellcaster">;
export interface CraftSpellcasterStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.SpellcasterIllager): CraftSpellcaster;
  toBukkitSpell(arg0: j_net_minecraft_world_entity_monster.SpellcasterIllager_IllagerSpell): JavaOpaque<"org.bukkit.entity.Spellcaster$Spell">;
  toNMSSpell(arg0: JavaOpaque<"org.bukkit.entity.Spellcaster$Spell">): j_net_minecraft_world_entity_monster.SpellcasterIllager_IllagerSpell;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSpider. */
export interface CraftSpiderMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Spider">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Spider;
}
export type CraftSpider = CraftSpiderMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Spider">;
export interface CraftSpiderStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Spider): CraftSpider;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftSquid. */
export interface CraftSquidMembers {
  readonly __javaSupertypes?: readonly [CraftAgeable, JavaOpaque<"org.bukkit.entity.Squid">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Squid;
}
export type CraftSquid = CraftSquidMembers & CraftAgeable & JavaOpaque<"org.bukkit.entity.Squid">;
export interface CraftSquidStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Squid): CraftSquid;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftStray. */
export interface CraftStrayMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractSkeleton, JavaOpaque<"org.bukkit.entity.Stray">];
  getSkeletonType(): JavaOpaque<"org.bukkit.entity.Skeleton$SkeletonType">;
}
export type CraftStray = CraftStrayMembers & CraftAbstractSkeleton & JavaOpaque<"org.bukkit.entity.Stray">;
export interface CraftStrayStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Stray): CraftStray;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftStrider. */
export interface CraftStriderMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Strider">];
  getBoostTicks(): number;
  getCurrentBoostTicks(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_monster.Strider;
  getSteerMaterial(): JavaOpaque<"org.bukkit.Material">;
  hasSaddle(): boolean;
  isShivering(): boolean;
  setBoostTicks(arg0: number): void;
  setCurrentBoostTicks(arg0: number): void;
  setSaddle(arg0: boolean): void;
  setShivering(arg0: boolean): void;
}
export type CraftStrider = CraftStriderMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Strider">;
export interface CraftStriderStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Strider): CraftStrider;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTadpole. */
export interface CraftTadpoleMembers {
  readonly __javaSupertypes?: readonly [CraftFish, JavaOpaque<"org.bukkit.entity.Tadpole">];
  getAge(): number;
  getAgeLock(): boolean;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractFish;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
  getHandle(): j_net_minecraft_world_entity_animal_frog.Tadpole;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
}
export type CraftTadpole = CraftTadpoleMembers & CraftFish & JavaOpaque<"org.bukkit.entity.Tadpole">;
export interface CraftTadpoleStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_frog.Tadpole): CraftTadpole;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTameableAnimal. */
export interface CraftTameableAnimalMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Creature">, JavaOpaque<"org.bukkit.entity.Tameable">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.TamableAnimal;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getOwner(): JavaOpaque<"org.bukkit.entity.AnimalTamer">;
  getOwnerUUID(): JavaOpaque<"java.util.UUID">;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID">;
  isSitting(): boolean;
  isTamed(): boolean;
  setOwner(arg0: JavaOpaque<"org.bukkit.entity.AnimalTamer">): void;
  setOwnerUUID(arg0: JavaOpaque<"java.util.UUID">): void;
  setSitting(arg0: boolean): void;
  setTamed(arg0: boolean): void;
}
export type CraftTameableAnimal = CraftTameableAnimalMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Creature"> & JavaOpaque<"org.bukkit.entity.Tameable">;
export interface CraftTameableAnimalStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.TamableAnimal): CraftTameableAnimal;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTextDisplay. */
export interface CraftTextDisplayMembers {
  readonly __javaSupertypes?: readonly [CraftDisplay, JavaOpaque<"org.bukkit.entity.TextDisplay">];
  getAlignment(): JavaOpaque<"org.bukkit.entity.TextDisplay$TextAlignment">;
  getBackgroundColor(): JavaOpaque<"org.bukkit.Color">;
  getHandle(): j_net_minecraft_world_entity.Display_TextDisplay;
  getHandle(): j_net_minecraft_world_entity.Display;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getLineWidth(): number;
  getText(): string;
  getTextOpacity(): number;
  isDefaultBackground(): boolean;
  isSeeThrough(): boolean;
  isShadowed(): boolean;
  setAlignment(arg0: JavaOpaque<"org.bukkit.entity.TextDisplay$TextAlignment">): void;
  setBackgroundColor(arg0: JavaOpaque<"org.bukkit.Color">): void;
  setDefaultBackground(arg0: boolean): void;
  setLineWidth(arg0: number): void;
  setSeeThrough(arg0: boolean): void;
  setShadowed(arg0: boolean): void;
  setText(arg0: string): void;
  setTextOpacity(arg0: number): void;
  text(): JavaOpaque<"net.kyori.adventure.text.Component">;
  text(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
}
export type CraftTextDisplay = CraftTextDisplayMembers & CraftDisplay & JavaOpaque<"org.bukkit.entity.TextDisplay">;
export interface CraftTextDisplayStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Display_TextDisplay): CraftTextDisplay;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftThrowableProjectile. */
export interface CraftThrowableProjectileMembers {
  readonly __javaSupertypes?: readonly [CraftProjectile, JavaOpaque<"org.bukkit.entity.ThrowableProjectile">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftThrowableProjectile = CraftThrowableProjectileMembers & CraftProjectile & JavaOpaque<"org.bukkit.entity.ThrowableProjectile">;
export interface CraftThrowableProjectileStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrowableItemProjectile): CraftThrowableProjectile;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftThrownExpBottle. */
export interface CraftThrownExpBottleMembers {
  readonly __javaSupertypes?: readonly [CraftThrowableProjectile, JavaOpaque<"org.bukkit.entity.ThrownExpBottle">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrownExperienceBottle;
}
export type CraftThrownExpBottle = CraftThrownExpBottleMembers & CraftThrowableProjectile & JavaOpaque<"org.bukkit.entity.ThrownExpBottle">;
export interface CraftThrownExpBottleStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrownExperienceBottle): CraftThrownExpBottle;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftThrownLingeringPotion. */
export interface CraftThrownLingeringPotionMembers {
  readonly __javaSupertypes?: readonly [CraftThrownPotion, JavaOpaque<"org.bukkit.entity.LingeringPotion">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractThrownPotion;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrownLingeringPotion;
  getPotionMeta(): JavaOpaque<"org.bukkit.inventory.meta.PotionMeta">;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftThrownLingeringPotion = CraftThrownLingeringPotionMembers & CraftThrownPotion & JavaOpaque<"org.bukkit.entity.LingeringPotion">;
export interface CraftThrownLingeringPotionStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrownLingeringPotion): CraftThrownLingeringPotion;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftThrownPotion. */
export interface CraftThrownPotionMembers {
  readonly __javaSupertypes?: readonly [CraftThrowableProjectile, JavaOpaque<"org.bukkit.entity.ThrownPotion">];
  getEffects(): JavaCollection<JavaOpaque<"org.bukkit.potion.PotionEffect">>;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractThrownPotion;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  setPotionMeta(arg0: JavaOpaque<"org.bukkit.inventory.meta.PotionMeta">): void;
  splash(): void;
}
export type CraftThrownPotion = CraftThrownPotionMembers & CraftThrowableProjectile & JavaOpaque<"org.bukkit.entity.ThrownPotion">;
export interface CraftThrownPotionStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.AbstractThrownPotion): CraftThrownPotion;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftThrownSplashPotion. */
export interface CraftThrownSplashPotionMembers {
  readonly __javaSupertypes?: readonly [CraftThrownPotion, JavaOpaque<"org.bukkit.entity.SplashPotion">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractThrownPotion;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrowableItemProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrownSplashPotion;
  getPotionMeta(): JavaOpaque<"org.bukkit.inventory.meta.PotionMeta">;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
}
export type CraftThrownSplashPotion = CraftThrownSplashPotionMembers & CraftThrownPotion & JavaOpaque<"org.bukkit.entity.SplashPotion">;
export interface CraftThrownSplashPotionStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrownSplashPotion): CraftThrownSplashPotion;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTNTPrimed. */
export interface CraftTNTPrimedMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.TNTPrimed">];
  getBlockData(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getFuseTicks(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_item.PrimedTnt;
  getSource(): JavaOpaque<"org.bukkit.entity.Entity">;
  getYield(): number;
  isIncendiary(): boolean;
  setBlockData(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  setFuseTicks(arg0: number): void;
  setIsIncendiary(arg0: boolean): void;
  setSource(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  setYield(arg0: number): void;
}
export type CraftTNTPrimed = CraftTNTPrimedMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.TNTPrimed">;
export interface CraftTNTPrimedStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_item.PrimedTnt): CraftTNTPrimed;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTraderLlama. */
export interface CraftTraderLlamaMembers {
  readonly __javaSupertypes?: readonly [CraftLlama, JavaOpaque<"org.bukkit.entity.TraderLlama">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractChestedHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.AbstractHorse;
  getHandle(): j_net_minecraft_world_entity_animal_horse.Llama;
  getHandle(): j_net_minecraft_world_entity_animal_horse.TraderLlama;
}
export type CraftTraderLlama = CraftTraderLlamaMembers & CraftLlama & JavaOpaque<"org.bukkit.entity.TraderLlama">;
export interface CraftTraderLlamaStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.TraderLlama): CraftTraderLlama;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTrident. */
export interface CraftTridentMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractArrow, JavaOpaque<"org.bukkit.entity.Trident">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractArrow;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.ThrownTrident;
  getItem(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getLoyaltyLevel(): number;
  hasDealtDamage(): boolean;
  hasGlint(): boolean;
  setGlint(arg0: boolean): void;
  setHasDealtDamage(arg0: boolean): void;
  setItem(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setLoyaltyLevel(arg0: number): void;
}
export type CraftTrident = CraftTridentMembers & CraftAbstractArrow & JavaOpaque<"org.bukkit.entity.Trident">;
export interface CraftTridentStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.ThrownTrident): CraftTrident;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTropicalFish. */
export interface CraftTropicalFishMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.entity.PaperSchoolableFish">, JavaOpaque<"org.bukkit.entity.TropicalFish">];
  getBodyColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractFish;
  getHandle(): j_net_minecraft_world_entity_animal.AbstractSchoolingFish;
  getHandle(): j_net_minecraft_world_entity_animal.Bucketable;
  getHandle(): j_net_minecraft_world_entity_animal.TropicalFish;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
  getPattern(): JavaOpaque<"org.bukkit.entity.TropicalFish$Pattern">;
  getPatternColor(): JavaOpaque<"org.bukkit.DyeColor">;
  setBodyColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setPattern(arg0: JavaOpaque<"org.bukkit.entity.TropicalFish$Pattern">): void;
  setPatternColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
}
export type CraftTropicalFish = CraftTropicalFishMembers & JavaOpaque<"io.papermc.paper.entity.PaperSchoolableFish"> & JavaOpaque<"org.bukkit.entity.TropicalFish">;
export interface CraftTropicalFishStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.TropicalFish): CraftTropicalFish;
  getBodyColor(arg0: number): JavaOpaque<"org.bukkit.DyeColor">;
  getData(arg0: JavaOpaque<"org.bukkit.DyeColor">, arg1: JavaOpaque<"org.bukkit.DyeColor">, arg2: JavaOpaque<"org.bukkit.entity.TropicalFish$Pattern">): number;
  getPattern(arg0: number): JavaOpaque<"org.bukkit.entity.TropicalFish$Pattern">;
  getPatternColor(arg0: number): JavaOpaque<"org.bukkit.DyeColor">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftTurtle. */
export interface CraftTurtleMembers {
  readonly __javaSupertypes?: readonly [CraftAnimals, JavaOpaque<"org.bukkit.entity.Turtle">];
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal.Turtle;
  getHome(): JavaOpaque<"org.bukkit.Location">;
  hasEgg(): boolean;
  isGoingHome(): boolean;
  isLayingEgg(): boolean;
  setHasEgg(arg0: boolean): void;
  setHome(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftTurtle = CraftTurtleMembers & CraftAnimals & JavaOpaque<"org.bukkit.entity.Turtle">;
export interface CraftTurtleStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.Turtle): CraftTurtle;
}

/** JVM abstract org.bukkit.craftbukkit.entity.CraftVehicle. */
export interface CraftVehicleMembers {
  readonly __javaSupertypes?: readonly [CraftEntity, JavaOpaque<"org.bukkit.entity.Vehicle">];
}
export type CraftVehicle = CraftVehicleMembers & CraftEntity & JavaOpaque<"org.bukkit.entity.Vehicle">;
export interface CraftVehicleStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity.Entity): CraftVehicle;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftVex. */
export interface CraftVexMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Vex">];
  getBound(): JavaOpaque<"org.bukkit.Location">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Vex;
  getLifeTicks(): number;
  getLimitedLifetimeTicks(): number;
  getSummoner(): JavaOpaque<"org.bukkit.entity.Mob">;
  hasLimitedLife(): boolean;
  hasLimitedLifetime(): boolean;
  isCharging(): boolean;
  setBound(arg0: JavaOpaque<"org.bukkit.Location">): void;
  setCharging(arg0: boolean): void;
  setLifeTicks(arg0: number): void;
  setLimitedLifetime(arg0: boolean): void;
  setLimitedLifetimeTicks(arg0: number): void;
  setSummoner(arg0: JavaOpaque<"org.bukkit.entity.Mob">): void;
}
export type CraftVex = CraftVexMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Vex">;
export interface CraftVexStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Vex): CraftVex;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftVillager. */
export interface CraftVillagerMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractVillager, JavaOpaque<"org.bukkit.entity.Villager">];
  addTrades(arg0: number): boolean;
  clearReputations(): void;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_npc.AbstractVillager;
  getHandle(): j_net_minecraft_world_entity_npc.Villager;
  getProfession(): JavaOpaque<"org.bukkit.entity.Villager$Profession">;
  getReputation(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"com.destroystokyo.paper.entity.villager.Reputation">;
  getReputations(): JavaMap<JavaOpaque<"java.util.UUID">, JavaOpaque<"com.destroystokyo.paper.entity.villager.Reputation">>;
  getRestocksToday(): number;
  getVillagerExperience(): number;
  getVillagerLevel(): number;
  getVillagerType(): JavaOpaque<"org.bukkit.entity.Villager$Type">;
  increaseLevel(arg0: number): boolean;
  remove(): void;
  restock(): void;
  setProfession(arg0: JavaOpaque<"org.bukkit.entity.Villager$Profession">): void;
  setReputation(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"com.destroystokyo.paper.entity.villager.Reputation">): void;
  setReputations(arg0: JavaMap<JavaOpaque<"java.util.UUID">, JavaOpaque<"com.destroystokyo.paper.entity.villager.Reputation">>): void;
  setRestocksToday(arg0: number): void;
  setVillagerExperience(arg0: number): void;
  setVillagerLevel(arg0: number): void;
  setVillagerType(arg0: JavaOpaque<"org.bukkit.entity.Villager$Type">): void;
  shakeHead(): void;
  sleep(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  updateDemand(): void;
  wakeup(): void;
  zombify(): JavaOpaque<"org.bukkit.entity.ZombieVillager">;
}
export type CraftVillager = CraftVillagerMembers & CraftAbstractVillager & JavaOpaque<"org.bukkit.entity.Villager">;
export interface CraftVillagerStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_npc.Villager): CraftVillager;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftVillager$CraftProfession. */
export interface CraftVillager_CraftProfessionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Villager$Profession">, j_net_minecraft_world_entity_npc.VillagerProfession]>, JavaOpaque<"org.bukkit.entity.Villager$Profession">];
}
export type CraftVillager_CraftProfession = CraftVillager_CraftProfessionMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Villager$Profession">, j_net_minecraft_world_entity_npc.VillagerProfession]> & JavaOpaque<"org.bukkit.entity.Villager$Profession">;
export interface CraftVillager_CraftProfessionStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>): CraftVillager_CraftProfession;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Villager$Profession">): j_net_minecraft_world_entity_npc.VillagerProfession;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Villager$Profession">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerProfession>): JavaOpaque<"org.bukkit.entity.Villager$Profession">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_npc.VillagerProfession): JavaOpaque<"org.bukkit.entity.Villager$Profession">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftVillager$CraftType. */
export interface CraftVillager_CraftTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Villager$Type">, j_net_minecraft_world_entity_npc.VillagerType]>, JavaOpaque<"org.bukkit.entity.Villager$Type">];
}
export type CraftVillager_CraftType = CraftVillager_CraftTypeMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.entity.Villager$Type">, j_net_minecraft_world_entity_npc.VillagerType]> & JavaOpaque<"org.bukkit.entity.Villager$Type">;
export interface CraftVillager_CraftTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerType>): CraftVillager_CraftType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Villager$Type">): j_net_minecraft_world_entity_npc.VillagerType;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Villager$Type">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerType>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerType>): JavaOpaque<"org.bukkit.entity.Villager$Type">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_npc.VillagerType): JavaOpaque<"org.bukkit.entity.Villager$Type">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftVillagerZombie. */
export interface CraftVillagerZombieMembers {
  readonly __javaSupertypes?: readonly [CraftZombie, JavaOpaque<"org.bukkit.entity.ZombieVillager">];
  getConversionPlayer(): JavaOpaque<"org.bukkit.OfflinePlayer">;
  getConversionTime(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Zombie;
  getHandle(): j_net_minecraft_world_entity_monster.ZombieVillager;
  getVillagerProfession(): JavaOpaque<"org.bukkit.entity.Villager$Profession">;
  getVillagerType(): JavaOpaque<"org.bukkit.entity.Villager$Type">;
  isConverting(): boolean;
  setConversionPlayer(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">): void;
  setConversionTime(arg0: number): void;
  setConversionTime(arg0: number, arg1: boolean): void;
  setVillagerProfession(arg0: JavaOpaque<"org.bukkit.entity.Villager$Profession">): void;
  setVillagerType(arg0: JavaOpaque<"org.bukkit.entity.Villager$Type">): void;
}
export type CraftVillagerZombie = CraftVillagerZombieMembers & CraftZombie & JavaOpaque<"org.bukkit.entity.ZombieVillager">;
export interface CraftVillagerZombieStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.ZombieVillager): CraftVillagerZombie;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftVindicator. */
export interface CraftVindicatorMembers {
  readonly __javaSupertypes?: readonly [CraftIllager, JavaOpaque<"org.bukkit.entity.Vindicator">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.AbstractIllager;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Vindicator;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  isJohnny(): boolean;
  setJohnny(arg0: boolean): void;
}
export type CraftVindicator = CraftVindicatorMembers & CraftIllager & JavaOpaque<"org.bukkit.entity.Vindicator">;
export interface CraftVindicatorStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Vindicator): CraftVindicator;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWanderingTrader. */
export interface CraftWanderingTraderMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractVillager, JavaOpaque<"org.bukkit.entity.WanderingTrader">];
  canDrinkMilk(): boolean;
  canDrinkPotion(): boolean;
  getDespawnDelay(): number;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_npc.AbstractVillager;
  getHandle(): j_net_minecraft_world_entity_npc.WanderingTrader;
  getWanderingTowards(): JavaOpaque<"org.bukkit.Location">;
  setCanDrinkMilk(arg0: boolean): void;
  setCanDrinkPotion(arg0: boolean): void;
  setDespawnDelay(arg0: number): void;
  setWanderingTowards(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftWanderingTrader = CraftWanderingTraderMembers & CraftAbstractVillager & JavaOpaque<"org.bukkit.entity.WanderingTrader">;
export interface CraftWanderingTraderStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_npc.WanderingTrader): CraftWanderingTrader;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWarden. */
export interface CraftWardenMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Warden">];
  clearAnger(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
  getAnger(): number;
  getAnger(arg0: JavaOpaque<"org.bukkit.entity.Entity">): number;
  getAngerLevel(): JavaOpaque<"org.bukkit.entity.Warden$AngerLevel">;
  getEntityAngryAt(): JavaOpaque<"org.bukkit.entity.LivingEntity">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster_warden.Warden;
  getHighestAnger(): number;
  increaseAnger(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: number): void;
  setAnger(arg0: JavaOpaque<"org.bukkit.entity.Entity">, arg1: number): void;
  setDisturbanceLocation(arg0: JavaOpaque<"org.bukkit.Location">): void;
}
export type CraftWarden = CraftWardenMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Warden">;
export interface CraftWardenStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster_warden.Warden): CraftWarden;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWaterMob. */
export interface CraftWaterMobMembers {
  readonly __javaSupertypes?: readonly [CraftCreature, JavaOpaque<"org.bukkit.entity.WaterMob">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_animal.WaterAnimal;
}
export type CraftWaterMob = CraftWaterMobMembers & CraftCreature & JavaOpaque<"org.bukkit.entity.WaterMob">;
export interface CraftWaterMobStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal.WaterAnimal): CraftWaterMob;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWindCharge. */
export interface CraftWindChargeMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractWindCharge, JavaOpaque<"org.bukkit.entity.WindCharge">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile_windcharge.AbstractWindCharge;
  getHandle(): j_net_minecraft_world_entity_projectile_windcharge.WindCharge;
}
export type CraftWindCharge = CraftWindChargeMembers & CraftAbstractWindCharge & JavaOpaque<"org.bukkit.entity.WindCharge">;
export interface CraftWindChargeStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile_windcharge.WindCharge): CraftWindCharge;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWitch. */
export interface CraftWitchMembers {
  readonly __javaSupertypes?: readonly [CraftRaider, JavaOpaque<"org.bukkit.entity.Witch">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Witch]>];
  getDrinkingPotion(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Witch;
  getHandle(): j_net_minecraft_world_entity_raid.Raider;
  getPotionUseTimeLeft(): number;
  isDrinkingPotion(): boolean;
  setDrinkingPotion(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): void;
  setPotionUseTimeLeft(arg0: number): void;
}
export type CraftWitch = CraftWitchMembers & CraftRaider & JavaOpaque<"org.bukkit.entity.Witch"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_monster.Witch]>;
export interface CraftWitchStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Witch): CraftWitch;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWither. */
export interface CraftWitherMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Wither">, JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_boss_wither.WitherBoss]>];
  canTravelThroughPortals(): boolean;
  enterInvulnerabilityPhase(): void;
  getBossBar(): JavaOpaque<"org.bukkit.boss.BossBar">;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_boss_wither.WitherBoss;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getInvulnerabilityTicks(): number;
  getInvulnerableTicks(): number;
  getTarget(arg0: JavaOpaque<"org.bukkit.entity.Wither$Head">): JavaOpaque<"org.bukkit.entity.LivingEntity">;
  isCharged(): boolean;
  setCanTravelThroughPortals(arg0: boolean): void;
  setInvulnerabilityTicks(arg0: number): void;
  setInvulnerableTicks(arg0: number): void;
  setTarget(arg0: JavaOpaque<"org.bukkit.entity.Wither$Head">, arg1: JavaOpaque<"org.bukkit.entity.LivingEntity">): void;
}
export type CraftWither = CraftWitherMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Wither"> & JavaOpaque<"com.destroystokyo.paper.entity.CraftRangedEntity", [j_net_minecraft_world_entity_boss_wither.WitherBoss]>;
export interface CraftWitherStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_boss_wither.WitherBoss): CraftWither;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWitherSkeleton. */
export interface CraftWitherSkeletonMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractSkeleton, JavaOpaque<"org.bukkit.entity.WitherSkeleton">];
  getSkeletonType(): JavaOpaque<"org.bukkit.entity.Skeleton$SkeletonType">;
}
export type CraftWitherSkeleton = CraftWitherSkeletonMembers & CraftAbstractSkeleton & JavaOpaque<"org.bukkit.entity.WitherSkeleton">;
export interface CraftWitherSkeletonStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.WitherSkeleton): CraftWitherSkeleton;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWitherSkull. */
export interface CraftWitherSkull_2Members {
  readonly __javaSupertypes?: readonly [CraftFireball, JavaOpaque<"org.bukkit.entity.WitherSkull">];
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile;
  getHandle(): j_net_minecraft_world_entity_projectile.Projectile;
  getHandle(): j_net_minecraft_world_entity_projectile.WitherSkull;
  isCharged(): boolean;
  setCharged(arg0: boolean): void;
}
export type CraftWitherSkull_2 = CraftWitherSkull_2Members & CraftFireball & JavaOpaque<"org.bukkit.entity.WitherSkull">;
export interface CraftWitherSkull_2Statics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_projectile.WitherSkull): CraftWitherSkull_2;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWolf. */
export interface CraftWolfMembers {
  readonly __javaSupertypes?: readonly [CraftTameableAnimal, JavaOpaque<"org.bukkit.entity.Wolf">];
  getCollarColor(): JavaOpaque<"org.bukkit.DyeColor">;
  getHandle(): j_net_minecraft_world_entity.AgeableMob;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity.TamableAnimal;
  getHandle(): j_net_minecraft_world_entity_animal.Animal;
  getHandle(): j_net_minecraft_world_entity_animal_wolf.Wolf;
  getSoundVariant(): JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">;
  getTailAngle(): number;
  getVariant(): JavaOpaque<"org.bukkit.entity.Wolf$Variant">;
  isAngry(): boolean;
  isInterested(): boolean;
  isWet(): boolean;
  setAngry(arg0: boolean): void;
  setCollarColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setInterested(arg0: boolean): void;
  setSoundVariant(arg0: JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">): void;
  setVariant(arg0: JavaOpaque<"org.bukkit.entity.Wolf$Variant">): void;
}
export type CraftWolf = CraftWolfMembers & CraftTameableAnimal & JavaOpaque<"org.bukkit.entity.Wolf">;
export interface CraftWolfStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_wolf.Wolf): CraftWolf;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWolf$CraftSoundVariant. */
export interface CraftWolf_CraftSoundVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant]>, JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">];
}
export type CraftWolf_CraftSoundVariant = CraftWolf_CraftSoundVariantMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant]> & JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">;
export interface CraftWolf_CraftSoundVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant>): CraftWolf_CraftSoundVariant;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">): j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant>): JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant): JavaOpaque<"org.bukkit.entity.Wolf$SoundVariant">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftWolf$CraftVariant. */
export interface CraftWolf_CraftVariantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal_wolf.WolfVariant]>, JavaOpaque<"org.bukkit.entity.Wolf$Variant">];
}
export type CraftWolf_CraftVariant = CraftWolf_CraftVariantMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_entity_animal_wolf.WolfVariant]> & JavaOpaque<"org.bukkit.entity.Wolf$Variant">;
export interface CraftWolf_CraftVariantStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfVariant>): CraftWolf_CraftVariant;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.entity.Wolf$Variant">): j_net_minecraft_world_entity_animal_wolf.WolfVariant;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.entity.Wolf$Variant">): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfVariant>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfVariant>): JavaOpaque<"org.bukkit.entity.Wolf$Variant">;
  minecraftToBukkit(arg0: j_net_minecraft_world_entity_animal_wolf.WolfVariant): JavaOpaque<"org.bukkit.entity.Wolf$Variant">;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftZoglin. */
export interface CraftZoglinMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Zoglin">];
  canBreed(): boolean;
  getAge(): number;
  getAgeLock(): boolean;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Zoglin;
  isAdult(): boolean;
  isBaby(): boolean;
  setAdult(): void;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
  setBaby(): void;
  setBaby(arg0: boolean): void;
  setBreed(arg0: boolean): void;
}
export type CraftZoglin = CraftZoglinMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Zoglin">;
export interface CraftZoglinStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Zoglin): CraftZoglin;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftZombie. */
export interface CraftZombieMembers {
  readonly __javaSupertypes?: readonly [CraftMonster, JavaOpaque<"org.bukkit.entity.Zombie">];
  canBreakDoors(): boolean;
  canBreed(): boolean;
  getAge(): number;
  getAgeLock(): boolean;
  getConversionTime(): number;
  getHandle(): j_net_minecraft_world_entity.Entity;
  getHandle(): j_net_minecraft_world_entity.Leashable;
  getHandle(): j_net_minecraft_world_entity.LivingEntity;
  getHandle(): j_net_minecraft_world_entity.Mob;
  getHandle(): j_net_minecraft_world_entity.PathfinderMob;
  getHandle(): j_net_minecraft_world_entity_monster.Enemy;
  getHandle(): j_net_minecraft_world_entity_monster.Monster;
  getHandle(): j_net_minecraft_world_entity_monster.Zombie;
  getVillagerProfession(): JavaOpaque<"org.bukkit.entity.Villager$Profession">;
  isAdult(): boolean;
  isArmsRaised(): boolean;
  isBaby(): boolean;
  isConverting(): boolean;
  isDrowning(): boolean;
  isVillager(): boolean;
  setAdult(): void;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
  setArmsRaised(arg0: boolean): void;
  setBaby(): void;
  setBaby(arg0: boolean): void;
  setBreed(arg0: boolean): void;
  setCanBreakDoors(arg0: boolean): void;
  setConversionTime(arg0: number): void;
  setShouldBurnInDay(arg0: boolean): void;
  setVillager(arg0: boolean): void;
  setVillagerProfession(arg0: JavaOpaque<"org.bukkit.entity.Villager$Profession">): void;
  shouldBurnInDay(): boolean;
  startDrowning(arg0: number): void;
  stopDrowning(): void;
  supportsBreakingDoors(): boolean;
}
export type CraftZombie = CraftZombieMembers & CraftMonster & JavaOpaque<"org.bukkit.entity.Zombie">;
export interface CraftZombieStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_monster.Zombie): CraftZombie;
}

/** JVM class org.bukkit.craftbukkit.entity.CraftZombieHorse. */
export interface CraftZombieHorseMembers {
  readonly __javaSupertypes?: readonly [CraftAbstractHorse, JavaOpaque<"org.bukkit.entity.ZombieHorse">];
  getVariant(): JavaOpaque<"org.bukkit.entity.Horse$Variant">;
}
export type CraftZombieHorse = CraftZombieHorseMembers & CraftAbstractHorse & JavaOpaque<"org.bukkit.entity.ZombieHorse">;
export interface CraftZombieHorseStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer, arg1: j_net_minecraft_world_entity_animal_horse.ZombieHorse): CraftZombieHorse;
}
