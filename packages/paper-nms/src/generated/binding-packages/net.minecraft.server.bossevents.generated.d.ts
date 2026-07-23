// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';

/** JVM class net.minecraft.server.bossevents.CustomBossEvent. */
export interface CustomBossEventMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server_level.ServerBossEvent];
  addOfflinePlayer(arg0: JavaOpaque<"java.util.UUID">): void;
  addPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  getBukkitEntity(): JavaOpaque<"org.bukkit.boss.KeyedBossBar">;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getMax(): number;
  getTextId(): j_net_minecraft_resources.ResourceLocation;
  getValue(): number;
  onPlayerConnect(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  onPlayerDisconnect(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  pack(): CustomBossEvent_Packed;
  removeAllPlayers(): void;
  removePlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  setMax(arg0: number): void;
  setPlayers(arg0: JavaCollection<j_net_minecraft_server_level.ServerPlayer>): boolean;
  setValue(arg0: number): void;
}
export type CustomBossEvent = CustomBossEventMembers & j_net_minecraft_server_level.ServerBossEvent;
export interface CustomBossEventStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_network_chat.Component): CustomBossEvent;
  load(arg0: j_net_minecraft_resources.ResourceLocation, arg1: CustomBossEvent_Packed): CustomBossEvent;
}

/** JVM record net.minecraft.server.bossevents.CustomBossEvent$Packed. */
export interface CustomBossEvent_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  color(): j_net_minecraft_world.BossEvent_BossBarColor;
  createWorldFog(): boolean;
  darkenScreen(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  max(): number;
  name(): j_net_minecraft_network_chat.Component;
  overlay(): j_net_minecraft_world.BossEvent_BossBarOverlay;
  playBossMusic(): boolean;
  players(): JavaSet<JavaOpaque<"java.util.UUID">>;
  toString(): string;
  value(): number;
  visible(): boolean;
}
export type CustomBossEvent_Packed = CustomBossEvent_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface CustomBossEvent_PackedStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: boolean, arg2: number, arg3: number, arg4: j_net_minecraft_world.BossEvent_BossBarColor, arg5: j_net_minecraft_world.BossEvent_BossBarOverlay, arg6: boolean, arg7: boolean, arg8: boolean, arg9: JavaSet<JavaOpaque<"java.util.UUID">>): CustomBossEvent_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CustomBossEvent_Packed]>;
}

/** JVM class net.minecraft.server.bossevents.CustomBossEvents. */
export interface CustomBossEventsMembers {
  create(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_network_chat.Component): CustomBossEvent;
  get(arg0: j_net_minecraft_resources.ResourceLocation): CustomBossEvent | null;
  getEvents(): JavaCollection<CustomBossEvent>;
  getIds(): JavaCollection<j_net_minecraft_resources.ResourceLocation>;
  load(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_core.HolderLookup_Provider): void;
  onPlayerConnect(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  onPlayerDisconnect(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  remove(arg0: CustomBossEvent): void;
  save(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
}
export type CustomBossEvents = CustomBossEventsMembers;
export interface CustomBossEventsStatics {
  new(): CustomBossEvents;
}
