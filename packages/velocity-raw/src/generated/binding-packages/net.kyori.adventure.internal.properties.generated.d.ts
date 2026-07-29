// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.kyori.adventure.internal.properties.AdventureProperties. */
export interface AdventurePropertiesMembers {
}
export type AdventureProperties = AdventurePropertiesMembers;
export interface AdventurePropertiesStatics {
  readonly DEBUG: AdventureProperties_Property<boolean>;
  readonly DEFAULT_FLATTENER_NESTING_LIMIT: AdventureProperties_Property<number>;
  readonly DEFAULT_TRANSLATION_LOCALE: AdventureProperties_Property<string>;
  readonly SERVICE_LOAD_FAILURES_ARE_FATAL: AdventureProperties_Property<boolean>;
  readonly TEXT_WARN_WHEN_LEGACY_FORMATTING_DETECTED: AdventureProperties_Property<boolean>;
  property<T>(arg0: string, arg1: JavaFunction<string, T>, arg2: T | null): AdventureProperties_Property<T>;
  property<T>(arg0: string, arg1: JavaFunction<string, T>, arg2: T | null, arg3: boolean): AdventureProperties_Property<T>;
}

/** JVM interface net.kyori.adventure.internal.properties.AdventureProperties$DefaultOverrideProvider. */
export interface AdventureProperties_DefaultOverrideProviderMembers {
  overrideDefault<T>(arg0: AdventureProperties_Property<T>, arg1: T | null): T | null;
}
export type AdventureProperties_DefaultOverrideProvider = AdventureProperties_DefaultOverrideProviderMembers;
export interface AdventureProperties_DefaultOverrideProviderStatics {
}

/** JVM interface net.kyori.adventure.internal.properties.AdventureProperties$Property. */
export interface AdventureProperties_PropertyMembers<T = unknown> {
  value(): T | null;
  valueOr(arg0: T): T;
}
export type AdventureProperties_Property<T = unknown> = AdventureProperties_PropertyMembers<T>;
export interface AdventureProperties_PropertyStatics {
}
