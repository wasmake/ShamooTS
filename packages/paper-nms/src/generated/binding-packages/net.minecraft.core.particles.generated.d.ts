// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.core.particles.BlockParticleOption. */
export interface BlockParticleOptionMembers {
  readonly __javaSupertypes?: readonly [ParticleOptions];
  getState(): j_net_minecraft_world_level_block_state.BlockState;
  getType(): ParticleType<BlockParticleOption>;
}
export type BlockParticleOption = BlockParticleOptionMembers & ParticleOptions;
export interface BlockParticleOptionStatics {
  new(arg0: ParticleType<BlockParticleOption>, arg1: j_net_minecraft_world_level_block_state.BlockState): BlockParticleOption;
  codec(arg0: ParticleType<BlockParticleOption>): JavaOpaque<"com.mojang.serialization.MapCodec", [BlockParticleOption]>;
  streamCodec(arg0: ParticleType<BlockParticleOption>): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BlockParticleOption>;
}

/** JVM class net.minecraft.core.particles.ColorParticleOption. */
export interface ColorParticleOptionMembers {
  readonly __javaSupertypes?: readonly [ParticleOptions];
  getAlpha(): number;
  getBlue(): number;
  getGreen(): number;
  getRed(): number;
  getType(): ParticleType<ColorParticleOption>;
}
export type ColorParticleOption = ColorParticleOptionMembers & ParticleOptions;
export interface ColorParticleOptionStatics {
  codec(arg0: ParticleType<ColorParticleOption>): JavaOpaque<"com.mojang.serialization.MapCodec", [ColorParticleOption]>;
  create(arg0: ParticleType<ColorParticleOption>, arg1: number, arg2: number, arg3: number): ColorParticleOption;
  create(arg0: ParticleType<ColorParticleOption>, arg1: number): ColorParticleOption;
  streamCodec(arg0: ParticleType<ColorParticleOption>): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ColorParticleOption>;
}

/** JVM class net.minecraft.core.particles.DustColorTransitionOptions. */
export interface DustColorTransitionOptionsMembers {
  readonly __javaSupertypes?: readonly [ScalableParticleOptionsBase];
  getFromColor(): JavaOpaque<"org.joml.Vector3f">;
  getToColor(): JavaOpaque<"org.joml.Vector3f">;
  getType(): ParticleType<DustColorTransitionOptions>;
}
export type DustColorTransitionOptions = DustColorTransitionOptionsMembers & ScalableParticleOptionsBase;
export interface DustColorTransitionOptionsStatics {
  new(arg0: number, arg1: number, arg2: number): DustColorTransitionOptions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DustColorTransitionOptions]>;
  readonly SCULK_PARTICLE_COLOR: 3790560;
  readonly SCULK_TO_REDSTONE: DustColorTransitionOptions;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DustColorTransitionOptions>;
}

/** JVM class net.minecraft.core.particles.DustParticleOptions. */
export interface DustParticleOptionsMembers {
  readonly __javaSupertypes?: readonly [ScalableParticleOptionsBase];
  getColor(): JavaOpaque<"org.joml.Vector3f">;
  getType(): ParticleType<DustParticleOptions>;
}
export type DustParticleOptions = DustParticleOptionsMembers & ScalableParticleOptionsBase;
export interface DustParticleOptionsStatics {
  new(arg0: number, arg1: number): DustParticleOptions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DustParticleOptions]>;
  readonly REDSTONE: DustParticleOptions;
  readonly REDSTONE_PARTICLE_COLOR: 16711680;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DustParticleOptions>;
}

/** JVM class net.minecraft.core.particles.ItemParticleOption. */
export interface ItemParticleOptionMembers {
  readonly __javaSupertypes?: readonly [ParticleOptions];
  getItem(): j_net_minecraft_world_item.ItemStack;
  getType(): ParticleType<ItemParticleOption>;
}
export type ItemParticleOption = ItemParticleOptionMembers & ParticleOptions;
export interface ItemParticleOptionStatics {
  new(arg0: ParticleType<ItemParticleOption>, arg1: j_net_minecraft_world_item.ItemStack): ItemParticleOption;
  codec(arg0: ParticleType<ItemParticleOption>): JavaOpaque<"com.mojang.serialization.MapCodec", [ItemParticleOption]>;
  streamCodec(arg0: ParticleType<ItemParticleOption>): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemParticleOption>;
}

/** JVM class net.minecraft.core.particles.ParticleGroup. */
export interface ParticleGroupMembers {
  getLimit(): number;
}
export type ParticleGroup = ParticleGroupMembers;
export interface ParticleGroupStatics {
  new(arg0: number): ParticleGroup;
  readonly SPORE_BLOSSOM: ParticleGroup;
}

/** JVM interface net.minecraft.core.particles.ParticleOptions. */
export interface ParticleOptionsMembers {
  getType(): ParticleType<object>;
}
export type ParticleOptions = ParticleOptionsMembers;
export interface ParticleOptionsStatics {
}

/** JVM abstract net.minecraft.core.particles.ParticleType. */
export interface ParticleTypeMembers<T /* extends ParticleOptions */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [T]>;
  getOverrideLimiter(): boolean;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type ParticleType<T /* extends ParticleOptions */ = unknown> = ParticleTypeMembers<T>;
export interface ParticleTypeStatics {
}

/** JVM class net.minecraft.core.particles.ParticleTypes. */
export interface ParticleTypesMembers {
}
export type ParticleTypes = ParticleTypesMembers;
export interface ParticleTypesStatics {
  new(): ParticleTypes;
  readonly ANGRY_VILLAGER: SimpleParticleType;
  readonly ASH: SimpleParticleType;
  readonly BLOCK: ParticleType<BlockParticleOption>;
  readonly BLOCK_CRUMBLE: ParticleType<BlockParticleOption>;
  readonly BLOCK_MARKER: ParticleType<BlockParticleOption>;
  readonly BUBBLE: SimpleParticleType;
  readonly BUBBLE_COLUMN_UP: SimpleParticleType;
  readonly BUBBLE_POP: SimpleParticleType;
  readonly CAMPFIRE_COSY_SMOKE: SimpleParticleType;
  readonly CAMPFIRE_SIGNAL_SMOKE: SimpleParticleType;
  readonly CHERRY_LEAVES: SimpleParticleType;
  readonly CLOUD: SimpleParticleType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ParticleOptions]>;
  readonly COMPOSTER: SimpleParticleType;
  readonly CRIMSON_SPORE: SimpleParticleType;
  readonly CRIT: SimpleParticleType;
  readonly CURRENT_DOWN: SimpleParticleType;
  readonly DAMAGE_INDICATOR: SimpleParticleType;
  readonly DOLPHIN: SimpleParticleType;
  readonly DRAGON_BREATH: SimpleParticleType;
  readonly DRIPPING_DRIPSTONE_LAVA: SimpleParticleType;
  readonly DRIPPING_DRIPSTONE_WATER: SimpleParticleType;
  readonly DRIPPING_HONEY: SimpleParticleType;
  readonly DRIPPING_LAVA: SimpleParticleType;
  readonly DRIPPING_OBSIDIAN_TEAR: SimpleParticleType;
  readonly DRIPPING_WATER: SimpleParticleType;
  readonly DUST: ParticleType<DustParticleOptions>;
  readonly DUST_COLOR_TRANSITION: ParticleType<DustColorTransitionOptions>;
  readonly DUST_PILLAR: ParticleType<BlockParticleOption>;
  readonly DUST_PLUME: SimpleParticleType;
  readonly EFFECT: SimpleParticleType;
  readonly EGG_CRACK: SimpleParticleType;
  readonly ELDER_GUARDIAN: SimpleParticleType;
  readonly ELECTRIC_SPARK: SimpleParticleType;
  readonly ENCHANT: SimpleParticleType;
  readonly ENCHANTED_HIT: SimpleParticleType;
  readonly END_ROD: SimpleParticleType;
  readonly ENTITY_EFFECT: ParticleType<ColorParticleOption>;
  readonly EXPLOSION: SimpleParticleType;
  readonly EXPLOSION_EMITTER: SimpleParticleType;
  readonly FALLING_DRIPSTONE_LAVA: SimpleParticleType;
  readonly FALLING_DRIPSTONE_WATER: SimpleParticleType;
  readonly FALLING_DUST: ParticleType<BlockParticleOption>;
  readonly FALLING_HONEY: SimpleParticleType;
  readonly FALLING_LAVA: SimpleParticleType;
  readonly FALLING_NECTAR: SimpleParticleType;
  readonly FALLING_OBSIDIAN_TEAR: SimpleParticleType;
  readonly FALLING_SPORE_BLOSSOM: SimpleParticleType;
  readonly FALLING_WATER: SimpleParticleType;
  readonly FIREFLY: SimpleParticleType;
  readonly FIREWORK: SimpleParticleType;
  readonly FISHING: SimpleParticleType;
  readonly FLAME: SimpleParticleType;
  readonly FLASH: SimpleParticleType;
  readonly GLOW: SimpleParticleType;
  readonly GLOW_SQUID_INK: SimpleParticleType;
  readonly GUST: SimpleParticleType;
  readonly GUST_EMITTER_LARGE: SimpleParticleType;
  readonly GUST_EMITTER_SMALL: SimpleParticleType;
  readonly HAPPY_VILLAGER: SimpleParticleType;
  readonly HEART: SimpleParticleType;
  readonly INFESTED: SimpleParticleType;
  readonly INSTANT_EFFECT: SimpleParticleType;
  readonly ITEM: ParticleType<ItemParticleOption>;
  readonly ITEM_COBWEB: SimpleParticleType;
  readonly ITEM_SLIME: SimpleParticleType;
  readonly ITEM_SNOWBALL: SimpleParticleType;
  readonly LANDING_HONEY: SimpleParticleType;
  readonly LANDING_LAVA: SimpleParticleType;
  readonly LANDING_OBSIDIAN_TEAR: SimpleParticleType;
  readonly LARGE_SMOKE: SimpleParticleType;
  readonly LAVA: SimpleParticleType;
  readonly MYCELIUM: SimpleParticleType;
  readonly NAUTILUS: SimpleParticleType;
  readonly NOTE: SimpleParticleType;
  readonly OMINOUS_SPAWNING: SimpleParticleType;
  readonly PALE_OAK_LEAVES: SimpleParticleType;
  readonly POOF: SimpleParticleType;
  readonly PORTAL: SimpleParticleType;
  readonly RAID_OMEN: SimpleParticleType;
  readonly RAIN: SimpleParticleType;
  readonly REVERSE_PORTAL: SimpleParticleType;
  readonly SCRAPE: SimpleParticleType;
  readonly SCULK_CHARGE: ParticleType<SculkChargeParticleOptions>;
  readonly SCULK_CHARGE_POP: SimpleParticleType;
  readonly SCULK_SOUL: SimpleParticleType;
  readonly SHRIEK: ParticleType<ShriekParticleOption>;
  readonly SMALL_FLAME: SimpleParticleType;
  readonly SMALL_GUST: SimpleParticleType;
  readonly SMOKE: SimpleParticleType;
  readonly SNEEZE: SimpleParticleType;
  readonly SNOWFLAKE: SimpleParticleType;
  readonly SONIC_BOOM: SimpleParticleType;
  readonly SOUL: SimpleParticleType;
  readonly SOUL_FIRE_FLAME: SimpleParticleType;
  readonly SPIT: SimpleParticleType;
  readonly SPLASH: SimpleParticleType;
  readonly SPORE_BLOSSOM_AIR: SimpleParticleType;
  readonly SQUID_INK: SimpleParticleType;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ParticleOptions>;
  readonly SWEEP_ATTACK: SimpleParticleType;
  readonly TINTED_LEAVES: ParticleType<ColorParticleOption>;
  readonly TOTEM_OF_UNDYING: SimpleParticleType;
  readonly TRAIL: ParticleType<TrailParticleOption>;
  readonly TRIAL_OMEN: SimpleParticleType;
  readonly TRIAL_SPAWNER_DETECTED_PLAYER: SimpleParticleType;
  readonly TRIAL_SPAWNER_DETECTED_PLAYER_OMINOUS: SimpleParticleType;
  readonly UNDERWATER: SimpleParticleType;
  readonly VAULT_CONNECTION: SimpleParticleType;
  readonly VIBRATION: ParticleType<VibrationParticleOption>;
  readonly WARPED_SPORE: SimpleParticleType;
  readonly WAX_OFF: SimpleParticleType;
  readonly WAX_ON: SimpleParticleType;
  readonly WHITE_ASH: SimpleParticleType;
  readonly WHITE_SMOKE: SimpleParticleType;
  readonly WITCH: SimpleParticleType;
}

/** JVM abstract net.minecraft.core.particles.ScalableParticleOptionsBase. */
export interface ScalableParticleOptionsBaseMembers {
  readonly __javaSupertypes?: readonly [ParticleOptions];
  getScale(): number;
}
export type ScalableParticleOptionsBase = ScalableParticleOptionsBaseMembers & ParticleOptions;
export interface ScalableParticleOptionsBaseStatics {
  readonly MAX_SCALE: 4;
  readonly MIN_SCALE: 0.01;
}

/** JVM record net.minecraft.core.particles.SculkChargeParticleOptions. */
export interface SculkChargeParticleOptionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ParticleOptions];
  equals(arg0: object): boolean;
  getType(): ParticleType<SculkChargeParticleOptions>;
  hashCode(): number;
  roll(): number;
  toString(): string;
}
export type SculkChargeParticleOptions = SculkChargeParticleOptionsMembers & JavaOpaque<"java.lang.Record"> & ParticleOptions;
export interface SculkChargeParticleOptionsStatics {
  new(arg0: number): SculkChargeParticleOptions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SculkChargeParticleOptions]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SculkChargeParticleOptions>;
}

/** JVM class net.minecraft.core.particles.ShriekParticleOption. */
export interface ShriekParticleOptionMembers {
  readonly __javaSupertypes?: readonly [ParticleOptions];
  getDelay(): number;
  getType(): ParticleType<ShriekParticleOption>;
}
export type ShriekParticleOption = ShriekParticleOptionMembers & ParticleOptions;
export interface ShriekParticleOptionStatics {
  new(arg0: number): ShriekParticleOption;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShriekParticleOption]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ShriekParticleOption>;
}

/** JVM class net.minecraft.core.particles.SimpleParticleType. */
export interface SimpleParticleTypeMembers {
  readonly __javaSupertypes?: readonly [ParticleType<SimpleParticleType>, ParticleOptions];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SimpleParticleType]>;
  getOverrideLimiter(): boolean;
  getType(): ParticleType<object>;
  getType(): SimpleParticleType;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SimpleParticleType>;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SimpleParticleType>;
}
export type SimpleParticleType = SimpleParticleTypeMembers & ParticleOptions;
export interface SimpleParticleTypeStatics {
}

/** JVM record net.minecraft.core.particles.TrailParticleOption. */
export interface TrailParticleOptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ParticleOptions];
  color(): number;
  duration(): number;
  equals(arg0: object): boolean;
  getType(): ParticleType<TrailParticleOption>;
  hashCode(): number;
  target(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
}
export type TrailParticleOption = TrailParticleOptionMembers & JavaOpaque<"java.lang.Record"> & ParticleOptions;
export interface TrailParticleOptionStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): TrailParticleOption;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrailParticleOption]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TrailParticleOption>;
}

/** JVM class net.minecraft.core.particles.VibrationParticleOption. */
export interface VibrationParticleOptionMembers {
  readonly __javaSupertypes?: readonly [ParticleOptions];
  getArrivalInTicks(): number;
  getDestination(): j_net_minecraft_world_level_gameevent.PositionSource;
  getType(): ParticleType<VibrationParticleOption>;
}
export type VibrationParticleOption = VibrationParticleOptionMembers & ParticleOptions;
export interface VibrationParticleOptionStatics {
  new(arg0: j_net_minecraft_world_level_gameevent.PositionSource, arg1: number): VibrationParticleOption;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [VibrationParticleOption]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, VibrationParticleOption>;
}
