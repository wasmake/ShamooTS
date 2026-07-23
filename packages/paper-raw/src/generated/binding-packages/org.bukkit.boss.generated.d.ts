// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** Live JVM enum org.bukkit.boss.BarColor; constants are host handles, not strings. */
export type BarColor = JavaEnum<"org.bukkit.boss.BarColor", "BLUE" | "GREEN" | "PINK" | "PURPLE" | "RED" | "WHITE" | "YELLOW"> & BarColorMembers;
export interface BarColorMembers {
}
export interface BarColorStatics {
  readonly BLUE: BarColor;
  readonly GREEN: BarColor;
  readonly PINK: BarColor;
  readonly PURPLE: BarColor;
  readonly RED: BarColor;
  readonly WHITE: BarColor;
  readonly YELLOW: BarColor;
  valueOf(arg0: string): BarColor;
  values(): Array<BarColor>;
}

/** Live JVM enum org.bukkit.boss.BarFlag; constants are host handles, not strings. */
export type BarFlag = JavaEnum<"org.bukkit.boss.BarFlag", "CREATE_FOG" | "DARKEN_SKY" | "PLAY_BOSS_MUSIC"> & BarFlagMembers;
export interface BarFlagMembers {
}
export interface BarFlagStatics {
  readonly CREATE_FOG: BarFlag;
  readonly DARKEN_SKY: BarFlag;
  readonly PLAY_BOSS_MUSIC: BarFlag;
  valueOf(arg0: string): BarFlag;
  values(): Array<BarFlag>;
}

/** Live JVM enum org.bukkit.boss.BarStyle; constants are host handles, not strings. */
export type BarStyle = JavaEnum<"org.bukkit.boss.BarStyle", "SEGMENTED_10" | "SEGMENTED_12" | "SEGMENTED_20" | "SEGMENTED_6" | "SOLID"> & BarStyleMembers;
export interface BarStyleMembers {
}
export interface BarStyleStatics {
  readonly SEGMENTED_10: BarStyle;
  readonly SEGMENTED_12: BarStyle;
  readonly SEGMENTED_20: BarStyle;
  readonly SEGMENTED_6: BarStyle;
  readonly SOLID: BarStyle;
  valueOf(arg0: string): BarStyle;
  values(): Array<BarStyle>;
}

/** JVM interface org.bukkit.boss.BossBar. */
export interface BossBar_2Members {
  addFlag(arg0: BarFlag): void;
  addPlayer(arg0: j_org_bukkit_entity.Player): void;
  getColor(): BarColor;
  getPlayers(): JavaList<j_org_bukkit_entity.Player>;
  getProgress(): number;
  getStyle(): BarStyle;
  getTitle(): string;
  hasFlag(arg0: BarFlag): boolean;
  hide(): void;
  isVisible(): boolean;
  removeAll(): void;
  removeFlag(arg0: BarFlag): void;
  removePlayer(arg0: j_org_bukkit_entity.Player): void;
  setColor(arg0: BarColor): void;
  setProgress(arg0: number): void;
  setStyle(arg0: BarStyle): void;
  setTitle(arg0: string | null): void | null;
  setVisible(arg0: boolean): void;
  show(): void;
}
export type BossBar_2 = BossBar_2Members;
export interface BossBar_2Statics {
}

/** JVM interface org.bukkit.boss.DragonBattle. */
export interface DragonBattleMembers {
  generateEndPortal(arg0: boolean): boolean;
  getBossBar(): BossBar_2;
  getEndPortalLocation(): j_org_bukkit.Location | null;
  getEnderDragon(): j_org_bukkit_entity.EnderDragon | null;
  getGatewayCount(): number;
  getHealingCrystals(): JavaList<j_org_bukkit_entity.EnderCrystal>;
  getRespawnCrystals(): JavaList<j_org_bukkit_entity.EnderCrystal>;
  getRespawnPhase(): DragonBattle_RespawnPhase;
  hasBeenPreviouslyKilled(): boolean;
  initiateRespawn(): void;
  initiateRespawn(arg0: JavaCollection<j_org_bukkit_entity.EnderCrystal> | null): boolean | null;
  resetCrystals(): void;
  setPreviouslyKilled(arg0: boolean): void;
  setRespawnPhase(arg0: DragonBattle_RespawnPhase): boolean;
  spawnNewGateway(): boolean;
  spawnNewGateway(arg0: j_io_papermc_paper_math.Position): void;
}
export type DragonBattle = DragonBattleMembers;
export interface DragonBattleStatics {
}

/** Live JVM enum org.bukkit.boss.DragonBattle$RespawnPhase; constants are host handles, not strings. */
export type DragonBattle_RespawnPhase = JavaEnum<"org.bukkit.boss.DragonBattle$RespawnPhase", "END" | "NONE" | "PREPARING_TO_SUMMON_PILLARS" | "START" | "SUMMONING_DRAGON" | "SUMMONING_PILLARS"> & DragonBattle_RespawnPhaseMembers;
export interface DragonBattle_RespawnPhaseMembers {
}
export interface DragonBattle_RespawnPhaseStatics {
  readonly END: DragonBattle_RespawnPhase;
  readonly NONE: DragonBattle_RespawnPhase;
  readonly PREPARING_TO_SUMMON_PILLARS: DragonBattle_RespawnPhase;
  readonly START: DragonBattle_RespawnPhase;
  readonly SUMMONING_DRAGON: DragonBattle_RespawnPhase;
  readonly SUMMONING_PILLARS: DragonBattle_RespawnPhase;
  valueOf(arg0: string): DragonBattle_RespawnPhase;
  values(): Array<DragonBattle_RespawnPhase>;
}

/** JVM interface org.bukkit.boss.KeyedBossBar. */
export interface KeyedBossBarMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed, BossBar_2];
}
export type KeyedBossBar = KeyedBossBarMembers & j_org_bukkit.Keyed & BossBar_2;
export interface KeyedBossBarStatics {
}
