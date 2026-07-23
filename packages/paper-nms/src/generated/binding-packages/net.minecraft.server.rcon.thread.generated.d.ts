// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';

/** JVM abstract net.minecraft.server.rcon.thread.GenericThread. */
export interface GenericThreadMembers {
  readonly __javaSupertypes?: readonly [JavaRunnable];
  isRunning(): boolean;
  readonly name: string;
  running: boolean;
  start(): boolean;
  stop(): void;
  thread: JavaOpaque<"java.lang.Thread"> | null;
}
export type GenericThread = GenericThreadMembers & JavaRunnable;
export interface GenericThreadStatics {
  new(arg0: string): GenericThread;
}

/** JVM class net.minecraft.server.rcon.thread.QueryThreadGs4. */
export interface QueryThreadGs4Members {
  readonly __javaSupertypes?: readonly [GenericThread];
  run(): void;
  start(): boolean;
}
export type QueryThreadGs4 = QueryThreadGs4Members & GenericThread;
export interface QueryThreadGs4Statics {
  create(arg0: j_net_minecraft_server.ServerInterface): QueryThreadGs4 | null;
}

/** JVM class net.minecraft.server.rcon.thread.RconClient. */
export interface RconClientMembers {
  readonly __javaSupertypes?: readonly [GenericThread];
  run(): void;
  stop(): void;
}
export type RconClient = RconClientMembers & GenericThread;
export interface RconClientStatics {
}

/** JVM class net.minecraft.server.rcon.thread.RconThread. */
export interface RconThreadMembers {
  readonly __javaSupertypes?: readonly [GenericThread];
  run(): void;
  stop(): void;
  stopNonBlocking(): void;
}
export type RconThread = RconThreadMembers & GenericThread;
export interface RconThreadStatics {
  create(arg0: j_net_minecraft_server.ServerInterface): RconThread | null;
}
