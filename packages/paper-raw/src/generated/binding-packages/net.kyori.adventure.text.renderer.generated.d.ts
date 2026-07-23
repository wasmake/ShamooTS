// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_translation from './net.kyori.adventure.translation.generated.js';

/** JVM abstract net.kyori.adventure.text.renderer.AbstractComponentRenderer. */
export interface AbstractComponentRendererMembers<C = unknown> {
  readonly __javaSupertypes?: readonly [ComponentRenderer<C>];
  render(arg0: j_net_kyori_adventure_text.Component, arg1: C): j_net_kyori_adventure_text.Component;
  renderBlockNbt(arg0: j_net_kyori_adventure_text.BlockNBTComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderEntityNbt(arg0: j_net_kyori_adventure_text.EntityNBTComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderKeybind(arg0: j_net_kyori_adventure_text.KeybindComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderScore(arg0: j_net_kyori_adventure_text.ScoreComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderSelector(arg0: j_net_kyori_adventure_text.SelectorComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderStorageNbt(arg0: j_net_kyori_adventure_text.StorageNBTComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderText(arg0: j_net_kyori_adventure_text.TextComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderTranslatable(arg0: j_net_kyori_adventure_text.TranslatableComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderVirtual(arg0: j_net_kyori_adventure_text.VirtualComponent, arg1: C): j_net_kyori_adventure_text.Component;
}
export type AbstractComponentRenderer<C = unknown> = AbstractComponentRendererMembers<C> & ComponentRenderer<C>;
export interface AbstractComponentRendererStatics {
  new<C>(): AbstractComponentRenderer<C>;
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
  mergeStyle<B /* extends j_net_kyori_adventure_text.ComponentBuilder<object, object> */>(arg0: j_net_kyori_adventure_text.Component, arg1: B, arg2: C): void;
  mergeStyleAndOptionallyDeepRender<O /* extends j_net_kyori_adventure_text.BuildableComponent<O, B> */, B /* extends j_net_kyori_adventure_text.ComponentBuilder<O, B> */>(arg0: j_net_kyori_adventure_text.Component, arg1: B, arg2: C): O;
  nbt<O /* extends j_net_kyori_adventure_text.NBTComponent<O, B> */, B /* extends j_net_kyori_adventure_text.NBTComponentBuilder<O, B> */>(arg0: C, arg1: B, arg2: O): B;
  optionallyRenderChildrenAndStyle(arg0: j_net_kyori_adventure_text.Component, arg1: C): j_net_kyori_adventure_text.Component;
  optionallyRenderChildrenAppendAndBuild<O /* extends j_net_kyori_adventure_text.BuildableComponent<O, B> */, B /* extends j_net_kyori_adventure_text.ComponentBuilder<O, B> */>(arg0: JavaList<j_net_kyori_adventure_text.Component>, arg1: B, arg2: C): O;
  renderBlockNbt(arg0: j_net_kyori_adventure_text.BlockNBTComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderEntityNbt(arg0: j_net_kyori_adventure_text.EntityNBTComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderKeybind(arg0: j_net_kyori_adventure_text.KeybindComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderScore(arg0: j_net_kyori_adventure_text.ScoreComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderSelector(arg0: j_net_kyori_adventure_text.SelectorComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderStorageNbt(arg0: j_net_kyori_adventure_text.StorageNBTComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderText(arg0: j_net_kyori_adventure_text.TextComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderTranslatable(arg0: j_net_kyori_adventure_text.TranslatableComponent, arg1: C): j_net_kyori_adventure_text.Component;
  renderTranslatableInner(arg0: j_net_kyori_adventure_text.TranslatableComponent, arg1: C): j_net_kyori_adventure_text.Component;
  translate(arg0: string, arg1: C): JavaOpaque<"java.text.MessageFormat"> | null;
  translate(arg0: string, arg1: string | null, arg2: C): JavaOpaque<"java.text.MessageFormat"> | null;
}
export type TranslatableComponentRenderer<C = unknown> = TranslatableComponentRendererMembers<C> & AbstractComponentRenderer<C>;
export interface TranslatableComponentRendererStatics {
  new<C>(): TranslatableComponentRenderer<C>;
  usingTranslationSource(arg0: j_net_kyori_adventure_translation.Translator): TranslatableComponentRenderer<JavaOpaque<"java.util.Locale">>;
}
