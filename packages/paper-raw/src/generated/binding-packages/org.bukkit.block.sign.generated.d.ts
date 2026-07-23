// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_material from './org.bukkit.material.generated.js';

/** Live JVM enum org.bukkit.block.sign.Side; constants are host handles, not strings. */
export type Side = JavaEnum<"org.bukkit.block.sign.Side", "BACK" | "FRONT"> & SideMembers;
export interface SideMembers {
}
export interface SideStatics {
  readonly BACK: Side;
  readonly FRONT: Side;
  valueOf(arg0: string): Side;
  values(): Array<Side>;
}

/** JVM interface org.bukkit.block.sign.SignSide. */
export interface SignSideMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_material.Colorable];
  /** @throws java.lang.IndexOutOfBoundsException */
  getLine(arg0: number): string;
  getLines(): Array<string>;
  isGlowingText(): boolean;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number): j_net_kyori_adventure_text.Component;
  /** @throws java.lang.IndexOutOfBoundsException */
  line(arg0: number, arg1: j_net_kyori_adventure_text.Component): void;
  lines(): JavaList<j_net_kyori_adventure_text.Component>;
  setGlowingText(arg0: boolean): void;
  /** @throws java.lang.IndexOutOfBoundsException */
  setLine(arg0: number, arg1: string): void;
}
export type SignSide = SignSideMembers & j_org_bukkit_material.Colorable;
export interface SignSideStatics {
}
