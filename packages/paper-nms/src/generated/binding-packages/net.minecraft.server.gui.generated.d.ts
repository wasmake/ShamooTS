// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dedicated from './net.minecraft.server.dedicated.generated.js';

/** JVM class net.minecraft.server.gui.MinecraftServerGui. */
export interface MinecraftServerGuiMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"javax.swing.JComponent">];
  addFinalizer(arg0: JavaRunnable): void;
  close(): void;
  print(arg0: JavaOpaque<"javax.swing.JTextArea">, arg1: JavaOpaque<"javax.swing.JScrollPane">, arg2: string): void;
  start(): void;
}
export type MinecraftServerGui = MinecraftServerGuiMembers & JavaOpaque<"javax.swing.JComponent">;
export interface MinecraftServerGuiStatics {
  showFrameFor(arg0: j_net_minecraft_server_dedicated.DedicatedServer): MinecraftServerGui;
}

/** JVM class net.minecraft.server.gui.PlayerListComponent. */
export interface PlayerListComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"javax.swing.JList", [string]>];
  tick(): void;
}
export type PlayerListComponent = PlayerListComponentMembers & JavaOpaque<"javax.swing.JList", [string]>;
export interface PlayerListComponentStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer): PlayerListComponent;
}

/** JVM class net.minecraft.server.gui.StatsComponent. */
export interface StatsComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"javax.swing.JComponent">];
  close(): void;
  paint(arg0: JavaOpaque<"java.awt.Graphics">): void;
}
export type StatsComponent = StatsComponentMembers & JavaOpaque<"javax.swing.JComponent">;
export interface StatsComponentStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer): StatsComponent;
}
