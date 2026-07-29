// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_commands_arguments_blocks from './net.minecraft.commands.arguments.blocks.generated.js';
import type * as j_net_minecraft_commands_execution from './net.minecraft.commands.execution.generated.js';
import type * as j_net_minecraft_commands_functions from './net.minecraft.commands.functions.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_chat_numbers from './net.minecraft.network.chat.numbers.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_bossevents from './net.minecraft.server.bossevents.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state_pattern from './net.minecraft.world.level.block.state.pattern.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.server.commands.AdvancementCommands. */
export interface AdvancementCommandsMembers {
}
export type AdvancementCommands = AdvancementCommandsMembers;
export interface AdvancementCommandsStatics {
  new(): AdvancementCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.AttributeCommand. */
export interface AttributeCommandMembers {
}
export type AttributeCommand = AttributeCommandMembers;
export interface AttributeCommandStatics {
  new(): AttributeCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.BanIpCommands. */
export interface BanIpCommandsMembers {
}
export type BanIpCommands = BanIpCommandsMembers;
export interface BanIpCommandsStatics {
  new(): BanIpCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.BanListCommands. */
export interface BanListCommandsMembers {
}
export type BanListCommands = BanListCommandsMembers;
export interface BanListCommandsStatics {
  new(): BanListCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.BanPlayerCommands. */
export interface BanPlayerCommandsMembers {
}
export type BanPlayerCommands = BanPlayerCommandsMembers;
export interface BanPlayerCommandsStatics {
  new(): BanPlayerCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.BossBarCommands. */
export interface BossBarCommandsMembers {
}
export type BossBarCommands = BossBarCommandsMembers;
export interface BossBarCommandsStatics {
  new(): BossBarCommands;
  readonly SUGGEST_BOSS_BAR: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.CommandSourceStack]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getBossBar(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): j_net_minecraft_server_bossevents.CustomBossEvent;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.ChaseCommand. */
export interface ChaseCommandMembers {
}
export type ChaseCommand = ChaseCommandMembers;
export interface ChaseCommandStatics {
  new(): ChaseCommand;
  readonly DIMENSION_NAMES: JavaOpaque<"com.google.common.collect.BiMap", [string, j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>]>;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.ClearInventoryCommands. */
export interface ClearInventoryCommandsMembers {
}
export type ClearInventoryCommands = ClearInventoryCommandsMembers;
export interface ClearInventoryCommandsStatics {
  new(): ClearInventoryCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.CloneCommands. */
export interface CloneCommandsMembers {
}
export type CloneCommands = CloneCommandsMembers;
export interface CloneCommandsStatics {
  new(): CloneCommands;
  readonly FILTER_AIR: JavaPredicate<j_net_minecraft_world_level_block_state_pattern.BlockInWorld>;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.DamageCommand. */
export interface DamageCommandMembers {
}
export type DamageCommand = DamageCommandMembers;
export interface DamageCommandStatics {
  new(): DamageCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.DataPackCommand. */
export interface DataPackCommandMembers {
}
export type DataPackCommand = DataPackCommandMembers;
export interface DataPackCommandStatics {
  new(): DataPackCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.DebugCommand. */
export interface DebugCommandMembers {
}
export type DebugCommand = DebugCommandMembers;
export interface DebugCommandStatics {
  new(): DebugCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.DebugConfigCommand. */
export interface DebugConfigCommandMembers {
}
export type DebugConfigCommand = DebugConfigCommandMembers;
export interface DebugConfigCommandStatics {
  new(): DebugConfigCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.DebugMobSpawningCommand. */
export interface DebugMobSpawningCommandMembers {
}
export type DebugMobSpawningCommand = DebugMobSpawningCommandMembers;
export interface DebugMobSpawningCommandStatics {
  new(): DebugMobSpawningCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.DebugPathCommand. */
export interface DebugPathCommandMembers {
}
export type DebugPathCommand = DebugPathCommandMembers;
export interface DebugPathCommandStatics {
  new(): DebugPathCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.DefaultGameModeCommands. */
export interface DefaultGameModeCommandsMembers {
}
export type DefaultGameModeCommands = DefaultGameModeCommandsMembers;
export interface DefaultGameModeCommandsStatics {
  new(): DefaultGameModeCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.DeOpCommands. */
export interface DeOpCommandsMembers {
}
export type DeOpCommands = DeOpCommandsMembers;
export interface DeOpCommandsStatics {
  new(): DeOpCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.DialogCommand. */
export interface DialogCommandMembers {
}
export type DialogCommand = DialogCommandMembers;
export interface DialogCommandStatics {
  new(): DialogCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.DifficultyCommand. */
export interface DifficultyCommandMembers {
}
export type DifficultyCommand = DifficultyCommandMembers;
export interface DifficultyCommandStatics {
  new(): DifficultyCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  setDifficulty(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_world.Difficulty): number;
}

/** JVM class net.minecraft.server.commands.EffectCommands. */
export interface EffectCommandsMembers {
}
export type EffectCommands = EffectCommandsMembers;
export interface EffectCommandsStatics {
  new(): EffectCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.EmoteCommands. */
export interface EmoteCommandsMembers {
}
export type EmoteCommands = EmoteCommandsMembers;
export interface EmoteCommandsStatics {
  new(): EmoteCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.EnchantCommand. */
export interface EnchantCommandMembers {
}
export type EnchantCommand = EnchantCommandMembers;
export interface EnchantCommandStatics {
  new(): EnchantCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.ExecuteCommand. */
export interface ExecuteCommand_2Members {
}
export type ExecuteCommand_2 = ExecuteCommand_2Members;
export interface ExecuteCommand_2Statics {
  new(): ExecuteCommand_2;
  readonly ERROR_FUNCTION_CONDITION_INSTANTATION_FAILURE: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
  scheduleFunctionConditionsAndTest<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: T, arg1: JavaList<T>, arg2: JavaFunction<T, T>, arg3: JavaOpaque<"java.util.function.IntPredicate">, arg4: JavaOpaque<"com.mojang.brigadier.context.ContextChain", [T]>, arg5: j_net_minecraft_nbt.CompoundTag | null, arg6: j_net_minecraft_commands_execution.ExecutionControl<T>, arg7: InCommandFunction<JavaOpaque<"com.mojang.brigadier.context.CommandContext", [T]>, JavaCollection<j_net_minecraft_commands_functions.CommandFunction<T>>>, arg8: j_net_minecraft_commands_execution.ChainModifiers): void;
}

/** JVM class net.minecraft.server.commands.ExperienceCommand. */
export interface ExperienceCommandMembers {
}
export type ExperienceCommand = ExperienceCommandMembers;
export interface ExperienceCommandStatics {
  new(): ExperienceCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.FillBiomeCommand. */
export interface FillBiomeCommandMembers {
}
export type FillBiomeCommand = FillBiomeCommandMembers;
export interface FillBiomeCommandStatics {
  new(): FillBiomeCommand;
  readonly ERROR_NOT_LOADED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  fill(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): JavaOpaque<"com.mojang.datafixers.util.Either", [number, JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">]>;
  fill(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>, arg4: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>>, arg5: JavaConsumer<JavaSupplier<j_net_minecraft_network_chat.Component>>): JavaOpaque<"com.mojang.datafixers.util.Either", [number, JavaOpaque<"com.mojang.brigadier.exceptions.CommandSyntaxException">]>;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.FillCommand. */
export interface FillCommandMembers {
}
export type FillCommand = FillCommandMembers;
export interface FillCommandStatics {
  new(): FillCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM interface net.minecraft.server.commands.FillCommand$Affector. */
export interface FillCommand_AffectorMembers {
  affect(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
}
export type FillCommand_Affector = FillCommand_AffectorMembers;
export interface FillCommand_AffectorStatics {
  readonly NOOP: FillCommand_Affector;
}

/** JVM interface net.minecraft.server.commands.FillCommand$Filter. */
export interface FillCommand_FilterMembers {
  filter(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_commands_arguments_blocks.BlockInput, arg3: j_net_minecraft_server_level.ServerLevel): j_net_minecraft_commands_arguments_blocks.BlockInput | null;
}
export type FillCommand_Filter = FillCommand_FilterMembers;
export interface FillCommand_FilterStatics {
  readonly NOOP: FillCommand_Filter;
}

/** JVM class net.minecraft.server.commands.ForceLoadCommand. */
export interface ForceLoadCommandMembers {
}
export type ForceLoadCommand = ForceLoadCommandMembers;
export interface ForceLoadCommandStatics {
  new(): ForceLoadCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.FunctionCommand. */
export interface FunctionCommandMembers {
}
export type FunctionCommand = FunctionCommandMembers;
export interface FunctionCommandStatics {
  new(): FunctionCommand;
  readonly ERROR_FUNCTION_INSTANTATION_FAILURE: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  readonly SUGGEST_FUNCTION: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.CommandSourceStack]>;
  modifySenderForExecution(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_commands.CommandSourceStack;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  queueFunctions<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: JavaCollection<j_net_minecraft_commands_functions.CommandFunction<T>>, arg1: j_net_minecraft_nbt.CompoundTag | null, arg2: T, arg3: T, arg4: j_net_minecraft_commands_execution.ExecutionControl<T>, arg5: FunctionCommand_Callbacks<T>, arg6: j_net_minecraft_commands_execution.ChainModifiers): void;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM interface net.minecraft.server.commands.FunctionCommand$Callbacks. */
export interface FunctionCommand_CallbacksMembers<T = unknown> {
  signalResult(arg0: T, arg1: j_net_minecraft_resources.ResourceLocation, arg2: number): void;
}
export type FunctionCommand_Callbacks<T = unknown> = FunctionCommand_CallbacksMembers<T>;
export interface FunctionCommand_CallbacksStatics {
}

/** JVM class net.minecraft.server.commands.GameModeCommand. */
export interface GameModeCommandMembers {
}
export type GameModeCommand = GameModeCommandMembers;
export interface GameModeCommandStatics {
  new(): GameModeCommand;
  readonly PERMISSION_LEVEL: 2;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
  setGameMode(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level.GameType): void;
}

/** JVM class net.minecraft.server.commands.GameRuleCommand. */
export interface GameRuleCommandMembers {
}
export type GameRuleCommand = GameRuleCommandMembers;
export interface GameRuleCommandStatics {
  new(): GameRuleCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.GiveCommand. */
export interface GiveCommandMembers {
}
export type GiveCommand = GiveCommandMembers;
export interface GiveCommandStatics {
  new(): GiveCommand;
  readonly MAX_ALLOWED_ITEMSTACKS: 100;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.HelpCommand. */
export interface HelpCommandMembers {
}
export type HelpCommand = HelpCommandMembers;
export interface HelpCommandStatics {
  new(): HelpCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM interface net.minecraft.server.commands.InCommandFunction. */
export interface InCommandFunctionMembers<T = unknown, R = unknown> {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  apply(arg0: T): R;
}
export type InCommandFunction<T = unknown, R = unknown> = InCommandFunctionMembers<T, R>;
export interface InCommandFunctionStatics {
}

/** JVM class net.minecraft.server.commands.ItemCommands. */
export interface ItemCommandsMembers {
}
export type ItemCommands = ItemCommandsMembers;
export interface ItemCommandsStatics {
  new(): ItemCommands;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.JfrCommand. */
export interface JfrCommandMembers {
}
export type JfrCommand = JfrCommandMembers;
export interface JfrCommandStatics {
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.KickCommand. */
export interface KickCommandMembers {
}
export type KickCommand = KickCommandMembers;
export interface KickCommandStatics {
  new(): KickCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.KillCommand. */
export interface KillCommandMembers {
}
export type KillCommand = KillCommandMembers;
export interface KillCommandStatics {
  new(): KillCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.ListPlayersCommand. */
export interface ListPlayersCommandMembers {
}
export type ListPlayersCommand = ListPlayersCommandMembers;
export interface ListPlayersCommandStatics {
  new(): ListPlayersCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.LocateCommand. */
export interface LocateCommandMembers {
}
export type LocateCommand = LocateCommandMembers;
export interface LocateCommandStatics {
  new(): LocateCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
  showLocateResult(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_commands_arguments.ResourceOrTagArgument_Result<object>, arg2: j_net_minecraft_core.BlockPos, arg3: JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<object>]>, arg4: string, arg5: boolean, arg6: JavaOpaque<"java.time.Duration">): number;
  showLocateResult(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_commands_arguments.ResourceOrTagKeyArgument_Result<object>, arg2: j_net_minecraft_core.BlockPos, arg3: JavaOpaque<"com.mojang.datafixers.util.Pair", [j_net_minecraft_core.BlockPos, j_net_minecraft_core.Holder<object>]>, arg4: string, arg5: boolean, arg6: JavaOpaque<"java.time.Duration">): number;
}

/** JVM interface net.minecraft.server.commands.LookAt. */
export interface LookAtMembers {
  perform(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_world_entity.Entity): void;
}
export type LookAt = LookAtMembers;
export interface LookAtStatics {
}

/** JVM record net.minecraft.server.commands.LookAt$LookAtEntity. */
export interface LookAt_LookAtEntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LookAt];
  anchor(): j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor;
  entity(): j_net_minecraft_world_entity.Entity;
  equals(arg0: object): boolean;
  hashCode(): number;
  perform(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_world_entity.Entity): void;
  toString(): string;
}
export type LookAt_LookAtEntity = LookAt_LookAtEntityMembers & JavaOpaque<"java.lang.Record"> & LookAt;
export interface LookAt_LookAtEntityStatics {
  new(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor): LookAt_LookAtEntity;
}

/** JVM record net.minecraft.server.commands.LookAt$LookAtPosition. */
export interface LookAt_LookAtPositionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, LookAt];
  equals(arg0: object): boolean;
  hashCode(): number;
  perform(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_world_entity.Entity): void;
  position(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
}
export type LookAt_LookAtPosition = LookAt_LookAtPositionMembers & JavaOpaque<"java.lang.Record"> & LookAt;
export interface LookAt_LookAtPositionStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3): LookAt_LookAtPosition;
}

/** JVM class net.minecraft.server.commands.LootCommand. */
export interface LootCommandMembers {
}
export type LootCommand = LootCommandMembers;
export interface LootCommandStatics {
  new(): LootCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.MsgCommand. */
export interface MsgCommandMembers {
}
export type MsgCommand = MsgCommandMembers;
export interface MsgCommandStatics {
  new(): MsgCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.OpCommand. */
export interface OpCommandMembers {
}
export type OpCommand = OpCommandMembers;
export interface OpCommandStatics {
  new(): OpCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.PardonCommand. */
export interface PardonCommandMembers {
}
export type PardonCommand = PardonCommandMembers;
export interface PardonCommandStatics {
  new(): PardonCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.PardonIpCommand. */
export interface PardonIpCommandMembers {
}
export type PardonIpCommand = PardonIpCommandMembers;
export interface PardonIpCommandStatics {
  new(): PardonIpCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.ParticleCommand. */
export interface ParticleCommandMembers {
}
export type ParticleCommand = ParticleCommandMembers;
export interface ParticleCommandStatics {
  new(): ParticleCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.PerfCommand. */
export interface PerfCommandMembers {
}
export type PerfCommand = PerfCommandMembers;
export interface PerfCommandStatics {
  new(): PerfCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM interface net.minecraft.server.commands.PermissionCheck. */
export interface PermissionCheckMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaPredicate<T>];
  requiredLevel(): number;
}
export type PermissionCheck<T = unknown> = PermissionCheckMembers<T> & JavaPredicate<T>;
export interface PermissionCheckStatics {
}

/** JVM class net.minecraft.server.commands.PlaceCommand. */
export interface PlaceCommandMembers {
}
export type PlaceCommand = PlaceCommandMembers;
export interface PlaceCommandStatics {
  new(): PlaceCommand;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  placeFeature(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg2: j_net_minecraft_core.BlockPos): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  placeJigsaw(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg2: j_net_minecraft_resources.ResourceLocation, arg3: number, arg4: j_net_minecraft_core.BlockPos): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  placeStructure(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_structure.Structure>, arg2: j_net_minecraft_core.BlockPos): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  placeTemplate(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Rotation, arg4: j_net_minecraft_world_level_block.Mirror, arg5: number, arg6: number, arg7: boolean): number;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.PlaySoundCommand. */
export interface PlaySoundCommandMembers {
}
export type PlaySoundCommand = PlaySoundCommandMembers;
export interface PlaySoundCommandStatics {
  new(): PlaySoundCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.PublishCommand. */
export interface PublishCommandMembers {
}
export type PublishCommand = PublishCommandMembers;
export interface PublishCommandStatics {
  new(): PublishCommand;
  getSuccessMessage(arg0: number): j_net_minecraft_network_chat.MutableComponent;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.RaidCommand. */
export interface RaidCommandMembers {
}
export type RaidCommand = RaidCommandMembers;
export interface RaidCommandStatics {
  new(): RaidCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.RandomCommand. */
export interface RandomCommandMembers {
}
export type RandomCommand = RandomCommandMembers;
export interface RandomCommandStatics {
  new(): RandomCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.RecipeCommand. */
export interface RecipeCommandMembers {
}
export type RecipeCommand = RecipeCommandMembers;
export interface RecipeCommandStatics {
  new(): RecipeCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.ReloadCommand. */
export interface ReloadCommandMembers {
}
export type ReloadCommand = ReloadCommandMembers;
export interface ReloadCommandStatics {
  new(): ReloadCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
  reload(arg0: j_net_minecraft_server.MinecraftServer): void;
  reloadPacks(arg0: JavaCollection<string>, arg1: j_net_minecraft_commands.CommandSourceStack): void;
}

/** JVM class net.minecraft.server.commands.ReturnCommand. */
export interface ReturnCommandMembers {
}
export type ReturnCommand = ReturnCommandMembers;
export interface ReturnCommandStatics {
  new(): ReturnCommand;
  register<T /* extends j_net_minecraft_commands.ExecutionCommandSource<T> */>(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [T]>): void;
}

/** JVM class net.minecraft.server.commands.RideCommand. */
export interface RideCommandMembers {
}
export type RideCommand = RideCommandMembers;
export interface RideCommandStatics {
  new(): RideCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.RotateCommand. */
export interface RotateCommandMembers {
}
export type RotateCommand = RotateCommandMembers;
export interface RotateCommandStatics {
  new(): RotateCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SaveAllCommand. */
export interface SaveAllCommandMembers {
}
export type SaveAllCommand = SaveAllCommandMembers;
export interface SaveAllCommandStatics {
  new(): SaveAllCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SaveOffCommand. */
export interface SaveOffCommandMembers {
}
export type SaveOffCommand = SaveOffCommandMembers;
export interface SaveOffCommandStatics {
  new(): SaveOffCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SaveOnCommand. */
export interface SaveOnCommandMembers {
}
export type SaveOnCommand = SaveOnCommandMembers;
export interface SaveOnCommandStatics {
  new(): SaveOnCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SayCommand. */
export interface SayCommandMembers {
}
export type SayCommand = SayCommandMembers;
export interface SayCommandStatics {
  new(): SayCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.ScheduleCommand. */
export interface ScheduleCommandMembers {
}
export type ScheduleCommand = ScheduleCommandMembers;
export interface ScheduleCommandStatics {
  new(): ScheduleCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.ScoreboardCommand. */
export interface ScoreboardCommandMembers {
}
export type ScoreboardCommand = ScoreboardCommandMembers;
export interface ScoreboardCommandStatics {
  new(): ScoreboardCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM interface net.minecraft.server.commands.ScoreboardCommand$NumberFormatCommandExecutor. */
export interface ScoreboardCommand_NumberFormatCommandExecutorMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  run(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_network_chat_numbers.NumberFormat | null): number;
}
export type ScoreboardCommand_NumberFormatCommandExecutor = ScoreboardCommand_NumberFormatCommandExecutorMembers;
export interface ScoreboardCommand_NumberFormatCommandExecutorStatics {
}

/** JVM class net.minecraft.server.commands.SeedCommand. */
export interface SeedCommandMembers {
}
export type SeedCommand = SeedCommandMembers;
export interface SeedCommandStatics {
  new(): SeedCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: boolean): void;
}

/** JVM class net.minecraft.server.commands.ServerPackCommand. */
export interface ServerPackCommandMembers {
}
export type ServerPackCommand = ServerPackCommandMembers;
export interface ServerPackCommandStatics {
  new(): ServerPackCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SetBlockCommand. */
export interface SetBlockCommandMembers {
}
export type SetBlockCommand = SetBlockCommandMembers;
export interface SetBlockCommandStatics {
  new(): SetBlockCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** Live JVM enum net.minecraft.server.commands.SetBlockCommand$Mode; constants are host handles, not strings. */
export type SetBlockCommand_Mode = JavaEnum<"net.minecraft.server.commands.SetBlockCommand$Mode", "DESTROY" | "REPLACE"> & SetBlockCommand_ModeMembers;
export interface SetBlockCommand_ModeMembers {
}
export interface SetBlockCommand_ModeStatics {
  readonly DESTROY: SetBlockCommand_Mode;
  readonly REPLACE: SetBlockCommand_Mode;
  valueOf(arg0: string): SetBlockCommand_Mode;
  values(): Array<SetBlockCommand_Mode>;
}

/** JVM class net.minecraft.server.commands.SetPlayerIdleTimeoutCommand. */
export interface SetPlayerIdleTimeoutCommandMembers {
}
export type SetPlayerIdleTimeoutCommand = SetPlayerIdleTimeoutCommandMembers;
export interface SetPlayerIdleTimeoutCommandStatics {
  new(): SetPlayerIdleTimeoutCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SetSpawnCommand. */
export interface SetSpawnCommandMembers {
}
export type SetSpawnCommand = SetSpawnCommandMembers;
export interface SetSpawnCommandStatics {
  new(): SetSpawnCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SetWorldSpawnCommand. */
export interface SetWorldSpawnCommandMembers {
}
export type SetWorldSpawnCommand = SetWorldSpawnCommandMembers;
export interface SetWorldSpawnCommandStatics {
  new(): SetWorldSpawnCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SpawnArmorTrimsCommand. */
export interface SpawnArmorTrimsCommandMembers {
}
export type SpawnArmorTrimsCommand = SpawnArmorTrimsCommandMembers;
export interface SpawnArmorTrimsCommandStatics {
  new(): SpawnArmorTrimsCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SpectateCommand. */
export interface SpectateCommandMembers {
}
export type SpectateCommand = SpectateCommandMembers;
export interface SpectateCommandStatics {
  new(): SpectateCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SpreadPlayersCommand. */
export interface SpreadPlayersCommandMembers {
}
export type SpreadPlayersCommand = SpreadPlayersCommandMembers;
export interface SpreadPlayersCommandStatics {
  new(): SpreadPlayersCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.StopCommand. */
export interface StopCommandMembers {
}
export type StopCommand = StopCommandMembers;
export interface StopCommandStatics {
  new(): StopCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.StopSoundCommand. */
export interface StopSoundCommandMembers {
}
export type StopSoundCommand = StopSoundCommandMembers;
export interface StopSoundCommandStatics {
  new(): StopSoundCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.SummonCommand. */
export interface SummonCommandMembers {
}
export type SummonCommand = SummonCommandMembers;
export interface SummonCommandStatics {
  new(): SummonCommand;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  createEntity(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_entity.EntityType<object>>, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_nbt.CompoundTag, arg4: boolean): j_net_minecraft_world_entity.Entity;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.TagCommand. */
export interface TagCommandMembers {
}
export type TagCommand = TagCommandMembers;
export interface TagCommandStatics {
  new(): TagCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.TeamCommand. */
export interface TeamCommandMembers {
}
export type TeamCommand = TeamCommandMembers;
export interface TeamCommandStatics {
  new(): TeamCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.TeamMsgCommand. */
export interface TeamMsgCommandMembers {
}
export type TeamMsgCommand = TeamMsgCommandMembers;
export interface TeamMsgCommandStatics {
  new(): TeamMsgCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.TeleportCommand. */
export interface TeleportCommandMembers {
}
export type TeleportCommand = TeleportCommandMembers;
export interface TeleportCommandStatics {
  new(): TeleportCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.TellRawCommand. */
export interface TellRawCommandMembers {
}
export type TellRawCommand = TellRawCommandMembers;
export interface TellRawCommandStatics {
  new(): TellRawCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.TickCommand. */
export interface TickCommandMembers {
}
export type TickCommand = TickCommandMembers;
export interface TickCommandStatics {
  new(): TickCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.TimeCommand. */
export interface TimeCommandMembers {
}
export type TimeCommand = TimeCommandMembers;
export interface TimeCommandStatics {
  new(): TimeCommand;
  addTime(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: number): number;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
  setTime(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: number): number;
}

/** JVM class net.minecraft.server.commands.TitleCommand. */
export interface TitleCommandMembers {
}
export type TitleCommand = TitleCommandMembers;
export interface TitleCommandStatics {
  new(): TitleCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.TransferCommand. */
export interface TransferCommandMembers {
}
export type TransferCommand = TransferCommandMembers;
export interface TransferCommandStatics {
  new(): TransferCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.TriggerCommand. */
export interface TriggerCommandMembers {
}
export type TriggerCommand = TriggerCommandMembers;
export interface TriggerCommandStatics {
  new(): TriggerCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
  suggestObjectives(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
}

/** JVM class net.minecraft.server.commands.VersionCommand. */
export interface VersionCommandMembers {
}
export type VersionCommand = VersionCommandMembers;
export interface VersionCommandStatics {
  new(): VersionCommand;
  dumpVersion(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): void;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: boolean): void;
}

/** JVM class net.minecraft.server.commands.WardenSpawnTrackerCommand. */
export interface WardenSpawnTrackerCommandMembers {
}
export type WardenSpawnTrackerCommand = WardenSpawnTrackerCommandMembers;
export interface WardenSpawnTrackerCommandStatics {
  new(): WardenSpawnTrackerCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.WaypointCommand. */
export interface WaypointCommandMembers {
}
export type WaypointCommand = WaypointCommandMembers;
export interface WaypointCommandStatics {
  new(): WaypointCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
}

/** JVM class net.minecraft.server.commands.WeatherCommand. */
export interface WeatherCommandMembers {
}
export type WeatherCommand = WeatherCommandMembers;
export interface WeatherCommandStatics {
  new(): WeatherCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.WhitelistCommand. */
export interface WhitelistCommandMembers {
}
export type WhitelistCommand = WhitelistCommandMembers;
export interface WhitelistCommandStatics {
  new(): WhitelistCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}

/** JVM class net.minecraft.server.commands.WorldBorderCommand. */
export interface WorldBorderCommandMembers {
}
export type WorldBorderCommand = WorldBorderCommandMembers;
export interface WorldBorderCommandStatics {
  new(): WorldBorderCommand;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>): void;
}
