// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM class io.papermc.paper.brigadier.PaperBrigadier. */
export interface PaperBrigadierMembers {
}
export type PaperBrigadier = PaperBrigadierMembers;
export interface PaperBrigadierStatics {
  componentFromMessage(arg0: JavaOpaque<"com.mojang.brigadier.Message">): j_net_kyori_adventure_text.Component;
  message(arg0: j_net_kyori_adventure_text.ComponentLike): JavaOpaque<"com.mojang.brigadier.Message">;
}
