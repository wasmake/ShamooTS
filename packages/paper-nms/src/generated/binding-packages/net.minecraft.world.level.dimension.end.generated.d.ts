// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon from './net.minecraft.world.entity.boss.enderdragon.generated.js';
import type * as j_net_minecraft_world_level_block_state_pattern from './net.minecraft.world.level.block.state.pattern.generated.js';

/** Live JVM enum net.minecraft.world.level.dimension.end.DragonRespawnAnimation; constants are host handles, not strings. */
export type DragonRespawnAnimation = JavaEnum<"net.minecraft.world.level.dimension.end.DragonRespawnAnimation", "END" | "PREPARING_TO_SUMMON_PILLARS" | "START" | "SUMMONING_DRAGON" | "SUMMONING_PILLARS"> & DragonRespawnAnimationMembers;
export interface DragonRespawnAnimationMembers {
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: EndDragonFight, arg2: JavaList<j_net_minecraft_world_entity_boss_enderdragon.EndCrystal>, arg3: number, arg4: j_net_minecraft_core.BlockPos): void;
}
export interface DragonRespawnAnimationStatics {
  readonly END: DragonRespawnAnimation;
  readonly PREPARING_TO_SUMMON_PILLARS: DragonRespawnAnimation;
  readonly START: DragonRespawnAnimation;
  readonly SUMMONING_DRAGON: DragonRespawnAnimation;
  readonly SUMMONING_PILLARS: DragonRespawnAnimation;
  valueOf(arg0: string): DragonRespawnAnimation;
  values(): Array<DragonRespawnAnimation>;
}

/** JVM class net.minecraft.world.level.dimension.end.EndDragonFight. */
export interface EndDragonFightMembers {
  readonly dragonEvent: j_net_minecraft_server_level.ServerBossEvent;
  dragonUUID: JavaOpaque<"java.util.UUID"> | null;
  findExitPortal(): j_net_minecraft_world_level_block_state_pattern.BlockPattern_BlockPatternMatch | null;
  readonly gateways: JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [number]>;
  getCrystalsAlive(): number;
  getDragonUUID(): JavaOpaque<"java.util.UUID"> | null;
  getSpikeCrystals(): JavaList<j_net_minecraft_world_entity_boss_enderdragon.EndCrystal>;
  hasPreviouslyKilledDragon(): boolean;
  readonly level: j_net_minecraft_server_level.ServerLevel;
  onCrystalDestroyed(arg0: j_net_minecraft_world_entity_boss_enderdragon.EndCrystal, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  portalLocation: j_net_minecraft_core.BlockPos | null;
  previouslyKilled: boolean;
  removeAllGateways(): void;
  resetSpikeCrystals(): void;
  respawnCrystals: JavaList<j_net_minecraft_world_entity_boss_enderdragon.EndCrystal> | null;
  respawnDragon(arg0: JavaList<j_net_minecraft_world_entity_boss_enderdragon.EndCrystal>): boolean;
  respawnStage: DragonRespawnAnimation | null;
  saveData(): EndDragonFight_Data;
  setDragonKilled(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): void;
  setRespawnStage(arg0: DragonRespawnAnimation): void;
  skipArenaLoadedCheck(): void;
  spawnExitPortal(arg0: boolean): void;
  spawnNewGateway(arg0: j_net_minecraft_core.BlockPos): void;
  spawnNewGatewayIfPossible(): boolean;
  tick(): void;
  tryRespawn(): boolean;
  tryRespawn(arg0: j_net_minecraft_core.BlockPos | null): boolean;
  updateDragon(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon): void;
}
export type EndDragonFight = EndDragonFightMembers;
export interface EndDragonFightStatics {
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: bigint, arg2: EndDragonFight_Data): EndDragonFight;
  new(arg0: j_net_minecraft_server_level.ServerLevel, arg1: bigint, arg2: EndDragonFight_Data, arg3: j_net_minecraft_core.BlockPos): EndDragonFight;
  readonly ARENA_TICKET_LEVEL: 9;
  readonly DRAGON_SPAWN_Y: 128;
  readonly GATEWAY_COUNT: 20;
  readonly TIME_BETWEEN_PLAYER_SCANS: 20;
}

/** JVM record net.minecraft.world.level.dimension.end.EndDragonFight$Data. */
export interface EndDragonFight_DataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dragonKilled(): boolean;
  dragonUUID(): JavaOptional<JavaOpaque<"java.util.UUID">>;
  equals(arg0: object): boolean;
  exitPortalLocation(): JavaOptional<j_net_minecraft_core.BlockPos>;
  gateways(): JavaOptional<JavaList<number>>;
  hashCode(): number;
  isRespawning(): boolean;
  needsStateScanning(): boolean;
  previouslyKilled(): boolean;
  toString(): string;
}
export type EndDragonFight_Data = EndDragonFight_DataMembers & JavaOpaque<"java.lang.Record">;
export interface EndDragonFight_DataStatics {
  new(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: JavaOptional<JavaOpaque<"java.util.UUID">>, arg5: JavaOptional<j_net_minecraft_core.BlockPos>, arg6: JavaOptional<JavaList<number>>): EndDragonFight_Data;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EndDragonFight_Data]>;
  readonly DEFAULT: EndDragonFight_Data;
}
