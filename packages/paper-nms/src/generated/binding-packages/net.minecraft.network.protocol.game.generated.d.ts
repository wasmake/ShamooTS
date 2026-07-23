// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_gametest_framework from './net.minecraft.gametest.framework.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_chat_numbers from './net.minecraft.network.chat.numbers.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_common from './net.minecraft.network.protocol.common.generated.js';
import type * as j_net_minecraft_network_protocol_common_custom from './net.minecraft.network.protocol.common.custom.generated.js';
import type * as j_net_minecraft_network_protocol_ping from './net.minecraft.network.protocol.ping.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_util_debugchart from './net.minecraft.util.debugchart.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_monster_breeze from './net.minecraft.world.entity.monster.breeze.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_raid from './net.minecraft.world.entity.raid.generated.js';
import type * as j_net_minecraft_world_entity_vehicle from './net.minecraft.world.entity.vehicle.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_crafting_display from './net.minecraft.world.item.crafting.display.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_border from './net.minecraft.world.level.border.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_dimension from './net.minecraft.world.level.dimension.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_lighting from './net.minecraft.world.level.lighting.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_net_minecraft_world_scores_criteria from './net.minecraft.world.scores.criteria.generated.js';
import type * as j_net_minecraft_world_waypoints from './net.minecraft.world.waypoints.generated.js';

/** JVM class net.minecraft.network.protocol.game.ClientboundAddEntityPacket. */
export interface ClientboundAddEntityPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getData(): number;
  getId(): number;
  getType(): j_net_minecraft_world_entity.EntityType<object>;
  getUUID(): JavaOpaque<"java.util.UUID">;
  getX(): number;
  getXRot(): number;
  getXa(): number;
  getY(): number;
  getYHeadRot(): number;
  getYRot(): number;
  getYa(): number;
  getZ(): number;
  getZa(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundAddEntityPacket>;
}
export type ClientboundAddEntityPacket = ClientboundAddEntityPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundAddEntityPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.UUID">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: j_net_minecraft_world_entity.EntityType<object>, arg8: number, arg9: j_net_minecraft_world_phys.Vec3, arg10: number): ClientboundAddEntityPacket;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_core.BlockPos): ClientboundAddEntityPacket;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerEntity): ClientboundAddEntityPacket;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_server_level.ServerEntity, arg2: number): ClientboundAddEntityPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundAddEntityPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundAnimatePacket. */
export interface ClientboundAnimatePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getAction(): number;
  getId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundAnimatePacket>;
}
export type ClientboundAnimatePacket = ClientboundAnimatePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundAnimatePacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: number): ClientboundAnimatePacket;
  readonly CRITICAL_HIT: 4;
  readonly MAGIC_CRITICAL_HIT: 5;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundAnimatePacket>;
  readonly SWING_MAIN_HAND: 0;
  readonly SWING_OFF_HAND: 3;
  readonly WAKE_UP: 2;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundAwardStatsPacket. */
export interface ClientboundAwardStatsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  stats(): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [j_net_minecraft_stats.Stat<object>]>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundAwardStatsPacket>;
}
export type ClientboundAwardStatsPacket = ClientboundAwardStatsPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundAwardStatsPacketStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [j_net_minecraft_stats.Stat<object>]>): ClientboundAwardStatsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundAwardStatsPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket. */
export interface ClientboundBlockChangedAckPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  sequence(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBlockChangedAckPacket>;
}
export type ClientboundBlockChangedAckPacket = ClientboundBlockChangedAckPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundBlockChangedAckPacketStatics {
  new(arg0: number): ClientboundBlockChangedAckPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundBlockChangedAckPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket. */
export interface ClientboundBlockDestructionPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getId(): number;
  getPos(): j_net_minecraft_core.BlockPos;
  getProgress(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBlockDestructionPacket>;
}
export type ClientboundBlockDestructionPacket = ClientboundBlockDestructionPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundBlockDestructionPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number): ClientboundBlockDestructionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundBlockDestructionPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket. */
export interface ClientboundBlockEntityDataPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getPos(): j_net_minecraft_core.BlockPos;
  getTag(): j_net_minecraft_nbt.CompoundTag;
  getType(): j_net_minecraft_world_level_block_entity.BlockEntityType<object>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBlockEntityDataPacket>;
}
export type ClientboundBlockEntityDataPacket = ClientboundBlockEntityDataPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundBlockEntityDataPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<object>, arg2: j_net_minecraft_nbt.CompoundTag): ClientboundBlockEntityDataPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundBlockEntityDataPacket>;
  create(arg0: j_net_minecraft_world_level_block_entity.BlockEntity): ClientboundBlockEntityDataPacket;
  create(arg0: j_net_minecraft_world_level_block_entity.BlockEntity, arg1: JavaBiFunction<j_net_minecraft_world_level_block_entity.BlockEntity, j_net_minecraft_core.RegistryAccess, j_net_minecraft_nbt.CompoundTag>): ClientboundBlockEntityDataPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockEventPacket. */
export interface ClientboundBlockEventPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getB0(): number;
  getB1(): number;
  getBlock(): j_net_minecraft_world_level_block.Block;
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBlockEventPacket>;
}
export type ClientboundBlockEventPacket = ClientboundBlockEventPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundBlockEventPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block, arg2: number, arg3: number): ClientboundBlockEventPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundBlockEventPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket. */
export interface ClientboundBlockUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  readonly blockState: j_net_minecraft_world_level_block_state.BlockState;
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBlockUpdatePacket>;
}
export type ClientboundBlockUpdatePacket = ClientboundBlockUpdatePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundBlockUpdatePacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): ClientboundBlockUpdatePacket;
  new(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): ClientboundBlockUpdatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundBlockUpdatePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBossEventPacket. */
export interface ClientboundBossEventPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  dispatch(arg0: ClientboundBossEventPacket_Handler): void;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBossEventPacket>;
}
export type ClientboundBossEventPacket = ClientboundBossEventPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundBossEventPacketStatics {
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundBossEventPacket>;
  createAddPacket(arg0: j_net_minecraft_world.BossEvent): ClientboundBossEventPacket;
  createRemovePacket(arg0: JavaOpaque<"java.util.UUID">): ClientboundBossEventPacket;
  createUpdateNamePacket(arg0: j_net_minecraft_world.BossEvent): ClientboundBossEventPacket;
  createUpdateProgressPacket(arg0: j_net_minecraft_world.BossEvent): ClientboundBossEventPacket;
  createUpdatePropertiesPacket(arg0: j_net_minecraft_world.BossEvent): ClientboundBossEventPacket;
  createUpdateStylePacket(arg0: j_net_minecraft_world.BossEvent): ClientboundBossEventPacket;
}

/** JVM interface net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler. */
export interface ClientboundBossEventPacket_HandlerMembers {
  add(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_network_chat.Component, arg2: number, arg3: j_net_minecraft_world.BossEvent_BossBarColor, arg4: j_net_minecraft_world.BossEvent_BossBarOverlay, arg5: boolean, arg6: boolean, arg7: boolean): void;
  remove(arg0: JavaOpaque<"java.util.UUID">): void;
  updateName(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_network_chat.Component): void;
  updateProgress(arg0: JavaOpaque<"java.util.UUID">, arg1: number): void;
  updateProperties(arg0: JavaOpaque<"java.util.UUID">, arg1: boolean, arg2: boolean, arg3: boolean): void;
  updateStyle(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world.BossEvent_BossBarColor, arg2: j_net_minecraft_world.BossEvent_BossBarOverlay): void;
}
export type ClientboundBossEventPacket_Handler = ClientboundBossEventPacket_HandlerMembers;
export interface ClientboundBossEventPacket_HandlerStatics {
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket. */
export interface ClientboundBundleDelimiterPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.BundleDelimiterPacket<ClientGamePacketListener>];
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBundleDelimiterPacket>;
}
export type ClientboundBundleDelimiterPacket = ClientboundBundleDelimiterPacketMembers & j_net_minecraft_network_protocol.BundleDelimiterPacket<ClientGamePacketListener>;
export interface ClientboundBundleDelimiterPacketStatics {
  new(): ClientboundBundleDelimiterPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBundlePacket. */
export interface ClientboundBundlePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.BundlePacket<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundBundlePacket>;
}
export type ClientboundBundlePacket = ClientboundBundlePacketMembers & j_net_minecraft_network_protocol.BundlePacket<ClientGamePacketListener>;
export interface ClientboundBundlePacketStatics {
  new(arg0: Iterable<j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>>): ClientboundBundlePacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket. */
export interface ClientboundChangeDifficultyPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  difficulty(): j_net_minecraft_world.Difficulty;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  locked(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundChangeDifficultyPacket>;
}
export type ClientboundChangeDifficultyPacket = ClientboundChangeDifficultyPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundChangeDifficultyPacketStatics {
  new(arg0: j_net_minecraft_world.Difficulty, arg1: boolean): ClientboundChangeDifficultyPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundChangeDifficultyPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket. */
export interface ClientboundChunkBatchFinishedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  batchSize(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundChunkBatchFinishedPacket>;
}
export type ClientboundChunkBatchFinishedPacket = ClientboundChunkBatchFinishedPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundChunkBatchFinishedPacketStatics {
  new(arg0: number): ClientboundChunkBatchFinishedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundChunkBatchFinishedPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket. */
export interface ClientboundChunkBatchStartPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundChunkBatchStartPacket>;
}
export type ClientboundChunkBatchStartPacket = ClientboundChunkBatchStartPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundChunkBatchStartPacketStatics {
  readonly INSTANCE: ClientboundChunkBatchStartPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundChunkBatchStartPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket. */
export interface ClientboundChunksBiomesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  chunkBiomeData(): JavaList<ClientboundChunksBiomesPacket_ChunkBiomeData>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundChunksBiomesPacket>;
}
export type ClientboundChunksBiomesPacket = ClientboundChunksBiomesPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundChunksBiomesPacketStatics {
  new(arg0: JavaList<ClientboundChunksBiomesPacket_ChunkBiomeData>): ClientboundChunksBiomesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundChunksBiomesPacket>;
  forChunks(arg0: JavaList<j_net_minecraft_world_level_chunk.LevelChunk>): ClientboundChunksBiomesPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData. */
export interface ClientboundChunksBiomesPacket_ChunkBiomeDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  buffer(): Array<number>;
  equals(arg0: object): boolean;
  getReadBuffer(): j_net_minecraft_network.FriendlyByteBuf;
  hashCode(): number;
  pos(): j_net_minecraft_world_level.ChunkPos;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ClientboundChunksBiomesPacket_ChunkBiomeData = ClientboundChunksBiomesPacket_ChunkBiomeDataMembers & JavaOpaque<"java.lang.Record">;
export interface ClientboundChunksBiomesPacket_ChunkBiomeDataStatics {
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): ClientboundChunksBiomesPacket_ChunkBiomeData;
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: Array<number>): ClientboundChunksBiomesPacket_ChunkBiomeData;
  new(arg0: j_net_minecraft_world_level_chunk.LevelChunk): ClientboundChunksBiomesPacket_ChunkBiomeData;
  extractChunkData(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: j_net_minecraft_world_level_chunk.LevelChunk): void;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundClearTitlesPacket. */
export interface ClientboundClearTitlesPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  shouldResetTimes(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundClearTitlesPacket>;
}
export type ClientboundClearTitlesPacket = ClientboundClearTitlesPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundClearTitlesPacketStatics {
  new(arg0: boolean): ClientboundClearTitlesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundClearTitlesPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundCommandsPacket. */
export interface ClientboundCommandsPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getRoot<S>(arg0: j_net_minecraft_commands.CommandBuildContext, arg1: ClientboundCommandsPacket_NodeBuilder<S>): JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCommandsPacket>;
}
export type ClientboundCommandsPacket = ClientboundCommandsPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundCommandsPacketStatics {
  new<S>(arg0: JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>, arg1: ClientboundCommandsPacket_NodeInspector<S>): ClientboundCommandsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundCommandsPacket>;
}

/** JVM interface net.minecraft.network.protocol.game.ClientboundCommandsPacket$NodeBuilder. */
export interface ClientboundCommandsPacket_NodeBuilderMembers<S = unknown> {
  configure(arg0: JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [S, object]>, arg1: boolean, arg2: boolean): JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [S, object]>;
  createArgument(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [object]>, arg2: j_net_minecraft_resources.ResourceLocation | null): JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [S, object]> | null;
  createLiteral(arg0: string): JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [S, object]>;
}
export type ClientboundCommandsPacket_NodeBuilder<S = unknown> = ClientboundCommandsPacket_NodeBuilderMembers<S>;
export interface ClientboundCommandsPacket_NodeBuilderStatics {
}

/** JVM interface net.minecraft.network.protocol.game.ClientboundCommandsPacket$NodeInspector. */
export interface ClientboundCommandsPacket_NodeInspectorMembers<S = unknown> {
  isExecutable(arg0: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [S]>): boolean;
  isRestricted(arg0: JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [S]>): boolean;
  suggestionId(arg0: JavaOpaque<"com.mojang.brigadier.tree.ArgumentCommandNode", [S, object]>): j_net_minecraft_resources.ResourceLocation | null;
}
export type ClientboundCommandsPacket_NodeInspector<S = unknown> = ClientboundCommandsPacket_NodeInspectorMembers<S>;
export interface ClientboundCommandsPacket_NodeInspectorStatics {
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket. */
export interface ClientboundCommandSuggestionsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  id(): number;
  length(): number;
  start(): number;
  suggestions(): JavaList<ClientboundCommandSuggestionsPacket_Entry>;
  toString(): string;
  toSuggestions(): JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCommandSuggestionsPacket>;
}
export type ClientboundCommandSuggestionsPacket = ClientboundCommandSuggestionsPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundCommandSuggestionsPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: JavaList<ClientboundCommandSuggestionsPacket_Entry>): ClientboundCommandSuggestionsPacket;
  new(arg0: number, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">): ClientboundCommandSuggestionsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundCommandSuggestionsPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry. */
export interface ClientboundCommandSuggestionsPacket_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  text(): string;
  toString(): string;
  tooltip(): JavaOptional<j_net_minecraft_network_chat.Component>;
}
export type ClientboundCommandSuggestionsPacket_Entry = ClientboundCommandSuggestionsPacket_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface ClientboundCommandSuggestionsPacket_EntryStatics {
  new(arg0: string, arg1: JavaOptional<j_net_minecraft_network_chat.Component>): ClientboundCommandSuggestionsPacket_Entry;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundCommandSuggestionsPacket_Entry>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundContainerClosePacket. */
export interface ClientboundContainerClosePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getContainerId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundContainerClosePacket>;
}
export type ClientboundContainerClosePacket = ClientboundContainerClosePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundContainerClosePacketStatics {
  new(arg0: number): ClientboundContainerClosePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundContainerClosePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket. */
export interface ClientboundContainerSetContentPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  carriedItem(): j_net_minecraft_world_item.ItemStack;
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hasLargePacketFallback(): boolean;
  hashCode(): number;
  items(): JavaList<j_net_minecraft_world_item.ItemStack>;
  packetTooLarge(arg0: j_net_minecraft_network.Connection): boolean;
  stateId(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundContainerSetContentPacket>;
}
export type ClientboundContainerSetContentPacket = ClientboundContainerSetContentPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundContainerSetContentPacketStatics {
  new(arg0: number, arg1: number, arg2: JavaList<j_net_minecraft_world_item.ItemStack>, arg3: j_net_minecraft_world_item.ItemStack): ClientboundContainerSetContentPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundContainerSetContentPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket. */
export interface ClientboundContainerSetDataPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getContainerId(): number;
  getId(): number;
  getValue(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundContainerSetDataPacket>;
}
export type ClientboundContainerSetDataPacket = ClientboundContainerSetDataPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundContainerSetDataPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundContainerSetDataPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundContainerSetDataPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket. */
export interface ClientboundContainerSetSlotPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getContainerId(): number;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getSlot(): number;
  getStateId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundContainerSetSlotPacket>;
}
export type ClientboundContainerSetSlotPacket = ClientboundContainerSetSlotPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundContainerSetSlotPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_item.ItemStack): ClientboundContainerSetSlotPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundContainerSetSlotPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCooldownPacket. */
export interface ClientboundCooldownPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  cooldownGroup(): j_net_minecraft_resources.ResourceLocation;
  duration(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCooldownPacket>;
}
export type ClientboundCooldownPacket = ClientboundCooldownPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundCooldownPacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number): ClientboundCooldownPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundCooldownPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket. */
export interface ClientboundCustomChatCompletionsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  action(): ClientboundCustomChatCompletionsPacket_Action;
  entries(): JavaList<string>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundCustomChatCompletionsPacket>;
}
export type ClientboundCustomChatCompletionsPacket = ClientboundCustomChatCompletionsPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundCustomChatCompletionsPacketStatics {
  new(arg0: ClientboundCustomChatCompletionsPacket_Action, arg1: JavaList<string>): ClientboundCustomChatCompletionsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundCustomChatCompletionsPacket>;
}

/** Live JVM enum net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action; constants are host handles, not strings. */
export type ClientboundCustomChatCompletionsPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action", "ADD" | "REMOVE" | "SET"> & ClientboundCustomChatCompletionsPacket_ActionMembers;
export interface ClientboundCustomChatCompletionsPacket_ActionMembers {
}
export interface ClientboundCustomChatCompletionsPacket_ActionStatics {
  readonly ADD: ClientboundCustomChatCompletionsPacket_Action;
  readonly REMOVE: ClientboundCustomChatCompletionsPacket_Action;
  readonly SET: ClientboundCustomChatCompletionsPacket_Action;
  valueOf(arg0: string): ClientboundCustomChatCompletionsPacket_Action;
  values(): Array<ClientboundCustomChatCompletionsPacket_Action>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDamageEventPacket. */
export interface ClientboundDamageEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  entityId(): number;
  equals(arg0: object): boolean;
  getSource(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_damagesource.DamageSource;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  sourceCauseId(): number;
  sourceDirectId(): number;
  sourcePosition(): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  sourceType(): j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundDamageEventPacket>;
}
export type ClientboundDamageEventPacket = ClientboundDamageEventPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundDamageEventPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>, arg2: number, arg3: number, arg4: JavaOptional<j_net_minecraft_world_phys.Vec3>): ClientboundDamageEventPacket;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_damagesource.DamageSource): ClientboundDamageEventPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundDamageEventPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDebugSamplePacket. */
export interface ClientboundDebugSamplePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  debugSampleType(): j_net_minecraft_util_debugchart.RemoteDebugSampleType;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  sample(): Array<bigint>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundDebugSamplePacket>;
}
export type ClientboundDebugSamplePacket = ClientboundDebugSamplePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundDebugSamplePacketStatics {
  new(arg0: Array<bigint>, arg1: j_net_minecraft_util_debugchart.RemoteDebugSampleType): ClientboundDebugSamplePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundDebugSamplePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDeleteChatPacket. */
export interface ClientboundDeleteChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  messageSignature(): j_net_minecraft_network_chat.MessageSignature_Packed;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundDeleteChatPacket>;
}
export type ClientboundDeleteChatPacket = ClientboundDeleteChatPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundDeleteChatPacketStatics {
  new(arg0: j_net_minecraft_network_chat.MessageSignature_Packed): ClientboundDeleteChatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundDeleteChatPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket. */
export interface ClientboundDisguisedChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  chatType(): j_net_minecraft_network_chat.ChatType_Bound;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  isSkippable(): boolean;
  message(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundDisguisedChatPacket>;
}
export type ClientboundDisguisedChatPacket = ClientboundDisguisedChatPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundDisguisedChatPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_network_chat.ChatType_Bound): ClientboundDisguisedChatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundDisguisedChatPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundEntityEventPacket. */
export interface ClientboundEntityEventPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEntity(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity.Entity | null;
  getEventId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundEntityEventPacket>;
}
export type ClientboundEntityEventPacket = ClientboundEntityEventPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundEntityEventPacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: number): ClientboundEntityEventPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundEntityEventPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket. */
export interface ClientboundEntityPositionSyncPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  id(): number;
  onGround(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundEntityPositionSyncPacket>;
  values(): j_net_minecraft_world_entity.PositionMoveRotation;
}
export type ClientboundEntityPositionSyncPacket = ClientboundEntityPositionSyncPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundEntityPositionSyncPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity.PositionMoveRotation, arg2: boolean): ClientboundEntityPositionSyncPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundEntityPositionSyncPacket>;
  of(arg0: j_net_minecraft_world_entity.Entity): ClientboundEntityPositionSyncPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundExplodePacket. */
export interface ClientboundExplodePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  center(): j_net_minecraft_world_phys.Vec3;
  equals(arg0: object): boolean;
  explosionParticle(): j_net_minecraft_core_particles.ParticleOptions;
  explosionSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  playerKnockback(): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundExplodePacket>;
}
export type ClientboundExplodePacket = ClientboundExplodePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundExplodePacketStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: JavaOptional<j_net_minecraft_world_phys.Vec3>, arg2: j_net_minecraft_core_particles.ParticleOptions, arg3: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): ClientboundExplodePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundExplodePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket. */
export interface ClientboundForgetLevelChunkPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  pos(): j_net_minecraft_world_level.ChunkPos;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundForgetLevelChunkPacket>;
}
export type ClientboundForgetLevelChunkPacket = ClientboundForgetLevelChunkPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundForgetLevelChunkPacketStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos): ClientboundForgetLevelChunkPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundForgetLevelChunkPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundGameEventPacket. */
export interface ClientboundGameEventPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEvent(): ClientboundGameEventPacket_Type;
  getParam(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundGameEventPacket>;
}
export type ClientboundGameEventPacket = ClientboundGameEventPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundGameEventPacketStatics {
  new(arg0: ClientboundGameEventPacket_Type, arg1: number): ClientboundGameEventPacket;
  readonly CHANGE_GAME_MODE: ClientboundGameEventPacket_Type;
  readonly DEMO_EVENT: ClientboundGameEventPacket_Type;
  readonly DEMO_PARAM_HINT_1: 101;
  readonly DEMO_PARAM_HINT_2: 102;
  readonly DEMO_PARAM_HINT_3: 103;
  readonly DEMO_PARAM_HINT_4: 104;
  readonly DEMO_PARAM_INTRO: 0;
  readonly GUARDIAN_ELDER_EFFECT: ClientboundGameEventPacket_Type;
  readonly IMMEDIATE_RESPAWN: ClientboundGameEventPacket_Type;
  readonly LEVEL_CHUNKS_LOAD_START: ClientboundGameEventPacket_Type;
  readonly LIMITED_CRAFTING: ClientboundGameEventPacket_Type;
  readonly NO_RESPAWN_BLOCK_AVAILABLE: ClientboundGameEventPacket_Type;
  readonly PLAY_ARROW_HIT_SOUND: ClientboundGameEventPacket_Type;
  readonly PUFFER_FISH_STING: ClientboundGameEventPacket_Type;
  readonly RAIN_LEVEL_CHANGE: ClientboundGameEventPacket_Type;
  readonly START_RAINING: ClientboundGameEventPacket_Type;
  readonly STOP_RAINING: ClientboundGameEventPacket_Type;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundGameEventPacket>;
  readonly THUNDER_LEVEL_CHANGE: ClientboundGameEventPacket_Type;
  readonly WIN_GAME: ClientboundGameEventPacket_Type;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type. */
export interface ClientboundGameEventPacket_TypeMembers {
}
export type ClientboundGameEventPacket_Type = ClientboundGameEventPacket_TypeMembers;
export interface ClientboundGameEventPacket_TypeStatics {
  new(arg0: number): ClientboundGameEventPacket_Type;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket. */
export interface ClientboundHorseScreenOpenPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getContainerId(): number;
  getEntityId(): number;
  getInventoryColumns(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundHorseScreenOpenPacket>;
}
export type ClientboundHorseScreenOpenPacket = ClientboundHorseScreenOpenPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundHorseScreenOpenPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundHorseScreenOpenPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundHorseScreenOpenPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket. */
export interface ClientboundHurtAnimationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  id(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundHurtAnimationPacket>;
  yaw(): number;
}
export type ClientboundHurtAnimationPacket = ClientboundHurtAnimationPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundHurtAnimationPacketStatics {
  new(arg0: number, arg1: number): ClientboundHurtAnimationPacket;
  new(arg0: j_net_minecraft_world_entity.LivingEntity): ClientboundHurtAnimationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundHurtAnimationPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket. */
export interface ClientboundInitializeBorderPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getLerpTime(): bigint;
  getNewAbsoluteMaxSize(): number;
  getNewCenterX(): number;
  getNewCenterZ(): number;
  getNewSize(): number;
  getOldSize(): number;
  getWarningBlocks(): number;
  getWarningTime(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundInitializeBorderPacket>;
}
export type ClientboundInitializeBorderPacket = ClientboundInitializeBorderPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundInitializeBorderPacketStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): ClientboundInitializeBorderPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundInitializeBorderPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData. */
export interface ClientboundLevelChunkPacketDataMembers {
  getBlockEntitiesTagsConsumer(arg0: number, arg1: number): JavaConsumer<ClientboundLevelChunkPacketData_BlockEntityTagOutput>;
  getExtraPackets(): JavaList<j_net_minecraft_network_protocol.Packet<object>>;
  getHeightmaps(): JavaMap<j_net_minecraft_world_level_levelgen.Heightmap_Types, Array<bigint>>;
  getReadBuffer(): j_net_minecraft_network.FriendlyByteBuf;
  write(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): void;
}
export type ClientboundLevelChunkPacketData = ClientboundLevelChunkPacketDataMembers;
export interface ClientboundLevelChunkPacketDataStatics {
  new(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf, arg1: number, arg2: number): ClientboundLevelChunkPacketData;
  new(arg0: j_net_minecraft_world_level_chunk.LevelChunk): ClientboundLevelChunkPacketData;
  new(arg0: j_net_minecraft_world_level_chunk.LevelChunk, arg1: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketInfo", [j_net_minecraft_world_level_block_state.BlockState]>): ClientboundLevelChunkPacketData;
  extractChunkData(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: j_net_minecraft_world_level_chunk.LevelChunk): void;
  extractChunkData(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: j_net_minecraft_world_level_chunk.LevelChunk, arg2: JavaOpaque<"io.papermc.paper.antixray.ChunkPacketInfo", [j_net_minecraft_world_level_block_state.BlockState]>): void;
}

/** JVM interface net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput. */
export interface ClientboundLevelChunkPacketData_BlockEntityTagOutputMembers {
  accept(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<object>, arg2: j_net_minecraft_nbt.CompoundTag | null): void | null;
}
export type ClientboundLevelChunkPacketData_BlockEntityTagOutput = ClientboundLevelChunkPacketData_BlockEntityTagOutputMembers;
export interface ClientboundLevelChunkPacketData_BlockEntityTagOutputStatics {
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket. */
export interface ClientboundLevelChunkWithLightPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getChunkData(): ClientboundLevelChunkPacketData;
  getExtraPackets(): JavaList<j_net_minecraft_network_protocol.Packet<object>>;
  getLightData(): ClientboundLightUpdatePacketData;
  getX(): number;
  getZ(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isReady(): boolean;
  setReady(arg0: boolean): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLevelChunkWithLightPacket>;
}
export type ClientboundLevelChunkWithLightPacket = ClientboundLevelChunkWithLightPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundLevelChunkWithLightPacketStatics {
  new(arg0: j_net_minecraft_world_level_chunk.LevelChunk, arg1: j_net_minecraft_world_level_lighting.LevelLightEngine, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null): ClientboundLevelChunkWithLightPacket;
  new(arg0: j_net_minecraft_world_level_chunk.LevelChunk, arg1: j_net_minecraft_world_level_lighting.LevelLightEngine, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null, arg4: boolean): ClientboundLevelChunkWithLightPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundLevelChunkWithLightPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelEventPacket. */
export interface ClientboundLevelEventPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getData(): number;
  getPos(): j_net_minecraft_core.BlockPos;
  getType(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isGlobalEvent(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLevelEventPacket>;
}
export type ClientboundLevelEventPacket = ClientboundLevelEventPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundLevelEventPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: boolean): ClientboundLevelEventPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundLevelEventPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket. */
export interface ClientboundLevelParticlesPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  alwaysShow(): boolean;
  getCount(): number;
  getMaxSpeed(): number;
  getParticle(): j_net_minecraft_core_particles.ParticleOptions;
  getX(): number;
  getXDist(): number;
  getY(): number;
  getYDist(): number;
  getZ(): number;
  getZDist(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isOverrideLimiter(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLevelParticlesPacket>;
}
export type ClientboundLevelParticlesPacket = ClientboundLevelParticlesPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundLevelParticlesPacketStatics {
  new<T /* extends j_net_minecraft_core_particles.ParticleOptions */>(arg0: T, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): ClientboundLevelParticlesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundLevelParticlesPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLightUpdatePacket. */
export interface ClientboundLightUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getLightData(): ClientboundLightUpdatePacketData;
  getX(): number;
  getZ(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLightUpdatePacket>;
}
export type ClientboundLightUpdatePacket = ClientboundLightUpdatePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundLightUpdatePacketStatics {
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_lighting.LevelLightEngine, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null): ClientboundLightUpdatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundLightUpdatePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData. */
export interface ClientboundLightUpdatePacketDataMembers {
  getBlockUpdates(): JavaList<Array<number>>;
  getBlockYMask(): JavaOpaque<"java.util.BitSet">;
  getEmptyBlockYMask(): JavaOpaque<"java.util.BitSet">;
  getEmptySkyYMask(): JavaOpaque<"java.util.BitSet">;
  getSkyUpdates(): JavaList<Array<number>>;
  getSkyYMask(): JavaOpaque<"java.util.BitSet">;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ClientboundLightUpdatePacketData = ClientboundLightUpdatePacketDataMembers;
export interface ClientboundLightUpdatePacketDataStatics {
  new(arg0: j_net_minecraft_network.FriendlyByteBuf, arg1: number, arg2: number): ClientboundLightUpdatePacketData;
  new(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_world_level_lighting.LevelLightEngine, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null): ClientboundLightUpdatePacketData;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundLoginPacket. */
export interface ClientboundLoginPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  chunkRadius(): number;
  commonPlayerSpawnInfo(): CommonPlayerSpawnInfo;
  doLimitedCrafting(): boolean;
  enforcesSecureChat(): boolean;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hardcore(): boolean;
  hashCode(): number;
  levels(): JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  maxPlayers(): number;
  playerId(): number;
  reducedDebugInfo(): boolean;
  showDeathScreen(): boolean;
  simulationDistance(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundLoginPacket>;
}
export type ClientboundLoginPacket = ClientboundLoginPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundLoginPacketStatics {
  new(arg0: number, arg1: boolean, arg2: JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: CommonPlayerSpawnInfo, arg10: boolean): ClientboundLoginPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundLoginPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundMapItemDataPacket. */
export interface ClientboundMapItemDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  applyToMap(arg0: j_net_minecraft_world_level_saveddata_maps.MapItemSavedData): void;
  colorPatch(): JavaOptional<j_net_minecraft_world_level_saveddata_maps.MapItemSavedData_MapPatch>;
  decorations(): JavaOptional<JavaList<j_net_minecraft_world_level_saveddata_maps.MapDecoration>>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  locked(): boolean;
  mapId(): j_net_minecraft_world_level_saveddata_maps.MapId;
  scale(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMapItemDataPacket>;
}
export type ClientboundMapItemDataPacket = ClientboundMapItemDataPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundMapItemDataPacketStatics {
  new(arg0: j_net_minecraft_world_level_saveddata_maps.MapId, arg1: number, arg2: boolean, arg3: JavaCollection<j_net_minecraft_world_level_saveddata_maps.MapDecoration> | null, arg4: j_net_minecraft_world_level_saveddata_maps.MapItemSavedData_MapPatch | null): ClientboundMapItemDataPacket;
  new(arg0: j_net_minecraft_world_level_saveddata_maps.MapId, arg1: number, arg2: boolean, arg3: JavaOptional<JavaList<j_net_minecraft_world_level_saveddata_maps.MapDecoration>>, arg4: JavaOptional<j_net_minecraft_world_level_saveddata_maps.MapItemSavedData_MapPatch>): ClientboundMapItemDataPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundMapItemDataPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket. */
export interface ClientboundMerchantOffersPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  canRestock(): boolean;
  getContainerId(): number;
  getOffers(): j_net_minecraft_world_item_trading.MerchantOffers;
  getVillagerLevel(): number;
  getVillagerXp(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  showProgress(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMerchantOffersPacket>;
}
export type ClientboundMerchantOffersPacket = ClientboundMerchantOffersPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundMerchantOffersPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item_trading.MerchantOffers, arg2: number, arg3: number, arg4: boolean, arg5: boolean): ClientboundMerchantOffersPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundMerchantOffersPacket>;
}

/** JVM abstract net.minecraft.network.protocol.game.ClientboundMoveEntityPacket. */
export interface ClientboundMoveEntityPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  readonly entityId: number;
  getEntity(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity.Entity | null;
  getXRot(): number;
  getXa(): number;
  getYRot(): number;
  getYa(): number;
  getZa(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  readonly hasPos: boolean;
  hasPosition(): boolean;
  readonly hasRot: boolean;
  hasRotation(): boolean;
  isOnGround(): boolean;
  readonly onGround: boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket>;
  readonly xRot: number;
  readonly xa: number;
  readonly yRot: number;
  readonly ya: number;
  readonly za: number;
}
export type ClientboundMoveEntityPacket = ClientboundMoveEntityPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundMoveEntityPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean): ClientboundMoveEntityPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos. */
export interface ClientboundMoveEntityPacket_PosMembers {
  readonly __javaSupertypes?: readonly [ClientboundMoveEntityPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket_Pos>;
}
export type ClientboundMoveEntityPacket_Pos = ClientboundMoveEntityPacket_PosMembers & ClientboundMoveEntityPacket;
export interface ClientboundMoveEntityPacket_PosStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): ClientboundMoveEntityPacket_Pos;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundMoveEntityPacket_Pos>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot. */
export interface ClientboundMoveEntityPacket_PosRotMembers {
  readonly __javaSupertypes?: readonly [ClientboundMoveEntityPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket_PosRot>;
}
export type ClientboundMoveEntityPacket_PosRot = ClientboundMoveEntityPacket_PosRotMembers & ClientboundMoveEntityPacket;
export interface ClientboundMoveEntityPacket_PosRotStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): ClientboundMoveEntityPacket_PosRot;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundMoveEntityPacket_PosRot>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot. */
export interface ClientboundMoveEntityPacket_RotMembers {
  readonly __javaSupertypes?: readonly [ClientboundMoveEntityPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket_Rot>;
}
export type ClientboundMoveEntityPacket_Rot = ClientboundMoveEntityPacket_RotMembers & ClientboundMoveEntityPacket;
export interface ClientboundMoveEntityPacket_RotStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: boolean): ClientboundMoveEntityPacket_Rot;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundMoveEntityPacket_Rot>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket. */
export interface ClientboundMoveMinecartPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  entityId(): number;
  equals(arg0: object): boolean;
  getEntity(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity.Entity | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  lerpSteps(): JavaList<j_net_minecraft_world_entity_vehicle.NewMinecartBehavior_MinecartStep>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMoveMinecartPacket>;
}
export type ClientboundMoveMinecartPacket = ClientboundMoveMinecartPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundMoveMinecartPacketStatics {
  new(arg0: number, arg1: JavaList<j_net_minecraft_world_entity_vehicle.NewMinecartBehavior_MinecartStep>): ClientboundMoveMinecartPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundMoveMinecartPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket. */
export interface ClientboundMoveVehiclePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  position(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundMoveVehiclePacket>;
  xRot(): number;
  yRot(): number;
}
export type ClientboundMoveVehiclePacket = ClientboundMoveVehiclePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundMoveVehiclePacketStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): ClientboundMoveVehiclePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundMoveVehiclePacket>;
  fromEntity(arg0: j_net_minecraft_world_entity.Entity): ClientboundMoveVehiclePacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundOpenBookPacket. */
export interface ClientboundOpenBookPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getHand(): j_net_minecraft_world.InteractionHand;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundOpenBookPacket>;
}
export type ClientboundOpenBookPacket = ClientboundOpenBookPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundOpenBookPacketStatics {
  new(arg0: j_net_minecraft_world.InteractionHand): ClientboundOpenBookPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundOpenBookPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundOpenScreenPacket. */
export interface ClientboundOpenScreenPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getContainerId(): number;
  getTitle(): j_net_minecraft_network_chat.Component;
  getType(): j_net_minecraft_world_inventory.MenuType<object>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundOpenScreenPacket>;
}
export type ClientboundOpenScreenPacket = ClientboundOpenScreenPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundOpenScreenPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_inventory.MenuType<object>, arg2: j_net_minecraft_network_chat.Component): ClientboundOpenScreenPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundOpenScreenPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket. */
export interface ClientboundOpenSignEditorPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isFrontText(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundOpenSignEditorPacket>;
}
export type ClientboundOpenSignEditorPacket = ClientboundOpenSignEditorPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundOpenSignEditorPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): ClientboundOpenSignEditorPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundOpenSignEditorPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket. */
export interface ClientboundPlaceGhostRecipePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  recipeDisplay(): j_net_minecraft_world_item_crafting_display.RecipeDisplay;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlaceGhostRecipePacket>;
}
export type ClientboundPlaceGhostRecipePacket = ClientboundPlaceGhostRecipePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlaceGhostRecipePacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item_crafting_display.RecipeDisplay): ClientboundPlaceGhostRecipePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundPlaceGhostRecipePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket. */
export interface ClientboundPlayerAbilitiesPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  canFly(): boolean;
  canInstabuild(): boolean;
  getFlyingSpeed(): number;
  getWalkingSpeed(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isFlying(): boolean;
  isInvulnerable(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerAbilitiesPacket>;
}
export type ClientboundPlayerAbilitiesPacket = ClientboundPlayerAbilitiesPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerAbilitiesPacketStatics {
  new(arg0: j_net_minecraft_world_entity_player.Abilities): ClientboundPlayerAbilitiesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPlayerAbilitiesPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerChatPacket. */
export interface ClientboundPlayerChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  body(): j_net_minecraft_network_chat.SignedMessageBody_Packed;
  chatType(): j_net_minecraft_network_chat.ChatType_Bound;
  equals(arg0: object): boolean;
  filterMask(): j_net_minecraft_network_chat.FilterMask;
  globalIndex(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  index(): number;
  isSkippable(): boolean;
  sender(): JavaOpaque<"java.util.UUID">;
  signature(): j_net_minecraft_network_chat.MessageSignature | null;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerChatPacket>;
  unsignedContent(): j_net_minecraft_network_chat.Component | null;
}
export type ClientboundPlayerChatPacket = ClientboundPlayerChatPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerChatPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.UUID">, arg2: number, arg3: j_net_minecraft_network_chat.MessageSignature | null, arg4: j_net_minecraft_network_chat.SignedMessageBody_Packed, arg5: j_net_minecraft_network_chat.Component | null, arg6: j_net_minecraft_network_chat.FilterMask, arg7: j_net_minecraft_network_chat.ChatType_Bound): ClientboundPlayerChatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundPlayerChatPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket. */
export interface ClientboundPlayerCombatEndPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerCombatEndPacket>;
}
export type ClientboundPlayerCombatEndPacket = ClientboundPlayerCombatEndPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerCombatEndPacketStatics {
  new(arg0: number): ClientboundPlayerCombatEndPacket;
  new(arg0: j_net_minecraft_world_damagesource.CombatTracker): ClientboundPlayerCombatEndPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPlayerCombatEndPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket. */
export interface ClientboundPlayerCombatEnterPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerCombatEnterPacket>;
}
export type ClientboundPlayerCombatEnterPacket = ClientboundPlayerCombatEnterPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerCombatEnterPacketStatics {
  readonly INSTANCE: ClientboundPlayerCombatEnterPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundPlayerCombatEnterPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket. */
export interface ClientboundPlayerCombatKillPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  isSkippable(): boolean;
  message(): j_net_minecraft_network_chat.Component;
  playerId(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerCombatKillPacket>;
}
export type ClientboundPlayerCombatKillPacket = ClientboundPlayerCombatKillPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerCombatKillPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_network_chat.Component): ClientboundPlayerCombatKillPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundPlayerCombatKillPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket. */
export interface ClientboundPlayerInfoRemovePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  profileIds(): JavaList<JavaOpaque<"java.util.UUID">>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerInfoRemovePacket>;
}
export type ClientboundPlayerInfoRemovePacket = ClientboundPlayerInfoRemovePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerInfoRemovePacketStatics {
  new(arg0: JavaList<JavaOpaque<"java.util.UUID">>): ClientboundPlayerInfoRemovePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPlayerInfoRemovePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket. */
export interface ClientboundPlayerInfoUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  actions(): JavaOpaque<"java.util.EnumSet", [ClientboundPlayerInfoUpdatePacket_Action]>;
  entries(): JavaList<ClientboundPlayerInfoUpdatePacket_Entry>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  newEntries(): JavaList<ClientboundPlayerInfoUpdatePacket_Entry>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerInfoUpdatePacket>;
}
export type ClientboundPlayerInfoUpdatePacket = ClientboundPlayerInfoUpdatePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerInfoUpdatePacketStatics {
  new(arg0: JavaOpaque<"java.util.EnumSet", [ClientboundPlayerInfoUpdatePacket_Action]>, arg1: JavaCollection<j_net_minecraft_server_level.ServerPlayer>): ClientboundPlayerInfoUpdatePacket;
  new(arg0: JavaOpaque<"java.util.EnumSet", [ClientboundPlayerInfoUpdatePacket_Action]>, arg1: JavaList<ClientboundPlayerInfoUpdatePacket_Entry>): ClientboundPlayerInfoUpdatePacket;
  new(arg0: JavaOpaque<"java.util.EnumSet", [ClientboundPlayerInfoUpdatePacket_Action]>, arg1: ClientboundPlayerInfoUpdatePacket_Entry): ClientboundPlayerInfoUpdatePacket;
  new(arg0: ClientboundPlayerInfoUpdatePacket_Action, arg1: j_net_minecraft_server_level.ServerPlayer): ClientboundPlayerInfoUpdatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundPlayerInfoUpdatePacket>;
  createPlayerInitializing(arg0: JavaCollection<j_net_minecraft_server_level.ServerPlayer>): ClientboundPlayerInfoUpdatePacket;
  createPlayerInitializing(arg0: JavaCollection<j_net_minecraft_server_level.ServerPlayer>, arg1: j_net_minecraft_server_level.ServerPlayer): ClientboundPlayerInfoUpdatePacket;
  createSinglePlayerInitializing(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: boolean): ClientboundPlayerInfoUpdatePacket;
  updateListed(arg0: JavaOpaque<"java.util.UUID">, arg1: boolean): ClientboundPlayerInfoUpdatePacket;
}

/** Live JVM enum net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action; constants are host handles, not strings. */
export type ClientboundPlayerInfoUpdatePacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action", "ADD_PLAYER" | "INITIALIZE_CHAT" | "UPDATE_DISPLAY_NAME" | "UPDATE_GAME_MODE" | "UPDATE_HAT" | "UPDATE_LATENCY" | "UPDATE_LISTED" | "UPDATE_LIST_ORDER"> & ClientboundPlayerInfoUpdatePacket_ActionMembers;
export interface ClientboundPlayerInfoUpdatePacket_ActionMembers {
}
export interface ClientboundPlayerInfoUpdatePacket_ActionStatics {
  readonly ADD_PLAYER: ClientboundPlayerInfoUpdatePacket_Action;
  readonly INITIALIZE_CHAT: ClientboundPlayerInfoUpdatePacket_Action;
  readonly UPDATE_DISPLAY_NAME: ClientboundPlayerInfoUpdatePacket_Action;
  readonly UPDATE_GAME_MODE: ClientboundPlayerInfoUpdatePacket_Action;
  readonly UPDATE_HAT: ClientboundPlayerInfoUpdatePacket_Action;
  readonly UPDATE_LATENCY: ClientboundPlayerInfoUpdatePacket_Action;
  readonly UPDATE_LISTED: ClientboundPlayerInfoUpdatePacket_Action;
  readonly UPDATE_LIST_ORDER: ClientboundPlayerInfoUpdatePacket_Action;
  valueOf(arg0: string): ClientboundPlayerInfoUpdatePacket_Action;
  values(): Array<ClientboundPlayerInfoUpdatePacket_Action>;
}

/** JVM interface net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action$Reader. */
export interface ClientboundPlayerInfoUpdatePacket_Action_ReaderMembers {
  read(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$EntryBuilder">, arg1: j_net_minecraft_network.RegistryFriendlyByteBuf): void;
}
export type ClientboundPlayerInfoUpdatePacket_Action_Reader = ClientboundPlayerInfoUpdatePacket_Action_ReaderMembers;
export interface ClientboundPlayerInfoUpdatePacket_Action_ReaderStatics {
}

/** JVM interface net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action$Writer. */
export interface ClientboundPlayerInfoUpdatePacket_Action_WriterMembers {
  write(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf, arg1: ClientboundPlayerInfoUpdatePacket_Entry): void;
}
export type ClientboundPlayerInfoUpdatePacket_Action_Writer = ClientboundPlayerInfoUpdatePacket_Action_WriterMembers;
export interface ClientboundPlayerInfoUpdatePacket_Action_WriterStatics {
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry. */
export interface ClientboundPlayerInfoUpdatePacket_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  chatSession(): j_net_minecraft_network_chat.RemoteChatSession_Data | null;
  displayName(): j_net_minecraft_network_chat.Component | null;
  equals(arg0: object): boolean;
  gameMode(): j_net_minecraft_world_level.GameType;
  hashCode(): number;
  latency(): number;
  listOrder(): number;
  listed(): boolean;
  profile(): JavaOpaque<"com.mojang.authlib.GameProfile"> | null;
  profileId(): JavaOpaque<"java.util.UUID">;
  showHat(): boolean;
  toString(): string;
}
export type ClientboundPlayerInfoUpdatePacket_Entry = ClientboundPlayerInfoUpdatePacket_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface ClientboundPlayerInfoUpdatePacket_EntryStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"com.mojang.authlib.GameProfile"> | null, arg2: boolean, arg3: number, arg4: j_net_minecraft_world_level.GameType, arg5: j_net_minecraft_network_chat.Component | null, arg6: boolean, arg7: number, arg8: j_net_minecraft_network_chat.RemoteChatSession_Data | null): ClientboundPlayerInfoUpdatePacket_Entry;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket. */
export interface ClientboundPlayerLookAtPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getFromAnchor(): j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor;
  getPosition(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_phys.Vec3 | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerLookAtPacket>;
}
export type ClientboundPlayerLookAtPacket = ClientboundPlayerLookAtPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerLookAtPacketStatics {
  new(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg1: number, arg2: number, arg3: number): ClientboundPlayerLookAtPacket;
  new(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor): ClientboundPlayerLookAtPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPlayerLookAtPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket. */
export interface ClientboundPlayerPositionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  change(): j_net_minecraft_world_entity.PositionMoveRotation;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  id(): number;
  relatives(): JavaSet<j_net_minecraft_world_entity.Relative>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerPositionPacket>;
}
export type ClientboundPlayerPositionPacket = ClientboundPlayerPositionPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerPositionPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity.PositionMoveRotation, arg2: JavaSet<j_net_minecraft_world_entity.Relative>): ClientboundPlayerPositionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPlayerPositionPacket>;
  of(arg0: number, arg1: j_net_minecraft_world_entity.PositionMoveRotation, arg2: JavaSet<j_net_minecraft_world_entity.Relative>): ClientboundPlayerPositionPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket. */
export interface ClientboundPlayerRotationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundPlayerRotationPacket>;
  xRot(): number;
  yRot(): number;
}
export type ClientboundPlayerRotationPacket = ClientboundPlayerRotationPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundPlayerRotationPacketStatics {
  new(arg0: number, arg1: number): ClientboundPlayerRotationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundPlayerRotationPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket. */
export interface ClientboundProjectilePowerPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getAccelerationPower(): number;
  getId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundProjectilePowerPacket>;
}
export type ClientboundProjectilePowerPacket = ClientboundProjectilePowerPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundProjectilePowerPacketStatics {
  new(arg0: number, arg1: number): ClientboundProjectilePowerPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundProjectilePowerPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket. */
export interface ClientboundRecipeBookAddPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  entries(): JavaList<ClientboundRecipeBookAddPacket_Entry>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  replace(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRecipeBookAddPacket>;
}
export type ClientboundRecipeBookAddPacket = ClientboundRecipeBookAddPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRecipeBookAddPacketStatics {
  new(arg0: JavaList<ClientboundRecipeBookAddPacket_Entry>, arg1: boolean): ClientboundRecipeBookAddPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundRecipeBookAddPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket$Entry. */
export interface ClientboundRecipeBookAddPacket_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  contents(): j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry;
  equals(arg0: object): boolean;
  flags(): number;
  hashCode(): number;
  highlight(): boolean;
  notification(): boolean;
  toString(): string;
}
export type ClientboundRecipeBookAddPacket_Entry = ClientboundRecipeBookAddPacket_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface ClientboundRecipeBookAddPacket_EntryStatics {
  new(arg0: j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry, arg1: number): ClientboundRecipeBookAddPacket_Entry;
  new(arg0: j_net_minecraft_world_item_crafting_display.RecipeDisplayEntry, arg1: boolean, arg2: boolean): ClientboundRecipeBookAddPacket_Entry;
  readonly FLAG_HIGHLIGHT: 2;
  readonly FLAG_NOTIFICATION: 1;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundRecipeBookAddPacket_Entry>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket. */
export interface ClientboundRecipeBookRemovePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  recipes(): JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplayId>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRecipeBookRemovePacket>;
}
export type ClientboundRecipeBookRemovePacket = ClientboundRecipeBookRemovePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRecipeBookRemovePacketStatics {
  new(arg0: JavaList<j_net_minecraft_world_item_crafting_display.RecipeDisplayId>): ClientboundRecipeBookRemovePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundRecipeBookRemovePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket. */
export interface ClientboundRecipeBookSettingsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  bookSettings(): j_net_minecraft_stats.RecipeBookSettings;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRecipeBookSettingsPacket>;
}
export type ClientboundRecipeBookSettingsPacket = ClientboundRecipeBookSettingsPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRecipeBookSettingsPacketStatics {
  new(arg0: j_net_minecraft_stats.RecipeBookSettings): ClientboundRecipeBookSettingsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundRecipeBookSettingsPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket. */
export interface ClientboundRemoveEntitiesPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEntityIds(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRemoveEntitiesPacket>;
}
export type ClientboundRemoveEntitiesPacket = ClientboundRemoveEntitiesPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRemoveEntitiesPacketStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">): ClientboundRemoveEntitiesPacket;
  new(...arg0: Array<number>): ClientboundRemoveEntitiesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundRemoveEntitiesPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket. */
export interface ClientboundRemoveMobEffectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  effect(): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>;
  entityId(): number;
  equals(arg0: object): boolean;
  getEntity(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity.Entity | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRemoveMobEffectPacket>;
}
export type ClientboundRemoveMobEffectPacket = ClientboundRemoveMobEffectPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRemoveMobEffectPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): ClientboundRemoveMobEffectPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundRemoveMobEffectPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundResetScorePacket. */
export interface ClientboundResetScorePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  objectiveName(): string | null;
  owner(): string;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundResetScorePacket>;
}
export type ClientboundResetScorePacket = ClientboundResetScorePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundResetScorePacketStatics {
  new(arg0: string, arg1: string | null): ClientboundResetScorePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundResetScorePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRespawnPacket. */
export interface ClientboundRespawnPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  commonPlayerSpawnInfo(): CommonPlayerSpawnInfo;
  dataToKeep(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  shouldKeep(arg0: number): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRespawnPacket>;
}
export type ClientboundRespawnPacket = ClientboundRespawnPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRespawnPacketStatics {
  new(arg0: CommonPlayerSpawnInfo, arg1: number): ClientboundRespawnPacket;
  readonly KEEP_ALL_DATA: 3;
  readonly KEEP_ATTRIBUTE_MODIFIERS: 1;
  readonly KEEP_ENTITY_DATA: 2;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundRespawnPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundRotateHeadPacket. */
export interface ClientboundRotateHeadPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEntity(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity.Entity;
  getYHeadRot(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundRotateHeadPacket>;
}
export type ClientboundRotateHeadPacket = ClientboundRotateHeadPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundRotateHeadPacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: number): ClientboundRotateHeadPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundRotateHeadPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket. */
export interface ClientboundSectionBlocksUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  runUpdates(arg0: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSectionBlocksUpdatePacket>;
}
export type ClientboundSectionBlocksUpdatePacket = ClientboundSectionBlocksUpdatePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSectionBlocksUpdatePacketStatics {
  new(arg0: j_net_minecraft_core.SectionPos, arg1: JavaOpaque<"it.unimi.dsi.fastutil.shorts.Short2ObjectMap", [j_net_minecraft_world_level_block_state.BlockState]>): ClientboundSectionBlocksUpdatePacket;
  new(arg0: j_net_minecraft_core.SectionPos, arg1: JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortSet">, arg2: j_net_minecraft_world_level_chunk.LevelChunkSection): ClientboundSectionBlocksUpdatePacket;
  new(arg0: j_net_minecraft_core.SectionPos, arg1: JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortSet">, arg2: Array<j_net_minecraft_world_level_block_state.BlockState>): ClientboundSectionBlocksUpdatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSectionBlocksUpdatePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket. */
export interface ClientboundSelectAdvancementsTabPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getTab(): j_net_minecraft_resources.ResourceLocation | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSelectAdvancementsTabPacket>;
}
export type ClientboundSelectAdvancementsTabPacket = ClientboundSelectAdvancementsTabPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSelectAdvancementsTabPacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation | null): ClientboundSelectAdvancementsTabPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSelectAdvancementsTabPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundServerDataPacket. */
export interface ClientboundServerDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  iconBytes(): JavaOptional<Array<number>>;
  motd(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundServerDataPacket>;
}
export type ClientboundServerDataPacket = ClientboundServerDataPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundServerDataPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<Array<number>>): ClientboundServerDataPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundServerDataPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket. */
export interface ClientboundSetActionBarTextPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  text(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetActionBarTextPacket>;
}
export type ClientboundSetActionBarTextPacket = ClientboundSetActionBarTextPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetActionBarTextPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ClientboundSetActionBarTextPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetActionBarTextPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket. */
export interface ClientboundSetBorderCenterPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getNewCenterX(): number;
  getNewCenterZ(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderCenterPacket>;
}
export type ClientboundSetBorderCenterPacket = ClientboundSetBorderCenterPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetBorderCenterPacketStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): ClientboundSetBorderCenterPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetBorderCenterPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket. */
export interface ClientboundSetBorderLerpSizePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getLerpTime(): bigint;
  getNewSize(): number;
  getOldSize(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderLerpSizePacket>;
}
export type ClientboundSetBorderLerpSizePacket = ClientboundSetBorderLerpSizePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetBorderLerpSizePacketStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): ClientboundSetBorderLerpSizePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetBorderLerpSizePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket. */
export interface ClientboundSetBorderSizePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getSize(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderSizePacket>;
}
export type ClientboundSetBorderSizePacket = ClientboundSetBorderSizePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetBorderSizePacketStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): ClientboundSetBorderSizePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetBorderSizePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket. */
export interface ClientboundSetBorderWarningDelayPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getWarningDelay(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderWarningDelayPacket>;
}
export type ClientboundSetBorderWarningDelayPacket = ClientboundSetBorderWarningDelayPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetBorderWarningDelayPacketStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): ClientboundSetBorderWarningDelayPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetBorderWarningDelayPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket. */
export interface ClientboundSetBorderWarningDistancePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getWarningBlocks(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderWarningDistancePacket>;
}
export type ClientboundSetBorderWarningDistancePacket = ClientboundSetBorderWarningDistancePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetBorderWarningDistancePacketStatics {
  new(arg0: j_net_minecraft_world_level_border.WorldBorder): ClientboundSetBorderWarningDistancePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetBorderWarningDistancePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetCameraPacket. */
export interface ClientboundSetCameraPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEntity(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity.Entity | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetCameraPacket>;
}
export type ClientboundSetCameraPacket = ClientboundSetCameraPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetCameraPacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity): ClientboundSetCameraPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetCameraPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket. */
export interface ClientboundSetChunkCacheCenterPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getX(): number;
  getZ(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetChunkCacheCenterPacket>;
}
export type ClientboundSetChunkCacheCenterPacket = ClientboundSetChunkCacheCenterPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetChunkCacheCenterPacketStatics {
  new(arg0: number, arg1: number): ClientboundSetChunkCacheCenterPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetChunkCacheCenterPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket. */
export interface ClientboundSetChunkCacheRadiusPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getRadius(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetChunkCacheRadiusPacket>;
}
export type ClientboundSetChunkCacheRadiusPacket = ClientboundSetChunkCacheRadiusPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetChunkCacheRadiusPacketStatics {
  new(arg0: number): ClientboundSetChunkCacheRadiusPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetChunkCacheRadiusPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket. */
export interface ClientboundSetCursorItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  contents(): j_net_minecraft_world_item.ItemStack;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetCursorItemPacket>;
}
export type ClientboundSetCursorItemPacket = ClientboundSetCursorItemPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetCursorItemPacketStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack): ClientboundSetCursorItemPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetCursorItemPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket. */
export interface ClientboundSetDefaultSpawnPositionPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getAngle(): number;
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  readonly pos: j_net_minecraft_core.BlockPos;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetDefaultSpawnPositionPacket>;
}
export type ClientboundSetDefaultSpawnPositionPacket = ClientboundSetDefaultSpawnPositionPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetDefaultSpawnPositionPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number): ClientboundSetDefaultSpawnPositionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetDefaultSpawnPositionPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket. */
export interface ClientboundSetDisplayObjectivePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getObjectiveName(): string | null;
  getSlot(): j_net_minecraft_world_scores.DisplaySlot;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetDisplayObjectivePacket>;
}
export type ClientboundSetDisplayObjectivePacket = ClientboundSetDisplayObjectivePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetDisplayObjectivePacketStatics {
  new(arg0: j_net_minecraft_world_scores.DisplaySlot, arg1: j_net_minecraft_world_scores.Objective | null): ClientboundSetDisplayObjectivePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetDisplayObjectivePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket. */
export interface ClientboundSetEntityDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  id(): number;
  packedItems(): JavaList<j_net_minecraft_network_syncher.SynchedEntityData_DataValue<object>>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetEntityDataPacket>;
}
export type ClientboundSetEntityDataPacket = ClientboundSetEntityDataPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetEntityDataPacketStatics {
  new(arg0: number, arg1: JavaList<j_net_minecraft_network_syncher.SynchedEntityData_DataValue<object>>): ClientboundSetEntityDataPacket;
  readonly EOF_MARKER: 255;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetEntityDataPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket. */
export interface ClientboundSetEntityLinkPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getDestId(): number;
  getSourceId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetEntityLinkPacket>;
}
export type ClientboundSetEntityLinkPacket = ClientboundSetEntityLinkPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetEntityLinkPacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_entity.Entity | null): ClientboundSetEntityLinkPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetEntityLinkPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket. */
export interface ClientboundSetEntityMotionPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getId(): number;
  getXa(): number;
  getYa(): number;
  getZa(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetEntityMotionPacket>;
}
export type ClientboundSetEntityMotionPacket = ClientboundSetEntityMotionPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetEntityMotionPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_phys.Vec3): ClientboundSetEntityMotionPacket;
  new(arg0: j_net_minecraft_world_entity.Entity): ClientboundSetEntityMotionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetEntityMotionPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket. */
export interface ClientboundSetEquipmentPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEntity(): number;
  getSlots(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity.EquipmentSlot, j_net_minecraft_world_item.ItemStack]>>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetEquipmentPacket>;
}
export type ClientboundSetEquipmentPacket = ClientboundSetEquipmentPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetEquipmentPacketStatics {
  new(arg0: number, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity.EquipmentSlot, j_net_minecraft_world_item.ItemStack]>>): ClientboundSetEquipmentPacket;
  new(arg0: number, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_world_entity.EquipmentSlot, j_net_minecraft_world_item.ItemStack]>>, arg2: boolean): ClientboundSetEquipmentPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetEquipmentPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetExperiencePacket. */
export interface ClientboundSetExperiencePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getExperienceLevel(): number;
  getExperienceProgress(): number;
  getTotalExperience(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetExperiencePacket>;
}
export type ClientboundSetExperiencePacket = ClientboundSetExperiencePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetExperiencePacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundSetExperiencePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetExperiencePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetHealthPacket. */
export interface ClientboundSetHealthPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getFood(): number;
  getHealth(): number;
  getSaturation(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetHealthPacket>;
}
export type ClientboundSetHealthPacket = ClientboundSetHealthPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetHealthPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundSetHealthPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetHealthPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket. */
export interface ClientboundSetHeldSlotPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  slot(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetHeldSlotPacket>;
}
export type ClientboundSetHeldSlotPacket = ClientboundSetHeldSlotPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetHeldSlotPacketStatics {
  new(arg0: number): ClientboundSetHeldSlotPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundSetHeldSlotPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetObjectivePacket. */
export interface ClientboundSetObjectivePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getMethod(): number;
  getNumberFormat(): JavaOptional<j_net_minecraft_network_chat_numbers.NumberFormat>;
  getObjectiveName(): string;
  getRenderType(): j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetObjectivePacket>;
}
export type ClientboundSetObjectivePacket = ClientboundSetObjectivePacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetObjectivePacketStatics {
  new(arg0: j_net_minecraft_world_scores.Objective, arg1: number): ClientboundSetObjectivePacket;
  readonly METHOD_ADD: 0;
  readonly METHOD_CHANGE: 2;
  readonly METHOD_REMOVE: 1;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetObjectivePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetPassengersPacket. */
export interface ClientboundSetPassengersPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getPassengers(): Array<number>;
  getVehicle(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetPassengersPacket>;
}
export type ClientboundSetPassengersPacket = ClientboundSetPassengersPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetPassengersPacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity): ClientboundSetPassengersPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetPassengersPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket. */
export interface ClientboundSetPlayerInventoryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  contents(): j_net_minecraft_world_item.ItemStack;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  slot(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetPlayerInventoryPacket>;
}
export type ClientboundSetPlayerInventoryPacket = ClientboundSetPlayerInventoryPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetPlayerInventoryPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): ClientboundSetPlayerInventoryPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetPlayerInventoryPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket. */
export interface ClientboundSetPlayerTeamPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getName(): string;
  getParameters(): JavaOptional<ClientboundSetPlayerTeamPacket_Parameters>;
  getPlayerAction(): ClientboundSetPlayerTeamPacket_Action | null;
  getPlayers(): JavaCollection<string>;
  getTeamAction(): ClientboundSetPlayerTeamPacket_Action | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetPlayerTeamPacket>;
}
export type ClientboundSetPlayerTeamPacket = ClientboundSetPlayerTeamPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetPlayerTeamPacketStatics {
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetPlayerTeamPacket>;
  createAddOrModifyPacket(arg0: j_net_minecraft_world_scores.PlayerTeam, arg1: boolean): ClientboundSetPlayerTeamPacket;
  createMultiplePlayerPacket(arg0: j_net_minecraft_world_scores.PlayerTeam, arg1: JavaCollection<string>, arg2: ClientboundSetPlayerTeamPacket_Action): ClientboundSetPlayerTeamPacket;
  createPlayerPacket(arg0: j_net_minecraft_world_scores.PlayerTeam, arg1: string, arg2: ClientboundSetPlayerTeamPacket_Action): ClientboundSetPlayerTeamPacket;
  createRemovePacket(arg0: j_net_minecraft_world_scores.PlayerTeam): ClientboundSetPlayerTeamPacket;
}

/** Live JVM enum net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action; constants are host handles, not strings. */
export type ClientboundSetPlayerTeamPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action", "ADD" | "REMOVE"> & ClientboundSetPlayerTeamPacket_ActionMembers;
export interface ClientboundSetPlayerTeamPacket_ActionMembers {
}
export interface ClientboundSetPlayerTeamPacket_ActionStatics {
  readonly ADD: ClientboundSetPlayerTeamPacket_Action;
  readonly REMOVE: ClientboundSetPlayerTeamPacket_Action;
  valueOf(arg0: string): ClientboundSetPlayerTeamPacket_Action;
  values(): Array<ClientboundSetPlayerTeamPacket_Action>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters. */
export interface ClientboundSetPlayerTeamPacket_ParametersMembers {
  getCollisionRule(): j_net_minecraft_world_scores.Team_CollisionRule;
  getColor(): j_net_minecraft.ChatFormatting;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getNametagVisibility(): j_net_minecraft_world_scores.Team_Visibility;
  getOptions(): number;
  getPlayerPrefix(): j_net_minecraft_network_chat.Component;
  getPlayerSuffix(): j_net_minecraft_network_chat.Component;
  write(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): void;
}
export type ClientboundSetPlayerTeamPacket_Parameters = ClientboundSetPlayerTeamPacket_ParametersMembers;
export interface ClientboundSetPlayerTeamPacket_ParametersStatics {
  new(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): ClientboundSetPlayerTeamPacket_Parameters;
  new(arg0: j_net_minecraft_world_scores.PlayerTeam): ClientboundSetPlayerTeamPacket_Parameters;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetScorePacket. */
export interface ClientboundSetScorePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  display(): JavaOptional<j_net_minecraft_network_chat.Component>;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  numberFormat(): JavaOptional<j_net_minecraft_network_chat_numbers.NumberFormat>;
  objectiveName(): string;
  owner(): string;
  score(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetScorePacket>;
}
export type ClientboundSetScorePacket = ClientboundSetScorePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetScorePacketStatics {
  new(arg0: string, arg1: string, arg2: number, arg3: JavaOptional<j_net_minecraft_network_chat.Component>, arg4: JavaOptional<j_net_minecraft_network_chat_numbers.NumberFormat>): ClientboundSetScorePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetScorePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket. */
export interface ClientboundSetSimulationDistancePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  simulationDistance(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetSimulationDistancePacket>;
}
export type ClientboundSetSimulationDistancePacket = ClientboundSetSimulationDistancePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetSimulationDistancePacketStatics {
  new(arg0: number): ClientboundSetSimulationDistancePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetSimulationDistancePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket. */
export interface ClientboundSetSubtitleTextPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  text(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetSubtitleTextPacket>;
}
export type ClientboundSetSubtitleTextPacket = ClientboundSetSubtitleTextPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetSubtitleTextPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ClientboundSetSubtitleTextPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetSubtitleTextPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetTimePacket. */
export interface ClientboundSetTimePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  dayTime(): bigint;
  equals(arg0: object): boolean;
  gameTime(): bigint;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  tickDayTime(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetTimePacket>;
}
export type ClientboundSetTimePacket = ClientboundSetTimePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetTimePacketStatics {
  new(arg0: bigint, arg1: bigint, arg2: boolean): ClientboundSetTimePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetTimePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket. */
export interface ClientboundSetTitlesAnimationPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getFadeIn(): number;
  getFadeOut(): number;
  getStay(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetTitlesAnimationPacket>;
}
export type ClientboundSetTitlesAnimationPacket = ClientboundSetTitlesAnimationPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetTitlesAnimationPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundSetTitlesAnimationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundSetTitlesAnimationPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket. */
export interface ClientboundSetTitleTextPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  text(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSetTitleTextPacket>;
}
export type ClientboundSetTitleTextPacket = ClientboundSetTitleTextPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSetTitleTextPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ClientboundSetTitleTextPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSetTitleTextPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSoundEntityPacket. */
export interface ClientboundSoundEntityPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getId(): number;
  getPitch(): number;
  getSeed(): bigint;
  getSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getSource(): j_net_minecraft_sounds.SoundSource;
  getVolume(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSoundEntityPacket>;
}
export type ClientboundSoundEntityPacket = ClientboundSoundEntityPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSoundEntityPacketStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_entity.Entity, arg3: number, arg4: number, arg5: bigint): ClientboundSoundEntityPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSoundEntityPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSoundPacket. */
export interface ClientboundSoundPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getPitch(): number;
  getSeed(): bigint;
  getSound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getSource(): j_net_minecraft_sounds.SoundSource;
  getVolume(): number;
  getX(): number;
  getY(): number;
  getZ(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSoundPacket>;
}
export type ClientboundSoundPacket = ClientboundSoundPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSoundPacketStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: j_net_minecraft_sounds.SoundSource, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: bigint): ClientboundSoundPacket;
  readonly LOCATION_ACCURACY: 8;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSoundPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket. */
export interface ClientboundStartConfigurationPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isTerminal(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundStartConfigurationPacket>;
}
export type ClientboundStartConfigurationPacket = ClientboundStartConfigurationPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundStartConfigurationPacketStatics {
  readonly INSTANCE: ClientboundStartConfigurationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundStartConfigurationPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundStopSoundPacket. */
export interface ClientboundStopSoundPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getName(): j_net_minecraft_resources.ResourceLocation | null;
  getSource(): j_net_minecraft_sounds.SoundSource | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundStopSoundPacket>;
}
export type ClientboundStopSoundPacket = ClientboundStopSoundPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundStopSoundPacketStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation | null, arg1: j_net_minecraft_sounds.SoundSource | null): ClientboundStopSoundPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundStopSoundPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSystemChatPacket. */
export interface ClientboundSystemChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  content(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  isSkippable(): boolean;
  overlay(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundSystemChatPacket>;
}
export type ClientboundSystemChatPacket = ClientboundSystemChatPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundSystemChatPacketStatics {
  new(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: boolean): ClientboundSystemChatPacket;
  new(arg0: j_net_minecraft_network_chat.Component, arg1: boolean): ClientboundSystemChatPacket;
  new(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: boolean): ClientboundSystemChatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundSystemChatPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTabListPacket. */
export interface ClientboundTabListPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  footer(): j_net_minecraft_network_chat.Component;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  header(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTabListPacket>;
}
export type ClientboundTabListPacket = ClientboundTabListPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTabListPacketStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_network_chat.Component): ClientboundTabListPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundTabListPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundTagQueryPacket. */
export interface ClientboundTagQueryPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getTag(): j_net_minecraft_nbt.CompoundTag | null;
  getTransactionId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isSkippable(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTagQueryPacket>;
}
export type ClientboundTagQueryPacket = ClientboundTagQueryPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTagQueryPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_nbt.CompoundTag | null): ClientboundTagQueryPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundTagQueryPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket. */
export interface ClientboundTakeItemEntityPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getAmount(): number;
  getItemId(): number;
  getPlayerId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTakeItemEntityPacket>;
}
export type ClientboundTakeItemEntityPacket = ClientboundTakeItemEntityPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTakeItemEntityPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundTakeItemEntityPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundTakeItemEntityPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket. */
export interface ClientboundTeleportEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  change(): j_net_minecraft_world_entity.PositionMoveRotation;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  id(): number;
  onGround(): boolean;
  relatives(): JavaSet<j_net_minecraft_world_entity.Relative>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTeleportEntityPacket>;
}
export type ClientboundTeleportEntityPacket = ClientboundTeleportEntityPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTeleportEntityPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_entity.PositionMoveRotation, arg2: JavaSet<j_net_minecraft_world_entity.Relative>, arg3: boolean): ClientboundTeleportEntityPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundTeleportEntityPacket>;
  teleport(arg0: number, arg1: j_net_minecraft_world_entity.PositionMoveRotation, arg2: JavaSet<j_net_minecraft_world_entity.Relative>, arg3: boolean): ClientboundTeleportEntityPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus. */
export interface ClientboundTestInstanceBlockStatusMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  size(): JavaOptional<j_net_minecraft_core.Vec3i>;
  status(): j_net_minecraft_network_chat.Component;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTestInstanceBlockStatus>;
}
export type ClientboundTestInstanceBlockStatus = ClientboundTestInstanceBlockStatusMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTestInstanceBlockStatusStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<j_net_minecraft_core.Vec3i>): ClientboundTestInstanceBlockStatus;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundTestInstanceBlockStatus>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTickingStatePacket. */
export interface ClientboundTickingStatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  isFrozen(): boolean;
  tickRate(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTickingStatePacket>;
}
export type ClientboundTickingStatePacket = ClientboundTickingStatePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTickingStatePacketStatics {
  new(arg0: number, arg1: boolean): ClientboundTickingStatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundTickingStatePacket>;
  from(arg0: j_net_minecraft_world.TickRateManager): ClientboundTickingStatePacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTickingStepPacket. */
export interface ClientboundTickingStepPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  tickSteps(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTickingStepPacket>;
}
export type ClientboundTickingStepPacket = ClientboundTickingStepPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTickingStepPacketStatics {
  new(arg0: number): ClientboundTickingStepPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ClientboundTickingStepPacket>;
  from(arg0: j_net_minecraft_world.TickRateManager): ClientboundTickingStepPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket. */
export interface ClientboundTrackedWaypointPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  apply(arg0: j_net_minecraft_world_waypoints.TrackedWaypointManager): void;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  operation(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket$Operation">;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundTrackedWaypointPacket>;
  waypoint(): j_net_minecraft_world_waypoints.TrackedWaypoint;
}
export type ClientboundTrackedWaypointPacket = ClientboundTrackedWaypointPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundTrackedWaypointPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket$Operation">, arg1: j_net_minecraft_world_waypoints.TrackedWaypoint): ClientboundTrackedWaypointPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundTrackedWaypointPacket>;
  addWaypointAzimuth(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_waypoints.Waypoint_Icon, arg2: number): ClientboundTrackedWaypointPacket;
  addWaypointChunk(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_waypoints.Waypoint_Icon, arg2: j_net_minecraft_world_level.ChunkPos): ClientboundTrackedWaypointPacket;
  addWaypointPosition(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_waypoints.Waypoint_Icon, arg2: j_net_minecraft_core.Vec3i): ClientboundTrackedWaypointPacket;
  removeWaypoint(arg0: JavaOpaque<"java.util.UUID">): ClientboundTrackedWaypointPacket;
  updateWaypointAzimuth(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_waypoints.Waypoint_Icon, arg2: number): ClientboundTrackedWaypointPacket;
  updateWaypointChunk(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_waypoints.Waypoint_Icon, arg2: j_net_minecraft_world_level.ChunkPos): ClientboundTrackedWaypointPacket;
  updateWaypointPosition(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_world_waypoints.Waypoint_Icon, arg2: j_net_minecraft_core.Vec3i): ClientboundTrackedWaypointPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket. */
export interface ClientboundUpdateAdvancementsPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getAdded(): JavaList<j_net_minecraft_advancements.AdvancementHolder>;
  getProgress(): JavaMap<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_advancements.AdvancementProgress>;
  getRemoved(): JavaSet<j_net_minecraft_resources.ResourceLocation>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  shouldReset(): boolean;
  shouldShowAdvancements(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundUpdateAdvancementsPacket>;
}
export type ClientboundUpdateAdvancementsPacket = ClientboundUpdateAdvancementsPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundUpdateAdvancementsPacketStatics {
  new(arg0: boolean, arg1: JavaCollection<j_net_minecraft_advancements.AdvancementHolder>, arg2: JavaSet<j_net_minecraft_resources.ResourceLocation>, arg3: JavaMap<j_net_minecraft_resources.ResourceLocation, j_net_minecraft_advancements.AdvancementProgress>, arg4: boolean): ClientboundUpdateAdvancementsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundUpdateAdvancementsPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket. */
export interface ClientboundUpdateAttributesPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  getEntityId(): number;
  getValues(): JavaList<ClientboundUpdateAttributesPacket_AttributeSnapshot>;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundUpdateAttributesPacket>;
}
export type ClientboundUpdateAttributesPacket = ClientboundUpdateAttributesPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundUpdateAttributesPacketStatics {
  new(arg0: number, arg1: JavaCollection<j_net_minecraft_world_entity_ai_attributes.AttributeInstance>): ClientboundUpdateAttributesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundUpdateAttributesPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot. */
export interface ClientboundUpdateAttributesPacket_AttributeSnapshotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  attribute(): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>;
  base(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  modifiers(): JavaCollection<j_net_minecraft_world_entity_ai_attributes.AttributeModifier>;
  toString(): string;
}
export type ClientboundUpdateAttributesPacket_AttributeSnapshot = ClientboundUpdateAttributesPacket_AttributeSnapshotMembers & JavaOpaque<"java.lang.Record">;
export interface ClientboundUpdateAttributesPacket_AttributeSnapshotStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: number, arg2: JavaCollection<j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): ClientboundUpdateAttributesPacket_AttributeSnapshot;
  readonly MODIFIER_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundUpdateAttributesPacket_AttributeSnapshot>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket. */
export interface ClientboundUpdateMobEffectPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  effectShowsIcon(): boolean;
  getEffect(): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>;
  getEffectAmplifier(): number;
  getEffectDurationTicks(): number;
  getEntityId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  isEffectAmbient(): boolean;
  isEffectVisible(): boolean;
  shouldBlend(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundUpdateMobEffectPacket>;
}
export type ClientboundUpdateMobEffectPacket = ClientboundUpdateMobEffectPacketMembers & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundUpdateMobEffectPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_effect.MobEffectInstance, arg2: boolean): ClientboundUpdateMobEffectPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundUpdateMobEffectPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket. */
export interface ClientboundUpdateRecipesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ClientGamePacketListener): void;
  hashCode(): number;
  itemSets(): JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.RecipePropertySet>, j_net_minecraft_world_item_crafting.RecipePropertySet>;
  stonecutterRecipes(): j_net_minecraft_world_item_crafting.SelectableRecipe_SingleInputSet<j_net_minecraft_world_item_crafting.StonecutterRecipe>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ClientboundUpdateRecipesPacket>;
}
export type ClientboundUpdateRecipesPacket = ClientboundUpdateRecipesPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ClientGamePacketListener>;
export interface ClientboundUpdateRecipesPacketStatics {
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.RecipePropertySet>, j_net_minecraft_world_item_crafting.RecipePropertySet>, arg1: j_net_minecraft_world_item_crafting.SelectableRecipe_SingleInputSet<j_net_minecraft_world_item_crafting.StonecutterRecipe>): ClientboundUpdateRecipesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ClientboundUpdateRecipesPacket>;
}

/** JVM interface net.minecraft.network.protocol.game.ClientGamePacketListener. */
export interface ClientGamePacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_common.ClientCommonPacketListener, j_net_minecraft_network_protocol_ping.ClientPongPacketListener];
  handleAddEntity(arg0: ClientboundAddEntityPacket): void;
  handleAddObjective(arg0: ClientboundSetObjectivePacket): void;
  handleAnimate(arg0: ClientboundAnimatePacket): void;
  handleAwardStats(arg0: ClientboundAwardStatsPacket): void;
  handleBlockChangedAck(arg0: ClientboundBlockChangedAckPacket): void;
  handleBlockDestruction(arg0: ClientboundBlockDestructionPacket): void;
  handleBlockEntityData(arg0: ClientboundBlockEntityDataPacket): void;
  handleBlockEvent(arg0: ClientboundBlockEventPacket): void;
  handleBlockUpdate(arg0: ClientboundBlockUpdatePacket): void;
  handleBossUpdate(arg0: ClientboundBossEventPacket): void;
  handleBundlePacket(arg0: ClientboundBundlePacket): void;
  handleChangeDifficulty(arg0: ClientboundChangeDifficultyPacket): void;
  handleChunkBatchFinished(arg0: ClientboundChunkBatchFinishedPacket): void;
  handleChunkBatchStart(arg0: ClientboundChunkBatchStartPacket): void;
  handleChunkBlocksUpdate(arg0: ClientboundSectionBlocksUpdatePacket): void;
  handleChunksBiomes(arg0: ClientboundChunksBiomesPacket): void;
  handleCommandSuggestions(arg0: ClientboundCommandSuggestionsPacket): void;
  handleCommands(arg0: ClientboundCommandsPacket): void;
  handleConfigurationStart(arg0: ClientboundStartConfigurationPacket): void;
  handleContainerClose(arg0: ClientboundContainerClosePacket): void;
  handleContainerContent(arg0: ClientboundContainerSetContentPacket): void;
  handleContainerSetData(arg0: ClientboundContainerSetDataPacket): void;
  handleContainerSetSlot(arg0: ClientboundContainerSetSlotPacket): void;
  handleCustomChatCompletions(arg0: ClientboundCustomChatCompletionsPacket): void;
  handleDamageEvent(arg0: ClientboundDamageEventPacket): void;
  handleDebugSample(arg0: ClientboundDebugSamplePacket): void;
  handleDeleteChat(arg0: ClientboundDeleteChatPacket): void;
  handleDisguisedChat(arg0: ClientboundDisguisedChatPacket): void;
  handleEntityEvent(arg0: ClientboundEntityEventPacket): void;
  handleEntityLinkPacket(arg0: ClientboundSetEntityLinkPacket): void;
  handleEntityPositionSync(arg0: ClientboundEntityPositionSyncPacket): void;
  handleExplosion(arg0: ClientboundExplodePacket): void;
  handleForgetLevelChunk(arg0: ClientboundForgetLevelChunkPacket): void;
  handleGameEvent(arg0: ClientboundGameEventPacket): void;
  handleHorseScreenOpen(arg0: ClientboundHorseScreenOpenPacket): void;
  handleHurtAnimation(arg0: ClientboundHurtAnimationPacket): void;
  handleInitializeBorder(arg0: ClientboundInitializeBorderPacket): void;
  handleItemCooldown(arg0: ClientboundCooldownPacket): void;
  handleLevelChunkWithLight(arg0: ClientboundLevelChunkWithLightPacket): void;
  handleLevelEvent(arg0: ClientboundLevelEventPacket): void;
  handleLightUpdatePacket(arg0: ClientboundLightUpdatePacket): void;
  handleLogin(arg0: ClientboundLoginPacket): void;
  handleLookAt(arg0: ClientboundPlayerLookAtPacket): void;
  handleMapItemData(arg0: ClientboundMapItemDataPacket): void;
  handleMerchantOffers(arg0: ClientboundMerchantOffersPacket): void;
  handleMinecartAlongTrack(arg0: ClientboundMoveMinecartPacket): void;
  handleMoveEntity(arg0: ClientboundMoveEntityPacket): void;
  handleMovePlayer(arg0: ClientboundPlayerPositionPacket): void;
  handleMoveVehicle(arg0: ClientboundMoveVehiclePacket): void;
  handleOpenBook(arg0: ClientboundOpenBookPacket): void;
  handleOpenScreen(arg0: ClientboundOpenScreenPacket): void;
  handleOpenSignEditor(arg0: ClientboundOpenSignEditorPacket): void;
  handleParticleEvent(arg0: ClientboundLevelParticlesPacket): void;
  handlePlaceRecipe(arg0: ClientboundPlaceGhostRecipePacket): void;
  handlePlayerAbilities(arg0: ClientboundPlayerAbilitiesPacket): void;
  handlePlayerChat(arg0: ClientboundPlayerChatPacket): void;
  handlePlayerCombatEnd(arg0: ClientboundPlayerCombatEndPacket): void;
  handlePlayerCombatEnter(arg0: ClientboundPlayerCombatEnterPacket): void;
  handlePlayerCombatKill(arg0: ClientboundPlayerCombatKillPacket): void;
  handlePlayerInfoRemove(arg0: ClientboundPlayerInfoRemovePacket): void;
  handlePlayerInfoUpdate(arg0: ClientboundPlayerInfoUpdatePacket): void;
  handleProjectilePowerPacket(arg0: ClientboundProjectilePowerPacket): void;
  handleRecipeBookAdd(arg0: ClientboundRecipeBookAddPacket): void;
  handleRecipeBookRemove(arg0: ClientboundRecipeBookRemovePacket): void;
  handleRecipeBookSettings(arg0: ClientboundRecipeBookSettingsPacket): void;
  handleRemoveEntities(arg0: ClientboundRemoveEntitiesPacket): void;
  handleRemoveMobEffect(arg0: ClientboundRemoveMobEffectPacket): void;
  handleResetScore(arg0: ClientboundResetScorePacket): void;
  handleRespawn(arg0: ClientboundRespawnPacket): void;
  handleRotateMob(arg0: ClientboundRotateHeadPacket): void;
  handleRotatePlayer(arg0: ClientboundPlayerRotationPacket): void;
  handleSelectAdvancementsTab(arg0: ClientboundSelectAdvancementsTabPacket): void;
  handleServerData(arg0: ClientboundServerDataPacket): void;
  handleSetBorderCenter(arg0: ClientboundSetBorderCenterPacket): void;
  handleSetBorderLerpSize(arg0: ClientboundSetBorderLerpSizePacket): void;
  handleSetBorderSize(arg0: ClientboundSetBorderSizePacket): void;
  handleSetBorderWarningDelay(arg0: ClientboundSetBorderWarningDelayPacket): void;
  handleSetBorderWarningDistance(arg0: ClientboundSetBorderWarningDistancePacket): void;
  handleSetCamera(arg0: ClientboundSetCameraPacket): void;
  handleSetChunkCacheCenter(arg0: ClientboundSetChunkCacheCenterPacket): void;
  handleSetChunkCacheRadius(arg0: ClientboundSetChunkCacheRadiusPacket): void;
  handleSetCursorItem(arg0: ClientboundSetCursorItemPacket): void;
  handleSetDisplayObjective(arg0: ClientboundSetDisplayObjectivePacket): void;
  handleSetEntityData(arg0: ClientboundSetEntityDataPacket): void;
  handleSetEntityMotion(arg0: ClientboundSetEntityMotionPacket): void;
  handleSetEntityPassengersPacket(arg0: ClientboundSetPassengersPacket): void;
  handleSetEquipment(arg0: ClientboundSetEquipmentPacket): void;
  handleSetExperience(arg0: ClientboundSetExperiencePacket): void;
  handleSetHealth(arg0: ClientboundSetHealthPacket): void;
  handleSetHeldSlot(arg0: ClientboundSetHeldSlotPacket): void;
  handleSetPlayerInventory(arg0: ClientboundSetPlayerInventoryPacket): void;
  handleSetPlayerTeamPacket(arg0: ClientboundSetPlayerTeamPacket): void;
  handleSetScore(arg0: ClientboundSetScorePacket): void;
  handleSetSimulationDistance(arg0: ClientboundSetSimulationDistancePacket): void;
  handleSetSpawn(arg0: ClientboundSetDefaultSpawnPositionPacket): void;
  handleSetTime(arg0: ClientboundSetTimePacket): void;
  handleSoundEntityEvent(arg0: ClientboundSoundEntityPacket): void;
  handleSoundEvent(arg0: ClientboundSoundPacket): void;
  handleStopSoundEvent(arg0: ClientboundStopSoundPacket): void;
  handleSystemChat(arg0: ClientboundSystemChatPacket): void;
  handleTabListCustomisation(arg0: ClientboundTabListPacket): void;
  handleTagQueryPacket(arg0: ClientboundTagQueryPacket): void;
  handleTakeItemEntity(arg0: ClientboundTakeItemEntityPacket): void;
  handleTeleportEntity(arg0: ClientboundTeleportEntityPacket): void;
  handleTestInstanceBlockStatus(arg0: ClientboundTestInstanceBlockStatus): void;
  handleTickingState(arg0: ClientboundTickingStatePacket): void;
  handleTickingStep(arg0: ClientboundTickingStepPacket): void;
  handleTitlesClear(arg0: ClientboundClearTitlesPacket): void;
  handleUpdateAdvancementsPacket(arg0: ClientboundUpdateAdvancementsPacket): void;
  handleUpdateAttributes(arg0: ClientboundUpdateAttributesPacket): void;
  handleUpdateMobEffect(arg0: ClientboundUpdateMobEffectPacket): void;
  handleUpdateRecipes(arg0: ClientboundUpdateRecipesPacket): void;
  handleWaypoint(arg0: ClientboundTrackedWaypointPacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
  setActionBarText(arg0: ClientboundSetActionBarTextPacket): void;
  setSubtitleText(arg0: ClientboundSetSubtitleTextPacket): void;
  setTitleText(arg0: ClientboundSetTitleTextPacket): void;
  setTitlesAnimation(arg0: ClientboundSetTitlesAnimationPacket): void;
}
export type ClientGamePacketListener = ClientGamePacketListenerMembers & j_net_minecraft_network_protocol_common.ClientCommonPacketListener & j_net_minecraft_network_protocol_ping.ClientPongPacketListener;
export interface ClientGamePacketListenerStatics {
}

/** JVM record net.minecraft.network.protocol.game.CommonPlayerSpawnInfo. */
export interface CommonPlayerSpawnInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dimension(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
  dimensionType(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_dimension.DimensionType>;
  equals(arg0: object): boolean;
  gameType(): j_net_minecraft_world_level.GameType;
  hashCode(): number;
  isDebug(): boolean;
  isFlat(): boolean;
  lastDeathLocation(): JavaOptional<j_net_minecraft_core.GlobalPos>;
  portalCooldown(): number;
  previousGameType(): j_net_minecraft_world_level.GameType | null;
  seaLevel(): number;
  seed(): bigint;
  toString(): string;
  write(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): void;
}
export type CommonPlayerSpawnInfo = CommonPlayerSpawnInfoMembers & JavaOpaque<"java.lang.Record">;
export interface CommonPlayerSpawnInfoStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_dimension.DimensionType>, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg2: bigint, arg3: j_net_minecraft_world_level.GameType, arg4: j_net_minecraft_world_level.GameType | null, arg5: boolean, arg6: boolean, arg7: JavaOptional<j_net_minecraft_core.GlobalPos>, arg8: number, arg9: number): CommonPlayerSpawnInfo;
  new(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): CommonPlayerSpawnInfo;
}

/** JVM class net.minecraft.network.protocol.game.DebugEntityNameGenerator. */
export interface DebugEntityNameGeneratorMembers {
}
export type DebugEntityNameGenerator = DebugEntityNameGeneratorMembers;
export interface DebugEntityNameGeneratorStatics {
  new(): DebugEntityNameGenerator;
  getEntityName(arg0: JavaOpaque<"java.util.UUID">): string;
  getEntityName(arg0: j_net_minecraft_world_entity.Entity): string;
}

/** JVM class net.minecraft.network.protocol.game.DebugPackets. */
export interface DebugPacketsMembers {
}
export type DebugPackets = DebugPacketsMembers;
export interface DebugPacketsStatics {
  new(): DebugPackets;
  sendBeeInfo(arg0: j_net_minecraft_world_entity_animal.Bee): void;
  sendBreezeInfo(arg0: j_net_minecraft_world_entity_monster_breeze.Breeze): void;
  sendEntityBrain(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  sendGameEventInfo(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_world_phys.Vec3): void;
  sendGameEventListenerInfo(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_gameevent.GameEventListener): void;
  sendGameTestAddMarker(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: string, arg3: number, arg4: number): void;
  sendGameTestClearPacket(arg0: j_net_minecraft_server_level.ServerLevel): void;
  sendGoalSelector(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Mob, arg2: j_net_minecraft_world_entity_ai_goal.GoalSelector): void;
  sendHiveInfo(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_entity.BeehiveBlockEntity): void;
  sendNeighborsUpdatePacket(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): void;
  sendPathFindingPacket(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Mob, arg2: j_net_minecraft_world_level_pathfinder.Path | null, arg3: number): void | null;
  sendPoiAddedPacket(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  sendPoiPacketsForChunk(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level.ChunkPos): void;
  sendPoiRemovedPacket(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  sendPoiTicketCountPacket(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  sendRaids(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaCollection<j_net_minecraft_world_entity_raid.Raid>): void;
  sendStructurePacket(arg0: j_net_minecraft_world_level.WorldGenLevel, arg1: j_net_minecraft_world_level_levelgen_structure.StructureStart): void;
  sendWireUpdates(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_network_protocol_common_custom.RedstoneWireOrientationsDebugPayload): void;
}

/** JVM class net.minecraft.network.protocol.game.GamePacketTypes. */
export interface GamePacketTypesMembers {
}
export type GamePacketTypes = GamePacketTypesMembers;
export interface GamePacketTypesStatics {
  new(): GamePacketTypes;
  readonly CLIENTBOUND_ADD_ENTITY: j_net_minecraft_network_protocol.PacketType<ClientboundAddEntityPacket>;
  readonly CLIENTBOUND_ANIMATE: j_net_minecraft_network_protocol.PacketType<ClientboundAnimatePacket>;
  readonly CLIENTBOUND_AWARD_STATS: j_net_minecraft_network_protocol.PacketType<ClientboundAwardStatsPacket>;
  readonly CLIENTBOUND_BLOCK_CHANGED_ACK: j_net_minecraft_network_protocol.PacketType<ClientboundBlockChangedAckPacket>;
  readonly CLIENTBOUND_BLOCK_DESTRUCTION: j_net_minecraft_network_protocol.PacketType<ClientboundBlockDestructionPacket>;
  readonly CLIENTBOUND_BLOCK_ENTITY_DATA: j_net_minecraft_network_protocol.PacketType<ClientboundBlockEntityDataPacket>;
  readonly CLIENTBOUND_BLOCK_EVENT: j_net_minecraft_network_protocol.PacketType<ClientboundBlockEventPacket>;
  readonly CLIENTBOUND_BLOCK_UPDATE: j_net_minecraft_network_protocol.PacketType<ClientboundBlockUpdatePacket>;
  readonly CLIENTBOUND_BOSS_EVENT: j_net_minecraft_network_protocol.PacketType<ClientboundBossEventPacket>;
  readonly CLIENTBOUND_BUNDLE: j_net_minecraft_network_protocol.PacketType<ClientboundBundlePacket>;
  readonly CLIENTBOUND_BUNDLE_DELIMITER: j_net_minecraft_network_protocol.PacketType<ClientboundBundleDelimiterPacket>;
  readonly CLIENTBOUND_CHANGE_DIFFICULTY: j_net_minecraft_network_protocol.PacketType<ClientboundChangeDifficultyPacket>;
  readonly CLIENTBOUND_CHUNKS_BIOMES: j_net_minecraft_network_protocol.PacketType<ClientboundChunksBiomesPacket>;
  readonly CLIENTBOUND_CHUNK_BATCH_FINISHED: j_net_minecraft_network_protocol.PacketType<ClientboundChunkBatchFinishedPacket>;
  readonly CLIENTBOUND_CHUNK_BATCH_START: j_net_minecraft_network_protocol.PacketType<ClientboundChunkBatchStartPacket>;
  readonly CLIENTBOUND_CLEAR_TITLES: j_net_minecraft_network_protocol.PacketType<ClientboundClearTitlesPacket>;
  readonly CLIENTBOUND_COMMANDS: j_net_minecraft_network_protocol.PacketType<ClientboundCommandsPacket>;
  readonly CLIENTBOUND_COMMAND_SUGGESTIONS: j_net_minecraft_network_protocol.PacketType<ClientboundCommandSuggestionsPacket>;
  readonly CLIENTBOUND_CONTAINER_CLOSE: j_net_minecraft_network_protocol.PacketType<ClientboundContainerClosePacket>;
  readonly CLIENTBOUND_CONTAINER_SET_CONTENT: j_net_minecraft_network_protocol.PacketType<ClientboundContainerSetContentPacket>;
  readonly CLIENTBOUND_CONTAINER_SET_DATA: j_net_minecraft_network_protocol.PacketType<ClientboundContainerSetDataPacket>;
  readonly CLIENTBOUND_CONTAINER_SET_SLOT: j_net_minecraft_network_protocol.PacketType<ClientboundContainerSetSlotPacket>;
  readonly CLIENTBOUND_COOLDOWN: j_net_minecraft_network_protocol.PacketType<ClientboundCooldownPacket>;
  readonly CLIENTBOUND_CUSTOM_CHAT_COMPLETIONS: j_net_minecraft_network_protocol.PacketType<ClientboundCustomChatCompletionsPacket>;
  readonly CLIENTBOUND_DAMAGE_EVENT: j_net_minecraft_network_protocol.PacketType<ClientboundDamageEventPacket>;
  readonly CLIENTBOUND_DEBUG_SAMPLE: j_net_minecraft_network_protocol.PacketType<ClientboundDebugSamplePacket>;
  readonly CLIENTBOUND_DELETE_CHAT: j_net_minecraft_network_protocol.PacketType<ClientboundDeleteChatPacket>;
  readonly CLIENTBOUND_DISGUISED_CHAT: j_net_minecraft_network_protocol.PacketType<ClientboundDisguisedChatPacket>;
  readonly CLIENTBOUND_ENTITY_EVENT: j_net_minecraft_network_protocol.PacketType<ClientboundEntityEventPacket>;
  readonly CLIENTBOUND_ENTITY_POSITION_SYNC: j_net_minecraft_network_protocol.PacketType<ClientboundEntityPositionSyncPacket>;
  readonly CLIENTBOUND_EXPLODE: j_net_minecraft_network_protocol.PacketType<ClientboundExplodePacket>;
  readonly CLIENTBOUND_FORGET_LEVEL_CHUNK: j_net_minecraft_network_protocol.PacketType<ClientboundForgetLevelChunkPacket>;
  readonly CLIENTBOUND_GAME_EVENT: j_net_minecraft_network_protocol.PacketType<ClientboundGameEventPacket>;
  readonly CLIENTBOUND_HORSE_SCREEN_OPEN: j_net_minecraft_network_protocol.PacketType<ClientboundHorseScreenOpenPacket>;
  readonly CLIENTBOUND_HURT_ANIMATION: j_net_minecraft_network_protocol.PacketType<ClientboundHurtAnimationPacket>;
  readonly CLIENTBOUND_INITIALIZE_BORDER: j_net_minecraft_network_protocol.PacketType<ClientboundInitializeBorderPacket>;
  readonly CLIENTBOUND_LEVEL_CHUNK_WITH_LIGHT: j_net_minecraft_network_protocol.PacketType<ClientboundLevelChunkWithLightPacket>;
  readonly CLIENTBOUND_LEVEL_EVENT: j_net_minecraft_network_protocol.PacketType<ClientboundLevelEventPacket>;
  readonly CLIENTBOUND_LEVEL_PARTICLES: j_net_minecraft_network_protocol.PacketType<ClientboundLevelParticlesPacket>;
  readonly CLIENTBOUND_LIGHT_UPDATE: j_net_minecraft_network_protocol.PacketType<ClientboundLightUpdatePacket>;
  readonly CLIENTBOUND_LOGIN: j_net_minecraft_network_protocol.PacketType<ClientboundLoginPacket>;
  readonly CLIENTBOUND_MAP_ITEM_DATA: j_net_minecraft_network_protocol.PacketType<ClientboundMapItemDataPacket>;
  readonly CLIENTBOUND_MERCHANT_OFFERS: j_net_minecraft_network_protocol.PacketType<ClientboundMerchantOffersPacket>;
  readonly CLIENTBOUND_MOVE_ENTITY_POS: j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket_Pos>;
  readonly CLIENTBOUND_MOVE_ENTITY_POS_ROT: j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket_PosRot>;
  readonly CLIENTBOUND_MOVE_ENTITY_ROT: j_net_minecraft_network_protocol.PacketType<ClientboundMoveEntityPacket_Rot>;
  readonly CLIENTBOUND_MOVE_MINECART_ALONG_TRACK: j_net_minecraft_network_protocol.PacketType<ClientboundMoveMinecartPacket>;
  readonly CLIENTBOUND_MOVE_VEHICLE: j_net_minecraft_network_protocol.PacketType<ClientboundMoveVehiclePacket>;
  readonly CLIENTBOUND_OPEN_BOOK: j_net_minecraft_network_protocol.PacketType<ClientboundOpenBookPacket>;
  readonly CLIENTBOUND_OPEN_SCREEN: j_net_minecraft_network_protocol.PacketType<ClientboundOpenScreenPacket>;
  readonly CLIENTBOUND_OPEN_SIGN_EDITOR: j_net_minecraft_network_protocol.PacketType<ClientboundOpenSignEditorPacket>;
  readonly CLIENTBOUND_PLACE_GHOST_RECIPE: j_net_minecraft_network_protocol.PacketType<ClientboundPlaceGhostRecipePacket>;
  readonly CLIENTBOUND_PLAYER_ABILITIES: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerAbilitiesPacket>;
  readonly CLIENTBOUND_PLAYER_CHAT: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerChatPacket>;
  readonly CLIENTBOUND_PLAYER_COMBAT_END: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerCombatEndPacket>;
  readonly CLIENTBOUND_PLAYER_COMBAT_ENTER: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerCombatEnterPacket>;
  readonly CLIENTBOUND_PLAYER_COMBAT_KILL: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerCombatKillPacket>;
  readonly CLIENTBOUND_PLAYER_INFO_REMOVE: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerInfoRemovePacket>;
  readonly CLIENTBOUND_PLAYER_INFO_UPDATE: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerInfoUpdatePacket>;
  readonly CLIENTBOUND_PLAYER_LOOK_AT: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerLookAtPacket>;
  readonly CLIENTBOUND_PLAYER_POSITION: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerPositionPacket>;
  readonly CLIENTBOUND_PLAYER_ROTATION: j_net_minecraft_network_protocol.PacketType<ClientboundPlayerRotationPacket>;
  readonly CLIENTBOUND_PROJECTILE_POWER: j_net_minecraft_network_protocol.PacketType<ClientboundProjectilePowerPacket>;
  readonly CLIENTBOUND_RECIPE_BOOK_ADD: j_net_minecraft_network_protocol.PacketType<ClientboundRecipeBookAddPacket>;
  readonly CLIENTBOUND_RECIPE_BOOK_REMOVE: j_net_minecraft_network_protocol.PacketType<ClientboundRecipeBookRemovePacket>;
  readonly CLIENTBOUND_RECIPE_BOOK_SETTINGS: j_net_minecraft_network_protocol.PacketType<ClientboundRecipeBookSettingsPacket>;
  readonly CLIENTBOUND_REMOVE_ENTITIES: j_net_minecraft_network_protocol.PacketType<ClientboundRemoveEntitiesPacket>;
  readonly CLIENTBOUND_REMOVE_MOB_EFFECT: j_net_minecraft_network_protocol.PacketType<ClientboundRemoveMobEffectPacket>;
  readonly CLIENTBOUND_RESET_SCORE: j_net_minecraft_network_protocol.PacketType<ClientboundResetScorePacket>;
  readonly CLIENTBOUND_RESPAWN: j_net_minecraft_network_protocol.PacketType<ClientboundRespawnPacket>;
  readonly CLIENTBOUND_ROTATE_HEAD: j_net_minecraft_network_protocol.PacketType<ClientboundRotateHeadPacket>;
  readonly CLIENTBOUND_SECTION_BLOCKS_UPDATE: j_net_minecraft_network_protocol.PacketType<ClientboundSectionBlocksUpdatePacket>;
  readonly CLIENTBOUND_SELECT_ADVANCEMENTS_TAB: j_net_minecraft_network_protocol.PacketType<ClientboundSelectAdvancementsTabPacket>;
  readonly CLIENTBOUND_SERVER_DATA: j_net_minecraft_network_protocol.PacketType<ClientboundServerDataPacket>;
  readonly CLIENTBOUND_SET_ACTION_BAR_TEXT: j_net_minecraft_network_protocol.PacketType<ClientboundSetActionBarTextPacket>;
  readonly CLIENTBOUND_SET_BORDER_CENTER: j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderCenterPacket>;
  readonly CLIENTBOUND_SET_BORDER_LERP_SIZE: j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderLerpSizePacket>;
  readonly CLIENTBOUND_SET_BORDER_SIZE: j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderSizePacket>;
  readonly CLIENTBOUND_SET_BORDER_WARNING_DELAY: j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderWarningDelayPacket>;
  readonly CLIENTBOUND_SET_BORDER_WARNING_DISTANCE: j_net_minecraft_network_protocol.PacketType<ClientboundSetBorderWarningDistancePacket>;
  readonly CLIENTBOUND_SET_CAMERA: j_net_minecraft_network_protocol.PacketType<ClientboundSetCameraPacket>;
  readonly CLIENTBOUND_SET_CHUNK_CACHE_CENTER: j_net_minecraft_network_protocol.PacketType<ClientboundSetChunkCacheCenterPacket>;
  readonly CLIENTBOUND_SET_CHUNK_CACHE_RADIUS: j_net_minecraft_network_protocol.PacketType<ClientboundSetChunkCacheRadiusPacket>;
  readonly CLIENTBOUND_SET_CURSOR_ITEM: j_net_minecraft_network_protocol.PacketType<ClientboundSetCursorItemPacket>;
  readonly CLIENTBOUND_SET_DEFAULT_SPAWN_POSITION: j_net_minecraft_network_protocol.PacketType<ClientboundSetDefaultSpawnPositionPacket>;
  readonly CLIENTBOUND_SET_DISPLAY_OBJECTIVE: j_net_minecraft_network_protocol.PacketType<ClientboundSetDisplayObjectivePacket>;
  readonly CLIENTBOUND_SET_ENTITY_DATA: j_net_minecraft_network_protocol.PacketType<ClientboundSetEntityDataPacket>;
  readonly CLIENTBOUND_SET_ENTITY_LINK: j_net_minecraft_network_protocol.PacketType<ClientboundSetEntityLinkPacket>;
  readonly CLIENTBOUND_SET_ENTITY_MOTION: j_net_minecraft_network_protocol.PacketType<ClientboundSetEntityMotionPacket>;
  readonly CLIENTBOUND_SET_EQUIPMENT: j_net_minecraft_network_protocol.PacketType<ClientboundSetEquipmentPacket>;
  readonly CLIENTBOUND_SET_EXPERIENCE: j_net_minecraft_network_protocol.PacketType<ClientboundSetExperiencePacket>;
  readonly CLIENTBOUND_SET_HEALTH: j_net_minecraft_network_protocol.PacketType<ClientboundSetHealthPacket>;
  readonly CLIENTBOUND_SET_HELD_SLOT: j_net_minecraft_network_protocol.PacketType<ClientboundSetHeldSlotPacket>;
  readonly CLIENTBOUND_SET_OBJECTIVE: j_net_minecraft_network_protocol.PacketType<ClientboundSetObjectivePacket>;
  readonly CLIENTBOUND_SET_PASSENGERS: j_net_minecraft_network_protocol.PacketType<ClientboundSetPassengersPacket>;
  readonly CLIENTBOUND_SET_PLAYER_INVENTORY: j_net_minecraft_network_protocol.PacketType<ClientboundSetPlayerInventoryPacket>;
  readonly CLIENTBOUND_SET_PLAYER_TEAM: j_net_minecraft_network_protocol.PacketType<ClientboundSetPlayerTeamPacket>;
  readonly CLIENTBOUND_SET_SCORE: j_net_minecraft_network_protocol.PacketType<ClientboundSetScorePacket>;
  readonly CLIENTBOUND_SET_SIMULATION_DISTANCE: j_net_minecraft_network_protocol.PacketType<ClientboundSetSimulationDistancePacket>;
  readonly CLIENTBOUND_SET_SUBTITLE_TEXT: j_net_minecraft_network_protocol.PacketType<ClientboundSetSubtitleTextPacket>;
  readonly CLIENTBOUND_SET_TIME: j_net_minecraft_network_protocol.PacketType<ClientboundSetTimePacket>;
  readonly CLIENTBOUND_SET_TITLES_ANIMATION: j_net_minecraft_network_protocol.PacketType<ClientboundSetTitlesAnimationPacket>;
  readonly CLIENTBOUND_SET_TITLE_TEXT: j_net_minecraft_network_protocol.PacketType<ClientboundSetTitleTextPacket>;
  readonly CLIENTBOUND_SOUND: j_net_minecraft_network_protocol.PacketType<ClientboundSoundPacket>;
  readonly CLIENTBOUND_SOUND_ENTITY: j_net_minecraft_network_protocol.PacketType<ClientboundSoundEntityPacket>;
  readonly CLIENTBOUND_START_CONFIGURATION: j_net_minecraft_network_protocol.PacketType<ClientboundStartConfigurationPacket>;
  readonly CLIENTBOUND_STOP_SOUND: j_net_minecraft_network_protocol.PacketType<ClientboundStopSoundPacket>;
  readonly CLIENTBOUND_SYSTEM_CHAT: j_net_minecraft_network_protocol.PacketType<ClientboundSystemChatPacket>;
  readonly CLIENTBOUND_TAB_LIST: j_net_minecraft_network_protocol.PacketType<ClientboundTabListPacket>;
  readonly CLIENTBOUND_TAG_QUERY: j_net_minecraft_network_protocol.PacketType<ClientboundTagQueryPacket>;
  readonly CLIENTBOUND_TAKE_ITEM_ENTITY: j_net_minecraft_network_protocol.PacketType<ClientboundTakeItemEntityPacket>;
  readonly CLIENTBOUND_TELEPORT_ENTITY: j_net_minecraft_network_protocol.PacketType<ClientboundTeleportEntityPacket>;
  readonly CLIENTBOUND_TEST_INSTANCE_BLOCK_STATUS: j_net_minecraft_network_protocol.PacketType<ClientboundTestInstanceBlockStatus>;
  readonly CLIENTBOUND_TICKING_STATE: j_net_minecraft_network_protocol.PacketType<ClientboundTickingStatePacket>;
  readonly CLIENTBOUND_TICKING_STEP: j_net_minecraft_network_protocol.PacketType<ClientboundTickingStepPacket>;
  readonly CLIENTBOUND_UPDATE_ADVANCEMENTS: j_net_minecraft_network_protocol.PacketType<ClientboundUpdateAdvancementsPacket>;
  readonly CLIENTBOUND_UPDATE_ATTRIBUTES: j_net_minecraft_network_protocol.PacketType<ClientboundUpdateAttributesPacket>;
  readonly CLIENTBOUND_UPDATE_MOB_EFFECT: j_net_minecraft_network_protocol.PacketType<ClientboundUpdateMobEffectPacket>;
  readonly CLIENTBOUND_UPDATE_RECIPES: j_net_minecraft_network_protocol.PacketType<ClientboundUpdateRecipesPacket>;
  readonly CLIENTBOUND_WAYPOINT: j_net_minecraft_network_protocol.PacketType<ClientboundTrackedWaypointPacket>;
  readonly SERVERBOUND_ACCEPT_TELEPORTATION: j_net_minecraft_network_protocol.PacketType<ServerboundAcceptTeleportationPacket>;
  readonly SERVERBOUND_BLOCK_ENTITY_TAG_QUERY: j_net_minecraft_network_protocol.PacketType<ServerboundBlockEntityTagQueryPacket>;
  readonly SERVERBOUND_BUNDLE_ITEM_SELECTED: j_net_minecraft_network_protocol.PacketType<ServerboundSelectBundleItemPacket>;
  readonly SERVERBOUND_CHANGE_DIFFICULTY: j_net_minecraft_network_protocol.PacketType<ServerboundChangeDifficultyPacket>;
  readonly SERVERBOUND_CHANGE_GAME_MODE: j_net_minecraft_network_protocol.PacketType<ServerboundChangeGameModePacket>;
  readonly SERVERBOUND_CHAT: j_net_minecraft_network_protocol.PacketType<ServerboundChatPacket>;
  readonly SERVERBOUND_CHAT_ACK: j_net_minecraft_network_protocol.PacketType<ServerboundChatAckPacket>;
  readonly SERVERBOUND_CHAT_COMMAND: j_net_minecraft_network_protocol.PacketType<ServerboundChatCommandPacket>;
  readonly SERVERBOUND_CHAT_COMMAND_SIGNED: j_net_minecraft_network_protocol.PacketType<ServerboundChatCommandSignedPacket>;
  readonly SERVERBOUND_CHAT_SESSION_UPDATE: j_net_minecraft_network_protocol.PacketType<ServerboundChatSessionUpdatePacket>;
  readonly SERVERBOUND_CHUNK_BATCH_RECEIVED: j_net_minecraft_network_protocol.PacketType<ServerboundChunkBatchReceivedPacket>;
  readonly SERVERBOUND_CLIENT_COMMAND: j_net_minecraft_network_protocol.PacketType<ServerboundClientCommandPacket>;
  readonly SERVERBOUND_CLIENT_TICK_END: j_net_minecraft_network_protocol.PacketType<ServerboundClientTickEndPacket>;
  readonly SERVERBOUND_COMMAND_SUGGESTION: j_net_minecraft_network_protocol.PacketType<ServerboundCommandSuggestionPacket>;
  readonly SERVERBOUND_CONFIGURATION_ACKNOWLEDGED: j_net_minecraft_network_protocol.PacketType<ServerboundConfigurationAcknowledgedPacket>;
  readonly SERVERBOUND_CONTAINER_BUTTON_CLICK: j_net_minecraft_network_protocol.PacketType<ServerboundContainerButtonClickPacket>;
  readonly SERVERBOUND_CONTAINER_CLICK: j_net_minecraft_network_protocol.PacketType<ServerboundContainerClickPacket>;
  readonly SERVERBOUND_CONTAINER_CLOSE: j_net_minecraft_network_protocol.PacketType<ServerboundContainerClosePacket>;
  readonly SERVERBOUND_CONTAINER_SLOT_STATE_CHANGED: j_net_minecraft_network_protocol.PacketType<ServerboundContainerSlotStateChangedPacket>;
  readonly SERVERBOUND_DEBUG_SAMPLE_SUBSCRIPTION: j_net_minecraft_network_protocol.PacketType<ServerboundDebugSampleSubscriptionPacket>;
  readonly SERVERBOUND_EDIT_BOOK: j_net_minecraft_network_protocol.PacketType<ServerboundEditBookPacket>;
  readonly SERVERBOUND_ENTITY_TAG_QUERY: j_net_minecraft_network_protocol.PacketType<ServerboundEntityTagQueryPacket>;
  readonly SERVERBOUND_INTERACT: j_net_minecraft_network_protocol.PacketType<ServerboundInteractPacket>;
  readonly SERVERBOUND_JIGSAW_GENERATE: j_net_minecraft_network_protocol.PacketType<ServerboundJigsawGeneratePacket>;
  readonly SERVERBOUND_LOCK_DIFFICULTY: j_net_minecraft_network_protocol.PacketType<ServerboundLockDifficultyPacket>;
  readonly SERVERBOUND_MOVE_PLAYER_POS: j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_Pos>;
  readonly SERVERBOUND_MOVE_PLAYER_POS_ROT: j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_PosRot>;
  readonly SERVERBOUND_MOVE_PLAYER_ROT: j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_Rot>;
  readonly SERVERBOUND_MOVE_PLAYER_STATUS_ONLY: j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_StatusOnly>;
  readonly SERVERBOUND_MOVE_VEHICLE: j_net_minecraft_network_protocol.PacketType<ServerboundMoveVehiclePacket>;
  readonly SERVERBOUND_PADDLE_BOAT: j_net_minecraft_network_protocol.PacketType<ServerboundPaddleBoatPacket>;
  readonly SERVERBOUND_PICK_ITEM_FROM_BLOCK: j_net_minecraft_network_protocol.PacketType<ServerboundPickItemFromBlockPacket>;
  readonly SERVERBOUND_PICK_ITEM_FROM_ENTITY: j_net_minecraft_network_protocol.PacketType<ServerboundPickItemFromEntityPacket>;
  readonly SERVERBOUND_PLACE_RECIPE: j_net_minecraft_network_protocol.PacketType<ServerboundPlaceRecipePacket>;
  readonly SERVERBOUND_PLAYER_ABILITIES: j_net_minecraft_network_protocol.PacketType<ServerboundPlayerAbilitiesPacket>;
  readonly SERVERBOUND_PLAYER_ACTION: j_net_minecraft_network_protocol.PacketType<ServerboundPlayerActionPacket>;
  readonly SERVERBOUND_PLAYER_COMMAND: j_net_minecraft_network_protocol.PacketType<ServerboundPlayerCommandPacket>;
  readonly SERVERBOUND_PLAYER_INPUT: j_net_minecraft_network_protocol.PacketType<ServerboundPlayerInputPacket>;
  readonly SERVERBOUND_PLAYER_LOADED: j_net_minecraft_network_protocol.PacketType<ServerboundPlayerLoadedPacket>;
  readonly SERVERBOUND_RECIPE_BOOK_CHANGE_SETTINGS: j_net_minecraft_network_protocol.PacketType<ServerboundRecipeBookChangeSettingsPacket>;
  readonly SERVERBOUND_RECIPE_BOOK_SEEN_RECIPE: j_net_minecraft_network_protocol.PacketType<ServerboundRecipeBookSeenRecipePacket>;
  readonly SERVERBOUND_RENAME_ITEM: j_net_minecraft_network_protocol.PacketType<ServerboundRenameItemPacket>;
  readonly SERVERBOUND_SEEN_ADVANCEMENTS: j_net_minecraft_network_protocol.PacketType<ServerboundSeenAdvancementsPacket>;
  readonly SERVERBOUND_SELECT_TRADE: j_net_minecraft_network_protocol.PacketType<ServerboundSelectTradePacket>;
  readonly SERVERBOUND_SET_BEACON: j_net_minecraft_network_protocol.PacketType<ServerboundSetBeaconPacket>;
  readonly SERVERBOUND_SET_CARRIED_ITEM: j_net_minecraft_network_protocol.PacketType<ServerboundSetCarriedItemPacket>;
  readonly SERVERBOUND_SET_COMMAND_BLOCK: j_net_minecraft_network_protocol.PacketType<ServerboundSetCommandBlockPacket>;
  readonly SERVERBOUND_SET_COMMAND_MINECART: j_net_minecraft_network_protocol.PacketType<ServerboundSetCommandMinecartPacket>;
  readonly SERVERBOUND_SET_CREATIVE_MODE_SLOT: j_net_minecraft_network_protocol.PacketType<ServerboundSetCreativeModeSlotPacket>;
  readonly SERVERBOUND_SET_JIGSAW_BLOCK: j_net_minecraft_network_protocol.PacketType<ServerboundSetJigsawBlockPacket>;
  readonly SERVERBOUND_SET_STRUCTURE_BLOCK: j_net_minecraft_network_protocol.PacketType<ServerboundSetStructureBlockPacket>;
  readonly SERVERBOUND_SET_TEST_BLOCK: j_net_minecraft_network_protocol.PacketType<ServerboundSetTestBlockPacket>;
  readonly SERVERBOUND_SIGN_UPDATE: j_net_minecraft_network_protocol.PacketType<ServerboundSignUpdatePacket>;
  readonly SERVERBOUND_SWING: j_net_minecraft_network_protocol.PacketType<ServerboundSwingPacket>;
  readonly SERVERBOUND_TELEPORT_TO_ENTITY: j_net_minecraft_network_protocol.PacketType<ServerboundTeleportToEntityPacket>;
  readonly SERVERBOUND_TEST_INSTANCE_BLOCK_ACTION: j_net_minecraft_network_protocol.PacketType<ServerboundTestInstanceBlockActionPacket>;
  readonly SERVERBOUND_USE_ITEM: j_net_minecraft_network_protocol.PacketType<ServerboundUseItemPacket>;
  readonly SERVERBOUND_USE_ITEM_ON: j_net_minecraft_network_protocol.PacketType<ServerboundUseItemOnPacket>;
}

/** JVM class net.minecraft.network.protocol.game.GameProtocols. */
export interface GameProtocolsMembers {
}
export type GameProtocols = GameProtocolsMembers;
export interface GameProtocolsStatics {
  new(): GameProtocols;
  readonly CLIENTBOUND_TEMPLATE: j_net_minecraft_network_protocol.SimpleUnboundProtocol<ClientGamePacketListener, j_net_minecraft_network.RegistryFriendlyByteBuf>;
  readonly HAS_INFINITE_MATERIALS: j_net_minecraft_network_protocol.CodecModifier<j_net_minecraft_network.RegistryFriendlyByteBuf, ServerboundSetCreativeModeSlotPacket, GameProtocols_Context>;
  readonly SERVERBOUND_TEMPLATE: j_net_minecraft_network_protocol.UnboundProtocol<ServerGamePacketListener, j_net_minecraft_network.RegistryFriendlyByteBuf, GameProtocols_Context>;
}

/** JVM interface net.minecraft.network.protocol.game.GameProtocols$Context. */
export interface GameProtocols_ContextMembers {
  hasInfiniteMaterials(): boolean;
}
export type GameProtocols_Context = GameProtocols_ContextMembers;
export interface GameProtocols_ContextStatics {
}

/** JVM class net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket. */
export interface ServerboundAcceptTeleportationPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundAcceptTeleportationPacket>;
}
export type ServerboundAcceptTeleportationPacket = ServerboundAcceptTeleportationPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundAcceptTeleportationPacketStatics {
  new(arg0: number): ServerboundAcceptTeleportationPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundAcceptTeleportationPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket. */
export interface ServerboundBlockEntityTagQueryPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getPos(): j_net_minecraft_core.BlockPos;
  getTransactionId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundBlockEntityTagQueryPacket>;
}
export type ServerboundBlockEntityTagQueryPacket = ServerboundBlockEntityTagQueryPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundBlockEntityTagQueryPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_core.BlockPos): ServerboundBlockEntityTagQueryPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundBlockEntityTagQueryPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket. */
export interface ServerboundChangeDifficultyPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  difficulty(): j_net_minecraft_world.Difficulty;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChangeDifficultyPacket>;
}
export type ServerboundChangeDifficultyPacket = ServerboundChangeDifficultyPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChangeDifficultyPacketStatics {
  new(arg0: j_net_minecraft_world.Difficulty): ServerboundChangeDifficultyPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundChangeDifficultyPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChangeGameModePacket. */
export interface ServerboundChangeGameModePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  mode(): j_net_minecraft_world_level.GameType;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChangeGameModePacket>;
}
export type ServerboundChangeGameModePacket = ServerboundChangeGameModePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChangeGameModePacketStatics {
  new(arg0: j_net_minecraft_world_level.GameType): ServerboundChangeGameModePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundChangeGameModePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatAckPacket. */
export interface ServerboundChatAckPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  offset(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChatAckPacket>;
}
export type ServerboundChatAckPacket = ServerboundChatAckPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChatAckPacketStatics {
  new(arg0: number): ServerboundChatAckPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundChatAckPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatCommandPacket. */
export interface ServerboundChatCommandPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  command(): string;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChatCommandPacket>;
}
export type ServerboundChatCommandPacket = ServerboundChatCommandPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChatCommandPacketStatics {
  new(arg0: string): ServerboundChatCommandPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundChatCommandPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket. */
export interface ServerboundChatCommandSignedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  argumentSignatures(): j_net_minecraft_commands_arguments.ArgumentSignatures;
  command(): string;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  lastSeenMessages(): j_net_minecraft_network_chat.LastSeenMessages_Update;
  salt(): bigint;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChatCommandSignedPacket>;
}
export type ServerboundChatCommandSignedPacket = ServerboundChatCommandSignedPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChatCommandSignedPacketStatics {
  new(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: bigint, arg3: j_net_minecraft_commands_arguments.ArgumentSignatures, arg4: j_net_minecraft_network_chat.LastSeenMessages_Update): ServerboundChatCommandSignedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundChatCommandSignedPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatPacket. */
export interface ServerboundChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  lastSeenMessages(): j_net_minecraft_network_chat.LastSeenMessages_Update;
  message(): string;
  salt(): bigint;
  signature(): j_net_minecraft_network_chat.MessageSignature | null;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChatPacket>;
}
export type ServerboundChatPacket = ServerboundChatPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChatPacketStatics {
  new(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: bigint, arg3: j_net_minecraft_network_chat.MessageSignature | null, arg4: j_net_minecraft_network_chat.LastSeenMessages_Update): ServerboundChatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundChatPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket. */
export interface ServerboundChatSessionUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  chatSession(): j_net_minecraft_network_chat.RemoteChatSession_Data;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChatSessionUpdatePacket>;
}
export type ServerboundChatSessionUpdatePacket = ServerboundChatSessionUpdatePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChatSessionUpdatePacketStatics {
  new(arg0: j_net_minecraft_network_chat.RemoteChatSession_Data): ServerboundChatSessionUpdatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundChatSessionUpdatePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket. */
export interface ServerboundChunkBatchReceivedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  desiredChunksPerTick(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundChunkBatchReceivedPacket>;
}
export type ServerboundChunkBatchReceivedPacket = ServerboundChunkBatchReceivedPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundChunkBatchReceivedPacketStatics {
  new(arg0: number): ServerboundChunkBatchReceivedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundChunkBatchReceivedPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundClientCommandPacket. */
export interface ServerboundClientCommandPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getAction(): ServerboundClientCommandPacket_Action;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundClientCommandPacket>;
}
export type ServerboundClientCommandPacket = ServerboundClientCommandPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundClientCommandPacketStatics {
  new(arg0: ServerboundClientCommandPacket_Action): ServerboundClientCommandPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundClientCommandPacket>;
}

/** Live JVM enum net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action; constants are host handles, not strings. */
export type ServerboundClientCommandPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action", "PERFORM_RESPAWN" | "REQUEST_STATS"> & ServerboundClientCommandPacket_ActionMembers;
export interface ServerboundClientCommandPacket_ActionMembers {
}
export interface ServerboundClientCommandPacket_ActionStatics {
  readonly PERFORM_RESPAWN: ServerboundClientCommandPacket_Action;
  readonly REQUEST_STATS: ServerboundClientCommandPacket_Action;
  valueOf(arg0: string): ServerboundClientCommandPacket_Action;
  values(): Array<ServerboundClientCommandPacket_Action>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundClientTickEndPacket. */
export interface ServerboundClientTickEndPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundClientTickEndPacket>;
}
export type ServerboundClientTickEndPacket = ServerboundClientTickEndPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundClientTickEndPacketStatics {
  new(): ServerboundClientTickEndPacket;
  readonly INSTANCE: ServerboundClientTickEndPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundClientTickEndPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket. */
export interface ServerboundCommandSuggestionPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getCommand(): string;
  getId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundCommandSuggestionPacket>;
}
export type ServerboundCommandSuggestionPacket = ServerboundCommandSuggestionPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundCommandSuggestionPacketStatics {
  new(arg0: number, arg1: string): ServerboundCommandSuggestionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundCommandSuggestionPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket. */
export interface ServerboundConfigurationAcknowledgedPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isTerminal(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundConfigurationAcknowledgedPacket>;
}
export type ServerboundConfigurationAcknowledgedPacket = ServerboundConfigurationAcknowledgedPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundConfigurationAcknowledgedPacketStatics {
  readonly INSTANCE: ServerboundConfigurationAcknowledgedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundConfigurationAcknowledgedPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket. */
export interface ServerboundContainerButtonClickPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  buttonId(): number;
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundContainerButtonClickPacket>;
}
export type ServerboundContainerButtonClickPacket = ServerboundContainerButtonClickPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundContainerButtonClickPacketStatics {
  new(arg0: number, arg1: number): ServerboundContainerButtonClickPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundContainerButtonClickPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundContainerClickPacket. */
export interface ServerboundContainerClickPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  buttonNum(): number;
  carriedItem(): j_net_minecraft_network.HashedStack;
  changedSlots(): JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [j_net_minecraft_network.HashedStack]>;
  clickType(): j_net_minecraft_world_inventory.ClickType;
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  slotNum(): number;
  stateId(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundContainerClickPacket>;
}
export type ServerboundContainerClickPacket = ServerboundContainerClickPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundContainerClickPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_inventory.ClickType, arg5: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [j_net_minecraft_network.HashedStack]>, arg6: j_net_minecraft_network.HashedStack): ServerboundContainerClickPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ServerboundContainerClickPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundContainerClosePacket. */
export interface ServerboundContainerClosePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getContainerId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundContainerClosePacket>;
}
export type ServerboundContainerClosePacket = ServerboundContainerClosePacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundContainerClosePacketStatics {
  new(arg0: number): ServerboundContainerClosePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundContainerClosePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket. */
export interface ServerboundContainerSlotStateChangedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  newState(): boolean;
  slotId(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundContainerSlotStateChangedPacket>;
}
export type ServerboundContainerSlotStateChangedPacket = ServerboundContainerSlotStateChangedPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundContainerSlotStateChangedPacketStatics {
  new(arg0: number, arg1: number, arg2: boolean): ServerboundContainerSlotStateChangedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundContainerSlotStateChangedPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket. */
export interface ServerboundDebugSampleSubscriptionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  sampleType(): j_net_minecraft_util_debugchart.RemoteDebugSampleType;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundDebugSampleSubscriptionPacket>;
}
export type ServerboundDebugSampleSubscriptionPacket = ServerboundDebugSampleSubscriptionPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundDebugSampleSubscriptionPacketStatics {
  new(arg0: j_net_minecraft_util_debugchart.RemoteDebugSampleType): ServerboundDebugSampleSubscriptionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundDebugSampleSubscriptionPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundEditBookPacket. */
export interface ServerboundEditBookPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  pages(): JavaList<string>;
  slot(): number;
  title(): JavaOptional<string>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundEditBookPacket>;
}
export type ServerboundEditBookPacket = ServerboundEditBookPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundEditBookPacketStatics {
  new(arg0: number, arg1: JavaList<string>, arg2: JavaOptional<string>): ServerboundEditBookPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundEditBookPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket. */
export interface ServerboundEntityTagQueryPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getEntityId(): number;
  getTransactionId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundEntityTagQueryPacket>;
}
export type ServerboundEntityTagQueryPacket = ServerboundEntityTagQueryPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundEntityTagQueryPacketStatics {
  new(arg0: number, arg1: number): ServerboundEntityTagQueryPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundEntityTagQueryPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundInteractPacket. */
export interface ServerboundInteractPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  dispatch(arg0: ServerboundInteractPacket_Handler): void;
  getEntityId(): number;
  getTarget(arg0: j_net_minecraft_server_level.ServerLevel): j_net_minecraft_world_entity.Entity | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isAttack(): boolean;
  isUsingSecondaryAction(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundInteractPacket>;
}
export type ServerboundInteractPacket = ServerboundInteractPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundInteractPacketStatics {
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundInteractPacket>;
  createAttackPacket(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean): ServerboundInteractPacket;
  createInteractionPacket(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean, arg2: j_net_minecraft_world.InteractionHand): ServerboundInteractPacket;
  createInteractionPacket(arg0: j_net_minecraft_world_entity.Entity, arg1: boolean, arg2: j_net_minecraft_world.InteractionHand, arg3: j_net_minecraft_world_phys.Vec3): ServerboundInteractPacket;
}

/** JVM interface net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler. */
export interface ServerboundInteractPacket_HandlerMembers {
  onAttack(): void;
  onInteraction(arg0: j_net_minecraft_world.InteractionHand): void;
  onInteraction(arg0: j_net_minecraft_world.InteractionHand, arg1: j_net_minecraft_world_phys.Vec3): void;
}
export type ServerboundInteractPacket_Handler = ServerboundInteractPacket_HandlerMembers;
export interface ServerboundInteractPacket_HandlerStatics {
}

/** JVM class net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket. */
export interface ServerboundJigsawGeneratePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  keepJigsaws(): boolean;
  levels(): number;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundJigsawGeneratePacket>;
}
export type ServerboundJigsawGeneratePacket = ServerboundJigsawGeneratePacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundJigsawGeneratePacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: boolean): ServerboundJigsawGeneratePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundJigsawGeneratePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket. */
export interface ServerboundLockDifficultyPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isLocked(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundLockDifficultyPacket>;
}
export type ServerboundLockDifficultyPacket = ServerboundLockDifficultyPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundLockDifficultyPacketStatics {
  new(arg0: boolean): ServerboundLockDifficultyPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundLockDifficultyPacket>;
}

/** JVM abstract net.minecraft.network.protocol.game.ServerboundMovePlayerPacket. */
export interface ServerboundMovePlayerPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getX(arg0: number): number;
  getXRot(arg0: number): number;
  getY(arg0: number): number;
  getYRot(arg0: number): number;
  getZ(arg0: number): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  readonly hasPos: boolean;
  hasPosition(): boolean;
  readonly hasRot: boolean;
  hasRotation(): boolean;
  readonly horizontalCollision: (boolean) & { (): boolean };
  isOnGround(): boolean;
  readonly onGround: boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket>;
  readonly x: number;
  readonly xRot: number;
  readonly y: number;
  readonly yRot: number;
  readonly z: number;
}
export type ServerboundMovePlayerPacket = ServerboundMovePlayerPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundMovePlayerPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean): ServerboundMovePlayerPacket;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos. */
export interface ServerboundMovePlayerPacket_PosMembers {
  readonly __javaSupertypes?: readonly [ServerboundMovePlayerPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_Pos>;
}
export type ServerboundMovePlayerPacket_Pos = ServerboundMovePlayerPacket_PosMembers & ServerboundMovePlayerPacket;
export interface ServerboundMovePlayerPacket_PosStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): ServerboundMovePlayerPacket_Pos;
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: boolean, arg2: boolean): ServerboundMovePlayerPacket_Pos;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundMovePlayerPacket_Pos>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot. */
export interface ServerboundMovePlayerPacket_PosRotMembers {
  readonly __javaSupertypes?: readonly [ServerboundMovePlayerPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_PosRot>;
}
export type ServerboundMovePlayerPacket_PosRot = ServerboundMovePlayerPacket_PosRotMembers & ServerboundMovePlayerPacket;
export interface ServerboundMovePlayerPacket_PosRotStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): ServerboundMovePlayerPacket_PosRot;
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number, arg3: boolean, arg4: boolean): ServerboundMovePlayerPacket_PosRot;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundMovePlayerPacket_PosRot>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot. */
export interface ServerboundMovePlayerPacket_RotMembers {
  readonly __javaSupertypes?: readonly [ServerboundMovePlayerPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_Rot>;
}
export type ServerboundMovePlayerPacket_Rot = ServerboundMovePlayerPacket_RotMembers & ServerboundMovePlayerPacket;
export interface ServerboundMovePlayerPacket_RotStatics {
  new(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ServerboundMovePlayerPacket_Rot;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundMovePlayerPacket_Rot>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly. */
export interface ServerboundMovePlayerPacket_StatusOnlyMembers {
  readonly __javaSupertypes?: readonly [ServerboundMovePlayerPacket];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundMovePlayerPacket_StatusOnly>;
}
export type ServerboundMovePlayerPacket_StatusOnly = ServerboundMovePlayerPacket_StatusOnlyMembers & ServerboundMovePlayerPacket;
export interface ServerboundMovePlayerPacket_StatusOnlyStatics {
  new(arg0: boolean, arg1: boolean): ServerboundMovePlayerPacket_StatusOnly;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundMovePlayerPacket_StatusOnly>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket. */
export interface ServerboundMoveVehiclePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  onGround(): boolean;
  position(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundMoveVehiclePacket>;
  xRot(): number;
  yRot(): number;
}
export type ServerboundMoveVehiclePacket = ServerboundMoveVehiclePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundMoveVehiclePacketStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number, arg3: boolean): ServerboundMoveVehiclePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundMoveVehiclePacket>;
  fromEntity(arg0: j_net_minecraft_world_entity.Entity): ServerboundMoveVehiclePacket;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket. */
export interface ServerboundPaddleBoatPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getLeft(): boolean;
  getRight(): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPaddleBoatPacket>;
}
export type ServerboundPaddleBoatPacket = ServerboundPaddleBoatPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPaddleBoatPacketStatics {
  new(arg0: boolean, arg1: boolean): ServerboundPaddleBoatPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPaddleBoatPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket. */
export interface ServerboundPickItemFromBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  includeData(): boolean;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPickItemFromBlockPacket>;
}
export type ServerboundPickItemFromBlockPacket = ServerboundPickItemFromBlockPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPickItemFromBlockPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): ServerboundPickItemFromBlockPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPickItemFromBlockPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket. */
export interface ServerboundPickItemFromEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  id(): number;
  includeData(): boolean;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPickItemFromEntityPacket>;
}
export type ServerboundPickItemFromEntityPacket = ServerboundPickItemFromEntityPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPickItemFromEntityPacketStatics {
  new(arg0: number, arg1: boolean): ServerboundPickItemFromEntityPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPickItemFromEntityPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket. */
export interface ServerboundPlaceRecipePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  recipe(): j_net_minecraft_world_item_crafting_display.RecipeDisplayId;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPlaceRecipePacket>;
  useMaxItems(): boolean;
}
export type ServerboundPlaceRecipePacket = ServerboundPlaceRecipePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPlaceRecipePacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item_crafting_display.RecipeDisplayId, arg2: boolean): ServerboundPlaceRecipePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPlaceRecipePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket. */
export interface ServerboundPlayerAbilitiesPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isFlying(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPlayerAbilitiesPacket>;
}
export type ServerboundPlayerAbilitiesPacket = ServerboundPlayerAbilitiesPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPlayerAbilitiesPacketStatics {
  new(arg0: j_net_minecraft_world_entity_player.Abilities): ServerboundPlayerAbilitiesPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPlayerAbilitiesPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPlayerActionPacket. */
export interface ServerboundPlayerActionPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getAction(): ServerboundPlayerActionPacket_Action;
  getDirection(): j_net_minecraft_core.Direction;
  getPos(): j_net_minecraft_core.BlockPos;
  getSequence(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPlayerActionPacket>;
}
export type ServerboundPlayerActionPacket = ServerboundPlayerActionPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPlayerActionPacketStatics {
  new(arg0: ServerboundPlayerActionPacket_Action, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): ServerboundPlayerActionPacket;
  new(arg0: ServerboundPlayerActionPacket_Action, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: number): ServerboundPlayerActionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPlayerActionPacket>;
}

/** Live JVM enum net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action; constants are host handles, not strings. */
export type ServerboundPlayerActionPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action", "ABORT_DESTROY_BLOCK" | "DROP_ALL_ITEMS" | "DROP_ITEM" | "RELEASE_USE_ITEM" | "START_DESTROY_BLOCK" | "STOP_DESTROY_BLOCK" | "SWAP_ITEM_WITH_OFFHAND"> & ServerboundPlayerActionPacket_ActionMembers;
export interface ServerboundPlayerActionPacket_ActionMembers {
}
export interface ServerboundPlayerActionPacket_ActionStatics {
  readonly ABORT_DESTROY_BLOCK: ServerboundPlayerActionPacket_Action;
  readonly DROP_ALL_ITEMS: ServerboundPlayerActionPacket_Action;
  readonly DROP_ITEM: ServerboundPlayerActionPacket_Action;
  readonly RELEASE_USE_ITEM: ServerboundPlayerActionPacket_Action;
  readonly START_DESTROY_BLOCK: ServerboundPlayerActionPacket_Action;
  readonly STOP_DESTROY_BLOCK: ServerboundPlayerActionPacket_Action;
  readonly SWAP_ITEM_WITH_OFFHAND: ServerboundPlayerActionPacket_Action;
  valueOf(arg0: string): ServerboundPlayerActionPacket_Action;
  values(): Array<ServerboundPlayerActionPacket_Action>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket. */
export interface ServerboundPlayerCommandPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getAction(): ServerboundPlayerCommandPacket_Action;
  getData(): number;
  getId(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPlayerCommandPacket>;
}
export type ServerboundPlayerCommandPacket = ServerboundPlayerCommandPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPlayerCommandPacketStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: ServerboundPlayerCommandPacket_Action): ServerboundPlayerCommandPacket;
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: ServerboundPlayerCommandPacket_Action, arg2: number): ServerboundPlayerCommandPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPlayerCommandPacket>;
}

/** Live JVM enum net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action; constants are host handles, not strings. */
export type ServerboundPlayerCommandPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action", "OPEN_INVENTORY" | "START_FALL_FLYING" | "START_RIDING_JUMP" | "START_SPRINTING" | "STOP_RIDING_JUMP" | "STOP_SLEEPING" | "STOP_SPRINTING"> & ServerboundPlayerCommandPacket_ActionMembers;
export interface ServerboundPlayerCommandPacket_ActionMembers {
}
export interface ServerboundPlayerCommandPacket_ActionStatics {
  readonly OPEN_INVENTORY: ServerboundPlayerCommandPacket_Action;
  readonly START_FALL_FLYING: ServerboundPlayerCommandPacket_Action;
  readonly START_RIDING_JUMP: ServerboundPlayerCommandPacket_Action;
  readonly START_SPRINTING: ServerboundPlayerCommandPacket_Action;
  readonly STOP_RIDING_JUMP: ServerboundPlayerCommandPacket_Action;
  readonly STOP_SLEEPING: ServerboundPlayerCommandPacket_Action;
  readonly STOP_SPRINTING: ServerboundPlayerCommandPacket_Action;
  valueOf(arg0: string): ServerboundPlayerCommandPacket_Action;
  values(): Array<ServerboundPlayerCommandPacket_Action>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPlayerInputPacket. */
export interface ServerboundPlayerInputPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  input(): j_net_minecraft_world_entity_player.Input_2;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPlayerInputPacket>;
}
export type ServerboundPlayerInputPacket = ServerboundPlayerInputPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPlayerInputPacketStatics {
  new(arg0: j_net_minecraft_world_entity_player.Input_2): ServerboundPlayerInputPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundPlayerInputPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket. */
export interface ServerboundPlayerLoadedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundPlayerLoadedPacket>;
}
export type ServerboundPlayerLoadedPacket = ServerboundPlayerLoadedPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundPlayerLoadedPacketStatics {
  new(): ServerboundPlayerLoadedPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPlayerLoadedPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket. */
export interface ServerboundRecipeBookChangeSettingsPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getBookType(): j_net_minecraft_world_inventory.RecipeBookType;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isFiltering(): boolean;
  isOpen(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundRecipeBookChangeSettingsPacket>;
}
export type ServerboundRecipeBookChangeSettingsPacket = ServerboundRecipeBookChangeSettingsPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundRecipeBookChangeSettingsPacketStatics {
  new(arg0: j_net_minecraft_world_inventory.RecipeBookType, arg1: boolean, arg2: boolean): ServerboundRecipeBookChangeSettingsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundRecipeBookChangeSettingsPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket. */
export interface ServerboundRecipeBookSeenRecipePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  recipe(): j_net_minecraft_world_item_crafting_display.RecipeDisplayId;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundRecipeBookSeenRecipePacket>;
}
export type ServerboundRecipeBookSeenRecipePacket = ServerboundRecipeBookSeenRecipePacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundRecipeBookSeenRecipePacketStatics {
  new(arg0: j_net_minecraft_world_item_crafting_display.RecipeDisplayId): ServerboundRecipeBookSeenRecipePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundRecipeBookSeenRecipePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundRenameItemPacket. */
export interface ServerboundRenameItemPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getName(): string;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundRenameItemPacket>;
}
export type ServerboundRenameItemPacket = ServerboundRenameItemPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundRenameItemPacketStatics {
  new(arg0: string): ServerboundRenameItemPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundRenameItemPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket. */
export interface ServerboundSeenAdvancementsPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getAction(): ServerboundSeenAdvancementsPacket_Action;
  getTab(): j_net_minecraft_resources.ResourceLocation | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSeenAdvancementsPacket>;
}
export type ServerboundSeenAdvancementsPacket = ServerboundSeenAdvancementsPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSeenAdvancementsPacketStatics {
  new(arg0: ServerboundSeenAdvancementsPacket_Action, arg1: j_net_minecraft_resources.ResourceLocation | null): ServerboundSeenAdvancementsPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSeenAdvancementsPacket>;
  closedScreen(): ServerboundSeenAdvancementsPacket;
  openedTab(arg0: j_net_minecraft_advancements.AdvancementHolder): ServerboundSeenAdvancementsPacket;
}

/** Live JVM enum net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action; constants are host handles, not strings. */
export type ServerboundSeenAdvancementsPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action", "CLOSED_SCREEN" | "OPENED_TAB"> & ServerboundSeenAdvancementsPacket_ActionMembers;
export interface ServerboundSeenAdvancementsPacket_ActionMembers {
}
export interface ServerboundSeenAdvancementsPacket_ActionStatics {
  readonly CLOSED_SCREEN: ServerboundSeenAdvancementsPacket_Action;
  readonly OPENED_TAB: ServerboundSeenAdvancementsPacket_Action;
  valueOf(arg0: string): ServerboundSeenAdvancementsPacket_Action;
  values(): Array<ServerboundSeenAdvancementsPacket_Action>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket. */
export interface ServerboundSelectBundleItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  selectedItemIndex(): number;
  slotId(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSelectBundleItemPacket>;
}
export type ServerboundSelectBundleItemPacket = ServerboundSelectBundleItemPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSelectBundleItemPacketStatics {
  new(arg0: number, arg1: number): ServerboundSelectBundleItemPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSelectBundleItemPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSelectTradePacket. */
export interface ServerboundSelectTradePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getItem(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSelectTradePacket>;
}
export type ServerboundSelectTradePacket = ServerboundSelectTradePacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSelectTradePacketStatics {
  new(arg0: number): ServerboundSelectTradePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSelectTradePacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSetBeaconPacket. */
export interface ServerboundSetBeaconPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  primary(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>;
  secondary(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetBeaconPacket>;
}
export type ServerboundSetBeaconPacket = ServerboundSetBeaconPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetBeaconPacketStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>): ServerboundSetBeaconPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ServerboundSetBeaconPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket. */
export interface ServerboundSetCarriedItemPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getSlot(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetCarriedItemPacket>;
}
export type ServerboundSetCarriedItemPacket = ServerboundSetCarriedItemPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetCarriedItemPacketStatics {
  new(arg0: number): ServerboundSetCarriedItemPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSetCarriedItemPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket. */
export interface ServerboundSetCommandBlockPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getCommand(): string;
  getMode(): j_net_minecraft_world_level_block_entity.CommandBlockEntity_Mode;
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isAutomatic(): boolean;
  isConditional(): boolean;
  isTrackOutput(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetCommandBlockPacket>;
}
export type ServerboundSetCommandBlockPacket = ServerboundSetCommandBlockPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetCommandBlockPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: string, arg2: j_net_minecraft_world_level_block_entity.CommandBlockEntity_Mode, arg3: boolean, arg4: boolean, arg5: boolean): ServerboundSetCommandBlockPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSetCommandBlockPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket. */
export interface ServerboundSetCommandMinecartPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getCommand(): string;
  getCommandBlock(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_level.BaseCommandBlock | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isTrackOutput(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetCommandMinecartPacket>;
}
export type ServerboundSetCommandMinecartPacket = ServerboundSetCommandMinecartPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetCommandMinecartPacketStatics {
  new(arg0: number, arg1: string, arg2: boolean): ServerboundSetCommandMinecartPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSetCommandMinecartPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket. */
export interface ServerboundSetCreativeModeSlotPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  itemStack(): j_net_minecraft_world_item.ItemStack;
  slotNum(): number;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetCreativeModeSlotPacket>;
}
export type ServerboundSetCreativeModeSlotPacket = ServerboundSetCreativeModeSlotPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetCreativeModeSlotPacketStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): ServerboundSetCreativeModeSlotPacket;
  new(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): ServerboundSetCreativeModeSlotPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ServerboundSetCreativeModeSlotPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket. */
export interface ServerboundSetJigsawBlockPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getFinalState(): string;
  getJoint(): j_net_minecraft_world_level_block_entity.JigsawBlockEntity_JointType;
  getName(): j_net_minecraft_resources.ResourceLocation;
  getPlacementPriority(): number;
  getPool(): j_net_minecraft_resources.ResourceLocation;
  getPos(): j_net_minecraft_core.BlockPos;
  getSelectionPriority(): number;
  getTarget(): j_net_minecraft_resources.ResourceLocation;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetJigsawBlockPacket>;
}
export type ServerboundSetJigsawBlockPacket = ServerboundSetJigsawBlockPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetJigsawBlockPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_resources.ResourceLocation, arg3: j_net_minecraft_resources.ResourceLocation, arg4: string, arg5: j_net_minecraft_world_level_block_entity.JigsawBlockEntity_JointType, arg6: number, arg7: number): ServerboundSetJigsawBlockPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSetJigsawBlockPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket. */
export interface ServerboundSetStructureBlockPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getData(): string;
  getIntegrity(): number;
  getMirror(): j_net_minecraft_world_level_block.Mirror;
  getMode(): j_net_minecraft_world_level_block_state_properties.StructureMode;
  getName(): string;
  getOffset(): j_net_minecraft_core.BlockPos;
  getPos(): j_net_minecraft_core.BlockPos;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  getSeed(): bigint;
  getSize(): j_net_minecraft_core.Vec3i;
  getUpdateType(): j_net_minecraft_world_level_block_entity.StructureBlockEntity_UpdateType;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isIgnoreEntities(): boolean;
  isShowAir(): boolean;
  isShowBoundingBox(): boolean;
  isStrict(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetStructureBlockPacket>;
}
export type ServerboundSetStructureBlockPacket = ServerboundSetStructureBlockPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetStructureBlockPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_entity.StructureBlockEntity_UpdateType, arg2: j_net_minecraft_world_level_block_state_properties.StructureMode, arg3: string, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_core.Vec3i, arg6: j_net_minecraft_world_level_block.Mirror, arg7: j_net_minecraft_world_level_block.Rotation, arg8: string, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: number, arg14: bigint): ServerboundSetStructureBlockPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSetStructureBlockPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket. */
export interface ServerboundSetTestBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  message(): string;
  mode(): j_net_minecraft_world_level_block_state_properties.TestBlockMode;
  position(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSetTestBlockPacket>;
}
export type ServerboundSetTestBlockPacket = ServerboundSetTestBlockPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSetTestBlockPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.TestBlockMode, arg2: string): ServerboundSetTestBlockPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSetTestBlockPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSignUpdatePacket. */
export interface ServerboundSignUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getLines(): Array<string>;
  getPos(): j_net_minecraft_core.BlockPos;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  isFrontText(): boolean;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSignUpdatePacket>;
}
export type ServerboundSignUpdatePacket = ServerboundSignUpdatePacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSignUpdatePacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: boolean, arg2: string, arg3: string, arg4: string, arg5: string): ServerboundSignUpdatePacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSignUpdatePacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSwingPacket. */
export interface ServerboundSwingPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getHand(): j_net_minecraft_world.InteractionHand;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundSwingPacket>;
}
export type ServerboundSwingPacket = ServerboundSwingPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundSwingPacketStatics {
  new(arg0: j_net_minecraft_world.InteractionHand): ServerboundSwingPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundSwingPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket. */
export interface ServerboundTeleportToEntityPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getEntity(arg0: j_net_minecraft_server_level.ServerLevel): j_net_minecraft_world_entity.Entity | null;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundTeleportToEntityPacket>;
}
export type ServerboundTeleportToEntityPacket = ServerboundTeleportToEntityPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundTeleportToEntityPacketStatics {
  new(arg0: JavaOpaque<"java.util.UUID">): ServerboundTeleportToEntityPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundTeleportToEntityPacket>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket. */
export interface ServerboundTestInstanceBlockActionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  action(): ServerboundTestInstanceBlockActionPacket_Action;
  data(): j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity_Data;
  equals(arg0: object): boolean;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundTestInstanceBlockActionPacket>;
}
export type ServerboundTestInstanceBlockActionPacket = ServerboundTestInstanceBlockActionPacketMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundTestInstanceBlockActionPacketStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: ServerboundTestInstanceBlockActionPacket_Action, arg2: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_gametest_framework.GameTestInstance>>, arg3: j_net_minecraft_core.Vec3i, arg4: j_net_minecraft_world_level_block.Rotation, arg5: boolean): ServerboundTestInstanceBlockActionPacket;
  new(arg0: j_net_minecraft_core.BlockPos, arg1: ServerboundTestInstanceBlockActionPacket_Action, arg2: j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity_Data): ServerboundTestInstanceBlockActionPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ServerboundTestInstanceBlockActionPacket>;
}

/** Live JVM enum net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action; constants are host handles, not strings. */
export type ServerboundTestInstanceBlockActionPacket_Action = JavaEnum<"net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action", "EXPORT" | "INIT" | "QUERY" | "RESET" | "RUN" | "SAVE" | "SET"> & ServerboundTestInstanceBlockActionPacket_ActionMembers;
export interface ServerboundTestInstanceBlockActionPacket_ActionMembers {
}
export interface ServerboundTestInstanceBlockActionPacket_ActionStatics {
  readonly EXPORT: ServerboundTestInstanceBlockActionPacket_Action;
  readonly INIT: ServerboundTestInstanceBlockActionPacket_Action;
  readonly QUERY: ServerboundTestInstanceBlockActionPacket_Action;
  readonly RESET: ServerboundTestInstanceBlockActionPacket_Action;
  readonly RUN: ServerboundTestInstanceBlockActionPacket_Action;
  readonly SAVE: ServerboundTestInstanceBlockActionPacket_Action;
  readonly SET: ServerboundTestInstanceBlockActionPacket_Action;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundTestInstanceBlockActionPacket_Action>;
  valueOf(arg0: string): ServerboundTestInstanceBlockActionPacket_Action;
  values(): Array<ServerboundTestInstanceBlockActionPacket_Action>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundUseItemOnPacket. */
export interface ServerboundUseItemOnPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getHand(): j_net_minecraft_world.InteractionHand;
  getHitResult(): j_net_minecraft_world_phys.BlockHitResult;
  getSequence(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  timestamp: bigint;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundUseItemOnPacket>;
}
export type ServerboundUseItemOnPacket = ServerboundUseItemOnPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundUseItemOnPacketStatics {
  new(arg0: j_net_minecraft_world.InteractionHand, arg1: j_net_minecraft_world_phys.BlockHitResult, arg2: number): ServerboundUseItemOnPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundUseItemOnPacket>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundUseItemPacket. */
export interface ServerboundUseItemPacketMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>];
  getHand(): j_net_minecraft_world.InteractionHand;
  getSequence(): number;
  getXRot(): number;
  getYRot(): number;
  handle(arg0: j_net_minecraft_network.PacketListener): void;
  handle(arg0: ServerGamePacketListener): void;
  timestamp: bigint;
  type(): j_net_minecraft_network_protocol.PacketType<ServerboundUseItemPacket>;
}
export type ServerboundUseItemPacket = ServerboundUseItemPacketMembers & j_net_minecraft_network_protocol.Packet<ServerGamePacketListener>;
export interface ServerboundUseItemPacketStatics {
  new(arg0: j_net_minecraft_world.InteractionHand, arg1: number, arg2: number, arg3: number): ServerboundUseItemPacket;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, ServerboundUseItemPacket>;
}

/** JVM interface net.minecraft.network.protocol.game.ServerGamePacketListener. */
export interface ServerGamePacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_common.ServerCommonPacketListener, j_net_minecraft_network_protocol_ping.ServerPingPacketListener];
  handleAcceptPlayerLoad(arg0: ServerboundPlayerLoadedPacket): void;
  handleAcceptTeleportPacket(arg0: ServerboundAcceptTeleportationPacket): void;
  handleAnimate(arg0: ServerboundSwingPacket): void;
  handleBlockEntityTagQuery(arg0: ServerboundBlockEntityTagQueryPacket): void;
  handleBundleItemSelectedPacket(arg0: ServerboundSelectBundleItemPacket): void;
  handleChangeDifficulty(arg0: ServerboundChangeDifficultyPacket): void;
  handleChangeGameMode(arg0: ServerboundChangeGameModePacket): void;
  handleChat(arg0: ServerboundChatPacket): void;
  handleChatAck(arg0: ServerboundChatAckPacket): void;
  handleChatCommand(arg0: ServerboundChatCommandPacket): void;
  handleChatSessionUpdate(arg0: ServerboundChatSessionUpdatePacket): void;
  handleChunkBatchReceived(arg0: ServerboundChunkBatchReceivedPacket): void;
  handleClientCommand(arg0: ServerboundClientCommandPacket): void;
  handleClientTickEnd(arg0: ServerboundClientTickEndPacket): void;
  handleConfigurationAcknowledged(arg0: ServerboundConfigurationAcknowledgedPacket): void;
  handleContainerButtonClick(arg0: ServerboundContainerButtonClickPacket): void;
  handleContainerClick(arg0: ServerboundContainerClickPacket): void;
  handleContainerClose(arg0: ServerboundContainerClosePacket): void;
  handleContainerSlotStateChanged(arg0: ServerboundContainerSlotStateChangedPacket): void;
  handleCustomCommandSuggestions(arg0: ServerboundCommandSuggestionPacket): void;
  handleDebugSampleSubscription(arg0: ServerboundDebugSampleSubscriptionPacket): void;
  handleEditBook(arg0: ServerboundEditBookPacket): void;
  handleEntityTagQuery(arg0: ServerboundEntityTagQueryPacket): void;
  handleInteract(arg0: ServerboundInteractPacket): void;
  handleJigsawGenerate(arg0: ServerboundJigsawGeneratePacket): void;
  handleLockDifficulty(arg0: ServerboundLockDifficultyPacket): void;
  handleMovePlayer(arg0: ServerboundMovePlayerPacket): void;
  handleMoveVehicle(arg0: ServerboundMoveVehiclePacket): void;
  handlePaddleBoat(arg0: ServerboundPaddleBoatPacket): void;
  handlePickItemFromBlock(arg0: ServerboundPickItemFromBlockPacket): void;
  handlePickItemFromEntity(arg0: ServerboundPickItemFromEntityPacket): void;
  handlePlaceRecipe(arg0: ServerboundPlaceRecipePacket): void;
  handlePlayerAbilities(arg0: ServerboundPlayerAbilitiesPacket): void;
  handlePlayerAction(arg0: ServerboundPlayerActionPacket): void;
  handlePlayerCommand(arg0: ServerboundPlayerCommandPacket): void;
  handlePlayerInput(arg0: ServerboundPlayerInputPacket): void;
  handleRecipeBookChangeSettingsPacket(arg0: ServerboundRecipeBookChangeSettingsPacket): void;
  handleRecipeBookSeenRecipePacket(arg0: ServerboundRecipeBookSeenRecipePacket): void;
  handleRenameItem(arg0: ServerboundRenameItemPacket): void;
  handleSeenAdvancements(arg0: ServerboundSeenAdvancementsPacket): void;
  handleSelectTrade(arg0: ServerboundSelectTradePacket): void;
  handleSetBeaconPacket(arg0: ServerboundSetBeaconPacket): void;
  handleSetCarriedItem(arg0: ServerboundSetCarriedItemPacket): void;
  handleSetCommandBlock(arg0: ServerboundSetCommandBlockPacket): void;
  handleSetCommandMinecart(arg0: ServerboundSetCommandMinecartPacket): void;
  handleSetCreativeModeSlot(arg0: ServerboundSetCreativeModeSlotPacket): void;
  handleSetJigsawBlock(arg0: ServerboundSetJigsawBlockPacket): void;
  handleSetStructureBlock(arg0: ServerboundSetStructureBlockPacket): void;
  handleSetTestBlock(arg0: ServerboundSetTestBlockPacket): void;
  handleSignUpdate(arg0: ServerboundSignUpdatePacket): void;
  handleSignedChatCommand(arg0: ServerboundChatCommandSignedPacket): void;
  handleTeleportToEntityPacket(arg0: ServerboundTeleportToEntityPacket): void;
  handleTestInstanceBlockAction(arg0: ServerboundTestInstanceBlockActionPacket): void;
  handleUseItem(arg0: ServerboundUseItemPacket): void;
  handleUseItemOn(arg0: ServerboundUseItemOnPacket): void;
  protocol(): j_net_minecraft_network.ConnectionProtocol;
}
export type ServerGamePacketListener = ServerGamePacketListenerMembers & j_net_minecraft_network_protocol_common.ServerCommonPacketListener & j_net_minecraft_network_protocol_ping.ServerPingPacketListener;
export interface ServerGamePacketListenerStatics {
}

/** JVM interface net.minecraft.network.protocol.game.ServerPacketListener. */
export interface ServerPacketListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.ServerboundPacketListener];
  /** @throws net.minecraft.ReportedException */
  onPacketError(arg0: j_net_minecraft_network_protocol.Packet, arg1: JavaOpaque<"java.lang.Exception">): void;
}
export type ServerPacketListener = ServerPacketListenerMembers & j_net_minecraft_network.ServerboundPacketListener;
export interface ServerPacketListenerStatics {
  readonly LOGGER: JavaOpaque<"org.slf4j.Logger">;
}

/** JVM class net.minecraft.network.protocol.game.VecDeltaCodec. */
export interface VecDeltaCodecMembers {
  base: j_net_minecraft_world_phys.Vec3;
  decode(arg0: bigint, arg1: bigint, arg2: bigint): j_net_minecraft_world_phys.Vec3;
  delta(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  encodeX(arg0: j_net_minecraft_world_phys.Vec3): bigint;
  encodeY(arg0: j_net_minecraft_world_phys.Vec3): bigint;
  encodeZ(arg0: j_net_minecraft_world_phys.Vec3): bigint;
  getBase(): j_net_minecraft_world_phys.Vec3;
  setBase(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type VecDeltaCodec = VecDeltaCodecMembers;
export interface VecDeltaCodecStatics {
  new(): VecDeltaCodec;
}
