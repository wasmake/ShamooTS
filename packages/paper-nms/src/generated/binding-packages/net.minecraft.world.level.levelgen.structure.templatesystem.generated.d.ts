// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_packs_resources from './net.minecraft.server.packs.resources.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_valueproviders from './net.minecraft.util.valueproviders.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_templatesystem_rule_blockentity from './net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';
import type * as j_org_bukkit_craftbukkit_persistence from './org.bukkit.craftbukkit.persistence.generated.js';

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.AlwaysTrueTest. */
export interface AlwaysTrueTestMembers {
  readonly __javaSupertypes?: readonly [RuleTest];
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type AlwaysTrueTest = AlwaysTrueTestMembers & RuleTest;
export interface AlwaysTrueTestStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AlwaysTrueTest]>;
  readonly INSTANCE: AlwaysTrueTest;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.AxisAlignedLinearPosTest. */
export interface AxisAlignedLinearPosTestMembers {
  readonly __javaSupertypes?: readonly [PosRuleTest];
  test(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): boolean;
}
export type AxisAlignedLinearPosTest = AxisAlignedLinearPosTestMembers & PosRuleTest;
export interface AxisAlignedLinearPosTestStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_core.Direction_Axis): AxisAlignedLinearPosTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AxisAlignedLinearPosTest]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.BlackstoneReplaceProcessor. */
export interface BlackstoneReplaceProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo;
}
export type BlackstoneReplaceProcessor = BlackstoneReplaceProcessorMembers & StructureProcessor;
export interface BlackstoneReplaceProcessorStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlackstoneReplaceProcessor]>;
  readonly INSTANCE: BlackstoneReplaceProcessor;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.BlockAgeProcessor. */
export interface BlockAgeProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type BlockAgeProcessor = BlockAgeProcessorMembers & StructureProcessor;
export interface BlockAgeProcessorStatics {
  new(arg0: number): BlockAgeProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockAgeProcessor]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.BlockIgnoreProcessor. */
export interface BlockIgnoreProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type BlockIgnoreProcessor = BlockIgnoreProcessorMembers & StructureProcessor;
export interface BlockIgnoreProcessorStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_block.Block>): BlockIgnoreProcessor;
  readonly AIR: BlockIgnoreProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockIgnoreProcessor]>;
  readonly STRUCTURE_AND_AIR: BlockIgnoreProcessor;
  readonly STRUCTURE_BLOCK: BlockIgnoreProcessor;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.BlockMatchTest. */
export interface BlockMatchTestMembers {
  readonly __javaSupertypes?: readonly [RuleTest];
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type BlockMatchTest = BlockMatchTestMembers & RuleTest;
export interface BlockMatchTestStatics {
  new(arg0: j_net_minecraft_world_level_block.Block): BlockMatchTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockMatchTest]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.BlockRotProcessor. */
export interface BlockRotProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type BlockRotProcessor = BlockRotProcessorMembers & StructureProcessor;
export interface BlockRotProcessorStatics {
  new(arg0: number): BlockRotProcessor;
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg1: number): BlockRotProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockRotProcessor]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.BlockStateMatchTest. */
export interface BlockStateMatchTestMembers {
  readonly __javaSupertypes?: readonly [RuleTest];
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type BlockStateMatchTest = BlockStateMatchTestMembers & RuleTest;
export interface BlockStateMatchTestStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): BlockStateMatchTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockStateMatchTest]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.CappedProcessor. */
export interface CappedProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  finalizeProcessing(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: JavaList<StructureTemplate_StructureBlockInfo>, arg4: JavaList<StructureTemplate_StructureBlockInfo>, arg5: StructurePlaceSettings): JavaList<StructureTemplate_StructureBlockInfo>;
}
export type CappedProcessor = CappedProcessorMembers & StructureProcessor;
export interface CappedProcessorStatics {
  new(arg0: StructureProcessor, arg1: j_net_minecraft_util_valueproviders.IntProvider): CappedProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CappedProcessor]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.GravityProcessor. */
export interface GravityProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type GravityProcessor = GravityProcessorMembers & StructureProcessor;
export interface GravityProcessorStatics {
  new(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number): GravityProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [GravityProcessor]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.JigsawReplacementProcessor. */
export interface JigsawReplacementProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type JigsawReplacementProcessor = JigsawReplacementProcessorMembers & StructureProcessor;
export interface JigsawReplacementProcessorStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [JigsawReplacementProcessor]>;
  readonly INSTANCE: JigsawReplacementProcessor;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.LavaSubmergedBlockProcessor. */
export interface LavaSubmergedBlockProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type LavaSubmergedBlockProcessor = LavaSubmergedBlockProcessorMembers & StructureProcessor;
export interface LavaSubmergedBlockProcessorStatics {
  new(): LavaSubmergedBlockProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LavaSubmergedBlockProcessor]>;
  readonly INSTANCE: LavaSubmergedBlockProcessor;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.LinearPosTest. */
export interface LinearPosTestMembers {
  readonly __javaSupertypes?: readonly [PosRuleTest];
  test(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): boolean;
}
export type LinearPosTest = LinearPosTestMembers & PosRuleTest;
export interface LinearPosTestStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number): LinearPosTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LinearPosTest]>;
}

/** Live JVM enum net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings; constants are host handles, not strings. */
export type LiquidSettings = JavaEnum<"net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings", "APPLY_WATERLOGGING" | "IGNORE_WATERLOGGING"> & LiquidSettingsMembers;
export interface LiquidSettingsMembers {
  getSerializedName(): string;
}
export interface LiquidSettingsStatics {
  readonly APPLY_WATERLOGGING: LiquidSettings;
  readonly IGNORE_WATERLOGGING: LiquidSettings;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LiquidSettings]>;
  valueOf(arg0: string): LiquidSettings;
  values(): Array<LiquidSettings>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.NopProcessor. */
export interface NopProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
}
export type NopProcessor = NopProcessorMembers & StructureProcessor;
export interface NopProcessorStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [NopProcessor]>;
  readonly INSTANCE: NopProcessor;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.PosAlwaysTrueTest. */
export interface PosAlwaysTrueTestMembers {
  readonly __javaSupertypes?: readonly [PosRuleTest];
  test(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): boolean;
}
export type PosAlwaysTrueTest = PosAlwaysTrueTestMembers & PosRuleTest;
export interface PosAlwaysTrueTestStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PosAlwaysTrueTest]>;
  readonly INSTANCE: PosAlwaysTrueTest;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest. */
export interface PosRuleTestMembers {
  test(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_util.RandomSource): boolean;
}
export type PosRuleTest = PosRuleTestMembers;
export interface PosRuleTestStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PosRuleTest]>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTestType. */
export interface PosRuleTestTypeMembers<P /* extends PosRuleTest */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type PosRuleTestType<P /* extends PosRuleTest */ = unknown> = PosRuleTestTypeMembers<P>;
export interface PosRuleTestTypeStatics {
  readonly ALWAYS_TRUE_TEST: PosRuleTestType<PosAlwaysTrueTest>;
  readonly AXIS_ALIGNED_LINEAR_POS_TEST: PosRuleTestType<AxisAlignedLinearPosTest>;
  readonly LINEAR_POS_TEST: PosRuleTestType<LinearPosTest>;
  register<P /* extends PosRuleTest */>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [P]>): PosRuleTestType<P>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.ProcessorRule. */
export interface ProcessorRuleMembers {
  getOutputState(): j_net_minecraft_world_level_block_state.BlockState;
  getOutputTag(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_nbt.CompoundTag | null): j_net_minecraft_nbt.CompoundTag | null;
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_core.BlockPos, arg5: j_net_minecraft_util.RandomSource): boolean;
}
export type ProcessorRule = ProcessorRuleMembers;
export interface ProcessorRuleStatics {
  new(arg0: RuleTest, arg1: RuleTest, arg2: j_net_minecraft_world_level_block_state.BlockState): ProcessorRule;
  new(arg0: RuleTest, arg1: RuleTest, arg2: PosRuleTest, arg3: j_net_minecraft_world_level_block_state.BlockState): ProcessorRule;
  new(arg0: RuleTest, arg1: RuleTest, arg2: PosRuleTest, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_levelgen_structure_templatesystem_rule_blockentity.RuleBlockEntityModifier): ProcessorRule;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ProcessorRule]>;
  readonly DEFAULT_BLOCK_ENTITY_MODIFIER: j_net_minecraft_world_level_levelgen_structure_templatesystem_rule_blockentity.Passthrough;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.ProtectedBlockProcessor. */
export interface ProtectedBlockProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  readonly cannotReplace: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type ProtectedBlockProcessor = ProtectedBlockProcessorMembers & StructureProcessor;
export interface ProtectedBlockProcessorStatics {
  new(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): ProtectedBlockProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ProtectedBlockProcessor]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.RandomBlockMatchTest. */
export interface RandomBlockMatchTestMembers {
  readonly __javaSupertypes?: readonly [RuleTest];
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type RandomBlockMatchTest = RandomBlockMatchTestMembers & RuleTest;
export interface RandomBlockMatchTestStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: number): RandomBlockMatchTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RandomBlockMatchTest]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.RandomBlockStateMatchTest. */
export interface RandomBlockStateMatchTestMembers {
  readonly __javaSupertypes?: readonly [RuleTest];
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type RandomBlockStateMatchTest = RandomBlockStateMatchTestMembers & RuleTest;
export interface RandomBlockStateMatchTestStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: number): RandomBlockStateMatchTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RandomBlockStateMatchTest]>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.RuleProcessor. */
export interface RuleProcessorMembers {
  readonly __javaSupertypes?: readonly [StructureProcessor];
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type RuleProcessor = RuleProcessorMembers & StructureProcessor;
export interface RuleProcessorStatics {
  new(arg0: JavaList<ProcessorRule>): RuleProcessor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [RuleProcessor]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest. */
export interface RuleTestMembers {
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type RuleTest = RuleTestMembers;
export interface RuleTestStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RuleTest]>;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.templatesystem.RuleTestType. */
export interface RuleTestTypeMembers<P /* extends RuleTest */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type RuleTestType<P /* extends RuleTest */ = unknown> = RuleTestTypeMembers<P>;
export interface RuleTestTypeStatics {
  readonly ALWAYS_TRUE_TEST: RuleTestType<AlwaysTrueTest>;
  readonly BLOCKSTATE_TEST: RuleTestType<BlockStateMatchTest>;
  readonly BLOCK_TEST: RuleTestType<BlockMatchTest>;
  readonly RANDOM_BLOCKSTATE_TEST: RuleTestType<RandomBlockStateMatchTest>;
  readonly RANDOM_BLOCK_TEST: RuleTestType<RandomBlockMatchTest>;
  readonly TAG_TEST: RuleTestType<TagMatchTest>;
  register<P /* extends RuleTest */>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [P]>): RuleTestType<P>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings. */
export interface StructurePlaceSettingsMembers {
  addProcessor(arg0: StructureProcessor): StructurePlaceSettings;
  clearProcessors(): StructurePlaceSettings;
  copy(): StructurePlaceSettings;
  getBoundingBox(): j_net_minecraft_world_level_levelgen_structure.BoundingBox | null;
  getKnownShape(): boolean;
  getMirror(): j_net_minecraft_world_level_block.Mirror;
  getProcessors(): JavaList<StructureProcessor>;
  getRandom(arg0: j_net_minecraft_core.BlockPos | null): j_net_minecraft_util.RandomSource;
  getRandomPalette(arg0: JavaList<StructureTemplate_Palette>, arg1: j_net_minecraft_core.BlockPos | null): StructureTemplate_Palette;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  getRotationPivot(): j_net_minecraft_core.BlockPos;
  isIgnoreEntities(): boolean;
  palette: number;
  popProcessor(arg0: StructureProcessor): StructurePlaceSettings;
  setBoundingBox(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox): StructurePlaceSettings;
  setFinalizeEntities(arg0: boolean): StructurePlaceSettings;
  setIgnoreEntities(arg0: boolean): StructurePlaceSettings;
  setKnownShape(arg0: boolean): StructurePlaceSettings;
  setLiquidSettings(arg0: LiquidSettings): StructurePlaceSettings;
  setMirror(arg0: j_net_minecraft_world_level_block.Mirror): StructurePlaceSettings;
  setRandom(arg0: j_net_minecraft_util.RandomSource | null): StructurePlaceSettings;
  setRotation(arg0: j_net_minecraft_world_level_block.Rotation): StructurePlaceSettings;
  setRotationPivot(arg0: j_net_minecraft_core.BlockPos): StructurePlaceSettings;
  shouldApplyWaterlogging(): boolean;
  shouldFinalizeEntities(): boolean;
}
export type StructurePlaceSettings = StructurePlaceSettingsMembers;
export interface StructurePlaceSettingsStatics {
  new(): StructurePlaceSettings;
}

/** JVM abstract net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor. */
export interface StructureProcessorMembers {
  finalizeProcessing(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: JavaList<StructureTemplate_StructureBlockInfo>, arg4: JavaList<StructureTemplate_StructureBlockInfo>, arg5: StructurePlaceSettings): JavaList<StructureTemplate_StructureBlockInfo>;
  processBlock(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructureTemplate_StructureBlockInfo, arg4: StructureTemplate_StructureBlockInfo, arg5: StructurePlaceSettings): StructureTemplate_StructureBlockInfo | null;
}
export type StructureProcessor = StructureProcessorMembers;
export interface StructureProcessorStatics {
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList. */
export interface StructureProcessorListMembers {
  list(): JavaList<StructureProcessor>;
  toString(): string;
}
export type StructureProcessorList = StructureProcessorListMembers;
export interface StructureProcessorListStatics {
  new(arg0: JavaList<StructureProcessor>): StructureProcessorList;
}

/** JVM interface net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType. */
export interface StructureProcessorTypeMembers<P /* extends StructureProcessor */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type StructureProcessorType<P /* extends StructureProcessor */ = unknown> = StructureProcessorTypeMembers<P>;
export interface StructureProcessorTypeStatics {
  readonly BLACKSTONE_REPLACE: StructureProcessorType<BlackstoneReplaceProcessor>;
  readonly BLOCK_AGE: StructureProcessorType<BlockAgeProcessor>;
  readonly BLOCK_IGNORE: StructureProcessorType<BlockIgnoreProcessor>;
  readonly BLOCK_ROT: StructureProcessorType<BlockRotProcessor>;
  readonly CAPPED: StructureProcessorType<CappedProcessor>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureProcessorList]>;
  readonly GRAVITY: StructureProcessorType<GravityProcessor>;
  readonly JIGSAW_REPLACEMENT: StructureProcessorType<JigsawReplacementProcessor>;
  readonly LAVA_SUBMERGED_BLOCK: StructureProcessorType<LavaSubmergedBlockProcessor>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<StructureProcessorList>]>;
  readonly LIST_OBJECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureProcessorList]>;
  readonly NOP: StructureProcessorType<NopProcessor>;
  readonly PROTECTED_BLOCKS: StructureProcessorType<ProtectedBlockProcessor>;
  readonly RULE: StructureProcessorType<RuleProcessor>;
  readonly SINGLE_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureProcessor]>;
  register<P /* extends StructureProcessor */>(arg0: string, arg1: JavaOpaque<"com.mojang.serialization.MapCodec", [P]>): StructureProcessorType<P>;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate. */
export interface StructureTemplateMembers {
  calculateConnectedPosition(arg0: StructurePlaceSettings, arg1: j_net_minecraft_core.BlockPos, arg2: StructurePlaceSettings, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  readonly entityInfoList: JavaList<StructureTemplate_StructureEntityInfo>;
  fillFromWorld(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Vec3i, arg3: boolean, arg4: JavaList<j_net_minecraft_world_level_block.Block>): void;
  filterBlocks(arg0: j_net_minecraft_core.BlockPos, arg1: StructurePlaceSettings, arg2: j_net_minecraft_world_level_block.Block): JavaList<StructureTemplate_StructureBlockInfo>;
  filterBlocks(arg0: j_net_minecraft_core.BlockPos, arg1: StructurePlaceSettings, arg2: j_net_minecraft_world_level_block.Block, arg3: boolean): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [StructureTemplate_StructureBlockInfo]>;
  getAuthor(): string;
  getBoundingBox(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Rotation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block.Mirror): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getBoundingBox(arg0: StructurePlaceSettings, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getJigsaws(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Rotation): JavaList<StructureTemplate_JigsawBlockInfo>;
  getSize(): j_net_minecraft_core.Vec3i;
  getSize(arg0: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.Vec3i;
  getZeroPositionWithTransform(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Mirror, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.BlockPos;
  load(arg0: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_nbt.CompoundTag): void;
  readonly palettes: JavaList<StructureTemplate_Palette>;
  persistentDataContainer: j_org_bukkit_craftbukkit_persistence.CraftPersistentDataContainer;
  placeInWorld(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructurePlaceSettings, arg4: j_net_minecraft_util.RandomSource, arg5: number): boolean;
  save(arg0: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_nbt.CompoundTag;
  setAuthor(arg0: string): void;
}
export type StructureTemplate = StructureTemplateMembers;
export interface StructureTemplateStatics {
  new(): StructureTemplate;
  readonly BLOCKS_TAG: "blocks";
  readonly BLOCK_TAG_NBT: "nbt";
  readonly BLOCK_TAG_POS: "pos";
  readonly BLOCK_TAG_STATE: "state";
  readonly ENTITIES_TAG: "entities";
  readonly ENTITY_TAG_BLOCKPOS: "blockPos";
  readonly ENTITY_TAG_NBT: "nbt";
  readonly ENTITY_TAG_POS: "pos";
  readonly PALETTE_LIST_TAG: "palettes";
  readonly PALETTE_TAG: "palette";
  readonly SIZE_TAG: "size";
  calculateRelativePosition(arg0: StructurePlaceSettings, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getDefaultJointType(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.JigsawBlockEntity_JointType;
  getJointType(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_entity.JigsawBlockEntity_JointType;
  getZeroPositionWithTransform(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Mirror, arg2: j_net_minecraft_world_level_block.Rotation, arg3: number, arg4: number): j_net_minecraft_core.BlockPos;
  processBlockInfos(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: StructurePlaceSettings, arg4: JavaList<StructureTemplate_StructureBlockInfo>): JavaList<StructureTemplate_StructureBlockInfo>;
  transform(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Mirror, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  transform(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_level_block.Mirror, arg2: j_net_minecraft_world_level_block.Rotation, arg3: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3;
  updateShapeAtEdge(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: number, arg2: j_net_minecraft_world_phys_shapes.DiscreteVoxelShape, arg3: number, arg4: number, arg5: number): void;
  updateShapeAtEdge(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: number, arg2: j_net_minecraft_world_phys_shapes.DiscreteVoxelShape, arg3: j_net_minecraft_core.BlockPos): void;
}

/** JVM record net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$JigsawBlockInfo. */
export interface StructureTemplate_JigsawBlockInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  info(): StructureTemplate_StructureBlockInfo;
  jointType(): j_net_minecraft_world_level_block_entity.JigsawBlockEntity_JointType;
  name(): j_net_minecraft_resources.ResourceLocation;
  placementPriority(): number;
  pool(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  selectionPriority(): number;
  target(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  withInfo(arg0: StructureTemplate_StructureBlockInfo): StructureTemplate_JigsawBlockInfo;
}
export type StructureTemplate_JigsawBlockInfo = StructureTemplate_JigsawBlockInfoMembers & JavaOpaque<"java.lang.Record">;
export interface StructureTemplate_JigsawBlockInfoStatics {
  new(arg0: StructureTemplate_StructureBlockInfo, arg1: j_net_minecraft_world_level_block_entity.JigsawBlockEntity_JointType, arg2: j_net_minecraft_resources.ResourceLocation, arg3: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>, arg4: j_net_minecraft_resources.ResourceLocation, arg5: number, arg6: number): StructureTemplate_JigsawBlockInfo;
  of(arg0: StructureTemplate_StructureBlockInfo): StructureTemplate_JigsawBlockInfo;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette. */
export interface StructureTemplate_PaletteMembers {
  blocks(): JavaList<StructureTemplate_StructureBlockInfo>;
  blocks(arg0: j_net_minecraft_world_level_block.Block): JavaList<StructureTemplate_StructureBlockInfo>;
  jigsaws(): JavaList<StructureTemplate_JigsawBlockInfo>;
}
export type StructureTemplate_Palette = StructureTemplate_PaletteMembers;
export interface StructureTemplate_PaletteStatics {
}

/** JVM record net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo. */
export interface StructureTemplate_StructureBlockInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  nbt(): j_net_minecraft_nbt.CompoundTag | null;
  pos(): j_net_minecraft_core.BlockPos;
  state(): j_net_minecraft_world_level_block_state.BlockState;
  toString(): string;
}
export type StructureTemplate_StructureBlockInfo = StructureTemplate_StructureBlockInfoMembers & JavaOpaque<"java.lang.Record">;
export interface StructureTemplate_StructureBlockInfoStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_nbt.CompoundTag | null): StructureTemplate_StructureBlockInfo;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo. */
export interface StructureTemplate_StructureEntityInfoMembers {
  readonly blockPos: j_net_minecraft_core.BlockPos;
  readonly nbt: j_net_minecraft_nbt.CompoundTag;
  readonly pos: j_net_minecraft_world_phys.Vec3;
}
export type StructureTemplate_StructureEntityInfo = StructureTemplate_StructureEntityInfoMembers;
export interface StructureTemplate_StructureEntityInfoStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_nbt.CompoundTag): StructureTemplate_StructureEntityInfo;
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager. */
export interface StructureTemplateManagerMembers {
  createAndValidatePathToGeneratedStructure(arg0: j_net_minecraft_resources.ResourceLocation, arg1: string): JavaOpaque<"java.nio.file.Path">;
  get(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<StructureTemplate>;
  getOrCreate(arg0: j_net_minecraft_resources.ResourceLocation): StructureTemplate;
  listTemplates(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_resources.ResourceLocation]>;
  loadFromGenerated(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<StructureTemplate>;
  loadFromResource(arg0: j_net_minecraft_resources.ResourceLocation): JavaOptional<StructureTemplate>;
  onResourceManagerReload(arg0: j_net_minecraft_server_packs_resources.ResourceManager): void;
  /** @throws java.io.IOException */
  readStructure(arg0: JavaOpaque<"java.io.InputStream">): StructureTemplate;
  readStructure(arg0: j_net_minecraft_nbt.CompoundTag): StructureTemplate;
  remove(arg0: j_net_minecraft_resources.ResourceLocation): void;
  save(arg0: j_net_minecraft_resources.ResourceLocation): boolean;
  readonly structureRepository: JavaMap<j_net_minecraft_resources.ResourceLocation, JavaOptional<StructureTemplate>>;
}
export type StructureTemplateManager = StructureTemplateManagerMembers;
export interface StructureTemplateManagerStatics {
  new(arg0: j_net_minecraft_server_packs_resources.ResourceManager, arg1: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg2: JavaOpaque<"com.mojang.datafixers.DataFixer">, arg3: j_net_minecraft_core.HolderGetter<j_net_minecraft_world_level_block.Block>): StructureTemplateManager;
  readonly STRUCTURE_RESOURCE_DIRECTORY_NAME: "structure";
}

/** JVM class net.minecraft.world.level.levelgen.structure.templatesystem.TagMatchTest. */
export interface TagMatchTestMembers {
  readonly __javaSupertypes?: readonly [RuleTest];
  test(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_util.RandomSource): boolean;
}
export type TagMatchTest = TagMatchTestMembers & RuleTest;
export interface TagMatchTestStatics {
  new(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>): TagMatchTest;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TagMatchTest]>;
}
