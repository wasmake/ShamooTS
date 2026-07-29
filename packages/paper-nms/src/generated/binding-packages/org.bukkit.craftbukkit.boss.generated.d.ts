// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_bossevents from './net.minecraft.server.bossevents.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_level_dimension_end from './net.minecraft.world.level.dimension.end.generated.js';

/** JVM class org.bukkit.craftbukkit.boss.CraftBossBar. */
export interface CraftBossBarMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.boss.BossBar">];
  addFlag(arg0: JavaOpaque<"org.bukkit.boss.BarFlag">): void;
  addPlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  getColor(): JavaOpaque<"org.bukkit.boss.BarColor">;
  getHandle(): j_net_minecraft_server_level.ServerBossEvent;
  getPlayers(): JavaList<JavaOpaque<"org.bukkit.entity.Player">>;
  getProgress(): number;
  getStyle(): JavaOpaque<"org.bukkit.boss.BarStyle">;
  getTitle(): string;
  hasFlag(arg0: JavaOpaque<"org.bukkit.boss.BarFlag">): boolean;
  hide(): void;
  isVisible(): boolean;
  removeAll(): void;
  removeFlag(arg0: JavaOpaque<"org.bukkit.boss.BarFlag">): void;
  removePlayer(arg0: JavaOpaque<"org.bukkit.entity.Player">): void;
  setColor(arg0: JavaOpaque<"org.bukkit.boss.BarColor">): void;
  setProgress(arg0: number): void;
  setStyle(arg0: JavaOpaque<"org.bukkit.boss.BarStyle">): void;
  setTitle(arg0: string): void;
  setVisible(arg0: boolean): void;
  show(): void;
}
export type CraftBossBar = CraftBossBarMembers & JavaOpaque<"org.bukkit.boss.BossBar">;
export interface CraftBossBarStatics {
  new(arg0: string, arg1: JavaOpaque<"org.bukkit.boss.BarColor">, arg2: JavaOpaque<"org.bukkit.boss.BarStyle">, ...arg3: Array<JavaOpaque<"org.bukkit.boss.BarFlag">>): CraftBossBar;
  new(arg0: j_net_minecraft_server_level.ServerBossEvent): CraftBossBar;
}

/** JVM class org.bukkit.craftbukkit.boss.CraftDragonBattle. */
export interface CraftDragonBattleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.boss.DragonBattle">];
  equals(arg0: object): boolean;
  generateEndPortal(arg0: boolean): boolean;
  getBossBar(): JavaOpaque<"org.bukkit.boss.BossBar">;
  getEndPortalLocation(): JavaOpaque<"org.bukkit.Location">;
  getEnderDragon(): JavaOpaque<"org.bukkit.entity.EnderDragon">;
  getGatewayCount(): number;
  getHealingCrystals(): JavaList<JavaOpaque<"org.bukkit.entity.EnderCrystal">>;
  getRespawnCrystals(): JavaList<JavaOpaque<"org.bukkit.entity.EnderCrystal">>;
  getRespawnPhase(): JavaOpaque<"org.bukkit.boss.DragonBattle$RespawnPhase">;
  hasBeenPreviouslyKilled(): boolean;
  hashCode(): number;
  initiateRespawn(): void;
  initiateRespawn(arg0: JavaCollection<JavaOpaque<"org.bukkit.entity.EnderCrystal">>): boolean;
  resetCrystals(): void;
  setPreviouslyKilled(arg0: boolean): void;
  setRespawnPhase(arg0: JavaOpaque<"org.bukkit.boss.DragonBattle$RespawnPhase">): boolean;
  spawnNewGateway(): boolean;
  spawnNewGateway(arg0: JavaOpaque<"io.papermc.paper.math.Position">): void;
}
export type CraftDragonBattle = CraftDragonBattleMembers & JavaOpaque<"org.bukkit.boss.DragonBattle">;
export interface CraftDragonBattleStatics {
  new(arg0: j_net_minecraft_world_level_dimension_end.EndDragonFight): CraftDragonBattle;
}

/** JVM class org.bukkit.craftbukkit.boss.CraftKeyedBossbar. */
export interface CraftKeyedBossbarMembers {
  readonly __javaSupertypes?: readonly [CraftBossBar, JavaOpaque<"org.bukkit.boss.KeyedBossBar">];
  getHandle(): j_net_minecraft_server_bossevents.CustomBossEvent;
  getKey(): JavaOpaque<"org.bukkit.NamespacedKey">;
}
export type CraftKeyedBossbar = CraftKeyedBossbarMembers & CraftBossBar & JavaOpaque<"org.bukkit.boss.KeyedBossBar">;
export interface CraftKeyedBossbarStatics {
  new(arg0: j_net_minecraft_server_bossevents.CustomBossEvent): CraftKeyedBossbar;
}
