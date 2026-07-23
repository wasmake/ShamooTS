// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_command_brigadier_argument_resolvers from './io.papermc.paper.command.brigadier.argument.resolvers.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.selector.EntitySelectorArgumentResolver. */
export interface EntitySelectorArgumentResolverMembers {
  readonly __javaSupertypes?: readonly [SelectorArgumentResolver<JavaList<j_org_bukkit_entity.Entity>>];
}
export type EntitySelectorArgumentResolver = EntitySelectorArgumentResolverMembers & SelectorArgumentResolver<JavaList<j_org_bukkit_entity.Entity>>;
export interface EntitySelectorArgumentResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.selector.PlayerSelectorArgumentResolver. */
export interface PlayerSelectorArgumentResolverMembers {
  readonly __javaSupertypes?: readonly [SelectorArgumentResolver<JavaList<j_org_bukkit_entity.Player>>];
}
export type PlayerSelectorArgumentResolver = PlayerSelectorArgumentResolverMembers & SelectorArgumentResolver<JavaList<j_org_bukkit_entity.Player>>;
export interface PlayerSelectorArgumentResolverStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.resolvers.selector.SelectorArgumentResolver. */
export interface SelectorArgumentResolverMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_command_brigadier_argument_resolvers.ArgumentResolver<T>];
}
export type SelectorArgumentResolver<T = unknown> = SelectorArgumentResolverMembers<T> & j_io_papermc_paper_command_brigadier_argument_resolvers.ArgumentResolver<T>;
export interface SelectorArgumentResolverStatics {
}
