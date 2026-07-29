// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_scoreboard_numbers from './io.papermc.paper.scoreboard.numbers.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface org.bukkit.scoreboard.Criteria. */
export interface CriteriaMembers {
  getDefaultRenderType(): RenderType;
  getName(): string;
  isReadOnly(): boolean;
}
export type Criteria = CriteriaMembers;
export interface CriteriaStatics {
  readonly AIR: Criteria;
  readonly ARMOR: Criteria;
  readonly DEATH_COUNT: Criteria;
  readonly DUMMY: Criteria;
  readonly FOOD: Criteria;
  readonly HEALTH: Criteria;
  readonly KILLED_BY_TEAM_AQUA: Criteria;
  readonly KILLED_BY_TEAM_BLACK: Criteria;
  readonly KILLED_BY_TEAM_BLUE: Criteria;
  readonly KILLED_BY_TEAM_DARK_AQUA: Criteria;
  readonly KILLED_BY_TEAM_DARK_BLUE: Criteria;
  readonly KILLED_BY_TEAM_DARK_GRAY: Criteria;
  readonly KILLED_BY_TEAM_DARK_GREEN: Criteria;
  readonly KILLED_BY_TEAM_DARK_PURPLE: Criteria;
  readonly KILLED_BY_TEAM_DARK_RED: Criteria;
  readonly KILLED_BY_TEAM_GOLD: Criteria;
  readonly KILLED_BY_TEAM_GRAY: Criteria;
  readonly KILLED_BY_TEAM_GREEN: Criteria;
  readonly KILLED_BY_TEAM_LIGHT_PURPLE: Criteria;
  readonly KILLED_BY_TEAM_RED: Criteria;
  readonly KILLED_BY_TEAM_WHITE: Criteria;
  readonly KILLED_BY_TEAM_YELLOW: Criteria;
  readonly LEVEL: Criteria;
  readonly PLAYER_KILL_COUNT: Criteria;
  readonly TEAM_KILL_AQUA: Criteria;
  readonly TEAM_KILL_BLACK: Criteria;
  readonly TEAM_KILL_BLUE: Criteria;
  readonly TEAM_KILL_DARK_AQUA: Criteria;
  readonly TEAM_KILL_DARK_BLUE: Criteria;
  readonly TEAM_KILL_DARK_GRAY: Criteria;
  readonly TEAM_KILL_DARK_GREEN: Criteria;
  readonly TEAM_KILL_DARK_PURPLE: Criteria;
  readonly TEAM_KILL_DARK_RED: Criteria;
  readonly TEAM_KILL_GOLD: Criteria;
  readonly TEAM_KILL_GRAY: Criteria;
  readonly TEAM_KILL_GREEN: Criteria;
  readonly TEAM_KILL_LIGHT_PURPLE: Criteria;
  readonly TEAM_KILL_RED: Criteria;
  readonly TEAM_KILL_WHITE: Criteria;
  readonly TEAM_KILL_YELLOW: Criteria;
  readonly TOTAL_KILL_COUNT: Criteria;
  readonly TRIGGER: Criteria;
  readonly XP: Criteria;
  create(arg0: string): Criteria;
  statistic(arg0: j_org_bukkit.Statistic): Criteria;
  statistic(arg0: j_org_bukkit.Statistic, arg1: j_org_bukkit.Material): Criteria;
  statistic(arg0: j_org_bukkit.Statistic, arg1: j_org_bukkit_entity.EntityType): Criteria;
}

/** JVM class org.bukkit.scoreboard.Criterias. */
export interface CriteriasMembers {
}
export type Criterias = CriteriasMembers;
export interface CriteriasStatics {
  readonly DEATHS: "deathCount";
  readonly HEALTH: "health";
  readonly PLAYER_KILLS: "playerKillCount";
  readonly TOTAL_KILLS: "totalKillCount";
}

/** Live JVM enum org.bukkit.scoreboard.DisplaySlot; constants are host handles, not strings. */
export type DisplaySlot = JavaEnum<"org.bukkit.scoreboard.DisplaySlot", "BELOW_NAME" | "PLAYER_LIST" | "SIDEBAR" | "SIDEBAR_TEAM_AQUA" | "SIDEBAR_TEAM_BLACK" | "SIDEBAR_TEAM_BLUE" | "SIDEBAR_TEAM_DARK_AQUA" | "SIDEBAR_TEAM_DARK_BLUE" | "SIDEBAR_TEAM_DARK_GRAY" | "SIDEBAR_TEAM_DARK_GREEN" | "SIDEBAR_TEAM_DARK_PURPLE" | "SIDEBAR_TEAM_DARK_RED" | "SIDEBAR_TEAM_GOLD" | "SIDEBAR_TEAM_GRAY" | "SIDEBAR_TEAM_GREEN" | "SIDEBAR_TEAM_LIGHT_PURPLE" | "SIDEBAR_TEAM_RED" | "SIDEBAR_TEAM_WHITE" | "SIDEBAR_TEAM_YELLOW"> & DisplaySlotMembers;
export interface DisplaySlotMembers {
  getId(): string;
  toString(): string;
}
export interface DisplaySlotStatics {
  readonly BELOW_NAME: DisplaySlot;
  readonly PLAYER_LIST: DisplaySlot;
  readonly SIDEBAR: DisplaySlot;
  readonly SIDEBAR_TEAM_AQUA: DisplaySlot;
  readonly SIDEBAR_TEAM_BLACK: DisplaySlot;
  readonly SIDEBAR_TEAM_BLUE: DisplaySlot;
  readonly SIDEBAR_TEAM_DARK_AQUA: DisplaySlot;
  readonly SIDEBAR_TEAM_DARK_BLUE: DisplaySlot;
  readonly SIDEBAR_TEAM_DARK_GRAY: DisplaySlot;
  readonly SIDEBAR_TEAM_DARK_GREEN: DisplaySlot;
  readonly SIDEBAR_TEAM_DARK_PURPLE: DisplaySlot;
  readonly SIDEBAR_TEAM_DARK_RED: DisplaySlot;
  readonly SIDEBAR_TEAM_GOLD: DisplaySlot;
  readonly SIDEBAR_TEAM_GRAY: DisplaySlot;
  readonly SIDEBAR_TEAM_GREEN: DisplaySlot;
  readonly SIDEBAR_TEAM_LIGHT_PURPLE: DisplaySlot;
  readonly SIDEBAR_TEAM_RED: DisplaySlot;
  readonly SIDEBAR_TEAM_WHITE: DisplaySlot;
  readonly SIDEBAR_TEAM_YELLOW: DisplaySlot;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, DisplaySlot>;
  valueOf(arg0: string): DisplaySlot;
  values(): Array<DisplaySlot>;
}

/** Live JVM enum org.bukkit.scoreboard.NameTagVisibility; constants are host handles, not strings. */
export type NameTagVisibility = JavaEnum<"org.bukkit.scoreboard.NameTagVisibility", "ALWAYS" | "HIDE_FOR_OTHER_TEAMS" | "HIDE_FOR_OWN_TEAM" | "NEVER"> & NameTagVisibilityMembers;
export interface NameTagVisibilityMembers {
}
export interface NameTagVisibilityStatics {
  readonly ALWAYS: NameTagVisibility;
  readonly HIDE_FOR_OTHER_TEAMS: NameTagVisibility;
  readonly HIDE_FOR_OWN_TEAM: NameTagVisibility;
  readonly NEVER: NameTagVisibility;
  valueOf(arg0: string): NameTagVisibility;
  values(): Array<NameTagVisibility>;
}

/** JVM interface org.bukkit.scoreboard.Objective. */
export interface ObjectiveMembers {
  displayName(): j_net_kyori_adventure_text.Component;
  displayName(arg0: j_net_kyori_adventure_text.Component | null): void;
  getCriteria(): string;
  getDisplayName(): string;
  getDisplaySlot(): DisplaySlot | null;
  getName(): string;
  getRenderType(): RenderType;
  getScore(arg0: string): Score;
  getScore(arg0: j_org_bukkit.OfflinePlayer): Score;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  getScoreFor(arg0: j_org_bukkit_entity.Entity): Score;
  getScoreboard(): Scoreboard | null;
  getTrackedCriteria(): Criteria;
  isModifiable(): boolean;
  numberFormat(): j_io_papermc_paper_scoreboard_numbers.NumberFormat | null;
  numberFormat(arg0: j_io_papermc_paper_scoreboard_numbers.NumberFormat | null): void;
  setAutoUpdateDisplay(arg0: boolean): void;
  setDisplayName(arg0: string): void;
  setDisplaySlot(arg0: DisplaySlot | null): void;
  setRenderType(arg0: RenderType): void;
  unregister(): void;
  willAutoUpdateDisplay(): boolean;
}
export type Objective = ObjectiveMembers;
export interface ObjectiveStatics {
}

/** Live JVM enum org.bukkit.scoreboard.RenderType; constants are host handles, not strings. */
export type RenderType = JavaEnum<"org.bukkit.scoreboard.RenderType", "HEARTS" | "INTEGER"> & RenderTypeMembers;
export interface RenderTypeMembers {
}
export interface RenderTypeStatics {
  readonly HEARTS: RenderType;
  readonly INTEGER: RenderType;
  valueOf(arg0: string): RenderType;
  values(): Array<RenderType>;
}

/** JVM interface org.bukkit.scoreboard.Score. */
export interface ScoreMembers {
  customName(): j_net_kyori_adventure_text.Component | null;
  customName(arg0: j_net_kyori_adventure_text.Component | null): void;
  getEntry(): string;
  getObjective(): Objective;
  getPlayer(): j_org_bukkit.OfflinePlayer;
  getScore(): number;
  getScoreboard(): Scoreboard | null;
  isScoreSet(): boolean;
  isTriggerable(): boolean;
  numberFormat(): j_io_papermc_paper_scoreboard_numbers.NumberFormat | null;
  numberFormat(arg0: j_io_papermc_paper_scoreboard_numbers.NumberFormat | null): void;
  /** @throws java.lang.IllegalStateException */
  resetScore(): void;
  setScore(arg0: number): void;
  setTriggerable(arg0: boolean): void;
}
export type Score = ScoreMembers;
export interface ScoreStatics {
}

/** JVM interface org.bukkit.scoreboard.Scoreboard. */
export interface ScoreboardMembers {
  clearSlot(arg0: DisplaySlot): void;
  /** @throws java.lang.IllegalArgumentException */
  getEntityTeam(arg0: j_org_bukkit_entity.Entity): Team | null;
  getEntries(): JavaSet<string>;
  getEntryTeam(arg0: string): Team | null;
  getObjective(arg0: string): Objective | null;
  getObjective(arg0: DisplaySlot): Objective | null;
  getObjectives(): JavaSet<Objective>;
  getObjectivesByCriteria(arg0: string): JavaSet<Objective>;
  getObjectivesByCriteria(arg0: Criteria): JavaSet<Objective>;
  getPlayerTeam(arg0: j_org_bukkit.OfflinePlayer): Team | null;
  getPlayers(): JavaSet<j_org_bukkit.OfflinePlayer>;
  getScores(arg0: string): JavaSet<Score>;
  getScores(arg0: j_org_bukkit.OfflinePlayer): JavaSet<Score>;
  /** @throws java.lang.IllegalArgumentException */
  getScoresFor(arg0: j_org_bukkit_entity.Entity): JavaSet<Score>;
  getTeam(arg0: string): Team | null;
  getTeams(): JavaSet<Team>;
  registerNewObjective(arg0: string, arg1: string): Objective;
  registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
  registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
  registerNewObjective(arg0: string, arg1: string, arg2: j_net_kyori_adventure_text.Component | null): Objective;
  /** @throws java.lang.IllegalArgumentException */
  registerNewObjective(arg0: string, arg1: string, arg2: j_net_kyori_adventure_text.Component | null, arg3: RenderType): Objective;
  registerNewObjective(arg0: string, arg1: Criteria, arg2: string): Objective;
  registerNewObjective(arg0: string, arg1: Criteria, arg2: string, arg3: RenderType): Objective;
  /** @throws java.lang.IllegalArgumentException */
  registerNewObjective(arg0: string, arg1: Criteria, arg2: j_net_kyori_adventure_text.Component | null): Objective;
  /** @throws java.lang.IllegalArgumentException */
  registerNewObjective(arg0: string, arg1: Criteria, arg2: j_net_kyori_adventure_text.Component | null, arg3: RenderType): Objective;
  registerNewTeam(arg0: string): Team;
  resetScores(arg0: string): void;
  resetScores(arg0: j_org_bukkit.OfflinePlayer): void;
  /** @throws java.lang.IllegalArgumentException */
  resetScoresFor(arg0: j_org_bukkit_entity.Entity): void;
}
export type Scoreboard = ScoreboardMembers;
export interface ScoreboardStatics {
}

/** JVM interface org.bukkit.scoreboard.ScoreboardManager. */
export interface ScoreboardManagerMembers {
  getMainScoreboard(): Scoreboard;
  getNewScoreboard(): Scoreboard;
}
export type ScoreboardManager = ScoreboardManagerMembers;
export interface ScoreboardManagerStatics {
}

/** JVM interface org.bukkit.scoreboard.Team. */
export interface TeamMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_audience.ForwardingAudience];
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  addEntities(arg0: JavaCollection<j_org_bukkit_entity.Entity>): void;
  addEntities(...arg0: Array<j_org_bukkit_entity.Entity>): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  addEntity(arg0: j_org_bukkit_entity.Entity): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  addEntries(arg0: JavaCollection<string>): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  addEntries(...arg0: Array<string>): void;
  addEntry(arg0: string): void;
  addPlayer(arg0: j_org_bukkit.OfflinePlayer): void;
  allowFriendlyFire(): boolean;
  canSeeFriendlyInvisibles(): boolean;
  color(): j_net_kyori_adventure_text_format.TextColor;
  color(arg0: j_net_kyori_adventure_text_format.NamedTextColor | null): void;
  displayName(): j_net_kyori_adventure_text.Component;
  displayName(arg0: j_net_kyori_adventure_text.Component | null): void;
  getColor(): j_org_bukkit.ChatColor;
  getDisplayName(): string;
  getEntries(): JavaSet<string>;
  getName(): string;
  getNameTagVisibility(): NameTagVisibility;
  getOption(arg0: Team_Option): Team_OptionStatus;
  getPlayers(): JavaSet<j_org_bukkit.OfflinePlayer>;
  getPrefix(): string;
  getScoreboard(): Scoreboard | null;
  getSize(): number;
  getSuffix(): string;
  hasColor(): boolean;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  hasEntity(arg0: j_org_bukkit_entity.Entity): boolean;
  hasEntry(arg0: string): boolean;
  hasPlayer(arg0: j_org_bukkit.OfflinePlayer): boolean;
  prefix(): j_net_kyori_adventure_text.Component;
  prefix(arg0: j_net_kyori_adventure_text.Component | null): void;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  removeEntities(arg0: JavaCollection<j_org_bukkit_entity.Entity>): boolean;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  removeEntities(...arg0: Array<j_org_bukkit_entity.Entity>): boolean;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  removeEntity(arg0: j_org_bukkit_entity.Entity): boolean;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  removeEntries(arg0: JavaCollection<string>): boolean;
  /** @throws java.lang.IllegalArgumentException @throws java.lang.IllegalStateException */
  removeEntries(...arg0: Array<string>): boolean;
  removeEntry(arg0: string): boolean;
  removePlayer(arg0: j_org_bukkit.OfflinePlayer): boolean;
  setAllowFriendlyFire(arg0: boolean): void;
  setCanSeeFriendlyInvisibles(arg0: boolean): void;
  setColor(arg0: j_org_bukkit.ChatColor): void;
  setDisplayName(arg0: string): void;
  setNameTagVisibility(arg0: NameTagVisibility): void;
  setOption(arg0: Team_Option, arg1: Team_OptionStatus): void;
  setPrefix(arg0: string): void;
  setSuffix(arg0: string): void;
  suffix(): j_net_kyori_adventure_text.Component;
  suffix(arg0: j_net_kyori_adventure_text.Component | null): void;
  unregister(): void;
}
export type Team = TeamMembers & j_net_kyori_adventure_audience.ForwardingAudience;
export interface TeamStatics {
}

/** Live JVM enum org.bukkit.scoreboard.Team$Option; constants are host handles, not strings. */
export type Team_Option = JavaEnum<"org.bukkit.scoreboard.Team$Option", "COLLISION_RULE" | "DEATH_MESSAGE_VISIBILITY" | "NAME_TAG_VISIBILITY"> & Team_OptionMembers;
export interface Team_OptionMembers {
}
export interface Team_OptionStatics {
  readonly COLLISION_RULE: Team_Option;
  readonly DEATH_MESSAGE_VISIBILITY: Team_Option;
  readonly NAME_TAG_VISIBILITY: Team_Option;
  valueOf(arg0: string): Team_Option;
  values(): Array<Team_Option>;
}

/** Live JVM enum org.bukkit.scoreboard.Team$OptionStatus; constants are host handles, not strings. */
export type Team_OptionStatus = JavaEnum<"org.bukkit.scoreboard.Team$OptionStatus", "ALWAYS" | "FOR_OTHER_TEAMS" | "FOR_OWN_TEAM" | "NEVER"> & Team_OptionStatusMembers;
export interface Team_OptionStatusMembers {
}
export interface Team_OptionStatusStatics {
  readonly ALWAYS: Team_OptionStatus;
  readonly FOR_OTHER_TEAMS: Team_OptionStatus;
  readonly FOR_OWN_TEAM: Team_OptionStatus;
  readonly NEVER: Team_OptionStatus;
  valueOf(arg0: string): Team_OptionStatus;
  values(): Array<Team_OptionStatus>;
}
