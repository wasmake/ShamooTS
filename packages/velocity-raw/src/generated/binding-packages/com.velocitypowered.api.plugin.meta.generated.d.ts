// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class com.velocitypowered.api.plugin.meta.PluginDependency. */
export interface PluginDependencyMembers {
  equals(arg0: object): boolean | null;
  getId(): string;
  getVersion(): JavaOptional<string>;
  hashCode(): number;
  isOptional(): boolean;
  toString(): string;
}
export type PluginDependency = PluginDependencyMembers;
export interface PluginDependencyStatics {
  new(arg0: string, arg1: string, arg2: boolean): PluginDependency;
}
