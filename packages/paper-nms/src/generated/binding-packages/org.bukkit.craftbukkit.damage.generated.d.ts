// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';

/** JVM class org.bukkit.craftbukkit.damage.CraftDamageEffect. */
export interface CraftDamageEffectMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.damage.DamageEffect">];
  getHandle(): j_net_minecraft_world_damagesource.DamageEffects;
  getSound(): JavaOpaque<"org.bukkit.Sound">;
}
export type CraftDamageEffect = CraftDamageEffectMembers & JavaOpaque<"org.bukkit.damage.DamageEffect">;
export interface CraftDamageEffectStatics {
  new(arg0: j_net_minecraft_world_damagesource.DamageEffects): CraftDamageEffect;
  getById(arg0: string): JavaOpaque<"org.bukkit.damage.DamageEffect">;
  toBukkit(arg0: j_net_minecraft_world_damagesource.DamageEffects): JavaOpaque<"org.bukkit.damage.DamageEffect">;
}

/** JVM class org.bukkit.craftbukkit.damage.CraftDamageSource. */
export interface CraftDamageSourceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.damage.DamageSource">];
  equals(arg0: object): boolean;
  getCausingEntity(): JavaOpaque<"org.bukkit.entity.Entity">;
  getCausingEntityWorld(): JavaOpaque<"org.bukkit.World">;
  getDamageLocation(): JavaOpaque<"org.bukkit.Location">;
  getDamageType(): JavaOpaque<"org.bukkit.damage.DamageType">;
  getDirectEntity(): JavaOpaque<"org.bukkit.entity.Entity">;
  getFoodExhaustion(): number;
  getHandle(): j_net_minecraft_world_damagesource.DamageSource;
  getSourceLocation(): JavaOpaque<"org.bukkit.Location">;
  hashCode(): number;
  isIndirect(): boolean;
  scalesWithDifficulty(): boolean;
  toString(): string;
}
export type CraftDamageSource = CraftDamageSourceMembers & JavaOpaque<"org.bukkit.damage.DamageSource">;
export interface CraftDamageSourceStatics {
  new(arg0: j_net_minecraft_world_damagesource.DamageSource): CraftDamageSource;
  buildFromBukkit(arg0: JavaOpaque<"org.bukkit.damage.DamageType">, arg1: JavaOpaque<"org.bukkit.entity.Entity">, arg2: JavaOpaque<"org.bukkit.entity.Entity">, arg3: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.damage.DamageSource">;
}

/** JVM class org.bukkit.craftbukkit.damage.CraftDamageSourceBuilder. */
export interface CraftDamageSourceBuilderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.damage.DamageSource$Builder">];
  build(): JavaOpaque<"org.bukkit.damage.DamageSource">;
  withCausingEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): JavaOpaque<"org.bukkit.damage.DamageSource$Builder">;
  withDamageLocation(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.damage.DamageSource$Builder">;
  withDirectEntity(arg0: JavaOpaque<"org.bukkit.entity.Entity">): JavaOpaque<"org.bukkit.damage.DamageSource$Builder">;
}
export type CraftDamageSourceBuilder = CraftDamageSourceBuilderMembers & JavaOpaque<"org.bukkit.damage.DamageSource$Builder">;
export interface CraftDamageSourceBuilderStatics {
  new(arg0: JavaOpaque<"org.bukkit.damage.DamageType">): CraftDamageSourceBuilder;
}

/** JVM class org.bukkit.craftbukkit.damage.CraftDamageType. */
export interface CraftDamageTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_damagesource.DamageType]>, JavaOpaque<"org.bukkit.damage.DamageType">];
  getDamageEffect(): JavaOpaque<"org.bukkit.damage.DamageEffect">;
  getDamageScaling(): JavaOpaque<"org.bukkit.damage.DamageScaling">;
  getDeathMessageType(): JavaOpaque<"org.bukkit.damage.DeathMessageType">;
  getExhaustion(): number;
  getTranslationKey(): string;
}
export type CraftDamageType = CraftDamageTypeMembers & JavaOpaque<"io.papermc.paper.registry.HolderableBase", [j_net_minecraft_world_damagesource.DamageType]> & JavaOpaque<"org.bukkit.damage.DamageType">;
export interface CraftDamageTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>): CraftDamageType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.damage.DamageType">): j_net_minecraft_world_damagesource.DamageType;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.damage.DamageType">): j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>;
  damageScalingToBukkit(arg0: j_net_minecraft_world_damagesource.DamageScaling): JavaOpaque<"org.bukkit.damage.DamageScaling">;
  damageScalingToNMS(arg0: JavaOpaque<"org.bukkit.damage.DamageScaling">): j_net_minecraft_world_damagesource.DamageScaling;
  deathMessageTypeToBukkit(arg0: j_net_minecraft_world_damagesource.DeathMessageType): JavaOpaque<"org.bukkit.damage.DeathMessageType">;
  deathMessageTypeToNMS(arg0: JavaOpaque<"org.bukkit.damage.DeathMessageType">): j_net_minecraft_world_damagesource.DeathMessageType;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_damagesource.DamageType>): JavaOpaque<"org.bukkit.damage.DamageType">;
  minecraftToBukkit(arg0: j_net_minecraft_world_damagesource.DamageType): JavaOpaque<"org.bukkit.damage.DamageType">;
}
