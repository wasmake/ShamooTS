// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_io_papermc_paper_command_brigadier_argument_position from './io.papermc.paper.command.brigadier.argument.position.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.AngleResolver. */
export interface AngleResolverMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_io_papermc_paper_command_brigadier.CommandSourceStack): number;
}
export type AngleResolver = AngleResolverMembers;
export interface AngleResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.ArgumentResolver. */
export interface ArgumentResolverMembers<T = unknown> {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolve(arg0: j_io_papermc_paper_command_brigadier.CommandSourceStack): T;
}
export type ArgumentResolver<T = unknown> = ArgumentResolverMembers<T>;
export interface ArgumentResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.BlockPositionResolver. */
export interface BlockPositionResolverMembers {
  readonly __javaSupertypes?: readonly [ArgumentResolver<j_io_papermc_paper_math.BlockPosition>];
}
export type BlockPositionResolver = BlockPositionResolverMembers & ArgumentResolver<j_io_papermc_paper_math.BlockPosition>;
export interface BlockPositionResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.ColumnBlockPositionResolver. */
export interface ColumnBlockPositionResolverMembers {
  readonly __javaSupertypes?: readonly [ArgumentResolver<j_io_papermc_paper_command_brigadier_argument_position.ColumnBlockPosition>];
}
export type ColumnBlockPositionResolver = ColumnBlockPositionResolverMembers & ArgumentResolver<j_io_papermc_paper_command_brigadier_argument_position.ColumnBlockPosition>;
export interface ColumnBlockPositionResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.ColumnFinePositionResolver. */
export interface ColumnFinePositionResolverMembers {
  readonly __javaSupertypes?: readonly [ArgumentResolver<j_io_papermc_paper_command_brigadier_argument_position.ColumnFinePosition>];
}
export type ColumnFinePositionResolver = ColumnFinePositionResolverMembers & ArgumentResolver<j_io_papermc_paper_command_brigadier_argument_position.ColumnFinePosition>;
export interface ColumnFinePositionResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.FinePositionResolver. */
export interface FinePositionResolverMembers {
  readonly __javaSupertypes?: readonly [ArgumentResolver<j_io_papermc_paper_math.FinePosition>];
}
export type FinePositionResolver = FinePositionResolverMembers & ArgumentResolver<j_io_papermc_paper_math.FinePosition>;
export interface FinePositionResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.PlayerProfileListResolver. */
export interface PlayerProfileListResolverMembers {
  readonly __javaSupertypes?: readonly [ArgumentResolver<JavaCollection<j_com_destroystokyo_paper_profile.PlayerProfile>>];
}
export type PlayerProfileListResolver = PlayerProfileListResolverMembers & ArgumentResolver<JavaCollection<j_com_destroystokyo_paper_profile.PlayerProfile>>;
export interface PlayerProfileListResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.RotationResolver. */
export interface RotationResolverMembers {
  readonly __javaSupertypes?: readonly [ArgumentResolver<j_io_papermc_paper_math.Rotation>];
}
export type RotationResolver = RotationResolverMembers & ArgumentResolver<j_io_papermc_paper_math.Rotation>;
export interface RotationResolverStatics {
}
