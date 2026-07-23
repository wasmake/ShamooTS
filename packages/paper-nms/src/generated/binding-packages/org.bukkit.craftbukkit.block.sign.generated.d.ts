// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';

/** JVM class org.bukkit.craftbukkit.block.sign.CraftSignSide. */
export interface CraftSignSideMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.block.sign.SignSide">];
  applyLegacyStringToSignSide(): j_net_minecraft_world_level_block_entity.SignText;
  getColor(): JavaOpaque<"org.bukkit.DyeColor"> | null;
  /** @throws java.lang.IndexOutOfBoundsException */
  getLine(arg0: number): string;
  getLines(): Array<string>;
  isGlowingText(): boolean;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number): JavaOpaque<"net.kyori.adventure.text.Component">;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number, arg1: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  lines(): JavaList<JavaOpaque<"net.kyori.adventure.text.Component">>;
  setColor(arg0: JavaOpaque<"org.bukkit.DyeColor">): void;
  setGlowingText(arg0: boolean): void;
  /** @throws java.lang.IndexOutOfBoundsException */
  setLine(arg0: number, arg1: string): void;
}
export type CraftSignSide = CraftSignSideMembers & JavaOpaque<"org.bukkit.block.sign.SignSide">;
export interface CraftSignSideStatics {
  new(arg0: j_net_minecraft_world_level_block_entity.SignText): CraftSignSide;
}
