// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_net_minecraft_world_scores_criteria from './net.minecraft.world.scores.criteria.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM class org.bukkit.craftbukkit.scoreboard.CraftCriteria. */
export interface CraftCriteriaMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.scoreboard.Criteria">];
  equals(arg0: object): boolean;
  getDefaultRenderType(): JavaOpaque<"org.bukkit.scoreboard.RenderType">;
  getName(): string;
  hashCode(): number;
  isReadOnly(): boolean;
}
export type CraftCriteria = CraftCriteriaMembers & JavaOpaque<"org.bukkit.scoreboard.Criteria">;
export interface CraftCriteriaStatics {
  getFromBukkit(arg0: string): CraftCriteria;
  getFromNMS(arg0: j_net_minecraft_world_scores.Objective): CraftCriteria;
  getFromNMS(arg0: j_net_minecraft_world_scores_criteria.ObjectiveCriteria): CraftCriteria;
}

/** JVM class org.bukkit.craftbukkit.scoreboard.CraftScoreboard. */
export interface CraftScoreboardMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.scoreboard.Scoreboard">];
  clearSlot(arg0: JavaOpaque<"org.bukkit.scoreboard.DisplaySlot">): void;
  /** @throws java.lang.IllegalArgumentException */
  getEntityTeam(arg0: JavaOpaque<"org.bukkit.entity.Entity">): JavaOpaque<"org.bukkit.scoreboard.Team">;
  getEntries(): JavaOpaque<"com.google.common.collect.ImmutableSet", [string]>;
  getEntries(): JavaSet<object>;
  getEntryTeam(arg0: string): JavaOpaque<"org.bukkit.scoreboard.Team">;
  getHandle(): j_net_minecraft_world_scores.Scoreboard;
  getObjective(arg0: string): JavaOpaque<"org.bukkit.scoreboard.Objective">;
  getObjective(arg0: JavaOpaque<"org.bukkit.scoreboard.DisplaySlot">): JavaOpaque<"org.bukkit.scoreboard.Objective">;
  getObjectives(): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Objective">]>;
  getObjectives(): JavaSet<object>;
  getObjectivesByCriteria(arg0: string): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Objective">]>;
  getObjectivesByCriteria(arg0: string): JavaSet<object>;
  getObjectivesByCriteria(arg0: JavaOpaque<"org.bukkit.scoreboard.Criteria">): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Objective">]>;
  getObjectivesByCriteria(arg0: JavaOpaque<"org.bukkit.scoreboard.Criteria">): JavaSet<object>;
  getPlayerTeam(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">): JavaOpaque<"org.bukkit.scoreboard.Team">;
  getPlayers(): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.OfflinePlayer">]>;
  getPlayers(): JavaSet<object>;
  getScores(arg0: string): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Score">]>;
  getScores(arg0: string): JavaSet<object>;
  getScores(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Score">]>;
  getScores(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">): JavaSet<object>;
  /** @throws java.lang.IllegalArgumentException */
  getScoresFor(arg0: JavaOpaque<"org.bukkit.entity.Entity">): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Score">]>;
  /** @throws java.lang.IllegalArgumentException */
  getScoresFor(arg0: JavaOpaque<"org.bukkit.entity.Entity">): JavaSet<object>;
  getTeam(arg0: string): JavaOpaque<"org.bukkit.scoreboard.Team">;
  getTeams(): JavaOpaque<"com.google.common.collect.ImmutableSet", [JavaOpaque<"org.bukkit.scoreboard.Team">]>;
  getTeams(): JavaSet<object>;
  registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: JavaOpaque<"org.bukkit.scoreboard.RenderType">): JavaOpaque<"org.bukkit.scoreboard.Objective">;
  registerNewObjective(arg0: string, arg1: string, arg2: JavaOpaque<"net.kyori.adventure.text.Component">, arg3: JavaOpaque<"org.bukkit.scoreboard.RenderType">): JavaOpaque<"org.bukkit.scoreboard.Objective">;
  /** @throws java.lang.IllegalArgumentException */
  registerNewObjective(arg0: string, arg1: JavaOpaque<"org.bukkit.scoreboard.Criteria">, arg2: JavaOpaque<"net.kyori.adventure.text.Component">, arg3: JavaOpaque<"org.bukkit.scoreboard.RenderType">): JavaOpaque<"org.bukkit.scoreboard.Objective">;
  registerNewTeam(arg0: string): JavaOpaque<"org.bukkit.scoreboard.Team">;
  registeredGlobally: boolean;
  resetScores(arg0: string): void;
  resetScores(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">): void;
  /** @throws java.lang.IllegalArgumentException */
  resetScoresFor(arg0: JavaOpaque<"org.bukkit.entity.Entity">): void;
}
export type CraftScoreboard = CraftScoreboardMembers & JavaOpaque<"org.bukkit.scoreboard.Scoreboard">;
export interface CraftScoreboardStatics {
}

/** JVM class org.bukkit.craftbukkit.scoreboard.CraftScoreboardManager. */
export interface CraftScoreboardManagerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.scoreboard.ScoreboardManager">];
  forAllObjectives(arg0: j_net_minecraft_world_scores_criteria.ObjectiveCriteria, arg1: j_net_minecraft_world_scores.ScoreHolder, arg2: JavaConsumer<j_net_minecraft_world_scores.ScoreAccess>): void;
  getMainScoreboard(): CraftScoreboard;
  getMainScoreboard(): JavaOpaque<"org.bukkit.scoreboard.Scoreboard">;
  getNewScoreboard(): CraftScoreboard;
  getNewScoreboard(): JavaOpaque<"org.bukkit.scoreboard.Scoreboard">;
  getPlayerBoard(arg0: j_org_bukkit_craftbukkit_entity.CraftPlayer): CraftScoreboard;
  registerScoreboardForVanilla(arg0: CraftScoreboard): void;
  removePlayer(arg0: j_org_bukkit_craftbukkit_entity.CraftPlayer): void;
  setPlayerBoard(arg0: j_org_bukkit_craftbukkit_entity.CraftPlayer, arg1: CraftScoreboard): void;
}
export type CraftScoreboardManager = CraftScoreboardManagerMembers & JavaOpaque<"org.bukkit.scoreboard.ScoreboardManager">;
export interface CraftScoreboardManagerStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: j_net_minecraft_world_scores.Scoreboard): CraftScoreboardManager;
}

/** JVM class org.bukkit.craftbukkit.scoreboard.CraftScoreboardTranslations. */
export interface CraftScoreboardTranslationsMembers {
}
export type CraftScoreboardTranslations = CraftScoreboardTranslationsMembers;
export interface CraftScoreboardTranslationsStatics {
  fromBukkitSlot(arg0: JavaOpaque<"org.bukkit.scoreboard.DisplaySlot">): j_net_minecraft_world_scores.DisplaySlot;
  toBukkitSlot(arg0: j_net_minecraft_world_scores.DisplaySlot): JavaOpaque<"org.bukkit.scoreboard.DisplaySlot">;
}
