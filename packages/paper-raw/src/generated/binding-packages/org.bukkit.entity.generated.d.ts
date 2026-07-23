// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper from './com.destroystokyo.paper.generated.js';
import type * as j_com_destroystokyo_paper_block from './com.destroystokyo.paper.block.generated.js';
import type * as j_com_destroystokyo_paper_entity from './com.destroystokyo.paper.entity.generated.js';
import type * as j_com_destroystokyo_paper_entity_villager from './com.destroystokyo.paper.entity.villager.generated.js';
import type * as j_com_destroystokyo_paper_loottable from './com.destroystokyo.paper.loottable.generated.js';
import type * as j_com_destroystokyo_paper_network from './com.destroystokyo.paper.network.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_connection from './io.papermc.paper.connection.generated.js';
import type * as j_io_papermc_paper_datacomponent from './io.papermc.paper.datacomponent.generated.js';
import type * as j_io_papermc_paper_entity from './io.papermc.paper.entity.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';
import type * as j_io_papermc_paper_potion from './io.papermc.paper.potion.generated.js';
import type * as j_io_papermc_paper_threadedregions_scheduler from './io.papermc.paper.threadedregions.scheduler.generated.js';
import type * as j_io_papermc_paper_world_damagesource from './io.papermc.paper.world.damagesource.generated.js';
import type * as j_io_papermc_paper_world_flag from './io.papermc.paper.world.flag.generated.js';
import type * as j_net_kyori_adventure_bossbar from './net.kyori.adventure.bossbar.generated.js';
import type * as j_net_kyori_adventure_identity from './net.kyori.adventure.identity.generated.js';
import type * as j_net_kyori_adventure_sound from './net.kyori.adventure.sound.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_event from './net.kyori.adventure.text.event.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_advancement from './org.bukkit.advancement.generated.js';
import type * as j_org_bukkit_attribute from './org.bukkit.attribute.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_data from './org.bukkit.block.data.generated.js';
import type * as j_org_bukkit_block_sign from './org.bukkit.block.sign.generated.js';
import type * as j_org_bukkit_boss from './org.bukkit.boss.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_conversations from './org.bukkit.conversations.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_entity_memory from './org.bukkit.entity.memory.generated.js';
import type * as j_org_bukkit_event_entity from './org.bukkit.event.entity.generated.js';
import type * as j_org_bukkit_event_inventory from './org.bukkit.event.inventory.generated.js';
import type * as j_org_bukkit_event_player from './org.bukkit.event.player.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_inventory_meta from './org.bukkit.inventory.meta.generated.js';
import type * as j_org_bukkit_loot from './org.bukkit.loot.generated.js';
import type * as j_org_bukkit_map from './org.bukkit.map.generated.js';
import type * as j_org_bukkit_material from './org.bukkit.material.generated.js';
import type * as j_org_bukkit_metadata from './org.bukkit.metadata.generated.js';
import type * as j_org_bukkit_persistence from './org.bukkit.persistence.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';
import type * as j_org_bukkit_plugin_messaging from './org.bukkit.plugin.messaging.generated.js';
import type * as j_org_bukkit_potion from './org.bukkit.potion.generated.js';
import type * as j_org_bukkit_projectiles from './org.bukkit.projectiles.generated.js';
import type * as j_org_bukkit_scoreboard from './org.bukkit.scoreboard.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.entity.AbstractArrow. */
export interface AbstractArrowMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  getAttachedBlock(): j_org_bukkit_block.Block | null;
  getAttachedBlocks(): JavaList<j_org_bukkit_block.Block>;
  getDamage(): number;
  getHitSound(): j_org_bukkit.Sound_2;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  getKnockbackStrength(): number;
  getLifetimeTicks(): number;
  getPickupRule(): AbstractArrow_PickupRule;
  getPickupStatus(): AbstractArrow_PickupStatus;
  getPierceLevel(): number;
  getWeapon(): j_org_bukkit_inventory.ItemStack | null;
  isCritical(): boolean;
  isInBlock(): boolean;
  isShotFromCrossbow(): boolean;
  setCritical(arg0: boolean): void;
  setDamage(arg0: number): void;
  setHitSound(arg0: j_org_bukkit.Sound_2): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  setItemStack(arg0: j_org_bukkit_inventory.ItemStack): void;
  setKnockbackStrength(arg0: number): void;
  setLifetimeTicks(arg0: number): void;
  setPickupRule(arg0: AbstractArrow_PickupRule): void;
  setPickupStatus(arg0: AbstractArrow_PickupStatus): void;
  setPierceLevel(arg0: number): void;
  setShooter(arg0: j_org_bukkit_projectiles.ProjectileSource | null, arg1: boolean): void | null;
  setShotFromCrossbow(arg0: boolean): void;
  setWeapon(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type AbstractArrow = AbstractArrowMembers & Projectile;
export interface AbstractArrowStatics {
}

/** Live JVM enum org.bukkit.entity.AbstractArrow$PickupRule; constants are host handles, not strings. */
export type AbstractArrow_PickupRule = JavaEnum<"org.bukkit.entity.AbstractArrow$PickupRule", "ALLOWED" | "CREATIVE_ONLY" | "DISALLOWED"> & AbstractArrow_PickupRuleMembers;
export interface AbstractArrow_PickupRuleMembers {
}
export interface AbstractArrow_PickupRuleStatics {
  readonly ALLOWED: AbstractArrow_PickupRule;
  readonly CREATIVE_ONLY: AbstractArrow_PickupRule;
  readonly DISALLOWED: AbstractArrow_PickupRule;
  valueOf(arg0: string): AbstractArrow_PickupRule;
  values(): Array<AbstractArrow_PickupRule>;
}

/** Live JVM enum org.bukkit.entity.AbstractArrow$PickupStatus; constants are host handles, not strings. */
export type AbstractArrow_PickupStatus = JavaEnum<"org.bukkit.entity.AbstractArrow$PickupStatus", "ALLOWED" | "CREATIVE_ONLY" | "DISALLOWED"> & AbstractArrow_PickupStatusMembers;
export interface AbstractArrow_PickupStatusMembers {
}
export interface AbstractArrow_PickupStatusStatics {
  readonly ALLOWED: AbstractArrow_PickupStatus;
  readonly CREATIVE_ONLY: AbstractArrow_PickupStatus;
  readonly DISALLOWED: AbstractArrow_PickupStatus;
  valueOf(arg0: string): AbstractArrow_PickupStatus;
  values(): Array<AbstractArrow_PickupStatus>;
}

/** JVM interface org.bukkit.entity.AbstractCow. */
export interface AbstractCowMembers {
  readonly __javaSupertypes?: readonly [Animals];
}
export type AbstractCow = AbstractCowMembers & Animals;
export interface AbstractCowStatics {
}

/** JVM interface org.bukkit.entity.AbstractHorse. */
export interface AbstractHorseMembers {
  readonly __javaSupertypes?: readonly [Tameable, Vehicle, j_org_bukkit_inventory.InventoryHolder];
  getDomestication(): number;
  getInventory(): j_org_bukkit_inventory.AbstractHorseInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getJumpStrength(): number;
  getMaxDomestication(): number;
  getVariant(): Horse_Variant;
  isEating(): boolean;
  isEatingGrass(): boolean;
  isEatingHaystack(): boolean;
  isRearing(): boolean;
  setDomestication(arg0: number): void;
  setEating(arg0: boolean): void;
  setEatingGrass(arg0: boolean): void;
  setEatingHaystack(arg0: boolean): void;
  setJumpStrength(arg0: number): void;
  setMaxDomestication(arg0: number): void;
  setRearing(arg0: boolean): void;
  setVariant(arg0: Horse_Variant): void;
}
export type AbstractHorse = AbstractHorseMembers & Tameable & Vehicle & j_org_bukkit_inventory.InventoryHolder;
export interface AbstractHorseStatics {
}

/** JVM interface org.bukkit.entity.AbstractSkeleton. */
export interface AbstractSkeletonMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, Monster];
  getSkeletonType(): Skeleton_SkeletonType;
  setShouldBurnInDay(arg0: boolean): void;
  setSkeletonType(arg0: Skeleton_SkeletonType): void;
  shouldBurnInDay(): boolean;
}
export type AbstractSkeleton = AbstractSkeletonMembers & j_com_destroystokyo_paper_entity.RangedEntity & Monster;
export interface AbstractSkeletonStatics {
}

/** JVM interface org.bukkit.entity.AbstractVillager. */
export interface AbstractVillagerMembers {
  readonly __javaSupertypes?: readonly [Breedable, NPC, j_org_bukkit_inventory.InventoryHolder, j_org_bukkit_inventory.Merchant];
  getInventory(): j_org_bukkit_inventory.Inventory;
  resetOffers(): void;
}
export type AbstractVillager = AbstractVillagerMembers & Breedable & NPC & j_org_bukkit_inventory.InventoryHolder & j_org_bukkit_inventory.Merchant;
export interface AbstractVillagerStatics {
}

/** JVM interface org.bukkit.entity.AbstractWindCharge. */
export interface AbstractWindChargeMembers {
  readonly __javaSupertypes?: readonly [Fireball];
  explode(): void;
}
export type AbstractWindCharge = AbstractWindChargeMembers & Fireball;
export interface AbstractWindChargeStatics {
}

/** JVM interface org.bukkit.entity.Ageable. */
export interface Ageable_2Members {
  readonly __javaSupertypes?: readonly [Creature];
  canBreed(): boolean;
  getAge(): number;
  getAgeLock(): boolean;
  isAdult(): boolean;
  setAdult(): void;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
  setBaby(): void;
  setBreed(arg0: boolean): void;
}
export type Ageable_2 = Ageable_2Members & Creature;
export interface Ageable_2Statics {
}

/** JVM interface org.bukkit.entity.Allay. */
export interface AllayMembers {
  readonly __javaSupertypes?: readonly [Creature, j_org_bukkit_inventory.InventoryHolder];
  canDuplicate(): boolean;
  duplicateAllay(): Allay | null;
  getDuplicationCooldown(): bigint;
  getJukebox(): j_org_bukkit.Location | null;
  isDancing(): boolean;
  resetDuplicationCooldown(): void;
  setCanDuplicate(arg0: boolean): void;
  setDuplicationCooldown(arg0: bigint): void;
  startDancing(): void;
  startDancing(arg0: j_org_bukkit.Location): void;
  stopDancing(): void;
}
export type Allay = AllayMembers & Creature & j_org_bukkit_inventory.InventoryHolder;
export interface AllayStatics {
}

/** JVM interface org.bukkit.entity.Ambient. */
export interface AmbientMembers {
  readonly __javaSupertypes?: readonly [Mob];
}
export type Ambient = AmbientMembers & Mob;
export interface AmbientStatics {
}

/** JVM interface org.bukkit.entity.Animals. */
export interface AnimalsMembers {
  readonly __javaSupertypes?: readonly [Breedable];
  getBreedCause(): JavaOpaque<"java.util.UUID"> | null;
  getLoveModeTicks(): number;
  isBreedItem(arg0: j_org_bukkit.Material): boolean;
  isBreedItem(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  isLoveMode(): boolean;
  setBreedCause(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setLoveModeTicks(arg0: number): void;
}
export type Animals = AnimalsMembers & Breedable;
export interface AnimalsStatics {
}

/** JVM interface org.bukkit.entity.AnimalTamer. */
export interface AnimalTamerMembers {
  getName(): string | null;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
}
export type AnimalTamer = AnimalTamerMembers;
export interface AnimalTamerStatics {
}

/** JVM interface org.bukkit.entity.AreaEffectCloud. */
export interface AreaEffectCloudMembers {
  readonly __javaSupertypes?: readonly [Entity];
  addCustomEffect(arg0: j_org_bukkit_potion.PotionEffect, arg1: boolean): boolean;
  clearCustomEffects(): void;
  getBasePotionData(): j_org_bukkit_potion.PotionData | null;
  getBasePotionType(): j_org_bukkit_potion.PotionType | null;
  getColor(): j_org_bukkit.Color;
  getCustomEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  getDuration(): number;
  getDurationOnUse(): number;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  getParticle(): j_org_bukkit.Particle;
  getRadius(): number;
  getRadiusOnUse(): number;
  getRadiusPerTick(): number;
  getReapplicationDelay(): number;
  getSource(): j_org_bukkit_projectiles.ProjectileSource | null;
  getWaitTime(): number;
  hasCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  hasCustomEffects(): boolean;
  removeCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  setBasePotionData(arg0: j_org_bukkit_potion.PotionData | null): void | null;
  setBasePotionType(arg0: j_org_bukkit_potion.PotionType | null): void | null;
  setColor(arg0: j_org_bukkit.Color | null): void | null;
  setDuration(arg0: number): void;
  setDurationOnUse(arg0: number): void;
  setOwnerUniqueId(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setParticle(arg0: j_org_bukkit.Particle): void;
  setParticle<T>(arg0: j_org_bukkit.Particle, arg1: T | null): void | null;
  setRadius(arg0: number): void;
  setRadiusOnUse(arg0: number): void;
  setRadiusPerTick(arg0: number): void;
  setReapplicationDelay(arg0: number): void;
  setSource(arg0: j_org_bukkit_projectiles.ProjectileSource | null): void | null;
  setWaitTime(arg0: number): void;
}
export type AreaEffectCloud = AreaEffectCloudMembers & Entity;
export interface AreaEffectCloudStatics {
}

/** JVM interface org.bukkit.entity.Armadillo. */
export interface ArmadilloMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getState(): Armadillo_State;
  rollOut(): void;
  rollUp(): void;
}
export type Armadillo = ArmadilloMembers & Animals;
export interface ArmadilloStatics {
}

/** Live JVM enum org.bukkit.entity.Armadillo$State; constants are host handles, not strings. */
export type Armadillo_State = JavaEnum<"org.bukkit.entity.Armadillo$State", "IDLE" | "ROLLING" | "SCARED" | "UNROLLING"> & Armadillo_StateMembers;
export interface Armadillo_StateMembers {
}
export interface Armadillo_StateStatics {
  readonly IDLE: Armadillo_State;
  readonly ROLLING: Armadillo_State;
  readonly SCARED: Armadillo_State;
  readonly UNROLLING: Armadillo_State;
  valueOf(arg0: string): Armadillo_State;
  values(): Array<Armadillo_State>;
}

/** JVM interface org.bukkit.entity.ArmorStand. */
export interface ArmorStandMembers {
  readonly __javaSupertypes?: readonly [LivingEntity];
  addDisabledSlots(...arg0: Array<j_org_bukkit_inventory.EquipmentSlot>): void;
  addEquipmentLock(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: ArmorStand_LockType): void;
  canMove(): boolean;
  canTick(): boolean;
  getBodyPose(): j_org_bukkit_util.EulerAngle;
  getBodyRotations(): j_io_papermc_paper_math.Rotations;
  getBoots(): j_org_bukkit_inventory.ItemStack;
  getChestplate(): j_org_bukkit_inventory.ItemStack;
  getDisabledSlots(): JavaSet<j_org_bukkit_inventory.EquipmentSlot>;
  getEquipment(): j_org_bukkit_inventory.EntityEquipment;
  getHeadPose(): j_org_bukkit_util.EulerAngle;
  getHeadRotations(): j_io_papermc_paper_math.Rotations;
  getHelmet(): j_org_bukkit_inventory.ItemStack;
  getItem(arg0: j_org_bukkit_inventory.EquipmentSlot): j_org_bukkit_inventory.ItemStack;
  getItemInHand(): j_org_bukkit_inventory.ItemStack;
  getLeftArmPose(): j_org_bukkit_util.EulerAngle;
  getLeftArmRotations(): j_io_papermc_paper_math.Rotations;
  getLeftLegPose(): j_org_bukkit_util.EulerAngle;
  getLeftLegRotations(): j_io_papermc_paper_math.Rotations;
  getLeggings(): j_org_bukkit_inventory.ItemStack;
  getRightArmPose(): j_org_bukkit_util.EulerAngle;
  getRightArmRotations(): j_io_papermc_paper_math.Rotations;
  getRightLegPose(): j_org_bukkit_util.EulerAngle;
  getRightLegRotations(): j_io_papermc_paper_math.Rotations;
  hasArms(): boolean;
  hasBasePlate(): boolean;
  hasEquipmentLock(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: ArmorStand_LockType): boolean;
  isMarker(): boolean;
  isSlotDisabled(arg0: j_org_bukkit_inventory.EquipmentSlot): boolean;
  isSmall(): boolean;
  isVisible(): boolean;
  removeDisabledSlots(...arg0: Array<j_org_bukkit_inventory.EquipmentSlot>): void;
  removeEquipmentLock(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: ArmorStand_LockType): void;
  setArms(arg0: boolean): void;
  setBasePlate(arg0: boolean): void;
  setBodyPose(arg0: j_org_bukkit_util.EulerAngle): void;
  setBodyRotations(arg0: j_io_papermc_paper_math.Rotations): void;
  setBoots(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setCanMove(arg0: boolean): void;
  setCanTick(arg0: boolean): void;
  setChestplate(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setDisabledSlots(...arg0: Array<j_org_bukkit_inventory.EquipmentSlot>): void;
  setHeadPose(arg0: j_org_bukkit_util.EulerAngle): void;
  setHeadRotations(arg0: j_io_papermc_paper_math.Rotations): void;
  setHelmet(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setItem(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: j_org_bukkit_inventory.ItemStack | null): void | null;
  setItemInHand(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setLeftArmPose(arg0: j_org_bukkit_util.EulerAngle): void;
  setLeftArmRotations(arg0: j_io_papermc_paper_math.Rotations): void;
  setLeftLegPose(arg0: j_org_bukkit_util.EulerAngle): void;
  setLeftLegRotations(arg0: j_io_papermc_paper_math.Rotations): void;
  setLeggings(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setMarker(arg0: boolean): void;
  setRightArmPose(arg0: j_org_bukkit_util.EulerAngle): void;
  setRightArmRotations(arg0: j_io_papermc_paper_math.Rotations): void;
  setRightLegPose(arg0: j_org_bukkit_util.EulerAngle): void;
  setRightLegRotations(arg0: j_io_papermc_paper_math.Rotations): void;
  setSmall(arg0: boolean): void;
  setVisible(arg0: boolean): void;
}
export type ArmorStand = ArmorStandMembers & LivingEntity;
export interface ArmorStandStatics {
}

/** Live JVM enum org.bukkit.entity.ArmorStand$LockType; constants are host handles, not strings. */
export type ArmorStand_LockType = JavaEnum<"org.bukkit.entity.ArmorStand$LockType", "ADDING" | "ADDING_OR_CHANGING" | "REMOVING_OR_CHANGING"> & ArmorStand_LockTypeMembers;
export interface ArmorStand_LockTypeMembers {
}
export interface ArmorStand_LockTypeStatics {
  readonly ADDING: ArmorStand_LockType;
  readonly ADDING_OR_CHANGING: ArmorStand_LockType;
  readonly REMOVING_OR_CHANGING: ArmorStand_LockType;
  valueOf(arg0: string): ArmorStand_LockType;
  values(): Array<ArmorStand_LockType>;
}

/** JVM interface org.bukkit.entity.Arrow. */
export interface ArrowMembers {
  readonly __javaSupertypes?: readonly [AbstractArrow];
  addCustomEffect(arg0: j_org_bukkit_potion.PotionEffect, arg1: boolean): boolean;
  clearCustomEffects(): void;
  getBasePotionData(): j_org_bukkit_potion.PotionData | null;
  getBasePotionType(): j_org_bukkit_potion.PotionType | null;
  getColor(): j_org_bukkit.Color | null;
  getCustomEffects(): JavaList<j_org_bukkit_potion.PotionEffect>;
  hasCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType | null): boolean | null;
  hasCustomEffects(): boolean;
  removeCustomEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  setBasePotionData(arg0: j_org_bukkit_potion.PotionData | null): void | null;
  setBasePotionType(arg0: j_org_bukkit_potion.PotionType | null): void | null;
  setColor(arg0: j_org_bukkit.Color | null): void | null;
}
export type Arrow = ArrowMembers & AbstractArrow;
export interface ArrowStatics {
}

/** JVM interface org.bukkit.entity.Axolotl. */
export interface AxolotlMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Bucketable, Animals];
  getVariant(): Axolotl_Variant;
  isPlayingDead(): boolean;
  setPlayingDead(arg0: boolean): void;
  setVariant(arg0: Axolotl_Variant): void;
}
export type Axolotl = AxolotlMembers & j_io_papermc_paper_entity.Bucketable & Animals;
export interface AxolotlStatics {
}

/** Live JVM enum org.bukkit.entity.Axolotl$Variant; constants are host handles, not strings. */
export type Axolotl_Variant = JavaEnum<"org.bukkit.entity.Axolotl$Variant", "BLUE" | "CYAN" | "GOLD" | "LUCY" | "WILD"> & Axolotl_VariantMembers;
export interface Axolotl_VariantMembers {
}
export interface Axolotl_VariantStatics {
  readonly BLUE: Axolotl_Variant;
  readonly CYAN: Axolotl_Variant;
  readonly GOLD: Axolotl_Variant;
  readonly LUCY: Axolotl_Variant;
  readonly WILD: Axolotl_Variant;
  valueOf(arg0: string): Axolotl_Variant;
  values(): Array<Axolotl_Variant>;
}

/** JVM interface org.bukkit.entity.Bat. */
export interface BatMembers {
  readonly __javaSupertypes?: readonly [Ambient];
  getTargetLocation(): j_org_bukkit.Location | null;
  isAwake(): boolean;
  setAwake(arg0: boolean): void;
  setTargetLocation(arg0: j_org_bukkit.Location | null): void | null;
}
export type Bat = BatMembers & Ambient;
export interface BatStatics {
}

/** JVM interface org.bukkit.entity.Bee. */
export interface BeeMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getAnger(): number;
  getCannotEnterHiveTicks(): number;
  getCropsGrownSincePollination(): number;
  getFlower(): j_org_bukkit.Location | null;
  getHive(): j_org_bukkit.Location | null;
  getRollingOverride(): j_net_kyori_adventure_util.TriState;
  getTicksSincePollination(): number;
  getTimeSinceSting(): number;
  hasNectar(): boolean;
  hasStung(): boolean;
  isRolling(): boolean;
  setAnger(arg0: number): void;
  setCannotEnterHiveTicks(arg0: number): void;
  setCropsGrownSincePollination(arg0: number): void;
  setFlower(arg0: j_org_bukkit.Location | null): void | null;
  setHasNectar(arg0: boolean): void;
  setHasStung(arg0: boolean): void;
  setHive(arg0: j_org_bukkit.Location | null): void | null;
  setRollingOverride(arg0: j_net_kyori_adventure_util.TriState): void;
  setTicksSincePollination(arg0: number): void;
  setTimeSinceSting(arg0: number): void;
}
export type Bee = BeeMembers & Animals;
export interface BeeStatics {
}

/** JVM interface org.bukkit.entity.Blaze. */
export interface BlazeMembers {
  readonly __javaSupertypes?: readonly [Monster];
}
export type Blaze = BlazeMembers & Monster;
export interface BlazeStatics {
}

/** JVM interface org.bukkit.entity.BlockDisplay. */
export interface BlockDisplayMembers {
  readonly __javaSupertypes?: readonly [Display];
  getBlock(): j_org_bukkit_block_data.BlockData;
  setBlock(arg0: j_org_bukkit_block_data.BlockData): void;
}
export type BlockDisplay = BlockDisplayMembers & Display;
export interface BlockDisplayStatics {
}

/** JVM interface org.bukkit.entity.Boat. */
export interface BoatMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Leashable, Vehicle];
  getBoatMaterial(): j_org_bukkit.Material;
  getBoatType(): Boat_Type;
  getMaxSpeed(): number;
  getOccupiedDeceleration(): number;
  getStatus(): Boat_Status;
  getUnoccupiedDeceleration(): number;
  getWoodType(): j_org_bukkit.TreeSpecies;
  getWorkOnLand(): boolean;
  setBoatType(arg0: Boat_Type): void;
  setMaxSpeed(arg0: number): void;
  setOccupiedDeceleration(arg0: number): void;
  setUnoccupiedDeceleration(arg0: number): void;
  setWoodType(arg0: j_org_bukkit.TreeSpecies): void;
  setWorkOnLand(arg0: boolean): void;
}
export type Boat = BoatMembers & j_io_papermc_paper_entity.Leashable & Vehicle;
export interface BoatStatics {
}

/** Live JVM enum org.bukkit.entity.Boat$Status; constants are host handles, not strings. */
export type Boat_Status = JavaEnum<"org.bukkit.entity.Boat$Status", "IN_AIR" | "IN_WATER" | "NOT_IN_WORLD" | "ON_LAND" | "UNDER_FLOWING_WATER" | "UNDER_WATER"> & Boat_StatusMembers;
export interface Boat_StatusMembers {
}
export interface Boat_StatusStatics {
  readonly IN_AIR: Boat_Status;
  readonly IN_WATER: Boat_Status;
  readonly NOT_IN_WORLD: Boat_Status;
  readonly ON_LAND: Boat_Status;
  readonly UNDER_FLOWING_WATER: Boat_Status;
  readonly UNDER_WATER: Boat_Status;
  valueOf(arg0: string): Boat_Status;
  values(): Array<Boat_Status>;
}

/** Live JVM enum org.bukkit.entity.Boat$Type; constants are host handles, not strings. */
export type Boat_Type = JavaEnum<"org.bukkit.entity.Boat$Type", "ACACIA" | "BAMBOO" | "BIRCH" | "CHERRY" | "DARK_OAK" | "JUNGLE" | "MANGROVE" | "OAK" | "SPRUCE"> & Boat_TypeMembers;
export interface Boat_TypeMembers {
  getMaterial(): j_org_bukkit.Material;
}
export interface Boat_TypeStatics {
  readonly ACACIA: Boat_Type;
  readonly BAMBOO: Boat_Type;
  readonly BIRCH: Boat_Type;
  readonly CHERRY: Boat_Type;
  readonly DARK_OAK: Boat_Type;
  readonly JUNGLE: Boat_Type;
  readonly MANGROVE: Boat_Type;
  readonly OAK: Boat_Type;
  readonly SPRUCE: Boat_Type;
  valueOf(arg0: string): Boat_Type;
  values(): Array<Boat_Type>;
}

/** JVM interface org.bukkit.entity.Bogged. */
export interface BoggedMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Shearable, AbstractSkeleton, Shearable_2];
  isSheared(): boolean;
  setSheared(arg0: boolean): void;
}
export type Bogged = BoggedMembers & j_io_papermc_paper_entity.Shearable & AbstractSkeleton & Shearable_2;
export interface BoggedStatics {
}

/** JVM interface org.bukkit.entity.Boss. */
export interface BossMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getBossBar(): j_org_bukkit_boss.BossBar_2 | null;
}
export type Boss = BossMembers & Entity;
export interface BossStatics {
}

/** JVM interface org.bukkit.entity.Breedable. */
export interface BreedableMembers {
  readonly __javaSupertypes?: readonly [Ageable_2];
  canBreed(): boolean;
  getAgeLock(): boolean;
  setAgeLock(arg0: boolean): void;
  setBreed(arg0: boolean): void;
}
export type Breedable = BreedableMembers & Ageable_2;
export interface BreedableStatics {
}

/** JVM interface org.bukkit.entity.Breeze. */
export interface BreezeMembers {
  readonly __javaSupertypes?: readonly [Monster];
}
export type Breeze = BreezeMembers & Monster;
export interface BreezeStatics {
}

/** JVM interface org.bukkit.entity.BreezeWindCharge. */
export interface BreezeWindChargeMembers {
  readonly __javaSupertypes?: readonly [AbstractWindCharge];
}
export type BreezeWindCharge = BreezeWindChargeMembers & AbstractWindCharge;
export interface BreezeWindChargeStatics {
}

/** JVM interface org.bukkit.entity.Camel. */
export interface CamelMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse, Sittable];
  isDashing(): boolean;
  setDashing(arg0: boolean): void;
}
export type Camel = CamelMembers & AbstractHorse & Sittable;
export interface CamelStatics {
}

/** JVM interface org.bukkit.entity.Cat. */
export interface CatMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.CollarColorable, Sittable, Tameable];
  getCatType(): Cat_Type;
  getCollarColor(): j_org_bukkit.DyeColor;
  isHeadUp(): boolean;
  isLyingDown(): boolean;
  setCatType(arg0: Cat_Type): void;
  setCollarColor(arg0: j_org_bukkit.DyeColor): void;
  setHeadUp(arg0: boolean): void;
  setLyingDown(arg0: boolean): void;
}
export type Cat = CatMembers & j_io_papermc_paper_entity.CollarColorable & Sittable & Tameable;
export interface CatStatics {
}

/** JVM interface org.bukkit.entity.Cat$Type. */
export interface Cat_TypeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<Cat_Type>, j_org_bukkit.Keyed];
  compareTo(arg0: object): number;
  compareTo(arg0: Cat_Type): number;
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
}
export type Cat_Type = Cat_TypeMembers & j_org_bukkit.Keyed;
export interface Cat_TypeStatics {
  readonly ALL_BLACK: Cat_Type;
  readonly BLACK: Cat_Type;
  readonly BRITISH_SHORTHAIR: Cat_Type;
  readonly CALICO: Cat_Type;
  readonly JELLIE: Cat_Type;
  readonly PERSIAN: Cat_Type;
  readonly RAGDOLL: Cat_Type;
  readonly RED: Cat_Type;
  readonly SIAMESE: Cat_Type;
  readonly TABBY: Cat_Type;
  readonly WHITE: Cat_Type;
  valueOf(arg0: string): Cat_Type;
  values(): Array<Cat_Type>;
}

/** JVM interface org.bukkit.entity.CaveSpider. */
export interface CaveSpiderMembers {
  readonly __javaSupertypes?: readonly [Spider];
}
export type CaveSpider = CaveSpiderMembers & Spider;
export interface CaveSpiderStatics {
}

/** JVM interface org.bukkit.entity.ChestBoat. */
export interface ChestBoatMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_loottable.LootableEntityInventory, Boat, j_org_bukkit_inventory.InventoryHolder];
}
export type ChestBoat = ChestBoatMembers & j_com_destroystokyo_paper_loottable.LootableEntityInventory & Boat & j_org_bukkit_inventory.InventoryHolder;
export interface ChestBoatStatics {
}

/** JVM interface org.bukkit.entity.ChestedHorse. */
export interface ChestedHorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  isCarryingChest(): boolean;
  setCarryingChest(arg0: boolean): void;
}
export type ChestedHorse = ChestedHorseMembers & AbstractHorse;
export interface ChestedHorseStatics {
}

/** JVM interface org.bukkit.entity.Chicken. */
export interface ChickenMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getEggLayTime(): number;
  getVariant(): Chicken_Variant;
  isChickenJockey(): boolean;
  setEggLayTime(arg0: number): void;
  setIsChickenJockey(arg0: boolean): void;
  setVariant(arg0: Chicken_Variant): void;
}
export type Chicken = ChickenMembers & Animals;
export interface ChickenStatics {
}

/** JVM interface org.bukkit.entity.Chicken$Variant. */
export interface Chicken_VariantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
}
export type Chicken_Variant = Chicken_VariantMembers & j_org_bukkit.Keyed;
export interface Chicken_VariantStatics {
  readonly COLD: Chicken_Variant;
  readonly TEMPERATE: Chicken_Variant;
  readonly WARM: Chicken_Variant;
}

/** JVM interface org.bukkit.entity.Cod. */
export interface CodMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.SchoolableFish];
}
export type Cod = CodMembers & j_io_papermc_paper_entity.SchoolableFish;
export interface CodStatics {
}

/** JVM interface org.bukkit.entity.ComplexEntityPart. */
export interface ComplexEntityPartMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getParent(): ComplexLivingEntity;
}
export type ComplexEntityPart = ComplexEntityPartMembers & Entity;
export interface ComplexEntityPartStatics {
}

/** JVM interface org.bukkit.entity.ComplexLivingEntity. */
export interface ComplexLivingEntityMembers {
  readonly __javaSupertypes?: readonly [LivingEntity];
  getParts(): JavaSet<ComplexEntityPart>;
}
export type ComplexLivingEntity = ComplexLivingEntityMembers & LivingEntity;
export interface ComplexLivingEntityStatics {
}

/** JVM interface org.bukkit.entity.Cow. */
export interface CowMembers {
  readonly __javaSupertypes?: readonly [AbstractCow];
  getVariant(): Cow_Variant;
  setVariant(arg0: Cow_Variant): void;
}
export type Cow = CowMembers & AbstractCow;
export interface CowStatics {
}

/** JVM interface org.bukkit.entity.Cow$Variant. */
export interface Cow_VariantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
}
export type Cow_Variant = Cow_VariantMembers & j_org_bukkit.Keyed;
export interface Cow_VariantStatics {
  readonly COLD: Cow_Variant;
  readonly TEMPERATE: Cow_Variant;
  readonly WARM: Cow_Variant;
}

/** JVM interface org.bukkit.entity.Creaking. */
export interface CreakingMembers {
  readonly __javaSupertypes?: readonly [Monster];
  activate(arg0: Player): void;
  deactivate(): void;
  getHome(): j_org_bukkit.Location | null;
  isActive(): boolean;
}
export type Creaking = CreakingMembers & Monster;
export interface CreakingStatics {
}

/** JVM interface org.bukkit.entity.Creature. */
export interface CreatureMembers {
  readonly __javaSupertypes?: readonly [Mob];
}
export type Creature = CreatureMembers & Mob;
export interface CreatureStatics {
}

/** JVM interface org.bukkit.entity.Creeper. */
export interface CreeperMembers {
  readonly __javaSupertypes?: readonly [Monster];
  explode(): void;
  getExplosionRadius(): number;
  getFuseTicks(): number;
  getIgniter(): Entity | null;
  getMaxFuseTicks(): number;
  ignite(): void;
  ignite(arg0: Entity): void;
  isIgnited(): boolean;
  isPowered(): boolean;
  setExplosionRadius(arg0: number): void;
  setFuseTicks(arg0: number): void;
  setIgnited(arg0: boolean): void;
  setMaxFuseTicks(arg0: number): void;
  setPowered(arg0: boolean): void;
}
export type Creeper = CreeperMembers & Monster;
export interface CreeperStatics {
}

/** JVM interface org.bukkit.entity.Damageable. */
export interface DamageableMembers {
  readonly __javaSupertypes?: readonly [Entity];
  damage(arg0: number): void;
  damage(arg0: number, arg1: j_org_bukkit_damage.DamageSource): void;
  damage(arg0: number, arg1: Entity | null): void | null;
  getAbsorptionAmount(): number;
  getHealth(): number;
  getMaxHealth(): number;
  heal(arg0: number): void;
  heal(arg0: number, arg1: j_org_bukkit_event_entity.EntityRegainHealthEvent_RegainReason): void;
  resetMaxHealth(): void;
  setAbsorptionAmount(arg0: number): void;
  setHealth(arg0: number): void;
  setMaxHealth(arg0: number): void;
}
export type Damageable = DamageableMembers & Entity;
export interface DamageableStatics {
}

/** JVM interface org.bukkit.entity.Display. */
export interface DisplayMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getBillboard(): Display_Billboard;
  getBrightness(): Display_Brightness | null;
  getDisplayHeight(): number;
  getDisplayWidth(): number;
  getGlowColorOverride(): j_org_bukkit.Color | null;
  getInterpolationDelay(): number;
  getInterpolationDuration(): number;
  getShadowRadius(): number;
  getShadowStrength(): number;
  getTeleportDuration(): number;
  getTransformation(): j_org_bukkit_util.Transformation;
  getViewRange(): number;
  setBillboard(arg0: Display_Billboard): void;
  setBrightness(arg0: Display_Brightness | null): void | null;
  setDisplayHeight(arg0: number): void;
  setDisplayWidth(arg0: number): void;
  setGlowColorOverride(arg0: j_org_bukkit.Color | null): void | null;
  setInterpolationDelay(arg0: number): void;
  setInterpolationDuration(arg0: number): void;
  setShadowRadius(arg0: number): void;
  setShadowStrength(arg0: number): void;
  setTeleportDuration(arg0: number): void;
  setTransformation(arg0: j_org_bukkit_util.Transformation): void;
  setTransformationMatrix(arg0: JavaOpaque<"org.joml.Matrix4f">): void;
  setViewRange(arg0: number): void;
}
export type Display = DisplayMembers & Entity;
export interface DisplayStatics {
}

/** Live JVM enum org.bukkit.entity.Display$Billboard; constants are host handles, not strings. */
export type Display_Billboard = JavaEnum<"org.bukkit.entity.Display$Billboard", "CENTER" | "FIXED" | "HORIZONTAL" | "VERTICAL"> & Display_BillboardMembers;
export interface Display_BillboardMembers {
}
export interface Display_BillboardStatics {
  readonly CENTER: Display_Billboard;
  readonly FIXED: Display_Billboard;
  readonly HORIZONTAL: Display_Billboard;
  readonly VERTICAL: Display_Billboard;
  valueOf(arg0: string): Display_Billboard;
  values(): Array<Display_Billboard>;
}

/** JVM class org.bukkit.entity.Display$Brightness. */
export interface Display_BrightnessMembers {
  equals(arg0: object): boolean;
  getBlockLight(): number;
  getSkyLight(): number;
  hashCode(): number;
  toString(): string;
}
export type Display_Brightness = Display_BrightnessMembers;
export interface Display_BrightnessStatics {
  new(arg0: number, arg1: number): Display_Brightness;
}

/** JVM interface org.bukkit.entity.Dolphin. */
export interface DolphinMembers {
  readonly __javaSupertypes?: readonly [Ageable_2, WaterMob];
  getMoistness(): number;
  getTreasureLocation(): j_org_bukkit.Location | null;
  hasFish(): boolean;
  setHasFish(arg0: boolean): void;
  setMoistness(arg0: number): void;
  setTreasureLocation(arg0: j_org_bukkit.Location | null): void | null;
}
export type Dolphin = DolphinMembers & Ageable_2 & WaterMob;
export interface DolphinStatics {
}

/** JVM interface org.bukkit.entity.Donkey. */
export interface DonkeyMembers {
  readonly __javaSupertypes?: readonly [ChestedHorse];
}
export type Donkey = DonkeyMembers & ChestedHorse;
export interface DonkeyStatics {
}

/** JVM interface org.bukkit.entity.DragonFireball. */
export interface DragonFireballMembers {
  readonly __javaSupertypes?: readonly [Fireball];
}
export type DragonFireball = DragonFireballMembers & Fireball;
export interface DragonFireballStatics {
}

/** JVM interface org.bukkit.entity.Drowned. */
export interface DrownedMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, Zombie];
}
export type Drowned = DrownedMembers & j_com_destroystokyo_paper_entity.RangedEntity & Zombie;
export interface DrownedStatics {
}

/** JVM interface org.bukkit.entity.Egg. */
export interface EggMembers {
  readonly __javaSupertypes?: readonly [ThrowableProjectile];
}
export type Egg = EggMembers & ThrowableProjectile;
export interface EggStatics {
}

/** JVM interface org.bukkit.entity.ElderGuardian. */
export interface ElderGuardianMembers {
  readonly __javaSupertypes?: readonly [Guardian];
}
export type ElderGuardian = ElderGuardianMembers & Guardian;
export interface ElderGuardianStatics {
}

/** JVM interface org.bukkit.entity.EnderCrystal. */
export interface EnderCrystalMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getBeamTarget(): j_org_bukkit.Location | null;
  isShowingBottom(): boolean;
  setBeamTarget(arg0: j_org_bukkit.Location | null): void | null;
  setShowingBottom(arg0: boolean): void;
}
export type EnderCrystal = EnderCrystalMembers & Entity;
export interface EnderCrystalStatics {
}

/** JVM interface org.bukkit.entity.EnderDragon. */
export interface EnderDragonMembers {
  readonly __javaSupertypes?: readonly [Boss, ComplexLivingEntity, Enemy, Mob];
  getDeathAnimationTicks(): number;
  getDragonBattle(): j_org_bukkit_boss.DragonBattle | null;
  getPhase(): EnderDragon_Phase;
  getPodium(): j_org_bukkit.Location;
  setPhase(arg0: EnderDragon_Phase): void;
  setPodium(arg0: j_org_bukkit.Location | null): void | null;
}
export type EnderDragon = EnderDragonMembers & Boss & ComplexLivingEntity & Enemy & Mob;
export interface EnderDragonStatics {
}

/** Live JVM enum org.bukkit.entity.EnderDragon$Phase; constants are host handles, not strings. */
export type EnderDragon_Phase = JavaEnum<"org.bukkit.entity.EnderDragon$Phase", "BREATH_ATTACK" | "CHARGE_PLAYER" | "CIRCLING" | "DYING" | "FLY_TO_PORTAL" | "HOVER" | "LAND_ON_PORTAL" | "LEAVE_PORTAL" | "ROAR_BEFORE_ATTACK" | "SEARCH_FOR_BREATH_ATTACK_TARGET" | "STRAFING"> & EnderDragon_PhaseMembers;
export interface EnderDragon_PhaseMembers {
}
export interface EnderDragon_PhaseStatics {
  readonly BREATH_ATTACK: EnderDragon_Phase;
  readonly CHARGE_PLAYER: EnderDragon_Phase;
  readonly CIRCLING: EnderDragon_Phase;
  readonly DYING: EnderDragon_Phase;
  readonly FLY_TO_PORTAL: EnderDragon_Phase;
  readonly HOVER: EnderDragon_Phase;
  readonly LAND_ON_PORTAL: EnderDragon_Phase;
  readonly LEAVE_PORTAL: EnderDragon_Phase;
  readonly ROAR_BEFORE_ATTACK: EnderDragon_Phase;
  readonly SEARCH_FOR_BREATH_ATTACK_TARGET: EnderDragon_Phase;
  readonly STRAFING: EnderDragon_Phase;
  valueOf(arg0: string): EnderDragon_Phase;
  values(): Array<EnderDragon_Phase>;
}

/** JVM interface org.bukkit.entity.EnderDragonPart. */
export interface EnderDragonPartMembers {
  readonly __javaSupertypes?: readonly [ComplexEntityPart, Damageable];
  getParent(): ComplexLivingEntity;
  getParent(): EnderDragon;
}
export type EnderDragonPart = EnderDragonPartMembers & ComplexEntityPart & Damageable;
export interface EnderDragonPartStatics {
}

/** JVM interface org.bukkit.entity.Enderman. */
export interface EndermanMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getCarriedBlock(): j_org_bukkit_block_data.BlockData | null;
  getCarriedMaterial(): j_org_bukkit_material.MaterialData;
  hasBeenStaredAt(): boolean;
  isScreaming(): boolean;
  setCarriedBlock(arg0: j_org_bukkit_block_data.BlockData | null): void | null;
  setCarriedMaterial(arg0: j_org_bukkit_material.MaterialData): void;
  setHasBeenStaredAt(arg0: boolean): void;
  setScreaming(arg0: boolean): void;
  teleport(): boolean;
  teleportRandomly(): boolean;
  teleportTowards(arg0: Entity): boolean;
}
export type Enderman = EndermanMembers & Monster;
export interface EndermanStatics {
}

/** JVM interface org.bukkit.entity.Endermite. */
export interface EndermiteMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getLifetimeTicks(): number;
  isPlayerSpawned(): boolean;
  setLifetimeTicks(arg0: number): void;
  setPlayerSpawned(arg0: boolean): void;
}
export type Endermite = EndermiteMembers & Monster;
export interface EndermiteStatics {
}

/** JVM interface org.bukkit.entity.EnderPearl. */
export interface EnderPearlMembers {
  readonly __javaSupertypes?: readonly [ThrowableProjectile];
}
export type EnderPearl = EnderPearlMembers & ThrowableProjectile;
export interface EnderPearlStatics {
}

/** JVM interface org.bukkit.entity.EnderSignal. */
export interface EnderSignalMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getDespawnTimer(): number;
  getDropItem(): boolean;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getTargetLocation(): j_org_bukkit.Location | null;
  setDespawnTimer(arg0: number): void;
  setDropItem(arg0: boolean): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setTargetLocation(arg0: j_org_bukkit.Location): void;
  setTargetLocation(arg0: j_org_bukkit.Location, arg1: boolean): void;
}
export type EnderSignal = EnderSignalMembers & Entity;
export interface EnderSignalStatics {
}

/** JVM interface org.bukkit.entity.Enemy. */
export interface EnemyMembers {
  readonly __javaSupertypes?: readonly [LivingEntity];
}
export type Enemy = EnemyMembers & LivingEntity;
export interface EnemyStatics {
}

/** JVM interface org.bukkit.entity.Entity. */
export interface EntityMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_metadata.Metadatable, j_org_bukkit_command.CommandSender, j_org_bukkit.Nameable, j_org_bukkit_persistence.PersistentDataHolder, j_net_kyori_adventure_text_event.HoverEventSource<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity>, j_net_kyori_adventure_sound.Sound_Emitter, j_io_papermc_paper_datacomponent.DataComponentView];
  addPassenger(arg0: Entity): boolean;
  addScoreboardTag(arg0: string): boolean;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_kyori_adventure_text_event.HoverEvent_ShowEntity]>): j_net_kyori_adventure_text_event.HoverEvent<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity>;
  broadcastHurtAnimation(arg0: JavaCollection<Player>): void;
  collidesAt(arg0: j_org_bukkit.Location): boolean;
  copy(): Entity;
  copy(arg0: j_org_bukkit.Location): Entity;
  createSnapshot(): EntitySnapshot | null;
  eject(): boolean;
  fromMobSpawner(): boolean;
  getAsString(): string | null;
  getBoundingBox(): j_org_bukkit_util.BoundingBox;
  getChunk(): j_org_bukkit.Chunk;
  getEntityId(): number;
  getEntitySpawnReason(): j_org_bukkit_event_entity.CreatureSpawnEvent_SpawnReason;
  getFacing(): j_org_bukkit_block.BlockFace;
  getFallDistance(): number;
  getFireTicks(): number;
  getFreezeTicks(): number;
  getHeight(): number;
  getLastDamageCause(): j_org_bukkit_event_entity.EntityDamageEvent | null;
  getLocation(): j_org_bukkit.Location;
  getLocation(arg0: j_org_bukkit.Location | null): j_org_bukkit.Location | null;
  getMaxFireTicks(): number;
  getMaxFreezeTicks(): number;
  getNearbyEntities(arg0: number, arg1: number, arg2: number): JavaList<Entity>;
  getOrigin(): j_org_bukkit.Location | null;
  getPassenger(): Entity | null;
  getPassengers(): JavaList<Entity>;
  getPickItemStack(): j_org_bukkit_inventory.ItemStack;
  getPistonMoveReaction(): j_org_bukkit_block.PistonMoveReaction;
  getPitch(): number;
  getPortalCooldown(): number;
  getPose(): Pose;
  getScheduler(): j_io_papermc_paper_threadedregions_scheduler.EntityScheduler;
  getScoreboardEntryName(): string;
  getScoreboardTags(): JavaSet<string>;
  getServer(): j_org_bukkit.Server;
  getSpawnCategory(): SpawnCategory;
  getSwimHighSpeedSplashSound(): j_org_bukkit.Sound_2;
  getSwimSound(): j_org_bukkit.Sound_2;
  getSwimSplashSound(): j_org_bukkit.Sound_2;
  getTicksLived(): number;
  getTrackedBy(): JavaSet<Player>;
  getTrackedPlayers(): JavaSet<Player>;
  getType(): EntityType;
  getUniqueId(): JavaOpaque<"java.util.UUID">;
  getVehicle(): Entity | null;
  getVelocity(): j_org_bukkit_util.Vector;
  getVisualFire(): j_net_kyori_adventure_util.TriState;
  getWidth(): number;
  getWorld(): j_org_bukkit.World;
  getX(): number;
  getY(): number;
  getYaw(): number;
  getZ(): number;
  hasFixedPose(): boolean;
  hasGravity(): boolean;
  hasNoPhysics(): boolean;
  isCustomNameVisible(): boolean;
  isDead(): boolean;
  isEmpty(): boolean;
  isFreezeTickingLocked(): boolean;
  isFrozen(): boolean;
  isGlowing(): boolean;
  isInBubbleColumn(): boolean;
  isInLava(): boolean;
  isInPowderedSnow(): boolean;
  isInRain(): boolean;
  isInWater(): boolean;
  isInWaterOrBubbleColumn(): boolean;
  isInWaterOrRain(): boolean;
  isInWaterOrRainOrBubbleColumn(): boolean;
  isInWorld(): boolean;
  isInsideVehicle(): boolean;
  isInvisible(): boolean;
  isInvulnerable(): boolean;
  isOnGround(): boolean;
  isPersistent(): boolean;
  isSilent(): boolean;
  isSneaking(): boolean;
  isTicking(): boolean;
  isTrackedBy(arg0: Player): boolean;
  isUnderWater(): boolean;
  isValid(): boolean;
  isVisibleByDefault(): boolean;
  isVisualFire(): boolean;
  leaveVehicle(): boolean;
  lockFreezeTicks(arg0: boolean): void;
  lookAt(arg0: number, arg1: number, arg2: number, arg3: j_io_papermc_paper_entity.LookAnchor): void;
  lookAt(arg0: j_io_papermc_paper_math.Position, arg1: j_io_papermc_paper_entity.LookAnchor): void;
  playEffect(arg0: j_org_bukkit.EntityEffect): void;
  remove(): void;
  removePassenger(arg0: Entity): boolean;
  removeScoreboardTag(arg0: string): boolean;
  setCustomNameVisible(arg0: boolean): void;
  setFallDistance(arg0: number): void;
  setFireTicks(arg0: number): void;
  setFreezeTicks(arg0: number): void;
  setGlowing(arg0: boolean): void;
  setGravity(arg0: boolean): void;
  setInvisible(arg0: boolean): void;
  setInvulnerable(arg0: boolean): void;
  setLastDamageCause(arg0: j_org_bukkit_event_entity.EntityDamageEvent | null): void | null;
  setNoPhysics(arg0: boolean): void;
  setPassenger(arg0: Entity): boolean;
  setPersistent(arg0: boolean): void;
  setPortalCooldown(arg0: number): void;
  setPose(arg0: Pose): void;
  setPose(arg0: Pose, arg1: boolean): void;
  setRotation(arg0: number, arg1: number): void;
  setSilent(arg0: boolean): void;
  setSneaking(arg0: boolean): void;
  setTicksLived(arg0: number): void;
  setVelocity(arg0: j_org_bukkit_util.Vector): void;
  setVisibleByDefault(arg0: boolean): void;
  setVisualFire(arg0: j_net_kyori_adventure_util.TriState): void;
  setVisualFire(arg0: boolean): void;
  spawnAt(arg0: j_org_bukkit.Location): boolean;
  spawnAt(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_event_entity.CreatureSpawnEvent_SpawnReason): boolean;
  spigot(): j_org_bukkit_command.CommandSender_Spigot;
  spigot(): Entity_Spigot;
  teamDisplayName(): j_net_kyori_adventure_text.Component;
  teleport(arg0: j_org_bukkit.Location): boolean;
  teleport(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_event_player.PlayerTeleportEvent_TeleportCause): boolean;
  teleport(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_event_player.PlayerTeleportEvent_TeleportCause, ...arg2: Array<j_io_papermc_paper_entity.TeleportFlag>): boolean;
  teleport(arg0: j_org_bukkit.Location, ...arg1: Array<j_io_papermc_paper_entity.TeleportFlag>): boolean;
  teleport(arg0: Entity): boolean;
  teleport(arg0: Entity, arg1: j_org_bukkit_event_player.PlayerTeleportEvent_TeleportCause): boolean;
  teleportAsync(arg0: j_org_bukkit.Location): PromiseLike<boolean>;
  teleportAsync(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_event_player.PlayerTeleportEvent_TeleportCause): PromiseLike<boolean>;
  teleportAsync(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_event_player.PlayerTeleportEvent_TeleportCause, ...arg2: Array<j_io_papermc_paper_entity.TeleportFlag>): PromiseLike<boolean>;
  wouldCollideUsing(arg0: j_org_bukkit_util.BoundingBox): boolean;
}
export type Entity = EntityMembers & j_org_bukkit_metadata.Metadatable & j_org_bukkit_command.CommandSender & j_org_bukkit.Nameable & j_org_bukkit_persistence.PersistentDataHolder & j_net_kyori_adventure_text_event.HoverEventSource<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity> & j_net_kyori_adventure_sound.Sound_Emitter & j_io_papermc_paper_datacomponent.DataComponentView;
export interface EntityStatics {
}

/** JVM class org.bukkit.entity.Entity$Spigot. */
export interface Entity_SpigotMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_command.CommandSender_Spigot];
}
export type Entity_Spigot = Entity_SpigotMembers & j_org_bukkit_command.CommandSender_Spigot;
export interface Entity_SpigotStatics {
  new(): Entity_Spigot;
}

/** Live JVM enum org.bukkit.entity.EntityCategory; constants are host handles, not strings. */
export type EntityCategory = JavaEnum<"org.bukkit.entity.EntityCategory", "ARTHROPOD" | "ILLAGER" | "NONE" | "UNDEAD" | "WATER"> & EntityCategoryMembers;
export interface EntityCategoryMembers {
}
export interface EntityCategoryStatics {
  readonly ARTHROPOD: EntityCategory;
  readonly ILLAGER: EntityCategory;
  readonly NONE: EntityCategory;
  readonly UNDEAD: EntityCategory;
  readonly WATER: EntityCategory;
  valueOf(arg0: string): EntityCategory;
  values(): Array<EntityCategory>;
}

/** JVM interface org.bukkit.entity.EntityFactory. */
export interface EntityFactoryMembers {
  /** @throws java.lang.IllegalArgumentException */
  createEntitySnapshot(arg0: string): EntitySnapshot;
}
export type EntityFactory = EntityFactoryMembers;
export interface EntityFactoryStatics {
}

/** JVM interface org.bukkit.entity.EntitySnapshot. */
export interface EntitySnapshotMembers {
  createEntity(arg0: j_org_bukkit.Location): Entity;
  createEntity(arg0: j_org_bukkit.World): Entity;
  getAsString(): string;
  getEntityType(): EntityType;
}
export type EntitySnapshot = EntitySnapshotMembers;
export interface EntitySnapshotStatics {
}

/** Live JVM enum org.bukkit.entity.EntityType; constants are host handles, not strings. */
export type EntityType = JavaEnum<"org.bukkit.entity.EntityType", "ACACIA_BOAT" | "ACACIA_CHEST_BOAT" | "ALLAY" | "AREA_EFFECT_CLOUD" | "ARMADILLO" | "ARMOR_STAND" | "ARROW" | "AXOLOTL" | "BAMBOO_CHEST_RAFT" | "BAMBOO_RAFT" | "BAT" | "BEE" | "BIRCH_BOAT" | "BIRCH_CHEST_BOAT" | "BLAZE" | "BLOCK_DISPLAY" | "BOGGED" | "BREEZE" | "BREEZE_WIND_CHARGE" | "CAMEL" | "CAT" | "CAVE_SPIDER" | "CHERRY_BOAT" | "CHERRY_CHEST_BOAT" | "CHEST_MINECART" | "CHICKEN" | "COD" | "COMMAND_BLOCK_MINECART" | "COW" | "CREAKING" | "CREEPER" | "DARK_OAK_BOAT" | "DARK_OAK_CHEST_BOAT" | "DOLPHIN" | "DONKEY" | "DRAGON_FIREBALL" | "DROWNED" | "EGG" | "ELDER_GUARDIAN" | "ENDERMAN" | "ENDERMITE" | "ENDER_DRAGON" | "ENDER_PEARL" | "END_CRYSTAL" | "EVOKER" | "EVOKER_FANGS" | "EXPERIENCE_BOTTLE" | "EXPERIENCE_ORB" | "EYE_OF_ENDER" | "FALLING_BLOCK" | "FIREBALL" | "FIREWORK_ROCKET" | "FISHING_BOBBER" | "FOX" | "FROG" | "FURNACE_MINECART" | "GHAST" | "GIANT" | "GLOW_ITEM_FRAME" | "GLOW_SQUID" | "GOAT" | "GUARDIAN" | "HAPPY_GHAST" | "HOGLIN" | "HOPPER_MINECART" | "HORSE" | "HUSK" | "ILLUSIONER" | "INTERACTION" | "IRON_GOLEM" | "ITEM" | "ITEM_DISPLAY" | "ITEM_FRAME" | "JUNGLE_BOAT" | "JUNGLE_CHEST_BOAT" | "LEASH_KNOT" | "LIGHTNING_BOLT" | "LINGERING_POTION" | "LLAMA" | "LLAMA_SPIT" | "MAGMA_CUBE" | "MANGROVE_BOAT" | "MANGROVE_CHEST_BOAT" | "MARKER" | "MINECART" | "MOOSHROOM" | "MULE" | "OAK_BOAT" | "OAK_CHEST_BOAT" | "OCELOT" | "OMINOUS_ITEM_SPAWNER" | "PAINTING" | "PALE_OAK_BOAT" | "PALE_OAK_CHEST_BOAT" | "PANDA" | "PARROT" | "PHANTOM" | "PIGLIN" | "PIGLIN_BRUTE" | "PIG" | "PILLAGER" | "PLAYER" | "POLAR_BEAR" | "PUFFERFISH" | "RABBIT" | "RAVAGER" | "SALMON" | "SHEEP" | "SHULKER" | "SHULKER_BULLET" | "SILVERFISH" | "SKELETON" | "SKELETON_HORSE" | "SLIME" | "SMALL_FIREBALL" | "SNIFFER" | "SNOWBALL" | "SNOW_GOLEM" | "SPAWNER_MINECART" | "SPECTRAL_ARROW" | "SPIDER" | "SPLASH_POTION" | "SPRUCE_BOAT" | "SPRUCE_CHEST_BOAT" | "SQUID" | "STRAY" | "STRIDER" | "TADPOLE" | "TEXT_DISPLAY" | "TNT" | "TNT_MINECART" | "TRADER_LLAMA" | "TRIDENT" | "TROPICAL_FISH" | "TURTLE" | "UNKNOWN" | "VEX" | "VILLAGER" | "VINDICATOR" | "WANDERING_TRADER" | "WARDEN" | "WIND_CHARGE" | "WITCH" | "WITHER" | "WITHER_SKELETON" | "WITHER_SKULL" | "WOLF" | "ZOGLIN" | "ZOMBIE" | "ZOMBIE_HORSE" | "ZOMBIE_VILLAGER" | "ZOMBIFIED_PIGLIN"> & EntityTypeMembers;
export interface EntityTypeMembers {
  getDefaultAttributes(): j_org_bukkit_attribute.Attributable;
  getEntityClass(): JavaClass<Entity> | null;
  getKey(): j_org_bukkit.NamespacedKey;
  getName(): string | null;
  getTranslationKey(): string;
  getTypeId(): number;
  hasDefaultAttributes(): boolean;
  isAlive(): boolean;
  isEnabledByFeature(arg0: j_org_bukkit.World): boolean;
  isSpawnable(): boolean;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  requiredFeatures(): JavaSet<j_org_bukkit.FeatureFlag>;
  translationKey(): string;
}
export interface EntityTypeStatics {
  readonly ACACIA_BOAT: EntityType;
  readonly ACACIA_CHEST_BOAT: EntityType;
  readonly ALLAY: EntityType;
  readonly AREA_EFFECT_CLOUD: EntityType;
  readonly ARMADILLO: EntityType;
  readonly ARMOR_STAND: EntityType;
  readonly ARROW: EntityType;
  readonly AXOLOTL: EntityType;
  readonly BAMBOO_CHEST_RAFT: EntityType;
  readonly BAMBOO_RAFT: EntityType;
  readonly BAT: EntityType;
  readonly BEE: EntityType;
  readonly BIRCH_BOAT: EntityType;
  readonly BIRCH_CHEST_BOAT: EntityType;
  readonly BLAZE: EntityType;
  readonly BLOCK_DISPLAY: EntityType;
  readonly BOGGED: EntityType;
  readonly BREEZE: EntityType;
  readonly BREEZE_WIND_CHARGE: EntityType;
  readonly CAMEL: EntityType;
  readonly CAT: EntityType;
  readonly CAVE_SPIDER: EntityType;
  readonly CHERRY_BOAT: EntityType;
  readonly CHERRY_CHEST_BOAT: EntityType;
  readonly CHEST_MINECART: EntityType;
  readonly CHICKEN: EntityType;
  readonly COD: EntityType;
  readonly COMMAND_BLOCK_MINECART: EntityType;
  readonly COW: EntityType;
  readonly CREAKING: EntityType;
  readonly CREEPER: EntityType;
  readonly DARK_OAK_BOAT: EntityType;
  readonly DARK_OAK_CHEST_BOAT: EntityType;
  readonly DOLPHIN: EntityType;
  readonly DONKEY: EntityType;
  readonly DRAGON_FIREBALL: EntityType;
  readonly DROWNED: EntityType;
  readonly EGG: EntityType;
  readonly ELDER_GUARDIAN: EntityType;
  readonly ENDERMAN: EntityType;
  readonly ENDERMITE: EntityType;
  readonly ENDER_DRAGON: EntityType;
  readonly ENDER_PEARL: EntityType;
  readonly END_CRYSTAL: EntityType;
  readonly EVOKER: EntityType;
  readonly EVOKER_FANGS: EntityType;
  readonly EXPERIENCE_BOTTLE: EntityType;
  readonly EXPERIENCE_ORB: EntityType;
  readonly EYE_OF_ENDER: EntityType;
  readonly FALLING_BLOCK: EntityType;
  readonly FIREBALL: EntityType;
  readonly FIREWORK_ROCKET: EntityType;
  readonly FISHING_BOBBER: EntityType;
  readonly FOX: EntityType;
  readonly FROG: EntityType;
  readonly FURNACE_MINECART: EntityType;
  readonly GHAST: EntityType;
  readonly GIANT: EntityType;
  readonly GLOW_ITEM_FRAME: EntityType;
  readonly GLOW_SQUID: EntityType;
  readonly GOAT: EntityType;
  readonly GUARDIAN: EntityType;
  readonly HAPPY_GHAST: EntityType;
  readonly HOGLIN: EntityType;
  readonly HOPPER_MINECART: EntityType;
  readonly HORSE: EntityType;
  readonly HUSK: EntityType;
  readonly ILLUSIONER: EntityType;
  readonly INTERACTION: EntityType;
  readonly IRON_GOLEM: EntityType;
  readonly ITEM: EntityType;
  readonly ITEM_DISPLAY: EntityType;
  readonly ITEM_FRAME: EntityType;
  readonly JUNGLE_BOAT: EntityType;
  readonly JUNGLE_CHEST_BOAT: EntityType;
  readonly LEASH_KNOT: EntityType;
  readonly LIGHTNING_BOLT: EntityType;
  readonly LINGERING_POTION: EntityType;
  readonly LLAMA: EntityType;
  readonly LLAMA_SPIT: EntityType;
  readonly MAGMA_CUBE: EntityType;
  readonly MANGROVE_BOAT: EntityType;
  readonly MANGROVE_CHEST_BOAT: EntityType;
  readonly MARKER: EntityType;
  readonly MINECART: EntityType;
  readonly MOOSHROOM: EntityType;
  readonly MULE: EntityType;
  readonly OAK_BOAT: EntityType;
  readonly OAK_CHEST_BOAT: EntityType;
  readonly OCELOT: EntityType;
  readonly OMINOUS_ITEM_SPAWNER: EntityType;
  readonly PAINTING: EntityType;
  readonly PALE_OAK_BOAT: EntityType;
  readonly PALE_OAK_CHEST_BOAT: EntityType;
  readonly PANDA: EntityType;
  readonly PARROT: EntityType;
  readonly PHANTOM: EntityType;
  readonly PIGLIN: EntityType;
  readonly PIGLIN_BRUTE: EntityType;
  readonly PIG: EntityType;
  readonly PILLAGER: EntityType;
  readonly PLAYER: EntityType;
  readonly POLAR_BEAR: EntityType;
  readonly PUFFERFISH: EntityType;
  readonly RABBIT: EntityType;
  readonly RAVAGER: EntityType;
  readonly SALMON: EntityType;
  readonly SHEEP: EntityType;
  readonly SHULKER: EntityType;
  readonly SHULKER_BULLET: EntityType;
  readonly SILVERFISH: EntityType;
  readonly SKELETON: EntityType;
  readonly SKELETON_HORSE: EntityType;
  readonly SLIME: EntityType;
  readonly SMALL_FIREBALL: EntityType;
  readonly SNIFFER: EntityType;
  readonly SNOWBALL: EntityType;
  readonly SNOW_GOLEM: EntityType;
  readonly SPAWNER_MINECART: EntityType;
  readonly SPECTRAL_ARROW: EntityType;
  readonly SPIDER: EntityType;
  readonly SPLASH_POTION: EntityType;
  readonly SPRUCE_BOAT: EntityType;
  readonly SPRUCE_CHEST_BOAT: EntityType;
  readonly SQUID: EntityType;
  readonly STRAY: EntityType;
  readonly STRIDER: EntityType;
  readonly TADPOLE: EntityType;
  readonly TEXT_DISPLAY: EntityType;
  readonly TNT: EntityType;
  readonly TNT_MINECART: EntityType;
  readonly TRADER_LLAMA: EntityType;
  readonly TRIDENT: EntityType;
  readonly TROPICAL_FISH: EntityType;
  readonly TURTLE: EntityType;
  readonly UNKNOWN: EntityType;
  readonly VEX: EntityType;
  readonly VILLAGER: EntityType;
  readonly VINDICATOR: EntityType;
  readonly WANDERING_TRADER: EntityType;
  readonly WARDEN: EntityType;
  readonly WIND_CHARGE: EntityType;
  readonly WITCH: EntityType;
  readonly WITHER: EntityType;
  readonly WITHER_SKELETON: EntityType;
  readonly WITHER_SKULL: EntityType;
  readonly WOLF: EntityType;
  readonly ZOGLIN: EntityType;
  readonly ZOMBIE: EntityType;
  readonly ZOMBIE_HORSE: EntityType;
  readonly ZOMBIE_VILLAGER: EntityType;
  readonly ZOMBIFIED_PIGLIN: EntityType;
  fromId(arg0: number): EntityType | null;
  fromName(arg0: string | null): EntityType | null;
  valueOf(arg0: string): EntityType;
  values(): Array<EntityType>;
}

/** JVM interface org.bukkit.entity.Evoker. */
export interface EvokerMembers {
  readonly __javaSupertypes?: readonly [Spellcaster];
  getCurrentSpell(): Evoker_Spell;
  getWololoTarget(): Sheep | null;
  setCurrentSpell(arg0: Evoker_Spell | null): void | null;
  setWololoTarget(arg0: Sheep | null): void | null;
}
export type Evoker = EvokerMembers & Spellcaster;
export interface EvokerStatics {
}

/** Live JVM enum org.bukkit.entity.Evoker$Spell; constants are host handles, not strings. */
export type Evoker_Spell = JavaEnum<"org.bukkit.entity.Evoker$Spell", "BLINDNESS" | "DISAPPEAR" | "FANGS" | "NONE" | "SUMMON" | "WOLOLO"> & Evoker_SpellMembers;
export interface Evoker_SpellMembers {
}
export interface Evoker_SpellStatics {
  readonly BLINDNESS: Evoker_Spell;
  readonly DISAPPEAR: Evoker_Spell;
  readonly FANGS: Evoker_Spell;
  readonly NONE: Evoker_Spell;
  readonly SUMMON: Evoker_Spell;
  readonly WOLOLO: Evoker_Spell;
  valueOf(arg0: string): Evoker_Spell;
  values(): Array<Evoker_Spell>;
}

/** JVM interface org.bukkit.entity.EvokerFangs. */
export interface EvokerFangsMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getAttackDelay(): number;
  getOwner(): LivingEntity | null;
  setAttackDelay(arg0: number): void;
  setOwner(arg0: LivingEntity | null): void | null;
}
export type EvokerFangs = EvokerFangsMembers & Entity;
export interface EvokerFangsStatics {
}

/** JVM interface org.bukkit.entity.ExperienceOrb. */
export interface ExperienceOrbMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getCount(): number;
  getExperience(): number;
  getSourceEntityId(): JavaOpaque<"java.util.UUID"> | null;
  getSpawnReason(): ExperienceOrb_SpawnReason;
  getTriggerEntityId(): JavaOpaque<"java.util.UUID"> | null;
  isFromBottle(): boolean;
  setCount(arg0: number): void;
  setExperience(arg0: number): void;
}
export type ExperienceOrb = ExperienceOrbMembers & Entity;
export interface ExperienceOrbStatics {
}

/** Live JVM enum org.bukkit.entity.ExperienceOrb$SpawnReason; constants are host handles, not strings. */
export type ExperienceOrb_SpawnReason = JavaEnum<"org.bukkit.entity.ExperienceOrb$SpawnReason", "BLOCK_BREAK" | "BREED" | "CUSTOM" | "ENTITY_DEATH" | "EXP_BOTTLE" | "FISHING" | "FURNACE" | "GRINDSTONE" | "PLAYER_DEATH" | "UNKNOWN" | "VILLAGER_TRADE"> & ExperienceOrb_SpawnReasonMembers;
export interface ExperienceOrb_SpawnReasonMembers {
}
export interface ExperienceOrb_SpawnReasonStatics {
  readonly BLOCK_BREAK: ExperienceOrb_SpawnReason;
  readonly BREED: ExperienceOrb_SpawnReason;
  readonly CUSTOM: ExperienceOrb_SpawnReason;
  readonly ENTITY_DEATH: ExperienceOrb_SpawnReason;
  readonly EXP_BOTTLE: ExperienceOrb_SpawnReason;
  readonly FISHING: ExperienceOrb_SpawnReason;
  readonly FURNACE: ExperienceOrb_SpawnReason;
  readonly GRINDSTONE: ExperienceOrb_SpawnReason;
  readonly PLAYER_DEATH: ExperienceOrb_SpawnReason;
  readonly UNKNOWN: ExperienceOrb_SpawnReason;
  readonly VILLAGER_TRADE: ExperienceOrb_SpawnReason;
  valueOf(arg0: string): ExperienceOrb_SpawnReason;
  values(): Array<ExperienceOrb_SpawnReason>;
}

/** JVM interface org.bukkit.entity.Explosive. */
export interface ExplosiveMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getYield(): number;
  isIncendiary(): boolean;
  setIsIncendiary(arg0: boolean): void;
  setYield(arg0: number): void;
}
export type Explosive = ExplosiveMembers & Entity;
export interface ExplosiveStatics {
}

/** JVM interface org.bukkit.entity.FallingBlock. */
export interface FallingBlockMembers {
  readonly __javaSupertypes?: readonly [Entity];
  canHurtEntities(): boolean;
  doesAutoExpire(): boolean;
  getBlockData(): j_org_bukkit_block_data.BlockData;
  getBlockState(): j_org_bukkit_block.BlockState;
  getCancelDrop(): boolean;
  getDamagePerBlock(): number;
  getDropItem(): boolean;
  getMaterial(): j_org_bukkit.Material;
  getMaxDamage(): number;
  getSourceLoc(): j_org_bukkit.Location;
  setBlockData(arg0: j_org_bukkit_block_data.BlockData): void;
  setBlockState(arg0: j_org_bukkit_block.BlockState): void;
  setCancelDrop(arg0: boolean): void;
  setDamagePerBlock(arg0: number): void;
  setDropItem(arg0: boolean): void;
  setHurtEntities(arg0: boolean): void;
  setMaxDamage(arg0: number): void;
  shouldAutoExpire(arg0: boolean): void;
}
export type FallingBlock = FallingBlockMembers & Entity;
export interface FallingBlockStatics {
}

/** JVM interface org.bukkit.entity.Fireball. */
export interface FireballMembers {
  readonly __javaSupertypes?: readonly [Explosive, Projectile];
  getAcceleration(): j_org_bukkit_util.Vector;
  getDirection(): j_org_bukkit_util.Vector;
  getPower(): j_org_bukkit_util.Vector;
  setAcceleration(arg0: j_org_bukkit_util.Vector): void;
  setDirection(arg0: j_org_bukkit_util.Vector): void;
  setPower(arg0: j_org_bukkit_util.Vector): void;
}
export type Fireball = FireballMembers & Explosive & Projectile;
export interface FireballStatics {
}

/** JVM interface org.bukkit.entity.Firework. */
export interface FireworkMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  detonate(): void;
  getAttachedTo(): LivingEntity | null;
  getBoostedEntity(): LivingEntity | null;
  getFireworkMeta(): j_org_bukkit_inventory_meta.FireworkMeta;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getLife(): number;
  getMaxLife(): number;
  getSpawningEntity(): JavaOpaque<"java.util.UUID"> | null;
  getTicksFlown(): number;
  getTicksToDetonate(): number;
  isDetonated(): boolean;
  isShotAtAngle(): boolean;
  setAttachedTo(arg0: LivingEntity | null): boolean | null;
  setFireworkMeta(arg0: j_org_bukkit_inventory_meta.FireworkMeta): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setLife(arg0: number): boolean;
  setMaxLife(arg0: number): boolean;
  setShotAtAngle(arg0: boolean): void;
  setTicksFlown(arg0: number): void;
  setTicksToDetonate(arg0: number): void;
}
export type Firework = FireworkMembers & Projectile;
export interface FireworkStatics {
}

/** JVM interface org.bukkit.entity.Fish. */
export interface FishMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Bucketable, WaterMob];
}
export type Fish = FishMembers & j_io_papermc_paper_entity.Bucketable & WaterMob;
export interface FishStatics {
}

/** JVM interface org.bukkit.entity.FishHook. */
export interface FishHookMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  getApplyLure(): boolean;
  getBiteChance(): number;
  getHookedEntity(): Entity | null;
  getMaxLureAngle(): number;
  getMaxLureTime(): number;
  getMaxWaitTime(): number;
  getMinLureAngle(): number;
  getMinLureTime(): number;
  getMinWaitTime(): number;
  getState(): FishHook_HookState;
  getTimeUntilBite(): number;
  getWaitTime(): number;
  isInOpenWater(): boolean;
  isRainInfluenced(): boolean;
  isSkyInfluenced(): boolean;
  pullHookedEntity(): boolean;
  resetFishingState(): void;
  retrieve(arg0: j_org_bukkit_inventory.EquipmentSlot): number;
  setApplyLure(arg0: boolean): void;
  /** @throws java.lang.IllegalArgumentException */
  setBiteChance(arg0: number): void;
  setHookedEntity(arg0: Entity | null): void | null;
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
  /** @throws java.lang.IllegalArgumentException */
  setTimeUntilBite(arg0: number): void;
  setWaitTime(arg0: number): void;
  setWaitTime(arg0: number, arg1: number): void;
}
export type FishHook = FishHookMembers & Projectile;
export interface FishHookStatics {
}

/** Live JVM enum org.bukkit.entity.FishHook$HookState; constants are host handles, not strings. */
export type FishHook_HookState = JavaEnum<"org.bukkit.entity.FishHook$HookState", "BOBBING" | "HOOKED_ENTITY" | "UNHOOKED"> & FishHook_HookStateMembers;
export interface FishHook_HookStateMembers {
}
export interface FishHook_HookStateStatics {
  readonly BOBBING: FishHook_HookState;
  readonly HOOKED_ENTITY: FishHook_HookState;
  readonly UNHOOKED: FishHook_HookState;
  valueOf(arg0: string): FishHook_HookState;
  values(): Array<FishHook_HookState>;
}

/** JVM interface org.bukkit.entity.Flying. */
export interface FlyingMembers {
  readonly __javaSupertypes?: readonly [Mob];
}
export type Flying = FlyingMembers & Mob;
export interface FlyingStatics {
}

/** JVM interface org.bukkit.entity.Fox. */
export interface FoxMembers {
  readonly __javaSupertypes?: readonly [Animals, Sittable];
  getFirstTrustedPlayer(): AnimalTamer | null;
  getFoxType(): Fox_Type;
  getSecondTrustedPlayer(): AnimalTamer | null;
  isCrouching(): boolean;
  isDefending(): boolean;
  isFaceplanted(): boolean;
  isInterested(): boolean;
  isLeaping(): boolean;
  setCrouching(arg0: boolean): void;
  setDefending(arg0: boolean): void;
  setFaceplanted(arg0: boolean): void;
  setFirstTrustedPlayer(arg0: AnimalTamer | null): void | null;
  setFoxType(arg0: Fox_Type): void;
  setInterested(arg0: boolean): void;
  setLeaping(arg0: boolean): void;
  setSecondTrustedPlayer(arg0: AnimalTamer | null): void | null;
  setSleeping(arg0: boolean): void;
}
export type Fox = FoxMembers & Animals & Sittable;
export interface FoxStatics {
}

/** Live JVM enum org.bukkit.entity.Fox$Type; constants are host handles, not strings. */
export type Fox_Type = JavaEnum<"org.bukkit.entity.Fox$Type", "RED" | "SNOW"> & Fox_TypeMembers;
export interface Fox_TypeMembers {
}
export interface Fox_TypeStatics {
  readonly RED: Fox_Type;
  readonly SNOW: Fox_Type;
  valueOf(arg0: string): Fox_Type;
  values(): Array<Fox_Type>;
}

/** JVM interface org.bukkit.entity.Frog. */
export interface FrogMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getTongueTarget(): Entity | null;
  getVariant(): Frog_Variant;
  setTongueTarget(arg0: Entity | null): void | null;
  setVariant(arg0: Frog_Variant): void;
}
export type Frog = FrogMembers & Animals;
export interface FrogStatics {
}

/** JVM interface org.bukkit.entity.Frog$Variant. */
export interface Frog_VariantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<Frog_Variant>, j_org_bukkit.Keyed];
  compareTo(arg0: object): number;
  compareTo(arg0: Frog_Variant): number;
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
}
export type Frog_Variant = Frog_VariantMembers & j_org_bukkit.Keyed;
export interface Frog_VariantStatics {
  readonly COLD: Frog_Variant;
  readonly TEMPERATE: Frog_Variant;
  readonly WARM: Frog_Variant;
  valueOf(arg0: string): Frog_Variant;
  values(): Array<Frog_Variant>;
}

/** JVM interface org.bukkit.entity.Ghast. */
export interface GhastMembers {
  readonly __javaSupertypes?: readonly [Enemy, Flying];
  getExplosionPower(): number;
  isCharging(): boolean;
  setCharging(arg0: boolean): void;
  setExplosionPower(arg0: number): void;
}
export type Ghast = GhastMembers & Enemy & Flying;
export interface GhastStatics {
}

/** JVM interface org.bukkit.entity.Giant. */
export interface GiantMembers {
  readonly __javaSupertypes?: readonly [Monster];
}
export type Giant = GiantMembers & Monster;
export interface GiantStatics {
}

/** JVM interface org.bukkit.entity.GlowItemFrame. */
export interface GlowItemFrameMembers {
  readonly __javaSupertypes?: readonly [ItemFrame];
}
export type GlowItemFrame = GlowItemFrameMembers & ItemFrame;
export interface GlowItemFrameStatics {
}

/** JVM interface org.bukkit.entity.GlowSquid. */
export interface GlowSquidMembers {
  readonly __javaSupertypes?: readonly [Squid];
  getDarkTicksRemaining(): number;
  setDarkTicksRemaining(arg0: number): void;
}
export type GlowSquid = GlowSquidMembers & Squid;
export interface GlowSquidStatics {
}

/** JVM interface org.bukkit.entity.Goat. */
export interface GoatMembers {
  readonly __javaSupertypes?: readonly [Animals];
  hasLeftHorn(): boolean;
  hasRightHorn(): boolean;
  isScreaming(): boolean;
  ram(arg0: LivingEntity): void;
  setLeftHorn(arg0: boolean): void;
  setRightHorn(arg0: boolean): void;
  setScreaming(arg0: boolean): void;
}
export type Goat = GoatMembers & Animals;
export interface GoatStatics {
}

/** JVM interface org.bukkit.entity.Golem. */
export interface GolemMembers {
  readonly __javaSupertypes?: readonly [Creature];
}
export type Golem = GolemMembers & Creature;
export interface GolemStatics {
}

/** JVM interface org.bukkit.entity.Guardian. */
export interface GuardianMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getLaserDuration(): number;
  getLaserTicks(): number;
  hasLaser(): boolean;
  isElder(): boolean;
  isMoving(): boolean;
  setElder(arg0: boolean): void;
  setLaser(arg0: boolean): boolean;
  setLaserTicks(arg0: number): void;
}
export type Guardian = GuardianMembers & Monster;
export interface GuardianStatics {
}

/** JVM interface org.bukkit.entity.Hanging. */
export interface HangingMembers {
  readonly __javaSupertypes?: readonly [Entity, j_org_bukkit_material.Attachable_2];
  setFacingDirection(arg0: j_org_bukkit_block.BlockFace, arg1: boolean): boolean;
}
export type Hanging = HangingMembers & Entity & j_org_bukkit_material.Attachable_2;
export interface HangingStatics {
}

/** JVM interface org.bukkit.entity.HappyGhast. */
export interface HappyGhastMembers {
  readonly __javaSupertypes?: readonly [Animals, Vehicle];
}
export type HappyGhast = HappyGhastMembers & Animals & Vehicle;
export interface HappyGhastStatics {
}

/** JVM interface org.bukkit.entity.Hoglin. */
export interface HoglinMembers {
  readonly __javaSupertypes?: readonly [Animals, Enemy];
  getConversionTime(): number;
  isAbleToBeHunted(): boolean;
  isConverting(): boolean;
  isImmuneToZombification(): boolean;
  setConversionTime(arg0: number): void;
  setImmuneToZombification(arg0: boolean): void;
  setIsAbleToBeHunted(arg0: boolean): void;
}
export type Hoglin = HoglinMembers & Animals & Enemy;
export interface HoglinStatics {
}

/** JVM interface org.bukkit.entity.Horse. */
export interface HorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  getColor(): Horse_Color;
  getInventory(): j_org_bukkit_inventory.AbstractHorseInventory;
  getInventory(): j_org_bukkit_inventory.HorseInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getStyle(): Horse_Style;
  isCarryingChest(): boolean;
  setCarryingChest(arg0: boolean): void;
  setColor(arg0: Horse_Color): void;
  setStyle(arg0: Horse_Style): void;
}
export type Horse = HorseMembers & AbstractHorse;
export interface HorseStatics {
}

/** Live JVM enum org.bukkit.entity.Horse$Color; constants are host handles, not strings. */
export type Horse_Color = JavaEnum<"org.bukkit.entity.Horse$Color", "BLACK" | "BROWN" | "CHESTNUT" | "CREAMY" | "DARK_BROWN" | "GRAY" | "WHITE"> & Horse_ColorMembers;
export interface Horse_ColorMembers {
}
export interface Horse_ColorStatics {
  readonly BLACK: Horse_Color;
  readonly BROWN: Horse_Color;
  readonly CHESTNUT: Horse_Color;
  readonly CREAMY: Horse_Color;
  readonly DARK_BROWN: Horse_Color;
  readonly GRAY: Horse_Color;
  readonly WHITE: Horse_Color;
  valueOf(arg0: string): Horse_Color;
  values(): Array<Horse_Color>;
}

/** Live JVM enum org.bukkit.entity.Horse$Style; constants are host handles, not strings. */
export type Horse_Style = JavaEnum<"org.bukkit.entity.Horse$Style", "BLACK_DOTS" | "NONE" | "WHITEFIELD" | "WHITE" | "WHITE_DOTS"> & Horse_StyleMembers;
export interface Horse_StyleMembers {
}
export interface Horse_StyleStatics {
  readonly BLACK_DOTS: Horse_Style;
  readonly NONE: Horse_Style;
  readonly WHITEFIELD: Horse_Style;
  readonly WHITE: Horse_Style;
  readonly WHITE_DOTS: Horse_Style;
  valueOf(arg0: string): Horse_Style;
  values(): Array<Horse_Style>;
}

/** Live JVM enum org.bukkit.entity.Horse$Variant; constants are host handles, not strings. */
export type Horse_Variant = JavaEnum<"org.bukkit.entity.Horse$Variant", "CAMEL" | "DONKEY" | "HORSE" | "LLAMA" | "MULE" | "SKELETON_HORSE" | "UNDEAD_HORSE"> & Horse_VariantMembers;
export interface Horse_VariantMembers {
}
export interface Horse_VariantStatics {
  readonly CAMEL: Horse_Variant;
  readonly DONKEY: Horse_Variant;
  readonly HORSE: Horse_Variant;
  readonly LLAMA: Horse_Variant;
  readonly MULE: Horse_Variant;
  readonly SKELETON_HORSE: Horse_Variant;
  readonly UNDEAD_HORSE: Horse_Variant;
  valueOf(arg0: string): Horse_Variant;
  values(): Array<Horse_Variant>;
}

/** JVM interface org.bukkit.entity.HumanEntity. */
export interface HumanEntityMembers {
  readonly __javaSupertypes?: readonly [AnimalTamer, LivingEntity, j_org_bukkit_inventory.InventoryHolder];
  closeInventory(): void;
  closeInventory(arg0: j_org_bukkit_event_inventory.InventoryCloseEvent_Reason): void;
  discoverRecipe(arg0: j_org_bukkit.NamespacedKey): boolean;
  discoverRecipes(arg0: JavaCollection<j_org_bukkit.NamespacedKey>): number;
  dropItem(arg0: number): Item | null;
  dropItem(arg0: number, arg1: number): Item | null;
  dropItem(arg0: number, arg1: number, arg2: boolean, arg3: JavaConsumer<Item>): Item | null;
  dropItem(arg0: j_org_bukkit_inventory.EquipmentSlot): Item | null;
  dropItem(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: number): Item | null;
  dropItem(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: number, arg2: boolean, arg3: JavaConsumer<Item>): Item | null;
  dropItem(arg0: j_org_bukkit_inventory.ItemStack): Item | null;
  dropItem(arg0: j_org_bukkit_inventory.ItemStack, arg1: boolean, arg2: JavaConsumer<Item>): Item | null;
  dropItem(arg0: boolean): boolean;
  fireworkBoost(arg0: j_org_bukkit_inventory.ItemStack): Firework | null;
  getAttackCooldown(): number;
  getBedLocation(): j_org_bukkit.Location;
  getCooldown(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): number;
  getCooldown(arg0: j_org_bukkit.Material): number;
  getCooldown(arg0: j_org_bukkit_inventory.ItemStack): number;
  getDiscoveredRecipes(): JavaSet<j_org_bukkit.NamespacedKey>;
  getEnchantmentSeed(): number;
  getEnderChest(): j_org_bukkit_inventory.Inventory;
  getEquipment(): j_org_bukkit_inventory.EntityEquipment;
  getExhaustion(): number;
  getExpToLevel(): number;
  getFishHook(): FishHook | null;
  getFoodLevel(): number;
  getGameMode(): j_org_bukkit.GameMode;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getInventory(): j_org_bukkit_inventory.PlayerInventory;
  getItemInHand(): j_org_bukkit_inventory.ItemStack;
  getItemOnCursor(): j_org_bukkit_inventory.ItemStack;
  getLastDeathLocation(): j_org_bukkit.Location | null;
  getMainHand(): j_org_bukkit_inventory.MainHand;
  getName(): string;
  getOpenInventory(): j_org_bukkit_inventory.InventoryView;
  getPotentialBedLocation(): j_org_bukkit.Location | null;
  getPotentialRespawnLocation(): j_org_bukkit.Location | null;
  getSaturatedRegenRate(): number;
  getSaturation(): number;
  getShoulderEntityLeft(): Entity | null;
  getShoulderEntityRight(): Entity | null;
  getSleepTicks(): number;
  getStarvationRate(): number;
  getUnsaturatedRegenRate(): number;
  hasCooldown(arg0: j_org_bukkit.Material): boolean;
  hasCooldown(arg0: j_org_bukkit_inventory.ItemStack): boolean;
  hasDiscoveredRecipe(arg0: j_org_bukkit.NamespacedKey): boolean;
  isBlocking(): boolean;
  isDeeplySleeping(): boolean;
  isHandRaised(): boolean;
  openAnvil(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openCartographyTable(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openEnchanting(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openGrindstone(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openInventory(arg0: j_org_bukkit_inventory.Inventory): j_org_bukkit_inventory.InventoryView | null;
  openInventory(arg0: j_org_bukkit_inventory.InventoryView): void;
  openLoom(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openMerchant(arg0: Villager, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openMerchant(arg0: j_org_bukkit_inventory.Merchant, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openSign(arg0: j_org_bukkit_block.Sign): void;
  openSign(arg0: j_org_bukkit_block.Sign, arg1: j_org_bukkit_block_sign.Side): void;
  openSmithingTable(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openStonecutter(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  openWorkbench(arg0: j_org_bukkit.Location, arg1: boolean): j_org_bukkit_inventory.InventoryView | null;
  releaseLeftShoulderEntity(): Entity | null;
  releaseRightShoulderEntity(): Entity | null;
  setCooldown(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: number): void;
  setCooldown(arg0: j_org_bukkit.Material, arg1: number): void;
  setCooldown(arg0: j_org_bukkit_inventory.ItemStack, arg1: number): void;
  setEnchantmentSeed(arg0: number): void;
  setExhaustion(arg0: number): void;
  setFoodLevel(arg0: number): void;
  setGameMode(arg0: j_org_bukkit.GameMode): void;
  setHurtDirection(arg0: number): void;
  setItemInHand(arg0: j_org_bukkit_inventory.ItemStack): void | null;
  setItemOnCursor(arg0: j_org_bukkit_inventory.ItemStack): void | null;
  setLastDeathLocation(arg0: j_org_bukkit.Location): void | null;
  setSaturatedRegenRate(arg0: number): void;
  setSaturation(arg0: number): void;
  setShoulderEntityLeft(arg0: Entity): void | null;
  setShoulderEntityRight(arg0: Entity): void | null;
  setStarvationRate(arg0: number): void;
  setUnsaturatedRegenRate(arg0: number): void;
  setWindowProperty(arg0: j_org_bukkit_inventory.InventoryView_Property, arg1: number): boolean;
  sleep(arg0: j_org_bukkit.Location, arg1: boolean): boolean;
  startRiptideAttack(arg0: number, arg1: number, arg2: j_org_bukkit_inventory.ItemStack): void | null;
  undiscoverRecipe(arg0: j_org_bukkit.NamespacedKey): boolean;
  undiscoverRecipes(arg0: JavaCollection<j_org_bukkit.NamespacedKey>): number;
  wakeup(arg0: boolean): void;
}
export type HumanEntity = HumanEntityMembers & AnimalTamer & LivingEntity & j_org_bukkit_inventory.InventoryHolder;
export interface HumanEntityStatics {
}

/** JVM interface org.bukkit.entity.Husk. */
export interface HuskMembers {
  readonly __javaSupertypes?: readonly [Zombie];
  getConversionTime(): number;
  isConverting(): boolean;
  setConversionTime(arg0: number): void;
}
export type Husk = HuskMembers & Zombie;
export interface HuskStatics {
}

/** JVM interface org.bukkit.entity.Illager. */
export interface IllagerMembers {
  readonly __javaSupertypes?: readonly [Raider];
}
export type Illager = IllagerMembers & Raider;
export interface IllagerStatics {
}

/** JVM interface org.bukkit.entity.Illusioner. */
export interface IllusionerMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, Spellcaster];
}
export type Illusioner = IllusionerMembers & j_com_destroystokyo_paper_entity.RangedEntity & Spellcaster;
export interface IllusionerStatics {
}

/** JVM interface org.bukkit.entity.Interaction. */
export interface InteractionMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getInteractionHeight(): number;
  getInteractionWidth(): number;
  getLastAttack(): Interaction_PreviousInteraction | null;
  getLastInteraction(): Interaction_PreviousInteraction | null;
  isResponsive(): boolean;
  setInteractionHeight(arg0: number): void;
  setInteractionWidth(arg0: number): void;
  setResponsive(arg0: boolean): void;
}
export type Interaction = InteractionMembers & Entity;
export interface InteractionStatics {
}

/** JVM interface org.bukkit.entity.Interaction$PreviousInteraction. */
export interface Interaction_PreviousInteractionMembers {
  getPlayer(): j_org_bukkit.OfflinePlayer;
  getTimestamp(): bigint;
}
export type Interaction_PreviousInteraction = Interaction_PreviousInteractionMembers;
export interface Interaction_PreviousInteractionStatics {
}

/** JVM interface org.bukkit.entity.IronGolem. */
export interface IronGolemMembers {
  readonly __javaSupertypes?: readonly [Golem];
  isPlayerCreated(): boolean;
  setPlayerCreated(arg0: boolean): void;
}
export type IronGolem = IronGolemMembers & Golem;
export interface IronGolemStatics {
}

/** JVM interface org.bukkit.entity.Item. */
export interface ItemMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Frictional, Entity];
  canMobPickup(): boolean;
  canPlayerPickup(): boolean;
  getHealth(): number;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  getOwner(): JavaOpaque<"java.util.UUID"> | null;
  getPickupDelay(): number;
  getThrower(): JavaOpaque<"java.util.UUID"> | null;
  isUnlimitedLifetime(): boolean;
  setCanMobPickup(arg0: boolean): void;
  setCanPlayerPickup(arg0: boolean): void;
  setHealth(arg0: number): void;
  setItemStack(arg0: j_org_bukkit_inventory.ItemStack): void;
  setOwner(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setPickupDelay(arg0: number): void;
  setThrower(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setUnlimitedLifetime(arg0: boolean): void;
  setWillAge(arg0: boolean): void;
  willAge(): boolean;
}
export type Item = ItemMembers & j_io_papermc_paper_entity.Frictional & Entity;
export interface ItemStatics {
}

/** JVM interface org.bukkit.entity.ItemDisplay. */
export interface ItemDisplayMembers {
  readonly __javaSupertypes?: readonly [Display];
  getItemDisplayTransform(): ItemDisplay_ItemDisplayTransform;
  getItemStack(): j_org_bukkit_inventory.ItemStack;
  setItemDisplayTransform(arg0: ItemDisplay_ItemDisplayTransform): void;
  setItemStack(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
}
export type ItemDisplay = ItemDisplayMembers & Display;
export interface ItemDisplayStatics {
}

/** Live JVM enum org.bukkit.entity.ItemDisplay$ItemDisplayTransform; constants are host handles, not strings. */
export type ItemDisplay_ItemDisplayTransform = JavaEnum<"org.bukkit.entity.ItemDisplay$ItemDisplayTransform", "FIRSTPERSON_LEFTHAND" | "FIRSTPERSON_RIGHTHAND" | "FIXED" | "GROUND" | "GUI" | "HEAD" | "NONE" | "THIRDPERSON_LEFTHAND" | "THIRDPERSON_RIGHTHAND"> & ItemDisplay_ItemDisplayTransformMembers;
export interface ItemDisplay_ItemDisplayTransformMembers {
}
export interface ItemDisplay_ItemDisplayTransformStatics {
  readonly FIRSTPERSON_LEFTHAND: ItemDisplay_ItemDisplayTransform;
  readonly FIRSTPERSON_RIGHTHAND: ItemDisplay_ItemDisplayTransform;
  readonly FIXED: ItemDisplay_ItemDisplayTransform;
  readonly GROUND: ItemDisplay_ItemDisplayTransform;
  readonly GUI: ItemDisplay_ItemDisplayTransform;
  readonly HEAD: ItemDisplay_ItemDisplayTransform;
  readonly NONE: ItemDisplay_ItemDisplayTransform;
  readonly THIRDPERSON_LEFTHAND: ItemDisplay_ItemDisplayTransform;
  readonly THIRDPERSON_RIGHTHAND: ItemDisplay_ItemDisplayTransform;
  valueOf(arg0: string): ItemDisplay_ItemDisplayTransform;
  values(): Array<ItemDisplay_ItemDisplayTransform>;
}

/** JVM interface org.bukkit.entity.ItemFrame. */
export interface ItemFrameMembers {
  readonly __javaSupertypes?: readonly [Hanging];
  getItem(): j_org_bukkit_inventory.ItemStack;
  getItemDropChance(): number;
  getRotation(): j_org_bukkit.Rotation_2;
  isFixed(): boolean;
  isVisible(): boolean;
  setFixed(arg0: boolean): void;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null, arg1: boolean): void | null;
  setItemDropChance(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setRotation(arg0: j_org_bukkit.Rotation_2): void;
  setVisible(arg0: boolean): void;
}
export type ItemFrame = ItemFrameMembers & Hanging;
export interface ItemFrameStatics {
}

/** JVM interface org.bukkit.entity.LargeFireball. */
export interface LargeFireballMembers {
  readonly __javaSupertypes?: readonly [SizedFireball];
}
export type LargeFireball = LargeFireballMembers & SizedFireball;
export interface LargeFireballStatics {
}

/** JVM interface org.bukkit.entity.LeashHitch. */
export interface LeashHitchMembers {
  readonly __javaSupertypes?: readonly [Hanging];
}
export type LeashHitch = LeashHitchMembers & Hanging;
export interface LeashHitchStatics {
}

/** JVM interface org.bukkit.entity.LightningStrike. */
export interface LightningStrikeMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getCausingEntity(): Entity | null;
  getCausingPlayer(): Player | null;
  getFlashCount(): number;
  getFlashes(): number;
  getLifeTicks(): number;
  isEffect(): boolean;
  setCausingPlayer(arg0: Player | null): void | null;
  setFlashCount(arg0: number): void;
  setFlashes(arg0: number): void;
  setLifeTicks(arg0: number): void;
  spigot(): j_org_bukkit_command.CommandSender_Spigot;
  spigot(): Entity_Spigot;
  spigot(): LightningStrike_Spigot;
}
export type LightningStrike = LightningStrikeMembers & Entity;
export interface LightningStrikeStatics {
}

/** JVM class org.bukkit.entity.LightningStrike$Spigot. */
export interface LightningStrike_SpigotMembers {
  readonly __javaSupertypes?: readonly [Entity_Spigot];
  isSilent(): boolean;
}
export type LightningStrike_Spigot = LightningStrike_SpigotMembers & Entity_Spigot;
export interface LightningStrike_SpigotStatics {
  new(): LightningStrike_Spigot;
}

/** JVM interface org.bukkit.entity.LingeringPotion. */
export interface LingeringPotionMembers {
  readonly __javaSupertypes?: readonly [ThrownPotion];
}
export type LingeringPotion = LingeringPotionMembers & ThrownPotion;
export interface LingeringPotionStatics {
}

/** JVM interface org.bukkit.entity.LivingEntity. */
export interface LivingEntityMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Frictional, j_org_bukkit_attribute.Attributable, Damageable, j_org_bukkit_projectiles.ProjectileSource];
  addPotionEffect(arg0: j_org_bukkit_potion.PotionEffect): boolean;
  addPotionEffect(arg0: j_org_bukkit_potion.PotionEffect, arg1: boolean): boolean;
  addPotionEffects(arg0: JavaCollection<j_org_bukkit_potion.PotionEffect>): boolean;
  attack(arg0: Entity): void;
  broadcastSlotBreak(arg0: j_org_bukkit_inventory.EquipmentSlot): void;
  broadcastSlotBreak(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: JavaCollection<Player>): void;
  canBreatheUnderwater(): boolean;
  canUseEquipmentSlot(arg0: j_org_bukkit_inventory.EquipmentSlot): boolean;
  clearActiveItem(): void;
  clearActivePotionEffects(): boolean;
  completeUsingActiveItem(): void;
  damageItemStack(arg0: j_org_bukkit_inventory.EquipmentSlot, arg1: number): void;
  damageItemStack(arg0: j_org_bukkit_inventory.ItemStack, arg1: number): j_org_bukkit_inventory.ItemStack;
  getActiveItem(): j_org_bukkit_inventory.ItemStack;
  getActiveItemHand(): j_org_bukkit_inventory.EquipmentSlot;
  getActiveItemRemainingTime(): number;
  getActiveItemUsedTime(): number;
  getActivePotionEffects(): JavaCollection<j_org_bukkit_potion.PotionEffect>;
  getArrowCooldown(): number;
  getArrowsInBody(): number;
  getArrowsStuck(): number;
  getBeeStingerCooldown(): number;
  getBeeStingersInBody(): number;
  getBodyYaw(): number;
  getCanPickupItems(): boolean;
  getCategory(): EntityCategory;
  getCollidableExemptions(): JavaSet<JavaOpaque<"java.util.UUID">>;
  getCombatTracker(): j_io_papermc_paper_world_damagesource.CombatTracker;
  getDeathSound(): j_org_bukkit.Sound_2 | null;
  getDrinkingSound(arg0: j_org_bukkit_inventory.ItemStack): j_org_bukkit.Sound_2;
  getEatingSound(arg0: j_org_bukkit_inventory.ItemStack): j_org_bukkit.Sound_2;
  getEquipment(): j_org_bukkit_inventory.EntityEquipment | null;
  getEyeHeight(): number;
  getEyeHeight(arg0: boolean): number;
  getEyeLocation(): j_org_bukkit.Location;
  getFallDamageSound(arg0: number): j_org_bukkit.Sound_2;
  getFallDamageSoundBig(): j_org_bukkit.Sound_2;
  getFallDamageSoundSmall(): j_org_bukkit.Sound_2;
  getForwardsMovement(): number;
  getHandRaised(): j_org_bukkit_inventory.EquipmentSlot;
  getHandRaisedTime(): number;
  getHurtDirection(): number;
  getHurtSound(): j_org_bukkit.Sound_2 | null;
  getItemInUse(): j_org_bukkit_inventory.ItemStack | null;
  getItemInUseTicks(): number;
  getItemUseRemainingTime(): number;
  getKiller(): Player | null;
  getLastDamage(): number;
  getLastTwoTargetBlocks(arg0: JavaSet<j_org_bukkit.Material> | null, arg1: number): JavaList<j_org_bukkit_block.Block> | null;
  /** @throws java.lang.IllegalStateException */
  getLeashHolder(): Entity;
  getLineOfSight(arg0: JavaSet<j_org_bukkit.Material> | null, arg1: number): JavaList<j_org_bukkit_block.Block> | null;
  getMaximumAir(): number;
  getMaximumNoDamageTicks(): number;
  getMemory<T>(arg0: j_org_bukkit_entity_memory.MemoryKey<T>): T | null;
  getNextArrowRemoval(): number;
  getNextBeeStingerRemoval(): number;
  getNoActionTicks(): number;
  getNoDamageTicks(): number;
  getPotionEffect(arg0: j_org_bukkit_potion.PotionEffectType): j_org_bukkit_potion.PotionEffect | null;
  getRemainingAir(): number;
  getRemoveWhenFarAway(): boolean;
  getShieldBlockingDelay(): number;
  getSidewaysMovement(): number;
  getTargetBlock(arg0: number): j_org_bukkit_block.Block | null;
  getTargetBlock(arg0: number, arg1: j_com_destroystokyo_paper_block.TargetBlockInfo_FluidMode): j_org_bukkit_block.Block | null;
  getTargetBlock(arg0: JavaSet<j_org_bukkit.Material> | null, arg1: number): j_org_bukkit_block.Block | null;
  getTargetBlockExact(arg0: number): j_org_bukkit_block.Block | null;
  getTargetBlockExact(arg0: number, arg1: j_org_bukkit.FluidCollisionMode): j_org_bukkit_block.Block | null;
  getTargetBlockFace(arg0: number): j_org_bukkit_block.BlockFace | null;
  getTargetBlockFace(arg0: number, arg1: j_com_destroystokyo_paper_block.TargetBlockInfo_FluidMode): j_org_bukkit_block.BlockFace | null;
  getTargetBlockFace(arg0: number, arg1: j_org_bukkit.FluidCollisionMode): j_org_bukkit_block.BlockFace | null;
  getTargetBlockInfo(arg0: number): j_com_destroystokyo_paper_block.TargetBlockInfo | null;
  getTargetBlockInfo(arg0: number, arg1: j_com_destroystokyo_paper_block.TargetBlockInfo_FluidMode): j_com_destroystokyo_paper_block.TargetBlockInfo | null;
  getTargetEntity(arg0: number): Entity | null;
  getTargetEntity(arg0: number, arg1: boolean): Entity | null;
  getTargetEntityInfo(arg0: number): j_com_destroystokyo_paper_entity.TargetEntityInfo | null;
  getTargetEntityInfo(arg0: number, arg1: boolean): j_com_destroystokyo_paper_entity.TargetEntityInfo | null;
  getUpwardsMovement(): number;
  hasAI(): boolean;
  hasActiveItem(): boolean;
  hasLineOfSight(arg0: j_org_bukkit.Location): boolean;
  hasLineOfSight(arg0: Entity): boolean;
  hasPotionEffect(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  isClimbing(): boolean;
  isCollidable(): boolean;
  isGliding(): boolean;
  isHandRaised(): boolean;
  isJumping(): boolean;
  isLeashed(): boolean;
  isRiptiding(): boolean;
  isSleeping(): boolean;
  isSwimming(): boolean;
  knockback(arg0: number, arg1: number, arg2: number): void;
  playHurtAnimation(arg0: number): void;
  playPickupItemAnimation(arg0: Item): void;
  playPickupItemAnimation(arg0: Item, arg1: number): void;
  rayTraceBlocks(arg0: number): j_org_bukkit_util.RayTraceResult | null;
  rayTraceBlocks(arg0: number, arg1: j_org_bukkit.FluidCollisionMode): j_org_bukkit_util.RayTraceResult | null;
  rayTraceEntities(arg0: number): j_org_bukkit_util.RayTraceResult | null;
  rayTraceEntities(arg0: number, arg1: boolean): j_org_bukkit_util.RayTraceResult | null;
  removePotionEffect(arg0: j_org_bukkit_potion.PotionEffectType): void;
  setAI(arg0: boolean): void;
  setActiveItemRemainingTime(arg0: number): void;
  setArrowCooldown(arg0: number): void;
  setArrowsInBody(arg0: number): void;
  setArrowsInBody(arg0: number, arg1: boolean): void;
  setArrowsStuck(arg0: number): void;
  setBeeStingerCooldown(arg0: number): void;
  setBeeStingersInBody(arg0: number): void;
  setBodyYaw(arg0: number): void;
  setCanPickupItems(arg0: boolean): void;
  setCollidable(arg0: boolean): void;
  setGliding(arg0: boolean): void;
  setHurtDirection(arg0: number): void;
  setItemInUseTicks(arg0: number): void;
  setJumping(arg0: boolean): void;
  setKiller(arg0: Player | null): void | null;
  setLastDamage(arg0: number): void;
  setLeashHolder(arg0: Entity | null): boolean | null;
  setMaximumAir(arg0: number): void;
  setMaximumNoDamageTicks(arg0: number): void;
  setMemory<T>(arg0: j_org_bukkit_entity_memory.MemoryKey<T>, arg1: T | null): void | null;
  setNextArrowRemoval(arg0: number): void;
  setNextBeeStingerRemoval(arg0: number): void;
  setNoActionTicks(arg0: number): void;
  setNoDamageTicks(arg0: number): void;
  setRemainingAir(arg0: number): void;
  setRemoveWhenFarAway(arg0: boolean): void;
  setRiptiding(arg0: boolean): void;
  setShieldBlockingDelay(arg0: number): void;
  setSwimming(arg0: boolean): void;
  startUsingItem(arg0: j_org_bukkit_inventory.EquipmentSlot): void;
  swingHand(arg0: j_org_bukkit_inventory.EquipmentSlot): void;
  swingMainHand(): void;
  swingOffHand(): void;
}
export type LivingEntity = LivingEntityMembers & j_io_papermc_paper_entity.Frictional & j_org_bukkit_attribute.Attributable & Damageable & j_org_bukkit_projectiles.ProjectileSource;
export interface LivingEntityStatics {
}

/** JVM interface org.bukkit.entity.Llama. */
export interface LlamaMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, ChestedHorse];
  getCaravanHead(): Llama | null;
  getCaravanTail(): Llama | null;
  getColor(): Llama_Color;
  getInventory(): j_org_bukkit_inventory.AbstractHorseInventory;
  getInventory(): j_org_bukkit_inventory.Inventory;
  getInventory(): j_org_bukkit_inventory.LlamaInventory;
  getStrength(): number;
  hasCaravanTail(): boolean;
  inCaravan(): boolean;
  joinCaravan(arg0: Llama): void;
  leaveCaravan(): void;
  setColor(arg0: Llama_Color): void;
  setStrength(arg0: number): void;
}
export type Llama = LlamaMembers & j_com_destroystokyo_paper_entity.RangedEntity & ChestedHorse;
export interface LlamaStatics {
}

/** Live JVM enum org.bukkit.entity.Llama$Color; constants are host handles, not strings. */
export type Llama_Color = JavaEnum<"org.bukkit.entity.Llama$Color", "BROWN" | "CREAMY" | "GRAY" | "WHITE"> & Llama_ColorMembers;
export interface Llama_ColorMembers {
}
export interface Llama_ColorStatics {
  readonly BROWN: Llama_Color;
  readonly CREAMY: Llama_Color;
  readonly GRAY: Llama_Color;
  readonly WHITE: Llama_Color;
  valueOf(arg0: string): Llama_Color;
  values(): Array<Llama_Color>;
}

/** JVM interface org.bukkit.entity.LlamaSpit. */
export interface LlamaSpitMembers {
  readonly __javaSupertypes?: readonly [Projectile];
}
export type LlamaSpit = LlamaSpitMembers & Projectile;
export interface LlamaSpitStatics {
}

/** JVM interface org.bukkit.entity.MagmaCube. */
export interface MagmaCubeMembers {
  readonly __javaSupertypes?: readonly [Slime];
}
export type MagmaCube = MagmaCubeMembers & Slime;
export interface MagmaCubeStatics {
}

/** JVM interface org.bukkit.entity.Marker. */
export interface MarkerMembers {
  readonly __javaSupertypes?: readonly [Entity];
}
export type Marker = MarkerMembers & Entity;
export interface MarkerStatics {
}

/** JVM interface org.bukkit.entity.Minecart. */
export interface MinecartMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Frictional, Vehicle];
  getDamage(): number;
  getDerailedVelocityMod(): j_org_bukkit_util.Vector;
  getDisplayBlock(): j_org_bukkit_material.MaterialData;
  getDisplayBlockData(): j_org_bukkit_block_data.BlockData;
  getDisplayBlockOffset(): number;
  getFlyingVelocityMod(): j_org_bukkit_util.Vector;
  getMaxSpeed(): number;
  getMinecartMaterial(): j_org_bukkit.Material;
  isSlowWhenEmpty(): boolean;
  setDamage(arg0: number): void;
  setDerailedVelocityMod(arg0: j_org_bukkit_util.Vector): void;
  setDisplayBlock(arg0: j_org_bukkit_material.MaterialData | null): void | null;
  setDisplayBlockData(arg0: j_org_bukkit_block_data.BlockData | null): void | null;
  setDisplayBlockOffset(arg0: number): void;
  setFlyingVelocityMod(arg0: j_org_bukkit_util.Vector): void;
  setMaxSpeed(arg0: number): void;
  setSlowWhenEmpty(arg0: boolean): void;
}
export type Minecart = MinecartMembers & j_io_papermc_paper_entity.Frictional & Vehicle;
export interface MinecartStatics {
}

/** JVM interface org.bukkit.entity.Mob. */
export interface MobMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Leashable, LivingEntity, j_org_bukkit_loot.Lootable];
  getAmbientSound(): j_org_bukkit.Sound_2 | null;
  getDespawnInPeacefulOverride(): j_net_kyori_adventure_util.TriState;
  getEquipment(): j_org_bukkit_inventory.EntityEquipment;
  getHeadRotationSpeed(): number;
  getMaxHeadPitch(): number;
  getPathfinder(): j_com_destroystokyo_paper_entity.Pathfinder;
  getPossibleExperienceReward(): number;
  getTarget(): LivingEntity | null;
  isAggressive(): boolean;
  isAware(): boolean;
  isInDaylight(): boolean;
  isLeftHanded(): boolean;
  lookAt(arg0: number, arg1: number, arg2: number): void;
  lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  lookAt(arg0: j_org_bukkit.Location): void;
  lookAt(arg0: j_org_bukkit.Location, arg1: number, arg2: number): void;
  lookAt(arg0: Entity): void;
  lookAt(arg0: Entity, arg1: number, arg2: number): void;
  setAggressive(arg0: boolean): void;
  setAware(arg0: boolean): void;
  setDespawnInPeacefulOverride(arg0: j_net_kyori_adventure_util.TriState): void;
  setLeftHanded(arg0: boolean): void;
  setLootTable(arg0: j_org_bukkit_loot.LootTable, arg1: bigint): void | null;
  setTarget(arg0: LivingEntity): void | null;
  shouldDespawnInPeaceful(): boolean;
}
export type Mob = MobMembers & j_io_papermc_paper_entity.Leashable & LivingEntity & j_org_bukkit_loot.Lootable;
export interface MobStatics {
}

/** JVM interface org.bukkit.entity.Monster. */
export interface MonsterMembers {
  readonly __javaSupertypes?: readonly [Creature, Enemy];
}
export type Monster = MonsterMembers & Creature & Enemy;
export interface MonsterStatics {
}

/** JVM interface org.bukkit.entity.Mule. */
export interface MuleMembers {
  readonly __javaSupertypes?: readonly [ChestedHorse];
}
export type Mule = MuleMembers & ChestedHorse;
export interface MuleStatics {
}

/** JVM interface org.bukkit.entity.MushroomCow. */
export interface MushroomCowMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Shearable, AbstractCow];
  addEffectToNextStew(arg0: j_io_papermc_paper_potion.SuspiciousEffectEntry, arg1: boolean): boolean;
  addEffectToNextStew(arg0: j_org_bukkit_potion.PotionEffect, arg1: boolean): boolean;
  clearEffectsForNextStew(): void;
  getEffectsForNextStew(): JavaList<j_org_bukkit_potion.PotionEffect>;
  getStewEffectDuration(): number;
  getStewEffectType(): j_org_bukkit_potion.PotionEffectType;
  getStewEffects(): JavaList<j_io_papermc_paper_potion.SuspiciousEffectEntry>;
  getVariant(): MushroomCow_Variant;
  hasEffectForNextStew(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  hasEffectsForNextStew(): boolean;
  removeEffectFromNextStew(arg0: j_org_bukkit_potion.PotionEffectType): boolean;
  setStewEffect(arg0: j_org_bukkit_potion.PotionEffectType | null): void | null;
  setStewEffectDuration(arg0: number): void;
  setStewEffects(arg0: JavaList<j_io_papermc_paper_potion.SuspiciousEffectEntry>): void;
  setVariant(arg0: MushroomCow_Variant): void;
}
export type MushroomCow = MushroomCowMembers & j_io_papermc_paper_entity.Shearable & AbstractCow;
export interface MushroomCowStatics {
}

/** Live JVM enum org.bukkit.entity.MushroomCow$Variant; constants are host handles, not strings. */
export type MushroomCow_Variant = JavaEnum<"org.bukkit.entity.MushroomCow$Variant", "BROWN" | "RED"> & MushroomCow_VariantMembers;
export interface MushroomCow_VariantMembers {
}
export interface MushroomCow_VariantStatics {
  readonly BROWN: MushroomCow_Variant;
  readonly RED: MushroomCow_Variant;
  valueOf(arg0: string): MushroomCow_Variant;
  values(): Array<MushroomCow_Variant>;
}

/** JVM interface org.bukkit.entity.NPC. */
export interface NPCMembers {
  readonly __javaSupertypes?: readonly [Creature];
}
export type NPC = NPCMembers & Creature;
export interface NPCStatics {
}

/** JVM interface org.bukkit.entity.Ocelot. */
export interface OcelotMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getCatType(): Ocelot_Type;
  isTrusting(): boolean;
  setCatType(arg0: Ocelot_Type): void;
  setTrusting(arg0: boolean): void;
}
export type Ocelot = OcelotMembers & Animals;
export interface OcelotStatics {
}

/** Live JVM enum org.bukkit.entity.Ocelot$Type; constants are host handles, not strings. */
export type Ocelot_Type = JavaEnum<"org.bukkit.entity.Ocelot$Type", "BLACK_CAT" | "RED_CAT" | "SIAMESE_CAT" | "WILD_OCELOT"> & Ocelot_TypeMembers;
export interface Ocelot_TypeMembers {
  getId(): number;
}
export interface Ocelot_TypeStatics {
  readonly BLACK_CAT: Ocelot_Type;
  readonly RED_CAT: Ocelot_Type;
  readonly SIAMESE_CAT: Ocelot_Type;
  readonly WILD_OCELOT: Ocelot_Type;
  getType(arg0: number): Ocelot_Type | null;
  valueOf(arg0: string): Ocelot_Type;
  values(): Array<Ocelot_Type>;
}

/** JVM interface org.bukkit.entity.OminousItemSpawner. */
export interface OminousItemSpawnerMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getItem(): j_org_bukkit_inventory.ItemStack;
  getSpawnItemAfterTicks(): bigint;
  setItem(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setSpawnItemAfterTicks(arg0: bigint): void;
}
export type OminousItemSpawner = OminousItemSpawnerMembers & Entity;
export interface OminousItemSpawnerStatics {
}

/** JVM interface org.bukkit.entity.Painting. */
export interface PaintingMembers {
  readonly __javaSupertypes?: readonly [Hanging];
  getArt(): j_org_bukkit.Art;
  setArt(arg0: j_org_bukkit.Art): boolean;
  setArt(arg0: j_org_bukkit.Art, arg1: boolean): boolean;
}
export type Painting = PaintingMembers & Hanging;
export interface PaintingStatics {
}

/** JVM interface org.bukkit.entity.Panda. */
export interface PandaMembers {
  readonly __javaSupertypes?: readonly [Animals, Sittable];
  getCombinedGene(): Panda_Gene;
  getEatingTicks(): number;
  getHiddenGene(): Panda_Gene;
  getMainGene(): Panda_Gene;
  getSneezeTicks(): number;
  getUnhappyTicks(): number;
  isEating(): boolean;
  isOnBack(): boolean;
  isRolling(): boolean;
  isScared(): boolean;
  isSneezing(): boolean;
  setEating(arg0: boolean): void;
  setEatingTicks(arg0: number): void;
  setHiddenGene(arg0: Panda_Gene): void;
  setIsOnBack(arg0: boolean): void;
  setIsSitting(arg0: boolean): void;
  setMainGene(arg0: Panda_Gene): void;
  setOnBack(arg0: boolean): void;
  setRolling(arg0: boolean): void;
  setSneezeTicks(arg0: number): void;
  setSneezing(arg0: boolean): void;
  setUnhappyTicks(arg0: number): void;
}
export type Panda = PandaMembers & Animals & Sittable;
export interface PandaStatics {
}

/** Live JVM enum org.bukkit.entity.Panda$Gene; constants are host handles, not strings. */
export type Panda_Gene = JavaEnum<"org.bukkit.entity.Panda$Gene", "AGGRESSIVE" | "BROWN" | "LAZY" | "NORMAL" | "PLAYFUL" | "WEAK" | "WORRIED"> & Panda_GeneMembers;
export interface Panda_GeneMembers {
  isRecessive(): boolean;
}
export interface Panda_GeneStatics {
  readonly AGGRESSIVE: Panda_Gene;
  readonly BROWN: Panda_Gene;
  readonly LAZY: Panda_Gene;
  readonly NORMAL: Panda_Gene;
  readonly PLAYFUL: Panda_Gene;
  readonly WEAK: Panda_Gene;
  readonly WORRIED: Panda_Gene;
  valueOf(arg0: string): Panda_Gene;
  values(): Array<Panda_Gene>;
}

/** JVM interface org.bukkit.entity.Parrot. */
export interface ParrotMembers {
  readonly __javaSupertypes?: readonly [Sittable, Tameable];
  getVariant(): Parrot_Variant;
  isDancing(): boolean;
  setVariant(arg0: Parrot_Variant): void;
}
export type Parrot = ParrotMembers & Sittable & Tameable;
export interface ParrotStatics {
}

/** Live JVM enum org.bukkit.entity.Parrot$Variant; constants are host handles, not strings. */
export type Parrot_Variant = JavaEnum<"org.bukkit.entity.Parrot$Variant", "BLUE" | "CYAN" | "GRAY" | "GREEN" | "RED"> & Parrot_VariantMembers;
export interface Parrot_VariantMembers {
}
export interface Parrot_VariantStatics {
  readonly BLUE: Parrot_Variant;
  readonly CYAN: Parrot_Variant;
  readonly GRAY: Parrot_Variant;
  readonly GREEN: Parrot_Variant;
  readonly RED: Parrot_Variant;
  valueOf(arg0: string): Parrot_Variant;
  values(): Array<Parrot_Variant>;
}

/** JVM interface org.bukkit.entity.Phantom. */
export interface PhantomMembers {
  readonly __javaSupertypes?: readonly [Enemy, Flying];
  getAnchorLocation(): j_org_bukkit.Location | null;
  getSize(): number;
  getSpawningEntity(): JavaOpaque<"java.util.UUID"> | null;
  setAnchorLocation(arg0: j_org_bukkit.Location | null): void | null;
  setShouldBurnInDay(arg0: boolean): void;
  setSize(arg0: number): void;
  shouldBurnInDay(): boolean;
}
export type Phantom = PhantomMembers & Enemy & Flying;
export interface PhantomStatics {
}

/** JVM interface org.bukkit.entity.Pig. */
export interface PigMembers {
  readonly __javaSupertypes?: readonly [Steerable, Vehicle];
  getVariant(): Pig_Variant;
  setVariant(arg0: Pig_Variant): void;
}
export type Pig = PigMembers & Steerable & Vehicle;
export interface PigStatics {
}

/** JVM interface org.bukkit.entity.Pig$Variant. */
export interface Pig_VariantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
}
export type Pig_Variant = Pig_VariantMembers & j_org_bukkit.Keyed;
export interface Pig_VariantStatics {
  readonly COLD: Pig_Variant;
  readonly TEMPERATE: Pig_Variant;
  readonly WARM: Pig_Variant;
}

/** JVM interface org.bukkit.entity.Piglin. */
export interface PiglinMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, PiglinAbstract, j_org_bukkit_inventory.InventoryHolder];
  addBarterMaterial(arg0: j_org_bukkit.Material): boolean;
  addMaterialOfInterest(arg0: j_org_bukkit.Material): boolean;
  getBarterList(): JavaSet<j_org_bukkit.Material>;
  getInterestList(): JavaSet<j_org_bukkit.Material>;
  isAbleToHunt(): boolean;
  isChargingCrossbow(): boolean;
  isDancing(): boolean;
  removeBarterMaterial(arg0: j_org_bukkit.Material): boolean;
  removeMaterialOfInterest(arg0: j_org_bukkit.Material): boolean;
  setChargingCrossbow(arg0: boolean): void;
  setDancing(arg0: bigint): void;
  setDancing(arg0: boolean): void;
  setIsAbleToHunt(arg0: boolean): void;
}
export type Piglin = PiglinMembers & j_com_destroystokyo_paper_entity.RangedEntity & PiglinAbstract & j_org_bukkit_inventory.InventoryHolder;
export interface PiglinStatics {
}

/** JVM interface org.bukkit.entity.PiglinAbstract. */
export interface PiglinAbstractMembers {
  readonly __javaSupertypes?: readonly [Ageable_2, Monster];
  getConversionTime(): number;
  isBaby(): boolean;
  isConverting(): boolean;
  isImmuneToZombification(): boolean;
  setBaby(arg0: boolean): void;
  setConversionTime(arg0: number): void;
  setImmuneToZombification(arg0: boolean): void;
}
export type PiglinAbstract = PiglinAbstractMembers & Ageable_2 & Monster;
export interface PiglinAbstractStatics {
}

/** JVM interface org.bukkit.entity.PiglinBrute. */
export interface PiglinBruteMembers {
  readonly __javaSupertypes?: readonly [PiglinAbstract];
}
export type PiglinBrute = PiglinBruteMembers & PiglinAbstract;
export interface PiglinBruteStatics {
}

/** JVM interface org.bukkit.entity.PigZombie. */
export interface PigZombieMembers {
  readonly __javaSupertypes?: readonly [Zombie];
  getAnger(): number;
  getConversionTime(): number;
  isAngry(): boolean;
  isConverting(): boolean;
  setAnger(arg0: number): void;
  setAngry(arg0: boolean): void;
  setConversionTime(arg0: number): void;
}
export type PigZombie = PigZombieMembers & Zombie;
export interface PigZombieStatics {
}

/** JVM interface org.bukkit.entity.Pillager. */
export interface PillagerMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, Illager, j_org_bukkit_inventory.InventoryHolder];
}
export type Pillager = PillagerMembers & j_com_destroystokyo_paper_entity.RangedEntity & Illager & j_org_bukkit_inventory.InventoryHolder;
export interface PillagerStatics {
}

/** JVM interface org.bukkit.entity.Player. */
export interface PlayerMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_network.NetworkClient, j_net_kyori_adventure_bossbar.BossBarViewer, j_net_kyori_adventure_identity.Identified, j_org_bukkit.OfflinePlayer, j_org_bukkit_conversations.Conversable, HumanEntity, j_org_bukkit_plugin_messaging.PluginMessageRecipient];
  activeBossBars(): Iterable<j_net_kyori_adventure_bossbar.BossBar>;
  addAdditionalChatCompletions(arg0: JavaCollection<string>): void;
  addCustomChatCompletions(arg0: JavaCollection<string>): void;
  addResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: Array<number>, arg3: string, arg4: boolean): void | null;
  applyMending(arg0: number): number;
  asHoverEvent(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_kyori_adventure_text_event.HoverEvent_ShowEntity]>): j_net_kyori_adventure_text_event.HoverEvent<j_net_kyori_adventure_text_event.HoverEvent_ShowEntity>;
  ban<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: string, arg1: JavaOpaque<"java.time.Duration">, arg2: string, arg3: boolean): E | null;
  ban<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: string, arg3: boolean): E | null;
  ban<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string, arg3: boolean): E | null;
  banIp(arg0: string, arg1: JavaOpaque<"java.time.Duration">, arg2: string, arg3: boolean): j_org_bukkit.BanEntry<JavaOpaque<"java.net.InetAddress">> | null;
  banIp(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: string, arg3: boolean): j_org_bukkit.BanEntry<JavaOpaque<"java.net.InetAddress">> | null;
  banIp(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string, arg3: boolean): j_org_bukkit.BanEntry<JavaOpaque<"java.net.InetAddress">> | null;
  banPlayerFull(arg0: string): j_org_bukkit.BanEntry | null;
  banPlayerFull(arg0: string, arg1: string): j_org_bukkit.BanEntry | null;
  banPlayerFull(arg0: string, arg1: JavaOpaque<"java.util.Date">): j_org_bukkit.BanEntry | null;
  banPlayerFull(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: string): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: string, arg2: boolean): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: JavaOpaque<"java.util.Date">): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: string, arg3: boolean): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: JavaOpaque<"java.util.Date">, arg2: boolean): j_org_bukkit.BanEntry | null;
  banPlayerIP(arg0: string, arg1: boolean): j_org_bukkit.BanEntry | null;
  boostElytra(arg0: j_org_bukkit_inventory.ItemStack): Firework | null;
  breakBlock(arg0: j_org_bukkit_block.Block): boolean;
  calculateTotalExperiencePoints(): number;
  canSee(arg0: Entity): boolean;
  canSee(arg0: Player): boolean;
  chat(arg0: string): void;
  displayName(): j_net_kyori_adventure_text.Component;
  displayName(arg0: j_net_kyori_adventure_text.Component): void | null;
  getAddress(): JavaOpaque<"java.net.InetSocketAddress"> | null;
  getAdvancementProgress(arg0: j_org_bukkit_advancement.Advancement): j_org_bukkit_advancement.AdvancementProgress;
  getAffectsSpawning(): boolean;
  getAllowFlight(): boolean;
  getClientBrandName(): string | null;
  getClientOption<T>(arg0: j_com_destroystokyo_paper.ClientOption<T>): T;
  getClientViewDistance(): number;
  getCompassTarget(): j_org_bukkit.Location;
  getConnection(): j_io_papermc_paper_connection.PlayerGameConnection;
  getCooldownPeriod(): number;
  getCooledAttackStrength(arg0: number): number;
  getCurrentInput(): j_org_bukkit.Input;
  getDeathScreenScore(): number;
  getDisplayName(): string;
  getEnderPearls(): JavaCollection<EnderPearl>;
  getExp(): number;
  getExpCooldown(): number;
  getExperiencePointsNeededForNextLevel(): number;
  getFlySpeed(): number;
  getHAProxyAddress(): JavaOpaque<"java.net.InetSocketAddress"> | null;
  getHealthScale(): number;
  getIdleDuration(): JavaOpaque<"java.time.Duration">;
  getLevel(): number;
  getLocale(): string;
  getName(): string;
  getNoTickViewDistance(): number;
  getPing(): number;
  getPlayerListFooter(): string | null;
  getPlayerListHeader(): string | null;
  getPlayerListName(): string;
  getPlayerListOrder(): number;
  getPlayerProfile(): j_com_destroystokyo_paper_profile.PlayerProfile;
  getPlayerTime(): bigint;
  getPlayerTimeOffset(): bigint;
  getPlayerWeather(): j_org_bukkit.WeatherType | null;
  getPreviousGameMode(): j_org_bukkit.GameMode | null;
  getResourcePackHash(): string | null;
  getResourcePackStatus(): j_org_bukkit_event_player.PlayerResourcePackStatusEvent_Status | null;
  getRespawnLocation(): j_org_bukkit.Location | null;
  getScoreboard(): j_org_bukkit_scoreboard.Scoreboard;
  getSendViewDistance(): number;
  getSentChunkKeys(): JavaSet<bigint>;
  getSentChunks(): JavaSet<j_org_bukkit.Chunk>;
  getSimulationDistance(): number;
  getSpectatorTarget(): Entity | null;
  getTotalExperience(): number;
  getViewDistance(): number;
  getWalkSpeed(): number;
  getWardenTimeSinceLastWarning(): number;
  getWardenWarningCooldown(): number;
  getWardenWarningLevel(): number;
  getWorldBorder(): j_org_bukkit.WorldBorder | null;
  give(arg0: JavaCollection<j_org_bukkit_inventory.ItemStack>): j_io_papermc_paper_entity.PlayerGiveResult;
  give(arg0: JavaCollection<j_org_bukkit_inventory.ItemStack>, arg1: boolean): j_io_papermc_paper_entity.PlayerGiveResult;
  give(...arg0: Array<j_org_bukkit_inventory.ItemStack>): j_io_papermc_paper_entity.PlayerGiveResult;
  giveExp(arg0: number): void;
  giveExp(arg0: number, arg1: boolean): void;
  giveExpLevels(arg0: number): void;
  hasFlyingFallDamage(): j_net_kyori_adventure_util.TriState;
  hasResourcePack(): boolean;
  hasSeenWinScreen(): boolean;
  hideEntity(arg0: j_org_bukkit_plugin.Plugin, arg1: Entity): void;
  hidePlayer(arg0: Player): void;
  hidePlayer(arg0: j_org_bukkit_plugin.Plugin, arg1: Player): void;
  hideTitle(): void;
  identity(): j_net_kyori_adventure_identity.Identity;
  increaseWardenWarningLevel(): void;
  isAllowingServerListings(): boolean;
  isChunkSent(arg0: bigint): boolean;
  isChunkSent(arg0: j_org_bukkit.Chunk): boolean;
  isFlying(): boolean;
  isHealthScaled(): boolean;
  isListed(arg0: Player): boolean;
  isOnGround(): boolean;
  isPlayerTimeRelative(): boolean;
  isSleepingIgnored(): boolean;
  isSneaking(): boolean;
  isSprinting(): boolean;
  isTransferred(): boolean;
  kick(): void;
  kick(arg0: j_net_kyori_adventure_text.Component): void | null;
  kick(arg0: j_net_kyori_adventure_text.Component, arg1: j_org_bukkit_event_player.PlayerKickEvent_Cause): void | null;
  kickPlayer(arg0: string): void | null;
  listPlayer(arg0: Player): boolean;
  loadData(): void;
  locale(): JavaOpaque<"java.util.Locale">;
  lookAt(arg0: Entity, arg1: j_io_papermc_paper_entity.LookAnchor, arg2: j_io_papermc_paper_entity.LookAnchor): void;
  openBook(arg0: j_org_bukkit_inventory.ItemStack): void;
  openSign(arg0: j_org_bukkit_block.Sign): void;
  openSign(arg0: j_org_bukkit_block.Sign, arg1: j_org_bukkit_block_sign.Side): void;
  openVirtualSign(arg0: j_io_papermc_paper_math.Position, arg1: j_org_bukkit_block_sign.Side): void;
  performCommand(arg0: string): boolean;
  playEffect(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Effect, arg2: number): void;
  playEffect<T>(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Effect, arg2: T): void | null;
  playNote(arg0: j_org_bukkit.Location, arg1: number, arg2: number): void;
  playNote(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Instrument, arg2: j_org_bukkit.Note): void;
  playSound(arg0: j_org_bukkit.Location, arg1: string, arg2: number, arg3: number): void;
  playSound(arg0: j_org_bukkit.Location, arg1: string, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number): void;
  playSound(arg0: j_org_bukkit.Location, arg1: string, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Sound_2, arg2: number, arg3: number): void;
  playSound(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Sound_2, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number): void;
  playSound(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Sound_2, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: Entity, arg1: string, arg2: number, arg3: number): void;
  playSound(arg0: Entity, arg1: string, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number): void;
  playSound(arg0: Entity, arg1: string, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number, arg5: bigint): void;
  playSound(arg0: Entity, arg1: j_org_bukkit.Sound_2, arg2: number, arg3: number): void;
  playSound(arg0: Entity, arg1: j_org_bukkit.Sound_2, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number): void;
  playSound(arg0: Entity, arg1: j_org_bukkit.Sound_2, arg2: j_org_bukkit.SoundCategory, arg3: number, arg4: number, arg5: bigint): void;
  playerListFooter(): j_net_kyori_adventure_text.Component | null;
  playerListHeader(): j_net_kyori_adventure_text.Component | null;
  playerListName(): j_net_kyori_adventure_text.Component;
  playerListName(arg0: j_net_kyori_adventure_text.Component): void | null;
  removeAdditionalChatCompletions(arg0: JavaCollection<string>): void;
  removeCustomChatCompletions(arg0: JavaCollection<string>): void;
  removeResourcePack(arg0: JavaOpaque<"java.util.UUID">): void;
  removeResourcePacks(): void;
  resetCooldown(): void;
  resetIdleDuration(): void;
  resetPlayerTime(): void;
  resetPlayerWeather(): void;
  resetTitle(): void;
  retrieveCookie(arg0: j_org_bukkit.NamespacedKey): PromiseLike<Array<number>> | null;
  saveData(): void;
  sendActionBar(arg0: string, arg1: string): void;
  sendActionBar(arg0: string): void;
  sendActionBar(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendBlockChange(arg0: j_org_bukkit.Location, arg1: j_org_bukkit.Material, arg2: number): void;
  sendBlockChange(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_block_data.BlockData): void;
  sendBlockChanges(arg0: JavaCollection<j_org_bukkit_block.BlockState>): void;
  sendBlockChanges(arg0: JavaCollection<j_org_bukkit_block.BlockState>, arg1: boolean): void;
  sendBlockDamage(arg0: j_org_bukkit.Location, arg1: number): void;
  sendBlockDamage(arg0: j_org_bukkit.Location, arg1: number, arg2: number): void;
  sendBlockDamage(arg0: j_org_bukkit.Location, arg1: number, arg2: Entity): void;
  /** @throws java.lang.IllegalArgumentException */
  sendBlockUpdate(arg0: j_org_bukkit.Location, arg1: j_org_bukkit_block.TileState): void;
  sendEntityEffect(arg0: j_org_bukkit.EntityEffect, arg1: Entity): void;
  sendEquipmentChange(arg0: LivingEntity, arg1: JavaMap<j_org_bukkit_inventory.EquipmentSlot, j_org_bukkit_inventory.ItemStack>): void | null;
  sendEquipmentChange(arg0: LivingEntity, arg1: j_org_bukkit_inventory.EquipmentSlot, arg2: j_org_bukkit_inventory.ItemStack): void | null;
  sendExperienceChange(arg0: number): void;
  sendExperienceChange(arg0: number, arg1: number): void;
  sendHealthUpdate(): void;
  sendHealthUpdate(arg0: number, arg1: number, arg2: number): void;
  sendHurtAnimation(arg0: number): void;
  sendLinks(arg0: j_org_bukkit.ServerLinks): void;
  sendMap(arg0: j_org_bukkit_map.MapView): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.ChatMessageType">, ...arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  sendMessage(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendMultiBlockChange(arg0: JavaMap<j_io_papermc_paper_math.Position, j_org_bukkit_block_data.BlockData>): void;
  sendMultiBlockChange(arg0: JavaMap<j_io_papermc_paper_math.Position, j_org_bukkit_block_data.BlockData>, arg1: boolean): void;
  sendOpLevel(arg0: number): void;
  sendPotionEffectChange(arg0: LivingEntity, arg1: j_org_bukkit_potion.PotionEffect): void;
  sendPotionEffectChangeRemove(arg0: LivingEntity, arg1: j_org_bukkit_potion.PotionEffectType): void;
  sendRawMessage(arg0: string): void;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: JavaList<j_net_kyori_adventure_text.Component>): void | null;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: JavaList<j_net_kyori_adventure_text.Component>, arg2: j_org_bukkit.DyeColor): void | null;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: JavaList<j_net_kyori_adventure_text.Component>, arg2: j_org_bukkit.DyeColor, arg3: boolean): void | null;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: JavaList<j_net_kyori_adventure_text.Component>, arg2: boolean): void | null;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: Array<string>): void | null;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: Array<string>, arg2: j_org_bukkit.DyeColor): void | null;
  /** @throws java.lang.IllegalArgumentException */
  sendSignChange(arg0: j_org_bukkit.Location, arg1: Array<string>, arg2: j_org_bukkit.DyeColor, arg3: boolean): void | null;
  sendTitle(arg0: j_com_destroystokyo_paper.Title): void;
  sendTitle(arg0: string, arg1: string): void | null;
  sendTitle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void | null;
  setAffectsSpawning(arg0: boolean): void;
  setAllowFlight(arg0: boolean): void;
  setBedSpawnLocation(arg0: j_org_bukkit.Location): void | null;
  setBedSpawnLocation(arg0: j_org_bukkit.Location, arg1: boolean): void | null;
  setCompassTarget(arg0: j_org_bukkit.Location): void;
  setCustomChatCompletions(arg0: JavaCollection<string>): void;
  setDeathScreenScore(arg0: number): void;
  setDisplayName(arg0: string): void | null;
  setExp(arg0: number): void;
  setExpCooldown(arg0: number): void;
  setExperienceLevelAndProgress(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setFlySpeed(arg0: number): void;
  setFlying(arg0: boolean): void;
  setFlyingFallDamage(arg0: j_net_kyori_adventure_util.TriState): void;
  setHasSeenWinScreen(arg0: boolean): void;
  /** @throws java.lang.IllegalArgumentException */
  setHealthScale(arg0: number): void;
  setHealthScaled(arg0: boolean): void;
  setLevel(arg0: number): void;
  setNoTickViewDistance(arg0: number): void;
  setPlayerListFooter(arg0: string): void | null;
  setPlayerListHeader(arg0: string): void | null;
  setPlayerListHeaderFooter(arg0: string, arg1: string): void | null;
  setPlayerListHeaderFooter(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void | null;
  setPlayerListHeaderFooter(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void | null;
  setPlayerListName(arg0: string): void | null;
  setPlayerListOrder(arg0: number): void;
  setPlayerProfile(arg0: j_com_destroystokyo_paper_profile.PlayerProfile): void;
  setPlayerTime(arg0: bigint, arg1: boolean): void;
  setPlayerWeather(arg0: j_org_bukkit.WeatherType): void;
  setResourcePack(arg0: string): void;
  setResourcePack(arg0: string, arg1: string): void;
  setResourcePack(arg0: string, arg1: string, arg2: boolean): void;
  setResourcePack(arg0: string, arg1: string, arg2: boolean, arg3: j_net_kyori_adventure_text.Component): void | null;
  setResourcePack(arg0: string, arg1: Array<number>): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: string): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: string, arg3: boolean): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: j_net_kyori_adventure_text.Component): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: j_net_kyori_adventure_text.Component, arg3: boolean): void | null;
  setResourcePack(arg0: string, arg1: Array<number>, arg2: boolean): void | null;
  setResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: string, arg3: j_net_kyori_adventure_text.Component, arg4: boolean): void | null;
  setResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: Array<number>, arg3: string, arg4: boolean): void | null;
  setResourcePack(arg0: JavaOpaque<"java.util.UUID">, arg1: string, arg2: Array<number>, arg3: j_net_kyori_adventure_text.Component, arg4: boolean): void | null;
  setRespawnLocation(arg0: j_org_bukkit.Location): void | null;
  setRespawnLocation(arg0: j_org_bukkit.Location, arg1: boolean): void | null;
  setRotation(arg0: number, arg1: number): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  setScoreboard(arg0: j_org_bukkit_scoreboard.Scoreboard): void;
  setSendViewDistance(arg0: number): void;
  setSimulationDistance(arg0: number): void;
  setSleepingIgnored(arg0: boolean): void;
  setSneaking(arg0: boolean): void;
  setSpectatorTarget(arg0: Entity): void | null;
  setSprinting(arg0: boolean): void;
  setSubtitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  setSubtitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  setTexturePack(arg0: string): void;
  setTitleTimes(arg0: number, arg1: number, arg2: number): void;
  setTotalExperience(arg0: number): void;
  setViewDistance(arg0: number): void;
  /** @throws java.lang.IllegalArgumentException */
  setWalkSpeed(arg0: number): void;
  setWardenTimeSinceLastWarning(arg0: number): void;
  setWardenWarningCooldown(arg0: number): void;
  setWardenWarningLevel(arg0: number): void;
  setWorldBorder(arg0: j_org_bukkit.WorldBorder): void | null;
  showDemoScreen(): void;
  showElderGuardian(): void;
  showElderGuardian(arg0: boolean): void;
  showEntity(arg0: j_org_bukkit_plugin.Plugin, arg1: Entity): void;
  showPlayer(arg0: Player): void;
  showPlayer(arg0: j_org_bukkit_plugin.Plugin, arg1: Player): void;
  showTitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void | null;
  showTitle(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">, arg2: number, arg3: number, arg4: number): void | null;
  showTitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void | null;
  showTitle(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg2: number, arg3: number, arg4: number): void | null;
  showWinScreen(): void;
  spawnParticle(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
  spawnParticle(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
  spawnParticle(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T): void | null;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T, arg10: boolean): void | null;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: T): void | null;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: T): void | null;
  spawnParticle(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number): void;
  spawnParticle(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
  spawnParticle(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T): void | null;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: boolean): void | null;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: T): void | null;
  spawnParticle<T>(arg0: j_org_bukkit.Particle, arg1: j_org_bukkit.Location, arg2: number, arg3: T): void | null;
  spigot(): j_org_bukkit_command.CommandSender_Spigot;
  spigot(): Entity_Spigot;
  spigot(): Player_Spigot;
  stopAllSounds(): void;
  stopSound(arg0: string): void;
  stopSound(arg0: string, arg1: j_org_bukkit.SoundCategory): void | null;
  stopSound(arg0: j_org_bukkit.Sound_2): void;
  stopSound(arg0: j_org_bukkit.Sound_2, arg1: j_org_bukkit.SoundCategory): void | null;
  stopSound(arg0: j_org_bukkit.SoundCategory): void;
  storeCookie(arg0: j_org_bukkit.NamespacedKey, arg1: Array<number>): void;
  transfer(arg0: string, arg1: number): void;
  unlistPlayer(arg0: Player): boolean;
  updateCommands(): void;
  updateInventory(): void;
  updateTitle(arg0: j_com_destroystokyo_paper.Title): void;
}
export type Player = PlayerMembers & j_com_destroystokyo_paper_network.NetworkClient & j_net_kyori_adventure_bossbar.BossBarViewer & j_net_kyori_adventure_identity.Identified & j_org_bukkit.OfflinePlayer & j_org_bukkit_conversations.Conversable & HumanEntity & j_org_bukkit_plugin_messaging.PluginMessageRecipient;
export interface PlayerStatics {
}

/** JVM class org.bukkit.entity.Player$Spigot. */
export interface Player_SpigotMembers {
  readonly __javaSupertypes?: readonly [Entity_Spigot];
  getHiddenPlayers(): JavaSet<Player>;
  getPing(): number;
  getRawAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  respawn(): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.ChatMessageType">, arg1: JavaOpaque<"java.util.UUID">, arg2: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void | null;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.ChatMessageType">, arg1: JavaOpaque<"java.util.UUID">, ...arg2: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void | null;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.ChatMessageType">, arg1: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.ChatMessageType">, ...arg1: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
  sendMessage(arg0: JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">): void;
  sendMessage(...arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>): void;
}
export type Player_Spigot = Player_SpigotMembers & Entity_Spigot;
export interface Player_SpigotStatics {
  new(): Player_Spigot;
}

/** JVM interface org.bukkit.entity.PolarBear. */
export interface PolarBearMembers {
  readonly __javaSupertypes?: readonly [Animals];
  isStanding(): boolean;
  setStanding(arg0: boolean): void;
}
export type PolarBear = PolarBearMembers & Animals;
export interface PolarBearStatics {
}

/** Live JVM enum org.bukkit.entity.Pose; constants are host handles, not strings. */
export type Pose = JavaEnum<"org.bukkit.entity.Pose", "CROAKING" | "DIGGING" | "DYING" | "EMERGING" | "FALL_FLYING" | "INHALING" | "LONG_JUMPING" | "ROARING" | "SHOOTING" | "SITTING" | "SLEEPING" | "SLIDING" | "SNEAKING" | "SNIFFING" | "SPIN_ATTACK" | "STANDING" | "SWIMMING" | "USING_TONGUE"> & PoseMembers;
export interface PoseMembers {
}
export interface PoseStatics {
  readonly CROAKING: Pose;
  readonly DIGGING: Pose;
  readonly DYING: Pose;
  readonly EMERGING: Pose;
  readonly FALL_FLYING: Pose;
  readonly INHALING: Pose;
  readonly LONG_JUMPING: Pose;
  readonly ROARING: Pose;
  readonly SHOOTING: Pose;
  readonly SITTING: Pose;
  readonly SLEEPING: Pose;
  readonly SLIDING: Pose;
  readonly SNEAKING: Pose;
  readonly SNIFFING: Pose;
  readonly SPIN_ATTACK: Pose;
  readonly STANDING: Pose;
  readonly SWIMMING: Pose;
  readonly USING_TONGUE: Pose;
  valueOf(arg0: string): Pose;
  values(): Array<Pose>;
}

/** JVM interface org.bukkit.entity.Projectile. */
export interface ProjectileMembers {
  readonly __javaSupertypes?: readonly [Entity];
  canHitEntity(arg0: Entity): boolean;
  doesBounce(): boolean;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  getShooter(): j_org_bukkit_projectiles.ProjectileSource | null;
  hasBeenShot(): boolean;
  hasLeftShooter(): boolean;
  hitEntity(arg0: Entity): void;
  hitEntity(arg0: Entity, arg1: j_org_bukkit_util.Vector): void;
  setBounce(arg0: boolean): void;
  setHasBeenShot(arg0: boolean): void;
  setHasLeftShooter(arg0: boolean): void;
  setShooter(arg0: j_org_bukkit_projectiles.ProjectileSource | null): void | null;
}
export type Projectile = ProjectileMembers & Entity;
export interface ProjectileStatics {
}

/** JVM interface org.bukkit.entity.PufferFish. */
export interface PufferFishMembers {
  readonly __javaSupertypes?: readonly [Fish];
  getPuffState(): number;
  setPuffState(arg0: number): void;
}
export type PufferFish = PufferFishMembers & Fish;
export interface PufferFishStatics {
}

/** JVM interface org.bukkit.entity.Rabbit. */
export interface RabbitMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getMoreCarrotTicks(): number;
  getRabbitType(): Rabbit_Type;
  setMoreCarrotTicks(arg0: number): void;
  setRabbitType(arg0: Rabbit_Type): void;
}
export type Rabbit = RabbitMembers & Animals;
export interface RabbitStatics {
}

/** Live JVM enum org.bukkit.entity.Rabbit$Type; constants are host handles, not strings. */
export type Rabbit_Type = JavaEnum<"org.bukkit.entity.Rabbit$Type", "BLACK" | "BLACK_AND_WHITE" | "BROWN" | "GOLD" | "SALT_AND_PEPPER" | "THE_KILLER_BUNNY" | "WHITE"> & Rabbit_TypeMembers;
export interface Rabbit_TypeMembers {
}
export interface Rabbit_TypeStatics {
  readonly BLACK: Rabbit_Type;
  readonly BLACK_AND_WHITE: Rabbit_Type;
  readonly BROWN: Rabbit_Type;
  readonly GOLD: Rabbit_Type;
  readonly SALT_AND_PEPPER: Rabbit_Type;
  readonly THE_KILLER_BUNNY: Rabbit_Type;
  readonly WHITE: Rabbit_Type;
  valueOf(arg0: string): Rabbit_Type;
  values(): Array<Rabbit_Type>;
}

/** JVM interface org.bukkit.entity.Raider. */
export interface RaiderMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getCelebrationSound(): j_org_bukkit.Sound_2;
  getPatrolTarget(): j_org_bukkit_block.Block | null;
  getRaid(): j_org_bukkit.Raid | null;
  getTicksOutsideRaid(): number;
  getWave(): number;
  isCanJoinRaid(): boolean;
  isCelebrating(): boolean;
  isPatrolLeader(): boolean;
  setCanJoinRaid(arg0: boolean): void;
  setCelebrating(arg0: boolean): void;
  setPatrolLeader(arg0: boolean): void;
  setPatrolTarget(arg0: j_org_bukkit_block.Block | null): void | null;
  setRaid(arg0: j_org_bukkit.Raid | null): void | null;
  setTicksOutsideRaid(arg0: number): void;
  setWave(arg0: number): void;
}
export type Raider = RaiderMembers & Monster;
export interface RaiderStatics {
}

/** JVM interface org.bukkit.entity.Ravager. */
export interface RavagerMembers {
  readonly __javaSupertypes?: readonly [Raider];
  getAttackTicks(): number;
  getRoarTicks(): number;
  getStunnedTicks(): number;
  setAttackTicks(arg0: number): void;
  setRoarTicks(arg0: number): void;
  setStunnedTicks(arg0: number): void;
}
export type Ravager = RavagerMembers & Raider;
export interface RavagerStatics {
}

/** JVM interface org.bukkit.entity.Salmon. */
export interface SalmonMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.SchoolableFish];
  getVariant(): Salmon_Variant;
  setVariant(arg0: Salmon_Variant): void;
}
export type Salmon = SalmonMembers & j_io_papermc_paper_entity.SchoolableFish;
export interface SalmonStatics {
}

/** Live JVM enum org.bukkit.entity.Salmon$Variant; constants are host handles, not strings. */
export type Salmon_Variant = JavaEnum<"org.bukkit.entity.Salmon$Variant", "LARGE" | "MEDIUM" | "SMALL"> & Salmon_VariantMembers;
export interface Salmon_VariantMembers {
}
export interface Salmon_VariantStatics {
  readonly LARGE: Salmon_Variant;
  readonly MEDIUM: Salmon_Variant;
  readonly SMALL: Salmon_Variant;
  valueOf(arg0: string): Salmon_Variant;
  values(): Array<Salmon_Variant>;
}

/** JVM interface org.bukkit.entity.Shearable. */
export interface Shearable_2Members {
  isSheared(): boolean;
  setSheared(arg0: boolean): void;
}
export type Shearable_2 = Shearable_2Members;
export interface Shearable_2Statics {
}

/** JVM interface org.bukkit.entity.Sheep. */
export interface SheepMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.Shearable, Animals, Shearable_2, j_org_bukkit_material.Colorable];
  isSheared(): boolean;
  setSheared(arg0: boolean): void;
}
export type Sheep = SheepMembers & j_io_papermc_paper_entity.Shearable & Animals & Shearable_2 & j_org_bukkit_material.Colorable;
export interface SheepStatics {
}

/** JVM interface org.bukkit.entity.Shulker. */
export interface ShulkerMembers {
  readonly __javaSupertypes?: readonly [Enemy, Golem, j_org_bukkit_material.Colorable];
  getAttachedFace(): j_org_bukkit_block.BlockFace;
  getPeek(): number;
  setAttachedFace(arg0: j_org_bukkit_block.BlockFace): void;
  setPeek(arg0: number): void;
}
export type Shulker = ShulkerMembers & Enemy & Golem & j_org_bukkit_material.Colorable;
export interface ShulkerStatics {
}

/** JVM interface org.bukkit.entity.ShulkerBullet. */
export interface ShulkerBulletMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  getCurrentMovementDirection(): j_org_bukkit_block.BlockFace | null;
  getFlightSteps(): number;
  getTarget(): Entity | null;
  getTargetDelta(): j_org_bukkit_util.Vector;
  setCurrentMovementDirection(arg0: j_org_bukkit_block.BlockFace | null): void | null;
  setFlightSteps(arg0: number): void;
  setTarget(arg0: Entity | null): void | null;
  setTargetDelta(arg0: j_org_bukkit_util.Vector): void;
}
export type ShulkerBullet = ShulkerBulletMembers & Projectile;
export interface ShulkerBulletStatics {
}

/** JVM interface org.bukkit.entity.Silverfish. */
export interface SilverfishMembers {
  readonly __javaSupertypes?: readonly [Monster];
}
export type Silverfish = SilverfishMembers & Monster;
export interface SilverfishStatics {
}

/** JVM interface org.bukkit.entity.Sittable. */
export interface SittableMembers {
  readonly __javaSupertypes?: readonly [Entity];
  isSitting(): boolean;
  setSitting(arg0: boolean): void;
}
export type Sittable = SittableMembers & Entity;
export interface SittableStatics {
}

/** JVM interface org.bukkit.entity.SizedFireball. */
export interface SizedFireballMembers {
  readonly __javaSupertypes?: readonly [Fireball];
  getDisplayItem(): j_org_bukkit_inventory.ItemStack;
  setDisplayItem(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type SizedFireball = SizedFireballMembers & Fireball;
export interface SizedFireballStatics {
}

/** JVM interface org.bukkit.entity.Skeleton. */
export interface SkeletonMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton];
  getConversionTime(): number;
  inPowderedSnowTime(): number;
  isConverting(): boolean;
  setConversionTime(arg0: number): void;
}
export type Skeleton = SkeletonMembers & AbstractSkeleton;
export interface SkeletonStatics {
}

/** Live JVM enum org.bukkit.entity.Skeleton$SkeletonType; constants are host handles, not strings. */
export type Skeleton_SkeletonType = JavaEnum<"org.bukkit.entity.Skeleton$SkeletonType", "BOGGED" | "NORMAL" | "STRAY" | "WITHER"> & Skeleton_SkeletonTypeMembers;
export interface Skeleton_SkeletonTypeMembers {
}
export interface Skeleton_SkeletonTypeStatics {
  readonly BOGGED: Skeleton_SkeletonType;
  readonly NORMAL: Skeleton_SkeletonType;
  readonly STRAY: Skeleton_SkeletonType;
  readonly WITHER: Skeleton_SkeletonType;
  valueOf(arg0: string): Skeleton_SkeletonType;
  values(): Array<Skeleton_SkeletonType>;
}

/** JVM interface org.bukkit.entity.SkeletonHorse. */
export interface SkeletonHorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
  getTrapTime(): number;
  isTrap(): boolean;
  isTrapped(): boolean;
  setTrap(arg0: boolean): void;
  setTrapTime(arg0: number): void;
  setTrapped(arg0: boolean): void;
}
export type SkeletonHorse = SkeletonHorseMembers & AbstractHorse;
export interface SkeletonHorseStatics {
}

/** JVM interface org.bukkit.entity.Slime. */
export interface SlimeMembers {
  readonly __javaSupertypes?: readonly [Enemy, Mob];
  canWander(): boolean;
  getSize(): number;
  setSize(arg0: number): void;
  setWander(arg0: boolean): void;
}
export type Slime = SlimeMembers & Enemy & Mob;
export interface SlimeStatics {
}

/** JVM interface org.bukkit.entity.SmallFireball. */
export interface SmallFireballMembers {
  readonly __javaSupertypes?: readonly [SizedFireball];
}
export type SmallFireball = SmallFireballMembers & SizedFireball;
export interface SmallFireballStatics {
}

/** JVM interface org.bukkit.entity.Sniffer. */
export interface SnifferMembers {
  readonly __javaSupertypes?: readonly [Animals];
  addExploredLocation(arg0: j_org_bukkit.Location): void;
  canDig(): boolean;
  findPossibleDigLocation(): j_org_bukkit.Location | null;
  getExploredLocations(): JavaCollection<j_org_bukkit.Location>;
  getState(): Sniffer_State;
  removeExploredLocation(arg0: j_org_bukkit.Location): void;
  setState(arg0: Sniffer_State): void;
}
export type Sniffer = SnifferMembers & Animals;
export interface SnifferStatics {
}

/** Live JVM enum org.bukkit.entity.Sniffer$State; constants are host handles, not strings. */
export type Sniffer_State = JavaEnum<"org.bukkit.entity.Sniffer$State", "DIGGING" | "FEELING_HAPPY" | "IDLING" | "RISING" | "SCENTING" | "SEARCHING" | "SNIFFING"> & Sniffer_StateMembers;
export interface Sniffer_StateMembers {
}
export interface Sniffer_StateStatics {
  readonly DIGGING: Sniffer_State;
  readonly FEELING_HAPPY: Sniffer_State;
  readonly IDLING: Sniffer_State;
  readonly RISING: Sniffer_State;
  readonly SCENTING: Sniffer_State;
  readonly SEARCHING: Sniffer_State;
  readonly SNIFFING: Sniffer_State;
  valueOf(arg0: string): Sniffer_State;
  values(): Array<Sniffer_State>;
}

/** JVM interface org.bukkit.entity.Snowball. */
export interface SnowballMembers {
  readonly __javaSupertypes?: readonly [ThrowableProjectile];
}
export type Snowball = SnowballMembers & ThrowableProjectile;
export interface SnowballStatics {
}

/** JVM interface org.bukkit.entity.Snowman. */
export interface SnowmanMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, j_io_papermc_paper_entity.Shearable, Golem];
  isDerp(): boolean;
  setDerp(arg0: boolean): void;
}
export type Snowman = SnowmanMembers & j_com_destroystokyo_paper_entity.RangedEntity & j_io_papermc_paper_entity.Shearable & Golem;
export interface SnowmanStatics {
}

/** Live JVM enum org.bukkit.entity.SpawnCategory; constants are host handles, not strings. */
export type SpawnCategory = JavaEnum<"org.bukkit.entity.SpawnCategory", "AMBIENT" | "ANIMAL" | "AXOLOTL" | "MISC" | "MONSTER" | "WATER_AMBIENT" | "WATER_ANIMAL" | "WATER_UNDERGROUND_CREATURE"> & SpawnCategoryMembers;
export interface SpawnCategoryMembers {
}
export interface SpawnCategoryStatics {
  readonly AMBIENT: SpawnCategory;
  readonly ANIMAL: SpawnCategory;
  readonly AXOLOTL: SpawnCategory;
  readonly MISC: SpawnCategory;
  readonly MONSTER: SpawnCategory;
  readonly WATER_AMBIENT: SpawnCategory;
  readonly WATER_ANIMAL: SpawnCategory;
  readonly WATER_UNDERGROUND_CREATURE: SpawnCategory;
  valueOf(arg0: string): SpawnCategory;
  values(): Array<SpawnCategory>;
}

/** JVM interface org.bukkit.entity.SpectralArrow. */
export interface SpectralArrowMembers {
  readonly __javaSupertypes?: readonly [AbstractArrow];
  getGlowingTicks(): number;
  setGlowingTicks(arg0: number): void;
}
export type SpectralArrow = SpectralArrowMembers & AbstractArrow;
export interface SpectralArrowStatics {
}

/** JVM interface org.bukkit.entity.Spellcaster. */
export interface SpellcasterMembers {
  readonly __javaSupertypes?: readonly [Illager];
  getSpell(): Spellcaster_Spell;
  setSpell(arg0: Spellcaster_Spell): void;
}
export type Spellcaster = SpellcasterMembers & Illager;
export interface SpellcasterStatics {
}

/** Live JVM enum org.bukkit.entity.Spellcaster$Spell; constants are host handles, not strings. */
export type Spellcaster_Spell = JavaEnum<"org.bukkit.entity.Spellcaster$Spell", "BLINDNESS" | "DISAPPEAR" | "FANGS" | "NONE" | "SUMMON_VEX" | "WOLOLO"> & Spellcaster_SpellMembers;
export interface Spellcaster_SpellMembers {
}
export interface Spellcaster_SpellStatics {
  readonly BLINDNESS: Spellcaster_Spell;
  readonly DISAPPEAR: Spellcaster_Spell;
  readonly FANGS: Spellcaster_Spell;
  readonly NONE: Spellcaster_Spell;
  readonly SUMMON_VEX: Spellcaster_Spell;
  readonly WOLOLO: Spellcaster_Spell;
  valueOf(arg0: string): Spellcaster_Spell;
  values(): Array<Spellcaster_Spell>;
}

/** JVM interface org.bukkit.entity.Spider. */
export interface SpiderMembers {
  readonly __javaSupertypes?: readonly [Monster];
}
export type Spider = SpiderMembers & Monster;
export interface SpiderStatics {
}

/** JVM interface org.bukkit.entity.SplashPotion. */
export interface SplashPotionMembers {
  readonly __javaSupertypes?: readonly [ThrownPotion];
}
export type SplashPotion = SplashPotionMembers & ThrownPotion;
export interface SplashPotionStatics {
}

/** JVM interface org.bukkit.entity.Squid. */
export interface SquidMembers {
  readonly __javaSupertypes?: readonly [Ageable_2, WaterMob];
}
export type Squid = SquidMembers & Ageable_2 & WaterMob;
export interface SquidStatics {
}

/** JVM interface org.bukkit.entity.Steerable. */
export interface SteerableMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getBoostTicks(): number;
  getCurrentBoostTicks(): number;
  getSteerMaterial(): j_org_bukkit.Material;
  hasSaddle(): boolean;
  setBoostTicks(arg0: number): void;
  setCurrentBoostTicks(arg0: number): void;
  setSaddle(arg0: boolean): void;
}
export type Steerable = SteerableMembers & Animals;
export interface SteerableStatics {
}

/** JVM interface org.bukkit.entity.Stray. */
export interface StrayMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton];
}
export type Stray = StrayMembers & AbstractSkeleton;
export interface StrayStatics {
}

/** JVM interface org.bukkit.entity.Strider. */
export interface StriderMembers {
  readonly __javaSupertypes?: readonly [Steerable, Vehicle];
  isShivering(): boolean;
  setShivering(arg0: boolean): void;
}
export type Strider = StriderMembers & Steerable & Vehicle;
export interface StriderStatics {
}

/** JVM interface org.bukkit.entity.Tadpole. */
export interface TadpoleMembers {
  readonly __javaSupertypes?: readonly [Fish];
  getAge(): number;
  getAgeLock(): boolean;
  setAge(arg0: number): void;
  setAgeLock(arg0: boolean): void;
}
export type Tadpole = TadpoleMembers & Fish;
export interface TadpoleStatics {
}

/** JVM interface org.bukkit.entity.Tameable. */
export interface TameableMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getOwner(): AnimalTamer | null;
  getOwnerUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  isTamed(): boolean;
  setOwner(arg0: AnimalTamer | null): void | null;
  setTamed(arg0: boolean): void;
}
export type Tameable = TameableMembers & Animals;
export interface TameableStatics {
}

/** JVM interface org.bukkit.entity.TextDisplay. */
export interface TextDisplayMembers {
  readonly __javaSupertypes?: readonly [Display];
  getAlignment(): TextDisplay_TextAlignment;
  getBackgroundColor(): j_org_bukkit.Color | null;
  getLineWidth(): number;
  getText(): string | null;
  getTextOpacity(): number;
  isDefaultBackground(): boolean;
  isSeeThrough(): boolean;
  isShadowed(): boolean;
  setAlignment(arg0: TextDisplay_TextAlignment): void;
  setBackgroundColor(arg0: j_org_bukkit.Color | null): void | null;
  setDefaultBackground(arg0: boolean): void;
  setLineWidth(arg0: number): void;
  setSeeThrough(arg0: boolean): void;
  setShadowed(arg0: boolean): void;
  setText(arg0: string | null): void | null;
  setTextOpacity(arg0: number): void;
  text(): j_net_kyori_adventure_text.Component;
  text(arg0: j_net_kyori_adventure_text.Component): void | null;
}
export type TextDisplay = TextDisplayMembers & Display;
export interface TextDisplayStatics {
}

/** Live JVM enum org.bukkit.entity.TextDisplay$TextAlignment; constants are host handles, not strings. */
export type TextDisplay_TextAlignment = JavaEnum<"org.bukkit.entity.TextDisplay$TextAlignment", "CENTER" | "LEFT" | "RIGHT"> & TextDisplay_TextAlignmentMembers;
export interface TextDisplay_TextAlignmentMembers {
}
export interface TextDisplay_TextAlignmentStatics {
  readonly CENTER: TextDisplay_TextAlignment;
  readonly LEFT: TextDisplay_TextAlignment;
  readonly RIGHT: TextDisplay_TextAlignment;
  valueOf(arg0: string): TextDisplay_TextAlignment;
  values(): Array<TextDisplay_TextAlignment>;
}

/** JVM interface org.bukkit.entity.ThrowableProjectile. */
export interface ThrowableProjectileMembers {
  readonly __javaSupertypes?: readonly [Projectile];
  getItem(): j_org_bukkit_inventory.ItemStack;
  setItem(arg0: j_org_bukkit_inventory.ItemStack): void;
}
export type ThrowableProjectile = ThrowableProjectileMembers & Projectile;
export interface ThrowableProjectileStatics {
}

/** JVM interface org.bukkit.entity.ThrownExpBottle. */
export interface ThrownExpBottleMembers {
  readonly __javaSupertypes?: readonly [ThrowableProjectile];
}
export type ThrownExpBottle = ThrownExpBottleMembers & ThrowableProjectile;
export interface ThrownExpBottleStatics {
}

/** JVM interface org.bukkit.entity.ThrownPotion. */
export interface ThrownPotionMembers {
  readonly __javaSupertypes?: readonly [ThrowableProjectile];
  getEffects(): JavaCollection<j_org_bukkit_potion.PotionEffect>;
  getItem(): j_org_bukkit_inventory.ItemStack;
  getPotionMeta(): j_org_bukkit_inventory_meta.PotionMeta;
  setItem(arg0: j_org_bukkit_inventory.ItemStack): void;
  setPotionMeta(arg0: j_org_bukkit_inventory_meta.PotionMeta): void;
  splash(): void;
}
export type ThrownPotion = ThrownPotionMembers & ThrowableProjectile;
export interface ThrownPotionStatics {
}

/** JVM interface org.bukkit.entity.TippedArrow. */
export interface TippedArrowMembers {
  readonly __javaSupertypes?: readonly [Arrow];
}
export type TippedArrow = TippedArrowMembers & Arrow;
export interface TippedArrowStatics {
}

/** JVM interface org.bukkit.entity.TNTPrimed. */
export interface TNTPrimedMembers {
  readonly __javaSupertypes?: readonly [Explosive];
  getBlockData(): j_org_bukkit_block_data.BlockData;
  getFuseTicks(): number;
  getSource(): Entity | null;
  getSourceLoc(): j_org_bukkit.Location;
  setBlockData(arg0: j_org_bukkit_block_data.BlockData): void;
  setFuseTicks(arg0: number): void;
  setSource(arg0: Entity | null): void | null;
}
export type TNTPrimed = TNTPrimedMembers & Explosive;
export interface TNTPrimedStatics {
}

/** JVM interface org.bukkit.entity.TraderLlama. */
export interface TraderLlamaMembers {
  readonly __javaSupertypes?: readonly [Llama];
}
export type TraderLlama = TraderLlamaMembers & Llama;
export interface TraderLlamaStatics {
}

/** JVM interface org.bukkit.entity.Trident. */
export interface TridentMembers {
  readonly __javaSupertypes?: readonly [AbstractArrow, ThrowableProjectile];
  getDamage(): number;
  getLoyaltyLevel(): number;
  hasDealtDamage(): boolean;
  hasGlint(): boolean;
  setDamage(arg0: number): void;
  setGlint(arg0: boolean): void;
  setHasDealtDamage(arg0: boolean): void;
  setLoyaltyLevel(arg0: number): void;
}
export type Trident = TridentMembers & AbstractArrow & ThrowableProjectile;
export interface TridentStatics {
}

/** JVM interface org.bukkit.entity.TropicalFish. */
export interface TropicalFishMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.SchoolableFish];
  getBodyColor(): j_org_bukkit.DyeColor;
  getPattern(): TropicalFish_Pattern;
  getPatternColor(): j_org_bukkit.DyeColor;
  setBodyColor(arg0: j_org_bukkit.DyeColor): void;
  setPattern(arg0: TropicalFish_Pattern): void;
  setPatternColor(arg0: j_org_bukkit.DyeColor): void;
}
export type TropicalFish = TropicalFishMembers & j_io_papermc_paper_entity.SchoolableFish;
export interface TropicalFishStatics {
}

/** Live JVM enum org.bukkit.entity.TropicalFish$Pattern; constants are host handles, not strings. */
export type TropicalFish_Pattern = JavaEnum<"org.bukkit.entity.TropicalFish$Pattern", "BETTY" | "BLOCKFISH" | "BRINELY" | "CLAYFISH" | "DASHER" | "FLOPPER" | "GLITTER" | "KOB" | "SNOOPER" | "SPOTTY" | "STRIPEY" | "SUNSTREAK"> & TropicalFish_PatternMembers;
export interface TropicalFish_PatternMembers {
}
export interface TropicalFish_PatternStatics {
  readonly BETTY: TropicalFish_Pattern;
  readonly BLOCKFISH: TropicalFish_Pattern;
  readonly BRINELY: TropicalFish_Pattern;
  readonly CLAYFISH: TropicalFish_Pattern;
  readonly DASHER: TropicalFish_Pattern;
  readonly FLOPPER: TropicalFish_Pattern;
  readonly GLITTER: TropicalFish_Pattern;
  readonly KOB: TropicalFish_Pattern;
  readonly SNOOPER: TropicalFish_Pattern;
  readonly SPOTTY: TropicalFish_Pattern;
  readonly STRIPEY: TropicalFish_Pattern;
  readonly SUNSTREAK: TropicalFish_Pattern;
  valueOf(arg0: string): TropicalFish_Pattern;
  values(): Array<TropicalFish_Pattern>;
}

/** JVM interface org.bukkit.entity.Turtle. */
export interface TurtleMembers {
  readonly __javaSupertypes?: readonly [Animals];
  getHome(): j_org_bukkit.Location;
  hasEgg(): boolean;
  isDigging(): boolean;
  isGoingHome(): boolean;
  isLayingEgg(): boolean;
  setHasEgg(arg0: boolean): void;
  setHome(arg0: j_org_bukkit.Location): void;
}
export type Turtle = TurtleMembers & Animals;
export interface TurtleStatics {
}

/** JVM interface org.bukkit.entity.Vehicle. */
export interface VehicleMembers {
  readonly __javaSupertypes?: readonly [Entity];
  getVelocity(): j_org_bukkit_util.Vector;
  setVelocity(arg0: j_org_bukkit_util.Vector): void;
}
export type Vehicle = VehicleMembers & Entity;
export interface VehicleStatics {
}

/** JVM interface org.bukkit.entity.Vex. */
export interface VexMembers {
  readonly __javaSupertypes?: readonly [Monster];
  getBound(): j_org_bukkit.Location | null;
  getLifeTicks(): number;
  getLimitedLifetimeTicks(): number;
  getSummoner(): Mob | null;
  hasLimitedLife(): boolean;
  hasLimitedLifetime(): boolean;
  isCharging(): boolean;
  setBound(arg0: j_org_bukkit.Location | null): void | null;
  setCharging(arg0: boolean): void;
  setLifeTicks(arg0: number): void;
  setLimitedLifetime(arg0: boolean): void;
  setLimitedLifetimeTicks(arg0: number): void;
  setSummoner(arg0: Mob | null): void | null;
}
export type Vex = VexMembers & Monster;
export interface VexStatics {
}

/** JVM interface org.bukkit.entity.Villager. */
export interface VillagerMembers {
  readonly __javaSupertypes?: readonly [AbstractVillager];
  addTrades(arg0: number): boolean;
  clearReputations(): void;
  getProfession(): Villager_Profession;
  getReputation(arg0: JavaOpaque<"java.util.UUID">): j_com_destroystokyo_paper_entity_villager.Reputation;
  getReputations(): JavaMap<JavaOpaque<"java.util.UUID">, j_com_destroystokyo_paper_entity_villager.Reputation>;
  getRestocksToday(): number;
  getVillagerExperience(): number;
  getVillagerLevel(): number;
  getVillagerType(): Villager_Type;
  increaseLevel(arg0: number): boolean;
  restock(): void;
  setProfession(arg0: Villager_Profession): void;
  setReputation(arg0: JavaOpaque<"java.util.UUID">, arg1: j_com_destroystokyo_paper_entity_villager.Reputation): void;
  setReputations(arg0: JavaMap<JavaOpaque<"java.util.UUID">, j_com_destroystokyo_paper_entity_villager.Reputation>): void;
  setRestocksToday(arg0: number): void;
  setVillagerExperience(arg0: number): void;
  setVillagerLevel(arg0: number): void;
  setVillagerType(arg0: Villager_Type): void;
  shakeHead(): void;
  sleep(arg0: j_org_bukkit.Location): boolean;
  updateDemand(): void;
  wakeup(): void;
  zombify(): ZombieVillager | null;
}
export type Villager = VillagerMembers & AbstractVillager;
export interface VillagerStatics {
}

/** JVM interface org.bukkit.entity.Villager$Profession. */
export interface Villager_ProfessionMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<Villager_Profession>, j_org_bukkit.Keyed, j_net_kyori_adventure_translation.Translatable];
  compareTo(arg0: object): number;
  compareTo(arg0: Villager_Profession): number;
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
  translationKey(): string;
}
export type Villager_Profession = Villager_ProfessionMembers & j_org_bukkit.Keyed & j_net_kyori_adventure_translation.Translatable;
export interface Villager_ProfessionStatics {
  readonly ARMORER: Villager_Profession;
  readonly BUTCHER: Villager_Profession;
  readonly CARTOGRAPHER: Villager_Profession;
  readonly CLERIC: Villager_Profession;
  readonly FARMER: Villager_Profession;
  readonly FISHERMAN: Villager_Profession;
  readonly FLETCHER: Villager_Profession;
  readonly LEATHERWORKER: Villager_Profession;
  readonly LIBRARIAN: Villager_Profession;
  readonly MASON: Villager_Profession;
  readonly NITWIT: Villager_Profession;
  readonly NONE: Villager_Profession;
  readonly SHEPHERD: Villager_Profession;
  readonly TOOLSMITH: Villager_Profession;
  readonly WEAPONSMITH: Villager_Profession;
  valueOf(arg0: string): Villager_Profession;
  values(): Array<Villager_Profession>;
}

/** JVM interface org.bukkit.entity.Villager$Type. */
export interface Villager_TypeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<Villager_Type>, j_org_bukkit.Keyed];
  compareTo(arg0: object): number;
  compareTo(arg0: Villager_Type): number;
  getKey(): j_org_bukkit.NamespacedKey;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
}
export type Villager_Type = Villager_TypeMembers & j_org_bukkit.Keyed;
export interface Villager_TypeStatics {
  readonly DESERT: Villager_Type;
  readonly JUNGLE: Villager_Type;
  readonly PLAINS: Villager_Type;
  readonly SAVANNA: Villager_Type;
  readonly SNOW: Villager_Type;
  readonly SWAMP: Villager_Type;
  readonly TAIGA: Villager_Type;
  valueOf(arg0: string): Villager_Type;
  values(): Array<Villager_Type>;
}

/** JVM interface org.bukkit.entity.Vindicator. */
export interface VindicatorMembers {
  readonly __javaSupertypes?: readonly [Illager];
  isJohnny(): boolean;
  setJohnny(arg0: boolean): void;
}
export type Vindicator = VindicatorMembers & Illager;
export interface VindicatorStatics {
}

/** JVM interface org.bukkit.entity.WanderingTrader. */
export interface WanderingTraderMembers {
  readonly __javaSupertypes?: readonly [AbstractVillager];
  canDrinkMilk(): boolean;
  canDrinkPotion(): boolean;
  getDespawnDelay(): number;
  getWanderingTowards(): j_org_bukkit.Location | null;
  setCanDrinkMilk(arg0: boolean): void;
  setCanDrinkPotion(arg0: boolean): void;
  setDespawnDelay(arg0: number): void;
  setWanderingTowards(arg0: j_org_bukkit.Location | null): void | null;
}
export type WanderingTrader = WanderingTraderMembers & AbstractVillager;
export interface WanderingTraderStatics {
}

/** JVM interface org.bukkit.entity.Warden. */
export interface WardenMembers {
  readonly __javaSupertypes?: readonly [Monster];
  clearAnger(arg0: Entity): void;
  getAnger(): number;
  getAnger(arg0: Entity): number;
  getAngerLevel(): Warden_AngerLevel;
  getEntityAngryAt(): LivingEntity | null;
  getHighestAnger(): number;
  increaseAnger(arg0: Entity, arg1: number): void;
  setAnger(arg0: Entity, arg1: number): void;
  setDisturbanceLocation(arg0: j_org_bukkit.Location): void;
}
export type Warden = WardenMembers & Monster;
export interface WardenStatics {
}

/** Live JVM enum org.bukkit.entity.Warden$AngerLevel; constants are host handles, not strings. */
export type Warden_AngerLevel = JavaEnum<"org.bukkit.entity.Warden$AngerLevel", "AGITATED" | "ANGRY" | "CALM"> & Warden_AngerLevelMembers;
export interface Warden_AngerLevelMembers {
}
export interface Warden_AngerLevelStatics {
  readonly AGITATED: Warden_AngerLevel;
  readonly ANGRY: Warden_AngerLevel;
  readonly CALM: Warden_AngerLevel;
  valueOf(arg0: string): Warden_AngerLevel;
  values(): Array<Warden_AngerLevel>;
}

/** JVM interface org.bukkit.entity.WaterMob. */
export interface WaterMobMembers {
  readonly __javaSupertypes?: readonly [Creature];
}
export type WaterMob = WaterMobMembers & Creature;
export interface WaterMobStatics {
}

/** JVM interface org.bukkit.entity.WindCharge. */
export interface WindChargeMembers {
  readonly __javaSupertypes?: readonly [AbstractWindCharge];
}
export type WindCharge = WindChargeMembers & AbstractWindCharge;
export interface WindChargeStatics {
}

/** JVM interface org.bukkit.entity.Witch. */
export interface WitchMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, Raider];
  getDrinkingPotion(): j_org_bukkit_inventory.ItemStack;
  getPotionUseTimeLeft(): number;
  isDrinkingPotion(): boolean;
  setDrinkingPotion(arg0: j_org_bukkit_inventory.ItemStack | null): void | null;
  setPotionUseTimeLeft(arg0: number): void;
}
export type Witch = WitchMembers & j_com_destroystokyo_paper_entity.RangedEntity & Raider;
export interface WitchStatics {
}

/** JVM interface org.bukkit.entity.Wither. */
export interface WitherMembers {
  readonly __javaSupertypes?: readonly [j_com_destroystokyo_paper_entity.RangedEntity, Boss, Monster];
  canTravelThroughPortals(): boolean;
  enterInvulnerabilityPhase(): void;
  getInvulnerabilityTicks(): number;
  getInvulnerableTicks(): number;
  getTarget(arg0: Wither_Head): LivingEntity | null;
  isCharged(): boolean;
  setCanTravelThroughPortals(arg0: boolean): void;
  setInvulnerabilityTicks(arg0: number): void;
  setInvulnerableTicks(arg0: number): void;
  setTarget(arg0: LivingEntity | null): void | null;
  setTarget(arg0: Wither_Head, arg1: LivingEntity | null): void | null;
}
export type Wither = WitherMembers & j_com_destroystokyo_paper_entity.RangedEntity & Boss & Monster;
export interface WitherStatics {
}

/** Live JVM enum org.bukkit.entity.Wither$Head; constants are host handles, not strings. */
export type Wither_Head = JavaEnum<"org.bukkit.entity.Wither$Head", "CENTER" | "LEFT" | "RIGHT"> & Wither_HeadMembers;
export interface Wither_HeadMembers {
}
export interface Wither_HeadStatics {
  readonly CENTER: Wither_Head;
  readonly LEFT: Wither_Head;
  readonly RIGHT: Wither_Head;
  valueOf(arg0: string): Wither_Head;
  values(): Array<Wither_Head>;
}

/** JVM interface org.bukkit.entity.WitherSkeleton. */
export interface WitherSkeletonMembers {
  readonly __javaSupertypes?: readonly [AbstractSkeleton];
}
export type WitherSkeleton = WitherSkeletonMembers & AbstractSkeleton;
export interface WitherSkeletonStatics {
}

/** JVM interface org.bukkit.entity.WitherSkull. */
export interface WitherSkullMembers {
  readonly __javaSupertypes?: readonly [Fireball];
  isCharged(): boolean;
  setCharged(arg0: boolean): void;
}
export type WitherSkull = WitherSkullMembers & Fireball;
export interface WitherSkullStatics {
}

/** JVM interface org.bukkit.entity.Wolf. */
export interface WolfMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_entity.CollarColorable, Sittable, Tameable];
  getCollarColor(): j_org_bukkit.DyeColor;
  getSoundVariant(): Wolf_SoundVariant;
  getTailAngle(): number;
  getVariant(): Wolf_Variant;
  isAngry(): boolean;
  isInterested(): boolean;
  isWet(): boolean;
  setAngry(arg0: boolean): void;
  setCollarColor(arg0: j_org_bukkit.DyeColor): void;
  setInterested(arg0: boolean): void;
  setSoundVariant(arg0: Wolf_SoundVariant): void;
  setVariant(arg0: Wolf_Variant): void;
}
export type Wolf = WolfMembers & j_io_papermc_paper_entity.CollarColorable & Sittable & Tameable;
export interface WolfStatics {
}

/** JVM interface org.bukkit.entity.Wolf$SoundVariant. */
export interface Wolf_SoundVariantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
}
export type Wolf_SoundVariant = Wolf_SoundVariantMembers & j_org_bukkit.Keyed;
export interface Wolf_SoundVariantStatics {
  readonly ANGRY: Wolf_SoundVariant;
  readonly BIG: Wolf_SoundVariant;
  readonly CLASSIC: Wolf_SoundVariant;
  readonly CUTE: Wolf_SoundVariant;
  readonly GRUMPY: Wolf_SoundVariant;
  readonly PUGLIN: Wolf_SoundVariant;
  readonly SAD: Wolf_SoundVariant;
}

/** JVM interface org.bukkit.entity.Wolf$Variant. */
export interface Wolf_VariantMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
}
export type Wolf_Variant = Wolf_VariantMembers & j_org_bukkit.Keyed;
export interface Wolf_VariantStatics {
  readonly ASHEN: Wolf_Variant;
  readonly BLACK: Wolf_Variant;
  readonly CHESTNUT: Wolf_Variant;
  readonly PALE: Wolf_Variant;
  readonly RUSTY: Wolf_Variant;
  readonly SNOWY: Wolf_Variant;
  readonly SPOTTED: Wolf_Variant;
  readonly STRIPED: Wolf_Variant;
  readonly WOODS: Wolf_Variant;
}

/** JVM interface org.bukkit.entity.Zoglin. */
export interface ZoglinMembers {
  readonly __javaSupertypes?: readonly [Ageable_2, Monster];
  isBaby(): boolean;
  setBaby(arg0: boolean): void;
}
export type Zoglin = ZoglinMembers & Ageable_2 & Monster;
export interface ZoglinStatics {
}

/** JVM interface org.bukkit.entity.Zombie. */
export interface ZombieMembers {
  readonly __javaSupertypes?: readonly [Ageable_2, Monster];
  canBreakDoors(): boolean;
  getConversionTime(): number;
  getVillagerProfession(): Villager_Profession | null;
  isArmsRaised(): boolean;
  isBaby(): boolean;
  isConverting(): boolean;
  isDrowning(): boolean;
  isVillager(): boolean;
  setArmsRaised(arg0: boolean): void;
  setBaby(arg0: boolean): void;
  setCanBreakDoors(arg0: boolean): void;
  setConversionTime(arg0: number): void;
  setShouldBurnInDay(arg0: boolean): void;
  setVillager(arg0: boolean): void;
  setVillagerProfession(arg0: Villager_Profession): void;
  shouldBurnInDay(): boolean;
  startDrowning(arg0: number): void;
  stopDrowning(): void;
  supportsBreakingDoors(): boolean;
}
export type Zombie = ZombieMembers & Ageable_2 & Monster;
export interface ZombieStatics {
}

/** JVM interface org.bukkit.entity.ZombieHorse. */
export interface ZombieHorseMembers {
  readonly __javaSupertypes?: readonly [AbstractHorse];
}
export type ZombieHorse = ZombieHorseMembers & AbstractHorse;
export interface ZombieHorseStatics {
}

/** JVM interface org.bukkit.entity.ZombieVillager. */
export interface ZombieVillagerMembers {
  readonly __javaSupertypes?: readonly [Zombie];
  getConversionPlayer(): j_org_bukkit.OfflinePlayer | null;
  getConversionTime(): number;
  getVillagerProfession(): Villager_Profession;
  getVillagerType(): Villager_Type;
  isConverting(): boolean;
  setConversionPlayer(arg0: j_org_bukkit.OfflinePlayer | null): void | null;
  setConversionTime(arg0: number): void;
  setConversionTime(arg0: number, arg1: boolean): void;
  setVillagerProfession(arg0: Villager_Profession): void;
  setVillagerType(arg0: Villager_Type): void;
}
export type ZombieVillager = ZombieVillagerMembers & Zombie;
export interface ZombieVillagerStatics {
}
