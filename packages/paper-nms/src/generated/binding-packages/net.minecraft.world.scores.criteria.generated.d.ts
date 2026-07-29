// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM class net.minecraft.world.scores.criteria.ObjectiveCriteria. */
export interface ObjectiveCriteriaMembers {
  getDefaultRenderType(): ObjectiveCriteria_RenderType;
  getName(): string;
  isReadOnly(): boolean;
}
export type ObjectiveCriteria = ObjectiveCriteriaMembers;
export interface ObjectiveCriteriaStatics {
  readonly AIR: ObjectiveCriteria;
  readonly ARMOR: ObjectiveCriteria;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ObjectiveCriteria]>;
  readonly CRITERIA_CACHE: JavaMap<string, ObjectiveCriteria>;
  readonly DEATH_COUNT: ObjectiveCriteria;
  readonly DUMMY: ObjectiveCriteria;
  readonly EXPERIENCE: ObjectiveCriteria;
  readonly FOOD: ObjectiveCriteria;
  readonly HEALTH: ObjectiveCriteria;
  readonly KILLED_BY_TEAM: Array<ObjectiveCriteria>;
  readonly KILL_COUNT_ALL: ObjectiveCriteria;
  readonly KILL_COUNT_PLAYERS: ObjectiveCriteria;
  readonly LEVEL: ObjectiveCriteria;
  readonly TEAM_KILL: Array<ObjectiveCriteria>;
  readonly TRIGGER: ObjectiveCriteria;
  byName(arg0: string): JavaOptional<ObjectiveCriteria>;
  getCustomCriteriaNames(): JavaSet<string>;
}

/** Live JVM enum net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType; constants are host handles, not strings. */
export type ObjectiveCriteria_RenderType = JavaEnum<"net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType", "HEARTS" | "INTEGER"> & ObjectiveCriteria_RenderTypeMembers;
export interface ObjectiveCriteria_RenderTypeMembers {
  getId(): string;
  getSerializedName(): string;
}
export interface ObjectiveCriteria_RenderTypeStatics {
  readonly HEARTS: ObjectiveCriteria_RenderType;
  readonly INTEGER: ObjectiveCriteria_RenderType;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<ObjectiveCriteria_RenderType>;
  byId(arg0: string): ObjectiveCriteria_RenderType;
  valueOf(arg0: string): ObjectiveCriteria_RenderType;
  values(): Array<ObjectiveCriteria_RenderType>;
}
