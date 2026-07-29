// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.commands.arguments.coordinates.BlockPosArgument. */
export interface BlockPosArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): Coordinates;
}
export type BlockPosArgument = BlockPosArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>;
export interface BlockPosArgumentStatics {
  new(): BlockPosArgument;
  readonly ERROR_NOT_LOADED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_OUT_OF_BOUNDS: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_OUT_OF_WORLD: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  blockPos(): BlockPosArgument;
  getBlockPos(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.BlockPos;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getLoadedBlockPos(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.BlockPos;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getLoadedBlockPos(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_server_level.ServerLevel, arg2: string): j_net_minecraft_core.BlockPos;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getSpawnablePos(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.BlockPos;
}

/** JVM class net.minecraft.commands.arguments.coordinates.ColumnPosArgument. */
export interface ColumnPosArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): Coordinates;
}
export type ColumnPosArgument = ColumnPosArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>;
export interface ColumnPosArgumentStatics {
  new(): ColumnPosArgument;
  readonly ERROR_NOT_COMPLETE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  columnPos(): ColumnPosArgument;
  getColumnPos(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_server_level.ColumnPos;
}

/** JVM interface net.minecraft.commands.arguments.coordinates.Coordinates. */
export interface CoordinatesMembers {
  getBlockPos(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_core.BlockPos;
  getPosition(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec3;
  getRotation(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec2;
  isXRelative(): boolean;
  isYRelative(): boolean;
  isZRelative(): boolean;
}
export type Coordinates = CoordinatesMembers;
export interface CoordinatesStatics {
}

/** JVM class net.minecraft.commands.arguments.coordinates.LocalCoordinates. */
export interface LocalCoordinatesMembers {
  readonly __javaSupertypes?: readonly [Coordinates];
  equals(arg0: object): boolean;
  getPosition(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec3;
  getRotation(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec2;
  hashCode(): number;
  isXRelative(): boolean;
  isYRelative(): boolean;
  isZRelative(): boolean;
}
export type LocalCoordinates = LocalCoordinatesMembers & Coordinates;
export interface LocalCoordinatesStatics {
  new(arg0: number, arg1: number, arg2: number): LocalCoordinates;
  readonly PREFIX_LOCAL_COORDINATE: 94;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): LocalCoordinates;
}

/** JVM class net.minecraft.commands.arguments.coordinates.RotationArgument. */
export interface RotationArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): Coordinates;
}
export type RotationArgument = RotationArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>;
export interface RotationArgumentStatics {
  new(): RotationArgument;
  readonly ERROR_NOT_COMPLETE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  getRotation(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): Coordinates;
  rotation(): RotationArgument;
}

/** JVM class net.minecraft.commands.arguments.coordinates.SwizzleArgument. */
export interface SwizzleArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaOpaque<"java.util.EnumSet", [j_net_minecraft_core.Direction_Axis]>]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): JavaOpaque<"java.util.EnumSet", [j_net_minecraft_core.Direction_Axis]>;
}
export type SwizzleArgument = SwizzleArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaOpaque<"java.util.EnumSet", [j_net_minecraft_core.Direction_Axis]>]>;
export interface SwizzleArgumentStatics {
  new(): SwizzleArgument;
  getSwizzle(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaOpaque<"java.util.EnumSet", [j_net_minecraft_core.Direction_Axis]>;
  swizzle(): SwizzleArgument;
}

/** JVM class net.minecraft.commands.arguments.coordinates.Vec2Argument. */
export interface Vec2ArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): Coordinates;
}
export type Vec2Argument = Vec2ArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>;
export interface Vec2ArgumentStatics {
  new(arg0: boolean): Vec2Argument;
  readonly ERROR_NOT_COMPLETE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  getVec2(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_phys.Vec2;
  vec2(): Vec2Argument;
  vec2(arg0: boolean): Vec2Argument;
}

/** JVM class net.minecraft.commands.arguments.coordinates.Vec3Argument. */
export interface Vec3ArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): Coordinates;
}
export type Vec3Argument = Vec3ArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [Coordinates]>;
export interface Vec3ArgumentStatics {
  new(arg0: boolean): Vec3Argument;
  readonly ERROR_MIXED_TYPE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_NOT_COMPLETE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  getCoordinates(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): Coordinates;
  getVec3(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_phys.Vec3;
  vec3(): Vec3Argument;
  vec3(arg0: boolean): Vec3Argument;
}

/** JVM class net.minecraft.commands.arguments.coordinates.WorldCoordinate. */
export interface WorldCoordinateMembers {
  equals(arg0: object): boolean;
  get(arg0: number): number;
  hashCode(): number;
  isRelative(): boolean;
}
export type WorldCoordinate = WorldCoordinateMembers;
export interface WorldCoordinateStatics {
  new(arg0: boolean, arg1: number): WorldCoordinate;
  readonly ERROR_EXPECTED_DOUBLE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_EXPECTED_INT: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  isRelative(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): boolean;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseDouble(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean): WorldCoordinate;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseInt(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): WorldCoordinate;
}

/** JVM class net.minecraft.commands.arguments.coordinates.WorldCoordinates. */
export interface WorldCoordinatesMembers {
  readonly __javaSupertypes?: readonly [Coordinates];
  equals(arg0: object): boolean;
  getPosition(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec3;
  getRotation(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec2;
  hashCode(): number;
  isXRelative(): boolean;
  isYRelative(): boolean;
  isZRelative(): boolean;
}
export type WorldCoordinates = WorldCoordinatesMembers & Coordinates;
export interface WorldCoordinatesStatics {
  new(arg0: WorldCoordinate, arg1: WorldCoordinate, arg2: WorldCoordinate): WorldCoordinates;
  absolute(arg0: number, arg1: number, arg2: number): WorldCoordinates;
  absolute(arg0: j_net_minecraft_world_phys.Vec2): WorldCoordinates;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseDouble(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean): WorldCoordinates;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseInt(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): WorldCoordinates;
}
