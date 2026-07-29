// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';

/** JVM abstract net.kyori.adventure.text.renderer.AbstractComponentRenderer. */
export interface AbstractComponentRendererMembers<C = unknown> {
  readonly __javaSupertypes?: readonly [ComponentRenderer<C>];
  render(arg0: j_net_kyori_adventure_text.Component, arg1: C): j_net_kyori_adventure_text.Component;
}
export type AbstractComponentRenderer<C = unknown> = AbstractComponentRendererMembers<C> & ComponentRenderer<C>;
export interface AbstractComponentRendererStatics {
}

/** JVM interface net.kyori.adventure.text.renderer.ComponentRenderer. */
export interface ComponentRendererMembers<C = unknown> {
  mapContext<T>(arg0: JavaFunction<T, C>): ComponentRenderer<T>;
  render(arg0: j_net_kyori_adventure_text.Component, arg1: C): j_net_kyori_adventure_text.Component;
}
export type ComponentRenderer<C = unknown> = ComponentRendererMembers<C>;
export interface ComponentRendererStatics {
}

/** JVM abstract net.kyori.adventure.text.renderer.TranslatableComponentRenderer. */
export interface TranslatableComponentRendererMembers<C = unknown> {
  readonly __javaSupertypes?: readonly [AbstractComponentRenderer<C>];
}
export type TranslatableComponentRenderer<C = unknown> = TranslatableComponentRendererMembers<C> & AbstractComponentRenderer<C>;
export interface TranslatableComponentRendererStatics {
  usingTranslationSource(arg0: j_net_kyori_adventure_translation.Translator): TranslatableComponentRenderer<JavaOpaque<"java.util.Locale">>;
}
