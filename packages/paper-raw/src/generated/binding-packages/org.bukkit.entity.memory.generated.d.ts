// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM class org.bukkit.entity.memory.MemoryKey. */
export interface MemoryKeyMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_org_bukkit.Keyed];
  getKey(): j_org_bukkit.NamespacedKey;
  getMemoryClass(): JavaClass<T>;
}
export type MemoryKey<T = unknown> = MemoryKeyMembers<T> & j_org_bukkit.Keyed;
export interface MemoryKeyStatics {
  readonly ADMIRING_DISABLED: MemoryKey<boolean>;
  readonly ADMIRING_ITEM: MemoryKey<boolean>;
  readonly ANGRY_AT: MemoryKey<JavaOpaque<"java.util.UUID">>;
  readonly ATE_RECENTLY: MemoryKey<boolean>;
  readonly ATTACK_COOLING_DOWN: MemoryKey<boolean>;
  readonly CANT_REACH_WALK_TARGET_SINCE: MemoryKey<bigint>;
  readonly DANCING: MemoryKey<boolean>;
  readonly DANGER_DETECTED_RECENTLY: MemoryKey<boolean>;
  readonly DISABLE_WALK_TO_ADMIRE_ITEM: MemoryKey<boolean>;
  readonly GAZE_COOLDOWN_TICKS: MemoryKey<number>;
  readonly GOLEM_DETECTED_RECENTLY: MemoryKey<boolean>;
  readonly HAS_HUNTING_COOLDOWN: MemoryKey<boolean>;
  readonly HEARD_BELL_TIME: MemoryKey<bigint>;
  readonly HIDING_PLACE: MemoryKey<j_org_bukkit.Location>;
  readonly HOME: MemoryKey<j_org_bukkit.Location>;
  readonly HUNTED_RECENTLY: MemoryKey<boolean>;
  readonly IS_PANICKING: MemoryKey<boolean>;
  readonly IS_TEMPTED: MemoryKey<boolean>;
  readonly ITEM_PICKUP_COOLDOWN_TICKS: MemoryKey<number>;
  readonly JOB_SITE: MemoryKey<j_org_bukkit.Location>;
  readonly LAST_SLEPT: MemoryKey<bigint>;
  readonly LAST_WOKEN: MemoryKey<bigint>;
  readonly LAST_WORKED_AT_POI: MemoryKey<bigint>;
  readonly LIKED_NOTEBLOCK_COOLDOWN_TICKS: MemoryKey<number>;
  readonly LIKED_NOTEBLOCK_POSITION: MemoryKey<j_org_bukkit.Location>;
  readonly LIKED_PLAYER: MemoryKey<JavaOpaque<"java.util.UUID">>;
  readonly LONG_JUMP_COOLING_DOWN: MemoryKey<number>;
  readonly LONG_JUMP_MID_JUMP: MemoryKey<boolean>;
  readonly MEETING_POINT: MemoryKey<j_org_bukkit.Location>;
  readonly PACIFIED: MemoryKey<boolean>;
  readonly PLAY_DEAD_TICKS: MemoryKey<number>;
  readonly POTENTIAL_JOB_SITE: MemoryKey<j_org_bukkit.Location>;
  readonly RAM_COOLDOWN_TICKS: MemoryKey<number>;
  readonly SNIFFER_DIGGING: MemoryKey<boolean>;
  readonly SNIFFER_EXPLORED_POSITIONS: MemoryKey<j_org_bukkit.Location>;
  readonly SNIFFER_HAPPY: MemoryKey<boolean>;
  readonly TEMPTATION_COOLDOWN_TICKS: MemoryKey<number>;
  readonly TIME_TRYING_TO_REACH_ADMIRE_ITEM: MemoryKey<number>;
  readonly UNIVERSAL_ANGER: MemoryKey<boolean>;
  readonly VISIBLE_ADULT_HOGLIN_COUNT: MemoryKey<number>;
  readonly VISIBLE_ADULT_PIGLIN_COUNT: MemoryKey<number>;
  getByKey(arg0: j_org_bukkit.NamespacedKey): MemoryKey<object> | null;
  values(): JavaSet<MemoryKey<object>>;
}
