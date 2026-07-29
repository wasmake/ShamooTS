// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface net.kyori.adventure.text.object.ObjectContents. */
export interface ObjectContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
}
export type ObjectContents = ObjectContentsMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ObjectContentsStatics {
  playerHead(): PlayerHeadObjectContents_Builder;
  playerHead(arg0: string): PlayerHeadObjectContents;
  playerHead(arg0: JavaOpaque<"java.util.UUID">): PlayerHeadObjectContents;
  playerHead(arg0: PlayerHeadObjectContents_SkinSource): PlayerHeadObjectContents;
  sprite(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): SpriteObjectContents;
  sprite(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): SpriteObjectContents;
}

/** JVM interface net.kyori.adventure.text.object.PlayerHeadObjectContents. */
export interface PlayerHeadObjectContentsMembers {
  readonly __javaSupertypes?: readonly [ObjectContents];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  hat(): boolean;
  id(): JavaOpaque<"java.util.UUID"> | null;
  name(): string | null;
  profileProperties(): JavaList<PlayerHeadObjectContents_ProfileProperty>;
  texture(): JavaOpaque<"net.kyori.adventure.key.Key"> | null;
  toBuilder(): PlayerHeadObjectContents_Builder;
}
export type PlayerHeadObjectContents = PlayerHeadObjectContentsMembers & ObjectContents;
export interface PlayerHeadObjectContentsStatics {
  readonly DEFAULT_HAT: 1;
  property(arg0: string, arg1: string): PlayerHeadObjectContents_ProfileProperty;
  property(arg0: string, arg1: string, arg2: string | null): PlayerHeadObjectContents_ProfileProperty;
}

/** JVM interface net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder. */
export interface PlayerHeadObjectContents_BuilderMembers {
  build(): PlayerHeadObjectContents;
  hat(arg0: boolean): PlayerHeadObjectContents_Builder;
  id(arg0: JavaOpaque<"java.util.UUID"> | null): PlayerHeadObjectContents_Builder;
  name(arg0: string | null): PlayerHeadObjectContents_Builder;
  profileProperties(arg0: JavaCollection<PlayerHeadObjectContents_ProfileProperty>): PlayerHeadObjectContents_Builder;
  profileProperty(arg0: PlayerHeadObjectContents_ProfileProperty): PlayerHeadObjectContents_Builder;
  skin(arg0: PlayerHeadObjectContents_SkinSource): PlayerHeadObjectContents_Builder;
  texture(arg0: JavaOpaque<"net.kyori.adventure.key.Key"> | null): PlayerHeadObjectContents_Builder;
}
export type PlayerHeadObjectContents_Builder = PlayerHeadObjectContents_BuilderMembers;
export interface PlayerHeadObjectContents_BuilderStatics {
}

/** JVM interface net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty. */
export interface PlayerHeadObjectContents_ProfilePropertyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"net.kyori.examination.Examinable">];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  name(): string;
  signature(): string | null;
  value(): string;
}
export type PlayerHeadObjectContents_ProfileProperty = PlayerHeadObjectContents_ProfilePropertyMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface PlayerHeadObjectContents_ProfilePropertyStatics {
}

/** JVM interface net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource. */
export interface PlayerHeadObjectContents_SkinSourceMembers {
  applySkinToPlayerHeadContents(arg0: PlayerHeadObjectContents_Builder): void;
}
export type PlayerHeadObjectContents_SkinSource = PlayerHeadObjectContents_SkinSourceMembers;
export interface PlayerHeadObjectContents_SkinSourceStatics {
}

/** JVM interface net.kyori.adventure.text.object.SpriteObjectContents. */
export interface SpriteObjectContentsMembers {
  readonly __javaSupertypes?: readonly [ObjectContents];
  atlas(): JavaOpaque<"net.kyori.adventure.key.Key">;
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  sprite(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type SpriteObjectContents = SpriteObjectContentsMembers & ObjectContents;
export interface SpriteObjectContentsStatics {
  readonly DEFAULT_ATLAS: JavaOpaque<"net.kyori.adventure.key.Key">;
}
