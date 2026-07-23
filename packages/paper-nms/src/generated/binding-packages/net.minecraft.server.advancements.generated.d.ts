// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';

/** JVM class net.minecraft.server.advancements.AdvancementVisibilityEvaluator. */
export interface AdvancementVisibilityEvaluatorMembers {
}
export type AdvancementVisibilityEvaluator = AdvancementVisibilityEvaluatorMembers;
export interface AdvancementVisibilityEvaluatorStatics {
  new(): AdvancementVisibilityEvaluator;
  evaluateVisibility(arg0: j_net_minecraft_advancements.AdvancementNode, arg1: JavaPredicate<j_net_minecraft_advancements.AdvancementNode>, arg2: AdvancementVisibilityEvaluator_Output): void;
}

/** JVM interface net.minecraft.server.advancements.AdvancementVisibilityEvaluator$Output. */
export interface AdvancementVisibilityEvaluator_OutputMembers {
  accept(arg0: j_net_minecraft_advancements.AdvancementNode, arg1: boolean): void;
}
export type AdvancementVisibilityEvaluator_Output = AdvancementVisibilityEvaluator_OutputMembers;
export interface AdvancementVisibilityEvaluator_OutputStatics {
}
