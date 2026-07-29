// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_pointer from './net.kyori.adventure.pointer.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface net.kyori.adventure.identity.Identified. */
export interface IdentifiedMembers {
  identity(): Identity;
}
export type Identified = IdentifiedMembers;
export interface IdentifiedStatics {
}

/** JVM interface net.kyori.adventure.identity.Identity. */
export interface IdentityMembers {
  readonly __javaSupertypes?: readonly [Identified, JavaOpaque<"net.kyori.examination.Examinable">];
  examinableProperties(): JavaOpaque<"java.util.stream.Stream", [JavaOpaque<"net.kyori.examination.ExaminableProperty">]>;
  identity(): Identity;
  uuid(): JavaOpaque<"java.util.UUID">;
}
export type Identity = IdentityMembers & Identified & JavaOpaque<"net.kyori.examination.Examinable">;
export interface IdentityStatics {
  readonly DISPLAY_NAME: j_net_kyori_adventure_pointer.Pointer<j_net_kyori_adventure_text.Component>;
  readonly LOCALE: j_net_kyori_adventure_pointer.Pointer<JavaOpaque<"java.util.Locale">>;
  readonly NAME: j_net_kyori_adventure_pointer.Pointer<string>;
  readonly UUID: j_net_kyori_adventure_pointer.Pointer<JavaOpaque<"java.util.UUID">>;
  identity(arg0: JavaOpaque<"java.util.UUID">): Identity;
  nil(): Identity;
}
