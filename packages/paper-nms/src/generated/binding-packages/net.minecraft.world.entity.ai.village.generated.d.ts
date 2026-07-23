// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM interface net.minecraft.world.entity.ai.village.ReputationEventType. */
export interface ReputationEventTypeMembers {
}
export type ReputationEventType = ReputationEventTypeMembers;
export interface ReputationEventTypeStatics {
  readonly GOLEM_KILLED: ReputationEventType;
  readonly TRADE: ReputationEventType;
  readonly VILLAGER_HURT: ReputationEventType;
  readonly VILLAGER_KILLED: ReputationEventType;
  readonly ZOMBIE_VILLAGER_CURED: ReputationEventType;
  register(arg0: string): ReputationEventType;
}

/** JVM class net.minecraft.world.entity.ai.village.VillageSiege. */
export interface VillageSiegeMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.CustomSpawner];
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean, arg2: boolean): void;
}
export type VillageSiege = VillageSiegeMembers & j_net_minecraft_world_level.CustomSpawner;
export interface VillageSiegeStatics {
  new(): VillageSiege;
}
