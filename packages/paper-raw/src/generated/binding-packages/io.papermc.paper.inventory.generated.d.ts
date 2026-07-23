// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';

/** Live JVM enum io.papermc.paper.inventory.ItemRarity; constants are host handles, not strings. */
export type ItemRarity = JavaEnum<"io.papermc.paper.inventory.ItemRarity", "COMMON" | "EPIC" | "RARE" | "UNCOMMON"> & ItemRarityMembers;
export interface ItemRarityMembers {
  getColor(): j_net_kyori_adventure_text_format.TextColor;
}
export interface ItemRarityStatics {
  readonly COMMON: ItemRarity;
  readonly EPIC: ItemRarity;
  readonly RARE: ItemRarity;
  readonly UNCOMMON: ItemRarity;
  valueOf(arg0: string): ItemRarity;
  values(): Array<ItemRarity>;
}
