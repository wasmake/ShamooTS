// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.bossbar.BossBar. */
export interface BossBarMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  addFlag(arg0: BossBar_Flag): BossBar;
  addFlags(arg0: Iterable<BossBar_Flag>): BossBar;
  addFlags(...arg0: Array<BossBar_Flag>): BossBar;
  addListener(arg0: BossBar_Listener): BossBar;
  addViewer(arg0: j_net_kyori_adventure_audience.Audience): BossBar;
  color(): BossBar_Color;
  color(arg0: BossBar_Color): BossBar;
  flags(): JavaSet<BossBar_Flag>;
  flags(arg0: JavaSet<BossBar_Flag>): BossBar;
  hasFlag(arg0: BossBar_Flag): boolean;
  name(): j_net_kyori_adventure_text.Component;
  name(arg0: j_net_kyori_adventure_text.Component): BossBar;
  name(arg0: j_net_kyori_adventure_text.ComponentLike): BossBar;
  overlay(): BossBar_Overlay;
  overlay(arg0: BossBar_Overlay): BossBar;
  percent(): number;
  percent(arg0: number): BossBar;
  progress(): number;
  progress(arg0: number): BossBar;
  removeFlag(arg0: BossBar_Flag): BossBar;
  removeFlags(arg0: Iterable<BossBar_Flag>): BossBar;
  removeFlags(...arg0: Array<BossBar_Flag>): BossBar;
  removeListener(arg0: BossBar_Listener): BossBar;
  removeViewer(arg0: j_net_kyori_adventure_audience.Audience): BossBar;
  viewers(): Iterable<BossBarViewer>;
}
export type BossBar = BossBarMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface BossBarStatics {
  readonly MAX_PERCENT: 1;
  readonly MAX_PROGRESS: 1;
  readonly MIN_PERCENT: 0;
  readonly MIN_PROGRESS: 0;
  bossBar(arg0: j_net_kyori_adventure_text.Component, arg1: number, arg2: BossBar_Color, arg3: BossBar_Overlay): BossBar;
  bossBar(arg0: j_net_kyori_adventure_text.Component, arg1: number, arg2: BossBar_Color, arg3: BossBar_Overlay, arg4: JavaSet<BossBar_Flag>): BossBar;
  bossBar(arg0: j_net_kyori_adventure_text.ComponentLike, arg1: number, arg2: BossBar_Color, arg3: BossBar_Overlay): BossBar;
  bossBar(arg0: j_net_kyori_adventure_text.ComponentLike, arg1: number, arg2: BossBar_Color, arg3: BossBar_Overlay, arg4: JavaSet<BossBar_Flag>): BossBar;
}

/** Live JVM enum net.kyori.adventure.bossbar.BossBar$Color; constants are host handles, not strings. */
export type BossBar_Color = JavaEnum<"net.kyori.adventure.bossbar.BossBar$Color", "BLUE" | "GREEN" | "PINK" | "PURPLE" | "RED" | "WHITE" | "YELLOW"> & BossBar_ColorMembers;
export interface BossBar_ColorMembers {
}
export interface BossBar_ColorStatics {
  readonly BLUE: BossBar_Color;
  readonly GREEN: BossBar_Color;
  readonly PINK: BossBar_Color;
  readonly PURPLE: BossBar_Color;
  readonly RED: BossBar_Color;
  readonly WHITE: BossBar_Color;
  readonly YELLOW: BossBar_Color;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, BossBar_Color>;
  valueOf(arg0: string): BossBar_Color;
  values(): Array<BossBar_Color>;
}

/** Live JVM enum net.kyori.adventure.bossbar.BossBar$Flag; constants are host handles, not strings. */
export type BossBar_Flag = JavaEnum<"net.kyori.adventure.bossbar.BossBar$Flag", "CREATE_WORLD_FOG" | "DARKEN_SCREEN" | "PLAY_BOSS_MUSIC"> & BossBar_FlagMembers;
export interface BossBar_FlagMembers {
}
export interface BossBar_FlagStatics {
  readonly CREATE_WORLD_FOG: BossBar_Flag;
  readonly DARKEN_SCREEN: BossBar_Flag;
  readonly PLAY_BOSS_MUSIC: BossBar_Flag;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, BossBar_Flag>;
  valueOf(arg0: string): BossBar_Flag;
  values(): Array<BossBar_Flag>;
}

/** JVM interface net.kyori.adventure.bossbar.BossBar$Listener. */
export interface BossBar_ListenerMembers {
  bossBarColorChanged(arg0: BossBar, arg1: BossBar_Color, arg2: BossBar_Color): void;
  bossBarFlagsChanged(arg0: BossBar, arg1: JavaSet<BossBar_Flag>, arg2: JavaSet<BossBar_Flag>): void;
  bossBarNameChanged(arg0: BossBar, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_text.Component): void;
  bossBarOverlayChanged(arg0: BossBar, arg1: BossBar_Overlay, arg2: BossBar_Overlay): void;
  bossBarPercentChanged(arg0: BossBar, arg1: number, arg2: number): void;
  bossBarProgressChanged(arg0: BossBar, arg1: number, arg2: number): void;
}
export type BossBar_Listener = BossBar_ListenerMembers;
export interface BossBar_ListenerStatics {
}

/** Live JVM enum net.kyori.adventure.bossbar.BossBar$Overlay; constants are host handles, not strings. */
export type BossBar_Overlay = JavaEnum<"net.kyori.adventure.bossbar.BossBar$Overlay", "NOTCHED_10" | "NOTCHED_12" | "NOTCHED_20" | "NOTCHED_6" | "PROGRESS"> & BossBar_OverlayMembers;
export interface BossBar_OverlayMembers {
}
export interface BossBar_OverlayStatics {
  readonly NOTCHED_10: BossBar_Overlay;
  readonly NOTCHED_12: BossBar_Overlay;
  readonly NOTCHED_20: BossBar_Overlay;
  readonly NOTCHED_6: BossBar_Overlay;
  readonly PROGRESS: BossBar_Overlay;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, BossBar_Overlay>;
  valueOf(arg0: string): BossBar_Overlay;
  values(): Array<BossBar_Overlay>;
}

/** JVM interface net.kyori.adventure.bossbar.BossBarImplementation. */
export interface BossBarImplementationMembers {
  viewers(): Iterable<BossBarViewer>;
}
export type BossBarImplementation = BossBarImplementationMembers;
export interface BossBarImplementationStatics {
  get<I /* extends BossBarImplementation */>(arg0: BossBar, arg1: JavaClass<I>): I;
}

/** JVM interface net.kyori.adventure.bossbar.BossBarImplementation$Provider. */
export interface BossBarImplementation_ProviderMembers {
  create(arg0: BossBar): BossBarImplementation;
}
export type BossBarImplementation_Provider = BossBarImplementation_ProviderMembers;
export interface BossBarImplementation_ProviderStatics {
}

/** JVM interface net.kyori.adventure.bossbar.BossBarViewer. */
export interface BossBarViewerMembers {
  activeBossBars(): Iterable<BossBar>;
}
export type BossBarViewer = BossBarViewerMembers;
export interface BossBarViewerStatics {
}
