// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** Live JVM enum org.bukkit.inventory.recipe.CookingBookCategory; constants are host handles, not strings. */
export type CookingBookCategory = JavaEnum<"org.bukkit.inventory.recipe.CookingBookCategory", "BLOCKS" | "FOOD" | "MISC"> & CookingBookCategoryMembers;
export interface CookingBookCategoryMembers {
}
export interface CookingBookCategoryStatics {
  readonly BLOCKS: CookingBookCategory;
  readonly FOOD: CookingBookCategory;
  readonly MISC: CookingBookCategory;
  valueOf(arg0: string): CookingBookCategory;
  values(): Array<CookingBookCategory>;
}

/** Live JVM enum org.bukkit.inventory.recipe.CraftingBookCategory; constants are host handles, not strings. */
export type CraftingBookCategory = JavaEnum<"org.bukkit.inventory.recipe.CraftingBookCategory", "BUILDING" | "EQUIPMENT" | "MISC" | "REDSTONE"> & CraftingBookCategoryMembers;
export interface CraftingBookCategoryMembers {
}
export interface CraftingBookCategoryStatics {
  readonly BUILDING: CraftingBookCategory;
  readonly EQUIPMENT: CraftingBookCategory;
  readonly MISC: CraftingBookCategory;
  readonly REDSTONE: CraftingBookCategory;
  valueOf(arg0: string): CraftingBookCategory;
  values(): Array<CraftingBookCategory>;
}
