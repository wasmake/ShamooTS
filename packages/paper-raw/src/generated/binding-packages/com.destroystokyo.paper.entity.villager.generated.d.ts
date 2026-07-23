// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class com.destroystokyo.paper.entity.villager.Reputation. */
export interface ReputationMembers {
  getReputation(arg0: ReputationType): number;
  hasReputationSet(arg0: ReputationType): boolean;
  setReputation(arg0: ReputationType, arg1: number): void;
}
export type Reputation = ReputationMembers;
export interface ReputationStatics {
  new(): Reputation;
  new(arg0: JavaMap<ReputationType, number>): Reputation;
}

/** Live JVM enum com.destroystokyo.paper.entity.villager.ReputationType; constants are host handles, not strings. */
export type ReputationType = JavaEnum<"com.destroystokyo.paper.entity.villager.ReputationType", "MAJOR_NEGATIVE" | "MAJOR_POSITIVE" | "MINOR_NEGATIVE" | "MINOR_POSITIVE" | "TRADING"> & ReputationTypeMembers;
export interface ReputationTypeMembers {
}
export interface ReputationTypeStatics {
  readonly MAJOR_NEGATIVE: ReputationType;
  readonly MAJOR_POSITIVE: ReputationType;
  readonly MINOR_NEGATIVE: ReputationType;
  readonly MINOR_POSITIVE: ReputationType;
  readonly TRADING: ReputationType;
  valueOf(arg0: string): ReputationType;
  values(): Array<ReputationType>;
}
