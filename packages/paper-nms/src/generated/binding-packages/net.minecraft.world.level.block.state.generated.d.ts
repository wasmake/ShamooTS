// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_context from './net.minecraft.world.item.context.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_redstone from './net.minecraft.world.level.redstone.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';
import type * as j_org_bukkit_craftbukkit_block_data from './org.bukkit.craftbukkit.block.data.generated.js';

/** JVM abstract net.minecraft.world.level.block.state.BlockBehaviour. */
export interface BlockBehaviourMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_flag.FeatureElement];
  asItem(): j_net_minecraft_world_item.Item;
  defaultDestroyTime(): number;
  defaultMapColor(): j_net_minecraft_world_level_material.MapColor;
  getDescriptionId(): string;
  getLootTable(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  getMenuProvider(arg0: BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  readonly hasCollision: boolean;
  properties(): BlockBehaviour_Properties;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
}
export type BlockBehaviour = BlockBehaviourMembers & j_net_minecraft_world_flag.FeatureElement;
export interface BlockBehaviourStatics {
  simpleCodec<B /* extends j_net_minecraft_world_level_block.Block */>(arg0: JavaFunction<BlockBehaviour_Properties, B>): JavaOpaque<"com.mojang.serialization.MapCodec", [B]>;
}

/** JVM abstract net.minecraft.world.level.block.state.BlockBehaviour$BlockStateBase. */
export interface BlockBehaviour_BlockStateBaseMembers {
  readonly __javaSupertypes?: readonly [StateHolder<j_net_minecraft_world_level_block.Block, BlockState>, JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.blockstate.StarlightAbstractBlockState">, JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.block.CollisionBlockState">];
  affectNeighborsAfterRemoval(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
  attack(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_player.Player): void;
  blocksMotion(): boolean;
  canBeReplaced(): boolean;
  canBeReplaced(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): boolean;
  canBeReplaced(arg0: j_net_minecraft_world_level_material.Fluid): boolean;
  canOcclude(): boolean;
  canSurvive(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  createCraftBlockData(): j_org_bukkit_craftbukkit_block_data.CraftBlockData;
  cycle<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): BlockState;
  readonly destroySpeed: number;
  emissiveRendering(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  entityCanStandOn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity): boolean;
  entityCanStandOnFace(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_core.Direction): boolean;
  entityInside(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.InsideBlockEffectApplier): void;
  equals(arg0: object): boolean;
  getAnalogOutputSignal(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  getBlock(): j_net_minecraft_world_level_block.Block;
  getBlockHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>;
  getBlockSupportShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getCloneItemStack(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): j_net_minecraft_world_item.ItemStack;
  getCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getDestroyProgress(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getDestroySpeed(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  getDirectSignal(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): number;
  getDrops(arg0: j_net_minecraft_world_level_storage_loot.LootParams_Builder): JavaList<j_net_minecraft_world_item.ItemStack>;
  getEntityInsideCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_phys_shapes.VoxelShape;
  getFaceOcclusionShape(arg0: j_net_minecraft_core.Direction): j_net_minecraft_world_phys_shapes.VoxelShape;
  getFluidState(): j_net_minecraft_world_level_material.FluidState;
  getInteractionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getLightBlock(): number;
  getLightEmission(): number;
  getMapColor(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.MapColor;
  getMenuProvider(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getOcclusionShape(): j_net_minecraft_world_phys_shapes.VoxelShape;
  getOffset(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3;
  getOptionalValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): JavaOptional<T>;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getProperties(): JavaCollection<j_net_minecraft_world_level_block_state_properties.Property<object>>;
  getRenderShape(): j_net_minecraft_world_level_block.RenderShape;
  getSeed(arg0: j_net_minecraft_core.BlockPos): bigint;
  getShadeBrightness(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  getShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getSignal(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): number;
  getSoundType(): j_net_minecraft_world_level_block.SoundType;
  getTags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  getValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): T;
  getValueOrElse<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: T): T;
  getValues(): JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>;
  getVisualShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  handleNeighborChanged(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_world_level_redstone.Orientation | null, arg4: boolean): void;
  hasAnalogOutputSignal(): boolean;
  hasBlockEntity(): boolean;
  hasLargeCollisionShape(): boolean;
  hasOffsetFunction(): boolean;
  hasPostProcess(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<object>): boolean;
  hashCode(): number;
  ignitedByLava(): boolean;
  initCache(): void;
  instrument(): j_net_minecraft_world_level_block_state_properties.NoteBlockInstrument;
  is(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg1: JavaPredicate<BlockBehaviour_BlockStateBase>): boolean;
  is(arg0: j_net_minecraft_world_level_block.Block): boolean;
  isAir(): boolean;
  isCollisionShapeFullBlock(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isDestroyable(): boolean;
  isFaceSturdy(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
  isFaceSturdy(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_world_level_block.SupportType): boolean;
  isPathfindable(arg0: j_net_minecraft_world_level_pathfinder.PathComputationType): boolean;
  isRandomlyTicking(): boolean;
  isRedstoneConductor(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isSignalSource(): boolean;
  isSolid(): boolean;
  isSolidRender(): boolean;
  isSuffocating(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isValidSpawn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.EntityType<object>): boolean;
  isViewBlocking(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  liquid(): boolean;
  mirror(arg0: j_net_minecraft_world_level_block.Mirror): BlockState;
  moonrise$emptyCollisionShape(): boolean;
  moonrise$emptyContextCollisionShape(): boolean;
  moonrise$getConstantContextCollisionShape(): j_net_minecraft_world_phys_shapes.VoxelShape;
  moonrise$getTableIndex(): bigint;
  moonrise$hasCache(): boolean;
  moonrise$occludesFullBlock(): boolean;
  moonrise$uniqueId1(): number;
  moonrise$uniqueId2(): number;
  onExplosionHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level.Explosion, arg3: JavaBiConsumer<j_net_minecraft_world_item.ItemStack, j_net_minecraft_core.BlockPos>): void;
  onPlace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: BlockState, arg3: boolean): void;
  onPlace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: BlockState, arg3: boolean, arg4: j_net_minecraft_world_item_context.UseOnContext | null): void;
  onProjectileHit(arg0: j_net_minecraft_world_level.Level, arg1: BlockState, arg2: j_net_minecraft_world_phys.BlockHitResult, arg3: j_net_minecraft_world_entity_projectile.Projectile): void;
  populateNeighbours(arg0: JavaMap<JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>, BlockState>): void;
  propagatesSkylightDown(): boolean;
  randomTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  requiresCorrectToolForDrops(): boolean;
  rotate(arg0: j_net_minecraft_world_level_block.Rotation): BlockState;
  setValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): BlockState;
  shouldSpawnTerrainParticles(): boolean;
  skipRendering(arg0: BlockState, arg1: j_net_minecraft_core.Direction): boolean;
  spawnAfterBreak(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack, arg3: boolean): void;
  starlight$isConditionallyFullOpaque(): boolean;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  toString(): string;
  triggerEvent(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): boolean;
  trySetValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): BlockState;
  updateIndirectNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  updateIndirectNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  updateNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  updateNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  updateShape(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_world_level.ScheduledTickAccess, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_core.BlockPos, arg5: BlockState, arg6: j_net_minecraft_util.RandomSource): BlockState;
  useItemOn(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity_player.Player, arg3: j_net_minecraft_world.InteractionHand, arg4: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
  useShapeForLightOcclusion(): boolean;
  useWithoutItem(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
}
export type BlockBehaviour_BlockStateBase = BlockBehaviour_BlockStateBaseMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.starlight.blockstate.StarlightAbstractBlockState"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.collisions.block.CollisionBlockState">;
export interface BlockBehaviour_BlockStateBaseStatics {
}

/** JVM interface net.minecraft.world.level.block.state.BlockBehaviour$OffsetFunction. */
export interface BlockBehaviour_OffsetFunctionMembers {
  evaluate(arg0: BlockState, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3;
}
export type BlockBehaviour_OffsetFunction = BlockBehaviour_OffsetFunctionMembers;
export interface BlockBehaviour_OffsetFunctionStatics {
}

/** Live JVM enum net.minecraft.world.level.block.state.BlockBehaviour$OffsetType; constants are host handles, not strings. */
export type BlockBehaviour_OffsetType = JavaEnum<"net.minecraft.world.level.block.state.BlockBehaviour$OffsetType", "NONE" | "XYZ" | "XZ"> & BlockBehaviour_OffsetTypeMembers;
export interface BlockBehaviour_OffsetTypeMembers {
}
export interface BlockBehaviour_OffsetTypeStatics {
  readonly NONE: BlockBehaviour_OffsetType;
  readonly XYZ: BlockBehaviour_OffsetType;
  readonly XZ: BlockBehaviour_OffsetType;
  valueOf(arg0: string): BlockBehaviour_OffsetType;
  values(): Array<BlockBehaviour_OffsetType>;
}

/** JVM class net.minecraft.world.level.block.state.BlockBehaviour$Properties. */
export interface BlockBehaviour_PropertiesMembers {
  air(): BlockBehaviour_Properties;
  destroyTime(arg0: number): BlockBehaviour_Properties;
  dynamicShape(): BlockBehaviour_Properties;
  emissiveRendering(arg0: BlockBehaviour_StatePredicate): BlockBehaviour_Properties;
  explosionResistance(arg0: number): BlockBehaviour_Properties;
  forceSolidOff(): BlockBehaviour_Properties;
  forceSolidOn(): BlockBehaviour_Properties;
  friction(arg0: number): BlockBehaviour_Properties;
  hasPostProcess(arg0: BlockBehaviour_StatePredicate): BlockBehaviour_Properties;
  ignitedByLava(): BlockBehaviour_Properties;
  instabreak(): BlockBehaviour_Properties;
  instrument(arg0: j_net_minecraft_world_level_block_state_properties.NoteBlockInstrument): BlockBehaviour_Properties;
  isRedstoneConductor(arg0: BlockBehaviour_StatePredicate): BlockBehaviour_Properties;
  isSuffocating(arg0: BlockBehaviour_StatePredicate): BlockBehaviour_Properties;
  isValidSpawn(arg0: BlockBehaviour_StateArgumentPredicate<j_net_minecraft_world_entity.EntityType<object>>): BlockBehaviour_Properties;
  isViewBlocking(arg0: BlockBehaviour_StatePredicate): BlockBehaviour_Properties;
  jumpFactor(arg0: number): BlockBehaviour_Properties;
  lightLevel(arg0: JavaOpaque<"java.util.function.ToIntFunction", [BlockState]>): BlockBehaviour_Properties;
  liquid(): BlockBehaviour_Properties;
  mapColor(arg0: JavaFunction<BlockState, j_net_minecraft_world_level_material.MapColor>): BlockBehaviour_Properties;
  mapColor(arg0: j_net_minecraft_world_item.DyeColor): BlockBehaviour_Properties;
  mapColor(arg0: j_net_minecraft_world_level_material.MapColor): BlockBehaviour_Properties;
  noCollission(): BlockBehaviour_Properties;
  noLootTable(): BlockBehaviour_Properties;
  noOcclusion(): BlockBehaviour_Properties;
  noTerrainParticles(): BlockBehaviour_Properties;
  offsetType(arg0: BlockBehaviour_OffsetType): BlockBehaviour_Properties;
  overrideDescription(arg0: string): BlockBehaviour_Properties;
  overrideLootTable(arg0: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>): BlockBehaviour_Properties;
  pushReaction(arg0: j_net_minecraft_world_level_material.PushReaction): BlockBehaviour_Properties;
  randomTicks(): BlockBehaviour_Properties;
  replaceable(): BlockBehaviour_Properties;
  requiredFeatures(...arg0: Array<j_net_minecraft_world_flag.FeatureFlag>): BlockBehaviour_Properties;
  requiresCorrectToolForDrops(): BlockBehaviour_Properties;
  setId(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_block.Block>): BlockBehaviour_Properties;
  sound(arg0: j_net_minecraft_world_level_block.SoundType): BlockBehaviour_Properties;
  speedFactor(arg0: number): BlockBehaviour_Properties;
  strength(arg0: number): BlockBehaviour_Properties;
  strength(arg0: number, arg1: number): BlockBehaviour_Properties;
}
export type BlockBehaviour_Properties = BlockBehaviour_PropertiesMembers;
export interface BlockBehaviour_PropertiesStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockBehaviour_Properties]>;
  of(): BlockBehaviour_Properties;
  ofFullCopy(arg0: BlockBehaviour): BlockBehaviour_Properties;
  ofLegacyCopy(arg0: BlockBehaviour): BlockBehaviour_Properties;
}

/** JVM interface net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate. */
export interface BlockBehaviour_StateArgumentPredicateMembers<A = unknown> {
  test(arg0: BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: A): boolean;
}
export type BlockBehaviour_StateArgumentPredicate<A = unknown> = BlockBehaviour_StateArgumentPredicateMembers<A>;
export interface BlockBehaviour_StateArgumentPredicateStatics {
}

/** JVM interface net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate. */
export interface BlockBehaviour_StatePredicateMembers {
  test(arg0: BlockState, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): boolean;
}
export type BlockBehaviour_StatePredicate = BlockBehaviour_StatePredicateMembers;
export interface BlockBehaviour_StatePredicateStatics {
}

/** JVM class net.minecraft.world.level.block.state.BlockState. */
export interface BlockStateMembers {
  readonly __javaSupertypes?: readonly [BlockBehaviour_BlockStateBase];
  affectNeighborsAfterRemoval(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): void;
  attack(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity_player.Player): void;
  blocksMotion(): boolean;
  canBeReplaced(): boolean;
  canBeReplaced(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): boolean;
  canBeReplaced(arg0: j_net_minecraft_world_level_material.Fluid): boolean;
  canOcclude(): boolean;
  canSurvive(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): boolean;
  createCraftBlockData(): j_org_bukkit_craftbukkit_block_data.CraftBlockData;
  cycle<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): BlockState;
  readonly destroySpeed: number;
  emissiveRendering(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  entityCanStandOn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity): boolean;
  entityCanStandOnFace(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_core.Direction): boolean;
  entityInside(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.InsideBlockEffectApplier): void;
  equals(arg0: object): boolean;
  getAnalogOutputSignal(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): number;
  getBlock(): j_net_minecraft_world_level_block.Block;
  getBlockHolder(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>;
  getBlockSupportShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getBukkitMaterial(): JavaOpaque<"org.bukkit.Material">;
  getCloneItemStack(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: boolean): j_net_minecraft_world_item.ItemStack;
  getCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getDestroyProgress(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos): number;
  getDestroySpeed(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  getDirectSignal(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): number;
  getDrops(arg0: j_net_minecraft_world_level_storage_loot.LootParams_Builder): JavaList<j_net_minecraft_world_item.ItemStack>;
  getEntityInsideCollisionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_phys_shapes.VoxelShape;
  getFaceOcclusionShape(arg0: j_net_minecraft_core.Direction): j_net_minecraft_world_phys_shapes.VoxelShape;
  getFluidState(): j_net_minecraft_world_level_material.FluidState;
  getInteractionShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getLightBlock(): number;
  getLightEmission(): number;
  getMapColor(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_material.MapColor;
  getMenuProvider(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world.MenuProvider | null;
  getOcclusionShape(): j_net_minecraft_world_phys_shapes.VoxelShape;
  getOffset(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3;
  getOptionalValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): JavaOptional<T>;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getProperties(): JavaCollection<j_net_minecraft_world_level_block_state_properties.Property<object>>;
  getRenderShape(): j_net_minecraft_world_level_block.RenderShape;
  getSeed(arg0: j_net_minecraft_core.BlockPos): bigint;
  getShadeBrightness(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  getShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys_shapes.VoxelShape;
  getShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  getSignal(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): number;
  getSoundType(): j_net_minecraft_world_level_block.SoundType;
  getTags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>]>;
  getTicker<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<T>): j_net_minecraft_world_level_block_entity.BlockEntityTicker<T> | null;
  getValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): T;
  getValueOrElse<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: T): T;
  getValues(): JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>;
  getVisualShape(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys_shapes.CollisionContext): j_net_minecraft_world_phys_shapes.VoxelShape;
  handleNeighborChanged(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_world_level_redstone.Orientation | null, arg4: boolean): void;
  hasAnalogOutputSignal(): boolean;
  hasBlockEntity(): boolean;
  hasLargeCollisionShape(): boolean;
  hasOffsetFunction(): boolean;
  hasPostProcess(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<object>): boolean;
  hashCode(): number;
  ignitedByLava(): boolean;
  initCache(): void;
  instrument(): j_net_minecraft_world_level_block_state_properties.NoteBlockInstrument;
  is(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg1: JavaPredicate<BlockBehaviour_BlockStateBase>): boolean;
  is(arg0: j_net_minecraft_world_level_block.Block): boolean;
  isAir(): boolean;
  isCollisionShapeFullBlock(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isDestroyable(): boolean;
  isFaceSturdy(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction): boolean;
  isFaceSturdy(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Direction, arg3: j_net_minecraft_world_level_block.SupportType): boolean;
  isPathfindable(arg0: j_net_minecraft_world_level_pathfinder.PathComputationType): boolean;
  isRandomlyTicking(): boolean;
  isRedstoneConductor(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isSignalSource(): boolean;
  isSolid(): boolean;
  isSolidRender(): boolean;
  isSuffocating(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  isValidSpawn(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_entity.EntityType<object>): boolean;
  isViewBlocking(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): boolean;
  liquid(): boolean;
  mirror(arg0: j_net_minecraft_world_level_block.Mirror): BlockState;
  moonrise$emptyCollisionShape(): boolean;
  moonrise$emptyContextCollisionShape(): boolean;
  moonrise$getConstantContextCollisionShape(): j_net_minecraft_world_phys_shapes.VoxelShape;
  moonrise$getTableIndex(): bigint;
  moonrise$hasCache(): boolean;
  moonrise$occludesFullBlock(): boolean;
  moonrise$uniqueId1(): number;
  moonrise$uniqueId2(): number;
  onExplosionHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level.Explosion, arg3: JavaBiConsumer<j_net_minecraft_world_item.ItemStack, j_net_minecraft_core.BlockPos>): void;
  onPlace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: BlockState, arg3: boolean): void;
  onPlace(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: BlockState, arg3: boolean, arg4: j_net_minecraft_world_item_context.UseOnContext | null): void;
  onProjectileHit(arg0: j_net_minecraft_world_level.Level, arg1: BlockState, arg2: j_net_minecraft_world_phys.BlockHitResult, arg3: j_net_minecraft_world_entity_projectile.Projectile): void;
  populateNeighbours(arg0: JavaMap<JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>, BlockState>): void;
  propagatesSkylightDown(): boolean;
  randomTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  requiresCorrectToolForDrops(): boolean;
  rotate(arg0: j_net_minecraft_world_level_block.Rotation): BlockState;
  setValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): BlockState;
  shouldSpawnTerrainParticles(): boolean;
  skipRendering(arg0: BlockState, arg1: j_net_minecraft_core.Direction): boolean;
  spawnAfterBreak(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.ItemStack, arg3: boolean): void;
  starlight$isConditionallyFullOpaque(): boolean;
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  toString(): string;
  triggerEvent(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): boolean;
  trySetValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): BlockState;
  updateIndirectNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  updateIndirectNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  updateNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  updateNeighbourShapes(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  updateShape(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_world_level.ScheduledTickAccess, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_core.BlockPos, arg5: BlockState, arg6: j_net_minecraft_util.RandomSource): BlockState;
  useItemOn(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity_player.Player, arg3: j_net_minecraft_world.InteractionHand, arg4: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
  useShapeForLightOcclusion(): boolean;
  useWithoutItem(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world_phys.BlockHitResult): j_net_minecraft_world.InteractionResult;
}
export type BlockState = BlockStateMembers;
export interface BlockStateStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: JavaOpaque<"it.unimi.dsi.fastutil.objects.Reference2ObjectArrayMap", [j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>]>, arg2: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockState]>): BlockState;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockState]>;
}

/** JVM class net.minecraft.world.level.block.state.StateDefinition. */
export interface StateDefinitionMembers<O = unknown, S /* extends StateHolder<O, S> */ = unknown> {
  any(): S;
  getOwner(): O;
  getPossibleStates(): JavaOpaque<"com.google.common.collect.ImmutableList", [S]>;
  getProperties(): JavaCollection<j_net_minecraft_world_level_block_state_properties.Property<object>>;
  getProperty(arg0: string): j_net_minecraft_world_level_block_state_properties.Property<object> | null;
  toString(): string;
}
export type StateDefinition<O = unknown, S /* extends StateHolder<O, S> */ = unknown> = StateDefinitionMembers<O, S>;
export interface StateDefinitionStatics {
}

/** JVM class net.minecraft.world.level.block.state.StateDefinition$Builder. */
export interface StateDefinition_BuilderMembers<O = unknown, S /* extends StateHolder<O, S> */ = unknown> {
  add(...arg0: Array<j_net_minecraft_world_level_block_state_properties.Property<object>>): StateDefinition_Builder<O, S>;
  create(arg0: JavaFunction<O, S>, arg1: StateDefinition_Factory<O, S>): StateDefinition<O, S>;
}
export type StateDefinition_Builder<O = unknown, S /* extends StateHolder<O, S> */ = unknown> = StateDefinition_BuilderMembers<O, S>;
export interface StateDefinition_BuilderStatics {
  new<O, S /* extends StateHolder<O, S> */>(arg0: O): StateDefinition_Builder<O, S>;
}

/** JVM interface net.minecraft.world.level.block.state.StateDefinition$Factory. */
export interface StateDefinition_FactoryMembers<O = unknown, S = unknown> {
  create(arg0: O, arg1: JavaOpaque<"it.unimi.dsi.fastutil.objects.Reference2ObjectArrayMap", [j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>]>, arg2: JavaOpaque<"com.mojang.serialization.MapCodec", [S]>): S;
}
export type StateDefinition_Factory<O = unknown, S = unknown> = StateDefinition_FactoryMembers<O, S>;
export interface StateDefinition_FactoryStatics {
}

/** JVM abstract net.minecraft.world.level.block.state.StateHolder. */
export interface StateHolderMembers<O = unknown, S = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccessStateHolder">];
  cycle<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): S;
  equals(arg0: object): boolean;
  getOptionalValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): JavaOptional<T>;
  getProperties(): JavaCollection<j_net_minecraft_world_level_block_state_properties.Property<object>>;
  getValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): T;
  getValueOrElse<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: T): T;
  getValues(): JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>;
  hasProperty(arg0: j_net_minecraft_world_level_block_state_properties.Property<object>): boolean;
  hashCode(): number;
  moonrise$getTableIndex(): bigint;
  populateNeighbours(arg0: JavaMap<JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>, S>): void;
  setValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): S;
  toString(): string;
  trySetValue<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): S;
}
export type StateHolder<O = unknown, S = unknown> = StateHolderMembers<O, S> & JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccessStateHolder">;
export interface StateHolderStatics {
  readonly NAME_TAG: "Name";
  readonly PROPERTIES_TAG: "Properties";
  readonly PROPERTY_ENTRY_TO_STRING_FUNCTION: JavaFunction<JavaMapEntry<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>, string>;
}
