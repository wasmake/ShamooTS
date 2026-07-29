// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature_stateproviders from './net.minecraft.world.level.levelgen.feature.stateproviders.generated.js';

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.AlterGroundDecorator. */
export interface AlterGroundDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type AlterGroundDecorator = AlterGroundDecoratorMembers & TreeDecorator;
export interface AlterGroundDecoratorStatics {
  new(arg0: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): AlterGroundDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AlterGroundDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.AttachedToLeavesDecorator. */
export interface AttachedToLeavesDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type AttachedToLeavesDecorator = AttachedToLeavesDecoratorMembers & TreeDecorator;
export interface AttachedToLeavesDecoratorStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg4: number, arg5: JavaList<j_net_minecraft_core.Direction>): AttachedToLeavesDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AttachedToLeavesDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.AttachedToLogsDecorator. */
export interface AttachedToLogsDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type AttachedToLogsDecorator = AttachedToLogsDecoratorMembers & TreeDecorator;
export interface AttachedToLogsDecoratorStatics {
  new(arg0: number, arg1: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider, arg2: JavaList<j_net_minecraft_core.Direction>): AttachedToLogsDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [AttachedToLogsDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.BeehiveDecorator. */
export interface BeehiveDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type BeehiveDecorator = BeehiveDecoratorMembers & TreeDecorator;
export interface BeehiveDecoratorStatics {
  new(arg0: number): BeehiveDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BeehiveDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.CocoaDecorator. */
export interface CocoaDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type CocoaDecorator = CocoaDecoratorMembers & TreeDecorator;
export interface CocoaDecoratorStatics {
  new(arg0: number): CocoaDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CocoaDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.CreakingHeartDecorator. */
export interface CreakingHeartDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type CreakingHeartDecorator = CreakingHeartDecoratorMembers & TreeDecorator;
export interface CreakingHeartDecoratorStatics {
  new(arg0: number): CreakingHeartDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [CreakingHeartDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.LeaveVineDecorator. */
export interface LeaveVineDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type LeaveVineDecorator = LeaveVineDecoratorMembers & TreeDecorator;
export interface LeaveVineDecoratorStatics {
  new(arg0: number): LeaveVineDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [LeaveVineDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.PaleMossDecorator. */
export interface PaleMossDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type PaleMossDecorator = PaleMossDecoratorMembers & TreeDecorator;
export interface PaleMossDecoratorStatics {
  new(arg0: number, arg1: number, arg2: number): PaleMossDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PaleMossDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.PlaceOnGroundDecorator. */
export interface PlaceOnGroundDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type PlaceOnGroundDecorator = PlaceOnGroundDecoratorMembers & TreeDecorator;
export interface PlaceOnGroundDecoratorStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_levelgen_feature_stateproviders.BlockStateProvider): PlaceOnGroundDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlaceOnGroundDecorator]>;
}

/** JVM abstract net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator. */
export interface TreeDecoratorMembers {
  place(arg0: TreeDecorator_Context): void;
}
export type TreeDecorator = TreeDecoratorMembers;
export interface TreeDecoratorStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TreeDecorator]>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator$Context. */
export interface TreeDecorator_ContextMembers {
  checkBlock(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>): boolean;
  isAir(arg0: j_net_minecraft_core.BlockPos): boolean;
  leaves(): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [j_net_minecraft_core.BlockPos]>;
  level(): j_net_minecraft_world_level.LevelSimulatedReader;
  logs(): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [j_net_minecraft_core.BlockPos]>;
  placeVine(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.BooleanProperty): void;
  random(): j_net_minecraft_util.RandomSource;
  roots(): JavaOpaque<"it.unimi.dsi.fastutil.objects.ObjectArrayList", [j_net_minecraft_core.BlockPos]>;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type TreeDecorator_Context = TreeDecorator_ContextMembers;
export interface TreeDecorator_ContextStatics {
  new(arg0: j_net_minecraft_world_level.LevelSimulatedReader, arg1: JavaBiConsumer<j_net_minecraft_core.BlockPos, j_net_minecraft_world_level_block_state.BlockState>, arg2: j_net_minecraft_util.RandomSource, arg3: JavaSet<j_net_minecraft_core.BlockPos>, arg4: JavaSet<j_net_minecraft_core.BlockPos>, arg5: JavaSet<j_net_minecraft_core.BlockPos>): TreeDecorator_Context;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecoratorType. */
export interface TreeDecoratorTypeMembers<P /* extends TreeDecorator */ = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [P]>;
}
export type TreeDecoratorType<P /* extends TreeDecorator */ = unknown> = TreeDecoratorTypeMembers<P>;
export interface TreeDecoratorTypeStatics {
  readonly ALTER_GROUND: TreeDecoratorType<AlterGroundDecorator>;
  readonly ATTACHED_TO_LEAVES: TreeDecoratorType<AttachedToLeavesDecorator>;
  readonly ATTACHED_TO_LOGS: TreeDecoratorType<AttachedToLogsDecorator>;
  readonly BEEHIVE: TreeDecoratorType<BeehiveDecorator>;
  readonly COCOA: TreeDecoratorType<CocoaDecorator>;
  readonly CREAKING_HEART: TreeDecoratorType<CreakingHeartDecorator>;
  readonly LEAVE_VINE: TreeDecoratorType<LeaveVineDecorator>;
  readonly PALE_MOSS: TreeDecoratorType<PaleMossDecorator>;
  readonly PLACE_ON_GROUND: TreeDecoratorType<PlaceOnGroundDecorator>;
  readonly TRUNK_VINE: TreeDecoratorType<TrunkVineDecorator>;
}

/** JVM class net.minecraft.world.level.levelgen.feature.treedecorators.TrunkVineDecorator. */
export interface TrunkVineDecoratorMembers {
  readonly __javaSupertypes?: readonly [TreeDecorator];
  place(arg0: TreeDecorator_Context): void;
}
export type TrunkVineDecorator = TrunkVineDecoratorMembers & TreeDecorator;
export interface TrunkVineDecoratorStatics {
  new(): TrunkVineDecorator;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TrunkVineDecorator]>;
  readonly INSTANCE: TrunkVineDecorator;
}
