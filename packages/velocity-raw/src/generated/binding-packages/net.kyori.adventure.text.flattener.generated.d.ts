// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.text.flattener.ComponentFlattener. */
export interface ComponentFlattenerMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<ComponentFlattener, ComponentFlattener_Builder>];
  flatten(arg0: j_net_kyori_adventure_text.Component, arg1: FlattenerListener): void;
  toBuilder(): ComponentFlattener_Builder;
}
export type ComponentFlattener = ComponentFlattenerMembers;
export interface ComponentFlattenerStatics {
  readonly NO_NESTING_LIMIT: -1;
  basic(): ComponentFlattener;
  builder(): ComponentFlattener_Builder;
  textOnly(): ComponentFlattener;
}

/** JVM interface net.kyori.adventure.text.flattener.ComponentFlattener$Builder. */
export interface ComponentFlattener_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<ComponentFlattener>, j_net_kyori_adventure_util.Buildable_Builder<ComponentFlattener>];
  build(): ComponentFlattener;
  complexMapper<T /* extends j_net_kyori_adventure_text.Component */>(arg0: JavaClass<T>, arg1: JavaBiConsumer<T, JavaConsumer<j_net_kyori_adventure_text.Component>>): ComponentFlattener_Builder;
  mapper<T /* extends j_net_kyori_adventure_text.Component */>(arg0: JavaClass<T>, arg1: JavaFunction<T, string>): ComponentFlattener_Builder;
  nestingLimit(arg0: number): ComponentFlattener_Builder;
  unknownMapper(arg0: JavaFunction<j_net_kyori_adventure_text.Component, string> | null): ComponentFlattener_Builder;
}
export type ComponentFlattener_Builder = ComponentFlattener_BuilderMembers;
export interface ComponentFlattener_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.flattener.FlattenerListener. */
export interface FlattenerListenerMembers {
  component(arg0: string): void;
  popStyle(arg0: j_net_kyori_adventure_text_format.Style): void;
  pushStyle(arg0: j_net_kyori_adventure_text_format.Style): void;
  shouldContinue(): boolean;
}
export type FlattenerListener = FlattenerListenerMembers;
export interface FlattenerListenerStatics {
}
