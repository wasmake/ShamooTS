// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';

/** JVM class org.bukkit.craftbukkit.block.data.CraftBlockData. */
export interface CraftBlockDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.block.data.BlockData">];
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): JavaOpaque<"org.bukkit.block.data.BlockData">;
  copyTo(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): void;
  createBlockState(): JavaOpaque<"org.bukkit.block.BlockState">;
  equals(arg0: object): boolean;
  get<B /* extends JavaOpaque<"java.lang.Enum", [B]> */>(arg0: j_net_minecraft_world_level_block_state_properties.EnumProperty<object>, arg1: JavaClass<B>): B;
  get<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): T;
  getAsString(): string;
  getAsString(arg0: boolean): string;
  getCollisionShape(arg0: JavaOpaque<"org.bukkit.Location">): JavaOpaque<"org.bukkit.util.VoxelShape">;
  getDestroySpeed(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: boolean): number;
  getLightEmission(): number;
  getMapColor(): JavaOpaque<"org.bukkit.Color">;
  getMaterial(): JavaOpaque<"org.bukkit.Material">;
  getPistonMoveReaction(): JavaOpaque<"org.bukkit.block.PistonMoveReaction">;
  getPlacementMaterial(): JavaOpaque<"org.bukkit.Material">;
  getSoundGroup(): JavaOpaque<"org.bukkit.SoundGroup">;
  getState(): j_net_minecraft_world_level_block_state.BlockState;
  getValues<B /* extends JavaOpaque<"java.lang.Enum", [B]> */>(arg0: j_net_minecraft_world_level_block_state_properties.EnumProperty<object>, arg1: JavaClass<B>): JavaSet<B>;
  hashCode(): number;
  isFaceSturdy(arg0: JavaOpaque<"org.bukkit.block.BlockFace">, arg1: JavaOpaque<"org.bukkit.block.BlockSupport">): boolean;
  isOccluding(): boolean;
  isPreferredTool(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): boolean;
  isRandomlyTicked(): boolean;
  isSupported(arg0: JavaOpaque<"org.bukkit.Location">): boolean;
  isSupported(arg0: JavaOpaque<"org.bukkit.block.Block">): boolean;
  matches(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): boolean;
  merge(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  mirror(arg0: JavaOpaque<"org.bukkit.block.structure.Mirror">): void;
  requiresCorrectToolForDrops(): boolean;
  rotate(arg0: JavaOpaque<"org.bukkit.block.structure.StructureRotation">): void;
  set<B /* extends JavaOpaque<"java.lang.Enum", [B]> */, N /* extends j_net_minecraft_util.StringRepresentable */>(arg0: j_net_minecraft_world_level_block_state_properties.EnumProperty<N>, arg1: JavaOpaque<"java.lang.Enum", [B]>): void;
  set<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */, V /* extends T */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: V): void;
  toStates(arg0: boolean): JavaMap<string, string>;
  toString(): string;
  toString(arg0: JavaMap<j_net_minecraft_world_level_block_state_properties.Property<object>, JavaOpaque<"java.lang.Comparable", [object]>>): string;
}
export type CraftBlockData = CraftBlockDataMembers & JavaOpaque<"org.bukkit.block.data.BlockData">;
export interface CraftBlockDataStatics {
  new(): CraftBlockData;
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBlockData;
  readonly ROTATION_CYCLE: Array<JavaOpaque<"org.bukkit.block.BlockFace">>;
  createData(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBlockData;
  fromData(arg0: j_net_minecraft_world_level_block_state.BlockState): CraftBlockData;
  getBoolean(arg0: JavaClass<j_net_minecraft_world_level_block.Block>, arg1: string): j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getBoolean(arg0: JavaClass<j_net_minecraft_world_level_block.Block>, arg1: string, arg2: boolean): j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getBoolean(arg0: string): j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getBoolean(arg0: string, arg1: boolean): j_net_minecraft_world_level_block_state_properties.BooleanProperty;
  getEnum(arg0: JavaClass<j_net_minecraft_world_level_block.Block>, arg1: string): j_net_minecraft_world_level_block_state_properties.EnumProperty<object>;
  getEnum(arg0: string): j_net_minecraft_world_level_block_state_properties.EnumProperty<object>;
  getInteger(arg0: JavaClass<j_net_minecraft_world_level_block.Block>, arg1: string): j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  getInteger(arg0: string): j_net_minecraft_world_level_block_state_properties.IntegerProperty;
  getMax(arg0: j_net_minecraft_world_level_block_state_properties.IntegerProperty): number;
  isPreferredTool(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  newData(arg0: JavaOpaque<"org.bukkit.block.BlockType">, arg1: string): CraftBlockData;
  reloadCache(): void;
  toBukkit<B /* extends JavaOpaque<"java.lang.Enum", [B]> */>(arg0: JavaOpaque<"java.lang.Enum", [object]>, arg1: JavaClass<B>): B;
  toNMS<N /* extends j_net_minecraft_util.StringRepresentable */>(arg0: JavaOpaque<"java.lang.Enum", [object]>, arg1: JavaClass<N>): N;
}
