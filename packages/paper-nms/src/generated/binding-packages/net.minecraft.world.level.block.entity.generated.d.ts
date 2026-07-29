// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_gametest_framework from './net.minecraft.gametest.framework.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster_creaking from './net.minecraft.world.entity.monster.creaking.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity_trialspawner from './net.minecraft.world.level.block.entity.trialspawner.generated.js';
import type * as j_net_minecraft_world_level_block_entity_vault from './net.minecraft.world.level.block.entity.vault.generated.js';
import type * as j_net_minecraft_world_level_block_piston from './net.minecraft.world.level.block.piston.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_gameevent_vibrations from './net.minecraft.world.level.gameevent.vibrations.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_ticks from './net.minecraft.world.ticks.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';
import type * as j_org_bukkit_craftbukkit_persistence from './org.bukkit.craftbukkit.persistence.generated.js';

/** JVM abstract net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity. */
export interface AbstractFurnaceBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BaseContainerBlockEntity, j_net_minecraft_world.WorldlyContainer, j_net_minecraft_world_inventory.RecipeCraftingHolder, j_net_minecraft_world_inventory.StackedContentsCompatible];
  awardUsedRecipes(arg0: j_net_minecraft_world_entity_player.Player, arg1: JavaList<j_net_minecraft_world_item.ItemStack>): void;
  awardUsedRecipesAndPopExperience(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): void;
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  cookSpeedMultiplier: number;
  cookingTimer: number;
  cookingTotalTime: number;
  fillStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getMaxStackSize(): number;
  getRecipeUsed(): j_net_minecraft_world_item_crafting.RecipeHolder<object> | null;
  getRecipesToAwardAndPopExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3): JavaList<j_net_minecraft_world_item_crafting.RecipeHolder<object>>;
  getRecipesToAwardAndPopExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_server_level.ServerPlayer, arg4: j_net_minecraft_world_item.ItemStack, arg5: number): JavaList<j_net_minecraft_world_item_crafting.RecipeHolder<object>>;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  litTimeRemaining: number;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  readonly recipeType: j_net_minecraft_world_item_crafting.RecipeType<j_net_minecraft_world_item_crafting.AbstractCookingRecipe>;
  readonly recipesUsed: JavaOpaque<"it.unimi.dsi.fastutil.objects.Reference2IntOpenHashMap", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>]>;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  setRecipeUsed(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<object> | null): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type AbstractFurnaceBlockEntity = AbstractFurnaceBlockEntityMembers & BaseContainerBlockEntity & j_net_minecraft_world.WorldlyContainer & j_net_minecraft_world_inventory.RecipeCraftingHolder & j_net_minecraft_world_inventory.StackedContentsCompatible;
export interface AbstractFurnaceBlockEntityStatics {
  readonly BURN_COOL_SPEED: 2;
  readonly BURN_TIME_STANDARD: 200;
  readonly DATA_COOKING_PROGRESS: 2;
  readonly DATA_COOKING_TOTAL_TIME: 3;
  readonly DATA_LIT_DURATION: 1;
  readonly DATA_LIT_TIME: 0;
  readonly NUM_DATA_VALUES: 4;
  getTotalCookTime(arg0: j_net_minecraft_server_level.ServerLevel | null, arg1: AbstractFurnaceBlockEntity, arg2: j_net_minecraft_world_item_crafting.RecipeType<j_net_minecraft_world_item_crafting.AbstractCookingRecipe>, arg3: number): number;
  serverTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: AbstractFurnaceBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.BannerBlockEntity. */
export interface BannerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.Nameable];
  baseColor: j_net_minecraft_world_item.DyeColor;
  getBaseColor(): j_net_minecraft_world_item.DyeColor;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getName(): j_net_minecraft_network_chat.Component;
  getPatterns(): BannerPatternLayers;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  name: j_net_minecraft_network_chat.Component | null;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  setPatterns(arg0: BannerPatternLayers): void;
}
export type BannerBlockEntity = BannerBlockEntityMembers & BlockEntity & j_net_minecraft_world.Nameable;
export interface BannerBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BannerBlockEntity;
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_item.DyeColor): BannerBlockEntity;
  readonly MAX_PATTERNS: 6;
}

/** JVM record net.minecraft.world.level.block.entity.BannerPattern. */
export interface BannerPatternMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assetId(): j_net_minecraft_resources.ResourceLocation;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  translationKey(): string;
}
export type BannerPattern = BannerPatternMembers & JavaOpaque<"java.lang.Record">;
export interface BannerPatternStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: string): BannerPattern;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<BannerPattern>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BannerPattern]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BannerPattern>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<BannerPattern>>;
}

/** JVM record net.minecraft.world.level.block.entity.BannerPatternLayers. */
export interface BannerPatternLayersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  layers(): JavaList<BannerPatternLayers_Layer>;
  removeLast(): BannerPatternLayers;
  toString(): string;
}
export type BannerPatternLayers = BannerPatternLayersMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.TooltipProvider;
export interface BannerPatternLayersStatics {
  new(arg0: JavaList<BannerPatternLayers_Layer>): BannerPatternLayers;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BannerPatternLayers]>;
  readonly EMPTY: BannerPatternLayers;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BannerPatternLayers>;
}

/** JVM class net.minecraft.world.level.block.entity.BannerPatternLayers$Builder. */
export interface BannerPatternLayers_BuilderMembers {
  add(arg0: j_net_minecraft_core.Holder<BannerPattern>, arg1: j_net_minecraft_world_item.DyeColor): BannerPatternLayers_Builder;
  add(arg0: BannerPatternLayers_Layer): BannerPatternLayers_Builder;
  addAll(arg0: BannerPatternLayers): BannerPatternLayers_Builder;
  addIfRegistered(arg0: j_net_minecraft_core.HolderGetter<BannerPattern>, arg1: j_net_minecraft_resources.ResourceKey<BannerPattern>, arg2: j_net_minecraft_world_item.DyeColor): BannerPatternLayers_Builder;
  build(): BannerPatternLayers;
}
export type BannerPatternLayers_Builder = BannerPatternLayers_BuilderMembers;
export interface BannerPatternLayers_BuilderStatics {
  new(): BannerPatternLayers_Builder;
}

/** JVM record net.minecraft.world.level.block.entity.BannerPatternLayers$Layer. */
export interface BannerPatternLayers_LayerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  color(): j_net_minecraft_world_item.DyeColor;
  description(): j_net_minecraft_network_chat.MutableComponent;
  equals(arg0: object): boolean;
  hashCode(): number;
  pattern(): j_net_minecraft_core.Holder<BannerPattern>;
  toString(): string;
}
export type BannerPatternLayers_Layer = BannerPatternLayers_LayerMembers & JavaOpaque<"java.lang.Record">;
export interface BannerPatternLayers_LayerStatics {
  new(arg0: j_net_minecraft_core.Holder<BannerPattern>, arg1: j_net_minecraft_world_item.DyeColor): BannerPatternLayers_Layer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BannerPatternLayers_Layer]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BannerPatternLayers_Layer>;
}

/** JVM class net.minecraft.world.level.block.entity.BannerPatterns. */
export interface BannerPatternsMembers {
}
export type BannerPatterns = BannerPatternsMembers;
export interface BannerPatternsStatics {
  new(): BannerPatterns;
  readonly BASE: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly BORDER: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly BRICKS: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly CIRCLE_MIDDLE: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly CREEPER: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly CROSS: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly CURLY_BORDER: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly DIAGONAL_LEFT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly DIAGONAL_LEFT_MIRROR: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly DIAGONAL_RIGHT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly DIAGONAL_RIGHT_MIRROR: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly FLOW: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly FLOWER: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly GLOBE: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly GRADIENT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly GRADIENT_UP: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly GUSTER: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly HALF_HORIZONTAL: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly HALF_HORIZONTAL_MIRROR: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly HALF_VERTICAL: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly HALF_VERTICAL_MIRROR: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly MOJANG: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly PIGLIN: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly RHOMBUS_MIDDLE: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly SKULL: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly SQUARE_BOTTOM_LEFT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly SQUARE_BOTTOM_RIGHT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly SQUARE_TOP_LEFT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly SQUARE_TOP_RIGHT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRAIGHT_CROSS: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_BOTTOM: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_CENTER: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_DOWNLEFT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_DOWNRIGHT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_LEFT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_MIDDLE: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_RIGHT: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_SMALL: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly STRIPE_TOP: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly TRIANGLES_BOTTOM: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly TRIANGLES_TOP: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly TRIANGLE_BOTTOM: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  readonly TRIANGLE_TOP: j_net_minecraft_resources.ResourceKey<BannerPattern>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<BannerPattern>): void;
  register(arg0: j_net_minecraft_data_worldgen.BootstrapContext<BannerPattern>, arg1: j_net_minecraft_resources.ResourceKey<BannerPattern>): void;
}

/** JVM class net.minecraft.world.level.block.entity.BarrelBlockEntity. */
export interface BarrelBlockEntityMembers {
  readonly __javaSupertypes?: readonly [RandomizableContainerBlockEntity];
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getMaxStackSize(): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  readonly openersCounter: ContainerOpenersCounter;
  playSound(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_sounds.SoundEvent): void;
  recheckOpen(): void;
  setMaxStackSize(arg0: number): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  updateBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: boolean): void;
}
export type BarrelBlockEntity = BarrelBlockEntityMembers & RandomizableContainerBlockEntity;
export interface BarrelBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BarrelBlockEntity;
}

/** JVM abstract net.minecraft.world.level.block.entity.BaseContainerBlockEntity. */
export interface BaseContainerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.Container, j_net_minecraft_world.MenuProvider, j_net_minecraft_world.Nameable];
  canOpen(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  clearContent(): void;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu | null;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getName(): j_net_minecraft_network_chat.Component;
  isEmpty(): boolean;
  lockKey: j_net_minecraft_world.LockCode;
  name: j_net_minecraft_network_chat.Component | null;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type BaseContainerBlockEntity = BaseContainerBlockEntityMembers & BlockEntity & j_net_minecraft_world.Container & j_net_minecraft_world.MenuProvider & j_net_minecraft_world.Nameable;
export interface BaseContainerBlockEntityStatics {
  canUnlock(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.LockCode, arg2: j_net_minecraft_network_chat.Component): boolean;
  canUnlock(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.LockCode, arg2: j_net_minecraft_network_chat.Component, arg3: BlockEntity | null): boolean;
}

/** JVM interface net.minecraft.world.level.block.entity.BeaconBeamOwner. */
export interface BeaconBeamOwnerMembers {
  getBeamSections(): JavaList<BeaconBeamOwner_Section>;
}
export type BeaconBeamOwner = BeaconBeamOwnerMembers;
export interface BeaconBeamOwnerStatics {
}

/** JVM class net.minecraft.world.level.block.entity.BeaconBeamOwner$Section. */
export interface BeaconBeamOwner_SectionMembers {
  getColor(): number;
  getHeight(): number;
  increaseHeight(): void;
}
export type BeaconBeamOwner_Section = BeaconBeamOwner_SectionMembers;
export interface BeaconBeamOwner_SectionStatics {
  new(arg0: number): BeaconBeamOwner_Section;
}

/** JVM class net.minecraft.world.level.block.entity.BeaconBlockEntity. */
export interface BeaconBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.MenuProvider, j_net_minecraft_world.Nameable, BeaconBeamOwner];
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu | null;
  getBeamSections(): JavaList<BeaconBeamOwner_Section>;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getEffectRange(): number;
  getName(): j_net_minecraft_network_chat.Component;
  getPrimaryEffect(): JavaOpaque<"org.bukkit.potion.PotionEffect"> | null;
  getSecondaryEffect(): JavaOpaque<"org.bukkit.potion.PotionEffect"> | null;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  levels: number;
  lockKey: j_net_minecraft_world.LockCode;
  name: j_net_minecraft_network_chat.Component | null;
  primaryPower: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  resetEffectRange(): void;
  secondaryPower: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect> | null;
  setCustomName(arg0: j_net_minecraft_network_chat.Component | null): void;
  setEffectRange(arg0: number): void;
  setLevel(arg0: j_net_minecraft_world_level.Level): void;
  setRemoved(): void;
}
export type BeaconBlockEntity = BeaconBlockEntityMembers & BlockEntity & j_net_minecraft_world.MenuProvider & j_net_minecraft_world.Nameable & BeaconBeamOwner;
export interface BeaconBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BeaconBlockEntity;
  readonly BEACON_EFFECTS: JavaList<JavaList<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>>>;
  readonly DATA_LEVELS: 0;
  readonly DATA_PRIMARY: 1;
  readonly DATA_SECONDARY: 2;
  readonly NUM_DATA_VALUES: 3;
  getHumansInRange(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: BeaconBlockEntity | null): JavaList<j_net_minecraft_world_entity_player.Player>;
  playSound(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_sounds.SoundEvent): void;
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: BeaconBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.BedBlockEntity. */
export interface BedBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  readonly color: j_net_minecraft_world_item.DyeColor;
  getColor(): j_net_minecraft_world_item.DyeColor;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
}
export type BedBlockEntity = BedBlockEntityMembers & BlockEntity;
export interface BedBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BedBlockEntity;
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_item.DyeColor): BedBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.BeehiveBlockEntity. */
export interface BeehiveBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  addOccupant(arg0: j_net_minecraft_world_entity_animal.Bee): void;
  clearBees(): void;
  emptyAllLivingFromHive(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: BeehiveBlockEntity_BeeReleaseStatus): void;
  getOccupantCount(): number;
  isEmpty(): boolean;
  isFireNearby(): boolean;
  isFull(): boolean;
  isSedated(): boolean;
  maxBees: number;
  releaseBees(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: BeehiveBlockEntity_BeeReleaseStatus, arg2: boolean): JavaList<j_net_minecraft_world_entity.Entity>;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  savedFlowerPos: j_net_minecraft_core.BlockPos | null;
  setChanged(): void;
  storeBee(arg0: BeehiveBlockEntity_Occupant): void;
}
export type BeehiveBlockEntity = BeehiveBlockEntityMembers & BlockEntity;
export interface BeehiveBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BeehiveBlockEntity;
  readonly MAX_OCCUPANTS: 3;
  readonly MIN_OCCUPATION_TICKS_NECTARLESS: 600;
  getHoneyLevel(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: BeehiveBlockEntity): void;
}

/** Live JVM enum net.minecraft.world.level.block.entity.BeehiveBlockEntity$BeeReleaseStatus; constants are host handles, not strings. */
export type BeehiveBlockEntity_BeeReleaseStatus = JavaEnum<"net.minecraft.world.level.block.entity.BeehiveBlockEntity$BeeReleaseStatus", "BEE_RELEASED" | "EMERGENCY" | "HONEY_DELIVERED"> & BeehiveBlockEntity_BeeReleaseStatusMembers;
export interface BeehiveBlockEntity_BeeReleaseStatusMembers {
}
export interface BeehiveBlockEntity_BeeReleaseStatusStatics {
  readonly BEE_RELEASED: BeehiveBlockEntity_BeeReleaseStatus;
  readonly EMERGENCY: BeehiveBlockEntity_BeeReleaseStatus;
  readonly HONEY_DELIVERED: BeehiveBlockEntity_BeeReleaseStatus;
  valueOf(arg0: string): BeehiveBlockEntity_BeeReleaseStatus;
  values(): Array<BeehiveBlockEntity_BeeReleaseStatus>;
}

/** JVM record net.minecraft.world.level.block.entity.BeehiveBlockEntity$Occupant. */
export interface BeehiveBlockEntity_OccupantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  createEntity(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_entity.Entity | null;
  entityData(): j_net_minecraft_world_item_component.CustomData;
  equals(arg0: object): boolean;
  hashCode(): number;
  minTicksInHive(): number;
  ticksInHive(): number;
  toString(): string;
}
export type BeehiveBlockEntity_Occupant = BeehiveBlockEntity_OccupantMembers & JavaOpaque<"java.lang.Record">;
export interface BeehiveBlockEntity_OccupantStatics {
  new(arg0: j_net_minecraft_world_item_component.CustomData, arg1: number, arg2: number): BeehiveBlockEntity_Occupant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BeehiveBlockEntity_Occupant]>;
  readonly LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<BeehiveBlockEntity_Occupant>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BeehiveBlockEntity_Occupant>;
  create(arg0: number): BeehiveBlockEntity_Occupant;
  of(arg0: j_net_minecraft_world_entity.Entity): BeehiveBlockEntity_Occupant;
}

/** JVM class net.minecraft.world.level.block.entity.BellBlockEntity. */
export interface BellBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  clickDirection: j_net_minecraft_core.Direction;
  onHit(arg0: j_net_minecraft_core.Direction): void;
  resonating: boolean;
  resonationTicks: number;
  shaking: boolean;
  ticks: number;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type BellBlockEntity = BellBlockEntityMembers & BlockEntity;
export interface BellBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BellBlockEntity;
  clientTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: BellBlockEntity): void;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: BellBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity. */
export interface BlastFurnaceBlockEntityMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceBlockEntity];
}
export type BlastFurnaceBlockEntity = BlastFurnaceBlockEntityMembers & AbstractFurnaceBlockEntity;
export interface BlastFurnaceBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BlastFurnaceBlockEntity;
}

/** JVM abstract net.minecraft.world.level.block.entity.BlockEntity. */
export interface BlockEntityMembers {
  applyComponents(arg0: j_net_minecraft_core_component.DataComponentMap, arg1: j_net_minecraft_core_component.DataComponentPatch): void;
  applyComponentsFromItemStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  applyComponentsSet(arg0: j_net_minecraft_core_component.DataComponentMap, arg1: j_net_minecraft_core_component.DataComponentPatch): JavaSet<j_net_minecraft_core_component.DataComponentType<object>>;
  clearRemoved(): void;
  collectComponents(): j_net_minecraft_core_component.DataComponentMap;
  components(): j_net_minecraft_core_component.DataComponentMap;
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory): void;
  getBlockPos(): j_net_minecraft_core.BlockPos;
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getLevel(): j_net_minecraft_world_level.Level | null;
  getNameForReporting(): string;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getOwner(arg0: boolean): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getType(): BlockEntityType<object>;
  getUpdatePacket(): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener> | null;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  hasLevel(): boolean;
  isRemoved(): boolean;
  isValidBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  loadCustomOnly(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  loadWithComponents(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  readonly persistentDataContainer: j_org_bukkit_craftbukkit_persistence.CraftPersistentDataContainer;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  problemPath(): j_net_minecraft_util.ProblemReporter_PathElement;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  sanitizeSentNbt(arg0: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_nbt.CompoundTag;
  saveCustomOnly(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  saveCustomOnly(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  saveId(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  saveWithFullMetadata(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  saveWithFullMetadata(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  saveWithId(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  saveWithoutMetadata(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  saveWithoutMetadata(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  setBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  setChanged(): void;
  setComponents(arg0: j_net_minecraft_core_component.DataComponentMap): void;
  setLevel(arg0: j_net_minecraft_world_level.Level): void;
  setRemoved(): void;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type BlockEntity = BlockEntityMembers;
export interface BlockEntityStatics {
  addEntityType(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: BlockEntityType<object>): void;
  getPosFromTag(arg0: j_net_minecraft_world_level.ChunkPos, arg1: j_net_minecraft_nbt.CompoundTag): j_net_minecraft_core.BlockPos;
  loadStatic(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_nbt.CompoundTag, arg3: j_net_minecraft_core.HolderLookup_Provider): BlockEntity | null;
  parseCustomNameSafe(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: string): j_net_minecraft_network_chat.Component | null;
}

/** JVM interface net.minecraft.world.level.block.entity.BlockEntityTicker. */
export interface BlockEntityTickerMembers<T /* extends BlockEntity */ = unknown> {
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: T): void;
}
export type BlockEntityTicker<T /* extends BlockEntity */ = unknown> = BlockEntityTickerMembers<T>;
export interface BlockEntityTickerStatics {
}

/** JVM class net.minecraft.world.level.block.entity.BlockEntityType. */
export interface BlockEntityTypeMembers<T /* extends BlockEntity */ = unknown> {
  builtInRegistryHolder(): j_net_minecraft_core.Holder_Reference<BlockEntityType<object>>;
  create(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): T;
  getBlockEntity(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): T | null;
  isValid(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  onlyOpCanSetNbt(): boolean;
  readonly validBlocks: JavaSet<j_net_minecraft_world_level_block.Block>;
}
export type BlockEntityType<T /* extends BlockEntity */ = unknown> = BlockEntityTypeMembers<T>;
export interface BlockEntityTypeStatics {
  readonly BANNER: BlockEntityType<BannerBlockEntity>;
  readonly BARREL: BlockEntityType<BarrelBlockEntity>;
  readonly BEACON: BlockEntityType<BeaconBlockEntity>;
  readonly BED: BlockEntityType<BedBlockEntity>;
  readonly BEEHIVE: BlockEntityType<BeehiveBlockEntity>;
  readonly BELL: BlockEntityType<BellBlockEntity>;
  readonly BLAST_FURNACE: BlockEntityType<BlastFurnaceBlockEntity>;
  readonly BREWING_STAND: BlockEntityType<BrewingStandBlockEntity>;
  readonly BRUSHABLE_BLOCK: BlockEntityType<BrushableBlockEntity>;
  readonly CALIBRATED_SCULK_SENSOR: BlockEntityType<CalibratedSculkSensorBlockEntity>;
  readonly CAMPFIRE: BlockEntityType<CampfireBlockEntity>;
  readonly CHEST: BlockEntityType<ChestBlockEntity>;
  readonly CHISELED_BOOKSHELF: BlockEntityType<ChiseledBookShelfBlockEntity>;
  readonly COMMAND_BLOCK: BlockEntityType<CommandBlockEntity>;
  readonly COMPARATOR: BlockEntityType<ComparatorBlockEntity>;
  readonly CONDUIT: BlockEntityType<ConduitBlockEntity>;
  readonly CRAFTER: BlockEntityType<CrafterBlockEntity>;
  readonly CREAKING_HEART: BlockEntityType<CreakingHeartBlockEntity>;
  readonly DAYLIGHT_DETECTOR: BlockEntityType<DaylightDetectorBlockEntity>;
  readonly DECORATED_POT: BlockEntityType<DecoratedPotBlockEntity>;
  readonly DISPENSER: BlockEntityType<DispenserBlockEntity>;
  readonly DROPPER: BlockEntityType<DropperBlockEntity>;
  readonly ENCHANTING_TABLE: BlockEntityType<EnchantingTableBlockEntity>;
  readonly ENDER_CHEST: BlockEntityType<EnderChestBlockEntity>;
  readonly END_GATEWAY: BlockEntityType<TheEndGatewayBlockEntity>;
  readonly END_PORTAL: BlockEntityType<TheEndPortalBlockEntity>;
  readonly FURNACE: BlockEntityType<FurnaceBlockEntity>;
  readonly HANGING_SIGN: BlockEntityType<HangingSignBlockEntity>;
  readonly HOPPER: BlockEntityType<HopperBlockEntity>;
  readonly JIGSAW: BlockEntityType<JigsawBlockEntity>;
  readonly JUKEBOX: BlockEntityType<JukeboxBlockEntity>;
  readonly LECTERN: BlockEntityType<LecternBlockEntity>;
  readonly MOB_SPAWNER: BlockEntityType<SpawnerBlockEntity>;
  readonly PISTON: BlockEntityType<j_net_minecraft_world_level_block_piston.PistonMovingBlockEntity>;
  readonly SCULK_CATALYST: BlockEntityType<SculkCatalystBlockEntity>;
  readonly SCULK_SENSOR: BlockEntityType<SculkSensorBlockEntity>;
  readonly SCULK_SHRIEKER: BlockEntityType<SculkShriekerBlockEntity>;
  readonly SHULKER_BOX: BlockEntityType<ShulkerBoxBlockEntity>;
  readonly SIGN: BlockEntityType<SignBlockEntity>;
  readonly SKULL: BlockEntityType<SkullBlockEntity>;
  readonly SMOKER: BlockEntityType<SmokerBlockEntity>;
  readonly STRUCTURE_BLOCK: BlockEntityType<StructureBlockEntity>;
  readonly TEST_BLOCK: BlockEntityType<TestBlockEntity>;
  readonly TEST_INSTANCE_BLOCK: BlockEntityType<TestInstanceBlockEntity>;
  readonly TRAPPED_CHEST: BlockEntityType<TrappedChestBlockEntity>;
  readonly TRIAL_SPAWNER: BlockEntityType<TrialSpawnerBlockEntity>;
  readonly VAULT: BlockEntityType<j_net_minecraft_world_level_block_entity_vault.VaultBlockEntity>;
  getKey(arg0: BlockEntityType<object>): j_net_minecraft_resources.ResourceLocation | null;
}

/** JVM interface net.minecraft.world.level.block.entity.BoundingBoxRenderable. */
export interface BoundingBoxRenderableMembers {
  getRenderableBox(): BoundingBoxRenderable_RenderableBox;
  renderMode(): BoundingBoxRenderable_Mode;
}
export type BoundingBoxRenderable = BoundingBoxRenderableMembers;
export interface BoundingBoxRenderableStatics {
}

/** Live JVM enum net.minecraft.world.level.block.entity.BoundingBoxRenderable$Mode; constants are host handles, not strings. */
export type BoundingBoxRenderable_Mode = JavaEnum<"net.minecraft.world.level.block.entity.BoundingBoxRenderable$Mode", "BOX" | "BOX_AND_INVISIBLE_BLOCKS" | "NONE"> & BoundingBoxRenderable_ModeMembers;
export interface BoundingBoxRenderable_ModeMembers {
}
export interface BoundingBoxRenderable_ModeStatics {
  readonly BOX: BoundingBoxRenderable_Mode;
  readonly BOX_AND_INVISIBLE_BLOCKS: BoundingBoxRenderable_Mode;
  readonly NONE: BoundingBoxRenderable_Mode;
  valueOf(arg0: string): BoundingBoxRenderable_Mode;
  values(): Array<BoundingBoxRenderable_Mode>;
}

/** JVM record net.minecraft.world.level.block.entity.BoundingBoxRenderable$RenderableBox. */
export interface BoundingBoxRenderable_RenderableBoxMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  localPos(): j_net_minecraft_core.BlockPos;
  size(): j_net_minecraft_core.Vec3i;
  toString(): string;
}
export type BoundingBoxRenderable_RenderableBox = BoundingBoxRenderable_RenderableBoxMembers & JavaOpaque<"java.lang.Record">;
export interface BoundingBoxRenderable_RenderableBoxStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Vec3i): BoundingBoxRenderable_RenderableBox;
  fromCorners(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBoxRenderable_RenderableBox;
}

/** JVM class net.minecraft.world.level.block.entity.BrewingStandBlockEntity. */
export interface BrewingStandBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BaseContainerBlockEntity, j_net_minecraft_world.WorldlyContainer];
  brewTime: number;
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  fuel: number;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getMaxStackSize(): number;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  recipeBrewTime: number;
  setMaxStackSize(arg0: number): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type BrewingStandBlockEntity = BrewingStandBlockEntityMembers & BaseContainerBlockEntity & j_net_minecraft_world.WorldlyContainer;
export interface BrewingStandBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BrewingStandBlockEntity;
  readonly DATA_BREW_TIME: 0;
  readonly DATA_FUEL_USES: 1;
  readonly FUEL_USES: 20;
  readonly NUM_DATA_VALUES: 2;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: BrewingStandBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.BrushableBlockEntity. */
export interface BrushableBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  brush(arg0: bigint, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_core.Direction, arg4: j_net_minecraft_world_item.ItemStack): boolean;
  brushingCompleteUpdateBlock(arg0: j_net_minecraft_world_level_block.Block): void;
  checkReset(arg0: j_net_minecraft_server_level.ServerLevel): void;
  getHitDirection(): j_net_minecraft_core.Direction | null;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  item: j_net_minecraft_world_item.ItemStack;
  lootTable: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  lootTableSeed: bigint;
  setLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: bigint): void;
}
export type BrushableBlockEntity = BrushableBlockEntityMembers & BlockEntity;
export interface BrushableBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): BrushableBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity. */
export interface CalibratedSculkSensorBlockEntityMembers {
  readonly __javaSupertypes?: readonly [SculkSensorBlockEntity];
  createVibrationUser(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
}
export type CalibratedSculkSensorBlockEntity = CalibratedSculkSensorBlockEntityMembers & SculkSensorBlockEntity;
export interface CalibratedSculkSensorBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): CalibratedSculkSensorBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity$VibrationUser. */
export interface CalibratedSculkSensorBlockEntity_VibrationUserMembers {
  readonly __javaSupertypes?: readonly [SculkSensorBlockEntity_VibrationUser];
  canReceiveVibration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg3: j_net_minecraft_world_level_gameevent.GameEvent_Context | null): boolean;
  getListenerRadius(): number;
}
export type CalibratedSculkSensorBlockEntity_VibrationUser = CalibratedSculkSensorBlockEntity_VibrationUserMembers & SculkSensorBlockEntity_VibrationUser;
export interface CalibratedSculkSensorBlockEntity_VibrationUserStatics {
  new(arg0: CalibratedSculkSensorBlockEntity, arg1: j_net_minecraft_core.BlockPos): CalibratedSculkSensorBlockEntity_VibrationUser;
}

/** JVM class net.minecraft.world.level.block.entity.CampfireBlockEntity. */
export interface CampfireBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.Clearable];
  clearContent(): void;
  readonly cookingProgress: Array<number>;
  readonly cookingTime: Array<number>;
  getItems(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  placeFood(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity | null, arg2: j_net_minecraft_world_item.ItemStack): boolean;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  readonly stopCooking: Array<boolean>;
}
export type CampfireBlockEntity = CampfireBlockEntityMembers & BlockEntity & j_net_minecraft_world.Clearable;
export interface CampfireBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): CampfireBlockEntity;
  cookTick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: CampfireBlockEntity, arg4: j_net_minecraft_world_item_crafting.RecipeManager_CachedCheck<j_net_minecraft_world_item_crafting.SingleRecipeInput, j_net_minecraft_world_item_crafting.CampfireCookingRecipe>): void;
  cooldownTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: CampfireBlockEntity): void;
  particleTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: CampfireBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.ChestBlockEntity. */
export interface ChestBlockEntityMembers {
  readonly __javaSupertypes?: readonly [RandomizableContainerBlockEntity, LidBlockEntity];
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getMaxStackSize(): number;
  getOpenNess(arg0: number): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  readonly openersCounter: ContainerOpenersCounter;
  recheckOpen(): void;
  setMaxStackSize(arg0: number): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type ChestBlockEntity = ChestBlockEntityMembers & RandomizableContainerBlockEntity & LidBlockEntity;
export interface ChestBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): ChestBlockEntity;
  getOpenCount(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): number;
  lidAnimateTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: ChestBlockEntity): void;
  playSound(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_sounds.SoundEvent): void;
  swapContents(arg0: ChestBlockEntity, arg1: ChestBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.ChestLidController. */
export interface ChestLidControllerMembers {
  getOpenness(arg0: number): number;
  shouldBeOpen(arg0: boolean): void;
  tickLid(): void;
}
export type ChestLidController = ChestLidControllerMembers;
export interface ChestLidControllerStatics {
  new(): ChestLidController;
}

/** JVM class net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity. */
export interface ChiseledBookShelfBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.Container];
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  canTakeItem(arg0: j_net_minecraft_world.Container, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): boolean;
  clearContent(): void;
  count(): number;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLastInteractedSlot(): number;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  lastInteractedSlot: number;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type ChiseledBookShelfBlockEntity = ChiseledBookShelfBlockEntityMembers & BlockEntity & j_net_minecraft_world.Container;
export interface ChiseledBookShelfBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): ChiseledBookShelfBlockEntity;
  readonly MAX_BOOKS_IN_STORAGE: 6;
}

/** JVM class net.minecraft.world.level.block.entity.CommandBlockEntity. */
export interface CommandBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  getCommandBlock(): j_net_minecraft_world_level.BaseCommandBlock;
  getMode(): CommandBlockEntity_Mode;
  isAutomatic(): boolean;
  isConditional(): boolean;
  isPowered(): boolean;
  markConditionMet(): boolean;
  onModeSwitch(): void;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  setAutomatic(arg0: boolean): void;
  setPowered(arg0: boolean): void;
  wasConditionMet(): boolean;
}
export type CommandBlockEntity = CommandBlockEntityMembers & BlockEntity;
export interface CommandBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): CommandBlockEntity;
}

/** Live JVM enum net.minecraft.world.level.block.entity.CommandBlockEntity$Mode; constants are host handles, not strings. */
export type CommandBlockEntity_Mode = JavaEnum<"net.minecraft.world.level.block.entity.CommandBlockEntity$Mode", "AUTO" | "REDSTONE" | "SEQUENCE"> & CommandBlockEntity_ModeMembers;
export interface CommandBlockEntity_ModeMembers {
}
export interface CommandBlockEntity_ModeStatics {
  readonly AUTO: CommandBlockEntity_Mode;
  readonly REDSTONE: CommandBlockEntity_Mode;
  readonly SEQUENCE: CommandBlockEntity_Mode;
  valueOf(arg0: string): CommandBlockEntity_Mode;
  values(): Array<CommandBlockEntity_Mode>;
}

/** JVM class net.minecraft.world.level.block.entity.ComparatorBlockEntity. */
export interface ComparatorBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  getOutputSignal(): number;
  setOutputSignal(arg0: number): void;
}
export type ComparatorBlockEntity = ComparatorBlockEntityMembers & BlockEntity;
export interface ComparatorBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): ComparatorBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.ConduitBlockEntity. */
export interface ConduitBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  destroyTarget: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity> | null;
  readonly effectBlocks: JavaList<j_net_minecraft_core.BlockPos>;
  getActiveRotation(arg0: number): number;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  isActive(): boolean;
  isHunting(): boolean;
  tickCount: number;
}
export type ConduitBlockEntity = ConduitBlockEntityMembers & BlockEntity;
export interface ConduitBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): ConduitBlockEntity;
  readonly MIN_KILL_SIZE: 42;
  clientTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: ConduitBlockEntity): void;
  getDestroyRangeAABB(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.AABB;
  getRange(arg0: JavaList<j_net_minecraft_core.BlockPos>): number;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: ConduitBlockEntity): void;
  updateAndAttackTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: ConduitBlockEntity, arg4: boolean, arg5: boolean): void;
  updateDestroyTarget(arg0: j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity> | null, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity> | null;
}

/** JVM abstract net.minecraft.world.level.block.entity.ContainerOpenersCounter. */
export interface ContainerOpenersCounterMembers {
  decrementOpeners(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  getOpenerCount(): number;
  incrementOpeners(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  onAPIClose(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  onAPIOpen(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
  opened: boolean;
  openerAPICountChanged(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: number, arg4: number): void;
  recheckOpeners(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): void;
}
export type ContainerOpenersCounter = ContainerOpenersCounterMembers;
export interface ContainerOpenersCounterStatics {
}

/** JVM class net.minecraft.world.level.block.entity.CrafterBlockEntity. */
export interface CrafterBlockEntityMembers {
  readonly __javaSupertypes?: readonly [RandomizableContainerBlockEntity, j_net_minecraft_world_inventory.CraftingContainer];
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  craftingTicksRemaining: number;
  fillStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getHeight(): number;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getItems(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getRedstoneSignal(): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  getWidth(): number;
  isEmpty(): boolean;
  isSlotDisabled(arg0: number): boolean;
  isTriggered(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  setCraftingTicksRemaining(arg0: number): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  setSlotState(arg0: number, arg1: boolean): void;
  setTriggered(arg0: boolean): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type CrafterBlockEntity = CrafterBlockEntityMembers & RandomizableContainerBlockEntity & j_net_minecraft_world_inventory.CraftingContainer;
export interface CrafterBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): CrafterBlockEntity;
  readonly CONTAINER_HEIGHT: 3;
  readonly CONTAINER_SIZE: 9;
  readonly CONTAINER_WIDTH: 3;
  readonly DATA_TRIGGERED: 9;
  readonly NUM_DATA: 10;
  readonly SLOT_DISABLED: 1;
  readonly SLOT_ENABLED: 0;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: CrafterBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.CreakingHeartBlockEntity. */
export interface CreakingHeartBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  computeAnalogOutputSignal(): number;
  creakingHurt(): void;
  getAnalogOutputSignal(): number;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  isProtector(arg0: j_net_minecraft_world_entity_monster_creaking.Creaking): boolean;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  removeProtector(arg0: j_net_minecraft_world_damagesource.DamageSource | null): void;
  setCreakingInfo(arg0: JavaOpaque<"java.util.UUID">): void;
  setCreakingInfo(arg0: j_net_minecraft_world_entity_monster_creaking.Creaking): void;
}
export type CreakingHeartBlockEntity = CreakingHeartBlockEntityMembers & BlockEntity;
export interface CreakingHeartBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): CreakingHeartBlockEntity;
  readonly CREAKING_ROAMING_RADIUS: 32;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: CreakingHeartBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.DaylightDetectorBlockEntity. */
export interface DaylightDetectorBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
}
export type DaylightDetectorBlockEntity = DaylightDetectorBlockEntityMembers & BlockEntity;
export interface DaylightDetectorBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): DaylightDetectorBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.DecoratedPotBlockEntity. */
export interface DecoratedPotBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.RandomizableContainer, j_net_minecraft_world_ticks.ContainerSingleItem_BlockContainerSingleItem];
  decorations: PotDecorations;
  getContainerBlockEntity(): BlockEntity;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getDecorations(): PotDecorations;
  getDirection(): j_net_minecraft_core.Direction;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getLootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  getLootTableSeed(): bigint;
  getMaxStackSize(): number;
  getTheItem(): j_net_minecraft_world_item.ItemStack;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  lastWobbleStyle: DecoratedPotBlockEntity_WobbleStyle | null;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  setLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null): void;
  setLootTableSeed(arg0: bigint): void;
  setMaxStackSize(arg0: number): void;
  setTheItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  splitTheItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  triggerEvent(arg0: number, arg1: number): boolean;
  wobble(arg0: DecoratedPotBlockEntity_WobbleStyle): void;
  wobbleStartedAtTick: bigint;
}
export type DecoratedPotBlockEntity = DecoratedPotBlockEntityMembers & BlockEntity & j_net_minecraft_world.RandomizableContainer & j_net_minecraft_world_ticks.ContainerSingleItem_BlockContainerSingleItem;
export interface DecoratedPotBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): DecoratedPotBlockEntity;
  readonly EVENT_POT_WOBBLES: 1;
  readonly TAG_ITEM: "item";
  readonly TAG_SHERDS: "sherds";
  createDecoratedPotItem(arg0: PotDecorations): j_net_minecraft_world_item.ItemStack;
}

/** Live JVM enum net.minecraft.world.level.block.entity.DecoratedPotBlockEntity$WobbleStyle; constants are host handles, not strings. */
export type DecoratedPotBlockEntity_WobbleStyle = JavaEnum<"net.minecraft.world.level.block.entity.DecoratedPotBlockEntity$WobbleStyle", "NEGATIVE" | "POSITIVE"> & DecoratedPotBlockEntity_WobbleStyleMembers;
export interface DecoratedPotBlockEntity_WobbleStyleMembers {
  readonly duration: number;
}
export interface DecoratedPotBlockEntity_WobbleStyleStatics {
  readonly NEGATIVE: DecoratedPotBlockEntity_WobbleStyle;
  readonly POSITIVE: DecoratedPotBlockEntity_WobbleStyle;
  valueOf(arg0: string): DecoratedPotBlockEntity_WobbleStyle;
  values(): Array<DecoratedPotBlockEntity_WobbleStyle>;
}

/** JVM record net.minecraft.world.level.block.entity.DecoratedPotPattern. */
export interface DecoratedPotPatternMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assetId(): j_net_minecraft_resources.ResourceLocation;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type DecoratedPotPattern = DecoratedPotPatternMembers & JavaOpaque<"java.lang.Record">;
export interface DecoratedPotPatternStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): DecoratedPotPattern;
}

/** JVM class net.minecraft.world.level.block.entity.DecoratedPotPatterns. */
export interface DecoratedPotPatternsMembers {
}
export type DecoratedPotPatterns = DecoratedPotPatternsMembers;
export interface DecoratedPotPatternsStatics {
  new(): DecoratedPotPatterns;
  readonly ANGLER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly ARCHER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly ARMS_UP: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly BLADE: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly BLANK: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly BREWER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly BURN: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly DANGER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly EXPLORER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly FLOW: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly FRIEND: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly GUSTER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly HEART: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly HEARTBREAK: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly HOWL: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly MINER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly MOURNER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly PLENTY: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly PRIZE: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly SCRAPE: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly SHEAF: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly SHELTER: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly SKULL: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  readonly SNORT: j_net_minecraft_resources.ResourceKey<DecoratedPotPattern>;
  bootstrap(arg0: j_net_minecraft_core.Registry<DecoratedPotPattern>): DecoratedPotPattern;
  getPatternFromItem(arg0: j_net_minecraft_world_item.Item): j_net_minecraft_resources.ResourceKey<DecoratedPotPattern> | null;
}

/** JVM class net.minecraft.world.level.block.entity.DispenserBlockEntity. */
export interface DispenserBlockEntityMembers {
  readonly __javaSupertypes?: readonly [RandomizableContainerBlockEntity];
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getMaxStackSize(): number;
  getRandomSlot(arg0: j_net_minecraft_util.RandomSource): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  insertItem(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  setMaxStackSize(arg0: number): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type DispenserBlockEntity = DispenserBlockEntityMembers & RandomizableContainerBlockEntity;
export interface DispenserBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): DispenserBlockEntity;
  readonly CONTAINER_SIZE: 9;
}

/** JVM class net.minecraft.world.level.block.entity.DropperBlockEntity. */
export interface DropperBlockEntityMembers {
  readonly __javaSupertypes?: readonly [DispenserBlockEntity];
}
export type DropperBlockEntity = DropperBlockEntityMembers & DispenserBlockEntity;
export interface DropperBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): DropperBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.EnchantingTableBlockEntity. */
export interface EnchantingTableBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.Nameable];
  flip: number;
  flipA: number;
  flipT: number;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getName(): j_net_minecraft_network_chat.Component;
  oFlip: number;
  oOpen: number;
  oRot: number;
  open: number;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  rot: number;
  setCustomName(arg0: j_net_minecraft_network_chat.Component | null): void;
  tRot: number;
  time: number;
}
export type EnchantingTableBlockEntity = EnchantingTableBlockEntityMembers & BlockEntity & j_net_minecraft_world.Nameable;
export interface EnchantingTableBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): EnchantingTableBlockEntity;
  bookAnimationTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: EnchantingTableBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.EnderChestBlockEntity. */
export interface EnderChestBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, LidBlockEntity];
  getOpenNess(arg0: number): number;
  readonly openersCounter: ContainerOpenersCounter;
  recheckOpen(): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type EnderChestBlockEntity = EnderChestBlockEntityMembers & BlockEntity & LidBlockEntity;
export interface EnderChestBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): EnderChestBlockEntity;
  lidAnimateTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: EnderChestBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.FuelValues. */
export interface FuelValuesMembers {
  burnDuration(arg0: j_net_minecraft_world_item.ItemStack): number;
  fuelItems(): JavaOpaque<"java.util.SequencedSet", [j_net_minecraft_world_item.Item]>;
  isFuel(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type FuelValues = FuelValuesMembers;
export interface FuelValuesStatics {
  vanillaBurnTimes(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_flag.FeatureFlagSet): FuelValues;
  vanillaBurnTimes(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_flag.FeatureFlagSet, arg2: number): FuelValues;
}

/** JVM class net.minecraft.world.level.block.entity.FuelValues$Builder. */
export interface FuelValues_BuilderMembers {
  add(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>, arg1: number): FuelValues_Builder;
  add(arg0: j_net_minecraft_world_level.ItemLike, arg1: number): FuelValues_Builder;
  build(): FuelValues;
  remove(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): FuelValues_Builder;
}
export type FuelValues_Builder = FuelValues_BuilderMembers;
export interface FuelValues_BuilderStatics {
  new(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_world_flag.FeatureFlagSet): FuelValues_Builder;
}

/** JVM class net.minecraft.world.level.block.entity.FurnaceBlockEntity. */
export interface FurnaceBlockEntityMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceBlockEntity];
}
export type FurnaceBlockEntity = FurnaceBlockEntityMembers & AbstractFurnaceBlockEntity;
export interface FurnaceBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): FurnaceBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.HangingSignBlockEntity. */
export interface HangingSignBlockEntityMembers {
  readonly __javaSupertypes?: readonly [SignBlockEntity];
  getMaxTextLineWidth(): number;
  getSignInteractionFailedSoundEvent(): j_net_minecraft_sounds.SoundEvent;
  getTextLineHeight(): number;
}
export type HangingSignBlockEntity = HangingSignBlockEntityMembers & SignBlockEntity;
export interface HangingSignBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): HangingSignBlockEntity;
}

/** JVM interface net.minecraft.world.level.block.entity.Hopper. */
export interface HopperMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container];
  getLevelX(): number;
  getLevelY(): number;
  getLevelZ(): number;
  getSuckAabb(): j_net_minecraft_world_phys.AABB;
  isGridAligned(): boolean;
}
export type Hopper = HopperMembers & j_net_minecraft_world.Container;
export interface HopperStatics {
  readonly SUCK_AABB: j_net_minecraft_world_phys.AABB;
}

/** JVM class net.minecraft.world.level.block.entity.HopperBlockEntity. */
export interface HopperBlockEntityMembers {
  readonly __javaSupertypes?: readonly [RandomizableContainerBlockEntity, Hopper];
  cooldownTime: number;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getLevelX(): number;
  getLevelY(): number;
  getLevelZ(): number;
  getMaxStackSize(): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isGridAligned(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  setBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  setCooldown(arg0: number): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type HopperBlockEntity = HopperBlockEntityMembers & RandomizableContainerBlockEntity & Hopper;
export interface HopperBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): HopperBlockEntity;
  readonly HOPPER_CONTAINER_SIZE: 5;
  readonly MOVE_ITEM_SPEED: 8;
  addItem(arg0: j_net_minecraft_world.Container | null, arg1: j_net_minecraft_world.Container, arg2: j_net_minecraft_world_item.ItemStack, arg3: j_net_minecraft_core.Direction | null): j_net_minecraft_world_item.ItemStack;
  addItem(arg0: j_net_minecraft_world.Container, arg1: j_net_minecraft_world_entity_item.ItemEntity): boolean;
  entityInside(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_world_entity.Entity, arg4: HopperBlockEntity): void;
  getContainerAt(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world.Container | null;
  getItemsAtAndAbove(arg0: j_net_minecraft_world_level.Level, arg1: Hopper): JavaList<j_net_minecraft_world_entity_item.ItemEntity>;
  pushItemsTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: HopperBlockEntity): void;
  readonly skipHopperEvents: boolean;
  suckInItems(arg0: j_net_minecraft_world_level.Level, arg1: Hopper): boolean;
}

/** JVM class net.minecraft.world.level.block.entity.JigsawBlockEntity. */
export interface JigsawBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  generate(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: boolean): void;
  getFinalState(): string;
  getJoint(): JigsawBlockEntity_JointType;
  getName(): j_net_minecraft_resources.ResourceLocation;
  getPlacementPriority(): number;
  getPool(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  getSelectionPriority(): number;
  getTarget(): j_net_minecraft_resources.ResourceLocation;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  setFinalState(arg0: string): void;
  setJoint(arg0: JigsawBlockEntity_JointType): void;
  setName(arg0: j_net_minecraft_resources.ResourceLocation): void;
  setPlacementPriority(arg0: number): void;
  setPool(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>): void;
  setSelectionPriority(arg0: number): void;
  setTarget(arg0: j_net_minecraft_resources.ResourceLocation): void;
}
export type JigsawBlockEntity = JigsawBlockEntityMembers & BlockEntity;
export interface JigsawBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): JigsawBlockEntity;
  readonly DEFAULT_FINAL_STATE: "minecraft:air";
  readonly EMPTY_ID: j_net_minecraft_resources.ResourceLocation;
  readonly FINAL_STATE: "final_state";
  readonly JOINT: "joint";
  readonly NAME: "name";
  readonly PLACEMENT_PRIORITY: "placement_priority";
  readonly POOL: "pool";
  readonly POOL_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>]>;
  readonly SELECTION_PRIORITY: "selection_priority";
  readonly TARGET: "target";
}

/** Live JVM enum net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType; constants are host handles, not strings. */
export type JigsawBlockEntity_JointType = JavaEnum<"net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType", "ALIGNED" | "ROLLABLE"> & JigsawBlockEntity_JointTypeMembers;
export interface JigsawBlockEntity_JointTypeMembers {
  getSerializedName(): string;
  getTranslatedName(): j_net_minecraft_network_chat.Component;
}
export interface JigsawBlockEntity_JointTypeStatics {
  readonly ALIGNED: JigsawBlockEntity_JointType;
  readonly ROLLABLE: JigsawBlockEntity_JointType;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<JigsawBlockEntity_JointType>;
  valueOf(arg0: string): JigsawBlockEntity_JointType;
  values(): Array<JigsawBlockEntity_JointType>;
}

/** JVM class net.minecraft.world.level.block.entity.JukeboxBlockEntity. */
export interface JukeboxBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world_ticks.ContainerSingleItem_BlockContainerSingleItem];
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  canTakeItem(arg0: j_net_minecraft_world.Container, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): boolean;
  getComparatorOutput(): number;
  getContainerBlockEntity(): BlockEntity;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getSongPlayer(): j_net_minecraft_world_item.JukeboxSongPlayer;
  getTheItem(): j_net_minecraft_world_item.ItemStack;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onSongChanged(): void;
  opened: boolean;
  popOutTheItem(): void;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  setMaxStackSize(arg0: number): void;
  setSongItemWithoutPlaying(arg0: j_net_minecraft_world_item.ItemStack, arg1: bigint): void;
  setTheItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  splitTheItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  tryForcePlaySong(): void;
}
export type JukeboxBlockEntity = JukeboxBlockEntityMembers & BlockEntity & j_net_minecraft_world_ticks.ContainerSingleItem_BlockContainerSingleItem;
export interface JukeboxBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): JukeboxBlockEntity;
  readonly SONG_ITEM_TAG_ID: "RecordItem";
  readonly TICKS_SINCE_SONG_STARTED_TAG_ID: "ticks_since_song_started";
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: JukeboxBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.LecternBlockEntity. */
export interface LecternBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world.Clearable, j_net_minecraft_world.MenuProvider];
  readonly bookAccess: j_net_minecraft_world.Container;
  clearContent(): void;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu;
  getBook(): j_net_minecraft_world_item.ItemStack;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getPage(): number;
  getRedstoneSignal(): number;
  hasBook(): boolean;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  setBook(arg0: j_net_minecraft_world_item.ItemStack): void;
  setBook(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity_player.Player | null): void;
  setPage(arg0: number): void;
}
export type LecternBlockEntity = LecternBlockEntityMembers & BlockEntity & j_net_minecraft_world.Clearable & j_net_minecraft_world.MenuProvider;
export interface LecternBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): LecternBlockEntity;
  readonly DATA_PAGE: 0;
  readonly NUM_DATA: 1;
  readonly NUM_SLOTS: 1;
  readonly SLOT_BOOK: 0;
}

/** JVM class net.minecraft.world.level.block.entity.LecternBlockEntity$LecternInventory. */
export interface LecternBlockEntity_LecternInventoryMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container];
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  clearContent(): void;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLectern(): LecternBlockEntity;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type LecternBlockEntity_LecternInventory = LecternBlockEntity_LecternInventoryMembers & j_net_minecraft_world.Container;
export interface LecternBlockEntity_LecternInventoryStatics {
  new(arg0: LecternBlockEntity): LecternBlockEntity_LecternInventory;
}

/** JVM interface net.minecraft.world.level.block.entity.LidBlockEntity. */
export interface LidBlockEntityMembers {
  getOpenNess(arg0: number): number;
}
export type LidBlockEntity = LidBlockEntityMembers;
export interface LidBlockEntityStatics {
}

/** JVM record net.minecraft.world.level.block.entity.PotDecorations. */
export interface PotDecorationsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  back(): JavaOptional<j_net_minecraft_world_item.Item>;
  equals(arg0: object): boolean;
  front(): JavaOptional<j_net_minecraft_world_item.Item>;
  hashCode(): number;
  left(): JavaOptional<j_net_minecraft_world_item.Item>;
  ordered(): JavaList<j_net_minecraft_world_item.Item>;
  right(): JavaOptional<j_net_minecraft_world_item.Item>;
  toString(): string;
}
export type PotDecorations = PotDecorationsMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.TooltipProvider;
export interface PotDecorationsStatics {
  new(arg0: JavaOptional<j_net_minecraft_world_item.Item>, arg1: JavaOptional<j_net_minecraft_world_item.Item>, arg2: JavaOptional<j_net_minecraft_world_item.Item>, arg3: JavaOptional<j_net_minecraft_world_item.Item>): PotDecorations;
  new(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_world_item.Item, arg2: j_net_minecraft_world_item.Item, arg3: j_net_minecraft_world_item.Item): PotDecorations;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PotDecorations]>;
  readonly EMPTY: PotDecorations;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, PotDecorations>;
}

/** JVM abstract net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity. */
export interface RandomizableContainerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BaseContainerBlockEntity, j_net_minecraft_world.RandomizableContainer];
  canOpen(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu | null;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  getLootTableSeed(): bigint;
  isEmpty(): boolean;
  lootTable: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  lootTableSeed: bigint;
  lootableData(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventoryData">;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null): void;
  setLootTableSeed(arg0: bigint): void;
}
export type RandomizableContainerBlockEntity = RandomizableContainerBlockEntityMembers & BaseContainerBlockEntity & j_net_minecraft_world.RandomizableContainer;
export interface RandomizableContainerBlockEntityStatics {
}

/** JVM class net.minecraft.world.level.block.entity.SculkCatalystBlockEntity. */
export interface SculkCatalystBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world_level_gameevent.GameEventListener_Provider<SculkCatalystBlockEntity_CatalystListener>];
  getListener(): SculkCatalystBlockEntity_CatalystListener;
  setLevel(arg0: j_net_minecraft_world_level.Level): void;
}
export type SculkCatalystBlockEntity = SculkCatalystBlockEntityMembers & BlockEntity & j_net_minecraft_world_level_gameevent.GameEventListener_Provider<SculkCatalystBlockEntity_CatalystListener>;
export interface SculkCatalystBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SculkCatalystBlockEntity;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: SculkCatalystBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.SculkCatalystBlockEntity$CatalystListener. */
export interface SculkCatalystBlockEntity_CatalystListenerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_gameevent.GameEventListener];
  bloom(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_util.RandomSource): void;
  getDeliveryMode(): j_net_minecraft_world_level_gameevent.GameEventListener_DeliveryMode;
  getListenerRadius(): number;
  getListenerSource(): j_net_minecraft_world_level_gameevent.PositionSource;
  getSculkSpreader(): j_net_minecraft_world_level_block.SculkSpreader;
  handleGameEvent(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg2: j_net_minecraft_world_level_gameevent.GameEvent_Context, arg3: j_net_minecraft_world_phys.Vec3): boolean;
}
export type SculkCatalystBlockEntity_CatalystListener = SculkCatalystBlockEntity_CatalystListenerMembers & j_net_minecraft_world_level_gameevent.GameEventListener;
export interface SculkCatalystBlockEntity_CatalystListenerStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_gameevent.PositionSource): SculkCatalystBlockEntity_CatalystListener;
  readonly PULSE_TICKS: 8;
}

/** JVM class net.minecraft.world.level.block.entity.SculkSensorBlockEntity. */
export interface SculkSensorBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world_level_gameevent.GameEventListener_Provider<j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Listener>, j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem];
  createVibrationUser(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
  getLastVibrationFrequency(): number;
  getListener(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Listener;
  getVibrationData(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Data;
  getVibrationUser(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
  lastVibrationFrequency: number;
  rangeOverride: number | null;
  setLastVibrationFrequency(arg0: number): void;
}
export type SculkSensorBlockEntity = SculkSensorBlockEntityMembers & BlockEntity & j_net_minecraft_world_level_gameevent.GameEventListener_Provider<j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Listener> & j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem;
export interface SculkSensorBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SculkSensorBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.SculkSensorBlockEntity$VibrationUser. */
export interface SculkSensorBlockEntity_VibrationUserMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User];
  canReceiveVibration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg3: j_net_minecraft_world_level_gameevent.GameEvent_Context | null): boolean;
  canTriggerAvoidVibration(): boolean;
  getListenerRadius(): number;
  getPositionSource(): j_net_minecraft_world_level_gameevent.PositionSource;
  onDataChanged(): void;
  onReceiveVibration(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg3: j_net_minecraft_world_entity.Entity | null, arg4: j_net_minecraft_world_entity.Entity | null, arg5: number): void;
  requiresAdjacentChunksToBeTicking(): boolean;
}
export type SculkSensorBlockEntity_VibrationUser = SculkSensorBlockEntity_VibrationUserMembers & j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
export interface SculkSensorBlockEntity_VibrationUserStatics {
  new(arg0: SculkSensorBlockEntity, arg1: j_net_minecraft_core.BlockPos): SculkSensorBlockEntity_VibrationUser;
  readonly LISTENER_RANGE: 8;
}

/** JVM class net.minecraft.world.level.block.entity.SculkShriekerBlockEntity. */
export interface SculkShriekerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world_level_gameevent.GameEventListener_Provider<j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Listener>, j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem];
  getListener(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Listener;
  getVibrationData(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Data;
  getVibrationUser(): j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_User;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  tryRespond(arg0: j_net_minecraft_server_level.ServerLevel): void;
  tryShriek(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_server_level.ServerPlayer | null): void;
  warningLevel: number;
}
export type SculkShriekerBlockEntity = SculkShriekerBlockEntityMembers & BlockEntity & j_net_minecraft_world_level_gameevent.GameEventListener_Provider<j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem_Listener> & j_net_minecraft_world_level_gameevent_vibrations.VibrationSystem;
export interface SculkShriekerBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SculkShriekerBlockEntity;
  tryGetPlayer(arg0: j_net_minecraft_world_entity.Entity | null): j_net_minecraft_server_level.ServerPlayer | null;
}

/** JVM class net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity. */
export interface ShulkerBoxBlockEntityMembers {
  readonly __javaSupertypes?: readonly [RandomizableContainerBlockEntity, j_net_minecraft_world.WorldlyContainer];
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  getAnimationStatus(): ShulkerBoxBlockEntity_AnimationStatus;
  getBoundingBox(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_phys.AABB;
  getColor(): j_net_minecraft_world_item.DyeColor | null;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getMaxStackSize(): number;
  getProgress(arg0: number): number;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isClosed(): boolean;
  loadFromTag(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  openCount: number;
  opened: boolean;
  preRemoveSideEffects(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  setMaxStackSize(arg0: number): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type ShulkerBoxBlockEntity = ShulkerBoxBlockEntityMembers & RandomizableContainerBlockEntity & j_net_minecraft_world.WorldlyContainer;
export interface ShulkerBoxBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): ShulkerBoxBlockEntity;
  new(arg0: j_net_minecraft_world_item.DyeColor | null, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): ShulkerBoxBlockEntity;
  readonly COLUMNS: 9;
  readonly CONTAINER_SIZE: 27;
  readonly EVENT_SET_OPEN_COUNT: 1;
  readonly MAX_LID_HEIGHT: 0.5;
  readonly MAX_LID_ROTATION: 270;
  readonly OPENING_TICK_LENGTH: 10;
  readonly ROWS: 3;
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: ShulkerBoxBlockEntity): void;
}

/** Live JVM enum net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity$AnimationStatus; constants are host handles, not strings. */
export type ShulkerBoxBlockEntity_AnimationStatus = JavaEnum<"net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity$AnimationStatus", "CLOSED" | "CLOSING" | "OPENED" | "OPENING"> & ShulkerBoxBlockEntity_AnimationStatusMembers;
export interface ShulkerBoxBlockEntity_AnimationStatusMembers {
}
export interface ShulkerBoxBlockEntity_AnimationStatusStatics {
  readonly CLOSED: ShulkerBoxBlockEntity_AnimationStatus;
  readonly CLOSING: ShulkerBoxBlockEntity_AnimationStatus;
  readonly OPENED: ShulkerBoxBlockEntity_AnimationStatus;
  readonly OPENING: ShulkerBoxBlockEntity_AnimationStatus;
  valueOf(arg0: string): ShulkerBoxBlockEntity_AnimationStatus;
  values(): Array<ShulkerBoxBlockEntity_AnimationStatus>;
}

/** JVM class net.minecraft.world.level.block.entity.SignBlockEntity. */
export interface SignBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  canExecuteClickCommands(arg0: boolean, arg1: j_net_minecraft_world_entity_player.Player): boolean;
  executeClickCommandsIfPresent(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_core.BlockPos, arg3: boolean): boolean;
  getBackText(): SignText;
  getFrontText(): SignText;
  getMaxTextLineWidth(): number;
  getPlayerWhoMayEdit(): JavaOpaque<"java.util.UUID"> | null;
  getSignInteractionFailedSoundEvent(): j_net_minecraft_sounds.SoundEvent;
  getText(arg0: boolean): SignText;
  getTextLineHeight(): number;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  isFacingFrontText(arg0: number, arg1: number): boolean;
  isFacingFrontText(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  isWaxed(): boolean;
  playerIsTooFarAwayToEdit(arg0: JavaOpaque<"java.util.UUID">): boolean;
  playerWhoMayEdit: JavaOpaque<"java.util.UUID"> | null;
  setAllowedPlayerEditor(arg0: JavaOpaque<"java.util.UUID"> | null): void;
  setText(arg0: SignText, arg1: boolean): boolean;
  setWaxed(arg0: boolean): boolean;
  updateSignText(arg0: j_net_minecraft_world_entity_player.Player, arg1: boolean, arg2: JavaList<j_net_minecraft_server_network.FilteredText>): void;
  updateText(arg0: JavaOpaque<"java.util.function.UnaryOperator", [SignText]>, arg1: boolean): boolean;
}
export type SignBlockEntity = SignBlockEntityMembers & BlockEntity;
export interface SignBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SignBlockEntity;
  new(arg0: BlockEntityType, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState): SignBlockEntity;
  tick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: SignBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.SignText. */
export interface SignTextMembers {
  getColor(): j_net_minecraft_world_item.DyeColor;
  getMessage(arg0: number, arg1: boolean): j_net_minecraft_network_chat.Component;
  getMessages(arg0: boolean): Array<j_net_minecraft_network_chat.Component>;
  getRenderMessages(arg0: boolean, arg1: JavaFunction<j_net_minecraft_network_chat.Component, j_net_minecraft_util.FormattedCharSequence>): Array<j_net_minecraft_util.FormattedCharSequence>;
  hasAnyClickCommands(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  hasGlowingText(): boolean;
  hasMessage(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  setColor(arg0: j_net_minecraft_world_item.DyeColor): SignText;
  setHasGlowingText(arg0: boolean): SignText;
  setMessage(arg0: number, arg1: j_net_minecraft_network_chat.Component): SignText;
  setMessage(arg0: number, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_network_chat.Component): SignText;
}
export type SignText = SignTextMembers;
export interface SignTextStatics {
  new(): SignText;
  new(arg0: Array<j_net_minecraft_network_chat.Component>, arg1: Array<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.DyeColor, arg3: boolean): SignText;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SignText]>;
  readonly LINES: 4;
}

/** JVM class net.minecraft.world.level.block.entity.SkullBlockEntity. */
export interface SkullBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  customName: j_net_minecraft_network_chat.Component | null;
  getAnimation(arg0: number): number;
  getNoteBlockSound(): j_net_minecraft_resources.ResourceLocation | null;
  getOwnerProfile(): j_net_minecraft_world_item_component.ResolvableProfile | null;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  noteBlockSound: j_net_minecraft_resources.ResourceLocation | null;
  owner: j_net_minecraft_world_item_component.ResolvableProfile | null;
  removeComponentsFromTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  setOwner(arg0: j_net_minecraft_world_item_component.ResolvableProfile | null): void;
}
export type SkullBlockEntity = SkullBlockEntityMembers & BlockEntity;
export interface SkullBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SkullBlockEntity;
  readonly CHECKED_MAIN_THREAD_EXECUTOR: JavaOpaque<"java.util.concurrent.Executor">;
  animation(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: SkullBlockEntity): void;
  clear(): void;
  fetchGameProfile(arg0: string): PromiseLike<JavaOptional<JavaOpaque<"com.mojang.authlib.GameProfile">>>;
  fetchGameProfile(arg0: JavaOpaque<"java.util.UUID">, arg1: string | null): PromiseLike<JavaOptional<JavaOpaque<"com.mojang.authlib.GameProfile">>>;
  setup(arg0: j_net_minecraft_server.Services, arg1: JavaOpaque<"java.util.concurrent.Executor">): void;
}

/** JVM class net.minecraft.world.level.block.entity.SmokerBlockEntity. */
export interface SmokerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [AbstractFurnaceBlockEntity];
}
export type SmokerBlockEntity = SmokerBlockEntityMembers & AbstractFurnaceBlockEntity;
export interface SmokerBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SmokerBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.SpawnerBlockEntity. */
export interface SpawnerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world_level.Spawner];
  getSpawner(): j_net_minecraft_world_level.BaseSpawner;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  setEntityId(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_util.RandomSource): void;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type SpawnerBlockEntity = SpawnerBlockEntityMembers & BlockEntity & j_net_minecraft_world_level.Spawner;
export interface SpawnerBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): SpawnerBlockEntity;
  clientTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: SpawnerBlockEntity): void;
  serverTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: SpawnerBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.StructureBlockEntity. */
export interface StructureBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, BoundingBoxRenderable];
  author: string;
  createdBy(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  detectSize(): boolean;
  getIntegrity(): number;
  getMetaData(): string;
  getMirror(): j_net_minecraft_world_level_block.Mirror;
  getMode(): j_net_minecraft_world_level_block_state_properties.StructureMode;
  getRenderableBox(): BoundingBoxRenderable_RenderableBox;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  getSeed(): bigint;
  getShowAir(): boolean;
  getShowBoundingBox(): boolean;
  getStructureName(): string;
  getStructurePos(): j_net_minecraft_core.BlockPos;
  getStructureSize(): j_net_minecraft_core.Vec3i;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  hasStructureName(): boolean;
  ignoreEntities: boolean;
  integrity: number;
  isIgnoreEntities(): boolean;
  isPowered(): boolean;
  isStrict(): boolean;
  isStructureLoadable(): boolean;
  loadStructureInfo(arg0: j_net_minecraft_server_level.ServerLevel): boolean;
  metaData: string;
  mirror: j_net_minecraft_world_level_block.Mirror;
  mode: j_net_minecraft_world_level_block_state_properties.StructureMode;
  placeStructure(arg0: j_net_minecraft_server_level.ServerLevel): void;
  placeStructureIfSameSize(arg0: j_net_minecraft_server_level.ServerLevel): boolean;
  renderMode(): BoundingBoxRenderable_Mode;
  rotation: j_net_minecraft_world_level_block.Rotation;
  saveStructure(): boolean;
  saveStructure(arg0: boolean): boolean;
  seed: bigint;
  setIgnoreEntities(arg0: boolean): void;
  setIntegrity(arg0: number): void;
  setMetaData(arg0: string): void;
  setMirror(arg0: j_net_minecraft_world_level_block.Mirror): void;
  setMode(arg0: j_net_minecraft_world_level_block_state_properties.StructureMode): void;
  setPowered(arg0: boolean): void;
  setRotation(arg0: j_net_minecraft_world_level_block.Rotation): void;
  setSeed(arg0: bigint): void;
  setShowAir(arg0: boolean): void;
  setShowBoundingBox(arg0: boolean): void;
  setStrict(arg0: boolean): void;
  setStructureName(arg0: string | null): void;
  setStructureName(arg0: j_net_minecraft_resources.ResourceLocation | null): void;
  setStructurePos(arg0: j_net_minecraft_core.BlockPos): void;
  setStructureSize(arg0: j_net_minecraft_core.Vec3i): void;
  showAir: boolean;
  showBoundingBox: boolean;
  structurePos: j_net_minecraft_core.BlockPos;
  structureSize: j_net_minecraft_core.Vec3i;
  unloadStructure(): void;
  usedBy(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type StructureBlockEntity = StructureBlockEntityMembers & BlockEntity & BoundingBoxRenderable;
export interface StructureBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): StructureBlockEntity;
  readonly AUTHOR_TAG: "author";
  readonly MAX_OFFSET_PER_AXIS: 48;
  readonly MAX_SIZE_PER_AXIS: 48;
  createRandom(arg0: bigint): j_net_minecraft_util.RandomSource;
  saveStructure(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_resources.ResourceLocation, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Vec3i, arg4: boolean, arg5: string, arg6: boolean, arg7: JavaList<j_net_minecraft_world_level_block.Block>): boolean;
}

/** Live JVM enum net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType; constants are host handles, not strings. */
export type StructureBlockEntity_UpdateType = JavaEnum<"net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType", "LOAD_AREA" | "SAVE_AREA" | "SCAN_AREA" | "UPDATE_DATA"> & StructureBlockEntity_UpdateTypeMembers;
export interface StructureBlockEntity_UpdateTypeMembers {
}
export interface StructureBlockEntity_UpdateTypeStatics {
  readonly LOAD_AREA: StructureBlockEntity_UpdateType;
  readonly SAVE_AREA: StructureBlockEntity_UpdateType;
  readonly SCAN_AREA: StructureBlockEntity_UpdateType;
  readonly UPDATE_DATA: StructureBlockEntity_UpdateType;
  valueOf(arg0: string): StructureBlockEntity_UpdateType;
  values(): Array<StructureBlockEntity_UpdateType>;
}

/** JVM class net.minecraft.world.level.block.entity.TestBlockEntity. */
export interface TestBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  getMessage(): string;
  getMode(): j_net_minecraft_world_level_block_state_properties.TestBlockMode;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket | null;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  hasTriggered(): boolean;
  isPowered(): boolean;
  log(): void;
  reset(): void;
  setMessage(arg0: string): void;
  setMode(arg0: j_net_minecraft_world_level_block_state_properties.TestBlockMode): void;
  setPowered(arg0: boolean): void;
  trigger(): void;
}
export type TestBlockEntity = TestBlockEntityMembers & BlockEntity;
export interface TestBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): TestBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.TestInstanceBlockEntity. */
export interface TestInstanceBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, BeaconBeamOwner, BoundingBoxRenderable];
  encaseStructure(): void;
  errorMessage(): JavaOptional<j_net_minecraft_network_chat.Component>;
  exportTest(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): boolean;
  getBeamSections(): JavaList<BeaconBeamOwner_Section>;
  getRenderableBox(): BoundingBoxRenderable_RenderableBox;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  getSize(): j_net_minecraft_core.Vec3i;
  getStartCorner(): j_net_minecraft_core.BlockPos;
  getStructureBoundingBox(): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getStructureBounds(): j_net_minecraft_world_phys.AABB;
  getStructurePos(): j_net_minecraft_core.BlockPos;
  getTestName(): j_net_minecraft_network_chat.Component;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  ignoreEntities(): boolean;
  placeStructure(): boolean;
  processStructureBoundary(arg0: JavaConsumer<j_net_minecraft_core.BlockPos>): void;
  removeBarriers(): void;
  renderMode(): BoundingBoxRenderable_Mode;
  resetTest(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): void;
  runTest(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): void;
  saveTest(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  set(arg0: TestInstanceBlockEntity_Data): void;
  setChanged(): void;
  setErrorMessage(arg0: j_net_minecraft_network_chat.Component): void;
  setRunning(): void;
  setSuccess(): void;
  test(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_gametest_framework.GameTestInstance>>;
}
export type TestInstanceBlockEntity = TestInstanceBlockEntityMembers & BlockEntity & BeaconBeamOwner & BoundingBoxRenderable;
export interface TestInstanceBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): TestInstanceBlockEntity;
  export(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_resources.ResourceLocation, arg2: JavaConsumer<j_net_minecraft_network_chat.Component>): boolean;
  getStructurePos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getStructureSize(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_gametest_framework.GameTestInstance>): JavaOptional<j_net_minecraft_core.Vec3i>;
}

/** JVM record net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Data. */
export interface TestInstanceBlockEntity_DataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  errorMessage(): JavaOptional<j_net_minecraft_network_chat.Component>;
  hashCode(): number;
  ignoreEntities(): boolean;
  rotation(): j_net_minecraft_world_level_block.Rotation;
  size(): j_net_minecraft_core.Vec3i;
  status(): TestInstanceBlockEntity_Status;
  test(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_gametest_framework.GameTestInstance>>;
  toString(): string;
  withError(arg0: j_net_minecraft_network_chat.Component): TestInstanceBlockEntity_Data;
  withSize(arg0: j_net_minecraft_core.Vec3i): TestInstanceBlockEntity_Data;
  withStatus(arg0: TestInstanceBlockEntity_Status): TestInstanceBlockEntity_Data;
}
export type TestInstanceBlockEntity_Data = TestInstanceBlockEntity_DataMembers & JavaOpaque<"java.lang.Record">;
export interface TestInstanceBlockEntity_DataStatics {
  new(arg0: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_gametest_framework.GameTestInstance>>, arg1: j_net_minecraft_core.Vec3i, arg2: j_net_minecraft_world_level_block.Rotation, arg3: boolean, arg4: TestInstanceBlockEntity_Status, arg5: JavaOptional<j_net_minecraft_network_chat.Component>): TestInstanceBlockEntity_Data;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TestInstanceBlockEntity_Data]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TestInstanceBlockEntity_Data>;
}

/** Live JVM enum net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Status; constants are host handles, not strings. */
export type TestInstanceBlockEntity_Status = JavaEnum<"net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Status", "CLEARED" | "FINISHED" | "RUNNING"> & TestInstanceBlockEntity_StatusMembers;
export interface TestInstanceBlockEntity_StatusMembers {
  getSerializedName(): string;
}
export interface TestInstanceBlockEntity_StatusStatics {
  readonly CLEARED: TestInstanceBlockEntity_Status;
  readonly FINISHED: TestInstanceBlockEntity_Status;
  readonly RUNNING: TestInstanceBlockEntity_Status;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TestInstanceBlockEntity_Status]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, TestInstanceBlockEntity_Status>;
  byIndex(arg0: number): TestInstanceBlockEntity_Status;
  valueOf(arg0: string): TestInstanceBlockEntity_Status;
  values(): Array<TestInstanceBlockEntity_Status>;
}

/** JVM class net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity. */
export interface TheEndGatewayBlockEntityMembers {
  readonly __javaSupertypes?: readonly [TheEndPortalBlockEntity];
  age: bigint;
  exactTeleport: boolean;
  exitPortal: j_net_minecraft_core.BlockPos | null;
  getCooldownPercent(arg0: number): number;
  getParticleAmount(): number;
  getPortalPosition(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_phys.Vec3 | null;
  getSpawnPercent(arg0: number): number;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  isCoolingDown(): boolean;
  isSpawning(): boolean;
  setExitPosition(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  shouldRenderFace(arg0: j_net_minecraft_core.Direction): boolean;
  triggerEvent(arg0: number, arg1: number): boolean;
}
export type TheEndGatewayBlockEntity = TheEndGatewayBlockEntityMembers & TheEndPortalBlockEntity;
export interface TheEndGatewayBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): TheEndGatewayBlockEntity;
  beamAnimationTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: TheEndGatewayBlockEntity): void;
  portalTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: TheEndGatewayBlockEntity): void;
  triggerCooldown(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: TheEndGatewayBlockEntity): void;
}

/** JVM class net.minecraft.world.level.block.entity.TheEndPortalBlockEntity. */
export interface TheEndPortalBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity];
  shouldRenderFace(arg0: j_net_minecraft_core.Direction): boolean;
}
export type TheEndPortalBlockEntity = TheEndPortalBlockEntityMembers & BlockEntity;
export interface TheEndPortalBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): TheEndPortalBlockEntity;
}

/** JVM interface net.minecraft.world.level.block.entity.TickingBlockEntity. */
export interface TickingBlockEntityMembers {
  getPos(): j_net_minecraft_core.BlockPos;
  getType(): string;
  isRemoved(): boolean;
  tick(): void;
}
export type TickingBlockEntity = TickingBlockEntityMembers;
export interface TickingBlockEntityStatics {
}

/** JVM class net.minecraft.world.level.block.entity.TrappedChestBlockEntity. */
export interface TrappedChestBlockEntityMembers {
  readonly __javaSupertypes?: readonly [ChestBlockEntity];
}
export type TrappedChestBlockEntity = TrappedChestBlockEntityMembers & ChestBlockEntity;
export interface TrappedChestBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): TrappedChestBlockEntity;
}

/** JVM class net.minecraft.world.level.block.entity.TrialSpawnerBlockEntity. */
export interface TrialSpawnerBlockEntityMembers {
  readonly __javaSupertypes?: readonly [BlockEntity, j_net_minecraft_world_level.Spawner, j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawner_StateAccessor];
  getState(): j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawnerState;
  getTrialSpawner(): j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawner;
  getUpdatePacket(): j_net_minecraft_network_protocol_game.ClientboundBlockEntityDataPacket;
  getUpdateTag(arg0: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_nbt.CompoundTag;
  markUpdated(): void;
  setEntityId(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_util.RandomSource): void;
  setState(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawnerState): void;
  readonly trialSpawner: j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawner;
}
export type TrialSpawnerBlockEntity = TrialSpawnerBlockEntityMembers & BlockEntity & j_net_minecraft_world_level.Spawner & j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawner_StateAccessor;
export interface TrialSpawnerBlockEntityStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): TrialSpawnerBlockEntity;
}
