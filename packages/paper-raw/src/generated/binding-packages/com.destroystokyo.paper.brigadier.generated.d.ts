// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface com.destroystokyo.paper.brigadier.BukkitBrigadierCommand. */
export interface BukkitBrigadierCommandMembers<S /* extends BukkitBrigadierCommandSource */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.Command", [S]>, JavaPredicate<S>, JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [S]>];
}
export type BukkitBrigadierCommand<S /* extends BukkitBrigadierCommandSource */ = unknown> = BukkitBrigadierCommandMembers<S> & JavaOpaque<"com.mojang.brigadier.Command", [S]> & JavaPredicate<S> & JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [S]>;
export interface BukkitBrigadierCommandStatics {
}

/** JVM interface com.destroystokyo.paper.brigadier.BukkitBrigadierCommandSource. */
export interface BukkitBrigadierCommandSourceMembers {
  getBukkitEntity(): j_org_bukkit_entity.Entity | null;
  getBukkitLocation(): j_org_bukkit.Location | null;
  getBukkitSender(): j_org_bukkit_command.CommandSender;
  getBukkitWorld(): j_org_bukkit.World | null;
}
export type BukkitBrigadierCommandSource = BukkitBrigadierCommandSourceMembers;
export interface BukkitBrigadierCommandSourceStatics {
}
