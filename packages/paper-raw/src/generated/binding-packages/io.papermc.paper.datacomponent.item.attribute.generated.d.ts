// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface io.papermc.paper.datacomponent.item.attribute.AttributeModifierDisplay. */
export interface AttributeModifierDisplayMembers {
}
export type AttributeModifierDisplay = AttributeModifierDisplayMembers;
export interface AttributeModifierDisplayStatics {
  hidden(): AttributeModifierDisplay_Hidden;
  override(arg0: j_net_kyori_adventure_text.ComponentLike): AttributeModifierDisplay_OverrideText;
  reset(): AttributeModifierDisplay_Default;
}

/** JVM interface io.papermc.paper.datacomponent.item.attribute.AttributeModifierDisplay$Default. */
export interface AttributeModifierDisplay_DefaultMembers {
  readonly __javaSupertypes?: readonly [AttributeModifierDisplay];
}
export type AttributeModifierDisplay_Default = AttributeModifierDisplay_DefaultMembers & AttributeModifierDisplay;
export interface AttributeModifierDisplay_DefaultStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.attribute.AttributeModifierDisplay$Hidden. */
export interface AttributeModifierDisplay_HiddenMembers {
  readonly __javaSupertypes?: readonly [AttributeModifierDisplay];
}
export type AttributeModifierDisplay_Hidden = AttributeModifierDisplay_HiddenMembers & AttributeModifierDisplay;
export interface AttributeModifierDisplay_HiddenStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.attribute.AttributeModifierDisplay$OverrideText. */
export interface AttributeModifierDisplay_OverrideTextMembers {
  readonly __javaSupertypes?: readonly [AttributeModifierDisplay];
  text(): j_net_kyori_adventure_text.Component;
}
export type AttributeModifierDisplay_OverrideText = AttributeModifierDisplay_OverrideTextMembers & AttributeModifierDisplay;
export interface AttributeModifierDisplay_OverrideTextStatics {
}
