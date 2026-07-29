// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_chat_numbers from './net.minecraft.network.chat.numbers.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_scores_criteria from './net.minecraft.world.scores.criteria.generated.js';

/** Live JVM enum net.minecraft.world.scores.DisplaySlot; constants are host handles, not strings. */
export type DisplaySlot = JavaEnum<"net.minecraft.world.scores.DisplaySlot", "BELOW_NAME" | "LIST" | "SIDEBAR" | "TEAM_AQUA" | "TEAM_BLACK" | "TEAM_BLUE" | "TEAM_DARK_AQUA" | "TEAM_DARK_BLUE" | "TEAM_DARK_GRAY" | "TEAM_DARK_GREEN" | "TEAM_DARK_PURPLE" | "TEAM_DARK_RED" | "TEAM_GOLD" | "TEAM_GRAY" | "TEAM_GREEN" | "TEAM_LIGHT_PURPLE" | "TEAM_RED" | "TEAM_WHITE" | "TEAM_YELLOW"> & DisplaySlotMembers;
export interface DisplaySlotMembers {
  getSerializedName(): string;
  id(): number;
}
export interface DisplaySlotStatics {
  readonly BELOW_NAME: DisplaySlot;
  readonly LIST: DisplaySlot;
  readonly SIDEBAR: DisplaySlot;
  readonly TEAM_AQUA: DisplaySlot;
  readonly TEAM_BLACK: DisplaySlot;
  readonly TEAM_BLUE: DisplaySlot;
  readonly TEAM_DARK_AQUA: DisplaySlot;
  readonly TEAM_DARK_BLUE: DisplaySlot;
  readonly TEAM_DARK_GRAY: DisplaySlot;
  readonly TEAM_DARK_GREEN: DisplaySlot;
  readonly TEAM_DARK_PURPLE: DisplaySlot;
  readonly TEAM_DARK_RED: DisplaySlot;
  readonly TEAM_GOLD: DisplaySlot;
  readonly TEAM_GRAY: DisplaySlot;
  readonly TEAM_GREEN: DisplaySlot;
  readonly TEAM_LIGHT_PURPLE: DisplaySlot;
  readonly TEAM_RED: DisplaySlot;
  readonly TEAM_WHITE: DisplaySlot;
  readonly TEAM_YELLOW: DisplaySlot;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [DisplaySlot]>;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<DisplaySlot>;
  teamColorToSlot(arg0: j_net_minecraft.ChatFormatting): DisplaySlot | null;
  valueOf(arg0: string): DisplaySlot;
  values(): Array<DisplaySlot>;
}

/** JVM class net.minecraft.world.scores.Objective. */
export interface ObjectiveMembers {
  displayAutoUpdate(): boolean;
  displayName: j_net_minecraft_network_chat.Component;
  getCriteria(): j_net_minecraft_world_scores_criteria.ObjectiveCriteria;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getFormattedDisplayName(): j_net_minecraft_network_chat.Component;
  getName(): string;
  getRenderType(): j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType;
  getScoreboard(): Scoreboard;
  numberFormat(): j_net_minecraft_network_chat_numbers.NumberFormat | null;
  numberFormatOrDefault(arg0: j_net_minecraft_network_chat_numbers.NumberFormat): j_net_minecraft_network_chat_numbers.NumberFormat;
  pack(): Objective_Packed;
  setDisplayAutoUpdate(arg0: boolean): void;
  setDisplayName(arg0: j_net_minecraft_network_chat.Component): void;
  setNumberFormat(arg0: j_net_minecraft_network_chat_numbers.NumberFormat | null): void;
  setRenderType(arg0: j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType): void;
}
export type Objective = ObjectiveMembers;
export interface ObjectiveStatics {
  new(arg0: Scoreboard, arg1: string, arg2: j_net_minecraft_world_scores_criteria.ObjectiveCriteria, arg3: j_net_minecraft_network_chat.Component, arg4: j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType, arg5: boolean, arg6: j_net_minecraft_network_chat_numbers.NumberFormat | null): Objective;
}

/** JVM record net.minecraft.world.scores.Objective$Packed. */
export interface Objective_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  criteria(): j_net_minecraft_world_scores_criteria.ObjectiveCriteria;
  displayAutoUpdate(): boolean;
  displayName(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  numberFormat(): JavaOptional<j_net_minecraft_network_chat_numbers.NumberFormat>;
  renderType(): j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType;
  toString(): string;
}
export type Objective_Packed = Objective_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface Objective_PackedStatics {
  new(arg0: string, arg1: j_net_minecraft_world_scores_criteria.ObjectiveCriteria, arg2: j_net_minecraft_network_chat.Component, arg3: j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType, arg4: boolean, arg5: JavaOptional<j_net_minecraft_network_chat_numbers.NumberFormat>): Objective_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Objective_Packed]>;
}

/** JVM record net.minecraft.world.scores.PlayerScoreEntry. */
export interface PlayerScoreEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  display(): j_net_minecraft_network_chat.Component | null;
  equals(arg0: object): boolean;
  formatValue(arg0: j_net_minecraft_network_chat_numbers.NumberFormat): j_net_minecraft_network_chat.MutableComponent;
  hashCode(): number;
  isHidden(): boolean;
  numberFormatOverride(): j_net_minecraft_network_chat_numbers.NumberFormat | null;
  owner(): string;
  ownerName(): j_net_minecraft_network_chat.Component;
  toString(): string;
  value(): number;
}
export type PlayerScoreEntry = PlayerScoreEntryMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerScoreEntryStatics {
  new(arg0: string, arg1: number, arg2: j_net_minecraft_network_chat.Component | null, arg3: j_net_minecraft_network_chat_numbers.NumberFormat | null): PlayerScoreEntry;
}

/** JVM class net.minecraft.world.scores.PlayerTeam. */
export interface PlayerTeamMembers {
  readonly __javaSupertypes?: readonly [Team];
  canSeeFriendlyInvisibles(): boolean;
  getCollisionRule(): Team_CollisionRule;
  getColor(): j_net_minecraft.ChatFormatting;
  getDeathMessageVisibility(): Team_Visibility;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getFormattedDisplayName(): j_net_minecraft_network_chat.MutableComponent;
  getFormattedName(arg0: j_net_minecraft_network_chat.Component): j_net_minecraft_network_chat.MutableComponent;
  getName(): string;
  getNameTagVisibility(): Team_Visibility;
  getPlayerPrefix(): j_net_minecraft_network_chat.Component;
  getPlayerSuffix(): j_net_minecraft_network_chat.Component;
  getPlayers(): JavaCollection<string>;
  getScoreboard(): Scoreboard;
  isAllowFriendlyFire(): boolean;
  pack(): PlayerTeam_Packed;
  packOptions(): number;
  setAllowFriendlyFire(arg0: boolean): void;
  setCollisionRule(arg0: Team_CollisionRule): void;
  setColor(arg0: j_net_minecraft.ChatFormatting): void;
  setDeathMessageVisibility(arg0: Team_Visibility): void;
  setDisplayName(arg0: j_net_minecraft_network_chat.Component): void;
  setNameTagVisibility(arg0: Team_Visibility): void;
  setPlayerPrefix(arg0: j_net_minecraft_network_chat.Component | null): void;
  setPlayerSuffix(arg0: j_net_minecraft_network_chat.Component | null): void;
  setSeeFriendlyInvisibles(arg0: boolean): void;
  unpackOptions(arg0: number): void;
}
export type PlayerTeam = PlayerTeamMembers & Team;
export interface PlayerTeamStatics {
  new(arg0: Scoreboard, arg1: string): PlayerTeam;
  formatNameForTeam(arg0: Team | null, arg1: j_net_minecraft_network_chat.Component): j_net_minecraft_network_chat.MutableComponent;
}

/** JVM record net.minecraft.world.scores.PlayerTeam$Packed. */
export interface PlayerTeam_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  allowFriendlyFire(): boolean;
  collisionRule(): Team_CollisionRule;
  color(): JavaOptional<j_net_minecraft.ChatFormatting>;
  deathMessageVisibility(): Team_Visibility;
  displayName(): JavaOptional<j_net_minecraft_network_chat.Component>;
  equals(arg0: object): boolean;
  hashCode(): number;
  memberNamePrefix(): j_net_minecraft_network_chat.Component;
  memberNameSuffix(): j_net_minecraft_network_chat.Component;
  name(): string;
  nameTagVisibility(): Team_Visibility;
  players(): JavaList<string>;
  seeFriendlyInvisibles(): boolean;
  toString(): string;
}
export type PlayerTeam_Packed = PlayerTeam_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface PlayerTeam_PackedStatics {
  new(arg0: string, arg1: JavaOptional<j_net_minecraft_network_chat.Component>, arg2: JavaOptional<j_net_minecraft.ChatFormatting>, arg3: boolean, arg4: boolean, arg5: j_net_minecraft_network_chat.Component, arg6: j_net_minecraft_network_chat.Component, arg7: Team_Visibility, arg8: Team_Visibility, arg9: Team_CollisionRule, arg10: JavaList<string>): PlayerTeam_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlayerTeam_Packed]>;
}

/** JVM interface net.minecraft.world.scores.ReadOnlyScoreInfo. */
export interface ReadOnlyScoreInfoMembers {
  formatValue(arg0: j_net_minecraft_network_chat_numbers.NumberFormat): j_net_minecraft_network_chat.MutableComponent;
  isLocked(): boolean;
  numberFormat(): j_net_minecraft_network_chat_numbers.NumberFormat | null;
  value(): number;
}
export type ReadOnlyScoreInfo = ReadOnlyScoreInfoMembers;
export interface ReadOnlyScoreInfoStatics {
  safeFormatValue(arg0: ReadOnlyScoreInfo | null, arg1: j_net_minecraft_network_chat_numbers.NumberFormat): j_net_minecraft_network_chat.MutableComponent;
}

/** JVM class net.minecraft.world.scores.Score. */
export interface ScoreMembers {
  readonly __javaSupertypes?: readonly [ReadOnlyScoreInfo];
  display(): j_net_minecraft_network_chat.Component | null;
  display(arg0: j_net_minecraft_network_chat.Component | null): void;
  isLocked(): boolean;
  numberFormat(): j_net_minecraft_network_chat_numbers.NumberFormat | null;
  numberFormat(arg0: j_net_minecraft_network_chat_numbers.NumberFormat | null): void;
  setLocked(arg0: boolean): void;
  value(): number;
  value(arg0: number): void;
}
export type Score = ScoreMembers & ReadOnlyScoreInfo;
export interface ScoreStatics {
  new(): Score;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Score]>;
}

/** JVM interface net.minecraft.world.scores.ScoreAccess. */
export interface ScoreAccessMembers {
  add(arg0: number): number;
  display(): j_net_minecraft_network_chat.Component | null;
  display(arg0: j_net_minecraft_network_chat.Component | null): void;
  get(): number;
  increment(): number;
  lock(): void;
  locked(): boolean;
  numberFormatOverride(arg0: j_net_minecraft_network_chat_numbers.NumberFormat | null): void;
  reset(): void;
  set(arg0: number): void;
  unlock(): void;
}
export type ScoreAccess = ScoreAccessMembers;
export interface ScoreAccessStatics {
}

/** JVM class net.minecraft.world.scores.Scoreboard. */
export interface ScoreboardMembers {
  addObjective(arg0: string, arg1: j_net_minecraft_world_scores_criteria.ObjectiveCriteria, arg2: j_net_minecraft_network_chat.Component, arg3: j_net_minecraft_world_scores_criteria.ObjectiveCriteria_RenderType, arg4: boolean, arg5: j_net_minecraft_network_chat_numbers.NumberFormat | null): Objective;
  addPlayerTeam(arg0: string): PlayerTeam;
  addPlayerToTeam(arg0: string, arg1: PlayerTeam): boolean;
  entityRemoved(arg0: j_net_minecraft_world_entity.Entity): void;
  forAllObjectives(arg0: j_net_minecraft_world_scores_criteria.ObjectiveCriteria, arg1: ScoreHolder, arg2: JavaConsumer<ScoreAccess>): void;
  getDisplayObjective(arg0: DisplaySlot): Objective | null;
  getObjective(arg0: string | null): Objective | null;
  getObjectiveNames(): JavaCollection<string>;
  getObjectives(): JavaCollection<Objective>;
  getOrCreatePlayerScore(arg0: ScoreHolder, arg1: Objective): ScoreAccess;
  getOrCreatePlayerScore(arg0: ScoreHolder, arg1: Objective, arg2: boolean): ScoreAccess;
  getPlayerScoreInfo(arg0: ScoreHolder, arg1: Objective): ReadOnlyScoreInfo | null;
  getPlayerTeam(arg0: string): PlayerTeam | null;
  getPlayerTeams(): JavaCollection<PlayerTeam>;
  getPlayersTeam(arg0: string): PlayerTeam | null;
  getTeamNames(): JavaCollection<string>;
  getTrackedPlayers(): JavaCollection<ScoreHolder>;
  listPlayerScores(arg0: Objective): JavaCollection<PlayerScoreEntry>;
  listPlayerScores(arg0: ScoreHolder): JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [Objective]>;
  onObjectiveAdded(arg0: Objective): void;
  onObjectiveChanged(arg0: Objective): void;
  onObjectiveRemoved(arg0: Objective): void;
  onPlayerRemoved(arg0: ScoreHolder): void;
  onPlayerScoreRemoved(arg0: ScoreHolder, arg1: Objective): void;
  onTeamAdded(arg0: PlayerTeam): void;
  onTeamChanged(arg0: PlayerTeam): void;
  onTeamRemoved(arg0: PlayerTeam): void;
  removeObjective(arg0: Objective): void;
  removePlayerFromTeam(arg0: string): boolean;
  removePlayerFromTeam(arg0: string, arg1: PlayerTeam): void;
  removePlayerTeam(arg0: PlayerTeam): void;
  resetAllPlayerScores(arg0: ScoreHolder): void;
  resetSinglePlayerScore(arg0: ScoreHolder, arg1: Objective): void;
  setDisplayObjective(arg0: DisplaySlot, arg1: Objective | null): void;
}
export type Scoreboard = ScoreboardMembers;
export interface ScoreboardStatics {
  new(): Scoreboard;
  readonly HIDDEN_SCORE_PREFIX: "#";
}

/** JVM record net.minecraft.world.scores.Scoreboard$PackedScore. */
export interface Scoreboard_PackedScoreMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  objective(): string;
  owner(): string;
  score(): Score;
  toString(): string;
}
export type Scoreboard_PackedScore = Scoreboard_PackedScoreMembers & JavaOpaque<"java.lang.Record">;
export interface Scoreboard_PackedScoreStatics {
  new(arg0: string, arg1: string, arg2: Score): Scoreboard_PackedScore;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Scoreboard_PackedScore]>;
}

/** JVM class net.minecraft.world.scores.ScoreboardSaveData. */
export interface ScoreboardSaveDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData];
  loadFrom(arg0: ScoreboardSaveData_Packed): void;
  pack(): ScoreboardSaveData_Packed;
}
export type ScoreboardSaveData = ScoreboardSaveDataMembers & j_net_minecraft_world_level_saveddata.SavedData;
export interface ScoreboardSaveDataStatics {
  new(arg0: Scoreboard): ScoreboardSaveData;
  readonly FILE_ID: "scoreboard";
}

/** JVM record net.minecraft.world.scores.ScoreboardSaveData$Packed. */
export interface ScoreboardSaveData_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  displaySlots(): JavaMap<DisplaySlot, string>;
  equals(arg0: object): boolean;
  hashCode(): number;
  objectives(): JavaList<Objective_Packed>;
  scores(): JavaList<Scoreboard_PackedScore>;
  teams(): JavaList<PlayerTeam_Packed>;
  toString(): string;
}
export type ScoreboardSaveData_Packed = ScoreboardSaveData_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface ScoreboardSaveData_PackedStatics {
  new(arg0: JavaList<Objective_Packed>, arg1: JavaList<Scoreboard_PackedScore>, arg2: JavaMap<DisplaySlot, string>, arg3: JavaList<PlayerTeam_Packed>): ScoreboardSaveData_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ScoreboardSaveData_Packed]>;
}

/** JVM interface net.minecraft.world.scores.ScoreHolder. */
export interface ScoreHolderMembers {
  getDisplayName(): j_net_minecraft_network_chat.Component | null;
  getFeedbackDisplayName(): j_net_minecraft_network_chat.Component;
  getScoreboardName(): string;
}
export type ScoreHolder = ScoreHolderMembers;
export interface ScoreHolderStatics {
  readonly WILDCARD: ScoreHolder;
  readonly WILDCARD_NAME: "*";
  forNameOnly(arg0: string): ScoreHolder;
  fromGameProfile(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): ScoreHolder;
}

/** JVM abstract net.minecraft.world.scores.Team. */
export interface TeamMembers {
  canSeeFriendlyInvisibles(): boolean;
  getCollisionRule(): Team_CollisionRule;
  getColor(): j_net_minecraft.ChatFormatting;
  getDeathMessageVisibility(): Team_Visibility;
  getFormattedName(arg0: j_net_minecraft_network_chat.Component): j_net_minecraft_network_chat.MutableComponent;
  getName(): string;
  getNameTagVisibility(): Team_Visibility;
  getPlayers(): JavaCollection<string>;
  isAlliedTo(arg0: Team | null): boolean;
  isAllowFriendlyFire(): boolean;
}
export type Team = TeamMembers;
export interface TeamStatics {
}

/** Live JVM enum net.minecraft.world.scores.Team$CollisionRule; constants are host handles, not strings. */
export type Team_CollisionRule = JavaEnum<"net.minecraft.world.scores.Team$CollisionRule", "ALWAYS" | "NEVER" | "PUSH_OTHER_TEAMS" | "PUSH_OWN_TEAM"> & Team_CollisionRuleMembers;
export interface Team_CollisionRuleMembers {
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getSerializedName(): string;
  readonly id: number;
  readonly name: string;
}
export interface Team_CollisionRuleStatics {
  readonly ALWAYS: Team_CollisionRule;
  readonly NEVER: Team_CollisionRule;
  readonly PUSH_OTHER_TEAMS: Team_CollisionRule;
  readonly PUSH_OWN_TEAM: Team_CollisionRule;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Team_CollisionRule]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Team_CollisionRule>;
  valueOf(arg0: string): Team_CollisionRule;
  values(): Array<Team_CollisionRule>;
}

/** Live JVM enum net.minecraft.world.scores.Team$Visibility; constants are host handles, not strings. */
export type Team_Visibility = JavaEnum<"net.minecraft.world.scores.Team$Visibility", "ALWAYS" | "HIDE_FOR_OTHER_TEAMS" | "HIDE_FOR_OWN_TEAM" | "NEVER"> & Team_VisibilityMembers;
export interface Team_VisibilityMembers {
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getSerializedName(): string;
  readonly id: number;
  readonly name: string;
}
export interface Team_VisibilityStatics {
  readonly ALWAYS: Team_Visibility;
  readonly HIDE_FOR_OTHER_TEAMS: Team_Visibility;
  readonly HIDE_FOR_OWN_TEAM: Team_Visibility;
  readonly NEVER: Team_Visibility;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Team_Visibility]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Team_Visibility>;
  valueOf(arg0: string): Team_Visibility;
  values(): Array<Team_Visibility>;
}
