// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_cauldron from './net.minecraft.core.cauldron.generated.js';
import type * as j_net_minecraft_core_dispenser from './net.minecraft.core.dispenser.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_context from './net.minecraft.world.item.context.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_entity_trialspawner from './net.minecraft.world.level.block.entity.trialspawner.generated.js';
import type * as j_net_minecraft_world_level_block_entity_vault from './net.minecraft.world.level.block.entity.vault.generated.js';
import type * as j_net_minecraft_world_level_block_grower from './net.minecraft.world.level.block.grower.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_pattern from './net.minecraft.world.level.block.state.pattern.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem from './net.minecraft.world.level.levelgen.structure.templatesystem.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_portal from './net.minecraft.world.level.portal.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';

/** JVM abstract net.minecraft.world.level.block.AbstractBannerBlock. */
export interface AbstractBannerBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  getColor(): j_net_minecraft_world_item.DyeColor;
  isPossibleToRespawnInThis(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type AbstractBannerBlock = AbstractBannerBlockMembers & BaseEntityBlock;
export interface AbstractBannerBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.AbstractCandleBlock. */
export interface AbstractCandleBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
}
export type AbstractCandleBlock = AbstractCandleBlockMembers & Block;
export interface AbstractCandleBlockStatics {
  readonly LIGHT_PER_CANDLE: 3;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  extinguish(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.LevelAccessor, arg3: j_net_minecraft_core.BlockPos): void;
  isLit(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM abstract net.minecraft.world.level.block.AbstractCauldronBlock. */
export interface AbstractCauldronBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  isFull(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type AbstractCauldronBlock = AbstractCauldronBlockMembers & Block;
export interface AbstractCauldronBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.AbstractChestBlock. */
export interface AbstractChestBlockMembers<E /* extends j_net_minecraft_world_level_block_entity.BlockEntity */ = unknown> {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  combine(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): DoubleBlockCombiner_NeighborCombineResult<j_net_minecraft_world_level_block_entity.ChestBlockEntity>;
}
export type AbstractChestBlock<E /* extends j_net_minecraft_world_level_block_entity.BlockEntity */ = unknown> = AbstractChestBlockMembers<E> & BaseEntityBlock;
export interface AbstractChestBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.AbstractFurnaceBlock. */
export interface AbstractFurnaceBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type AbstractFurnaceBlock = AbstractFurnaceBlockMembers & BaseEntityBlock;
export interface AbstractFurnaceBlockStatics {
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM abstract net.minecraft.world.level.block.AbstractSkullBlock. */
export interface AbstractSkullBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  getType(): SkullBlock_Type;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type AbstractSkullBlock = AbstractSkullBlockMembers & BaseEntityBlock;
export interface AbstractSkullBlockStatics {
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.AirBlock. */
export interface AirBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AirBlock]>;
}
export type AirBlock = AirBlockMembers & Block;
export interface AirBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): AirBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AirBlock]>;
}

/** JVM class net.minecraft.world.level.block.AmethystBlock. */
export interface AmethystBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AmethystBlock]>;
}
export type AmethystBlock = AmethystBlockMembers & Block;
export interface AmethystBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): AmethystBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AmethystBlock]>;
}

/** JVM class net.minecraft.world.level.block.AmethystClusterBlock. */
export interface AmethystClusterBlockMembers {
  readonly __javaSupertypes?: readonly [AmethystBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AmethystClusterBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type AmethystClusterBlock = AmethystClusterBlockMembers & AmethystBlock & SimpleWaterloggedBlock;
export interface AmethystClusterBlockStatics {
  new(arg0: number, arg1: number, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): AmethystClusterBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AmethystClusterBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.AnvilBlock. */
export interface AnvilBlockMembers {
  readonly __javaSupertypes?: readonly [FallingBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AnvilBlock]>;
  getDustColor(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getFallDamageSource(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_damagesource.DamageSource;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  onBrokenAfterFall(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
  onLand(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
}
export type AnvilBlock = AnvilBlockMembers & FallingBlock;
export interface AnvilBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): AnvilBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AnvilBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  damage(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState | null;
}

/** JVM class net.minecraft.world.level.block.AttachedStemBlock. */
export interface AttachedStemBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AttachedStemBlock]>;
}
export type AttachedStemBlock = AttachedStemBlockMembers & VegetationBlock;
export interface AttachedStemBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AttachedStemBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.AzaleaBlock. */
export interface AzaleaBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [AzaleaBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type AzaleaBlock = AzaleaBlockMembers & VegetationBlock & BonemealableBlock;
export interface AzaleaBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AzaleaBlock]>;
}

/** JVM class net.minecraft.world.level.block.BambooSaplingBlock. */
export interface BambooSaplingBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BambooSaplingBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BambooSaplingBlock = BambooSaplingBlockMembers & Block & BonemealableBlock;
export interface BambooSaplingBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BambooSaplingBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BambooSaplingBlock]>;
}

/** JVM class net.minecraft.world.level.block.BambooStalkBlock. */
export interface BambooStalkBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BambooStalkBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BambooStalkBlock = BambooStalkBlockMembers & Block & BonemealableBlock;
export interface BambooStalkBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BambooStalkBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly AGE_THICK_BAMBOO: 1;
  readonly AGE_THIN_BAMBOO: 0;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BambooStalkBlock]>;
  readonly LEAVES: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.BambooLeaves>;
  readonly MAX_HEIGHT: 16;
  readonly STAGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly STAGE_DONE_GROWING: 1;
  readonly STAGE_GROWING: 0;
}

/** JVM class net.minecraft.world.level.block.BannerBlock. */
export interface BannerBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractBannerBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BannerBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type BannerBlock = BannerBlockMembers & AbstractBannerBlock;
export interface BannerBlockStatics {
  new(arg0: j_net_minecraft_world_item.DyeColor, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BannerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BannerBlock]>;
  readonly ROTATION: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  byColor(arg0: j_net_minecraft_world_item.DyeColor): Block;
}

/** JVM class net.minecraft.world.level.block.BarrelBlock. */
export interface BarrelBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BarrelBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type BarrelBlock = BarrelBlockMembers & BaseEntityBlock;
export interface BarrelBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BarrelBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BarrelBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly OPEN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.BarrierBlock. */
export interface BarrierBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BarrierBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  pickupBlock(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_item.ItemStack;
}
export type BarrierBlock = BarrierBlockMembers & Block & SimpleWaterloggedBlock;
export interface BarrierBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BarrierBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.BaseCoralFanBlock. */
export interface BaseCoralFanBlockMembers {
  readonly __javaSupertypes?: readonly [BaseCoralPlantTypeBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BaseCoralFanBlock]>;
}
export type BaseCoralFanBlock = BaseCoralFanBlockMembers & BaseCoralPlantTypeBlock;
export interface BaseCoralFanBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BaseCoralFanBlock]>;
}

/** JVM class net.minecraft.world.level.block.BaseCoralPlantBlock. */
export interface BaseCoralPlantBlockMembers {
  readonly __javaSupertypes?: readonly [BaseCoralPlantTypeBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BaseCoralPlantBlock]>;
}
export type BaseCoralPlantBlock = BaseCoralPlantBlockMembers & BaseCoralPlantTypeBlock;
export interface BaseCoralPlantBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BaseCoralPlantBlock]>;
}

/** JVM abstract net.minecraft.world.level.block.BaseCoralPlantTypeBlock. */
export interface BaseCoralPlantTypeBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type BaseCoralPlantTypeBlock = BaseCoralPlantTypeBlockMembers & Block & SimpleWaterloggedBlock;
export interface BaseCoralPlantTypeBlockStatics {
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.BaseCoralWallFanBlock. */
export interface BaseCoralWallFanBlockMembers {
  readonly __javaSupertypes?: readonly [BaseCoralFanBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BaseCoralWallFanBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type BaseCoralWallFanBlock = BaseCoralWallFanBlockMembers & BaseCoralFanBlock;
export interface BaseCoralWallFanBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BaseCoralWallFanBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM abstract net.minecraft.world.level.block.BaseEntityBlock. */
export interface BaseEntityBlockMembers {
  readonly __javaSupertypes?: readonly [Block, EntityBlock];
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
}
export type BaseEntityBlock = BaseEntityBlockMembers & Block & EntityBlock;
export interface BaseEntityBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.BaseFireBlock. */
export interface BaseFireBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
}
export type BaseFireBlock = BaseFireBlockMembers & Block;
export interface BaseFireBlockStatics {
  canBePlacedAt(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
  fireIgnite(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.BlockPos): void;
  getState(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM abstract net.minecraft.world.level.block.BasePressurePlateBlock. */
export interface BasePressurePlateBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  isPossibleToRespawnInThis(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type BasePressurePlateBlock = BasePressurePlateBlockMembers & Block;
export interface BasePressurePlateBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.BaseRailBlock. */
export interface BaseRailBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  getShapeProperty(): j_net_minecraft_world_level_block_state_properties.Property<j_net_minecraft_world_level_block_state_properties.RailShape>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  isStraight(): boolean;
}
export type BaseRailBlock = BaseRailBlockMembers & Block & SimpleWaterloggedBlock;
export interface BaseRailBlockStatics {
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  isRail(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): boolean;
  isRail(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM abstract net.minecraft.world.level.block.BaseTorchBlock. */
export interface BaseTorchBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
}
export type BaseTorchBlock = BaseTorchBlockMembers & Block;
export interface BaseTorchBlockStatics {
}

/** JVM interface net.minecraft.world.level.block.BeaconBeamBlock. */
export interface BeaconBeamBlockMembers {
  getColor(): j_net_minecraft_world_item.DyeColor;
}
export type BeaconBeamBlock = BeaconBeamBlockMembers;
export interface BeaconBeamBlockStatics {
}

/** JVM class net.minecraft.world.level.block.BeaconBlock. */
export interface BeaconBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, BeaconBeamBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BeaconBlock]>;
  getColor(): j_net_minecraft_world_item.DyeColor;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type BeaconBlock = BeaconBlockMembers & BaseEntityBlock & BeaconBeamBlock;
export interface BeaconBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BeaconBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BeaconBlock]>;
}

/** JVM class net.minecraft.world.level.block.BedBlock. */
export interface BedBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock, EntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BedBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  getColor(): j_net_minecraft_world_item.DyeColor;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
  updateEntityMovementAfterFallOn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_world_entity.Entity): void;
}
export type BedBlock = BedBlockMembers & HorizontalDirectionalBlock & EntityBlock;
export interface BedBlockStatics {
  new(arg0: j_net_minecraft_world_item.DyeColor, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BedBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BedBlock]>;
  readonly OCCUPIED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly PART: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.BedPart>;
  canSetSpawn(arg0: j_net_minecraft_world_level.Level): boolean;
  findStandUpPosition(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.CollisionGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: number): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  getBedOrientation(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.Direction | null;
  getBlockType(arg0: j_net_minecraft_world_level_block_state.BlockState): DoubleBlockCombiner_BlockType;
  getConnectedDirection(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_core.Direction;
}

/** JVM class net.minecraft.world.level.block.BeehiveBlock. */
export interface BeehiveBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BeehiveBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  playerDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg5: j_net_minecraft_world_item.ItemStack, arg6: boolean, arg7: boolean): void;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  releaseBeesAndResetHoneyLevel(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player | null, arg4: j_net_minecraft_world_level_block_entity.BeehiveBlockEntity_BeeReleaseStatus): void;
  resetHoneyLevel(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos): void;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}
export type BeehiveBlock = BeehiveBlockMembers & BaseEntityBlock;
export interface BeehiveBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BeehiveBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BeehiveBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly HONEY_LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_HONEY_LEVELS: 5;
  dropHoneycomb(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): void;
}

/** JVM class net.minecraft.world.level.block.BeetrootBlock. */
export interface BeetrootBlockMembers {
  readonly __javaSupertypes?: readonly [CropBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BeetrootBlock]>;
  getMaxAge(): number;
}
export type BeetrootBlock = BeetrootBlockMembers & CropBlock;
export interface BeetrootBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BeetrootBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BeetrootBlock]>;
  readonly MAX_AGE: 3;
}

/** JVM class net.minecraft.world.level.block.BellBlock. */
export interface BellBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  attemptToRing(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction | null): boolean;
  attemptToRing(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction | null): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BellBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  onHit(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_phys.BlockHitResult, arg3: j_net_minecraft_world_entity_player.Player | null, arg4: boolean): boolean;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}
export type BellBlock = BellBlockMembers & BaseEntityBlock;
export interface BellBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BellBlock;
  readonly ATTACHMENT: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.BellAttachType>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BellBlock]>;
  readonly EVENT_BELL_RING: 1;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.BigDripleafBlock. */
export interface BigDripleafBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock, BonemealableBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BigDripleafBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BigDripleafBlock = BigDripleafBlockMembers & HorizontalDirectionalBlock & BonemealableBlock & SimpleWaterloggedBlock;
export interface BigDripleafBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BigDripleafBlock]>;
  placeWithRandomHeight(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): void;
}

/** JVM class net.minecraft.world.level.block.BigDripleafStemBlock. */
export interface BigDripleafStemBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock, BonemealableBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BigDripleafStemBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BigDripleafStemBlock = BigDripleafStemBlockMembers & HorizontalDirectionalBlock & BonemealableBlock & SimpleWaterloggedBlock;
export interface BigDripleafStemBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BigDripleafStemBlock]>;
}

/** JVM class net.minecraft.world.level.block.BlastFurnaceBlock. */
export interface BlastFurnaceBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BlastFurnaceBlock]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type BlastFurnaceBlock = BlastFurnaceBlockMembers & AbstractFurnaceBlock;
export interface BlastFurnaceBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlastFurnaceBlock]>;
}

/** JVM class net.minecraft.world.level.block.Block. */
export interface BlockMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_block_state.BlockBehaviour, j_net_minecraft_world_level.ItemLike];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  asItem(): j_net_minecraft_world_item.Item;
  builtInRegistryHolder(): j_net_minecraft_core.Holder_Reference<Block>;
  defaultBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  destroy(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  dropFromExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
  getExplosionResistance(): number;
  getFriction(): number;
  getJumpFactor(): number;
  getName(): j_net_minecraft_network_chat.MutableComponent;
  getSpeedFactor(): number;
  getStateDefinition(): j_net_minecraft_world_level_block_state.StateDefinition<Block, j_net_minecraft_world_level_block_state.BlockState>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  handlePrecipitation(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_biome.Biome_Precipitation): void;
  hasDynamicShape(): boolean;
  isDestroyable(): boolean;
  isPossibleToRespawnInThis(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  playerDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg5: j_net_minecraft_world_item.ItemStack): void;
  playerDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg5: j_net_minecraft_world_item.ItemStack, arg6: boolean, arg7: boolean): void;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  popExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  popExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: j_net_minecraft_world_entity.Entity | null): void;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
  toString(): string;
  updateEntityMovementAfterFallOn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_world_entity.Entity): void;
  wasExploded(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level.Explosion): void;
  withPropertiesOf(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
}
export type Block = BlockMembers & j_net_minecraft_world_level_block_state.BlockBehaviour & j_net_minecraft_world_level.ItemLike;
export interface BlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): Block;
  readonly BLOCK_STATE_REGISTRY: j_net_minecraft_core.IdMapper<j_net_minecraft_world_level_block_state.BlockState>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Block]>;
  readonly INDESTRUCTIBLE: -1;
  readonly INSTANT: 0;
  readonly UPDATE_ALL: 3;
  readonly UPDATE_ALL_IMMEDIATE: 11;
  readonly UPDATE_CLIENTS: 2;
  readonly UPDATE_IMMEDIATE: 8;
  readonly UPDATE_INVISIBLE: 4;
  readonly UPDATE_KNOWN_SHAPE: 16;
  readonly UPDATE_LIMIT: 512;
  readonly UPDATE_MOVE_BY_PISTON: 64;
  readonly UPDATE_NEIGHBORS: 1;
  readonly UPDATE_NONE: 260;
  readonly UPDATE_SKIP_ALL_SIDEEFFECTS: 816;
  readonly UPDATE_SKIP_BLOCK_ENTITY_SIDEEFFECTS: 256;
  readonly UPDATE_SKIP_ON_PLACE: 512;
  readonly UPDATE_SKIP_SHAPE_UPDATE_ON_WIRE: 128;
  readonly UPDATE_SUPPRESS_DROPS: 32;
  box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  boxZ(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  boxZ(arg0: number, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  boxZ(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  boxes(arg0: number, arg1: JavaOpaque<"java.util.function.IntFunction", [j_net_minecraft_world_phys_shapes.VoxelShape]>): Array<j_net_minecraft_world_phys_shapes.VoxelShape>;
  byItem(arg0: j_net_minecraft_world_item.Item | null): Block;
  canSupportCenter(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
  canSupportRigidBlock(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  column(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  column(arg0: number, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  cube(arg0: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  cube(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys_shapes.VoxelShape;
  dropResources(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): void;
  dropResources(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg4: j_net_minecraft_world_entity.Entity | null, arg5: j_net_minecraft_world_item.ItemStack): void;
  dropResources(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg4: j_net_minecraft_world_entity.Entity | null, arg5: j_net_minecraft_world_item.ItemStack, arg6: boolean): void;
  dropResources(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_entity.BlockEntity | null): void;
  dropResources(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg4: j_net_minecraft_core.BlockPos): boolean;
  getDrops(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_entity.BlockEntity | null): JavaList<j_net_minecraft_world_item.ItemStack>;
  getDrops(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg4: j_net_minecraft_world_entity.Entity | null, arg5: j_net_minecraft_world_item.ItemStack): JavaList<j_net_minecraft_world_item.ItemStack>;
  getId(arg0: j_net_minecraft_world_level_block_state.BlockState | null): number;
  isExceptionForConnection(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isFaceFull(arg0: j_net_minecraft_world_phys_shapes.VoxelShape, arg1: j_net_minecraft_core.Direction): boolean;
  isShapeFullBlock(arg0: j_net_minecraft_world_phys_shapes.VoxelShape): boolean;
  popResource(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack): void;
  popResourceFromFace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_world_item.ItemStack): void;
  pushEntitiesUp(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.LevelAccessor, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  shouldRenderFace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.Direction): boolean;
  stateById(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
  updateFromNeighbourShapes(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  updateOrDestroy(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.LevelAccessor, arg3: j_net_minecraft_core.BlockPos, arg4: number): void;
  updateOrDestroy(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.LevelAccessor, arg3: j_net_minecraft_core.BlockPos, arg4: number, arg5: number): void;
}

/** JVM class net.minecraft.world.level.block.Blocks. */
export interface Blocks_2Members {
}
export type Blocks_2 = Blocks_2Members;
export interface Blocks_2Statics {
  new(): Blocks_2;
  readonly ACACIA_BUTTON: Block;
  readonly ACACIA_DOOR: Block;
  readonly ACACIA_FENCE: Block;
  readonly ACACIA_FENCE_GATE: Block;
  readonly ACACIA_HANGING_SIGN: Block;
  readonly ACACIA_LEAVES: Block;
  readonly ACACIA_LOG: Block;
  readonly ACACIA_PLANKS: Block;
  readonly ACACIA_PRESSURE_PLATE: Block;
  readonly ACACIA_SAPLING: Block;
  readonly ACACIA_SIGN: Block;
  readonly ACACIA_SLAB: Block;
  readonly ACACIA_STAIRS: Block;
  readonly ACACIA_TRAPDOOR: Block;
  readonly ACACIA_WALL_HANGING_SIGN: Block;
  readonly ACACIA_WALL_SIGN: Block;
  readonly ACACIA_WOOD: Block;
  readonly ACTIVATOR_RAIL: Block;
  readonly AIR: Block;
  readonly ALLIUM: Block;
  readonly AMETHYST_BLOCK: Block;
  readonly AMETHYST_CLUSTER: Block;
  readonly ANCIENT_DEBRIS: Block;
  readonly ANDESITE: Block;
  readonly ANDESITE_SLAB: Block;
  readonly ANDESITE_STAIRS: Block;
  readonly ANDESITE_WALL: Block;
  readonly ANVIL: Block;
  readonly ATTACHED_MELON_STEM: Block;
  readonly ATTACHED_PUMPKIN_STEM: Block;
  readonly AZALEA: Block;
  readonly AZALEA_LEAVES: Block;
  readonly AZURE_BLUET: Block;
  readonly BAMBOO: Block;
  readonly BAMBOO_BLOCK: Block;
  readonly BAMBOO_BUTTON: Block;
  readonly BAMBOO_DOOR: Block;
  readonly BAMBOO_FENCE: Block;
  readonly BAMBOO_FENCE_GATE: Block;
  readonly BAMBOO_HANGING_SIGN: Block;
  readonly BAMBOO_MOSAIC: Block;
  readonly BAMBOO_MOSAIC_SLAB: Block;
  readonly BAMBOO_MOSAIC_STAIRS: Block;
  readonly BAMBOO_PLANKS: Block;
  readonly BAMBOO_PRESSURE_PLATE: Block;
  readonly BAMBOO_SAPLING: Block;
  readonly BAMBOO_SIGN: Block;
  readonly BAMBOO_SLAB: Block;
  readonly BAMBOO_STAIRS: Block;
  readonly BAMBOO_TRAPDOOR: Block;
  readonly BAMBOO_WALL_HANGING_SIGN: Block;
  readonly BAMBOO_WALL_SIGN: Block;
  readonly BARREL: Block;
  readonly BARRIER: Block;
  readonly BASALT: Block;
  readonly BEACON: Block;
  readonly BEDROCK: Block;
  readonly BEEHIVE: Block;
  readonly BEETROOTS: Block;
  readonly BEE_NEST: Block;
  readonly BELL: Block;
  readonly BIG_DRIPLEAF: Block;
  readonly BIG_DRIPLEAF_STEM: Block;
  readonly BIRCH_BUTTON: Block;
  readonly BIRCH_DOOR: Block;
  readonly BIRCH_FENCE: Block;
  readonly BIRCH_FENCE_GATE: Block;
  readonly BIRCH_HANGING_SIGN: Block;
  readonly BIRCH_LEAVES: Block;
  readonly BIRCH_LOG: Block;
  readonly BIRCH_PLANKS: Block;
  readonly BIRCH_PRESSURE_PLATE: Block;
  readonly BIRCH_SAPLING: Block;
  readonly BIRCH_SIGN: Block;
  readonly BIRCH_SLAB: Block;
  readonly BIRCH_STAIRS: Block;
  readonly BIRCH_TRAPDOOR: Block;
  readonly BIRCH_WALL_HANGING_SIGN: Block;
  readonly BIRCH_WALL_SIGN: Block;
  readonly BIRCH_WOOD: Block;
  readonly BLACKSTONE: Block;
  readonly BLACKSTONE_SLAB: Block;
  readonly BLACKSTONE_STAIRS: Block;
  readonly BLACKSTONE_WALL: Block;
  readonly BLACK_BANNER: Block;
  readonly BLACK_BED: Block;
  readonly BLACK_CANDLE: Block;
  readonly BLACK_CANDLE_CAKE: Block;
  readonly BLACK_CARPET: Block;
  readonly BLACK_CONCRETE: Block;
  readonly BLACK_CONCRETE_POWDER: Block;
  readonly BLACK_GLAZED_TERRACOTTA: Block;
  readonly BLACK_SHULKER_BOX: Block;
  readonly BLACK_STAINED_GLASS: Block;
  readonly BLACK_STAINED_GLASS_PANE: Block;
  readonly BLACK_TERRACOTTA: Block;
  readonly BLACK_WALL_BANNER: Block;
  readonly BLACK_WOOL: Block;
  readonly BLAST_FURNACE: Block;
  readonly BLUE_BANNER: Block;
  readonly BLUE_BED: Block;
  readonly BLUE_CANDLE: Block;
  readonly BLUE_CANDLE_CAKE: Block;
  readonly BLUE_CARPET: Block;
  readonly BLUE_CONCRETE: Block;
  readonly BLUE_CONCRETE_POWDER: Block;
  readonly BLUE_GLAZED_TERRACOTTA: Block;
  readonly BLUE_ICE: Block;
  readonly BLUE_ORCHID: Block;
  readonly BLUE_SHULKER_BOX: Block;
  readonly BLUE_STAINED_GLASS: Block;
  readonly BLUE_STAINED_GLASS_PANE: Block;
  readonly BLUE_TERRACOTTA: Block;
  readonly BLUE_WALL_BANNER: Block;
  readonly BLUE_WOOL: Block;
  readonly BONE_BLOCK: Block;
  readonly BOOKSHELF: Block;
  readonly BRAIN_CORAL: Block;
  readonly BRAIN_CORAL_BLOCK: Block;
  readonly BRAIN_CORAL_FAN: Block;
  readonly BRAIN_CORAL_WALL_FAN: Block;
  readonly BREWING_STAND: Block;
  readonly BRICKS: Block;
  readonly BRICK_SLAB: Block;
  readonly BRICK_STAIRS: Block;
  readonly BRICK_WALL: Block;
  readonly BROWN_BANNER: Block;
  readonly BROWN_BED: Block;
  readonly BROWN_CANDLE: Block;
  readonly BROWN_CANDLE_CAKE: Block;
  readonly BROWN_CARPET: Block;
  readonly BROWN_CONCRETE: Block;
  readonly BROWN_CONCRETE_POWDER: Block;
  readonly BROWN_GLAZED_TERRACOTTA: Block;
  readonly BROWN_MUSHROOM: Block;
  readonly BROWN_MUSHROOM_BLOCK: Block;
  readonly BROWN_SHULKER_BOX: Block;
  readonly BROWN_STAINED_GLASS: Block;
  readonly BROWN_STAINED_GLASS_PANE: Block;
  readonly BROWN_TERRACOTTA: Block;
  readonly BROWN_WALL_BANNER: Block;
  readonly BROWN_WOOL: Block;
  readonly BUBBLE_COLUMN: Block;
  readonly BUBBLE_CORAL: Block;
  readonly BUBBLE_CORAL_BLOCK: Block;
  readonly BUBBLE_CORAL_FAN: Block;
  readonly BUBBLE_CORAL_WALL_FAN: Block;
  readonly BUDDING_AMETHYST: Block;
  readonly BUSH: Block;
  readonly CACTUS: Block;
  readonly CACTUS_FLOWER: Block;
  readonly CAKE: Block;
  readonly CALCITE: Block;
  readonly CALIBRATED_SCULK_SENSOR: Block;
  readonly CAMPFIRE: Block;
  readonly CANDLE: Block;
  readonly CANDLE_CAKE: Block;
  readonly CARROTS: Block;
  readonly CARTOGRAPHY_TABLE: Block;
  readonly CARVED_PUMPKIN: Block;
  readonly CAULDRON: Block;
  readonly CAVE_AIR: Block;
  readonly CAVE_VINES: Block;
  readonly CAVE_VINES_PLANT: Block;
  readonly CHAIN: Block;
  readonly CHAIN_COMMAND_BLOCK: Block;
  readonly CHERRY_BUTTON: Block;
  readonly CHERRY_DOOR: Block;
  readonly CHERRY_FENCE: Block;
  readonly CHERRY_FENCE_GATE: Block;
  readonly CHERRY_HANGING_SIGN: Block;
  readonly CHERRY_LEAVES: Block;
  readonly CHERRY_LOG: Block;
  readonly CHERRY_PLANKS: Block;
  readonly CHERRY_PRESSURE_PLATE: Block;
  readonly CHERRY_SAPLING: Block;
  readonly CHERRY_SIGN: Block;
  readonly CHERRY_SLAB: Block;
  readonly CHERRY_STAIRS: Block;
  readonly CHERRY_TRAPDOOR: Block;
  readonly CHERRY_WALL_HANGING_SIGN: Block;
  readonly CHERRY_WALL_SIGN: Block;
  readonly CHERRY_WOOD: Block;
  readonly CHEST: Block;
  readonly CHIPPED_ANVIL: Block;
  readonly CHISELED_BOOKSHELF: Block;
  readonly CHISELED_COPPER: Block;
  readonly CHISELED_DEEPSLATE: Block;
  readonly CHISELED_NETHER_BRICKS: Block;
  readonly CHISELED_POLISHED_BLACKSTONE: Block;
  readonly CHISELED_QUARTZ_BLOCK: Block;
  readonly CHISELED_RED_SANDSTONE: Block;
  readonly CHISELED_RESIN_BRICKS: Block;
  readonly CHISELED_SANDSTONE: Block;
  readonly CHISELED_STONE_BRICKS: Block;
  readonly CHISELED_TUFF: Block;
  readonly CHISELED_TUFF_BRICKS: Block;
  readonly CHORUS_FLOWER: Block;
  readonly CHORUS_PLANT: Block;
  readonly CLAY: Block;
  readonly CLOSED_EYEBLOSSOM: Block;
  readonly COAL_BLOCK: Block;
  readonly COAL_ORE: Block;
  readonly COARSE_DIRT: Block;
  readonly COBBLED_DEEPSLATE: Block;
  readonly COBBLED_DEEPSLATE_SLAB: Block;
  readonly COBBLED_DEEPSLATE_STAIRS: Block;
  readonly COBBLED_DEEPSLATE_WALL: Block;
  readonly COBBLESTONE: Block;
  readonly COBBLESTONE_SLAB: Block;
  readonly COBBLESTONE_STAIRS: Block;
  readonly COBBLESTONE_WALL: Block;
  readonly COBWEB: Block;
  readonly COCOA: Block;
  readonly COMMAND_BLOCK: Block;
  readonly COMPARATOR: Block;
  readonly COMPOSTER: Block;
  readonly CONDUIT: Block;
  readonly COPPER_BLOCK: Block;
  readonly COPPER_BULB: Block;
  readonly COPPER_DOOR: Block;
  readonly COPPER_GRATE: Block;
  readonly COPPER_ORE: Block;
  readonly COPPER_TRAPDOOR: Block;
  readonly CORNFLOWER: Block;
  readonly CRACKED_DEEPSLATE_BRICKS: Block;
  readonly CRACKED_DEEPSLATE_TILES: Block;
  readonly CRACKED_NETHER_BRICKS: Block;
  readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: Block;
  readonly CRACKED_STONE_BRICKS: Block;
  readonly CRAFTER: Block;
  readonly CRAFTING_TABLE: Block;
  readonly CREAKING_HEART: Block;
  readonly CREEPER_HEAD: Block;
  readonly CREEPER_WALL_HEAD: Block;
  readonly CRIMSON_BUTTON: Block;
  readonly CRIMSON_DOOR: Block;
  readonly CRIMSON_FENCE: Block;
  readonly CRIMSON_FENCE_GATE: Block;
  readonly CRIMSON_FUNGUS: Block;
  readonly CRIMSON_HANGING_SIGN: Block;
  readonly CRIMSON_HYPHAE: Block;
  readonly CRIMSON_NYLIUM: Block;
  readonly CRIMSON_PLANKS: Block;
  readonly CRIMSON_PRESSURE_PLATE: Block;
  readonly CRIMSON_ROOTS: Block;
  readonly CRIMSON_SIGN: Block;
  readonly CRIMSON_SLAB: Block;
  readonly CRIMSON_STAIRS: Block;
  readonly CRIMSON_STEM: Block;
  readonly CRIMSON_TRAPDOOR: Block;
  readonly CRIMSON_WALL_HANGING_SIGN: Block;
  readonly CRIMSON_WALL_SIGN: Block;
  readonly CRYING_OBSIDIAN: Block;
  readonly CUT_COPPER: Block;
  readonly CUT_COPPER_SLAB: Block;
  readonly CUT_COPPER_STAIRS: Block;
  readonly CUT_RED_SANDSTONE: Block;
  readonly CUT_RED_SANDSTONE_SLAB: Block;
  readonly CUT_SANDSTONE: Block;
  readonly CUT_SANDSTONE_SLAB: Block;
  readonly CYAN_BANNER: Block;
  readonly CYAN_BED: Block;
  readonly CYAN_CANDLE: Block;
  readonly CYAN_CANDLE_CAKE: Block;
  readonly CYAN_CARPET: Block;
  readonly CYAN_CONCRETE: Block;
  readonly CYAN_CONCRETE_POWDER: Block;
  readonly CYAN_GLAZED_TERRACOTTA: Block;
  readonly CYAN_SHULKER_BOX: Block;
  readonly CYAN_STAINED_GLASS: Block;
  readonly CYAN_STAINED_GLASS_PANE: Block;
  readonly CYAN_TERRACOTTA: Block;
  readonly CYAN_WALL_BANNER: Block;
  readonly CYAN_WOOL: Block;
  readonly DAMAGED_ANVIL: Block;
  readonly DANDELION: Block;
  readonly DARK_OAK_BUTTON: Block;
  readonly DARK_OAK_DOOR: Block;
  readonly DARK_OAK_FENCE: Block;
  readonly DARK_OAK_FENCE_GATE: Block;
  readonly DARK_OAK_HANGING_SIGN: Block;
  readonly DARK_OAK_LEAVES: Block;
  readonly DARK_OAK_LOG: Block;
  readonly DARK_OAK_PLANKS: Block;
  readonly DARK_OAK_PRESSURE_PLATE: Block;
  readonly DARK_OAK_SAPLING: Block;
  readonly DARK_OAK_SIGN: Block;
  readonly DARK_OAK_SLAB: Block;
  readonly DARK_OAK_STAIRS: Block;
  readonly DARK_OAK_TRAPDOOR: Block;
  readonly DARK_OAK_WALL_HANGING_SIGN: Block;
  readonly DARK_OAK_WALL_SIGN: Block;
  readonly DARK_OAK_WOOD: Block;
  readonly DARK_PRISMARINE: Block;
  readonly DARK_PRISMARINE_SLAB: Block;
  readonly DARK_PRISMARINE_STAIRS: Block;
  readonly DAYLIGHT_DETECTOR: Block;
  readonly DEAD_BRAIN_CORAL: Block;
  readonly DEAD_BRAIN_CORAL_BLOCK: Block;
  readonly DEAD_BRAIN_CORAL_FAN: Block;
  readonly DEAD_BRAIN_CORAL_WALL_FAN: Block;
  readonly DEAD_BUBBLE_CORAL: Block;
  readonly DEAD_BUBBLE_CORAL_BLOCK: Block;
  readonly DEAD_BUBBLE_CORAL_FAN: Block;
  readonly DEAD_BUBBLE_CORAL_WALL_FAN: Block;
  readonly DEAD_BUSH: Block;
  readonly DEAD_FIRE_CORAL: Block;
  readonly DEAD_FIRE_CORAL_BLOCK: Block;
  readonly DEAD_FIRE_CORAL_FAN: Block;
  readonly DEAD_FIRE_CORAL_WALL_FAN: Block;
  readonly DEAD_HORN_CORAL: Block;
  readonly DEAD_HORN_CORAL_BLOCK: Block;
  readonly DEAD_HORN_CORAL_FAN: Block;
  readonly DEAD_HORN_CORAL_WALL_FAN: Block;
  readonly DEAD_TUBE_CORAL: Block;
  readonly DEAD_TUBE_CORAL_BLOCK: Block;
  readonly DEAD_TUBE_CORAL_FAN: Block;
  readonly DEAD_TUBE_CORAL_WALL_FAN: Block;
  readonly DECORATED_POT: Block;
  readonly DEEPSLATE: Block;
  readonly DEEPSLATE_BRICKS: Block;
  readonly DEEPSLATE_BRICK_SLAB: Block;
  readonly DEEPSLATE_BRICK_STAIRS: Block;
  readonly DEEPSLATE_BRICK_WALL: Block;
  readonly DEEPSLATE_COAL_ORE: Block;
  readonly DEEPSLATE_COPPER_ORE: Block;
  readonly DEEPSLATE_DIAMOND_ORE: Block;
  readonly DEEPSLATE_EMERALD_ORE: Block;
  readonly DEEPSLATE_GOLD_ORE: Block;
  readonly DEEPSLATE_IRON_ORE: Block;
  readonly DEEPSLATE_LAPIS_ORE: Block;
  readonly DEEPSLATE_REDSTONE_ORE: Block;
  readonly DEEPSLATE_TILES: Block;
  readonly DEEPSLATE_TILE_SLAB: Block;
  readonly DEEPSLATE_TILE_STAIRS: Block;
  readonly DEEPSLATE_TILE_WALL: Block;
  readonly DETECTOR_RAIL: Block;
  readonly DIAMOND_BLOCK: Block;
  readonly DIAMOND_ORE: Block;
  readonly DIORITE: Block;
  readonly DIORITE_SLAB: Block;
  readonly DIORITE_STAIRS: Block;
  readonly DIORITE_WALL: Block;
  readonly DIRT: Block;
  readonly DIRT_PATH: Block;
  readonly DISPENSER: Block;
  readonly DRAGON_EGG: Block;
  readonly DRAGON_HEAD: Block;
  readonly DRAGON_WALL_HEAD: Block;
  readonly DRIED_GHAST: Block;
  readonly DRIED_KELP_BLOCK: Block;
  readonly DRIPSTONE_BLOCK: Block;
  readonly DROPPER: Block;
  readonly EMERALD_BLOCK: Block;
  readonly EMERALD_ORE: Block;
  readonly ENCHANTING_TABLE: Block;
  readonly ENDER_CHEST: Block;
  readonly END_GATEWAY: Block;
  readonly END_PORTAL: Block;
  readonly END_PORTAL_FRAME: Block;
  readonly END_ROD: Block;
  readonly END_STONE: Block;
  readonly END_STONE_BRICKS: Block;
  readonly END_STONE_BRICK_SLAB: Block;
  readonly END_STONE_BRICK_STAIRS: Block;
  readonly END_STONE_BRICK_WALL: Block;
  readonly EXPOSED_CHISELED_COPPER: Block;
  readonly EXPOSED_COPPER: Block;
  readonly EXPOSED_COPPER_BULB: Block;
  readonly EXPOSED_COPPER_DOOR: Block;
  readonly EXPOSED_COPPER_GRATE: Block;
  readonly EXPOSED_COPPER_TRAPDOOR: Block;
  readonly EXPOSED_CUT_COPPER: Block;
  readonly EXPOSED_CUT_COPPER_SLAB: Block;
  readonly EXPOSED_CUT_COPPER_STAIRS: Block;
  readonly FARMLAND: Block;
  readonly FERN: Block;
  readonly FIRE: Block;
  readonly FIREFLY_BUSH: Block;
  readonly FIRE_CORAL: Block;
  readonly FIRE_CORAL_BLOCK: Block;
  readonly FIRE_CORAL_FAN: Block;
  readonly FIRE_CORAL_WALL_FAN: Block;
  readonly FLETCHING_TABLE: Block;
  readonly FLOWERING_AZALEA: Block;
  readonly FLOWERING_AZALEA_LEAVES: Block;
  readonly FLOWER_POT: Block;
  readonly FROGSPAWN: Block;
  readonly FROSTED_ICE: Block;
  readonly FURNACE: Block;
  readonly GILDED_BLACKSTONE: Block;
  readonly GLASS: Block;
  readonly GLASS_PANE: Block;
  readonly GLOWSTONE: Block;
  readonly GLOW_LICHEN: Block;
  readonly GOLD_BLOCK: Block;
  readonly GOLD_ORE: Block;
  readonly GRANITE: Block;
  readonly GRANITE_SLAB: Block;
  readonly GRANITE_STAIRS: Block;
  readonly GRANITE_WALL: Block;
  readonly GRASS_BLOCK: Block;
  readonly GRAVEL: Block;
  readonly GRAY_BANNER: Block;
  readonly GRAY_BED: Block;
  readonly GRAY_CANDLE: Block;
  readonly GRAY_CANDLE_CAKE: Block;
  readonly GRAY_CARPET: Block;
  readonly GRAY_CONCRETE: Block;
  readonly GRAY_CONCRETE_POWDER: Block;
  readonly GRAY_GLAZED_TERRACOTTA: Block;
  readonly GRAY_SHULKER_BOX: Block;
  readonly GRAY_STAINED_GLASS: Block;
  readonly GRAY_STAINED_GLASS_PANE: Block;
  readonly GRAY_TERRACOTTA: Block;
  readonly GRAY_WALL_BANNER: Block;
  readonly GRAY_WOOL: Block;
  readonly GREEN_BANNER: Block;
  readonly GREEN_BED: Block;
  readonly GREEN_CANDLE: Block;
  readonly GREEN_CANDLE_CAKE: Block;
  readonly GREEN_CARPET: Block;
  readonly GREEN_CONCRETE: Block;
  readonly GREEN_CONCRETE_POWDER: Block;
  readonly GREEN_GLAZED_TERRACOTTA: Block;
  readonly GREEN_SHULKER_BOX: Block;
  readonly GREEN_STAINED_GLASS: Block;
  readonly GREEN_STAINED_GLASS_PANE: Block;
  readonly GREEN_TERRACOTTA: Block;
  readonly GREEN_WALL_BANNER: Block;
  readonly GREEN_WOOL: Block;
  readonly GRINDSTONE: Block;
  readonly HANGING_ROOTS: Block;
  readonly HAY_BLOCK: Block;
  readonly HEAVY_CORE: Block;
  readonly HEAVY_WEIGHTED_PRESSURE_PLATE: Block;
  readonly HONEYCOMB_BLOCK: Block;
  readonly HONEY_BLOCK: Block;
  readonly HOPPER: Block;
  readonly HORN_CORAL: Block;
  readonly HORN_CORAL_BLOCK: Block;
  readonly HORN_CORAL_FAN: Block;
  readonly HORN_CORAL_WALL_FAN: Block;
  readonly ICE: Block;
  readonly INFESTED_CHISELED_STONE_BRICKS: Block;
  readonly INFESTED_COBBLESTONE: Block;
  readonly INFESTED_CRACKED_STONE_BRICKS: Block;
  readonly INFESTED_DEEPSLATE: Block;
  readonly INFESTED_MOSSY_STONE_BRICKS: Block;
  readonly INFESTED_STONE: Block;
  readonly INFESTED_STONE_BRICKS: Block;
  readonly IRON_BARS: Block;
  readonly IRON_BLOCK: Block;
  readonly IRON_DOOR: Block;
  readonly IRON_ORE: Block;
  readonly IRON_TRAPDOOR: Block;
  readonly JACK_O_LANTERN: Block;
  readonly JIGSAW: Block;
  readonly JUKEBOX: Block;
  readonly JUNGLE_BUTTON: Block;
  readonly JUNGLE_DOOR: Block;
  readonly JUNGLE_FENCE: Block;
  readonly JUNGLE_FENCE_GATE: Block;
  readonly JUNGLE_HANGING_SIGN: Block;
  readonly JUNGLE_LEAVES: Block;
  readonly JUNGLE_LOG: Block;
  readonly JUNGLE_PLANKS: Block;
  readonly JUNGLE_PRESSURE_PLATE: Block;
  readonly JUNGLE_SAPLING: Block;
  readonly JUNGLE_SIGN: Block;
  readonly JUNGLE_SLAB: Block;
  readonly JUNGLE_STAIRS: Block;
  readonly JUNGLE_TRAPDOOR: Block;
  readonly JUNGLE_WALL_HANGING_SIGN: Block;
  readonly JUNGLE_WALL_SIGN: Block;
  readonly JUNGLE_WOOD: Block;
  readonly KELP: Block;
  readonly KELP_PLANT: Block;
  readonly LADDER: Block;
  readonly LANTERN: Block;
  readonly LAPIS_BLOCK: Block;
  readonly LAPIS_ORE: Block;
  readonly LARGE_AMETHYST_BUD: Block;
  readonly LARGE_FERN: Block;
  readonly LAVA: Block;
  readonly LAVA_CAULDRON: Block;
  readonly LEAF_LITTER: Block;
  readonly LECTERN: Block;
  readonly LEVER: Block;
  readonly LIGHT: Block;
  readonly LIGHTNING_ROD: Block;
  readonly LIGHT_BLUE_BANNER: Block;
  readonly LIGHT_BLUE_BED: Block;
  readonly LIGHT_BLUE_CANDLE: Block;
  readonly LIGHT_BLUE_CANDLE_CAKE: Block;
  readonly LIGHT_BLUE_CARPET: Block;
  readonly LIGHT_BLUE_CONCRETE: Block;
  readonly LIGHT_BLUE_CONCRETE_POWDER: Block;
  readonly LIGHT_BLUE_GLAZED_TERRACOTTA: Block;
  readonly LIGHT_BLUE_SHULKER_BOX: Block;
  readonly LIGHT_BLUE_STAINED_GLASS: Block;
  readonly LIGHT_BLUE_STAINED_GLASS_PANE: Block;
  readonly LIGHT_BLUE_TERRACOTTA: Block;
  readonly LIGHT_BLUE_WALL_BANNER: Block;
  readonly LIGHT_BLUE_WOOL: Block;
  readonly LIGHT_GRAY_BANNER: Block;
  readonly LIGHT_GRAY_BED: Block;
  readonly LIGHT_GRAY_CANDLE: Block;
  readonly LIGHT_GRAY_CANDLE_CAKE: Block;
  readonly LIGHT_GRAY_CARPET: Block;
  readonly LIGHT_GRAY_CONCRETE: Block;
  readonly LIGHT_GRAY_CONCRETE_POWDER: Block;
  readonly LIGHT_GRAY_GLAZED_TERRACOTTA: Block;
  readonly LIGHT_GRAY_SHULKER_BOX: Block;
  readonly LIGHT_GRAY_STAINED_GLASS: Block;
  readonly LIGHT_GRAY_STAINED_GLASS_PANE: Block;
  readonly LIGHT_GRAY_TERRACOTTA: Block;
  readonly LIGHT_GRAY_WALL_BANNER: Block;
  readonly LIGHT_GRAY_WOOL: Block;
  readonly LIGHT_WEIGHTED_PRESSURE_PLATE: Block;
  readonly LILAC: Block;
  readonly LILY_OF_THE_VALLEY: Block;
  readonly LILY_PAD: Block;
  readonly LIME_BANNER: Block;
  readonly LIME_BED: Block;
  readonly LIME_CANDLE: Block;
  readonly LIME_CANDLE_CAKE: Block;
  readonly LIME_CARPET: Block;
  readonly LIME_CONCRETE: Block;
  readonly LIME_CONCRETE_POWDER: Block;
  readonly LIME_GLAZED_TERRACOTTA: Block;
  readonly LIME_SHULKER_BOX: Block;
  readonly LIME_STAINED_GLASS: Block;
  readonly LIME_STAINED_GLASS_PANE: Block;
  readonly LIME_TERRACOTTA: Block;
  readonly LIME_WALL_BANNER: Block;
  readonly LIME_WOOL: Block;
  readonly LODESTONE: Block;
  readonly LOOM: Block;
  readonly MAGENTA_BANNER: Block;
  readonly MAGENTA_BED: Block;
  readonly MAGENTA_CANDLE: Block;
  readonly MAGENTA_CANDLE_CAKE: Block;
  readonly MAGENTA_CARPET: Block;
  readonly MAGENTA_CONCRETE: Block;
  readonly MAGENTA_CONCRETE_POWDER: Block;
  readonly MAGENTA_GLAZED_TERRACOTTA: Block;
  readonly MAGENTA_SHULKER_BOX: Block;
  readonly MAGENTA_STAINED_GLASS: Block;
  readonly MAGENTA_STAINED_GLASS_PANE: Block;
  readonly MAGENTA_TERRACOTTA: Block;
  readonly MAGENTA_WALL_BANNER: Block;
  readonly MAGENTA_WOOL: Block;
  readonly MAGMA_BLOCK: Block;
  readonly MANGROVE_BUTTON: Block;
  readonly MANGROVE_DOOR: Block;
  readonly MANGROVE_FENCE: Block;
  readonly MANGROVE_FENCE_GATE: Block;
  readonly MANGROVE_HANGING_SIGN: Block;
  readonly MANGROVE_LEAVES: Block;
  readonly MANGROVE_LOG: Block;
  readonly MANGROVE_PLANKS: Block;
  readonly MANGROVE_PRESSURE_PLATE: Block;
  readonly MANGROVE_PROPAGULE: Block;
  readonly MANGROVE_ROOTS: Block;
  readonly MANGROVE_SIGN: Block;
  readonly MANGROVE_SLAB: Block;
  readonly MANGROVE_STAIRS: Block;
  readonly MANGROVE_TRAPDOOR: Block;
  readonly MANGROVE_WALL_HANGING_SIGN: Block;
  readonly MANGROVE_WALL_SIGN: Block;
  readonly MANGROVE_WOOD: Block;
  readonly MEDIUM_AMETHYST_BUD: Block;
  readonly MELON: Block;
  readonly MELON_STEM: Block;
  readonly MOSSY_COBBLESTONE: Block;
  readonly MOSSY_COBBLESTONE_SLAB: Block;
  readonly MOSSY_COBBLESTONE_STAIRS: Block;
  readonly MOSSY_COBBLESTONE_WALL: Block;
  readonly MOSSY_STONE_BRICKS: Block;
  readonly MOSSY_STONE_BRICK_SLAB: Block;
  readonly MOSSY_STONE_BRICK_STAIRS: Block;
  readonly MOSSY_STONE_BRICK_WALL: Block;
  readonly MOSS_BLOCK: Block;
  readonly MOSS_CARPET: Block;
  readonly MOVING_PISTON: Block;
  readonly MUD: Block;
  readonly MUDDY_MANGROVE_ROOTS: Block;
  readonly MUD_BRICKS: Block;
  readonly MUD_BRICK_SLAB: Block;
  readonly MUD_BRICK_STAIRS: Block;
  readonly MUD_BRICK_WALL: Block;
  readonly MUSHROOM_STEM: Block;
  readonly MYCELIUM: Block;
  readonly NETHERITE_BLOCK: Block;
  readonly NETHERRACK: Block;
  readonly NETHER_BRICKS: Block;
  readonly NETHER_BRICK_FENCE: Block;
  readonly NETHER_BRICK_SLAB: Block;
  readonly NETHER_BRICK_STAIRS: Block;
  readonly NETHER_BRICK_WALL: Block;
  readonly NETHER_GOLD_ORE: Block;
  readonly NETHER_PORTAL: Block;
  readonly NETHER_QUARTZ_ORE: Block;
  readonly NETHER_SPROUTS: Block;
  readonly NETHER_WART: Block;
  readonly NETHER_WART_BLOCK: Block;
  readonly NOTE_BLOCK: Block;
  readonly OAK_BUTTON: Block;
  readonly OAK_DOOR: Block;
  readonly OAK_FENCE: Block;
  readonly OAK_FENCE_GATE: Block;
  readonly OAK_HANGING_SIGN: Block;
  readonly OAK_LEAVES: Block;
  readonly OAK_LOG: Block;
  readonly OAK_PLANKS: Block;
  readonly OAK_PRESSURE_PLATE: Block;
  readonly OAK_SAPLING: Block;
  readonly OAK_SIGN: Block;
  readonly OAK_SLAB: Block;
  readonly OAK_STAIRS: Block;
  readonly OAK_TRAPDOOR: Block;
  readonly OAK_WALL_HANGING_SIGN: Block;
  readonly OAK_WALL_SIGN: Block;
  readonly OAK_WOOD: Block;
  readonly OBSERVER: Block;
  readonly OBSIDIAN: Block;
  readonly OCHRE_FROGLIGHT: Block;
  readonly OPEN_EYEBLOSSOM: Block;
  readonly ORANGE_BANNER: Block;
  readonly ORANGE_BED: Block;
  readonly ORANGE_CANDLE: Block;
  readonly ORANGE_CANDLE_CAKE: Block;
  readonly ORANGE_CARPET: Block;
  readonly ORANGE_CONCRETE: Block;
  readonly ORANGE_CONCRETE_POWDER: Block;
  readonly ORANGE_GLAZED_TERRACOTTA: Block;
  readonly ORANGE_SHULKER_BOX: Block;
  readonly ORANGE_STAINED_GLASS: Block;
  readonly ORANGE_STAINED_GLASS_PANE: Block;
  readonly ORANGE_TERRACOTTA: Block;
  readonly ORANGE_TULIP: Block;
  readonly ORANGE_WALL_BANNER: Block;
  readonly ORANGE_WOOL: Block;
  readonly OXEYE_DAISY: Block;
  readonly OXIDIZED_CHISELED_COPPER: Block;
  readonly OXIDIZED_COPPER: Block;
  readonly OXIDIZED_COPPER_BULB: Block;
  readonly OXIDIZED_COPPER_DOOR: Block;
  readonly OXIDIZED_COPPER_GRATE: Block;
  readonly OXIDIZED_COPPER_TRAPDOOR: Block;
  readonly OXIDIZED_CUT_COPPER: Block;
  readonly OXIDIZED_CUT_COPPER_SLAB: Block;
  readonly OXIDIZED_CUT_COPPER_STAIRS: Block;
  readonly PACKED_ICE: Block;
  readonly PACKED_MUD: Block;
  readonly PALE_HANGING_MOSS: Block;
  readonly PALE_MOSS_BLOCK: Block;
  readonly PALE_MOSS_CARPET: Block;
  readonly PALE_OAK_BUTTON: Block;
  readonly PALE_OAK_DOOR: Block;
  readonly PALE_OAK_FENCE: Block;
  readonly PALE_OAK_FENCE_GATE: Block;
  readonly PALE_OAK_HANGING_SIGN: Block;
  readonly PALE_OAK_LEAVES: Block;
  readonly PALE_OAK_LOG: Block;
  readonly PALE_OAK_PLANKS: Block;
  readonly PALE_OAK_PRESSURE_PLATE: Block;
  readonly PALE_OAK_SAPLING: Block;
  readonly PALE_OAK_SIGN: Block;
  readonly PALE_OAK_SLAB: Block;
  readonly PALE_OAK_STAIRS: Block;
  readonly PALE_OAK_TRAPDOOR: Block;
  readonly PALE_OAK_WALL_HANGING_SIGN: Block;
  readonly PALE_OAK_WALL_SIGN: Block;
  readonly PALE_OAK_WOOD: Block;
  readonly PEARLESCENT_FROGLIGHT: Block;
  readonly PEONY: Block;
  readonly PETRIFIED_OAK_SLAB: Block;
  readonly PIGLIN_HEAD: Block;
  readonly PIGLIN_WALL_HEAD: Block;
  readonly PINK_BANNER: Block;
  readonly PINK_BED: Block;
  readonly PINK_CANDLE: Block;
  readonly PINK_CANDLE_CAKE: Block;
  readonly PINK_CARPET: Block;
  readonly PINK_CONCRETE: Block;
  readonly PINK_CONCRETE_POWDER: Block;
  readonly PINK_GLAZED_TERRACOTTA: Block;
  readonly PINK_PETALS: Block;
  readonly PINK_SHULKER_BOX: Block;
  readonly PINK_STAINED_GLASS: Block;
  readonly PINK_STAINED_GLASS_PANE: Block;
  readonly PINK_TERRACOTTA: Block;
  readonly PINK_TULIP: Block;
  readonly PINK_WALL_BANNER: Block;
  readonly PINK_WOOL: Block;
  readonly PISTON: Block;
  readonly PISTON_HEAD: Block;
  readonly PITCHER_CROP: Block;
  readonly PITCHER_PLANT: Block;
  readonly PLAYER_HEAD: Block;
  readonly PLAYER_WALL_HEAD: Block;
  readonly PODZOL: Block;
  readonly POINTED_DRIPSTONE: Block;
  readonly POLISHED_ANDESITE: Block;
  readonly POLISHED_ANDESITE_SLAB: Block;
  readonly POLISHED_ANDESITE_STAIRS: Block;
  readonly POLISHED_BASALT: Block;
  readonly POLISHED_BLACKSTONE: Block;
  readonly POLISHED_BLACKSTONE_BRICKS: Block;
  readonly POLISHED_BLACKSTONE_BRICK_SLAB: Block;
  readonly POLISHED_BLACKSTONE_BRICK_STAIRS: Block;
  readonly POLISHED_BLACKSTONE_BRICK_WALL: Block;
  readonly POLISHED_BLACKSTONE_BUTTON: Block;
  readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: Block;
  readonly POLISHED_BLACKSTONE_SLAB: Block;
  readonly POLISHED_BLACKSTONE_STAIRS: Block;
  readonly POLISHED_BLACKSTONE_WALL: Block;
  readonly POLISHED_DEEPSLATE: Block;
  readonly POLISHED_DEEPSLATE_SLAB: Block;
  readonly POLISHED_DEEPSLATE_STAIRS: Block;
  readonly POLISHED_DEEPSLATE_WALL: Block;
  readonly POLISHED_DIORITE: Block;
  readonly POLISHED_DIORITE_SLAB: Block;
  readonly POLISHED_DIORITE_STAIRS: Block;
  readonly POLISHED_GRANITE: Block;
  readonly POLISHED_GRANITE_SLAB: Block;
  readonly POLISHED_GRANITE_STAIRS: Block;
  readonly POLISHED_TUFF: Block;
  readonly POLISHED_TUFF_SLAB: Block;
  readonly POLISHED_TUFF_STAIRS: Block;
  readonly POLISHED_TUFF_WALL: Block;
  readonly POPPY: Block;
  readonly POTATOES: Block;
  readonly POTTED_ACACIA_SAPLING: Block;
  readonly POTTED_ALLIUM: Block;
  readonly POTTED_AZALEA: Block;
  readonly POTTED_AZURE_BLUET: Block;
  readonly POTTED_BAMBOO: Block;
  readonly POTTED_BIRCH_SAPLING: Block;
  readonly POTTED_BLUE_ORCHID: Block;
  readonly POTTED_BROWN_MUSHROOM: Block;
  readonly POTTED_CACTUS: Block;
  readonly POTTED_CHERRY_SAPLING: Block;
  readonly POTTED_CLOSED_EYEBLOSSOM: Block;
  readonly POTTED_CORNFLOWER: Block;
  readonly POTTED_CRIMSON_FUNGUS: Block;
  readonly POTTED_CRIMSON_ROOTS: Block;
  readonly POTTED_DANDELION: Block;
  readonly POTTED_DARK_OAK_SAPLING: Block;
  readonly POTTED_DEAD_BUSH: Block;
  readonly POTTED_FERN: Block;
  readonly POTTED_FLOWERING_AZALEA: Block;
  readonly POTTED_JUNGLE_SAPLING: Block;
  readonly POTTED_LILY_OF_THE_VALLEY: Block;
  readonly POTTED_MANGROVE_PROPAGULE: Block;
  readonly POTTED_OAK_SAPLING: Block;
  readonly POTTED_OPEN_EYEBLOSSOM: Block;
  readonly POTTED_ORANGE_TULIP: Block;
  readonly POTTED_OXEYE_DAISY: Block;
  readonly POTTED_PALE_OAK_SAPLING: Block;
  readonly POTTED_PINK_TULIP: Block;
  readonly POTTED_POPPY: Block;
  readonly POTTED_RED_MUSHROOM: Block;
  readonly POTTED_RED_TULIP: Block;
  readonly POTTED_SPRUCE_SAPLING: Block;
  readonly POTTED_TORCHFLOWER: Block;
  readonly POTTED_WARPED_FUNGUS: Block;
  readonly POTTED_WARPED_ROOTS: Block;
  readonly POTTED_WHITE_TULIP: Block;
  readonly POTTED_WITHER_ROSE: Block;
  readonly POWDER_SNOW: Block;
  readonly POWDER_SNOW_CAULDRON: Block;
  readonly POWERED_RAIL: Block;
  readonly PRISMARINE: Block;
  readonly PRISMARINE_BRICKS: Block;
  readonly PRISMARINE_BRICK_SLAB: Block;
  readonly PRISMARINE_BRICK_STAIRS: Block;
  readonly PRISMARINE_SLAB: Block;
  readonly PRISMARINE_STAIRS: Block;
  readonly PRISMARINE_WALL: Block;
  readonly PUMPKIN: Block;
  readonly PUMPKIN_STEM: Block;
  readonly PURPLE_BANNER: Block;
  readonly PURPLE_BED: Block;
  readonly PURPLE_CANDLE: Block;
  readonly PURPLE_CANDLE_CAKE: Block;
  readonly PURPLE_CARPET: Block;
  readonly PURPLE_CONCRETE: Block;
  readonly PURPLE_CONCRETE_POWDER: Block;
  readonly PURPLE_GLAZED_TERRACOTTA: Block;
  readonly PURPLE_SHULKER_BOX: Block;
  readonly PURPLE_STAINED_GLASS: Block;
  readonly PURPLE_STAINED_GLASS_PANE: Block;
  readonly PURPLE_TERRACOTTA: Block;
  readonly PURPLE_WALL_BANNER: Block;
  readonly PURPLE_WOOL: Block;
  readonly PURPUR_BLOCK: Block;
  readonly PURPUR_PILLAR: Block;
  readonly PURPUR_SLAB: Block;
  readonly PURPUR_STAIRS: Block;
  readonly QUARTZ_BLOCK: Block;
  readonly QUARTZ_BRICKS: Block;
  readonly QUARTZ_PILLAR: Block;
  readonly QUARTZ_SLAB: Block;
  readonly QUARTZ_STAIRS: Block;
  readonly RAIL: Block;
  readonly RAW_COPPER_BLOCK: Block;
  readonly RAW_GOLD_BLOCK: Block;
  readonly RAW_IRON_BLOCK: Block;
  readonly REDSTONE_BLOCK: Block;
  readonly REDSTONE_LAMP: Block;
  readonly REDSTONE_ORE: Block;
  readonly REDSTONE_TORCH: Block;
  readonly REDSTONE_WALL_TORCH: Block;
  readonly REDSTONE_WIRE: Block;
  readonly RED_BANNER: Block;
  readonly RED_BED: Block;
  readonly RED_CANDLE: Block;
  readonly RED_CANDLE_CAKE: Block;
  readonly RED_CARPET: Block;
  readonly RED_CONCRETE: Block;
  readonly RED_CONCRETE_POWDER: Block;
  readonly RED_GLAZED_TERRACOTTA: Block;
  readonly RED_MUSHROOM: Block;
  readonly RED_MUSHROOM_BLOCK: Block;
  readonly RED_NETHER_BRICKS: Block;
  readonly RED_NETHER_BRICK_SLAB: Block;
  readonly RED_NETHER_BRICK_STAIRS: Block;
  readonly RED_NETHER_BRICK_WALL: Block;
  readonly RED_SAND: Block;
  readonly RED_SANDSTONE: Block;
  readonly RED_SANDSTONE_SLAB: Block;
  readonly RED_SANDSTONE_STAIRS: Block;
  readonly RED_SANDSTONE_WALL: Block;
  readonly RED_SHULKER_BOX: Block;
  readonly RED_STAINED_GLASS: Block;
  readonly RED_STAINED_GLASS_PANE: Block;
  readonly RED_TERRACOTTA: Block;
  readonly RED_TULIP: Block;
  readonly RED_WALL_BANNER: Block;
  readonly RED_WOOL: Block;
  readonly REINFORCED_DEEPSLATE: Block;
  readonly REPEATER: Block;
  readonly REPEATING_COMMAND_BLOCK: Block;
  readonly RESIN_BLOCK: Block;
  readonly RESIN_BRICKS: Block;
  readonly RESIN_BRICK_SLAB: Block;
  readonly RESIN_BRICK_STAIRS: Block;
  readonly RESIN_BRICK_WALL: Block;
  readonly RESIN_CLUMP: Block;
  readonly RESPAWN_ANCHOR: Block;
  readonly ROOTED_DIRT: Block;
  readonly ROSE_BUSH: Block;
  readonly SAND: Block;
  readonly SANDSTONE: Block;
  readonly SANDSTONE_SLAB: Block;
  readonly SANDSTONE_STAIRS: Block;
  readonly SANDSTONE_WALL: Block;
  readonly SCAFFOLDING: Block;
  readonly SCULK: Block;
  readonly SCULK_CATALYST: Block;
  readonly SCULK_SENSOR: Block;
  readonly SCULK_SHRIEKER: Block;
  readonly SCULK_VEIN: Block;
  readonly SEAGRASS: Block;
  readonly SEA_LANTERN: Block;
  readonly SEA_PICKLE: Block;
  readonly SHORT_DRY_GRASS: Block;
  readonly SHORT_GRASS: Block;
  readonly SHROOMLIGHT: Block;
  readonly SHULKER_BOX: Block;
  readonly SKELETON_SKULL: Block;
  readonly SKELETON_WALL_SKULL: Block;
  readonly SLIME_BLOCK: Block;
  readonly SMALL_AMETHYST_BUD: Block;
  readonly SMALL_DRIPLEAF: Block;
  readonly SMITHING_TABLE: Block;
  readonly SMOKER: Block;
  readonly SMOOTH_BASALT: Block;
  readonly SMOOTH_QUARTZ: Block;
  readonly SMOOTH_QUARTZ_SLAB: Block;
  readonly SMOOTH_QUARTZ_STAIRS: Block;
  readonly SMOOTH_RED_SANDSTONE: Block;
  readonly SMOOTH_RED_SANDSTONE_SLAB: Block;
  readonly SMOOTH_RED_SANDSTONE_STAIRS: Block;
  readonly SMOOTH_SANDSTONE: Block;
  readonly SMOOTH_SANDSTONE_SLAB: Block;
  readonly SMOOTH_SANDSTONE_STAIRS: Block;
  readonly SMOOTH_STONE: Block;
  readonly SMOOTH_STONE_SLAB: Block;
  readonly SNIFFER_EGG: Block;
  readonly SNOW: Block;
  readonly SNOW_BLOCK: Block;
  readonly SOUL_CAMPFIRE: Block;
  readonly SOUL_FIRE: Block;
  readonly SOUL_LANTERN: Block;
  readonly SOUL_SAND: Block;
  readonly SOUL_SOIL: Block;
  readonly SOUL_TORCH: Block;
  readonly SOUL_WALL_TORCH: Block;
  readonly SPAWNER: Block;
  readonly SPONGE: Block;
  readonly SPORE_BLOSSOM: Block;
  readonly SPRUCE_BUTTON: Block;
  readonly SPRUCE_DOOR: Block;
  readonly SPRUCE_FENCE: Block;
  readonly SPRUCE_FENCE_GATE: Block;
  readonly SPRUCE_HANGING_SIGN: Block;
  readonly SPRUCE_LEAVES: Block;
  readonly SPRUCE_LOG: Block;
  readonly SPRUCE_PLANKS: Block;
  readonly SPRUCE_PRESSURE_PLATE: Block;
  readonly SPRUCE_SAPLING: Block;
  readonly SPRUCE_SIGN: Block;
  readonly SPRUCE_SLAB: Block;
  readonly SPRUCE_STAIRS: Block;
  readonly SPRUCE_TRAPDOOR: Block;
  readonly SPRUCE_WALL_HANGING_SIGN: Block;
  readonly SPRUCE_WALL_SIGN: Block;
  readonly SPRUCE_WOOD: Block;
  readonly STICKY_PISTON: Block;
  readonly STONE: Block;
  readonly STONECUTTER: Block;
  readonly STONE_BRICKS: Block;
  readonly STONE_BRICK_SLAB: Block;
  readonly STONE_BRICK_STAIRS: Block;
  readonly STONE_BRICK_WALL: Block;
  readonly STONE_BUTTON: Block;
  readonly STONE_PRESSURE_PLATE: Block;
  readonly STONE_SLAB: Block;
  readonly STONE_STAIRS: Block;
  readonly STRIPPED_ACACIA_LOG: Block;
  readonly STRIPPED_ACACIA_WOOD: Block;
  readonly STRIPPED_BAMBOO_BLOCK: Block;
  readonly STRIPPED_BIRCH_LOG: Block;
  readonly STRIPPED_BIRCH_WOOD: Block;
  readonly STRIPPED_CHERRY_LOG: Block;
  readonly STRIPPED_CHERRY_WOOD: Block;
  readonly STRIPPED_CRIMSON_HYPHAE: Block;
  readonly STRIPPED_CRIMSON_STEM: Block;
  readonly STRIPPED_DARK_OAK_LOG: Block;
  readonly STRIPPED_DARK_OAK_WOOD: Block;
  readonly STRIPPED_JUNGLE_LOG: Block;
  readonly STRIPPED_JUNGLE_WOOD: Block;
  readonly STRIPPED_MANGROVE_LOG: Block;
  readonly STRIPPED_MANGROVE_WOOD: Block;
  readonly STRIPPED_OAK_LOG: Block;
  readonly STRIPPED_OAK_WOOD: Block;
  readonly STRIPPED_PALE_OAK_LOG: Block;
  readonly STRIPPED_PALE_OAK_WOOD: Block;
  readonly STRIPPED_SPRUCE_LOG: Block;
  readonly STRIPPED_SPRUCE_WOOD: Block;
  readonly STRIPPED_WARPED_HYPHAE: Block;
  readonly STRIPPED_WARPED_STEM: Block;
  readonly STRUCTURE_BLOCK: Block;
  readonly STRUCTURE_VOID: Block;
  readonly SUGAR_CANE: Block;
  readonly SUNFLOWER: Block;
  readonly SUSPICIOUS_GRAVEL: Block;
  readonly SUSPICIOUS_SAND: Block;
  readonly SWEET_BERRY_BUSH: Block;
  readonly TALL_DRY_GRASS: Block;
  readonly TALL_GRASS: Block;
  readonly TALL_SEAGRASS: Block;
  readonly TARGET: Block;
  readonly TERRACOTTA: Block;
  readonly TEST_BLOCK: Block;
  readonly TEST_INSTANCE_BLOCK: Block;
  readonly TINTED_GLASS: Block;
  readonly TNT: Block;
  readonly TORCH: Block;
  readonly TORCHFLOWER: Block;
  readonly TORCHFLOWER_CROP: Block;
  readonly TRAPPED_CHEST: Block;
  readonly TRIAL_SPAWNER: Block;
  readonly TRIPWIRE: Block;
  readonly TRIPWIRE_HOOK: Block;
  readonly TUBE_CORAL: Block;
  readonly TUBE_CORAL_BLOCK: Block;
  readonly TUBE_CORAL_FAN: Block;
  readonly TUBE_CORAL_WALL_FAN: Block;
  readonly TUFF: Block;
  readonly TUFF_BRICKS: Block;
  readonly TUFF_BRICK_SLAB: Block;
  readonly TUFF_BRICK_STAIRS: Block;
  readonly TUFF_BRICK_WALL: Block;
  readonly TUFF_SLAB: Block;
  readonly TUFF_STAIRS: Block;
  readonly TUFF_WALL: Block;
  readonly TURTLE_EGG: Block;
  readonly TWISTING_VINES: Block;
  readonly TWISTING_VINES_PLANT: Block;
  readonly VAULT: Block;
  readonly VERDANT_FROGLIGHT: Block;
  readonly VINE: Block;
  readonly VOID_AIR: Block;
  readonly WALL_TORCH: Block;
  readonly WARPED_BUTTON: Block;
  readonly WARPED_DOOR: Block;
  readonly WARPED_FENCE: Block;
  readonly WARPED_FENCE_GATE: Block;
  readonly WARPED_FUNGUS: Block;
  readonly WARPED_HANGING_SIGN: Block;
  readonly WARPED_HYPHAE: Block;
  readonly WARPED_NYLIUM: Block;
  readonly WARPED_PLANKS: Block;
  readonly WARPED_PRESSURE_PLATE: Block;
  readonly WARPED_ROOTS: Block;
  readonly WARPED_SIGN: Block;
  readonly WARPED_SLAB: Block;
  readonly WARPED_STAIRS: Block;
  readonly WARPED_STEM: Block;
  readonly WARPED_TRAPDOOR: Block;
  readonly WARPED_WALL_HANGING_SIGN: Block;
  readonly WARPED_WALL_SIGN: Block;
  readonly WARPED_WART_BLOCK: Block;
  readonly WATER: Block;
  readonly WATER_CAULDRON: Block;
  readonly WAXED_CHISELED_COPPER: Block;
  readonly WAXED_COPPER_BLOCK: Block;
  readonly WAXED_COPPER_BULB: Block;
  readonly WAXED_COPPER_DOOR: Block;
  readonly WAXED_COPPER_GRATE: Block;
  readonly WAXED_COPPER_TRAPDOOR: Block;
  readonly WAXED_CUT_COPPER: Block;
  readonly WAXED_CUT_COPPER_SLAB: Block;
  readonly WAXED_CUT_COPPER_STAIRS: Block;
  readonly WAXED_EXPOSED_CHISELED_COPPER: Block;
  readonly WAXED_EXPOSED_COPPER: Block;
  readonly WAXED_EXPOSED_COPPER_BULB: Block;
  readonly WAXED_EXPOSED_COPPER_DOOR: Block;
  readonly WAXED_EXPOSED_COPPER_GRATE: Block;
  readonly WAXED_EXPOSED_COPPER_TRAPDOOR: Block;
  readonly WAXED_EXPOSED_CUT_COPPER: Block;
  readonly WAXED_EXPOSED_CUT_COPPER_SLAB: Block;
  readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: Block;
  readonly WAXED_OXIDIZED_CHISELED_COPPER: Block;
  readonly WAXED_OXIDIZED_COPPER: Block;
  readonly WAXED_OXIDIZED_COPPER_BULB: Block;
  readonly WAXED_OXIDIZED_COPPER_DOOR: Block;
  readonly WAXED_OXIDIZED_COPPER_GRATE: Block;
  readonly WAXED_OXIDIZED_COPPER_TRAPDOOR: Block;
  readonly WAXED_OXIDIZED_CUT_COPPER: Block;
  readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: Block;
  readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: Block;
  readonly WAXED_WEATHERED_CHISELED_COPPER: Block;
  readonly WAXED_WEATHERED_COPPER: Block;
  readonly WAXED_WEATHERED_COPPER_BULB: Block;
  readonly WAXED_WEATHERED_COPPER_DOOR: Block;
  readonly WAXED_WEATHERED_COPPER_GRATE: Block;
  readonly WAXED_WEATHERED_COPPER_TRAPDOOR: Block;
  readonly WAXED_WEATHERED_CUT_COPPER: Block;
  readonly WAXED_WEATHERED_CUT_COPPER_SLAB: Block;
  readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: Block;
  readonly WEATHERED_CHISELED_COPPER: Block;
  readonly WEATHERED_COPPER: Block;
  readonly WEATHERED_COPPER_BULB: Block;
  readonly WEATHERED_COPPER_DOOR: Block;
  readonly WEATHERED_COPPER_GRATE: Block;
  readonly WEATHERED_COPPER_TRAPDOOR: Block;
  readonly WEATHERED_CUT_COPPER: Block;
  readonly WEATHERED_CUT_COPPER_SLAB: Block;
  readonly WEATHERED_CUT_COPPER_STAIRS: Block;
  readonly WEEPING_VINES: Block;
  readonly WEEPING_VINES_PLANT: Block;
  readonly WET_SPONGE: Block;
  readonly WHEAT: Block;
  readonly WHITE_BANNER: Block;
  readonly WHITE_BED: Block;
  readonly WHITE_CANDLE: Block;
  readonly WHITE_CANDLE_CAKE: Block;
  readonly WHITE_CARPET: Block;
  readonly WHITE_CONCRETE: Block;
  readonly WHITE_CONCRETE_POWDER: Block;
  readonly WHITE_GLAZED_TERRACOTTA: Block;
  readonly WHITE_SHULKER_BOX: Block;
  readonly WHITE_STAINED_GLASS: Block;
  readonly WHITE_STAINED_GLASS_PANE: Block;
  readonly WHITE_TERRACOTTA: Block;
  readonly WHITE_TULIP: Block;
  readonly WHITE_WALL_BANNER: Block;
  readonly WHITE_WOOL: Block;
  readonly WILDFLOWERS: Block;
  readonly WITHER_ROSE: Block;
  readonly WITHER_SKELETON_SKULL: Block;
  readonly WITHER_SKELETON_WALL_SKULL: Block;
  readonly YELLOW_BANNER: Block;
  readonly YELLOW_BED: Block;
  readonly YELLOW_CANDLE: Block;
  readonly YELLOW_CANDLE_CAKE: Block;
  readonly YELLOW_CARPET: Block;
  readonly YELLOW_CONCRETE: Block;
  readonly YELLOW_CONCRETE_POWDER: Block;
  readonly YELLOW_GLAZED_TERRACOTTA: Block;
  readonly YELLOW_SHULKER_BOX: Block;
  readonly YELLOW_STAINED_GLASS: Block;
  readonly YELLOW_STAINED_GLASS_PANE: Block;
  readonly YELLOW_TERRACOTTA: Block;
  readonly YELLOW_WALL_BANNER: Block;
  readonly YELLOW_WOOL: Block;
  readonly ZOMBIE_HEAD: Block;
  readonly ZOMBIE_WALL_HEAD: Block;
}

/** JVM class net.minecraft.world.level.block.BlockTypes. */
export interface BlockTypesMembers {
}
export type BlockTypes = BlockTypesMembers;
export interface BlockTypesStatics {
  new(): BlockTypes;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [Block]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [Block]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [Block]>;
}

/** JVM interface net.minecraft.world.level.block.BonemealableBlock. */
export interface BonemealableBlockMembers {
  getParticlePos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getType(): BonemealableBlock_Type;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BonemealableBlock = BonemealableBlockMembers;
export interface BonemealableBlockStatics {
  findSpreadableNeighbourPos(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): JavaOptional<j_net_minecraft_core.BlockPos>;
  hasSpreadableNeighbourPos(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** Live JVM enum net.minecraft.world.level.block.BonemealableBlock$Type; constants are host handles, not strings. */
export type BonemealableBlock_Type = JavaEnum<"net.minecraft.world.level.block.BonemealableBlock$Type", "GROWER" | "NEIGHBOR_SPREADER"> & BonemealableBlock_TypeMembers;
export interface BonemealableBlock_TypeMembers {
}
export interface BonemealableBlock_TypeStatics {
  readonly GROWER: BonemealableBlock_Type;
  readonly NEIGHBOR_SPREADER: BonemealableBlock_Type;
  valueOf(arg0: string): BonemealableBlock_Type;
  values(): Array<BonemealableBlock_Type>;
}

/** JVM class net.minecraft.world.level.block.BonemealableFeaturePlacerBlock. */
export interface BonemealableFeaturePlacerBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BonemealableFeaturePlacerBlock]>;
  getType(): BonemealableBlock_Type;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BonemealableFeaturePlacerBlock = BonemealableFeaturePlacerBlockMembers & Block & BonemealableBlock;
export interface BonemealableFeaturePlacerBlockStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BonemealableFeaturePlacerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BonemealableFeaturePlacerBlock]>;
}

/** JVM class net.minecraft.world.level.block.BrewingStandBlock. */
export interface BrewingStandBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BrewingStandBlock]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type BrewingStandBlock = BrewingStandBlockMembers & BaseEntityBlock;
export interface BrewingStandBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BrewingStandBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BrewingStandBlock]>;
  readonly HAS_BOTTLE: Array<j_net_minecraft_world_level_block_state_properties.BooleanProperty>;
}

/** JVM class net.minecraft.world.level.block.BrushableBlock. */
export interface BrushableBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, Fallable];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BrushableBlock]>;
  getBrushCompletedSound(): j_net_minecraft_sounds.SoundEvent;
  getBrushSound(): j_net_minecraft_sounds.SoundEvent;
  getTurnsInto(): Block;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  onBrokenAfterFall(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
  onPlace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: boolean): void;
  tick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  updateShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_world_level.ScheduledTickAccess, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_core.Direction, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block_state.BlockState, arg7: j_net_minecraft_util.RandomSource): j_net_minecraft_world_level_block_state.BlockState;
}
export type BrushableBlock = BrushableBlockMembers & BaseEntityBlock & Fallable;
export interface BrushableBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_sounds.SoundEvent, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BrushableBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BrushableBlock]>;
  readonly TICK_DELAY: 2;
}

/** JVM class net.minecraft.world.level.block.BubbleColumnBlock. */
export interface BubbleColumnBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BucketPickup];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BubbleColumnBlock]>;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  pickupBlock(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_item.ItemStack;
}
export type BubbleColumnBlock = BubbleColumnBlockMembers & Block & BucketPickup;
export interface BubbleColumnBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BubbleColumnBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BubbleColumnBlock]>;
  readonly DRAG_DOWN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  updateColumn(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  updateColumn(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}

/** JVM interface net.minecraft.world.level.block.BucketPickup. */
export interface BucketPickupMembers {
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  pickupBlock(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_item.ItemStack;
}
export type BucketPickup = BucketPickupMembers;
export interface BucketPickupStatics {
}

/** JVM class net.minecraft.world.level.block.BuddingAmethystBlock. */
export interface BuddingAmethystBlockMembers {
  readonly __javaSupertypes?: readonly [AmethystBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BuddingAmethystBlock]>;
}
export type BuddingAmethystBlock = BuddingAmethystBlockMembers & AmethystBlock;
export interface BuddingAmethystBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): BuddingAmethystBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BuddingAmethystBlock]>;
  readonly GROWTH_CHANCE: 5;
  canClusterGrowAtState(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.BushBlock. */
export interface BushBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BushBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type BushBlock = BushBlockMembers & VegetationBlock & BonemealableBlock;
export interface BushBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BushBlock]>;
}

/** JVM class net.minecraft.world.level.block.ButtonBlock. */
export interface ButtonBlockMembers {
  readonly __javaSupertypes?: readonly [FaceAttachedHorizontalDirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ButtonBlock]>;
  press(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player | null): void;
}
export type ButtonBlock = ButtonBlockMembers & FaceAttachedHorizontalDirectionalBlock;
export interface ButtonBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ButtonBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.CactusBlock. */
export interface CactusBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CactusBlock]>;
}
export type CactusBlock = CactusBlockMembers & Block;
export interface CactusBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CactusBlock]>;
  readonly MAX_AGE: 15;
}

/** JVM class net.minecraft.world.level.block.CactusFlowerBlock. */
export interface CactusFlowerBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CactusFlowerBlock]>;
}
export type CactusFlowerBlock = CactusFlowerBlockMembers & VegetationBlock;
export interface CactusFlowerBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CactusFlowerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CactusFlowerBlock]>;
}

/** JVM class net.minecraft.world.level.block.CakeBlock. */
export interface CakeBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CakeBlock]>;
}
export type CakeBlock = CakeBlockMembers & Block;
export interface CakeBlockStatics {
  readonly BITES: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CakeBlock]>;
  readonly FULL_CAKE_SIGNAL: number;
  readonly MAX_BITES: 6;
  getOutputSignal(arg0: number): number;
}

/** JVM class net.minecraft.world.level.block.CalibratedSculkSensorBlock. */
export interface CalibratedSculkSensorBlockMembers {
  readonly __javaSupertypes?: readonly [SculkSensorBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CalibratedSculkSensorBlock]>;
  getActiveTicks(): number;
  getSignal(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}
export type CalibratedSculkSensorBlock = CalibratedSculkSensorBlockMembers & SculkSensorBlock;
export interface CalibratedSculkSensorBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CalibratedSculkSensorBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CalibratedSculkSensorBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.CampfireBlock. */
export interface CampfireBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, SimpleWaterloggedBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CampfireBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type CampfireBlock = CampfireBlockMembers & BaseEntityBlock & SimpleWaterloggedBlock;
export interface CampfireBlockStatics {
  new(arg0: boolean, arg1: number, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CampfireBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CampfireBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly SIGNAL_FIRE: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  canLight(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  dowse(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  isLitCampfire(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isSmokeyPos(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): boolean;
  makeParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: boolean, arg3: boolean): void;
}

/** JVM class net.minecraft.world.level.block.CandleBlock. */
export interface CandleBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractCandleBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CandleBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type CandleBlock = CandleBlockMembers & AbstractCandleBlock & SimpleWaterloggedBlock;
export interface CandleBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CandleBlock;
  readonly CANDLES: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CandleBlock]>;
  readonly LIGHT_EMISSION: JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_world_level_block_state.BlockState]>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly MAX_CANDLES: 4;
  readonly MIN_CANDLES: 1;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  canLight(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.CandleCakeBlock. */
export interface CandleCakeBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractCandleBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CandleCakeBlock]>;
}
export type CandleCakeBlock = CandleCakeBlockMembers & AbstractCandleBlock;
export interface CandleCakeBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CandleCakeBlock]>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  byCandle(arg0: CandleBlock): j_net_minecraft_world_level_block_state.BlockState;
  canLight(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.CarpetBlock. */
export interface CarpetBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CarpetBlock]>;
}
export type CarpetBlock = CarpetBlockMembers & Block;
export interface CarpetBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CarpetBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CarpetBlock]>;
}

/** JVM class net.minecraft.world.level.block.CarrotBlock. */
export interface CarrotBlockMembers {
  readonly __javaSupertypes?: readonly [CropBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CarrotBlock]>;
}
export type CarrotBlock = CarrotBlockMembers & CropBlock;
export interface CarrotBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CarrotBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CarrotBlock]>;
}

/** JVM class net.minecraft.world.level.block.CartographyTableBlock. */
export interface CartographyTableBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CartographyTableBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
}
export type CartographyTableBlock = CartographyTableBlockMembers & Block;
export interface CartographyTableBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CartographyTableBlock]>;
}

/** JVM class net.minecraft.world.level.block.CarvedPumpkinBlock. */
export interface CarvedPumpkinBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock];
  canSpawnGolem(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CarvedPumpkinBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type CarvedPumpkinBlock = CarvedPumpkinBlockMembers & HorizontalDirectionalBlock;
export interface CarvedPumpkinBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CarvedPumpkinBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  clearPatternBlocks(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state_pattern.BlockPattern_BlockPatternMatch): void;
  updatePatternBlocks(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state_pattern.BlockPattern_BlockPatternMatch): void;
}

/** JVM class net.minecraft.world.level.block.CauldronBlock. */
export interface CauldronBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractCauldronBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CauldronBlock]>;
  handlePrecipitation(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_biome.Biome_Precipitation): void;
  isFull(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type CauldronBlock = CauldronBlockMembers & AbstractCauldronBlock;
export interface CauldronBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CauldronBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CauldronBlock]>;
}

/** JVM interface net.minecraft.world.level.block.CaveVines. */
export interface CaveVinesMembers {
}
export type CaveVines = CaveVinesMembers;
export interface CaveVinesStatics {
  readonly BERRIES: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly SHAPE: j_net_minecraft_world_phys_shapes.VoxelShape;
  emission(arg0: number): JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_world_level_block_state.BlockState]>;
  hasGlowBerries(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  use(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_world.InteractionResult;
}

/** JVM class net.minecraft.world.level.block.CaveVinesBlock. */
export interface CaveVinesBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantHeadBlock, CaveVines];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CaveVinesBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type CaveVinesBlock = CaveVinesBlockMembers & GrowingPlantHeadBlock & CaveVines;
export interface CaveVinesBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CaveVinesBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CaveVinesBlock]>;
}

/** JVM class net.minecraft.world.level.block.CaveVinesPlantBlock. */
export interface CaveVinesPlantBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantBodyBlock, CaveVines];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CaveVinesPlantBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type CaveVinesPlantBlock = CaveVinesPlantBlockMembers & GrowingPlantBodyBlock & CaveVines;
export interface CaveVinesPlantBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CaveVinesPlantBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CaveVinesPlantBlock]>;
}

/** JVM class net.minecraft.world.level.block.CeilingHangingSignBlock. */
export interface CeilingHangingSignBlockMembers {
  readonly __javaSupertypes?: readonly [SignBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CeilingHangingSignBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  getYRotationDegrees(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type CeilingHangingSignBlock = CeilingHangingSignBlockMembers & SignBlock;
export interface CeilingHangingSignBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state_properties.WoodType, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CeilingHangingSignBlock;
  readonly ATTACHED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CeilingHangingSignBlock]>;
  readonly ROTATION: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
}

/** JVM class net.minecraft.world.level.block.ChainBlock. */
export interface ChainBlockMembers {
  readonly __javaSupertypes?: readonly [RotatedPillarBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChainBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type ChainBlock = ChainBlockMembers & RotatedPillarBlock & SimpleWaterloggedBlock;
export interface ChainBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ChainBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ChainBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM interface net.minecraft.world.level.block.ChangeOverTimeBlock. */
export interface ChangeOverTimeBlockMembers<T /* extends JavaOpaque<"java.lang.Enum", [T]> */ = unknown> {
  changeOverTime(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  getAge(): T;
  getChanceModifier(): number;
  getNext(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
  getNextState(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
}
export type ChangeOverTimeBlock<T /* extends JavaOpaque<"java.lang.Enum", [T]> */ = unknown> = ChangeOverTimeBlockMembers<T>;
export interface ChangeOverTimeBlockStatics {
  readonly SCAN_DISTANCE: 4;
}

/** JVM class net.minecraft.world.level.block.ChestBlock. */
export interface ChestBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractChestBlock<j_net_minecraft_world_level_block_entity.ChestBlockEntity>, SimpleWaterloggedBlock];
  blockEntityType(): j_net_minecraft_world_level_block_entity.BlockEntityType<j_net_minecraft_world_level_block_entity.ChestBlockEntity>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChestBlock]>;
  combine(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): DoubleBlockCombiner_NeighborCombineResult<j_net_minecraft_world_level_block_entity.ChestBlockEntity>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): j_net_minecraft_world.MenuProvider | null;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type ChestBlock = ChestBlockMembers & AbstractChestBlock<j_net_minecraft_world_level_block_entity.ChestBlockEntity> & SimpleWaterloggedBlock;
export interface ChestBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ChestBlock]>;
  readonly EVENT_SET_OPEN_COUNT: 1;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly MENU_PROVIDER_COMBINER: DoubleBlockCombiner_Combiner<j_net_minecraft_world_level_block_entity.ChestBlockEntity, JavaOptional<j_net_minecraft_world.MenuProvider>>;
  readonly TYPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.ChestType>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getBlockType(arg0: j_net_minecraft_world_level_block_state.BlockState): DoubleBlockCombiner_BlockType;
  getConnectedDirection(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_core.Direction;
  getContainer(arg0: ChestBlock, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos, arg4: boolean): j_net_minecraft_world.Container | null;
  isBlockedChestByBlock(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isChestBlockedAt(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): boolean;
  opennessCombiner(arg0: j_net_minecraft_world_level_block_entity.LidBlockEntity): DoubleBlockCombiner_Combiner<j_net_minecraft_world_level_block_entity.ChestBlockEntity, JavaOpaque<"it.unimi.dsi.fastutil.floats.Float2FloatFunction">>;
}

/** JVM class net.minecraft.world.level.block.ChestBlock$DoubleInventory. */
export interface ChestBlock_DoubleInventoryMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.MenuProvider];
  readonly container: j_net_minecraft_world.CompoundContainer;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu | null;
  getDisplayName(): j_net_minecraft_network_chat.Component;
}
export type ChestBlock_DoubleInventory = ChestBlock_DoubleInventoryMembers & j_net_minecraft_world.MenuProvider;
export interface ChestBlock_DoubleInventoryStatics {
  wrap(arg0: j_net_minecraft_world.MenuProvider, arg1: j_net_minecraft_world.CompoundContainer): ChestBlock_DoubleInventory;
}

/** JVM class net.minecraft.world.level.block.ChiseledBookShelfBlock. */
export interface ChiseledBookShelfBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChiseledBookShelfBlock]>;
  getHitSlot(arg0: j_net_minecraft_world_phys.BlockHitResult, arg1: j_net_minecraft_world_level_block_state.BlockState): JavaOptionalNumber;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}
export type ChiseledBookShelfBlock = ChiseledBookShelfBlockMembers & BaseEntityBlock;
export interface ChiseledBookShelfBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ChiseledBookShelfBlock;
  readonly BOOKS_PER_ROW: 3;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ChiseledBookShelfBlock]>;
  readonly SLOT_OCCUPIED_PROPERTIES: JavaList<j_net_minecraft_world_level_block_state_properties.BooleanProperty>;
  getSection(arg0: number): number;
}

/** JVM class net.minecraft.world.level.block.ChorusFlowerBlock. */
export interface ChorusFlowerBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChorusFlowerBlock]>;
  getBlockSupportShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
}
export type ChorusFlowerBlock = ChorusFlowerBlockMembers & Block;
export interface ChorusFlowerBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ChorusFlowerBlock]>;
  readonly DEAD_AGE: 5;
  generatePlant(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: number): void;
}

/** JVM class net.minecraft.world.level.block.ChorusPlantBlock. */
export interface ChorusPlantBlockMembers {
  readonly __javaSupertypes?: readonly [PipeBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ChorusPlantBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type ChorusPlantBlock = ChorusPlantBlockMembers & PipeBlock;
export interface ChorusPlantBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ChorusPlantBlock]>;
  getStateWithConnections(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM class net.minecraft.world.level.block.CocoaBlock. */
export interface CocoaBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CocoaBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type CocoaBlock = CocoaBlockMembers & HorizontalDirectionalBlock & BonemealableBlock;
export interface CocoaBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CocoaBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CocoaBlock]>;
  readonly MAX_AGE: 2;
}

/** JVM class net.minecraft.world.level.block.ColoredFallingBlock. */
export interface ColoredFallingBlockMembers {
  readonly __javaSupertypes?: readonly [FallingBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ColoredFallingBlock]>;
  getDustColor(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
}
export type ColoredFallingBlock = ColoredFallingBlockMembers & FallingBlock;
export interface ColoredFallingBlockStatics {
  new(arg0: j_net_minecraft_util.ColorRGBA, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ColoredFallingBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ColoredFallingBlock]>;
}

/** JVM class net.minecraft.world.level.block.CommandBlock. */
export interface CommandBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, GameMasterBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CommandBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type CommandBlock = CommandBlockMembers & BaseEntityBlock & GameMasterBlock;
export interface CommandBlockStatics {
  new(arg0: boolean, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CommandBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CommandBlock]>;
  readonly CONDITIONAL: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.ComparatorBlock. */
export interface ComparatorBlockMembers {
  readonly __javaSupertypes?: readonly [DiodeBlock, EntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ComparatorBlock]>;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  updateShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_world_level.ScheduledTickAccess, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_core.Direction, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block_state.BlockState, arg7: j_net_minecraft_util.RandomSource): j_net_minecraft_world_level_block_state.BlockState;
}
export type ComparatorBlock = ComparatorBlockMembers & DiodeBlock & EntityBlock;
export interface ComparatorBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ComparatorBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ComparatorBlock]>;
  readonly MODE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.ComparatorMode>;
}

/** JVM class net.minecraft.world.level.block.ComposterBlock. */
export interface ComposterBlockMembers {
  readonly __javaSupertypes?: readonly [Block, j_net_minecraft_world.WorldlyContainerHolder];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ComposterBlock]>;
  getContainer(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.WorldlyContainer;
}
export type ComposterBlock = ComposterBlockMembers & Block & j_net_minecraft_world.WorldlyContainerHolder;
export interface ComposterBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ComposterBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ComposterBlock]>;
  readonly COMPOSTABLES: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2FloatMap", [j_net_minecraft_world_level.ItemLike]>;
  readonly LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_LEVEL: 7;
  readonly MIN_LEVEL: 0;
  readonly READY: 8;
  bootStrap(): void;
  extractProduce(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  handleFill(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
  insertItem(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_server_level.ServerLevel, arg3: j_net_minecraft_world_item.ItemStack, arg4: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM class net.minecraft.world.level.block.ComposterBlock$EmptyContainer. */
export interface ComposterBlock_EmptyContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.SimpleContainer, j_net_minecraft_world.WorldlyContainer];
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
}
export type ComposterBlock_EmptyContainer = ComposterBlock_EmptyContainerMembers & j_net_minecraft_world.SimpleContainer & j_net_minecraft_world.WorldlyContainer;
export interface ComposterBlock_EmptyContainerStatics {
  new(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): ComposterBlock_EmptyContainer;
}

/** JVM class net.minecraft.world.level.block.ComposterBlock$InputContainer. */
export interface ComposterBlock_InputContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.SimpleContainer, j_net_minecraft_world.WorldlyContainer];
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  getMaxStackSize(): number;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
  setChanged(): void;
}
export type ComposterBlock_InputContainer = ComposterBlock_InputContainerMembers & j_net_minecraft_world.SimpleContainer & j_net_minecraft_world.WorldlyContainer;
export interface ComposterBlock_InputContainerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos): ComposterBlock_InputContainer;
}

/** JVM class net.minecraft.world.level.block.ComposterBlock$OutputContainer. */
export interface ComposterBlock_OutputContainerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.SimpleContainer, j_net_minecraft_world.WorldlyContainer];
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  getMaxStackSize(): number;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
  setChanged(): void;
}
export type ComposterBlock_OutputContainer = ComposterBlock_OutputContainerMembers & j_net_minecraft_world.SimpleContainer & j_net_minecraft_world.WorldlyContainer;
export interface ComposterBlock_OutputContainerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack): ComposterBlock_OutputContainer;
}

/** JVM class net.minecraft.world.level.block.ConcretePowderBlock. */
export interface ConcretePowderBlockMembers {
  readonly __javaSupertypes?: readonly [FallingBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ConcretePowderBlock]>;
  getDustColor(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  onLand(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
}
export type ConcretePowderBlock = ConcretePowderBlockMembers & FallingBlock;
export interface ConcretePowderBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ConcretePowderBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConcretePowderBlock]>;
}

/** JVM class net.minecraft.world.level.block.ConduitBlock. */
export interface ConduitBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ConduitBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type ConduitBlock = ConduitBlockMembers & BaseEntityBlock & SimpleWaterloggedBlock;
export interface ConduitBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ConduitBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ConduitBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.CopperBulbBlock. */
export interface CopperBulbBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  checkAndFlip(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos): void;
}
export type CopperBulbBlock = CopperBulbBlockMembers & Block;
export interface CopperBulbBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CopperBulbBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CopperBulbBlock]>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.CoralBlock. */
export interface CoralBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CoralBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type CoralBlock = CoralBlockMembers & Block;
export interface CoralBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CoralBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CoralBlock]>;
  readonly DEAD_CORAL_FIELD: JavaOpaque<"com.mojang.serialization.MapCodec", [Block]>;
}

/** JVM class net.minecraft.world.level.block.CoralFanBlock. */
export interface CoralFanBlockMembers {
  readonly __javaSupertypes?: readonly [BaseCoralFanBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CoralFanBlock]>;
}
export type CoralFanBlock = CoralFanBlockMembers & BaseCoralFanBlock;
export interface CoralFanBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CoralFanBlock]>;
}

/** JVM class net.minecraft.world.level.block.CoralPlantBlock. */
export interface CoralPlantBlockMembers {
  readonly __javaSupertypes?: readonly [BaseCoralPlantTypeBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CoralPlantBlock]>;
}
export type CoralPlantBlock = CoralPlantBlockMembers & BaseCoralPlantTypeBlock;
export interface CoralPlantBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CoralPlantBlock]>;
}

/** JVM class net.minecraft.world.level.block.CoralWallFanBlock. */
export interface CoralWallFanBlockMembers {
  readonly __javaSupertypes?: readonly [BaseCoralWallFanBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CoralWallFanBlock]>;
}
export type CoralWallFanBlock = CoralWallFanBlockMembers & BaseCoralWallFanBlock;
export interface CoralWallFanBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CoralWallFanBlock]>;
}

/** JVM class net.minecraft.world.level.block.CrafterBlock. */
export interface CrafterBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type CrafterBlock = CrafterBlockMembers & BaseEntityBlock;
export interface CrafterBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CrafterBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CrafterBlock]>;
  readonly CRAFTING: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly TRIGGERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getPotentialResults(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item_crafting.CraftingInput): JavaOptional<j_net_minecraft_world_item_crafting.RecipeHolder<j_net_minecraft_world_item_crafting.CraftingRecipe>>;
}

/** JVM class net.minecraft.world.level.block.CraftingTableBlock. */
export interface CraftingTableBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CraftingTableBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider;
}
export type CraftingTableBlock = CraftingTableBlockMembers & Block;
export interface CraftingTableBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CraftingTableBlock]>;
}

/** JVM class net.minecraft.world.level.block.CreakingHeartBlock. */
export interface CreakingHeartBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CreakingHeartBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
}
export type CreakingHeartBlock = CreakingHeartBlockMembers & BaseEntityBlock;
export interface CreakingHeartBlockStatics {
  readonly AXIS: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction_Axis>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CreakingHeartBlock]>;
  readonly NATURAL: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly STATE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.CreakingHeartState>;
  hasRequiredLogs(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_core.BlockPos): boolean;
  isNaturalNight(arg0: j_net_minecraft_world_level.Level): boolean;
}

/** JVM class net.minecraft.world.level.block.CropBlock. */
export interface CropBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CropBlock]>;
  getAge(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  getMaxAge(): number;
  getStateForAge(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
  growCrops(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isMaxAge(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type CropBlock = CropBlockMembers & VegetationBlock & BonemealableBlock;
export interface CropBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CropBlock]>;
  readonly MAX_AGE: 7;
}

/** JVM abstract net.minecraft.world.level.block.CrossCollisionBlock. */
export interface CrossCollisionBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
}
export type CrossCollisionBlock = CrossCollisionBlockMembers & Block & SimpleWaterloggedBlock;
export interface CrossCollisionBlockStatics {
  readonly EAST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.BooleanProperty>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.CryingObsidianBlock. */
export interface CryingObsidianBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [CryingObsidianBlock]>;
}
export type CryingObsidianBlock = CryingObsidianBlockMembers & Block;
export interface CryingObsidianBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): CryingObsidianBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CryingObsidianBlock]>;
}

/** JVM class net.minecraft.world.level.block.DaylightDetectorBlock. */
export interface DaylightDetectorBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DaylightDetectorBlock]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type DaylightDetectorBlock = DaylightDetectorBlockMembers & BaseEntityBlock;
export interface DaylightDetectorBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DaylightDetectorBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DaylightDetectorBlock]>;
  readonly INVERTED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWER: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
}

/** JVM class net.minecraft.world.level.block.DecoratedPotBlock. */
export interface DecoratedPotBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DecoratedPotBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
}
export type DecoratedPotBlock = DecoratedPotBlockMembers & BaseEntityBlock & SimpleWaterloggedBlock;
export interface DecoratedPotBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DecoratedPotBlock]>;
  readonly CRACKED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly HORIZONTAL_FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly SHERDS_DYNAMIC_DROP_ID: j_net_minecraft_resources.ResourceLocation;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.DetectorRailBlock. */
export interface DetectorRailBlockMembers {
  readonly __javaSupertypes?: readonly [BaseRailBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DetectorRailBlock]>;
  getShapeProperty(): j_net_minecraft_world_level_block_state_properties.Property<j_net_minecraft_world_level_block_state_properties.RailShape>;
}
export type DetectorRailBlock = DetectorRailBlockMembers & BaseRailBlock;
export interface DetectorRailBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DetectorRailBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DetectorRailBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly SHAPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RailShape>;
}

/** JVM abstract net.minecraft.world.level.block.DiodeBlock. */
export interface DiodeBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  isLocked(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
  shouldPrioritize(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type DiodeBlock = DiodeBlockMembers & HorizontalDirectionalBlock;
export interface DiodeBlockStatics {
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  isDiode(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM abstract net.minecraft.world.level.block.DirectionalBlock. */
export interface DirectionalBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
}
export type DirectionalBlock = DirectionalBlockMembers & Block;
export interface DirectionalBlockStatics {
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.DirtPathBlock. */
export interface DirtPathBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DirtPathBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type DirtPathBlock = DirtPathBlockMembers & Block;
export interface DirtPathBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DirtPathBlock]>;
}

/** JVM class net.minecraft.world.level.block.DispenserBlock. */
export interface DispenserBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DispenserBlock]>;
  dispenseFrom(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos): void;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type DispenserBlock = DispenserBlockMembers & BaseEntityBlock;
export interface DispenserBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DispenserBlock]>;
  readonly DISPENSER_REGISTRY: JavaMap<j_net_minecraft_world_item.Item, j_net_minecraft_core_dispenser.DispenseItemBehavior>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly TRIGGERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getDispenseBehavior(arg0: j_net_minecraft_core_dispenser.BlockSource, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_core_dispenser.DispenseItemBehavior;
  getDispensePosition(arg0: j_net_minecraft_core_dispenser.BlockSource): j_net_minecraft_core.Position;
  getDispensePosition(arg0: j_net_minecraft_core_dispenser.BlockSource, arg1: number, arg2: j_net_minecraft_world_phys.Vec3): j_net_minecraft_core.Position;
  registerBehavior(arg0: j_net_minecraft_world_level.ItemLike, arg1: j_net_minecraft_core_dispenser.DispenseItemBehavior): void;
  registerProjectileBehavior(arg0: j_net_minecraft_world_level.ItemLike): void;
}

/** JVM class net.minecraft.world.level.block.DoorBlock. */
export interface DoorBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DoorBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isOpen(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  setOpen(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos, arg4: boolean): void;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
  type(): j_net_minecraft_world_level_block_state_properties.BlockSetType;
}
export type DoorBlock = DoorBlockMembers & Block;
export interface DoorBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DoorBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly HALF: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.DoubleBlockHalf>;
  readonly HINGE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.DoorHingeSide>;
  readonly OPEN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  isWoodenDoor(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): boolean;
  isWoodenDoor(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.DoubleBlockCombiner. */
export interface DoubleBlockCombinerMembers {
}
export type DoubleBlockCombiner = DoubleBlockCombinerMembers;
export interface DoubleBlockCombinerStatics {
  new(): DoubleBlockCombiner;
  combineWithNeigbour<S /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level_block_entity.BlockEntityType<S>, arg1: JavaFunction<j_net_minecraft_world_level_block_state.BlockState, DoubleBlockCombiner_BlockType>, arg2: JavaFunction<j_net_minecraft_world_level_block_state.BlockState, j_net_minecraft_core.Direction>, arg3: j_net_minecraft_world_level_block_state_properties.Property<j_net_minecraft_core.Direction>, arg4: j_net_minecraft_world_level_block_state.BlockState, arg5: j_net_minecraft_world_level.LevelAccessor, arg6: j_net_minecraft_core.BlockPos, arg7: JavaOpaque<"java.util.function.BiPredicate", [j_net_minecraft_world_level.LevelAccessor, j_net_minecraft_core.BlockPos]>): DoubleBlockCombiner_NeighborCombineResult<S>;
}

/** Live JVM enum net.minecraft.world.level.block.DoubleBlockCombiner$BlockType; constants are host handles, not strings. */
export type DoubleBlockCombiner_BlockType = JavaEnum<"net.minecraft.world.level.block.DoubleBlockCombiner$BlockType", "FIRST" | "SECOND" | "SINGLE"> & DoubleBlockCombiner_BlockTypeMembers;
export interface DoubleBlockCombiner_BlockTypeMembers {
}
export interface DoubleBlockCombiner_BlockTypeStatics {
  readonly FIRST: DoubleBlockCombiner_BlockType;
  readonly SECOND: DoubleBlockCombiner_BlockType;
  readonly SINGLE: DoubleBlockCombiner_BlockType;
  valueOf(arg0: string): DoubleBlockCombiner_BlockType;
  values(): Array<DoubleBlockCombiner_BlockType>;
}

/** JVM interface net.minecraft.world.level.block.DoubleBlockCombiner$Combiner. */
export interface DoubleBlockCombiner_CombinerMembers<S = unknown, T = unknown> {
  acceptDouble(arg0: S, arg1: S): T;
  acceptNone(): T;
  acceptSingle(arg0: S): T;
}
export type DoubleBlockCombiner_Combiner<S = unknown, T = unknown> = DoubleBlockCombiner_CombinerMembers<S, T>;
export interface DoubleBlockCombiner_CombinerStatics {
}

/** JVM interface net.minecraft.world.level.block.DoubleBlockCombiner$NeighborCombineResult. */
export interface DoubleBlockCombiner_NeighborCombineResultMembers<S = unknown> {
  apply<T>(arg0: DoubleBlockCombiner_Combiner<S, T>): T;
}
export type DoubleBlockCombiner_NeighborCombineResult<S = unknown> = DoubleBlockCombiner_NeighborCombineResultMembers<S>;
export interface DoubleBlockCombiner_NeighborCombineResultStatics {
}

/** JVM class net.minecraft.world.level.block.DoubleBlockCombiner$NeighborCombineResult$Double. */
export interface DoubleBlockCombiner_NeighborCombineResult_DoubleMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [DoubleBlockCombiner_NeighborCombineResult<S>];
  apply<T>(arg0: DoubleBlockCombiner_Combiner<S, T>): T;
}
export type DoubleBlockCombiner_NeighborCombineResult_Double<S = unknown> = DoubleBlockCombiner_NeighborCombineResult_DoubleMembers<S> & DoubleBlockCombiner_NeighborCombineResult<S>;
export interface DoubleBlockCombiner_NeighborCombineResult_DoubleStatics {
  new<S>(arg0: S, arg1: S): DoubleBlockCombiner_NeighborCombineResult_Double<S>;
}

/** JVM class net.minecraft.world.level.block.DoubleBlockCombiner$NeighborCombineResult$Single. */
export interface DoubleBlockCombiner_NeighborCombineResult_SingleMembers<S = unknown> {
  readonly __javaSupertypes?: readonly [DoubleBlockCombiner_NeighborCombineResult<S>];
  apply<T>(arg0: DoubleBlockCombiner_Combiner<S, T>): T;
}
export type DoubleBlockCombiner_NeighborCombineResult_Single<S = unknown> = DoubleBlockCombiner_NeighborCombineResult_SingleMembers<S> & DoubleBlockCombiner_NeighborCombineResult<S>;
export interface DoubleBlockCombiner_NeighborCombineResult_SingleStatics {
  new<S>(arg0: S): DoubleBlockCombiner_NeighborCombineResult_Single<S>;
}

/** JVM class net.minecraft.world.level.block.DoublePlantBlock. */
export interface DoublePlantBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DoublePlantBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  playerDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg5: j_net_minecraft_world_item.ItemStack, arg6: boolean, arg7: boolean): void;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type DoublePlantBlock = DoublePlantBlockMembers & VegetationBlock;
export interface DoublePlantBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DoublePlantBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DoublePlantBlock]>;
  readonly HALF: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.DoubleBlockHalf>;
  copyWaterloggedFrom(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  placeAt(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: number): void;
}

/** JVM class net.minecraft.world.level.block.DragonEggBlock. */
export interface DragonEggBlockMembers {
  readonly __javaSupertypes?: readonly [FallingBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DragonEggBlock]>;
  getDustColor(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
}
export type DragonEggBlock = DragonEggBlockMembers & FallingBlock;
export interface DragonEggBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DragonEggBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DragonEggBlock]>;
}

/** JVM class net.minecraft.world.level.block.DriedGhastBlock. */
export interface DriedGhastBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock, SimpleWaterloggedBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DriedGhastBlock]>;
  getHydrationLevel(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  isPathfindable(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_pathfinder.PathComputationType): boolean;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type DriedGhastBlock = DriedGhastBlockMembers & HorizontalDirectionalBlock & SimpleWaterloggedBlock;
export interface DriedGhastBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DriedGhastBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DriedGhastBlock]>;
  readonly HYDRATION_LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly HYDRATION_TICK_DELAY: 5000;
  readonly MAX_HYDRATION_LEVEL: 3;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.DropExperienceBlock. */
export interface DropExperienceBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DropExperienceBlock]>;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
}
export type DropExperienceBlock = DropExperienceBlockMembers & Block;
export interface DropExperienceBlockStatics {
  new(arg0: j_net_minecraft_util_valueproviders.IntProvider, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DropExperienceBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DropExperienceBlock]>;
}

/** JVM class net.minecraft.world.level.block.DropperBlock. */
export interface DropperBlockMembers {
  readonly __javaSupertypes?: readonly [DispenserBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DropperBlock]>;
  dispenseFrom(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos): void;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type DropperBlock = DropperBlockMembers & DispenserBlock;
export interface DropperBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): DropperBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DropperBlock]>;
}

/** JVM class net.minecraft.world.level.block.DryVegetationBlock. */
export interface DryVegetationBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DryVegetationBlock]>;
}
export type DryVegetationBlock = DryVegetationBlockMembers & VegetationBlock;
export interface DryVegetationBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [DryVegetationBlock]>;
}

/** JVM class net.minecraft.world.level.block.EnchantingTableBlock. */
export interface EnchantingTableBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantingTableBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type EnchantingTableBlock = EnchantingTableBlockMembers & BaseEntityBlock;
export interface EnchantingTableBlockStatics {
  readonly BOOKSHELF_OFFSETS: JavaList<j_net_minecraft_core.BlockPos>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnchantingTableBlock]>;
  isValidBookShelf(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM class net.minecraft.world.level.block.EnderChestBlock. */
export interface EnderChestBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractChestBlock<j_net_minecraft_world_level_block_entity.EnderChestBlockEntity>, SimpleWaterloggedBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EnderChestBlock]>;
  combine(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): DoubleBlockCombiner_NeighborCombineResult<j_net_minecraft_world_level_block_entity.ChestBlockEntity>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type EnderChestBlock = EnderChestBlockMembers & AbstractChestBlock<j_net_minecraft_world_level_block_entity.EnderChestBlockEntity> & SimpleWaterloggedBlock;
export interface EnderChestBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EnderChestBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.EndGatewayBlock. */
export interface EndGatewayBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, Portal];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EndGatewayBlock]>;
  getPortalDestination(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_portal.TeleportTransition | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type EndGatewayBlock = EndGatewayBlockMembers & BaseEntityBlock & Portal;
export interface EndGatewayBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EndGatewayBlock]>;
}

/** JVM class net.minecraft.world.level.block.EndPortalBlock. */
export interface EndPortalBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, Portal];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EndPortalBlock]>;
  getPortalDestination(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_portal.TeleportTransition | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type EndPortalBlock = EndPortalBlockMembers & BaseEntityBlock & Portal;
export interface EndPortalBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EndPortalBlock]>;
}

/** JVM class net.minecraft.world.level.block.EndPortalFrameBlock. */
export interface EndPortalFrameBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EndPortalFrameBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type EndPortalFrameBlock = EndPortalFrameBlockMembers & Block;
export interface EndPortalFrameBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): EndPortalFrameBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EndPortalFrameBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly HAS_EYE: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getOrCreatePortalShape(): j_net_minecraft_world_level_block_state_pattern.BlockPattern;
}

/** JVM class net.minecraft.world.level.block.EndRodBlock. */
export interface EndRodBlockMembers {
  readonly __javaSupertypes?: readonly [RodBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EndRodBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type EndRodBlock = EndRodBlockMembers & RodBlock;
export interface EndRodBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EndRodBlock]>;
}

/** JVM interface net.minecraft.world.level.block.EntityBlock. */
export interface EntityBlockMembers {
  getListener<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_server_level.ServerLevel, arg1: T): j_net_minecraft_world_level_gameevent.GameEventListener | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type EntityBlock = EntityBlockMembers;
export interface EntityBlockStatics {
}

/** JVM class net.minecraft.world.level.block.EyeblossomBlock. */
export interface EyeblossomBlockMembers {
  readonly __javaSupertypes?: readonly [FlowerBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [EyeblossomBlock]>;
  getBeeInteractionEffect(): j_net_minecraft_world_effect.MobEffectInstance;
}
export type EyeblossomBlock = EyeblossomBlockMembers & FlowerBlock;
export interface EyeblossomBlockStatics {
  new(arg0: EyeblossomBlock_Type, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): EyeblossomBlock;
  new(arg0: boolean, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): EyeblossomBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [EyeblossomBlock]>;
}

/** Live JVM enum net.minecraft.world.level.block.EyeblossomBlock$Type; constants are host handles, not strings. */
export type EyeblossomBlock_Type = JavaEnum<"net.minecraft.world.level.block.EyeblossomBlock$Type", "CLOSED" | "OPEN"> & EyeblossomBlock_TypeMembers;
export interface EyeblossomBlock_TypeMembers {
  block(): Block;
  emitSounds(): boolean;
  longSwitchSound(): j_net_minecraft_sounds.SoundEvent;
  spawnTransformParticle(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  state(): j_net_minecraft_world_level_block_state.BlockState;
  transform(): EyeblossomBlock_Type;
}
export interface EyeblossomBlock_TypeStatics {
  readonly CLOSED: EyeblossomBlock_Type;
  readonly OPEN: EyeblossomBlock_Type;
  fromBoolean(arg0: boolean): EyeblossomBlock_Type;
  valueOf(arg0: string): EyeblossomBlock_Type;
  values(): Array<EyeblossomBlock_Type>;
}

/** JVM abstract net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock. */
export interface FaceAttachedHorizontalDirectionalBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type FaceAttachedHorizontalDirectionalBlock = FaceAttachedHorizontalDirectionalBlockMembers & HorizontalDirectionalBlock;
export interface FaceAttachedHorizontalDirectionalBlockStatics {
  readonly FACE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.AttachFace>;
  canAttach(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
}

/** JVM interface net.minecraft.world.level.block.Fallable. */
export interface FallableMembers {
  getFallDamageSource(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_damagesource.DamageSource;
  onBrokenAfterFall(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
  onLand(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
}
export type Fallable = FallableMembers;
export interface FallableStatics {
}

/** JVM abstract net.minecraft.world.level.block.FallingBlock. */
export interface FallingBlockMembers {
  readonly __javaSupertypes?: readonly [Block, Fallable];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  getDustColor(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
}
export type FallingBlock = FallingBlockMembers & Block & Fallable;
export interface FallingBlockStatics {
  isFree(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.FarmBlock. */
export interface FarmBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FarmBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type FarmBlock = FarmBlockMembers & Block;
export interface FarmBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FarmBlock]>;
  readonly MAX_MOISTURE: 7;
  readonly MOISTURE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  turnToDirt(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos): void;
}

/** JVM class net.minecraft.world.level.block.FenceBlock. */
export interface FenceBlockMembers {
  readonly __javaSupertypes?: readonly [CrossCollisionBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FenceBlock]>;
  connectsTo(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: boolean, arg2: j_net_minecraft_core.Direction): boolean;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type FenceBlock = FenceBlockMembers & CrossCollisionBlock;
export interface FenceBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FenceBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FenceBlock]>;
}

/** JVM class net.minecraft.world.level.block.FenceGateBlock. */
export interface FenceGateBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FenceGateBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type FenceGateBlock = FenceGateBlockMembers & HorizontalDirectionalBlock;
export interface FenceGateBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state_properties.WoodType, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FenceGateBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FenceGateBlock]>;
  readonly IN_WALL: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly OPEN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  connectsToDirection(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction): boolean;
}

/** JVM class net.minecraft.world.level.block.FireBlock. */
export interface FireBlockMembers {
  readonly __javaSupertypes?: readonly [BaseFireBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FireBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  readonly igniteOdds: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [Block]>;
  setFlammable(arg0: Block, arg1: number, arg2: number): void;
}
export type FireBlock = FireBlockMembers & BaseFireBlock;
export interface FireBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FireBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FireBlock]>;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly MAX_AGE: 15;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.BooleanProperty>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly UP: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  bootStrap(): void;
}

/** JVM class net.minecraft.world.level.block.FireflyBushBlock. */
export interface FireflyBushBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type FireflyBushBlock = FireflyBushBlockMembers & VegetationBlock & BonemealableBlock;
export interface FireflyBushBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FireflyBushBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FireflyBushBlock]>;
}

/** JVM class net.minecraft.world.level.block.FletchingTableBlock. */
export interface FletchingTableBlockMembers {
  readonly __javaSupertypes?: readonly [CraftingTableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FletchingTableBlock]>;
}
export type FletchingTableBlock = FletchingTableBlockMembers & CraftingTableBlock;
export interface FletchingTableBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FletchingTableBlock]>;
}

/** JVM class net.minecraft.world.level.block.FlowerBedBlock. */
export interface FlowerBedBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock, SegmentableBlock];
  canBeReplaced(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_item_context.BlockPlaceContext): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FlowerBedBlock]>;
  getSegmentAmountProperty(): j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getShapeHeight(): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}
export type FlowerBedBlock = FlowerBedBlockMembers & VegetationBlock & BonemealableBlock & SegmentableBlock;
export interface FlowerBedBlockStatics {
  readonly AMOUNT: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FlowerBedBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.FlowerBlock. */
export interface FlowerBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, SuspiciousEffectHolder];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FlowerBlock]>;
  getBeeInteractionEffect(): j_net_minecraft_world_effect.MobEffectInstance | null;
  getSuspiciousEffects(): j_net_minecraft_world_item_component.SuspiciousStewEffects;
}
export type FlowerBlock = FlowerBlockMembers & VegetationBlock & SuspiciousEffectHolder;
export interface FlowerBlockStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: number, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FlowerBlock;
  new(arg0: j_net_minecraft_world_item_component.SuspiciousStewEffects, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FlowerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FlowerBlock]>;
}

/** JVM class net.minecraft.world.level.block.FlowerPotBlock. */
export interface FlowerPotBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FlowerPotBlock]>;
  getPotted(): Block;
  opposite(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
}
export type FlowerPotBlock = FlowerPotBlockMembers & Block;
export interface FlowerPotBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FlowerPotBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FlowerPotBlock]>;
}

/** JVM class net.minecraft.world.level.block.FrogspawnBlock. */
export interface FrogspawnBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FrogspawnBlock]>;
}
export type FrogspawnBlock = FrogspawnBlockMembers & Block;
export interface FrogspawnBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FrogspawnBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FrogspawnBlock]>;
  setDefaultHatchDelay(): void;
  setHatchDelay(arg0: number, arg1: number): void;
}

/** JVM class net.minecraft.world.level.block.FrostedIceBlock. */
export interface FrostedIceBlockMembers {
  readonly __javaSupertypes?: readonly [IceBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FrostedIceBlock]>;
  onPlace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: boolean): void;
}
export type FrostedIceBlock = FrostedIceBlockMembers & IceBlock;
export interface FrostedIceBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): FrostedIceBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FrostedIceBlock]>;
  readonly MAX_AGE: 3;
}

/** JVM class net.minecraft.world.level.block.FungusBlock. */
export interface FungusBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FungusBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type FungusBlock = FungusBlockMembers & VegetationBlock & BonemealableBlock;
export interface FungusBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FungusBlock]>;
}

/** JVM class net.minecraft.world.level.block.FurnaceBlock. */
export interface FurnaceBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FurnaceBlock]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type FurnaceBlock = FurnaceBlockMembers & AbstractFurnaceBlock;
export interface FurnaceBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FurnaceBlock]>;
}

/** JVM interface net.minecraft.world.level.block.GameMasterBlock. */
export interface GameMasterBlockMembers {
}
export type GameMasterBlock = GameMasterBlockMembers;
export interface GameMasterBlockStatics {
}

/** JVM class net.minecraft.world.level.block.GlazedTerracottaBlock. */
export interface GlazedTerracottaBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [GlazedTerracottaBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type GlazedTerracottaBlock = GlazedTerracottaBlockMembers & HorizontalDirectionalBlock;
export interface GlazedTerracottaBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): GlazedTerracottaBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GlazedTerracottaBlock]>;
}

/** JVM class net.minecraft.world.level.block.GlowLichenBlock. */
export interface GlowLichenBlockMembers {
  readonly __javaSupertypes?: readonly [MultifaceSpreadeableBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [GlowLichenBlock]>;
  getSpreader(): MultifaceSpreader;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type GlowLichenBlock = GlowLichenBlockMembers & MultifaceSpreadeableBlock & BonemealableBlock;
export interface GlowLichenBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): GlowLichenBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GlowLichenBlock]>;
  emission(arg0: number): JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_world_level_block_state.BlockState]>;
}

/** JVM class net.minecraft.world.level.block.GrassBlock. */
export interface GrassBlockMembers {
  readonly __javaSupertypes?: readonly [SpreadingSnowyDirtBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [GrassBlock]>;
  getType(): BonemealableBlock_Type;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type GrassBlock = GrassBlockMembers & SpreadingSnowyDirtBlock & BonemealableBlock;
export interface GrassBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): GrassBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GrassBlock]>;
}

/** JVM class net.minecraft.world.level.block.GrindstoneBlock. */
export interface GrindstoneBlockMembers {
  readonly __javaSupertypes?: readonly [FaceAttachedHorizontalDirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [GrindstoneBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider;
}
export type GrindstoneBlock = GrindstoneBlockMembers & FaceAttachedHorizontalDirectionalBlock;
export interface GrindstoneBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GrindstoneBlock]>;
}

/** JVM abstract net.minecraft.world.level.block.GrowingPlantBlock. */
export interface GrowingPlantBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  getStateForPlacement(arg0: j_net_minecraft_util.RandomSource): j_net_minecraft_world_level_block_state.BlockState;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type GrowingPlantBlock = GrowingPlantBlockMembers & Block;
export interface GrowingPlantBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.GrowingPlantBodyBlock. */
export interface GrowingPlantBodyBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantBlock, BonemealableBlock];
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type GrowingPlantBodyBlock = GrowingPlantBodyBlockMembers & GrowingPlantBlock & BonemealableBlock;
export interface GrowingPlantBodyBlockStatics {
}

/** JVM abstract net.minecraft.world.level.block.GrowingPlantHeadBlock. */
export interface GrowingPlantHeadBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantBlock, BonemealableBlock];
  getMaxAgeState(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  getStateForPlacement(arg0: j_net_minecraft_util.RandomSource): j_net_minecraft_world_level_block_state.BlockState;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isMaxAge(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type GrowingPlantHeadBlock = GrowingPlantHeadBlockMembers & GrowingPlantBlock & BonemealableBlock;
export interface GrowingPlantHeadBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_AGE: 25;
}

/** JVM class net.minecraft.world.level.block.HalfTransparentBlock. */
export interface HalfTransparentBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
}
export type HalfTransparentBlock = HalfTransparentBlockMembers & Block;
export interface HalfTransparentBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HalfTransparentBlock]>;
}

/** JVM class net.minecraft.world.level.block.HangingMossBlock. */
export interface HangingMossBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HangingMossBlock]>;
  getTip(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type HangingMossBlock = HangingMossBlockMembers & Block & BonemealableBlock;
export interface HangingMossBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): HangingMossBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HangingMossBlock]>;
  readonly TIP: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.HangingRootsBlock. */
export interface HangingRootsBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HangingRootsBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type HangingRootsBlock = HangingRootsBlockMembers & Block & SimpleWaterloggedBlock;
export interface HangingRootsBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HangingRootsBlock]>;
}

/** JVM class net.minecraft.world.level.block.HayBlock. */
export interface HayBlockMembers {
  readonly __javaSupertypes?: readonly [RotatedPillarBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HayBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
}
export type HayBlock = HayBlockMembers & RotatedPillarBlock;
export interface HayBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): HayBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HayBlock]>;
}

/** JVM class net.minecraft.world.level.block.HeavyCoreBlock. */
export interface HeavyCoreBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HeavyCoreBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type HeavyCoreBlock = HeavyCoreBlockMembers & Block & SimpleWaterloggedBlock;
export interface HeavyCoreBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): HeavyCoreBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HeavyCoreBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.HoneyBlock. */
export interface HoneyBlockMembers {
  readonly __javaSupertypes?: readonly [HalfTransparentBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HoneyBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
}
export type HoneyBlock = HoneyBlockMembers & HalfTransparentBlock;
export interface HoneyBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): HoneyBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HoneyBlock]>;
  showJumpParticles(arg0: j_net_minecraft_world_entity.Entity): void;
  showSlideParticles(arg0: j_net_minecraft_world_entity.Entity): void;
}

/** JVM class net.minecraft.world.level.block.HopperBlock. */
export interface HopperBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HopperBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type HopperBlock = HopperBlockMembers & BaseEntityBlock;
export interface HopperBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): HopperBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HopperBlock]>;
  readonly ENABLED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM abstract net.minecraft.world.level.block.HorizontalDirectionalBlock. */
export interface HorizontalDirectionalBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
}
export type HorizontalDirectionalBlock = HorizontalDirectionalBlockMembers & Block;
export interface HorizontalDirectionalBlockStatics {
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.HugeMushroomBlock. */
export interface HugeMushroomBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [HugeMushroomBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type HugeMushroomBlock = HugeMushroomBlockMembers & Block;
export interface HugeMushroomBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): HugeMushroomBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [HugeMushroomBlock]>;
  readonly DOWN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly UP: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.IceBlock. */
export interface IceBlockMembers {
  readonly __javaSupertypes?: readonly [HalfTransparentBlock];
  afterDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [IceBlock]>;
  playerDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg5: j_net_minecraft_world_item.ItemStack, arg6: boolean, arg7: boolean): void;
}
export type IceBlock = IceBlockMembers & HalfTransparentBlock;
export interface IceBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): IceBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [IceBlock]>;
  meltsInto(): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM class net.minecraft.world.level.block.InfestedBlock. */
export interface InfestedBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [InfestedBlock]>;
  getHostBlock(): Block;
  hostStateByInfested(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
}
export type InfestedBlock = InfestedBlockMembers & Block;
export interface InfestedBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): InfestedBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [InfestedBlock]>;
  infestedStateByHost(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  isCompatibleHostBlock(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.InfestedRotatedPillarBlock. */
export interface InfestedRotatedPillarBlockMembers {
  readonly __javaSupertypes?: readonly [InfestedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [InfestedRotatedPillarBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type InfestedRotatedPillarBlock = InfestedRotatedPillarBlockMembers & InfestedBlock;
export interface InfestedRotatedPillarBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): InfestedRotatedPillarBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [InfestedRotatedPillarBlock]>;
}

/** JVM class net.minecraft.world.level.block.IronBarsBlock. */
export interface IronBarsBlockMembers {
  readonly __javaSupertypes?: readonly [CrossCollisionBlock];
  attachsTo(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: boolean): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [IronBarsBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type IronBarsBlock = IronBarsBlockMembers & CrossCollisionBlock;
export interface IronBarsBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [IronBarsBlock]>;
}

/** JVM class net.minecraft.world.level.block.JigsawBlock. */
export interface JigsawBlockMembers {
  readonly __javaSupertypes?: readonly [Block, EntityBlock, GameMasterBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [JigsawBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type JigsawBlock = JigsawBlockMembers & Block & EntityBlock & GameMasterBlock;
export interface JigsawBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [JigsawBlock]>;
  readonly ORIENTATION: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.FrontAndTop>;
  canAttach(arg0: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo, arg1: j_net_minecraft_world_level_levelgen_structure_templatesystem.StructureTemplate_JigsawBlockInfo): boolean;
  getFrontFacing(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_core.Direction;
  getTopFacing(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_core.Direction;
}

/** JVM class net.minecraft.world.level.block.JukeboxBlock. */
export interface JukeboxBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [JukeboxBlock]>;
  getSignal(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): number;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  isSignalSource(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type JukeboxBlock = JukeboxBlockMembers & BaseEntityBlock;
export interface JukeboxBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [JukeboxBlock]>;
  readonly HAS_RECORD: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.KelpBlock. */
export interface KelpBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantHeadBlock, LiquidBlockContainer];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [KelpBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type KelpBlock = KelpBlockMembers & GrowingPlantHeadBlock & LiquidBlockContainer;
export interface KelpBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [KelpBlock]>;
}

/** JVM class net.minecraft.world.level.block.KelpPlantBlock. */
export interface KelpPlantBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantBodyBlock, LiquidBlockContainer];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [KelpPlantBlock]>;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type KelpPlantBlock = KelpPlantBlockMembers & GrowingPlantBodyBlock & LiquidBlockContainer;
export interface KelpPlantBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [KelpPlantBlock]>;
}

/** JVM class net.minecraft.world.level.block.LadderBlock. */
export interface LadderBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LadderBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type LadderBlock = LadderBlockMembers & Block & SimpleWaterloggedBlock;
export interface LadderBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LadderBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly SHAPES: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_phys_shapes.VoxelShape>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.LanternBlock. */
export interface LanternBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LanternBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type LanternBlock = LanternBlockMembers & Block & SimpleWaterloggedBlock;
export interface LanternBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): LanternBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LanternBlock]>;
  readonly HANGING: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.LavaCauldronBlock. */
export interface LavaCauldronBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractCauldronBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LavaCauldronBlock]>;
  isFull(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type LavaCauldronBlock = LavaCauldronBlockMembers & AbstractCauldronBlock;
export interface LavaCauldronBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): LavaCauldronBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LavaCauldronBlock]>;
}

/** JVM class net.minecraft.world.level.block.LayeredCauldronBlock. */
export interface LayeredCauldronBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractCauldronBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LayeredCauldronBlock]>;
  handlePrecipitation(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_biome.Biome_Precipitation): void;
  isFull(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type LayeredCauldronBlock = LayeredCauldronBlockMembers & AbstractCauldronBlock;
export interface LayeredCauldronBlockStatics {
  new(arg0: j_net_minecraft_world_level_biome.Biome_Precipitation, arg1: j_net_minecraft_core_cauldron.CauldronInteraction_InteractionMap, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): LayeredCauldronBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LayeredCauldronBlock]>;
  readonly LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_FILL_LEVEL: 3;
  readonly MIN_FILL_LEVEL: 1;
  changeLevel(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity | null, arg4: JavaOpaque<"org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason">): boolean;
  changeLevel(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity | null, arg4: JavaOpaque<"org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason">, arg5: boolean): boolean;
  lowerFillLevel(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): void;
  lowerFillLevel(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity | null, arg4: JavaOpaque<"org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason">): boolean;
}

/** JVM class net.minecraft.world.level.block.LeafLitterBlock. */
export interface LeafLitterBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, SegmentableBlock];
  canBeReplaced(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_item_context.BlockPlaceContext): boolean;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}
export type LeafLitterBlock = LeafLitterBlockMembers & VegetationBlock & SegmentableBlock;
export interface LeafLitterBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): LeafLitterBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LeafLitterBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM abstract net.minecraft.world.level.block.LeavesBlock. */
export interface LeavesBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LeavesBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type LeavesBlock = LeavesBlockMembers & Block & SimpleWaterloggedBlock;
export interface LeavesBlockStatics {
  readonly DECAY_DISTANCE: 7;
  readonly DISTANCE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly PERSISTENT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getOptionalDistanceAt(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOptionalNumber;
}

/** JVM class net.minecraft.world.level.block.LecternBlock. */
export interface LecternBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LecternBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type LecternBlock = LecternBlockMembers & BaseEntityBlock;
export interface LecternBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LecternBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly HAS_BOOK: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  resetBookState(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: boolean): void;
  signalPageChange(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  tryPlaceBook(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_item.ItemStack): boolean;
}

/** JVM class net.minecraft.world.level.block.LevelEvent. */
export interface LevelEventMembers {
}
export type LevelEvent = LevelEventMembers;
export interface LevelEventStatics {
  new(): LevelEvent;
  readonly ANIMATION_DRAGON_SUMMON_ROAR: 3001;
  readonly ANIMATION_END_GATEWAY_SPAWN: 3000;
  readonly ANIMATION_SPAWN_COBWEB: 3018;
  readonly ANIMATION_TRIAL_SPAWNER_EJECT_ITEM: 3014;
  readonly ANIMATION_VAULT_ACTIVATE: 3015;
  readonly ANIMATION_VAULT_DEACTIVATE: 3016;
  readonly ANIMATION_VAULT_EJECT_ITEM: 3017;
  readonly COMPOSTER_FILL: 1500;
  readonly DRIPSTONE_DRIP: 1504;
  readonly END_PORTAL_FRAME_FILL: 1503;
  readonly LAVA_FIZZ: 1501;
  readonly PARTICLES_AND_SOUND_BRUSH_BLOCK_COMPLETE: 3008;
  readonly PARTICLES_AND_SOUND_PLANT_GROWTH: 1505;
  readonly PARTICLES_AND_SOUND_WAX_ON: 3003;
  readonly PARTICLES_BEE_GROWTH: 2011;
  readonly PARTICLES_DESTROY_BLOCK: 2001;
  readonly PARTICLES_DRAGON_BLOCK_BREAK: 2008;
  readonly PARTICLES_DRAGON_FIREBALL_SPLASH: 2006;
  readonly PARTICLES_EGG_CRACK: 3009;
  readonly PARTICLES_ELECTRIC_SPARK: 3002;
  readonly PARTICLES_EYE_OF_ENDER_DEATH: 2003;
  readonly PARTICLES_INSTANT_POTION_SPLASH: 2007;
  readonly PARTICLES_MOBBLOCK_SPAWN: 2004;
  readonly PARTICLES_SCRAPE: 3005;
  readonly PARTICLES_SCULK_CHARGE: 3006;
  readonly PARTICLES_SCULK_SHRIEK: 3007;
  readonly PARTICLES_SHOOT_SMOKE: 2000;
  readonly PARTICLES_SHOOT_WHITE_SMOKE: 2010;
  readonly PARTICLES_SMASH_ATTACK: 2013;
  readonly PARTICLES_SPELL_POTION_SPLASH: 2002;
  readonly PARTICLES_TRIAL_SPAWNER_BECOME_OMINOUS: 3020;
  readonly PARTICLES_TRIAL_SPAWNER_DETECT_PLAYER: 3013;
  readonly PARTICLES_TRIAL_SPAWNER_DETECT_PLAYER_OMINOUS: 3019;
  readonly PARTICLES_TRIAL_SPAWNER_SPAWN: 3011;
  readonly PARTICLES_TRIAL_SPAWNER_SPAWN_ITEM: 3021;
  readonly PARTICLES_TRIAL_SPAWNER_SPAWN_MOB_AT: 3012;
  readonly PARTICLES_TURTLE_EGG_PLACEMENT: 2012;
  readonly PARTICLES_WATER_EVAPORATING: 2009;
  readonly PARTICLES_WAX_OFF: 3004;
  readonly REDSTONE_TORCH_BURNOUT: 1502;
  readonly SOUND_ANVIL_BROKEN: 1029;
  readonly SOUND_ANVIL_LAND: 1031;
  readonly SOUND_ANVIL_USED: 1030;
  readonly SOUND_BAT_LIFTOFF: 1025;
  readonly SOUND_BLAZE_FIREBALL: 1018;
  readonly SOUND_BREWING_STAND_BREW: 1035;
  readonly SOUND_CHORUS_DEATH: 1034;
  readonly SOUND_CHORUS_GROW: 1033;
  readonly SOUND_CRAFTER_CRAFT: 1049;
  readonly SOUND_CRAFTER_FAIL: 1050;
  readonly SOUND_DISPENSER_DISPENSE: 1000;
  readonly SOUND_DISPENSER_FAIL: 1001;
  readonly SOUND_DISPENSER_PROJECTILE_LAUNCH: 1002;
  readonly SOUND_DRAGON_DEATH: 1028;
  readonly SOUND_DRAGON_FIREBALL: 1017;
  readonly SOUND_DRIP_LAVA_INTO_CAULDRON: 1046;
  readonly SOUND_DRIP_WATER_INTO_CAULDRON: 1047;
  readonly SOUND_END_PORTAL_SPAWN: 1038;
  readonly SOUND_EXTINGUISH_FIRE: 1009;
  readonly SOUND_FIREWORK_SHOOT: 1004;
  readonly SOUND_GHAST_FIREBALL: 1016;
  readonly SOUND_GHAST_WARNING: 1015;
  readonly SOUND_GRINDSTONE_USED: 1042;
  readonly SOUND_HUSK_TO_ZOMBIE: 1041;
  readonly SOUND_PAGE_TURN: 1043;
  readonly SOUND_PHANTOM_BITE: 1039;
  readonly SOUND_PLAY_JUKEBOX_SONG: 1010;
  readonly SOUND_POINTED_DRIPSTONE_LAND: 1045;
  readonly SOUND_PORTAL_TRAVEL: 1032;
  readonly SOUND_SKELETON_TO_STRAY: 1048;
  readonly SOUND_SMITHING_TABLE_USED: 1044;
  readonly SOUND_STOP_JUKEBOX_SONG: 1011;
  readonly SOUND_WIND_CHARGE_SHOOT: 1051;
  readonly SOUND_WITHER_BLOCK_BREAK: 1022;
  readonly SOUND_WITHER_BOSS_SHOOT: 1024;
  readonly SOUND_WITHER_BOSS_SPAWN: 1023;
  readonly SOUND_ZOMBIE_CONVERTED: 1027;
  readonly SOUND_ZOMBIE_DOOR_CRASH: 1021;
  readonly SOUND_ZOMBIE_INFECTED: 1026;
  readonly SOUND_ZOMBIE_IRON_DOOR: 1020;
  readonly SOUND_ZOMBIE_TO_DROWNED: 1040;
  readonly SOUND_ZOMBIE_WOODEN_DOOR: 1019;
}

/** JVM class net.minecraft.world.level.block.LeverBlock. */
export interface LeverBlockMembers {
  readonly __javaSupertypes?: readonly [FaceAttachedHorizontalDirectionalBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LeverBlock]>;
  pull(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player | null): void;
}
export type LeverBlock = LeverBlockMembers & FaceAttachedHorizontalDirectionalBlock;
export interface LeverBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LeverBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.LightBlock. */
export interface LightBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LightBlock]>;
}
export type LightBlock = LightBlockMembers & Block & SimpleWaterloggedBlock;
export interface LightBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): LightBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LightBlock]>;
  readonly LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly LIGHT_EMISSION: JavaOpaque<"java.util.function.ToIntFunction", [j_net_minecraft_world_level_block_state.BlockState]>;
  readonly MAX_LEVEL: 15;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  setLightOnStack(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): j_net_minecraft_world_item.ItemStack;
}

/** JVM class net.minecraft.world.level.block.LightningRodBlock. */
export interface LightningRodBlockMembers {
  readonly __javaSupertypes?: readonly [RodBlock, SimpleWaterloggedBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LightningRodBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  onLightningStrike(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): void;
}
export type LightningRodBlock = LightningRodBlockMembers & RodBlock & SimpleWaterloggedBlock;
export interface LightningRodBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): LightningRodBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LightningRodBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly RANGE: 128;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.LiquidBlock. */
export interface LiquidBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BucketPickup];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LiquidBlock]>;
  getFlowSpeed(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  pickupBlock(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_item.ItemStack;
}
export type LiquidBlock = LiquidBlockMembers & Block & BucketPickup;
export interface LiquidBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LiquidBlock]>;
  readonly LEVEL: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly POSSIBLE_FLOW_DIRECTIONS: JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_core.Direction]>;
  readonly SHAPE_STABLE: j_net_minecraft_world_phys_shapes.VoxelShape;
}

/** JVM interface net.minecraft.world.level.block.LiquidBlockContainer. */
export interface LiquidBlockContainerMembers {
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type LiquidBlockContainer = LiquidBlockContainerMembers;
export interface LiquidBlockContainerStatics {
}

/** JVM class net.minecraft.world.level.block.LoomBlock. */
export interface LoomBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [LoomBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type LoomBlock = LoomBlockMembers & HorizontalDirectionalBlock;
export interface LoomBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LoomBlock]>;
}

/** JVM class net.minecraft.world.level.block.MagmaBlock. */
export interface MagmaBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MagmaBlock]>;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
}
export type MagmaBlock = MagmaBlockMembers & Block;
export interface MagmaBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MagmaBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MagmaBlock]>;
}

/** JVM class net.minecraft.world.level.block.MangroveLeavesBlock. */
export interface MangroveLeavesBlockMembers {
  readonly __javaSupertypes?: readonly [TintedParticleLeavesBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MangroveLeavesBlock]>;
  getParticlePos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type MangroveLeavesBlock = MangroveLeavesBlockMembers & TintedParticleLeavesBlock & BonemealableBlock;
export interface MangroveLeavesBlockStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MangroveLeavesBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MangroveLeavesBlock]>;
}

/** JVM class net.minecraft.world.level.block.MangrovePropaguleBlock. */
export interface MangrovePropaguleBlockMembers {
  readonly __javaSupertypes?: readonly [SaplingBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MangrovePropaguleBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type MangrovePropaguleBlock = MangrovePropaguleBlockMembers & SaplingBlock & SimpleWaterloggedBlock;
export interface MangrovePropaguleBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_grower.TreeGrower, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MangrovePropaguleBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MangrovePropaguleBlock]>;
  readonly HANGING: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly MAX_AGE: 4;
  createNewHangingPropagule(): j_net_minecraft_world_level_block_state.BlockState;
  createNewHangingPropagule(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
}

/** JVM class net.minecraft.world.level.block.MangroveRootsBlock. */
export interface MangroveRootsBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MangroveRootsBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type MangroveRootsBlock = MangroveRootsBlockMembers & Block & SimpleWaterloggedBlock;
export interface MangroveRootsBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MangroveRootsBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** Live JVM enum net.minecraft.world.level.block.Mirror; constants are host handles, not strings. */
export type Mirror = JavaEnum<"net.minecraft.world.level.block.Mirror", "FRONT_BACK" | "LEFT_RIGHT" | "NONE"> & MirrorMembers;
export interface MirrorMembers {
  getRotation(arg0: j_net_minecraft_core.Direction): Rotation;
  getSerializedName(): string;
  mirror(arg0: number, arg1: number): number;
  mirror(arg0: j_net_minecraft_core.Direction): j_net_minecraft_core.Direction;
  rotation(): JavaOpaque<"com.mojang.math.OctahedralGroup">;
  symbol(): j_net_minecraft_network_chat.Component;
}
export interface MirrorStatics {
  readonly FRONT_BACK: Mirror;
  readonly LEFT_RIGHT: Mirror;
  readonly NONE: Mirror;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Mirror]>;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Mirror]>;
  valueOf(arg0: string): Mirror;
  values(): Array<Mirror>;
}

/** JVM class net.minecraft.world.level.block.MossyCarpetBlock. */
export interface MossyCarpetBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MossyCarpetBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  makeShapes(): JavaFunction<j_net_minecraft_world_level_block_state.BlockState, j_net_minecraft_world_phys_shapes.VoxelShape>;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type MossyCarpetBlock = MossyCarpetBlockMembers & Block & BonemealableBlock;
export interface MossyCarpetBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MossyCarpetBlock;
  readonly BASE: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MossyCarpetBlock]>;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  getPropertyForFace(arg0: j_net_minecraft_core.Direction): j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide> | null;
  placeAt(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: number): void;
}

/** JVM class net.minecraft.world.level.block.MudBlock. */
export interface MudBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MudBlock]>;
}
export type MudBlock = MudBlockMembers & Block;
export interface MudBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MudBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MudBlock]>;
}

/** JVM class net.minecraft.world.level.block.MultifaceBlock. */
export interface MultifaceBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getStateForPlacement(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_level_block_state.BlockState | null;
  isValidStateForPlacement(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): boolean;
}
export type MultifaceBlock = MultifaceBlockMembers & Block & SimpleWaterloggedBlock;
export interface MultifaceBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MultifaceBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MultifaceBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  availableFaces(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaSet<j_net_minecraft_core.Direction>;
  canAttachTo(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
  canAttachTo(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  getFaceProperty(arg0: j_net_minecraft_core.Direction): j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  hasFace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction): boolean;
  pack(arg0: JavaCollection<j_net_minecraft_core.Direction>): number;
  unpack(arg0: number): JavaSet<j_net_minecraft_core.Direction>;
}

/** JVM abstract net.minecraft.world.level.block.MultifaceSpreadeableBlock. */
export interface MultifaceSpreadeableBlockMembers {
  readonly __javaSupertypes?: readonly [MultifaceBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MultifaceSpreadeableBlock]>;
  getSpreader(): MultifaceSpreader;
}
export type MultifaceSpreadeableBlock = MultifaceSpreadeableBlockMembers & MultifaceBlock;
export interface MultifaceSpreadeableBlockStatics {
}

/** JVM class net.minecraft.world.level.block.MultifaceSpreader. */
export interface MultifaceSpreaderMembers {
  canSpreadInAnyDirection(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): boolean;
  getSpreadFromFaceTowardDirection(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_core.Direction, arg5: MultifaceSpreader_SpreadPredicate): JavaOptional<MultifaceSpreader_SpreadPos>;
  spreadAll(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): bigint;
  spreadFromFaceTowardDirection(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_core.Direction, arg5: boolean): JavaOptional<MultifaceSpreader_SpreadPos>;
  spreadFromFaceTowardRandomDirection(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_util.RandomSource, arg5: boolean): JavaOptional<MultifaceSpreader_SpreadPos>;
  spreadFromRandomFaceTowardRandomDirection(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): JavaOptional<MultifaceSpreader_SpreadPos>;
  spreadToFace(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: MultifaceSpreader_SpreadPos, arg2: boolean): JavaOptional<MultifaceSpreader_SpreadPos>;
}
export type MultifaceSpreader = MultifaceSpreaderMembers;
export interface MultifaceSpreaderStatics {
  new(arg0: MultifaceBlock): MultifaceSpreader;
  new(arg0: MultifaceSpreader_SpreadConfig): MultifaceSpreader;
  readonly DEFAULT_SPREAD_ORDER: Array<MultifaceSpreader_SpreadType>;
}

/** JVM class net.minecraft.world.level.block.MultifaceSpreader$DefaultSpreaderConfig. */
export interface MultifaceSpreader_DefaultSpreaderConfigMembers {
  readonly __javaSupertypes?: readonly [MultifaceSpreader_SpreadConfig];
  canSpreadInto(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: MultifaceSpreader_SpreadPos): boolean;
  getStateForPlacement(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type MultifaceSpreader_DefaultSpreaderConfig = MultifaceSpreader_DefaultSpreaderConfigMembers & MultifaceSpreader_SpreadConfig;
export interface MultifaceSpreader_DefaultSpreaderConfigStatics {
  new(arg0: MultifaceBlock): MultifaceSpreader_DefaultSpreaderConfig;
}

/** JVM interface net.minecraft.world.level.block.MultifaceSpreader$SpreadConfig. */
export interface MultifaceSpreader_SpreadConfigMembers {
  canSpreadFrom(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction): boolean;
  canSpreadInto(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: MultifaceSpreader_SpreadPos): boolean;
  getSpreadTypes(): Array<MultifaceSpreader_SpreadType>;
  getStateForPlacement(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_level_block_state.BlockState | null;
  hasFace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction): boolean;
  isOtherBlockValidAsSource(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  placeBlock(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: MultifaceSpreader_SpreadPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: boolean): boolean;
}
export type MultifaceSpreader_SpreadConfig = MultifaceSpreader_SpreadConfigMembers;
export interface MultifaceSpreader_SpreadConfigStatics {
}

/** JVM record net.minecraft.world.level.block.MultifaceSpreader$SpreadPos. */
export interface MultifaceSpreader_SpreadPosMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  face(): j_net_minecraft_core.Direction;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  source(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type MultifaceSpreader_SpreadPos = MultifaceSpreader_SpreadPosMembers & JavaOpaque<"java.lang.Record">;
export interface MultifaceSpreader_SpreadPosStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.BlockPos): MultifaceSpreader_SpreadPos;
}

/** JVM interface net.minecraft.world.level.block.MultifaceSpreader$SpreadPredicate. */
export interface MultifaceSpreader_SpreadPredicateMembers {
  test(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: MultifaceSpreader_SpreadPos): boolean;
}
export type MultifaceSpreader_SpreadPredicate = MultifaceSpreader_SpreadPredicateMembers;
export interface MultifaceSpreader_SpreadPredicateStatics {
}

/** Live JVM enum net.minecraft.world.level.block.MultifaceSpreader$SpreadType; constants are host handles, not strings. */
export type MultifaceSpreader_SpreadType = JavaEnum<"net.minecraft.world.level.block.MultifaceSpreader$SpreadType", "SAME_PLANE" | "SAME_POSITION" | "WRAP_AROUND"> & MultifaceSpreader_SpreadTypeMembers;
export interface MultifaceSpreader_SpreadTypeMembers {
  getSpreadPos(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_core.Direction): MultifaceSpreader_SpreadPos;
}
export interface MultifaceSpreader_SpreadTypeStatics {
  readonly SAME_PLANE: MultifaceSpreader_SpreadType;
  readonly SAME_POSITION: MultifaceSpreader_SpreadType;
  readonly WRAP_AROUND: MultifaceSpreader_SpreadType;
  valueOf(arg0: string): MultifaceSpreader_SpreadType;
  values(): Array<MultifaceSpreader_SpreadType>;
}

/** JVM class net.minecraft.world.level.block.MushroomBlock. */
export interface MushroomBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MushroomBlock]>;
  growMushroom(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_util.RandomSource): boolean;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type MushroomBlock = MushroomBlockMembers & VegetationBlock & BonemealableBlock;
export interface MushroomBlockStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MushroomBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MushroomBlock]>;
}

/** JVM class net.minecraft.world.level.block.MyceliumBlock. */
export interface MyceliumBlockMembers {
  readonly __javaSupertypes?: readonly [SpreadingSnowyDirtBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [MyceliumBlock]>;
}
export type MyceliumBlock = MyceliumBlockMembers & SpreadingSnowyDirtBlock;
export interface MyceliumBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): MyceliumBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [MyceliumBlock]>;
}

/** JVM class net.minecraft.world.level.block.NetherPortalBlock. */
export interface NetherPortalBlockMembers {
  readonly __javaSupertypes?: readonly [Block, Portal];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NetherPortalBlock]>;
  getLocalTransition(): Portal_Transition;
  getPortalDestination(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_portal.TeleportTransition | null;
  getPortalTransitionTime(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): number;
}
export type NetherPortalBlock = NetherPortalBlockMembers & Block & Portal;
export interface NetherPortalBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): NetherPortalBlock;
  readonly AXIS: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction_Axis>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NetherPortalBlock]>;
}

/** JVM class net.minecraft.world.level.block.NetherrackBlock. */
export interface NetherrackBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NetherrackBlock]>;
  getType(): BonemealableBlock_Type;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type NetherrackBlock = NetherrackBlockMembers & Block & BonemealableBlock;
export interface NetherrackBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): NetherrackBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NetherrackBlock]>;
}

/** JVM class net.minecraft.world.level.block.NetherSproutsBlock. */
export interface NetherSproutsBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NetherSproutsBlock]>;
}
export type NetherSproutsBlock = NetherSproutsBlockMembers & VegetationBlock;
export interface NetherSproutsBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): NetherSproutsBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NetherSproutsBlock]>;
}

/** JVM class net.minecraft.world.level.block.NetherVines. */
export interface NetherVinesMembers {
}
export type NetherVines = NetherVinesMembers;
export interface NetherVinesStatics {
  new(): NetherVines;
  readonly GROW_PER_TICK_PROBABILITY: 0.1;
  getBlocksToGrowWhenBonemealed(arg0: j_net_minecraft_util.RandomSource): number;
  isValidGrowthState(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.NetherWartBlock. */
export interface NetherWartBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NetherWartBlock]>;
}
export type NetherWartBlock = NetherWartBlockMembers & VegetationBlock;
export interface NetherWartBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NetherWartBlock]>;
  readonly MAX_AGE: 3;
}

/** JVM class net.minecraft.world.level.block.NoteBlock. */
export interface NoteBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NoteBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type NoteBlock = NoteBlockMembers & Block;
export interface NoteBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): NoteBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NoteBlock]>;
  readonly INSTRUMENT: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.NoteBlockInstrument>;
  readonly NOTE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly NOTE_VOLUME: 3;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getPitchFromNote(arg0: number): number;
}

/** JVM class net.minecraft.world.level.block.NyliumBlock. */
export interface NyliumBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [NyliumBlock]>;
  getType(): BonemealableBlock_Type;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type NyliumBlock = NyliumBlockMembers & Block & BonemealableBlock;
export interface NyliumBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NyliumBlock]>;
}

/** JVM class net.minecraft.world.level.block.ObserverBlock. */
export interface ObserverBlockMembers {
  readonly __javaSupertypes?: readonly [DirectionalBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ObserverBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type ObserverBlock = ObserverBlockMembers & DirectionalBlock;
export interface ObserverBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ObserverBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ObserverBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.PiglinWallSkullBlock. */
export interface PiglinWallSkullBlockMembers {
  readonly __javaSupertypes?: readonly [WallSkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PiglinWallSkullBlock]>;
}
export type PiglinWallSkullBlock = PiglinWallSkullBlockMembers & WallSkullBlock;
export interface PiglinWallSkullBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PiglinWallSkullBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PiglinWallSkullBlock]>;
}

/** JVM abstract net.minecraft.world.level.block.PipeBlock. */
export interface PipeBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
}
export type PipeBlock = PipeBlockMembers & Block;
export interface PipeBlockStatics {
  readonly DOWN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.BooleanProperty>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly UP: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.PitcherCropBlock. */
export interface PitcherCropBlockMembers {
  readonly __javaSupertypes?: readonly [DoublePlantBlock, BonemealableBlock];
  canBeReplaced(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_item_context.BlockPlaceContext): boolean;
  canSurvive(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_core.BlockPos): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PitcherCropBlock]>;
  entityInside(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: j_net_minecraft_world_entity.InsideBlockEffectApplier): void;
  getCollisionShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isRandomlyTicking(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  randomTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
  updateShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_world_level.ScheduledTickAccess, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_core.Direction, arg5: j_net_minecraft_core.BlockPos, arg6: j_net_minecraft_world_level_block_state.BlockState, arg7: j_net_minecraft_util.RandomSource): j_net_minecraft_world_level_block_state.BlockState;
}
export type PitcherCropBlock = PitcherCropBlockMembers & DoublePlantBlock & BonemealableBlock;
export interface PitcherCropBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PitcherCropBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PitcherCropBlock]>;
  readonly HALF: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.DoubleBlockHalf>;
  readonly MAX_AGE: 4;
}

/** JVM class net.minecraft.world.level.block.PlayerHeadBlock. */
export interface PlayerHeadBlockMembers {
  readonly __javaSupertypes?: readonly [SkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerHeadBlock]>;
}
export type PlayerHeadBlock = PlayerHeadBlockMembers & SkullBlock;
export interface PlayerHeadBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerHeadBlock]>;
}

/** JVM class net.minecraft.world.level.block.PlayerWallHeadBlock. */
export interface PlayerWallHeadBlockMembers {
  readonly __javaSupertypes?: readonly [WallSkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerWallHeadBlock]>;
}
export type PlayerWallHeadBlock = PlayerWallHeadBlockMembers & WallSkullBlock;
export interface PlayerWallHeadBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlayerWallHeadBlock]>;
}

/** JVM class net.minecraft.world.level.block.PointedDripstoneBlock. */
export interface PointedDripstoneBlockMembers {
  readonly __javaSupertypes?: readonly [Block, Fallable, SimpleWaterloggedBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PointedDripstoneBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  getFallDamageSource(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_damagesource.DamageSource;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  onBrokenAfterFall(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_item.FallingBlockEntity): void;
}
export type PointedDripstoneBlock = PointedDripstoneBlockMembers & Block & Fallable & SimpleWaterloggedBlock;
export interface PointedDripstoneBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PointedDripstoneBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PointedDripstoneBlock]>;
  readonly THICKNESS: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.DripstoneThickness>;
  readonly TIP_DIRECTION: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  canDrip(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  findStalactiteTipAboveCauldron(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos | null;
  getCauldronFillFluidType(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.Fluid;
  growStalactiteOrStalagmiteIfPossible(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  maybeTransferFluid(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: number): void;
  spawnDripParticle(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
}

/** JVM interface net.minecraft.world.level.block.Portal. */
export interface PortalMembers {
  getLocalTransition(): Portal_Transition;
  getPortalDestination(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_portal.TeleportTransition | null;
  getPortalTransitionTime(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Entity): number;
}
export type Portal = PortalMembers;
export interface PortalStatics {
}

/** Live JVM enum net.minecraft.world.level.block.Portal$Transition; constants are host handles, not strings. */
export type Portal_Transition = JavaEnum<"net.minecraft.world.level.block.Portal$Transition", "CONFUSION" | "NONE"> & Portal_TransitionMembers;
export interface Portal_TransitionMembers {
}
export interface Portal_TransitionStatics {
  readonly CONFUSION: Portal_Transition;
  readonly NONE: Portal_Transition;
  valueOf(arg0: string): Portal_Transition;
  values(): Array<Portal_Transition>;
}

/** JVM class net.minecraft.world.level.block.PotatoBlock. */
export interface PotatoBlockMembers {
  readonly __javaSupertypes?: readonly [CropBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PotatoBlock]>;
}
export type PotatoBlock = PotatoBlockMembers & CropBlock;
export interface PotatoBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PotatoBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PotatoBlock]>;
}

/** JVM class net.minecraft.world.level.block.PowderSnowBlock. */
export interface PowderSnowBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BucketPickup];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PowderSnowBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  pickupBlock(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_item.ItemStack;
}
export type PowderSnowBlock = PowderSnowBlockMembers & Block & BucketPickup;
export interface PowderSnowBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PowderSnowBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PowderSnowBlock]>;
  canEntityWalkOnPowderSnow(arg0: j_net_minecraft_world_entity.Entity): boolean;
}

/** JVM class net.minecraft.world.level.block.PoweredBlock. */
export interface PoweredBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PoweredBlock]>;
}
export type PoweredBlock = PoweredBlockMembers & Block;
export interface PoweredBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): PoweredBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PoweredBlock]>;
}

/** JVM class net.minecraft.world.level.block.PoweredRailBlock. */
export interface PoweredRailBlockMembers {
  readonly __javaSupertypes?: readonly [BaseRailBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PoweredRailBlock]>;
  getShapeProperty(): j_net_minecraft_world_level_block_state_properties.Property<j_net_minecraft_world_level_block_state_properties.RailShape>;
}
export type PoweredRailBlock = PoweredRailBlockMembers & BaseRailBlock;
export interface PoweredRailBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PoweredRailBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly SHAPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RailShape>;
}

/** JVM class net.minecraft.world.level.block.PressurePlateBlock. */
export interface PressurePlateBlockMembers {
  readonly __javaSupertypes?: readonly [BasePressurePlateBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PressurePlateBlock]>;
}
export type PressurePlateBlock = PressurePlateBlockMembers & BasePressurePlateBlock;
export interface PressurePlateBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PressurePlateBlock]>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.PumpkinBlock. */
export interface PumpkinBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PumpkinBlock]>;
}
export type PumpkinBlock = PumpkinBlockMembers & Block;
export interface PumpkinBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PumpkinBlock]>;
}

/** JVM class net.minecraft.world.level.block.RailBlock. */
export interface RailBlockMembers {
  readonly __javaSupertypes?: readonly [BaseRailBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RailBlock]>;
  getShapeProperty(): j_net_minecraft_world_level_block_state_properties.Property<j_net_minecraft_world_level_block_state_properties.RailShape>;
}
export type RailBlock = RailBlockMembers & BaseRailBlock;
export interface RailBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RailBlock]>;
  readonly SHAPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RailShape>;
}

/** JVM class net.minecraft.world.level.block.RailState. */
export interface RailStateMembers {
  getConnections(): JavaList<j_net_minecraft_core.BlockPos>;
  getState(): j_net_minecraft_world_level_block_state.BlockState;
  isValid(): boolean;
  place(arg0: boolean, arg1: boolean, arg2: j_net_minecraft_world_level_block_state_properties.RailShape): RailState;
}
export type RailState = RailStateMembers;
export interface RailStateStatics {
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): RailState;
}

/** JVM class net.minecraft.world.level.block.RedstoneLampBlock. */
export interface RedstoneLampBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RedstoneLampBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type RedstoneLampBlock = RedstoneLampBlockMembers & Block;
export interface RedstoneLampBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): RedstoneLampBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RedstoneLampBlock]>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.RedStoneOreBlock. */
export interface RedStoneOreBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RedStoneOreBlock]>;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
}
export type RedStoneOreBlock = RedStoneOreBlockMembers & Block;
export interface RedStoneOreBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): RedStoneOreBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RedStoneOreBlock]>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.RedstoneTorchBlock. */
export interface RedstoneTorchBlockMembers {
  readonly __javaSupertypes?: readonly [BaseTorchBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RedstoneTorchBlock]>;
}
export type RedstoneTorchBlock = RedstoneTorchBlockMembers & BaseTorchBlock;
export interface RedstoneTorchBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RedstoneTorchBlock]>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly MAX_RECENT_TOGGLES: 8;
  readonly RECENT_TOGGLE_TIMER: 60;
  readonly RESTART_DELAY: 160;
}

/** JVM class net.minecraft.world.level.block.RedstoneTorchBlock$Toggle. */
export interface RedstoneTorchBlock_ToggleMembers {
}
export type RedstoneTorchBlock_Toggle = RedstoneTorchBlock_ToggleMembers;
export interface RedstoneTorchBlock_ToggleStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: bigint): RedstoneTorchBlock_Toggle;
}

/** JVM class net.minecraft.world.level.block.RedstoneWallTorchBlock. */
export interface RedstoneWallTorchBlockMembers {
  readonly __javaSupertypes?: readonly [RedstoneTorchBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RedstoneWallTorchBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type RedstoneWallTorchBlock = RedstoneWallTorchBlockMembers & RedstoneTorchBlock;
export interface RedstoneWallTorchBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RedstoneWallTorchBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly LIT: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.RedStoneWireBlock. */
export interface RedStoneWireBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  calculateCurrentChanges(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  canSurvive(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_core.BlockPos): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RedStoneWireBlock]>;
  getBlockSignal(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  shouldSignal: boolean;
}
export type RedStoneWireBlock = RedStoneWireBlockMembers & Block;
export interface RedStoneWireBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): RedStoneWireBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RedStoneWireBlock]>;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RedstoneSide>;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RedstoneSide>;
  readonly POWER: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RedstoneSide>>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RedstoneSide>;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.RedstoneSide>;
  getColorForPower(arg0: number): number;
}

/** Live JVM enum net.minecraft.world.level.block.RenderShape; constants are host handles, not strings. */
export type RenderShape = JavaEnum<"net.minecraft.world.level.block.RenderShape", "INVISIBLE" | "MODEL"> & RenderShapeMembers;
export interface RenderShapeMembers {
}
export interface RenderShapeStatics {
  readonly INVISIBLE: RenderShape;
  readonly MODEL: RenderShape;
  valueOf(arg0: string): RenderShape;
  values(): Array<RenderShape>;
}

/** JVM class net.minecraft.world.level.block.RepeaterBlock. */
export interface RepeaterBlockMembers {
  readonly __javaSupertypes?: readonly [DiodeBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RepeaterBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  isLocked(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
}
export type RepeaterBlock = RepeaterBlockMembers & DiodeBlock;
export interface RepeaterBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RepeaterBlock]>;
  readonly DELAY: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly LOCKED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.RespawnAnchorBlock. */
export interface RespawnAnchorBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RespawnAnchorBlock]>;
}
export type RespawnAnchorBlock = RespawnAnchorBlockMembers & Block;
export interface RespawnAnchorBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): RespawnAnchorBlock;
  readonly CHARGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RespawnAnchorBlock]>;
  readonly MAX_CHARGES: 4;
  readonly MIN_CHARGES: 0;
  canSetSpawn(arg0: j_net_minecraft_world_level.Level): boolean;
  charge(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  findStandUpPosition(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_level.CollisionGetter, arg2: j_net_minecraft_core.BlockPos): JavaOptional<j_net_minecraft_world_phys.Vec3>;
  getScaledChargeLevel(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: number): number;
}

/** JVM abstract net.minecraft.world.level.block.RodBlock. */
export interface RodBlockMembers {
  readonly __javaSupertypes?: readonly [DirectionalBlock];
}
export type RodBlock = RodBlockMembers & DirectionalBlock;
export interface RodBlockStatics {
}

/** JVM class net.minecraft.world.level.block.RootedDirtBlock. */
export interface RootedDirtBlockMembers {
  readonly __javaSupertypes?: readonly [Block, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RootedDirtBlock]>;
  getParticlePos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type RootedDirtBlock = RootedDirtBlockMembers & Block & BonemealableBlock;
export interface RootedDirtBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): RootedDirtBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RootedDirtBlock]>;
}

/** JVM class net.minecraft.world.level.block.RootsBlock. */
export interface RootsBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RootsBlock]>;
}
export type RootsBlock = RootsBlockMembers & VegetationBlock;
export interface RootsBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RootsBlock]>;
}

/** JVM class net.minecraft.world.level.block.RotatedPillarBlock. */
export interface RotatedPillarBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [RotatedPillarBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type RotatedPillarBlock = RotatedPillarBlockMembers & Block;
export interface RotatedPillarBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): RotatedPillarBlock;
  readonly AXIS: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction_Axis>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RotatedPillarBlock]>;
  rotatePillar(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
}

/** Live JVM enum net.minecraft.world.level.block.Rotation; constants are host handles, not strings. */
export type Rotation = JavaEnum<"net.minecraft.world.level.block.Rotation", "CLOCKWISE_180" | "CLOCKWISE_90" | "COUNTERCLOCKWISE_90" | "NONE"> & RotationMembers;
export interface RotationMembers {
  getRotated(arg0: Rotation): Rotation;
  getSerializedName(): string;
  rotate(arg0: number, arg1: number): number;
  rotate(arg0: j_net_minecraft_core.Direction): j_net_minecraft_core.Direction;
  rotation(): JavaOpaque<"com.mojang.math.OctahedralGroup">;
}
export interface RotationStatics {
  readonly CLOCKWISE_180: Rotation;
  readonly CLOCKWISE_90: Rotation;
  readonly COUNTERCLOCKWISE_90: Rotation;
  readonly NONE: Rotation;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [Rotation]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Rotation]>;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Rotation]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Rotation>;
  getRandom(arg0: j_net_minecraft_util.RandomSource): Rotation;
  getShuffled(arg0: j_net_minecraft_util.RandomSource): JavaList<Rotation>;
  valueOf(arg0: string): Rotation;
  values(): Array<Rotation>;
}

/** JVM class net.minecraft.world.level.block.SandBlock. */
export interface SandBlockMembers {
  readonly __javaSupertypes?: readonly [ColoredFallingBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SandBlock]>;
}
export type SandBlock = SandBlockMembers & ColoredFallingBlock;
export interface SandBlockStatics {
  new(arg0: j_net_minecraft_util.ColorRGBA, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SandBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SandBlock]>;
}

/** JVM class net.minecraft.world.level.block.SaplingBlock. */
export interface SaplingBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  advanceTree(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SaplingBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type SaplingBlock = SaplingBlockMembers & VegetationBlock & BonemealableBlock;
export interface SaplingBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SaplingBlock]>;
  readonly STAGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly treeType: JavaOpaque<"org.bukkit.TreeType"> | null;
}

/** JVM class net.minecraft.world.level.block.ScaffoldingBlock. */
export interface ScaffoldingBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ScaffoldingBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type ScaffoldingBlock = ScaffoldingBlockMembers & Block & SimpleWaterloggedBlock;
export interface ScaffoldingBlockStatics {
  readonly BOTTOM: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ScaffoldingBlock]>;
  readonly DISTANCE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly STABILITY_MAX_DISTANCE: 7;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getDistance(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
}

/** JVM interface net.minecraft.world.level.block.SculkBehaviour. */
export interface SculkBehaviourMembers {
  attemptSpreadVein(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: JavaCollection<j_net_minecraft_core.Direction> | null, arg4: boolean): boolean;
  attemptUseCharge(arg0: SculkSpreader_ChargeCursor, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource, arg4: SculkSpreader, arg5: boolean): number;
  canChangeBlockStateOnSpread(): boolean;
  depositCharge(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): boolean;
  getSculkSpreadDelay(): number;
  onDischarged(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  updateDecayDelay(arg0: number): number;
}
export type SculkBehaviour = SculkBehaviourMembers;
export interface SculkBehaviourStatics {
  readonly DEFAULT: SculkBehaviour;
}

/** JVM class net.minecraft.world.level.block.SculkBlock. */
export interface SculkBlockMembers {
  readonly __javaSupertypes?: readonly [DropExperienceBlock, SculkBehaviour];
  attemptUseCharge(arg0: SculkSpreader_ChargeCursor, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource, arg4: SculkSpreader, arg5: boolean): number;
  canChangeBlockStateOnSpread(): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SculkBlock]>;
}
export type SculkBlock = SculkBlockMembers & DropExperienceBlock & SculkBehaviour;
export interface SculkBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SculkBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SculkBlock]>;
}

/** JVM class net.minecraft.world.level.block.SculkCatalystBlock. */
export interface SculkCatalystBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SculkCatalystBlock]>;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type SculkCatalystBlock = SculkCatalystBlockMembers & BaseEntityBlock;
export interface SculkCatalystBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SculkCatalystBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SculkCatalystBlock]>;
  readonly PULSE: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.SculkSensorBlock. */
export interface SculkSensorBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, SimpleWaterloggedBlock];
  activate(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number, arg5: number): void;
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SculkSensorBlock]>;
  getActiveTicks(): number;
  getDirectSignal(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): number;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
}
export type SculkSensorBlock = SculkSensorBlockMembers & BaseEntityBlock & SimpleWaterloggedBlock;
export interface SculkSensorBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SculkSensorBlock;
  readonly ACTIVE_TICKS: 30;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SculkSensorBlock]>;
  readonly COOLDOWN_TICKS: 10;
  readonly PHASE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.SculkSensorPhase>;
  readonly POWER: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  canActivate(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  deactivate(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  getPhase(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state_properties.SculkSensorPhase;
  tryResonateVibration(arg0: j_net_minecraft_world_entity.Entity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: number): void;
}

/** JVM class net.minecraft.world.level.block.SculkShriekerBlock. */
export interface SculkShriekerBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SculkShriekerBlock]>;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
}
export type SculkShriekerBlock = SculkShriekerBlockMembers & BaseEntityBlock & SimpleWaterloggedBlock;
export interface SculkShriekerBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SculkShriekerBlock;
  readonly CAN_SUMMON: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SculkShriekerBlock]>;
  readonly SHRIEKING: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly TOP_Y: number;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.SculkSpreader. */
export interface SculkSpreaderMembers {
  addCursors(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  additionalDecayRate(): number;
  chargeDecayRate(): number;
  clear(): void;
  getCursors(): JavaList<SculkSpreader_ChargeCursor>;
  growthSpawnCost(): number;
  isWorldGeneration(): boolean;
  level: j_net_minecraft_world_level.Level;
  load(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  noGrowthRadius(): number;
  replaceableBlocks(): j_net_minecraft_tags.TagKey<Block>;
  save(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  updateCursors(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: boolean): void;
}
export type SculkSpreader = SculkSpreaderMembers;
export interface SculkSpreaderStatics {
  new(arg0: boolean, arg1: j_net_minecraft_tags.TagKey<Block>, arg2: number, arg3: number, arg4: number, arg5: number): SculkSpreader;
  readonly MAX_CHARGE: 1000;
  readonly MAX_CURSOR_DISTANCE: 1024;
  readonly MAX_DECAY_FACTOR: 0.5;
  readonly MAX_GROWTH_RATE_RADIUS: 24;
  readonly SHRIEKER_PLACEMENT_RATE: 11;
  createLevelSpreader(): SculkSpreader;
  createWorldGenSpreader(): SculkSpreader;
}

/** JVM class net.minecraft.world.level.block.SculkSpreader$ChargeCursor. */
export interface SculkSpreader_ChargeCursorMembers {
  getCharge(): number;
  getDecayDelay(): number;
  getFacingData(): JavaSet<j_net_minecraft_core.Direction> | null;
  getPos(): j_net_minecraft_core.BlockPos;
  update(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource, arg3: SculkSpreader, arg4: boolean): void;
}
export type SculkSpreader_ChargeCursor = SculkSpreader_ChargeCursorMembers;
export interface SculkSpreader_ChargeCursorStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number): SculkSpreader_ChargeCursor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SculkSpreader_ChargeCursor]>;
  readonly MAX_CURSOR_DECAY_DELAY: 1;
}

/** JVM class net.minecraft.world.level.block.SculkVeinBlock. */
export interface SculkVeinBlockMembers {
  readonly __javaSupertypes?: readonly [MultifaceSpreadeableBlock, SculkBehaviour];
  attemptUseCharge(arg0: SculkSpreader_ChargeCursor, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource, arg4: SculkSpreader, arg5: boolean): number;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SculkVeinBlock]>;
  getSameSpaceSpreader(): MultifaceSpreader;
  getSpreader(): MultifaceSpreader;
  onDischarged(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
}
export type SculkVeinBlock = SculkVeinBlockMembers & MultifaceSpreadeableBlock & SculkBehaviour;
export interface SculkVeinBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SculkVeinBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SculkVeinBlock]>;
  hasSubstrateAccess(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos): boolean;
  regrow(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: JavaCollection<j_net_minecraft_core.Direction>): boolean;
}

/** JVM class net.minecraft.world.level.block.SeagrassBlock. */
export interface SeagrassBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock, LiquidBlockContainer];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SeagrassBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type SeagrassBlock = SeagrassBlockMembers & VegetationBlock & BonemealableBlock & LiquidBlockContainer;
export interface SeagrassBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SeagrassBlock]>;
}

/** JVM class net.minecraft.world.level.block.SeaPickleBlock. */
export interface SeaPickleBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SeaPickleBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type SeaPickleBlock = SeaPickleBlockMembers & VegetationBlock & BonemealableBlock & SimpleWaterloggedBlock;
export interface SeaPickleBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SeaPickleBlock]>;
  readonly MAX_PICKLES: 4;
  readonly PICKLES: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  isDead(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM interface net.minecraft.world.level.block.SegmentableBlock. */
export interface SegmentableBlockMembers {
  canBeReplaced(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_item_context.BlockPlaceContext, arg2: j_net_minecraft_world_level_block_state_properties.IntegerProperty): boolean;
  getSegmentAmountProperty(): j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  getShapeCalculator(arg0: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>, arg1: j_net_minecraft_world_level_block_state_properties.IntegerProperty): JavaFunction<j_net_minecraft_world_level_block_state.BlockState, j_net_minecraft_world_phys_shapes.VoxelShape>;
  getShapeHeight(): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext, arg1: Block, arg2: j_net_minecraft_world_level_block_state_properties.IntegerProperty, arg3: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>): j_net_minecraft_world_level_block_state.BlockState;
}
export type SegmentableBlock = SegmentableBlockMembers;
export interface SegmentableBlockStatics {
  readonly AMOUNT: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_SEGMENT: 4;
  readonly MIN_SEGMENT: 1;
}

/** JVM class net.minecraft.world.level.block.ShortDryGrassBlock. */
export interface ShortDryGrassBlockMembers {
  readonly __javaSupertypes?: readonly [DryVegetationBlock, BonemealableBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ShortDryGrassBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type ShortDryGrassBlock = ShortDryGrassBlockMembers & DryVegetationBlock & BonemealableBlock;
export interface ShortDryGrassBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShortDryGrassBlock]>;
}

/** JVM class net.minecraft.world.level.block.ShulkerBoxBlock. */
export interface ShulkerBoxBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ShulkerBoxBlock]>;
  readonly color: j_net_minecraft_world_item.DyeColor | null;
  getColor(): j_net_minecraft_world_item.DyeColor | null;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
}
export type ShulkerBoxBlock = ShulkerBoxBlockMembers & BaseEntityBlock;
export interface ShulkerBoxBlockStatics {
  new(arg0: j_net_minecraft_world_item.DyeColor | null, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): ShulkerBoxBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ShulkerBoxBlock]>;
  readonly CONTENTS: j_net_minecraft_resources.ResourceLocation;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly SHAPES_OPEN_SUPPORT: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_phys_shapes.VoxelShape>;
  getBlockByColor(arg0: j_net_minecraft_world_item.DyeColor | null): Block;
  getColoredItemStack(arg0: j_net_minecraft_world_item.DyeColor | null): j_net_minecraft_world_item.ItemStack;
}

/** JVM abstract net.minecraft.world.level.block.SignBlock. */
export interface SignBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, SimpleWaterloggedBlock];
  getSignHitboxCenterPosition(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.Vec3;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  getYRotationDegrees(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  isPossibleToRespawnInThis(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  openTextEdit(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean): void;
  openTextEdit(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean, arg3: JavaOpaque<"io.papermc.paper.event.player.PlayerOpenSignEvent$Cause">): void;
  type(): j_net_minecraft_world_level_block_state_properties.WoodType;
}
export type SignBlock = SignBlockMembers & BaseEntityBlock & SimpleWaterloggedBlock;
export interface SignBlockStatics {
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getWoodType(arg0: Block): j_net_minecraft_world_level_block_state_properties.WoodType;
}

/** JVM interface net.minecraft.world.level.block.SimpleWaterloggedBlock. */
export interface SimpleWaterloggedBlockMembers {
  readonly __javaSupertypes?: readonly [BucketPickup, LiquidBlockContainer];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  getPickupSound(): JavaOptional<j_net_minecraft_sounds.SoundEvent>;
  pickupBlock(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_item.ItemStack;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type SimpleWaterloggedBlock = SimpleWaterloggedBlockMembers & BucketPickup & LiquidBlockContainer;
export interface SimpleWaterloggedBlockStatics {
}

/** JVM class net.minecraft.world.level.block.SkullBlock. */
export interface SkullBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractSkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SkullBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type SkullBlock = SkullBlockMembers & AbstractSkullBlock;
export interface SkullBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SkullBlock]>;
  readonly MAX: number;
  readonly ROTATION: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
}

/** JVM interface net.minecraft.world.level.block.SkullBlock$Type. */
export interface SkullBlock_TypeMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util.StringRepresentable];
}
export type SkullBlock_Type = SkullBlock_TypeMembers & j_net_minecraft_util.StringRepresentable;
export interface SkullBlock_TypeStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SkullBlock_Type]>;
  readonly TYPES: JavaMap<string, SkullBlock_Type>;
}

/** Live JVM enum net.minecraft.world.level.block.SkullBlock$Types; constants are host handles, not strings. */
export type SkullBlock_Types = JavaEnum<"net.minecraft.world.level.block.SkullBlock$Types", "CREEPER" | "DRAGON" | "PIGLIN" | "PLAYER" | "SKELETON" | "WITHER_SKELETON" | "ZOMBIE"> & SkullBlock_TypesMembers;
export interface SkullBlock_TypesMembers {
  getSerializedName(): string;
}
export interface SkullBlock_TypesStatics {
  readonly CREEPER: SkullBlock_Types;
  readonly DRAGON: SkullBlock_Types;
  readonly PIGLIN: SkullBlock_Types;
  readonly PLAYER: SkullBlock_Types;
  readonly SKELETON: SkullBlock_Types;
  readonly WITHER_SKELETON: SkullBlock_Types;
  readonly ZOMBIE: SkullBlock_Types;
  valueOf(arg0: string): SkullBlock_Types;
  values(): Array<SkullBlock_Types>;
}

/** JVM class net.minecraft.world.level.block.SlabBlock. */
export interface SlabBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SlabBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type SlabBlock = SlabBlockMembers & Block & SimpleWaterloggedBlock;
export interface SlabBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SlabBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlabBlock]>;
  readonly TYPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.SlabType>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.SlimeBlock. */
export interface SlimeBlockMembers {
  readonly __javaSupertypes?: readonly [HalfTransparentBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SlimeBlock]>;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
  updateEntityMovementAfterFallOn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_world_entity.Entity): void;
}
export type SlimeBlock = SlimeBlockMembers & HalfTransparentBlock;
export interface SlimeBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SlimeBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SlimeBlock]>;
}

/** JVM class net.minecraft.world.level.block.SmallDripleafBlock. */
export interface SmallDripleafBlockMembers {
  readonly __javaSupertypes?: readonly [DoublePlantBlock, BonemealableBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SmallDripleafBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type SmallDripleafBlock = SmallDripleafBlockMembers & DoublePlantBlock & BonemealableBlock & SimpleWaterloggedBlock;
export interface SmallDripleafBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SmallDripleafBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SmallDripleafBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.SmithingTableBlock. */
export interface SmithingTableBlockMembers {
  readonly __javaSupertypes?: readonly [CraftingTableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SmithingTableBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider;
}
export type SmithingTableBlock = SmithingTableBlockMembers & CraftingTableBlock;
export interface SmithingTableBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SmithingTableBlock]>;
}

/** JVM class net.minecraft.world.level.block.SmokerBlock. */
export interface SmokerBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SmokerBlock]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type SmokerBlock = SmokerBlockMembers & AbstractFurnaceBlock;
export interface SmokerBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SmokerBlock]>;
}

/** JVM class net.minecraft.world.level.block.SnifferEggBlock. */
export interface SnifferEggBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SnifferEggBlock]>;
  getHatchLevel(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  isPathfindable(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_pathfinder.PathComputationType): boolean;
  onPlace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: boolean): void;
  tick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
}
export type SnifferEggBlock = SnifferEggBlockMembers & Block;
export interface SnifferEggBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SnifferEggBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SnifferEggBlock]>;
  readonly HATCH: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_HATCH_LEVEL: 2;
  hatchBoost(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM class net.minecraft.world.level.block.SnowLayerBlock. */
export interface SnowLayerBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SnowLayerBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type SnowLayerBlock = SnowLayerBlockMembers & Block;
export interface SnowLayerBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SnowLayerBlock]>;
  readonly HEIGHT_IMPASSABLE: 5;
  readonly LAYERS: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_HEIGHT: 8;
}

/** JVM class net.minecraft.world.level.block.SnowyDirtBlock. */
export interface SnowyDirtBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type SnowyDirtBlock = SnowyDirtBlockMembers & Block;
export interface SnowyDirtBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SnowyDirtBlock]>;
  readonly SNOWY: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.SoulFireBlock. */
export interface SoulFireBlockMembers {
  readonly __javaSupertypes?: readonly [BaseFireBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SoulFireBlock]>;
}
export type SoulFireBlock = SoulFireBlockMembers & BaseFireBlock;
export interface SoulFireBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SoulFireBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SoulFireBlock]>;
  canSurviveOnBlock(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.SoulSandBlock. */
export interface SoulSandBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SoulSandBlock]>;
}
export type SoulSandBlock = SoulSandBlockMembers & Block;
export interface SoulSandBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SoulSandBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SoulSandBlock]>;
}

/** JVM class net.minecraft.world.level.block.SoundType. */
export interface SoundTypeMembers {
  readonly breakSound: j_net_minecraft_sounds.SoundEvent;
  getBreakSound(): j_net_minecraft_sounds.SoundEvent;
  getFallSound(): j_net_minecraft_sounds.SoundEvent;
  getHitSound(): j_net_minecraft_sounds.SoundEvent;
  getPitch(): number;
  getPlaceSound(): j_net_minecraft_sounds.SoundEvent;
  getStepSound(): j_net_minecraft_sounds.SoundEvent;
  getVolume(): number;
  readonly hitSound: j_net_minecraft_sounds.SoundEvent;
  readonly pitch: number;
  readonly volume: number;
}
export type SoundType = SoundTypeMembers;
export interface SoundTypeStatics {
  new(arg0: number, arg1: number, arg2: j_net_minecraft_sounds.SoundEvent, arg3: j_net_minecraft_sounds.SoundEvent, arg4: j_net_minecraft_sounds.SoundEvent, arg5: j_net_minecraft_sounds.SoundEvent, arg6: j_net_minecraft_sounds.SoundEvent): SoundType;
  readonly AMETHYST: SoundType;
  readonly AMETHYST_CLUSTER: SoundType;
  readonly ANCIENT_DEBRIS: SoundType;
  readonly ANVIL: SoundType;
  readonly AZALEA: SoundType;
  readonly AZALEA_LEAVES: SoundType;
  readonly BAMBOO: SoundType;
  readonly BAMBOO_SAPLING: SoundType;
  readonly BAMBOO_WOOD: SoundType;
  readonly BAMBOO_WOOD_HANGING_SIGN: SoundType;
  readonly BASALT: SoundType;
  readonly BIG_DRIPLEAF: SoundType;
  readonly BONE_BLOCK: SoundType;
  readonly CACTUS_FLOWER: SoundType;
  readonly CALCITE: SoundType;
  readonly CANDLE: SoundType;
  readonly CAVE_VINES: SoundType;
  readonly CHAIN: SoundType;
  readonly CHERRY_LEAVES: SoundType;
  readonly CHERRY_SAPLING: SoundType;
  readonly CHERRY_WOOD: SoundType;
  readonly CHERRY_WOOD_HANGING_SIGN: SoundType;
  readonly CHISELED_BOOKSHELF: SoundType;
  readonly COBWEB: SoundType;
  readonly COPPER: SoundType;
  readonly COPPER_BULB: SoundType;
  readonly COPPER_GRATE: SoundType;
  readonly CORAL_BLOCK: SoundType;
  readonly CREAKING_HEART: SoundType;
  readonly CROP: SoundType;
  readonly DECORATED_POT: SoundType;
  readonly DECORATED_POT_CRACKED: SoundType;
  readonly DEEPSLATE: SoundType;
  readonly DEEPSLATE_BRICKS: SoundType;
  readonly DEEPSLATE_TILES: SoundType;
  readonly DRIED_GHAST: SoundType;
  readonly DRIPSTONE_BLOCK: SoundType;
  readonly EMPTY: SoundType;
  readonly FLOWERING_AZALEA: SoundType;
  readonly FROGLIGHT: SoundType;
  readonly FROGSPAWN: SoundType;
  readonly FUNGUS: SoundType;
  readonly GILDED_BLACKSTONE: SoundType;
  readonly GLASS: SoundType;
  readonly GLOW_LICHEN: SoundType;
  readonly GRASS: SoundType;
  readonly GRAVEL: SoundType;
  readonly HANGING_ROOTS: SoundType;
  readonly HANGING_SIGN: SoundType;
  readonly HARD_CROP: SoundType;
  readonly HEAVY_CORE: SoundType;
  readonly HONEY_BLOCK: SoundType;
  readonly IRON: SoundType;
  readonly LADDER: SoundType;
  readonly LANTERN: SoundType;
  readonly LARGE_AMETHYST_BUD: SoundType;
  readonly LEAF_LITTER: SoundType;
  readonly LILY_PAD: SoundType;
  readonly LODESTONE: SoundType;
  readonly MANGROVE_ROOTS: SoundType;
  readonly MEDIUM_AMETHYST_BUD: SoundType;
  readonly METAL: SoundType;
  readonly MOSS: SoundType;
  readonly MOSS_CARPET: SoundType;
  readonly MUD: SoundType;
  readonly MUDDY_MANGROVE_ROOTS: SoundType;
  readonly MUD_BRICKS: SoundType;
  readonly NETHERITE_BLOCK: SoundType;
  readonly NETHERRACK: SoundType;
  readonly NETHER_BRICKS: SoundType;
  readonly NETHER_GOLD_ORE: SoundType;
  readonly NETHER_ORE: SoundType;
  readonly NETHER_SPROUTS: SoundType;
  readonly NETHER_WART: SoundType;
  readonly NETHER_WOOD: SoundType;
  readonly NETHER_WOOD_HANGING_SIGN: SoundType;
  readonly NYLIUM: SoundType;
  readonly PACKED_MUD: SoundType;
  readonly PINK_PETALS: SoundType;
  readonly POINTED_DRIPSTONE: SoundType;
  readonly POLISHED_DEEPSLATE: SoundType;
  readonly POLISHED_TUFF: SoundType;
  readonly POWDER_SNOW: SoundType;
  readonly RESIN: SoundType;
  readonly RESIN_BRICKS: SoundType;
  readonly ROOTED_DIRT: SoundType;
  readonly ROOTS: SoundType;
  readonly SAND: SoundType;
  readonly SCAFFOLDING: SoundType;
  readonly SCULK: SoundType;
  readonly SCULK_CATALYST: SoundType;
  readonly SCULK_SENSOR: SoundType;
  readonly SCULK_SHRIEKER: SoundType;
  readonly SCULK_VEIN: SoundType;
  readonly SHROOMLIGHT: SoundType;
  readonly SLIME_BLOCK: SoundType;
  readonly SMALL_AMETHYST_BUD: SoundType;
  readonly SMALL_DRIPLEAF: SoundType;
  readonly SNOW: SoundType;
  readonly SOUL_SAND: SoundType;
  readonly SOUL_SOIL: SoundType;
  readonly SPAWNER: SoundType;
  readonly SPONGE: SoundType;
  readonly SPORE_BLOSSOM: SoundType;
  readonly STEM: SoundType;
  readonly STONE: SoundType;
  readonly SUSPICIOUS_GRAVEL: SoundType;
  readonly SUSPICIOUS_SAND: SoundType;
  readonly SWEET_BERRY_BUSH: SoundType;
  readonly TRIAL_SPAWNER: SoundType;
  readonly TUFF: SoundType;
  readonly TUFF_BRICKS: SoundType;
  readonly TWISTING_VINES: SoundType;
  readonly VAULT: SoundType;
  readonly VINE: SoundType;
  readonly WART_BLOCK: SoundType;
  readonly WEEPING_VINES: SoundType;
  readonly WET_GRASS: SoundType;
  readonly WET_SPONGE: SoundType;
  readonly WOOD: SoundType;
  readonly WOOL: SoundType;
}

/** JVM class net.minecraft.world.level.block.SpawnerBlock. */
export interface SpawnerBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnerBlock]>;
  getExpDrop(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_item.ItemStack, arg4: boolean): number;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type SpawnerBlock = SpawnerBlockMembers & BaseEntityBlock;
export interface SpawnerBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SpawnerBlock]>;
}

/** JVM class net.minecraft.world.level.block.SpongeBlock. */
export interface SpongeBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SpongeBlock]>;
}
export type SpongeBlock = SpongeBlockMembers & Block;
export interface SpongeBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SpongeBlock]>;
  readonly MAX_COUNT: 64;
  readonly MAX_DEPTH: 6;
}

/** JVM class net.minecraft.world.level.block.SporeBlossomBlock. */
export interface SporeBlossomBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SporeBlossomBlock]>;
}
export type SporeBlossomBlock = SporeBlossomBlockMembers & Block;
export interface SporeBlossomBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SporeBlossomBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SporeBlossomBlock]>;
}

/** JVM abstract net.minecraft.world.level.block.SpreadingSnowyDirtBlock. */
export interface SpreadingSnowyDirtBlockMembers {
  readonly __javaSupertypes?: readonly [SnowyDirtBlock];
}
export type SpreadingSnowyDirtBlock = SpreadingSnowyDirtBlockMembers & SnowyDirtBlock;
export interface SpreadingSnowyDirtBlockStatics {
}

/** JVM class net.minecraft.world.level.block.StainedGlassBlock. */
export interface StainedGlassBlockMembers {
  readonly __javaSupertypes?: readonly [TransparentBlock, BeaconBeamBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StainedGlassBlock]>;
  getColor(): j_net_minecraft_world_item.DyeColor;
}
export type StainedGlassBlock = StainedGlassBlockMembers & TransparentBlock & BeaconBeamBlock;
export interface StainedGlassBlockStatics {
  new(arg0: j_net_minecraft_world_item.DyeColor, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): StainedGlassBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StainedGlassBlock]>;
}

/** JVM class net.minecraft.world.level.block.StainedGlassPaneBlock. */
export interface StainedGlassPaneBlockMembers {
  readonly __javaSupertypes?: readonly [IronBarsBlock, BeaconBeamBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StainedGlassPaneBlock]>;
  getColor(): j_net_minecraft_world_item.DyeColor;
}
export type StainedGlassPaneBlock = StainedGlassPaneBlockMembers & IronBarsBlock & BeaconBeamBlock;
export interface StainedGlassPaneBlockStatics {
  new(arg0: j_net_minecraft_world_item.DyeColor, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): StainedGlassPaneBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StainedGlassPaneBlock]>;
}

/** JVM class net.minecraft.world.level.block.StairBlock. */
export interface StairBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StairBlock]>;
  getExplosionResistance(): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type StairBlock = StairBlockMembers & Block & SimpleWaterloggedBlock;
export interface StairBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StairBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly HALF: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.Half>;
  readonly SHAPE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.StairsShape>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  isStairs(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
}

/** JVM class net.minecraft.world.level.block.StandingSignBlock. */
export interface StandingSignBlockMembers {
  readonly __javaSupertypes?: readonly [SignBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StandingSignBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getYRotationDegrees(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
}
export type StandingSignBlock = StandingSignBlockMembers & SignBlock;
export interface StandingSignBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state_properties.WoodType, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): StandingSignBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StandingSignBlock]>;
  readonly ROTATION: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
}

/** JVM class net.minecraft.world.level.block.StemBlock. */
export interface StemBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StemBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type StemBlock = StemBlockMembers & VegetationBlock & BonemealableBlock;
export interface StemBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StemBlock]>;
  readonly MAX_AGE: 7;
}

/** JVM class net.minecraft.world.level.block.StonecutterBlock. */
export interface StonecutterBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StonecutterBlock]>;
  getMenuProvider(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type StonecutterBlock = StonecutterBlockMembers & Block;
export interface StonecutterBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): StonecutterBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StonecutterBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.StructureBlock. */
export interface StructureBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, GameMasterBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StructureBlock]>;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type StructureBlock = StructureBlockMembers & BaseEntityBlock & GameMasterBlock;
export interface StructureBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StructureBlock]>;
  readonly MODE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.StructureMode>;
}

/** JVM class net.minecraft.world.level.block.StructureVoidBlock. */
export interface StructureVoidBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [StructureVoidBlock]>;
}
export type StructureVoidBlock = StructureVoidBlockMembers & Block;
export interface StructureVoidBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [StructureVoidBlock]>;
}

/** JVM class net.minecraft.world.level.block.SugarCaneBlock. */
export interface SugarCaneBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SugarCaneBlock]>;
}
export type SugarCaneBlock = SugarCaneBlockMembers & Block;
export interface SugarCaneBlockStatics {
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SugarCaneBlock]>;
}

/** Live JVM enum net.minecraft.world.level.block.SupportType; constants are host handles, not strings. */
export type SupportType = JavaEnum<"net.minecraft.world.level.block.SupportType", "CENTER" | "FULL" | "RIGID"> & SupportTypeMembers;
export interface SupportTypeMembers {
  isSupporting(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): boolean;
}
export interface SupportTypeStatics {
  readonly CENTER: SupportType;
  readonly FULL: SupportType;
  readonly RIGID: SupportType;
  valueOf(arg0: string): SupportType;
  values(): Array<SupportType>;
}

/** JVM interface net.minecraft.world.level.block.SuspiciousEffectHolder. */
export interface SuspiciousEffectHolderMembers {
  getSuspiciousEffects(): j_net_minecraft_world_item_component.SuspiciousStewEffects;
}
export type SuspiciousEffectHolder = SuspiciousEffectHolderMembers;
export interface SuspiciousEffectHolderStatics {
  getAllEffectHolders(): JavaList<SuspiciousEffectHolder>;
  tryGet(arg0: j_net_minecraft_world_level.ItemLike): SuspiciousEffectHolder | null;
}

/** JVM class net.minecraft.world.level.block.SweetBerryBushBlock. */
export interface SweetBerryBushBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [SweetBerryBushBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type SweetBerryBushBlock = SweetBerryBushBlockMembers & VegetationBlock & BonemealableBlock;
export interface SweetBerryBushBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): SweetBerryBushBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [SweetBerryBushBlock]>;
  readonly MAX_AGE: 3;
}

/** JVM class net.minecraft.world.level.block.TallDryGrassBlock. */
export interface TallDryGrassBlockMembers {
  readonly __javaSupertypes?: readonly [DryVegetationBlock, BonemealableBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TallDryGrassBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type TallDryGrassBlock = TallDryGrassBlockMembers & DryVegetationBlock & BonemealableBlock;
export interface TallDryGrassBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TallDryGrassBlock]>;
}

/** JVM class net.minecraft.world.level.block.TallFlowerBlock. */
export interface TallFlowerBlockMembers {
  readonly __javaSupertypes?: readonly [DoublePlantBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TallFlowerBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type TallFlowerBlock = TallFlowerBlockMembers & DoublePlantBlock & BonemealableBlock;
export interface TallFlowerBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TallFlowerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TallFlowerBlock]>;
}

/** JVM class net.minecraft.world.level.block.TallGrassBlock. */
export interface TallGrassBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock, BonemealableBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TallGrassBlock]>;
  isBonemealSuccess(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isValidBonemealTarget(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): boolean;
  performBonemeal(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type TallGrassBlock = TallGrassBlockMembers & VegetationBlock & BonemealableBlock;
export interface TallGrassBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TallGrassBlock]>;
}

/** JVM class net.minecraft.world.level.block.TallSeagrassBlock. */
export interface TallSeagrassBlockMembers {
  readonly __javaSupertypes?: readonly [DoublePlantBlock, LiquidBlockContainer];
  canPlaceLiquid(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.Fluid): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TallSeagrassBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  placeLiquid(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_level_material.FluidState): boolean;
}
export type TallSeagrassBlock = TallSeagrassBlockMembers & DoublePlantBlock & LiquidBlockContainer;
export interface TallSeagrassBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TallSeagrassBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TallSeagrassBlock]>;
  readonly HALF: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.DoubleBlockHalf>;
}

/** JVM class net.minecraft.world.level.block.TargetBlock. */
export interface TargetBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TargetBlock]>;
}
export type TargetBlock = TargetBlockMembers & Block;
export interface TargetBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TargetBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TargetBlock]>;
}

/** JVM class net.minecraft.world.level.block.TestBlock. */
export interface TestBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, GameMasterBlock];
  getSignal(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): number;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type TestBlock = TestBlockMembers & BaseEntityBlock & GameMasterBlock;
export interface TestBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TestBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestBlock]>;
  readonly MODE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.TestBlockMode>;
  setModeOnStack(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_block_state_properties.TestBlockMode): j_net_minecraft_world_item.ItemStack;
}

/** JVM class net.minecraft.world.level.block.TestInstanceBlock. */
export interface TestInstanceBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock, GameMasterBlock];
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type TestInstanceBlock = TestInstanceBlockMembers & BaseEntityBlock & GameMasterBlock;
export interface TestInstanceBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TestInstanceBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestInstanceBlock]>;
}

/** JVM class net.minecraft.world.level.block.TintedGlassBlock. */
export interface TintedGlassBlockMembers {
  readonly __javaSupertypes?: readonly [TransparentBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TintedGlassBlock]>;
}
export type TintedGlassBlock = TintedGlassBlockMembers & TransparentBlock;
export interface TintedGlassBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TintedGlassBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TintedGlassBlock]>;
}

/** JVM class net.minecraft.world.level.block.TintedParticleLeavesBlock. */
export interface TintedParticleLeavesBlockMembers {
  readonly __javaSupertypes?: readonly [LeavesBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TintedParticleLeavesBlock]>;
}
export type TintedParticleLeavesBlock = TintedParticleLeavesBlockMembers & LeavesBlock;
export interface TintedParticleLeavesBlockStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TintedParticleLeavesBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TintedParticleLeavesBlock]>;
}

/** JVM class net.minecraft.world.level.block.TntBlock. */
export interface TntBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TntBlock]>;
  dropFromExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  wasExploded(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level.Explosion): void;
}
export type TntBlock = TntBlockMembers & Block;
export interface TntBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TntBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TntBlock]>;
  readonly UNSTABLE: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  prime(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): boolean;
  prime(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: JavaOpaque<"java.util.function.BooleanSupplier">): boolean;
}

/** JVM class net.minecraft.world.level.block.TorchBlock. */
export interface TorchBlockMembers {
  readonly __javaSupertypes?: readonly [BaseTorchBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TorchBlock]>;
}
export type TorchBlock = TorchBlockMembers & BaseTorchBlock;
export interface TorchBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TorchBlock]>;
}

/** JVM class net.minecraft.world.level.block.TorchflowerCropBlock. */
export interface TorchflowerCropBlockMembers {
  readonly __javaSupertypes?: readonly [CropBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TorchflowerCropBlock]>;
  getMaxAge(): number;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getStateForAge(arg0: number): j_net_minecraft_world_level_block_state.BlockState;
  randomTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
}
export type TorchflowerCropBlock = TorchflowerCropBlockMembers & CropBlock;
export interface TorchflowerCropBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TorchflowerCropBlock;
  readonly AGE: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TorchflowerCropBlock]>;
  readonly MAX_AGE: 1;
}

/** JVM class net.minecraft.world.level.block.TransparentBlock. */
export interface TransparentBlockMembers {
  readonly __javaSupertypes?: readonly [HalfTransparentBlock];
}
export type TransparentBlock = TransparentBlockMembers & HalfTransparentBlock;
export interface TransparentBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TransparentBlock]>;
}

/** JVM class net.minecraft.world.level.block.TrapDoorBlock. */
export interface TrapDoorBlockMembers {
  readonly __javaSupertypes?: readonly [HorizontalDirectionalBlock, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TrapDoorBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type TrapDoorBlock = TrapDoorBlockMembers & HorizontalDirectionalBlock & SimpleWaterloggedBlock;
export interface TrapDoorBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrapDoorBlock]>;
  readonly HALF: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.Half>;
  readonly OPEN: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.TrappedChestBlock. */
export interface TrappedChestBlockMembers {
  readonly __javaSupertypes?: readonly [ChestBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TrappedChestBlock]>;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type TrappedChestBlock = TrappedChestBlockMembers & ChestBlock;
export interface TrappedChestBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TrappedChestBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrappedChestBlock]>;
}

/** JVM class net.minecraft.world.level.block.TrialSpawnerBlock. */
export interface TrialSpawnerBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TrialSpawnerBlock]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
}
export type TrialSpawnerBlock = TrialSpawnerBlockMembers & BaseEntityBlock;
export interface TrialSpawnerBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TrialSpawnerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrialSpawnerBlock]>;
  readonly OMINOUS: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly STATE: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawnerState>;
}

/** JVM class net.minecraft.world.level.block.TripWireBlock. */
export interface TripWireBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TripWireBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  playerWillDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_level_block_state.BlockState;
  shouldConnectTo(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_core.Direction): boolean;
}
export type TripWireBlock = TripWireBlockMembers & Block;
export interface TripWireBlockStatics {
  new(arg0: Block, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TripWireBlock;
  readonly ATTACHED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TripWireBlock]>;
  readonly DISARMED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM class net.minecraft.world.level.block.TripWireHookBlock. */
export interface TripWireHookBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TripWireHookBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type TripWireHookBlock = TripWireHookBlockMembers & Block;
export interface TripWireHookBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TripWireHookBlock;
  readonly ATTACHED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TripWireHookBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly POWERED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  calculateState(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: boolean, arg4: boolean, arg5: number, arg6: j_net_minecraft_world_level_block_state.BlockState | null): void;
}

/** JVM class net.minecraft.world.level.block.TurtleEggBlock. */
export interface TurtleEggBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TurtleEggBlock]>;
  decreaseEggs(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  fallOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity.Entity, arg4: number): void;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  playerDestroy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_block_entity.BlockEntity | null, arg5: j_net_minecraft_world_item.ItemStack, arg6: boolean, arg7: boolean): void;
  stepOn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity): void;
}
export type TurtleEggBlock = TurtleEggBlockMembers & Block;
export interface TurtleEggBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TurtleEggBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TurtleEggBlock]>;
  readonly EGGS: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly HATCH: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  readonly MAX_EGGS: 4;
  readonly MAX_HATCH_LEVEL: 2;
  readonly MIN_EGGS: 1;
  isSand(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  onSand(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM class net.minecraft.world.level.block.TwistingVinesBlock. */
export interface TwistingVinesBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantHeadBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TwistingVinesBlock]>;
}
export type TwistingVinesBlock = TwistingVinesBlockMembers & GrowingPlantHeadBlock;
export interface TwistingVinesBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TwistingVinesBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TwistingVinesBlock]>;
}

/** JVM class net.minecraft.world.level.block.TwistingVinesPlantBlock. */
export interface TwistingVinesPlantBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantBodyBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TwistingVinesPlantBlock]>;
}
export type TwistingVinesPlantBlock = TwistingVinesPlantBlockMembers & GrowingPlantBodyBlock;
export interface TwistingVinesPlantBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): TwistingVinesPlantBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TwistingVinesPlantBlock]>;
}

/** JVM class net.minecraft.world.level.block.UntintedParticleLeavesBlock. */
export interface UntintedParticleLeavesBlockMembers {
  readonly __javaSupertypes?: readonly [LeavesBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [UntintedParticleLeavesBlock]>;
}
export type UntintedParticleLeavesBlock = UntintedParticleLeavesBlockMembers & LeavesBlock;
export interface UntintedParticleLeavesBlockStatics {
  new(arg0: number, arg1: j_net_minecraft_core_particles.ParticleOptions, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): UntintedParticleLeavesBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [UntintedParticleLeavesBlock]>;
}

/** JVM class net.minecraft.world.level.block.VaultBlock. */
export interface VaultBlockMembers {
  readonly __javaSupertypes?: readonly [BaseEntityBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [VaultBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  mirror(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Mirror): j_net_minecraft_world_level_block_state.BlockState;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity | null;
  rotate(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: Rotation): j_net_minecraft_world_level_block_state.BlockState;
  useItemOn(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_entity_player.Player, arg5: j_net_minecraft_world.InteractionHand, arg6: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
}
export type VaultBlock = VaultBlockMembers & BaseEntityBlock;
export interface VaultBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): VaultBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [VaultBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  readonly OMINOUS: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly STATE: j_net_minecraft_world_level_block_state_properties.Property<j_net_minecraft_world_level_block_entity_vault.VaultState>;
}

/** JVM abstract net.minecraft.world.level.block.VegetationBlock. */
export interface VegetationBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
}
export type VegetationBlock = VegetationBlockMembers & Block;
export interface VegetationBlockStatics {
}

/** JVM class net.minecraft.world.level.block.VineBlock. */
export interface VineBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [VineBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type VineBlock = VineBlockMembers & Block;
export interface VineBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): VineBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [VineBlock]>;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.BooleanProperty>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly UP: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getPropertyForFace(arg0: j_net_minecraft_core.Direction): j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  isAcceptableNeighbour(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
}

/** JVM class net.minecraft.world.level.block.WallBannerBlock. */
export interface WallBannerBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractBannerBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WallBannerBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type WallBannerBlock = WallBannerBlockMembers & AbstractBannerBlock;
export interface WallBannerBlockStatics {
  new(arg0: j_net_minecraft_world_item.DyeColor, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WallBannerBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WallBannerBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.WallBlock. */
export interface WallBlockMembers {
  readonly __javaSupertypes?: readonly [Block, SimpleWaterloggedBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WallBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type WallBlock = WallBlockMembers & Block & SimpleWaterloggedBlock;
export interface WallBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WallBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WallBlock]>;
  readonly EAST: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  readonly NORTH: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  readonly PROPERTY_BY_DIRECTION: JavaMap<j_net_minecraft_core.Direction, j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>>;
  readonly SOUTH: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
  readonly UP: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  readonly WEST: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_world_level_block_state_properties.WallSide>;
}

/** JVM class net.minecraft.world.level.block.WallHangingSignBlock. */
export interface WallHangingSignBlockMembers {
  readonly __javaSupertypes?: readonly [SignBlock];
  canAttachTo(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): boolean;
  canPlace(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_core.BlockPos): boolean;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WallHangingSignBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  getYRotationDegrees(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  newBlockEntity(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.BlockEntity;
}
export type WallHangingSignBlock = WallHangingSignBlockMembers & SignBlock;
export interface WallHangingSignBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state_properties.WoodType, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WallHangingSignBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WallHangingSignBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.WallSignBlock. */
export interface WallSignBlockMembers {
  readonly __javaSupertypes?: readonly [SignBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WallSignBlock]>;
  getSignHitboxCenterPosition(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.Vec3;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
  getYRotationDegrees(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
}
export type WallSignBlock = WallSignBlockMembers & SignBlock;
export interface WallSignBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state_properties.WoodType, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WallSignBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WallSignBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.WallSkullBlock. */
export interface WallSkullBlockMembers {
  readonly __javaSupertypes?: readonly [AbstractSkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WallSkullBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState;
}
export type WallSkullBlock = WallSkullBlockMembers & AbstractSkullBlock;
export interface WallSkullBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WallSkullBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
}

/** JVM class net.minecraft.world.level.block.WallTorchBlock. */
export interface WallTorchBlockMembers {
  readonly __javaSupertypes?: readonly [TorchBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WallTorchBlock]>;
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type WallTorchBlock = WallTorchBlockMembers & TorchBlock;
export interface WallTorchBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WallTorchBlock]>;
  readonly FACING: j_net_minecraft_world_level_block_state_properties.EnumProperty<j_net_minecraft_core.Direction>;
  canSurvive(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
  getShape(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys_shapes.VoxelShape;
}

/** JVM class net.minecraft.world.level.block.WaterlilyBlock. */
export interface WaterlilyBlockMembers {
  readonly __javaSupertypes?: readonly [VegetationBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WaterlilyBlock]>;
}
export type WaterlilyBlock = WaterlilyBlockMembers & VegetationBlock;
export interface WaterlilyBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WaterlilyBlock]>;
}

/** JVM class net.minecraft.world.level.block.WaterloggedTransparentBlock. */
export interface WaterloggedTransparentBlockMembers {
  readonly __javaSupertypes?: readonly [TransparentBlock, SimpleWaterloggedBlock];
  getStateForPlacement(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_level_block_state.BlockState | null;
}
export type WaterloggedTransparentBlock = WaterloggedTransparentBlockMembers & TransparentBlock & SimpleWaterloggedBlock;
export interface WaterloggedTransparentBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WaterloggedTransparentBlock]>;
  readonly WATERLOGGED: j_net_minecraft_world_level_block_state_properties.BooleanProperty;
}

/** JVM interface net.minecraft.world.level.block.WeatheringCopper. */
export interface WeatheringCopperMembers {
  readonly __javaSupertypes?: readonly [ChangeOverTimeBlock<WeatheringCopper_WeatherState>];
  getChanceModifier(): number;
  getNext(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
}
export type WeatheringCopper = WeatheringCopperMembers & ChangeOverTimeBlock<WeatheringCopper_WeatherState>;
export interface WeatheringCopperStatics {
  readonly NEXT_BY_BLOCK: JavaSupplier<JavaOpaque<"com.google.common.collect.BiMap", [Block, Block]>>;
  readonly PREVIOUS_BY_BLOCK: JavaSupplier<JavaOpaque<"com.google.common.collect.BiMap", [Block, Block]>>;
  getFirst(arg0: Block): Block;
  getFirst(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  getNext(arg0: Block): JavaOptional<Block>;
  getPrevious(arg0: Block): JavaOptional<Block>;
  getPrevious(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
}

/** Live JVM enum net.minecraft.world.level.block.WeatheringCopper$WeatherState; constants are host handles, not strings. */
export type WeatheringCopper_WeatherState = JavaEnum<"net.minecraft.world.level.block.WeatheringCopper$WeatherState", "EXPOSED" | "OXIDIZED" | "UNAFFECTED" | "WEATHERED"> & WeatheringCopper_WeatherStateMembers;
export interface WeatheringCopper_WeatherStateMembers {
  getSerializedName(): string;
}
export interface WeatheringCopper_WeatherStateStatics {
  readonly EXPOSED: WeatheringCopper_WeatherState;
  readonly OXIDIZED: WeatheringCopper_WeatherState;
  readonly UNAFFECTED: WeatheringCopper_WeatherState;
  readonly WEATHERED: WeatheringCopper_WeatherState;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WeatheringCopper_WeatherState]>;
  valueOf(arg0: string): WeatheringCopper_WeatherState;
  values(): Array<WeatheringCopper_WeatherState>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperBulbBlock. */
export interface WeatheringCopperBulbBlockMembers {
  readonly __javaSupertypes?: readonly [CopperBulbBlock, WeatheringCopper];
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperBulbBlock = WeatheringCopperBulbBlockMembers & CopperBulbBlock & WeatheringCopper;
export interface WeatheringCopperBulbBlockStatics {
  new(arg0: WeatheringCopper_WeatherState, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WeatheringCopperBulbBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperBulbBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperDoorBlock. */
export interface WeatheringCopperDoorBlockMembers {
  readonly __javaSupertypes?: readonly [DoorBlock, WeatheringCopper];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperDoorBlock]>;
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperDoorBlock = WeatheringCopperDoorBlockMembers & DoorBlock & WeatheringCopper;
export interface WeatheringCopperDoorBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperDoorBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperFullBlock. */
export interface WeatheringCopperFullBlockMembers {
  readonly __javaSupertypes?: readonly [Block, WeatheringCopper];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperFullBlock]>;
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperFullBlock = WeatheringCopperFullBlockMembers & Block & WeatheringCopper;
export interface WeatheringCopperFullBlockStatics {
  new(arg0: WeatheringCopper_WeatherState, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WeatheringCopperFullBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperFullBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperGrateBlock. */
export interface WeatheringCopperGrateBlockMembers {
  readonly __javaSupertypes?: readonly [WaterloggedTransparentBlock, WeatheringCopper];
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperGrateBlock = WeatheringCopperGrateBlockMembers & WaterloggedTransparentBlock & WeatheringCopper;
export interface WeatheringCopperGrateBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperGrateBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperSlabBlock. */
export interface WeatheringCopperSlabBlockMembers {
  readonly __javaSupertypes?: readonly [SlabBlock, WeatheringCopper];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperSlabBlock]>;
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperSlabBlock = WeatheringCopperSlabBlockMembers & SlabBlock & WeatheringCopper;
export interface WeatheringCopperSlabBlockStatics {
  new(arg0: WeatheringCopper_WeatherState, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WeatheringCopperSlabBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperSlabBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperStairBlock. */
export interface WeatheringCopperStairBlockMembers {
  readonly __javaSupertypes?: readonly [StairBlock, WeatheringCopper];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperStairBlock]>;
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperStairBlock = WeatheringCopperStairBlockMembers & StairBlock & WeatheringCopper;
export interface WeatheringCopperStairBlockStatics {
  new(arg0: WeatheringCopper_WeatherState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WeatheringCopperStairBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperStairBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeatheringCopperTrapDoorBlock. */
export interface WeatheringCopperTrapDoorBlockMembers {
  readonly __javaSupertypes?: readonly [TrapDoorBlock, WeatheringCopper];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperTrapDoorBlock]>;
  getAge(): WeatheringCopper_WeatherState;
}
export type WeatheringCopperTrapDoorBlock = WeatheringCopperTrapDoorBlockMembers & TrapDoorBlock & WeatheringCopper;
export interface WeatheringCopperTrapDoorBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeatheringCopperTrapDoorBlock]>;
}

/** JVM class net.minecraft.world.level.block.WebBlock. */
export interface WebBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WebBlock]>;
}
export type WebBlock = WebBlockMembers & Block;
export interface WebBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WebBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WebBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeepingVinesBlock. */
export interface WeepingVinesBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantHeadBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeepingVinesBlock]>;
}
export type WeepingVinesBlock = WeepingVinesBlockMembers & GrowingPlantHeadBlock;
export interface WeepingVinesBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WeepingVinesBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeepingVinesBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeepingVinesPlantBlock. */
export interface WeepingVinesPlantBlockMembers {
  readonly __javaSupertypes?: readonly [GrowingPlantBodyBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeepingVinesPlantBlock]>;
}
export type WeepingVinesPlantBlock = WeepingVinesPlantBlockMembers & GrowingPlantBodyBlock;
export interface WeepingVinesPlantBlockStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WeepingVinesPlantBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeepingVinesPlantBlock]>;
}

/** JVM class net.minecraft.world.level.block.WeightedPressurePlateBlock. */
export interface WeightedPressurePlateBlockMembers {
  readonly __javaSupertypes?: readonly [BasePressurePlateBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WeightedPressurePlateBlock]>;
}
export type WeightedPressurePlateBlock = WeightedPressurePlateBlockMembers & BasePressurePlateBlock;
export interface WeightedPressurePlateBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WeightedPressurePlateBlock]>;
  readonly POWER: j_net_minecraft_world_level_block_state_properties.IntegerProperty;
}

/** JVM class net.minecraft.world.level.block.WetSpongeBlock. */
export interface WetSpongeBlockMembers {
  readonly __javaSupertypes?: readonly [Block];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WetSpongeBlock]>;
}
export type WetSpongeBlock = WetSpongeBlockMembers & Block;
export interface WetSpongeBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WetSpongeBlock]>;
}

/** JVM class net.minecraft.world.level.block.WitherRoseBlock. */
export interface WitherRoseBlockMembers {
  readonly __javaSupertypes?: readonly [FlowerBlock];
  animateTick(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): void;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WitherRoseBlock]>;
  getBeeInteractionEffect(): j_net_minecraft_world_effect.MobEffectInstance;
}
export type WitherRoseBlock = WitherRoseBlockMembers & FlowerBlock;
export interface WitherRoseBlockStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: number, arg2: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WitherRoseBlock;
  new(arg0: j_net_minecraft_world_item_component.SuspiciousStewEffects, arg1: j_net_minecraft_world_level_block_state.BlockBehaviour_Properties): WitherRoseBlock;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WitherRoseBlock]>;
}

/** JVM class net.minecraft.world.level.block.WitherSkullBlock. */
export interface WitherSkullBlockMembers {
  readonly __javaSupertypes?: readonly [SkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WitherSkullBlock]>;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type WitherSkullBlock = WitherSkullBlockMembers & SkullBlock;
export interface WitherSkullBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WitherSkullBlock]>;
  canSpawnMob(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack): boolean;
  checkSpawn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): void;
  checkSpawn(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_entity.SkullBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.WitherWallSkullBlock. */
export interface WitherWallSkullBlockMembers {
  readonly __javaSupertypes?: readonly [WallSkullBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WitherWallSkullBlock]>;
  setPlacedBy(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.LivingEntity | null, arg4: j_net_minecraft_world_item.ItemStack): void;
}
export type WitherWallSkullBlock = WitherWallSkullBlockMembers & WallSkullBlock;
export interface WitherWallSkullBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WitherWallSkullBlock]>;
}

/** JVM class net.minecraft.world.level.block.WoolCarpetBlock. */
export interface WoolCarpetBlockMembers {
  readonly __javaSupertypes?: readonly [CarpetBlock];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [WoolCarpetBlock]>;
  getColor(): j_net_minecraft_world_item.DyeColor;
}
export type WoolCarpetBlock = WoolCarpetBlockMembers & CarpetBlock;
export interface WoolCarpetBlockStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [WoolCarpetBlock]>;
}
