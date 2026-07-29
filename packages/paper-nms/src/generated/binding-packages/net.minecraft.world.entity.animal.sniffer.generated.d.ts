// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.entity.animal.sniffer.Sniffer. */
export interface SnifferMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal];
  calculateDigPosition(): JavaOptional<j_net_minecraft_core.BlockPos>;
  canDig(): boolean;
  canMate(arg0: j_net_minecraft_world_entity_animal.Animal): boolean;
  canPlayDiggingSound(): boolean;
  canSniff(): boolean;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  readonly diggingAnimationState: j_net_minecraft_world_entity.AnimationState;
  readonly feelingHappyAnimationState: j_net_minecraft_world_entity.AnimationState;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Sniffer>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getExploredPositions(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.GlobalPos]>;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getMaxHeadYRot(): number;
  getQuadLeashOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getState(): Sniffer_State;
  isFood(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  isSearching(): boolean;
  isTempted(): boolean;
  jumpFromGround(): void;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  onDiggingComplete(arg0: boolean): Sniffer;
  onPathfindingDone(): void;
  onPathfindingStart(): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readonly risingAnimationState: j_net_minecraft_world_entity.AnimationState;
  readonly scentingAnimationState: j_net_minecraft_world_entity.AnimationState;
  setBaby(arg0: boolean): void;
  readonly sniffingAnimationState: j_net_minecraft_world_entity.AnimationState;
  spawnChildFromBreeding(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_animal.Animal): void;
  storeExploredPosition(arg0: j_net_minecraft_core.BlockPos): Sniffer;
  supportQuadLeash(): boolean;
  tick(): void;
  transitionTo(arg0: Sniffer_State): Sniffer;
}
export type Sniffer = SnifferMembers & j_net_minecraft_world_entity_animal.Animal;
export interface SnifferStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_animal.Animal>, arg1: j_net_minecraft_world_level.Level): Sniffer;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** Live JVM enum net.minecraft.world.entity.animal.sniffer.Sniffer$State; constants are host handles, not strings. */
export type Sniffer_State = JavaEnum<"net.minecraft.world.entity.animal.sniffer.Sniffer$State", "DIGGING" | "FEELING_HAPPY" | "IDLING" | "RISING" | "SCENTING" | "SEARCHING" | "SNIFFING"> & Sniffer_StateMembers;
export interface Sniffer_StateMembers {
  id(): number;
}
export interface Sniffer_StateStatics {
  readonly DIGGING: Sniffer_State;
  readonly FEELING_HAPPY: Sniffer_State;
  readonly IDLING: Sniffer_State;
  readonly RISING: Sniffer_State;
  readonly SCENTING: Sniffer_State;
  readonly SEARCHING: Sniffer_State;
  readonly SNIFFING: Sniffer_State;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [Sniffer_State]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Sniffer_State>;
  valueOf(arg0: string): Sniffer_State;
  values(): Array<Sniffer_State>;
}

/** JVM class net.minecraft.world.entity.animal.sniffer.SnifferAi. */
export interface SnifferAiMembers {
}
export type SnifferAi = SnifferAiMembers;
export interface SnifferAiStatics {
  new(): SnifferAi;
  getTemptations(): JavaPredicate<j_net_minecraft_world_item.ItemStack>;
}
