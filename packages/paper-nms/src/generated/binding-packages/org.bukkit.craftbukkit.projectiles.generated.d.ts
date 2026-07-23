// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';

/** JVM class org.bukkit.craftbukkit.projectiles.CraftBlockProjectileSource. */
export interface CraftBlockProjectileSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.projectiles.BlockProjectileSource">];
  getBlock(): JavaOpaque<"org.bukkit.block.Block">;
  launchProjectile<T /* extends JavaOpaque<"org.bukkit.entity.Projectile"> */>(arg0: JavaClass<T>): T;
  launchProjectile<T /* extends JavaOpaque<"org.bukkit.entity.Projectile"> */>(arg0: JavaClass<T>, arg1: JavaOpaque<"org.bukkit.util.Vector">): T;
  launchProjectile<T /* extends JavaOpaque<"org.bukkit.entity.Projectile"> */>(arg0: JavaClass<T>, arg1: JavaOpaque<"org.bukkit.util.Vector">, arg2: JavaConsumer<T>): T;
}
export type CraftBlockProjectileSource = CraftBlockProjectileSourceMembers & JavaOpaque<"org.bukkit.projectiles.BlockProjectileSource">;
export interface CraftBlockProjectileSourceStatics {
  new(arg0: j_net_minecraft_world_level_block_entity.DispenserBlockEntity): CraftBlockProjectileSource;
}
