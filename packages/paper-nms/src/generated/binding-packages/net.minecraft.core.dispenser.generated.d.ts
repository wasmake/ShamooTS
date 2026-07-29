// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_vehicle from './net.minecraft.world.entity.vehicle.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM record net.minecraft.core.dispenser.BlockSource. */
export interface BlockSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blockEntity(): j_net_minecraft_world_level_block_entity.DispenserBlockEntity;
  center(): j_net_minecraft_world_phys.Vec3;
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): j_net_minecraft_server_level.ServerLevel;
  pos(): j_net_minecraft_core.BlockPos;
  state(): j_net_minecraft_world_level_block_state.BlockState;
  toString(): string;
}
export type BlockSource = BlockSourceMembers & JavaOpaque<"java.lang.Record">;
export interface BlockSourceStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_entity.DispenserBlockEntity): BlockSource;
}

/** JVM class net.minecraft.core.dispenser.BoatDispenseItemBehavior. */
export interface BoatDispenseItemBehaviorMembers {
  readonly __javaSupertypes?: readonly [DefaultDispenseItemBehavior];
  execute(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type BoatDispenseItemBehavior = BoatDispenseItemBehaviorMembers & DefaultDispenseItemBehavior;
export interface BoatDispenseItemBehaviorStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_vehicle.AbstractBoat>): BoatDispenseItemBehavior;
}

/** JVM class net.minecraft.core.dispenser.DefaultDispenseItemBehavior. */
export interface DefaultDispenseItemBehaviorMembers {
  readonly __javaSupertypes?: readonly [DispenseItemBehavior];
  dispense(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type DefaultDispenseItemBehavior = DefaultDispenseItemBehaviorMembers & DispenseItemBehavior;
export interface DefaultDispenseItemBehaviorStatics {
  new(): DefaultDispenseItemBehavior;
  spawnItem(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_core.Position): void;
  spawnItem(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_core.Position, arg5: BlockSource): boolean;
}

/** JVM interface net.minecraft.core.dispenser.DispenseItemBehavior. */
export interface DispenseItemBehaviorMembers {
  dispense(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type DispenseItemBehavior = DispenseItemBehaviorMembers;
export interface DispenseItemBehaviorStatics {
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
  readonly NOOP: DispenseItemBehavior;
  bootStrap(): void;
}

/** JVM class net.minecraft.core.dispenser.EquipmentDispenseItemBehavior. */
export interface EquipmentDispenseItemBehaviorMembers {
  readonly __javaSupertypes?: readonly [DefaultDispenseItemBehavior];
}
export type EquipmentDispenseItemBehavior = EquipmentDispenseItemBehaviorMembers & DefaultDispenseItemBehavior;
export interface EquipmentDispenseItemBehaviorStatics {
  new(): EquipmentDispenseItemBehavior;
  readonly INSTANCE: EquipmentDispenseItemBehavior;
  dispenseEquipment(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  dispenseEquipment(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack, arg2: DispenseItemBehavior | null): boolean;
}

/** JVM class net.minecraft.core.dispenser.MinecartDispenseItemBehavior. */
export interface MinecartDispenseItemBehaviorMembers {
  readonly __javaSupertypes?: readonly [DefaultDispenseItemBehavior];
  execute(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type MinecartDispenseItemBehavior = MinecartDispenseItemBehaviorMembers & DefaultDispenseItemBehavior;
export interface MinecartDispenseItemBehaviorStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_vehicle.AbstractMinecart>): MinecartDispenseItemBehavior;
}

/** JVM abstract net.minecraft.core.dispenser.OptionalDispenseItemBehavior. */
export interface OptionalDispenseItemBehaviorMembers {
  readonly __javaSupertypes?: readonly [DefaultDispenseItemBehavior];
  isSuccess(): boolean;
  setSuccess(arg0: boolean): void;
}
export type OptionalDispenseItemBehavior = OptionalDispenseItemBehaviorMembers & DefaultDispenseItemBehavior;
export interface OptionalDispenseItemBehaviorStatics {
}

/** JVM class net.minecraft.core.dispenser.ProjectileDispenseBehavior. */
export interface ProjectileDispenseBehaviorMembers {
  readonly __javaSupertypes?: readonly [DefaultDispenseItemBehavior];
  execute(arg0: BlockSource, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type ProjectileDispenseBehavior = ProjectileDispenseBehaviorMembers & DefaultDispenseItemBehavior;
export interface ProjectileDispenseBehaviorStatics {
  new(arg0: j_net_minecraft_world_item.Item): ProjectileDispenseBehavior;
}

/** JVM class net.minecraft.core.dispenser.ShearsDispenseItemBehavior. */
export interface ShearsDispenseItemBehaviorMembers {
  readonly __javaSupertypes?: readonly [OptionalDispenseItemBehavior];
}
export type ShearsDispenseItemBehavior = ShearsDispenseItemBehaviorMembers & OptionalDispenseItemBehavior;
export interface ShearsDispenseItemBehaviorStatics {
  new(): ShearsDispenseItemBehavior;
}

/** JVM class net.minecraft.core.dispenser.ShulkerBoxDispenseBehavior. */
export interface ShulkerBoxDispenseBehaviorMembers {
  readonly __javaSupertypes?: readonly [OptionalDispenseItemBehavior];
}
export type ShulkerBoxDispenseBehavior = ShulkerBoxDispenseBehaviorMembers & OptionalDispenseItemBehavior;
export interface ShulkerBoxDispenseBehaviorStatics {
  new(): ShulkerBoxDispenseBehavior;
}
