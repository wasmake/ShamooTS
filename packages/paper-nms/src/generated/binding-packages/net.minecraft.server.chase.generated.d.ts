// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_players from './net.minecraft.server.players.generated.js';

/** JVM class net.minecraft.server.chase.ChaseClient. */
export interface ChaseClientMembers {
  run(): void;
  start(): void;
  stop(): void;
}
export type ChaseClient = ChaseClientMembers;
export interface ChaseClientStatics {
  new(arg0: string, arg1: number, arg2: j_net_minecraft_server.MinecraftServer): ChaseClient;
}

/** JVM class net.minecraft.server.chase.ChaseServer. */
export interface ChaseServerMembers {
  /** @throws java.io.IOException */
  start(): void;
  stop(): void;
}
export type ChaseServer = ChaseServerMembers;
export interface ChaseServerStatics {
  new(arg0: string, arg1: number, arg2: j_net_minecraft_server_players.PlayerList, arg3: number): ChaseServer;
}
