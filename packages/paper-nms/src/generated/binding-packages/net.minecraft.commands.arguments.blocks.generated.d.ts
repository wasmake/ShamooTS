// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_pattern from './net.minecraft.world.level.block.state.pattern.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';

/** JVM class net.minecraft.commands.arguments.blocks.BlockInput. */
export interface BlockInputMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_world_level_block_state_pattern.BlockInWorld>];
  getDefinedProperties(): JavaSet<j_net_minecraft_world_level_block_state_properties.Property<object>>;
  getState(): j_net_minecraft_world_level_block_state.BlockState;
  place(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: number): boolean;
  readonly tag: j_net_minecraft_nbt.CompoundTag | null;
  test(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  test(arg0: j_net_minecraft_world_level_block_state_pattern.BlockInWorld): boolean;
}
export type BlockInput = BlockInputMembers & JavaPredicate<j_net_minecraft_world_level_block_state_pattern.BlockInWorld>;
export interface BlockInputStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: JavaSet<j_net_minecraft_world_level_block_state_properties.Property<object>>, arg2: j_net_minecraft_nbt.CompoundTag | null): BlockInput;
}

/** JVM class net.minecraft.commands.arguments.blocks.BlockPredicateArgument. */
export interface BlockPredicateArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [BlockPredicateArgument_Result]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): BlockPredicateArgument_Result;
}
export type BlockPredicateArgument = BlockPredicateArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [BlockPredicateArgument_Result]>;
export interface BlockPredicateArgumentStatics {
  new(arg0: j_net_minecraft_commands.CommandBuildContext): BlockPredicateArgument;
  blockPredicate(arg0: j_net_minecraft_commands.CommandBuildContext): BlockPredicateArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getBlockPredicate(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaPredicate<j_net_minecraft_world_level_block_state_pattern.BlockInWorld>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_block.Block>, arg1: JavaOpaque<"com.mojang.brigadier.StringReader">): BlockPredicateArgument_Result;
}

/** JVM interface net.minecraft.commands.arguments.blocks.BlockPredicateArgument$Result. */
export interface BlockPredicateArgument_ResultMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_world_level_block_state_pattern.BlockInWorld>];
  requiresNbt(): boolean;
}
export type BlockPredicateArgument_Result = BlockPredicateArgument_ResultMembers & JavaPredicate<j_net_minecraft_world_level_block_state_pattern.BlockInWorld>;
export interface BlockPredicateArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.blocks.BlockStateArgument. */
export interface BlockStateArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [BlockInput]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): BlockInput;
}
export type BlockStateArgument = BlockStateArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [BlockInput]>;
export interface BlockStateArgumentStatics {
  new(arg0: j_net_minecraft_commands.CommandBuildContext): BlockStateArgument;
  block(arg0: j_net_minecraft_commands.CommandBuildContext): BlockStateArgument;
  getBlock(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): BlockInput;
}

/** JVM class net.minecraft.commands.arguments.blocks.BlockStateParser. */
export interface BlockStateParserMembers {
}
export type BlockStateParser = BlockStateParserMembers;
export interface BlockStateParserStatics {
  readonly ERROR_DUPLICATE_PROPERTY: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  readonly ERROR_EXPECTED_END_OF_PROPERTIES: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_EXPECTED_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  readonly ERROR_INVALID_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType">;
  readonly ERROR_NO_TAGS_ALLOWED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_UNKNOWN_BLOCK: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_UNKNOWN_PROPERTY: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  readonly ERROR_UNKNOWN_TAG: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  fillSuggestions(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_block.Block>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">, arg2: boolean, arg3: boolean): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseForBlock(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_block.Block>, arg1: JavaOpaque<"com.mojang.brigadier.StringReader">, arg2: boolean): BlockStateParser_BlockResult;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseForBlock(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_block.Block>, arg1: string, arg2: boolean): BlockStateParser_BlockResult;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseForTesting(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_block.Block>, arg1: JavaOpaque<"com.mojang.brigadier.StringReader">, arg2: boolean): JavaOpaque<"com.mojang.datafixers.util.Either", [BlockStateParser_BlockResult, BlockStateParser_TagResult]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseForTesting(arg0: j_net_minecraft_core.HolderLookup<j_net_minecraft_world_level_block.Block>, arg1: string, arg2: boolean): JavaOpaque<"com.mojang.datafixers.util.Either", [BlockStateParser_BlockResult, BlockStateParser_TagResult]>;
  serialize(arg0: j_net_minecraft_world_level_block_state.BlockState): string;
}

/** JVM record net.minecraft.commands.arguments.blocks.BlockStateParser$BlockResult. */
export interface BlockStateParser_BlockResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blockState(): j_net_minecraft_world_level_block_state.BlockState;
  equals(arg0: object): boolean;
  hashCode(): number;
  nbt(): j_net_minecraft_nbt.CompoundTag | null;
  properties(): JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>;
  toString(): string;
}
export type BlockStateParser_BlockResult = BlockStateParser_BlockResultMembers & JavaOpaque<"java.lang.Record">;
export interface BlockStateParser_BlockResultStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>, arg2: j_net_minecraft_nbt.CompoundTag | null): BlockStateParser_BlockResult;
}

/** JVM record net.minecraft.commands.arguments.blocks.BlockStateParser$TagResult. */
export interface BlockStateParser_TagResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  nbt(): j_net_minecraft_nbt.CompoundTag | null;
  tag(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
  toString(): string;
  vagueProperties(): JavaMap<string, string>;
}
export type BlockStateParser_TagResult = BlockStateParser_TagResultMembers & JavaOpaque<"java.lang.Record">;
export interface BlockStateParser_TagResultStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg1: JavaMap<string, string>, arg2: j_net_minecraft_nbt.CompoundTag | null): BlockStateParser_TagResult;
}
