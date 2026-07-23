// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';

/** JVM class net.minecraft.world.level.dimension.BuiltinDimensionTypes. */
export interface BuiltinDimensionTypesMembers {
}
export type BuiltinDimensionTypes = BuiltinDimensionTypesMembers;
export interface BuiltinDimensionTypesStatics {
  new(): BuiltinDimensionTypes;
  readonly END: j_net_minecraft_resources.ResourceKey<DimensionType>;
  readonly END_EFFECTS: j_net_minecraft_resources.ResourceLocation;
  readonly NETHER: j_net_minecraft_resources.ResourceKey<DimensionType>;
  readonly NETHER_EFFECTS: j_net_minecraft_resources.ResourceLocation;
  readonly OVERWORLD: j_net_minecraft_resources.ResourceKey<DimensionType>;
  readonly OVERWORLD_CAVES: j_net_minecraft_resources.ResourceKey<DimensionType>;
  readonly OVERWORLD_EFFECTS: j_net_minecraft_resources.ResourceLocation;
}

/** JVM class net.minecraft.world.level.dimension.DimensionDefaults. */
export interface DimensionDefaultsMembers {
}
export type DimensionDefaults = DimensionDefaultsMembers;
export interface DimensionDefaultsStatics {
  new(): DimensionDefaults;
  readonly CLOUD_THICKNESS: 4;
  readonly END_GENERATION_HEIGHT: 128;
  readonly END_ISLAND_BASE_Y: 63;
  readonly END_LEVEL_HEIGHT: 256;
  readonly END_LOGICAL_HEIGHT: 256;
  readonly END_MIN_Y: 0;
  readonly NETHER_GENERATION_HEIGHT: 128;
  readonly NETHER_LEVEL_HEIGHT: 256;
  readonly NETHER_LOGICAL_HEIGHT: 128;
  readonly NETHER_MIN_Y: 0;
  readonly OVERWORLD_CLOUD_HEIGHT: 192;
  readonly OVERWORLD_GENERATION_HEIGHT: 384;
  readonly OVERWORLD_LEVEL_HEIGHT: 384;
  readonly OVERWORLD_LOGICAL_HEIGHT: 384;
  readonly OVERWORLD_MIN_Y: -64;
}

/** JVM record net.minecraft.world.level.dimension.DimensionType. */
export interface DimensionTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  ambientLight(): number;
  bedWorks(): boolean;
  cloudHeight(): JavaOptional<number>;
  coordinateScale(): number;
  effectsLocation(): j_net_minecraft_resources.ResourceLocation;
  equals(arg0: object): boolean;
  fixedTime(): JavaOptionalBigInt;
  hasCeiling(): boolean;
  hasFixedTime(): boolean;
  hasRaids(): boolean;
  hasSkyLight(): boolean;
  hashCode(): number;
  height(): number;
  infiniburn(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  logicalHeight(): number;
  minY(): number;
  monsterSettings(): DimensionType_MonsterSettings;
  monsterSpawnBlockLightLimit(): number;
  monsterSpawnLightTest(): j_net_minecraft_util_valueproviders.IntProvider;
  moonPhase(arg0: bigint): number;
  natural(): boolean;
  piglinSafe(): boolean;
  respawnAnchorWorks(): boolean;
  timeOfDay(arg0: bigint): number;
  toString(): string;
  ultraWarm(): boolean;
}
export type DimensionType = DimensionTypeMembers & JavaOpaque<"java.lang.Record">;
export interface DimensionTypeStatics {
  new(arg0: JavaOptionalBigInt, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: number, arg11: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg12: j_net_minecraft_resources.ResourceLocation, arg13: number, arg14: JavaOptional<number>, arg15: DimensionType_MonsterSettings): DimensionType;
  readonly BITS_FOR_Y: 12;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<DimensionType>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DimensionType]>;
  readonly MAX_Y: 2031;
  readonly MIN_HEIGHT: 16;
  readonly MIN_Y: -2032;
  readonly MOON_BRIGHTNESS_PER_PHASE: Array<number>;
  readonly MOON_PHASES: 8;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<DimensionType>>;
  readonly WAY_ABOVE_MAX_Y: 32496;
  readonly WAY_BELOW_MIN_Y: -32512;
  readonly Y_SIZE: 4064;
  getStorageFolder(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>, arg1: JavaOpaque<"java.nio.file.Path">): JavaOpaque<"java.nio.file.Path">;
  getTeleportationScale(arg0: DimensionType, arg1: DimensionType): number;
}

/** JVM record net.minecraft.world.level.dimension.DimensionType$MonsterSettings. */
export interface DimensionType_MonsterSettingsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hasRaids(): boolean;
  hashCode(): number;
  monsterSpawnBlockLightLimit(): number;
  monsterSpawnLightTest(): j_net_minecraft_util_valueproviders.IntProvider;
  piglinSafe(): boolean;
  toString(): string;
}
export type DimensionType_MonsterSettings = DimensionType_MonsterSettingsMembers & JavaOpaque<"java.lang.Record">;
export interface DimensionType_MonsterSettingsStatics {
  new(arg0: boolean, arg1: boolean, arg2: j_net_minecraft_util_valueproviders.IntProvider, arg3: number): DimensionType_MonsterSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DimensionType_MonsterSettings]>;
}

/** JVM record net.minecraft.world.level.dimension.LevelStem. */
export interface LevelStemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  generator(): j_net_minecraft_world_level_chunk.ChunkGenerator;
  hashCode(): number;
  toString(): string;
  type(): j_net_minecraft_core.Holder<DimensionType>;
}
export type LevelStem = LevelStemMembers & JavaOpaque<"java.lang.Record">;
export interface LevelStemStatics {
  new(arg0: j_net_minecraft_core.Holder<DimensionType>, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator): LevelStem;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LevelStem]>;
  readonly END: j_net_minecraft_resources.ResourceKey<LevelStem>;
  readonly NETHER: j_net_minecraft_resources.ResourceKey<LevelStem>;
  readonly OVERWORLD: j_net_minecraft_resources.ResourceKey<LevelStem>;
}
