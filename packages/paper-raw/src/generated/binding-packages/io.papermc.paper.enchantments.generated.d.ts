// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** Live JVM enum io.papermc.paper.enchantments.EnchantmentRarity; constants are host handles, not strings. */
export type EnchantmentRarity = JavaEnum<"io.papermc.paper.enchantments.EnchantmentRarity", "COMMON" | "RARE" | "UNCOMMON" | "VERY_RARE"> & EnchantmentRarityMembers;
export interface EnchantmentRarityMembers {
  getWeight(): number;
}
export interface EnchantmentRarityStatics {
  readonly COMMON: EnchantmentRarity;
  readonly RARE: EnchantmentRarity;
  readonly UNCOMMON: EnchantmentRarity;
  readonly VERY_RARE: EnchantmentRarity;
  valueOf(arg0: string): EnchantmentRarity;
  values(): Array<EnchantmentRarity>;
}
