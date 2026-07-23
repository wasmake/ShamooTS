// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.commands.arguments.selector.EntitySelector. */
export interface EntitySelectorMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  findEntities(arg0: j_net_minecraft_commands.CommandSourceStack): JavaList<j_net_minecraft_world_entity.Entity>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  findPlayers(arg0: j_net_minecraft_commands.CommandSourceStack): JavaList<j_net_minecraft_server_level.ServerPlayer>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  findSingleEntity(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_entity.Entity;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  findSinglePlayer(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_server_level.ServerPlayer;
  getMaxResults(): number;
  includesEntities(): boolean;
  isSelfSelector(): boolean;
  isWorldLimited(): boolean;
  usesSelector(): boolean;
}
export type EntitySelector = EntitySelectorMembers;
export interface EntitySelectorStatics {
  new(arg0: number, arg1: boolean, arg2: boolean, arg3: JavaList<JavaPredicate<j_net_minecraft_world_entity.Entity>>, arg4: j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles, arg5: JavaFunction<j_net_minecraft_world_phys.Vec3, j_net_minecraft_world_phys.Vec3>, arg6: j_net_minecraft_world_phys.AABB | null, arg7: JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>, arg8: boolean, arg9: string | null, arg10: JavaOpaque<"java.util.UUID"> | null, arg11: j_net_minecraft_world_entity.EntityType<object> | null, arg12: boolean): EntitySelector;
  readonly INFINITE: 2147483647;
  readonly ORDER_ARBITRARY: JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>;
  joinNames(arg0: JavaList<j_net_minecraft_world_entity.Entity>): j_net_minecraft_network_chat.Component;
}

/** JVM class net.minecraft.commands.arguments.selector.EntitySelectorParser. */
export interface EntitySelectorParserMembers {
  addPredicate(arg0: JavaPredicate<j_net_minecraft_world_entity.Entity>): void;
  fillSuggestions(arg0: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg1: JavaConsumer<JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  getDeltaX(): number | null;
  getDeltaY(): number | null;
  getDeltaZ(): number | null;
  getDistance(): j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles;
  getLevel(): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
  getOrder(): JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>;
  getReader(): JavaOpaque<"com.mojang.brigadier.StringReader">;
  getRotX(): j_net_minecraft_advancements_critereon.WrappedMinMaxBounds;
  getRotY(): j_net_minecraft_advancements_critereon.WrappedMinMaxBounds;
  getSelector(): EntitySelector;
  getX(): number | null;
  getY(): number | null;
  getZ(): number | null;
  hasAdvancements(): boolean;
  hasGamemodeEquals(): boolean;
  hasGamemodeNotEquals(): boolean;
  hasNameEquals(): boolean;
  hasNameNotEquals(): boolean;
  hasScores(): boolean;
  hasTeamEquals(): boolean;
  hasTeamNotEquals(): boolean;
  isCurrentEntity(): boolean;
  isLimited(): boolean;
  isSorted(): boolean;
  isTag(): boolean;
  isTypeLimited(): boolean;
  isTypeLimitedInversely(): boolean;
  limitToType(arg0: j_net_minecraft_world_entity.EntityType<object>): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(): EntitySelector;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: boolean): EntitySelector;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseNameOrUUID(): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseOptions(): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseSelector(arg0: boolean): void;
  setDeltaX(arg0: number): void;
  setDeltaY(arg0: number): void;
  setDeltaZ(arg0: number): void;
  setDistance(arg0: j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles): void;
  setHasAdvancements(arg0: boolean): void;
  setHasGamemodeEquals(arg0: boolean): void;
  setHasGamemodeNotEquals(arg0: boolean): void;
  setHasNameEquals(arg0: boolean): void;
  setHasNameNotEquals(arg0: boolean): void;
  setHasScores(arg0: boolean): void;
  setHasTeamEquals(arg0: boolean): void;
  setHasTeamNotEquals(arg0: boolean): void;
  setIncludesEntities(arg0: boolean): void;
  setLevel(arg0: j_net_minecraft_advancements_critereon.MinMaxBounds_Ints): void;
  setLimited(arg0: boolean): void;
  setMaxResults(arg0: number): void;
  setOrder(arg0: JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>): void;
  setRotX(arg0: j_net_minecraft_advancements_critereon.WrappedMinMaxBounds): void;
  setRotY(arg0: j_net_minecraft_advancements_critereon.WrappedMinMaxBounds): void;
  setSorted(arg0: boolean): void;
  setSuggestions(arg0: JavaBiFunction<JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, JavaConsumer<JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">>, PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>>): void;
  setTypeLimitedInversely(): void;
  setWorldLimited(): void;
  setX(arg0: number): void;
  setY(arg0: number): void;
  setZ(arg0: number): void;
  shouldInvertValue(): boolean;
}
export type EntitySelectorParser = EntitySelectorParserMembers;
export interface EntitySelectorParserStatics {
  new(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean): EntitySelectorParser;
  readonly ERROR_EXPECTED_END_OF_OPTIONS: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_EXPECTED_OPTION_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_INVALID_NAME_OR_UUID: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_MISSING_SELECTOR_TYPE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_SELECTORS_NOT_ALLOWED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_UNKNOWN_SELECTOR_TYPE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ORDER_FURTHEST: JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>;
  readonly ORDER_NEAREST: JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>;
  readonly ORDER_RANDOM: JavaBiConsumer<j_net_minecraft_world_phys.Vec3, JavaList<j_net_minecraft_world_entity.Entity>>;
  readonly SUGGEST_NOTHING: JavaBiFunction<JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, JavaConsumer<JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">>, PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>>;
  readonly SYNTAX_NOT: 33;
  readonly SYNTAX_OPTIONS_KEY_VALUE_SEPARATOR: 61;
  readonly SYNTAX_SELECTOR_START: 64;
  readonly SYNTAX_TAG: 35;
  allowSelectors<S>(arg0: S): boolean;
}

/** JVM record net.minecraft.commands.arguments.selector.SelectorPattern. */
export interface SelectorPatternMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  pattern(): string;
  resolved(): EntitySelector;
  toString(): string;
}
export type SelectorPattern = SelectorPatternMembers & JavaOpaque<"java.lang.Record">;
export interface SelectorPatternStatics {
  new(arg0: string, arg1: EntitySelector): SelectorPattern;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SelectorPattern]>;
  parse(arg0: string): JavaOpaque<"com.mojang.serialization.DataResult", [SelectorPattern]>;
}
