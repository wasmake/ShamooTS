// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM record net.minecraft.locale.DeprecatedTranslationsInfo. */
export interface DeprecatedTranslationsInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  applyToMap(arg0: JavaMap<string, string>): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  removed(): JavaList<string>;
  renamed(): JavaMap<string, string>;
  toString(): string;
}
export type DeprecatedTranslationsInfo = DeprecatedTranslationsInfoMembers & JavaOpaque<"java.lang.Record">;
export interface DeprecatedTranslationsInfoStatics {
  new(arg0: JavaList<string>, arg1: JavaMap<string, string>): DeprecatedTranslationsInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DeprecatedTranslationsInfo]>;
  readonly EMPTY: DeprecatedTranslationsInfo;
  loadFromDefaultResource(): DeprecatedTranslationsInfo;
  loadFromJson(arg0: JavaOpaque<"java.io.InputStream">): DeprecatedTranslationsInfo;
  loadFromResource(arg0: string): DeprecatedTranslationsInfo;
}

/** JVM abstract net.minecraft.locale.Language. */
export interface LanguageMembers {
  getOrDefault(arg0: string): string;
  getOrDefault(arg0: string, arg1: string): string;
  getVisualOrder(arg0: JavaList<j_net_minecraft_network_chat.FormattedText>): JavaList<j_net_minecraft_util.FormattedCharSequence>;
  getVisualOrder(arg0: j_net_minecraft_network_chat.FormattedText): j_net_minecraft_util.FormattedCharSequence;
  has(arg0: string): boolean;
  isDefaultRightToLeft(): boolean;
}
export type Language = LanguageMembers;
export interface LanguageStatics {
  readonly DEFAULT: "en_us";
  getInstance(): Language;
  inject(arg0: Language): void;
  loadFromJson(arg0: JavaOpaque<"java.io.InputStream">, arg1: JavaBiConsumer<string, string>): void;
}
