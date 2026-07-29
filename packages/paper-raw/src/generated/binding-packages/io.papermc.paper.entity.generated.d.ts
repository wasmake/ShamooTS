// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_sound from './net.kyori.adventure.sound.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.entity.Bucketable. */
export interface BucketableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Entity];
  getBaseBucketItem(): j_org_bukkit_inventory.ItemStack;
  getPickupSound(): j_org_bukkit.Sound_2;
  isFromBucket(): boolean;
  setFromBucket(arg0: boolean): void;
}
export type Bucketable = BucketableMembers & j_org_bukkit_entity.Entity;
export interface BucketableStatics {
}

/** JVM interface io.papermc.paper.entity.CollarColorable. */
export interface CollarColorableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.LivingEntity];
  getCollarColor(): j_org_bukkit.DyeColor;
  setCollarColor(arg0: j_org_bukkit.DyeColor): void;
}
export type CollarColorable = CollarColorableMembers & j_org_bukkit_entity.LivingEntity;
export interface CollarColorableStatics {
}

/** Live JVM enum io.papermc.paper.entity.EntitySerializationFlag; constants are host handles, not strings. */
export type EntitySerializationFlag = JavaEnum<"io.papermc.paper.entity.EntitySerializationFlag", "FORCE" | "MISC" | "PASSENGERS" | "PLAYER"> & EntitySerializationFlagMembers;
export interface EntitySerializationFlagMembers {
}
export interface EntitySerializationFlagStatics {
  readonly FORCE: EntitySerializationFlag;
  readonly MISC: EntitySerializationFlag;
  readonly PASSENGERS: EntitySerializationFlag;
  readonly PLAYER: EntitySerializationFlag;
  valueOf(arg0: string): EntitySerializationFlag;
  values(): Array<EntitySerializationFlag>;
}

/** JVM interface io.papermc.paper.entity.Frictional. */
export interface FrictionalMembers {
  getFrictionState(): j_net_kyori_adventure_util.TriState;
  setFrictionState(arg0: j_net_kyori_adventure_util.TriState): void;
}
export type Frictional = FrictionalMembers;
export interface FrictionalStatics {
}

/** JVM interface io.papermc.paper.entity.Leashable. */
export interface LeashableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Entity];
  /** @throws java.lang.IllegalStateException */
  getLeashHolder(): j_org_bukkit_entity.Entity;
  isLeashed(): boolean;
  setLeashHolder(arg0: j_org_bukkit_entity.Entity | null): boolean;
}
export type Leashable = LeashableMembers & j_org_bukkit_entity.Entity;
export interface LeashableStatics {
}

/** Live JVM enum io.papermc.paper.entity.LookAnchor; constants are host handles, not strings. */
export type LookAnchor = JavaEnum<"io.papermc.paper.entity.LookAnchor", "EYES" | "FEET"> & LookAnchorMembers;
export interface LookAnchorMembers {
}
export interface LookAnchorStatics {
  readonly EYES: LookAnchor;
  readonly FEET: LookAnchor;
  valueOf(arg0: string): LookAnchor;
  values(): Array<LookAnchor>;
}

/** JVM interface io.papermc.paper.entity.PlayerGiveResult. */
export interface PlayerGiveResultMembers {
  drops(): JavaCollection<j_org_bukkit_entity.Item>;
  leftovers(): JavaCollection<j_org_bukkit_inventory.ItemStack>;
}
export type PlayerGiveResult = PlayerGiveResultMembers;
export interface PlayerGiveResultStatics {
}

/** JVM interface io.papermc.paper.entity.SchoolableFish. */
export interface SchoolableFishMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Fish];
  getMaxSchoolSize(): number;
  getSchoolLeader(): SchoolableFish | null;
  getSchoolSize(): number;
  startFollowing(arg0: SchoolableFish): void;
  stopFollowing(): void;
}
export type SchoolableFish = SchoolableFishMembers & j_org_bukkit_entity.Fish;
export interface SchoolableFishStatics {
}

/** JVM interface io.papermc.paper.entity.Shearable. */
export interface ShearableMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_entity.Entity];
  readyToBeSheared(): boolean;
  shear(): void;
  shear(arg0: j_net_kyori_adventure_sound.Sound_Source): void;
}
export type Shearable = ShearableMembers & j_org_bukkit_entity.Entity;
export interface ShearableStatics {
}

/** JVM interface io.papermc.paper.entity.TeleportFlag. */
export interface TeleportFlagMembers {
}
export type TeleportFlag = TeleportFlagMembers;
export interface TeleportFlagStatics {
}

/** Live JVM enum io.papermc.paper.entity.TeleportFlag$EntityState; constants are host handles, not strings. */
export type TeleportFlag_EntityState = JavaEnum<"io.papermc.paper.entity.TeleportFlag$EntityState", "RETAIN_OPEN_INVENTORY" | "RETAIN_PASSENGERS" | "RETAIN_VEHICLE"> & TeleportFlag_EntityStateMembers;
export interface TeleportFlag_EntityStateMembers {
}
export interface TeleportFlag_EntityStateStatics {
  readonly RETAIN_OPEN_INVENTORY: TeleportFlag_EntityState;
  readonly RETAIN_PASSENGERS: TeleportFlag_EntityState;
  readonly RETAIN_VEHICLE: TeleportFlag_EntityState;
  valueOf(arg0: string): TeleportFlag_EntityState;
  values(): Array<TeleportFlag_EntityState>;
}

/** Live JVM enum io.papermc.paper.entity.TeleportFlag$Relative; constants are host handles, not strings. */
export type TeleportFlag_Relative = JavaEnum<"io.papermc.paper.entity.TeleportFlag$Relative", "VELOCITY_ROTATION" | "VELOCITY_X" | "VELOCITY_Y" | "VELOCITY_Z"> & TeleportFlag_RelativeMembers;
export interface TeleportFlag_RelativeMembers {
}
export interface TeleportFlag_RelativeStatics {
  readonly VELOCITY_ROTATION: TeleportFlag_Relative;
  readonly VELOCITY_X: TeleportFlag_Relative;
  readonly VELOCITY_Y: TeleportFlag_Relative;
  readonly VELOCITY_Z: TeleportFlag_Relative;
  readonly PITCH: TeleportFlag_Relative;
  readonly X: TeleportFlag_Relative;
  readonly Y: TeleportFlag_Relative;
  readonly YAW: TeleportFlag_Relative;
  readonly Z: TeleportFlag_Relative;
  valueOf(arg0: string): TeleportFlag_Relative;
  values(): Array<TeleportFlag_Relative>;
}
