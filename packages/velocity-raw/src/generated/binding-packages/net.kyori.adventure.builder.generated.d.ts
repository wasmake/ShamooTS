// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface net.kyori.adventure.builder.AbstractBuilder. */
export interface AbstractBuilderMembers<R = unknown> {
  build(): R;
}
export type AbstractBuilder<R = unknown> = AbstractBuilderMembers<R>;
export interface AbstractBuilderStatics {
  configureAndBuild<R, B /* extends AbstractBuilder<R> */>(arg0: B, arg1: JavaConsumer<B> | null): R;
}
