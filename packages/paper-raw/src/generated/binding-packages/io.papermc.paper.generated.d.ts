// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_io_papermc_paper_world_damagesource from './io.papermc.paper.world.damagesource.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.InternalAPIBridge. */
export interface InternalAPIBridgeMembers {
  constructLegacyCustomBiome(): j_org_bukkit_block.Biome;
  createCombatEntry(arg0: j_org_bukkit_damage.DamageSource, arg1: number, arg2: j_io_papermc_paper_world_damagesource.FallLocationType | null, arg3: number): j_io_papermc_paper_world_damagesource.CombatEntry;
  createCombatEntry(arg0: j_org_bukkit_entity.LivingEntity, arg1: j_org_bukkit_damage.DamageSource, arg2: number): j_io_papermc_paper_world_damagesource.CombatEntry;
  getDamageEffect(arg0: string): j_org_bukkit_damage.DamageEffect;
  restricted(arg0: JavaPredicate<j_io_papermc_paper_command_brigadier.CommandSourceStack>): JavaPredicate<j_io_papermc_paper_command_brigadier.CommandSourceStack>;
}
export type InternalAPIBridge = InternalAPIBridgeMembers;
export interface InternalAPIBridgeStatics {
  get(): InternalAPIBridge;
}

/** JVM interface io.papermc.paper.ServerBuildInfo. */
export interface ServerBuildInfoMembers {
  asString(arg0: ServerBuildInfo_StringRepresentation): string;
  brandId(): JavaOpaque<"net.kyori.adventure.key.Key">;
  brandName(): string;
  buildNumber(): JavaOptionalNumber;
  buildTime(): JavaOpaque<"java.time.Instant">;
  gitBranch(): JavaOptional<string>;
  gitCommit(): JavaOptional<string>;
  isBrandCompatible(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): boolean;
  minecraftVersionId(): string;
  minecraftVersionName(): string;
}
export type ServerBuildInfo = ServerBuildInfoMembers;
export interface ServerBuildInfoStatics {
  readonly BRAND_PAPER_ID: JavaOpaque<"net.kyori.adventure.key.Key">;
  buildInfo(): ServerBuildInfo;
}

/** Live JVM enum io.papermc.paper.ServerBuildInfo$StringRepresentation; constants are host handles, not strings. */
export type ServerBuildInfo_StringRepresentation = JavaEnum<"io.papermc.paper.ServerBuildInfo$StringRepresentation", "VERSION_FULL" | "VERSION_SIMPLE"> & ServerBuildInfo_StringRepresentationMembers;
export interface ServerBuildInfo_StringRepresentationMembers {
}
export interface ServerBuildInfo_StringRepresentationStatics {
  readonly VERSION_FULL: ServerBuildInfo_StringRepresentation;
  readonly VERSION_SIMPLE: ServerBuildInfo_StringRepresentation;
  valueOf(arg0: string): ServerBuildInfo_StringRepresentation;
  values(): Array<ServerBuildInfo_StringRepresentation>;
}
