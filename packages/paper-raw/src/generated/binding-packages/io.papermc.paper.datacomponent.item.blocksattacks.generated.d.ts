// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_datacomponent from './io.papermc.paper.datacomponent.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';

/** JVM interface io.papermc.paper.datacomponent.item.blocksattacks.DamageReduction. */
export interface DamageReductionMembers {
  base(): number;
  factor(): number;
  horizontalBlockingAngle(): number;
  type(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_damage.DamageType> | null;
}
export type DamageReduction = DamageReductionMembers;
export interface DamageReductionStatics {
  damageReduction(): DamageReduction_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.blocksattacks.DamageReduction$Builder. */
export interface DamageReduction_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<DamageReduction>];
  base(arg0: number): DamageReduction_Builder;
  factor(arg0: number): DamageReduction_Builder;
  horizontalBlockingAngle(arg0: number): DamageReduction_Builder;
  type(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_damage.DamageType>): DamageReduction_Builder;
}
export type DamageReduction_Builder = DamageReduction_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<DamageReduction>;
export interface DamageReduction_BuilderStatics {
}

/** JVM interface io.papermc.paper.datacomponent.item.blocksattacks.ItemDamageFunction. */
export interface ItemDamageFunctionMembers {
  base(): number;
  damageToApply(arg0: number): number;
  factor(): number;
  threshold(): number;
}
export type ItemDamageFunction = ItemDamageFunctionMembers;
export interface ItemDamageFunctionStatics {
  itemDamageFunction(): ItemDamageFunction_Builder;
}

/** JVM interface io.papermc.paper.datacomponent.item.blocksattacks.ItemDamageFunction$Builder. */
export interface ItemDamageFunction_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemDamageFunction>];
  base(arg0: number): ItemDamageFunction_Builder;
  factor(arg0: number): ItemDamageFunction_Builder;
  threshold(arg0: number): ItemDamageFunction_Builder;
}
export type ItemDamageFunction_Builder = ItemDamageFunction_BuilderMembers & j_io_papermc_paper_datacomponent.DataComponentBuilder<ItemDamageFunction>;
export interface ItemDamageFunction_BuilderStatics {
}
