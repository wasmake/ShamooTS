// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';

/** JVM class net.minecraft.server.commands.data.BlockDataAccessor. */
export interface BlockDataAccessorMembers {
  readonly __javaSupertypes?: readonly [DataAccessor];
  getData(): j_net_minecraft_nbt.CompoundTag;
  getModifiedSuccess(): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath, arg1: number, arg2: number): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_nbt.Tag): j_net_minecraft_network_chat.Component;
  setData(arg0: j_net_minecraft_nbt.CompoundTag): void;
}
export type BlockDataAccessor = BlockDataAccessorMembers & DataAccessor;
export interface BlockDataAccessorStatics {
  new(arg0: j_net_minecraft_world_level_block_entity.BlockEntity, arg1: j_net_minecraft_core.BlockPos): BlockDataAccessor;
  readonly PROVIDER: JavaFunction<string, DataCommands_DataProvider>;
}

/** JVM interface net.minecraft.server.commands.data.DataAccessor. */
export interface DataAccessorMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getData(): j_net_minecraft_nbt.CompoundTag;
  getModifiedSuccess(): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath, arg1: number, arg2: number): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_nbt.Tag): j_net_minecraft_network_chat.Component;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  setData(arg0: j_net_minecraft_nbt.CompoundTag): void;
}
export type DataAccessor = DataAccessorMembers;
export interface DataAccessorStatics {
}

/** JVM class net.minecraft.server.commands.data.DataCommands. */
export interface DataCommandsMembers {
}
export type DataCommands = DataCommandsMembers;
export interface DataCommandsStatics {
  new(): DataCommands;
  readonly ALL_PROVIDERS: JavaList<JavaFunction<string, DataCommands_DataProvider>>;
  readonly SOURCE_PROVIDERS: JavaList<DataCommands_DataProvider>;
  readonly TARGET_PROVIDERS: JavaList<DataCommands_DataProvider>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getSingleTag(arg0: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath, arg1: DataAccessor): j_net_minecraft_nbt.Tag;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM interface net.minecraft.server.commands.data.DataCommands$DataProvider. */
export interface DataCommands_DataProviderMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  access(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): DataAccessor;
  wrap(arg0: JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [j_net_minecraft_commands.CommandSourceStack, object]>, arg1: JavaFunction<JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [j_net_minecraft_commands.CommandSourceStack, object]>, JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [j_net_minecraft_commands.CommandSourceStack, object]>>): JavaOpaque<"com.mojang.brigadier.builder.ArgumentBuilder", [j_net_minecraft_commands.CommandSourceStack, object]>;
}
export type DataCommands_DataProvider = DataCommands_DataProviderMembers;
export interface DataCommands_DataProviderStatics {
}

/** JVM class net.minecraft.server.commands.data.EntityDataAccessor. */
export interface EntityDataAccessor_2Members {
  readonly __javaSupertypes?: readonly [DataAccessor];
  getData(): j_net_minecraft_nbt.CompoundTag;
  getModifiedSuccess(): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath, arg1: number, arg2: number): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_nbt.Tag): j_net_minecraft_network_chat.Component;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  setData(arg0: j_net_minecraft_nbt.CompoundTag): void;
}
export type EntityDataAccessor_2 = EntityDataAccessor_2Members & DataAccessor;
export interface EntityDataAccessor_2Statics {
  new(arg0: j_net_minecraft_world_entity.Entity): EntityDataAccessor_2;
  readonly PROVIDER: JavaFunction<string, DataCommands_DataProvider>;
}

/** JVM class net.minecraft.server.commands.data.StorageDataAccessor. */
export interface StorageDataAccessorMembers {
  readonly __javaSupertypes?: readonly [DataAccessor];
  getData(): j_net_minecraft_nbt.CompoundTag;
  getModifiedSuccess(): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_commands_arguments.NbtPathArgument_NbtPath, arg1: number, arg2: number): j_net_minecraft_network_chat.Component;
  getPrintSuccess(arg0: j_net_minecraft_nbt.Tag): j_net_minecraft_network_chat.Component;
  setData(arg0: j_net_minecraft_nbt.CompoundTag): void;
}
export type StorageDataAccessor = StorageDataAccessorMembers & DataAccessor;
export interface StorageDataAccessorStatics {
  readonly PROVIDER: JavaFunction<string, DataCommands_DataProvider>;
}
