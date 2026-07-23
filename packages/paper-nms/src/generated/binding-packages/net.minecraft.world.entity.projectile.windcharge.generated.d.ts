// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_monster_breeze from './net.minecraft.world.entity.monster.breeze.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM abstract net.minecraft.world.entity.projectile.windcharge.AbstractWindCharge. */
export interface AbstractWindChargeMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile, j_net_minecraft_world_entity_projectile.ItemSupplier];
  canCollideWith(arg0: j_net_minecraft_world_entity.Entity): boolean;
  canHitEntity(arg0: j_net_minecraft_world_entity.Entity): boolean;
  explode(arg0: j_net_minecraft_world_phys.Vec3): void;
  getInertia(): number;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getLiquidInertia(): number;
  getTrailParticle(): j_net_minecraft_core_particles.ParticleOptions | null;
  makeBoundingBox(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.AABB;
  onHit(arg0: j_net_minecraft_world_phys.HitResult): void;
  onHitBlock(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  onHitEntity(arg0: j_net_minecraft_world_phys.EntityHitResult): void;
  push(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null): void | null;
  shouldBurn(): boolean;
  tick(): void;
}
export type AbstractWindCharge = AbstractWindChargeMembers & j_net_minecraft_world_entity_projectile.AbstractHurtingProjectile & j_net_minecraft_world_entity_projectile.ItemSupplier;
export interface AbstractWindChargeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractWindCharge>, arg1: j_net_minecraft_world_level.Level): AbstractWindCharge;
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractWindCharge>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.Entity, arg3: number, arg4: number, arg5: number): AbstractWindCharge;
  readonly EXPLOSION_DAMAGE_CALCULATOR: j_net_minecraft_world_level.ExplosionDamageCalculator;
  readonly JUMP_SCALE: 0.25;
}

/** JVM class net.minecraft.world.entity.projectile.windcharge.BreezeWindCharge. */
export interface BreezeWindChargeMembers {
  readonly __javaSupertypes?: readonly [AbstractWindCharge];
  explode(arg0: j_net_minecraft_world_phys.Vec3): void;
}
export type BreezeWindCharge = BreezeWindChargeMembers & AbstractWindCharge;
export interface BreezeWindChargeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractWindCharge>, arg1: j_net_minecraft_world_level.Level): BreezeWindCharge;
  new(arg0: j_net_minecraft_world_entity_monster_breeze.Breeze, arg1: j_net_minecraft_world_level.Level): BreezeWindCharge;
}

/** JVM class net.minecraft.world.entity.projectile.windcharge.WindCharge. */
export interface WindChargeMembers {
  readonly __javaSupertypes?: readonly [AbstractWindCharge];
  deflect(arg0: j_net_minecraft_world_entity_projectile.ProjectileDeflection, arg1: j_net_minecraft_world_entity.Entity | null, arg2: j_net_minecraft_world_entity.Entity | null, arg3: boolean): boolean | null;
  explode(arg0: j_net_minecraft_world_phys.Vec3): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  tick(): void;
}
export type WindCharge = WindChargeMembers & AbstractWindCharge;
export interface WindChargeStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<AbstractWindCharge>, arg1: j_net_minecraft_world_level.Level): WindCharge;
  new(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.Level, arg2: number, arg3: number, arg4: number): WindCharge;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_phys.Vec3): WindCharge;
}
