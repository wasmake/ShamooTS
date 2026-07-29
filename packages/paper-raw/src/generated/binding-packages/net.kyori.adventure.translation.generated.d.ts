// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_renderer from './net.kyori.adventure.text.renderer.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM abstract net.kyori.adventure.translation.AbstractTranslationStore. */
export interface AbstractTranslationStoreMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">, TranslationStore<T>];
  canTranslate(arg0: string, arg1: JavaOpaque<"java.util.Locale">): boolean;
  contains(arg0: string): boolean;
  contains(arg0: string, arg1: JavaOpaque<"java.util.Locale">): boolean;
  defaultLocale(arg0: JavaOpaque<"java.util.Locale">): void;
  equals(arg0: object): boolean;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hasAnyTranslations(): j_net_kyori_adventure_util.TriState;
  hashCode(): number;
  name(): JavaOpaque<"net.kyori.adventure.key.Key">;
  register(arg0: string, arg1: JavaOpaque<"java.util.Locale">, arg2: T): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaMap<string, T>): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaSet<string>, arg2: JavaFunction<string, T>): void;
  toString(): string;
  unregister(arg0: string): void;
}
export type AbstractTranslationStore<T = unknown> = AbstractTranslationStoreMembers<T> & JavaOpaque<"net.kyori.examination.Examinable"> & TranslationStore<T>;
export interface AbstractTranslationStoreStatics {
}

/** JVM abstract net.kyori.adventure.translation.AbstractTranslationStore$StringBased. */
export interface AbstractTranslationStore_StringBasedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [AbstractTranslationStore<T>, TranslationStore_StringBased<T>];
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: boolean): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaOpaque<"java.util.ResourceBundle">, arg2: boolean): void;
}
export type AbstractTranslationStore_StringBased<T = unknown> = AbstractTranslationStore_StringBasedMembers<T> & AbstractTranslationStore<T> & TranslationStore_StringBased<T>;
export interface AbstractTranslationStore_StringBasedStatics {
}

/** JVM interface net.kyori.adventure.translation.GlobalTranslator. */
export interface GlobalTranslatorMembers {
  readonly __javaSupertypes?: readonly [Translator, JavaOpaque<"net.kyori.examination.Examinable">];
  addSource(arg0: Translator): boolean;
  removeSource(arg0: Translator): boolean;
  sources(): Iterable<Translator>;
}
export type GlobalTranslator = GlobalTranslatorMembers & Translator & JavaOpaque<"net.kyori.examination.Examinable">;
export interface GlobalTranslatorStatics {
  get(): GlobalTranslator;
  render(arg0: j_net_kyori_adventure_text.Component, arg1: JavaOpaque<"java.util.Locale">): j_net_kyori_adventure_text.Component;
  renderer(): j_net_kyori_adventure_text_renderer.TranslatableComponentRenderer<JavaOpaque<"java.util.Locale">>;
  translator(): GlobalTranslator;
}

/** JVM interface net.kyori.adventure.translation.Translatable. */
export interface TranslatableMembers {
  translationKey(): string;
}
export type Translatable = TranslatableMembers;
export interface TranslatableStatics {
}

/** JVM interface net.kyori.adventure.translation.TranslationRegistry. */
export interface TranslationRegistryMembers {
  readonly __javaSupertypes?: readonly [Translator, TranslationStore_StringBased<JavaOpaque<"java.text.MessageFormat">>];
  contains(arg0: string): boolean;
  defaultLocale(arg0: JavaOpaque<"java.util.Locale">): void;
  register(arg0: string, arg1: JavaOpaque<"java.util.Locale">, arg2: JavaOpaque<"java.text.MessageFormat">): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: boolean): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaMap<string, JavaOpaque<"java.text.MessageFormat">>): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaOpaque<"java.util.ResourceBundle">, arg2: boolean): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaSet<string>, arg2: JavaFunction<string, JavaOpaque<"java.text.MessageFormat">>): void;
  translate(arg0: string, arg1: JavaOpaque<"java.util.Locale">): JavaOpaque<"java.text.MessageFormat"> | null;
  unregister(arg0: string): void;
}
export type TranslationRegistry = TranslationRegistryMembers & Translator & TranslationStore_StringBased<JavaOpaque<"java.text.MessageFormat">>;
export interface TranslationRegistryStatics {
  readonly SINGLE_QUOTE_PATTERN: JavaOpaque<"java.util.regex.Pattern">;
  create(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): TranslationRegistry;
}

/** JVM interface net.kyori.adventure.translation.TranslationStore. */
export interface TranslationStoreMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [Translator];
  canTranslate(arg0: string, arg1: JavaOpaque<"java.util.Locale">): boolean;
  contains(arg0: string): boolean;
  contains(arg0: string, arg1: JavaOpaque<"java.util.Locale">): boolean;
  defaultLocale(arg0: JavaOpaque<"java.util.Locale">): void;
  register(arg0: string, arg1: JavaOpaque<"java.util.Locale">, arg2: T): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaMap<string, T>): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaSet<string>, arg2: JavaFunction<string, T>): void;
  unregister(arg0: string): void;
}
export type TranslationStore<T = unknown> = TranslationStoreMembers<T> & Translator;
export interface TranslationStoreStatics {
  component(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): TranslationStore<j_net_kyori_adventure_text.Component>;
  messageFormat(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): TranslationStore_StringBased<JavaOpaque<"java.text.MessageFormat">>;
}

/** JVM interface net.kyori.adventure.translation.TranslationStore$StringBased. */
export interface TranslationStore_StringBasedMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [TranslationStore<T>];
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaOpaque<"java.nio.file.Path">, arg2: boolean): void;
  registerAll(arg0: JavaOpaque<"java.util.Locale">, arg1: JavaOpaque<"java.util.ResourceBundle">, arg2: boolean): void;
}
export type TranslationStore_StringBased<T = unknown> = TranslationStore_StringBasedMembers<T> & TranslationStore<T>;
export interface TranslationStore_StringBasedStatics {
}

/** JVM interface net.kyori.adventure.translation.Translator. */
export interface TranslatorMembers {
  canTranslate(arg0: string, arg1: JavaOpaque<"java.util.Locale">): boolean;
  hasAnyTranslations(): j_net_kyori_adventure_util.TriState;
  name(): JavaOpaque<"net.kyori.adventure.key.Key">;
  translate(arg0: string, arg1: JavaOpaque<"java.util.Locale">): JavaOpaque<"java.text.MessageFormat"> | null;
  translate(arg0: j_net_kyori_adventure_text.TranslatableComponent, arg1: JavaOpaque<"java.util.Locale">): j_net_kyori_adventure_text.Component | null;
}
export type Translator = TranslatorMembers;
export interface TranslatorStatics {
  parseLocale(arg0: string): JavaOpaque<"java.util.Locale"> | null;
}
