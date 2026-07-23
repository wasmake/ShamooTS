// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';

/** JVM class net.minecraft.world.level.block.grower.TreeGrower. */
export interface TreeGrowerMembers {
  growTree(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level_chunk.ChunkGenerator, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_util.RandomSource): boolean;
}
export type TreeGrower = TreeGrowerMembers;
export interface TreeGrowerStatics {
  new(arg0: string, arg1: number, arg2: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg3: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg4: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg5: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg6: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg7: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>): TreeGrower;
  new(arg0: string, arg1: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg2: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>, arg3: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>>): TreeGrower;
  readonly ACACIA: TreeGrower;
  readonly AZALEA: TreeGrower;
  readonly BIRCH: TreeGrower;
  readonly CHERRY: TreeGrower;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TreeGrower]>;
  readonly DARK_OAK: TreeGrower;
  readonly JUNGLE: TreeGrower;
  readonly MANGROVE: TreeGrower;
  readonly OAK: TreeGrower;
  readonly PALE_OAK: TreeGrower;
  readonly SPRUCE: TreeGrower;
}
