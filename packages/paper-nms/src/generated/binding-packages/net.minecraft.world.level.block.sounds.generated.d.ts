// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';

/** JVM class net.minecraft.world.level.block.sounds.AmbientDesertBlockSoundsPlayer. */
export interface AmbientDesertBlockSoundsPlayerMembers {
}
export type AmbientDesertBlockSoundsPlayer = AmbientDesertBlockSoundsPlayerMembers;
export interface AmbientDesertBlockSoundsPlayerStatics {
  new(): AmbientDesertBlockSoundsPlayer;
  playAmbientDeadBushSounds(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  playAmbientDryGrassSounds(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  playAmbientSandSounds(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_util.RandomSource): void;
  shouldPlayDesertDryVegetationBlockSounds(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): boolean;
}
