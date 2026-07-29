// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_entity_trialspawner from './net.minecraft.world.level.block.entity.trialspawner.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM class net.minecraft.world.level.block.entity.vault.VaultBlockEntity. */
export interface VaultBlockEntityMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block_entity.BlockEntity];
  getClientData(): VaultClientData;
  getConfig(): VaultConfig;
  getServerData(): VaultServerData | null;
  getSharedData(): VaultSharedData;
  getUpdatePacket(): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener> | null;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  readonly serverData: VaultServerData;
  setConfig(arg0: VaultConfig): void;
}
export type VaultBlockEntity = VaultBlockEntityMembers & j_net_minecraft_world_level_block_entity.BlockEntity;
export interface VaultBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): VaultBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.vault.VaultBlockEntity$Client. */
export interface VaultBlockEntity_ClientMembers {
}
export type VaultBlockEntity_Client = VaultBlockEntity_ClientMembers;
export interface VaultBlockEntity_ClientStatics {
  new(): VaultBlockEntity_Client;
  emitActivationParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: VaultSharedData, arg4: j_net_minecraft_core_particles.ParticleOptions): void;
  emitDeactivationParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core_particles.ParticleOptions): void;
  shouldDisplayActiveEffects(arg0: VaultSharedData): boolean;
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: VaultClientData, arg4: VaultSharedData): void;
}

/** JVM class net.minecraft.world.level.block.entity.vault.VaultBlockEntity$Server. */
export interface VaultBlockEntity_ServerMembers {
}
export type VaultBlockEntity_Server = VaultBlockEntity_ServerMembers;
export interface VaultBlockEntity_ServerStatics {
  new(): VaultBlockEntity_Server;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: VaultConfig, arg4: VaultServerData, arg5: VaultSharedData): void;
  tryInsertKey(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: VaultConfig, arg4: VaultServerData, arg5: VaultSharedData, arg6: j_net_minecraft_world_entity_player.Player, arg7: j_net_minecraft_world_item.ItemStack): void;
}

/** JVM class net.minecraft.world.level.block.entity.vault.VaultClientData. */
export interface VaultClientDataMembers {
  currentSpin(): number;
  previousSpin(): number;
}
export type VaultClientData = VaultClientDataMembers;
export interface VaultClientDataStatics {
  readonly ROTATION_SPEED: 10;
}

/** JVM record net.minecraft.world.level.block.entity.vault.VaultConfig. */
export interface VaultConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  activationRange(): number;
  deactivationRange(): number;
  entitySelector(): j_net_minecraft_world_level_block_entity_trialspawner.PlayerDetector_EntitySelector;
  equals(arg0: object): boolean;
  hashCode(): number;
  keyItem(): j_net_minecraft_world_item.ItemStack;
  lootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  overrideLootTableToDisplay(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  playerDetector(): j_net_minecraft_world_level_block_entity_trialspawner.PlayerDetector;
  toString(): string;
}
export type VaultConfig = VaultConfigMembers & JavaOpaque<"java.lang.Record">;
export interface VaultConfigStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: number, arg2: number, arg3: j_net_minecraft_world_item.ItemStack, arg4: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>): VaultConfig;
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: number, arg2: number, arg3: j_net_minecraft_world_item.ItemStack, arg4: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>, arg5: j_net_minecraft_world_level_block_entity_trialspawner.PlayerDetector, arg6: j_net_minecraft_world_level_block_entity_trialspawner.PlayerDetector_EntitySelector): VaultConfig;
}

/** JVM class net.minecraft.world.level.block.entity.vault.VaultServerData. */
export interface VaultServerDataMembers {
  addToRewardedPlayers(arg0: JavaOpaque<"java.util.UUID">): boolean;
  addToRewardedPlayers(arg0: j_net_minecraft_world_entity_player.Player): void;
  ejectionProgress(): number;
  getRewardedPlayers(): JavaSet<JavaOpaque<"java.util.UUID">>;
  pauseStateUpdatingUntil(arg0: bigint): void;
  removeFromRewardedPlayers(arg0: JavaOpaque<"java.util.UUID">): boolean;
  stateUpdatingResumesAt(): bigint;
}
export type VaultServerData = VaultServerDataMembers;
export interface VaultServerDataStatics {
}

/** JVM class net.minecraft.world.level.block.entity.vault.VaultSharedData. */
export interface VaultSharedDataMembers {
  getConnectedPlayers(): JavaSet<JavaOpaque<"java.util.UUID">>;
  getDisplayItem(): j_net_minecraft_world_item.ItemStack;
  hasDisplayItem(): boolean;
  setDisplayItem(arg0: j_net_minecraft_world_item.ItemStack): void;
}
export type VaultSharedData = VaultSharedDataMembers;
export interface VaultSharedDataStatics {
}

/** Live JVM enum net.minecraft.world.level.block.entity.vault.VaultState; constants are host handles, not strings. */
export type VaultState = JavaEnum<"net.minecraft.world.level.block.entity.vault.VaultState", "ACTIVE" | "EJECTING" | "INACTIVE" | "UNLOCKING"> & VaultStateMembers;
export interface VaultStateMembers {
  getSerializedName(): string;
  lightLevel(): number;
  onTransition(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: VaultState, arg3: VaultConfig, arg4: VaultSharedData, arg5: boolean): void;
  tickAndGetNext(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: VaultConfig, arg3: VaultServerData, arg4: VaultSharedData): VaultState;
}
export interface VaultStateStatics {
  readonly ACTIVE: VaultState;
  readonly EJECTING: VaultState;
  readonly INACTIVE: VaultState;
  readonly UNLOCKING: VaultState;
  valueOf(arg0: string): VaultState;
  values(): Array<VaultState>;
}
