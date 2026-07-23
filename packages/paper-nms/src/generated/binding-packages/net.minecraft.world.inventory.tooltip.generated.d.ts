// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';

/** JVM record net.minecraft.world.inventory.tooltip.BundleTooltip. */
export interface BundleTooltipMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipComponent];
  contents(): j_net_minecraft_world_item_component.BundleContents;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type BundleTooltip = BundleTooltipMembers & JavaOpaque<"java.lang.Record"> & TooltipComponent;
export interface BundleTooltipStatics {
  new(arg0: j_net_minecraft_world_item_component.BundleContents): BundleTooltip;
}

/** JVM interface net.minecraft.world.inventory.tooltip.TooltipComponent. */
export interface TooltipComponentMembers {
}
export type TooltipComponent = TooltipComponentMembers;
export interface TooltipComponentStatics {
}
