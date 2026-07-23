// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';

/** JVM class net.minecraft.server.rcon.NetworkDataOutputStream. */
export interface NetworkDataOutputStreamMembers {
  reset(): void;
  toByteArray(): Array<number>;
  /** @throws java.io.IOException */
  write(arg0: number): void;
  /** @throws java.io.IOException */
  writeBytes(arg0: Array<number>): void;
  /** @throws java.io.IOException */
  writeFloat(arg0: number): void;
  /** @throws java.io.IOException */
  writeInt(arg0: number): void;
  /** @throws java.io.IOException */
  writeShort(arg0: number): void;
  /** @throws java.io.IOException */
  writeString(arg0: string): void;
}
export type NetworkDataOutputStream = NetworkDataOutputStreamMembers;
export interface NetworkDataOutputStreamStatics {
  new(arg0: number): NetworkDataOutputStream;
}

/** JVM class net.minecraft.server.rcon.PktUtils. */
export interface PktUtilsMembers {
}
export type PktUtils = PktUtilsMembers;
export interface PktUtilsStatics {
  new(): PktUtils;
  readonly HEX_CHAR: Array<string>;
  readonly MAX_PACKET_SIZE: 1460;
  intFromByteArray(arg0: Array<number>, arg1: number): number;
  intFromByteArray(arg0: Array<number>, arg1: number, arg2: number): number;
  intFromNetworkByteArray(arg0: Array<number>, arg1: number, arg2: number): number;
  stringFromByteArray(arg0: Array<number>, arg1: number, arg2: number): string;
  toHexString(arg0: number): string;
}

/** JVM class net.minecraft.server.rcon.RconConsoleSource. */
export interface RconConsoleSourceMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands.CommandSource];
  acceptsFailure(): boolean;
  acceptsSuccess(): boolean;
  createCommandSourceStack(): j_net_minecraft_commands.CommandSourceStack;
  getBukkitSender(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"org.bukkit.command.CommandSender">;
  getCommandResponse(): string;
  prepareForCommand(): void;
  sendMessage(arg0: string): void;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component): void;
  shouldInformAdmins(): boolean;
  readonly socketAddress: JavaOpaque<"java.net.SocketAddress">;
}
export type RconConsoleSource = RconConsoleSourceMembers & j_net_minecraft_commands.CommandSource;
export interface RconConsoleSourceStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: JavaOpaque<"java.net.SocketAddress">): RconConsoleSource;
}
