// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.network.protocol.game.ClientboundAddEntityPacket. */
export interface ClientboundAddEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getData(): number;
  getId(): number;
  getType(): JavaOpaque<"net.minecraft.world.entity.EntityType", [object]>;
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
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundAddEntityPacket]>;
}
export type ClientboundAddEntityPacket = ClientboundAddEntityPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundAddEntityPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.UUID">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: JavaOpaque<"net.minecraft.world.entity.EntityType", [object]>, arg8: number, arg9: JavaOpaque<"net.minecraft.world.phys.Vec3">, arg10: number): ClientboundAddEntityPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: number, arg2: JavaOpaque<"net.minecraft.core.BlockPos">): ClientboundAddEntityPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: JavaOpaque<"net.minecraft.server.level.ServerEntity">): ClientboundAddEntityPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: JavaOpaque<"net.minecraft.server.level.ServerEntity">, arg2: number): ClientboundAddEntityPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundAddEntityPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundAnimatePacket. */
export interface ClientboundAnimatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getAction(): number;
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundAnimatePacket]>;
}
export type ClientboundAnimatePacket = ClientboundAnimatePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundAnimatePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: number): ClientboundAnimatePacket;
  readonly CRITICAL_HIT: 4;
  readonly MAGIC_CRITICAL_HIT: 5;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundAnimatePacket]>;
  readonly SWING_MAIN_HAND: 0;
  readonly SWING_OFF_HAND: 3;
  readonly WAKE_UP: 2;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundAwardStatsPacket. */
export interface ClientboundAwardStatsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  stats(): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [JavaOpaque<"net.minecraft.stats.Stat", [object]>]>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundAwardStatsPacket]>;
}
export type ClientboundAwardStatsPacket = ClientboundAwardStatsPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundAwardStatsPacketStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [JavaOpaque<"net.minecraft.stats.Stat", [object]>]>): ClientboundAwardStatsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundAwardStatsPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket. */
export interface ClientboundBlockChangedAckPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  sequence(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBlockChangedAckPacket]>;
}
export type ClientboundBlockChangedAckPacket = ClientboundBlockChangedAckPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBlockChangedAckPacketStatics {
  new(arg0: number): ClientboundBlockChangedAckPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundBlockChangedAckPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket. */
export interface ClientboundBlockDestructionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getId(): number;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getProgress(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBlockDestructionPacket]>;
}
export type ClientboundBlockDestructionPacket = ClientboundBlockDestructionPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBlockDestructionPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.core.BlockPos">, arg2: number): ClientboundBlockDestructionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundBlockDestructionPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket. */
export interface ClientboundBlockEntityDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getTag(): JavaOpaque<"net.minecraft.nbt.CompoundTag">;
  getType(): JavaOpaque<"net.minecraft.world.level.block.entity.BlockEntityType", [object]>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBlockEntityDataPacket]>;
}
export type ClientboundBlockEntityDataPacket = ClientboundBlockEntityDataPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBlockEntityDataPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.world.level.block.entity.BlockEntityType", [object]>, arg2: JavaOpaque<"net.minecraft.nbt.CompoundTag">): ClientboundBlockEntityDataPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundBlockEntityDataPacket]>;
  create(arg0: JavaOpaque<"net.minecraft.world.level.block.entity.BlockEntity">): ClientboundBlockEntityDataPacket;
  create(arg0: JavaOpaque<"net.minecraft.world.level.block.entity.BlockEntity">, arg1: JavaBiFunction<JavaOpaque<"net.minecraft.world.level.block.entity.BlockEntity">, JavaOpaque<"net.minecraft.core.RegistryAccess">, JavaOpaque<"net.minecraft.nbt.CompoundTag">>): ClientboundBlockEntityDataPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockEventPacket. */
export interface ClientboundBlockEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getB0(): number;
  getB1(): number;
  getBlock(): JavaOpaque<"net.minecraft.world.level.block.Block">;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBlockEventPacket]>;
}
export type ClientboundBlockEventPacket = ClientboundBlockEventPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBlockEventPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.world.level.block.Block">, arg2: number, arg3: number): ClientboundBlockEventPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundBlockEventPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket. */
export interface ClientboundBlockUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  readonly blockState: JavaOpaque<"net.minecraft.world.level.block.state.BlockState">;
  getBlockState(): JavaOpaque<"net.minecraft.world.level.block.state.BlockState">;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBlockUpdatePacket]>;
}
export type ClientboundBlockUpdatePacket = ClientboundBlockUpdatePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBlockUpdatePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.world.level.block.state.BlockState">): ClientboundBlockUpdatePacket;
  new(arg0: JavaOpaque<"net.minecraft.world.level.BlockGetter">, arg1: JavaOpaque<"net.minecraft.core.BlockPos">): ClientboundBlockUpdatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundBlockUpdatePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBossEventPacket. */
export interface ClientboundBossEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  dispatch(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler">): void;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBossEventPacket]>;
}
export type ClientboundBossEventPacket = ClientboundBossEventPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBossEventPacketStatics {
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundBossEventPacket]>;
  createAddPacket(arg0: JavaOpaque<"net.minecraft.world.BossEvent">): ClientboundBossEventPacket;
  createRemovePacket(arg0: JavaOpaque<"java.util.UUID">): ClientboundBossEventPacket;
  createUpdateNamePacket(arg0: JavaOpaque<"net.minecraft.world.BossEvent">): ClientboundBossEventPacket;
  createUpdateProgressPacket(arg0: JavaOpaque<"net.minecraft.world.BossEvent">): ClientboundBossEventPacket;
  createUpdatePropertiesPacket(arg0: JavaOpaque<"net.minecraft.world.BossEvent">): ClientboundBossEventPacket;
  createUpdateStylePacket(arg0: JavaOpaque<"net.minecraft.world.BossEvent">): ClientboundBossEventPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket. */
export interface ClientboundBundleDelimiterPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.BundleDelimiterPacket", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundBundleDelimiterPacket]>;
}
export type ClientboundBundleDelimiterPacket = ClientboundBundleDelimiterPacketMembers & JavaOpaque<"net.minecraft.network.protocol.BundleDelimiterPacket", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundBundleDelimiterPacketStatics {
  new(): ClientboundBundleDelimiterPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket. */
export interface ClientboundChangeDifficultyPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  difficulty(): JavaOpaque<"net.minecraft.world.Difficulty">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  locked(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundChangeDifficultyPacket]>;
}
export type ClientboundChangeDifficultyPacket = ClientboundChangeDifficultyPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundChangeDifficultyPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.Difficulty">, arg1: boolean): ClientboundChangeDifficultyPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundChangeDifficultyPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket. */
export interface ClientboundChunkBatchFinishedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  batchSize(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundChunkBatchFinishedPacket]>;
}
export type ClientboundChunkBatchFinishedPacket = ClientboundChunkBatchFinishedPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundChunkBatchFinishedPacketStatics {
  new(arg0: number): ClientboundChunkBatchFinishedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundChunkBatchFinishedPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket. */
export interface ClientboundChunkBatchStartPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundChunkBatchStartPacket]>;
}
export type ClientboundChunkBatchStartPacket = ClientboundChunkBatchStartPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundChunkBatchStartPacketStatics {
  readonly INSTANCE: ClientboundChunkBatchStartPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundChunkBatchStartPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket. */
export interface ClientboundChunksBiomesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  chunkBiomeData(): JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData">>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundChunksBiomesPacket]>;
}
export type ClientboundChunksBiomesPacket = ClientboundChunksBiomesPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundChunksBiomesPacketStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData">>): ClientboundChunksBiomesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundChunksBiomesPacket]>;
  forChunks(arg0: JavaList<JavaOpaque<"net.minecraft.world.level.chunk.LevelChunk">>): ClientboundChunksBiomesPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundClearTitlesPacket. */
export interface ClientboundClearTitlesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  shouldResetTimes(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundClearTitlesPacket]>;
}
export type ClientboundClearTitlesPacket = ClientboundClearTitlesPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundClearTitlesPacketStatics {
  new(arg0: boolean): ClientboundClearTitlesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundClearTitlesPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundCommandsPacket. */
export interface ClientboundCommandsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getRoot<S>(arg0: JavaOpaque<"net.minecraft.commands.CommandBuildContext">, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundCommandsPacket$NodeBuilder", [S]>): JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCommandsPacket]>;
}
export type ClientboundCommandsPacket = ClientboundCommandsPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundCommandsPacketStatics {
  new<S>(arg0: JavaOpaque<"com.mojang.brigadier.tree.RootCommandNode", [S]>, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundCommandsPacket$NodeInspector", [S]>): ClientboundCommandsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundCommandsPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket. */
export interface ClientboundCommandSuggestionsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  length(): number;
  start(): number;
  suggestions(): JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry">>;
  toString(): string;
  toSuggestions(): JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCommandSuggestionsPacket]>;
}
export type ClientboundCommandSuggestionsPacket = ClientboundCommandSuggestionsPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundCommandSuggestionsPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry">>): ClientboundCommandSuggestionsPacket;
  new(arg0: number, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">): ClientboundCommandSuggestionsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundCommandSuggestionsPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundContainerClosePacket. */
export interface ClientboundContainerClosePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getContainerId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundContainerClosePacket]>;
}
export type ClientboundContainerClosePacket = ClientboundContainerClosePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundContainerClosePacketStatics {
  new(arg0: number): ClientboundContainerClosePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundContainerClosePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket. */
export interface ClientboundContainerSetContentPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  carriedItem(): JavaOpaque<"net.minecraft.world.item.ItemStack">;
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hasLargePacketFallback(): boolean;
  hashCode(): number;
  items(): JavaList<JavaOpaque<"net.minecraft.world.item.ItemStack">>;
  packetTooLarge(arg0: JavaOpaque<"net.minecraft.network.Connection">): boolean;
  stateId(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundContainerSetContentPacket]>;
}
export type ClientboundContainerSetContentPacket = ClientboundContainerSetContentPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundContainerSetContentPacketStatics {
  new(arg0: number, arg1: number, arg2: JavaList<JavaOpaque<"net.minecraft.world.item.ItemStack">>, arg3: JavaOpaque<"net.minecraft.world.item.ItemStack">): ClientboundContainerSetContentPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundContainerSetContentPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket. */
export interface ClientboundContainerSetDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getContainerId(): number;
  getId(): number;
  getValue(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundContainerSetDataPacket]>;
}
export type ClientboundContainerSetDataPacket = ClientboundContainerSetDataPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundContainerSetDataPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundContainerSetDataPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundContainerSetDataPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket. */
export interface ClientboundContainerSetSlotPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getContainerId(): number;
  getItem(): JavaOpaque<"net.minecraft.world.item.ItemStack">;
  getSlot(): number;
  getStateId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundContainerSetSlotPacket]>;
}
export type ClientboundContainerSetSlotPacket = ClientboundContainerSetSlotPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundContainerSetSlotPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: JavaOpaque<"net.minecraft.world.item.ItemStack">): ClientboundContainerSetSlotPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundContainerSetSlotPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCooldownPacket. */
export interface ClientboundCooldownPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  cooldownGroup(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  duration(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCooldownPacket]>;
}
export type ClientboundCooldownPacket = ClientboundCooldownPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundCooldownPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg1: number): ClientboundCooldownPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundCooldownPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket. */
export interface ClientboundCustomChatCompletionsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  action(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action">;
  entries(): JavaList<string>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundCustomChatCompletionsPacket]>;
}
export type ClientboundCustomChatCompletionsPacket = ClientboundCustomChatCompletionsPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundCustomChatCompletionsPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action">, arg1: JavaList<string>): ClientboundCustomChatCompletionsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundCustomChatCompletionsPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDamageEventPacket. */
export interface ClientboundDamageEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  entityId(): number;
  equals(arg0: object): boolean;
  getSource(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.damagesource.DamageSource">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  sourceCauseId(): number;
  sourceDirectId(): number;
  sourcePosition(): JavaOptional<JavaOpaque<"net.minecraft.world.phys.Vec3">>;
  sourceType(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.damagesource.DamageType">]>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundDamageEventPacket]>;
}
export type ClientboundDamageEventPacket = ClientboundDamageEventPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundDamageEventPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.damagesource.DamageType">]>, arg2: number, arg3: number, arg4: JavaOptional<JavaOpaque<"net.minecraft.world.phys.Vec3">>): ClientboundDamageEventPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: JavaOpaque<"net.minecraft.world.damagesource.DamageSource">): ClientboundDamageEventPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundDamageEventPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDebugSamplePacket. */
export interface ClientboundDebugSamplePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  debugSampleType(): JavaOpaque<"net.minecraft.util.debugchart.RemoteDebugSampleType">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  sample(): Array<bigint>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundDebugSamplePacket]>;
}
export type ClientboundDebugSamplePacket = ClientboundDebugSamplePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundDebugSamplePacketStatics {
  new(arg0: Array<bigint>, arg1: JavaOpaque<"net.minecraft.util.debugchart.RemoteDebugSampleType">): ClientboundDebugSamplePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundDebugSamplePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDeleteChatPacket. */
export interface ClientboundDeleteChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  messageSignature(): JavaOpaque<"net.minecraft.network.chat.MessageSignature$Packed">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundDeleteChatPacket]>;
}
export type ClientboundDeleteChatPacket = ClientboundDeleteChatPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundDeleteChatPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.MessageSignature$Packed">): ClientboundDeleteChatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundDeleteChatPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket. */
export interface ClientboundDisguisedChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  chatType(): JavaOpaque<"net.minecraft.network.chat.ChatType$Bound">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  isSkippable(): boolean;
  message(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundDisguisedChatPacket]>;
}
export type ClientboundDisguisedChatPacket = ClientboundDisguisedChatPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundDisguisedChatPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">, arg1: JavaOpaque<"net.minecraft.network.chat.ChatType$Bound">): ClientboundDisguisedChatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundDisguisedChatPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundEntityEventPacket. */
export interface ClientboundEntityEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEntity(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.entity.Entity"> | null;
  getEventId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundEntityEventPacket]>;
}
export type ClientboundEntityEventPacket = ClientboundEntityEventPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundEntityEventPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: number): ClientboundEntityEventPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundEntityEventPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket. */
export interface ClientboundEntityPositionSyncPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  onGround(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundEntityPositionSyncPacket]>;
  values(): JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">;
}
export type ClientboundEntityPositionSyncPacket = ClientboundEntityPositionSyncPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundEntityPositionSyncPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">, arg2: boolean): ClientboundEntityPositionSyncPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundEntityPositionSyncPacket]>;
  of(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">): ClientboundEntityPositionSyncPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundExplodePacket. */
export interface ClientboundExplodePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  center(): JavaOpaque<"net.minecraft.world.phys.Vec3">;
  equals(arg0: object): boolean;
  explosionParticle(): JavaOpaque<"net.minecraft.core.particles.ParticleOptions">;
  explosionSound(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.sounds.SoundEvent">]>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  playerKnockback(): JavaOptional<JavaOpaque<"net.minecraft.world.phys.Vec3">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundExplodePacket]>;
}
export type ClientboundExplodePacket = ClientboundExplodePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundExplodePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.phys.Vec3">, arg1: JavaOptional<JavaOpaque<"net.minecraft.world.phys.Vec3">>, arg2: JavaOpaque<"net.minecraft.core.particles.ParticleOptions">, arg3: JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.sounds.SoundEvent">]>): ClientboundExplodePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundExplodePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket. */
export interface ClientboundForgetLevelChunkPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  pos(): JavaOpaque<"net.minecraft.world.level.ChunkPos">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundForgetLevelChunkPacket]>;
}
export type ClientboundForgetLevelChunkPacket = ClientboundForgetLevelChunkPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundForgetLevelChunkPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.ChunkPos">): ClientboundForgetLevelChunkPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundForgetLevelChunkPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundGameEventPacket. */
export interface ClientboundGameEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEvent(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  getParam(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundGameEventPacket]>;
}
export type ClientboundGameEventPacket = ClientboundGameEventPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundGameEventPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">, arg1: number): ClientboundGameEventPacket;
  readonly CHANGE_GAME_MODE: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly DEMO_EVENT: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly DEMO_PARAM_HINT_1: 101;
  readonly DEMO_PARAM_HINT_2: 102;
  readonly DEMO_PARAM_HINT_3: 103;
  readonly DEMO_PARAM_HINT_4: 104;
  readonly DEMO_PARAM_INTRO: 0;
  readonly GUARDIAN_ELDER_EFFECT: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly IMMEDIATE_RESPAWN: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly LEVEL_CHUNKS_LOAD_START: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly LIMITED_CRAFTING: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly NO_RESPAWN_BLOCK_AVAILABLE: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly PLAY_ARROW_HIT_SOUND: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly PUFFER_FISH_STING: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly RAIN_LEVEL_CHANGE: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly START_RAINING: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly STOP_RAINING: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundGameEventPacket]>;
  readonly THUNDER_LEVEL_CHANGE: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
  readonly WIN_GAME: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type">;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket. */
export interface ClientboundHorseScreenOpenPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getContainerId(): number;
  getEntityId(): number;
  getInventoryColumns(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundHorseScreenOpenPacket]>;
}
export type ClientboundHorseScreenOpenPacket = ClientboundHorseScreenOpenPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundHorseScreenOpenPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundHorseScreenOpenPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundHorseScreenOpenPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket. */
export interface ClientboundHurtAnimationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundHurtAnimationPacket]>;
  yaw(): number;
}
export type ClientboundHurtAnimationPacket = ClientboundHurtAnimationPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundHurtAnimationPacketStatics {
  new(arg0: number, arg1: number): ClientboundHurtAnimationPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.LivingEntity">): ClientboundHurtAnimationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundHurtAnimationPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket. */
export interface ClientboundInitializeBorderPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getLerpTime(): bigint;
  getNewAbsoluteMaxSize(): number;
  getNewCenterX(): number;
  getNewCenterZ(): number;
  getNewSize(): number;
  getOldSize(): number;
  getWarningBlocks(): number;
  getWarningTime(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundInitializeBorderPacket]>;
}
export type ClientboundInitializeBorderPacket = ClientboundInitializeBorderPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundInitializeBorderPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.border.WorldBorder">): ClientboundInitializeBorderPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundInitializeBorderPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket. */
export interface ClientboundLevelChunkWithLightPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getChunkData(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData">;
  getExtraPackets(): JavaList<JavaOpaque<"net.minecraft.network.protocol.Packet", [object]>>;
  getLightData(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData">;
  getX(): number;
  getZ(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isReady(): boolean;
  setReady(arg0: boolean): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLevelChunkWithLightPacket]>;
}
export type ClientboundLevelChunkWithLightPacket = ClientboundLevelChunkWithLightPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundLevelChunkWithLightPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.chunk.LevelChunk">, arg1: JavaOpaque<"net.minecraft.world.level.lighting.LevelLightEngine">, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null): ClientboundLevelChunkWithLightPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.level.chunk.LevelChunk">, arg1: JavaOpaque<"net.minecraft.world.level.lighting.LevelLightEngine">, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null, arg4: boolean): ClientboundLevelChunkWithLightPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundLevelChunkWithLightPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelEventPacket. */
export interface ClientboundLevelEventPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getData(): number;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getType(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isGlobalEvent(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLevelEventPacket]>;
}
export type ClientboundLevelEventPacket = ClientboundLevelEventPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundLevelEventPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.core.BlockPos">, arg2: number, arg3: boolean): ClientboundLevelEventPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundLevelEventPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket. */
export interface ClientboundLevelParticlesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  alwaysShow(): boolean;
  getCount(): number;
  getMaxSpeed(): number;
  getParticle(): JavaOpaque<"net.minecraft.core.particles.ParticleOptions">;
  getX(): number;
  getXDist(): number;
  getY(): number;
  getYDist(): number;
  getZ(): number;
  getZDist(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isOverrideLimiter(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLevelParticlesPacket]>;
}
export type ClientboundLevelParticlesPacket = ClientboundLevelParticlesPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundLevelParticlesPacketStatics {
  new<T /* extends JavaOpaque<"net.minecraft.core.particles.ParticleOptions"> */>(arg0: T, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): ClientboundLevelParticlesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundLevelParticlesPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundLightUpdatePacket. */
export interface ClientboundLightUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getLightData(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData">;
  getX(): number;
  getZ(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLightUpdatePacket]>;
}
export type ClientboundLightUpdatePacket = ClientboundLightUpdatePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundLightUpdatePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.ChunkPos">, arg1: JavaOpaque<"net.minecraft.world.level.lighting.LevelLightEngine">, arg2: JavaOpaque<"java.util.BitSet"> | null, arg3: JavaOpaque<"java.util.BitSet"> | null): ClientboundLightUpdatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundLightUpdatePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundLoginPacket. */
export interface ClientboundLoginPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  chunkRadius(): number;
  commonPlayerSpawnInfo(): JavaOpaque<"net.minecraft.network.protocol.game.CommonPlayerSpawnInfo">;
  doLimitedCrafting(): boolean;
  enforcesSecureChat(): boolean;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hardcore(): boolean;
  hashCode(): number;
  levels(): JavaSet<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.world.level.Level">]>>;
  maxPlayers(): number;
  playerId(): number;
  reducedDebugInfo(): boolean;
  showDeathScreen(): boolean;
  simulationDistance(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundLoginPacket]>;
}
export type ClientboundLoginPacket = ClientboundLoginPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundLoginPacketStatics {
  new(arg0: number, arg1: boolean, arg2: JavaSet<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.world.level.Level">]>>, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: JavaOpaque<"net.minecraft.network.protocol.game.CommonPlayerSpawnInfo">, arg10: boolean): ClientboundLoginPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundLoginPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundMapItemDataPacket. */
export interface ClientboundMapItemDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  applyToMap(arg0: JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapItemSavedData">): void;
  colorPatch(): JavaOptional<JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch">>;
  decorations(): JavaOptional<JavaList<JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapDecoration">>>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  locked(): boolean;
  mapId(): JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapId">;
  scale(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMapItemDataPacket]>;
}
export type ClientboundMapItemDataPacket = ClientboundMapItemDataPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundMapItemDataPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapId">, arg1: number, arg2: boolean, arg3: JavaCollection<JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapDecoration">> | null, arg4: JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch"> | null): ClientboundMapItemDataPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapId">, arg1: number, arg2: boolean, arg3: JavaOptional<JavaList<JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapDecoration">>>, arg4: JavaOptional<JavaOpaque<"net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch">>): ClientboundMapItemDataPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundMapItemDataPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket. */
export interface ClientboundMerchantOffersPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  canRestock(): boolean;
  getContainerId(): number;
  getOffers(): JavaOpaque<"net.minecraft.world.item.trading.MerchantOffers">;
  getVillagerLevel(): number;
  getVillagerXp(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  showProgress(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMerchantOffersPacket]>;
}
export type ClientboundMerchantOffersPacket = ClientboundMerchantOffersPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundMerchantOffersPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.item.trading.MerchantOffers">, arg2: number, arg3: number, arg4: boolean, arg5: boolean): ClientboundMerchantOffersPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundMerchantOffersPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos. */
export interface ClientboundMoveEntityPacket_PosMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundMoveEntityPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMoveEntityPacket_Pos]>;
}
export type ClientboundMoveEntityPacket_Pos = ClientboundMoveEntityPacket_PosMembers & JavaOpaque<"net.minecraft.network.protocol.game.ClientboundMoveEntityPacket">;
export interface ClientboundMoveEntityPacket_PosStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): ClientboundMoveEntityPacket_Pos;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundMoveEntityPacket_Pos]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot. */
export interface ClientboundMoveEntityPacket_PosRotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundMoveEntityPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMoveEntityPacket_PosRot]>;
}
export type ClientboundMoveEntityPacket_PosRot = ClientboundMoveEntityPacket_PosRotMembers & JavaOpaque<"net.minecraft.network.protocol.game.ClientboundMoveEntityPacket">;
export interface ClientboundMoveEntityPacket_PosRotStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): ClientboundMoveEntityPacket_PosRot;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundMoveEntityPacket_PosRot]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot. */
export interface ClientboundMoveEntityPacket_RotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundMoveEntityPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMoveEntityPacket_Rot]>;
}
export type ClientboundMoveEntityPacket_Rot = ClientboundMoveEntityPacket_RotMembers & JavaOpaque<"net.minecraft.network.protocol.game.ClientboundMoveEntityPacket">;
export interface ClientboundMoveEntityPacket_RotStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: boolean): ClientboundMoveEntityPacket_Rot;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundMoveEntityPacket_Rot]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket. */
export interface ClientboundMoveMinecartPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  entityId(): number;
  equals(arg0: object): boolean;
  getEntity(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.entity.Entity"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  lerpSteps(): JavaList<JavaOpaque<"net.minecraft.world.entity.vehicle.NewMinecartBehavior$MinecartStep">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMoveMinecartPacket]>;
}
export type ClientboundMoveMinecartPacket = ClientboundMoveMinecartPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundMoveMinecartPacketStatics {
  new(arg0: number, arg1: JavaList<JavaOpaque<"net.minecraft.world.entity.vehicle.NewMinecartBehavior$MinecartStep">>): ClientboundMoveMinecartPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundMoveMinecartPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket. */
export interface ClientboundMoveVehiclePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  position(): JavaOpaque<"net.minecraft.world.phys.Vec3">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundMoveVehiclePacket]>;
  xRot(): number;
  yRot(): number;
}
export type ClientboundMoveVehiclePacket = ClientboundMoveVehiclePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundMoveVehiclePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.phys.Vec3">, arg1: number, arg2: number): ClientboundMoveVehiclePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundMoveVehiclePacket]>;
  fromEntity(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">): ClientboundMoveVehiclePacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundOpenBookPacket. */
export interface ClientboundOpenBookPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getHand(): JavaOpaque<"net.minecraft.world.InteractionHand">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundOpenBookPacket]>;
}
export type ClientboundOpenBookPacket = ClientboundOpenBookPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundOpenBookPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.InteractionHand">): ClientboundOpenBookPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundOpenBookPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundOpenScreenPacket. */
export interface ClientboundOpenScreenPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getContainerId(): number;
  getTitle(): JavaOpaque<"net.minecraft.network.chat.Component">;
  getType(): JavaOpaque<"net.minecraft.world.inventory.MenuType", [object]>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundOpenScreenPacket]>;
}
export type ClientboundOpenScreenPacket = ClientboundOpenScreenPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundOpenScreenPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.inventory.MenuType", [object]>, arg2: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundOpenScreenPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundOpenScreenPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket. */
export interface ClientboundOpenSignEditorPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isFrontText(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundOpenSignEditorPacket]>;
}
export type ClientboundOpenSignEditorPacket = ClientboundOpenSignEditorPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundOpenSignEditorPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: boolean): ClientboundOpenSignEditorPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundOpenSignEditorPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket. */
export interface ClientboundPlaceGhostRecipePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  recipeDisplay(): JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplay">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlaceGhostRecipePacket]>;
}
export type ClientboundPlaceGhostRecipePacket = ClientboundPlaceGhostRecipePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlaceGhostRecipePacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplay">): ClientboundPlaceGhostRecipePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundPlaceGhostRecipePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket. */
export interface ClientboundPlayerAbilitiesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  canFly(): boolean;
  canInstabuild(): boolean;
  getFlyingSpeed(): number;
  getWalkingSpeed(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isFlying(): boolean;
  isInvulnerable(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerAbilitiesPacket]>;
}
export type ClientboundPlayerAbilitiesPacket = ClientboundPlayerAbilitiesPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerAbilitiesPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.player.Abilities">): ClientboundPlayerAbilitiesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPlayerAbilitiesPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerChatPacket. */
export interface ClientboundPlayerChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  body(): JavaOpaque<"net.minecraft.network.chat.SignedMessageBody$Packed">;
  chatType(): JavaOpaque<"net.minecraft.network.chat.ChatType$Bound">;
  equals(arg0: object): boolean;
  filterMask(): JavaOpaque<"net.minecraft.network.chat.FilterMask">;
  globalIndex(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  index(): number;
  isSkippable(): boolean;
  sender(): JavaOpaque<"java.util.UUID">;
  signature(): JavaOpaque<"net.minecraft.network.chat.MessageSignature"> | null;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerChatPacket]>;
  unsignedContent(): JavaOpaque<"net.minecraft.network.chat.Component"> | null;
}
export type ClientboundPlayerChatPacket = ClientboundPlayerChatPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerChatPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"java.util.UUID">, arg2: number, arg3: JavaOpaque<"net.minecraft.network.chat.MessageSignature"> | null, arg4: JavaOpaque<"net.minecraft.network.chat.SignedMessageBody$Packed">, arg5: JavaOpaque<"net.minecraft.network.chat.Component"> | null, arg6: JavaOpaque<"net.minecraft.network.chat.FilterMask">, arg7: JavaOpaque<"net.minecraft.network.chat.ChatType$Bound">): ClientboundPlayerChatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundPlayerChatPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket. */
export interface ClientboundPlayerCombatEndPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerCombatEndPacket]>;
}
export type ClientboundPlayerCombatEndPacket = ClientboundPlayerCombatEndPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerCombatEndPacketStatics {
  new(arg0: number): ClientboundPlayerCombatEndPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.damagesource.CombatTracker">): ClientboundPlayerCombatEndPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPlayerCombatEndPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket. */
export interface ClientboundPlayerCombatEnterPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerCombatEnterPacket]>;
}
export type ClientboundPlayerCombatEnterPacket = ClientboundPlayerCombatEnterPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerCombatEnterPacketStatics {
  readonly INSTANCE: ClientboundPlayerCombatEnterPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundPlayerCombatEnterPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket. */
export interface ClientboundPlayerCombatKillPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  isSkippable(): boolean;
  message(): JavaOpaque<"net.minecraft.network.chat.Component">;
  playerId(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerCombatKillPacket]>;
}
export type ClientboundPlayerCombatKillPacket = ClientboundPlayerCombatKillPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerCombatKillPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundPlayerCombatKillPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundPlayerCombatKillPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket. */
export interface ClientboundPlayerInfoRemovePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  profileIds(): JavaList<JavaOpaque<"java.util.UUID">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerInfoRemovePacket]>;
}
export type ClientboundPlayerInfoRemovePacket = ClientboundPlayerInfoRemovePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerInfoRemovePacketStatics {
  new(arg0: JavaList<JavaOpaque<"java.util.UUID">>): ClientboundPlayerInfoRemovePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPlayerInfoRemovePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket. */
export interface ClientboundPlayerInfoUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  actions(): JavaOpaque<"java.util.EnumSet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action">]>;
  entries(): JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry">>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  newEntries(): JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerInfoUpdatePacket]>;
}
export type ClientboundPlayerInfoUpdatePacket = ClientboundPlayerInfoUpdatePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerInfoUpdatePacketStatics {
  new(arg0: JavaOpaque<"java.util.EnumSet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action">]>, arg1: JavaCollection<JavaOpaque<"net.minecraft.server.level.ServerPlayer">>): ClientboundPlayerInfoUpdatePacket;
  new(arg0: JavaOpaque<"java.util.EnumSet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action">]>, arg1: JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry">>): ClientboundPlayerInfoUpdatePacket;
  new(arg0: JavaOpaque<"java.util.EnumSet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action">]>, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry">): ClientboundPlayerInfoUpdatePacket;
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action">, arg1: JavaOpaque<"net.minecraft.server.level.ServerPlayer">): ClientboundPlayerInfoUpdatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundPlayerInfoUpdatePacket]>;
  createPlayerInitializing(arg0: JavaCollection<JavaOpaque<"net.minecraft.server.level.ServerPlayer">>): ClientboundPlayerInfoUpdatePacket;
  createPlayerInitializing(arg0: JavaCollection<JavaOpaque<"net.minecraft.server.level.ServerPlayer">>, arg1: JavaOpaque<"net.minecraft.server.level.ServerPlayer">): ClientboundPlayerInfoUpdatePacket;
  createSinglePlayerInitializing(arg0: JavaOpaque<"net.minecraft.server.level.ServerPlayer">, arg1: boolean): ClientboundPlayerInfoUpdatePacket;
  updateListed(arg0: JavaOpaque<"java.util.UUID">, arg1: boolean): ClientboundPlayerInfoUpdatePacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket. */
export interface ClientboundPlayerLookAtPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getFromAnchor(): JavaOpaque<"net.minecraft.commands.arguments.EntityAnchorArgument$Anchor">;
  getPosition(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.phys.Vec3"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerLookAtPacket]>;
}
export type ClientboundPlayerLookAtPacket = ClientboundPlayerLookAtPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerLookAtPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.commands.arguments.EntityAnchorArgument$Anchor">, arg1: number, arg2: number, arg3: number): ClientboundPlayerLookAtPacket;
  new(arg0: JavaOpaque<"net.minecraft.commands.arguments.EntityAnchorArgument$Anchor">, arg1: JavaOpaque<"net.minecraft.world.entity.Entity">, arg2: JavaOpaque<"net.minecraft.commands.arguments.EntityAnchorArgument$Anchor">): ClientboundPlayerLookAtPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPlayerLookAtPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket. */
export interface ClientboundPlayerPositionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  change(): JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  relatives(): JavaSet<JavaOpaque<"net.minecraft.world.entity.Relative">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerPositionPacket]>;
}
export type ClientboundPlayerPositionPacket = ClientboundPlayerPositionPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerPositionPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">, arg2: JavaSet<JavaOpaque<"net.minecraft.world.entity.Relative">>): ClientboundPlayerPositionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPlayerPositionPacket]>;
  of(arg0: number, arg1: JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">, arg2: JavaSet<JavaOpaque<"net.minecraft.world.entity.Relative">>): ClientboundPlayerPositionPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket. */
export interface ClientboundPlayerRotationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundPlayerRotationPacket]>;
  xRot(): number;
  yRot(): number;
}
export type ClientboundPlayerRotationPacket = ClientboundPlayerRotationPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundPlayerRotationPacketStatics {
  new(arg0: number, arg1: number): ClientboundPlayerRotationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundPlayerRotationPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket. */
export interface ClientboundProjectilePowerPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getAccelerationPower(): number;
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundProjectilePowerPacket]>;
}
export type ClientboundProjectilePowerPacket = ClientboundProjectilePowerPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundProjectilePowerPacketStatics {
  new(arg0: number, arg1: number): ClientboundProjectilePowerPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundProjectilePowerPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket. */
export interface ClientboundRecipeBookAddPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  entries(): JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket$Entry">>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  replace(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRecipeBookAddPacket]>;
}
export type ClientboundRecipeBookAddPacket = ClientboundRecipeBookAddPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRecipeBookAddPacketStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket$Entry">>, arg1: boolean): ClientboundRecipeBookAddPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundRecipeBookAddPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket. */
export interface ClientboundRecipeBookRemovePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  recipes(): JavaList<JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplayId">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRecipeBookRemovePacket]>;
}
export type ClientboundRecipeBookRemovePacket = ClientboundRecipeBookRemovePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRecipeBookRemovePacketStatics {
  new(arg0: JavaList<JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplayId">>): ClientboundRecipeBookRemovePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundRecipeBookRemovePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket. */
export interface ClientboundRecipeBookSettingsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  bookSettings(): JavaOpaque<"net.minecraft.stats.RecipeBookSettings">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRecipeBookSettingsPacket]>;
}
export type ClientboundRecipeBookSettingsPacket = ClientboundRecipeBookSettingsPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRecipeBookSettingsPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.stats.RecipeBookSettings">): ClientboundRecipeBookSettingsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundRecipeBookSettingsPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket. */
export interface ClientboundRemoveEntitiesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEntityIds(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRemoveEntitiesPacket]>;
}
export type ClientboundRemoveEntitiesPacket = ClientboundRemoveEntitiesPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRemoveEntitiesPacketStatics {
  new(arg0: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">): ClientboundRemoveEntitiesPacket;
  new(...arg0: Array<number>): ClientboundRemoveEntitiesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundRemoveEntitiesPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket. */
export interface ClientboundRemoveMobEffectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  effect(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>;
  entityId(): number;
  equals(arg0: object): boolean;
  getEntity(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.entity.Entity"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRemoveMobEffectPacket]>;
}
export type ClientboundRemoveMobEffectPacket = ClientboundRemoveMobEffectPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRemoveMobEffectPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>): ClientboundRemoveMobEffectPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundRemoveMobEffectPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundResetScorePacket. */
export interface ClientboundResetScorePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  objectiveName(): string | null;
  owner(): string;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundResetScorePacket]>;
}
export type ClientboundResetScorePacket = ClientboundResetScorePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundResetScorePacketStatics {
  new(arg0: string, arg1: string | null): ClientboundResetScorePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundResetScorePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundRespawnPacket. */
export interface ClientboundRespawnPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  commonPlayerSpawnInfo(): JavaOpaque<"net.minecraft.network.protocol.game.CommonPlayerSpawnInfo">;
  dataToKeep(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  shouldKeep(arg0: number): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRespawnPacket]>;
}
export type ClientboundRespawnPacket = ClientboundRespawnPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRespawnPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.CommonPlayerSpawnInfo">, arg1: number): ClientboundRespawnPacket;
  readonly KEEP_ALL_DATA: 3;
  readonly KEEP_ATTRIBUTE_MODIFIERS: 1;
  readonly KEEP_ENTITY_DATA: 2;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundRespawnPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundRotateHeadPacket. */
export interface ClientboundRotateHeadPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEntity(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.entity.Entity">;
  getYHeadRot(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundRotateHeadPacket]>;
}
export type ClientboundRotateHeadPacket = ClientboundRotateHeadPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundRotateHeadPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: number): ClientboundRotateHeadPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundRotateHeadPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket. */
export interface ClientboundSectionBlocksUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  runUpdates(arg0: JavaBiConsumer<JavaOpaque<"net.minecraft.core.BlockPos">, JavaOpaque<"net.minecraft.world.level.block.state.BlockState">>): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSectionBlocksUpdatePacket]>;
}
export type ClientboundSectionBlocksUpdatePacket = ClientboundSectionBlocksUpdatePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSectionBlocksUpdatePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.SectionPos">, arg1: JavaOpaque<"it.unimi.dsi.fastutil.shorts.Short2ObjectMap", [JavaOpaque<"net.minecraft.world.level.block.state.BlockState">]>): ClientboundSectionBlocksUpdatePacket;
  new(arg0: JavaOpaque<"net.minecraft.core.SectionPos">, arg1: JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortSet">, arg2: JavaOpaque<"net.minecraft.world.level.chunk.LevelChunkSection">): ClientboundSectionBlocksUpdatePacket;
  new(arg0: JavaOpaque<"net.minecraft.core.SectionPos">, arg1: JavaOpaque<"it.unimi.dsi.fastutil.shorts.ShortSet">, arg2: Array<JavaOpaque<"net.minecraft.world.level.block.state.BlockState">>): ClientboundSectionBlocksUpdatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSectionBlocksUpdatePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket. */
export interface ClientboundSelectAdvancementsTabPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getTab(): JavaOpaque<"net.minecraft.resources.ResourceLocation"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSelectAdvancementsTabPacket]>;
}
export type ClientboundSelectAdvancementsTabPacket = ClientboundSelectAdvancementsTabPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSelectAdvancementsTabPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation"> | null): ClientboundSelectAdvancementsTabPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSelectAdvancementsTabPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundServerDataPacket. */
export interface ClientboundServerDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  iconBytes(): JavaOptional<Array<number>>;
  motd(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundServerDataPacket]>;
}
export type ClientboundServerDataPacket = ClientboundServerDataPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundServerDataPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">, arg1: JavaOptional<Array<number>>): ClientboundServerDataPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundServerDataPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket. */
export interface ClientboundSetActionBarTextPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  text(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetActionBarTextPacket]>;
}
export type ClientboundSetActionBarTextPacket = ClientboundSetActionBarTextPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetActionBarTextPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundSetActionBarTextPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetActionBarTextPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket. */
export interface ClientboundSetBorderCenterPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getNewCenterX(): number;
  getNewCenterZ(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetBorderCenterPacket]>;
}
export type ClientboundSetBorderCenterPacket = ClientboundSetBorderCenterPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetBorderCenterPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.border.WorldBorder">): ClientboundSetBorderCenterPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetBorderCenterPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket. */
export interface ClientboundSetBorderLerpSizePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getLerpTime(): bigint;
  getNewSize(): number;
  getOldSize(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetBorderLerpSizePacket]>;
}
export type ClientboundSetBorderLerpSizePacket = ClientboundSetBorderLerpSizePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetBorderLerpSizePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.border.WorldBorder">): ClientboundSetBorderLerpSizePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetBorderLerpSizePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket. */
export interface ClientboundSetBorderSizePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getSize(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetBorderSizePacket]>;
}
export type ClientboundSetBorderSizePacket = ClientboundSetBorderSizePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetBorderSizePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.border.WorldBorder">): ClientboundSetBorderSizePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetBorderSizePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket. */
export interface ClientboundSetBorderWarningDelayPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getWarningDelay(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetBorderWarningDelayPacket]>;
}
export type ClientboundSetBorderWarningDelayPacket = ClientboundSetBorderWarningDelayPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetBorderWarningDelayPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.border.WorldBorder">): ClientboundSetBorderWarningDelayPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetBorderWarningDelayPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket. */
export interface ClientboundSetBorderWarningDistancePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getWarningBlocks(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetBorderWarningDistancePacket]>;
}
export type ClientboundSetBorderWarningDistancePacket = ClientboundSetBorderWarningDistancePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetBorderWarningDistancePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.border.WorldBorder">): ClientboundSetBorderWarningDistancePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetBorderWarningDistancePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetCameraPacket. */
export interface ClientboundSetCameraPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEntity(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.entity.Entity"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetCameraPacket]>;
}
export type ClientboundSetCameraPacket = ClientboundSetCameraPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetCameraPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">): ClientboundSetCameraPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetCameraPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket. */
export interface ClientboundSetChunkCacheCenterPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getX(): number;
  getZ(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetChunkCacheCenterPacket]>;
}
export type ClientboundSetChunkCacheCenterPacket = ClientboundSetChunkCacheCenterPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetChunkCacheCenterPacketStatics {
  new(arg0: number, arg1: number): ClientboundSetChunkCacheCenterPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetChunkCacheCenterPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket. */
export interface ClientboundSetChunkCacheRadiusPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getRadius(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetChunkCacheRadiusPacket]>;
}
export type ClientboundSetChunkCacheRadiusPacket = ClientboundSetChunkCacheRadiusPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetChunkCacheRadiusPacketStatics {
  new(arg0: number): ClientboundSetChunkCacheRadiusPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetChunkCacheRadiusPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket. */
export interface ClientboundSetCursorItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  contents(): JavaOpaque<"net.minecraft.world.item.ItemStack">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetCursorItemPacket]>;
}
export type ClientboundSetCursorItemPacket = ClientboundSetCursorItemPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetCursorItemPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.item.ItemStack">): ClientboundSetCursorItemPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetCursorItemPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket. */
export interface ClientboundSetDefaultSpawnPositionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getAngle(): number;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  readonly pos: JavaOpaque<"net.minecraft.core.BlockPos">;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetDefaultSpawnPositionPacket]>;
}
export type ClientboundSetDefaultSpawnPositionPacket = ClientboundSetDefaultSpawnPositionPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetDefaultSpawnPositionPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: number): ClientboundSetDefaultSpawnPositionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetDefaultSpawnPositionPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket. */
export interface ClientboundSetDisplayObjectivePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getObjectiveName(): string | null;
  getSlot(): JavaOpaque<"net.minecraft.world.scores.DisplaySlot">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetDisplayObjectivePacket]>;
}
export type ClientboundSetDisplayObjectivePacket = ClientboundSetDisplayObjectivePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetDisplayObjectivePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.scores.DisplaySlot">, arg1: JavaOpaque<"net.minecraft.world.scores.Objective"> | null): ClientboundSetDisplayObjectivePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetDisplayObjectivePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket. */
export interface ClientboundSetEntityDataPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  packedItems(): JavaList<JavaOpaque<"net.minecraft.network.syncher.SynchedEntityData$DataValue", [object]>>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetEntityDataPacket]>;
}
export type ClientboundSetEntityDataPacket = ClientboundSetEntityDataPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetEntityDataPacketStatics {
  new(arg0: number, arg1: JavaList<JavaOpaque<"net.minecraft.network.syncher.SynchedEntityData$DataValue", [object]>>): ClientboundSetEntityDataPacket;
  readonly EOF_MARKER: 255;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetEntityDataPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket. */
export interface ClientboundSetEntityLinkPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getDestId(): number;
  getSourceId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetEntityLinkPacket]>;
}
export type ClientboundSetEntityLinkPacket = ClientboundSetEntityLinkPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetEntityLinkPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: JavaOpaque<"net.minecraft.world.entity.Entity"> | null): ClientboundSetEntityLinkPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetEntityLinkPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket. */
export interface ClientboundSetEntityMotionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getId(): number;
  getXa(): number;
  getYa(): number;
  getZa(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetEntityMotionPacket]>;
}
export type ClientboundSetEntityMotionPacket = ClientboundSetEntityMotionPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetEntityMotionPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.phys.Vec3">): ClientboundSetEntityMotionPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">): ClientboundSetEntityMotionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetEntityMotionPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket. */
export interface ClientboundSetEquipmentPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEntity(): number;
  getSlots(): JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaOpaque<"net.minecraft.world.entity.EquipmentSlot">, JavaOpaque<"net.minecraft.world.item.ItemStack">]>>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetEquipmentPacket]>;
}
export type ClientboundSetEquipmentPacket = ClientboundSetEquipmentPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetEquipmentPacketStatics {
  new(arg0: number, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaOpaque<"net.minecraft.world.entity.EquipmentSlot">, JavaOpaque<"net.minecraft.world.item.ItemStack">]>>): ClientboundSetEquipmentPacket;
  new(arg0: number, arg1: JavaList<JavaOpaque<"com.mojang.datafixers.util.Pair", [JavaOpaque<"net.minecraft.world.entity.EquipmentSlot">, JavaOpaque<"net.minecraft.world.item.ItemStack">]>>, arg2: boolean): ClientboundSetEquipmentPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetEquipmentPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetExperiencePacket. */
export interface ClientboundSetExperiencePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getExperienceLevel(): number;
  getExperienceProgress(): number;
  getTotalExperience(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetExperiencePacket]>;
}
export type ClientboundSetExperiencePacket = ClientboundSetExperiencePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetExperiencePacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundSetExperiencePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetExperiencePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetHealthPacket. */
export interface ClientboundSetHealthPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getFood(): number;
  getHealth(): number;
  getSaturation(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetHealthPacket]>;
}
export type ClientboundSetHealthPacket = ClientboundSetHealthPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetHealthPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundSetHealthPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetHealthPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket. */
export interface ClientboundSetHeldSlotPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  slot(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetHeldSlotPacket]>;
}
export type ClientboundSetHeldSlotPacket = ClientboundSetHeldSlotPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetHeldSlotPacketStatics {
  new(arg0: number): ClientboundSetHeldSlotPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundSetHeldSlotPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetObjectivePacket. */
export interface ClientboundSetObjectivePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getDisplayName(): JavaOpaque<"net.minecraft.network.chat.Component">;
  getMethod(): number;
  getNumberFormat(): JavaOptional<JavaOpaque<"net.minecraft.network.chat.numbers.NumberFormat">>;
  getObjectiveName(): string;
  getRenderType(): JavaOpaque<"net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetObjectivePacket]>;
}
export type ClientboundSetObjectivePacket = ClientboundSetObjectivePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetObjectivePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.scores.Objective">, arg1: number): ClientboundSetObjectivePacket;
  readonly METHOD_ADD: 0;
  readonly METHOD_CHANGE: 2;
  readonly METHOD_REMOVE: 1;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetObjectivePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetPassengersPacket. */
export interface ClientboundSetPassengersPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getPassengers(): Array<number>;
  getVehicle(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetPassengersPacket]>;
}
export type ClientboundSetPassengersPacket = ClientboundSetPassengersPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetPassengersPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">): ClientboundSetPassengersPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetPassengersPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket. */
export interface ClientboundSetPlayerInventoryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  contents(): JavaOpaque<"net.minecraft.world.item.ItemStack">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  slot(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetPlayerInventoryPacket]>;
}
export type ClientboundSetPlayerInventoryPacket = ClientboundSetPlayerInventoryPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetPlayerInventoryPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.item.ItemStack">): ClientboundSetPlayerInventoryPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetPlayerInventoryPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket. */
export interface ClientboundSetPlayerTeamPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getName(): string;
  getParameters(): JavaOptional<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters">>;
  getPlayerAction(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action"> | null;
  getPlayers(): JavaCollection<string>;
  getTeamAction(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetPlayerTeamPacket]>;
}
export type ClientboundSetPlayerTeamPacket = ClientboundSetPlayerTeamPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetPlayerTeamPacketStatics {
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetPlayerTeamPacket]>;
  createAddOrModifyPacket(arg0: JavaOpaque<"net.minecraft.world.scores.PlayerTeam">, arg1: boolean): ClientboundSetPlayerTeamPacket;
  createMultiplePlayerPacket(arg0: JavaOpaque<"net.minecraft.world.scores.PlayerTeam">, arg1: JavaCollection<string>, arg2: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action">): ClientboundSetPlayerTeamPacket;
  createPlayerPacket(arg0: JavaOpaque<"net.minecraft.world.scores.PlayerTeam">, arg1: string, arg2: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action">): ClientboundSetPlayerTeamPacket;
  createRemovePacket(arg0: JavaOpaque<"net.minecraft.world.scores.PlayerTeam">): ClientboundSetPlayerTeamPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetScorePacket. */
export interface ClientboundSetScorePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  display(): JavaOptional<JavaOpaque<"net.minecraft.network.chat.Component">>;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  numberFormat(): JavaOptional<JavaOpaque<"net.minecraft.network.chat.numbers.NumberFormat">>;
  objectiveName(): string;
  owner(): string;
  score(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetScorePacket]>;
}
export type ClientboundSetScorePacket = ClientboundSetScorePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetScorePacketStatics {
  new(arg0: string, arg1: string, arg2: number, arg3: JavaOptional<JavaOpaque<"net.minecraft.network.chat.Component">>, arg4: JavaOptional<JavaOpaque<"net.minecraft.network.chat.numbers.NumberFormat">>): ClientboundSetScorePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetScorePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket. */
export interface ClientboundSetSimulationDistancePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  simulationDistance(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetSimulationDistancePacket]>;
}
export type ClientboundSetSimulationDistancePacket = ClientboundSetSimulationDistancePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetSimulationDistancePacketStatics {
  new(arg0: number): ClientboundSetSimulationDistancePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetSimulationDistancePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket. */
export interface ClientboundSetSubtitleTextPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  text(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetSubtitleTextPacket]>;
}
export type ClientboundSetSubtitleTextPacket = ClientboundSetSubtitleTextPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetSubtitleTextPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundSetSubtitleTextPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetSubtitleTextPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetTimePacket. */
export interface ClientboundSetTimePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  dayTime(): bigint;
  equals(arg0: object): boolean;
  gameTime(): bigint;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  tickDayTime(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetTimePacket]>;
}
export type ClientboundSetTimePacket = ClientboundSetTimePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetTimePacketStatics {
  new(arg0: bigint, arg1: bigint, arg2: boolean): ClientboundSetTimePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetTimePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket. */
export interface ClientboundSetTitlesAnimationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getFadeIn(): number;
  getFadeOut(): number;
  getStay(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetTitlesAnimationPacket]>;
}
export type ClientboundSetTitlesAnimationPacket = ClientboundSetTitlesAnimationPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetTitlesAnimationPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundSetTitlesAnimationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundSetTitlesAnimationPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket. */
export interface ClientboundSetTitleTextPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  text(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSetTitleTextPacket]>;
}
export type ClientboundSetTitleTextPacket = ClientboundSetTitleTextPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSetTitleTextPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundSetTitleTextPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSetTitleTextPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSoundEntityPacket. */
export interface ClientboundSoundEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getId(): number;
  getPitch(): number;
  getSeed(): bigint;
  getSound(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.sounds.SoundEvent">]>;
  getSource(): JavaOpaque<"net.minecraft.sounds.SoundSource">;
  getVolume(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSoundEntityPacket]>;
}
export type ClientboundSoundEntityPacket = ClientboundSoundEntityPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSoundEntityPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.sounds.SoundEvent">]>, arg1: JavaOpaque<"net.minecraft.sounds.SoundSource">, arg2: JavaOpaque<"net.minecraft.world.entity.Entity">, arg3: number, arg4: number, arg5: bigint): ClientboundSoundEntityPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSoundEntityPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundSoundPacket. */
export interface ClientboundSoundPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getPitch(): number;
  getSeed(): bigint;
  getSound(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.sounds.SoundEvent">]>;
  getSource(): JavaOpaque<"net.minecraft.sounds.SoundSource">;
  getVolume(): number;
  getX(): number;
  getY(): number;
  getZ(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSoundPacket]>;
}
export type ClientboundSoundPacket = ClientboundSoundPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSoundPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.sounds.SoundEvent">]>, arg1: JavaOpaque<"net.minecraft.sounds.SoundSource">, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: bigint): ClientboundSoundPacket;
  readonly LOCATION_ACCURACY: 8;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSoundPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket. */
export interface ClientboundStartConfigurationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isTerminal(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundStartConfigurationPacket]>;
}
export type ClientboundStartConfigurationPacket = ClientboundStartConfigurationPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundStartConfigurationPacketStatics {
  readonly INSTANCE: ClientboundStartConfigurationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ClientboundStartConfigurationPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundStopSoundPacket. */
export interface ClientboundStopSoundPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getName(): JavaOpaque<"net.minecraft.resources.ResourceLocation"> | null;
  getSource(): JavaOpaque<"net.minecraft.sounds.SoundSource"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundStopSoundPacket]>;
}
export type ClientboundStopSoundPacket = ClientboundStopSoundPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundStopSoundPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.resources.ResourceLocation"> | null, arg1: JavaOpaque<"net.minecraft.sounds.SoundSource"> | null): ClientboundStopSoundPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundStopSoundPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundSystemChatPacket. */
export interface ClientboundSystemChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  content(): JavaOpaque<"net.minecraft.network.chat.Component">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  isSkippable(): boolean;
  overlay(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundSystemChatPacket]>;
}
export type ClientboundSystemChatPacket = ClientboundSystemChatPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundSystemChatPacketStatics {
  new(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: boolean): ClientboundSystemChatPacket;
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">, arg1: boolean): ClientboundSystemChatPacket;
  new(arg0: Array<JavaOpaque<"net.md_5.bungee.api.chat.BaseComponent">>, arg1: boolean): ClientboundSystemChatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundSystemChatPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTabListPacket. */
export interface ClientboundTabListPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  footer(): JavaOpaque<"net.minecraft.network.chat.Component">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  header(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTabListPacket]>;
}
export type ClientboundTabListPacket = ClientboundTabListPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTabListPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">, arg1: JavaOpaque<"net.minecraft.network.chat.Component">): ClientboundTabListPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundTabListPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundTagQueryPacket. */
export interface ClientboundTagQueryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getTag(): JavaOpaque<"net.minecraft.nbt.CompoundTag"> | null;
  getTransactionId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isSkippable(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTagQueryPacket]>;
}
export type ClientboundTagQueryPacket = ClientboundTagQueryPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTagQueryPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.nbt.CompoundTag"> | null): ClientboundTagQueryPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundTagQueryPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket. */
export interface ClientboundTakeItemEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getAmount(): number;
  getItemId(): number;
  getPlayerId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTakeItemEntityPacket]>;
}
export type ClientboundTakeItemEntityPacket = ClientboundTakeItemEntityPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTakeItemEntityPacketStatics {
  new(arg0: number, arg1: number, arg2: number): ClientboundTakeItemEntityPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundTakeItemEntityPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket. */
export interface ClientboundTeleportEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  change(): JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  onGround(): boolean;
  relatives(): JavaSet<JavaOpaque<"net.minecraft.world.entity.Relative">>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTeleportEntityPacket]>;
}
export type ClientboundTeleportEntityPacket = ClientboundTeleportEntityPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTeleportEntityPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">, arg2: JavaSet<JavaOpaque<"net.minecraft.world.entity.Relative">>, arg3: boolean): ClientboundTeleportEntityPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundTeleportEntityPacket]>;
  teleport(arg0: number, arg1: JavaOpaque<"net.minecraft.world.entity.PositionMoveRotation">, arg2: JavaSet<JavaOpaque<"net.minecraft.world.entity.Relative">>, arg3: boolean): ClientboundTeleportEntityPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus. */
export interface ClientboundTestInstanceBlockStatusMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  size(): JavaOptional<JavaOpaque<"net.minecraft.core.Vec3i">>;
  status(): JavaOpaque<"net.minecraft.network.chat.Component">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTestInstanceBlockStatus]>;
}
export type ClientboundTestInstanceBlockStatus = ClientboundTestInstanceBlockStatusMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTestInstanceBlockStatusStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.Component">, arg1: JavaOptional<JavaOpaque<"net.minecraft.core.Vec3i">>): ClientboundTestInstanceBlockStatus;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundTestInstanceBlockStatus]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTickingStatePacket. */
export interface ClientboundTickingStatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  isFrozen(): boolean;
  tickRate(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTickingStatePacket]>;
}
export type ClientboundTickingStatePacket = ClientboundTickingStatePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTickingStatePacketStatics {
  new(arg0: number, arg1: boolean): ClientboundTickingStatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundTickingStatePacket]>;
  from(arg0: JavaOpaque<"net.minecraft.world.TickRateManager">): ClientboundTickingStatePacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTickingStepPacket. */
export interface ClientboundTickingStepPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  tickSteps(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTickingStepPacket]>;
}
export type ClientboundTickingStepPacket = ClientboundTickingStepPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTickingStepPacketStatics {
  new(arg0: number): ClientboundTickingStepPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ClientboundTickingStepPacket]>;
  from(arg0: JavaOpaque<"net.minecraft.world.TickRateManager">): ClientboundTickingStepPacket;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket. */
export interface ClientboundTrackedWaypointPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  apply(arg0: JavaOpaque<"net.minecraft.world.waypoints.TrackedWaypointManager">): void;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  operation(): JavaOpaque<"net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket$Operation">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundTrackedWaypointPacket]>;
  waypoint(): JavaOpaque<"net.minecraft.world.waypoints.TrackedWaypoint">;
}
export type ClientboundTrackedWaypointPacket = ClientboundTrackedWaypointPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundTrackedWaypointPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket$Operation">, arg1: JavaOpaque<"net.minecraft.world.waypoints.TrackedWaypoint">): ClientboundTrackedWaypointPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundTrackedWaypointPacket]>;
  addWaypointAzimuth(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.world.waypoints.Waypoint$Icon">, arg2: number): ClientboundTrackedWaypointPacket;
  addWaypointChunk(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.world.waypoints.Waypoint$Icon">, arg2: JavaOpaque<"net.minecraft.world.level.ChunkPos">): ClientboundTrackedWaypointPacket;
  addWaypointPosition(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.world.waypoints.Waypoint$Icon">, arg2: JavaOpaque<"net.minecraft.core.Vec3i">): ClientboundTrackedWaypointPacket;
  removeWaypoint(arg0: JavaOpaque<"java.util.UUID">): ClientboundTrackedWaypointPacket;
  updateWaypointAzimuth(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.world.waypoints.Waypoint$Icon">, arg2: number): ClientboundTrackedWaypointPacket;
  updateWaypointChunk(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.world.waypoints.Waypoint$Icon">, arg2: JavaOpaque<"net.minecraft.world.level.ChunkPos">): ClientboundTrackedWaypointPacket;
  updateWaypointPosition(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"net.minecraft.world.waypoints.Waypoint$Icon">, arg2: JavaOpaque<"net.minecraft.core.Vec3i">): ClientboundTrackedWaypointPacket;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket. */
export interface ClientboundUpdateAdvancementsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getAdded(): JavaList<JavaOpaque<"net.minecraft.advancements.AdvancementHolder">>;
  getProgress(): JavaMap<JavaOpaque<"net.minecraft.resources.ResourceLocation">, JavaOpaque<"net.minecraft.advancements.AdvancementProgress">>;
  getRemoved(): JavaSet<JavaOpaque<"net.minecraft.resources.ResourceLocation">>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  shouldReset(): boolean;
  shouldShowAdvancements(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundUpdateAdvancementsPacket]>;
}
export type ClientboundUpdateAdvancementsPacket = ClientboundUpdateAdvancementsPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundUpdateAdvancementsPacketStatics {
  new(arg0: boolean, arg1: JavaCollection<JavaOpaque<"net.minecraft.advancements.AdvancementHolder">>, arg2: JavaSet<JavaOpaque<"net.minecraft.resources.ResourceLocation">>, arg3: JavaMap<JavaOpaque<"net.minecraft.resources.ResourceLocation">, JavaOpaque<"net.minecraft.advancements.AdvancementProgress">>, arg4: boolean): ClientboundUpdateAdvancementsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundUpdateAdvancementsPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket. */
export interface ClientboundUpdateAttributesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  getEntityId(): number;
  getValues(): JavaList<JavaOpaque<"net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot">>;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundUpdateAttributesPacket]>;
}
export type ClientboundUpdateAttributesPacket = ClientboundUpdateAttributesPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundUpdateAttributesPacketStatics {
  new(arg0: number, arg1: JavaCollection<JavaOpaque<"net.minecraft.world.entity.ai.attributes.AttributeInstance">>): ClientboundUpdateAttributesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundUpdateAttributesPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket. */
export interface ClientboundUpdateMobEffectPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  effectShowsIcon(): boolean;
  getEffect(): JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>;
  getEffectAmplifier(): number;
  getEffectDurationTicks(): number;
  getEntityId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  isEffectAmbient(): boolean;
  isEffectVisible(): boolean;
  shouldBlend(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundUpdateMobEffectPacket]>;
}
export type ClientboundUpdateMobEffectPacket = ClientboundUpdateMobEffectPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundUpdateMobEffectPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.effect.MobEffectInstance">, arg2: boolean): ClientboundUpdateMobEffectPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundUpdateMobEffectPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket. */
export interface ClientboundUpdateRecipesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">): void;
  hashCode(): number;
  itemSets(): JavaMap<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.world.item.crafting.RecipePropertySet">]>, JavaOpaque<"net.minecraft.world.item.crafting.RecipePropertySet">>;
  stonecutterRecipes(): JavaOpaque<"net.minecraft.world.item.crafting.SelectableRecipe$SingleInputSet", [JavaOpaque<"net.minecraft.world.item.crafting.StonecutterRecipe">]>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ClientboundUpdateRecipesPacket]>;
}
export type ClientboundUpdateRecipesPacket = ClientboundUpdateRecipesPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ClientGamePacketListener">]>;
export interface ClientboundUpdateRecipesPacketStatics {
  new(arg0: JavaMap<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.world.item.crafting.RecipePropertySet">]>, JavaOpaque<"net.minecraft.world.item.crafting.RecipePropertySet">>, arg1: JavaOpaque<"net.minecraft.world.item.crafting.SelectableRecipe$SingleInputSet", [JavaOpaque<"net.minecraft.world.item.crafting.StonecutterRecipe">]>): ClientboundUpdateRecipesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ClientboundUpdateRecipesPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket. */
export interface ServerboundAcceptTeleportationPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundAcceptTeleportationPacket]>;
}
export type ServerboundAcceptTeleportationPacket = ServerboundAcceptTeleportationPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundAcceptTeleportationPacketStatics {
  new(arg0: number): ServerboundAcceptTeleportationPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundAcceptTeleportationPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket. */
export interface ServerboundBlockEntityTagQueryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getTransactionId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundBlockEntityTagQueryPacket]>;
}
export type ServerboundBlockEntityTagQueryPacket = ServerboundBlockEntityTagQueryPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundBlockEntityTagQueryPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.core.BlockPos">): ServerboundBlockEntityTagQueryPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundBlockEntityTagQueryPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket. */
export interface ServerboundChangeDifficultyPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  difficulty(): JavaOpaque<"net.minecraft.world.Difficulty">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChangeDifficultyPacket]>;
}
export type ServerboundChangeDifficultyPacket = ServerboundChangeDifficultyPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChangeDifficultyPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.Difficulty">): ServerboundChangeDifficultyPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundChangeDifficultyPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChangeGameModePacket. */
export interface ServerboundChangeGameModePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  mode(): JavaOpaque<"net.minecraft.world.level.GameType">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChangeGameModePacket]>;
}
export type ServerboundChangeGameModePacket = ServerboundChangeGameModePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChangeGameModePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.level.GameType">): ServerboundChangeGameModePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundChangeGameModePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatAckPacket. */
export interface ServerboundChatAckPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  offset(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChatAckPacket]>;
}
export type ServerboundChatAckPacket = ServerboundChatAckPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChatAckPacketStatics {
  new(arg0: number): ServerboundChatAckPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundChatAckPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatCommandPacket. */
export interface ServerboundChatCommandPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  command(): string;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChatCommandPacket]>;
}
export type ServerboundChatCommandPacket = ServerboundChatCommandPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChatCommandPacketStatics {
  new(arg0: string): ServerboundChatCommandPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundChatCommandPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket. */
export interface ServerboundChatCommandSignedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  argumentSignatures(): JavaOpaque<"net.minecraft.commands.arguments.ArgumentSignatures">;
  command(): string;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  lastSeenMessages(): JavaOpaque<"net.minecraft.network.chat.LastSeenMessages$Update">;
  salt(): bigint;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChatCommandSignedPacket]>;
}
export type ServerboundChatCommandSignedPacket = ServerboundChatCommandSignedPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChatCommandSignedPacketStatics {
  new(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: bigint, arg3: JavaOpaque<"net.minecraft.commands.arguments.ArgumentSignatures">, arg4: JavaOpaque<"net.minecraft.network.chat.LastSeenMessages$Update">): ServerboundChatCommandSignedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundChatCommandSignedPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatPacket. */
export interface ServerboundChatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  lastSeenMessages(): JavaOpaque<"net.minecraft.network.chat.LastSeenMessages$Update">;
  message(): string;
  salt(): bigint;
  signature(): JavaOpaque<"net.minecraft.network.chat.MessageSignature"> | null;
  timeStamp(): JavaOpaque<"java.time.Instant">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChatPacket]>;
}
export type ServerboundChatPacket = ServerboundChatPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChatPacketStatics {
  new(arg0: string, arg1: JavaOpaque<"java.time.Instant">, arg2: bigint, arg3: JavaOpaque<"net.minecraft.network.chat.MessageSignature"> | null, arg4: JavaOpaque<"net.minecraft.network.chat.LastSeenMessages$Update">): ServerboundChatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundChatPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket. */
export interface ServerboundChatSessionUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  chatSession(): JavaOpaque<"net.minecraft.network.chat.RemoteChatSession$Data">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChatSessionUpdatePacket]>;
}
export type ServerboundChatSessionUpdatePacket = ServerboundChatSessionUpdatePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChatSessionUpdatePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.chat.RemoteChatSession$Data">): ServerboundChatSessionUpdatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundChatSessionUpdatePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket. */
export interface ServerboundChunkBatchReceivedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  desiredChunksPerTick(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundChunkBatchReceivedPacket]>;
}
export type ServerboundChunkBatchReceivedPacket = ServerboundChunkBatchReceivedPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundChunkBatchReceivedPacketStatics {
  new(arg0: number): ServerboundChunkBatchReceivedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundChunkBatchReceivedPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundClientCommandPacket. */
export interface ServerboundClientCommandPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getAction(): JavaOpaque<"net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundClientCommandPacket]>;
}
export type ServerboundClientCommandPacket = ServerboundClientCommandPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundClientCommandPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action">): ServerboundClientCommandPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundClientCommandPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundClientTickEndPacket. */
export interface ServerboundClientTickEndPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundClientTickEndPacket]>;
}
export type ServerboundClientTickEndPacket = ServerboundClientTickEndPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundClientTickEndPacketStatics {
  new(): ServerboundClientTickEndPacket;
  readonly INSTANCE: ServerboundClientTickEndPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundClientTickEndPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket. */
export interface ServerboundCommandSuggestionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getCommand(): string;
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundCommandSuggestionPacket]>;
}
export type ServerboundCommandSuggestionPacket = ServerboundCommandSuggestionPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundCommandSuggestionPacketStatics {
  new(arg0: number, arg1: string): ServerboundCommandSuggestionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundCommandSuggestionPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket. */
export interface ServerboundConfigurationAcknowledgedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isTerminal(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundConfigurationAcknowledgedPacket]>;
}
export type ServerboundConfigurationAcknowledgedPacket = ServerboundConfigurationAcknowledgedPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundConfigurationAcknowledgedPacketStatics {
  readonly INSTANCE: ServerboundConfigurationAcknowledgedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundConfigurationAcknowledgedPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket. */
export interface ServerboundContainerButtonClickPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  buttonId(): number;
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundContainerButtonClickPacket]>;
}
export type ServerboundContainerButtonClickPacket = ServerboundContainerButtonClickPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundContainerButtonClickPacketStatics {
  new(arg0: number, arg1: number): ServerboundContainerButtonClickPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundContainerButtonClickPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundContainerClickPacket. */
export interface ServerboundContainerClickPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  buttonNum(): number;
  carriedItem(): JavaOpaque<"net.minecraft.network.HashedStack">;
  changedSlots(): JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [JavaOpaque<"net.minecraft.network.HashedStack">]>;
  clickType(): JavaOpaque<"net.minecraft.world.inventory.ClickType">;
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  slotNum(): number;
  stateId(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundContainerClickPacket]>;
}
export type ServerboundContainerClickPacket = ServerboundContainerClickPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundContainerClickPacketStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JavaOpaque<"net.minecraft.world.inventory.ClickType">, arg5: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [JavaOpaque<"net.minecraft.network.HashedStack">]>, arg6: JavaOpaque<"net.minecraft.network.HashedStack">): ServerboundContainerClickPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ServerboundContainerClickPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundContainerClosePacket. */
export interface ServerboundContainerClosePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getContainerId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundContainerClosePacket]>;
}
export type ServerboundContainerClosePacket = ServerboundContainerClosePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundContainerClosePacketStatics {
  new(arg0: number): ServerboundContainerClosePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundContainerClosePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket. */
export interface ServerboundContainerSlotStateChangedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  newState(): boolean;
  slotId(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundContainerSlotStateChangedPacket]>;
}
export type ServerboundContainerSlotStateChangedPacket = ServerboundContainerSlotStateChangedPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundContainerSlotStateChangedPacketStatics {
  new(arg0: number, arg1: number, arg2: boolean): ServerboundContainerSlotStateChangedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundContainerSlotStateChangedPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket. */
export interface ServerboundDebugSampleSubscriptionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  sampleType(): JavaOpaque<"net.minecraft.util.debugchart.RemoteDebugSampleType">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundDebugSampleSubscriptionPacket]>;
}
export type ServerboundDebugSampleSubscriptionPacket = ServerboundDebugSampleSubscriptionPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundDebugSampleSubscriptionPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.util.debugchart.RemoteDebugSampleType">): ServerboundDebugSampleSubscriptionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundDebugSampleSubscriptionPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundEditBookPacket. */
export interface ServerboundEditBookPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  pages(): JavaList<string>;
  slot(): number;
  title(): JavaOptional<string>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundEditBookPacket]>;
}
export type ServerboundEditBookPacket = ServerboundEditBookPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundEditBookPacketStatics {
  new(arg0: number, arg1: JavaList<string>, arg2: JavaOptional<string>): ServerboundEditBookPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundEditBookPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket. */
export interface ServerboundEntityTagQueryPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getEntityId(): number;
  getTransactionId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundEntityTagQueryPacket]>;
}
export type ServerboundEntityTagQueryPacket = ServerboundEntityTagQueryPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundEntityTagQueryPacketStatics {
  new(arg0: number, arg1: number): ServerboundEntityTagQueryPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundEntityTagQueryPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundInteractPacket. */
export interface ServerboundInteractPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  dispatch(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler">): void;
  getEntityId(): number;
  getTarget(arg0: JavaOpaque<"net.minecraft.server.level.ServerLevel">): JavaOpaque<"net.minecraft.world.entity.Entity"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isAttack(): boolean;
  isUsingSecondaryAction(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundInteractPacket]>;
}
export type ServerboundInteractPacket = ServerboundInteractPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundInteractPacketStatics {
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundInteractPacket]>;
  createAttackPacket(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: boolean): ServerboundInteractPacket;
  createInteractionPacket(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: boolean, arg2: JavaOpaque<"net.minecraft.world.InteractionHand">): ServerboundInteractPacket;
  createInteractionPacket(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: boolean, arg2: JavaOpaque<"net.minecraft.world.InteractionHand">, arg3: JavaOpaque<"net.minecraft.world.phys.Vec3">): ServerboundInteractPacket;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket. */
export interface ServerboundJigsawGeneratePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  keepJigsaws(): boolean;
  levels(): number;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundJigsawGeneratePacket]>;
}
export type ServerboundJigsawGeneratePacket = ServerboundJigsawGeneratePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundJigsawGeneratePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: number, arg2: boolean): ServerboundJigsawGeneratePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundJigsawGeneratePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket. */
export interface ServerboundLockDifficultyPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isLocked(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundLockDifficultyPacket]>;
}
export type ServerboundLockDifficultyPacket = ServerboundLockDifficultyPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundLockDifficultyPacketStatics {
  new(arg0: boolean): ServerboundLockDifficultyPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundLockDifficultyPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos. */
export interface ServerboundMovePlayerPacket_PosMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundMovePlayerPacket_Pos]>;
}
export type ServerboundMovePlayerPacket_Pos = ServerboundMovePlayerPacket_PosMembers & JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">;
export interface ServerboundMovePlayerPacket_PosStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): ServerboundMovePlayerPacket_Pos;
  new(arg0: JavaOpaque<"net.minecraft.world.phys.Vec3">, arg1: boolean, arg2: boolean): ServerboundMovePlayerPacket_Pos;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundMovePlayerPacket_Pos]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot. */
export interface ServerboundMovePlayerPacket_PosRotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundMovePlayerPacket_PosRot]>;
}
export type ServerboundMovePlayerPacket_PosRot = ServerboundMovePlayerPacket_PosRotMembers & JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">;
export interface ServerboundMovePlayerPacket_PosRotStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): ServerboundMovePlayerPacket_PosRot;
  new(arg0: JavaOpaque<"net.minecraft.world.phys.Vec3">, arg1: number, arg2: number, arg3: boolean, arg4: boolean): ServerboundMovePlayerPacket_PosRot;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundMovePlayerPacket_PosRot]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot. */
export interface ServerboundMovePlayerPacket_RotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundMovePlayerPacket_Rot]>;
}
export type ServerboundMovePlayerPacket_Rot = ServerboundMovePlayerPacket_RotMembers & JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">;
export interface ServerboundMovePlayerPacket_RotStatics {
  new(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ServerboundMovePlayerPacket_Rot;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundMovePlayerPacket_Rot]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly. */
export interface ServerboundMovePlayerPacket_StatusOnlyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">];
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundMovePlayerPacket_StatusOnly]>;
}
export type ServerboundMovePlayerPacket_StatusOnly = ServerboundMovePlayerPacket_StatusOnlyMembers & JavaOpaque<"net.minecraft.network.protocol.game.ServerboundMovePlayerPacket">;
export interface ServerboundMovePlayerPacket_StatusOnlyStatics {
  new(arg0: boolean, arg1: boolean): ServerboundMovePlayerPacket_StatusOnly;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundMovePlayerPacket_StatusOnly]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket. */
export interface ServerboundMoveVehiclePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  onGround(): boolean;
  position(): JavaOpaque<"net.minecraft.world.phys.Vec3">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundMoveVehiclePacket]>;
  xRot(): number;
  yRot(): number;
}
export type ServerboundMoveVehiclePacket = ServerboundMoveVehiclePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundMoveVehiclePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.phys.Vec3">, arg1: number, arg2: number, arg3: boolean): ServerboundMoveVehiclePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundMoveVehiclePacket]>;
  fromEntity(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">): ServerboundMoveVehiclePacket;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket. */
export interface ServerboundPaddleBoatPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getLeft(): boolean;
  getRight(): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPaddleBoatPacket]>;
}
export type ServerboundPaddleBoatPacket = ServerboundPaddleBoatPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPaddleBoatPacketStatics {
  new(arg0: boolean, arg1: boolean): ServerboundPaddleBoatPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPaddleBoatPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket. */
export interface ServerboundPickItemFromBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  includeData(): boolean;
  pos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPickItemFromBlockPacket]>;
}
export type ServerboundPickItemFromBlockPacket = ServerboundPickItemFromBlockPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPickItemFromBlockPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: boolean): ServerboundPickItemFromBlockPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPickItemFromBlockPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket. */
export interface ServerboundPickItemFromEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  id(): number;
  includeData(): boolean;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPickItemFromEntityPacket]>;
}
export type ServerboundPickItemFromEntityPacket = ServerboundPickItemFromEntityPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPickItemFromEntityPacketStatics {
  new(arg0: number, arg1: boolean): ServerboundPickItemFromEntityPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPickItemFromEntityPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket. */
export interface ServerboundPlaceRecipePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  containerId(): number;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  recipe(): JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplayId">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPlaceRecipePacket]>;
  useMaxItems(): boolean;
}
export type ServerboundPlaceRecipePacket = ServerboundPlaceRecipePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPlaceRecipePacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplayId">, arg2: boolean): ServerboundPlaceRecipePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPlaceRecipePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket. */
export interface ServerboundPlayerAbilitiesPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isFlying(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPlayerAbilitiesPacket]>;
}
export type ServerboundPlayerAbilitiesPacket = ServerboundPlayerAbilitiesPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPlayerAbilitiesPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.player.Abilities">): ServerboundPlayerAbilitiesPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPlayerAbilitiesPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPlayerActionPacket. */
export interface ServerboundPlayerActionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getAction(): JavaOpaque<"net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action">;
  getDirection(): JavaOpaque<"net.minecraft.core.Direction">;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getSequence(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPlayerActionPacket]>;
}
export type ServerboundPlayerActionPacket = ServerboundPlayerActionPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPlayerActionPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action">, arg1: JavaOpaque<"net.minecraft.core.BlockPos">, arg2: JavaOpaque<"net.minecraft.core.Direction">): ServerboundPlayerActionPacket;
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action">, arg1: JavaOpaque<"net.minecraft.core.BlockPos">, arg2: JavaOpaque<"net.minecraft.core.Direction">, arg3: number): ServerboundPlayerActionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPlayerActionPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket. */
export interface ServerboundPlayerCommandPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getAction(): JavaOpaque<"net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action">;
  getData(): number;
  getId(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPlayerCommandPacket]>;
}
export type ServerboundPlayerCommandPacket = ServerboundPlayerCommandPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPlayerCommandPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action">): ServerboundPlayerCommandPacket;
  new(arg0: JavaOpaque<"net.minecraft.world.entity.Entity">, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action">, arg2: number): ServerboundPlayerCommandPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPlayerCommandPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPlayerInputPacket. */
export interface ServerboundPlayerInputPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  input(): JavaOpaque<"net.minecraft.world.entity.player.Input">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPlayerInputPacket]>;
}
export type ServerboundPlayerInputPacket = ServerboundPlayerInputPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPlayerInputPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.entity.player.Input">): ServerboundPlayerInputPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundPlayerInputPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket. */
export interface ServerboundPlayerLoadedPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundPlayerLoadedPacket]>;
}
export type ServerboundPlayerLoadedPacket = ServerboundPlayerLoadedPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundPlayerLoadedPacketStatics {
  new(): ServerboundPlayerLoadedPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"io.netty.buffer.ByteBuf">, ServerboundPlayerLoadedPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket. */
export interface ServerboundRecipeBookChangeSettingsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getBookType(): JavaOpaque<"net.minecraft.world.inventory.RecipeBookType">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isFiltering(): boolean;
  isOpen(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundRecipeBookChangeSettingsPacket]>;
}
export type ServerboundRecipeBookChangeSettingsPacket = ServerboundRecipeBookChangeSettingsPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundRecipeBookChangeSettingsPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.inventory.RecipeBookType">, arg1: boolean, arg2: boolean): ServerboundRecipeBookChangeSettingsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundRecipeBookChangeSettingsPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket. */
export interface ServerboundRecipeBookSeenRecipePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  recipe(): JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplayId">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundRecipeBookSeenRecipePacket]>;
}
export type ServerboundRecipeBookSeenRecipePacket = ServerboundRecipeBookSeenRecipePacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundRecipeBookSeenRecipePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.item.crafting.display.RecipeDisplayId">): ServerboundRecipeBookSeenRecipePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundRecipeBookSeenRecipePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundRenameItemPacket. */
export interface ServerboundRenameItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getName(): string;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundRenameItemPacket]>;
}
export type ServerboundRenameItemPacket = ServerboundRenameItemPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundRenameItemPacketStatics {
  new(arg0: string): ServerboundRenameItemPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundRenameItemPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket. */
export interface ServerboundSeenAdvancementsPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getAction(): JavaOpaque<"net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action">;
  getTab(): JavaOpaque<"net.minecraft.resources.ResourceLocation"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSeenAdvancementsPacket]>;
}
export type ServerboundSeenAdvancementsPacket = ServerboundSeenAdvancementsPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSeenAdvancementsPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action">, arg1: JavaOpaque<"net.minecraft.resources.ResourceLocation"> | null): ServerboundSeenAdvancementsPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSeenAdvancementsPacket]>;
  closedScreen(): ServerboundSeenAdvancementsPacket;
  openedTab(arg0: JavaOpaque<"net.minecraft.advancements.AdvancementHolder">): ServerboundSeenAdvancementsPacket;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket. */
export interface ServerboundSelectBundleItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  selectedItemIndex(): number;
  slotId(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSelectBundleItemPacket]>;
}
export type ServerboundSelectBundleItemPacket = ServerboundSelectBundleItemPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSelectBundleItemPacketStatics {
  new(arg0: number, arg1: number): ServerboundSelectBundleItemPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSelectBundleItemPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSelectTradePacket. */
export interface ServerboundSelectTradePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getItem(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSelectTradePacket]>;
}
export type ServerboundSelectTradePacket = ServerboundSelectTradePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSelectTradePacketStatics {
  new(arg0: number): ServerboundSelectTradePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSelectTradePacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSetBeaconPacket. */
export interface ServerboundSetBeaconPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  primary(): JavaOptional<JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>>;
  secondary(): JavaOptional<JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>>;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetBeaconPacket]>;
}
export type ServerboundSetBeaconPacket = ServerboundSetBeaconPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetBeaconPacketStatics {
  new(arg0: JavaOptional<JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>>, arg1: JavaOptional<JavaOpaque<"net.minecraft.core.Holder", [JavaOpaque<"net.minecraft.world.effect.MobEffect">]>>): ServerboundSetBeaconPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ServerboundSetBeaconPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket. */
export interface ServerboundSetCarriedItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getSlot(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetCarriedItemPacket]>;
}
export type ServerboundSetCarriedItemPacket = ServerboundSetCarriedItemPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetCarriedItemPacketStatics {
  new(arg0: number): ServerboundSetCarriedItemPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSetCarriedItemPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket. */
export interface ServerboundSetCommandBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getCommand(): string;
  getMode(): JavaOpaque<"net.minecraft.world.level.block.entity.CommandBlockEntity$Mode">;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isAutomatic(): boolean;
  isConditional(): boolean;
  isTrackOutput(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetCommandBlockPacket]>;
}
export type ServerboundSetCommandBlockPacket = ServerboundSetCommandBlockPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetCommandBlockPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: string, arg2: JavaOpaque<"net.minecraft.world.level.block.entity.CommandBlockEntity$Mode">, arg3: boolean, arg4: boolean, arg5: boolean): ServerboundSetCommandBlockPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSetCommandBlockPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket. */
export interface ServerboundSetCommandMinecartPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getCommand(): string;
  getCommandBlock(arg0: JavaOpaque<"net.minecraft.world.level.Level">): JavaOpaque<"net.minecraft.world.level.BaseCommandBlock"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isTrackOutput(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetCommandMinecartPacket]>;
}
export type ServerboundSetCommandMinecartPacket = ServerboundSetCommandMinecartPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetCommandMinecartPacketStatics {
  new(arg0: number, arg1: string, arg2: boolean): ServerboundSetCommandMinecartPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSetCommandMinecartPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket. */
export interface ServerboundSetCreativeModeSlotPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  itemStack(): JavaOpaque<"net.minecraft.world.item.ItemStack">;
  slotNum(): number;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetCreativeModeSlotPacket]>;
}
export type ServerboundSetCreativeModeSlotPacket = ServerboundSetCreativeModeSlotPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetCreativeModeSlotPacketStatics {
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.item.ItemStack">): ServerboundSetCreativeModeSlotPacket;
  new(arg0: number, arg1: JavaOpaque<"net.minecraft.world.item.ItemStack">): ServerboundSetCreativeModeSlotPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ServerboundSetCreativeModeSlotPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket. */
export interface ServerboundSetJigsawBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getFinalState(): string;
  getJoint(): JavaOpaque<"net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType">;
  getName(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  getPlacementPriority(): number;
  getPool(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getSelectionPriority(): number;
  getTarget(): JavaOpaque<"net.minecraft.resources.ResourceLocation">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetJigsawBlockPacket]>;
}
export type ServerboundSetJigsawBlockPacket = ServerboundSetJigsawBlockPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetJigsawBlockPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg2: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg3: JavaOpaque<"net.minecraft.resources.ResourceLocation">, arg4: string, arg5: JavaOpaque<"net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType">, arg6: number, arg7: number): ServerboundSetJigsawBlockPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSetJigsawBlockPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket. */
export interface ServerboundSetStructureBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getData(): string;
  getIntegrity(): number;
  getMirror(): JavaOpaque<"net.minecraft.world.level.block.Mirror">;
  getMode(): JavaOpaque<"net.minecraft.world.level.block.state.properties.StructureMode">;
  getName(): string;
  getOffset(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  getRotation(): JavaOpaque<"net.minecraft.world.level.block.Rotation">;
  getSeed(): bigint;
  getSize(): JavaOpaque<"net.minecraft.core.Vec3i">;
  getUpdateType(): JavaOpaque<"net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isIgnoreEntities(): boolean;
  isShowAir(): boolean;
  isShowBoundingBox(): boolean;
  isStrict(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetStructureBlockPacket]>;
}
export type ServerboundSetStructureBlockPacket = ServerboundSetStructureBlockPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetStructureBlockPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType">, arg2: JavaOpaque<"net.minecraft.world.level.block.state.properties.StructureMode">, arg3: string, arg4: JavaOpaque<"net.minecraft.core.BlockPos">, arg5: JavaOpaque<"net.minecraft.core.Vec3i">, arg6: JavaOpaque<"net.minecraft.world.level.block.Mirror">, arg7: JavaOpaque<"net.minecraft.world.level.block.Rotation">, arg8: string, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: number, arg14: bigint): ServerboundSetStructureBlockPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSetStructureBlockPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket. */
export interface ServerboundSetTestBlockPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  message(): string;
  mode(): JavaOpaque<"net.minecraft.world.level.block.state.properties.TestBlockMode">;
  position(): JavaOpaque<"net.minecraft.core.BlockPos">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSetTestBlockPacket]>;
}
export type ServerboundSetTestBlockPacket = ServerboundSetTestBlockPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSetTestBlockPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.world.level.block.state.properties.TestBlockMode">, arg2: string): ServerboundSetTestBlockPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSetTestBlockPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSignUpdatePacket. */
export interface ServerboundSignUpdatePacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getLines(): Array<string>;
  getPos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  isFrontText(): boolean;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSignUpdatePacket]>;
}
export type ServerboundSignUpdatePacket = ServerboundSignUpdatePacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSignUpdatePacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: boolean, arg2: string, arg3: string, arg4: string, arg5: string): ServerboundSignUpdatePacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSignUpdatePacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundSwingPacket. */
export interface ServerboundSwingPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getHand(): JavaOpaque<"net.minecraft.world.InteractionHand">;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundSwingPacket]>;
}
export type ServerboundSwingPacket = ServerboundSwingPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundSwingPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.InteractionHand">): ServerboundSwingPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundSwingPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket. */
export interface ServerboundTeleportToEntityPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getEntity(arg0: JavaOpaque<"net.minecraft.server.level.ServerLevel">): JavaOpaque<"net.minecraft.world.entity.Entity"> | null;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundTeleportToEntityPacket]>;
}
export type ServerboundTeleportToEntityPacket = ServerboundTeleportToEntityPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundTeleportToEntityPacketStatics {
  new(arg0: JavaOpaque<"java.util.UUID">): ServerboundTeleportToEntityPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundTeleportToEntityPacket]>;
}

/** JVM record net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket. */
export interface ServerboundTestInstanceBlockActionPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  action(): JavaOpaque<"net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action">;
  data(): JavaOpaque<"net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Data">;
  equals(arg0: object): boolean;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  hashCode(): number;
  pos(): JavaOpaque<"net.minecraft.core.BlockPos">;
  toString(): string;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundTestInstanceBlockActionPacket]>;
}
export type ServerboundTestInstanceBlockActionPacket = ServerboundTestInstanceBlockActionPacketMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundTestInstanceBlockActionPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action">, arg2: JavaOptional<JavaOpaque<"net.minecraft.resources.ResourceKey", [JavaOpaque<"net.minecraft.gametest.framework.GameTestInstance">]>>, arg3: JavaOpaque<"net.minecraft.core.Vec3i">, arg4: JavaOpaque<"net.minecraft.world.level.block.Rotation">, arg5: boolean): ServerboundTestInstanceBlockActionPacket;
  new(arg0: JavaOpaque<"net.minecraft.core.BlockPos">, arg1: JavaOpaque<"net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action">, arg2: JavaOpaque<"net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Data">): ServerboundTestInstanceBlockActionPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.RegistryFriendlyByteBuf">, ServerboundTestInstanceBlockActionPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundUseItemOnPacket. */
export interface ServerboundUseItemOnPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getHand(): JavaOpaque<"net.minecraft.world.InteractionHand">;
  getHitResult(): JavaOpaque<"net.minecraft.world.phys.BlockHitResult">;
  getSequence(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  timestamp: bigint;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundUseItemOnPacket]>;
}
export type ServerboundUseItemOnPacket = ServerboundUseItemOnPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundUseItemOnPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.InteractionHand">, arg1: JavaOpaque<"net.minecraft.world.phys.BlockHitResult">, arg2: number): ServerboundUseItemOnPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundUseItemOnPacket]>;
}

/** JVM class net.minecraft.network.protocol.game.ServerboundUseItemPacket. */
export interface ServerboundUseItemPacketMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>];
  getHand(): JavaOpaque<"net.minecraft.world.InteractionHand">;
  getSequence(): number;
  getXRot(): number;
  getYRot(): number;
  handle(arg0: JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">): void;
  timestamp: bigint;
  type(): JavaOpaque<"net.minecraft.network.protocol.PacketType", [ServerboundUseItemPacket]>;
}
export type ServerboundUseItemPacket = ServerboundUseItemPacketMembers & JavaOpaque<"net.minecraft.network.protocol.Packet", [JavaOpaque<"net.minecraft.network.protocol.game.ServerGamePacketListener">]>;
export interface ServerboundUseItemPacketStatics {
  new(arg0: JavaOpaque<"net.minecraft.world.InteractionHand">, arg1: number, arg2: number, arg3: number): ServerboundUseItemPacket;
  readonly STREAM_CODEC: JavaOpaque<"net.minecraft.network.codec.StreamCodec", [JavaOpaque<"net.minecraft.network.FriendlyByteBuf">, ServerboundUseItemPacket]>;
}
