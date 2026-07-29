// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';

/** JVM class net.minecraft.world.level.material.EmptyFluid. */
export interface EmptyFluidMembers {
  readonly __javaSupertypes?: readonly [Fluid];
  canBeReplacedWith(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: Fluid, arg4: j_net_minecraft_core.Direction): boolean;
  getAmount(arg0: FluidState): number;
  getBucket(): j_net_minecraft_world_item.Item;
  getFlow(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: FluidState): j_net_minecraft_world_phys.Vec3;
  getHeight(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getOwnHeight(arg0: FluidState): number;
  getShape(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getTickDelay(arg0: j_net_minecraft_world_level.LevelReader): number;
  isSource(arg0: FluidState): boolean;
}
export type EmptyFluid = EmptyFluidMembers & Fluid;
export interface EmptyFluidStatics {
  new(): EmptyFluid;
}

/** JVM abstract net.minecraft.world.level.material.FlowingFluid. */
export interface FlowingFluidMembers {
  readonly __javaSupertypes?: readonly [Fluid];
  getAmount(arg0: FluidState): number;
  getFlow(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: FluidState): j_net_minecraft_world_phys.Vec3;
  getFlowing(): Fluid;
  getFlowing(arg0: number, arg1: boolean): FluidState;
  getHeight(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getOwnHeight(arg0: FluidState): number;
  getShape(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getSource(): Fluid;
  getSource(arg0: boolean): FluidState;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: FluidState): void;
}
export type FlowingFluid = FlowingFluidMembers & Fluid;
export interface FlowingFluidStatics {
  readonly FALLING: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
}

/** JVM class net.minecraft.world.level.material.FlowingFluid$SpreadContext. */
export interface FlowingFluid_SpreadContextMembers {
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateIfLoaded(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState | null;
  isHole(arg0: j_net_minecraft_core.BlockPos): boolean;
}
export type FlowingFluid_SpreadContext = FlowingFluid_SpreadContextMembers;
export interface FlowingFluid_SpreadContextStatics {
}

/** JVM abstract net.minecraft.world.level.material.Fluid. */
export interface FluidMembers {
  builtInRegistryHolder(): j_net_minecraft_core.Holder_Reference<Fluid>;
  defaultFluidState(): FluidState;
  getAABB(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.AABB | null;
  getAmount(arg0: FluidState): number;
  getBucket(): j_net_minecraft_world_item.Item;
  getHeight(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getOwnHeight(arg0: FluidState): number;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  getShape(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getStateDefinition(): j_net_minecraft_world_level_block_state.StateDefinition<Fluid, FluidState>;
  getTickDelay(arg0: j_net_minecraft_world_level.LevelReader): number;
  is(arg0: j_net_minecraft_tags.TagKey<Fluid>): boolean;
  isSame(arg0: Fluid): boolean;
  isSource(arg0: FluidState): boolean;
}
export type Fluid = FluidMembers;
export interface FluidStatics {
  readonly FLUID_STATE_REGISTRY: j_net_minecraft_core.IdMapper<FluidState>;
}

/** JVM class net.minecraft.world.level.material.Fluids. */
export interface FluidsMembers {
}
export type Fluids = FluidsMembers;
export interface FluidsStatics {
  new(): Fluids;
  readonly EMPTY: Fluid;
  readonly FLOWING_LAVA: FlowingFluid;
  readonly FLOWING_WATER: FlowingFluid;
  readonly LAVA: FlowingFluid;
  readonly WATER: FlowingFluid;
}

/** JVM class net.minecraft.world.level.material.FluidState. */
export interface FluidStateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block_state.StateHolder<Fluid, FluidState>, JavaOpaque<"ca.spottedleaf.moonrise.patches.fluid.FluidFluidState">];
  animateTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  canBeReplacedWith(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: Fluid, arg3: j_net_minecraft_core.Direction): boolean;
  createLegacyBlock(): j_net_minecraft_world_level_block_state.BlockState;
  cycle<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): FluidState;
  entityInside(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.InsideBlockEffectApplier): void;
  equals(arg0: object): boolean;
  getAABB(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.AABB | null;
  getAmount(): number;
  getDripParticle(): j_net_minecraft_core_particles.ParticleOptions | null;
  getExplosionResistance(): number;
  getFlow(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3;
  getHeight(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  getOptionalValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): JavaOptional<T>;
  getOwnHeight(): number;
  getProperties(): JavaCollection<j_net_minecraft_world_level_block_state_properties.Property<object>>;
  getShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getTags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<Fluid>]>;
  getType(): Fluid;
  getValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): T;
  getValueOrElse<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: T): T;
  getValues(): JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<object>): boolean;
  hashCode(): number;
  holder(): j_net_minecraft_core.Holder<Fluid>;
  is(arg0: j_net_minecraft_core.HolderSet<Fluid>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<Fluid>): boolean;
  is(arg0: Fluid): boolean;
  isEmpty(): boolean;
  isRandomlyTicking(): boolean;
  isSource(): boolean;
  isSourceOfType(arg0: Fluid): boolean;
  moonrise$getTableIndex(): bigint;
  moonrise$initCaches(): void;
  populateNeighbours(arg0: JavaMap<JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>, FluidState>): void;
  randomTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  setValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): FluidState;
  shouldRenderBackwardUpFace(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  toString(): string;
  trySetValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): FluidState;
}
export type FluidState = FluidStateMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.fluid.FluidFluidState">;
export interface FluidStateStatics {
  new(arg0: Fluid, arg1: JavaOpaque<"it.unimi.dsi.fastutil.objects.Reference2ObjectArrayMap", [j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>]>, arg2: JavaOpaque<"com.mojang.serialization.MapCodec", [FluidState]>): FluidState;
  readonly AMOUNT_FULL: 8;
  readonly AMOUNT_MAX: 9;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FluidState]>;
}

/** Live JVM enum net.minecraft.world.level.material.FogType; constants are host handles, not strings. */
export type FogType = JavaEnum<"net.minecraft.world.level.material.FogType", "ATMOSPHERIC" | "DIMENSION_OR_BOSS" | "LAVA" | "NONE" | "POWDER_SNOW" | "WATER"> & FogTypeMembers;
export interface FogTypeMembers {
}
export interface FogTypeStatics {
  readonly ATMOSPHERIC: FogType;
  readonly DIMENSION_OR_BOSS: FogType;
  readonly LAVA: FogType;
  readonly NONE: FogType;
  readonly POWDER_SNOW: FogType;
  readonly WATER: FogType;
  valueOf(arg0: string): FogType;
  values(): Array<FogType>;
}

/** JVM abstract net.minecraft.world.level.material.LavaFluid. */
export interface LavaFluidMembers {
  readonly __javaSupertypes?: readonly [FlowingFluid];
  animateTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: FluidState, arg3: j_net_minecraft_util.RandomSource): void;
  canBeReplacedWith(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: Fluid, arg4: j_net_minecraft_core.Direction): boolean;
  createLegacyBlock(arg0: FluidState): j_net_minecraft_world_level_block_state.BlockState;
  getBucket(): j_net_minecraft_world_item.Item;
  getDripParticle(): j_net_minecraft_core_particles.ParticleOptions | null;
  getDropOff(arg0: j_net_minecraft_world_level.LevelReader): number;
  getFlowing(): Fluid;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  getSlopeFindDistance(arg0: j_net_minecraft_world_level.LevelReader): number;
  getSource(): Fluid;
  getSpreadDelay(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: FluidState, arg3: FluidState): number;
  getTickDelay(arg0: j_net_minecraft_world_level.LevelReader): number;
  isSame(arg0: Fluid): boolean;
  randomTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: FluidState, arg3: j_net_minecraft_util.RandomSource): void;
}
export type LavaFluid = LavaFluidMembers & FlowingFluid;
export interface LavaFluidStatics {
  readonly MIN_LEVEL_CUTOFF: 0.44444445;
}

/** JVM class net.minecraft.world.level.material.LavaFluid$Flowing. */
export interface LavaFluid_FlowingMembers {
  readonly __javaSupertypes?: readonly [LavaFluid];
  getAmount(arg0: FluidState): number;
  isSource(arg0: FluidState): boolean;
}
export type LavaFluid_Flowing = LavaFluid_FlowingMembers & LavaFluid;
export interface LavaFluid_FlowingStatics {
  new(): LavaFluid_Flowing;
}

/** JVM class net.minecraft.world.level.material.LavaFluid$Source. */
export interface LavaFluid_SourceMembers {
  readonly __javaSupertypes?: readonly [LavaFluid];
  getAmount(arg0: FluidState): number;
  isSource(arg0: FluidState): boolean;
}
export type LavaFluid_Source = LavaFluid_SourceMembers & LavaFluid;
export interface LavaFluid_SourceStatics {
  new(): LavaFluid_Source;
}

/** JVM class net.minecraft.world.level.material.MapColor. */
export interface MapColorMembers {
  calculateARGBColor(arg0: MapColor_Brightness): number;
  readonly col: number;
  getPackedId(arg0: MapColor_Brightness): number;
  readonly id: number;
}
export type MapColor = MapColorMembers;
export interface MapColorStatics {
  readonly CLAY: MapColor;
  readonly COLOR_BLACK: MapColor;
  readonly COLOR_BLUE: MapColor;
  readonly COLOR_BROWN: MapColor;
  readonly COLOR_CYAN: MapColor;
  readonly COLOR_GRAY: MapColor;
  readonly COLOR_GREEN: MapColor;
  readonly COLOR_LIGHT_BLUE: MapColor;
  readonly COLOR_LIGHT_GRAY: MapColor;
  readonly COLOR_LIGHT_GREEN: MapColor;
  readonly COLOR_MAGENTA: MapColor;
  readonly COLOR_ORANGE: MapColor;
  readonly COLOR_PINK: MapColor;
  readonly COLOR_PURPLE: MapColor;
  readonly COLOR_RED: MapColor;
  readonly COLOR_YELLOW: MapColor;
  readonly CRIMSON_HYPHAE: MapColor;
  readonly CRIMSON_NYLIUM: MapColor;
  readonly CRIMSON_STEM: MapColor;
  readonly DEEPSLATE: MapColor;
  readonly DIAMOND: MapColor;
  readonly DIRT: MapColor;
  readonly EMERALD: MapColor;
  readonly FIRE: MapColor;
  readonly GLOW_LICHEN: MapColor;
  readonly GOLD: MapColor;
  readonly GRASS: MapColor;
  readonly ICE: MapColor;
  readonly LAPIS: MapColor;
  readonly MATERIAL_COLORS: Array<MapColor>;
  readonly METAL: MapColor;
  readonly NETHER: MapColor;
  readonly NONE: MapColor;
  readonly PLANT: MapColor;
  readonly PODZOL: MapColor;
  readonly QUARTZ: MapColor;
  readonly RAW_IRON: MapColor;
  readonly SAND: MapColor;
  readonly SNOW: MapColor;
  readonly STONE: MapColor;
  readonly TERRACOTTA_BLACK: MapColor;
  readonly TERRACOTTA_BLUE: MapColor;
  readonly TERRACOTTA_BROWN: MapColor;
  readonly TERRACOTTA_CYAN: MapColor;
  readonly TERRACOTTA_GRAY: MapColor;
  readonly TERRACOTTA_GREEN: MapColor;
  readonly TERRACOTTA_LIGHT_BLUE: MapColor;
  readonly TERRACOTTA_LIGHT_GRAY: MapColor;
  readonly TERRACOTTA_LIGHT_GREEN: MapColor;
  readonly TERRACOTTA_MAGENTA: MapColor;
  readonly TERRACOTTA_ORANGE: MapColor;
  readonly TERRACOTTA_PINK: MapColor;
  readonly TERRACOTTA_PURPLE: MapColor;
  readonly TERRACOTTA_RED: MapColor;
  readonly TERRACOTTA_WHITE: MapColor;
  readonly TERRACOTTA_YELLOW: MapColor;
  readonly WARPED_HYPHAE: MapColor;
  readonly WARPED_NYLIUM: MapColor;
  readonly WARPED_STEM: MapColor;
  readonly WARPED_WART_BLOCK: MapColor;
  readonly WATER: MapColor;
  readonly WOOD: MapColor;
  readonly WOOL: MapColor;
  byId(arg0: number): MapColor;
  getColorFromPackedId(arg0: number): number;
}

/** Live JVM enum net.minecraft.world.level.material.MapColor$Brightness; constants are host handles, not strings. */
export type MapColor_Brightness = JavaEnum<"net.minecraft.world.level.material.MapColor$Brightness", "HIGH" | "LOWEST" | "LOW" | "NORMAL"> & MapColor_BrightnessMembers;
export interface MapColor_BrightnessMembers {
  readonly id: number;
  readonly modifier: number;
}
export interface MapColor_BrightnessStatics {
  readonly HIGH: MapColor_Brightness;
  readonly LOWEST: MapColor_Brightness;
  readonly LOW: MapColor_Brightness;
  readonly NORMAL: MapColor_Brightness;
  byId(arg0: number): MapColor_Brightness;
  valueOf(arg0: string): MapColor_Brightness;
  values(): Array<MapColor_Brightness>;
}

/** Live JVM enum net.minecraft.world.level.material.PushReaction; constants are host handles, not strings. */
export type PushReaction = JavaEnum<"net.minecraft.world.level.material.PushReaction", "BLOCK" | "DESTROY" | "IGNORE" | "NORMAL" | "PUSH_ONLY"> & PushReactionMembers;
export interface PushReactionMembers {
}
export interface PushReactionStatics {
  readonly BLOCK: PushReaction;
  readonly DESTROY: PushReaction;
  readonly IGNORE: PushReaction;
  readonly NORMAL: PushReaction;
  readonly PUSH_ONLY: PushReaction;
  valueOf(arg0: string): PushReaction;
  values(): Array<PushReaction>;
}

/** JVM abstract net.minecraft.world.level.material.WaterFluid. */
export interface WaterFluidMembers {
  readonly __javaSupertypes?: readonly [FlowingFluid];
  animateTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: FluidState, arg3: j_net_minecraft_util.RandomSource): void;
  canBeReplacedWith(arg0: FluidState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: Fluid, arg4: j_net_minecraft_core.Direction): boolean;
  createLegacyBlock(arg0: FluidState): j_net_minecraft_world_level_block_state.BlockState;
  getBucket(): j_net_minecraft_world_item.Item;
  getDripParticle(): j_net_minecraft_core_particles.ParticleOptions | null;
  getDropOff(arg0: j_net_minecraft_world_level.LevelReader): number;
  getFlowing(): Fluid;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  getSlopeFindDistance(arg0: j_net_minecraft_world_level.LevelReader): number;
  getSource(): Fluid;
  getTickDelay(arg0: j_net_minecraft_world_level.LevelReader): number;
  isSame(arg0: Fluid): boolean;
}
export type WaterFluid = WaterFluidMembers & FlowingFluid;
export interface WaterFluidStatics {
}

/** JVM class net.minecraft.world.level.material.WaterFluid$Flowing. */
export interface WaterFluid_FlowingMembers {
  readonly __javaSupertypes?: readonly [WaterFluid];
  getAmount(arg0: FluidState): number;
  isSource(arg0: FluidState): boolean;
}
export type WaterFluid_Flowing = WaterFluid_FlowingMembers & WaterFluid;
export interface WaterFluid_FlowingStatics {
  new(): WaterFluid_Flowing;
}

/** JVM class net.minecraft.world.level.material.WaterFluid$Source. */
export interface WaterFluid_SourceMembers {
  readonly __javaSupertypes?: readonly [WaterFluid];
  getAmount(arg0: FluidState): number;
  isSource(arg0: FluidState): boolean;
}
export type WaterFluid_Source = WaterFluid_SourceMembers & WaterFluid;
export interface WaterFluid_SourceStatics {
  new(): WaterFluid_Source;
}
