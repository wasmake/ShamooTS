// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.sound.Sound. */
export interface SoundMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  asStop(): SoundStop;
  name(): JavaOpaque<"net.kyori.adventure.key.Key">;
  pitch(): number;
  seed(): JavaOptionalBigInt;
  source(): Sound_Source;
  volume(): number;
}
export type Sound = SoundMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface SoundStatics {
  sound(): Sound_Builder;
  sound(arg0: JavaConsumer<Sound_Builder>): Sound;
  sound(arg0: JavaSupplier<Sound_Type>, arg1: Sound_Source_Provider, arg2: number, arg3: number): Sound;
  sound(arg0: JavaSupplier<Sound_Type>, arg1: Sound_Source, arg2: number, arg3: number): Sound;
  sound(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: Sound_Source_Provider, arg2: number, arg3: number): Sound;
  sound(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: Sound_Source, arg2: number, arg3: number): Sound;
  sound(arg0: Sound_Type, arg1: Sound_Source_Provider, arg2: number, arg3: number): Sound;
  sound(arg0: Sound_Type, arg1: Sound_Source, arg2: number, arg3: number): Sound;
  sound(arg0: Sound): Sound_Builder;
}

/** JVM interface net.kyori.adventure.sound.Sound$Builder. */
export interface Sound_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<Sound>];
  pitch(arg0: number): Sound_Builder;
  seed(arg0: bigint): Sound_Builder;
  seed(arg0: JavaOptionalBigInt): Sound_Builder;
  source(arg0: Sound_Source_Provider): Sound_Builder;
  source(arg0: Sound_Source): Sound_Builder;
  type(arg0: JavaSupplier<Sound_Type>): Sound_Builder;
  type(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): Sound_Builder;
  type(arg0: Sound_Type): Sound_Builder;
  volume(arg0: number): Sound_Builder;
}
export type Sound_Builder = Sound_BuilderMembers & j_net_kyori_adventure_builder.AbstractBuilder<Sound>;
export interface Sound_BuilderStatics {
}

/** JVM interface net.kyori.adventure.sound.Sound$Emitter. */
export interface Sound_EmitterMembers {
}
export type Sound_Emitter = Sound_EmitterMembers;
export interface Sound_EmitterStatics {
  self(): Sound_Emitter;
}

/** Live JVM enum net.kyori.adventure.sound.Sound$Source; constants are host handles, not strings. */
export type Sound_Source = JavaEnum<"net.kyori.adventure.sound.Sound$Source", "AMBIENT" | "BLOCK" | "HOSTILE" | "MASTER" | "MUSIC" | "NEUTRAL" | "PLAYER" | "RECORD" | "UI" | "VOICE" | "WEATHER"> & Sound_SourceMembers;
export interface Sound_SourceMembers {
}
export interface Sound_SourceStatics {
  readonly AMBIENT: Sound_Source;
  readonly BLOCK: Sound_Source;
  readonly HOSTILE: Sound_Source;
  readonly MASTER: Sound_Source;
  readonly MUSIC: Sound_Source;
  readonly NEUTRAL: Sound_Source;
  readonly PLAYER: Sound_Source;
  readonly RECORD: Sound_Source;
  readonly UI: Sound_Source;
  readonly VOICE: Sound_Source;
  readonly WEATHER: Sound_Source;
  readonly NAMES: j_net_kyori_adventure_util.Index<string, Sound_Source>;
  valueOf(arg0: string): Sound_Source;
  values(): Array<Sound_Source>;
}

/** JVM interface net.kyori.adventure.sound.Sound$Source$Provider. */
export interface Sound_Source_ProviderMembers {
  soundSource(): Sound_Source;
}
export type Sound_Source_Provider = Sound_Source_ProviderMembers;
export interface Sound_Source_ProviderStatics {
}

/** JVM interface net.kyori.adventure.sound.Sound$Type. */
export interface Sound_TypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.adventure.key.Keyed">];
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type Sound_Type = Sound_TypeMembers & JavaOpaque<"net.kyori.adventure.key.Keyed">;
export interface Sound_TypeStatics {
}

/** JVM interface net.kyori.adventure.sound.SoundStop. */
export interface SoundStopMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  sound(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  source(): Sound_Source | null;
}
export type SoundStop = SoundStopMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface SoundStopStatics {
  all(): SoundStop;
  named(arg0: JavaSupplier<Sound_Type>): SoundStop;
  named(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): SoundStop;
  named(arg0: Sound_Type): SoundStop;
  namedOnSource(arg0: JavaSupplier<Sound_Type>, arg1: Sound_Source): SoundStop;
  namedOnSource(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: Sound_Source): SoundStop;
  namedOnSource(arg0: Sound_Type, arg1: Sound_Source): SoundStop;
  source(arg0: Sound_Source): SoundStop;
}
