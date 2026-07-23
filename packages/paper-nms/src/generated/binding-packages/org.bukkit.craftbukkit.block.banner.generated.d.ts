// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';

/** JVM class org.bukkit.craftbukkit.block.banner.CraftPatternType. */
export interface CraftPatternTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.block.banner.PatternType">, j_net_minecraft_world_level_block_entity.BannerPattern]>, JavaOpaque<"org.bukkit.block.banner.PatternType">];
  getIdentifier(): string;
}
export type CraftPatternType = CraftPatternTypeMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.block.banner.PatternType">, j_net_minecraft_world_level_block_entity.BannerPattern]> & JavaOpaque<"org.bukkit.block.banner.PatternType">;
export interface CraftPatternTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block_entity.BannerPattern>): CraftPatternType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.block.banner.PatternType">): j_net_minecraft_world_level_block_entity.BannerPattern;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.block.banner.PatternType">): j_net_minecraft_core.Holder<j_net_minecraft_world_level_block_entity.BannerPattern>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block_entity.BannerPattern>): JavaOpaque<"org.bukkit.block.banner.PatternType">;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_block_entity.BannerPattern): JavaOpaque<"org.bukkit.block.banner.PatternType">;
}
