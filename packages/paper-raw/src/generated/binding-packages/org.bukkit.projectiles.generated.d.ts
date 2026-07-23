// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.projectiles.BlockProjectileSource. */
export interface BlockProjectileSourceMembers {
  readonly __javaSupertypes?: readonly [ProjectileSource];
  getBlock(): j_org_bukkit_block.Block;
}
export type BlockProjectileSource = BlockProjectileSourceMembers & ProjectileSource;
export interface BlockProjectileSourceStatics {
}

/** JVM interface org.bukkit.projectiles.ProjectileSource. */
export interface ProjectileSourceMembers {
  launchProjectile<T /* extends j_org_bukkit_entity.Projectile */>(arg0: JavaClass<T>): T;
  launchProjectile<T /* extends j_org_bukkit_entity.Projectile */>(arg0: JavaClass<T>, arg1: j_org_bukkit_util.Vector | null): T | null;
  launchProjectile<T /* extends j_org_bukkit_entity.Projectile */>(arg0: JavaClass<T>, arg1: j_org_bukkit_util.Vector | null, arg2: JavaConsumer<T>): T | null;
}
export type ProjectileSource = ProjectileSourceMembers;
export interface ProjectileSourceStatics {
}
