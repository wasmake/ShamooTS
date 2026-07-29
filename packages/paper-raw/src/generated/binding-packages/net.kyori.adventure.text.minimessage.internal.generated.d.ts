// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.kyori.adventure.text.minimessage.internal.TagInternals. */
export interface TagInternalsMembers {
}
export type TagInternals = TagInternalsMembers;
export interface TagInternalsStatics {
  readonly TAG_NAME_REGEX: "[!?#]?[a-z0-9_-]*";
  assertValidTagName(arg0: string): void;
  sanitizeAndAssertValidTagName(arg0: string): void;
  sanitizeAndCheckValidTagName(arg0: string): boolean;
}
