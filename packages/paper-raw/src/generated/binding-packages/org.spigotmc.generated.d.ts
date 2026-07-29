// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.spigotmc.CustomTimingsHandler. */
export interface CustomTimingsHandlerMembers {
  startTiming(): void;
  stopTiming(): void;
}
export type CustomTimingsHandler = CustomTimingsHandlerMembers;
export interface CustomTimingsHandlerStatics {
  new(arg0: string): CustomTimingsHandler;
}
