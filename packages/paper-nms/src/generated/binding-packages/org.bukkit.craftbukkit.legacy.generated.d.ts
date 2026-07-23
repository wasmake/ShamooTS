// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_org_bukkit_craftbukkit_util from './org.bukkit.craftbukkit.util.generated.js';

/** JVM class org.bukkit.craftbukkit.legacy.CraftEvil. */
export interface CraftEvilMembers {
}
export type CraftEvil = CraftEvilMembers;
export interface CraftEvilStatics {
  getBlockTypeIdAt(arg0: JavaOpaque<"org.bukkit.World">, arg1: number, arg2: number, arg3: number): number;
  getBlockTypeIdAt(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"org.bukkit.Location">): number;
  getDataType(arg0: JavaOpaque<"org.bukkit.Particle">): JavaClass<object>;
  getId(arg0: JavaOpaque<"org.bukkit.Material">): number;
  getMaterial(arg0: number): JavaOpaque<"org.bukkit.Material">;
  getTypeId(arg0: JavaOpaque<"org.bukkit.block.Block">): number;
  getTypeId(arg0: JavaOpaque<"org.bukkit.block.BlockState">): number;
  getTypeId(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): number;
  setData(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number): void;
  setData(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number, arg2: boolean): void;
  setDurability(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number): void;
  setTypeId(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number): boolean;
  setTypeId(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number, arg2: boolean): boolean;
  setTypeId(arg0: JavaOpaque<"org.bukkit.block.BlockState">, arg1: number): boolean;
  setTypeId(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: number): void;
  setTypeIdAndData(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: number, arg2: number, arg3: boolean): boolean;
}

/** JVM class org.bukkit.craftbukkit.legacy.CraftLegacy. */
export interface CraftLegacyMembers {
}
export type CraftLegacy = CraftLegacyMembers;
export interface CraftLegacyStatics {
  fromLegacy(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.Material">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.material.MaterialData">): JavaOpaque<"org.bukkit.Material">;
  fromLegacy(arg0: JavaOpaque<"org.bukkit.material.MaterialData">, arg1: boolean): JavaOpaque<"org.bukkit.Material">;
  fromLegacyData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): j_net_minecraft_world_level_block_state.BlockState;
  fromLegacyData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): j_net_minecraft_world_item.Item;
  getMaterial(arg0: string): JavaOpaque<"org.bukkit.Material">;
  init(): void;
  matchMaterial(arg0: string): JavaOpaque<"org.bukkit.Material">;
  name(arg0: JavaOpaque<"org.bukkit.Material">): string;
  ordinal(arg0: JavaOpaque<"org.bukkit.Material">): number;
  toLegacy(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOpaque<"org.bukkit.material.MaterialData">;
  toLegacy(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.Material">;
  toLegacyData(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  toLegacyData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.material.MaterialData">;
  toLegacyData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: boolean): JavaOpaque<"org.bukkit.material.MaterialData">;
  toLegacyMaterial(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOpaque<"org.bukkit.Material">;
  toString(arg0: JavaOpaque<"org.bukkit.Material">): string;
  valueOf(arg0: string): JavaOpaque<"org.bukkit.Material">;
  values(): Array<JavaOpaque<"org.bukkit.Material">>;
}

/** JVM class org.bukkit.craftbukkit.legacy.FieldRename. */
export interface FieldRenameMembers {
}
export type FieldRename = FieldRenameMembers;
export interface FieldRenameStatics {
  new(): FieldRename;
  readonly ATTRIBUTE_RENAME: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>;
  readonly BIOME_RENAME: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>;
  readonly ENCHANTMENT_RENAME: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>;
  readonly ENTITY_TYPE_RENAME: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>;
  readonly NONE: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>;
  readonly PARTICLE_TYPE_RENAME: JavaBiFunction<JavaOpaque<"org.bukkit.NamespacedKey">, j_org_bukkit_craftbukkit_util.ApiVersion, JavaOpaque<"org.bukkit.NamespacedKey">>;
  convertAttributeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertBiomeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertDisplaySlot(arg0: string): string;
  convertEnchantmentName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertEntityTypeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertItemFlagName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertLootTablesName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertMapCursorTypeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertMusicInstrumentName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertParticleName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertPatternTypeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertPotionEffectTypeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  convertPotionTypeName(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string): string;
  fromName_EntityType(arg0: string): JavaOpaque<"org.bukkit.entity.EntityType">;
  getByName_Enchantment(arg0: string): JavaOpaque<"org.bukkit.enchantments.Enchantment">;
  getByName_PotionEffectType(arg0: string): JavaOpaque<"org.bukkit.potion.PotionEffectType">;
  rename(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string, arg2: string): string;
  valueOf_Attribute(arg0: string): JavaOpaque<"org.bukkit.attribute.Attribute">;
  valueOf_Biome(arg0: string): JavaOpaque<"org.bukkit.block.Biome">;
  valueOf_EntityType(arg0: string): JavaOpaque<"org.bukkit.entity.EntityType">;
  valueOf_ItemFlag(arg0: string): JavaOpaque<"org.bukkit.inventory.ItemFlag">;
  valueOf_LootTables(arg0: string): JavaOpaque<"org.bukkit.loot.LootTables">;
  valueOf_MapCursorType(arg0: string, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.map.MapCursor$Type">;
  valueOf_Particle(arg0: string): JavaOpaque<"org.bukkit.Particle">;
  valueOf_PatternType(arg0: string, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.block.banner.PatternType">;
  valueOf_PotionType(arg0: string): JavaOpaque<"org.bukkit.potion.PotionType">;
}

/** JVM class org.bukkit.craftbukkit.legacy.MaterialRerouting. */
export interface MaterialReroutingMembers {
}
export type MaterialRerouting = MaterialReroutingMembers;
export interface MaterialReroutingStatics {
  new(): MaterialRerouting;
  addBarterMaterial(arg0: JavaOpaque<"org.bukkit.entity.Piglin">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  addIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: number, arg2: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  addIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: number, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  addIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  addIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  addMaterialOfInterest(arg0: JavaOpaque<"org.bukkit.entity.Piglin">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  addRule(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">, arg1: JavaCollection<JavaOpaque<"org.bukkit.Material">>, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">;
  addRule(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number, arg3: boolean): JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">;
  all(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"java.util.HashMap", [number, JavaOpaque<"org.bukkit.inventory.ItemStack">]>;
  asMetaFor(arg0: JavaOpaque<"org.bukkit.inventory.ItemFactory">, arg1: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg2: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  contains(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  contains(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): boolean;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: string): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Material">, arg1: JavaConsumer<JavaOpaque<"org.bukkit.block.data.BlockData">>): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Server">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Server">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: string): JavaOpaque<"org.bukkit.block.data.BlockData">;
  createBlockData(arg0: JavaOpaque<"org.bukkit.Server">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: JavaConsumer<JavaOpaque<"org.bukkit.block.data.BlockData">>): JavaOpaque<"org.bukkit.block.data.BlockData">;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">): void;
  decrementStatistic(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): void;
  first(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: JavaOpaque<"org.bukkit.Material">): number;
  getBarterList(arg0: JavaOpaque<"org.bukkit.entity.Piglin">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getBlockData(arg0: JavaOpaque<"org.bukkit.inventory.meta.BlockDataMeta">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.block.data.BlockData">;
  getBlockType(arg0: JavaOpaque<"org.bukkit.ChunkSnapshot">, arg1: number, arg2: number, arg3: number, arg4: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getBlocks(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaCollection<JavaOpaque<"org.bukkit.Material">>;
  getBoatMaterial(arg0: JavaOpaque<"org.bukkit.entity.Boat">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getBucket(arg0: JavaOpaque<"org.bukkit.event.player.PlayerBucketEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getByMaterial(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"com.destroystokyo.paper.event.player.PlayerArmorChangeEvent$SlotType">;
  getCanDestroy(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getCanPlaceOn(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getChangedType(arg0: JavaOpaque<"org.bukkit.event.block.BlockPhysicsEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getChoices(arg0: JavaOpaque<"org.bukkit.inventory.RecipeChoice$MaterialChoice">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaList<JavaOpaque<"org.bukkit.Material">>;
  getCooldown(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.Material">): number;
  getInfiniburn(arg0: JavaOpaque<"org.bukkit.World">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaCollection<JavaOpaque<"org.bukkit.Material">>;
  getInterestList(arg0: JavaOpaque<"org.bukkit.entity.Piglin">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getItemMeta(arg0: JavaOpaque<"org.bukkit.inventory.ItemFactory">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">;
  getItemType(arg0: JavaOpaque<"org.bukkit.event.inventory.FurnaceExtractEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getLastTwoTargetBlocks(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaSet<JavaOpaque<"org.bukkit.Material">>, arg2: number): JavaList<JavaOpaque<"org.bukkit.block.Block">>;
  getLineOfSight(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaSet<JavaOpaque<"org.bukkit.Material">>, arg2: number): JavaList<JavaOpaque<"org.bukkit.block.Block">>;
  getMaterial(arg0: JavaOpaque<"com.destroystokyo.paper.event.block.AnvilDamagedEvent$DamageState">): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: JavaOpaque<"org.bukkit.entity.Boat$Type">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: JavaOpaque<"org.bukkit.entity.FallingBlock">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: JavaOpaque<"org.bukkit.event.block.BlockCanBuildEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: JavaOpaque<"org.bukkit.event.player.PlayerInteractEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getMaterial(arg0: JavaOpaque<"org.bukkit.event.player.PlayerStatisticIncrementEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getMinecartMaterial(arg0: JavaOpaque<"org.bukkit.entity.Minecart">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getPlacementMaterial(arg0: JavaOpaque<"org.bukkit.block.data.BlockData">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getPlaying(arg0: JavaOpaque<"org.bukkit.block.Jukebox">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getShards(arg0: JavaOpaque<"org.bukkit.block.DecoratedPot">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaList<JavaOpaque<"org.bukkit.Material">>;
  getSherd(arg0: JavaOpaque<"org.bukkit.block.DecoratedPot">, arg1: JavaOpaque<"org.bukkit.block.DecoratedPot$Side">, arg2: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getSherds(arg0: JavaOpaque<"org.bukkit.block.DecoratedPot">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaMap<JavaOpaque<"org.bukkit.block.DecoratedPot$Side">, JavaOpaque<"org.bukkit.Material">>;
  getSpawnEgg(arg0: JavaOpaque<"org.bukkit.inventory.ItemFactory">, arg1: JavaOpaque<"org.bukkit.entity.EntityType">, arg2: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getState(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"com.destroystokyo.paper.event.block.AnvilDamagedEvent$DamageState">;
  getStatistic(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">): number;
  getSteerMaterial(arg0: JavaOpaque<"org.bukkit.entity.Steerable">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getTargetBlock(arg0: JavaOpaque<"org.bukkit.entity.LivingEntity">, arg1: JavaSet<JavaOpaque<"org.bukkit.Material">>, arg2: number): JavaOpaque<"org.bukkit.block.Block">;
  getTo(arg0: JavaOpaque<"org.bukkit.event.entity.EntityChangeBlockEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"io.papermc.paper.event.player.PlayerItemCooldownEvent">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: number, arg2: number, arg3: number, arg4: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.block.BlockState">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">, arg1: number, arg2: number, arg3: number, arg4: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getType(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaOpaque<"org.bukkit.Material">;
  getTypes(arg0: JavaOpaque<"com.destroystokyo.paper.event.player.PlayerArmorChangeEvent$SlotType">, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaSet<JavaOpaque<"org.bukkit.Material">>;
  getValues<T /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: JavaOpaque<"org.bukkit.Tag", [T]>, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): JavaSet<T>;
  hasCooldown(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  includes(arg0: JavaOpaque<"org.bukkit.enchantments.EnchantmentTarget">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">): void;
  incrementStatistic(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): void;
  isApplicable(arg0: JavaOpaque<"org.bukkit.inventory.ItemFactory">, arg1: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg2: JavaOpaque<"org.bukkit.Material">): boolean;
  isBreedItem(arg0: JavaOpaque<"org.bukkit.entity.Animals">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  isEnabledByFeature(arg0: JavaOpaque<"org.bukkit.packs.DataPackManager">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: JavaOpaque<"org.bukkit.World">): boolean;
  isEquipable(arg0: JavaOpaque<"org.bukkit.Material">): boolean;
  isTagged<T /* extends JavaOpaque<"org.bukkit.Keyed"> */>(arg0: JavaOpaque<"org.bukkit.Tag", [T]>, arg1: T): boolean;
  of(arg0: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  of(arg0: JavaOpaque<"org.bukkit.Material">, arg1: number): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  remove(arg0: JavaOpaque<"org.bukkit.inventory.Inventory">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  removeBarterMaterial(arg0: JavaOpaque<"org.bukkit.entity.Piglin">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  removeIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: number, arg2: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  removeIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: number, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  removeIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  removeIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): JavaOpaque<"org.bukkit.inventory.ShapelessRecipe">;
  removeMaterialOfInterest(arg0: JavaOpaque<"org.bukkit.entity.Piglin">, arg1: JavaOpaque<"org.bukkit.Material">): boolean;
  sendBlockChange(arg0: JavaOpaque<"org.bukkit.entity.Player">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): void;
  setBlock(arg0: JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">, arg1: number, arg2: number, arg3: number, arg4: JavaOpaque<"org.bukkit.Material">): void;
  setBlocks(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">, arg1: JavaCollection<JavaOpaque<"org.bukkit.Material">>): void;
  setBlocks(arg0: JavaOpaque<"org.bukkit.inventory.meta.components.ToolComponent$ToolRule">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  setCanDestroy(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaSet<JavaOpaque<"org.bukkit.Material">>): void;
  setCanPlaceOn(arg0: JavaOpaque<"org.bukkit.inventory.meta.ItemMeta">, arg1: JavaSet<JavaOpaque<"org.bukkit.Material">>): void;
  setCooldown(arg0: JavaOpaque<"org.bukkit.entity.HumanEntity">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): void;
  setIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapedRecipe">, arg1: string, arg2: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ShapedRecipe">;
  setIngredient(arg0: JavaOpaque<"org.bukkit.inventory.ShapedRecipe">, arg1: string, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): JavaOpaque<"org.bukkit.inventory.ShapedRecipe">;
  setInput(arg0: JavaOpaque<"org.bukkit.inventory.CookingRecipe", [object]>, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.CookingRecipe", [object]>;
  setInput(arg0: JavaOpaque<"org.bukkit.inventory.FurnaceRecipe">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.FurnaceRecipe">;
  setInput(arg0: JavaOpaque<"org.bukkit.inventory.FurnaceRecipe">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: number): JavaOpaque<"org.bukkit.inventory.FurnaceRecipe">;
  setInput(arg0: JavaOpaque<"org.bukkit.inventory.StonecuttingRecipe">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.StonecuttingRecipe">;
  setPlaying(arg0: JavaOpaque<"org.bukkit.block.Jukebox">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  setRegion(arg0: JavaOpaque<"org.bukkit.generator.ChunkGenerator$ChunkData">, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: JavaOpaque<"org.bukkit.Material">): void;
  setSherd(arg0: JavaOpaque<"org.bukkit.block.DecoratedPot">, arg1: JavaOpaque<"org.bukkit.block.DecoratedPot$Side">, arg2: JavaOpaque<"org.bukkit.Material">): void;
  setStatistic(arg0: JavaOpaque<"org.bukkit.OfflinePlayer">, arg1: JavaOpaque<"org.bukkit.Statistic">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): void;
  setType(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: number, arg2: number, arg3: number, arg4: JavaOpaque<"org.bukkit.Material">): void;
  setType(arg0: JavaOpaque<"org.bukkit.RegionAccessor">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.Material">): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.Block">, arg1: JavaOpaque<"org.bukkit.Material">, arg2: boolean): void;
  setType(arg0: JavaOpaque<"org.bukkit.block.BlockState">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  setType(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"org.bukkit.Material">): void;
  spawnFallingBlock(arg0: JavaOpaque<"org.bukkit.World">, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.Material">, arg3: number): JavaOpaque<"org.bukkit.entity.FallingBlock">;
  statistic(arg0: JavaOpaque<"org.bukkit.Statistic">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.scoreboard.Criteria">;
  withType(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg1: JavaOpaque<"org.bukkit.Material">): JavaOpaque<"org.bukkit.inventory.ItemStack">;
}

/** JVM class org.bukkit.craftbukkit.legacy.MethodRerouting. */
export interface MethodReroutingMembers {
}
export type MethodRerouting = MethodReroutingMembers;
export interface MethodReroutingStatics {
  new(): MethodRerouting;
  getDuration(arg0: JavaOpaque<"org.bukkit.event.entity.EntityCombustEvent">): number;
}
