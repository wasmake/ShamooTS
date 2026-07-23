// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_commands_execution from './net.minecraft.commands.execution.generated.js';
import type * as j_net_minecraft_commands_functions from './net.minecraft.commands.functions.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_commands from './net.minecraft.server.commands.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.commands.BrigadierExceptions. */
export interface BrigadierExceptionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.exceptions.BuiltInExceptionProvider">];
  dispatcherExpectedArgumentSeparator(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  dispatcherParseException(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  dispatcherUnknownArgument(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  dispatcherUnknownCommand(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  doubleTooHigh(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  doubleTooLow(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  floatTooHigh(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  floatTooLow(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  integerTooHigh(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  integerTooLow(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  literalIncorrect(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  longTooHigh(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  longTooLow(): JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  readerExpectedBool(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedDouble(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedEndOfQuote(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedFloat(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedInt(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedLong(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedStartOfQuote(): JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readerExpectedSymbol(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readerInvalidBool(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readerInvalidDouble(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readerInvalidEscape(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readerInvalidFloat(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readerInvalidInt(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readerInvalidLong(): JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
}
export type BrigadierExceptions = BrigadierExceptionsMembers & JavaOpaque<"com.mojang.brigadier.exceptions.BuiltInExceptionProvider">;
export interface BrigadierExceptionsStatics {
  new(): BrigadierExceptions;
}

/** JVM class net.minecraft.commands.CacheableFunction. */
export interface CacheableFunctionMembers {
  equals(arg0: object): boolean;
  get(arg0: j_net_minecraft_server.ServerFunctionManager): JavaOptional<j_net_minecraft_commands_functions.CommandFunction<CommandSourceStack>>;
  getId(): j_net_minecraft_resources.ResourceLocation;
}
export type CacheableFunction = CacheableFunctionMembers;
export interface CacheableFunctionStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): CacheableFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CacheableFunction]>;
}

/** JVM interface net.minecraft.commands.CommandBuildContext. */
export interface CommandBuildContextMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_core.HolderLookup_Provider];
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
}
export type CommandBuildContext = CommandBuildContextMembers & j_net_minecraft_core.HolderLookup_Provider;
export interface CommandBuildContextStatics {
  simple(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_flag.FeatureFlagSet): CommandBuildContext;
}

/** JVM interface net.minecraft.commands.CommandResultCallback. */
export interface CommandResultCallbackMembers {
  onFailure(): void;
  onResult(arg0: boolean, arg1: number): void;
  onSuccess(arg0: number): void;
}
export type CommandResultCallback = CommandResultCallbackMembers;
export interface CommandResultCallbackStatics {
  readonly EMPTY: CommandResultCallback;
  chain(arg0: CommandResultCallback, arg1: CommandResultCallback): CommandResultCallback;
}

/** JVM class net.minecraft.commands.Commands. */
export interface CommandsMembers {
  getDispatcher(): JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [CommandSourceStack]>;
  performCommand(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [CommandSourceStack]>, arg1: string): void;
  performCommand(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [CommandSourceStack]>, arg1: string, arg2: boolean): void;
  performPrefixedCommand(arg0: CommandSourceStack, arg1: string): void;
  sendCommands(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type Commands = CommandsMembers;
export interface CommandsStatics {
  new(arg0: Commands_CommandSelection, arg1: CommandBuildContext): Commands;
  new(arg0: Commands_CommandSelection, arg1: CommandBuildContext, arg2: boolean): Commands;
  readonly COMMAND_PREFIX: "/";
  readonly COMMAND_SENDING_POOL: JavaOpaque<"java.util.concurrent.ExecutorService">;
  readonly LEVEL_ADMINS: 3;
  readonly LEVEL_ALL: 0;
  readonly LEVEL_GAMEMASTERS: 2;
  readonly LEVEL_MODERATORS: 1;
  readonly LEVEL_OWNERS: 4;
  argument<T>(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>): JavaOpaque<"com.mojang.brigadier.builder.RequiredArgumentBuilder", [CommandSourceStack, T]>;
  createValidationContext(arg0: j_net_minecraft_core.HolderLookup_Provider): CommandBuildContext;
  createValidator(arg0: Commands_ParseFunction): JavaPredicate<string>;
  executeCommandInContext(arg0: CommandSourceStack, arg1: JavaConsumer<j_net_minecraft_commands_execution.ExecutionContext<CommandSourceStack>>): void;
  getParseException<S>(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [S]>): JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException"> | null;
  hasPermission<T /* extends PermissionSource */>(arg0: number): j_net_minecraft_server_commands.PermissionCheck<T>;
  literal(arg0: string): JavaOpaque<"com.mojang.brigadier.builder.LiteralArgumentBuilder", [CommandSourceStack]>;
  mapSource<S>(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [S]>, arg1: JavaOpaque<"java.util.function.UnaryOperator", [S]>): JavaOpaque<"com.mojang.brigadier.ParseResults", [S]>;
  trimOptionalPrefix(arg0: string): string;
  validate(): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  validateParseResults<S>(arg0: JavaOpaque<"com.mojang.brigadier.ParseResults", [S]>): void;
}

/** Live JVM enum net.minecraft.commands.Commands$CommandSelection; constants are host handles, not strings. */
export type Commands_CommandSelection = JavaEnum<"net.minecraft.commands.Commands$CommandSelection", "ALL" | "DEDICATED" | "INTEGRATED"> & Commands_CommandSelectionMembers;
export interface Commands_CommandSelectionMembers {
}
export interface Commands_CommandSelectionStatics {
  readonly ALL: Commands_CommandSelection;
  readonly DEDICATED: Commands_CommandSelection;
  readonly INTEGRATED: Commands_CommandSelection;
  valueOf(arg0: string): Commands_CommandSelection;
  values(): Array<Commands_CommandSelection>;
}

/** JVM interface net.minecraft.commands.Commands$ParseFunction. */
export interface Commands_ParseFunctionMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): void;
}
export type Commands_ParseFunction = Commands_ParseFunctionMembers;
export interface Commands_ParseFunctionStatics {
}

/** JVM interface net.minecraft.commands.CommandSigningContext. */
export interface CommandSigningContextMembers {
  getArgument(arg0: string): j_net_minecraft_network_chat.PlayerChatMessage | null;
}
export type CommandSigningContext = CommandSigningContextMembers;
export interface CommandSigningContextStatics {
  readonly ANONYMOUS: CommandSigningContext;
}

/** JVM record net.minecraft.commands.CommandSigningContext$SignedArguments. */
export interface CommandSigningContext_SignedArgumentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CommandSigningContext];
  arguments(): JavaMap<string, j_net_minecraft_network_chat.PlayerChatMessage>;
  equals(arg0: object): boolean;
  getArgument(arg0: string): j_net_minecraft_network_chat.PlayerChatMessage | null;
  hashCode(): number;
  toString(): string;
}
export type CommandSigningContext_SignedArguments = CommandSigningContext_SignedArgumentsMembers & JavaOpaque<"java.lang.Record"> & CommandSigningContext;
export interface CommandSigningContext_SignedArgumentsStatics {
  new(arg0: JavaMap<string, j_net_minecraft_network_chat.PlayerChatMessage>): CommandSigningContext_SignedArguments;
}

/** JVM interface net.minecraft.commands.CommandSource. */
export interface CommandSourceMembers {
  acceptsFailure(): boolean;
  acceptsSuccess(): boolean;
  alwaysAccepts(): boolean;
  getBukkitSender(arg0: CommandSourceStack): JavaOpaque<"org.bukkit.command.CommandSender">;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component): void;
  shouldInformAdmins(): boolean;
}
export type CommandSource = CommandSourceMembers;
export interface CommandSourceStatics {
  readonly NULL: CommandSource;
}

/** JVM class net.minecraft.commands.CommandSourceStack. */
export interface CommandSourceStackMembers {
  readonly __javaSupertypes?: readonly [ExecutionCommandSource<CommandSourceStack>, PermissionSource, SharedSuggestionProvider, JavaOpaque<"io.papermc.paper.command.brigadier.PaperCommandSourceStack">];
  allowsSelectors(): boolean;
  bypassSelectorPermissions: boolean;
  callback(): CommandResultCallback;
  clearCallbacks(): CommandSourceStack;
  customSuggestion(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [object]>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  dispatcher(): JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [CommandSourceStack]>;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  facing(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor): CommandSourceStack;
  facing(arg0: j_net_minecraft_world_phys.Vec3): CommandSourceStack;
  getAbsoluteCoordinates(): JavaCollection<SharedSuggestionProvider_TextCoordinates>;
  getAllTeams(): JavaCollection<string>;
  getAnchor(): j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor;
  getAvailableSounds(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  getBukkitSender(): JavaOpaque<"org.bukkit.command.CommandSender">;
  getChatMessageChainer(): j_net_minecraft_util.TaskChainer;
  getCustomTabSugggestions(): JavaCollection<string>;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getEntity(): j_net_minecraft_world_entity.Entity | null;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getEntityOrException(): j_net_minecraft_world_entity.Entity;
  getHandle(): CommandSourceStack;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getOnlinePlayerNames(): JavaCollection<string>;
  getPlayer(): j_net_minecraft_server_level.ServerPlayer | null;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getPlayerOrException(): j_net_minecraft_server_level.ServerPlayer;
  getPosition(): j_net_minecraft_world_phys.Vec3;
  getRelevantCoordinates(): JavaCollection<SharedSuggestionProvider_TextCoordinates>;
  getRotation(): j_net_minecraft_world_phys.Vec2;
  getSelectedEntities(): JavaCollection<string>;
  getServer(): j_net_minecraft_server.MinecraftServer;
  getSigningContext(): CommandSigningContext;
  getTextName(): string;
  handleError(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.CommandExceptionType">, arg1: JavaOpaque<"com.mojang.brigadier.Message">, arg2: boolean, arg3: j_net_minecraft_commands_execution.TraceCallbacks | null): void | null;
  handleError(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">, arg1: boolean, arg2: j_net_minecraft_commands_execution.TraceCallbacks | null): void | null;
  hasPermission(arg0: number): boolean;
  hasPermission(arg0: number, arg1: string): boolean;
  isPlayer(): boolean;
  isSilent(): boolean;
  levels(): JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  sendChatMessage(arg0: j_net_minecraft_network_chat.OutgoingChatMessage, arg1: boolean, arg2: j_net_minecraft_network_chat.ChatType_Bound): void;
  sendFailure(arg0: j_net_minecraft_network_chat.Component): void;
  sendFailure(arg0: j_net_minecraft_network_chat.Component, arg1: boolean): void;
  sendSuccess(arg0: JavaSupplier<j_net_minecraft_network_chat.Component>, arg1: boolean): void;
  sendSystemMessage(arg0: j_net_minecraft_network_chat.Component): void;
  shouldFilterMessageTo(arg0: j_net_minecraft_server_level.ServerPlayer): boolean;
  readonly source: CommandSource;
  suggestRegistryElements(arg0: j_net_minecraft_core.HolderLookup<object>, arg1: SharedSuggestionProvider_ElementSuggestionType, arg2: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): void;
  suggestRegistryElements(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, arg1: SharedSuggestionProvider_ElementSuggestionType, arg2: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg3: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [object]>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  withAnchor(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor): CommandSourceStack;
  withCallback(arg0: CommandResultCallback): CommandSourceStack;
  withCallback(arg0: CommandResultCallback): ExecutionCommandSource;
  withCallback(arg0: CommandResultCallback, arg1: JavaOpaque<"java.util.function.BinaryOperator", [CommandResultCallback]>): CommandSourceStack;
  withEntity(arg0: j_net_minecraft_world_entity.Entity): CommandSourceStack;
  withLevel(arg0: j_net_minecraft_server_level.ServerLevel): CommandSourceStack;
  withLocation(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"io.papermc.paper.command.brigadier.CommandSourceStack">;
  withLocation(arg0: JavaOpaque<"org.bukkit.Location">): CommandSourceStack;
  withMaximumPermission(arg0: number): CommandSourceStack;
  withPermission(arg0: number): CommandSourceStack;
  withPosition(arg0: j_net_minecraft_world_phys.Vec3): CommandSourceStack;
  withRotation(arg0: j_net_minecraft_world_phys.Vec2): CommandSourceStack;
  withSigningContext(arg0: CommandSigningContext, arg1: j_net_minecraft_util.TaskChainer): CommandSourceStack;
  withSource(arg0: CommandSource): CommandSourceStack;
  withSuppressedOutput(): CommandSourceStack;
}
export type CommandSourceStack = CommandSourceStackMembers & PermissionSource & SharedSuggestionProvider & JavaOpaque<"io.papermc.paper.command.brigadier.PaperCommandSourceStack">;
export interface CommandSourceStackStatics {
  new(arg0: CommandSource, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec2, arg3: j_net_minecraft_server_level.ServerLevel, arg4: number, arg5: string, arg6: j_net_minecraft_network_chat.Component, arg7: j_net_minecraft_server.MinecraftServer, arg8: j_net_minecraft_world_entity.Entity | null): CommandSourceStack;
  new(arg0: CommandSource, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec2, arg3: j_net_minecraft_server_level.ServerLevel, arg4: number, arg5: string, arg6: j_net_minecraft_network_chat.Component, arg7: j_net_minecraft_server.MinecraftServer, arg8: j_net_minecraft_world_entity.Entity | null, arg9: boolean, arg10: CommandResultCallback, arg11: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg12: CommandSigningContext, arg13: j_net_minecraft_util.TaskChainer): CommandSourceStack;
  readonly ERROR_NOT_ENTITY: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_NOT_PLAYER: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
}

/** JVM interface net.minecraft.commands.ExecutionCommandSource. */
export interface ExecutionCommandSourceMembers<T /* extends ExecutionCommandSource<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [PermissionSource];
  callback(): CommandResultCallback;
  clearCallbacks(): T;
  dispatcher(): JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>;
  handleError(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.CommandExceptionType">, arg1: JavaOpaque<"com.mojang.brigadier.Message">, arg2: boolean, arg3: j_net_minecraft_commands_execution.TraceCallbacks | null): void | null;
  handleError(arg0: JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">, arg1: boolean, arg2: j_net_minecraft_commands_execution.TraceCallbacks | null): void | null;
  isSilent(): boolean;
  withCallback(arg0: CommandResultCallback): T;
}
export type ExecutionCommandSource<T /* extends ExecutionCommandSource<T> */ = unknown> = ExecutionCommandSourceMembers<T> & PermissionSource;
export interface ExecutionCommandSourceStatics {
  resultConsumer<T /* extends ExecutionCommandSource<T> */>(): JavaOpaque<"com.mojang.brigadier.ResultConsumer", [T]>;
}

/** JVM class net.minecraft.commands.FunctionInstantiationException. */
export interface FunctionInstantiationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
  messageComponent(): j_net_minecraft_network_chat.Component;
}
export type FunctionInstantiationException = FunctionInstantiationExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface FunctionInstantiationExceptionStatics {
  new(arg0: j_net_minecraft_network_chat.Component): FunctionInstantiationException;
}

/** JVM class net.minecraft.commands.ParserUtils. */
export interface ParserUtilsMembers {
}
export type ParserUtils = ParserUtilsMembers;
export interface ParserUtilsStatics {
  new(): ParserUtils;
  readWhile(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: j_net_minecraft.CharPredicate): string;
}

/** JVM interface net.minecraft.commands.PermissionSource. */
export interface PermissionSourceMembers {
  allowsSelectors(): boolean;
  hasPermission(arg0: number): boolean;
}
export type PermissionSource = PermissionSourceMembers;
export interface PermissionSourceStatics {
}

/** JVM record net.minecraft.commands.PermissionSource$Check. */
export interface PermissionSource_CheckMembers<T /* extends PermissionSource */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_server_commands.PermissionCheck<T>];
  equals(arg0: object): boolean;
  hashCode(): number;
  requiredLevel(): number;
  test(arg0: object): boolean;
  test(arg0: T): boolean;
  toString(): string;
  vanillaNode(): JavaOpaque<"java.util.concurrent.atomic.AtomicReference", [JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [CommandSourceStack]>]>;
}
export type PermissionSource_Check<T /* extends PermissionSource */ = unknown> = PermissionSource_CheckMembers<T> & JavaOpaque<"java.lang.Record"> & j_net_minecraft_server_commands.PermissionCheck<T>;
export interface PermissionSource_CheckStatics {
  new<T /* extends PermissionSource */>(arg0: number): PermissionSource_Check<T>;
  new<T /* extends PermissionSource */>(arg0: number, arg1: JavaOpaque<"java.util.concurrent.atomic.AtomicReference", [JavaOpaque<"com.mojang.brigadier.tree.CommandNode", [CommandSourceStack]>]>): PermissionSource_Check<T>;
}

/** JVM interface net.minecraft.commands.PermissionSource$RestrictedMarker. */
export interface PermissionSource_RestrictedMarkerMembers {
}
export type PermissionSource_RestrictedMarker = PermissionSource_RestrictedMarkerMembers;
export interface PermissionSource_RestrictedMarkerStatics {
}

/** JVM interface net.minecraft.commands.SharedSuggestionProvider. */
export interface SharedSuggestionProviderMembers {
  customSuggestion(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [object]>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  getAbsoluteCoordinates(): JavaCollection<SharedSuggestionProvider_TextCoordinates>;
  getAllTeams(): JavaCollection<string>;
  getAvailableSounds(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  getCustomTabSugggestions(): JavaCollection<string>;
  getOnlinePlayerNames(): JavaCollection<string>;
  getRelevantCoordinates(): JavaCollection<SharedSuggestionProvider_TextCoordinates>;
  getSelectedEntities(): JavaCollection<string>;
  levels(): JavaSet<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>>;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  suggestRegistryElements(arg0: j_net_minecraft_core.HolderLookup<object>, arg1: SharedSuggestionProvider_ElementSuggestionType, arg2: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): void;
  suggestRegistryElements(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, arg1: SharedSuggestionProvider_ElementSuggestionType, arg2: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg3: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [object]>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
}
export type SharedSuggestionProvider = SharedSuggestionProviderMembers;
export interface SharedSuggestionProviderStatics {
  readonly MATCH_SPLITTER: JavaOpaque<"com.google.common.base.CharMatcher">;
  filterResources<T>(arg0: Iterable<T>, arg1: string, arg2: string, arg3: JavaFunction<T, j_net_minecraft_resources.ResourceLocation>, arg4: JavaConsumer<T>): void;
  filterResources<T>(arg0: Iterable<T>, arg1: string, arg2: JavaFunction<T, j_net_minecraft_resources.ResourceLocation>, arg3: JavaConsumer<T>): void;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<object>>, arg3: SharedSuggestionProvider_ElementSuggestionType): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  matchesSubStr(arg0: string, arg1: string): boolean;
  suggest(arg0: Iterable<string>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggest<T>(arg0: Iterable<T>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: JavaFunction<T, string>, arg3: JavaFunction<T, JavaOpaque<"com.mojang.brigadier.Message">>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggest(arg0: JavaOpaque<"java.util.stream.Stream", [string]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggest(arg0: Array<string>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggest2DCoordinates(arg0: string, arg1: JavaCollection<SharedSuggestionProvider_TextCoordinates>, arg2: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg3: JavaPredicate<string>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestCoordinates(arg0: string, arg1: JavaCollection<SharedSuggestionProvider_TextCoordinates>, arg2: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg3: JavaPredicate<string>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestResource(arg0: Iterable<j_net_minecraft_resources.ResourceLocation>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestResource(arg0: Iterable<j_net_minecraft_resources.ResourceLocation>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: string): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestResource<T>(arg0: Iterable<T>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: JavaFunction<T, j_net_minecraft_resources.ResourceLocation>, arg3: JavaFunction<T, JavaOpaque<"com.mojang.brigadier.Message">>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestResource(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestResource(arg0: JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: string): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  suggestResource<T>(arg0: JavaOpaque<"java.util.stream.Stream", [T]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: JavaFunction<T, j_net_minecraft_resources.ResourceLocation>, arg3: JavaFunction<T, JavaOpaque<"com.mojang.brigadier.Message">>): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
}

/** Live JVM enum net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType; constants are host handles, not strings. */
export type SharedSuggestionProvider_ElementSuggestionType = JavaEnum<"net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType", "ALL" | "ELEMENTS" | "TAGS"> & SharedSuggestionProvider_ElementSuggestionTypeMembers;
export interface SharedSuggestionProvider_ElementSuggestionTypeMembers {
  shouldSuggestElements(): boolean;
  shouldSuggestTags(): boolean;
}
export interface SharedSuggestionProvider_ElementSuggestionTypeStatics {
  readonly ALL: SharedSuggestionProvider_ElementSuggestionType;
  readonly ELEMENTS: SharedSuggestionProvider_ElementSuggestionType;
  readonly TAGS: SharedSuggestionProvider_ElementSuggestionType;
  valueOf(arg0: string): SharedSuggestionProvider_ElementSuggestionType;
  values(): Array<SharedSuggestionProvider_ElementSuggestionType>;
}

/** JVM class net.minecraft.commands.SharedSuggestionProvider$TextCoordinates. */
export interface SharedSuggestionProvider_TextCoordinatesMembers {
  readonly x: string;
  readonly y: string;
  readonly z: string;
}
export type SharedSuggestionProvider_TextCoordinates = SharedSuggestionProvider_TextCoordinatesMembers;
export interface SharedSuggestionProvider_TextCoordinatesStatics {
  new(arg0: string, arg1: string, arg2: string): SharedSuggestionProvider_TextCoordinates;
  readonly DEFAULT_GLOBAL: SharedSuggestionProvider_TextCoordinates;
  readonly DEFAULT_LOCAL: SharedSuggestionProvider_TextCoordinates;
}
