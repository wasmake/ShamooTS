// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_inventory_meta from './org.bukkit.inventory.meta.generated.js';

/** JVM interface com.destroystokyo.paper.inventory.meta.ArmorStandMeta. */
export interface ArmorStandMetaMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_inventory_meta.ItemMeta];
  hasNoBasePlate(): boolean;
  isInvisible(): boolean;
  isMarker(): boolean;
  isSmall(): boolean;
  setInvisible(arg0: boolean): void;
  setMarker(arg0: boolean): void;
  setNoBasePlate(arg0: boolean): void;
  setShowArms(arg0: boolean): void;
  setSmall(arg0: boolean): void;
  shouldShowArms(): boolean;
}
export type ArmorStandMeta = ArmorStandMetaMembers & j_org_bukkit_inventory_meta.ItemMeta;
export interface ArmorStandMetaStatics {
}
