// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface net.kyori.adventure.title.Title. */
export interface TitleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  part<T>(arg0: TitlePart<T>): T;
  subtitle(): j_net_kyori_adventure_text.Component;
  times(): Title_Times | null;
  title(): j_net_kyori_adventure_text.Component;
}
export type Title = TitleMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface TitleStatics {
  readonly DEFAULT_TIMES: Title_Times;
  title(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component): Title;
  title(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component, arg2: number, arg3: number, arg4: number): Title;
  title(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component, arg2: Title_Times | null): Title | null;
}

/** JVM interface net.kyori.adventure.title.Title$Times. */
export interface Title_TimesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  fadeIn(): JavaOpaque<"java.time.Duration">;
  fadeOut(): JavaOpaque<"java.time.Duration">;
  stay(): JavaOpaque<"java.time.Duration">;
}
export type Title_Times = Title_TimesMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface Title_TimesStatics {
  of(arg0: JavaOpaque<"java.time.Duration">, arg1: JavaOpaque<"java.time.Duration">, arg2: JavaOpaque<"java.time.Duration">): Title_Times;
  times(arg0: JavaOpaque<"java.time.Duration">, arg1: JavaOpaque<"java.time.Duration">, arg2: JavaOpaque<"java.time.Duration">): Title_Times;
}

/** JVM interface net.kyori.adventure.title.TitlePart. */
export interface TitlePartMembers<T = unknown> {
}
export type TitlePart<T = unknown> = TitlePartMembers<T>;
export interface TitlePartStatics {
  readonly SUBTITLE: TitlePart<j_net_kyori_adventure_text.Component>;
  readonly TIMES: TitlePart<Title_Times>;
  readonly TITLE: TitlePart<j_net_kyori_adventure_text.Component>;
}
