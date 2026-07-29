// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon from './net.minecraft.world.entity.boss.enderdragon.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';

/** JVM class net.minecraft.world.entity.boss.EnderDragonPart. */
export interface EnderDragonPartMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.Entity];
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getPickResult(): j_net_minecraft_world_item.ItemStack | null;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  is(arg0: j_net_minecraft_world_entity.Entity): boolean;
  isPickable(): boolean;
  readonly name: string;
  readonly parentMob: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon;
  shouldBeSaved(): boolean;
}
export type EnderDragonPart = EnderDragonPartMembers & j_net_minecraft_world_entity.Entity;
export interface EnderDragonPartStatics {
  new(arg0: j_net_minecraft_world_entity_boss_enderdragon.EnderDragon, arg1: string, arg2: number, arg3: number): EnderDragonPart;
}
